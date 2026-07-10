(function registerMigratedantigravityCliEnrichments(globalScope) {
  "use strict";
  const modules = globalScope.CHEATSHEET_ENRICHMENT_MODULES ||= {};
  modules["antigravity-cli"] = { ...(modules["antigravity-cli"] || {}), ...{
  "id:c078911b531fbdc3": {
    "examples": [
      {
        "value": "agy -p \"解释这个项目的目录结构\"",
        "description": "非交互执行一次任务并把结果输出到终端"
      }
    ]
  },
  "id:e441243d9d431615": {
    "examples": [
      {
        "value": "agy --model \"Gemini 3.1 Pro\"",
        "description": "使用指定模型启动交互会话"
      }
    ]
  },
  "id:186d0438d19ceaed": {
    "examples": [
      {
        "value": "/model",
        "description": "在当前会话中打开模型选择界面"
      }
    ]
  },
  "id:06b5d0ad28912284": {
    "examples": [
      {
        "value": "/diff",
        "description": "查看代理在工作区中产生的文件改动"
      }
    ]
  },
  "id:f91dba3ba4d2fe4f": {
    "examples": [
      {
        "value": "/rewind",
        "description": "选择较早的消息并回退会话状态"
      }
    ]
  },
  "id:0d74170ed385e88f": {
    "examples": [
      {
        "value": "/resume",
        "description": "打开历史会话列表并恢复一次会话"
      }
    ]
  },
  "id:9214a76c9e068280": {
    "examples": [
      {
        "value": "agy",
        "description": "在当前目录启动 Antigravity 交互式终端界面"
      }
    ]
  },
  "id:9b27426fc91ec116": {
    "examples": [
      {
        "value": "agy models",
        "description": "列出当前账号和套餐可使用的模型"
      }
    ]
  },
  "id:24a611d3af704936": {
    "examples": [
      {
        "value": "/permissions",
        "description": "查看和编辑当前作用域的工具权限规则"
      }
    ]
  },
  "id:dd96c8aa5687bdf8": {
    "examples": [
      {
        "value": "/fast",
        "description": "跳过规划阶段直接执行，适合范围明确的小任务",
        "warning": "复杂任务建议保留规划阶段"
      }
    ]
  }
} };
}(typeof window !== "undefined" ? window : globalThis));
