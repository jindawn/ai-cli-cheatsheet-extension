(function registerMigratedopencodeEnrichments(globalScope) {
  "use strict";
  const modules = globalScope.CHEATSHEET_ENRICHMENT_MODULES ||= {};
  modules["opencode"] = { ...(modules["opencode"] || {}), ...{
  "id:bbdef6839d8b634d": {
    "examples": [
      {
        "value": "/new",
        "description": "清空当前上下文并开始新会话"
      }
    ]
  },
  "id:24c6e93d5df8e6b7": {
    "examples": [
      {
        "value": "/compact",
        "description": "压缩当前会话上下文以释放 token"
      }
    ]
  },
  "id:8dc0a4a63ab72090": {
    "examples": [
      {
        "value": "/undo",
        "description": "撤销最后一条消息以及相关文件改动",
        "warning": "需要在 Git 仓库中使用"
      }
    ]
  },
  "id:b73891070fc3e862": {
    "examples": [
      {
        "value": "/sessions",
        "description": "列出历史会话并切换到其中一个"
      }
    ]
  },
  "id:c957bff9c4115d34": {
    "examples": [
      {
        "value": "opencode run \"检查测试失败的原因\"",
        "description": "非交互执行一次任务并输出结果"
      }
    ]
  },
  "id:89592c78df3af08a": {
    "examples": [
      {
        "value": "opencode run -m anthropic/claude-sonnet \"总结改动\"",
        "description": "指定 provider/model 执行一次任务"
      }
    ]
  },
  "id:d83a296afac5d1b6": {
    "examples": [
      {
        "value": "/models",
        "description": "列出所有已配置提供商的可用模型"
      }
    ]
  },
  "id:e981f3605f403a15": {
    "examples": [
      {
        "value": "/editor",
        "description": "使用系统 EDITOR 编写较长的提示词"
      }
    ]
  },
  "id:9058643e35106a3d": {
    "examples": [
      {
        "value": "/export",
        "description": "将当前会话导出为 Markdown 并用编辑器打开"
      }
    ]
  },
  "id:55c9c7ac7c30244e": {
    "examples": [
      {
        "value": "opencode stats --days 7",
        "description": "查看最近 7 天的 token 用量和费用统计"
      }
    ]
  },
  "id:b68e3c4144d1eba3": {
    "examples": [
      {
        "value": "opencode mcp auth github",
        "description": "对名为 github 的 OAuth MCP 服务器发起认证"
      }
    ]
  },
  "id:ee4a4602d1d60c6e": {
    "examples": [
      {
        "value": "opencode plugin @opencode/git",
        "description": "安装 @opencode/git 插件并更新配置"
      }
    ]
  },
  "id:678e1b7014b20f8c": {
    "examples": [
      {
        "value": "opencode --agent build",
        "description": "以 build agent 启动一次会话"
      }
    ]
  }
} };
}(typeof window !== "undefined" ? window : globalThis));
