"use strict";

const CORE = window.CHEATSHEET_CORE;
const STATE = window.CHEATSHEET_POPUP_STATE;
const RENDER = window.CHEATSHEET_POPUP_RENDER;
const DISTRIBUTION = window.CHEATSHEET_DISTRIBUTION || {
  channel: "source",
  capabilities: { localRecommendations: true, nativeCompanion: "bundled-development", aiRecommendations: false, dataMaintenance: true, persistence: "repository-files" },
};
const CAPABILITIES = DISTRIBUTION.capabilities || {
  localRecommendations: true,
  nativeCompanion: DISTRIBUTION.maintenance ? "bundled-development" : false,
  aiRecommendations: DISTRIBUTION.maintenance === true,
  dataMaintenance: DISTRIBUTION.maintenance === true,
  persistence: DISTRIBUTION.maintenance ? "repository-files" : "none",
};
const LOCAL_RECOMMENDATIONS_ENABLED = CAPABILITIES.localRecommendations !== false;
const MAINTENANCE_ENABLED = Boolean(CAPABILITIES.nativeCompanion)
  && (CAPABILITIES.aiRecommendations === true || CAPABILITIES.dataMaintenance === true);
const BRIDGE_PROTOCOL_VERSION = 5;
const MIN_COMPATIBLE_BRIDGE_PROTOCOL_VERSION = 3;
const BRIDGE_SCHEMA_VERSION = 2;
const BRIDGE_VERSION = DISTRIBUTION.releaseVersion || chrome.runtime?.getManifest?.().version || "1.8.1";
const COMPANION_PERMISSIONS = ["nativeMessaging", "alarms"];
const STORAGE_PERMISSION = ["unlimitedStorage"];
const ADD_PROVIDER_SENTINEL = "__add_provider__";
const BUILTIN_COMMON_PROVIDER_IDS = Object.freeze({
  "claude-code": "claude",
  "codex-cli": "codex",
  "gemini-cli": "gemini",
  opencode: "opencode",
  "qwen-code": "qwen",
});
const DYNAMIC_DATA = window.CHEATSHEET_DYNAMIC_DATA;
const TOOL_FILES = Array.isArray(window.CHEATSHEET_FILES) ? window.CHEATSHEET_FILES : [];
const catalogData = Object.fromEntries((window.CHEATSHEET_TOOL_CATALOG || []).map((meta) => [
  meta.id,
  { meta: { ...meta, catalogOnly: true }, items: [] },
]));
const BUNDLED_TOOL_IDS = new Set(Object.keys(catalogData));

let activeTool = "all";
let activeCat = null;
let activeShellFilter = null;
let activeEvidence = null;
let activeExampleFilter = null;
let favourites = new Set();
let recents = [];
let enabledTools = new Set();
let acknowledgedPlatformScopes = new Set();
let dismissedRecommendations = new Set();
let platform = STATE.detectPlatform();
let webVerify = false;
let recommendationQuery = "";
let activeRecommendationCategory = "all";
let showDismissedRecommendations = false;
let addingRecommendation = null;
let recommendationBatchOffset = 0;
let aiRecommendations = [];
let companionState = "unchecked";
let companionHandshake = null;
let selectedProviderId = "";
let providerSelectionExplicit = false;
let pendingBridgeIntent = null;
let pendingBridgeCommonProviderId = "";
let commonProviderCatalog = null;
let genericProviderCandidate = null;
let genericProviderDetectionActive = false;
let genericProviderDetectionNonce = 0;
let pendingCommonProviderInstall = null;
let commonProviderInstallActive = false;
let dynamicToolIds = new Set();
let dynamicOfficialInventories = {};
let dynamicScenarioReviews = {};
let dynamicOfficialAdapters = {};
let dynamicSourceRegistries = {};
let dynamicContentHashes = {};
let dynamicConflicts = [];
const RECOMMENDATION_BATCH_SIZE = 3;
// 与 popup-state.js pruneRecents 的截断上限保持一致。
const RECENTS_LIMIT = 20;
// 弹窗重开时，多久以内的任务结果仍值得回放展示。
const TASK_RESULT_FRESH_MS = 120000;
// 上次生成的质量告警在管理视图保留展示的时长。
const QUALITY_WARNING_TTL_MS = 86400000;
let pendingUpdate = null;
let currentTaskMode = null;
let expandedTools = new Set();
let expandedExamples = new Set();
let enrichmentIndex = new Map();
let entryIndex = { entries: [], byKey: new Map(), validKeys: new Set() };
let searchLimit = STATE.SEARCH_INITIAL_LIMIT;
let lastAutoExpandedQuery = "";
let filtersOpen = false;
let browseAll = false;
let selectedResultKey = "";
const { hideToast, showToast, showUndoToast } = window.CHEATSHEET_POPUP_TOAST.createToast(document);

const DIALOGS = window.CHEATSHEET_POPUP_DIALOGS;
const riskDialog = DIALOGS.createRiskDialog({
  document,
  core: CORE,
  render: RENDER,
  showToast,
  confirmFallback: (message) => confirm(message),
});
const confirmRiskCopy = riskDialog.confirmRiskCopy;
const closeRiskDialog = riskDialog.closeRiskDialog;

const onboarding = DIALOGS.createOnboarding({
  document,
  state: STATE,
  render: RENDER,
  getAllData,
  getEnabledTools: () => enabledTools,
  setEnabledTools: (value) => { enabledTools = value; },
  getPlatform: () => platform,
  setPlatform: (value) => { platform = value; },
  storageSet,
  onSaved: async () => {
    await ensureEnabledToolData();
    renderFilters(); render(); renderManage();
  },
  onSkipped: async () => {
    await ensureEnabledToolData();
    renderFilters(); render();
  },
});

let _dom = null;
function getDOM() {
  if (!_dom) _dom = {
    search: document.getElementById("search"),
    countBar: document.getElementById("countBar"),
    main: document.getElementById("main"),
  };
  return _dom;
}

function applyFilter(updateFn) {
  resetResultLimits();
  updateFn();
  renderFilters();
  render();
}

function getAllData() {
  return { ...catalogData, ...(window.CHEATSHEET_DATA || {}) };
}

function getLoadedData() {
  return window.CHEATSHEET_DATA || {};
}

function storageGet(keys) {
  return STATE.storageGet(chrome, keys);
}

function storageSet(values) {
  return STATE.storageSet(chrome, values);
}

function runtimeMessage(message) {
  return new Promise((resolve, reject) => {
    chrome.runtime.sendMessage(message, (response) => {
      if (chrome.runtime.lastError) reject(new Error(chrome.runtime.lastError.message));
      else resolve(response);
    });
  });
}

function hasCompanionPermissions() {
  if (DISTRIBUTION.channel !== "store") return Promise.resolve(true);
  if (!chrome.permissions?.contains) return Promise.resolve(false);
  return new Promise((resolve) => chrome.permissions.contains({ permissions: COMPANION_PERMISSIONS }, resolve));
}

function requestCompanionPermissions(permissions = COMPANION_PERMISSIONS) {
  if (DISTRIBUTION.channel !== "store") return Promise.resolve(true);
  if (!chrome.permissions?.request) return Promise.resolve(false);
  return new Promise((resolve) => chrome.permissions.request({ permissions }, resolve));
}

function renderCompanionState() {
  if (!MAINTENANCE_ENABLED) return;
  const selector = document.getElementById("providerSelect");
  const status = document.getElementById("providerStatus");
  const detectButton = document.getElementById("detectBridge");
  if (!selector || !status) return;
  const detecting = companionState === "detecting";
  if (detectButton) {
    const label = detectButton.querySelector(".detect-label");
    if (label) label.textContent = detecting ? "检测中" : companionHandshake ? "重新检测" : "检测";
    detectButton.disabled = detecting || companionState === "running";
    detectButton.classList.toggle("is-loading", detecting);
    detectButton.setAttribute("aria-busy", detecting ? "true" : "false");
  }
  const providers = Array.isArray(companionHandshake?.providers) ? companionHandshake.providers : [];
  const byId = new Map(providers.map((provider) => [provider.id, provider]));
  // A timed-out probe means "unknown", not "not installed", so it gets its own
  // group instead of being listed as something the user still needs to install.
  const timedOut = (provider) => provider.loginState === "probe-timeout";
  const groups = [
    ["ready", "已就绪", (provider) => provider.transport !== "api" && provider.ready],
    ["installed", "已安装，需完成登录", (provider) => provider.transport !== "api" && provider.installed && !provider.ready],
    ["api", "兼容 API", (provider) => provider.transport === "api"],
    ["timeout", "本次检测超时", (provider) => provider.transport !== "api" && !provider.installed && timedOut(provider)],
    ["available", "其他可安装环境", (provider) => provider.transport !== "api" && !provider.installed && !timedOut(provider)],
  ];
  const optionHtml = (provider) => {
    const version = provider.version ? ` ${provider.version}` : "";
    const state = provider.loginState === "probe-timeout" ? " · 检测超时"
      : provider.loginState === "unknown" ? " · 登录待验证"
      : provider.ready ? " · 已就绪"
        : provider.transport === "api" ? " · 配置不完整"
          : provider.installed ? " · 未登录" : " · 未安装";
    const trust = provider.verified ? " · 已验证"
      : provider.source === "custom" ? ` · ${provider.executionMode === "generic" ? "通用调用" : "旧版已配置"}`
        : provider.transport === "api" ? " · 用户配置" : "";
    return `<option value="${RENDER.escapeHtml(provider.id)}" ${selectedProviderId === provider.id ? "selected" : ""}>${RENDER.escapeHtml(`${provider.displayName}${version}${state}${trust}`)}</option>`;
  };
  const renderedGroups = groups.map(([, label, matches]) => {
    const entries = providers.filter(matches).sort((left, right) =>
      (left.recommendationOrder ?? 1000) - (right.recommendationOrder ?? 1000)
      || left.displayName.localeCompare(right.displayName));
    return entries.length
      ? `<optgroup label="${label}">${entries.map(optionHtml).join("")}</optgroup>`
      : "";
  }).join("");
  const missingSelection = selectedProviderId && providers.length && !byId.has(selectedProviderId)
    ? `<optgroup label="原选择不可用"><option value="${RENDER.escapeHtml(selectedProviderId)}" selected disabled>${RENDER.escapeHtml(selectedProviderId)} · 适配器不存在</option></optgroup>`
    : "";
  const addOption = `<option value="${ADD_PROVIDER_SENTINEL}">＋ 添加 AI 环境…</option>`;
  selector.innerHTML = renderedGroups || missingSelection
    ? `${missingSelection}${renderedGroups}${addOption}`
    : `<option value="" selected disabled>检测本机 AI 环境后选择</option>${addOption}`;
  const selected = byId.get(selectedProviderId);
  selector.disabled = detecting || companionState === "running";
  const messages = {
    unchecked: "仅在你点击检测或使用维护功能时检查本机环境；冷启动不会调用模型。",
    "not-authorized": "尚未授权本机桥接权限，基础查询、收藏和本地推荐不受影响。",
    "not-installed": "未检测到本机检测组件。安装完成后点击“重新检测”。",
    outdated: `本机检测组件版本不兼容，请安装 ${BRIDGE_VERSION}。`,
    error: "检测组件异常，请重新检测。未执行任何模型任务。",
    "detect-timeout": "检测超时，请重新检测。未执行任何模型任务。",
    detecting: "正在检测本机 AI 环境；不会调用模型。",
    running: `正在使用 ${selected?.displayName || selectedProviderId || "所选环境"} 执行任务，不会自动切换到其他环境。`,
  };
  const catalogRefreshFailed = companionState === "ready"
    && ["failed", "backoff"].includes(companionHandshake?.catalogRefresh?.status);
  const isCompanionError = companionState === "error" || companionState === "detect-timeout";
  const isCompanionWarning = companionState === "not-authorized"
    || companionState === "not-installed"
    || companionState === "outdated" || catalogRefreshFailed;
  status.className = `meta${isCompanionError ? " err" : isCompanionWarning ? " warn" : ""}`;
  status.setAttribute("role", isCompanionError ? "alert" : "status");
  const optionalUpdateNote = companionState === "ready" && bridgeUpdateAvailable()
    ? " 检测组件有可选更新，不影响当前扫描和维护功能。" : "";
  if (companionState === "ready" && selected) {
    status.textContent = (selected.loginState === "probe-timeout"
      ? `${selected.displayName} 的本机探测超时，本次未能确认它的状态。可在「添加 AI 环境」中单独重新检测该环境；其他已检测到的环境不受影响。`
      : selected.loginState === "unknown"
      ? `${selected.displayName}${selected.version ? ` ${selected.version}` : ""} 已安装；该 CLI 没有稳定的无调用登录检查，首次任务会验证登录状态。任务失败时不会自动切换环境。`
      : selected.ready
      ? `已就绪：${selected.displayName}${selected.version ? ` ${selected.version}` : ""}。${selected.source === "custom" ? selected.executionMode === "generic" ? "这是用户确认的通用调用；未经过只读验证。" : "这是旧版已配置环境；保留原有设置。" : companionHandshake?.catalogRefresh?.status === "updated" ? "已同步已验证的环境目录。" : catalogRefreshFailed ? "未能更新支持目录，仍使用上次已验证版本。" : "任务失败时不会自动改用其他模型。"}`
      : selected.transport === "api"
        ? `${selected.displayName} 配置不完整，请在本机检测组件中补全配置后重新检测。`
      : selected.installed
        ? `${selected.displayName} 已安装但尚未登录。请先完成该工具的登录，然后重新检测。`
        : `${selected.displayName} 未安装，请安装并登录后重新检测。`) + optionalUpdateNote;
  } else if (companionState === "ready" && selectedProviderId && !selected) {
    status.textContent = `之前选择的环境 ${selectedProviderId} 已不存在，请从列表中重新选择；不会自动改用其他模型。`;
  } else {
    status.textContent = messages[companionState] || messages.unchecked;
  }
}

