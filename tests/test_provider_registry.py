import base64
import json
import os
from pathlib import Path
import sys
import tempfile
import unittest
from unittest import mock


ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / "native-host"))

import generic_profiles  # noqa: E402
import provider_registry as registry  # noqa: E402


RFC_SEED = bytes.fromhex(
    "9d61b19deffd5a60ba844af492ec2cc44449c5697b326919703bac031cae7f60"
)
RFC_PUBLIC_KEY = bytes.fromhex(
    "d75a980182b10ab7d54bfed3c964073a0ee172f3daa62325af021a68f707511a"
)


def catalog(version=2):
    return {
        "schemaVersion": 1,
        "catalogVersion": version,
        "minimumProtocolVersion": 5,
        "adapters": [{
            "id": "catalog:fifth",
            "displayName": "Fifth AI",
            "transport": "cli",
            "driver": "stdin-json",
            "executableCandidates": ["fifth-ai"],
            "argv": ["--read-only", "--json"],
            "promptMode": "stdin",
            "outputParser": "json",
            "versionArgs": ["--version"],
            "loginCommand": "fifth-ai login",
            "security": {
                "readOnly": True,
                "officialReference": "https://example.com/fifth-ai/read-only",
            },
            "recommendationOrder": 40,
        }],
    }


class ProviderRegistryTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.state = Path(self.temp.name) / "state"
        self.shared = Path(self.temp.name) / "shared"
        self.shared.mkdir()
        for name in (
            "provider-adapters.json", "provider-catalog-public-key.json",
            "common-provider-catalog.json", "provider-adapters-v5.json",
        ):
            (self.shared / name).write_bytes((ROOT / "shared" / name).read_bytes())
        (self.shared / "provider-catalog-public-key.json").write_text(json.dumps({
            "algorithm": "Ed25519",
            "publicKey": base64.b64encode(RFC_PUBLIC_KEY).decode("ascii"),
            "status": "test",
        }), encoding="utf-8")

    def tearDown(self):
        self.temp.cleanup()

    def test_rfc8032_sign_and_verify_vector(self):
        self.assertEqual(registry.ed25519_public_key(RFC_SEED), RFC_PUBLIC_KEY)
        signature = registry.ed25519_sign(RFC_SEED, b"")
        self.assertTrue(registry.ed25519_verify(RFC_PUBLIC_KEY, b"", signature))
        self.assertFalse(registry.ed25519_verify(RFC_PUBLIC_KEY, b"changed", signature))

    def test_signed_catalog_adds_fifth_provider_without_changing_builtins(self):
        envelope = registry.sign_catalog_envelope(catalog(), RFC_SEED)
        installed = registry.install_catalog_envelope(
            envelope, str(self.shared), str(self.state)
        )
        self.assertEqual(installed["providerCount"], 1)
        loaded = registry.load_registry(str(self.shared), str(self.state))
        self.assertEqual(
            [entry["id"] for entry in loaded["providers"]],
            ["claude", "codex", "gemini", "opencode", "catalog:fifth", "qwen"],
        )
        self.assertRegex(loaded["catalogDigest"], r"^sha256:[a-f0-9]{64}$")

    def test_legacy_safe_base_catalog_excludes_v5_only_driver(self):
        """A strict v4 bridge must be able to load the shared base catalog."""
        base = json.loads((self.shared / "provider-adapters.json").read_text(
            encoding="utf-8"
        ))
        self.assertEqual(base["minimumProtocolVersion"], 4)
        self.assertEqual(
            {adapter["driver"] for adapter in base["adapters"]},
            {"builtin-claude", "builtin-codex", "builtin-gemini", "builtin-opencode"},
        )
        self.assertNotIn(
            "builtin-qwen", {adapter["driver"] for adapter in base["adapters"]}
        )

    def test_missing_v5_overlay_keeps_legacy_builtins_available(self):
        (self.shared / "provider-adapters-v5.json").unlink()
        loaded = registry.load_registry(str(self.shared), str(self.state))
        self.assertEqual(
            [entry["id"] for entry in loaded["providers"]],
            ["claude", "codex", "gemini", "opencode"],
        )
        self.assertIsNone(loaded["builtinOverlayError"])

    def test_invalid_v5_overlay_only_disables_v5_builtins(self):
        overlay = json.loads((self.shared / "provider-adapters-v5.json").read_text(
            encoding="utf-8"
        ))
        overlay["adapters"][0]["id"] = "claude"
        (self.shared / "provider-adapters-v5.json").write_text(
            json.dumps(overlay), encoding="utf-8"
        )
        loaded = registry.load_registry(str(self.shared), str(self.state))
        self.assertEqual(
            [entry["id"] for entry in loaded["providers"]],
            ["claude", "codex", "gemini", "opencode"],
        )
        self.assertIn("重复", loaded["builtinOverlayError"])

    def test_tampering_and_version_rollback_leave_previous_catalog_active(self):
        envelope = registry.sign_catalog_envelope(catalog(version=3), RFC_SEED)
        registry.install_catalog_envelope(envelope, str(self.shared), str(self.state))
        tampered = json.loads(json.dumps(envelope))
        tampered["payload"]["adapters"][0]["displayName"] = "Tampered"
        with self.assertRaisesRegex(registry.ProviderRegistryError, "SHA-256"):
            registry.install_catalog_envelope(tampered, str(self.shared), str(self.state))
        rollback = registry.sign_catalog_envelope(catalog(version=2), RFC_SEED)
        with self.assertRaisesRegex(registry.ProviderRegistryError, "回退"):
            registry.install_catalog_envelope(rollback, str(self.shared), str(self.state))
        conflicting_payload = catalog(version=3)
        conflicting_payload["adapters"][0]["displayName"] = "Conflicting"
        conflict = registry.sign_catalog_envelope(conflicting_payload, RFC_SEED)
        with self.assertRaisesRegex(registry.ProviderRegistryError, "相同版本"):
            registry.install_catalog_envelope(conflict, str(self.shared), str(self.state))
        loaded = registry.load_registry(str(self.shared), str(self.state))
        self.assertEqual(loaded["catalogVersion"], 3)
        self.assertEqual(loaded["byId"]["catalog:fifth"]["displayName"], "Fifth AI")

    def test_adapter_rejects_paths_shell_and_unapproved_placeholders(self):
        bad = catalog()
        bad["adapters"][0]["executableCandidates"] = ["/bin/sh"]
        with self.assertRaisesRegex(registry.ProviderRegistryError, "路径或 Shell"):
            registry.validate_catalog(bad)
        bad = catalog()
        bad["adapters"][0]["argv"] = ["--output", "{prompt}"]
        with self.assertRaisesRegex(registry.ProviderRegistryError, "未批准占位符"):
            registry.validate_catalog(bad)

    def test_api_profile_is_dynamic_and_token_never_enters_registry_digest(self):
        self.state.mkdir()
        provider_id = "api:12345678-1234-1234-1234-123456789abc"
        config = {
            "schemaVersion": 1,
            "profiles": [{
                "id": provider_id,
                "displayName": "Local Compatible API",
                "protocol": "openai-responses",
                "baseUrl": "http://127.0.0.1:11434",
                "model": "local-model",
                "token": "secret-token-value",
            }],
        }
        (self.state / "provider-api-config.json").write_text(
            json.dumps(config), encoding="utf-8"
        )
        loaded = registry.load_registry(str(self.shared), str(self.state))
        self.assertIn(provider_id, loaded["byId"])
        self.assertNotIn("token", loaded["byId"][provider_id])
        self.assertNotIn("secret-token-value", json.dumps(loaded))
        profiles = registry.load_api_profiles(str(self.state), include_secret=True)
        self.assertEqual(profiles[0]["token"], "secret-token-value")

    def test_graphical_api_save_persists_only_in_bridge_state(self):
        self.state.mkdir()
        saved = registry.save_api_profile(str(self.state), {
            "displayName": "Team API",
            "protocol": "openai-responses",
            "baseUrl": "https://api.example.test/v1",
            "model": "team-model",
            "token": "local-only-test-token",
        })
        self.assertRegex(saved["id"], r"^api:[a-f0-9-]{36}$")
        self.assertNotIn("token", saved)
        loaded = registry.load_api_profiles(str(self.state), include_secret=True)
        self.assertEqual(loaded[0]["token"], "local-only-test-token")
        public_registry = registry.load_registry(str(self.shared), str(self.state))
        self.assertNotIn("local-only-test-token", json.dumps(public_registry))

    def test_download_rejects_non_https_before_network(self):
        with mock.patch.object(registry.urllib.request, "urlopen") as opener:
            with self.assertRaisesRegex(registry.ProviderRegistryError, "HTTPS"):
                registry.download_catalog_envelope(
                    str(self.shared), str(self.state), "http://example.com/catalog.json"
                )
        opener.assert_not_called()

    def test_corrupt_installed_catalog_falls_back_to_builtins(self):
        self.state.mkdir()
        (self.state / "provider-catalog-envelope.json").write_text(
            '{"payload":{},"sha256":"bad","signature":"bad"}', encoding="utf-8"
        )
        loaded = registry.load_registry(str(self.shared), str(self.state))
        self.assertEqual(
            [provider["id"] for provider in loaded["providers"]],
            ["claude", "codex", "gemini", "opencode", "qwen"],
        )
        self.assertIn("SHA-256", loaded["catalogError"])

    def test_explicit_stale_refresh_installs_a_signed_catalog_and_records_check_time(self):
        envelope = registry.sign_catalog_envelope(catalog(version=4), RFC_SEED)

        def download(_shared, state_dir, url=registry.CATALOG_UPDATE_URL):
            self.assertEqual(url, registry.CATALOG_UPDATE_URL)
            return registry.install_catalog_envelope(envelope, str(self.shared), state_dir)

        with mock.patch.object(registry, "download_catalog_envelope", side_effect=download) as refresh:
            result = registry.refresh_catalog_if_stale(
                str(self.shared), str(self.state), now=1_000_000
            )
        self.assertEqual(result["status"], "updated")
        self.assertEqual(result["checkedAt"], "1970-01-12T13:46:40Z")
        refresh.assert_called_once()
        self.assertIn("catalog:fifth", registry.load_registry(str(self.shared), str(self.state))["byId"])

    def test_fresh_catalog_does_not_refresh_again_until_seven_days_pass(self):
        envelope = registry.sign_catalog_envelope(catalog(version=4), RFC_SEED)
        registry.install_catalog_envelope(envelope, str(self.shared), str(self.state))
        registry._atomic_json(registry.catalog_refresh_path(str(self.state)), {
            "schemaVersion": 1,
            "lastSuccessfulCheckAt": 1_000_000,
            "lastAttemptAt": 1_000_000,
            "lastFailureAt": 0,
            "lastResult": "updated",
        })
        with mock.patch.object(registry, "download_catalog_envelope") as refresh:
            result = registry.refresh_catalog_if_stale(
                str(self.shared), str(self.state), now=1_000_000 + 6 * 24 * 60 * 60
            )
        self.assertEqual(result["status"], "current")
        refresh.assert_not_called()

    def test_refresh_failure_keeps_old_catalog_and_applies_one_hour_backoff(self):
        envelope = registry.sign_catalog_envelope(catalog(version=4), RFC_SEED)
        registry.install_catalog_envelope(envelope, str(self.shared), str(self.state))
        registry._atomic_json(registry.catalog_refresh_path(str(self.state)), {
            "schemaVersion": 1,
            "lastSuccessfulCheckAt": 1,
            "lastAttemptAt": 1,
            "lastFailureAt": 0,
            "lastResult": "updated",
        })
        with mock.patch.object(
            registry, "download_catalog_envelope",
            side_effect=registry.ProviderRegistryError("network failure /private/path"),
        ) as refresh:
            failed = registry.refresh_catalog_if_stale(
                str(self.shared), str(self.state), now=1_000_000
            )
            backed_off = registry.refresh_catalog_if_stale(
                str(self.shared), str(self.state), now=1_000_060
            )
        self.assertEqual(failed["status"], "failed")
        self.assertEqual(backed_off["status"], "backoff")
        self.assertIn("nextRetryAt", backed_off)
        refresh.assert_called_once()
        active = registry.load_registry(str(self.shared), str(self.state))
        self.assertEqual(active["byId"]["catalog:fifth"]["displayName"], "Fifth AI")

    def test_refresh_without_a_release_key_never_attempts_network(self):
        (self.shared / "provider-catalog-public-key.json").write_text(json.dumps({
            "algorithm": "Ed25519", "publicKey": "", "status": "source",
        }), encoding="utf-8")
        with mock.patch.object(registry, "download_catalog_envelope") as refresh:
            result = registry.refresh_catalog_if_stale(
                str(self.shared), str(self.state), now=1_000_000
            )
        self.assertEqual(result["status"], "unavailable")
        refresh.assert_not_called()

    def test_common_provider_catalog_lists_known_tools_without_granting_execution(self):
        providers = registry.load_common_provider_catalog(str(self.shared))
        self.assertEqual(
            [entry["displayName"] for entry in providers],
            [
                "Claude Code", "Codex CLI", "Gemini CLI", "OpenCode",
                "GitHub Copilot CLI", "Qwen Code", "Kimi Code", "Goose",
                "Auggie", "Aider",
            ],
        )
        self.assertTrue(all(entry["adapterStatus"] in {
            "built-in", "configuration-required", "unsupported"
        } for entry in providers))
        self.assertNotIn("github-copilot-cli", registry.load_registry(
            str(self.shared), str(self.state)
        )["byId"], "a display-only common entry must not become executable")

    def test_custom_adapter_persists_locally_and_changes_registry_digest(self):
        saved = registry.save_custom_adapter(str(self.state), {
            "displayName": "My Local AI",
            "executable": "my-local-ai",
            "driver": "stdin-json",
            "argv": ["--json", "--read-only"],
            "promptMode": "stdin",
            "outputParser": "json",
            "versionArgs": ["--version"],
            "loginCommand": "my-local-ai login",
            "readOnlyConfirmed": True,
        })
        self.assertRegex(saved["id"], r"^custom:[a-f0-9-]{36}$")
        self.assertFalse(saved["verified"])
        self.assertTrue(saved["userConfigured"])
        loaded = registry.load_registry(str(self.shared), str(self.state))
        self.assertIn(saved["id"], loaded["byId"])
        self.assertEqual(loaded["byId"][saved["id"]]["source"], "custom")
        self.assertTrue((self.state / "custom-provider-adapters.json").exists())
        updated = registry.save_custom_adapter(str(self.state), {
            "id": saved["id"],
            "displayName": "My Local AI",
            "executable": "my-local-ai",
            "driver": "jsonl-events",
            "argv": ["--events"],
            "promptMode": "stdin",
            "outputParser": "jsonl-text",
            "versionArgs": ["--version"],
            "loginCommand": "my-local-ai login",
            "readOnlyConfirmed": True,
        })
        self.assertEqual(updated["id"], saved["id"])
        self.assertEqual(registry.load_registry(str(self.shared), str(self.state))["byId"][saved["id"]]["driver"], "jsonl-events")
        self.assertTrue(registry.delete_custom_adapter(str(self.state), saved["id"])["deleted"])
        self.assertNotIn(saved["id"], registry.load_registry(str(self.shared), str(self.state))["byId"])

    def test_custom_adapter_rejects_paths_shell_syntax_and_missing_confirmation(self):
        base = {
            "displayName": "Unsafe",
            "executable": "unsafe-ai",
            "driver": "stdin-json",
            "argv": ["--json"],
            "promptMode": "stdin",
            "outputParser": "json",
            "versionArgs": ["--version"],
            "readOnlyConfirmed": True,
        }
        for field, value, expected in [
            ("executable", "/tmp/unsafe", "路径或 Shell"),
            ("argv", ["--json", "|", "cat"], "Shell 元字符"),
            ("argv", ["$(whoami)"], "Shell 元字符"),
            ("readOnlyConfirmed", False, "只读"),
        ]:
            candidate = {**base, field: value}
            with self.assertRaisesRegex(registry.ProviderRegistryError, expected):
                registry.save_custom_adapter(str(self.state), candidate)

    def test_generic_adapter_binds_a_bridge_template_and_preserves_legacy_configuration(self):
        legacy = registry.save_custom_adapter(str(self.state), {
            "displayName": "Legacy AI",
            "executable": "legacy-ai",
            "driver": "stdin-json",
            "argv": ["--json", "--read-only"],
            "promptMode": "stdin",
            "outputParser": "json",
            "versionArgs": ["--version"],
            "readOnlyConfirmed": True,
        })
        generic = registry.save_generic_adapter(str(self.state), {
            "displayName": "Generic AI",
            "executable": "generic-ai",
            "genericProfileId": "prompt-flag-json",
            "genericConfirmed": True,
        })
        loaded = registry.load_registry(str(self.shared), str(self.state))
        self.assertEqual(loaded["byId"][legacy["id"]]["executionMode"], "legacy-configured")
        adapter = loaded["byId"][generic["id"]]
        self.assertEqual(adapter["executionMode"], "generic")
        self.assertEqual(adapter["genericProfileId"], "prompt-flag-json")
        self.assertEqual(adapter["argv"], ["-p", "{prompt}", "--output-format", "json"])
        self.assertEqual(adapter["promptMode"], "argv-template")
        self.assertEqual(adapter["versionArgs"], ["--version"])
        self.assertEqual(adapter["outputParser"], "json")
        self.assertNotIn("read-only", adapter["capabilities"])

    def test_generic_adapter_still_supports_the_bare_stdin_template(self):
        generic = registry.save_generic_adapter(str(self.state), {
            "displayName": "Stdin AI",
            "executable": "stdin-ai",
            "genericProfileId": "stdin-json",
            "genericConfirmed": True,
        })
        adapter = registry.load_registry(str(self.shared), str(self.state))["byId"][generic["id"]]
        self.assertEqual(adapter["argv"], [])
        self.assertEqual(adapter["promptMode"], "stdin")

    def test_generic_adapter_rejects_confirmation_bypass_and_custom_arguments(self):
        with self.assertRaisesRegex(registry.ProviderRegistryError, "风险确认"):
            registry.save_generic_adapter(str(self.state), {
                "displayName": "Generic AI", "executable": "generic-ai",
                "genericProfileId": "stdin-json", "genericConfirmed": False,
            })
        with self.assertRaisesRegex(registry.ProviderRegistryError, "模板无效"):
            registry.save_generic_adapter(str(self.state), {
                "displayName": "Generic AI", "executable": "generic-ai",
                "genericProfileId": "not-a-template", "genericConfirmed": True,
            })
        # An argv that is not byte-for-byte a bridge template — including a
        # template with one extra argument appended — must fail closed.
        for argv, prompt_mode in [
            (["--json"], "stdin"),
            (["-p", "{prompt}", "--output-format", "json", "--yolo"], "argv-template"),
            (["-p", "{prompt}"], "stdin"),
        ]:
            with self.assertRaisesRegex(registry.ProviderRegistryError, "桥接内置的调用模板"):
                registry.save_custom_adapter(str(self.state), {
                    "displayName": "Generic AI", "executable": "generic-ai", "driver": "stdin-json",
                    "argv": argv, "promptMode": prompt_mode, "outputParser": "json",
                    "versionArgs": ["--version"], "executionMode": "generic",
                    "genericConfirmed": True,
                })

    def test_corrupt_custom_registry_fails_closed_without_hiding_builtins(self):
        self.state.mkdir()
        (self.state / "custom-provider-adapters.json").write_text(
            '{"schemaVersion":1,"adapters":[{"id":"custom:not-a-uuid"}]}',
            encoding="utf-8",
        )
        loaded = registry.load_registry(str(self.shared), str(self.state))
        self.assertIn("claude", loaded["byId"])
        self.assertTrue(loaded["customConfigError"])


