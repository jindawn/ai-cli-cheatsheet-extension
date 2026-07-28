import importlib.util
import hashlib
import json
import logging
import os
import pathlib
import tempfile
import time
import unittest
from unittest import mock


ROOT = pathlib.Path(__file__).resolve().parents[1]
SPEC = importlib.util.spec_from_file_location("native_host", ROOT / "native-host" / "host.py")
host = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(host)


def valid_dataset(tool_id="sample"):
    return {
        "meta": {
            "id": tool_id,
            "name": "Sample Tool",
            "color": "#123ABC",
            "source": "Official docs, 2026-06",
            "sourceUrl": "https://example.com/docs",
            "sources": [{
                "id": "official-docs",
                "title": "Sample Tool documentation",
                "url": "https://example.com/docs",
                "kind": "official-doc",
                "maintainer": "Sample Vendor",
                "evidenceTier": "first-party",
                "lastVerifiedAt": "2026-06-20",
                "resolvedUrl": "https://example.com/docs",
                "pageTitle": "Sample Tool documentation",
                "checkedAt": "2026-06-20",
                "purposes": ["command-existence", "option-semantics", "examples"],
            }],
            "updatedAt": "2026-06-20",
            "contentCheckedAt": "2026-06-20",
            "sourceCheckedAt": "2026-06-20",
            "updatePolicy": "manual-only",
            "coverage": "Complete command list",
            "platforms": ["mac", "windows", "linux"],
            "order": 9,
        },
        "items": [
            {
                "cat": "shortcut",
                "cmd": "Ctrl+K",
                "en": "Open command",
                "zh": "打开命令",
                "keywords": ["命令面板", "打开命令", "快捷操作"],
                "evidenceRefs": [{
                    "sourceId": "official-docs",
                    "claims": ["existence", "semantics"],
                    "locator": "https://example.com/docs#ctrl-k",
                    "checkedAt": "2026-06-20",
                }],
                "evidenceStatus": "verified",
                "examples": [{
                    "scenario": "需要从当前界面快速打开命令面板。",
                    "goal": "打开命令面板并选择下一步操作。",
                    "value": "按 Ctrl+K",
                    "description": "在当前界面使用默认快捷键打开命令面板。",
                    "expected": "命令面板显示可用操作。",
                    "copyable": False,
                    "sourceType": "manual",
                    "authorship": "editorial",
                    "evidenceTier": "first-party",
                    "adaptation": "adapted",
                    "sourceIds": ["official-docs"],
                    "groundingRefs": [{
                        "sourceId": "official-docs",
                        "locator": "https://example.com/docs#ctrl-k",
                        "claims": ["value", "behavior", "expected"],
                    }],
                }],
            }
        ],
        "summary": "updated",
    }


def valid_shell_dataset():
    dataset = valid_dataset("shell")
    dataset["meta"]["name"] = "Shell"
    dataset["meta"]["source"] = "Shell manuals, 2026-06"
    dataset["meta"]["coverage"] = "Shell aggregate parameter table"
    dataset["items"][0].update({
        "cat": "flag",
        "cmd": "type -a",
        "en": "List every location of a command name",
        "zh": "列出命令名的所有来源，排查别名遮蔽",
        "context": "命令来源排查",
        "keywords": ["命令来源", "排错", "PATH"],
        "shell": {
            "layer": "builtin",
            "family": "bash",
            "portability": "bash",
            "topic": "troubleshooting",
        },
        "examples": [{
            "scenario": "需要确认命令是否被别名或函数遮蔽。",
            "goal": "列出 git 命令名的所有解析来源。",
            "value": "type -a git",
            "description": "使用 shell 内建 type 查看命令解析顺序。",
            "expected": "终端列出 git 的所有可用来源。",
            "copyable": True,
            "sourceType": "manual",
            "authorship": "editorial",
            "evidenceTier": "first-party",
            "adaptation": "adapted",
            "sourceIds": ["official-docs"],
            "groundingRefs": [{
                "sourceId": "official-docs",
                "locator": "https://example.com/docs#type",
                "claims": ["value", "behavior", "expected"],
            }],
        }],
    })
    return dataset


class HostValidationTests(unittest.TestCase):
    def test_shared_contract_fixtures_match_python_validator(self):
        fixtures = json.loads((ROOT / "shared" / "contract-fixtures.json").read_text(encoding="utf-8"))
        for value in fixtures["dangerous"]:
            self.assertRegex(value, host.DANGEROUS_EXAMPLE_RE)
        for value in fixtures["safe"]:
            self.assertNotRegex(value, host.DANGEROUS_EXAMPLE_RE)
        for value in fixtures["secrets"]:
            self.assertRegex(value, host.POSSIBLE_SECRET_RE)
        for value in fixtures["nonSecrets"]:
            self.assertNotRegex(value, host.POSSIBLE_SECRET_RE)

    def test_rejects_path_traversal_and_unknown_mode(self):
        with self.assertRaises(host.ValidationError):
            host.validate_tool_id("../secret")
        with self.assertRaises(host.ValidationError):
            host.validate_tool_id("index")
        with self.assertRaises(host.ValidationError):
            host.validate_request(
                {"action": "update_tool", "tool": "safe", "display_name": "Safe", "mode": "write"}
            )

    def test_dataset_assigns_command_independent_id(self):
        first = host.validate_dataset(valid_dataset(), "sample")
        changed = valid_dataset()
        changed["items"][0]["cmd"] = "Ctrl+Shift+K"
        second = host.validate_dataset(changed, "sample")
        self.assertEqual(first["items"][0]["id"], second["items"][0]["id"])

    def test_duplicate_commands_are_deduplicated(self):
        payload = valid_dataset()
        payload["items"].append(dict(payload["items"][0], en="Other action"))
        # 同 cat/cmd/context 的重复条目被静默跳过，仅保留第一条
        deduped = host.validate_dataset(payload, "sample")
        self.assertEqual(len(deduped["items"]), 1)
        # 填上不同的 context 后两条都保留
        payload["items"][0]["context"] = "editor"
        payload["items"][1]["context"] = "terminal"
        both = host.validate_dataset(payload, "sample")
        self.assertEqual(len(both["items"]), 2)

    def test_shell_metadata_is_validated_and_participates_in_deduplication(self):
        payload = valid_shell_dataset()
        payload["items"].append(dict(
            payload["items"][0],
            en="zsh command source lookup",
            shell={
                "layer": "builtin",
                "family": "zsh",
                "portability": "zsh",
                "topic": "troubleshooting",
            },
        ))
        dataset = host.validate_dataset(payload, "shell")
        self.assertEqual(len(dataset["items"]), 2)
        self.assertEqual(dataset["items"][0]["shell"]["family"], "bash")

        payload["items"][1]["shell"]["layer"] = "utility"
        with self.assertRaisesRegex(host.ValidationError, "shell.layer"):
            host.validate_dataset(payload, "shell")

    def test_empty_examples_list_is_treated_as_no_examples(self):
        # Models often emit "examples": [] to mean "no examples" instead of
        # omitting the optional field; that must not fail validation.
        payload = valid_shell_dataset()
        payload["items"][0]["examples"] = []
        cleaned = host.validate_dataset(payload, "shell")
        self.assertNotIn("examples", cleaned["items"][0])

    def test_non_list_examples_is_still_rejected(self):
        payload = valid_shell_dataset()
        payload["items"][0]["examples"] = "oops"
        with self.assertRaisesRegex(host.ValidationError, "examples 必须包含"):
            host.validate_dataset(payload, "shell")

    def test_shell_metadata_is_rejected_for_non_shell_tools(self):
        payload = valid_dataset()
        payload["items"][0]["shell"] = valid_shell_dataset()["items"][0]["shell"]
        with self.assertRaisesRegex(host.ValidationError, "仅允许"):
            host.validate_dataset(payload, "sample")

    def test_shell_invalid_item_id_is_regenerated(self):
        payload = valid_shell_dataset()
        payload["items"][0]["id"] = "x"
        dataset = host.validate_dataset(payload, "shell")
        self.assertRegex(dataset["items"][0]["id"], r"^[a-f0-9]{16}$")

    def test_non_shell_invalid_item_id_is_rejected(self):
        payload = valid_dataset()
        payload["items"][0]["id"] = "x"
        with self.assertRaisesRegex(host.ValidationError, "id 格式非法"):
            host.validate_dataset(payload, "sample")

    def test_extracts_claude_json_wrapper(self):
        wrapper = json.dumps({"result": json.dumps(valid_dataset())})
        self.assertEqual(host.extract_json_output(wrapper)["meta"]["id"], "sample")

    def test_validates_keywords_examples_and_quality_warning(self):
        payload = valid_dataset()
        payload["items"][0].update({
            "keywords": ["命令面板", "打开命令", "快捷操作"],
            "examples": [{
                "value": "Ctrl+K",
                "description": "打开命令面板",
                "copyable": False,
                "sourceType": "ai-derived",
                "sourceIds": ["official-docs"],
                "authorship": "editorial",
                "evidenceTier": "first-party",
                "adaptation": "adapted",
                "scenario": "需要快速打开命令入口时",
                "goal": "打开命令面板",
                "expected": "命令面板显示可用操作",
                "platformValues": {"mac": "Cmd+K", "windows": "Ctrl+K"},
            }],
        })
        dataset = host.validate_dataset(payload, "sample")
        self.assertEqual(
            dataset["items"][0]["keywords"], ["命令面板", "打开命令", "快捷操作"]
        )
        self.assertEqual(dataset["items"][0]["examples"][0]["platformValues"]["mac"], "Cmd+K")
        self.assertEqual(dataset["items"][0]["examples"][0]["sourceType"], "ai-derived")
        self.assertFalse(dataset["qualityWarnings"])

    def test_platform_cmds_empty_object_is_dropped_but_invalid_shapes_still_fail(self):
        payload = valid_dataset()
        payload["items"][0]["platformCmds"] = {}
        dataset = host.validate_dataset(payload, "sample")
        self.assertNotIn("platformCmds", dataset["items"][0])

        payload = valid_dataset()
        payload["items"][0]["platformCmds"] = {"mac": "Cmd+K"}
        dataset = host.validate_dataset(payload, "sample")
        self.assertEqual(dataset["items"][0]["platformCmds"], {"mac": "Cmd+K"})

        payload = valid_dataset()
        payload["items"][0]["platformCmds"] = []
        with self.assertRaisesRegex(host.ValidationError, "platformCmds 必须是非空对象"):
            host.validate_dataset(payload, "sample")

        payload = valid_dataset()
        payload["items"][0]["platformCmds"] = {"solaris": "Ctrl+K"}
        with self.assertRaisesRegex(host.ValidationError, "platformCmds 平台非法"):
            host.validate_dataset(payload, "sample")

    def test_evidenced_example_requires_matching_source_ids(self):
        payload = valid_dataset()
        payload["items"][0]["examples"] = [{
            "value": "Ctrl+K",
            "description": "打开命令面板",
            "sourceType": "official",
            "authorship": "editorial",
            "evidenceTier": "first-party",
            "adaptation": "adapted",
        }]
        dataset = host.validate_dataset(payload, "sample")
        example = dataset["items"][0]["examples"][0]
        self.assertEqual(example["evidenceTier"], "none")
        self.assertEqual(example["sourceType"], "manual")
        self.assertNotIn("sourceIds", example)
        self.assertTrue(any("已降级 1 个缺少有效 sourceIds" in warning for warning in dataset["qualityWarnings"]))

        payload["items"][0]["examples"][0]["sourceIds"] = ["official-docs"]
        dataset = host.validate_dataset(payload, "sample")
        self.assertEqual(
            dataset["items"][0]["examples"][0]["sourceIds"], ["official-docs"]
        )

    def test_mismatched_example_source_ids_are_downgraded(self):
        payload = valid_dataset()
        payload["meta"]["sources"].append({
            "id": "community-note",
            "title": "Community note",
            "url": "https://example.org/note",
            "kind": "community",
            "maintainer": "Community",
            "evidenceTier": "community",
            "lastVerifiedAt": "2026-06-20",
            "resolvedUrl": "https://example.org/note",
            "pageTitle": "Community note",
            "checkedAt": "2026-06-20",
            "purposes": ["examples"],
        })
        payload["items"][0]["examples"] = [{
            "value": "Ctrl+K",
            "description": "打开命令面板",
            "sourceIds": ["community-note"],
            "authorship": "editorial",
            "evidenceTier": "first-party",
            "adaptation": "adapted",
            "sourceUrl": "https://example.org/note#ctrl-k",
        }]
        dataset = host.validate_dataset(payload, "sample")
        example = dataset["items"][0]["examples"][0]
        self.assertEqual(example["evidenceTier"], "none")
        self.assertNotIn("sourceIds", example)
        self.assertEqual(example["sourceUrl"], "https://example.org/note#ctrl-k")
        self.assertTrue(any("已降级 1 个缺少有效 sourceIds" in warning for warning in dataset["qualityWarnings"]))

    def test_official_example_requires_verbatim_precise_source(self):
        payload = valid_dataset()
        payload["items"][0]["examples"] = [{
            "value": "Ctrl+K",
            "description": "官方原例",
            "sourceType": "official",
            "sourceIds": ["official-docs"],
            "authorship": "official",
            "evidenceTier": "first-party",
            "adaptation": "adapted",
        }]
        dataset = host.validate_dataset(payload, "sample")
        example = dataset["items"][0]["examples"][0]
        self.assertEqual(example["authorship"], "editorial")
        self.assertEqual(example["adaptation"], "adapted")
        self.assertEqual(example["evidenceTier"], "none")
        self.assertEqual(example["sourceType"], "manual")

        payload["items"][0]["examples"][0].update({
            "authorship": "official",
            "evidenceTier": "first-party",
            "adaptation": "verbatim",
            "sourceUrl": "https://example.com/docs#ctrl-k",
        })
        dataset = host.validate_dataset(payload, "sample")
        self.assertEqual(
            dataset["items"][0]["examples"][0]["authorship"], "official"
        )

    def test_shell_example_evidence_remains_strict(self):
        payload = valid_shell_dataset()
        payload["items"][0]["examples"] = [{
            "value": "type -a claude",
            "description": "列出 claude 命令来源",
            "authorship": "editorial",
            "evidenceTier": "first-party",
            "adaptation": "adapted",
        }]
        with self.assertRaisesRegex(host.ValidationError, "必须提供 sourceIds"):
            host.validate_dataset(payload, "shell")

    def test_rejects_invalid_example_structure(self):
        payload = valid_dataset()
        payload["items"][0]["examples"] = [{"value": "", "description": "空命令"}]
        with self.assertRaisesRegex(host.ValidationError, "value"):
            host.validate_dataset(payload, "sample")

    def test_verified_requires_locator_and_both_core_claims(self):
        missing_locator = valid_dataset()
        missing_locator["items"][0]["evidenceRefs"][0]["locator"] = ""
        with self.assertRaisesRegex(host.ValidationError, "locator"):
            host.validate_dataset(missing_locator, "sample")

        missing_semantics = valid_dataset()
        missing_semantics["items"][0]["evidenceRefs"][0]["claims"] = ["existence"]
        with self.assertRaisesRegex(host.ValidationError, "推导为 partial"):
            host.validate_dataset(missing_semantics, "sample")

    def test_broad_or_single_claim_evidence_is_partial(self):
        payload = valid_dataset()
        payload["items"][0]["evidenceRefs"][0].update({
            "claims": ["existence"],
            "locator": "https://example.com/docs（页面内检索 Ctrl+K）",
        })
        payload["items"][0]["evidenceStatus"] = "partial"
        dataset = host.validate_dataset(payload, "sample")
        self.assertEqual(dataset["items"][0]["evidenceStatus"], "partial")

    def test_community_source_cannot_prove_command_semantics(self):
        payload = valid_dataset()
        payload["meta"]["sources"][0].update({
            "kind": "community",
            "evidenceTier": "community",
        })
        with self.assertRaisesRegex(host.ValidationError, "社区来源不能证明"):
            host.validate_dataset(payload, "sample")

    def test_rejects_unregistered_readthedocs_authoritative_source(self):
        payload = valid_dataset()
        payload["meta"]["sources"][0].update({
            "url": "https://unknown-project.readthedocs.io/en/latest/",
            "kind": "authoritative-reference",
            "evidenceTier": "authoritative-community",
        })
        with self.assertRaisesRegex(host.ValidationError, "来源登记"):
            host.validate_dataset(payload, "sample")

    def test_web_source_requires_resolved_url_title_and_check_date(self):
        for field in ("resolvedUrl", "pageTitle", "checkedAt"):
            payload = valid_dataset()
            payload["meta"]["sources"][0].pop(field)
            with self.subTest(field=field), self.assertRaisesRegex(
                host.ValidationError, "resolvedUrl、pageTitle 和 checkedAt"
            ):
                host.validate_dataset(payload, "sample")

    def test_accepts_registered_official_repository(self):
        payload = valid_dataset("codex")
        payload["meta"]["sources"][0].update({
            "id": "codex-repo",
            "registryId": "openai-codex-repository",
            "url": "https://github.com/openai/codex/releases",
            "kind": "official-repository",
            "resolvedUrl": "https://github.com/openai/codex/releases",
            "pageTitle": "Releases · openai/codex",
            "checkedAt": "2026-06-21",
        })
        payload["items"][0]["evidenceRefs"][0].update({
            "sourceId": "codex-repo",
            "locator": "https://github.com/openai/codex/releases",
        })
        dataset = host.validate_dataset(payload, "codex")
        self.assertEqual(dataset["meta"]["sources"][0]["kind"], "official-repository")

    def test_accepts_unregistered_official_repository_with_warning(self):
        payload = valid_dataset("iterm2")
        payload["meta"]["sources"][0].update({
            "id": "iterm2-repo",
            "registryId": "made-up-iterm2-repo",
            "title": "iTerm2 repository",
            "url": "https://github.com/gnachman/iTerm2",
            "kind": "official-repository",
            "maintainer": "iTerm2",
            "resolvedUrl": "https://github.com/gnachman/iTerm2",
            "pageTitle": "GitHub - gnachman/iTerm2",
            "checkedAt": "2026-06-28",
        })
        payload["items"][0]["evidenceRefs"][0].update({
            "sourceId": "iterm2-repo",
            "locator": "https://github.com/gnachman/iTerm2",
        })
        dataset = host.validate_dataset(payload, "iterm2")
        source = dataset["meta"]["sources"][0]
        self.assertEqual(source["kind"], "official-repository")
        self.assertNotIn("registryId", source)
        self.assertTrue(any("未登记官方仓库来源" in warning for warning in dataset["qualityWarnings"]))

    def test_warns_when_example_coverage_is_low(self):
        payload = valid_dataset()
        payload["items"] = [
            dict(payload["items"][0], cmd=f"Ctrl+{index}", en=f"Command {index}")
            for index in range(6)
        ]
        for item in payload["items"][1:]:
            item.pop("examples", None)
        dataset = host.validate_dataset(payload, "sample")
        self.assertIn("示例覆盖不足", dataset["qualityWarnings"][0])

    def test_dangerous_example_without_warning_gets_fallback(self):
        payload = valid_dataset()
        payload["items"][0].update({
            "keywords": ["删除", "清理", "目录"],
            "examples": [{
                "value": "rm -rf ./example",
                "description": "删除目录",
                "sourceType": "ai-derived",
                "authorship": "generated",
                "evidenceTier": "none",
                "adaptation": "scenario-derived",
            }],
        })
        dataset = host.validate_dataset(payload, "sample")
        example = dataset["items"][0]["examples"][0]
        self.assertEqual(example["warning"], host.DEFAULT_DANGER_WARNING)
        self.assertFalse(example["copyable"])
        self.assertRegex(example["caveat"], host.SAFE_PREVIEW_RE)

    def test_dangerous_platform_value_gets_warning_fallback(self):
        # 危险命令只出现在 platformValues 某个平台值时，也必须与 value 命中同样降级：
        # 补 warning、禁复制、补安全预览 caveat。
        payload = valid_dataset()
        payload["items"][0].update({
            "keywords": ["删除", "清理", "目录"],
            "examples": [{
                "value": "Remove-Item -Recurse .\\example",
                "description": "删除目录",
                "sourceType": "ai-derived",
                "authorship": "generated",
                "evidenceTier": "none",
                "adaptation": "scenario-derived",
                "platformValues": {"linux": "rm -rf ./example"},
            }],
        })
        dataset = host.validate_dataset(payload, "sample")
        example = dataset["items"][0]["examples"][0]
        self.assertEqual(example["warning"], host.DEFAULT_DANGER_WARNING)
        self.assertFalse(example["copyable"])
        self.assertRegex(example["caveat"], host.SAFE_PREVIEW_RE)

    def test_safe_platform_values_stay_copyable(self):
        payload = valid_dataset()
        payload["items"][0].update({
            "keywords": ["列出", "查看", "目录"],
            "examples": [{
                "value": "ls -la",
                "description": "列出目录内容",
                "sourceType": "ai-derived",
                "authorship": "generated",
                "evidenceTier": "none",
                "adaptation": "scenario-derived",
                "platformValues": {"windows": "dir /a"},
            }],
        })
        dataset = host.validate_dataset(payload, "sample")
        example = dataset["items"][0]["examples"][0]
        self.assertNotIn("warning", example)
        self.assertNotEqual(example.get("copyable"), False)

    def test_shell_dangerous_example_gets_warning_fallback(self):
        payload = valid_shell_dataset()
        payload["items"][0]["examples"] = [{
            "value": "rm -rf ./example",
            "description": "删除目录",
            "sourceType": "ai-derived",
            "authorship": "generated",
            "evidenceTier": "none",
            "adaptation": "scenario-derived",
        }]
        dataset = host.validate_dataset(payload, "shell")
        example = dataset["items"][0]["examples"][0]
        self.assertEqual(example["warning"], host.SHELL_DEFAULT_DANGER_WARNING)
        self.assertFalse(example["copyable"])

    def test_newly_covered_dangerous_examples_get_warning_fallback(self):
        for value in (
            "dd if=/dev/zero of=/dev/sda",
            "mkfs.ext4 /dev/sdb",
            ":(){ :|:& };:",
            "shutdown -h now",
        ):
            payload = valid_dataset()
            payload["items"][0].update({
                "keywords": ["危险", "操作", "示例"],
                "examples": [{
                    "value": value,
                    "description": "高风险操作",
                    "sourceType": "ai-derived",
                    "authorship": "generated",
                    "evidenceTier": "none",
                    "adaptation": "scenario-derived",
                }],
            })
            dataset = host.validate_dataset(payload, "sample")
            example = dataset["items"][0]["examples"][0]
            self.assertEqual(example["warning"], host.DEFAULT_DANGER_WARNING)
            self.assertFalse(example["copyable"])

    def test_docker_secret_command_is_not_treated_as_leaked_secret(self):
        payload = valid_dataset()
        payload["items"][0].update({
            "keywords": ["secret", "docker", "配置"],
            "examples": [{
                "value": "docker secret create app_secret ./secret.txt",
                "description": "把本地文件内容注册为 Docker secret",
                "sourceType": "ai-derived",
                "authorship": "generated",
                "evidenceTier": "none",
                "adaptation": "scenario-derived",
            }],
        })
        dataset = host.validate_dataset(payload, "sample")
        self.assertEqual(
            dataset["items"][0]["examples"][0]["value"],
            "docker secret create app_secret ./secret.txt",
        )

    def test_generated_secret_assignments_are_redacted_before_validation(self):
        payload = valid_dataset()
        payload["items"][0].update({
            "keywords": ["token", "环境变量", "脱敏"],
            "examples": [{
                "value": "docker run -e TOKEN=abcdef0123456789 nginx",
                "description": "用占位 token 演示环境变量传递",
                "sourceType": "ai-derived",
                "authorship": "generated",
                "evidenceTier": "none",
                "adaptation": "scenario-derived",
                "platformValues": {
                    "mac": "docker run -e api_key=abcdef0123456789 nginx",
                },
            }],
        })
        dataset = host.validate_dataset(payload, "sample")
        example = dataset["items"][0]["examples"][0]
        self.assertEqual(example["value"], "docker run -e TOKEN=<TOKEN> nginx")
        self.assertEqual(example["platformValues"]["mac"], "docker run -e api_key=<TOKEN> nginx")

    def test_empty_optional_generated_containers_are_dropped(self):
        payload = valid_dataset()
        payload["items"][0].update({
            "keywords": [],
            "platforms": [],
            "platformCmds": {},
            "examples": [{
                "value": "Ctrl+K",
                "description": "打开命令面板",
                "sourceType": "ai-derived",
                "authorship": "generated",
                "evidenceTier": "none",
                "adaptation": "scenario-derived",
                "platforms": [],
                "platformValues": {},
            }],
        })
        dataset = host.validate_dataset(payload, "sample")
        item = dataset["items"][0]
        self.assertNotIn("keywords", item)
        self.assertNotIn("platforms", item)
        self.assertNotIn("platformCmds", item)
        self.assertNotIn("platforms", item["examples"][0])
        self.assertNotIn("platformValues", item["examples"][0])

    def test_allows_incidental_dd_substring(self):
        self.assertIsNone(host.DANGEROUS_EXAMPLE_RE.search("npm run dd-report"))
        self.assertIsNone(host.DANGEROUS_EXAMPLE_RE.search("echo done >> run.log"))


class HostFileTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.data_dir = pathlib.Path(self.temp.name) / "data"
        self.data_dir.mkdir()
        self.pending_dir = pathlib.Path(self.temp.name) / ".aicli-pending"
        self.patchers = [
            mock.patch.object(host, "DATA_DIR", str(self.data_dir)),
            mock.patch.object(host, "DATA_INDEX", str(self.data_dir / "index.js")),
            mock.patch.object(host, "PENDING_DIR", str(self.pending_dir)),
            mock.patch.object(host, "official_inventory_path", return_value=str(pathlib.Path(self.temp.name) / "sample-inventory.json")),
            mock.patch.object(host, "scenario_review_path", return_value=str(pathlib.Path(self.temp.name) / "sample-review.json")),
            mock.patch.object(host, "fetch_official_inventory", return_value={
                "toolId": "sample",
                "scope": "all-command-entrypoints",
                "checkedAt": "2026-07-13",
                "sourceIds": ["official-docs"],
                "adapter": {"id": "sample-fixed", "kind": "fixed-official-component-union", "version": 1},
                "closure": {"status": "closed", "entryCount": 1, "components": ["sample"], "platforms": [], "proof": "test"},
                "entries": [{
                    "command": "sample", "aliases": [], "description": "Sample",
                    "usage": "sample", "url": "https://example.com/docs/sample",
                }],
            }),
            mock.patch.object(host, "official_inventory_missing", return_value=[]),
        ]
        for patcher in self.patchers:
            patcher.start()

    def tearDown(self):
        for patcher in reversed(self.patchers):
            patcher.stop()
        self.temp.cleanup()

    @staticmethod
    def ready_claude_status():
        """Keep direct Claude subprocess tests independent of the CI image."""
        return {
            "id": "claude",
            "displayName": "Claude Code",
            "installed": True,
            "loginState": "logged-in",
            "ready": True,
        }

    def test_atomic_write_preserves_old_file_when_replace_fails(self):
        target = self.data_dir / "sample.js"
        target.write_text("old", encoding="utf-8")
        with mock.patch.object(host.os, "replace", side_effect=OSError("failed")):
            with self.assertRaises(OSError):
                host.atomic_write(str(target), "new")
        self.assertEqual(target.read_text(encoding="utf-8"), "old")

    def test_version_unchanged_still_checks_official_inventory(self):
        dataset = valid_dataset()
        dataset["meta"].update({"updatePolicy": "version-driven", "verifiedVersion": "1.2.3"})
        (self.data_dir / "sample.js").write_text(host.render_data_file(dataset), encoding="utf-8")
        signal = {"policy": "version-driven", "signalType": "local-version", "marker": "1.2.3", "detail": "sample --version"}
        inventory = host.fetch_official_inventory.return_value
        with mock.patch.object(host, "fetch_official_inventory", return_value=inventory) as inventory_probe, mock.patch.object(
            host, "detect_update_signal", return_value=signal
        ), mock.patch.object(host, "run_claude_query") as generate:
            result = host.preview_update("sample", "Sample Tool")
        inventory_probe.assert_called_once_with("sample")
        generate.assert_not_called()
        self.assertEqual(result["officialCoverage"]["status"], "complete")

    def _stage_pending(self, token, tool_id, age_seconds=0):
        path = host.pending_path(token)
        host.atomic_write(path, json.dumps({"token": token, "toolId": tool_id}))
        if age_seconds:
            old = time.time() - age_seconds
            os.utime(path, (old, old))
        return path

    def test_prune_pending_files_drops_superseded_and_stale(self):
        keep = "0" * 32
        superseded = "1" * 32
        other_fresh = "2" * 32
        stale = "3" * 32
        self._stage_pending(keep, "sample")
        self._stage_pending(superseded, "sample")
        self._stage_pending(other_fresh, "other")
        self._stage_pending(stale, "other", age_seconds=host.PENDING_MAX_AGE_SECONDS + 60)

        host.prune_pending_files(current_tool_id="sample", keep_token=keep)

        self.assertTrue(os.path.exists(host.pending_path(keep)), "new pending must be kept")
        self.assertFalse(os.path.exists(host.pending_path(superseded)), "superseded same-tool pending removed")
        self.assertTrue(os.path.exists(host.pending_path(other_fresh)), "fresh other-tool pending kept")
        self.assertFalse(os.path.exists(host.pending_path(stale)), "stale pending removed")

    def test_prune_pending_files_tolerates_corrupt_file(self):
        good = "4" * 32
        corrupt = "5" * 32
        self._stage_pending(good, "sample")
        host.atomic_write(host.pending_path(corrupt), "{ not json")
        host.prune_pending_files(current_tool_id="sample", keep_token=good)
        self.assertTrue(os.path.exists(host.pending_path(corrupt)), "fresh but corrupt file is left intact, not crashed on")

    def test_remove_updates_index(self):
        (self.data_dir / "sample.js").write_text("sample", encoding="utf-8")
        (self.data_dir / "other.js").write_text("other", encoding="utf-8")
        result = host.remove_tool("sample")
        self.assertTrue(result["changed"])
        self.assertFalse((self.data_dir / "sample.js").exists())
        self.assertIn('"other"', (self.data_dir / "index.js").read_text(encoding="utf-8"))

    def test_remove_rolls_back_when_index_write_fails(self):
        target = self.data_dir / "sample.js"
        target.write_text("sample", encoding="utf-8")
        with mock.patch.object(host, "write_data_index", side_effect=OSError("failed")):
            with self.assertRaises(OSError):
                host.remove_tool("sample")
        self.assertEqual(target.read_text(encoding="utf-8"), "sample")

    def test_remove_rejects_builtin_tool(self):
        dataset = valid_dataset()
        dataset["meta"]["builtIn"] = True
        target = self.data_dir / "sample.js"
        target.write_text(host.render_data_file(dataset), encoding="utf-8")
        with self.assertRaisesRegex(host.ValidationError, "内置工具不可删除"):
            host.remove_tool("sample")
        self.assertTrue(target.exists())

    def test_load_existing_dataset_does_not_require_node(self):
        dataset = valid_dataset()
        target = self.data_dir / "sample.js"
        target.write_text(host.render_data_file(dataset), encoding="utf-8")
        with mock.patch.dict(os.environ, {"PATH": ""}, clear=False), mock.patch.object(
            host.subprocess, "run", side_effect=AssertionError("Node must not run")
        ):
            loaded = host.load_existing_dataset("sample")
        self.assertEqual(loaded["meta"]["id"], "sample")

    def test_data_parser_rejects_executable_or_malformed_content(self):
        valid = host.render_data_file(valid_dataset())
        cases = {
            "固定文件头": valid.replace(
                "// Generated from validated structured data. Manual edits must follow data/SCHEMA.md.\n",
                "",
                1,
            ),
            "工具 ID 不匹配": valid.replace(
                'window.CHEATSHEET_DATA["sample"]',
                'window.CHEATSHEET_DATA["other"]',
                1,
            ),
            "数据 JSON": valid.replace('"items": [', '"items": [ invalid ', 1),
            "附加内容": valid + "globalThis.pwned = true;\n",
        }
        for expected, content in cases.items():
            with self.subTest(expected=expected), self.assertRaisesRegex(
                host.ValidationError, expected
            ):
                host.parse_data_file(content, "sample")

    def test_parser_accepts_every_builtin_data_file_without_node(self):
        for data_path in sorted((ROOT / "data").glob("*.js")):
            if data_path.name == "index.js":
                continue
            tool_id = data_path.stem
            with self.subTest(tool=tool_id):
                parsed = host.parse_data_file(
                    data_path.read_text(encoding="utf-8"), tool_id
                )
                self.assertEqual(parsed["meta"]["id"], tool_id)

    def test_manual_only_update_checks_inventory_without_model_when_complete(self):
        dataset = valid_dataset()
        target = self.data_dir / "sample.js"
        target.write_text(host.render_data_file(dataset), encoding="utf-8")
        with mock.patch.object(host, "run_claude_query") as generate:
            result = host.preview_update("sample", "Sample Tool")
        generate.assert_not_called()
        self.assertTrue(result["changed"])
        self.assertEqual(result["officialCoverage"]["status"], "complete")

    def test_deep_check_update_of_shell_uses_aggregate_pipeline(self):
        # A force-deep-check update of Shell must regenerate via the batch
        # aggregate (interpreter-only scope), never the generic single-prompt
        # path, which would clobber the curated built-in.
        dataset = host.validate_dataset(valid_shell_dataset(), "shell")
        (self.data_dir / "shell.js").write_text(host.render_data_file(dataset), encoding="utf-8")
        new_dataset = host.validate_dataset(valid_shell_dataset(), "shell")
        with mock.patch.object(
            host, "run_shell_aggregate_query", return_value=new_dataset
        ) as aggregate, mock.patch.object(host, "run_claude_query") as generic:
            host.preview_update("shell", "Shell", deep_check=True)
        aggregate.assert_called_once()
        generic.assert_not_called()

    def test_matching_local_version_skips_model(self):
        dataset = valid_dataset()
        dataset["meta"].update({
            "updatePolicy": "version-driven",
            "verifiedVersion": "1.2.3",
        })
        target = self.data_dir / "sample.js"
        target.write_text(host.render_data_file(dataset), encoding="utf-8")
        signal = {
            "policy": "version-driven",
            "signalType": "local-version",
            "marker": "1.2.3",
            "detail": "sample --version",
        }
        with mock.patch.object(host, "detect_update_signal", return_value=signal), mock.patch.object(
            host, "run_claude_query"
        ) as generate:
            result = host.preview_update("sample", "Sample Tool")
        generate.assert_not_called()
        self.assertTrue(result["changed"], "first inventory check should stage coverage metadata")
        self.assertEqual(result["updateSignal"]["marker"], "1.2.3")

    def test_version_change_reuses_signal_for_generation(self):
        old_dataset = valid_dataset()
        old_dataset["meta"].update({
            "updatePolicy": "version-driven",
            "verifiedVersion": "1.2.3",
        })
        target = self.data_dir / "sample.js"
        target.write_text(host.render_data_file(old_dataset), encoding="utf-8")
        new_dataset = valid_dataset()
        new_dataset["meta"].update({
            "updatePolicy": "version-driven",
            "verifiedVersion": "1.3.0",
        })
        signal = {
            "policy": "version-driven",
            "signalType": "local-version",
            "marker": "1.3.0",
            "detail": "sample --version",
        }
        with mock.patch.object(host, "detect_update_signal", return_value=signal), mock.patch.object(
            host, "run_claude_query", return_value=host.validate_dataset(new_dataset, "sample")
        ) as generate:
            result = host.preview_update("sample", "Sample Tool")
        self.assertTrue(result["changed"])
        self.assertEqual(result["updateSignal"]["marker"], "1.3.0")
        self.assertTrue(generate.call_args.args[3])
        self.assertEqual(generate.call_args.kwargs["update_context"]["marker"], signal["marker"])
        self.assertEqual(generate.call_args.kwargs["update_context"]["officialMissing"], [])

    def test_uninstalled_version_driven_tool_falls_back_to_official_release(self):
        dataset = valid_dataset()
        dataset["meta"]["updatePolicy"] = "version-driven"
        local = mock.MagicMock(return_value=None)
        release = mock.MagicMock(return_value={
            "policy": "version-driven",
            "signalType": "official-release",
            "marker": "2.0.0",
            "detail": "GitHub Release vendor/tool",
        })
        with mock.patch.object(host, "detect_local_version", local), mock.patch.object(
            host, "detect_official_release", release
        ):
            signal = host.detect_update_signal("sample", dataset)
        local.assert_called_once_with("sample")
        release.assert_called_once_with(dataset)
        self.assertEqual(signal["marker"], "2.0.0")

    def test_only_definitive_source_failure_forces_rediscovery(self):
        source = {"kind": "official-doc", "url": "https://example.com/docs"}
        not_found = host.urllib.error.HTTPError(
            source["url"], 404, "Not Found", hdrs=None, fp=None
        )
        with mock.patch.object(host.urllib.request, "urlopen", side_effect=not_found):
            self.assertTrue(host.has_definitively_missing_sources([source]))
        if not_found.fp:
            not_found.close()
        with mock.patch.object(
            host.urllib.request, "urlopen", side_effect=host.urllib.error.URLError("offline")
        ):
            self.assertFalse(host.has_definitively_missing_sources([source]))

    def test_add_uses_read_only_claude_and_writes_validated_files(self):
        discovery = {"sources": valid_dataset()["meta"]["sources"], "conflicts": [], "notes": []}
        stdout = json.dumps({"result": json.dumps(valid_dataset())})
        mock_proc = mock.MagicMock()
        mock_proc.communicate.side_effect = [
            (json.dumps({"result": json.dumps(discovery)}), ""),
            (stdout, ""),
        ]
        mock_proc.returncode = 0
        # 强制 _call_api_direct 返回 None，走 claude 子进程回退路径（不依赖 CI 是否设置 token）
        with mock.patch.object(host, "_call_api_direct", return_value=None), mock.patch.object(
            host, "CLAUDE_BIN", "/usr/bin/claude"
        ), mock.patch.object(
            host, "provider_status", return_value=self.ready_claude_status()
        ), mock.patch.object(host, "PROJECT_DIR", self.temp.name), mock.patch.object(
            host.subprocess, "Popen", return_value=mock_proc
        ) as popen:
            result = host.add_tool("sample", "Sample Tool")
        self.assertTrue(result["changed"])
        command = popen.call_args.args[0]
        self.assertIn("plan", command)
        self.assertIn("--tools", command)
        self.assertNotIn("acceptEdits", command)
        self.assertTrue(result["pendingToken"])
        self.assertFalse((self.data_dir / "sample.js").exists())
        host.apply_update(result["pendingToken"])
        self.assertTrue((self.data_dir / "sample.js").exists())
        self.assertTrue((self.data_dir / "index.js").exists())

    def test_add_shell_uses_aggregate_pipeline(self):
        dataset = host.validate_dataset(valid_shell_dataset(), "shell")
        with mock.patch.object(host, "run_shell_aggregate_query", return_value=dataset) as aggregate, mock.patch.object(
            host, "run_claude_query"
        ) as normal:
            result = host.add_tool("terminal", "Terminal")
        self.assertTrue(result["changed"])
        aggregate.assert_called_once()
        normal.assert_not_called()
        self.assertTrue(result["pendingToken"])
        self.assertFalse((self.data_dir / "shell.js").exists())

    def test_shell_batch_prompt_requires_warning_and_noncopyable_dangerous_examples(self):
        prompt = host.build_shell_batch_prompt(
            {"sources": valid_shell_dataset()["meta"]["sources"], "conflicts": [], "notes": []},
            host.SHELL_BATCHES[-1],
            True,
        )
        self.assertIn("warning", prompt)
        self.assertIn("copyable=false", prompt)
        self.assertIn("dry-run", prompt)
        self.assertIn(f"最多输出 {host.SHELL_BATCH_MAX_ITEMS} 个 items", prompt)
        self.assertIn("最多 1 个 example", prompt)

    def test_shell_batch_prompt_respects_max_items_override(self):
        discovered = {
            "sources": valid_shell_dataset()["meta"]["sources"],
            "conflicts": [],
            "notes": [],
        }
        prompt = host.build_shell_batch_prompt(
            discovered, host.SHELL_BATCHES[-1], True, max_items=4
        )
        self.assertIn("最多输出 4 个 items", prompt)

    def test_shell_scope_is_interpreter_proper_not_external_utilities(self):
        # Shell == sh/POSIX/bash/zsh interpreter and terminal environment.
        # The old utility layers (gnu-utility, posix-utility, ...) must be gone.
        for stale in ("gnu-utility", "posix-utility", "bsd-utility", "external-tool"):
            self.assertNotIn(stale, host.SHELL_LAYERS)
        self.assertEqual(host.SHELL_PORTABILITIES, {"posix", "bash", "zsh", "cross-platform"})
        # Every batch topic must be a declared shell topic (kept in sync).
        for batch in host.SHELL_BATCHES:
            for topic in batch["topics"]:
                self.assertIn(topic, host.SHELL_TOPICS, f"{batch['id']}:{topic}")

    def test_shell_coverage_is_broad_enough_for_a_full_reference(self):
        # Shell should yield a rich reference (~120+ items), driven by many fine
        # batches and a higher per-batch cap, not 9 batches capped at 12.
        self.assertGreaterEqual(len(host.SHELL_BATCHES), 14)
        self.assertGreaterEqual(host.SHELL_BATCH_MAX_ITEMS, 16)
        # Batch ids are unique.
        ids = [batch["id"] for batch in host.SHELL_BATCHES]
        self.assertEqual(len(ids), len(set(ids)))

    def test_shell_batch_prompt_sets_a_target_floor(self):
        discovered = {
            "sources": valid_shell_dataset()["meta"]["sources"],
            "conflicts": [],
            "notes": [],
        }
        prompt = host.build_shell_batch_prompt(discovered, host.SHELL_BATCHES[0], True)
        # A target range (not just a ceiling) is what pushes the model to fill batches.
        self.assertIn("目标 10", prompt)
        self.assertIn("常用全集", prompt)

    def test_shell_batch_prompt_requests_one_item_per_atomic_element(self):
        # Shortcuts/operators/keywords/env-vars get consolidated otherwise, which
        # is why those topics came out thin; require one item per listed element.
        discovered = {
            "sources": valid_shell_dataset()["meta"]["sources"],
            "conflicts": [],
            "notes": [],
        }
        prompt = host.build_shell_batch_prompt(discovered, host.SHELL_BATCHES[0], True)
        self.assertIn("各生成一个独立 item", prompt)

    def test_shell_batch_prompt_excludes_external_clis(self):
        discovered = {
            "sources": valid_shell_dataset()["meta"]["sources"],
            "conflicts": [],
            "notes": [],
        }
        prompt = host.build_shell_batch_prompt(discovered, host.SHELL_BATCHES[0], True)
        self.assertIn("外部 CLI 工具不属于 Shell", prompt)
        for external in ("git", "docker", "npm", "grep", "claude"):
            self.assertIn(external, prompt)
        self.assertIn("posix-sh、bash、zsh", prompt)

    def test_shell_aggregate_coverage_states_external_tools_excluded(self):
        with mock.patch.object(host, "SHELL_BATCHES", [host.SHELL_BATCHES[0]]), mock.patch.object(
            host, "_has_api_token", return_value=True
        ), mock.patch.object(
            host, "build_shell_batch_prompt", return_value="PROMPT"
        ), mock.patch.object(
            host, "_run_generation_prompt", return_value=valid_shell_dataset()
        ), mock.patch.object(
            host, "_demote_quasi_official", side_effect=lambda dataset: dataset
        ):
            dataset = host.run_shell_aggregate_query(prefer_web=False)
        self.assertIn("不归入 Shell", dataset["meta"]["coverage"])

    def test_prune_unused_sources_drops_unreferenced_keeps_used(self):
        dataset = host.validate_dataset(valid_shell_dataset(), "shell")
        extra = dict(dataset["meta"]["sources"][0], id="unused-extra")
        dataset["meta"]["sources"] = [*dataset["meta"]["sources"], extra]
        host.prune_unused_sources(dataset)
        ids = [source["id"] for source in dataset["meta"]["sources"]]
        self.assertNotIn("unused-extra", ids)
        self.assertTrue(ids)  # never pruned to empty

    def test_shell_danger_fallback_adds_safe_caveat_even_with_warning(self):
        example = {"value": 'rm -f "$TMP"', "caveat": "注意引号嵌套"}
        host.apply_shell_danger_fallback(example, "模型给的警告")
        self.assertRegex(example["caveat"], host.SHELL_SAFE_PREVIEW_RE)

    def test_shell_danger_fallback_sets_warning_and_caveat_when_missing(self):
        example = {"value": "dd if=/dev/zero of=/dev/disk2"}
        warning = host.apply_shell_danger_fallback(example, "")
        self.assertTrue(warning)
        self.assertFalse(example["copyable"])
        self.assertRegex(example.get("caveat", ""), host.SHELL_SAFE_PREVIEW_RE)

    def test_shell_danger_fallback_ignores_safe_examples(self):
        example = {"value": "cd /tmp", "caveat": "原样保留"}
        host.apply_shell_danger_fallback(example, "")
        self.assertEqual(example["caveat"], "原样保留")
        self.assertNotIn("warning", example)

    def test_shell_merge_prefers_bash_manual_as_primary_source(self):
        def source(sid, url):
            return {
                "id": sid, "title": sid, "url": url, "kind": "official-doc",
                "maintainer": "GNU Project", "evidenceTier": "first-party",
                "lastVerifiedAt": "2026-06-20", "resolvedUrl": url,
                "pageTitle": sid, "checkedAt": "2026-06-20",
                "purposes": ["command-existence"],
            }
        base = host.validate_dataset(valid_shell_dataset(), "shell")
        # Coreutils listed first; bash manual must still win as primary.
        base["meta"]["sources"] = [
            source("gnu-manuals", "https://www.gnu.org/software/coreutils/manual/"),
            source("gnu-bash-manual", "https://www.gnu.org/software/bash/manual/"),
            *base["meta"]["sources"],
        ]
        merged = host.merge_shell_datasets([base])
        self.assertEqual(merged["meta"]["sourceUrl"], "https://www.gnu.org/software/bash/manual/")

    def test_shell_aggregate_retries_truncated_batch_with_smaller_budget(self):
        captured_budgets = []

        def spy_build(discovered, batch, web_enabled, max_items=host.SHELL_BATCH_MAX_ITEMS):
            captured_budgets.append(max_items)
            return "PROMPT"

        gen = mock.Mock(
            side_effect=[host.TruncatedGenerationError("截断"), valid_shell_dataset()]
        )
        with mock.patch.object(host, "SHELL_BATCHES", [host.SHELL_BATCHES[0]]), mock.patch.object(
            host, "_has_api_token", return_value=True
        ), mock.patch.object(
            host, "build_shell_batch_prompt", side_effect=spy_build
        ), mock.patch.object(
            host, "_run_generation_prompt", gen
        ), mock.patch.object(
            host, "_demote_quasi_official", side_effect=lambda dataset: dataset
        ):
            dataset = host.run_shell_aggregate_query(prefer_web=False)
        self.assertEqual(gen.call_count, 2)
        self.assertEqual(captured_budgets[0], host.SHELL_BATCH_MAX_ITEMS)
        self.assertLess(captured_budgets[1], captured_budgets[0])
        self.assertTrue(dataset["items"])

    def test_validate_shell_batch_tolerant_drops_invalid_item(self):
        payload = valid_shell_dataset()
        bad = dict(
            payload["items"][0],
            en="Item with bad portability",
            shell={
                "layer": "builtin",
                "family": "bash",
                "portability": "totally-invalid",
                "topic": "builtins",
            },
        )
        payload["items"].append(bad)
        dataset, dropped = host.validate_shell_batch_tolerant(payload)
        self.assertEqual(dropped, 1)
        self.assertEqual(len(dataset["items"]), 1)
        self.assertEqual(dataset["items"][0]["en"], "List every location of a command name")

    def test_validate_shell_batch_tolerant_raises_when_all_items_invalid(self):
        payload = valid_shell_dataset()
        payload["items"][0]["shell"]["portability"] = "totally-invalid"
        with self.assertRaises(host.ValidationError):
            host.validate_shell_batch_tolerant(payload)

    def test_shell_aggregate_skips_invalid_items_and_warns(self):
        batch = valid_shell_dataset()
        batch["items"].append(dict(
            batch["items"][0],
            en="Doomed item",
            shell={
                "layer": "builtin",
                "family": "zsh",
                "portability": "totally-invalid",
                "topic": "builtins",
            },
        ))
        with mock.patch.object(host, "SHELL_BATCHES", [host.SHELL_BATCHES[0]]), mock.patch.object(
            host, "_has_api_token", return_value=True
        ), mock.patch.object(
            host, "build_shell_batch_prompt", return_value="PROMPT"
        ), mock.patch.object(
            host, "_run_generation_prompt", return_value=batch
        ), mock.patch.object(
            host, "_demote_quasi_official", side_effect=lambda dataset: dataset
        ):
            dataset = host.run_shell_aggregate_query(prefer_web=False)
        self.assertEqual(len(dataset["items"]), 1)
        self.assertTrue(any("跳过" in warning for warning in dataset.get("qualityWarnings", [])))

    def test_shell_aggregate_raises_only_when_all_batches_fail(self):
        # A single batch that never yields data means the whole aggregate has no
        # data, so it fails — but with a clear "all batches failed" message.
        with mock.patch.object(host, "SHELL_BATCHES", [host.SHELL_BATCHES[0]]), mock.patch.object(
            host, "_has_api_token", return_value=True
        ), mock.patch.object(
            host, "build_shell_batch_prompt", return_value="PROMPT"
        ), mock.patch.object(
            host, "_run_generation_prompt", side_effect=host.TruncatedGenerationError("截断")
        ):
            with self.assertRaisesRegex(host.ValidationError, "所有批次"):
                host.run_shell_aggregate_query(prefer_web=False)

    def test_shell_aggregate_skips_empty_batch_and_keeps_others(self):
        # The syntax batches can yield zero conforming items; that batch must be
        # skipped (with a warning) rather than sinking the whole Shell add.
        good = valid_shell_dataset()
        empty = {"meta": dict(good["meta"]), "items": []}
        batches = [host.SHELL_BATCHES[0], host.SHELL_BATCHES[1]]
        with mock.patch.object(host, "SHELL_BATCHES", batches), mock.patch.object(
            host, "_has_api_token", return_value=True
        ), mock.patch.object(
            host, "build_shell_batch_prompt", return_value="PROMPT"
        ), mock.patch.object(
            host, "_run_generation_prompt", side_effect=[empty, valid_shell_dataset()]
        ), mock.patch.object(
            host, "_demote_quasi_official", side_effect=lambda dataset: dataset
        ):
            dataset = host.run_shell_aggregate_query(prefer_web=False)
        self.assertEqual(len(dataset["items"]), 1)
        self.assertTrue(any("批次" in warning for warning in dataset.get("qualityWarnings", [])))

    def test_shell_registered_discovery_uses_registry_sources(self):
        discovered = host.shell_registered_discovery()
        self.assertTrue(discovered["sources"])
        self.assertTrue(any(source["id"] == "gnu-bash-manual" for source in discovered["sources"]))
        self.assertIn("跳过模型来源发现", discovered["notes"][0])

    def test_compact_shell_batch_payload_limits_items_and_examples(self):
        raw = {
            "items": [
                {"examples": [{"value": "one"}, {"value": "two"}]}
                for _index in range(host.SHELL_BATCH_MAX_ITEMS + 3)
            ]
        }
        compacted = host.compact_shell_batch_payload(raw)
        self.assertEqual(len(compacted["items"]), host.SHELL_BATCH_MAX_ITEMS)
        self.assertEqual(len(compacted["items"][0]["examples"]), 1)

    def test_load_source_registry_honors_project_dir_env(self):
        # When deployed, host.py lives outside the repo and resolves siblings
        # (data/, shared/) via AICLI_PROJECT_DIR — the registry must do the same
        # instead of looking next to __file__, or the host crashes on startup.
        with tempfile.TemporaryDirectory() as tmp:
            shared = os.path.join(tmp, "shared")
            os.makedirs(shared)
            registry = {"entries": [{"id": "env-scoped-source", "title": "Env Scoped"}]}
            with open(os.path.join(shared, "source-registry.json"), "w", encoding="utf-8") as fh:
                json.dump(registry, fh)
            with mock.patch.dict(os.environ, {"AICLI_PROJECT_DIR": tmp}, clear=False):
                entries = host.load_source_registry()
        self.assertEqual(entries[0]["id"], "env-scoped-source")

    def test_timeout_does_not_create_files(self):
        mock_proc = mock.MagicMock()
        mock_proc.communicate.side_effect = [
            host.subprocess.TimeoutExpired("claude", 900),
            ("", ""),
        ]
        with mock.patch.object(host, "_call_api_direct", return_value=None), mock.patch.object(
            host, "CLAUDE_BIN", "/usr/bin/claude"
        ), mock.patch.object(
            host, "provider_status", return_value=self.ready_claude_status()
        ), mock.patch.object(host, "PROJECT_DIR", self.temp.name), mock.patch.object(
            host.subprocess, "Popen", return_value=mock_proc
        ):
            with self.assertRaisesRegex(host.ValidationError, "超时"):
                host.add_tool("sample", "Sample Tool")
        self.assertFalse((self.data_dir / "sample.js").exists())

    def test_invalid_claude_output_does_not_create_files(self):
        mock_proc = mock.MagicMock()
        mock_proc.communicate.return_value = ("not json", "")
        mock_proc.returncode = 0
        with mock.patch.object(host, "_call_api_direct", return_value=None), mock.patch.object(
            host, "CLAUDE_BIN", "/usr/bin/claude"
        ), mock.patch.object(
            host, "provider_status", return_value=self.ready_claude_status()
        ), mock.patch.object(host, "PROJECT_DIR", self.temp.name), mock.patch.object(
            host.subprocess, "Popen", return_value=mock_proc
        ):
            with self.assertRaisesRegex(host.ValidationError, "JSON"):
                host.add_tool("sample", "Sample Tool")
        self.assertFalse((self.data_dir / "sample.js").exists())

    def test_prefer_web_keeps_anthropic_compatible_api_available(self):
        # 官方资料由 Host 确定性刷新；勾选重新核对不应让 API-only 用户失去维护能力。
        discovery = {"sources": valid_dataset()["meta"]["sources"], "conflicts": [], "notes": []}
        popen = mock.MagicMock()
        with mock.patch.object(host, "_has_api_token", return_value=True), mock.patch.object(
            host, "_call_api_direct", side_effect=[json.dumps(discovery), json.dumps(valid_dataset())]
        ) as api, mock.patch.object(host, "CLAUDE_BIN", None), mock.patch.object(
            host.subprocess, "Popen", popen
        ):
            dataset = host.run_claude_query("sample", "Sample Tool", "add", prefer_web=True)
        self.assertEqual(api.call_count, 2)
        popen.assert_not_called()
        self.assertEqual(dataset["meta"]["verificationStatus"], "model-knowledge")

    def test_token_without_prefer_web_uses_offline_api(self):
        # 不勾选时有 token 走直连 API 离线路径，不启动 claude 子进程。
        popen = mock.MagicMock()
        discovery = {"sources": valid_dataset()["meta"]["sources"], "conflicts": [], "notes": []}
        with mock.patch.object(host, "_has_api_token", return_value=True), mock.patch.object(
            host, "_call_api_direct", side_effect=[
                json.dumps(discovery), json.dumps(valid_dataset())
            ]
        ), mock.patch.object(host.subprocess, "Popen", popen):
            dataset = host.run_claude_query("sample", "Sample Tool", "add", prefer_web=False)
        popen.assert_not_called()
        self.assertEqual(dataset["meta"]["verificationStatus"], "model-knowledge")

    def test_prefer_web_without_any_claude_environment_reports_clear_error(self):
        with mock.patch.object(host, "_has_api_token", return_value=False), mock.patch.object(
            host, "CLAUDE_BIN", None
        ):
            with self.assertRaisesRegex(host.ValidationError, "找不到 Claude Code"):
                host.run_claude_query("sample", "Sample Tool", "add", prefer_web=True)

    def test_add_tool_without_token_or_claude_returns_protocol_error(self):
        # 完全没有本机 AI 环境（无 API token 且未安装 claude CLI）时，
        # add_tool 必须走协议返回友好中文错误，而不是崩溃或泄露堆栈。
        request = {
            "action": "add_tool", "protocolVersion": 5, "providerId": "claude",
            "providerCatalogDigest": host.provider_registry()["catalogDigest"],
            "tool": "sample", "display_name": "Sample Tool",
        }
        sent = []
        with mock.patch.object(host, "_has_api_token", return_value=False), mock.patch.object(
            host, "CLAUDE_BIN", None
        ), mock.patch.object(host, "read_message", return_value=request), mock.patch.object(
            host, "send_message", side_effect=lambda payload: sent.append(payload)
        ):
            host.main()
        self.assertEqual(len(sent), 1)
        self.assertFalse(sent[0]["ok"])
        self.assertIn("找不到 Claude Code", sent[0]["error"])
        self.assertNotIn("Traceback", sent[0]["error"])
        self.assertFalse((self.data_dir / "sample.js").exists())

    def test_preview_apply_and_discard_update(self):
        old_dataset = valid_dataset()
        old_dataset["items"][0]["id"] = "stable-item"
        target = self.data_dir / "sample.js"
        target.write_text(host.render_data_file(old_dataset), encoding="utf-8")
        new_dataset = valid_dataset()
        new_dataset["items"][0].update(
            {"id": "stable-item", "cmd": "Ctrl+Shift+K", "zh": "打开新命令"}
        )
        new_dataset["items"].append(
            {
                "id": "new-item",
                "cat": "slash",
                "cmd": "/new",
                "en": "New command",
                "zh": "新命令",
                "evidenceStatus": "unverified",
            }
        )
        with mock.patch.object(
            host, "run_claude_query", return_value=host.validate_dataset(new_dataset, "sample")
        ):
            preview = host.preview_update("sample", "Sample Tool", deep_check=True)
        self.assertTrue(preview["changed"])
        self.assertEqual(preview["diff"]["counts"]["added"], 1)
        self.assertEqual(preview["diff"]["counts"]["modified"], 1)
        applied = host.apply_update(preview["pendingToken"])
        self.assertTrue(applied["changed"])
        updated_content = target.read_text(encoding="utf-8")
        self.assertIn("Ctrl+Shift+K", updated_content)
        index_content = (self.data_dir / "index.js").read_text(encoding="utf-8")
        expected_hash = "sha256:" + hashlib.sha256(updated_content.encode("utf-8")).hexdigest()
        self.assertIn(expected_hash, index_content)

        with mock.patch.object(
            host, "run_claude_query", return_value=host.validate_dataset(old_dataset, "sample")
        ):
            second_preview = host.preview_update("sample", "Sample Tool", deep_check=True)
        discarded = host.discard_update(second_preview["pendingToken"])
        self.assertFalse(discarded["changed"])

    def test_apply_update_rolls_back_data_policy_files_when_index_write_fails(self):
        old_dataset = valid_dataset()
        old_dataset["items"][0]["id"] = "stable-item"
        target = self.data_dir / "sample.js"
        target.write_text(host.render_data_file(old_dataset), encoding="utf-8")
        host.write_data_index()
        inventory_path = pathlib.Path(host.official_inventory_path("sample"))
        review_path = pathlib.Path(host.scenario_review_path("sample"))
        inventory_path.write_text("previous inventory\n", encoding="utf-8")
        review_path.write_text("previous review\n", encoding="utf-8")
        original_data = target.read_text(encoding="utf-8")
        original_index = (self.data_dir / "index.js").read_text(encoding="utf-8")

        new_dataset = valid_dataset()
        new_dataset["items"][0].update({"id": "stable-item", "cmd": "Ctrl+Shift+K"})
        with mock.patch.object(
            host, "run_claude_query", return_value=host.validate_dataset(new_dataset, "sample")
        ):
            preview = host.preview_update("sample", "Sample Tool", deep_check=True)

        with mock.patch.object(host, "write_data_index", side_effect=OSError("index failed")):
            with self.assertRaisesRegex(OSError, "index failed"):
                host.apply_update(preview["pendingToken"])

        self.assertEqual(target.read_text(encoding="utf-8"), original_data)
        self.assertEqual((self.data_dir / "index.js").read_text(encoding="utf-8"), original_index)
        self.assertEqual(inventory_path.read_text(encoding="utf-8"), "previous inventory\n")
        self.assertEqual(review_path.read_text(encoding="utf-8"), "previous review\n")
        self.assertTrue(pathlib.Path(host.pending_path(preview["pendingToken"])).exists())

    def test_preview_matches_legacy_items_without_ids(self):
        old_dataset = valid_dataset()
        target = self.data_dir / "sample.js"
        target.write_text(host.render_data_file(old_dataset), encoding="utf-8")
        normalized_old = host.validate_dataset(old_dataset, "sample", require_structured_source=False)
        new_dataset = valid_dataset()
        new_dataset["items"][0].update(
            {"id": normalized_old["items"][0]["id"], "zh": "修改后的说明"}
        )
        with mock.patch.object(
            host, "run_claude_query", return_value=host.validate_dataset(new_dataset, "sample")
        ):
            preview = host.preview_update("sample", "Sample Tool", deep_check=True)
        self.assertEqual(preview["diff"]["counts"]["added"], 0)
        self.assertEqual(preview["diff"]["counts"]["removed"], 0)
        self.assertEqual(preview["diff"]["counts"]["modified"], 1)

    def test_preview_preserves_existing_examples(self):
        old_dataset = valid_dataset()
        old_dataset["items"][0].update({
            "id": "stable-item",
            "keywords": ["命令面板", "打开命令", "快捷操作"],
            "examples": [{
                "value": "Ctrl+K",
                "description": "打开命令",
                "copyable": False,
                "sourceType": "manual",
            }],
        })
        target = self.data_dir / "sample.js"
        target.write_text(host.render_data_file(old_dataset), encoding="utf-8")
        new_dataset = valid_dataset()
        new_dataset["items"][0]["id"] = "stable-item"
        new_dataset["items"][0]["zh"] = "打开命令面板"
        with mock.patch.object(
            host, "run_claude_query", return_value=host.validate_dataset(new_dataset, "sample")
        ):
            preview = host.preview_update("sample", "Sample Tool", deep_check=True)
        _, pending = host.load_pending(preview["pendingToken"])
        item = pending["dataset"]["items"][0]
        self.assertEqual(item["keywords"], ["命令面板", "打开命令", "快捷操作"])
        self.assertEqual(item["examples"][0]["value"], "Ctrl+K")
        self.assertEqual(item["examples"][0]["sourceType"], "manual")

    def test_apply_rejects_changed_source_file(self):
        old_dataset = valid_dataset()
        old_dataset["items"][0]["id"] = "stable-item"
        target = self.data_dir / "sample.js"
        target.write_text(host.render_data_file(old_dataset), encoding="utf-8")
        new_dataset = valid_dataset()
        new_dataset["items"][0].update({"id": "stable-item", "cmd": "Ctrl+Shift+K"})
        with mock.patch.object(
            host, "run_claude_query", return_value=host.validate_dataset(new_dataset, "sample")
        ):
            preview = host.preview_update("sample", "Sample Tool", deep_check=True)
        target.write_text("externally changed", encoding="utf-8")
        with self.assertRaisesRegex(host.ValidationError, "重新检查更新"):
            host.apply_update(preview["pendingToken"])

    def test_high_risk_update_requires_explicit_confirmation(self):
        old_dataset = valid_dataset()
        old_dataset["items"] = [
            {
                "id": f"item-{index}",
                "cat": "slash",
                "cmd": f"/cmd-{index}",
                "en": f"Command {index}",
                "zh": f"命令 {index}",
            }
            for index in range(12)
        ]
        target = self.data_dir / "sample.js"
        target.write_text(host.render_data_file(old_dataset), encoding="utf-8")
        new_dataset = valid_dataset()
        new_dataset["items"][0]["id"] = "item-0"
        with mock.patch.object(
            host, "run_claude_query", return_value=host.validate_dataset(new_dataset, "sample")
        ):
            preview = host.preview_update("sample", "Sample Tool", deep_check=True)
        self.assertTrue(preview["diff"]["risks"])
        with self.assertRaisesRegex(host.ValidationError, "高风险变化"):
            host.apply_update(preview["pendingToken"])
        applied = host.apply_update(preview["pendingToken"], confirm_risk=True)
        self.assertTrue(applied["changed"])


