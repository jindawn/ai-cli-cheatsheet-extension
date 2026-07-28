"""Validated provider registry and signed declarative adapter catalog."""

import base64
import getpass
import hashlib
import hmac
import json
import os
from pathlib import Path
import re
import tempfile
import time
import urllib.parse
import urllib.request
import uuid


PROTOCOL_VERSION = 5
CATALOG_SCHEMA_VERSION = 1
CATALOG_UPDATE_URL = (
    "https://github.com/jindawn/ai-cli-cheatsheet-extension/releases/"
    "download/provider-catalog/provider-catalog-envelope.json"
)
MAX_CATALOG_BYTES = 1024 * 1024
CATALOG_REFRESH_INTERVAL_SECONDS = 7 * 24 * 60 * 60
CATALOG_REFRESH_RETRY_SECONDS = 60 * 60
CATALOG_REFRESH_SCHEMA_VERSION = 1
BRIDGE_USER_AGENT_VERSION = "1.7.6"
PROVIDER_ID_RE = re.compile(
    r"^(?:[a-z][a-z0-9-]{0,63}|catalog:[a-z0-9][a-z0-9-]{0,63}|api:[a-f0-9-]{36}|custom:[a-f0-9-]{36})$"
)
CATALOG_PROVIDER_ID_RE = re.compile(r"^catalog:[a-z0-9][a-z0-9-]{0,63}$")
CUSTOM_PROVIDER_ID_RE = re.compile(r"^custom:[a-f0-9-]{36}$")
DRIVERS = {"stdin-json", "jsonl-events", "output-file-json"}
API_PROTOCOLS = {"anthropic-messages", "openai-responses", "openai-chat-completions"}
PLACEHOLDERS = {"{schemaFile}", "{outputFile}", "{workDir}"}
SHELL_META_RE = re.compile(r"[|&;<>`$]")
CUSTOM_ADAPTER_SCHEMA_VERSION = 1
MAX_CUSTOM_ADAPTERS = 30
V5_BUILTIN_OVERLAY_FILE = "provider-adapters-v5.json"


class ProviderRegistryError(ValueError):
    """A provider catalog or configuration failed closed."""


def canonical_json(value):
    return json.dumps(
        value, ensure_ascii=False, sort_keys=True, separators=(",", ":")
    ).encode("utf-8")


def sha256_label(value):
    data = value if isinstance(value, bytes) else canonical_json(value)
    return "sha256:" + hashlib.sha256(data).hexdigest()


def _atomic_json(path, value, mode=0o600):
    target = Path(path)
    target.parent.mkdir(parents=True, exist_ok=True)
    descriptor, temporary = tempfile.mkstemp(
        prefix=target.name + ".", dir=str(target.parent)
    )
    try:
        with os.fdopen(descriptor, "w", encoding="utf-8") as handle:
            json.dump(value, handle, ensure_ascii=False, indent=2)
            handle.write("\n")
            handle.flush()
            os.fsync(handle.fileno())
        try:
            os.chmod(temporary, mode)
        except OSError:
            pass
        os.replace(temporary, target)
    finally:
        try:
            os.unlink(temporary)
        except OSError:
            pass


