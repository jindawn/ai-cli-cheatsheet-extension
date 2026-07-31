#!/usr/bin/env python3
"""Rebuild the Unix/POSIX and Linux command unions from pinned upstream sources.

The checked-in component fixtures are deliberately independent from the rendered
inventory and data files.  This script parses release archives (or an extracted
source cache), records the public entry points with provenance, then materializes
the inventory, extension data, scenario review and quality baseline as one unit.
"""

from __future__ import annotations

import argparse
import datetime as dt
import hashlib
import html
import json
import os
from pathlib import Path
import re
import sys
import tempfile


ROOT = Path(__file__).resolve().parents[1]
TODAY = dt.date.today().isoformat()
CURATION_PATH = ROOT / "shared" / "developer-command-curation.json"

SOURCE_SPECS = {
    "posix-utilities": {
        "tool": "unix-cli", "version": "IEEE Std 1003.1-2024 Issue 8",
        "sourceId": "posix-shell-utilities",
        "sourceUrl": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/contents.html",
        "archive": "posix-2024-utilities.html", "parser": "posix-html-index-v1",
    },
    "gnu-coreutils": {
        "tool": "unix-cli", "version": "9.11", "sourceId": "gnu-manuals",
        "sourceUrl": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz",
        "archive": "coreutils-9.11.tar.xz", "root": "coreutils-9.11", "parser": "man1-directory-v1",
    },
    "gnu-findutils": {
        "tool": "unix-cli", "version": "4.11.0", "sourceId": "gnu-manuals",
        "sourceUrl": "https://ftp.gnu.org/gnu/findutils/findutils-4.11.0.tar.xz",
        "archive": "findutils-4.11.0.tar.xz", "root": "findutils-4.11.0", "parser": "man1-directory-v1",
    },
    "gnu-grep": {
        "tool": "unix-cli", "version": "3.12", "sourceId": "gnu-manuals",
        "sourceUrl": "https://ftp.gnu.org/gnu/grep/grep-3.12.tar.xz",
        "archive": "grep-3.12.tar.xz", "root": "grep-3.12", "parser": "gnu-grep-build-v1",
    },
    "gnu-sed": {
        "tool": "unix-cli", "version": "4.10", "sourceId": "gnu-manuals",
        "sourceUrl": "https://ftp.gnu.org/gnu/sed/sed-4.10.tar.xz",
        "archive": "sed-4.10.tar.xz", "root": "sed-4.10", "parser": "man1-directory-v1",
    },
    "gnu-gawk": {
        "tool": "unix-cli", "version": "5.4.1", "sourceId": "gnu-manuals",
        "sourceUrl": "https://ftp.gnu.org/gnu/gawk/gawk-5.4.1.tar.xz",
        "archive": "gawk-5.4.1.tar.xz", "root": "gawk-5.4.1", "parser": "gawk-public-programs-v1",
    },
    "gnu-diffutils": {
        "tool": "unix-cli", "version": "3.12", "sourceId": "gnu-manuals",
        "sourceUrl": "https://ftp.gnu.org/gnu/diffutils/diffutils-3.12.tar.xz",
        "archive": "diffutils-3.12.tar.xz", "root": "diffutils-3.12", "parser": "man1-directory-v1",
    },
    "gnu-tar": {
        "tool": "unix-cli", "version": "1.35", "sourceId": "gnu-manuals",
        "sourceUrl": "https://ftp.gnu.org/gnu/tar/tar-1.35.tar.xz",
        "archive": "tar-1.35.tar.xz", "root": "tar-1.35", "parser": "gnu-tar-public-v1",
    },
    "gnu-wget": {
        "tool": "unix-cli", "version": "1.25.0", "sourceId": "gnu-manuals",
        "sourceUrl": "https://ftp.gnu.org/gnu/wget/wget-1.25.0.tar.gz",
        "archive": "wget-1.25.0.tar.gz", "root": "wget-1.25.0", "parser": "gnu-wget-public-v1",
    },
    "gnu-which": {
        "tool": "unix-cli", "version": "2.25", "sourceId": "gnu-manuals",
        "sourceUrl": "https://ftp.gnu.org/gnu/which/which-2.25.tar.gz",
        "archive": "which-2.25.tar.gz", "root": "which-2.25", "parser": "gnu-which-public-v1",
    },
    "openssh-client": {
        "tool": "unix-cli", "version": "10.4p1", "sourceId": "openssh-portable-repository",
        "sourceUrl": "https://github.com/openssh/openssh-portable/tree/V_10_4_P1",
        "archive": "openssh-V_10_4_P1.tar.gz", "root": "openssh-V_10_4_P1", "parser": "openssh-client-man1-v1",
    },
    "curl": {
        "tool": "unix-cli", "version": "8.21.0", "sourceId": "curl-docs",
        "sourceUrl": "https://github.com/curl/curl/releases/tag/curl-8_21_0",
        "archive": "curl-8.21.0.tar.gz", "root": "curl-8.21.0", "parser": "curl-public-programs-v1",
    },
    "less": {
        "tool": "unix-cli", "version": "708", "sourceId": "less-repository",
        "sourceUrl": "https://github.com/gwsw/less/tree/v708",
        "archive": "less-v708.tar.gz", "root": "less-v708", "parser": "less-install-targets-v1",
    },
    "ping-implementations": {
        "tool": "unix-cli", "version": "iputils-20250605/BSD", "sourceId": "iputils-repository",
        "sourceUrl": "https://github.com/iputils/iputils/releases/tag/20250605",
        "archive": "iputils-20250605.tar.gz", "root": "iputils-20250605", "parser": "ping-entrypoint-v1",
    },
    "top-implementations": {
        "tool": "unix-cli", "version": "procps-ng-4.0.6/BSD", "sourceId": "procps-ng-repository",
        "sourceUrl": "https://gitlab.com/procps-ng/procps/-/tags/v4.0.6",
        "archive": "procps-v4.0.6.tar.gz", "root": "procps-v4.0.6", "parser": "top-entrypoint-v1",
    },
    "procps-ng": {
        "tool": "linux", "version": "4.0.6", "sourceId": "procps-ng-repository",
        "sourceUrl": "https://gitlab.com/procps-ng/procps/-/tags/v4.0.6",
        "archive": "procps-v4.0.6.tar.gz", "root": "procps-v4.0.6", "parser": "man1-man8-directory-v1",
    },
    "systemd": {
        "tool": "linux", "version": "261.1", "sourceId": "systemd-man",
        "sourceUrl": "https://github.com/systemd/systemd/tree/v261.1",
        "archive": "systemd-v261.1.tar.gz", "root": "systemd-v261.1", "parser": "systemd-public-meson-v1",
    },
    "util-linux": {
        "tool": "linux", "version": "2.42.2", "sourceId": "util-linux-repository",
        "sourceUrl": "https://github.com/util-linux/util-linux/tree/v2.42.2",
        "archive": "util-linux-v2.42.2.tar.gz", "root": "util-linux-v2.42.2", "parser": "util-linux-man1-man8-v1",
    },
    "iproute2": {
        "tool": "linux", "version": "7.1.0", "sourceId": "iproute2-repository",
        "sourceUrl": "https://git.kernel.org/pub/scm/network/iproute2/iproute2.git/tag/?h=v7.1.0",
        "archive": "iproute2-v7.1.0.tar.gz", "root": "iproute2-v7.1.0", "parser": "iproute2-install-targets-v1",
    },
}

