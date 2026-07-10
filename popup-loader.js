"use strict";

(function initPopupLoader(globalScope) {
  const loadsByDocument = new WeakMap();

  function loadToolData(documentLike, toolId, allowedFiles) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(toolId)) {
      return Promise.reject(new Error(`非法数据文件 ID：${toolId}`));
    }
    if (Array.isArray(allowedFiles) && !allowedFiles.includes(toolId)) {
      return Promise.reject(new Error(`数据文件未在索引中登记：${toolId}`));
    }
    let loads = loadsByDocument.get(documentLike);
    if (!loads) {
      loads = new Map();
      loadsByDocument.set(documentLike, loads);
    }
    if (loads.has(toolId)) return loads.get(toolId);
    const pending = new Promise((resolve, reject) => {
      const script = documentLike.createElement("script");
      script.src = `data/${toolId}.js`;
      if (script.dataset) script.dataset.toolData = toolId;
      script.onload = () => resolve(toolId);
      script.onerror = () => reject(new Error(`加载 data/${toolId}.js 失败`));
      documentLike.head.appendChild(script);
    });
    loads.set(toolId, pending);
    pending.catch(() => loads.delete(toolId));
    return pending;
  }

  // 数据文件只经 data/index.js 声明的 CHEATSHEET_FILES 清单按 ID 注入；
  // ID 白名单校验防止拼出目录穿越或非数据脚本路径。
  function loadCheatsheetData(documentLike, files, allowedFiles) {
    const list = Array.isArray(files) ? files : [];
    return Promise.all([...new Set(list)].map((toolId) => loadToolData(documentLike, toolId, allowedFiles)));
  }

  const api = { loadToolData, loadCheatsheetData };

  globalScope.CHEATSHEET_POPUP_LOADER = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
}(typeof window !== "undefined" ? window : globalThis));
