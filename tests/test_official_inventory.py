import importlib.util
import copy
import json
import pathlib
import unittest


ROOT = pathlib.Path(__file__).resolve().parents[1]
SPEC = importlib.util.spec_from_file_location(
    "official_inventory", ROOT / "native-host" / "official_inventory.py"
)
inventory = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(inventory)


class OfficialInventoryTests(unittest.TestCase):
    def test_parses_docker_command_alias_and_subcommand_without_network(self):
        markdown = """# docker container

**Description:** Manage containers

**Usage:** `docker container`

**Aliases:** `docker containers`

## Subcommands

| Command | Description |
|---------|-------------|
| [`docker container pause`](https://docs.docker.com/reference/cli/docker/container/pause/) | Pause containers |

## Examples

```console
$ docker container ls
```
"""
        entry, links = inventory._parse_docker_page(
            "https://docs.docker.com/reference/cli/docker/container/", markdown
        )
        self.assertEqual(entry["command"], "docker container")
        self.assertEqual(entry["aliases"], ["docker containers"])
        self.assertEqual(entry["officialExample"], "docker container ls")
        self.assertEqual(links[0][0], "docker container pause")

    def test_parser_change_is_a_structured_failure(self):
        with self.assertRaises(inventory.OfficialInventoryError) as caught:
            inventory._parse_docker_page(
                "https://docs.docker.com/reference/cli/docker/container/", "unexpected"
            )
        diagnostic = caught.exception.diagnostic()
        self.assertEqual(diagnostic["code"], "official_parser_changed")
        self.assertTrue(diagnostic["actions"])

    def test_inventory_hash_is_stable(self):
        entries = [{"command": "docker pause", "aliases": []}]
        self.assertEqual(inventory.inventory_hash(entries), inventory.inventory_hash(entries))
        self.assertTrue(inventory.inventory_hash(entries).startswith("sha256:"))

    def test_component_union_is_rebuilt_independently_from_rendered_snapshot(self):
        adapters = json.loads((ROOT / "shared" / "official-inventory-adapters.json").read_text())["adapters"]
        for tool_id in ("unix-cli", "linux"):
            fixture = json.loads((ROOT / "shared" / "official-component-fixtures" / f"{tool_id}.json").read_text())
            independently_enumerated = inventory._component_union_entries(fixture)
            rebuilt = inventory.build_component_union_inventory(tool_id, adapters[tool_id])
            snapshot = json.loads((ROOT / "shared" / "official-inventories" / f"{tool_id}.json").read_text())
            self.assertEqual(len(rebuilt["entries"]), len(independently_enumerated))
            self.assertEqual(rebuilt["entries"], snapshot["entries"])
            self.assertEqual(rebuilt["closure"]["componentCounts"], snapshot["closure"]["componentCounts"])
            self.assertEqual(rebuilt["closure"]["sourceManifestHash"], snapshot["closure"]["sourceManifestHash"])

    def test_removing_an_upstream_fixture_entry_changes_the_closed_union(self):
        cases = {
            "unix-cli": {"posix-utilities": "admin"},
            "linux": {
                "procps-ng": "hugetop",
                "systemd": "systemd-analyze",
                "util-linux": "addpart.static",
                "iproute2": "bridge",
            },
        }
        for tool_id, removals in cases.items():
            fixture = json.loads((ROOT / "shared" / "official-component-fixtures" / f"{tool_id}.json").read_text())
            original = inventory._component_union_entries(fixture)
            for component_id, command in removals.items():
                with self.subTest(tool=tool_id, component=component_id, command=command):
                    mutated = copy.deepcopy(fixture)
                    component = next(item for item in mutated["components"] if item["id"] == component_id)
                    component["entries"] = [entry for entry in component["entries"] if entry["command"] != command]
                    rebuilt = inventory._component_union_entries(mutated)
                    self.assertEqual(len(rebuilt), len(original) - 1)
                    self.assertNotIn(command, {entry["command"] for entry in rebuilt})

    def test_every_component_has_a_pinned_source_parser_and_exclusion_policy(self):
        for tool_id in ("unix-cli", "linux"):
            fixture = json.loads((ROOT / "shared" / "official-component-fixtures" / f"{tool_id}.json").read_text())
            self.assertEqual(fixture["manifestHash"], inventory.inventory_hash(fixture["components"]))
            for component in fixture["components"]:
                self.assertTrue(component["sourceUrl"].startswith("https://"))
                self.assertTrue(component["downloadUrl"].startswith("https://"))
                self.assertRegex(component["archiveSha256"], r"^[a-f0-9]{64}$")
                self.assertTrue(component["parser"])
                self.assertTrue(component["entries"])
                self.assertIsInstance(component["exclusions"], list)
        posix = json.loads((ROOT / "shared" / "official-component-fixtures" / "unix-cli.json").read_text())
        posix_entries = next(component for component in posix["components"] if component["id"] == "posix-utilities")["entries"]
        self.assertEqual(len(posix_entries), 155)


if __name__ == "__main__":
    unittest.main()
