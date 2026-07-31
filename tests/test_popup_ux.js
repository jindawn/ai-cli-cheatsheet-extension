"use strict";

const assert = require("assert");
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const html = fs.readFileSync(path.join(root, "popup.html"), "utf8");
const css = fs.readFileSync(path.join(root, "popup.css"), "utf8");
const core = require("../product-core.js");
const state = require("../popup-state.js");
const render = require("../popup-render.js");
const toast = require("../popup-toast.js");
const dialogs = require("../popup-dialogs.js");
const loader = require("../popup-loader.js");

assert(html.includes('id="toggleFilters"') && html.includes('aria-controls="filterPanel"'), "secondary filters should use an accessible disclosure");
assert(html.includes('id="toolFilters"'), "the filter panel should retain complete tool filtering");
assert(html.includes('id="categoryFilters" class="filters"'), "the filter panel should retain category filtering");
assert(html.includes('id="evidenceFilters"') && html.includes('id="exampleFilters"'), "quality and usage facets should be available");
assert(html.includes('class="search-shortcut"'), "search should display its keyboard shortcut");
assert(html.includes('id="shellFilters"'), "Shell-specific filters should have a dedicated container");
assert(html.includes('id="developerCommandFilters"'), "developer command scenarios need a dedicated always-visible container");
assert(html.includes("Git / Unix / Linux / Shell"), "terminal onboarding preset should expose Unix, Linux and Shell");
assert(html.includes("个性化推荐") && !/id="recommendationPanel"[^>]*hidden/.test(html), "local recommendations must be visible in every channel");
assert(!html.includes('id="localAiPanel"') && html.includes('id="bridgeDialog"'), "bridge setup should use a compact dialog rather than a permanent panel");
assert(html.includes('id="bridgeSteps"'), "bridge setup should expose channel-specific installation steps");
assert(!html.includes('bridge-extension-id') && !html.includes('copyBridgeExtensionId'), "bridge setup must not expose extension IDs or copy controls to users");
assert(!html.includes('bridge-source-command') && !html.includes('copyProviderApiCommand'), "the popup must not require terminal commands or command copying");
assert(!html.includes('id="providerApiForm"') && !html.includes('id="providerApiDialog"'), "the extension should only display bridge-configured compatible APIs, not collect API credentials");
assert(!html.includes('id="aiSuggestBtn"') && html.includes('id="addToolBtn"'), "query-and-add should return without restoring AI re-recommendations");
assert(html.includes('id="recommendedTools"'), "management view should expose recommended tool additions");
assert(html.includes('id="recommendSearch"'), "recommended tool additions should be searchable");
assert(html.includes('id="showDismissedRecommendations"'), "dismissed recommendations should be restorable");
assert(html.includes('id="cancelTask"') && html.includes('id="pendingPanel"'), "maintenance tasks need cancellation and preview controls");
assert(html.includes('id="providerSelect"') && html.includes("检测本机 AI 环境后选择"), "maintenance should wait for the dynamic provider handshake");
assert(html.includes('id="detectBridge"') && html.includes('class="detect-spinner"') && html.includes('aria-busy="false"'), "Detect should expose an accessible loading indicator");
assert(!html.includes('id="addProviderEnvironment"') && !html.includes('id="providerSetup"'), "maintenance should keep provider discovery to one automatic detection action");
assert(html.includes('id="customProviderDialog"') && html.includes('id="commonProviderSearch"') && html.includes('id="openOtherProviderFlow"'), "adding an environment should use one on-demand dialog with common tools and a fallback flow");
assert(!html.includes('id="providerApiForm"') && !html.includes('id="providerCatalogUpdate"'), "the maintenance panel must not grow manual provider-management controls");
assert(html.includes('id="genericProviderName"') && html.includes('id="genericProviderExecutable"') && html.includes('id="enableGenericProvider"'), "an unknown provider should need only a name, optional command fallback, and one confirmation");
for (const removedField of ["customProviderDriver", "customProviderArgs", "customProviderLogin", "customProviderReadOnly"]) {
  assert(!html.includes(`id="${removedField}"`), `the simplified flow must not expose ${removedField}`);
}
assert(!html.includes('<option value="claude">'), "provider options must not be hard-coded in HTML");
assert(html.includes("数据维护与高级操作") && html.includes("查询并新增"), "maintenance must stay collapsed while exposing the restored workflow");
const bridgePopupSource = fs.readFileSync(path.join(root, "popup.js"), "utf8");
assert(bridgePopupSource.includes("providers.filter(matches)") && bridgePopupSource.includes("left.recommendationOrder"), "provider options should be grouped and sorted from handshake data");
assert(!bridgePopupSource.includes("const PROVIDER_LABELS"), "provider display names must come from the bridge registry");
assert(!bridgePopupSource.includes("bridgeSourceInstallCommand") && !bridgePopupSource.includes("providerApiConfigureCommand"), "the popup must not generate terminal installation or configuration commands");
assert(!bridgePopupSource.includes("refreshSignedProviderCatalog") && !bridgePopupSource.includes("openProviderApiDialog"), "the popup must not expose manual provider or compatible API configuration");
assert(bridgePopupSource.includes('companionState === "detecting"') && bridgePopupSource.includes('detectButton.classList.toggle("is-loading", detecting)') && bridgePopupSource.includes('detectButton.setAttribute("aria-busy", detecting ? "true" : "false")'), "Detect should disable duplicates and expose a busy state while scanning");
assert(bridgePopupSource.includes('refreshCatalog: refreshCatalog === true') && bridgePopupSource.includes('refreshCatalog: true'), "only explicit detection and maintenance actions may ask the bridge to refresh its signed catalog");
assert(bridgePopupSource.includes('ADD_PROVIDER_SENTINEL') && bridgePopupSource.includes('＋ 添加 AI 环境…'), "the dynamic provider selector should contain the only add-environment entry");
assert(bridgePopupSource.includes('shared/common-provider-catalog.json') && bridgePopupSource.includes('customProviderDialog'), "common environments should load only when the add dialog opens");
assert(bridgePopupSource.includes('companionGenericProviderResolve') && bridgePopupSource.includes('companionGenericProviderEnable'), "generic providers should be detected and enabled through the local bridge");
assert(bridgePopupSource.includes('未经过只读验证') && bridgePopupSource.includes('不会通过 Shell 执行它'), "generic-provider tasks need an explicit responsibility confirmation");
assert(html.includes('id="genericProviderFormTitle"') && html.includes('aria-busy="false"'), "common-provider detection should have a visible busy state");
assert(bridgePopupSource.includes('genericProviderBridgeFailureMessage') && bridgePopupSource.includes('未在 PATH 中找到'), "missing or failed provider detection must remain visible with a safe explanation");
assert(bridgePopupSource.includes('未检测到 · 可补充命令名'), "undetected common providers should explain that an executable-name fallback is available");
const resolveGenericMatch = bridgePopupSource.match(/async function resolveGenericProvider\([\s\S]*?\n\}\n\nasync function enableGenericProvider/);
assert(resolveGenericMatch, "generic provider resolution should have a dedicated interaction flow");
assert(resolveGenericMatch[0].indexOf('beginGenericProviderDetection') < resolveGenericMatch[0].indexOf('await probeCompanion'), "the visible generic detection state must render before the bridge request");
assert(bridgePopupSource.includes('genericProviderDetectionNonce') && bridgePopupSource.includes('isCurrentGenericProviderDetection'), "closing or retrying detection must not allow stale bridge results to overwrite the active view");
assert(bridgePopupSource.includes('"detect-timeout": "检测超时，请重新检测。未执行任何模型任务。"'), "handshake timeouts should be concise and safe for the UI");
assert(bridgePopupSource.includes('"registration-conflict": "检测到旧的本机组件注册冲突，请安装当前版本修复。"'),
  "a forbidden legacy host must be shown as a registration conflict");
assert(bridgePopupSource.includes('"start-failed": "本机检测组件已注册但无法启动，请重新安装当前版本。"'),
  "a registered host that cannot start must not be shown as absent");
assert(!bridgePopupSource.includes("companionErrorDetail") && bridgePopupSource.includes("检测组件异常，请重新检测。未执行任何模型任务。"), "unexpected bridge failures should use a concise fixed message instead of raw host text");
assert(bridgePopupSource.includes('status.className = `meta${isCompanionError ? " err" : isCompanionWarning ? " warn" : ""}`') && bridgePopupSource.includes('status.setAttribute("role", isCompanionError ? "alert" : "status")'), "unexpected bridge failures must be announced as red alerts while upgrade states remain warnings");
// The dropdown and the environment cards read the same handshake status, so
// they must never disagree about whether an environment is ready. `ready` is
// true for loginState "unknown" too, because some CLIs have no non-generating
// auth check — the cards used to call that "已验证，已就绪".
const entryStateMatch = bridgePopupSource.match(
  /\/\/ `ready` is true for loginState "unknown"[\s\S]*?\nfunction providerEntryState\(entry\) \{[\s\S]*?\n\}\n/,
);
assert(entryStateMatch, "common provider cards should derive their label from one shared helper");
const entryStateContext = { bridgeInstallersAvailable: () => false };
vm.runInNewContext(`${entryStateMatch[0]}\nthis.entryState = providerEntryState;`, entryStateContext);
for (const adapterStatus of ["built-in", "custom", "configuration-required"]) {
  const unknown = entryStateContext.entryState({
    adapterStatus, installed: true, ready: true, loginState: "unknown",
    registeredProviderId: "qwen", registeredSource: adapterStatus === "custom" ? "custom" : "builtin",
  });
  assert(!unknown.label.includes("已就绪"), `${adapterStatus} with an unverified login must not claim readiness`);
  assert.strictEqual(unknown.className, "", `${adapterStatus} with an unverified login must not use the ready style`);
  const timedOut = entryStateContext.entryState({
    adapterStatus, installed: false, ready: false, loginState: "probe-timeout",
    registeredProviderId: "qwen", registeredSource: adapterStatus === "custom" ? "custom" : "builtin",
  });
  assert(timedOut.label.includes("检测超时"), `${adapterStatus} must report a timed-out probe as such`);
}
const verified = entryStateContext.entryState({
  adapterStatus: "built-in", installed: true, ready: true, loginState: "logged-in",
});
assert.strictEqual(verified.label, "已验证，已就绪", "a verified login should still read as ready");
assert.strictEqual(verified.className, "ready");
const noInstaller = entryStateContext.entryState({
  adapterStatus: "built-in", installed: false, ready: false, installation: { state: "unsupported" },
});
assert(!noInstaller.label.includes("一键安装"), "a tool without an installer profile must not imply one exists");
assert(bridgePopupSource.includes('provider.loginState === "probe-timeout" ? " · 检测超时"'), "the provider dropdown should surface a timed-out probe");
assert(bridgePopupSource.includes('["timeout", "本次检测超时"'), "a timed-out probe must not be grouped as an environment still to install");
assert(bridgePopupSource.includes("data-refresh-provider") && bridgePopupSource.includes("companionProviderRefresh"), "each detected environment should be re-detectable on its own");

