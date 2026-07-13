// Generated from validated structured data. Manual edits must follow data/SCHEMA.md.
window.CHEATSHEET_DATA = window.CHEATSHEET_DATA || {};
window.CHEATSHEET_DATA["cursor"] = {
  "meta": {
    "id": "cursor",
    "name": "Cursor",
    "color": "#8B5CF6",
    "source": "第一方来源与确定性官方入口清单，核验于 2026-07-14",
    "builtIn": false,
    "sourceUrl": "https://cursor.com/docs/reference/keyboard-shortcuts",
    "updatedAt": "2026-06-20",
    "contentCheckedAt": "2026-07-02",
    "sourceCheckedAt": "2026-07-02",
    "updatePolicy": "manual-only",
    "verificationStatus": "manual",
    "coverage": "官方入口全集；精确范围、组件与平台限制见 shared/official-inventories/cursor.json",
    "platforms": [
      "mac",
      "windows",
      "linux"
    ],
    "order": 8,
    "sources": [
      {
        "id": "cursor-shortcuts",
        "title": "Cursor Docs",
        "url": "https://cursor.com/docs/reference/keyboard-shortcuts",
        "kind": "official-doc",
        "maintainer": "Cursor",
        "evidenceTier": "first-party",
        "lastVerifiedAt": "2026-07-02",
        "resolvedUrl": "https://cursor.com/docs/reference/keyboard-shortcuts",
        "pageTitle": "Cursor Docs",
        "checkedAt": "2026-07-02",
        "purposes": [
          "command-existence",
          "option-semantics"
        ]
      }
    ],
    "officialCoverage": {
      "scope": "all-command-entrypoints",
      "status": "complete",
      "total": 28,
      "covered": 28,
      "checkedAt": "2026-07-13",
      "sourceIds": [
        "cursor-shortcuts"
      ],
      "inventoryHash": "sha256:df9ca5acdbe76dc12e6fbbaec5afd8225afa365becb09e47aaf50521ec6032d7"
    }
  },
  "items": [
    {
      "cat": "shortcut",
      "cmd": "Cmd+I",
      "en": "Toggle Sidepanel",
      "zh": "切换侧边栏显示/隐藏（Cursor 3.0 界面重构后的新行为；原 Composer 已合并入侧边栏，Win/Linux 为 Ctrl+I）",
      "platformCmds": {
        "mac": "Cmd+I",
        "windows": "Ctrl+I",
        "linux": "Ctrl+I"
      },
      "id": "8ff2cda22ea7f208",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "cursor-shortcuts",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://cursor.com/docs/reference/keyboard-shortcuts · General 分组 · Cmd I（原文：\"Toggle Sidepanel (unless bound to mode)\"）",
          "checkedAt": "2026-07-02"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "切换侧边栏显示/隐藏（Cursor 3.0 界面重构后的新行为；原 Composer 已合并入侧边栏，Win/Linux 为 Ctrl+I）",
        "Toggle Sidepanel",
        "Cmd+I"
      ],
      "examples": [
        {
          "value": "选中要修改的代码后按 Cmd/Ctrl+I，输入“提取为可复用函数”",
          "description": "让 Agent 基于当前上下文直接修改代码",
          "copyable": false,
          "scenario": "在实际工作中需要切换侧边栏显示/隐藏（Cursor 3.0 界面重构后的新行为；原 Composer 已合并入侧边栏，Win/Linux 为 Ctrl+I）时",
          "goal": "切换侧边栏显示/隐藏（Cursor 3.0 界面重构后的新行为；原 Composer 已合并入侧边栏，Win/Linux 为 Ctrl+I）",
          "expected": "操作后，工具完成“让 Agent 基于当前上下文直接修改代码”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "cursor-shortcuts"
          ],
          "groundingRefs": [
            {
              "sourceId": "cursor-shortcuts",
              "locator": "https://cursor.com/docs/reference/keyboard-shortcuts · General 分组 · Cmd I（原文：\"Toggle Sidepanel (unless bound to mode)\"）",
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
      "cmd": "Cmd+L",
      "en": "Open AI Chat",
      "zh": "打开 AI 对话面板（Win/Linux 为 Ctrl+L）",
      "platformCmds": {
        "mac": "Cmd+L",
        "windows": "Ctrl+L",
        "linux": "Ctrl+L"
      },
      "id": "8a3401e170d3a97e",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "cursor-shortcuts",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://cursor.com/docs/reference/keyboard-shortcuts · General/Code Selection & Context 分组 · Cmd L（原文：\"Toggle Sidepanel (unless bound to mode)\"，选中代码时为 \"Add selection to new chat\"）",
          "checkedAt": "2026-07-02"
        }
      ],
      "keywords": [
        "打开 AI 对话面板（Win/Linux 为 Ctrl+L）",
        "Open AI Chat",
        "Cmd+L"
      ],
      "examples": [
        {
          "value": "按 Cmd/Ctrl+L 后询问“这个函数为什么会重复请求？”",
          "description": "在 AI Chat 中分析当前代码",
          "copyable": false,
          "scenario": "在实际工作中需要打开 AI 对话面板（Win/Linux 为 Ctrl+L）时",
          "goal": "打开 AI 对话面板（Win/Linux 为 Ctrl+L）",
          "expected": "操作后，工具完成“在 AI Chat 中分析当前代码”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "cursor-shortcuts"
          ],
          "groundingRefs": [
            {
              "sourceId": "cursor-shortcuts",
              "locator": "https://cursor.com/docs/reference/keyboard-shortcuts · General/Code Selection & Context 分组 · Cmd L（原文：\"Toggle Sidepanel (unless bound to mode)\"，选中代码时为 \"Add selection to new chat\"）",
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
      "cmd": "Cmd+K",
      "en": "Open Inline AI Edit",
      "zh": "在编辑器中打开行内 AI 编辑栏，输入指令让 AI 修改选中代码（Win/Linux 为 Ctrl+K）",
      "context": "编辑器",
      "platformCmds": {
        "mac": "Cmd+K",
        "windows": "Ctrl+K",
        "linux": "Ctrl+K"
      },
      "id": "ac8177dbfb88fc54",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "cursor-shortcuts",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://cursor.com/docs/reference/keyboard-shortcuts · Inline Edit 分组 · Cmd K（原文：\"Open\"）",
          "checkedAt": "2026-07-02"
        }
      ],
      "keywords": [
        "在编辑器中打开行内 AI 编辑栏，输入指令让 AI 修改选中代码（Win/Linux 为 Ctrl+K）",
        "Open Inline AI Edit",
        "Cmd+K"
      ],
      "examples": [
        {
          "value": "选中一段代码，按 Cmd/Ctrl+K，输入“增加参数校验”",
          "description": "对选中代码进行行内 AI 编辑",
          "copyable": false,
          "scenario": "在实际工作中需要在编辑器中打开行内 AI 编辑栏，输入指令让 AI 修改选中代码（Win/Linux 为 Ctrl+K）时",
          "goal": "在编辑器中打开行内 AI 编辑栏，输入指令让 AI 修改选中代码（Win/Linux 为 Ctrl+K）",
          "expected": "操作后，工具完成“对选中代码进行行内 AI 编辑”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "cursor-shortcuts"
          ],
          "groundingRefs": [
            {
              "sourceId": "cursor-shortcuts",
              "locator": "https://cursor.com/docs/reference/keyboard-shortcuts · Inline Edit 分组 · Cmd K（原文：\"Open\"）",
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
      "cmd": "Cmd+K",
      "en": "Open Terminal AI Command",
      "zh": "在终端中打开 AI 命令输入栏，用自然语言生成终端命令（Win/Linux 为 Ctrl+K）",
      "context": "终端",
      "platformCmds": {
        "mac": "Cmd+K",
        "windows": "Ctrl+K",
        "linux": "Ctrl+K"
      },
      "id": "5743ebc7c497754a",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "cursor-shortcuts",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://cursor.com/docs/reference/keyboard-shortcuts · Terminal 分组 · Cmd K（原文：\"Open terminal prompt bar\"）",
          "checkedAt": "2026-07-02"
        }
      ],
      "keywords": [
        "在终端中打开 AI 命令输入栏，用自然语言生成终端命令（Win/Linux 为 Ctrl+K）",
        "Open Terminal AI Command",
        "Cmd+K"
      ],
      "examples": [
        {
          "value": "在终端按 Cmd/Ctrl+K，输入“查找占用 3000 端口的进程”",
          "description": "根据自然语言生成终端命令",
          "copyable": false,
          "scenario": "在实际工作中需要在终端中打开 AI 命令输入栏，用自然语言生成终端命令（Win/Linux 为 Ctrl+K）时",
          "goal": "在终端中打开 AI 命令输入栏，用自然语言生成终端命令（Win/Linux 为 Ctrl+K）",
          "expected": "操作后，工具完成“根据自然语言生成终端命令”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "cursor-shortcuts"
          ],
          "groundingRefs": [
            {
              "sourceId": "cursor-shortcuts",
              "locator": "https://cursor.com/docs/reference/keyboard-shortcuts · Terminal 分组 · Cmd K（原文：\"Open terminal prompt bar\"）",
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
      "cmd": "Cmd+Shift+L",
      "en": "Add Selection to Chat",
      "zh": "将当前选中代码添加到 AI Chat 上下文中（Win/Linux 为 Ctrl+Shift+L）",
      "platformCmds": {
        "mac": "Cmd+Shift+L",
        "windows": "Ctrl+Shift+L",
        "linux": "Ctrl+Shift+L"
      },
      "id": "e86466bd23691cc8",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "cursor-shortcuts",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://cursor.com/docs/reference/keyboard-shortcuts · Code Selection & Context 分组 · Cmd Shift L（原文：\"Add selected code as context\"）",
          "checkedAt": "2026-07-02"
        }
      ],
      "keywords": [
        "将当前选中代码添加到 AI Chat 上下文中（Win/Linux 为 Ctrl+Shift+L）",
        "Add Selection to Chat",
        "Cmd+Shift+L"
      ],
      "examples": [
        {
          "value": "选中关键代码后按 Cmd/Ctrl+Shift+L，再到 Chat 中提问",
          "description": "把选中代码加入 AI 对话上下文",
          "copyable": false,
          "scenario": "在实际工作中需要将当前选中代码添加到 AI Chat 上下文中（Win/Linux 为 Ctrl+Shift+L）时",
          "goal": "将当前选中代码添加到 AI Chat 上下文中（Win/Linux 为 Ctrl+Shift+L）",
          "expected": "操作后，工具完成“把选中代码加入 AI 对话上下文”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "cursor-shortcuts"
          ],
          "groundingRefs": [
            {
              "sourceId": "cursor-shortcuts",
              "locator": "https://cursor.com/docs/reference/keyboard-shortcuts · Code Selection & Context 分组 · Cmd Shift L（原文：\"Add selected code as context\"）",
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
      "cmd": "Cmd+Shift+I",
      "en": "Open Agent with Full Context",
      "zh": "以当前文件完整上下文打开 Agent（Win/Linux 为 Ctrl+Shift+I；⚠️2026-07-02 复核未在当前官方快捷键表中找到此组合键，可能随 Cursor 3.0 界面重构调整或移除）",
      "platformCmds": {
        "mac": "Cmd+Shift+I",
        "windows": "Ctrl+Shift+I",
        "linux": "Ctrl+Shift+I"
      },
      "id": "dd119793e31485e8",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "cursor-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方快捷键页（页面内检索 Cmd+Shift+I）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "删除",
        "移除",
        "清理",
        "以当前文件完整上下文打开 Agent（Win/Linux 为 Ctrl+Shift+I；⚠️2026-07-02 复核未在当前官方快捷键表中找到此组合键，可能随 Cursor 3.0 界面重构调整或移除）",
        "Open Agent with Full Context",
        "Cmd+Shift+I"
      ],
      "examples": [
        {
          "value": "按 Cmd+Shift+I",
          "description": "以当前文件完整上下文打开 Agent（Win/Linux 为 Ctrl+Shift+I；⚠️2026-07-02 复核未在当前官方快捷键表中找到此组合键，可能随 Cursor 3.0 界面重构调整或移除）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platformValues": {
            "mac": "按 Cmd+Shift+I",
            "windows": "按 Ctrl+Shift+I",
            "linux": "按 Ctrl+Shift+I"
          },
          "scenario": "在实际工作中需要以当前文件完整上下文打开 Agent（Win/Linux 为 Ctrl+Shift+I；⚠️2026-07-02 复核未在当前官方快捷键表中找到此组合键，可能随 Cursor 3.0 界面重构调整或移除）时",
          "goal": "以当前文件完整上下文打开 Agent（Win/Linux 为 Ctrl+Shift+I；⚠️2026-07-02 复核未在当前官方快捷键表中找到此组合键，可能随 Cursor 3.0 界面重构调整或移除）",
          "expected": "操作后，工具完成“以当前文件完整上下文打开 Agent（Win/Linux 为 Ctrl+Shift+I；⚠️2026-07-02 复核未在当前官方快捷键表中找到此组合键，可能随 Cursor 3.0 界面重构调整或移除）”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "cursor-shortcuts",
              "locator": "官方快捷键页（页面内检索 Cmd+Shift+I）",
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
      "cmd": "Cmd+Enter",
      "en": "Submit with Codebase Search",
      "zh": "提交消息并搜索整个代码库作为上下文（Win/Linux 为 Ctrl+Enter）",
      "context": "Chat/Composer",
      "platformCmds": {
        "mac": "Cmd+Enter",
        "windows": "Ctrl+Enter",
        "linux": "Ctrl+Enter"
      },
      "id": "023a6020a0d0428b",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "cursor-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方快捷键页（页面内检索 Cmd+Enter）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "搜索",
        "查找",
        "定位",
        "提交消息并搜索整个代码库作为上下文（Win/Linux 为 Ctrl+Enter）",
        "Submit with Codebase Search",
        "Cmd+Enter"
      ],
      "examples": [
        {
          "value": "输入问题后按 Cmd/Ctrl+Enter",
          "description": "提交问题并搜索整个代码库作为上下文",
          "copyable": false,
          "scenario": "在实际工作中需要提交消息并搜索整个代码库作为上下文（Win/Linux 为 Ctrl+Enter）时",
          "goal": "提交消息并搜索整个代码库作为上下文（Win/Linux 为 Ctrl+Enter）",
          "expected": "操作后，工具完成“提交问题并搜索整个代码库作为上下文”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "cursor-shortcuts"
          ],
          "groundingRefs": [
            {
              "sourceId": "cursor-shortcuts",
              "locator": "官方快捷键页（页面内检索 Cmd+Enter）",
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
      "cmd": "Cmd+Shift+Enter",
      "en": "Submit Without Codebase Search",
      "zh": "提交消息但不搜索代码库，仅使用当前上下文（Win/Linux 为 Ctrl+Shift+Enter；⚠️2026-07-02 复核未在当前官方 Chat 快捷键表中找到此组合键）",
      "context": "Chat/Composer",
      "platformCmds": {
        "mac": "Cmd+Shift+Enter",
        "windows": "Ctrl+Shift+Enter",
        "linux": "Ctrl+Shift+Enter"
      },
      "id": "c656c0150f68fc84",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "cursor-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方快捷键页（页面内检索 Cmd+Shift+Enter）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "搜索",
        "查找",
        "定位",
        "提交消息但不搜索代码库，仅使用当前上下文（Win/Linux 为 Ctrl+Shift+Enter；⚠️2026-07-02 复核未在当前官方 Chat 快捷键表中找到此组合键）",
        "Submit Without Codebase Search",
        "Cmd+Shift+Enter"
      ],
      "examples": [
        {
          "value": "按 Cmd+Shift+Enter（Chat/Composer）",
          "description": "Chat/Composer：提交消息但不搜索代码库，仅使用当前上下文（Win/Linux 为 Ctrl+Shift+Enter；⚠️2026-07-02 复核未在当前官方 Chat 快捷键表中找到此组合键）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platformValues": {
            "mac": "按 Cmd+Shift+Enter（Chat/Composer）",
            "windows": "按 Ctrl+Shift+Enter（Chat/Composer）",
            "linux": "按 Ctrl+Shift+Enter（Chat/Composer）"
          },
          "scenario": "在实际工作中需要提交消息但不搜索代码库，仅使用当前上下文（Win/Linux 为 Ctrl+Shift+Enter；⚠️2026-07-02 复核未在当前官方 Chat 快捷键表中找到此组合键）时",
          "goal": "提交消息但不搜索代码库，仅使用当前上下文（Win/Linux 为 Ctrl+Shift+Enter；⚠️2026-07-02 复核未在当前官方 Chat 快捷键表中找到此组合键）",
          "expected": "操作后，工具完成“Chat/Composer：提交消息但不搜索代码库，仅使用当前上下文（Win/Linux 为 Ctrl+Shift+Enter；⚠️2026-07-02 复核未在当前官方 Chat 快捷键表中找到此组合键）”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "cursor-shortcuts",
              "locator": "官方快捷键页（页面内检索 Cmd+Shift+Enter）",
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
      "cmd": "Cmd+Shift+Backspace",
      "en": "Reject All Changes / Cancel",
      "zh": "拒绝全部改动或取消当前生成（Inline Edit 为 Cancel，Chat 为 Reject all changes；此前误记为 Cmd+Backspace，2026-07-02 核对官方文档更正为 Cmd+Shift+Backspace，Win/Linux 为 Ctrl+Shift+Backspace）",
      "context": "Chat/Composer",
      "platformCmds": {
        "mac": "Cmd+Shift+Backspace",
        "windows": "Ctrl+Shift+Backspace",
        "linux": "Ctrl+Shift+Backspace"
      },
      "id": "35a1467c6b6e5316",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "cursor-shortcuts",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://cursor.com/docs/reference/keyboard-shortcuts · Chat 分组 · Cmd Shift Backspace（原文：\"Reject all changes\"）；Inline Edit 分组 · Cmd Shift Backspace（原文：\"Cancel\"）",
          "checkedAt": "2026-07-02"
        }
      ],
      "keywords": [
        "拒绝全部改动或取消当前生成（Inline Edit 为 Cancel，Chat 为 Reject all changes；此前误记为 Cmd+Backspace，2026-07-02 核对官方文档更正为 Cmd+Shift+Backspace，Win/Linux 为 Ctrl+Shift+Backspace）",
        "Reject All Changes / Cancel",
        "Cmd+Shift+Backspace"
      ],
      "examples": [
        {
          "value": "按 Cmd+Shift+Backspace（Chat/Composer）",
          "description": "Chat/Composer：拒绝全部改动或取消当前生成（Inline Edit 为 Cancel，Chat 为 Reject all changes；此前误记为 Cmd+Backspace，2026-07-02 核对官方文档更正为 Cmd+Shift+Backspace，Win/Linux 为 Ctrl+Shift+Backspace）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platformValues": {
            "mac": "按 Cmd+Shift+Backspace（Chat/Composer）",
            "windows": "按 Ctrl+Shift+Backspace（Chat/Composer）",
            "linux": "按 Ctrl+Shift+Backspace（Chat/Composer）"
          },
          "scenario": "在实际工作中需要拒绝全部改动或取消当前生成（Inline Edit 为 Cancel，Chat 为 Reject all changes；此前误记为 Cmd+Backspace，2026-07-02 核对官方文档更正为 Cmd+Shift+Backspace，Win/Linux 为 Ctrl+Shift+Backspace）时",
          "goal": "拒绝全部改动或取消当前生成（Inline Edit 为 Cancel，Chat 为 Reject all changes；此前误记为 Cmd+Backspace，2026-07-02 核对官方文档更正为 Cmd+Shift+Backspace，Win/Linux 为 Ctrl+Shift+Backspace）",
          "expected": "操作后，工具完成“Chat/Composer：拒绝全部改动或取消当前生成（Inline Edit 为 Cancel，Chat 为 Reject all changes；此前误记为 Cmd+Backspace，2026-07-02 核对官方文档更正为 Cmd+Shift+Backspace，Win/Linux 为 Ctrl+Shift+Backspace）”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "cursor-shortcuts",
              "locator": "https://cursor.com/docs/reference/keyboard-shortcuts · Chat 分组 · Cmd Shift Backspace（原文：\"Reject all changes\"）；Inline Edit 分组 · Cmd Shift Backspace（原文：\"Cancel\"）",
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
      "cmd": "Cmd+Shift+J",
      "en": "Open Cursor Settings",
      "zh": "打开 Cursor 设置面板（Win/Linux 为 Ctrl+Shift+J）",
      "platformCmds": {
        "mac": "Cmd+Shift+J",
        "windows": "Ctrl+Shift+J",
        "linux": "Ctrl+Shift+J"
      },
      "id": "7fc91ce6772943c0",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "cursor-shortcuts",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://cursor.com/docs/reference/keyboard-shortcuts · General 分组 · Cmd Shift J（原文：\"Cursor settings\"）",
          "checkedAt": "2026-07-02"
        }
      ],
      "keywords": [
        "配置",
        "设置",
        "偏好",
        "打开 Cursor 设置面板（Win/Linux 为 Ctrl+Shift+J）",
        "Open Cursor Settings",
        "Cmd+Shift+J"
      ],
      "examples": [
        {
          "value": "按 Cmd+Shift+J",
          "description": "打开 Cursor 设置面板（Win/Linux 为 Ctrl+Shift+J）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platformValues": {
            "mac": "按 Cmd+Shift+J",
            "windows": "按 Ctrl+Shift+J",
            "linux": "按 Ctrl+Shift+J"
          },
          "scenario": "在实际工作中需要打开 Cursor 设置面板（Win/Linux 为 Ctrl+Shift+J）时",
          "goal": "打开 Cursor 设置面板（Win/Linux 为 Ctrl+Shift+J）",
          "expected": "操作后，工具完成“打开 Cursor 设置面板（Win/Linux 为 Ctrl+Shift+J）”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "cursor-shortcuts",
              "locator": "https://cursor.com/docs/reference/keyboard-shortcuts · General 分组 · Cmd Shift J（原文：\"Cursor settings\"）",
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
      "cmd": "Tab",
      "en": "Accept Cursor Tab Suggestion",
      "zh": "接受 Cursor Tab 的整行/整块代码补全建议（所有平台相同）",
      "context": "Cursor Tab",
      "id": "269732e21e794743",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "cursor-shortcuts",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://cursor.com/docs/reference/keyboard-shortcuts · Tab 分组 · Tab（原文：\"Accept suggestion\"）",
          "checkedAt": "2026-07-02"
        }
      ],
      "keywords": [
        "接受 Cursor Tab 的整行/整块代码补全建议（所有平台相同）",
        "Accept Cursor Tab Suggestion",
        "Tab"
      ],
      "examples": [
        {
          "value": "出现灰色代码补全时按 Tab",
          "description": "接受当前整行或整块 Cursor Tab 建议",
          "copyable": false,
          "scenario": "在实际工作中需要接受 Cursor Tab 的整行/整块代码补全建议（所有平台相同）时",
          "goal": "接受 Cursor Tab 的整行/整块代码补全建议（所有平台相同）",
          "expected": "操作后，工具完成“接受当前整行或整块 Cursor Tab 建议”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "cursor-shortcuts"
          ],
          "groundingRefs": [
            {
              "sourceId": "cursor-shortcuts",
              "locator": "https://cursor.com/docs/reference/keyboard-shortcuts · Tab 分组 · Tab（原文：\"Accept suggestion\"）",
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
      "en": "Dismiss Cursor Tab Suggestion",
      "zh": "拒绝/关闭 Cursor Tab 的代码补全建议（所有平台相同）",
      "context": "Cursor Tab",
      "id": "c0919cfab1bb3bc7",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "cursor-shortcuts",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方快捷键页（页面内检索 Esc）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "拒绝/关闭 Cursor Tab 的代码补全建议（所有平台相同）",
        "Dismiss Cursor Tab Suggestion",
        "Esc"
      ],
      "examples": [
        {
          "value": "按 Esc（Cursor Tab）",
          "description": "拒绝/关闭 Cursor Tab 的代码补全建议（所有平台相同）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要拒绝/关闭 Cursor Tab 的代码补全建议（所有平台相同）时",
          "goal": "拒绝/关闭 Cursor Tab 的代码补全建议（所有平台相同）",
          "expected": "操作后，工具完成“拒绝/关闭 Cursor Tab 的代码补全建议（所有平台相同）”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "cursor-shortcuts",
              "locator": "官方快捷键页（页面内检索 Esc）",
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
      "cmd": "Cmd+Right",
      "en": "Accept Next Word",
      "zh": "逐词接受 Cursor Tab 代码建议的下一个词（Win/Linux 为 Ctrl+右箭头）",
      "context": "Cursor Tab",
      "platformCmds": {
        "mac": "Cmd+Right",
        "windows": "Ctrl+Right",
        "linux": "Ctrl+Right"
      },
      "id": "be08a175582dd384",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "cursor-shortcuts",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://cursor.com/docs/reference/keyboard-shortcuts · Tab 分组 · Cmd →（原文：\"Accept next word\"）",
          "checkedAt": "2026-07-02"
        }
      ],
      "keywords": [
        "逐词接受 Cursor Tab 代码建议的下一个词（Win/Linux 为 Ctrl+右箭头）",
        "Accept Next Word",
        "Cmd+Right"
      ],
      "examples": [
        {
          "value": "按 Cmd+Right（Cursor Tab）",
          "description": "逐词接受 Cursor Tab 代码建议的下一个词（Win/Linux 为 Ctrl+右箭头）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platformValues": {
            "mac": "按 Cmd+Right（Cursor Tab）",
            "windows": "按 Ctrl+Right（Cursor Tab）",
            "linux": "按 Ctrl+Right（Cursor Tab）"
          },
          "groundingRefs": [
            {
              "sourceId": "cursor-shortcuts",
              "locator": "https://cursor.com/docs/reference/keyboard-shortcuts · Tab 分组 · Cmd →（原文：\"Accept next word\"）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Cursor Tab场景中需要逐词接受 Cursor Tab 代码建议的下一个词（Win/Linux 为 Ctrl+右箭头），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+Right（Cursor Tab）”逐词接受 Cursor Tab 代码建议的下一个词（Win/Linux 为 Ctrl+右箭头）。",
          "expected": "快捷键触发后，当前界面完成“逐词接受 Cursor Tab 代码建议的下一个词（Win/Linux 为 Ctrl+右箭头）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Option+Backspace",
      "en": "Reject Word by Word",
      "zh": "逐词拒绝 Cursor Tab 代码建议（Win/Linux 为 Ctrl+Backspace）",
      "context": "Cursor Tab",
      "platformCmds": {
        "mac": "Option+Backspace",
        "windows": "Ctrl+Backspace",
        "linux": "Ctrl+Backspace"
      },
      "id": "07f6c79962bea87f",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "cursor-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方快捷键页（页面内检索 Option+Backspace）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "逐词拒绝 Cursor Tab 代码建议（Win/Linux 为 Ctrl+Backspace）",
        "Reject Word by Word",
        "Option+Backspace"
      ],
      "examples": [
        {
          "value": "按 Option+Backspace（Cursor Tab）",
          "description": "逐词拒绝 Cursor Tab 代码建议（Win/Linux 为 Ctrl+Backspace）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platformValues": {
            "mac": "按 Option+Backspace（Cursor Tab）",
            "windows": "按 Ctrl+Backspace（Cursor Tab）",
            "linux": "按 Ctrl+Backspace（Cursor Tab）"
          },
          "groundingRefs": [
            {
              "sourceId": "cursor-shortcuts",
              "locator": "官方快捷键页（页面内检索 Option+Backspace）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Cursor Tab场景中需要逐词拒绝 Cursor Tab 代码建议（Win/Linux 为 Ctrl+Backspace），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Option+Backspace（Cursor Tab）”逐词拒绝 Cursor Tab 代码建议（Win/Linux 为 Ctrl+Backspace）。",
          "expected": "快捷键触发后，当前界面完成“逐词拒绝 Cursor Tab 代码建议（Win/Linux 为 Ctrl+Backspace）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+Shift+P",
      "en": "Show Command Palette",
      "zh": "打开命令面板（Win/Linux 为 Ctrl+Shift+P）",
      "platformCmds": {
        "mac": "Cmd+Shift+P",
        "windows": "Ctrl+Shift+P",
        "linux": "Ctrl+Shift+P"
      },
      "id": "7970689048e3c5af",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "cursor-shortcuts",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://cursor.com/docs/reference/keyboard-shortcuts · General 分组 · Cmd Shift P（原文：\"Command palette\"）",
          "checkedAt": "2026-07-02"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "打开命令面板（Win/Linux 为 Ctrl+Shift+P）",
        "Show Command Palette",
        "Cmd+Shift+P"
      ],
      "examples": [
        {
          "value": "按 Cmd/Ctrl+Shift+P，输入命令名称",
          "description": "打开命令面板并执行编辑器动作",
          "copyable": false,
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "cursor-shortcuts"
          ],
          "groundingRefs": [
            {
              "sourceId": "cursor-shortcuts",
              "locator": "https://cursor.com/docs/reference/keyboard-shortcuts · General 分组 · Cmd Shift P（原文：\"Command palette\"）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Cursor中需要打开命令面板并执行编辑器动作，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd/Ctrl+Shift+P，输入命令名称”打开命令面板（Win/Linux 为 Ctrl+Shift+P）。",
          "expected": "快捷键触发后，当前界面完成“打开命令面板并执行编辑器动作”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+P",
      "en": "Quick File Open",
      "zh": "按名称快速打开文件（Win/Linux 为 Ctrl+P）",
      "platformCmds": {
        "mac": "Cmd+P",
        "windows": "Ctrl+P",
        "linux": "Ctrl+P"
      },
      "id": "b307c56b96c36a78",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "cursor-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方快捷键页（页面内检索 Cmd+P）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "按名称快速打开文件（Win/Linux 为 Ctrl+P）",
        "Quick File Open",
        "Cmd+P"
      ],
      "examples": [
        {
          "value": "按 Cmd+P",
          "description": "按名称快速打开文件（Win/Linux 为 Ctrl+P）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platformValues": {
            "mac": "按 Cmd+P",
            "windows": "按 Ctrl+P",
            "linux": "按 Ctrl+P"
          },
          "groundingRefs": [
            {
              "sourceId": "cursor-shortcuts",
              "locator": "官方快捷键页（页面内检索 Cmd+P）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Cursor中需要按名称快速打开文件（Win/Linux 为 Ctrl+P），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+P”按名称快速打开文件（Win/Linux 为 Ctrl+P）。",
          "expected": "快捷键触发后，当前界面完成“按名称快速打开文件（Win/Linux 为 Ctrl+P）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+W",
      "en": "Close Current Tab",
      "zh": "关闭当前编辑器标签页（Win/Linux 为 Ctrl+W）",
      "platformCmds": {
        "mac": "Cmd+W",
        "windows": "Ctrl+W",
        "linux": "Ctrl+W"
      },
      "id": "593e75031ca8145a",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "cursor-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方快捷键页（页面内检索 Cmd+W）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "关闭当前编辑器标签页（Win/Linux 为 Ctrl+W）",
        "Close Current Tab",
        "Cmd+W"
      ],
      "examples": [
        {
          "value": "按 Cmd+W",
          "description": "关闭当前编辑器标签页（Win/Linux 为 Ctrl+W）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platformValues": {
            "mac": "按 Cmd+W",
            "windows": "按 Ctrl+W",
            "linux": "按 Ctrl+W"
          },
          "groundingRefs": [
            {
              "sourceId": "cursor-shortcuts",
              "locator": "官方快捷键页（页面内检索 Cmd+W）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Cursor中需要关闭当前编辑器标签页（Win/Linux 为 Ctrl+W），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+W”关闭当前编辑器标签页（Win/Linux 为 Ctrl+W）。",
          "expected": "快捷键触发后，当前界面完成“关闭当前编辑器标签页（Win/Linux 为 Ctrl+W）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+B",
      "en": "Toggle Sidebar",
      "zh": "切换侧边栏显示/隐藏（Win/Linux 为 Ctrl+B）",
      "platformCmds": {
        "mac": "Cmd+B",
        "windows": "Ctrl+B",
        "linux": "Ctrl+B"
      },
      "id": "54b8e968d8bc92e9",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "cursor-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方快捷键页（页面内检索 Cmd+B）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "切换侧边栏显示/隐藏（Win/Linux 为 Ctrl+B）",
        "Toggle Sidebar",
        "Cmd+B"
      ],
      "examples": [
        {
          "value": "按 Cmd+B",
          "description": "切换侧边栏显示/隐藏（Win/Linux 为 Ctrl+B）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platformValues": {
            "mac": "按 Cmd+B",
            "windows": "按 Ctrl+B",
            "linux": "按 Ctrl+B"
          },
          "groundingRefs": [
            {
              "sourceId": "cursor-shortcuts",
              "locator": "官方快捷键页（页面内检索 Cmd+B）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Cursor中需要切换侧边栏显示/隐藏（Win/Linux 为 Ctrl+B），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+B”切换侧边栏显示/隐藏（Win/Linux 为 Ctrl+B）。",
          "expected": "快捷键触发后，当前界面完成“切换侧边栏显示/隐藏（Win/Linux 为 Ctrl+B）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+J",
      "en": "Toggle Bottom Panel",
      "zh": "切换底部面板（终端/输出/问题）显示/隐藏（Win/Linux 为 Ctrl+J）",
      "platformCmds": {
        "mac": "Cmd+J",
        "windows": "Ctrl+J",
        "linux": "Ctrl+J"
      },
      "id": "6c2b6e114b811c5c",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "cursor-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方快捷键页（页面内检索 Cmd+J）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "切换底部面板（终端/输出/问题）显示/隐藏（Win/Linux 为 Ctrl+J）",
        "Toggle Bottom Panel",
        "Cmd+J"
      ],
      "examples": [
        {
          "value": "按 Cmd+J",
          "description": "切换底部面板（终端/输出/问题）显示/隐藏（Win/Linux 为 Ctrl+J）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platformValues": {
            "mac": "按 Cmd+J",
            "windows": "按 Ctrl+J",
            "linux": "按 Ctrl+J"
          },
          "groundingRefs": [
            {
              "sourceId": "cursor-shortcuts",
              "locator": "官方快捷键页（页面内检索 Cmd+J）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Cursor中需要切换底部面板（终端/输出/问题）显示/隐藏（Win/Linux 为 Ctrl+J），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+J”切换底部面板（终端/输出/问题）显示/隐藏（Win/Linux 为 Ctrl+J）。",
          "expected": "快捷键触发后，当前界面完成“切换底部面板（终端/输出/问题）显示/隐藏（Win/Linux 为 Ctrl+J）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl+`",
      "en": "Toggle Terminal",
      "zh": "切换集成终端显示/隐藏（所有平台相同，macOS 使用 Ctrl 而非 Cmd）",
      "platformCmds": {
        "mac": "Ctrl+`",
        "windows": "Ctrl+`",
        "linux": "Ctrl+`"
      },
      "id": "46ed23f3675ebc37",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "cursor-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方快捷键页（页面内检索 Ctrl+`）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "切换集成终端显示/隐藏（所有平台相同，macOS 使用 Ctrl 而非 Cmd）",
        "Toggle Terminal",
        "Ctrl+`"
      ],
      "examples": [
        {
          "value": "按 Ctrl+`",
          "description": "切换集成终端显示/隐藏（所有平台相同，macOS 使用 Ctrl 而非 Cmd）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platformValues": {
            "mac": "按 Ctrl+`",
            "windows": "按 Ctrl+`",
            "linux": "按 Ctrl+`"
          },
          "groundingRefs": [
            {
              "sourceId": "cursor-shortcuts",
              "locator": "官方快捷键页（页面内检索 Ctrl+`）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Cursor中需要切换集成终端显示/隐藏（所有平台相同，macOS 使用 Ctrl 而非 Cmd），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Ctrl+`”切换集成终端显示/隐藏（所有平台相同，macOS 使用 Ctrl 而非 Cmd）。",
          "expected": "快捷键触发后，当前界面完成“切换集成终端显示/隐藏（所有平台相同，macOS 使用 Ctrl 而非 Cmd）”对应的动作。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "@Files",
      "en": "Reference files as context",
      "zh": "在 Chat/Composer 中引用指定文件作为 AI 上下文",
      "context": "Chat/Composer",
      "id": "89aacdb4b19fd234",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "cursor-shortcuts",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方快捷键页（页面内检索 @Files）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "在 Chat/Composer 中引用指定文件作为 AI 上下文",
        "Reference files as context",
        "@Files"
      ],
      "examples": [
        {
          "value": "@Files src/api.ts",
          "description": "在 Chat 或 Composer 中引用指定文件",
          "copyable": false,
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "cursor-shortcuts"
          ],
          "groundingRefs": [
            {
              "sourceId": "cursor-shortcuts",
              "locator": "官方快捷键页（页面内检索 @Files）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "正在Chat/Composer中完成“在 Chat/Composer 中引用指定文件作为 AI 上下文”这一步，需要用默认交互入口减少界面切换。",
          "goal": "在 Chat/Composer 中引用指定文件作为 AI 上下文；使用 @Files src/api.ts 完成这一步。",
          "expected": "操作后，界面完成“在 Chat 或 Composer 中引用指定文件”对应的变化。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "@Folders",
      "en": "Reference folders as context",
      "zh": "在 Chat/Composer 中引用指定文件夹及其内容作为 AI 上下文",
      "context": "Chat/Composer",
      "id": "5b060591a6ed447e",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "cursor-shortcuts",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方快捷键页（页面内检索 @Folders）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "在 Chat/Composer 中引用指定文件夹及其内容作为 AI 上下文",
        "Reference folders as context",
        "@Folders"
      ],
      "examples": [
        {
          "value": "@Folders src/components",
          "description": "在 Chat/Composer 中引用指定文件夹及其内容作为 AI 上下文",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "cursor-shortcuts",
              "locator": "官方快捷键页（页面内检索 @Folders）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前 Cursor 会话正在处理与“在 Chat/Composer 中引用指定文件夹及其内容作为 AI 上下文”直接相关的任务，需要在不中断上下文的情况下执行该操作。",
          "goal": "在 Chat/Composer 中引用指定文件夹及其内容作为 AI 上下文；使用 @Folders src/components 完成这一步。",
          "expected": "执行成功后，在 Chat/Composer 中引用指定文件夹及其内容作为 AI 上下文。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "@Web",
      "en": "Search the web for context",
      "zh": "在 Chat/Composer 中让 AI 搜索互联网获取最新信息作为上下文",
      "context": "Chat/Composer",
      "id": "8e57e4efabb7760d",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "cursor-shortcuts",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方快捷键页（页面内检索 @Web）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "搜索",
        "查找",
        "定位",
        "在 Chat/Composer 中让 AI 搜索互联网获取最新信息作为上下文",
        "Search the web for context",
        "@Web"
      ],
      "examples": [
        {
          "value": "@Web 查询当前浏览器兼容性",
          "description": "在 Chat/Composer 中让 AI 搜索互联网获取最新信息作为上下文",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "cursor-shortcuts",
              "locator": "官方快捷键页（页面内检索 @Web）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前 Cursor 会话正在处理与“在 Chat/Composer 中让 AI 搜索互联网获取最新信息作为上下文”直接相关的任务，需要在不中断上下文的情况下执行该操作。",
          "goal": "在 Chat/Composer 中让 AI 搜索互联网获取最新信息作为上下文；使用 @Web 查询当前浏览器兼容性 完成这一步。",
          "expected": "执行成功后，在 Chat/Composer 中让 AI 搜索互联网获取最新信息作为上下文。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "@Git",
      "en": "Reference git history and changes",
      "zh": "在 Chat/Composer 中引用 Git 提交历史和变更作为 AI 上下文",
      "context": "Chat/Composer",
      "id": "6b6156509180238d",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "cursor-shortcuts",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方快捷键页（页面内检索 @Git）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "在 Chat/Composer 中引用 Git 提交历史和变更作为 AI 上下文",
        "Reference git history and changes",
        "@Git"
      ],
      "examples": [
        {
          "value": "@Git 最近一次提交修改了什么？",
          "description": "在 Chat/Composer 中引用 Git 提交历史和变更作为 AI 上下文",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "cursor-shortcuts",
              "locator": "官方快捷键页（页面内检索 @Git）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前 Cursor 会话正在处理与“在 Chat/Composer 中引用 Git 提交历史和变更作为 AI 上下文”直接相关的任务，需要在不中断上下文的情况下执行该操作。",
          "goal": "在 Chat/Composer 中引用 Git 提交历史和变更作为 AI 上下文；使用 @Git 最近一次提交修改了什么？ 完成这一步。",
          "expected": "执行成功后，在 Chat/Composer 中引用 Git 提交历史和变更作为 AI 上下文。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "@Docs",
      "en": "Reference documentation sources",
      "zh": "在 Chat/Composer 中引用文档源（可添加第三方文档 URL）作为 AI 上下文",
      "context": "Chat/Composer",
      "id": "0d1aba561344300c",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "cursor-shortcuts",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方快捷键页（页面内检索 @Docs）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "帮助",
        "说明",
        "文档",
        "在 Chat/Composer 中引用文档源（可添加第三方文档 URL）作为 AI 上下文",
        "Reference documentation sources",
        "@Docs"
      ],
      "examples": [
        {
          "value": "@Docs https://example.com/docs",
          "description": "在 Chat/Composer 中引用文档源（可添加第三方文档 URL）作为 AI 上下文",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "cursor-shortcuts",
              "locator": "官方快捷键页（页面内检索 @Docs）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "忘记入口用法或可用参数时，需要在当前工作流中调出官方帮助。",
          "goal": "在 Chat/Composer 中引用文档源（可添加第三方文档 URL）作为 AI 上下文；使用 @Docs https://example.com/docs 完成这一步。",
          "expected": "执行成功后，在 Chat/Composer 中引用文档源（可添加第三方文档 URL）作为 AI 上下文。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "@Codebase",
      "en": "Search entire codebase for context",
      "zh": "在 Chat/Composer 中让 AI 搜索整个代码库作为上下文",
      "context": "Chat/Composer",
      "id": "9d8c54e3fec1f911",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "cursor-shortcuts",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方快捷键页（页面内检索 @Codebase）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "搜索",
        "查找",
        "定位",
        "在 Chat/Composer 中让 AI 搜索整个代码库作为上下文",
        "Search entire codebase for context",
        "@Codebase"
      ],
      "examples": [
        {
          "value": "@Codebase 登录状态在哪里保存？",
          "description": "让 AI 在整个代码库中搜索相关实现",
          "copyable": false,
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "cursor-shortcuts"
          ],
          "groundingRefs": [
            {
              "sourceId": "cursor-shortcuts",
              "locator": "官方快捷键页（页面内检索 @Codebase）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "正在Chat/Composer中完成“在 Chat/Composer 中让 AI 搜索整个代码库作为上下文”这一步，需要用默认交互入口减少界面切换。",
          "goal": "在 Chat/Composer 中让 AI 搜索整个代码库作为上下文；使用 @Codebase 登录状态在哪里保存？ 完成这一步。",
          "expected": "操作后，界面完成“让 AI 在整个代码库中搜索相关实现”对应的变化。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "@Chat",
      "en": "Reference chat history",
      "zh": "在 Chat/Composer 中引用历史对话内容作为 AI 上下文",
      "context": "Chat/Composer",
      "id": "0e72e96e905147b4",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "cursor-shortcuts",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方快捷键页（页面内检索 @Chat）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "在 Chat/Composer 中引用历史对话内容作为 AI 上下文",
        "Reference chat history",
        "@Chat"
      ],
      "examples": [
        {
          "value": "@Chat 总结上一次讨论的决定",
          "description": "在 Chat/Composer 中引用历史对话内容作为 AI 上下文",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "cursor-shortcuts",
              "locator": "官方快捷键页（页面内检索 @Chat）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前 Cursor 会话正在处理与“在 Chat/Composer 中引用历史对话内容作为 AI 上下文”直接相关的任务，需要在不中断上下文的情况下执行该操作。",
          "goal": "在 Chat/Composer 中引用历史对话内容作为 AI 上下文；使用 @Chat 总结上一次讨论的决定 完成这一步。",
          "expected": "执行成功后，在 Chat/Composer 中引用历史对话内容作为 AI 上下文。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "@Definitions",
      "en": "Reference symbol definitions",
      "zh": "在 Chat/Composer 中引用代码符号（函数/类/类型）定义作为 AI 上下文",
      "context": "Chat/Composer",
      "id": "324e0b652fe86f1a",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "cursor-shortcuts",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方快捷键页（页面内检索 @Definitions）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "在 Chat/Composer 中引用代码符号（函数/类/类型）定义作为 AI 上下文",
        "Reference symbol definitions",
        "@Definitions"
      ],
      "examples": [
        {
          "value": "@Definitions UserService",
          "description": "在 Chat/Composer 中引用代码符号（函数/类/类型）定义作为 AI 上下文",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "cursor-shortcuts",
              "locator": "官方快捷键页（页面内检索 @Definitions）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "准备新的工作环境或资源时，需要在 Chat/Composer 中引用代码符号（函数/类/类型）定义作为 AI 上下文，让后续步骤具备所需入口。",
          "goal": "在 Chat/Composer 中引用代码符号（函数/类/类型）定义作为 AI 上下文；使用 @Definitions UserService 完成这一步。",
          "expected": "执行成功后，在 Chat/Composer 中引用代码符号（函数/类/类型）定义作为 AI 上下文。"
        }
      ]
    }
  ]
};
