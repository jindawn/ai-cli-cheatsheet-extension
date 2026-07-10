(function registerMigratedcursorEnrichments(globalScope) {
  "use strict";
  const modules = globalScope.CHEATSHEET_ENRICHMENT_MODULES ||= {};
  modules["cursor"] = { ...(modules["cursor"] || {}), ...{
  "id:8ff2cda22ea7f208": {
    "examples": [
      {
        "value": "选中要修改的代码后按 Cmd/Ctrl+I，输入“提取为可复用函数”",
        "description": "让 Agent 基于当前上下文直接修改代码",
        "copyable": false
      }
    ]
  },
  "id:8a3401e170d3a97e": {
    "examples": [
      {
        "value": "按 Cmd/Ctrl+L 后询问“这个函数为什么会重复请求？”",
        "description": "在 AI Chat 中分析当前代码",
        "copyable": false
      }
    ]
  },
  "id:ac8177dbfb88fc54": {
    "examples": [
      {
        "value": "选中一段代码，按 Cmd/Ctrl+K，输入“增加参数校验”",
        "description": "对选中代码进行行内 AI 编辑",
        "copyable": false
      }
    ]
  },
  "id:5743ebc7c497754a": {
    "examples": [
      {
        "value": "在终端按 Cmd/Ctrl+K，输入“查找占用 3000 端口的进程”",
        "description": "根据自然语言生成终端命令",
        "copyable": false
      }
    ]
  },
  "id:e86466bd23691cc8": {
    "examples": [
      {
        "value": "选中关键代码后按 Cmd/Ctrl+Shift+L，再到 Chat 中提问",
        "description": "把选中代码加入 AI 对话上下文",
        "copyable": false
      }
    ]
  },
  "id:023a6020a0d0428b": {
    "examples": [
      {
        "value": "输入问题后按 Cmd/Ctrl+Enter",
        "description": "提交问题并搜索整个代码库作为上下文",
        "copyable": false
      }
    ]
  },
  "id:269732e21e794743": {
    "examples": [
      {
        "value": "出现灰色代码补全时按 Tab",
        "description": "接受当前整行或整块 Cursor Tab 建议",
        "copyable": false
      }
    ]
  },
  "id:7970689048e3c5af": {
    "examples": [
      {
        "value": "按 Cmd/Ctrl+Shift+P，输入命令名称",
        "description": "打开命令面板并执行编辑器动作",
        "copyable": false
      }
    ]
  },
  "id:89aacdb4b19fd234": {
    "examples": [
      {
        "value": "@Files src/api.ts",
        "description": "在 Chat 或 Composer 中引用指定文件",
        "copyable": false
      }
    ]
  },
  "id:9d8c54e3fec1f911": {
    "examples": [
      {
        "value": "@Codebase 登录状态在哪里保存？",
        "description": "让 AI 在整个代码库中搜索相关实现",
        "copyable": false
      }
    ]
  }
} };
}(typeof window !== "undefined" ? window : globalThis));
