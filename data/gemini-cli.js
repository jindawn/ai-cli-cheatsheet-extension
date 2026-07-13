// Generated from validated structured data. Manual edits must follow data/SCHEMA.md.
window.CHEATSHEET_DATA = window.CHEATSHEET_DATA || {};
window.CHEATSHEET_DATA["gemini-cli"] = {
  "meta": {
    "id": "gemini-cli",
    "name": "Gemini CLI",
    "color": "#4c8bf5",
    "source": "第一方来源与确定性官方入口清单，核验于 2026-07-14",
    "sourceUrl": "https://geminicli.com/docs/",
    "updatedAt": "2026-06-20",
    "contentCheckedAt": "2026-07-02",
    "sourceCheckedAt": "2026-06-21",
    "updatePolicy": "version-driven",
    "verificationStatus": "manual",
    "coverage": "官方入口全集；精确范围、组件与平台限制见 shared/official-inventories/gemini-cli.json",
    "platforms": [
      "mac",
      "windows",
      "linux"
    ],
    "builtIn": true,
    "order": 3,
    "sources": [
      {
        "id": "gemini-commands",
        "title": "Gemini CLI command reference",
        "url": "https://geminicli.com/docs/reference/commands/",
        "kind": "official-doc",
        "maintainer": "Google",
        "evidenceTier": "first-party",
        "lastVerifiedAt": "2026-06-21",
        "resolvedUrl": "https://geminicli.com/docs/reference/commands/",
        "pageTitle": "Gemini CLI command reference",
        "checkedAt": "2026-06-21",
        "purposes": [
          "command-existence",
          "option-semantics",
          "examples"
        ]
      },
      {
        "id": "gemini-keyboard",
        "title": "Gemini CLI keyboard shortcuts",
        "url": "https://geminicli.com/docs/reference/keyboard-shortcuts/",
        "kind": "official-doc",
        "maintainer": "Google",
        "evidenceTier": "first-party",
        "lastVerifiedAt": "2026-06-21",
        "resolvedUrl": "https://geminicli.com/docs/reference/keyboard-shortcuts/",
        "pageTitle": "Gemini CLI keyboard shortcuts",
        "checkedAt": "2026-06-21",
        "purposes": [
          "command-existence",
          "option-semantics"
        ]
      }
    ],
    "references": [
      {
        "id": "gemini-cli-reference",
        "title": "Gemini CLI cheatsheet",
        "url": "https://geminicli.com/docs/cli/cli-reference/",
        "kind": "official-doc",
        "maintainer": "Google",
        "evidenceTier": "first-party",
        "lastVerifiedAt": "2026-06-21",
        "resolvedUrl": "https://geminicli.com/docs/cli/cli-reference/",
        "pageTitle": "Gemini CLI cheatsheet",
        "checkedAt": "2026-06-21",
        "purposes": [
          "command-existence",
          "option-semantics",
          "examples"
        ]
      },
      {
        "id": "google-gemini-cli-repository",
        "title": "Gemini CLI official repository",
        "url": "https://github.com/google-gemini/gemini-cli",
        "kind": "official-repository",
        "maintainer": "Google",
        "evidenceTier": "first-party",
        "lastVerifiedAt": "2026-06-21",
        "resolvedUrl": "https://github.com/google-gemini/gemini-cli",
        "pageTitle": "Gemini CLI official repository",
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
      "total": 81,
      "covered": 81,
      "checkedAt": "2026-07-13",
      "sourceIds": [
        "gemini-commands",
        "gemini-keyboard"
      ],
      "inventoryHash": "sha256:fb2e867e9759d1af30747f795934ba146fe22f32bc2f0f563c81d6952d4715c9"
    }
  },
  "items": [
    {
      "cat": "shortcut",
      "cmd": "Enter",
      "en": "Confirm / submit",
      "zh": "确认选择或发送消息",
      "id": "b7aa99d8561fa281",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/ · Enter",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "确认选择或发送消息",
        "Confirm / submit",
        "Enter"
      ],
      "examples": [
        {
          "value": "按 Enter",
          "description": "确认选择或发送消息",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要确认选择或发送消息时",
          "goal": "确认选择或发送消息",
          "expected": "操作后，工具完成“确认选择或发送消息”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/ · Enter",
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
      "cmd": "Esc / Ctrl+[",
      "en": "Cancel / dismiss",
      "zh": "取消对话框或当前焦点",
      "id": "bd74a8ad67251f0a",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/ · Esc / Ctrl+[",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "取消对话框或当前焦点",
        "Cancel / dismiss",
        "Esc"
      ],
      "examples": [
        {
          "value": "按 Esc / Ctrl+[",
          "description": "取消对话框或当前焦点",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要取消对话框或当前焦点时",
          "goal": "取消对话框或当前焦点",
          "expected": "操作后，工具完成“取消对话框或当前焦点”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/ · Esc / Ctrl+[",
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
      "cmd": "Ctrl+C",
      "en": "Cancel request / quit",
      "zh": "取消当前请求；输入框为空时退出CLI",
      "id": "6a1754753dca7cc7",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/ · Ctrl+C",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "取消当前请求；输入框为空时退出CLI",
        "Cancel request / quit",
        "Ctrl+C"
      ],
      "examples": [
        {
          "value": "按 Ctrl+C",
          "description": "取消当前请求；输入框为空时退出CLI",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要取消当前请求；输入框为空时退出CLI时",
          "goal": "取消当前请求；输入框为空时退出CLI",
          "expected": "操作后，工具完成“取消当前请求；输入框为空时退出CLI”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/ · Ctrl+C",
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
      "en": "Exit when input empty",
      "zh": "输入框为空时退出CLI",
      "id": "88f0a2101976b196",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/ · Ctrl+D",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "输入框为空时退出CLI",
        "Exit when input empty",
        "Ctrl+D"
      ],
      "examples": [
        {
          "value": "按 Ctrl+D",
          "description": "输入框为空时退出CLI",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要输入框为空时退出CLI时",
          "goal": "输入框为空时退出CLI",
          "expected": "操作后，工具完成“输入框为空时退出CLI”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/ · Ctrl+D",
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
      "cmd": "Ctrl+A / Home",
      "en": "Move to line start",
      "zh": "光标移到行首",
      "id": "76c5d933eb02ccbf",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/ · Ctrl+A / Home",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "移动",
        "重命名",
        "改名",
        "光标移到行首",
        "Move to line start",
        "Ctrl+A"
      ],
      "examples": [
        {
          "value": "按 Ctrl+A / Home",
          "description": "光标移到行首",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要光标移到行首时",
          "goal": "光标移到行首",
          "expected": "操作后，工具完成“光标移到行首”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/ · Ctrl+A / Home",
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
      "cmd": "Ctrl+E / End",
      "en": "Move to line end",
      "zh": "光标移到行末",
      "id": "0fad22be6255bcff",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/ · Ctrl+E / End",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "移动",
        "重命名",
        "改名",
        "光标移到行末",
        "Move to line end",
        "Ctrl+E"
      ],
      "examples": [
        {
          "value": "按 Ctrl+E / End",
          "description": "光标移到行末",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要光标移到行末时",
          "goal": "光标移到行末",
          "expected": "操作后，工具完成“光标移到行末”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/ · Ctrl+E / End",
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
      "cmd": "Ctrl+Left/Right / Alt+B/F",
      "en": "Move by word",
      "zh": "按单词左右移动光标",
      "id": "36aa3d242bac7ef4",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/ · Ctrl+Left/Right / Alt+B/F",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "移动",
        "重命名",
        "改名",
        "按单词左右移动光标",
        "Move by word",
        "Ctrl+Left/Right"
      ],
      "examples": [
        {
          "value": "按 Ctrl+Left/Right / Alt+B/F",
          "description": "按单词左右移动光标",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要按单词左右移动光标时",
          "goal": "按单词左右移动光标",
          "expected": "操作后，工具完成“按单词左右移动光标”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/ · Ctrl+Left/Right / Alt+B/F",
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
      "cmd": "Ctrl+K",
      "en": "Delete to line end",
      "zh": "删除光标到行末",
      "id": "8195095967b515f2",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/ · Ctrl+K",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "删除",
        "移除",
        "清理",
        "删除光标到行末",
        "Delete to line end",
        "Ctrl+K"
      ],
      "examples": [
        {
          "value": "按 Ctrl+K",
          "description": "删除光标到行末",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要删除光标到行末时",
          "goal": "删除光标到行末",
          "expected": "操作后，工具完成“删除光标到行末”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/ · Ctrl+K",
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
      "cmd": "Ctrl+U",
      "en": "Delete to line start",
      "zh": "删除光标到行首",
      "id": "40022bd2383ac182",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/ · Ctrl+U",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "删除",
        "移除",
        "清理",
        "删除光标到行首",
        "Delete to line start",
        "Ctrl+U"
      ],
      "examples": [
        {
          "value": "按 Ctrl+U",
          "description": "删除光标到行首",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要删除光标到行首时",
          "goal": "删除光标到行首",
          "expected": "操作后，工具完成“删除光标到行首”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/ · Ctrl+U",
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
      "cmd": "Ctrl+W / Alt+Backspace",
      "en": "Delete previous word",
      "zh": "删除前一个单词",
      "id": "862087e773ae931f",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/ · Ctrl+W / Alt+Backspace",
          "checkedAt": "2026-07-13"
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
          "value": "按 Ctrl+W / Alt+Backspace",
          "description": "删除前一个单词",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要删除前一个单词时",
          "goal": "删除前一个单词",
          "expected": "操作后，工具完成“删除前一个单词”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/ · Ctrl+W / Alt+Backspace",
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
      "cmd": "Alt+D / Ctrl+Delete",
      "en": "Delete next word",
      "zh": "删除后一个单词",
      "id": "8c754651fcd2ef1a",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/ · Alt+D / Ctrl+Delete",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "删除",
        "移除",
        "清理",
        "删除后一个单词",
        "Delete next word",
        "Alt+D"
      ],
      "examples": [
        {
          "value": "按 Alt+D / Ctrl+Delete",
          "description": "删除后一个单词",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要删除后一个单词时",
          "goal": "删除后一个单词",
          "expected": "操作后，工具完成“删除后一个单词”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/ · Alt+D / Ctrl+Delete",
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
      "cmd": "Ctrl+Z / Cmd+Z / Alt+Z",
      "en": "Undo",
      "zh": "撤销输入框内最近一次编辑",
      "id": "44cefd10df2319a6",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/ · Ctrl+Z / Cmd+Z / Alt+Z",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "撤销输入框内最近一次编辑",
        "Undo",
        "Ctrl+Z"
      ],
      "examples": [
        {
          "value": "按 Ctrl+Z / Cmd+Z / Alt+Z",
          "description": "撤销输入框内最近一次编辑",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要撤销输入框内最近一次编辑时",
          "goal": "撤销输入框内最近一次编辑",
          "expected": "操作后，工具完成“撤销输入框内最近一次编辑”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/ · Ctrl+Z / Cmd+Z / Alt+Z",
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
      "cmd": "Ctrl+Shift+Z / Shift+Cmd+Z",
      "en": "Redo",
      "zh": "重做被撤销的编辑",
      "id": "e74b558f9b3d7565",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/ · Ctrl+Shift+Z / Shift+Cmd+Z",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "重做被撤销的编辑",
        "Redo",
        "Ctrl+Shift+Z"
      ],
      "examples": [
        {
          "value": "按 Ctrl+Shift+Z / Shift+Cmd+Z",
          "description": "重做被撤销的编辑",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/ · Ctrl+Shift+Z / Shift+Cmd+Z",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Gemini CLI中需要重做被撤销的编辑，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Ctrl+Shift+Z / Shift+Cmd+Z”重做被撤销的编辑。",
          "expected": "快捷键触发后，当前界面完成“重做被撤销的编辑”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Shift+Up/Down",
      "en": "Scroll content",
      "zh": "上下滚动内容",
      "id": "5f5ed37902a6c8d9",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/ · Shift+Up/Down",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "上下滚动内容",
        "Scroll content",
        "Shift+Up/Down"
      ],
      "examples": [
        {
          "value": "按 Shift+Up/Down",
          "description": "上下滚动内容",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/ · Shift+Up/Down",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Gemini CLI中需要上下滚动内容，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Shift+Up/Down”上下滚动内容。",
          "expected": "快捷键触发后，当前界面完成“上下滚动内容”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Page Up/Down",
      "en": "Scroll by page",
      "zh": "按页滚动",
      "id": "26882f41aa7fbb65",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/ · Page Up/Down",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "按页滚动",
        "Scroll by page",
        "Page"
      ],
      "examples": [
        {
          "value": "按 Page Up/Down",
          "description": "按页滚动",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/ · Page Up/Down",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Gemini CLI中需要按页滚动，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Page Up/Down”按页滚动。",
          "expected": "快捷键触发后，当前界面完成“按页滚动”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl+P / Ctrl+N",
      "en": "Previous/next history",
      "zh": "显示历史中的上一条/下一条",
      "id": "a517ec15440560d7",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/ · Ctrl+P / Ctrl+N",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "显示历史中的上一条/下一条",
        "Previous/next history",
        "Ctrl+P"
      ],
      "examples": [
        {
          "value": "按 Ctrl+P / Ctrl+N",
          "description": "显示历史中的上一条/下一条",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/ · Ctrl+P / Ctrl+N",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Gemini CLI中需要显示历史中的上一条/下一条，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Ctrl+P / Ctrl+N”显示历史中的上一条/下一条。",
          "expected": "快捷键触发后，当前界面完成“显示历史中的上一条/下一条”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl+R",
      "en": "Reverse search history",
      "zh": "反向搜索历史记录",
      "id": "e99b73b7ac6ff088",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/ · Ctrl+R",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "搜索",
        "查找",
        "定位",
        "反向搜索历史记录",
        "Reverse search history",
        "Ctrl+R"
      ],
      "examples": [
        {
          "value": "按 Ctrl+R",
          "description": "反向搜索历史记录",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/ · Ctrl+R",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Gemini CLI中需要反向搜索历史记录，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Ctrl+R”反向搜索历史记录。",
          "expected": "快捷键触发后，当前界面完成“反向搜索历史记录”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Tab（任务运行时）",
      "en": "Queue message",
      "zh": "把当前输入排队，等当前任务结束后处理",
      "id": "1e91a253957735c9",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/ · Tab（任务运行时）",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "把当前输入排队，等当前任务结束后处理",
        "Queue message",
        "Tab（任务运行时）"
      ],
      "examples": [
        {
          "value": "按 Tab（任务运行时）",
          "description": "把当前输入排队，等当前任务结束后处理",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/ · Tab（任务运行时）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Gemini CLI中需要把当前输入排队，等当前任务结束后处理，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Tab（任务运行时）”把当前输入排队，等当前任务结束后处理。",
          "expected": "快捷键触发后，当前界面完成“把当前输入排队，等当前任务结束后处理”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl+Enter / Alt+Enter / Shift+Enter / Ctrl+J",
      "en": "Newline without submit",
      "zh": "换行不发送（多种按键组合都可以）",
      "id": "dfc9ebc77d4a9932",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/ · Ctrl+Enter / Alt+Enter / Shift+Enter / Ctrl+J",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "换行不发送（多种按键组合都可以）",
        "Newline without submit",
        "Ctrl+Enter"
      ],
      "examples": [
        {
          "value": "按 Ctrl+Enter / Alt+Enter / Shift+Enter / Ctrl+J",
          "description": "换行不发送（多种按键组合都可以）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/ · Ctrl+Enter / Alt+Enter / Shift+Enter / Ctrl+J",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Gemini CLI中需要换行不发送（多种按键组合都可以），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Ctrl+Enter / Alt+Enter / Shift+Enter / Ctrl+J”换行不发送（多种按键组合都可以）。",
          "expected": "快捷键触发后，当前界面完成“换行不发送（多种按键组合都可以）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl+G / Ctrl+Shift+G",
      "en": "Open external editor",
      "zh": "在外部编辑器中打开当前提示词或计划",
      "id": "ce9118a01050c0db",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/ · Ctrl+G / Ctrl+Shift+G",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "在外部编辑器中打开当前提示词或计划",
        "Open external editor",
        "Ctrl+G"
      ],
      "examples": [
        {
          "value": "按 Ctrl+G / Ctrl+Shift+G",
          "description": "在外部编辑器中打开当前提示词或计划",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/ · Ctrl+G / Ctrl+Shift+G",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Gemini CLI中需要在外部编辑器中打开当前提示词或计划，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Ctrl+G / Ctrl+Shift+G”在外部编辑器中打开当前提示词或计划。",
          "expected": "快捷键触发后，当前界面完成“在外部编辑器中打开当前提示词或计划”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl+V / Cmd+V / Alt+V",
      "en": "Paste from clipboard",
      "zh": "从剪贴板粘贴",
      "id": "c03e18aeab350c64",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/ · Ctrl+V / Cmd+V / Alt+V",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "从剪贴板粘贴",
        "Paste from clipboard",
        "Ctrl+V"
      ],
      "examples": [
        {
          "value": "按 Ctrl+V / Cmd+V / Alt+V",
          "description": "从剪贴板粘贴",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/ · Ctrl+V / Cmd+V / Alt+V",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Gemini CLI中需要从剪贴板粘贴，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Ctrl+V / Cmd+V / Alt+V”从剪贴板粘贴。",
          "expected": "快捷键触发后，当前界面完成“从剪贴板粘贴”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "\\ + Enter（行末）",
      "en": "Newline in single-line mode",
      "zh": "单行模式下换行而不退出该模式",
      "id": "99fe70ce25dc1962",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/ · \\ + Enter（行末）",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "单行模式下换行而不退出该模式",
        "Newline in single-line mode",
        "\\"
      ],
      "examples": [
        {
          "value": "按 \\ + Enter（行末）",
          "description": "单行模式下换行而不退出该模式",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/ · \\ + Enter（行末）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Gemini CLI中需要单行模式下换行而不退出该模式，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 \\ + Enter（行末）”单行模式下换行而不退出该模式。",
          "expected": "快捷键触发后，当前界面完成“单行模式下换行而不退出该模式”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "F12",
      "en": "Toggle debug console",
      "zh": "切换调试控制台，查看详细错误信息",
      "id": "4199917c377794ae",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/ · F12",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "切换调试控制台，查看详细错误信息",
        "Toggle debug console",
        "F12"
      ],
      "examples": [
        {
          "value": "按 F12",
          "description": "切换调试控制台，查看详细错误信息",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/ · F12",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Gemini CLI中需要切换调试控制台，查看详细错误信息，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 F12”切换调试控制台，查看详细错误信息。",
          "expected": "快捷键触发后，当前界面完成“切换调试控制台，查看详细错误信息”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl+T",
      "en": "Toggle full TODO list",
      "zh": "显示/隐藏完整任务清单",
      "id": "e229b3866277a7cc",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/ · Ctrl+T",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "显示/隐藏完整任务清单",
        "Toggle full TODO list",
        "Ctrl+T"
      ],
      "examples": [
        {
          "value": "按 Ctrl+T",
          "description": "显示/隐藏完整任务清单",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/ · Ctrl+T",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Gemini CLI中需要显示/隐藏完整任务清单，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Ctrl+T”显示/隐藏完整任务清单。",
          "expected": "快捷键触发后，当前界面完成“显示/隐藏完整任务清单”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "F4",
      "en": "Show IDE context detail",
      "zh": "显示IDE上下文详情",
      "id": "acf50e83d03489b0",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/ · F4",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "显示IDE上下文详情",
        "Show IDE context detail",
        "F4"
      ],
      "examples": [
        {
          "value": "按 F4",
          "description": "显示IDE上下文详情",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/ · F4",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Gemini CLI中需要显示IDE上下文详情，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 F4”显示IDE上下文详情。",
          "expected": "快捷键触发后，当前界面完成“显示IDE上下文详情”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Alt+M",
      "en": "Toggle Markdown rendering",
      "zh": "切换Markdown渲染显示",
      "id": "b91275747af82d0d",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/ · Alt+M",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "切换Markdown渲染显示",
        "Toggle Markdown rendering",
        "Alt+M"
      ],
      "examples": [
        {
          "value": "按 Alt+M",
          "description": "切换Markdown渲染显示",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/ · Alt+M",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Gemini CLI中需要切换Markdown渲染显示，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Alt+M”切换Markdown渲染显示。",
          "expected": "快捷键触发后，当前界面完成“切换Markdown渲染显示”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl+S",
      "en": "Toggle mouse mode",
      "zh": "切换鼠标模式（滚动和点击）",
      "id": "47cca6ed54cc0c56",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/ · Ctrl+S",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "切换鼠标模式（滚动和点击）",
        "Toggle mouse mode",
        "Ctrl+S"
      ],
      "examples": [
        {
          "value": "按 Ctrl+S",
          "description": "切换鼠标模式（滚动和点击）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/ · Ctrl+S",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Gemini CLI中需要切换鼠标模式（滚动和点击），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Ctrl+S”切换鼠标模式（滚动和点击）。",
          "expected": "快捷键触发后，当前界面完成“切换鼠标模式（滚动和点击）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl+Y",
      "en": "Toggle YOLO mode",
      "zh": "切换YOLO模式（工具调用全自动批准）",
      "id": "79c4325b9959e098",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/ · Ctrl+Y",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "切换YOLO模式（工具调用全自动批准）",
        "Toggle YOLO mode",
        "Ctrl+Y"
      ],
      "examples": [
        {
          "value": "按 Ctrl+Y",
          "description": "切换YOLO模式（工具调用全自动批准）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/ · Ctrl+Y",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Gemini CLI中需要切换YOLO模式（工具调用全自动批准），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Ctrl+Y”切换YOLO模式（工具调用全自动批准）。",
          "expected": "快捷键触发后，当前界面完成“切换YOLO模式（工具调用全自动批准）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Shift+Tab",
      "en": "Cycle approval modes",
      "zh": "循环切换审批模式：default → auto_edit → plan（只读）",
      "id": "b7044dad7c1e183a",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/ · Shift+Tab",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "循环切换审批模式：default → auto_edit → plan（只读）",
        "Cycle approval modes",
        "Shift+Tab"
      ],
      "examples": [
        {
          "value": "按 Shift+Tab",
          "description": "循环切换审批模式：default → auto_edit → plan（只读）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/ · Shift+Tab",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Gemini CLI中需要循环切换审批模式：default → auto_edit → plan（只读），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Shift+Tab”循环切换审批模式：default → auto_edit → plan（只读）。",
          "expected": "快捷键触发后，当前界面完成“循环切换审批模式：default → auto_edit → plan（只读）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl+O",
      "en": "Expand/collapse paste or output",
      "zh": "展开/折叠粘贴占位内容或长输出",
      "id": "9ba5882068e6b108",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/ · Ctrl+O",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "展开/折叠粘贴占位内容或长输出",
        "Expand/collapse paste or output",
        "Ctrl+O"
      ],
      "examples": [
        {
          "value": "按 Ctrl+O",
          "description": "展开/折叠粘贴占位内容或长输出",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/ · Ctrl+O",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Gemini CLI中需要展开/折叠粘贴占位内容或长输出，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Ctrl+O”展开/折叠粘贴占位内容或长输出。",
          "expected": "快捷键触发后，当前界面完成“展开/折叠粘贴占位内容或长输出”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl+L",
      "en": "Clear screen and redraw",
      "zh": "清空终端屏幕并重绘UI",
      "id": "e7fbe5a1c5615ddc",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/ · Ctrl+L",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "清空终端屏幕并重绘UI",
        "Clear screen and redraw",
        "Ctrl+L"
      ],
      "examples": [
        {
          "value": "按 Ctrl+L",
          "description": "清空终端屏幕并重绘UI",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/ · Ctrl+L",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Gemini CLI中需要清空终端屏幕并重绘UI，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Ctrl+L”清空终端屏幕并重绘UI。",
          "expected": "快捷键触发后，当前界面完成“清空终端屏幕并重绘UI”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "R / Shift+R",
      "en": "Restart application",
      "zh": "重启应用",
      "id": "bf9dbfa7d20370d9",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/ · R / Shift+R",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "重启应用",
        "Restart application",
        "R"
      ],
      "examples": [
        {
          "value": "按 R / Shift+R",
          "description": "重启应用",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/ · R / Shift+R",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Gemini CLI中需要重启应用，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 R / Shift+R”重启应用。",
          "expected": "快捷键触发后，当前界面完成“重启应用”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl+Z（应用层）",
      "en": "Suspend CLI to background",
      "zh": "挂起CLI并放到后台",
      "id": "e7e855e9e9a023d6",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/ · Ctrl+Z（应用层）",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "挂起CLI并放到后台",
        "Suspend CLI to background",
        "Ctrl+Z（应用层）"
      ],
      "examples": [
        {
          "value": "按 Ctrl+Z（应用层）",
          "description": "挂起CLI并放到后台",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/ · Ctrl+Z（应用层）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Gemini CLI中需要挂起CLI并放到后台，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Ctrl+Z（应用层）”挂起CLI并放到后台。",
          "expected": "快捷键触发后，当前界面完成“挂起CLI并放到后台”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Space（按住）",
      "en": "Push-to-talk voice mode",
      "zh": "按住进行语音输入",
      "id": "baff9afa5c6f7bd3",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/ · Space（按住）",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "按住进行语音输入",
        "Push-to-talk voice mode",
        "Space（按住）"
      ],
      "examples": [
        {
          "value": "按 Space（按住）",
          "description": "按住进行语音输入",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/ · Space（按住）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Gemini CLI中需要按住进行语音输入，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Space（按住）”按住进行语音输入。",
          "expected": "快捷键触发后，当前界面完成“按住进行语音输入”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "? （空提示符下）",
      "en": "Toggle shortcuts panel",
      "zh": "显示/隐藏快捷键速查面板",
      "id": "4506aa9886aa1602",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/ · ? （空提示符下）",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "显示/隐藏快捷键速查面板",
        "Toggle shortcuts panel",
        "?"
      ],
      "examples": [
        {
          "value": "按 ? （空提示符下）",
          "description": "显示/隐藏快捷键速查面板",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/ · ? （空提示符下）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Gemini CLI中需要显示/隐藏快捷键速查面板，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 ? （空提示符下）”显示/隐藏快捷键速查面板。",
          "expected": "快捷键触发后，当前界面完成“显示/隐藏快捷键速查面板”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Tab + Tab（输入中）",
      "en": "Toggle minimal/full UI",
      "zh": "在精简和完整UI细节间切换",
      "id": "20488a9bb1ae9123",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/ · Tab + Tab（输入中）",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "在精简和完整UI细节间切换",
        "Toggle minimal/full UI",
        "Tab"
      ],
      "examples": [
        {
          "value": "按 Tab + Tab（输入中）",
          "description": "在精简和完整UI细节间切换",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/ · Tab + Tab（输入中）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Gemini CLI中需要在精简和完整UI细节间切换，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Tab + Tab（输入中）”在精简和完整UI细节间切换。",
          "expected": "快捷键触发后，当前界面完成“在精简和完整UI细节间切换”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Esc Esc（快速两次）",
      "en": "Clear input / rewind",
      "zh": "清空非空输入框；为空时浏览并回退历史交互",
      "id": "babe22d5d8f4d510",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/ · Esc Esc（快速两次）",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "清空非空输入框；为空时浏览并回退历史交互",
        "Clear input / rewind",
        "Esc"
      ],
      "examples": [
        {
          "value": "按 Esc Esc（快速两次）",
          "description": "清空非空输入框；为空时浏览并回退历史交互",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/ · Esc Esc（快速两次）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Gemini CLI中需要清空非空输入框；为空时浏览并回退历史交互，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Esc Esc（快速两次）”清空非空输入框；为空时浏览并回退历史交互。",
          "expected": "快捷键触发后，当前界面完成“清空非空输入框；为空时浏览并回退历史交互”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl+X（计划展示时）",
      "en": "Open plan in external editor",
      "zh": "在外部编辑器中协作编辑/评论实施计划",
      "id": "f6b6ab4b7d7063dd",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/ · Ctrl+X（计划展示时）",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "在外部编辑器中协作编辑/评论实施计划",
        "Open plan in external editor",
        "Ctrl+X（计划展示时）"
      ],
      "examples": [
        {
          "value": "按 Ctrl+X（计划展示时）",
          "description": "在外部编辑器中协作编辑/评论实施计划",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/ · Ctrl+X（计划展示时）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Gemini CLI中需要在外部编辑器中协作编辑/评论实施计划，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Ctrl+X（计划展示时）”在外部编辑器中协作编辑/评论实施计划。",
          "expected": "快捷键触发后，当前界面完成“在外部编辑器中协作编辑/评论实施计划”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl+B",
      "en": "Toggle background shell",
      "zh": "切换当前后台shell的可见性",
      "id": "3ee61c5579cc59ef",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/ · Ctrl+B",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "切换当前后台shell的可见性",
        "Toggle background shell",
        "Ctrl+B"
      ],
      "examples": [
        {
          "value": "按 Ctrl+B",
          "description": "切换当前后台shell的可见性",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/ · Ctrl+B",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Gemini CLI中需要切换当前后台shell的可见性，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Ctrl+B”切换当前后台shell的可见性。",
          "expected": "快捷键触发后，当前界面完成“切换当前后台shell的可见性”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl+K（后台shell列表）",
      "en": "Kill active background shell",
      "zh": "终止当前激活的后台shell",
      "id": "f4c19e68f93b5f31",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/ · Ctrl+K（后台shell列表）",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "终止当前激活的后台shell",
        "Kill active background shell",
        "Ctrl+K（后台shell列表）"
      ],
      "examples": [
        {
          "value": "按 Ctrl+K（后台shell列表）",
          "description": "终止当前激活的后台shell",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/ · Ctrl+K（后台shell列表）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Gemini CLI中需要终止当前激活的后台shell，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Ctrl+K（后台shell列表）”终止当前激活的后台shell。",
          "expected": "快捷键触发后，当前界面完成“终止当前激活的后台shell”对应的动作。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/about",
      "en": "Show version info",
      "zh": "显示版本信息，提交issue时附上",
      "id": "e95fdb68d95969cc",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /about）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "显示版本信息，提交issue时附上",
        "Show version info",
        "/about"
      ],
      "examples": [
        {
          "value": "/about",
          "description": "显示版本信息，提交issue时附上",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /about）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "提交兼容性问题、核对文档或复现故障前，需要先确认当前安装版本。",
          "goal": "显示版本信息，提交issue时附上；使用 /about 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“显示版本信息，提交issue时附上”对应的信息。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/agents",
      "en": "Manage subagents",
      "zh": "管理本地和远程子代理",
      "id": "341bd529b0f6a6e8",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /agents [list|reload|enable|disable|config]）",
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
        "管理本地和远程子代理",
        "Manage subagents"
      ],
      "examples": [
        {
          "value": "/agents list",
          "description": "列出当前可用的本地与远程子代理",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "gemini-commands",
            "gemini-keyboard"
          ],
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /agents [list|reload|enable|disable|config]）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先管理本地和远程子代理，确认当前状态与预期一致。",
          "goal": "管理本地和远程子代理；使用 /agents list 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“列出当前可用的本地与远程子代理”对应的信息。"
        },
        {
          "value": "/agents enable",
          "description": "启用某个子代理，使其参与任务",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "gemini-commands",
            "gemini-keyboard"
          ],
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /agents [list|reload|enable|disable|config]）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先管理本地和远程子代理，确认当前状态与预期一致。",
          "goal": "管理本地和远程子代理；使用 /agents enable 完成这一步。",
          "expected": "执行成功后，启用某个子代理，使其参与任务。"
        },
        {
          "value": "/agents config",
          "description": "查看或调整子代理的配置",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "gemini-commands",
            "gemini-keyboard"
          ],
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /agents [list|reload|enable|disable|config]）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先管理本地和远程子代理，确认当前状态与预期一致。",
          "goal": "管理本地和远程子代理；使用 /agents config 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“查看或调整子代理的配置”对应的信息。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/auth",
      "en": "Change auth method",
      "zh": "打开对话框切换认证方式",
      "id": "a4a9011d4e23f7e9",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /auth）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "打开对话框切换认证方式",
        "Change auth method",
        "/auth"
      ],
      "examples": [
        {
          "value": "/auth",
          "description": "打开对话框切换认证方式",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /auth）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "首次使用、凭据失效或切换账户后，需要重新完成身份验证。",
          "goal": "打开对话框切换认证方式；使用 /auth 完成这一步。",
          "expected": "执行成功后，打开对话框切换认证方式。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/bug",
      "en": "File a GitHub issue",
      "zh": "提交Gemini CLI的issue报告",
      "id": "a6e50b5d62de7b8f",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /bug）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "提交Gemini CLI的issue报告",
        "File a GitHub issue",
        "/bug"
      ],
      "examples": [
        {
          "value": "/bug",
          "description": "提交Gemini CLI的issue报告",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /bug）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前 Gemini CLI 会话正在处理与“提交Gemini CLI的issue报告”直接相关的任务，需要在不中断上下文的情况下执行该操作。",
          "goal": "提交Gemini CLI的issue报告；使用 /bug 完成这一步。",
          "expected": "执行成功后，提交Gemini CLI的issue报告。"
        }
      ]
    },
    {
      "id": "gemini-chat",
      "cat": "slash",
      "cmd": "/chat",
      "en": "Session browser & checkpoints",
      "zh": "浏览历史会话和手动检查点（功能同/resume）",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /chat（/resume别名））",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "会话",
        "恢复会话",
        "历史会话",
        "浏览历史会话和手动检查点（功能同/resume）",
        "Session browser & checkpoints",
        "/chat（/resume别名）"
      ],
      "examples": [
        {
          "value": "/chat",
          "description": "浏览历史会话和手动检查点并恢复",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "gemini-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /chat（/resume别名））",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "先前的工作会话被中断后，需要浏览历史会话和手动检查点（功能同/resume），而不是重新开始。",
          "goal": "浏览历史会话和手动检查点（功能同/resume）；使用 /chat 完成这一步。",
          "expected": "执行成功后，浏览历史会话和手动检查点并恢复。"
        }
      ]
    },
    {
      "id": "gemini-clear",
      "cat": "slash",
      "cmd": "/clear",
      "en": "Clear terminal screen",
      "zh": "清空终端屏幕和可见历史（快捷键 Ctrl+L）",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /clear）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "清空终端屏幕和可见历史（快捷键 Ctrl+L）",
        "Clear terminal screen",
        "/clear"
      ],
      "examples": [
        {
          "value": "/clear",
          "description": "清空终端屏幕和可见历史（快捷键 Ctrl+L）",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "gemini-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /clear）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前 Gemini CLI 会话正在处理与“清空终端屏幕和可见历史（快捷键 Ctrl+L）”直接相关的任务，需要在不中断上下文的情况下执行该操作。",
          "goal": "清空终端屏幕和可见历史（快捷键 Ctrl+L）；使用 /clear 完成这一步。",
          "expected": "执行成功后，清空终端屏幕和可见历史（快捷键 Ctrl+L）。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/commands",
      "en": "Manage custom commands",
      "zh": "管理从.toml文件加载的自定义命令",
      "id": "24f41f74a75c7c34",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /commands [list|reload]）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "管理从.toml文件加载的自定义命令",
        "Manage custom commands",
        "/commands"
      ],
      "examples": [
        {
          "value": "/commands list",
          "description": "列出从 .toml 文件加载的自定义命令",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "gemini-commands",
            "gemini-keyboard"
          ],
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /commands [list|reload]）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先管理从.toml文件加载的自定义命令，确认当前状态与预期一致。",
          "goal": "管理从.toml文件加载的自定义命令；使用 /commands list 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“列出从 .toml 文件加载的自定义命令”对应的信息。"
        },
        {
          "value": "/commands reload",
          "description": "改动 .toml 后重新加载自定义命令，无需重启",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "gemini-commands",
            "gemini-keyboard"
          ],
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /commands [list|reload]）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先管理从.toml文件加载的自定义命令，确认当前状态与预期一致。",
          "goal": "管理从.toml文件加载的自定义命令；使用 /commands reload 完成这一步。",
          "expected": "执行成功后，改动 .toml 后重新加载自定义命令，无需重启。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/compress",
      "en": "Summarize chat context",
      "zh": "用摘要替换整个对话上下文，节省后续token",
      "id": "caf5f35e5809a0ea",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /compress）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "替换",
        "取代",
        "文本替换",
        "压缩",
        "精简上下文",
        "节省上下文",
        "用摘要替换整个对话上下文，节省后续token",
        "Summarize chat context"
      ],
      "examples": [
        {
          "value": "/compress",
          "description": "压缩当前对话上下文，适合长会话继续工作",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "gemini-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /compress）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前 Gemini CLI 会话正在处理与“用摘要替换整个对话上下文，节省后续token”直接相关的任务，需要在不中断上下文的情况下执行该操作。",
          "goal": "用摘要替换整个对话上下文，节省后续token；使用 /compress 完成这一步。",
          "expected": "执行成功后，压缩当前对话上下文，适合长会话继续工作。"
        }
      ]
    },
    {
      "id": "gemini-copy",
      "cat": "slash",
      "cmd": "/copy",
      "en": "Copy last output",
      "zh": "复制最近一次输出到剪贴板（需要系统剪贴板工具）",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /copy）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "复制",
        "克隆",
        "拷贝",
        "复制最近一次输出到剪贴板（需要系统剪贴板工具）",
        "Copy last output",
        "/copy"
      ],
      "examples": [
        {
          "value": "/copy",
          "description": "把最近一次输出复制到剪贴板",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "gemini-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /copy）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前 Gemini CLI 会话正在处理与“复制最近一次输出到剪贴板（需要系统剪贴板工具）”直接相关的任务，需要在不中断上下文的情况下执行该操作。",
          "goal": "复制最近一次输出到剪贴板（需要系统剪贴板工具）；使用 /copy 完成这一步。",
          "expected": "执行成功后，把最近一次输出复制到剪贴板。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/directory",
      "en": "Manage workspace directories",
      "zh": "管理多目录工作区支持",
      "id": "120c6fb8ab427d66",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /directory add|show（别名/dir））",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "管理多目录工作区支持",
        "Manage workspace directories",
        "/directory"
      ],
      "examples": [
        {
          "value": "/directory add",
          "description": "管理多目录工作区支持",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /directory add|show（别名/dir））",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先管理多目录工作区支持，确认当前状态与预期一致。",
          "goal": "管理多目录工作区支持；使用 /directory add 完成这一步。",
          "expected": "执行成功后，管理多目录工作区支持。"
        }
      ],
      "aliases": [
        "/dir"
      ]
    },
    {
      "cat": "slash",
      "cmd": "/docs",
      "en": "Open documentation",
      "zh": "在浏览器中打开官方文档",
      "id": "f9f7c6e731e2b9da",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /docs）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "帮助",
        "说明",
        "文档",
        "在浏览器中打开官方文档",
        "Open documentation",
        "/docs"
      ],
      "examples": [
        {
          "value": "/docs",
          "description": "在浏览器中打开官方文档",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /docs）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "忘记入口用法或可用参数时，需要在当前工作流中调出官方帮助。",
          "goal": "在浏览器中打开官方文档；使用 /docs 完成这一步。",
          "expected": "执行成功后，在浏览器中打开官方文档。"
        }
      ]
    },
    {
      "id": "gemini-editor",
      "cat": "slash",
      "cmd": "/editor",
      "en": "Select supported editor",
      "zh": "打开对话框选择支持的编辑器",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /editor）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "打开对话框选择支持的编辑器",
        "Select supported editor",
        "/editor"
      ],
      "examples": [
        {
          "value": "/editor",
          "description": "选择用于编写长提示的外部编辑器",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "gemini-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /editor）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前 Gemini CLI 会话正在处理与“打开对话框选择支持的编辑器”直接相关的任务，需要在不中断上下文的情况下执行该操作。",
          "goal": "打开对话框选择支持的编辑器；使用 /editor 完成这一步。",
          "expected": "执行成功后，选择用于编写长提示的外部编辑器。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/extensions",
      "en": "Manage extensions",
      "zh": "管理扩展（安装/列出/更新/启用禁用）",
      "id": "8e5b35d88fb2c6c3",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /extensions [install|list|update|...]）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "管理扩展（安装/列出/更新/启用禁用）",
        "Manage extensions",
        "/extensions"
      ],
      "examples": [
        {
          "value": "/extensions list",
          "description": "列出已安装的扩展及其启用状态",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "gemini-commands",
            "gemini-keyboard"
          ],
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /extensions [install|list|update|...]）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先管理扩展（安装/列出/更新/启用禁用），确认当前状态与预期一致。",
          "goal": "管理扩展（安装/列出/更新/启用禁用）；使用 /extensions list 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“列出已安装的扩展及其启用状态”对应的信息。"
        },
        {
          "value": "/extensions install",
          "description": "安装一个新扩展",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "gemini-commands",
            "gemini-keyboard"
          ],
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /extensions [install|list|update|...]）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先管理扩展（安装/列出/更新/启用禁用），确认当前状态与预期一致。",
          "goal": "管理扩展（安装/列出/更新/启用禁用）；使用 /extensions install 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“安装一个新扩展”对应的信息。"
        },
        {
          "value": "/extensions update",
          "description": "把已安装扩展更新到最新版本",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "gemini-commands",
            "gemini-keyboard"
          ],
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /extensions [install|list|update|...]）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先管理扩展（安装/列出/更新/启用禁用），确认当前状态与预期一致。",
          "goal": "管理扩展（安装/列出/更新/启用禁用）；使用 /extensions update 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“把已安装扩展更新到最新版本”对应的信息。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/help",
      "en": "Show help",
      "zh": "显示帮助信息和可用命令",
      "id": "257de0c49ddd37bd",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /help（别名/?））",
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
        "显示帮助信息和可用命令",
        "Show help"
      ],
      "examples": [
        {
          "value": "/help",
          "description": "显示当前版本支持的命令和快捷键",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "gemini-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /help（别名/?））",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "忘记入口用法或可用参数时，需要在当前工作流中调出官方帮助。",
          "goal": "显示帮助信息和可用命令；使用 /help 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“显示当前版本支持的命令和快捷键”对应的信息。"
        }
      ],
      "aliases": [
        "/?"
      ]
    },
    {
      "cat": "slash",
      "cmd": "/hooks",
      "en": "Manage hooks",
      "zh": "管理生命周期事件钩子",
      "id": "ca56153155d4bad0",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /hooks [enable|disable|list]）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "管理生命周期事件钩子",
        "Manage hooks",
        "/hooks"
      ],
      "examples": [
        {
          "value": "/hooks list",
          "description": "列出已注册的生命周期事件钩子",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "gemini-commands",
            "gemini-keyboard"
          ],
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /hooks [enable|disable|list]）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先管理生命周期事件钩子，确认当前状态与预期一致。",
          "goal": "管理生命周期事件钩子；使用 /hooks list 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“列出已注册的生命周期事件钩子”对应的信息。"
        },
        {
          "value": "/hooks enable",
          "description": "启用钩子，让它在对应事件时触发",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "gemini-commands",
            "gemini-keyboard"
          ],
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /hooks [enable|disable|list]）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先管理生命周期事件钩子，确认当前状态与预期一致。",
          "goal": "管理生命周期事件钩子；使用 /hooks enable 完成这一步。",
          "expected": "执行成功后，启用钩子，让它在对应事件时触发。"
        },
        {
          "value": "/hooks disable",
          "description": "临时停用钩子，但保留其配置",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "gemini-commands",
            "gemini-keyboard"
          ],
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /hooks [enable|disable|list]）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先管理生命周期事件钩子，确认当前状态与预期一致。",
          "goal": "管理生命周期事件钩子；使用 /hooks disable 完成这一步。",
          "expected": "执行成功后，临时停用钩子，但保留其配置。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/ide",
      "en": "Manage IDE integration",
      "zh": "管理IDE集成状态",
      "id": "d5a97a70a319062e",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /ide [enable|disable|install|status]）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "管理IDE集成状态",
        "Manage IDE integration",
        "/ide"
      ],
      "examples": [
        {
          "value": "/ide status",
          "description": "查看当前 IDE 集成是否已连接",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "gemini-commands",
            "gemini-keyboard"
          ],
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /ide [enable|disable|install|status]）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先管理IDE集成状态，确认当前状态与预期一致。",
          "goal": "管理IDE集成状态；使用 /ide status 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“查看当前 IDE 集成是否已连接”对应的信息。"
        },
        {
          "value": "/ide install",
          "description": "安装 IDE 伴随插件以启用深度集成",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "gemini-commands",
            "gemini-keyboard"
          ],
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /ide [enable|disable|install|status]）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先管理IDE集成状态，确认当前状态与预期一致。",
          "goal": "管理IDE集成状态；使用 /ide install 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“安装 IDE 伴随插件以启用深度集成”对应的信息。"
        },
        {
          "value": "/ide enable",
          "description": "启用 IDE 集成，共享编辑器上下文",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "gemini-commands",
            "gemini-keyboard"
          ],
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /ide [enable|disable|install|status]）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先管理IDE集成状态，确认当前状态与预期一致。",
          "goal": "管理IDE集成状态；使用 /ide enable 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“启用 IDE 集成，共享编辑器上下文”对应的信息。"
        }
      ]
    },
    {
      "id": "gemini-init",
      "cat": "slash",
      "cmd": "/init",
      "en": "Generate GEMINI.md",
      "zh": "分析当前目录生成定制化的项目说明文件",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /init）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "创建",
        "新建",
        "初始化",
        "分析当前目录生成定制化的项目说明文件",
        "Generate GEMINI.md",
        "/init"
      ],
      "examples": [
        {
          "value": "/init",
          "description": "分析当前目录，生成定制化的项目说明文件",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "gemini-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /init）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "忘记入口用法或可用参数时，需要在当前工作流中调出官方帮助。",
          "goal": "分析当前目录生成定制化的项目说明文件；使用 /init 完成这一步。",
          "expected": "执行成功后，分析当前目录，生成定制化的项目说明文件。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/mcp",
      "en": "Manage MCP servers",
      "zh": "管理已配置的MCP服务器",
      "id": "7e1b35f37ba36037",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /mcp [list|auth|reload|schema]）",
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
        "管理已配置的MCP服务器",
        "Manage MCP servers"
      ],
      "examples": [
        {
          "value": "/mcp list",
          "description": "列出已配置的 MCP 服务器及连接状态",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "gemini-commands",
            "gemini-keyboard"
          ],
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /mcp [list|auth|reload|schema]）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先管理已配置的MCP服务器，确认当前状态与预期一致。",
          "goal": "管理已配置的MCP服务器；使用 /mcp list 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“列出已配置的 MCP 服务器及连接状态”对应的信息。"
        },
        {
          "value": "/mcp auth",
          "description": "对需要 OAuth 的 MCP 服务器发起认证",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "gemini-commands",
            "gemini-keyboard"
          ],
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /mcp [list|auth|reload|schema]）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先管理已配置的MCP服务器，确认当前状态与预期一致。",
          "goal": "管理已配置的MCP服务器；使用 /mcp auth 完成这一步。",
          "expected": "执行成功后，对需要 OAuth 的 MCP 服务器发起认证。"
        },
        {
          "value": "/mcp reload",
          "description": "修改配置后重新加载 MCP 服务器",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "gemini-commands",
            "gemini-keyboard"
          ],
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /mcp [list|auth|reload|schema]）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先管理已配置的MCP服务器，确认当前状态与预期一致。",
          "goal": "管理已配置的MCP服务器；使用 /mcp reload 完成这一步。",
          "expected": "执行成功后，修改配置后重新加载 MCP 服务器。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/memory",
      "en": "Manage hierarchical memory",
      "zh": "管理从GEMINI.md加载的层级记忆",
      "id": "0747ca7a77a6bc97",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /memory [show|refresh|list]）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "管理从GEMINI.md加载的层级记忆",
        "Manage hierarchical memory",
        "/memory"
      ],
      "examples": [
        {
          "value": "/memory show",
          "description": "查看当前从 GEMINI.md 加载的记忆内容",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "gemini-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /memory [show|refresh|list]）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先管理从GEMINI.md加载的层级记忆，确认当前状态与预期一致。",
          "goal": "管理从GEMINI.md加载的层级记忆；使用 /memory show 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“查看当前从 GEMINI.md 加载的记忆内容”对应的信息。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/model",
      "en": "Manage model config",
      "zh": "配置或设置使用的模型",
      "id": "ff5d79bf2b78fa19",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /model [manage|set]）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "配置",
        "设置",
        "偏好",
        "模型",
        "切换模型",
        "模型选择",
        "配置或设置使用的模型",
        "Manage model config"
      ],
      "examples": [
        {
          "value": "/model set",
          "description": "进入模型设置流程并选择当前使用的模型",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "gemini-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /model [manage|set]）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前环境的默认设置不适合这次任务，需要配置或设置使用的模型后再继续工作。",
          "goal": "配置或设置使用的模型；使用 /model set 完成这一步。",
          "expected": "执行成功后，进入模型设置流程并选择当前使用的模型。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/permissions",
      "en": "Manage folder trust",
      "zh": "管理目录信任设置",
      "id": "06a4ec92030116f8",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /permissions trust）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "配置",
        "设置",
        "偏好",
        "管理目录信任设置",
        "Manage folder trust",
        "/permissions"
      ],
      "examples": [
        {
          "value": "/permissions trust",
          "description": "管理目录信任设置",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /permissions trust）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前环境的默认设置不适合这次任务，需要管理目录信任设置后再继续工作。",
          "goal": "管理目录信任设置；使用 /permissions trust 完成这一步。",
          "expected": "执行成功后，管理目录信任设置。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/plan",
      "en": "Switch to Plan Mode",
      "zh": "切换到只读计划模式，查看已生成的计划",
      "id": "ec6b052ae3f87624",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /plan [copy]）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "复制",
        "克隆",
        "拷贝",
        "查看",
        "显示",
        "状态",
        "切换到只读计划模式，查看已生成的计划",
        "Switch to Plan Mode"
      ],
      "examples": [
        {
          "value": "/plan copy",
          "description": "切换到只读计划模式，查看已生成的计划",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /plan [copy]）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先切换到只读计划模式，查看已生成的计划，确认当前状态与预期一致。",
          "goal": "切换到只读计划模式，查看已生成的计划；使用 /plan copy 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“切换到只读计划模式，查看已生成的计划”对应的信息。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/policies",
      "en": "List active policies",
      "zh": "按模式列出所有激活的策略",
      "id": "f409731fc097c2c2",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /policies list）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "按模式列出所有激活的策略",
        "List active policies",
        "/policies"
      ],
      "examples": [
        {
          "value": "/policies list",
          "description": "按模式列出所有激活的策略",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /policies list）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先按模式列出所有激活的策略，确认当前状态与预期一致。",
          "goal": "按模式列出所有激活的策略；使用 /policies list 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“按模式列出所有激活的策略”对应的信息。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/privacy",
      "en": "Privacy notice & consent",
      "zh": "显示隐私声明并选择数据收集同意",
      "id": "d13d05dc06307777",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /privacy）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "显示隐私声明并选择数据收集同意",
        "Privacy notice & consent",
        "/privacy"
      ],
      "examples": [
        {
          "value": "/privacy",
          "description": "显示隐私声明并选择数据收集同意",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /privacy）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先显示隐私声明并选择数据收集同意，确认当前状态与预期一致。",
          "goal": "显示隐私声明并选择数据收集同意；使用 /privacy 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“显示隐私声明并选择数据收集同意”对应的信息。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/quit",
      "en": "Exit and optionally wipe history",
      "zh": "退出CLI，加--delete可同时永久删除本次会话记录",
      "id": "026fadf5fde6300a",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/ · \"/quit (or /exit)\" · --delete（原文：\"Exit and permanently delete the current session's history and temporary files (chat recording, tool outputs).\"）",
          "checkedAt": "2026-07-02"
        }
      ],
      "keywords": [
        "删除",
        "移除",
        "清理",
        "会话",
        "恢复会话",
        "历史会话",
        "退出CLI，加--delete可同时永久删除本次会话记录",
        "Exit and optionally wipe history"
      ],
      "examples": [
        {
          "value": "/quit --delete",
          "description": "退出CLI，加--delete可同时永久删除本次会话记录",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "warning": "此操作可能删除或覆盖数据，请先确认目标并做好备份",
          "riskLevels": [
            "deleteOrOverwrite"
          ],
          "caveat": "此操作可能删除或覆盖数据，请先确认目标并做好备份；先用只读命令预览目标并保留备份",
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/ · \"/quit (or /exit)\" · --delete（原文：\"Exit and permanently delete the current session's history and temporary files (chat recording, tool outputs).\"）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "先前的工作会话被中断后，需要退出CLI，加--delete可同时永久删除本次会话记录，而不是重新开始。",
          "goal": "退出CLI，加--delete可同时永久删除本次会话记录；使用 /quit --delete 完成这一步。",
          "expected": "操作后，界面完成“退出CLI，加--delete可同时永久删除本次会话记录”对应的变化。"
        }
      ],
      "aliases": [
        "/exit"
      ]
    },
    {
      "id": "gemini-restore",
      "cat": "slash",
      "cmd": "/restore",
      "en": "Restore files before a tool ran",
      "zh": "把项目文件恢复到某次工具执行前的状态",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /restore [tool_call_id]）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "把项目文件恢复到某次工具执行前的状态",
        "Restore files before a tool ran",
        "/restore"
      ],
      "examples": [
        {
          "value": "/restore",
          "description": "把项目文件恢复到某次工具执行前的状态",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "gemini-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /restore [tool_call_id]）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "先前的工作会话被中断后，需要把项目文件恢复到某次工具执行前的状态，而不是重新开始。",
          "goal": "把项目文件恢复到某次工具执行前的状态；使用 /restore 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“把项目文件恢复到某次工具执行前的状态”对应的信息。"
        }
      ]
    },
    {
      "id": "gemini-rewind",
      "cat": "slash",
      "cmd": "/rewind",
      "en": "Navigate back through history",
      "zh": "回溯对话历史，可选回退聊天和/或代码改动（快捷键Esc Esc）",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /rewind）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "回溯对话历史，可选回退聊天和/或代码改动（快捷键Esc Esc）",
        "Navigate back through history",
        "/rewind"
      ],
      "examples": [
        {
          "value": "/rewind",
          "description": "回溯对话，可选择回退聊天和/或代码改动（Esc Esc）",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "gemini-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /rewind）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前 Gemini CLI 会话正在处理与“回溯对话历史，可选回退聊天和/或代码改动（快捷键Esc Esc）”直接相关的任务，需要在不中断上下文的情况下执行该操作。",
          "goal": "回溯对话历史，可选回退聊天和/或代码改动（快捷键Esc Esc）；使用 /rewind 完成这一步。",
          "expected": "执行成功后，回溯对话，可选择回退聊天和/或代码改动（Esc Esc）。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/resume",
      "en": "Browse/resume sessions",
      "zh": "浏览并恢复历史会话，管理手动检查点",
      "id": "7f2b456e09f16cd5",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /resume）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "会话",
        "恢复会话",
        "历史会话",
        "浏览并恢复历史会话，管理手动检查点",
        "Browse/resume sessions",
        "/resume"
      ],
      "examples": [
        {
          "value": "/resume",
          "description": "浏览并恢复之前保存的会话",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "gemini-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /resume）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "先前的工作会话被中断后，需要浏览并恢复历史会话，管理手动检查点，而不是重新开始。",
          "goal": "浏览并恢复历史会话，管理手动检查点；使用 /resume 完成这一步。",
          "expected": "执行成功后，浏览并恢复之前保存的会话。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/settings",
      "en": "Open settings editor",
      "zh": "打开设置编辑器，带校验和引导",
      "id": "feba3bde7df3e178",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /settings）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "配置",
        "设置",
        "偏好",
        "打开设置编辑器，带校验和引导",
        "Open settings editor",
        "/settings"
      ],
      "examples": [
        {
          "value": "/settings",
          "description": "打开带校验和说明的设置编辑器",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "gemini-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /settings）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前环境的默认设置不适合这次任务，需要打开设置编辑器，带校验和引导后再继续工作。",
          "goal": "打开设置编辑器，带校验和引导；使用 /settings 完成这一步。",
          "expected": "执行成功后，打开带校验和说明的设置编辑器。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/shells",
      "en": "Toggle background shells view",
      "zh": "查看和管理后台运行的长进程",
      "id": "1bebeaaaafdd2a3f",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /shells（别名/bashes））",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "查看和管理后台运行的长进程",
        "Toggle background shells view",
        "/shells（别名/bashes）"
      ],
      "examples": [
        {
          "value": "/shells",
          "description": "查看和管理后台运行的长进程",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /shells（别名/bashes））",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先查看和管理后台运行的长进程，确认当前状态与预期一致。",
          "goal": "查看和管理后台运行的长进程；使用 /shells 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“查看和管理后台运行的长进程”对应的信息。"
        }
      ],
      "aliases": [
        "/bashes"
      ]
    },
    {
      "cat": "slash",
      "cmd": "/setup-github",
      "en": "Set up GitHub Actions",
      "zh": "配置GitHub Actions进行issue分类和PR审查",
      "id": "fdac694565130d50",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /setup-github）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "配置",
        "设置",
        "偏好",
        "配置GitHub Actions进行issue分类和PR审查",
        "Set up GitHub Actions",
        "/setup-github"
      ],
      "examples": [
        {
          "value": "/setup-github",
          "description": "配置GitHub Actions进行issue分类和PR审查",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /setup-github）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前环境的默认设置不适合这次任务，需要配置GitHub Actions进行issue分类和PR审查后再继续工作。",
          "goal": "配置GitHub Actions进行issue分类和PR审查；使用 /setup-github 完成这一步。",
          "expected": "执行成功后，配置GitHub Actions进行issue分类和PR审查。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/skills",
      "en": "Manage Agent Skills",
      "zh": "管理提供按需专业能力的Agent Skills",
      "id": "8e962d8d25d95a3d",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /skills [enable|disable|list|reload]）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "管理提供按需专业能力的Agent Skills",
        "Manage Agent Skills",
        "/skills"
      ],
      "examples": [
        {
          "value": "/skills list",
          "description": "列出可用的 Agent Skills",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "gemini-commands",
            "gemini-keyboard"
          ],
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /skills [enable|disable|list|reload]）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先管理提供按需专业能力的Agent Skills，确认当前状态与预期一致。",
          "goal": "管理提供按需专业能力的Agent Skills；使用 /skills list 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“列出可用的 Agent Skills”对应的信息。"
        },
        {
          "value": "/skills enable",
          "description": "启用某个技能，按需提供专业能力",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "gemini-commands",
            "gemini-keyboard"
          ],
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /skills [enable|disable|list|reload]）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先管理提供按需专业能力的Agent Skills，确认当前状态与预期一致。",
          "goal": "管理提供按需专业能力的Agent Skills；使用 /skills enable 完成这一步。",
          "expected": "执行成功后，启用某个技能，按需提供专业能力。"
        },
        {
          "value": "/skills reload",
          "description": "改动技能定义后重新加载",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "gemini-commands",
            "gemini-keyboard"
          ],
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /skills [enable|disable|list|reload]）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先管理提供按需专业能力的Agent Skills，确认当前状态与预期一致。",
          "goal": "管理提供按需专业能力的Agent Skills；使用 /skills reload 完成这一步。",
          "expected": "执行成功后，改动技能定义后重新加载。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/stats",
      "en": "Show usage statistics",
      "zh": "显示会话/模型/工具维度的使用统计",
      "id": "629d065b3549b4e9",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /stats [session|model|tools]）",
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
          "value": "/stats model",
          "description": "查看当前会话按模型统计的用量信息",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "gemini-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /stats [session|model|tools]）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "先前的工作会话被中断后，需要显示会话/模型/工具维度的使用统计，而不是重新开始。",
          "goal": "显示会话/模型/工具维度的使用统计；使用 /stats model 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“查看当前会话按模型统计的用量信息”对应的信息。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/terminal-setup",
      "en": "Configure multiline keybindings",
      "zh": "为VS Code/Cursor/Windsurf配置多行输入按键",
      "id": "f30b89a8fbce37d4",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /terminal-setup）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "配置",
        "设置",
        "偏好",
        "为VS Code/Cursor/Windsurf配置多行输入按键",
        "Configure multiline keybindings",
        "/terminal-setup"
      ],
      "examples": [
        {
          "value": "/terminal-setup",
          "description": "为VS Code/Cursor/Windsurf配置多行输入按键",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /terminal-setup）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前环境的默认设置不适合这次任务，需要为VS Code/Cursor/Windsurf配置多行输入按键后再继续工作。",
          "goal": "为VS Code/Cursor/Windsurf配置多行输入按键；使用 /terminal-setup 完成这一步。",
          "expected": "执行成功后，为VS Code/Cursor/Windsurf配置多行输入按键。"
        }
      ]
    },
    {
      "id": "gemini-theme",
      "cat": "slash",
      "cmd": "/theme",
      "en": "Change visual theme",
      "zh": "切换界面视觉主题",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /theme）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "切换界面视觉主题",
        "Change visual theme",
        "/theme"
      ],
      "examples": [
        {
          "value": "/theme",
          "description": "切换界面视觉主题",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "gemini-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /theme）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前 Gemini CLI 会话正在处理与“切换界面视觉主题”直接相关的任务，需要在不中断上下文的情况下执行该操作。",
          "goal": "切换界面视觉主题；使用 /theme 完成这一步。",
          "expected": "执行成功后，切换界面视觉主题。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/tools",
      "en": "List available tools",
      "zh": "列出当前可用工具，desc显示完整描述",
      "id": "66597ed89b719f59",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /tools [desc|nodesc]）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "列出当前可用工具，desc显示完整描述",
        "List available tools",
        "/tools"
      ],
      "examples": [
        {
          "value": "/tools desc",
          "description": "列出可用工具并显示完整描述",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "gemini-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /tools [desc|nodesc]）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先列出当前可用工具，desc显示完整描述，确认当前状态与预期一致。",
          "goal": "列出当前可用工具，desc显示完整描述；使用 /tools desc 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“列出可用工具并显示完整描述”对应的信息。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/upgrade",
      "en": "Upgrade tier",
      "zh": "打开升级页面提升用量限额（仅Google登录可用）",
      "id": "7e369aa7b01e2be2",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /upgrade）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "打开升级页面提升用量限额（仅Google登录可用）",
        "Upgrade tier",
        "/upgrade"
      ],
      "examples": [
        {
          "value": "/upgrade",
          "description": "打开升级页面提升用量限额（仅Google登录可用）",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /upgrade）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "首次使用、凭据失效或切换账户后，需要重新完成身份验证。",
          "goal": "打开升级页面提升用量限额（仅Google登录可用）；使用 /upgrade 完成这一步。",
          "expected": "执行成功后，打开升级页面提升用量限额（仅Google登录可用）。"
        }
      ]
    },
    {
      "id": "gemini-vim",
      "cat": "slash",
      "cmd": "/vim",
      "en": "Toggle vim mode",
      "zh": "切换Vim风格的导航和编辑模式",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /vim）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "切换Vim风格的导航和编辑模式",
        "Toggle vim mode",
        "/vim"
      ],
      "examples": [
        {
          "value": "/vim",
          "description": "切换 Vim 风格的导航和编辑模式",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "gemini-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/（页面内检索 /vim）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前 Gemini CLI 会话正在处理与“切换Vim风格的导航和编辑模式”直接相关的任务，需要在不中断上下文的情况下执行该操作。",
          "goal": "切换Vim风格的导航和编辑模式；使用 /vim 完成这一步。",
          "expected": "执行成功后，切换 Vim 风格的导航和编辑模式。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "@路径",
      "en": "Inject file/dir content",
      "zh": "把指定文件或目录内容注入当前提示词（支持git感知过滤）",
      "id": "a7e1d5e3264e49ca",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/ · @路径",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "把指定文件或目录内容注入当前提示词（支持git感知过滤）",
        "Inject file/dir content",
        "@路径"
      ],
      "examples": [
        {
          "value": "@src/auth.ts 解释登录流程",
          "description": "把指定文件内容加入当前提示词",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "gemini-keyboard"
          ],
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/ · @路径",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Gemini CLI中需要把指定文件内容加入当前提示词，希望直接通过键盘完成该操作时。",
          "goal": "使用“@src/auth.ts 解释登录流程”把指定文件或目录内容注入当前提示词（支持git感知过滤）。",
          "expected": "快捷键触发后，当前界面完成“把指定文件内容加入当前提示词”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "!命令",
      "en": "Execute shell command",
      "zh": "用bash(Linux/macOS)或powershell(Windows)执行命令",
      "id": "1d674a307a676e58",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/ · !命令",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "用bash(Linux/macOS)或powershell(Windows)执行命令",
        "Execute shell command",
        "!命令"
      ],
      "examples": [
        {
          "value": "!git status",
          "description": "执行本地 shell 命令并显示结果",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "gemini-keyboard"
          ],
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/ · !命令",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Gemini CLI中需要执行本地 shell 命令并显示结果，希望直接通过键盘完成该操作时。",
          "goal": "使用“!git status”用bash(Linux/macOS)或powershell(Windows)执行命令。",
          "expected": "快捷键触发后，当前界面完成“执行本地 shell 命令并显示结果”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "!（单独输入）",
      "en": "Toggle shell mode",
      "zh": "切换Shell模式，之后输入的文本直接当作shell命令解释",
      "id": "3010a79cc6eda64a",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gemini-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://geminicli.com/docs/reference/commands/ · !（单独输入）",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "切换Shell模式，之后输入的文本直接当作shell命令解释",
        "Toggle shell mode",
        "!（单独输入）"
      ],
      "examples": [
        {
          "value": "按 !（单独输入）",
          "description": "切换Shell模式，之后输入的文本直接当作shell命令解释",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gemini-commands",
              "locator": "https://geminicli.com/docs/reference/commands/ · !（单独输入）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Gemini CLI中需要切换Shell模式，之后输入的文本直接当作shell命令解释，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 !（单独输入）”切换Shell模式，之后输入的文本直接当作shell命令解释。",
          "expected": "快捷键触发后，当前界面完成“切换Shell模式，之后输入的文本直接当作shell命令解释”对应的动作。"
        }
      ]
    }
  ]
};