# RFC 8032 Ed25519 verification. Kept dependency-free because source installs run
# on the system Python. Release signing uses the matching helpers below.
_Q = 2**255 - 19
_L = 2**252 + 27742317777372353535851937790883648493
_D = (-121665 * pow(121666, _Q - 2, _Q)) % _Q
_I = pow(2, (_Q - 1) // 4, _Q)


def _xrecover(y):
    xx = (y * y - 1) * pow(_D * y * y + 1, _Q - 2, _Q)
    x = pow(xx, (_Q + 3) // 8, _Q)
    if (x * x - xx) % _Q != 0:
        x = (x * _I) % _Q
    if x % 2 != 0:
        x = _Q - x
    return x


_BY = (4 * pow(5, _Q - 2, _Q)) % _Q
_B = (_xrecover(_BY), _BY)


def _edwards(first, second):
    x1, y1 = first
    x2, y2 = second
    denominator = (_D * x1 * x2 * y1 * y2) % _Q
    x3 = (x1 * y2 + x2 * y1) * pow(1 + denominator, _Q - 2, _Q)
    y3 = (y1 * y2 + x1 * x2) * pow(1 - denominator, _Q - 2, _Q)
    return x3 % _Q, y3 % _Q


def _scalarmult(point, scalar):
    result = (0, 1)
    addend = point
    value = scalar
    while value:
        if value & 1:
            result = _edwards(result, addend)
        addend = _edwards(addend, addend)
        value >>= 1
    return result


def _encode_point(point):
    x, y = point
    encoded = y | ((x & 1) << 255)
    return encoded.to_bytes(32, "little")


def _decode_point(encoded):
    if len(encoded) != 32:
        raise ProviderRegistryError("Ed25519 公钥或签名点长度无效")
    value = int.from_bytes(encoded, "little")
    y = value & ((1 << 255) - 1)
    if y >= _Q:
        raise ProviderRegistryError("Ed25519 点编码无效")
    x = _xrecover(y)
    if (x & 1) != (value >> 255):
        x = _Q - x
    point = (x, y)
    if _edwards(point, ((_Q - x) % _Q, y)) != (0, 1):
        raise ProviderRegistryError("Ed25519 点不在曲线上")
    return point


def _hint(value):
    return int.from_bytes(hashlib.sha512(value).digest(), "little")


def ed25519_public_key(seed):
    if len(seed) != 32:
        raise ProviderRegistryError("Ed25519 私钥种子必须为 32 字节")
    digest = hashlib.sha512(seed).digest()
    scalar = int.from_bytes(
        bytes([digest[0] & 248]) + digest[1:31] + bytes([(digest[31] & 63) | 64]),
        "little",
    )
    return _encode_point(_scalarmult(_B, scalar))


def ed25519_sign(seed, message):
    public_key = ed25519_public_key(seed)
    digest = hashlib.sha512(seed).digest()
    scalar = int.from_bytes(
        bytes([digest[0] & 248]) + digest[1:31] + bytes([(digest[31] & 63) | 64]),
        "little",
    )
    nonce = _hint(digest[32:] + message) % _L
    encoded_nonce = _encode_point(_scalarmult(_B, nonce))
    challenge = _hint(encoded_nonce + public_key + message) % _L
    signature_scalar = (nonce + challenge * scalar) % _L
    return encoded_nonce + signature_scalar.to_bytes(32, "little")


def ed25519_verify(public_key, message, signature):
    try:
        if len(public_key) != 32 or len(signature) != 64:
            return False
        encoded_nonce = signature[:32]
        signature_scalar = int.from_bytes(signature[32:], "little")
        if signature_scalar >= _L:
            return False
        public_point = _decode_point(public_key)
        nonce_point = _decode_point(encoded_nonce)
        challenge = _hint(encoded_nonce + public_key + message) % _L
        expected = _edwards(nonce_point, _scalarmult(public_point, challenge))
        actual = _scalarmult(_B, signature_scalar)
        return hmac.compare_digest(_encode_point(actual), _encode_point(expected))
    except (ProviderRegistryError, ValueError, OverflowError):
        return False


def _read_json(path, required=True):
    try:
        with open(path, "r", encoding="utf-8") as handle:
            return json.load(handle)
    except (OSError, json.JSONDecodeError) as exc:
        if required:
            raise ProviderRegistryError(f"无法读取 Provider 配置：{path}") from exc
        return None


def _checked_text(value, field, maximum=160):
    if not isinstance(value, str) or not value.strip() or len(value.strip()) > maximum:
        raise ProviderRegistryError(f"{field} 无效")
    return value.strip()


def _validate_fixed_argv(value, field):
    if not isinstance(value, list) or len(value) > 40:
        raise ProviderRegistryError(f"{field} 必须是参数数组")
    cleaned = []
    for index, item in enumerate(value):
        text = _checked_text(item, f"{field}[{index}]", 500)
        if any(token in text for token in ("\n", "\r", "\x00")):
            raise ProviderRegistryError(f"{field}[{index}] 含非法字符")
        for placeholder in re.findall(r"\{[^{}]+\}", text):
            if placeholder not in PLACEHOLDERS:
                raise ProviderRegistryError(f"{field}[{index}] 使用了未批准占位符")
        cleaned.append(text)
    return cleaned


def _validate_custom_argv(value, field):
    """Validate direct-process arguments for a user configured adapter.

    The host never invokes a shell, but rejecting shell syntax here makes the
    boundary visible to users and prevents a future implementation from
    accidentally treating this metadata as shell text.
    """
    cleaned = _validate_fixed_argv(value, field)
    for index, argument in enumerate(cleaned):
        if SHELL_META_RE.search(argument):
            raise ProviderRegistryError(f"{field}[{index}] 不能包含 Shell 元字符")
    return cleaned


def validate_adapter(adapter, *, source):
    if not isinstance(adapter, dict):
        raise ProviderRegistryError("Provider adapter 必须是对象")
    provider_id = _checked_text(adapter.get("id"), "adapter.id", 80)
    if source == "catalog":
        if not CATALOG_PROVIDER_ID_RE.fullmatch(provider_id):
            raise ProviderRegistryError("目录 Provider ID 必须使用 catalog: 前缀")
    elif source == "custom":
        if not CUSTOM_PROVIDER_ID_RE.fullmatch(provider_id):
            raise ProviderRegistryError("自定义 Provider ID 必须使用 custom: UUID")
    elif not PROVIDER_ID_RE.fullmatch(provider_id):
        raise ProviderRegistryError("Provider ID 格式无效")
    display_name = _checked_text(adapter.get("displayName"), "adapter.displayName", 100)
    transport = adapter.get("transport")
    if transport != "cli":
        raise ProviderRegistryError("签名适配器首版仅允许 CLI transport")
    driver = adapter.get("driver")
    if source == "builtin":
        if driver not in {
            "builtin-claude", "builtin-codex", "builtin-gemini", "builtin-opencode",
            "builtin-qwen",
        }:
            raise ProviderRegistryError("内置 Provider driver 无效")
    elif driver not in DRIVERS:
        raise ProviderRegistryError("目录 Provider driver 不受桥接支持")
    candidates = adapter.get("executableCandidates")
    if not isinstance(candidates, list) or not candidates or len(candidates) > 8:
        raise ProviderRegistryError("adapter.executableCandidates 无效")
    clean_candidates = []
    for candidate in candidates:
        name = _checked_text(candidate, "adapter.executableCandidates[]", 80)
        if not re.fullmatch(r"[A-Za-z0-9][A-Za-z0-9._+-]*", name):
            raise ProviderRegistryError("可执行文件候选只能是文件名，不能包含路径或 Shell")
        clean_candidates.append(name)
    login_command = str(adapter.get("loginCommand") or "").strip()[:200]
    if any(token in login_command for token in ("\n", "\r", "\x00")):
        raise ProviderRegistryError("adapter.loginCommand 含非法字符")
    if source == "custom" and SHELL_META_RE.search(login_command):
        raise ProviderRegistryError("adapter.loginCommand 不能包含 Shell 元字符")
    execution_mode = None
    if source == "custom":
        execution_mode = adapter.get("executionMode") or "legacy-configured"
        if execution_mode not in {"generic", "legacy-configured"}:
            raise ProviderRegistryError("自定义 AI 环境执行模式无效")
    clean = {
        "id": provider_id,
        "displayName": display_name,
        "source": source,
        "transport": "cli",
        "verified": source != "custom",
        "driver": driver,
        "executableCandidates": clean_candidates,
        "loginCommand": login_command,
        "capabilities": ["structured-output", "read-only", "maintenance", "cancel"],
        "recommendationOrder": int(adapter.get("recommendationOrder", 850 if execution_mode == "generic" else 1000)),
    }
    if source in {"catalog", "custom"}:
        if source == "catalog":
            security = adapter.get("security")
            if not isinstance(security, dict) or security.get("readOnly") is not True:
                raise ProviderRegistryError("目录适配器缺少只读安全声明")
            reference = _checked_text(
                security.get("officialReference"), "adapter.security.officialReference", 500
            )
            if not reference.startswith("https://"):
                raise ProviderRegistryError("只读能力依据必须是 HTTPS 官方地址")
            clean["security"] = {"readOnly": True, "officialReference": reference}
            argument_validator = _validate_fixed_argv
        else:
            if execution_mode == "generic":
                if adapter.get("genericConfirmed") is not True:
                    raise ProviderRegistryError("启用通用调用前必须完成风险确认")
                if driver != "stdin-json" or adapter.get("promptMode", "stdin") != "stdin" \
                        or adapter.get("outputParser", "json") != "json":
                    raise ProviderRegistryError("通用调用只能使用无参数标准输入 JSON 模式")
                if adapter.get("argv", []) != [] or adapter.get("versionArgs", ["--version"]) != ["--version"]:
                    raise ProviderRegistryError("通用调用不允许自定义参数")
                clean["executionMode"] = "generic"
                clean["genericConfirmed"] = True
                clean["capabilities"] = ["structured-output", "maintenance", "cancel"]
            elif adapter.get("readOnlyConfirmed") is not True:
                raise ProviderRegistryError("保存自定义环境前必须确认只读行为")
            else:
                clean["executionMode"] = "legacy-configured"
            clean["userConfigured"] = True
            argument_validator = _validate_custom_argv
        clean["argv"] = argument_validator(adapter.get("argv", []), "adapter.argv")
        clean["promptMode"] = adapter.get("promptMode", "stdin")
        if clean["promptMode"] not in {"stdin", "argv"}:
            raise ProviderRegistryError("adapter.promptMode 无效")
        clean["versionArgs"] = argument_validator(
            adapter.get("versionArgs", ["--version"]), "adapter.versionArgs"
        )
        login_probe = adapter.get("loginProbe")
        if login_probe is not None:
            if not isinstance(login_probe, dict):
                raise ProviderRegistryError("adapter.loginProbe 无效")
            clean["loginProbe"] = {
                "args": argument_validator(login_probe.get("args", []), "loginProbe.args"),
                "successContains": _checked_text(
                    login_probe.get("successContains"), "loginProbe.successContains", 200
                ),
            }
        parser = adapter.get("outputParser", "json")
        if parser not in {"json", "jsonl-text", "output-file-json"}:
            raise ProviderRegistryError("adapter.outputParser 无效")
        if (driver == "output-file-json" or parser == "output-file-json") \
                and not any("{outputFile}" in argument for argument in clean["argv"]):
            raise ProviderRegistryError("输出文件驱动必须使用 {outputFile} 占位符")
        if driver == "jsonl-events" and parser != "jsonl-text":
            raise ProviderRegistryError("jsonl-events 驱动必须使用 jsonl-text 解析器")
        clean["outputParser"] = parser
    return clean


def validate_catalog(payload):
    if not isinstance(payload, dict):
        raise ProviderRegistryError("Provider catalog 必须是对象")
    if payload.get("schemaVersion") != CATALOG_SCHEMA_VERSION:
        raise ProviderRegistryError("Provider catalog Schema 不兼容")
    version = payload.get("catalogVersion")
    if not isinstance(version, int) or version < 1:
        raise ProviderRegistryError("Provider catalog 版本无效")
    if payload.get("minimumProtocolVersion") != PROTOCOL_VERSION:
        raise ProviderRegistryError("Provider catalog 需要不同的桥接协议")
    adapters = payload.get("adapters")
    if not isinstance(adapters, list) or len(adapters) > 100:
        raise ProviderRegistryError("Provider catalog adapters 无效")
    cleaned = []
    seen = set()
    for adapter in adapters:
        entry = validate_adapter(adapter, source="catalog")
        if entry["id"] in seen:
            raise ProviderRegistryError(f"Provider catalog ID 重复：{entry['id']}")
        seen.add(entry["id"])
        cleaned.append(entry)
    return {
        "schemaVersion": CATALOG_SCHEMA_VERSION,
        "catalogVersion": version,
        "minimumProtocolVersion": PROTOCOL_VERSION,
        "adapters": cleaned,
    }


def _trusted_public_key(shared_dir):
    configured = os.environ.get("AICLI_PROVIDER_CATALOG_PUBLIC_KEY", "").strip()
    if not configured:
        document = _read_json(
            os.path.join(shared_dir, "provider-catalog-public-key.json"), required=False
        ) or {}
        configured = str(document.get("publicKey") or "").strip()
    if not configured:
        return None
    try:
        value = base64.b64decode(configured, validate=True)
    except (ValueError, TypeError) as exc:
        raise ProviderRegistryError("Provider catalog 公钥配置无效") from exc
    if len(value) != 32:
        raise ProviderRegistryError("Provider catalog 公钥长度无效")
    return value


def verify_catalog_envelope(envelope, shared_dir, minimum_version=0):
    if not isinstance(envelope, dict):
        raise ProviderRegistryError("Provider catalog envelope 无效")
    payload = envelope.get("payload")
    expected_digest = envelope.get("sha256")
    signature_text = envelope.get("signature")
    canonical = canonical_json(payload)
    if expected_digest != sha256_label(canonical):
        raise ProviderRegistryError("Provider catalog SHA-256 校验失败")
    public_key = _trusted_public_key(shared_dir)
    if public_key is None:
        raise ProviderRegistryError("当前桥接尚未配置 Provider catalog 发布公钥")
    try:
        signature = base64.b64decode(signature_text, validate=True)
    except (ValueError, TypeError) as exc:
        raise ProviderRegistryError("Provider catalog 签名编码无效") from exc
    if not ed25519_verify(public_key, canonical, signature):
        raise ProviderRegistryError("Provider catalog Ed25519 签名无效")
    catalog = validate_catalog(payload)
    if catalog["catalogVersion"] < minimum_version:
        raise ProviderRegistryError("Provider catalog 版本回退已被拒绝")
    return catalog


def sign_catalog_envelope(payload, seed):
    catalog = validate_catalog(payload)
    canonical = canonical_json(catalog)
    return {
        "algorithm": "Ed25519",
        "sha256": sha256_label(canonical),
        "signature": base64.b64encode(ed25519_sign(seed, canonical)).decode("ascii"),
        "payload": catalog,
    }


def _validate_builtin_catalog(document, seen=None):
    if document.get("schemaVersion") != CATALOG_SCHEMA_VERSION:
        raise ProviderRegistryError("内置 Provider adapter Schema 无效")
    catalog_version = document.get("catalogVersion", 1)
    if not isinstance(catalog_version, int) or catalog_version < 1:
        raise ProviderRegistryError("内置 Provider catalogVersion 无效")
    minimum_protocol = document.get("minimumProtocolVersion", 1)
    if not isinstance(minimum_protocol, int) or minimum_protocol < 1:
        raise ProviderRegistryError("内置 Provider minimumProtocolVersion 无效")
    raw_adapters = document.get("adapters")
    if not isinstance(raw_adapters, list):
        raise ProviderRegistryError("内置 Provider adapters 无效")
    adapters = []
    known_ids = set(seen or ())
    for raw in raw_adapters:
        adapter = validate_adapter(raw, source="builtin")
        if adapter["id"] in known_ids:
            raise ProviderRegistryError("内置 Provider ID 重复")
        known_ids.add(adapter["id"])
        adapters.append(adapter)
    return catalog_version, minimum_protocol, adapters


def _load_builtin_catalog(shared_dir):
    """Load legacy-safe built-ins, then the v5-only optional overlay.

    Source-installed v3/v4 bridges read ``provider-adapters.json`` directly.
    It must therefore stay limited to the driver set those bridges understand.
    The v5 overlay is optional by design: a missing or invalid Qwen definition
    disables that new capability without blocking legacy Provider detection.
    """
    document = _read_json(os.path.join(shared_dir, "provider-adapters.json"))
    catalog_version, minimum_protocol, adapters = _validate_builtin_catalog(document)
    if minimum_protocol > PROTOCOL_VERSION:
        raise ProviderRegistryError("内置 Provider 需要更新的桥接协议")

    overlay_error = None
    overlay_path = os.path.join(shared_dir, V5_BUILTIN_OVERLAY_FILE)
    if os.path.exists(overlay_path):
        try:
            overlay_document = _read_json(overlay_path)
            overlay_version, overlay_minimum_protocol, overlay_adapters = (
                _validate_builtin_catalog(
                    overlay_document, {adapter["id"] for adapter in adapters}
                )
            )
            if overlay_minimum_protocol > PROTOCOL_VERSION:
                raise ProviderRegistryError("v5 Provider 覆盖需要更新的桥接协议")
            adapters.extend(overlay_adapters)
            catalog_version = max(catalog_version, overlay_version)
        except ProviderRegistryError as exc:
            # This layer only contains post-v4 capabilities. Do not turn a
            # Qwen catalog issue into a total Native Messaging outage.
            overlay_error = str(exc)
    return catalog_version, adapters, overlay_error


def catalog_path(state_dir):
    return os.path.join(state_dir, "provider-catalog-envelope.json")


def catalog_refresh_path(state_dir):
    return os.path.join(state_dir, "provider-catalog-refresh.json")


def api_config_path(state_dir):
    return os.path.join(state_dir, "provider-api-config.json")


def custom_adapter_path(state_dir):
    return os.path.join(state_dir, "custom-provider-adapters.json")


def _common_provider_catalog_path(shared_dir):
    return os.path.join(shared_dir, "common-provider-catalog.json")


def load_common_provider_catalog(shared_dir):
    """Return display-only common environments shipped with this bridge.

    This catalog never grants execution authority. Only a built-in, signed, or
    explicitly user-confirmed custom adapter may enter the executable registry.
    """
    document = _read_json(_common_provider_catalog_path(shared_dir), required=False)
    if document is None:
        return []
    if document.get("schemaVersion") != 1:
        raise ProviderRegistryError("常见 AI 环境目录 Schema 无效")
    providers = document.get("providers")
    if not isinstance(providers, list) or len(providers) > 100:
        raise ProviderRegistryError("常见 AI 环境目录无效")
    cleaned = []
    seen = set()
    for index, item in enumerate(providers):
        if not isinstance(item, dict):
            raise ProviderRegistryError("常见 AI 环境条目无效")
        item_id = _checked_text(item.get("id"), f"common.providers[{index}].id", 80)
        if not re.fullmatch(r"[a-z][a-z0-9-]{0,63}", item_id) or item_id in seen:
            raise ProviderRegistryError("常见 AI 环境 ID 无效或重复")
        seen.add(item_id)
        status = item.get("adapterStatus")
        if status not in {"built-in", "configuration-required", "unsupported"}:
            raise ProviderRegistryError("常见 AI 环境适配器状态无效")
        installer_status = item.get("installerStatus", "unsupported")
        if installer_status not in {"supported", "unsupported"}:
            raise ProviderRegistryError("常见 AI 环境安装状态无效")
        executable = _checked_text(
            item.get("executable"), f"common.providers[{index}].executable", 80
        )
        if not re.fullmatch(r"[A-Za-z0-9][A-Za-z0-9._+-]*", executable):
            raise ProviderRegistryError("常见 AI 环境可执行文件名无效")
        official_url = _checked_text(
            item.get("officialUrl"), f"common.providers[{index}].officialUrl", 500
        )
        if not official_url.startswith("https://"):
            raise ProviderRegistryError("常见 AI 环境官方链接必须使用 HTTPS")
        cleaned.append({
            "id": item_id,
            "displayName": _checked_text(
                item.get("displayName"), f"common.providers[{index}].displayName", 100
            ),
            "executable": executable,
            "adapterStatus": status,
            "installerStatus": installer_status,
            "officialUrl": official_url,
            "description": str(item.get("description") or "").strip()[:220],
        })
    return cleaned


def _custom_adapter_document(state_dir):
    document = _read_json(custom_adapter_path(state_dir), required=False)
    if document is None:
        return {"schemaVersion": CUSTOM_ADAPTER_SCHEMA_VERSION, "adapters": []}
    if document.get("schemaVersion") != CUSTOM_ADAPTER_SCHEMA_VERSION:
        raise ProviderRegistryError("本地自定义 AI 环境配置版本不兼容")
    adapters = document.get("adapters")
    if not isinstance(adapters, list) or len(adapters) > MAX_CUSTOM_ADAPTERS:
        raise ProviderRegistryError("本地自定义 AI 环境配置无效")
    return document


def load_custom_adapters(state_dir):
    document = _custom_adapter_document(state_dir)
    cleaned = []
    seen = set()
    for adapter in document["adapters"]:
        entry = validate_adapter(adapter, source="custom")
        if entry["id"] in seen:
            raise ProviderRegistryError("本地自定义 AI 环境 ID 重复")
        seen.add(entry["id"])
        cleaned.append(entry)
    return cleaned


def _public_adapter(adapter):
    return {
        key: value for key, value in adapter.items()
        if key not in {"token"}
    }


def save_custom_adapter(state_dir, config):
    """Persist a local-only, declarative custom CLI adapter.

    It accepts no executable path, no shell program and no model-provided code.
    Every token is later passed to ``subprocess`` as one array element.
    """
    if not isinstance(config, dict):
        raise ProviderRegistryError("自定义 AI 环境配置无效")
    document = _custom_adapter_document(state_dir)
    raw_id = str(config.get("id") or "").strip()
    if raw_id:
        if not CUSTOM_PROVIDER_ID_RE.fullmatch(raw_id):
            raise ProviderRegistryError("只能编辑已有的自定义 AI 环境")
        provider_id = raw_id
    else:
        provider_id = f"custom:{uuid.uuid4()}"
    executable = config.get("executable")
    raw = {
        "id": provider_id,
        "displayName": config.get("displayName"),
        "transport": "cli",
        "driver": config.get("driver"),
        "executableCandidates": [executable],
        "argv": config.get("argv", []),
        "promptMode": config.get("promptMode", "stdin"),
        "outputParser": config.get("outputParser", "json"),
        "versionArgs": config.get("versionArgs", ["--version"]),
        "loginCommand": config.get("loginCommand", ""),
        "readOnlyConfirmed": config.get("readOnlyConfirmed"),
        "executionMode": config.get("executionMode"),
        "genericConfirmed": config.get("genericConfirmed"),
        "recommendationOrder": 900,
    }
    clean = validate_adapter(raw, source="custom")
    entries = load_custom_adapters(state_dir)
    matched = [entry for entry in entries if entry["id"] == provider_id]
    if not matched and len(entries) >= MAX_CUSTOM_ADAPTERS:
        raise ProviderRegistryError(f"最多可保存 {MAX_CUSTOM_ADAPTERS} 个自定义 AI 环境")
    executable_key = clean["executableCandidates"][0].casefold()
    duplicate = next((entry for entry in entries if entry["id"] != provider_id
                      and entry["displayName"].casefold() == clean["displayName"].casefold()
                      and entry["executableCandidates"][0].casefold() == executable_key), None)
    if duplicate:
        raise ProviderRegistryError("已存在同名且使用同一可执行文件的自定义环境")
    serializable = {
        "id": clean["id"],
        "displayName": clean["displayName"],
        "transport": "cli",
        "driver": clean["driver"],
        "executableCandidates": clean["executableCandidates"],
        "argv": clean["argv"],
        "promptMode": clean["promptMode"],
        "outputParser": clean["outputParser"],
        "versionArgs": clean["versionArgs"],
        "loginCommand": clean["loginCommand"],
        "executionMode": clean.get("executionMode", "legacy-configured"),
    }
    if serializable["executionMode"] == "generic":
        serializable["genericConfirmed"] = True
    else:
        serializable["readOnlyConfirmed"] = True
    existing_by_id = {entry["id"]: entry for entry in document["adapters"]}
    existing_by_id[provider_id] = serializable
    _atomic_json(custom_adapter_path(state_dir), {
        "schemaVersion": CUSTOM_ADAPTER_SCHEMA_VERSION,
        "adapters": list(existing_by_id.values()),
    })
    return _public_adapter(clean)


def save_generic_adapter(state_dir, config):
    """Persist the minimal, user-confirmed generic stdin JSON adapter."""
    if not isinstance(config, dict):
        raise ProviderRegistryError("通用 AI 环境配置无效")
    return save_custom_adapter(state_dir, {
        "id": config.get("id"),
        "displayName": config.get("displayName"),
        "executable": config.get("executable"),
        "driver": "stdin-json",
        "argv": [],
        "promptMode": "stdin",
        "outputParser": "json",
        "versionArgs": ["--version"],
        "loginCommand": "",
        "executionMode": "generic",
        "genericConfirmed": config.get("genericConfirmed"),
    })


def delete_custom_adapter(state_dir, provider_id):
    if not isinstance(provider_id, str) or not CUSTOM_PROVIDER_ID_RE.fullmatch(provider_id):
        raise ProviderRegistryError("只能删除自定义 AI 环境")
    document = _custom_adapter_document(state_dir)
    remaining = [entry for entry in document["adapters"] if entry.get("id") != provider_id]
    if len(remaining) == len(document["adapters"]):
        raise ProviderRegistryError("未找到指定的自定义 AI 环境")
    _atomic_json(custom_adapter_path(state_dir), {
        "schemaVersion": CUSTOM_ADAPTER_SCHEMA_VERSION,
        "adapters": remaining,
    })
    return {"id": provider_id, "deleted": True}


def _refresh_timestamp(value):
    return value if isinstance(value, (int, float)) and value >= 0 else 0


def _refresh_iso(value):
    timestamp = _refresh_timestamp(value)
    if not timestamp:
        return None
    return time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime(timestamp))


def _load_refresh_state(state_dir):
    document = _read_json(catalog_refresh_path(state_dir), required=False)
    if not isinstance(document, dict) or document.get("schemaVersion") != CATALOG_REFRESH_SCHEMA_VERSION:
        return {
            "schemaVersion": CATALOG_REFRESH_SCHEMA_VERSION,
            "lastSuccessfulCheckAt": 0,
            "lastAttemptAt": 0,
            "lastFailureAt": 0,
            "lastResult": "",
        }
    return {
        "schemaVersion": CATALOG_REFRESH_SCHEMA_VERSION,
        "lastSuccessfulCheckAt": _refresh_timestamp(document.get("lastSuccessfulCheckAt")),
        "lastAttemptAt": _refresh_timestamp(document.get("lastAttemptAt")),
        "lastFailureAt": _refresh_timestamp(document.get("lastFailureAt")),
        "lastResult": str(document.get("lastResult") or "")[:20],
    }


def _catalog_refresh_result(status, state, *, next_retry_at=0):
    """Return only UI-safe catalog-refresh metadata to the extension."""
    result = {
        "status": status,
        "checkedAt": _refresh_iso(state.get("lastSuccessfulCheckAt")),
    }
    if next_retry_at:
        result["nextRetryAt"] = _refresh_iso(next_retry_at)
    return result


def _save_refresh_state(state_dir, state):
    """Refresh metadata is advisory; a storage failure must not stop scanning."""
    try:
        _atomic_json(catalog_refresh_path(state_dir), state)
    except OSError:
        pass


def _load_installed_catalog(shared_dir, state_dir):
    path = catalog_path(state_dir)
    envelope = _read_json(path, required=False)
    if envelope is None:
        return 0, [], None
    try:
        catalog = verify_catalog_envelope(envelope, shared_dir)
    except ProviderRegistryError as exc:
        return 0, [], str(exc)
    return catalog["catalogVersion"], catalog["adapters"], None


def _validate_api_profile(profile, include_secret=False):
    if not isinstance(profile, dict):
        raise ProviderRegistryError("API Provider 配置无效")
    provider_id = _checked_text(profile.get("id"), "api.id", 80)
    if not re.fullmatch(r"api:[a-f0-9-]{36}", provider_id):
        raise ProviderRegistryError("API Provider ID 无效")
    display_name = _checked_text(profile.get("displayName"), "api.displayName", 100)
    protocol = profile.get("protocol")
    if protocol not in API_PROTOCOLS:
        raise ProviderRegistryError("API Provider 协议无效")
    base_url = _checked_text(profile.get("baseUrl"), "api.baseUrl", 500).rstrip("/")
    parsed = urllib.parse.urlparse(base_url)
    loopback = parsed.hostname in {"127.0.0.1", "localhost", "::1"}
    if not parsed.netloc or (parsed.scheme != "https" and not (parsed.scheme == "http" and loopback)):
        raise ProviderRegistryError("API 地址必须使用 HTTPS；本机回环地址可使用 HTTP")
    model = _checked_text(profile.get("model"), "api.model", 160)
    clean = {
        "id": provider_id,
        "displayName": display_name,
        "source": "user-configured",
        "transport": "api",
        "verified": False,
        "driver": protocol,
        "protocol": protocol,
        "baseUrl": base_url,
        "model": model,
        "capabilities": ["structured-output", "read-only", "maintenance", "cancel"],
        "recommendationOrder": int(profile.get("recommendationOrder", 500)),
    }
    if include_secret:
        clean["token"] = _checked_text(profile.get("token"), "api.token", 4096)
    return clean


def load_api_profiles(state_dir, include_secret=False):
    document = _read_json(api_config_path(state_dir), required=False) or {"profiles": []}
    profiles = document.get("profiles", [])
    if not isinstance(profiles, list) or len(profiles) > 20:
        raise ProviderRegistryError("API Provider 配置列表无效")
    cleaned = []
    seen = set()
    for profile in profiles:
        entry = _validate_api_profile(profile, include_secret=include_secret)
        if entry["id"] in seen:
            raise ProviderRegistryError("API Provider ID 重复")
        seen.add(entry["id"])
        cleaned.append(entry)
    return cleaned


def save_api_profile(state_dir, config):
    """Persist one API profile without exposing its token to the caller."""
    if not isinstance(config, dict):
        raise ProviderRegistryError("API Provider 配置无效")
    existing = load_api_profiles(state_dir, include_secret=True)
    if len(existing) >= 20:
        raise ProviderRegistryError("兼容 API 配置最多 20 个")
    profile = _validate_api_profile({
        "id": f"api:{uuid.uuid4()}",
        "displayName": config.get("displayName"),
        "protocol": config.get("protocol"),
        "baseUrl": config.get("baseUrl"),
        "model": config.get("model"),
        "token": config.get("token"),
        "recommendationOrder": 500 + len(existing),
    }, include_secret=True)
    existing.append(profile)
    _atomic_json(api_config_path(state_dir), {"schemaVersion": 1, "profiles": existing})
    return {key: value for key, value in profile.items() if key != "token"}


def load_registry(shared_dir, state_dir):
    builtin_version, builtins, builtin_overlay_error = _load_builtin_catalog(shared_dir)
    installed_version, catalog_adapters, catalog_error = _load_installed_catalog(
        shared_dir, state_dir
    )
    try:
        custom_adapters = load_custom_adapters(state_dir)
        custom_config_error = None
    except ProviderRegistryError as exc:
        custom_adapters = []
        custom_config_error = str(exc)
    try:
        api_profiles = load_api_profiles(state_dir)
        api_config_error = None
    except ProviderRegistryError as exc:
        api_profiles = []
        api_config_error = str(exc)
    combined = []
    seen = set()
    for adapter in builtins + catalog_adapters + custom_adapters + api_profiles:
        if adapter["id"] in seen:
            raise ProviderRegistryError(f"Provider ID 冲突：{adapter['id']}")
        seen.add(adapter["id"])
        combined.append(adapter)
    combined.sort(key=lambda item: (item["recommendationOrder"], item["displayName"].casefold()))
    try:
        public_key_configured = _trusted_public_key(shared_dir) is not None
    except ProviderRegistryError:
        public_key_configured = False
    metadata = {
        "schemaVersion": CATALOG_SCHEMA_VERSION,
        "builtinCatalogVersion": builtin_version,
        "installedCatalogVersion": installed_version,
        "customAdapterCount": len(custom_adapters),
        "providers": [
            _public_adapter(adapter)
            for adapter in combined
        ],
    }
    return {
        "providers": combined,
        "byId": {adapter["id"]: adapter for adapter in combined},
        "catalogVersion": max(builtin_version, installed_version),
        "catalogDigest": sha256_label(metadata),
        "catalogUpdateSupported": public_key_configured,
        "catalogError": catalog_error,
        "builtinOverlayError": builtin_overlay_error,
        "customConfigError": custom_config_error,
        "apiConfigError": api_config_error,
    }


def install_catalog_envelope(envelope, shared_dir, state_dir):
    existing_envelope = _read_json(catalog_path(state_dir), required=False)
    try:
        existing_catalog = (
            verify_catalog_envelope(existing_envelope, shared_dir)
            if existing_envelope is not None else None
        )
    except ProviderRegistryError:
        existing_catalog = None
    catalog = verify_catalog_envelope(
        envelope,
        shared_dir,
        minimum_version=existing_catalog["catalogVersion"] if existing_catalog else 0,
    )
    if existing_catalog and catalog["catalogVersion"] == existing_catalog["catalogVersion"]:
        if envelope.get("sha256") != existing_envelope.get("sha256"):
            raise ProviderRegistryError("相同版本的 Provider catalog 内容冲突")
        installed = load_registry(shared_dir, state_dir)
        return {
            "catalogVersion": catalog["catalogVersion"],
            "catalogDigest": installed["catalogDigest"],
            "providerCount": len(catalog["adapters"]),
            "changed": False,
        }
    _atomic_json(catalog_path(state_dir), envelope)
    installed = load_registry(shared_dir, state_dir)
    return {
        "catalogVersion": catalog["catalogVersion"],
        "catalogDigest": installed["catalogDigest"],
        "providerCount": len(catalog["adapters"]),
        "changed": True,
    }


def download_catalog_envelope(shared_dir, state_dir, url=CATALOG_UPDATE_URL):
    parsed = urllib.parse.urlparse(url)
    if parsed.scheme != "https" or not parsed.netloc:
        raise ProviderRegistryError("Provider catalog 更新地址必须是 HTTPS")
    request = urllib.request.Request(
        url,
        headers={"User-Agent": f"AI-CLI-Cheatsheet-Bridge/{BRIDGE_USER_AGENT_VERSION}"},
    )
    try:
        with urllib.request.urlopen(request, timeout=30) as response:  # nosec B310
            final_url = response.geturl()
            final_parsed = urllib.parse.urlparse(final_url)
            if final_parsed.scheme != "https" or not final_parsed.netloc:
                raise ProviderRegistryError("Provider catalog 重定向到了非 HTTPS 地址")
            raw = response.read(MAX_CATALOG_BYTES + 1)
    except OSError as exc:
        raise ProviderRegistryError("无法下载 Provider catalog") from exc
    if len(raw) > MAX_CATALOG_BYTES:
        raise ProviderRegistryError("Provider catalog 超过大小上限")
    try:
        envelope = json.loads(raw.decode("utf-8"))
    except (UnicodeDecodeError, json.JSONDecodeError) as exc:
        raise ProviderRegistryError("Provider catalog 不是有效 JSON") from exc
    return install_catalog_envelope(envelope, shared_dir, state_dir)


def refresh_catalog_if_stale(shared_dir, state_dir, *, now=None, url=CATALOG_UPDATE_URL):
    """Refresh a signed provider catalog only when an explicit caller asks.

    The caller owns the user gesture. This helper never runs from bridge start-up;
    it merely provides the seven-day cache and one-hour failure backoff used by a
    handshake that has explicitly set ``refreshCatalog``. Failed downloads and
    invalid envelopes never replace a previously verified catalog.
    """
    state = _load_refresh_state(state_dir)
    clock = int(time.time() if now is None else now)
    try:
        public_key = _trusted_public_key(shared_dir)
    except ProviderRegistryError:
        return _catalog_refresh_result("unavailable", state)
    if public_key is None:
        return _catalog_refresh_result("unavailable", state)

    installed_version, _adapters, _catalog_error = _load_installed_catalog(
        shared_dir, state_dir
    )
    has_valid_catalog = installed_version > 0
    last_success = state["lastSuccessfulCheckAt"]
    stale = not has_valid_catalog or not last_success \
        or clock - last_success >= CATALOG_REFRESH_INTERVAL_SECONDS
    if not stale:
        return _catalog_refresh_result("current", state)

    last_attempt = state["lastAttemptAt"]
    if state["lastResult"] == "failed" and last_attempt \
            and clock - last_attempt < CATALOG_REFRESH_RETRY_SECONDS:
        return _catalog_refresh_result(
            "backoff", state,
            next_retry_at=last_attempt + CATALOG_REFRESH_RETRY_SECONDS,
        )

    try:
        downloaded = download_catalog_envelope(shared_dir, state_dir, url=url)
    except ProviderRegistryError:
        failed_state = {
            **state,
            "lastAttemptAt": clock,
            "lastFailureAt": clock,
            "lastResult": "failed",
        }
        _save_refresh_state(state_dir, failed_state)
        return _catalog_refresh_result(
            "failed", failed_state,
            next_retry_at=clock + CATALOG_REFRESH_RETRY_SECONDS,
        )

    completed_state = {
        "schemaVersion": CATALOG_REFRESH_SCHEMA_VERSION,
        "lastSuccessfulCheckAt": clock,
        "lastAttemptAt": clock,
        "lastFailureAt": 0,
        "lastResult": "updated" if downloaded.get("changed") else "current",
    }
    _save_refresh_state(state_dir, completed_state)
    return _catalog_refresh_result(completed_state["lastResult"], completed_state)


def configure_api_interactive(state_dir):
    print("配置兼容 API。凭据只写入本机桥接状态目录，不会进入扩展存储。")
    display_name = input("显示名称: ").strip()
    print("协议：1 Anthropic Messages / 2 OpenAI Responses / 3 OpenAI Chat Completions")
    choice = input("请选择 [1/2/3]: ").strip()
    protocol = {
        "1": "anthropic-messages",
        "2": "openai-responses",
        "3": "openai-chat-completions",
    }.get(choice)
    if not protocol:
        raise ProviderRegistryError("API 协议选择无效")
    base_url = input("API Base URL: ").strip()
    model = input("模型 ID: ").strip()
    token = getpass.getpass("API Token（输入不显示）: ").strip()
    profile = save_api_profile(state_dir, {
        "displayName": display_name,
        "protocol": protocol,
        "baseUrl": base_url,
        "model": model,
        "token": token,
    })
    print(f"已保存：{profile['displayName']}（{profile['id']}）")


def remove_api_interactive(state_dir, provider_id):
    if not re.fullmatch(r"api:[a-f0-9-]{36}", provider_id or ""):
        raise ProviderRegistryError("API Provider ID 无效")
    existing = load_api_profiles(state_dir, include_secret=True)
    remaining = [profile for profile in existing if profile["id"] != provider_id]
    if len(remaining) == len(existing):
        raise ProviderRegistryError("未找到指定 API Provider")
    _atomic_json(api_config_path(state_dir), {"schemaVersion": 1, "profiles": remaining})
    print(f"已删除：{provider_id}")