function bridgeReleaseBase() {
  return `https://github.com/jindawn/ai-cli-cheatsheet-extension/releases/download/v${BRIDGE_VERSION}`;
}

function bridgeInstallerTrust() {
  const declared = DISTRIBUTION.bridgeInstallers;
  return declared === "signed" || declared === "unsigned" ? declared : "none";
}

function bridgeInstallersAvailable() {
  return bridgeInstallerTrust() !== "none";
}

function bridgeReleasePage() {
  return `https://github.com/jindawn/ai-cli-cheatsheet-extension/releases/tag/v${BRIDGE_VERSION}`;
}

// Whichever OS prompt an unsigned installer trips, the user needs to know it is
// expected and how to get past it. This is GUI guidance, never a command.
//
// The macOS wording deliberately routes through System Settings only. macOS 15
// removed the Control-click bypass for applications, and this text has to stay
// correct on versions where that shortcut no longer applies — the Settings path
// works on every supported release. It also states the ordering, because the
// "Open Anyway" entry only appears after one blocked attempt.
function unsignedInstallerNotice(os = runtimeOperatingSystem()) {
  if (os === "windows") {
    return "该安装包尚未做代码签名，Windows 会拦下它并显示 SmartScreen 提示——这是预期的：展开「更多信息」后选「仍要运行」即可继续。";
  }
  if (os === "linux") {
    return "该安装包尚未签名，不同发行版的提示不一样：包管理器可能提示来源未验证，确认后即可安装。";
  }
  return "该安装包尚未做 Apple 公证，双击时会被系统拦下——这是预期的。先双击一次，再打开「系统设置 → 隐私与安全性」，在下方找到刚被拦下的记录点「仍要打开」，然后确认一次即可安装。";
}

async function bridgeInstallLinks({ upgrading = false } = {}) {
  const base = bridgeReleaseBase();
  const os = runtimeOperatingSystem();
  const action = upgrading ? "升级" : "安装";
  if (os === "windows") {
    return [{ label: `${action} Windows x64 检测组件`, href: `${base}/ai-cli-cheatsheet-bridge-windows-x64-v${BRIDGE_VERSION}.msi` }];
  }
  if (os === "linux") {
    return [
      { label: `${action} Linux（Debian / Ubuntu）检测组件`, href: `${base}/ai-cli-cheatsheet-bridge-linux-x64-v${BRIDGE_VERSION}.deb` },
      { label: `${action} Linux（Fedora / RHEL）检测组件`, href: `${base}/ai-cli-cheatsheet-bridge-linux-x64-v${BRIDGE_VERSION}.rpm` },
    ];
  }
  let architecture = "";
  try {
    const values = await navigator.userAgentData?.getHighEntropyValues?.(["architecture"]);
    architecture = `${values?.architecture || ""} ${navigator.platform || ""}`.toLowerCase();
  } catch (_error) {
    architecture = `${navigator.platform || ""}`.toLowerCase();
  }
  const appleSilicon = /arm|aarch64/.test(architecture);
  return [
    {
      label: `${action} macOS ${appleSilicon ? "Apple 芯片" : "Intel"}检测组件`,
      href: `${base}/ai-cli-cheatsheet-bridge-macos-${appleSilicon ? "arm64" : "x64"}-v${BRIDGE_VERSION}.pkg`,
    },
  ];
}

function runtimeOperatingSystem() {
  const value = `${navigator.userAgentData?.platform || ""} ${navigator.platform || ""}`.toLowerCase();
  if (value.includes("win")) return "windows";
  if (value.includes("linux")) return "linux";
  return "mac";
}

function isOutdatedBridgeResponse(response) {
  const error = String(response?.error || "");
  const reportedProtocol = response?.protocolVersion;
  const reportedSchema = response?.schemaVersion;
  return response?.code === "bridge_outdated"
    || (Number.isInteger(reportedProtocol) && (reportedProtocol < MIN_COMPATIBLE_BRIDGE_PROTOCOL_VERSION
      || reportedProtocol > BRIDGE_PROTOCOL_VERSION))
    || (Number.isInteger(reportedSchema) && reportedSchema !== BRIDGE_SCHEMA_VERSION)
    || (/handshake/i.test(error) && /(?:未知|unknown)/i.test(error))
    || (/(?:协议|protocol|schema).*(?:不兼容|incompatible|不同)/i.test(error));
}

function effectiveBridgeProtocol(handshake = companionHandshake) {
  const version = handshake?.effectiveProtocolVersion ?? handshake?.protocolVersion;
  return Number.isInteger(version)
    && version >= MIN_COMPATIBLE_BRIDGE_PROTOCOL_VERSION
    && version <= BRIDGE_PROTOCOL_VERSION ? version : null;
}

function bridgeSupportsCapability(name) {
  return companionHandshake?.capabilities?.[name] === true;
}

function bridgeSupportsMaintenanceAction(action) {
  return Array.isArray(companionHandshake?.capabilities?.supportedActions)
    && companionHandshake.capabilities.supportedActions.includes(action);
}

function bridgeSupportsCommonProviderInstall() {
  return effectiveBridgeProtocol() >= 5 && bridgeSupportsCapability("commonProviderInstall");
}

function bridgeSupportsDynamicProviderSetup() {
  return effectiveBridgeProtocol() >= 4
    && typeof companionHandshake?.capabilities?.providerCatalog === "object";
}

function parseReleaseVersion(value) {
  const match = /^(\d+)\.(\d+)\.(\d+)$/.exec(String(value || ""));
  return match ? match.slice(1).map(Number) : null;
}

function bridgeUpdateAvailable(handshake = companionHandshake) {
  const installed = parseReleaseVersion(handshake?.bridgeVersion || handshake?.companionVersion);
  const current = parseReleaseVersion(BRIDGE_VERSION);
  if (!installed || !current) return false;
  for (let index = 0; index < current.length; index += 1) {
    if (installed[index] === current[index]) continue;
    return installed[index] < current[index];
  }
  return false;
}

function bridgeInstallerRequired() {
  return companionState === "not-installed" || companionState === "outdated";
}

// Pure so every state combination can be asserted directly. The install dialog
// used to serve one single "no installer" variant, which meant a brand-new
// install was told to "keep using the AI environments you already detected"
// while it had detected none and had no way to install anything.
function bridgeDialogPlan({ trust, upgrading, featureUpgrade, bridgeFeature, version, unsignedNotice }) {
  const installerAvailable = trust !== "none";
  const feature = bridgeFeature || "该功能";
  const title = upgrading ? "升级本机检测组件" : "安装本机检测组件";
  const redetect = "安装完成后返回此处点击“重新检测本机 AI 环境”。";
  let intro;
  if (upgrading && !installerAvailable) {
    intro = `${feature}需要新版检测组件。对应版本的安装包尚未发布，因此不会显示失效下载链接；已检测到的 AI 环境与维护功能不受影响。`;
  } else if (featureUpgrade) {
    intro = `${feature}需要较新的本机检测组件；安装完成后将自动继续该工具的安装准备。`;
  } else if (upgrading) {
    intro = `当前组件过旧，无法安全协商维护协议。升级到 ${version} 后，点击“重新检测”即可继续使用原有环境。`;
  } else if (!installerAvailable) {
    intro = "这不是安装 AI 环境。维护功能需要一个本机组件，而浏览器扩展无法自行安装它——这是浏览器的安全限制。当前版本尚未提供图形安装包，因此维护功能暂时不可用；速查、收藏和推荐不受影响。";
  } else {
    intro = "这不是安装 AI 环境。安装组件后，点击“检测”即可发现 Claude、Codex、Gemini 及其他已支持的本机 AI 环境。以后环境有变化时只需重新检测。";
  }
  if (installerAvailable) {
    return {
      title,
      intro,
      upgrading,
      showDownloads: true,
      steps: trust === "unsigned"
        ? [unsignedNotice, "在系统安装界面确认安装。", redetect]
        : ["下载后在系统安装界面确认安装。", redetect],
    };
  }
  if (upgrading) {
    return {
      title,
      intro,
      upgrading,
      showDownloads: false,
      fallbackNote: "这个版本还没有可供下载的图形安装包；不会要求复制或执行任何安装命令。",
      steps: ["继续使用已经检测到的 AI 环境与维护功能。", "安装包发布后，这里会显示对应系统的升级按钮。"],
    };
  }
  return {
    title,
    intro,
    upgrading,
    showDownloads: false,
    fallbackLinkLabel: "查看安装说明与发布页",
    steps: ["发布页会说明该版本当前可用的安装方式。", redetect],
  };
}

async function openBridgeDialog(intent = null) {
  pendingBridgeIntent = intent;
  const commonProviderId = typeof intent?.commonProviderId === "string"
    ? intent.commonProviderId : "";
  if (commonProviderId) {
    pendingBridgeCommonProviderId = commonProviderId;
    storageSet({ pendingBridgeCommonProviderId });
  }
  const dialog = document.getElementById("bridgeDialog");
  const actions = document.getElementById("bridgeInstallActions");
  const steps = document.getElementById("bridgeSteps");
  const title = document.getElementById("bridgeTitle");
  const intro = document.getElementById("bridgeIntro");
  if (!dialog || !actions || !steps || !title || !intro) return;
  const plan = bridgeDialogPlan({
    trust: bridgeInstallerTrust(),
    upgrading: companionState === "outdated" || intent?.bridgeUpgrade === true,
    featureUpgrade: intent?.bridgeUpgrade === true,
    bridgeFeature: intent?.bridgeFeature,
    version: BRIDGE_VERSION,
    unsignedNotice: unsignedInstallerNotice(),
  });
  title.textContent = plan.title;
  intro.textContent = plan.intro;
  if (plan.showDownloads) {
    actions.innerHTML = (await bridgeInstallLinks({ upgrading: plan.upgrading })).map((item) =>
      `<a class="text-btn primary" href="${item.href}" target="_blank" rel="noopener noreferrer">${RENDER.escapeHtml(item.label)}</a>`
    ).join("");
  } else if (plan.fallbackLinkLabel) {
    actions.innerHTML = `<a class="text-btn primary" href="${bridgeReleasePage()}" target="_blank" rel="noopener noreferrer">${RENDER.escapeHtml(plan.fallbackLinkLabel)}</a>`;
  } else {
    actions.innerHTML = `<p class="meta">${RENDER.escapeHtml(plan.fallbackNote)}</p>`;
  }
  steps.innerHTML = plan.steps.map((step) => `<li>${RENDER.escapeHtml(step)}</li>`).join("");
  document.getElementById("bridgeDialogStatus").className = "status";
  document.getElementById("bridgeDialogStatus").textContent = "";
  dialog.classList.add("show");
  dialog.querySelector(".bridge-card")?.focus();
  storageSet({ bridgeSetupStep: "install" });
}

function closeBridgeDialog() {
  document.getElementById("bridgeDialog")?.classList.remove("show");
}

async function clearPendingCommonProviderInstall() {
  pendingBridgeCommonProviderId = "";
  if (pendingBridgeIntent?.commonProviderId) pendingBridgeIntent = null;
  await storageSet({ pendingBridgeCommonProviderId: "" });
}

function genericProviderStatus(message = "", kind = "", target = "genericProviderStatus") {
  const element = document.getElementById(target);
  if (!element) return;
  element.textContent = message;
  element.className = message ? `status show ${kind}` : "status";
  element.setAttribute("role", kind === "err" ? "alert" : "status");
}

function commonProviderInstallStatus(message = "", kind = "") {
  const element = document.getElementById("commonProviderInstallStatus");
  if (!element) return;
  element.textContent = message;
  element.className = message ? `status show ${kind}` : "status";
  element.setAttribute("role", kind === "err" ? "alert" : "status");
}

function setCommonProviderInstallBusy(isBusy, label = "确认安装") {
  const panel = document.getElementById("commonProviderInstallConfirm");
  const button = document.getElementById("confirmCommonProviderInstall");
  const back = document.getElementById("backCommonProviderInstall");
  if (panel) panel.setAttribute("aria-busy", isBusy ? "true" : "false");
  if (button) {
    button.disabled = isBusy;
    button.textContent = isBusy ? "安装中…" : label;
  }
  if (back) back.disabled = isBusy;
}

function setGenericProviderDetectionBusy(isBusy, label = "自动检测") {
  const form = document.getElementById("genericProviderForm");
  const button = document.getElementById("detectGenericProvider");
  if (form) form.setAttribute("aria-busy", isBusy ? "true" : "false");
  if (button) {
    button.disabled = isBusy;
    button.textContent = isBusy ? "检测中…" : label;
  }
}

