"use strict";

// background.js 是 popup 与 native messaging host 之间的安全边界：
// 所有从 popup 传入的 startTask 参数都先在这里做格式校验和清洗，
// 再转发给本地进程。这层校验此前完全没有测试覆盖（CI 只做 node --check
// 语法检查），本文件补上对校验/清洗逻辑与任务生命周期的覆盖。

const assert = require("assert");
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const SOURCE = fs.readFileSync(path.join(root, "background.js"), "utf8");
const PROTOCOL_VERSION = 5;

function flushMicrotasks() {
  return new Promise((resolve) => setImmediate(resolve));
}

function createChromeMock() {
  const state = {
    sentMessages: [],
    sessionSets: [],
    sessionGetResult: {},
    connectNativeCalls: [],
    ports: [],
    alarmCreates: [],
    alarmClears: [],
  };
  const chrome = {
    alarms: {
      create(name, info) { state.alarmCreates.push({ name, info }); },
      clear(name) { state.alarmClears.push(name); },
      onAlarm: { listener: null, addListener(fn) { chrome.alarms.onAlarm.listener = fn; } },
    },
    storage: {
      session: {
        get() { return Promise.resolve(state.sessionGetResult); },
        set(obj) { state.sessionSets.push(obj); return Promise.resolve(); },
      },
    },
    runtime: {
      id: "a".repeat(32),
      lastError: null,
      sendMessage(msg) { state.sentMessages.push(msg); return Promise.resolve(); },
      connectNative(name) {
        state.connectNativeCalls.push(name);
        const port = {
          messages: [],
          disconnected: false,
          onMessage: { listener: null, addListener(fn) { port.onMessage.listener = fn; } },
          onDisconnect: { listener: null, addListener(fn) { port.onDisconnect.listener = fn; } },
          postMessage(msg) { port.messages.push(msg); },
          disconnect() { port.disconnected = true; },
        };
        state.ports.push(port);
        return port;
      },
      onMessage: { listener: null, addListener(fn) { chrome.runtime.onMessage.listener = fn; } },
    },
  };
  return { chrome, state };
}

function loadBackground() {
  const { chrome, state } = createChromeMock();
  const timers = [];
  const context = {
    chrome,
    console,
    setTimeout(fn, delay) {
      timers.push({ fn, delay, cleared: false });
      return timers.length - 1;
    },
    clearTimeout(index) {
      if (timers[index]) timers[index].cleared = true;
    },
  };
  vm.createContext(context);
  vm.runInContext(SOURCE, context, { filename: "background.js" });
  return { chrome, state, timers };
}

function dispatch(chrome, msg) {
  const request = msg.action === "startTask"
    ? {
        providerId: "claude",
        providerCatalogDigest: `sha256:${"b".repeat(64)}`,
        ...msg,
      }
    : msg;
  let response;
  const async_ = chrome.runtime.onMessage.listener(request, {}, (res) => { response = res; });
  // sendResponse 的对象来自 vm 沙箱的独立 realm，与本文件的内建对象原型不同，
  // deepStrictEqual 会因原型不同而判定“不相等”；先经 JSON 往返剥离 realm 差异。
  return { async_, getResponse: () => JSON.parse(JSON.stringify(response)) };
}

const VALID_TOKEN = "a".repeat(32);

