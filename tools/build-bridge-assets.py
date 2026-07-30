#!/usr/bin/env python3
"""Build signed, self-contained Native Messaging installer assets."""

import argparse
import json
import os
from pathlib import Path
import re
import shutil
import subprocess
import sys
import uuid


STORE_EXTENSION_ID = "jdiopjiebnamikpcknmnpahhlokccgjj"
HOST_NAME = "com.aicli.cheatsheet_updater"


def run(args):
    env = dict(os.environ)
    # Keep macOS resource-fork sidecars out of signed installer payloads.
    env["COPYFILE_DISABLE"] = "1"
    subprocess.run([str(value) for value in args], check=True, env=env)


def native_manifest(executable):
    return {
        "name": HOST_NAME,
        "description": "AI CLI 速查表查询与数据维护桥接",
        "path": str(executable),
        "type": "stdio",
        "allowed_origins": [f"chrome-extension://{STORE_EXTENSION_ID}/"],
    }


def write_json(path, value):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(value, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def build_macos(binary, output, version, arch, require_signing):
    work = output / f"macos-{arch}-root"
    if work.exists():
        shutil.rmtree(work)
    install_dir = work / "Library" / "Application Support" / "AI CLI Cheatsheet"
    chrome_dir = work / "Library" / "Google" / "Chrome" / "NativeMessagingHosts"
    edge_dir = work / "Library" / "Microsoft" / "Edge" / "NativeMessagingHosts"
    install_dir.mkdir(parents=True)
    bridge = install_dir / "aicli-cheatsheet-bridge"
    shutil.copy2(binary, bridge)
    bridge.chmod(0o755)
    manifest = native_manifest("/Library/Application Support/AI CLI Cheatsheet/aicli-cheatsheet-bridge")
    write_json(chrome_dir / f"{HOST_NAME}.json", manifest)
    write_json(edge_dir / f"{HOST_NAME}.json", manifest)
    uninstall = install_dir / "uninstall.command"
    uninstall.write_text(
        "#!/bin/sh\nset -eu\n"
        "if [ \"$(id -u)\" -ne 0 ]; then exec sudo \"$0\" \"$@\"; fi\n"
        f"rm -f '/Library/Google/Chrome/NativeMessagingHosts/{HOST_NAME}.json'\n"
        f"rm -f '/Library/Microsoft/Edge/NativeMessagingHosts/{HOST_NAME}.json'\n"
        "rm -rf '/Library/Application Support/AI CLI Cheatsheet'\n"
        "echo 'AI CLI Cheatsheet bridge removed.'\n",
        encoding="utf-8",
    )
    uninstall.chmod(0o755)
    run(["xattr", "-cr", work])
    app_identity = os.environ.get("MACOS_APPLICATION_IDENTITY")
    installer_identity = os.environ.get("MACOS_INSTALLER_IDENTITY")
    if require_signing and (not app_identity or not installer_identity):
        raise RuntimeError("macOS release requires application and installer signing identities")
    if app_identity:
        run(["codesign", "--force", "--options", "runtime", "--timestamp", "--sign", app_identity, bridge])
    asset = output / f"ai-cli-cheatsheet-bridge-macos-{arch}-v{version}.pkg"
    command = ["pkgbuild", "--root", work, "--identifier", "com.aicli.cheatsheet.bridge", "--version", version]
    if installer_identity:
        command.extend(["--sign", installer_identity])
    command.append(asset)
    run(command)
    if require_signing:
        required = ["APPLE_ID", "APPLE_APP_PASSWORD", "APPLE_TEAM_ID"]
        if any(not os.environ.get(key) for key in required):
            raise RuntimeError("macOS release requires notarization credentials")
        run([
            "xcrun", "notarytool", "submit", asset, "--wait",
            "--apple-id", os.environ["APPLE_ID"],
            "--password", os.environ["APPLE_APP_PASSWORD"],
            "--team-id", os.environ["APPLE_TEAM_ID"],
        ])
        run(["xcrun", "stapler", "staple", asset])
    return [asset]


def build_linux(binary, output, version):
    work = output / "linux-root"
    if work.exists():
        shutil.rmtree(work)
    bridge_dir = work / "usr" / "lib" / "ai-cli-cheatsheet"
    bridge_dir.mkdir(parents=True)
    bridge = bridge_dir / "aicli-cheatsheet-bridge"
    shutil.copy2(binary, bridge)
    bridge.chmod(0o755)
    manifest = native_manifest("/usr/lib/ai-cli-cheatsheet/aicli-cheatsheet-bridge")
    for relative in (
        Path("etc/opt/chrome/native-messaging-hosts"),
        Path("etc/chromium/native-messaging-hosts"),
        Path("etc/opt/edge/native-messaging-hosts"),
    ):
        write_json(work / relative / f"{HOST_NAME}.json", manifest)
    assets = []
    for package_type in ("deb", "rpm"):
        asset = output / f"ai-cli-cheatsheet-bridge-linux-x64-v{version}.{package_type}"
        run([
            "fpm", "-s", "dir", "-t", package_type,
            "-n", "ai-cli-cheatsheet-bridge", "-v", version,
            "--license", "MIT", "--vendor", "AI CLI Cheatsheet",
            "--description", "Native bridge for AI CLI Cheatsheet maintenance",
            "--architecture", "x86_64", "-C", work, "-p", asset, ".",
        ])
        assets.append(asset)
    return assets


def build_windows(binary, output, version, require_signing):
    work = output / "windows-wix"
    if work.exists():
        shutil.rmtree(work)
    work.mkdir(parents=True)
    bridge = work / "aicli-cheatsheet-bridge.exe"
    shutil.copy2(binary, bridge)
    manifest = native_manifest(r"C:\Program Files\AI CLI Cheatsheet\aicli-cheatsheet-bridge.exe")
    manifest_path = work / f"{HOST_NAME}.json"
    write_json(manifest_path, manifest)
    upgrade_code = str(uuid.uuid5(uuid.NAMESPACE_DNS, "com.aicli.cheatsheet.bridge"))
    # WiX refuses an auto-generated GUID for a component that mixes files with a
    # registry keypath (WIX0230), so the payload is split: one component per
    # file, plus a registry-only component. The registry component carries an
    # explicit GUID derived from a fixed name — a component GUID has to stay
    # byte-identical across releases or an upgrade orphans the old
    # native-messaging registration instead of replacing it.
    registry_guid = str(uuid.uuid5(uuid.NAMESPACE_DNS, "com.aicli.cheatsheet.bridge.registration"))
    host_json_value = f"[INSTALLFOLDER]{HOST_NAME}.json"
    wxs = work / "bridge.wxs"
    wxs.write_text(f'''<Wix xmlns="http://wixtoolset.org/schemas/v4/wxs">
  <Package Name="AI CLI Cheatsheet Bridge" Manufacturer="AI CLI Cheatsheet" Version="{version}" UpgradeCode="{upgrade_code}" Scope="perMachine">
    <MajorUpgrade DowngradeErrorMessage="A newer bridge is already installed." />
    <MediaTemplate EmbedCab="yes" />
    <StandardDirectory Id="ProgramFiles64Folder">
      <Directory Id="INSTALLFOLDER" Name="AI CLI Cheatsheet">
        <Component Id="BridgeExecutable" Guid="*" Bitness="always64">
          <File Source="{bridge}" KeyPath="yes" />
        </Component>
        <Component Id="BridgeHostManifest" Guid="*" Bitness="always64">
          <File Source="{manifest_path}" KeyPath="yes" />
        </Component>
        <Component Id="BridgeRegistration" Guid="{registry_guid}" Bitness="always64">
          <RegistryValue Root="HKLM" Key="Software\\Google\\Chrome\\NativeMessagingHosts\\{HOST_NAME}" Type="string" Value="{host_json_value}" KeyPath="yes" />
          <RegistryValue Root="HKLM" Key="Software\\Microsoft\\Edge\\NativeMessagingHosts\\{HOST_NAME}" Type="string" Value="{host_json_value}" />
        </Component>
      </Directory>
    </StandardDirectory>
    <Feature Id="Main" Title="AI CLI Cheatsheet Bridge" Level="1">
      <ComponentRef Id="BridgeExecutable" />
      <ComponentRef Id="BridgeHostManifest" />
      <ComponentRef Id="BridgeRegistration" />
    </Feature>
  </Package>
</Wix>
''', encoding="utf-8")
    asset = output / f"ai-cli-cheatsheet-bridge-windows-x64-v{version}.msi"
    run(["wix", "build", wxs, "-arch", "x64", "-o", asset])
    certificate = os.environ.get("WINDOWS_SIGNING_CERTIFICATE")
    password = os.environ.get("WINDOWS_SIGNING_PASSWORD")
    # A path is not evidence of a certificate. The release workflow exports this
    # variable unconditionally, so when the import step is skipped the variable
    # still holds a path to a file that was never written. Signing therefore has
    # to be driven by the file actually existing together with its password —
    # otherwise an unsigned build invokes signtool and dies with WinError 2.
    can_sign = bool(certificate) and bool(password) and Path(certificate).is_file()
    if require_signing and not can_sign:
        raise RuntimeError("Windows release requires an existing code-signing certificate and password")
    if can_sign:
        run([
            "signtool", "sign", "/fd", "SHA256", "/tr", "http://timestamp.digicert.com",
            "/td", "SHA256", "/f", certificate, "/p", password, asset,
        ])
    return [asset]


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--platform", choices=("macos", "linux", "windows"), required=True)
    parser.add_argument("--arch", default="x64")
    parser.add_argument("--binary", type=Path, required=True)
    parser.add_argument("--output", type=Path, required=True)
    parser.add_argument("--version", required=True)
    parser.add_argument("--require-signing", action="store_true")
    args = parser.parse_args()
    if not re.fullmatch(r"\d+\.\d+\.\d+", args.version):
        parser.error("--version must be semver x.y.z")
    if not args.binary.is_file():
        parser.error("--binary does not exist")
    args.output.mkdir(parents=True, exist_ok=True)
    if args.platform == "macos":
        assets = build_macos(args.binary, args.output, args.version, args.arch, args.require_signing)
    elif args.platform == "linux":
        assets = build_linux(args.binary, args.output, args.version)
    else:
        assets = build_windows(args.binary, args.output, args.version, args.require_signing)
    for asset in assets:
        print(asset)


if __name__ == "__main__":
    try:
        main()
    except (OSError, subprocess.CalledProcessError, RuntimeError) as exc:
        print(f"Bridge packaging failed: {exc}", file=sys.stderr)
        raise SystemExit(1)