function showGenericProviderDetection(displayName, executable = "", message = "正在自动检测本机环境…") {
  setGenericProviderStep("detect");
  genericProviderCandidate = null;
  const name = document.getElementById("genericProviderName");
  const command = document.getElementById("genericProviderExecutable");
  const title = document.getElementById("genericProviderFormTitle");
  document.getElementById("genericExecutableField").hidden = true;
  name.value = displayName || "";
  command.value = executable || "";
  if (title) title.textContent = displayName ? `正在检测 ${displayName}` : "检测其他 AI 工具";
  genericProviderStatus(message);
  setGenericProviderDetectionBusy(true);
}

function beginGenericProviderDetection(displayName, executable, message) {
  genericProviderDetectionActive = true;
  const nonce = ++genericProviderDetectionNonce;
  showGenericProviderDetection(displayName, executable, message);
  return nonce;
}

function isCurrentGenericProviderDetection(nonce) {
  return genericProviderDetectionActive
    && nonce === genericProviderDetectionNonce
    && document.getElementById("customProviderDialog")?.classList.contains("show");
}

function cancelGenericProviderDetection() {
  genericProviderDetectionActive = false;
  genericProviderDetectionNonce += 1;
  setGenericProviderDetectionBusy(false);
}

function genericProviderBridgeFailureMessage() {
  const messages = {
    "not-authorized": "未获得本机检测权限；授权后重新检测即可，未执行任何模型任务。",
    "not-installed": "未检测到本机检测组件。请安装后重新检测。",
    outdated: `本机检测组件版本不兼容，请升级至 ${BRIDGE_VERSION} 后重新检测。`,
    "detect-timeout": "检测超时，请重新检测。未执行任何模型任务。",
    detecting: "本机环境正在检测中，请稍候再试。",
  };
  return messages[companionState] || "检测组件异常，请重新检测。未执行任何模型任务。";
}

function setGenericProviderStep(step = "list") {
  const list = document.getElementById("commonProviderList");
  const search = document.getElementById("commonProviderSearch");
  const other = document.getElementById("openOtherProviderFlow");
  const form = document.getElementById("genericProviderForm");
  const confirmPanel = document.getElementById("genericProviderConfirm");
  const installPanel = document.getElementById("commonProviderInstallConfirm");
  if (list) list.hidden = step !== "list";
  if (search) search.hidden = step !== "list";
  if (other) other.hidden = step !== "list";
  if (form) form.hidden = step !== "detect";
  if (confirmPanel) confirmPanel.hidden = step !== "confirm";
  if (installPanel) installPanel.hidden = step !== "install";
}

async function loadCommonProviderCatalog() {
  if (Array.isArray(commonProviderCatalog)) return commonProviderCatalog;
  try {
    const response = await fetch(chrome.runtime.getURL("shared/common-provider-catalog.json"));
    const document = await response.json();
    const providers = Array.isArray(document?.providers) ? document.providers : [];
    commonProviderCatalog = providers.filter((provider) => provider
      && typeof provider.id === "string" && typeof provider.displayName === "string"
      && typeof provider.executable === "string" && typeof provider.adapterStatus === "string");
  } catch (_error) {
    commonProviderCatalog = [];
  }
  return commonProviderCatalog;
}

function currentCommonProviderEntries() {
  const providers = Array.isArray(companionHandshake?.providers) ? companionHandshake.providers : [];
  const statusById = new Map(providers.map((provider) => [provider.id, provider]));
  const scannedList = Array.isArray(companionHandshake?.commonProviders)
    ? companionHandshake.commonProviders : [];
  const scanned = new Map(scannedList.map((provider) => [provider.id, provider]));
  // The bridge sends whole catalog entries, not just scan results, and it is
  // the side that can actually execute them. Prefer its list so an extension
  // and a bridge on different release trains cannot disagree about which
  // environments exist; the bundled copy only covers the not-yet-detected case.
  const catalog = scannedList.length
    ? scannedList
    : Array.isArray(commonProviderCatalog) ? commonProviderCatalog : [];
  const standard = catalog.map((entry) => {
    const builtinId = BUILTIN_COMMON_PROVIDER_IDS[entry.id];
    const scan = scanned.get(entry.id) || {};
    const registeredProviderId = scan.registeredProviderId || builtinId || null;
    const registered = registeredProviderId ? statusById.get(registeredProviderId) : null;
    return {
      ...entry,
      registeredProviderId,
      registeredSource: scan.registeredSource || registered?.source || null,
      installed: scan.installed === true || registered?.installed === true,
      ready: registered?.ready === true,
      loginState: registered?.loginState || null,
      installation: scan.installation || { state: "unsupported", canInstall: false },
      requiresBridgeUpgrade: Boolean(companionHandshake) && entry.installerStatus === "supported"
        && !bridgeSupportsCommonProviderInstall(),
    };
  });
  const custom = providers.filter((provider) => provider.source === "custom").map((provider) => ({
    id: provider.id,
    providerId: provider.id,
    registeredProviderId: provider.id,
    registeredSource: "custom",
    loginState: provider.loginState || null,
    displayName: provider.displayName,
    executable: provider.customConfig?.executable || "",
    adapterStatus: "custom",
    executionMode: provider.executionMode || "legacy-configured",
    description: provider.executionMode === "generic"
      ? "用户确认的通用调用；不使用 Shell 或动态参数。"
      : "旧版已配置；保留原有设置，可删除但不再提供复杂编辑。",
    installed: provider.installed === true,
    ready: provider.ready === true,
    customConfig: provider.customConfig || null,
  }));
  return [...custom, ...standard];
}

// `ready` is true for loginState "unknown" as well, because some CLIs have no
// non-generating auth check. The dropdown already says "登录待验证" for those,
// so these cards must not claim "已就绪" for the same environment.
function providerLoginQualifier(entry) {
  if (entry.loginState === "probe-timeout") return { label: "检测超时 · 可重试", className: "" };
  if (entry.loginState === "unknown") return { label: "已安装 · 登录待验证", className: "" };
  return null;
}

function providerEntryState(entry) {
  const pending = providerLoginQualifier(entry);
  if (entry.adapterStatus === "custom") {
    if (pending && entry.loginState === "probe-timeout") return pending;
    return {
      label: entry.executionMode === "generic" ? "通用调用" : "旧版已配置",
      className: entry.ready && entry.loginState !== "unknown" ? "ready" : "",
    };
  }
  if (entry.registeredProviderId && entry.registeredSource === "catalog") {
    if (pending) return pending;
    return { label: entry.ready ? "已验证，已就绪" : "已验证，待检测", className: entry.ready ? "ready" : "" };
  }
  if (entry.adapterStatus === "built-in") {
    if (pending) return pending;
    if (entry.installed) {
      return { label: entry.ready ? "已验证，已就绪" : "已安装，待登录", className: entry.ready ? "ready" : "" };
    }
    if (entry.requiresBridgeUpgrade) {
      return {
        label: bridgeInstallersAvailable() ? "升级组件后可一键安装" : "检测组件发布后可安装",
        className: "",
      };
    }
    if (entry.installation?.state === "ready" || entry.installerStatus === "supported") {
      return { label: "未安装 · 可一键安装", className: "" };
    }
    if (entry.installation?.state === "prerequisite-missing") {
      return { label: `需要 ${entry.installation.prerequisite || "前置运行时"}`, className: "" };
    }
    // No bridge installer profile exists for this tool, so do not imply one.
    return { label: "未安装 · 需按官方说明安装", className: "" };
  }
  if (pending) return pending;
  return {
    label: entry.installed ? "已安装，可尝试接入" : "未检测到 · 可补充命令名",
    className: "",
  };
}

function renderCommonProviderList() {
  const list = document.getElementById("commonProviderList");
  const query = document.getElementById("commonProviderSearch")?.value.trim().toLocaleLowerCase() || "";
  if (!list) return;
  const entries = currentCommonProviderEntries().filter((entry) => !query
    || `${entry.displayName} ${entry.executable || ""} ${entry.description || ""}`.toLocaleLowerCase().includes(query));
  list.innerHTML = entries.length ? entries.map((entry) => {
    const state = providerEntryState(entry);
    const official = entry.officialUrl
      ? `<a href="${RENDER.escapeHtml(entry.officialUrl)}" target="_blank" rel="noopener noreferrer">官方说明</a>` : "";
    const remove = entry.adapterStatus === "custom"
      ? `<button class="act" type="button" data-delete-provider="${RENDER.escapeHtml(entry.providerId)}" aria-label="删除 ${RENDER.escapeHtml(entry.displayName)}">删除</button>` : "";
    // Re-detecting one environment avoids rescanning every provider just to
    // pick up a login that finished a moment ago.
    const refresh = entry.registeredProviderId && bridgeSupportsProviderRefresh()
      ? `<button class="act" type="button" data-refresh-provider="${RENDER.escapeHtml(entry.registeredProviderId)}" aria-label="重新检测 ${RENDER.escapeHtml(entry.displayName)}">重新检测</button>` : "";
    return `<div class="common-provider-item"><button class="act" type="button" data-provider-entry="${RENDER.escapeHtml(entry.id)}"><span class="name">${RENDER.escapeHtml(entry.displayName)}</span><span class="detail">${RENDER.escapeHtml(entry.description || "")}</span></button><span class="state ${state.className}">${RENDER.escapeHtml(state.label)}</span>${official}${refresh}${remove}</div>`;
  }).join("") : '<div class="meta">没有匹配的常见环境，可选择“其他工具…”。</div>';
  for (const button of list.querySelectorAll("[data-provider-entry]")) {
    button.addEventListener("click", () => {
      const entry = currentCommonProviderEntries().find((item) => item.id === button.dataset.providerEntry);
      if (entry) selectCommonProviderEntry(entry);
    });
  }
  for (const button of list.querySelectorAll("[data-delete-provider]")) {
    button.addEventListener("click", () => {
      const entry = currentCommonProviderEntries().find((item) => item.providerId === button.dataset.deleteProvider);
      if (entry) deleteCustomProvider(entry);
    });
  }
  for (const button of list.querySelectorAll("[data-refresh-provider]")) {
    button.addEventListener("click", () => refreshOneProvider(button, button.dataset.refreshProvider));
  }
}

function bridgeSupportsProviderRefresh() {
  return companionHandshake?.capabilities?.refreshProvider === true;
}

async function refreshOneProvider(button, providerId) {
  if (!providerId || button.disabled) return;
  button.disabled = true;
  button.textContent = "检测中…";
  try {
    const response = await runtimeMessage({ action: "companionProviderRefresh", providerId });
    if (!response?.ok || !response.provider) throw new Error(response?.error || "refresh-failed");
    // Splice the fresh status into the cached handshake so only this row moves;
    // a full re-probe of every environment is exactly what this avoids.
    const providers = Array.isArray(companionHandshake?.providers) ? companionHandshake.providers : [];
    const index = providers.findIndex((provider) => provider.id === providerId);
    if (index >= 0) providers[index] = response.provider;
    renderCommonProviderList();
    renderCompanionState();
    genericProviderStatus("", "");
  } catch (_error) {
    button.disabled = false;
    button.textContent = "重新检测";
    genericProviderStatus("重新检测失败，请重新检测本机检测组件后再试。", "err");
  }
}

async function selectCommonProviderEntry(entry) {
  if (genericProviderDetectionActive) return;
  if (entry.requiresBridgeUpgrade) {
    closeCustomProviderDialog();
    await openBridgeDialog({
      bridgeUpgrade: true,
      bridgeFeature: `一键安装 ${entry.displayName}`,
      commonProviderId: entry.id,
      label: `一键安装 ${entry.displayName}`,
    });
    return;
  }
  const directProvider = entry.providerId || (entry.registeredProviderId
    && entry.registeredSource !== "custom" ? entry.registeredProviderId
    : entry.adapterStatus === "built-in" ? BUILTIN_COMMON_PROVIDER_IDS[entry.id] : null);
  if (directProvider) {
    // Choosing any card is an explicit gesture: refresh the bridge first so
    // the selected provider reflects its current install/login state rather
    // than a stale or absent handshake.
    const detectionNonce = beginGenericProviderDetection(
      entry.displayName, entry.executable, `正在检测 ${entry.displayName}…`
    );
    if (!await probeCompanion({ requestPermission: true, refreshCatalog: true })) {
      if (!isCurrentGenericProviderDetection(detectionNonce)) return;
      setGenericProviderDetectionBusy(false, "重新检测");
      genericProviderDetectionActive = false;
      genericProviderStatus(genericProviderBridgeFailureMessage(), "err");
      if (bridgeInstallerRequired()) {
        await openBridgeDialog();
      }
      return;
    }
    if (!isCurrentGenericProviderDetection(detectionNonce)) return;
    if (entry.installerStatus === "supported" && !bridgeSupportsCommonProviderInstall()) {
      setGenericProviderDetectionBusy(false, "重新检测");
      genericProviderDetectionActive = false;
      closeCustomProviderDialog();
      await openBridgeDialog({
        bridgeUpgrade: true,
        bridgeFeature: `一键安装 ${entry.displayName}`,
        commonProviderId: entry.id,
        label: `一键安装 ${entry.displayName}`,
      });
      return;
    }
    const detected = (companionHandshake?.providers || []).find((provider) => provider.id === directProvider);
    if (!detected) {
      setGenericProviderDetectionBusy(false, "重新检测");
      genericProviderDetectionActive = false;
      genericProviderStatus("该环境的适配器当前不可用，请重新检测后再试。", "err");
      return;
    }
    if (!detected.installed) {
      genericProviderDetectionActive = false;
      await prepareCommonProviderInstall(entry);
      return;
    }
    selectedProviderId = directProvider;
    providerSelectionExplicit = true;
    await storageSet({ selectedProviderId, providerSelectionExplicit: true });
    genericProviderDetectionActive = false;
    closeCustomProviderDialog();
    renderCompanionState();
    setStatus(`已选择 ${entry.displayName}。点击“检测”即可刷新安装和登录状态。`, "ok");
    return;
  }
  await resolveGenericProvider(entry.displayName, entry.executable);
}