class HostErrorSanitizationTests(unittest.TestCase):
    # 面向 UI 的错误文本必须脱敏：本机绝对路径替换为占位符并截断，
    # 完整细节只进本地日志（host.log）。

    def test_sanitize_error_text_strips_home_and_project_paths(self):
        home = os.path.expanduser("~")
        project = os.path.realpath(host.PROJECT_DIR)
        raw = f"Error at {project}/data/x.js under {home}/secret/creds"
        cleaned = host.sanitize_error_text(raw)
        self.assertNotIn(home, cleaned)
        self.assertIn("<project>/data/x.js", cleaned)
        self.assertIn("~/secret/creds", cleaned)

    def test_sanitize_error_text_truncates_long_messages(self):
        cleaned = host.sanitize_error_text("x" * 2000)
        self.assertLessEqual(len(cleaned), 501)

    def test_sanitize_error_text_handles_empty_input(self):
        self.assertEqual(host.sanitize_error_text(None), "")
        self.assertEqual(host.sanitize_error_text(""), "")

    def test_sanitize_error_text_redacts_configured_and_known_secrets(self):
        configured = "custom-token-abcdef0123456789"
        known = "sk-proj-" + ("a" * 32)
        raw = f"authorization: Bearer {configured}; fallback {known}"
        with mock.patch.dict(os.environ, {"ANTHROPIC_AUTH_TOKEN": configured}, clear=False):
            cleaned = host.sanitize_error_text(raw)
        self.assertNotIn(configured, cleaned)
        self.assertNotIn(known, cleaned)
        self.assertIn("<REDACTED>", cleaned)

    def test_log_formatter_redacts_traceback_secret_values(self):
        configured = "custom-token-abcdef0123456789"
        record = logging.LogRecord("test", logging.ERROR, __file__, 1, "failed: %s", (configured,), None)
        formatter = host.RedactingFormatter("%(levelname)s %(message)s")
        with mock.patch.dict(os.environ, {"ANTHROPIC_AUTH_TOKEN": configured}, clear=False):
            rendered = formatter.format(record)
        self.assertNotIn(configured, rendered)
        self.assertIn("<REDACTED>", rendered)

    def test_cli_stderr_is_sanitized_before_reaching_ui(self):
        home = os.path.expanduser("~")
        mock_proc = mock.MagicMock()
        mock_proc.communicate.return_value = ("", f"failure while reading {home}/private/config")
        mock_proc.returncode = 1
        with mock.patch.object(host, "CLAUDE_BIN", "/usr/bin/claude"), mock.patch.object(
            host.subprocess, "Popen", return_value=mock_proc
        ):
            with self.assertRaises(host.ValidationError) as ctx:
                host._call_claude_cli("prompt")
        message = str(ctx.exception)
        self.assertNotIn(home, message)
        self.assertIn("~/private/config", message)

    def test_main_unexpected_exception_is_sanitized(self):
        home = os.path.expanduser("~")
        sent = []
        with mock.patch.object(
            host, "read_message", side_effect=RuntimeError(f"boom at {home}/hidden/token-cache")
        ), mock.patch.object(host, "send_message", side_effect=lambda payload: sent.append(payload)):
            host.main()
        self.assertEqual(len(sent), 1)
        self.assertFalse(sent[0]["ok"])
        self.assertNotIn(home, sent[0]["error"])
        self.assertIn("~/hidden/token-cache", sent[0]["error"])

    def test_api_error_body_is_sanitized(self):
        home = os.path.expanduser("~")
        conn = mock.MagicMock()
        resp = mock.MagicMock()
        resp.status = 500
        resp.read.return_value = f"server error touching {home}/leak".encode("utf-8")
        conn.getresponse.return_value = resp
        with mock.patch.dict(os.environ, {"ANTHROPIC_AUTH_TOKEN": "tok"}, clear=True), mock.patch.object(
            host.http.client, "HTTPSConnection", return_value=conn
        ):
            with self.assertRaises(host.ValidationError) as ctx:
                host._call_api_direct("prompt")
        message = str(ctx.exception)
        self.assertNotIn(home, message)
        self.assertIn("~/leak", message)


