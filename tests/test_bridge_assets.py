"""Structural checks for the generated installer payloads.

WiX and MSI rules cannot be exercised on a non-Windows machine, and the Windows
bridge build had never actually run in CI, so its template shipped a WIX0230
violation undetected. These tests assert the structure the toolchain requires so
the same class of breakage fails locally instead of at release time.
"""

import importlib.util
import os
import pathlib
import tempfile
import unittest
import uuid
import xml.etree.ElementTree as ET
from unittest import mock


ROOT = pathlib.Path(__file__).resolve().parents[1]
SPEC = importlib.util.spec_from_file_location(
    "build_bridge_assets", ROOT / "tools" / "build-bridge-assets.py"
)
assets = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(assets)

WXS_NS = "http://wixtoolset.org/schemas/v4/wxs"
NS = {"w": WXS_NS}


def render_wxs(version="1.9.9"):
    """Generate bridge.wxs. The wix invocation itself is expected to fail here."""
    directory = tempfile.mkdtemp()
    output = pathlib.Path(directory)
    binary = output / "aicli-cheatsheet-bridge.exe"
    binary.write_bytes(b"MZ stub")
    try:
        assets.build_windows(binary, output, version, False)
    except Exception:  # noqa: BLE001 - wix is absent off Windows; the file is what matters
        pass
    return ET.fromstring((output / "windows-wix" / "bridge.wxs").read_text(encoding="utf-8"))


class WindowsInstallerTemplateTests(unittest.TestCase):
    def setUp(self):
        self.root = render_wxs()
        self.components = list(self.root.iter(f"{{{WXS_NS}}}Component"))

    def test_generates_at_least_one_component(self):
        self.assertTrue(self.components)

    def test_no_auto_guid_component_mixes_files_and_registry_values(self):
        """WIX0230: an auto GUID cannot cover both a file and a registry keypath."""
        for component in self.components:
            files = component.findall("w:File", NS)
            registry = component.findall("w:RegistryValue", NS)
            if component.get("Guid") == "*":
                self.assertFalse(
                    files and registry,
                    f"component {component.get('Id')} mixes files and registry values under an auto GUID",
                )

    def test_registry_component_uses_a_stable_explicit_guid(self):
        """A component GUID must not change between releases or upgrades orphan it."""
        for component in self.components:
            if component.findall("w:RegistryValue", NS):
                guid = component.get("Guid")
                self.assertNotEqual(guid, "*", "a registry component needs an explicit GUID")
                uuid.UUID(guid)
        # Same name in, same GUID out: assert the value does not drift with version.
        other = render_wxs(version="2.0.0")
        def registry_guids(root):
            return [
                component.get("Guid")
                for component in root.iter(f"{{{WXS_NS}}}Component")
                if component.findall("w:RegistryValue", NS)
            ]
        self.assertEqual(registry_guids(self.root), registry_guids(other))

    def test_every_component_has_exactly_one_keypath(self):
        for component in self.components:
            keypaths = [
                child for child in component
                if child.get("KeyPath") == "yes"
            ]
            self.assertEqual(
                len(keypaths), 1,
                f"component {component.get('Id')} must declare exactly one keypath",
            )

    def test_every_component_is_referenced_by_the_feature(self):
        declared = sorted(component.get("Id") for component in self.components)
        referenced = sorted(
            ref.get("Id") for ref in self.root.iter(f"{{{WXS_NS}}}ComponentRef")
        )
        self.assertEqual(declared, referenced)

    def test_registers_both_chrome_and_edge_native_messaging_hosts(self):
        values = [
            value.get("Key")
            for value in self.root.iter(f"{{{WXS_NS}}}RegistryValue")
        ]
        self.assertTrue(any("Google\\Chrome" in key for key in values))
        self.assertTrue(any("Microsoft\\Edge" in key for key in values))


class WindowsSigningGateTests(unittest.TestCase):
    """The release workflow exports WINDOWS_SIGNING_CERTIFICATE as a literal path.

    When the import step is skipped that path names a file which was never
    written, so treating a non-empty string as "a certificate exists" makes an
    unsigned build invoke signtool and fail with WinError 2.
    """

    def _build(self, env):
        directory = tempfile.mkdtemp()
        output = pathlib.Path(directory)
        binary = output / "aicli-cheatsheet-bridge.exe"
        binary.write_bytes(b"MZ stub")
        commands = []

        def fake_run(args):
            commands.append([str(item) for item in args])
            if args[0] == "wix":  # pretend the MSI was produced
                pathlib.Path(args[-1]).write_bytes(b"MSI stub")

        with mock.patch.dict(os.environ, env, clear=False), \
                mock.patch.object(assets, "run", side_effect=fake_run):
            assets.build_windows(binary, output, "1.9.9", False)
        return commands

    def test_does_not_sign_when_the_certificate_path_does_not_exist(self):
        commands = self._build({
            "WINDOWS_SIGNING_CERTIFICATE": str(pathlib.Path(tempfile.gettempdir()) / "absent.pfx"),
            "WINDOWS_SIGNING_PASSWORD": "",
        })
        self.assertFalse(
            any(command[0] == "signtool" for command in commands),
            "an unsigned build must not invoke signtool",
        )
        self.assertTrue(any(command[0] == "wix" for command in commands))

    def test_does_not_sign_when_a_real_certificate_has_no_password(self):
        with tempfile.NamedTemporaryFile(suffix=".pfx", delete=False) as handle:
            handle.write(b"pfx stub")
        commands = self._build({
            "WINDOWS_SIGNING_CERTIFICATE": handle.name,
            "WINDOWS_SIGNING_PASSWORD": "",
        })
        self.assertFalse(any(command[0] == "signtool" for command in commands))

    def test_signs_when_the_certificate_and_password_are_both_present(self):
        with tempfile.NamedTemporaryFile(suffix=".pfx", delete=False) as handle:
            handle.write(b"pfx stub")
        commands = self._build({
            "WINDOWS_SIGNING_CERTIFICATE": handle.name,
            "WINDOWS_SIGNING_PASSWORD": "secret",
        })
        signing = [command for command in commands if command[0] == "signtool"]
        self.assertEqual(len(signing), 1, "a real certificate must still be used")
        self.assertIn(handle.name, signing[0])

    def test_require_signing_fails_closed_without_a_usable_certificate(self):
        directory = tempfile.mkdtemp()
        output = pathlib.Path(directory)
        binary = output / "aicli-cheatsheet-bridge.exe"
        binary.write_bytes(b"MZ stub")
        env = {
            "WINDOWS_SIGNING_CERTIFICATE": str(pathlib.Path(directory) / "absent.pfx"),
            "WINDOWS_SIGNING_PASSWORD": "secret",
        }
        with mock.patch.dict(os.environ, env, clear=False), \
                mock.patch.object(assets, "run", side_effect=lambda args: pathlib.Path(args[-1]).write_bytes(b"x")):
            with self.assertRaises(RuntimeError):
                assets.build_windows(binary, output, "1.9.9", True)


if __name__ == "__main__":
    unittest.main()