async function prepareCommonProviderInstall(entry) {
  if (!bridgeSupportsCommonProviderInstall()) {
    await openBridgeDialog({
      bridgeUpgrade: true,
      bridgeFeature: `一键安装 ${entry.displayName}`,
      commonProviderId: entry.id,
      label: `一键安装 ${entry.displayName}`,
    });
    return;
  }
  pendingCommonProviderInstall = entry;
  setGenericProviderStep("install");
  document.getElementById("commonProviderInstallTitle").textContent = `安装 ${entry.displayName}`;
  document.getElementById("commonProviderInstallSummary").textContent = "正在检查本机前置条件…";
  document.getElementById("commonProviderInstallPrerequisite").textContent = "";
  commonProviderInstallStatus("");
  setCommonProviderInstallBusy(true);
  try {
    const response = await runtimeMessage({
      action: "companionCommonProviderInstallPrepare",
      commonProviderId: entry.id,
    });
    const installation = response?.installation;
    if (!response?.ok || !installation) throw new Error(response?.error || "prepare-failed");
    entry.installation = installation;
    if (installation.state === "ready") {
      document.getElementById("commonProviderInstallSummary").textContent = `将安装 ${entry.displayName}。来源：${installation.sourceLabel || "官方安装来源"}。`;
      document.getElementById("commonProviderInstallPrerequisite").textContent = "可能需要系统或软件包管理器授权；不会执行终端脚本。";
      setCommonProviderInstallBusy(false, `安装 ${entry.displayName}`);
      return;
    }
    if (installation.state === "prerequisite-missing") {
      document.getElementById("commonProviderInstallSummary").textContent = `${entry.displayName} 尚不能自动安装。`;
      document.getElementById("commonProviderInstallPrerequisite").textContent = `需要先安装 ${installation.prerequisite || "所需运行时"}，然后重新检测。`;
      setCommonProviderInstallBusy(false, "暂不可安装");
      document.getElementById("confirmCommonProviderInstall").disabled = true;
      commonProviderInstallStatus("缺少前置条件；可返回查看该工具的官方说明。", "err");
      return;
    }
    if (installation.state === "installed") {
      document.getElementById("commonProviderInstallSummary").textContent = `已检测到 ${entry.displayName}，正在重新检测环境。`;
      setCommonProviderInstallBusy(true);
      await finishCommonProviderInstall(entry, installation.providerId || entry.registeredProviderId);
      return;
    }
    document.getElementById("commonProviderInstallSummary").textContent = `${entry.displayName} 暂无可验证的一键安装方式。`;
    document.getElementById("commonProviderInstallPrerequisite").textContent = "请返回查看官方说明；扩展不会猜测或执行安装命令。";
    setCommonProviderInstallBusy(false, "暂不可安装");
    document.getElementById("confirmCommonProviderInstall").disabled = true;
    await clearPendingCommonProviderInstall();
  } catch (_error) {
    setCommonProviderInstallBusy(false, "确认安装");
    commonProviderInstallStatus("无法检查安装条件，请重新检测本机检测组件后再试。", "err");
  }
}

async function finishCommonProviderInstall(entry, providerId) {
  if (!await probeCompanion({ requestPermission: true, refreshCatalog: false })) {
    setCommonProviderInstallBusy(false, "重新检测");
    commonProviderInstallStatus(genericProviderBridgeFailureMessage(), "err");
    return false;
  }
  const provider = (companionHandshake?.providers || []).find((item) => item.id === providerId);
  if (!provider?.installed) {
    setCommonProviderInstallBusy(false, "重新检测");
    commonProviderInstallStatus("安装完成后暂未检测到该工具。请点击“重新检测”后再试。", "err");
    return false;
  }
  if (!provider.ready) {
    setCommonProviderInstallBusy(false, "重新检测");
    commonProviderInstallStatus(`${entry.displayName} 已安装，但尚未完成登录或配置。完成后点击“检测”即可使用。`, "warn");
    return false;
  }
  selectedProviderId = provider.id;
  providerSelectionExplicit = true;
  await clearPendingCommonProviderInstall();
  await storageSet({ selectedProviderId, providerSelectionExplicit: true });
  pendingCommonProviderInstall = null;
  commonProviderInstallActive = false;
  closeCustomProviderDialog();
  renderCompanionState();
  setStatus(`已安装并选择 ${entry.displayName}。每次任务仍会确认模型用量。`, "ok");
  return true;
}

async function confirmCommonProviderInstall() {
  const entry = pendingCommonProviderInstall;
  if (!entry || commonProviderInstallActive) return;
  commonProviderInstallActive = true;
  setCommonProviderInstallBusy(true);
  commonProviderInstallStatus(`正在安装 ${entry.displayName}…不会调用模型。`);
  try {
    const response = await runtimeMessage({
      action: "companionCommonProviderInstall",
      commonProviderId: entry.id,
      confirmed: true,
    });
    if (!response?.ok) {
      setCommonProviderInstallBusy(false, `安装 ${entry.displayName}`);
      commonProviderInstallActive = false;
      commonProviderInstallStatus(response?.error || "安装未成功完成，请稍后重试。", "err");
      return;
    }
    commonProviderInstallStatus("安装完成，正在自动重新检测…");
    await finishCommonProviderInstall(entry, response.providerId || entry.registeredProviderId);
  } catch (_error) {
    setCommonProviderInstallBusy(false, `安装 ${entry.displayName}`);
    commonProviderInstallStatus("安装连接中断；未更改当前 AI 环境选择。请重新检测后再试。", "err");
  } finally {
    commonProviderInstallActive = false;
  }
}

async function openCustomProviderDialog() {
  const dialog = document.getElementById("customProviderDialog");
  if (!dialog) return;
  dialog.classList.add("show");
  dialog.setAttribute("aria-hidden", "false");
  genericProviderCandidate = null;
  pendingCommonProviderInstall = null;
  commonProviderInstallActive = false;
  cancelGenericProviderDetection();
  genericProviderStatus();
  genericProviderStatus("", "", "genericProviderConfirmStatus");
  commonProviderInstallStatus();
  setCommonProviderInstallBusy(false);
  setGenericProviderStep("list");
  await loadCommonProviderCatalog();
  renderCommonProviderList();
  renderProviderCatalogChannelNote();
  document.getElementById("commonProviderSearch")?.focus();
}

// The signed catalog is how verified environments arrive without a component
// release. A source-installed bridge has no release public key, so the channel
// can never verify anything — say so here rather than leaving users to wonder
// why the list never grows.
function renderProviderCatalogChannelNote() {
  const note = document.getElementById("providerCatalogChannelNote");
  if (!note) return;
  const capabilities = companionHandshake?.capabilities?.providerCatalog;
  if (!companionHandshake || capabilities?.updateSupported !== false) {
    note.hidden = true;
    return;
  }
  note.hidden = false;
  note.textContent = "当前检测组件不能接收新增的已验证环境目录（源码安装或未签名版本）。"
    + "上面的环境仍可正常检测和使用；要获得后续新增的已验证环境，请改用签名安装包。";
}

function closeCustomProviderDialog() {
  cancelGenericProviderDetection();
  const dialog = document.getElementById("customProviderDialog");
  dialog?.classList.remove("show");
  dialog?.setAttribute("aria-hidden", "true");
}

function openGenericProviderFlow(entry = null) {
  genericProviderCandidate = null;
  cancelGenericProviderDetection();
  setGenericProviderStep("detect");
  const name = document.getElementById("genericProviderName");
  const executable = document.getElementById("genericProviderExecutable");
  document.getElementById("genericExecutableField").hidden = true;
  document.getElementById("genericProviderFormTitle").textContent = "检测其他 AI 工具";
  name.value = entry?.displayName || "";
  executable.value = entry?.executable || "";
  genericProviderStatus("输入名称后会自动检测；找不到时才显示实际命令名。", "");
  setGenericProviderDetectionBusy(false);
  name.focus();
}

async function resolveGenericProvider(displayName, suppliedExecutable = null) {
  if (genericProviderDetectionActive) return;
  const name = String(displayName || "").trim();
  const executable = String(suppliedExecutable || "").trim();
  if (!name) {
    setGenericProviderStep("detect");
    genericProviderStatus("请先填写工具名称。", "err");
    return;
  }
  const detectionNonce = beginGenericProviderDetection(name, executable, `正在检测 ${name}…`);
  if (!await probeCompanion({ requestPermission: true, refreshCatalog: true })) {
    if (!isCurrentGenericProviderDetection(detectionNonce)) return;
    setGenericProviderDetectionBusy(false, "重新检测");
    genericProviderDetectionActive = false;
    genericProviderStatus(genericProviderBridgeFailureMessage(), "err");
    if (bridgeInstallerRequired()) {
      await openBridgeDialog();
    }
    return;
  }
  if (!isCurrentGenericProviderDetection(detectionNonce)) return;
  if (!bridgeSupportsDynamicProviderSetup()) {
    setGenericProviderDetectionBusy(false, "返回");
    genericProviderDetectionActive = false;
    genericProviderStatus("添加其他 AI 环境需要更新本机检测组件；当前已检测到的环境不会受影响。", "warn");
    await openBridgeDialog({
      bridgeUpgrade: true,
      bridgeFeature: "添加其他 AI 环境",
      label: "添加其他 AI 环境",
    });
    return;
  }
  try {
    const response = await runtimeMessage({
      action: "companionGenericProviderResolve",
      displayName: name,
      executable: executable || undefined,
    });
    if (!isCurrentGenericProviderDetection(detectionNonce)) return;
    if (!response?.ok) throw new Error(response?.error || "resolve-failed");
    if (response.existingProviderId && !response.canRebindGenericProfile) {
      selectedProviderId = response.existingProviderId;
      providerSelectionExplicit = true;
      await storageSet({ selectedProviderId, providerSelectionExplicit: true });
      genericProviderDetectionActive = false;
      closeCustomProviderDialog();
      renderCompanionState();
      setStatus(`已选择 ${response.displayName || name}。`, "ok");
      return;
    }
    if (response.existingProviderId) {
      // Already saved as a generic environment. Offer to re-probe it: entries
      // saved before invocation templates existed are all bound to the bare
      // stdin form, which is why they can fail on every task.
      genericProviderCandidate = {
        displayName: response.displayName || name,
        executable: response.executable,
        version: response.version || "",
        rebindProviderId: response.existingProviderId,
      };
      document.getElementById("genericProviderSummary").textContent =
        `${genericProviderCandidate.displayName} 已添加过。可以重新确认它的调用方式；若之前的任务一直失败，通常就是调用方式不对。`;
      genericProviderStatus("", "");
      genericProviderDetectionActive = false;
      setGenericProviderStep("confirm");
      document.getElementById("enableGenericProvider").focus();
      return;
    }
    if (!response.found) {
      document.getElementById("genericExecutableField").hidden = false;
      document.getElementById("genericProviderExecutable").focus();
      setGenericProviderDetectionBusy(false, "重新检测");
      genericProviderDetectionActive = false;
      document.getElementById("genericProviderFormTitle").textContent = `未找到 ${name}`;
      genericProviderStatus(`未在 PATH 中找到 ${executable || name}。请填写实际命令名后重新检测。`, "err");
      return;
    }
    genericProviderCandidate = {
      displayName: response.displayName || name,
      executable: response.executable,
      version: response.version || "",
    };
    document.getElementById("genericProviderSummary").textContent = `已找到 ${genericProviderCandidate.displayName}${genericProviderCandidate.version ? `（${genericProviderCandidate.version}）` : ""}。`;
    genericProviderStatus("", "");
    genericProviderDetectionActive = false;
    setGenericProviderStep("confirm");
    document.getElementById("enableGenericProvider").focus();
  } catch (_error) {
    setGenericProviderDetectionBusy(false, "重新检测");
    genericProviderDetectionActive = false;
    genericProviderStatus("自动检测失败，请重新检测或确认该工具已安装。", "err");
  }
}

