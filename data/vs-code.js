// Generated from validated structured data. Manual edits must follow data/SCHEMA.md.
window.CHEATSHEET_DATA = window.CHEATSHEET_DATA || {};
window.CHEATSHEET_DATA["vs-code"] = {
  "meta": {
    "id": "vs-code",
    "name": "VS Code",
    "color": "#007ACC",
    "source": "第一方来源与确定性官方入口清单，核验于 2026-07-14",
    "sourceUrl": "https://code.visualstudio.com/docs/configure/keybindings",
    "updatedAt": "2026-06-20",
    "contentCheckedAt": "2026-06-20",
    "sourceCheckedAt": "2026-06-21",
    "updatePolicy": "manual-only",
    "verificationStatus": "manual",
    "coverage": "官方入口全集；精确范围、组件与平台限制见 shared/official-inventories/vs-code.json",
    "platforms": [
      "mac",
      "windows",
      "linux"
    ],
    "builtIn": true,
    "order": 7,
    "sources": [
      {
        "id": "vscode-keybindings",
        "title": "VS Code keyboard shortcuts",
        "url": "https://code.visualstudio.com/docs/configure/keybindings",
        "kind": "official-doc",
        "maintainer": "Microsoft",
        "evidenceTier": "first-party",
        "lastVerifiedAt": "2026-06-21",
        "resolvedUrl": "https://code.visualstudio.com/docs/configure/keybindings",
        "pageTitle": "VS Code keyboard shortcuts",
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
      "total": 121,
      "covered": 121,
      "checkedAt": "2026-07-13",
      "sourceIds": [
        "vscode-keybindings"
      ],
      "inventoryHash": "sha256:61c7c22b38d3085d60540a675935ccc19b8c56e56f1cf325cc7d4d5a64a8d3da"
    }
  },
  "items": [
    {
      "cat": "shortcut",
      "cmd": "Cmd+Shift+P",
      "platformCmds": {
        "mac": "Cmd+Shift+P",
        "windows": "Ctrl+Shift+P",
        "linux": "Ctrl+Shift+P"
      },
      "en": "Show Command Palette",
      "zh": "打开命令面板，搜索并执行所有 IDE 命令（最常用入口）（Win/Linux 为 Ctrl+Shift+P）",
      "id": "f9a6d4cea270efda",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Show Command Palette）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "搜索",
        "查找",
        "定位",
        "查看",
        "显示",
        "状态",
        "打开命令面板，搜索并执行所有 IDE 命令（最常用入口）（Win/Linux 为 Ctrl+Shift+P）",
        "Show Command Palette"
      ],
      "examples": [
        {
          "value": "按 Cmd+Shift+P（Win/Linux 为 Ctrl+Shift+P），输入“Format Document”",
          "description": "搜索并执行编辑器命令",
          "copyable": false,
          "scenario": "在实际工作中需要打开命令面板，搜索并执行所有 IDE 命令（最常用入口）（Win/Linux 为 Ctrl+Shift+P）时",
          "goal": "打开命令面板，搜索并执行所有 IDE 命令（最常用入口）（Win/Linux 为 Ctrl+Shift+P）",
          "expected": "操作后，工具完成“搜索并执行编辑器命令”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "vscode-keybindings"
          ],
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Show Command Palette）",
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
      "cmd": "Cmd+P",
      "platformCmds": {
        "mac": "Cmd+P",
        "windows": "Ctrl+P",
        "linux": "Ctrl+P"
      },
      "en": "Quick Open",
      "zh": "按名称快速打开文件（Win/Linux 为 Ctrl+P）",
      "id": "696583bac075c29f",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Quick Open）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "按名称快速打开文件（Win/Linux 为 Ctrl+P）",
        "Quick Open",
        "Cmd+P"
      ],
      "examples": [
        {
          "value": "按 Cmd/Ctrl+P，输入文件名的一部分",
          "description": "按名称快速打开项目文件",
          "copyable": false,
          "scenario": "在实际工作中需要按名称快速打开文件（Win/Linux 为 Ctrl+P）时",
          "goal": "按名称快速打开文件（Win/Linux 为 Ctrl+P）",
          "expected": "操作后，工具完成“按名称快速打开项目文件”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "vscode-keybindings"
          ],
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Quick Open）",
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
      "platformCmds": {
        "mac": "Cmd+Shift+N",
        "windows": "Ctrl+Shift+N",
        "linux": "Ctrl+Shift+N"
      },
      "en": "New Window",
      "zh": "新建 VS Code 窗口（Win/Linux 为 Ctrl+Shift+N）",
      "id": "c86d24c29c52606c",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 New Window）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "创建",
        "新建",
        "初始化",
        "新建 VS Code 窗口（Win/Linux 为 Ctrl+Shift+N）",
        "New Window",
        "Cmd+Shift+N"
      ],
      "examples": [
        {
          "value": "按 Cmd+Shift+N",
          "description": "新建 VS Code 窗口（Win/Linux 为 Ctrl+Shift+N）",
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
          "scenario": "在实际工作中需要新建 VS Code 窗口（Win/Linux 为 Ctrl+Shift+N）时",
          "goal": "新建 VS Code 窗口（Win/Linux 为 Ctrl+Shift+N）",
          "expected": "操作后，工具完成“新建 VS Code 窗口（Win/Linux 为 Ctrl+Shift+N）”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 New Window）",
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
      "platformCmds": {
        "mac": "Cmd+W",
        "windows": "Ctrl+W",
        "linux": "Ctrl+W"
      },
      "en": "Close Window",
      "zh": "关闭当前窗口/实例（Win/Linux 为 Ctrl+W）",
      "id": "310e871bc18a35af",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Close Window）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "关闭当前窗口/实例（Win/Linux 为 Ctrl+W）",
        "Close Window",
        "Cmd+W"
      ],
      "examples": [
        {
          "value": "按 Cmd+W",
          "description": "关闭当前窗口/实例（Win/Linux 为 Ctrl+W）",
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
          "scenario": "在实际工作中需要关闭当前窗口/实例（Win/Linux 为 Ctrl+W）时",
          "goal": "关闭当前窗口/实例（Win/Linux 为 Ctrl+W）",
          "expected": "操作后，工具完成“关闭当前窗口/实例（Win/Linux 为 Ctrl+W）”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Close Window）",
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
      "platformCmds": {
        "mac": "Cmd+,",
        "windows": "Ctrl+,",
        "linux": "Ctrl+,"
      },
      "en": "User Settings",
      "zh": "打开用户设置（Win/Linux 为 Ctrl+,）",
      "id": "f73180f0d2b1c7ca",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 User Settings）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "配置",
        "设置",
        "偏好",
        "打开用户设置（Win/Linux 为 Ctrl+,）",
        "User Settings",
        "Cmd+,"
      ],
      "examples": [
        {
          "value": "按 Cmd+,",
          "description": "打开用户设置（Win/Linux 为 Ctrl+,）",
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
          "scenario": "在实际工作中需要打开用户设置（Win/Linux 为 Ctrl+,）时",
          "goal": "打开用户设置（Win/Linux 为 Ctrl+,）",
          "expected": "操作后，工具完成“打开用户设置（Win/Linux 为 Ctrl+,）”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 User Settings）",
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
      "cmd": "Cmd+K Cmd+S",
      "en": "Keyboard Shortcuts",
      "zh": "打开快捷键设置页面（Win/Linux 为 Ctrl+K Ctrl+S）",
      "id": "d82b6bc4bdf22a48",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Keyboard Shortcuts）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "配置",
        "设置",
        "偏好",
        "打开快捷键设置页面（Win/Linux 为 Ctrl+K Ctrl+S）",
        "Keyboard Shortcuts",
        "Cmd+K"
      ],
      "examples": [
        {
          "value": "按 Cmd+K 后再按 Cmd+S（Win/Linux 为 Ctrl+K Ctrl+S）",
          "description": "打开键盘快捷方式设置页面",
          "copyable": false,
          "scenario": "在实际工作中需要打开快捷键设置页面（Win/Linux 为 Ctrl+K Ctrl+S）时",
          "goal": "打开快捷键设置页面（Win/Linux 为 Ctrl+K Ctrl+S）",
          "expected": "操作后，工具完成“打开键盘快捷方式设置页面”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "vscode-keybindings"
          ],
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Keyboard Shortcuts）",
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
      "en": "Cut Line (empty selection)",
      "zh": "剪切当前行（未选中文时剪切整行）（Win/Linux 为 Ctrl+X）",
      "id": "b5275b6647017f28",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Cut Line (empty selection)）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "剪切当前行（未选中文时剪切整行）（Win/Linux 为 Ctrl+X）",
        "Cut Line (empty selection)",
        "Cmd+X"
      ],
      "examples": [
        {
          "value": "按 Cmd+X",
          "description": "剪切当前行（未选中文时剪切整行）（Win/Linux 为 Ctrl+X）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要剪切当前行（未选中文时剪切整行）（Win/Linux 为 Ctrl+X）时",
          "goal": "剪切当前行（未选中文时剪切整行）（Win/Linux 为 Ctrl+X）",
          "expected": "操作后，工具完成“剪切当前行（未选中文时剪切整行）（Win/Linux 为 Ctrl+X）”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Cut Line (empty selection)）",
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
      "en": "Copy Line (empty selection)",
      "zh": "复制当前行（未选中文时复制整行）（Win/Linux 为 Ctrl+C）",
      "id": "cfd4fef73075f1f1",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Copy Line (empty selection)）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "复制",
        "克隆",
        "拷贝",
        "复制当前行（未选中文时复制整行）（Win/Linux 为 Ctrl+C）",
        "Copy Line (empty selection)",
        "Cmd+C"
      ],
      "examples": [
        {
          "value": "按 Cmd+C",
          "description": "复制当前行（未选中文时复制整行）（Win/Linux 为 Ctrl+C）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要复制当前行（未选中文时复制整行）（Win/Linux 为 Ctrl+C）时",
          "goal": "复制当前行（未选中文时复制整行）（Win/Linux 为 Ctrl+C）",
          "expected": "操作后，工具完成“复制当前行（未选中文时复制整行）（Win/Linux 为 Ctrl+C）”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Copy Line (empty selection)）",
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
      "cmd": "Option+Down",
      "en": "Move Line Down",
      "zh": "将当前行下移一行（Win/Linux 为 Alt+Down）",
      "id": "81c63947817a7230",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Move Line Down）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "移动",
        "重命名",
        "改名",
        "将当前行下移一行（Win/Linux 为 Alt+Down）",
        "Move Line Down",
        "Option+Down"
      ],
      "examples": [
        {
          "value": "把光标放在一行上，按 Option+Down（Win/Linux 为 Alt+Down）",
          "description": "把当前行向下移动",
          "copyable": false,
          "scenario": "在实际工作中需要将当前行下移一行（Win/Linux 为 Alt+Down）时",
          "goal": "将当前行下移一行（Win/Linux 为 Alt+Down）",
          "expected": "操作后，工具完成“把当前行向下移动”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "vscode-keybindings"
          ],
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Move Line Down）",
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
      "cmd": "Option+Up",
      "en": "Move Line Up",
      "zh": "将当前行上移一行（Win/Linux 为 Alt+Up）",
      "id": "438be348276c4a68",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Move Line Up）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "移动",
        "重命名",
        "改名",
        "将当前行上移一行（Win/Linux 为 Alt+Up）",
        "Move Line Up",
        "Option+Up"
      ],
      "examples": [
        {
          "value": "按 Option+Up",
          "description": "将当前行上移一行（Win/Linux 为 Alt+Up）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要将当前行上移一行（Win/Linux 为 Alt+Up）时",
          "goal": "将当前行上移一行（Win/Linux 为 Alt+Up）",
          "expected": "操作后，工具完成“将当前行上移一行（Win/Linux 为 Alt+Up）”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Move Line Up）",
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
      "cmd": "Shift+Option+Down",
      "en": "Copy Line Down",
      "zh": "复制当前行并插入到下方（Win/Linux 为 Shift+Alt+Down）",
      "id": "56a5b42f076ba704",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Copy Line Down）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "复制",
        "克隆",
        "拷贝",
        "复制当前行并插入到下方（Win/Linux 为 Shift+Alt+Down）",
        "Copy Line Down",
        "Shift+Option+Down"
      ],
      "examples": [
        {
          "value": "按 Shift+Option+Down（Win/Linux 为 Shift+Alt+Down）",
          "description": "复制当前行并插入到下一行",
          "copyable": false,
          "scenario": "在实际工作中需要复制当前行并插入到下方（Win/Linux 为 Shift+Alt+Down）时",
          "goal": "复制当前行并插入到下方（Win/Linux 为 Shift+Alt+Down）",
          "expected": "操作后，工具完成“复制当前行并插入到下一行”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "vscode-keybindings"
          ],
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Copy Line Down）",
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
      "cmd": "Shift+Option+Up",
      "en": "Copy Line Up",
      "zh": "复制当前行并插入到上方（Win/Linux 为 Shift+Alt+Up）",
      "id": "de89fc9ca0c585b2",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Copy Line Up）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "复制",
        "克隆",
        "拷贝",
        "复制当前行并插入到上方（Win/Linux 为 Shift+Alt+Up）",
        "Copy Line Up",
        "Shift+Option+Up"
      ],
      "examples": [
        {
          "value": "按 Shift+Option+Up",
          "description": "复制当前行并插入到上方（Win/Linux 为 Shift+Alt+Up）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要复制当前行并插入到上方（Win/Linux 为 Shift+Alt+Up）时",
          "goal": "复制当前行并插入到上方（Win/Linux 为 Shift+Alt+Up）",
          "expected": "操作后，工具完成“复制当前行并插入到上方（Win/Linux 为 Shift+Alt+Up）”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Copy Line Up）",
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
      "cmd": "Shift+Cmd+K",
      "en": "Delete Line",
      "zh": "删除当前整行（Win/Linux 为 Ctrl+Shift+K）",
      "id": "2b045bf8e6785064",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Delete Line）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "删除",
        "移除",
        "清理",
        "删除当前整行（Win/Linux 为 Ctrl+Shift+K）",
        "Delete Line",
        "Shift+Cmd+K"
      ],
      "examples": [
        {
          "value": "把光标放在要删除的行，按 Shift+Cmd+K（Win/Linux 为 Ctrl+Shift+K）",
          "description": "删除当前整行",
          "copyable": false,
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "vscode-keybindings"
          ],
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Delete Line）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要删除当前整行，希望直接通过键盘完成该操作时。",
          "goal": "使用“把光标放在要删除的行，按 Shift+Cmd+K（Win/Linux 为 Ctrl+Shift+K）”删除当前整行（Win/Linux 为 Ctrl+Shift+K）。",
          "expected": "快捷键触发后，当前界面完成“删除当前整行”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+Enter",
      "en": "Insert Line Below",
      "zh": "在当前行下方插入空行（Win/Linux 为 Ctrl+Enter）",
      "id": "8e84d9ecabdc3a58",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Insert Line Below）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "在当前行下方插入空行（Win/Linux 为 Ctrl+Enter）",
        "Insert Line Below",
        "Cmd+Enter"
      ],
      "examples": [
        {
          "value": "按 Cmd+Enter",
          "description": "在当前行下方插入空行（Win/Linux 为 Ctrl+Enter）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Insert Line Below）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要在当前行下方插入空行（Win/Linux 为 Ctrl+Enter），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+Enter”在当前行下方插入空行（Win/Linux 为 Ctrl+Enter）。",
          "expected": "快捷键触发后，当前界面完成“在当前行下方插入空行（Win/Linux 为 Ctrl+Enter）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Shift+Cmd+Enter",
      "en": "Insert Line Above",
      "zh": "在当前行上方插入空行（Win/Linux 为 Ctrl+Shift+Enter）",
      "id": "a0edbd17c5e036d1",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Insert Line Above）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "在当前行上方插入空行（Win/Linux 为 Ctrl+Shift+Enter）",
        "Insert Line Above",
        "Shift+Cmd+Enter"
      ],
      "examples": [
        {
          "value": "按 Shift+Cmd+Enter",
          "description": "在当前行上方插入空行（Win/Linux 为 Ctrl+Shift+Enter）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Insert Line Above）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要在当前行上方插入空行（Win/Linux 为 Ctrl+Shift+Enter），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Shift+Cmd+Enter”在当前行上方插入空行（Win/Linux 为 Ctrl+Shift+Enter）。",
          "expected": "快捷键触发后，当前界面完成“在当前行上方插入空行（Win/Linux 为 Ctrl+Shift+Enter）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Shift+Cmd+\\",
      "en": "Jump to Matching Bracket",
      "zh": "跳转到匹配的括号（Win/Linux 为 Ctrl+Shift+\\）",
      "id": "e31d938d104c72a0",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Jump to Matching Bracket）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "跳转到匹配的括号（Win/Linux 为 Ctrl+Shift+\\）",
        "Jump to Matching Bracket",
        "Shift+Cmd+\\"
      ],
      "examples": [
        {
          "value": "按 Shift+Cmd+\\",
          "description": "跳转到匹配的括号（Win/Linux 为 Ctrl+Shift+\\）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Jump to Matching Bracket）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要跳转到匹配的括号（Win/Linux 为 Ctrl+Shift+\\），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Shift+Cmd+\\”跳转到匹配的括号（Win/Linux 为 Ctrl+Shift+\\）。",
          "expected": "快捷键触发后，当前界面完成“跳转到匹配的括号（Win/Linux 为 Ctrl+Shift+\\）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+]",
      "en": "Indent Line",
      "zh": "增加当前行缩进（Win/Linux 为 Ctrl+]）",
      "id": "1e0e65be6fd4d836",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Indent Line）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "增加当前行缩进（Win/Linux 为 Ctrl+]）",
        "Indent Line",
        "Cmd+]"
      ],
      "examples": [
        {
          "value": "按 Cmd+]",
          "description": "增加当前行缩进（Win/Linux 为 Ctrl+]）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Indent Line）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要增加当前行缩进（Win/Linux 为 Ctrl+]），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+]”增加当前行缩进（Win/Linux 为 Ctrl+]）。",
          "expected": "快捷键触发后，当前界面完成“增加当前行缩进（Win/Linux 为 Ctrl+]）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+[",
      "en": "Outdent Line",
      "zh": "减少当前行缩进（Win/Linux 为 Ctrl+[）",
      "id": "b5ab926cc643ba6b",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Outdent Line）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "减少当前行缩进（Win/Linux 为 Ctrl+[）",
        "Outdent Line",
        "Cmd+["
      ],
      "examples": [
        {
          "value": "按 Cmd+[",
          "description": "减少当前行缩进（Win/Linux 为 Ctrl+[）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Outdent Line）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要减少当前行缩进（Win/Linux 为 Ctrl+[），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+[”减少当前行缩进（Win/Linux 为 Ctrl+[）。",
          "expected": "快捷键触发后，当前界面完成“减少当前行缩进（Win/Linux 为 Ctrl+[）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Home",
      "en": "Go to Beginning of Line",
      "zh": "跳转到行首（Win/Linux 相同）",
      "id": "96b8305f052851a8",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Go to Beginning of Line）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "跳转到行首（Win/Linux 相同）",
        "Go to Beginning of Line",
        "Home"
      ],
      "examples": [
        {
          "value": "按 Home",
          "description": "跳转到行首（Win/Linux 相同）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Go to Beginning of Line）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要跳转到行首（Win/Linux 相同），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Home”跳转到行首（Win/Linux 相同）。",
          "expected": "快捷键触发后，当前界面完成“跳转到行首（Win/Linux 相同）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "End",
      "en": "Go to End of Line",
      "zh": "跳转到行尾（Win/Linux 相同）",
      "id": "22d4adedafed7cf9",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Go to End of Line）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "跳转到行尾（Win/Linux 相同）",
        "Go to End of Line",
        "End"
      ],
      "examples": [
        {
          "value": "按 End",
          "description": "跳转到行尾（Win/Linux 相同）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Go to End of Line）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要跳转到行尾（Win/Linux 相同），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 End”跳转到行尾（Win/Linux 相同）。",
          "expected": "快捷键触发后，当前界面完成“跳转到行尾（Win/Linux 相同）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+Up",
      "en": "Go to Beginning of File",
      "zh": "跳转到文件开头（Win/Linux 为 Ctrl+Home）",
      "context": "编辑器",
      "id": "65c541db7a09d6e9",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Go to Beginning of File）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "跳转到文件开头（Win/Linux 为 Ctrl+Home）",
        "Go to Beginning of File",
        "Cmd+Up"
      ],
      "examples": [
        {
          "value": "按 Cmd+Up（编辑器）",
          "description": "编辑器：跳转到文件开头（Win/Linux 为 Ctrl+Home）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Go to Beginning of File）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在编辑器场景中需要编辑器：跳转到文件开头（Win/Linux 为 Ctrl+Home），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+Up（编辑器）”跳转到文件开头（Win/Linux 为 Ctrl+Home）。",
          "expected": "快捷键触发后，当前界面完成“编辑器：跳转到文件开头（Win/Linux 为 Ctrl+Home）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+Down",
      "en": "Go to End of File",
      "zh": "跳转到文件末尾（Win/Linux 为 Ctrl+End）",
      "context": "编辑器",
      "id": "2ba6e154e3fb0f18",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Go to End of File）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "跳转到文件末尾（Win/Linux 为 Ctrl+End）",
        "Go to End of File",
        "Cmd+Down"
      ],
      "examples": [
        {
          "value": "按 Cmd+Down（编辑器）",
          "description": "编辑器：跳转到文件末尾（Win/Linux 为 Ctrl+End）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Go to End of File）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在编辑器场景中需要编辑器：跳转到文件末尾（Win/Linux 为 Ctrl+End），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+Down（编辑器）”跳转到文件末尾（Win/Linux 为 Ctrl+End）。",
          "expected": "快捷键触发后，当前界面完成“编辑器：跳转到文件末尾（Win/Linux 为 Ctrl+End）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl+PgUp",
      "en": "Scroll Line Up",
      "zh": "向上滚动一行（Win/Linux 相同）",
      "id": "d7133fe442b232f3",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Scroll Line Up）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "向上滚动一行（Win/Linux 相同）",
        "Scroll Line Up",
        "Ctrl+PgUp"
      ],
      "examples": [
        {
          "value": "按 Ctrl+PgUp",
          "description": "向上滚动一行（Win/Linux 相同）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Scroll Line Up）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要向上滚动一行（Win/Linux 相同），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Ctrl+PgUp”向上滚动一行（Win/Linux 相同）。",
          "expected": "快捷键触发后，当前界面完成“向上滚动一行（Win/Linux 相同）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl+PgDn",
      "en": "Scroll Line Down",
      "zh": "向下滚动一行（Win/Linux 相同）",
      "id": "b1e9d841964063b7",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Scroll Line Down）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "向下滚动一行（Win/Linux 相同）",
        "Scroll Line Down",
        "Ctrl+PgDn"
      ],
      "examples": [
        {
          "value": "按 Ctrl+PgDn",
          "description": "向下滚动一行（Win/Linux 相同）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Scroll Line Down）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要向下滚动一行（Win/Linux 相同），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Ctrl+PgDn”向下滚动一行（Win/Linux 相同）。",
          "expected": "快捷键触发后，当前界面完成“向下滚动一行（Win/Linux 相同）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+PgUp",
      "en": "Scroll Page Up",
      "zh": "向上滚动一页（Win/Linux 为 Ctrl+PgUp）",
      "id": "797e5bca380b1135",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Scroll Page Up）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "向上滚动一页（Win/Linux 为 Ctrl+PgUp）",
        "Scroll Page Up",
        "Cmd+PgUp"
      ],
      "examples": [
        {
          "value": "按 Cmd+PgUp",
          "description": "向上滚动一页（Win/Linux 为 Ctrl+PgUp）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Scroll Page Up）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要向上滚动一页（Win/Linux 为 Ctrl+PgUp），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+PgUp”向上滚动一页（Win/Linux 为 Ctrl+PgUp）。",
          "expected": "快捷键触发后，当前界面完成“向上滚动一页（Win/Linux 为 Ctrl+PgUp）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+PgDn",
      "en": "Scroll Page Down",
      "zh": "向下滚动一页（Win/Linux 为 Ctrl+PgDn）",
      "id": "d572d90114118c45",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Scroll Page Down）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "向下滚动一页（Win/Linux 为 Ctrl+PgDn）",
        "Scroll Page Down",
        "Cmd+PgDn"
      ],
      "examples": [
        {
          "value": "按 Cmd+PgDn",
          "description": "向下滚动一页（Win/Linux 为 Ctrl+PgDn）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Scroll Page Down）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要向下滚动一页（Win/Linux 为 Ctrl+PgDn），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+PgDn”向下滚动一页（Win/Linux 为 Ctrl+PgDn）。",
          "expected": "快捷键触发后，当前界面完成“向下滚动一页（Win/Linux 为 Ctrl+PgDn）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Option+Cmd+[",
      "en": "Fold Region",
      "zh": "折叠当前代码块（Win/Linux 为 Ctrl+Shift+[）",
      "id": "3e60cd8d5cf9bd50",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Fold Region）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "折叠当前代码块（Win/Linux 为 Ctrl+Shift+[）",
        "Fold Region",
        "Option+Cmd+["
      ],
      "examples": [
        {
          "value": "按 Option+Cmd+[",
          "description": "折叠当前代码块（Win/Linux 为 Ctrl+Shift+[）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Fold Region）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要折叠当前代码块（Win/Linux 为 Ctrl+Shift+[），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Option+Cmd+[”折叠当前代码块（Win/Linux 为 Ctrl+Shift+[）。",
          "expected": "快捷键触发后，当前界面完成“折叠当前代码块（Win/Linux 为 Ctrl+Shift+[）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Option+Cmd+]",
      "en": "Unfold Region",
      "zh": "展开当前代码块（Win/Linux 为 Ctrl+Shift+]）",
      "id": "598915059820069d",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Unfold Region）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "展开当前代码块（Win/Linux 为 Ctrl+Shift+]）",
        "Unfold Region",
        "Option+Cmd+]"
      ],
      "examples": [
        {
          "value": "按 Option+Cmd+]",
          "description": "展开当前代码块（Win/Linux 为 Ctrl+Shift+]）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Unfold Region）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要展开当前代码块（Win/Linux 为 Ctrl+Shift+]），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Option+Cmd+]”展开当前代码块（Win/Linux 为 Ctrl+Shift+]）。",
          "expected": "快捷键触发后，当前界面完成“展开当前代码块（Win/Linux 为 Ctrl+Shift+]）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+K Cmd+[",
      "en": "Fold All Subregions",
      "zh": "递归折叠当前代码块的所有子区域（Win/Linux 为 Ctrl+K Ctrl+[）",
      "id": "6feb6b10c08d10e8",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Fold All Subregions）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "递归折叠当前代码块的所有子区域（Win/Linux 为 Ctrl+K Ctrl+[）",
        "Fold All Subregions",
        "Cmd+K"
      ],
      "examples": [
        {
          "value": "按 Cmd+K Cmd+[",
          "description": "递归折叠当前代码块的所有子区域（Win/Linux 为 Ctrl+K Ctrl+[）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Fold All Subregions）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要递归折叠当前代码块的所有子区域（Win/Linux 为 Ctrl+K Ctrl+[），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+K Cmd+[”递归折叠当前代码块的所有子区域（Win/Linux 为 Ctrl+K Ctrl+[）。",
          "expected": "快捷键触发后，当前界面完成“递归折叠当前代码块的所有子区域（Win/Linux 为 Ctrl+K Ctrl+[）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+K Cmd+]",
      "en": "Unfold All Subregions",
      "zh": "递归展开当前代码块的所有子区域（Win/Linux 为 Ctrl+K Ctrl+]）",
      "id": "6aba8d9afabde071",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Unfold All Subregions）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "递归展开当前代码块的所有子区域（Win/Linux 为 Ctrl+K Ctrl+]）",
        "Unfold All Subregions",
        "Cmd+K"
      ],
      "examples": [
        {
          "value": "按 Cmd+K Cmd+]",
          "description": "递归展开当前代码块的所有子区域（Win/Linux 为 Ctrl+K Ctrl+]）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Unfold All Subregions）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要递归展开当前代码块的所有子区域（Win/Linux 为 Ctrl+K Ctrl+]），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+K Cmd+]”递归展开当前代码块的所有子区域（Win/Linux 为 Ctrl+K Ctrl+]）。",
          "expected": "快捷键触发后，当前界面完成“递归展开当前代码块的所有子区域（Win/Linux 为 Ctrl+K Ctrl+]）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+K Cmd+0",
      "en": "Fold All Regions",
      "zh": "折叠文件中所有代码块（Win/Linux 为 Ctrl+K Ctrl+0）",
      "id": "473c16184223124d",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Fold All Regions）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "折叠文件中所有代码块（Win/Linux 为 Ctrl+K Ctrl+0）",
        "Fold All Regions",
        "Cmd+K"
      ],
      "examples": [
        {
          "value": "按 Cmd+K Cmd+0",
          "description": "折叠文件中所有代码块（Win/Linux 为 Ctrl+K Ctrl+0）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Fold All Regions）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要折叠文件中所有代码块（Win/Linux 为 Ctrl+K Ctrl+0），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+K Cmd+0”折叠文件中所有代码块（Win/Linux 为 Ctrl+K Ctrl+0）。",
          "expected": "快捷键触发后，当前界面完成“折叠文件中所有代码块（Win/Linux 为 Ctrl+K Ctrl+0）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+K Cmd+J",
      "en": "Unfold All Regions",
      "zh": "展开文件中所有代码块（Win/Linux 为 Ctrl+K Ctrl+J）",
      "id": "4b4e13702ec4af36",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Unfold All Regions）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "展开文件中所有代码块（Win/Linux 为 Ctrl+K Ctrl+J）",
        "Unfold All Regions",
        "Cmd+K"
      ],
      "examples": [
        {
          "value": "按 Cmd+K Cmd+J",
          "description": "展开文件中所有代码块（Win/Linux 为 Ctrl+K Ctrl+J）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Unfold All Regions）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要展开文件中所有代码块（Win/Linux 为 Ctrl+K Ctrl+J），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+K Cmd+J”展开文件中所有代码块（Win/Linux 为 Ctrl+K Ctrl+J）。",
          "expected": "快捷键触发后，当前界面完成“展开文件中所有代码块（Win/Linux 为 Ctrl+K Ctrl+J）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+/",
      "en": "Toggle Line Comment",
      "zh": "切换行注释（Win/Linux 为 Ctrl+/）",
      "id": "8c58b9825bb13db9",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Toggle Line Comment）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "切换行注释（Win/Linux 为 Ctrl+/）",
        "Toggle Line Comment",
        "Cmd+/"
      ],
      "examples": [
        {
          "value": "按 Cmd+/",
          "description": "切换行注释（Win/Linux 为 Ctrl+/）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Toggle Line Comment）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要切换行注释（Win/Linux 为 Ctrl+/），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+/”切换行注释（Win/Linux 为 Ctrl+/）。",
          "expected": "快捷键触发后，当前界面完成“切换行注释（Win/Linux 为 Ctrl+/）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Shift+Option+A",
      "en": "Toggle Block Comment",
      "zh": "切换块注释（Win/Linux 为 Shift+Alt+A）",
      "id": "1198e54d8db11f0a",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Toggle Block Comment）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "切换块注释（Win/Linux 为 Shift+Alt+A）",
        "Toggle Block Comment",
        "Shift+Option+A"
      ],
      "examples": [
        {
          "value": "按 Shift+Option+A",
          "description": "切换块注释（Win/Linux 为 Shift+Alt+A）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Toggle Block Comment）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要切换块注释（Win/Linux 为 Shift+Alt+A），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Shift+Option+A”切换块注释（Win/Linux 为 Shift+Alt+A）。",
          "expected": "快捷键触发后，当前界面完成“切换块注释（Win/Linux 为 Shift+Alt+A）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Option+Z",
      "en": "Toggle Word Wrap",
      "zh": "切换自动换行（Win/Linux 为 Alt+Z）",
      "id": "e008e607fe48cb6b",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Toggle Word Wrap）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "切换自动换行（Win/Linux 为 Alt+Z）",
        "Toggle Word Wrap",
        "Option+Z"
      ],
      "examples": [
        {
          "value": "按 Option+Z",
          "description": "切换自动换行（Win/Linux 为 Alt+Z）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Toggle Word Wrap）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要切换自动换行（Win/Linux 为 Alt+Z），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Option+Z”切换自动换行（Win/Linux 为 Alt+Z）。",
          "expected": "快捷键触发后，当前界面完成“切换自动换行（Win/Linux 为 Alt+Z）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Option+Click",
      "en": "Insert Cursor",
      "zh": "在点击位置插入额外光标（Win/Linux 为 Alt+Click）",
      "id": "630778710f1bff5c",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Insert Cursor）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "在点击位置插入额外光标（Win/Linux 为 Alt+Click）",
        "Insert Cursor",
        "Option+Click"
      ],
      "examples": [
        {
          "value": "按 Option+Click",
          "description": "在点击位置插入额外光标（Win/Linux 为 Alt+Click）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Insert Cursor）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要在点击位置插入额外光标（Win/Linux 为 Alt+Click），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Option+Click”在点击位置插入额外光标（Win/Linux 为 Alt+Click）。",
          "expected": "快捷键触发后，当前界面完成“在点击位置插入额外光标（Win/Linux 为 Alt+Click）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Option+Cmd+Up",
      "en": "Insert Cursor Above",
      "zh": "在上方插入光标（Win/Linux 为 Ctrl+Alt+Up）",
      "id": "314f0d8963bc53c1",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Insert Cursor Above）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "在上方插入光标（Win/Linux 为 Ctrl+Alt+Up）",
        "Insert Cursor Above",
        "Option+Cmd+Up"
      ],
      "examples": [
        {
          "value": "按 Option+Cmd+Up",
          "description": "在上方插入光标（Win/Linux 为 Ctrl+Alt+Up）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Insert Cursor Above）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要在上方插入光标（Win/Linux 为 Ctrl+Alt+Up），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Option+Cmd+Up”在上方插入光标（Win/Linux 为 Ctrl+Alt+Up）。",
          "expected": "快捷键触发后，当前界面完成“在上方插入光标（Win/Linux 为 Ctrl+Alt+Up）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Option+Cmd+Down",
      "en": "Insert Cursor Below",
      "zh": "在下方插入光标（Win/Linux 为 Ctrl+Alt+Down）",
      "id": "88d17fc0b8efa052",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Insert Cursor Below）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "在下方插入光标（Win/Linux 为 Ctrl+Alt+Down）",
        "Insert Cursor Below",
        "Option+Cmd+Down"
      ],
      "examples": [
        {
          "value": "按 Option+Cmd+Down",
          "description": "在下方插入光标（Win/Linux 为 Ctrl+Alt+Down）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Insert Cursor Below）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要在下方插入光标（Win/Linux 为 Ctrl+Alt+Down），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Option+Cmd+Down”在下方插入光标（Win/Linux 为 Ctrl+Alt+Down）。",
          "expected": "快捷键触发后，当前界面完成“在下方插入光标（Win/Linux 为 Ctrl+Alt+Down）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+U",
      "en": "Undo Last Cursor Operation",
      "zh": "撤销上一次光标操作（Win/Linux 为 Ctrl+U）",
      "id": "64d22ca32eea0400",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Undo Last Cursor Operation）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "撤销上一次光标操作（Win/Linux 为 Ctrl+U）",
        "Undo Last Cursor Operation",
        "Cmd+U"
      ],
      "examples": [
        {
          "value": "按 Cmd+U",
          "description": "撤销上一次光标操作（Win/Linux 为 Ctrl+U）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Undo Last Cursor Operation）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要撤销上一次光标操作（Win/Linux 为 Ctrl+U），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+U”撤销上一次光标操作（Win/Linux 为 Ctrl+U）。",
          "expected": "快捷键触发后，当前界面完成“撤销上一次光标操作（Win/Linux 为 Ctrl+U）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Shift+Option+I",
      "en": "Insert Cursor at End of Each Line Selected",
      "zh": "在选中的每一行末尾插入光标（Win/Linux 为 Shift+Alt+I）",
      "id": "59bc83a6bec36e9c",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Insert Cursor at End of Each Line Selected）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "在选中的每一行末尾插入光标（Win/Linux 为 Shift+Alt+I）",
        "Insert Cursor at End of Each Line Selected",
        "Shift+Option+I"
      ],
      "examples": [
        {
          "value": "按 Shift+Option+I",
          "description": "在选中的每一行末尾插入光标（Win/Linux 为 Shift+Alt+I）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Insert Cursor at End of Each Line Selected）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要在选中的每一行末尾插入光标（Win/Linux 为 Shift+Alt+I），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Shift+Option+I”在选中的每一行末尾插入光标（Win/Linux 为 Shift+Alt+I）。",
          "expected": "快捷键触发后，当前界面完成“在选中的每一行末尾插入光标（Win/Linux 为 Shift+Alt+I）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+L",
      "en": "Select Current Line",
      "zh": "选中当前行（Win/Linux 为 Ctrl+L）",
      "id": "c13d53fef60525f3",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Select Current Line）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "选中当前行（Win/Linux 为 Ctrl+L）",
        "Select Current Line",
        "Cmd+L"
      ],
      "examples": [
        {
          "value": "按 Cmd+L",
          "description": "选中当前行（Win/Linux 为 Ctrl+L）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Select Current Line）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要选中当前行（Win/Linux 为 Ctrl+L），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+L”选中当前行（Win/Linux 为 Ctrl+L）。",
          "expected": "快捷键触发后，当前界面完成“选中当前行（Win/Linux 为 Ctrl+L）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Shift+Cmd+L",
      "en": "Select All Occurrences of Current Selection",
      "zh": "选中当前选择内容的所有出现（Win/Linux 为 Ctrl+Shift+L）",
      "id": "1962aafef349488a",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Select All Occurrences of Current Selection）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "选中当前选择内容的所有出现（Win/Linux 为 Ctrl+Shift+L）",
        "Select All Occurrences of Current Selection",
        "Shift+Cmd+L"
      ],
      "examples": [
        {
          "value": "按 Shift+Cmd+L",
          "description": "选中当前选择内容的所有出现（Win/Linux 为 Ctrl+Shift+L）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Select All Occurrences of Current Selection）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要选中当前选择内容的所有出现（Win/Linux 为 Ctrl+Shift+L），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Shift+Cmd+L”选中当前选择内容的所有出现（Win/Linux 为 Ctrl+Shift+L）。",
          "expected": "快捷键触发后，当前界面完成“选中当前选择内容的所有出现（Win/Linux 为 Ctrl+Shift+L）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+F2",
      "en": "Select All Occurrences of Current Word",
      "zh": "选中当前单词的所有出现（Win/Linux 为 Ctrl+F2）",
      "id": "fd1649a4fac29366",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Select All Occurrences of Current Word）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "选中当前单词的所有出现（Win/Linux 为 Ctrl+F2）",
        "Select All Occurrences of Current Word",
        "Cmd+F2"
      ],
      "examples": [
        {
          "value": "按 Cmd+F2",
          "description": "选中当前单词的所有出现（Win/Linux 为 Ctrl+F2）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Select All Occurrences of Current Word）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要选中当前单词的所有出现（Win/Linux 为 Ctrl+F2），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+F2”选中当前单词的所有出现（Win/Linux 为 Ctrl+F2）。",
          "expected": "快捷键触发后，当前界面完成“选中当前单词的所有出现（Win/Linux 为 Ctrl+F2）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl+Shift+Cmd+Right",
      "en": "Expand Selection",
      "zh": "按语法结构扩展选区（Win/Linux 为 Shift+Alt+Right）",
      "id": "216b0ae6a1af72f3",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Expand Selection）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "按语法结构扩展选区（Win/Linux 为 Shift+Alt+Right）",
        "Expand Selection",
        "Ctrl+Shift+Cmd+Right"
      ],
      "examples": [
        {
          "value": "按 Ctrl+Shift+Cmd+Right",
          "description": "按语法结构扩展选区（Win/Linux 为 Shift+Alt+Right）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Expand Selection）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要按语法结构扩展选区（Win/Linux 为 Shift+Alt+Right），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Ctrl+Shift+Cmd+Right”按语法结构扩展选区（Win/Linux 为 Shift+Alt+Right）。",
          "expected": "快捷键触发后，当前界面完成“按语法结构扩展选区（Win/Linux 为 Shift+Alt+Right）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl+Shift+Cmd+Left",
      "en": "Shrink Selection",
      "zh": "按语法结构收缩选区（Win/Linux 为 Shift+Alt+Left）",
      "id": "77a99a231463fd07",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Shrink Selection）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "按语法结构收缩选区（Win/Linux 为 Shift+Alt+Left）",
        "Shrink Selection",
        "Ctrl+Shift+Cmd+Left"
      ],
      "examples": [
        {
          "value": "按 Ctrl+Shift+Cmd+Left",
          "description": "按语法结构收缩选区（Win/Linux 为 Shift+Alt+Left）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Shrink Selection）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要按语法结构收缩选区（Win/Linux 为 Shift+Alt+Left），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Ctrl+Shift+Cmd+Left”按语法结构收缩选区（Win/Linux 为 Shift+Alt+Left）。",
          "expected": "快捷键触发后，当前界面完成“按语法结构收缩选区（Win/Linux 为 Shift+Alt+Left）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Shift+Option+Drag",
      "en": "Column (Box) Selection",
      "zh": "列（矩形）选区模式——按住后拖动鼠标（Win/Linux 为 Shift+Alt+Drag）",
      "id": "241d20bbc08669e4",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Column (Box) Selection）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "列（矩形）选区模式——按住后拖动鼠标（Win/Linux 为 Shift+Alt+Drag）",
        "Column (Box) Selection",
        "Shift+Option+Drag"
      ],
      "examples": [
        {
          "value": "按 Shift+Option+Drag",
          "description": "列（矩形）选区模式——按住后拖动鼠标（Win/Linux 为 Shift+Alt+Drag）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Column (Box) Selection）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要列（矩形）选区模式——按住后拖动鼠标（Win/Linux 为 Shift+Alt+Drag），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Shift+Option+Drag”列（矩形）选区模式——按住后拖动鼠标（Win/Linux 为 Shift+Alt+Drag）。",
          "expected": "快捷键触发后，当前界面完成“列（矩形）选区模式——按住后拖动鼠标（Win/Linux 为 Shift+Alt+Drag）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+F",
      "en": "Find",
      "zh": "在当前文件内查找（Win/Linux 为 Ctrl+F）",
      "id": "9aaf5a156bba5a10",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Find）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "搜索",
        "查找",
        "定位",
        "在当前文件内查找（Win/Linux 为 Ctrl+F）",
        "Find",
        "Cmd+F"
      ],
      "examples": [
        {
          "value": "按 Cmd/Ctrl+F，输入要查找的文本",
          "description": "在当前文件中查找匹配内容",
          "copyable": false,
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "vscode-keybindings"
          ],
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Find）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要在当前文件中查找匹配内容，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd/Ctrl+F，输入要查找的文本”在当前文件内查找（Win/Linux 为 Ctrl+F）。",
          "expected": "快捷键触发后，当前界面完成“在当前文件中查找匹配内容”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Option+Cmd+F",
      "en": "Replace",
      "zh": "在当前文件内查找并替换（Win/Linux 为 Ctrl+H）",
      "id": "15b4064d0d26f239",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Replace）",
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
        "在当前文件内查找并替换（Win/Linux 为 Ctrl+H）",
        "Replace"
      ],
      "examples": [
        {
          "value": "按 Option+Cmd+F（Win/Linux 为 Ctrl+H），填写查找和替换内容",
          "description": "在当前文件中执行查找替换",
          "copyable": false,
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "vscode-keybindings"
          ],
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Replace）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要在当前文件中执行查找替换，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Option+Cmd+F（Win/Linux 为 Ctrl+H），填写查找和替换内容”在当前文件内查找并替换（Win/Linux 为 Ctrl+H）。",
          "expected": "快捷键触发后，当前界面完成“在当前文件中执行查找替换”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+G",
      "en": "Find Next",
      "zh": "跳到下一个匹配项（Win/Linux 为 F3）",
      "id": "06b8639296d613f7",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Find Next）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "搜索",
        "查找",
        "定位",
        "跳到下一个匹配项（Win/Linux 为 F3）",
        "Find Next",
        "Cmd+G"
      ],
      "examples": [
        {
          "value": "按 Cmd+G",
          "description": "跳到下一个匹配项（Win/Linux 为 F3）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Find Next）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要跳到下一个匹配项（Win/Linux 为 F3），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+G”跳到下一个匹配项（Win/Linux 为 F3）。",
          "expected": "快捷键触发后，当前界面完成“跳到下一个匹配项（Win/Linux 为 F3）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Shift+Cmd+G",
      "en": "Find Previous",
      "zh": "跳到上一个匹配项（Win/Linux 为 Shift+F3）",
      "id": "e46bb5566f696d98",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Find Previous）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "搜索",
        "查找",
        "定位",
        "跳到上一个匹配项（Win/Linux 为 Shift+F3）",
        "Find Previous",
        "Shift+Cmd+G"
      ],
      "examples": [
        {
          "value": "按 Shift+Cmd+G",
          "description": "跳到上一个匹配项（Win/Linux 为 Shift+F3）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Find Previous）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要跳到上一个匹配项（Win/Linux 为 Shift+F3），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Shift+Cmd+G”跳到上一个匹配项（Win/Linux 为 Shift+F3）。",
          "expected": "快捷键触发后，当前界面完成“跳到上一个匹配项（Win/Linux 为 Shift+F3）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+D",
      "en": "Add Selection to Next Find Match",
      "zh": "将下一个匹配项添加到选区（用于批量重命名）（Win/Linux 为 Ctrl+D）",
      "id": "a335cac908c3235a",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Add Selection to Next Find Match）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "搜索",
        "查找",
        "定位",
        "移动",
        "重命名",
        "改名",
        "将下一个匹配项添加到选区（用于批量重命名）（Win/Linux 为 Ctrl+D）",
        "Add Selection to Next Find Match"
      ],
      "examples": [
        {
          "value": "选中一个变量名后连续按 Cmd/Ctrl+D",
          "description": "逐个选中后续同名文本，便于同时编辑",
          "copyable": false,
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "vscode-keybindings"
          ],
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Add Selection to Next Find Match）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要逐个选中后续同名文本，便于同时编辑，希望直接通过键盘完成该操作时。",
          "goal": "使用“选中一个变量名后连续按 Cmd/Ctrl+D”将下一个匹配项添加到选区（用于批量重命名）（Win/Linux 为 Ctrl+D）。",
          "expected": "快捷键触发后，当前界面完成“逐个选中后续同名文本，便于同时编辑”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+K Cmd+D",
      "en": "Move Last Selection to Next Find Match",
      "zh": "移动最后一个选区到下一个匹配项（Win/Linux 为 Ctrl+K Ctrl+D）",
      "id": "84dbf9921bd79bd3",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Move Last Selection to Next Find Match）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "搜索",
        "查找",
        "定位",
        "移动",
        "重命名",
        "改名",
        "移动最后一个选区到下一个匹配项（Win/Linux 为 Ctrl+K Ctrl+D）",
        "Move Last Selection to Next Find Match"
      ],
      "examples": [
        {
          "value": "按 Cmd+K Cmd+D",
          "description": "移动最后一个选区到下一个匹配项（Win/Linux 为 Ctrl+K Ctrl+D）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Move Last Selection to Next Find Match）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要移动最后一个选区到下一个匹配项（Win/Linux 为 Ctrl+K Ctrl+D），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+K Cmd+D”移动最后一个选区到下一个匹配项（Win/Linux 为 Ctrl+K Ctrl+D）。",
          "expected": "快捷键触发后，当前界面完成“移动最后一个选区到下一个匹配项（Win/Linux 为 Ctrl+K Ctrl+D）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl+Space",
      "en": "Trigger Suggest",
      "zh": "触发代码补全建议（Win/Linux 相同）",
      "id": "cc87888771673730",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Trigger Suggest）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "触发代码补全建议（Win/Linux 相同）",
        "Trigger Suggest",
        "Ctrl+Space"
      ],
      "examples": [
        {
          "value": "按 Ctrl+Space",
          "description": "触发代码补全建议（Win/Linux 相同）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Trigger Suggest）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要触发代码补全建议（Win/Linux 相同），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Ctrl+Space”触发代码补全建议（Win/Linux 相同）。",
          "expected": "快捷键触发后，当前界面完成“触发代码补全建议（Win/Linux 相同）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Shift+Cmd+Space",
      "en": "Trigger Parameter Hints",
      "zh": "触发函数参数提示（Win/Linux 为 Ctrl+Shift+Space）",
      "id": "d7df5a2056158fe8",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Trigger Parameter Hints）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "触发函数参数提示（Win/Linux 为 Ctrl+Shift+Space）",
        "Trigger Parameter Hints",
        "Shift+Cmd+Space"
      ],
      "examples": [
        {
          "value": "按 Shift+Cmd+Space",
          "description": "触发函数参数提示（Win/Linux 为 Ctrl+Shift+Space）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Trigger Parameter Hints）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要触发函数参数提示（Win/Linux 为 Ctrl+Shift+Space），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Shift+Cmd+Space”触发函数参数提示（Win/Linux 为 Ctrl+Shift+Space）。",
          "expected": "快捷键触发后，当前界面完成“触发函数参数提示（Win/Linux 为 Ctrl+Shift+Space）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Shift+Option+F",
      "en": "Format Document",
      "zh": "格式化整个文档（Win/Linux 为 Shift+Alt+F）",
      "id": "c0900ed1083c7ec0",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Format Document）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "格式化",
        "代码格式",
        "排版",
        "格式化整个文档（Win/Linux 为 Shift+Alt+F）",
        "Format Document",
        "Shift+Option+F"
      ],
      "examples": [
        {
          "value": "按 Shift+Option+F",
          "description": "格式化整个文档（Win/Linux 为 Shift+Alt+F）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Format Document）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要格式化整个文档（Win/Linux 为 Shift+Alt+F），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Shift+Option+F”格式化整个文档（Win/Linux 为 Shift+Alt+F）。",
          "expected": "快捷键触发后，当前界面完成“格式化整个文档（Win/Linux 为 Shift+Alt+F）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+K Cmd+F",
      "en": "Format Selection",
      "zh": "格式化选中的代码区域（Win/Linux 为 Ctrl+K Ctrl+F）",
      "id": "f5986d90e4af34fd",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Format Selection）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "格式化",
        "代码格式",
        "排版",
        "格式化选中的代码区域（Win/Linux 为 Ctrl+K Ctrl+F）",
        "Format Selection",
        "Cmd+K"
      ],
      "examples": [
        {
          "value": "按 Cmd+K Cmd+F",
          "description": "格式化选中的代码区域（Win/Linux 为 Ctrl+K Ctrl+F）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Format Selection）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要格式化选中的代码区域（Win/Linux 为 Ctrl+K Ctrl+F），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+K Cmd+F”格式化选中的代码区域（Win/Linux 为 Ctrl+K Ctrl+F）。",
          "expected": "快捷键触发后，当前界面完成“格式化选中的代码区域（Win/Linux 为 Ctrl+K Ctrl+F）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "F12",
      "en": "Go to Definition",
      "zh": "跳转到定义处（Win/Linux 相同）",
      "id": "af1fe1fcc94cca51",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Go to Definition）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "跳转到定义处（Win/Linux 相同）",
        "Go to Definition",
        "F12"
      ],
      "examples": [
        {
          "value": "按 F12",
          "description": "跳转到定义处（Win/Linux 相同）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Go to Definition）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要跳转到定义处（Win/Linux 相同），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 F12”跳转到定义处（Win/Linux 相同）。",
          "expected": "快捷键触发后，当前界面完成“跳转到定义处（Win/Linux 相同）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Option+F12",
      "en": "Peek Definition",
      "zh": "内联预览定义，不跳转（Win/Linux 为 Alt+F12）",
      "id": "bce5aebb7aaa03b7",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Peek Definition）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "内联预览定义，不跳转（Win/Linux 为 Alt+F12）",
        "Peek Definition",
        "Option+F12"
      ],
      "examples": [
        {
          "value": "按 Option+F12",
          "description": "内联预览定义，不跳转（Win/Linux 为 Alt+F12）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Peek Definition）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要内联预览定义，不跳转（Win/Linux 为 Alt+F12），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Option+F12”内联预览定义，不跳转（Win/Linux 为 Alt+F12）。",
          "expected": "快捷键触发后，当前界面完成“内联预览定义，不跳转（Win/Linux 为 Alt+F12）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+K F12",
      "en": "Open Definition to the Side",
      "zh": "在侧边打开定义（Win/Linux 为 Ctrl+K F12）",
      "id": "d9571ca8b4509d33",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Open Definition to the Side）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "在侧边打开定义（Win/Linux 为 Ctrl+K F12）",
        "Open Definition to the Side",
        "Cmd+K"
      ],
      "examples": [
        {
          "value": "按 Cmd+K F12",
          "description": "在侧边打开定义（Win/Linux 为 Ctrl+K F12）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Open Definition to the Side）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要在侧边打开定义（Win/Linux 为 Ctrl+K F12），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+K F12”在侧边打开定义（Win/Linux 为 Ctrl+K F12）。",
          "expected": "快捷键触发后，当前界面完成“在侧边打开定义（Win/Linux 为 Ctrl+K F12）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+.",
      "en": "Quick Fix",
      "zh": "显示快速修复和代码操作建议（Win/Linux 为 Ctrl+.)",
      "id": "fd2bf4776081160c",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Quick Fix）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "显示快速修复和代码操作建议（Win/Linux 为 Ctrl+.)",
        "Quick Fix",
        "Cmd+."
      ],
      "examples": [
        {
          "value": "按 Cmd+.",
          "description": "显示快速修复和代码操作建议（Win/Linux 为 Ctrl+.)",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Quick Fix）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要显示快速修复和代码操作建议（Win/Linux 为 Ctrl+.)，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+.”显示快速修复和代码操作建议（Win/Linux 为 Ctrl+.)。",
          "expected": "快捷键触发后，当前界面完成“显示快速修复和代码操作建议（Win/Linux 为 Ctrl+.)”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Shift+F12",
      "en": "Show References",
      "zh": "查找并列出当前符号的所有引用（Win/Linux 相同）",
      "id": "b3c3a81bb035751e",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Show References）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "搜索",
        "查找",
        "定位",
        "查看",
        "显示",
        "状态",
        "查找并列出当前符号的所有引用（Win/Linux 相同）",
        "Show References"
      ],
      "examples": [
        {
          "value": "按 Shift+F12",
          "description": "查找并列出当前符号的所有引用（Win/Linux 相同）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Show References）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要查找并列出当前符号的所有引用（Win/Linux 相同），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Shift+F12”查找并列出当前符号的所有引用（Win/Linux 相同）。",
          "expected": "快捷键触发后，当前界面完成“查找并列出当前符号的所有引用（Win/Linux 相同）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "F2",
      "en": "Rename Symbol",
      "zh": "安全重命名当前符号，自动更新所有引用（Win/Linux 相同）",
      "id": "21fad3c90977de0e",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Rename Symbol）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "移动",
        "重命名",
        "改名",
        "安全重命名当前符号，自动更新所有引用（Win/Linux 相同）",
        "Rename Symbol",
        "F2"
      ],
      "examples": [
        {
          "value": "按 F2",
          "description": "安全重命名当前符号，自动更新所有引用（Win/Linux 相同）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Rename Symbol）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要安全重命名当前符号，自动更新所有引用（Win/Linux 相同），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 F2”安全重命名当前符号，自动更新所有引用（Win/Linux 相同）。",
          "expected": "快捷键触发后，当前界面完成“安全重命名当前符号，自动更新所有引用（Win/Linux 相同）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+K Cmd+X",
      "en": "Trim Trailing Whitespace",
      "zh": "删除行尾多余空格（Win/Linux 为 Ctrl+K Ctrl+X）",
      "id": "49953016d3f28808",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Trim Trailing Whitespace）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "删除",
        "移除",
        "清理",
        "删除行尾多余空格（Win/Linux 为 Ctrl+K Ctrl+X）",
        "Trim Trailing Whitespace",
        "Cmd+K"
      ],
      "examples": [
        {
          "value": "按 Cmd+K Cmd+X",
          "description": "删除行尾多余空格（Win/Linux 为 Ctrl+K Ctrl+X）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Trim Trailing Whitespace）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要删除行尾多余空格（Win/Linux 为 Ctrl+K Ctrl+X），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+K Cmd+X”删除行尾多余空格（Win/Linux 为 Ctrl+K Ctrl+X）。",
          "expected": "快捷键触发后，当前界面完成“删除行尾多余空格（Win/Linux 为 Ctrl+K Ctrl+X）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+K M",
      "en": "Change File Language",
      "zh": "切换当前文件的语言模式（Win/Linux 为 Ctrl+K M）",
      "id": "cea153a7f8d9930a",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Change File Language）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "切换当前文件的语言模式（Win/Linux 为 Ctrl+K M）",
        "Change File Language",
        "Cmd+K"
      ],
      "examples": [
        {
          "value": "按 Cmd+K M",
          "description": "切换当前文件的语言模式（Win/Linux 为 Ctrl+K M）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Change File Language）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要切换当前文件的语言模式（Win/Linux 为 Ctrl+K M），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+K M”切换当前文件的语言模式（Win/Linux 为 Ctrl+K M）。",
          "expected": "快捷键触发后，当前界面完成“切换当前文件的语言模式（Win/Linux 为 Ctrl+K M）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+T",
      "en": "Show All Symbols",
      "zh": "在工作区中搜索并跳转到任意符号（Win/Linux 为 Ctrl+T）",
      "id": "c47e34291dbb9b24",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Show All Symbols）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "搜索",
        "查找",
        "定位",
        "查看",
        "显示",
        "状态",
        "在工作区中搜索并跳转到任意符号（Win/Linux 为 Ctrl+T）",
        "Show All Symbols"
      ],
      "examples": [
        {
          "value": "按 Cmd+T",
          "description": "在工作区中搜索并跳转到任意符号（Win/Linux 为 Ctrl+T）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Show All Symbols）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要在工作区中搜索并跳转到任意符号（Win/Linux 为 Ctrl+T），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+T”在工作区中搜索并跳转到任意符号（Win/Linux 为 Ctrl+T）。",
          "expected": "快捷键触发后，当前界面完成“在工作区中搜索并跳转到任意符号（Win/Linux 为 Ctrl+T）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl+G",
      "en": "Go to Line...",
      "zh": "跳转到指定行号（Win/Linux 相同）",
      "id": "ecc3215cd949d6c6",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Go to Line...）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "跳转到指定行号（Win/Linux 相同）",
        "Go to Line...",
        "Ctrl+G"
      ],
      "examples": [
        {
          "value": "按 Ctrl+G",
          "description": "跳转到指定行号（Win/Linux 相同）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Go to Line...）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要跳转到指定行号（Win/Linux 相同），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Ctrl+G”跳转到指定行号（Win/Linux 相同）。",
          "expected": "快捷键触发后，当前界面完成“跳转到指定行号（Win/Linux 相同）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Shift+Cmd+O",
      "en": "Go to Symbol in File...",
      "zh": "在当前文件中搜索并跳转到符号（Win/Linux 为 Ctrl+Shift+O）",
      "id": "064537c04ae4d3d4",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Go to Symbol in File...）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "搜索",
        "查找",
        "定位",
        "在当前文件中搜索并跳转到符号（Win/Linux 为 Ctrl+Shift+O）",
        "Go to Symbol in File...",
        "Shift+Cmd+O"
      ],
      "examples": [
        {
          "value": "按 Shift+Cmd+O",
          "description": "在当前文件中搜索并跳转到符号（Win/Linux 为 Ctrl+Shift+O）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Go to Symbol in File...）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要在当前文件中搜索并跳转到符号（Win/Linux 为 Ctrl+Shift+O），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Shift+Cmd+O”在当前文件中搜索并跳转到符号（Win/Linux 为 Ctrl+Shift+O）。",
          "expected": "快捷键触发后，当前界面完成“在当前文件中搜索并跳转到符号（Win/Linux 为 Ctrl+Shift+O）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Shift+Cmd+M",
      "en": "Show Problems Panel",
      "zh": "显示问题面板（错误/警告）（Win/Linux 为 Ctrl+Shift+M）",
      "id": "0976238fa5eb56a3",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Show Problems Panel）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "显示问题面板（错误/警告）（Win/Linux 为 Ctrl+Shift+M）",
        "Show Problems Panel",
        "Shift+Cmd+M"
      ],
      "examples": [
        {
          "value": "按 Shift+Cmd+M",
          "description": "显示问题面板（错误/警告）（Win/Linux 为 Ctrl+Shift+M）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Show Problems Panel）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要显示问题面板（错误/警告）（Win/Linux 为 Ctrl+Shift+M），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Shift+Cmd+M”显示问题面板（错误/警告）（Win/Linux 为 Ctrl+Shift+M）。",
          "expected": "快捷键触发后，当前界面完成“显示问题面板（错误/警告）（Win/Linux 为 Ctrl+Shift+M）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "F8",
      "en": "Go to Next Error or Warning",
      "zh": "跳转到下一个错误或警告（Win/Linux 相同）",
      "id": "0409881ee928d4f3",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Go to Next Error or Warning）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "跳转到下一个错误或警告（Win/Linux 相同）",
        "Go to Next Error or Warning",
        "F8"
      ],
      "examples": [
        {
          "value": "按 F8",
          "description": "跳转到下一个错误或警告（Win/Linux 相同）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Go to Next Error or Warning）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要跳转到下一个错误或警告（Win/Linux 相同），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 F8”跳转到下一个错误或警告（Win/Linux 相同）。",
          "expected": "快捷键触发后，当前界面完成“跳转到下一个错误或警告（Win/Linux 相同）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Shift+F8",
      "en": "Go to Previous Error or Warning",
      "zh": "跳转到上一个错误或警告（Win/Linux 相同）",
      "id": "5df19c6b80d8d192",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Go to Previous Error or Warning）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "跳转到上一个错误或警告（Win/Linux 相同）",
        "Go to Previous Error or Warning",
        "Shift+F8"
      ],
      "examples": [
        {
          "value": "按 Shift+F8",
          "description": "跳转到上一个错误或警告（Win/Linux 相同）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Go to Previous Error or Warning）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要跳转到上一个错误或警告（Win/Linux 相同），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Shift+F8”跳转到上一个错误或警告（Win/Linux 相同）。",
          "expected": "快捷键触发后，当前界面完成“跳转到上一个错误或警告（Win/Linux 相同）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl+Tab",
      "en": "Navigate Editor Group History",
      "zh": "按最近使用顺序切换编辑器标签页（Win/Linux 相同）",
      "id": "5311a1548c72c3b9",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Navigate Editor Group History）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "按最近使用顺序切换编辑器标签页（Win/Linux 相同）",
        "Navigate Editor Group History",
        "Ctrl+Tab"
      ],
      "examples": [
        {
          "value": "按 Ctrl+Tab",
          "description": "按最近使用顺序切换编辑器标签页（Win/Linux 相同）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Navigate Editor Group History）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要按最近使用顺序切换编辑器标签页（Win/Linux 相同），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Ctrl+Tab”按最近使用顺序切换编辑器标签页（Win/Linux 相同）。",
          "expected": "快捷键触发后，当前界面完成“按最近使用顺序切换编辑器标签页（Win/Linux 相同）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl+-",
      "en": "Go Back",
      "zh": "返回上一个光标/编辑位置（Win/Linux 为 Alt+Left）",
      "id": "889b60fe00930903",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Go Back）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "返回上一个光标/编辑位置（Win/Linux 为 Alt+Left）",
        "Go Back",
        "Ctrl+-"
      ],
      "examples": [
        {
          "value": "按 Ctrl+-",
          "description": "返回上一个光标/编辑位置（Win/Linux 为 Alt+Left）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Go Back）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要返回上一个光标/编辑位置（Win/Linux 为 Alt+Left），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Ctrl+-”返回上一个光标/编辑位置（Win/Linux 为 Alt+Left）。",
          "expected": "快捷键触发后，当前界面完成“返回上一个光标/编辑位置（Win/Linux 为 Alt+Left）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl+Shift+-",
      "en": "Go Forward",
      "zh": "前进到下一个光标/编辑位置（Win/Linux 为 Alt+Right）",
      "id": "80d7ece11fb77ce2",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Go Forward）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "前进到下一个光标/编辑位置（Win/Linux 为 Alt+Right）",
        "Go Forward",
        "Ctrl+Shift+-"
      ],
      "examples": [
        {
          "value": "按 Ctrl+Shift+-",
          "description": "前进到下一个光标/编辑位置（Win/Linux 为 Alt+Right）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Go Forward）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要前进到下一个光标/编辑位置（Win/Linux 为 Alt+Right），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Ctrl+Shift+-”前进到下一个光标/编辑位置（Win/Linux 为 Alt+Right）。",
          "expected": "快捷键触发后，当前界面完成“前进到下一个光标/编辑位置（Win/Linux 为 Alt+Right）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+\\",
      "en": "Split Editor",
      "zh": "拆分编辑器窗口（Win/Linux 为 Ctrl+\\）",
      "id": "1d3269f55df91102",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Split Editor）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "拆分编辑器窗口（Win/Linux 为 Ctrl+\\）",
        "Split Editor",
        "Cmd+\\"
      ],
      "examples": [
        {
          "value": "按 Cmd+\\",
          "description": "拆分编辑器窗口（Win/Linux 为 Ctrl+\\）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Split Editor）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要拆分编辑器窗口（Win/Linux 为 Ctrl+\\），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+\\”拆分编辑器窗口（Win/Linux 为 Ctrl+\\）。",
          "expected": "快捷键触发后，当前界面完成“拆分编辑器窗口（Win/Linux 为 Ctrl+\\）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+1",
      "en": "Focus into 1st Editor Group",
      "zh": "聚焦第一个编辑器组（Win/Linux 为 Ctrl+1）",
      "id": "08895f73a641f7da",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Focus into 1st Editor Group）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "聚焦第一个编辑器组（Win/Linux 为 Ctrl+1）",
        "Focus into 1st Editor Group",
        "Cmd+1"
      ],
      "examples": [
        {
          "value": "按 Cmd+1",
          "description": "聚焦第一个编辑器组（Win/Linux 为 Ctrl+1）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Focus into 1st Editor Group）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要聚焦第一个编辑器组（Win/Linux 为 Ctrl+1），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+1”聚焦第一个编辑器组（Win/Linux 为 Ctrl+1）。",
          "expected": "快捷键触发后，当前界面完成“聚焦第一个编辑器组（Win/Linux 为 Ctrl+1）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+2",
      "en": "Focus into 2nd Editor Group",
      "zh": "聚焦第二个编辑器组（Win/Linux 为 Ctrl+2）",
      "id": "949e5006cb83275c",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Focus into 2nd Editor Group）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "聚焦第二个编辑器组（Win/Linux 为 Ctrl+2）",
        "Focus into 2nd Editor Group",
        "Cmd+2"
      ],
      "examples": [
        {
          "value": "按 Cmd+2",
          "description": "聚焦第二个编辑器组（Win/Linux 为 Ctrl+2）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Focus into 2nd Editor Group）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要聚焦第二个编辑器组（Win/Linux 为 Ctrl+2），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+2”聚焦第二个编辑器组（Win/Linux 为 Ctrl+2）。",
          "expected": "快捷键触发后，当前界面完成“聚焦第二个编辑器组（Win/Linux 为 Ctrl+2）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+3",
      "en": "Focus into 3rd Editor Group",
      "zh": "聚焦第三个编辑器组（Win/Linux 为 Ctrl+3）",
      "id": "8f02b263078083ca",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Focus into 3rd Editor Group）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "聚焦第三个编辑器组（Win/Linux 为 Ctrl+3）",
        "Focus into 3rd Editor Group",
        "Cmd+3"
      ],
      "examples": [
        {
          "value": "按 Cmd+3",
          "description": "聚焦第三个编辑器组（Win/Linux 为 Ctrl+3）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Focus into 3rd Editor Group）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要聚焦第三个编辑器组（Win/Linux 为 Ctrl+3），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+3”聚焦第三个编辑器组（Win/Linux 为 Ctrl+3）。",
          "expected": "快捷键触发后，当前界面完成“聚焦第三个编辑器组（Win/Linux 为 Ctrl+3）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+K Cmd+Left",
      "en": "Focus into Previous Editor Group",
      "zh": "聚焦上一个编辑器组（Win/Linux 为 Ctrl+K Ctrl+Left）",
      "id": "f9a2fd6b08a3c166",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Focus into Previous Editor Group）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "聚焦上一个编辑器组（Win/Linux 为 Ctrl+K Ctrl+Left）",
        "Focus into Previous Editor Group",
        "Cmd+K"
      ],
      "examples": [
        {
          "value": "按 Cmd+K Cmd+Left",
          "description": "聚焦上一个编辑器组（Win/Linux 为 Ctrl+K Ctrl+Left）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Focus into Previous Editor Group）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要聚焦上一个编辑器组（Win/Linux 为 Ctrl+K Ctrl+Left），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+K Cmd+Left”聚焦上一个编辑器组（Win/Linux 为 Ctrl+K Ctrl+Left）。",
          "expected": "快捷键触发后，当前界面完成“聚焦上一个编辑器组（Win/Linux 为 Ctrl+K Ctrl+Left）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+K Cmd+Right",
      "en": "Focus into Next Editor Group",
      "zh": "聚焦下一个编辑器组（Win/Linux 为 Ctrl+K Ctrl+Right）",
      "id": "598309f452ff20b9",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Focus into Next Editor Group）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "聚焦下一个编辑器组（Win/Linux 为 Ctrl+K Ctrl+Right）",
        "Focus into Next Editor Group",
        "Cmd+K"
      ],
      "examples": [
        {
          "value": "按 Cmd+K Cmd+Right",
          "description": "聚焦下一个编辑器组（Win/Linux 为 Ctrl+K Ctrl+Right）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Focus into Next Editor Group）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要聚焦下一个编辑器组（Win/Linux 为 Ctrl+K Ctrl+Right），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+K Cmd+Right”聚焦下一个编辑器组（Win/Linux 为 Ctrl+K Ctrl+Right）。",
          "expected": "快捷键触发后，当前界面完成“聚焦下一个编辑器组（Win/Linux 为 Ctrl+K Ctrl+Right）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+K Left",
      "en": "Move Editor Left",
      "zh": "将当前编辑器标签页左移到上一个组（Win/Linux 为 Ctrl+K Left）",
      "id": "b4cf63bb1f51eb0d",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Move Editor Left）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "移动",
        "重命名",
        "改名",
        "将当前编辑器标签页左移到上一个组（Win/Linux 为 Ctrl+K Left）",
        "Move Editor Left",
        "Cmd+K"
      ],
      "examples": [
        {
          "value": "按 Cmd+K Left",
          "description": "将当前编辑器标签页左移到上一个组（Win/Linux 为 Ctrl+K Left）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Move Editor Left）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要将当前编辑器标签页左移到上一个组（Win/Linux 为 Ctrl+K Left），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+K Left”将当前编辑器标签页左移到上一个组（Win/Linux 为 Ctrl+K Left）。",
          "expected": "快捷键触发后，当前界面完成“将当前编辑器标签页左移到上一个组（Win/Linux 为 Ctrl+K Left）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+K Right",
      "en": "Move Editor Right",
      "zh": "将当前编辑器标签页右移到下一个组（Win/Linux 为 Ctrl+K Right）",
      "id": "5bef94d11d40eb41",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Move Editor Right）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "移动",
        "重命名",
        "改名",
        "将当前编辑器标签页右移到下一个组（Win/Linux 为 Ctrl+K Right）",
        "Move Editor Right",
        "Cmd+K"
      ],
      "examples": [
        {
          "value": "按 Cmd+K Right",
          "description": "将当前编辑器标签页右移到下一个组（Win/Linux 为 Ctrl+K Right）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Move Editor Right）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要将当前编辑器标签页右移到下一个组（Win/Linux 为 Ctrl+K Right），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+K Right”将当前编辑器标签页右移到下一个组（Win/Linux 为 Ctrl+K Right）。",
          "expected": "快捷键触发后，当前界面完成“将当前编辑器标签页右移到下一个组（Win/Linux 为 Ctrl+K Right）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+N",
      "en": "New File",
      "zh": "新建文件（Win/Linux 为 Ctrl+N）",
      "id": "ace3da43cb90dc5b",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 New File）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "创建",
        "新建",
        "初始化",
        "新建文件（Win/Linux 为 Ctrl+N）",
        "New File",
        "Cmd+N"
      ],
      "examples": [
        {
          "value": "按 Cmd+N",
          "description": "新建文件（Win/Linux 为 Ctrl+N）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 New File）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要新建文件（Win/Linux 为 Ctrl+N），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+N”新建文件（Win/Linux 为 Ctrl+N）。",
          "expected": "快捷键触发后，当前界面完成“新建文件（Win/Linux 为 Ctrl+N）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+O",
      "en": "Open File...",
      "zh": "打开文件（Win/Linux 为 Ctrl+O）",
      "id": "9319405308463241",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Open File...）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "打开文件（Win/Linux 为 Ctrl+O）",
        "Open File...",
        "Cmd+O"
      ],
      "examples": [
        {
          "value": "按 Cmd+O",
          "description": "打开文件（Win/Linux 为 Ctrl+O）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Open File...）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要打开文件（Win/Linux 为 Ctrl+O），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+O”打开文件（Win/Linux 为 Ctrl+O）。",
          "expected": "快捷键触发后，当前界面完成“打开文件（Win/Linux 为 Ctrl+O）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+S",
      "en": "Save",
      "zh": "保存当前文件（Win/Linux 为 Ctrl+S）",
      "id": "c6a32df527232e5f",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Save）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "保存当前文件（Win/Linux 为 Ctrl+S）",
        "Save",
        "Cmd+S"
      ],
      "examples": [
        {
          "value": "按 Cmd+S",
          "description": "保存当前文件（Win/Linux 为 Ctrl+S）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Save）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要保存当前文件（Win/Linux 为 Ctrl+S），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+S”保存当前文件（Win/Linux 为 Ctrl+S）。",
          "expected": "快捷键触发后，当前界面完成“保存当前文件（Win/Linux 为 Ctrl+S）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Shift+Cmd+S",
      "en": "Save As...",
      "zh": "另存为（Win/Linux 为 Ctrl+Shift+S）",
      "id": "9e6e0be65fe6f3ee",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Save As...）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "另存为（Win/Linux 为 Ctrl+Shift+S）",
        "Save As...",
        "Shift+Cmd+S"
      ],
      "examples": [
        {
          "value": "按 Shift+Cmd+S",
          "description": "另存为（Win/Linux 为 Ctrl+Shift+S）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Save As...）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要另存为（Win/Linux 为 Ctrl+Shift+S），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Shift+Cmd+S”另存为（Win/Linux 为 Ctrl+Shift+S）。",
          "expected": "快捷键触发后，当前界面完成“另存为（Win/Linux 为 Ctrl+Shift+S）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Option+Cmd+S",
      "en": "Save All",
      "zh": "保存所有打开的文件（Win/Linux 为 Ctrl+K S）",
      "id": "808eae12ae7580f5",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Save All）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "保存所有打开的文件（Win/Linux 为 Ctrl+K S）",
        "Save All",
        "Option+Cmd+S"
      ],
      "examples": [
        {
          "value": "按 Option+Cmd+S",
          "description": "保存所有打开的文件（Win/Linux 为 Ctrl+K S）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Save All）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要保存所有打开的文件（Win/Linux 为 Ctrl+K S），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Option+Cmd+S”保存所有打开的文件（Win/Linux 为 Ctrl+K S）。",
          "expected": "快捷键触发后，当前界面完成“保存所有打开的文件（Win/Linux 为 Ctrl+K S）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+K Cmd+W",
      "en": "Close All",
      "zh": "关闭所有打开的编辑器（Win/Linux 为 Ctrl+K Ctrl+W）",
      "id": "1ca0e73c45bba858",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Close All）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "关闭所有打开的编辑器（Win/Linux 为 Ctrl+K Ctrl+W）",
        "Close All",
        "Cmd+K"
      ],
      "examples": [
        {
          "value": "按 Cmd+K Cmd+W",
          "description": "关闭所有打开的编辑器（Win/Linux 为 Ctrl+K Ctrl+W）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Close All）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要关闭所有打开的编辑器（Win/Linux 为 Ctrl+K Ctrl+W），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+K Cmd+W”关闭所有打开的编辑器（Win/Linux 为 Ctrl+K Ctrl+W）。",
          "expected": "快捷键触发后，当前界面完成“关闭所有打开的编辑器（Win/Linux 为 Ctrl+K Ctrl+W）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Shift+Cmd+T",
      "en": "Reopen Closed Editor",
      "zh": "重新打开最近关闭的编辑器标签页（Win/Linux 为 Ctrl+Shift+T）",
      "id": "e0ab7f1ee5ae2baf",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Reopen Closed Editor）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "重新打开最近关闭的编辑器标签页（Win/Linux 为 Ctrl+Shift+T）",
        "Reopen Closed Editor",
        "Shift+Cmd+T"
      ],
      "examples": [
        {
          "value": "按 Shift+Cmd+T",
          "description": "重新打开最近关闭的编辑器标签页（Win/Linux 为 Ctrl+Shift+T）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Reopen Closed Editor）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要重新打开最近关闭的编辑器标签页（Win/Linux 为 Ctrl+Shift+T），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Shift+Cmd+T”重新打开最近关闭的编辑器标签页（Win/Linux 为 Ctrl+Shift+T）。",
          "expected": "快捷键触发后，当前界面完成“重新打开最近关闭的编辑器标签页（Win/Linux 为 Ctrl+Shift+T）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+K Enter",
      "en": "Keep Preview Mode Editor Open",
      "zh": "将预览模式下的编辑器固定为常开（Win/Linux 为 Ctrl+K Enter）",
      "id": "8cb59865ef231b44",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Keep Preview Mode Editor Open）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "将预览模式下的编辑器固定为常开（Win/Linux 为 Ctrl+K Enter）",
        "Keep Preview Mode Editor Open",
        "Cmd+K"
      ],
      "examples": [
        {
          "value": "按 Cmd+K Enter",
          "description": "将预览模式下的编辑器固定为常开（Win/Linux 为 Ctrl+K Enter）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Keep Preview Mode Editor Open）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要将预览模式下的编辑器固定为常开（Win/Linux 为 Ctrl+K Enter），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+K Enter”将预览模式下的编辑器固定为常开（Win/Linux 为 Ctrl+K Enter）。",
          "expected": "快捷键触发后，当前界面完成“将预览模式下的编辑器固定为常开（Win/Linux 为 Ctrl+K Enter）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+K P",
      "en": "Copy Path of Active File",
      "zh": "复制当前文件完整路径到剪贴板（Win/Linux 为 Ctrl+K Ctrl+C）",
      "id": "d528bf32a5d3c078",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Copy Path of Active File）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "复制",
        "克隆",
        "拷贝",
        "复制当前文件完整路径到剪贴板（Win/Linux 为 Ctrl+K Ctrl+C）",
        "Copy Path of Active File",
        "Cmd+K"
      ],
      "examples": [
        {
          "value": "按 Cmd+K P",
          "description": "复制当前文件完整路径到剪贴板（Win/Linux 为 Ctrl+K Ctrl+C）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Copy Path of Active File）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要复制当前文件完整路径到剪贴板（Win/Linux 为 Ctrl+K Ctrl+C），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+K P”复制当前文件完整路径到剪贴板（Win/Linux 为 Ctrl+K Ctrl+C）。",
          "expected": "快捷键触发后，当前界面完成“复制当前文件完整路径到剪贴板（Win/Linux 为 Ctrl+K Ctrl+C）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+K R",
      "en": "Reveal Active File in Finder",
      "zh": "在 Finder 中显示当前文件（Win/Linux 为 Ctrl+K R）",
      "id": "0dc9c79099c3454f",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Reveal Active File in Finder）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "搜索",
        "查找",
        "定位",
        "查看",
        "显示",
        "状态",
        "在 Finder 中显示当前文件（Win/Linux 为 Ctrl+K R）",
        "Reveal Active File in Finder"
      ],
      "examples": [
        {
          "value": "按 Cmd+K R",
          "description": "在 Finder 中显示当前文件（Win/Linux 为 Ctrl+K R）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Reveal Active File in Finder）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要在 Finder 中显示当前文件（Win/Linux 为 Ctrl+K R），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+K R”在 Finder 中显示当前文件（Win/Linux 为 Ctrl+K R）。",
          "expected": "快捷键触发后，当前界面完成“在 Finder 中显示当前文件（Win/Linux 为 Ctrl+K R）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+K O",
      "en": "Show Active File in New Window",
      "zh": "在新窗口/实例中打开当前文件（Win/Linux 为 Ctrl+K O）",
      "id": "db61f3a467593a56",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Show Active File in New Window）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "在新窗口/实例中打开当前文件（Win/Linux 为 Ctrl+K O）",
        "Show Active File in New Window",
        "Cmd+K"
      ],
      "examples": [
        {
          "value": "按 Cmd+K O",
          "description": "在新窗口/实例中打开当前文件（Win/Linux 为 Ctrl+K O）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Show Active File in New Window）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要在新窗口/实例中打开当前文件（Win/Linux 为 Ctrl+K O），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+K O”在新窗口/实例中打开当前文件（Win/Linux 为 Ctrl+K O）。",
          "expected": "快捷键触发后，当前界面完成“在新窗口/实例中打开当前文件（Win/Linux 为 Ctrl+K O）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl+Cmd+F",
      "en": "Toggle Full Screen",
      "zh": "切换全屏模式（Win/Linux 为 F11）",
      "id": "6aa83867c7001cfa",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Toggle Full Screen）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "切换全屏模式（Win/Linux 为 F11）",
        "Toggle Full Screen",
        "Ctrl+Cmd+F"
      ],
      "examples": [
        {
          "value": "按 Ctrl+Cmd+F",
          "description": "切换全屏模式（Win/Linux 为 F11）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Toggle Full Screen）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要切换全屏模式（Win/Linux 为 F11），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Ctrl+Cmd+F”切换全屏模式（Win/Linux 为 F11）。",
          "expected": "快捷键触发后，当前界面完成“切换全屏模式（Win/Linux 为 F11）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Option+Cmd+0",
      "en": "Toggle Editor Layout",
      "zh": "切换编辑器水平/垂直布局（Win/Linux 为 Shift+Alt+0）",
      "id": "a5260a651a09923f",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Toggle Editor Layout）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "切换编辑器水平/垂直布局（Win/Linux 为 Shift+Alt+0）",
        "Toggle Editor Layout",
        "Option+Cmd+0"
      ],
      "examples": [
        {
          "value": "按 Option+Cmd+0",
          "description": "切换编辑器水平/垂直布局（Win/Linux 为 Shift+Alt+0）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Toggle Editor Layout）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要切换编辑器水平/垂直布局（Win/Linux 为 Shift+Alt+0），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Option+Cmd+0”切换编辑器水平/垂直布局（Win/Linux 为 Shift+Alt+0）。",
          "expected": "快捷键触发后，当前界面完成“切换编辑器水平/垂直布局（Win/Linux 为 Shift+Alt+0）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+=",
      "en": "Zoom In",
      "zh": "放大编辑器字体/界面（Win/Linux 为 Ctrl+=）",
      "id": "3b3d2be704d2ee98",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Zoom In）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "放大编辑器字体/界面（Win/Linux 为 Ctrl+=）",
        "Zoom In",
        "Cmd+="
      ],
      "examples": [
        {
          "value": "按 Cmd+=",
          "description": "放大编辑器字体/界面（Win/Linux 为 Ctrl+=）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Zoom In）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要放大编辑器字体/界面（Win/Linux 为 Ctrl+=），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+=”放大编辑器字体/界面（Win/Linux 为 Ctrl+=）。",
          "expected": "快捷键触发后，当前界面完成“放大编辑器字体/界面（Win/Linux 为 Ctrl+=）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+-",
      "en": "Zoom Out",
      "zh": "缩小编辑器字体/界面（Win/Linux 为 Ctrl+-）",
      "id": "3779413e69368c55",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Zoom Out）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "缩小编辑器字体/界面（Win/Linux 为 Ctrl+-）",
        "Zoom Out",
        "Cmd+-"
      ],
      "examples": [
        {
          "value": "按 Cmd+-",
          "description": "缩小编辑器字体/界面（Win/Linux 为 Ctrl+-）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Zoom Out）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要缩小编辑器字体/界面（Win/Linux 为 Ctrl+-），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+-”缩小编辑器字体/界面（Win/Linux 为 Ctrl+-）。",
          "expected": "快捷键触发后，当前界面完成“缩小编辑器字体/界面（Win/Linux 为 Ctrl+-）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+B",
      "en": "Toggle Sidebar Visibility",
      "zh": "切换侧边栏显示/隐藏（Win/Linux 为 Ctrl+B）",
      "id": "61a170228be0b9e1",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Toggle Sidebar Visibility）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "切换侧边栏显示/隐藏（Win/Linux 为 Ctrl+B）",
        "Toggle Sidebar Visibility",
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
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Toggle Sidebar Visibility）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要切换侧边栏显示/隐藏（Win/Linux 为 Ctrl+B），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+B”切换侧边栏显示/隐藏（Win/Linux 为 Ctrl+B）。",
          "expected": "快捷键触发后，当前界面完成“切换侧边栏显示/隐藏（Win/Linux 为 Ctrl+B）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Shift+Cmd+E",
      "en": "Show Explorer",
      "zh": "显示/聚焦文件资源管理器（Win/Linux 为 Ctrl+Shift+E）",
      "id": "2789f9fc114fc29b",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Show Explorer）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "显示/聚焦文件资源管理器（Win/Linux 为 Ctrl+Shift+E）",
        "Show Explorer",
        "Shift+Cmd+E"
      ],
      "examples": [
        {
          "value": "按 Shift+Cmd+E",
          "description": "显示/聚焦文件资源管理器（Win/Linux 为 Ctrl+Shift+E）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Show Explorer）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要显示/聚焦文件资源管理器（Win/Linux 为 Ctrl+Shift+E），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Shift+Cmd+E”显示/聚焦文件资源管理器（Win/Linux 为 Ctrl+Shift+E）。",
          "expected": "快捷键触发后，当前界面完成“显示/聚焦文件资源管理器（Win/Linux 为 Ctrl+Shift+E）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Shift+Cmd+F",
      "en": "Show Search",
      "zh": "显示/聚焦跨文件搜索面板（Win/Linux 为 Ctrl+Shift+F）",
      "id": "e06504997d5cceb4",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Show Search）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "搜索",
        "查找",
        "定位",
        "查看",
        "显示",
        "状态",
        "显示/聚焦跨文件搜索面板（Win/Linux 为 Ctrl+Shift+F）",
        "Show Search"
      ],
      "examples": [
        {
          "value": "按 Shift+Cmd+F（Win/Linux 为 Ctrl+Shift+F），输入关键词",
          "description": "在整个工作区跨文件搜索",
          "copyable": false,
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "vscode-keybindings"
          ],
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Show Search）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要在整个工作区跨文件搜索，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Shift+Cmd+F（Win/Linux 为 Ctrl+Shift+F），输入关键词”显示/聚焦跨文件搜索面板（Win/Linux 为 Ctrl+Shift+F）。",
          "expected": "快捷键触发后，当前界面完成“在整个工作区跨文件搜索”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl+Shift+G",
      "en": "Show Source Control",
      "zh": "显示/聚焦源代码管理（Git）面板（Win/Linux 相同）",
      "id": "dcb3cb976d739571",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Show Source Control）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "显示/聚焦源代码管理（Git）面板（Win/Linux 相同）",
        "Show Source Control",
        "Ctrl+Shift+G"
      ],
      "examples": [
        {
          "value": "按 Ctrl+Shift+G",
          "description": "显示/聚焦源代码管理（Git）面板（Win/Linux 相同）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Show Source Control）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要显示/聚焦源代码管理（Git）面板（Win/Linux 相同），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Ctrl+Shift+G”显示/聚焦源代码管理（Git）面板（Win/Linux 相同）。",
          "expected": "快捷键触发后，当前界面完成“显示/聚焦源代码管理（Git）面板（Win/Linux 相同）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Shift+Cmd+D",
      "en": "Show Debug",
      "zh": "显示/聚焦运行和调试面板（Win/Linux 为 Ctrl+Shift+D）",
      "id": "941fe5558b330c57",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Show Debug）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "显示/聚焦运行和调试面板（Win/Linux 为 Ctrl+Shift+D）",
        "Show Debug",
        "Shift+Cmd+D"
      ],
      "examples": [
        {
          "value": "按 Shift+Cmd+D",
          "description": "显示/聚焦运行和调试面板（Win/Linux 为 Ctrl+Shift+D）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Show Debug）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要显示/聚焦运行和调试面板（Win/Linux 为 Ctrl+Shift+D），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Shift+Cmd+D”显示/聚焦运行和调试面板（Win/Linux 为 Ctrl+Shift+D）。",
          "expected": "快捷键触发后，当前界面完成“显示/聚焦运行和调试面板（Win/Linux 为 Ctrl+Shift+D）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Shift+Cmd+X",
      "en": "Show Extensions",
      "zh": "显示/聚焦扩展管理面板（Win/Linux 为 Ctrl+Shift+X）",
      "id": "3a70a8e737009dc9",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Show Extensions）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "显示/聚焦扩展管理面板（Win/Linux 为 Ctrl+Shift+X）",
        "Show Extensions",
        "Shift+Cmd+X"
      ],
      "examples": [
        {
          "value": "按 Shift+Cmd+X",
          "description": "显示/聚焦扩展管理面板（Win/Linux 为 Ctrl+Shift+X）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Show Extensions）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要显示/聚焦扩展管理面板（Win/Linux 为 Ctrl+Shift+X），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Shift+Cmd+X”显示/聚焦扩展管理面板（Win/Linux 为 Ctrl+Shift+X）。",
          "expected": "快捷键触发后，当前界面完成“显示/聚焦扩展管理面板（Win/Linux 为 Ctrl+Shift+X）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Shift+Cmd+H",
      "en": "Replace in Files",
      "zh": "在多个文件中查找并替换（Win/Linux 为 Ctrl+Shift+H）",
      "id": "881e59cfaa9a66ee",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Replace in Files）",
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
        "在多个文件中查找并替换（Win/Linux 为 Ctrl+Shift+H）",
        "Replace in Files"
      ],
      "examples": [
        {
          "value": "按 Shift+Cmd+H",
          "description": "在多个文件中查找并替换（Win/Linux 为 Ctrl+Shift+H）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Replace in Files）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要在多个文件中查找并替换（Win/Linux 为 Ctrl+Shift+H），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Shift+Cmd+H”在多个文件中查找并替换（Win/Linux 为 Ctrl+Shift+H）。",
          "expected": "快捷键触发后，当前界面完成“在多个文件中查找并替换（Win/Linux 为 Ctrl+Shift+H）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Shift+Cmd+J",
      "en": "Toggle Search Details",
      "zh": "展开/收起搜索详情（替换输入框等）（Win/Linux 为 Ctrl+Shift+J）",
      "id": "f28d9736e518c3a5",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Toggle Search Details）",
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
        "展开/收起搜索详情（替换输入框等）（Win/Linux 为 Ctrl+Shift+J）",
        "Toggle Search Details"
      ],
      "examples": [
        {
          "value": "按 Shift+Cmd+J",
          "description": "展开/收起搜索详情（替换输入框等）（Win/Linux 为 Ctrl+Shift+J）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Toggle Search Details）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要展开/收起搜索详情（替换输入框等）（Win/Linux 为 Ctrl+Shift+J），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Shift+Cmd+J”展开/收起搜索详情（替换输入框等）（Win/Linux 为 Ctrl+Shift+J）。",
          "expected": "快捷键触发后，当前界面完成“展开/收起搜索详情（替换输入框等）（Win/Linux 为 Ctrl+Shift+J）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Shift+Cmd+U",
      "en": "Show Output Panel",
      "zh": "显示输出面板（Win/Linux 为 Ctrl+Shift+U）",
      "id": "6a4f9372925bad25",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Show Output Panel）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "显示输出面板（Win/Linux 为 Ctrl+Shift+U）",
        "Show Output Panel",
        "Shift+Cmd+U"
      ],
      "examples": [
        {
          "value": "按 Shift+Cmd+U",
          "description": "显示输出面板（Win/Linux 为 Ctrl+Shift+U）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Show Output Panel）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要显示输出面板（Win/Linux 为 Ctrl+Shift+U），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Shift+Cmd+U”显示输出面板（Win/Linux 为 Ctrl+Shift+U）。",
          "expected": "快捷键触发后，当前界面完成“显示输出面板（Win/Linux 为 Ctrl+Shift+U）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Shift+Cmd+V",
      "en": "Open Markdown Preview",
      "zh": "打开 Markdown 预览（Win/Linux 为 Ctrl+Shift+V）",
      "id": "dc352fa93f28cfbe",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Open Markdown Preview）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "打开 Markdown 预览（Win/Linux 为 Ctrl+Shift+V）",
        "Open Markdown Preview",
        "Shift+Cmd+V"
      ],
      "examples": [
        {
          "value": "按 Shift+Cmd+V",
          "description": "打开 Markdown 预览（Win/Linux 为 Ctrl+Shift+V）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Open Markdown Preview）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要打开 Markdown 预览（Win/Linux 为 Ctrl+Shift+V），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Shift+Cmd+V”打开 Markdown 预览（Win/Linux 为 Ctrl+Shift+V）。",
          "expected": "快捷键触发后，当前界面完成“打开 Markdown 预览（Win/Linux 为 Ctrl+Shift+V）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+K V",
      "en": "Open Markdown Preview to the Side",
      "zh": "在侧边打开 Markdown 预览（Win/Linux 为 Ctrl+K V）",
      "id": "7e6caec7dfe13165",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Open Markdown Preview to the Side）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "在侧边打开 Markdown 预览（Win/Linux 为 Ctrl+K V）",
        "Open Markdown Preview to the Side",
        "Cmd+K"
      ],
      "examples": [
        {
          "value": "按 Cmd+K V",
          "description": "在侧边打开 Markdown 预览（Win/Linux 为 Ctrl+K V）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Open Markdown Preview to the Side）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要在侧边打开 Markdown 预览（Win/Linux 为 Ctrl+K V），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+K V”在侧边打开 Markdown 预览（Win/Linux 为 Ctrl+K V）。",
          "expected": "快捷键触发后，当前界面完成“在侧边打开 Markdown 预览（Win/Linux 为 Ctrl+K V）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+K Z",
      "en": "Zen Mode",
      "zh": "进入专注模式（禅模式），按 Esc Esc 退出（Win/Linux 为 Ctrl+K Z）",
      "id": "04566e8b74f48a7d",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Zen Mode）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "进入专注模式（禅模式），按 Esc Esc 退出（Win/Linux 为 Ctrl+K Z）",
        "Zen Mode",
        "Cmd+K"
      ],
      "examples": [
        {
          "value": "按 Cmd+K Z",
          "description": "进入专注模式（禅模式），按 Esc Esc 退出（Win/Linux 为 Ctrl+K Z）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Zen Mode）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要进入专注模式（禅模式），按 Esc Esc 退出（Win/Linux 为 Ctrl+K Z），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+K Z”进入专注模式（禅模式），按 Esc Esc 退出（Win/Linux 为 Ctrl+K Z）。",
          "expected": "快捷键触发后，当前界面完成“进入专注模式（禅模式），按 Esc Esc 退出（Win/Linux 为 Ctrl+K Z）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "F9",
      "en": "Toggle Breakpoint",
      "zh": "在当前行切换断点（Win/Linux 相同）",
      "id": "83f747478352cf6e",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Toggle Breakpoint）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "在当前行切换断点（Win/Linux 相同）",
        "Toggle Breakpoint",
        "F9"
      ],
      "examples": [
        {
          "value": "按 F9",
          "description": "在当前行切换断点（Win/Linux 相同）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Toggle Breakpoint）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要在当前行切换断点（Win/Linux 相同），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 F9”在当前行切换断点（Win/Linux 相同）。",
          "expected": "快捷键触发后，当前界面完成“在当前行切换断点（Win/Linux 相同）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "F5",
      "en": "Start / Continue",
      "zh": "启动调试或继续执行到下一个断点（Win/Linux 相同）",
      "id": "ea3af4d9c4c3ba1b",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Start / Continue）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "启动调试或继续执行到下一个断点（Win/Linux 相同）",
        "Start / Continue",
        "F5"
      ],
      "examples": [
        {
          "value": "按 F5",
          "description": "启动调试或继续执行到下一个断点（Win/Linux 相同）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Start / Continue）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要启动调试或继续执行到下一个断点（Win/Linux 相同），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 F5”启动调试或继续执行到下一个断点（Win/Linux 相同）。",
          "expected": "快捷键触发后，当前界面完成“启动调试或继续执行到下一个断点（Win/Linux 相同）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Shift+F5",
      "en": "Stop",
      "zh": "停止调试会话（Win/Linux 相同）",
      "id": "0e8e1d616adc0c3b",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Stop）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "会话",
        "恢复会话",
        "历史会话",
        "停止调试会话（Win/Linux 相同）",
        "Stop",
        "Shift+F5"
      ],
      "examples": [
        {
          "value": "按 Shift+F5",
          "description": "停止调试会话（Win/Linux 相同）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Stop）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要停止调试会话（Win/Linux 相同），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Shift+F5”停止调试会话（Win/Linux 相同）。",
          "expected": "快捷键触发后，当前界面完成“停止调试会话（Win/Linux 相同）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "F11",
      "en": "Step Into",
      "zh": "单步进入——进入当前行调用的函数内部（Win/Linux 相同）",
      "id": "a9b31c859caeed54",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Step Into）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "单步进入——进入当前行调用的函数内部（Win/Linux 相同）",
        "Step Into",
        "F11"
      ],
      "examples": [
        {
          "value": "按 F11",
          "description": "单步进入——进入当前行调用的函数内部（Win/Linux 相同）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Step Into）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要单步进入——进入当前行调用的函数内部（Win/Linux 相同），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 F11”单步进入——进入当前行调用的函数内部（Win/Linux 相同）。",
          "expected": "快捷键触发后，当前界面完成“单步进入——进入当前行调用的函数内部（Win/Linux 相同）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Shift+F11",
      "en": "Step Out",
      "zh": "跳出当前函数，返回调用处（Win/Linux 相同）",
      "id": "94009f13b7b6c6dc",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Step Out）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "跳出当前函数，返回调用处（Win/Linux 相同）",
        "Step Out",
        "Shift+F11"
      ],
      "examples": [
        {
          "value": "按 Shift+F11",
          "description": "跳出当前函数，返回调用处（Win/Linux 相同）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Step Out）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要跳出当前函数，返回调用处（Win/Linux 相同），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Shift+F11”跳出当前函数，返回调用处（Win/Linux 相同）。",
          "expected": "快捷键触发后，当前界面完成“跳出当前函数，返回调用处（Win/Linux 相同）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "F10",
      "en": "Step Over",
      "zh": "单步跳过——执行当前行但不进入函数内部（Win/Linux 相同）",
      "id": "bc4ffd0aa5325dfb",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Step Over）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "单步跳过——执行当前行但不进入函数内部（Win/Linux 相同）",
        "Step Over",
        "F10"
      ],
      "examples": [
        {
          "value": "按 F10",
          "description": "单步跳过——执行当前行但不进入函数内部（Win/Linux 相同）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Step Over）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要单步跳过——执行当前行但不进入函数内部（Win/Linux 相同），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 F10”单步跳过——执行当前行但不进入函数内部（Win/Linux 相同）。",
          "expected": "快捷键触发后，当前界面完成“单步跳过——执行当前行但不进入函数内部（Win/Linux 相同）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+K Cmd+I",
      "en": "Show Hover",
      "zh": "显示当前符号的悬停提示（调试时查看变量值）（Win/Linux 为 Ctrl+K Ctrl+I）",
      "id": "f1dd016536d1c2c3",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Show Hover）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "显示当前符号的悬停提示（调试时查看变量值）（Win/Linux 为 Ctrl+K Ctrl+I）",
        "Show Hover",
        "Cmd+K"
      ],
      "examples": [
        {
          "value": "按 Cmd+K Cmd+I",
          "description": "显示当前符号的悬停提示（调试时查看变量值）（Win/Linux 为 Ctrl+K Ctrl+I）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Show Hover）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要显示当前符号的悬停提示（调试时查看变量值）（Win/Linux 为 Ctrl+K Ctrl+I），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+K Cmd+I”显示当前符号的悬停提示（调试时查看变量值）（Win/Linux 为 Ctrl+K Ctrl+I）。",
          "expected": "快捷键触发后，当前界面完成“显示当前符号的悬停提示（调试时查看变量值）（Win/Linux 为 Ctrl+K Ctrl+I）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl+`",
      "en": "Show Integrated Terminal",
      "zh": "显示/隐藏集成终端（Win/Linux 为 Ctrl+`）",
      "id": "b9f6d7261038686e",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Show Integrated Terminal）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "显示/隐藏集成终端（Win/Linux 为 Ctrl+`）",
        "Show Integrated Terminal",
        "Ctrl+`"
      ],
      "examples": [
        {
          "value": "按 Ctrl+`",
          "description": "显示/隐藏集成终端（Win/Linux 为 Ctrl+`）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Show Integrated Terminal）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要显示/隐藏集成终端（Win/Linux 为 Ctrl+`），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Ctrl+`”显示/隐藏集成终端（Win/Linux 为 Ctrl+`）。",
          "expected": "快捷键触发后，当前界面完成“显示/隐藏集成终端（Win/Linux 为 Ctrl+`）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl+Shift+`",
      "en": "Create New Terminal",
      "zh": "新建一个终端实例（Win/Linux 相同）",
      "id": "9c2d26304c0c25eb",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Create New Terminal）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "创建",
        "新建",
        "初始化",
        "新建一个终端实例（Win/Linux 相同）",
        "Create New Terminal",
        "Ctrl+Shift+`"
      ],
      "examples": [
        {
          "value": "按 Ctrl+Shift+`",
          "description": "新建一个终端实例（Win/Linux 相同）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Create New Terminal）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要新建一个终端实例（Win/Linux 相同），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Ctrl+Shift+`”新建一个终端实例（Win/Linux 相同）。",
          "expected": "快捷键触发后，当前界面完成“新建一个终端实例（Win/Linux 相同）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+Up",
      "en": "Scroll to Top",
      "zh": "终端中滚动到顶部（Win/Linux 为 Ctrl+Home）",
      "context": "集成终端",
      "id": "64197879a5b27e78",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Scroll to Top）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "终端中滚动到顶部（Win/Linux 为 Ctrl+Home）",
        "Scroll to Top",
        "Cmd+Up"
      ],
      "examples": [
        {
          "value": "按 Cmd+Up（集成终端）",
          "description": "集成终端：终端中滚动到顶部（Win/Linux 为 Ctrl+Home）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Scroll to Top）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在集成终端场景中需要集成终端：终端中滚动到顶部（Win/Linux 为 Ctrl+Home），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+Up（集成终端）”终端中滚动到顶部（Win/Linux 为 Ctrl+Home）。",
          "expected": "快捷键触发后，当前界面完成“集成终端：终端中滚动到顶部（Win/Linux 为 Ctrl+Home）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+Down",
      "en": "Scroll to Bottom",
      "zh": "终端中滚动到底部（Win/Linux 为 Ctrl+End）",
      "context": "集成终端",
      "id": "22651f5eeca2b75d",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Scroll to Bottom）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "终端中滚动到底部（Win/Linux 为 Ctrl+End）",
        "Scroll to Bottom",
        "Cmd+Down"
      ],
      "examples": [
        {
          "value": "按 Cmd+Down（集成终端）",
          "description": "集成终端：终端中滚动到底部（Win/Linux 为 Ctrl+End）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Scroll to Bottom）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在集成终端场景中需要集成终端：终端中滚动到底部（Win/Linux 为 Ctrl+End），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+Down（集成终端）”终端中滚动到底部（Win/Linux 为 Ctrl+End）。",
          "expected": "快捷键触发后，当前界面完成“集成终端：终端中滚动到底部（Win/Linux 为 Ctrl+End）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+Home",
      "en": "Scroll to Top (Terminal)",
      "zh": "终端中滚动到顶部（Win/Linux 为 Ctrl+Home）",
      "id": "6931c6f3c36e992c",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Scroll to Top (Terminal)）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "终端中滚动到顶部（Win/Linux 为 Ctrl+Home）",
        "Scroll to Top (Terminal)",
        "Cmd+Home"
      ],
      "examples": [
        {
          "value": "按 Cmd+Home",
          "description": "终端中滚动到顶部（Win/Linux 为 Ctrl+Home）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Scroll to Top (Terminal)）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要终端中滚动到顶部（Win/Linux 为 Ctrl+Home），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+Home”终端中滚动到顶部（Win/Linux 为 Ctrl+Home）。",
          "expected": "快捷键触发后，当前界面完成“终端中滚动到顶部（Win/Linux 为 Ctrl+Home）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+End",
      "en": "Scroll to Bottom (Terminal)",
      "zh": "终端中滚动到底部（Win/Linux 为 Ctrl+End）",
      "id": "95c41cebad6b6622",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "vscode-keybindings",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 Default Keyboard Shortcuts（页面内检索 Scroll to Bottom (Terminal)）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "终端中滚动到底部（Win/Linux 为 Ctrl+End）",
        "Scroll to Bottom (Terminal)",
        "Cmd+End"
      ],
      "examples": [
        {
          "value": "按 Cmd+End",
          "description": "终端中滚动到底部（Win/Linux 为 Ctrl+End）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "vscode-keybindings",
              "locator": "官方 Default Keyboard Shortcuts（页面内检索 Scroll to Bottom (Terminal)）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在VS Code中需要终端中滚动到底部（Win/Linux 为 Ctrl+End），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+End”终端中滚动到底部（Win/Linux 为 Ctrl+End）。",
          "expected": "快捷键触发后，当前界面完成“终端中滚动到底部（Win/Linux 为 Ctrl+End）”对应的动作。"
        }
      ]
    }
  ]
};