class HostApiTests(unittest.TestCase):
    def _fake_conn(self, status, body):
        conn = mock.MagicMock()
        resp = mock.MagicMock()
        resp.status = status
        resp.read.return_value = body.encode("utf-8")
        conn.getresponse.return_value = resp
        return conn

    def test_returns_none_without_token(self):
        with mock.patch.dict(os.environ, {}, clear=True):
            self.assertIsNone(host._call_api_direct("prompt"))

    def test_success_returns_text_and_uses_base_url(self):
        body = json.dumps(
            {"stop_reason": "end_turn", "content": [{"type": "text", "text": '{"ok": true}'}]}
        )
        conn = self._fake_conn(200, body)
        env = {
            "ANTHROPIC_AUTH_TOKEN": "tok-123",
            "ANTHROPIC_BASE_URL": "https://api.deepseek.com/anthropic",
            "ANTHROPIC_MODEL": "deepseek-v4-pro",
        }
        with mock.patch.dict(os.environ, env, clear=True), mock.patch.object(
            host.http.client, "HTTPSConnection", return_value=conn
        ) as conn_cls:
            text = host._call_api_direct("prompt")
        self.assertEqual(text, '{"ok": true}')
        self.assertEqual(conn_cls.call_args.args[0], "api.deepseek.com")
        method, path = conn.request.call_args.args[0], conn.request.call_args.args[1]
        self.assertEqual(method, "POST")
        self.assertTrue(path.endswith("/v1/messages"))
        self.assertIn("/anthropic/", path)
        self.assertEqual(conn.request.call_args.kwargs["headers"]["x-api-key"], "tok-123")

    def test_raises_on_truncation(self):
        body = json.dumps(
            {"stop_reason": "max_tokens", "content": [{"type": "text", "text": "{partial"}]}
        )
        conn = self._fake_conn(200, body)
        env = {"ANTHROPIC_AUTH_TOKEN": "tok", "ANTHROPIC_BASE_URL": "https://api.anthropic.com"}
        with mock.patch.dict(os.environ, env, clear=True), mock.patch.object(
            host.http.client, "HTTPSConnection", return_value=conn
        ):
            with self.assertRaisesRegex(host.ValidationError, "截断"):
                host._call_api_direct("prompt")

    def test_truncation_raises_recoverable_error_subtype(self):
        body = json.dumps(
            {"stop_reason": "max_tokens", "content": [{"type": "text", "text": "{partial"}]}
        )
        conn = self._fake_conn(200, body)
        env = {"ANTHROPIC_AUTH_TOKEN": "tok", "ANTHROPIC_BASE_URL": "https://api.anthropic.com"}
        with mock.patch.dict(os.environ, env, clear=True), mock.patch.object(
            host.http.client, "HTTPSConnection", return_value=conn
        ):
            with self.assertRaises(host.TruncatedGenerationError):
                host._call_api_direct("prompt")

    def _sent_payload(self, conn):
        return json.loads(conn.request.call_args.kwargs["body"].decode("utf-8"))

    def test_default_max_tokens_gives_more_headroom(self):
        conn = self._fake_conn(
            200, json.dumps({"stop_reason": "end_turn", "content": [{"type": "text", "text": "{}"}]})
        )
        env = {"ANTHROPIC_AUTH_TOKEN": "tok", "ANTHROPIC_BASE_URL": "https://api.anthropic.com"}
        with mock.patch.dict(os.environ, env, clear=True), mock.patch.object(
            host.http.client, "HTTPSConnection", return_value=conn
        ):
            host._call_api_direct("prompt")
        self.assertEqual(self._sent_payload(conn)["max_tokens"], host.API_MAX_TOKENS_DEFAULT)
        self.assertGreaterEqual(host.API_MAX_TOKENS_DEFAULT, 32000)

    def test_max_tokens_honors_env_override(self):
        conn = self._fake_conn(
            200, json.dumps({"stop_reason": "end_turn", "content": [{"type": "text", "text": "{}"}]})
        )
        env = {
            "ANTHROPIC_AUTH_TOKEN": "tok",
            "ANTHROPIC_BASE_URL": "https://api.anthropic.com",
            "AICLI_API_MAX_TOKENS": "8192",
        }
        with mock.patch.dict(os.environ, env, clear=True), mock.patch.object(
            host.http.client, "HTTPSConnection", return_value=conn
        ):
            host._call_api_direct("prompt")
        self.assertEqual(self._sent_payload(conn)["max_tokens"], 8192)

    def test_out_of_range_max_tokens_env_falls_back_to_default(self):
        conn = self._fake_conn(
            200, json.dumps({"stop_reason": "end_turn", "content": [{"type": "text", "text": "{}"}]})
        )
        env = {
            "ANTHROPIC_AUTH_TOKEN": "tok",
            "ANTHROPIC_BASE_URL": "https://api.anthropic.com",
            "AICLI_API_MAX_TOKENS": "99999999",
        }
        with mock.patch.dict(os.environ, env, clear=True), mock.patch.object(
            host.http.client, "HTTPSConnection", return_value=conn
        ):
            host._call_api_direct("prompt")
        self.assertEqual(self._sent_payload(conn)["max_tokens"], host.API_MAX_TOKENS_DEFAULT)

    def test_non_numeric_max_tokens_env_falls_back_to_default(self):
        conn = self._fake_conn(
            200, json.dumps({"stop_reason": "end_turn", "content": [{"type": "text", "text": "{}"}]})
        )
        env = {
            "ANTHROPIC_AUTH_TOKEN": "tok",
            "ANTHROPIC_BASE_URL": "https://api.anthropic.com",
            "AICLI_API_MAX_TOKENS": "not-a-number",
        }
        with mock.patch.dict(os.environ, env, clear=True), mock.patch.object(
            host.http.client, "HTTPSConnection", return_value=conn
        ):
            host._call_api_direct("prompt")
        self.assertEqual(self._sent_payload(conn)["max_tokens"], host.API_MAX_TOKENS_DEFAULT)

    def test_shell_add_tool_requests_are_canonicalized(self):
        request = host.validate_request({
            "action": "add_tool",
            "protocolVersion": 5,
            "providerId": "claude",
            "providerCatalogDigest": host.provider_registry()["catalogDigest"],
            "tool": "terminal",
            "display_name": "Terminal",
        })
        self.assertEqual(request["tool"], "shell")
        self.assertEqual(request["display_name"], "Shell")

    def test_raises_on_http_error(self):
        conn = self._fake_conn(401, '{"error":"unauthorized"}')
        env = {"ANTHROPIC_API_KEY": "tok", "ANTHROPIC_BASE_URL": "https://api.anthropic.com"}
        with mock.patch.dict(os.environ, env, clear=True), mock.patch.object(
            host.http.client, "HTTPSConnection", return_value=conn
        ):
            with self.assertRaisesRegex(host.ValidationError, "API 错误"):
                host._call_api_direct("prompt")