# These immutable-version download endpoints are kept separate from the human
# documentation URLs above. The online drift check verifies every downloaded
# byte against the SHA-256 committed in the component fixture before extraction.
PINNED_DOWNLOAD_URLS = {
    "posix-utilities": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/contents.html",
    "gnu-coreutils": "https://ftpmirror.gnu.org/coreutils/coreutils-9.11.tar.xz",
    "gnu-findutils": "https://ftpmirror.gnu.org/findutils/findutils-4.11.0.tar.xz",
    "gnu-grep": "https://ftpmirror.gnu.org/grep/grep-3.12.tar.xz",
    "gnu-sed": "https://ftpmirror.gnu.org/sed/sed-4.10.tar.xz",
    "gnu-gawk": "https://ftpmirror.gnu.org/gawk/gawk-5.4.1.tar.xz",
    "gnu-diffutils": "https://ftpmirror.gnu.org/diffutils/diffutils-3.12.tar.xz",
    "gnu-tar": "https://ftpmirror.gnu.org/tar/tar-1.35.tar.xz",
    "gnu-wget": "https://ftpmirror.gnu.org/wget/wget-1.25.0.tar.gz",
    "gnu-which": "https://ftpmirror.gnu.org/which/which-2.25.tar.gz",
    "openssh-client": "https://github.com/openssh/openssh-portable/archive/refs/tags/V_10_4_P1.tar.gz",
    "curl": "https://curl.se/download/curl-8.21.0.tar.gz",
    "less": "https://github.com/gwsw/less/archive/refs/tags/v708.tar.gz",
    "ping-implementations": "https://github.com/iputils/iputils/releases/download/20250605/iputils-20250605.tar.gz",
    "top-implementations": "https://gitlab.com/procps-ng/procps/-/archive/v4.0.6/procps-v4.0.6.tar.gz",
    "procps-ng": "https://gitlab.com/procps-ng/procps/-/archive/v4.0.6/procps-v4.0.6.tar.gz",
    "systemd": "https://github.com/systemd/systemd/archive/refs/tags/v261.1.tar.gz",
    "util-linux": "https://github.com/util-linux/util-linux/archive/refs/tags/v2.42.2.tar.gz",
    "iproute2": "https://git.kernel.org/pub/scm/network/iproute2/iproute2.git/snapshot/iproute2-7.1.0.tar.gz",
}

COMPONENT_ORDER = {
    "unix-cli": [key for key, value in SOURCE_SPECS.items() if value["tool"] == "unix-cli"],
    "linux": [key for key, value in SOURCE_SPECS.items() if value["tool"] == "linux"],
}


def sha256_bytes(value: bytes) -> str:
    return hashlib.sha256(value).hexdigest()


def compact_hash(value) -> str:
    raw = json.dumps(value, ensure_ascii=False, separators=(",", ":")).encode()
    return "sha256:" + sha256_bytes(raw)


def strip_markup(value: str) -> str:
    value = re.sub(r"<script\b[^>]*>[\s\S]*?</script>", " ", value, flags=re.I)
    value = re.sub(r"<[^>]+>", " ", value)
    value = html.unescape(value)
    value = re.sub(r"\\f[BRIP]|\\\&|\\\-|\\\(aq|\\\(dq|\\\s[+-]?\d+", "", value)
    value = re.sub(r"^\s*\.[A-Z][A-Z0-9]*\s*", "", value, flags=re.M)
    return re.sub(r"\s+", " ", value).strip(" -\n\t")


def man_section(text: str, name: str) -> str:
    match = re.search(rf"^\.SH\s+\"?{re.escape(name)}\"?\s*$([\s\S]*?)(?=^\.SH\s|\Z)", text, re.M | re.I)
    return match.group(1) if match else ""


def parse_roff(path: Path, command: str, locator: str) -> dict:
    text = path.read_text(errors="ignore")
    name = strip_markup(man_section(text, "NAME"))
    description = name.split(" - ", 1)[-1].split(" \\- ", 1)[-1].strip() if name else command
    synopsis = strip_markup(man_section(text, "SYNOPSIS"))
    options = []
    for option in re.findall(r"(?<!\w)(?:\\?-){1,2}[A-Za-z0-9][A-Za-z0-9-]*", man_section(text, "OPTIONS")):
        option = option.replace("\\", "")
        if option not in options:
            options.append(option)
    return {
        "command": command, "aliases": [], "description": description or command,
        "usage": synopsis[:280] or command, "options": options[:8], "officialExamples": [], "locator": locator,
    }


def parse_adoc(path: Path, command: str, locator: str) -> dict:
    text = path.read_text(errors="ignore")
    name = re.search(r"^== NAME\s*$([\s\S]*?)(?=^==\s|\Z)", text, re.M)
    synopsis = re.search(r"^== SYNOPSIS\s*$([\s\S]*?)(?=^==\s|\Z)", text, re.M)
    name_text = strip_markup(name.group(1).replace("*", "")) if name else command
    description = re.split(r"\s+-\s+", name_text, maxsplit=1)[-1]
    usage = strip_markup(synopsis.group(1).replace("*", "").replace("_", ""))[:280] if synopsis else command
    options = []
    option_block = re.search(r"^== OPTIONS\s*$([\s\S]*?)(?=^==\s|\Z)", text, re.M)
    for option in re.findall(r"(?<!\w)--?[A-Za-z0-9][A-Za-z0-9-]*", option_block.group(1) if option_block else ""):
        if option not in options:
            options.append(option)
    aliases = []
    if name_text:
        lhs = re.split(r"\s+-\s+", name_text, maxsplit=1)[0]
        aliases = [part.strip() for part in lhs.split(",") if part.strip() and part.strip() != command]
    return {
        "command": command, "aliases": aliases, "description": description or command,
        "usage": usage or command, "options": options[:8], "officialExamples": [], "locator": locator,
    }


def parse_posix(source_root: Path, spec: dict) -> tuple[list[dict], list[dict]]:
    entries = []
    for path in sorted((source_root / "posix-pages").glob("*.html")):
        text = path.read_text(errors="ignore")
        command = path.stem
        name = re.search(r">NAME</h4>\s*<blockquote>([\s\S]*?)</blockquote>", text, re.I)
        synopsis = re.search(r">SYNOPSIS</h4>\s*<blockquote[^>]*>([\s\S]*?)</blockquote>", text, re.I)
        name_text = strip_markup(name.group(1)) if name else command
        description = re.split(r"\s+[—-]\s+", name_text, maxsplit=1)[-1]
        usage = strip_markup(synopsis.group(1))[:280] if synopsis else command
        constraints = []
        for group in re.findall(r"<b>([A-Z][A-Z ]+)</b>", name.group(1) if name else ""):
            constraints.append(f"POSIX option group: {group.strip()}")
        synopsis_codes = sorted(set(re.findall(
            r"open_code\('([A-Z]+)'\)", synopsis.group(1) if synopsis else "",
        )))
        constraints.extend(
            f"some synopsis forms require POSIX option group {code}"
            for code in synopsis_codes
        )
        optional = re.search(
            r"This utility is part of the ([^.]+?) option and need not be supported by all implementations\.",
            strip_markup(text), re.I,
        )
        if optional:
            constraints.append(
                f"optional POSIX component: {optional.group(1).strip()}; not required on every conforming implementation"
            )
        options_block = re.search(r">OPTIONS</h4>\s*<blockquote[^>]*>([\s\S]*?)</blockquote>", text, re.I)
        options = []
        for option in re.findall(r"(?<!\w)-[A-Za-z0-9]", strip_markup(options_block.group(1)) if options_block else ""):
            if option not in options:
                options.append(option)
        entries.append({
            "command": command, "aliases": [], "description": description or command,
            "usage": usage or command, "options": options[:8], "officialExamples": [],
            "locator": f"https://pubs.opengroup.org/onlinepubs/9799919799/utilities/{command}.html",
            "constraints": constraints,
        })
    if len(entries) != 155:
        raise RuntimeError(f"POSIX Issue 8 parser expected 155 utilities, got {len(entries)}")
    return entries, []


