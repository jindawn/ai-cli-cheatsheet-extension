'use strict';

if (typeof importScripts === 'function') importScripts('dynamic-data.js');

// background.js — service worker bridge between popup and native messaging host.
// Keeps the native process alive even when the popup is closed.

const NATIVE_HOST = 'com.aicli.cheatsheet_updater';
const PROTOCOL_VERSION = 5;
const MIN_COMPATIBLE_PROTOCOL_VERSION = 3;
const DATA_SCHEMA_VERSION = 2;
const PROVIDER_ID_RE = /^(?:[a-z][a-z0-9-]{0,63}|catalog:[a-z0-9][a-z0-9-]{0,63}|api:[a-f0-9-]{36}|custom:[a-f0-9-]{36})$/;
const CUSTOM_PROVIDER_ID_RE = /^custom:[a-f0-9-]{36}$/;
const CATALOG_DIGEST_RE = /^sha256:[a-f0-9]{64}$/;

// Watchdog: the native host has its own 900s CLI timeout; 20 minutes leaves
// headroom for that plus retries. Uses alarms (not setTimeout) so the deadline
// survives service-worker recycling.
const TASK_TIMEOUT_MINUTES = 20;
const TASK_TIMEOUT_ERROR = `任务超过 ${TASK_TIMEOUT_MINUTES} 分钟无响应，已自动终止。`;
const HANDSHAKE_TIMEOUT_MS = 35 * 1000;
// The bridge probes up to five invocation templates at 60s each before it
// reports a tool incompatible, so this watchdog must outlast that worst case.
const GENERIC_PROBE_TIMEOUT_MS = 6 * 60 * 1000;
const MAX_APP_MESSAGE_BYTES = 16 * 1024 * 1024;
const DYNAMIC_DATA = globalThis.CHEATSHEET_DYNAMIC_DATA;

let nativePort = null;
let taskActive = false;
let taskSequence = 0;
let activeTaskId = null;

// Safety-net keepalive: an alarm fires every minute while a task is running.
// An open connectNative Port already prevents SW termination in most Chrome versions,
// but the alarm guards against edge cases and future Chrome changes.
chrome.alarms?.onAlarm?.addListener((alarm) => {
  if (alarm.name === 'keepalive') {
    chrome.storage.session.get('_ka').catch(() => {});
    return;
  }
  if (alarm.name === 'taskTimeout') {
    // taskActive lives in the SW instance; after a SW restart it is false even
    // though the task is still recorded in session storage, so consult both.
    const wasActive = taskActive;
    chrome.storage.session.get(['taskStatus'])
      .then((res) => handleTaskTimeout(wasActive, res.taskStatus))
      .catch(() => handleTaskTimeout(wasActive, null));
  }
});

// Shared teardown for watchdog timeouts and user cancellation: release the
// slot, drop the port, persist and broadcast the terminal response.
function finalizeTask(response, mode, taskId = null) {
  if (taskId !== null && activeTaskId !== taskId) return false;
  taskActive = false;
  activeTaskId = null;
  stopKeepalive();
  clearAlarm('taskTimeout');
  if (nativePort) {
    try { nativePort.disconnect(); } catch (_e) { /* port already gone */ }
    nativePort = null;
  }
  setSessionStatus({ running: false, result: response, mode, finishedAt: Date.now() });
  broadcastCompletion(response);
  return true;
}

function handleTaskTimeout(wasActive, status) {
  if (!wasActive && !status?.running) return; // stale alarm; task already finished
  finalizeTask({ ok: false, error: TASK_TIMEOUT_ERROR, diagnostic: {
    stage: 'update-task', code: 'task_timeout', reason: TASK_TIMEOUT_ERROR,
    completedChecks: [],
    actions: ['直接重试', '若反复出现，请重新检测或重新安装本机检测组件'],
  } }, status?.mode);
}

function cancelActiveTask(wasActive, status) {
  if (!wasActive && !status?.running) {
    return { ok: false, error: '没有正在运行的任务。' };
  }
  finalizeTask({ ok: false, cancelled: true, error: '任务已取消。' }, status?.mode);
  return { ok: true, cancelled: true };
}

