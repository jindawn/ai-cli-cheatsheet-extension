// Generated from validated structured data. Manual edits must follow data/SCHEMA.md.
window.CHEATSHEET_DATA = window.CHEATSHEET_DATA || {};
window.CHEATSHEET_DATA["codex"] = {
  "meta": {
    "id": "codex",
    "name": "Codex CLI",
    "color": "#74aa9c",
    "source": "第一方来源与确定性官方入口清单，核验于 2026-07-14",
    "sourceUrl": "https://developers.openai.com/codex/cli/",
    "updatedAt": "2026-06-20",
    "contentCheckedAt": "2026-07-02",
    "sourceCheckedAt": "2026-07-12",
    "updatePolicy": "version-driven",
    "verificationStatus": "manual",
    "coverage": "官方入口全集；精确范围、组件与平台限制见 shared/official-inventories/codex.json",
    "platforms": [
      "mac",
      "windows",
      "linux"
    ],
    "builtIn": true,
    "order": 2,
    "sources": [
      {
        "id": "codex-slash-commands",
        "title": "Codex CLI slash commands",
        "url": "https://learn.chatgpt.com/docs/developer-commands?surface=cli",
        "kind": "official-doc",
        "maintainer": "OpenAI",
        "evidenceTier": "first-party",
        "lastVerifiedAt": "2026-07-12",
        "resolvedUrl": "https://learn.chatgpt.com/docs/developer-commands?surface=cli",
        "pageTitle": "Developer commands | ChatGPT Learn",
        "checkedAt": "2026-07-12",
        "purposes": [
          "command-existence",
          "option-semantics",
          "examples"
        ]
      },
      {
        "id": "codex-cli-reference",
        "title": "Codex CLI command-line options",
        "url": "https://learn.chatgpt.com/docs/developer-commands?surface=cli",
        "kind": "official-doc",
        "maintainer": "OpenAI",
        "evidenceTier": "first-party",
        "lastVerifiedAt": "2026-07-12",
        "resolvedUrl": "https://learn.chatgpt.com/docs/developer-commands?surface=cli",
        "pageTitle": "Developer commands | ChatGPT Learn",
        "checkedAt": "2026-07-12",
        "purposes": [
          "command-existence",
          "option-semantics",
          "examples"
        ]
      },
      {
        "id": "codex-features",
        "title": "Codex CLI features",
        "url": "https://learn.chatgpt.com/docs/codex/cli",
        "kind": "official-doc",
        "maintainer": "OpenAI",
        "evidenceTier": "first-party",
        "lastVerifiedAt": "2026-07-12",
        "resolvedUrl": "https://learn.chatgpt.com/docs/codex/cli",
        "pageTitle": "Codex CLI | ChatGPT Learn",
        "checkedAt": "2026-07-12",
        "purposes": [
          "command-existence",
          "option-semantics",
          "examples"
        ]
      }
    ],
    "references": [
      {
        "id": "openai-codex-repository",
        "title": "Codex official repository",
        "url": "https://github.com/openai/codex",
        "kind": "official-repository",
        "maintainer": "OpenAI",
        "evidenceTier": "first-party",
        "lastVerifiedAt": "2026-07-12",
        "resolvedUrl": "https://github.com/openai/codex",
        "pageTitle": "Codex official repository",
        "checkedAt": "2026-07-12",
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
      "total": 85,
      "covered": 85,
      "checkedAt": "2026-07-13",
      "sourceIds": [
        "codex-slash-commands",
        "codex-cli-reference",
        "codex-features"
      ],
      "inventoryHash": "sha256:37ff1563a42d2a5b59819e73a0587568d12e9983dd536d5001138aeb59f6c9b5"
    }
  },
  "items": [
    {
      "cat": "shortcut",
      "cmd": "Ctrl+C",
      "en": "Cancel / exit on empty input",
      "zh": "取消当前操作；输入框为空时退出会话",
      "id": "fca0a3acc71696b0",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · Ctrl+C",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "会话",
        "恢复会话",
        "历史会话",
        "取消当前操作；输入框为空时退出会话",
        "Cancel / exit on empty input",
        "Ctrl+C"
      ],
      "examples": [
        {
          "value": "按 Ctrl+C",
          "description": "取消当前操作；输入框为空时退出会话",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要取消当前操作；输入框为空时退出会话时",
          "goal": "取消当前操作；输入框为空时退出会话",
          "expected": "操作后，工具完成“取消当前操作；输入框为空时退出会话”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · Ctrl+C",
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
      "en": "Exit (EOF)",
      "zh": "退出 Codex",
      "id": "349e17cb450062a2",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · Ctrl+D",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "退出 Codex",
        "Exit (EOF)",
        "Ctrl+D"
      ],
      "examples": [
        {
          "value": "按 Ctrl+D",
          "description": "退出 Codex",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要退出 Codex时",
          "goal": "退出 Codex",
          "expected": "操作后，工具完成“退出 Codex”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · Ctrl+D",
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
      "en": "Clear terminal",
      "zh": "清空终端屏幕",
      "id": "ac51b3d0fe380177",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · Ctrl+L",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "清空终端屏幕",
        "Clear terminal",
        "Ctrl+L"
      ],
      "examples": [
        {
          "value": "按 Ctrl+L",
          "description": "清空终端屏幕",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要清空终端屏幕时",
          "goal": "清空终端屏幕",
          "expected": "操作后，工具完成“清空终端屏幕”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · Ctrl+L",
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
      "en": "Open external editor",
      "zh": "打开外部编辑器（$VISUAL 或 $EDITOR）编写长提示词",
      "id": "bcfcef8602902513",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · Ctrl+G",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "打开外部编辑器（$VISUAL 或 $EDITOR）编写长提示词",
        "Open external editor",
        "Ctrl+G"
      ],
      "examples": [
        {
          "value": "按 Ctrl+G",
          "description": "打开外部编辑器（$VISUAL 或 $EDITOR）编写长提示词",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要打开外部编辑器（$VISUAL 或 $EDITOR）编写长提示词时",
          "goal": "打开外部编辑器（$VISUAL 或 $EDITOR）编写长提示词",
          "expected": "操作后，工具完成“打开外部编辑器（$VISUAL 或 $EDITOR）编写长提示词”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · Ctrl+G",
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
      "en": "Copy latest response",
      "zh": "复制最近一次完成的回复内容到剪贴板",
      "id": "e449a4dae4130e3e",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · Ctrl+O",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "复制",
        "克隆",
        "拷贝",
        "复制最近一次完成的回复内容到剪贴板",
        "Copy latest response",
        "Ctrl+O"
      ],
      "examples": [
        {
          "value": "按 Ctrl+O",
          "description": "复制最近一次完成的回复内容到剪贴板",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要复制最近一次完成的回复内容到剪贴板时",
          "goal": "复制最近一次完成的回复内容到剪贴板",
          "expected": "操作后，工具完成“复制最近一次完成的回复内容到剪贴板”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · Ctrl+O",
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
      "en": "Search prompt history",
      "zh": "搜索历史提示词，Enter接受匹配，Esc取消",
      "id": "34edfceaa8f0430f",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · Ctrl+R",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "搜索",
        "查找",
        "定位",
        "搜索历史提示词，Enter接受匹配，Esc取消",
        "Search prompt history",
        "Ctrl+R"
      ],
      "examples": [
        {
          "value": "按 Ctrl+R",
          "description": "搜索历史提示词，Enter接受匹配，Esc取消",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要搜索历史提示词，Enter接受匹配，Esc取消时",
          "goal": "搜索历史提示词，Enter接受匹配，Esc取消",
          "expected": "操作后，工具完成“搜索历史提示词，Enter接受匹配，Esc取消”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · Ctrl+R",
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
      "en": "Open transcript",
      "zh": "打开transcript详情视图",
      "id": "df102634a906f0fd",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · Ctrl+T",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "打开transcript详情视图",
        "Open transcript",
        "Ctrl+T"
      ],
      "examples": [
        {
          "value": "按 Ctrl+T",
          "description": "打开transcript详情视图",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要打开transcript详情视图时",
          "goal": "打开transcript详情视图",
          "expected": "操作后，工具完成“打开transcript详情视图”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · Ctrl+T",
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
      "cmd": "Alt+R",
      "en": "Toggle raw scrollback",
      "zh": "切换原始回滚模式，让终端选取/复制文本更直接",
      "id": "7464af88c4b2fe89",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · Alt+R",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "复制",
        "克隆",
        "拷贝",
        "切换原始回滚模式，让终端选取/复制文本更直接",
        "Toggle raw scrollback",
        "Alt+R"
      ],
      "examples": [
        {
          "value": "按 Alt+R",
          "description": "切换原始回滚模式，让终端选取/复制文本更直接",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要切换原始回滚模式，让终端选取/复制文本更直接时",
          "goal": "切换原始回滚模式，让终端选取/复制文本更直接",
          "expected": "操作后，工具完成“切换原始回滚模式，让终端选取/复制文本更直接”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · Alt+R",
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
      "cmd": "Enter（任务运行中）",
      "en": "Inject new instructions",
      "zh": "任务执行过程中按 Enter 向当前轮次插入新指令",
      "id": "eb8116078132e454",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · Enter（任务运行中）",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "任务执行过程中按 Enter 向当前轮次插入新指令",
        "Inject new instructions",
        "Enter（任务运行中）"
      ],
      "examples": [
        {
          "value": "按 Enter（任务运行中）",
          "description": "任务执行过程中按 Enter 向当前轮次插入新指令",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要任务执行过程中按 Enter 向当前轮次插入新指令时",
          "goal": "任务执行过程中按 Enter 向当前轮次插入新指令",
          "expected": "操作后，工具完成“任务执行过程中按 Enter 向当前轮次插入新指令”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · Enter（任务运行中）",
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
      "cmd": "Tab（任务运行中）",
      "en": "Queue follow-up for next turn",
      "zh": "把后续输入（包括斜杠命令、! 命令）排队到下一轮处理",
      "id": "272f2c528b8f7b2b",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · Tab（任务运行中）",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "把后续输入（包括斜杠命令、! 命令）排队到下一轮处理",
        "Queue follow-up for next turn",
        "Tab（任务运行中）"
      ],
      "examples": [
        {
          "value": "按 Tab（任务运行中）",
          "description": "把后续输入（包括斜杠命令、! 命令）排队到下一轮处理",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要把后续输入（包括斜杠命令、! 命令）排队到下一轮处理时",
          "goal": "把后续输入（包括斜杠命令、! 命令）排队到下一轮处理",
          "expected": "操作后，工具完成“把后续输入（包括斜杠命令、! 命令）排队到下一轮处理”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · Tab（任务运行中）",
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
      "cmd": "Esc Esc（输入框为空时）",
      "en": "Edit previous message",
      "zh": "连按两次编辑上一条消息；继续按可回溯更早消息，按 Enter 从那里分叉",
      "id": "c367f4a91a05b3c5",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · Esc Esc（输入框为空时）",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "连按两次编辑上一条消息；继续按可回溯更早消息，按 Enter 从那里分叉",
        "Edit previous message",
        "Esc"
      ],
      "examples": [
        {
          "value": "按 Esc Esc（输入框为空时）",
          "description": "连按两次编辑上一条消息；继续按可回溯更早消息，按 Enter 从那里分叉",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要连按两次编辑上一条消息；继续按可回溯更早消息，按 Enter 从那里分叉时",
          "goal": "连按两次编辑上一条消息；继续按可回溯更早消息，按 Enter 从那里分叉",
          "expected": "操作后，工具完成“连按两次编辑上一条消息；继续按可回溯更早消息，按 Enter 从那里分叉”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · Esc Esc（输入框为空时）",
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
      "cmd": "Up / Down",
      "en": "Navigate draft history",
      "zh": "在草稿历史中导航，恢复之前的草稿文本和图片",
      "id": "b0bb38d3a2af5a17",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · Up / Down",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "在草稿历史中导航，恢复之前的草稿文本和图片",
        "Navigate draft history",
        "Up"
      ],
      "examples": [
        {
          "value": "按 Up / Down",
          "description": "在草稿历史中导航，恢复之前的草稿文本和图片",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要在草稿历史中导航，恢复之前的草稿文本和图片时",
          "goal": "在草稿历史中导航，恢复之前的草稿文本和图片",
          "expected": "操作后，工具完成“在草稿历史中导航，恢复之前的草稿文本和图片”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · Up / Down",
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
      "cmd": "@（前缀）",
      "en": "Fuzzy file search",
      "zh": "模糊搜索工作区文件，Tab/Enter插入路径",
      "id": "d0ab7f9c8fbe5354",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · @（前缀）",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "搜索",
        "查找",
        "定位",
        "模糊搜索工作区文件，Tab/Enter插入路径",
        "Fuzzy file search",
        "@（前缀）"
      ],
      "examples": [
        {
          "value": "@src/auth.ts 检查这个文件的权限处理",
          "description": "搜索并把工作区文件加入当前提示词",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "codex-features"
          ],
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · @（前缀）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Codex CLI中需要搜索并把工作区文件加入当前提示词，希望直接通过键盘完成该操作时。",
          "goal": "使用“@src/auth.ts 检查这个文件的权限处理”模糊搜索工作区文件，Tab/Enter插入路径。",
          "expected": "快捷键触发后，当前界面完成“搜索并把工作区文件加入当前提示词”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "!（前缀）",
      "en": "Run local shell command",
      "zh": "执行本地shell命令，遵循当前审批和沙盒设置",
      "id": "8027705783b45e04",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · !（前缀）",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "配置",
        "设置",
        "偏好",
        "执行本地shell命令，遵循当前审批和沙盒设置",
        "Run local shell command",
        "!（前缀）"
      ],
      "examples": [
        {
          "value": "!git diff --stat",
          "description": "在当前审批与沙盒规则下执行本地命令",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "codex-features"
          ],
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · !（前缀）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Codex CLI中需要在当前审批与沙盒规则下执行本地命令，希望直接通过键盘完成该操作时。",
          "goal": "使用“!git diff --stat”执行本地shell命令，遵循当前审批和沙盒设置。",
          "expected": "快捷键触发后，当前界面完成“在当前审批与沙盒规则下执行本地命令”对应的动作。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/model",
      "en": "Set active model",
      "zh": "选择当前激活的模型（及推理强度，如模型支持）",
      "id": "991d78879f421558",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /model）",
          "checkedAt": "2026-07-12"
        }
      ],
      "keywords": [
        "模型",
        "切换模型",
        "模型选择",
        "选择当前激活的模型（及推理强度，如模型支持）",
        "Set active model",
        "/model"
      ],
      "examples": [
        {
          "value": "/model",
          "description": "打开当前会话的模型与推理强度选择器",
          "scenario": "任务从快速问答转为复杂重构",
          "goal": "切换模型和可用的推理强度",
          "expected": "当前会话后续轮次使用新配置",
          "caveat": "模型列表取决于账号和当前版本",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "codex-slash-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /model）",
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
      "en": "Toggle Fast service tier",
      "zh": "开关当前模型的快速服务层（仅部分模型支持）",
      "id": "7ae646e013acc23a",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /fast [on|off|status]）",
          "checkedAt": "2026-07-12"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "模型",
        "切换模型",
        "模型选择",
        "开关当前模型的快速服务层（仅部分模型支持）",
        "Toggle Fast service tier"
      ],
      "examples": [
        {
          "value": "/fast on",
          "description": "开启当前模型的快速服务层，响应更快（仅部分模型支持）",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "codex-slash-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /fast [on|off|status]）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先开关当前模型的快速服务层（仅部分模型支持），确认当前状态与预期一致。",
          "goal": "开关当前模型的快速服务层（仅部分模型支持）；使用 /fast on 完成这一步。",
          "expected": "执行成功后，开启当前模型的快速服务层，响应更快（仅部分模型支持）。"
        },
        {
          "value": "/fast status",
          "description": "查看快速服务层当前是否已启用",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "codex-slash-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /fast [on|off|status]）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先开关当前模型的快速服务层（仅部分模型支持），确认当前状态与预期一致。",
          "goal": "开关当前模型的快速服务层（仅部分模型支持）；使用 /fast status 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“查看快速服务层当前是否已启用”对应的信息。"
        },
        {
          "value": "/fast off",
          "description": "关闭快速服务层，回到标准服务",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "codex-slash-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /fast [on|off|status]）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先开关当前模型的快速服务层（仅部分模型支持），确认当前状态与预期一致。",
          "goal": "开关当前模型的快速服务层（仅部分模型支持）；使用 /fast off 完成这一步。",
          "expected": "执行成功后，关闭快速服务层，回到标准服务。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/personality",
      "en": "Set communication style",
      "zh": "设置沟通风格：friendly / pragmatic / none",
      "id": "3cb27677112d7cbc",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /personality）",
          "checkedAt": "2026-07-12"
        }
      ],
      "keywords": [
        "配置",
        "设置",
        "偏好",
        "设置沟通风格：friendly / pragmatic / none",
        "Set communication style",
        "/personality"
      ],
      "examples": [
        {
          "value": "/personality",
          "description": "设置沟通风格：friendly / pragmatic / none",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /personality）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前环境的默认设置不适合这次任务，需要设置沟通风格：friendly / pragmatic / none后再继续工作。",
          "goal": "设置沟通风格：friendly / pragmatic / none；使用 /personality 完成这一步。",
          "expected": "执行成功后，设置沟通风格：friendly / pragmatic / none。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/plan",
      "en": "Switch to plan mode",
      "zh": "切换到计划模式（只读探索），可附带初始规划提示",
      "id": "a73e406dd79475b7",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /plan [提示]）",
          "checkedAt": "2026-07-12"
        }
      ],
      "keywords": [
        "切换到计划模式（只读探索），可附带初始规划提示",
        "Switch to plan mode",
        "/plan"
      ],
      "examples": [
        {
          "value": "/plan 为缓存模块设计迁移方案",
          "description": "携带初始目标进入只读计划模式",
          "scenario": "跨模块改动需要先确认接口和迁移顺序",
          "goal": "进入只读计划模式形成可执行方案",
          "expected": "输出包含实现步骤和验证方式的计划",
          "caveat": "计划阶段不应修改仓库文件",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "codex-slash-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /plan [提示]）",
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
      "cmd": "/goal",
      "en": "Set/view/pause a task goal",
      "zh": "设置、查看、暂停或清除一个持续追踪的任务目标",
      "id": "28e7f23dd5e08813",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /goal <目标>）",
          "checkedAt": "2026-07-12"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "配置",
        "设置",
        "偏好",
        "设置、查看、暂停或清除一个持续追踪的任务目标",
        "Set/view/pause a task goal"
      ],
      "examples": [
        {
          "value": "/goal \"检查当前改动\"",
          "description": "设置、查看、暂停或清除一个持续追踪的任务目标",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /goal <目标>）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先设置、查看、暂停或清除一个持续追踪的任务目标，确认当前状态与预期一致。",
          "goal": "设置、查看、暂停或清除一个持续追踪的任务目标；使用 /goal \"检查当前改动\" 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“设置、查看、暂停或清除一个持续追踪的任务目标”对应的信息。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/experimental",
      "en": "Toggle experimental features",
      "zh": "开关实验性功能（如 Apps、Smart Approvals）",
      "id": "31f562b9b21a78f5",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /experimental）",
          "checkedAt": "2026-07-12"
        }
      ],
      "keywords": [
        "开关实验性功能（如 Apps、Smart Approvals）",
        "Toggle experimental features",
        "/experimental"
      ],
      "examples": [
        {
          "value": "/experimental",
          "description": "开关实验性功能（如 Apps、Smart Approvals）",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /experimental）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前 Codex CLI 会话正在处理与“开关实验性功能（如 Apps、Smart Approvals）”直接相关的任务，需要在不中断上下文的情况下执行该操作。",
          "goal": "开关实验性功能（如 Apps、Smart Approvals）；使用 /experimental 完成这一步。",
          "expected": "执行成功后，开关实验性功能（如 Apps、Smart Approvals）。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/approve",
      "en": "Retry a denied action once",
      "zh": "重试一次被自动审查拒绝的操作",
      "id": "d7f2c65a4330aa2c",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /approve）",
          "checkedAt": "2026-07-12"
        }
      ],
      "keywords": [
        "重试一次被自动审查拒绝的操作",
        "Retry a denied action once",
        "/approve"
      ],
      "examples": [
        {
          "value": "/approve",
          "description": "重试一次被自动审查拒绝的操作",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /approve）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前 Codex CLI 会话正在处理与“重试一次被自动审查拒绝的操作”直接相关的任务，需要在不中断上下文的情况下执行该操作。",
          "goal": "重试一次被自动审查拒绝的操作；使用 /approve 完成这一步。",
          "expected": "执行成功后，重试一次被自动审查拒绝的操作。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/memories",
      "en": "Configure memory use",
      "zh": "配置是否使用已有记忆、是否生成新记忆",
      "id": "d3ddced4c42939f7",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /memories）",
          "checkedAt": "2026-07-12"
        }
      ],
      "keywords": [
        "配置",
        "设置",
        "偏好",
        "配置是否使用已有记忆、是否生成新记忆",
        "Configure memory use",
        "/memories"
      ],
      "examples": [
        {
          "value": "/memories",
          "description": "配置是否使用已有记忆、是否生成新记忆",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /memories）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前环境的默认设置不适合这次任务，需要配置是否使用已有记忆、是否生成新记忆后再继续工作。",
          "goal": "配置是否使用已有记忆、是否生成新记忆；使用 /memories 完成这一步。",
          "expected": "执行成功后，配置是否使用已有记忆、是否生成新记忆。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/skills",
      "en": "Browse and use skills",
      "zh": "浏览并选择适用的技能",
      "id": "30d30d0db9d3be09",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /skills）",
          "checkedAt": "2026-07-12"
        }
      ],
      "keywords": [
        "浏览并选择适用的技能",
        "Browse and use skills",
        "/skills"
      ],
      "examples": [
        {
          "value": "/skills",
          "description": "浏览当前可用技能并选择一个使用",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "codex-slash-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /skills）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前 Codex CLI 会话正在处理与“浏览并选择适用的技能”直接相关的任务，需要在不中断上下文的情况下执行该操作。",
          "goal": "浏览并选择适用的技能；使用 /skills 完成这一步。",
          "expected": "执行成功后，浏览当前可用技能并选择一个使用。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/hooks",
      "en": "View lifecycle hooks",
      "zh": "查看当前会话加载的生命周期 hook 配置",
      "id": "3aa0f347f17ee51b",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /hooks）",
          "checkedAt": "2026-07-12"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "配置",
        "设置",
        "偏好",
        "会话",
        "恢复会话"
      ],
      "examples": [
        {
          "value": "/hooks",
          "description": "查看当前会话加载的生命周期 hook 配置",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /hooks）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "先前的工作会话被中断后，需要查看当前会话加载的生命周期 hook 配置，而不是重新开始。",
          "goal": "查看当前会话加载的生命周期 hook 配置；使用 /hooks 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“查看当前会话加载的生命周期 hook 配置”对应的信息。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/feedback",
      "en": "Send logs to maintainers",
      "zh": "向维护者提交诊断日志反馈",
      "id": "6678a3ebaf269c31",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /feedback）",
          "checkedAt": "2026-07-12"
        }
      ],
      "keywords": [
        "向维护者提交诊断日志反馈",
        "Send logs to maintainers",
        "/feedback"
      ],
      "examples": [
        {
          "value": "/feedback",
          "description": "向维护者提交诊断日志反馈",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /feedback）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前 Codex CLI 会话正在处理与“向维护者提交诊断日志反馈”直接相关的任务，需要在不中断上下文的情况下执行该操作。",
          "goal": "向维护者提交诊断日志反馈；使用 /feedback 完成这一步。",
          "expected": "执行成功后，向维护者提交诊断日志反馈。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/init",
      "en": "Generate AGENTS.md",
      "zh": "在当前目录生成 AGENTS.md 项目说明文件",
      "id": "794dc7571018f8f4",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /init）",
          "checkedAt": "2026-07-12"
        }
      ],
      "keywords": [
        "创建",
        "新建",
        "初始化",
        "在当前目录生成 AGENTS.md 项目说明文件",
        "Generate AGENTS.md",
        "/init"
      ],
      "examples": [
        {
          "value": "/init",
          "description": "在当前目录生成项目级 AGENTS.md 说明文件",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "codex-slash-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /init）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "忘记入口用法或可用参数时，需要在当前工作流中调出官方帮助。",
          "goal": "在当前目录生成 AGENTS.md 项目说明文件；使用 /init 完成这一步。",
          "expected": "执行成功后，在当前目录生成项目级 AGENTS.md 说明文件。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/logout",
      "en": "Sign out",
      "zh": "清除本地登录凭据",
      "id": "a2c696bc743fae6f",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /logout）",
          "checkedAt": "2026-07-12"
        }
      ],
      "keywords": [
        "清除本地登录凭据",
        "Sign out",
        "/logout"
      ],
      "examples": [
        {
          "value": "/logout",
          "description": "清除本地登录凭据",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /logout）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "首次使用、凭据失效或切换账户后，需要重新完成身份验证。",
          "goal": "清除本地登录凭据；使用 /logout 完成这一步。",
          "expected": "执行成功后，清除本地登录凭据。"
        }
      ]
    },
    {
      "id": "codex-mcp",
      "cat": "slash",
      "cmd": "/mcp",
      "en": "List MCP tools",
      "zh": "列出已配置的 MCP 工具，加 verbose 显示服务器详情",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /mcp [verbose]）",
          "checkedAt": "2026-07-12"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "配置",
        "设置",
        "偏好",
        "列出已配置的 MCP 工具，加 verbose 显示服务器详情",
        "List MCP tools"
      ],
      "examples": [
        {
          "value": "/mcp",
          "description": "列出已配置的 MCP 工具",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "codex-slash-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /mcp [verbose]）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先列出已配置的 MCP 工具，加 verbose 显示服务器详情，确认当前状态与预期一致。",
          "goal": "列出已配置的 MCP 工具，加 verbose 显示服务器详情；使用 /mcp 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“列出已配置的 MCP 工具”对应的信息。"
        },
        {
          "value": "/mcp verbose",
          "description": "额外显示每个 MCP 服务器的连接详情",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "codex-slash-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /mcp [verbose]）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先列出已配置的 MCP 工具，加 verbose 显示服务器详情，确认当前状态与预期一致。",
          "goal": "列出已配置的 MCP 工具，加 verbose 显示服务器详情；使用 /mcp verbose 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“额外显示每个 MCP 服务器的连接详情”对应的信息。"
        }
      ]
    },
    {
      "id": "codex-mention",
      "cat": "slash",
      "cmd": "/mention",
      "en": "Attach a file",
      "zh": "把指定文件附加到对话中",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /mention <路径>）",
          "checkedAt": "2026-07-12"
        }
      ],
      "keywords": [
        "把指定文件附加到对话中",
        "Attach a file",
        "/mention"
      ],
      "examples": [
        {
          "value": "/mention src/auth.ts",
          "description": "把指定文件附加进当前对话上下文",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "codex-slash-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /mention <路径>）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前 Codex CLI 会话正在处理与“把指定文件附加到对话中”直接相关的任务，需要在不中断上下文的情况下执行该操作。",
          "goal": "把指定文件附加到对话中；使用 /mention src/auth.ts 完成这一步。",
          "expected": "执行成功后，把指定文件附加进当前对话上下文。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/ps",
      "en": "Check background terminals",
      "zh": "查看后台终端列表及其最近输出",
      "id": "e19a36ada7debbb7",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /ps）",
          "checkedAt": "2026-07-12"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "查看后台终端列表及其最近输出",
        "Check background terminals",
        "/ps"
      ],
      "examples": [
        {
          "value": "/ps",
          "description": "查看后台终端列表及其最近输出",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /ps）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先查看后台终端列表及其最近输出，确认当前状态与预期一致。",
          "goal": "查看后台终端列表及其最近输出；使用 /ps 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“查看后台终端列表及其最近输出”对应的信息。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/stop",
      "en": "Stop background terminals",
      "zh": "停止所有后台终端（别名 /clean）",
      "id": "0d9cf91841c5fd8e",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /stop）",
          "checkedAt": "2026-07-12"
        }
      ],
      "keywords": [
        "停止所有后台终端（别名 /clean）",
        "Stop background terminals",
        "/stop"
      ],
      "examples": [
        {
          "value": "/stop",
          "description": "停止所有后台终端（别名 /clean）",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /stop）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "清理不再需要的内容时，需要停止所有后台终端（别名 /clean），并先确认不会影响仍在使用的对象。",
          "goal": "停止所有后台终端（别名 /clean）；使用 /stop 完成这一步。",
          "expected": "执行成功后，停止所有后台终端（别名 /clean）。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/fork",
      "en": "Fork conversation to new thread",
      "zh": "把当前对话克隆到新线程，原对话保持不变",
      "id": "64d560132fa342e2",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /fork）",
          "checkedAt": "2026-07-12"
        }
      ],
      "keywords": [
        "把当前对话克隆到新线程，原对话保持不变",
        "Fork conversation to new thread",
        "/fork"
      ],
      "examples": [
        {
          "value": "/fork",
          "description": "把当前对话克隆到新线程，原对话保持不变",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /fork）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前 Codex CLI 会话正在处理与“把当前对话克隆到新线程，原对话保持不变”直接相关的任务，需要在不中断上下文的情况下执行该操作。",
          "goal": "把当前对话克隆到新线程，原对话保持不变；使用 /fork 完成这一步。",
          "expected": "执行成功后，把当前对话克隆到新线程，原对话保持不变。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/side",
      "en": "Start ephemeral side chat",
      "zh": "开启临时侧对话，专注追问而不打断主线",
      "id": "91e66d0cbc20ff11",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /side（或/btw））",
          "checkedAt": "2026-07-12"
        }
      ],
      "keywords": [
        "开启临时侧对话，专注追问而不打断主线",
        "Start ephemeral side chat",
        "/side（或/btw）"
      ],
      "examples": [
        {
          "value": "/side",
          "description": "开启临时侧对话，专注追问而不打断主线",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /side（或/btw））",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前 Codex CLI 会话正在处理与“开启临时侧对话，专注追问而不打断主线”直接相关的任务，需要在不中断上下文的情况下执行该操作。",
          "goal": "开启临时侧对话，专注追问而不打断主线；使用 /side 完成这一步。",
          "expected": "执行成功后，开启临时侧对话，专注追问而不打断主线。"
        }
      ],
      "aliases": [
        "/btw"
      ]
    },
    {
      "cat": "slash",
      "cmd": "/raw",
      "en": "Toggle raw scrollback mode",
      "zh": "切换原始回滚模式（同 Alt+R）",
      "id": "97584e83906a2146",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /raw [on|off]）",
          "checkedAt": "2026-07-12"
        }
      ],
      "keywords": [
        "切换原始回滚模式（同 Alt+R）",
        "Toggle raw scrollback mode",
        "/raw"
      ],
      "examples": [
        {
          "value": "/raw on",
          "description": "开启原始回滚模式，查看未经渲染的模型输出（同 Alt+R）",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "codex-slash-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /raw [on|off]）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前 Codex CLI 会话正在处理与“切换原始回滚模式（同 Alt+R）”直接相关的任务，需要在不中断上下文的情况下执行该操作。",
          "goal": "切换原始回滚模式（同 Alt+R）；使用 /raw on 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“开启原始回滚模式，查看未经渲染的模型输出（同 Alt+R）”对应的信息。"
        },
        {
          "value": "/raw off",
          "description": "关闭原始模式，恢复正常渲染显示",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "codex-slash-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /raw [on|off]）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前 Codex CLI 会话正在处理与“切换原始回滚模式（同 Alt+R）”直接相关的任务，需要在不中断上下文的情况下执行该操作。",
          "goal": "切换原始回滚模式（同 Alt+R）；使用 /raw off 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“关闭原始模式，恢复正常渲染显示”对应的信息。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/resume",
      "en": "Resume a saved conversation",
      "zh": "从已保存的会话列表中选择并恢复",
      "id": "8358e9a120935b74",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /resume）",
          "checkedAt": "2026-07-12"
        }
      ],
      "keywords": [
        "会话",
        "恢复会话",
        "历史会话",
        "从已保存的会话列表中选择并恢复",
        "Resume a saved conversation",
        "/resume"
      ],
      "examples": [
        {
          "value": "/resume",
          "description": "从已保存的会话列表中选择并恢复",
          "scenario": "要继续之前保存的本地会话",
          "goal": "恢复历史上下文和任务状态",
          "expected": "选择器中的会话重新打开",
          "caveat": "默认选择范围可能受当前目录限制",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "codex-slash-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /resume）",
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
      "id": "codex-new",
      "cat": "slash",
      "cmd": "/new",
      "en": "Start new chat in same session",
      "zh": "在同一CLI会话里开启新对话（不清屏，区别于/clear）",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /new）",
          "checkedAt": "2026-07-12"
        }
      ],
      "keywords": [
        "会话",
        "恢复会话",
        "历史会话",
        "在同一CLI会话里开启新对话（不清屏，区别于/clear）",
        "Start new chat in same session",
        "/new"
      ],
      "examples": [
        {
          "value": "/new",
          "description": "在同一 CLI 会话里开新对话，但不清屏（区别于 /clear）",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "codex-slash-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /new）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "先前的工作会话被中断后，需要在同一CLI会话里开启新对话（不清屏，区别于/clear），而不是重新开始。",
          "goal": "在同一CLI会话里开启新对话（不清屏，区别于/clear）；使用 /new 完成这一步。",
          "expected": "执行成功后，在同一 CLI 会话里开新对话，但不清屏（区别于 /clear）。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/quit",
      "en": "Exit the CLI",
      "zh": "退出命令行（保存好工作再用）",
      "id": "6ef527b2b556e11a",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /quit /exit）",
          "checkedAt": "2026-07-12"
        }
      ],
      "keywords": [
        "退出命令行（保存好工作再用）",
        "Exit the CLI",
        "/quit"
      ],
      "examples": [
        {
          "value": "/quit",
          "description": "退出命令行（保存好工作再用）",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /quit /exit）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前 Codex CLI 会话正在处理与“退出命令行（保存好工作再用）”直接相关的任务，需要在不中断上下文的情况下执行该操作。",
          "goal": "退出命令行（保存好工作再用）；使用 /quit 完成这一步。",
          "expected": "执行成功后，退出命令行（保存好工作再用）。"
        }
      ],
      "aliases": [
        "/exit"
      ]
    },
    {
      "cat": "slash",
      "cmd": "/review",
      "en": "Review working tree",
      "zh": "对工作区改动进行审查，聚焦行为变更和缺失测试",
      "id": "777ac1b05cc78ea2",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /review）",
          "checkedAt": "2026-07-12"
        }
      ],
      "keywords": [
        "对工作区改动进行审查，聚焦行为变更和缺失测试",
        "Review working tree",
        "/review"
      ],
      "examples": [
        {
          "value": "/review",
          "description": "审查当前工作区改动并指出正确性和测试问题",
          "scenario": "提交前需要发现行为回归和缺失测试",
          "goal": "审查当前工作树而非生成改动摘要",
          "expected": "返回带文件位置和严重度的发现",
          "caveat": "干净工作树可能没有可审查内容",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "codex-slash-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /review）",
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
      "id": "codex-status",
      "cat": "slash",
      "cmd": "/status",
      "en": "Inspect session config",
      "zh": "显示当前模型、审批策略、可写目录、token用量",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /status）",
          "checkedAt": "2026-07-12"
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
          "value": "/status",
          "description": "查看当前模型、审批策略、可写目录和 token 用量",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "codex-slash-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /status）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先显示当前模型、审批策略、可写目录、token用量，确认当前状态与预期一致。",
          "goal": "显示当前模型、审批策略、可写目录、token用量；使用 /status 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“查看当前模型、审批策略、可写目录和 token 用量”对应的信息。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/debug-config",
      "en": "Inspect config layers",
      "zh": "打印配置分层加载诊断信息，调试优先级问题",
      "id": "2a33a57ee155bc4c",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /debug-config）",
          "checkedAt": "2026-07-12"
        }
      ],
      "keywords": [
        "配置",
        "设置",
        "偏好",
        "打印配置分层加载诊断信息，调试优先级问题",
        "Inspect config layers",
        "/debug-config"
      ],
      "examples": [
        {
          "value": "/debug-config",
          "description": "打印配置分层加载诊断信息，调试优先级问题",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /debug-config）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先打印配置分层加载诊断信息，调试优先级问题，确认当前状态与预期一致。",
          "goal": "打印配置分层加载诊断信息，调试优先级问题；使用 /debug-config 完成这一步。",
          "expected": "执行成功后，打印配置分层加载诊断信息，调试优先级问题。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/statusline",
      "en": "Configure footer items",
      "zh": "自定义底部状态栏显示项并排序",
      "id": "1b14ca59176a7183",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /statusline）",
          "checkedAt": "2026-07-12"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "配置",
        "设置",
        "偏好",
        "自定义底部状态栏显示项并排序",
        "Configure footer items"
      ],
      "examples": [
        {
          "value": "/statusline",
          "description": "自定义底部状态栏显示项并排序",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /statusline）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先自定义底部状态栏显示项并排序，确认当前状态与预期一致。",
          "goal": "自定义底部状态栏显示项并排序；使用 /statusline 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“自定义底部状态栏显示项并排序”对应的信息。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/title",
      "en": "Configure terminal title",
      "zh": "自定义终端窗口/标签标题显示项",
      "id": "00c0391174b315e5",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /title）",
          "checkedAt": "2026-07-12"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "配置",
        "设置",
        "偏好",
        "自定义终端窗口/标签标题显示项",
        "Configure terminal title"
      ],
      "examples": [
        {
          "value": "/title",
          "description": "自定义终端窗口/标签标题显示项",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /title）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先自定义终端窗口/标签标题显示项，确认当前状态与预期一致。",
          "goal": "自定义终端窗口/标签标题显示项；使用 /title 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“自定义终端窗口/标签标题显示项”对应的信息。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/theme",
      "en": "Choose syntax theme",
      "zh": "选择代码高亮主题",
      "id": "feaa2cfa4df1a04f",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /theme）",
          "checkedAt": "2026-07-12"
        }
      ],
      "keywords": [
        "选择代码高亮主题",
        "Choose syntax theme",
        "/theme"
      ],
      "examples": [
        {
          "value": "/theme",
          "description": "选择代码高亮主题",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /theme）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前 Codex CLI 会话正在处理与“选择代码高亮主题”直接相关的任务，需要在不中断上下文的情况下执行该操作。",
          "goal": "选择代码高亮主题；使用 /theme 完成这一步。",
          "expected": "执行成功后，选择代码高亮主题。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/keymap",
      "en": "Remap TUI shortcuts",
      "zh": "查看并自定义TUI快捷键绑定，持久化到config.toml",
      "id": "5e46f4d811ea6282",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /keymap）",
          "checkedAt": "2026-07-12"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "配置",
        "设置",
        "偏好",
        "查看并自定义TUI快捷键绑定，持久化到config.toml",
        "Remap TUI shortcuts"
      ],
      "examples": [
        {
          "value": "/keymap",
          "description": "查看并自定义TUI快捷键绑定，持久化到config.toml",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /keymap）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先查看并自定义TUI快捷键绑定，持久化到config.toml，确认当前状态与预期一致。",
          "goal": "查看并自定义TUI快捷键绑定，持久化到config.toml；使用 /keymap 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“查看并自定义TUI快捷键绑定，持久化到config.toml”对应的信息。"
        }
      ]
    },
    {
      "id": "codex-compact",
      "cat": "slash",
      "cmd": "/compact",
      "en": "Summarize to free tokens",
      "zh": "总结对话历史，释放上下文空间",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /compact）",
          "checkedAt": "2026-07-12"
        }
      ],
      "keywords": [
        "压缩",
        "精简上下文",
        "节省上下文",
        "总结对话历史，释放上下文空间",
        "Summarize to free tokens",
        "/compact"
      ],
      "examples": [
        {
          "value": "/compact",
          "description": "总结对话历史，释放被占用的上下文空间",
          "scenario": "长会话接近上下文限制但任务尚未结束",
          "goal": "压缩历史并保留关键实现约束",
          "expected": "可用上下文增加且当前线程继续",
          "caveat": "需要全新上下文时使用 /new 或 /clear",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "codex-slash-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /compact）",
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
      "id": "codex-diff",
      "cat": "slash",
      "cmd": "/diff",
      "en": "Show Git diff",
      "zh": "显示已暂存、未暂存及未跟踪文件的改动",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /diff）",
          "checkedAt": "2026-07-12"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "显示已暂存、未暂存及未跟踪文件的改动",
        "Show Git diff",
        "/diff"
      ],
      "examples": [
        {
          "value": "/diff",
          "description": "查看已暂存、未暂存和未跟踪文件的全部改动",
          "scenario": "执行代理修改后需要核对实际文件变化",
          "goal": "汇总暂存、未暂存和未跟踪改动",
          "expected": "终端展示当前 Git 差异",
          "caveat": "它不会替代测试或代码审查",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "codex-slash-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /diff）",
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
      "id": "codex-permissions",
      "cat": "slash",
      "cmd": "/permissions",
      "en": "Update approval policy",
      "zh": "调整审批策略，如 Auto/Read Only/Full Access",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /permissions）",
          "checkedAt": "2026-07-12"
        }
      ],
      "keywords": [
        "调整审批策略，如 Auto/Read Only/Full Access",
        "Update approval policy",
        "/permissions"
      ],
      "examples": [
        {
          "value": "/permissions",
          "description": "调整审批策略（Auto / Read Only / Full Access）",
          "scenario": "当前审批策略不适合任务风险",
          "goal": "在只读、自动或完全访问间调整权限",
          "expected": "后续工具调用采用新策略",
          "caveat": "完全访问只应在受控环境启用",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "codex-slash-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /permissions）",
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
      "cmd": "/ide",
      "en": "Include IDE context",
      "zh": "把当前打开文件、选区等IDE上下文带入下一条提示",
      "id": "5b62e463b51b8960",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /ide）",
          "checkedAt": "2026-07-12"
        }
      ],
      "keywords": [
        "把当前打开文件、选区等IDE上下文带入下一条提示",
        "Include IDE context",
        "/ide"
      ],
      "examples": [
        {
          "value": "/ide",
          "description": "把当前打开文件、选区等IDE上下文带入下一条提示",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /ide）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前 Codex CLI 会话正在处理与“把当前打开文件、选区等IDE上下文带入下一条提示”直接相关的任务，需要在不中断上下文的情况下执行该操作。",
          "goal": "把当前打开文件、选区等IDE上下文带入下一条提示；使用 /ide 完成这一步。",
          "expected": "执行成功后，把当前打开文件、选区等IDE上下文带入下一条提示。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/vim",
      "en": "Toggle Vim mode",
      "zh": "切换输入框的Vim编辑模式",
      "id": "4c98e4affc22dc62",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /vim）",
          "checkedAt": "2026-07-12"
        }
      ],
      "keywords": [
        "切换输入框的Vim编辑模式",
        "Toggle Vim mode",
        "/vim"
      ],
      "examples": [
        {
          "value": "/vim",
          "description": "切换输入框的Vim编辑模式",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /vim）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前 Codex CLI 会话正在处理与“切换输入框的Vim编辑模式”直接相关的任务，需要在不中断上下文的情况下执行该操作。",
          "goal": "切换输入框的Vim编辑模式；使用 /vim 完成这一步。",
          "expected": "执行成功后，切换输入框的Vim编辑模式。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/sandbox-add-read-dir",
      "en": "Grant sandbox read access (Win)",
      "zh": "（仅Windows）为沙盒额外授予某目录的读权限",
      "id": "5d6f25ea079a1f1d",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /sandbox-add-read-dir）",
          "checkedAt": "2026-07-12"
        }
      ],
      "keywords": [
        "（仅Windows）为沙盒额外授予某目录的读权限",
        "Grant sandbox read access (Win)",
        "/sandbox-add-read-dir"
      ],
      "examples": [
        {
          "value": "/sandbox-add-read-dir",
          "description": "（仅Windows）为沙盒额外授予某目录的读权限",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /sandbox-add-read-dir）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "准备新的工作环境或资源时，需要（仅Windows）为沙盒额外授予某目录的读权限，让后续步骤具备所需入口。",
          "goal": "（仅Windows）为沙盒额外授予某目录的读权限；使用 /sandbox-add-read-dir 完成这一步。",
          "expected": "执行成功后，（仅Windows）为沙盒额外授予某目录的读权限。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/agent",
      "en": "Switch agent thread",
      "zh": "切换到其他已派生的代理线程查看或继续",
      "id": "f217d9f499cc12c8",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /agent）",
          "checkedAt": "2026-07-12"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "切换到其他已派生的代理线程查看或继续",
        "Switch agent thread",
        "/agent"
      ],
      "examples": [
        {
          "value": "/agent",
          "description": "切换到其他已派生的代理线程查看或继续",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /agent）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先切换到其他已派生的代理线程查看或继续，确认当前状态与预期一致。",
          "goal": "切换到其他已派生的代理线程查看或继续；使用 /agent 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“切换到其他已派生的代理线程查看或继续”对应的信息。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/apps",
      "en": "Browse connector apps",
      "zh": "浏览已连接的应用，插入为 $app-slug 引用",
      "id": "79baf685d65cfd1f",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /apps）",
          "checkedAt": "2026-07-12"
        }
      ],
      "keywords": [
        "浏览已连接的应用，插入为 $app-slug 引用",
        "Browse connector apps",
        "/apps"
      ],
      "examples": [
        {
          "value": "/apps",
          "description": "浏览已连接的应用，插入为 $app-slug 引用",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /apps）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前 Codex CLI 会话正在处理与“浏览已连接的应用，插入为 $app-slug 引用”直接相关的任务，需要在不中断上下文的情况下执行该操作。",
          "goal": "浏览已连接的应用，插入为 $app-slug 引用；使用 /apps 完成这一步。",
          "expected": "执行成功后，浏览已连接的应用，插入为 $app-slug 引用。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/plugins",
      "en": "Browse plugins",
      "zh": "浏览已安装和可发现的插件，管理启用状态",
      "id": "7c330bf5567864ca",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /plugins）",
          "checkedAt": "2026-07-12"
        }
      ],
      "keywords": [
        "浏览已安装和可发现的插件，管理启用状态",
        "Browse plugins",
        "/plugins"
      ],
      "examples": [
        {
          "value": "/plugins",
          "description": "浏览已安装和可发现的插件，管理启用状态",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /plugins）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先浏览已安装和可发现的插件，管理启用状态，确认当前状态与预期一致。",
          "goal": "浏览已安装和可发现的插件，管理启用状态；使用 /plugins 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“浏览已安装和可发现的插件，管理启用状态”对应的信息。"
        }
      ]
    },
    {
      "id": "codex-clear",
      "cat": "slash",
      "cmd": "/clear",
      "en": "Clear terminal & new chat",
      "zh": "清空终端并开始全新对话（区别于/new）",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /clear）",
          "checkedAt": "2026-07-12"
        }
      ],
      "keywords": [
        "清空终端并开始全新对话（区别于/new）",
        "Clear terminal & new chat",
        "/clear"
      ],
      "examples": [
        {
          "value": "/clear",
          "description": "清空终端并开始一段全新对话",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "codex-slash-commands"
          ],
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /clear）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前 Codex CLI 会话正在处理与“清空终端并开始全新对话（区别于/new）”直接相关的任务，需要在不中断上下文的情况下执行该操作。",
          "goal": "清空终端并开始全新对话（区别于/new）；使用 /clear 完成这一步。",
          "expected": "执行成功后，清空终端并开始一段全新对话。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/archive",
      "en": "Archive session and exit",
      "zh": "归档当前会话并退出，可用 codex unarchive 恢复",
      "id": "e0a3146b47eff8a7",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /archive）",
          "checkedAt": "2026-07-12"
        }
      ],
      "keywords": [
        "会话",
        "恢复会话",
        "历史会话",
        "归档当前会话并退出，可用 codex unarchive 恢复",
        "Archive session and exit",
        "/archive"
      ],
      "examples": [
        {
          "value": "/archive",
          "description": "归档当前会话并退出，可用 codex unarchive 恢复",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /archive）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "先前的工作会话被中断后，需要归档当前会话并退出，可用 codex unarchive 恢复，而不是重新开始。",
          "goal": "归档当前会话并退出，可用 codex unarchive 恢复；使用 /archive 完成这一步。",
          "expected": "执行成功后，归档当前会话并退出，可用 codex unarchive 恢复。"
        }
      ]
    },
    {
      "cat": "slash",
      "cmd": "/copy",
      "en": "Copy latest response",
      "zh": "复制最近一次完成的回复（同 Ctrl+O）",
      "id": "b6d2b4c5320ab58f",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /copy）",
          "checkedAt": "2026-07-12"
        }
      ],
      "keywords": [
        "复制",
        "克隆",
        "拷贝",
        "复制最近一次完成的回复（同 Ctrl+O）",
        "Copy latest response",
        "/copy"
      ],
      "examples": [
        {
          "value": "/copy",
          "description": "复制最近一次完成的回复（同 Ctrl+O）",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli（页面内检索 /copy）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前 Codex CLI 会话正在处理与“复制最近一次完成的回复（同 Ctrl+O）”直接相关的任务，需要在不中断上下文的情况下执行该操作。",
          "goal": "复制最近一次完成的回复（同 Ctrl+O）；使用 /copy 完成这一步。",
          "expected": "执行成功后，复制最近一次完成的回复（同 Ctrl+O）。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "codex exec",
      "en": "Non-interactive run",
      "zh": "非交互式跑一次任务，结果输出到 stdout",
      "id": "033fb3b9573847ec",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · codex exec \"任务\"（别名 codex e）",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "非交互式跑一次任务，结果输出到 stdout",
        "Non-interactive run",
        "codex"
      ],
      "examples": [
        {
          "value": "codex exec \"运行测试并解释失败原因\"",
          "description": "非交互执行一次任务，适合脚本或 CI 使用",
          "scenario": "CI 或脚本需要非交互执行一个明确任务",
          "goal": "执行一次任务并把最终结果写到标准输出",
          "expected": "进程结束时返回结果和退出状态",
          "caveat": "自动化中应固定工作目录和审批策略",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "codex-cli-reference"
          ],
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · codex exec \"任务\"（别名 codex e）",
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
        "codex e"
      ]
    },
    {
      "cat": "flag",
      "cmd": "codex exec --json",
      "en": "JSON event stream",
      "zh": "以换行分隔JSON事件流输出，便于脚本解析",
      "id": "346eb9c976be999e",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · codex exec --json",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "以换行分隔JSON事件流输出，便于脚本解析",
        "JSON event stream",
        "codex"
      ],
      "examples": [
        {
          "value": "codex exec --json \"检查依赖安全问题\"",
          "description": "以 JSON 事件流输出执行过程，便于程序处理",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "codex-cli-reference"
          ],
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · codex exec --json",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "终端中的当前任务需要“以换行分隔JSON事件流输出，便于脚本解析”，因此要调用对应的官方命令入口。",
          "goal": "以换行分隔JSON事件流输出，便于脚本解析；使用 codex exec --json \"检查依赖安全问题\" 完成这一步。",
          "expected": "执行成功后，以 JSON 事件流输出执行过程，便于程序处理。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "codex exec resume --last",
      "en": "Resume last exec session",
      "zh": "恢复当前目录最近一次非交互会话并继续",
      "id": "83bd17bc4be0ed51",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · codex exec resume --last",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "会话",
        "恢复会话",
        "历史会话",
        "恢复当前目录最近一次非交互会话并继续",
        "Resume last exec session",
        "codex"
      ],
      "examples": [
        {
          "value": "codex exec resume --last",
          "description": "恢复当前目录最近一次非交互会话并继续",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · codex exec resume --last",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "先前的工作会话被中断后，需要恢复当前目录最近一次非交互会话并继续，而不是重新开始。",
          "goal": "恢复当前目录最近一次非交互会话并继续；使用 codex exec resume --last 完成这一步。",
          "expected": "执行成功后，恢复当前目录最近一次非交互会话并继续。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "codex resume",
      "en": "Resume interactive session",
      "zh": "恢复交互式会话，--last跳过选择器，--all跨目录搜索",
      "id": "0eac1f66ddbbeb8c",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · codex resume [--last|--all]",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "搜索",
        "查找",
        "定位",
        "会话",
        "恢复会话",
        "历史会话",
        "恢复交互式会话，--last跳过选择器，--all跨目录搜索",
        "Resume interactive session"
      ],
      "examples": [
        {
          "value": "codex resume",
          "description": "打开会话选择器，从当前目录的历史会话中挑一个恢复",
          "scenario": "从终端直接恢复最近或跨目录的历史会话",
          "goal": "跳过重新描述项目背景",
          "expected": "目标会话恢复为交互模式",
          "caveat": "--all 可能返回较多跨项目记录",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "codex-cli-reference"
          ],
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · codex resume [--last|--all]",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ]
        },
        {
          "value": "codex resume --last",
          "description": "直接恢复最近一次会话，跳过选择器",
          "scenario": "从终端直接恢复最近或跨目录的历史会话",
          "goal": "跳过重新描述项目背景",
          "expected": "目标会话恢复为交互模式",
          "caveat": "--all 可能返回较多跨项目记录",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "codex-cli-reference"
          ],
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · codex resume [--last|--all]",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ]
        },
        {
          "value": "codex resume --all",
          "description": "跨所有目录搜索历史会话后再选择恢复",
          "scenario": "从终端直接恢复最近或跨目录的历史会话",
          "goal": "跳过重新描述项目背景",
          "expected": "目标会话恢复为交互模式",
          "caveat": "--all 可能返回较多跨项目记录",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "codex-cli-reference"
          ],
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · codex resume [--last|--all]",
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
      "cmd": "codex fork",
      "en": "Fork a previous session",
      "zh": "把之前的会话分叉到新线程",
      "id": "98fc6527daaba6ec",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · codex fork [--last]",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "会话",
        "恢复会话",
        "历史会话",
        "把之前的会话分叉到新线程",
        "Fork a previous session",
        "codex"
      ],
      "examples": [
        {
          "value": "codex fork --last",
          "description": "把之前的会话分叉到新线程",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · codex fork [--last]",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "先前的工作会话被中断后，需要把之前的会话分叉到新线程，而不是重新开始。",
          "goal": "把之前的会话分叉到新线程；使用 codex fork --last 完成这一步。",
          "expected": "执行成功后，把之前的会话分叉到新线程。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "codex apply",
      "en": "Apply cloud task diff",
      "zh": "把云端任务生成的diff应用到本地仓库",
      "id": "9bdaa27797bb5e0c",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · codex apply <任务ID>",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "把云端任务生成的diff应用到本地仓库",
        "Apply cloud task diff",
        "codex"
      ],
      "examples": [
        {
          "value": "codex apply \"检查当前改动\"",
          "description": "把云端任务生成的diff应用到本地仓库",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · codex apply <任务ID>",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "终端中的当前任务需要“把云端任务生成的diff应用到本地仓库”，因此要调用对应的官方命令入口。",
          "goal": "把云端任务生成的diff应用到本地仓库；使用 codex apply \"检查当前改动\" 完成这一步。",
          "expected": "执行成功后，把云端任务生成的diff应用到本地仓库。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "codex login",
      "en": "Manage authentication",
      "zh": "登录/登出（支持OAuth、设备码、API key管道输入）",
      "id": "87002d09fc40555f",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · codex login / logout",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "登录/登出（支持OAuth、设备码、API key管道输入）",
        "Manage authentication",
        "codex"
      ],
      "examples": [
        {
          "value": "codex login",
          "description": "登录/登出（支持OAuth、设备码、API key管道输入）",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · codex login / logout",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "首次使用、凭据失效或切换账户后，需要重新完成身份验证。",
          "goal": "登录/登出（支持OAuth、设备码、API key管道输入）；使用 codex login 完成这一步。",
          "expected": "执行成功后，登录/登出（支持OAuth、设备码、API key管道输入）。"
        }
      ],
      "aliases": [
        "codex logout"
      ]
    },
    {
      "cat": "flag",
      "cmd": "codex mcp add/list/remove",
      "en": "Manage MCP servers",
      "zh": "添加/列出/删除MCP服务配置",
      "id": "5c7956b103d65163",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · codex mcp add/list/remove",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "删除",
        "移除",
        "清理",
        "查看",
        "显示",
        "状态",
        "配置",
        "设置"
      ],
      "examples": [
        {
          "value": "codex mcp add/list/remove",
          "description": "添加/列出/删除MCP服务配置",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · codex mcp add/list/remove",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "清理不再需要的内容时，需要添加/列出/删除MCP服务配置，并先确认不会影响仍在使用的对象。",
          "goal": "添加/列出/删除MCP服务配置；使用 codex mcp add/list/remove 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“添加/列出/删除MCP服务配置”对应的信息。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "codex mcp-server",
      "en": "Run Codex as MCP server",
      "zh": "把Codex自身作为MCP服务运行，供其他工具调用",
      "id": "eccb1fc79a26dd8f",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · codex mcp-server",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "把Codex自身作为MCP服务运行，供其他工具调用",
        "Run Codex as MCP server",
        "codex"
      ],
      "examples": [
        {
          "value": "codex mcp-server",
          "description": "把Codex自身作为MCP服务运行，供其他工具调用",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · codex mcp-server",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "终端中的当前任务需要“把Codex自身作为MCP服务运行，供其他工具调用”，因此要调用对应的官方命令入口。",
          "goal": "把Codex自身作为MCP服务运行，供其他工具调用；使用 codex mcp-server 完成这一步。",
          "expected": "执行成功后，把Codex自身作为MCP服务运行，供其他工具调用。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "codex sandbox",
      "en": "Run command in sandbox",
      "zh": "用Codex内部沙盒策略运行任意命令",
      "id": "83ea7ebefd20f690",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · codex sandbox",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "用Codex内部沙盒策略运行任意命令",
        "Run command in sandbox",
        "codex"
      ],
      "examples": [
        {
          "value": "codex sandbox",
          "description": "用Codex内部沙盒策略运行任意命令",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · codex sandbox",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "终端中的当前任务需要“用Codex内部沙盒策略运行任意命令”，因此要调用对应的官方命令入口。",
          "goal": "用Codex内部沙盒策略运行任意命令；使用 codex sandbox 完成这一步。",
          "expected": "执行成功后，用Codex内部沙盒策略运行任意命令。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "codex completion",
      "en": "Generate shell completions",
      "zh": "生成bash/zsh/fish/powershell的自动补全脚本",
      "id": "fc193ba9019770bd",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · codex completion <shell>",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "生成bash/zsh/fish/powershell的自动补全脚本",
        "Generate shell completions",
        "codex"
      ],
      "examples": [
        {
          "value": "codex completion zsh",
          "description": "生成bash/zsh/fish/powershell的自动补全脚本",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · codex completion <shell>",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "终端中的当前任务需要“生成bash/zsh/fish/powershell的自动补全脚本”，因此要调用对应的官方命令入口。",
          "goal": "生成bash/zsh/fish/powershell的自动补全脚本；使用 codex completion zsh 完成这一步。",
          "expected": "执行成功后，生成bash/zsh/fish/powershell的自动补全脚本。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "codex features list/enable/disable",
      "en": "Manage feature flags",
      "zh": "列出/开启/关闭特性开关，持久化到config.toml",
      "id": "78d3e3fee9b34fa3",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · codex features list/enable/disable",
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
        "列出/开启/关闭特性开关，持久化到config.toml",
        "Manage feature flags"
      ],
      "examples": [
        {
          "value": "codex features list/enable/disable",
          "description": "列出/开启/关闭特性开关，持久化到config.toml",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · codex features list/enable/disable",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先列出/开启/关闭特性开关，持久化到config.toml，确认当前状态与预期一致。",
          "goal": "列出/开启/关闭特性开关，持久化到config.toml；使用 codex features list/enable/disable 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“列出/开启/关闭特性开关，持久化到config.toml”对应的信息。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "codex cloud",
      "en": "Browse/run cloud tasks",
      "zh": "浏览或直接提交Codex Cloud云端任务",
      "id": "80cd1edef30d330b",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · codex cloud / codex cloud exec",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "浏览或直接提交Codex Cloud云端任务",
        "Browse/run cloud tasks",
        "codex"
      ],
      "examples": [
        {
          "value": "codex cloud",
          "description": "浏览或直接提交Codex Cloud云端任务",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · codex cloud / codex cloud exec",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "终端中的当前任务需要“浏览或直接提交Codex Cloud云端任务”，因此要调用对应的官方命令入口。",
          "goal": "浏览或直接提交Codex Cloud云端任务；使用 codex cloud 完成这一步。",
          "expected": "执行成功后，浏览或直接提交Codex Cloud云端任务。"
        }
      ],
      "aliases": [
        "codex cloud exec"
      ]
    },
    {
      "cat": "flag",
      "cmd": "codex app",
      "en": "Launch desktop app",
      "zh": "启动Codex桌面应用（macOS/Windows）",
      "id": "8503e8439f3bbcf9",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · codex app",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "启动Codex桌面应用（macOS/Windows）",
        "Launch desktop app",
        "codex"
      ],
      "examples": [
        {
          "value": "codex app",
          "description": "启动Codex桌面应用（macOS/Windows）",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · codex app",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "终端中的当前任务需要“启动Codex桌面应用（macOS/Windows）”，因此要调用对应的官方命令入口。",
          "goal": "启动Codex桌面应用（macOS/Windows）；使用 codex app 完成这一步。",
          "expected": "执行成功后，启动Codex桌面应用（macOS/Windows）。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "codex app-server --listen",
      "en": "Run app server",
      "zh": "启动app server供远程TUI连接",
      "id": "b9d4e2c2732bbb32",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · codex app-server --listen",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "启动app server供远程TUI连接",
        "Run app server",
        "codex"
      ],
      "examples": [
        {
          "value": "codex app-server --listen",
          "description": "启动app server供远程TUI连接",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · codex app-server --listen",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先启动app server供远程TUI连接，确认当前状态与预期一致。",
          "goal": "启动app server供远程TUI连接；使用 codex app-server --listen 完成这一步。",
          "expected": "执行成功后，启动app server供远程TUI连接。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "codex --remote ws://host:port",
      "en": "Connect to remote app-server",
      "zh": "把交互式TUI连接到远程app server",
      "id": "5ef12368b4ff7498",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · codex --remote ws://host:port",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "把交互式TUI连接到远程app server",
        "Connect to remote app-server",
        "codex"
      ],
      "examples": [
        {
          "value": "codex --remote ws://host:port",
          "description": "把交互式TUI连接到远程app server",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · codex --remote ws://host:port",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "终端中的当前任务需要“把交互式TUI连接到远程app server”，因此要调用对应的官方命令入口。",
          "goal": "把交互式TUI连接到远程app server；使用 codex --remote ws://host:port 完成这一步。",
          "expected": "执行成功后，把交互式TUI连接到远程app server。"
        }
      ]
    },
    {
      "id": "codex-model",
      "cat": "flag",
      "cmd": "codex --model",
      "en": "Override model",
      "zh": "覆盖配置里设定的模型，例如 gpt-5.5",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · --model, -m <模型>",
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
        "覆盖配置里设定的模型，例如 gpt-5.5",
        "Override model"
      ],
      "examples": [
        {
          "value": "codex --model gpt-5.5",
          "description": "用指定模型启动，覆盖配置里的默认模型",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "codex-cli-reference"
          ],
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · --model, -m <模型>",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前环境的默认设置不适合这次任务，需要覆盖配置里设定的模型，例如 gpt-5.5后再继续工作。",
          "goal": "覆盖配置里设定的模型，例如 gpt-5.5；使用 codex --model gpt-5.5 完成这一步。",
          "expected": "执行成功后，用指定模型启动，覆盖配置里的默认模型。"
        }
      ],
      "aliases": [
        "codex -m"
      ]
    },
    {
      "cat": "flag",
      "cmd": "codex --image",
      "en": "Attach image(s)",
      "zh": "附加一张或多张图片到初始提示，逗号分隔",
      "id": "afb0547eed55e85a",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · --image, -i <路径>",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "附加一张或多张图片到初始提示，逗号分隔",
        "Attach image(s)",
        "--image,"
      ],
      "examples": [
        {
          "value": "codex --image src/app.js",
          "description": "附加一张或多张图片到初始提示，逗号分隔",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · --image, -i <路径>",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "终端中的当前任务需要“附加一张或多张图片到初始提示，逗号分隔”，因此要调用对应的官方命令入口。",
          "goal": "附加一张或多张图片到初始提示，逗号分隔；使用 codex --image src/app.js 完成这一步。",
          "expected": "执行成功后，附加一张或多张图片到初始提示，逗号分隔。"
        }
      ],
      "aliases": [
        "codex -i"
      ]
    },
    {
      "cat": "flag",
      "cmd": "codex --cd",
      "en": "Set working directory",
      "zh": "设置代理开始处理前的工作目录",
      "id": "e99a0a24c7150e5f",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · --cd, -C <路径>",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "配置",
        "设置",
        "偏好",
        "设置代理开始处理前的工作目录",
        "Set working directory",
        "--cd,"
      ],
      "examples": [
        {
          "value": "codex --cd src/app.js",
          "description": "设置代理开始处理前的工作目录",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · --cd, -C <路径>",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前环境的默认设置不适合这次任务，需要设置代理开始处理前的工作目录后再继续工作。",
          "goal": "设置代理开始处理前的工作目录；使用 codex --cd src/app.js 完成这一步。",
          "expected": "执行成功后，设置代理开始处理前的工作目录。"
        }
      ],
      "aliases": [
        "codex -C"
      ]
    },
    {
      "cat": "flag",
      "cmd": "codex --add-dir",
      "en": "Grant extra writable dir",
      "zh": "额外授予某目录的写权限（可重复传入）",
      "id": "68ecdb161618a233",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · --add-dir <路径>",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "额外授予某目录的写权限（可重复传入）",
        "Grant extra writable dir",
        "--add-dir"
      ],
      "examples": [
        {
          "value": "codex --add-dir src/app.js",
          "description": "额外授予某目录的写权限（可重复传入）",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · --add-dir <路径>",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "准备新的工作环境或资源时，需要额外授予某目录的写权限（可重复传入），让后续步骤具备所需入口。",
          "goal": "额外授予某目录的写权限（可重复传入）；使用 codex --add-dir src/app.js 完成这一步。",
          "expected": "执行成功后，额外授予某目录的写权限（可重复传入）。"
        }
      ]
    },
    {
      "id": "codex-sandbox",
      "cat": "flag",
      "cmd": "codex --sandbox",
      "en": "Sandbox policy",
      "zh": "沙盒策略：read-only / workspace-write / danger-full-access",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · --sandbox, -s <模式>",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "沙盒策略：read-only / workspace-write / danger-full-access",
        "Sandbox policy",
        "--sandbox,"
      ],
      "examples": [
        {
          "value": "codex --sandbox workspace-write",
          "description": "以指定沙盒策略启动：read-only / workspace-write / danger-full-access",
          "scenario": "启动前要限制代理能读取或写入的范围",
          "goal": "选择与任务风险匹配的沙盒策略",
          "expected": "会话按指定文件系统权限运行",
          "caveat": "danger-full-access 会显著扩大影响范围",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "codex-cli-reference"
          ],
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · --sandbox, -s <模式>",
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
        "codex -s"
      ]
    },
    {
      "cat": "flag",
      "cmd": "codex --ask-for-approval",
      "en": "Approval policy",
      "zh": "审批策略：untrusted / on-request / never",
      "id": "3966a67e6ce9e954",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · --ask-for-approval, -a <模式>",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "审批策略：untrusted / on-request / never",
        "Approval policy",
        "--ask-for-approval,"
      ],
      "examples": [
        {
          "value": "codex --ask-for-approval workspace-write",
          "description": "审批策略：untrusted / on-request / never",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · --ask-for-approval, -a <模式>",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "终端中的当前任务需要“审批策略：untrusted / on-request / never”，因此要调用对应的官方命令入口。",
          "goal": "审批策略：untrusted / on-request / never；使用 codex --ask-for-approval workspace-write 完成这一步。",
          "expected": "执行成功后，审批策略：untrusted / on-request / never。"
        }
      ],
      "aliases": [
        "codex -a"
      ]
    },
    {
      "cat": "flag",
      "cmd": "codex --full-auto",
      "en": "Auto-approve in sandbox (deprecated)",
      "zh": "已弃用，建议用 --sandbox workspace-write 代替",
      "id": "fb8e10106ff2b6d7",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · --full-auto",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "已弃用，建议用 --sandbox workspace-write 代替",
        "Auto-approve in sandbox (deprecated)",
        "--full-auto"
      ],
      "examples": [
        {
          "value": "codex --full-auto",
          "description": "已弃用，建议用 --sandbox workspace-write 代替",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · --full-auto",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "终端中的当前任务需要“已弃用，建议用 --sandbox workspace-write 代替”，因此要调用对应的官方命令入口。",
          "goal": "已弃用，建议用 --sandbox workspace-write 代替；使用 codex --full-auto 完成这一步。",
          "expected": "执行成功后，已弃用，建议用 --sandbox workspace-write 代替。"
        }
      ]
    },
    {
      "id": "codex-yolo",
      "cat": "flag",
      "cmd": "codex --yolo",
      "en": "Bypass all safety",
      "zh": "完全跳过审批和沙盒，仅在受控隔离环境中使用",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · --yolo / --dangerously-bypass-approvals-and-sandbox",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "完全跳过审批和沙盒，仅在受控隔离环境中使用",
        "Bypass all safety",
        "--yolo"
      ],
      "examples": [
        {
          "value": "codex --yolo",
          "description": "完全跳过审批和沙盒直接执行",
          "warning": "会授予完全的文件和命令权限，仅限受控隔离环境使用",
          "copyable": false,
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "codex-cli-reference"
          ],
          "riskLevels": [
            "safetyBypass"
          ],
          "caveat": "会授予完全的文件和命令权限，仅限受控隔离环境使用；先用只读命令预览目标并保留备份",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · --yolo / --dangerously-bypass-approvals-and-sandbox",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "正在Codex CLI中完成“完全跳过审批和沙盒，仅在受控隔离环境中使用”这一步，需要用默认交互入口减少界面切换。",
          "goal": "完全跳过审批和沙盒，仅在受控隔离环境中使用；使用 codex --yolo 完成这一步。",
          "expected": "操作后，界面完成“完全跳过审批和沙盒直接执行”对应的变化。"
        }
      ],
      "aliases": [
        "codex --dangerously-bypass-approvals-and-sandbox"
      ]
    },
    {
      "cat": "flag",
      "cmd": "codex --oss",
      "en": "Use local OSS model",
      "zh": "使用本地开源模型（需要Ollama在运行）",
      "id": "1c97d587215a591e",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · --oss",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "模型",
        "切换模型",
        "模型选择",
        "使用本地开源模型（需要Ollama在运行）",
        "Use local OSS model",
        "--oss"
      ],
      "examples": [
        {
          "value": "codex --oss",
          "description": "使用本地开源模型（需要Ollama在运行）",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · --oss",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前任务对速度、能力或成本的要求发生变化，需要使用本地开源模型（需要Ollama在运行）。",
          "goal": "使用本地开源模型（需要Ollama在运行）；使用 codex --oss 完成这一步。",
          "expected": "执行成功后，使用本地开源模型（需要Ollama在运行）。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "codex --profile",
      "en": "Load named config profile",
      "zh": "加载config.toml中预设的命名配置档案",
      "id": "2fae693af8e40fed",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · --profile, -p <名称>",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "配置",
        "设置",
        "偏好",
        "加载config.toml中预设的命名配置档案",
        "Load named config profile",
        "--profile,"
      ],
      "examples": [
        {
          "value": "codex --profile work",
          "description": "加载 config.toml 中名为 work 的配置档案后启动",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "codex-cli-reference"
          ],
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · --profile, -p <名称>",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前环境的默认设置不适合这次任务，需要加载config.toml中预设的命名配置档案后再继续工作。",
          "goal": "加载config.toml中预设的命名配置档案；使用 codex --profile work 完成这一步。",
          "expected": "执行成功后，加载 config.toml 中名为 work 的配置档案后启动。"
        }
      ],
      "aliases": [
        "codex -p"
      ]
    },
    {
      "cat": "flag",
      "cmd": "codex --config",
      "en": "Inline config override",
      "zh": "内联覆盖某个配置值",
      "id": "ee6a9519832576fa",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · --config, -c key=value",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "配置",
        "设置",
        "偏好",
        "内联覆盖某个配置值",
        "Inline config override",
        "--config,"
      ],
      "examples": [
        {
          "value": "codex --config key=value",
          "description": "内联覆盖某个配置值",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · --config, -c key=value",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前环境的默认设置不适合这次任务，需要内联覆盖某个配置值后再继续工作。",
          "goal": "内联覆盖某个配置值；使用 codex --config key=value 完成这一步。",
          "expected": "执行成功后，内联覆盖某个配置值。"
        }
      ],
      "aliases": [
        "codex -c"
      ]
    },
    {
      "cat": "flag",
      "cmd": "codex --search",
      "en": "Enable live web search",
      "zh": "启用实时网络搜索（默认是缓存索引结果）",
      "id": "93e89ca9a895bbe9",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · --search",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "搜索",
        "查找",
        "定位",
        "启用实时网络搜索（默认是缓存索引结果）",
        "Enable live web search",
        "--search"
      ],
      "examples": [
        {
          "value": "codex --search",
          "description": "启用实时网络搜索（默认是缓存索引结果）",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · --search",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "终端中的当前任务需要“启用实时网络搜索（默认是缓存索引结果）”，因此要调用对应的官方命令入口。",
          "goal": "启用实时网络搜索（默认是缓存索引结果）；使用 codex --search 完成这一步。",
          "expected": "执行成功后，启用实时网络搜索（默认是缓存索引结果）。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "codex --enable",
      "en": "Toggle feature flag",
      "zh": "强制开启/关闭某个特性开关",
      "id": "9ef056a1e0a99b6f",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "codex-slash-commands",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · --enable / --disable <feature>",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "强制开启/关闭某个特性开关",
        "Toggle feature flag",
        "--enable"
      ],
      "examples": [
        {
          "value": "codex --enable",
          "description": "强制开启/关闭某个特性开关",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "codex-slash-commands",
              "locator": "https://learn.chatgpt.com/docs/developer-commands?surface=cli · --enable / --disable <feature>",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "终端中的当前任务需要“强制开启/关闭某个特性开关”，因此要调用对应的官方命令入口。",
          "goal": "强制开启/关闭某个特性开关；使用 codex --enable 完成这一步。",
          "expected": "执行成功后，强制开启/关闭某个特性开关。"
        }
      ],
      "aliases": [
        "codex --disable"
      ]
    }
  ]
};