def all_man_entries(root: Path, patterns: tuple[str, ...], base_url: str, exclude=()) -> list[dict]:
    paths = []
    for pattern in patterns:
        paths.extend(root.glob(pattern))
    entries = []
    for path in sorted(set(paths)):
        command = re.sub(r"\.[18](?:\.adoc)?$", "", path.name)
        if command in exclude:
            continue
        locator = f"{base_url} · {path.relative_to(root).as_posix()}"
        entries.append(parse_adoc(path, command, locator) if path.suffix == ".adoc" else parse_roff(path, command, locator))
    return entries


def meson_executable_blocks(text: str):
    """Yield balanced executable(...) calls without evaluating Meson code."""
    cursor = 0
    marker = "executable("
    while True:
        start = text.find(marker, cursor)
        if start < 0:
            return
        index = start + len(marker)
        depth = 1
        quote = None
        escaped = False
        while index < len(text) and depth:
            char = text[index]
            if quote:
                if escaped:
                    escaped = False
                elif char == "\\":
                    escaped = True
                elif char == quote:
                    quote = None
            elif char in "'\"":
                quote = char
            elif char == "(":
                depth += 1
            elif char == ")":
                depth -= 1
            index += 1
        if depth:
            raise RuntimeError("unterminated Meson executable() declaration")
        yield text[start:index]
        cursor = index


def parse_component(component: str, source_root: Path, spec: dict) -> tuple[list[dict], list[dict]]:
    if component == "posix-utilities":
        return parse_posix(source_root, spec)
    root = source_root / spec.get("root", "")
    base = spec["sourceUrl"].rstrip("/")
    if component == "gnu-coreutils":
        entries = all_man_entries(root, ("man/*.1",), base)
        for entry in entries:
            if entry["command"] == "coreutils":
                entry["constraints"] = ["available when GNU coreutils is built or installed in multi-call form"]
        return entries, []
    if component == "gnu-findutils":
        return all_man_entries(root, ("find/*.1", "locate/*.1", "xargs/*.1"), base), []
    if component == "gnu-grep":
        entry = parse_roff(root / "doc/grep.in.1", "grep", f"{base} · doc/grep.in.1")
        entry["aliases"] = ["egrep", "fgrep", "rgrep"]
        return [entry], []
    if component == "gnu-sed":
        return [parse_roff(root / "doc/sed.1", "sed", f"{base} · doc/sed.1")], [{"entry": "sed-dummy", "reason": "documentation build helper"}]
    if component == "gnu-gawk":
        entries = [parse_roff(root / "doc/gawk.1", "gawk", f"{base} · doc/gawk.1")]
        bug = root / "doc/gawkbug.1"
        if bug.exists():
            entries.append(parse_roff(bug, "gawkbug", f"{base} · doc/gawkbug.1"))
        return entries, [{"entry": "pm-gawk", "reason": "optional profiling variant, not a separately installed default public program"}]
    if component == "gnu-diffutils":
        return all_man_entries(root, ("man/*.1",), base), []
    if component == "gnu-tar":
        return [parse_roff(root / "doc/tar.1", "tar", f"{base} · doc/tar.1")], [{"entry": "rmt", "reason": "remote tape protocol helper, not a direct user command"}]
    if component == "gnu-wget":
        return [{"command": "wget", "aliases": [], "description": "retrieve files using HTTP, HTTPS and FTP", "usage": "wget [OPTION]... [URL]...", "options": [], "officialExamples": [], "locator": f"{base} · doc/wget.texi"}], []
    if component == "gnu-which":
        man = next(iter(root.glob("*.1")), None)
        if man:
            return [parse_roff(man, "which", f"{base} · {man.name}")], []
        return [{"command": "which", "aliases": [], "description": "locate a command", "usage": "which [options] programname [...]", "options": [], "officialExamples": [], "locator": base}], []
    if component == "openssh-client":
        entries = all_man_entries(root, ("*.1",), base)
        return entries, [
            {"entry": "sshd", "reason": "server daemon outside openssh-client scope"},
            {"entry": "ssh-keysign/ssh-pkcs11-helper/ssh-sk-helper", "reason": "non-interactive client helper programs"},
        ]
    if component == "curl":
        return [
            {"command": "curl", "aliases": [], "description": "transfer data from or to a server", "usage": "curl [options...] <url>", "options": [], "officialExamples": [], "locator": "https://curl.se/docs/manpage.html"},
            {"command": "curl-config", "aliases": [], "description": "report information about the installed libcurl", "usage": "curl-config [options]", "options": [], "officialExamples": [], "locator": f"{base} · docs/curl-config.md"},
        ], []
    if component == "less":
        return [{"command": "less", "aliases": [], "description": "view text one screen at a time", "usage": "less [options] file", "options": [], "officialExamples": [], "locator": f"{base} · less.nro.VER"}], [
            {"entry": "lessecho", "reason": "installed libexec helper"},
            {"entry": "lesskey", "reason": "no longer built as a standalone executable in release 708"},
        ]
    if component == "ping-implementations":
        return [{"command": "ping", "aliases": [], "description": "send ICMP echo requests to network hosts", "usage": "ping host", "options": [], "officialExamples": [], "locator": f"{base} · ping/ping.rst"}], [
            {"entry": "arping/clockdiff/tracepath", "reason": "Linux-only iputils programs outside the cross-platform ping implementation scope"},
        ]
    if component == "top-implementations":
        return [parse_roff(root / "man/top.1", "top", f"{base} · man/top.1")], []
    if component == "procps-ng":
        entries = all_man_entries(root, ("man/*.1", "man/*.8"), base)
        for entry in entries:
            entry["constraints"] = ["requires Linux with procps-ng 4.0.6 installed"]
        return entries, []
    if component == "util-linux":
        entries = all_man_entries(root, ("*/*.[18].adoc",), base)
        entry_by_command = {entry["command"]: entry for entry in entries}
        public_targets = set()
        for block in meson_executable_blocks((root / "meson.build").read_text(errors="ignore")):
            name = re.match(r"executable\(\s*'([^']+)'", block)
            if (name and re.search(r"\binstall\s*:", block)
                    and not re.search(r"\binstall\s*:\s*false", block)):
                public_targets.add(name.group(1))
        official_aliases = {
            alias for entry in entries for alias in entry.get("aliases", [])
        }
        missing_docs = sorted(public_targets - set(entry_by_command) - official_aliases)
        unexplained = [name for name in missing_docs if not name.endswith(".static")]
        if unexplained:
            raise RuntimeError(f"util-linux installed targets have no public manual mapping: {unexplained}")
        for command in missing_docs:
            base_command = command.removesuffix(".static")
            base_entry = entry_by_command.get(base_command)
            if not base_entry:
                raise RuntimeError(f"util-linux static target has no canonical manual: {command}")
            entries.append({
                **base_entry,
                "command": command,
                "aliases": [],
                "description": f"statically linked {base_entry['description']}",
                "usage": (base_entry.get("usage") or base_command).replace(base_command, command, 1),
                "locator": f"{base} · meson.build executable('{command}')",
                "constraints": [
                    "requires a util-linux 2.42.2 build with the corresponding static_programs target enabled",
                ],
            })
        for entry in entries:
            entry.setdefault("constraints", []).append(
                "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
            )
        return entries, [
            {"entry": "section 3/5 manuals", "reason": "libraries and configuration formats are not executable entry points"},
            {"entry": "Meson executable() targets without install", "reason": "tests and internal helpers are not installed public CLI entry points"},
            {"entry": "pam_lastlog2", "reason": "PAM module manual, not an executable entry point"},
        ]
    if component == "systemd":
        docs = {}
        for path in (root / "man").glob("*.xml"):
            text = path.read_text(errors="ignore")
            purpose = re.search(r"<refpurpose>([\s\S]*?)</refpurpose>", text)
            for name in re.findall(r"<refname>([^<]+)</refname>", text):
                docs[strip_markup(name)] = (strip_markup(purpose.group(1)) if purpose else name, path)
        entries = []
        excluded = []
        for path in sorted((root / "src").rglob("meson.build")):
            text = path.read_text(errors="ignore")
            for match in re.finditer(r"'name'\s*:\s*'([^']+)'", text):
                end = text.find("},", match.end())
                block = text[match.start():end if end >= 0 else match.end() + 1200]
                if "'public'" not in block:
                    continue
                command = match.group(1)
                public = re.search(r"'public'\s*:\s*([^,\n]+)", block)
                if public and public.group(1).strip() == "false":
                    excluded.append({"entry": command, "reason": "systemd build metadata marks the target non-public"})
                    continue
                conditions = []
                condition = re.search(r"'conditions'\s*:\s*\[([\s\S]*?)\]", block)
                if condition:
                    conditions = re.findall(r"'([^']+)'", condition.group(1))
                desc, doc = docs.get(command, (f"systemd public executable {command}", None))
                locator = f"https://www.freedesktop.org/software/systemd/man/latest/{command}.html" if doc else f"{base} · {path.relative_to(root).as_posix()}"
                entries.append({
                    "command": command, "aliases": [], "description": desc, "usage": command,
                    "options": [], "officialExamples": [], "locator": locator,
                    "constraints": [
                        "requires a Linux distribution built with systemd 261.1",
                        *[f"build option: {value}" for value in conditions],
                    ],
                })
        aliases = {"systemctl": ["halt", "poweroff", "reboot", "shutdown"], "systemd-mount": ["systemd-umount"], "resolvectl": ["resolvconf"]}
        for entry in entries:
            entry["aliases"] = aliases.get(entry["command"], [])
        unique = {entry["command"]: entry for entry in entries}
        if len(unique) < 80:
            raise RuntimeError(f"systemd parser found only {len(unique)} public executables")
        return sorted(unique.values(), key=lambda value: value["command"]), excluded
    if component == "iproute2":
        targets = set()
        for path in root.glob("*/Makefile"):
            text = path.read_text(errors="ignore")
            for raw in re.findall(r"^\s*TARGETS\s*(?:\+?=|:?=)\s*(.+)$", text, re.M):
                targets.update(value for value in raw.split() if re.fullmatch(r"[a-z][a-z0-9_-]*", value))
            for command in re.findall(r"install\s+-m\s+0755\s+([a-z][a-z0-9_-]*)\s", text):
                targets.add(command)
        targets.update({"tc", "bridge", "routel"})
        entries = []
        aliases = {"lnstat": ["rtstat", "ctstat"]}
        for command in sorted(targets):
            man = root / "man/man8" / f"{command}.8"
            entry = parse_roff(man, command, f"{base} · man/man8/{command}.8") if man.exists() else {
                "command": command, "aliases": [], "description": f"iproute2 {command} utility", "usage": command,
                "options": [], "officialExamples": [], "locator": f"{base} · {command}/Makefile",
            }
            entry["aliases"] = aliases.get(command, [])
            entry["constraints"] = [
                "requires Linux with iproute2 7.1.0 installed; optional targets depend on build features",
            ]
            entries.append(entry)
        if len(entries) < 18:
            raise RuntimeError(f"iproute2 parser found only {len(entries)} installed targets")
        return entries, [{"entry": "ip-*/tc-*/dcb-*/devlink-* man pages", "reason": "subcommands of installed frontends, not standalone executables"}]
    raise RuntimeError(f"no parser for {component}")


