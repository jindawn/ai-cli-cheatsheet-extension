(function registerMigratedideaEnrichments(globalScope) {
  "use strict";
  const modules = globalScope.CHEATSHEET_ENRICHMENT_MODULES ||= {};
  modules["idea"] = { ...(modules["idea"] || {}), ...{
  "id:f66de581bb5e043e": {
    "examples": [
      {
        "value": "连续按两次 Shift，输入类名、文件名或动作名称",
        "description": "从一个入口搜索整个项目和 IDE 功能",
        "copyable": false
      }
    ]
  },
  "id:b8a52256055d7e6c": {
    "examples": [
      {
        "value": "按 Cmd+Shift+A（Win/Linux 为 Ctrl+Shift+A），输入“Reformat Code”",
        "description": "搜索并执行 IDE 动作",
        "copyable": false
      }
    ]
  },
  "id:704bbc01bd8a9b42": {
    "examples": [
      {
        "value": "把光标放在方法调用上，按 Cmd/Ctrl+B",
        "description": "跳转到方法或变量的声明位置",
        "copyable": false
      }
    ]
  },
  "id:708944deb23dd3f1": {
    "examples": [
      {
        "value": "把光标放在符号上按 Alt+F7",
        "description": "查找该符号在整个项目中的使用位置",
        "copyable": false
      }
    ]
  },
  "id:e9bb70e5f486f7ec": {
    "examples": [
      {
        "value": "选中变量或方法名后按 Shift+F6，输入新名称",
        "description": "安全重命名并同步更新所有引用",
        "copyable": false
      }
    ]
  },
  "id:98ed2cac4966c3d0": {
    "examples": [
      {
        "value": "选中代码后按 Cmd+Alt+L（Win/Linux 为 Ctrl+Alt+L）",
        "description": "按项目代码风格格式化选区",
        "copyable": false
      }
    ]
  },
  "id:e19780874b2a62a8": {
    "examples": [
      {
        "value": "把光标放在报错位置，按 Alt+Enter",
        "description": "查看可用的导入、修复和代码转换建议",
        "copyable": false
      }
    ]
  },
  "id:e0de086af6d8d9ab": {
    "examples": [
      {
        "value": "按 Cmd+O（Win/Linux 为 Ctrl+N），输入类名",
        "description": "按名称快速跳转到类",
        "copyable": false
      }
    ]
  },
  "id:ff6c95b5fdee665b": {
    "examples": [
      {
        "value": "按 Cmd/Ctrl+F，输入要查找的文本",
        "description": "在当前文件中查找匹配内容",
        "copyable": false
      }
    ]
  },
  "id:0e33f2a1ab4d760a": {
    "examples": [
      {
        "value": "按 Cmd+Shift+F（Win/Linux 为 Ctrl+Shift+F），输入关键词",
        "description": "在整个项目中查找字符串",
        "copyable": false
      }
    ]
  }
} };
}(typeof window !== "undefined" ? window : globalThis));
