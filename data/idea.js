// Generated from validated structured data. Manual edits must follow data/SCHEMA.md.
window.CHEATSHEET_DATA = window.CHEATSHEET_DATA || {};
window.CHEATSHEET_DATA["idea"] = {
  "meta": {
    "id": "idea",
    "name": "IntelliJ IDEA",
    "color": "#F59E0B",
    "source": "第一方来源与确定性官方入口清单，核验于 2026-07-14",
    "sourceUrl": "https://www.jetbrains.com/help/idea/mastering-keyboard-shortcuts.html",
    "updatedAt": "2026-06-20",
    "contentCheckedAt": "2026-06-20",
    "sourceCheckedAt": "2026-06-21",
    "updatePolicy": "manual-only",
    "verificationStatus": "manual",
    "coverage": "官方入口全集；精确范围、组件与平台限制见 shared/official-inventories/idea.json",
    "platforms": [
      "mac",
      "windows",
      "linux"
    ],
    "builtIn": true,
    "order": 6,
    "sources": [
      {
        "id": "idea-macos-keymap",
        "title": "IntelliJ IDEA predefined macOS keymap",
        "url": "https://www.jetbrains.com/help/idea/reference-keymap-mac-default.html",
        "kind": "official-doc",
        "maintainer": "JetBrains",
        "evidenceTier": "first-party",
        "lastVerifiedAt": "2026-06-21",
        "resolvedUrl": "https://www.jetbrains.com/help/idea/reference-keymap-mac-default.html",
        "pageTitle": "IntelliJ IDEA predefined macOS keymap",
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
      "total": 85,
      "covered": 85,
      "checkedAt": "2026-07-13",
      "sourceIds": [
        "idea-macos-keymap"
      ],
      "inventoryHash": "sha256:9b15be35d2e5afa8209c42f6d6286ef0507dd2db7e8a43032faafb5aa55066fb"
    }
  },
  "items": [
    {
      "cat": "shortcut",
      "cmd": "Double Shift",
      "en": "Search Everywhere",
      "zh": "全局搜索——文件名、类、方法、IDE 动作均可（最常用入口）（Win/Linux 相同）",
      "id": "f66de581bb5e043e",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Search Everywhere）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "搜索",
        "查找",
        "定位",
        "全局搜索——文件名、类、方法、IDE 动作均可（最常用入口）（Win/Linux 相同）",
        "Search Everywhere",
        "Double"
      ],
      "examples": [
        {
          "value": "连续按两次 Shift，输入类名、文件名或动作名称",
          "description": "从一个入口搜索整个项目和 IDE 功能",
          "copyable": false,
          "scenario": "在实际工作中需要全局搜索——文件名、类、方法、IDE 动作均可（最常用入口）（Win/Linux 相同）时",
          "goal": "全局搜索——文件名、类、方法、IDE 动作均可（最常用入口）（Win/Linux 相同）",
          "expected": "操作后，工具完成“从一个入口搜索整个项目和 IDE 功能”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "idea-macos-keymap"
          ],
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Search Everywhere）",
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
      "cmd": "Cmd+Shift+A",
      "platformCmds": {
        "mac": "Cmd+Shift+A",
        "windows": "Ctrl+Shift+A",
        "linux": "Ctrl+Shift+A"
      },
      "en": "Find Action",
      "zh": "搜索 IDE 命令/动作，相当于命令面板（Win/Linux 为 Ctrl+Shift+A）",
      "id": "b8a52256055d7e6c",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Find Action）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "搜索",
        "查找",
        "定位",
        "搜索 IDE 命令/动作，相当于命令面板（Win/Linux 为 Ctrl+Shift+A）",
        "Find Action",
        "Cmd+Shift+A"
      ],
      "examples": [
        {
          "value": "按 Cmd+Shift+A（Win/Linux 为 Ctrl+Shift+A），输入“Reformat Code”",
          "description": "搜索并执行 IDE 动作",
          "copyable": false,
          "scenario": "在实际工作中需要搜索 IDE 命令/动作，相当于命令面板（Win/Linux 为 Ctrl+Shift+A）时",
          "goal": "搜索 IDE 命令/动作，相当于命令面板（Win/Linux 为 Ctrl+Shift+A）",
          "expected": "操作后，工具完成“搜索并执行 IDE 动作”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "idea-macos-keymap"
          ],
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Find Action）",
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
      "platformCmds": {
        "mac": "Cmd+O",
        "windows": "Ctrl+N",
        "linux": "Ctrl+N"
      },
      "en": "Go to Class",
      "zh": "按名称跳转到类（支持驼峰缩写模糊搜索）（Win/Linux 为 Ctrl+N）",
      "id": "e0de086af6d8d9ab",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Go to Class）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "搜索",
        "查找",
        "定位",
        "按名称跳转到类（支持驼峰缩写模糊搜索）（Win/Linux 为 Ctrl+N）",
        "Go to Class",
        "Cmd+O"
      ],
      "examples": [
        {
          "value": "按 Cmd+O（Win/Linux 为 Ctrl+N），输入类名",
          "description": "按名称快速跳转到类",
          "copyable": false,
          "scenario": "在实际工作中需要按名称跳转到类（支持驼峰缩写模糊搜索）（Win/Linux 为 Ctrl+N）时",
          "goal": "按名称跳转到类（支持驼峰缩写模糊搜索）（Win/Linux 为 Ctrl+N）",
          "expected": "操作后，工具完成“按名称快速跳转到类”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "idea-macos-keymap"
          ],
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Go to Class）",
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
      "platformCmds": {
        "mac": "Cmd+Shift+O",
        "windows": "Ctrl+Shift+N",
        "linux": "Ctrl+Shift+N"
      },
      "en": "Go to File",
      "zh": "按名称跳转到任意文件（Win/Linux 为 Ctrl+Shift+N）",
      "id": "7604f7e82403e01b",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Go to File）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "按名称跳转到任意文件（Win/Linux 为 Ctrl+Shift+N）",
        "Go to File",
        "Cmd+Shift+O"
      ],
      "examples": [
        {
          "value": "按 Cmd+Shift+O",
          "description": "按名称跳转到任意文件（Win/Linux 为 Ctrl+Shift+N）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platformValues": {
            "mac": "按 Cmd+Shift+O",
            "windows": "按 Ctrl+Shift+N",
            "linux": "按 Ctrl+Shift+N"
          },
          "scenario": "在实际工作中需要按名称跳转到任意文件（Win/Linux 为 Ctrl+Shift+N）时",
          "goal": "按名称跳转到任意文件（Win/Linux 为 Ctrl+Shift+N）",
          "expected": "操作后，工具完成“按名称跳转到任意文件（Win/Linux 为 Ctrl+Shift+N）”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Go to File）",
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
      "cmd": "Cmd+Alt+O",
      "platformCmds": {
        "mac": "Cmd+Alt+O",
        "windows": "Ctrl+Alt+Shift+N",
        "linux": "Ctrl+Alt+Shift+N"
      },
      "en": "Go to Symbol",
      "zh": "跳转到任意符号（方法、变量、字段等）（Win/Linux 为 Ctrl+Alt+Shift+N）",
      "id": "d68a430765aa9b63",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Go to Symbol）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "跳转到任意符号（方法、变量、字段等）（Win/Linux 为 Ctrl+Alt+Shift+N）",
        "Go to Symbol",
        "Cmd+Alt+O"
      ],
      "examples": [
        {
          "value": "按 Cmd+Alt+O",
          "description": "跳转到任意符号（方法、变量、字段等）（Win/Linux 为 Ctrl+Alt+Shift+N）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platformValues": {
            "mac": "按 Cmd+Alt+O",
            "windows": "按 Ctrl+Alt+Shift+N",
            "linux": "按 Ctrl+Alt+Shift+N"
          },
          "scenario": "在实际工作中需要跳转到任意符号（方法、变量、字段等）（Win/Linux 为 Ctrl+Alt+Shift+N）时",
          "goal": "跳转到任意符号（方法、变量、字段等）（Win/Linux 为 Ctrl+Alt+Shift+N）",
          "expected": "操作后，工具完成“跳转到任意符号（方法、变量、字段等）（Win/Linux 为 Ctrl+Alt+Shift+N）”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Go to Symbol）",
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
      "cmd": "Cmd+E",
      "platformCmds": {
        "mac": "Cmd+E",
        "windows": "Ctrl+E",
        "linux": "Ctrl+E"
      },
      "en": "Recent Files",
      "zh": "查看最近打开的文件列表并快速切换（Win/Linux 为 Ctrl+E）",
      "id": "d93a93c9f7f39968",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Recent Files）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "查看最近打开的文件列表并快速切换（Win/Linux 为 Ctrl+E）",
        "Recent Files",
        "Cmd+E"
      ],
      "examples": [
        {
          "value": "按 Cmd+E",
          "description": "查看最近打开的文件列表并快速切换（Win/Linux 为 Ctrl+E）",
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
          "scenario": "在实际工作中需要查看最近打开的文件列表并快速切换（Win/Linux 为 Ctrl+E）时",
          "goal": "查看最近打开的文件列表并快速切换（Win/Linux 为 Ctrl+E）",
          "expected": "操作后，工具完成“查看最近打开的文件列表并快速切换（Win/Linux 为 Ctrl+E）”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Recent Files）",
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
      "cmd": "Cmd+Shift+E",
      "en": "Recent Locations",
      "zh": "查看最近浏览过的代码位置（Win/Linux 为 Ctrl+Shift+E）",
      "id": "844f63ade2800218",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Recent Locations）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "查看最近浏览过的代码位置（Win/Linux 为 Ctrl+Shift+E）",
        "Recent Locations",
        "Cmd+Shift+E"
      ],
      "examples": [
        {
          "value": "按 Cmd+Shift+E",
          "description": "查看最近浏览过的代码位置（Win/Linux 为 Ctrl+Shift+E）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要查看最近浏览过的代码位置（Win/Linux 为 Ctrl+Shift+E）时",
          "goal": "查看最近浏览过的代码位置（Win/Linux 为 Ctrl+Shift+E）",
          "expected": "操作后，工具完成“查看最近浏览过的代码位置（Win/Linux 为 Ctrl+Shift+E）”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Recent Locations）",
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
      "cmd": "Ctrl+Tab",
      "en": "Switcher",
      "zh": "快速切换打开的文件和工具窗口（Win/Linux 相同）",
      "id": "b69c64f864e5810c",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Switcher）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "快速切换打开的文件和工具窗口（Win/Linux 相同）",
        "Switcher",
        "Ctrl+Tab"
      ],
      "examples": [
        {
          "value": "按 Ctrl+Tab",
          "description": "快速切换打开的文件和工具窗口（Win/Linux 相同）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要快速切换打开的文件和工具窗口（Win/Linux 相同）时",
          "goal": "快速切换打开的文件和工具窗口（Win/Linux 相同）",
          "expected": "操作后，工具完成“快速切换打开的文件和工具窗口（Win/Linux 相同）”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Switcher）",
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
      "cmd": "Cmd+B",
      "en": "Go to Declaration or Usages",
      "zh": "跳转到声明处；已在声明处时则查找所有引用（Win/Linux 为 Ctrl+B）",
      "id": "704bbc01bd8a9b42",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Go to Declaration or Usages）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "搜索",
        "查找",
        "定位",
        "跳转到声明处；已在声明处时则查找所有引用（Win/Linux 为 Ctrl+B）",
        "Go to Declaration or Usages",
        "Cmd+B"
      ],
      "examples": [
        {
          "value": "把光标放在方法调用上，按 Cmd/Ctrl+B",
          "description": "跳转到方法或变量的声明位置",
          "copyable": false,
          "scenario": "在实际工作中需要跳转到声明处；已在声明处时则查找所有引用（Win/Linux 为 Ctrl+B）时",
          "goal": "跳转到声明处；已在声明处时则查找所有引用（Win/Linux 为 Ctrl+B）",
          "expected": "操作后，工具完成“跳转到方法或变量的声明位置”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "idea-macos-keymap"
          ],
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Go to Declaration or Usages）",
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
      "cmd": "Cmd+Alt+B",
      "en": "Go to Implementations",
      "zh": "跳转到接口/抽象方法的具体实现类或方法（Win/Linux 为 Ctrl+Alt+B）",
      "id": "70c6c150ad6bf51d",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Go to Implementations）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "跳转到接口/抽象方法的具体实现类或方法（Win/Linux 为 Ctrl+Alt+B）",
        "Go to Implementations",
        "Cmd+Alt+B"
      ],
      "examples": [
        {
          "value": "按 Cmd+Alt+B",
          "description": "跳转到接口/抽象方法的具体实现类或方法（Win/Linux 为 Ctrl+Alt+B）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要跳转到接口/抽象方法的具体实现类或方法（Win/Linux 为 Ctrl+Alt+B）时",
          "goal": "跳转到接口/抽象方法的具体实现类或方法（Win/Linux 为 Ctrl+Alt+B）",
          "expected": "操作后，工具完成“跳转到接口/抽象方法的具体实现类或方法（Win/Linux 为 Ctrl+Alt+B）”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Go to Implementations）",
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
      "cmd": "Cmd+U",
      "en": "Go to Super Method/Class",
      "zh": "跳转到父类方法或父接口（Win/Linux 为 Ctrl+U）",
      "id": "d3bf3ce60e7b0b65",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Go to Super Method/Class）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "跳转到父类方法或父接口（Win/Linux 为 Ctrl+U）",
        "Go to Super Method/Class",
        "Cmd+U"
      ],
      "examples": [
        {
          "value": "按 Cmd+U",
          "description": "跳转到父类方法或父接口（Win/Linux 为 Ctrl+U）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要跳转到父类方法或父接口（Win/Linux 为 Ctrl+U）时",
          "goal": "跳转到父类方法或父接口（Win/Linux 为 Ctrl+U）",
          "expected": "操作后，工具完成“跳转到父类方法或父接口（Win/Linux 为 Ctrl+U）”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Go to Super Method/Class）",
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
      "cmd": "Ctrl+H",
      "en": "Type Hierarchy",
      "zh": "查看当前类的继承层级树（Win/Linux 相同）",
      "id": "d3087546a7ba9669",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Type Hierarchy）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "查看当前类的继承层级树（Win/Linux 相同）",
        "Type Hierarchy",
        "Ctrl+H"
      ],
      "examples": [
        {
          "value": "按 Ctrl+H",
          "description": "查看当前类的继承层级树（Win/Linux 相同）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "scenario": "在实际工作中需要查看当前类的继承层级树（Win/Linux 相同）时",
          "goal": "查看当前类的继承层级树（Win/Linux 相同）",
          "expected": "操作后，工具完成“查看当前类的继承层级树（Win/Linux 相同）”对应的行为；条件不满足时返回错误。",
          "caveat": "快捷键可能受操作系统、键位方案或终端设置影响",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Type Hierarchy）",
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
      "cmd": "Alt+F7",
      "en": "Find Usages",
      "zh": "查找当前符号在整个项目中的所有使用位置（Win/Linux 相同）",
      "id": "708944deb23dd3f1",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Find Usages）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "搜索",
        "查找",
        "定位",
        "查找当前符号在整个项目中的所有使用位置（Win/Linux 相同）",
        "Find Usages",
        "Alt+F7"
      ],
      "examples": [
        {
          "value": "把光标放在符号上按 Alt+F7",
          "description": "查找该符号在整个项目中的使用位置",
          "copyable": false,
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "idea-macos-keymap"
          ],
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Find Usages）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要查找该符号在整个项目中的使用位置，希望直接通过键盘完成该操作时。",
          "goal": "使用“把光标放在符号上按 Alt+F7”查找当前符号在整个项目中的所有使用位置（Win/Linux 相同）。",
          "expected": "快捷键触发后，当前界面完成“查找该符号在整个项目中的使用位置”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+F7",
      "en": "Highlight Usages in File",
      "zh": "高亮当前符号在本文件中的所有引用（Win/Linux 为 Ctrl+F7）",
      "id": "2e690e6d187b5207",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Highlight Usages in File）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "高亮当前符号在本文件中的所有引用（Win/Linux 为 Ctrl+F7）",
        "Highlight Usages in File",
        "Cmd+F7"
      ],
      "examples": [
        {
          "value": "按 Cmd+F7",
          "description": "高亮当前符号在本文件中的所有引用（Win/Linux 为 Ctrl+F7）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Highlight Usages in File）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要高亮当前符号在本文件中的所有引用（Win/Linux 为 Ctrl+F7），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+F7”高亮当前符号在本文件中的所有引用（Win/Linux 为 Ctrl+F7）。",
          "expected": "快捷键触发后，当前界面完成“高亮当前符号在本文件中的所有引用（Win/Linux 为 Ctrl+F7）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+F12",
      "en": "File Structure Popup",
      "zh": "弹出当前文件的成员列表（方法、字段），可快速跳转（Win/Linux 为 Ctrl+F12）",
      "id": "16a1fb89a84d8611",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 File Structure Popup）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "弹出当前文件的成员列表（方法、字段），可快速跳转（Win/Linux 为 Ctrl+F12）",
        "File Structure Popup",
        "Cmd+F12"
      ],
      "examples": [
        {
          "value": "按 Cmd+F12",
          "description": "弹出当前文件的成员列表（方法、字段），可快速跳转（Win/Linux 为 Ctrl+F12）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 File Structure Popup）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要弹出当前文件的成员列表（方法、字段），可快速跳转（Win/Linux 为 Ctrl+F12），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+F12”弹出当前文件的成员列表（方法、字段），可快速跳转（Win/Linux 为 Ctrl+F12）。",
          "expected": "快捷键触发后，当前界面完成“弹出当前文件的成员列表（方法、字段），可快速跳转（Win/Linux 为 Ctrl+F12）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+[",
      "en": "Navigate Back",
      "zh": "返回上一个光标位置（跨文件）（Win/Linux 为 Ctrl+Alt+Left）",
      "id": "8c73f2dd09a47a5b",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Navigate Back）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "返回上一个光标位置（跨文件）（Win/Linux 为 Ctrl+Alt+Left）",
        "Navigate Back",
        "Cmd+["
      ],
      "examples": [
        {
          "value": "按 Cmd+[",
          "description": "返回上一个光标位置（跨文件）（Win/Linux 为 Ctrl+Alt+Left）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Navigate Back）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要返回上一个光标位置（跨文件）（Win/Linux 为 Ctrl+Alt+Left），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+[”返回上一个光标位置（跨文件）（Win/Linux 为 Ctrl+Alt+Left）。",
          "expected": "快捷键触发后，当前界面完成“返回上一个光标位置（跨文件）（Win/Linux 为 Ctrl+Alt+Left）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+]",
      "en": "Navigate Forward",
      "zh": "前进到下一个光标位置（Win/Linux 为 Ctrl+Alt+Right）",
      "id": "484bdeb4ceb0b1e7",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Navigate Forward）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "前进到下一个光标位置（Win/Linux 为 Ctrl+Alt+Right）",
        "Navigate Forward",
        "Cmd+]"
      ],
      "examples": [
        {
          "value": "按 Cmd+]",
          "description": "前进到下一个光标位置（Win/Linux 为 Ctrl+Alt+Right）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Navigate Forward）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要前进到下一个光标位置（Win/Linux 为 Ctrl+Alt+Right），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+]”前进到下一个光标位置（Win/Linux 为 Ctrl+Alt+Right）。",
          "expected": "快捷键触发后，当前界面完成“前进到下一个光标位置（Win/Linux 为 Ctrl+Alt+Right）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "F2",
      "en": "Next Highlighted Error/Warning",
      "zh": "跳到当前文件下一个错误或警告（Win/Linux 相同）",
      "id": "f6625557c1512118",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Next Highlighted Error/Warning）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "跳到当前文件下一个错误或警告（Win/Linux 相同）",
        "Next Highlighted Error/Warning",
        "F2"
      ],
      "examples": [
        {
          "value": "按 F2",
          "description": "跳到当前文件下一个错误或警告（Win/Linux 相同）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Next Highlighted Error/Warning）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要跳到当前文件下一个错误或警告（Win/Linux 相同），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 F2”跳到当前文件下一个错误或警告（Win/Linux 相同）。",
          "expected": "快捷键触发后，当前界面完成“跳到当前文件下一个错误或警告（Win/Linux 相同）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Shift+F2",
      "en": "Previous Highlighted Error/Warning",
      "zh": "跳到当前文件上一个错误或警告（Win/Linux 相同）",
      "id": "ffc146cb09905a40",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Previous Highlighted Error/Warning）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "跳到当前文件上一个错误或警告（Win/Linux 相同）",
        "Previous Highlighted Error/Warning",
        "Shift+F2"
      ],
      "examples": [
        {
          "value": "按 Shift+F2",
          "description": "跳到当前文件上一个错误或警告（Win/Linux 相同）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Previous Highlighted Error/Warning）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要跳到当前文件上一个错误或警告（Win/Linux 相同），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Shift+F2”跳到当前文件上一个错误或警告（Win/Linux 相同）。",
          "expected": "快捷键触发后，当前界面完成“跳到当前文件上一个错误或警告（Win/Linux 相同）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Alt+F1",
      "en": "Select In...",
      "zh": "在各工具窗口/文件树中定位当前文件（Win/Linux 相同）",
      "id": "05cc0a1d06598c33",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Select In...）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "在各工具窗口/文件树中定位当前文件（Win/Linux 相同）",
        "Select In...",
        "Alt+F1"
      ],
      "examples": [
        {
          "value": "按 Alt+F1",
          "description": "在各工具窗口/文件树中定位当前文件（Win/Linux 相同）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Select In...）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要在各工具窗口/文件树中定位当前文件（Win/Linux 相同），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Alt+F1”在各工具窗口/文件树中定位当前文件（Win/Linux 相同）。",
          "expected": "快捷键触发后，当前界面完成“在各工具窗口/文件树中定位当前文件（Win/Linux 相同）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl+Space",
      "en": "Basic Code Completion",
      "zh": "触发基础代码补全（Win/Linux 相同）",
      "id": "d2dc3f3dfde09a91",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Basic Code Completion）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "触发基础代码补全（Win/Linux 相同）",
        "Basic Code Completion",
        "Ctrl+Space"
      ],
      "examples": [
        {
          "value": "按 Ctrl+Space",
          "description": "触发基础代码补全（Win/Linux 相同）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Basic Code Completion）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要触发基础代码补全（Win/Linux 相同），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Ctrl+Space”触发基础代码补全（Win/Linux 相同）。",
          "expected": "快捷键触发后，当前界面完成“触发基础代码补全（Win/Linux 相同）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl+Shift+Space",
      "en": "Smart Type Completion",
      "zh": "按预期类型过滤的智能代码补全（Win/Linux 相同）",
      "id": "c952dbd583c53742",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Smart Type Completion）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "按预期类型过滤的智能代码补全（Win/Linux 相同）",
        "Smart Type Completion",
        "Ctrl+Shift+Space"
      ],
      "examples": [
        {
          "value": "按 Ctrl+Shift+Space",
          "description": "按预期类型过滤的智能代码补全（Win/Linux 相同）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Smart Type Completion）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要按预期类型过滤的智能代码补全（Win/Linux 相同），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Ctrl+Shift+Space”按预期类型过滤的智能代码补全（Win/Linux 相同）。",
          "expected": "快捷键触发后，当前界面完成“按预期类型过滤的智能代码补全（Win/Linux 相同）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+Shift+Enter",
      "en": "Complete Current Statement",
      "zh": "补全当前语句——自动加分号、括号并换行到下一行（Win/Linux 为 Ctrl+Shift+Enter）",
      "id": "f616cf8457cf5db6",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Complete Current Statement）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "补全当前语句——自动加分号、括号并换行到下一行（Win/Linux 为 Ctrl+Shift+Enter）",
        "Complete Current Statement",
        "Cmd+Shift+Enter"
      ],
      "examples": [
        {
          "value": "按 Cmd+Shift+Enter",
          "description": "补全当前语句——自动加分号、括号并换行到下一行（Win/Linux 为 Ctrl+Shift+Enter）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Complete Current Statement）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要补全当前语句——自动加分号、括号并换行到下一行（Win/Linux 为 Ctrl+Shift+Enter），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+Shift+Enter”补全当前语句——自动加分号、括号并换行到下一行（Win/Linux 为 Ctrl+Shift+Enter）。",
          "expected": "快捷键触发后，当前界面完成“补全当前语句——自动加分号、括号并换行到下一行（Win/Linux 为 Ctrl+Shift+Enter）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+P",
      "en": "Parameter Info",
      "zh": "弹出当前方法调用的参数签名提示（Win/Linux 为 Ctrl+P）",
      "id": "03c6eac8aab0541c",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Parameter Info）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "弹出当前方法调用的参数签名提示（Win/Linux 为 Ctrl+P）",
        "Parameter Info",
        "Cmd+P"
      ],
      "examples": [
        {
          "value": "按 Cmd+P",
          "description": "弹出当前方法调用的参数签名提示（Win/Linux 为 Ctrl+P）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Parameter Info）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要弹出当前方法调用的参数签名提示（Win/Linux 为 Ctrl+P），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+P”弹出当前方法调用的参数签名提示（Win/Linux 为 Ctrl+P）。",
          "expected": "快捷键触发后，当前界面完成“弹出当前方法调用的参数签名提示（Win/Linux 为 Ctrl+P）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl+J",
      "en": "Insert Live Template",
      "zh": "插入预定义代码片段（Live Template）（Win/Linux 相同）",
      "id": "5de6331c361575ef",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Insert Live Template）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "插入预定义代码片段（Live Template）（Win/Linux 相同）",
        "Insert Live Template",
        "Ctrl+J"
      ],
      "examples": [
        {
          "value": "按 Ctrl+J",
          "description": "插入预定义代码片段（Live Template）（Win/Linux 相同）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Insert Live Template）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要插入预定义代码片段（Live Template）（Win/Linux 相同），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Ctrl+J”插入预定义代码片段（Live Template）（Win/Linux 相同）。",
          "expected": "快捷键触发后，当前界面完成“插入预定义代码片段（Live Template）（Win/Linux 相同）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Alt+Enter",
      "en": "Show Intention Actions / Quick Fix",
      "zh": "显示可用的快速修复和意图动作（导入类、修改代码等）——最常用（Win/Linux 相同）",
      "id": "e19780874b2a62a8",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Show Intention Actions / Quick Fix）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "显示可用的快速修复和意图动作（导入类、修改代码等）——最常用（Win/Linux 相同）",
        "Show Intention Actions / Quick Fix",
        "Alt+Enter"
      ],
      "examples": [
        {
          "value": "把光标放在报错位置，按 Alt+Enter",
          "description": "查看可用的导入、修复和代码转换建议",
          "copyable": false,
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "idea-macos-keymap"
          ],
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Show Intention Actions / Quick Fix）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要查看可用的导入、修复和代码转换建议，希望直接通过键盘完成该操作时。",
          "goal": "使用“把光标放在报错位置，按 Alt+Enter”显示可用的快速修复和意图动作（导入类、修改代码等）——最常用（Win/Linux 相同）。",
          "expected": "快捷键触发后，当前界面完成“查看可用的导入、修复和代码转换建议”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+Q",
      "en": "Quick Documentation",
      "zh": "弹出当前符号的快速文档（不跳转到文档页）（Win/Linux 为 Ctrl+Q）",
      "id": "762e22c3ae99cb0d",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Quick Documentation）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "弹出当前符号的快速文档（不跳转到文档页）（Win/Linux 为 Ctrl+Q）",
        "Quick Documentation",
        "Cmd+Q"
      ],
      "examples": [
        {
          "value": "按 Cmd+Q",
          "description": "弹出当前符号的快速文档（不跳转到文档页）（Win/Linux 为 Ctrl+Q）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Quick Documentation）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要弹出当前符号的快速文档（不跳转到文档页）（Win/Linux 为 Ctrl+Q），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+Q”弹出当前符号的快速文档（不跳转到文档页）（Win/Linux 为 Ctrl+Q）。",
          "expected": "快捷键触发后，当前界面完成“弹出当前符号的快速文档（不跳转到文档页）（Win/Linux 为 Ctrl+Q）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+Shift+I",
      "en": "Quick Definition Lookup",
      "zh": "内联预览声明/定义，无需跳转（Win/Linux 为 Ctrl+Shift+I）",
      "id": "ee34abf277332b32",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Quick Definition Lookup）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "内联预览声明/定义，无需跳转（Win/Linux 为 Ctrl+Shift+I）",
        "Quick Definition Lookup",
        "Cmd+Shift+I"
      ],
      "examples": [
        {
          "value": "按 Cmd+Shift+I",
          "description": "内联预览声明/定义，无需跳转（Win/Linux 为 Ctrl+Shift+I）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Quick Definition Lookup）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要内联预览声明/定义，无需跳转（Win/Linux 为 Ctrl+Shift+I），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+Shift+I”内联预览声明/定义，无需跳转（Win/Linux 为 Ctrl+Shift+I）。",
          "expected": "快捷键触发后，当前界面完成“内联预览声明/定义，无需跳转（Win/Linux 为 Ctrl+Shift+I）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+F",
      "en": "Find in File",
      "zh": "在当前文件内查找（Win/Linux 为 Ctrl+F）",
      "id": "ff6c95b5fdee665b",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Find in File）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "搜索",
        "查找",
        "定位",
        "在当前文件内查找（Win/Linux 为 Ctrl+F）",
        "Find in File",
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
            "idea-macos-keymap"
          ],
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Find in File）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要在当前文件中查找匹配内容，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd/Ctrl+F，输入要查找的文本”在当前文件内查找（Win/Linux 为 Ctrl+F）。",
          "expected": "快捷键触发后，当前界面完成“在当前文件中查找匹配内容”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+R",
      "en": "Replace in File",
      "zh": "在当前文件内查找并替换（Win/Linux 为 Ctrl+R）",
      "id": "ce50b423fdc867a3",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Replace in File）",
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
        "在当前文件内查找并替换（Win/Linux 为 Ctrl+R）",
        "Replace in File"
      ],
      "examples": [
        {
          "value": "按 Cmd+R",
          "description": "在当前文件内查找并替换（Win/Linux 为 Ctrl+R）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Replace in File）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要在当前文件内查找并替换（Win/Linux 为 Ctrl+R），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+R”在当前文件内查找并替换（Win/Linux 为 Ctrl+R）。",
          "expected": "快捷键触发后，当前界面完成“在当前文件内查找并替换（Win/Linux 为 Ctrl+R）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+Shift+F",
      "en": "Find in Files (Path)",
      "zh": "在整个项目或指定目录下查找字符串（Win/Linux 为 Ctrl+Shift+F）",
      "id": "0e33f2a1ab4d760a",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Find in Files (Path)）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "搜索",
        "查找",
        "定位",
        "在整个项目或指定目录下查找字符串（Win/Linux 为 Ctrl+Shift+F）",
        "Find in Files (Path)",
        "Cmd+Shift+F"
      ],
      "examples": [
        {
          "value": "按 Cmd+Shift+F（Win/Linux 为 Ctrl+Shift+F），输入关键词",
          "description": "在整个项目中查找字符串",
          "copyable": false,
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "idea-macos-keymap"
          ],
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Find in Files (Path)）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要在整个项目中查找字符串，希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+Shift+F（Win/Linux 为 Ctrl+Shift+F），输入关键词”在整个项目或指定目录下查找字符串（Win/Linux 为 Ctrl+Shift+F）。",
          "expected": "快捷键触发后，当前界面完成“在整个项目中查找字符串”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+Shift+R",
      "en": "Replace in Files (Path)",
      "zh": "在整个项目或指定目录下替换字符串（Win/Linux 为 Ctrl+Shift+R）",
      "id": "0f2fd2c542cc1da5",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Replace in Files (Path)）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "替换",
        "取代",
        "文本替换",
        "在整个项目或指定目录下替换字符串（Win/Linux 为 Ctrl+Shift+R）",
        "Replace in Files (Path)",
        "Cmd+Shift+R"
      ],
      "examples": [
        {
          "value": "按 Cmd+Shift+R",
          "description": "在整个项目或指定目录下替换字符串（Win/Linux 为 Ctrl+Shift+R）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Replace in Files (Path)）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要在整个项目或指定目录下替换字符串（Win/Linux 为 Ctrl+Shift+R），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+Shift+R”在整个项目或指定目录下替换字符串（Win/Linux 为 Ctrl+Shift+R）。",
          "expected": "快捷键触发后，当前界面完成“在整个项目或指定目录下替换字符串（Win/Linux 为 Ctrl+Shift+R）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+F3",
      "en": "Find Next Occurrence",
      "zh": "跳到下一个搜索结果（Win/Linux 为 F3）",
      "id": "fd9701d8960e79e3",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Find Next Occurrence）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "搜索",
        "查找",
        "定位",
        "跳到下一个搜索结果（Win/Linux 为 F3）",
        "Find Next Occurrence",
        "Cmd+F3"
      ],
      "examples": [
        {
          "value": "按 Cmd+F3",
          "description": "跳到下一个搜索结果（Win/Linux 为 F3）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Find Next Occurrence）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要跳到下一个搜索结果（Win/Linux 为 F3），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+F3”跳到下一个搜索结果（Win/Linux 为 F3）。",
          "expected": "快捷键触发后，当前界面完成“跳到下一个搜索结果（Win/Linux 为 F3）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Shift+F3",
      "en": "Find Previous Occurrence",
      "zh": "跳到上一个搜索结果（Win/Linux 相同）",
      "id": "ebf3b477b77e8cc8",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Find Previous Occurrence）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "搜索",
        "查找",
        "定位",
        "跳到上一个搜索结果（Win/Linux 相同）",
        "Find Previous Occurrence",
        "Shift+F3"
      ],
      "examples": [
        {
          "value": "按 Shift+F3",
          "description": "跳到上一个搜索结果（Win/Linux 相同）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Find Previous Occurrence）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要跳到上一个搜索结果（Win/Linux 相同），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Shift+F3”跳到上一个搜索结果（Win/Linux 相同）。",
          "expected": "快捷键触发后，当前界面完成“跳到上一个搜索结果（Win/Linux 相同）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+D",
      "en": "Duplicate Line/Selection",
      "zh": "复制当前行（或选中内容）并插入到下方（Win/Linux 为 Ctrl+D）",
      "id": "05b24da5aed3cd18",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Duplicate Line/Selection）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "复制",
        "克隆",
        "拷贝",
        "复制当前行（或选中内容）并插入到下方（Win/Linux 为 Ctrl+D）",
        "Duplicate Line/Selection",
        "Cmd+D"
      ],
      "examples": [
        {
          "value": "按 Cmd+D",
          "description": "复制当前行（或选中内容）并插入到下方（Win/Linux 为 Ctrl+D）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Duplicate Line/Selection）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要复制当前行（或选中内容）并插入到下方（Win/Linux 为 Ctrl+D），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+D”复制当前行（或选中内容）并插入到下方（Win/Linux 为 Ctrl+D）。",
          "expected": "快捷键触发后，当前界面完成“复制当前行（或选中内容）并插入到下方（Win/Linux 为 Ctrl+D）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+Backspace",
      "en": "Delete Line",
      "zh": "删除当前整行（Win/Linux 为 Ctrl+Y）",
      "id": "208513013d415912",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Delete Line）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "删除",
        "移除",
        "清理",
        "删除当前整行（Win/Linux 为 Ctrl+Y）",
        "Delete Line",
        "Cmd+Backspace"
      ],
      "examples": [
        {
          "value": "按 Cmd+Backspace",
          "description": "删除当前整行（Win/Linux 为 Ctrl+Y）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Delete Line）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要删除当前整行（Win/Linux 为 Ctrl+Y），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+Backspace”删除当前整行（Win/Linux 为 Ctrl+Y）。",
          "expected": "快捷键触发后，当前界面完成“删除当前整行（Win/Linux 为 Ctrl+Y）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Alt+Shift+Up",
      "en": "Move Line Up",
      "zh": "将当前行上移一行（Win/Linux 为 Alt+Shift+Up，相同）",
      "id": "d9a555b5e76e09f8",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Move Line Up）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "移动",
        "重命名",
        "改名",
        "将当前行上移一行（Win/Linux 为 Alt+Shift+Up，相同）",
        "Move Line Up",
        "Alt+Shift+Up"
      ],
      "examples": [
        {
          "value": "按 Alt+Shift+Up",
          "description": "将当前行上移一行（Win/Linux 为 Alt+Shift+Up，相同）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Move Line Up）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要将当前行上移一行（Win/Linux 为 Alt+Shift+Up，相同），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Alt+Shift+Up”将当前行上移一行（Win/Linux 为 Alt+Shift+Up，相同）。",
          "expected": "快捷键触发后，当前界面完成“将当前行上移一行（Win/Linux 为 Alt+Shift+Up，相同）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Alt+Shift+Down",
      "en": "Move Line Down",
      "zh": "将当前行下移一行（Win/Linux 相同）",
      "id": "38b8bca65b4dc680",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Move Line Down）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "移动",
        "重命名",
        "改名",
        "将当前行下移一行（Win/Linux 相同）",
        "Move Line Down",
        "Alt+Shift+Down"
      ],
      "examples": [
        {
          "value": "按 Alt+Shift+Down",
          "description": "将当前行下移一行（Win/Linux 相同）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Move Line Down）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要将当前行下移一行（Win/Linux 相同），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Alt+Shift+Down”将当前行下移一行（Win/Linux 相同）。",
          "expected": "快捷键触发后，当前界面完成“将当前行下移一行（Win/Linux 相同）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+Shift+Up",
      "en": "Move Statement Up",
      "zh": "将当前代码块/方法整体上移（Win/Linux 为 Ctrl+Shift+Up）",
      "id": "989d56eab343c074",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Move Statement Up）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "移动",
        "重命名",
        "改名",
        "将当前代码块/方法整体上移（Win/Linux 为 Ctrl+Shift+Up）",
        "Move Statement Up",
        "Cmd+Shift+Up"
      ],
      "examples": [
        {
          "value": "按 Cmd+Shift+Up",
          "description": "将当前代码块/方法整体上移（Win/Linux 为 Ctrl+Shift+Up）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Move Statement Up）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要将当前代码块/方法整体上移（Win/Linux 为 Ctrl+Shift+Up），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+Shift+Up”将当前代码块/方法整体上移（Win/Linux 为 Ctrl+Shift+Up）。",
          "expected": "快捷键触发后，当前界面完成“将当前代码块/方法整体上移（Win/Linux 为 Ctrl+Shift+Up）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+Shift+Down",
      "en": "Move Statement Down",
      "zh": "将当前代码块/方法整体下移（Win/Linux 为 Ctrl+Shift+Down）",
      "id": "4db325e0de889330",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Move Statement Down）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "移动",
        "重命名",
        "改名",
        "将当前代码块/方法整体下移（Win/Linux 为 Ctrl+Shift+Down）",
        "Move Statement Down",
        "Cmd+Shift+Down"
      ],
      "examples": [
        {
          "value": "按 Cmd+Shift+Down",
          "description": "将当前代码块/方法整体下移（Win/Linux 为 Ctrl+Shift+Down）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Move Statement Down）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要将当前代码块/方法整体下移（Win/Linux 为 Ctrl+Shift+Down），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+Shift+Down”将当前代码块/方法整体下移（Win/Linux 为 Ctrl+Shift+Down）。",
          "expected": "快捷键触发后，当前界面完成“将当前代码块/方法整体下移（Win/Linux 为 Ctrl+Shift+Down）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+/",
      "en": "Comment/Uncomment Line",
      "zh": "行注释或取消注释（Win/Linux 为 Ctrl+/）",
      "id": "f6dc32fa8d1b9935",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Comment/Uncomment Line）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "行注释或取消注释（Win/Linux 为 Ctrl+/）",
        "Comment/Uncomment Line",
        "Cmd+/"
      ],
      "examples": [
        {
          "value": "按 Cmd+/",
          "description": "行注释或取消注释（Win/Linux 为 Ctrl+/）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Comment/Uncomment Line）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要行注释或取消注释（Win/Linux 为 Ctrl+/），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+/”行注释或取消注释（Win/Linux 为 Ctrl+/）。",
          "expected": "快捷键触发后，当前界面完成“行注释或取消注释（Win/Linux 为 Ctrl+/）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+Shift+/",
      "en": "Comment/Uncomment Block",
      "zh": "块注释或取消注释（Win/Linux 为 Ctrl+Shift+/）",
      "id": "b3582de81e76d0d9",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Comment/Uncomment Block）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "块注释或取消注释（Win/Linux 为 Ctrl+Shift+/）",
        "Comment/Uncomment Block",
        "Cmd+Shift+/"
      ],
      "examples": [
        {
          "value": "按 Cmd+Shift+/",
          "description": "块注释或取消注释（Win/Linux 为 Ctrl+Shift+/）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Comment/Uncomment Block）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要块注释或取消注释（Win/Linux 为 Ctrl+Shift+/），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+Shift+/”块注释或取消注释（Win/Linux 为 Ctrl+Shift+/）。",
          "expected": "快捷键触发后，当前界面完成“块注释或取消注释（Win/Linux 为 Ctrl+Shift+/）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+Shift+U",
      "en": "Toggle Case",
      "zh": "切换选中文本的大/小写（Win/Linux 为 Ctrl+Shift+U）",
      "id": "81b20ad567fa4c26",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Toggle Case）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "切换选中文本的大/小写（Win/Linux 为 Ctrl+Shift+U）",
        "Toggle Case",
        "Cmd+Shift+U"
      ],
      "examples": [
        {
          "value": "按 Cmd+Shift+U",
          "description": "切换选中文本的大/小写（Win/Linux 为 Ctrl+Shift+U）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Toggle Case）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要切换选中文本的大/小写（Win/Linux 为 Ctrl+Shift+U），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+Shift+U”切换选中文本的大/小写（Win/Linux 为 Ctrl+Shift+U）。",
          "expected": "快捷键触发后，当前界面完成“切换选中文本的大/小写（Win/Linux 为 Ctrl+Shift+U）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Option+Up",
      "en": "Extend Selection",
      "zh": "按语法结构逐级向外扩展选区（Win/Linux 为 Ctrl+W）",
      "id": "c7b0ed40d40cd040",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Extend Selection）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "按语法结构逐级向外扩展选区（Win/Linux 为 Ctrl+W）",
        "Extend Selection",
        "Option+Up"
      ],
      "examples": [
        {
          "value": "按 Option+Up",
          "description": "按语法结构逐级向外扩展选区（Win/Linux 为 Ctrl+W）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Extend Selection）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要按语法结构逐级向外扩展选区（Win/Linux 为 Ctrl+W），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Option+Up”按语法结构逐级向外扩展选区（Win/Linux 为 Ctrl+W）。",
          "expected": "快捷键触发后，当前界面完成“按语法结构逐级向外扩展选区（Win/Linux 为 Ctrl+W）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Option+Down",
      "en": "Shrink Selection",
      "zh": "按语法结构逐级向内收缩选区（Win/Linux 为 Ctrl+Shift+W）",
      "id": "d0696b5b43ee55f9",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Shrink Selection）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "按语法结构逐级向内收缩选区（Win/Linux 为 Ctrl+Shift+W）",
        "Shrink Selection",
        "Option+Down"
      ],
      "examples": [
        {
          "value": "按 Option+Down",
          "description": "按语法结构逐级向内收缩选区（Win/Linux 为 Ctrl+Shift+W）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Shrink Selection）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要按语法结构逐级向内收缩选区（Win/Linux 为 Ctrl+Shift+W），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Option+Down”按语法结构逐级向内收缩选区（Win/Linux 为 Ctrl+Shift+W）。",
          "expected": "快捷键触发后，当前界面完成“按语法结构逐级向内收缩选区（Win/Linux 为 Ctrl+Shift+W）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+Alt+L",
      "en": "Reformat Code",
      "zh": "按代码风格格式化当前文件或选区（Win/Linux 为 Ctrl+Alt+L）",
      "id": "98ed2cac4966c3d0",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Reformat Code）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "格式化",
        "代码格式",
        "排版",
        "按代码风格格式化当前文件或选区（Win/Linux 为 Ctrl+Alt+L）",
        "Reformat Code",
        "Cmd+Alt+L"
      ],
      "examples": [
        {
          "value": "选中代码后按 Cmd+Alt+L（Win/Linux 为 Ctrl+Alt+L）",
          "description": "按项目代码风格格式化选区",
          "copyable": false,
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "idea-macos-keymap"
          ],
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Reformat Code）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要按项目代码风格格式化选区，希望直接通过键盘完成该操作时。",
          "goal": "使用“选中代码后按 Cmd+Alt+L（Win/Linux 为 Ctrl+Alt+L）”按代码风格格式化当前文件或选区（Win/Linux 为 Ctrl+Alt+L）。",
          "expected": "快捷键触发后，当前界面完成“按项目代码风格格式化选区”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl+Alt+O",
      "en": "Optimize Imports",
      "zh": "自动整理并删除未使用的 import（Win/Linux 相同）",
      "id": "39745130e26e4ad1",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Optimize Imports）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "删除",
        "移除",
        "清理",
        "自动整理并删除未使用的 import（Win/Linux 相同）",
        "Optimize Imports",
        "Ctrl+Alt+O"
      ],
      "examples": [
        {
          "value": "按 Ctrl+Alt+O",
          "description": "自动整理并删除未使用的 import（Win/Linux 相同）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Optimize Imports）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要自动整理并删除未使用的 import（Win/Linux 相同），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Ctrl+Alt+O”自动整理并删除未使用的 import（Win/Linux 相同）。",
          "expected": "快捷键触发后，当前界面完成“自动整理并删除未使用的 import（Win/Linux 相同）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+N",
      "en": "Generate Code",
      "zh": "生成代码——构造函数、getter/setter、equals/hashCode 等（Win/Linux 为 Alt+Insert）",
      "id": "e5e680a782f33530",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Generate Code）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "生成代码——构造函数、getter/setter、equals/hashCode 等（Win/Linux 为 Alt+Insert）",
        "Generate Code",
        "Cmd+N"
      ],
      "examples": [
        {
          "value": "按 Cmd+N",
          "description": "生成代码——构造函数、getter/setter、equals/hashCode 等（Win/Linux 为 Alt+Insert）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Generate Code）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要生成代码——构造函数、getter/setter、equals/hashCode 等（Win/Linux 为 Alt+Insert），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+N”生成代码——构造函数、getter/setter、equals/hashCode 等（Win/Linux 为 Alt+Insert）。",
          "expected": "快捷键触发后，当前界面完成“生成代码——构造函数、getter/setter、equals/hashCode 等（Win/Linux 为 Alt+Insert）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl+O",
      "en": "Override Methods",
      "zh": "选择并重写父类方法（Win/Linux 相同）",
      "id": "fc56d9d073e8d328",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Override Methods）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "选择并重写父类方法（Win/Linux 相同）",
        "Override Methods",
        "Ctrl+O"
      ],
      "examples": [
        {
          "value": "按 Ctrl+O",
          "description": "选择并重写父类方法（Win/Linux 相同）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Override Methods）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要选择并重写父类方法（Win/Linux 相同），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Ctrl+O”选择并重写父类方法（Win/Linux 相同）。",
          "expected": "快捷键触发后，当前界面完成“选择并重写父类方法（Win/Linux 相同）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl+I",
      "en": "Implement Methods",
      "zh": "选择并实现接口方法（Win/Linux 相同）",
      "id": "606cf99f57ec52b9",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Implement Methods）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "选择并实现接口方法（Win/Linux 相同）",
        "Implement Methods",
        "Ctrl+I"
      ],
      "examples": [
        {
          "value": "按 Ctrl+I",
          "description": "选择并实现接口方法（Win/Linux 相同）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Implement Methods）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要选择并实现接口方法（Win/Linux 相同），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Ctrl+I”选择并实现接口方法（Win/Linux 相同）。",
          "expected": "快捷键触发后，当前界面完成“选择并实现接口方法（Win/Linux 相同）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+Alt+T",
      "en": "Surround With",
      "zh": "用代码结构包裹选中内容（try-catch、if、for 等）（Win/Linux 为 Ctrl+Alt+T）",
      "id": "5f73c3b417deaa28",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Surround With）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "用代码结构包裹选中内容（try-catch、if、for 等）（Win/Linux 为 Ctrl+Alt+T）",
        "Surround With",
        "Cmd+Alt+T"
      ],
      "examples": [
        {
          "value": "按 Cmd+Alt+T",
          "description": "用代码结构包裹选中内容（try-catch、if、for 等）（Win/Linux 为 Ctrl+Alt+T）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Surround With）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要用代码结构包裹选中内容（try-catch、if、for 等）（Win/Linux 为 Ctrl+Alt+T），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+Alt+T”用代码结构包裹选中内容（try-catch、if、for 等）（Win/Linux 为 Ctrl+Alt+T）。",
          "expected": "快捷键触发后，当前界面完成“用代码结构包裹选中内容（try-catch、if、for 等）（Win/Linux 为 Ctrl+Alt+T）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Shift+F6",
      "en": "Rename",
      "zh": "安全重命名——变量/方法/类，自动更新所有引用（Win/Linux 相同）",
      "id": "e9bb70e5f486f7ec",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Rename）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "移动",
        "重命名",
        "改名",
        "安全重命名——变量/方法/类，自动更新所有引用（Win/Linux 相同）",
        "Rename",
        "Shift+F6"
      ],
      "examples": [
        {
          "value": "选中变量或方法名后按 Shift+F6，输入新名称",
          "description": "安全重命名并同步更新所有引用",
          "copyable": false,
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "idea-macos-keymap"
          ],
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Rename）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要安全重命名并同步更新所有引用，希望直接通过键盘完成该操作时。",
          "goal": "使用“选中变量或方法名后按 Shift+F6，输入新名称”安全重命名——变量/方法/类，自动更新所有引用（Win/Linux 相同）。",
          "expected": "快捷键触发后，当前界面完成“安全重命名并同步更新所有引用”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl+T",
      "en": "Refactor This...",
      "zh": "弹出重构菜单，选择具体的重构操作（Win/Linux 为 Ctrl+Alt+Shift+T）",
      "id": "93cd578a21a248e5",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Refactor This...）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "弹出重构菜单，选择具体的重构操作（Win/Linux 为 Ctrl+Alt+Shift+T）",
        "Refactor This...",
        "Ctrl+T"
      ],
      "examples": [
        {
          "value": "按 Ctrl+T",
          "description": "弹出重构菜单，选择具体的重构操作（Win/Linux 为 Ctrl+Alt+Shift+T）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Refactor This...）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要弹出重构菜单，选择具体的重构操作（Win/Linux 为 Ctrl+Alt+Shift+T），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Ctrl+T”弹出重构菜单，选择具体的重构操作（Win/Linux 为 Ctrl+Alt+Shift+T）。",
          "expected": "快捷键触发后，当前界面完成“弹出重构菜单，选择具体的重构操作（Win/Linux 为 Ctrl+Alt+Shift+T）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+F6",
      "en": "Change Signature",
      "zh": "修改方法签名（参数名称、类型、顺序）（Win/Linux 为 Ctrl+F6）",
      "id": "9e47d5e5c2c2fef2",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Change Signature）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "修改方法签名（参数名称、类型、顺序）（Win/Linux 为 Ctrl+F6）",
        "Change Signature",
        "Cmd+F6"
      ],
      "examples": [
        {
          "value": "按 Cmd+F6",
          "description": "修改方法签名（参数名称、类型、顺序）（Win/Linux 为 Ctrl+F6）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Change Signature）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要修改方法签名（参数名称、类型、顺序）（Win/Linux 为 Ctrl+F6），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+F6”修改方法签名（参数名称、类型、顺序）（Win/Linux 为 Ctrl+F6）。",
          "expected": "快捷键触发后，当前界面完成“修改方法签名（参数名称、类型、顺序）（Win/Linux 为 Ctrl+F6）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+Alt+M",
      "en": "Extract Method",
      "zh": "将选中代码提取为独立方法（Win/Linux 为 Ctrl+Alt+M）",
      "id": "12dc7af94ee0c371",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Extract Method）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "将选中代码提取为独立方法（Win/Linux 为 Ctrl+Alt+M）",
        "Extract Method",
        "Cmd+Alt+M"
      ],
      "examples": [
        {
          "value": "按 Cmd+Alt+M",
          "description": "将选中代码提取为独立方法（Win/Linux 为 Ctrl+Alt+M）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Extract Method）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要将选中代码提取为独立方法（Win/Linux 为 Ctrl+Alt+M），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+Alt+M”将选中代码提取为独立方法（Win/Linux 为 Ctrl+Alt+M）。",
          "expected": "快捷键触发后，当前界面完成“将选中代码提取为独立方法（Win/Linux 为 Ctrl+Alt+M）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+Alt+V",
      "en": "Extract Variable",
      "zh": "将选中表达式提取为局部变量（Win/Linux 为 Ctrl+Alt+V）",
      "id": "813516c87462a325",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Extract Variable）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "将选中表达式提取为局部变量（Win/Linux 为 Ctrl+Alt+V）",
        "Extract Variable",
        "Cmd+Alt+V"
      ],
      "examples": [
        {
          "value": "按 Cmd+Alt+V",
          "description": "将选中表达式提取为局部变量（Win/Linux 为 Ctrl+Alt+V）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Extract Variable）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要将选中表达式提取为局部变量（Win/Linux 为 Ctrl+Alt+V），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+Alt+V”将选中表达式提取为局部变量（Win/Linux 为 Ctrl+Alt+V）。",
          "expected": "快捷键触发后，当前界面完成“将选中表达式提取为局部变量（Win/Linux 为 Ctrl+Alt+V）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+Alt+F",
      "en": "Extract Field",
      "zh": "将选中表达式提取为类字段（Win/Linux 为 Ctrl+Alt+F）",
      "id": "62bc8b6cb4f5007e",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Extract Field）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "将选中表达式提取为类字段（Win/Linux 为 Ctrl+Alt+F）",
        "Extract Field",
        "Cmd+Alt+F"
      ],
      "examples": [
        {
          "value": "按 Cmd+Alt+F",
          "description": "将选中表达式提取为类字段（Win/Linux 为 Ctrl+Alt+F）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Extract Field）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要将选中表达式提取为类字段（Win/Linux 为 Ctrl+Alt+F），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+Alt+F”将选中表达式提取为类字段（Win/Linux 为 Ctrl+Alt+F）。",
          "expected": "快捷键触发后，当前界面完成“将选中表达式提取为类字段（Win/Linux 为 Ctrl+Alt+F）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+Alt+C",
      "en": "Extract Constant",
      "zh": "将选中表达式提取为常量（Win/Linux 为 Ctrl+Alt+C）",
      "id": "03d69c153918dd30",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Extract Constant）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "将选中表达式提取为常量（Win/Linux 为 Ctrl+Alt+C）",
        "Extract Constant",
        "Cmd+Alt+C"
      ],
      "examples": [
        {
          "value": "按 Cmd+Alt+C",
          "description": "将选中表达式提取为常量（Win/Linux 为 Ctrl+Alt+C）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Extract Constant）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要将选中表达式提取为常量（Win/Linux 为 Ctrl+Alt+C），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+Alt+C”将选中表达式提取为常量（Win/Linux 为 Ctrl+Alt+C）。",
          "expected": "快捷键触发后，当前界面完成“将选中表达式提取为常量（Win/Linux 为 Ctrl+Alt+C）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "F6",
      "en": "Move",
      "zh": "将类或文件移动到其他包/目录（Win/Linux 相同）",
      "id": "6faee18f2e481768",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Move）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "移动",
        "重命名",
        "改名",
        "将类或文件移动到其他包/目录（Win/Linux 相同）",
        "Move",
        "F6"
      ],
      "examples": [
        {
          "value": "按 F6",
          "description": "将类或文件移动到其他包/目录（Win/Linux 相同）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Move）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要将类或文件移动到其他包/目录（Win/Linux 相同），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 F6”将类或文件移动到其他包/目录（Win/Linux 相同）。",
          "expected": "快捷键触发后，当前界面完成“将类或文件移动到其他包/目录（Win/Linux 相同）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl+R",
      "en": "Run",
      "zh": "运行当前或上次运行的配置（Win/Linux 为 Shift+F10）",
      "id": "62f17b126407052b",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Run）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "配置",
        "设置",
        "偏好",
        "运行当前或上次运行的配置（Win/Linux 为 Shift+F10）",
        "Run",
        "Ctrl+R"
      ],
      "examples": [
        {
          "value": "按 Ctrl+R",
          "description": "运行当前或上次运行的配置（Win/Linux 为 Shift+F10）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Run）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要运行当前或上次运行的配置（Win/Linux 为 Shift+F10），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Ctrl+R”运行当前或上次运行的配置（Win/Linux 为 Shift+F10）。",
          "expected": "快捷键触发后，当前界面完成“运行当前或上次运行的配置（Win/Linux 为 Shift+F10）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl+D",
      "en": "Debug",
      "zh": "以调试模式运行当前或上次的配置（Win/Linux 为 Shift+F9）",
      "id": "e8c26c48e75f2087",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Debug）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "配置",
        "设置",
        "偏好",
        "以调试模式运行当前或上次的配置（Win/Linux 为 Shift+F9）",
        "Debug",
        "Ctrl+D"
      ],
      "examples": [
        {
          "value": "按 Ctrl+D",
          "description": "以调试模式运行当前或上次的配置（Win/Linux 为 Shift+F9）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Debug）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要以调试模式运行当前或上次的配置（Win/Linux 为 Shift+F9），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Ctrl+D”以调试模式运行当前或上次的配置（Win/Linux 为 Shift+F9）。",
          "expected": "快捷键触发后，当前界面完成“以调试模式运行当前或上次的配置（Win/Linux 为 Shift+F9）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl+Shift+R",
      "en": "Run Context Configuration",
      "zh": "运行光标所在的测试方法或当前文件（Win/Linux 为 Ctrl+Shift+F10）",
      "id": "aa2fb1fd36b7e1dc",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Run Context Configuration）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "配置",
        "设置",
        "偏好",
        "运行光标所在的测试方法或当前文件（Win/Linux 为 Ctrl+Shift+F10）",
        "Run Context Configuration",
        "Ctrl+Shift+R"
      ],
      "examples": [
        {
          "value": "按 Ctrl+Shift+R",
          "description": "运行光标所在的测试方法或当前文件（Win/Linux 为 Ctrl+Shift+F10）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Run Context Configuration）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要运行光标所在的测试方法或当前文件（Win/Linux 为 Ctrl+Shift+F10），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Ctrl+Shift+R”运行光标所在的测试方法或当前文件（Win/Linux 为 Ctrl+Shift+F10）。",
          "expected": "快捷键触发后，当前界面完成“运行光标所在的测试方法或当前文件（Win/Linux 为 Ctrl+Shift+F10）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl+Shift+D",
      "en": "Debug Context Configuration",
      "zh": "调试光标所在的测试方法或当前文件（Win/Linux 为 Ctrl+Shift+F9）",
      "id": "d549c889fe18ec9d",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Debug Context Configuration）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "配置",
        "设置",
        "偏好",
        "调试光标所在的测试方法或当前文件（Win/Linux 为 Ctrl+Shift+F9）",
        "Debug Context Configuration",
        "Ctrl+Shift+D"
      ],
      "examples": [
        {
          "value": "按 Ctrl+Shift+D",
          "description": "调试光标所在的测试方法或当前文件（Win/Linux 为 Ctrl+Shift+F9）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Debug Context Configuration）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要调试光标所在的测试方法或当前文件（Win/Linux 为 Ctrl+Shift+F9），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Ctrl+Shift+D”调试光标所在的测试方法或当前文件（Win/Linux 为 Ctrl+Shift+F9）。",
          "expected": "快捷键触发后，当前界面完成“调试光标所在的测试方法或当前文件（Win/Linux 为 Ctrl+Shift+F9）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+F2",
      "en": "Stop Process",
      "zh": "停止当前正在运行的进程（Win/Linux 为 Ctrl+F2）",
      "id": "1b154dd09cf9ed56",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Stop Process）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "停止当前正在运行的进程（Win/Linux 为 Ctrl+F2）",
        "Stop Process",
        "Cmd+F2"
      ],
      "examples": [
        {
          "value": "按 Cmd+F2",
          "description": "停止当前正在运行的进程（Win/Linux 为 Ctrl+F2）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Stop Process）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要停止当前正在运行的进程（Win/Linux 为 Ctrl+F2），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+F2”停止当前正在运行的进程（Win/Linux 为 Ctrl+F2）。",
          "expected": "快捷键触发后，当前界面完成“停止当前正在运行的进程（Win/Linux 为 Ctrl+F2）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+F8",
      "en": "Toggle Line Breakpoint",
      "zh": "在当前行添加或移除断点（Win/Linux 为 Ctrl+F8）",
      "id": "83d56695f7cfa4b8",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Toggle Line Breakpoint）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "删除",
        "移除",
        "清理",
        "在当前行添加或移除断点（Win/Linux 为 Ctrl+F8）",
        "Toggle Line Breakpoint",
        "Cmd+F8"
      ],
      "examples": [
        {
          "value": "按 Cmd+F8",
          "description": "在当前行添加或移除断点（Win/Linux 为 Ctrl+F8）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Toggle Line Breakpoint）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要在当前行添加或移除断点（Win/Linux 为 Ctrl+F8），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+F8”在当前行添加或移除断点（Win/Linux 为 Ctrl+F8）。",
          "expected": "快捷键触发后，当前界面完成“在当前行添加或移除断点（Win/Linux 为 Ctrl+F8）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+Shift+F8",
      "en": "View Breakpoints",
      "zh": "查看和管理所有断点（Win/Linux 为 Ctrl+Shift+F8）",
      "id": "8abbd33a7fbd824d",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 View Breakpoints）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "查看和管理所有断点（Win/Linux 为 Ctrl+Shift+F8）",
        "View Breakpoints",
        "Cmd+Shift+F8"
      ],
      "examples": [
        {
          "value": "按 Cmd+Shift+F8",
          "description": "查看和管理所有断点（Win/Linux 为 Ctrl+Shift+F8）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 View Breakpoints）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要查看和管理所有断点（Win/Linux 为 Ctrl+Shift+F8），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+Shift+F8”查看和管理所有断点（Win/Linux 为 Ctrl+Shift+F8）。",
          "expected": "快捷键触发后，当前界面完成“查看和管理所有断点（Win/Linux 为 Ctrl+Shift+F8）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "F9",
      "en": "Resume Program",
      "zh": "继续执行直到下一个断点（Win/Linux 相同）",
      "id": "ebcd5a6a57372aba",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Resume Program）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "会话",
        "恢复会话",
        "历史会话",
        "继续执行直到下一个断点（Win/Linux 相同）",
        "Resume Program",
        "F9"
      ],
      "examples": [
        {
          "value": "按 F9",
          "description": "继续执行直到下一个断点（Win/Linux 相同）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Resume Program）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要继续执行直到下一个断点（Win/Linux 相同），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 F9”继续执行直到下一个断点（Win/Linux 相同）。",
          "expected": "快捷键触发后，当前界面完成“继续执行直到下一个断点（Win/Linux 相同）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "F8",
      "en": "Step Over",
      "zh": "单步跳过——执行当前行，不进入方法内部（Win/Linux 相同）",
      "id": "bcb1da3c64ad3e6d",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Step Over）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "单步跳过——执行当前行，不进入方法内部（Win/Linux 相同）",
        "Step Over",
        "F8"
      ],
      "examples": [
        {
          "value": "按 F8",
          "description": "单步跳过——执行当前行，不进入方法内部（Win/Linux 相同）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Step Over）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要单步跳过——执行当前行，不进入方法内部（Win/Linux 相同），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 F8”单步跳过——执行当前行，不进入方法内部（Win/Linux 相同）。",
          "expected": "快捷键触发后，当前界面完成“单步跳过——执行当前行，不进入方法内部（Win/Linux 相同）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "F7",
      "en": "Step Into",
      "zh": "单步进入——进入当前行调用的方法内部（Win/Linux 相同）",
      "id": "10b5924b006f5a84",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Step Into）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "单步进入——进入当前行调用的方法内部（Win/Linux 相同）",
        "Step Into",
        "F7"
      ],
      "examples": [
        {
          "value": "按 F7",
          "description": "单步进入——进入当前行调用的方法内部（Win/Linux 相同）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Step Into）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要单步进入——进入当前行调用的方法内部（Win/Linux 相同），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 F7”单步进入——进入当前行调用的方法内部（Win/Linux 相同）。",
          "expected": "快捷键触发后，当前界面完成“单步进入——进入当前行调用的方法内部（Win/Linux 相同）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Shift+F7",
      "en": "Smart Step Into",
      "zh": "智能单步进入——弹出菜单选择要进入的具体方法（Win/Linux 相同）",
      "id": "18c700d1407c99c2",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Smart Step Into）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "智能单步进入——弹出菜单选择要进入的具体方法（Win/Linux 相同）",
        "Smart Step Into",
        "Shift+F7"
      ],
      "examples": [
        {
          "value": "按 Shift+F7",
          "description": "智能单步进入——弹出菜单选择要进入的具体方法（Win/Linux 相同）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Smart Step Into）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要智能单步进入——弹出菜单选择要进入的具体方法（Win/Linux 相同），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Shift+F7”智能单步进入——弹出菜单选择要进入的具体方法（Win/Linux 相同）。",
          "expected": "快捷键触发后，当前界面完成“智能单步进入——弹出菜单选择要进入的具体方法（Win/Linux 相同）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Shift+F8",
      "en": "Step Out",
      "zh": "跳出当前方法，返回调用处（Win/Linux 相同）",
      "id": "ce1b09fdcf3841f6",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Step Out）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "跳出当前方法，返回调用处（Win/Linux 相同）",
        "Step Out",
        "Shift+F8"
      ],
      "examples": [
        {
          "value": "按 Shift+F8",
          "description": "跳出当前方法，返回调用处（Win/Linux 相同）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Step Out）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要跳出当前方法，返回调用处（Win/Linux 相同），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Shift+F8”跳出当前方法，返回调用处（Win/Linux 相同）。",
          "expected": "快捷键触发后，当前界面完成“跳出当前方法，返回调用处（Win/Linux 相同）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Alt+F9",
      "en": "Run to Cursor",
      "zh": "直接运行到光标所在行（Win/Linux 相同）",
      "id": "9955759d4a58a504",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Run to Cursor）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "直接运行到光标所在行（Win/Linux 相同）",
        "Run to Cursor",
        "Alt+F9"
      ],
      "examples": [
        {
          "value": "按 Alt+F9",
          "description": "直接运行到光标所在行（Win/Linux 相同）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Run to Cursor）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要直接运行到光标所在行（Win/Linux 相同），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Alt+F9”直接运行到光标所在行（Win/Linux 相同）。",
          "expected": "快捷键触发后，当前界面完成“直接运行到光标所在行（Win/Linux 相同）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Alt+F8",
      "en": "Evaluate Expression",
      "zh": "调试暂停时计算任意表达式的值（Win/Linux 相同）",
      "id": "35c58540c924befc",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Evaluate Expression）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "调试暂停时计算任意表达式的值（Win/Linux 相同）",
        "Evaluate Expression",
        "Alt+F8"
      ],
      "examples": [
        {
          "value": "按 Alt+F8",
          "description": "调试暂停时计算任意表达式的值（Win/Linux 相同）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Evaluate Expression）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要调试暂停时计算任意表达式的值（Win/Linux 相同），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Alt+F8”调试暂停时计算任意表达式的值（Win/Linux 相同）。",
          "expected": "快捷键触发后，当前界面完成“调试暂停时计算任意表达式的值（Win/Linux 相同）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+K",
      "en": "Commit",
      "zh": "打开 Commit 对话框，填写提交信息并提交（Win/Linux 为 Ctrl+K）",
      "id": "56ad7d762d9107a3",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Commit）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "打开 Commit 对话框，填写提交信息并提交（Win/Linux 为 Ctrl+K）",
        "Commit",
        "Cmd+K"
      ],
      "examples": [
        {
          "value": "按 Cmd+K",
          "description": "打开 Commit 对话框，填写提交信息并提交（Win/Linux 为 Ctrl+K）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Commit）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要打开 Commit 对话框，填写提交信息并提交（Win/Linux 为 Ctrl+K），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+K”打开 Commit 对话框，填写提交信息并提交（Win/Linux 为 Ctrl+K）。",
          "expected": "快捷键触发后，当前界面完成“打开 Commit 对话框，填写提交信息并提交（Win/Linux 为 Ctrl+K）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+T",
      "en": "Update Project (Pull)",
      "zh": "从远端拉取最新代码（等同于 git pull）（Win/Linux 为 Ctrl+T）",
      "id": "ed4fcec61db7cae7",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Update Project (Pull)）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "从远端拉取最新代码（等同于 git pull）（Win/Linux 为 Ctrl+T）",
        "Update Project (Pull)",
        "Cmd+T"
      ],
      "examples": [
        {
          "value": "按 Cmd+T",
          "description": "从远端拉取最新代码（等同于 git pull）（Win/Linux 为 Ctrl+T）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Update Project (Pull)）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要从远端拉取最新代码（等同于 git pull）（Win/Linux 为 Ctrl+T），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+T”从远端拉取最新代码（等同于 git pull）（Win/Linux 为 Ctrl+T）。",
          "expected": "快捷键触发后，当前界面完成“从远端拉取最新代码（等同于 git pull）（Win/Linux 为 Ctrl+T）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+Shift+K",
      "en": "Push Commits",
      "zh": "将本地提交推送到远端（Win/Linux 为 Ctrl+Shift+K）",
      "id": "37860a01fdbcc5a4",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Push Commits）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "将本地提交推送到远端（Win/Linux 为 Ctrl+Shift+K）",
        "Push Commits",
        "Cmd+Shift+K"
      ],
      "examples": [
        {
          "value": "按 Cmd+Shift+K",
          "description": "将本地提交推送到远端（Win/Linux 为 Ctrl+Shift+K）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Push Commits）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要将本地提交推送到远端（Win/Linux 为 Ctrl+Shift+K），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+Shift+K”将本地提交推送到远端（Win/Linux 为 Ctrl+Shift+K）。",
          "expected": "快捷键触发后，当前界面完成“将本地提交推送到远端（Win/Linux 为 Ctrl+Shift+K）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Alt+`",
      "en": "VCS Operations Popup",
      "zh": "打开 VCS 快捷菜单，显示所有 Git 操作（Win/Linux 相同）",
      "id": "10dba342c38e06de",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 VCS Operations Popup）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "打开 VCS 快捷菜单，显示所有 Git 操作（Win/Linux 相同）",
        "VCS Operations Popup",
        "Alt+`"
      ],
      "examples": [
        {
          "value": "按 Alt+`",
          "description": "打开 VCS 快捷菜单，显示所有 Git 操作（Win/Linux 相同）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 VCS Operations Popup）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要打开 VCS 快捷菜单，显示所有 Git 操作（Win/Linux 相同），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Alt+`”打开 VCS 快捷菜单，显示所有 Git 操作（Win/Linux 相同）。",
          "expected": "快捷键触发后，当前界面完成“打开 VCS 快捷菜单，显示所有 Git 操作（Win/Linux 相同）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+Alt+Z",
      "en": "Revert Changes in File",
      "zh": "撤销当前文件的所有未提交变更（Win/Linux 为 Ctrl+Alt+Z）",
      "id": "e9848d8ccf5ce38b",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Revert Changes in File）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "撤销当前文件的所有未提交变更（Win/Linux 为 Ctrl+Alt+Z）",
        "Revert Changes in File",
        "Cmd+Alt+Z"
      ],
      "examples": [
        {
          "value": "按 Cmd+Alt+Z",
          "description": "撤销当前文件的所有未提交变更（Win/Linux 为 Ctrl+Alt+Z）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Revert Changes in File）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要撤销当前文件的所有未提交变更（Win/Linux 为 Ctrl+Alt+Z），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+Alt+Z”撤销当前文件的所有未提交变更（Win/Linux 为 Ctrl+Alt+Z）。",
          "expected": "快捷键触发后，当前界面完成“撤销当前文件的所有未提交变更（Win/Linux 为 Ctrl+Alt+Z）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+1",
      "en": "Project Tool Window",
      "zh": "打开/聚焦项目文件树面板（Win/Linux 为 Alt+1）",
      "id": "d7170906c477c76e",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Project Tool Window）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "打开/聚焦项目文件树面板（Win/Linux 为 Alt+1）",
        "Project Tool Window",
        "Cmd+1"
      ],
      "examples": [
        {
          "value": "按 Cmd+1",
          "description": "打开/聚焦项目文件树面板（Win/Linux 为 Alt+1）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Project Tool Window）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要打开/聚焦项目文件树面板（Win/Linux 为 Alt+1），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+1”打开/聚焦项目文件树面板（Win/Linux 为 Alt+1）。",
          "expected": "快捷键触发后，当前界面完成“打开/聚焦项目文件树面板（Win/Linux 为 Alt+1）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+4",
      "en": "Run Tool Window",
      "zh": "打开/聚焦运行输出面板（Win/Linux 为 Alt+4）",
      "id": "ce2559b1c4cad536",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Run Tool Window）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "打开/聚焦运行输出面板（Win/Linux 为 Alt+4）",
        "Run Tool Window",
        "Cmd+4"
      ],
      "examples": [
        {
          "value": "按 Cmd+4",
          "description": "打开/聚焦运行输出面板（Win/Linux 为 Alt+4）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Run Tool Window）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要打开/聚焦运行输出面板（Win/Linux 为 Alt+4），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+4”打开/聚焦运行输出面板（Win/Linux 为 Alt+4）。",
          "expected": "快捷键触发后，当前界面完成“打开/聚焦运行输出面板（Win/Linux 为 Alt+4）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+5",
      "en": "Debug Tool Window",
      "zh": "打开/聚焦调试面板（Win/Linux 为 Alt+5）",
      "id": "7b7a5d111234b121",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Debug Tool Window）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "打开/聚焦调试面板（Win/Linux 为 Alt+5）",
        "Debug Tool Window",
        "Cmd+5"
      ],
      "examples": [
        {
          "value": "按 Cmd+5",
          "description": "打开/聚焦调试面板（Win/Linux 为 Alt+5）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Debug Tool Window）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要打开/聚焦调试面板（Win/Linux 为 Alt+5），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+5”打开/聚焦调试面板（Win/Linux 为 Alt+5）。",
          "expected": "快捷键触发后，当前界面完成“打开/聚焦调试面板（Win/Linux 为 Alt+5）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Cmd+9",
      "en": "Git Tool Window",
      "zh": "打开/聚焦 Git/版本控制面板（Win/Linux 为 Alt+9）",
      "id": "295cb37018542f33",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Git Tool Window）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "打开/聚焦 Git/版本控制面板（Win/Linux 为 Alt+9）",
        "Git Tool Window",
        "Cmd+9"
      ],
      "examples": [
        {
          "value": "按 Cmd+9",
          "description": "打开/聚焦 Git/版本控制面板（Win/Linux 为 Alt+9）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Git Tool Window）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要打开/聚焦 Git/版本控制面板（Win/Linux 为 Alt+9），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Cmd+9”打开/聚焦 Git/版本控制面板（Win/Linux 为 Alt+9）。",
          "expected": "快捷键触发后，当前界面完成“打开/聚焦 Git/版本控制面板（Win/Linux 为 Alt+9）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "F12",
      "en": "Open Last Tool Window",
      "zh": "重新打开上次使用的工具窗口（Win/Linux 相同）",
      "id": "dcd6b95af2279d93",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Open Last Tool Window）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "重新打开上次使用的工具窗口（Win/Linux 相同）",
        "Open Last Tool Window",
        "F12"
      ],
      "examples": [
        {
          "value": "按 F12",
          "description": "重新打开上次使用的工具窗口（Win/Linux 相同）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Open Last Tool Window）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要重新打开上次使用的工具窗口（Win/Linux 相同），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 F12”重新打开上次使用的工具窗口（Win/Linux 相同）。",
          "expected": "快捷键触发后，当前界面完成“重新打开上次使用的工具窗口（Win/Linux 相同）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Esc",
      "en": "Return Focus to Editor",
      "zh": "将焦点从工具窗口返回到编辑器（Win/Linux 相同）",
      "id": "a71a6077664e7455",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Return Focus to Editor）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "将焦点从工具窗口返回到编辑器（Win/Linux 相同）",
        "Return Focus to Editor",
        "Esc"
      ],
      "examples": [
        {
          "value": "按 Esc",
          "description": "将焦点从工具窗口返回到编辑器（Win/Linux 相同）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Return Focus to Editor）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要将焦点从工具窗口返回到编辑器（Win/Linux 相同），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Esc”将焦点从工具窗口返回到编辑器（Win/Linux 相同）。",
          "expected": "快捷键触发后，当前界面完成“将焦点从工具窗口返回到编辑器（Win/Linux 相同）”对应的动作。"
        }
      ]
    },
    {
      "cat": "shortcut",
      "cmd": "Shift+Esc",
      "en": "Hide Tool Window",
      "zh": "隐藏当前工具窗口并将焦点返回编辑器（Win/Linux 相同）",
      "id": "de174fa351c40e5b",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "idea-macos-keymap",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "官方 macOS Keymap（页面内检索 Hide Tool Window）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "隐藏当前工具窗口并将焦点返回编辑器（Win/Linux 相同）",
        "Hide Tool Window",
        "Shift+Esc"
      ],
      "examples": [
        {
          "value": "按 Shift+Esc",
          "description": "隐藏当前工具窗口并将焦点返回编辑器（Win/Linux 相同）",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "idea-macos-keymap",
              "locator": "官方 macOS Keymap（页面内检索 Hide Tool Window）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "在IntelliJ IDEA中需要隐藏当前工具窗口并将焦点返回编辑器（Win/Linux 相同），希望直接通过键盘完成该操作时。",
          "goal": "使用“按 Shift+Esc”隐藏当前工具窗口并将焦点返回编辑器（Win/Linux 相同）。",
          "expected": "快捷键触发后，当前界面完成“隐藏当前工具窗口并将焦点返回编辑器（Win/Linux 相同）”对应的动作。"
        }
      ]
    }
  ]
};