async function enableGenericProvider() {
  if (!genericProviderCandidate) return;
  const button = document.getElementById("enableGenericProvider");
  button.disabled = true;
  try {
    // Probe before saving: the bridge tries its own invocation templates and
    // reports which one this CLI actually answers on. Without this the
    // environment would save successfully and only fail on the first real
    // task, after the full 15-minute execution timeout.
    genericProviderStatus(
      "正在试调用该工具以确认调用方式，这会消耗一次很小的模型用量…",
      "",
      "genericProviderConfirmStatus",
    );
    const probed = await runtimeMessage({
      action: "companionGenericProviderResolve",
      displayName: genericProviderCandidate.displayName,
      executable: genericProviderCandidate.executable,
      probe: true,
    });
    if (!probed?.ok) throw new Error(probed?.error || "probe-failed");
    if (probed.genericIncompatible || !probed.genericProfileId) {
      genericProviderStatus(
        `${genericProviderCandidate.displayName} 没有响应任何一种桥接支持的非交互调用方式，因此没有保存。`
        + "它可能只支持交互式使用，或需要先完成登录。",
        "err",
        "genericProviderConfirmStatus",
      );
      return;
    }
    genericProviderStatus("正在启用通用调用…", "", "genericProviderConfirmStatus");
    const response = await runtimeMessage({
      action: "companionGenericProviderEnable",
      displayName: genericProviderCandidate.displayName,
      executable: genericProviderCandidate.executable,
      genericProfileId: probed.genericProfileId,
      providerId: genericProviderCandidate.rebindProviderId,
      genericConfirmed: true,
    });
    const providerId = response?.provider?.id || response?.providerId;
    if (!response?.ok || !providerId) throw new Error("enable-failed");
    selectedProviderId = providerId;
    providerSelectionExplicit = true;
    await storageSet({ selectedProviderId, providerSelectionExplicit: true });
    if (!await probeCompanion({ requestPermission: true, refreshCatalog: false })) throw new Error("refresh-failed");
    closeCustomProviderDialog();
    setStatus(
      `已启用 ${genericProviderCandidate.displayName} 的通用调用`
      + `（${probed.genericProfileLabel || probed.genericProfileId}）。每次任务仍会再次确认模型用量。`,
      "ok",
    );
  } catch (_error) {
    genericProviderStatus("无法启用该工具，请重新检测后再试。", "err", "genericProviderConfirmStatus");
  } finally {
    button.disabled = false;
  }
}

async function deleteCustomProvider(entry) {
  if (!entry?.providerId || !confirm(`删除“${entry.displayName}”的本地自定义配置？这不会卸载该 AI 工具。`)) return;
  try {
    const response = await runtimeMessage({ action: "companionCustomProviderDelete", providerId: entry.providerId });
    if (!response?.ok) throw new Error(response?.error || "delete-failed");
    if (selectedProviderId === entry.providerId) {
      selectedProviderId = "";
      providerSelectionExplicit = false;
      await storageSet({ selectedProviderId, providerSelectionExplicit: false });
    }
    await probeCompanion({ requestPermission: true, refreshCatalog: false });
    renderCommonProviderList();
    setStatus("已删除本地自定义环境配置。", "ok");
  } catch (_error) {
    genericProviderStatus("无法删除该本地配置，请重新检测后重试。", "err");
  }
}

function chooseReadyProvider(providers) {
  if (providerSelectionExplicit && providers.some((provider) => provider.id === selectedProviderId)) {
    return selectedProviderId;
  }
  const savedReady = providers.find(
    (provider) => provider.id === selectedProviderId && provider.ready
  );
  if (savedReady) return savedReady.id;
  return providers.find((provider) => provider.id === "claude" && provider.ready)?.id
    || [...providers].sort((left, right) =>
      (left.recommendationOrder ?? 1000) - (right.recommendationOrder ?? 1000))
      .find((provider) => provider.ready)?.id
    || selectedProviderId;
}

async function probeCompanion({ requestPermission = false, resumeIntent = false, refreshCatalog = false } = {}) {
  if (!MAINTENANCE_ENABLED) return false;
  if (companionState === "detecting") return false;
  companionState = "detecting";
  renderCompanionState();
  const dialogStatus = document.getElementById("bridgeDialogStatus");
  if (dialogStatus) {
    dialogStatus.textContent = "正在检测桥接与本机 AI 环境…";
    dialogStatus.className = "status show";
  }
  try {
    const authorized = requestPermission
      ? await requestCompanionPermissions()
      : await hasCompanionPermissions();
    if (!authorized) {
      companionState = "not-authorized";
      renderCompanionState();
      if (dialogStatus) {
        dialogStatus.textContent = "未授权本机桥接权限；基础功能仍可正常使用。";
        dialogStatus.className = "status show warn";
      }
      return false;
    }
    const response = await runtimeMessage({
      action: "companionHandshake",
      protocolVersion: BRIDGE_PROTOCOL_VERSION,
      schemaVersion: BRIDGE_SCHEMA_VERSION,
      refreshCatalog: refreshCatalog === true,
    });
    if (!response?.ok) {
      const outdated = isOutdatedBridgeResponse(response);
      throw Object.assign(new Error(outdated
        ? "已检测到不受支持的本机检测组件版本。"
        : response?.error || "未检测到本机桥接"), { code: outdated ? "bridge_outdated" : response?.code });
    }
    companionHandshake = response;
    const protocolVersion = effectiveBridgeProtocol(response);
    if (!protocolVersion || response.schemaVersion !== BRIDGE_SCHEMA_VERSION) {
      companionState = "outdated";
      throw Object.assign(new Error("桥接协议或数据 Schema 不兼容"), { code: "bridge_outdated" });
    }
    const providers = Array.isArray(response.providers) ? response.providers : [];
    const hasValidCatalogDigest = /^sha256:[a-f0-9]{64}$/.test(response.providerCatalogDigest || "");
    const hasMaintenanceCapabilities = response.capabilities?.dataMaintenance === true
      && Array.isArray(response.capabilities?.supportedActions);
    const validLegacyProviders = protocolVersion !== 3 || providers.every((provider) =>
      ["claude", "codex", "gemini", "opencode"].includes(provider?.id));
    if ((!hasValidCatalogDigest && protocolVersion >= 4)
      || !hasMaintenanceCapabilities || !validLegacyProviders
      || providers.some((provider) => !provider || typeof provider.id !== "string"
        || typeof provider.displayName !== "string")) {
      throw new Error("桥接返回了无效的 AI 环境目录");
    }
    selectedProviderId = chooseReadyProvider(providers);
    companionState = "ready";
    await storageSet({ selectedProviderId, providerSelectionExplicit, bridgeSetupStep: "ready" });
    renderCompanionState();
    if (dialogStatus) {
      const selected = providers.find((provider) => provider.id === selectedProviderId);
      dialogStatus.textContent = (selected?.ready
        ? `桥接已连接，${selected.displayName} 已就绪。请关闭此窗口并再次确认任务。`
        : selected?.transport === "api"
          ? `${selected.displayName} 配置不完整，请在本机检测组件中补全配置后重新检测。`
        : selected?.installed
          ? `${selected.displayName} 已安装但尚未登录。请先完成该工具的登录，然后重新检测。`
          : selected
            ? `桥接已连接，但 ${selected.displayName} 尚未安装。安装并登录后重新检测。`
            : "桥接已连接，但之前选择的 AI 环境已不存在，请关闭窗口后重新选择。")
        + (bridgeUpdateAvailable(response) ? " 当前组件有可选更新，不影响本次检测与既有维护功能。" : "");
      dialogStatus.className = `status show ${selected?.ready ? "ok" : "warn"}`;
    }
    const resumedCommonProviderId = pendingBridgeIntent?.commonProviderId
      || pendingBridgeCommonProviderId;
    if (resumeIntent && resumedCommonProviderId && bridgeSupportsCommonProviderInstall()) {
      const entry = currentCommonProviderEntries().find((item) => item.id === resumedCommonProviderId);
      pendingBridgeIntent = null;
      if (entry) {
        closeBridgeDialog();
        await openCustomProviderDialog();
        await prepareCommonProviderInstall(entry);
        return true;
      }
    }
    const selected = providers.find((provider) => provider.id === selectedProviderId);
    if (resumeIntent && selected?.ready) {
      closeBridgeDialog();
      if (pendingBridgeIntent) {
        const intent = pendingBridgeIntent;
        pendingBridgeIntent = null;
        setStatus(`已检测到 ${selected.displayName}，请再次点击“${intent.label}”确认执行。`, "ok");
      } else {
        setStatus(`已检测到 ${selected.displayName}，可以开始查询或检查更新。`, "ok");
      }
    }
    return true;
  } catch (error) {
    companionHandshake = null;
    companionState = error.code === "bridge_outdated"
      ? "outdated"
      : error.code === "native_handshake_timeout"
        ? "detect-timeout"
      : error.code === "native_host_unavailable"
        ? "not-installed"
        : "error";
    renderCompanionState();
    if (dialogStatus) {
      dialogStatus.textContent = companionState === "outdated"
        ? "检测组件协议不兼容，需要升级后再检测。"
        : companionState === "detect-timeout"
          ? "检测超时，请重新检测。未执行任何模型任务。"
          : companionState === "not-installed"
            ? "未检测到本机检测组件。安装完成后重新检测。"
            : "检测组件异常，请重新检测。未执行任何模型任务。";
      dialogStatus.className = "status show err";
    }
    return false;
  }
}

function companionIntent(mode, payload = {}) {
  const labels = {
    add_tool: `查询并新增 ${payload.display_name || "工具"}`,
    preview_update: `检查 ${payload.display_name || "工具"} 的官方更新`,
    apply_update: "应用已确认的数据修订",
    discard_update: "放弃待处理的数据修订",
    remove_tool: `删除 ${payload.display_name || "自定义工具"}`,
  };
  return { type: mode, label: labels[mode] || "使用本地 AI" };
}

async function ensureCompanionReady(intent) {
  // A maintenance action is also an explicit user gesture. Refresh the
  // catalog if its seven-day lease expired before asking for model consent.
  if (!await probeCompanion({ requestPermission: true, refreshCatalog: true })) {
    if (bridgeInstallerRequired()) await openBridgeDialog(intent);
    return false;
  }
  const providers = Array.isArray(companionHandshake?.providers) ? companionHandshake.providers : [];
  const selected = providers.find((provider) => provider.id === selectedProviderId);
  if (!bridgeSupportsMaintenanceAction(intent.type)) {
    setStatus("当前本机检测组件不支持此维护操作；请升级组件后重试。", "warn");
    await openBridgeDialog({ bridgeUpgrade: true, bridgeFeature: intent.label, label: intent.label });
    return false;
  }
  if (!selected?.ready) {
    setStatus(selected
      ? `${selected.displayName} 尚未就绪。请完成登录或配置后重新检测；不会自动改用其他环境。`
      : "请先从已检测到的 AI 环境中选择一个可用环境。", "warn");
    return false;
  }
  if (intent.type === "apply_update" && DISTRIBUTION.channel === "store"
    && !await requestCompanionPermissions(STORAGE_PERMISSION)) {
    setStatus("未获得完整本地存储权限，已保留当前数据，未应用修订。", "warn");
    return false;
  }
  if (["add_tool", "preview_update"].includes(intent.type)
    && !confirm(`${intent.label}\n\n将使用 ${selected.displayName}${selected.version ? ` ${selected.version}` : ""}，可能计入你自己的模型用量。${selected.source === "custom" ? selected.executionMode === "generic" ? "这是用户确认的通用调用，未经过只读验证；该 CLI 可能发生读写、联网或请求权限。扩展不会通过 Shell 执行它，也不会执行模型返回内容。" : "这是旧版已配置环境；扩展不会通过 Shell 执行它，但该 CLI 的实际行为仍需你自行确认。" : ""}任务失败时不会自动切换环境。是否继续？`)) {
    return false;
  }
  return true;
}

async function loadDynamicData() {
  if (!DYNAMIC_DATA || CAPABILITIES.persistence !== "storage-overlay") return;
  const catalog = Object.fromEntries(Object.entries(catalogData).map(([id, value]) => [id, value.meta]));
  const result = await DYNAMIC_DATA.loadActive(chrome, catalog);
  dynamicOfficialInventories = result.officialInventories;
  dynamicScenarioReviews = result.scenarioReviews;
  dynamicOfficialAdapters = result.officialAdapters || {};
  dynamicSourceRegistries = result.sourceRegistries || {};
  dynamicContentHashes = result.activeContentHashes;
  dynamicConflicts = result.conflicts;
  dynamicToolIds = new Set(Object.keys(result.datasets));
  window.CHEATSHEET_DATA = window.CHEATSHEET_DATA || {};
  for (const [toolId, dataset] of Object.entries(result.datasets)) {
    const bundledHash = catalogData[toolId]?.meta?.contentHash;
    dataset.meta = { ...dataset.meta, dynamic: true };
    window.CHEATSHEET_DATA[toolId] = dataset;
    catalogData[toolId] = { meta: { ...dataset.meta, catalogOnly: false, contentHash: bundledHash || dynamicContentHashes[toolId] }, items: [] };
    if (!TOOL_FILES.includes(toolId)) TOOL_FILES.push(toolId);
  }
}

async function maintenanceContext(toolId) {
  if (dynamicOfficialInventories[toolId] && dynamicScenarioReviews[toolId]) {
    return {
      current_dataset: getAllData()[toolId],
      official_inventory: dynamicOfficialInventories[toolId],
      scenario_review: dynamicScenarioReviews[toolId],
      official_adapter: dynamicOfficialAdapters[toolId],
      source_registry: dynamicSourceRegistries[toolId],
      base_content_hash: catalogData[toolId]?.meta?.contentHash || null,
    };
  }
  try {
    const [inventoryResponse, reviewResponse] = await Promise.all([
      fetch(chrome.runtime.getURL(`shared/official-inventories/${toolId}.json`)),
      fetch(chrome.runtime.getURL(`shared/scenario-reviews/${toolId}.json`)),
    ]);
    if (!inventoryResponse.ok || !reviewResponse.ok) return {};
    return {
      current_dataset: getAllData()[toolId],
      official_inventory: await inventoryResponse.json(),
      scenario_review: await reviewResponse.json(),
      base_content_hash: catalogData[toolId]?.meta?.contentHash || null,
    };
  } catch (_error) {
    return {};
  }
}