class HostExecutableDiscoveryTests(unittest.TestCase):
    def test_macos_and_linux_search_paths_cover_common_managers(self):
        home = "/Users/example"
        with mock.patch.object(host.glob, "glob", side_effect=lambda pattern: {
            f"{home}/.nvm/versions/node/*/bin": [
                f"{home}/.nvm/versions/node/v20.1.0/bin",
                f"{home}/.nvm/versions/node/v22.2.0/bin",
            ],
            f"{home}/.fnm/node-versions/*/installation/bin": [
                f"{home}/.fnm/node-versions/v21.0.0/installation/bin"
            ],
        }.get(pattern, [])), mock.patch.object(host.os.path, "isdir", return_value=True):
            paths = host.executable_search_dirs(
                platform="darwin",
                env={"PATH": "", "AICLI_EXTRA_PATH": "/custom/bin"},
                home=home,
            )
        self.assertEqual(paths[0], "/custom/bin")
        self.assertIn("/opt/homebrew/bin", paths)
        self.assertIn("/usr/local/bin", paths)
        self.assertIn(f"{home}/.volta/bin", paths)
        self.assertIn(f"{home}/.asdf/shims", paths)
        self.assertLess(
            paths.index(f"{home}/.nvm/versions/node/v22.2.0/bin"),
            paths.index(f"{home}/.nvm/versions/node/v20.1.0/bin"),
        )

    def test_windows_search_paths_cover_npm_nvm_volta_and_scoop(self):
        env = {
            "PATH": r"C:\Windows\System32",
            "AICLI_EXTRA_PATH": r"D:\tools\bin",
            "APPDATA": r"C:\Users\me\AppData\Roaming",
            "LOCALAPPDATA": r"C:\Users\me\AppData\Local",
            "ProgramFiles": r"C:\Program Files",
            "NVM_HOME": r"C:\Users\me\AppData\Roaming\nvm",
            "NVM_SYMLINK": r"C:\Program Files\nodejs",
        }
        with mock.patch.object(host.os.path, "isdir", return_value=True):
            paths = host.executable_search_dirs(
                platform="win32", env=env, home=r"C:\Users\me"
            )
        self.assertIn(r"C:\Users\me\AppData\Roaming/npm".replace("/", os.sep), paths)
        self.assertIn(r"C:\Users\me\AppData\Local/Volta/bin".replace("/", os.sep), paths)
        self.assertIn(r"C:\Users\me/scoop/shims".replace("/", os.sep), paths)
        self.assertIn(r"C:\Program Files\nodejs", paths)

    def test_subprocess_environment_adds_runtime_dirs_without_mutating_os_path(self):
        original = os.environ.get("PATH")
        with mock.patch.dict(
            os.environ,
            {"PATH": "", "AICLI_EXTRA_PATH": "/runtime/bin"},
            clear=False,
        ):
            env = host.subprocess_environment(allow_web=False)
            self.assertIn("/runtime/bin", env["PATH"].split(os.pathsep))
            self.assertEqual(os.environ["PATH"], "")
        self.assertEqual(os.environ.get("PATH"), original)

    def test_claude_reports_missing_node_runtime_precisely(self):
        proc = mock.MagicMock()
        proc.communicate.return_value = ("", "/usr/bin/env: node: No such file or directory")
        proc.returncode = 127
        with mock.patch.object(host, "CLAUDE_BIN", "/custom/bin/claude"), mock.patch.object(
            host.subprocess, "Popen", return_value=proc
        ):
            with self.assertRaisesRegex(host.ValidationError, "Node.js 运行时不可用"):
                host._call_claude_cli("prompt", prefer_web=True)

    def test_version_probe_reports_missing_node_runtime_precisely(self):
        result = mock.MagicMock(
            returncode=127,
            stdout="",
            stderr="'node' is not recognized as an internal or external command",
        )
        with mock.patch.object(host, "find_tool_binary", return_value=r"C:\npm\codex.cmd"), mock.patch.object(
            host.subprocess, "run", return_value=result
        ):
            with self.assertRaisesRegex(host.ValidationError, "Node.js 运行时不可用"):
                host.detect_local_version("codex")

    def test_installers_persist_and_refresh_runtime_paths(self):
        shell = (ROOT / "native-host" / "install.sh").read_text(encoding="utf-8")
        powershell = (ROOT / "native-host" / "install.ps1").read_text(encoding="utf-8")
        for script in (shell, powershell):
            self.assertIn("AICLI_EXTRA_PATH", script)
            self.assertIn("RuntimePath", script.replace("RUNTIME_PATH", "RuntimePath"))
        self.assertIn("refresh_runtime_path", shell)
        self.assertIn("仅更新 host.py 并刷新运行路径", powershell)
        for marker in ("nvm", "fnm", "volta", "asdf"):
            self.assertIn(marker, shell.lower())
        for marker in ("nvm", "fnm", "volta", "scoop"):
            self.assertIn(marker, powershell.lower())

    def test_installers_keep_custom_credentials_out_of_launchers(self):
        shell = (ROOT / "native-host" / "install.sh").read_text(encoding="utf-8")
        powershell = (ROOT / "native-host" / "install.ps1").read_text(encoding="utf-8")
        self.assertIn('CREDS_FILE="$INSTALL_DIR/credentials.env"', shell)
        self.assertIn('$CredentialsFile = Join-Path $InstallDir "credentials.env"', powershell)
        self.assertIn('Read-Host "ANTHROPIC_AUTH_TOKEN（你的 API Key，输入时不显示）" -AsSecureString', powershell)
        self.assertIn('Set-Acl -Path $CredentialsFile', powershell)
        self.assertIn('call `"$CredentialsFile`"', powershell)

    def test_uninstall_scripts_mirror_install_artifacts(self):
        # 卸载脚本必须与安装脚本指向同一批产物：host 名、安装目录、
        # 浏览器注册位置；credentials.env 含密钥，必须是询问式删除。
        uninstall_sh = (ROOT / "native-host" / "uninstall.sh").read_text(encoding="utf-8")
        uninstall_ps1 = (ROOT / "native-host" / "uninstall.ps1").read_text(encoding="utf-8")
        for text in (uninstall_sh, uninstall_ps1):
            self.assertIn("com.aicli.cheatsheet_updater", text)
            self.assertIn("aicli-cheatsheet", text)
            self.assertIn("credentials.env", text)
            self.assertIn("[y/N]", text)
        self.assertIn("Google/Chrome/NativeMessagingHosts", uninstall_sh)
        self.assertIn("Microsoft Edge/NativeMessagingHosts", uninstall_sh)
        self.assertIn("microsoft-edge/NativeMessagingHosts", uninstall_sh)
        self.assertIn(r"HKCU:\Software\Google\Chrome\NativeMessagingHosts", uninstall_ps1)
        self.assertIn(r"HKCU:\Software\Microsoft\Edge\NativeMessagingHosts", uninstall_ps1)

    def test_install_sh_does_not_override_platform_edge_dir(self):
        # 回归：Linux 上选择 Edge 时曾被硬编码覆盖为 macOS 路径。
        shell = (ROOT / "native-host" / "install.sh").read_text(encoding="utf-8")
        register_block = shell[shell.index("同时注册到 Edge"):]
        self.assertNotIn("Library/Application Support", register_block)

    def test_install_sh_update_only_refreshes_explicit_extension_id(self):
        shell = (ROOT / "native-host" / "install.sh").read_text(encoding="utf-8")
        update_only = shell[shell.index('if [[ "$UPDATE_ONLY"'):shell.index("# ── 3.")]
        self.assertIn('validate_extension_id "$EXTENSION_ID"', update_only)
        self.assertIn('write_manifest "$CHROME_DIR"', update_only)
        self.assertIn('write_manifest "$EDGE_DIR"', update_only)
        self.assertNotRegex(shell, r'\$[A-Za-z_][A-Za-z0-9_]*[^\x00-\x7f]')


