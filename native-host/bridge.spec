# -*- mode: python ; coding: utf-8 -*-

from pathlib import Path
import sys

ROOT = Path(SPECPATH).resolve().parent

a = Analysis(
    [str(ROOT / "native-host" / "host.py")],
    pathex=[str(ROOT / "native-host")],
    binaries=[],
    datas=[(str(ROOT / "shared"), "shared")],
    hiddenimports=[],
    hookspath=[],
    hooksconfig={},
    runtime_hooks=[],
    excludes=[],
    noarchive=False,
)
pyz = PYZ(a.pure)
if sys.platform == "darwin":
    # A macOS onefile executable extracts Python.framework into a temporary
    # directory at runtime. Gatekeeper assesses that freshly materialised
    # framework independently and can reject it as damaged even though the
    # outer executable is ad-hoc signed. Keep the framework in a stable onedir
    # layout so the installer can seal and verify the complete bundle.
    exe = EXE(
        pyz,
        a.scripts,
        [],
        exclude_binaries=True,
        name="aicli-cheatsheet-bridge",
        debug=False,
        bootloader_ignore_signals=False,
        strip=False,
        upx=False,
        console=True,
    )
    collect = COLLECT(
        exe,
        a.binaries,
        a.datas,
        strip=False,
        upx=False,
        name="aicli-cheatsheet-bridge",
    )
else:
    exe = EXE(
        pyz,
        a.scripts,
        a.binaries,
        a.datas,
        [],
        name="aicli-cheatsheet-bridge",
        debug=False,
        bootloader_ignore_signals=False,
        strip=False,
        upx=False,
        # Native Messaging uses stdin/stdout on every platform.  A Windows GUI
        # executable would detach those handles and make the bridge unusable.
        console=True,
    )