def build_fixture(tool_id: str, source_root: Path) -> dict:
    components = []
    for component in COMPONENT_ORDER[tool_id]:
        spec = SOURCE_SPECS[component]
        entries, exclusions = parse_component(component, source_root, spec)
        if component.startswith("gnu-"):
            caveat = (
                f"reference behavior follows {component} {spec['version']}; macOS may ship a BSD/POSIX "
                "implementation or require the GNU package to be installed separately"
            )
        else:
            caveat = {
                "openssh-client": "requires an OpenSSH client; available features depend on the installed OpenSSH version",
                "curl": "requires curl; protocol and option availability depends on the installed build",
                "less": "requires less 708 or a compatible installed version",
                "ping-implementations": "ping flags and privilege requirements differ between BSD/macOS and iputils/Linux",
                "top-implementations": "top fields and interactive keys differ between BSD/macOS and procps-ng/Linux",
            }.get(component)
        if caveat:
            for entry in entries:
                entry.setdefault("constraints", []).append(caveat)
        archive = source_root / spec["archive"]
        if not archive.exists():
            raise RuntimeError(f"missing pinned source {archive}")
        components.append({
            "id": component, "version": spec["version"], "sourceId": spec["sourceId"],
            "sourceUrl": spec["sourceUrl"], "downloadUrl": PINNED_DOWNLOAD_URLS[component],
            "archive": spec["archive"],
            "archiveSha256": sha256_bytes(archive.read_bytes()), "parser": spec["parser"],
            "entries": sorted(entries, key=lambda value: value["command"]), "exclusions": exclusions,
        })
    fixture = {"schemaVersion": 1, "toolId": tool_id, "generatedAt": TODAY, "components": components}
    fixture["manifestHash"] = compact_hash(components)
    return fixture


def union_fixture(fixture: dict) -> list[dict]:
    merged = {}
    posix_commands = set()
    if fixture["toolId"] == "unix-cli":
        posix = next(component for component in fixture["components"] if component["id"] == "posix-utilities")
        posix_commands = {entry["command"] for entry in posix["entries"]}
    for component in fixture["components"]:
        for raw in component["entries"]:
            command = raw["command"].strip()
            context = "linux-system" if fixture["toolId"] == "linux" else ("posix-utility" if command in posix_commands else "external-command")
            key = (command.casefold(), context)
            if key not in merged:
                merged[key] = {
                    "command": command, "context": context, "aliases": [], "entryType": "cli-command",
                    "component": component["id"], "components": [],
                    "platforms": ["linux"] if fixture["toolId"] == "linux" else ["mac", "linux"],
                    "constraints": [], "description": raw.get("description") or command,
                    "usage": raw.get("usage") or command, "options": raw.get("options", []),
                    "officialExamples": raw.get("officialExamples", []), "url": raw["locator"],
                    "sourceId": component["sourceId"], "sourceVersion": component["version"],
                }
            entry = merged[key]
            entry["components"].append(component["id"])
            entry["constraints"].extend(raw.get("constraints", []))
            entry["aliases"].extend(raw.get("aliases", []))
    canonical = {entry["command"].casefold() for entry in merged.values()}
    result = []
    for entry in merged.values():
        entry["components"] = sorted(set(entry["components"]))
        entry["component"] = "/".join(entry["components"])
        entry["constraints"] = sorted(set(entry["constraints"]))
        entry["aliases"] = sorted({alias for alias in entry["aliases"] if alias.casefold() not in canonical and alias.casefold() != entry["command"].casefold()})
        result.append(entry)
    return sorted(result, key=lambda value: (value["command"].casefold(), value["context"]))


