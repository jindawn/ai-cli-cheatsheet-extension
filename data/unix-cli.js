// Generated from validated structured data. Manual edits must follow data/SCHEMA.md.
window.CHEATSHEET_DATA = window.CHEATSHEET_DATA || {};
window.CHEATSHEET_DATA["unix-cli"] = {
  "meta": {
    "id": "unix-cli",
    "name": "Unix/POSIX 基础命令",
    "color": "#4B5563",
    "source": "固定官方发布标签与入口索引的确定性全集，核验于 2026-07-31",
    "builtIn": false,
    "sourceUrl": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/contents.html",
    "sourceTier": "official",
    "updatedAt": "2026-07-31",
    "contentCheckedAt": "2026-07-31",
    "sourceCheckedAt": "2026-07-31",
    "updatePolicy": "manual-only",
    "verificationStatus": "manual",
    "coverage": "登记官方组件的全部公开命令入口；组件版本、排除理由与平台限制见 shared/official-inventories/unix-cli.json",
    "platforms": [
      "mac",
      "linux"
    ],
    "order": 75,
    "sources": [
      {
        "id": "posix-shell-utilities",
        "title": "POSIX Shell Command Language and Utilities",
        "kind": "official-doc",
        "maintainer": "The Open Group",
        "evidenceTier": "first-party",
        "purposes": [
          "command-existence",
          "option-semantics",
          "cross-check"
        ],
        "resolvedUrl": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/contents.html",
        "pageTitle": "POSIX Shell Command Language and Utilities",
        "checkedAt": "2026-07-02",
        "url": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/contents.html",
        "lastVerifiedAt": "2026-07-02"
      },
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
        "id": "openssh-portable-repository",
        "title": "OpenSSH portable official repository",
        "url": "https://github.com/openssh/openssh-portable",
        "kind": "official-repository",
        "maintainer": "OpenSSH maintainers",
        "evidenceTier": "first-party",
        "lastVerifiedAt": "2026-07-23",
        "resolvedUrl": "https://github.com/openssh/openssh-portable",
        "pageTitle": "OpenSSH portable official repository",
        "checkedAt": "2026-07-23",
        "purposes": [
          "command-existence",
          "option-semantics",
          "examples"
        ]
      },
      {
        "id": "curl-docs",
        "title": "curl official documentation",
        "url": "https://curl.se/docs/",
        "kind": "official-doc",
        "maintainer": "curl project",
        "evidenceTier": "first-party",
        "lastVerifiedAt": "2026-07-23",
        "resolvedUrl": "https://curl.se/docs/",
        "pageTitle": "curl documentation",
        "checkedAt": "2026-07-23",
        "purposes": [
          "command-existence",
          "option-semantics",
          "examples"
        ]
      },
      {
        "id": "less-repository",
        "title": "less official repository",
        "url": "https://github.com/gwsw/less",
        "kind": "official-repository",
        "maintainer": "less maintainers",
        "evidenceTier": "first-party",
        "lastVerifiedAt": "2026-07-23",
        "resolvedUrl": "https://github.com/gwsw/less",
        "pageTitle": "less official repository",
        "checkedAt": "2026-07-23",
        "purposes": [
          "command-existence",
          "option-semantics",
          "examples"
        ]
      },
      {
        "id": "iputils-repository",
        "title": "iputils official repository",
        "url": "https://github.com/iputils/iputils",
        "kind": "official-repository",
        "maintainer": "iputils maintainers",
        "evidenceTier": "first-party",
        "lastVerifiedAt": "2026-07-23",
        "resolvedUrl": "https://github.com/iputils/iputils",
        "pageTitle": "iputils official repository",
        "checkedAt": "2026-07-23",
        "purposes": [
          "command-existence",
          "option-semantics",
          "examples"
        ]
      },
      {
        "id": "procps-ng-repository",
        "title": "procps-ng official repository",
        "url": "https://gitlab.com/procps-ng/procps",
        "kind": "official-repository",
        "maintainer": "procps-ng maintainers",
        "evidenceTier": "first-party",
        "lastVerifiedAt": "2026-07-23",
        "resolvedUrl": "https://gitlab.com/procps-ng/procps",
        "pageTitle": "procps-ng official repository",
        "checkedAt": "2026-07-23",
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
      "total": 220,
      "covered": 220,
      "checkedAt": "2026-07-31",
      "sourceIds": [
        "posix-shell-utilities",
        "gnu-manuals",
        "openssh-portable-repository",
        "curl-docs",
        "less-repository",
        "iputils-repository",
        "procps-ng-repository"
      ],
      "inventoryHash": "sha256:4a4541e5b16f5cdef82cb7971e5492ba04efe523aba3d6e22075a92f9d4f2ee1",
      "componentCounts": {
        "posix-utilities": 155,
        "gnu-coreutils": 108,
        "gnu-findutils": 4,
        "gnu-grep": 1,
        "gnu-sed": 1,
        "gnu-gawk": 2,
        "gnu-diffutils": 4,
        "gnu-tar": 1,
        "gnu-wget": 1,
        "gnu-which": 1,
        "openssh-client": 7,
        "curl": 2,
        "less": 1,
        "ping-implementations": 1,
        "top-implementations": 1
      },
      "sourceManifestHash": "sha256:4c297c316826977d85007ba6fc5c9e4b2dc3500639de7b1b1ca0a401b7449d15"
    }
  },
  "items": [
    {
      "cat": "slash",
      "cmd": "admin",
      "en": "create and administer SCCS files ( DEVELOPMENT )",
      "zh": "admin：create and administer SCCS files ( DEVELOPMENT )（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-admin",
      "context": "posix-utility",
      "keywords": [
        "admin",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 admin 来完成“create and administer SCCS files ( DEVELOPMENT )”时",
          "goal": "按固定官方版本的定义调用 admin，并依据退出状态判断该操作是否完成",
          "value": "admin",
          "description": "admin 的官方用途是“create and administer SCCS files ( DEVELOPMENT )”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 admin；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/admin.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [
        "POSIX option group: DEVELOPMENT",
        "some synopsis forms require POSIX option group XSI"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/admin.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "[ XSI ] admin -i [ name ] [ -n ] [ -a login ] [ -d flag ] [ -e login ] [ -f flag ] [ -m mrlist ] [ -r rel ] [ -t [ name ] [ -y [ comment ]] newfile admin -n [ -a login ] [ -d flag ] [ -e login ] [ -f flag ] [ -m mrlist ] [ -t [ name ]] [ -y [ comment ]] newfile ... admin [ -a log",
      "options": [
        "-i",
        "-t",
        "-y",
        "-n",
        "-r",
        "-f",
        "-b",
        "-e"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "alias",
      "en": "define or display aliases",
      "zh": "alias：define or display aliases（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-alias",
      "context": "posix-utility",
      "keywords": [
        "alias",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 alias 来完成“define or display aliases”时",
          "goal": "按固定官方版本的定义调用 alias，并依据退出状态判断该操作是否完成",
          "value": "alias",
          "description": "alias 的官方用途是“define or display aliases”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 alias；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/alias.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/alias.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "alias [ alias-name [ = string ] ... ]",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "ar",
      "en": "create and maintain library archives",
      "zh": "ar：create and maintain library archives（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-ar",
      "context": "posix-utility",
      "keywords": [
        "ar",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 ar 来完成“create and maintain library archives”时",
          "goal": "按固定官方版本的定义调用 ar，并依据退出状态判断该操作是否完成",
          "value": "ar",
          "description": "ar 的官方用途是“create and maintain library archives”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 ar；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/ar.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [
        "some synopsis forms require POSIX option group SD",
        "some synopsis forms require POSIX option group XSI"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/ar.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "[ SD ] ar -d [ -v ] archive file ... [ XSI ] ar -m [ -v ] archive file ... ar -m -a [ -v ] posname archive file ... ar -m -b [ -v ] posname archive file ... ar -m -i [ -v ] posname archive file ... [ XSI ] ar -p [ -v ] [ -s ] archive [ file ... ] [ XSI ] ar -q [ -cv ] archive fil",
      "options": [
        "-a",
        "-b",
        "-c",
        "-C",
        "-T",
        "-d",
        "-i",
        "-m"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "arch",
      "en": "arch print machine hardware name (same as uname -m)",
      "zh": "arch：arch print machine hardware name (same as uname -m)（来源：gnu-coreutils）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-arch",
      "context": "external-command",
      "keywords": [
        "arch",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils 提供的 arch 来完成“arch print machine hardware name (same as uname -m)”时",
          "goal": "按固定官方版本的定义调用 arch，并依据退出状态判断该操作是否完成",
          "value": "arch",
          "description": "arch 的官方用途是“arch print machine hardware name (same as uname -m)”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils 的定义执行 arch；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "gnu-manuals"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz/man/arch.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz · man/arch.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "arch [\\,OPTION\\/]...",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "asa",
      "en": "interpret carriage-control characters",
      "zh": "asa：interpret carriage-control characters（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-asa",
      "context": "posix-utility",
      "keywords": [
        "asa",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 asa 来完成“interpret carriage-control characters”时",
          "goal": "按固定官方版本的定义调用 asa，并依据退出状态判断该操作是否完成",
          "value": "asa",
          "description": "asa 的官方用途是“interpret carriage-control characters”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 asa；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/asa.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [
        "some synopsis forms require POSIX option group FR"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/asa.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "[ FR ] asa [ file ... ]",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "at",
      "en": "execute commands at a later time",
      "zh": "at：execute commands at a later time（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-at",
      "context": "posix-utility",
      "keywords": [
        "at",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 at 来完成“execute commands at a later time”时",
          "goal": "按固定官方版本的定义调用 at，并依据退出状态判断该操作是否完成",
          "value": "at",
          "description": "at 的官方用途是“execute commands at a later time”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 at；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/at.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/at.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "at [ -m ] [ -f file ] [ -q queuename ] -t time_arg at [ -m ] [ -f file ] [ -q queuename ] timespec ... at -r at_job_id ... at -l -q queuename at -l [ at_job_id ... ]",
      "options": [
        "-f",
        "-l",
        "-m",
        "-q",
        "-t",
        "-r"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "awk",
      "en": "Pattern scanning and text processing language",
      "zh": "模式扫描与文本处理语言",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-awk",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/awk.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "keywords": [
        "模式扫描与文本处理语言",
        "Pattern scanning and text processing language",
        "awk",
        "Unix",
        "POSIX"
      ],
      "examples": [
        {
          "scenario": "测试结果导出为逗号分隔文本，需要快速查看用例名和耗时两列",
          "goal": "按逗号切分并输出第一列与第三列",
          "value": "awk -F, '{print $1, $3}' test-results.csv",
          "description": "-F, 把逗号设为字段分隔符，程序只打印需要的两个字段。",
          "expected": "终端为输入文件的每一行输出第一列和第三列，原文件保持不变。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/awk.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "context": "posix-utility",
      "components": [
        "posix-utilities"
      ],
      "constraints": [],
      "usage": "awk [ -F sepstring ] [ -v assignment ] ... program [ argument ... ] awk [ -F sepstring ] -f progfile [ -f progfile ] ... [ -v assignment ] ... [ argument ... ]",
      "options": [
        "-F",
        "-v",
        "-f"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "b2sum",
      "en": "b2sum compute and check BLAKE2 message digest",
      "zh": "b2sum：b2sum compute and check BLAKE2 message digest（来源：gnu-coreutils）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-b2sum",
      "context": "external-command",
      "keywords": [
        "b2sum",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils 提供的 b2sum 来完成“b2sum compute and check BLAKE2 message digest”时",
          "goal": "按固定官方版本的定义调用 b2sum，并依据退出状态判断该操作是否完成",
          "value": "b2sum",
          "description": "b2sum 的官方用途是“b2sum compute and check BLAKE2 message digest”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils 的定义执行 b2sum；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "gnu-manuals"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz/man/b2sum.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz · man/b2sum.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "b2sum [\\,OPTION\\/]... [\\,FILE\\/]...",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "base32",
      "en": "base32 base32 encode/decode data and print to standard output",
      "zh": "base32：base32 base32 encode/decode data and print to standard output（来源：gnu-coreutils）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-base32",
      "context": "external-command",
      "keywords": [
        "base32",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils 提供的 base32 来完成“base32 base32 encode/decode data and print to standard output”时",
          "goal": "按固定官方版本的定义调用 base32，并依据退出状态判断该操作是否完成",
          "value": "base32",
          "description": "base32 的官方用途是“base32 base32 encode/decode data and print to standard output”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils 的定义执行 base32；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "gnu-manuals"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz/man/base32.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz · man/base32.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "base32 [\\,OPTION\\/]... [\\,FILE\\/]",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "base64",
      "en": "base64 base64 encode/decode data and print to standard output",
      "zh": "base64：base64 base64 encode/decode data and print to standard output（来源：gnu-coreutils）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-base64",
      "context": "external-command",
      "keywords": [
        "base64",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils 提供的 base64 来完成“base64 base64 encode/decode data and print to standard output”时",
          "goal": "按固定官方版本的定义调用 base64，并依据退出状态判断该操作是否完成",
          "value": "base64",
          "description": "base64 的官方用途是“base64 base64 encode/decode data and print to standard output”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils 的定义执行 base64；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "gnu-manuals"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz/man/base64.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz · man/base64.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "base64 [\\,OPTION\\/]... [\\,FILE\\/]",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "basename",
      "en": "return non-directory portion of a pathname",
      "zh": "basename：return non-directory portion of a pathname（来源：gnu-coreutils / posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-basename",
      "context": "posix-utility",
      "keywords": [
        "basename",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils / posix-utilities 提供的 basename 来完成“return non-directory portion of a pathname”时",
          "goal": "按固定官方版本的定义调用 basename，并依据退出状态判断该操作是否完成",
          "value": "basename",
          "description": "basename 的官方用途是“return non-directory portion of a pathname”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils / posix-utilities 的定义执行 basename；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/basename.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/basename.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "basename string [ suffix ]",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "basenc",
      "en": "basenc Encode/decode data and print to standard output",
      "zh": "basenc：basenc Encode/decode data and print to standard output（来源：gnu-coreutils）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-basenc",
      "context": "external-command",
      "keywords": [
        "basenc",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils 提供的 basenc 来完成“basenc Encode/decode data and print to standard output”时",
          "goal": "按固定官方版本的定义调用 basenc，并依据退出状态判断该操作是否完成",
          "value": "basenc",
          "description": "basenc 的官方用途是“basenc Encode/decode data and print to standard output”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils 的定义执行 basenc；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "gnu-manuals"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz/man/basenc.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz · man/basenc.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "basenc [\\,OPTION\\/]... [\\,FILE\\/]",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "batch",
      "en": "schedule commands to be executed in a batch queue",
      "zh": "batch：schedule commands to be executed in a batch queue（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-batch",
      "context": "posix-utility",
      "keywords": [
        "batch",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 batch 来完成“schedule commands to be executed in a batch queue”时",
          "goal": "按固定官方版本的定义调用 batch，并依据退出状态判断该操作是否完成",
          "value": "batch",
          "description": "batch 的官方用途是“schedule commands to be executed in a batch queue”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 batch；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/batch.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/batch.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "batch",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "bc",
      "en": "arbitrary-precision arithmetic language",
      "zh": "bc：arbitrary-precision arithmetic language（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-bc",
      "context": "posix-utility",
      "keywords": [
        "bc",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 bc 来完成“arbitrary-precision arithmetic language”时",
          "goal": "按固定官方版本的定义调用 bc，并依据退出状态判断该操作是否完成",
          "value": "bc",
          "description": "bc 的官方用途是“arbitrary-precision arithmetic language”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 bc；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/bc.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/bc.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "bc [ -l ] [ file ... ]",
      "options": [
        "-l"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "bg",
      "en": "run jobs in the background",
      "zh": "bg：run jobs in the background（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-bg",
      "context": "posix-utility",
      "keywords": [
        "bg",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 bg 来完成“run jobs in the background”时",
          "goal": "按固定官方版本的定义调用 bg，并依据退出状态判断该操作是否完成",
          "value": "bg",
          "description": "bg 的官方用途是“run jobs in the background”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 bg；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/bg.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [
        "some synopsis forms require POSIX option group UP"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/bg.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "[ UP ] bg [ job_id ... ]",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "c17",
      "en": "compile standard C programs",
      "zh": "c17：compile standard C programs（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-c17",
      "context": "posix-utility",
      "keywords": [
        "c17",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 c17 来完成“compile standard C programs”时",
          "goal": "按固定官方版本的定义调用 c17，并依据退出状态判断该操作是否完成",
          "value": "c17",
          "description": "c17 的官方用途是“compile standard C programs”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 c17；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/c17.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [
        "some synopsis forms require POSIX option group CD"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/c17.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "[ CD ] c17 [ options ... ] pathname [[ pathname ] [ -I directory ] [ -L directory ] [ -l library ] [ -R directory ]] ...",
      "options": [
        "-L",
        "-l",
        "-R",
        "-c",
        "-B",
        "-E",
        "-G",
        "-D"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "cal",
      "en": "print a calendar",
      "zh": "cal：print a calendar（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-cal",
      "context": "posix-utility",
      "keywords": [
        "cal",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 cal 来完成“print a calendar”时",
          "goal": "按固定官方版本的定义调用 cal，并依据退出状态判断该操作是否完成",
          "value": "cal",
          "description": "cal 的官方用途是“print a calendar”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 cal；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/cal.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [
        "some synopsis forms require POSIX option group XSI"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/cal.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "[ XSI ] cal [[ month ] year ]",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "cat",
      "en": "Concatenate and print file contents",
      "zh": "查看或拼接文件内容",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-cat",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/cat.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "查看或拼接文件内容",
        "Concatenate and print file contents",
        "cat",
        "Unix",
        "POSIX"
      ],
      "examples": [
        {
          "scenario": "依赖安装异常时，需要快速确认项目清单的原始内容是否被意外改写",
          "goal": "一次性输出 package.json 的完整文本",
          "value": "cat package.json",
          "description": "直接把小型文本文件写到标准输出，适合快速核对原始内容。",
          "expected": "终端按文件顺序显示 package.json 的全部内容，文件本身保持不变。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/cat.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "context": "posix-utility",
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "usage": "cat [ -u ] [ file ... ]",
      "options": [
        "-u"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "cd",
      "en": "change the working directory",
      "zh": "cd：change the working directory（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-cd",
      "context": "posix-utility",
      "keywords": [
        "cd",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 cd 来完成“change the working directory”时",
          "goal": "按固定官方版本的定义调用 cd，并依据退出状态判断该操作是否完成",
          "value": "cd",
          "description": "cd 的官方用途是“change the working directory”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 cd；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/cd.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/cd.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "cd [ -L ] [ directory ] cd -P [ -e ] [ directory ]",
      "options": [
        "-e",
        "-P",
        "-L"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "cflow",
      "en": "generate a C-language flowgraph ( DEVELOPMENT )",
      "zh": "cflow：generate a C-language flowgraph ( DEVELOPMENT )（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-cflow",
      "context": "posix-utility",
      "keywords": [
        "cflow",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 cflow 来完成“generate a C-language flowgraph ( DEVELOPMENT )”时",
          "goal": "按固定官方版本的定义调用 cflow，并依据退出状态判断该操作是否完成",
          "value": "cflow",
          "description": "cflow 的官方用途是“generate a C-language flowgraph ( DEVELOPMENT )”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 cflow；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/cflow.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [
        "POSIX option group: DEVELOPMENT",
        "some synopsis forms require POSIX option group XSI"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/cflow.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "[ XSI ] cflow [ -r ] [ -d num ] [ -D name [ = def ]] ... [ -i incl ] [ -I dir ] ... [ -U dir ] ... file ...",
      "options": [
        "-D",
        "-I",
        "-U",
        "-d",
        "-i",
        "-r"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "chcon",
      "en": "chcon change file security context",
      "zh": "chcon：chcon change file security context（来源：gnu-coreutils）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-chcon",
      "context": "external-command",
      "keywords": [
        "chcon",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils 提供的 chcon 来完成“chcon change file security context”时",
          "goal": "按固定官方版本的定义调用 chcon，并依据退出状态判断该操作是否完成",
          "value": "chcon",
          "description": "chcon 的官方用途是“chcon change file security context”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils 的定义执行 chcon；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "gnu-manuals"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz/man/chcon.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz · man/chcon.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "chcon [\\,OPTION\\/]... \\,CONTEXT FILE\\/... .br chcon [\\,OPTION\\/]... [\\,-u USER\\/] [\\,-r ROLE\\/] [\\,-l RANGE\\/] [\\,-t TYPE\\/] \\,FILE\\/... .br chcon [\\,OPTION\\/]... \\,--reference=RFILE FILE\\/...",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "chgrp",
      "en": "change the file group ownership",
      "zh": "chgrp：change the file group ownership（来源：gnu-coreutils / posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-chgrp",
      "context": "posix-utility",
      "keywords": [
        "chgrp",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils / posix-utilities 提供的 chgrp 来完成“change the file group ownership”时",
          "goal": "按固定官方版本的定义调用 chgrp，并依据退出状态判断该操作是否完成",
          "value": "chgrp",
          "description": "chgrp 的官方用途是“change the file group ownership”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils / posix-utilities 的定义执行 chgrp；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/chgrp.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/chgrp.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "chgrp [ -h ] group file ... chgrp -R [ -H|-L|-P ] group file ...",
      "options": [
        "-h",
        "-H",
        "-R",
        "-L",
        "-P"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "chmod",
      "en": "Change file mode bits (permissions)",
      "zh": "修改文件权限",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-chmod",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/chmod.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "keywords": [
        "修改文件权限",
        "Change file mode bits (permissions)",
        "chmod",
        "添加可执行权限",
        "Add execute permission",
        "配置",
        "设置",
        "偏好"
      ],
      "examples": [
        {
          "scenario": "仓库中的检查脚本缺少执行位，需要在提交前修正该文件的所有者权限",
          "goal": "为脚本所有者添加执行权限",
          "value": "chmod u+x scripts/check.sh",
          "description": "符号模式 u+x 只为文件所有者增加执行位，不改变其它已有权限位。",
          "expected": "scripts/check.sh 的权限模式发生变化，文件内容保持不变。",
          "copyable": false,
          "warning": "权限变更会影响文件的可执行范围；先用 ls -l 核对目标和现有权限。",
          "caveat": "先检查脚本内容、目标路径和现有模式，并通过 git diff 确认只提交预期的权限变化。",
          "riskLevels": [
            "permissionChange"
          ],
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/chmod.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        },
        {
          "scenario": "刚生成的团队脚本无法直接运行，需要按当前 umask 为允许的用户类别补上执行位",
          "goal": "使用开发者常见写法为脚本添加执行权限",
          "value": "chmod +x scripts/bootstrap.sh",
          "description": "+x 按当前 umask 为对应用户类别增加执行位，不修改脚本内容。",
          "expected": "scripts/bootstrap.sh 的权限模式发生变化，随后可按系统权限规则直接执行。",
          "copyable": false,
          "warning": "权限变更会影响谁能执行文件；先用 ls -l 检查目标、所有者和当前权限。",
          "caveat": "确认脚本内容可信且目标路径正确后再执行；团队仓库还应检查提交中的文件模式差异。",
          "riskLevels": [
            "permissionChange"
          ],
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/chmod.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "context": "posix-utility",
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "usage": "chmod [ -R ] mode file ...",
      "options": [
        "-R"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "chown",
      "en": "Change file owner and group",
      "zh": "修改文件所有者",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-chown",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/chown.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "keywords": [
        "修改文件所有者",
        "Change file owner and group",
        "chown",
        "Unix",
        "POSIX"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils / posix-utilities 提供的 chown 来完成“change the file ownership”时",
          "goal": "按固定官方版本的定义调用 chown，并依据退出状态判断该操作是否完成",
          "value": "chown",
          "description": "chown 的官方用途是“change the file ownership”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils / posix-utilities 的定义执行 chown；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": false,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/chown.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ],
          "warning": "chown 可能修改系统、磁盘、账号、服务或进程状态；仅在已确认对象和回滚方案后执行。",
          "riskLevels": [
            "deleteOrOverwrite"
          ],
          "caveat": "执行前先用只读命令检查目标、确认影响范围并备份可恢复数据；优先在隔离环境验证。"
        }
      ],
      "context": "posix-utility",
      "platformCaveat": "修改所有者通常需要管理员权限，用户和组命名规则取决于本机目录服务。",
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "usage": "chown [ -h ] owner [ : group ] file ... chown -R [ -H|-L|-P ] owner [ : group ] file ...",
      "options": [
        "-h",
        "-H",
        "-R",
        "-L",
        "-P"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "chroot",
      "en": "chroot run command or interactive shell with special root directory",
      "zh": "chroot：chroot run command or interactive shell with special root directory（来源：gnu-coreutils）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-chroot",
      "context": "external-command",
      "keywords": [
        "chroot",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils 提供的 chroot 来完成“chroot run command or interactive shell with special root directory”时",
          "goal": "按固定官方版本的定义调用 chroot，并依据退出状态判断该操作是否完成",
          "value": "chroot",
          "description": "chroot 的官方用途是“chroot run command or interactive shell with special root directory”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils 的定义执行 chroot；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "gnu-manuals"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz/man/chroot.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz · man/chroot.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "chroot [\\,OPTION\\/]... \\,NEWROOT \\/[\\,COMMAND \\/[\\,ARG\\/]...]",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "cksum",
      "en": "write file checksums and sizes",
      "zh": "cksum：write file checksums and sizes（来源：gnu-coreutils / posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-cksum",
      "context": "posix-utility",
      "keywords": [
        "cksum",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils / posix-utilities 提供的 cksum 来完成“write file checksums and sizes”时",
          "goal": "按固定官方版本的定义调用 cksum，并依据退出状态判断该操作是否完成",
          "value": "cksum",
          "description": "cksum 的官方用途是“write file checksums and sizes”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils / posix-utilities 的定义执行 cksum；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/cksum.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/cksum.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "cksum [ file ... ]",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "cmp",
      "en": "compare two files",
      "zh": "cmp：compare two files（来源：gnu-diffutils / posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-cmp",
      "context": "posix-utility",
      "keywords": [
        "cmp",
        "命令",
        "终端",
        "gnu-diffutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-diffutils / posix-utilities 提供的 cmp 来完成“compare two files”时",
          "goal": "按固定官方版本的定义调用 cmp，并依据退出状态判断该操作是否完成",
          "value": "cmp",
          "description": "cmp 的官方用途是“compare two files”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-diffutils / posix-utilities 的定义执行 cmp；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/cmp.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-diffutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-diffutils 3.12; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/cmp.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "cmp [ -l|-s ] file1 file2",
      "options": [
        "-l",
        "-s"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "comm",
      "en": "select or reject lines common to two files",
      "zh": "comm：select or reject lines common to two files（来源：gnu-coreutils / posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-comm",
      "context": "posix-utility",
      "keywords": [
        "comm",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils / posix-utilities 提供的 comm 来完成“select or reject lines common to two files”时",
          "goal": "按固定官方版本的定义调用 comm，并依据退出状态判断该操作是否完成",
          "value": "comm",
          "description": "comm 的官方用途是“select or reject lines common to two files”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils / posix-utilities 的定义执行 comm；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/comm.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/comm.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "comm [ -123 ] file1 file2",
      "options": [
        "-1",
        "-2",
        "-3"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "command",
      "en": "execute a simple command",
      "zh": "command：execute a simple command（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-command",
      "context": "posix-utility",
      "keywords": [
        "command",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 command 来完成“execute a simple command”时",
          "goal": "按固定官方版本的定义调用 command，并依据退出状态判断该操作是否完成",
          "value": "command",
          "description": "command 的官方用途是“execute a simple command”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 command；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/command.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/command.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "command [ -p ] command_name [ argument ... ] command [ -p ][ -v|-V ] command_name",
      "options": [
        "-p",
        "-v",
        "-V"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "compress",
      "en": "compress and decompress data",
      "zh": "compress：compress and decompress data（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-compress",
      "context": "posix-utility",
      "keywords": [
        "compress",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 compress 来完成“compress and decompress data”时",
          "goal": "按固定官方版本的定义调用 compress，并依据退出状态判断该操作是否完成",
          "value": "compress",
          "description": "compress 的官方用途是“compress and decompress data”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 compress；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/compress.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [
        "some synopsis forms require POSIX option group XSI"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/compress.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "[ XSI ] compress [ -fv ] [ -b value ] [ -g | -m algo ] [ file ... ] compress -c [ -fv ] [ -b value ] [ -g | -m algo ] [ file ] compress -d [ -cfv ] [ file ... ] uncompress [ -cfv ] [ file ... ] zcat [ file ... ]",
      "options": [
        "-b",
        "-c",
        "-d",
        "-f",
        "-g",
        "-m",
        "-v"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "coreutils",
      "en": "coreutils single binary for coreutils programs",
      "zh": "coreutils：coreutils single binary for coreutils programs（来源：gnu-coreutils）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-coreutils",
      "context": "external-command",
      "keywords": [
        "coreutils",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils 提供的 coreutils 来完成“coreutils single binary for coreutils programs”时",
          "goal": "按固定官方版本的定义调用 coreutils，并依据退出状态判断该操作是否完成",
          "value": "coreutils",
          "description": "coreutils 的官方用途是“coreutils single binary for coreutils programs”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils 的定义执行 coreutils；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "gnu-manuals"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz/man/coreutils.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ],
          "caveat": "该入口受以下条件限制：available when GNU coreutils is built or installed in multi-call form。"
        }
      ],
      "components": [
        "gnu-coreutils"
      ],
      "constraints": [
        "available when GNU coreutils is built or installed in multi-call form",
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz · man/coreutils.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "coreutils \\,--coreutils-prog=PROGRAM_NAME \\/[\\,PARAMETERS\\/]...",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "cp",
      "en": "Copy files and directories",
      "zh": "复制文件或目录",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-cp",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/cp.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "keywords": [
        "复制",
        "克隆",
        "拷贝",
        "复制文件或目录",
        "Copy files and directories",
        "cp",
        "递归复制目录",
        "Copy directories recursively"
      ],
      "examples": [
        {
          "value": "cp source.txt copy.txt",
          "description": "复制文件或目录",
          "generated": true,
          "copyable": true,
          "sourceType": "ai-derived",
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "platforms": [
            "mac",
            "linux"
          ],
          "scenario": "在实际工作中需要复制文件或目录时",
          "goal": "复制文件或目录",
          "expected": "操作后，工具完成“复制文件或目录”对应的行为；条件不满足时返回错误。",
          "caveat": "执行前确认当前目录、参数和工具版本与示例一致",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/cp.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "sourceIds": [
            "posix-shell-utilities"
          ]
        },
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
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "context": "posix-utility",
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "usage": "cp [ -Pfip ] source_file target_file cp [ -Pfip ] source_file ... target cp -R [ -H|-L|-P ] [ -fip ] source_file ... target",
      "options": [
        "-f",
        "-H",
        "-i",
        "-L",
        "-P",
        "-p",
        "-R"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "crontab",
      "en": "schedule periodic background work",
      "zh": "crontab：schedule periodic background work（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-crontab",
      "context": "posix-utility",
      "keywords": [
        "crontab",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 crontab 来完成“schedule periodic background work”时",
          "goal": "按固定官方版本的定义调用 crontab，并依据退出状态判断该操作是否完成",
          "value": "crontab",
          "description": "crontab 的官方用途是“schedule periodic background work”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 crontab；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/crontab.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [
        "some synopsis forms require POSIX option group UP"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/crontab.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "crontab [ file ] [ UP ] crontab [ -e |-l|-r ]",
      "options": [
        "-e",
        "-l",
        "-r"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "csplit",
      "en": "split files based on context",
      "zh": "csplit：split files based on context（来源：gnu-coreutils / posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-csplit",
      "context": "posix-utility",
      "keywords": [
        "csplit",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils / posix-utilities 提供的 csplit 来完成“split files based on context”时",
          "goal": "按固定官方版本的定义调用 csplit，并依据退出状态判断该操作是否完成",
          "value": "csplit",
          "description": "csplit 的官方用途是“split files based on context”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils / posix-utilities 的定义执行 csplit；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/csplit.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/csplit.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "csplit [ -ks ] [ -f prefix ] [ -n number ] file arg ...",
      "options": [
        "-f",
        "-k",
        "-n",
        "-s"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "ctags",
      "en": "create a tags file ( DEVELOPMENT )",
      "zh": "ctags：create a tags file ( DEVELOPMENT )（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-ctags",
      "context": "posix-utility",
      "keywords": [
        "ctags",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 ctags 来完成“create a tags file ( DEVELOPMENT )”时",
          "goal": "按固定官方版本的定义调用 ctags，并依据退出状态判断该操作是否完成",
          "value": "ctags",
          "description": "ctags 的官方用途是“create a tags file ( DEVELOPMENT )”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 ctags；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/ctags.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [
        "POSIX option group: DEVELOPMENT"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/ctags.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "[ CD SD ] ctags [ -a ] [ -f tagsfile ] pathname ... ctags -x pathname ...",
      "options": [
        "-a",
        "-f",
        "-x"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "curl",
      "en": "Transfer data from or to a server",
      "zh": "从/向服务器传输数据",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-curl",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "curl-docs",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://curl.se/docs/manpage.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "keywords": [
        "从/向服务器传输数据",
        "Transfer data from or to a server",
        "curl",
        "Unix",
        "POSIX"
      ],
      "examples": [
        {
          "scenario": "接口/API 部署完成后，需要从当前终端确认健康检查端点能否返回响应",
          "goal": "向 HTTPS 接口健康检查地址发起请求",
          "value": "curl https://example.com/health",
          "description": "curl 请求给定 URL，并把响应正文写到标准输出。",
          "expected": "终端显示服务器返回的响应正文；网络或 HTTP 处理失败时返回相应状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "curl-docs"
          ],
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "curl-docs",
              "locator": "https://curl.se/docs/manpage.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "context": "external-command",
      "components": [
        "curl"
      ],
      "constraints": [
        "requires curl; protocol and option availability depends on the installed build"
      ],
      "usage": "curl [options...] <url>",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "curl-config",
      "en": "report information about the installed libcurl",
      "zh": "curl-config：report information about the installed libcurl（来源：curl）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-curl-config",
      "context": "external-command",
      "keywords": [
        "curl-config",
        "命令",
        "终端",
        "curl"
      ],
      "examples": [
        {
          "scenario": "需要使用 curl 提供的 curl-config 来完成“report information about the installed libcurl”时",
          "goal": "按固定官方版本的定义调用 curl-config，并依据退出状态判断该操作是否完成",
          "value": "curl-config",
          "description": "curl-config 的官方用途是“report information about the installed libcurl”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 curl 的定义执行 curl-config；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "curl-docs"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "curl-docs",
              "locator": "https://github.com/curl/curl/releases/tag/curl-8_21_0/docs/curl-config.md",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "curl"
      ],
      "constraints": [
        "requires curl; protocol and option availability depends on the installed build"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "curl-docs",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/curl/curl/releases/tag/curl-8_21_0 · docs/curl-config.md",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "curl-config [options]",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "cut",
      "en": "cut out selected fields of each line of a file",
      "zh": "cut：cut out selected fields of each line of a file（来源：gnu-coreutils / posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-cut",
      "context": "posix-utility",
      "keywords": [
        "cut",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils / posix-utilities 提供的 cut 来完成“cut out selected fields of each line of a file”时",
          "goal": "按固定官方版本的定义调用 cut，并依据退出状态判断该操作是否完成",
          "value": "cut",
          "description": "cut 的官方用途是“cut out selected fields of each line of a file”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils / posix-utilities 的定义执行 cut；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/cut.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/cut.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "cut -b list [ -n ] [ file ... ] cut -c list [ file ... ] cut -f list [ -d delim ] [ -s ] [ file ... ]",
      "options": [
        "-b",
        "-c",
        "-f",
        "-s",
        "-n",
        "-d"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "cxref",
      "en": "generate a C-language program cross-reference table ( DEVELOPMENT )",
      "zh": "cxref：generate a C-language program cross-reference table ( DEVELOPMENT )（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-cxref",
      "context": "posix-utility",
      "keywords": [
        "cxref",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 cxref 来完成“generate a C-language program cross-reference table ( DEVELOPMENT )”时",
          "goal": "按固定官方版本的定义调用 cxref，并依据退出状态判断该操作是否完成",
          "value": "cxref",
          "description": "cxref 的官方用途是“generate a C-language program cross-reference table ( DEVELOPMENT )”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 cxref；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/cxref.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [
        "POSIX option group: DEVELOPMENT",
        "some synopsis forms require POSIX option group XSI"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/cxref.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "[ XSI ] cxref [ -cs ] [ -o file ] [ -w num ] [ -D name [ = def ]] ... [ -I dir ] ... [ -U name ] ... file ...",
      "options": [
        "-D",
        "-I",
        "-U",
        "-c",
        "-s",
        "-o",
        "-w"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "date",
      "en": "write the date and time",
      "zh": "date：write the date and time（来源：gnu-coreutils / posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-date",
      "context": "posix-utility",
      "keywords": [
        "date",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils / posix-utilities 提供的 date 来完成“write the date and time”时",
          "goal": "按固定官方版本的定义调用 date，并依据退出状态判断该操作是否完成",
          "value": "date",
          "description": "date 的官方用途是“write the date and time”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils / posix-utilities 的定义执行 date；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/date.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately",
        "some synopsis forms require POSIX option group XSI"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/date.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "date [ -u ] [ + format ] [ XSI ] date [ -u ] mmddhhmm [[ cc ] yy ]",
      "options": [
        "-u"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "dd",
      "en": "convert and copy a file",
      "zh": "dd：convert and copy a file（来源：gnu-coreutils / posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-dd",
      "context": "posix-utility",
      "keywords": [
        "dd",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils / posix-utilities 提供的 dd 来完成“convert and copy a file”时",
          "goal": "按固定官方版本的定义调用 dd，并依据退出状态判断该操作是否完成",
          "value": "dd",
          "description": "dd 的官方用途是“convert and copy a file”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils / posix-utilities 的定义执行 dd；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": false,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/dd.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ],
          "warning": "dd 可能修改系统、磁盘、账号、服务或进程状态；仅在已确认对象和回滚方案后执行。",
          "riskLevels": [
            "deleteOrOverwrite"
          ],
          "caveat": "执行前先用只读命令检查目标、确认影响范围并备份可恢复数据；优先在隔离环境验证。"
        }
      ],
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/dd.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "dd [ operand ... ]",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "delta",
      "en": "make a delta (change) to an SCCS file ( DEVELOPMENT )",
      "zh": "delta：make a delta (change) to an SCCS file ( DEVELOPMENT )（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-delta",
      "context": "posix-utility",
      "keywords": [
        "delta",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 delta 来完成“make a delta (change) to an SCCS file ( DEVELOPMENT )”时",
          "goal": "按固定官方版本的定义调用 delta，并依据退出状态判断该操作是否完成",
          "value": "delta",
          "description": "delta 的官方用途是“make a delta (change) to an SCCS file ( DEVELOPMENT )”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 delta；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/delta.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [
        "POSIX option group: DEVELOPMENT",
        "some synopsis forms require POSIX option group XSI"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/delta.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "[ XSI ] delta [ -nps ] [ -g list ] [ -m mrlist ] [ -r SID ] [ -y [ comment ]] file ...",
      "options": [
        "-y",
        "-r",
        "-e",
        "-s",
        "-n",
        "-g",
        "-m",
        "-p"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "df",
      "en": "Show disk space usage in human-readable format",
      "zh": "查看磁盘空间使用（人类可读）",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-df",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/df.html",
          "checkedAt": "2026-07-31"
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
          "scenario": "构建报磁盘空间不足，需要用可移植单位核对各文件系统剩余容量",
          "goal": "以 1024 字节块显示文件系统空间",
          "value": "df -k",
          "description": "-k 使用 1024 字节块报告容量，便于在不同 POSIX 环境间比较。",
          "expected": "终端输出已挂载文件系统的总量、已用、可用空间和挂载位置。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/df.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "context": "posix-utility",
      "platformCaveat": "macOS 与 Linux 的文件系统类型选项不同，基础容量输出可跨平台使用。",
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately",
        "some synopsis forms require POSIX option group XSI"
      ],
      "usage": "[ XSI ] df [ -k ] [ -P| -t ] [ file ... ]",
      "options": [
        "-k",
        "-P",
        "-t"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "diff",
      "en": "Compare files line by line",
      "zh": "逐行比较文件差异",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-diff",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/diff.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "keywords": [
        "逐行比较文件差异",
        "Compare files line by line",
        "diff",
        "Unix",
        "POSIX"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-diffutils / posix-utilities 提供的 diff 来完成“compare two files”时",
          "goal": "按固定官方版本的定义调用 diff，并依据退出状态判断该操作是否完成",
          "value": "diff",
          "description": "diff 的官方用途是“compare two files”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-diffutils / posix-utilities 的定义执行 diff；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/diff.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "context": "posix-utility",
      "components": [
        "gnu-diffutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-diffutils 3.12; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "usage": "diff [ -c|-e|-f|-u|-C n |-U n ] [ -br ] file1 file2",
      "options": [
        "-b",
        "-c",
        "-C",
        "-e",
        "-f",
        "-r",
        "-u",
        "-U"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "diff3",
      "en": "diff3 compare three files line by line",
      "zh": "diff3：diff3 compare three files line by line（来源：gnu-diffutils）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-diff3",
      "context": "external-command",
      "keywords": [
        "diff3",
        "命令",
        "终端",
        "gnu-diffutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-diffutils 提供的 diff3 来完成“diff3 compare three files line by line”时",
          "goal": "按固定官方版本的定义调用 diff3，并依据退出状态判断该操作是否完成",
          "value": "diff3",
          "description": "diff3 的官方用途是“diff3 compare three files line by line”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-diffutils 的定义执行 diff3；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "gnu-manuals"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://ftp.gnu.org/gnu/diffutils/diffutils-3.12.tar.xz/man/diff3.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-diffutils"
      ],
      "constraints": [
        "reference behavior follows gnu-diffutils 3.12; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://ftp.gnu.org/gnu/diffutils/diffutils-3.12.tar.xz · man/diff3.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "diff3 [\\,OPTION\\/]... \\,MYFILE OLDFILE YOURFILE\\/",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "dir",
      "en": "dir list directory contents",
      "zh": "dir：dir list directory contents（来源：gnu-coreutils）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-dir",
      "context": "external-command",
      "keywords": [
        "dir",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils 提供的 dir 来完成“dir list directory contents”时",
          "goal": "按固定官方版本的定义调用 dir，并依据退出状态判断该操作是否完成",
          "value": "dir",
          "description": "dir 的官方用途是“dir list directory contents”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils 的定义执行 dir；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "gnu-manuals"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz/man/dir.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz · man/dir.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "dir [\\,OPTION\\/]... [\\,FILE\\/]...",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "dircolors",
      "en": "dircolors color setup for ls",
      "zh": "dircolors：dircolors color setup for ls（来源：gnu-coreutils）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-dircolors",
      "context": "external-command",
      "keywords": [
        "dircolors",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils 提供的 dircolors 来完成“dircolors color setup for ls”时",
          "goal": "按固定官方版本的定义调用 dircolors，并依据退出状态判断该操作是否完成",
          "value": "dircolors",
          "description": "dircolors 的官方用途是“dircolors color setup for ls”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils 的定义执行 dircolors；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "gnu-manuals"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz/man/dircolors.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz · man/dircolors.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "dircolors [\\,OPTION\\/]... [\\,FILE\\/]",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "dirname",
      "en": "return the directory portion of a pathname",
      "zh": "dirname：return the directory portion of a pathname（来源：gnu-coreutils / posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-dirname",
      "context": "posix-utility",
      "keywords": [
        "dirname",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils / posix-utilities 提供的 dirname 来完成“return the directory portion of a pathname”时",
          "goal": "按固定官方版本的定义调用 dirname，并依据退出状态判断该操作是否完成",
          "value": "dirname",
          "description": "dirname 的官方用途是“return the directory portion of a pathname”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils / posix-utilities 的定义执行 dirname；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/dirname.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/dirname.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "dirname string",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "du",
      "en": "Show directory size summary",
      "zh": "查看目录占用空间（汇总）",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-du",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/du.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "查看目录占用空间（汇总）",
        "Show directory size summary",
        "du",
        "Unix",
        "POSIX"
      ],
      "examples": [
        {
          "scenario": "依赖目录膨胀导致缓存超限，需要汇总 node_modules 的磁盘占用",
          "goal": "以 1024 字节块汇总单个目录",
          "value": "du -sk ./node_modules",
          "description": "-s 只输出汇总值，-k 使用 1024 字节块。",
          "expected": "终端输出 node_modules 的汇总占用及目录名，不修改目录内容。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/du.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "context": "posix-utility",
      "platformCaveat": "macOS 与 Linux 的扩展选项不同；示例只使用两端常见参数。",
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "usage": "du [ -a|-s ] [ -kx ] [ -H|-L ] [ file ... ]",
      "options": [
        "-a",
        "-H",
        "-k",
        "-L",
        "-s",
        "-x"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "echo",
      "en": "write arguments to standard output",
      "zh": "echo：write arguments to standard output（来源：gnu-coreutils / posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-echo",
      "context": "posix-utility",
      "keywords": [
        "echo",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils / posix-utilities 提供的 echo 来完成“write arguments to standard output”时",
          "goal": "按固定官方版本的定义调用 echo，并依据退出状态判断该操作是否完成",
          "value": "echo",
          "description": "echo 的官方用途是“write arguments to standard output”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils / posix-utilities 的定义执行 echo；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/echo.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/echo.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "echo [ string ... ]",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "ed",
      "en": "edit text",
      "zh": "ed：edit text（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-ed",
      "context": "posix-utility",
      "keywords": [
        "ed",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 ed 来完成“edit text”时",
          "goal": "按固定官方版本的定义调用 ed，并依据退出状态判断该操作是否完成",
          "value": "ed",
          "description": "ed 的官方用途是“edit text”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 ed；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/ed.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/ed.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "ed [ -p string ] [ -s ] [ file ]",
      "options": [
        "-p",
        "-s"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "env",
      "en": "set the environment for command invocation",
      "zh": "env：set the environment for command invocation（来源：gnu-coreutils / posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-env",
      "context": "posix-utility",
      "keywords": [
        "env",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils / posix-utilities 提供的 env 来完成“set the environment for command invocation”时",
          "goal": "按固定官方版本的定义调用 env，并依据退出状态判断该操作是否完成",
          "value": "env",
          "description": "env 的官方用途是“set the environment for command invocation”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils / posix-utilities 的定义执行 env；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/env.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/env.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "env [ -i ] [ name = value ] ... [ utility [ argument ... ]]",
      "options": [
        "-i"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "ex",
      "en": "text editor",
      "zh": "ex：text editor（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-ex",
      "context": "posix-utility",
      "keywords": [
        "ex",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 ex 来完成“text editor”时",
          "goal": "按固定官方版本的定义调用 ex，并依据退出状态判断该操作是否完成",
          "value": "ex",
          "description": "ex 的官方用途是“text editor”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 ex；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/ex.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [
        "some synopsis forms require POSIX option group UP"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/ex.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "[ UP ] ex [ -rR ] [ -s|-v ] [ -c command ] [ -t tagstring ] [ -w size ] [ file ... ]",
      "options": [
        "-c",
        "-r",
        "-t",
        "-R",
        "-s",
        "-v",
        "-w"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "expand",
      "en": "convert tabs to spaces",
      "zh": "expand：convert tabs to spaces（来源：gnu-coreutils / posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-expand",
      "context": "posix-utility",
      "keywords": [
        "expand",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils / posix-utilities 提供的 expand 来完成“convert tabs to spaces”时",
          "goal": "按固定官方版本的定义调用 expand，并依据退出状态判断该操作是否完成",
          "value": "expand",
          "description": "expand 的官方用途是“convert tabs to spaces”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils / posix-utilities 的定义执行 expand；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/expand.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/expand.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "expand [ -t tablist ] [ file ... ]",
      "options": [
        "-t"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "expr",
      "en": "evaluate arguments as an expression",
      "zh": "expr：evaluate arguments as an expression（来源：gnu-coreutils / posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-expr",
      "context": "posix-utility",
      "keywords": [
        "expr",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils / posix-utilities 提供的 expr 来完成“evaluate arguments as an expression”时",
          "goal": "按固定官方版本的定义调用 expr，并依据退出状态判断该操作是否完成",
          "value": "expr",
          "description": "expr 的官方用途是“evaluate arguments as an expression”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils / posix-utilities 的定义执行 expr；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/expr.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/expr.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "expr operand ...",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "factor",
      "en": "factor factor numbers",
      "zh": "factor：factor factor numbers（来源：gnu-coreutils）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-factor",
      "context": "external-command",
      "keywords": [
        "factor",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils 提供的 factor 来完成“factor factor numbers”时",
          "goal": "按固定官方版本的定义调用 factor，并依据退出状态判断该操作是否完成",
          "value": "factor",
          "description": "factor 的官方用途是“factor factor numbers”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils 的定义执行 factor；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "gnu-manuals"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz/man/factor.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz · man/factor.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "factor [\\,OPTION\\/] [\\,NUMBER\\/]...",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "false",
      "en": "return false value",
      "zh": "false：return false value（来源：gnu-coreutils / posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-false",
      "context": "posix-utility",
      "keywords": [
        "false",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils / posix-utilities 提供的 false 来完成“return false value”时",
          "goal": "按固定官方版本的定义调用 false，并依据退出状态判断该操作是否完成",
          "value": "false",
          "description": "false 的官方用途是“return false value”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils / posix-utilities 的定义执行 false；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/false.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/false.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "false",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "fc",
      "en": "process the command history list",
      "zh": "fc：process the command history list（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-fc",
      "context": "posix-utility",
      "keywords": [
        "fc",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 fc 来完成“process the command history list”时",
          "goal": "按固定官方版本的定义调用 fc，并依据退出状态判断该操作是否完成",
          "value": "fc",
          "description": "fc 的官方用途是“process the command history list”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 fc；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/fc.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [
        "some synopsis forms require POSIX option group UP"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/fc.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "[ UP ] fc [ -r ] [ -e editor ] [ first [ last ]] fc -l [ -nr ] [ first [ last ]] fc -s [ old = new ] [ first ]",
      "options": [
        "-e",
        "-l",
        "-r",
        "-n",
        "-s"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "fg",
      "en": "run jobs in the foreground",
      "zh": "fg：run jobs in the foreground（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-fg",
      "context": "posix-utility",
      "keywords": [
        "fg",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 fg 来完成“run jobs in the foreground”时",
          "goal": "按固定官方版本的定义调用 fg，并依据退出状态判断该操作是否完成",
          "value": "fg",
          "description": "fg 的官方用途是“run jobs in the foreground”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 fg；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/fg.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [
        "some synopsis forms require POSIX option group UP"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/fg.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "[ UP ] fg [ job_id ]",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "file",
      "en": "determine file type",
      "zh": "file：determine file type（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-file",
      "context": "posix-utility",
      "keywords": [
        "file",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 file 来完成“determine file type”时",
          "goal": "按固定官方版本的定义调用 file，并依据退出状态判断该操作是否完成",
          "value": "file",
          "description": "file 的官方用途是“determine file type”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 file；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/file.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/file.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "file [ -dh ] [ -M file ] [ -m file ] file ... file -i [ -h ] file ...",
      "options": [
        "-m",
        "-d",
        "-M",
        "-h",
        "-i"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "find",
      "en": "Search for files in a directory hierarchy",
      "zh": "在目录层级中搜索文件",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-find",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/find.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "keywords": [
        "搜索",
        "查找",
        "定位",
        "在目录层级中搜索文件",
        "Search for files in a directory hierarchy",
        "find",
        "按名称模式查找文件",
        "Find files by name pattern"
      ],
      "examples": [
        {
          "scenario": "测试任务报错但未给出文件路径，需要在当前项目文件中定位所有测试脚本",
          "goal": "按名称模式递归查找项目文件",
          "value": "find . -name '*.test.js' -type f",
          "description": "从当前目录向下遍历，只输出名称匹配且类型为普通文件的路径。",
          "expected": "终端逐行输出项目树中匹配 *.test.js 的普通文件路径；没有匹配时不输出路径。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/find.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "context": "posix-utility",
      "components": [
        "gnu-findutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-findutils 4.11.0; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "usage": "find [ -H|-L ] path ... [ operand_expression ... ]",
      "options": [
        "-H",
        "-L"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "fmt",
      "en": "fmt simple optimal text formatter",
      "zh": "fmt：fmt simple optimal text formatter（来源：gnu-coreutils）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-fmt",
      "context": "external-command",
      "keywords": [
        "fmt",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils 提供的 fmt 来完成“fmt simple optimal text formatter”时",
          "goal": "按固定官方版本的定义调用 fmt，并依据退出状态判断该操作是否完成",
          "value": "fmt",
          "description": "fmt 的官方用途是“fmt simple optimal text formatter”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils 的定义执行 fmt；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "gnu-manuals"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz/man/fmt.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz · man/fmt.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "fmt [\\,-WIDTH\\/] [\\,OPTION\\/]... [\\,FILE\\/]...",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "fold",
      "en": "filter for folding lines",
      "zh": "fold：filter for folding lines（来源：gnu-coreutils / posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-fold",
      "context": "posix-utility",
      "keywords": [
        "fold",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils / posix-utilities 提供的 fold 来完成“filter for folding lines”时",
          "goal": "按固定官方版本的定义调用 fold，并依据退出状态判断该操作是否完成",
          "value": "fold",
          "description": "fold 的官方用途是“filter for folding lines”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils / posix-utilities 的定义执行 fold；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/fold.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/fold.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "fold [ -bs ] [ -w width ] [ file ... ]",
      "options": [
        "-b",
        "-s",
        "-w"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "fuser",
      "en": "list process IDs of all processes that are using one or more named files",
      "zh": "fuser：list process IDs of all processes that are using one or more named files（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-fuser",
      "context": "posix-utility",
      "keywords": [
        "fuser",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 fuser 来完成“list process IDs of all processes that are using one or more named files”时",
          "goal": "按固定官方版本的定义调用 fuser，并依据退出状态判断该操作是否完成",
          "value": "fuser",
          "description": "fuser 的官方用途是“list process IDs of all processes that are using one or more named files”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 fuser；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/fuser.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [
        "some synopsis forms require POSIX option group XSI"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/fuser.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "[ XSI ] fuser [ -cfu ] file ...",
      "options": [
        "-c",
        "-f",
        "-u"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "gawk",
      "en": "gawk pattern scanning and processing language",
      "zh": "gawk：gawk pattern scanning and processing language（来源：gnu-gawk）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-gawk",
      "context": "external-command",
      "keywords": [
        "gawk",
        "命令",
        "终端",
        "gnu-gawk"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-gawk 提供的 gawk 来完成“gawk pattern scanning and processing language”时",
          "goal": "按固定官方版本的定义调用 gawk，并依据退出状态判断该操作是否完成",
          "value": "gawk",
          "description": "gawk 的官方用途是“gawk pattern scanning and processing language”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-gawk 的定义执行 gawk；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "gnu-manuals"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://ftp.gnu.org/gnu/gawk/gawk-5.4.1.tar.xz/doc/gawk.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-gawk"
      ],
      "constraints": [
        "reference behavior follows gnu-gawk 5.4.1; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://ftp.gnu.org/gnu/gawk/gawk-5.4.1.tar.xz · doc/gawk.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "gawk [ \\*(PX or \\*(GN style options ] f program-file [ \\^ ] file .\\|.\\|. .br gawk [ \\*(PX or \\*(GN style options ] [ \\^ ] program-text file .\\|.\\|.",
      "options": [
        "-f",
        "-file",
        "-F",
        "-field-separator",
        "-v",
        "-assign",
        "-b",
        "-characters"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "gawkbug",
      "en": "gawkbug report a bug in gawk",
      "zh": "gawkbug：gawkbug report a bug in gawk（来源：gnu-gawk）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-gawkbug",
      "context": "external-command",
      "keywords": [
        "gawkbug",
        "命令",
        "终端",
        "gnu-gawk"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-gawk 提供的 gawkbug 来完成“gawkbug report a bug in gawk”时",
          "goal": "按固定官方版本的定义调用 gawkbug，并依据退出状态判断该操作是否完成",
          "value": "gawkbug",
          "description": "gawkbug 的官方用途是“gawkbug report a bug in gawk”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-gawk 的定义执行 gawkbug；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "gnu-manuals"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://ftp.gnu.org/gnu/gawk/gawk-5.4.1.tar.xz/doc/gawkbug.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-gawk"
      ],
      "constraints": [
        "reference behavior follows gnu-gawk 5.4.1; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://ftp.gnu.org/gnu/gawk/gawk-5.4.1.tar.xz · doc/gawkbug.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "gawkbug [\\^version] [\\^help] [email-address]",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "gencat",
      "en": "generate a formatted message catalog",
      "zh": "gencat：generate a formatted message catalog（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-gencat",
      "context": "posix-utility",
      "keywords": [
        "gencat",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 gencat 来完成“generate a formatted message catalog”时",
          "goal": "按固定官方版本的定义调用 gencat，并依据退出状态判断该操作是否完成",
          "value": "gencat",
          "description": "gencat 的官方用途是“generate a formatted message catalog”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 gencat；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/gencat.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/gencat.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "gencat catfile msgfile ...",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "get",
      "en": "get a version of an SCCS file ( DEVELOPMENT )",
      "zh": "get：get a version of an SCCS file ( DEVELOPMENT )（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-get",
      "context": "posix-utility",
      "keywords": [
        "get",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 get 来完成“get a version of an SCCS file ( DEVELOPMENT )”时",
          "goal": "按固定官方版本的定义调用 get，并依据退出状态判断该操作是否完成",
          "value": "get",
          "description": "get 的官方用途是“get a version of an SCCS file ( DEVELOPMENT )”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 get；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/get.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [
        "POSIX option group: DEVELOPMENT",
        "some synopsis forms require POSIX option group XSI"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/get.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "[ XSI ] get [ -begkmnlLpst ] [ -c cutoff ] [ -i list ] [ -r SID ] [ -x list ] file ...",
      "options": [
        "-r",
        "-e",
        "-c",
        "-k",
        "-b",
        "-i",
        "-x",
        "-l"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "getconf",
      "en": "get configuration values",
      "zh": "getconf：get configuration values（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-getconf",
      "context": "posix-utility",
      "keywords": [
        "getconf",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 getconf 来完成“get configuration values”时",
          "goal": "按固定官方版本的定义调用 getconf，并依据退出状态判断该操作是否完成",
          "value": "getconf",
          "description": "getconf 的官方用途是“get configuration values”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 getconf；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/getconf.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/getconf.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "getconf [ -v specification ] system_var getconf [ -v specification ] path_var pathname",
      "options": [
        "-v",
        "-1"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "getopts",
      "en": "parse utility options",
      "zh": "getopts：parse utility options（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-getopts",
      "context": "posix-utility",
      "keywords": [
        "getopts",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 getopts 来完成“parse utility options”时",
          "goal": "按固定官方版本的定义调用 getopts，并依据退出状态判断该操作是否完成",
          "value": "getopts",
          "description": "getopts 的官方用途是“parse utility options”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 getopts；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/getopts.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/getopts.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "getopts optstring name [ param ... ]",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "gettext",
      "en": "retrieve text string from messages object",
      "zh": "gettext：retrieve text string from messages object（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-gettext",
      "context": "posix-utility",
      "keywords": [
        "gettext",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 gettext 来完成“retrieve text string from messages object”时",
          "goal": "按固定官方版本的定义调用 gettext，并依据退出状态判断该操作是否完成",
          "value": "gettext",
          "description": "gettext 的官方用途是“retrieve text string from messages object”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 gettext；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/gettext.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/gettext.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "gettext [ -e|-E ] [ -d textdomain ] [ textdomain ] msgid gettext [ -e|-E ] [ -n ] -s [ -d textdomain ] msgid ... ngettext [ -e|-E ] [ -d textdomain ] [ textdomain ] msgid msgid_plural n",
      "options": [
        "-d",
        "-e",
        "-E",
        "-n",
        "-s"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "grep",
      "en": "Search text patterns in files",
      "zh": "在文件中搜索匹配文本",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-grep",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/grep.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "keywords": [
        "搜索",
        "查找",
        "定位",
        "在文件中搜索匹配文本",
        "Search text patterns in files",
        "grep",
        "递归搜索目录中匹配文本",
        "Recursively search in directory"
      ],
      "examples": [
        {
          "scenario": "代码评审前需要在说明文件中定位尚未处理的 TODO，并保留行号便于跳转",
          "goal": "搜索匹配文本并显示所在行号",
          "value": "grep -n 'TODO' README.md",
          "description": "-n 为每个匹配行添加行号，便于回到文件中精确定位。",
          "expected": "终端输出包含 TODO 的行及其行号；没有匹配时不输出并返回非零状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/grep.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        },
        {
          "scenario": "重构前需要确认旧接口名在源码树中还出现在哪些文件里",
          "goal": "递归搜索目录中的匹配文本",
          "value": "grep -r 'legacyApi' ./src",
          "description": "-r 递归读取 src 下的文件并输出包含 legacyApi 的匹配行。",
          "expected": "终端输出文件路径和匹配内容；没有匹配时不输出并返回非零状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "gnu-manuals"
          ],
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://ftp.gnu.org/gnu/grep/grep-3.12.tar.xz · doc/grep.texi",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "context": "posix-utility",
      "aliases": [
        "egrep",
        "fgrep",
        "rgrep"
      ],
      "components": [
        "gnu-grep",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-grep 3.12; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "usage": "grep [ -E|-F ] [ -c|-l|-q ] [ -insvx ] -e pattern_list [ -e pattern_list ] ... [ -f pattern_file ] ... [ file ... ] grep [ -E|-F ] [ -c|-l|-q ] [ -insvx ] [ -e pattern_list ]... -f pattern_file [ -f pattern_file ] ... [ file ... ] grep [ -E|-F ] [ -c|-l|-q ] [ -insvx ] pattern_li",
      "options": [
        "-E",
        "-F",
        "-c",
        "-e",
        "-f",
        "-i",
        "-l",
        "-n"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "groups",
      "en": "groups print the groups a user is in",
      "zh": "groups：groups print the groups a user is in（来源：gnu-coreutils）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-groups",
      "context": "external-command",
      "keywords": [
        "groups",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils 提供的 groups 来完成“groups print the groups a user is in”时",
          "goal": "按固定官方版本的定义调用 groups，并依据退出状态判断该操作是否完成",
          "value": "groups",
          "description": "groups 的官方用途是“groups print the groups a user is in”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils 的定义执行 groups；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "gnu-manuals"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz/man/groups.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz · man/groups.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "groups [\\,OPTION\\/]... [\\,USERNAME\\/]...",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "hash",
      "en": "remember or report utility locations",
      "zh": "hash：remember or report utility locations（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-hash",
      "context": "posix-utility",
      "keywords": [
        "hash",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 hash 来完成“remember or report utility locations”时",
          "goal": "按固定官方版本的定义调用 hash，并依据退出状态判断该操作是否完成",
          "value": "hash",
          "description": "hash 的官方用途是“remember or report utility locations”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 hash；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/hash.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/hash.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "hash [ utility ... ] hash -r",
      "options": [
        "-r"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "head",
      "en": "Output the first part of files",
      "zh": "输出文件开头部分",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-head",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/head.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "keywords": [
        "输出文件开头部分",
        "Output the first part of files",
        "head",
        "Unix",
        "POSIX"
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
          "expected": "执行后，终端或当前界面显示与“查看文件开头若干行”对应的信息。",
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "context": "posix-utility",
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "usage": "head [ -c number |-n number ] [ file ... ]",
      "options": [
        "-c",
        "-n"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "hostid",
      "en": "hostid print the numeric identifier for the current host",
      "zh": "hostid：hostid print the numeric identifier for the current host（来源：gnu-coreutils）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-hostid",
      "context": "external-command",
      "keywords": [
        "hostid",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils 提供的 hostid 来完成“hostid print the numeric identifier for the current host”时",
          "goal": "按固定官方版本的定义调用 hostid，并依据退出状态判断该操作是否完成",
          "value": "hostid",
          "description": "hostid 的官方用途是“hostid print the numeric identifier for the current host”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils 的定义执行 hostid；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "gnu-manuals"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz/man/hostid.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz · man/hostid.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "hostid [\\,OPTION\\/]",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "hostname",
      "en": "hostname set or print the name of the current host system",
      "zh": "hostname：hostname set or print the name of the current host system（来源：gnu-coreutils）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-hostname",
      "context": "external-command",
      "keywords": [
        "hostname",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils 提供的 hostname 来完成“hostname set or print the name of the current host system”时",
          "goal": "按固定官方版本的定义调用 hostname，并依据退出状态判断该操作是否完成",
          "value": "hostname",
          "description": "hostname 的官方用途是“hostname set or print the name of the current host system”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils 的定义执行 hostname；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "gnu-manuals"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz/man/hostname.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz · man/hostname.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "hostname [\\,NAME\\/] .br hostname \\,OPTION\\/",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "iconv",
      "en": "codeset conversion",
      "zh": "iconv：codeset conversion（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-iconv",
      "context": "posix-utility",
      "keywords": [
        "iconv",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 iconv 来完成“codeset conversion”时",
          "goal": "按固定官方版本的定义调用 iconv，并依据退出状态判断该操作是否完成",
          "value": "iconv",
          "description": "iconv 的官方用途是“codeset conversion”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 iconv；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/iconv.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/iconv.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "iconv [ -cs ] -f frommap -t tomap [ file ... ] iconv -f fromcode [ -cs ] [ -t tocode ] [ file ... ] iconv -t tocode [ -cs ] [ -f fromcode ] [ file ... ] iconv -l",
      "options": [
        "-c",
        "-f",
        "-l",
        "-s",
        "-t"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "id",
      "en": "return user identity",
      "zh": "id：return user identity（来源：gnu-coreutils / posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-id",
      "context": "posix-utility",
      "keywords": [
        "id",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils / posix-utilities 提供的 id 来完成“return user identity”时",
          "goal": "按固定官方版本的定义调用 id，并依据退出状态判断该操作是否完成",
          "value": "id",
          "description": "id 的官方用途是“return user identity”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils / posix-utilities 的定义执行 id；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/id.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/id.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "id [ user ] id -G [ -n ] [ user ] id -g [ -nr ] [ user ] id -u [ -nr ] [ user ]",
      "options": [
        "-G",
        "-g",
        "-n",
        "-r",
        "-u"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "install",
      "en": "install copy files and set attributes",
      "zh": "install：install copy files and set attributes（来源：gnu-coreutils）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-install",
      "context": "external-command",
      "keywords": [
        "install",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils 提供的 install 来完成“install copy files and set attributes”时",
          "goal": "按固定官方版本的定义调用 install，并依据退出状态判断该操作是否完成",
          "value": "install",
          "description": "install 的官方用途是“install copy files and set attributes”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils 的定义执行 install；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "gnu-manuals"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz/man/install.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz · man/install.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "install [\\,OPTION\\/]... [\\,-T\\/] \\,SOURCE DEST\\/ .br install [\\,OPTION\\/]... \\,SOURCE\\/... \\,DIRECTORY\\/ .br install [\\,OPTION\\/]... \\,-t DIRECTORY SOURCE\\/... .br install [\\,OPTION\\/]... \\,-d DIRECTORY\\/...",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "ipcrm",
      "en": "remove an XSI message queue, semaphore set, or shared memory segment identifier",
      "zh": "ipcrm：remove an XSI message queue, semaphore set, or shared memory segment identifier（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-ipcrm",
      "context": "posix-utility",
      "keywords": [
        "ipcrm",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 ipcrm 来完成“remove an XSI message queue, semaphore set, or shared memory segment identifier”时",
          "goal": "按固定官方版本的定义调用 ipcrm，并依据退出状态判断该操作是否完成",
          "value": "ipcrm",
          "description": "ipcrm 的官方用途是“remove an XSI message queue, semaphore set, or shared memory segment identifier”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 ipcrm；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/ipcrm.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [
        "some synopsis forms require POSIX option group XSI"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/ipcrm.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "[ XSI ] ipcrm [ -q msgid|-Q msgkey|-s semid|-S semkey|-m shmid|-M shmkey ] ...",
      "options": [
        "-q",
        "-m",
        "-s",
        "-Q",
        "-M",
        "-S"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "ipcs",
      "en": "report XSI interprocess communication facilities status",
      "zh": "ipcs：report XSI interprocess communication facilities status（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-ipcs",
      "context": "posix-utility",
      "keywords": [
        "ipcs",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 ipcs 来完成“report XSI interprocess communication facilities status”时",
          "goal": "按固定官方版本的定义调用 ipcs，并依据退出状态判断该操作是否完成",
          "value": "ipcs",
          "description": "ipcs 的官方用途是“report XSI interprocess communication facilities status”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 ipcs；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/ipcs.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [
        "some synopsis forms require POSIX option group XSI"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/ipcs.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "[ XSI ] ipcs [ -qms ] [ -a|-bcopt ]",
      "options": [
        "-q",
        "-m",
        "-s",
        "-a",
        "-b",
        "-c",
        "-o",
        "-p"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "jobs",
      "en": "display status of jobs in the current shell execution environment",
      "zh": "jobs：display status of jobs in the current shell execution environment（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-jobs",
      "context": "posix-utility",
      "keywords": [
        "jobs",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 jobs 来完成“display status of jobs in the current shell execution environment”时",
          "goal": "按固定官方版本的定义调用 jobs，并依据退出状态判断该操作是否完成",
          "value": "jobs",
          "description": "jobs 的官方用途是“display status of jobs in the current shell execution environment”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 jobs；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/jobs.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [
        "some synopsis forms require POSIX option group UP"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/jobs.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "[ UP ] jobs [ -l|-p ] [ job_id ... ]",
      "options": [
        "-l",
        "-p"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "join",
      "en": "relational database operator",
      "zh": "join：relational database operator（来源：gnu-coreutils / posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-join",
      "context": "posix-utility",
      "keywords": [
        "join",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils / posix-utilities 提供的 join 来完成“relational database operator”时",
          "goal": "按固定官方版本的定义调用 join，并依据退出状态判断该操作是否完成",
          "value": "join",
          "description": "join 的官方用途是“relational database operator”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils / posix-utilities 的定义执行 join；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/join.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/join.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "join [ -a file_number |-v file_number ] [ -e string ] [ -o list ] [ -t char ] [ -1 field ] [ -2 field ] file1 file2",
      "options": [
        "-a",
        "-e",
        "-o",
        "-s",
        "-t",
        "-b",
        "-v",
        "-1"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "kill",
      "en": "Send a signal to a process",
      "zh": "向进程发送信号",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-kill",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/kill.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "keywords": [
        "向进程发送信号",
        "Send a signal to a process",
        "kill",
        "强制终止进程",
        "Force kill a process (SIGKILL)",
        "Unix",
        "POSIX"
      ],
      "examples": [
        {
          "scenario": "已用只读进程列表确认测试进程 PID，需要先请求它执行清理后正常退出",
          "goal": "向已核对的 PID 发送默认终止信号",
          "value": "kill 12345",
          "description": "默认终止信号允许目标进程捕获信号并执行自己的清理逻辑。",
          "expected": "指定进程收到终止信号；是否以及何时退出取决于进程的信号处理。",
          "copyable": false,
          "warning": "会中断进程；必须先核对 PID、命令行和所有者，避免 PID 复用导致误终止。",
          "caveat": "先用只读进程列表检查 PID、命令行和所有者，并确认服务能够安全恢复。",
          "riskLevels": [
            "processDisruption"
          ],
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/kill.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        },
        {
          "scenario": "进程拒绝正常终止且会阻塞自动化流水线，已确认可以放弃未保存状态",
          "goal": "作为最后手段向已核对的 PID 发送 SIGKILL",
          "value": "kill -9 12345",
          "description": "-9 发送不可捕获的 SIGKILL，目标进程无法执行清理或保存状态。",
          "expected": "内核强制终止指定进程；尚未落盘的数据和临时状态可能丢失。",
          "copyable": false,
          "warning": "会立即强制中断进程并可能损坏数据或服务状态，只能作为最后手段。",
          "caveat": "先用只读进程列表检查 PID，确认正常终止已失败、数据已有备份且服务可恢复。",
          "riskLevels": [
            "processDisruption"
          ],
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/kill.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "context": "posix-utility",
      "platformCaveat": "kill 可能由 Shell 内置或外部程序提供；信号名称通用，具体编号应以当前平台为准。",
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately",
        "some synopsis forms require POSIX option group XSI"
      ],
      "usage": "kill [ -s signal_name ] pid ... kill -l [ exit_status ] [ XSI ] kill [ - signal_name ] pid ... kill [ - signal_number ] pid ...",
      "options": [
        "-l",
        "-s"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "less",
      "en": "View file contents page by page",
      "zh": "分页浏览文件内容",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-less",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "less-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/gwsw/less/tree/v708 · less.nro.VER",
          "checkedAt": "2026-07-31"
        }
      ],
      "keywords": [
        "分页浏览文件内容",
        "View file contents page by page",
        "less",
        "Unix",
        "POSIX"
      ],
      "examples": [
        {
          "scenario": "构建日志超过终端回滚缓冲区，需要分页阅读并在查看器内搜索错误",
          "goal": "用交互式分页器打开 build.log",
          "value": "less build.log",
          "description": "分页器按需显示大文件，并支持滚动和斜杠搜索。",
          "expected": "终端进入 less 查看界面；退出后 build.log 保持不变。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "less-repository"
          ],
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "less-repository",
              "locator": "https://github.com/gwsw/less/tree/v708 · less.nro.VER",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "context": "external-command",
      "components": [
        "less"
      ],
      "constraints": [
        "requires less 708 or a compatible installed version"
      ],
      "usage": "less [options] file",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "lex",
      "en": "generate programs for lexical tasks ( DEVELOPMENT )",
      "zh": "lex：generate programs for lexical tasks ( DEVELOPMENT )（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-lex",
      "context": "posix-utility",
      "keywords": [
        "lex",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 lex 来完成“generate programs for lexical tasks ( DEVELOPMENT )”时",
          "goal": "按固定官方版本的定义调用 lex，并依据退出状态判断该操作是否完成",
          "value": "lex",
          "description": "lex 的官方用途是“generate programs for lexical tasks ( DEVELOPMENT )”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 lex；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/lex.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [
        "POSIX option group: DEVELOPMENT",
        "some synopsis forms require POSIX option group CD"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/lex.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "[ CD ] lex [ -t ] [ -n|-v ] [ file ... ]",
      "options": [
        "-n",
        "-v",
        "-t"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "link",
      "en": "call link function",
      "zh": "link：call link function（来源：gnu-coreutils / posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-link",
      "context": "posix-utility",
      "keywords": [
        "link",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils / posix-utilities 提供的 link 来完成“call link function”时",
          "goal": "按固定官方版本的定义调用 link，并依据退出状态判断该操作是否完成",
          "value": "link",
          "description": "link 的官方用途是“call link function”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils / posix-utilities 的定义执行 link；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/link.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately",
        "some synopsis forms require POSIX option group XSI"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/link.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "[ XSI ] link file1 file2",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "ln",
      "en": "Create a symbolic link",
      "zh": "创建符号链接（软链接）",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-ln",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/ln.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "keywords": [
        "创建",
        "新建",
        "初始化",
        "创建符号链接（软链接）",
        "Create a symbolic link",
        "ln",
        "Unix",
        "POSIX"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils / posix-utilities 提供的 ln 来完成“link files”时",
          "goal": "按固定官方版本的定义调用 ln，并依据退出状态判断该操作是否完成",
          "value": "ln",
          "description": "ln 的官方用途是“link files”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils / posix-utilities 的定义执行 ln；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/ln.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "context": "posix-utility",
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "usage": "ln [ -fs ] [ -L|-P ] source_file target_file ln [ -fs ] [ -L|-P ] source_file ... target_dir",
      "options": [
        "-f",
        "-L",
        "-P",
        "-s"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "locale",
      "en": "get locale-specific information",
      "zh": "locale：get locale-specific information（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-locale",
      "context": "posix-utility",
      "keywords": [
        "locale",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 locale 来完成“get locale-specific information”时",
          "goal": "按固定官方版本的定义调用 locale，并依据退出状态判断该操作是否完成",
          "value": "locale",
          "description": "locale 的官方用途是“get locale-specific information”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 locale；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/locale.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/locale.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "locale [ -a|-m ] locale [ -ck ] name ...",
      "options": [
        "-a",
        "-c",
        "-k",
        "-m"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "localedef",
      "en": "define locale environment",
      "zh": "localedef：define locale environment（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-localedef",
      "context": "posix-utility",
      "keywords": [
        "localedef",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 localedef 来完成“define locale environment”时",
          "goal": "按固定官方版本的定义调用 localedef，并依据退出状态判断该操作是否完成",
          "value": "localedef",
          "description": "localedef 的官方用途是“define locale environment”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 localedef；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/localedef.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/localedef.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "localedef [ -c ] [ -f charmap ] [ -i sourcefile ] [ -u code_set_name ] name",
      "options": [
        "-c",
        "-f",
        "-i",
        "-u"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "locate",
      "en": "locate list files in databases that match a pattern .",
      "zh": "locate：locate list files in databases that match a pattern .（来源：gnu-findutils）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-locate",
      "context": "external-command",
      "keywords": [
        "locate",
        "命令",
        "终端",
        "gnu-findutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-findutils 提供的 locate 来完成“locate list files in databases that match a pattern ”时",
          "goal": "按固定官方版本的定义调用 locate，并依据退出状态判断该操作是否完成",
          "value": "locate",
          "description": "locate 的官方用途是“locate list files in databases that match a pattern ”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-findutils 的定义执行 locate；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "gnu-manuals"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://ftp.gnu.org/gnu/findutils/findutils-4.11.0.tar.xz/locate/locate.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-findutils"
      ],
      "constraints": [
        "reference behavior follows gnu-findutils 4.11.0; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://ftp.gnu.org/gnu/findutils/findutils-4.11.0.tar.xz · locate/locate.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "\\\" FIXME-2027: switch to .HP when groff-1.24 is more commonly available. .nr sA \\n(.j \\\" Save the adjustment mode. .na locate [ d\\ \\c path | \\*%database= path\\c ] [ e | E | \\*% [ non ] existing ] [ i | \\*%ignorecase ] [ 0 | null ] [ c | \\*%count ] [ w | \\*%wholename ] [ b | \\*%ba",
      "options": [
        "-0",
        "--null",
        "-A",
        "--all",
        "-b",
        "--basename",
        "-c",
        "--count"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "logger",
      "en": "log messages",
      "zh": "logger：log messages（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-logger",
      "context": "posix-utility",
      "keywords": [
        "logger",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 logger 来完成“log messages”时",
          "goal": "按固定官方版本的定义调用 logger，并依据退出状态判断该操作是否完成",
          "value": "logger",
          "description": "logger 的官方用途是“log messages”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 logger；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/logger.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/logger.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "logger [ -i ] [ -f file ] [ -p priority ] [ -t tag ] [ string... ]",
      "options": [
        "-f",
        "-i",
        "-p",
        "-t"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "logname",
      "en": "return the user's login name",
      "zh": "logname：return the user's login name（来源：gnu-coreutils / posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-logname",
      "context": "posix-utility",
      "keywords": [
        "logname",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils / posix-utilities 提供的 logname 来完成“return the user's login name”时",
          "goal": "按固定官方版本的定义调用 logname，并依据退出状态判断该操作是否完成",
          "value": "logname",
          "description": "logname 的官方用途是“return the user's login name”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils / posix-utilities 的定义执行 logname；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/logname.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/logname.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "logname",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "lp",
      "en": "send files to a printer",
      "zh": "lp：send files to a printer（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-lp",
      "context": "posix-utility",
      "keywords": [
        "lp",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 lp 来完成“send files to a printer”时",
          "goal": "按固定官方版本的定义调用 lp，并依据退出状态判断该操作是否完成",
          "value": "lp",
          "description": "lp 的官方用途是“send files to a printer”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 lp；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/lp.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/lp.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "lp [ -c ] [ -d dest ] [ -n copies ] [ -msw ] [ -o option ] ... [ -t title ] [ file ... ]",
      "options": [
        "-c",
        "-d",
        "-m",
        "-n",
        "-o",
        "-s",
        "-t",
        "-w"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "ls",
      "en": "List directory contents",
      "zh": "列出目录内容",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-ls",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/ls.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "列出目录内容",
        "List directory contents",
        "ls",
        "格式化",
        "代码格式"
      ],
      "examples": [
        {
          "scenario": "接手一个项目目录时，需要同时核对隐藏配置、权限、所有者和修改时间",
          "goal": "查看包含隐藏项的长格式目录清单",
          "value": "ls -la",
          "description": "-l 展示元数据，-a 同时包含名称以点开头的目录项。",
          "expected": "终端逐行列出当前目录的普通项与隐藏项，并显示权限、所有者、大小和时间。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/ls.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "context": "posix-utility",
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately",
        "some synopsis forms require POSIX option group XSI"
      ],
      "usage": "[ XSI ] ls [ -ikqrs ] [ - g ln o ] [ -A|-a ] [ -C|-m|-x|-1 ] \\ [ -F|-p ] [ -H|-L ] [ -R|-d ] [ -S|-f|-t ] [ -c|-u ] [ file ... ]",
      "options": [
        "-A",
        "-C",
        "-F",
        "-H",
        "-L",
        "-l",
        "-R",
        "-d"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "m4",
      "en": "macro processor",
      "zh": "m4：macro processor（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-m4",
      "context": "posix-utility",
      "keywords": [
        "m4",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 m4 来完成“macro processor”时",
          "goal": "按固定官方版本的定义调用 m4，并依据退出状态判断该操作是否完成",
          "value": "m4",
          "description": "m4 的官方用途是“macro processor”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 m4；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/m4.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/m4.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "m4 [ -s ] [ -D name [ = val ]] ... [ -U name ] ... [ file ... ]",
      "options": [
        "-D",
        "-U",
        "-s"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "mailx",
      "en": "process messages",
      "zh": "mailx：process messages（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-mailx",
      "context": "posix-utility",
      "keywords": [
        "mailx",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 mailx 来完成“process messages”时",
          "goal": "按固定官方版本的定义调用 mailx，并依据退出状态判断该操作是否完成",
          "value": "mailx",
          "description": "mailx 的官方用途是“process messages”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 mailx；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/mailx.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [
        "some synopsis forms require POSIX option group UP"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/mailx.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "Send Mode mailx [ -E ] [ -s subject ] address ... Receive Mode [ UP ] mailx -e mailx [ -HiNn ] [ -F ] [ -u user ] mailx -f [ -HiNn ] [ -F ] [ file ]",
      "options": [
        "-E",
        "-s",
        "-e",
        "-f",
        "-F",
        "-H",
        "-i",
        "-n"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "make",
      "en": "maintain, update, and regenerate files ( DEVELOPMENT )",
      "zh": "make：maintain, update, and regenerate files ( DEVELOPMENT )（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-make",
      "context": "posix-utility",
      "keywords": [
        "make",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 make 来完成“maintain, update, and regenerate files ( DEVELOPMENT )”时",
          "goal": "按固定官方版本的定义调用 make，并依据退出状态判断该操作是否完成",
          "value": "make",
          "description": "make 的官方用途是“maintain, update, and regenerate files ( DEVELOPMENT )”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 make；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/make.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [
        "POSIX option group: DEVELOPMENT",
        "some synopsis forms require POSIX option group SD"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/make.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "[ SD ] make [ -einpqrst ] [ -f makefile ] ... [ -j maxjobs ] [ -k|-S ] [ macro [ :: [ : ]] = value ... ] [ target_name ... ]",
      "options": [
        "-e",
        "-f",
        "-i",
        "-j",
        "-k",
        "-n",
        "-p",
        "-q"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "man",
      "en": "display system documentation",
      "zh": "man：display system documentation（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-man",
      "context": "posix-utility",
      "keywords": [
        "man",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 man 来完成“display system documentation”时",
          "goal": "按固定官方版本的定义调用 man，并依据退出状态判断该操作是否完成",
          "value": "man",
          "description": "man 的官方用途是“display system documentation”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 man；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/man.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [
        "some synopsis forms require POSIX option group UP"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/man.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "[ UP ] man [ -k ] name ...",
      "options": [
        "-k",
        "-E"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "md5sum",
      "en": "md5sum compute and check MD5 message digest",
      "zh": "md5sum：md5sum compute and check MD5 message digest（来源：gnu-coreutils）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-md5sum",
      "context": "external-command",
      "keywords": [
        "md5sum",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils 提供的 md5sum 来完成“md5sum compute and check MD5 message digest”时",
          "goal": "按固定官方版本的定义调用 md5sum，并依据退出状态判断该操作是否完成",
          "value": "md5sum",
          "description": "md5sum 的官方用途是“md5sum compute and check MD5 message digest”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils 的定义执行 md5sum；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "gnu-manuals"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz/man/md5sum.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz · man/md5sum.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "md5sum [\\,OPTION\\/]... [\\,FILE\\/]...",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "mesg",
      "en": "permit or deny messages",
      "zh": "mesg：permit or deny messages（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-mesg",
      "context": "posix-utility",
      "keywords": [
        "mesg",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 mesg 来完成“permit or deny messages”时",
          "goal": "按固定官方版本的定义调用 mesg，并依据退出状态判断该操作是否完成",
          "value": "mesg",
          "description": "mesg 的官方用途是“permit or deny messages”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 mesg；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/mesg.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/mesg.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "mesg [ y|n ]",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "mkdir",
      "en": "Create directories",
      "zh": "创建目录",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-mkdir",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/mkdir.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "keywords": [
        "创建",
        "新建",
        "初始化",
        "创建目录",
        "Create directories",
        "mkdir",
        "递归创建目录（含父目录）",
        "Create parent directories as needed"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils / posix-utilities 提供的 mkdir 来完成“make directories”时",
          "goal": "按固定官方版本的定义调用 mkdir，并依据退出状态判断该操作是否完成",
          "value": "mkdir",
          "description": "mkdir 的官方用途是“make directories”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils / posix-utilities 的定义执行 mkdir；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/mkdir.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "context": "posix-utility",
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "usage": "mkdir [ -p ] [ -m mode ] dir ...",
      "options": [
        "-m",
        "-p"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "mkfifo",
      "en": "make FIFO special files",
      "zh": "mkfifo：make FIFO special files（来源：gnu-coreutils / posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-mkfifo",
      "context": "posix-utility",
      "keywords": [
        "mkfifo",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils / posix-utilities 提供的 mkfifo 来完成“make FIFO special files”时",
          "goal": "按固定官方版本的定义调用 mkfifo，并依据退出状态判断该操作是否完成",
          "value": "mkfifo",
          "description": "mkfifo 的官方用途是“make FIFO special files”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils / posix-utilities 的定义执行 mkfifo；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/mkfifo.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/mkfifo.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "mkfifo [ -m mode ] file ...",
      "options": [
        "-m"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "mknod",
      "en": "mknod make block or character special files",
      "zh": "mknod：mknod make block or character special files（来源：gnu-coreutils）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-mknod",
      "context": "external-command",
      "keywords": [
        "mknod",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils 提供的 mknod 来完成“mknod make block or character special files”时",
          "goal": "按固定官方版本的定义调用 mknod，并依据退出状态判断该操作是否完成",
          "value": "mknod",
          "description": "mknod 的官方用途是“mknod make block or character special files”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils 的定义执行 mknod；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "gnu-manuals"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz/man/mknod.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz · man/mknod.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "mknod [\\,OPTION\\/]... \\,NAME TYPE \\/[\\,MAJOR MINOR\\/]",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "mktemp",
      "en": "mktemp create a temporary file or directory",
      "zh": "mktemp：mktemp create a temporary file or directory（来源：gnu-coreutils）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-mktemp",
      "context": "external-command",
      "keywords": [
        "mktemp",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils 提供的 mktemp 来完成“mktemp create a temporary file or directory”时",
          "goal": "按固定官方版本的定义调用 mktemp，并依据退出状态判断该操作是否完成",
          "value": "mktemp",
          "description": "mktemp 的官方用途是“mktemp create a temporary file or directory”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils 的定义执行 mktemp；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "gnu-manuals"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz/man/mktemp.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz · man/mktemp.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "mktemp [\\,OPTION\\/]... [\\,TEMPLATE\\/]",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "more",
      "en": "display files on a page-by-page basis",
      "zh": "more：display files on a page-by-page basis（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-more",
      "context": "posix-utility",
      "keywords": [
        "more",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 more 来完成“display files on a page-by-page basis”时",
          "goal": "按固定官方版本的定义调用 more，并依据退出状态判断该操作是否完成",
          "value": "more",
          "description": "more 的官方用途是“display files on a page-by-page basis”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 more；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/more.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [
        "some synopsis forms require POSIX option group UP"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/more.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "[ UP ] more [ -ceisu ] [ -n number ] [ -p command ] [ -t tagstring ] [ file ... ]",
      "options": [
        "-c",
        "-e",
        "-i",
        "-n",
        "-p",
        "-s",
        "-t",
        "-u"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "msgfmt",
      "en": "create messages objects from portable messages object source files",
      "zh": "msgfmt：create messages objects from portable messages object source files（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-msgfmt",
      "context": "posix-utility",
      "keywords": [
        "msgfmt",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 msgfmt 来完成“create messages objects from portable messages object source files”时",
          "goal": "按固定官方版本的定义调用 msgfmt，并依据退出状态判断该操作是否完成",
          "value": "msgfmt",
          "description": "msgfmt 的官方用途是“create messages objects from portable messages object source files”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 msgfmt；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/msgfmt.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/msgfmt.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "msgfmt [ -cfSv ] [ -D dir ] [ -o outputfile ] pathname ...",
      "options": [
        "-c",
        "-v",
        "-D",
        "-f",
        "-o",
        "-S"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "mv",
      "en": "Move or rename files and directories",
      "zh": "移动或重命名文件/目录",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-mv",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/mv.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "keywords": [
        "移动",
        "重命名",
        "改名",
        "移动或重命名文件/目录",
        "Move or rename files and directories",
        "mv",
        "Unix",
        "POSIX"
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
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "context": "posix-utility",
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "usage": "mv [ -if ] source_file target_file mv [ -if ] source_file ... target_dir",
      "options": [
        "-f",
        "-i"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "newgrp",
      "en": "change to a new group",
      "zh": "newgrp：change to a new group（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-newgrp",
      "context": "posix-utility",
      "keywords": [
        "newgrp",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 newgrp 来完成“change to a new group”时",
          "goal": "按固定官方版本的定义调用 newgrp，并依据退出状态判断该操作是否完成",
          "value": "newgrp",
          "description": "newgrp 的官方用途是“change to a new group”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 newgrp；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/newgrp.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/newgrp.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "newgrp [ -l ] [ group ]",
      "options": [
        "-l"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "ngettext",
      "en": "retrieve text string from messages object",
      "zh": "ngettext：retrieve text string from messages object（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-ngettext",
      "context": "posix-utility",
      "keywords": [
        "ngettext",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 ngettext 来完成“retrieve text string from messages object”时",
          "goal": "按固定官方版本的定义调用 ngettext，并依据退出状态判断该操作是否完成",
          "value": "ngettext",
          "description": "ngettext 的官方用途是“retrieve text string from messages object”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 ngettext；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/ngettext.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/ngettext.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "gettext [ -e|-E ] [ -d textdomain ] [ textdomain ] msgid gettext [ -e|-E ] [ -n ] -s [ -d textdomain ] msgid ... ngettext [ -e|-E ] [ -d textdomain ] [ textdomain ] msgid msgid_plural n",
      "options": [
        "-d",
        "-e",
        "-E",
        "-n",
        "-s"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "nice",
      "en": "invoke a utility with an altered nice value",
      "zh": "nice：invoke a utility with an altered nice value（来源：gnu-coreutils / posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-nice",
      "context": "posix-utility",
      "keywords": [
        "nice",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils / posix-utilities 提供的 nice 来完成“invoke a utility with an altered nice value”时",
          "goal": "按固定官方版本的定义调用 nice，并依据退出状态判断该操作是否完成",
          "value": "nice",
          "description": "nice 的官方用途是“invoke a utility with an altered nice value”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils / posix-utilities 的定义执行 nice；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/nice.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/nice.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "nice [ -n increment ] utility [ argument ... ]",
      "options": [
        "-n"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "nl",
      "en": "line numbering filter",
      "zh": "nl：line numbering filter（来源：gnu-coreutils / posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-nl",
      "context": "posix-utility",
      "keywords": [
        "nl",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils / posix-utilities 提供的 nl 来完成“line numbering filter”时",
          "goal": "按固定官方版本的定义调用 nl，并依据退出状态判断该操作是否完成",
          "value": "nl",
          "description": "nl 的官方用途是“line numbering filter”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils / posix-utilities 的定义执行 nl；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/nl.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately",
        "some synopsis forms require POSIX option group XSI"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/nl.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "[ XSI ] nl [ -p ] [ -b type ] [ -d delim ] [ -f type ] [ -h type ] [ -i incr ] [ -l num ] [ -n format ] [ -s sep ] [ -v startnum ] [ -w width ] [ file ]",
      "options": [
        "-b",
        "-d",
        "-f",
        "-h",
        "-i",
        "-l",
        "-n",
        "-p"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "nm",
      "en": "write the name list of an object file ( DEVELOPMENT )",
      "zh": "nm：write the name list of an object file ( DEVELOPMENT )（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-nm",
      "context": "posix-utility",
      "keywords": [
        "nm",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 nm 来完成“write the name list of an object file ( DEVELOPMENT )”时",
          "goal": "按固定官方版本的定义调用 nm，并依据退出状态判断该操作是否完成",
          "value": "nm",
          "description": "nm 的官方用途是“write the name list of an object file ( DEVELOPMENT )”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 nm；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/nm.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [
        "POSIX option group: DEVELOPMENT",
        "some synopsis forms require POSIX option group SD",
        "some synopsis forms require POSIX option group XSI"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/nm.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "[ SD ] nm [ -APv ] [ -g|-u ] [ -t format ] file ... [ XSI ] nm [ -APv ] [ -efox ] [ -g|-u ] [ -t format ] file ...",
      "options": [
        "-A",
        "-e",
        "-f",
        "-g",
        "-o",
        "-t",
        "-P",
        "-u"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "nohup",
      "en": "invoke a utility immune to hangups",
      "zh": "nohup：invoke a utility immune to hangups（来源：gnu-coreutils / posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-nohup",
      "context": "posix-utility",
      "keywords": [
        "nohup",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils / posix-utilities 提供的 nohup 来完成“invoke a utility immune to hangups”时",
          "goal": "按固定官方版本的定义调用 nohup，并依据退出状态判断该操作是否完成",
          "value": "nohup",
          "description": "nohup 的官方用途是“invoke a utility immune to hangups”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils / posix-utilities 的定义执行 nohup；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/nohup.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/nohup.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "nohup utility [ argument ... ]",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "nproc",
      "en": "nproc print the number of processing units available",
      "zh": "nproc：nproc print the number of processing units available（来源：gnu-coreutils）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-nproc",
      "context": "external-command",
      "keywords": [
        "nproc",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils 提供的 nproc 来完成“nproc print the number of processing units available”时",
          "goal": "按固定官方版本的定义调用 nproc，并依据退出状态判断该操作是否完成",
          "value": "nproc",
          "description": "nproc 的官方用途是“nproc print the number of processing units available”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils 的定义执行 nproc；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "gnu-manuals"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz/man/nproc.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz · man/nproc.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "nproc [\\,OPTION\\/]...",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "numfmt",
      "en": "numfmt Convert numbers from/to human-readable strings",
      "zh": "numfmt：numfmt Convert numbers from/to human-readable strings（来源：gnu-coreutils）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-numfmt",
      "context": "external-command",
      "keywords": [
        "numfmt",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils 提供的 numfmt 来完成“numfmt Convert numbers from/to human-readable strings”时",
          "goal": "按固定官方版本的定义调用 numfmt，并依据退出状态判断该操作是否完成",
          "value": "numfmt",
          "description": "numfmt 的官方用途是“numfmt Convert numbers from/to human-readable strings”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils 的定义执行 numfmt；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "gnu-manuals"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz/man/numfmt.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz · man/numfmt.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "numfmt [\\,OPTION\\/]... [\\,NUMBER\\/]...",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "od",
      "en": "dump files in various formats",
      "zh": "od：dump files in various formats（来源：gnu-coreutils / posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-od",
      "context": "posix-utility",
      "keywords": [
        "od",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils / posix-utilities 提供的 od 来完成“dump files in various formats”时",
          "goal": "按固定官方版本的定义调用 od，并依据退出状态判断该操作是否完成",
          "value": "od",
          "description": "od 的官方用途是“dump files in various formats”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils / posix-utilities 的定义执行 od；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/od.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately",
        "some synopsis forms require POSIX option group XSI"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/od.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "od [ -v ] [ -A address_base ] [ -j skip ] [ -N count ] [ -t type_string ] ... [ file ... ] [ XSI ] od [ -bcdosx ] [ file ] [[ + ] offset [ . ][ b ]]",
      "options": [
        "-t",
        "-b",
        "-A",
        "-c",
        "-d",
        "-j",
        "-N",
        "-o"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "paste",
      "en": "merge corresponding or subsequent lines of files",
      "zh": "paste：merge corresponding or subsequent lines of files（来源：gnu-coreutils / posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-paste",
      "context": "posix-utility",
      "keywords": [
        "paste",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils / posix-utilities 提供的 paste 来完成“merge corresponding or subsequent lines of files”时",
          "goal": "按固定官方版本的定义调用 paste，并依据退出状态判断该操作是否完成",
          "value": "paste",
          "description": "paste 的官方用途是“merge corresponding or subsequent lines of files”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils / posix-utilities 的定义执行 paste；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/paste.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/paste.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "paste [ -s ] [ -d list ] file ...",
      "options": [
        "-d",
        "-s"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "patch",
      "en": "apply changes to files",
      "zh": "patch：apply changes to files（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-patch",
      "context": "posix-utility",
      "keywords": [
        "patch",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 patch 来完成“apply changes to files”时",
          "goal": "按固定官方版本的定义调用 patch，并依据退出状态判断该操作是否完成",
          "value": "patch",
          "description": "patch 的官方用途是“apply changes to files”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 patch；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/patch.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/patch.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "patch [ -blNR ] [ -c|-e|-n|-u ] [ -d dir ] [ -D define ] [ -i patchfile ] [ -o outfile ] [ -p num ] [ -r rejectfile ] [ file ]",
      "options": [
        "-b",
        "-o",
        "-c",
        "-C",
        "-d",
        "-D",
        "-e",
        "-i"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "pathchk",
      "en": "check pathnames",
      "zh": "pathchk：check pathnames（来源：gnu-coreutils / posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-pathchk",
      "context": "posix-utility",
      "keywords": [
        "pathchk",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils / posix-utilities 提供的 pathchk 来完成“check pathnames”时",
          "goal": "按固定官方版本的定义调用 pathchk，并依据退出状态判断该操作是否完成",
          "value": "pathchk",
          "description": "pathchk 的官方用途是“check pathnames”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils / posix-utilities 的定义执行 pathchk；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/pathchk.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/pathchk.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "pathchk [ -p ] [ -P ] pathname ...",
      "options": [
        "-p",
        "-P"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "pax",
      "en": "portable archive interchange",
      "zh": "pax：portable archive interchange（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-pax",
      "context": "posix-utility",
      "keywords": [
        "pax",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 pax 来完成“portable archive interchange”时",
          "goal": "按固定官方版本的定义调用 pax，并依据退出状态判断该操作是否完成",
          "value": "pax",
          "description": "pax 的官方用途是“portable archive interchange”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 pax；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/pax.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/pax.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "pax [ -dv ] [ -c|-n ] [ -H|-L ] [ -o options ] [ -f archive ] [ -s replstr ] ... [ pattern ... ] pax -r [ -c|-n ] [ -dikuv ] [ -H|-L ] [ -f archive ] [ -o options ] ... [ -p string ] ... [ -s replstr ] ... [ pattern ... ] pax -w [ -dituvX ] [ -H|-L ] [ -b blocksize ] [[ -a ] [ -f",
      "options": [
        "-o",
        "-p",
        "-s",
        "-r",
        "-w",
        "-a",
        "-b",
        "-x"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "ping",
      "en": "Test network connectivity to a host",
      "zh": "测试主机网络连通性",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-ping",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "iputils-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/iputils/iputils/releases/tag/20250605 · ping/ping.rst",
          "checkedAt": "2026-07-31"
        }
      ],
      "keywords": [
        "测试主机网络连通性",
        "Test network connectivity to a host",
        "ping",
        "Unix",
        "POSIX"
      ],
      "examples": [
        {
          "scenario": "需要使用 ping-implementations 提供的 ping 来完成“send ICMP echo requests to network hosts”时",
          "goal": "按固定官方版本的定义调用 ping，并依据退出状态判断该操作是否完成",
          "value": "ping",
          "description": "ping 的官方用途是“send ICMP echo requests to network hosts”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 ping-implementations 的定义执行 ping；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "iputils-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "iputils-repository",
              "locator": "https://github.com/iputils/iputils/releases/tag/20250605/ping/ping.rst",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "context": "external-command",
      "platformCaveat": "macOS 与 Linux 的计数、超时参数不同；直接运行 ping 在两端均可用。",
      "components": [
        "ping-implementations"
      ],
      "constraints": [
        "ping flags and privilege requirements differ between BSD/macOS and iputils/Linux"
      ],
      "usage": "ping host",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "pinky",
      "en": "pinky lightweight finger",
      "zh": "pinky：pinky lightweight finger（来源：gnu-coreutils）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-pinky",
      "context": "external-command",
      "keywords": [
        "pinky",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils 提供的 pinky 来完成“pinky lightweight finger”时",
          "goal": "按固定官方版本的定义调用 pinky，并依据退出状态判断该操作是否完成",
          "value": "pinky",
          "description": "pinky 的官方用途是“pinky lightweight finger”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils 的定义执行 pinky；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "gnu-manuals"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz/man/pinky.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz · man/pinky.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "pinky [\\,OPTION\\/]... [\\,USER\\/]...",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "pr",
      "en": "print files",
      "zh": "pr：print files（来源：gnu-coreutils / posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-pr",
      "context": "posix-utility",
      "keywords": [
        "pr",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils / posix-utilities 提供的 pr 来完成“print files”时",
          "goal": "按固定官方版本的定义调用 pr，并依据退出状态判断该操作是否完成",
          "value": "pr",
          "description": "pr 的官方用途是“print files”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils / posix-utilities 的定义执行 pr；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/pr.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately",
        "some synopsis forms require POSIX option group XSI"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/pr.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "[ XSI ] pr [ + page ] [ - column ] [ -ad f Fmprt ] [ -e [ char ][ gap ]] [ -h header ] [ -i [ char ][ gap ]] [ -l lines ] [ -n [ char ][ width ]] [ -o offset ] [ -s [ char ]] [ -w width ] [ file ... ]",
      "options": [
        "-s",
        "-e",
        "-i",
        "-n",
        "-m",
        "-l",
        "-t",
        "-a"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "printenv",
      "en": "printenv print all or part of environment",
      "zh": "printenv：printenv print all or part of environment（来源：gnu-coreutils）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-printenv",
      "context": "external-command",
      "keywords": [
        "printenv",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils 提供的 printenv 来完成“printenv print all or part of environment”时",
          "goal": "按固定官方版本的定义调用 printenv，并依据退出状态判断该操作是否完成",
          "value": "printenv",
          "description": "printenv 的官方用途是“printenv print all or part of environment”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils 的定义执行 printenv；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "gnu-manuals"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz/man/printenv.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz · man/printenv.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "printenv [\\,OPTION\\/] [\\,VARIABLE\\/]...",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "printf",
      "en": "write formatted output",
      "zh": "printf：write formatted output（来源：gnu-coreutils / posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-printf",
      "context": "posix-utility",
      "keywords": [
        "printf",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils / posix-utilities 提供的 printf 来完成“write formatted output”时",
          "goal": "按固定官方版本的定义调用 printf，并依据退出状态判断该操作是否完成",
          "value": "printf",
          "description": "printf 的官方用途是“write formatted output”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils / posix-utilities 的定义执行 printf；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/printf.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/printf.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "printf format [ argument ... ]",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "prs",
      "en": "print an SCCS file ( DEVELOPMENT )",
      "zh": "prs：print an SCCS file ( DEVELOPMENT )（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-prs",
      "context": "posix-utility",
      "keywords": [
        "prs",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 prs 来完成“print an SCCS file ( DEVELOPMENT )”时",
          "goal": "按固定官方版本的定义调用 prs，并依据退出状态判断该操作是否完成",
          "value": "prs",
          "description": "prs 的官方用途是“print an SCCS file ( DEVELOPMENT )”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 prs；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/prs.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [
        "POSIX option group: DEVELOPMENT",
        "some synopsis forms require POSIX option group XSI"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/prs.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "[ XSI ] prs [ -a ] [ -d dataspec ] [ -r [ SID ]] file ... prs [ -e|-l ] -c cutoff [ -d dataspec ] file ... prs [ -e|-l ] -r [ SID ] [ -d dataspec ] file ...",
      "options": [
        "-r",
        "-d",
        "-e",
        "-c",
        "-l",
        "-a"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "ps",
      "en": "Report process status",
      "zh": "查看进程状态",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-ps",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/ps.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "查看进程状态",
        "Report process status",
        "ps",
        "列出所有运行进程及详情",
        "List all running processes with details"
      ],
      "examples": [
        {
          "scenario": "测试进程没有退出，需要先查看当前用户空间中的完整进程清单和启动参数",
          "goal": "以完整格式列出所有进程",
          "value": "ps -ef",
          "description": "-e 选择全部进程，-f 展示包含父进程和命令参数的完整格式。",
          "expected": "终端输出进程表，包含 PID、父 PID 及命令等实现支持的字段。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/ps.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "context": "posix-utility",
      "platformCaveat": "macOS（BSD）与 Linux（procps-ng）的选项和输出列不同；跨平台脚本应只依赖共同字段。",
      "components": [
        "posix-utilities"
      ],
      "constraints": [
        "some synopsis forms require POSIX option group XSI"
      ],
      "usage": "[ XSI ] ps [ -aAw ] [ -defl ] [ -g grouplist ] [ -G grouplist ] [ -n namelist ] [ -o format ] ... [ -p proclist ] [ -t termlist ] [ -u userlist ] [ -U userlist ]",
      "options": [
        "-a",
        "-A",
        "-d",
        "-e",
        "-f",
        "-g",
        "-s",
        "-G"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "ptx",
      "en": "ptx produce a permuted index of file contents",
      "zh": "ptx：ptx produce a permuted index of file contents（来源：gnu-coreutils）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-ptx",
      "context": "external-command",
      "keywords": [
        "ptx",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils 提供的 ptx 来完成“ptx produce a permuted index of file contents”时",
          "goal": "按固定官方版本的定义调用 ptx，并依据退出状态判断该操作是否完成",
          "value": "ptx",
          "description": "ptx 的官方用途是“ptx produce a permuted index of file contents”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils 的定义执行 ptx；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "gnu-manuals"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz/man/ptx.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz · man/ptx.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "ptx [\\,OPTION\\/]... [\\,INPUT\\/]... \\,(without -G)\\/ .br ptx \\,-G \\/[\\,OPTION\\/]... [\\,INPUT \\/[\\,OUTPUT\\/]]",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "pwd",
      "en": "Print working directory",
      "zh": "打印当前工作目录路径",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-pwd",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/pwd.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "keywords": [
        "打印当前工作目录路径",
        "Print working directory",
        "pwd",
        "Unix",
        "POSIX"
      ],
      "examples": [
        {
          "scenario": "在脚本或构建任务失败后，需要确认相对路径究竟从哪个物理目录解析",
          "goal": "输出消除符号链接后的当前工作目录",
          "value": "pwd -P",
          "description": "-P 按物理目录层级解析当前路径，便于定位工作目录偏差。",
          "expected": "终端输出一个绝对目录路径，其中不保留当前路径里的符号链接段。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/pwd.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "context": "posix-utility",
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "usage": "pwd [ -L|-P ]",
      "options": [
        "-L",
        "-P"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "read",
      "en": "read from standard input into shell variables",
      "zh": "read：read from standard input into shell variables（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-read",
      "context": "posix-utility",
      "keywords": [
        "read",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 read 来完成“read from standard input into shell variables”时",
          "goal": "按固定官方版本的定义调用 read，并依据退出状态判断该操作是否完成",
          "value": "read",
          "description": "read 的官方用途是“read from standard input into shell variables”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 read；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/read.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/read.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "read [ -r ] [ -d delim ] var ...",
      "options": [
        "-d",
        "-r"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "readlink",
      "en": "display the contents of a symbolic link",
      "zh": "readlink：display the contents of a symbolic link（来源：gnu-coreutils / posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-readlink",
      "context": "posix-utility",
      "keywords": [
        "readlink",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils / posix-utilities 提供的 readlink 来完成“display the contents of a symbolic link”时",
          "goal": "按固定官方版本的定义调用 readlink，并依据退出状态判断该操作是否完成",
          "value": "readlink",
          "description": "readlink 的官方用途是“display the contents of a symbolic link”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils / posix-utilities 的定义执行 readlink；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/readlink.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/readlink.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "readlink [ -n ] file",
      "options": [
        "-n"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "realpath",
      "en": "resolve a pathname",
      "zh": "realpath：resolve a pathname（来源：gnu-coreutils / posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-realpath",
      "context": "posix-utility",
      "keywords": [
        "realpath",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "构建脚本使用了包含上级目录段的相对路径，需要确认最终读取的是哪个文件",
          "goal": "把相对路径解析成规范绝对路径",
          "value": "realpath ./scripts/../package.json",
          "description": "解析点号、上级目录段和实现可解析的符号链接，输出规范路径。",
          "expected": "终端输出 package.json 对应的绝对规范路径，不修改目标文件。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/realpath.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/realpath.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "realpath [ -E|-e ] file",
      "options": [
        "-E",
        "-e"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "renice",
      "en": "set nice values of running processes",
      "zh": "renice：set nice values of running processes（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-renice",
      "context": "posix-utility",
      "keywords": [
        "renice",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 renice 来完成“set nice values of running processes”时",
          "goal": "按固定官方版本的定义调用 renice，并依据退出状态判断该操作是否完成",
          "value": "renice",
          "description": "renice 的官方用途是“set nice values of running processes”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 renice；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/renice.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/renice.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "renice [ -g|-p|-u ] -n increment ID ...",
      "options": [
        "-g",
        "-n",
        "-p",
        "-u"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "rm",
      "en": "Remove files or directories",
      "zh": "删除文件或目录",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-rm",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/rm.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "keywords": [
        "删除",
        "移除",
        "清理",
        "删除文件或目录",
        "Remove files or directories",
        "rm",
        "强制递归删除（谨慎使用）",
        "Force remove directories recursively (use with caution)"
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
          "expected": "操作后，界面完成“删除指定文件”对应的变化。",
          "platforms": [
            "mac",
            "linux"
          ]
        },
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
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "context": "posix-utility",
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "usage": "rm [ -diRrv ] file ... rm -f [ -diRrv ] [ file ... ]",
      "options": [
        "-d",
        "-f",
        "-i",
        "-R",
        "-r",
        "-v"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "rmdel",
      "en": "remove a delta from an SCCS file ( DEVELOPMENT )",
      "zh": "rmdel：remove a delta from an SCCS file ( DEVELOPMENT )（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-rmdel",
      "context": "posix-utility",
      "keywords": [
        "rmdel",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 rmdel 来完成“remove a delta from an SCCS file ( DEVELOPMENT )”时",
          "goal": "按固定官方版本的定义调用 rmdel，并依据退出状态判断该操作是否完成",
          "value": "rmdel",
          "description": "rmdel 的官方用途是“remove a delta from an SCCS file ( DEVELOPMENT )”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 rmdel；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/rmdel.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [
        "POSIX option group: DEVELOPMENT",
        "some synopsis forms require POSIX option group XSI"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/rmdel.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "[ XSI ] rmdel -r SID file ...",
      "options": [
        "-r"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "rmdir",
      "en": "remove directories",
      "zh": "rmdir：remove directories（来源：gnu-coreutils / posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-rmdir",
      "context": "posix-utility",
      "keywords": [
        "rmdir",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils / posix-utilities 提供的 rmdir 来完成“remove directories”时",
          "goal": "按固定官方版本的定义调用 rmdir，并依据退出状态判断该操作是否完成",
          "value": "rmdir",
          "description": "rmdir 的官方用途是“remove directories”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils / posix-utilities 的定义执行 rmdir；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/rmdir.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/rmdir.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "rmdir [ -p ] dir ...",
      "options": [
        "-p"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "runcon",
      "en": "runcon run command with specified security context",
      "zh": "runcon：runcon run command with specified security context（来源：gnu-coreutils）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-runcon",
      "context": "external-command",
      "keywords": [
        "runcon",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils 提供的 runcon 来完成“runcon run command with specified security context”时",
          "goal": "按固定官方版本的定义调用 runcon，并依据退出状态判断该操作是否完成",
          "value": "runcon",
          "description": "runcon 的官方用途是“runcon run command with specified security context”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils 的定义执行 runcon；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "gnu-manuals"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz/man/runcon.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz · man/runcon.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "runcon [\\,CONTEXT COMMAND \\/[\\,ARG\\/]...] .br runcon [\\,-c\\/] [\\,-u USER\\/] [\\,-r ROLE\\/] [\\,-t TYPE\\/] [\\,-l RANGE\\/] \\,COMMAND \\/[\\,ARG\\/]...",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "sact",
      "en": "print current SCCS file-editing activity ( DEVELOPMENT )",
      "zh": "sact：print current SCCS file-editing activity ( DEVELOPMENT )（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-sact",
      "context": "posix-utility",
      "keywords": [
        "sact",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 sact 来完成“print current SCCS file-editing activity ( DEVELOPMENT )”时",
          "goal": "按固定官方版本的定义调用 sact，并依据退出状态判断该操作是否完成",
          "value": "sact",
          "description": "sact 的官方用途是“print current SCCS file-editing activity ( DEVELOPMENT )”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 sact；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/sact.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [
        "POSIX option group: DEVELOPMENT",
        "some synopsis forms require POSIX option group XSI"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/sact.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "[ XSI ] sact file ...",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "sccs",
      "en": "front end for the SCCS subsystem ( DEVELOPMENT )",
      "zh": "sccs：front end for the SCCS subsystem ( DEVELOPMENT )（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-sccs",
      "context": "posix-utility",
      "keywords": [
        "sccs",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 sccs 来完成“front end for the SCCS subsystem ( DEVELOPMENT )”时",
          "goal": "按固定官方版本的定义调用 sccs，并依据退出状态判断该操作是否完成",
          "value": "sccs",
          "description": "sccs 的官方用途是“front end for the SCCS subsystem ( DEVELOPMENT )”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 sccs；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/sccs.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [
        "POSIX option group: DEVELOPMENT",
        "some synopsis forms require POSIX option group XSI"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/sccs.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "[ XSI ] sccs [ -r ] [ -d path ] [ -p path ] command [ options ... ] [ operands ... ]",
      "options": [
        "-d",
        "-p",
        "-r"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "scp",
      "en": "Secure copy between hosts",
      "zh": "安全远程文件复制",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-scp",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "openssh-portable-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/openssh/openssh-portable/tree/V_10_4_P1 · scp.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "keywords": [
        "复制",
        "克隆",
        "拷贝",
        "安全远程文件复制",
        "Secure copy between hosts",
        "scp",
        "Unix",
        "POSIX"
      ],
      "examples": [
        {
          "scenario": "需要把待部署归档上传到远程主机的临时目录供人工核对",
          "goal": "通过 SSH 安全复制本地归档",
          "value": "scp ./dist/app.tar developer@example.com:/tmp/app.tar",
          "description": "把本地文件传到远程路径；目标已存在时可能被替换。",
          "expected": "认证和传输成功后，远程 /tmp/app.tar 包含上传的归档内容。",
          "copyable": false,
          "warning": "远程目标可能被覆盖；执行前先登录主机确认目标路径和现有文件可恢复。",
          "caveat": "先用只读远程会话检查 /tmp/app.tar 是否存在，并确认覆盖目标与恢复方式。",
          "riskLevels": [
            "deleteOrOverwrite"
          ],
          "sourceType": "manual",
          "sourceIds": [
            "openssh-portable-repository"
          ],
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "openssh-portable-repository",
              "locator": "https://github.com/openssh/openssh-portable/tree/V_10_4_P1 · scp.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "context": "external-command",
      "components": [
        "openssh-client"
      ],
      "constraints": [
        "requires an OpenSSH client; available features depend on the installed OpenSSH version"
      ],
      "usage": "m scp p Fl 346ABCOpqRrsTv p Fl c Ar cipher p Fl D Ar sftp_server_path p Fl F Ar ssh_config p Fl i Ar identity_file p Fl J Ar destination p Fl l Ar limit p Fl o Ar ssh_option p Fl P Ar port p Fl S Ar program p Fl X Ar sftp_option r source ... target",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "sdiff",
      "en": "sdiff side-by-side merge of file differences",
      "zh": "sdiff：sdiff side-by-side merge of file differences（来源：gnu-diffutils）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-sdiff",
      "context": "external-command",
      "keywords": [
        "sdiff",
        "命令",
        "终端",
        "gnu-diffutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-diffutils 提供的 sdiff 来完成“sdiff side-by-side merge of file differences”时",
          "goal": "按固定官方版本的定义调用 sdiff，并依据退出状态判断该操作是否完成",
          "value": "sdiff",
          "description": "sdiff 的官方用途是“sdiff side-by-side merge of file differences”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-diffutils 的定义执行 sdiff；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "gnu-manuals"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://ftp.gnu.org/gnu/diffutils/diffutils-3.12.tar.xz/man/sdiff.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-diffutils"
      ],
      "constraints": [
        "reference behavior follows gnu-diffutils 3.12; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://ftp.gnu.org/gnu/diffutils/diffutils-3.12.tar.xz · man/sdiff.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "sdiff [\\,OPTION\\/]... \\,FILE1 FILE2\\/",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "sed",
      "en": "Stream editor for filtering and transforming text",
      "zh": "流编辑器，用于过滤、转换和替换文本",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-sed",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/sed.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "keywords": [
        "替换",
        "取代",
        "文本替换",
        "批量替换",
        "正则替换",
        "sed",
        "Unix",
        "POSIX"
      ],
      "examples": [
        {
          "scenario": "迁移接口域名前，需要先查看配置文件中所有替换结果，避免直接改坏原文件",
          "goal": "把旧域名替换为新域名并仅输出预览",
          "value": "sed 's/api-old\\.example/api.example/g' config.env",
          "description": "替换脚本作用于每一行；未使用原地编辑选项，因此结果只写到标准输出。",
          "expected": "终端显示替换后的 config.env 文本，磁盘上的原文件保持不变。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/sed.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        },
        {
          "scenario": "应用日志很长，需要先抽取开头八十行确认启动参数和版本信息",
          "goal": "只打印指定的行号范围",
          "value": "sed -n '1,80p' app.log",
          "description": "-n 关闭默认输出，p 命令只打印第一至第八十行。",
          "expected": "终端最多显示 app.log 的前八十行，日志文件保持不变。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/sed.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        },
        {
          "scenario": "确认预览和备份都正确后，需要在 Linux 构建容器里原地迁移配置域名",
          "goal": "使用 GNU sed 直接改写 config.env",
          "value": "sed -i 's/api-old\\.example/api.example/g' config.env",
          "description": "-i 会把替换结果写回 config.env，而不是只把预览打印到终端。",
          "expected": "磁盘上的 config.env 被替换结果覆盖；成功时通常不会输出完整文件内容。",
          "copyable": false,
          "warning": "会直接改写并覆盖原文件；先运行不带 -i 的预览命令并创建可恢复备份。",
          "caveat": "先完成预览和备份；此写法面向 GNU sed，macOS 自带 BSD sed 的 -i 参数形式不同。",
          "riskLevels": [
            "deleteOrOverwrite"
          ],
          "platforms": [
            "linux"
          ],
          "sourceType": "manual",
          "sourceIds": [
            "gnu-manuals"
          ],
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://ftp.gnu.org/gnu/sed/sed-4.10.tar.xz · doc/sed.texi",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ]
        }
      ],
      "context": "posix-utility",
      "components": [
        "gnu-sed",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-sed 4.10; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "usage": "sed [ -En ] script [ file ... ] sed [ -En ] -e script [ -e script ] ... [ -f script_file ] ... [ file ... ] sed [ -En ] [ -e script ] ... -f script_file [ -f script_file ] ... [ file ... ]",
      "options": [
        "-e",
        "-f",
        "-E",
        "-n"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "seq",
      "en": "seq print a sequence of numbers",
      "zh": "seq：seq print a sequence of numbers（来源：gnu-coreutils）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-seq",
      "context": "external-command",
      "keywords": [
        "seq",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils 提供的 seq 来完成“seq print a sequence of numbers”时",
          "goal": "按固定官方版本的定义调用 seq，并依据退出状态判断该操作是否完成",
          "value": "seq",
          "description": "seq 的官方用途是“seq print a sequence of numbers”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils 的定义执行 seq；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "gnu-manuals"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz/man/seq.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz · man/seq.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "seq [\\,OPTION\\/]... \\,LAST\\/ .br seq [\\,OPTION\\/]... \\,FIRST LAST\\/ .br seq [\\,OPTION\\/]... \\,FIRST INCREMENT LAST\\/",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "sftp",
      "en": "m sftp d OpenSSH secure file transfer",
      "zh": "sftp：m sftp d OpenSSH secure file transfer（来源：openssh-client）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-sftp",
      "context": "external-command",
      "keywords": [
        "sftp",
        "命令",
        "终端",
        "openssh-client"
      ],
      "examples": [
        {
          "scenario": "需要使用 openssh-client 提供的 sftp 来完成“m sftp d OpenSSH secure file transfer”时",
          "goal": "按固定官方版本的定义调用 sftp，并依据退出状态判断该操作是否完成",
          "value": "sftp",
          "description": "sftp 的官方用途是“m sftp d OpenSSH secure file transfer”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 openssh-client 的定义执行 sftp；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "openssh-portable-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "openssh-portable-repository",
              "locator": "https://github.com/openssh/openssh-portable/tree/V_10_4_P1/sftp.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "openssh-client"
      ],
      "constraints": [
        "requires an OpenSSH client; available features depend on the installed OpenSSH version"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "openssh-portable-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/openssh/openssh-portable/tree/V_10_4_P1 · sftp.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "m sftp p Fl 46AaCfNpqrv p Fl B Ar buffer_size p Fl b Ar batchfile p Fl c Ar cipher p Fl D Ar sftp_server_command p Fl F Ar ssh_config p Fl i Ar identity_file p Fl J Ar destination p Fl l Ar limit p Fl o Ar ssh_option p Fl P Ar port p Fl R Ar num_requests p Fl S Ar program p Fl s ",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "sh",
      "en": "shell, the standard command language interpreter",
      "zh": "sh：shell, the standard command language interpreter（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-sh",
      "context": "posix-utility",
      "keywords": [
        "sh",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 sh 来完成“shell, the standard command language interpreter”时",
          "goal": "按固定官方版本的定义调用 sh，并依据退出状态判断该操作是否完成",
          "value": "sh",
          "description": "sh 的官方用途是“shell, the standard command language interpreter”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 sh；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/sh.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [
        "some synopsis forms require POSIX option group OB"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/sh.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "[ OB ] sh [ -abCef h imnuvx ] [ -o option ] ... [ +abCef h imnuvx ] [ +o option ] ... [ command_file [ argument ... ]] [ OB ] sh -c [ -abCef h imnuvx ] [ -o option ] ... [ +abCef h imnuvx ] [ +o option ] ... command_string [ command_name [ argument ... ]] [ OB ] sh -s [ -abCef h ",
      "options": [
        "-a",
        "-b",
        "-C",
        "-e",
        "-f",
        "-h",
        "-m",
        "-n"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "sha1sum",
      "en": "sha1sum compute and check SHA1 message digest",
      "zh": "sha1sum：sha1sum compute and check SHA1 message digest（来源：gnu-coreutils）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-sha1sum",
      "context": "external-command",
      "keywords": [
        "sha1sum",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils 提供的 sha1sum 来完成“sha1sum compute and check SHA1 message digest”时",
          "goal": "按固定官方版本的定义调用 sha1sum，并依据退出状态判断该操作是否完成",
          "value": "sha1sum",
          "description": "sha1sum 的官方用途是“sha1sum compute and check SHA1 message digest”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils 的定义执行 sha1sum；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "gnu-manuals"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz/man/sha1sum.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz · man/sha1sum.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "sha1sum [\\,OPTION\\/]... [\\,FILE\\/]...",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "sha224sum",
      "en": "sha224sum compute and check SHA224 message digest",
      "zh": "sha224sum：sha224sum compute and check SHA224 message digest（来源：gnu-coreutils）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-sha224sum",
      "context": "external-command",
      "keywords": [
        "sha224sum",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils 提供的 sha224sum 来完成“sha224sum compute and check SHA224 message digest”时",
          "goal": "按固定官方版本的定义调用 sha224sum，并依据退出状态判断该操作是否完成",
          "value": "sha224sum",
          "description": "sha224sum 的官方用途是“sha224sum compute and check SHA224 message digest”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils 的定义执行 sha224sum；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "gnu-manuals"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz/man/sha224sum.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz · man/sha224sum.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "sha224sum [\\,OPTION\\/]... [\\,FILE\\/]...",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "sha256sum",
      "en": "sha256sum compute and check SHA256 message digest",
      "zh": "sha256sum：sha256sum compute and check SHA256 message digest（来源：gnu-coreutils）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-sha256sum",
      "context": "external-command",
      "keywords": [
        "sha256sum",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils 提供的 sha256sum 来完成“sha256sum compute and check SHA256 message digest”时",
          "goal": "按固定官方版本的定义调用 sha256sum，并依据退出状态判断该操作是否完成",
          "value": "sha256sum",
          "description": "sha256sum 的官方用途是“sha256sum compute and check SHA256 message digest”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils 的定义执行 sha256sum；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "gnu-manuals"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz/man/sha256sum.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz · man/sha256sum.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "sha256sum [\\,OPTION\\/]... [\\,FILE\\/]...",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "sha384sum",
      "en": "sha384sum compute and check SHA384 message digest",
      "zh": "sha384sum：sha384sum compute and check SHA384 message digest（来源：gnu-coreutils）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-sha384sum",
      "context": "external-command",
      "keywords": [
        "sha384sum",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils 提供的 sha384sum 来完成“sha384sum compute and check SHA384 message digest”时",
          "goal": "按固定官方版本的定义调用 sha384sum，并依据退出状态判断该操作是否完成",
          "value": "sha384sum",
          "description": "sha384sum 的官方用途是“sha384sum compute and check SHA384 message digest”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils 的定义执行 sha384sum；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "gnu-manuals"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz/man/sha384sum.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz · man/sha384sum.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "sha384sum [\\,OPTION\\/]... [\\,FILE\\/]...",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "sha512sum",
      "en": "sha512sum compute and check SHA512 message digest",
      "zh": "sha512sum：sha512sum compute and check SHA512 message digest（来源：gnu-coreutils）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-sha512sum",
      "context": "external-command",
      "keywords": [
        "sha512sum",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils 提供的 sha512sum 来完成“sha512sum compute and check SHA512 message digest”时",
          "goal": "按固定官方版本的定义调用 sha512sum，并依据退出状态判断该操作是否完成",
          "value": "sha512sum",
          "description": "sha512sum 的官方用途是“sha512sum compute and check SHA512 message digest”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils 的定义执行 sha512sum；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "gnu-manuals"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz/man/sha512sum.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz · man/sha512sum.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "sha512sum [\\,OPTION\\/]... [\\,FILE\\/]...",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "shred",
      "en": "shred overwrite a file to hide its contents, and optionally delete it",
      "zh": "shred：shred overwrite a file to hide its contents, and optionally delete it（来源：gnu-coreutils）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-shred",
      "context": "external-command",
      "keywords": [
        "shred",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils 提供的 shred 来完成“shred overwrite a file to hide its contents, and optionally delete it”时",
          "goal": "按固定官方版本的定义调用 shred，并依据退出状态判断该操作是否完成",
          "value": "shred",
          "description": "shred 的官方用途是“shred overwrite a file to hide its contents, and optionally delete it”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils 的定义执行 shred；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "gnu-manuals"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz/man/shred.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz · man/shred.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "shred [\\,OPTION\\/]... \\,FILE\\/...",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "shuf",
      "en": "shuf generate random permutations",
      "zh": "shuf：shuf generate random permutations（来源：gnu-coreutils）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-shuf",
      "context": "external-command",
      "keywords": [
        "shuf",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils 提供的 shuf 来完成“shuf generate random permutations”时",
          "goal": "按固定官方版本的定义调用 shuf，并依据退出状态判断该操作是否完成",
          "value": "shuf",
          "description": "shuf 的官方用途是“shuf generate random permutations”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils 的定义执行 shuf；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "gnu-manuals"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz/man/shuf.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz · man/shuf.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "shuf [\\,OPTION\\/]... [\\,FILE\\/] .br shuf \\,-e \\/[\\,OPTION\\/]... [\\,ARG\\/]... .br shuf \\,-i LO-HI \\/[\\,OPTION\\/]...",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "sleep",
      "en": "suspend execution for an interval",
      "zh": "sleep：suspend execution for an interval（来源：gnu-coreutils / posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-sleep",
      "context": "posix-utility",
      "keywords": [
        "sleep",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils / posix-utilities 提供的 sleep 来完成“suspend execution for an interval”时",
          "goal": "按固定官方版本的定义调用 sleep，并依据退出状态判断该操作是否完成",
          "value": "sleep",
          "description": "sleep 的官方用途是“suspend execution for an interval”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils / posix-utilities 的定义执行 sleep；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/sleep.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/sleep.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "sleep time",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "sort",
      "en": "Sort lines of text",
      "zh": "排序文本行",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-sort",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/sort.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "keywords": [
        "排序文本行",
        "Sort lines of text",
        "sort",
        "Unix",
        "POSIX"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils / posix-utilities 提供的 sort 来完成“sort, merge, or sequence check text files”时",
          "goal": "按固定官方版本的定义调用 sort，并依据退出状态判断该操作是否完成",
          "value": "sort",
          "description": "sort 的官方用途是“sort, merge, or sequence check text files”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils / posix-utilities 的定义执行 sort；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/sort.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "context": "posix-utility",
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "usage": "sort [ -m ] [ -o output ] [ -bdfinru ] [ -t char ] [ -k keydef ] ... [ file ... ] sort [ -c|-C ] [ -bdfinru ] [ -t char ] [ -k keydef ] [ file ]",
      "options": [
        "-k",
        "-b",
        "-d",
        "-f",
        "-i",
        "-n",
        "-r",
        "-c"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "split",
      "en": "split a file into pieces",
      "zh": "split：split a file into pieces（来源：gnu-coreutils / posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-split",
      "context": "posix-utility",
      "keywords": [
        "split",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils / posix-utilities 提供的 split 来完成“split a file into pieces”时",
          "goal": "按固定官方版本的定义调用 split，并依据退出状态判断该操作是否完成",
          "value": "split",
          "description": "split 的官方用途是“split a file into pieces”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils / posix-utilities 的定义执行 split；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/split.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/split.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "split [ -l line_count ] [ -a suffix_length ] [ file [ name ]] split -b n [ k|m ] [ -a suffix_length ] [ file [ name ]]",
      "options": [
        "-a",
        "-b",
        "-l"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "ssh",
      "en": "OpenSSH remote login client",
      "zh": "SSH 远程登录",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-ssh",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "openssh-portable-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/openssh/openssh-portable/tree/V_10_4_P1 · ssh.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "keywords": [
        "SSH 远程登录",
        "OpenSSH remote login client",
        "ssh",
        "Unix",
        "POSIX"
      ],
      "examples": [
        {
          "scenario": "远程开发机上的服务异常，需要登录主机检查只在该环境存在的日志",
          "goal": "建立到远程主机的交互式 SSH 会话",
          "value": "ssh developer@example.com",
          "description": "使用指定用户名连接远程主机，认证方式由本机 SSH 配置和服务端共同决定。",
          "expected": "认证成功后进入远程命令行；失败时终端显示连接或认证诊断。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "openssh-portable-repository"
          ],
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "openssh-portable-repository",
              "locator": "https://github.com/openssh/openssh-portable/tree/V_10_4_P1 · ssh.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "context": "external-command",
      "components": [
        "openssh-client"
      ],
      "constraints": [
        "requires an OpenSSH client; available features depend on the installed OpenSSH version"
      ],
      "usage": "m ssh p Fl 46AaCfGgKkMNnqsTtVvXxYy p Fl B Ar bind_interface p Fl b Ar bind_address p Fl c Ar cipher_spec p Fl D Oo Ar bind_address : Oc Ns Ar port p Fl E Ar log_file p Fl e Ar escape_char p Fl F Ar configfile p Fl I Ar pkcs11 p Fl i Ar identity_file p Fl J Ar destination p Fl L A",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "ssh-add",
      "en": "m ssh-add d adds private key identities to the OpenSSH authentication agent",
      "zh": "ssh-add：m ssh-add d adds private key identities to the OpenSSH authentication agent（来源：openssh-client）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-ssh-add",
      "context": "external-command",
      "keywords": [
        "ssh-add",
        "命令",
        "终端",
        "openssh-client"
      ],
      "examples": [
        {
          "scenario": "需要使用 openssh-client 提供的 ssh-add 来完成“m ssh-add d adds private key identities to the OpenSSH authentication agent”时",
          "goal": "按固定官方版本的定义调用 ssh-add，并依据退出状态判断该操作是否完成",
          "value": "ssh-add",
          "description": "ssh-add 的官方用途是“m ssh-add d adds private key identities to the OpenSSH authentication agent”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 openssh-client 的定义执行 ssh-add；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "openssh-portable-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "openssh-portable-repository",
              "locator": "https://github.com/openssh/openssh-portable/tree/V_10_4_P1/ssh-add.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "openssh-client"
      ],
      "constraints": [
        "requires an OpenSSH client; available features depend on the installed OpenSSH version"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "openssh-portable-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/openssh/openssh-portable/tree/V_10_4_P1 · ssh-add.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "m ssh-add p Fl CcDdKkLlNqvXx p Fl E Ar fingerprint_hash p Fl H Ar hostkey_file p Fl h Ar destination_constraint p Fl S Ar provider p Fl t Ar life p Ar m ssh-add l s Ar pkcs11 p Fl Cv p Ar certificate ... m ssh-add l e Ar pkcs11 m ssh-add l T r pubkey ... m ssh-add l Q",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "ssh-agent",
      "en": "m ssh-agent d OpenSSH authentication agent",
      "zh": "ssh-agent：m ssh-agent d OpenSSH authentication agent（来源：openssh-client）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-ssh-agent",
      "context": "external-command",
      "keywords": [
        "ssh-agent",
        "命令",
        "终端",
        "openssh-client"
      ],
      "examples": [
        {
          "scenario": "需要使用 openssh-client 提供的 ssh-agent 来完成“m ssh-agent d OpenSSH authentication agent”时",
          "goal": "按固定官方版本的定义调用 ssh-agent，并依据退出状态判断该操作是否完成",
          "value": "ssh-agent",
          "description": "ssh-agent 的官方用途是“m ssh-agent d OpenSSH authentication agent”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 openssh-client 的定义执行 ssh-agent；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "openssh-portable-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "openssh-portable-repository",
              "locator": "https://github.com/openssh/openssh-portable/tree/V_10_4_P1/ssh-agent.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "openssh-client"
      ],
      "constraints": [
        "requires an OpenSSH client; available features depend on the installed OpenSSH version"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "openssh-portable-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/openssh/openssh-portable/tree/V_10_4_P1 · ssh-agent.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "m ssh-agent p Fl c | s p Fl DdTU p Fl a Ar bind_address p Fl E Ar fingerprint_hash p Fl O Ar option p Fl P Ar allowed_providers p Fl t Ar life m ssh-agent p Fl TU p Fl a Ar bind_address p Fl E Ar fingerprint_hash p Fl O Ar option p Fl P Ar allowed_providers p Fl t Ar life r comma",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "ssh-keygen",
      "en": "m ssh-keygen d OpenSSH authentication key utility",
      "zh": "ssh-keygen：m ssh-keygen d OpenSSH authentication key utility（来源：openssh-client）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-ssh-keygen",
      "context": "external-command",
      "keywords": [
        "ssh-keygen",
        "命令",
        "终端",
        "openssh-client"
      ],
      "examples": [
        {
          "scenario": "需要使用 openssh-client 提供的 ssh-keygen 来完成“m ssh-keygen d OpenSSH authentication key utility”时",
          "goal": "按固定官方版本的定义调用 ssh-keygen，并依据退出状态判断该操作是否完成",
          "value": "ssh-keygen",
          "description": "ssh-keygen 的官方用途是“m ssh-keygen d OpenSSH authentication key utility”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 openssh-client 的定义执行 ssh-keygen；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "openssh-portable-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "openssh-portable-repository",
              "locator": "https://github.com/openssh/openssh-portable/tree/V_10_4_P1/ssh-keygen.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "openssh-client"
      ],
      "constraints": [
        "requires an OpenSSH client; available features depend on the installed OpenSSH version"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "openssh-portable-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/openssh/openssh-portable/tree/V_10_4_P1 · ssh-keygen.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "m ssh-keygen p Fl q p Fl a Ar rounds p Fl b Ar bits p Fl C Ar comment p Fl f Ar output_keyfile p Fl m Ar format p Fl N Ar new_passphrase p Fl O Ar option p Fl t Cm ecdsa | ecdsa-sk | ed25519 | ed25519-sk | mldsa44-ed25519 | rsa p Fl w Ar provider p Fl Z Ar cipher m ssh-keygen l p",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "ssh-keyscan",
      "en": "m ssh-keyscan d gather SSH public keys from servers",
      "zh": "ssh-keyscan：m ssh-keyscan d gather SSH public keys from servers（来源：openssh-client）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-ssh-keyscan",
      "context": "external-command",
      "keywords": [
        "ssh-keyscan",
        "命令",
        "终端",
        "openssh-client"
      ],
      "examples": [
        {
          "scenario": "需要使用 openssh-client 提供的 ssh-keyscan 来完成“m ssh-keyscan d gather SSH public keys from servers”时",
          "goal": "按固定官方版本的定义调用 ssh-keyscan，并依据退出状态判断该操作是否完成",
          "value": "ssh-keyscan",
          "description": "ssh-keyscan 的官方用途是“m ssh-keyscan d gather SSH public keys from servers”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 openssh-client 的定义执行 ssh-keyscan；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "openssh-portable-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "openssh-portable-repository",
              "locator": "https://github.com/openssh/openssh-portable/tree/V_10_4_P1/ssh-keyscan.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "openssh-client"
      ],
      "constraints": [
        "requires an OpenSSH client; available features depend on the installed OpenSSH version"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "openssh-portable-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/openssh/openssh-portable/tree/V_10_4_P1 · ssh-keyscan.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "m ssh-keyscan p Fl 46cDHqv p Fl f Ar file p Fl O Ar option p Fl p Ar port p Fl T Ar timeout p Fl t Ar type p Ar host | addrlist namelist",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "stat",
      "en": "stat display file or file system status",
      "zh": "stat：stat display file or file system status（来源：gnu-coreutils）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-stat",
      "context": "external-command",
      "keywords": [
        "stat",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "锁文件看似没有变化时，需要核对它的大小、时间戳和文件系统标识",
          "goal": "查看 package-lock.json 的详细文件状态",
          "value": "stat package-lock.json",
          "description": "读取文件元数据，而不打开或修改文件内容。",
          "expected": "终端显示该文件的大小、权限、时间戳及实现提供的其它状态字段。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "gnu-manuals"
          ],
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz · man/stat.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz · man/stat.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "stat [\\,OPTION\\/]... \\,FILE\\/...",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "stdbuf",
      "en": "stdbuf Run COMMAND, with modified buffering operations for its standard streams.",
      "zh": "stdbuf：stdbuf Run COMMAND, with modified buffering operations for its standard streams.（来源：gnu-coreutils）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-stdbuf",
      "context": "external-command",
      "keywords": [
        "stdbuf",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils 提供的 stdbuf 来完成“stdbuf Run COMMAND, with modified buffering operations for its standard streams”时",
          "goal": "按固定官方版本的定义调用 stdbuf，并依据退出状态判断该操作是否完成",
          "value": "stdbuf",
          "description": "stdbuf 的官方用途是“stdbuf Run COMMAND, with modified buffering operations for its standard streams”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils 的定义执行 stdbuf；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "gnu-manuals"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz/man/stdbuf.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz · man/stdbuf.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "stdbuf \\,OPTION\\/... \\,COMMAND\\/",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "strings",
      "en": "find printable strings in files",
      "zh": "strings：find printable strings in files（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-strings",
      "context": "posix-utility",
      "keywords": [
        "strings",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 strings 来完成“find printable strings in files”时",
          "goal": "按固定官方版本的定义调用 strings，并依据退出状态判断该操作是否完成",
          "value": "strings",
          "description": "strings 的官方用途是“find printable strings in files”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 strings；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/strings.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/strings.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "strings [ -a ] [ -t format ] [ -n number ] [ file ... ]",
      "options": [
        "-a",
        "-n",
        "-t"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "strip",
      "en": "remove unnecessary information from strippable files ( DEVELOPMENT )",
      "zh": "strip：remove unnecessary information from strippable files ( DEVELOPMENT )（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-strip",
      "context": "posix-utility",
      "keywords": [
        "strip",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 strip 来完成“remove unnecessary information from strippable files ( DEVELOPMENT )”时",
          "goal": "按固定官方版本的定义调用 strip，并依据退出状态判断该操作是否完成",
          "value": "strip",
          "description": "strip 的官方用途是“remove unnecessary information from strippable files ( DEVELOPMENT )”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 strip；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/strip.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [
        "POSIX option group: DEVELOPMENT",
        "some synopsis forms require POSIX option group SD"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/strip.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "[ SD ] strip file ...",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "stty",
      "en": "set the options for a terminal",
      "zh": "stty：set the options for a terminal（来源：gnu-coreutils / posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-stty",
      "context": "posix-utility",
      "keywords": [
        "stty",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils / posix-utilities 提供的 stty 来完成“set the options for a terminal”时",
          "goal": "按固定官方版本的定义调用 stty，并依据退出状态判断该操作是否完成",
          "value": "stty",
          "description": "stty 的官方用途是“set the options for a terminal”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils / posix-utilities 的定义执行 stty；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/stty.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/stty.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "stty [ -a|-g ] stty operand ...",
      "options": [
        "-a",
        "-g"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "sum",
      "en": "sum checksum and count the blocks in a file",
      "zh": "sum：sum checksum and count the blocks in a file（来源：gnu-coreutils）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-sum",
      "context": "external-command",
      "keywords": [
        "sum",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils 提供的 sum 来完成“sum checksum and count the blocks in a file”时",
          "goal": "按固定官方版本的定义调用 sum，并依据退出状态判断该操作是否完成",
          "value": "sum",
          "description": "sum 的官方用途是“sum checksum and count the blocks in a file”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils 的定义执行 sum；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "gnu-manuals"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz/man/sum.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz · man/sum.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "sum [\\,OPTION\\/]... [\\,FILE\\/]...",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "sync",
      "en": "sync Synchronize cached writes to persistent storage",
      "zh": "sync：sync Synchronize cached writes to persistent storage（来源：gnu-coreutils）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-sync",
      "context": "external-command",
      "keywords": [
        "sync",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils 提供的 sync 来完成“sync Synchronize cached writes to persistent storage”时",
          "goal": "按固定官方版本的定义调用 sync，并依据退出状态判断该操作是否完成",
          "value": "sync",
          "description": "sync 的官方用途是“sync Synchronize cached writes to persistent storage”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils 的定义执行 sync；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "gnu-manuals"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz/man/sync.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz · man/sync.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "sync [\\,OPTION\\/] [\\,FILE\\/]...",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "tabs",
      "en": "set terminal tabs",
      "zh": "tabs：set terminal tabs（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-tabs",
      "context": "posix-utility",
      "keywords": [
        "tabs",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 tabs 来完成“set terminal tabs”时",
          "goal": "按固定官方版本的定义调用 tabs，并依据退出状态判断该操作是否完成",
          "value": "tabs",
          "description": "tabs 的官方用途是“set terminal tabs”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 tabs；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/tabs.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [
        "some synopsis forms require POSIX option group XSI"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/tabs.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "[ XSI ] tabs [ - n | -a|-a2|-c|-c2|-c3|-f|-p|-s|-u ] [ -T type ] tabs [ -T type ] n [[ sep [ + ] n ] ... ]",
      "options": [
        "-a",
        "-c",
        "-8",
        "-0",
        "-f",
        "-p",
        "-s",
        "-u"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "tac",
      "en": "tac concatenate and print files in reverse",
      "zh": "tac：tac concatenate and print files in reverse（来源：gnu-coreutils）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-tac",
      "context": "external-command",
      "keywords": [
        "tac",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils 提供的 tac 来完成“tac concatenate and print files in reverse”时",
          "goal": "按固定官方版本的定义调用 tac，并依据退出状态判断该操作是否完成",
          "value": "tac",
          "description": "tac 的官方用途是“tac concatenate and print files in reverse”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils 的定义执行 tac；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "gnu-manuals"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz/man/tac.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz · man/tac.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "tac [\\,OPTION\\/]... [\\,FILE\\/]...",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "tail",
      "en": "Output the last part of files",
      "zh": "输出文件末尾部分",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-tail",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/tail.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "keywords": [
        "输出文件末尾部分",
        "Output the last part of files",
        "tail",
        "实时追踪文件新增内容",
        "Follow file growth in real time",
        "Unix",
        "POSIX"
      ],
      "examples": [
        {
          "scenario": "服务刚刚失败，需要先查看日志末尾的最近五十行而不是加载整个文件",
          "goal": "输出 app.log 的最后五十行",
          "value": "tail -n 50 app.log",
          "description": "-n 50 限制输出为文件末尾五十行，适合快速查看最新日志。",
          "expected": "终端按原顺序显示 app.log 最后的最多五十行，文件保持不变。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/tail.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        },
        {
          "scenario": "本地开发服务正在复现偶发错误，需要持续日志输出观察下一次请求",
          "goal": "持续跟随 app.log 追加的内容",
          "value": "tail -f app.log",
          "description": "-f 保持进程运行，并在文件追加新行时继续输出。",
          "expected": "终端先显示日志末尾内容，随后持续显示新追加的行，直到用户结束 tail。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/tail.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "context": "posix-utility",
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "usage": "tail [ -f ] [ -c number |-n number ] [ file ] tail -r [ -n number ] [ file ]",
      "options": [
        "-c",
        "-1",
        "-f",
        "-n",
        "-r"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "talk",
      "en": "talk to another user",
      "zh": "talk：talk to another user（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-talk",
      "context": "posix-utility",
      "keywords": [
        "talk",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 talk 来完成“talk to another user”时",
          "goal": "按固定官方版本的定义调用 talk，并依据退出状态判断该操作是否完成",
          "value": "talk",
          "description": "talk 的官方用途是“talk to another user”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 talk；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/talk.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [
        "some synopsis forms require POSIX option group UP"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/talk.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "[ UP ] talk address [ terminal ]",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "tar",
      "en": "Create or extract archive files",
      "zh": "创建或解压归档文件",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-tar",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://ftp.gnu.org/gnu/tar/tar-1.35.tar.xz · doc/tar.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "keywords": [
        "创建",
        "新建",
        "初始化",
        "创建或解压归档文件",
        "Create or extract archive files",
        "tar",
        "解压 .tar.gz 归档",
        "Extract a gzipped tar archive"
      ],
      "examples": [
        {
          "scenario": "收到发布归档后，需要在解包前检查其中的路径，避免把未知文件写入工作目录",
          "goal": "列出 tar 归档目录而不提取文件",
          "value": "tar tf release.tar",
          "description": "传统选项 t 查看归档目录，f 指定后续的归档文件名；不会执行提取。",
          "expected": "终端按归档顺序列出 release.tar 内的成员路径，当前目录不新增归档成员。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "gnu-manuals"
          ],
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://ftp.gnu.org/gnu/tar/tar-1.35.tar.xz · doc/tar.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        },
        {
          "scenario": "已检查发布归档成员且准备好空的临时目录，需要解开 gzip 压缩包进行本地验收",
          "goal": "提取 gzip 压缩的 tar 发布归档",
          "value": "tar -xzf release.tar.gz",
          "description": "-x 提取成员，-z 处理 gzip 压缩，-f 指定 release.tar.gz 归档文件。",
          "expected": "归档成员被写入当前目录；若同名路径已存在，内容可能被覆盖。",
          "copyable": false,
          "warning": "提取会在当前目录创建文件并可能覆盖同名路径；不要直接在项目根目录处理未知归档。",
          "caveat": "先用 tar -tzf release.tar.gz 预览成员路径，再进入新建的隔离临时目录执行提取。",
          "riskLevels": [
            "deleteOrOverwrite"
          ],
          "sourceType": "manual",
          "sourceIds": [
            "gnu-manuals"
          ],
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://ftp.gnu.org/gnu/tar/tar-1.35.tar.xz · doc/tar.texi",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        },
        {
          "scenario": "准备上传构建产物前，需要把示例目录打成一个 gzip 压缩归档",
          "goal": "创建 gzip 压缩的 tar 归档",
          "value": "tar -czf archive.tar.gz example-dir",
          "description": "-c 创建新归档，-z 使用 gzip 压缩，-f 指定 archive.tar.gz 输出文件。",
          "expected": "当前目录生成 archive.tar.gz；同名文件存在时可能被替换。",
          "copyable": false,
          "warning": "会创建或覆盖 archive.tar.gz；不要在未核对路径时覆盖已有发布归档。",
          "caveat": "先检查 example-dir 和目标路径，再为现有同名归档创建备份或改用新的文件名。",
          "riskLevels": [
            "deleteOrOverwrite"
          ],
          "sourceType": "manual",
          "sourceIds": [
            "gnu-manuals"
          ],
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://ftp.gnu.org/gnu/tar/tar-1.35.tar.xz · doc/tar.texi",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "context": "external-command",
      "components": [
        "gnu-tar"
      ],
      "constraints": [
        "reference behavior follows gnu-tar 1.35; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "usage": "Traditional usage tar {A|c|d|r|t|u|x}\\ [GnSkUWOmpsMBiajJzZhPlRvwo] [ARG...] UNIX-style usage .sp tar A [OPTIONS] f ARCHIVE ARCHIVE... .sp tar c [f ARCHIVE] [OPTIONS] [FILE...] .sp tar d [f ARCHIVE] [OPTIONS] [FILE...] .sp tar r [f ARCHIVE] [OPTIONS] [FILE...] .sp tar t [f ARCHIVE",
      "options": [
        "--check",
        "-device",
        "-g",
        "--listed",
        "-incremental",
        "--hole",
        "-detection",
        "--sparse"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "tee",
      "en": "duplicate standard input",
      "zh": "tee：duplicate standard input（来源：gnu-coreutils / posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-tee",
      "context": "posix-utility",
      "keywords": [
        "tee",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils / posix-utilities 提供的 tee 来完成“duplicate standard input”时",
          "goal": "按固定官方版本的定义调用 tee，并依据退出状态判断该操作是否完成",
          "value": "tee",
          "description": "tee 的官方用途是“duplicate standard input”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils / posix-utilities 的定义执行 tee；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/tee.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/tee.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "tee [ -ai ] [ file ... ]",
      "options": [
        "-a",
        "-i"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "test",
      "en": "evaluate expression",
      "zh": "test：evaluate expression（来源：gnu-coreutils / posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-test",
      "context": "posix-utility",
      "keywords": [
        "test",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils / posix-utilities 提供的 test 来完成“evaluate expression”时",
          "goal": "按固定官方版本的定义调用 test，并依据退出状态判断该操作是否完成",
          "value": "test",
          "description": "test 的官方用途是“evaluate expression”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils / posix-utilities 的定义执行 test；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/test.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/test.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "test [ expression ] [ [ expression ] ]",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "time",
      "en": "time a simple command",
      "zh": "time：time a simple command（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-time",
      "context": "posix-utility",
      "keywords": [
        "time",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 time 来完成“time a simple command”时",
          "goal": "按固定官方版本的定义调用 time，并依据退出状态判断该操作是否完成",
          "value": "time",
          "description": "time 的官方用途是“time a simple command”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 time；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/time.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/time.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "time [ -p ] utility [ argument ... ]",
      "options": [
        "-p"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "timeout",
      "en": "execute a utility with a time limit",
      "zh": "timeout：execute a utility with a time limit（来源：gnu-coreutils / posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-timeout",
      "context": "posix-utility",
      "keywords": [
        "timeout",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "自动化测试偶尔永久等待，需要给整个测试命令设置明确的最长运行时间",
          "goal": "最多运行三十秒的 npm test",
          "value": "timeout 30 npm test",
          "description": "timeout 把 duration 后面的 npm test 作为嵌套命令执行，并在超过时限时发送终止信号。",
          "expected": "测试在三十秒内完成时返回其状态；超时则由 timeout 终止并返回超时状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/timeout.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/timeout.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "timeout [ -fp ] [ -k time ] [ -s signal_name ] duration utility [ argument ... ]",
      "options": [
        "-f",
        "-k",
        "-p",
        "-s"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "top",
      "en": "Display real-time process activity",
      "zh": "实时显示进程活动",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-top",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "procps-ng-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://gitlab.com/procps-ng/procps/-/tags/v4.0.6 · man/top.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "实时显示进程活动",
        "Display real-time process activity",
        "top",
        "Unix",
        "POSIX"
      ],
      "examples": [
        {
          "scenario": "开发机突然变慢，需要实时观察哪些进程占用 CPU 或内存",
          "goal": "打开交互式进程资源视图",
          "value": "top",
          "description": "持续刷新系统和进程资源统计，适合定位瞬时高负载。",
          "expected": "终端进入动态进程列表；退出查看器不会修改进程状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "procps-ng-repository"
          ],
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "procps-ng-repository",
              "locator": "https://gitlab.com/procps-ng/procps/-/tags/v4.0.6 · man/top.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "context": "external-command",
      "platformCaveat": "macOS 与 Linux 的交互键、排序字段和批处理选项不同。",
      "components": [
        "top-implementations"
      ],
      "constraints": [
        "top fields and interactive keys differ between BSD/macOS and procps-ng/Linux"
      ],
      "usage": ".\\\" ---------------------------------------------------------------------- \\*(WE [ option \" .\\|.\\|.]\" .\\\"",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "touch",
      "en": "Create empty file or update timestamp",
      "zh": "创建空文件或更新时间戳",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-touch",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/touch.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "keywords": [
        "创建",
        "新建",
        "初始化",
        "创建空文件或更新时间戳",
        "Create empty file or update timestamp",
        "touch",
        "Unix",
        "POSIX"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils / posix-utilities 提供的 touch 来完成“change file access and modification times”时",
          "goal": "按固定官方版本的定义调用 touch，并依据退出状态判断该操作是否完成",
          "value": "touch",
          "description": "touch 的官方用途是“change file access and modification times”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils / posix-utilities 的定义执行 touch；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/touch.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "context": "posix-utility",
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "usage": "touch [ -acm ] [ -r ref_file |-t time |-d date_time ] file ...",
      "options": [
        "-a",
        "-m",
        "-c",
        "-d",
        "-t",
        "-r"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "tput",
      "en": "change terminal characteristics",
      "zh": "tput：change terminal characteristics（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-tput",
      "context": "posix-utility",
      "keywords": [
        "tput",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 tput 来完成“change terminal characteristics”时",
          "goal": "按固定官方版本的定义调用 tput，并依据退出状态判断该操作是否完成",
          "value": "tput",
          "description": "tput 的官方用途是“change terminal characteristics”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 tput；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/tput.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/tput.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "tput [ -T type ] operand ...",
      "options": [
        "-T"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "tr",
      "en": "translate characters",
      "zh": "tr：translate characters（来源：gnu-coreutils / posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-tr",
      "context": "posix-utility",
      "keywords": [
        "tr",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils / posix-utilities 提供的 tr 来完成“translate characters”时",
          "goal": "按固定官方版本的定义调用 tr，并依据退出状态判断该操作是否完成",
          "value": "tr",
          "description": "tr 的官方用途是“translate characters”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils / posix-utilities 的定义执行 tr；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/tr.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/tr.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "tr [ -c|-C ] [ -s ] string1 string2 tr -s [ -c|-C ] string1 tr -d [ -c|-C ] string1 tr -ds [ -c|-C ] string1 string2",
      "options": [
        "-c",
        "-C",
        "-d",
        "-s"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "true",
      "en": "return true value",
      "zh": "true：return true value（来源：gnu-coreutils / posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-true",
      "context": "posix-utility",
      "keywords": [
        "true",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils / posix-utilities 提供的 true 来完成“return true value”时",
          "goal": "按固定官方版本的定义调用 true，并依据退出状态判断该操作是否完成",
          "value": "true",
          "description": "true 的官方用途是“return true value”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils / posix-utilities 的定义执行 true；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/true.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/true.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "true",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "truncate",
      "en": "truncate shrink or extend the size of a file to the specified size",
      "zh": "truncate：truncate shrink or extend the size of a file to the specified size（来源：gnu-coreutils）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-truncate",
      "context": "external-command",
      "keywords": [
        "truncate",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils 提供的 truncate 来完成“truncate shrink or extend the size of a file to the specified size”时",
          "goal": "按固定官方版本的定义调用 truncate，并依据退出状态判断该操作是否完成",
          "value": "truncate",
          "description": "truncate 的官方用途是“truncate shrink or extend the size of a file to the specified size”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils 的定义执行 truncate；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "gnu-manuals"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz/man/truncate.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz · man/truncate.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "truncate \\,OPTION\\/... \\,FILE\\/...",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "tsort",
      "en": "topological sort",
      "zh": "tsort：topological sort（来源：gnu-coreutils / posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-tsort",
      "context": "posix-utility",
      "keywords": [
        "tsort",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils / posix-utilities 提供的 tsort 来完成“topological sort”时",
          "goal": "按固定官方版本的定义调用 tsort，并依据退出状态判断该操作是否完成",
          "value": "tsort",
          "description": "tsort 的官方用途是“topological sort”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils / posix-utilities 的定义执行 tsort；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/tsort.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/tsort.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "tsort [ -w ] [ file ]",
      "options": [
        "-w"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "tty",
      "en": "return user's terminal name",
      "zh": "tty：return user's terminal name（来源：gnu-coreutils / posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-tty",
      "context": "posix-utility",
      "keywords": [
        "tty",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils / posix-utilities 提供的 tty 来完成“return user's terminal name”时",
          "goal": "按固定官方版本的定义调用 tty，并依据退出状态判断该操作是否完成",
          "value": "tty",
          "description": "tty 的官方用途是“return user's terminal name”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils / posix-utilities 的定义执行 tty；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/tty.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/tty.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "tty",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "type",
      "en": "write a description of command type",
      "zh": "type：write a description of command type（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-type",
      "context": "posix-utility",
      "keywords": [
        "type",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 type 来完成“write a description of command type”时",
          "goal": "按固定官方版本的定义调用 type，并依据退出状态判断该操作是否完成",
          "value": "type",
          "description": "type 的官方用途是“write a description of command type”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 type；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/type.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [
        "some synopsis forms require POSIX option group XSI"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/type.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "[ XSI ] type name ...",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "ulimit",
      "en": "report or set resource limits",
      "zh": "ulimit：report or set resource limits（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-ulimit",
      "context": "posix-utility",
      "keywords": [
        "ulimit",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 ulimit 来完成“report or set resource limits”时",
          "goal": "按固定官方版本的定义调用 ulimit，并依据退出状态判断该操作是否完成",
          "value": "ulimit",
          "description": "ulimit 的官方用途是“report or set resource limits”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 ulimit；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/ulimit.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [
        "some synopsis forms require POSIX option group XSI"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/ulimit.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "ulimit [ -H|-S ] -a [ XSI ] ulimit [ -H|-S ] [ -c|-d|-f|-n|-s| -t |-v ] [ newlimit ]",
      "options": [
        "-H",
        "-S",
        "-a",
        "-f",
        "-c",
        "-d",
        "-n",
        "-s"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "umask",
      "en": "get or set the file mode creation mask",
      "zh": "umask：get or set the file mode creation mask（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-umask",
      "context": "posix-utility",
      "keywords": [
        "umask",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 umask 来完成“get or set the file mode creation mask”时",
          "goal": "按固定官方版本的定义调用 umask，并依据退出状态判断该操作是否完成",
          "value": "umask",
          "description": "umask 的官方用途是“get or set the file mode creation mask”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 umask；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/umask.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/umask.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "umask [ -S ] [ mask ]",
      "options": [
        "-S"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "unalias",
      "en": "remove alias definitions",
      "zh": "unalias：remove alias definitions（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-unalias",
      "context": "posix-utility",
      "keywords": [
        "unalias",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 unalias 来完成“remove alias definitions”时",
          "goal": "按固定官方版本的定义调用 unalias，并依据退出状态判断该操作是否完成",
          "value": "unalias",
          "description": "unalias 的官方用途是“remove alias definitions”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 unalias；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/unalias.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/unalias.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "unalias alias-name ... unalias -a",
      "options": [
        "-a"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "uname",
      "en": "return system name",
      "zh": "uname：return system name（来源：gnu-coreutils / posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-uname",
      "context": "posix-utility",
      "keywords": [
        "uname",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils / posix-utilities 提供的 uname 来完成“return system name”时",
          "goal": "按固定官方版本的定义调用 uname，并依据退出状态判断该操作是否完成",
          "value": "uname",
          "description": "uname 的官方用途是“return system name”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils / posix-utilities 的定义执行 uname；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/uname.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/uname.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "uname [ -amnrsv ]",
      "options": [
        "-a",
        "-m",
        "-n",
        "-r",
        "-s",
        "-v"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "uncompress",
      "en": "compress and decompress data",
      "zh": "uncompress：compress and decompress data（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-uncompress",
      "context": "posix-utility",
      "keywords": [
        "uncompress",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 uncompress 来完成“compress and decompress data”时",
          "goal": "按固定官方版本的定义调用 uncompress，并依据退出状态判断该操作是否完成",
          "value": "uncompress",
          "description": "uncompress 的官方用途是“compress and decompress data”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 uncompress；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/uncompress.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [
        "some synopsis forms require POSIX option group XSI"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/uncompress.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "[ XSI ] compress [ -fv ] [ -b value ] [ -g | -m algo ] [ file ... ] compress -c [ -fv ] [ -b value ] [ -g | -m algo ] [ file ] compress -d [ -cfv ] [ file ... ] uncompress [ -cfv ] [ file ... ] zcat [ file ... ]",
      "options": [
        "-b",
        "-c",
        "-d",
        "-f",
        "-g",
        "-m",
        "-v"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "unexpand",
      "en": "convert spaces to tabs",
      "zh": "unexpand：convert spaces to tabs（来源：gnu-coreutils / posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-unexpand",
      "context": "posix-utility",
      "keywords": [
        "unexpand",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils / posix-utilities 提供的 unexpand 来完成“convert spaces to tabs”时",
          "goal": "按固定官方版本的定义调用 unexpand，并依据退出状态判断该操作是否完成",
          "value": "unexpand",
          "description": "unexpand 的官方用途是“convert spaces to tabs”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils / posix-utilities 的定义执行 unexpand；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/unexpand.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/unexpand.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "unexpand [ -a|-t tablist ] [ file ... ]",
      "options": [
        "-a",
        "-t"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "unget",
      "en": "undo a previous get of an SCCS file ( DEVELOPMENT )",
      "zh": "unget：undo a previous get of an SCCS file ( DEVELOPMENT )（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-unget",
      "context": "posix-utility",
      "keywords": [
        "unget",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 unget 来完成“undo a previous get of an SCCS file ( DEVELOPMENT )”时",
          "goal": "按固定官方版本的定义调用 unget，并依据退出状态判断该操作是否完成",
          "value": "unget",
          "description": "unget 的官方用途是“undo a previous get of an SCCS file ( DEVELOPMENT )”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 unget；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/unget.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [
        "POSIX option group: DEVELOPMENT",
        "some synopsis forms require POSIX option group XSI"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/unget.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "[ XSI ] unget [ -ns ] [ -r SID ] file ...",
      "options": [
        "-r",
        "-s",
        "-n"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "uniq",
      "en": "Report or omit repeated lines",
      "zh": "报告或过滤重复行",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-uniq",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/uniq.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "keywords": [
        "报告或过滤重复行",
        "Report or omit repeated lines",
        "uniq",
        "Unix",
        "POSIX"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils / posix-utilities 提供的 uniq 来完成“report or filter out repeated lines in a file”时",
          "goal": "按固定官方版本的定义调用 uniq，并依据退出状态判断该操作是否完成",
          "value": "uniq",
          "description": "uniq 的官方用途是“report or filter out repeated lines in a file”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils / posix-utilities 的定义执行 uniq；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/uniq.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "context": "posix-utility",
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "usage": "uniq [ -c|-d|-u ] [ -f fields ] [ -s char ] [ input_file [ output_file ]]",
      "options": [
        "-c",
        "-d",
        "-f",
        "-s",
        "-u"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "unlink",
      "en": "call the unlink function",
      "zh": "unlink：call the unlink function（来源：gnu-coreutils / posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-unlink",
      "context": "posix-utility",
      "keywords": [
        "unlink",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils / posix-utilities 提供的 unlink 来完成“call the unlink function”时",
          "goal": "按固定官方版本的定义调用 unlink，并依据退出状态判断该操作是否完成",
          "value": "unlink",
          "description": "unlink 的官方用途是“call the unlink function”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils / posix-utilities 的定义执行 unlink；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/unlink.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately",
        "some synopsis forms require POSIX option group XSI"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/unlink.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "[ XSI ] unlink file",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "updatedb",
      "en": "updatedb update a file name database",
      "zh": "updatedb：updatedb update a file name database（来源：gnu-findutils）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-updatedb",
      "context": "external-command",
      "keywords": [
        "updatedb",
        "命令",
        "终端",
        "gnu-findutils"
      ],
      "examples": [
        {
          "scenario": "想为单个源码目录试建 locate 数据库，但不能覆盖系统维护的默认数据库",
          "goal": "把项目路径索引写入临时数据库文件",
          "value": "updatedb --output /tmp/project-locate.db --localpaths ./src",
          "description": "--output 选择独立数据库文件，--localpaths 把索引范围限制为项目源码目录。",
          "expected": "成功时生成 /tmp/project-locate.db，系统默认 locate 数据库保持不变。",
          "copyable": false,
          "warning": "会创建或覆盖指定数据库文件并遍历源码路径；先确认输出文件不存在或可安全替换。",
          "caveat": "先检查 /tmp/project-locate.db 的现有用途和 ./src 的读取范围；索引可能记录敏感文件名。",
          "riskLevels": [
            "deleteOrOverwrite"
          ],
          "sourceType": "manual",
          "sourceIds": [
            "gnu-manuals"
          ],
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://ftp.gnu.org/gnu/findutils/findutils-4.11.0.tar.xz · locate/updatedb.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-findutils"
      ],
      "constraints": [
        "reference behavior follows gnu-findutils 4.11.0; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://ftp.gnu.org/gnu/findutils/findutils-4.11.0.tar.xz · locate/updatedb.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "updatedb [ options ] .",
      "options": [
        "--findoptions",
        "-option1",
        "-option2",
        "--localpaths",
        "--netpaths",
        "--prunepaths",
        "--prunefs",
        "--output"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "uptime",
      "en": "uptime tell how long the system has been running",
      "zh": "uptime：uptime tell how long the system has been running（来源：gnu-coreutils）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-uptime",
      "context": "external-command",
      "keywords": [
        "uptime",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils 提供的 uptime 来完成“uptime tell how long the system has been running”时",
          "goal": "按固定官方版本的定义调用 uptime，并依据退出状态判断该操作是否完成",
          "value": "uptime",
          "description": "uptime 的官方用途是“uptime tell how long the system has been running”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils 的定义执行 uptime；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "gnu-manuals"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz/man/uptime.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz · man/uptime.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "uptime [\\,OPTION\\/]... [\\,FILE\\/]",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "users",
      "en": "users print the user names of users currently logged in to the current host",
      "zh": "users：users print the user names of users currently logged in to the current host（来源：gnu-coreutils）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-users",
      "context": "external-command",
      "keywords": [
        "users",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils 提供的 users 来完成“users print the user names of users currently logged in to the current host”时",
          "goal": "按固定官方版本的定义调用 users，并依据退出状态判断该操作是否完成",
          "value": "users",
          "description": "users 的官方用途是“users print the user names of users currently logged in to the current host”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils 的定义执行 users；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "gnu-manuals"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz/man/users.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz · man/users.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "users [\\,OPTION\\/]... [\\,FILE\\/]",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "uucp",
      "en": "system-to-system copy",
      "zh": "uucp：system-to-system copy（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-uucp",
      "context": "posix-utility",
      "keywords": [
        "uucp",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 uucp 来完成“system-to-system copy”时",
          "goal": "按固定官方版本的定义调用 uucp，并依据退出状态判断该操作是否完成",
          "value": "uucp",
          "description": "uucp 的官方用途是“system-to-system copy”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 uucp；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/uucp.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [
        "optional POSIX component: UUCP Utilities; not required on every conforming implementation",
        "some synopsis forms require POSIX option group UU"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/uucp.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "[ UU ] uucp [ -cCdfjmr ] [ -n user ] source-file ... destination-file",
      "options": [
        "-c",
        "-C",
        "-d",
        "-f",
        "-j",
        "-m",
        "-n",
        "-r"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "uudecode",
      "en": "decode a binary file",
      "zh": "uudecode：decode a binary file（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-uudecode",
      "context": "posix-utility",
      "keywords": [
        "uudecode",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 uudecode 来完成“decode a binary file”时",
          "goal": "按固定官方版本的定义调用 uudecode，并依据退出状态判断该操作是否完成",
          "value": "uudecode",
          "description": "uudecode 的官方用途是“decode a binary file”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 uudecode；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/uudecode.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/uudecode.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "uudecode [ -o outfile ] [ file ]",
      "options": [
        "-o"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "uuencode",
      "en": "encode a binary file",
      "zh": "uuencode：encode a binary file（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-uuencode",
      "context": "posix-utility",
      "keywords": [
        "uuencode",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 uuencode 来完成“encode a binary file”时",
          "goal": "按固定官方版本的定义调用 uuencode，并依据退出状态判断该操作是否完成",
          "value": "uuencode",
          "description": "uuencode 的官方用途是“encode a binary file”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 uuencode；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/uuencode.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/uuencode.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "uuencode [ -m ] [ file ] decode_pathname",
      "options": [
        "-m"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "uustat",
      "en": "uucp status enquiry and job control",
      "zh": "uustat：uucp status enquiry and job control（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-uustat",
      "context": "posix-utility",
      "keywords": [
        "uustat",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 uustat 来完成“uucp status enquiry and job control”时",
          "goal": "按固定官方版本的定义调用 uustat，并依据退出状态判断该操作是否完成",
          "value": "uustat",
          "description": "uustat 的官方用途是“uucp status enquiry and job control”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 uustat；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/uustat.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [
        "optional POSIX component: UUCP Utilities; not required on every conforming implementation",
        "some synopsis forms require POSIX option group UU"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/uustat.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "[ UU ] uustat [ -q|-k jobid |-r jobid ] uustat [ -s system ] [ -u user ]",
      "options": [
        "-q",
        "-k",
        "-r",
        "-s",
        "-u"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "uux",
      "en": "remote command execution",
      "zh": "uux：remote command execution（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-uux",
      "context": "posix-utility",
      "keywords": [
        "uux",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 uux 来完成“remote command execution”时",
          "goal": "按固定官方版本的定义调用 uux，并依据退出状态判断该操作是否完成",
          "value": "uux",
          "description": "uux 的官方用途是“remote command execution”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 uux；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/uux.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [
        "optional POSIX component: UUCP Utilities; not required on every conforming implementation",
        "some synopsis forms require POSIX option group UU"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/uux.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "[ UU ] uux [ -jnp ] command-string",
      "options": [
        "-j",
        "-n",
        "-p"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "val",
      "en": "validate SCCS files ( DEVELOPMENT )",
      "zh": "val：validate SCCS files ( DEVELOPMENT )（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-val",
      "context": "posix-utility",
      "keywords": [
        "val",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 val 来完成“validate SCCS files ( DEVELOPMENT )”时",
          "goal": "按固定官方版本的定义调用 val，并依据退出状态判断该操作是否完成",
          "value": "val",
          "description": "val 的官方用途是“validate SCCS files ( DEVELOPMENT )”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 val；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/val.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [
        "POSIX option group: DEVELOPMENT",
        "some synopsis forms require POSIX option group XSI"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/val.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "[ XSI ] val - val [ -s ] [ -m name ] [ -r SID ] [ -y type ] file ...",
      "options": [
        "-m",
        "-r",
        "-s",
        "-y"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "vdir",
      "en": "vdir list directory contents",
      "zh": "vdir：vdir list directory contents（来源：gnu-coreutils）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-vdir",
      "context": "external-command",
      "keywords": [
        "vdir",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils 提供的 vdir 来完成“vdir list directory contents”时",
          "goal": "按固定官方版本的定义调用 vdir，并依据退出状态判断该操作是否完成",
          "value": "vdir",
          "description": "vdir 的官方用途是“vdir list directory contents”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils 的定义执行 vdir；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "gnu-manuals"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz/man/vdir.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz · man/vdir.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "vdir [\\,OPTION\\/]... [\\,FILE\\/]...",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "vi",
      "en": "screen-oriented (visual) display editor",
      "zh": "vi：screen-oriented (visual) display editor（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-vi",
      "context": "posix-utility",
      "keywords": [
        "vi",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 vi 来完成“screen-oriented (visual) display editor”时",
          "goal": "按固定官方版本的定义调用 vi，并依据退出状态判断该操作是否完成",
          "value": "vi",
          "description": "vi 的官方用途是“screen-oriented (visual) display editor”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 vi；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/vi.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [
        "some synopsis forms require POSIX option group UP"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/vi.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "[ UP ] vi [ -rR ] [ -c command ] [ -t tagstring ] [ -w size ] [ file ... ]",
      "options": [
        "-c",
        "-r",
        "-R",
        "-t",
        "-w"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "wait",
      "en": "await process completion",
      "zh": "wait：await process completion（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-wait",
      "context": "posix-utility",
      "keywords": [
        "wait",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 wait 来完成“await process completion”时",
          "goal": "按固定官方版本的定义调用 wait，并依据退出状态判断该操作是否完成",
          "value": "wait",
          "description": "wait 的官方用途是“await process completion”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 wait；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/wait.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/wait.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "wait [ pid ... ]",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "wc",
      "en": "Count lines, words, and characters",
      "zh": "统计行数、单词数、字符数",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-wc",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/wc.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "keywords": [
        "统计行数、单词数、字符数",
        "Count lines, words, and characters",
        "wc",
        "统计行数",
        "Count lines",
        "Unix",
        "POSIX"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils / posix-utilities 提供的 wc 来完成“word, line, and byte or character count”时",
          "goal": "按固定官方版本的定义调用 wc，并依据退出状态判断该操作是否完成",
          "value": "wc",
          "description": "wc 的官方用途是“word, line, and byte or character count”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils / posix-utilities 的定义执行 wc；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/wc.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "context": "posix-utility",
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "usage": "wc [ -c|-m ] [ -lw ] [ file ... ]",
      "options": [
        "-c",
        "-l",
        "-m",
        "-w"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "wget",
      "en": "Non-interactive network downloader",
      "zh": "非交互式网络下载",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-wget",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://ftp.gnu.org/gnu/wget/wget-1.25.0.tar.gz · doc/wget.texi",
          "checkedAt": "2026-07-31"
        }
      ],
      "keywords": [
        "非交互式网络下载",
        "Non-interactive network downloader",
        "wget",
        "Unix",
        "POSIX"
      ],
      "examples": [
        {
          "scenario": "准备离线安装环境时，需要把公开发布包下载到当前目录",
          "goal": "下载指定的 HTTPS 发布文件",
          "value": "wget https://example.com/releases/tool.tar.gz",
          "description": "wget 获取 URL 指向的文件，并按远端文件名保存到当前目录。",
          "expected": "成功时当前目录出现下载文件；若同名文件已存在，实现会避免静默覆盖。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "gnu-manuals"
          ],
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://ftp.gnu.org/gnu/wget/wget-1.25.0.tar.gz · doc/wget.texi",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "context": "external-command",
      "platformCaveat": "macOS 默认通常不预装 wget，需要通过包管理器安装。",
      "components": [
        "gnu-wget"
      ],
      "constraints": [
        "reference behavior follows gnu-wget 1.25.0; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "usage": "wget [OPTION]... [URL]...",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "what",
      "en": "identify SCCS files ( DEVELOPMENT )",
      "zh": "what：identify SCCS files ( DEVELOPMENT )（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-what",
      "context": "posix-utility",
      "keywords": [
        "what",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 what 来完成“identify SCCS files ( DEVELOPMENT )”时",
          "goal": "按固定官方版本的定义调用 what，并依据退出状态判断该操作是否完成",
          "value": "what",
          "description": "what 的官方用途是“identify SCCS files ( DEVELOPMENT )”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 what；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/what.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [
        "POSIX option group: DEVELOPMENT",
        "some synopsis forms require POSIX option group XSI"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/what.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "[ XSI ] what [ -s ] file ...",
      "options": [
        "-s"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "which",
      "en": "Show the full path of a command",
      "zh": "显示命令的完整路径",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-which",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://ftp.gnu.org/gnu/which/which-2.25.tar.gz · which.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "keywords": [
        "查看",
        "显示",
        "状态",
        "显示命令的完整路径",
        "Show the full path of a command",
        "which",
        "Unix",
        "POSIX"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-which 提供的 which 来完成“which shows the full path of (shell) commands”时",
          "goal": "按固定官方版本的定义调用 which，并依据退出状态判断该操作是否完成",
          "value": "which",
          "description": "which 的官方用途是“which shows the full path of (shell) commands”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-which 的定义执行 which；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "gnu-manuals"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://ftp.gnu.org/gnu/which/which-2.25.tar.gz/which.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "context": "external-command",
      "components": [
        "gnu-which"
      ],
      "constraints": [
        "reference behavior follows gnu-which 2.25; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "usage": "which [options] [] programname [...]",
      "options": [
        "--all",
        "--read-alias",
        "-i",
        "--skip-alias",
        "-read-alias",
        "--read-functions",
        "-f",
        "--skip-functions"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "who",
      "en": "display who is on the system",
      "zh": "who：display who is on the system（来源：gnu-coreutils / posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-who",
      "context": "posix-utility",
      "keywords": [
        "who",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils / posix-utilities 提供的 who 来完成“display who is on the system”时",
          "goal": "按固定官方版本的定义调用 who，并依据退出状态判断该操作是否完成",
          "value": "who",
          "description": "who 的官方用途是“display who is on the system”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils / posix-utilities 的定义执行 who；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/who.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately",
        "some synopsis forms require POSIX option group XSI"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/who.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "[ XSI ] who [ -mTu ] [ -abdHlprt ] [ file ] [ XSI ] who [ -mu ] -s [ -bHlprt ] [ file ] who -q [ file ] who am i who am I",
      "options": [
        "-a",
        "-b",
        "-d",
        "-l",
        "-p",
        "-r",
        "-t",
        "-T"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "whoami",
      "en": "whoami print effective user name",
      "zh": "whoami：whoami print effective user name（来源：gnu-coreutils）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-whoami",
      "context": "external-command",
      "keywords": [
        "whoami",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils 提供的 whoami 来完成“whoami print effective user name”时",
          "goal": "按固定官方版本的定义调用 whoami，并依据退出状态判断该操作是否完成",
          "value": "whoami",
          "description": "whoami 的官方用途是“whoami print effective user name”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils 的定义执行 whoami；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "gnu-manuals"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz/man/whoami.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz · man/whoami.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "whoami [\\,OPTION\\/]...",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "write",
      "en": "write to another user",
      "zh": "write：write to another user（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-write",
      "context": "posix-utility",
      "keywords": [
        "write",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 write 来完成“write to another user”时",
          "goal": "按固定官方版本的定义调用 write，并依据退出状态判断该操作是否完成",
          "value": "write",
          "description": "write 的官方用途是“write to another user”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 write；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/write.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/write.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "write user_name [ terminal ]",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "xargs",
      "en": "construct argument lists and invoke utility",
      "zh": "xargs：construct argument lists and invoke utility（来源：gnu-findutils / posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-xargs",
      "context": "posix-utility",
      "keywords": [
        "xargs",
        "命令",
        "终端",
        "gnu-findutils"
      ],
      "examples": [
        {
          "scenario": "持续集成导出了一列变更文件，需要逐个规范化为一行一个参数供后续步骤检查",
          "goal": "从标准输入组装参数并逐项调用 printf",
          "value": "xargs -n 1 printf '%s\\n' < changed-files.txt",
          "description": "-n 1 限制每次调用只附加一个输入参数，printf 是由 xargs 调用的嵌套命令。",
          "expected": "终端逐行输出 changed-files.txt 中由 xargs 解析出的每个参数。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/xargs.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-findutils",
        "posix-utilities"
      ],
      "constraints": [
        "reference behavior follows gnu-findutils 4.11.0; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately",
        "some synopsis forms require POSIX option group XSI"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/xargs.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "[ XSI ] xargs [ -prtx ] [ -E eofstr |-0 ] [ -I replstr |-L number |-n number ] [ -s size ] [ utility [ argument ... ]]",
      "options": [
        "-E",
        "-0",
        "-I",
        "-x",
        "-L",
        "-n",
        "-s",
        "-p"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "xgettext",
      "en": "extract gettext call strings from C-language source files (DEVELOPMENT)",
      "zh": "xgettext：extract gettext call strings from C-language source files (DEVELOPMENT)（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-xgettext",
      "context": "posix-utility",
      "keywords": [
        "xgettext",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 xgettext 来完成“extract gettext call strings from C-language source files (DEVELOPMENT)”时",
          "goal": "按固定官方版本的定义调用 xgettext，并依据退出状态判断该操作是否完成",
          "value": "xgettext",
          "description": "xgettext 的官方用途是“extract gettext call strings from C-language source files (DEVELOPMENT)”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 xgettext；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/xgettext.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [
        "some synopsis forms require POSIX option group CD"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/xgettext.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "[ CD ] xgettext [ -j ] [ -n ] [ -d default-domain ] [ -K keyword-spec ] ... [ -p pathname ] file ... xgettext -a [ -n ] [ -d default-domain ] [ -p pathname ] [ -x exclude-file ] file ...",
      "options": [
        "-a",
        "-d",
        "-j",
        "-K",
        "-t",
        "-n",
        "-p",
        "-x"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "yacc",
      "en": "yet another compiler compiler ( DEVELOPMENT )",
      "zh": "yacc：yet another compiler compiler ( DEVELOPMENT )（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-yacc",
      "context": "posix-utility",
      "keywords": [
        "yacc",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 yacc 来完成“yet another compiler compiler ( DEVELOPMENT )”时",
          "goal": "按固定官方版本的定义调用 yacc，并依据退出状态判断该操作是否完成",
          "value": "yacc",
          "description": "yacc 的官方用途是“yet another compiler compiler ( DEVELOPMENT )”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 yacc；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/yacc.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [
        "POSIX option group: DEVELOPMENT",
        "some synopsis forms require POSIX option group CD"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/yacc.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "[ CD ] yacc [ -dltv ] [ -b file_prefix ] [ -p sym_prefix ] grammar",
      "options": [
        "-b",
        "-d",
        "-v",
        "-l",
        "-p",
        "-t"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "yes",
      "en": "yes output a string repeatedly until killed",
      "zh": "yes：yes output a string repeatedly until killed（来源：gnu-coreutils）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-yes",
      "context": "external-command",
      "keywords": [
        "yes",
        "命令",
        "终端",
        "gnu-coreutils"
      ],
      "examples": [
        {
          "scenario": "需要使用 gnu-coreutils 提供的 yes 来完成“yes output a string repeatedly until killed”时",
          "goal": "按固定官方版本的定义调用 yes，并依据退出状态判断该操作是否完成",
          "value": "yes",
          "description": "yes 的官方用途是“yes output a string repeatedly until killed”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 gnu-coreutils 的定义执行 yes；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "gnu-manuals"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "gnu-manuals",
              "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz/man/yes.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "gnu-coreutils"
      ],
      "constraints": [
        "reference behavior follows gnu-coreutils 9.11; macOS may ship a BSD/POSIX implementation or require the GNU package to be installed separately"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "gnu-manuals",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://ftp.gnu.org/gnu/coreutils/coreutils-9.11.tar.xz · man/yes.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "yes [\\,STRING\\/]... .br yes \\,OPTION\\/",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "zcat",
      "en": "compress and decompress data",
      "zh": "zcat：compress and decompress data（来源：posix-utilities）。",
      "platforms": [
        "mac",
        "linux"
      ],
      "id": "unix-zcat",
      "context": "posix-utility",
      "keywords": [
        "zcat",
        "命令",
        "终端",
        "posix-utilities"
      ],
      "examples": [
        {
          "scenario": "需要使用 posix-utilities 提供的 zcat 来完成“compress and decompress data”时",
          "goal": "按固定官方版本的定义调用 zcat，并依据退出状态判断该操作是否完成",
          "value": "zcat",
          "description": "zcat 的官方用途是“compress and decompress data”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 posix-utilities 的定义执行 zcat；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "posix-shell-utilities"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "posix-shell-utilities",
              "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/zcat.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "mac",
            "linux"
          ]
        }
      ],
      "components": [
        "posix-utilities"
      ],
      "constraints": [
        "some synopsis forms require POSIX option group XSI"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "posix-shell-utilities",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/zcat.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "[ XSI ] compress [ -fv ] [ -b value ] [ -g | -m algo ] [ file ... ] compress -c [ -fv ] [ -b value ] [ -g | -m algo ] [ file ] compress -d [ -cfv ] [ file ... ] uncompress [ -cfv ] [ file ... ] zcat [ file ... ]",
      "options": [
        "-b",
        "-c",
        "-d",
        "-f",
        "-g",
        "-m",
        "-v"
      ],
      "entryType": "cli-command"
    }
  ]
};
