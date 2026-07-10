(function registerMigratedclaudeCodeEnrichments(globalScope) {
  "use strict";
  const modules = globalScope.CHEATSHEET_ENRICHMENT_MODULES ||= {};
  modules["claude-code"] = { ...(modules["claude-code"] || {}), ...{
  "id:776b9cb01c53263d": {
    "examples": [
      {
        "value": "/compact 保留当前实现决策和未完成任务",
        "description": "按指定重点压缩上下文，释放可用上下文空间"
      }
    ]
  },
  "id:1949f76d956983bb": {
    "examples": [
      {
        "value": "/model",
        "description": "打开模型选择器并调整当前会话模型"
      }
    ]
  },
  "id:f99f88519066cc37": {
    "examples": [
      {
        "value": "/resume",
        "description": "打开会话选择器；也可以在后面填写会话名称或 ID"
      }
    ]
  },
  "id:400dab7510bea568": {
    "examples": [
      {
        "value": "/plan 重构登录模块并补充测试",
        "description": "带着具体目标进入计划模式"
      }
    ]
  },
  "id:9b8c8d522860e2f2": {
    "examples": [
      {
        "value": "/review 123",
        "description": "审查编号为 123 的 Pull Request"
      }
    ]
  },
  "id:d7127ca559ac589f": {
    "examples": [
      {
        "value": "!git status",
        "description": "在会话中执行 shell 命令，并把输出加入上下文"
      }
    ]
  },
  "id:b4368fb4bea77e35": {
    "examples": [
      {
        "value": "/init",
        "description": "分析当前项目并生成 CLAUDE.md 初稿"
      }
    ]
  },
  "id:c2a72afc10dc3897": {
    "examples": [
      {
        "value": "/context all",
        "description": "查看完整上下文占用及可优化内容"
      }
    ]
  },
  "id:b4b4f087262d7cfb": {
    "examples": [
      {
        "value": "/tasks",
        "description": "查看并管理当前会话中的后台任务"
      }
    ]
  },
  "id:ba1da527cfe5b31b": {
    "examples": [
      {
        "value": "/permissions",
        "description": "管理工具的允许、询问和拒绝规则"
      }
    ]
  },
  "id:edf7046c0cc9e85b": {
    "examples": [
      {
        "value": "/clear",
        "description": "开启新对话并清空上下文，项目记忆仍会保留"
      }
    ]
  },
  "id:66e267eff4163728": {
    "examples": [
      {
        "value": "/branch experiment-auth",
        "description": "在当前节点创建名为 experiment-auth 的对话分支，独立尝试新方向"
      }
    ]
  },
  "id:756bfa047d64719e": {
    "examples": [
      {
        "value": "/effort high",
        "description": "把推理强度调到 high，处理复杂重构或难调的 bug 时更细致",
        "sourceUrl": "https://code.claude.com/docs/en/interactive-mode"
      },
      {
        "value": "/effort low",
        "description": "简单问答或小改动时降到 low，响应更快、更省上下文",
        "sourceUrl": "https://code.claude.com/docs/en/interactive-mode"
      },
      {
        "value": "/effort auto",
        "description": "交给 Claude 按任务复杂度自动选择推理强度",
        "sourceUrl": "https://code.claude.com/docs/en/interactive-mode"
      }
    ]
  },
  "id:7e160c1c19714033": {
    "examples": [
      {
        "value": "/fast on",
        "description": "为支持的 Opus 模型开启低延迟响应；速度更快，但 token 单价更高，能力与质量不变",
        "sourceUrl": "https://code.claude.com/docs/en/fast-mode"
      },
      {
        "value": "/fast off",
        "description": "关闭低延迟模式，恢复标准响应速度和标准 token 价格",
        "sourceUrl": "https://code.claude.com/docs/en/fast-mode"
      }
    ]
  },
  "id:c1f1bc2fdc781f4b": {
    "examples": [
      {
        "value": "/goal 通过所有单元测试再停止",
        "description": "设定一个跨多轮持续追踪的目标，直到条件满足",
        "sourceUrl": "https://code.claude.com/docs/en/interactive-mode"
      },
      {
        "value": "/goal clear",
        "description": "清除当前目标，停止跨轮追踪",
        "sourceUrl": "https://code.claude.com/docs/en/interactive-mode"
      }
    ]
  }
} };
}(typeof window !== "undefined" ? window : globalThis));
