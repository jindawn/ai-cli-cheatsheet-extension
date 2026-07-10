(function registerMigratedgeminiCliEnrichments(globalScope) {
  "use strict";
  const modules = globalScope.CHEATSHEET_ENRICHMENT_MODULES ||= {};
  modules["gemini-cli"] = { ...(modules["gemini-cli"] || {}), ...{
  "id:caf5f35e5809a0ea": {
    "examples": [
      {
        "value": "/compress",
        "description": "压缩当前对话上下文，适合长会话继续工作"
      }
    ]
  },
  "id:ff5d79bf2b78fa19": {
    "examples": [
      {
        "value": "/model set",
        "description": "进入模型设置流程并选择当前使用的模型"
      }
    ]
  },
  "id:7f2b456e09f16cd5": {
    "examples": [
      {
        "value": "/resume",
        "description": "浏览并恢复之前保存的会话"
      }
    ]
  },
  "id:0747ca7a77a6bc97": {
    "examples": [
      {
        "value": "/memory show",
        "description": "查看当前从 GEMINI.md 加载的记忆内容"
      }
    ]
  },
  "id:a7e1d5e3264e49ca": {
    "examples": [
      {
        "value": "@src/auth.ts 解释登录流程",
        "description": "把指定文件内容加入当前提示词"
      }
    ]
  },
  "id:1d674a307a676e58": {
    "examples": [
      {
        "value": "!git status",
        "description": "执行本地 shell 命令并显示结果"
      }
    ]
  },
  "id:257de0c49ddd37bd": {
    "examples": [
      {
        "value": "/help",
        "description": "显示当前版本支持的命令和快捷键"
      }
    ]
  },
  "id:feba3bde7df3e178": {
    "examples": [
      {
        "value": "/settings",
        "description": "打开带校验和说明的设置编辑器"
      }
    ]
  },
  "id:629d065b3549b4e9": {
    "examples": [
      {
        "value": "/stats model",
        "description": "查看当前会话按模型统计的用量信息"
      }
    ]
  },
  "id:66597ed89b719f59": {
    "examples": [
      {
        "value": "/tools desc",
        "description": "列出可用工具并显示完整描述"
      }
    ]
  },
  "id:341bd529b0f6a6e8": {
    "examples": [
      {
        "value": "/agents list",
        "description": "列出当前可用的本地与远程子代理",
        "sourceUrl": "https://geminicli.com/docs/"
      },
      {
        "value": "/agents enable",
        "description": "启用某个子代理，使其参与任务",
        "sourceUrl": "https://geminicli.com/docs/"
      },
      {
        "value": "/agents config",
        "description": "查看或调整子代理的配置",
        "sourceUrl": "https://geminicli.com/docs/"
      }
    ]
  },
  "id:24f41f74a75c7c34": {
    "examples": [
      {
        "value": "/commands list",
        "description": "列出从 .toml 文件加载的自定义命令",
        "sourceUrl": "https://geminicli.com/docs/"
      },
      {
        "value": "/commands reload",
        "description": "改动 .toml 后重新加载自定义命令，无需重启",
        "sourceUrl": "https://geminicli.com/docs/"
      }
    ]
  },
  "id:8e5b35d88fb2c6c3": {
    "examples": [
      {
        "value": "/extensions list",
        "description": "列出已安装的扩展及其启用状态",
        "sourceUrl": "https://geminicli.com/docs/"
      },
      {
        "value": "/extensions install",
        "description": "安装一个新扩展",
        "sourceUrl": "https://geminicli.com/docs/"
      },
      {
        "value": "/extensions update",
        "description": "把已安装扩展更新到最新版本",
        "sourceUrl": "https://geminicli.com/docs/"
      }
    ]
  },
  "id:ca56153155d4bad0": {
    "examples": [
      {
        "value": "/hooks list",
        "description": "列出已注册的生命周期事件钩子",
        "sourceUrl": "https://geminicli.com/docs/"
      },
      {
        "value": "/hooks enable",
        "description": "启用钩子，让它在对应事件时触发",
        "sourceUrl": "https://geminicli.com/docs/"
      },
      {
        "value": "/hooks disable",
        "description": "临时停用钩子，但保留其配置",
        "sourceUrl": "https://geminicli.com/docs/"
      }
    ]
  },
  "id:d5a97a70a319062e": {
    "examples": [
      {
        "value": "/ide status",
        "description": "查看当前 IDE 集成是否已连接",
        "sourceUrl": "https://geminicli.com/docs/"
      },
      {
        "value": "/ide install",
        "description": "安装 IDE 伴随插件以启用深度集成",
        "sourceUrl": "https://geminicli.com/docs/"
      },
      {
        "value": "/ide enable",
        "description": "启用 IDE 集成，共享编辑器上下文",
        "sourceUrl": "https://geminicli.com/docs/"
      }
    ]
  },
  "id:7e1b35f37ba36037": {
    "examples": [
      {
        "value": "/mcp list",
        "description": "列出已配置的 MCP 服务器及连接状态",
        "sourceUrl": "https://geminicli.com/docs/"
      },
      {
        "value": "/mcp auth",
        "description": "对需要 OAuth 的 MCP 服务器发起认证",
        "sourceUrl": "https://geminicli.com/docs/"
      },
      {
        "value": "/mcp reload",
        "description": "修改配置后重新加载 MCP 服务器",
        "sourceUrl": "https://geminicli.com/docs/"
      }
    ]
  },
  "id:8e962d8d25d95a3d": {
    "examples": [
      {
        "value": "/skills list",
        "description": "列出可用的 Agent Skills",
        "sourceUrl": "https://geminicli.com/docs/"
      },
      {
        "value": "/skills enable",
        "description": "启用某个技能，按需提供专业能力",
        "sourceUrl": "https://geminicli.com/docs/"
      },
      {
        "value": "/skills reload",
        "description": "改动技能定义后重新加载",
        "sourceUrl": "https://geminicli.com/docs/"
      }
    ]
  }
} };
}(typeof window !== "undefined" ? window : globalThis));
