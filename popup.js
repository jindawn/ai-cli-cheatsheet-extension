"use strict";

const CORE = window.CHEATSHEET_CORE;
const STATE = window.CHEATSHEET_POPUP_STATE;
const RENDER = window.CHEATSHEET_POPUP_RENDER;
const DISTRIBUTION = window.CHEATSHEET_DISTRIBUTION || { channel: "source", maintenance: true };
const MAINTENANCE_ENABLED = DISTRIBUTION.channel === "source" && DISTRIBUTION.maintenance === true;
const TOOL_FILES = Array.isArray(window.CHEATSHEET_FILES) ? window.CHEATSHEET_FILES : [];
const catalogData = Object.fromEntries((window.CHEATSHEET_TOOL_CATALOG || []).map((meta) => [
  meta.id,
  { meta: { ...meta, catalogOnly: true }, items: [] },
]));

let activeTool = "all";
let activeCat = null;
let activeShellFilter = null;
let activeEvidence = null;
let activeExampleFilter = null;
let favourites = new Set();
let recents = [];
let enabledTools = new Set();
let dismissedRecommendations = new Set();
let platform = STATE.detectPlatform();
let webVerify = false;
let recommendationQuery = "";
let activeRecommendationCategory = "all";
let showDismissedRecommendations = false;
let addingRecommendation = null;
let recommendationBatchOffset = 0;
let aiRecommendations = [];
const RECOMMENDATION_BATCH_SIZE = 6;
const AI_SUGGEST_COUNT = 8;
const AI_SUGGEST_TTL_MS = 7 * 24 * 60 * 60 * 1000;
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

function setStatus(text, kind = "") {
  const status = document.getElementById("manageStatus");
  status.textContent = text;
  status.className = text ? `status show ${kind}` : "status";
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
    if (mode === "suggest_tools" && response?.ok && Array.isArray(response.suggestions)) {
      mergeAiSuggestions(response.suggestions);
    }
    if (addingRecommendation) {
      addingRecommendation = null;
      if (document.getElementById("manageView").classList.contains("active")) renderManage();
    }
  },
}) : null;

function manageIsActive() {
  return document.getElementById("manageView").classList.contains("active");
}

async function mergeAiSuggestions(suggestions) {
  const seen = new Set(aiRecommendations.map((item) => item.tool));
  const installed = getAllData();
  const additions = suggestions.filter((item) =>
    item && typeof item.tool === "string" && !seen.has(item.tool) && !installed[item.tool]
  );
  if (additions.length) {
    const stamped = additions.map((item) => ({ ...item, generatedAt: item.generatedAt || Date.now() }));
    aiRecommendations = [...aiRecommendations, ...stamped];
    await storageSet({ aiRecommendations });
  }
  if (manageIsActive()) renderManage();
}