async function runCompanionTask(mode, payload = {}) {
  if (!await ensureCompanionReady(companionIntent(mode, payload))) return false;
  companionState = "running";
  renderCompanionState();
  taskController.runTask(mode, {
    ...payload,
    providerId: selectedProviderId,
    providerCatalogDigest: effectiveBridgeProtocol() >= 4
      ? companionHandshake.providerCatalogDigest : undefined,
    bridgeProtocolVersion: effectiveBridgeProtocol(),
    channel: DISTRIBUTION.channel,
  });
  return true;
}

function currentState() {
  return {
    activeTool,
    activeCat,
    activeShellFilter,
    activeEvidence,
    activeExampleFilter,
    favourites,
    recents,
    enabledTools,
    platform,
    expandedTools,
    expandedExamples,
    searchLimit,
    maintenanceReady: MAINTENANCE_ENABLED,
    deletableToolIds: DISTRIBUTION.channel === "store"
      ? new Set([...dynamicToolIds].filter((toolId) => !BUNDLED_TOOL_IDS.has(toolId)))
      : null,
  };
}

function resetResultLimits() {
  expandedTools = new Set();
  searchLimit = STATE.SEARCH_INITIAL_LIMIT;
  browseAll = false;
  selectedResultKey = "";
}

function clearHomeFilters() {
  applyFilter(() => {
    activeTool = "all";
    activeCat = null;
    activeShellFilter = null;
    activeEvidence = null;
    activeExampleFilter = null;
  });
}

function rebuildEntryIndex() {
  entryIndex = STATE.createEntryIndex(getAllData(), enrichmentIndex, CORE);
}

function setStatus(text, kind = "", action = null) {
  const status = document.getElementById("manageStatus");
  status.textContent = text;
  status.className = text ? `status show ${kind}` : "status";
  if (text && action?.label && typeof action.onClick === "function") {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "text-btn status-action";
    button.textContent = action.label;
    button.addEventListener("click", action.onClick);
    status.appendChild(button);
  }
}

// 取消按钮与「返回」一样在任务期间保持可用，因此排除在禁用名单外；
// 它的可见性跟随任务活跃状态。
const disableManageButtons = MAINTENANCE_ENABLED
  ? window.CHEATSHEET_POPUP_TASKS.createButtonDisabler(
    document,
    "#manageView button:not(#closeManage):not(#cancelTask)",
    "#manageView button"
  )
  : () => {};

function setManageButtonsDisabled(disabled) {
  disableManageButtons(disabled);
  const cancelButton = document.getElementById("cancelTask");
  if (cancelButton) cancelButton.hidden = !disabled;
  if (!disabled && companionState === "running") companionState = "ready";
  renderCompanionState();
}

const taskController = MAINTENANCE_ENABLED ? window.CHEATSHEET_POPUP_TASKS.createTaskController({
  chrome,
  setStatus,
  setManageButtonsDisabled,
  storageSet,
  renderPending,
  getCurrentTaskMode: () => currentTaskMode,
  setCurrentTaskMode: (mode) => { currentTaskMode = mode; },
  setPendingUpdate: (value) => { pendingUpdate = value; },
  afterFinish: (mode, response) => {
    if (addingRecommendation) {
      addingRecommendation = null;
      if (document.getElementById("manageView").classList.contains("active")) renderManage();
    }
    if (response?.dynamicChanged) window.location.reload();
  },
}) : null;

function manageIsActive() {
  return document.getElementById("manageView").classList.contains("active");
}

async function recordCopy(entry, command) {
  recents = CORE.updateRecent(recents, { toolId: entry.toolId, itemId: entry.itemId, command }, RECENTS_LIMIT);
  await storageSet({ recentCopies: recents });
}

async function copyText(value, successMessage) {
  try {
    await navigator.clipboard.writeText(value);
    showToast(successMessage);
    return true;
  } catch (_error) {
    showToast("复制失败，请检查浏览器剪贴板权限");
    return false;
  }
}

function showRowCopySuccess(entry) {
  const row = getDOM().main.querySelector(`[data-tool="${entry.toolId}"][data-item="${entry.itemId}"]`);
  row?.classList.add("copy-success");
  const copyButton = row?.querySelector(".copy-btn");
  if (copyButton) copyButton.textContent = "已复制";
  setTimeout(() => {
    row?.classList.remove("copy-success");
    if (copyButton) copyButton.textContent = "复制";
  }, 1200);
}

async function ensureToolData(toolIds) {
  const requested = [...new Set(toolIds)].filter((id) => TOOL_FILES.includes(id) && !getLoadedData()[id]);
  if (!requested.length) return;
  await window.CHEATSHEET_POPUP_LOADER.loadCheatsheetData(document, requested, TOOL_FILES);
  enrichmentIndex = STATE.buildEnrichmentIndex(
    getLoadedData(),
    window.CHEATSHEET_ENRICHMENTS || {},
    window.CHEATSHEET_BUILD_FULL_ENRICHMENTS
  );
  rebuildEntryIndex();
}

async function ensureEnabledToolData() {
  try {
    await ensureToolData([...enabledTools]);
  } catch (error) {
    enabledTools = new Set([...enabledTools].filter((id) => getLoadedData()[id]));
    await storageSet({ enabledTools: [...enabledTools] });
    setStatus(`${error.message}；未加载的工具已自动取消启用。`, "warn");
  }
}

function showView(name) {
  document.getElementById("homeView").classList.toggle("active", name === "home");
  document.getElementById("manageView").classList.toggle("active", name === "manage");
  if (name === "manage") renderManage();
}

function renderFilters() {
  const html = RENDER.renderFilters(getAllData(), STATE, currentState());
  const quick = document.getElementById("quickFilters");
  quick.innerHTML = html.quickHtml;
  quick.querySelectorAll("[data-tool]").forEach((button) => button.addEventListener("click", () => {
    applyFilter(() => {
      activeTool = button.dataset.tool;
      if (activeTool !== "shell") activeShellFilter = null;
    });
  }));

  const tools = document.getElementById("toolFilters");
  tools.innerHTML = html.toolHtml;
  tools.querySelectorAll("[data-tool]").forEach((button) => button.addEventListener("click", () => {
    applyFilter(() => {
      activeTool = button.dataset.tool;
      browseAll = activeTool === "all";
      if (activeTool !== "shell") activeShellFilter = null;
    });
  }));

  const categories = document.getElementById("categoryFilters");
  categories.innerHTML = html.categoryHtml;
  categories.querySelectorAll("[data-cat]").forEach((button) => button.addEventListener("click", () => {
    applyFilter(() => { activeCat = activeCat === button.dataset.cat ? null : button.dataset.cat; });
  }));
  document.getElementById("clearFilters").addEventListener("click", clearHomeFilters);

  const shellFilters = document.getElementById("shellFilters");
  shellFilters.innerHTML = html.shellHtml;
  shellFilters.querySelectorAll("[data-shell-filter]").forEach((button) => button.addEventListener("click", () => {
    applyFilter(() => { activeShellFilter = button.dataset.shellFilter || null; });
  }));
  const evidenceFilters = document.getElementById("evidenceFilters");
  evidenceFilters.innerHTML = html.evidenceHtml;
  evidenceFilters.querySelectorAll("[data-evidence]").forEach((button) => button.addEventListener("click", () => {
    applyFilter(() => { activeEvidence = activeEvidence === button.dataset.evidence ? null : button.dataset.evidence; });
  }));
  const exampleFilters = document.getElementById("exampleFilters");
  exampleFilters.innerHTML = html.exampleHtml;
  exampleFilters.querySelectorAll("[data-example-filter]").forEach((button) => button.addEventListener("click", () => {
    applyFilter(() => { activeExampleFilter = activeExampleFilter === button.dataset.exampleFilter ? null : button.dataset.exampleFilter; });
  }));
  const summary = document.getElementById("filterSummary");
  summary.innerHTML = html.summaryHtml;
  summary.querySelector("[data-clear-filters]")?.addEventListener("click", clearHomeFilters);
  const trigger = document.getElementById("toggleFilters");
  trigger.classList.toggle("has-filter", html.hasFilter);
}

function rankVisibleEntries(query) {
  const state = currentState();
  const entries = STATE.collectEntries(entryIndex, getAllData(), CORE, state);
  const recentOrder = new Map(recents.map((item, index) => [`${item.toolId}::${item.itemId}`, index]));
  const ranked = CORE.rankItems(entries, query, { favourites, recents, platform });
  let relaxed = false;
  if (query.trim() && !ranked.length && CORE.splitQuery(query).length > 1) {
    ranked.push(...CORE.rankItems(entries, query, { favourites, recents, matchMode: "any", platform }));
    relaxed = ranked.length > 0;
  }
  if (activeTool === "recent" && !query.trim()) ranked.sort((a, b) =>
    (recentOrder.get(`${a.toolId}::${a.itemId}`) ?? 99) - (recentOrder.get(`${b.toolId}::${b.itemId}`) ?? 99)
  );
  if (!query.trim() && activeTool === "all" && !activeCat && !browseAll) {
    const recentKeys = recents.map((item) => `${item.toolId}::${item.itemId}`);
    const priority = new Map(recentKeys.map((key, index) => [key, index]));
    const dashboard = ranked.filter((entry) => priority.has(`${entry.toolId}::${entry.itemId}`)
      || favourites.has(`${entry.toolId}::${entry.itemId}`));
    dashboard.sort((a, b) => {
      const aKey = `${a.toolId}::${a.itemId}`;
      const bKey = `${b.toolId}::${b.itemId}`;
      return (priority.get(aKey) ?? RECENTS_LIMIT + 1) - (priority.get(bKey) ?? RECENTS_LIMIT + 1);
    });
    return { entries: dashboard, relaxed };
  }
  return { entries: ranked, relaxed };
}

function render() {
  const dom = getDOM();
  const query = dom.search.value;
  const { entries, relaxed } = rankVisibleEntries(query);
  const normalizedQuery = CORE.normalizeText(query);
  if ((query.trim() || activeTool === "recent" || activeTool === "favourites")
    && normalizedQuery && normalizedQuery !== lastAutoExpandedQuery) {
    if (CORE.normalizeText(entries[0]?.displayCmd) === normalizedQuery) {
      expandedExamples.add(`${entries[0].toolId}::${entries[0].itemId}`);
    }
    lastAutoExpandedQuery = normalizedQuery;
  } else if (!normalizedQuery) {
    lastAutoExpandedQuery = "";
  }

  const filterLabel = STATE.activeFilterLabel(getAllData(), currentState());
  dom.countBar.innerHTML = RENDER.countBarHtml(
    entries,
    query,
    currentState(),
    STATE,
    CORE,
    filterLabel,
    relaxed
  );
  dom.main.innerHTML = RENDER.renderResults(entries, query, currentState(), {
    data: getAllData(),
    core: CORE,
    platform,
    expandedExamples,
    favourites,
    helpers: STATE,
    dismissedRecommendations,
    aiRecommendations,
  });
  const rows = [...dom.main.querySelectorAll(".entry-wrap")];
  if (rows.length && (query.trim() || activeTool === "recent" || activeTool === "favourites")) {
    const selected = rows.find((row) => `${row.dataset.tool}::${row.dataset.item}` === selectedResultKey) || rows[0];
    rows.forEach((row) => row.classList.toggle("is-selected", row === selected));
    selectedResultKey = `${selected.dataset.tool}::${selected.dataset.item}`;
  }
  updateManageBadge();
}