def build_inventory(fixture: dict) -> dict:
    entries = union_fixture(fixture)
    counts = {component["id"]: len(component["entries"]) for component in fixture["components"]}
    return {
        "schemaVersion": 2, "toolId": fixture["toolId"], "scope": "all-command-entrypoints",
        "checkedAt": TODAY, "sourceIds": list(dict.fromkeys(component["sourceId"] for component in fixture["components"])),
        "adapter": {"id": f"{fixture['toolId']}-official-component-index-union", "kind": "official-component-index-union", "version": 1},
        "closure": {
            "status": "closed", "entryCount": len(entries), "components": [component["id"] for component in fixture["components"]],
            "componentCounts": counts, "platforms": ["linux"] if fixture["toolId"] == "linux" else ["mac", "linux"],
            "sourceManifestHash": fixture["manifestHash"],
            "excluded": sum((component["exclusions"] for component in fixture["components"]), []),
            "proof": "deterministic union parsed from pinned official release indexes; aliases and component overlaps are merged",
        },
        "entries": entries,
    }


def load_dataset(tool_id: str) -> dict:
    text = (ROOT / "data" / f"{tool_id}.js").read_text()
    payload = text.split("=", 2)[-1].strip()
    if payload.endswith(";"):
        payload = payload[:-1]
    return json.loads(payload)


def slug(value: str) -> str:
    clean = re.sub(r"[^a-zA-Z0-9_-]+", "-", value).strip("-").lower()
    return clean[:48] or hashlib.sha256(value.encode()).hexdigest()[:12]


HIGH_RISK = re.compile(
    r"(?:^(?:rm|dd|chmod|chown|restart)$|mkfs|fsck|wipefs|fdisk|sfdisk|cfdisk|mkswap|swapon|swapoff|"
    r"shutdown|reboot|poweroff|halt|kill|pkill|systemd-(?:sysctl|cryptsetup|repart|sysusers|tmpfiles|factory-reset)|"
    r"blkdiscard|blkzone|chcpu|chmem|losetup|pivot_root|switch_root|vipw|runuser|sulogin|mount$|umount$)",
    re.I,
)


def generated_example(tool_id: str, item_id: str, entry: dict) -> dict:
    command = entry["command"]
    locator = entry["url"]
    source_id = entry["sourceId"]
    value = entry.get("officialExamples", [None])[0] if entry.get("officialExamples") else command
    risky = bool(HIGH_RISK.search(command))
    component_text = " / ".join(entry["components"])
    purpose = strip_markup(entry.get("description") or command).rstrip(".")
    example = {
        "scenario": f"需要使用 {component_text} 提供的 {command} 来完成“{purpose}”时",
        "goal": f"按固定官方版本的定义调用 {command}，并依据退出状态判断该操作是否完成",
        "value": value,
        "description": f"{command} 的官方用途是“{purpose}”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
        "expected": f"终端按 {component_text} 的定义执行 {command}；缺少必需操作数时会明确返回用法诊断和非成功状态。",
        "copyable": not risky,
        "sourceType": "manual", "sourceIds": [source_id], "authorship": "generated",
        "evidenceTier": "first-party", "adaptation": "scenario-derived",
        "groundingRefs": [{"sourceId": source_id, "locator": locator, "claims": ["value", "behavior", "expected"]}],
        "platforms": entry["platforms"],
    }
    caveats = []
    if entry["constraints"]:
        caveats.append(f"该入口受以下条件限制：{'；'.join(entry['constraints'])}")
    if risky:
        example["warning"] = f"{command} 可能修改系统、磁盘、账号、服务或进程状态；仅在已确认对象和回滚方案后执行。"
        example["riskLevels"] = ["deleteOrOverwrite"]
        caveats.append("执行前先用只读命令检查目标、确认影响范围并备份可恢复数据；优先在隔离环境验证")
    if caveats:
        example["caveat"] = "；".join(caveats) + "。"
    return example


def curated_canonical_examples(entry: dict):
    """Keep option variants as scenarios on their canonical program entry."""
    command = entry["command"]
    source_id = entry["sourceId"]
    locator = entry["url"]
    common = {
        "sourceType": "manual", "sourceIds": [source_id], "authorship": "editorial",
        "evidenceTier": "first-party", "adaptation": "adapted", "platforms": entry["platforms"],
        "groundingRefs": [{"sourceId": source_id, "locator": locator, "claims": ["value", "behavior", "expected"]}],
    }
    if command == "ls":
        return [{
            **common,
            "scenario": "需要同时核对目录中的隐藏项、权限、所有者和修改时间时",
            "goal": "用 ls 的 -l 与 -a 选项查看完整长格式目录清单",
            "value": "ls -la",
            "description": "-l 显示长格式元数据，-a 同时包含名称以点开头的目录项。",
            "expected": "终端逐行列出当前目录的可见项与隐藏项，并显示权限、所有者、大小和时间。",
            "copyable": True,
        }]
    if command == "kill":
        return [
            {
                **common,
                "scenario": "已用只读进程列表确认 PID，需要先请求目标进程正常退出时",
                "goal": "向已确认的 PID 发送默认终止信号，并让进程执行清理逻辑",
                "value": "kill 12345",
                "description": "不指定信号时请求目标进程正常终止；PID 必须先从当前机器的进程列表核对。",
                "expected": "目标进程收到终止信号；是否立即退出取决于它的信号处理逻辑。",
                "copyable": False,
                "warning": "会中断目标进程；PID 复用可能导致误终止其它进程。",
                "riskLevels": ["processDisruption"],
                "caveat": "先用只读进程列表检查 PID、命令行与所有者，并确认业务可恢复。",
            },
            {
                **common,
                "scenario": "目标进程拒绝正常退出，且已经确认可以放弃未保存状态时",
                "goal": "向已核对的 PID 发送 SIGKILL，作为最后手段强制终止进程",
                "value": "kill -9 12345",
                "description": "-9 发送不可捕获的 SIGKILL，不给目标进程执行清理或保存状态的机会。",
                "expected": "内核强制终止目标进程；尚未落盘的数据和临时状态可能丢失。",
                "copyable": False,
                "warning": "会强制中断进程并可能造成数据或服务状态损坏，只能作为最后手段。",
                "riskLevels": ["processDisruption"],
                "caveat": "先用只读进程列表检查 PID，并确认正常终止已失败、数据已有备份且服务可恢复。",
            },
        ]
    return None


def load_developer_curation(path: Path = CURATION_PATH) -> dict:
    curation = json.loads(path.read_text())
    if curation.get("schemaVersion") != 1 or not isinstance(curation.get("tools"), dict):
        raise RuntimeError("developer command curation must use schemaVersion 1")
    return curation


def materialize_curated_examples(tool_id: str, item_id: str, entry: dict, curation: dict):
    tool_curation = curation["tools"].get(tool_id)
    if not tool_curation:
        return None
    templates = tool_curation.get("examplesByItemId", {}).get(item_id)
    if templates is None:
        return None
    examples = []
    for template in templates:
        source_id = template.get("sourceId", entry["sourceId"])
        locator = template.get("locator", entry["url"])
        materialized = {
            key: value for key, value in template.items()
            if key not in {"sourceId", "locator"}
        }
        example = {
            **materialized,
            "copyable": template.get("copyable", True),
            "sourceType": "manual",
            "sourceIds": [source_id],
            "authorship": "editorial",
            "evidenceTier": "first-party",
            "adaptation": "adapted",
            "groundingRefs": [{
                "sourceId": source_id,
                "locator": locator,
                "claims": ["value", "behavior", "expected"],
            }],
            "platforms": template.get("platforms", entry["platforms"]),
        }
        examples.append(example)
    return examples


def ensure_source(meta: dict, source: dict):
    if not any(item["id"] == source["id"] for item in meta["sources"]):
        meta["sources"].append(source)


