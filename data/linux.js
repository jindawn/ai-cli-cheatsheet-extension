// Generated from validated structured data. Manual edits must follow data/SCHEMA.md.
window.CHEATSHEET_DATA = window.CHEATSHEET_DATA || {};
window.CHEATSHEET_DATA["linux"] = {
  "meta": {
    "id": "linux",
    "name": "GNU/Linux CLI",
    "color": "#FCC624",
    "source": "GNU Coreutils 9.7, util-linux 2.40, procps-ng 4.0, POSIX.1-2024; man7.org; 整理于 2026-06-20",
    "builtIn": false,
    "sourceUrl": "https://www.man7.org/linux/man-pages/",
    "sourceTier": "quasi-official",
    "updatedAt": "2026-06-20",
    "contentCheckedAt": "2026-07-02",
    "sourceCheckedAt": "2026-07-02",
    "updatePolicy": "manual-only",
    "verificationStatus": "manual",
    "coverage": "常用命令子集，覆盖 GNU Coreutils、util-linux、procps-ng 及 POSIX 标准，选取开发者高频使用的约 40 条命令",
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
      "status": "unconfirmed",
      "total": 0,
      "covered": 0,
      "checkedAt": "2026-07-02",
      "sourceIds": [
        "gnu-manuals"
      ]
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
          "sourceId": "linux-bash-man",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://man7.org/linux/man-pages/man1/bash.1.html · SHELL BUILTIN COMMANDS · cd",
          "checkedAt": "2026-07-02"
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
          "sourceId": "linux-bash-man",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://man7.org/linux/man-pages/man1/bash.1.html · SHELL BUILTIN COMMANDS · cd（.. 为父目录的相对路径参数）",
          "checkedAt": "2026-07-02"
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
          "sourceId": "linux-less-man",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://man7.org/linux/man-pages/man1/less.1.html · NAME/DESCRIPTION",
          "checkedAt": "2026-07-02"
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
          "sourceId": "linux-ps-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://man7.org/linux/man-pages/man1/ps.1.html",
          "checkedAt": "2026-06-21"
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
          "sourceId": "linux-ps-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://man7.org/linux/man-pages/man1/ps.1.html",
          "checkedAt": "2026-06-21"
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
          "sourceId": "linux-kill-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://man7.org/linux/man-pages/man1/kill.1.html",
          "checkedAt": "2026-06-21"
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
          "sourceId": "linux-kill-man",
          "claims": [
            "existence"
          ],
          "locator": "https://man7.org/linux/man-pages/man1/kill.1.html",
          "checkedAt": "2026-06-21"
        },
        {
          "sourceId": "linux-kill-man",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://man7.org/linux/man-pages/man1/kill.1.html · SIGKILL/-9（原文：\"be aware that the latter signal cannot be caught, and so does not give the target process the opportunity to perform any clean-up before terminating\"）",
          "checkedAt": "2026-07-02"
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
          "sourceId": "linux-top-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://man7.org/linux/man-pages/man1/top.1.html",
          "checkedAt": "2026-06-21"
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
          "sourceId": "linux-grep-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://man7.org/linux/man-pages/man1/grep.1.html",
          "checkedAt": "2026-06-21"
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
          "sourceId": "linux-grep-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://man7.org/linux/man-pages/man1/grep.1.html",
          "checkedAt": "2026-06-21"
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
          "sourceId": "linux-grep-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://man7.org/linux/man-pages/man1/grep.1.html",
          "checkedAt": "2026-06-21"
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
          "sourceId": "linux-find-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://man7.org/linux/man-pages/man1/find.1.html",
          "checkedAt": "2026-06-21"
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
          "sourceId": "linux-find-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://man7.org/linux/man-pages/man1/find.1.html",
          "checkedAt": "2026-06-21"
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
          "sourceId": "linux-diff-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://man7.org/linux/man-pages/man1/diff.1.html",
          "checkedAt": "2026-06-21"
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
          "sourceId": "linux-free-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://man7.org/linux/man-pages/man1/free.1.html",
          "checkedAt": "2026-06-21"
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
          "sourceId": "linux-curl-man",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://man7.org/linux/man-pages/man1/curl.1.html · NAME/DESCRIPTION",
          "checkedAt": "2026-07-02"
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
          "sourceId": "linux-wget-man",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://man7.org/linux/man-pages/man1/wget.1.html · NAME/DESCRIPTION",
          "checkedAt": "2026-07-02"
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
          "sourceId": "linux-tar-man",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://man7.org/linux/man-pages/man1/tar.1.html · NAME/DESCRIPTION",
          "checkedAt": "2026-07-02"
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
          "sourceId": "linux-tar-man",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://man7.org/linux/man-pages/man1/tar.1.html · 选项 -x -z -f（组合短选项）",
          "checkedAt": "2026-07-02"
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
          "sourceId": "linux-tar-man",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://man7.org/linux/man-pages/man1/tar.1.html · 选项 -c -z -f（组合短选项）",
          "checkedAt": "2026-07-02"
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
          "sourceId": "linux-bash-man",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://man7.org/linux/man-pages/man1/bash.1.html · SHELL GRAMMAR · Pipelines",
          "checkedAt": "2026-07-02"
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
          "sourceId": "linux-bash-man",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://man7.org/linux/man-pages/man1/bash.1.html · REDIRECTION（覆盖已存在文件）",
          "checkedAt": "2026-07-02"
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
          "sourceId": "linux-bash-man",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://man7.org/linux/man-pages/man1/bash.1.html · REDIRECTION · Appending Redirected Output",
          "checkedAt": "2026-07-02"
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
          "sourceId": "linux-ssh-man",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://man7.org/linux/man-pages/man1/ssh.1.html · NAME/DESCRIPTION",
          "checkedAt": "2026-07-02"
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
          "sourceId": "linux-scp-man",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://man7.org/linux/man-pages/man1/scp.1.html · NAME/DESCRIPTION",
          "checkedAt": "2026-07-02"
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
          "sourceId": "linux-ping-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://man7.org/linux/man-pages/man8/ping.8.html",
          "checkedAt": "2026-06-21"
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
          "sourceId": "linux-sed-man",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://man7.org/linux/man-pages/man1/sed.1.html · NAME/DESCRIPTION",
          "checkedAt": "2026-07-02"
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
          "sourceId": "linux-gawk-man",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://man7.org/linux/man-pages/man1/gawk.1.html · NAME/DESCRIPTION",
          "checkedAt": "2026-07-02"
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
          "sourceId": "linux-which-man",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://manpages.debian.org/unstable/debianutils/which.1.en.html · NAME/DESCRIPTION",
          "checkedAt": "2026-07-02"
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
          "sourceId": "linux-bash-man",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://man7.org/linux/man-pages/man1/bash.1.html · SHELL BUILTIN COMMANDS · history [n]",
          "checkedAt": "2026-07-02"
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
          "sourceId": "linux-bash-man",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://man7.org/linux/man-pages/man1/bash.1.html · READLINE · Searching for Commands in the History · reverse-search-history (C-r)",
          "checkedAt": "2026-07-02"
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
          "sourceId": "linux-termios-man",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://man7.org/linux/man-pages/man3/termios.3.html · c_cc characters · VINTR（默认 Ctrl-C，发送 SIGINT）",
          "checkedAt": "2026-07-02"
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
          "sourceId": "linux-termios-man",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://man7.org/linux/man-pages/man3/termios.3.html · c_cc characters · VSUSP（默认 Ctrl-Z，发送 SIGTSTP）",
          "checkedAt": "2026-07-02"
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
          "sourceId": "linux-bash-man",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://man7.org/linux/man-pages/man1/bash.1.html · SHELL BUILTIN COMMANDS · bg [jobspec ...]",
          "checkedAt": "2026-07-02"
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
          "sourceId": "linux-bash-man",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://man7.org/linux/man-pages/man1/bash.1.html · SHELL BUILTIN COMMANDS · fg [jobspec]",
          "checkedAt": "2026-07-02"
        }
      ]
    }
  ]
};
