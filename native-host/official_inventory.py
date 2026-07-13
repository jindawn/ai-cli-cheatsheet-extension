"""Fetch and validate official command-entry inventories."""

from concurrent.futures import ThreadPoolExecutor, as_completed
import datetime
import hashlib
import json
import os
import re
import urllib.error
import urllib.request


DOCKER_ROOT = "https://docs.docker.com/reference/cli/docker/"
DOCKER_MARKDOWN_ROOT = "https://docs.docker.com/reference/cli/docker.md"
USER_AGENT = "ai-cli-cheatsheet-extension/official-inventory"
PROJECT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


class OfficialInventoryError(RuntimeError):
    def __init__(self, code, reason, actions, *, stage="official-inventory", completed=None):
        super().__init__(reason)
        self.code = code
        self.reason = reason
        self.actions = actions
        self.stage = stage
        self.completed = completed or []

    def diagnostic(self):
        return {
            "stage": self.stage,
            "code": self.code,
            "reason": self.reason,
            "actions": self.actions,
            "completedChecks": self.completed,
        }


def inventory_hash(entries):
    serialized = json.dumps(entries, ensure_ascii=False, separators=(",", ":"))
    return "sha256:" + hashlib.sha256(serialized.encode("utf-8")).hexdigest()


def _markdown_url(url):
    clean = url.split("#", 1)[0].rstrip("/")
    return clean + ".md"


def _fetch_markdown(url, timeout=20):
    request = urllib.request.Request(_markdown_url(url), headers={"User-Agent": USER_AGENT})
    try:
        with urllib.request.urlopen(request, timeout=timeout) as response:
            if response.status != 200:
                raise OfficialInventoryError(
                    "official_http_error", f"官方资料返回 HTTP {response.status}：{url}",
                    ["检查网络或稍后重试", "确认官方文档地址仍有效"],
                )
            return response.read().decode("utf-8")
    except urllib.error.HTTPError as exc:
        code = "official_rate_limited" if exc.code == 429 else "official_http_error"
        raise OfficialInventoryError(
            code, f"官方资料返回 HTTP {exc.code}：{url}",
            ["检查网络或稍后重试", "若页面已迁移，请更新官方来源登记"],
        ) from exc
    except (urllib.error.URLError, OSError, UnicodeError) as exc:
        raise OfficialInventoryError(
            "official_network_error", f"无法读取官方资料 {url}：{exc}",
            ["检查 DNS、代理和 HTTPS 证书", "恢复网络后重新检查更新"],
        ) from exc


def _parse_docker_page(url, markdown):
    title_match = re.search(r"^#[ \t]+(`?docker(?:[ \t]+[^\n`]+)?`?)[ \t]*$", markdown, re.M)
    if not title_match:
        raise OfficialInventoryError(
            "official_parser_changed", f"官方页面结构无法识别：{url}",
            ["更新 Docker 官方目录解析器", "确认页面仍是 Docker CLI Reference"],
        )
    command = title_match.group(1).strip("`").strip()
    description_match = re.search(r"^\*\*Description:\*\*\s*(.+)$", markdown, re.M)
    usage_match = re.search(r"^\*\*Usage:\*\*\s*`([^`]+)`", markdown, re.M)
    aliases_match = re.search(r"^\*\*Aliases:\*\*\s*(.+)$", markdown, re.M)
    aliases = re.findall(r"`([^`]+)`", aliases_match.group(1)) if aliases_match else []
    example = ""
    examples_section = re.search(r"^## Examples\s*$([\s\S]+)", markdown, re.M)
    if examples_section:
        for block in re.findall(r"```(?:console|bash|shell)?\n([\s\S]*?)```", examples_section.group(1)):
            commands = []
            continued = ""
            for line in block.splitlines():
                stripped = line.strip()
                if stripped.startswith("$ "):
                    if continued:
                        commands.append(continued.strip())
                    continued = stripped[2:].strip()
                elif continued and stripped.endswith("\\"):
                    continued += " " + stripped[:-1].strip()
                elif continued:
                    commands.append(continued.strip())
                    continued = ""
            if continued:
                commands.append(continued.strip())
            targets = [command, *aliases]
            example = next((
                value for value in commands
                if any(value == target or value.startswith(target + " ") for target in targets)
            ), "")
            if example:
                break
    links = []
    for linked_command, linked_url in re.findall(
        r"\|\s*\[`(docker(?:\s+[^`]+)?)`\]\((https://docs\.docker\.com/reference/cli/docker/[^)]+)\)",
        markdown,
    ):
        links.append((linked_command.strip(), linked_url.rstrip("/") + "/"))
    entry = {
        "command": command,
        "aliases": [alias for alias in aliases if alias.casefold() != command.casefold()],
        "description": description_match.group(1).strip() if description_match else command,
        "usage": usage_match.group(1).strip() if usage_match else command,
        "url": url.rstrip("/") + "/",
    }
    if example:
        entry["officialExample"] = example
    return entry, links


