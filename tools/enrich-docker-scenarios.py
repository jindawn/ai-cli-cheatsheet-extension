#!/usr/bin/env python3
"""Generate command-specific Chinese Docker scenarios grounded in official references."""

import json
import os
import pathlib
import re
import subprocess


ROOT = pathlib.Path(__file__).resolve().parents[1]
DATA_PATH = ROOT / "data" / "docker.js"
INVENTORY_PATH = ROOT / "shared" / "official-inventories" / "docker.json"
CACHE_PATH = ROOT / "shared" / "docker-scenario-enrichments.json"
BATCH_SIZE = 30
TEMPLATE_SCENARIO = "需要确认当前 Docker 版本是否支持该命令及其参数"
DATA_HEADER = (
    "// Generated from validated structured data. Manual edits must follow data/SCHEMA.md.\n"
    "window.CHEATSHEET_DATA = window.CHEATSHEET_DATA || {};\n"
    'window.CHEATSHEET_DATA["docker"] = '
)
UI_FIELDS = ("zh", "description", "scenario", "goal", "expected")
BANNED = ("当前 Docker 版本是否支持", "打开该命令的本机帮助", "终端显示 Usage")


def read_dataset():
    text = DATA_PATH.read_text(encoding="utf-8")
    if not text.startswith(DATA_HEADER) or not text.endswith(";\n"):
        raise RuntimeError("data/docker.js 不是受支持的固定格式")
    return json.loads(text[len(DATA_HEADER):-2])


def extract_json(text):
    text = text.strip()
    if text.startswith("```"):
        text = re.sub(r"^```(?:json)?\s*", "", text)
        text = re.sub(r"\s*```$", "", text)
    decoder = json.JSONDecoder()
    for start in (text.find("["), text.find("{")):
        if start < 0:
            continue
        try:
            value, _ = decoder.raw_decode(text[start:])
            return value
        except json.JSONDecodeError:
            continue
    raise RuntimeError("模型输出不包含合法 JSON")


def call_claude(batch, group_commands):
    prompt = f"""
你是 Docker 中文技术文档编辑。下面每项都来自 Docker 官方 CLI Reference。
请为每个命令写一个真正贴合命令行为的中文速查条目，不要写成查看版本、查看帮助或空泛介绍。

硬性要求：
1. 必须逐项返回，command 原样保留，不得遗漏、增加或合并。
2. zh：准确简洁的中文命令释义，不夹杂未翻译的英文句子。
3. scenario：用户为什么在实际工作中需要这个命令，要具体到容器、镜像、服务、构建、网络等对象和状态。
4. goal：本次示例要完成的具体任务，不要重复 scenario。
5. value：安全且语法正确的完整命令。优先使用 officialExample；没有时根据 usage 填入清晰的演示名称，禁止原样保留 CONTAINER、IMAGE 等大写占位符。
6. description：解释示例参数和行为，不要只翻译命令名。
7. expected：写执行后可观察到的实际结果，不要统一写 Usage/Options。
8. prerequisites/caveat/warning 只在确有前提、版本平台限制、危险或易混淆点时填写。
9. 删除、停止、重启、清理、撤销等可能破坏状态的命令必须 copyable=false，并提供 warning 与含“确认/检查/备份”之一的 caveat；其它命令 copyable=true。
10. namespaceOnly=true 的管理命令没有直接业务动作，可以用 `<命令> --help`，但 scenario/goal/expected 必须明确该命令空间管理的对象，不能套统一模板。
11. 不得编造官方未给出的选项；拿不准时采用官方示例或只使用无选项的基本用法。

返回纯 JSON 对象，items 数组中的每项格式：
{{"items":[{{"command":"原命令","zh":"中文释义","value":"完整命令","description":"中文说明","scenario":"中文场景","goal":"中文目标","expected":"中文结果","prerequisites":"可选中文","caveat":"可选中文","warning":"可选中文","copyable":true}}]}}

输入：
{json.dumps(batch, ensure_ascii=False, indent=2)}
""".strip()
    claude = os.environ.get("CLAUDE_BIN") or "claude"
    item_schema = {
        "type": "object",
        "properties": {
            "command": {"type": "string"}, "zh": {"type": "string"},
            "value": {"type": "string"}, "description": {"type": "string"},
            "scenario": {"type": "string"}, "goal": {"type": "string"},
            "expected": {"type": "string"}, "prerequisites": {"type": "string"},
            "caveat": {"type": "string"}, "warning": {"type": "string"},
            "copyable": {"type": "boolean"},
        },
        "required": ["command", "zh", "value", "description", "scenario", "goal", "expected", "copyable"],
        "additionalProperties": False,
    }
    schema = {
        "type": "object",
        "properties": {"items": {"type": "array", "items": item_schema}},
        "required": ["items"],
        "additionalProperties": False,
    }
    proc = subprocess.run(
        [claude, "-p", prompt, "--permission-mode", "default", "--output-format", "json",
         "--json-schema", json.dumps(schema, ensure_ascii=False)],
        cwd=ROOT, capture_output=True, text=True, timeout=900, check=False,
    )
    if proc.returncode != 0:
        raise RuntimeError(proc.stderr.strip() or f"Claude 退出码 {proc.returncode}")
    wrapper = json.loads(proc.stdout)
    raw = wrapper.get("structured_output", wrapper.get("result", wrapper)) if isinstance(wrapper, dict) else wrapper
    result = extract_json(raw) if isinstance(raw, str) else raw
    if isinstance(result, dict):
        result = result.get("items")
    expected_commands = {entry["command"] for entry in batch}
    if not isinstance(result, list) or {entry.get("command") for entry in result} != expected_commands:
        raise RuntimeError("模型返回的命令集合与输入不一致")
    clean = {}
    source_by_command = {entry["command"]: entry for entry in batch}
    for entry in result:
        command = entry["command"]
        for field in UI_FIELDS:
            value = entry.get(field)
            if not isinstance(value, str) or not value.strip() or not re.search(r"[\u3400-\u9fff]", value):
                raise RuntimeError(f"{command}: {field} 必须是非空中文")
        if any(phrase in " ".join(str(entry.get(field, "")) for field in UI_FIELDS) for phrase in BANNED):
            raise RuntimeError(f"{command}: 仍使用禁用模板文案")
        value = entry.get("value")
        if not isinstance(value, str) or not value.startswith("docker"):
            raise RuntimeError(f"{command}: value 必须是完整 docker 命令")
        command_targets = [command, *source_by_command[command].get("aliases", [])]
        if command not in group_commands and not any(
                value == target or value.startswith(target + " ") for target in command_targets):
            raise RuntimeError(f"{command}: value 与规范命令或官方别名不匹配")
        if re.search(r"\b(?:CONTAINER|IMAGE|SERVICE|NETWORK|VOLUME|NODE|SECRET|CONFIG|PLUGIN|CONTEXT)\b", value):
            raise RuntimeError(f"{command}: value 仍包含大写占位符")
        if "--help" in value and command not in group_commands:
            raise RuntimeError(f"{command}: 叶子命令不得用 --help 充当推荐用法")
        copyable = entry.get("copyable")
        if not isinstance(copyable, bool):
            raise RuntimeError(f"{command}: copyable 必须是布尔值")
        clean_entry = {key: entry[key].strip() if isinstance(entry.get(key), str) else entry[key]
                       for key in ("zh", "value", "description", "scenario", "goal", "expected", "copyable")}
        for key in ("prerequisites", "caveat", "warning"):
            if isinstance(entry.get(key), str) and entry[key].strip():
                clean_entry[key] = entry[key].strip()
        if copyable is False and (not clean_entry.get("warning") or not clean_entry.get("caveat")):
            raise RuntimeError(f"{command}: 高风险用法必须有 warning 和 caveat")
        clean[command] = clean_entry
    return clean


