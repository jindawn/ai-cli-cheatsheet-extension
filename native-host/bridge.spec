# -*- mode: python ; coding: utf-8 -*-

from pathlib import Path

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
