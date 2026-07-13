#!/usr/bin/env python3
"""Mark legacy datasets as explicitly unconfirmed until an official inventory exists."""

import json
import pathlib


ROOT = pathlib.Path(__file__).resolve().parents[1]
PREFIX = (
    "// Generated from validated structured data. Manual edits must follow data/SCHEMA.md.\n"
    "window.CHEATSHEET_DATA = window.CHEATSHEET_DATA || {};\n"
)


def migrate(path):
    text = path.read_text(encoding="utf-8")
    marker = f'window.CHEATSHEET_DATA["{path.stem}"] = '
    header = PREFIX + marker
    if not text.startswith(header) or not text.endswith(";\n"):
        raise RuntimeError(f"不支持的数据格式：{path}")
    dataset = json.loads(text[len(header):-2])
    meta = dataset["meta"]
    if "officialCoverage" in meta:
        return False
    source_ids = [
        source["id"] for source in meta.get("sources", [])
        if source.get("evidenceTier") == "first-party"
    ]
    if not source_ids and meta.get("sources"):
        source_ids = [meta["sources"][0]["id"]]
    if not source_ids:
        raise RuntimeError(f"{path.stem} 没有可用于完整性核验的来源")
    meta["officialCoverage"] = {
        "scope": "all-command-entrypoints",
        "status": "unconfirmed",
        "total": 0,
        "covered": 0,
        "checkedAt": meta.get("sourceCheckedAt", ""),
        "sourceIds": source_ids,
    }
    path.write_text(header + json.dumps(dataset, ensure_ascii=False, indent=2) + ";\n", encoding="utf-8")
    return True


def main():
    changed = 0
    for path in sorted((ROOT / "data").glob("*.js")):
        if path.name != "index.js" and migrate(path):
            changed += 1
    print(f"已标记 {changed} 个工具为官方完整性未确认")


if __name__ == "__main__":
    main()
