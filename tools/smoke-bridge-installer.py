#!/usr/bin/env python3
"""Build one platform's bridge installer from a stub payload.

The installer templates can only be validated by the real packaging toolchain
(WiX, pkgbuild, fpm), and those toolchains used to run exclusively on tag push.
Two Windows defects shipped that way: an invalid auto-GUID component (WIX0230)
and an unsigned build invoking signtool with a certificate path that had never
been written.

Packaging a few bytes instead of the real PyInstaller output keeps this cheap
enough to run on every pull request — the templates do not care what the payload
contains. This intentionally exercises the *unsigned* path, which is what every
release without signing credentials actually takes.
"""

import argparse
import importlib.util
import pathlib
import shutil
import sys


ROOT = pathlib.Path(__file__).resolve().parents[1]


def load_builder():
    spec = importlib.util.spec_from_file_location(
        "build_bridge_assets", ROOT / "tools" / "build-bridge-assets.py"
    )
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--platform", required=True, choices=["macos", "windows", "linux"])
    parser.add_argument("--arch", default="x64")
    parser.add_argument("--output", default="dist/installer-smoke")
    parser.add_argument("--version", default="0.0.0")
    args = parser.parse_args()

    assets = load_builder()
    output = pathlib.Path(args.output)
    output.mkdir(parents=True, exist_ok=True)
    if args.platform == "macos":
        stub = output / "aicli-cheatsheet-bridge-bundle"
        internal = stub / "_internal"
        internal.mkdir(parents=True)
        executable = stub / "aicli-cheatsheet-bridge"
        shutil.copy2("/usr/bin/true", executable)
        executable.chmod(0o755)
        produced = assets.build_macos(stub, output, args.version, args.arch, False)
    elif args.platform == "windows":
        stub = output / "aicli-cheatsheet-bridge.exe"
        stub.write_bytes(b"MZ stub payload")
        stub.chmod(0o755)
        produced = assets.build_windows(stub, output, args.version, False)
    else:
        stub = output / "aicli-cheatsheet-bridge"
        stub.write_bytes(b"stub payload")
        stub.chmod(0o755)
        produced = assets.build_linux(stub, output, args.version)

    if not produced:
        print("no installer asset was produced", file=sys.stderr)
        return 1
    for asset in produced:
        size = asset.stat().st_size if asset.exists() else 0
        print(f"built {asset.name} ({size} bytes)")
        if size <= 0:
            print(f"{asset.name} is empty", file=sys.stderr)
            return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
