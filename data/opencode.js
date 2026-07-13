// Generated from validated structured data. Manual edits must follow data/SCHEMA.md.
window.CHEATSHEET_DATA = window.CHEATSHEET_DATA || {};
window.CHEATSHEET_DATA["opencode"] = {
  "meta": {
    "id": "opencode",
    "name": "OpenCode",
    "color": "#e8445a",
    "source": "第一方来源与确定性官方入口清单，核验于 2026-07-14",
    "sourceUrl": "https://opencode.ai/docs/",
    "updatedAt": "2026-06-20",
    "contentCheckedAt": "2026-07-02",
    "sourceCheckedAt": "2026-06-21",
    "updatePolicy": "version-driven",
    "verificationStatus": "manual",
    "coverage": "官方入口全集；精确范围、组件与平台限制见 shared/official-inventories/opencode.json",
    "platforms": [
      "mac",
      "windows",
      "linux"
    ],
    "builtIn": true,
    "order": 5,
    "sources": [
      {
        "id": "opencode-tui",
        "title": "OpenCode TUI reference",
        "url": "https://opencode.ai/docs/tui/",
        "kind": "official-doc",
        "maintainer": "OpenCode",
        "evidenceTier": "first-party",
        "lastVerifiedAt": "2026-06-21",
        "resolvedUrl": "https://opencode.ai/docs/tui/",
        "pageTitle": "OpenCode TUI reference",
        "checkedAt": "2026-06-21",
        "purposes": [
          "command-existence",
          "option-semantics",
          "examples"
        ]
      },
      {
        "id": "opencode-keybinds",
        "title": "OpenCode keybinds",
        "url": "https://opencode.ai/docs/keybinds/",
        "kind": "official-doc",
        "maintainer": "OpenCode",
        "evidenceTier": "first-party",
        "lastVerifiedAt": "2026-06-21",
        "resolvedUrl": "https://opencode.ai/docs/keybinds/",
        "pageTitle": "OpenCode keybinds",
        "checkedAt": "2026-06-21",
        "purposes": [
          "command-existence",
          "option-semantics"
        ]
      },
      {
        "id": "opencode-cli",
        "title": "OpenCode CLI reference",
        "url": "https://opencode.ai/docs/cli/",
        "kind": "official-doc",
        "maintainer": "OpenCode",
        "evidenceTier": "first-party",
        "lastVerifiedAt": "2026-06-21",
        "resolvedUrl": "https://opencode.ai/docs/cli/",
        "pageTitle": "OpenCode CLI reference",
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
      "total": 101,
      "covered": 101,
      "checkedAt": "2026-07-13",
      "sourceIds": [
        "opencode-tui",
        "opencode-keybinds",
        "opencode-cli"
      ],
      "inventoryHash": "sha256:7f1a7e903a3ac567447f76160718a93d46a822cc5330b4b0c9365d1d2a42c69b"
    }
  },
  "items": [
    {
      "cat": "shortcut",
      "cmd": "ctrl+x（Leader 键）",
      "en": "Leader key prefix",
      "zh": "大多数功能快捷键的前缀，可在 tui.json 中自定义",
      "id": "4ae90f4c7622f8d2",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · ctrl+x（Leader 键）",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "大多数功能快捷键的前缀，可在 tui.json 中自定义",
        "Leader key prefix",
        "ctrl+x（Leader"
      ],
      "examples": [
        {
          "value": "按 ctrl+x（Leader 键）",
          "description": "大多数功能快捷键的前缀，可在 tui.json 中自定义",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要大多数功能快捷键的前缀，可在 tui.json 中自定义时",
          "goal": "大多数功能快捷键的前缀，可在 tui.json 中自定义",
          "expected": "操作后，工具完成“大多数功能快捷键的前缀，可在 tui.json 中自定义”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · ctrl+x（Leader 键）",
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
      "cat": "shortcut",
      "cmd": "ctrl+c / ctrl+d",
      "en": "Clear input or exit",
      "zh": "输入框有内容时清空；输入框为空时退出",
      "id": "1cf5e663a5b9e138",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · ctrl+c / ctrl+d",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "输入框有内容时清空；输入框为空时退出",
        "Clear input or exit",
        "ctrl+c"
      ],
      "examples": [
        {
          "value": "按 ctrl+c / ctrl+d",
          "description": "输入框有内容时清空；输入框为空时退出",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要输入框有内容时清空；输入框为空时退出时",
          "goal": "输入框有内容时清空；输入框为空时退出",
          "expected": "操作后，工具完成“输入框有内容时清空；输入框为空时退出”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · ctrl+c / ctrl+d",
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
      "cat": "shortcut",
      "cmd": "Esc",
      "en": "Interrupt running session",
      "zh": "中断当前正在运行的生成或会话",
      "id": "3ce7f1745c0843a6",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · Esc",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "会话",
        "恢复会话",
        "历史会话",
        "中断当前正在运行的生成或会话",
        "Interrupt running session",
        "Esc"
      ],
      "examples": [
        {
          "value": "按 Esc",
          "description": "中断当前正在运行的生成或会话",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要中断当前正在运行的生成或会话时",
          "goal": "中断当前正在运行的生成或会话",
          "expected": "操作后，工具完成“中断当前正在运行的生成或会话”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · Esc",
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
      "cat": "shortcut",
      "cmd": "ctrl+p",
      "en": "Open command palette",
      "zh": "打开命令面板，快速搜索所有命令",
      "id": "b48c5de5bf07235a",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · ctrl+p",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "搜索",
        "查找",
        "定位",
        "打开命令面板，快速搜索所有命令",
        "Open command palette",
        "ctrl+p"
      ],
      "examples": [
        {
          "value": "按 ctrl+p",
          "description": "打开命令面板，快速搜索所有命令",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要打开命令面板，快速搜索所有命令时",
          "goal": "打开命令面板，快速搜索所有命令",
          "expected": "操作后，工具完成“打开命令面板，快速搜索所有命令”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · ctrl+p",
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
      "cat": "shortcut",
      "cmd": "ctrl+x n",
      "en": "New session",
      "zh": "开启新会话（等同于 /new）",
      "id": "12a4e410f73f8bea",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · ctrl+x n",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "会话",
        "恢复会话",
        "历史会话",
        "开启新会话（等同于 /new）",
        "New session",
        "ctrl+x"
      ],
      "examples": [
        {
          "value": "按 ctrl+x n",
          "description": "开启新会话（等同于 /new）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要开启新会话（等同于 /new）时",
          "goal": "开启新会话（等同于 /new）",
          "expected": "操作后，工具完成“开启新会话（等同于 /new）”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · ctrl+x n",
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
      "cat": "shortcut",
      "cmd": "ctrl+x l",
      "en": "Session list",
      "zh": "列出所有历史会话并切换（等同于 /sessions）",
      "id": "149a349d8b8a8d85",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · ctrl+x l",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "会话",
        "恢复会话",
        "历史会话",
        "列出所有历史会话并切换（等同于 /sessions）",
        "Session list"
      ],
      "examples": [
        {
          "value": "按 ctrl+x l",
          "description": "列出所有历史会话并切换（等同于 /sessions）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要列出所有历史会话并切换（等同于 /sessions）时",
          "goal": "列出所有历史会话并切换（等同于 /sessions）",
          "expected": "操作后，工具完成“列出所有历史会话并切换（等同于 /sessions）”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · ctrl+x l",
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
      "cat": "shortcut",
      "cmd": "ctrl+x c",
      "en": "Compact session",
      "zh": "压缩当前会话上下文以释放 token（等同于 /compact）",
      "id": "c0ccb4c8015fed18",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · ctrl+x c",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "会话",
        "恢复会话",
        "历史会话",
        "压缩",
        "精简上下文",
        "节省上下文",
        "压缩当前会话上下文以释放 token（等同于 /compact）",
        "Compact session"
      ],
      "examples": [
        {
          "value": "按 ctrl+x c",
          "description": "压缩当前会话上下文以释放 token（等同于 /compact）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要压缩当前会话上下文以释放 token（等同于 /compact）时",
          "goal": "压缩当前会话上下文以释放 token（等同于 /compact）",
          "expected": "操作后，工具完成“压缩当前会话上下文以释放 token（等同于 /compact）”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · ctrl+x c",
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
      "cat": "shortcut",
      "cmd": "ctrl+x u",
      "en": "Undo last message",
      "zh": "撤销最后一条消息并恢复相关文件变更（等同于 /undo，需 Git 仓库）",
      "id": "60c3a03dd38cea88",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · ctrl+x u",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "撤销最后一条消息并恢复相关文件变更（等同于 /undo，需 Git 仓库）",
        "Undo last message",
        "ctrl+x"
      ],
      "examples": [
        {
          "value": "按 ctrl+x u",
          "description": "撤销最后一条消息并恢复相关文件变更（等同于 /undo，需 Git 仓库）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要撤销最后一条消息并恢复相关文件变更（等同于 /undo，需 Git 仓库）时",
          "goal": "撤销最后一条消息并恢复相关文件变更（等同于 /undo，需 Git 仓库）",
          "expected": "操作后，工具完成“撤销最后一条消息并恢复相关文件变更（等同于 /undo，需 Git 仓库）”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · ctrl+x u",
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
      "cat": "shortcut",
      "cmd": "ctrl+x r",
      "en": "Redo undone message",
      "zh": "重做已撤销的消息（等同于 /redo，仅在 /undo 后可用）",
      "id": "bfe55466ec220729",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · ctrl+x r",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "重做已撤销的消息（等同于 /redo，仅在 /undo 后可用）",
        "Redo undone message",
        "ctrl+x"
      ],
      "examples": [
        {
          "value": "按 ctrl+x r",
          "description": "重做已撤销的消息（等同于 /redo，仅在 /undo 后可用）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要重做已撤销的消息（等同于 /redo，仅在 /undo 后可用）时",
          "goal": "重做已撤销的消息（等同于 /redo，仅在 /undo 后可用）",
          "expected": "操作后，工具完成“重做已撤销的消息（等同于 /redo，仅在 /undo 后可用）”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · ctrl+x r",
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
      "cat": "shortcut",
      "cmd": "ctrl+x g",
      "en": "Session timeline",
      "zh": "查看当前会话的时间线",
      "id": "9576eddbb24bc4c8",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · ctrl+x g",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "会话",
        "恢复会话",
        "历史会话",
        "查看当前会话的时间线",
        "Session timeline"
      ],
      "examples": [
        {
          "value": "按 ctrl+x g",
          "description": "查看当前会话的时间线",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要查看当前会话的时间线时",
          "goal": "查看当前会话的时间线",
          "expected": "操作后，工具完成“查看当前会话的时间线”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · ctrl+x g",
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
      "cat": "shortcut",
      "cmd": "ctrl+x x",
      "en": "Export session",
      "zh": "将当前会话导出为 Markdown 并用编辑器打开（等同于 /export）",
      "id": "c43d616c284fb2eb",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · ctrl+x x",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "会话",
        "恢复会话",
        "历史会话",
        "将当前会话导出为 Markdown 并用编辑器打开（等同于 /export）",
        "Export session",
        "ctrl+x"
      ],
      "examples": [
        {
          "value": "按 ctrl+x x",
          "description": "将当前会话导出为 Markdown 并用编辑器打开（等同于 /export）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要将当前会话导出为 Markdown 并用编辑器打开（等同于 /export）时",
          "goal": "将当前会话导出为 Markdown 并用编辑器打开（等同于 /export）",
          "expected": "操作后，工具完成“将当前会话导出为 Markdown 并用编辑器打开（等同于 /export）”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · ctrl+x x",
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
      "cat": "shortcut",
      "cmd": "ctrl+r",
      "en": "Rename session",
      "zh": "重命名当前会话",
      "id": "30c1c0bd1b21076b",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · ctrl+r",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "移动",
        "重命名",
        "改名",
        "会话",
        "恢复会话",
        "历史会话",
        "重命名当前会话",
        "Rename session"
      ],
      "examples": [
        {
          "value": "按 ctrl+r",
          "description": "重命名当前会话",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要重命名当前会话时",
          "goal": "重命名当前会话",
          "expected": "操作后，工具完成“重命名当前会话”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · ctrl+r",
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
      "cat": "shortcut",
      "cmd": "ctrl+x b",
      "en": "Toggle sidebar",
      "zh": "显示/隐藏侧边栏",
      "id": "b11547b2179f2237",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · ctrl+x b",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "显示/隐藏侧边栏",
        "Toggle sidebar",
        "ctrl+x"
      ],
      "examples": [
        {
          "value": "按 ctrl+x b",
          "description": "显示/隐藏侧边栏",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · ctrl+x b",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在OpenCode中需要显示/隐藏侧边栏，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 ctrl+x b”显示/隐藏侧边栏。",
          "expected": "快捷键触发后，当前界面完成“显示/隐藏侧边栏”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "ctrl+x s",
      "en": "Status view",
      "zh": "查看当前状态信息",
      "id": "3bbd17846f9e17af",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · ctrl+x s",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "查看当前状态信息",
        "Status view",
        "ctrl+x"
      ],
      "examples": [
        {
          "value": "按 ctrl+x s",
          "description": "查看当前状态信息",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · ctrl+x s",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在OpenCode中需要查看当前状态信息，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 ctrl+x s”查看当前状态信息。",
          "expected": "快捷键触发后，当前界面完成“查看当前状态信息”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "ctrl+x h",
      "en": "Toggle conceal",
      "zh": "切换隐藏/显示消息中的敏感内容",
      "id": "e123d0e6044f45e8",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · ctrl+x h",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "切换隐藏/显示消息中的敏感内容",
        "Toggle conceal",
        "ctrl+x"
      ],
      "examples": [
        {
          "value": "按 ctrl+x h",
          "description": "切换隐藏/显示消息中的敏感内容",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · ctrl+x h",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在OpenCode中需要切换隐藏/显示消息中的敏感内容，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 ctrl+x h”切换隐藏/显示消息中的敏感内容。",
          "expected": "快捷键触发后，当前界面完成“切换隐藏/显示消息中的敏感内容”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "ctrl+x y",
      "en": "Copy messages",
      "zh": "复制当前消息内容",
      "id": "528baa79ac8e90db",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · ctrl+x y",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "复制",
        "克隆",
        "拷贝",
        "复制当前消息内容",
        "Copy messages",
        "ctrl+x"
      ],
      "examples": [
        {
          "value": "按 ctrl+x y",
          "description": "复制当前消息内容",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · ctrl+x y",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在OpenCode中需要复制当前消息内容，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 ctrl+x y”复制当前消息内容。",
          "expected": "快捷键触发后，当前界面完成“复制当前消息内容”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "ctrl+x e",
      "en": "Open external editor",
      "zh": "用系统 $EDITOR 打开编辑器撰写提示（等同于 /editor）",
      "id": "c30cdc8654e0bf90",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · ctrl+x e",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "用系统 $EDITOR 打开编辑器撰写提示（等同于 /editor）",
        "Open external editor",
        "ctrl+x"
      ],
      "examples": [
        {
          "value": "按 ctrl+x e",
          "description": "用系统 $EDITOR 打开编辑器撰写提示（等同于 /editor）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · ctrl+x e",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在OpenCode中需要用系统 $EDITOR 打开编辑器撰写提示（等同于 /editor），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 ctrl+x e”用系统 $EDITOR 打开编辑器撰写提示（等同于 /editor）。",
          "expected": "快捷键触发后，当前界面完成“用系统 $EDITOR 打开编辑器撰写提示（等同于 /editor）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "ctrl+x q",
      "en": "Quit",
      "zh": "退出 OpenCode（等同于 /exit）",
      "id": "d68be154b8b284d8",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · ctrl+x q",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "退出 OpenCode（等同于 /exit）",
        "Quit",
        "ctrl+x"
      ],
      "examples": [
        {
          "value": "按 ctrl+x q",
          "description": "退出 OpenCode（等同于 /exit）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · ctrl+x q",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在OpenCode中需要退出 OpenCode（等同于 /exit），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 ctrl+x q”退出 OpenCode（等同于 /exit）。",
          "expected": "快捷键触发后，当前界面完成“退出 OpenCode（等同于 /exit）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "ctrl+x m",
      "en": "Model list",
      "zh": "列出可用模型并切换（等同于 /models）",
      "id": "6a6532f136e629ad",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · ctrl+x m",
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
        "列出可用模型并切换（等同于 /models）",
        "Model list"
      ],
      "examples": [
        {
          "value": "按 ctrl+x m",
          "description": "列出可用模型并切换（等同于 /models）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · ctrl+x m",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在OpenCode中需要列出可用模型并切换（等同于 /models），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 ctrl+x m”列出可用模型并切换（等同于 /models）。",
          "expected": "快捷键触发后，当前界面完成“列出可用模型并切换（等同于 /models）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "ctrl+a（非输入框内）",
      "en": "Open provider list",
      "zh": "打开模型提供商列表（在输入框内此键为跳到行首）",
      "id": "51b197f293977a2c",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · ctrl+a（非输入框内）",
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
        "打开模型提供商列表（在输入框内此键为跳到行首）",
        "Open provider list"
      ],
      "examples": [
        {
          "value": "按 ctrl+a（非输入框内）",
          "description": "打开模型提供商列表（在输入框内此键为跳到行首）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · ctrl+a（非输入框内）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在OpenCode中需要打开模型提供商列表（在输入框内此键为跳到行首），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 ctrl+a（非输入框内）”打开模型提供商列表（在输入框内此键为跳到行首）。",
          "expected": "快捷键触发后，当前界面完成“打开模型提供商列表（在输入框内此键为跳到行首）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "f2",
      "en": "Cycle recent models",
      "zh": "在最近使用的模型间循环切换",
      "id": "e90d85b11b97b5ba",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · f2",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "模型",
        "切换模型",
        "模型选择",
        "在最近使用的模型间循环切换",
        "Cycle recent models",
        "f2"
      ],
      "examples": [
        {
          "value": "按 f2",
          "description": "在最近使用的模型间循环切换",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · f2",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在OpenCode中需要在最近使用的模型间循环切换，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 f2”在最近使用的模型间循环切换。",
          "expected": "快捷键触发后，当前界面完成“在最近使用的模型间循环切换”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "shift+f2",
      "en": "Cycle recent models (reverse)",
      "zh": "反向循环切换最近使用的模型",
      "id": "c0071b71065471bf",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · shift+f2",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "模型",
        "切换模型",
        "模型选择",
        "反向循环切换最近使用的模型",
        "Cycle recent models (reverse)",
        "shift+f2"
      ],
      "examples": [
        {
          "value": "按 shift+f2",
          "description": "反向循环切换最近使用的模型",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · shift+f2",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在OpenCode中需要反向循环切换最近使用的模型，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 shift+f2”反向循环切换最近使用的模型。",
          "expected": "快捷键触发后，当前界面完成“反向循环切换最近使用的模型”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "ctrl+t",
      "en": "Cycle model variant",
      "zh": "在模型推理强度变体（reasoning effort）间循环切换",
      "id": "d19c4f8ac88d7038",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · ctrl+t",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "模型",
        "切换模型",
        "模型选择",
        "在模型推理强度变体（reasoning effort）间循环切换",
        "Cycle model variant",
        "ctrl+t"
      ],
      "examples": [
        {
          "value": "按 ctrl+t",
          "description": "在模型推理强度变体（reasoning effort）间循环切换",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · ctrl+t",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在OpenCode中需要在模型推理强度变体（reasoning effort）间循环切换，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 ctrl+t”在模型推理强度变体（reasoning effort）间循环切换。",
          "expected": "快捷键触发后，当前界面完成“在模型推理强度变体（reasoning effort）间循环切换”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "ctrl+x a",
      "en": "Agent list",
      "zh": "列出可用 Agent 并切换",
      "id": "316c86edb0531b7e",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · ctrl+x a",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "列出可用 Agent 并切换",
        "Agent list",
        "ctrl+x"
      ],
      "examples": [
        {
          "value": "按 ctrl+x a",
          "description": "列出可用 Agent 并切换",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · ctrl+x a",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在OpenCode中需要列出可用 Agent 并切换，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 ctrl+x a”列出可用 Agent 并切换。",
          "expected": "快捷键触发后，当前界面完成“列出可用 Agent 并切换”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Tab",
      "en": "Next agent",
      "zh": "切换到下一个 Agent",
      "id": "5824436a4a802acf",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · Tab",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "切换到下一个 Agent",
        "Next agent",
        "Tab"
      ],
      "examples": [
        {
          "value": "按 Tab",
          "description": "切换到下一个 Agent",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · Tab",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在OpenCode中需要切换到下一个 Agent，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Tab”切换到下一个 Agent。",
          "expected": "快捷键触发后，当前界面完成“切换到下一个 Agent”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Shift+Tab",
      "en": "Previous agent",
      "zh": "切换到上一个 Agent",
      "id": "240ab4d319d4d386",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · Shift+Tab",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "切换到上一个 Agent",
        "Previous agent",
        "Shift+Tab"
      ],
      "examples": [
        {
          "value": "按 Shift+Tab",
          "description": "切换到上一个 Agent",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · Shift+Tab",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在OpenCode中需要切换到上一个 Agent，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Shift+Tab”切换到上一个 Agent。",
          "expected": "快捷键触发后，当前界面完成“切换到上一个 Agent”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "ctrl+x t",
      "en": "Theme list",
      "zh": "列出主题并切换（等同于 /themes）",
      "id": "f553fb05831b941d",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · ctrl+x t",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "列出主题并切换（等同于 /themes）",
        "Theme list",
        "ctrl+x"
      ],
      "examples": [
        {
          "value": "按 ctrl+x t",
          "description": "列出主题并切换（等同于 /themes）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · ctrl+x t",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在OpenCode中需要列出主题并切换（等同于 /themes），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 ctrl+x t”列出主题并切换（等同于 /themes）。",
          "expected": "快捷键触发后，当前界面完成“列出主题并切换（等同于 /themes）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "PageUp / ctrl+alt+b",
      "en": "Scroll messages up (page)",
      "zh": "消息列表向上翻一页",
      "id": "ada69cc7d119ba3f",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · PageUp / ctrl+alt+b",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "消息列表向上翻一页",
        "Scroll messages up (page)",
        "PageUp"
      ],
      "examples": [
        {
          "value": "按 PageUp / ctrl+alt+b",
          "description": "消息列表向上翻一页",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · PageUp / ctrl+alt+b",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在OpenCode中需要消息列表向上翻一页，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 PageUp / ctrl+alt+b”消息列表向上翻一页。",
          "expected": "快捷键触发后，当前界面完成“消息列表向上翻一页”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "PageDown / ctrl+alt+f",
      "en": "Scroll messages down (page)",
      "zh": "消息列表向下翻一页",
      "id": "8368d8122aea4328",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · PageDown / ctrl+alt+f",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "消息列表向下翻一页",
        "Scroll messages down (page)",
        "PageDown"
      ],
      "examples": [
        {
          "value": "按 PageDown / ctrl+alt+f",
          "description": "消息列表向下翻一页",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · PageDown / ctrl+alt+f",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在OpenCode中需要消息列表向下翻一页，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 PageDown / ctrl+alt+f”消息列表向下翻一页。",
          "expected": "快捷键触发后，当前界面完成“消息列表向下翻一页”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "ctrl+alt+u",
      "en": "Scroll messages up (half page)",
      "zh": "消息列表向上翻半页",
      "id": "9970a4e4dacac8f6",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · ctrl+alt+u",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "消息列表向上翻半页",
        "Scroll messages up (half page)",
        "ctrl+alt+u"
      ],
      "examples": [
        {
          "value": "按 ctrl+alt+u",
          "description": "消息列表向上翻半页",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · ctrl+alt+u",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在OpenCode中需要消息列表向上翻半页，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 ctrl+alt+u”消息列表向上翻半页。",
          "expected": "快捷键触发后，当前界面完成“消息列表向上翻半页”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "ctrl+alt+d",
      "en": "Scroll messages down (half page)",
      "zh": "消息列表向下翻半页",
      "id": "854f62d25b01906c",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · ctrl+alt+d",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "消息列表向下翻半页",
        "Scroll messages down (half page)",
        "ctrl+alt+d"
      ],
      "examples": [
        {
          "value": "按 ctrl+alt+d",
          "description": "消息列表向下翻半页",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · ctrl+alt+d",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在OpenCode中需要消息列表向下翻半页，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 ctrl+alt+d”消息列表向下翻半页。",
          "expected": "快捷键触发后，当前界面完成“消息列表向下翻半页”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "ctrl+alt+y / ctrl+alt+e",
      "en": "Scroll messages one line",
      "zh": "消息列表逐行向上（y）/向下（e）滚动",
      "id": "0aa66f92f5641959",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · ctrl+alt+y / ctrl+alt+e",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "消息列表逐行向上（y）/向下（e）滚动",
        "Scroll messages one line",
        "ctrl+alt+y"
      ],
      "examples": [
        {
          "value": "按 ctrl+alt+y / ctrl+alt+e",
          "description": "消息列表逐行向上（y）/向下（e）滚动",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · ctrl+alt+y / ctrl+alt+e",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在OpenCode中需要消息列表逐行向上（y）/向下（e）滚动，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 ctrl+alt+y / ctrl+alt+e”消息列表逐行向上（y）/向下（e）滚动。",
          "expected": "快捷键触发后，当前界面完成“消息列表逐行向上（y）/向下（e）滚动”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "ctrl+g / Home",
      "en": "Jump to first message",
      "zh": "跳转到第一条消息",
      "id": "b8c4a5041e15875c",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · ctrl+g / Home",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "跳转到第一条消息",
        "Jump to first message",
        "ctrl+g"
      ],
      "examples": [
        {
          "value": "按 ctrl+g / Home",
          "description": "跳转到第一条消息",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · ctrl+g / Home",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在OpenCode中需要跳转到第一条消息，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 ctrl+g / Home”跳转到第一条消息。",
          "expected": "快捷键触发后，当前界面完成“跳转到第一条消息”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "ctrl+alt+g / End",
      "en": "Jump to last message",
      "zh": "跳转到最后一条消息",
      "id": "c57aa1a07e472e3d",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · ctrl+alt+g / End",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "跳转到最后一条消息",
        "Jump to last message",
        "ctrl+alt+g"
      ],
      "examples": [
        {
          "value": "按 ctrl+alt+g / End",
          "description": "跳转到最后一条消息",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · ctrl+alt+g / End",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在OpenCode中需要跳转到最后一条消息，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 ctrl+alt+g / End”跳转到最后一条消息。",
          "expected": "快捷键触发后，当前界面完成“跳转到最后一条消息”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Shift+Enter / ctrl+j",
      "en": "Newline (don't submit)",
      "zh": "换行不发送（ctrl+j 在任何终端均可用）",
      "id": "e90369e66a429479",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · Shift+Enter / ctrl+j",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "换行不发送（ctrl+j 在任何终端均可用）",
        "Newline (don't submit)",
        "Shift+Enter"
      ],
      "examples": [
        {
          "value": "按 Shift+Enter / ctrl+j",
          "description": "换行不发送（ctrl+j 在任何终端均可用）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · Shift+Enter / ctrl+j",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在OpenCode中需要换行不发送（ctrl+j 在任何终端均可用），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Shift+Enter / ctrl+j”换行不发送（ctrl+j 在任何终端均可用）。",
          "expected": "快捷键触发后，当前界面完成“换行不发送（ctrl+j 在任何终端均可用）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "ctrl+v",
      "en": "Paste",
      "zh": "粘贴剪贴板内容到输入框",
      "id": "aea5581255a15c9d",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · ctrl+v",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "粘贴剪贴板内容到输入框",
        "Paste",
        "ctrl+v"
      ],
      "examples": [
        {
          "value": "按 ctrl+v",
          "description": "粘贴剪贴板内容到输入框",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · ctrl+v",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在OpenCode中需要粘贴剪贴板内容到输入框，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 ctrl+v”粘贴剪贴板内容到输入框。",
          "expected": "快捷键触发后，当前界面完成“粘贴剪贴板内容到输入框”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "ctrl+a（输入框内）",
      "en": "Move to line start",
      "zh": "光标跳到当前行行首（全局视图中此键为打开提供商列表）",
      "id": "ec3cf3ccde292ee5",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · ctrl+a（输入框内）",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "移动",
        "重命名",
        "改名",
        "光标跳到当前行行首（全局视图中此键为打开提供商列表）",
        "Move to line start",
        "ctrl+a（输入框内）"
      ],
      "examples": [
        {
          "value": "按 ctrl+a（输入框内）",
          "description": "光标跳到当前行行首（全局视图中此键为打开提供商列表）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · ctrl+a（输入框内）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在OpenCode中需要光标跳到当前行行首（全局视图中此键为打开提供商列表），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 ctrl+a（输入框内）”光标跳到当前行行首（全局视图中此键为打开提供商列表）。",
          "expected": "快捷键触发后，当前界面完成“光标跳到当前行行首（全局视图中此键为打开提供商列表）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "ctrl+e",
      "en": "Move to line end",
      "zh": "光标跳到当前行行尾",
      "id": "eae0b746fe181c1b",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · ctrl+e",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "移动",
        "重命名",
        "改名",
        "光标跳到当前行行尾",
        "Move to line end",
        "ctrl+e"
      ],
      "examples": [
        {
          "value": "按 ctrl+e",
          "description": "光标跳到当前行行尾",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · ctrl+e",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在OpenCode中需要光标跳到当前行行尾，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 ctrl+e”光标跳到当前行行尾。",
          "expected": "快捷键触发后，当前界面完成“光标跳到当前行行尾”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "ctrl+k",
      "en": "Delete to line end",
      "zh": "删除从光标到行尾的内容",
      "id": "ad84fb7eebfc097e",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · ctrl+k",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "删除",
        "移除",
        "清理",
        "删除从光标到行尾的内容",
        "Delete to line end",
        "ctrl+k"
      ],
      "examples": [
        {
          "value": "按 ctrl+k",
          "description": "删除从光标到行尾的内容",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · ctrl+k",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在OpenCode中需要删除从光标到行尾的内容，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 ctrl+k”删除从光标到行尾的内容。",
          "expected": "快捷键触发后，当前界面完成“删除从光标到行尾的内容”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "ctrl+u",
      "en": "Delete to line start",
      "zh": "删除从光标到行首的内容",
      "id": "260ed6e5f69a07c0",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · ctrl+u",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "删除",
        "移除",
        "清理",
        "删除从光标到行首的内容",
        "Delete to line start",
        "ctrl+u"
      ],
      "examples": [
        {
          "value": "按 ctrl+u",
          "description": "删除从光标到行首的内容",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · ctrl+u",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在OpenCode中需要删除从光标到行首的内容，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 ctrl+u”删除从光标到行首的内容。",
          "expected": "快捷键触发后，当前界面完成“删除从光标到行首的内容”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "ctrl+w / ctrl+backspace",
      "en": "Delete word backward",
      "zh": "向前删除一个单词",
      "id": "c5b2a74d9f1744fb",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · ctrl+w / ctrl+backspace",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "删除",
        "移除",
        "清理",
        "向前删除一个单词",
        "Delete word backward",
        "ctrl+w"
      ],
      "examples": [
        {
          "value": "按 ctrl+w / ctrl+backspace",
          "description": "向前删除一个单词",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · ctrl+w / ctrl+backspace",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在OpenCode中需要向前删除一个单词，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 ctrl+w / ctrl+backspace”向前删除一个单词。",
          "expected": "快捷键触发后，当前界面完成“向前删除一个单词”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "alt+d",
      "en": "Delete word forward",
      "zh": "向后删除一个单词",
      "id": "904d53ab364dd01c",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · alt+d",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "删除",
        "移除",
        "清理",
        "向后删除一个单词",
        "Delete word forward",
        "alt+d"
      ],
      "examples": [
        {
          "value": "按 alt+d",
          "description": "向后删除一个单词",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · alt+d",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在OpenCode中需要向后删除一个单词，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 alt+d”向后删除一个单词。",
          "expected": "快捷键触发后，当前界面完成“向后删除一个单词”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "alt+f / alt+right",
      "en": "Move word forward",
      "zh": "光标向后移动一个单词",
      "id": "424d55e61844bb85",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · alt+f / alt+right",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "移动",
        "重命名",
        "改名",
        "光标向后移动一个单词",
        "Move word forward",
        "alt+f"
      ],
      "examples": [
        {
          "value": "按 alt+f / alt+right",
          "description": "光标向后移动一个单词",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · alt+f / alt+right",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在OpenCode中需要光标向后移动一个单词，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 alt+f / alt+right”光标向后移动一个单词。",
          "expected": "快捷键触发后，当前界面完成“光标向后移动一个单词”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "alt+b / alt+left",
      "en": "Move word backward",
      "zh": "光标向前移动一个单词",
      "id": "b6298a35156af81e",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · alt+b / alt+left",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "移动",
        "重命名",
        "改名",
        "光标向前移动一个单词",
        "Move word backward",
        "alt+b"
      ],
      "examples": [
        {
          "value": "按 alt+b / alt+left",
          "description": "光标向前移动一个单词",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · alt+b / alt+left",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在OpenCode中需要光标向前移动一个单词，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 alt+b / alt+left”光标向前移动一个单词。",
          "expected": "快捷键触发后，当前界面完成“光标向前移动一个单词”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "@（输入中）",
      "en": "File reference",
      "zh": "模糊搜索并引用文件，文件内容自动加入上下文",
      "id": "35fa9b77ba8ea7de",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · @（输入中）",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "搜索",
        "查找",
        "定位",
        "模糊搜索并引用文件，文件内容自动加入上下文",
        "File reference",
        "@（输入中）"
      ],
      "examples": [
        {
          "value": "按 @（输入中）",
          "description": "模糊搜索并引用文件，文件内容自动加入上下文",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · @（输入中）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在OpenCode中需要模糊搜索并引用文件，文件内容自动加入上下文，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 @（输入中）”模糊搜索并引用文件，文件内容自动加入上下文。",
          "expected": "快捷键触发后，当前界面完成“模糊搜索并引用文件，文件内容自动加入上下文”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "!（输入中）",
      "en": "Run shell command",
      "zh": "执行 shell 命令并将输出加入对话",
      "id": "48ac353b2925174e",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · !（输入中）",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "执行 shell 命令并将输出加入对话",
        "Run shell command",
        "!（输入中）"
      ],
      "examples": [
        {
          "value": "按 !（输入中）",
          "description": "执行 shell 命令并将输出加入对话",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · !（输入中）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在OpenCode中需要执行 shell 命令并将输出加入对话，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 !（输入中）”执行 shell 命令并将输出加入对话。",
          "expected": "快捷键触发后，当前界面完成“执行 shell 命令并将输出加入对话”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "/（输入中）",
      "en": "Slash command",
      "zh": "触发斜杠命令补全菜单",
      "id": "09cf47eae714ccbe",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · /（输入中）",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "触发斜杠命令补全菜单",
        "Slash command",
        "/（输入中）"
      ],
      "examples": [
        {
          "value": "按 /（输入中）",
          "description": "触发斜杠命令补全菜单",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · /（输入中）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在OpenCode中需要触发斜杠命令补全菜单，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 /（输入中）”触发斜杠命令补全菜单。",
          "expected": "快捷键触发后，当前界面完成“触发斜杠命令补全菜单”对应的动作。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/new",
      "en": "Start new session",
      "zh": "开启新会话（别名 /clear）",
      "id": "bbdef6839d8b634d",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/（页面内检索 /new）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "会话",
        "恢复会话",
        "历史会话",
        "开启新会话（别名 /clear）",
        "Start new session",
        "/new"
      ],
      "examples": [
        {
          "value": "/new",
          "description": "清空当前上下文并开始新会话",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "opencode-tui"
          ],
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/（页面内检索 /new）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "先前的工作会话被中断后，需要开启新会话（别名 /clear），而不是重新开始。",
          "goal": "开启新会话（别名 /clear）；使用 /new 完成这一步。",
          "expected": "执行成功后，清空当前上下文并开始新会话。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/sessions",
      "en": "List and switch sessions",
      "zh": "列出所有历史会话并切换（别名 /resume /continue）",
      "id": "b73891070fc3e862",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/（页面内检索 /sessions）",
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
        "列出所有历史会话并切换（别名 /resume /continue）",
        "List and switch sessions"
      ],
      "examples": [
        {
          "value": "/sessions",
          "description": "列出历史会话并切换到其中一个",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "opencode-tui"
          ],
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/（页面内检索 /sessions）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "先前的工作会话被中断后，需要列出所有历史会话并切换（别名 /resume /continue），而不是重新开始。",
          "goal": "列出所有历史会话并切换（别名 /resume /continue）；使用 /sessions 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“列出历史会话并切换到其中一个”对应的信息。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/undo",
      "en": "Undo last message",
      "zh": "撤销最后一条消息并恢复相关文件变更（需要 Git 仓库）",
      "id": "8dc0a4a63ab72090",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · /undo（原文：\"Undo last message in the conversation. Removes the most recent user message, all subsequent responses, and any file changes.\"；\"Internally, this uses Git to manage the file changes. So your project needs to be a Git repository.\"）",
          "checkedAt": "2026-07-02"
        }
      ],
      "keywords": [
        "撤销最后一条消息并恢复相关文件变更（需要 Git 仓库）",
        "Undo last message",
        "/undo"
      ],
      "examples": [
        {
          "value": "/undo",
          "description": "撤销最后一条消息以及相关文件改动",
          "warning": "需要在 Git 仓库中使用",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "opencode-tui"
          ],
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · /undo（原文：\"Undo last message in the conversation. Removes the most recent user message, all subsequent responses, and any file changes.\"；\"Internally, this uses Git to manage the file changes. So your project needs to be a Git repository.\"）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "先前的工作会话被中断后，需要撤销最后一条消息并恢复相关文件变更（需要 Git 仓库），而不是重新开始。",
          "goal": "撤销最后一条消息并恢复相关文件变更（需要 Git 仓库）；使用 /undo 完成这一步。",
          "expected": "执行成功后，撤销最后一条消息以及相关文件改动。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/redo",
      "en": "Redo undone message",
      "zh": "重做已撤销的消息（仅在 /undo 后可用）",
      "id": "fbea0378820e6074",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/（页面内检索 /redo）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "重做已撤销的消息（仅在 /undo 后可用）",
        "Redo undone message",
        "/redo"
      ],
      "examples": [
        {
          "value": "/redo",
          "description": "重做已撤销的消息（仅在 /undo 后可用）",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/（页面内检索 /redo）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前 OpenCode 会话正在处理与“重做已撤销的消息（仅在 /undo 后可用）”直接相关的任务，需要在不中断上下文的情况下执行该操作。",
          "goal": "重做已撤销的消息（仅在 /undo 后可用）；使用 /redo 完成这一步。",
          "expected": "执行成功后，重做已撤销的消息（仅在 /undo 后可用）。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/compact",
      "en": "Compact session context",
      "zh": "压缩当前会话上下文释放 token（别名 /summarize）",
      "id": "24c6e93d5df8e6b7",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/（页面内检索 /compact）",
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
        "压缩当前会话上下文释放 token（别名 /summarize）",
        "Compact session context"
      ],
      "examples": [
        {
          "value": "/compact",
          "description": "压缩当前会话上下文以释放 token",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "opencode-tui"
          ],
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/（页面内检索 /compact）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "先前的工作会话被中断后，需要压缩当前会话上下文释放 token（别名 /summarize），而不是重新开始。",
          "goal": "压缩当前会话上下文释放 token（别名 /summarize）；使用 /compact 完成这一步。",
          "expected": "执行成功后，压缩当前会话上下文以释放 token。"
        }
      ]
    },
    {
      "id": "opencode-init",
      "cat": "slash",
      "cmd": "/init",
      "en": "Create/update AGENTS.md",
      "zh": "引导创建或更新项目的 AGENTS.md 文件",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/（页面内检索 /init）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "创建",
        "新建",
        "初始化",
        "引导创建或更新项目的 AGENTS.md 文件",
        "Create/update AGENTS.md",
        "/init"
      ],
      "examples": [
        {
          "value": "/init",
          "description": "引导创建或更新项目的 AGENTS.md 文件",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "opencode-tui"
          ],
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/（页面内检索 /init）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "准备新的工作环境或资源时，需要引导创建或更新项目的 AGENTS.md 文件，让后续步骤具备所需入口。",
          "goal": "引导创建或更新项目的 AGENTS.md 文件；使用 /init 完成这一步。",
          "expected": "执行成功后，引导创建或更新项目的 AGENTS.md 文件。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/models",
      "en": "List available models",
      "zh": "列出所有已配置提供商的可用模型",
      "id": "d83a296afac5d1b6",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/（页面内检索 /models）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "配置",
        "设置",
        "偏好",
        "模型",
        "切换模型"
      ],
      "examples": [
        {
          "value": "/models",
          "description": "列出所有已配置提供商的可用模型",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "opencode-tui"
          ],
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/（页面内检索 /models）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先列出所有已配置提供商的可用模型，确认当前状态与预期一致。",
          "goal": "列出所有已配置提供商的可用模型；使用 /models 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“列出所有已配置提供商的可用模型”对应的信息。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/themes",
      "en": "List and switch themes",
      "zh": "列出可用主题并切换",
      "id": "2bbb164a243972bd",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/（页面内检索 /themes）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "列出可用主题并切换",
        "List and switch themes",
        "/themes"
      ],
      "examples": [
        {
          "value": "/themes",
          "description": "列出可用主题并切换",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/（页面内检索 /themes）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先列出可用主题并切换，确认当前状态与预期一致。",
          "goal": "列出可用主题并切换；使用 /themes 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“列出可用主题并切换”对应的信息。"
        }
      ]
    },
    {
      "id": "opencode-share",
      "cat": "slash",
      "cmd": "/share",
      "en": "Share current session",
      "zh": "生成可分享的会话链接",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/（页面内检索 /share）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "会话",
        "恢复会话",
        "历史会话",
        "生成可分享的会话链接",
        "Share current session",
        "/share"
      ],
      "examples": [
        {
          "value": "/share",
          "description": "为当前会话生成可分享的链接",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "opencode-tui"
          ],
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/（页面内检索 /share）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "先前的工作会话被中断后，需要生成可分享的会话链接，而不是重新开始。",
          "goal": "生成可分享的会话链接；使用 /share 完成这一步。",
          "expected": "执行成功后，为当前会话生成可分享的链接。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/unshare",
      "en": "Unshare session",
      "zh": "取消分享当前会话",
      "id": "5425d925235752f1",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/（页面内检索 /unshare）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "会话",
        "恢复会话",
        "历史会话",
        "取消分享当前会话",
        "Unshare session",
        "/unshare"
      ],
      "examples": [
        {
          "value": "/unshare",
          "description": "取消分享当前会话",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/（页面内检索 /unshare）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "先前的工作会话被中断后，需要取消分享当前会话，而不是重新开始。",
          "goal": "取消分享当前会话；使用 /unshare 完成这一步。",
          "expected": "执行成功后，取消分享当前会话。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/export",
      "en": "Export session to Markdown",
      "zh": "将当前会话导出为 Markdown 文件并用编辑器打开",
      "id": "9058643e35106a3d",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/（页面内检索 /export）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "会话",
        "恢复会话",
        "历史会话",
        "将当前会话导出为 Markdown 文件并用编辑器打开",
        "Export session to Markdown",
        "/export"
      ],
      "examples": [
        {
          "value": "/export",
          "description": "将当前会话导出为 Markdown 并用编辑器打开",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "opencode-tui"
          ],
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/（页面内检索 /export）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "先前的工作会话被中断后，需要将当前会话导出为 Markdown 文件并用编辑器打开，而不是重新开始。",
          "goal": "将当前会话导出为 Markdown 文件并用编辑器打开；使用 /export 完成这一步。",
          "expected": "执行成功后，将当前会话导出为 Markdown 并用编辑器打开。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/editor",
      "en": "Open external editor",
      "zh": "用系统 $EDITOR 打开编辑器撰写提示",
      "id": "e981f3605f403a15",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/（页面内检索 /editor）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "用系统 $EDITOR 打开编辑器撰写提示",
        "Open external editor",
        "/editor"
      ],
      "examples": [
        {
          "value": "/editor",
          "description": "使用系统 EDITOR 编写较长的提示词",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "opencode-tui"
          ],
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/（页面内检索 /editor）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前 OpenCode 会话正在处理与“用系统 $EDITOR 打开编辑器撰写提示”直接相关的任务，需要在不中断上下文的情况下执行该操作。",
          "goal": "用系统 $EDITOR 打开编辑器撰写提示；使用 /editor 完成这一步。",
          "expected": "执行成功后，使用系统 EDITOR 编写较长的提示词。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/connect",
      "en": "Add AI provider",
      "zh": "交互式添加 AI 提供商及其 API Key",
      "id": "77fd10ba6ecfb6b9",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/（页面内检索 /connect）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "交互式添加 AI 提供商及其 API Key",
        "Add AI provider",
        "/connect"
      ],
      "examples": [
        {
          "value": "/connect",
          "description": "交互式添加 AI 提供商及其 API Key",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/（页面内检索 /connect）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "准备新的工作环境或资源时，需要交互式添加 AI 提供商及其 API Key，让后续步骤具备所需入口。",
          "goal": "交互式添加 AI 提供商及其 API Key；使用 /connect 完成这一步。",
          "expected": "执行成功后，交互式添加 AI 提供商及其 API Key。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/details",
      "en": "Toggle tool details",
      "zh": "切换显示/隐藏工具调用的详细信息",
      "id": "dc922bbfc655f6ca",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/（页面内检索 /details）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "切换显示/隐藏工具调用的详细信息",
        "Toggle tool details",
        "/details"
      ],
      "examples": [
        {
          "value": "/details",
          "description": "切换显示/隐藏工具调用的详细信息",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/（页面内检索 /details）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先切换显示/隐藏工具调用的详细信息，确认当前状态与预期一致。",
          "goal": "切换显示/隐藏工具调用的详细信息；使用 /details 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“切换显示/隐藏工具调用的详细信息”对应的信息。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/thinking",
      "en": "Toggle thinking display",
      "zh": "切换是否显示模型的 thinking/reasoning 内容（不影响能力开关）",
      "id": "35a01e183621e300",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/（页面内检索 /thinking）",
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
        "切换是否显示模型的 thinking/reasoning 内容（不影响能力开关）",
        "Toggle thinking display"
      ],
      "examples": [
        {
          "value": "/thinking",
          "description": "切换是否显示模型的 thinking/reasoning 内容（不影响能力开关）",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/（页面内检索 /thinking）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先切换是否显示模型的 thinking/reasoning 内容（不影响能力开关），确认当前状态与预期一致。",
          "goal": "切换是否显示模型的 thinking/reasoning 内容（不影响能力开关）；使用 /thinking 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“切换是否显示模型的 thinking/reasoning 内容（不影响能力开关）”对应的信息。"
        }
      ]
    },
    {
      "id": "opencode-help",
      "cat": "slash",
      "cmd": "/help",
      "en": "Show help dialog",
      "zh": "显示帮助对话框",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/（页面内检索 /help）",
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
        "显示帮助对话框",
        "Show help dialog"
      ],
      "examples": [
        {
          "value": "/help",
          "description": "打开帮助对话框",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "opencode-tui"
          ],
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/（页面内检索 /help）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "忘记入口用法或可用参数时，需要在当前工作流中调出官方帮助。",
          "goal": "显示帮助对话框；使用 /help 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“打开帮助对话框”对应的信息。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/exit",
      "en": "Exit OpenCode",
      "zh": "退出 OpenCode（别名 /quit /q）",
      "id": "cc7417b4d1de54a0",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/（页面内检索 /exit）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "退出 OpenCode（别名 /quit /q）",
        "Exit OpenCode",
        "/exit"
      ],
      "examples": [
        {
          "value": "/exit",
          "description": "退出 OpenCode（别名 /quit /q）",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/（页面内检索 /exit）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前 OpenCode 会话正在处理与“退出 OpenCode（别名 /quit /q）”直接相关的任务，需要在不中断上下文的情况下执行该操作。",
          "goal": "退出 OpenCode（别名 /quit /q）；使用 /exit 完成这一步。",
          "expected": "执行成功后，退出 OpenCode（别名 /quit /q）。"
        }
      ]
    },
    {
      "id": "opencode-launch",
      "cat": "flag",
      "cmd": "opencode",
      "en": "Start TUI in current directory",
      "zh": "在当前目录启动交互式终端界面",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · opencode",
          "checkedAt": "2026-07-13"
        },
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · opencode [path]",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "在当前目录启动交互式终端界面",
        "Start TUI in current directory",
        "opencode",
        "在指定目录启动 TUI",
        "Start TUI in specific directory"
      ],
      "examples": [
        {
          "value": "opencode",
          "description": "在当前目录启动交互式终端界面",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "opencode-cli"
          ],
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · opencode",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "终端中的当前任务需要“在当前目录启动交互式终端界面”，因此要调用对应的官方命令入口。",
          "goal": "在当前目录启动交互式终端界面；使用 opencode 完成这一步。",
          "expected": "执行成功后，在当前目录启动交互式终端界面。"
        },
        {
          "value": "opencode src/app.js",
          "description": "在指定目录启动 TUI",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · opencode",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "终端中的当前任务需要“在当前目录启动交互式终端界面”，因此要调用对应的官方命令入口。",
          "goal": "在当前目录启动交互式终端界面；使用 opencode src/app.js 完成这一步。",
          "expected": "执行成功后，在指定目录启动 TUI。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "opencode run",
      "en": "Non-interactive one-shot run",
      "zh": "非交互式执行一次性提示，适合脚本自动化",
      "id": "c957bff9c4115d34",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · opencode run \"[prompt]\"",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "非交互式执行一次性提示，适合脚本自动化",
        "Non-interactive one-shot run",
        "opencode"
      ],
      "examples": [
        {
          "value": "opencode run \"检查测试失败的原因\"",
          "description": "非交互执行一次任务并输出结果",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "opencode-cli"
          ],
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · opencode run \"[prompt]\"",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "终端中的当前任务需要“非交互式执行一次性提示，适合脚本自动化”，因此要调用对应的官方命令入口。",
          "goal": "非交互式执行一次性提示，适合脚本自动化；使用 opencode run \"检查测试失败的原因\" 完成这一步。",
          "expected": "执行成功后，非交互执行一次任务并输出结果。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "opencode run -m",
      "en": "Run with specific model",
      "zh": "指定模型运行（如 -m anthropic/claude-opus-4-8）",
      "id": "89592c78df3af08a",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · opencode run -m [provider/model]",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "模型",
        "切换模型",
        "模型选择",
        "指定模型运行（如 -m anthropic/claude-opus-4-8）",
        "Run with specific model",
        "opencode"
      ],
      "examples": [
        {
          "value": "opencode run -m anthropic/claude-sonnet \"总结改动\"",
          "description": "指定 provider/model 执行一次任务",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "opencode-cli"
          ],
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · opencode run -m [provider/model]",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前任务对速度、能力或成本的要求发生变化，需要指定模型运行（如 -m anthropic/claude-opus-4-8）。",
          "goal": "指定模型运行（如 -m anthropic/claude-opus-4-8）；使用 opencode run -m anthropic/claude-sonnet \"总结改动\" 完成这一步。",
          "expected": "执行成功后，指定 provider/model 执行一次任务。"
        }
      ]
    },
    {
      "id": "opencode-run-continue",
      "cat": "flag",
      "cmd": "opencode run -c",
      "en": "Continue last session",
      "zh": "在非交互模式下继续上次会话（--continue）",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · opencode run -c",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "会话",
        "恢复会话",
        "历史会话",
        "在非交互模式下继续上次会话（--continue）",
        "Continue last session",
        "opencode"
      ],
      "examples": [
        {
          "value": "opencode run -c",
          "description": "在非交互模式下继续上次会话",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "opencode-cli"
          ],
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · opencode run -c",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "先前的工作会话被中断后，需要在非交互模式下继续上次会话（--continue），而不是重新开始。",
          "goal": "在非交互模式下继续上次会话（--continue）；使用 opencode run -c 完成这一步。",
          "expected": "执行成功后，在非交互模式下继续上次会话。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "opencode run -s",
      "en": "Continue specific session",
      "zh": "在非交互模式下继续指定会话（--session）",
      "id": "d8518800b9f81a08",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · opencode run -s [sessionID]",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "会话",
        "恢复会话",
        "历史会话",
        "在非交互模式下继续指定会话（--session）",
        "Continue specific session",
        "opencode"
      ],
      "examples": [
        {
          "value": "opencode run -s session-id",
          "description": "在非交互模式下继续指定会话（--session）",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · opencode run -s [sessionID]",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "先前的工作会话被中断后，需要在非交互模式下继续指定会话（--session），而不是重新开始。",
          "goal": "在非交互模式下继续指定会话（--session）；使用 opencode run -s session-id 完成这一步。",
          "expected": "执行成功后，在非交互模式下继续指定会话（--session）。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "opencode run --attach",
      "en": "Attach to running server",
      "zh": "连接到已运行的 opencode serve 实例执行命令（复用 MCP 冷启动）",
      "id": "b9424d536569adf0",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · opencode run --attach [url]",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "连接到已运行的 opencode serve 实例执行命令（复用 MCP 冷启动）",
        "Attach to running server",
        "opencode"
      ],
      "examples": [
        {
          "value": "opencode run --attach https://example.com",
          "description": "连接到已运行的 opencode serve 实例执行命令（复用 MCP 冷启动）",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · opencode run --attach [url]",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "终端中的当前任务需要“连接到已运行的 opencode serve 实例执行命令（复用 MCP 冷启动）”，因此要调用对应的官方命令入口。",
          "goal": "连接到已运行的 opencode serve 实例执行命令（复用 MCP 冷启动）；使用 opencode run --attach https://example.com 完成这一步。",
          "expected": "执行成功后，连接到已运行的 opencode serve 实例执行命令（复用 MCP 冷启动）。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "opencode run --share",
      "en": "Auto-share session",
      "zh": "运行结束后自动生成分享链接",
      "id": "4e9a8eb2ba69a01a",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · opencode run --share",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "会话",
        "恢复会话",
        "历史会话",
        "运行结束后自动生成分享链接",
        "Auto-share session",
        "opencode"
      ],
      "examples": [
        {
          "value": "opencode run --share",
          "description": "运行结束后自动生成分享链接",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · opencode run --share",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "先前的工作会话被中断后，需要运行结束后自动生成分享链接，而不是重新开始。",
          "goal": "运行结束后自动生成分享链接；使用 opencode run --share 完成这一步。",
          "expected": "执行成功后，运行结束后自动生成分享链接。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "opencode run -f",
      "en": "Attach file to message",
      "zh": "将文件内容附加到提示消息（--file，可多次使用）",
      "id": "7e5c15fbeb6c176c",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · opencode run -f [file]",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "将文件内容附加到提示消息（--file，可多次使用）",
        "Attach file to message",
        "opencode"
      ],
      "examples": [
        {
          "value": "opencode run -f src/app.js",
          "description": "将文件内容附加到提示消息（--file，可多次使用）",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · opencode run -f [file]",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "终端中的当前任务需要“将文件内容附加到提示消息（--file，可多次使用）”，因此要调用对应的官方命令入口。",
          "goal": "将文件内容附加到提示消息（--file，可多次使用）；使用 opencode run -f src/app.js 完成这一步。",
          "expected": "执行成功后，将文件内容附加到提示消息（--file，可多次使用）。"
        }
      ]
    },
    {
      "id": "opencode-serve",
      "cat": "flag",
      "cmd": "opencode serve",
      "en": "Start headless API server",
      "zh": "启动无界面 HTTP API 服务器，供外部程序调用",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · opencode serve",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "启动无界面 HTTP API 服务器，供外部程序调用",
        "Start headless API server",
        "opencode"
      ],
      "examples": [
        {
          "value": "opencode serve",
          "description": "启动无界面 HTTP API 服务器，供外部程序调用",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "opencode-cli"
          ],
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · opencode serve",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "终端中的当前任务需要“启动无界面 HTTP API 服务器，供外部程序调用”，因此要调用对应的官方命令入口。",
          "goal": "启动无界面 HTTP API 服务器，供外部程序调用；使用 opencode serve 完成这一步。",
          "expected": "执行成功后，启动无界面 HTTP API 服务器，供外部程序调用。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "opencode web",
      "en": "Start server with web UI",
      "zh": "启动带 Web 界面的服务器并打开浏览器",
      "id": "22544590baef21ee",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · opencode web",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "启动带 Web 界面的服务器并打开浏览器",
        "Start server with web UI",
        "opencode"
      ],
      "examples": [
        {
          "value": "opencode web",
          "description": "启动带 Web 界面的服务器并打开浏览器",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · opencode web",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "终端中的当前任务需要“启动带 Web 界面的服务器并打开浏览器”，因此要调用对应的官方命令入口。",
          "goal": "启动带 Web 界面的服务器并打开浏览器；使用 opencode web 完成这一步。",
          "expected": "执行成功后，启动带 Web 界面的服务器并打开浏览器。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "opencode attach",
      "en": "Attach TUI to remote server",
      "zh": "将本地 TUI 连接到远程 opencode serve 服务器",
      "id": "cd0f67ecb51d6a82",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · opencode attach [url]",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "将本地 TUI 连接到远程 opencode serve 服务器",
        "Attach TUI to remote server",
        "opencode"
      ],
      "examples": [
        {
          "value": "opencode attach https://example.com",
          "description": "将本地 TUI 连接到远程 opencode serve 服务器",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · opencode attach [url]",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "终端中的当前任务需要“将本地 TUI 连接到远程 opencode serve 服务器”，因此要调用对应的官方命令入口。",
          "goal": "将本地 TUI 连接到远程 opencode serve 服务器；使用 opencode attach https://example.com 完成这一步。",
          "expected": "执行成功后，将本地 TUI 连接到远程 opencode serve 服务器。"
        }
      ]
    },
    {
      "id": "opencode-models",
      "cat": "flag",
      "cmd": "opencode models",
      "en": "List all models",
      "zh": "列出所有已配置提供商的可用模型",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · opencode models",
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
        "模型",
        "切换模型"
      ],
      "examples": [
        {
          "value": "opencode models",
          "description": "列出所有已配置提供商的可用模型",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "opencode-cli"
          ],
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · opencode models",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先列出所有已配置提供商的可用模型，确认当前状态与预期一致。",
          "goal": "列出所有已配置提供商的可用模型；使用 opencode models 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“列出所有已配置提供商的可用模型”对应的信息。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "opencode models --refresh",
      "en": "Refresh models cache",
      "zh": "从 models.dev 刷新模型列表缓存",
      "id": "1f59ee906d561a3e",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · opencode models --refresh",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "模型",
        "切换模型",
        "模型选择",
        "从 models.dev 刷新模型列表缓存",
        "Refresh models cache",
        "opencode"
      ],
      "examples": [
        {
          "value": "opencode models --refresh",
          "description": "从 models.dev 刷新模型列表缓存",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · opencode models --refresh",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前任务对速度、能力或成本的要求发生变化，需要从 models.dev 刷新模型列表缓存。",
          "goal": "从 models.dev 刷新模型列表缓存；使用 opencode models --refresh 完成这一步。",
          "expected": "执行成功后，从 models.dev 刷新模型列表缓存。"
        }
      ]
    },
    {
      "id": "opencode-auth-login",
      "cat": "flag",
      "cmd": "opencode auth login",
      "en": "Add provider credentials",
      "zh": "交互式添加 AI 提供商的 API Key",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · opencode auth login",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "交互式添加 AI 提供商的 API Key",
        "Add provider credentials",
        "opencode"
      ],
      "examples": [
        {
          "value": "opencode auth login",
          "description": "交互式添加 AI 提供商的 API Key",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "opencode-cli"
          ],
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · opencode auth login",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "首次使用、凭据失效或切换账户后，需要交互式添加 AI 提供商的 API Key。",
          "goal": "交互式添加 AI 提供商的 API Key；使用 opencode auth login 完成这一步。",
          "expected": "执行成功后，交互式添加 AI 提供商的 API Key。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "opencode auth list",
      "en": "List authenticated providers",
      "zh": "列出所有已认证的提供商（别名 auth ls）",
      "id": "69e16f9aacfd4706",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · opencode auth list",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "列出所有已认证的提供商（别名 auth ls）",
        "List authenticated providers",
        "opencode"
      ],
      "examples": [
        {
          "value": "opencode auth list",
          "description": "列出所有已认证的提供商（别名 auth ls）",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · opencode auth list",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "首次使用、凭据失效或切换账户后，需要列出所有已认证的提供商（别名 auth ls）。",
          "goal": "列出所有已认证的提供商（别名 auth ls）；使用 opencode auth list 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“列出所有已认证的提供商（别名 auth ls）”对应的信息。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "opencode auth logout",
      "en": "Remove provider credentials",
      "zh": "删除指定提供商的认证信息",
      "id": "05c32b6f272d7b3d",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · opencode auth logout",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "删除",
        "移除",
        "清理",
        "删除指定提供商的认证信息",
        "Remove provider credentials",
        "opencode"
      ],
      "examples": [
        {
          "value": "opencode auth logout",
          "description": "删除指定提供商的认证信息",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · opencode auth logout",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "首次使用、凭据失效或切换账户后，需要删除指定提供商的认证信息。",
          "goal": "删除指定提供商的认证信息；使用 opencode auth logout 完成这一步。",
          "expected": "执行成功后，删除指定提供商的认证信息。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "opencode mcp add",
      "en": "Add MCP server",
      "zh": "交互式添加 MCP 服务器配置",
      "id": "a1bbed9e74a38434",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · opencode mcp add",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "配置",
        "设置",
        "偏好",
        "交互式添加 MCP 服务器配置",
        "Add MCP server",
        "opencode"
      ],
      "examples": [
        {
          "value": "opencode mcp add",
          "description": "交互式添加 MCP 服务器配置",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · opencode mcp add",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前环境的默认设置不适合这次任务，需要交互式添加 MCP 服务器配置后再继续工作。",
          "goal": "交互式添加 MCP 服务器配置；使用 opencode mcp add 完成这一步。",
          "expected": "执行成功后，交互式添加 MCP 服务器配置。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "opencode mcp list",
      "en": "List MCP servers",
      "zh": "列出所有已配置的 MCP 服务器及其连接状态",
      "id": "0198328773f89045",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · opencode mcp list",
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
        "列出所有已配置的 MCP 服务器及其连接状态",
        "List MCP servers"
      ],
      "examples": [
        {
          "value": "opencode mcp list",
          "description": "列出所有已配置的 MCP 服务器及其连接状态",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · opencode mcp list",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先列出所有已配置的 MCP 服务器及其连接状态，确认当前状态与预期一致。",
          "goal": "列出所有已配置的 MCP 服务器及其连接状态；使用 opencode mcp list 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“列出所有已配置的 MCP 服务器及其连接状态”对应的信息。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "opencode mcp auth",
      "en": "Authenticate OAuth MCP server",
      "zh": "对支持 OAuth 的 MCP 服务器进行认证",
      "id": "b68e3c4144d1eba3",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · opencode mcp auth [name]",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "对支持 OAuth 的 MCP 服务器进行认证",
        "Authenticate OAuth MCP server",
        "opencode"
      ],
      "examples": [
        {
          "value": "opencode mcp auth github",
          "description": "对名为 github 的 OAuth MCP 服务器发起认证",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "opencode-cli"
          ],
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · opencode mcp auth [name]",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "首次使用、凭据失效或切换账户后，需要对支持 OAuth 的 MCP 服务器进行认证。",
          "goal": "对支持 OAuth 的 MCP 服务器进行认证；使用 opencode mcp auth github 完成这一步。",
          "expected": "执行成功后，对名为 github 的 OAuth MCP 服务器发起认证。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "opencode agent create",
      "en": "Create custom agent",
      "zh": "交互式创建自定义 Agent（配置权限和系统提示）",
      "id": "edabfbe5b533ccdc",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · opencode agent create",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "创建",
        "新建",
        "初始化",
        "配置",
        "设置",
        "偏好",
        "交互式创建自定义 Agent（配置权限和系统提示）",
        "Create custom agent"
      ],
      "examples": [
        {
          "value": "opencode agent create",
          "description": "交互式创建自定义 Agent（配置权限和系统提示）",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · opencode agent create",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前环境的默认设置不适合这次任务，需要交互式创建自定义 Agent（配置权限和系统提示）后再继续工作。",
          "goal": "交互式创建自定义 Agent（配置权限和系统提示）；使用 opencode agent create 完成这一步。",
          "expected": "执行成功后，交互式创建自定义 Agent（配置权限和系统提示）。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "opencode agent list",
      "en": "List agents",
      "zh": "列出所有可用 Agent",
      "id": "8e1418caaf29be2c",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · opencode agent list",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "列出所有可用 Agent",
        "List agents",
        "opencode"
      ],
      "examples": [
        {
          "value": "opencode agent list",
          "description": "列出所有可用 Agent",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · opencode agent list",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先列出所有可用 Agent，确认当前状态与预期一致。",
          "goal": "列出所有可用 Agent；使用 opencode agent list 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“列出所有可用 Agent”对应的信息。"
        }
      ]
    },
    {
      "id": "opencode-session-list",
      "cat": "flag",
      "cmd": "opencode session list",
      "en": "List all sessions",
      "zh": "列出所有历史会话",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · opencode session list",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "会话",
        "恢复会话",
        "历史会话",
        "列出所有历史会话",
        "List all sessions"
      ],
      "examples": [
        {
          "value": "opencode session list",
          "description": "列出所有历史会话",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "opencode-cli"
          ],
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · opencode session list",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "先前的工作会话被中断后，需要列出所有历史会话，而不是重新开始。",
          "goal": "列出所有历史会话；使用 opencode session list 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“列出所有历史会话”对应的信息。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "opencode session delete",
      "en": "Delete a session",
      "zh": "删除指定会话",
      "id": "1c77eb33485764a2",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · opencode session delete [id]",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "删除",
        "移除",
        "清理",
        "会话",
        "恢复会话",
        "历史会话",
        "删除指定会话",
        "Delete a session"
      ],
      "examples": [
        {
          "value": "opencode session delete session-id",
          "description": "删除指定会话",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · opencode session delete [id]",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "先前的工作会话被中断后，需要删除指定会话，而不是重新开始。",
          "goal": "删除指定会话；使用 opencode session delete session-id 完成这一步。",
          "expected": "执行成功后，删除指定会话。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "opencode stats",
      "en": "Show usage statistics",
      "zh": "查看 token 用量和费用统计，支持按项目/模型/天数筛选",
      "id": "55c9c7ac7c30244e",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · opencode stats",
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
        "查看 token 用量和费用统计，支持按项目/模型/天数筛选",
        "Show usage statistics"
      ],
      "examples": [
        {
          "value": "opencode stats --days 7",
          "description": "查看最近 7 天的 token 用量和费用统计",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "opencode-cli"
          ],
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · opencode stats",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先查看 token 用量和费用统计，支持按项目/模型/天数筛选，确认当前状态与预期一致。",
          "goal": "查看 token 用量和费用统计，支持按项目/模型/天数筛选；使用 opencode stats --days 7 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“查看最近 7 天的 token 用量和费用统计”对应的信息。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "opencode export",
      "en": "Export session as JSON",
      "zh": "将会话数据导出为 JSON 文件",
      "id": "0122dc14b3c6ef7b",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · opencode export [sessionID]",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "会话",
        "恢复会话",
        "历史会话",
        "将会话数据导出为 JSON 文件",
        "Export session as JSON",
        "opencode"
      ],
      "examples": [
        {
          "value": "opencode export session-id",
          "description": "将会话数据导出为 JSON 文件",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · opencode export [sessionID]",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "先前的工作会话被中断后，需要将会话数据导出为 JSON 文件，而不是重新开始。",
          "goal": "将会话数据导出为 JSON 文件；使用 opencode export session-id 完成这一步。",
          "expected": "执行成功后，将会话数据导出为 JSON 文件。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "opencode import",
      "en": "Import session",
      "zh": "从本地 JSON 文件或分享链接导入会话",
      "id": "3f7b5fafb6b2601f",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · opencode import [file/url]",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "会话",
        "恢复会话",
        "历史会话",
        "从本地 JSON 文件或分享链接导入会话",
        "Import session",
        "opencode"
      ],
      "examples": [
        {
          "value": "opencode import https://example.com",
          "description": "从本地 JSON 文件或分享链接导入会话",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · opencode import [file/url]",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "先前的工作会话被中断后，需要从本地 JSON 文件或分享链接导入会话，而不是重新开始。",
          "goal": "从本地 JSON 文件或分享链接导入会话；使用 opencode import https://example.com 完成这一步。",
          "expected": "执行成功后，从本地 JSON 文件或分享链接导入会话。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "opencode plugin",
      "en": "Install plugin",
      "zh": "安装插件并更新配置（别名 opencode plug）",
      "id": "ee4a4602d1d60c6e",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · opencode plugin [module]",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "配置",
        "设置",
        "偏好",
        "安装插件并更新配置（别名 opencode plug）",
        "Install plugin",
        "opencode"
      ],
      "examples": [
        {
          "value": "opencode plugin @opencode/git",
          "description": "安装 @opencode/git 插件并更新配置",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "opencode-cli"
          ],
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · opencode plugin [module]",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前环境的默认设置不适合这次任务，需要安装插件并更新配置（别名 opencode plug）后再继续工作。",
          "goal": "安装插件并更新配置（别名 opencode plug）；使用 opencode plugin @opencode/git 完成这一步。",
          "expected": "执行成功后，安装 @opencode/git 插件并更新配置。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "opencode pr",
      "en": "Checkout PR and run",
      "zh": "拉取并切换到指定 GitHub PR 分支，然后启动 OpenCode",
      "id": "115631255cba62f1",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · opencode pr [number]",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "拉取并切换到指定 GitHub PR 分支，然后启动 OpenCode",
        "Checkout PR and run",
        "opencode"
      ],
      "examples": [
        {
          "value": "opencode pr 123",
          "description": "拉取并切换到指定 GitHub PR 分支，然后启动 OpenCode",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · opencode pr [number]",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "终端中的当前任务需要“拉取并切换到指定 GitHub PR 分支，然后启动 OpenCode”，因此要调用对应的官方命令入口。",
          "goal": "拉取并切换到指定 GitHub PR 分支，然后启动 OpenCode；使用 opencode pr 123 完成这一步。",
          "expected": "执行成功后，拉取并切换到指定 GitHub PR 分支，然后启动 OpenCode。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "opencode upgrade",
      "en": "Upgrade to latest version",
      "zh": "升级 OpenCode 到最新版本",
      "id": "e0023039871b27d4",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · opencode upgrade",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "升级 OpenCode 到最新版本",
        "Upgrade to latest version",
        "opencode"
      ],
      "examples": [
        {
          "value": "opencode upgrade",
          "description": "升级 OpenCode 到最新版本",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · opencode upgrade",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "提交兼容性问题、核对文档或复现故障前，需要先确认当前安装版本。",
          "goal": "升级 OpenCode 到最新版本；使用 opencode upgrade 完成这一步。",
          "expected": "执行成功后，升级 OpenCode 到最新版本。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "opencode uninstall",
      "en": "Uninstall OpenCode",
      "zh": "卸载 OpenCode 并移除相关文件（支持 --keep-config 等选项）",
      "id": "f962cc14534033e4",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · opencode uninstall",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "删除",
        "移除",
        "清理",
        "配置",
        "设置",
        "偏好",
        "卸载 OpenCode 并移除相关文件（支持 --keep-config 等选项）",
        "Uninstall OpenCode"
      ],
      "examples": [
        {
          "value": "opencode uninstall",
          "description": "卸载 OpenCode 并移除相关文件（支持 --keep-config 等选项）",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · opencode uninstall",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "清理不再需要的内容时，需要卸载 OpenCode 并移除相关文件（支持 --keep-config 等选项），并先确认不会影响仍在使用的对象。",
          "goal": "卸载 OpenCode 并移除相关文件（支持 --keep-config 等选项）；使用 opencode uninstall 完成这一步。",
          "expected": "执行成功后，卸载 OpenCode 并移除相关文件（支持 --keep-config 等选项）。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "opencode --version",
      "en": "Print version number",
      "zh": "显示当前版本号",
      "id": "20d4f5b665fa9c5d",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · --version / -v",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "显示当前版本号",
        "Print version number",
        "--version"
      ],
      "examples": [
        {
          "value": "opencode --version",
          "description": "显示当前版本号",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · --version / -v",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "提交兼容性问题、核对文档或复现故障前，需要先确认当前安装版本。",
          "goal": "显示当前版本号；使用 opencode --version 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“显示当前版本号”对应的信息。"
        }
      ],
      "aliases": [
        "opencode -v"
      ]
    },
    {
      "cat": "flag",
      "cmd": "opencode --help",
      "en": "Show help",
      "zh": "显示帮助信息",
      "id": "c68ed0c19e1ce42b",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · --help / -h",
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
        "显示帮助信息",
        "Show help"
      ],
      "examples": [
        {
          "value": "opencode --help",
          "description": "显示帮助信息",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · --help / -h",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "忘记入口用法或可用参数时，需要在当前工作流中调出官方帮助。",
          "goal": "显示帮助信息；使用 opencode --help 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“显示帮助信息”对应的信息。"
        }
      ],
      "aliases": [
        "opencode -h"
      ]
    },
    {
      "id": "opencode-model-flag",
      "cat": "flag",
      "cmd": "opencode --model",
      "en": "Specify model",
      "zh": "启动时指定使用的模型（格式：provider/model）",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · --model / -m [provider/model]",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "模型",
        "切换模型",
        "模型选择",
        "格式化",
        "代码格式",
        "排版",
        "启动时指定使用的模型（格式：provider/model）",
        "Specify model"
      ],
      "examples": [
        {
          "value": "opencode --model anthropic/claude-sonnet",
          "description": "启动时指定 provider/model 格式的模型",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "opencode-cli"
          ],
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · --model / -m [provider/model]",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前任务对速度、能力或成本的要求发生变化，需要启动时指定使用的模型（格式：provider/model）。",
          "goal": "启动时指定使用的模型（格式：provider/model）；使用 opencode --model anthropic/claude-sonnet 完成这一步。",
          "expected": "执行成功后，启动时指定 provider/model 格式的模型。"
        }
      ],
      "aliases": [
        "opencode -m"
      ]
    },
    {
      "cat": "flag",
      "cmd": "opencode --agent",
      "en": "Specify agent",
      "zh": "启动时指定要使用的 Agent",
      "id": "678e1b7014b20f8c",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · --agent [name]",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "启动时指定要使用的 Agent",
        "Specify agent",
        "--agent"
      ],
      "examples": [
        {
          "value": "opencode --agent build",
          "description": "以 build agent 启动一次会话",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "opencode-cli"
          ],
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · --agent [name]",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "终端中的当前任务需要“启动时指定要使用的 Agent”，因此要调用对应的官方命令入口。",
          "goal": "启动时指定要使用的 Agent；使用 opencode --agent build 完成这一步。",
          "expected": "执行成功后，以 build agent 启动一次会话。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "opencode --pure",
      "en": "Run without external plugins",
      "zh": "禁用所有外部插件启动",
      "id": "77588b5db85f14dd",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · --pure",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "禁用所有外部插件启动",
        "Run without external plugins",
        "--pure"
      ],
      "examples": [
        {
          "value": "opencode --pure",
          "description": "禁用所有外部插件启动",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · --pure",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "终端中的当前任务需要“禁用所有外部插件启动”，因此要调用对应的官方命令入口。",
          "goal": "禁用所有外部插件启动；使用 opencode --pure 完成这一步。",
          "expected": "执行成功后，禁用所有外部插件启动。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "opencode --log-level",
      "en": "Set log level",
      "zh": "设置日志级别（DEBUG / INFO / WARN / ERROR）",
      "id": "0be92f81d91506a5",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · --log-level [level]",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "配置",
        "设置",
        "偏好",
        "设置日志级别（DEBUG / INFO / WARN / ERROR）",
        "Set log level",
        "--log-level"
      ],
      "examples": [
        {
          "value": "opencode --log-level medium",
          "description": "设置日志级别（DEBUG / INFO / WARN / ERROR）",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · --log-level [level]",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前环境的默认设置不适合这次任务，需要设置日志级别（DEBUG / INFO / WARN / ERROR）后再继续工作。",
          "goal": "设置日志级别（DEBUG / INFO / WARN / ERROR）；使用 opencode --log-level medium 完成这一步。",
          "expected": "执行成功后，设置日志级别（DEBUG / INFO / WARN / ERROR）。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "opencode --print-logs",
      "en": "Print logs to stderr",
      "zh": "将日志输出到 stderr，便于调试",
      "id": "d5dccdad95e507a2",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "opencode-tui",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://opencode.ai/docs/tui/ · --print-logs",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "将日志输出到 stderr，便于调试",
        "Print logs to stderr",
        "--print-logs"
      ],
      "examples": [
        {
          "value": "opencode --print-logs",
          "description": "将日志输出到 stderr，便于调试",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "opencode-tui",
              "locator": "https://opencode.ai/docs/tui/ · --print-logs",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "终端中的当前任务需要“将日志输出到 stderr，便于调试”，因此要调用对应的官方命令入口。",
          "goal": "将日志输出到 stderr，便于调试；使用 opencode --print-logs 完成这一步。",
          "expected": "执行成功后，将日志输出到 stderr，便于调试。"
        }
      ]
    }
  ]
};