def generate_batch(batch, group_commands):
    try:
        return call_claude(batch, group_commands)
    except Exception as exc:
        if len(batch) <= 5:
            raise RuntimeError(f"批次 {batch[0]['command']}.. 生成失败：{exc}") from exc
        middle = len(batch) // 2
        print(f"批次输出不合规，拆成 {middle}+{len(batch)-middle} 条重试：{exc}", flush=True)
        return {
            **generate_batch(batch[:middle], group_commands),
            **generate_batch(batch[middle:], group_commands),
        }


def apply_enrichments(dataset, enrichments):
    changed = 0
    for item in dataset["items"]:
        enrichment = enrichments.get(item["cmd"])
        if not enrichment:
            continue
        item["zh"] = enrichment["zh"]
        old_example = item["examples"][0]
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
        for key in ("prerequisites", "caveat", "warning"):
            if enrichment.get(key):
                example[key] = enrichment[key]
        if old_example.get("platforms"):
            example["platforms"] = old_example["platforms"]
        item["examples"] = [example]
        changed += 1
    return changed


def main():
    dataset = read_dataset()
    inventory = json.loads(INVENTORY_PATH.read_text(encoding="utf-8"))
    inventory_by_command = {entry["command"]: entry for entry in inventory["entries"]}
    group_commands = {
        command for command in inventory_by_command
        if any(other.startswith(command + " ") for other in inventory_by_command)
    }
    targets = [
        item for item in dataset["items"]
        if item.get("examples") and item["examples"][0].get("scenario") == TEMPLATE_SCENARIO
    ]
    batches = []
    for start in range(0, len(targets), BATCH_SIZE):
        batch = []
        for item in targets[start:start + BATCH_SIZE]:
            source = inventory_by_command[item["cmd"]]
            batch.append({
                "command": item["cmd"],
                "aliases": source.get("aliases", []),
                "officialDescription": source["description"],
                "usage": source["usage"],
                "officialExample": source.get("officialExample", ""),
                "namespaceOnly": item["cmd"] in group_commands,
            })
        batches.append(batch)
    enrichments = {}
    for index, batch in enumerate(batches, 1):
        result = generate_batch(batch, group_commands)
        enrichments.update(result)
        print(f"完成批次 {index}/{len(batches)}：{len(result)} 条", flush=True)
    if len(enrichments) != len(targets):
        raise RuntimeError(f"只生成 {len(enrichments)}/{len(targets)} 条")
    for field in ("scenario", "goal", "description", "expected"):
        values = [entry[field] for entry in enrichments.values()]
        duplicates = {value for value in values if values.count(value) > 3}
        if duplicates:
            raise RuntimeError(f"{field} 出现超过 3 次的模板化文案：{next(iter(duplicates))}")
    CACHE_PATH.write_text(json.dumps(enrichments, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    changed = apply_enrichments(dataset, enrichments)
    DATA_PATH.write_text(DATA_HEADER + json.dumps(dataset, ensure_ascii=False, indent=2) + ";\n", encoding="utf-8")
    print(f"已更新 {changed} 条 Docker 场景", flush=True)


if __name__ == "__main__":
    main()