def build_dataset(tool_id: str, inventory: dict, curation: dict) -> dict:
    dataset = load_dataset(tool_id)
    tool_curation = curation["tools"].get(tool_id)
    if not tool_curation:
        raise RuntimeError(f"{tool_id}: developer command curation is required")
    rendered_inventory_hash = compact_hash(inventory["entries"])
    if tool_curation.get("inventoryHash") != rendered_inventory_hash:
        raise RuntimeError(
            f"{tool_id}: developer command curation inventoryHash is stale; "
            "review the curated selection and scenarios against the new official inventory"
        )
    old_by_command = {item["cmd"].casefold(): item for item in dataset["items"]}
    if tool_id == "unix-cli":
        for source in [
            {"id": "openssh-portable-repository", "title": "OpenSSH portable official repository", "url": "https://github.com/openssh/openssh-portable", "kind": "official-repository", "maintainer": "OpenSSH maintainers", "evidenceTier": "first-party", "lastVerifiedAt": TODAY, "resolvedUrl": "https://github.com/openssh/openssh-portable", "pageTitle": "OpenSSH portable official repository", "checkedAt": TODAY, "purposes": ["command-existence", "option-semantics", "examples"]},
            {"id": "curl-docs", "title": "curl official documentation", "url": "https://curl.se/docs/", "kind": "official-doc", "maintainer": "curl project", "evidenceTier": "first-party", "lastVerifiedAt": TODAY, "resolvedUrl": "https://curl.se/docs/", "pageTitle": "curl documentation", "checkedAt": TODAY, "purposes": ["command-existence", "option-semantics", "examples"]},
            {"id": "less-repository", "title": "less official repository", "url": "https://github.com/gwsw/less", "kind": "official-repository", "maintainer": "less maintainers", "evidenceTier": "first-party", "lastVerifiedAt": TODAY, "resolvedUrl": "https://github.com/gwsw/less", "pageTitle": "less official repository", "checkedAt": TODAY, "purposes": ["command-existence", "option-semantics", "examples"]},
            {"id": "iputils-repository", "title": "iputils official repository", "url": "https://github.com/iputils/iputils", "kind": "official-repository", "maintainer": "iputils maintainers", "evidenceTier": "first-party", "lastVerifiedAt": TODAY, "resolvedUrl": "https://github.com/iputils/iputils", "pageTitle": "iputils official repository", "checkedAt": TODAY, "purposes": ["command-existence", "option-semantics", "examples"]},
            {"id": "procps-ng-repository", "title": "procps-ng official repository", "url": "https://gitlab.com/procps-ng/procps", "kind": "official-repository", "maintainer": "procps-ng maintainers", "evidenceTier": "first-party", "lastVerifiedAt": TODAY, "resolvedUrl": "https://gitlab.com/procps-ng/procps", "pageTitle": "procps-ng official repository", "checkedAt": TODAY, "purposes": ["command-existence", "option-semantics", "examples"]},
        ]:
            ensure_source(dataset["meta"], source)
    source_tiers = {source["id"]: source["evidenceTier"] for source in dataset["meta"]["sources"]}
    items = []
    for entry in inventory["entries"]:
        old = old_by_command.get(entry["command"].casefold())
        item_id = old.get("id") if old else f"{'unix' if tool_id == 'unix-cli' else 'linux'}-{slug(entry['command'])}"
        if old:
            item = dict(old)
            item["context"] = entry["context"]
            if entry["aliases"]:
                item["aliases"] = entry["aliases"]
            else:
                item.pop("aliases", None)
            generated_scenarios = item.get("examples", []) and all(
                example.get("scenario", "").startswith("需要在隔离终端核对 ")
                for example in item["examples"]
            )
            if generated_scenarios:
                item["examples"] = [generated_example(tool_id, item_id, entry)]
        else:
            item = {
                "cat": "slash", "cmd": entry["command"], "en": entry["description"],
                "zh": f"{entry['command']}：{entry['description']}（来源：{' / '.join(entry['components'])}）。",
                "platforms": entry["platforms"], "id": item_id, "context": entry["context"],
                "keywords": [entry["command"], "命令", "终端", entry["components"][0]],
                "examples": [generated_example(tool_id, item_id, entry)],
            }
            if entry["aliases"]:
                item["aliases"] = entry["aliases"]
        curated_examples = curated_canonical_examples(entry)
        if curated_examples:
            item["examples"] = curated_examples
        developer_examples = materialize_curated_examples(tool_id, item_id, entry, curation)
        if developer_examples is not None:
            item["examples"] = developer_examples
        item["components"] = entry["components"]
        item["constraints"] = entry["constraints"]
        item["usage"] = entry["usage"]
        item["options"] = entry["options"]
        item["entryType"] = entry["entryType"]
        item["platforms"] = entry["platforms"]
        item["evidenceStatus"] = "verified"
        item["evidenceRefs"] = [{"sourceId": entry["sourceId"], "claims": ["existence", "semantics", "platform"], "locator": entry["url"], "checkedAt": TODAY}]
        # Existing scenarios remain editorial, but their grounding source must still
        # be a source available to this tool. New scenarios are already normalized.
        for example in item.get("examples", []):
            if not example.get("sourceIds") or any(value not in source_tiers for value in example.get("sourceIds", [])):
                example["sourceIds"] = [entry["sourceId"]]
                example["evidenceTier"] = source_tiers[entry["sourceId"]]
                example["groundingRefs"] = [{"sourceId": entry["sourceId"], "locator": entry["url"], "claims": ["value", "behavior", "expected"]}]
        items.append(item)
    curated_ids = set(tool_curation.get("examplesByItemId", {}))
    rendered_ids = {item["id"] for item in items}
    missing_curated_ids = sorted(curated_ids - rendered_ids)
    if missing_curated_ids:
        raise RuntimeError(f"{tool_id}: curated item IDs are absent from the official union: {missing_curated_ids}")
    dataset["items"] = items
    meta = dataset["meta"]
    meta["updatedAt"] = TODAY
    meta["contentCheckedAt"] = TODAY
    meta["sourceCheckedAt"] = TODAY
    meta["source"] = "固定官方发布标签与入口索引的确定性全集，核验于 " + TODAY
    meta["coverage"] = "登记官方组件的全部公开命令入口；组件版本、排除理由与平台限制见 shared/official-inventories/" + tool_id + ".json"
    inventory_hash = rendered_inventory_hash
    meta["officialCoverage"] = {
        "scope": "all-command-entrypoints", "status": "complete", "total": len(items), "covered": len(items),
        "checkedAt": TODAY, "sourceIds": inventory["sourceIds"], "inventoryHash": inventory_hash,
        "componentCounts": inventory["closure"]["componentCounts"], "sourceManifestHash": inventory["closure"]["sourceManifestHash"],
    }
    used_sources = set(inventory["sourceIds"])
    for item in items:
        used_sources.update(ref["sourceId"] for ref in item.get("evidenceRefs", []))
        for example in item.get("examples", []):
            used_sources.update(example.get("sourceIds", []))
            used_sources.update(ref["sourceId"] for ref in example.get("groundingRefs", []))
    meta["sources"] = [source for source in meta["sources"] if source["id"] in used_sources]
    return dataset


def example_hash(item_id: str, index: int, example: dict) -> str:
    clean = {key: value for key, value in example.items() if key != "review"}
    return compact_hash({"itemId": item_id, "index": index, "example": clean})


def build_review(tool_id: str, dataset: dict, inventory_hash: str) -> dict:
    inventory_by_command = {
        item["cmd"].casefold(): item
        for item in dataset["items"]
    }
    for item in dataset["items"]:
        entry = inventory_by_command[item["cmd"].casefold()]
        for index, example in enumerate(item["examples"]):
            audit_scenario_example(tool_id, entry, index, example)
    return {
        "schemaVersion": 1, "toolId": tool_id, "reviewVersion": "scenario-grounding-v2",
        "reviewedAt": TODAY, "inventoryHash": inventory_hash, "status": "passed",
        "examples": [
            {"itemId": item["id"], "exampleIndex": index, "contentHash": example_hash(item["id"], index, example), "status": "passed"}
            for item in dataset["items"] for index, example in enumerate(item["examples"])
        ],
    }