class CatalogReleaseTests(unittest.TestCase):
    """Guard the signed catalog channel that ships new AI environments.

    CI never exercised this before: shared/provider-catalog-template.json is
    only signed by a workflow_dispatch job, so a template that fails validation
    or breaks the sign/verify round trip would not surface until release day.
    """

    TEMPLATE = Path(__file__).resolve().parent.parent / "shared" / "provider-catalog-template.json"

    def _template(self):
        with open(self.TEMPLATE, encoding="utf-8") as handle:
            return json.load(handle)

    def test_template_is_publishable(self):
        payload = self._template()
        # validate_catalog is what the bridge runs before replacing an active
        # catalog, so the release template must already satisfy it.
        catalog = registry.validate_catalog(payload)
        self.assertEqual(catalog["minimumProtocolVersion"], registry.PROTOCOL_VERSION)
        for adapter in catalog["adapters"]:
            with self.subTest(adapter=adapter["id"]):
                # A catalog adapter runs against the user's machine without a
                # per-use risk confirmation, so it must carry a read-only
                # declaration backed by a first-party HTTPS reference. Tools
                # with no documented read-only mode belong in the generic,
                # explicitly-unverified path instead.
                self.assertTrue(adapter["security"]["readOnly"])
                self.assertTrue(adapter["security"]["officialReference"].startswith("https://"))

    def test_template_signs_and_verifies_round_trip(self):
        seed = bytes(range(32))
        envelope = registry.sign_catalog_envelope(self._template(), seed)
        with tempfile.TemporaryDirectory() as shared:
            with open(os.path.join(shared, "provider-catalog-public-key.json"), "w",
                      encoding="utf-8") as handle:
                json.dump({
                    "algorithm": "Ed25519",
                    "publicKey": base64.b64encode(
                        registry.ed25519_public_key(seed)
                    ).decode("ascii"),
                }, handle)
            verified = registry.verify_catalog_envelope(envelope, shared)
            self.assertEqual(verified["catalogVersion"], self._template()["catalogVersion"])
            # A tampered payload must not verify against the same signature.
            tampered = {**envelope, "payload": {**envelope["payload"], "catalogVersion": 99}}
            with self.assertRaises(registry.ProviderRegistryError):
                registry.verify_catalog_envelope(tampered, shared)

    def test_catalog_updates_stay_disabled_without_a_release_public_key(self):
        # The committed public key is empty; only a release build injects one.
        # Until then the bridge must report the channel as unavailable rather
        # than accepting an unverified catalog.
        shipped = json.loads(
            (self.TEMPLATE.parent / "provider-catalog-public-key.json").read_text(encoding="utf-8")
        )
        if shipped.get("publicKey"):
            self.skipTest("release build injected a signing key")
        with tempfile.TemporaryDirectory() as shared, tempfile.TemporaryDirectory() as state:
            for name in ("provider-adapters.json", "provider-adapters-v5.json",
                         "provider-catalog-public-key.json"):
                (Path(shared) / name).write_text(
                    (self.TEMPLATE.parent / name).read_text(encoding="utf-8"), encoding="utf-8"
                )
            loaded = registry.load_registry(shared, state)
            self.assertFalse(loaded["catalogUpdateSupported"])
            refreshed = registry.refresh_catalog_if_stale(shared, state)
            self.assertEqual(refreshed["status"], "unavailable")


