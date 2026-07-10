(function registerMigratedvsCodeEnrichments(globalScope) {
  "use strict";
  const modules = globalScope.CHEATSHEET_ENRICHMENT_MODULES ||= {};
  modules["vs-code"] = { ...(modules["vs-code"] || {}), ...{
  "id:f9a6d4cea270efda": {
    "examples": [
      {
        "value": "按 Cmd+Shift+P（Win/Linux 为 Ctrl+Shift+P），输入“Format Document”",
        "description": "搜索并执行编辑器命令",
        "copyable": false
      }
    ]
  },
  "id:696583bac075c29f": {
    "examples": [
      {
        "value": "按 Cmd/Ctrl+P，输入文件名的一部分",
        "description": "按名称快速打开项目文件",
        "copyable": false
      }
    ]
  },
  "id:81c63947817a7230": {
    "examples": [
      {
        "value": "把光标放在一行上，按 Option+Down（Win/Linux 为 Alt+Down）",
        "description": "把当前行向下移动",
        "copyable": false
      }
    ]
  },
  "id:56a5b42f076ba704": {
    "examples": [
      {
        "value": "按 Shift+Option+Down（Win/Linux 为 Shift+Alt+Down）",
        "description": "复制当前行并插入到下一行",
        "copyable": false
      }
    ]
  },
  "id:a335cac908c3235a": {
    "examples": [
      {
        "value": "选中一个变量名后连续按 Cmd/Ctrl+D",
        "description": "逐个选中后续同名文本，便于同时编辑",
        "copyable": false
      }
    ]
  },
  "id:e06504997d5cceb4": {
    "examples": [
      {
        "value": "按 Shift+Cmd+F（Win/Linux 为 Ctrl+Shift+F），输入关键词",
        "description": "在整个工作区跨文件搜索",
        "copyable": false
      }
    ]
  },
  "id:d82b6bc4bdf22a48": {
    "examples": [
      {
        "value": "按 Cmd+K 后再按 Cmd+S（Win/Linux 为 Ctrl+K Ctrl+S）",
        "description": "打开键盘快捷方式设置页面",
        "copyable": false
      }
    ]
  },
  "id:2b045bf8e6785064": {
    "examples": [
      {
        "value": "把光标放在要删除的行，按 Shift+Cmd+K（Win/Linux 为 Ctrl+Shift+K）",
        "description": "删除当前整行",
        "copyable": false
      }
    ]
  },
  "id:9aaf5a156bba5a10": {
    "examples": [
      {
        "value": "按 Cmd/Ctrl+F，输入要查找的文本",
        "description": "在当前文件中查找匹配内容",
        "copyable": false
      }
    ]
  },
  "id:15b4064d0d26f239": {
    "examples": [
      {
        "value": "按 Option+Cmd+F（Win/Linux 为 Ctrl+H），填写查找和替换内容",
        "description": "在当前文件中执行查找替换",
        "copyable": false
      }
    ]
  }
} };
}(typeof window !== "undefined" ? window : globalThis));
