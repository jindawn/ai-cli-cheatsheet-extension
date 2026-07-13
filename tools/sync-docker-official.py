#!/usr/bin/env python3
"""Refresh Docker's checked-in official command inventory from Docker Docs."""

import json
import hashlib
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "native-host"))

from official_inventory import fetch_docker_inventory, inventory_hash  # noqa: E402


DATA_HEADER = (
    "// Generated from validated structured data. Manual edits must follow data/SCHEMA.md.\n"
    "window.CHEATSHEET_DATA = window.CHEATSHEET_DATA || {};\n"
    'window.CHEATSHEET_DATA["docker"] = '
)
ENRICHMENTS_PATH = ROOT / "shared" / "docker-scenario-enrichments.json"


def load_dataset():
    path = ROOT / "data" / "docker.js"
    text = path.read_text(encoding="utf-8")
    if not text.startswith(DATA_HEADER) or not text.endswith(";\n"):
        raise RuntimeError("data/docker.js 不是受支持的固定格式")
    return json.loads(text[len(DATA_HEADER):-2])


def stable_id(command):
    return "docker-official-" + hashlib.sha256(command.encode("utf-8")).hexdigest()[:16]


def generated_item(entry, checked_at, aliases, enrichments):
    command = entry["command"]
    token = command.split()[-1]
    keywords = list(dict.fromkeys(["docker", token, "官方命令", "命令参考"]))[:4]
    risky = bool(re.search(r"(?:\brm\b|\bprune\b|\brestart\b|\bstop\b|\bkill\b|\bdelete\b)", command))
    example = {
        "value": f"{command} --help",
        "description": "先查看该官方命令在当前安装版本中的用法、参数和默认值，不执行实际变更。",
        "copyable": not risky,
        "authorship": "editorial",
        "evidenceTier": "first-party",
        "adaptation": "adapted",
        "sourceType": "manual",
        "sourceIds": ["docker-docs"],
        "scenario": "需要确认当前 Docker 版本是否支持该命令及其参数",
        "goal": "打开该命令的本机帮助而不执行实际操作",
        "expected": "终端显示 Usage、Options 和命令说明",
    }
    if risky:
        example["warning"] = "该命令可能影响容器、镜像或其他资源；这里只复制帮助命令，不执行实际变更。"
        example["caveat"] = "先检查帮助、确认目标并备份重要数据，再执行实际命令。"
    enrichment = enrichments.get(command)
    if enrichment:
        example = {
            "value": enrichment["value"],
            "description": enrichment["description"],
            "copyable": enrichment["copyable"],
            "authorship": "editorial",
            "evidenceTier": "first-party",
            "adaptation": "adapted",
            "sourceType": "manual",
            "sourceIds": ["docker-docs"],
            "scenario": enrichment["scenario"],
            "goal": enrichment["goal"],
            "expected": enrichment["expected"],
        }
        for field in ("prerequisites", "caveat", "warning"):
            if enrichment.get(field):
                example[field] = enrichment[field]
    item = {
        "cat": "flag",
        "cmd": command,
        "en": entry["description"],
        "zh": enrichment["zh"] if enrichment else f"Docker 官方命令入口：{entry['description']}",
        "evidenceStatus": "verified",
        "keywords": keywords,
        "examples": [example],
        "id": stable_id(command),
        "evidenceRefs": [{
            "sourceId": "docker-docs",
            "claims": ["existence", "semantics"],
            "locator": entry["url"],
            "checkedAt": checked_at,
        }],
    }
    if aliases:
        item["aliases"] = aliases
    if command.count(" ") > 1:
        item["context"] = command.rsplit(" ", 1)[0]
    return item


def update_dataset(inventory):
    dataset = load_dataset()
    enrichments = json.loads(ENRICHMENTS_PATH.read_text(encoding="utf-8")) if ENRICHMENTS_PATH.exists() else {}
    items = dataset["items"]
    inventory_commands = {entry["command"].casefold() for entry in inventory["entries"]}
    for item in items:
        cleaned = [alias for alias in item.get("aliases", []) if alias.casefold() not in inventory_commands]
        if cleaned:
            item["aliases"] = cleaned
        else:
            item.pop("aliases", None)
    exact = {item["cmd"].casefold(): item for item in items}
    alias_owners = {}
    for entry in inventory["entries"]:
        for alias in entry["aliases"]:
            alias_owners.setdefault(alias.casefold(), []).append(entry["command"])

    # Promote an existing short alias to the single canonical command it represents.
    for entry in inventory["entries"]:
        canonical = entry["command"].casefold()
        if canonical in exact:
            continue
        candidates = [
            alias for alias in entry["aliases"]
            if alias.casefold() in exact
            and alias.casefold() not in inventory_commands
            and len(alias_owners[alias.casefold()]) == 1
        ]
        if not candidates:
            continue
        old_alias = candidates[0]
        item = exact.pop(old_alias.casefold())
        item["cmd"] = entry["command"]
        aliases = [alias for alias in entry["aliases"] if len(alias_owners[alias.casefold()]) == 1]
        item["aliases"] = list(dict.fromkeys(aliases))
        exact[canonical] = item

    occupied = {item["cmd"].casefold() for item in items}
    for item in items:
        occupied.update(alias.casefold() for alias in item.get("aliases", []))

    for entry in inventory["entries"]:
        canonical = entry["command"].casefold()
        aliases = [
            alias for alias in entry["aliases"]
            if alias.casefold() not in occupied
            and alias.casefold() not in inventory_commands
            and alias_owners[alias.casefold()][0] == entry["command"]
        ]
        if canonical in exact:
            item = exact[canonical]
            merged = list(dict.fromkeys([*(item.get("aliases") or []), *aliases]))
            if merged:
                item["aliases"] = merged
            occupied.update(alias.casefold() for alias in merged)
            continue
        item = generated_item(entry, inventory["checkedAt"], aliases, enrichments)
        items.append(item)
        exact[canonical] = item
        occupied.add(canonical)
        occupied.update(alias.casefold() for alias in aliases)

    meta = dataset["meta"]
    meta.update({
        "source": f"Docker CLI 官方参考完整命令入口；核验于 {inventory['checkedAt']}",
        "coverage": "Docker 官方 CLI Reference 列出的全部命令、子命令及可搜索别名；每个命令保留常用关键选项",
        "contentCheckedAt": inventory["checkedAt"],
        "sourceCheckedAt": inventory["checkedAt"],
        "officialCoverage": {
            "scope": inventory["scope"],
            "status": "complete",
            "total": len(inventory["entries"]),
            "covered": len(inventory["entries"]),
            "checkedAt": inventory["checkedAt"],
            "sourceIds": inventory["sourceIds"],
            "inventoryHash": inventory_hash(inventory["entries"]),
        },
    })
    for source in meta.get("sources", []):
        if source.get("id") == "docker-docs":
            source["checkedAt"] = inventory["checkedAt"]
            source["lastVerifiedAt"] = inventory["checkedAt"]
    (ROOT / "data" / "docker.js").write_text(
        DATA_HEADER + json.dumps(dataset, ensure_ascii=False, indent=2) + ";\n",
        encoding="utf-8",
    )
    return len(items)


def main():
    inventory = fetch_docker_inventory()
    target = ROOT / "shared" / "official-inventories" / "docker.json"
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(json.dumps(inventory, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Docker 官方入口：{len(inventory['entries'])} 条")
    print(inventory_hash(inventory["entries"]))
    print(f"Docker 数据条目：{update_dataset(inventory)} 条")


if __name__ == "__main__":
    main()
