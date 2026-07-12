// Generated from validated structured data. Manual edits must follow data/SCHEMA.md.
window.CHEATSHEET_DATA = window.CHEATSHEET_DATA || {};
window.CHEATSHEET_DATA["obsidian"] = {
  "meta": {
    "id": "obsidian",
    "name": "Obsidian",
    "color": "#7C3AED",
    "source": "Obsidian Help and Changelog, retrieved 2025-04-10",
    "builtIn": false,
    "updatePolicy": "manual-only",
    "contentCheckedAt": "2026-07-07",
    "sourceCheckedAt": "2026-07-12",
    "sourceUrl": "https://obsidian.md/help",
    "sourceTier": "official",
    "coverage": "Core default keyboard shortcuts from the official help documentation",
    "unverifiedPolicy": "官方帮助未提供稳定的逐条默认键位定位；这些快捷键保留为待人工复核的常用子集",
    "platforms": [
      "mac",
      "windows",
      "linux"
    ],
    "order": 999,
    "sources": [
      {
        "id": "obsidian-help",
        "title": "Obsidian Help",
        "kind": "official-doc",
        "maintainer": "Obsidian",
        "evidenceTier": "first-party",
        "purposes": [
          "command-existence",
          "option-semantics",
          "examples",
          "cross-check"
        ],
        "resolvedUrl": "https://obsidian.md/help",
        "pageTitle": "Obsidian Help",
        "checkedAt": "2026-07-12",
        "url": "https://obsidian.md/help",
        "lastVerifiedAt": "2026-07-12"
      }
    ],
    "verificationStatus": "model-knowledge"
  },
  "items": [
    {
      "cat": "shortcut",
      "cmd": "Ctrl/Cmd+P",
      "en": "Open command palette",
      "zh": "打开命令面板",
      "evidenceStatus": "unverified",
      "keywords": [
        "命令",
        "搜索命令",
        "执行",
        "面板"
      ],
      "examples": [
        {
          "value": "按下 Ctrl/Cmd+P",
          "description": "命令面板打开后显示最近使用的命令，输入关键词可以筛选命令列表，选中后回车执行。",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "none",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "obsidian-help"
          ],
          "scenario": "需要执行一个未绑定快捷键的命令",
          "goal": "通过关键词快速找到并执行命令",
          "expected": "弹出命令面板浮窗，光标自动聚焦到搜索框"
        }
      ],
      "platforms": [
        "mac",
        "windows",
        "linux"
      ],
      "id": "cmd-palette"
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl/Cmd+O",
      "en": "Open quick switcher",
      "zh": "打开快速切换器",
      "evidenceStatus": "unverified",
      "keywords": [
        "切换笔记",
        "打开文件",
        "搜索文件",
        "导航"
      ],
      "examples": [
        {
          "value": "按下 Ctrl/Cmd+O，输入笔记标题片段后回车",
          "description": "快速切换器会根据输入模糊匹配文件名、路径和别名，支持打开或创建笔记。",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "none",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "obsidian-help"
          ],
          "scenario": "你有多个笔记，想快速跳转到一个已知名称的笔记",
          "goal": "不离开键盘，通过输入部分文件名立即打开笔记",
          "expected": "快速切换器弹窗出现，键入后实时过滤文件列表，回车即可打开目标笔记"
        }
      ],
      "platforms": [
        "mac",
        "windows",
        "linux"
      ],
      "id": "quick-switcher"
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl/Cmd+N",
      "en": "Create new note",
      "zh": "新建笔记",
      "evidenceStatus": "unverified",
      "keywords": [
        "新建",
        "创建",
        "笔记",
        "页面"
      ],
      "examples": [
        {
          "value": "按下 Ctrl/Cmd+N",
          "description": "Obsidian 会在当前库的默认位置生成未命名新笔记，光标自动进入编辑区域。",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "none",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "obsidian-help"
          ],
          "scenario": "在库中快速创建一篇空白笔记",
          "goal": "立即打开新笔记并开始记录",
          "expected": "新建笔记标签页出现，标题为“未命名”或类似占位符，可直接输入内容"
        }
      ],
      "platforms": [
        "mac",
        "windows",
        "linux"
      ],
      "id": "new-note"
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl/Cmd+S",
      "en": "Save current file",
      "zh": "保存当前文件",
      "evidenceStatus": "unverified",
      "keywords": [
        "保存",
        "写入磁盘",
        "文件"
      ],
      "examples": [
        {
          "value": "按下 Ctrl/Cmd+S",
          "description": "Obsidian 虽然具备自动保存，但手动保存可以立即触发同步或备份流程，并确认无写入冲突。",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "none",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "obsidian-help"
          ],
          "scenario": "完成一段重要编辑后希望立即确保持久化",
          "goal": "手动将当前笔记内容写入磁盘",
          "expected": "标题栏的修改指示器消失，文件内容被保存到磁盘"
        }
      ],
      "platforms": [
        "mac",
        "windows",
        "linux"
      ],
      "id": "save-file"
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl/Cmd+B",
      "en": "Bold",
      "zh": "加粗",
      "evidenceStatus": "unverified",
      "keywords": [
        "粗体",
        "强调",
        "格式",
        "Markdown"
      ],
      "examples": [
        {
          "value": "选中文字后按下 Ctrl/Cmd+B，或直接按 Ctrl/Cmd+B 并输入内容",
          "description": "若未选中文本，Obsidian 会在光标两侧插入 **，等待输入粗体文字；选中文本时会将选中内容包裹在 ** 中。",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "none",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "obsidian-help"
          ],
          "scenario": "在笔记中强调某个关键词或短语",
          "goal": "将选中文本或光标所在的单词变为粗体",
          "expected": "选中的文字前后出现双星号，渲染后显示为粗体"
        }
      ],
      "platforms": [
        "mac",
        "windows",
        "linux"
      ],
      "id": "bold"
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl/Cmd+I",
      "en": "Italic",
      "zh": "斜体",
      "evidenceStatus": "unverified",
      "keywords": [
        "斜体",
        "强调",
        "格式",
        "Markdown"
      ],
      "examples": [
        {
          "value": "选中文字后按下 Ctrl/Cmd+I，或光标后直接按 Ctrl/Cmd+I 输入",
          "description": "用法与加粗类似，插入单个星号或下划线包裹目标文字。",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "none",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "obsidian-help"
          ],
          "scenario": "对次要强调内容使用斜体",
          "goal": "将选中文本或即将输入的文字变为斜体",
          "expected": "选中文字变为星号包围，渲染时显示为斜体"
        }
      ],
      "platforms": [
        "mac",
        "windows",
        "linux"
      ],
      "id": "italic"
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl/Cmd+K",
      "en": "Insert markdown link",
      "zh": "插入 Markdown 链接",
      "evidenceStatus": "unverified",
      "keywords": [
        "链接",
        "URL",
        "超链接",
        "Markdown"
      ],
      "examples": [
        {
          "value": "选中文字（如“官网”）后按下 Ctrl/Cmd+K，再输入 URL",
          "description": "Obsidian 会自动将选中文字作为链接文本，生成 [官网](光标位置) 并让你填入 URL。",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "none",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "obsidian-help"
          ],
          "scenario": "为一段描述性文字添加外部网页链接",
          "goal": "将选中的文本快速转换为 Markdown 链接格式",
          "expected": "文本变为 [官网](url)，渲染后显示为可点击的链接"
        }
      ],
      "platforms": [
        "mac",
        "windows",
        "linux"
      ],
      "id": "insert-link"
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl/Cmd+F",
      "en": "Search current file",
      "zh": "搜索当前笔记",
      "evidenceStatus": "unverified",
      "keywords": [
        "查找",
        "搜索",
        "当前文件"
      ],
      "examples": [
        {
          "value": "按下 Ctrl/Cmd+F 并输入关键词",
          "description": "搜索栏出现在编辑区域顶部，实时高亮匹配文字并显示匹配计数。",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "none",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "obsidian-help"
          ],
          "scenario": "在长篇笔记中定位某个关键词",
          "goal": "在当前笔记中高亮所有匹配项并跳转",
          "expected": "搜索框弹出，匹配文字高亮，按 Enter 可循环跳转"
        }
      ],
      "platforms": [
        "mac",
        "windows",
        "linux"
      ],
      "id": "find"
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl/Cmd+Shift+F",
      "en": "Search in all files",
      "zh": "在所有文件中搜索",
      "evidenceStatus": "unverified",
      "keywords": [
        "全局搜索",
        "全文检索",
        "查找"
      ],
      "examples": [
        {
          "value": "按下 Ctrl/Cmd+Shift+F 输入关键词",
          "description": "Obsidian 会打开全局搜索面板，列出所有包含关键词的文件及匹配所在行。",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "none",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "obsidian-help"
          ],
          "scenario": "你不记得某个概念写在哪篇笔记里",
          "goal": "在整个知识库中搜索该关键词",
          "expected": "侧边栏展开搜索视图，显示文件名和匹配上下文片段"
        }
      ],
      "platforms": [
        "mac",
        "windows",
        "linux"
      ],
      "id": "find-in-files"
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl/Cmd+H",
      "en": "Find and replace in current file",
      "zh": "替换当前笔记中的文本",
      "evidenceStatus": "unverified",
      "keywords": [
        "替换",
        "查找替换",
        "批量修改"
      ],
      "examples": [
        {
          "value": "按下 Ctrl/Cmd+H，输入查找词和替换词，然后选择“全部替换”",
          "description": "替换功能在搜索栏基础上增加替换输入框，支持逐一或全部替换。",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "none",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "obsidian-help"
          ],
          "scenario": "需要将当前笔记中所有某个拼写错误的词统一改正",
          "goal": "快速替换多个匹配文本",
          "expected": "查找栏出现替换输入框，确认后所有匹配项一并修改"
        }
      ],
      "platforms": [
        "mac",
        "windows",
        "linux"
      ],
      "id": "replace"
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl/Cmd+Z",
      "en": "Undo",
      "zh": "撤销",
      "evidenceStatus": "unverified",
      "keywords": [
        "撤销",
        "回退",
        "历史"
      ],
      "examples": [
        {
          "value": "按下 Ctrl/Cmd+Z",
          "description": "支持多步撤销，也适用于移动、格式化等操作。",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "none",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "obsidian-help"
          ],
          "scenario": "误删了一段文字或错误地格式化了一段内容",
          "goal": "恢复到上一步操作前的状态",
          "expected": "上一次更改被回退，内容恢复到操作前"
        }
      ],
      "platforms": [
        "mac",
        "windows",
        "linux"
      ],
      "id": "undo"
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl/Cmd+Shift+Z",
      "en": "Redo",
      "zh": "重做",
      "evidenceStatus": "unverified",
      "keywords": [
        "重做",
        "恢复",
        "前进"
      ],
      "examples": [
        {
          "value": "按下 Ctrl/Cmd+Shift+Z",
          "description": "与撤销相对应，逐步向前恢复历史状态。部分平台也可能用 Ctrl/Cmd+Y，但 Obsidian 默认使用 Shift+Z。",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "none",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "obsidian-help"
          ],
          "scenario": "撤销后想要恢复刚才被撤销的更改",
          "goal": "重做上一步被撤销的操作",
          "expected": "被撤销的更改重新应用"
        }
      ],
      "platforms": [
        "mac",
        "windows",
        "linux"
      ],
      "id": "redo"
    },
    {
      "cat": "shortcut",
      "cmd": "Ctrl/Cmd+E",
      "en": "Toggle edit/view mode",
      "zh": "切换编辑/查看模式",
      "evidenceStatus": "unverified",
      "keywords": [
        "编辑",
        "预览",
        "阅读视图",
        "源码模式"
      ],
      "examples": [
        {
          "value": "按下 Ctrl/Cmd+E",
          "description": "在实时预览或旧版编辑/预览模式间切换，具体行为取决于 Obsidian 的设置。",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "none",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "obsidian-help"
          ],
          "scenario": "想查看文章渲染效果，或需要切换到源码模式修改 Markdown 语法",
          "goal": "在阅读视图与源码编辑视图间切换",
          "expected": "视图切换，若从实时预览切出则显示纯 Markdown 源码，反之显示渲染后效果"
        }
      ],
      "platforms": [
        "mac",
        "windows",
        "linux"
      ],
      "id": "toggle-edit-preview"
    },
    {
      "cat": "shortcut",
      "cmd": "Alt+Up",
      "en": "Move line up",
      "zh": "向上移动当前行",
      "evidenceStatus": "unverified",
      "keywords": [
        "移动行",
        "上下移动",
        "重新排序"
      ],
      "examples": [
        {
          "value": "在编辑模式下，光标置于某行，按下 Alt+Up",
          "description": "整行文本上移，适用于无序列表、有序列表或普通段落。",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "none",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "obsidian-help"
          ],
          "scenario": "快速调整列表项或段落的顺序",
          "goal": "将当前行向上移动一行",
          "expected": "当前行与上一行交换位置"
        }
      ],
      "platforms": [
        "mac",
        "windows",
        "linux"
      ],
      "id": "move-line-up"
    },
    {
      "cat": "shortcut",
      "cmd": "Alt+Down",
      "en": "Move line down",
      "zh": "向下移动当前行",
      "evidenceStatus": "unverified",
      "keywords": [
        "移动行",
        "上下移动",
        "重新排序"
      ],
      "examples": [
        {
          "value": "光标放在行内，按下 Alt+Down",
          "description": "与向上移动对称，常用于整理结构化内容。",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "none",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "obsidian-help"
          ],
          "scenario": "需要将某行下移一行以调整顺序",
          "goal": "将当前行下移",
          "expected": "当前行与下一行交换位置"
        }
      ],
      "platforms": [
        "mac",
        "windows",
        "linux"
      ],
      "id": "move-line-down"
    }
  ]
};