class HostDiffEnrichmentTests(unittest.TestCase):
    def _with_id(self, item_id="i1"):
        dataset = valid_dataset()
        dataset["items"][0]["id"] = item_id
        return dataset

    def test_diff_flags_source_domain_change(self):
        old = self._with_id()
        new = self._with_id()
        new["meta"]["sourceUrl"] = "https://other-host.example.org/docs"
        diff = host.build_dataset_diff(old, new)
        self.assertTrue(any("域名" in risk for risk in diff["risks"]))

    def test_diff_flags_builtin_toggle(self):
        old = self._with_id()
        old["meta"]["builtIn"] = False
        new = self._with_id()
        new["meta"]["builtIn"] = True
        diff = host.build_dataset_diff(old, new)
        self.assertTrue(any("内置工具标记" in risk for risk in diff["risks"]))

    def test_diff_clean_update_has_no_risks(self):
        old = self._with_id()
        new = self._with_id()
        new["items"][0]["zh"] = "打开命令面板"
        diff = host.build_dataset_diff(old, new)
        self.assertEqual(diff["risks"], [])
        self.assertEqual(diff["counts"]["modified"], 1)

    def test_diff_ignores_tracking_date_only_changes(self):
        old = self._with_id()
        new = self._with_id()
        new["meta"]["updatedAt"] = "2026-07-01"
        new["meta"]["contentCheckedAt"] = "2026-07-01"
        new["meta"]["sourceCheckedAt"] = "2026-07-01"
        new["meta"]["sources"][0]["checkedAt"] = "2026-07-01"
        new["meta"]["sources"][0]["lastVerifiedAt"] = "2026-07-01"
        diff = host.build_dataset_diff(old, new)
        self.assertEqual(diff["counts"], {"added": 0, "modified": 0, "removed": 0, "meta": 0})
        self.assertEqual(diff["sourceChanges"]["modified"], [])

    def test_diff_flags_new_repository_and_source_conflict(self):
        old_payload = valid_dataset("codex")
        old_payload["items"][0]["id"] = "item-1"
        old = host.validate_dataset(old_payload, "codex")
        new_payload = valid_dataset("codex")
        new_payload["items"][0]["id"] = "item-1"
        new_payload["meta"]["sources"].append({
            "id": "codex-repo",
            "registryId": "openai-codex-repository",
            "title": "Codex repository",
            "url": "https://github.com/openai/codex/releases",
            "kind": "official-repository",
            "maintainer": "OpenAI",
            "evidenceTier": "first-party",
            "lastVerifiedAt": "2026-06-21",
            "resolvedUrl": "https://github.com/openai/codex/releases",
            "pageTitle": "Releases · openai/codex",
            "checkedAt": "2026-06-21",
            "purposes": ["release-notes"],
        })
        new_payload["sourceConflicts"] = ["官方文档与 Release 的命令状态不同"]
        new = host.validate_dataset(new_payload, "codex")
        diff = host.build_dataset_diff(old, new)
        self.assertEqual(len(diff["sourceChanges"]["added"]), 1)
        self.assertEqual(len(diff["sourceChanges"]["conflicts"]), 1)
        self.assertTrue(any("新增需确认来源" in risk for risk in diff["risks"]))

    def test_diff_flags_item_evidence_status_downgrade(self):
        old = self._with_id("item-1")
        new = self._with_id("item-1")
        new["items"][0].pop("evidenceRefs")
        new["items"][0]["evidenceStatus"] = "unverified"
        diff = host.build_dataset_diff(old, new)
        self.assertEqual(diff["sourceChanges"]["statusDowngrades"], ["item-1"])
        self.assertEqual(diff["sourceChanges"]["evidenceRefChanges"], ["item-1"])
        self.assertEqual(diff["sourceChanges"]["locatorLosses"], ["item-1"])
        self.assertTrue(any("核验状态下降" in risk for risk in diff["risks"]))

    def test_quality_warning_flags_keyword_gap(self):
        dataset = valid_dataset()
        dataset["items"][0].pop("keywords")
        warnings = host.build_quality_warnings(dataset)
        self.assertTrue(any("语义关键词覆盖不足" in warning for warning in warnings))

    def test_quality_warning_flags_verification_target_and_platform_claim(self):
        dataset = valid_dataset()
        dataset["items"][0]["evidenceStatus"] = "partial"
        dataset["items"][0]["evidenceRefs"][0]["claims"] = ["existence"]
        dataset["items"][0]["platforms"] = ["mac"]
        warnings = host.build_quality_warnings(dataset)
        self.assertTrue(any("严格核验率不足" in warning for warning in warnings))
        self.assertTrue(any("平台证据不足" in warning for warning in warnings))

    def test_quality_warning_flags_example_regression(self):
        previous = valid_dataset()
        previous["items"][0]["examples"] = [
            {"value": "Ctrl+K", "description": "打开命令", "sourceType": "manual"}
        ]
        current = valid_dataset()
        current["items"][0].pop("examples")  # 覆盖率从 1 降至 0
        warnings = host.build_quality_warnings(current, previous)
        self.assertTrue(any("降至" in warning for warning in warnings))

    def test_preserve_keeps_reviewed_examples_over_new(self):
        old = self._with_id()
        old["items"][0]["keywords"] = ["命令面板", "打开命令", "快捷操作"]
        old["items"][0]["examples"] = [
            {"value": "old", "description": "旧示例", "sourceType": "manual"}
        ]
        new = self._with_id()
        new["items"][0]["examples"] = [
            {"value": "new", "description": "新示例", "sourceType": "ai-derived"}
        ]
        # new 缺 keywords
        merged = host.preserve_existing_enrichment(old, new)
        # 已人工审核(manual)的旧示例优先于新生成的 ai-derived
        self.assertEqual(merged["items"][0]["examples"][0]["value"], "old")
        # 旧 keywords 在新数据缺失时被保留
        self.assertEqual(merged["items"][0]["keywords"], ["命令面板", "打开命令", "快捷操作"])


class HostSourceTierGenerationTests(unittest.TestCase):
    def test_prompt_web_enabled_allows_quasi_official_with_whitelist(self):
        prompt = host.build_prompt("sample", "Sample", "add", web_enabled=True)
        self.assertIn("quasi-official", prompt)
        self.assertIn("官方文档优先", prompt)
        # 白名单动态注入：每个域名都应出现在 prompt 中
        for domain in host.QUASI_OFFICIAL_DOMAINS:
            self.assertIn(domain, prompt)
        self.assertIn("每个 item 必须提供 evidenceRefs", prompt)
        self.assertIn("如果无法绑定 meta.sources 中的有效 sourceIds，必须填 evidenceTier=none", prompt)
        self.assertNotIn("目标 50 条以上", prompt)

    def test_source_discovery_prompt_precedes_content_generation(self):
        prompt = host.build_source_discovery_prompt(
            "codex", "Codex CLI", "update", web_enabled=True
        )
        self.assertIn("来源发现", prompt)
        self.assertIn("official-repository", prompt)
        self.assertIn("tldr 只适合实用案例", prompt)
        self.assertIn("未登记但确认为第一方的官方仓库", prompt)
        self.assertIn("https://github.com/openai/codex", prompt)

    def test_prompt_offline_forbids_quasi_official(self):
        prompt = host.build_prompt("sample", "Sample", "add", web_enabled=False)
        self.assertIn("禁止使用 quasi-official", prompt)
        self.assertIn("没有联网", prompt)

    def test_demote_quasi_official_downgrades_meta_and_examples(self):
        dataset = {
            "meta": {"sourceTier": "quasi-official"},
            "items": [{
                "evidenceRefs": [{
                    "sourceId": "docs",
                    "claims": ["existence", "semantics"],
                    "locator": "https://example.com/docs#x",
                    "checkedAt": "2026-06-21",
                }],
                "evidenceStatus": "verified",
                "examples": [
                    {"value": "x", "description": "d", "sourceType": "quasi-official",
                     "sourceUrl": "https://man7.org/x"},
                    {"value": "y", "description": "d", "sourceType": "official",
                     "sourceUrl": "https://official.example/y"},
                ],
            }],
        }
        host._demote_quasi_official(dataset)
        self.assertEqual(dataset["meta"]["sourceTier"], "community")
        self.assertNotIn("evidenceRefs", dataset["items"][0])
        self.assertEqual(dataset["items"][0]["evidenceStatus"], "unverified")
        examples = dataset["items"][0]["examples"]
        # 类官方示例降为 ai-derived 并去掉未核实的 URL
        self.assertEqual(examples[0]["sourceType"], "manual")
        self.assertNotIn("sourceUrl", examples[0])
        self.assertEqual(examples[0]["authorship"], "editorial")
        self.assertEqual(examples[0]["evidenceTier"], "none")
        # 非类官方示例不受影响
        self.assertEqual(examples[1]["sourceType"], "official")
        self.assertEqual(examples[1]["sourceUrl"], "https://official.example/y")

    def test_demote_leaves_official_tier_untouched(self):
        dataset = {"meta": {"sourceTier": "official"}, "items": []}
        host._demote_quasi_official(dataset)
        self.assertEqual(dataset["meta"]["sourceTier"], "official")

    def test_rejects_invalid_example_platform_values(self):
        payload = valid_dataset()
        payload["items"][0].update({
            "keywords": ["a", "b", "c"],
            "examples": [{
                "value": "cmd",
                "description": "示例",
                "sourceType": "ai-derived",
                "authorship": "generated",
                "evidenceTier": "none",
                "adaptation": "scenario-derived",
                "platformValues": {"solaris": "cmd"},
            }],
        })
        with self.assertRaisesRegex(host.ValidationError, "平台非法"):
            host.validate_dataset(payload, "sample")

    def test_lenient_contract_accepts_missing_keywords_and_examples(self):
        # 锁定“生成端宽松”契约：缺 keywords/examples 不报错，但两项都产生覆盖告警。
        # 与仓库端 validate-data.js 的严格必填刻意不同（见 data/SCHEMA.md 校验契约）。
        payload = valid_dataset()
        payload["items"][0].pop("keywords")
        payload["items"][0].pop("examples")
        dataset = host.validate_dataset(payload, "sample")
        self.assertNotIn("keywords", dataset["items"][0])
        self.assertNotIn("examples", dataset["items"][0])
        self.assertTrue(any("示例覆盖不足" in warning for warning in dataset["qualityWarnings"]))
        self.assertTrue(any("语义关键词覆盖不足" in warning for warning in dataset["qualityWarnings"]))

    def test_id_collisions_recover_with_command_hash(self):
        # 同 cat/en、无 context 但 cmd 不同：稳定 ID 会碰撞，应通过追加 cmd 重哈希恢复唯一
        payload = valid_dataset()
        payload["items"] = [
            {
                "cat": "slash",
                "cmd": f"/cmd-{index}",
                "en": "Run",
                "zh": f"运行 {index}",
                "evidenceStatus": "unverified",
            }
            for index in range(3)
        ]
        dataset = host.validate_dataset(payload, "sample")
        ids = [item["id"] for item in dataset["items"]]
        self.assertEqual(len(dataset["items"]), 3)
        self.assertEqual(len(set(ids)), 3, "碰撞条目应重哈希为唯一 ID")


class HostHttpRetryTests(unittest.TestCase):
    def setUp(self):
        self.request = host.urllib.request.Request("https://example.com/probe")
        self.sleep = mock.patch.object(host.time, "sleep").start()
        self.addCleanup(mock.patch.stopall)

    def test_retries_transient_network_errors_then_succeeds(self):
        sentinel = object()
        with mock.patch.object(
            host.urllib.request,
            "urlopen",
            side_effect=[host.urllib.error.URLError("boom"), host.urllib.error.URLError("boom"), sentinel],
        ) as opener:
            result = host.urlopen_with_retry(self.request, timeout=8)
        self.assertIs(result, sentinel)
        self.assertEqual(opener.call_count, 3)
        self.assertEqual(self.sleep.call_count, 2)

    def test_gives_up_after_retry_budget(self):
        with mock.patch.object(
            host.urllib.request, "urlopen", side_effect=host.urllib.error.URLError("down")
        ) as opener:
            with self.assertRaises(host.urllib.error.URLError):
                host.urlopen_with_retry(self.request, timeout=8, retries=2)
        self.assertEqual(opener.call_count, 3)

    def test_does_not_retry_deterministic_client_errors(self):
        error = host.urllib.error.HTTPError(
            "https://example.com/probe", 404, "Not Found", {}, None
        )
        with mock.patch.object(
            host.urllib.request, "urlopen", side_effect=error
        ) as opener:
            with self.assertRaises(host.urllib.error.HTTPError):
                host.urlopen_with_retry(self.request, timeout=8)
        self.assertEqual(opener.call_count, 1)
        self.sleep.assert_not_called()

    def test_retries_server_errors(self):
        error = host.urllib.error.HTTPError(
            "https://example.com/probe", 503, "Busy", {}, None
        )
        with mock.patch.object(
            host.urllib.request, "urlopen", side_effect=error
        ) as opener:
            with self.assertRaises(host.urllib.error.HTTPError):
                host.urlopen_with_retry(self.request, timeout=8, retries=2)
        self.assertEqual(opener.call_count, 3)


class HostSuggestToolsTests(unittest.TestCase):
    def test_protocol_rejects_removed_ai_recommendation_action(self):
        with self.assertRaisesRegex(host.ValidationError, "未知"):
            host.validate_request({
                "action": "suggest_tools", "providerId": "claude",
                "platform": "mac", "count": 3, "exclude": [],
            })

    def test_validate_request_rejects_bad_platform(self):
        with self.assertRaises(host.ValidationError):
            host.validate_request({"action": "suggest_tools", "providerId": "claude", "platform": "solaris", "count": 3, "exclude": []})

    def test_suggest_tools_sanitizes_and_excludes(self):
        payload = {"tools": [
            {"tool": "lazygit", "displayName": "lazygit", "category": "Git 工具", "categoryKey": "dev-env",
             "reason": "Git TUI", "tags": ["git", "tui", "a", "b", "c"], "homepage": "https://github.com/jesseduffield/lazygit"},
            {"tool": "ripgrep", "displayName": "rg", "categoryKey": "cli-utility", "reason": "excluded", "homepage": "https://x.dev"},
            {"tool": "BAD ID", "displayName": "bad", "homepage": "https://x.dev"},
            {"tool": "evilcat", "displayName": "evil", "categoryKey": "nonsense", "reason": "bad link", "homepage": "javascript:alert(1)"},
        ]}
        with mock.patch.object(host, "_has_api_token", return_value=True), \
                mock.patch.object(host, "_run_generation_prompt", return_value=payload):
            result = host.suggest_tools("mac", 8, ["ripgrep", "fzf"])
        self.assertTrue(result["ok"])
        self.assertFalse(result["changed"])
        tools = [item["tool"] for item in result["suggestions"]]
        self.assertIn("lazygit", tools)
        self.assertNotIn("ripgrep", tools, "excluded ids must be dropped")
        self.assertNotIn("BAD ID", tools, "invalid ids must be dropped")
        lazygit = next(item for item in result["suggestions"] if item["tool"] == "lazygit")
        self.assertEqual(lazygit["platforms"], ["mac"])
        self.assertEqual(lazygit["source"], "ai")
        self.assertLessEqual(len(lazygit["tags"]), 4, "tags should be capped")
        evil = next(item for item in result["suggestions"] if item["tool"] == "evilcat")
        self.assertEqual(evil["categoryKey"], "cli-utility", "unknown category falls back")
        self.assertEqual(evil["homepage"], "", "non-https homepage is stripped")

    def test_suggest_tools_prompt_includes_context(self):
        payload = {"tools": [
            {"tool": "fd", "displayName": "fd", "categoryKey": "cli-utility",
             "reason": "find 替代", "homepage": "https://github.com/sharkdp/fd"}
        ]}
        with mock.patch.object(host, "_has_api_token", return_value=True), \
                mock.patch.object(host, "_run_generation_prompt", return_value=payload) as generate:
            result = host.suggest_tools(
                "mac",
                3,
                ["ripgrep"],
                [{"id": "shell", "name": "Shell"}],
                [{"id": "docker", "name": "Docker"}],
            )
        self.assertTrue(result["ok"])
        prompt = generate.call_args.args[0]
        self.assertIn("ripgrep", prompt)
        self.assertIn("shell(Shell)", prompt)
        self.assertIn("docker(Docker)", prompt)
        self.assertIn("补足相邻工作流空白", prompt)

    def test_suggest_tools_caps_count(self):
        payload = {"tools": [
            {"tool": f"tool{i}", "displayName": f"Tool {i}", "categoryKey": "cli-utility",
             "reason": "x", "homepage": "https://x.dev"}
            for i in range(10)
        ]}
        with mock.patch.object(host, "_has_api_token", return_value=True), \
                mock.patch.object(host, "_run_generation_prompt", return_value=payload):
            result = host.suggest_tools("mac", 3, [])
        self.assertEqual(len(result["suggestions"]), 3)

    def test_suggest_tools_empty_result_is_friendly(self):
        with mock.patch.object(host, "_has_api_token", return_value=True), \
                mock.patch.object(host, "_run_generation_prompt", return_value={"tools": []}):
            result = host.suggest_tools("mac", 8, [])
        self.assertFalse(result["ok"])
        self.assertIn("error", result)

    def test_suggest_tools_rejects_non_list(self):
        with mock.patch.object(host, "_has_api_token", return_value=True), \
                mock.patch.object(host, "_run_generation_prompt", return_value={"nope": 1}):
            with self.assertRaises(host.ValidationError):
                host.suggest_tools("mac", 8, [])


