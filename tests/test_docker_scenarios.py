import collections
import importlib.util
import json
import pathlib
import re
import unittest


ROOT = pathlib.Path(__file__).resolve().parents[1]
DATA_MARKER = 'window.CHEATSHEET_DATA["docker"] = '
FORBIDDEN_TEXT = (
    "需要确认当前 Docker 版本是否支持",
    "打开该命令的本机帮助而不执行实际操作",
    "终端显示 Usage、Options 和命令说明",
)
PLACEHOLDER_RE = re.compile(
    r"\b(?:CONTAINER|IMAGE|SERVICE|NETWORK|VOLUME|NODE|SECRET|CONFIG|PLUGIN|CONTEXT)\b"
)


def load_docker_data():
    text = (ROOT / "data" / "docker.js").read_text(encoding="utf-8")
    return json.loads(text.split(DATA_MARKER, 1)[1][:-2])


class DockerScenarioQualityTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.dataset = load_docker_data()
        cls.inventory = json.loads(
            (ROOT / "shared" / "official-inventories" / "docker.json").read_text(encoding="utf-8")
        )
        cls.inventory_by_command = {
            entry["command"]: entry for entry in cls.inventory["entries"]
        }
        commands = set(cls.inventory_by_command)
        cls.namespaces = {
            command for command in commands
            if any(other.startswith(command + " ") for other in commands)
        }
        cls.items = {
            item["cmd"]: item for item in cls.dataset["items"]
            if item["cmd"] in commands
        }

    def test_every_official_command_has_specific_scenario_fields(self):
        self.assertEqual(set(self.inventory_by_command), set(self.items))
        for command, item in self.items.items():
            example = item["examples"][0]
            for field in ("description", "scenario", "goal", "expected"):
                value = example.get(field, "")
                self.assertRegex(value, r"[\u3400-\u9fff]", f"{command}: {field}")
                self.assertFalse(
                    any(phrase in value for phrase in FORBIDDEN_TEXT),
                    f"{command}: {field} still uses the generic template",
                )

    def test_leaf_examples_execute_the_matching_command(self):
        for command, item in self.items.items():
            value = item["examples"][0]["value"]
            self.assertFalse(PLACEHOLDER_RE.search(value), f"{command}: placeholder in {value}")
            if command in self.namespaces:
                continue
            self.assertNotIn("--help", value, f"{command}: leaf command uses help as its scenario")
            targets = [command, *item.get("aliases", [])]
            self.assertTrue(
                any(value == target or value.startswith(target + " ") for target in targets),
                f"{command}: example belongs to a different command: {value}",
            )

    def test_scenario_fields_are_not_mass_repeated(self):
        for field in ("description", "scenario", "goal", "expected"):
            counts = collections.Counter(
                item["examples"][0][field] for item in self.items.values()
            )
            value, count = counts.most_common(1)[0]
            self.assertLessEqual(count, 3, f"{field} repeated {count} times: {value}")

    def test_pause_matches_real_pause_workflow(self):
        item = self.items["docker container pause"]
        example = item["examples"][0]
        self.assertIn("docker pause", example["value"])
        self.assertIn("docker unpause", example["description"] + example["expected"])
        self.assertIn("(Paused)", example["expected"])
        self.assertFalse(example["copyable"])
        self.assertIn("Windows", example["caveat"])
        self.assertTrue(example["warning"])

    def test_reviewed_edge_cases_do_not_overstate_cli_behavior(self):
        events = self.items["docker compose events"]["examples"][0]
        self.assertIn("--json", events["value"])
        self.assertIn("JSON", events["expected"])
        scale = self.items["docker compose scale"]["examples"][0]
        self.assertNotIn("负载均衡", scale["description"])
        self.assertNotRegex(scale["expected"], r"web_[123]")
        for command in ("docker container restart", "docker container rm"):
            example = self.items[command]["examples"][0]
            self.assertNotRegex(example.get("caveat", "") + example.get("warning", ""), r"dry-run|预览")

    def test_sync_reuses_reviewed_scenario_cache_for_new_items(self):
        script = ROOT / "tools" / "sync-docker-official.py"
        spec = importlib.util.spec_from_file_location("sync_docker_official", script)
        module = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(module)
        enrichment = {
            "zh": "暂停容器进程",
            "value": "docker pause demo",
            "description": "冻结 demo 内的进程",
            "scenario": "短时维护期间暂停任务处理",
            "goal": "保留状态并暂停 demo",
            "expected": "容器状态显示为 Paused",
            "copyable": False,
            "caveat": "执行前确认业务允许短时中断",
            "warning": "容器会暂时停止处理请求",
        }
        item = module.generated_item(
            {
                "command": "docker container pause",
                "description": "Pause container processes",
                "url": "https://docs.docker.com/reference/cli/docker/container/pause/",
            },
            "2026-07-13",
            ["docker pause"],
            {"docker container pause": enrichment},
        )
        example = item["examples"][0]
        self.assertEqual(item["zh"], enrichment["zh"])
        self.assertEqual(example["scenario"], enrichment["scenario"])
        self.assertNotIn("--help", example["value"])


if __name__ == "__main__":
    unittest.main()
