// Generated from validated structured data. Manual edits must follow data/SCHEMA.md.
window.CHEATSHEET_DATA = window.CHEATSHEET_DATA || {};
window.CHEATSHEET_DATA["linux"] = {
  "meta": {
    "id": "linux",
    "name": "GNU/Linux CLI",
    "color": "#FCC624",
    "source": "第一方来源与确定性官方入口清单，核验于 2026-07-14",
    "builtIn": false,
    "sourceUrl": "https://www.man7.org/linux/man-pages/",
    "sourceTier": "quasi-official",
    "updatedAt": "2026-06-20",
    "contentCheckedAt": "2026-07-02",
    "sourceCheckedAt": "2026-07-02",
    "updatePolicy": "manual-only",
    "verificationStatus": "manual",
    "coverage": "官方入口全集；精确范围、组件与平台限制见 shared/official-inventories/linux.json",
    "platforms": [
      "linux",
      "mac"
    ],
    "order": 999,
    "sources": [
      {
        "id": "gnu-manuals",
        "title": "GNU manuals",
        "url": "https://www.gnu.org/software/coreutils/manual/",
        "kind": "official-doc",
        "maintainer": "GNU Project",
        "evidenceTier": "first-party",
        "lastVerifiedAt": "2026-06-21",
        "resolvedUrl": "https://www.gnu.org/software/coreutils/manual/",
        "pageTitle": "GNU manuals",
        "checkedAt": "2026-06-21",
        "purposes": [
          "command-existence",
          "option-semantics",
          "examples"
        ]
      },
      {
        "id": "linux-ps-man",
        "registryId": "linux-man7",
        "title": "ps(1) manual page",
        "url": "https://man7.org/linux/man-pages/man1/ps.1.html",
        "kind": "authoritative-reference",
        "maintainer": "Linux man-pages project / man7.org",
        "evidenceTier": "authoritative-community",
        "lastVerifiedAt": "2026-07-02",
        "resolvedUrl": "https://man7.org/linux/man-pages/man1/ps.1.html",
        "pageTitle": "ps(1) manual page",
        "checkedAt": "2026-07-02",
        "purposes": [
          "command-existence",
          "option-semantics",
          "examples"
        ]
      },
      {
        "id": "linux-kill-man",
        "registryId": "linux-man7",
        "title": "kill(1) manual page",
        "url": "https://man7.org/linux/man-pages/man1/kill.1.html",
        "kind": "authoritative-reference",
        "maintainer": "Linux man-pages project / man7.org",
        "evidenceTier": "authoritative-community",
        "lastVerifiedAt": "2026-07-02",
        "resolvedUrl": "https://man7.org/linux/man-pages/man1/kill.1.html",
        "pageTitle": "kill(1) manual page",
        "checkedAt": "2026-07-02",
        "purposes": [
          "command-existence",
          "option-semantics",
          "examples"
        ]
      },
      {
        "id": "linux-top-man",
        "registryId": "linux-man7",
        "title": "top(1) manual page",
        "url": "https://man7.org/linux/man-pages/man1/top.1.html",
        "kind": "authoritative-reference",
        "maintainer": "Linux man-pages project / man7.org",
        "evidenceTier": "authoritative-community",
        "lastVerifiedAt": "2026-07-02",
        "resolvedUrl": "https://man7.org/linux/man-pages/man1/top.1.html",
        "pageTitle": "top(1) manual page",
        "checkedAt": "2026-07-02",
        "purposes": [
          "command-existence",
          "option-semantics",
          "examples"
        ]
      },
      {
        "id": "linux-grep-man",
        "registryId": "linux-man7",
        "title": "grep(1) manual page",
        "url": "https://man7.org/linux/man-pages/man1/grep.1.html",
        "kind": "authoritative-reference",
        "maintainer": "Linux man-pages project / man7.org",
        "evidenceTier": "authoritative-community",
        "lastVerifiedAt": "2026-07-02",
        "resolvedUrl": "https://man7.org/linux/man-pages/man1/grep.1.html",
        "pageTitle": "grep(1) manual page",
        "checkedAt": "2026-07-02",
        "purposes": [
          "command-existence",
          "option-semantics",
          "examples"
        ]
      },
      {
        "id": "linux-find-man",
        "registryId": "linux-man7",
        "title": "find(1) manual page",
        "url": "https://man7.org/linux/man-pages/man1/find.1.html",
        "kind": "authoritative-reference",
        "maintainer": "Linux man-pages project / man7.org",
        "evidenceTier": "authoritative-community",
        "lastVerifiedAt": "2026-07-02",
        "resolvedUrl": "https://man7.org/linux/man-pages/man1/find.1.html",
        "pageTitle": "find(1) manual page",
        "checkedAt": "2026-07-02",
        "purposes": [
          "command-existence",
          "option-semantics",
          "examples"
        ]
      },
      {
        "id": "linux-diff-man",
        "registryId": "linux-man7",
        "title": "diff(1) manual page",
        "url": "https://man7.org/linux/man-pages/man1/diff.1.html",
        "kind": "authoritative-reference",
        "maintainer": "Linux man-pages project / man7.org",
        "evidenceTier": "authoritative-community",
        "lastVerifiedAt": "2026-07-02",
        "resolvedUrl": "https://man7.org/linux/man-pages/man1/diff.1.html",
        "pageTitle": "diff(1) manual page",
        "checkedAt": "2026-07-02",
        "purposes": [
          "command-existence",
          "option-semantics",
          "examples"
        ]
      },
      {
        "id": "linux-free-man",
        "registryId": "linux-man7",
        "title": "free(1) manual page",
        "url": "https://man7.org/linux/man-pages/man1/free.1.html",
        "kind": "authoritative-reference",
        "maintainer": "Linux man-pages project / man7.org",
        "evidenceTier": "authoritative-community",
        "lastVerifiedAt": "2026-07-02",
        "resolvedUrl": "https://man7.org/linux/man-pages/man1/free.1.html",
        "pageTitle": "free(1) manual page",
        "checkedAt": "2026-07-02",
        "purposes": [
          "command-existence",
          "option-semantics",
          "examples"
        ]
      },
      {
        "id": "linux-ping-man",
        "registryId": "linux-man7",
        "title": "ping(8) manual page",
        "url": "https://man7.org/linux/man-pages/man8/ping.8.html",
        "kind": "authoritative-reference",
        "maintainer": "Linux man-pages project / man7.org",
        "evidenceTier": "authoritative-community",
        "lastVerifiedAt": "2026-07-02",
        "resolvedUrl": "https://man7.org/linux/man-pages/man8/ping.8.html",
        "pageTitle": "ping(8) manual page",
        "checkedAt": "2026-07-02",
        "purposes": [
          "command-existence",
          "option-semantics",
          "examples"
        ]
      },
      {
        "id": "linux-bash-man",
        "registryId": "linux-man7",
        "title": "bash(1) manual page",
        "url": "https://man7.org/linux/man-pages/man1/bash.1.html",
        "kind": "authoritative-reference",
        "maintainer": "Linux man-pages project / man7.org",
        "evidenceTier": "authoritative-community",
        "lastVerifiedAt": "2026-07-02",
        "resolvedUrl": "https://man7.org/linux/man-pages/man1/bash.1.html",
        "pageTitle": "bash(1) manual page",
        "checkedAt": "2026-07-02",
        "purposes": [
          "command-existence",
          "option-semantics"
        ]
      },
      {
        "id": "linux-termios-man",
        "registryId": "linux-man7",
        "title": "termios(3) manual page",
        "url": "https://man7.org/linux/man-pages/man3/termios.3.html",
        "kind": "authoritative-reference",
        "maintainer": "Linux man-pages project / man7.org",
        "evidenceTier": "authoritative-community",
        "lastVerifiedAt": "2026-07-02",
        "resolvedUrl": "https://man7.org/linux/man-pages/man3/termios.3.html",
        "pageTitle": "termios(3) manual page",
        "checkedAt": "2026-07-02",
        "purposes": [
          "command-existence",
          "option-semantics"
        ]
      },
      {
        "id": "linux-less-man",
        "registryId": "linux-man7",
        "title": "less(1) manual page",
        "url": "https://man7.org/linux/man-pages/man1/less.1.html",
        "kind": "authoritative-reference",
        "maintainer": "Linux man-pages project / man7.org",
        "evidenceTier": "authoritative-community",
        "lastVerifiedAt": "2026-07-02",
        "resolvedUrl": "https://man7.org/linux/man-pages/man1/less.1.html",
        "pageTitle": "less(1) manual page",
        "checkedAt": "2026-07-02",
        "purposes": [
          "command-existence",
          "option-semantics"
        ]
      },
      {
        "id": "linux-curl-man",
        "registryId": "linux-man7",
        "title": "curl(1) manual page",
        "url": "https://man7.org/linux/man-pages/man1/curl.1.html",
        "kind": "authoritative-reference",
        "maintainer": "Linux man-pages project / man7.org",
        "evidenceTier": "authoritative-community",
        "lastVerifiedAt": "2026-07-02",
        "resolvedUrl": "https://man7.org/linux/man-pages/man1/curl.1.html",
        "pageTitle": "curl(1) manual page",
        "checkedAt": "2026-07-02",
        "purposes": [
          "command-existence",
          "option-semantics"
        ]
      },
      {
        "id": "linux-wget-man",
        "registryId": "linux-man7",
        "title": "wget(1) manual page",
        "url": "https://man7.org/linux/man-pages/man1/wget.1.html",
        "kind": "authoritative-reference",
        "maintainer": "Linux man-pages project / man7.org",
        "evidenceTier": "authoritative-community",
        "lastVerifiedAt": "2026-07-02",
        "resolvedUrl": "https://man7.org/linux/man-pages/man1/wget.1.html",
        "pageTitle": "wget(1) manual page",
        "checkedAt": "2026-07-02",
        "purposes": [
          "command-existence",
          "option-semantics"
        ]
      },
      {
        "id": "linux-tar-man",
        "registryId": "linux-man7",
        "title": "tar(1) manual page",
        "url": "https://man7.org/linux/man-pages/man1/tar.1.html",
        "kind": "authoritative-reference",
        "maintainer": "Linux man-pages project / man7.org",
        "evidenceTier": "authoritative-community",
        "lastVerifiedAt": "2026-07-02",
        "resolvedUrl": "https://man7.org/linux/man-pages/man1/tar.1.html",
        "pageTitle": "tar(1) manual page",
        "checkedAt": "2026-07-02",
        "purposes": [
          "command-existence",
          "option-semantics"
        ]
      },
      {
        "id": "linux-ssh-man",
        "registryId": "linux-man7",
        "title": "ssh(1) manual page",
        "url": "https://man7.org/linux/man-pages/man1/ssh.1.html",
        "kind": "authoritative-reference",
        "maintainer": "Linux man-pages project / man7.org",
        "evidenceTier": "authoritative-community",
        "lastVerifiedAt": "2026-07-02",
        "resolvedUrl": "https://man7.org/linux/man-pages/man1/ssh.1.html",
        "pageTitle": "ssh(1) manual page",
        "checkedAt": "2026-07-02",
        "purposes": [
          "command-existence",
          "option-semantics"
        ]
      },
      {
        "id": "linux-scp-man",
        "registryId": "linux-man7",
        "title": "scp(1) manual page",
        "url": "https://man7.org/linux/man-pages/man1/scp.1.html",
        "kind": "authoritative-reference",
        "maintainer": "Linux man-pages project / man7.org",
        "evidenceTier": "authoritative-community",
        "lastVerifiedAt": "2026-07-02",
        "resolvedUrl": "https://man7.org/linux/man-pages/man1/scp.1.html",
        "pageTitle": "scp(1) manual page",
        "checkedAt": "2026-07-02",
        "purposes": [
          "command-existence",
          "option-semantics"
        ]
      },
      {
        "id": "linux-sed-man",
        "registryId": "linux-man7",
        "title": "sed(1) manual page",
        "url": "https://man7.org/linux/man-pages/man1/sed.1.html",
        "kind": "authoritative-reference",
        "maintainer": "Linux man-pages project / man7.org",
        "evidenceTier": "authoritative-community",
        "lastVerifiedAt": "2026-07-02",
        "resolvedUrl": "https://man7.org/linux/man-pages/man1/sed.1.html",
        "pageTitle": "sed(1) manual page",
        "checkedAt": "2026-07-02",
        "purposes": [
          "command-existence",
          "option-semantics"
        ]
      },
      {
        "id": "linux-gawk-man",
        "registryId": "linux-man7",
        "title": "gawk(1) manual page",
        "url": "https://man7.org/linux/man-pages/man1/gawk.1.html",
        "kind": "authoritative-reference",
        "maintainer": "Linux man-pages project / man7.org",
        "evidenceTier": "authoritative-community",
        "lastVerifiedAt": "2026-07-02",
        "resolvedUrl": "https://man7.org/linux/man-pages/man1/gawk.1.html",
        "pageTitle": "gawk(1) manual page",
        "checkedAt": "2026-07-02",
        "purposes": [
          "command-existence",
          "option-semantics"
        ]
      },
      {
        "id": "linux-which-man",
        "registryId": "debian-manpages",
        "title": "which(1) — Debian manual page",
        "url": "https://manpages.debian.org/unstable/debianutils/which.1.en.html",
        "kind": "authoritative-reference",
        "maintainer": "Debian project",
        "evidenceTier": "authoritative-community",
        "lastVerifiedAt": "2026-07-02",
        "resolvedUrl": "https://manpages.debian.org/unstable/debianutils/which.1.en.html",
        "pageTitle": "which(1) — Debian manual page",
        "checkedAt": "2026-07-02",
        "purposes": [
          "command-existence",
          "option-semantics"
        ]
      },
      {
        "id": "linux-rm-man",
        "registryId": "linux-man7",
        "title": "rm(1) manual page",
        "url": "https://man7.org/linux/man-pages/man1/rm.1.html",
        "kind": "authoritative-reference",
        "maintainer": "Linux man-pages project / man7.org",
        "evidenceTier": "authoritative-community",
        "lastVerifiedAt": "2026-07-02",
        "resolvedUrl": "https://man7.org/linux/man-pages/man1/rm.1.html",
        "pageTitle": "rm(1) manual page",
        "checkedAt": "2026-07-02",
        "purposes": [
          "command-existence",
          "option-semantics"
        ]
      },
      {
        "id": "linux-chmod-man",
        "registryId": "linux-man7",
        "title": "chmod(1) manual page",
        "url": "https://man7.org/linux/man-pages/man1/chmod.1.html",
        "kind": "authoritative-reference",
        "maintainer": "Linux man-pages project / man7.org",
        "evidenceTier": "authoritative-community",
        "lastVerifiedAt": "2026-07-02",
        "resolvedUrl": "https://man7.org/linux/man-pages/man1/chmod.1.html",
        "pageTitle": "chmod(1) manual page",
        "checkedAt": "2026-07-02",
        "purposes": [
          "command-existence",
          "option-semantics"
        ]
      },
      {
        "id": "linux-chown-man",
        "registryId": "linux-man7",
        "title": "chown(1) manual page",
        "url": "https://man7.org/linux/man-pages/man1/chown.1.html",
        "kind": "authoritative-reference",
        "maintainer": "Linux man-pages project / man7.org",
        "evidenceTier": "authoritative-community",
        "lastVerifiedAt": "2026-07-02",
        "resolvedUrl": "https://man7.org/linux/man-pages/man1/chown.1.html",
        "pageTitle": "chown(1) manual page",
        "checkedAt": "2026-07-02",
        "purposes": [
          "command-existence",
          "option-semantics"
        ]
      }
    ],
    "references": [
      {
        "id": "linux-man7",
        "title": "Linux man-pages and curated project manuals",
        "url": "https://man7.org/linux/man-pages/index.html",
        "kind": "authoritative-reference",
        "maintainer": "Linux man-pages project / man7.org",
        "evidenceTier": "authoritative-community",
        "lastVerifiedAt": "2026-06-21",
        "resolvedUrl": "https://man7.org/linux/man-pages/index.html",
        "pageTitle": "Linux man-pages and curated project manuals",
        "checkedAt": "2026-06-21",
        "purposes": [
          "command-existence",
          "option-semantics",
          "examples"
        ]
      }
    ],
    "officialCoverage": {
      "scope": "all-command-entrypoints",
      "status": "complete",
      "total": 63,
      "covered": 63,
      "checkedAt": "2026-07-13",
      "sourceIds": [
        "gnu-manuals",
        "linux-ps-man",
        "linux-kill-man",
        "linux-top-man",
        "linux-grep-man",
        "linux-find-man",
        "linux-diff-man",
        "linux-free-man",
        "linux-ping-man",
        "linux-bash-man",
        "linux-termios-man",
        "linux-less-man",
        "linux-curl-man",
        "linux-wget-man",
        "linux-tar-man",
        "linux-ssh-man",
        "linux-scp-man",
        "linux-sed-man",
        "linux-gawk-man",
        "linux-which-man",
        "linux-rm-man",
        "linux-chmod-man",
        "linux-chown-man"
      ],
      "inventoryHash": "sha256:dcb5903b23794a8a13ebb7eef19b463e01a083782abe8248d0dbb344083a3409"
    }
  },
  "items": [
    {
      "cat": "flag",
      "cmd": "ls",
      "en": "List directory contents",
      "zh": "列出目录内容",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-ls",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "GNU manuals（检索 ls）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "列出目录内容",
        "List directory contents",
        "ls"
      ],
      "examples": [
        {
          "value": "ls",
          "description": "列出目录内容",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platforms": [
            "linux",
            "mac"
          ],
          "scenario": "在实际工作中需要列出目录内容时",
          "goal": "列出目录内容",
          "expected": "操作后，工具完成“列出目录内容”对应的行为；条件不满足时返回错误。",
          "caveat": "执行前确认当前目录、参数和工具版本与示例一致",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "GNU manuals（检索 ls）",
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
      "cmd": "ls -l",
      "en": "List with long format (permissions, size, date)",
      "zh": "长格式列出（权限、大小、日期）",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-ls-l",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "GNU manuals（检索 ls -l）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "格式化",
        "代码格式",
        "排版",
        "长格式列出（权限、大小、日期）",
        "List with long format (permissions, size, date)"
      ],
      "examples": [
        {
          "value": "ls -l",
          "description": "长格式列出（权限、大小、日期）",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platforms": [
            "linux",
            "mac"
          ],
          "scenario": "在实际工作中需要长格式列出（权限、大小、日期）时",
          "goal": "长格式列出（权限、大小、日期）",
          "expected": "操作后，工具完成“长格式列出（权限、大小、日期）”对应的行为；条件不满足时返回错误。",
          "caveat": "执行前确认当前目录、参数和工具版本与示例一致",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "GNU manuals（检索 ls -l）",
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
      "cmd": "ls -a",
      "en": "List all entries including hidden files",
      "zh": "列出所有条目（含隐藏文件）",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-ls-a",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "GNU manuals（检索 ls -a）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "列出所有条目（含隐藏文件）",
        "List all entries including hidden files",
        "ls"
      ],
      "examples": [
        {
          "value": "ls -a",
          "description": "列出所有条目（含隐藏文件）",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platforms": [
            "linux",
            "mac"
          ],
          "scenario": "在实际工作中需要列出所有条目（含隐藏文件）时",
          "goal": "列出所有条目（含隐藏文件）",
          "expected": "操作后，工具完成“列出所有条目（含隐藏文件）”对应的行为；条件不满足时返回错误。",
          "caveat": "执行前确认当前目录、参数和工具版本与示例一致",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "GNU manuals（检索 ls -a）",
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
      "cmd": "ls -la",
      "en": "Long format listing including hidden files",
      "zh": "长格式列出所有文件（含隐藏）",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-ls-la",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "GNU manuals（检索 ls -la）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "格式化",
        "代码格式",
        "排版",
        "长格式列出所有文件（含隐藏）",
        "Long format listing including hidden files"
      ],
      "examples": [
        {
          "value": "ls -la",
          "description": "长格式列出当前目录所有文件（含隐藏文件），查看权限、大小和修改时间",
          "scenario": "进入陌生目录后需要同时查看隐藏文件和权限",
          "goal": "获得文件类型、权限、所有者和时间信息",
          "expected": "终端显示包含隐藏项的长列表",
          "caveat": "目录很大时可配合 less 分页",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "gnu-manuals"
          ],
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "GNU manuals（检索 ls -la）",
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
      "cmd": "cd",
      "en": "Change the current working directory",
      "zh": "切换当前工作目录",
      "context": "shell-builtin",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-cd",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://www.gnu.org/software/coreutils/manual/ · cd",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "切换当前工作目录",
        "Change the current working directory",
        "cd"
      ],
      "examples": [
        {
          "value": "cd ~/projects/app",
          "description": "切换当前工作目录到指定路径",
          "scenario": "准备在另一个项目目录执行命令",
          "goal": "切换 shell 当前工作目录",
          "expected": "后续相对路径都基于新目录解析",
          "caveat": "执行前可用 pwd 确认当前位置",
          "sourceType": "quasi-official",
          "authorship": "editorial",
          "evidenceTier": "authoritative-community",
          "adaptation": "adapted",
          "sourceIds": [
            "linux-bash-man"
          ],
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://www.gnu.org/software/coreutils/manual/ · cd",
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
      "cmd": "cd ..",
      "en": "Go to parent directory",
      "zh": "返回上级目录",
      "context": "shell-builtin",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-cd-parent",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://www.gnu.org/software/coreutils/manual/ · cd ..",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "返回上级目录",
        "Go to parent directory",
        "cd"
      ],
      "examples": [
        {
          "value": "cd ..",
          "description": "返回上级目录",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platforms": [
            "linux",
            "mac"
          ],
          "scenario": "在实际工作中需要返回上级目录时",
          "goal": "返回上级目录",
          "expected": "操作后，工具完成“返回上级目录”对应的行为；条件不满足时返回错误。",
          "caveat": "执行前确认当前目录、参数和工具版本与示例一致",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://www.gnu.org/software/coreutils/manual/ · cd ..",
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
      "cmd": "pwd",
      "en": "Print working directory",
      "zh": "打印当前工作目录路径",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-pwd",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "GNU manuals（检索 pwd）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "打印当前工作目录路径",
        "Print working directory",
        "pwd"
      ],
      "examples": [
        {
          "value": "pwd",
          "description": "打印当前工作目录路径",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platforms": [
            "linux",
            "mac"
          ],
          "scenario": "在实际工作中需要打印当前工作目录路径时",
          "goal": "打印当前工作目录路径",
          "expected": "操作后，工具完成“打印当前工作目录路径”对应的行为；条件不满足时返回错误。",
          "caveat": "执行前确认当前目录、参数和工具版本与示例一致",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "GNU manuals（检索 pwd）",
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
      "cmd": "mkdir",
      "en": "Create directories",
      "zh": "创建目录",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-mkdir",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "GNU manuals（检索 mkdir）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "创建",
        "新建",
        "初始化",
        "创建目录",
        "Create directories",
        "mkdir"
      ],
      "examples": [
        {
          "value": "mkdir example-dir",
          "description": "创建目录",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platforms": [
            "linux",
            "mac"
          ],
          "scenario": "在实际工作中需要创建目录时",
          "goal": "创建目录",
          "expected": "操作后，工具完成“创建目录”对应的行为；条件不满足时返回错误。",
          "caveat": "执行前确认当前目录、参数和工具版本与示例一致",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "GNU manuals（检索 mkdir）",
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
      "cmd": "mkdir -p",
      "en": "Create parent directories as needed",
      "zh": "递归创建目录（含父目录）",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-mkdir-p",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "GNU manuals（检索 mkdir -p）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "创建",
        "新建",
        "初始化",
        "递归创建目录（含父目录）",
        "Create parent directories as needed",
        "mkdir"
      ],
      "examples": [
        {
          "value": "mkdir -p parent/example-dir",
          "description": "递归创建目录（含父目录）",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platforms": [
            "linux",
            "mac"
          ],
          "scenario": "在实际工作中需要递归创建目录（含父目录）时",
          "goal": "递归创建目录（含父目录）",
          "expected": "操作后，工具完成“递归创建目录（含父目录）”对应的行为；条件不满足时返回错误。",
          "caveat": "执行前确认当前目录、参数和工具版本与示例一致",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "GNU manuals（检索 mkdir -p）",
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
      "cmd": "cp",
      "en": "Copy files and directories",
      "zh": "复制文件或目录",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-cp",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "GNU manuals（检索 cp）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "复制",
        "克隆",
        "拷贝",
        "复制文件或目录",
        "Copy files and directories",
        "cp"
      ],
      "examples": [
        {
          "value": "cp source.txt copy.txt",
          "description": "复制文件或目录",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platforms": [
            "linux",
            "mac"
          ],
          "scenario": "在实际工作中需要复制文件或目录时",
          "goal": "复制文件或目录",
          "expected": "操作后，工具完成“复制文件或目录”对应的行为；条件不满足时返回错误。",
          "caveat": "执行前确认当前目录、参数和工具版本与示例一致",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "GNU manuals（检索 cp）",
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
      "cmd": "cp -r",
      "en": "Copy directories recursively",
      "zh": "递归复制目录",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-cp-r",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "GNU manuals（检索 cp -r）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "复制",
        "克隆",
        "拷贝",
        "递归复制目录",
        "Copy directories recursively",
        "cp"
      ],
      "examples": [
        {
          "value": "cp -r src-dir backup-dir",
          "description": "递归复制整个目录及其内容到新位置",
          "scenario": "在实际工作中需要递归复制目录时",
          "goal": "递归复制目录",
          "expected": "操作后，工具完成“递归复制整个目录及其内容到新位置”对应的行为；条件不满足时返回错误。",
          "caveat": "执行前确认当前目录、参数和工具版本与示例一致",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "gnu-manuals"
          ],
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "GNU manuals（检索 cp -r）",
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
      "cmd": "mv",
      "en": "Move or rename files and directories",
      "zh": "移动或重命名文件/目录",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-mv",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "GNU manuals（检索 mv）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "移动",
        "重命名",
        "改名",
        "移动或重命名文件/目录",
        "Move or rename files and directories",
        "mv"
      ],
      "examples": [
        {
          "value": "mv old.txt new.txt",
          "description": "重命名文件，或把文件移动到别的目录",
          "scenario": "在实际工作中需要移动或重命名文件/目录时",
          "goal": "移动或重命名文件/目录",
          "expected": "操作后，工具完成“重命名文件，或把文件移动到别的目录”对应的行为；条件不满足时返回错误。",
          "caveat": "执行前确认当前目录、参数和工具版本与示例一致",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "gnu-manuals"
          ],
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "GNU manuals（检索 mv）",
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
      "cmd": "rm",
      "en": "Remove files or directories",
      "zh": "删除文件或目录",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-rm",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence"
          ],
          "locator": "GNU manuals（检索 rm）",
          "checkedAt": "2026-06-21"
        },
        {
          "sourceId": "linux-rm-man",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://man7.org/linux/man-pages/man1/rm.1.html · NAME/DESCRIPTION（rm - remove files or directories）",
          "checkedAt": "2026-07-02"
        }
      ],
      "keywords": [
        "删除",
        "移除",
        "清理",
        "删除文件或目录",
        "Remove files or directories",
        "rm"
      ],
      "examples": [
        {
          "value": "rm temp.log",
          "description": "删除指定文件",
          "warning": "删除后不可恢复，执行前确认文件路径",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "gnu-manuals",
            "linux-rm-man"
          ],
          "copyable": false,
          "riskLevels": [
            "deleteOrOverwrite"
          ],
          "caveat": "删除后不可恢复，执行前确认文件路径；先用只读命令预览目标并保留备份",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "GNU manuals（检索 rm）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "清理不再需要的内容时，需要删除文件或目录，并先确认不会影响仍在使用的对象。",
          "goal": "删除文件或目录；使用 rm temp.log 完成这一步。",
          "expected": "操作后，界面完成“删除指定文件”对应的变化。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "rm -rf",
      "en": "Force remove directories recursively (use with caution)",
      "zh": "强制递归删除（谨慎使用）",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-rm-rf",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence"
          ],
          "locator": "GNU manuals（检索 rm -rf）",
          "checkedAt": "2026-06-21"
        },
        {
          "sourceId": "linux-rm-man",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://man7.org/linux/man-pages/man1/rm.1.html · 选项 -r/-R（原文：\"remove directories and their contents recursively\"）、-f（原文：\"ignore nonexistent files and arguments, never prompt\"）",
          "checkedAt": "2026-07-02"
        }
      ],
      "keywords": [
        "删除",
        "移除",
        "清理",
        "强制递归删除（谨慎使用）",
        "Force remove directories recursively (use with caution)",
        "rm"
      ],
      "examples": [
        {
          "value": "rm -rf ./build-temp",
          "description": "递归删除示例临时目录且不再确认",
          "warning": "不可恢复；执行前先用 ls 检查目标路径",
          "scenario": "已确认某个临时目录可以永久删除",
          "goal": "递归删除目录且不逐项确认",
          "expected": "目标路径及内容不可恢复地消失",
          "caveat": "先用 realpath 和 ls 检查目标，能用回收站工具时优先使用",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "gnu-manuals",
            "linux-rm-man"
          ],
          "copyable": false,
          "riskLevels": [
            "deleteOrOverwrite"
          ],
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "GNU manuals（检索 rm -rf）",
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
      "cmd": "touch",
      "en": "Create empty file or update timestamp",
      "zh": "创建空文件或更新时间戳",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-touch",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "GNU manuals（检索 touch）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "创建",
        "新建",
        "初始化",
        "创建空文件或更新时间戳",
        "Create empty file or update timestamp",
        "touch"
      ],
      "examples": [
        {
          "value": "touch notes.txt",
          "description": "创建空文件或更新时间戳",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platforms": [
            "linux",
            "mac"
          ],
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "GNU manuals（检索 touch）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "准备新的工作环境或资源时，需要创建空文件或更新时间戳，让后续步骤具备所需入口。",
          "goal": "创建空文件或更新时间戳；使用 touch notes.txt 完成这一步。",
          "expected": "执行成功后，创建空文件或更新时间戳。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "cat",
      "en": "Concatenate and print file contents",
      "zh": "查看或拼接文件内容",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-cat",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "GNU manuals（检索 cat）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "查看或拼接文件内容",
        "Concatenate and print file contents",
        "cat"
      ],
      "examples": [
        {
          "value": "cat README.md",
          "description": "把文件内容一次性输出到终端",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "gnu-manuals"
          ],
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "GNU manuals（检索 cat）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先查看或拼接文件内容，确认当前状态与预期一致。",
          "goal": "查看或拼接文件内容；使用 cat README.md 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“把文件内容一次性输出到终端”对应的信息。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "less",
      "en": "View file contents page by page",
      "zh": "分页浏览文件内容",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-less",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://www.gnu.org/software/coreutils/manual/ · less",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "分页浏览文件内容",
        "View file contents page by page",
        "less"
      ],
      "examples": [
        {
          "value": "less app.log",
          "description": "分页浏览大文件，支持上下翻页和 / 搜索",
          "sourceType": "quasi-official",
          "authorship": "editorial",
          "evidenceTier": "authoritative-community",
          "adaptation": "adapted",
          "sourceIds": [
            "linux-less-man"
          ],
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://www.gnu.org/software/coreutils/manual/ · less",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "终端中的当前任务需要“分页浏览文件内容”，因此要调用对应的官方命令入口。",
          "goal": "分页浏览文件内容；使用 less app.log 完成这一步。",
          "expected": "执行成功后，分页浏览大文件，支持上下翻页和 / 搜索。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "head",
      "en": "Output the first part of files",
      "zh": "输出文件开头部分",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-head",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "GNU manuals（检索 head）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "输出文件开头部分",
        "Output the first part of files",
        "head"
      ],
      "examples": [
        {
          "value": "head -n 20 README.md",
          "description": "查看文件开头若干行",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "gnu-manuals"
          ],
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "GNU manuals（检索 head）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "终端中的当前任务需要“输出文件开头部分”，因此要调用对应的官方命令入口。",
          "goal": "输出文件开头部分；使用 head -n 20 README.md 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“查看文件开头若干行”对应的信息。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "tail",
      "en": "Output the last part of files",
      "zh": "输出文件末尾部分",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-tail",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "GNU manuals（检索 tail）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "输出文件末尾部分",
        "Output the last part of files",
        "tail"
      ],
      "examples": [
        {
          "value": "tail -n 50 app.log",
          "description": "查看文件末尾若干行，常用于看最新日志",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "gnu-manuals"
          ],
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "GNU manuals（检索 tail）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "终端中的当前任务需要“输出文件末尾部分”，因此要调用对应的官方命令入口。",
          "goal": "输出文件末尾部分；使用 tail -n 50 app.log 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“查看文件末尾若干行，常用于看最新日志”对应的信息。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "tail -f",
      "en": "Follow file growth in real time",
      "zh": "实时追踪文件新增内容",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-tail-f",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "GNU manuals（检索 tail -f）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "实时追踪文件新增内容",
        "Follow file growth in real time",
        "tail"
      ],
      "examples": [
        {
          "value": "tail -f app.log",
          "description": "持续显示 app.log 新追加的日志内容",
          "scenario": "服务运行中需要持续观察新日志",
          "goal": "跟踪文件末尾追加内容",
          "expected": "新日志写入时实时显示",
          "caveat": "日志轮转后可能需要 -F 才能继续跟踪",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "gnu-manuals"
          ],
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "GNU manuals（检索 tail -f）",
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
      "cmd": "chmod",
      "en": "Change file mode bits (permissions)",
      "zh": "修改文件权限",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-chmod",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence"
          ],
          "locator": "GNU manuals（检索 chmod）",
          "checkedAt": "2026-06-21"
        },
        {
          "sourceId": "linux-chmod-man",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://man7.org/linux/man-pages/man1/chmod.1.html · NAME（chmod - change file mode bits）",
          "checkedAt": "2026-07-02"
        }
      ],
      "keywords": [
        "修改文件权限",
        "Change file mode bits (permissions)",
        "chmod"
      ],
      "examples": [
        {
          "value": "chmod 644 notes.txt",
          "description": "设置文件权限（644 = 所有者读写、其他人只读）",
          "warning": "会改变文件访问权限，确认数值与目标文件正确",
          "scenario": "脚本权限错误或文件访问范围不符合预期",
          "goal": "设置明确的所有者、组和其他用户权限",
          "expected": "文件模式位发生变化",
          "caveat": "先用 ls -l 检查，避免无意开放敏感文件",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "gnu-manuals",
            "linux-chmod-man"
          ],
          "copyable": false,
          "riskLevels": [
            "permissionChange"
          ],
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "GNU manuals（检索 chmod）",
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
      "cmd": "chmod +x",
      "en": "Add execute permission",
      "zh": "添加可执行权限",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-chmod-x",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence"
          ],
          "locator": "GNU manuals（检索 chmod +x）",
          "checkedAt": "2026-06-21"
        },
        {
          "sourceId": "linux-chmod-man",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://man7.org/linux/man-pages/man1/chmod.1.html · 运算符 + 与权限位 x（原文：\"The operator + causes the selected file mode bits to be added\" · \"execute (or search for directories) (x)\"）",
          "checkedAt": "2026-07-02"
        }
      ],
      "keywords": [
        "添加可执行权限",
        "Add execute permission",
        "chmod"
      ],
      "examples": [
        {
          "value": "chmod +x scripts/deploy.sh",
          "description": "为部署脚本添加可执行权限",
          "warning": "会修改文件权限，请确认目标脚本可信且路径正确",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "gnu-manuals",
            "linux-chmod-man"
          ],
          "copyable": false,
          "riskLevels": [
            "permissionChange"
          ],
          "caveat": "会修改文件权限，请确认目标脚本可信且路径正确；先用只读命令预览目标并保留备份",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "GNU manuals（检索 chmod +x）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "准备新的工作环境或资源时，需要添加可执行权限，让后续步骤具备所需入口。",
          "goal": "添加可执行权限；使用 chmod +x scripts/deploy.sh 完成这一步。",
          "expected": "操作后，界面完成“为部署脚本添加可执行权限”对应的变化。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "chown",
      "en": "Change file owner and group",
      "zh": "修改文件所有者",
      "platforms": [
        "linux"
      ],
      "id": "linux-chown",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence"
          ],
          "locator": "GNU manuals（检索 chown）",
          "checkedAt": "2026-06-21"
        },
        {
          "sourceId": "linux-chown-man",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://man7.org/linux/man-pages/man1/chown.1.html · NAME/DESCRIPTION（原文：\"chown - change file owner and group\" · \"chown changes the user and/or group ownership of each given file\"）",
          "checkedAt": "2026-07-02"
        }
      ],
      "keywords": [
        "修改文件所有者",
        "Change file owner and group",
        "chown"
      ],
      "examples": [
        {
          "value": "chown user:group notes.txt",
          "description": "修改文件所有者",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "warning": "此操作会改变文件权限或所有者，请确认目标和权限值",
          "riskLevels": [
            "permissionChange"
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "此操作会改变文件权限或所有者，请确认目标和权限值；先用只读命令预览目标并保留备份",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "GNU manuals（检索 chown）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "正在GNU/Linux CLI中完成“修改文件所有者”这一步，需要用默认交互入口减少界面切换。",
          "goal": "修改文件所有者；使用 chown user:group notes.txt 完成这一步。",
          "expected": "操作后，界面完成“修改文件所有者”对应的变化。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "ps",
      "en": "Report process status",
      "zh": "查看进程状态",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-ps",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://www.gnu.org/software/coreutils/manual/ · ps",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "查看进程状态",
        "Report process status",
        "ps"
      ],
      "examples": [
        {
          "value": "ps",
          "description": "查看进程状态",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platforms": [
            "linux",
            "mac"
          ],
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://www.gnu.org/software/coreutils/manual/ · ps",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先查看进程状态，确认当前状态与预期一致。",
          "goal": "查看进程状态；使用 ps 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“查看进程状态”对应的信息。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "ps aux",
      "en": "List all running processes with details",
      "zh": "列出所有运行进程及详情",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-ps-aux",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://www.gnu.org/software/coreutils/manual/ · ps aux",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "列出所有运行进程及详情",
        "List all running processes with details",
        "ps"
      ],
      "examples": [
        {
          "value": "ps aux | grep node",
          "description": "列出进程并筛选包含 node 的进程",
          "sourceType": "quasi-official",
          "authorship": "editorial",
          "evidenceTier": "authoritative-community",
          "adaptation": "adapted",
          "sourceIds": [
            "linux-ps-man"
          ],
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://www.gnu.org/software/coreutils/manual/ · ps aux",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先列出所有运行进程及详情，确认当前状态与预期一致。",
          "goal": "列出所有运行进程及详情；使用 ps aux | grep node 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“列出进程并筛选包含 node 的进程”对应的信息。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "kill",
      "en": "Send a signal to a process",
      "zh": "向进程发送信号",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-kill",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://www.gnu.org/software/coreutils/manual/ · kill",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "向进程发送信号",
        "Send a signal to a process",
        "kill"
      ],
      "examples": [
        {
          "value": "kill 12345",
          "description": "向进程发送信号",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platforms": [
            "linux",
            "mac"
          ],
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://www.gnu.org/software/coreutils/manual/ · kill",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "终端中的当前任务需要“向进程发送信号”，因此要调用对应的官方命令入口。",
          "goal": "向进程发送信号；使用 kill 12345 完成这一步。",
          "expected": "执行成功后，向进程发送信号。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "kill -9",
      "en": "Force kill a process (SIGKILL)",
      "zh": "强制终止进程",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-kill-9",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://www.gnu.org/software/coreutils/manual/ · kill -9",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "强制终止进程",
        "Force kill a process (SIGKILL)",
        "kill"
      ],
      "examples": [
        {
          "value": "kill -9 12345",
          "description": "强制终止进程",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "warning": "此操作会强制终止或重启进程，可能中断正在进行的工作",
          "riskLevels": [
            "processDisruption"
          ],
          "platforms": [
            "linux",
            "mac"
          ],
          "caveat": "此操作会强制终止或重启进程，可能中断正在进行的工作；先用只读命令预览目标并保留备份",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://www.gnu.org/software/coreutils/manual/ · kill -9",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "正在GNU/Linux CLI中完成“强制终止进程”这一步，需要用默认交互入口减少界面切换。",
          "goal": "强制终止进程；使用 kill -9 12345 完成这一步。",
          "expected": "操作后，界面完成“强制终止进程”对应的变化。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "top",
      "en": "Display real-time process activity",
      "zh": "实时显示进程活动",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-top",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://www.gnu.org/software/coreutils/manual/ · top",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "实时显示进程活动",
        "Display real-time process activity",
        "top"
      ],
      "examples": [
        {
          "value": "top",
          "description": "实时显示进程活动",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platforms": [
            "linux",
            "mac"
          ],
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://www.gnu.org/software/coreutils/manual/ · top",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先实时显示进程活动，确认当前状态与预期一致。",
          "goal": "实时显示进程活动；使用 top 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“实时显示进程活动”对应的信息。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "grep",
      "en": "Search text patterns in files",
      "zh": "在文件中搜索匹配文本",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-grep",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://www.gnu.org/software/coreutils/manual/ · grep",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "搜索",
        "查找",
        "定位",
        "在文件中搜索匹配文本",
        "Search text patterns in files",
        "grep"
      ],
      "examples": [
        {
          "value": "grep \"TODO\" README.md",
          "description": "在文件中搜索匹配文本",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platforms": [
            "linux",
            "mac"
          ],
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://www.gnu.org/software/coreutils/manual/ · grep",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "终端中的当前任务需要“在文件中搜索匹配文本”，因此要调用对应的官方命令入口。",
          "goal": "在文件中搜索匹配文本；使用 grep \"TODO\" README.md 完成这一步。",
          "expected": "执行成功后，在文件中搜索匹配文本。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "grep -r",
      "en": "Recursively search in directory",
      "zh": "递归搜索目录中匹配文本",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-grep-r",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://www.gnu.org/software/coreutils/manual/ · grep -r",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "搜索",
        "查找",
        "定位",
        "递归搜索目录中匹配文本",
        "Recursively search in directory",
        "grep"
      ],
      "examples": [
        {
          "value": "grep -r \"TODO\" ./src",
          "description": "递归查找 src 目录中包含 TODO 的行",
          "sourceType": "quasi-official",
          "scenario": "需要在源码目录中定位某段文本",
          "goal": "递归找出包含关键词的文件和行",
          "expected": "输出匹配文件路径与文本行",
          "caveat": "二进制文件或大型依赖目录可能产生噪声",
          "authorship": "editorial",
          "evidenceTier": "authoritative-community",
          "adaptation": "adapted",
          "sourceIds": [
            "linux-grep-man"
          ],
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://www.gnu.org/software/coreutils/manual/ · grep -r",
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
      "cmd": "grep -i",
      "en": "Case-insensitive search",
      "zh": "忽略大小写搜索",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-grep-i",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://www.gnu.org/software/coreutils/manual/ · grep -i",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "搜索",
        "查找",
        "定位",
        "忽略大小写搜索",
        "Case-insensitive search",
        "grep"
      ],
      "examples": [
        {
          "value": "grep -i \"error\" app.log",
          "description": "忽略大小写搜索",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platforms": [
            "linux",
            "mac"
          ],
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://www.gnu.org/software/coreutils/manual/ · grep -i",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "终端中的当前任务需要“忽略大小写搜索”，因此要调用对应的官方命令入口。",
          "goal": "忽略大小写搜索；使用 grep -i \"error\" app.log 完成这一步。",
          "expected": "执行成功后，忽略大小写搜索。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "find",
      "en": "Search for files in a directory hierarchy",
      "zh": "在目录层级中搜索文件",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-find",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://www.gnu.org/software/coreutils/manual/ · find",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "搜索",
        "查找",
        "定位",
        "在目录层级中搜索文件",
        "Search for files in a directory hierarchy",
        "find"
      ],
      "examples": [
        {
          "value": "find . -name \"*.log\"",
          "description": "从当前目录递归查找匹配名字的文件",
          "sourceType": "quasi-official",
          "authorship": "editorial",
          "evidenceTier": "authoritative-community",
          "adaptation": "adapted",
          "sourceIds": [
            "linux-find-man"
          ],
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://www.gnu.org/software/coreutils/manual/ · find",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "终端中的当前任务需要“在目录层级中搜索文件”，因此要调用对应的官方命令入口。",
          "goal": "在目录层级中搜索文件；使用 find . -name \"*.log\" 完成这一步。",
          "expected": "执行成功后，从当前目录递归查找匹配名字的文件。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "find . -name",
      "en": "Find files by name pattern",
      "zh": "按名称模式查找文件",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-find-name",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://www.gnu.org/software/coreutils/manual/ · find . -name",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "搜索",
        "查找",
        "定位",
        "按名称模式查找文件",
        "Find files by name pattern",
        "find"
      ],
      "examples": [
        {
          "value": "find . -name \"*.log\"",
          "description": "从当前目录递归查找所有 .log 文件",
          "sourceType": "quasi-official",
          "scenario": "只知道文件名模式，不知道具体目录",
          "goal": "递归定位匹配名称的文件",
          "expected": "输出当前目录树下的匹配路径",
          "caveat": "复杂条件注意括号和 shell 通配符转义",
          "authorship": "editorial",
          "evidenceTier": "authoritative-community",
          "adaptation": "adapted",
          "sourceIds": [
            "linux-find-man"
          ],
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://www.gnu.org/software/coreutils/manual/ · find . -name",
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
      "cmd": "sort",
      "en": "Sort lines of text",
      "zh": "排序文本行",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-sort",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "GNU manuals（检索 sort）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "排序文本行",
        "Sort lines of text",
        "sort"
      ],
      "examples": [
        {
          "value": "sort names.txt",
          "description": "排序文本行",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platforms": [
            "linux",
            "mac"
          ],
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "GNU manuals（检索 sort）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "终端中的当前任务需要“排序文本行”，因此要调用对应的官方命令入口。",
          "goal": "排序文本行；使用 sort names.txt 完成这一步。",
          "expected": "执行成功后，排序文本行。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "uniq",
      "en": "Report or omit repeated lines",
      "zh": "报告或过滤重复行",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-uniq",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "GNU manuals（检索 uniq）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "报告或过滤重复行",
        "Report or omit repeated lines",
        "uniq"
      ],
      "examples": [
        {
          "value": "uniq sorted-names.txt",
          "description": "报告或过滤重复行",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platforms": [
            "linux",
            "mac"
          ],
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "GNU manuals（检索 uniq）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "终端中的当前任务需要“报告或过滤重复行”，因此要调用对应的官方命令入口。",
          "goal": "报告或过滤重复行；使用 uniq sorted-names.txt 完成这一步。",
          "expected": "执行成功后，报告或过滤重复行。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "wc",
      "en": "Count lines, words, and characters",
      "zh": "统计行数、单词数、字符数",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-wc",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "GNU manuals（检索 wc）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "统计行数、单词数、字符数",
        "Count lines, words, and characters",
        "wc"
      ],
      "examples": [
        {
          "value": "wc README.md",
          "description": "统计行数、单词数、字符数",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platforms": [
            "linux",
            "mac"
          ],
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "GNU manuals（检索 wc）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先统计行数、单词数、字符数，确认当前状态与预期一致。",
          "goal": "统计行数、单词数、字符数；使用 wc README.md 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“统计行数、单词数、字符数”对应的信息。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "wc -l",
      "en": "Count lines",
      "zh": "统计行数",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-wc-l",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "GNU manuals（检索 wc -l）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "统计行数",
        "Count lines",
        "wc"
      ],
      "examples": [
        {
          "value": "wc -l",
          "description": "统计行数",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platforms": [
            "linux",
            "mac"
          ],
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "GNU manuals（检索 wc -l）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先统计行数，确认当前状态与预期一致。",
          "goal": "统计行数；使用 wc -l 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“统计行数”对应的信息。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "diff",
      "en": "Compare files line by line",
      "zh": "逐行比较文件差异",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-diff",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://www.gnu.org/software/coreutils/manual/ · diff",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "逐行比较文件差异",
        "Compare files line by line",
        "diff"
      ],
      "examples": [
        {
          "value": "diff old.txt new.txt",
          "description": "逐行比较文件差异",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platforms": [
            "linux",
            "mac"
          ],
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://www.gnu.org/software/coreutils/manual/ · diff",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "终端中的当前任务需要“逐行比较文件差异”，因此要调用对应的官方命令入口。",
          "goal": "逐行比较文件差异；使用 diff old.txt new.txt 完成这一步。",
          "expected": "执行成功后，逐行比较文件差异。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "df -h",
      "en": "Show disk space usage in human-readable format",
      "zh": "查看磁盘空间使用（人类可读）",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-df",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "GNU manuals（检索 df -h）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "格式化",
        "代码格式",
        "排版",
        "查看磁盘空间使用（人类可读）",
        "Show disk space usage in human-readable format"
      ],
      "examples": [
        {
          "value": "df -h",
          "description": "以人类可读单位查看各磁盘分区的空间使用情况",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "gnu-manuals"
          ],
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "GNU manuals（检索 df -h）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先查看磁盘空间使用（人类可读），确认当前状态与预期一致。",
          "goal": "查看磁盘空间使用（人类可读）；使用 df -h 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“以人类可读单位查看各磁盘分区的空间使用情况”对应的信息。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "du -sh",
      "en": "Show directory size summary",
      "zh": "查看目录占用空间（汇总）",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-du",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "GNU manuals（检索 du -sh）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "查看目录占用空间（汇总）",
        "Show directory size summary",
        "du"
      ],
      "examples": [
        {
          "value": "du -sh ./node_modules",
          "description": "汇总查看某个目录占用的磁盘空间",
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "gnu-manuals"
          ],
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "GNU manuals（检索 du -sh）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先查看目录占用空间（汇总），确认当前状态与预期一致。",
          "goal": "查看目录占用空间（汇总）；使用 du -sh ./node_modules 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“汇总查看某个目录占用的磁盘空间”对应的信息。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "free -h",
      "en": "Display memory usage in human-readable format",
      "zh": "查看内存使用（人类可读）",
      "platforms": [
        "linux"
      ],
      "id": "linux-free",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://www.gnu.org/software/coreutils/manual/ · free -h",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "格式化",
        "代码格式",
        "排版",
        "查看内存使用（人类可读）",
        "Display memory usage in human-readable format"
      ],
      "examples": [
        {
          "value": "free -h",
          "description": "查看内存使用（人类可读）",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platforms": [
            "linux"
          ],
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://www.gnu.org/software/coreutils/manual/ · free -h",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先查看内存使用（人类可读），确认当前状态与预期一致。",
          "goal": "查看内存使用（人类可读）；使用 free -h 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“查看内存使用（人类可读）”对应的信息。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "curl",
      "en": "Transfer data from or to a server",
      "zh": "从/向服务器传输数据",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-curl",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://www.gnu.org/software/coreutils/manual/ · curl",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "从/向服务器传输数据",
        "Transfer data from or to a server",
        "curl"
      ],
      "examples": [
        {
          "value": "curl -i https://example.com/health",
          "description": "请求健康检查接口并显示响应头",
          "scenario": "排查接口是否可达以及返回头是否正确",
          "goal": "直接请求 HTTP 端点观察响应",
          "expected": "终端显示状态头和响应体",
          "caveat": "生产接口避免在命令历史中写入密钥",
          "sourceType": "quasi-official",
          "authorship": "editorial",
          "evidenceTier": "authoritative-community",
          "adaptation": "adapted",
          "sourceIds": [
            "linux-curl-man"
          ],
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://www.gnu.org/software/coreutils/manual/ · curl",
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
      "cmd": "wget",
      "en": "Non-interactive network downloader",
      "zh": "非交互式网络下载",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-wget",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://www.gnu.org/software/coreutils/manual/ · wget",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "非交互式网络下载",
        "Non-interactive network downloader",
        "wget"
      ],
      "examples": [
        {
          "value": "wget https://example.com/archive.zip",
          "description": "非交互式网络下载",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platforms": [
            "linux",
            "mac"
          ],
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://www.gnu.org/software/coreutils/manual/ · wget",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "终端中的当前任务需要“非交互式网络下载”，因此要调用对应的官方命令入口。",
          "goal": "非交互式网络下载；使用 wget https://example.com/archive.zip 完成这一步。",
          "expected": "执行成功后，非交互式网络下载。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "tar",
      "en": "Create or extract archive files",
      "zh": "创建或解压归档文件",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-tar",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://www.gnu.org/software/coreutils/manual/ · tar",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "创建",
        "新建",
        "初始化",
        "创建或解压归档文件",
        "Create or extract archive files",
        "tar"
      ],
      "examples": [
        {
          "value": "tar -czf backup.tar.gz ./src",
          "description": "把目录打包成 .tar.gz 压缩归档",
          "sourceType": "quasi-official",
          "authorship": "editorial",
          "evidenceTier": "authoritative-community",
          "adaptation": "adapted",
          "sourceIds": [
            "linux-tar-man"
          ],
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://www.gnu.org/software/coreutils/manual/ · tar",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "准备新的工作环境或资源时，需要创建或解压归档文件，让后续步骤具备所需入口。",
          "goal": "创建或解压归档文件；使用 tar -czf backup.tar.gz ./src 完成这一步。",
          "expected": "执行成功后，把目录打包成 .tar.gz 压缩归档。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "tar -xzf",
      "en": "Extract a gzipped tar archive",
      "zh": "解压 .tar.gz 归档",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-tar-xzf",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://www.gnu.org/software/coreutils/manual/ · tar -xzf",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "解压 .tar.gz 归档",
        "Extract a gzipped tar archive",
        "tar"
      ],
      "examples": [
        {
          "value": "tar -xzf archive.tar.gz",
          "description": "把 gzip 压缩的 tar 归档解压到当前目录",
          "scenario": "收到 gzip 压缩归档，需要查看或解压内容",
          "goal": "把归档恢复为目录和文件",
          "expected": "文件写入当前目录",
          "caveat": "先用 tar -tzf 查看路径，避免覆盖同名文件",
          "sourceType": "quasi-official",
          "authorship": "editorial",
          "evidenceTier": "authoritative-community",
          "adaptation": "adapted",
          "sourceIds": [
            "linux-tar-man"
          ],
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://www.gnu.org/software/coreutils/manual/ · tar -xzf",
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
      "cmd": "tar -czf",
      "en": "Create a gzipped tar archive",
      "zh": "创建 .tar.gz 归档",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-tar-czf",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://www.gnu.org/software/coreutils/manual/ · tar -czf",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "创建",
        "新建",
        "初始化",
        "创建 .tar.gz 归档",
        "Create a gzipped tar archive",
        "tar"
      ],
      "examples": [
        {
          "value": "tar -czf archive.tar.gz example-dir",
          "description": "创建 .tar.gz 归档",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platforms": [
            "linux",
            "mac"
          ],
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://www.gnu.org/software/coreutils/manual/ · tar -czf",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "准备新的工作环境或资源时，需要创建 .tar.gz 归档，让后续步骤具备所需入口。",
          "goal": "创建 .tar.gz 归档；使用 tar -czf archive.tar.gz example-dir 完成这一步。",
          "expected": "执行成功后，创建 .tar.gz 归档。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "chmod 755",
      "en": "Set rwx for owner, rx for group/others",
      "zh": "设置所有者可读写执行、组和其他可读执行",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-chmod-755",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence"
          ],
          "locator": "GNU manuals（检索 chmod 755）",
          "checkedAt": "2026-06-21"
        },
        {
          "sourceId": "linux-chmod-man",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://man7.org/linux/man-pages/man1/chmod.1.html · 数字模式说明（原文：\"A numeric mode is from one to four octal digits...The second digit selects permissions for the user who owns the file\"）",
          "checkedAt": "2026-07-02"
        }
      ],
      "keywords": [
        "配置",
        "设置",
        "偏好",
        "设置所有者可读写执行、组和其他可读执行",
        "Set rwx for owner, rx for group/others",
        "chmod"
      ],
      "examples": [
        {
          "value": "chmod 755 scripts/deploy.sh",
          "description": "设置所有者可读写执行、组和其他可读执行",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "warning": "此操作会改变文件权限或所有者，请确认目标和权限值",
          "riskLevels": [
            "permissionChange"
          ],
          "platforms": [
            "linux",
            "mac"
          ],
          "caveat": "此操作会改变文件权限或所有者，请确认目标和权限值；先用只读命令预览目标并保留备份",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "GNU manuals（检索 chmod 755）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "当前环境的默认设置不适合这次任务，需要设置所有者可读写执行、组和其他可读执行后再继续工作。",
          "goal": "设置所有者可读写执行、组和其他可读执行；使用 chmod 755 scripts/deploy.sh 完成这一步。",
          "expected": "操作后，界面完成“设置所有者可读写执行、组和其他可读执行”对应的变化。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "|",
      "en": "Pipe: pass stdout of one command to stdin of another",
      "zh": "管道：将前一命令输出传给后一命令输入",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-pipe",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://www.gnu.org/software/coreutils/manual/ · |",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "管道：将前一命令输出传给后一命令输入",
        "Pipe: pass stdout of one command to stdin of another",
        "|"
      ],
      "examples": [
        {
          "value": "cat app.log | grep \"ERROR\"",
          "description": "管道：将前一命令输出传给后一命令输入",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platforms": [
            "linux",
            "mac"
          ],
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://www.gnu.org/software/coreutils/manual/ · |",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "正在GNU/Linux CLI中完成“管道：将前一命令输出传给后一命令输入”这一步，需要用默认交互入口减少界面切换。",
          "goal": "管道：将前一命令输出传给后一命令输入；使用 cat app.log | grep \"ERROR\" 完成这一步。",
          "expected": "操作后，界面完成“管道：将前一命令输出传给后一命令输入”对应的变化。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": ">",
      "en": "Redirect stdout to file (overwrite)",
      "zh": "将标准输出重定向到文件（覆盖）",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-redirect-out",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://www.gnu.org/software/coreutils/manual/ · >",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "将标准输出重定向到文件（覆盖）",
        "Redirect stdout to file (overwrite)",
        ">"
      ],
      "examples": [
        {
          "value": "echo \"example\" > output.txt",
          "description": "将标准输出重定向到文件（覆盖）",
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
          "platforms": [
            "linux",
            "mac"
          ],
          "caveat": "此操作可能删除或覆盖数据，请先确认目标并做好备份；先用只读命令预览目标并保留备份",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://www.gnu.org/software/coreutils/manual/ · >",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "正在GNU/Linux CLI中完成“将标准输出重定向到文件（覆盖）”这一步，需要用默认交互入口减少界面切换。",
          "goal": "将标准输出重定向到文件（覆盖）；使用 echo \"example\" > output.txt 完成这一步。",
          "expected": "操作后，界面完成“将标准输出重定向到文件（覆盖）”对应的变化。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": ">>",
      "en": "Redirect stdout to file (append)",
      "zh": "将标准输出追加到文件末尾",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-redirect-append",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://www.gnu.org/software/coreutils/manual/ · >>",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "将标准输出追加到文件末尾",
        "Redirect stdout to file (append)",
        ">>"
      ],
      "examples": [
        {
          "value": "echo \"next line\" >> output.txt",
          "description": "将标准输出追加到文件末尾",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platforms": [
            "linux",
            "mac"
          ],
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://www.gnu.org/software/coreutils/manual/ · >>",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "正在GNU/Linux CLI中完成“将标准输出追加到文件末尾”这一步，需要用默认交互入口减少界面切换。",
          "goal": "将标准输出追加到文件末尾；使用 echo \"next line\" >> output.txt 完成这一步。",
          "expected": "操作后，界面完成“将标准输出追加到文件末尾”对应的变化。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "ssh",
      "en": "OpenSSH remote login client",
      "zh": "SSH 远程登录",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-ssh",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://www.gnu.org/software/coreutils/manual/ · ssh",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "SSH 远程登录",
        "OpenSSH remote login client",
        "ssh"
      ],
      "examples": [
        {
          "value": "ssh user@example.com",
          "description": "登录到远程主机的命令行",
          "sourceType": "quasi-official",
          "authorship": "editorial",
          "evidenceTier": "authoritative-community",
          "adaptation": "adapted",
          "sourceIds": [
            "linux-ssh-man"
          ],
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://www.gnu.org/software/coreutils/manual/ · ssh",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "首次使用、凭据失效或切换账户后，需要重新完成身份验证。",
          "goal": "SSH 远程登录；使用 ssh user@example.com 完成这一步。",
          "expected": "执行成功后，登录到远程主机的命令行。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "scp",
      "en": "Secure copy between hosts",
      "zh": "安全远程文件复制",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-scp",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://www.gnu.org/software/coreutils/manual/ · scp",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "复制",
        "克隆",
        "拷贝",
        "安全远程文件复制",
        "Secure copy between hosts",
        "scp"
      ],
      "examples": [
        {
          "value": "scp file.txt user@example.com:/tmp/",
          "description": "安全远程文件复制",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platforms": [
            "linux",
            "mac"
          ],
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://www.gnu.org/software/coreutils/manual/ · scp",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "终端中的当前任务需要“安全远程文件复制”，因此要调用对应的官方命令入口。",
          "goal": "安全远程文件复制；使用 scp file.txt user@example.com:/tmp/ 完成这一步。",
          "expected": "执行成功后，安全远程文件复制。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "ping",
      "en": "Test network connectivity to a host",
      "zh": "测试主机网络连通性",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-ping",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://www.gnu.org/software/coreutils/manual/ · ping",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "测试主机网络连通性",
        "Test network connectivity to a host",
        "ping"
      ],
      "examples": [
        {
          "value": "ping example.com",
          "description": "测试主机网络连通性",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platforms": [
            "linux",
            "mac"
          ],
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://www.gnu.org/software/coreutils/manual/ · ping",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "终端中的当前任务需要“测试主机网络连通性”，因此要调用对应的官方命令入口。",
          "goal": "测试主机网络连通性；使用 ping example.com 完成这一步。",
          "expected": "执行成功后，测试主机网络连通性。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "ln -s",
      "en": "Create a symbolic link",
      "zh": "创建符号链接（软链接）",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-ln-s",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "GNU manuals（检索 ln -s）",
          "checkedAt": "2026-06-21"
        }
      ],
      "keywords": [
        "创建",
        "新建",
        "初始化",
        "创建符号链接（软链接）",
        "Create a symbolic link",
        "ln"
      ],
      "examples": [
        {
          "value": "ln -s target.txt shortcut.txt",
          "description": "创建符号链接（软链接）",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platforms": [
            "linux",
            "mac"
          ],
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "GNU manuals（检索 ln -s）",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "准备新的工作环境或资源时，需要创建符号链接（软链接），让后续步骤具备所需入口。",
          "goal": "创建符号链接（软链接）；使用 ln -s target.txt shortcut.txt 完成这一步。",
          "expected": "执行成功后，创建符号链接（软链接）。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "sed",
      "en": "Stream editor for filtering and transforming text",
      "zh": "流编辑器，用于过滤、转换和替换文本",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-sed",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://www.gnu.org/software/coreutils/manual/ · sed",
          "checkedAt": "2026-07-13"
        }
      ],
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
          "description": "预览把每行所有“旧文本”替换为“新文本”的结果",
          "scenario": "需要批量替换文本但应先确认匹配范围",
          "goal": "预览替换结果后再决定是否原地修改",
          "expected": "默认输出替换后的文本而不改文件",
          "caveat": "使用 -i 前先备份；macOS 与 GNU sed 参数不同",
          "sourceType": "quasi-official",
          "authorship": "editorial",
          "evidenceTier": "authoritative-community",
          "adaptation": "adapted",
          "sourceIds": [
            "linux-sed-man"
          ],
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://www.gnu.org/software/coreutils/manual/ · sed",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ]
        },
        {
          "value": "sed -i 's/旧文本/新文本/g' file.txt",
          "description": "直接修改文件中的匹配文本",
          "warning": "先运行不带 -i 的命令预览结果，并备份重要文件",
          "platformValues": {
            "mac": "sed -i '' 's/旧文本/新文本/g' file.txt",
            "linux": "sed -i 's/旧文本/新文本/g' file.txt"
          },
          "scenario": "需要批量替换文本但应先确认匹配范围",
          "goal": "预览替换结果后再决定是否原地修改",
          "expected": "默认输出替换后的文本而不改文件",
          "caveat": "使用 -i 前先备份；macOS 与 GNU sed 参数不同",
          "sourceType": "quasi-official",
          "authorship": "editorial",
          "evidenceTier": "authoritative-community",
          "adaptation": "adapted",
          "sourceIds": [
            "linux-sed-man"
          ],
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://www.gnu.org/software/coreutils/manual/ · sed",
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
      "cmd": "awk",
      "en": "Pattern scanning and text processing language",
      "zh": "模式扫描与文本处理语言",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-awk",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://www.gnu.org/software/coreutils/manual/ · awk",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "模式扫描与文本处理语言",
        "Pattern scanning and text processing language",
        "awk"
      ],
      "examples": [
        {
          "value": "awk '{print $1}' access.log",
          "description": "输出 access.log 每一行的第一列",
          "sourceType": "quasi-official",
          "authorship": "editorial",
          "evidenceTier": "authoritative-community",
          "adaptation": "adapted",
          "sourceIds": [
            "linux-gawk-man"
          ],
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://www.gnu.org/software/coreutils/manual/ · awk",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "终端中的当前任务需要“模式扫描与文本处理语言”，因此要调用对应的官方命令入口。",
          "goal": "模式扫描与文本处理语言；使用 awk '{print $1}' access.log 完成这一步。",
          "expected": "执行成功后，输出 access.log 每一行的第一列。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "which",
      "en": "Show the full path of a command",
      "zh": "显示命令的完整路径",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-which",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://www.gnu.org/software/coreutils/manual/ · which",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "显示命令的完整路径",
        "Show the full path of a command",
        "which"
      ],
      "examples": [
        {
          "value": "which node",
          "description": "显示命令的完整路径",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platforms": [
            "linux",
            "mac"
          ],
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://www.gnu.org/software/coreutils/manual/ · which",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先显示命令的完整路径，确认当前状态与预期一致。",
          "goal": "显示命令的完整路径；使用 which node 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“显示命令的完整路径”对应的信息。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "history",
      "en": "Display command history list",
      "zh": "显示命令历史记录",
      "context": "shell-builtin",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-history",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://www.gnu.org/software/coreutils/manual/ · history",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "显示命令历史记录",
        "Display command history list",
        "history"
      ],
      "examples": [
        {
          "value": "history",
          "description": "显示命令历史记录",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platforms": [
            "linux",
            "mac"
          ],
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://www.gnu.org/software/coreutils/manual/ · history",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "继续修改相关对象前，需要先显示命令历史记录，确认当前状态与预期一致。",
          "goal": "显示命令历史记录；使用 history 完成这一步。",
          "expected": "执行后，终端或当前界面显示与“显示命令历史记录”对应的信息。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "Ctrl+R",
      "en": "Reverse search through command history",
      "zh": "反向搜索命令历史",
      "context": "shell-builtin-readline",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-ctrl-r",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://www.gnu.org/software/coreutils/manual/ · Ctrl+R",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "搜索",
        "查找",
        "定位",
        "反向搜索命令历史",
        "Reverse search through command history",
        "Ctrl+R"
      ],
      "examples": [
        {
          "value": "按 Ctrl+R（shell-builtin-readline）",
          "description": "反向搜索命令历史",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platforms": [
            "linux",
            "mac"
          ],
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://www.gnu.org/software/coreutils/manual/ · Ctrl+R",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "正在shell-builtin-readline中完成“反向搜索命令历史”这一步，需要用默认交互入口减少界面切换。",
          "goal": "反向搜索命令历史；使用 按 Ctrl+R（shell-builtin-readline） 完成这一步。",
          "expected": "操作后，界面完成“反向搜索命令历史”对应的变化。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "Ctrl+C",
      "en": "Interrupt (terminate) the foreground process",
      "zh": "中断（终止）前台进程",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-ctrl-c",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://www.gnu.org/software/coreutils/manual/ · Ctrl+C",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "中断（终止）前台进程",
        "Interrupt (terminate) the foreground process",
        "Ctrl+C"
      ],
      "examples": [
        {
          "value": "按 Ctrl+C",
          "description": "中断（终止）前台进程",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platforms": [
            "linux",
            "mac"
          ],
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://www.gnu.org/software/coreutils/manual/ · Ctrl+C",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "正在GNU/Linux CLI中完成“中断（终止）前台进程”这一步，需要用默认交互入口减少界面切换。",
          "goal": "中断（终止）前台进程；使用 按 Ctrl+C 完成这一步。",
          "expected": "操作后，界面完成“中断（终止）前台进程”对应的变化。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "Ctrl+Z",
      "en": "Suspend the foreground process",
      "zh": "挂起前台进程",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-ctrl-z",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://www.gnu.org/software/coreutils/manual/ · Ctrl+Z",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "挂起前台进程",
        "Suspend the foreground process",
        "Ctrl+Z"
      ],
      "examples": [
        {
          "value": "按 Ctrl+Z",
          "description": "挂起前台进程",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platforms": [
            "linux",
            "mac"
          ],
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://www.gnu.org/software/coreutils/manual/ · Ctrl+Z",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "正在GNU/Linux CLI中完成“挂起前台进程”这一步，需要用默认交互入口减少界面切换。",
          "goal": "挂起前台进程；使用 按 Ctrl+Z 完成这一步。",
          "expected": "操作后，界面完成“挂起前台进程”对应的变化。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "bg",
      "en": "Resume a suspended job in the background",
      "zh": "将挂起任务放入后台继续运行",
      "context": "shell-builtin",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-bg",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://www.gnu.org/software/coreutils/manual/ · bg",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "会话",
        "恢复会话",
        "历史会话",
        "将挂起任务放入后台继续运行",
        "Resume a suspended job in the background",
        "bg"
      ],
      "examples": [
        {
          "value": "先按 Ctrl+Z 挂起任务，再输入 bg 让任务在后台继续运行",
          "description": "将挂起任务放入后台继续运行",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platforms": [
            "linux",
            "mac"
          ],
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://www.gnu.org/software/coreutils/manual/ · bg",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "先前的工作会话被中断后，需要回到已有上下文继续处理，而不是重新开始。",
          "goal": "将挂起任务放入后台继续运行；使用 先按 Ctrl+Z 挂起任务，再输入 bg 让任务在后台继续运行 完成这一步。",
          "expected": "操作后，界面完成“将挂起任务放入后台继续运行”对应的变化。"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "fg",
      "en": "Bring a background job to the foreground",
      "zh": "将后台任务调回前台",
      "context": "shell-builtin",
      "platforms": [
        "linux",
        "mac"
      ],
      "id": "linux-fg",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://www.gnu.org/software/coreutils/manual/ · fg",
          "checkedAt": "2026-07-13"
        }
      ],
      "keywords": [
        "将后台任务调回前台",
        "Bring a background job to the foreground",
        "fg"
      ],
      "examples": [
        {
          "value": "输入 fg，把最近的后台任务切回前台",
          "description": "将后台任务调回前台",
          "generated": true,
          "copyable": false,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "none",
          "adaptation": "scenario-derived",
          "platforms": [
            "linux",
            "mac"
          ],
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://www.gnu.org/software/coreutils/manual/ · fg",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "正在shell-builtin中完成“将后台任务调回前台”这一步，需要用默认交互入口减少界面切换。",
          "goal": "将后台任务调回前台；使用 输入 fg，把最近的后台任务切回前台 完成这一步。",
          "expected": "操作后，界面完成“将后台任务调回前台”对应的变化。"
        }
      ]
    }
  ]
};
