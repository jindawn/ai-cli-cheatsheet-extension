// Generated from validated structured data. Manual edits must follow data/SCHEMA.md.
window.CHEATSHEET_DATA = window.CHEATSHEET_DATA || {};
window.CHEATSHEET_DATA["claude-code"] = {
  "meta": {
    "id": "claude-code",
    "name": "Claude Code",
    "color": "#d97757",
    "source": "第一方来源与确定性官方入口清单，核验于 2026-07-14",
    "sourceUrl": "https://code.claude.com/docs/en/interactive-mode",
    "updatedAt": "2026-06-20",
    "contentCheckedAt": "2026-06-20",
    "sourceCheckedAt": "2026-06-21",
    "updatePolicy": "version-driven",
    "verificationStatus": "manual",
    "coverage": "官方入口全集；精确范围、组件与平台限制见 shared/official-inventories/claude-code.json",
    "platforms": [
      "mac",
      "windows",
      "linux"
    ],
    "builtIn": true,
    "order": 1,
    "sources": [
      {
        "id": "claude-interactive",
        "title": "Claude Code interactive mode",
        "url": "https://code.claude.com/docs/en/interactive-mode",
        "kind": "official-doc",
        "maintainer": "Anthropic",
        "evidenceTier": "first-party",
        "lastVerifiedAt": "2026-06-21",
        "resolvedUrl": "https://code.claude.com/docs/en/interactive-mode",
        "pageTitle": "Claude Code interactive mode",
        "checkedAt": "2026-06-21",
        "purposes": [
          "command-existence",
          "option-semantics",
          "examples"
        ]
      },
      {
        "id": "claude-commands",
        "title": "Claude Code commands",
        "url": "https://code.claude.com/docs/en/commands",
        "kind": "official-doc",
        "maintainer": "Anthropic",
        "evidenceTier": "first-party",
        "lastVerifiedAt": "2026-06-21",
        "resolvedUrl": "https://code.claude.com/docs/en/commands",
        "pageTitle": "Claude Code commands",
        "checkedAt": "2026-06-21",
        "purposes": [
          "command-existence",
          "option-semantics",
          "examples"
        ]
      }
    ],
    "references": [
      {
        "id": "claude-cli-reference",
        "title": "Claude Code CLI reference",
        "url": "https://code.claude.com/docs/en/cli-reference",
        "kind": "official-doc",
        "maintainer": "Anthropic",
        "evidenceTier": "first-party",
        "lastVerifiedAt": "2026-06-21",
        "resolvedUrl": "https://code.claude.com/docs/en/cli-reference",
        "pageTitle": "Claude Code CLI reference",
        "checkedAt": "2026-06-21",
        "purposes": [
          "command-existence",
          "option-semantics",
          "examples"
        ]
      },
      {
        "id": "anthropic-claude-code-repository",
        "title": "Claude Code official repository",
        "url": "https://github.com/anthropics/claude-code",
        "kind": "official-repository",
        "maintainer": "Anthropic",
        "evidenceTier": "first-party",
        "lastVerifiedAt": "2026-06-21",
        "resolvedUrl": "https://github.com/anthropics/claude-code",
        "pageTitle": "Claude Code official repository",
        "checkedAt": "2026-06-21",
        "purposes": [
          "command-existence",
          "release-notes",
          "examples"
        ]
      }
    ],
    "officialCoverage": {
      "scope": "all-command-entrypoints",
      "status": "complete",
      "total": 82,
      "covered": 82,
      "checkedAt": "2026-07-13",
      "sourceIds": [
        "claude-interactive",
        "claude-commands"
      ],
      "inventoryHash": "sha256:f817e8b804ae54e0d4af644ee7022bf0adf14b3e0fe999f1d85aaaef9a2abf0d"
    }
  },
  "items": [
    {
      "cat": "shortcut",
      "cmd": "Ctrl+C",
      "en": "Interrupt, or clear input",
      "zh": "中断当前操作；如果没有操作在运行，第一次按清空输入框，再按一次退出",
      "id": "70d49506ce01638c",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 Ctrl+C）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "中断当前操作；如果没有操作在运行，第一次按清空输入框，再按一次退出",
        "Interrupt, or clear input",
        "Ctrl+C"
      ],
      "examples": [
        {
          "value": "按 Ctrl+C",
          "description": "中断当前操作；如果没有操作在运行，第一次按清空输入框，再按一次退出",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要中断当前操作；如果没有操作在运行，第一次按清空输入框，再按一次退出时",
          "goal": "中断当前操作；如果没有操作在运行，第一次按清空输入框，再按一次退出",
          "expected": "操作后，工具完成“中断当前操作；如果没有操作在运行，第一次按清空输入框，再按一次退出”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 Ctrl+C）",
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
      "cmd": "Ctrl+X Ctrl+K",
      "en": "Stop background subagents",
      "zh": "停止本会话所有后台子代理；3秒内连按两次确认",
      "id": "3394eb4461b20b17",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 Ctrl+X Ctrl+K）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "会话",
        "恢复会话",
        "历史会话",
        "停止本会话所有后台子代理；3秒内连按两次确认",
        "Stop background subagents",
        "Ctrl+X"
      ],
      "examples": [
        {
          "value": "按 Ctrl+X Ctrl+K",
          "description": "停止本会话所有后台子代理；3秒内连按两次确认",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要停止本会话所有后台子代理；3秒内连按两次确认时",
          "goal": "停止本会话所有后台子代理；3秒内连按两次确认",
          "expected": "操作后，工具完成“停止本会话所有后台子代理；3秒内连按两次确认”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 Ctrl+X Ctrl+K）",
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
      "cmd": "Ctrl+D",
      "en": "Exit session",
      "zh": "退出 Claude Code 会话",
      "id": "7de2b8233558dfce",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 Ctrl+D）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "会话",
        "恢复会话",
        "历史会话",
        "退出 Claude Code 会话",
        "Exit session",
        "Ctrl+D"
      ],
      "examples": [
        {
          "value": "按 Ctrl+D",
          "description": "退出 Claude Code 会话",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要退出 Claude Code 会话时",
          "goal": "退出 Claude Code 会话",
          "expected": "操作后，工具完成“退出 Claude Code 会话”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 Ctrl+D）",
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
      "cmd": "Ctrl+G",
      "en": "Open in external editor",
      "zh": "用默认文本编辑器打开当前输入内容进行编辑",
      "id": "6b69b7ca34cb73a1",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 Ctrl+G）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "用默认文本编辑器打开当前输入内容进行编辑",
        "Open in external editor",
        "Ctrl+G"
      ],
      "examples": [
        {
          "value": "按 Ctrl+G",
          "description": "用默认文本编辑器打开当前输入内容进行编辑",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要用默认文本编辑器打开当前输入内容进行编辑时",
          "goal": "用默认文本编辑器打开当前输入内容进行编辑",
          "expected": "操作后，工具完成“用默认文本编辑器打开当前输入内容进行编辑”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 Ctrl+G）",
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
      "cmd": "Ctrl+L",
      "en": "Redraw screen",
      "zh": "强制重绘终端屏幕（保留输入和对话历史），用于修复显示错乱",
      "id": "678f1ee797f6dfef",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 Ctrl+L）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "强制重绘终端屏幕（保留输入和对话历史），用于修复显示错乱",
        "Redraw screen",
        "Ctrl+L"
      ],
      "examples": [
        {
          "value": "按 Ctrl+L",
          "description": "强制重绘终端屏幕（保留输入和对话历史），用于修复显示错乱",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要强制重绘终端屏幕（保留输入和对话历史），用于修复显示错乱时",
          "goal": "强制重绘终端屏幕（保留输入和对话历史），用于修复显示错乱",
          "expected": "操作后，工具完成“强制重绘终端屏幕（保留输入和对话历史），用于修复显示错乱”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 Ctrl+L）",
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
      "cmd": "Ctrl+O",
      "en": "Toggle transcript viewer",
      "zh": "切换显示详细的工具调用记录（也会展开 MCP 调用细节）",
      "id": "17ffba3ab67e89dd",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 Ctrl+O）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "切换显示详细的工具调用记录（也会展开 MCP 调用细节）",
        "Toggle transcript viewer",
        "Ctrl+O"
      ],
      "examples": [
        {
          "value": "按 Ctrl+O",
          "description": "切换显示详细的工具调用记录（也会展开 MCP 调用细节）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要切换显示详细的工具调用记录（也会展开 MCP 调用细节）时",
          "goal": "切换显示详细的工具调用记录（也会展开 MCP 调用细节）",
          "expected": "操作后，工具完成“切换显示详细的工具调用记录（也会展开 MCP 调用细节）”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 Ctrl+O）",
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
      "cmd": "Ctrl+R",
      "en": "Reverse search history",
      "zh": "反向搜索历史命令",
      "id": "4f93d094ee495dfa",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 Ctrl+R）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "搜索",
        "查找",
        "定位",
        "反向搜索历史命令",
        "Reverse search history",
        "Ctrl+R"
      ],
      "examples": [
        {
          "value": "按 Ctrl+R",
          "description": "反向搜索历史命令",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要反向搜索历史命令时",
          "goal": "反向搜索历史命令",
          "expected": "操作后，工具完成“反向搜索历史命令”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 Ctrl+R）",
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
      "cmd": "Ctrl+V / Cmd+V / Alt+V",
      "en": "Paste image from clipboard",
      "zh": "从剪贴板粘贴图片，插入一个 [Image #N] 标记",
      "id": "dfbeb66782ad6a26",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 Ctrl+V / Cmd+V / Alt+V）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "从剪贴板粘贴图片，插入一个 [Image #N] 标记",
        "Paste image from clipboard",
        "Ctrl+V"
      ],
      "examples": [
        {
          "value": "按 Ctrl+V / Cmd+V / Alt+V",
          "description": "从剪贴板粘贴图片，插入一个 [Image #N] 标记",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要从剪贴板粘贴图片，插入一个 [Image #N] 标记时",
          "goal": "从剪贴板粘贴图片，插入一个 [Image #N] 标记",
          "expected": "操作后，工具完成“从剪贴板粘贴图片，插入一个 [Image #N] 标记”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 Ctrl+V / Cmd+V / Alt+V）",
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
      "cmd": "Ctrl+B",
      "en": "Background running tasks",
      "zh": "把正在运行的命令/代理移到后台（tmux 用户需按两次）",
      "id": "69fa830f89078375",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 Ctrl+B）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "把正在运行的命令/代理移到后台（tmux 用户需按两次）",
        "Background running tasks",
        "Ctrl+B"
      ],
      "examples": [
        {
          "value": "按 Ctrl+B",
          "description": "把正在运行的命令/代理移到后台（tmux 用户需按两次）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要把正在运行的命令/代理移到后台（tmux 用户需按两次）时",
          "goal": "把正在运行的命令/代理移到后台（tmux 用户需按两次）",
          "expected": "操作后，工具完成“把正在运行的命令/代理移到后台（tmux 用户需按两次）”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 Ctrl+B）",
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
      "cmd": "Ctrl+T",
      "en": "Toggle task list",
      "zh": "显示或隐藏终端状态区的任务列表",
      "id": "ffe62543c453561f",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 Ctrl+T）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "显示或隐藏终端状态区的任务列表",
        "Toggle task list",
        "Ctrl+T"
      ],
      "examples": [
        {
          "value": "按 Ctrl+T",
          "description": "显示或隐藏终端状态区的任务列表",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要显示或隐藏终端状态区的任务列表时",
          "goal": "显示或隐藏终端状态区的任务列表",
          "expected": "操作后，工具完成“显示或隐藏终端状态区的任务列表”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 Ctrl+T）",
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
      "en": "Interrupt Claude",
      "zh": "中断当前回复或工具调用，方便你改变方向（已完成的工作会保留）",
      "id": "aeaa62a11f0c5d43",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 Esc）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "中断当前回复或工具调用，方便你改变方向（已完成的工作会保留）",
        "Interrupt Claude",
        "Esc"
      ],
      "examples": [
        {
          "value": "按 Esc",
          "description": "中断当前回复或工具调用，方便你改变方向（已完成的工作会保留）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要中断当前回复或工具调用，方便你改变方向（已完成的工作会保留）时",
          "goal": "中断当前回复或工具调用，方便你改变方向（已完成的工作会保留）",
          "expected": "操作后，工具完成“中断当前回复或工具调用，方便你改变方向（已完成的工作会保留）”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 Esc）",
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
      "cmd": "Esc Esc",
      "en": "Clear draft / rewind",
      "zh": "输入框有内容时清空草稿（存入历史可用上箭头召回）；输入框为空时打开倒回菜单恢复到之前的状态",
      "id": "29144bf122f27f47",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 Esc Esc）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "输入框有内容时清空草稿（存入历史可用上箭头召回）；输入框为空时打开倒回菜单恢复到之前的状态",
        "Clear draft / rewind",
        "Esc"
      ],
      "examples": [
        {
          "value": "按 Esc Esc",
          "description": "输入框有内容时清空草稿（存入历史可用上箭头召回）；输入框为空时打开倒回菜单恢复到之前的状态",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要输入框有内容时清空草稿（存入历史可用上箭头召回）；输入框为空时打开倒回菜单恢复到之前的状态时",
          "goal": "输入框有内容时清空草稿（存入历史可用上箭头召回）；输入框为空时打开倒回菜单恢复到之前的状态",
          "expected": "操作后，工具完成“输入框有内容时清空草稿（存入历史可用上箭头召回）；输入框为空时打开倒回菜单恢复到之前的状态”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 Esc Esc）",
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
      "cmd": "Shift+Tab",
      "en": "Cycle permission modes",
      "zh": "循环切换权限模式：default → acceptEdits → plan → 其他已启用模式",
      "id": "35cf4ca8e279ba3d",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 Shift+Tab）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "循环切换权限模式：default → acceptEdits → plan → 其他已启用模式",
        "Cycle permission modes",
        "Shift+Tab"
      ],
      "examples": [
        {
          "value": "按 Shift+Tab",
          "description": "循环切换权限模式：default → acceptEdits → plan → 其他已启用模式",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 Shift+Tab）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Claude Code中需要循环切换权限模式：default → acceptEdits → plan → 其他已启用模式，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Shift+Tab”循环切换权限模式：default → acceptEdits → plan → 其他已启用模式。",
          "expected": "快捷键触发后，当前界面完成“循环切换权限模式：default → acceptEdits → plan → 其他已启用模式”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Option+P (Mac) / Alt+P",
      "en": "Switch model",
      "zh": "切换模型，不会清空当前输入内容",
      "id": "0d266870b09df1c4",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 Option+P (Mac) / Alt+P）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "模型",
        "切换模型",
        "模型选择",
        "切换模型，不会清空当前输入内容",
        "Switch model",
        "Option+P"
      ],
      "examples": [
        {
          "value": "按 Option+P (Mac) / Alt+P",
          "description": "切换模型，不会清空当前输入内容",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 Option+P (Mac) / Alt+P）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Claude Code中需要切换模型，不会清空当前输入内容，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Option+P (Mac) / Alt+P”切换模型，不会清空当前输入内容。",
          "expected": "快捷键触发后，当前界面完成“切换模型，不会清空当前输入内容”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Option+T (Mac) / Alt+T",
      "en": "Toggle extended thinking",
      "zh": "开关扩展思考模式",
      "id": "725c9cf7bb294223",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 Option+T (Mac) / Alt+T）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "开关扩展思考模式",
        "Toggle extended thinking",
        "Option+T"
      ],
      "examples": [
        {
          "value": "按 Option+T (Mac) / Alt+T",
          "description": "开关扩展思考模式",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 Option+T (Mac) / Alt+T）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Claude Code中需要开关扩展思考模式，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Option+T (Mac) / Alt+T”开关扩展思考模式。",
          "expected": "快捷键触发后，当前界面完成“开关扩展思考模式”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Option+O (Mac) / Alt+O",
      "en": "Toggle fast mode",
      "zh": "开关快速模式",
      "id": "01e30a6d954bdf2d",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 Option+O (Mac) / Alt+O）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "开关快速模式",
        "Toggle fast mode",
        "Option+O"
      ],
      "examples": [
        {
          "value": "按 Option+O (Mac) / Alt+O",
          "description": "开关快速模式",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 Option+O (Mac) / Alt+O）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Claude Code中需要开关快速模式，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Option+O (Mac) / Alt+O”开关快速模式。",
          "expected": "快捷键触发后，当前界面完成“开关快速模式”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Up/Down 或 Ctrl+P/Ctrl+N",
      "en": "Navigate history",
      "zh": "移动光标或在命令历史中导航（多行输入时先移动光标，到顶/底后再导航历史）",
      "id": "1786f344c4c6b7df",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 Up/Down 或 Ctrl+P/Ctrl+N）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "移动",
        "重命名",
        "改名",
        "移动光标或在命令历史中导航（多行输入时先移动光标，到顶/底后再导航历史）",
        "Navigate history",
        "Up/Down"
      ],
      "examples": [
        {
          "value": "按 Up/Down 或 Ctrl+P/Ctrl+N",
          "description": "移动光标或在命令历史中导航（多行输入时先移动光标，到顶/底后再导航历史）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 Up/Down 或 Ctrl+P/Ctrl+N）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Claude Code中需要移动光标或在命令历史中导航（多行输入时先移动光标，到顶/底后再导航历史），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Up/Down 或 Ctrl+P/Ctrl+N”移动光标或在命令历史中导航（多行输入时先移动光标，到顶/底后再导航历史）。",
          "expected": "快捷键触发后，当前界面完成“移动光标或在命令历史中导航（多行输入时先移动光标，到顶/底后再导航历史）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl+A",
      "en": "Move to line start",
      "zh": "光标移到当前行开头",
      "id": "6e3243e8918eaa54",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 Ctrl+A）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "移动",
        "重命名",
        "改名",
        "光标移到当前行开头",
        "Move to line start",
        "Ctrl+A"
      ],
      "examples": [
        {
          "value": "按 Ctrl+A",
          "description": "光标移到当前行开头",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 Ctrl+A）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Claude Code中需要光标移到当前行开头，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Ctrl+A”光标移到当前行开头。",
          "expected": "快捷键触发后，当前界面完成“光标移到当前行开头”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl+E",
      "en": "Move to line end",
      "zh": "光标移到当前行末尾",
      "id": "3bf45d6f595487c5",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 Ctrl+E）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "移动",
        "重命名",
        "改名",
        "光标移到当前行末尾",
        "Move to line end",
        "Ctrl+E"
      ],
      "examples": [
        {
          "value": "按 Ctrl+E",
          "description": "光标移到当前行末尾",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 Ctrl+E）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Claude Code中需要光标移到当前行末尾，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Ctrl+E”光标移到当前行末尾。",
          "expected": "快捷键触发后，当前界面完成“光标移到当前行末尾”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl+K",
      "en": "Delete to end of line",
      "zh": "删除到行末（删除内容可粘贴）",
      "id": "2748f54eb401b8b4",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 Ctrl+K）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "删除",
        "移除",
        "清理",
        "删除到行末（删除内容可粘贴）",
        "Delete to end of line",
        "Ctrl+K"
      ],
      "examples": [
        {
          "value": "按 Ctrl+K",
          "description": "删除到行末（删除内容可粘贴）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 Ctrl+K）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Claude Code中需要删除到行末（删除内容可粘贴），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Ctrl+K”删除到行末（删除内容可粘贴）。",
          "expected": "快捷键触发后，当前界面完成“删除到行末（删除内容可粘贴）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl+U",
      "en": "Delete to line start",
      "zh": "删除到行首（删除内容可粘贴）",
      "id": "6708aef43eec038f",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 Ctrl+U）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "删除",
        "移除",
        "清理",
        "删除到行首（删除内容可粘贴）",
        "Delete to line start",
        "Ctrl+U"
      ],
      "examples": [
        {
          "value": "按 Ctrl+U",
          "description": "删除到行首（删除内容可粘贴）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 Ctrl+U）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Claude Code中需要删除到行首（删除内容可粘贴），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Ctrl+U”删除到行首（删除内容可粘贴）。",
          "expected": "快捷键触发后，当前界面完成“删除到行首（删除内容可粘贴）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl+W",
      "en": "Delete previous word",
      "zh": "删除前一个单词",
      "id": "0f12ea447b98443e",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 Ctrl+W）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "删除",
        "移除",
        "清理",
        "删除前一个单词",
        "Delete previous word",
        "Ctrl+W"
      ],
      "examples": [
        {
          "value": "按 Ctrl+W",
          "description": "删除前一个单词",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 Ctrl+W）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Claude Code中需要删除前一个单词，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Ctrl+W”删除前一个单词。",
          "expected": "快捷键触发后，当前界面完成“删除前一个单词”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl+Y",
      "en": "Paste deleted text",
      "zh": "粘贴之前用 Ctrl+K/U/W 删除的文本",
      "id": "6ade6da455dfb221",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 Ctrl+Y）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "删除",
        "移除",
        "清理",
        "粘贴之前用 Ctrl+K/U/W 删除的文本",
        "Paste deleted text",
        "Ctrl+Y"
      ],
      "examples": [
        {
          "value": "按 Ctrl+Y",
          "description": "粘贴之前用 Ctrl+K/U/W 删除的文本",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 Ctrl+Y）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Claude Code中需要粘贴之前用 Ctrl+K/U/W 删除的文本，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Ctrl+Y”粘贴之前用 Ctrl+K/U/W 删除的文本。",
          "expected": "快捷键触发后，当前界面完成“粘贴之前用 Ctrl+K/U/W 删除的文本”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Alt+Y（粘贴后）",
      "en": "Cycle paste history",
      "zh": "粘贴后循环切换历史删除内容",
      "id": "2db9e59ba744575a",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 Alt+Y（粘贴后））",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "删除",
        "移除",
        "清理",
        "粘贴后循环切换历史删除内容",
        "Cycle paste history",
        "Alt+Y（粘贴后）"
      ],
      "examples": [
        {
          "value": "按 Alt+Y（粘贴后）",
          "description": "粘贴后循环切换历史删除内容",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 Alt+Y（粘贴后））",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Claude Code中需要粘贴后循环切换历史删除内容，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Alt+Y（粘贴后）”粘贴后循环切换历史删除内容。",
          "expected": "快捷键触发后，当前界面完成“粘贴后循环切换历史删除内容”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Alt+B / Alt+F",
      "en": "Move by word",
      "zh": "按单词左右移动光标",
      "id": "c2a3ef574b20bc28",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 Alt+B / Alt+F）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "移动",
        "重命名",
        "改名",
        "按单词左右移动光标",
        "Move by word",
        "Alt+B"
      ],
      "examples": [
        {
          "value": "按 Alt+B / Alt+F",
          "description": "按单词左右移动光标",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 Alt+B / Alt+F）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Claude Code中需要按单词左右移动光标，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Alt+B / Alt+F”按单词左右移动光标。",
          "expected": "快捷键触发后，当前界面完成“按单词左右移动光标”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "\\ + Enter",
      "en": "Newline (works everywhere)",
      "zh": "换行不发送，所有终端都支持",
      "id": "ab90710b3295d82c",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 \\ + Enter）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "换行不发送，所有终端都支持",
        "Newline (works everywhere)",
        "\\"
      ],
      "examples": [
        {
          "value": "按 \\ + Enter",
          "description": "换行不发送，所有终端都支持",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 \\ + Enter）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Claude Code中需要换行不发送，所有终端都支持，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 \\ + Enter”换行不发送，所有终端都支持。",
          "expected": "快捷键触发后，当前界面完成“换行不发送，所有终端都支持”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl+J",
      "en": "Newline (universal)",
      "zh": "换行不发送，任何终端无需配置",
      "id": "cc748a2b66f1f8b0",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 Ctrl+J）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "配置",
        "设置",
        "偏好",
        "换行不发送，任何终端无需配置",
        "Newline (universal)",
        "Ctrl+J"
      ],
      "examples": [
        {
          "value": "按 Ctrl+J",
          "description": "换行不发送，任何终端无需配置",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 Ctrl+J）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Claude Code中需要换行不发送，任何终端无需配置，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Ctrl+J”换行不发送，任何终端无需配置。",
          "expected": "快捷键触发后，当前界面完成“换行不发送，任何终端无需配置”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Shift+Enter",
      "en": "Newline (most terminals)",
      "zh": "换行不发送，多数终端原生支持，VS Code 等需运行 /terminal-setup",
      "id": "35f2f25582a343e0",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 Shift+Enter）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "换行不发送，多数终端原生支持，VS Code 等需运行 /terminal-setup",
        "Newline (most terminals)",
        "Shift+Enter"
      ],
      "examples": [
        {
          "value": "按 Shift+Enter",
          "description": "换行不发送，多数终端原生支持，VS Code 等需运行 /terminal-setup",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 Shift+Enter）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Claude Code中需要换行不发送，多数终端原生支持，VS Code 等需运行 /terminal-setup，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Shift+Enter”换行不发送，多数终端原生支持，VS Code 等需运行 /terminal-setup。",
          "expected": "快捷键触发后，当前界面完成“换行不发送，多数终端原生支持，VS Code 等需运行 /terminal-setup”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "/（行首）",
      "en": "Command or skill",
      "zh": "触发命令或技能菜单",
      "id": "6a7b9b72090ef4e8",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 /（行首））",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "触发命令或技能菜单",
        "Command or skill",
        "/（行首）"
      ],
      "examples": [
        {
          "value": "按 /（行首）",
          "description": "触发命令或技能菜单",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 /（行首））",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Claude Code中需要触发命令或技能菜单，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 /（行首）”触发命令或技能菜单。",
          "expected": "快捷键触发后，当前界面完成“触发命令或技能菜单”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "!（行首）",
      "en": "Shell mode",
      "zh": "直接执行 shell 命令，并把输出加入对话上下文",
      "id": "d7127ca559ac589f",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 !（行首））",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "直接执行 shell 命令，并把输出加入对话上下文",
        "Shell mode",
        "!（行首）"
      ],
      "examples": [
        {
          "value": "!git status",
          "description": "在会话中执行 shell 命令，并把输出加入上下文",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "claude-interactive"
          ],
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 !（行首））",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Claude Code中需要在会话中执行 shell 命令，并把输出加入上下文，希望直接通过键盘完成该操作时。",
          "goal": "使用“!git status”直接执行 shell 命令，并把输出加入对话上下文。",
          "expected": "快捷键触发后，当前界面完成“在会话中执行 shell 命令，并把输出加入上下文”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "@",
      "en": "File path mention",
      "zh": "触发文件路径自动补全",
      "id": "ee02827aa6e13540",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 @）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "触发文件路径自动补全",
        "File path mention",
        "@"
      ],
      "examples": [
        {
          "value": "按 @",
          "description": "触发文件路径自动补全",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 @）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Claude Code中需要触发文件路径自动补全，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 @”触发文件路径自动补全。",
          "expected": "快捷键触发后，当前界面完成“触发文件路径自动补全”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "?（transcript内）",
      "en": "Toggle shortcut help",
      "zh": "切换快捷键帮助面板（需全屏渲染模式）",
      "id": "9a0a17e8ed55d172",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 ?（transcript内））",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "帮助",
        "说明",
        "文档",
        "切换快捷键帮助面板（需全屏渲染模式）",
        "Toggle shortcut help",
        "?（transcript内）"
      ],
      "examples": [
        {
          "value": "按 ?（transcript内）",
          "description": "切换快捷键帮助面板（需全屏渲染模式）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 ?（transcript内））",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Claude Code中需要切换快捷键帮助面板（需全屏渲染模式），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 ?（transcript内）”切换快捷键帮助面板（需全屏渲染模式）。",
          "expected": "快捷键触发后，当前界面完成“切换快捷键帮助面板（需全屏渲染模式）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "{ / }（transcript内）",
      "en": "Jump between prompts",
      "zh": "跳转到上/下一条用户提问",
      "id": "04c141a13f02bfcf",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 { / }（transcript内））",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "跳转到上/下一条用户提问",
        "Jump between prompts",
        "{"
      ],
      "examples": [
        {
          "value": "按 { / }（transcript内）",
          "description": "跳转到上/下一条用户提问",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 { / }（transcript内））",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Claude Code中需要跳转到上/下一条用户提问，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 { / }（transcript内）”跳转到上/下一条用户提问。",
          "expected": "快捷键触发后，当前界面完成“跳转到上/下一条用户提问”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "q / Ctrl+C / Esc",
      "en": "Exit transcript view",
      "zh": "退出 transcript 详情视图",
      "id": "c3c8751a6332da5c",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 q / Ctrl+C / Esc）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "退出 transcript 详情视图",
        "Exit transcript view",
        "q"
      ],
      "examples": [
        {
          "value": "按 q / Ctrl+C / Esc",
          "description": "退出 transcript 详情视图",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 q / Ctrl+C / Esc）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Claude Code中需要退出 transcript 详情视图，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 q / Ctrl+C / Esc”退出 transcript 详情视图。",
          "expected": "快捷键触发后，当前界面完成“退出 transcript 详情视图”对应的动作。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/init",
      "en": "Generate starter CLAUDE.md",
      "zh": "生成项目说明文件 CLAUDE.md 初稿",
      "id": "b4368fb4bea77e35",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode · /init",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "创建",
        "新建",
        "初始化",
        "生成项目说明文件 CLAUDE.md 初稿",
        "Generate starter CLAUDE.md",
        "/init"
      ],
      "examples": [
        {
          "value": "/init",
          "description": "分析当前项目并生成 CLAUDE.md 初稿",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "claude-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode · /init",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "忘记入口用法或可用参数时，需要在当前工作流中调出官方帮助。",
          "goal": "生成项目说明文件 CLAUDE.md 初稿；使用 /init 完成这一步。",
          "expected": "执行成功后，分析当前项目并生成 CLAUDE.md 初稿。"
        }
      ]
    },
    {
      "id": "claude-memory",
      "cat": "slash",
      "cmd": "/memory",
      "en": "Edit CLAUDE.md",
      "zh": "编辑 CLAUDE.md 记忆文件，管理自动记忆条目",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode · /memory",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "编辑 CLAUDE.md 记忆文件，管理自动记忆条目",
        "Edit CLAUDE.md",
        "/memory"
      ],
      "examples": [
        {
          "value": "/memory",
          "description": "编辑 CLAUDE.md 记忆文件，管理自动记忆条目",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "claude-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode · /memory",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前 Claude Code 会话正在处理与“编辑 CLAUDE.md 记忆文件，管理自动记忆条目”直接相关的任务，需要在不中断上下文的情况下执行该操作。",
          "goal": "编辑 CLAUDE.md 记忆文件，管理自动记忆条目；使用 /memory 完成这一步。",
          "expected": "执行成功后，编辑 CLAUDE.md 记忆文件，管理自动记忆条目。"
        }
      ]
    },
    {
      "id": "claude-mcp",
      "cat": "slash",
      "cmd": "/mcp",
      "en": "Manage MCP servers",
      "zh": "管理 MCP 服务连接和 OAuth 认证",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode · /mcp",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "管理 MCP 服务连接和 OAuth 认证",
        "Manage MCP servers",
        "/mcp"
      ],
      "examples": [
        {
          "value": "/mcp",
          "description": "管理 MCP 服务连接和 OAuth 认证",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "claude-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode · /mcp",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "首次使用、凭据失效或切换账户后，需要重新完成身份验证。",
          "goal": "管理 MCP 服务连接和 OAuth 认证；使用 /mcp 完成这一步。",
          "expected": "执行成功后，管理 MCP 服务连接和 OAuth 认证。"
        }
      ]
    },
    {
      "id": "claude-agents",
      "cat": "slash",
      "cmd": "/agents",
      "en": "Manage subagents",
      "zh": "管理子代理配置",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode · /agents",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "配置",
        "设置",
        "偏好",
        "管理子代理配置",
        "Manage subagents",
        "/agents"
      ],
      "examples": [
        {
          "value": "/agents",
          "description": "查看和管理子代理配置",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "claude-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode · /agents",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前环境的默认设置不适合这次任务，需要管理子代理配置后再继续工作。",
          "goal": "管理子代理配置；使用 /agents 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“查看和管理子代理配置”对应的信息。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/permissions",
      "en": "Manage tool permissions",
      "zh": "管理工具的允许/询问/拒绝规则",
      "id": "ba1da527cfe5b31b",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode · /permissions",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "管理工具的允许/询问/拒绝规则",
        "Manage tool permissions",
        "/permissions"
      ],
      "examples": [
        {
          "value": "/permissions",
          "description": "管理工具的允许、询问和拒绝规则",
          "scenario": "工具调用频繁弹窗或权限范围过宽",
          "goal": "按工具调整允许、询问和拒绝规则",
          "expected": "后续调用按新规则审批",
          "caveat": "放宽权限前先确认工作目录和命令边界",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "claude-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode · /permissions",
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
      "cmd": "/plan",
      "en": "Enter plan mode",
      "zh": "直接进入计划模式，可附带任务描述",
      "id": "400dab7510bea568",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode · /plan [描述]",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "直接进入计划模式，可附带任务描述",
        "Enter plan mode",
        "/plan"
      ],
      "examples": [
        {
          "value": "/plan 重构登录模块并补充测试",
          "description": "带着具体目标进入计划模式",
          "scenario": "改动涉及多个模块，需要先明确影响范围",
          "goal": "只读分析并形成可审查的实施方案",
          "expected": "在修改文件前先得到步骤、风险和测试计划",
          "caveat": "计划模式不会直接实施代码改动",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "claude-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode · /plan [描述]",
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
      "en": "Switch model",
      "zh": "切换 AI 模型并设为默认；支持方向键调整推理强度",
      "id": "1949f76d956983bb",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode · /model [模型]",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "模型",
        "切换模型",
        "模型选择",
        "切换 AI 模型并设为默认；支持方向键调整推理强度",
        "Switch model",
        "/model"
      ],
      "examples": [
        {
          "value": "/model",
          "description": "打开模型选择器并调整当前会话模型",
          "scenario": "当前任务需要切换速度、成本或能力侧重点",
          "goal": "更换本次会话使用的模型",
          "expected": "状态栏显示新模型且对话上下文保留",
          "caveat": "模型可用性取决于账号与组织策略",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "claude-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode · /model [模型]",
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
      "cmd": "/effort",
      "en": "Set reasoning effort",
      "zh": "设置推理强度：low/medium/high/xhigh/max/ultracode",
      "id": "756bfa047d64719e",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode · /effort [级别|auto]",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "配置",
        "设置",
        "偏好",
        "设置推理强度：low/medium/high/xhigh/max/ultracode",
        "Set reasoning effort",
        "/effort"
      ],
      "examples": [
        {
          "value": "/effort high",
          "description": "把推理强度调到 high，处理复杂重构或难调的 bug 时更细致",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "claude-interactive"
          ],
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode · /effort [级别|auto]",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前环境的默认设置不适合这次任务，需要设置推理强度：low/medium/high/xhigh/max/ultracode后再继续工作。",
          "goal": "设置推理强度：low/medium/high/xhigh/max/ultracode；使用 /effort high 完成这一步。",
          "expected": "执行成功后，把推理强度调到 high，处理复杂重构或难调的 bug 时更细致。"
        },
        {
          "value": "/effort low",
          "description": "简单问答或小改动时降到 low，响应更快、更省上下文",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "claude-interactive"
          ],
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode · /effort [级别|auto]",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前环境的默认设置不适合这次任务，需要设置推理强度：low/medium/high/xhigh/max/ultracode后再继续工作。",
          "goal": "设置推理强度：low/medium/high/xhigh/max/ultracode；使用 /effort low 完成这一步。",
          "expected": "执行成功后，简单问答或小改动时降到 low，响应更快、更省上下文。"
        },
        {
          "value": "/effort auto",
          "description": "交给 Claude 按任务复杂度自动选择推理强度",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "claude-interactive"
          ],
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode · /effort [级别|auto]",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前环境的默认设置不适合这次任务，需要设置推理强度：low/medium/high/xhigh/max/ultracode后再继续工作。",
          "goal": "设置推理强度：low/medium/high/xhigh/max/ultracode；使用 /effort auto 完成这一步。",
          "expected": "执行成功后，交给 Claude 按任务复杂度自动选择推理强度。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/context",
      "en": "Visualize context usage",
      "zh": "用色块图显示上下文占用情况和优化建议",
      "id": "c2a72afc10dc3897",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode · /context [all]",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "用色块图显示上下文占用情况和优化建议",
        "Visualize context usage",
        "/context"
      ],
      "examples": [
        {
          "value": "/context all",
          "description": "查看完整上下文占用及可优化内容",
          "scenario": "长任务接近上下文上限，需要找出占用来源",
          "goal": "判断哪些文件、工具输出或历史最占空间",
          "expected": "显示完整上下文组成及优化建议",
          "caveat": "这是诊断视图，不会自动删除内容",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "claude-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode · /context [all]",
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
      "en": "Summarize to free context",
      "zh": "总结对话以释放上下文空间，可附带聚焦指令",
      "id": "776b9cb01c53263d",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode · /compact [指令]",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "压缩",
        "精简上下文",
        "节省上下文",
        "总结对话以释放上下文空间，可附带聚焦指令",
        "Summarize to free context",
        "/compact"
      ],
      "examples": [
        {
          "value": "/compact 保留当前实现决策和未完成任务",
          "description": "按指定重点压缩上下文，释放可用上下文空间",
          "scenario": "长会话开始遗忘早期约定，但仍要继续当前任务",
          "goal": "保留架构决策和未完成事项并释放上下文",
          "expected": "上下文占用下降，后续回复仍遵循指定约定",
          "caveat": "它不会开启新会话；需要彻底清空时使用 /clear",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "claude-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode · /compact [指令]",
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
      "cmd": "/btw",
      "en": "Quick side question",
      "zh": "快速侧问，不计入对话历史，不打断主线任务",
      "id": "889bde562046ee89",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode · /btw <问题>",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "快速侧问，不计入对话历史，不打断主线任务",
        "Quick side question",
        "/btw"
      ],
      "examples": [
        {
          "value": "/btw \"检查当前改动\"",
          "description": "快速侧问，不计入对话历史，不打断主线任务",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode · /btw <问题>",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前 Claude Code 会话正在处理与“快速侧问，不计入对话历史，不打断主线任务”直接相关的任务，需要在不中断上下文的情况下执行该操作。",
          "goal": "快速侧问，不计入对话历史，不打断主线任务；使用 /btw \"检查当前改动\" 完成这一步。",
          "expected": "执行成功后，快速侧问，不计入对话历史，不打断主线任务。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/tasks",
      "en": "View background tasks",
      "zh": "查看和管理所有后台运行的任务（别名 /bashes）",
      "id": "b4b4f087262d7cfb",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode · /tasks",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "查看和管理所有后台运行的任务（别名 /bashes）",
        "View background tasks",
        "/tasks"
      ],
      "examples": [
        {
          "value": "/tasks",
          "description": "查看并管理当前会话中的后台任务",
          "scenario": "并行代理或后台命令较多，当前进度不清楚",
          "goal": "查看正在运行、完成或失败的后台任务",
          "expected": "任务列表显示状态并允许继续管理",
          "caveat": "停止任务前确认它没有正在写入关键文件",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "claude-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode · /tasks",
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
      "cmd": "/background",
      "en": "Detach as background agent",
      "zh": "把当前会话转为后台代理运行，释放终端",
      "id": "2ca7a9474f75c2fd",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode · /background [提示]",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "会话",
        "恢复会话",
        "历史会话",
        "把当前会话转为后台代理运行，释放终端",
        "Detach as background agent",
        "/background"
      ],
      "examples": [
        {
          "value": "/background 检查当前改动",
          "description": "把当前会话转为后台代理运行，释放终端",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode · /background [提示]",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "先前的工作会话被中断后，需要把当前会话转为后台代理运行，释放终端，而不是重新开始。",
          "goal": "把当前会话转为后台代理运行，释放终端；使用 /background 检查当前改动 完成这一步。",
          "expected": "执行成功后，把当前会话转为后台代理运行，释放终端。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/batch",
      "en": "Parallel multi-unit changes",
      "zh": "把大改动拆解成多个独立单元，各开 worktree 并行处理",
      "id": "cd24292cd9e058eb",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode · /batch <指令>",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "把大改动拆解成多个独立单元，各开 worktree 并行处理",
        "Parallel multi-unit changes",
        "/batch"
      ],
      "examples": [
        {
          "value": "/batch \"检查当前改动\"",
          "description": "把大改动拆解成多个独立单元，各开 worktree 并行处理",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode · /batch <指令>",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前 Claude Code 会话正在处理与“把大改动拆解成多个独立单元，各开 worktree 并行处理”直接相关的任务，需要在不中断上下文的情况下执行该操作。",
          "goal": "把大改动拆解成多个独立单元，各开 worktree 并行处理；使用 /batch \"检查当前改动\" 完成这一步。",
          "expected": "执行成功后，把大改动拆解成多个独立单元，各开 worktree 并行处理。"
        }
      ]
    },
    {
      "id": "claude-diff",
      "cat": "slash",
      "cmd": "/diff",
      "en": "Interactive diff viewer",
      "zh": "交互式查看未提交改动和每轮对话产生的 diff",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode · /diff",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "交互式查看未提交改动和每轮对话产生的 diff",
        "Interactive diff viewer",
        "/diff"
      ],
      "examples": [
        {
          "value": "/diff",
          "description": "交互式查看未提交改动和每轮对话产生的 diff",
          "scenario": "准备提交前要确认 Claude 实际改了什么",
          "goal": "查看工作区和各轮产生的差异",
          "expected": "打开可逐项检查的 diff 视图",
          "caveat": "仍应配合测试和 git status 使用",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "claude-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode · /diff",
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
      "id": "claude-code-review",
      "cat": "slash",
      "cmd": "/code-review",
      "en": "Review diff for bugs",
      "zh": "审查当前 diff 的正确性问题，--fix 可直接应用修复",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode · /code-review [级别] [--fix]",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "审查当前 diff 的正确性问题，--fix 可直接应用修复",
        "Review diff for bugs",
        "/code-review"
      ],
      "examples": [
        {
          "value": "/code-review",
          "description": "审查当前 diff 的正确性问题",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "claude-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode · /code-review [级别] [--fix]",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前 Claude Code 会话正在处理与“审查当前 diff 的正确性问题，--fix 可直接应用修复”直接相关的任务，需要在不中断上下文的情况下执行该操作。",
          "goal": "审查当前 diff 的正确性问题，--fix 可直接应用修复；使用 /code-review 完成这一步。",
          "expected": "执行成功后，审查当前 diff 的正确性问题。"
        },
        {
          "value": "/code-review --fix",
          "description": "审查并直接应用可修复项",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "claude-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode · /code-review [级别] [--fix]",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前 Claude Code 会话正在处理与“审查当前 diff 的正确性问题，--fix 可直接应用修复”直接相关的任务，需要在不中断上下文的情况下执行该操作。",
          "goal": "审查当前 diff 的正确性问题，--fix 可直接应用修复；使用 /code-review --fix 完成这一步。",
          "expected": "执行成功后，审查并直接应用可修复项。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/review",
      "en": "Review a pull request",
      "zh": "本地审查指定的 PR",
      "id": "9b8c8d522860e2f2",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode · /review [PR]",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "本地审查指定的 PR",
        "Review a pull request",
        "/review"
      ],
      "examples": [
        {
          "value": "/review 123",
          "description": "审查编号为 123 的 Pull Request",
          "scenario": "合并前需要检查指定 PR 的正确性与测试缺口",
          "goal": "聚焦真实缺陷而不是泛泛总结",
          "expected": "返回按严重度排列且可定位的审查意见",
          "caveat": "需要本地能访问对应仓库和 PR",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "claude-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode · /review [PR]",
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
      "cmd": "/security-review",
      "en": "Security vulnerability scan",
      "zh": "分析当前分支改动的安全漏洞（注入、鉴权、数据泄露等）",
      "id": "8b94886fd52cc331",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode · /security-review",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "分析当前分支改动的安全漏洞（注入、鉴权、数据泄露等）",
        "Security vulnerability scan",
        "/security-review"
      ],
      "examples": [
        {
          "value": "/security-review",
          "description": "分析当前分支改动的安全漏洞（注入、鉴权、数据泄露等）",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode · /security-review",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前 Claude Code 会话正在处理与“分析当前分支改动的安全漏洞（注入、鉴权、数据泄露等）”直接相关的任务，需要在不中断上下文的情况下执行该操作。",
          "goal": "分析当前分支改动的安全漏洞（注入、鉴权、数据泄露等）；使用 /security-review 完成这一步。",
          "expected": "执行成功后，分析当前分支改动的安全漏洞（注入、鉴权、数据泄露等）。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/clear",
      "en": "Start fresh conversation",
      "zh": "开启新对话，清空上下文（保留项目记忆）；别名 /reset /new",
      "id": "edf7046c0cc9e85b",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode · /clear [名称]",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "开启新对话，清空上下文（保留项目记忆）；别名 /reset /new",
        "Start fresh conversation",
        "/clear"
      ],
      "examples": [
        {
          "value": "/clear",
          "description": "开启新对话并清空上下文，项目记忆仍会保留",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "claude-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode · /clear [名称]",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前 Claude Code 会话正在处理与“开启新对话，清空上下文（保留项目记忆）；别名 /reset /new”直接相关的任务，需要在不中断上下文的情况下执行该操作。",
          "goal": "开启新对话，清空上下文（保留项目记忆）；别名 /reset /new；使用 /clear 完成这一步。",
          "expected": "执行成功后，开启新对话并清空上下文，项目记忆仍会保留。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/resume",
      "en": "Resume a conversation",
      "zh": "按 ID 或名称恢复某次对话，或打开选择器；别名 /continue",
      "id": "f99f88519066cc37",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode · /resume [会话]",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "会话",
        "恢复会话",
        "历史会话",
        "按 ID 或名称恢复某次对话，或打开选择器；别名 /continue",
        "Resume a conversation",
        "/resume"
      ],
      "examples": [
        {
          "value": "/resume",
          "description": "打开会话选择器；也可以在后面填写会话名称或 ID",
          "scenario": "终端重开后要继续昨天未完成的调试",
          "goal": "找回已有会话而不是重新解释背景",
          "expected": "选中的历史会话恢复并可继续输入",
          "caveat": "不要与 /branch 混用；/branch 会创建新分支",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "claude-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode · /resume [会话]",
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
      "cmd": "/branch",
      "en": "Branch the conversation",
      "zh": "在当前节点创建对话分支，可独立尝试不同方向",
      "id": "66e267eff4163728",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode · /branch [名称]",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "创建",
        "新建",
        "初始化",
        "在当前节点创建对话分支，可独立尝试不同方向",
        "Branch the conversation",
        "/branch"
      ],
      "examples": [
        {
          "value": "/branch experiment-auth",
          "description": "在当前节点创建名为 experiment-auth 的对话分支，独立尝试新方向",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "claude-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode · /branch [名称]",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "准备新的工作环境或资源时，需要在当前节点创建对话分支，可独立尝试不同方向，让后续步骤具备所需入口。",
          "goal": "在当前节点创建对话分支，可独立尝试不同方向；使用 /branch experiment-auth 完成这一步。",
          "expected": "执行成功后，在当前节点创建名为 experiment-auth 的对话分支，独立尝试新方向。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/fork",
      "en": "Spawn forked subagent",
      "zh": "派生一个继承完整对话的后台子代理去处理指定任务",
      "id": "cbf6062661fed939",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode · /fork <指令>",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "派生一个继承完整对话的后台子代理去处理指定任务",
        "Spawn forked subagent",
        "/fork"
      ],
      "examples": [
        {
          "value": "/fork \"检查当前改动\"",
          "description": "派生一个继承完整对话的后台子代理去处理指定任务",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode · /fork <指令>",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前 Claude Code 会话正在处理与“派生一个继承完整对话的后台子代理去处理指定任务”直接相关的任务，需要在不中断上下文的情况下执行该操作。",
          "goal": "派生一个继承完整对话的后台子代理去处理指定任务；使用 /fork \"检查当前改动\" 完成这一步。",
          "expected": "执行成功后，派生一个继承完整对话的后台子代理去处理指定任务。"
        }
      ]
    },
    {
      "id": "claude-rewind",
      "cat": "slash",
      "cmd": "/rewind",
      "en": "Rewind code/conversation",
      "zh": "将代码和对话回退到之前的检查点；别名 /checkpoint /undo",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode · /rewind",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "将代码和对话回退到之前的检查点；别名 /checkpoint /undo",
        "Rewind code/conversation",
        "/rewind"
      ],
      "examples": [
        {
          "value": "/rewind",
          "description": "把代码和对话回退到之前的检查点",
          "scenario": "最近几轮方向错误，需要回到较早检查点",
          "goal": "恢复代码与对话到选定状态",
          "expected": "选定检查点之后的状态被回退",
          "caveat": "回退前先保存仍需保留的未提交工作",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "claude-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode · /rewind",
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
      "cmd": "/doctor",
      "en": "Diagnose installation",
      "zh": "诊断 Claude Code 安装和设置问题",
      "id": "bac09e656e874594",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode · /doctor",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "配置",
        "设置",
        "偏好",
        "诊断 Claude Code 安装和设置问题",
        "Diagnose installation",
        "/doctor"
      ],
      "examples": [
        {
          "value": "/doctor",
          "description": "诊断 Claude Code 安装和设置问题",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode · /doctor",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前环境的默认设置不适合这次任务，需要诊断 Claude Code 安装和设置问题后再继续工作。",
          "goal": "诊断 Claude Code 安装和设置问题；使用 /doctor 完成这一步。",
          "expected": "执行成功后，诊断 Claude Code 安装和设置问题。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/debug",
      "en": "Enable debug logging",
      "zh": "开启调试日志并排查问题",
      "id": "edb31051868b9e34",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode · /debug [描述]",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "开启调试日志并排查问题",
        "Enable debug logging",
        "/debug"
      ],
      "examples": [
        {
          "value": "/debug 检查当前改动",
          "description": "开启调试日志并排查问题",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode · /debug [描述]",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前 Claude Code 会话正在处理与“开启调试日志并排查问题”直接相关的任务，需要在不中断上下文的情况下执行该操作。",
          "goal": "开启调试日志并排查问题；使用 /debug 检查当前改动 完成这一步。",
          "expected": "执行成功后，开启调试日志并排查问题。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/feedback",
      "en": "Submit feedback / report bug",
      "zh": "提交反馈或漏洞报告；别名 /bug /share",
      "id": "911b7593a5fccb3c",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode · /feedback [报告]",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "提交反馈或漏洞报告；别名 /bug /share",
        "Submit feedback / report bug",
        "/feedback"
      ],
      "examples": [
        {
          "value": "/feedback 检查当前改动",
          "description": "提交反馈或漏洞报告；别名 /bug /share",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode · /feedback [报告]",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前 Claude Code 会话正在处理与“提交反馈或漏洞报告；别名 /bug /share”直接相关的任务，需要在不中断上下文的情况下执行该操作。",
          "goal": "提交反馈或漏洞报告；别名 /bug /share；使用 /feedback 检查当前改动 完成这一步。",
          "expected": "执行成功后，提交反馈或漏洞报告；别名 /bug /share。"
        }
      ]
    },
    {
      "id": "claude-cost",
      "cat": "slash",
      "cmd": "/cost",
      "en": "Show usage/cost",
      "zh": "查看会话花费和用量；/usage 的别名",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode · /cost",
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
        "查看会话花费和用量；/usage 的别名",
        "Show usage/cost"
      ],
      "examples": [
        {
          "value": "/cost",
          "description": "查看本次会话的花费和 token 用量",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "claude-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode · /cost",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "先前的工作会话被中断后，需要查看会话花费和用量；/usage 的别名，而不是重新开始。",
          "goal": "查看会话花费和用量；/usage 的别名；使用 /cost 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“查看本次会话的花费和 token 用量”对应的信息。"
        }
      ]
    },
    {
      "id": "claude-status",
      "cat": "slash",
      "cmd": "/status",
      "en": "Show version/model/account",
      "zh": "显示版本、模型、账号和连接状态",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode · /status",
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
        "显示版本、模型、账号和连接状态",
        "Show version/model/account"
      ],
      "examples": [
        {
          "value": "/status",
          "description": "显示版本、模型、账号和连接状态",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "claude-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode · /status",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "提交兼容性问题、核对文档或复现故障前，需要先确认当前安装版本。",
          "goal": "显示版本、模型、账号和连接状态；使用 /status 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“显示版本、模型、账号和连接状态”对应的信息。"
        }
      ]
    },
    {
      "id": "claude-config",
      "cat": "slash",
      "cmd": "/config",
      "en": "Open settings UI",
      "zh": "打开设置界面调整主题、模型等；也可直接传参设置；别名 /settings",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode · /config [key=value]",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "配置",
        "设置",
        "偏好",
        "模型",
        "切换模型",
        "模型选择",
        "打开设置界面调整主题、模型等；也可直接传参设置；别名 /settings",
        "Open settings UI"
      ],
      "examples": [
        {
          "value": "/config",
          "description": "打开设置界面调整主题、模型等偏好",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "claude-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode · /config [key=value]",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前环境的默认设置不适合这次任务，需要打开设置界面调整主题、模型等；也可直接传参设置；别名 /settings后再继续工作。",
          "goal": "打开设置界面调整主题、模型等；也可直接传参设置；别名 /settings；使用 /config 完成这一步。",
          "expected": "执行成功后，打开设置界面调整主题、模型等偏好。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/theme",
      "en": "Change color theme",
      "zh": "切换配色主题（含自动跟随终端、色盲友好主题）",
      "id": "2464d0497c800985",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode · /theme",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "切换配色主题（含自动跟随终端、色盲友好主题）",
        "Change color theme",
        "/theme"
      ],
      "examples": [
        {
          "value": "/theme",
          "description": "切换配色主题（含自动跟随终端、色盲友好主题）",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode · /theme",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前 Claude Code 会话正在处理与“切换配色主题（含自动跟随终端、色盲友好主题）”直接相关的任务，需要在不中断上下文的情况下执行该操作。",
          "goal": "切换配色主题（含自动跟随终端、色盲友好主题）；使用 /theme 完成这一步。",
          "expected": "执行成功后，切换配色主题（含自动跟随终端、色盲友好主题）。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/keybindings",
      "en": "Open keybindings file",
      "zh": "打开按键绑定自定义文件",
      "id": "f3a25ea84f2f4398",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode · /keybindings",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "打开按键绑定自定义文件",
        "Open keybindings file",
        "/keybindings"
      ],
      "examples": [
        {
          "value": "/keybindings",
          "description": "打开按键绑定自定义文件",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode · /keybindings",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前 Claude Code 会话正在处理与“打开按键绑定自定义文件”直接相关的任务，需要在不中断上下文的情况下执行该操作。",
          "goal": "打开按键绑定自定义文件；使用 /keybindings 完成这一步。",
          "expected": "执行成功后，打开按键绑定自定义文件。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/copy",
      "en": "Copy last response",
      "zh": "复制最近一条（或倒数第N条）回复到剪贴板",
      "id": "91f0f90761f1e4c3",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode · /copy [N]",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "复制",
        "克隆",
        "拷贝",
        "复制最近一条（或倒数第N条）回复到剪贴板",
        "Copy last response",
        "/copy"
      ],
      "examples": [
        {
          "value": "/copy 1",
          "description": "复制最近一条（或倒数第N条）回复到剪贴板",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode · /copy [N]",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前 Claude Code 会话正在处理与“复制最近一条（或倒数第N条）回复到剪贴板”直接相关的任务，需要在不中断上下文的情况下执行该操作。",
          "goal": "复制最近一条（或倒数第N条）回复到剪贴板；使用 /copy 1 完成这一步。",
          "expected": "执行成功后，复制最近一条（或倒数第N条）回复到剪贴板。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/export",
      "en": "Export conversation as text",
      "zh": "把当前对话导出为纯文本文件",
      "id": "9f2286d3ef48cb21",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode · /export [文件名]",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "把当前对话导出为纯文本文件",
        "Export conversation as text",
        "/export"
      ],
      "examples": [
        {
          "value": "/export session.md",
          "description": "把当前对话导出为纯文本文件",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode · /export [文件名]",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前 Claude Code 会话正在处理与“把当前对话导出为纯文本文件”直接相关的任务，需要在不中断上下文的情况下执行该操作。",
          "goal": "把当前对话导出为纯文本文件；使用 /export session.md 完成这一步。",
          "expected": "执行成功后，把当前对话导出为纯文本文件。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/skills",
      "en": "List available skills",
      "zh": "列出可用技能，按 t 可按 token 量排序",
      "id": "f46edbeeaf4ef025",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode · /skills",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "列出可用技能，按 t 可按 token 量排序",
        "List available skills",
        "/skills"
      ],
      "examples": [
        {
          "value": "/skills",
          "description": "列出可用技能，按 t 可按 token 量排序",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode · /skills",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先列出可用技能，按 t 可按 token 量排序，确认当前状态与预期一致。",
          "goal": "列出可用技能，按 t 可按 token 量排序；使用 /skills 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“列出可用技能，按 t 可按 token 量排序”对应的信息。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/hooks",
      "en": "View hook configurations",
      "zh": "查看工具事件的 hook 配置",
      "id": "75507d338884a169",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode · /hooks",
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
        "查看工具事件的 hook 配置",
        "View hook configurations"
      ],
      "examples": [
        {
          "value": "/hooks",
          "description": "查看工具事件的 hook 配置",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode · /hooks",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先查看工具事件的 hook 配置，确认当前状态与预期一致。",
          "goal": "查看工具事件的 hook 配置；使用 /hooks 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“查看工具事件的 hook 配置”对应的信息。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/ide",
      "en": "Manage IDE integration",
      "zh": "管理 IDE 集成状态",
      "id": "91c6398439622d6c",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode · /ide",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "管理 IDE 集成状态",
        "Manage IDE integration",
        "/ide"
      ],
      "examples": [
        {
          "value": "/ide",
          "description": "管理 IDE 集成状态",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode · /ide",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先管理 IDE 集成状态，确认当前状态与预期一致。",
          "goal": "管理 IDE 集成状态；使用 /ide 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“管理 IDE 集成状态”对应的信息。"
        }
      ]
    },
    {
      "id": "claude-add-dir",
      "cat": "slash",
      "cmd": "/add-dir",
      "en": "Add working directory",
      "zh": "为当前会话添加额外可访问的工作目录",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode · /add-dir <路径>",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "会话",
        "恢复会话",
        "历史会话",
        "为当前会话添加额外可访问的工作目录",
        "Add working directory",
        "/add-dir"
      ],
      "examples": [
        {
          "value": "/add-dir ../shared-lib",
          "description": "为当前会话添加额外可访问的工作目录",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "claude-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode · /add-dir <路径>",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "先前的工作会话被中断后，需要为当前会话添加额外可访问的工作目录，而不是重新开始。",
          "goal": "为当前会话添加额外可访问的工作目录；使用 /add-dir ../shared-lib 完成这一步。",
          "expected": "执行成功后，为当前会话添加额外可访问的工作目录。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/cd",
      "en": "Move session to new dir",
      "zh": "把当前会话切换到新的工作目录",
      "id": "0e32040631518a0b",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode · /cd <路径>",
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
        "把当前会话切换到新的工作目录",
        "Move session to new dir"
      ],
      "examples": [
        {
          "value": "/cd src/app.js",
          "description": "把当前会话切换到新的工作目录",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode · /cd <路径>",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "先前的工作会话被中断后，需要把当前会话切换到新的工作目录，而不是重新开始。",
          "goal": "把当前会话切换到新的工作目录；使用 /cd src/app.js 完成这一步。",
          "expected": "执行成功后，把当前会话切换到新的工作目录。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/fast",
      "en": "Toggle fast mode",
      "zh": "为支持的 Opus 模型切换低延迟响应；速度更快但 token 单价更高，能力与质量不变",
      "id": "7e160c1c19714033",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode · /fast [on|off]",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "模型",
        "切换模型",
        "模型选择",
        "为支持的 Opus 模型切换低延迟响应；速度更快但 token 单价更高，能力与质量不变",
        "Toggle fast mode",
        "/fast"
      ],
      "examples": [
        {
          "value": "/fast on",
          "description": "为支持的 Opus 模型开启低延迟响应；速度更快，但 token 单价更高，能力与质量不变",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "claude-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode · /fast [on|off]",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前任务对速度、能力或成本的要求发生变化，需要为支持的 Opus 模型切换低延迟响应；速度更快但 token 单价更高，能力与质量不变。",
          "goal": "为支持的 Opus 模型切换低延迟响应；速度更快但 token 单价更高，能力与质量不变；使用 /fast on 完成这一步。",
          "expected": "执行成功后，为支持的 Opus 模型开启低延迟响应；速度更快，但 token 单价更高，能力与质量不变。"
        },
        {
          "value": "/fast off",
          "description": "关闭低延迟模式，恢复标准响应速度和标准 token 价格",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "claude-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode · /fast [on|off]",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前任务对速度、能力或成本的要求发生变化，需要为支持的 Opus 模型切换低延迟响应；速度更快但 token 单价更高，能力与质量不变。",
          "goal": "为支持的 Opus 模型切换低延迟响应；速度更快但 token 单价更高，能力与质量不变；使用 /fast off 完成这一步。",
          "expected": "执行成功后，关闭低延迟模式，恢复标准响应速度和标准 token 价格。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/goal",
      "en": "Set a persistent goal",
      "zh": "设定一个跨多轮持续追踪的目标，直到条件满足",
      "id": "c1f1bc2fdc781f4b",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode · /goal [条件|clear]",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "设定一个跨多轮持续追踪的目标，直到条件满足",
        "Set a persistent goal",
        "/goal"
      ],
      "examples": [
        {
          "value": "/goal 通过所有单元测试再停止",
          "description": "设定一个跨多轮持续追踪的目标，直到条件满足",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "claude-interactive"
          ],
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode · /goal [条件|clear]",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前 Claude Code 会话正在处理与“设定一个跨多轮持续追踪的目标，直到条件满足”直接相关的任务，需要在不中断上下文的情况下执行该操作。",
          "goal": "设定一个跨多轮持续追踪的目标，直到条件满足；使用 /goal 通过所有单元测试再停止 完成这一步。",
          "expected": "执行成功后，设定一个跨多轮持续追踪的目标，直到条件满足。"
        },
        {
          "value": "/goal clear",
          "description": "清除当前目标，停止跨轮追踪",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "claude-interactive"
          ],
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode · /goal [条件|clear]",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前 Claude Code 会话正在处理与“设定一个跨多轮持续追踪的目标，直到条件满足”直接相关的任务，需要在不中断上下文的情况下执行该操作。",
          "goal": "设定一个跨多轮持续追踪的目标，直到条件满足；使用 /goal clear 完成这一步。",
          "expected": "执行成功后，清除当前目标，停止跨轮追踪。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/teleport",
      "en": "Pull web session to terminal",
      "zh": "把网页端 Claude Code 会话拉取到本地终端继续",
      "id": "608323119ca7d4de",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode · /teleport",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "会话",
        "恢复会话",
        "历史会话",
        "把网页端 Claude Code 会话拉取到本地终端继续",
        "Pull web session to terminal",
        "/teleport"
      ],
      "examples": [
        {
          "value": "/teleport",
          "description": "把网页端 Claude Code 会话拉取到本地终端继续",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode · /teleport",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "先前的工作会话被中断后，需要把网页端 Claude Code 会话拉取到本地终端继续，而不是重新开始。",
          "goal": "把网页端 Claude Code 会话拉取到本地终端继续；使用 /teleport 完成这一步。",
          "expected": "执行成功后，把网页端 Claude Code 会话拉取到本地终端继续。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/remote-control",
      "en": "Enable remote control",
      "zh": "让本地会话可被 claude.ai 远程控制；别名 /rc",
      "id": "76b7f3578fab1ece",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode · /remote-control",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "会话",
        "恢复会话",
        "历史会话",
        "让本地会话可被 claude.ai 远程控制；别名 /rc",
        "Enable remote control",
        "/remote-control"
      ],
      "examples": [
        {
          "value": "/remote-control",
          "description": "让本地会话可被 claude.ai 远程控制；别名 /rc",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode · /remote-control",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "先前的工作会话被中断后，需要让本地会话可被 claude.ai 远程控制；别名 /rc，而不是重新开始。",
          "goal": "让本地会话可被 claude.ai 远程控制；别名 /rc；使用 /remote-control 完成这一步。",
          "expected": "执行成功后，让本地会话可被 claude.ai 远程控制；别名 /rc。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/desktop",
      "en": "Continue in Desktop app",
      "zh": "在 Claude Code 桌面应用中继续当前会话；别名 /app",
      "id": "128e9a3b0b554820",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode · /desktop",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "会话",
        "恢复会话",
        "历史会话",
        "在 Claude Code 桌面应用中继续当前会话；别名 /app",
        "Continue in Desktop app",
        "/desktop"
      ],
      "examples": [
        {
          "value": "/desktop",
          "description": "在 Claude Code 桌面应用中继续当前会话；别名 /app",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode · /desktop",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "先前的工作会话被中断后，需要在 Claude Code 桌面应用中继续当前会话；别名 /app，而不是重新开始。",
          "goal": "在 Claude Code 桌面应用中继续当前会话；别名 /app；使用 /desktop 完成这一步。",
          "expected": "执行成功后，在 Claude Code 桌面应用中继续当前会话；别名 /app。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/help",
      "en": "Show help",
      "zh": "显示帮助和可用命令列表",
      "id": "9c49bd9d3d899a20",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode · /help",
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
        "显示帮助和可用命令列表",
        "Show help"
      ],
      "examples": [
        {
          "value": "/help",
          "description": "显示帮助和可用命令列表",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode · /help",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "忘记入口用法或可用参数时，需要在当前工作流中调出官方帮助。",
          "goal": "显示帮助和可用命令列表；使用 /help 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“显示帮助和可用命令列表”对应的信息。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/exit",
      "en": "Exit the CLI",
      "zh": "退出命令行；别名 /quit",
      "id": "a1b67363fbc36911",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode · /exit",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "退出命令行；别名 /quit",
        "Exit the CLI",
        "/exit"
      ],
      "examples": [
        {
          "value": "/exit",
          "description": "退出命令行；别名 /quit",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode · /exit",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前 Claude Code 会话正在处理与“退出命令行；别名 /quit”直接相关的任务，需要在不中断上下文的情况下执行该操作。",
          "goal": "退出命令行；别名 /quit；使用 /exit 完成这一步。",
          "expected": "执行成功后，退出命令行；别名 /quit。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "i / a / I / A（Vim模式）",
      "en": "Insert variants",
      "zh": "Vim模式：分别在光标前/后/行首/行尾进入插入模式",
      "id": "c4de7dc8d9808843",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 i / a / I / A（Vim模式））",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "Vim模式：分别在光标前/后/行首/行尾进入插入模式",
        "Insert variants",
        "i"
      ],
      "examples": [
        {
          "value": "按 i / a / I / A（Vim模式）",
          "description": "Vim模式：分别在光标前/后/行首/行尾进入插入模式",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 i / a / I / A（Vim模式））",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Claude Code中需要Vim模式：分别在光标前/后/行首/行尾进入插入模式，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 i / a / I / A（Vim模式）”Vim模式：分别在光标前/后/行首/行尾进入插入模式。",
          "expected": "快捷键触发后，当前界面完成“Vim模式：分别在光标前/后/行首/行尾进入插入模式”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "dd / yy / p（Vim模式）",
      "en": "Delete/yank/paste line",
      "zh": "Vim模式：删除/复制/粘贴整行",
      "id": "2879bb29a3c61f8c",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 dd / yy / p（Vim模式））",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "删除",
        "移除",
        "清理",
        "复制",
        "克隆",
        "拷贝",
        "Vim模式：删除/复制/粘贴整行",
        "Delete/yank/paste line"
      ],
      "examples": [
        {
          "value": "按 dd / yy / p（Vim模式）",
          "description": "Vim模式：删除/复制/粘贴整行",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 dd / yy / p（Vim模式））",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Claude Code中需要Vim模式：删除/复制/粘贴整行，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 dd / yy / p（Vim模式）”Vim模式：删除/复制/粘贴整行。",
          "expected": "快捷键触发后，当前界面完成“Vim模式：删除/复制/粘贴整行”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "/（Vim NORMAL模式）",
      "en": "History search",
      "zh": "Vim普通模式下 / 等价于 Ctrl+R 历史搜索",
      "id": "d9508cd1ce96e2cd",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "claude-interactive",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 /（Vim NORMAL模式））",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "搜索",
        "查找",
        "定位",
        "Vim普通模式下 / 等价于 Ctrl+R 历史搜索",
        "History search",
        "/（Vim"
      ],
      "examples": [
        {
          "value": "按 /（Vim NORMAL模式）",
          "description": "Vim普通模式下 / 等价于 Ctrl+R 历史搜索",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "claude-interactive",
              "locator": "https://code.claude.com/docs/en/interactive-mode（页面内检索 /（Vim NORMAL模式））",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Claude Code中需要Vim普通模式下 / 等价于 Ctrl+R 历史搜索，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 /（Vim NORMAL模式）”Vim普通模式下 / 等价于 Ctrl+R 历史搜索。",
          "expected": "快捷键触发后，当前界面完成“Vim普通模式下 / 等价于 Ctrl+R 历史搜索”对应的动作。"
        }
      ]
    }
  ]
};