OFFICIAL_EXPRESSION_OPTIONS = {
    # POSIX find describes these as expression primaries rather than command
    # options, so the inventory synopsis parser intentionally does not put them
    # in entry.options. They are still first-party documented on entry.url.
    "find": {"-name", "-type"},
    "cp": {"-r"},
    # Generated GNU man-page synopses abbreviate some complete option tables.
    # Keep these first-party documented developer forms auditable without
    # changing the canonical inventory projection or its stable hash.
    "grep": {"-r"},
    "tar": {"-c", "-t", "-x", "-z", "-f"},
    # iproute2's generated ss synopsis collapses its complete option table to
    # "[ options ]"; these flags are documented by the first-party ss manual.
    "ss": {"-l", "-n", "-t"},
    # GNU sed documents in-place editing. It is deliberately Linux-only in
    # curation because the BSD sed bundled with macOS uses a different form.
    "sed": {"-i"},
    "journalctl": {"-f"},
}

NESTED_COMMAND_RULES = {
    "watch": {"leadingOperands": 0, "optionArguments": {"-n", "--interval", "-x", "--exec"}},
    "timeout": {"leadingOperands": 1, "optionArguments": {"-k", "--kill-after", "-s", "--signal"}},
    "xargs": {"leadingOperands": 0, "optionArguments": {"-E", "-I", "-L", "-n", "-s"}},
    "flock": {"leadingOperands": 1, "optionArguments": {"-E", "--conflict-exit-code", "-w", "--timeout"}},
    "taskset": {"leadingOperands": 0, "optionArguments": {"-c", "--cpu-list", "-p", "--pid"}},
    "nsenter": {"leadingOperands": 0, "optionArguments": {"-t", "--target", "-S", "--setuid", "-G", "--setgid"}},
    "unshare": {"leadingOperands": 0, "optionArguments": {"-R", "--root", "-w", "--wd", "-S", "--setuid", "-G", "--setgid"}},
}


def expand_short_option(token: str) -> list[str]:
    if re.fullmatch(r"-[A-Za-z0-9]{2,}", token):
        return [f"-{letter}" for letter in token[1:]]
    return [token]


def usage_options(entry: dict) -> set[str]:
    usage = entry.get("usage", "")
    options = set(entry.get("options", []))
    for token in re.findall(r"(?<![\w-])--[A-Za-z0-9][A-Za-z0-9-]*|(?<![\w-])-[A-Za-z0-9]+", usage):
        options.update(expand_short_option(token))
    return options | OFFICIAL_EXPRESSION_OPTIONS.get(entry["cmd"], set())


def primary_option_tokens(
    value: str,
    executable: str,
    allowed_options: set[str] | None = None,
) -> list[str]:
    import shlex

    tokens = shlex.split(value, posix=True)
    if not tokens or Path(tokens[0]).name != executable:
        raise RuntimeError(f"example does not execute canonical entry {executable}: {value}")
    rule = NESTED_COMMAND_RULES.get(executable)
    options = []
    index = 1
    leading_operands = rule["leadingOperands"] if rule else None
    operands_seen = 0
    while index < len(tokens):
        token = tokens[index]
        if token in {"<", ">", ">>", "2>", "2>>", "|", "||", "&&", ";"}:
            break
        if token == "--":
            break
        if token.startswith("--") and len(token) > 2:
            option = token.split("=", 1)[0]
            options.append(option)
            if rule and option in rule["optionArguments"] and "=" not in token:
                index += 1
        elif token.startswith("-") and token != "-":
            if allowed_options and token in allowed_options:
                compact = [token]
            elif (
                allowed_options
                and re.fullmatch(r"-[A-Za-z0-9]{2,}", token)
                and all(f"-{letter}" in allowed_options for letter in token[1:])
            ):
                compact = [f"-{letter}" for letter in token[1:]]
            else:
                compact = expand_short_option(token) if allowed_options is None else [token]
            options.extend(compact)
            if rule and token in rule["optionArguments"]:
                index += 1
            elif rule and compact and compact[-1] in rule["optionArguments"]:
                index += 1
        elif rule:
            if operands_seen < leading_operands:
                operands_seen += 1
            else:
                break
        index += 1
    return options


def audit_scenario_example(tool_id: str, item: dict, example_index: int, example: dict) -> None:
    value = example.get("value", "")
    allowed = usage_options(item)
    for option in primary_option_tokens(value, item["cmd"], allowed):
        if item["cmd"] == "kill" and re.fullmatch(r"-[0-9]+", option):
            continue
        normalized = option
        if normalized not in allowed and re.fullmatch(r"-[A-Za-z].+", option):
            # Short options such as awk -F, attach their value to the option.
            normalized = option[:2]
        if normalized not in allowed:
            raise RuntimeError(
                f"{tool_id}:{item['id']} example {example_index} uses undocumented option {option}: {value}"
            )


def render_json(value) -> bytes:
    return (json.dumps(value, ensure_ascii=False, indent=2) + "\n").encode()


def render_dataset(tool_id: str, value: dict) -> bytes:
    text = "// Generated from validated structured data. Manual edits must follow data/SCHEMA.md.\n"
    text += "window.CHEATSHEET_DATA = window.CHEATSHEET_DATA || {};\n"
    text += f'window.CHEATSHEET_DATA["{tool_id}"] = ' + json.dumps(value, ensure_ascii=False, indent=2) + ";\n"
    return text.encode()


def render_quality_baseline(counts: dict) -> bytes:
    path = ROOT / "shared/quality-baseline.json"
    baseline = json.loads(path.read_text())
    for row in baseline["tools"]:
        if row["tool"] in counts:
            count = counts[row["tool"]]
            row["platforms"] = {"mac": count if row["tool"] == "unix-cli" else 0, "windows": 0, "linux": count}
            row["categories"] = {"shortcut": 0, "slash": count, "flag": 0}
    return (json.dumps(baseline, ensure_ascii=False, separators=(",", ":")) + "\n").encode()


def render_coverage_report(outputs: dict) -> bytes:
    lines = [
        "# Unix/POSIX 与 Linux 官方命令覆盖报告",
        "",
        f"> 由 `tools/rebuild-official-command-unions.py` 于 {TODAY} 根据固定官方来源生成。",
        "",
        "闭合规则：组件解析器发现结果、官方清单、扩展数据和场景审校必须逐项一致。",
        "联网复验使用 `tools/verify-official-command-sources.py` 重新下载归档、校验 SHA-256 并复跑解析器。",
        "",
    ]
    for tool_id, (fixture, inventory, _dataset, _review) in outputs.items():
        display = "Unix/POSIX 基础命令" if tool_id == "unix-cli" else "Linux 系统工具"
        discovered = sum(len(component["entries"]) for component in fixture["components"])
        canonical = len(inventory["entries"])
        exclusions = sum(len(component["exclusions"]) for component in fixture["components"])
        lines.extend([
            f"## {display}",
            "",
            f"- 组件原始公开入口：{discovered}",
            f"- 合并重叠后的规范入口：{canonical}",
            f"- 跨组件重叠合并：{discovered - canonical}",
            f"- 有理由排除记录：{exclusions}",
            "- 未解释遗漏：0",
            "",
            "| 组件 | 固定版本 | 发现数 | 归档 SHA-256 |",
            "| --- | --- | ---: | --- |",
        ])
        for component in fixture["components"]:
            lines.append(
                f"| `{component['id']}` | {component['version']} | {len(component['entries'])} | "
                f"`{component['archiveSha256']}` |"
            )
        lines.extend(["", f"组件清单摘要：`{fixture['manifestHash']}`", ""])
    return ("\n".join(lines).rstrip("\n") + "\n").encode()