class HostProviderAdapterTests(unittest.TestCase):
    def test_claude_cli_version_is_not_replaced_by_configured_model_name(self):
        with mock.patch.object(host, "_has_api_token", return_value=True), mock.patch.object(
            host, "_probe_command", return_value=(0, "2.1.216 (Claude Code)")
        ):
            self.assertEqual(host._provider_version("claude", "/tmp/claude"), "Anthropic compatible API")
            self.assertEqual(host._provider_version("claude", "/tmp/claude", prefer_cli=True), "2.1.216 (Claude Code)")

    def test_v5_requires_and_preserves_explicit_provider(self):
        digest = host.provider_registry()["catalogDigest"]
        with self.assertRaisesRegex(host.ValidationError, "providerId"):
            host.validate_request({
                "action": "add_tool", "protocolVersion": 5,
                "providerCatalogDigest": digest,
                "tool": "sample", "display_name": "Sample",
            })
        request = host.validate_request({
            "action": "add_tool", "protocolVersion": 5, "providerId": "codex",
            "providerCatalogDigest": digest,
            "tool": "sample", "display_name": "Sample",
        })
        self.assertEqual(request["providerId"], "codex")

    def test_v5_rejects_stale_catalog_digest_and_unknown_provider(self):
        with self.assertRaisesRegex(host.ValidationError, "目录已变化"):
            host.validate_request({
                "action": "add_tool", "protocolVersion": 5,
                "providerId": "catalog:fifth",
                "providerCatalogDigest": f"sha256:{'0' * 64}",
                "tool": "sample", "display_name": "Sample",
            })
        with self.assertRaisesRegex(host.ValidationError, "providerId"):
            host.validate_request({
                "action": "add_tool", "protocolVersion": 5,
                "providerId": "catalog:fifth",
                "providerCatalogDigest": host.provider_registry()["catalogDigest"],
                "tool": "sample", "display_name": "Sample",
            })

    def test_declarative_fifth_provider_uses_fixed_argv_without_shell(self):
        adapter = {
            "id": "catalog:fifth", "displayName": "Fifth AI", "source": "catalog",
            "transport": "cli", "driver": "stdin-json", "promptMode": "stdin",
            "argv": ["--read-only", "--json"], "outputParser": "json",
            "executableCandidates": ["fifth-ai"],
        }
        with mock.patch.object(host, "_provider_binary", return_value="/tmp/fifth-ai"), \
                mock.patch.object(
                    host, "_run_provider_process", return_value='{"meta":{},"items":[]}'
                ) as process:
            result = host._call_catalog_cli("prompt", "catalog:fifth", adapter)
        self.assertEqual(result, {"meta": {}, "items": []})
        args, prompt, provider_id = process.call_args.args
        self.assertEqual(args, ["/tmp/fifth-ai", "--read-only", "--json"])
        self.assertEqual((prompt, provider_id), ("prompt", "catalog:fifth"))

    def test_generic_provider_substitutes_the_prompt_into_one_argv_element(self):
        with tempfile.TemporaryDirectory() as temp, mock.patch.object(host, "PENDING_DIR", temp), \
                mock.patch.object(host, "find_executable", return_value="/tmp/generic-ai"), \
                mock.patch.object(host, "_probe_command", return_value=(0, "Generic AI 1.0")):
            enabled = host.handle_message({
                "action": "enable_generic_provider", "protocolVersion": 5,
                "displayName": "Generic AI", "executable": "generic-ai",
                "genericProfileId": "prompt-flag-json", "genericConfirmed": True,
            })
            provider_id = enabled["provider"]["id"]
            adapter = host.provider_adapter(provider_id)
            with mock.patch.object(host, "_provider_binary", return_value="/tmp/generic-ai"), \
                    mock.patch.object(host, "_run_provider_process", return_value='{"meta":{},"items":[]}') as process:
                self.assertEqual(host._call_catalog_cli("prompt", provider_id, adapter), {"meta": {}, "items": []})
            args, prompt, used_provider = process.call_args.args
            # The prompt occupies exactly one element and is never concatenated.
            self.assertEqual(
                args, ["/tmp/generic-ai", "-p", "prompt", "--output-format", "json"]
            )
            self.assertEqual((prompt, used_provider), ("prompt", provider_id))
            self.assertFalse(process.call_args.kwargs["prompt_in_argv"])
            # An unknown executable must never inherit the Native Messaging stdin.
            self.assertTrue(process.call_args.kwargs["stdin_devnull"])

    def test_generic_provider_bare_template_passes_the_prompt_on_stdin(self):
        with tempfile.TemporaryDirectory() as temp, mock.patch.object(host, "PENDING_DIR", temp), \
                mock.patch.object(host, "find_executable", return_value="/tmp/generic-ai"), \
                mock.patch.object(host, "_probe_command", return_value=(0, "Generic AI 1.0")):
            enabled = host.handle_message({
                "action": "enable_generic_provider", "protocolVersion": 5,
                "displayName": "Generic AI", "executable": "generic-ai",
                "genericProfileId": "stdin-json", "genericConfirmed": True,
            })
            adapter = host.provider_adapter(enabled["provider"]["id"])
            with mock.patch.object(host, "_provider_binary", return_value="/tmp/generic-ai"), \
                    mock.patch.object(host, "_run_provider_process", return_value='{"meta":{},"items":[]}') as process:
                host._call_catalog_cli("prompt", enabled["provider"]["id"], adapter)
            self.assertEqual(process.call_args.args[0], ["/tmp/generic-ai"])
            self.assertFalse(process.call_args.kwargs["prompt_in_argv"])
            self.assertFalse(process.call_args.kwargs["stdin_devnull"])

    def test_generic_provider_rejects_a_template_the_bridge_does_not_own(self):
        with tempfile.TemporaryDirectory() as temp, mock.patch.object(host, "PENDING_DIR", temp), \
                mock.patch.object(host, "find_executable", return_value="/tmp/generic-ai"), \
                mock.patch.object(host, "_probe_command", return_value=(0, "Generic AI 1.0")):
            for profile_id in [None, "", "prompt-flag-json; rm -rf /", "custom"]:
                with self.assertRaises(host.ValidationError):
                    host.handle_message({
                        "action": "enable_generic_provider", "protocolVersion": 5,
                        "displayName": "Generic AI", "executable": "generic-ai",
                        "genericProfileId": profile_id, "genericConfirmed": True,
                    })

    def test_generic_provider_requires_one_confirmation_and_can_resolve_existing_adapter(self):
        with tempfile.TemporaryDirectory() as temp, mock.patch.object(host, "PENDING_DIR", temp), \
                mock.patch.object(host, "find_executable", return_value="/tmp/generic-ai"), \
                mock.patch.object(host, "_probe_command", return_value=(0, "Generic AI 1.0")):
            resolved = host.handle_message({
                "action": "resolve_generic_provider", "protocolVersion": 5,
                "displayName": "Generic AI", "executable": "generic-ai",
            })
            self.assertTrue(resolved["found"])
            self.assertTrue(resolved["requiresGenericConfirmation"])
            # Discovery alone must not run a model task.
            self.assertNotIn("genericProfileId", resolved)
            enabled = host.handle_message({
                "action": "enable_generic_provider", "protocolVersion": 5,
                "displayName": "Generic AI", "executable": "generic-ai",
                "genericProfileId": "stdin-json", "genericConfirmed": True,
            })
            self.assertTrue(enabled["ok"])
            repeated = host.handle_message({
                "action": "resolve_generic_provider", "protocolVersion": 5,
                "displayName": "Generic AI", "executable": "generic-ai",
            })
            self.assertEqual(repeated["existingProviderId"], enabled["provider"]["id"])

    def test_handshake_scan_degrades_one_slow_provider_without_losing_the_rest(self):
        adapters = [
            {"id": "claude", "displayName": "Claude Code", "source": "builtin",
             "transport": "cli", "verified": True, "loginCommand": "claude auth login",
             "capabilities": ["structured-output"], "recommendationOrder": 0},
            {"id": "codex", "displayName": "Codex CLI", "source": "builtin",
             "transport": "cli", "verified": True, "loginCommand": "codex login",
             "capabilities": ["structured-output"], "recommendationOrder": 10},
        ]

        def slow_status(provider_id, prefer_cli_version=False):
            if provider_id == "codex":
                time.sleep(5)
            return {"id": provider_id, "displayName": provider_id, "ready": True,
                    "installed": True, "loginState": "logged-in"}

        with mock.patch.object(host, "provider_status", side_effect=slow_status):
            started = time.monotonic()
            statuses = host.scan_provider_statuses(adapters, budget=1)
            elapsed = time.monotonic() - started

        # The budget is honoured, order is preserved, and the healthy provider
        # still comes back with its real status.
        self.assertLess(elapsed, 4)
        self.assertEqual([status["id"] for status in statuses], ["claude", "codex"])
        self.assertTrue(statuses[0]["ready"])
        self.assertEqual(statuses[1]["loginState"], "probe-timeout")
        self.assertFalse(statuses[1]["ready"])
        self.assertEqual(statuses[1]["displayName"], "Codex CLI")

    def test_handshake_scan_runs_providers_in_parallel(self):
        adapters = [
            {"id": f"catalog:slow-{index}", "displayName": f"Slow {index}",
             "source": "catalog", "transport": "cli", "verified": True,
             "loginCommand": "", "capabilities": [], "recommendationOrder": index}
            for index in range(6)
        ]

        def slow_status(provider_id, prefer_cli_version=False):
            time.sleep(0.5)
            return {"id": provider_id, "displayName": provider_id, "ready": False,
                    "installed": False, "loginState": "not-installed"}

        with mock.patch.object(host, "provider_status", side_effect=slow_status):
            started = time.monotonic()
            statuses = host.scan_provider_statuses(adapters, budget=10)
            elapsed = time.monotonic() - started

        self.assertEqual(len(statuses), 6)
        # Serial probing would take at least 3s; parallel fan-out stays near one.
        self.assertLess(elapsed, 2)

    def test_refresh_provider_rescans_only_the_requested_environment(self):
        with mock.patch.object(
            host, "provider_status",
            return_value={"id": "claude", "displayName": "Claude Code", "ready": True,
                          "installed": True, "loginState": "logged-in"},
        ) as status:
            result = host.handle_message({
                "action": "refresh_provider", "protocolVersion": 5, "providerId": "claude",
            })
        self.assertTrue(result["ok"])
        self.assertEqual(result["provider"]["id"], "claude")
        self.assertEqual(status.call_count, 1)

    def test_refresh_provider_rejects_unknown_and_malformed_ids(self):
        for provider_id in ["catalog:nope", "../etc", "claude; rm -rf /", 42]:
            with self.assertRaises(host.ValidationError):
                host.handle_message({
                    "action": "refresh_provider", "protocolVersion": 5,
                    "providerId": provider_id,
                })

    def test_executable_lookup_is_memoised_within_one_message(self):
        host.find_executable.cache_clear()
        with mock.patch.object(host.shutil, "which", return_value="/tmp/claude") as which:
            for _ in range(5):
                host.find_executable("claude")
        self.assertEqual(which.call_count, 1)
        host.find_executable.cache_clear()

    def test_generic_probe_reports_the_first_working_template(self):
        answered = {"argv": None}

        def fake_run(args, **kwargs):
            answered["argv"] = args
            # Only the second template (-p prompt) is understood by this CLI.
            if args[1:2] == ["-p"] and "--output-format" not in args:
                return mock.Mock(returncode=0, stdout='{"ok": true}', stderr="")
            return mock.Mock(returncode=2, stdout="", stderr="unknown option")

        with mock.patch.object(host.subprocess, "run", side_effect=fake_run):
            profile = host.probe_generic_profiles("/tmp/generic-ai")
        self.assertEqual(profile["id"], "prompt-flag")
        self.assertEqual(profile["promptMode"], "argv-template")

    def test_generic_probe_reports_incompatible_when_no_template_answers(self):
        def fake_run(args, **kwargs):
            raise host.subprocess.TimeoutExpired(args, host.PROBE_TIMEOUT_SECONDS)

        with mock.patch.object(host, "find_executable", return_value="/tmp/tui-ai"), \
                mock.patch.object(host, "_probe_command", return_value=(0, "TUI AI 1.0")), \
                mock.patch.object(host.subprocess, "run", side_effect=fake_run):
            resolved = host.resolve_generic_provider("TUI AI", "tui-ai", probe=True)
        # A CLI that only opens an interactive session is reported before the
        # environment is saved, not after a 15-minute task timeout.
        self.assertTrue(resolved["genericIncompatible"])
        self.assertFalse(resolved["requiresGenericConfirmation"])

    def test_common_qwen_installer_uses_only_its_fixed_bridge_profile(self):
        installed = {"qwen": False}

        def executable(name, *_args, **_kwargs):
            if name == "qwen":
                return "/tmp/qwen" if installed["qwen"] else None
            return {"node": "/tmp/node", "npm": "/tmp/npm"}.get(name)

        def probe(args, *_args, **_kwargs):
            return (0, "v22.2.0") if args[0] == "/tmp/node" else (0, "10.0.0")

        process = mock.Mock()
        process.returncode = 0
        process.communicate.side_effect = lambda timeout: (installed.__setitem__("qwen", True) or ("", ""))
        with mock.patch.object(host, "find_executable", side_effect=executable), \
                mock.patch.object(host, "_probe_command", side_effect=probe), \
                mock.patch.object(host.subprocess, "Popen", return_value=process) as popen:
            prepared = host.handle_message({
                "action": "prepare_common_provider_install", "protocolVersion": 5,
                "commonProviderId": "qwen-code",
            })
            self.assertEqual(prepared["installation"]["state"], "ready")
            result = host.handle_message({
                "action": "install_common_provider", "protocolVersion": 5,
                "commonProviderId": "qwen-code", "confirmed": True,
            })
        self.assertTrue(result["ok"])
        self.assertEqual(result["providerId"], "qwen")
        self.assertEqual(
            popen.call_args.args[0],
            ["/tmp/npm", "install", "--global", "@qwen-code/qwen-code@latest"],
        )
        self.assertNotIn("shell", popen.call_args.kwargs)

    def test_common_provider_install_requires_confirmation_and_rejects_unknown_id(self):
        with self.assertRaisesRegex(host.ValidationError, "需要用户确认"):
            host.validate_request({
                "action": "install_common_provider", "protocolVersion": 5,
                "commonProviderId": "qwen-code",
            })
        with self.assertRaisesRegex(host.ValidationError, "ID 无效"):
            host.validate_request({
                "action": "prepare_common_provider_install", "protocolVersion": 5,
                "commonProviderId": "qwen-code;rm",
            })
        with self.assertRaisesRegex(host.ValidationError, "未登记"):
            host.handle_message({
                "action": "prepare_common_provider_install", "protocolVersion": 5,
                "commonProviderId": "unknown-ai",
            })

    def test_qwen_adapter_uses_documented_headless_plan_arguments(self):
        output = json.dumps([{"type": "result", "result": '{"meta":{},"items":[]}'}])
        with mock.patch.object(host, "_provider_binary", return_value="/tmp/qwen"), \
                mock.patch.object(host, "_run_provider_process", return_value=output) as process:
            self.assertEqual(host._call_qwen_cli("prompt"), {"meta": {}, "items": []})
        args, prompt, provider_id = process.call_args.args
        self.assertEqual(args[:5], ["/tmp/qwen", "--safe-mode", "--approval-mode", "plan", "--max-wall-time"])
        self.assertIn("--output-format", args)
        self.assertEqual((prompt, provider_id), ("prompt", "qwen"))
        self.assertTrue(process.call_args.kwargs["prompt_in_argv"])

    def test_compatible_api_protocols_normalize_structured_text(self):
        expected = '{"meta":{},"items":[]}'
        self.assertEqual(host._compatible_api_text(
            "anthropic-messages", {"content": [{"type": "text", "text": expected}]}
        ), expected)
        self.assertEqual(host._compatible_api_text(
            "openai-chat-completions",
            {"choices": [{"message": {"content": expected}}]},
        ), expected)
        self.assertEqual(host._compatible_api_text(
            "openai-responses", {"output_text": expected}
        ), expected)

    def test_openai_compatible_api_uses_bridge_profile_and_returns_json(self):
        profile = {
            "id": "api:12345678-1234-1234-1234-123456789abc",
            "displayName": "Compatible API",
            "protocol": "openai-responses",
            "baseUrl": "https://api.example.com/v1",
            "model": "example-model",
            "token": "secret-token",
        }
        adapter = {"displayName": "Compatible API"}
        response = mock.MagicMock()
        response.read.return_value = json.dumps({
            "model": "example-model",
            "output_text": '{"meta":{},"items":[]}',
        }).encode("utf-8")
        response.__enter__.return_value = response
        with mock.patch.object(host, "_compatible_api_profile", return_value=profile), \
                mock.patch.object(host.urllib.request, "urlopen", return_value=response) as opener:
            result = host._call_compatible_api("prompt", profile["id"], adapter)
        self.assertEqual(result, {"meta": {}, "items": []})
        request = opener.call_args.args[0]
        self.assertEqual(request.full_url, "https://api.example.com/v1/responses")
        self.assertEqual(request.get_header("Authorization"), "Bearer secret-token")

    def test_selected_provider_never_falls_back(self):
        ready = {
            "id": "codex", "displayName": "Codex CLI", "installed": True,
            "ready": True, "loginCommand": "codex login",
        }
        with mock.patch.object(host, "provider_status", return_value=ready), \
                mock.patch.object(host, "_call_codex_cli", return_value={"ok": True}) as codex, \
                mock.patch.object(host, "_call_claude_cli") as claude:
            result = host._run_generation_prompt("prompt", False, provider_id="codex")
        self.assertEqual(result, {"ok": True})
        codex.assert_called_once_with("prompt")
        claude.assert_not_called()

    def test_codex_adapter_is_ephemeral_read_only_and_schema_bound(self):
        captured = {}

        def fake_run(args, _prompt, provider_id, **_kwargs):
            captured["args"] = args
            captured["provider"] = provider_id
            output_path = pathlib.Path(args[args.index("-o") + 1])
            output_path.write_text('{"value":1}', encoding="utf-8")
            return ""

        with mock.patch.object(host, "CODEX_BIN", "/bin/codex"), \
                mock.patch.object(host, "_run_provider_process", side_effect=fake_run):
            self.assertEqual(host._call_codex_cli("prompt"), {"value": 1})
        self.assertEqual(captured["provider"], "codex")
        self.assertIn("--ephemeral", captured["args"])
        self.assertIn("read-only", captured["args"])
        self.assertIn("--output-schema", captured["args"])
        self.assertIn('web_search="disabled"', captured["args"])

    def test_gemini_and_opencode_adapters_disable_writes(self):
        calls = []

        def fake_run(args, _prompt, provider_id, **kwargs):
            calls.append((args, provider_id, kwargs, os.environ.get("OPENCODE_PERMISSION")))
            if provider_id == "gemini":
                return json.dumps({"response": '{"value":"gemini"}'})
            return json.dumps({"part": {"text": '{"value":"opencode"}'}})

        with mock.patch.object(host, "GEMINI_BIN", "/bin/gemini"), \
                mock.patch.object(host, "OPENCODE_BIN", "/bin/opencode"), \
                mock.patch.object(host, "_run_provider_process", side_effect=fake_run):
            with tempfile.TemporaryDirectory() as temp, \
                    mock.patch.object(host, "BRIDGE_WORK_DIR", temp):
                self.assertEqual(host._call_gemini_cli("prompt")["value"], "gemini")
                self.assertEqual(host._call_opencode_cli("prompt")["value"], "opencode")
        self.assertIn("plan", calls[0][0])
        self.assertIn("--admin-policy", calls[0][0])
        self.assertIn("plan", calls[1][0])
        permissions = json.loads(calls[1][3])
        self.assertTrue(all(value == "deny" for value in permissions.values()))

    def test_gemini_requires_a_non_generating_auth_signal(self):
        with tempfile.TemporaryDirectory() as home, \
                mock.patch.dict(os.environ, {
                    "HOME": home,
                    "GEMINI_API_KEY": "",
                    "GOOGLE_API_KEY": "",
                    "GOOGLE_APPLICATION_CREDENTIALS": "",
                }, clear=False):
            self.assertEqual(host._gemini_login_state(), "not-logged-in")
            gemini_dir = pathlib.Path(home, ".gemini")
            gemini_dir.mkdir()
            (gemini_dir / ".env").write_text("GEMINI_API_KEY=secret\n", encoding="utf-8")
            self.assertEqual(host._gemini_login_state(), "configured")

    def test_unknown_cli_only_closes_from_recursive_help_tree(self):
        outputs = {
            (): "Usage: sample COMMAND\n\nCommands:\n  run     Run a task\n  config  Configure\n\nOptions:\n  --help  Help\n",
            ("run",): "Usage: sample run\n\nOptions:\n  --dry-run  Preview\n",
            ("config",): "Usage: sample config\n\nOptions:\n  --list  List config\n",
        }
        with mock.patch.object(host, "find_executable", return_value="/bin/sample"), \
                mock.patch.object(host, "_local_help_output", side_effect=lambda _exe, parts: outputs[tuple(parts)]):
            inventory = host.fetch_local_help_inventory("sample", "Sample")
        self.assertEqual(inventory["closure"]["status"], "closed")
        self.assertEqual(
            [entry["command"] for entry in inventory["entries"]],
            ["sample", "sample run", "sample config"],
        )
        self.assertEqual(inventory["adapter"]["kind"], "recursive-local-help-tree")

    def test_unknown_cli_without_commands_fails_closed(self):
        with mock.patch.object(host, "find_executable", return_value="/bin/sample"), \
                mock.patch.object(host, "_local_help_output", return_value="Usage: sample [OPTIONS]"):
            with self.assertRaisesRegex(host.OfficialInventoryError, "尚不能证明"):
                host.fetch_local_help_inventory("sample", "Sample")


