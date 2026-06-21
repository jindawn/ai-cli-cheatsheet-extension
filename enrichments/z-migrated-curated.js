(function registerMigratedEnrichments(globalScope) {
  "use strict";
  const modules = globalScope.CHEATSHEET_ENRICHMENT_MODULES ||= {};
  const migrated = {
  "antigravity-cli": {
    "id:c078911b531fbdc3": {
      "examples": [
        {
          "value": "agy -p \"解释这个项目的目录结构\"",
          "description": "非交互执行一次任务并把结果输出到终端"
        }
      ]
    },
    "id:e441243d9d431615": {
      "examples": [
        {
          "value": "agy --model \"Gemini 3.1 Pro\"",
          "description": "使用指定模型启动交互会话"
        }
      ]
    },
    "id:186d0438d19ceaed": {
      "examples": [
        {
          "value": "/model",
          "description": "在当前会话中打开模型选择界面"
        }
      ]
    },
    "id:06b5d0ad28912284": {
      "examples": [
        {
          "value": "/diff",
          "description": "查看代理在工作区中产生的文件改动"
        }
      ]
    },
    "id:f91dba3ba4d2fe4f": {
      "examples": [
        {
          "value": "/rewind",
          "description": "选择较早的消息并回退会话状态"
        }
      ]
    },
    "id:0d74170ed385e88f": {
      "examples": [
        {
          "value": "/resume",
          "description": "打开历史会话列表并恢复一次会话"
        }
      ]
    },
    "id:9214a76c9e068280": {
      "examples": [
        {
          "value": "agy",
          "description": "在当前目录启动 Antigravity 交互式终端界面"
        }
      ]
    },
    "id:9b27426fc91ec116": {
      "examples": [
        {
          "value": "agy models",
          "description": "列出当前账号和套餐可使用的模型"
        }
      ]
    },
    "id:24a611d3af704936": {
      "examples": [
        {
          "value": "/permissions",
          "description": "查看和编辑当前作用域的工具权限规则"
        }
      ]
    },
    "id:dd96c8aa5687bdf8": {
      "examples": [
        {
          "value": "/fast",
          "description": "跳过规划阶段直接执行，适合范围明确的小任务",
          "warning": "复杂任务建议保留规划阶段"
        }
      ]
    }
  },
  "claude-code": {
    "id:776b9cb01c53263d": {
      "examples": [
        {
          "value": "/compact 保留当前实现决策和未完成任务",
          "description": "按指定重点压缩上下文，释放可用上下文空间"
        }
      ]
    },
    "id:1949f76d956983bb": {
      "examples": [
        {
          "value": "/model",
          "description": "打开模型选择器并调整当前会话模型"
        }
      ]
    },
    "id:f99f88519066cc37": {
      "examples": [
        {
          "value": "/resume",
          "description": "打开会话选择器；也可以在后面填写会话名称或 ID"
        }
      ]
    },
    "id:400dab7510bea568": {
      "examples": [
        {
          "value": "/plan 重构登录模块并补充测试",
          "description": "带着具体目标进入计划模式"
        }
      ]
    },
    "id:9b8c8d522860e2f2": {
      "examples": [
        {
          "value": "/review 123",
          "description": "审查编号为 123 的 Pull Request"
        }
      ]
    },
    "id:d7127ca559ac589f": {
      "examples": [
        {
          "value": "!git status",
          "description": "在会话中执行 shell 命令，并把输出加入上下文"
        }
      ]
    },
    "id:b4368fb4bea77e35": {
      "examples": [
        {
          "value": "/init",
          "description": "分析当前项目并生成 CLAUDE.md 初稿"
        }
      ]
    },
    "id:c2a72afc10dc3897": {
      "examples": [
        {
          "value": "/context all",
          "description": "查看完整上下文占用及可优化内容"
        }
      ]
    },
    "id:b4b4f087262d7cfb": {
      "examples": [
        {
          "value": "/tasks",
          "description": "查看并管理当前会话中的后台任务"
        }
      ]
    },
    "id:ba1da527cfe5b31b": {
      "examples": [
        {
          "value": "/permissions",
          "description": "管理工具的允许、询问和拒绝规则"
        }
      ]
    },
    "id:edf7046c0cc9e85b": {
      "examples": [
        {
          "value": "/clear",
          "description": "开启新对话并清空上下文，项目记忆仍会保留"
        }
      ]
    },
    "id:66e267eff4163728": {
      "examples": [
        {
          "value": "/branch experiment-auth",
          "description": "在当前节点创建名为 experiment-auth 的对话分支，独立尝试新方向"
        }
      ]
    },
    "id:756bfa047d64719e": {
      "examples": [
        {
          "value": "/effort high",
          "description": "把推理强度调到 high，处理复杂重构或难调的 bug 时更细致",
          "sourceUrl": "https://code.claude.com/docs/en/interactive-mode"
        },
        {
          "value": "/effort low",
          "description": "简单问答或小改动时降到 low，响应更快、更省上下文",
          "sourceUrl": "https://code.claude.com/docs/en/interactive-mode"
        },
        {
          "value": "/effort auto",
          "description": "交给 Claude 按任务复杂度自动选择推理强度",
          "sourceUrl": "https://code.claude.com/docs/en/interactive-mode"
        }
      ]
    },
    "id:7e160c1c19714033": {
      "examples": [
        {
          "value": "/fast on",
          "description": "为支持的 Opus 模型开启低延迟响应；速度更快，但 token 单价更高，能力与质量不变",
          "sourceUrl": "https://code.claude.com/docs/en/fast-mode"
        },
        {
          "value": "/fast off",
          "description": "关闭低延迟模式，恢复标准响应速度和标准 token 价格",
          "sourceUrl": "https://code.claude.com/docs/en/fast-mode"
        }
      ]
    },
    "id:c1f1bc2fdc781f4b": {
      "examples": [
        {
          "value": "/goal 通过所有单元测试再停止",
          "description": "设定一个跨多轮持续追踪的目标，直到条件满足",
          "sourceUrl": "https://code.claude.com/docs/en/interactive-mode"
        },
        {
          "value": "/goal clear",
          "description": "清除当前目标，停止跨轮追踪",
          "sourceUrl": "https://code.claude.com/docs/en/interactive-mode"
        }
      ]
    }
  },
  "codex": {
    "id:991d78879f421558": {
      "examples": [
        {
          "value": "/model",
          "description": "打开当前会话的模型与推理强度选择器"
        }
      ]
    },
    "id:a73e406dd79475b7": {
      "examples": [
        {
          "value": "/plan 为缓存模块设计迁移方案",
          "description": "携带初始目标进入只读计划模式"
        }
      ]
    },
    "id:777ac1b05cc78ea2": {
      "examples": [
        {
          "value": "/review",
          "description": "审查当前工作区改动并指出正确性和测试问题"
        }
      ]
    },
    "id:8358e9a120935b74": {
      "examples": [
        {
          "value": "/resume",
          "description": "从已保存的会话列表中选择并恢复"
        }
      ]
    },
    "id:033fb3b9573847ec": {
      "examples": [
        {
          "value": "codex exec \"运行测试并解释失败原因\"",
          "description": "非交互执行一次任务，适合脚本或 CI 使用"
        }
      ]
    },
    "id:346eb9c976be999e": {
      "examples": [
        {
          "value": "codex exec --json \"检查依赖安全问题\"",
          "description": "以 JSON 事件流输出执行过程，便于程序处理"
        }
      ]
    },
    "id:d0ab7f9c8fbe5354": {
      "examples": [
        {
          "value": "@src/auth.ts 检查这个文件的权限处理",
          "description": "搜索并把工作区文件加入当前提示词"
        }
      ]
    },
    "id:8027705783b45e04": {
      "examples": [
        {
          "value": "!git diff --stat",
          "description": "在当前审批与沙盒规则下执行本地命令"
        }
      ]
    },
    "id:794dc7571018f8f4": {
      "examples": [
        {
          "value": "/init",
          "description": "在当前目录生成项目级 AGENTS.md 说明文件"
        }
      ]
    },
    "id:30d30d0db9d3be09": {
      "examples": [
        {
          "value": "/skills",
          "description": "浏览当前可用技能并选择一个使用"
        }
      ]
    },
    "id:2fae693af8e40fed": {
      "examples": [
        {
          "value": "codex --profile work",
          "description": "加载 config.toml 中名为 work 的配置档案后启动"
        }
      ]
    },
    "id:7ae646e013acc23a": {
      "examples": [
        {
          "value": "/fast on",
          "description": "开启当前模型的快速服务层，响应更快（仅部分模型支持）",
          "sourceUrl": "https://developers.openai.com/codex/cli/"
        },
        {
          "value": "/fast status",
          "description": "查看快速服务层当前是否已启用",
          "sourceUrl": "https://developers.openai.com/codex/cli/"
        },
        {
          "value": "/fast off",
          "description": "关闭快速服务层，回到标准服务",
          "sourceUrl": "https://developers.openai.com/codex/cli/"
        }
      ]
    },
    "id:97584e83906a2146": {
      "examples": [
        {
          "value": "/raw on",
          "description": "开启原始回滚模式，查看未经渲染的模型输出（同 Alt+R）",
          "sourceUrl": "https://developers.openai.com/codex/cli/"
        },
        {
          "value": "/raw off",
          "description": "关闭原始模式，恢复正常渲染显示",
          "sourceUrl": "https://developers.openai.com/codex/cli/"
        }
      ]
    },
    "id:0eac1f66ddbbeb8c": {
      "examples": [
        {
          "value": "codex resume",
          "description": "打开会话选择器，从当前目录的历史会话中挑一个恢复",
          "sourceUrl": "https://developers.openai.com/codex/cli/"
        },
        {
          "value": "codex resume --last",
          "description": "直接恢复最近一次会话，跳过选择器",
          "sourceUrl": "https://developers.openai.com/codex/cli/"
        },
        {
          "value": "codex resume --all",
          "description": "跨所有目录搜索历史会话后再选择恢复",
          "sourceUrl": "https://developers.openai.com/codex/cli/"
        }
      ]
    }
  },
  "cursor": {
    "id:8ff2cda22ea7f208": {
      "examples": [
        {
          "value": "选中要修改的代码后按 Cmd/Ctrl+I，输入“提取为可复用函数”",
          "description": "让 Agent 基于当前上下文直接修改代码",
          "copyable": false
        }
      ]
    },
    "id:8a3401e170d3a97e": {
      "examples": [
        {
          "value": "按 Cmd/Ctrl+L 后询问“这个函数为什么会重复请求？”",
          "description": "在 AI Chat 中分析当前代码",
          "copyable": false
        }
      ]
    },
    "id:ac8177dbfb88fc54": {
      "examples": [
        {
          "value": "选中一段代码，按 Cmd/Ctrl+K，输入“增加参数校验”",
          "description": "对选中代码进行行内 AI 编辑",
          "copyable": false
        }
      ]
    },
    "id:5743ebc7c497754a": {
      "examples": [
        {
          "value": "在终端按 Cmd/Ctrl+K，输入“查找占用 3000 端口的进程”",
          "description": "根据自然语言生成终端命令",
          "copyable": false
        }
      ]
    },
    "id:e86466bd23691cc8": {
      "examples": [
        {
          "value": "选中关键代码后按 Cmd/Ctrl+Shift+L，再到 Chat 中提问",
          "description": "把选中代码加入 AI 对话上下文",
          "copyable": false
        }
      ]
    },
    "id:023a6020a0d0428b": {
      "examples": [
        {
          "value": "输入问题后按 Cmd/Ctrl+Enter",
          "description": "提交问题并搜索整个代码库作为上下文",
          "copyable": false
        }
      ]
    },
    "id:269732e21e794743": {
      "examples": [
        {
          "value": "出现灰色代码补全时按 Tab",
          "description": "接受当前整行或整块 Cursor Tab 建议",
          "copyable": false
        }
      ]
    },
    "id:7970689048e3c5af": {
      "examples": [
        {
          "value": "按 Cmd/Ctrl+Shift+P，输入命令名称",
          "description": "打开命令面板并执行编辑器动作",
          "copyable": false
        }
      ]
    },
    "id:89aacdb4b19fd234": {
      "examples": [
        {
          "value": "@Files src/api.ts",
          "description": "在 Chat 或 Composer 中引用指定文件",
          "copyable": false
        }
      ]
    },
    "id:9d8c54e3fec1f911": {
      "examples": [
        {
          "value": "@Codebase 登录状态在哪里保存？",
          "description": "让 AI 在整个代码库中搜索相关实现",
          "copyable": false
        }
      ]
    }
  },
  "gemini-cli": {
    "id:caf5f35e5809a0ea": {
      "examples": [
        {
          "value": "/compress",
          "description": "压缩当前对话上下文，适合长会话继续工作"
        }
      ]
    },
    "id:ff5d79bf2b78fa19": {
      "examples": [
        {
          "value": "/model set",
          "description": "进入模型设置流程并选择当前使用的模型"
        }
      ]
    },
    "id:7f2b456e09f16cd5": {
      "examples": [
        {
          "value": "/resume",
          "description": "浏览并恢复之前保存的会话"
        }
      ]
    },
    "id:0747ca7a77a6bc97": {
      "examples": [
        {
          "value": "/memory show",
          "description": "查看当前从 GEMINI.md 加载的记忆内容"
        }
      ]
    },
    "id:a7e1d5e3264e49ca": {
      "examples": [
        {
          "value": "@src/auth.ts 解释登录流程",
          "description": "把指定文件内容加入当前提示词"
        }
      ]
    },
    "id:1d674a307a676e58": {
      "examples": [
        {
          "value": "!git status",
          "description": "执行本地 shell 命令并显示结果"
        }
      ]
    },
    "id:257de0c49ddd37bd": {
      "examples": [
        {
          "value": "/help",
          "description": "显示当前版本支持的命令和快捷键"
        }
      ]
    },
    "id:feba3bde7df3e178": {
      "examples": [
        {
          "value": "/settings",
          "description": "打开带校验和说明的设置编辑器"
        }
      ]
    },
    "id:629d065b3549b4e9": {
      "examples": [
        {
          "value": "/stats model",
          "description": "查看当前会话按模型统计的用量信息"
        }
      ]
    },
    "id:66597ed89b719f59": {
      "examples": [
        {
          "value": "/tools desc",
          "description": "列出可用工具并显示完整描述"
        }
      ]
    },
    "id:341bd529b0f6a6e8": {
      "examples": [
        {
          "value": "/agents list",
          "description": "列出当前可用的本地与远程子代理",
          "sourceUrl": "https://geminicli.com/docs/"
        },
        {
          "value": "/agents enable",
          "description": "启用某个子代理，使其参与任务",
          "sourceUrl": "https://geminicli.com/docs/"
        },
        {
          "value": "/agents config",
          "description": "查看或调整子代理的配置",
          "sourceUrl": "https://geminicli.com/docs/"
        }
      ]
    },
    "id:24f41f74a75c7c34": {
      "examples": [
        {
          "value": "/commands list",
          "description": "列出从 .toml 文件加载的自定义命令",
          "sourceUrl": "https://geminicli.com/docs/"
        },
        {
          "value": "/commands reload",
          "description": "改动 .toml 后重新加载自定义命令，无需重启",
          "sourceUrl": "https://geminicli.com/docs/"
        }
      ]
    },
    "id:8e5b35d88fb2c6c3": {
      "examples": [
        {
          "value": "/extensions list",
          "description": "列出已安装的扩展及其启用状态",
          "sourceUrl": "https://geminicli.com/docs/"
        },
        {
          "value": "/extensions install",
          "description": "安装一个新扩展",
          "sourceUrl": "https://geminicli.com/docs/"
        },
        {
          "value": "/extensions update",
          "description": "把已安装扩展更新到最新版本",
          "sourceUrl": "https://geminicli.com/docs/"
        }
      ]
    },
    "id:ca56153155d4bad0": {
      "examples": [
        {
          "value": "/hooks list",
          "description": "列出已注册的生命周期事件钩子",
          "sourceUrl": "https://geminicli.com/docs/"
        },
        {
          "value": "/hooks enable",
          "description": "启用钩子，让它在对应事件时触发",
          "sourceUrl": "https://geminicli.com/docs/"
        },
        {
          "value": "/hooks disable",
          "description": "临时停用钩子，但保留其配置",
          "sourceUrl": "https://geminicli.com/docs/"
        }
      ]
    },
    "id:d5a97a70a319062e": {
      "examples": [
        {
          "value": "/ide status",
          "description": "查看当前 IDE 集成是否已连接",
          "sourceUrl": "https://geminicli.com/docs/"
        },
        {
          "value": "/ide install",
          "description": "安装 IDE 伴随插件以启用深度集成",
          "sourceUrl": "https://geminicli.com/docs/"
        },
        {
          "value": "/ide enable",
          "description": "启用 IDE 集成，共享编辑器上下文",
          "sourceUrl": "https://geminicli.com/docs/"
        }
      ]
    },
    "id:7e1b35f37ba36037": {
      "examples": [
        {
          "value": "/mcp list",
          "description": "列出已配置的 MCP 服务器及连接状态",
          "sourceUrl": "https://geminicli.com/docs/"
        },
        {
          "value": "/mcp auth",
          "description": "对需要 OAuth 的 MCP 服务器发起认证",
          "sourceUrl": "https://geminicli.com/docs/"
        },
        {
          "value": "/mcp reload",
          "description": "修改配置后重新加载 MCP 服务器",
          "sourceUrl": "https://geminicli.com/docs/"
        }
      ]
    },
    "id:8e962d8d25d95a3d": {
      "examples": [
        {
          "value": "/skills list",
          "description": "列出可用的 Agent Skills",
          "sourceUrl": "https://geminicli.com/docs/"
        },
        {
          "value": "/skills enable",
          "description": "启用某个技能，按需提供专业能力",
          "sourceUrl": "https://geminicli.com/docs/"
        },
        {
          "value": "/skills reload",
          "description": "改动技能定义后重新加载",
          "sourceUrl": "https://geminicli.com/docs/"
        }
      ]
    }
  },
  "git": {
    "id:git-clone": {
      "examples": [
        {
          "value": "git clone https://github.com/example/project.git",
          "description": "把远程仓库克隆到当前目录"
        }
      ]
    },
    "id:git-add": {
      "examples": [
        {
          "value": "git add src/app.js",
          "description": "把指定文件的改动加入暂存区"
        }
      ]
    },
    "id:git-commit-m": {
      "examples": [
        {
          "value": "git commit -m \"fix: handle empty input\"",
          "description": "使用一条提交说明创建提交"
        }
      ]
    },
    "id:git-reset-soft": {
      "examples": [
        {
          "value": "git reset --soft HEAD~1",
          "description": "撤销最近一次提交，但保留改动在暂存区"
        }
      ]
    },
    "id:git-switch-c": {
      "examples": [
        {
          "value": "git switch -c feature/search",
          "description": "创建并切换到 feature/search 分支"
        }
      ]
    },
    "id:git-push-force-with-lease": {
      "examples": [
        {
          "value": "git push --force-with-lease origin feature/search",
          "description": "在远端分支未被他人更新时安全地强制推送",
          "warning": "会重写远端历史，推送前确认分支和协作状态"
        }
      ]
    },
    "id:git-status-s": {
      "examples": [
        {
          "value": "git status -s",
          "description": "用两列简短状态码查看工作区和暂存区改动"
        }
      ]
    },
    "id:git-diff-staged": {
      "examples": [
        {
          "value": "git diff --staged",
          "description": "查看已经加入暂存区、即将提交的改动"
        }
      ]
    },
    "id:git-commit-amend": {
      "examples": [
        {
          "value": "git commit --amend",
          "description": "修改最近一次提交的内容或提交说明",
          "warning": "已推送的提交修改后会改变提交历史"
        }
      ]
    },
    "id:git-stash-pop": {
      "examples": [
        {
          "value": "git stash pop",
          "description": "恢复最近一次暂存的工作区改动并删除该 stash"
        }
      ]
    },
    "id:git-init": {
      "examples": [
        {
          "value": "git init",
          "description": "在当前目录创建一个新的 Git 仓库，开始版本管理",
          "sourceUrl": "https://git-scm.com/docs/git-init"
        }
      ]
    },
    "id:git-status": {
      "examples": [
        {
          "value": "git status",
          "description": "查看哪些文件被修改、已暂存或未跟踪——最常用的状态总览",
          "sourceUrl": "https://git-scm.com/docs/git-status"
        }
      ]
    },
    "id:git-diff": {
      "examples": [
        {
          "value": "git diff",
          "description": "查看工作区里尚未暂存的改动",
          "sourceUrl": "https://git-scm.com/docs/git-diff"
        }
      ]
    },
    "id:git-log-oneline": {
      "examples": [
        {
          "value": "git log --oneline",
          "description": "用一行一条的紧凑格式快速浏览提交历史",
          "sourceUrl": "https://git-scm.com/docs/git-log"
        }
      ]
    },
    "id:git-log-graph": {
      "examples": [
        {
          "value": "git log --oneline --graph --all",
          "description": "用 ASCII 图形看清分支分叉与合并的走向",
          "sourceUrl": "https://git-scm.com/docs/git-log"
        }
      ]
    },
    "id:git-branch": {
      "examples": [
        {
          "value": "git branch",
          "description": "列出本地分支，当前分支前带 * 标记",
          "sourceUrl": "https://git-scm.com/docs/git-branch"
        },
        {
          "value": "git branch feature/login",
          "description": "基于当前提交创建新分支，但不切换过去",
          "sourceUrl": "https://git-scm.com/docs/git-branch"
        }
      ]
    },
    "id:git-checkout-b": {
      "examples": [
        {
          "value": "git checkout -b feature/login",
          "description": "创建 feature/login 分支并立即切换过去",
          "sourceUrl": "https://git-scm.com/docs/git-checkout"
        }
      ]
    },
    "id:git-merge": {
      "examples": [
        {
          "value": "git merge feature/login",
          "description": "把 feature/login 的提交合并进当前分支",
          "sourceUrl": "https://git-scm.com/docs/git-merge"
        }
      ]
    },
    "id:git-rebase-i": {
      "examples": [
        {
          "value": "git rebase -i HEAD~3",
          "description": "交互式整理最近 3 个提交：合并、改信息或调顺序",
          "warning": "会重写提交历史，已推送的提交需谨慎",
          "sourceUrl": "https://git-scm.com/docs/git-rebase"
        }
      ]
    },
    "id:git-pull": {
      "examples": [
        {
          "value": "git pull",
          "description": "从远程拉取最新提交并合并到当前分支",
          "sourceUrl": "https://git-scm.com/docs/git-pull"
        }
      ]
    },
    "id:git-push-u": {
      "examples": [
        {
          "value": "git push -u origin feature/login",
          "description": "首次推送新分支并建立上游跟踪，之后可直接 git push",
          "sourceUrl": "https://git-scm.com/docs/git-push"
        }
      ]
    },
    "id:git-stash": {
      "examples": [
        {
          "value": "git stash",
          "description": "把当前未提交的改动临时收起，回到干净的工作区",
          "sourceUrl": "https://git-scm.com/docs/git-stash"
        },
        {
          "value": "git stash push -m \"调试登录\"",
          "description": "收起改动并加一句备注，便于以后辨认",
          "sourceUrl": "https://git-scm.com/docs/git-stash"
        }
      ]
    },
    "id:git-reset-hard": {
      "examples": [
        {
          "value": "git reset --hard HEAD",
          "description": "丢弃所有未提交改动，把工作区强制还原到上次提交",
          "warning": "未提交的改动会永久丢失，执行前务必确认",
          "sourceUrl": "https://git-scm.com/docs/git-reset"
        }
      ]
    },
    "id:git-cherry-pick": {
      "examples": [
        {
          "value": "git cherry-pick abc1234",
          "description": "把指定提交的改动单独摘取到当前分支",
          "sourceUrl": "https://git-scm.com/docs/git-cherry-pick"
        }
      ]
    },
    "id:git-revert": {
      "examples": [
        {
          "value": "git revert abc1234",
          "description": "为指定提交生成一个反向提交，安全撤销其改动且不改写历史",
          "sourceUrl": "https://git-scm.com/docs/git-revert"
        }
      ]
    },
    "id:git-revert-no-commit": {
      "examples": [
        {
          "value": "git revert --no-commit abc1234",
          "description": "把反向改动放进工作区暂不提交，便于一次撤销多个提交后合并提交",
          "sourceUrl": "https://git-scm.com/docs/git-revert"
        }
      ]
    },
    "id:git-restore": {
      "examples": [
        {
          "value": "git restore src/app.js",
          "description": "丢弃该文件未提交的改动，恢复成最近一次提交的内容",
          "warning": "未提交的改动会被覆盖，执行前请确认",
          "sourceUrl": "https://git-scm.com/docs/git-restore"
        }
      ]
    },
    "id:git-restore-staged": {
      "examples": [
        {
          "value": "git restore --staged src/app.js",
          "description": "把文件移出暂存区但保留工作区改动，相当于撤销 git add",
          "sourceUrl": "https://git-scm.com/docs/git-restore"
        }
      ]
    },
    "id:git-reflog": {
      "examples": [
        {
          "value": "git reflog",
          "description": "查看 HEAD 的移动历史，用于找回 reset、rebase 或误删分支后丢失的提交",
          "sourceUrl": "https://git-scm.com/docs/git-reflog"
        }
      ]
    },
    "id:git-worktree-add": {
      "examples": [
        {
          "value": "git worktree add ../hotfix main",
          "description": "在相邻目录基于 main 新建一个工作树，便于并行开发而不切换当前分支",
          "sourceUrl": "https://git-scm.com/docs/git-worktree"
        }
      ]
    },
    "id:git-worktree-list": {
      "examples": [
        {
          "value": "git worktree list",
          "description": "列出当前仓库的所有工作树及其检出的分支",
          "sourceUrl": "https://git-scm.com/docs/git-worktree"
        }
      ]
    }
  },
  "idea": {
    "id:f66de581bb5e043e": {
      "examples": [
        {
          "value": "连续按两次 Shift，输入类名、文件名或动作名称",
          "description": "从一个入口搜索整个项目和 IDE 功能",
          "copyable": false
        }
      ]
    },
    "id:b8a52256055d7e6c": {
      "examples": [
        {
          "value": "按 Cmd+Shift+A（Win/Linux 为 Ctrl+Shift+A），输入“Reformat Code”",
          "description": "搜索并执行 IDE 动作",
          "copyable": false
        }
      ]
    },
    "id:704bbc01bd8a9b42": {
      "examples": [
        {
          "value": "把光标放在方法调用上，按 Cmd/Ctrl+B",
          "description": "跳转到方法或变量的声明位置",
          "copyable": false
        }
      ]
    },
    "id:708944deb23dd3f1": {
      "examples": [
        {
          "value": "把光标放在符号上按 Alt+F7",
          "description": "查找该符号在整个项目中的使用位置",
          "copyable": false
        }
      ]
    },
    "id:e9bb70e5f486f7ec": {
      "examples": [
        {
          "value": "选中变量或方法名后按 Shift+F6，输入新名称",
          "description": "安全重命名并同步更新所有引用",
          "copyable": false
        }
      ]
    },
    "id:98ed2cac4966c3d0": {
      "examples": [
        {
          "value": "选中代码后按 Cmd+Alt+L（Win/Linux 为 Ctrl+Alt+L）",
          "description": "按项目代码风格格式化选区",
          "copyable": false
        }
      ]
    },
    "id:e19780874b2a62a8": {
      "examples": [
        {
          "value": "把光标放在报错位置，按 Alt+Enter",
          "description": "查看可用的导入、修复和代码转换建议",
          "copyable": false
        }
      ]
    },
    "id:e0de086af6d8d9ab": {
      "examples": [
        {
          "value": "按 Cmd+O（Win/Linux 为 Ctrl+N），输入类名",
          "description": "按名称快速跳转到类",
          "copyable": false
        }
      ]
    },
    "id:ff6c95b5fdee665b": {
      "examples": [
        {
          "value": "按 Cmd/Ctrl+F，输入要查找的文本",
          "description": "在当前文件中查找匹配内容",
          "copyable": false
        }
      ]
    },
    "id:0e33f2a1ab4d760a": {
      "examples": [
        {
          "value": "按 Cmd+Shift+F（Win/Linux 为 Ctrl+Shift+F），输入关键词",
          "description": "在整个项目中查找字符串",
          "copyable": false
        }
      ]
    }
  },
  "linux": {
    "id:linux-rm-rf": {
      "examples": [
        {
          "value": "rm -rf ./build-temp",
          "description": "递归删除示例临时目录且不再确认",
          "warning": "不可恢复；执行前先用 ls 检查目标路径"
        }
      ]
    },
    "id:linux-grep-r": {
      "examples": [
        {
          "value": "grep -r \"TODO\" ./src",
          "description": "递归查找 src 目录中包含 TODO 的行",
          "sourceType": "quasi-official",
          "sourceUrl": "https://www.man7.org/linux/man-pages/man1/grep.1.html"
        }
      ]
    },
    "id:linux-find-name": {
      "examples": [
        {
          "value": "find . -name \"*.log\"",
          "description": "从当前目录递归查找所有 .log 文件",
          "sourceType": "quasi-official",
          "sourceUrl": "https://www.man7.org/linux/man-pages/man1/find.1.html"
        }
      ]
    },
    "id:linux-tar-xzf": {
      "examples": [
        {
          "value": "tar -xzf archive.tar.gz",
          "description": "把 gzip 压缩的 tar 归档解压到当前目录"
        }
      ]
    },
    "id:linux-sed": {
      "keywords": [
        "替换",
        "取代",
        "文本替换",
        "批量替换",
        "正则替换"
      ],
      "examples": [
        {
          "value": "sed 's/旧文本/新文本/g' file.txt",
          "description": "预览把每行所有“旧文本”替换为“新文本”的结果"
        },
        {
          "value": "sed -i 's/旧文本/新文本/g' file.txt",
          "description": "直接修改文件中的匹配文本",
          "warning": "先运行不带 -i 的命令预览结果，并备份重要文件",
          "platformValues": {
            "mac": "sed -i '' 's/旧文本/新文本/g' file.txt",
            "linux": "sed -i 's/旧文本/新文本/g' file.txt"
          }
        }
      ]
    },
    "id:linux-awk": {
      "examples": [
        {
          "value": "awk '{print $1}' access.log",
          "description": "输出 access.log 每一行的第一列"
        }
      ]
    },
    "id:linux-tail-f": {
      "examples": [
        {
          "value": "tail -f app.log",
          "description": "持续显示 app.log 新追加的日志内容"
        }
      ]
    },
    "id:linux-chmod-x": {
      "examples": [
        {
          "value": "chmod +x scripts/deploy.sh",
          "description": "为部署脚本添加可执行权限",
          "warning": "会修改文件权限，请确认目标脚本可信且路径正确"
        }
      ]
    },
    "id:linux-ps-aux": {
      "examples": [
        {
          "value": "ps aux | grep node",
          "description": "列出进程并筛选包含 node 的进程"
        }
      ]
    },
    "id:linux-curl": {
      "examples": [
        {
          "value": "curl -i https://example.com/health",
          "description": "请求健康检查接口并显示响应头"
        }
      ]
    },
    "id:linux-ls-la": {
      "examples": [
        {
          "value": "ls -la",
          "description": "长格式列出当前目录所有文件（含隐藏文件），查看权限、大小和修改时间"
        }
      ]
    },
    "id:linux-cd": {
      "examples": [
        {
          "value": "cd ~/projects/app",
          "description": "切换当前工作目录到指定路径"
        }
      ]
    },
    "id:linux-cp-r": {
      "examples": [
        {
          "value": "cp -r src-dir backup-dir",
          "description": "递归复制整个目录及其内容到新位置"
        }
      ]
    },
    "id:linux-mv": {
      "examples": [
        {
          "value": "mv old.txt new.txt",
          "description": "重命名文件，或把文件移动到别的目录"
        }
      ]
    },
    "id:linux-rm": {
      "examples": [
        {
          "value": "rm temp.log",
          "description": "删除指定文件",
          "warning": "删除后不可恢复，执行前确认文件路径"
        }
      ]
    },
    "id:linux-cat": {
      "examples": [
        {
          "value": "cat README.md",
          "description": "把文件内容一次性输出到终端"
        }
      ]
    },
    "id:linux-less": {
      "examples": [
        {
          "value": "less app.log",
          "description": "分页浏览大文件，支持上下翻页和 / 搜索"
        }
      ]
    },
    "id:linux-tail": {
      "examples": [
        {
          "value": "tail -n 50 app.log",
          "description": "查看文件末尾若干行，常用于看最新日志"
        }
      ]
    },
    "id:linux-head": {
      "examples": [
        {
          "value": "head -n 20 README.md",
          "description": "查看文件开头若干行"
        }
      ]
    },
    "id:linux-chmod": {
      "examples": [
        {
          "value": "chmod 644 notes.txt",
          "description": "设置文件权限（644 = 所有者读写、其他人只读）",
          "warning": "会改变文件访问权限，确认数值与目标文件正确"
        }
      ]
    },
    "id:linux-find": {
      "examples": [
        {
          "value": "find . -name \"*.log\"",
          "description": "从当前目录递归查找匹配名字的文件"
        }
      ]
    },
    "id:linux-df": {
      "examples": [
        {
          "value": "df -h",
          "description": "以人类可读单位查看各磁盘分区的空间使用情况"
        }
      ]
    },
    "id:linux-du": {
      "examples": [
        {
          "value": "du -sh ./node_modules",
          "description": "汇总查看某个目录占用的磁盘空间"
        }
      ]
    },
    "id:linux-tar": {
      "examples": [
        {
          "value": "tar -czf backup.tar.gz ./src",
          "description": "把目录打包成 .tar.gz 压缩归档"
        }
      ]
    },
    "id:linux-ssh": {
      "examples": [
        {
          "value": "ssh user@example.com",
          "description": "登录到远程主机的命令行"
        }
      ]
    }
  },
  "openclaw": {
    "id:fbb67b7da30ad0b9": {
      "examples": [
        {
          "value": "/new",
          "description": "归档当前会话并开始一个全新会话"
        }
      ]
    },
    "id:4de151f193665748": {
      "examples": [
        {
          "value": "/compact 保留部署步骤和未解决问题",
          "description": "按指定重点压缩当前会话上下文"
        }
      ]
    },
    "id:5711ecd96a7fbf50": {
      "examples": [
        {
          "value": "/model status",
          "description": "查看当前会话正在使用的模型"
        }
      ]
    },
    "id:f5aa1833ac320abb": {
      "examples": [
        {
          "value": "/context detail",
          "description": "查看当前上下文的详细组成"
        }
      ]
    },
    "id:379f0ac8c7bb0032": {
      "examples": [
        {
          "value": "/usage cost",
          "description": "在回复底部显示费用信息"
        }
      ]
    },
    "id:327c9a6aff9a5e1a": {
      "examples": [
        {
          "value": "/restart",
          "description": "重启 OpenClaw 服务",
          "warning": "会短暂中断当前服务连接"
        }
      ]
    },
    "id:626e8b1b8d02a81f": {
      "examples": [
        {
          "value": "/status",
          "description": "查看 Gateway 运行时间、插件健康和当前状态"
        }
      ]
    },
    "id:f4ea834023a363bb": {
      "examples": [
        {
          "value": "/bash git status",
          "description": "在宿主机执行 shell 命令"
        }
      ]
    },
    "id:b8859b6ce868ca29": {
      "examples": [
        {
          "value": "openclaw doctor",
          "description": "检查配置、运行迁移并修复可识别问题",
          "warning": "可能修改本地配置，执行前建议备份"
        }
      ]
    },
    "id:4f4ab1642ae9639b": {
      "examples": [
        {
          "value": "openclaw gateway status",
          "description": "检查 Gateway 守护进程和 RPC 是否可达"
        }
      ]
    },
    "id:f4cef846aacdd257": {
      "examples": [
        {
          "value": "/name 登录重构",
          "description": "把当前会话命名为「登录重构」，便于以后检索"
        }
      ]
    },
    "id:febbc2fc35ffadef": {
      "examples": [
        {
          "value": "/skill commit-helper 生成本次提交信息",
          "description": "按名称调用 commit-helper 技能并传入输入"
        }
      ]
    },
    "id:c8e54a8ed187b5d7": {
      "examples": [
        {
          "value": "openclaw config set model.default gpt-5.5",
          "description": "把 openclaw.json 中 model.default 设为 gpt-5.5"
        }
      ]
    },
    "id:6abe2d5ff2cde5e4": {
      "examples": [
        {
          "value": "openclaw config get model.default",
          "description": "按路径读取 openclaw.json 中 model.default 的当前值",
          "sourceUrl": "https://docs.openclaw.ai/tools/slash-commands"
        }
      ]
    },
    "id:d42c008b96ed3378": {
      "examples": [
        {
          "value": "/fast on",
          "description": "开启快速模式，provider 映射为高优先级推理",
          "sourceUrl": "https://docs.openclaw.ai/tools/slash-commands"
        },
        {
          "value": "/fast default",
          "description": "恢复到 provider 的默认推理优先级",
          "sourceUrl": "https://docs.openclaw.ai/tools/slash-commands"
        },
        {
          "value": "/fast off",
          "description": "关闭快速模式",
          "sourceUrl": "https://docs.openclaw.ai/tools/slash-commands"
        }
      ]
    },
    "id:adf27b2485f22917": {
      "examples": [
        {
          "value": "/tools compact",
          "description": "以精简列表显示当前代理可用的工具",
          "sourceUrl": "https://docs.openclaw.ai/tools/slash-commands"
        },
        {
          "value": "/tools verbose",
          "description": "显示每个工具的完整描述与参数",
          "sourceUrl": "https://docs.openclaw.ai/tools/slash-commands"
        }
      ]
    },
    "id:7b374797e49c51d4": {
      "examples": [
        {
          "value": "/goal start 完成登录页重构并补测试",
          "description": "为当前会话设定一个持久追踪的目标",
          "sourceUrl": "https://docs.openclaw.ai/tools/slash-commands"
        },
        {
          "value": "/goal status",
          "description": "查看当前目标及完成进度",
          "sourceUrl": "https://docs.openclaw.ai/tools/slash-commands"
        },
        {
          "value": "/goal clear",
          "description": "清除目标，停止追踪",
          "sourceUrl": "https://docs.openclaw.ai/tools/slash-commands"
        }
      ]
    }
  },
  "opencode": {
    "id:bbdef6839d8b634d": {
      "examples": [
        {
          "value": "/new",
          "description": "清空当前上下文并开始新会话"
        }
      ]
    },
    "id:24c6e93d5df8e6b7": {
      "examples": [
        {
          "value": "/compact",
          "description": "压缩当前会话上下文以释放 token"
        }
      ]
    },
    "id:8dc0a4a63ab72090": {
      "examples": [
        {
          "value": "/undo",
          "description": "撤销最后一条消息以及相关文件改动",
          "warning": "需要在 Git 仓库中使用"
        }
      ]
    },
    "id:b73891070fc3e862": {
      "examples": [
        {
          "value": "/sessions",
          "description": "列出历史会话并切换到其中一个"
        }
      ]
    },
    "id:c957bff9c4115d34": {
      "examples": [
        {
          "value": "opencode run \"检查测试失败的原因\"",
          "description": "非交互执行一次任务并输出结果"
        }
      ]
    },
    "id:89592c78df3af08a": {
      "examples": [
        {
          "value": "opencode run -m anthropic/claude-sonnet \"总结改动\"",
          "description": "指定 provider/model 执行一次任务"
        }
      ]
    },
    "id:d83a296afac5d1b6": {
      "examples": [
        {
          "value": "/models",
          "description": "列出所有已配置提供商的可用模型"
        }
      ]
    },
    "id:e981f3605f403a15": {
      "examples": [
        {
          "value": "/editor",
          "description": "使用系统 EDITOR 编写较长的提示词"
        }
      ]
    },
    "id:9058643e35106a3d": {
      "examples": [
        {
          "value": "/export",
          "description": "将当前会话导出为 Markdown 并用编辑器打开"
        }
      ]
    },
    "id:55c9c7ac7c30244e": {
      "examples": [
        {
          "value": "opencode stats --days 7",
          "description": "查看最近 7 天的 token 用量和费用统计"
        }
      ]
    },
    "id:b68e3c4144d1eba3": {
      "examples": [
        {
          "value": "opencode mcp auth github",
          "description": "对名为 github 的 OAuth MCP 服务器发起认证"
        }
      ]
    },
    "id:ee4a4602d1d60c6e": {
      "examples": [
        {
          "value": "opencode plugin @opencode/git",
          "description": "安装 @opencode/git 插件并更新配置"
        }
      ]
    },
    "id:678e1b7014b20f8c": {
      "examples": [
        {
          "value": "opencode --agent build",
          "description": "以 build agent 启动一次会话"
        }
      ]
    }
  },
  "typora": {
    "id:55c6c5a47338ccfe": {
      "examples": [
        {
          "value": "# 一级标题",
          "description": "Markdown 一级标题的输入形式"
        }
      ]
    },
    "id:00d23027eb3ed071": {
      "examples": [
        {
          "value": "**重要内容**",
          "description": "Markdown 加粗文本的输入形式"
        }
      ]
    },
    "id:198d4e7754c88653": {
      "examples": [
        {
          "value": "[项目主页](https://example.com)",
          "description": "Markdown 超链接的输入形式"
        }
      ]
    },
    "id:6b03e4fa2cc02263": {
      "examples": [
        {
          "value": "| 名称 | 状态 |\n| --- | --- |\n| 示例 | 完成 |",
          "description": "一个两列表格的 Markdown 输入"
        }
      ]
    },
    "id:8ff5d4ebf926ac5b": {
      "examples": [
        {
          "value": "```js\nconsole.log('hello');\n```",
          "description": "带语言标记的 JavaScript 代码块"
        }
      ]
    },
    "id:5de8c2eaa7f4f55a": {
      "examples": [
        {
          "value": "按 Cmd+/（Win/Linux 为 Ctrl+/）",
          "description": "在所见即所得和 Markdown 源代码模式之间切换",
          "copyable": false
        }
      ]
    },
    "id:34740a0b6b63d659": {
      "examples": [
        {
          "value": "- 第一项\n- 第二项",
          "description": "Markdown 无序列表的输入形式"
        }
      ]
    },
    "id:c17f2a3e2652e1fd": {
      "examples": [
        {
          "value": "`npm test`",
          "description": "Markdown 行内代码的输入形式"
        }
      ]
    },
    "id:ccf9f836058feaa3": {
      "examples": [
        {
          "value": "![替代文字](./images/example.png)",
          "description": "Markdown 图片的输入形式"
        }
      ]
    },
    "id:0c90d93b678482f4": {
      "examples": [
        {
          "value": "按 Cmd+Shift+V（Win/Linux 为 Ctrl+Shift+V）",
          "description": "粘贴为纯文本，避免带入原格式",
          "copyable": false
        }
      ]
    }
  },
  "vs-code": {
    "id:f9a6d4cea270efda": {
      "examples": [
        {
          "value": "按 Cmd+Shift+P（Win/Linux 为 Ctrl+Shift+P），输入“Format Document”",
          "description": "搜索并执行编辑器命令",
          "copyable": false
        }
      ]
    },
    "id:696583bac075c29f": {
      "examples": [
        {
          "value": "按 Cmd/Ctrl+P，输入文件名的一部分",
          "description": "按名称快速打开项目文件",
          "copyable": false
        }
      ]
    },
    "id:81c63947817a7230": {
      "examples": [
        {
          "value": "把光标放在一行上，按 Option+Down（Win/Linux 为 Alt+Down）",
          "description": "把当前行向下移动",
          "copyable": false
        }
      ]
    },
    "id:56a5b42f076ba704": {
      "examples": [
        {
          "value": "按 Shift+Option+Down（Win/Linux 为 Shift+Alt+Down）",
          "description": "复制当前行并插入到下一行",
          "copyable": false
        }
      ]
    },
    "id:a335cac908c3235a": {
      "examples": [
        {
          "value": "选中一个变量名后连续按 Cmd/Ctrl+D",
          "description": "逐个选中后续同名文本，便于同时编辑",
          "copyable": false
        }
      ]
    },
    "id:e06504997d5cceb4": {
      "examples": [
        {
          "value": "按 Shift+Cmd+F（Win/Linux 为 Ctrl+Shift+F），输入关键词",
          "description": "在整个工作区跨文件搜索",
          "copyable": false
        }
      ]
    },
    "id:d82b6bc4bdf22a48": {
      "examples": [
        {
          "value": "按 Cmd+K 后再按 Cmd+S（Win/Linux 为 Ctrl+K Ctrl+S）",
          "description": "打开键盘快捷方式设置页面",
          "copyable": false
        }
      ]
    },
    "id:2b045bf8e6785064": {
      "examples": [
        {
          "value": "把光标放在要删除的行，按 Shift+Cmd+K（Win/Linux 为 Ctrl+Shift+K）",
          "description": "删除当前整行",
          "copyable": false
        }
      ]
    },
    "id:9aaf5a156bba5a10": {
      "examples": [
        {
          "value": "按 Cmd/Ctrl+F，输入要查找的文本",
          "description": "在当前文件中查找匹配内容",
          "copyable": false
        }
      ]
    },
    "id:15b4064d0d26f239": {
      "examples": [
        {
          "value": "按 Option+Cmd+F（Win/Linux 为 Ctrl+H），填写查找和替换内容",
          "description": "在当前文件中执行查找替换",
          "copyable": false
        }
      ]
    }
  }
};
  Object.entries(migrated).forEach(([toolId, entries]) => {
    modules[toolId] = { ...(modules[toolId] || {}), ...entries };
  });
}(typeof window !== "undefined" ? window : globalThis));