class GenericProfileTests(unittest.TestCase):
    """The generic templates are the only argv a generic environment may use."""

    def test_every_template_is_shell_free_and_holds_one_standalone_prompt(self):
        for profile_id in generic_profiles.generic_profile_ids():
            profile = generic_profiles.generic_profile(profile_id)
            with self.subTest(profile=profile_id):
                self.assertIn(profile["promptMode"], {"stdin", "argv-template"})
                for argument in profile["argv"]:
                    self.assertNotRegex(argument, r"[|&;<>`$\s]")
                placeholders = profile["argv"].count(generic_profiles.PROMPT_PLACEHOLDER)
                if profile["promptMode"] == "argv-template":
                    self.assertEqual(placeholders, 1)
                    # A placeholder must be a whole element, never a fragment
                    # concatenated with other text.
                    self.assertNotIn(
                        True,
                        [generic_profiles.PROMPT_PLACEHOLDER in item
                         and item != generic_profiles.PROMPT_PLACEHOLDER
                         for item in profile["argv"]],
                    )
                else:
                    self.assertEqual(placeholders, 0)

    def test_render_argv_replaces_exactly_one_element(self):
        profile = generic_profiles.generic_profile("prompt-flag-json")
        rendered = generic_profiles.render_argv(profile, "task; rm -rf /")
        # The prompt stays one array element regardless of its content, and no
        # other element is touched.
        self.assertEqual(rendered, ["-p", "task; rm -rf /", "--output-format", "json"])
        self.assertEqual(rendered.count("task; rm -rf /"), 1)

    def test_render_argv_fails_closed_on_a_malformed_template(self):
        for argv in [[], ["-p", "{prompt}", "{prompt}"]]:
            with self.assertRaises(ValueError):
                generic_profiles.render_argv(
                    {"argv": argv, "promptMode": "argv-template"}, "task"
                )

    def test_unknown_template_ids_are_not_resolvable(self):
        for profile_id in [None, "", "custom", "prompt-flag-json ", "../stdin-json"]:
            self.assertIsNone(generic_profiles.generic_profile(profile_id))


if __name__ == "__main__":
    unittest.main()
