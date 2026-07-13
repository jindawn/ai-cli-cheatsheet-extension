// Generated from validated structured data. Manual edits must follow data/SCHEMA.md.
window.CHEATSHEET_DATA = window.CHEATSHEET_DATA || {};
window.CHEATSHEET_DATA["typora"] = {
  "meta": {
    "id": "typora",
    "name": "Typora",
    "color": "#2a3333",
    "source": "第一方来源与确定性官方入口清单，核验于 2026-07-14",
    "builtIn": false,
    "sourceUrl": "https://support.typora.io/Shortcut-Keys/",
    "updatedAt": "2026-06-20",
    "contentCheckedAt": "2026-06-20",
    "sourceCheckedAt": "2026-06-21",
    "updatePolicy": "manual-only",
    "verificationStatus": "manual",
    "coverage": "官方入口全集；精确范围、组件与平台限制见 shared/official-inventories/typora.json",
    "platforms": [
      "mac",
      "windows",
      "linux"
    ],
    "order": 999,
    "sources": [
      {
        "id": "typora-shortcuts",
        "title": "Typora shortcut keys",
        "url": "https://support.typora.io/Shortcut-Keys/",
        "kind": "official-doc",
        "maintainer": "Typora",
        "evidenceTier": "first-party",
        "lastVerifiedAt": "2026-06-21",
        "resolvedUrl": "https://support.typora.io/Shortcut-Keys/",
        "pageTitle": "Typora shortcut keys",
        "checkedAt": "2026-06-21",
        "purposes": [
          "command-existence",
          "option-semantics"
        ]
      }
    ],
    "officialCoverage": {
      "scope": "all-command-entrypoints",
      "status": "complete",
      "total": 62,
      "covered": 62,
      "checkedAt": "2026-07-13",
      "sourceIds": [
        "typora-shortcuts"
      ],
      "inventoryHash": "sha256:1f0307d9d3a7748f1d0385eb356f68480b0bb5956a9774437f9d0580b5d75686"
    }
  },
  "items": [
    {
      "cat": "shortcut",
      "cmd": "Cmd+N",
      "en": "New File",
      "zh": "新建文件",
      "platformCmds": {
        "mac": "Cmd+N",
        "windows": "Ctrl+N",
        "linux": "Ctrl+N"
      },
      "id": "417f39e8659d5290",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 New File）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "创建",
        "新建",
        "初始化",
        "新建文件",
        "New File",
        "Cmd+N"
      ],
      "examples": [
        {
          "value": "按 Cmd+N",
          "description": "新建文件",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platformValues": {
            "mac": "按 Cmd+N",
            "windows": "按 Ctrl+N",
            "linux": "按 Ctrl+N"
          },
          "scenario": "在实际工作中需要新建文件时",
          "goal": "新建文件",
          "expected": "操作后，工具完成“新建文件”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 New File）",
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
      "cmd": "Cmd+Shift+N",
      "en": "New Window",
      "zh": "新建窗口",
      "platformCmds": {
        "mac": "Cmd+Shift+N",
        "windows": "Ctrl+Shift+N",
        "linux": "Ctrl+Shift+N"
      },
      "id": "bc6bb96ca92c1882",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 New Window）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "创建",
        "新建",
        "初始化",
        "新建窗口",
        "New Window",
        "Cmd+Shift+N"
      ],
      "examples": [
        {
          "value": "按 Cmd+Shift+N",
          "description": "新建窗口",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platformValues": {
            "mac": "按 Cmd+Shift+N",
            "windows": "按 Ctrl+Shift+N",
            "linux": "按 Ctrl+Shift+N"
          },
          "scenario": "在实际工作中需要新建窗口时",
          "goal": "新建窗口",
          "expected": "操作后，工具完成“新建窗口”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 New Window）",
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
      "cmd": "Cmd+O",
      "en": "Open",
      "zh": "打开文件",
      "platformCmds": {
        "mac": "Cmd+O",
        "windows": "Ctrl+O",
        "linux": "Ctrl+O"
      },
      "id": "c70d6815af282143",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 Open）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "打开文件",
        "Open",
        "Cmd+O"
      ],
      "examples": [
        {
          "value": "按 Cmd+O",
          "description": "打开文件",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platformValues": {
            "mac": "按 Cmd+O",
            "windows": "按 Ctrl+O",
            "linux": "按 Ctrl+O"
          },
          "scenario": "在实际工作中需要打开文件时",
          "goal": "打开文件",
          "expected": "操作后，工具完成“打开文件”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 Open）",
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
      "cmd": "Cmd+Shift+O",
      "en": "Open Quickly",
      "zh": "快速打开文件（Win/Linux 为 Ctrl+P）",
      "platformCmds": {
        "mac": "Cmd+Shift+O",
        "windows": "Ctrl+P",
        "linux": "Ctrl+P"
      },
      "id": "cc4229c2d76059f9",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 Open Quickly）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "快速打开文件（Win/Linux 为 Ctrl+P）",
        "Open Quickly",
        "Cmd+Shift+O"
      ],
      "examples": [
        {
          "value": "按 Cmd+Shift+O",
          "description": "快速打开文件（Win/Linux 为 Ctrl+P）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platformValues": {
            "mac": "按 Cmd+Shift+O",
            "windows": "按 Ctrl+P",
            "linux": "按 Ctrl+P"
          },
          "scenario": "在实际工作中需要快速打开文件（Win/Linux 为 Ctrl+P）时",
          "goal": "快速打开文件（Win/Linux 为 Ctrl+P）",
          "expected": "操作后，工具完成“快速打开文件（Win/Linux 为 Ctrl+P）”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 Open Quickly）",
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
      "cmd": "Cmd+Shift+T",
      "en": "Reopen Closed File",
      "zh": "重新打开上次关闭的文件",
      "platformCmds": {
        "mac": "Cmd+Shift+T",
        "windows": "Ctrl+Shift+T",
        "linux": "Ctrl+Shift+T"
      },
      "id": "6ef6b20bd47f1ad5",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 Reopen Closed File）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "重新打开上次关闭的文件",
        "Reopen Closed File",
        "Cmd+Shift+T"
      ],
      "examples": [
        {
          "value": "按 Cmd+Shift+T",
          "description": "重新打开上次关闭的文件",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platformValues": {
            "mac": "按 Cmd+Shift+T",
            "windows": "按 Ctrl+Shift+T",
            "linux": "按 Ctrl+Shift+T"
          },
          "scenario": "在实际工作中需要重新打开上次关闭的文件时",
          "goal": "重新打开上次关闭的文件",
          "expected": "操作后，工具完成“重新打开上次关闭的文件”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 Reopen Closed File）",
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
      "cmd": "Cmd+S",
      "en": "Save",
      "zh": "保存文件",
      "platformCmds": {
        "mac": "Cmd+S",
        "windows": "Ctrl+S",
        "linux": "Ctrl+S"
      },
      "id": "0fb7315bb64bf0cf",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 Save）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "保存文件",
        "Save",
        "Cmd+S"
      ],
      "examples": [
        {
          "value": "按 Cmd+S",
          "description": "保存文件",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platformValues": {
            "mac": "按 Cmd+S",
            "windows": "按 Ctrl+S",
            "linux": "按 Ctrl+S"
          },
          "scenario": "在实际工作中需要保存文件时",
          "goal": "保存文件",
          "expected": "操作后，工具完成“保存文件”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 Save）",
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
      "cmd": "Cmd+Shift+S",
      "en": "Save As / Duplicate",
      "zh": "另存为/复制文件",
      "platformCmds": {
        "mac": "Cmd+Shift+S",
        "windows": "Ctrl+Shift+S",
        "linux": "Ctrl+Shift+S"
      },
      "id": "c5a706b54d1b01a8",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 Save As / Duplicate）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "复制",
        "克隆",
        "拷贝",
        "另存为/复制文件",
        "Save As / Duplicate",
        "Cmd+Shift+S"
      ],
      "examples": [
        {
          "value": "按 Cmd+Shift+S",
          "description": "另存为/复制文件",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platformValues": {
            "mac": "按 Cmd+Shift+S",
            "windows": "按 Ctrl+Shift+S",
            "linux": "按 Ctrl+Shift+S"
          },
          "scenario": "在实际工作中需要另存为/复制文件时",
          "goal": "另存为/复制文件",
          "expected": "操作后，工具完成“另存为/复制文件”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 Save As / Duplicate）",
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
      "cmd": "Cmd+,",
      "en": "Preferences",
      "zh": "打开偏好设置",
      "platformCmds": {
        "mac": "Cmd+,",
        "windows": "Ctrl+,",
        "linux": "Ctrl+,"
      },
      "id": "24e974bc64d8dbae",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 Preferences）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "配置",
        "设置",
        "偏好",
        "打开偏好设置",
        "Preferences",
        "Cmd+,"
      ],
      "examples": [
        {
          "value": "按 Cmd+,",
          "description": "打开偏好设置",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platformValues": {
            "mac": "按 Cmd+,",
            "windows": "按 Ctrl+,",
            "linux": "按 Ctrl+,"
          },
          "scenario": "在实际工作中需要打开偏好设置时",
          "goal": "打开偏好设置",
          "expected": "操作后，工具完成“打开偏好设置”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 Preferences）",
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
      "cmd": "Cmd+W",
      "en": "Close",
      "zh": "关闭当前文件",
      "platformCmds": {
        "mac": "Cmd+W",
        "windows": "Ctrl+W",
        "linux": "Ctrl+W"
      },
      "id": "10b5542160f83a12",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 Close）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "关闭当前文件",
        "Close",
        "Cmd+W"
      ],
      "examples": [
        {
          "value": "按 Cmd+W",
          "description": "关闭当前文件",
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
          "scenario": "在实际工作中需要关闭当前文件时",
          "goal": "关闭当前文件",
          "expected": "操作后，工具完成“关闭当前文件”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 Close）",
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
      "cmd": "Enter",
      "en": "New Paragraph",
      "zh": "插入新段落",
      "id": "dd6eaa83ec27ba7f",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 New Paragraph）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "插入新段落",
        "New Paragraph",
        "Enter"
      ],
      "examples": [
        {
          "value": "按 Enter",
          "description": "插入新段落",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要插入新段落时",
          "goal": "插入新段落",
          "expected": "操作后，工具完成“插入新段落”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 New Paragraph）",
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
      "cmd": "Shift+Enter",
      "en": "New Line",
      "zh": "插入换行（不产生新段落）",
      "id": "804738897d29d2f8",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 New Line）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "插入换行（不产生新段落）",
        "New Line",
        "Shift+Enter"
      ],
      "examples": [
        {
          "value": "按 Shift+Enter",
          "description": "插入换行（不产生新段落）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要插入换行（不产生新段落）时",
          "goal": "插入换行（不产生新段落）",
          "expected": "操作后，工具完成“插入换行（不产生新段落）”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 New Line）",
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
      "cmd": "Cmd+X",
      "en": "Cut",
      "zh": "剪切",
      "platformCmds": {
        "mac": "Cmd+X",
        "windows": "Ctrl+X",
        "linux": "Ctrl+X"
      },
      "id": "4d519c2944e0299c",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 Cut）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "剪切",
        "Cut",
        "Cmd+X"
      ],
      "examples": [
        {
          "value": "按 Cmd+X",
          "description": "剪切",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platformValues": {
            "mac": "按 Cmd+X",
            "windows": "按 Ctrl+X",
            "linux": "按 Ctrl+X"
          },
          "scenario": "在实际工作中需要剪切时",
          "goal": "剪切",
          "expected": "操作后，工具完成“剪切”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 Cut）",
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
      "cmd": "Cmd+C",
      "en": "Copy",
      "zh": "复制",
      "platformCmds": {
        "mac": "Cmd+C",
        "windows": "Ctrl+C",
        "linux": "Ctrl+C"
      },
      "id": "a6ec5756b87fc283",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 Copy）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "复制",
        "克隆",
        "拷贝",
        "Copy",
        "Cmd+C"
      ],
      "examples": [
        {
          "value": "按 Cmd+C",
          "description": "复制",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platformValues": {
            "mac": "按 Cmd+C",
            "windows": "按 Ctrl+C",
            "linux": "按 Ctrl+C"
          },
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 Copy）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Typora中需要复制，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+C”复制。",
          "expected": "快捷键触发后，当前界面完成“复制”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+V",
      "en": "Paste",
      "zh": "粘贴",
      "platformCmds": {
        "mac": "Cmd+V",
        "windows": "Ctrl+V",
        "linux": "Ctrl+V"
      },
      "id": "0b96d5c613e5e29f",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 Paste）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "粘贴",
        "Paste",
        "Cmd+V"
      ],
      "examples": [
        {
          "value": "按 Cmd+V",
          "description": "粘贴",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platformValues": {
            "mac": "按 Cmd+V",
            "windows": "按 Ctrl+V",
            "linux": "按 Ctrl+V"
          },
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 Paste）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Typora中需要粘贴，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+V”粘贴。",
          "expected": "快捷键触发后，当前界面完成“粘贴”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+Shift+C",
      "en": "Copy as Markdown",
      "zh": "复制为 Markdown 格式",
      "platformCmds": {
        "mac": "Cmd+Shift+C",
        "windows": "Ctrl+Shift+C",
        "linux": "Ctrl+Shift+C"
      },
      "id": "d3e7c31ae2cd41e6",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 Copy as Markdown）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "复制",
        "克隆",
        "拷贝",
        "格式化",
        "代码格式",
        "排版",
        "复制为 Markdown 格式",
        "Copy as Markdown"
      ],
      "examples": [
        {
          "value": "按 Cmd+Shift+C",
          "description": "复制为 Markdown 格式",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platformValues": {
            "mac": "按 Cmd+Shift+C",
            "windows": "按 Ctrl+Shift+C",
            "linux": "按 Ctrl+Shift+C"
          },
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 Copy as Markdown）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Typora中需要复制为 Markdown 格式，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+Shift+C”复制为 Markdown 格式。",
          "expected": "快捷键触发后，当前界面完成“复制为 Markdown 格式”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+Shift+V",
      "en": "Paste as Plain Text",
      "zh": "粘贴为纯文本",
      "platformCmds": {
        "mac": "Cmd+Shift+V",
        "windows": "Ctrl+Shift+V",
        "linux": "Ctrl+Shift+V"
      },
      "id": "0c90d93b678482f4",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 Paste as Plain Text）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "粘贴为纯文本",
        "Paste as Plain Text",
        "Cmd+Shift+V"
      ],
      "examples": [
        {
          "value": "按 Cmd+Shift+V（Win/Linux 为 Ctrl+Shift+V）",
          "description": "粘贴为纯文本，避免带入原格式",
          "copyable": false,
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "typora-shortcuts"
          ],
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 Paste as Plain Text）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Typora中需要粘贴为纯文本，避免带入原格式，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+Shift+V（Win/Linux 为 Ctrl+Shift+V）”粘贴为纯文本。",
          "expected": "快捷键触发后，当前界面完成“粘贴为纯文本，避免带入原格式”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+A",
      "en": "Select All",
      "zh": "全选",
      "platformCmds": {
        "mac": "Cmd+A",
        "windows": "Ctrl+A",
        "linux": "Ctrl+A"
      },
      "id": "5122308a465b18b4",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 Select All）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "全选",
        "Select All",
        "Cmd+A"
      ],
      "examples": [
        {
          "value": "按 Cmd+A",
          "description": "全选",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platformValues": {
            "mac": "按 Cmd+A",
            "windows": "按 Ctrl+A",
            "linux": "按 Ctrl+A"
          },
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 Select All）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Typora中需要全选，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+A”全选。",
          "expected": "快捷键触发后，当前界面完成“全选”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+L",
      "en": "Select Line / Sentence / Row",
      "zh": "选中当前行/句子；在表格中选中当前行",
      "platformCmds": {
        "mac": "Cmd+L",
        "windows": "Ctrl+L",
        "linux": "Ctrl+L"
      },
      "id": "a1bdb96a275eba34",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 Select Line / Sentence / Row）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "选中当前行/句子；在表格中选中当前行",
        "Select Line / Sentence / Row",
        "Cmd+L"
      ],
      "examples": [
        {
          "value": "按 Cmd+L",
          "description": "选中当前行/句子；在表格中选中当前行",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platformValues": {
            "mac": "按 Cmd+L",
            "windows": "按 Ctrl+L",
            "linux": "按 Ctrl+L"
          },
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 Select Line / Sentence / Row）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Typora中需要选中当前行/句子；在表格中选中当前行，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+L”选中当前行/句子；在表格中选中当前行。",
          "expected": "快捷键触发后，当前界面完成“选中当前行/句子；在表格中选中当前行”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+Shift+Backspace",
      "en": "Delete Row (in table)",
      "zh": "删除当前表格行",
      "platformCmds": {
        "mac": "Cmd+Shift+Backspace",
        "windows": "Ctrl+Shift+Backspace",
        "linux": "Ctrl+Shift+Backspace"
      },
      "id": "dbe5ef5ec55f3433",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 Delete Row (in table)）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "删除",
        "移除",
        "清理",
        "删除当前表格行",
        "Delete Row (in table)",
        "Cmd+Shift+Backspace"
      ],
      "examples": [
        {
          "value": "按 Cmd+Shift+Backspace",
          "description": "删除当前表格行",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platformValues": {
            "mac": "按 Cmd+Shift+Backspace",
            "windows": "按 Ctrl+Shift+Backspace",
            "linux": "按 Ctrl+Shift+Backspace"
          },
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 Delete Row (in table)）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Typora中需要删除当前表格行，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+Shift+Backspace”删除当前表格行。",
          "expected": "快捷键触发后，当前界面完成“删除当前表格行”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+E",
      "en": "Select Style Scope / Cell",
      "zh": "选中当前样式范围；在表格中选中当前单元格",
      "platformCmds": {
        "mac": "Cmd+E",
        "windows": "Ctrl+E",
        "linux": "Ctrl+E"
      },
      "id": "fe043cda3d3ed81a",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 Select Style Scope / Cell）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "选中当前样式范围；在表格中选中当前单元格",
        "Select Style Scope / Cell",
        "Cmd+E"
      ],
      "examples": [
        {
          "value": "按 Cmd+E",
          "description": "选中当前样式范围；在表格中选中当前单元格",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platformValues": {
            "mac": "按 Cmd+E",
            "windows": "按 Ctrl+E",
            "linux": "按 Ctrl+E"
          },
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 Select Style Scope / Cell）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Typora中需要选中当前样式范围；在表格中选中当前单元格，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+E”选中当前样式范围；在表格中选中当前单元格。",
          "expected": "快捷键触发后，当前界面完成“选中当前样式范围；在表格中选中当前单元格”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+D",
      "en": "Select Word",
      "zh": "选中当前词",
      "platformCmds": {
        "mac": "Cmd+D",
        "windows": "Ctrl+D",
        "linux": "Ctrl+D"
      },
      "id": "f72bdbb8d52e2e54",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 Select Word）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "选中当前词",
        "Select Word",
        "Cmd+D"
      ],
      "examples": [
        {
          "value": "按 Cmd+D",
          "description": "选中当前词",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platformValues": {
            "mac": "按 Cmd+D",
            "windows": "按 Ctrl+D",
            "linux": "按 Ctrl+D"
          },
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 Select Word）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Typora中需要选中当前词，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+D”选中当前词。",
          "expected": "快捷键触发后，当前界面完成“选中当前词”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+Shift+D",
      "en": "Delete Word",
      "zh": "删除当前词",
      "platformCmds": {
        "mac": "Cmd+Shift+D",
        "windows": "Ctrl+Shift+D",
        "linux": "Ctrl+Shift+D"
      },
      "id": "e3f13fc45fbfcf1c",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 Delete Word）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "删除",
        "移除",
        "清理",
        "删除当前词",
        "Delete Word",
        "Cmd+Shift+D"
      ],
      "examples": [
        {
          "value": "按 Cmd+Shift+D",
          "description": "删除当前词",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platformValues": {
            "mac": "按 Cmd+Shift+D",
            "windows": "按 Ctrl+Shift+D",
            "linux": "按 Ctrl+Shift+D"
          },
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 Delete Word）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Typora中需要删除当前词，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+Shift+D”删除当前词。",
          "expected": "快捷键触发后，当前界面完成“删除当前词”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+Up",
      "en": "Jump to Top",
      "zh": "跳转到文件顶部（Win/Linux 为 Ctrl+Home）",
      "context": "编辑器",
      "platformCmds": {
        "mac": "Cmd+Up",
        "windows": "Ctrl+Home",
        "linux": "Ctrl+Home"
      },
      "id": "289dc1bf4f7804ee",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 Jump to Top）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "跳转到文件顶部（Win/Linux 为 Ctrl+Home）",
        "Jump to Top",
        "Cmd+Up"
      ],
      "examples": [
        {
          "value": "按 Cmd+Up（编辑器）",
          "description": "编辑器：跳转到文件顶部（Win/Linux 为 Ctrl+Home）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platformValues": {
            "mac": "按 Cmd+Up（编辑器）",
            "windows": "按 Ctrl+Home（编辑器）",
            "linux": "按 Ctrl+Home（编辑器）"
          },
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 Jump to Top）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在编辑器场景中需要编辑器：跳转到文件顶部（Win/Linux 为 Ctrl+Home），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+Up（编辑器）”跳转到文件顶部（Win/Linux 为 Ctrl+Home）。",
          "expected": "快捷键触发后，当前界面完成“编辑器：跳转到文件顶部（Win/Linux 为 Ctrl+Home）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+J",
      "en": "Jump to Selection",
      "zh": "跳转到当前选中位置",
      "platformCmds": {
        "mac": "Cmd+J",
        "windows": "Ctrl+J",
        "linux": "Ctrl+J"
      },
      "id": "11061da1568d8e51",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 Jump to Selection）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "跳转到当前选中位置",
        "Jump to Selection",
        "Cmd+J"
      ],
      "examples": [
        {
          "value": "按 Cmd+J",
          "description": "跳转到当前选中位置",
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
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 Jump to Selection）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Typora中需要跳转到当前选中位置，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+J”跳转到当前选中位置。",
          "expected": "快捷键触发后，当前界面完成“跳转到当前选中位置”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+Down",
      "en": "Jump to Bottom",
      "zh": "跳转到文件底部（Win/Linux 为 Ctrl+End）",
      "context": "编辑器",
      "platformCmds": {
        "mac": "Cmd+Down",
        "windows": "Ctrl+End",
        "linux": "Ctrl+End"
      },
      "id": "bf56b694c58d4a48",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 Jump to Bottom）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "跳转到文件底部（Win/Linux 为 Ctrl+End）",
        "Jump to Bottom",
        "Cmd+Down"
      ],
      "examples": [
        {
          "value": "按 Cmd+Down（编辑器）",
          "description": "编辑器：跳转到文件底部（Win/Linux 为 Ctrl+End）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platformValues": {
            "mac": "按 Cmd+Down（编辑器）",
            "windows": "按 Ctrl+End（编辑器）",
            "linux": "按 Ctrl+End（编辑器）"
          },
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 Jump to Bottom）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在编辑器场景中需要编辑器：跳转到文件底部（Win/Linux 为 Ctrl+End），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+Down（编辑器）”跳转到文件底部（Win/Linux 为 Ctrl+End）。",
          "expected": "快捷键触发后，当前界面完成“编辑器：跳转到文件底部（Win/Linux 为 Ctrl+End）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+F",
      "en": "Find",
      "zh": "查找",
      "platformCmds": {
        "mac": "Cmd+F",
        "windows": "Ctrl+F",
        "linux": "Ctrl+F"
      },
      "id": "fd71edc6b52ea168",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 Find）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "搜索",
        "查找",
        "定位",
        "Find",
        "Cmd+F"
      ],
      "examples": [
        {
          "value": "按 Cmd+F",
          "description": "查找",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platformValues": {
            "mac": "按 Cmd+F",
            "windows": "按 Ctrl+F",
            "linux": "按 Ctrl+F"
          },
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 Find）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Typora中需要查找，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+F”查找。",
          "expected": "快捷键触发后，当前界面完成“查找”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+G",
      "en": "Find Next",
      "zh": "查找下一个（Win/Linux 为 F3）",
      "platformCmds": {
        "mac": "Cmd+G",
        "windows": "F3",
        "linux": "F3"
      },
      "id": "7da050c32b248007",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 Find Next）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "搜索",
        "查找",
        "定位",
        "查找下一个（Win/Linux 为 F3）",
        "Find Next",
        "Cmd+G"
      ],
      "examples": [
        {
          "value": "按 Cmd+G",
          "description": "查找下一个（Win/Linux 为 F3）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platformValues": {
            "mac": "按 Cmd+G",
            "windows": "按 F3",
            "linux": "按 F3"
          },
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 Find Next）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Typora中需要查找下一个（Win/Linux 为 F3），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+G”查找下一个（Win/Linux 为 F3）。",
          "expected": "快捷键触发后，当前界面完成“查找下一个（Win/Linux 为 F3）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+Shift+G",
      "en": "Find Previous",
      "zh": "查找上一个（Win/Linux 为 Shift+F3）",
      "platformCmds": {
        "mac": "Cmd+Shift+G",
        "windows": "Shift+F3",
        "linux": "Shift+F3"
      },
      "id": "0698e50ed572f4a7",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 Find Previous）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "搜索",
        "查找",
        "定位",
        "查找上一个（Win/Linux 为 Shift+F3）",
        "Find Previous",
        "Cmd+Shift+G"
      ],
      "examples": [
        {
          "value": "按 Cmd+Shift+G",
          "description": "查找上一个（Win/Linux 为 Shift+F3）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platformValues": {
            "mac": "按 Cmd+Shift+G",
            "windows": "按 Shift+F3",
            "linux": "按 Shift+F3"
          },
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 Find Previous）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Typora中需要查找上一个（Win/Linux 为 Shift+F3），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+Shift+G”查找上一个（Win/Linux 为 Shift+F3）。",
          "expected": "快捷键触发后，当前界面完成“查找上一个（Win/Linux 为 Shift+F3）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+H",
      "en": "Replace",
      "zh": "查找并替换",
      "platformCmds": {
        "mac": "Cmd+H",
        "windows": "Ctrl+H",
        "linux": "Ctrl+H"
      },
      "id": "bef7d3a3d2866e3b",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 Replace）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "搜索",
        "查找",
        "定位",
        "替换",
        "取代",
        "文本替换",
        "查找并替换",
        "Replace"
      ],
      "examples": [
        {
          "value": "按 Cmd+H",
          "description": "查找并替换",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platformValues": {
            "mac": "按 Cmd+H",
            "windows": "按 Ctrl+H",
            "linux": "按 Ctrl+H"
          },
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 Replace）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Typora中需要查找并替换，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+H”查找并替换。",
          "expected": "快捷键触发后，当前界面完成“查找并替换”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+1",
      "en": "Heading 1",
      "zh": "设为一级标题（Cmd+2~6 对应二至六级标题）",
      "platformCmds": {
        "mac": "Cmd+1",
        "windows": "Ctrl+1",
        "linux": "Ctrl+1"
      },
      "id": "55c6c5a47338ccfe",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 Heading 1）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "设为一级标题（Cmd+2~6 对应二至六级标题）",
        "Heading 1",
        "Cmd+1"
      ],
      "examples": [
        {
          "value": "# 一级标题",
          "description": "Markdown 一级标题的输入形式",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "typora-shortcuts"
          ],
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 Heading 1）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Typora中需要Markdown 一级标题的输入形式，希望直接通过键盘完成该操作时。",
          "goal": "使用“# 一级标题”设为一级标题（Cmd+2~6 对应二至六级标题）。",
          "expected": "快捷键触发后，当前界面完成“Markdown 一级标题的输入形式”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+0",
      "en": "Paragraph",
      "zh": "设为普通段落",
      "platformCmds": {
        "mac": "Cmd+0",
        "windows": "Ctrl+0",
        "linux": "Ctrl+0"
      },
      "id": "b19705850252200e",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 Paragraph）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "设为普通段落",
        "Paragraph",
        "Cmd+0"
      ],
      "examples": [
        {
          "value": "按 Cmd+0",
          "description": "设为普通段落",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platformValues": {
            "mac": "按 Cmd+0",
            "windows": "按 Ctrl+0",
            "linux": "按 Ctrl+0"
          },
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 Paragraph）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Typora中需要设为普通段落，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+0”设为普通段落。",
          "expected": "快捷键触发后，当前界面完成“设为普通段落”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+=",
      "en": "Increase Heading Level",
      "zh": "提升标题级别",
      "platformCmds": {
        "mac": "Cmd+=",
        "windows": "Ctrl+=",
        "linux": "Ctrl+="
      },
      "id": "eeea61af524a6235",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 Increase Heading Level）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "提升标题级别",
        "Increase Heading Level",
        "Cmd+="
      ],
      "examples": [
        {
          "value": "按 Cmd+=",
          "description": "提升标题级别",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platformValues": {
            "mac": "按 Cmd+=",
            "windows": "按 Ctrl+=",
            "linux": "按 Ctrl+="
          },
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 Increase Heading Level）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Typora中需要提升标题级别，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+=”提升标题级别。",
          "expected": "快捷键触发后，当前界面完成“提升标题级别”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+-",
      "en": "Decrease Heading Level",
      "zh": "降低标题级别",
      "platformCmds": {
        "mac": "Cmd+-",
        "windows": "Ctrl+-",
        "linux": "Ctrl+-"
      },
      "id": "9294f722dfffaa5a",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 Decrease Heading Level）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "降低标题级别",
        "Decrease Heading Level",
        "Cmd+-"
      ],
      "examples": [
        {
          "value": "按 Cmd+-",
          "description": "降低标题级别",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platformValues": {
            "mac": "按 Cmd+-",
            "windows": "按 Ctrl+-",
            "linux": "按 Ctrl+-"
          },
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 Decrease Heading Level）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Typora中需要降低标题级别，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+-”降低标题级别。",
          "expected": "快捷键触发后，当前界面完成“降低标题级别”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+Option+T",
      "en": "Insert Table",
      "zh": "插入表格（Win/Linux 为 Ctrl+T）",
      "platformCmds": {
        "mac": "Cmd+Option+T",
        "windows": "Ctrl+T",
        "linux": "Ctrl+T"
      },
      "id": "6b03e4fa2cc02263",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 Insert Table）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "插入表格（Win/Linux 为 Ctrl+T）",
        "Insert Table",
        "Cmd+Option+T"
      ],
      "examples": [
        {
          "value": "| 名称 | 状态 |\n| --- | --- |\n| 示例 | 完成 |",
          "description": "一个两列表格的 Markdown 输入",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "typora-shortcuts"
          ],
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 Insert Table）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Typora中需要一个两列表格的 Markdown 输入，希望直接通过键盘完成该操作时。",
          "goal": "使用“| 名称 | 状态 |\n| --- | --- |\n| 示例 | 完成 |”插入表格（Win/Linux 为 Ctrl+T）。",
          "expected": "快捷键触发后，当前界面完成“一个两列表格的 Markdown 输入”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+Option+C",
      "en": "Code Fences",
      "zh": "插入代码块（Win/Linux 为 Ctrl+Shift+K）",
      "platformCmds": {
        "mac": "Cmd+Option+C",
        "windows": "Ctrl+Shift+K",
        "linux": "Ctrl+Shift+K"
      },
      "id": "8ff5d4ebf926ac5b",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 Code Fences）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "插入代码块（Win/Linux 为 Ctrl+Shift+K）",
        "Code Fences",
        "Cmd+Option+C"
      ],
      "examples": [
        {
          "value": "```js\nconsole.log('hello');\n```",
          "description": "带语言标记的 JavaScript 代码块",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "typora-shortcuts"
          ],
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 Code Fences）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Typora中需要带语言标记的 JavaScript 代码块，希望直接通过键盘完成该操作时。",
          "goal": "使用“```js\nconsole.log('hello');\n```”插入代码块（Win/Linux 为 Ctrl+Shift+K）。",
          "expected": "快捷键触发后，当前界面完成“带语言标记的 JavaScript 代码块”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+Option+B",
      "en": "Math Block",
      "zh": "插入数学公式块（Win/Linux 为 Ctrl+Shift+M）",
      "platformCmds": {
        "mac": "Cmd+Option+B",
        "windows": "Ctrl+Shift+M",
        "linux": "Ctrl+Shift+M"
      },
      "id": "03e24719a62cb637",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 Math Block）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "插入数学公式块（Win/Linux 为 Ctrl+Shift+M）",
        "Math Block",
        "Cmd+Option+B"
      ],
      "examples": [
        {
          "value": "按 Cmd+Option+B",
          "description": "插入数学公式块（Win/Linux 为 Ctrl+Shift+M）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platformValues": {
            "mac": "按 Cmd+Option+B",
            "windows": "按 Ctrl+Shift+M",
            "linux": "按 Ctrl+Shift+M"
          },
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 Math Block）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Typora中需要插入数学公式块（Win/Linux 为 Ctrl+Shift+M），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+Option+B”插入数学公式块（Win/Linux 为 Ctrl+Shift+M）。",
          "expected": "快捷键触发后，当前界面完成“插入数学公式块（Win/Linux 为 Ctrl+Shift+M）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+Option+Q",
      "en": "Quote",
      "zh": "插入引用块（Win/Linux 为 Ctrl+Shift+Q）",
      "platformCmds": {
        "mac": "Cmd+Option+Q",
        "windows": "Ctrl+Shift+Q",
        "linux": "Ctrl+Shift+Q"
      },
      "id": "ee378e4458574444",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 Quote）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "插入引用块（Win/Linux 为 Ctrl+Shift+Q）",
        "Quote",
        "Cmd+Option+Q"
      ],
      "examples": [
        {
          "value": "按 Cmd+Option+Q",
          "description": "插入引用块（Win/Linux 为 Ctrl+Shift+Q）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platformValues": {
            "mac": "按 Cmd+Option+Q",
            "windows": "按 Ctrl+Shift+Q",
            "linux": "按 Ctrl+Shift+Q"
          },
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 Quote）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Typora中需要插入引用块（Win/Linux 为 Ctrl+Shift+Q），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+Option+Q”插入引用块（Win/Linux 为 Ctrl+Shift+Q）。",
          "expected": "快捷键触发后，当前界面完成“插入引用块（Win/Linux 为 Ctrl+Shift+Q）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+Option+O",
      "en": "Ordered List",
      "zh": "插入有序列表（Win/Linux 为 Ctrl+Shift+[）",
      "platformCmds": {
        "mac": "Cmd+Option+O",
        "windows": "Ctrl+Shift+[",
        "linux": "Ctrl+Shift+["
      },
      "id": "e2320f2497efa296",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 Ordered List）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "插入有序列表（Win/Linux 为 Ctrl+Shift+[）",
        "Ordered List",
        "Cmd+Option+O"
      ],
      "examples": [
        {
          "value": "按 Cmd+Option+O",
          "description": "插入有序列表（Win/Linux 为 Ctrl+Shift+[）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platformValues": {
            "mac": "按 Cmd+Option+O",
            "windows": "按 Ctrl+Shift+[",
            "linux": "按 Ctrl+Shift+["
          },
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 Ordered List）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Typora中需要插入有序列表（Win/Linux 为 Ctrl+Shift+[），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+Option+O”插入有序列表（Win/Linux 为 Ctrl+Shift+[）。",
          "expected": "快捷键触发后，当前界面完成“插入有序列表（Win/Linux 为 Ctrl+Shift+[）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+Option+U",
      "en": "Unordered List",
      "zh": "插入无序列表（Win/Linux 为 Ctrl+Shift+]）",
      "platformCmds": {
        "mac": "Cmd+Option+U",
        "windows": "Ctrl+Shift+]",
        "linux": "Ctrl+Shift+]"
      },
      "id": "34740a0b6b63d659",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 Unordered List）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "插入无序列表（Win/Linux 为 Ctrl+Shift+]）",
        "Unordered List",
        "Cmd+Option+U"
      ],
      "examples": [
        {
          "value": "- 第一项\n- 第二项",
          "description": "Markdown 无序列表的输入形式",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "typora-shortcuts"
          ],
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 Unordered List）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Typora中需要Markdown 无序列表的输入形式，希望直接通过键盘完成该操作时。",
          "goal": "使用“- 第一项\n- 第二项”插入无序列表（Win/Linux 为 Ctrl+Shift+]）。",
          "expected": "快捷键触发后，当前界面完成“Markdown 无序列表的输入形式”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+[",
      "en": "Indent",
      "zh": "增加缩进",
      "platformCmds": {
        "mac": "Cmd+[",
        "windows": "Ctrl+[",
        "linux": "Ctrl+["
      },
      "id": "13b2abce829f762c",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 Indent）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "增加缩进",
        "Indent",
        "Cmd+["
      ],
      "examples": [
        {
          "value": "按 Cmd+[",
          "description": "增加缩进",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platformValues": {
            "mac": "按 Cmd+[",
            "windows": "按 Ctrl+[",
            "linux": "按 Ctrl+["
          },
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 Indent）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Typora中需要增加缩进，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+[”增加缩进。",
          "expected": "快捷键触发后，当前界面完成“增加缩进”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+]",
      "en": "Outdent",
      "zh": "减少缩进",
      "platformCmds": {
        "mac": "Cmd+]",
        "windows": "Ctrl+]",
        "linux": "Ctrl+]"
      },
      "id": "f859f83b210ea7c8",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 Outdent）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "减少缩进",
        "Outdent",
        "Cmd+]"
      ],
      "examples": [
        {
          "value": "按 Cmd+]",
          "description": "减少缩进",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platformValues": {
            "mac": "按 Cmd+]",
            "windows": "按 Ctrl+]",
            "linux": "按 Ctrl+]"
          },
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 Outdent）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Typora中需要减少缩进，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+]”减少缩进。",
          "expected": "快捷键触发后，当前界面完成“减少缩进”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+B",
      "en": "Bold",
      "zh": "加粗",
      "platformCmds": {
        "mac": "Cmd+B",
        "windows": "Ctrl+B",
        "linux": "Ctrl+B"
      },
      "id": "00d23027eb3ed071",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 Bold）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "加粗",
        "Bold",
        "Cmd+B"
      ],
      "examples": [
        {
          "value": "**重要内容**",
          "description": "Markdown 加粗文本的输入形式",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "typora-shortcuts"
          ],
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 Bold）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Typora中需要Markdown 加粗文本的输入形式，希望直接通过键盘完成该操作时。",
          "goal": "使用“**重要内容**”加粗。",
          "expected": "快捷键触发后，当前界面完成“Markdown 加粗文本的输入形式”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+I",
      "en": "Italic",
      "zh": "斜体",
      "platformCmds": {
        "mac": "Cmd+I",
        "windows": "Ctrl+I",
        "linux": "Ctrl+I"
      },
      "id": "fd0e57a1304905f7",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 Italic）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "斜体",
        "Italic",
        "Cmd+I"
      ],
      "examples": [
        {
          "value": "按 Cmd+I",
          "description": "斜体",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platformValues": {
            "mac": "按 Cmd+I",
            "windows": "按 Ctrl+I",
            "linux": "按 Ctrl+I"
          },
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 Italic）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Typora中需要斜体，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+I”斜体。",
          "expected": "快捷键触发后，当前界面完成“斜体”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+U",
      "en": "Underline",
      "zh": "下划线",
      "platformCmds": {
        "mac": "Cmd+U",
        "windows": "Ctrl+U",
        "linux": "Ctrl+U"
      },
      "id": "31aea4d9d0228611",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 Underline）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "下划线",
        "Underline",
        "Cmd+U"
      ],
      "examples": [
        {
          "value": "按 Cmd+U",
          "description": "下划线",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platformValues": {
            "mac": "按 Cmd+U",
            "windows": "按 Ctrl+U",
            "linux": "按 Ctrl+U"
          },
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 Underline）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Typora中需要下划线，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+U”下划线。",
          "expected": "快捷键触发后，当前界面完成“下划线”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+Shift+`",
      "en": "Inline Code",
      "zh": "行内代码",
      "platformCmds": {
        "mac": "Cmd+Shift+`",
        "windows": "Ctrl+Shift+`",
        "linux": "Ctrl+Shift+`"
      },
      "id": "c17f2a3e2652e1fd",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 Inline Code）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "行内代码",
        "Inline Code",
        "Cmd+Shift+`"
      ],
      "examples": [
        {
          "value": "`npm test`",
          "description": "Markdown 行内代码的输入形式",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "typora-shortcuts"
          ],
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 Inline Code）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Typora中需要Markdown 行内代码的输入形式，希望直接通过键盘完成该操作时。",
          "goal": "使用“`npm test`”行内代码。",
          "expected": "快捷键触发后，当前界面完成“Markdown 行内代码的输入形式”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl+Shift+`",
      "en": "Strikethrough",
      "zh": "删除线（Win/Linux 为 Alt+Shift+5）",
      "platformCmds": {
        "mac": "Ctrl+Shift+`",
        "windows": "Alt+Shift+5",
        "linux": "Alt+Shift+5"
      },
      "id": "bd9971cf8f5dbd41",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 Strikethrough）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "删除",
        "移除",
        "清理",
        "删除线（Win/Linux 为 Alt+Shift+5）",
        "Strikethrough",
        "Ctrl+Shift+`"
      ],
      "examples": [
        {
          "value": "按 Ctrl+Shift+`",
          "description": "删除线（Win/Linux 为 Alt+Shift+5）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platformValues": {
            "mac": "按 Ctrl+Shift+`",
            "windows": "按 Alt+Shift+5",
            "linux": "按 Alt+Shift+5"
          },
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 Strikethrough）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Typora中需要删除线（Win/Linux 为 Alt+Shift+5），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Ctrl+Shift+`”删除线（Win/Linux 为 Alt+Shift+5）。",
          "expected": "快捷键触发后，当前界面完成“删除线（Win/Linux 为 Alt+Shift+5）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+K",
      "en": "Hyperlink",
      "zh": "插入超链接",
      "platformCmds": {
        "mac": "Cmd+K",
        "windows": "Ctrl+K",
        "linux": "Ctrl+K"
      },
      "id": "198d4e7754c88653",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 Hyperlink）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "插入超链接",
        "Hyperlink",
        "Cmd+K"
      ],
      "examples": [
        {
          "value": "[项目主页](https://example.com)",
          "description": "Markdown 超链接的输入形式",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "typora-shortcuts"
          ],
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 Hyperlink）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Typora中需要Markdown 超链接的输入形式，希望直接通过键盘完成该操作时。",
          "goal": "使用“[项目主页](https://example.com)”插入超链接。",
          "expected": "快捷键触发后，当前界面完成“Markdown 超链接的输入形式”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+Ctrl+I",
      "en": "Image",
      "zh": "插入图片（Win/Linux 为 Ctrl+Shift+I）",
      "platformCmds": {
        "mac": "Cmd+Ctrl+I",
        "windows": "Ctrl+Shift+I",
        "linux": "Ctrl+Shift+I"
      },
      "id": "ccf9f836058feaa3",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 Image）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "插入图片（Win/Linux 为 Ctrl+Shift+I）",
        "Image",
        "Cmd+Ctrl+I"
      ],
      "examples": [
        {
          "value": "![替代文字](./images/example.png)",
          "description": "Markdown 图片的输入形式",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "typora-shortcuts"
          ],
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 Image）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Typora中需要Markdown 图片的输入形式，希望直接通过键盘完成该操作时。",
          "goal": "使用“![替代文字](./images/example.png)”插入图片（Win/Linux 为 Ctrl+Shift+I）。",
          "expected": "快捷键触发后，当前界面完成“Markdown 图片的输入形式”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+\\",
      "en": "Clear Format",
      "zh": "清除格式",
      "platformCmds": {
        "mac": "Cmd+\\",
        "windows": "Ctrl+\\",
        "linux": "Ctrl+\\"
      },
      "id": "83f21268d02dadd3",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 Clear Format）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "格式化",
        "代码格式",
        "排版",
        "清除格式",
        "Clear Format",
        "Cmd+\\"
      ],
      "examples": [
        {
          "value": "按 Cmd+\\",
          "description": "清除格式",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platformValues": {
            "mac": "按 Cmd+\\",
            "windows": "按 Ctrl+\\",
            "linux": "按 Ctrl+\\"
          },
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 Clear Format）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Typora中需要清除格式，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+\\”清除格式。",
          "expected": "快捷键触发后，当前界面完成“清除格式”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+Shift+L",
      "en": "Toggle Sidebar",
      "zh": "切换侧边栏显示",
      "platformCmds": {
        "mac": "Cmd+Shift+L",
        "windows": "Ctrl+Shift+L",
        "linux": "Ctrl+Shift+L"
      },
      "id": "4442ca93d34ec475",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 Toggle Sidebar）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "切换侧边栏显示",
        "Toggle Sidebar",
        "Cmd+Shift+L"
      ],
      "examples": [
        {
          "value": "按 Cmd+Shift+L",
          "description": "切换侧边栏显示",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platformValues": {
            "mac": "按 Cmd+Shift+L",
            "windows": "按 Ctrl+Shift+L",
            "linux": "按 Ctrl+Shift+L"
          },
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 Toggle Sidebar）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Typora中需要切换侧边栏显示，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+Shift+L”切换侧边栏显示。",
          "expected": "快捷键触发后，当前界面完成“切换侧边栏显示”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+Ctrl+1",
      "en": "Outline Panel",
      "zh": "显示大纲面板（Win/Linux 为 Ctrl+Shift+1）",
      "platformCmds": {
        "mac": "Cmd+Ctrl+1",
        "windows": "Ctrl+Shift+1",
        "linux": "Ctrl+Shift+1"
      },
      "id": "475dcb5f19c6c6a1",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 Outline Panel）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "显示大纲面板（Win/Linux 为 Ctrl+Shift+1）",
        "Outline Panel",
        "Cmd+Ctrl+1"
      ],
      "examples": [
        {
          "value": "按 Cmd+Ctrl+1",
          "description": "显示大纲面板（Win/Linux 为 Ctrl+Shift+1）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platformValues": {
            "mac": "按 Cmd+Ctrl+1",
            "windows": "按 Ctrl+Shift+1",
            "linux": "按 Ctrl+Shift+1"
          },
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 Outline Panel）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Typora中需要显示大纲面板（Win/Linux 为 Ctrl+Shift+1），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+Ctrl+1”显示大纲面板（Win/Linux 为 Ctrl+Shift+1）。",
          "expected": "快捷键触发后，当前界面完成“显示大纲面板（Win/Linux 为 Ctrl+Shift+1）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+Ctrl+2",
      "en": "Articles Panel",
      "zh": "显示文章面板（Win/Linux 为 Ctrl+Shift+2）",
      "platformCmds": {
        "mac": "Cmd+Ctrl+2",
        "windows": "Ctrl+Shift+2",
        "linux": "Ctrl+Shift+2"
      },
      "id": "0f3aeafb87210b85",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 Articles Panel）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "显示文章面板（Win/Linux 为 Ctrl+Shift+2）",
        "Articles Panel",
        "Cmd+Ctrl+2"
      ],
      "examples": [
        {
          "value": "按 Cmd+Ctrl+2",
          "description": "显示文章面板（Win/Linux 为 Ctrl+Shift+2）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platformValues": {
            "mac": "按 Cmd+Ctrl+2",
            "windows": "按 Ctrl+Shift+2",
            "linux": "按 Ctrl+Shift+2"
          },
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 Articles Panel）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Typora中需要显示文章面板（Win/Linux 为 Ctrl+Shift+2），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+Ctrl+2”显示文章面板（Win/Linux 为 Ctrl+Shift+2）。",
          "expected": "快捷键触发后，当前界面完成“显示文章面板（Win/Linux 为 Ctrl+Shift+2）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+Ctrl+3",
      "en": "File Tree Panel",
      "zh": "显示文件树面板（Win/Linux 为 Ctrl+Shift+3）",
      "platformCmds": {
        "mac": "Cmd+Ctrl+3",
        "windows": "Ctrl+Shift+3",
        "linux": "Ctrl+Shift+3"
      },
      "id": "4617b4b7673cd19c",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 File Tree Panel）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "显示文件树面板（Win/Linux 为 Ctrl+Shift+3）",
        "File Tree Panel",
        "Cmd+Ctrl+3"
      ],
      "examples": [
        {
          "value": "按 Cmd+Ctrl+3",
          "description": "显示文件树面板（Win/Linux 为 Ctrl+Shift+3）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platformValues": {
            "mac": "按 Cmd+Ctrl+3",
            "windows": "按 Ctrl+Shift+3",
            "linux": "按 Ctrl+Shift+3"
          },
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 File Tree Panel）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Typora中需要显示文件树面板（Win/Linux 为 Ctrl+Shift+3），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+Ctrl+3”显示文件树面板（Win/Linux 为 Ctrl+Shift+3）。",
          "expected": "快捷键触发后，当前界面完成“显示文件树面板（Win/Linux 为 Ctrl+Shift+3）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+/",
      "en": "Source Code Mode",
      "zh": "切换源代码模式",
      "platformCmds": {
        "mac": "Cmd+/",
        "windows": "Ctrl+/",
        "linux": "Ctrl+/"
      },
      "id": "5de8c2eaa7f4f55a",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 Source Code Mode）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "切换源代码模式",
        "Source Code Mode",
        "Cmd+/"
      ],
      "examples": [
        {
          "value": "按 Cmd+/（Win/Linux 为 Ctrl+/）",
          "description": "在所见即所得和 Markdown 源代码模式之间切换",
          "copyable": false,
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "typora-shortcuts"
          ],
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 Source Code Mode）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Typora中需要在所见即所得和 Markdown 源代码模式之间切换，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+/（Win/Linux 为 Ctrl+/）”切换源代码模式。",
          "expected": "快捷键触发后，当前界面完成“在所见即所得和 Markdown 源代码模式之间切换”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "F8",
      "en": "Focus Mode",
      "zh": "切换专注模式（仅显示当前段落，其余变暗）",
      "id": "08099184156f407e",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 Focus Mode）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "切换专注模式（仅显示当前段落，其余变暗）",
        "Focus Mode",
        "F8"
      ],
      "examples": [
        {
          "value": "按 F8",
          "description": "切换专注模式（仅显示当前段落，其余变暗）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 Focus Mode）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Typora中需要切换专注模式（仅显示当前段落，其余变暗），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 F8”切换专注模式（仅显示当前段落，其余变暗）。",
          "expected": "快捷键触发后，当前界面完成“切换专注模式（仅显示当前段落，其余变暗）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "F9",
      "en": "Typewriter Mode",
      "zh": "切换打字机模式（光标始终固定在屏幕中央）",
      "id": "a09eb4a8af3b4e51",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 Typewriter Mode）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "切换打字机模式（光标始终固定在屏幕中央）",
        "Typewriter Mode",
        "F9"
      ],
      "examples": [
        {
          "value": "按 F9",
          "description": "切换打字机模式（光标始终固定在屏幕中央）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 Typewriter Mode）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Typora中需要切换打字机模式（光标始终固定在屏幕中央），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 F9”切换打字机模式（光标始终固定在屏幕中央）。",
          "expected": "快捷键触发后，当前界面完成“切换打字机模式（光标始终固定在屏幕中央）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+Option+F",
      "en": "Toggle Fullscreen",
      "zh": "切换全屏（Win/Linux 为 F11）",
      "platformCmds": {
        "mac": "Cmd+Option+F",
        "windows": "F11",
        "linux": "F11"
      },
      "id": "17e36767d36d67d4",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 Toggle Fullscreen）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "切换全屏（Win/Linux 为 F11）",
        "Toggle Fullscreen",
        "Cmd+Option+F"
      ],
      "examples": [
        {
          "value": "按 Cmd+Option+F",
          "description": "切换全屏（Win/Linux 为 F11）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platformValues": {
            "mac": "按 Cmd+Option+F",
            "windows": "按 F11",
            "linux": "按 F11"
          },
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 Toggle Fullscreen）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Typora中需要切换全屏（Win/Linux 为 F11），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+Option+F”切换全屏（Win/Linux 为 F11）。",
          "expected": "快捷键触发后，当前界面完成“切换全屏（Win/Linux 为 F11）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+`",
      "en": "Switch Between Documents",
      "zh": "在打开的文档间切换（Win/Linux 为 Ctrl+Tab）",
      "platformCmds": {
        "mac": "Cmd+`",
        "windows": "Ctrl+Tab",
        "linux": "Ctrl+Tab"
      },
      "id": "496dd8ec12ec6914",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 Switch Between Documents）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "在打开的文档间切换（Win/Linux 为 Ctrl+Tab）",
        "Switch Between Documents",
        "Cmd+`"
      ],
      "examples": [
        {
          "value": "按 Cmd+`",
          "description": "在打开的文档间切换（Win/Linux 为 Ctrl+Tab）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platformValues": {
            "mac": "按 Cmd+`",
            "windows": "按 Ctrl+Tab",
            "linux": "按 Ctrl+Tab"
          },
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 Switch Between Documents）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Typora中需要在打开的文档间切换（Win/Linux 为 Ctrl+Tab），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+`”在打开的文档间切换（Win/Linux 为 Ctrl+Tab）。",
          "expected": "快捷键触发后，当前界面完成“在打开的文档间切换（Win/Linux 为 Ctrl+Tab）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Shift+F12",
      "en": "Toggle DevTools",
      "zh": "切换开发者工具（仅 Windows/Linux 支持）",
      "platforms": [
        "windows",
        "linux"
      ],
      "id": "2a361d0f31d3cbb1",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 Toggle DevTools）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "切换开发者工具（仅 Windows/Linux 支持）",
        "Toggle DevTools",
        "Shift+F12"
      ],
      "examples": [
        {
          "value": "按 Shift+F12",
          "description": "切换开发者工具（仅 Windows/Linux 支持）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platforms": [
            "windows",
            "linux"
          ],
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 Toggle DevTools）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Typora中需要切换开发者工具（仅 Windows/Linux 支持），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Shift+F12”切换开发者工具（仅 Windows/Linux 支持）。",
          "expected": "快捷键触发后，当前界面完成“切换开发者工具（仅 Windows/Linux 支持）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl+Shift+0",
      "en": "Actual Size",
      "zh": "恢复实际大小（仅 Windows/Linux 支持）",
      "platforms": [
        "windows",
        "linux"
      ],
      "platformCmds": {
        "windows": "Ctrl+Shift+0",
        "linux": "Ctrl+Shift+0"
      },
      "id": "2d807b9fdd37a8f7",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 Actual Size）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "恢复实际大小（仅 Windows/Linux 支持）",
        "Actual Size",
        "Ctrl+Shift+0"
      ],
      "examples": [
        {
          "value": "按 Ctrl+Shift+0",
          "description": "恢复实际大小（仅 Windows/Linux 支持）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platforms": [
            "windows",
            "linux"
          ],
          "platformValues": {
            "windows": "按 Ctrl+Shift+0",
            "linux": "按 Ctrl+Shift+0"
          },
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 Actual Size）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Typora中需要恢复实际大小（仅 Windows/Linux 支持），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Ctrl+Shift+0”恢复实际大小（仅 Windows/Linux 支持）。",
          "expected": "快捷键触发后，当前界面完成“恢复实际大小（仅 Windows/Linux 支持）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl+Shift+=",
      "en": "Zoom In",
      "zh": "放大（仅 Windows/Linux 支持）",
      "platforms": [
        "windows",
        "linux"
      ],
      "platformCmds": {
        "windows": "Ctrl+Shift+=",
        "linux": "Ctrl+Shift+="
      },
      "id": "9704b41d06010589",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 Zoom In）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "放大（仅 Windows/Linux 支持）",
        "Zoom In",
        "Ctrl+Shift+="
      ],
      "examples": [
        {
          "value": "按 Ctrl+Shift+=",
          "description": "放大（仅 Windows/Linux 支持）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platforms": [
            "windows",
            "linux"
          ],
          "platformValues": {
            "windows": "按 Ctrl+Shift+=",
            "linux": "按 Ctrl+Shift+="
          },
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 Zoom In）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Typora中需要放大（仅 Windows/Linux 支持），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Ctrl+Shift+=”放大（仅 Windows/Linux 支持）。",
          "expected": "快捷键触发后，当前界面完成“放大（仅 Windows/Linux 支持）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl+Shift+-",
      "en": "Zoom Out",
      "zh": "缩小（仅 Windows/Linux 支持）",
      "platforms": [
        "windows",
        "linux"
      ],
      "platformCmds": {
        "windows": "Ctrl+Shift+-",
        "linux": "Ctrl+Shift+-"
      },
      "id": "d3a8ff9d8ae9d923",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "typora-shortcuts",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Shortcut Keys（页面内检索 Zoom Out）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "缩小（仅 Windows/Linux 支持）",
        "Zoom Out",
        "Ctrl+Shift+-"
      ],
      "examples": [
        {
          "value": "按 Ctrl+Shift+-",
          "description": "缩小（仅 Windows/Linux 支持）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platforms": [
            "windows",
            "linux"
          ],
          "platformValues": {
            "windows": "按 Ctrl+Shift+-",
            "linux": "按 Ctrl+Shift+-"
          },
          "groundingRefs": [
            {
              "sourceId": "typora-shortcuts",
              "locator": "官方 Shortcut Keys（页面内检索 Zoom Out）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在Typora中需要缩小（仅 Windows/Linux 支持），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Ctrl+Shift+-”缩小（仅 Windows/Linux 支持）。",
          "expected": "快捷键触发后，当前界面完成“缩小（仅 Windows/Linux 支持）”对应的动作。"
        }
      ]
    }
  ]
};