function startKeepalive() {
  try { chrome.alarms?.create('keepalive', { periodInMinutes: 1 }); } catch (_error) { /* optional permission */ }
}

function stopKeepalive() {
  clearAlarm('keepalive');
}

function clearAlarm(name) {
  try {
    const pending = chrome.alarms?.clear(name);
    if (pending?.catch) pending.catch(() => {});
  } catch (_error) { /* optional permission */ }
}

function setSessionStatus(status) {
  chrome.storage.session.set({ taskStatus: status }).catch(() => {});
}

function broadcastCompletion(response) {
  chrome.runtime.sendMessage({ action: 'taskComplete', response }).catch(() => {});
}

function sendNativeOnce(message, { timeoutMs = 0 } = {}) {
  return new Promise((resolve, reject) => {
    let port;
    let settled = false;
    let timeout = null;
    const finish = (callback, value) => {
      if (settled) return;
      settled = true;
      if (timeout !== null) clearTimeout(timeout);
      try { port?.disconnect(); } catch (_error) { /* already disconnected */ }
      callback(value);
    };
    try {
      port = chrome.runtime.connectNative(NATIVE_HOST);
    } catch (error) {
      finish(reject, error);
      return;
    }
    port.onMessage.addListener((response) => {
      finish(resolve, response);
    });
    port.onDisconnect.addListener(() => {
      finish(reject, new Error(chrome.runtime.lastError?.message || '本机桥接连接已断开'));
    });
    if (timeoutMs > 0 && typeof setTimeout === 'function') {
      timeout = setTimeout(() => {
        const error = Object.assign(new Error('本机检测超时'), { code: 'native_handshake_timeout' });
        finish(reject, error);
      }, timeoutMs);
    }
    try {
      port.postMessage(message);
    } catch (error) {
      finish(reject, error);
    }
  });
}

function supportedProtocolVersion(value) {
  return Number.isInteger(value)
    && value >= MIN_COMPATIBLE_PROTOCOL_VERSION
    && value <= PROTOCOL_VERSION;
}

function handshakeRequest(protocolVersion, refreshCatalog) {
  return {
    action: 'handshake',
    protocolVersion,
    schemaVersion: DATA_SCHEMA_VERSION,
    extensionId: chrome.runtime.id,
    refreshCatalog: refreshCatalog === true,
  };
}

function normalizeHandshakeResponse(response, effectiveProtocolVersion = null) {
  const error = String(response?.error || '');
  if (response?.ok && supportedProtocolVersion(effectiveProtocolVersion)
    && response.protocolVersion === effectiveProtocolVersion
    && response.schemaVersion === DATA_SCHEMA_VERSION) {
    return {
      ...response,
      effectiveProtocolVersion,
      legacyCompatibility: effectiveProtocolVersion < PROTOCOL_VERSION,
    };
  }
  if (!response?.ok && /handshake/i.test(error) && /(?:未知|unknown)/i.test(error)) {
    return {
      ...response,
      code: 'bridge_outdated',
      error: '已检测到不支持当前协议的本机检测组件。请安装最新签名组件后重新检测。',
    };
  }
  return response;
}

async function negotiateNativeHandshake(refreshCatalog) {
  const requested = PROTOCOL_VERSION;
  const initial = await sendNativeOnce(
    handshakeRequest(requested, refreshCatalog),
    { timeoutMs: HANDSHAKE_TIMEOUT_MS }
  );
  if (initial?.ok) return normalizeHandshakeResponse(initial, requested);

  // v3/v4 hosts return their required protocol in a normal handshake error.
  // Retry once with that exact supported version instead of treating an
  // otherwise healthy bridge as obsolete merely because the extension updated.
  const reported = initial?.protocolVersion;
  if (supportedProtocolVersion(reported) && reported !== requested
    && initial?.schemaVersion === DATA_SCHEMA_VERSION) {
    const legacy = await sendNativeOnce(
      handshakeRequest(reported, refreshCatalog),
      { timeoutMs: HANDSHAKE_TIMEOUT_MS }
    );
    return normalizeHandshakeResponse(legacy, reported);
  }
  return normalizeHandshakeResponse(initial, requested);
}

