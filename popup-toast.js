"use strict";

(function initPopupToast(globalScope) {
  const TOAST_DURATION_MS = 1800;
  const UNDO_TOAST_DURATION_MS = 4000;

  // 工厂封装 #toast 元素与计时器状态；documentLike 注入便于测试。
  function createToast(documentLike) {
    let toastTimer = null;

    function hideToast() {
      const toast = documentLike.getElementById("toast");
      toast.classList.remove("show");
      if (toastTimer) clearTimeout(toastTimer);
    }

    function showToast(text) {
      const toast = documentLike.getElementById("toast");
      toast.textContent = text;
      toast.classList.add("show");
      if (toastTimer) clearTimeout(toastTimer);
      toastTimer = setTimeout(() => toast.classList.remove("show"), TOAST_DURATION_MS);
    }

    function showUndoToast(text, onUndo) {
      const toast = documentLike.getElementById("toast");
      toast.textContent = "";
      const label = documentLike.createElement("span");
      label.textContent = text;
      const undo = documentLike.createElement("button");
      undo.type = "button";
      undo.className = "toast-undo";
      undo.textContent = "撤销";
      undo.addEventListener("click", () => {
        hideToast();
        onUndo();
      });
      toast.append(label, undo);
      toast.classList.add("show");
      if (toastTimer) clearTimeout(toastTimer);
      toastTimer = setTimeout(() => toast.classList.remove("show"), UNDO_TOAST_DURATION_MS);
    }

    return { hideToast, showToast, showUndoToast };
  }

  const api = { createToast, TOAST_DURATION_MS, UNDO_TOAST_DURATION_MS };

  globalScope.CHEATSHEET_POPUP_TOAST = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
}(typeof window !== "undefined" ? window : globalThis));
