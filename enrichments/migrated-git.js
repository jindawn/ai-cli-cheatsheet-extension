(function registerMigratedgitEnrichments(globalScope) {
  "use strict";
  const modules = globalScope.CHEATSHEET_ENRICHMENT_MODULES ||= {};
  modules["git"] = { ...(modules["git"] || {}), ...{
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
} };
}(typeof window !== "undefined" ? window : globalThis));