async function importStoreTransfer(response, taskId) {
  const transfer = response?.transfer;
  if (!DYNAMIC_DATA || !transfer || !/^[a-f0-9]{32}$/.test(transfer.token || '')) {
    throw new Error('本机桥接返回了无效的分块传输信息');
  }
  if (!Number.isInteger(transfer.totalChunks) || transfer.totalChunks < 1 || transfer.totalChunks > 64
    || !Number.isInteger(transfer.totalBytes) || transfer.totalBytes < 1 || transfer.totalBytes > MAX_APP_MESSAGE_BYTES
    || !/^[a-f0-9]{64}$/.test(transfer.sha256 || '')) {
    throw new Error('本机桥接返回的分块大小或校验和无效');
  }
  const chunks = [];
  for (let index = 0; index < transfer.totalChunks; index += 1) {
    if (!taskActive || activeTaskId !== taskId) throw new Error('任务已取消，未写入动态数据');
    const part = await sendNativeOnce({ action: 'read_bundle_chunk', token: transfer.token, index });
    if (!part?.ok || part.index !== index || typeof part.data !== 'string' || part.data.length > 700000) {
      throw new Error(`动态数据第 ${index + 1} 个分块无效`);
    }
    chunks.push(part.data);
  }
  if (!taskActive || activeTaskId !== taskId) throw new Error('任务已取消，未写入动态数据');
  const bundle = await DYNAMIC_DATA.assembleChunks(chunks, transfer.totalBytes, transfer.sha256);
  if (!taskActive || activeTaskId !== taskId) throw new Error('任务已取消，未写入动态数据');
  const committed = await DYNAMIC_DATA.commitBundle(chrome, bundle);
  await sendNativeOnce({ action: 'finalize_bundle', token: transfer.token }).catch(() => null);
  return { ...response, transfer: undefined, dynamicChanged: true, revisionId: committed.revisionId };
}

function safeJsonContext(msg) {
  const context = {};
  for (const key of ['current_dataset', 'official_inventory', 'scenario_review', 'official_adapter']) {
    const value = msg[key];
    if (value !== undefined && value !== null && typeof value === 'object' && !Array.isArray(value)) {
      context[key] = JSON.parse(JSON.stringify(value));
    }
  }
  if (msg.source_registry !== undefined && msg.source_registry !== null
    && typeof msg.source_registry === 'object') {
    context.source_registry = JSON.parse(JSON.stringify(msg.source_registry));
  }
  if (typeof msg.base_content_hash === 'string' && /^sha256:[a-f0-9]{64}$/.test(msg.base_content_hash)) {
    context.base_content_hash = msg.base_content_hash;
  }
  const serialized = JSON.stringify(context);
  const byteLength = typeof TextEncoder === 'function'
    ? new TextEncoder().encode(serialized).byteLength
    : unescape(encodeURIComponent(serialized)).length;
  if (byteLength > MAX_APP_MESSAGE_BYTES) {
    throw new Error('维护上下文超过应用大小上限');
  }
  return context;
}

chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
  if (msg.action === 'ping') {
    sendResponse({ ok: true });
    return false;
  }

  if (msg.action === 'companionHandshake') {
    if (msg.protocolVersion !== PROTOCOL_VERSION || msg.schemaVersion !== DATA_SCHEMA_VERSION) {
      sendResponse({ ok: false, error: '扩展协议版本无效', protocolVersion: PROTOCOL_VERSION, schemaVersion: DATA_SCHEMA_VERSION });
      return false;
    }
    negotiateNativeHandshake(msg.refreshCatalog === true)
      .then((response) => sendResponse(response))
      .catch((error) => sendResponse({
        ok: false,
        error: error.code === 'native_handshake_timeout' ? '本机检测超时' : error.message,
        code: error.code === 'native_handshake_timeout' ? 'native_handshake_timeout' : 'native_host_unavailable',
      }));
    return true;
  }

  if (msg.action === 'companionProviderCatalogUpdate') {
    sendNativeOnce({ action: 'update_provider_catalog', protocolVersion: PROTOCOL_VERSION })
      .then((response) => sendResponse(response))
      .catch((error) => sendResponse({ ok: false, error: error.message }));
    return true;
  }

  if (msg.action === 'companionProviderCatalogImport') {
    let envelopeBytes = 0;
    try {
      const serializedEnvelope = JSON.stringify(msg.envelope);
      envelopeBytes = typeof TextEncoder === 'function'
        ? new TextEncoder().encode(serializedEnvelope).byteLength
        : unescape(encodeURIComponent(serializedEnvelope)).length;
    } catch (_error) {
      envelopeBytes = 0;
    }
    if (!msg.envelope || typeof msg.envelope !== 'object' || Array.isArray(msg.envelope)
      || envelopeBytes < 1 || envelopeBytes > 1024 * 1024) {
      sendResponse({ ok: false, error: '签名适配器文件无效' });
      return false;
    }
    sendNativeOnce({ action: 'import_provider_catalog', protocolVersion: PROTOCOL_VERSION, envelope: msg.envelope })
      .then((response) => sendResponse(response))
      .catch((error) => sendResponse({ ok: false, error: error.message }));
    return true;
  }

  if (msg.action === 'companionProviderApiConfigure') {
    const config = msg.config;
    const fields = ['displayName', 'protocol', 'baseUrl', 'model', 'token'];
    let serialized = '';
    try {
      serialized = typeof config === 'object' && config !== null
        ? JSON.stringify(config)
        : '';
    } catch (_error) {
      sendResponse({ ok: false, error: '兼容 API 配置无效' });
      return false;
    }
    const byteLength = typeof TextEncoder === 'function'
      ? new TextEncoder().encode(serialized).byteLength
      : unescape(encodeURIComponent(serialized)).length;
    const valid = config && !Array.isArray(config)
      && fields.every((field) => typeof config[field] === 'string')
      && config.displayName.trim().length > 0 && config.displayName.length <= 100
      && ['anthropic-messages', 'openai-responses', 'openai-chat-completions'].includes(config.protocol)
      && config.baseUrl.trim().length > 0 && config.baseUrl.length <= 500
      && config.model.trim().length > 0 && config.model.length <= 160
      && config.token.trim().length > 0 && config.token.length <= 4096
      && byteLength > 0 && byteLength <= 8192;
    if (!valid) {
      sendResponse({ ok: false, error: '兼容 API 配置无效' });
      return false;
    }
    const safeConfig = Object.fromEntries(fields.map((field) => [field, config[field]]));
    sendNativeOnce({ action: 'configure_api', protocolVersion: PROTOCOL_VERSION, config: safeConfig })
      .then((response) => sendResponse(response))
      .catch((error) => sendResponse({ ok: false, error: error.message }));
    return true;
  }

  if (msg.action === 'companionCustomProviderSave') {
    const config = msg.config;
    let serialized = '';
    try {
      serialized = config && typeof config === 'object' && !Array.isArray(config)
        ? JSON.stringify(config)
        : '';
    } catch (_error) {
      sendResponse({ ok: false, error: '自定义 AI 环境配置无效' });
      return false;
    }
    const byteLength = typeof TextEncoder === 'function'
      ? new TextEncoder().encode(serialized).byteLength
      : unescape(encodeURIComponent(serialized)).length;
    const stringFields = ['displayName', 'executable', 'driver', 'promptMode', 'outputParser', 'loginCommand'];
    const valid = config && !Array.isArray(config)
      && Object.keys(config).every((key) => ['id', ...stringFields, 'argv', 'versionArgs', 'readOnlyConfirmed'].includes(key))
      && stringFields.every((field) => typeof config[field] === 'string')
      && (!config.id || CUSTOM_PROVIDER_ID_RE.test(config.id))
      && Array.isArray(config.argv) && Array.isArray(config.versionArgs)
      && config.argv.length <= 40 && config.versionArgs.length <= 40
      && config.argv.every((value) => typeof value === 'string' && value.length > 0 && value.length <= 500)
      && config.versionArgs.every((value) => typeof value === 'string' && value.length > 0 && value.length <= 500)
      && config.readOnlyConfirmed === true
      && byteLength > 0 && byteLength <= 16384;
    if (!valid) {
      sendResponse({ ok: false, error: '自定义 AI 环境配置无效' });
      return false;
    }
    const safeConfig = Object.fromEntries(
      ['id', ...stringFields, 'argv', 'versionArgs', 'readOnlyConfirmed']
        .filter((field) => Object.prototype.hasOwnProperty.call(config, field))
        .map((field) => [field, config[field]])
    );
    sendNativeOnce({ action: 'save_custom_provider', protocolVersion: PROTOCOL_VERSION, config: safeConfig })
      .then((response) => sendResponse(response))
      .catch(() => sendResponse({ ok: false, error: '无法保存自定义 AI 环境，请重新检测本机检测组件后再试。' }));
    return true;
  }

  if (msg.action === 'companionCustomProviderDelete') {
    if (!CUSTOM_PROVIDER_ID_RE.test(msg.providerId || '')) {
      sendResponse({ ok: false, error: '只能删除自定义 AI 环境' });
      return false;
    }
    sendNativeOnce({ action: 'delete_custom_provider', protocolVersion: PROTOCOL_VERSION, providerId: msg.providerId })
      .then((response) => sendResponse(response))
      .catch(() => sendResponse({ ok: false, error: '无法删除自定义 AI 环境，请重新检测本机检测组件后再试。' }));
    return true;
  }

  if (msg.action === 'companionGenericProviderResolve') {
    const displayName = typeof msg.displayName === 'string' ? msg.displayName.trim() : '';
    const executable = msg.executable === undefined || msg.executable === null
      ? null
      : typeof msg.executable === 'string' ? msg.executable.trim() : '';
    const validExecutable = executable === null
      || /^[A-Za-z0-9][A-Za-z0-9._+-]{0,79}$/.test(executable);
    if (!displayName || displayName.length > 100 || !validExecutable) {
      sendResponse({ ok: false, error: 'AI 工具名称或实际命令名无效' });
      return false;
    }
    sendNativeOnce({
      action: 'resolve_generic_provider',
      protocolVersion: PROTOCOL_VERSION,
      displayName,
      executable,
      // The capability probe runs a real model task, so it is only requested
      // after the user has confirmed the risk in the popup.
      probe: msg.probe === true,
    }, msg.probe === true ? { timeoutMs: GENERIC_PROBE_TIMEOUT_MS } : {})
      .then((response) => sendResponse(response))
      .catch(() => sendResponse({ ok: false, error: '无法检测本机 AI 环境，请重新检测本机检测组件后再试。' }));
    return true;
  }

  if (msg.action === 'companionProviderRefresh') {
    const providerId = typeof msg.providerId === 'string' ? msg.providerId : '';
    if (!PROVIDER_ID_RE.test(providerId)) {
      sendResponse({ ok: false, error: 'AI 环境 ID 无效' });
      return false;
    }
    sendNativeOnce({
      action: 'refresh_provider',
      protocolVersion: PROTOCOL_VERSION,
      providerId,
    }, { timeoutMs: HANDSHAKE_TIMEOUT_MS })
      .then((response) => sendResponse(response))
      .catch(() => sendResponse({ ok: false, error: '无法重新检测该 AI 环境，请重新检测本机检测组件后再试。' }));
    return true;
  }

  if (msg.action === 'companionCommonProviderInstallPrepare') {
    const commonProviderId = typeof msg.commonProviderId === 'string' ? msg.commonProviderId : '';
    if (!/^[a-z][a-z0-9-]{0,63}$/.test(commonProviderId)) {
      sendResponse({ ok: false, error: '常见 AI 环境 ID 无效' });
      return false;
    }
    sendNativeOnce({
      action: 'prepare_common_provider_install',
      protocolVersion: PROTOCOL_VERSION,
      commonProviderId,
    })
      .then((response) => sendResponse(response))
      .catch(() => sendResponse({ ok: false, error: '无法检查该 AI 环境的安装条件，请重新检测后再试。' }));
    return true;
  }

  if (msg.action === 'companionCommonProviderInstall') {
    const commonProviderId = typeof msg.commonProviderId === 'string' ? msg.commonProviderId : '';
    if (!/^[a-z][a-z0-9-]{0,63}$/.test(commonProviderId) || msg.confirmed !== true) {
      sendResponse({ ok: false, error: '常见 AI 环境安装请求无效' });
      return false;
    }
    // Installation remains a single native request instead of the maintenance
    // task queue: it never receives model data and can only execute a
    // bridge-owned fixed installer profile.
    sendNativeOnce({
      action: 'install_common_provider',
      protocolVersion: PROTOCOL_VERSION,
      commonProviderId,
      confirmed: true,
    }, { timeoutMs: 10 * 60 * 1000 })
      .then((response) => sendResponse(response))
      .catch((error) => sendResponse({
        ok: false,
        error: error?.code === 'native_handshake_timeout'
          ? '安装超时，请检查网络或软件包权限后重试。'
          : '安装连接中断，请重新检测后再试。',
      }));
    return true;
  }

  if (msg.action === 'companionGenericProviderEnable') {
    const displayName = typeof msg.displayName === 'string' ? msg.displayName.trim() : '';
    const executable = typeof msg.executable === 'string' ? msg.executable.trim() : '';
    const genericProfileId = typeof msg.genericProfileId === 'string' ? msg.genericProfileId : '';
    // Rebinding an existing environment's invocation template may only ever
    // target a user-created one.
    const providerId = msg.providerId === undefined || msg.providerId === null
      ? null
      : typeof msg.providerId === 'string' ? msg.providerId : '';
    if (!displayName || displayName.length > 100
      || !/^[A-Za-z0-9][A-Za-z0-9._+-]{0,79}$/.test(executable)
      || !/^[a-z][a-z0-9-]{0,39}$/.test(genericProfileId)
      || (providerId !== null && !CUSTOM_PROVIDER_ID_RE.test(providerId))
      || msg.genericConfirmed !== true) {
      sendResponse({ ok: false, error: '通用调用确认无效' });
      return false;
    }
    sendNativeOnce({
      action: 'enable_generic_provider',
      protocolVersion: PROTOCOL_VERSION,
      displayName,
      executable,
      genericProfileId,
      providerId,
      genericConfirmed: true,
    })
      .then((response) => sendResponse(response))
      .catch(() => sendResponse({ ok: false, error: '无法启用通用调用，请重新检测本机检测组件后再试。' }));
    return true;
  }

  if (msg.action === 'cancelTask') {
    // 同看门狗：SW 重启后 taskActive 丢失，需结合 session 判断孤儿任务。
    const wasActive = taskActive;
    chrome.storage.session.get(['taskStatus'])
      .then((res) => sendResponse(cancelActiveTask(wasActive, res.taskStatus)))
      .catch(() => sendResponse(cancelActiveTask(wasActive, null)));
    return true; // async
  }

  if (msg.action === 'getTaskStatus') {
    chrome.storage.session.get(['taskStatus'])
      .then((res) => sendResponse(res.taskStatus ?? { running: false }))
      .catch(() => sendResponse({ running: false }));
    return true; // async
  }

  if (msg.action === 'startTask') {
    if (taskActive) {
      sendResponse({ ok: false, error: '已有任务正在运行，请等待完成后再试。' });
      return false;
    }

    const {
      tool, display_name, mode, token, confirm_risk, prefer_web, deep_check,
      providerId, providerCatalogDigest, bridgeProtocolVersion,
    } = msg;
    const channel = msg.channel === 'store' ? 'store' : 'source';
    const tokenMode = ['apply_update', 'discard_update'].includes(mode);
    const validToken = typeof token === 'string' && /^[a-f0-9]{32}$/.test(token);
    const validTool = typeof tool === 'string'
      && tool.length <= 64
      && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(tool);
    const validName = typeof display_name === 'string'
      && display_name.trim().length > 0
      && display_name.trim().length <= 100;
    const validMode = ['add_tool', 'preview_update', 'apply_update', 'discard_update', 'remove_tool']
      .includes(mode);
    let paramsValid;
    if (tokenMode) paramsValid = validToken;
    else paramsValid = validTool && validName;
    const effectiveProtocolVersion = Number.isInteger(bridgeProtocolVersion)
      ? bridgeProtocolVersion : PROTOCOL_VERSION;
    const legacyV3 = effectiveProtocolVersion === 3;
    const protocolValid = supportedProtocolVersion(effectiveProtocolVersion);
    const legacyProviderValid = !legacyV3
      || ['claude', 'codex', 'gemini', 'opencode'].includes(providerId);
    const catalogValid = legacyV3
      || CATALOG_DIGEST_RE.test(providerCatalogDigest || '');
    if (!validMode || !paramsValid || !protocolValid || !legacyProviderValid
      || !PROVIDER_ID_RE.test(providerId || '') || !catalogValid) {
      sendResponse({ ok: false, error: '任务参数无效，请关闭并重新打开弹窗后重试；若反复出现，请更新扩展或反馈问题。' });
      return false;
    }
    let maintenanceContext;
    try {
      maintenanceContext = safeJsonContext(msg);
    } catch (error) {
      sendResponse({ ok: false, error: error.message });
      return false;
    }
    taskActive = true;
    const taskId = ++taskSequence;
    activeTaskId = taskId;
    startKeepalive();
    try { chrome.alarms?.create('taskTimeout', { delayInMinutes: TASK_TIMEOUT_MINUTES }); } catch (_error) { /* optional permission */ }
    setSessionStatus({ running: true, tool, display_name, mode, token, providerId, startedAt: Date.now() });

    // Ack immediately so popup can update its UI without waiting for the task
    sendResponse({ ok: true, queued: true });

    const taskPort = chrome.runtime.connectNative(NATIVE_HOST);
    nativePort = taskPort;

    let responseReceived = false;
    taskPort.onMessage.addListener((response) => {
      responseReceived = true;
      if (nativePort === taskPort) nativePort = null;
      try { taskPort.disconnect(); } catch (_error) { /* already disconnected */ }
      if (!taskActive || activeTaskId !== taskId) return;
      if (channel === 'store' && response?.ok && response.transfer) {
        importStoreTransfer(response, taskId)
          .then((result) => finalizeTask(result, mode, taskId))
          .catch((error) => {
            if (!taskActive || activeTaskId !== taskId) return;
            finalizeTask({ ok: false, error: error.message, diagnostic: {
              stage: 'storage-overlay', code: 'dynamic_commit_failed', reason: error.message,
              completedChecks: ['分块接收'], actions: ['重试任务', '检查本地存储空间', '升级本机桥接'],
            } }, mode, taskId);
          });
        return;
      }
      finalizeTask(response, mode, taskId);
    });

    taskPort.onDisconnect.addListener(() => {
      if (responseReceived) return;
      if (!taskActive || activeTaskId !== taskId) return; // already cancelled, timed out or replaced
      taskActive = false;
      activeTaskId = null;
      stopKeepalive();
      clearAlarm('taskTimeout');
      if (nativePort === taskPort) nativePort = null;
      const errMsg = chrome.runtime.lastError?.message
        ?? '连接本机检测组件失败。请重新检测；若仍失败，请重新安装组件。';
      const response = { ok: false, error: errMsg, diagnostic: {
        stage: 'native-host', code: 'native_host_unavailable', reason: errMsg,
        completedChecks: [],
        actions: ['重新检测本机 AI 环境', '重新安装本机检测组件'],
      } };
      setSessionStatus({ running: false, result: response, mode, finishedAt: Date.now() });
      broadcastCompletion(response);
    });

    const nativeTask = {
      action: mode,
      protocolVersion: effectiveProtocolVersion,
      providerId,
      tool,
      display_name,
      token,
      confirm_risk: confirm_risk === true,
      prefer_web: prefer_web === true,
      deep_check: deep_check === true,
      channel,
      ...maintenanceContext,
    };
    // v3 predates the signed Provider registry and deliberately has no
    // catalog digest field. v4/v5 keep the binding so a changed registry
    // cannot silently redirect a task to another configured account.
    if (!legacyV3) nativeTask.providerCatalogDigest = providerCatalogDigest;
    taskPort.postMessage(nativeTask);
    return false;
  }
});
