import importlib.util
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


if __name__ == "__main__":
    unittest.main()
