#!/usr/bin/env python3
"""Re-download pinned official releases and detect command-inventory drift.

Normal CI validates the committed component fixtures without network access.
This independent check fetches the exact upstream releases, verifies their
SHA-256 values, reruns every parser and compares the result with the committed
fixtures. Any unavailable, changed or unparsable source fails closed.
"""

from __future__ import annotations

import argparse
from concurrent.futures import ThreadPoolExecutor
import importlib.util
import json
import os
from pathlib import Path
import re
import shutil
import subprocess
import tarfile
import tempfile
import urllib.parse
import urllib.request


ROOT = Path(__file__).resolve().parents[1]
REBUILDER_PATH = ROOT / "tools" / "rebuild-official-command-unions.py"
SPEC = importlib.util.spec_from_file_location("official_command_rebuilder", REBUILDER_PATH)
if SPEC is None or SPEC.loader is None:
    raise RuntimeError("cannot load official command rebuild adapters")
REBUILDER = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(REBUILDER)


def load_committed_components() -> dict[str, dict]:
    result = {}
    for tool_id in ("unix-cli", "linux"):
        path = ROOT / "shared" / "official-component-fixtures" / f"{tool_id}.json"
        fixture = json.loads(path.read_text())
        for component in fixture["components"]:
            if component["id"] in result and result[component["id"]] != component:
                raise RuntimeError(f"conflicting committed fixture for {component['id']}")
            result[component["id"]] = component
    return result


def download(url: str, destination: Path) -> None:
    parsed = urllib.parse.urlparse(url)
    if parsed.scheme != "https" or not parsed.hostname:
        raise RuntimeError(f"refusing non-HTTPS official source: {url}")
    temporary = destination.with_suffix(destination.suffix + ".part")
    last_error = None
    curl = shutil.which("curl")
    if curl:
        temporary.unlink(missing_ok=True)
        result = subprocess.run(  # nosec B603 - URL is HTTPS and must match the pinned adapter map
            [
                curl, "--fail", "--location", "--silent", "--show-error",
                "--retry", "3", "--retry-all-errors", "--connect-timeout", "30",
                "--max-time", "600", "--output", str(temporary), url,
            ],
            check=False,
            capture_output=True,
            text=True,
        )
        if result.returncode == 0:
            temporary.replace(destination)
            return
        last_error = RuntimeError(result.stderr.strip() or f"curl exited {result.returncode}")
    for _attempt in range(3):
        temporary.unlink(missing_ok=True)
        request = urllib.request.Request(url, headers={"User-Agent": "ai-cli-cheatsheet-official-drift-check/1"})
        try:
            with urllib.request.urlopen(request, timeout=300) as response:  # nosec B310 - HTTPS is enforced above
                if response.status != 200:
                    raise RuntimeError(f"official source returned HTTP {response.status}: {url}")
                with temporary.open("wb") as handle:
                    shutil.copyfileobj(response, handle, length=1024 * 1024)
            temporary.replace(destination)
            return
        except (OSError, TimeoutError) as exc:
            last_error = exc
    temporary.unlink(missing_ok=True)
    raise RuntimeError(f"failed to download pinned official source after 3 attempts: {url}: {last_error}")


def ensure_archive(cache: Path, component: dict) -> Path:
    archive = cache / component["archive"]
    if not archive.exists():
        download(component["downloadUrl"], archive)
    actual = REBUILDER.sha256_bytes(archive.read_bytes())
    if actual != component["archiveSha256"]:
        archive.unlink()
        download(component["downloadUrl"], archive)
        actual = REBUILDER.sha256_bytes(archive.read_bytes())
    if actual != component["archiveSha256"]:
        raise RuntimeError(
            f"{component['id']} archive SHA-256 changed: expected "
            f"{component['archiveSha256']}, got {actual}"
        )
    return archive


def ensure_posix_pages(cache: Path, contents: Path) -> None:
    text = contents.read_text(errors="ignore")
    names = sorted(set(re.findall(
        r'href=["\']\.\./utilities/([^/"\'#]+)\.html(?:#[^"\']*)?["\']', text, re.I,
    )))
    names = [name for name in names if not name.startswith("V3_") and name != "contents"]
    if len(names) != 155:
        raise RuntimeError(f"POSIX Issue 8 contents index exposed {len(names)} utility pages, expected 155")
    pages = cache / "posix-pages"
    pages.mkdir(exist_ok=True)
    def fetch_page(name: str) -> None:
        destination = pages / f"{name}.html"
        if not destination.exists():
            download(
                f"https://pubs.opengroup.org/onlinepubs/9799919799/utilities/{name}.html",
                destination,
            )
    with ThreadPoolExecutor(max_workers=8) as workers:
        list(workers.map(fetch_page, names))