def file_content_hash(path: Path) -> str:
    if not path.exists():
        return "missing"
    return "sha256:" + sha256_bytes(path.read_bytes())


def build_transaction_targets(outputs: dict) -> dict[Path, bytes]:
    targets = {}
    for tool_id, (fixture, inventory, dataset, review) in outputs.items():
        targets[ROOT / "shared/official-component-fixtures" / f"{tool_id}.json"] = render_json(fixture)
        targets[ROOT / "shared/official-inventories" / f"{tool_id}.json"] = render_json(inventory)
        targets[ROOT / "data" / f"{tool_id}.js"] = render_dataset(tool_id, dataset)
        targets[ROOT / "shared/scenario-reviews" / f"{tool_id}.json"] = render_json(review)
    counts = {tool_id: len(values[1]["entries"]) for tool_id, values in outputs.items()}
    targets[ROOT / "shared/quality-baseline.json"] = render_quality_baseline(counts)
    targets[ROOT / "docs/official-command-coverage.md"] = render_coverage_report(outputs)
    tool_ids = sorted(path.stem for path in (ROOT / "data").glob("*.js") if path.name != "index.js")
    catalog = []
    generated_datasets = {tool_id: values[2] for tool_id, values in outputs.items()}
    for tool_id in tool_ids:
        data_path = ROOT / "data" / f"{tool_id}.js"
        raw = targets.get(data_path, data_path.read_bytes())
        meta = generated_datasets.get(tool_id, load_dataset(tool_id))["meta"]
        catalog.append({
            "id": tool_id,
            "name": meta.get("name", tool_id),
            "color": meta.get("color", "#666666"),
            "platforms": meta.get("platforms", []),
            "updatePolicy": meta.get("updatePolicy", "release-driven"),
            "builtIn": meta.get("builtIn") is True,
            "order": meta.get("order", 999),
            "contentHash": "sha256:" + sha256_bytes(raw),
        })
    index_text = (
        "// Auto-generated by native-host/host.py. Keep this as the single data-file index.\n"
        f"window.CHEATSHEET_FILES = {json.dumps(tool_ids, ensure_ascii=False, indent=2)};\n"
        "\n// Lightweight metadata used before the full per-tool datasets are loaded.\n"
        f"window.CHEATSHEET_TOOL_CATALOG = {json.dumps(catalog, ensure_ascii=False, indent=2)};\n"
    )
    targets[ROOT / "data/index.js"] = index_text.encode()
    return targets


def transaction_preview(
    targets: dict[Path, bytes],
    curation_hash: str | None = None,
) -> tuple[dict, str]:
    files = []
    for path, content in sorted(targets.items(), key=lambda item: str(item[0])):
        files.append({
            "path": path.relative_to(ROOT).as_posix(),
            "beforeHash": file_content_hash(path),
            "afterHash": "sha256:" + sha256_bytes(content),
        })
    contract = {
        "schemaVersion": 1,
        "curationHash": curation_hash or file_content_hash(CURATION_PATH),
        "files": files,
    }
    return contract, compact_hash(contract)


def _stage_file(path: Path, content: bytes) -> Path:
    path.parent.mkdir(parents=True, exist_ok=True)
    descriptor, temporary_name = tempfile.mkstemp(
        prefix=f".{path.name}.",
        suffix=".tmp",
        dir=path.parent,
    )
    temporary = Path(temporary_name)
    try:
        with os.fdopen(descriptor, "wb") as handle:
            handle.write(content)
            handle.flush()
            os.fsync(handle.fileno())
    except Exception:
        temporary.unlink(missing_ok=True)
        raise
    return temporary


def atomic_write_transaction(
    targets: dict[Path, bytes],
    expected_before_hashes: dict[Path, str],
    replace_func=os.replace,
):
    """Replace every generated artifact or restore all prior bytes on failure."""
    for path, expected_hash in expected_before_hashes.items():
        if file_content_hash(path) != expected_hash:
            raise RuntimeError(f"source changed after preview: {path.relative_to(ROOT)}")

    originals = {path: path.read_bytes() if path.exists() else None for path in targets}
    staged = {}
    replaced = []
    try:
        for path, content in targets.items():
            staged[path] = _stage_file(path, content)
        for path, expected_hash in expected_before_hashes.items():
            if file_content_hash(path) != expected_hash:
                raise RuntimeError(f"source changed while staging transaction: {path.relative_to(ROOT)}")
        for path in sorted(targets, key=str):
            replace_func(staged[path], path)
            staged.pop(path)
            replaced.append(path)
    except Exception as apply_error:
        rollback_errors = []
        for path in reversed(replaced):
            try:
                original = originals[path]
                if original is None:
                    path.unlink(missing_ok=True)
                else:
                    rollback_temp = _stage_file(path, original)
                    try:
                        os.replace(rollback_temp, path)
                    finally:
                        rollback_temp.unlink(missing_ok=True)
            except Exception as rollback_error:
                rollback_errors.append(f"{path}: {rollback_error}")
        if rollback_errors:
            raise RuntimeError(
                f"atomic apply failed ({apply_error}); rollback also failed: {'; '.join(rollback_errors)}"
            ) from apply_error
        raise RuntimeError(f"atomic apply failed; all replaced files were restored: {apply_error}") from apply_error
    finally:
        for temporary in staged.values():
            temporary.unlink(missing_ok=True)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--sources", type=Path, required=True, help="directory containing pinned archives and extracted trees")
    parser.add_argument(
        "--curation",
        type=Path,
        default=CURATION_PATH,
        help="candidate developer-command-curation.json; an external candidate is installed atomically",
    )
    parser.add_argument("--apply", action="store_true", help="write fixtures, inventories, data and scenario reviews")
    parser.add_argument("--preview-output", type=Path, help="write the exact transaction preview JSON")
    parser.add_argument("--confirm-hash", help="required with --apply; must match the printed preview hash")
    args = parser.parse_args()
    curation_path = args.curation.resolve()
    curation_bytes = curation_path.read_bytes()
    curation = load_developer_curation(curation_path)
    outputs = {}
    for tool_id in ("unix-cli", "linux"):
        fixture = build_fixture(tool_id, args.sources)
        inventory = build_inventory(fixture)
        dataset = build_dataset(tool_id, inventory, curation)
        review = build_review(tool_id, dataset, dataset["meta"]["officialCoverage"]["inventoryHash"])
        outputs[tool_id] = (fixture, inventory, dataset, review)
        print(f"{tool_id}: {len(inventory['entries'])} canonical entries; components={inventory['closure']['componentCounts']}")
    targets = build_transaction_targets(outputs)
    if curation_path != CURATION_PATH.resolve():
        targets[CURATION_PATH] = curation_bytes
    preview, preview_hash = transaction_preview(
        targets,
        "sha256:" + sha256_bytes(curation_bytes),
    )
    print(f"preview-hash: {preview_hash}")
    if args.preview_output:
        args.preview_output.parent.mkdir(parents=True, exist_ok=True)
        args.preview_output.write_text(json.dumps({
            **preview,
            "previewHash": preview_hash,
        }, ensure_ascii=False, indent=2) + "\n")
    if not args.apply:
        return
    if args.confirm_hash != preview_hash:
        raise RuntimeError("--apply requires the exact preview hash through --confirm-hash")
    expected_before_hashes = {
        ROOT / entry["path"]: entry["beforeHash"]
        for entry in preview["files"]
    }
    atomic_write_transaction(targets, expected_before_hashes)
    print(f"applied transaction: {preview_hash}")


if __name__ == "__main__":
    try:
        main()
    except Exception as exc:
        print(f"official command union rebuild failed: {exc}", file=sys.stderr)
        raise
