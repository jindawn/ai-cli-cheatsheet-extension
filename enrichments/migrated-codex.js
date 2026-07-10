(function registerMigratedcodexEnrichments(globalScope) {
  "use strict";
  const modules = globalScope.CHEATSHEET_ENRICHMENT_MODULES ||= {};
  modules["codex"] = { ...(modules["codex"] || {}), ...{
  "id:991d78879f421558": {
    "examples": [
      {
        "value": "/model",
        "description": "打开当前会话的模型与推理强度选择器"
      }
    ]
  },
  "id:a73e406dd79475b7": {
    "examples": [
      {
        "value": "/plan 为缓存模块设计迁移方案",
        "description": "携带初始目标进入只读计划模式"
      }
    ]
  },
  "id:777ac1b05cc78ea2": {
    "examples": [
      {
        "value": "/review",
        "description": "审查当前工作区改动并指出正确性和测试问题"
      }
    ]
  },
  "id:8358e9a120935b74": {
    "examples": [
      {
        "value": "/resume",
        "description": "从已保存的会话列表中选择并恢复"
      }
    ]
  },
  "id:033fb3b9573847ec": {
    "examples": [
      {
        "value": "codex exec \"运行测试并解释失败原因\"",
        "description": "非交互执行一次任务，适合脚本或 CI 使用"
      }
    ]
  },
  "id:346eb9c976be999e": {
    "examples": [
      {
        "value": "codex exec --json \"检查依赖安全问题\"",
        "description": "以 JSON 事件流输出执行过程，便于程序处理"
      }
    ]
  },
  "id:d0ab7f9c8fbe5354": {
    "examples": [
      {
        "value": "@src/auth.ts 检查这个文件的权限处理",
        "description": "搜索并把工作区文件加入当前提示词"
      }
    ]
  },
  "id:8027705783b45e04": {
    "examples": [
      {
        "value": "!git diff --stat",
        "description": "在当前审批与沙盒规则下执行本地命令"
      }
    ]
  },
  "id:794dc7571018f8f4": {
    "examples": [
      {
        "value": "/init",
        "description": "在当前目录生成项目级 AGENTS.md 说明文件"
      }
    ]
  },
  "id:30d30d0db9d3be09": {
    "examples": [
      {
        "value": "/skills",
        "description": "浏览当前可用技能并选择一个使用"
      }
    ]
  },
  "id:2fae693af8e40fed": {
    "examples": [
      {
        "value": "codex --profile work",
        "description": "加载 config.toml 中名为 work 的配置档案后启动"
      }
    ]
  },
  "id:7ae646e013acc23a": {
    "examples": [
      {
        "value": "/fast on",
        "description": "开启当前模型的快速服务层，响应更快（仅部分模型支持）",
        "sourceUrl": "https://developers.openai.com/codex/cli/"
      },
      {
        "value": "/fast status",
        "description": "查看快速服务层当前是否已启用",
        "sourceUrl": "https://developers.openai.com/codex/cli/"
      },
      {
        "value": "/fast off",
        "description": "关闭快速服务层，回到标准服务",
        "sourceUrl": "https://developers.openai.com/codex/cli/"
      }
    ]
  },
  "id:97584e83906a2146": {
    "examples": [
      {
        "value": "/raw on",
        "description": "开启原始回滚模式，查看未经渲染的模型输出（同 Alt+R）",
        "sourceUrl": "https://developers.openai.com/codex/cli/"
      },
      {
        "value": "/raw off",
        "description": "关闭原始模式，恢复正常渲染显示",
        "sourceUrl": "https://developers.openai.com/codex/cli/"
      }
    ]
  },
  "id:0eac1f66ddbbeb8c": {
    "examples": [
      {
        "value": "codex resume",
        "description": "打开会话选择器，从当前目录的历史会话中挑一个恢复",
        "sourceUrl": "https://developers.openai.com/codex/cli/"
      },
      {
        "value": "codex resume --last",
        "description": "直接恢复最近一次会话，跳过选择器",
        "sourceUrl": "https://developers.openai.com/codex/cli/"
      },
      {
        "value": "codex resume --all",
        "description": "跨所有目录搜索历史会话后再选择恢复",
        "sourceUrl": "https://developers.openai.com/codex/cli/"
      }
    ]
  }
} };
}(typeof window !== "undefined" ? window : globalThis));
