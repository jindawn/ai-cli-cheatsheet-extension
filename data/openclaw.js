// Generated from validated structured data. Manual edits must follow data/SCHEMA.md.
window.CHEATSHEET_DATA = window.CHEATSHEET_DATA || {};
window.CHEATSHEET_DATA["openclaw"] = {
  "meta": {
    "id": "openclaw",
    "name": "OpenClaw",
    "color": "#e55934",
    "source": "第一方来源与确定性官方入口清单，核验于 2026-07-14",
    "builtIn": false,
    "sourceUrl": "https://docs.openclaw.ai/tools/slash-commands",
    "updatedAt": "2026-06-20",
    "contentCheckedAt": "2026-07-02",
    "sourceCheckedAt": "2026-06-21",
    "updatePolicy": "version-driven",
    "verificationStatus": "manual",
    "coverage": "官方入口全集；精确范围、组件与平台限制见 shared/official-inventories/openclaw.json",
    "platforms": [
      "mac",
      "windows",
      "linux"
    ],
    "order": 999,
    "sources": [
      {
        "id": "openclaw-slash",
        "title": "OpenClaw slash commands",
        "url": "https://docs.openclaw.ai/tools/slash-commands",
        "kind": "official-doc",
        "maintainer": "OpenClaw",
        "evidenceTier": "first-party",
        "lastVerifiedAt": "2026-06-21",
        "resolvedUrl": "https://docs.openclaw.ai/tools/slash-commands",
        "pageTitle": "OpenClaw slash commands",
        "checkedAt": "2026-06-21",
        "purposes": [
          "command-existence",
          "option-semantics",
          "examples"
        ]
      },
      {
        "id": "openclaw-cli",
        "title": "OpenClaw CLI reference",
        "url": "https://docs.openclaw.ai/cli",
        "kind": "official-doc",
        "maintainer": "OpenClaw",
        "evidenceTier": "first-party",
        "lastVerifiedAt": "2026-06-21",
        "resolvedUrl": "https://docs.openclaw.ai/cli",
        "pageTitle": "OpenClaw CLI reference",
        "checkedAt": "2026-06-21",
        "purposes": [
          "command-existence",
          "option-semantics",
          "examples"
        ]
      }
    ],
    "officialCoverage": {
      "scope": "all-command-entrypoints",
      "status": "complete",
      "total": 44,
      "covered": 44,
      "checkedAt": "2026-07-13",
      "sourceIds": [
        "openclaw-slash",
        "openclaw-cli"
      ],
      "inventoryHash": "sha256:997c7122b873cca09ff12384d5bbd6e598a3083ad216a3ebcdef74cfd848cac2"
    }
  },
  "items": [
    {
      "cat": "slash",
      "cmd": "/new",
      "en": "Archive current session and start a fresh one",
      "zh": "归档当前会话并开始新会话（可选切换模型）",
      "id": "fbb67b7da30ad0b9",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "openclaw-slash",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.openclaw.ai/tools/slash-commands（页面内检索 /new [model]）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "模型",
        "切换模型",
        "模型选择",
        "会话",
        "恢复会话",
        "历史会话",
        "归档当前会话并开始新会话（可选切换模型）",
        "Archive current session and start a fresh one"
      ],
      "examples": [
        {
          "value": "/new",
          "description": "归档当前会话并开始一个全新会话",
          "scenario": "在实际工作中需要归档当前会话并开始新会话（可选切换模型）时",
          "goal": "归档当前会话并开始新会话（可选切换模型）",
          "expected": "操作后，工具完成“归档当前会话并开始一个全新会话”对应的行为；条件不满足时返回错误。",
          "caveat": "执行前确认当前目录、参数和工具版本与示例一致",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "openclaw-slash"
          ],
          "groundingRefs": [
            {
              "sourceId": "openclaw-slash",
              "locator": "https://docs.openclaw.ai/tools/slash-commands（页面内检索 /new [model]）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ]
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/reset",
      "en": "Reset current session in place",
      "zh": "就地重置当前会话（soft 保留对话记录）",
      "id": "5a2cc73776eb8375",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "openclaw-slash",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.openclaw.ai/tools/slash-commands（页面内检索 /reset [soft [message]]）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "会话",
        "恢复会话",
        "历史会话",
        "就地重置当前会话（soft 保留对话记录）",
        "Reset current session in place",
        "/reset"
      ],
      "examples": [
        {
          "value": "/reset soft \"重新开始\"",
          "description": "就地重置当前会话（soft 保留对话记录）",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要就地重置当前会话（soft 保留对话记录）时",
          "goal": "就地重置当前会话（soft 保留对话记录）",
          "expected": "操作后，工具完成“就地重置当前会话（soft 保留对话记录）”对应的行为；条件不满足时返回错误。",
          "caveat": "执行前确认当前目录、参数和工具版本与示例一致",
          "groundingRefs": [
            {
              "sourceId": "openclaw-slash",
              "locator": "https://docs.openclaw.ai/tools/slash-commands（页面内检索 /reset [soft [message]]）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ]
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/name",
      "en": "Name or rename the current session",
      "zh": "命名或重命名当前会话",
      "id": "f4cef846aacdd257",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "openclaw-slash",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.openclaw.ai/tools/slash-commands（页面内检索 /name <title>）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "移动",
        "重命名",
        "改名",
        "会话",
        "恢复会话",
        "历史会话",
        "命名或重命名当前会话",
        "Name or rename the current session"
      ],
      "examples": [
        {
          "value": "/name 登录重构",
          "description": "把当前会话命名为「登录重构」，便于以后检索",
          "scenario": "在实际工作中需要命名或重命名当前会话时",
          "goal": "命名或重命名当前会话",
          "expected": "操作后，工具完成“把当前会话命名为「登录重构」，便于以后检索”对应的行为；条件不满足时返回错误。",
          "caveat": "执行前确认当前目录、参数和工具版本与示例一致",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "openclaw-slash"
          ],
          "groundingRefs": [
            {
              "sourceId": "openclaw-slash",
              "locator": "https://docs.openclaw.ai/tools/slash-commands（页面内检索 /name <title>）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ]
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/compact",
      "en": "Compact the session context",
      "zh": "压缩会话上下文以节省 token",
      "id": "4de151f193665748",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "openclaw-slash",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.openclaw.ai/tools/slash-commands（页面内检索 /compact [instructions]）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "会话",
        "恢复会话",
        "历史会话",
        "压缩",
        "精简上下文",
        "节省上下文",
        "压缩会话上下文以节省 token",
        "Compact the session context"
      ],
      "examples": [
        {
          "value": "/compact 保留部署步骤和未解决问题",
          "description": "按指定重点压缩当前会话上下文",
          "scenario": "在实际工作中需要压缩会话上下文以节省 token时",
          "goal": "压缩会话上下文以节省 token",
          "expected": "操作后，工具完成“按指定重点压缩当前会话上下文”对应的行为；条件不满足时返回错误。",
          "caveat": "执行前确认当前目录、参数和工具版本与示例一致",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "openclaw-slash"
          ],
          "groundingRefs": [
            {
              "sourceId": "openclaw-slash",
              "locator": "https://docs.openclaw.ai/tools/slash-commands（页面内检索 /compact [instructions]）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ]
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/stop",
      "en": "Abort the current run",
      "zh": "中止当前正在执行的运行",
      "id": "e935e9217127827f",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "openclaw-slash",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.openclaw.ai/tools/slash-commands（页面内检索 /stop）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "中止当前正在执行的运行",
        "Abort the current run",
        "/stop"
      ],
      "examples": [
        {
          "value": "/stop",
          "description": "中止当前正在执行的运行",
          "scenario": "在实际工作中需要中止当前正在执行的运行时",
          "goal": "中止当前正在执行的运行",
          "expected": "操作后，工具完成“中止当前正在执行的运行”对应的行为；条件不满足时返回错误。",
          "caveat": "执行前确认当前目录、参数和工具版本与示例一致",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "openclaw-slash"
          ],
          "groundingRefs": [
            {
              "sourceId": "openclaw-slash",
              "locator": "https://docs.openclaw.ai/tools/slash-commands（页面内检索 /stop）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ]
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/think",
      "en": "Set the thinking level",
      "zh": "设置思考级别（也可用 /thinking 或 /t）",
      "id": "af6d7ce1c0b55201",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "openclaw-slash",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.openclaw.ai/tools/slash-commands（页面内检索 /think <level|default>）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "配置",
        "设置",
        "偏好",
        "设置思考级别（也可用 /thinking 或 /t）",
        "Set the thinking level",
        "/think"
      ],
      "examples": [
        {
          "value": "/think high",
          "description": "调高思考级别，处理复杂任务时推理更充分",
          "scenario": "在实际工作中需要设置思考级别（也可用 /thinking 或 /t）时",
          "goal": "设置思考级别（也可用 /thinking 或 /t）",
          "expected": "操作后，工具完成“调高思考级别，处理复杂任务时推理更充分”对应的行为；条件不满足时返回错误。",
          "caveat": "执行前确认当前目录、参数和工具版本与示例一致",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "openclaw-slash"
          ],
          "groundingRefs": [
            {
              "sourceId": "openclaw-slash",
              "locator": "https://docs.openclaw.ai/tools/slash-commands（页面内检索 /think <level|default>）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ]
        },
        {
          "value": "/think default",
          "description": "恢复到默认思考级别",
          "scenario": "在实际工作中需要设置思考级别（也可用 /thinking 或 /t）时",
          "goal": "设置思考级别（也可用 /thinking 或 /t）",
          "expected": "操作后，工具完成“恢复到默认思考级别”对应的行为；条件不满足时返回错误。",
          "caveat": "执行前确认当前目录、参数和工具版本与示例一致",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "openclaw-slash"
          ],
          "groundingRefs": [
            {
              "sourceId": "openclaw-slash",
              "locator": "https://docs.openclaw.ai/tools/slash-commands（页面内检索 /think <level|default>）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ]
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/verbose",
      "en": "Toggle verbose output",
      "zh": "切换详细输出模式（也可用 /v）",
      "id": "73217f74b2e157ee",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "openclaw-slash",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.openclaw.ai/tools/slash-commands（页面内检索 /verbose on|off|full）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "切换详细输出模式（也可用 /v）",
        "Toggle verbose output",
        "/verbose"
      ],
      "examples": [
        {
          "value": "/verbose on",
          "description": "切换详细输出模式（也可用 /v）",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要切换详细输出模式（也可用 /v）时",
          "goal": "切换详细输出模式（也可用 /v）",
          "expected": "操作后，工具完成“切换详细输出模式（也可用 /v）”对应的行为；条件不满足时返回错误。",
          "caveat": "执行前确认当前目录、参数和工具版本与示例一致",
          "groundingRefs": [
            {
              "sourceId": "openclaw-slash",
              "locator": "https://docs.openclaw.ai/tools/slash-commands（页面内检索 /verbose on|off|full）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ]
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/fast",
      "en": "Toggle fast mode",
      "zh": "切换快速模式（provider 映射为高优先级推理）",
      "id": "d42c008b96ed3378",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "openclaw-slash",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.openclaw.ai/tools/slash-commands（页面内检索 /fast [on|off|default]）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "切换快速模式（provider 映射为高优先级推理）",
        "Toggle fast mode",
        "/fast"
      ],
      "examples": [
        {
          "value": "/fast on",
          "description": "开启快速模式，provider 映射为高优先级推理",
          "scenario": "在实际工作中需要切换快速模式（provider 映射为高优先级推理）时",
          "goal": "切换快速模式（provider 映射为高优先级推理）",
          "expected": "操作后，工具完成“开启快速模式，provider 映射为高优先级推理”对应的行为；条件不满足时返回错误。",
          "caveat": "执行前确认当前目录、参数和工具版本与示例一致",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "openclaw-slash"
          ],
          "groundingRefs": [
            {
              "sourceId": "openclaw-slash",
              "locator": "https://docs.openclaw.ai/tools/slash-commands（页面内检索 /fast [on|off|default]）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ]
        },
        {
          "value": "/fast default",
          "description": "恢复到 provider 的默认推理优先级",
          "scenario": "在实际工作中需要切换快速模式（provider 映射为高优先级推理）时",
          "goal": "切换快速模式（provider 映射为高优先级推理）",
          "expected": "操作后，工具完成“恢复到 provider 的默认推理优先级”对应的行为；条件不满足时返回错误。",
          "caveat": "执行前确认当前目录、参数和工具版本与示例一致",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "openclaw-slash"
          ],
          "groundingRefs": [
            {
              "sourceId": "openclaw-slash",
              "locator": "https://docs.openclaw.ai/tools/slash-commands（页面内检索 /fast [on|off|default]）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ]
        },
        {
          "value": "/fast off",
          "description": "关闭快速模式",
          "scenario": "在实际工作中需要切换快速模式（provider 映射为高优先级推理）时",
          "goal": "切换快速模式（provider 映射为高优先级推理）",
          "expected": "操作后，工具完成“关闭快速模式”对应的行为；条件不满足时返回错误。",
          "caveat": "执行前确认当前目录、参数和工具版本与示例一致",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "openclaw-slash"
          ],
          "groundingRefs": [
            {
              "sourceId": "openclaw-slash",
              "locator": "https://docs.openclaw.ai/tools/slash-commands（页面内检索 /fast [on|off|default]）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ]
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/model",
      "en": "Show or set the model",
      "zh": "查看或切换当前会话模型",
      "id": "5711ecd96a7fbf50",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "openclaw-slash",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.openclaw.ai/tools/slash-commands（页面内检索 /model [name|#|status]）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "模型",
        "切换模型",
        "模型选择",
        "会话",
        "恢复会话"
      ],
      "examples": [
        {
          "value": "/model status",
          "description": "查看当前会话正在使用的模型",
          "scenario": "在实际工作中需要查看或切换当前会话模型时",
          "goal": "查看或切换当前会话模型",
          "expected": "操作后，工具完成“查看当前会话正在使用的模型”对应的行为；条件不满足时返回错误。",
          "caveat": "执行前确认当前目录、参数和工具版本与示例一致",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "openclaw-slash"
          ],
          "groundingRefs": [
            {
              "sourceId": "openclaw-slash",
              "locator": "https://docs.openclaw.ai/tools/slash-commands（页面内检索 /model [name|#|status]）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ]
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/status",
      "en": "Show execution/runtime status and uptime",
      "zh": "显示运行状态、Gateway 已运行时间、插件健康",
      "id": "626e8b1b8d02a81f",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "openclaw-slash",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.openclaw.ai/tools/slash-commands（页面内检索 /status）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "显示运行状态、Gateway 已运行时间、插件健康",
        "Show execution/runtime status and uptime",
        "/status"
      ],
      "examples": [
        {
          "value": "/status",
          "description": "查看 Gateway 运行时间、插件健康和当前状态",
          "scenario": "在实际工作中需要显示运行状态、Gateway 已运行时间、插件健康时",
          "goal": "显示运行状态、Gateway 已运行时间、插件健康",
          "expected": "操作后，工具完成“查看 Gateway 运行时间、插件健康和当前状态”对应的行为；条件不满足时返回错误。",
          "caveat": "执行前确认当前目录、参数和工具版本与示例一致",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "openclaw-slash"
          ],
          "groundingRefs": [
            {
              "sourceId": "openclaw-slash",
              "locator": "https://docs.openclaw.ai/tools/slash-commands（页面内检索 /status）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ]
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/help",
      "en": "Show the short help summary",
      "zh": "显示简短帮助摘要",
      "id": "fde4557b6bec8f07",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "openclaw-slash",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.openclaw.ai/tools/slash-commands（页面内检索 /help）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "帮助",
        "说明",
        "文档",
        "显示简短帮助摘要",
        "Show the short help summary"
      ],
      "examples": [
        {
          "value": "/help",
          "description": "显示简短帮助摘要",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要显示简短帮助摘要时",
          "goal": "显示简短帮助摘要",
          "expected": "操作后，工具完成“显示简短帮助摘要”对应的行为；条件不满足时返回错误。",
          "caveat": "执行前确认当前目录、参数和工具版本与示例一致",
          "groundingRefs": [
            {
              "sourceId": "openclaw-slash",
              "locator": "https://docs.openclaw.ai/tools/slash-commands（页面内检索 /help）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ]
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/commands",
      "en": "Show the generated command catalog",
      "zh": "显示所有可用命令目录",
      "id": "5abcc13ae9dec5fe",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "openclaw-slash",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.openclaw.ai/tools/slash-commands（页面内检索 /commands）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "显示所有可用命令目录",
        "Show the generated command catalog",
        "/commands"
      ],
      "examples": [
        {
          "value": "/commands",
          "description": "显示所有可用命令目录",
          "scenario": "在实际工作中需要显示所有可用命令目录时",
          "goal": "显示所有可用命令目录",
          "expected": "操作后，工具完成“显示所有可用命令目录”对应的行为；条件不满足时返回错误。",
          "caveat": "执行前确认当前目录、参数和工具版本与示例一致",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "openclaw-slash"
          ],
          "groundingRefs": [
            {
              "sourceId": "openclaw-slash",
              "locator": "https://docs.openclaw.ai/tools/slash-commands（页面内检索 /commands）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ]
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/tools",
      "en": "Show what the current agent can use",
      "zh": "显示当前代理可用的全部工具",
      "id": "adf27b2485f22917",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "openclaw-slash",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.openclaw.ai/tools/slash-commands（页面内检索 /tools [compact|verbose]）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "压缩",
        "精简上下文",
        "节省上下文",
        "显示当前代理可用的全部工具",
        "Show what the current agent can use"
      ],
      "examples": [
        {
          "value": "/tools compact",
          "description": "以精简列表显示当前代理可用的工具",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "openclaw-slash"
          ],
          "groundingRefs": [
            {
              "sourceId": "openclaw-slash",
              "locator": "https://docs.openclaw.ai/tools/slash-commands（页面内检索 /tools [compact|verbose]）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先显示当前代理可用的全部工具，确认当前状态与预期一致。",
          "goal": "显示当前代理可用的全部工具；使用 /tools compact 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“以精简列表显示当前代理可用的工具”对应的信息。"
        },
        {
          "value": "/tools verbose",
          "description": "显示每个工具的完整描述与参数",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "openclaw-slash"
          ],
          "groundingRefs": [
            {
              "sourceId": "openclaw-slash",
              "locator": "https://docs.openclaw.ai/tools/slash-commands（页面内检索 /tools [compact|verbose]）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先显示当前代理可用的全部工具，确认当前状态与预期一致。",
          "goal": "显示当前代理可用的全部工具；使用 /tools verbose 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“显示每个工具的完整描述与参数”对应的信息。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/usage",
      "en": "Control per-response usage footer",
      "zh": "控制每次回复后显示的用量信息",
      "id": "379f0ac8c7bb0032",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "openclaw-slash",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.openclaw.ai/tools/slash-commands（页面内检索 /usage off|tokens|full|cost）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "控制每次回复后显示的用量信息",
        "Control per-response usage footer",
        "/usage"
      ],
      "examples": [
        {
          "value": "/usage cost",
          "description": "在回复底部显示费用信息",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "openclaw-slash"
          ],
          "groundingRefs": [
            {
              "sourceId": "openclaw-slash",
              "locator": "https://docs.openclaw.ai/tools/slash-commands（页面内检索 /usage off|tokens|full|cost）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先控制每次回复后显示的用量信息，确认当前状态与预期一致。",
          "goal": "控制每次回复后显示的用量信息；使用 /usage cost 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“在回复底部显示费用信息”对应的信息。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/whoami",
      "en": "Show your sender id",
      "zh": "显示当前发送者身份标识（也可用 /id）",
      "id": "3b834956d114d227",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "openclaw-slash",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.openclaw.ai/tools/slash-commands（页面内检索 /whoami）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "显示当前发送者身份标识（也可用 /id）",
        "Show your sender id",
        "/whoami"
      ],
      "examples": [
        {
          "value": "/whoami",
          "description": "显示当前发送者身份标识",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "openclaw-slash"
          ],
          "groundingRefs": [
            {
              "sourceId": "openclaw-slash",
              "locator": "https://docs.openclaw.ai/tools/slash-commands（页面内检索 /whoami）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先显示当前发送者身份标识（也可用 /id），确认当前状态与预期一致。",
          "goal": "显示当前发送者身份标识（也可用 /id）；使用 /whoami 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“显示当前发送者身份标识”对应的信息。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/context",
      "en": "Explain how context is assembled",
      "zh": "展示当前会话上下文组装详情",
      "id": "f5aa1833ac320abb",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "openclaw-slash",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.openclaw.ai/tools/slash-commands（页面内检索 /context [list|detail|map|json]）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "会话",
        "恢复会话",
        "历史会话",
        "展示当前会话上下文组装详情",
        "Explain how context is assembled"
      ],
      "examples": [
        {
          "value": "/context detail",
          "description": "查看当前上下文的详细组成",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "openclaw-slash"
          ],
          "groundingRefs": [
            {
              "sourceId": "openclaw-slash",
              "locator": "https://docs.openclaw.ai/tools/slash-commands（页面内检索 /context [list|detail|map|json]）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "先前的工作会话被中断后，需要展示当前会话上下文组装详情，而不是重新开始。",
          "goal": "展示当前会话上下文组装详情；使用 /context detail 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“查看当前上下文的详细组成”对应的信息。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/restart",
      "en": "Restart OpenClaw",
      "zh": "重启 OpenClaw 服务",
      "id": "327c9a6aff9a5e1a",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "openclaw-slash",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.openclaw.ai/tools/slash-commands · /restart（原文：\"Restart OpenClaw\"，受 commands.restart 配置项控制，默认启用）",
          "checkedAt": "2026-07-02"
        }
      ],
      "keywords": [
        "重启 OpenClaw 服务",
        "Restart OpenClaw",
        "/restart"
      ],
      "examples": [
        {
          "value": "/restart",
          "description": "重启 OpenClaw 服务",
          "warning": "会短暂中断当前服务连接",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "openclaw-slash"
          ],
          "copyable": false,
          "riskLevels": [
            "processDisruption"
          ],
          "caveat": "会短暂中断当前服务连接；先用只读命令预览目标并保留备份",
          "groundingRefs": [
            {
              "sourceId": "openclaw-slash",
              "locator": "https://docs.openclaw.ai/tools/slash-commands · /restart（原文：\"Restart OpenClaw\"，受 commands.restart 配置项控制，默认启用）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "正在OpenClaw中完成“重启 OpenClaw 服务”这一步，需要用默认交互入口减少界面切换。",
          "goal": "重启 OpenClaw 服务；使用 /restart 完成这一步。",
          "expected": "操作后，界面完成“重启 OpenClaw 服务”对应的变化。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/activation",
      "en": "Set group activation mode",
      "zh": "设置群组激活模式（被 @ 唤醒或始终响应）",
      "id": "3d118c2c6225077b",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "openclaw-slash",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.openclaw.ai/tools/slash-commands（页面内检索 /activation mention|always）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "配置",
        "设置",
        "偏好",
        "设置群组激活模式（被 @ 唤醒或始终响应）",
        "Set group activation mode",
        "/activation"
      ],
      "examples": [
        {
          "value": "/activation mention",
          "description": "设置群组激活模式（被 @ 唤醒或始终响应）",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "openclaw-slash",
              "locator": "https://docs.openclaw.ai/tools/slash-commands（页面内检索 /activation mention|always）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前环境的默认设置不适合这次任务，需要设置群组激活模式（被 @ 唤醒或始终响应）后再继续工作。",
          "goal": "设置群组激活模式（被 @ 唤醒或始终响应）；使用 /activation mention 完成这一步。",
          "expected": "执行成功后，设置群组激活模式（被 @ 唤醒或始终响应）。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/bash",
      "en": "Run a host shell command",
      "zh": "执行宿主机 shell 命令（也可用 ! 前缀）",
      "id": "f4ea834023a363bb",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "openclaw-slash",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.openclaw.ai/tools/slash-commands（页面内检索 /bash <command>）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "执行宿主机 shell 命令（也可用 ! 前缀）",
        "Run a host shell command",
        "/bash"
      ],
      "examples": [
        {
          "value": "/bash git status",
          "description": "在宿主机执行 shell 命令",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "openclaw-slash"
          ],
          "groundingRefs": [
            {
              "sourceId": "openclaw-slash",
              "locator": "https://docs.openclaw.ai/tools/slash-commands（页面内检索 /bash <command>）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前 OpenClaw 会话正在处理与“执行宿主机 shell 命令（也可用 ! 前缀）”直接相关的任务，需要在不中断上下文的情况下执行该操作。",
          "goal": "执行宿主机 shell 命令（也可用 ! 前缀）；使用 /bash git status 完成这一步。",
          "expected": "执行成功后，在宿主机执行 shell 命令。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/skill",
      "en": "Run a skill by name",
      "zh": "按名称调用已安装的技能",
      "id": "febbc2fc35ffadef",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "openclaw-slash",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.openclaw.ai/tools/slash-commands（页面内检索 /skill <name> [input]）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "按名称调用已安装的技能",
        "Run a skill by name",
        "/skill"
      ],
      "examples": [
        {
          "value": "/skill commit-helper 生成本次提交信息",
          "description": "按名称调用 commit-helper 技能并传入输入",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "openclaw-slash"
          ],
          "groundingRefs": [
            {
              "sourceId": "openclaw-slash",
              "locator": "https://docs.openclaw.ai/tools/slash-commands（页面内检索 /skill <name> [input]）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "准备新的工作环境或资源时，需要按名称调用已安装的技能，让后续步骤具备所需入口。",
          "goal": "按名称调用已安装的技能；使用 /skill commit-helper 生成本次提交信息 完成这一步。",
          "expected": "执行成功后，按名称调用 commit-helper 技能并传入输入。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/subagents",
      "en": "Inspect sub-agent runs for current session",
      "zh": "查看当前会话的子代理执行记录",
      "id": "daa90ae4f71af979",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "openclaw-slash",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.openclaw.ai/tools/slash-commands（页面内检索 /subagents list|log|info）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "会话",
        "恢复会话",
        "历史会话",
        "查看当前会话的子代理执行记录",
        "Inspect sub-agent runs for current session"
      ],
      "examples": [
        {
          "value": "/subagents list",
          "description": "查看当前会话的子代理执行记录",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "openclaw-slash",
              "locator": "https://docs.openclaw.ai/tools/slash-commands（页面内检索 /subagents list|log|info）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "先前的工作会话被中断后，需要查看当前会话的子代理执行记录，而不是重新开始。",
          "goal": "查看当前会话的子代理执行记录；使用 /subagents list 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“查看当前会话的子代理执行记录”对应的信息。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/goal",
      "en": "Manage durable goal for current session",
      "zh": "管理当前会话的持久化目标",
      "id": "7b374797e49c51d4",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "openclaw-slash",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.openclaw.ai/tools/slash-commands（页面内检索 /goal [status|start|pause|resume|complete|block|clear]）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "会话",
        "恢复会话",
        "历史会话",
        "管理当前会话的持久化目标",
        "Manage durable goal for current session"
      ],
      "examples": [
        {
          "value": "/goal start 完成登录页重构并补测试",
          "description": "为当前会话设定一个持久追踪的目标",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "openclaw-slash"
          ],
          "groundingRefs": [
            {
              "sourceId": "openclaw-slash",
              "locator": "https://docs.openclaw.ai/tools/slash-commands（页面内检索 /goal [status|start|pause|resume|complete|block|clear]）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "先前的工作会话被中断后，需要管理当前会话的持久化目标，而不是重新开始。",
          "goal": "管理当前会话的持久化目标；使用 /goal start 完成登录页重构并补测试 完成这一步。",
          "expected": "执行成功后，为当前会话设定一个持久追踪的目标。"
        },
        {
          "value": "/goal status",
          "description": "查看当前目标及完成进度",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "openclaw-slash"
          ],
          "groundingRefs": [
            {
              "sourceId": "openclaw-slash",
              "locator": "https://docs.openclaw.ai/tools/slash-commands（页面内检索 /goal [status|start|pause|resume|complete|block|clear]）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "先前的工作会话被中断后，需要管理当前会话的持久化目标，而不是重新开始。",
          "goal": "管理当前会话的持久化目标；使用 /goal status 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“查看当前目标及完成进度”对应的信息。"
        },
        {
          "value": "/goal clear",
          "description": "清除目标，停止追踪",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "openclaw-slash"
          ],
          "groundingRefs": [
            {
              "sourceId": "openclaw-slash",
              "locator": "https://docs.openclaw.ai/tools/slash-commands（页面内检索 /goal [status|start|pause|resume|complete|block|clear]）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "先前的工作会话被中断后，需要管理当前会话的持久化目标，而不是重新开始。",
          "goal": "管理当前会话的持久化目标；使用 /goal clear 完成这一步。",
          "expected": "执行成功后，清除目标，停止追踪。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/tasks",
      "en": "List active/recent background tasks",
      "zh": "列出当前会话的活动/近期后台任务",
      "id": "09f7dac593ed2a20",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "openclaw-slash",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.openclaw.ai/tools/slash-commands（页面内检索 /tasks）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "会话",
        "恢复会话",
        "历史会话",
        "列出当前会话的活动/近期后台任务",
        "List active/recent background tasks"
      ],
      "examples": [
        {
          "value": "/tasks",
          "description": "列出当前会话的活动/近期后台任务",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "openclaw-slash",
              "locator": "https://docs.openclaw.ai/tools/slash-commands（页面内检索 /tasks）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "先前的工作会话被中断后，需要列出当前会话的活动/近期后台任务，而不是重新开始。",
          "goal": "列出当前会话的活动/近期后台任务；使用 /tasks 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“列出当前会话的活动/近期后台任务”对应的信息。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/btw",
      "en": "Ask a side question without changing session context",
      "zh": "在不影响会话上下文的情况下提一个旁路问题",
      "id": "84ff82e6fd5b0c4a",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "openclaw-slash",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.openclaw.ai/tools/slash-commands（页面内检索 /btw <question>）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "会话",
        "恢复会话",
        "历史会话",
        "在不影响会话上下文的情况下提一个旁路问题",
        "Ask a side question without changing session context",
        "/btw"
      ],
      "examples": [
        {
          "value": "/btw \"检查当前改动\"",
          "description": "在不影响会话上下文的情况下提一个旁路问题",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "openclaw-slash",
              "locator": "https://docs.openclaw.ai/tools/slash-commands（页面内检索 /btw <question>）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "先前的工作会话被中断后，需要在不影响会话上下文的情况下提一个旁路问题，而不是重新开始。",
          "goal": "在不影响会话上下文的情况下提一个旁路问题；使用 /btw \"检查当前改动\" 完成这一步。",
          "expected": "执行成功后，在不影响会话上下文的情况下提一个旁路问题。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "openclaw onboard --install-daemon",
      "en": "Interactive setup wizard + install daemon",
      "zh": "交互式初始化向导并安装守护进程（推荐首次安装）",
      "id": "035172efc3256895",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "openclaw-slash",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.openclaw.ai/tools/slash-commands · openclaw onboard --install-daemon",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "交互式初始化向导并安装守护进程（推荐首次安装）",
        "Interactive setup wizard + install daemon",
        "openclaw"
      ],
      "examples": [
        {
          "value": "openclaw onboard --install-daemon",
          "description": "交互式初始化向导并安装守护进程（推荐首次安装）",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "openclaw-slash",
              "locator": "https://docs.openclaw.ai/tools/slash-commands · openclaw onboard --install-daemon",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "准备新的工作环境或资源时，需要交互式初始化向导并安装守护进程（推荐首次安装），让后续步骤具备所需入口。",
          "goal": "交互式初始化向导并安装守护进程（推荐首次安装）；使用 openclaw onboard --install-daemon 完成这一步。",
          "expected": "执行成功后，交互式初始化向导并安装守护进程（推荐首次安装）。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "openclaw gateway status",
      "en": "Show Gateway daemon and RPC reachability",
      "zh": "查看 Gateway 守护进程运行状态和 RPC 可达性",
      "id": "4f4ab1642ae9639b",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "openclaw-slash",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.openclaw.ai/tools/slash-commands · openclaw gateway status",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "查看 Gateway 守护进程运行状态和 RPC 可达性",
        "Show Gateway daemon and RPC reachability",
        "openclaw"
      ],
      "examples": [
        {
          "value": "openclaw gateway status",
          "description": "检查 Gateway 守护进程和 RPC 是否可达",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "openclaw-cli"
          ],
          "groundingRefs": [
            {
              "sourceId": "openclaw-slash",
              "locator": "https://docs.openclaw.ai/tools/slash-commands · openclaw gateway status",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先查看 Gateway 守护进程运行状态和 RPC 可达性，确认当前状态与预期一致。",
          "goal": "查看 Gateway 守护进程运行状态和 RPC 可达性；使用 openclaw gateway status 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“检查 Gateway 守护进程和 RPC 是否可达”对应的信息。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "openclaw gateway restart",
      "en": "Restart the Gateway daemon",
      "zh": "重启 Gateway 守护进程",
      "id": "85c77914045bc98f",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "openclaw-slash",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.openclaw.ai/tools/slash-commands · openclaw gateway restart",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "重启 Gateway 守护进程",
        "Restart the Gateway daemon",
        "openclaw"
      ],
      "examples": [
        {
          "value": "openclaw gateway restart",
          "description": "重启 Gateway 守护进程",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "warning": "此操作会强制终止或重启进程，可能中断正在进行的工作",
          "riskLevels": [
            "processDisruption"
          ],
          "caveat": "此操作会强制终止或重启进程，可能中断正在进行的工作；先用只读命令预览目标并保留备份",
          "groundingRefs": [
            {
              "sourceId": "openclaw-slash",
              "locator": "https://docs.openclaw.ai/tools/slash-commands · openclaw gateway restart",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "正在OpenClaw中完成“重启 Gateway 守护进程”这一步，需要用默认交互入口减少界面切换。",
          "goal": "重启 Gateway 守护进程；使用 openclaw gateway restart 完成这一步。",
          "expected": "操作后，界面完成“重启 Gateway 守护进程”对应的变化。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "openclaw status",
      "en": "Fast local summary of OS, gateway, agents, config",
      "zh": "快速显示系统、Gateway、代理和配置摘要",
      "id": "e27b16de672d521d",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "openclaw-slash",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.openclaw.ai/tools/slash-commands · openclaw status",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "配置",
        "设置",
        "偏好",
        "快速显示系统、Gateway、代理和配置摘要",
        "Fast local summary of OS, gateway, agents, config"
      ],
      "examples": [
        {
          "value": "openclaw status",
          "description": "快速显示系统、Gateway、代理和配置摘要",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "openclaw-cli"
          ],
          "groundingRefs": [
            {
              "sourceId": "openclaw-slash",
              "locator": "https://docs.openclaw.ai/tools/slash-commands · openclaw status",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先快速显示系统、Gateway、代理和配置摘要，确认当前状态与预期一致。",
          "goal": "快速显示系统、Gateway、代理和配置摘要；使用 openclaw status 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“快速显示系统、Gateway、代理和配置摘要”对应的信息。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "openclaw status --all",
      "en": "Full read-only diagnosis report with log tail",
      "zh": "输出完整只读诊断报告（含脱敏日志尾部）",
      "id": "f4e9cc3ba2efb218",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "openclaw-slash",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.openclaw.ai/tools/slash-commands · openclaw status --all",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "输出完整只读诊断报告（含脱敏日志尾部）",
        "Full read-only diagnosis report with log tail",
        "openclaw"
      ],
      "examples": [
        {
          "value": "openclaw status --all",
          "description": "输出完整只读诊断报告（含脱敏日志尾部）",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "openclaw-slash",
              "locator": "https://docs.openclaw.ai/tools/slash-commands · openclaw status --all",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先输出完整只读诊断报告（含脱敏日志尾部），确认当前状态与预期一致。",
          "goal": "输出完整只读诊断报告（含脱敏日志尾部）；使用 openclaw status --all 完成这一步。",
          "expected": "执行成功后，输出完整只读诊断报告（含脱敏日志尾部）。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "openclaw doctor",
      "en": "Repair/migrate config + health checks",
      "zh": "修复/迁移配置并运行健康检查",
      "id": "b8859b6ce868ca29",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "openclaw-slash",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.openclaw.ai/tools/slash-commands · openclaw doctor",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "配置",
        "设置",
        "偏好",
        "修复/迁移配置并运行健康检查",
        "Repair/migrate config + health checks",
        "openclaw"
      ],
      "examples": [
        {
          "value": "openclaw doctor",
          "description": "检查配置、运行迁移并修复可识别问题",
          "warning": "可能修改本地配置，执行前建议备份",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "openclaw-cli"
          ],
          "groundingRefs": [
            {
              "sourceId": "openclaw-slash",
              "locator": "https://docs.openclaw.ai/tools/slash-commands · openclaw doctor",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前环境的默认设置不适合这次任务，需要修复/迁移配置并运行健康检查后再继续工作。",
          "goal": "修复/迁移配置并运行健康检查；使用 openclaw doctor 完成这一步。",
          "expected": "执行成功后，检查配置、运行迁移并修复可识别问题。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "openclaw update",
      "en": "Update OpenClaw to latest version",
      "zh": "更新 OpenClaw 到最新版本并重启 Gateway",
      "id": "8b7ae1910db15d50",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "openclaw-slash",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.openclaw.ai/tools/slash-commands · openclaw update",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "更新 OpenClaw 到最新版本并重启 Gateway",
        "Update OpenClaw to latest version",
        "openclaw"
      ],
      "examples": [
        {
          "value": "openclaw update",
          "description": "更新 OpenClaw 到最新版本并重启 Gateway",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "openclaw-cli"
          ],
          "groundingRefs": [
            {
              "sourceId": "openclaw-slash",
              "locator": "https://docs.openclaw.ai/tools/slash-commands · openclaw update",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "提交兼容性问题、核对文档或复现故障前，需要先确认当前安装版本。",
          "goal": "更新 OpenClaw 到最新版本并重启 Gateway；使用 openclaw update 完成这一步。",
          "expected": "执行成功后，更新 OpenClaw 到最新版本并重启 Gateway。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "openclaw update --channel stable|beta|dev",
      "en": "Switch release channel (stable/beta/dev)",
      "zh": "切换发布通道（stable/beta/dev）",
      "id": "019cfe58f7a9c345",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "openclaw-slash",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.openclaw.ai/tools/slash-commands · openclaw update --channel stable|beta|dev",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "切换发布通道（stable/beta/dev）",
        "Switch release channel (stable/beta/dev)",
        "openclaw"
      ],
      "examples": [
        {
          "value": "openclaw update --channel stable",
          "description": "切换发布通道（stable/beta/dev）",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "openclaw-slash",
              "locator": "https://docs.openclaw.ai/tools/slash-commands · openclaw update --channel stable|beta|dev",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "终端中的当前任务需要“切换发布通道（stable/beta/dev）”，因此要调用对应的官方命令入口。",
          "goal": "切换发布通道（stable/beta/dev）；使用 openclaw update --channel stable 完成这一步。",
          "expected": "执行成功后，切换发布通道（stable/beta/dev）。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "openclaw dashboard",
      "en": "Open Control UI in browser",
      "zh": "在浏览器中打开 Control UI 控制台",
      "id": "bbfc5c0be878f745",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "openclaw-slash",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.openclaw.ai/tools/slash-commands · openclaw dashboard",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "在浏览器中打开 Control UI 控制台",
        "Open Control UI in browser",
        "openclaw"
      ],
      "examples": [
        {
          "value": "openclaw dashboard",
          "description": "在浏览器中打开 Control UI 控制台",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "openclaw-cli"
          ],
          "groundingRefs": [
            {
              "sourceId": "openclaw-slash",
              "locator": "https://docs.openclaw.ai/tools/slash-commands · openclaw dashboard",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "终端中的当前任务需要“在浏览器中打开 Control UI 控制台”，因此要调用对应的官方命令入口。",
          "goal": "在浏览器中打开 Control UI 控制台；使用 openclaw dashboard 完成这一步。",
          "expected": "执行成功后，在浏览器中打开 Control UI 控制台。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "openclaw logs --follow",
      "en": "Tail the latest log",
      "zh": "实时跟踪最新日志输出",
      "id": "6d73b494e4028e03",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "openclaw-slash",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.openclaw.ai/tools/slash-commands · openclaw logs --follow",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "实时跟踪最新日志输出",
        "Tail the latest log",
        "openclaw"
      ],
      "examples": [
        {
          "value": "openclaw logs --follow",
          "description": "实时跟踪最新日志输出",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "openclaw-cli"
          ],
          "groundingRefs": [
            {
              "sourceId": "openclaw-slash",
              "locator": "https://docs.openclaw.ai/tools/slash-commands · openclaw logs --follow",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "终端中的当前任务需要“实时跟踪最新日志输出”，因此要调用对应的官方命令入口。",
          "goal": "实时跟踪最新日志输出；使用 openclaw logs --follow 完成这一步。",
          "expected": "执行成功后，实时跟踪最新日志输出。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "openclaw health --json",
      "en": "Gateway snapshot in JSON format",
      "zh": "以 JSON 格式获取 Gateway 完整快照",
      "id": "a24ea5ce052c4a06",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "openclaw-slash",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.openclaw.ai/tools/slash-commands · openclaw health --json",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "格式化",
        "代码格式",
        "排版",
        "以 JSON 格式获取 Gateway 完整快照",
        "Gateway snapshot in JSON format",
        "openclaw"
      ],
      "examples": [
        {
          "value": "openclaw health --json",
          "description": "以 JSON 格式获取 Gateway 完整快照",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "openclaw-slash",
              "locator": "https://docs.openclaw.ai/tools/slash-commands · openclaw health --json",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "终端中的当前任务需要“以 JSON 格式获取 Gateway 完整快照”，因此要调用对应的官方命令入口。",
          "goal": "以 JSON 格式获取 Gateway 完整快照；使用 openclaw health --json 完成这一步。",
          "expected": "执行成功后，以 JSON 格式获取 Gateway 完整快照。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "openclaw config get",
      "en": "Read a config value by path",
      "zh": "按路径读取 openclaw.json 中的配置值",
      "id": "6abe2d5ff2cde5e4",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "openclaw-slash",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.openclaw.ai/tools/slash-commands · openclaw config get <path>",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "配置",
        "设置",
        "偏好",
        "按路径读取 openclaw.json 中的配置值",
        "Read a config value by path",
        "openclaw"
      ],
      "examples": [
        {
          "value": "openclaw config get model.default",
          "description": "按路径读取 openclaw.json 中 model.default 的当前值",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "openclaw-slash"
          ],
          "groundingRefs": [
            {
              "sourceId": "openclaw-slash",
              "locator": "https://docs.openclaw.ai/tools/slash-commands · openclaw config get <path>",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前环境的默认设置不适合这次任务，需要按路径读取 openclaw.json 中的配置值后再继续工作。",
          "goal": "按路径读取 openclaw.json 中的配置值；使用 openclaw config get model.default 完成这一步。",
          "expected": "执行成功后，按路径读取 openclaw.json 中 model.default 的当前值。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "openclaw config set <path>",
      "en": "Set a config value by path",
      "zh": "按路径设置 openclaw.json 中的配置值",
      "id": "c8e54a8ed187b5d7",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "openclaw-slash",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.openclaw.ai/tools/slash-commands · openclaw config set <path> <value>",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "配置",
        "设置",
        "偏好",
        "按路径设置 openclaw.json 中的配置值",
        "Set a config value by path",
        "openclaw"
      ],
      "examples": [
        {
          "value": "openclaw config set model.default gpt-5.5",
          "description": "把 openclaw.json 中 model.default 设为 gpt-5.5",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "openclaw-cli"
          ],
          "groundingRefs": [
            {
              "sourceId": "openclaw-slash",
              "locator": "https://docs.openclaw.ai/tools/slash-commands · openclaw config set <path> <value>",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前环境的默认设置不适合这次任务，需要按路径设置 openclaw.json 中的配置值后再继续工作。",
          "goal": "按路径设置 openclaw.json 中的配置值；使用 openclaw config set model.default gpt-5.5 完成这一步。",
          "expected": "执行成功后，把 openclaw.json 中 model.default 设为 gpt-5.5。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "openclaw configure",
      "en": "Interactive config wizard",
      "zh": "交互式配置向导",
      "id": "a64d286059d510a6",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "openclaw-slash",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.openclaw.ai/tools/slash-commands · openclaw configure",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "配置",
        "设置",
        "偏好",
        "交互式配置向导",
        "Interactive config wizard",
        "openclaw"
      ],
      "examples": [
        {
          "value": "openclaw configure",
          "description": "进入交互式配置向导",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "openclaw-cli"
          ],
          "groundingRefs": [
            {
              "sourceId": "openclaw-slash",
              "locator": "https://docs.openclaw.ai/tools/slash-commands · openclaw configure",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前环境的默认设置不适合这次任务，需要交互式配置向导后再继续工作。",
          "goal": "交互式配置向导；使用 openclaw configure 完成这一步。",
          "expected": "执行成功后，进入交互式配置向导。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "openclaw agent --message <text> --thinking",
      "en": "Talk to the assistant from CLI",
      "zh": "从命令行向助手发送消息（可选指定思考等级）",
      "id": "69c4d0c88ccbec48",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "openclaw-slash",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.openclaw.ai/tools/slash-commands · openclaw agent --message <text> --thinking <level>",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "从命令行向助手发送消息（可选指定思考等级）",
        "Talk to the assistant from CLI",
        "openclaw"
      ],
      "examples": [
        {
          "value": "openclaw agent --message \"检查当前改动\" --thinking medium",
          "description": "从命令行向助手发送消息（可选指定思考等级）",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "openclaw-slash",
              "locator": "https://docs.openclaw.ai/tools/slash-commands · openclaw agent --message <text> --thinking <level>",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "终端中的当前任务需要“从命令行向助手发送消息（可选指定思考等级）”，因此要调用对应的官方命令入口。",
          "goal": "从命令行向助手发送消息（可选指定思考等级）；使用 openclaw agent --message \"检查当前改动\" --thinking medium 完成这一步。",
          "expected": "执行成功后，从命令行向助手发送消息（可选指定思考等级）。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "openclaw message send --target <recipient> --message",
      "en": "Send a message via connected channel",
      "zh": "通过已连接的消息通道发送消息",
      "id": "c6181b867bf98367",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "openclaw-slash",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.openclaw.ai/tools/slash-commands · openclaw message send --target <recipient> --message <text>",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "通过已连接的消息通道发送消息",
        "Send a message via connected channel",
        "openclaw"
      ],
      "examples": [
        {
          "value": "openclaw message send --target user@example.com --message \"检查当前改动\"",
          "description": "通过已连接的消息通道发送消息",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "openclaw-slash",
              "locator": "https://docs.openclaw.ai/tools/slash-commands · openclaw message send --target <recipient> --message <text>",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "终端中的当前任务需要“通过已连接的消息通道发送消息”，因此要调用对应的官方命令入口。",
          "goal": "通过已连接的消息通道发送消息；使用 openclaw message send --target user@example.com --message \"检查当前改动\" 完成这一步。",
          "expected": "执行成功后，通过已连接的消息通道发送消息。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "openclaw channels status --probe",
      "en": "Live per-channel transport state + probe",
      "zh": "实时查看各通道传输状态及探活结果",
      "id": "0e45039c4e080a2b",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "openclaw-slash",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.openclaw.ai/tools/slash-commands · openclaw channels status --probe",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "实时查看各通道传输状态及探活结果",
        "Live per-channel transport state + probe",
        "openclaw"
      ],
      "examples": [
        {
          "value": "openclaw channels status --probe",
          "description": "实时查看各通道传输状态及探活结果",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "openclaw-slash",
              "locator": "https://docs.openclaw.ai/tools/slash-commands · openclaw channels status --probe",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先实时查看各通道传输状态及探活结果，确认当前状态与预期一致。",
          "goal": "实时查看各通道传输状态及探活结果；使用 openclaw channels status --probe 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“实时查看各通道传输状态及探活结果”对应的信息。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "openclaw pairing approve <channel>",
      "en": "Approve a DM pairing code",
      "zh": "批准直接消息配对码以授权发送者",
      "id": "71aa0aec60600d67",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "openclaw-slash",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.openclaw.ai/tools/slash-commands · openclaw pairing approve <channel> <code>",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "批准直接消息配对码以授权发送者",
        "Approve a DM pairing code",
        "openclaw"
      ],
      "examples": [
        {
          "value": "openclaw pairing approve stable 123456",
          "description": "批准直接消息配对码以授权发送者",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "openclaw-slash",
              "locator": "https://docs.openclaw.ai/tools/slash-commands · openclaw pairing approve <channel> <code>",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "首次使用、凭据失效或切换账户后，需要重新完成身份验证。",
          "goal": "批准直接消息配对码以授权发送者；使用 openclaw pairing approve stable 123456 完成这一步。",
          "expected": "执行成功后，批准直接消息配对码以授权发送者。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "openclaw plugins install",
      "en": "Install a plugin by package name",
      "zh": "按包名安装插件",
      "id": "bebd60539eebde6b",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "openclaw-slash",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.openclaw.ai/tools/slash-commands · openclaw plugins install <plugin>",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "按包名安装插件",
        "Install a plugin by package name",
        "openclaw"
      ],
      "examples": [
        {
          "value": "openclaw plugins install example-plugin",
          "description": "按包名安装插件",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "openclaw-slash",
              "locator": "https://docs.openclaw.ai/tools/slash-commands · openclaw plugins install <plugin>",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "准备新的工作环境或资源时，需要按包名安装插件，让后续步骤具备所需入口。",
          "goal": "按包名安装插件；使用 openclaw plugins install example-plugin 完成这一步。",
          "expected": "执行成功后，按包名安装插件。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "openclaw security audit",
      "en": "Audit security and DM policies",
      "zh": "审查安全配置和 DM 策略",
      "id": "73fdd4a4ca08fd3c",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "openclaw-slash",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.openclaw.ai/tools/slash-commands · openclaw security audit",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "配置",
        "设置",
        "偏好",
        "审查安全配置和 DM 策略",
        "Audit security and DM policies",
        "openclaw"
      ],
      "examples": [
        {
          "value": "openclaw security audit",
          "description": "审查安全配置和 DM 策略",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "openclaw-slash",
              "locator": "https://docs.openclaw.ai/tools/slash-commands · openclaw security audit",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前环境的默认设置不适合这次任务，需要审查安全配置和 DM 策略后再继续工作。",
          "goal": "审查安全配置和 DM 策略；使用 openclaw security audit 完成这一步。",
          "expected": "执行成功后，审查安全配置和 DM 策略。"
        }
      ]
    }
  ]
};
