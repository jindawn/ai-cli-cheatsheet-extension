import importlib.util
from pathlib import Path
import tempfile
import unittest


ROOT = Path(__file__).resolve().parents[1]
SPEC = importlib.util.spec_from_file_location(
    "official_command_rebuilder",
    ROOT / "tools" / "rebuild-official-command-unions.py",
)
REBUILDER = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(REBUILDER)


class DeveloperCommandScenarioTests(unittest.TestCase):
    def test_compact_posix_short_options_are_expanded(self):
        entry = {
            "cmd": "ls",
            "usage": "ls [ -ikqrs ] [ -A|-a ] [ -C|-m|-x|-1 ] [ -l ] [ file ... ]",
            "options": ["-A", "-C", "-l"],
        }
        allowed = REBUILDER.usage_options(entry)
        self.assertIn("-a", allowed)
        self.assertEqual(
            REBUILDER.primary_option_tokens("ls -la", "ls", allowed),
            ["-l", "-a"],
        )

    def test_nested_command_options_are_not_attributed_to_parent(self):
        self.assertEqual(
            REBUILDER.primary_option_tokens("watch free -m", "watch"),
            [],
        )
        self.assertEqual(
            REBUILDER.primary_option_tokens("taskset -c 0 npm test", "taskset"),
            ["-c"],
        )

    def test_expression_primaries_and_attached_values_are_audited(self):
        find = {
            "id": "unix-find",
            "cmd": "find",
            "usage": "find [ -H|-L ] path ... [ operand_expression ... ]",
            "options": ["-H", "-L"],
        }
        REBUILDER.audit_scenario_example(
            "unix-cli",
            find,
            0,
            {"value": "find . -name '*.test.js' -type f"},
        )
        with self.assertRaisesRegex(RuntimeError, "undocumented option"):
            REBUILDER.audit_scenario_example(
                "unix-cli",
                find,
                1,
                {"value": "find . --invented value"},
            )
        awk = {
            "id": "unix-awk",
            "cmd": "awk",
            "usage": "awk [ -F sepstring ]",
            "options": ["-F"],
        }
        REBUILDER.audit_scenario_example(
            "unix-cli",
            awk,
            0,
            {"value": "awk -F, '{print $1}' data.csv"},
        )

    def test_documented_gnu_developer_forms_are_audited(self):
        grep = {
            "id": "unix-grep",
            "cmd": "grep",
            "usage": "grep [ OPTION ] PATTERNS [ FILE ]",
            "options": ["-n"],
        }
        tar = {
            "id": "unix-tar",
            "cmd": "tar",
            "usage": "tar [ OPTIONS ] [ FILE ]",
            "options": [],
        }
        REBUILDER.audit_scenario_example(
            "unix-cli",
            grep,
            0,
            {"value": "grep -r 'legacyApi' ./src"},
        )
        REBUILDER.audit_scenario_example(
            "unix-cli",
            tar,
            0,
            {"value": "tar -xzf release.tar.gz"},
        )
        REBUILDER.audit_scenario_example(
            "unix-cli",
            tar,
            1,
            {"value": "tar -czf archive.tar.gz example-dir"},
        )
        ss = {
            "id": "linux-ss",
            "cmd": "ss",
            "usage": "ss [ options ] [ FILTER ]",
            "options": ["-h"],
        }
        REBUILDER.audit_scenario_example(
            "linux",
            ss,
            0,
            {"value": "ss -lnt"},
        )

    def test_transaction_rolls_back_every_replaced_file(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            first = root / "a.json"
            second = root / "b.json"
            curation = root / "developer-command-curation.json"
            first.write_bytes(b"old-a")
            second.write_bytes(b"old-b")
            curation.write_bytes(b"old-curation")
            targets = {
                first: b"new-a",
                second: b"new-b",
                curation: b"candidate-curation",
            }
            expected = {
                first: REBUILDER.file_content_hash(first),
                second: REBUILDER.file_content_hash(second),
            }
            replacements = 0

            def fail_after_generated_files(source, destination):
                nonlocal replacements
                replacements += 1
                if replacements == 3:
                    raise OSError("simulated curation replacement failure")
                REBUILDER.os.replace(source, destination)

            with self.assertRaisesRegex(RuntimeError, "restored"):
                REBUILDER.atomic_write_transaction(
                    targets,
                    expected,
                    replace_func=fail_after_generated_files,
                )
            self.assertEqual(first.read_bytes(), b"old-a")
            self.assertEqual(second.read_bytes(), b"old-b")
            self.assertEqual(curation.read_bytes(), b"old-curation")


if __name__ == "__main__":
    unittest.main()
