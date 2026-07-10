(function registerMigratedopenclawEnrichments(globalScope) {
  "use strict";
  const modules = globalScope.CHEATSHEET_ENRICHMENT_MODULES ||= {};
  modules["openclaw"] = { ...(modules["openclaw"] || {}), ...{
  "id:fbb67b7da30ad0b9": {
    "examples": [
      {
        "value": "/new",
        "description": "归档当前会话并开始一个全新会话"
      }
    ]
  },
  "id:4de151f193665748": {
    "examples": [
      {
        "value": "/compact 保留部署步骤和未解决问题",
        "description": "按指定重点压缩当前会话上下文"
      }
    ]
  },
  "id:5711ecd96a7fbf50": {
    "examples": [
      {
        "value": "/model status",
        "description": "查看当前会话正在使用的模型"
      }
    ]
  },
  "id:f5aa1833ac320abb": {
    "examples": [
      {
        "value": "/context detail",
        "description": "查看当前上下文的详细组成"
      }
    ]
  },
  "id:379f0ac8c7bb0032": {
    "examples": [
      {
        "value": "/usage cost",
        "description": "在回复底部显示费用信息"
      }
    ]
  },
  "id:327c9a6aff9a5e1a": {
    "examples": [
      {
        "value": "/restart",
        "description": "重启 OpenClaw 服务",
        "warning": "会短暂中断当前服务连接"
      }
    ]
  },
  "id:626e8b1b8d02a81f": {
    "examples": [
      {
        "value": "/status",
        "description": "查看 Gateway 运行时间、插件健康和当前状态"
      }
    ]
  },
  "id:f4ea834023a363bb": {
    "examples": [
      {
        "value": "/bash git status",
        "description": "在宿主机执行 shell 命令"
      }
    ]
  },
  "id:b8859b6ce868ca29": {
    "examples": [
      {
        "value": "openclaw doctor",
        "description": "检查配置、运行迁移并修复可识别问题",
        "warning": "可能修改本地配置，执行前建议备份"
      }
    ]
  },
  "id:4f4ab1642ae9639b": {
    "examples": [
      {
        "value": "openclaw gateway status",
        "description": "检查 Gateway 守护进程和 RPC 是否可达"
      }
    ]
  },
  "id:f4cef846aacdd257": {
    "examples": [
      {
        "value": "/name 登录重构",
        "description": "把当前会话命名为「登录重构」，便于以后检索"
      }
    ]
  },
  "id:febbc2fc35ffadef": {
    "examples": [
      {
        "value": "/skill commit-helper 生成本次提交信息",
        "description": "按名称调用 commit-helper 技能并传入输入"
      }
    ]
  },
  "id:c8e54a8ed187b5d7": {
    "examples": [
      {
        "value": "openclaw config set model.default gpt-5.5",
        "description": "把 openclaw.json 中 model.default 设为 gpt-5.5"
      }
    ]
  },
  "id:6abe2d5ff2cde5e4": {
    "examples": [
      {
        "value": "openclaw config get model.default",
        "description": "按路径读取 openclaw.json 中 model.default 的当前值",
        "sourceUrl": "https://docs.openclaw.ai/tools/slash-commands"
      }
    ]
  },
  "id:d42c008b96ed3378": {
    "examples": [
      {
        "value": "/fast on",
        "description": "开启快速模式，provider 映射为高优先级推理",
        "sourceUrl": "https://docs.openclaw.ai/tools/slash-commands"
      },
      {
        "value": "/fast default",
        "description": "恢复到 provider 的默认推理优先级",
        "sourceUrl": "https://docs.openclaw.ai/tools/slash-commands"
      },
      {
        "value": "/fast off",
        "description": "关闭快速模式",
        "sourceUrl": "https://docs.openclaw.ai/tools/slash-commands"
      }
    ]
  },
  "id:adf27b2485f22917": {
    "examples": [
      {
        "value": "/tools compact",
        "description": "以精简列表显示当前代理可用的工具",
        "sourceUrl": "https://docs.openclaw.ai/tools/slash-commands"
      },
      {
        "value": "/tools verbose",
        "description": "显示每个工具的完整描述与参数",
        "sourceUrl": "https://docs.openclaw.ai/tools/slash-commands"
      }
    ]
  },
  "id:7b374797e49c51d4": {
    "examples": [
      {
        "value": "/goal start 完成登录页重构并补测试",
        "description": "为当前会话设定一个持久追踪的目标",
        "sourceUrl": "https://docs.openclaw.ai/tools/slash-commands"
      },
      {
        "value": "/goal status",
        "description": "查看当前目标及完成进度",
        "sourceUrl": "https://docs.openclaw.ai/tools/slash-commands"
      },
      {
        "value": "/goal clear",
        "description": "清除目标，停止追踪",
        "sourceUrl": "https://docs.openclaw.ai/tools/slash-commands"
      }
    ]
  }
} };
}(typeof window !== "undefined" ? window : globalThis));