def fetch_docker_inventory(max_workers=12):
    pending = {DOCKER_ROOT}
    visited = set()
    entries = {}
    while pending:
        batch = sorted(pending - visited)
        pending.clear()
        if not batch:
            break
        with ThreadPoolExecutor(max_workers=max_workers) as executor:
            futures = {executor.submit(_fetch_markdown, url): url for url in batch}
            for future in as_completed(futures):
                url = futures[future]
                markdown = future.result()
                entry, links = _parse_docker_page(url, markdown)
                entries[entry["command"].casefold()] = entry
                visited.add(url)
                for _command, linked_url in links:
                    if linked_url.startswith(DOCKER_ROOT) and linked_url not in visited:
                        pending.add(linked_url)
    if len(entries) < 40:
        raise OfficialInventoryError(
            "official_inventory_incomplete",
            f"Docker 官方目录只解析到 {len(entries)} 个入口，低于安全下限 40",
            ["检查 Docker 文档页面结构", "不要应用本次不完整结果"],
        )
    ordered = sorted(entries.values(), key=lambda entry: (entry["command"].count(" "), entry["command"]))
    snapshot = _load_snapshot("docker")
    snapshot_by_command = {
        entry["command"].casefold(): entry for entry in snapshot["entries"]
    }
    normalized_entries = []
    for entry in ordered:
        stored = snapshot_by_command.get(entry["command"].casefold(), {})
        normalized_entries.append({
            "command": entry["command"],
            "context": stored.get("context", ""),
            "aliases": entry.get("aliases", []),
            "entryType": stored.get("entryType", "cli-command"),
            "component": stored.get("component", "docker"),
            "platforms": stored.get("platforms", []),
            "constraints": stored.get("constraints", []),
            "description": entry.get("description") or stored.get("description", entry["command"]),
            "usage": entry.get("usage") or stored.get("usage", entry["command"]),
            "options": stored.get("options", []),
            "officialExamples": ([entry["officialExample"]] if entry.get("officialExample") else stored.get("officialExamples", [])),
            "url": entry["url"],
        })
    return {
        "schemaVersion": 2,
        "toolId": "docker",
        "scope": "all-command-entrypoints",
        "checkedAt": datetime.date.today().isoformat(),
        "sourceIds": snapshot["sourceIds"],
        "adapter": {"id": "docker-recursive-cli-reference", "kind": "recursive-cli-reference", "version": 2},
        "closure": {
            "status": "closed", "entryCount": len(normalized_entries),
            "components": snapshot.get("closure", {}).get("components", ["docker"]),
            "platforms": snapshot.get("closure", {}).get("platforms", []),
            "proof": "recursive-official-cli-reference",
        },
        "entries": normalized_entries,
    }


def _load_snapshot(tool_id):
    path = os.path.join(PROJECT_DIR, "shared", "official-inventories", f"{tool_id}.json")
    try:
        with open(path, "r", encoding="utf-8") as handle:
            inventory = json.load(handle)
    except (OSError, json.JSONDecodeError) as exc:
        raise OfficialInventoryError(
            "official_inventory_unconfirmed",
            f"{tool_id} 的确定性官方清单快照不可读：{exc}",
            ["重新生成并提交官方清单快照", "在修复前不要应用新增或更新"],
        ) from exc
    if (
        inventory.get("schemaVersion") != 2
        or inventory.get("toolId") != tool_id
        or inventory.get("scope") != "all-command-entrypoints"
        or inventory.get("closure", {}).get("status") != "closed"
        or inventory.get("closure", {}).get("entryCount") != len(inventory.get("entries", []))
        or not inventory.get("adapter", {}).get("id")
        or not inventory.get("entries")
    ):
        raise OfficialInventoryError(
            "official_inventory_unconfirmed",
            f"{tool_id} 的官方清单无法证明目录闭合",
            ["修复适配器及闭合证明", "重新生成固定样本并运行仓库校验"],
        )
    return inventory


def fetch_official_inventory(tool_id):
    if tool_id == "docker":
        return fetch_docker_inventory()
    adapters_path = os.path.join(PROJECT_DIR, "shared", "official-inventory-adapters.json")
    try:
        with open(adapters_path, "r", encoding="utf-8") as handle:
            adapters = json.load(handle).get("adapters", {})
    except (OSError, json.JSONDecodeError) as exc:
        raise OfficialInventoryError(
            "official_adapter_missing", "官方清单适配器登记不可读",
            ["修复 shared/official-inventory-adapters.json"],
        ) from exc
    adapter = adapters.get(tool_id)
    if not adapter:
        raise OfficialInventoryError(
            "official_adapter_missing",
            f"{tool_id} 尚未配置可验证的官方入口清单适配器，不能新增或断言已是最新",
            ["先实现确定性官方目录适配器和固定样本", "在适配完成前不要写入数据"],
        )
    inventory = _load_snapshot(tool_id)
    if (
        inventory["adapter"].get("kind") != adapter.get("kind")
        or inventory["adapter"].get("version") != adapter.get("version")
    ):
        raise OfficialInventoryError(
            "official_inventory_unconfirmed", f"{tool_id} 的适配器版本与官方清单快照不一致",
            ["使用当前适配器重新解析官方固定样本"],
        )
    inventory["checkedAt"] = datetime.date.today().isoformat()
    return inventory
