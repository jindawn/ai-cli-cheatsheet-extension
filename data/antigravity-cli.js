// Generated from validated structured data. Manual edits must follow data/SCHEMA.md.
window.CHEATSHEET_DATA = window.CHEATSHEET_DATA || {};
window.CHEATSHEET_DATA["antigravity-cli"] = {
  "meta": {
    "id": "antigravity-cli",
    "name": "Antigravity CLI",
    "color": "#9b6bdf",
    "source": "第一方来源与确定性官方入口清单，核验于 2026-07-14",
    "sourceUrl": "https://developers.googleblog.com/",
    "updatedAt": "2026-06-20",
    "contentCheckedAt": "2026-07-02",
    "sourceCheckedAt": "2026-07-02",
    "updatePolicy": "manual-only",
    "verificationStatus": "manual",
    "coverage": "官方入口全集；精确范围、组件与平台限制见 shared/official-inventories/antigravity-cli.json",
    "platforms": [
      "mac",
      "windows",
      "linux"
    ],
    "builtIn": true,
    "order": 4,
    "sources": [
      {
        "id": "antigravity-announcement",
        "title": "Transitioning Gemini CLI to Antigravity CLI",
        "url": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/",
        "kind": "official-doc",
        "maintainer": "Google",
        "evidenceTier": "first-party",
        "lastVerifiedAt": "2026-07-02",
        "resolvedUrl": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/",
        "pageTitle": "Transitioning Gemini CLI to Antigravity CLI",
        "checkedAt": "2026-07-02",
        "purposes": [
          "command-existence",
          "release-notes"
        ]
      },
      {
        "id": "antigravity-repository",
        "title": "Antigravity CLI official repository",
        "kind": "official-repository",
        "maintainer": "Google",
        "evidenceTier": "first-party",
        "purposes": [
          "command-existence",
          "examples"
        ],
        "resolvedUrl": "https://github.com/google-antigravity/antigravity-cli",
        "pageTitle": "google-antigravity/antigravity-cli",
        "checkedAt": "2026-07-02",
        "url": "https://github.com/google-antigravity/antigravity-cli",
        "lastVerifiedAt": "2026-07-02"
      },
      {
        "id": "antigravity-codelab",
        "title": "Hands-on with Antigravity CLI (Google Codelabs)",
        "kind": "authoritative-reference",
        "maintainer": "Google Developers Codelabs",
        "evidenceTier": "authoritative-community",
        "purposes": [
          "command-existence",
          "option-semantics",
          "examples"
        ],
        "resolvedUrl": "https://codelabs.developers.google.com/antigravity-cli-hands-on?hl=hi",
        "pageTitle": "Hands-on with Antigravity CLI",
        "checkedAt": "2026-07-02",
        "url": "https://codelabs.developers.google.com/antigravity-cli-hands-on",
        "lastVerifiedAt": "2026-07-02"
      }
    ],
    "officialCoverage": {
      "scope": "all-command-entrypoints",
      "status": "complete",
      "total": 44,
      "covered": 44,
      "checkedAt": "2026-07-13",
      "sourceIds": [
        "antigravity-announcement",
        "antigravity-repository",
        "antigravity-codelab"
      ],
      "inventoryHash": "sha256:30ebda64c2bbbf9aa7d4a0d6dd5100a5993e8c8f8bfc11f1b458e53676a3347e"
    }
  },
  "items": [
    {
      "cat": "flag",
      "cmd": "agy",
      "en": "Launch interactive TUI",
      "zh": "启动交互式终端界面（是 Gemini CLI 的官方继任者，命令从 gemini 换成了 agy）",
      "id": "9214a76c9e068280",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "antigravity-announcement",
          "claims": [
            "existence"
          ],
          "locator": "官方迁移公告中的 Antigravity CLI 产品入口",
          "checkedAt": "2026-06-21"
        },
        {
          "sourceId": "antigravity-codelab",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://codelabs.developers.google.com/antigravity-cli-hands-on · 基础命令表 · agy | 启动交互式会话",
          "checkedAt": "2026-07-02"
        }
      ],
      "keywords": [
        "启动交互式终端界面（是 Gemini CLI 的官方继任者，命令从 gemini 换成了 agy）",
        "Launch interactive TUI",
        "agy"
      ],
      "examples": [
        {
          "value": "agy",
          "description": "在当前目录启动 Antigravity 交互式终端界面",
          "scenario": "在实际工作中需要启动交互式终端界面（是 Gemini CLI 的官方继任者，命令从 gemini 换成了 agy）时",
          "goal": "启动交互式终端界面（是 Gemini CLI 的官方继任者，命令从 gemini 换成了 agy）",
          "expected": "操作后，工具完成“在当前目录启动 Antigravity 交互式终端界面”对应的行为；条件不满足时返回错误。",
          "caveat": "执行前确认当前目录、参数和工具版本与示例一致",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "antigravity-announcement",
            "antigravity-codelab"
          ],
          "groundingRefs": [
            {
              "sourceId": "antigravity-announcement",
              "locator": "官方迁移公告中的 Antigravity CLI 产品入口",
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
      "cat": "flag",
      "cmd": "agy --model",
      "en": "Set model at launch",
      "zh": "启动时指定模型，例如 Gemini 3.5 Flash / Gemini 3.1 Pro / Claude Sonnet / Claude Opus / GPT-OSS 120B（视套餐）",
      "id": "e441243d9d431615",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "antigravity-announcement",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · agy --model \"模型名\"",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "模型",
        "切换模型",
        "模型选择",
        "启动时指定模型，例如 Gemini 3.5 Flash / Gemini 3.1 Pro / Claude Sonnet / Claude Opus / GPT-OSS 120B（视套餐）",
        "Set model at launch",
        "agy"
      ],
      "examples": [
        {
          "value": "agy --model \"Gemini 3.1 Pro\"",
          "description": "使用指定模型启动交互会话",
          "scenario": "在实际工作中需要启动时指定模型，例如 Gemini 3.5 Flash / Gemini 3.1 Pro / Claude Sonnet / Claude Opus / GPT-OSS 120B（视套餐）时",
          "goal": "启动时指定模型，例如 Gemini 3.5 Flash / Gemini 3.1 Pro / Claude Sonnet / Claude Opus / GPT-OSS 120B（视套餐）",
          "expected": "操作后，工具完成“使用指定模型启动交互会话”对应的行为；条件不满足时返回错误。",
          "caveat": "执行前确认当前目录、参数和工具版本与示例一致",
          "sourceType": "quasi-official",
          "authorship": "editorial",
          "evidenceTier": "authoritative-community",
          "adaptation": "adapted",
          "sourceIds": [
            "antigravity-codelab"
          ],
          "groundingRefs": [
            {
              "sourceId": "antigravity-announcement",
              "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · agy --model \"模型名\"",
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
      "cat": "flag",
      "cmd": "agy -p",
      "en": "Non-interactive one-shot",
      "zh": "非交互单次执行模式",
      "id": "c078911b531fbdc3",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "antigravity-announcement",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · agy -p / --print",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "非交互单次执行模式",
        "Non-interactive one-shot",
        "agy"
      ],
      "examples": [
        {
          "value": "agy -p \"解释这个项目的目录结构\"",
          "description": "非交互执行一次任务并把结果输出到终端",
          "scenario": "在实际工作中需要非交互单次执行模式时",
          "goal": "非交互单次执行模式",
          "expected": "操作后，工具完成“非交互执行一次任务并把结果输出到终端”对应的行为；条件不满足时返回错误。",
          "caveat": "执行前确认当前目录、参数和工具版本与示例一致",
          "sourceType": "quasi-official",
          "authorship": "editorial",
          "evidenceTier": "authoritative-community",
          "adaptation": "adapted",
          "sourceIds": [
            "antigravity-codelab"
          ],
          "groundingRefs": [
            {
              "sourceId": "antigravity-announcement",
              "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · agy -p / --print",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ]
        }
      ],
      "aliases": [
        "agy --print"
      ]
    },
    {
      "cat": "flag",
      "cmd": "agy --version",
      "en": "Check version (safe)",
      "zh": "安全的非交互版本检查（agy version 在无真实终端时可能失败）",
      "id": "5636b05b72aaa4bd",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "antigravity-announcement",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · agy --version",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "安全的非交互版本检查（agy version 在无真实终端时可能失败）",
        "Check version (safe)",
        "agy"
      ],
      "examples": [
        {
          "value": "agy --version",
          "description": "安全的非交互版本检查（agy version 在无真实终端时可能失败）",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要安全的非交互版本检查（agy version 在无真实终端时可能失败）时",
          "goal": "安全的非交互版本检查（agy version 在无真实终端时可能失败）",
          "expected": "操作后，工具完成“安全的非交互版本检查（agy version 在无真实终端时可能失败）”对应的行为；条件不满足时返回错误。",
          "caveat": "执行前确认当前目录、参数和工具版本与示例一致",
          "groundingRefs": [
            {
              "sourceId": "antigravity-announcement",
              "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · agy --version",
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
      "cat": "flag",
      "cmd": "agy changelog",
      "en": "View version changelog",
      "zh": "查看不同版本之间的更新日志（外部命令，不是会话内斜杠命令）",
      "id": "9b136471f526853b",
      "evidenceStatus": "verified",
      "keywords": [
        "查看",
        "显示",
        "状态",
        "会话",
        "恢复会话",
        "历史会话",
        "查看不同版本之间的更新日志（外部命令，不是会话内斜杠命令）",
        "View version changelog"
      ],
      "examples": [
        {
          "value": "agy changelog",
          "description": "查看不同版本之间的更新日志（外部命令，不是会话内斜杠命令）",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要查看不同版本之间的更新日志（外部命令，不是会话内斜杠命令）时",
          "goal": "查看不同版本之间的更新日志（外部命令，不是会话内斜杠命令）",
          "expected": "操作后，工具完成“查看不同版本之间的更新日志（外部命令，不是会话内斜杠命令）”对应的行为；条件不满足时返回错误。",
          "caveat": "执行前确认当前目录、参数和工具版本与示例一致",
          "groundingRefs": [
            {
              "sourceId": "antigravity-announcement",
              "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · agy changelog",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ]
        }
      ],
      "evidenceRefs": [
        {
          "sourceId": "antigravity-announcement",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · agy changelog",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "agy models",
      "en": "List available models",
      "zh": "列出当前可用的模型（外部命令）",
      "id": "9b27426fc91ec116",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "antigravity-announcement",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · agy models",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "模型",
        "切换模型",
        "模型选择",
        "列出当前可用的模型（外部命令）",
        "List available models"
      ],
      "examples": [
        {
          "value": "agy models",
          "description": "列出当前账号和套餐可使用的模型",
          "scenario": "在实际工作中需要列出当前可用的模型（外部命令）时",
          "goal": "列出当前可用的模型（外部命令）",
          "expected": "操作后，工具完成“列出当前账号和套餐可使用的模型”对应的行为；条件不满足时返回错误。",
          "caveat": "执行前确认当前目录、参数和工具版本与示例一致",
          "sourceType": "quasi-official",
          "authorship": "editorial",
          "evidenceTier": "authoritative-community",
          "adaptation": "adapted",
          "sourceIds": [
            "antigravity-codelab"
          ],
          "groundingRefs": [
            {
              "sourceId": "antigravity-announcement",
              "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · agy models",
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
      "id": "agy-help",
      "cat": "flag",
      "cmd": "agy help",
      "en": "Show wrapper commands",
      "zh": "显示外层shell命令（区别于会话内的斜杠命令）",
      "evidenceStatus": "verified",
      "keywords": [
        "查看",
        "显示",
        "状态",
        "会话",
        "恢复会话",
        "历史会话",
        "帮助",
        "说明"
      ],
      "examples": [
        {
          "value": "agy help",
          "description": "显示外层 shell 命令（区别于会话内的斜杠命令）",
          "sourceType": "ai-derived",
          "scenario": "在实际工作中需要显示外层shell命令（区别于会话内的斜杠命令）时",
          "goal": "显示外层shell命令（区别于会话内的斜杠命令）",
          "expected": "操作后，工具完成“显示外层 shell 命令（区别于会话内的斜杠命令）”对应的行为；条件不满足时返回错误。",
          "caveat": "执行前确认当前目录、参数和工具版本与示例一致",
          "authorship": "editorial",
          "evidenceTier": "none",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "antigravity-announcement",
              "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · agy help",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ]
        }
      ],
      "evidenceRefs": [
        {
          "sourceId": "antigravity-announcement",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · agy help",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "id": "agy-update",
      "cat": "flag",
      "cmd": "agy install",
      "en": "Install or update agy",
      "zh": "安装或更新 agy 本体",
      "evidenceStatus": "verified",
      "keywords": [
        "安装或更新 agy 本体",
        "Install or update agy",
        "agy"
      ],
      "examples": [
        {
          "value": "agy update",
          "description": "安装或更新 agy 本体到最新版本",
          "sourceType": "ai-derived",
          "scenario": "在实际工作中需要安装或更新 agy 本体时",
          "goal": "安装或更新 agy 本体",
          "expected": "操作后，工具完成“安装或更新 agy 本体到最新版本”对应的行为；条件不满足时返回错误。",
          "caveat": "执行前确认当前目录、参数和工具版本与示例一致",
          "authorship": "editorial",
          "evidenceTier": "none",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "antigravity-announcement",
              "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · agy install / agy update",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ]
        }
      ],
      "evidenceRefs": [
        {
          "sourceId": "antigravity-announcement",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · agy install / agy update",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "agy update"
      ]
    },
    {
      "cat": "flag",
      "cmd": "agy plugin",
      "en": "Manage plugins",
      "zh": "管理插件（Antigravity plugins，相当于 Gemini CLI 的 Extensions）",
      "id": "9be18c1d0997b079",
      "evidenceStatus": "verified",
      "keywords": [
        "管理插件（Antigravity plugins，相当于 Gemini CLI 的 Extensions）",
        "Manage plugins",
        "agy"
      ],
      "examples": [
        {
          "value": "agy plugin",
          "description": "管理插件（Antigravity plugins，相当于 Gemini CLI 的 Extensions）",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要管理插件（Antigravity plugins，相当于 Gemini CLI 的 Extensions）时",
          "goal": "管理插件（Antigravity plugins，相当于 Gemini CLI 的 Extensions）",
          "expected": "操作后，工具完成“管理插件（Antigravity plugins，相当于 Gemini CLI 的 Extensions）”对应的行为；条件不满足时返回错误。",
          "caveat": "执行前确认当前目录、参数和工具版本与示例一致",
          "groundingRefs": [
            {
              "sourceId": "antigravity-announcement",
              "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · agy plugin",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ]
        }
      ],
      "evidenceRefs": [
        {
          "sourceId": "antigravity-announcement",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · agy plugin",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/help",
      "en": "Show help (3 tabs)",
      "zh": "显示帮助，含 general/commands/shortcuts 三个标签页，用Tab键切换浏览",
      "id": "936faf0ac514a58d",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "antigravity-announcement",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · /help 或 ?",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "帮助",
        "说明",
        "文档",
        "显示帮助，含 general/commands/shortcuts 三个标签页，用Tab键切换浏览",
        "Show help (3 tabs)"
      ],
      "examples": [
        {
          "value": "/help",
          "description": "显示帮助，含 general/commands/shortcuts 三个标签页，用Tab键切换浏览",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要显示帮助，含 general/commands/shortcuts 三个标签页，用Tab键切换浏览时",
          "goal": "显示帮助，含 general/commands/shortcuts 三个标签页，用Tab键切换浏览",
          "expected": "操作后，工具完成“显示帮助，含 general/commands/shortcuts 三个标签页，用Tab键切换浏览”对应的行为；条件不满足时返回错误。",
          "caveat": "执行前确认当前目录、参数和工具版本与示例一致",
          "groundingRefs": [
            {
              "sourceId": "antigravity-announcement",
              "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · /help 或 ?",
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
      "cmd": "/quit",
      "en": "Exit the session",
      "zh": "退出会话（也可以按两次 Ctrl+D）",
      "id": "a9108b8b30a59731",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "antigravity-announcement",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · /quit 或 /exit",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "会话",
        "恢复会话",
        "历史会话",
        "退出会话（也可以按两次 Ctrl+D）",
        "Exit the session",
        "/quit"
      ],
      "examples": [
        {
          "value": "/quit",
          "description": "退出会话（也可以按两次 Ctrl+D）",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要退出会话（也可以按两次 Ctrl+D）时",
          "goal": "退出会话（也可以按两次 Ctrl+D）",
          "expected": "操作后，工具完成“退出会话（也可以按两次 Ctrl+D）”对应的行为；条件不满足时返回错误。",
          "caveat": "执行前确认当前目录、参数和工具版本与示例一致",
          "groundingRefs": [
            {
              "sourceId": "antigravity-announcement",
              "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · /quit 或 /exit",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ]
        }
      ],
      "aliases": [
        "/exit"
      ]
    },
    {
      "id": "agy-config",
      "cat": "slash",
      "cmd": "/config",
      "en": "Open configuration",
      "zh": "打开配置设置（对应 Gemini CLI 的 /settings）",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "antigravity-announcement",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · /config 或 /settings",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "配置",
        "设置",
        "偏好",
        "打开配置设置（对应 Gemini CLI 的 /settings）",
        "Open configuration",
        "/config"
      ],
      "examples": [
        {
          "value": "/config",
          "description": "打开配置设置界面",
          "sourceType": "ai-derived",
          "scenario": "在实际工作中需要打开配置设置（对应 Gemini CLI 的 /settings）时",
          "goal": "打开配置设置（对应 Gemini CLI 的 /settings）",
          "expected": "操作后，工具完成“打开配置设置界面”对应的行为；条件不满足时返回错误。",
          "caveat": "执行前确认当前目录、参数和工具版本与示例一致",
          "authorship": "editorial",
          "evidenceTier": "authoritative-community",
          "adaptation": "adapted",
          "sourceIds": [
            "antigravity-codelab"
          ],
          "groundingRefs": [
            {
              "sourceId": "antigravity-announcement",
              "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · /config 或 /settings",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ]
        }
      ],
      "aliases": [
        "/settings"
      ]
    },
    {
      "cat": "slash",
      "cmd": "/model",
      "en": "Switch model mid-session",
      "zh": "会话中切换模型",
      "id": "186d0438d19ceaed",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "antigravity-announcement",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · /model",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "模型",
        "切换模型",
        "模型选择",
        "会话",
        "恢复会话",
        "历史会话",
        "会话中切换模型",
        "Switch model mid-session"
      ],
      "examples": [
        {
          "value": "/model",
          "description": "在当前会话中打开模型选择界面",
          "sourceType": "quasi-official",
          "authorship": "editorial",
          "evidenceTier": "authoritative-community",
          "adaptation": "adapted",
          "sourceIds": [
            "antigravity-codelab"
          ],
          "groundingRefs": [
            {
              "sourceId": "antigravity-announcement",
              "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · /model",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "先前的工作会话被中断后，需要回到已有上下文继续处理，而不是重新开始。",
          "goal": "会话中切换模型；使用 /model 完成这一步。",
          "expected": "执行成功后，在当前会话中打开模型选择界面。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/diff",
      "en": "Inspect modified files",
      "zh": "查看已修改文件的diff",
      "id": "06b5d0ad28912284",
      "evidenceStatus": "verified",
      "keywords": [
        "查看",
        "显示",
        "状态",
        "查看已修改文件的diff",
        "Inspect modified files",
        "/diff"
      ],
      "examples": [
        {
          "value": "/diff",
          "description": "查看代理在工作区中产生的文件改动",
          "sourceType": "manual",
          "authorship": "editorial",
          "evidenceTier": "none",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "antigravity-announcement",
              "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · /diff",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先查看已修改文件的diff，确认当前状态与预期一致。",
          "goal": "查看已修改文件的diff；使用 /diff 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“查看代理在工作区中产生的文件改动”对应的信息。"
        }
      ],
      "evidenceRefs": [
        {
          "sourceId": "antigravity-announcement",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · /diff",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/rewind",
      "en": "Roll back conversation",
      "zh": "把对话历史回退到之前的消息（对应Gemini CLI的/rewind）",
      "id": "f91dba3ba4d2fe4f",
      "evidenceStatus": "verified",
      "keywords": [
        "把对话历史回退到之前的消息（对应Gemini CLI的/rewind）",
        "Roll back conversation",
        "/rewind"
      ],
      "examples": [
        {
          "value": "/rewind",
          "description": "选择较早的消息并回退会话状态",
          "sourceType": "manual",
          "authorship": "editorial",
          "evidenceTier": "none",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "antigravity-announcement",
              "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · /rewind 或 /undo",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前 Antigravity CLI 会话正在处理与“把对话历史回退到之前的消息（对应Gemini CLI的/rewind）”直接相关的任务，需要在不中断上下文的情况下执行该操作。",
          "goal": "把对话历史回退到之前的消息（对应Gemini CLI的/rewind）；使用 /rewind 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“选择较早的消息并回退会话状态”对应的信息。"
        }
      ],
      "evidenceRefs": [
        {
          "sourceId": "antigravity-announcement",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · /rewind 或 /undo",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "/undo"
      ]
    },
    {
      "id": "agy-fork",
      "cat": "slash",
      "cmd": "/fork",
      "en": "Explore alt approach",
      "zh": "分叉当前对话，探索不同方案而不丢失当前线程（Gemini CLI无直接对应）",
      "evidenceStatus": "verified",
      "keywords": [
        "分叉当前对话，探索不同方案而不丢失当前线程（Gemini CLI无直接对应）",
        "Explore alt approach",
        "/fork"
      ],
      "examples": [
        {
          "value": "/fork",
          "description": "分叉当前对话，探索不同方案而不丢失当前线程",
          "sourceType": "ai-derived",
          "authorship": "editorial",
          "evidenceTier": "none",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "antigravity-announcement",
              "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · /fork",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前 Antigravity CLI 会话正在处理与“分叉当前对话，探索不同方案而不丢失当前线程（Gemini CLI无直接对应）”直接相关的任务，需要在不中断上下文的情况下执行该操作。",
          "goal": "分叉当前对话，探索不同方案而不丢失当前线程（Gemini CLI无直接对应）；使用 /fork 完成这一步。",
          "expected": "执行成功后，分叉当前对话，探索不同方案而不丢失当前线程。"
        }
      ],
      "evidenceRefs": [
        {
          "sourceId": "antigravity-announcement",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · /fork",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/resume",
      "en": "Reopen previous logs",
      "zh": "恢复之前的会话记录；关闭时会打印恢复指定会话所需的命令",
      "id": "0d74170ed385e88f",
      "evidenceStatus": "verified",
      "keywords": [
        "会话",
        "恢复会话",
        "历史会话",
        "恢复之前的会话记录；关闭时会打印恢复指定会话所需的命令",
        "Reopen previous logs",
        "/resume"
      ],
      "examples": [
        {
          "value": "/resume",
          "description": "打开历史会话列表并恢复一次会话",
          "sourceType": "manual",
          "authorship": "editorial",
          "evidenceTier": "none",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "antigravity-announcement",
              "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · /resume",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "先前的工作会话被中断后，需要回到已有上下文继续处理，而不是重新开始。",
          "goal": "恢复之前的会话记录；关闭时会打印恢复指定会话所需的命令；使用 /resume 完成这一步。",
          "expected": "执行成功后，打开历史会话列表并恢复一次会话。"
        }
      ],
      "evidenceRefs": [
        {
          "sourceId": "antigravity-announcement",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · /resume",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "id": "agy-agents",
      "cat": "slash",
      "cmd": "/agents",
      "en": "Open Agent Manager panel",
      "zh": "打开代理管理面板，查看活跃和已完成的后台子代理状态、所在步骤",
      "evidenceStatus": "verified",
      "keywords": [
        "查看",
        "显示",
        "状态",
        "打开代理管理面板，查看活跃和已完成的后台子代理状态、所在步骤",
        "Open Agent Manager panel",
        "/agents"
      ],
      "examples": [
        {
          "value": "/agents",
          "description": "打开代理管理面板，查看后台子代理的状态和进度",
          "sourceType": "ai-derived",
          "authorship": "editorial",
          "evidenceTier": "none",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "antigravity-announcement",
              "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · /agents",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先打开代理管理面板，查看活跃和已完成的后台子代理状态、所在步骤，确认当前状态与预期一致。",
          "goal": "打开代理管理面板，查看活跃和已完成的后台子代理状态、所在步骤；使用 /agents 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“打开代理管理面板，查看后台子代理的状态和进度”对应的信息。"
        }
      ],
      "evidenceRefs": [
        {
          "sourceId": "antigravity-announcement",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · /agents",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/tasks",
      "en": "Shell execution logs",
      "zh": "查看shell执行日志（对应Gemini CLI的/shells或/bashes）",
      "id": "b92851888ae6e97f",
      "evidenceStatus": "verified",
      "keywords": [
        "查看",
        "显示",
        "状态",
        "查看shell执行日志（对应Gemini CLI的/shells或/bashes）",
        "Shell execution logs",
        "/tasks"
      ],
      "examples": [
        {
          "value": "/tasks",
          "description": "查看shell执行日志（对应Gemini CLI的/shells或/bashes）",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "antigravity-announcement",
              "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · /tasks",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先查看shell执行日志（对应Gemini CLI的/shells或/bashes），确认当前状态与预期一致。",
          "goal": "查看shell执行日志（对应Gemini CLI的/shells或/bashes）；使用 /tasks 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“查看shell执行日志（对应Gemini CLI的/shells或/bashes）”对应的信息。"
        }
      ],
      "evidenceRefs": [
        {
          "sourceId": "antigravity-announcement",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · /tasks",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/skills",
      "en": "Browse loaded skills",
      "zh": "浏览已加载的Agent Skills",
      "id": "efe357f11d134986",
      "evidenceStatus": "verified",
      "keywords": [
        "浏览已加载的Agent Skills",
        "Browse loaded skills",
        "/skills"
      ],
      "examples": [
        {
          "value": "/skills",
          "description": "浏览已加载的Agent Skills",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "antigravity-announcement",
              "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · /skills",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前 Antigravity CLI 会话正在处理与“浏览已加载的Agent Skills”直接相关的任务，需要在不中断上下文的情况下执行该操作。",
          "goal": "浏览已加载的Agent Skills；使用 /skills 完成这一步。",
          "expected": "执行成功后，浏览已加载的Agent Skills。"
        }
      ],
      "evidenceRefs": [
        {
          "sourceId": "antigravity-announcement",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · /skills",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "id": "agy-mcp",
      "cat": "slash",
      "cmd": "/mcp",
      "en": "Manage MCP servers",
      "zh": "管理Model Context Protocol服务",
      "evidenceStatus": "verified",
      "keywords": [
        "模型",
        "切换模型",
        "模型选择",
        "管理Model Context Protocol服务",
        "Manage MCP servers",
        "/mcp"
      ],
      "examples": [
        {
          "value": "/mcp",
          "description": "管理 Model Context Protocol 服务",
          "sourceType": "ai-derived",
          "authorship": "editorial",
          "evidenceTier": "none",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "antigravity-announcement",
              "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · /mcp",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前任务对速度、能力或成本的要求发生变化，需要管理Model Context Protocol服务。",
          "goal": "管理Model Context Protocol服务；使用 /mcp 完成这一步。",
          "expected": "执行成功后，管理 Model Context Protocol 服务。"
        }
      ],
      "evidenceRefs": [
        {
          "sourceId": "antigravity-announcement",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · /mcp",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/hooks",
      "en": "Inspect active hooks",
      "zh": "查看激活的pre-flight和post-format生命周期钩子",
      "id": "b3f8fa1798375e84",
      "evidenceStatus": "verified",
      "keywords": [
        "查看",
        "显示",
        "状态",
        "格式化",
        "代码格式",
        "排版",
        "查看激活的pre-flight和post-format生命周期钩子",
        "Inspect active hooks"
      ],
      "examples": [
        {
          "value": "/hooks",
          "description": "查看激活的pre-flight和post-format生命周期钩子",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "antigravity-announcement",
              "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · /hooks",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先查看激活的pre-flight和post-format生命周期钩子，确认当前状态与预期一致。",
          "goal": "查看激活的pre-flight和post-format生命周期钩子；使用 /hooks 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“查看激活的pre-flight和post-format生命周期钩子”对应的信息。"
        }
      ],
      "evidenceRefs": [
        {
          "sourceId": "antigravity-announcement",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · /hooks",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/permissions",
      "en": "Manage permission rules",
      "zh": "为三层配置分别添加/编辑/删除权限规则（1.0.5版本新增，可直接在CLI内操作）",
      "id": "24a611d3af704936",
      "evidenceStatus": "verified",
      "keywords": [
        "删除",
        "移除",
        "清理",
        "配置",
        "设置",
        "偏好",
        "为三层配置分别添加/编辑/删除权限规则（1.0.5版本新增，可直接在CLI内操作）",
        "Manage permission rules"
      ],
      "examples": [
        {
          "value": "/permissions",
          "description": "查看和编辑当前作用域的工具权限规则",
          "sourceType": "manual",
          "authorship": "editorial",
          "evidenceTier": "none",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "antigravity-announcement",
              "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · /permissions",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "提交兼容性问题、核对文档或复现故障前，需要先确认当前安装版本。",
          "goal": "为三层配置分别添加/编辑/删除权限规则（1.0.5版本新增，可直接在CLI内操作）；使用 /permissions 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“查看和编辑当前作用域的工具权限规则”对应的信息。"
        }
      ],
      "evidenceRefs": [
        {
          "sourceId": "antigravity-announcement",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · /permissions",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/fast",
      "en": "Skip plan, execute directly",
      "zh": "跳过规划阶段直接执行，适合快速反馈循环（Gemini CLI无直接对应）",
      "id": "dd96c8aa5687bdf8",
      "evidenceStatus": "verified",
      "keywords": [
        "跳过规划阶段直接执行，适合快速反馈循环（Gemini CLI无直接对应）",
        "Skip plan, execute directly",
        "/fast"
      ],
      "examples": [
        {
          "value": "/fast",
          "description": "跳过规划阶段直接执行，适合范围明确的小任务",
          "warning": "复杂任务建议保留规划阶段",
          "sourceType": "manual",
          "authorship": "editorial",
          "evidenceTier": "none",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "antigravity-announcement",
              "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · /fast",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前 Antigravity CLI 会话正在处理与“跳过规划阶段直接执行，适合快速反馈循环（Gemini CLI无直接对应）”直接相关的任务，需要在不中断上下文的情况下执行该操作。",
          "goal": "跳过规划阶段直接执行，适合快速反馈循环（Gemini CLI无直接对应）；使用 /fast 完成这一步。",
          "expected": "执行成功后，跳过规划阶段直接执行，适合范围明确的小任务。"
        }
      ],
      "evidenceRefs": [
        {
          "sourceId": "antigravity-announcement",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · /fast",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "id": "agy-artifacts",
      "cat": "slash",
      "cmd": "/artifacts",
      "en": "Manage implementation plan",
      "zh": "管理实施计划（对应Gemini CLI的/plan）",
      "evidenceStatus": "verified",
      "keywords": [
        "管理实施计划（对应Gemini CLI的/plan）",
        "Manage implementation plan",
        "/artifacts"
      ],
      "examples": [
        {
          "value": "/artifacts",
          "description": "管理实施计划（对应 Gemini CLI 的 /plan）",
          "sourceType": "ai-derived",
          "authorship": "editorial",
          "evidenceTier": "none",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "antigravity-announcement",
              "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · /artifacts",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前 Antigravity CLI 会话正在处理与“管理实施计划（对应Gemini CLI的/plan）”直接相关的任务，需要在不中断上下文的情况下执行该操作。",
          "goal": "管理实施计划（对应Gemini CLI的/plan）；使用 /artifacts 完成这一步。",
          "expected": "执行成功后，管理实施计划（对应 Gemini CLI 的 /plan）。"
        }
      ],
      "evidenceRefs": [
        {
          "sourceId": "antigravity-announcement",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · /artifacts",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/task",
      "en": "Task status",
      "zh": "查看长任务运行状态",
      "id": "824e159056955065",
      "evidenceStatus": "verified",
      "keywords": [
        "查看",
        "显示",
        "状态",
        "查看长任务运行状态",
        "Task status",
        "/task"
      ],
      "examples": [
        {
          "value": "/task",
          "description": "查看长任务运行状态",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "antigravity-announcement",
              "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · /task",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先查看长任务运行状态，确认当前状态与预期一致。",
          "goal": "查看长任务运行状态；使用 /task 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“查看长任务运行状态”对应的信息。"
        }
      ],
      "evidenceRefs": [
        {
          "sourceId": "antigravity-announcement",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · /task",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/btw",
      "en": "Side question",
      "zh": "插入一个侧向提问，不污染主对话线程",
      "id": "913657d3f97019c3",
      "evidenceStatus": "verified",
      "keywords": [
        "插入一个侧向提问，不污染主对话线程",
        "Side question",
        "/btw"
      ],
      "examples": [
        {
          "value": "/btw",
          "description": "插入一个侧向提问，不污染主对话线程",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "antigravity-announcement",
              "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · /btw",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前 Antigravity CLI 会话正在处理与“插入一个侧向提问，不污染主对话线程”直接相关的任务，需要在不中断上下文的情况下执行该操作。",
          "goal": "插入一个侧向提问，不污染主对话线程；使用 /btw 完成这一步。",
          "expected": "执行成功后，插入一个侧向提问，不污染主对话线程。"
        }
      ],
      "evidenceRefs": [
        {
          "sourceId": "antigravity-announcement",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · /btw",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/export",
      "en": "Push to desktop GUI",
      "zh": "把当前问题推送到Antigravity 2.0桌面应用，查看更丰富的diff和图谱视图",
      "id": "2521b944c0a2dfcd",
      "evidenceStatus": "verified",
      "keywords": [
        "查看",
        "显示",
        "状态",
        "把当前问题推送到Antigravity 2.0桌面应用，查看更丰富的diff和图谱视图",
        "Push to desktop GUI",
        "/export"
      ],
      "examples": [
        {
          "value": "/export",
          "description": "把当前问题推送到Antigravity 2.0桌面应用，查看更丰富的diff和图谱视图",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "antigravity-announcement",
              "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · /export",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先把当前问题推送到Antigravity 2.0桌面应用，查看更丰富的diff和图谱视图，确认当前状态与预期一致。",
          "goal": "把当前问题推送到Antigravity 2.0桌面应用，查看更丰富的diff和图谱视图；使用 /export 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“把当前问题推送到Antigravity 2.0桌面应用，查看更丰富的diff和图谱视图”对应的信息。"
        }
      ],
      "evidenceRefs": [
        {
          "sourceId": "antigravity-announcement",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · /export",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "id": "agy-usage",
      "cat": "slash",
      "cmd": "/usage",
      "en": "Offline developer manual",
      "zh": "离线开发手册（Gemini CLI无直接对应）",
      "evidenceStatus": "verified",
      "keywords": [
        "离线开发手册（Gemini CLI无直接对应）",
        "Offline developer manual",
        "/usage"
      ],
      "examples": [
        {
          "value": "/usage",
          "description": "打开离线开发手册",
          "sourceType": "ai-derived",
          "authorship": "editorial",
          "evidenceTier": "none",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "antigravity-announcement",
              "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · /usage",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前 Antigravity CLI 会话正在处理与“离线开发手册（Gemini CLI无直接对应）”直接相关的任务，需要在不中断上下文的情况下执行该操作。",
          "goal": "离线开发手册（Gemini CLI无直接对应）；使用 /usage 完成这一步。",
          "expected": "执行成功后，打开离线开发手册。"
        }
      ],
      "evidenceRefs": [
        {
          "sourceId": "antigravity-announcement",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · /usage",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl+D（连按两次）",
      "en": "Exit / close TUI",
      "zh": "关闭TUI，恢复原本的shell会话",
      "id": "b6dfa800ff744ae4",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "antigravity-announcement",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · Ctrl+D（连按两次）",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "会话",
        "恢复会话",
        "历史会话",
        "关闭TUI，恢复原本的shell会话",
        "Exit / close TUI",
        "Ctrl+D（连按两次）"
      ],
      "examples": [
        {
          "value": "按 Ctrl+D（连按两次）",
          "description": "关闭TUI，恢复原本的shell会话",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "antigravity-announcement",
              "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · Ctrl+D（连按两次）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Antigravity CLI中需要关闭TUI，恢复原本的shell会话，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Ctrl+D（连按两次）”关闭TUI，恢复原本的shell会话。",
          "expected": "快捷键触发后，当前界面完成“关闭TUI，恢复原本的shell会话”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "y",
      "en": "Confirm proposed command",
      "zh": "确认代理提议要执行的命令",
      "id": "6e9b652918909f1a",
      "evidenceStatus": "verified",
      "keywords": [
        "确认代理提议要执行的命令",
        "Confirm proposed command",
        "y"
      ],
      "examples": [
        {
          "value": "按 y",
          "description": "确认代理提议要执行的命令",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "antigravity-announcement",
              "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · y",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Antigravity CLI中需要确认代理提议要执行的命令，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 y”确认代理提议要执行的命令。",
          "expected": "快捷键触发后，当前界面完成“确认代理提议要执行的命令”对应的动作。"
        }
      ],
      "evidenceRefs": [
        {
          "sourceId": "antigravity-announcement",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · y",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl+K",
      "en": "Fast-approve pending action",
      "zh": "有子代理操作待批准出现在提示框上方时，快速通过",
      "id": "14f28d03955a6ad9",
      "evidenceStatus": "verified",
      "keywords": [
        "有子代理操作待批准出现在提示框上方时，快速通过",
        "Fast-approve pending action",
        "Ctrl+K"
      ],
      "examples": [
        {
          "value": "按 Ctrl+K",
          "description": "有子代理操作待批准出现在提示框上方时，快速通过",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "antigravity-announcement",
              "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · Ctrl+K",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Antigravity CLI中需要有子代理操作待批准出现在提示框上方时，快速通过，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Ctrl+K”有子代理操作待批准出现在提示框上方时，快速通过。",
          "expected": "快捷键触发后，当前界面完成“有子代理操作待批准出现在提示框上方时，快速通过”对应的动作。"
        }
      ],
      "evidenceRefs": [
        {
          "sourceId": "antigravity-announcement",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · Ctrl+K",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl+R",
      "en": "Open Artifact Review panel",
      "zh": "打开工件审查面板；即使在回答待处理问题或权限确认时也能打开，并保留当前进度",
      "id": "14a14ae5536aeb44",
      "evidenceStatus": "verified",
      "keywords": [
        "打开工件审查面板；即使在回答待处理问题或权限确认时也能打开，并保留当前进度",
        "Open Artifact Review panel",
        "Ctrl+R"
      ],
      "examples": [
        {
          "value": "按 Ctrl+R",
          "description": "打开工件审查面板；即使在回答待处理问题或权限确认时也能打开，并保留当前进度",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "antigravity-announcement",
              "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · Ctrl+R",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Antigravity CLI中需要打开工件审查面板；即使在回答待处理问题或权限确认时也能打开，并保留当前进度，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Ctrl+R”打开工件审查面板；即使在回答待处理问题或权限确认时也能打开，并保留当前进度。",
          "expected": "快捷键触发后，当前界面完成“打开工件审查面板；即使在回答待处理问题或权限确认时也能打开，并保留当前进度”对应的动作。"
        }
      ],
      "evidenceRefs": [
        {
          "sourceId": "antigravity-announcement",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · Ctrl+R",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "@路径 或 @目录 或 @**/*.ts",
      "en": "Pull file/glob into context",
      "zh": "把文件、整个目录或glob匹配的文件拉入对话上下文，无需手动粘贴",
      "id": "6f757422f51052b0",
      "evidenceStatus": "verified",
      "keywords": [
        "把文件、整个目录或glob匹配的文件拉入对话上下文，无需手动粘贴",
        "Pull file/glob into context",
        "@路径"
      ],
      "examples": [
        {
          "value": "输入 @src/app.js，把示例文件加入当前对话上下文",
          "description": "把文件、整个目录或glob匹配的文件拉入对话上下文，无需手动粘贴",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "antigravity-announcement",
              "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · @路径 或 @目录 或 @**/*.ts",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Antigravity CLI中需要把文件、整个目录或glob匹配的文件拉入对话上下文，无需手动粘贴，希望直接通过键盘完成该操作时。",
          "goal": "使用“输入 @src/app.js，把示例文件加入当前对话上下文”把文件、整个目录或glob匹配的文件拉入对话上下文，无需手动粘贴。",
          "expected": "快捷键触发后，当前界面完成“把文件、整个目录或glob匹配的文件拉入对话上下文，无需手动粘贴”对应的动作。"
        }
      ],
      "evidenceRefs": [
        {
          "sourceId": "antigravity-announcement",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · @路径 或 @目录 或 @**/*.ts",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "AGENTS.md",
      "en": "Plain-English project instructions",
      "zh": "项目级指令文件，内容会被预置到该目录下处理的每条提示前面（类似CLAUDE.md/GEMINI.md）",
      "id": "15106faa8e640bdf",
      "evidenceStatus": "verified",
      "keywords": [
        "项目级指令文件，内容会被预置到该目录下处理的每条提示前面（类似CLAUDE.md/GEMINI.md）",
        "Plain-English project instructions",
        "AGENTS.md（项目根目录）"
      ],
      "examples": [
        {
          "value": "查看或编辑 AGENTS.md（项目根目录）",
          "description": "项目级指令文件，内容会被预置到该目录下处理的每条提示前面（类似CLAUDE.md/GEMINI.md）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "antigravity-announcement",
              "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · AGENTS.md（项目根目录）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "正在Antigravity CLI中完成“项目级指令文件，内容会被预置到该目录下处理的每条提示前面（类似CLAUDE.md/GEMINI.md）”这一步，需要用默认交互入口减少界面切换。",
          "goal": "项目级指令文件，内容会被预置到该目录下处理的每条提示前面（类似CLAUDE.md/GEMINI.md）；使用 查看或编辑 AGENTS.md（项目根目录） 完成这一步。",
          "expected": "操作后，界面完成“项目级指令文件，内容会被预置到该目录下处理的每条提示前面（类似CLAUDE.md/GEMINI.md）”对应的变化。"
        }
      ],
      "evidenceRefs": [
        {
          "sourceId": "antigravity-announcement",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · AGENTS.md（项目根目录）",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": ".agents/skills/<名称>.md",
      "en": "Define a custom skill",
      "zh": "定义一个可复用的自定义技能，文件名即对应斜杠命令名，如 lint.md → /lint",
      "id": "af7c1a929a572da0",
      "evidenceStatus": "verified",
      "keywords": [
        "定义一个可复用的自定义技能，文件名即对应斜杠命令名，如 lint.md → /lint",
        "Define a custom skill",
        ".agents/skills/<名称>.md"
      ],
      "examples": [
        {
          "value": "查看或编辑 .agents/skills/lint.md",
          "description": "定义一个可复用的自定义技能，文件名即对应斜杠命令名，如 lint.md → /lint",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "antigravity-announcement",
              "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · .agents/skills/<名称>.md",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "正在Antigravity CLI中完成“定义一个可复用的自定义技能，文件名即对应斜杠命令名，如 lint.md → /lint”这一步，需要用默认交互入口减少界面切换。",
          "goal": "定义一个可复用的自定义技能，文件名即对应斜杠命令名，如 lint.md → /lint；使用 查看或编辑 .agents/skills/lint.md 完成这一步。",
          "expected": "操作后，界面完成“定义一个可复用的自定义技能，文件名即对应斜杠命令名，如 lint.md → /lint”对应的变化。"
        }
      ],
      "evidenceRefs": [
        {
          "sourceId": "antigravity-announcement",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · .agents/skills/<名称>.md",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "~/.gemini/antigravity-cli/skills/",
      "en": "Global skills location",
      "zh": "全局技能存放位置",
      "id": "7e4331d861b7b067",
      "evidenceStatus": "verified",
      "keywords": [
        "全局技能存放位置",
        "Global skills location",
        "~/.gemini/antigravity-cli/skills/"
      ],
      "examples": [
        {
          "value": "查看或编辑 ~/.gemini/antigravity-cli/skills/",
          "description": "全局技能存放位置",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "antigravity-announcement",
              "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · ~/.gemini/antigravity-cli/skills/",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "正在Antigravity CLI中完成“全局技能存放位置”这一步，需要用默认交互入口减少界面切换。",
          "goal": "全局技能存放位置；使用 查看或编辑 ~/.gemini/antigravity-cli/skills/ 完成这一步。",
          "expected": "操作后，界面完成“全局技能存放位置”对应的变化。"
        }
      ],
      "evidenceRefs": [
        {
          "sourceId": "antigravity-announcement",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · ~/.gemini/antigravity-cli/skills/",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "~/.gemini/antigravity-cli/settings.json",
      "en": "Main settings file",
      "zh": "主要设置文件（注意路径仍在.gemini目录下的子目录，不是全新独立路径）",
      "id": "de71b9a330f4f520",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "antigravity-announcement",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · ~/.gemini/antigravity-cli/settings.json",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "配置",
        "设置",
        "偏好",
        "主要设置文件（注意路径仍在.gemini目录下的子目录，不是全新独立路径）",
        "Main settings file",
        "~/.gemini/antigravity-cli/settings.json"
      ],
      "examples": [
        {
          "value": "查看或编辑 ~/.gemini/antigravity-cli/settings.json",
          "description": "主要设置文件（注意路径仍在.gemini目录下的子目录，不是全新独立路径）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "antigravity-announcement",
              "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · ~/.gemini/antigravity-cli/settings.json",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前环境的默认设置不适合这次任务，需要主要设置文件（注意路径仍在.gemini目录下的子目录，不是全新独立路径）后再继续工作。",
          "goal": "主要设置文件（注意路径仍在.gemini目录下的子目录，不是全新独立路径）；使用 查看或编辑 ~/.gemini/antigravity-cli/settings.json 完成这一步。",
          "expected": "操作后，界面完成“主要设置文件（注意路径仍在.gemini目录下的子目录，不是全新独立路径）”对应的变化。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "~/.gemini/antigravity-cli/keybindings.json",
      "en": "Custom keybindings",
      "zh": "自定义按键绑定文件",
      "id": "4f0d4824fc36702e",
      "evidenceStatus": "verified",
      "keywords": [
        "自定义按键绑定文件",
        "Custom keybindings",
        "~/.gemini/antigravity-cli/keybindings.json"
      ],
      "examples": [
        {
          "value": "查看或编辑 ~/.gemini/antigravity-cli/keybindings.json",
          "description": "自定义按键绑定文件",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "antigravity-announcement",
              "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · ~/.gemini/antigravity-cli/keybindings.json",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "正在Antigravity CLI中完成“自定义按键绑定文件”这一步，需要用默认交互入口减少界面切换。",
          "goal": "自定义按键绑定文件；使用 查看或编辑 ~/.gemini/antigravity-cli/keybindings.json 完成这一步。",
          "expected": "操作后，界面完成“自定义按键绑定文件”对应的变化。"
        }
      ],
      "evidenceRefs": [
        {
          "sourceId": "antigravity-announcement",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · ~/.gemini/antigravity-cli/keybindings.json",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "~/.gemini/antigravity-cli/log/cli-*.log",
      "en": "Log files",
      "zh": "日志文件位置，排查问题第一个该看的地方",
      "id": "cdb9cdb921f21c4b",
      "evidenceStatus": "verified",
      "keywords": [
        "日志文件位置，排查问题第一个该看的地方",
        "Log files",
        "~/.gemini/antigravity-cli/log/cli-*.log"
      ],
      "examples": [
        {
          "value": "查看或编辑 ~/.gemini/antigravity-cli/log/cli-*.log",
          "description": "日志文件位置，排查问题第一个该看的地方",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "antigravity-announcement",
              "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · ~/.gemini/antigravity-cli/log/cli-*.log",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "正在Antigravity CLI中完成“日志文件位置，排查问题第一个该看的地方”这一步，需要用默认交互入口减少界面切换。",
          "goal": "日志文件位置，排查问题第一个该看的地方；使用 查看或编辑 ~/.gemini/antigravity-cli/log/cli-*.log 完成这一步。",
          "expected": "操作后，界面完成“日志文件位置，排查问题第一个该看的地方”对应的变化。"
        }
      ],
      "evidenceRefs": [
        {
          "sourceId": "antigravity-announcement",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · ~/.gemini/antigravity-cli/log/cli-*.log",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "~/.gemini/antigravity-cli/cache/projects.json",
      "en": "Workspace-project mapping",
      "zh": "工作区到项目的映射缓存",
      "id": "e002f9c2df435163",
      "evidenceStatus": "verified",
      "keywords": [
        "工作区到项目的映射缓存",
        "Workspace-project mapping",
        "~/.gemini/antigravity-cli/cache/projects.json"
      ],
      "examples": [
        {
          "value": "查看或编辑 ~/.gemini/antigravity-cli/cache/projects.json",
          "description": "工作区到项目的映射缓存",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "antigravity-announcement",
              "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · ~/.gemini/antigravity-cli/cache/projects.json",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "正在Antigravity CLI中完成“工作区到项目的映射缓存”这一步，需要用默认交互入口减少界面切换。",
          "goal": "工作区到项目的映射缓存；使用 查看或编辑 ~/.gemini/antigravity-cli/cache/projects.json 完成这一步。",
          "expected": "操作后，界面完成“工作区到项目的映射缓存”对应的变化。"
        }
      ],
      "evidenceRefs": [
        {
          "sourceId": "antigravity-announcement",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · ~/.gemini/antigravity-cli/cache/projects.json",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "首次启动自动检测迁移",
      "en": "Auto-detects legacy Gemini CLI profile",
      "zh": "agy首次启动会检测本机是否有旧版Gemini CLI配置，并提示选择要迁移哪些资产（技能、MCP配置等）",
      "id": "ea9d447021000b4d",
      "evidenceStatus": "verified",
      "keywords": [
        "配置",
        "设置",
        "偏好",
        "agy首次启动会检测本机是否有旧版Gemini CLI配置，并提示选择要迁移哪些资产（技能、MCP配置等）",
        "Auto-detects legacy Gemini CLI profile",
        "首次启动自动检测迁移"
      ],
      "examples": [
        {
          "value": "首次启动 agy，按界面提示选择要迁移的 Gemini CLI 配置",
          "description": "agy首次启动会检测本机是否有旧版Gemini CLI配置，并提示选择要迁移哪些资产（技能、MCP配置等）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "antigravity-announcement",
              "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · 首次启动自动检测迁移",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前环境的默认设置不适合这次任务，需要agy首次启动会检测本机是否有旧版Gemini CLI配置，并提示选择要迁移哪些资产（技能、MCP配置等）后再继续工作。",
          "goal": "agy首次启动会检测本机是否有旧版Gemini CLI配置，并提示选择要迁移哪些资产（技能、MCP配置等）；使用 首次启动 agy，按界面提示选择要迁移的 Gemini CLI 配置 完成这一步。",
          "expected": "操作后，界面完成“agy首次启动会检测本机是否有旧版Gemini CLI配置，并提示选择要迁移哪些资产（技能、MCP配置等）”对应的变化。"
        }
      ],
      "evidenceRefs": [
        {
          "sourceId": "antigravity-announcement",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · 首次启动自动检测迁移",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "安装命令（macOS/Linux）",
      "en": "curl install script",
      "zh": "通过 curl 拉取安装脚本并在 macOS 或 Linux 上安装 Antigravity CLI",
      "id": "3459535a8fe20604",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "antigravity-announcement",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · 安装命令（macOS/Linux）",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "通过 curl 拉取安装脚本并在 macOS 或 Linux 上安装 Antigravity CLI",
        "curl install script",
        "安装命令（macOS/Linux）"
      ],
      "examples": [
        {
          "value": "通过 curl 拉取安装脚本并在 macOS 或 Linux 上安装 Antigravity CLI",
          "description": "通过 curl 拉取安装脚本并在 macOS 或 Linux 上安装 Antigravity CLI",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "antigravity-announcement",
              "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · 安装命令（macOS/Linux）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "准备新的工作环境或资源时，需要通过 curl 拉取安装脚本并在 macOS 或 Linux 上安装 Antigravity CLI，让后续步骤具备所需入口。",
          "goal": "通过 curl 拉取安装脚本并在 macOS 或 Linux 上安装 Antigravity CLI；使用 通过 curl 拉取安装脚本并在 macOS 或 Linux 上安装 Antigravity CLI 完成这一步。",
          "expected": "操作后，界面完成“通过 curl 拉取安装脚本并在 macOS 或 Linux 上安装 Antigravity CLI”对应的变化。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "安装命令（Windows PowerShell）",
      "en": "irm install script",
      "zh": "通过 PowerShell 拉取安装脚本并在 Windows 上安装 Antigravity CLI",
      "id": "101f6e4e0132508a",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "antigravity-announcement",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · 安装命令（Windows PowerShell）",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "通过 PowerShell 拉取安装脚本并在 Windows 上安装 Antigravity CLI",
        "irm install script",
        "安装命令（Windows"
      ],
      "examples": [
        {
          "value": "通过 PowerShell 拉取安装脚本并在 Windows 上安装 Antigravity CLI",
          "description": "通过 PowerShell 拉取安装脚本并在 Windows 上安装 Antigravity CLI",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "antigravity-announcement",
              "locator": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/ · 安装命令（Windows PowerShell）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "准备新的工作环境或资源时，需要通过 PowerShell 拉取安装脚本并在 Windows 上安装 Antigravity CLI，让后续步骤具备所需入口。",
          "goal": "通过 PowerShell 拉取安装脚本并在 Windows 上安装 Antigravity CLI；使用 通过 PowerShell 拉取安装脚本并在 Windows 上安装 Antigravity CLI 完成这一步。",
          "expected": "操作后，界面完成“通过 PowerShell 拉取安装脚本并在 Windows 上安装 Antigravity CLI”对应的变化。"
        }
      ]
    }
  ]
};