def ensure_extracted(cache: Path, component_id: str, archive: Path) -> None:
    expected_root = REBUILDER.SOURCE_SPECS[component_id].get("root")
    if not expected_root:
        return
    extracted_root = cache / expected_root
    if extracted_root.exists() and any(path.is_file() for path in extracted_root.rglob("*")):
        return
    # A cancelled older verification may leave only the destination directory.
    # Treat that empty shell as incomplete instead of silently skipping extraction.
    if extracted_root.exists():
        shutil.rmtree(extracted_root)
    with tempfile.TemporaryDirectory(dir=cache, prefix="extract-") as temporary:
        stage = Path(temporary)
        # Extraction happens only after the archive matches its committed digest.
        stage_root = stage.resolve()
        with tarfile.open(archive, mode="r:*") as package:
            for member in package.getmembers():
                destination = (stage / member.name).resolve()
                try:
                    destination.relative_to(stage_root)
                except ValueError as exc:
                    raise RuntimeError(f"{component_id} archive contains an unsafe path") from exc
                if member.isdir():
                    destination.mkdir(parents=True, exist_ok=True)
                    continue
                if member.issym():
                    if Path(member.linkname).is_absolute():
                        raise RuntimeError(f"{component_id} archive contains an absolute symlink")
                    link_target = (destination.parent / member.linkname).resolve()
                    try:
                        link_target.relative_to(stage_root)
                    except ValueError as exc:
                        raise RuntimeError(
                            f"{component_id} archive symlink escapes extraction root"
                        ) from exc
                    destination.parent.mkdir(parents=True, exist_ok=True)
                    os.symlink(member.linkname, destination)
                    continue
                if not member.isreg():
                    raise RuntimeError(f"{component_id} archive contains an unsupported special entry")
                source = package.extractfile(member)
                if source is None:
                    raise RuntimeError(f"{component_id} archive entry could not be read")
                destination.parent.mkdir(parents=True, exist_ok=True)
                with source, destination.open("wb") as output:
                    shutil.copyfileobj(source, output)
        roots = [path for path in stage.iterdir() if path.is_dir()]
        if len(roots) != 1:
            raise RuntimeError(f"{component_id} archive did not contain one source root")
        shutil.move(str(roots[0]), str(extracted_root))


def verify(cache: Path) -> None:
    committed = load_committed_components()
    for component_id in REBUILDER.SOURCE_SPECS:
        component = committed[component_id]
        print(f"checking {component_id} {component['version']}...", flush=True)
        expected_url = REBUILDER.PINNED_DOWNLOAD_URLS[component_id]
        if component.get("downloadUrl") != expected_url:
            raise RuntimeError(f"{component_id} fixture download URL is not pinned to the adapter")
        archive = ensure_archive(cache, component)
        if component_id == "posix-utilities":
            ensure_posix_pages(cache, archive)
        else:
            ensure_extracted(cache, component_id, archive)

    for tool_id in ("unix-cli", "linux"):
        fresh = REBUILDER.build_fixture(tool_id, cache)
        committed_fixture = json.loads((
            ROOT / "shared" / "official-component-fixtures" / f"{tool_id}.json"
        ).read_text())
        fresh.pop("generatedAt", None)
        committed_fixture.pop("generatedAt", None)
        if fresh != committed_fixture:
            raise RuntimeError(
                f"{tool_id} official entry points changed; rebuild data, inventory and scenario review together"
            )
        inventory = REBUILDER.build_inventory(fresh)
        print(
            f"{tool_id}: verified {len(inventory['entries'])} canonical entries from "
            f"{len(fresh['components'])} pinned official components"
        )


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--source-cache", type=Path,
        help="reuse a source cache; missing archives/pages are still downloaded",
    )
    args = parser.parse_args()
    if args.source_cache:
        args.source_cache.mkdir(parents=True, exist_ok=True)
        verify(args.source_cache.resolve())
        return
    with tempfile.TemporaryDirectory(prefix="official-command-sources-") as temporary:
        verify(Path(temporary))


if __name__ == "__main__":
    main()