function requestAiSuggestions() {
  if (!MAINTENANCE_ENABLED) return;
  const data = getAllData();
  const exclude = [...new Set([
    ...STATE.getToolIds(data),
    ...STATE.TOOL_RECOMMENDATIONS.map((item) => item.tool),
    ...dismissedRecommendations,
    ...aiRecommendations.map((item) => item.tool),
  ])];
  const enabled = [...enabledTools].filter((id) => data[id]).map((id) => ({
    id,
    name: data[id].meta?.name || id,
  }));
  const collected = STATE.getToolIds(data).map((id) => ({
    id,
    name: data[id].meta?.name || id,
  }));
  taskController.runTask("suggest_tools", { platform, count: AI_SUGGEST_COUNT, exclude, enabled, collected });
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
  const suggestAdd = event.target.closest("[data-suggest-add-tool]");
  if (suggestAdd) {
    showView("manage");
    addingRecommendation = suggestAdd.dataset.suggestAddTool;
    renderManage();
    if (!startAddTool(suggestAdd.dataset.suggestAddName, webVerify)) {
      addingRecommendation = null;
      renderManage();
    }
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
    const value = CORE.getPlatformExample(example, platform).value;
    const risk = CORE.classifyCommandRisk(value, [example]);
    if (!await confirmRiskCopy(value, risk)) return;
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
    if (platformInfo.unsupported) {
      showToast("当前平台不支持此命令");
      return;
    }
    const command = platformInfo.command;
    const risk = CORE.classifyCommandRisk(command, entry.item.examples || []);
    if (!await confirmRiskCopy(command, risk)) return;
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
  webToggle.checked = webVerify;
  webToggle.onchange = () => {
    webVerify = webToggle.checked;
    storageSet({ webVerify });
    renderManage();
  };
  const toggles = document.getElementById("manageToolToggles");
  toggles.innerHTML = RENDER.renderManageToolToggles(getAllData(), STATE.getToolIds(getAllData()), currentState());
  toggles.querySelectorAll("[data-enabled]").forEach((checkbox) =>
    checkbox.addEventListener("change", () => handleEnabledToolToggle(checkbox)));

  if (!MAINTENANCE_ENABLED) {
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
  recommended.querySelectorAll("[data-recommend-tool]").forEach((button) => button.addEventListener("click", () => {
    addingRecommendation = button.dataset.recommendTool;
    renderManage();
    if (!startAddTool(button.dataset.recommendName, webVerify)) {
      addingRecommendation = null;
      renderManage();
    }
  }));
  recommended.querySelectorAll("[data-recommend-dismiss]").forEach((button) => button.addEventListener("click", () =>
    dismissRecommendation(button.dataset.recommendDismiss, button.dataset.recommendLabel)));
  recommended.querySelectorAll("[data-recommend-restore]").forEach((button) => button.addEventListener("click", async () => {
    dismissedRecommendations.delete(button.dataset.recommendRestore);
    await storageSet({ dismissedRecommendations: [...dismissedRecommendations] });
    renderManage();
  }));

  const tools = document.getElementById("manageTools");
  tools.innerHTML = RENDER.renderManageTools(getAllData(), STATE.getToolIds(getAllData()), currentState(), STATE, entryIndex);
  tools.querySelectorAll("[data-enabled]").forEach((checkbox) =>
    checkbox.addEventListener("change", () => handleEnabledToolToggle(checkbox)));
  tools.querySelectorAll("[data-update]").forEach((button) => button.addEventListener("click", () => {
    const toolId = button.dataset.update;
    taskController.runTask("preview_update", {
      tool: toolId,
      display_name: getAllData()[toolId].meta.name,
      prefer_web: true,
    });
  }));
  tools.querySelectorAll("[data-remove]").forEach((button) => button.addEventListener("click", () => {
    const toolId = button.dataset.remove;
    if (confirm(`确定删除 ${getAllData()[toolId].meta.name}？此操作会删除本地数据文件。`)) {
      taskController.runTask("remove_tool", { tool: toolId, display_name: getAllData()[toolId].meta.name });
    }
  }));
  renderPending();
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
  if (!MAINTENANCE_ENABLED) {
    button.textContent = "⚙ 管理";
    button.title = "管理工具和偏好";
    return;
  }
  const count = STATE.countRecommendations(getAllData(), platform, dismissedRecommendations, aiRecommendations);
  button.textContent = count ? `⚙ 管理 · ${count}` : "⚙ 管理";
  button.title = count ? `管理工具和数据（${count} 个推荐可添加）` : "管理工具和数据";
}

function addToolPayload(displayName, preferWebOverride = null) {
  if (!displayName) return { ok: false, error: "请输入工具名称" };
  const normalized = STATE.normalizeAddTool(displayName);
  const { tool } = normalized;
  if (!tool) return { ok: false, error: "工具名称需要包含英文字母或数字" };
  const scopeHint = STATE.overbroadAddToolHint(displayName, tool);
  if (scopeHint) return { ok: false, error: scopeHint };
  if (getAllData()[tool]) return { ok: false, error: "该工具已收录，请使用检查更新" };
  return {
    ok: true,
    payload: {
      tool,
      display_name: normalized.displayName,
      prefer_web: preferWebOverride === null ? webVerify : Boolean(preferWebOverride),
    },
  };
}

function startAddTool(displayName, preferWebOverride = null) {
  if (!MAINTENANCE_ENABLED) return false;
  const result = addToolPayload(String(displayName || "").trim(), preferWebOverride);
  if (!result.ok) {
    setStatus(result.error, "err");
    return false;
  }
  taskController.runTask("add_tool", result.payload);
  return true;
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
  document.getElementById("applyPending").addEventListener("click", () => taskController.runTask("apply_update", {
    token: pendingUpdate.pendingToken,
    confirm_risk: Boolean(confirmRisk?.checked),
  }));
  document.getElementById("discardPending").addEventListener("click", () => taskController.runTask("discard_update", { token: pendingUpdate.pendingToken }));
}

function bindManageEvents() {
  document.getElementById("platformSelect").addEventListener("change", async (event) => {
    platform = event.target.value;
    recommendationBatchOffset = 0;
    await storageSet({ platform });
    render();
    renderManage();
  });
  document.getElementById("clearRecent").addEventListener("click", async () => {
    recents = [];
    await storageSet({ recentCopies: [] });
    setStatus("最近使用已清空", "ok");
    render();
  });
  document.getElementById("rerunOnboarding").addEventListener("click", () => onboarding.showOnboarding(true));
  if (!MAINTENANCE_ENABLED) return;
  document.getElementById("addToolBtn").addEventListener("click", () => {
    startAddTool(document.getElementById("addToolName").value);
  });
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
  document.getElementById("aiSuggestBtn").addEventListener("click", requestAiSuggestions);
  document.getElementById("cancelTask").addEventListener("click", () => {
    chrome.runtime.sendMessage({ action: "cancelTask" }, (response) => {
      if (chrome.runtime.lastError) return; // 结果仍会经 taskComplete 广播回来
      if (!response?.ok && response?.error) setStatus(response.error, "warn");
    });
  });
}

async function initialize() {
  if (!MAINTENANCE_ENABLED) document.getElementById("manageTitle").textContent = "管理工具与偏好";
  document.querySelectorAll("[data-source-only]").forEach((element) => {
    element.hidden = !MAINTENANCE_ENABLED || element.hasAttribute("data-dynamic-hidden");
  });
  document.getElementById("main").innerHTML = `<div class="empty loading">正在加载速查表…</div>`;
  let stored;
  try {
    stored = await storageGet(STATE.STORAGE_KEYS);
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
    aiRecommendations = STATE.pruneExpiredAiSuggestions(storedAi, Date.now(), AI_SUGGEST_TTL_MS);
    if (aiRecommendations.length !== storedAi.length) storageSet({ aiRecommendations });
    platform = stored.platform || platform;
    webVerify = stored.webVerify === true;
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
    trapDialogFocus: (dialog, event) => DIALOGS.trapDialogFocus(document, dialog, event),
    addToolPayload,
    rankVisibleEntries,
  };
}

document.addEventListener("DOMContentLoaded", initialize);