(async () => {
  // ping 同步响应
  {
    const { chrome } = loadBackground();
    const { async_, getResponse } = dispatch(chrome, { action: "ping" });
    assert.strictEqual(async_, false, "ping should respond synchronously");
    assert.deepStrictEqual(getResponse(), { ok: true });
  }

  // getTaskStatus 异步读取 session 存储
  {
    const { chrome, state } = loadBackground();
    state.sessionGetResult = { taskStatus: { running: true, tool: "git" } };
    const { async_, getResponse } = dispatch(chrome, { action: "getTaskStatus" });
    assert.strictEqual(async_, true, "getTaskStatus should be handled asynchronously");
    await flushMicrotasks();
    assert.deepStrictEqual(getResponse(), { running: true, tool: "git" });
  }

  // Optional companion handshake is a one-shot native request and exposes no task slot.
  {
    const { chrome, state } = loadBackground();
    const handshake = dispatch(chrome, { action: "companionHandshake", protocolVersion: PROTOCOL_VERSION, schemaVersion: 2 });
    assert.strictEqual(handshake.async_, true);
    assert.deepStrictEqual(JSON.parse(JSON.stringify(state.ports[0].messages[0])), {
      action: "handshake", protocolVersion: PROTOCOL_VERSION, schemaVersion: 2, extensionId: "a".repeat(32), refreshCatalog: false,
    });
    state.ports[0].onMessage.listener({ ok: true, protocolVersion: PROTOCOL_VERSION, schemaVersion: 2 });
    await flushMicrotasks();
    assert.strictEqual(handshake.getResponse().ok, true);
  }
  // A direct Detect click explicitly permits a one-shot signed catalog refresh.
  {
    const { chrome, state } = loadBackground();
    const handshake = dispatch(chrome, {
      action: "companionHandshake", protocolVersion: PROTOCOL_VERSION, schemaVersion: 2, refreshCatalog: true,
    });
    assert.strictEqual(state.ports[0].messages[0].refreshCatalog, true);
    state.ports[0].onMessage.listener({ ok: true, protocolVersion: PROTOCOL_VERSION, schemaVersion: 2 });
    await flushMicrotasks();
    assert.strictEqual(handshake.getResponse().ok, true);
  }
  // A v4 bridge reports its supported protocol, then receives one automatic
  // retry. It remains usable for existing maintenance instead of forcing an
  // unrelated component upgrade during detection.
  {
    const { chrome, state } = loadBackground();
    const handshake = dispatch(chrome, { action: "companionHandshake", protocolVersion: PROTOCOL_VERSION, schemaVersion: 2 });
    state.ports[0].onMessage.listener({
      ok: false, error: "桥接协议不兼容，需要 v4/Schema 2", protocolVersion: 4, schemaVersion: 2,
    });
    await flushMicrotasks();
    assert.strictEqual(state.ports.length, 2, "a supported legacy bridge must receive one compatibility retry");
    assert.strictEqual(state.ports[1].messages[0].protocolVersion, 4);
    state.ports[1].onMessage.listener({
      ok: true, protocolVersion: 4, schemaVersion: 2, bridgeVersion: "1.7.5",
      providers: [{ id: "claude", displayName: "Claude Code", ready: true }],
      providerCatalogDigest: `sha256:${"c".repeat(64)}`,
      capabilities: { dataMaintenance: true, supportedActions: ["add_tool"] },
    });
    await flushMicrotasks();
    const response = handshake.getResponse();
    assert.strictEqual(response.ok, true);
    assert.strictEqual(response.effectiveProtocolVersion, 4);
    assert.strictEqual(response.legacyCompatibility, true);
  }
  // v3 does not expose a Provider catalog digest, but it still supports the
  // four original CLI providers and maintenance actions.
  {
    const { chrome, state } = loadBackground();
    const handshake = dispatch(chrome, { action: "companionHandshake", protocolVersion: PROTOCOL_VERSION, schemaVersion: 2 });
    state.ports[0].onMessage.listener({
      ok: false, error: "桥接协议不兼容，需要 v3/Schema 2", protocolVersion: 3, schemaVersion: 2,
    });
    await flushMicrotasks();
    assert.strictEqual(state.ports[1].messages[0].protocolVersion, 3);
    state.ports[1].onMessage.listener({
      ok: true, protocolVersion: 3, schemaVersion: 2, bridgeVersion: "1.7.2",
      providers: [{ id: "claude", displayName: "Claude Code", ready: true }],
      capabilities: { dataMaintenance: true, supportedActions: ["add_tool", "preview_update"] },
    });
    await flushMicrotasks();
    const response = handshake.getResponse();
    assert.strictEqual(response.ok, true);
    assert.strictEqual(response.effectiveProtocolVersion, 3);
    assert.strictEqual(response.providerCatalogDigest, undefined);
  }
  // A reachable v1/v2 host reports handshake as unknown. Treat it as an
  // upgrade problem, not as a missing AI CLI or an absent native host.
  {
    const { chrome, state } = loadBackground();
    const handshake = dispatch(chrome, { action: "companionHandshake", protocolVersion: PROTOCOL_VERSION, schemaVersion: 2 });
    state.ports[0].onMessage.listener({ ok: false, error: "未知的 action: handshake" });
    await flushMicrotasks();
    assert.strictEqual(handshake.getResponse().code, "bridge_outdated");
    assert(/不支持当前协议/.test(handshake.getResponse().error));
  }

  assert(SOURCE.includes("HANDSHAKE_TIMEOUT_MS = 35 * 1000"), "handshakes must time out after 35 seconds");
  assert(SOURCE.includes("native_handshake_timeout"), "handshake timeouts must remain distinguishable from a missing bridge");
  {
    const { chrome, state, timers } = loadBackground();
    const handshake = dispatch(chrome, { action: "companionHandshake", protocolVersion: PROTOCOL_VERSION, schemaVersion: 2 });
    assert.strictEqual(timers.length, 1, "a handshake must schedule a timeout");
    assert.strictEqual(timers[0].delay, 35 * 1000);
    timers[0].fn();
    await flushMicrotasks();
    assert.strictEqual(handshake.getResponse().code, "native_handshake_timeout");
    assert.strictEqual(state.ports[0].disconnected, true, "timed-out handshakes must disconnect their native port");
  }
  {
    const { chrome, state } = loadBackground();
    const handshake = dispatch(chrome, { action: "companionHandshake", protocolVersion: PROTOCOL_VERSION, schemaVersion: 1 });
    assert.strictEqual(handshake.async_, false);
    assert.strictEqual(handshake.getResponse().ok, false);
    assert.strictEqual(state.connectNativeCalls.length, 0, "an incompatible schema must not reach the native host");
  }

  // Provider catalog updates/imports are explicit one-shot bridge operations.
  {
    const { chrome, state } = loadBackground();
    const update = dispatch(chrome, { action: "companionProviderCatalogUpdate" });
    assert.strictEqual(update.async_, true);
    assert.deepStrictEqual(JSON.parse(JSON.stringify(state.ports[0].messages[0])), {
      action: "update_provider_catalog", protocolVersion: PROTOCOL_VERSION,
    });
    state.ports[0].onMessage.listener({ ok: true, catalogVersion: 2 });
    await flushMicrotasks();
    assert.strictEqual(update.getResponse().catalogVersion, 2);
  }
  {
    const { chrome, state } = loadBackground();
    const invalid = dispatch(chrome, { action: "companionProviderCatalogImport", envelope: [] });
    assert.strictEqual(invalid.async_, false);
    assert.strictEqual(invalid.getResponse().ok, false);
    assert.strictEqual(state.connectNativeCalls.length, 0);
  }
  {
    const { chrome, state } = loadBackground();
    const envelope = { payload: { adapters: [] }, sha256: "sha256:test", signature: "test" };
    const imported = dispatch(chrome, { action: "companionProviderCatalogImport", envelope });
    assert.strictEqual(imported.async_, true);
    assert.deepStrictEqual(JSON.parse(JSON.stringify(state.ports[0].messages[0])), {
      action: "import_provider_catalog", protocolVersion: PROTOCOL_VERSION, envelope,
    });
  }
  // Compatible API setup is a one-shot native request. The credential is
  // forwarded only to the bridge and is never persisted by the extension.
  {
    const { chrome, state } = loadBackground();
    const config = {
      displayName: "Test API", protocol: "openai-responses",
      baseUrl: "https://api.example.test", model: "test-model", token: "test-token",
    };
    const configured = dispatch(chrome, { action: "companionProviderApiConfigure", config });
    assert.strictEqual(configured.async_, true);
    assert.deepStrictEqual(JSON.parse(JSON.stringify(state.ports[0].messages[0])), {
      action: "configure_api", protocolVersion: PROTOCOL_VERSION, config,
    });
    state.ports[0].onMessage.listener({ ok: true, provider: { id: "api:00000000-0000-4000-8000-000000000000" } });
    await flushMicrotasks();
    assert.strictEqual(configured.getResponse().ok, true);
  }
  {
    const { chrome, state } = loadBackground();
    const invalid = dispatch(chrome, { action: "companionProviderApiConfigure", config: { token: "only-token" } });
    assert.strictEqual(invalid.async_, false);
    assert.strictEqual(invalid.getResponse().ok, false);
    assert.strictEqual(state.connectNativeCalls.length, 0);
  }

  // A user-configured provider can only carry declarative fields to the host.
  {
    const { chrome, state } = loadBackground();
    const config = {
      displayName: "My Local AI", executable: "my-local-ai", driver: "stdin-json",
      argv: ["--json", "--read-only"], promptMode: "stdin", outputParser: "json",
      versionArgs: ["--version"], loginCommand: "my-local-ai login", readOnlyConfirmed: true,
    };
    const saved = dispatch(chrome, { action: "companionCustomProviderSave", config });
    assert.strictEqual(saved.async_, true);
    assert.deepStrictEqual(JSON.parse(JSON.stringify(state.ports[0].messages[0])), {
      action: "save_custom_provider", protocolVersion: PROTOCOL_VERSION, config,
    });
    state.ports[0].onMessage.listener({ ok: true, provider: { id: "custom:00000000-0000-4000-8000-000000000000" } });
    await flushMicrotasks();
    assert.strictEqual(saved.getResponse().ok, true);
  }
  {
    const { chrome, state } = loadBackground();
    const invalid = dispatch(chrome, { action: "companionCustomProviderSave", config: {
      displayName: "Unsafe", executable: "/tmp/unsafe", driver: "stdin-json",
      argv: [], promptMode: "stdin", outputParser: "json", versionArgs: ["--version"],
      loginCommand: "", readOnlyConfirmed: false,
    } });
    assert.strictEqual(invalid.async_, false);
    assert.strictEqual(invalid.getResponse().ok, false);
    assert.strictEqual(state.connectNativeCalls.length, 0);
  }
  {
    const { chrome, state } = loadBackground();
    const providerId = "custom:00000000-0000-4000-8000-000000000000";
    const deleted = dispatch(chrome, { action: "companionCustomProviderDelete", providerId });
    assert.strictEqual(deleted.async_, true);
    assert.deepStrictEqual(JSON.parse(JSON.stringify(state.ports[0].messages[0])), {
      action: "delete_custom_provider", protocolVersion: PROTOCOL_VERSION, providerId,
    });
  }

  // One-click generic providers can only resolve a bare PATH filename and
  // require an explicit enable confirmation before any configuration is saved.
  {
    const { chrome, state } = loadBackground();
    const resolved = dispatch(chrome, {
      action: "companionGenericProviderResolve", displayName: "My AI", executable: "my-ai",
    });
    assert.strictEqual(resolved.async_, true);
    // Plain discovery must never ask the bridge to run a model task.
    assert.deepStrictEqual(JSON.parse(JSON.stringify(state.ports[0].messages[0])), {
      action: "resolve_generic_provider", protocolVersion: PROTOCOL_VERSION,
      displayName: "My AI", executable: "my-ai", probe: false,
    });
  }
  {
    const { chrome, state } = loadBackground();
    const probed = dispatch(chrome, {
      action: "companionGenericProviderResolve", displayName: "My AI", executable: "my-ai",
      probe: true,
    });
    assert.strictEqual(probed.async_, true);
    assert.deepStrictEqual(JSON.parse(JSON.stringify(state.ports[0].messages[0])), {
      action: "resolve_generic_provider", protocolVersion: PROTOCOL_VERSION,
      displayName: "My AI", executable: "my-ai", probe: true,
    });
  }
  {
    const { chrome, state } = loadBackground();
    const enabled = dispatch(chrome, {
      action: "companionGenericProviderEnable", displayName: "My AI", executable: "my-ai",
      genericProfileId: "prompt-flag-json", genericConfirmed: true,
    });
    assert.strictEqual(enabled.async_, true);
    assert.deepStrictEqual(JSON.parse(JSON.stringify(state.ports[0].messages[0])), {
      action: "enable_generic_provider", protocolVersion: PROTOCOL_VERSION,
      displayName: "My AI", executable: "my-ai",
      genericProfileId: "prompt-flag-json", genericConfirmed: true,
    });
  }
  // Neither an executable path nor an unregistered template ID may cross the
  // extension/native boundary.
  for (const invalid of [
    { displayName: "My AI", executable: "/tmp/my-ai", genericProfileId: "stdin-json" },
    { displayName: "My AI", executable: "my-ai", genericProfileId: "" },
    { displayName: "My AI", executable: "my-ai", genericProfileId: "stdin-json; rm -rf /" },
    { displayName: "My AI", executable: "my-ai" },
  ]) {
    const { chrome, state } = loadBackground();
    const rejected = dispatch(chrome, {
      action: "companionGenericProviderEnable", ...invalid, genericConfirmed: true,
    });
    assert.strictEqual(rejected.async_, false);
    assert.strictEqual(rejected.getResponse().ok, false);
    assert.strictEqual(state.connectNativeCalls.length, 0);
  }

  // Re-detecting one environment forwards only a validated provider ID and
  // never carries a catalog digest or a task payload.
  {
    const { chrome, state } = loadBackground();
    const refreshed = dispatch(chrome, {
      action: "companionProviderRefresh", providerId: "claude",
    });
    assert.strictEqual(refreshed.async_, true);
    assert.deepStrictEqual(JSON.parse(JSON.stringify(state.ports[0].messages[0])), {
      action: "refresh_provider", protocolVersion: PROTOCOL_VERSION, providerId: "claude",
    });
  }
  for (const providerId of ["", "../etc", "claude; rm -rf /", "CLAUDE", undefined]) {
    const { chrome, state } = loadBackground();
    const rejected = dispatch(chrome, { action: "companionProviderRefresh", providerId });
    assert.strictEqual(rejected.async_, false);
    assert.strictEqual(rejected.getResponse().ok, false);
    assert.strictEqual(state.connectNativeCalls.length, 0);
  }

  // A common-provider install can only forward a fixed catalog ID plus an
  // explicit confirmation. No executable name or package arguments cross the
  // extension/native boundary.
  {
    const { chrome, state } = loadBackground();
    const prepared = dispatch(chrome, {
      action: "companionCommonProviderInstallPrepare", commonProviderId: "qwen-code",
    });
    assert.strictEqual(prepared.async_, true);
    assert.deepStrictEqual(JSON.parse(JSON.stringify(state.ports[0].messages[0])), {
      action: "prepare_common_provider_install", protocolVersion: PROTOCOL_VERSION,
      commonProviderId: "qwen-code",
    });
  }
  {
    const { chrome, state } = loadBackground();
    const install = dispatch(chrome, {
      action: "companionCommonProviderInstall", commonProviderId: "qwen-code", confirmed: true,
    });
    assert.strictEqual(install.async_, true);
    assert.deepStrictEqual(JSON.parse(JSON.stringify(state.ports[0].messages[0])), {
      action: "install_common_provider", protocolVersion: PROTOCOL_VERSION,
      commonProviderId: "qwen-code", confirmed: true,
    });
  }
  {
    const { chrome, state } = loadBackground();
    const rejected = dispatch(chrome, {
      action: "companionCommonProviderInstall", commonProviderId: "qwen-code;rm", confirmed: true,
    });
    assert.strictEqual(rejected.async_, false);
    assert.strictEqual(rejected.getResponse().ok, false);
    assert.strictEqual(state.connectNativeCalls.length, 0);
  }

  // getTaskStatus 在没有存储值时回退为 running:false
  {
    const { chrome } = loadBackground();
    const { getResponse } = dispatch(chrome, { action: "getTaskStatus" });
    await flushMicrotasks();
    assert.deepStrictEqual(getResponse(), { running: false });
  }

  // startTask 参数校验：拒绝未知 mode
  {
    const { chrome, state } = loadBackground();
    const { async_, getResponse } = dispatch(chrome, {
      action: "startTask", mode: "bogus", tool: "git", display_name: "Git",
    });
    assert.strictEqual(async_, false);
    const invalidResponse = getResponse();
    assert.strictEqual(invalidResponse.ok, false);
    assert(/任务参数无效/.test(invalidResponse.error), "invalid params should be named as the failure reason");
    assert(/重新打开|重试/.test(invalidResponse.error), "the error should tell the user what to do next");
    assert.strictEqual(state.connectNativeCalls.length, 0, "invalid mode must not reach the native host");
  }
  {
    const { chrome, state } = loadBackground();
    const { getResponse } = dispatch(chrome, {
      action: "startTask", mode: "add_tool", tool: "git", display_name: "Git",
      providerId: "custom:00000000-0000-4000-8000-000000000000",
    });
    assert.strictEqual(getResponse().ok, true);
    assert.strictEqual(state.ports[0].messages[0].providerId, "custom:00000000-0000-4000-8000-000000000000");
  }

  // v4 不再维护四项白名单：动态 ID 可转发，格式非法的 ID 仍被拒绝。
  {
    const { chrome, state } = loadBackground();
    const { getResponse } = dispatch(chrome, {
      action: "startTask", mode: "add_tool", tool: "git", display_name: "Git", providerId: "catalog:fifth",
    });
    assert.strictEqual(getResponse().ok, true);
    assert.strictEqual(state.ports[0].messages[0].providerId, "catalog:fifth");
  }
  {
    const { chrome, state } = loadBackground();
    const { getResponse } = dispatch(chrome, {
      action: "startTask", mode: "add_tool", tool: "git", display_name: "Git", providerId: "UNKNOWN!",
    });
    assert.strictEqual(getResponse().ok, false);
    assert.strictEqual(state.connectNativeCalls.length, 0);
  }

  // startTask 参数校验：拒绝非法 tool id（大写/非法字符）
  {
    const { chrome, state } = loadBackground();
    const { getResponse } = dispatch(chrome, {
      action: "startTask", mode: "add_tool", tool: "Git", display_name: "Git",
    });
    assert.strictEqual(getResponse().ok, false);
    assert.strictEqual(state.connectNativeCalls.length, 0);
  }

  // startTask 参数校验：拒绝过长 tool id
  {
    const { chrome } = loadBackground();
    const { getResponse } = dispatch(chrome, {
      action: "startTask", mode: "add_tool", tool: "a".repeat(65), display_name: "Git",
    });
    assert.strictEqual(getResponse().ok, false, "tool id over 64 chars must be rejected");
  }

  // startTask 参数校验：拒绝空白 display_name
  {
    const { chrome } = loadBackground();
    const { getResponse } = dispatch(chrome, {
      action: "startTask", mode: "add_tool", tool: "git", display_name: "   ",
    });
    assert.strictEqual(getResponse().ok, false, "whitespace-only display_name must be rejected");
  }

  // startTask 参数校验：token 模式要求 32 位十六进制 token
  {
    const { chrome, state } = loadBackground();
    const { getResponse } = dispatch(chrome, {
      action: "startTask", mode: "apply_update", token: "not-a-token",
    });
    assert.strictEqual(getResponse().ok, false);
    assert.strictEqual(state.connectNativeCalls.length, 0);
  }
  {
    const { chrome, state } = loadBackground();
    const { getResponse } = dispatch(chrome, {
      action: "startTask", mode: "apply_update", token: VALID_TOKEN, confirm_risk: true,
    });
    assert.strictEqual(getResponse().ok, true, "valid 32-hex token should be accepted");
    assert.strictEqual(state.connectNativeCalls.length, 1);
  }

  // 1.7.3 不恢复 AI 再推荐，旧 suggest_tools 协议请求必须被拒绝。
  {
    const { chrome } = loadBackground();
    assert.strictEqual(
      dispatch(chrome, { action: "startTask", mode: "suggest_tools", platform: "android", count: 5 }).getResponse().ok,
      false,
      "unknown platform must be rejected"
    );
  }
  {
    const { chrome } = loadBackground();
    assert.strictEqual(
      dispatch(chrome, { action: "startTask", mode: "suggest_tools", platform: "mac", count: 13 }).getResponse().ok,
      false,
      "count above the 12 cap must be rejected"
    );
  }
  {
    const { chrome } = loadBackground();
    assert.strictEqual(
      dispatch(chrome, { action: "startTask", mode: "suggest_tools", platform: "mac", count: 0 }).getResponse().ok,
      false,
      "count below 1 must be rejected"
    );
  }
  {
    const { chrome, state } = loadBackground();
    const { getResponse } = dispatch(chrome, { action: "startTask", mode: "suggest_tools", platform: "mac", count: 5 });
    assert.strictEqual(getResponse().ok, false);
    assert.strictEqual(state.connectNativeCalls.length, 0);
  }

  // 与维护动作无关的旧推荐上下文不得继续转发。
  {
    const { chrome, state } = loadBackground();
    const { getResponse } = dispatch(chrome, {
      action: "startTask",
      mode: "add_tool",
      tool: "git",
      display_name: "Git",
      exclude: ["good-tool", "Bad_ID", 42, "another-good"],
      enabled: [
        { id: "good-tool", name: "Good Tool" },
        { id: "BadID", name: "x" },
        { id: "ok-tool", name: "" },
        { id: "ok2", name: "  Trimmed  " },
        { id: "too-long-name", name: "x".repeat(81) },
      ],
      collected: [{ id: "collected-1", name: "Collected" }],
    });
    assert.strictEqual(getResponse().ok, true);
    const posted = JSON.parse(JSON.stringify(state.ports[0].messages[0]));
    assert.strictEqual(posted.exclude, undefined);
    assert.strictEqual(posted.enabled, undefined);
    assert.strictEqual(posted.collected, undefined);
    assert.strictEqual(posted.providerId, "claude");
    assert.strictEqual(posted.protocolVersion, PROTOCOL_VERSION);
    assert.strictEqual(posted.providerCatalogDigest, `sha256:${"b".repeat(64)}`);
  }

  // v3 maintenance intentionally omits the catalog digest because the older
  // host has no signed registry; v4 and v5 retain the binding.
  {
    const { chrome, state } = loadBackground();
    const { getResponse } = dispatch(chrome, {
      action: "startTask", mode: "add_tool", tool: "git", display_name: "Git",
      bridgeProtocolVersion: 3, providerCatalogDigest: undefined,
    });
    assert.strictEqual(getResponse().ok, true);
    const posted = JSON.parse(JSON.stringify(state.ports[0].messages[0]));
    assert.strictEqual(posted.protocolVersion, 3);
    assert.strictEqual(posted.providerCatalogDigest, undefined);
  }
  {
    const { chrome, state } = loadBackground();
    const { getResponse } = dispatch(chrome, {
      action: "startTask", mode: "add_tool", tool: "git", display_name: "Git",
      bridgeProtocolVersion: 4,
    });
    assert.strictEqual(getResponse().ok, true);
    const posted = JSON.parse(JSON.stringify(state.ports[0].messages[0]));
    assert.strictEqual(posted.protocolVersion, 4);
    assert.strictEqual(posted.providerCatalogDigest, `sha256:${"b".repeat(64)}`);
  }
  {
    const { chrome, state } = loadBackground();
    const rejected = dispatch(chrome, {
      action: "startTask", mode: "add_tool", tool: "git", display_name: "Git",
      bridgeProtocolVersion: 3, providerId: "qwen", providerCatalogDigest: undefined,
    });
    assert.strictEqual(rejected.getResponse().ok, false, "v3 must not accept providers outside its four built-ins");
    assert.strictEqual(state.connectNativeCalls.length, 0);
  }
  {
    const { chrome, state } = loadBackground();
    const rejected = dispatch(chrome, {
      action: "startTask", mode: "add_tool", tool: "git", display_name: "Git",
      bridgeProtocolVersion: 4, providerCatalogDigest: undefined,
    });
    assert.strictEqual(rejected.getResponse().ok, false, "v4 must keep the Provider catalog digest requirement");
    assert.strictEqual(state.connectNativeCalls.length, 0);
  }

  // startTask 把非布尔值的 confirm_risk/prefer_web/deep_check 收窄为 false
  {
    const { chrome, state } = loadBackground();
    dispatch(chrome, {
      action: "startTask", mode: "add_tool", tool: "git", display_name: "Git",
      confirm_risk: "true", prefer_web: 1, deep_check: undefined,
    });
    const posted = state.ports[0].messages[0];
    assert.strictEqual(posted.confirm_risk, false, "non-boolean confirm_risk must not be coerced to true");
    assert.strictEqual(posted.prefer_web, false);
    assert.strictEqual(posted.deep_check, false);
  }

  // Store maintenance forwards only JSON context and the explicit channel.
  {
    const { chrome, state } = loadBackground();
    dispatch(chrome, {
      action: "startTask", mode: "preview_update", tool: "git", display_name: "Git", channel: "store",
      current_dataset: { meta: { id: "git" }, items: [] },
      official_inventory: { toolId: "git", entries: [] },
      scenario_review: { toolId: "git", examples: [] },
      official_adapter: { id: "git-fixed", kind: "fixed-official-component-union", version: 1 },
      source_registry: [{ id: "git-docs", url: "https://git-scm.com/docs" }],
      base_content_hash: `sha256:${"a".repeat(64)}`,
    });
    const posted = state.ports[0].messages[0];
    assert.strictEqual(posted.channel, "store");
    assert.strictEqual(posted.current_dataset.meta.id, "git");
    assert.strictEqual(posted.official_adapter.id, "git-fixed");
    assert.deepStrictEqual(JSON.parse(JSON.stringify(posted.source_registry)), [
      { id: "git-docs", url: "https://git-scm.com/docs" },
    ]);
    assert.strictEqual(posted.base_content_hash, `sha256:${"a".repeat(64)}`);
  }

  // startTask 并发守卫：任务进行中拒绝第二个请求，完成后恢复可用
  {
    const { chrome, state } = loadBackground();
    const first = dispatch(chrome, { action: "startTask", mode: "add_tool", tool: "git", display_name: "Git" });
    assert.strictEqual(first.getResponse().ok, true);
    assert.strictEqual(state.connectNativeCalls.length, 1);

    const second = dispatch(chrome, { action: "startTask", mode: "add_tool", tool: "git", display_name: "Git" });
    assert.deepStrictEqual(second.getResponse(), { ok: false, error: "已有任务正在运行，请等待完成后再试。" });
    assert.strictEqual(state.connectNativeCalls.length, 1, "a running task must not open a second native connection");

    const port = state.ports[0];
    port.onMessage.listener({ ok: true, output: "done" });
    assert.strictEqual(port.disconnected, true, "completion should disconnect the native port");
    assert.strictEqual(
      state.sentMessages.some((m) => m.action === "taskComplete" && m.response.ok === true),
      true,
      "completion should broadcast taskComplete"
    );

    const third = dispatch(chrome, { action: "startTask", mode: "add_tool", tool: "git", display_name: "Git" });
    assert.strictEqual(third.getResponse().ok, true, "task slot should be free again after completion");
    assert.strictEqual(state.connectNativeCalls.length, 2);
  }

  // startTask 断开连接（未收到 onMessage）走错误分支，并清空 taskActive
  {
    const { chrome, state } = loadBackground();
    dispatch(chrome, { action: "startTask", mode: "add_tool", tool: "git", display_name: "Git" });
    chrome.runtime.lastError = { message: "native host disconnected" };
    state.ports[0].onDisconnect.listener();
    assert.strictEqual(
      state.sentMessages.some((m) => m.action === "taskComplete" && m.response.error === "native host disconnected"),
      true,
      "disconnect without a prior message should broadcast the lastError reason"
    );
    chrome.runtime.lastError = null;

    const sentBefore = state.sentMessages.length;
    state.ports[0].onDisconnect.listener();
    assert.strictEqual(state.sentMessages.length, sentBefore, "a second disconnect after completion must be a no-op");

    const retry = dispatch(chrome, { action: "startTask", mode: "add_tool", tool: "git", display_name: "Git" });
    assert.strictEqual(retry.getResponse().ok, true, "task slot should be free again after disconnect handling");
  }

  // 看门狗：startTask 创建 taskTimeout alarm，任务完成时清除
  {
    const { chrome, state } = loadBackground();
    dispatch(chrome, { action: "startTask", mode: "add_tool", tool: "git", display_name: "Git" });
    assert(state.alarmCreates.some((a) => a.name === "taskTimeout"), "startTask should arm the watchdog alarm");
    state.ports[0].onMessage.listener({ ok: true, output: "done" });
    assert(state.alarmClears.includes("taskTimeout"), "task completion should clear the watchdog alarm");
  }

  // 看门狗触发：Native 进程既不回消息也不断开时，任务被超时终止、槽位释放
  {
    const { chrome, state } = loadBackground();
    dispatch(chrome, { action: "startTask", mode: "add_tool", tool: "git", display_name: "Git" });
    chrome.alarms.onAlarm.listener({ name: "taskTimeout" });
    await flushMicrotasks();
    assert(
      state.sentMessages.some((m) => m.action === "taskComplete" && m.response.ok === false && /无响应/.test(m.response.error)),
      "watchdog should broadcast a timeout failure"
    );
    assert.strictEqual(state.ports[0].disconnected, true, "watchdog should disconnect the hung native port");
    assert(
      state.sessionSets.some((s) => s.taskStatus && s.taskStatus.running === false && s.taskStatus.result?.ok === false),
      "watchdog should persist the failed status to session storage"
    );
    const retry = dispatch(chrome, { action: "startTask", mode: "add_tool", tool: "git", display_name: "Git" });
    assert.strictEqual(retry.getResponse().ok, true, "task slot should be free again after a watchdog timeout");
  }

  // 看门狗冷启动路径：SW 被回收后 taskActive 丢失，但 session 记录任务仍在运行时也要收尾
  {
    const { chrome, state } = loadBackground();
    state.sessionGetResult = { taskStatus: { running: true, mode: "add_tool", startedAt: 1 } };
    chrome.alarms.onAlarm.listener({ name: "taskTimeout" });
    await flushMicrotasks();
    assert(
      state.sentMessages.some((m) => m.action === "taskComplete" && m.response.ok === false),
      "cold-start watchdog should still fail the orphaned task"
    );
    assert(
      state.sessionSets.some((s) => s.taskStatus && s.taskStatus.running === false),
      "cold-start watchdog should persist running:false"
    );
  }

  // cancelTask：取消活动任务——广播取消结果、断开端口、清 alarm、释放槽位
  {
    const { chrome, state } = loadBackground();
    dispatch(chrome, { action: "startTask", mode: "add_tool", tool: "git", display_name: "Git" });
    const cancel = dispatch(chrome, { action: "cancelTask" });
    assert.strictEqual(cancel.async_, true, "cancelTask should be handled asynchronously");
    await flushMicrotasks();
    assert.deepStrictEqual(cancel.getResponse(), { ok: true, cancelled: true }, "cancelling an active task should ack");
    assert(
      state.sentMessages.some((m) => m.action === "taskComplete" && m.response.cancelled === true && m.response.ok === false),
      "cancellation should broadcast a cancelled taskComplete"
    );
    assert.strictEqual(state.ports[0].disconnected, true, "cancellation should disconnect the native port");
    assert(state.alarmClears.includes("taskTimeout"), "cancellation should clear the watchdog alarm");
    assert(
      state.sessionSets.some((s) => s.taskStatus && s.taskStatus.running === false && s.taskStatus.result?.cancelled === true),
      "cancellation should persist the cancelled status"
    );
    const retry = dispatch(chrome, { action: "startTask", mode: "add_tool", tool: "git", display_name: "Git" });
    assert.strictEqual(retry.getResponse().ok, true, "task slot should be free again after cancellation");
    const sentAfterCancel = state.sentMessages.length;
    state.ports[0].onMessage.listener({ ok: true, output: "stale completion" });
    assert.strictEqual(state.ports[1].disconnected, false, "a cancelled task's late response must not disconnect the replacement task");
    assert.strictEqual(state.sentMessages.length, sentAfterCancel, "a cancelled task's late response must not broadcast completion");
    state.ports[1].onMessage.listener({ ok: true, output: "replacement complete" });
  }

  // cancelTask：无任务时返回明确提示，不广播
  {
    const { chrome, state } = loadBackground();
    const cancel = dispatch(chrome, { action: "cancelTask" });
    await flushMicrotasks();
    assert.strictEqual(cancel.getResponse().ok, false, "cancel with no task should not ack");
    assert(/没有正在运行的任务/.test(cancel.getResponse().error), "cancel with no task should explain why");
    assert.strictEqual(state.sentMessages.length, 0, "cancel with no task must not broadcast");
  }

  // cancelTask 冷启动路径：SW 被回收后 taskActive 丢失，但 session 记录 running 时也能取消
  {
    const { chrome, state } = loadBackground();
    state.sessionGetResult = { taskStatus: { running: true, mode: "add_tool", startedAt: 1 } };
    const cancel = dispatch(chrome, { action: "cancelTask" });
    await flushMicrotasks();
    assert.deepStrictEqual(cancel.getResponse(), { ok: true, cancelled: true }, "cold-start cancel should ack");
    assert(
      state.sentMessages.some((m) => m.action === "taskComplete" && m.response.cancelled === true),
      "cold-start cancel should broadcast the cancelled result"
    );
  }

  // 看门狗误触发防护：任务已完成后 alarm 再触发必须是 no-op
  {
    const { chrome, state } = loadBackground();
    dispatch(chrome, { action: "startTask", mode: "add_tool", tool: "git", display_name: "Git" });
    state.ports[0].onMessage.listener({ ok: true, output: "done" });
    state.sessionGetResult = { taskStatus: { running: false } };
    const sentBefore = state.sentMessages.length;
    chrome.alarms.onAlarm.listener({ name: "taskTimeout" });
    await flushMicrotasks();
    assert.strictEqual(state.sentMessages.length, sentBefore, "a stale watchdog alarm must not broadcast anything");
  }

  console.log("Background message handler tests passed.");
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
