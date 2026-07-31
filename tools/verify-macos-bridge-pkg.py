#!/usr/bin/env python3
"""Verify a packaged macOS bridge, including an actual Native Messaging handshake."""

import argparse
import json
from pathlib import Path
import struct
import subprocess
import tempfile


STORE_EXTENSION_ID = "jdiopjiebnamikpcknmnpahhlokccgjj"
HOST_NAMES = (
    "com.aicli.cheatsheet.store_bridge",
    "com.aicli.cheatsheet_updater",
)
INSTALL_PATH = Path("Library/Application Support/AI CLI Cheatsheet")
EXECUTABLE_PATH = f"/{INSTALL_PATH}/aicli-cheatsheet-bridge"


def run(args, **kwargs):
    return subprocess.run(
        [str(value) for value in args],
        check=True,
        **kwargs,
    )


def assert_manifest(path, host_name):
    document = json.loads(path.read_text(encoding="utf-8"))
    expected = {
        "name": host_name,
        "description": "AI CLI 速查表查询与数据维护桥接",
        "path": EXECUTABLE_PATH,
        "type": "stdio",
        "allowed_origins": [f"chrome-extension://{STORE_EXTENSION_ID}/"],
    }
    if document != expected:
        raise RuntimeError(f"native host manifest is invalid: {path}")


def assert_no_quarantine(root):
    completed = subprocess.run(
        ["/usr/bin/xattr", "-lr", str(root)],
        check=False,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
    )
    if "com.apple.quarantine" in completed.stdout:
        raise RuntimeError("packaged payload retains quarantine metadata")


def handshake(executable, version):
    request = {
        "action": "handshake",
        "protocolVersion": 5,
        "schemaVersion": 2,
        "extensionId": STORE_EXTENSION_ID,
        "refreshCatalog": False,
    }
    encoded = json.dumps(request).encode("utf-8")
    completed = run(
        [executable],
        input=struct.pack("<I", len(encoded)) + encoded,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        timeout=45,
    )
    if len(completed.stdout) < 4:
        stderr = completed.stderr.decode("utf-8", "replace")[:1000]
        raise RuntimeError(f"bridge returned no Native Messaging response: {stderr}")
    length = struct.unpack("<I", completed.stdout[:4])[0]
    payload = completed.stdout[4:4 + length]
    if len(payload) != length:
        raise RuntimeError("bridge returned a truncated Native Messaging response")
    response = json.loads(payload.decode("utf-8"))
    expected = {
        "ok": True,
        "protocolVersion": 5,
        "schemaVersion": 2,
        "bridgeVersion": version,
    }
    actual = {key: response.get(key) for key in expected}
    if actual != expected:
        raise RuntimeError(f"bridge handshake mismatch: {actual}")


def verify(package, version):
    with tempfile.TemporaryDirectory(prefix="aicli-macos-pkg-") as directory:
        expanded = Path(directory) / "expanded"
        run(["pkgutil", "--expand-full", package, expanded])
        payload = expanded / "Payload"
        install_dir = payload / INSTALL_PATH
        executable = install_dir / "aicli-cheatsheet-bridge"
        internal = install_dir / "_internal"
        framework = internal / "Python.framework"
        if not executable.is_file() or not internal.is_dir() or not framework.is_dir():
            raise RuntimeError("macOS package is missing the onedir bridge runtime")
        for link in (
            framework / "Python",
            framework / "Resources",
            framework / "Versions" / "Current",
        ):
            if not link.is_symlink():
                raise RuntimeError(f"Python.framework symlink was not preserved: {link}")

        assert_no_quarantine(payload)
        run(["codesign", "--verify", "--deep", "--strict", "--verbose=2", framework])
        run(["codesign", "--verify", "--deep", "--strict", "--verbose=2", executable])

        for relative in (
            Path("Library/Google/Chrome/NativeMessagingHosts"),
            Path("Library/Microsoft/Edge/NativeMessagingHosts"),
        ):
            for host_name in HOST_NAMES:
                assert_manifest(payload / relative / f"{host_name}.json", host_name)

        handshake(executable, version)
    print(f"Verified macOS bridge package and v5 handshake: {package}")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--package", type=Path, required=True)
    parser.add_argument("--version", required=True)
    args = parser.parse_args()
    if not args.package.is_file():
        parser.error("--package does not exist")
    if not args.version or any(not part.isdigit() for part in args.version.split(".")):
        parser.error("--version must contain numeric components")
    verify(args.package, args.version)


if __name__ == "__main__":
    main()