function bindHomeEvents() {
  const debouncedRender = STATE.debounce(render, STATE.SEARCH_DEBOUNCE_MS);
  document.getElementById("search").addEventListener("input", (event) => {
    resetResultLimits();
    storageSet({ lastQuery: event.target.value });
    debouncedRender();
  });
  document.getElementById("toggleFilters").addEventListener("click", () => {
    filtersOpen = !filtersOpen;
    const panel = document.getElementById("filterPanel");
    panel.hidden = !filtersOpen;
    document.getElementById("toggleFilters").setAttribute("aria-expanded", String(filtersOpen));
  });
  document.getElementById("search").addEventListener("keydown", (event) => {
    if (event.key !== "ArrowDown") return;
    const firstRow = document.querySelector("#main .row-main:not(:disabled)");
    if (!firstRow) return;
    firstRow.focus();
    event.preventDefault();
  });
  document.getElementById("clearSearch").addEventListener("click", () => {
    getDOM().search.value = "";
    resetResultLimits();
    storageSet({ lastQuery: "" });
    render();
  });
  document.getElementById("openManage").addEventListener("click", () => showView("manage"));
  document.getElementById("closeManage").addEventListener("click", () => showView("home"));
  getDOM().main.addEventListener("click", handleMainClick);
  getDOM().main.addEventListener("keydown", (event) => {
    const rows = [...document.querySelectorAll("#main .row-main:not(:disabled)")];
    const index = rows.indexOf(document.activeElement);
    if (index < 0) return;
    if (event.key === "ArrowDown" && index < rows.length - 1) rows[index + 1].focus();
    else if (event.key === "ArrowUp" && index > 0) rows[index - 1].focus();
    else return;
    const focused = document.activeElement.closest(".entry-wrap");
    if (focused) {
      document.querySelectorAll("#main .entry-wrap").forEach((row) => row.classList.toggle("is-selected", row === focused));
      selectedResultKey = `${focused.dataset.tool}::${focused.dataset.item}`;
    }
    event.preventDefault();
  });
  document.addEventListener("keydown", (event) => {
    if (document.getElementById("onboarding").classList.contains("show")) return;
    const search = getDOM().search;
    const homeActive = document.getElementById("homeView").classList.contains("active");
    if (!homeActive) return;
    if ((event.key === "/" || ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k"))
      && document.activeElement !== search) {
      search.focus();
      search.select();
      event.preventDefault();
    } else if (event.key === "Escape") {
      if (search.value) {
        search.value = "";
        resetResultLimits();
        storageSet({ lastQuery: "" });
        render();
      } else {
        search.blur();
      }
    }
  });
}

async function handleMainClick(event) {
  if (event.target.closest("[data-clear-filters]")) {
    clearHomeFilters();
    return;
  }
  if (event.target.closest("[data-browse-all]")) {
    browseAll = true;
    render();
    return;
  }
  const queryAdd = event.target.closest("[data-query-add]");
  if (queryAdd) {
    await startAddTool(queryAdd.dataset.queryAdd, queryAdd.dataset.queryWeb === "true");
    return;
  }
  const sourceButton = event.target.closest("[data-source]");
  if (sourceButton) {
    const card = document.getElementById(`source-${sourceButton.dataset.source}`);
    const shown = card?.classList.toggle("show");
    sourceButton.setAttribute("aria-expanded", String(Boolean(shown)));
    return;
  }
  const expandButton = event.target.closest("[data-expand]");
  if (expandButton) {
    expandedTools.add(expandButton.dataset.expand);
    render();
    return;
  }
  if (event.target.closest("[data-more-results]")) {
    searchLimit += STATE.SEARCH_INITIAL_LIMIT;
    render();
    return;
  }
  const entryWrap = event.target.closest(".entry-wrap");
  if (!entryWrap) return;
  const entry = STATE.findEntry(entryIndex, entryWrap.dataset.tool, entryWrap.dataset.item);
  if (!entry) return;
  const key = `${entry.toolId}::${entry.itemId}`;
  const exampleButton = event.target.closest("[data-example]");
  if (exampleButton) {
    const example = entry.item.examples?.[Number(exampleButton.dataset.example)];
    if (!example) return;
    const platformInfo = CORE.getPlatformExample(example, platform);
    const value = platformInfo.value;
    const risk = CORE.classifyCommandRisk(value, [example]);
    if (!await confirmCommandCopy(value, risk, example, platformInfo)) return;
    if (!await copyText(value, `已复制用法：${value}`)) return;
    await recordCopy(entry, value);
    showRowCopySuccess(entry);
    return;
  }
  if (event.target.closest("[data-usage]")) {
    const scrollTop = getDOM().main.scrollTop;
    expandedExamples.has(key) ? expandedExamples.delete(key) : expandedExamples.add(key);
    render();
    getDOM().main.scrollTop = scrollTop;
    return;
  }
  if (event.target.closest("[data-copy-command]")) {
    const platformInfo = CORE.getPlatformCommand(entry.item, platform);
    const command = platformInfo.command;
    const risk = CORE.classifyCommandRisk(command, entry.item.examples || []);
    if (!await confirmCommandCopy(command, risk, entry.item, platformInfo)) return;
    if (!await copyText(command, `已复制命令：${command}`)) return;
    await recordCopy(entry, command);
    showRowCopySuccess(entry);
    return;
  }
  if (event.target.closest(".fav-btn")) {
    favourites.has(key) ? favourites.delete(key) : favourites.add(key);
    await storageSet({ favourites: [...favourites] });
    render();
  }
}

async function handleEnabledToolToggle(checkbox) {
  const toolId = checkbox.dataset.enabled;
  if (checkbox.checked) {
    try {
      await ensureToolData([toolId]);
      enabledTools.add(toolId);
    } catch (error) {
      checkbox.checked = false;
      setStatus(error.message, "warn");
      return;
    }
  } else {
    enabledTools.delete(toolId);
  }
  await storageSet({ enabledTools: [...enabledTools] });
  if (activeTool !== "all" && !enabledTools.has(activeTool)) activeTool = "all";
  renderFilters();
  render();
  renderManage();
}

function renderManage() {
  document.getElementById("platformSelect").value = platform;
  const webToggle = document.getElementById("webVerifyToggle");
  if (webToggle) {
    webToggle.checked = webVerify;
    webToggle.onchange = () => {
      webVerify = webToggle.checked;
      storageSet({ webVerify });
      renderManage();
    };
  }
  const toggles = document.getElementById("manageToolToggles");
  const allToolIds = STATE.getToolIds(getAllData());
  toggles.innerHTML = RENDER.renderManageToolToggles(getAllData(), allToolIds, currentState());
  toggles.querySelectorAll("[data-enabled]").forEach((checkbox) =>
    checkbox.addEventListener("change", () => handleEnabledToolToggle(checkbox)));

  if (!LOCAL_RECOMMENDATIONS_ENABLED) {
    document.getElementById("recommendationPanel").hidden = true;
    updateManageBadge();
    return;
  }

  const recommended = document.getElementById("recommendedTools");
  const recommendSearch = document.getElementById("recommendSearch");
  const showDismissed = document.getElementById("showDismissedRecommendations");
  if (recommendSearch.value !== recommendationQuery) recommendSearch.value = recommendationQuery;
  showDismissed.checked = showDismissedRecommendations;
  const recommendationResult = STATE.filterRecommendedTools(getAllData(), platform, {
    query: recommendationQuery,
    category: activeRecommendationCategory,
    dismissedRecommendations,
    showDismissed: showDismissedRecommendations,
    collectedToolIds: new Set(STATE.getToolIds(getAllData())),
    enabledToolIds: enabledTools,
    favourites,
    recents,
    addingTool: addingRecommendation,
    webVerify,
    batchSize: RECOMMENDATION_BATCH_SIZE,
    batchOffset: recommendationBatchOffset,
    extraRecommendations: aiRecommendations,
  });
  const categoriesEl = document.getElementById("recommendCategories");
  categoriesEl.innerHTML = RENDER.renderRecommendationCategories(recommendationResult);
  categoriesEl.querySelectorAll("[data-recommend-category]").forEach((button) => button.addEventListener("click", () => {
    activeRecommendationCategory = button.dataset.recommendCategory;
    recommendationBatchOffset = 0;
    renderManage();
  }));
  const bulkButton = categoriesEl.querySelector("[data-recommend-bulk]");
  if (bulkButton) bulkButton.addEventListener("click", () => bulkRecommendation(bulkButton.dataset.recommendBulk, recommendationResult));
  const shuffleButton = categoriesEl.querySelector("[data-recommend-shuffle]");
  if (shuffleButton) shuffleButton.addEventListener("click", () => {
    recommendationBatchOffset += RECOMMENDATION_BATCH_SIZE;
    renderManage();
  });
  recommended.innerHTML = RENDER.renderRecommendedTools(recommendationResult);
  recommended.querySelectorAll("[data-recommend-dismiss]").forEach((button) => button.addEventListener("click", () =>
    dismissRecommendation(button.dataset.recommendDismiss, button.dataset.recommendLabel)));
  recommended.querySelectorAll("[data-recommend-restore]").forEach((button) => button.addEventListener("click", async () => {
    dismissedRecommendations.delete(button.dataset.recommendRestore);
    await storageSet({ dismissedRecommendations: [...dismissedRecommendations] });
    renderManage();
  }));
  recommended.querySelectorAll("[data-recommend-add]").forEach((button) => button.addEventListener("click", async () => {
    addingRecommendation = button.dataset.recommendAdd;
    renderManage();
    const started = await startAddTool(button.dataset.recommendAdd, button.dataset.recommendWeb === "true");
    if (!started) {
      addingRecommendation = null;
      renderManage();
    }
  }));

  const tools = document.getElementById("manageTools");
  tools.innerHTML = RENDER.renderManageTools(getAllData(), allToolIds, currentState(), STATE, entryIndex);
  tools.querySelectorAll("[data-enabled]").forEach((checkbox) =>
    checkbox.addEventListener("change", () => handleEnabledToolToggle(checkbox)));
  tools.querySelectorAll("[data-update]").forEach((button) => button.addEventListener("click", async () => {
    const toolId = button.dataset.update;
    try {
      await ensureToolData([toolId]);
      const context = await maintenanceContext(toolId);
      await runCompanionTask("preview_update", {
        tool: toolId,
        display_name: getAllData()[toolId].meta.name,
        prefer_web: true,
        ...context,
      });
    } catch (error) {
      setStatus(`加载 ${getAllData()[toolId]?.meta?.name || toolId} 数据失败：${error.message}`, "err");
    }
  }));
  tools.querySelectorAll("[data-remove]").forEach((button) => button.addEventListener("click", async () => {
    const toolId = button.dataset.remove;
    if (dynamicToolIds.has(toolId) && confirm(`确定删除 ${getAllData()[toolId].meta.name} 的本地动态修订？`)) {
      await DYNAMIC_DATA.removeTool(chrome, toolId);
      window.location.reload();
    } else if (!dynamicToolIds.has(toolId)
      && confirm(`确定删除 ${getAllData()[toolId].meta.name}？源码版会删除本地数据文件。`)) {
      await runCompanionTask("remove_tool", { tool: toolId, display_name: getAllData()[toolId].meta.name });
    }
  }));
  if (MAINTENANCE_ENABLED) {
    renderPending();
    renderCompanionState();
  }
  updateManageBadge();
}

async function dismissRecommendation(tool, label) {
  if (!tool) return;
  dismissedRecommendations.add(tool);
  await storageSet({ dismissedRecommendations: [...dismissedRecommendations] });
  renderManage();
  showUndoToast(`已忽略 ${label || tool}`, async () => {
    dismissedRecommendations.delete(tool);
    await storageSet({ dismissedRecommendations: [...dismissedRecommendations] });
    renderManage();
  });
}

async function bulkRecommendation(action, result) {
  const restore = action === "restore";
  const tools = result.groups
    .flatMap((group) => group.items)
    .filter((item) => (restore ? item.dismissed : !item.dismissed))
    .map((item) => item.tool);
  if (!tools.length) return;
  tools.forEach((tool) => restore ? dismissedRecommendations.delete(tool) : dismissedRecommendations.add(tool));
  await storageSet({ dismissedRecommendations: [...dismissedRecommendations] });
  renderManage();
  if (restore) return;
  showUndoToast(`已忽略 ${tools.length} 个推荐`, async () => {
    tools.forEach((tool) => dismissedRecommendations.delete(tool));
    await storageSet({ dismissedRecommendations: [...dismissedRecommendations] });
    renderManage();
  });
}

function updateManageBadge() {
  const button = document.getElementById("openManage");
  if (!button) return;
  if (!LOCAL_RECOMMENDATIONS_ENABLED) {
    button.textContent = "⚙ 管理";
    button.title = "管理工具和偏好";
    return;
  }
  const count = STATE.countRecommendations(getAllData(), platform, dismissedRecommendations, aiRecommendations);
  button.textContent = count ? `⚙ 管理 · ${count}` : "⚙ 管理";
  button.title = count ? `管理工具和数据（${count} 个推荐可添加）` : "管理工具和数据";
}

function platformDisplayName(value) {
  return { mac: "macOS", windows: "Windows", linux: "Linux" }[value] || value;
}

function platformScope(item) {
  const platforms = Array.isArray(item?.platforms)
    ? [...new Set(item.platforms.filter((value) => ["mac", "windows", "linux"].includes(value)))].sort()
    : [];
  if (!platforms.length) return null;
  return {
    key: platforms.join("+"),
    label: platforms.map(platformDisplayName).join("、"),
  };
}

async function confirmCommandCopy(value, risk, item, platformInfo) {
  const scope = platformInfo?.platformMismatch ? platformScope(item) : null;
  const needsPlatformConfirmation = Boolean(scope && !acknowledgedPlatformScopes.has(scope.key));
  const platformNotice = needsPlatformConfirmation
    ? `此内容适用于 ${scope.label}，当前首选命令平台为 ${platformDisplayName(platform)}。如果要在对应平台或远程环境中使用，可以继续复制。`
    : "";
  const confirmed = await confirmRiskCopy(value, risk, { platformNotice });
  if (confirmed && needsPlatformConfirmation) {
    acknowledgedPlatformScopes.add(scope.key);
    await storageSet({ acknowledgedPlatformScopes: [...acknowledgedPlatformScopes] });
  }
  return confirmed;
}

async function changeManagedPlatform(nextPlatform) {
  if (!["mac", "windows", "linux"].includes(nextPlatform)) return;
  platform = nextPlatform;
  recommendationBatchOffset = 0;
  await storageSet({ platform });
  renderFilters();
  render();
  renderManage();
}

function collectedToolResult(tool, dataset) {
  const name = dataset?.meta?.name || tool;
  if (!enabledTools.has(tool)) {
    return {
      ok: false,
      code: "collected-disabled",
      kind: "warn",
      tool,
      name,
      error: `${name} 已经收录但尚未启用，无需调用 AI 重复新增。`,
    };
  }
  return {
    ok: false,
    code: "collected-enabled",
    kind: "warn",
    error: `${name} 已经收录且已启用；如需核验官方变化，请使用“检查更新”。`,
  };
}

function addToolPayload(displayName, preferWebOverride = null) {
  if (!displayName) return { ok: false, error: "请输入工具名称" };
  const normalized = STATE.normalizeAddTool(displayName);
  const { tool } = normalized;
  if (!tool) return { ok: false, error: "工具名称需要包含英文字母或数字" };
  const scopeHint = STATE.overbroadAddToolHint(displayName, tool);
  if (scopeHint) return { ok: false, error: scopeHint };
  const collected = getAllData()[tool];
  if (collected) return collectedToolResult(tool, collected);
  return {
    ok: true,
    payload: {
      tool,
      display_name: normalized.displayName,
      prefer_web: preferWebOverride === null ? webVerify : Boolean(preferWebOverride),
    },
  };
}

async function startAddTool(displayName, preferWebOverride = null) {
  if (!MAINTENANCE_ENABLED) return false;
  const result = addToolPayload(String(displayName || "").trim(), preferWebOverride);
  if (!result.ok) {
    const action = result.code === "collected-disabled"
      ? {
        label: `启用 ${result.name}`,
        onClick: async () => {
          try {
            await ensureToolData([result.tool]);
            enabledTools.add(result.tool);
            await storageSet({ enabledTools: [...enabledTools] });
            renderFilters();
            render();
            renderManage();
            const input = document.getElementById("addToolName");
            if (input) input.value = "";
            setStatus(`${result.name} 已启用；首选命令平台仍为 ${platformDisplayName(platform)}。`, "ok");
          } catch (error) {
            setStatus(`启用 ${result.name} 失败：${error.message}`, "err");
          }
        },
      }
      : null;
    setStatus(result.error, result.kind || "err", action);
    return false;
  }
  return runCompanionTask("add_tool", result.payload);
}

function renderPending() {
  const panel = document.getElementById("pendingPanel");
  const pending = RENDER.renderPending(pendingUpdate, getAllData());
  panel.hidden = pending.hidden;
  panel.innerHTML = pending.html;
  if (pending.hidden) return;
  const confirmRisk = document.getElementById("confirmRisk");
  if (confirmRisk) confirmRisk.addEventListener("change", () => {
    document.getElementById("applyPending").disabled = !confirmRisk.checked;
  });
  document.getElementById("applyPending").addEventListener("click", () => runCompanionTask("apply_update", {
    token: pendingUpdate.pendingToken,
    confirm_risk: Boolean(confirmRisk?.checked),
  }));
  document.getElementById("discardPending").addEventListener("click", () => runCompanionTask("discard_update", { token: pendingUpdate.pendingToken }));
}

function bindManageEvents() {
  document.getElementById("platformSelect").addEventListener("change", (event) => changeManagedPlatform(event.target.value));
  document.getElementById("clearRecent").addEventListener("click", async () => {
    recents = [];
    await storageSet({ recentCopies: [] });
    setStatus("最近使用已清空", "ok");
    render();
  });
  document.getElementById("rerunOnboarding").addEventListener("click", () => onboarding.showOnboarding(true));
  document.getElementById("recommendSearch").addEventListener("input", (event) => {
    recommendationQuery = event.target.value;
    recommendationBatchOffset = 0;
    renderManage();
  });
  document.getElementById("showDismissedRecommendations").addEventListener("change", (event) => {
    showDismissedRecommendations = event.target.checked;
    recommendationBatchOffset = 0;
    renderManage();
  });
  if (!MAINTENANCE_ENABLED) return;
  document.getElementById("providerSelect").addEventListener("change", async (event) => {
    if (event.target.value === ADD_PROVIDER_SENTINEL) {
      event.target.value = selectedProviderId || "";
      await openCustomProviderDialog();
      return;
    }
    selectedProviderId = event.target.value;
    providerSelectionExplicit = true;
    await storageSet({ selectedProviderId, providerSelectionExplicit: true });
    renderCompanionState();
  });
  document.getElementById("detectBridge").addEventListener("click", async () => {
    const detected = await probeCompanion({
      requestPermission: true,
      // A system installer usually closes the popup. Preserve the Qwen
      // intent across that interruption and continue from the main Detect
      // button when the user returns.
      resumeIntent: Boolean(pendingBridgeCommonProviderId),
      refreshCatalog: true,
    });
    // A compatible legacy bridge is intentionally left alone. Only a missing
    // bridge or one below the supported protocol floor needs installation.
    if (!detected && bridgeInstallerRequired()) await openBridgeDialog();
  });
  document.getElementById("addToolBtn").addEventListener("click", async () => {
    const input = document.getElementById("addToolName");
    if (await startAddTool(input.value)) input.value = "";
  });
  document.getElementById("addToolName").addEventListener("keydown", (event) => {
    if (event.key === "Enter") document.getElementById("addToolBtn").click();
  });
  document.getElementById("cancelTask").addEventListener("click", async () => {
    try {
      const response = await runtimeMessage({ action: "cancelTask" });
      if (!response?.ok) setStatus(response?.error || "取消失败", "err");
    } catch (error) {
      setStatus(error.message, "err");
    }
  });
  document.getElementById("resetDynamicData").addEventListener("click", async () => {
    if (!DYNAMIC_DATA || CAPABILITIES.persistence !== "storage-overlay") {
      setStatus("源码版请通过更新任务应用或还原仓库数据；此按钮只重置商店版本地覆盖。", "warn");
      return;
    }
    if (!confirm("确定清除全部本地动态修订？内置数据、收藏和最近使用不会删除。")) return;
    const count = await DYNAMIC_DATA.resetAll(chrome);
    setStatus(`已清除 ${count} 个本地动态修订，正在重新加载…`, "ok");
    window.location.reload();
  });
  document.getElementById("closeBridgeDialog").addEventListener("click", closeBridgeDialog);
  document.getElementById("bridgeDetect").addEventListener("click", () => probeCompanion({ requestPermission: true, resumeIntent: true, refreshCatalog: true }));
  document.getElementById("bridgeDialog").addEventListener("click", (event) => {
    if (event.target.id === "bridgeDialog") closeBridgeDialog();
  });
  document.getElementById("closeCustomProviderDialog").addEventListener("click", closeCustomProviderDialog);
  document.getElementById("customProviderDialog").addEventListener("click", (event) => {
    if (event.target.id === "customProviderDialog") closeCustomProviderDialog();
  });
  document.getElementById("commonProviderSearch").addEventListener("input", renderCommonProviderList);
  document.getElementById("openOtherProviderFlow").addEventListener("click", () => openGenericProviderFlow());
  document.getElementById("cancelGenericProvider").addEventListener("click", () => {
    cancelGenericProviderDetection();
    genericProviderStatus();
    setGenericProviderStep("list");
    renderCommonProviderList();
  });
  document.getElementById("backGenericProvider").addEventListener("click", () => {
    setGenericProviderDetectionBusy(false);
    genericProviderStatus("", "", "genericProviderConfirmStatus");
    setGenericProviderStep("detect");
    document.getElementById("genericProviderFormTitle").textContent = "检测其他 AI 工具";
    document.getElementById("genericProviderName").focus();
  });
  document.getElementById("backCommonProviderInstall").addEventListener("click", async () => {
    if (commonProviderInstallActive) return;
    pendingCommonProviderInstall = null;
    await clearPendingCommonProviderInstall();
    commonProviderInstallStatus();
    setGenericProviderStep("list");
    renderCommonProviderList();
  });
  document.getElementById("confirmCommonProviderInstall").addEventListener("click", confirmCommonProviderInstall);
  document.getElementById("genericProviderForm").addEventListener("submit", (event) => {
    event.preventDefault();
    resolveGenericProvider(
      document.getElementById("genericProviderName").value,
      document.getElementById("genericProviderExecutable").value
    );
  });
  document.getElementById("enableGenericProvider").addEventListener("click", enableGenericProvider);
}

async function initialize() {
  document.querySelectorAll("[data-dynamic-hidden]").forEach((element) => { element.hidden = true; });
  document.getElementById("main").innerHTML = `<div class="empty loading">正在加载速查表…</div>`;
  let stored;
  try {
    stored = await storageGet(STATE.STORAGE_KEYS);
    platform = stored.platform || platform;
    acknowledgedPlatformScopes = new Set(Array.isArray(stored.acknowledgedPlatformScopes)
      ? stored.acknowledgedPlatformScopes.filter((value) => typeof value === "string" && /^(?:linux|mac|windows)(?:\+(?:linux|mac|windows))*$/.test(value))
      : []);
    if ((stored.dataMigrationVersion || 0) < 2) {
      const migration = STATE.migrateLegacyLinuxState(stored, platform);
      stored = { ...stored, ...migration };
      await storageSet(migration);
    }
    await loadDynamicData();
    const knownToolIds = STATE.getToolIds(getAllData());
    enabledTools = new Set(Array.isArray(stored.enabledTools)
      ? stored.enabledTools.filter((id) => catalogData[id])
      : knownToolIds);
    if (!stored.onboarded) enabledTools = new Set(STATE.TOOL_PRESETS.ai.filter((id) => catalogData[id]));
    await ensureToolData([...enabledTools]);
    favourites = STATE.restoreFavourites(stored.favourites);
    recents = Array.isArray(stored.recentCopies) ? stored.recentCopies : [];
    dismissedRecommendations = new Set(Array.isArray(stored.dismissedRecommendations) ? stored.dismissedRecommendations : []);
    const storedAi = Array.isArray(stored.aiRecommendations) ? stored.aiRecommendations : [];
    aiRecommendations = [];
    if (storedAi.length) storageSet({ aiRecommendations: [] });
    webVerify = stored.webVerify === true;
    selectedProviderId = typeof stored.selectedProviderId === "string"
      ? stored.selectedProviderId.slice(0, 80)
      : "";
    providerSelectionExplicit = stored.providerSelectionExplicit === true
      && Boolean(selectedProviderId);
    pendingBridgeCommonProviderId = typeof stored.pendingBridgeCommonProviderId === "string"
      ? stored.pendingBridgeCommonProviderId : "";
    pendingUpdate = stored.pendingUpdate || null;
    document.getElementById("search").value = stored.lastQuery || "";

    const migrated = STATE.migrateFavourites(getLoadedData(), favourites);
    favourites = migrated.favourites;
    if (migrated.changed) storageSet({ favourites: [...favourites] });
    const pruned = recents.filter((item) => !getLoadedData()[item.toolId]
      || entryIndex.validKeys.has(`${item.toolId}::${item.itemId}`)).slice(0, RECENTS_LIMIT);
    if (pruned.length !== recents.length) {
      recents = pruned;
      storageSet({ recentCopies: recents });
    }
  } catch (error) {
    document.getElementById("main").innerHTML = `<div class="empty">${RENDER.escapeHtml(error.message)}</div>`;
    return;
  }

  bindHomeEvents();
  bindManageEvents();
  onboarding.bindOnboarding();
  riskDialog.bindRiskDialog();
  renderFilters();
  render();
  renderManage();
  if (dynamicConflicts.length) {
    setStatus(`有 ${dynamicConflicts.length} 个本地覆盖因内置数据已更新而暂停，请重新核验后再应用。`, "warn");
  }
  if (stored.lastQualityWarnings?.messages?.length
    && Date.now() - (stored.lastQualityWarnings.createdAt || 0) < QUALITY_WARNING_TTL_MS) {
    setStatus(`⚠ ${stored.lastQualityWarnings.messages.join("\n⚠ ")}`, "warn");
  }

  if (MAINTENANCE_ENABLED) {
    chrome.runtime.onMessage.addListener((message) => {
      if (message.action === "taskComplete") taskController.finishTask(message.response);
    });
    chrome.runtime.sendMessage({ action: "getTaskStatus" }, (status) => {
      if (chrome.runtime.lastError || !status) return;
      if (status.running) {
        currentTaskMode = status.mode;
        taskController.startTaskTimer(status.mode, status.startedAt || Date.now(), status);
        setManageButtonsDisabled(true);
      } else if (status.result && status.finishedAt && Date.now() - status.finishedAt < TASK_RESULT_FRESH_MS) {
        currentTaskMode = status.mode;
        taskController.finishTask(status.result, status.mode);
        chrome.storage.session.set({ taskStatus: { running: false } });
      }
    });
    renderCompanionState();
  }
  if (!stored.onboarded) {
    onboarding.showOnboarding();
  } else {
    document.getElementById("search").focus();
  }
}

if (window.CHEATSHEET_ENABLE_TEST_HOOKS) {
  window.CHEATSHEET_POPUP_TESTS = {
    state: STATE,
    render: RENDER,
    tasks: window.CHEATSHEET_POPUP_TASKS,
    distribution: DISTRIBUTION,
    confirmRiskCopy,
    closeRiskDialog,
    confirmCommandCopy,
    setPreferredCommandPlatformForTest: (value) => {
      if (["mac", "windows", "linux"].includes(value)) platform = value;
    },
    setAcknowledgedPlatformScopes: (values) => {
      acknowledgedPlatformScopes = new Set(Array.isArray(values) ? values : []);
    },
    getAcknowledgedPlatformScopes: () => [...acknowledgedPlatformScopes],
    trapDialogFocus: (dialog, event) => DIALOGS.trapDialogFocus(document, dialog, event),
    addToolPayload,
    rankVisibleEntries,
  };
}

document.addEventListener("DOMContentLoaded", initialize);