// The install dialog must never present a state with no way forward. A brand-new
// install with no installer used to be handed the upgrade wording ("keep using
// the AI environments you already detected") plus zero actionable controls.
const dialogPlanMatch = bridgePopupSource.match(
  /\/\/ Pure so every state combination can be asserted directly\.[\s\S]*?\nfunction bridgeDialogPlan\(\{[\s\S]*?\n\}\n/,
);
assert(dialogPlanMatch, "the bridge dialog should derive its copy from one pure helper");
const planContext = {};
vm.runInNewContext(`${dialogPlanMatch[0]}\nthis.plan = bridgeDialogPlan;`, planContext);
const planArgs = { version: "9.9.9", unsignedNotice: "系统会提示未签名" };
for (const trust of ["signed", "unsigned", "none"]) {
  for (const upgrading of [false, true]) {
    const plan = planContext.plan({
      ...planArgs, trust, upgrading, featureUpgrade: false, bridgeFeature: "",
    });
    // Every state needs at least one control: a download, or a link out.
    const hasWayForward = plan.showDownloads || Boolean(plan.fallbackLinkLabel)
      || (upgrading && Boolean(plan.fallbackNote));
    assert(hasWayForward, `trust=${trust} upgrading=${upgrading} must offer a way forward`);
    assert(plan.steps.length >= 2, `trust=${trust} upgrading=${upgrading} should keep concrete steps`);
    assert(!plan.intro.includes("本地预览"), "a released package must not call itself a local preview");
    if (!upgrading) {
      assert(
        !plan.steps.concat(plan.intro).join(" ").includes("继续使用已经检测到的"),
        `a fresh install (trust=${trust}) must not claim the user already detected environments`,
      );
    }
  }
}
const freshNoInstaller = planContext.plan({ ...planArgs, trust: "none", upgrading: false });
assert(freshNoInstaller.fallbackLinkLabel, "a fresh install without an installer must still link somewhere");
assert(freshNoInstaller.intro.includes("暂时不可用"), "a fresh install without an installer must say maintenance is unavailable");
const unsignedPlan = planContext.plan({ ...planArgs, trust: "unsigned", upgrading: false });
assert(unsignedPlan.showDownloads, "an unsigned installer must still be offered for download");
assert(unsignedPlan.steps[0] === planArgs.unsignedNotice, "an unsigned installer must warn about the OS prompt first");

// Verified on macOS 26.5.1: an unsigned .pkg is rejected by Gatekeeper
// (`spctl --assess --type install` → "rejected: no usable signature"), so the
// bypass instructions have to be right. macOS 15 removed the Control-click
// bypass for applications, and that shortcut cannot be verified for installer
// packages here, so the copy must route through System Settings, which is valid
// on every supported release.
const noticeMatch = bridgePopupSource.match(
  /\/\/ Whichever OS prompt an unsigned installer trips[\s\S]*?\nfunction unsignedInstallerNotice\([\s\S]*?\n\}\n/,
);
assert(noticeMatch, "the unsigned-installer notice should live in one helper");
const noticeContext = { runtimeOperatingSystem: () => "mac" };
vm.runInNewContext(`${noticeMatch[0]}\nthis.notice = unsignedInstallerNotice;`, noticeContext);
const macNotice = noticeContext.notice("mac");
assert(macNotice.includes("系统设置"), "macOS guidance must route through System Settings");
assert(!macNotice.includes("Control"), "macOS guidance must not rely on the Control-click bypass removed in macOS 15");
assert(/先双击|双击时/.test(macNotice), "macOS guidance must say the block happens on the first open attempt");
for (const os of ["mac", "windows", "linux"]) {
  const notice = noticeContext.notice(os);
  assert(notice.length > 20, `${os} needs an actionable unsigned-installer notice`);
  assert(!/```|\$ |sudo |bash /.test(notice), `${os} notice must not contain a terminal command`);
}
const signedPlan = planContext.plan({ ...planArgs, trust: "signed", upgrading: false });
assert(signedPlan.showDownloads && !signedPlan.steps.includes(planArgs.unsignedNotice), "a signed installer needs no unsigned warning");
const repairPlan = planContext.plan({
  ...planArgs, trust: "signed", upgrading: false, repairing: true,
});
assert(repairPlan.title.includes("修复") && repairPlan.intro.includes("独立的商店组件注册"),
  "registration conflicts must offer the isolated store-host installer as a repair");

const outdatedMatch = bridgePopupSource.match(/function isOutdatedBridgeResponse\(response\) \{[\s\S]*?\n\}\n\nfunction companionStateForBridgeError/);
assert(outdatedMatch, "popup should classify incompatible bridge handshakes");
const outdatedContext = {
  BRIDGE_PROTOCOL_VERSION: 5,
  MIN_COMPATIBLE_BRIDGE_PROTOCOL_VERSION: 3,
  BRIDGE_SCHEMA_VERSION: 2,
};
vm.runInNewContext(`${outdatedMatch[0].replace(/\n\nfunction companionStateForBridgeError$/, "")}\nthis.isOutdated = isOutdatedBridgeResponse;`, outdatedContext);
assert.strictEqual(outdatedContext.isOutdated({ protocolVersion: 3, schemaVersion: 2 }), false, "a v3 bridge response must stay eligible for compatibility negotiation");
assert.strictEqual(outdatedContext.isOutdated({ protocolVersion: 4, schemaVersion: 2 }), false, "a v4 bridge response must stay eligible for compatibility negotiation");
assert.strictEqual(outdatedContext.isOutdated({ protocolVersion: 2, schemaVersion: 2 }), true, "a bridge below the compatibility floor must require an upgrade");
assert.strictEqual(outdatedContext.isOutdated({ protocolVersion: 5, schemaVersion: 2 }), false, "the current bridge protocol must remain valid");
assert.strictEqual(outdatedContext.isOutdated({ code: "bridge_migration_required" }), true,
  "a reachable legacy bridge must require the store-host migration");
const errorStateMatch = bridgePopupSource.match(
  /function companionStateForBridgeError\(code\) \{[\s\S]*?\n\}\n\nfunction effectiveBridgeProtocol/,
);
assert(errorStateMatch, "bridge error codes should map to explicit popup states in one place");
const errorStateContext = {};
vm.runInNewContext(
  `${errorStateMatch[0].replace(/\n\nfunction effectiveBridgeProtocol$/, "")}\nthis.stateForError = companionStateForBridgeError;`,
  errorStateContext,
);
for (const [code, expected] of [
  ["native_host_not_found", "not-installed"],
  ["native_host_forbidden", "registration-conflict"],
  ["native_host_start_failed", "start-failed"],
  ["native_handshake_timeout", "detect-timeout"],
  ["bridge_outdated", "outdated"],
  ["bridge_migration_required", "migration-required"],
]) {
  assert.strictEqual(errorStateContext.stateForError(code), expected, `${code} must remain distinguishable`);
}
assert(bridgePopupSource.includes("bridgeInstallerRequired") && bridgePopupSource.includes("await probeCompanion({ requestPermission: true, refreshCatalog: true })"), "maintenance should detect first and open installation only when needed");
assert(bridgePopupSource.includes("if (entry.requiresBridgeUpgrade)") && bridgePopupSource.includes("closeCustomProviderDialog();\n    await openBridgeDialog({"), "a known legacy bridge must open the upgrade dialog directly instead of leaving Qwen in a detection form");
assert(bridgePopupSource.includes("commonProviderId: entry.id") && bridgePopupSource.includes("pendingBridgeCommonProviderId"), "a bridge upgrade should remember the selected common provider and resume its installation preparation after detection");
assert(bridgePopupSource.includes("resumeIntent: Boolean(pendingBridgeCommonProviderId)"), "the main Detect control must resume a Qwen setup after the system installer closes the popup");
assert(bridgePopupSource.includes("检测组件发布后可安装") && bridgePopupSource.includes("不会显示失效下载链接"), "a source preview without verified assets must not advertise a dead one-click installer");
assert(html.includes('id="commonProviderInstallConfirm"') && html.includes('id="confirmCommonProviderInstall"'), "common providers should use a dedicated one-click installation confirmation");
assert(bridgePopupSource.includes("companionCommonProviderInstallPrepare") && bridgePopupSource.includes("companionCommonProviderInstall"), "the popup must prepare and confirm a bridge-owned common-provider installation");
assert(bridgePopupSource.includes("安装完成，正在自动重新检测") && bridgePopupSource.includes("finishCommonProviderInstall"), "a completed installation must automatically rescan before changing the selected provider");
assert(!html.includes("npm install") && !bridgePopupSource.includes("@qwen-code/qwen-code"), "the extension UI must never expose a package-manager command");
assert(bridgePopupSource.includes("effectiveProtocolVersion") && bridgePopupSource.includes("bridgeSupportsCommonProviderInstall") && bridgePopupSource.includes("bridgeSupportsDynamicProviderSetup"), "the popup must negotiate legacy bridge capabilities instead of requiring an exact bridge version");
assert(bridgePopupSource.includes("检测组件有可选更新，不影响当前扫描和维护功能。"), "optional bridge updates must not be styled as detection failures");
assert(css.includes(":focus-visible"), "interactive controls need visible keyboard focus");
assert(state.STORAGE_KEYS.includes("dismissedRecommendations"), "dismissed recommendations should be persisted");
assert(state.STORAGE_KEYS.includes("providerSelectionExplicit"), "explicit provider choice should be persisted separately from automatic defaults");
assert(state.STORAGE_KEYS.includes("pendingBridgeCommonProviderId"), "an interrupted bridge upgrade should resume the selected common-provider setup after redetection");
assert(state.STORAGE_KEYS.includes("acknowledgedPlatformScopes"), "one-time cross-platform copy acknowledgements should be persisted locally");
assert(html.includes("首选命令平台") && !html.includes("<span>当前平台</span>"), "platform selection should describe a command preference rather than an access gate");
const lazyManageHtml = render.renderManageTools({
  lazy: { meta: { id: "lazy", name: "Lazy Tool", catalogOnly: true, builtIn: true }, items: [] },
}, ["lazy"], { enabledTools: new Set(), maintenanceReady: true, deletableToolIds: new Set() }, state, { entries: [] });
assert(lazyManageHtml.includes('data-update="lazy"'), "disabled lazy tools must still expose check-update and load on demand");
const componentCoverageHtml = render.renderManageTools({
  linux: {
    meta: {
      id: "linux", name: "Linux 系统工具", builtIn: true, platforms: ["linux"],
      source: "Pinned upstream releases", sources: [], verificationStatus: "manual",
      officialCoverage: {
        status: "complete", covered: 262, total: 262, checkedAt: "2026-07-23",
        componentCounts: { "procps-ng": 20, systemd: 81, "util-linux": 143, iproute2: 19 },
      },
    },
    items: [],
  },
}, ["linux"], { enabledTools: new Set(["linux"]), maintenanceReady: false, deletableToolIds: new Set() }, state, { entries: [] });
assert(componentCoverageHtml.includes("组件闭合：procps-ng 20 · systemd 81 · util-linux 143 · iproute2 19"), "management quality details should expose per-component closure counts");
assert(css.includes("prefers-reduced-motion"), "motion must respect the reduced-motion preference");
assert(css.includes("@keyframes detect-spin") && css.includes(".detect-btn.is-loading .detect-spinner"), "Detect should visibly spin while scanning");
assert(html.includes('<link rel="stylesheet" href="popup.css">'), "popup styles should live in the external stylesheet");
assert(!html.includes("<style>"), "popup.html should not retain an inline stylesheet");
assert(/id="countBar"[^>]*aria-live="polite"/.test(html), "result count must be announced to screen readers");
assert(/id="countBar"[^>]*role="status"/.test(html), "count bar should be a status region");
assert(
  html.includes('<script src="popup-state.js"></script>')
    && html.includes('<script src="popup-render.js"></script>')
    && html.includes('<script src="popup-toast.js"></script>')
    && html.includes('<script src="popup-dialogs.js"></script>')
    && html.includes('<script src="popup-loader.js"></script>')
    && html.includes('<script src="popup-tasks.js"></script>')
    && html.indexOf('popup-state.js') < html.indexOf('popup.js')
    && html.indexOf('popup-render.js') < html.indexOf('popup-toast.js')
    && html.indexOf('popup-toast.js') < html.indexOf('popup-dialogs.js')
    && html.indexOf('popup-dialogs.js') < html.indexOf('popup-loader.js')
    && html.indexOf('popup-loader.js') < html.indexOf('popup.js'),
  "popup modules must load before popup.js"
);

const data = {
  alpha: {
    meta: {
      id: "alpha",
      name: "Alpha",
      color: "#336699",
      builtIn: true,
      source: "Alpha docs",
      sources: [{
        id: "alpha-docs",
        title: "Alpha Docs",
        kind: "official-repository",
        maintainer: "Alpha",
        evidenceTier: "first-party",
        url: "https://example.com/alpha",
      }],
      updatePolicy: "version-driven",
      coverage: "Alpha coverage",
      platforms: ["mac", "windows"],
    },
    items: [
      {
        id: "open-item",
        cat: "shortcut",
        cmd: "Cmd+P",
        platformCmds: { windows: "Ctrl+P" },
        en: "Open file",
        zh: "打开文件",
        evidenceStatus: "verified",
        evidenceRefs: [{ sourceId: "alpha-docs", claims: ["existence", "semantics"], locator: "README" }],
      },
      {
        id: "danger-item",
        cat: "slash",
        cmd: "rm -rf ./tmp",
        en: "Remove temporary files",
        zh: "删除临时文件",
        evidenceStatus: "partial",
        examples: [{
          value: "rm -rf ./tmp",
          description: "删除临时目录",
          warning: "会删除文件",
          authorship: "editorial",
          evidenceTier: "none",
          adaptation: "scenario-derived",
        }],
      },
    ],
  },
  beta: {
    meta: {
      id: "beta",
      name: "Beta",
      color: "#663399",
      builtIn: true,
      source: "Beta docs",
      sources: [],
      updatePolicy: "manual-only",
    },
    items: [{
      id: "linux-only",
      cat: "flag",
      cmd: "Ctrl+L",
      platforms: ["linux"],
      en: "Clear terminal",
      zh: "清空终端",
      evidenceStatus: "unverified",
    }],
  },
  shell: {
    meta: {
      id: "shell",
      name: "Shell",
      color: "#1E1E1E",
      builtIn: true,
      source: "Shell docs",
      sources: [],
      updatePolicy: "manual-only",
    },
    items: [
      {
        id: "posix-cd",
        cat: "slash",
        cmd: "cd",
        en: "Change directory",
        zh: "切换目录",
        shell: { layer: "builtin", family: "posix-sh", portability: "posix", topic: "builtins" },
        evidenceStatus: "unverified",
      },
      {
        id: "bash-complete",
        cat: "slash",
        cmd: "complete",
        en: "Define completion rules",
        zh: "定义补全规则",
        shell: { layer: "builtin", family: "bash", portability: "bash", topic: "completion" },
        evidenceStatus: "unverified",
      },
    ],
  },
};

const enrichmentIndex = state.buildEnrichmentIndex(data, {
  alpha: {
    "Cmd+P\0": {
      keywords: ["文件"],
      examples: [{
        value: "Cmd+P",
        description: "打开文件列表",
        authorship: "editorial",
        evidenceTier: "first-party",
        adaptation: "adapted",
        sourceIds: ["alpha-docs"],
      }],
    },
  },
});
const entryIndex = state.createEntryIndex(data, enrichmentIndex);

const baseState = {
  activeTool: "all",
  activeCat: null,
  activeShellFilter: null,
  enabledTools: new Set(["alpha", "beta", "shell"]),
  favourites: new Set(["alpha::danger-item"]),
  recents: [
    { toolId: "alpha", itemId: "danger-item" },
    { toolId: "alpha", itemId: "open-item" },
  ],
  platform: "windows",
  expandedTools: new Set(),
  expandedExamples: new Set(),
  searchLimit: 100,
};

const filters = render.renderFilters(data, state, { ...baseState, activeTool: "alpha", activeCat: "shortcut" });
assert(filters.quickHtml.includes('data-tool="recent"') && filters.quickHtml.includes('data-tool="favourites"'), "quick filters should focus on recent and favourites");
assert(filters.toolHtml.includes('data-tool="alpha"') && filters.toolHtml.includes("active"), "active tool chip should render in the filter panel");
assert(filters.categoryHtml.includes('data-cat="shortcut"') && filters.categoryHtml.includes("active"), "active category chip should render");
assert(filters.summaryHtml.includes("当前筛选") && filters.summaryHtml.includes("data-clear-filters"), "active filters should render a clearable summary");
const qualityFilters = render.renderFilters(data, state, { ...baseState, activeEvidence: "verified", activeExampleFilter: "platform-examples" });
assert(qualityFilters.evidenceHtml.includes('data-evidence="verified"') && qualityFilters.evidenceHtml.includes("active"), "verified facet should render active state");
assert(qualityFilters.exampleHtml.includes('data-example-filter="platform-examples"'), "platform usage facet should render");

const macRecommendations = state.recommendedTools(data, "mac");
assert.deepStrictEqual(macRecommendations.slice(0, 3).map((item) => item.tool), ["ghostty", "warp", "wezterm"], "macOS recommendations should sort by priority");
assert(macRecommendations.some((item) => item.tool === "ghostty"), "macOS recommendations should include common terminals");
assert(!macRecommendations.some((item) => item.tool === "windows-terminal"), "macOS recommendations should not include Windows-only tools");
assert(!state.recommendedTools({ ...data, ghostty: { meta: { name: "Ghostty" }, items: [] } }, "mac")
  .some((item) => item.tool === "ghostty"), "already collected tools should be hidden from recommendations");
const macRecommendationResult = state.filterRecommendedTools(data, "mac");
assert(macRecommendationResult.groups.some((group) => group.key === "terminal" && group.items[0].tool === "ghostty"), "recommendations should group by category");
const recommendationSearchResult = state.filterRecommendedTools(data, "mac", { query: "GPU" });
assert.deepStrictEqual(recommendationSearchResult.groups.flatMap((group) => group.items.map((item) => item.tool)), ["ghostty"], "recommendation search should match reasons");
const recommendationIntentResult = state.filterRecommendedTools(data, "mac", { query: "搜索文件" });
assert(recommendationIntentResult.groups.flatMap((group) => group.items).some((item) => item.tool === "ripgrep"), "recommendation search should match Chinese use-case intent");
const recommendationTagResult = state.filterRecommendedTools(data, "mac", { query: "devops" });
assert(recommendationTagResult.groups.flatMap((group) => group.items).every((item) => item.tags.includes("devops")), "recommendation search should match tags");
const cloudRecommendations = state.filterRecommendedTools(data, "mac", { category: "cloud-native" });
assert.deepStrictEqual(cloudRecommendations.groups.flatMap((group) => group.items.map((item) => item.tool)), ["docker", "kubectl", "helm"], "category filter should restrict recommendations");
const dismissedRecommendations = new Set(["ghostty"]);
assert(!state.filterRecommendedTools(data, "mac", { dismissedRecommendations })
  .groups.flatMap((group) => group.items).some((item) => item.tool === "ghostty"), "dismissed recommendations should hide by default");
const visibleDismissed = state.filterRecommendedTools(data, "mac", { dismissedRecommendations, showDismissed: true });
assert(visibleDismissed.groups.flatMap((group) => group.items).some((item) => item.tool === "ghostty" && item.dismissed), "show dismissed should expose dismissed recommendations");
assert(!state.filterRecommendedTools({ ...data, ghostty: { meta: { name: "Ghostty" }, items: [] } }, "mac", { dismissedRecommendations, showDismissed: true })
  .groups.flatMap((group) => group.items).some((item) => item.tool === "ghostty"), "collected tools should stay hidden even when dismissed items are shown");
const categoryHtml = render.renderRecommendationCategories(macRecommendationResult);
assert(categoryHtml.includes('data-recommend-category="terminal"'), "recommended categories should render filter chips");
const recommendationsHtml = render.renderRecommendedTools(state.filterRecommendedTools(data, "mac", { query: "Ghostty" }));
assert(!recommendationsHtml.includes('data-recommend-tool="ghostty"'), "recommended cards must not expose removed AI collection actions");
assert(recommendationsHtml.includes("recommend-tags"), "recommended cards should render tags");
assert(render.renderRecommendedTools(visibleDismissed).includes('data-recommend-restore="ghostty"'), "dismissed recommendation cards should expose restore actions");
const allMacCollected = { ...data };
state.recommendedTools(data, "mac").forEach((item) => { allMacCollected[item.tool] = { meta: { name: item.displayName }, items: [] }; });
assert(render.renderRecommendedTools(state.filterRecommendedTools(allMacCollected, "mac")).includes("都已收录"), "empty recommendations should report that the local list is complete");
assert(render.renderRecommendedTools(state.filterRecommendedTools(data, "mac", { query: "not-a-tool" })).includes("当前筛选没有匹配"), "filtered empty recommendations should explain the active filter");

// C: 扩充列表与新分类
assert(state.RECOMMENDATION_CATEGORIES.some((category) => category.key === "cli-utility"), "cli-utility category should exist");
assert(macRecommendations.some((item) => item.tool === "ripgrep" && item.categoryKey === "cli-utility"), "ripgrep should be recommended under cli-utility");
assert(state.recommendedTools(data, "windows").some((item) => item.tool === "ripgrep"), "cross-platform utilities should reach Windows");
assert(!state.recommendedTools(data, "windows").some((item) => item.tool === "bat"), "mac/linux-only utilities should not reach Windows");

// A: 推荐计数（用于管理入口徽标）
assert.strictEqual(state.countRecommendations(data, "mac"), macRecommendations.length, "countRecommendations should match available recommendations");
assert.strictEqual(state.countRecommendations(data, "mac", new Set(["ghostty"])), macRecommendations.length - 1, "countRecommendations should exclude dismissed tools");

// D: 关联/个性化推荐
const shellCollected = { ...data, shell: { meta: { name: "Shell" }, items: [] } };
const personalized = state.filterRecommendedTools(shellCollected, "mac", { category: "cli-utility", collectedToolIds: new Set(Object.keys(shellCollected)) });
const cliItems = personalized.groups.flatMap((group) => group.items);
assert.strictEqual(cliItems[0].tool, "fzf", "related recommendations should sort ahead of higher-priority unrelated ones");
assert(cliItems.find((item) => item.tool === "fzf").relatedTo.includes("Shell"), "related recommendation should name the collected tool");
assert(render.renderRecommendedTools(personalized).includes("因为你已添加"), "related recommendation cards should explain the reason");
const enabledPersonalized = state.filterRecommendedTools(shellCollected, "mac", { category: "cli-utility", enabledToolIds: new Set(["shell"]) });
assert.strictEqual(enabledPersonalized.groups.flatMap((group) => group.items)[0].tool, "fzf", "enabled tools should influence recommendation relevance");
assert(render.renderRecommendedTools(enabledPersonalized).includes("因为你启用了 Shell"), "enabled-tool recommendation cards should explain the signal");
const favouritePersonalized = state.filterRecommendedTools(shellCollected, "mac", { category: "dev-env", favourites: new Set(["shell::some-item"]) });
assert.strictEqual(favouritePersonalized.groups.flatMap((group) => group.items)[0].tool, "tmux", "favourite tools should influence recommendation relevance");
assert(render.renderRecommendedTools(favouritePersonalized).includes("因为你收藏了 Shell"), "favourite-based recommendations should explain the signal");
const recentDocker = { ...data, docker: { meta: { name: "Docker" }, items: [] } };
const recentPersonalized = state.filterRecommendedTools(recentDocker, "mac", { category: "cloud-native", recents: [{ toolId: "docker", itemId: "logs" }] });
assert.strictEqual(recentPersonalized.groups.flatMap((group) => group.items)[0].tool, "kubectl", "recently used tools should influence recommendation relevance");
assert(render.renderRecommendedTools(recentPersonalized).includes("因为你最近用过 Docker"), "recent-use recommendation cards should explain the signal");
// D2: 补全 related 图谱后，原本无关联的终端类推荐也能被个性化激活（改动 1A）
const terminalPersonalized = state.filterRecommendedTools(data, "mac", { category: "terminal", enabledToolIds: new Set(["iterm2"]) });
const terminalItems = terminalPersonalized.groups.flatMap((group) => group.items);
assert(terminalItems.length, "terminal recommendations should exist");
assert(terminalItems[0].relevanceScore > 0, "backfilled related should activate personalization for terminal recommendations");
assert(terminalItems[0].relatedTo.length, "personalized terminal recommendation should name its related anchor");
// D3: 类目亲和度——用户活跃于某类目时，该类目下无显式关联的推荐也获得小幅加成（改动 1B）
const affinityResult = state.filterRecommendedTools(data, "mac", { category: "dev-env", enabledToolIds: new Set(["vs-code"]) });
const devEnvItems = affinityResult.groups.flatMap((group) => group.items);
const lazygitItem = devEnvItems.find((item) => item.tool === "lazygit");
assert(lazygitItem && lazygitItem.relevanceScore === 8, "category affinity alone should lift a recommendation lacking related edges");
assert(render.renderRecommendedTools(affinityResult).includes("因为你常关注"), "affinity-only recommendation cards should explain the category signal");
// D4: 搜索↔推荐打通——无结果时可进入同一查询并新增流程。
const bridgeCtx = { data, core, platform: "mac", helpers: state, favourites: new Set(), expandedExamples: new Set() };
const bridgeEmpty = render.renderResults([], "ripgrep", { activeTool: "all", activeCat: null }, bridgeCtx);
assert(bridgeEmpty.includes("ripgrep") && bridgeEmpty.includes("了解"), "empty search should explain matching uninstalled tools");
assert(bridgeEmpty.includes("data-query-add"), "empty search must expose query-and-add for a matching recommendation");
assert(!render.renderResults([], "zzzznotatool", { activeTool: "all", activeCat: null }, bridgeCtx).includes("data-query-add"), "no matching uninstalled tool should not render a CTA");
assert(!render.renderResults([], "ripgrep", { activeTool: "all", activeCat: "shortcut" }, bridgeCtx).includes("data-query-add"), "filter-only empty state should not show the add CTA");
assert(!render.renderResults([], "", { activeTool: "recent", activeCat: null }, bridgeCtx).includes("data-query-add"), "the recent tab empty state should not show the add CTA");
assert(render.renderResults([], "", { activeTool: "all", activeCat: null }, bridgeCtx).includes("data-browse-all"), "an empty dashboard should teach search and offer full browsing");
// CTA 与管理面板一致：尊重已忽略项、纳入 AI 现荐
const bridgeDismissed = { ...bridgeCtx, dismissedRecommendations: new Set(["ripgrep"]) };
assert(!render.renderResults([], "ripgrep", { activeTool: "all", activeCat: null }, bridgeDismissed).includes("data-query-add"), "dismissed tools should not be offered by the empty-search CTA");
const bridgeAi = { ...bridgeCtx, aiRecommendations: [{ tool: "fd", displayName: "fd", category: "命令行增强", categoryKey: "cli-utility", reason: "find 替代", tags: ["search"], platforms: ["mac"], source: "ai" }] };
assert(render.renderResults([], "fd", { activeTool: "all", activeCat: null }, bridgeAi).includes("fd"), "stored recommendations may still inform empty search without exposing collection actions");

// E: AI 建议持久化的过期剪枝（改动 3）
assert(state.STORAGE_KEYS.includes("aiRecommendations"), "AI suggestions should be persisted in local storage");
const aiNow = 1_000_000_000;
const aiTtl = 7 * 24 * 60 * 60 * 1000;
const prunedAi = state.pruneExpiredAiSuggestions([
  { tool: "fresh", generatedAt: aiNow - 1000 },
  { tool: "stale", generatedAt: aiNow - aiTtl - 1000 },
  { tool: "legacy" },
  { notATool: true },
], aiNow, aiTtl);
assert.deepStrictEqual(prunedAi.map((item) => item.tool), ["fresh", "legacy"], "expired suggestions drop; fresh and legacy (no timestamp) survive");
assert.strictEqual(state.pruneExpiredAiSuggestions(null, aiNow, aiTtl).length, 0, "non-array input prunes to empty");

// F: 了解链接与协议安全
const ghosttyHtml = render.renderRecommendedTools(state.filterRecommendedTools(data, "mac", { query: "Ghostty" }));
assert(ghosttyHtml.includes('href="https://ghostty.org"') && ghosttyHtml.includes('rel="noopener noreferrer"'), "recommendation cards should link to a homepage");
assert.strictEqual(render.safeHttpsUrl("javascript:alert(1)"), "", "non-https urls should be rejected");
assert.strictEqual(render.safeHttpsUrl("https://example.com"), "https://example.com", "https urls should pass through");
assert.strictEqual(render.safeHttpsUrl("data:text/html,<script>alert(1)</script>"), "", "data: urls should be rejected");
assert.strictEqual(render.safeHttpsUrl("vbscript:msgbox(1)"), "", "vbscript: urls should be rejected");
assert.strictEqual(render.safeHttpsUrl("//evil.example.com/x"), "", "protocol-relative urls should be rejected");
assert.strictEqual(render.safeHttpsUrl("http://example.com"), "", "plain http urls should be rejected");
assert.strictEqual(render.safeHttpsUrl("  https://example.com  "), "https://example.com", "surrounding whitespace should be trimmed, not rejected");
assert.strictEqual(render.safeHttpsUrl(null), "", "missing urls should resolve to empty");

// 证据/来源链接必须统一走协议校验；非 https 降级为纯文本但保留原始 URL 供人工复核。
const safeLink = render.evidenceLinkHtml("https://example.com/doc", "证据", "example-doc");
assert(safeLink.includes('href="https://example.com/doc"') && safeLink.includes('rel="noopener noreferrer"') && safeLink.includes('class="example-doc"'), "https evidence links should render as anchors");
const unsafeLink = render.evidenceLinkHtml("javascript:alert(1)", "证据");
assert(!unsafeLink.includes("href="), "non-https evidence urls must not become clickable");
assert(unsafeLink.includes("javascript:alert(1)"), "rejected evidence urls should stay visible as text for manual review");
assert(!unsafeLink.includes("<a"), "rejected evidence urls must not render an anchor");
assert.strictEqual(render.evidenceLinkHtml("", "证据"), "证据", "missing evidence urls should render the bare label");
const poisonedEvidence = render.commandEvidenceHtml(
  {
    evidenceRefs: [{ sourceId: "bad-source", claims: ["existence"], locator: "docs" }],
  },
  [{ id: "bad-source", title: "Bad Source", url: "javascript:alert(1)" }]
);
assert(!poisonedEvidence.includes("href="), "command evidence must reject non-https source urls");
assert(poisonedEvidence.includes("Bad Source"), "rejected command evidence should keep the source title visible");

// meta.sourceUrl 非法时 normalizedSources 不应抛异常中断渲染。
const brokenSource = render.normalizedSources({ source: "Broken Docs", sourceUrl: "not a url" });
assert.strictEqual(brokenSource.length, 1, "invalid sourceUrl should still yield a normalized source");
assert.strictEqual(brokenSource[0].maintainer, "", "invalid sourceUrl should degrade maintainer to empty");

// 收藏损坏数据回退：非数组/混入非字符串成员不应中断初始化。
assert.deepStrictEqual([...state.restoreFavourites(["alpha::open-item", 7, null])], ["alpha::open-item"], "restoreFavourites should keep only string keys");
assert.strictEqual(state.restoreFavourites(12345).size, 0, "non-array favourites should reset to an empty set");
assert.strictEqual(state.restoreFavourites("alpha::x").size, 0, "string favourites should reset instead of iterating characters");
assert.strictEqual(state.restoreFavourites(undefined).size, 0, "missing favourites should reset to an empty set");
assert.strictEqual(state.migrateFavourites(data, "corrupted").favourites.size, 0, "migrateFavourites should tolerate non-set input");

// 证据一致性：命令本身 unverified 时，first-party 示例标签必须降级说明，避免示例徽章高于命令实际核验状态。
const firstPartyExample = { authorship: "editorial", evidenceTier: "first-party", adaptation: "adapted" };
assert.strictEqual(render.exampleProvenanceLabel(firstPartyExample, "verified"), "基于官方资料改写", "verified commands keep the plain first-party label");
assert.strictEqual(render.exampleProvenanceLabel(firstPartyExample, "unverified"), "基于官方资料改写（命令待核验）", "unverified commands must degrade the first-party label");
assert.strictEqual(render.exampleProvenanceLabel(firstPartyExample), "基于官方资料改写", "callers without item context keep the plain label");
assert(render.exampleProvenanceTooltip(firstPartyExample, "unverified").includes("命令级证据"), "degraded tooltip should explain the missing command-level evidence");
assert(!render.exampleProvenanceTooltip(firstPartyExample, "verified").includes("命令级证据"), "verified commands should not carry the degradation note");
assert.strictEqual(render.exampleProvenanceLabel({ authorship: "editorial", evidenceTier: "none" }, "unverified"), "编辑整理场景", "non-first-party examples are not affected by the degradation");

const localRecommendationHtml = render.renderRecommendedTools(state.filterRecommendedTools(data, "mac", { query: "Ghostty" }));
assert(!localRecommendationHtml.includes("data-recommend-tool"), "local recommendation cards must not expose AI collection actions");
assert(!localRecommendationHtml.includes("建议联网"), "local-only recommendations must not imply an unavailable network action");

// H: 批量忽略/恢复入口
assert(render.renderRecommendationCategories(state.filterRecommendedTools(data, "mac")).includes('data-recommend-bulk="dismiss"'), "categories should expose a bulk dismiss action");
assert(render.renderRecommendationCategories(visibleDismissed).includes('data-recommend-bulk="restore"'), "showing dismissed should expose a bulk restore action");

// 换一批：默认浏览态分批轮换
const firstBatch = state.filterRecommendedTools(data, "mac", { batchSize: 6 });
assert(firstBatch.batched && firstBatch.batch, "default browse should batch recommendations");
assert.strictEqual(firstBatch.batch.items.length, 6, "a batch should expose batchSize items");
assert.strictEqual(firstBatch.batch.total, macRecommendations.length, "batch total should reflect the full pool");
assert(firstBatch.batch.canShuffle, "a pool larger than the batch should allow shuffling");
const secondBatch = state.filterRecommendedTools(data, "mac", { batchSize: 6, batchOffset: 6 });
assert.notDeepStrictEqual(
  secondBatch.batch.items.map((item) => item.tool),
  firstBatch.batch.items.map((item) => item.tool),
  "shuffling should advance to a different batch"
);
// 智能换一批：钉住个性化命中头部，仅轮换中性长尾（改动 4）
assert(firstBatch.batch.pinned > 0, "personalized hits should be pinned at the head");
assert.deepStrictEqual(
  secondBatch.batch.items.slice(0, firstBatch.batch.pinned).map((item) => item.tool),
  firstBatch.batch.items.slice(0, firstBatch.batch.pinned).map((item) => item.tool),
  "shuffling should keep the pinned personalized head constant"
);
const tailRotation = firstBatch.batch.total - firstBatch.batch.pinned;
const wrappedBatch = state.filterRecommendedTools(data, "mac", { batchSize: 6, batchOffset: tailRotation });
assert.deepStrictEqual(
  wrappedBatch.batch.items.map((item) => item.tool),
  firstBatch.batch.items.map((item) => item.tool),
  "an offset of one full tail rotation should wrap to the first batch"
);
assert(!state.filterRecommendedTools(data, "mac", { batchSize: 6, query: "Ghostty" }).batched, "search should disable batching");
assert(!state.filterRecommendedTools(data, "mac", { batchSize: 6, category: "cloud-native" }).batched, "a specific category should disable batching");
assert(state.filterRecommendedTools(data, "mac", { batchSize: 6, showDismissed: true }).batched, "showing dismissed should still batch in the all view");
const dismissedBatch = state.filterRecommendedTools(data, "mac", { batchSize: 6, showDismissed: true, dismissedRecommendations: new Set(["ghostty"]) });
const dismissedBatchRow = render.renderRecommendationCategories(dismissedBatch);
assert(dismissedBatchRow.includes("data-recommend-shuffle"), "batched + show dismissed should keep the shuffle action");
assert(dismissedBatchRow.includes('data-recommend-bulk="restore"'), "batched + show dismissed should keep the bulk restore action");

// AI 再荐：把额外推荐并入池
const aiItem = { tool: "fd", displayName: "fd", category: "命令行增强", categoryKey: "cli-utility", reason: "find 替代，更快更友好。", tags: ["search"], homepage: "https://github.com/sharkdp/fd", platforms: ["mac", "linux"], preferWeb: true, source: "ai" };
const withAi = state.filterRecommendedTools(data, "mac", { category: "cli-utility", extraRecommendations: [aiItem] });
const cliTools = withAi.groups.flatMap((group) => group.items);
const fdItem = cliTools.find((item) => item.tool === "fd");
assert(fdItem && fdItem.source === "ai", "extra AI recommendations should merge into the pool");
assert.strictEqual(state.countRecommendations(data, "mac", new Set(), [aiItem]), state.countRecommendations(data, "mac") + 1, "AI recommendations should count toward the badge");
const dupAi = state.filterRecommendedTools(data, "mac", { extraRecommendations: [{ ...aiItem, tool: "ghostty" }] });
assert.strictEqual(dupAi.groups.flatMap((group) => group.items).filter((item) => item.tool === "ghostty").length, 1, "extra recommendations should dedupe against static ones");
assert(!state.recommendedTools(data, "windows", [{ ...aiItem, platforms: ["mac"] }]).some((item) => item.tool === "fd"), "extra recommendations should respect platform filtering");
const aiHtml = render.renderRecommendedTools(withAi);
assert(!aiHtml.includes("recommend-ai") && !aiHtml.includes('data-recommend-tool="fd"'), "legacy AI recommendations must not expose AI labels or collection actions");
const relatedBatch = state.filterRecommendedTools({ ...data, docker: { meta: { name: "Docker" }, items: [] } }, "mac", { batchSize: 6, collectedToolIds: new Set(["docker"]) });
assert(relatedBatch.batch.items.some((item) => item.relatedTo && item.relatedTo.length), "related recommendations should surface in the first batch");
const enabledBatch = state.filterRecommendedTools(shellCollected, "mac", { batchSize: 6, enabledToolIds: new Set(["shell"]) });
assert(enabledBatch.batch.items.slice(0, 3).some((item) => item.relatedTo && item.relatedTo.includes("Shell")), "batched browsing should prioritize high-relevance recommendations");
const batchHtml = render.renderRecommendedTools(firstBatch);
assert(!batchHtml.includes("recommend-group"), "batched recommendations should render flat without group headers");
assert((batchHtml.match(/class="recommend-card/g) || []).length === 6, "batched view should render the batch cards");
assert(render.renderRecommendationCategories(firstBatch).includes("data-recommend-shuffle"), "batched categories should expose a shuffle action");
assert(!render.renderRecommendationCategories(firstBatch).includes("data-recommend-bulk"), "batched view should not expose bulk dismiss");

const shellFilters = render.renderFilters(data, state, { ...baseState, activeTool: "shell", activeShellFilter: "topic:completion" });
assert(shellFilters.shellHtml.includes('data-shell-filter="topic:completion"'), "Shell facet chips should render for Shell tool");
assert(shellFilters.shellHtml.includes("补全") && shellFilters.shellHtml.includes("active"), "active Shell facet should be visible");

const platformEntries = state.collectEntries(entryIndex, data, core, baseState);
const verifiedEntries = state.collectEntries(entryIndex, data, core, { ...baseState, activeEvidence: "verified" });
assert(verifiedEntries.every((entry) => entry.item.evidenceStatus === "verified"), "evidence facet should filter entries");
const platformExampleEntries = state.collectEntries(entryIndex, data, core, { ...baseState, activeExampleFilter: "platform-examples" });
assert(platformExampleEntries.every((entry) => entry.item.examples?.some((example) => example.platforms?.includes("windows") || example.platformValues?.windows)), "platform usage facet should require current-platform examples");
const openEntry = platformEntries.find((entry) => entry.itemId === "open-item");
const linuxOnly = platformEntries.find((entry) => entry.itemId === "linux-only");
assert.strictEqual(openEntry.displayCmd, "Ctrl+P", "platform command should refresh for Windows");
assert.strictEqual(linuxOnly.platformInfo.unsupported, true, "unsupported platform state should be carried into render entries");
assert.strictEqual(linuxOnly.platformInfo.platformMismatch, true, "platformMismatch should be the canonical cross-platform state");
assert(state.visibleToolIds(data, baseState.enabledTools, "windows").includes("beta"), "enabled tools must remain visible outside their preferred platform");
const crossPlatformHtml = render.renderResults([linuxOnly], "linux", baseState, {
  data,
  core,
  platform: "windows",
  expandedExamples: new Set(),
  favourites: new Set(),
  helpers: state,
});
assert(crossPlatformHtml.includes("仅 Linux") && !crossPlatformHtml.includes("disabled"), "other-platform commands should be labeled and copyable");
const manageAllPlatforms = render.renderManageToolToggles({ ...data, linux: { meta: { name: "Linux 系统工具", platforms: ["linux"] }, items: [] } }, ["linux"], baseState);
assert(manageAllPlatforms.includes("Linux 系统工具") && manageAllPlatforms.includes("仅 Linux"), "management choices should list other-platform tools with a platform badge");
const onboardAllPlatforms = render.renderOnboardChoices({ linux: { meta: { name: "Linux 系统工具", platforms: ["linux"] } } }, ["linux"], new Set());
assert(onboardAllPlatforms.includes("仅 Linux") && !onboardAllPlatforms.includes("checked"), "onboarding should list but not preselect an unenabled Linux-only tool");
const commandCuration = {
  schemaVersion: 1,
  tools: {
    "unix-cli": {
      inventoryHash: "sha256:test-unix",
      presentation: {
        name: "开发常用命令",
        subtitle: "Unix/POSIX · 文件、文本、网络、进程",
        platformLabel: "macOS · Linux",
        implementationLabel: "通用/POSIX",
      },
      featuredItemIds: ["unix-find", "unix-sed"],
      groups: [
        { id: "project-files", label: "项目与文件", searchTerms: ["项目文件"], itemIds: ["unix-find"] },
        { id: "code-text", label: "代码与文本", searchTerms: ["代码文本"], itemIds: ["unix-sed"] },
      ],
    },
    linux: {
      inventoryHash: "sha256:test-linux",
      presentation: {
        name: "Linux 运维排障",
        subtitle: "服务器 / 容器 / WSL · 服务、日志、端口、资源",
        platformLabel: "Linux 主机",
        implementationLabel: "Linux 实现",
      },
      featuredItemIds: ["linux-ss"],
      groups: [
        { id: "network-ports", label: "网络与端口", searchTerms: ["端口监听"], itemIds: ["linux-ss"] },
      ],
    },
  },
};
const commandData = {
  "unix-cli": {
    meta: {
      id: "unix-cli", name: "Unix/POSIX 基础命令", color: "#555", platforms: ["mac", "linux"],
      officialCoverage: { inventoryHash: "sha256:test-unix" },
    },
    items: [
      { id: "unix-find", cat: "slash", cmd: "find", zh: "查找文件", examples: [] },
      { id: "unix-awk", cat: "slash", cmd: "awk", zh: "处理文本", examples: [] },
      { id: "unix-sed", cat: "slash", cmd: "sed", zh: "转换文本", examples: [] },
    ],
  },
  linux: {
    meta: {
      id: "linux", name: "Linux 系统工具", color: "#666", platforms: ["linux"],
      officialCoverage: { inventoryHash: "sha256:test-linux" },
    },
    items: [{ id: "linux-ss", cat: "slash", cmd: "ss", zh: "查看套接字", examples: [] }],
  },
};
const curatedIndex = state.createEntryIndex(commandData, new Map(), core, commandCuration);
const staleCommandCuration = {
  ...commandCuration,
  tools: {
    ...commandCuration.tools,
    "unix-cli": {
      ...commandCuration.tools["unix-cli"],
      inventoryHash: "sha256:stale",
    },
  },
};
const curatedState = {
  ...baseState,
  activeTool: "unix-cli",
  enabledTools: new Set(["unix-cli", "linux"]),
  developerCuration: commandCuration,
  activeDeveloperGroup: null,
  browseCommandInventory: false,
  searchQuery: "",
};
assert.deepStrictEqual(
  state.collectEntries(curatedIndex, commandData, core, curatedState).map((entry) => entry.itemId),
  ["unix-find", "unix-sed"],
  "an empty curated view should contain only featured commands",
);
assert.deepStrictEqual(
  state.collectEntries(curatedIndex, commandData, core, {
    ...curatedState, activeDeveloperGroup: "project-files",
  }).map((entry) => entry.itemId),
  ["unix-find"],
  "scenario chips should select their unique primary group",
);
assert.deepStrictEqual(
  state.collectEntries(curatedIndex, commandData, core, {
    ...curatedState, searchQuery: "awk",
  }).map((entry) => entry.itemId),
  ["unix-find", "unix-awk", "unix-sed"],
  "typing a query should automatically search the complete inventory",
);
assert.deepStrictEqual(
  state.collectEntries(curatedIndex, commandData, core, {
    ...curatedState, browseCommandInventory: true,
  }).map((entry) => entry.itemId),
  ["unix-find", "unix-awk", "unix-sed"],
  "the complete-list action should retain every non-featured official entry",
);
assert.deepStrictEqual(
  state.collectEntries(curatedIndex, commandData, core, {
    ...curatedState,
    developerCuration: staleCommandCuration,
  }).map((entry) => entry.itemId),
  ["unix-find", "unix-awk", "unix-sed"],
  "a stale curation hash should safely fall back to the complete official inventory",
);
assert.strictEqual(
  render.renderFilters(commandData, state, {
    ...curatedState,
    developerCuration: staleCommandCuration,
  }).developerHtml,
  "",
  "stale curation navigation should not be shown",
);
const curatedFilters = render.renderFilters(commandData, state, curatedState);
assert(curatedFilters.developerHtml.includes("精选 2")
  && curatedFilters.developerHtml.includes("项目与文件")
  && curatedFilters.developerHtml.includes("代码与文本")
  && curatedFilters.developerHtml.includes("完整清单 3"),
"curated tools should expose featured, scenario, and complete-list navigation");
const searchedCuratedFilters = render.renderFilters(commandData, state, {
  ...curatedState,
  activeDeveloperGroup: "project-files",
  searchQuery: "awk",
});
assert(searchedCuratedFilters.developerHtml.includes("正在检索完整清单 3 条")
  && !searchedCuratedFilters.developerHtml.includes('chip active" data-developer-group')
  && !searchedCuratedFilters.developerHtml.includes('chip active" data-command-view'),
"complete-inventory search must not present bypassed scenario navigation as active");
const curatedManage = render.renderManageToolToggles(
  commandData,
  ["unix-cli", "linux"],
  { ...curatedState, enabledTools: new Set(["unix-cli", "linux"]) },
);
for (const label of [
  "开发常用命令",
  "Unix/POSIX · 文件、文本、网络、进程",
  "macOS · Linux",
  "Linux 运维排障",
  "服务器 / 容器 / WSL · 服务、日志、端口、资源",
  "Linux 主机",
]) {
  assert(curatedManage.includes(label), `management cards should show ${label}`);
}
const curatedOnboarding = render.renderOnboardChoices(
  commandData,
  ["unix-cli", "linux"],
  new Set(["unix-cli"]),
  commandCuration,
);
assert(curatedOnboarding.includes("开发常用命令") && curatedOnboarding.includes("Linux 运维排障"),
  "onboarding and management should share the curated card presentation");
const curatedAdvancedManage = render.renderManageTools(
  commandData,
  ["unix-cli", "linux"],
  {
    ...curatedState,
    maintenanceReady: false,
    deletableToolIds: new Set(),
  },
  state,
  curatedIndex,
);
for (const label of [
  "开发常用命令",
  "Unix/POSIX · 文件、文本、网络、进程",
  "macOS · Linux",
  "Linux 运维排障",
  "服务器 / 容器 / WSL · 服务、日志、端口、资源",
  "Linux 主机",
]) {
  assert(curatedAdvancedManage.includes(label), `advanced management cards should show ${label}`);
}
const implementationEntry = {
  ...curatedIndex.byKey.get("linux::linux-ss"),
  displayCmd: "ss",
  platformInfo: core.getPlatformCommand(commandData.linux.items[0], "linux"),
};
const implementationHtml = render.renderRow(implementationEntry, "ss", {
  data: commandData,
  core,
  platform: "linux",
  expandedExamples: new Set(),
  favourites: new Set(),
  helpers: state,
}, true);
assert(implementationHtml.includes("Linux 实现"), "search results should label the Linux implementation");
assert(css.includes("grid-template-columns:minmax(0,1fr) minmax(0,1fr)")
  && css.includes(".tool-choice-name")
  && css.includes("overflow-wrap:anywhere"),
"two-column tool cards should wrap long developer labels without horizontal overflow");
const linuxExampleEntry = {
  ...linuxOnly,
  item: {
    ...linuxOnly.item,
    examples: [{ value: "systemctl status sshd", description: "查看服务状态", platforms: ["linux"], authorship: "editorial", evidenceTier: "none", adaptation: "scenario-derived" }],
  },
};
const linuxExampleHtml = render.renderRow(linuxExampleEntry, "", {
  data,
  core,
  platform: "windows",
  expandedExamples: new Set(["beta::linux-only"]),
  favourites: new Set(),
  helpers: state,
}, false);
assert(linuxExampleHtml.includes("systemctl status sshd") && linuxExampleHtml.includes('data-example="0"'), "other-platform examples must remain visible and copyable");

const recentEntries = state.collectEntries(entryIndex, data, core, { ...baseState, activeTool: "recent", platform: "mac" });
const rankedRecent = core.rankItems(recentEntries, "", { favourites: baseState.favourites, recents: baseState.recents })
  .sort((a, b) => baseState.recents.findIndex((item) => item.itemId === a.itemId) - baseState.recents.findIndex((item) => item.itemId === b.itemId));
assert.deepStrictEqual(rankedRecent.map((entry) => entry.itemId), ["danger-item", "open-item"], "recent order should survive filtering and ranking");

const shellCompletionEntries = state.collectEntries(entryIndex, data, core, {
  ...baseState,
  activeTool: "shell",
  activeShellFilter: "topic:completion",
});
assert.deepStrictEqual(shellCompletionEntries.map((entry) => entry.itemId), ["bash-complete"], "Shell facet should filter entries by shell metadata");
assert.strictEqual(
  state.activeFilterLabel(data, { ...baseState, activeTool: "shell", activeShellFilter: "topic:completion" }),
  "Shell ＋ 补全",
  "Shell facet should appear in the active filter label"
);

const explainedOpenEntry = core.rankItems([openEntry], "文件", { favourites: baseState.favourites, recents: baseState.recents })[0];
const rowHtml = render.renderRow(explainedOpenEntry, "文件", {
  data,
  core,
  platform: "windows",
  expandedExamples: new Set(["alpha::open-item"]),
  favourites: baseState.favourites,
  helpers: state,
}, true);
assert(rowHtml.includes("主要匹配") && rowHtml.includes("命令证据："), "row render should include match and command evidence");
assert(rowHtml.includes("基于官方资料改写"), "example provenance should render with usage examples");
assert(rowHtml.includes("推荐用法"), "expanded examples should identify the primary recommended usage");
assert(rowHtml.includes("copy-btn"), "rows should expose an explicit copy action");
const collapsedRowHtml = render.renderRow(explainedOpenEntry, "文件", {
  data,
  core,
  platform: "windows",
  expandedExamples: new Set(),
  favourites: baseState.favourites,
  helpers: state,
}, true);
const unverifiedEntry = {
  ...explainedOpenEntry,
  item: { ...explainedOpenEntry.item, evidenceStatus: "unverified", evidenceRefs: undefined },
};
const unverifiedRowHtml = render.renderRow(unverifiedEntry, "文件", {
  data,
  core,
  platform: "windows",
  expandedExamples: new Set(["alpha::open-item"]),
  favourites: baseState.favourites,
  helpers: state,
}, true);
assert(unverifiedRowHtml.includes("基于官方资料改写（命令待核验）"), "renderRow must pass the item evidence status into the example provenance label");
assert(!collapsedRowHtml.includes("命令证据："), "collapsed rows should not expose detailed evidence text");
assert(!collapsedRowHtml.includes("Open file"), "collapsed rows should keep English detail out of the primary scan path");
assert(render.commandExampleHtml(core, "git checkout <branch>", "").includes("placeholder"), "usage examples should mark replaceable placeholders");
assert(
  render.renderResults([explainedOpenEntry], "", baseState, {
    data,
    core,
    platform: "windows",
    expandedExamples: new Set(),
    favourites: baseState.favourites,
    helpers: state,
  }).includes("官方仓库确认"),
  "source evidence labels should render in source cards"
);

const pending = render.renderPending({
  pendingToken: "0123456789abcdef0123456789abcdef",
  toolId: "alpha",
  diff: {
    counts: { added: 1, modified: 2, removed: 3, meta: 1 },
    risks: ["删除高风险命令"],
    sourceChanges: {
      conflicts: ["来源 A 与 B 冲突"],
      statusDowngrades: [{ item: "x" }],
      evidenceRefChanges: [{ item: "y" }],
      locatorLosses: [{ item: "z" }],
    },
  },
}, data);
assert(!pending.hidden, "pending update should render when token exists");
assert(pending.html.includes("disabled"), "risky pending updates should disable apply by default");
assert(pending.html.includes("来源冲突") && pending.html.includes("核验状态下降") && pending.html.includes("证据定位被移除"), "pending source risks should be visible");

const taskMessages = require("../popup-tasks.js");

// 数据加载器：ID 白名单校验，非法 ID 拒绝而不是拼接路径
{
  const appended = [];
  const loaderDoc = {
    createElement() { return {}; },
    head: { appendChild(script) { appended.push(script); setTimeout(() => script.onload(), 0); } },
  };
  loader.loadCheatsheetData(loaderDoc, ["good-tool"]).then(() => {
    assert.strictEqual(appended.length, 1, "valid tool ids should be injected");
    assert.strictEqual(appended[0].src, "data/good-tool.js", "script src should come from the whitelisted id");
    return loader.loadCheatsheetData(loaderDoc, ["good-tool"]);
  }).then(() => {
    assert.strictEqual(appended.length, 1, "already loaded tool data should not be injected twice");
  });
  loader.loadCheatsheetData(loaderDoc, ["../evil"]).then(
    () => { throw new Error("path-traversal ids must be rejected"); },
    (error) => assert(/非法数据文件 ID/.test(error.message), "invalid ids should reject with a clear error")
  );
  loader.loadCheatsheetData(loaderDoc, undefined).then((results) =>
    assert.strictEqual(results.length, 0, "a missing file list should load nothing"));
}

// Toast 工厂：显示/隐藏与计时器行为
{
  const toastElement = {
    textContent: "",
    classList: {
      classes: new Set(),
      add(name) { this.classes.add(name); },
      remove(name) { this.classes.delete(name); },
      contains(name) { return this.classes.has(name); },
    },
    append() {},
  };
  const toastApi = toast.createToast({ getElementById() { return toastElement; }, createElement() { return { addEventListener() {} }; } });
  toastApi.showToast("已复制");
  assert.strictEqual(toastElement.textContent, "已复制", "showToast should set the toast text");
  assert(toastElement.classList.contains("show"), "showToast should reveal the toast");
  toastApi.hideToast();
  assert(!toastElement.classList.contains("show"), "hideToast should hide the toast");
}
assert(taskMessages.taskBaseMsg("add_tool", { tool: "shell" }).includes("分批生成 Shell"), "Shell add task needs aggregate UX");
const diagnosticCopy = taskMessages.diagnosticText({
  error: "无法读取官方资料",
  diagnostic: { stage: "official-inventory", completedChecks: ["已连接 Native Host"], actions: ["检查网络"] },
});
assert(diagnosticCopy.includes("失败阶段：official-inventory"), "structured failures should show their stage");
assert(diagnosticCopy.includes("建议：检查网络"), "structured failures should show actionable repair advice");

const applyButton = { disabled: true, dataset: {} };
const updateButton = { disabled: false, dataset: {} };
const closeButton = { disabled: false, dataset: {} };
const fakeDocument = {
  querySelectorAll(selector) {
    if (selector === "#manageView button:not(#closeManage)") return [applyButton, updateButton];
    if (selector === "#manageView button") return [applyButton, updateButton, closeButton];
    return [];
  },
};
const disableManageButtons = taskMessages.createButtonDisabler(
  fakeDocument,
  "#manageView button:not(#closeManage)",
  "#manageView button"
);
disableManageButtons(true);
assert.strictEqual(applyButton.disabled, true, "task start should keep already-disabled apply button disabled");
assert.strictEqual(updateButton.disabled, true, "task start should disable active management actions");
assert.strictEqual(closeButton.disabled, false, "close button should remain available");
disableManageButtons(false);
assert.strictEqual(applyButton.disabled, true, "task finish should restore previously disabled apply button");
assert.strictEqual(updateButton.disabled, false, "task finish should restore previously enabled action button");
assert.strictEqual(closeButton.disabled, false, "restore should leave untracked close button unchanged");

const statusMessages = [];
const resumedController = taskMessages.createTaskController({
  chrome: { runtime: { sendMessage() {}, reload() {}, lastError: null } },
  setStatus(text) { statusMessages.push(text); },
  setManageButtonsDisabled() {},
  storageSet() {},
  renderPending() {},
  getCurrentTaskMode() { return "add_tool"; },
  setCurrentTaskMode() {},
  setPendingUpdate() {},
});
resumedController.startTaskTimer("add_tool", Date.now(), { tool: "shell" });
resumedController.stopTaskTimer();
assert(statusMessages[0].includes("分批生成 Shell"), "resumed Shell task should keep the aggregate progress message");

// Native Host 不可用（{ok:false}）时的降级：错误状态可见、管理按钮恢复、popup 不崩溃。
const failedStatus = [];
const failedButtonCalls = [];
const failingController = taskMessages.createTaskController({
  chrome: { runtime: { sendMessage() {}, reload() {}, lastError: null } },
  setStatus(text, kind) { failedStatus.push({ text, kind }); },
  setManageButtonsDisabled(disabled) { failedButtonCalls.push(disabled); },
  storageSet() {},
  renderPending() {},
  getCurrentTaskMode() { return "add_tool"; },
  setCurrentTaskMode() {},
  setPendingUpdate() {},
});

// 收藏迁移：legacy cmd 键应折叠为稳定 id 键；纯稳定键输入不应标记 changed。
const migratedFavourites = state.migrateFavourites(data, new Set(["alpha::Cmd+P", "alpha::open-item"]));
assert.strictEqual(migratedFavourites.changed, true, "legacy favourite keys should trigger migration");
assert.deepStrictEqual([...migratedFavourites.favourites], ["alpha::open-item"], "legacy cmd key should fold into the stable id key");
const stableFavourites = state.migrateFavourites(data, new Set(["alpha::open-item"]));
assert.strictEqual(stableFavourites.changed, false, "stable-id-only favourites should not be marked as migrated");
assert.deepStrictEqual([...stableFavourites.favourites], ["alpha::open-item"], "stable id keys should survive migration untouched");

const context = {
  window: {
    CHEATSHEET_CORE: core,
    CHEATSHEET_POPUP_STATE: state,
    CHEATSHEET_POPUP_RENDER: render,
    CHEATSHEET_POPUP_TOAST: toast,
    CHEATSHEET_POPUP_DIALOGS: dialogs,
    CHEATSHEET_POPUP_LOADER: loader,
    CHEATSHEET_POPUP_TASKS: taskMessages,
    CHEATSHEET_ENABLE_TEST_HOOKS: true,
    CHEATSHEET_DATA: {},
  },
  document: { addEventListener() {} },
  navigator: { platform: "MacIntel" },
  chrome: {
    runtime: {
      lastError: null,
      reload() {},
      sendMessage() {},
      onMessage: { addListener() {} },
    },
    storage: {
      local: { get() {}, set() {} },
      session: { set() {} },
    },
  },
  setTimeout,
  clearTimeout,
  setInterval,
  clearInterval,
  confirm() {
    context.confirmCalls += 1;
    return false;
  },
  confirmCalls: 0,
};
const popupSource = fs.readFileSync(path.join(root, "popup.js"), "utf8");
const dialogSource = fs.readFileSync(path.join(root, "popup-dialogs.js"), "utf8");
assert(popupSource.includes("clearDeveloperSearch")
  && popupSource.includes('storageSet({ lastQuery: "" })'),
"choosing a developer scenario should leave full-inventory search and activate the selected view");
// 搜索框按 ↓ 应直达第一条结果（README 宣称的键盘路径）。
assert(
  /search"\)\.addEventListener\("keydown"[\s\S]{0,300}ArrowDown[\s\S]{0,300}\.row-main/.test(popupSource),
  "the search box must wire ArrowDown to focus the first result row"
);
assert(dialogSource.includes("deps.state.getToolIds(deps.getAllData())"), "onboarding and show-all must include tools from every platform");
vm.createContext(context);
vm.runInContext(popupSource, context, { filename: "popup.js" });
assert(context.window.CHEATSHEET_POPUP_TESTS, "popup test hooks should be available only when enabled");

// 第二个沙箱：带 riskDialog/toast 元素桩，测试对话框路径的并发防护与焦点陷阱。
function stubElement() {
  return {
    textContent: "",
    innerHTML: "",
    className: "",
    value: "",
    disabled: false,
    hidden: false,
    dataset: {},
    classList: {
      classes: new Set(),
      add(name) { this.classes.add(name); },
      remove(name) { this.classes.delete(name); },
      contains(name) { return this.classes.has(name); },
    },
    focus() {},
    addEventListener() {},
    append() {},
  };
}
const dialogElements = new Map();
const dialogContext = {
  window: {
    CHEATSHEET_CORE: core,
    CHEATSHEET_POPUP_STATE: state,
    CHEATSHEET_POPUP_RENDER: render,
    CHEATSHEET_POPUP_TOAST: toast,
    CHEATSHEET_POPUP_DIALOGS: dialogs,
    CHEATSHEET_POPUP_LOADER: loader,
    CHEATSHEET_POPUP_TASKS: taskMessages,
    CHEATSHEET_ENABLE_TEST_HOOKS: true,
    CHEATSHEET_DATA: {},
  },
  document: {
    addEventListener() {},
    activeElement: null,
    getElementById(id) {
      if (!dialogElements.has(id)) dialogElements.set(id, stubElement());
      return dialogElements.get(id);
    },
    querySelectorAll() { return []; },
  },
  navigator: { platform: "MacIntel" },
  chrome: {
    runtime: { lastError: null, reload() {}, sendMessage() {}, onMessage: { addListener() {} } },
    storage: { local: { get() {}, set() {} }, session: { set() {} } },
  },
  setTimeout,
  clearTimeout,
  setInterval,
  clearInterval,
  confirm() { return false; },
};
vm.createContext(dialogContext);
vm.runInContext(popupSource, dialogContext, { filename: "popup.js" });
const dialogHooks = dialogContext.window.CHEATSHEET_POPUP_TESTS;
(async () => {
  assert.strictEqual(
    await context.window.CHEATSHEET_POPUP_TESTS.confirmRiskCopy("git status", { requiresConfirmation: false }),
    true,
    "safe copies should not prompt"
  );
  assert.strictEqual(context.confirmCalls, 0, "safe copies should not call confirm");
  assert.strictEqual(
    await context.window.CHEATSHEET_POPUP_TESTS.confirmRiskCopy("rm -rf ./tmp", { requiresConfirmation: true, warning: "删除" }),
    false,
    "risky copies should respect confirm result when DOM dialog is unavailable"
  );
  assert.strictEqual(context.confirmCalls, 1, "risky fallback copies should require confirmation");

  assert(state.overbroadAddToolHint("CLI", "cli").includes("GNU Coreutils"), "overbroad tool names need split-scope guidance");
  assert.deepStrictEqual(state.normalizeAddTool("terminal"), { tool: "shell", displayName: "Shell" }, "Shell aliases should canonicalize");
  assert(state.TOOL_PRESETS.terminal.includes("shell"), "terminal preset should enable Shell by default");
  assert(context.window.CHEATSHEET_POPUP_TESTS.addToolPayload("Ghostty", true).ok, "recommended tools should build add payloads");
  const recommendedPayload = context.window.CHEATSHEET_POPUP_TESTS.addToolPayload("Ghostty", true).payload;
  assert.strictEqual(recommendedPayload.tool, "ghostty", "recommended payload should normalize tool id");
  assert.strictEqual(recommendedPayload.display_name, "Ghostty", "recommended payload should preserve display name");
  assert.strictEqual(recommendedPayload.prefer_web, true, "recommended payload should prefer web when requested");
  context.window.CHEATSHEET_DATA = { docker: { meta: { name: "Docker" }, items: [] } };
  assert.strictEqual(
    context.window.CHEATSHEET_POPUP_TESTS.addToolPayload("Docker", true).ok,
    false,
    "already collected recommendations should not start add tasks"
  );
  assert(context.window.CHEATSHEET_POPUP_TESTS.addToolPayload("Docker", true).error.includes("尚未启用"), "collected but disabled tools should point to preferences instead of update");
  context.window.CHEATSHEET_DATA = { linux: { meta: { name: "Linux 系统工具", platforms: ["linux"] }, items: [] } };
  const hiddenLinux = context.window.CHEATSHEET_POPUP_TESTS.addToolPayload("Linux", true);
  assert.strictEqual(hiddenLinux.code, "collected-disabled", "a collected Linux tool should offer direct enablement instead of switching platform");
  assert.strictEqual(hiddenLinux.tool, "linux");
  assert(hiddenLinux.error.includes("无需调用 AI"), "collected tools must not start an AI add task");
  assert(context.window.CHEATSHEET_POPUP_TESTS.addToolPayload("CLI", true).error.includes("范围过大"), "broad recommendation names should stay blocked");

  // 风险确认并发防护：确认框未决时的第二次复制直接按"未确认"处理，
  // 前一个 Promise 仍由用户操作决议，不会永久挂起。
  const risk = core.classifyCommandRisk("rm -rf ./tmp");
  const firstPending = dialogHooks.confirmRiskCopy("rm -rf ./tmp", risk);
  assert.strictEqual(
    await dialogHooks.confirmRiskCopy("rm -rf /var", risk),
    false,
    "a second risk confirmation while one is pending must resolve to false immediately"
  );
  assert(typeof dialogHooks.closeRiskDialog === "function", "closeRiskDialog should be exposed for tests");
  dialogHooks.closeRiskDialog(true);
  assert.strictEqual(await firstPending, true, "the original pending confirmation must still resolve with the user's choice");
  const thirdPending = dialogHooks.confirmRiskCopy("rm -rf ./x", risk);
  dialogHooks.closeRiskDialog(false);
  assert.strictEqual(await thirdPending, false, "the dialog must be usable again after the pending confirmation closes");

  // 跨平台复制：首次确认后按目标平台记忆；与高风险并存时复用同一个对话框。
  // Node 在 CI 中会暴露 Linux navigator；这里明确设置为 macOS，验证用户实际
  // 首选命令平台而不是测试运行器的平台。
  dialogHooks.setPreferredCommandPlatformForTest("mac");
  dialogHooks.setAcknowledgedPlatformScopes([]);
  const linuxInfo = core.getPlatformCommand({ cmd: "systemctl status sshd", platforms: ["linux"] }, "mac");
  const firstLinuxCopy = dialogHooks.confirmCommandCopy("systemctl status sshd", core.classifyCommandRisk("systemctl status sshd"), { platforms: ["linux"] }, linuxInfo);
  assert.strictEqual(dialogElements.get("riskTitle").textContent, "确认命令目标平台");
  assert(dialogElements.get("riskDetails").innerHTML.includes("Linux") && dialogElements.get("riskDetails").innerHTML.includes("macOS"));
  dialogHooks.closeRiskDialog(true);
  assert.strictEqual(await firstLinuxCopy, true);
  assert.deepStrictEqual(JSON.parse(JSON.stringify(dialogHooks.getAcknowledgedPlatformScopes())), ["linux"], "confirmed Linux scope should be remembered");
  assert.strictEqual(await dialogHooks.confirmCommandCopy("systemctl status sshd", core.classifyCommandRisk("systemctl status sshd"), { platforms: ["linux"] }, linuxInfo), true, "the remembered platform scope should not prompt again");
  dialogHooks.setAcknowledgedPlatformScopes([]);
  const combinedCopy = dialogHooks.confirmCommandCopy("rm -rf /tmp/demo", core.classifyCommandRisk("rm -rf /tmp/demo"), { platforms: ["linux"] }, linuxInfo);
  assert.strictEqual(dialogElements.get("riskTitle").textContent, "确认目标平台与命令风险");
  assert(dialogElements.get("riskDetails").innerHTML.includes("Linux") && dialogElements.get("riskDetails").innerHTML.includes("删除"), "one dialog should combine platform and risk details");
  dialogHooks.closeRiskDialog(false);
  assert.strictEqual(await combinedCopy, false);

  // 焦点陷阱：Tab 在对话框内循环，其它按键不拦截。
  const focusCalls = [];
  const firstFocusable = { focus() { focusCalls.push("first"); }, disabled: false, hidden: false };
  const lastFocusable = { focus() { focusCalls.push("last"); }, disabled: false, hidden: false };
  const trapDialog = { querySelectorAll() { return [firstFocusable, lastFocusable]; } };
  dialogContext.document.activeElement = lastFocusable;
  let trapPrevented = false;
  dialogHooks.trapDialogFocus(trapDialog, { key: "Tab", shiftKey: false, preventDefault() { trapPrevented = true; } });
  assert(focusCalls.includes("first") && trapPrevented, "Tab on the last focusable element should wrap to the first");
  focusCalls.length = 0;
  trapPrevented = false;
  dialogContext.document.activeElement = firstFocusable;
  dialogHooks.trapDialogFocus(trapDialog, { key: "Tab", shiftKey: true, preventDefault() { trapPrevented = true; } });
  assert(focusCalls.includes("last") && trapPrevented, "Shift+Tab on the first focusable element should wrap to the last");
  focusCalls.length = 0;
  dialogHooks.trapDialogFocus(trapDialog, { key: "a", preventDefault() { throw new Error("non-Tab keys must not be intercepted"); } });
  assert.strictEqual(focusCalls.length, 0, "non-Tab keys must not move focus");
  const dialogsSource = fs.readFileSync(path.join(root, "popup-dialogs.js"), "utf8");
  assert(/function bindRiskDialog[\s\S]{0,700}trapDialogFocus/.test(dialogsSource), "bindRiskDialog should wire the shared focus trap");

  await failingController.finishTask({ ok: false, error: "连接本地更新程序失败。请确认已运行安装脚本并完全重启浏览器。" });
  assert.strictEqual(failedStatus.length, 1, "a failed task should surface exactly one status message");
  assert(failedStatus[0].text.startsWith("❌ 连接本地更新程序失败"), "failed task status should surface the host error");
  assert.strictEqual(failedStatus[0].kind, "err", "failed task status should use the error style");
  assert.deepStrictEqual(failedButtonCalls, [false], "a failed task must re-enable management buttons");
  await failingController.finishTask({ ok: false });
  assert(failedStatus[1].text.includes("未知错误"), "missing error detail should fall back to a generic message");
  await failingController.finishTask({ ok: false, cancelled: true, error: "任务已取消。" });
  assert.strictEqual(failedStatus[2].text, "已取消任务。", "cancelled tasks should show neutral copy, not an error");
  assert.notStrictEqual(failedStatus[2].kind, "err", "cancelled tasks must not use the error style");

  console.log("Popup UX behavior tests passed.");
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