class HostCompanionProtocolTests(unittest.TestCase):
    def test_handshake_reports_protocol_and_capabilities(self):
        result = host.handle_message({
            "action": "handshake", "protocolVersion": 5, "schemaVersion": 2,
            "extensionId": "a" * 32,
        })
        self.assertTrue(result["ok"])
        self.assertEqual(result["protocolVersion"], 5)
        self.assertEqual(result["schemaVersion"], 2)
        self.assertEqual([item["id"] for item in result["providers"][:4]], [
            "claude", "codex", "gemini", "opencode",
        ])
        self.assertRegex(result["providerCatalogDigest"], r"^sha256:[a-f0-9]{64}$")
        self.assertFalse(result["capabilities"]["aiRecommendations"])
        self.assertTrue(result["capabilities"]["chunkedBundles"])
        self.assertLessEqual(result["capabilities"]["chunkBytes"], 512 * 1024)
        self.assertTrue(result["capabilities"]["providerCatalog"]["configureCompatibleApi"])

    def test_handshake_enumerates_registry_provider_without_extension_allowlist(self):
        current = host.provider_registry()
        fifth = {
            "id": "catalog:fifth", "displayName": "Fifth AI", "source": "catalog",
            "transport": "cli", "verified": True, "ready": True, "installed": True,
            "loginState": "logged-in", "version": "1.0", "loginCommand": "",
            "capabilities": ["structured-output", "read-only", "maintenance", "cancel"],
            "recommendationOrder": 40,
        }
        fake_registry = {
            **current,
            "providers": [*current["providers"], fifth],
            "byId": {**current["byId"], "catalog:fifth": fifth},
            "catalogDigest": f"sha256:{'a' * 64}",
        }
        original_status = host.provider_status

        def status(provider_id, prefer_cli_version=False):
            if provider_id == "catalog:fifth":
                return fifth
            return original_status(provider_id, prefer_cli_version)

        with mock.patch.object(host, "provider_registry", return_value=fake_registry), \
                mock.patch.object(host, "provider_status", side_effect=status):
            result = host.handle_message({
                "action": "handshake", "protocolVersion": 5, "schemaVersion": 2,
                "extensionId": "a" * 32,
            })
        self.assertEqual(result["providers"][-1]["id"], "catalog:fifth")
        self.assertEqual(result["providerCatalogDigest"], f"sha256:{'a' * 64}")

    def test_user_requested_handshake_refreshes_catalog_before_scanning(self):
        with mock.patch.object(
            host, "refresh_catalog_if_stale",
            return_value={"status": "updated", "checkedAt": "2026-07-26T00:00:00Z"},
        ) as refresh:
            result = host.handle_message({
                "action": "handshake", "protocolVersion": 5, "schemaVersion": 2,
                "extensionId": "a" * 32, "refreshCatalog": True,
            })
        refresh.assert_called_once_with(host.SHARED_DIR, host.PENDING_DIR)
        self.assertEqual(result["catalogRefresh"]["status"], "updated")

    def test_cold_handshake_never_refreshes_catalog(self):
        with mock.patch.object(host, "refresh_catalog_if_stale") as refresh:
            result = host.handle_message({
                "action": "handshake", "protocolVersion": 5, "schemaVersion": 2,
                "extensionId": "a" * 32,
            })
        refresh.assert_not_called()
        self.assertEqual(result["catalogRefresh"]["status"], "not-requested")

    def test_handshake_rejects_incompatible_schema(self):
        result = host.handle_message({
            "action": "handshake", "protocolVersion": 5, "schemaVersion": 1,
            "extensionId": "a" * 32,
        })
        self.assertFalse(result["ok"])
        self.assertEqual(result["schemaVersion"], 2)

    def test_graphical_api_configuration_writes_only_bridge_state(self):
        token = "bridge-local-test-token"
        with tempfile.TemporaryDirectory() as temp, mock.patch.object(host, "PENDING_DIR", temp):
            result = host.handle_message({
                "action": "configure_api", "protocolVersion": 5,
                "config": {
                    "displayName": "Test API", "protocol": "openai-responses",
                    "baseUrl": "https://api.example.test/v1", "model": "test-model",
                    "token": token,
                },
            })
            self.assertTrue(result["ok"])
            self.assertNotIn("token", result["provider"])
            self.assertNotIn(token, json.dumps(result))
            stored = pathlib.Path(temp, "provider-api-config.json").read_text(encoding="utf-8")
            self.assertIn(token, stored)

    def test_custom_provider_save_is_local_and_handshake_exposes_safe_metadata(self):
        with tempfile.TemporaryDirectory() as temp, mock.patch.object(host, "PENDING_DIR", temp):
            saved = host.handle_message({
                "action": "save_custom_provider", "protocolVersion": 5,
                "config": {
                    "displayName": "My Local AI", "executable": "my-local-ai",
                    "driver": "stdin-json", "argv": ["--json", "--read-only"],
                    "promptMode": "stdin", "outputParser": "json",
                    "versionArgs": ["--version"], "loginCommand": "my-local-ai login",
                    "readOnlyConfirmed": True,
                },
            })
            self.assertTrue(saved["ok"])
            provider_id = saved["provider"]["id"]
            self.assertRegex(provider_id, r"^custom:[a-f0-9-]{36}$")
            handshake = host.handle_message({
                "action": "handshake", "protocolVersion": 5, "schemaVersion": 2,
                "extensionId": "a" * 32,
            })
            listed = next(item for item in handshake["providers"] if item["id"] == provider_id)
            self.assertEqual(listed["source"], "custom")
            self.assertFalse(listed["verified"])
            self.assertEqual(listed["customConfig"]["executable"], "my-local-ai")
            self.assertNotIn("token", json.dumps(handshake))
            deleted = host.handle_message({
                "action": "delete_custom_provider", "protocolVersion": 5,
                "providerId": provider_id,
            })
            self.assertTrue(deleted["deleted"])

    def test_custom_provider_rejects_shell_arguments_before_execution(self):
        with tempfile.TemporaryDirectory() as temp, mock.patch.object(host, "PENDING_DIR", temp):
            with self.assertRaisesRegex(host.ValidationError, "Shell 元字符"):
                host.handle_message({
                    "action": "save_custom_provider", "protocolVersion": 5,
                    "config": {
                        "displayName": "Unsafe", "executable": "unsafe-ai",
                        "driver": "stdin-json", "argv": ["--json", "|", "cat"],
                        "promptMode": "stdin", "outputParser": "json",
                        "versionArgs": ["--version"], "loginCommand": "",
                        "readOnlyConfirmed": True,
                    },
                })

    def test_store_apply_returns_checksum_verified_chunks(self):
        dataset = host.validate_dataset(valid_dataset(), "sample")
        item = dataset["items"][0]
        inventory = {
            "schemaVersion": 2,
            "toolId": "sample",
            "scope": "all-command-entrypoints",
            "checkedAt": "2026-07-16",
            "sourceIds": ["official-docs"],
            "adapter": {"id": "sample-fixed", "kind": "fixed-official-component-union", "version": 1},
            "closure": {"status": "closed", "entryCount": 1, "components": ["sample"], "platforms": ["mac"], "proof": "test"},
            "entries": [{
                "command": item["cmd"], "context": item.get("context", ""), "aliases": [],
                "entryType": "keyboard-shortcut", "component": "sample", "platforms": ["mac"],
                "constraints": [], "description": item["en"], "usage": item["cmd"], "options": [],
                "officialExamples": [item["examples"][0]["value"]], "url": "https://example.com/docs#ctrl-k",
            }],
        }
        dataset["meta"]["officialCoverage"] = host.official_coverage(inventory, 1)
        dataset = host.validate_dataset(dataset, "sample", enforce_global_contract=True)
        review = host.build_scenario_review(dataset, inventory)
        token = "b" * 32
        payload = {
            "token": token, "mode": "add", "toolId": "sample", "oldHash": None,
            "dataset": dataset, "officialInventory": inventory, "scenarioReview": review,
            "diff": {"risks": []}, "channel": "store",
            "officialAdapter": inventory["adapter"],
            "sourceRegistry": dataset["meta"]["sources"],
            "generationEnvironment": {"providerId": "claude", "providerDisplayName": "Claude Code", "cliVersion": "test"},
        }
        with tempfile.TemporaryDirectory() as temp, mock.patch.object(host, "PENDING_DIR", temp):
            host.atomic_write(host.pending_path(token), json.dumps(payload))
            applied = host.apply_update(token, channel="store")
            self.assertIn("transfer", applied)
            chunks = [host.read_bundle_chunk(token, index)["data"] for index in range(applied["transfer"]["totalChunks"])]
            import base64
            import hashlib
            raw = b"".join(base64.b64decode(chunk) for chunk in chunks)
            self.assertEqual(len(raw), applied["transfer"]["totalBytes"])
            self.assertEqual(hashlib.sha256(raw).hexdigest(), applied["transfer"]["sha256"])
            self.assertEqual(json.loads(raw)["dataset"]["meta"]["id"], "sample")
            host.finalize_bundle(token)
            self.assertFalse(pathlib.Path(host.pending_path(token)).exists())


if __name__ == "__main__":
    unittest.main()
