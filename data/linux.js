// Generated from validated structured data. Manual edits must follow data/SCHEMA.md.
window.CHEATSHEET_DATA = window.CHEATSHEET_DATA || {};
window.CHEATSHEET_DATA["linux"] = {
  "meta": {
    "id": "linux",
    "name": "Linux 系统工具",
    "color": "#FCC624",
    "source": "固定官方发布标签与入口索引的确定性全集，核验于 2026-07-31",
    "builtIn": false,
    "sourceUrl": "https://gitlab.com/procps-ng/procps",
    "sourceTier": "official",
    "updatedAt": "2026-07-31",
    "contentCheckedAt": "2026-07-31",
    "sourceCheckedAt": "2026-07-31",
    "updatePolicy": "manual-only",
    "verificationStatus": "manual",
    "coverage": "登记官方组件的全部公开命令入口；组件版本、排除理由与平台限制见 shared/official-inventories/linux.json",
    "platforms": [
      "linux"
    ],
    "order": 76,
    "sources": [
      {
        "id": "procps-ng-repository",
        "title": "procps-ng official repository",
        "url": "https://gitlab.com/procps-ng/procps",
        "kind": "official-repository",
        "maintainer": "procps-ng maintainers",
        "evidenceTier": "first-party",
        "lastVerifiedAt": "2026-07-16",
        "resolvedUrl": "https://gitlab.com/procps-ng/procps",
        "pageTitle": "procps-ng official repository",
        "checkedAt": "2026-07-16",
        "purposes": [
          "command-existence",
          "option-semantics",
          "examples"
        ]
      },
      {
        "id": "systemd-man",
        "title": "systemd manual pages",
        "url": "https://www.freedesktop.org/software/systemd/man/latest/",
        "kind": "official-doc",
        "maintainer": "systemd project",
        "evidenceTier": "first-party",
        "lastVerifiedAt": "2026-07-16",
        "resolvedUrl": "https://www.freedesktop.org/software/systemd/man/latest/",
        "pageTitle": "systemd manual pages",
        "checkedAt": "2026-07-16",
        "purposes": [
          "command-existence",
          "option-semantics",
          "examples"
        ]
      },
      {
        "id": "util-linux-repository",
        "title": "util-linux official repository",
        "url": "https://github.com/util-linux/util-linux",
        "kind": "official-repository",
        "maintainer": "util-linux maintainers",
        "evidenceTier": "first-party",
        "lastVerifiedAt": "2026-07-16",
        "resolvedUrl": "https://github.com/util-linux/util-linux",
        "pageTitle": "util-linux official repository",
        "checkedAt": "2026-07-16",
        "purposes": [
          "command-existence",
          "option-semantics",
          "examples"
        ]
      },
      {
        "id": "iproute2-repository",
        "title": "iproute2 official repository",
        "url": "https://git.kernel.org/pub/scm/network/iproute2/iproute2.git",
        "kind": "official-repository",
        "maintainer": "iproute2 maintainers",
        "evidenceTier": "first-party",
        "lastVerifiedAt": "2026-07-16",
        "resolvedUrl": "https://git.kernel.org/pub/scm/network/iproute2/iproute2.git",
        "pageTitle": "iproute2 official repository",
        "checkedAt": "2026-07-16",
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
      "total": 262,
      "covered": 262,
      "checkedAt": "2026-07-31",
      "sourceIds": [
        "procps-ng-repository",
        "systemd-man",
        "util-linux-repository",
        "iproute2-repository"
      ],
      "inventoryHash": "sha256:492668b3d06a5d2829615cb4945ba209aee02bbb0e05ef09794b8611580f7b94",
      "componentCounts": {
        "procps-ng": 20,
        "systemd": 81,
        "util-linux": 143,
        "iproute2": 19
      },
      "sourceManifestHash": "sha256:c839353e67d8f70a10d781fccc5b8d26efb137bd59866de321b65fc755fbdf3c"
    }
  },
  "items": [
    {
      "cat": "slash",
      "cmd": "addpart",
      "en": "tell the kernel about the existence of a partition",
      "zh": "addpart：tell the kernel about the existence of a partition（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-addpart",
      "context": "linux-system",
      "keywords": [
        "addpart",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 addpart 来完成“tell the kernel about the existence of a partition”时",
          "goal": "按固定官方版本的定义调用 addpart，并依据退出状态判断该操作是否完成",
          "value": "addpart",
          "description": "addpart 的官方用途是“tell the kernel about the existence of a partition”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 addpart；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/disk-utils/addpart.8.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · disk-utils/addpart.8.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "addpart device partition start length",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "addpart.static",
      "en": "statically linked tell the kernel about the existence of a partition",
      "zh": "addpart.static：statically linked tell the kernel about the existence of a partition（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-addpart-static",
      "context": "linux-system",
      "keywords": [
        "addpart.static",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 addpart.static 来完成“statically linked tell the kernel about the existence of a partition”时",
          "goal": "按固定官方版本的定义调用 addpart.static，并依据退出状态判断该操作是否完成",
          "value": "addpart.static",
          "description": "addpart.static 的官方用途是“statically linked tell the kernel about the existence of a partition”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 addpart.static；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/meson.build#optional-static-target-addpart.static",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration；requires a util-linux 2.42.2 build with the corresponding static_programs target enabled。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration",
        "requires a util-linux 2.42.2 build with the corresponding static_programs target enabled"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · meson.build executable('addpart.static')",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "addpart.static device partition start length",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "agetty",
      "en": "alternative Linux getty",
      "zh": "agetty：alternative Linux getty（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-agetty",
      "context": "linux-system",
      "keywords": [
        "agetty",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 agetty 来完成“alternative Linux getty”时",
          "goal": "按固定官方版本的定义调用 agetty，并依据退出状态判断该操作是否完成",
          "value": "agetty",
          "description": "agetty 的官方用途是“alternative Linux getty”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 agetty；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/term-utils/agetty.8.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · term-utils/agetty.8.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "agetty [options] port [baudrate...] [term]",
      "options": [
        "-8",
        "--8bits",
        "-a",
        "--autologin",
        "-f",
        "--login-options",
        "-c",
        "--noreset"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "arpd",
      "en": "arpd userspace arp daemon.",
      "zh": "arpd：arpd userspace arp daemon.（来源：iproute2）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-arpd",
      "context": "linux-system",
      "keywords": [
        "arpd",
        "命令",
        "终端",
        "iproute2"
      ],
      "examples": [
        {
          "scenario": "需要使用 iproute2 提供的 arpd 来完成“arpd userspace arp daemon”时",
          "goal": "按固定官方版本的定义调用 arpd，并依据退出状态判断该操作是否完成",
          "value": "arpd",
          "description": "arpd 的官方用途是“arpd userspace arp daemon”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 iproute2 的定义执行 arpd；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "iproute2-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "iproute2-repository",
              "locator": "https://git.kernel.org/pub/scm/network/iproute2/iproute2.git/tag/?h=v7.1.0/tree/man/man8/arpd.8",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with iproute2 7.1.0 installed; optional targets depend on build features。"
        }
      ],
      "components": [
        "iproute2"
      ],
      "constraints": [
        "requires Linux with iproute2 7.1.0 installed; optional targets depend on build features"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "iproute2-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://git.kernel.org/pub/scm/network/iproute2/iproute2.git/tag/?h=v7.1.0 · man/man8/arpd.8",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "Usage: arpd [ -lkh? ] [ -a N ] [ -b dbase ] [ -B number ] [ -f file ] [-p interval ] [ -n time ] [ -R rate ] [ ]",
      "options": [
        "-h",
        "-l",
        "-f",
        "-b",
        "-a",
        "-k",
        "-n",
        "-p"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "bits",
      "en": "convert bit masks or lists from/to various formats",
      "zh": "bits：convert bit masks or lists from/to various formats（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-bits",
      "context": "linux-system",
      "keywords": [
        "bits",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 bits 来完成“convert bit masks or lists from/to various formats”时",
          "goal": "按固定官方版本的定义调用 bits，并依据退出状态判断该操作是否完成",
          "value": "bits",
          "description": "bits 的官方用途是“convert bit masks or lists from/to various formats”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 bits；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/text-utils/bits.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · text-utils/bits.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "bits [-h] [-V] [-w number] [mode] [mask|list]...",
      "options": [
        "-w",
        "--width"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "blkdiscard",
      "en": "discard sectors on a device",
      "zh": "blkdiscard：discard sectors on a device（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-blkdiscard",
      "context": "linux-system",
      "keywords": [
        "blkdiscard",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 blkdiscard 来完成“discard sectors on a device”时",
          "goal": "按固定官方版本的定义调用 blkdiscard，并依据退出状态判断该操作是否完成",
          "value": "blkdiscard",
          "description": "blkdiscard 的官方用途是“discard sectors on a device”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 blkdiscard；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": false,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/sys-utils/blkdiscard.8.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "warning": "blkdiscard 可能修改系统、磁盘、账号、服务或进程状态；仅在已确认对象和回滚方案后执行。",
          "riskLevels": [
            "deleteOrOverwrite"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration；执行前先用只读命令检查目标、确认影响范围并备份可恢复数据；优先在隔离环境验证。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · sys-utils/blkdiscard.8.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "blkdiscard [options] [-o offset] [-l length] device",
      "options": [
        "-f",
        "--force",
        "-o",
        "--offset",
        "-l",
        "--length",
        "-p",
        "--step"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "blkid",
      "en": "Locate block device attributes",
      "zh": "读取块设备标识",
      "context": "linux-system",
      "platforms": [
        "linux"
      ],
      "id": "linux-blkid",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · misc-utils/blkid.8.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "keywords": [
        "blkid",
        "读取块设备标识",
        "Locate block device attributes",
        "Linux",
        "系统工具"
      ],
      "examples": [
        {
          "value": "blkid",
          "description": "读取可见块设备的 UUID 和类型，用于需要用 UUID 编写稳定挂载配置",
          "scenario": "需要用 UUID 编写稳定挂载配置时",
          "goal": "读取可见块设备的 UUID 和类型",
          "expected": "输出设备路径及探测到的标签、UUID、文件系统类型",
          "caveat": "完整探测通常需要管理员权限，普通用户可能只看到缓存结果",
          "copyable": true,
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "util-linux-repository"
          ],
          "platforms": [
            "linux"
          ],
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/blob/master/misc-utils/blkid.8.adoc",
              "claims": [
                "value",
                "behavior",
                "expected",
                "platform",
                "caveat"
              ]
            }
          ]
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "usage": "blkid --label label | --uuid uuid blkid [--no-encoding --garbage-collect --list-one --cache-file file] [--output format] [--match-tag tag] [--match-token NAME=value] [device...] blkid --probe [--offset offset] [--output format] [--size size] [--match-tag tag] [--match-types list]",
      "options": [
        "-c",
        "--cache-file",
        "-d",
        "--no-encoding",
        "--output",
        "-D",
        "--no-part-details",
        "-g"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "blkid.static",
      "en": "statically linked locate/print block device attributes",
      "zh": "blkid.static：statically linked locate/print block device attributes（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-blkid-static",
      "context": "linux-system",
      "keywords": [
        "blkid.static",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 blkid.static 来完成“statically linked locate/print block device attributes”时",
          "goal": "按固定官方版本的定义调用 blkid.static，并依据退出状态判断该操作是否完成",
          "value": "blkid.static",
          "description": "blkid.static 的官方用途是“statically linked locate/print block device attributes”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 blkid.static；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/meson.build#optional-static-target-blkid.static",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration；requires a util-linux 2.42.2 build with the corresponding static_programs target enabled。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration",
        "requires a util-linux 2.42.2 build with the corresponding static_programs target enabled"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · meson.build executable('blkid.static')",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "blkid.static --label label | --uuid uuid blkid [--no-encoding --garbage-collect --list-one --cache-file file] [--output format] [--match-tag tag] [--match-token NAME=value] [device...] blkid --probe [--offset offset] [--output format] [--size size] [--match-tag tag] [--match-types list]",
      "options": [
        "-c",
        "--cache-file",
        "-d",
        "--no-encoding",
        "--output",
        "-D",
        "--no-part-details",
        "-g"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "blkpr",
      "en": "run a persistent-reservations command on a device",
      "zh": "blkpr：run a persistent-reservations command on a device（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-blkpr",
      "context": "linux-system",
      "keywords": [
        "blkpr",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 blkpr 来完成“run a persistent-reservations command on a device”时",
          "goal": "按固定官方版本的定义调用 blkpr，并依据退出状态判断该操作是否完成",
          "value": "blkpr",
          "description": "blkpr 的官方用途是“run a persistent-reservations command on a device”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 blkpr；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/sys-utils/blkpr.8.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · sys-utils/blkpr.8.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "blkpr [options] device",
      "options": [
        "-c",
        "--command",
        "-k",
        "--key",
        "-K",
        "--oldkey",
        "-f",
        "--flag"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "blkzone",
      "en": "run zone command on a device",
      "zh": "blkzone：run zone command on a device（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-blkzone",
      "context": "linux-system",
      "keywords": [
        "blkzone",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 blkzone 来完成“run zone command on a device”时",
          "goal": "按固定官方版本的定义调用 blkzone，并依据退出状态判断该操作是否完成",
          "value": "blkzone",
          "description": "blkzone 的官方用途是“run zone command on a device”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 blkzone；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": false,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/sys-utils/blkzone.8.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "warning": "blkzone 可能修改系统、磁盘、账号、服务或进程状态；仅在已确认对象和回滚方案后执行。",
          "riskLevels": [
            "deleteOrOverwrite"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration；执行前先用只读命令检查目标、确认影响范围并备份可恢复数据；优先在隔离环境验证。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · sys-utils/blkzone.8.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "blkzone command [options] device",
      "options": [
        "-o",
        "--offset",
        "-l",
        "--length",
        "--count",
        "-c",
        "-f",
        "--force"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "blockdev",
      "en": "call block device ioctls from the command line",
      "zh": "blockdev：call block device ioctls from the command line（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-blockdev",
      "context": "linux-system",
      "keywords": [
        "blockdev",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 blockdev 来完成“call block device ioctls from the command line”时",
          "goal": "按固定官方版本的定义调用 blockdev，并依据退出状态判断该操作是否完成",
          "value": "blockdev",
          "description": "blockdev 的官方用途是“call block device ioctls from the command line”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 blockdev；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/disk-utils/blockdev.8.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · disk-utils/blockdev.8.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "blockdev [-q] [-v] command [command...] device [device...] blockdev --report [device...] blockdev -h|-V",
      "options": [
        "-q",
        "-v",
        "--report"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "bootctl",
      "en": "Control EFI firmware boot settings and manage boot loader",
      "zh": "bootctl：Control EFI firmware boot settings and manage boot loader（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-bootctl",
      "context": "linux-system",
      "keywords": [
        "bootctl",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 bootctl 来完成“Control EFI firmware boot settings and manage boot loader”时",
          "goal": "按固定官方版本的定义调用 bootctl，并依据退出状态判断该操作是否完成",
          "value": "bootctl",
          "description": "bootctl 的官方用途是“Control EFI firmware boot settings and manage boot loader”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 bootctl；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/bootctl.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：build option: HAVE_BLKID；requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "build option: HAVE_BLKID",
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/bootctl.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "bootctl",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "bridge",
      "en": "bridge show / manipulate bridge addresses and devices",
      "zh": "bridge：bridge show / manipulate bridge addresses and devices（来源：iproute2）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-bridge",
      "context": "linux-system",
      "keywords": [
        "bridge",
        "命令",
        "终端",
        "iproute2"
      ],
      "examples": [
        {
          "scenario": "需要使用 iproute2 提供的 bridge 来完成“bridge show / manipulate bridge addresses and devices”时",
          "goal": "按固定官方版本的定义调用 bridge，并依据退出状态判断该操作是否完成",
          "value": "bridge",
          "description": "bridge 的官方用途是“bridge show / manipulate bridge addresses and devices”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 iproute2 的定义执行 bridge；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "iproute2-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "iproute2-repository",
              "locator": "https://git.kernel.org/pub/scm/network/iproute2/iproute2.git/tag/?h=v7.1.0/tree/man/man8/bridge.8",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with iproute2 7.1.0 installed; optional targets depend on build features。"
        }
      ],
      "components": [
        "iproute2"
      ],
      "constraints": [
        "requires Linux with iproute2 7.1.0 installed; optional targets depend on build features"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "iproute2-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://git.kernel.org/pub/scm/network/iproute2/iproute2.git/tag/?h=v7.1.0 · man/man8/bridge.8",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": ".ad l .in +8 .ti -8 bridge \"[ \" OPTIONS \" ] \" OBJECT \" { \" COMMAND \" | \" help \" }\" .sp .ti -8 OBJECT \" := { \" link \" | \" fdb \" | \" mdb \" | \" vlan \" | \" vni \" | \" monitor \" }\" .sp .ti -8 OPTIONS \" := { \" V[ersion] | s[tatistics] | n[etns] name | b[atch] filename | com[pressvlans] ",
      "options": [
        "-V",
        "-Version",
        "-s",
        "-stats",
        "-statistics",
        "-d",
        "-details",
        "-n"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "busctl",
      "en": "Introspect the bus",
      "zh": "busctl：Introspect the bus（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-busctl",
      "context": "linux-system",
      "keywords": [
        "busctl",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 busctl 来完成“Introspect the bus”时",
          "goal": "按固定官方版本的定义调用 busctl，并依据退出状态判断该操作是否完成",
          "value": "busctl",
          "description": "busctl 的官方用途是“Introspect the bus”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 busctl；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/busctl.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/busctl.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "busctl",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "cal",
      "en": "display a calendar",
      "zh": "cal：display a calendar（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-cal",
      "context": "linux-system",
      "keywords": [
        "cal",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 cal 来完成“display a calendar”时",
          "goal": "按固定官方版本的定义调用 cal，并依据退出状态判断该操作是否完成",
          "value": "cal",
          "description": "cal 的官方用途是“display a calendar”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 cal；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/misc-utils/cal.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · misc-utils/cal.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "cal [options] [[[day] month] year] cal [options] [timestamp|monthname]",
      "options": [
        "-1",
        "--one",
        "-3",
        "--three",
        "-n",
        "--months",
        "-S",
        "--span"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "cfdisk",
      "en": "display or manipulate a disk partition table",
      "zh": "cfdisk：display or manipulate a disk partition table（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-cfdisk",
      "context": "linux-system",
      "keywords": [
        "cfdisk",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 cfdisk 来完成“display or manipulate a disk partition table”时",
          "goal": "按固定官方版本的定义调用 cfdisk，并依据退出状态判断该操作是否完成",
          "value": "cfdisk",
          "description": "cfdisk 的官方用途是“display or manipulate a disk partition table”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 cfdisk；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": false,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/disk-utils/cfdisk.8.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "warning": "cfdisk 可能修改系统、磁盘、账号、服务或进程状态；仅在已确认对象和回滚方案后执行。",
          "riskLevels": [
            "deleteOrOverwrite"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration；执行前先用只读命令检查目标、确认影响范围并备份可恢复数据；优先在隔离环境验证。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · disk-utils/cfdisk.8.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "cfdisk [options] [device]",
      "options": [
        "-L",
        "--color",
        "--help",
        "--lock",
        "-r",
        "--read-only",
        "-b",
        "--sector-size"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "chcpu",
      "en": "configure CPUs",
      "zh": "chcpu：configure CPUs（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-chcpu",
      "context": "linux-system",
      "keywords": [
        "chcpu",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 chcpu 来完成“configure CPUs”时",
          "goal": "按固定官方版本的定义调用 chcpu，并依据退出状态判断该操作是否完成",
          "value": "chcpu",
          "description": "chcpu 的官方用途是“configure CPUs”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 chcpu；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": false,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/sys-utils/chcpu.8.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "warning": "chcpu 可能修改系统、磁盘、账号、服务或进程状态；仅在已确认对象和回滚方案后执行。",
          "riskLevels": [
            "deleteOrOverwrite"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration；执行前先用只读命令检查目标、确认影响范围并备份可恢复数据；优先在隔离环境验证。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · sys-utils/chcpu.8.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "chcpu -c|-d|-e|-g cpu-list chcpu -p mode chcpu -r|-h|-V",
      "options": [
        "-c",
        "--configure",
        "-d",
        "--disable",
        "-e",
        "--enable",
        "-g",
        "--deconfigure"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "chfn",
      "en": "change your finger information",
      "zh": "chfn：change your finger information（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-chfn",
      "context": "linux-system",
      "keywords": [
        "chfn",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 chfn 来完成“change your finger information”时",
          "goal": "按固定官方版本的定义调用 chfn，并依据退出状态判断该操作是否完成",
          "value": "chfn",
          "description": "chfn 的官方用途是“change your finger information”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 chfn；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/login-utils/chfn.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · login-utils/chfn.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "chfn [-f full-name] [-o office] [-p office-phone] [-h home-phone] [-u] [-V] [username|UID]",
      "options": [
        "-f",
        "--full-name",
        "-o",
        "--office",
        "-p",
        "--office-phone",
        "-h",
        "--home-phone"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "chmem",
      "en": "configure memory",
      "zh": "chmem：configure memory（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-chmem",
      "context": "linux-system",
      "keywords": [
        "chmem",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 chmem 来完成“configure memory”时",
          "goal": "按固定官方版本的定义调用 chmem，并依据退出状态判断该操作是否完成",
          "value": "chmem",
          "description": "chmem 的官方用途是“configure memory”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 chmem；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": false,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/sys-utils/chmem.8.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "warning": "chmem 可能修改系统、磁盘、账号、服务或进程状态；仅在已确认对象和回滚方案后执行。",
          "riskLevels": [
            "deleteOrOverwrite"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration；执行前先用只读命令检查目标、确认影响范围并备份可恢复数据；优先在隔离环境验证。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · sys-utils/chmem.8.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "chmem [-h] [-V] [-v] [-c|-e|-d|-g] [SIZE|RANGE|-b BLOCKRANGE] [-z ZONE] [-m MEMMAP-ON-MEMORY]",
      "options": [
        "-b",
        "--blocks",
        "--enable",
        "--disable",
        "-c",
        "--configure",
        "-d",
        "-e"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "choom",
      "en": "display or adjust OOM-killer score",
      "zh": "choom：display or adjust OOM-killer score（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-choom",
      "context": "linux-system",
      "keywords": [
        "choom",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 choom 来完成“display or adjust OOM-killer score”时",
          "goal": "按固定官方版本的定义调用 choom，并依据退出状态判断该操作是否完成",
          "value": "choom",
          "description": "choom 的官方用途是“display or adjust OOM-killer score”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 choom；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/sys-utils/choom.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · sys-utils/choom.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "choom -p PID choom -p PID -n number choom -n number [--] command [argument ...]",
      "options": [
        "-p",
        "--pid",
        "-n",
        "--adjust"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "chrt",
      "en": "manipulate the real-time attributes of a process",
      "zh": "chrt：manipulate the real-time attributes of a process（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-chrt",
      "context": "linux-system",
      "keywords": [
        "chrt",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 chrt 来完成“manipulate the real-time attributes of a process”时",
          "goal": "按固定官方版本的定义调用 chrt，并依据退出状态判断该操作是否完成",
          "value": "chrt",
          "description": "chrt 的官方用途是“manipulate the real-time attributes of a process”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 chrt；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/schedutils/chrt.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · schedutils/chrt.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "chrt [options] [priority] command [argument...] chrt --pid [options] [priority] PID",
      "options": [
        "-a",
        "--all-tasks",
        "-m",
        "--max",
        "-p",
        "--pid",
        "-v",
        "--verbose"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "chsh",
      "en": "change your login shell",
      "zh": "chsh：change your login shell（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-chsh",
      "context": "linux-system",
      "keywords": [
        "chsh",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 chsh 来完成“change your login shell”时",
          "goal": "按固定官方版本的定义调用 chsh，并依据退出状态判断该操作是否完成",
          "value": "chsh",
          "description": "chsh 的官方用途是“change your login shell”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 chsh；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/login-utils/chsh.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · login-utils/chsh.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "chsh [-s shell] [-l] [-h] [-V] [username|UID]",
      "options": [
        "-s",
        "--shell",
        "-l",
        "--list-shells",
        "-h",
        "--help",
        "-u",
        "-V"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "col",
      "en": "filter reverse line feeds from input",
      "zh": "col：filter reverse line feeds from input（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-col",
      "context": "linux-system",
      "keywords": [
        "col",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 col 来完成“filter reverse line feeds from input”时",
          "goal": "按固定官方版本的定义调用 col，并依据退出状态判断该操作是否完成",
          "value": "col",
          "description": "col 的官方用途是“filter reverse line feeds from input”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 col；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/text-utils/col.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · text-utils/col.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "col options",
      "options": [
        "-b",
        "--no-backspaces",
        "-f",
        "--fine",
        "-h",
        "--tabs",
        "-l",
        "--lines"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "colcrt",
      "en": "filter nroff output for CRT previewing",
      "zh": "colcrt：filter nroff output for CRT previewing（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-colcrt",
      "context": "linux-system",
      "keywords": [
        "colcrt",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 colcrt 来完成“filter nroff output for CRT previewing”时",
          "goal": "按固定官方版本的定义调用 colcrt，并依据退出状态判断该操作是否完成",
          "value": "colcrt",
          "description": "colcrt 的官方用途是“filter nroff output for CRT previewing”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 colcrt；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/text-utils/colcrt.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · text-utils/colcrt.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "colcrt [options] [file ...]",
      "options": [
        "--no-underlining",
        "-2",
        "--half-lines"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "colrm",
      "en": "remove columns from a file",
      "zh": "colrm：remove columns from a file（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-colrm",
      "context": "linux-system",
      "keywords": [
        "colrm",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 colrm 来完成“remove columns from a file”时",
          "goal": "按固定官方版本的定义调用 colrm，并依据退出状态判断该操作是否完成",
          "value": "colrm",
          "description": "colrm 的官方用途是“remove columns from a file”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 colrm；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/text-utils/colrm.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · text-utils/colrm.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "colrm [first [last]]",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "column",
      "en": "columnate lists",
      "zh": "column：columnate lists（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-column",
      "context": "linux-system",
      "keywords": [
        "column",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 column 来完成“columnate lists”时",
          "goal": "按固定官方版本的定义调用 column，并依据退出状态判断该操作是否完成",
          "value": "column",
          "description": "column 的官方用途是“columnate lists”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 column；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/text-utils/column.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · text-utils/column.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "column [options] [file ...]",
      "options": [
        "--table-",
        "--table-columns",
        "--table-column",
        "-R0",
        "-1",
        "-R",
        "-J",
        "--json"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "copyfilerange",
      "en": "copy range(s) from source to destination file",
      "zh": "copyfilerange：copy range(s) from source to destination file（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-copyfilerange",
      "context": "linux-system",
      "keywords": [
        "copyfilerange",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 copyfilerange 来完成“copy range(s) from source to destination file”时",
          "goal": "按固定官方版本的定义调用 copyfilerange，并依据退出状态判断该操作是否完成",
          "value": "copyfilerange",
          "description": "copyfilerange 的官方用途是“copy range(s) from source to destination file”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 copyfilerange；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/misc-utils/copyfilerange.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · misc-utils/copyfilerange.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "copyfilerange [options] source destination range...",
      "options": [
        "-r",
        "--ranges",
        "-v",
        "--verbose"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "coredumpctl",
      "en": "Retrieve and process saved core dumps and metadata",
      "zh": "coredumpctl：Retrieve and process saved core dumps and metadata（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-coredumpctl",
      "context": "linux-system",
      "keywords": [
        "coredumpctl",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "服务无日志退出，需要确认 systemd-coredump 是否保存了对应的崩溃记录",
          "goal": "列出已保存的核心转储及元数据",
          "value": "coredumpctl list",
          "description": "list 子命令展示已登记核心转储的时间、进程、信号和保存状态。",
          "expected": "终端输出当前权限可见的核心转储列表；没有记录时列表为空。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/coredumpctl.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ]
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/coredumpctl.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "coredumpctl",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "coresched",
      "en": "manage core scheduling cookies for tasks",
      "zh": "coresched：manage core scheduling cookies for tasks（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-coresched",
      "context": "linux-system",
      "keywords": [
        "coresched",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 coresched 来完成“manage core scheduling cookies for tasks”时",
          "goal": "按固定官方版本的定义调用 coresched，并依据退出状态判断该操作是否完成",
          "value": "coresched",
          "description": "coresched 的官方用途是“manage core scheduling cookies for tasks”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 coresched；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/schedutils/coresched.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · schedutils/coresched.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "{command} [get] [-s pid] {command} new [-t type] -d pid {command} new [-t type] - command [argument...] {command} copy [-s pid] [-t type] -d pid {command} copy [-s pid] [-t type] - command [argument...]",
      "options": [
        "-s",
        "--source",
        "-d",
        "--dest",
        "-t",
        "--dest-type",
        "-v",
        "--verbose"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "ctrlaltdel",
      "en": "set the function of the Ctrl-Alt-Del combination",
      "zh": "ctrlaltdel：set the function of the Ctrl-Alt-Del combination（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-ctrlaltdel",
      "context": "linux-system",
      "keywords": [
        "ctrlaltdel",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 ctrlaltdel 来完成“set the function of the Ctrl-Alt-Del combination”时",
          "goal": "按固定官方版本的定义调用 ctrlaltdel，并依据退出状态判断该操作是否完成",
          "value": "ctrlaltdel",
          "description": "ctrlaltdel 的官方用途是“set the function of the Ctrl-Alt-Del combination”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 ctrlaltdel；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/sys-utils/ctrlaltdel.8.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · sys-utils/ctrlaltdel.8.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "ctrlaltdel hard|soft",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "dcb",
      "en": "dcb show / manipulate DCB (Data Center Bridging) settings",
      "zh": "dcb：dcb show / manipulate DCB (Data Center Bridging) settings（来源：iproute2）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-dcb",
      "context": "linux-system",
      "keywords": [
        "dcb",
        "命令",
        "终端",
        "iproute2"
      ],
      "examples": [
        {
          "scenario": "需要使用 iproute2 提供的 dcb 来完成“dcb show / manipulate DCB (Data Center Bridging) settings”时",
          "goal": "按固定官方版本的定义调用 dcb，并依据退出状态判断该操作是否完成",
          "value": "dcb",
          "description": "dcb 的官方用途是“dcb show / manipulate DCB (Data Center Bridging) settings”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 iproute2 的定义执行 dcb；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "iproute2-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "iproute2-repository",
              "locator": "https://git.kernel.org/pub/scm/network/iproute2/iproute2.git/tag/?h=v7.1.0/tree/man/man8/dcb.8",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with iproute2 7.1.0 installed; optional targets depend on build features。"
        }
      ],
      "components": [
        "iproute2"
      ],
      "constraints": [
        "requires Linux with iproute2 7.1.0 installed; optional targets depend on build features"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "iproute2-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://git.kernel.org/pub/scm/network/iproute2/iproute2.git/tag/?h=v7.1.0 · man/man8/dcb.8",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": ".sp .ad l .in +8 .ti -8 dcb \"[ \" OPTIONS \" ] \" \"{ \" app \" | \" buffer \" | \" ets \" | \" maxrate \" | \" pfc \" }\" \"{ \" COMMAND \" | \" help \" }\" .sp .ti -8 dcb \"[ \" -force \" ] \" \"-batch \" filename .sp .ti -8 dcb \"[ \" OPTIONS \" ] \" help .sp",
      "options": [
        "-n",
        "--netns",
        "-V",
        "--Version",
        "-b",
        "--batch",
        "-f",
        "--force"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "delpart",
      "en": "tell the kernel to forget about a partition",
      "zh": "delpart：tell the kernel to forget about a partition（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-delpart",
      "context": "linux-system",
      "keywords": [
        "delpart",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 delpart 来完成“tell the kernel to forget about a partition”时",
          "goal": "按固定官方版本的定义调用 delpart，并依据退出状态判断该操作是否完成",
          "value": "delpart",
          "description": "delpart 的官方用途是“tell the kernel to forget about a partition”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 delpart；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/disk-utils/delpart.8.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · disk-utils/delpart.8.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "delpart device partition",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "delpart.static",
      "en": "statically linked tell the kernel to forget about a partition",
      "zh": "delpart.static：statically linked tell the kernel to forget about a partition（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-delpart-static",
      "context": "linux-system",
      "keywords": [
        "delpart.static",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 delpart.static 来完成“statically linked tell the kernel to forget about a partition”时",
          "goal": "按固定官方版本的定义调用 delpart.static，并依据退出状态判断该操作是否完成",
          "value": "delpart.static",
          "description": "delpart.static 的官方用途是“statically linked tell the kernel to forget about a partition”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 delpart.static；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/meson.build#optional-static-target-delpart.static",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration；requires a util-linux 2.42.2 build with the corresponding static_programs target enabled。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration",
        "requires a util-linux 2.42.2 build with the corresponding static_programs target enabled"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · meson.build executable('delpart.static')",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "delpart.static device partition",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "devlink",
      "en": "devlink Devlink tool",
      "zh": "devlink：devlink Devlink tool（来源：iproute2）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-devlink",
      "context": "linux-system",
      "keywords": [
        "devlink",
        "命令",
        "终端",
        "iproute2"
      ],
      "examples": [
        {
          "scenario": "需要使用 iproute2 提供的 devlink 来完成“devlink Devlink tool”时",
          "goal": "按固定官方版本的定义调用 devlink，并依据退出状态判断该操作是否完成",
          "value": "devlink",
          "description": "devlink 的官方用途是“devlink Devlink tool”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 iproute2 的定义执行 devlink；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "iproute2-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "iproute2-repository",
              "locator": "https://git.kernel.org/pub/scm/network/iproute2/iproute2.git/tag/?h=v7.1.0/tree/man/man8/devlink.8",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with iproute2 7.1.0 installed; optional targets depend on build features。"
        }
      ],
      "components": [
        "iproute2"
      ],
      "constraints": [
        "requires Linux with iproute2 7.1.0 installed; optional targets depend on build features"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "iproute2-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://git.kernel.org/pub/scm/network/iproute2/iproute2.git/tag/?h=v7.1.0 · man/man8/devlink.8",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": ".sp .ad l .in +8 .ti -8 devlink \"[ \" OPTIONS \" ] { \" dev | port | monitor | sb | resource | region | health | trap | rate | lc | dpipe \" } { \" COMMAND \" | \" help \" }\" .sp .ti -8 devlink \"[ \" -force \" ] \" \"-batch \" filename .sp",
      "options": [
        "-V",
        "--Version",
        "-b",
        "-batch",
        "-force",
        "-n",
        "--no-nice-names",
        "-j"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "dmesg",
      "en": "Read the kernel ring buffer",
      "zh": "读取内核环形缓冲区",
      "context": "linux-system",
      "platforms": [
        "linux"
      ],
      "id": "linux-dmesg",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · sys-utils/dmesg.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "keywords": [
        "dmesg",
        "读取内核环形缓冲区",
        "Read the kernel ring buffer",
        "Linux",
        "系统工具"
      ],
      "examples": [
        {
          "scenario": "新接入设备没有出现，需要检查内核是否记录了驱动加载或硬件错误",
          "goal": "读取内核环形缓冲区消息",
          "value": "dmesg",
          "description": "输出当前可读取的内核消息，便于查找驱动、设备和启动阶段诊断。",
          "expected": "终端显示内核消息；受系统权限限制时会返回读取失败诊断。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · sys-utils/dmesg.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ]
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "usage": "dmesg [options] dmesg --clear dmesg --read-clear [options] dmesg --console-level level dmesg --console-on dmesg --console-off",
      "options": [
        "--clear",
        "--read-clear",
        "--console-on",
        "--console-off",
        "--console-level",
        "-C",
        "-c",
        "-D"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "dpll",
      "en": "dpll Digital Phase Locked Loop (DPLL) subsystem management",
      "zh": "dpll：dpll Digital Phase Locked Loop (DPLL) subsystem management（来源：iproute2）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-dpll",
      "context": "linux-system",
      "keywords": [
        "dpll",
        "命令",
        "终端",
        "iproute2"
      ],
      "examples": [
        {
          "scenario": "需要使用 iproute2 提供的 dpll 来完成“dpll Digital Phase Locked Loop (DPLL) subsystem management”时",
          "goal": "按固定官方版本的定义调用 dpll，并依据退出状态判断该操作是否完成",
          "value": "dpll",
          "description": "dpll 的官方用途是“dpll Digital Phase Locked Loop (DPLL) subsystem management”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 iproute2 的定义执行 dpll；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "iproute2-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "iproute2-repository",
              "locator": "https://git.kernel.org/pub/scm/network/iproute2/iproute2.git/tag/?h=v7.1.0/tree/man/man8/dpll.8",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with iproute2 7.1.0 installed; optional targets depend on build features。"
        }
      ],
      "components": [
        "iproute2"
      ],
      "constraints": [
        "requires Linux with iproute2 7.1.0 installed; optional targets depend on build features"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "iproute2-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://git.kernel.org/pub/scm/network/iproute2/iproute2.git/tag/?h=v7.1.0 · man/man8/dpll.8",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": ".ad l .in +8 .ti -8 dpll \"[ \" OPTIONS \" ]\" device \"{ \" COMMAND \" | \" help \" }\" .sp .ti -8 dpll \"[ \" OPTIONS \" ]\" pin \"{ \" COMMAND \" | \" help \" }\" .sp .ti -8 dpll \"[ \" OPTIONS \" ]\" monitor .ti -8 OPTIONS \" := { \" V | Version | j | json | p | pretty }",
      "options": [
        "-V",
        "--Version",
        "-j",
        "--json",
        "-p",
        "--pretty"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "eject",
      "en": "eject removable media",
      "zh": "eject：eject removable media（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-eject",
      "context": "linux-system",
      "keywords": [
        "eject",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 eject 来完成“eject removable media”时",
          "goal": "按固定官方版本的定义调用 eject，并依据退出状态判断该操作是否完成",
          "value": "eject",
          "description": "eject 的官方用途是“eject removable media”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 eject；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/sys-utils/eject.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · sys-utils/eject.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "eject [options] device|mountpoint",
      "options": [
        "-a",
        "--auto",
        "-c",
        "--changerslot",
        "-d",
        "--default",
        "-F",
        "--force"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "enosys",
      "en": "utility to make syscalls fail with ENOSYS",
      "zh": "enosys：utility to make syscalls fail with ENOSYS（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-enosys",
      "context": "linux-system",
      "keywords": [
        "enosys",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 enosys 来完成“utility to make syscalls fail with ENOSYS”时",
          "goal": "按固定官方版本的定义调用 enosys，并依据退出状态判断该操作是否完成",
          "value": "enosys",
          "description": "enosys 的官方用途是“utility to make syscalls fail with ENOSYS”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 enosys；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/misc-utils/enosys.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · misc-utils/enosys.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "enosys [--syscall|-s syscall] command",
      "options": [
        "-s",
        "--syscall",
        "-i",
        "--ioctl",
        "-l",
        "--list",
        "-m",
        "--list-ioctl"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "exch",
      "en": "atomically exchanges paths between two files",
      "zh": "exch：atomically exchanges paths between two files（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-exch",
      "context": "linux-system",
      "keywords": [
        "exch",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 exch 来完成“atomically exchanges paths between two files”时",
          "goal": "按固定官方版本的定义调用 exch，并依据退出状态判断该操作是否完成",
          "value": "exch",
          "description": "exch 的官方用途是“atomically exchanges paths between two files”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 exch；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/misc-utils/exch.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · misc-utils/exch.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "exch oldpath newpath",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "fadvise",
      "en": "utility to use the posix_fadvise(2) system call",
      "zh": "fadvise：utility to use the posix_fadvise(2) system call（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-fadvise",
      "context": "linux-system",
      "keywords": [
        "fadvise",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 fadvise 来完成“utility to use the posix_fadvise(2) system call”时",
          "goal": "按固定官方版本的定义调用 fadvise，并依据退出状态判断该操作是否完成",
          "value": "fadvise",
          "description": "fadvise 的官方用途是“utility to use the posix_fadvise(2) system call”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 fadvise；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/misc-utils/fadvise.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · misc-utils/fadvise.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "fadvise [-a advice] [-o offset] [-l length] filename fadvise [-a advice] [-o offset] [-l length] -d file-descriptor",
      "options": [
        "-d",
        "--fd",
        "-a",
        "--advice",
        "--help",
        "-o",
        "--offset",
        "-l"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "fallocate",
      "en": "preallocate or deallocate space to a file",
      "zh": "fallocate：preallocate or deallocate space to a file（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-fallocate",
      "context": "linux-system",
      "keywords": [
        "fallocate",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 fallocate 来完成“preallocate or deallocate space to a file”时",
          "goal": "按固定官方版本的定义调用 fallocate，并依据退出状态判断该操作是否完成",
          "value": "fallocate",
          "description": "fallocate 的官方用途是“preallocate or deallocate space to a file”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 fallocate；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/sys-utils/fallocate.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · sys-utils/fallocate.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "fallocate [-c|-p|-z|-w] [-o offset] -l length [-n] filename fallocate -d [-o offset] [-l length] filename fallocate -r [-o offset] filename fallocate -x [-o offset] -l length filename",
      "options": [
        "--collapse-range",
        "--dig-holes",
        "--report-holes",
        "--punch-hole",
        "--zero-range",
        "--write-zeroes",
        "--posix",
        "-c"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "fdformat",
      "en": "low-level format a floppy disk",
      "zh": "fdformat：low-level format a floppy disk（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-fdformat",
      "context": "linux-system",
      "keywords": [
        "fdformat",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 fdformat 来完成“low-level format a floppy disk”时",
          "goal": "按固定官方版本的定义调用 fdformat，并依据退出状态判断该操作是否完成",
          "value": "fdformat",
          "description": "fdformat 的官方用途是“low-level format a floppy disk”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 fdformat；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/disk-utils/fdformat.8.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · disk-utils/fdformat.8.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "fdformat [options] device",
      "options": [
        "-f",
        "--from",
        "-t",
        "--to",
        "-r",
        "--repair",
        "-n",
        "--no-verify"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "fdisk",
      "en": "manipulate disk partition table",
      "zh": "fdisk：manipulate disk partition table（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-fdisk",
      "context": "linux-system",
      "keywords": [
        "fdisk",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 fdisk 来完成“manipulate disk partition table”时",
          "goal": "按固定官方版本的定义调用 fdisk，并依据退出状态判断该操作是否完成",
          "value": "fdisk",
          "description": "fdisk 的官方用途是“manipulate disk partition table”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 fdisk；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": false,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/disk-utils/fdisk.8.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "warning": "fdisk 可能修改系统、磁盘、账号、服务或进程状态；仅在已确认对象和回滚方案后执行。",
          "riskLevels": [
            "deleteOrOverwrite"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration；执行前先用只读命令检查目标、确认影响范围并备份可恢复数据；优先在隔离环境验证。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · disk-utils/fdisk.8.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "fdisk [options] device fdisk -l [device...]",
      "options": [
        "-b",
        "--sector-size",
        "-B",
        "--protect-boot",
        "-c",
        "--compatibility",
        "-L",
        "--color"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "fdisk.static",
      "en": "statically linked manipulate disk partition table",
      "zh": "fdisk.static：statically linked manipulate disk partition table（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-fdisk-static",
      "context": "linux-system",
      "keywords": [
        "fdisk.static",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 fdisk.static 来完成“statically linked manipulate disk partition table”时",
          "goal": "按固定官方版本的定义调用 fdisk.static，并依据退出状态判断该操作是否完成",
          "value": "fdisk.static",
          "description": "fdisk.static 的官方用途是“statically linked manipulate disk partition table”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 fdisk.static；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": false,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/meson.build#optional-static-target-fdisk.static",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "warning": "fdisk.static 可能修改系统、磁盘、账号、服务或进程状态；仅在已确认对象和回滚方案后执行。",
          "riskLevels": [
            "deleteOrOverwrite"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration；requires a util-linux 2.42.2 build with the corresponding static_programs target enabled；执行前先用只读命令检查目标、确认影响范围并备份可恢复数据；优先在隔离环境验证。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration",
        "requires a util-linux 2.42.2 build with the corresponding static_programs target enabled"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · meson.build executable('fdisk.static')",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "fdisk.static [options] device fdisk -l [device...]",
      "options": [
        "-b",
        "--sector-size",
        "-B",
        "--protect-boot",
        "-c",
        "--compatibility",
        "-L",
        "--color"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "fincore",
      "en": "count pages of file contents in core",
      "zh": "fincore：count pages of file contents in core（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-fincore",
      "context": "linux-system",
      "keywords": [
        "fincore",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 fincore 来完成“count pages of file contents in core”时",
          "goal": "按固定官方版本的定义调用 fincore，并依据退出状态判断该操作是否完成",
          "value": "fincore",
          "description": "fincore 的官方用途是“count pages of file contents in core”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 fincore；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/misc-utils/fincore.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · misc-utils/fincore.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "fincore [options] file...",
      "options": [
        "-n",
        "--noheadings",
        "-b",
        "--bytes",
        "-c",
        "--total",
        "-C",
        "--cachestat"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "findfs",
      "en": "find a filesystem by label or UUID",
      "zh": "findfs：find a filesystem by label or UUID（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-findfs",
      "context": "linux-system",
      "keywords": [
        "findfs",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 findfs 来完成“find a filesystem by label or UUID”时",
          "goal": "按固定官方版本的定义调用 findfs，并依据退出状态判断该操作是否完成",
          "value": "findfs",
          "description": "findfs 的官方用途是“find a filesystem by label or UUID”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 findfs；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/misc-utils/findfs.8.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · misc-utils/findfs.8.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "findfs TAGNAME=value",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "findmnt",
      "en": "Find mounted filesystems",
      "zh": "查询挂载关系",
      "context": "linux-system",
      "platforms": [
        "linux"
      ],
      "id": "linux-findmnt",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · misc-utils/findmnt.8.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "keywords": [
        "findmnt",
        "查询挂载关系",
        "Find mounted filesystems",
        "Linux",
        "系统工具"
      ],
      "examples": [
        {
          "scenario": "根目录空间告警，需要确认它实际对应的源设备、文件系统类型和挂载选项",
          "goal": "查询根目录对应的挂载项",
          "value": "findmnt /",
          "description": "使用目标路径匹配挂载表中的对应记录。",
          "expected": "终端输出根目录的源设备、目标、类型和选项等字段。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · misc-utils/findmnt.8.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ]
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "usage": "findmnt [options] findmnt [options] device|mountpoint findmnt [options] [--source] device [--target path|--mountpoint mountpoint]",
      "options": [
        "-A",
        "--all",
        "-a",
        "--ascii",
        "-b",
        "--bytes",
        "-C",
        "--nocanonicalize"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "flock",
      "en": "manage locks from shell scripts",
      "zh": "flock：manage locks from shell scripts（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-flock",
      "context": "linux-system",
      "keywords": [
        "flock",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "多个持续集成任务可能同时运行测试，需要用同一锁文件串行化这段命令",
          "goal": "持有项目锁时执行 npm test",
          "value": "flock /tmp/project-ci.lock npm test",
          "description": "flock 在锁文件上获取锁，再把 npm test 作为嵌套命令运行。",
          "expected": "获得锁后执行测试；其它使用同一锁的任务会按默认方式等待。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · sys-utils/flock.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ]
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · sys-utils/flock.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "flock [options] file|directory command [arguments] flock [options] file|directory -c command flock [options] number",
      "options": [
        "-c",
        "--command",
        "-E",
        "--conflict-exit-code",
        "-n",
        "-w",
        "-F",
        "--no-fork"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "free",
      "en": "Display memory and swap usage",
      "zh": "查看内存与交换空间",
      "context": "linux-system",
      "platforms": [
        "linux"
      ],
      "id": "linux-free",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "procps-ng-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://gitlab.com/procps-ng/procps/-/tags/v4.0.6 · man/free.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "keywords": [
        "free",
        "查看内存与交换空间",
        "Display memory and swap usage",
        "Linux",
        "系统工具"
      ],
      "examples": [
        {
          "scenario": "主机出现内存压力并开始频繁交换，需要用统一单位比较物理内存和 swap 使用量",
          "goal": "以 MiB 查看内存容量统计",
          "value": "free -m",
          "description": "-m 使用 MiB 展示总量、已用、可用内存和交换空间。",
          "expected": "终端输出内存与 swap 统计表，不修改系统内存配置。",
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
              "locator": "https://gitlab.com/procps-ng/procps/-/tags/v4.0.6 · man/free.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ]
        }
      ],
      "components": [
        "procps-ng"
      ],
      "constraints": [
        "requires Linux with procps-ng 4.0.6 installed"
      ],
      "usage": "free [ option \" .\\|.\\|.]\"",
      "options": [
        "-b",
        "--bytes",
        "-k",
        "--kibi",
        "-m",
        "--mebi",
        "-g",
        "--gibi"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "fsck",
      "en": "check and repair a Linux filesystem",
      "zh": "fsck：check and repair a Linux filesystem（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-fsck",
      "context": "linux-system",
      "keywords": [
        "fsck",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 fsck 来完成“check and repair a Linux filesystem”时",
          "goal": "按固定官方版本的定义调用 fsck，并依据退出状态判断该操作是否完成",
          "value": "fsck",
          "description": "fsck 的官方用途是“check and repair a Linux filesystem”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 fsck；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": false,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/disk-utils/fsck.8.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "warning": "fsck 可能修改系统、磁盘、账号、服务或进程状态；仅在已确认对象和回滚方案后执行。",
          "riskLevels": [
            "deleteOrOverwrite"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration；执行前先用只读命令检查目标、确认影响范围并备份可恢复数据；优先在隔离环境验证。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · disk-utils/fsck.8.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "fsck [-lsAVRTMNP] [-r [fd]] [-C [fd]] [-t fstype] [filesystem...] [--] [fs-specific-options]",
      "options": [
        "-l",
        "-A",
        "-r",
        "-s",
        "-p",
        "-a",
        "-n",
        "-t"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "fsck.cramfs",
      "en": "fsck compressed ROM file system",
      "zh": "fsck.cramfs：fsck compressed ROM file system（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-fsck-cramfs",
      "context": "linux-system",
      "keywords": [
        "fsck.cramfs",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 fsck.cramfs 来完成“fsck compressed ROM file system”时",
          "goal": "按固定官方版本的定义调用 fsck.cramfs，并依据退出状态判断该操作是否完成",
          "value": "fsck.cramfs",
          "description": "fsck.cramfs 的官方用途是“fsck compressed ROM file system”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 fsck.cramfs；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": false,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/disk-utils/fsck.cramfs.8.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "warning": "fsck.cramfs 可能修改系统、磁盘、账号、服务或进程状态；仅在已确认对象和回滚方案后执行。",
          "riskLevels": [
            "deleteOrOverwrite"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration；执行前先用只读命令检查目标、确认影响范围并备份可恢复数据；优先在隔离环境验证。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · disk-utils/fsck.cramfs.8.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "fsck.cramfs [options] file",
      "options": [
        "-v",
        "--verbose",
        "-b",
        "--blocksize",
        "--extract",
        "-a",
        "-y"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "fsck.minix",
      "en": "check consistency of Minix filesystem",
      "zh": "fsck.minix：check consistency of Minix filesystem（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-fsck-minix",
      "context": "linux-system",
      "keywords": [
        "fsck.minix",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 fsck.minix 来完成“check consistency of Minix filesystem”时",
          "goal": "按固定官方版本的定义调用 fsck.minix，并依据退出状态判断该操作是否完成",
          "value": "fsck.minix",
          "description": "fsck.minix 的官方用途是“check consistency of Minix filesystem”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 fsck.minix；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": false,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/disk-utils/fsck.minix.8.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "warning": "fsck.minix 可能修改系统、磁盘、账号、服务或进程状态；仅在已确认对象和回滚方案后执行。",
          "riskLevels": [
            "deleteOrOverwrite"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration；执行前先用只读命令检查目标、确认影响范围并备份可恢复数据；优先在隔离环境验证。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · disk-utils/fsck.minix.8.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "fsck.minix [options] device",
      "options": [
        "-l",
        "--list",
        "-r",
        "--repair",
        "-a",
        "--auto",
        "-v",
        "--verbose"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "fsfreeze",
      "en": "suspend access to a filesystem (Ext3/4, ReiserFS, JFS, XFS)",
      "zh": "fsfreeze：suspend access to a filesystem (Ext3/4, ReiserFS, JFS, XFS)（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-fsfreeze",
      "context": "linux-system",
      "keywords": [
        "fsfreeze",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 fsfreeze 来完成“suspend access to a filesystem (Ext3/4, ReiserFS, JFS, XFS)”时",
          "goal": "按固定官方版本的定义调用 fsfreeze，并依据退出状态判断该操作是否完成",
          "value": "fsfreeze",
          "description": "fsfreeze 的官方用途是“suspend access to a filesystem (Ext3/4, ReiserFS, JFS, XFS)”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 fsfreeze；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/sys-utils/fsfreeze.8.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · sys-utils/fsfreeze.8.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "fsfreeze --freeze|--unfreeze mountpoint",
      "options": [
        "-f",
        "--freeze",
        "-u",
        "--unfreeze"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "fstrim",
      "en": "discard unused blocks on a mounted filesystem",
      "zh": "fstrim：discard unused blocks on a mounted filesystem（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-fstrim",
      "context": "linux-system",
      "keywords": [
        "fstrim",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "计划对根文件系统执行 TRIM 前，需要先验证命令路径而不真正发送 FITRIM 操作",
          "goal": "以 dry-run 模式检查根挂载点",
          "value": "fstrim -n /",
          "description": "-n 执行除 FITRIM ioctl 之外的检查流程，因此不会真正丢弃未使用块。",
          "expected": "命令验证目标并返回状态，但不会向文件系统发出实际 TRIM 请求。",
          "caveat": "读取挂载信息仍可能需要相应权限；真正执行时应遵循设备与发行版的维护策略。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · sys-utils/fstrim.8.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ]
        },
        {
          "scenario": "维护窗口内已确认文件系统和底层设备支持 TRIM，需要对根挂载点真正回收未使用块",
          "goal": "执行 FITRIM 并显示回收量",
          "value": "fstrim -v /",
          "description": "-v 在实际向根文件系统发送 FITRIM 后报告被丢弃的字节数。",
          "expected": "支持时终端显示已回收范围；不支持或权限不足时返回错误，设备状态可能已部分改变。",
          "copyable": false,
          "warning": "会对挂载文件系统实际发送块丢弃请求；仅在已确认设备支持且处于维护窗口时执行。",
          "caveat": "先运行 fstrim -n / 检查并确认根挂载点、文件系统与存储设备的 TRIM 策略。",
          "riskLevels": [
            "deleteOrOverwrite"
          ],
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · sys-utils/fstrim.8.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ]
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · sys-utils/fstrim.8.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "fstrim [-v] [-o offset] [-l length] [-m minimum-size] -A|-a|mountpoint",
      "options": [
        "-A",
        "--fstab",
        "--offset",
        "--length",
        "--minimum",
        "-a",
        "--all",
        "-n"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "genl",
      "en": "genl generic netlink utility frontend",
      "zh": "genl：genl generic netlink utility frontend（来源：iproute2）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-genl",
      "context": "linux-system",
      "keywords": [
        "genl",
        "命令",
        "终端",
        "iproute2"
      ],
      "examples": [
        {
          "scenario": "需要使用 iproute2 提供的 genl 来完成“genl generic netlink utility frontend”时",
          "goal": "按固定官方版本的定义调用 genl，并依据退出状态判断该操作是否完成",
          "value": "genl",
          "description": "genl 的官方用途是“genl generic netlink utility frontend”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 iproute2 的定义执行 genl；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "iproute2-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "iproute2-repository",
              "locator": "https://git.kernel.org/pub/scm/network/iproute2/iproute2.git/tag/?h=v7.1.0/tree/man/man8/genl.8",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with iproute2 7.1.0 installed; optional targets depend on build features。"
        }
      ],
      "components": [
        "iproute2"
      ],
      "constraints": [
        "requires Linux with iproute2 7.1.0 installed; optional targets depend on build features"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "iproute2-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://git.kernel.org/pub/scm/network/iproute2/iproute2.git/tag/?h=v7.1.0 · man/man8/genl.8",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": ".in +8 .ti -8 genl \"[ \" OPTIONS \" ] \" OBJECT .ti -8 genl \" { \" -V [ ersion \"] | \" -h [ elp \"] }\" .ti -8 OPTIONS \" := { \" s[tatistics] | d[etails] | j[son] | p[retty] } .ti -8 OBJECT \" := { \" ctrl CTRL_OPTS \" }\" .ti -8 CTRL_OPTS \" := { \" help \" | \" list \" | \" monitor \" | \" get PAR",
      "options": [
        "-h",
        "-help",
        "-V",
        "-Version",
        "-s",
        "-stats",
        "-statistics",
        "-d"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "getino",
      "en": "print the unique inode number associated to a process file descriptor or namespace for a given PID",
      "zh": "getino：print the unique inode number associated to a process file descriptor or namespace for a given PID（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-getino",
      "context": "linux-system",
      "keywords": [
        "getino",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 getino 来完成“print the unique inode number associated to a process file descriptor or namespace for a given PID”时",
          "goal": "按固定官方版本的定义调用 getino，并依据退出状态判断该操作是否完成",
          "value": "getino",
          "description": "getino 的官方用途是“print the unique inode number associated to a process file descriptor or namespace for a given PID”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 getino；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/misc-utils/getino.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · misc-utils/getino.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "getino [--pidfs|--cgroupns|--ipcns|--netns|--mntns|--pidns|--timens|--userns|--utsns] [--print-pid|-p] PID[:inode]... getino [--print-pid|-p] PID[:inode]... getino PID[:inode]...",
      "options": [
        "-p",
        "--print-pid",
        "--pidfs",
        "--cgroupns",
        "--ipcns",
        "--netns",
        "--mntns",
        "--pidns"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "getopt",
      "en": "parse command options (enhanced)",
      "zh": "getopt：parse command options (enhanced)（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-getopt",
      "context": "linux-system",
      "keywords": [
        "getopt",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 getopt 来完成“parse command options (enhanced)”时",
          "goal": "按固定官方版本的定义调用 getopt，并依据退出状态判断该操作是否完成",
          "value": "getopt",
          "description": "getopt 的官方用途是“parse command options (enhanced)”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 getopt；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/misc-utils/getopt.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · misc-utils/getopt.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "getopt optstring parameters getopt [options] [--] optstring parameters getopt [options] -o|--options optstring [options] [--] parameters",
      "options": [
        "-a",
        "--alternative",
        "-l",
        "--longoptions",
        "-n",
        "--name",
        "-o",
        "--options"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "hardlink",
      "en": "link multiple copies of a file",
      "zh": "hardlink：link multiple copies of a file（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-hardlink",
      "context": "linux-system",
      "keywords": [
        "hardlink",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 hardlink 来完成“link multiple copies of a file”时",
          "goal": "按固定官方版本的定义调用 hardlink，并依据退出状态判断该操作是否完成",
          "value": "hardlink",
          "description": "hardlink 的官方用途是“link multiple copies of a file”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 hardlink；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/misc-utils/hardlink.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · misc-utils/hardlink.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "hardlink [options] directory|file...",
      "options": [
        "-c",
        "--content",
        "-pot",
        "-b",
        "--io-size",
        "-d",
        "--respect-dir",
        "--respect-name"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "hexdump",
      "en": "display file contents in hexadecimal, decimal, octal, or ascii",
      "zh": "hexdump：display file contents in hexadecimal, decimal, octal, or ascii（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-hexdump",
      "context": "linux-system",
      "keywords": [
        "hexdump",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 hexdump 来完成“display file contents in hexadecimal, decimal, octal, or ascii”时",
          "goal": "按固定官方版本的定义调用 hexdump，并依据退出状态判断该操作是否完成",
          "value": "hexdump",
          "description": "hexdump 的官方用途是“display file contents in hexadecimal, decimal, octal, or ascii”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 hexdump；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/text-utils/hexdump.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · text-utils/hexdump.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "hexdump [options] file ... hd [options] file ...",
      "options": [
        "-b",
        "--one-byte-octal",
        "-X",
        "--one-byte-hex",
        "-c",
        "--one-byte-char",
        "-C",
        "--canonical"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "homectl",
      "en": "Create, remove, change or inspect home directories",
      "zh": "homectl：Create, remove, change or inspect home directories（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-homectl",
      "context": "linux-system",
      "keywords": [
        "homectl",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 homectl 来完成“Create, remove, change or inspect home directories”时",
          "goal": "按固定官方版本的定义调用 homectl，并依据退出状态判断该操作是否完成",
          "value": "homectl",
          "description": "homectl 的官方用途是“Create, remove, change or inspect home directories”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 homectl；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/homectl.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/homectl.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "homectl",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "hostnamectl",
      "en": "Inspect host naming information",
      "zh": "查看主机名状态",
      "context": "linux-system",
      "platforms": [
        "linux"
      ],
      "id": "linux-hostnamectl",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/hostnamectl.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "keywords": [
        "hostnamectl",
        "查看主机名状态",
        "Inspect host naming information",
        "Linux",
        "systemd"
      ],
      "examples": [
        {
          "value": "hostnamectl status",
          "description": "查看静态主机名和系统元数据，用于收集主机身份与系统信息",
          "scenario": "收集主机身份与系统信息时",
          "goal": "查看静态主机名和系统元数据",
          "expected": "输出主机名、机型、系统与内核摘要",
          "caveat": "仅适用于使用 systemd-hostnamed 的发行版",
          "copyable": true,
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "systemd-man"
          ],
          "platforms": [
            "linux"
          ],
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/hostnamectl.html",
              "claims": [
                "value",
                "behavior",
                "expected",
                "platform",
                "caveat"
              ]
            }
          ]
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "usage": "hostnamectl",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "hugetop",
      "en": "hugetop report huge page information",
      "zh": "hugetop：hugetop report huge page information（来源：procps-ng）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-hugetop",
      "context": "linux-system",
      "keywords": [
        "hugetop",
        "命令",
        "终端",
        "procps-ng"
      ],
      "examples": [
        {
          "scenario": "需要使用 procps-ng 提供的 hugetop 来完成“hugetop report huge page information”时",
          "goal": "按固定官方版本的定义调用 hugetop，并依据退出状态判断该操作是否完成",
          "value": "hugetop",
          "description": "hugetop 的官方用途是“hugetop report huge page information”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 procps-ng 的定义执行 hugetop；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "procps-ng-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "procps-ng-repository",
              "locator": "https://gitlab.com/procps-ng/procps/-/tags/v4.0.6/man/hugetop.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with procps-ng 4.0.6 installed。"
        }
      ],
      "components": [
        "procps-ng"
      ],
      "constraints": [
        "requires Linux with procps-ng 4.0.6 installed"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "procps-ng-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://gitlab.com/procps-ng/procps/-/tags/v4.0.6 · man/hugetop.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "hugetop [ option \" .\\|.\\|.]\"",
      "options": [
        "-d",
        "--delay",
        "-n",
        "--numa",
        "-o",
        "--once",
        "-H",
        "--human"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "hwclock",
      "en": "time clocks utility",
      "zh": "hwclock：time clocks utility（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-hwclock",
      "context": "linux-system",
      "keywords": [
        "hwclock",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 hwclock 来完成“time clocks utility”时",
          "goal": "按固定官方版本的定义调用 hwclock，并依据退出状态判断该操作是否完成",
          "value": "hwclock",
          "description": "hwclock 的官方用途是“time clocks utility”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 hwclock；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/sys-utils/hwclock.8.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · sys-utils/hwclock.8.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "hwclock [function] [option...]",
      "options": [
        "--adjfile",
        "--date",
        "--set",
        "--predict",
        "--localtime",
        "--delay",
        "-D",
        "--debug"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "ifstat",
      "en": "ifstat handy utility to read network interface statistics",
      "zh": "ifstat：ifstat handy utility to read network interface statistics（来源：iproute2）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-ifstat",
      "context": "linux-system",
      "keywords": [
        "ifstat",
        "命令",
        "终端",
        "iproute2"
      ],
      "examples": [
        {
          "scenario": "需要使用 iproute2 提供的 ifstat 来完成“ifstat handy utility to read network interface statistics”时",
          "goal": "按固定官方版本的定义调用 ifstat，并依据退出状态判断该操作是否完成",
          "value": "ifstat",
          "description": "ifstat 的官方用途是“ifstat handy utility to read network interface statistics”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 iproute2 的定义执行 ifstat；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "iproute2-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "iproute2-repository",
              "locator": "https://git.kernel.org/pub/scm/network/iproute2/iproute2.git/tag/?h=v7.1.0/tree/man/man8/ifstat.8",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with iproute2 7.1.0 installed; optional targets depend on build features。"
        }
      ],
      "components": [
        "iproute2"
      ],
      "constraints": [
        "requires Linux with iproute2 7.1.0 installed; optional targets depend on build features"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "iproute2-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://git.kernel.org/pub/scm/network/iproute2/iproute2.git/tag/?h=v7.1.0 · man/man8/ifstat.8",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": ".in +8 .ti -8 ifstat \" [ \" OPTIONS \" ] [ \" INTERFACE_LIST \" ]\" .ti -8 INTERFACE_LIST \" := \" INTERFACE_LIST \" | \" interface",
      "options": [
        "-h",
        "--help",
        "-V",
        "--version",
        "-a",
        "--ignore",
        "-d",
        "--scan"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "importctl",
      "en": "Download, import or export disk images",
      "zh": "importctl：Download, import or export disk images（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-importctl",
      "context": "linux-system",
      "keywords": [
        "importctl",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 importctl 来完成“Download, import or export disk images”时",
          "goal": "按固定官方版本的定义调用 importctl，并依据退出状态判断该操作是否完成",
          "value": "importctl",
          "description": "importctl 的官方用途是“Download, import or export disk images”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 importctl；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/importctl.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/importctl.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "importctl",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "ionice",
      "en": "set or get process I/O scheduling class and priority",
      "zh": "ionice：set or get process I/O scheduling class and priority（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-ionice",
      "context": "linux-system",
      "keywords": [
        "ionice",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 ionice 来完成“set or get process I/O scheduling class and priority”时",
          "goal": "按固定官方版本的定义调用 ionice，并依据退出状态判断该操作是否完成",
          "value": "ionice",
          "description": "ionice 的官方用途是“set or get process I/O scheduling class and priority”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 ionice；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/schedutils/ionice.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · schedutils/ionice.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "ionice [-c class] [-n level] [-t] -p PID ionice [-c class] [-n level] [-t] -P PGID ionice [-c class] [-n level] [-t] -u UID ionice [-c class] [-n level] [-t] command [argument] ...",
      "options": [
        "-c",
        "--class",
        "-n",
        "--classdata",
        "-p",
        "--pid",
        "-P",
        "--pgid"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "ip",
      "en": "Show and manipulate network state",
      "zh": "查看网络接口和地址",
      "context": "linux-system",
      "platforms": [
        "linux"
      ],
      "id": "linux-ip",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "iproute2-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://git.kernel.org/pub/scm/network/iproute2/iproute2.git/tag/?h=v7.1.0 · man/man8/ip.8",
          "checkedAt": "2026-07-31"
        }
      ],
      "keywords": [
        "ip",
        "查看网络接口和地址",
        "Show and manipulate network state",
        "Linux",
        "系统工具"
      ],
      "examples": [
        {
          "scenario": "容器无法访问外网，需要核对宿主机各接口的链路状态和已分配地址",
          "goal": "显示所有网络接口的地址信息",
          "value": "ip address show",
          "description": "address show 子命令读取接口的 IPv4、IPv6 地址和链路属性。",
          "expected": "终端按接口输出地址与状态信息，不修改任何网络配置。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "iproute2-repository"
          ],
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "iproute2-repository",
              "locator": "https://git.kernel.org/pub/scm/network/iproute2/iproute2.git/tag/?h=v7.1.0 · man/man8/ip.8",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ]
        }
      ],
      "components": [
        "iproute2"
      ],
      "constraints": [
        "requires Linux with iproute2 7.1.0 installed; optional targets depend on build features"
      ],
      "usage": ".ad l .in +8 .ti -8 ip \"[ \" OPTIONS \" ] \" OBJECT \" { \" COMMAND \" | \" help \" }\" .sp .ti -8 ip \"[ \" -force \" ] \" \"-batch \" filename .sp .ti -8 OBJECT \" := { \" address \" | \" addrlabel \" | \" fou \" | \" help \" | \" ila \" | \" ioam \" | \"\\ l2tp \" | \" link \" | \" macsec \" | \" maddress \" | \" ",
      "options": [
        "-V",
        "-Version",
        "-h",
        "-human",
        "-human-readable",
        "-b",
        "-batch",
        "-force"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "ipcmk",
      "en": "make various IPC resources",
      "zh": "ipcmk：make various IPC resources（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-ipcmk",
      "context": "linux-system",
      "keywords": [
        "ipcmk",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 ipcmk 来完成“make various IPC resources”时",
          "goal": "按固定官方版本的定义调用 ipcmk，并依据退出状态判断该操作是否完成",
          "value": "ipcmk",
          "description": "ipcmk 的官方用途是“make various IPC resources”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 ipcmk；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/sys-utils/ipcmk.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · sys-utils/ipcmk.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "ipcmk [options]",
      "options": [
        "-M",
        "--shmem",
        "-m",
        "--posix-shmem",
        "-Q",
        "--queue",
        "-q",
        "--posix-mqueue"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "ipcrm",
      "en": "remove certain IPC resources",
      "zh": "ipcrm：remove certain IPC resources（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-ipcrm",
      "context": "linux-system",
      "keywords": [
        "ipcrm",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 ipcrm 来完成“remove certain IPC resources”时",
          "goal": "按固定官方版本的定义调用 ipcrm，并依据退出状态判断该操作是否完成",
          "value": "ipcrm",
          "description": "ipcrm 的官方用途是“remove certain IPC resources”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 ipcrm；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/sys-utils/ipcrm.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · sys-utils/ipcrm.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "ipcrm [options] ipcrm [shm|msg|sem] ID ...",
      "options": [
        "-a",
        "--all",
        "-M",
        "--shmem-key",
        "-m",
        "--shmem-id",
        "--posix-shmem",
        "-Q"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "ipcs",
      "en": "show information on IPC facilities",
      "zh": "ipcs：show information on IPC facilities（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-ipcs",
      "context": "linux-system",
      "keywords": [
        "ipcs",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 ipcs 来完成“show information on IPC facilities”时",
          "goal": "按固定官方版本的定义调用 ipcs，并依据退出状态判断该操作是否完成",
          "value": "ipcs",
          "description": "ipcs 的官方用途是“show information on IPC facilities”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 ipcs；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/sys-utils/ipcs.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · sys-utils/ipcs.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "ipcs [options]",
      "options": [
        "-i",
        "--id",
        "-m",
        "-q",
        "-s",
        "--shmems",
        "--queues",
        "--semaphores"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "irqtop",
      "en": "display kernel interrupt information",
      "zh": "irqtop：display kernel interrupt information（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-irqtop",
      "context": "linux-system",
      "keywords": [
        "irqtop",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 irqtop 来完成“display kernel interrupt information”时",
          "goal": "按固定官方版本的定义调用 irqtop，并依据退出状态判断该操作是否完成",
          "value": "irqtop",
          "description": "irqtop 的官方用途是“display kernel interrupt information”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 irqtop；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/sys-utils/irqtop.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · sys-utils/irqtop.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "irqtop [options]",
      "options": [
        "-o",
        "--output",
        "--help",
        "-b",
        "--batch",
        "-c",
        "--cpu-stat",
        "-C"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "isosize",
      "en": "output the length of an iso9660 filesystem",
      "zh": "isosize：output the length of an iso9660 filesystem（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-isosize",
      "context": "linux-system",
      "keywords": [
        "isosize",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 isosize 来完成“output the length of an iso9660 filesystem”时",
          "goal": "按固定官方版本的定义调用 isosize，并依据退出状态判断该操作是否完成",
          "value": "isosize",
          "description": "isosize 的官方用途是“output the length of an iso9660 filesystem”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 isosize；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/disk-utils/isosize.8.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · disk-utils/isosize.8.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "isosize [options] iso9660imagefile",
      "options": [
        "-x",
        "--sectors",
        "-d",
        "--divisor"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "journalctl",
      "en": "Query the systemd journal",
      "zh": "查询 systemd 日志",
      "context": "linux-system",
      "platforms": [
        "linux"
      ],
      "id": "linux-journalctl",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/journalctl.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "keywords": [
        "journalctl",
        "查询 systemd 日志",
        "Query the systemd journal",
        "Linux",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "系统刚出现异常，需要从统一日志中按时间查看最近记录并继续筛选线索",
          "goal": "打开当前用户有权读取的 systemd 日志",
          "value": "journalctl",
          "description": "不加筛选条件时读取日志存储中的记录，默认可通过分页器浏览。",
          "expected": "终端按时间显示当前权限范围内的日志记录，不修改日志内容。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/journalctl.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ]
        },
        {
          "scenario": "服务已经重启但问题仍在复现，需要持续日志流观察下一次失败",
          "goal": "持续跟随 systemd journal 的新记录",
          "value": "journalctl -f",
          "description": "-f 保持 journalctl 运行，并在新日志到达时继续输出。",
          "expected": "终端持续显示当前权限范围内的新日志记录，直到用户结束 journalctl。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/journalctl.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ]
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "usage": "journalctl",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "kernel-install",
      "en": "Add and remove kernel and initrd images to and from the boot partition",
      "zh": "kernel-install：Add and remove kernel and initrd images to and from the boot partition（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-kernel-install",
      "context": "linux-system",
      "keywords": [
        "kernel-install",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 kernel-install 来完成“Add and remove kernel and initrd images to and from the boot partition”时",
          "goal": "按固定官方版本的定义调用 kernel-install，并依据退出状态判断该操作是否完成",
          "value": "kernel-install",
          "description": "kernel-install 的官方用途是“Add and remove kernel and initrd images to and from the boot partition”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 kernel-install；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/kernel-install.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：build option: ENABLE_KERNEL_INSTALL；requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "build option: ENABLE_KERNEL_INSTALL",
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/kernel-install.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "kernel-install",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "kill",
      "en": "kill send a signal to one or more processes",
      "zh": "kill：kill send a signal to one or more processes（来源：procps-ng / util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-kill",
      "context": "linux-system",
      "keywords": [
        "kill",
        "命令",
        "终端",
        "procps-ng"
      ],
      "examples": [
        {
          "sourceType": "manual",
          "sourceIds": [
            "procps-ng-repository"
          ],
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "platforms": [
            "linux"
          ],
          "groundingRefs": [
            {
              "sourceId": "procps-ng-repository",
              "locator": "https://gitlab.com/procps-ng/procps/-/tags/v4.0.6 · man/kill.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "已用只读进程列表确认 PID，需要先请求目标进程正常退出时",
          "goal": "向已确认的 PID 发送默认终止信号，并让进程执行清理逻辑",
          "value": "kill 12345",
          "description": "不指定信号时请求目标进程正常终止；PID 必须先从当前机器的进程列表核对。",
          "expected": "目标进程收到终止信号；是否立即退出取决于它的信号处理逻辑。",
          "copyable": false,
          "warning": "会中断目标进程；PID 复用可能导致误终止其它进程。",
          "riskLevels": [
            "processDisruption"
          ],
          "caveat": "先用只读进程列表检查 PID、命令行与所有者，并确认业务可恢复。"
        },
        {
          "sourceType": "manual",
          "sourceIds": [
            "procps-ng-repository"
          ],
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "platforms": [
            "linux"
          ],
          "groundingRefs": [
            {
              "sourceId": "procps-ng-repository",
              "locator": "https://gitlab.com/procps-ng/procps/-/tags/v4.0.6 · man/kill.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "scenario": "目标进程拒绝正常退出，且已经确认可以放弃未保存状态时",
          "goal": "向已核对的 PID 发送 SIGKILL，作为最后手段强制终止进程",
          "value": "kill -9 12345",
          "description": "-9 发送不可捕获的 SIGKILL，不给目标进程执行清理或保存状态的机会。",
          "expected": "内核强制终止目标进程；尚未落盘的数据和临时状态可能丢失。",
          "copyable": false,
          "warning": "会强制中断进程并可能造成数据或服务状态损坏，只能作为最后手段。",
          "riskLevels": [
            "processDisruption"
          ],
          "caveat": "先用只读进程列表检查 PID，并确认正常终止已失败、数据已有备份且服务可恢复。"
        }
      ],
      "components": [
        "procps-ng",
        "util-linux"
      ],
      "constraints": [
        "requires Linux with procps-ng 4.0.6 installed",
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "procps-ng-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://gitlab.com/procps-ng/procps/-/tags/v4.0.6 · man/kill.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "kill [ q\\~\\c value |\\c queue \\~value\\c ] pid \" .\\|.\\|.\" kill signal [ q\\~\\c value |\\c queue \\~value\\c ] pid-or-pgid \" .\\|.\\|.\" .br kill s \\~signal [ q\\~\\c value |\\c queue \\~value\\c ] pid-or-pgid \" .\\|.\\|.\" .br kill signal \\~signal [ q\\~\\c value |\\c queue \\~value\\c ] pid-or-pgid \"",
      "options": [
        "-s",
        "--signal",
        "-q",
        "--queue",
        "-l",
        "--list",
        "-L",
        "--table"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "last",
      "en": "show a listing of last logged in users",
      "zh": "last：show a listing of last logged in users（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-last",
      "context": "linux-system",
      "keywords": [
        "last",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 last 来完成“show a listing of last logged in users”时",
          "goal": "按固定官方版本的定义调用 last，并依据退出状态判断该操作是否完成",
          "value": "last",
          "description": "last 的官方用途是“show a listing of last logged in users”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 last；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/login-utils/last.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "aliases": [
        "lastb"
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · login-utils/last.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "last [options] [username|tty]... lastb [options] [username|tty]...",
      "options": [
        "-a",
        "--hostlast",
        "-d",
        "--dns",
        "-f",
        "--file",
        "-F",
        "--fulltimes"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "lastlog2",
      "en": "displays date of last login for all users or a specific one",
      "zh": "lastlog2：displays date of last login for all users or a specific one（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-lastlog2",
      "context": "linux-system",
      "keywords": [
        "lastlog2",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 lastlog2 来完成“displays date of last login for all users or a specific one”时",
          "goal": "按固定官方版本的定义调用 lastlog2，并依据退出状态判断该操作是否完成",
          "value": "lastlog2",
          "description": "lastlog2 的官方用途是“displays date of last login for all users or a specific one”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 lastlog2；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/misc-utils/lastlog2.8.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · misc-utils/lastlog2.8.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "lastlog2 [options]",
      "options": [
        "-a",
        "--active",
        "-b",
        "--before",
        "-C",
        "--clear",
        "-u",
        "--user"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "ldattach",
      "en": "attach a line discipline to a serial line",
      "zh": "ldattach：attach a line discipline to a serial line（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-ldattach",
      "context": "linux-system",
      "keywords": [
        "ldattach",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 ldattach 来完成“attach a line discipline to a serial line”时",
          "goal": "按固定官方版本的定义调用 ldattach，并依据退出状态判断该操作是否完成",
          "value": "ldattach",
          "description": "ldattach 的官方用途是“attach a line discipline to a serial line”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 ldattach；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/sys-utils/ldattach.8.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · sys-utils/ldattach.8.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "ldattach [-1278denoVh] [-i iflag] [-s speed] [-m mtu] ldisc device",
      "options": [
        "-1",
        "--onestopbit",
        "-2",
        "--twostopbits",
        "-7",
        "--sevenbits",
        "-8",
        "--eightbits"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "line",
      "en": "read one line",
      "zh": "line：read one line（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-line",
      "context": "linux-system",
      "keywords": [
        "line",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 line 来完成“read one line”时",
          "goal": "按固定官方版本的定义调用 line，并依据退出状态判断该操作是否完成",
          "value": "line",
          "description": "line 的官方用途是“read one line”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 line；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/text-utils/line.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · text-utils/line.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "line [-h|-V]",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "lnstat",
      "en": "lnstat unified Linux network statistics",
      "zh": "lnstat：lnstat unified Linux network statistics（来源：iproute2）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-lnstat",
      "context": "linux-system",
      "keywords": [
        "lnstat",
        "命令",
        "终端",
        "iproute2"
      ],
      "examples": [
        {
          "scenario": "需要使用 iproute2 提供的 lnstat 来完成“lnstat unified Linux network statistics”时",
          "goal": "按固定官方版本的定义调用 lnstat，并依据退出状态判断该操作是否完成",
          "value": "lnstat",
          "description": "lnstat 的官方用途是“lnstat unified Linux network statistics”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 iproute2 的定义执行 lnstat；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "iproute2-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "iproute2-repository",
              "locator": "https://git.kernel.org/pub/scm/network/iproute2/iproute2.git/tag/?h=v7.1.0/tree/man/man8/lnstat.8",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with iproute2 7.1.0 installed; optional targets depend on build features。"
        }
      ],
      "aliases": [
        "ctstat",
        "rtstat"
      ],
      "components": [
        "iproute2"
      ],
      "constraints": [
        "requires Linux with iproute2 7.1.0 installed; optional targets depend on build features"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "iproute2-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://git.kernel.org/pub/scm/network/iproute2/iproute2.git/tag/?h=v7.1.0 · man/man8/lnstat.8",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "lnstat [ options ]",
      "options": [
        "-h",
        "--help",
        "-V",
        "--version",
        "-c",
        "--count",
        "-d",
        "--dump"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "localectl",
      "en": "Control the system locale and keyboard layout settings",
      "zh": "localectl：Control the system locale and keyboard layout settings（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-localectl",
      "context": "linux-system",
      "keywords": [
        "localectl",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 localectl 来完成“Control the system locale and keyboard layout settings”时",
          "goal": "按固定官方版本的定义调用 localectl，并依据退出状态判断该操作是否完成",
          "value": "localectl",
          "description": "localectl 的官方用途是“Control the system locale and keyboard layout settings”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 localectl；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/localectl.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/localectl.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "localectl",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "logger",
      "en": "enter messages into the system log",
      "zh": "logger：enter messages into the system log（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-logger",
      "context": "linux-system",
      "keywords": [
        "logger",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 logger 来完成“enter messages into the system log”时",
          "goal": "按固定官方版本的定义调用 logger，并依据退出状态判断该操作是否完成",
          "value": "logger",
          "description": "logger 的官方用途是“enter messages into the system log”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 logger；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/misc-utils/logger.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · misc-utils/logger.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "logger [options] message",
      "options": [
        "-d",
        "--udp",
        "--server",
        "--socket",
        "-e",
        "--skip-empty",
        "--prio-prefix",
        "-f"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "login",
      "en": "begin session on the system",
      "zh": "login：begin session on the system（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-login",
      "context": "linux-system",
      "keywords": [
        "login",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 login 来完成“begin session on the system”时",
          "goal": "按固定官方版本的定义调用 login，并依据退出状态判断该操作是否完成",
          "value": "login",
          "description": "login 的官方用途是“begin session on the system”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 login；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/login-utils/login.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · login-utils/login.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "login [-p] [-s shell] [-h host] [-H] [[-f] username|UID]",
      "options": [
        "-p",
        "-f",
        "-h",
        "-H",
        "-s",
        "--shell"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "loginctl",
      "en": "Inspect systemd login sessions",
      "zh": "查看登录会话",
      "context": "linux-system",
      "platforms": [
        "linux"
      ],
      "id": "linux-loginctl",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/loginctl.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "keywords": [
        "loginctl",
        "查看登录会话",
        "Inspect systemd login sessions",
        "Linux",
        "systemd"
      ],
      "examples": [
        {
          "value": "loginctl list-sessions",
          "description": "列出 logind 管理的活动会话，用于核对当前主机的交互登录来源",
          "scenario": "核对当前主机的交互登录来源时",
          "goal": "列出 logind 管理的活动会话",
          "expected": "输出会话 ID、用户和终端等信息",
          "caveat": "仅适用于使用 systemd-logind 的发行版",
          "copyable": true,
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "systemd-man"
          ],
          "platforms": [
            "linux"
          ],
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/loginctl.html",
              "claims": [
                "value",
                "behavior",
                "expected",
                "platform",
                "caveat"
              ]
            }
          ]
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "usage": "loginctl",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "look",
      "en": "display lines beginning with a given string",
      "zh": "look：display lines beginning with a given string（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-look",
      "context": "linux-system",
      "keywords": [
        "look",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 look 来完成“display lines beginning with a given string”时",
          "goal": "按固定官方版本的定义调用 look，并依据退出状态判断该操作是否完成",
          "value": "look",
          "description": "look 的官方用途是“display lines beginning with a given string”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 look；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/misc-utils/look.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · misc-utils/look.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "look [options] string [file]",
      "options": [
        "-a",
        "--alternative",
        "-d",
        "--alphanum",
        "-f",
        "--ignore-case",
        "-t",
        "--terminate"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "losetup",
      "en": "set up and control loop devices",
      "zh": "losetup：set up and control loop devices（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-losetup",
      "context": "linux-system",
      "keywords": [
        "losetup",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 losetup 来完成“set up and control loop devices”时",
          "goal": "按固定官方版本的定义调用 losetup，并依据退出状态判断该操作是否完成",
          "value": "losetup",
          "description": "losetup 的官方用途是“set up and control loop devices”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 losetup；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": false,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/sys-utils/losetup.8.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "warning": "losetup 可能修改系统、磁盘、账号、服务或进程状态；仅在已确认对象和回滚方案后执行。",
          "riskLevels": [
            "deleteOrOverwrite"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration；执行前先用只读命令检查目标、确认影响范围并备份可恢复数据；优先在隔离环境验证。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · sys-utils/losetup.8.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "Set up a loop device: losetup [options] -f|loopdev file Get info: losetup [-l] [-a|loopdev] losetup -j file [-o offset] Recalibrate the size of a loop device: losetup -c loopdev Detach loop devices: losetup -d loopdev ... losetup -D Prevent loop devices from getting listed: loset",
      "options": [
        "-a",
        "--all",
        "--list",
        "-d",
        "--detach",
        "-D",
        "--detach-all",
        "-f"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "losetup.static",
      "en": "statically linked set up and control loop devices",
      "zh": "losetup.static：statically linked set up and control loop devices（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-losetup-static",
      "context": "linux-system",
      "keywords": [
        "losetup.static",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 losetup.static 来完成“statically linked set up and control loop devices”时",
          "goal": "按固定官方版本的定义调用 losetup.static，并依据退出状态判断该操作是否完成",
          "value": "losetup.static",
          "description": "losetup.static 的官方用途是“statically linked set up and control loop devices”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 losetup.static；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": false,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/meson.build#optional-static-target-losetup.static",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "warning": "losetup.static 可能修改系统、磁盘、账号、服务或进程状态；仅在已确认对象和回滚方案后执行。",
          "riskLevels": [
            "deleteOrOverwrite"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration；requires a util-linux 2.42.2 build with the corresponding static_programs target enabled；执行前先用只读命令检查目标、确认影响范围并备份可恢复数据；优先在隔离环境验证。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration",
        "requires a util-linux 2.42.2 build with the corresponding static_programs target enabled"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · meson.build executable('losetup.static')",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "Set up a loop device: losetup.static [options] -f|loopdev file Get info: losetup [-l] [-a|loopdev] losetup -j file [-o offset] Recalibrate the size of a loop device: losetup -c loopdev Detach loop devices: losetup -d loopdev ... losetup -D Prevent loop devices from getting listed: loset",
      "options": [
        "-a",
        "--all",
        "--list",
        "-d",
        "--detach",
        "-D",
        "--detach-all",
        "-f"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "lsblk",
      "en": "List block devices",
      "zh": "列出块设备",
      "context": "linux-system",
      "platforms": [
        "linux"
      ],
      "id": "linux-lsblk",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · misc-utils/lsblk.8.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "keywords": [
        "lsblk",
        "列出块设备",
        "List block devices",
        "Linux",
        "系统工具"
      ],
      "examples": [
        {
          "scenario": "挂载新磁盘前，需要确认设备、分区和父子关系，避免选错目标",
          "goal": "查看块设备树",
          "value": "lsblk",
          "description": "以树形结构列出块设备及实现默认列。",
          "expected": "终端显示磁盘、分区及挂载关系，不读取或改写设备内容。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · misc-utils/lsblk.8.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ]
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "usage": "lsblk [options] [device...]",
      "options": [
        "-A",
        "--noempty",
        "-a",
        "--all",
        "-b",
        "--bytes",
        "-H",
        "--list-columns"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "lsclocks",
      "en": "display system clocks",
      "zh": "lsclocks：display system clocks（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-lsclocks",
      "context": "linux-system",
      "keywords": [
        "lsclocks",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 lsclocks 来完成“display system clocks”时",
          "goal": "按固定官方版本的定义调用 lsclocks，并依据退出状态判断该操作是否完成",
          "value": "lsclocks",
          "description": "lsclocks 的官方用途是“display system clocks”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 lsclocks；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/misc-utils/lsclocks.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · misc-utils/lsclocks.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "lsclocks [option]",
      "options": [
        "-J",
        "--json",
        "-n",
        "--noheadings",
        "-o",
        "--output",
        "--output-all",
        "-r"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "lscpu",
      "en": "display information about the CPU architecture",
      "zh": "lscpu：display information about the CPU architecture（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-lscpu",
      "context": "linux-system",
      "keywords": [
        "lscpu",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 lscpu 来完成“display information about the CPU architecture”时",
          "goal": "按固定官方版本的定义调用 lscpu，并依据退出状态判断该操作是否完成",
          "value": "lscpu",
          "description": "lscpu 的官方用途是“display information about the CPU architecture”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 lscpu；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/sys-utils/lscpu.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · sys-utils/lscpu.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "lscpu [options]",
      "options": [
        "-a",
        "--all",
        "-e",
        "-p",
        "-B",
        "--bytes",
        "-b",
        "--online"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "lsfd",
      "en": "list file descriptors",
      "zh": "lsfd：list file descriptors（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-lsfd",
      "context": "linux-system",
      "keywords": [
        "lsfd",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "服务提示文件句柄耗尽，需要把占用者、描述符编号和目标文件放在同一张表里",
          "goal": "列出打开的文件描述符及其进程和目标",
          "value": "lsfd",
          "description": "使用默认列读取进程、描述符类型和目标等信息，便于定位句柄占用。",
          "expected": "终端输出当前权限可见的文件描述符表，不关闭任何描述符。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · lsfd-cmd/lsfd.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ]
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · lsfd-cmd/lsfd.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "lsfd [option]",
      "options": [
        "-l",
        "--threads",
        "-J",
        "--json",
        "-n",
        "--noheadings",
        "-o",
        "--output"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "lsipc",
      "en": "show information on IPC facilities currently employed in the system",
      "zh": "lsipc：show information on IPC facilities currently employed in the system（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-lsipc",
      "context": "linux-system",
      "keywords": [
        "lsipc",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 lsipc 来完成“show information on IPC facilities currently employed in the system”时",
          "goal": "按固定官方版本的定义调用 lsipc，并依据退出状态判断该操作是否完成",
          "value": "lsipc",
          "description": "lsipc 的官方用途是“show information on IPC facilities currently employed in the system”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 lsipc；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/sys-utils/lsipc.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · sys-utils/lsipc.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "lsipc [options]",
      "options": [
        "-i",
        "--id",
        "-m",
        "-q",
        "-s",
        "--list",
        "--raw",
        "--json"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "lsirq",
      "en": "utility to display kernel interrupt information",
      "zh": "lsirq：utility to display kernel interrupt information（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-lsirq",
      "context": "linux-system",
      "keywords": [
        "lsirq",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 lsirq 来完成“utility to display kernel interrupt information”时",
          "goal": "按固定官方版本的定义调用 lsirq，并依据退出状态判断该操作是否完成",
          "value": "lsirq",
          "description": "lsirq 的官方用途是“utility to display kernel interrupt information”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 lsirq；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/sys-utils/lsirq.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · sys-utils/lsirq.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "lsirq [options]",
      "options": [
        "-n",
        "--noheadings",
        "-i",
        "--input",
        "-o",
        "--output",
        "--help",
        "-s"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "lslocks",
      "en": "list local system locks",
      "zh": "lslocks：list local system locks（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-lslocks",
      "context": "linux-system",
      "keywords": [
        "lslocks",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "构建产物无法替换，需要确认是否有进程持有本地文件锁",
          "goal": "列出系统当前文件锁",
          "value": "lslocks",
          "description": "读取内核公开的锁信息，并关联可见的进程和路径。",
          "expected": "终端输出当前锁列表；命令不会释放或修改锁。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · misc-utils/lslocks.8.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ]
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · misc-utils/lslocks.8.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "lslocks [options]",
      "options": [
        "-b",
        "--bytes",
        "-H",
        "--list-columns",
        "--output",
        "--json",
        "--raw",
        "-i"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "lslogins",
      "en": "display information about known users in the system",
      "zh": "lslogins：display information about known users in the system（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-lslogins",
      "context": "linux-system",
      "keywords": [
        "lslogins",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 lslogins 来完成“display information about known users in the system”时",
          "goal": "按固定官方版本的定义调用 lslogins，并依据退出状态判断该操作是否完成",
          "value": "lslogins",
          "description": "lslogins 的官方用途是“display information about known users in the system”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 lslogins；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/login-utils/lslogins.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · login-utils/lslogins.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "lslogins [options] [-s|-u[=UID]] [-g groups] [-l logins] [username]",
      "options": [
        "-a",
        "--acc-expiration",
        "--btmp-file",
        "-c",
        "--colon-separate",
        "-e",
        "--export",
        "--shell"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "lsmem",
      "en": "list the ranges of available memory with their online status",
      "zh": "lsmem：list the ranges of available memory with their online status（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-lsmem",
      "context": "linux-system",
      "keywords": [
        "lsmem",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 lsmem 来完成“list the ranges of available memory with their online status”时",
          "goal": "按固定官方版本的定义调用 lsmem，并依据退出状态判断该操作是否完成",
          "value": "lsmem",
          "description": "lsmem 的官方用途是“list the ranges of available memory with their online status”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 lsmem；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/sys-utils/lsmem.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · sys-utils/lsmem.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "lsmem [options]",
      "options": [
        "-a",
        "--all",
        "-b",
        "--bytes",
        "-J",
        "--json",
        "-n",
        "--noheadings"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "lsns",
      "en": "list namespaces",
      "zh": "lsns：list namespaces（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-lsns",
      "context": "linux-system",
      "keywords": [
        "lsns",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 lsns 来完成“list namespaces”时",
          "goal": "按固定官方版本的定义调用 lsns，并依据退出状态判断该操作是否完成",
          "value": "lsns",
          "description": "lsns 的官方用途是“list namespaces”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 lsns；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/sys-utils/lsns.8.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · sys-utils/lsns.8.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "lsns [options] [namespace ID]",
      "options": [
        "-H",
        "--list-columns",
        "--output",
        "--json",
        "--raw",
        "-J",
        "-l",
        "--list"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "machinectl",
      "en": "Control the systemd machine manager",
      "zh": "machinectl：Control the systemd machine manager（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-machinectl",
      "context": "linux-system",
      "keywords": [
        "machinectl",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 machinectl 来完成“Control the systemd machine manager”时",
          "goal": "按固定官方版本的定义调用 machinectl，并依据退出状态判断该操作是否完成",
          "value": "machinectl",
          "description": "machinectl 的官方用途是“Control the systemd machine manager”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 machinectl；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/machinectl.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/machinectl.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "machinectl",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "mcookie",
      "en": "generate magic cookies for xauth",
      "zh": "mcookie：generate magic cookies for xauth（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-mcookie",
      "context": "linux-system",
      "keywords": [
        "mcookie",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 mcookie 来完成“generate magic cookies for xauth”时",
          "goal": "按固定官方版本的定义调用 mcookie，并依据退出状态判断该操作是否完成",
          "value": "mcookie",
          "description": "mcookie 的官方用途是“generate magic cookies for xauth”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 mcookie；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/misc-utils/mcookie.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · misc-utils/mcookie.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "mcookie [options]",
      "options": [
        "-f",
        "--file",
        "-m",
        "--max-size",
        "-v",
        "--verbose"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "mesg",
      "en": "display (or do not display) messages from other users",
      "zh": "mesg：display (or do not display) messages from other users（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-mesg",
      "context": "linux-system",
      "keywords": [
        "mesg",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 mesg 来完成“display (or do not display) messages from other users”时",
          "goal": "按固定官方版本的定义调用 mesg，并依据退出状态判断该操作是否完成",
          "value": "mesg",
          "description": "mesg 的官方用途是“display (or do not display) messages from other users”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 mesg；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/term-utils/mesg.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · term-utils/mesg.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "mesg [option] [n|y]",
      "options": [
        "-v",
        "--verbose"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "mkfs",
      "en": "build a Linux filesystem",
      "zh": "mkfs：build a Linux filesystem（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-mkfs",
      "context": "linux-system",
      "keywords": [
        "mkfs",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 mkfs 来完成“build a Linux filesystem”时",
          "goal": "按固定官方版本的定义调用 mkfs，并依据退出状态判断该操作是否完成",
          "value": "mkfs",
          "description": "mkfs 的官方用途是“build a Linux filesystem”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 mkfs；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": false,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/disk-utils/mkfs.8.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "warning": "mkfs 可能修改系统、磁盘、账号、服务或进程状态；仅在已确认对象和回滚方案后执行。",
          "riskLevels": [
            "deleteOrOverwrite"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration；执行前先用只读命令检查目标、确认影响范围并备份可恢复数据；优先在隔离环境验证。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · disk-utils/mkfs.8.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "mkfs [options] [-t type] [fs-options] device [size]",
      "options": [
        "-t",
        "--type",
        "-V",
        "--verbose"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "mkfs.bfs",
      "en": "make an SCO bfs filesystem",
      "zh": "mkfs.bfs：make an SCO bfs filesystem（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-mkfs-bfs",
      "context": "linux-system",
      "keywords": [
        "mkfs.bfs",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 mkfs.bfs 来完成“make an SCO bfs filesystem”时",
          "goal": "按固定官方版本的定义调用 mkfs.bfs，并依据退出状态判断该操作是否完成",
          "value": "mkfs.bfs",
          "description": "mkfs.bfs 的官方用途是“make an SCO bfs filesystem”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 mkfs.bfs；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": false,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/disk-utils/mkfs.bfs.8.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "warning": "mkfs.bfs 可能修改系统、磁盘、账号、服务或进程状态；仅在已确认对象和回滚方案后执行。",
          "riskLevels": [
            "deleteOrOverwrite"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration；执行前先用只读命令检查目标、确认影响范围并备份可恢复数据；优先在隔离环境验证。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · disk-utils/mkfs.bfs.8.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "mkfs.bfs [options] device [block-count]",
      "options": [
        "-N",
        "--inodes",
        "-V",
        "--vname",
        "-F",
        "--fname",
        "--lock",
        "-v"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "mkfs.cramfs",
      "en": "make compressed ROM file system",
      "zh": "mkfs.cramfs：make compressed ROM file system（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-mkfs-cramfs",
      "context": "linux-system",
      "keywords": [
        "mkfs.cramfs",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 mkfs.cramfs 来完成“make compressed ROM file system”时",
          "goal": "按固定官方版本的定义调用 mkfs.cramfs，并依据退出状态判断该操作是否完成",
          "value": "mkfs.cramfs",
          "description": "mkfs.cramfs 的官方用途是“make compressed ROM file system”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 mkfs.cramfs；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": false,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/disk-utils/mkfs.cramfs.8.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "warning": "mkfs.cramfs 可能修改系统、磁盘、账号、服务或进程状态；仅在已确认对象和回滚方案后执行。",
          "riskLevels": [
            "deleteOrOverwrite"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration；执行前先用只读命令检查目标、确认影响范围并备份可恢复数据；优先在隔离环境验证。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · disk-utils/mkfs.cramfs.8.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "mkfs.cramfs [options] directory file",
      "options": [
        "-v",
        "-E",
        "-b",
        "-e",
        "-N",
        "-i",
        "-n",
        "-p"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "mkfs.minix",
      "en": "make a Minix filesystem",
      "zh": "mkfs.minix：make a Minix filesystem（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-mkfs-minix",
      "context": "linux-system",
      "keywords": [
        "mkfs.minix",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 mkfs.minix 来完成“make a Minix filesystem”时",
          "goal": "按固定官方版本的定义调用 mkfs.minix，并依据退出状态判断该操作是否完成",
          "value": "mkfs.minix",
          "description": "mkfs.minix 的官方用途是“make a Minix filesystem”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 mkfs.minix；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": false,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/disk-utils/mkfs.minix.8.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "warning": "mkfs.minix 可能修改系统、磁盘、账号、服务或进程状态；仅在已确认对象和回滚方案后执行。",
          "riskLevels": [
            "deleteOrOverwrite"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration；执行前先用只读命令检查目标、确认影响范围并备份可恢复数据；优先在隔离环境验证。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · disk-utils/mkfs.minix.8.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "mkfs.minix [options] device [size-in-blocks]",
      "options": [
        "-c",
        "--check",
        "-n",
        "--namelength",
        "--lock",
        "-i",
        "--inodes",
        "-l"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "mkswap",
      "en": "set up a Linux swap area",
      "zh": "mkswap：set up a Linux swap area（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-mkswap",
      "context": "linux-system",
      "keywords": [
        "mkswap",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 mkswap 来完成“set up a Linux swap area”时",
          "goal": "按固定官方版本的定义调用 mkswap，并依据退出状态判断该操作是否完成",
          "value": "mkswap",
          "description": "mkswap 的官方用途是“set up a Linux swap area”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 mkswap；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": false,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/disk-utils/mkswap.8.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "warning": "mkswap 可能修改系统、磁盘、账号、服务或进程状态；仅在已确认对象和回滚方案后执行。",
          "riskLevels": [
            "deleteOrOverwrite"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration；执行前先用只读命令检查目标、确认影响范围并备份可恢复数据；优先在隔离环境验证。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · disk-utils/mkswap.8.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "mkswap [options] device [blocks] mkswap [options] --size size --file file",
      "options": [
        "-c",
        "--check",
        "-F",
        "--file",
        "-f",
        "--force",
        "-q",
        "--quiet"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "more",
      "en": "display the contents of a file in a terminal",
      "zh": "more：display the contents of a file in a terminal（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-more",
      "context": "linux-system",
      "keywords": [
        "more",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 more 来完成“display the contents of a file in a terminal”时",
          "goal": "按固定官方版本的定义调用 more，并依据退出状态判断该操作是否完成",
          "value": "more",
          "description": "more 的官方用途是“display the contents of a file in a terminal”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 more；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/text-utils/more.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · text-utils/more.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "more [options] file ...",
      "options": [
        "-d",
        "--silent",
        "-l",
        "--logical",
        "-e",
        "--exit-on-eof",
        "-f",
        "--no-pause"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "mount",
      "en": "mount a filesystem",
      "zh": "mount：mount a filesystem（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-mount",
      "context": "linux-system",
      "keywords": [
        "mount",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 mount 来完成“mount a filesystem”时",
          "goal": "按固定官方版本的定义调用 mount，并依据退出状态判断该操作是否完成",
          "value": "mount",
          "description": "mount 的官方用途是“mount a filesystem”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 mount；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": false,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/sys-utils/mount.8.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "warning": "mount 可能修改系统、磁盘、账号、服务或进程状态；仅在已确认对象和回滚方案后执行。",
          "riskLevels": [
            "deleteOrOverwrite"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration；执行前先用只读命令检查目标、确认影响范围并备份可恢复数据；优先在隔离环境验证。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · sys-utils/mount.8.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "mount [-h|-V] mount [-l] [-t fstype] mount -a [-F] [-fnrsvw] [-t fstype] [-O optlist] mount [-fnrsvw] [-o options] device|mountpoint mount [-fnrsvw] [-o options] [-t fstype] device mountpoint mount --bind|--rbind|--move olddir newdir mount --make-[r]{shared|slave|private|unbindab",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "mount.static",
      "en": "statically linked mount a filesystem",
      "zh": "mount.static：statically linked mount a filesystem（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-mount-static",
      "context": "linux-system",
      "keywords": [
        "mount.static",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 mount.static 来完成“statically linked mount a filesystem”时",
          "goal": "按固定官方版本的定义调用 mount.static，并依据退出状态判断该操作是否完成",
          "value": "mount.static",
          "description": "mount.static 的官方用途是“statically linked mount a filesystem”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 mount.static；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/meson.build#optional-static-target-mount.static",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration；requires a util-linux 2.42.2 build with the corresponding static_programs target enabled。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration",
        "requires a util-linux 2.42.2 build with the corresponding static_programs target enabled"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · meson.build executable('mount.static')",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "mount.static [-h|-V] mount [-l] [-t fstype] mount -a [-F] [-fnrsvw] [-t fstype] [-O optlist] mount [-fnrsvw] [-o options] device|mountpoint mount [-fnrsvw] [-o options] [-t fstype] device mountpoint mount --bind|--rbind|--move olddir newdir mount --make-[r]{shared|slave|private|unbindab",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "mountpoint",
      "en": "see if a directory or file is a mountpoint",
      "zh": "mountpoint：see if a directory or file is a mountpoint（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-mountpoint",
      "context": "linux-system",
      "keywords": [
        "mountpoint",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 mountpoint 来完成“see if a directory or file is a mountpoint”时",
          "goal": "按固定官方版本的定义调用 mountpoint，并依据退出状态判断该操作是否完成",
          "value": "mountpoint",
          "description": "mountpoint 的官方用途是“see if a directory or file is a mountpoint”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 mountpoint；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/sys-utils/mountpoint.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · sys-utils/mountpoint.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "mountpoint [-d|-q] directory|file mountpoint -x device",
      "options": [
        "-d",
        "--fs-devno",
        "-q",
        "--quiet",
        "--nofollow",
        "-x",
        "--devno",
        "--show"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "namei",
      "en": "follow a pathname until a terminal point is found",
      "zh": "namei：follow a pathname until a terminal point is found（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-namei",
      "context": "linux-system",
      "keywords": [
        "namei",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "服务能看到文件但无法打开，需要逐级核对路径组件、符号链接和目录权限",
          "goal": "以长格式解析日志路径的每一级",
          "value": "namei -l ./var/log/app.log",
          "description": "-l 为路径中的每个组件展示类型、权限和所有者信息。",
          "expected": "终端逐级输出路径解析结果，目标路径和权限保持不变。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · misc-utils/namei.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ]
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · misc-utils/namei.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "namei [options] pathname...",
      "options": [
        "-l",
        "--long",
        "-m",
        "-o",
        "-v",
        "--modes",
        "-n",
        "--nosymlinks"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "netshaper",
      "en": "netshaper show / manipulate network device hardware shaping configuration",
      "zh": "netshaper：netshaper show / manipulate network device hardware shaping configuration（来源：iproute2）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-netshaper",
      "context": "linux-system",
      "keywords": [
        "netshaper",
        "命令",
        "终端",
        "iproute2"
      ],
      "examples": [
        {
          "scenario": "需要使用 iproute2 提供的 netshaper 来完成“netshaper show / manipulate network device hardware shaping configuration”时",
          "goal": "按固定官方版本的定义调用 netshaper，并依据退出状态判断该操作是否完成",
          "value": "netshaper",
          "description": "netshaper 的官方用途是“netshaper show / manipulate network device hardware shaping configuration”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 iproute2 的定义执行 netshaper；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "iproute2-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "iproute2-repository",
              "locator": "https://git.kernel.org/pub/scm/network/iproute2/iproute2.git/tag/?h=v7.1.0/tree/man/man8/netshaper.8",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with iproute2 7.1.0 installed; optional targets depend on build features。"
        }
      ],
      "components": [
        "iproute2"
      ],
      "constraints": [
        "requires Linux with iproute2 7.1.0 installed; optional targets depend on build features"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "iproute2-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://git.kernel.org/pub/scm/network/iproute2/iproute2.git/tag/?h=v7.1.0 · man/man8/netshaper.8",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": ".ad l .in +8 .ti -8 netshaper \"[ \" OPTIONS \" ] { \" COMMAND \" | \" help \" }\" .sp .ti -8 OPTIONS \" := { \" V[ersion] | c[olor] | help } .ti -8 \"netshaper set\" dev DEV handle scope HANDLE_SCOPE \"[ \" id HANDLE_ID \" ]\" bw-max BW_MAX .ti -8 \"netshaper\" \" { \" show \" | \" delete \" }\" dev DE",
      "options": [
        "-V",
        "-Version",
        "-c",
        "-help"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "networkctl",
      "en": "Query or modify the status of network links",
      "zh": "networkctl：Query or modify the status of network links（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-networkctl",
      "context": "linux-system",
      "keywords": [
        "networkctl",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "网卡已经存在但没有地址，需要先确认 systemd-networkd 看到的链路配置状态",
          "goal": "查看网络链路的总体状态",
          "value": "networkctl status",
          "description": "status 子命令读取链路、地址、网关和在线状态摘要。",
          "expected": "终端显示网络状态信息，不启动、停止或重新配置链路。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/networkctl.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ]
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "build option: ENABLE_NETWORKD",
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/networkctl.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "networkctl",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "newgrp",
      "en": "log in to a new group",
      "zh": "newgrp：log in to a new group（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-newgrp",
      "context": "linux-system",
      "keywords": [
        "newgrp",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 newgrp 来完成“log in to a new group”时",
          "goal": "按固定官方版本的定义调用 newgrp，并依据退出状态判断该操作是否完成",
          "value": "newgrp",
          "description": "newgrp 的官方用途是“log in to a new group”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 newgrp；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/login-utils/newgrp.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · login-utils/newgrp.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "newgrp [group [command]] newgrp [-c command] [group]",
      "options": [
        "-c",
        "--command"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "nologin",
      "en": "politely refuse a login",
      "zh": "nologin：politely refuse a login（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-nologin",
      "context": "linux-system",
      "keywords": [
        "nologin",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 nologin 来完成“politely refuse a login”时",
          "goal": "按固定官方版本的定义调用 nologin，并依据退出状态判断该操作是否完成",
          "value": "nologin",
          "description": "nologin 的官方用途是“politely refuse a login”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 nologin；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/login-utils/nologin.8.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · login-utils/nologin.8.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "nologin [-V] [-h]",
      "options": [
        "-c",
        "--command",
        "--init-file",
        "-i",
        "--interactive",
        "-l",
        "--login",
        "--noprofile"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "nsenter",
      "en": "run program in different namespaces",
      "zh": "nsenter：run program in different namespaces（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-nsenter",
      "context": "linux-system",
      "keywords": [
        "nsenter",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "已确认容器主进程 PID，需要进入容器命名空间核对实际文件视图",
          "goal": "在目标容器命名空间的挂载视图中启动一个 shell",
          "value": "nsenter --mount --target 4321 /bin/sh",
          "description": "--target 选择进程，--mount 加入其挂载命名空间，再运行嵌套的 shell。",
          "expected": "权限允许时启动一个看到目标挂载视图的 shell；退出 shell 后返回原命名空间。",
          "copyable": false,
          "warning": "进入目标命名空间后执行的命令可能修改容器或宿主文件；先核对 PID 并保持只读排查。",
          "caveat": "先检查 PID、容器身份和挂载关系；进入后只读核对，避免对共享路径执行写操作。",
          "riskLevels": [
            "processDisruption"
          ],
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · sys-utils/nsenter.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ]
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · sys-utils/nsenter.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "nsenter [options] [program [arguments]]",
      "options": [
        "-a",
        "--all",
        "--mount",
        "-t",
        "--target",
        "-m",
        "-u",
        "--uts"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "nsenter.static",
      "en": "statically linked run program in different namespaces",
      "zh": "nsenter.static：statically linked run program in different namespaces（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-nsenter-static",
      "context": "linux-system",
      "keywords": [
        "nsenter.static",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 nsenter.static 来完成“statically linked run program in different namespaces”时",
          "goal": "按固定官方版本的定义调用 nsenter.static，并依据退出状态判断该操作是否完成",
          "value": "nsenter.static",
          "description": "nsenter.static 的官方用途是“statically linked run program in different namespaces”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 nsenter.static；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/meson.build#optional-static-target-nsenter.static",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration；requires a util-linux 2.42.2 build with the corresponding static_programs target enabled。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration",
        "requires a util-linux 2.42.2 build with the corresponding static_programs target enabled"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · meson.build executable('nsenter.static')",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "nsenter.static [options] [program [arguments]]",
      "options": [
        "-a",
        "--all",
        "--mount",
        "-t",
        "--target",
        "-m",
        "-u",
        "--uts"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "nstat",
      "en": "nstat",
      "zh": "nstat：nstat（来源：iproute2）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-nstat",
      "context": "linux-system",
      "keywords": [
        "nstat",
        "命令",
        "终端",
        "iproute2"
      ],
      "examples": [
        {
          "scenario": "需要使用 iproute2 提供的 nstat 来完成“nstat”时",
          "goal": "按固定官方版本的定义调用 nstat，并依据退出状态判断该操作是否完成",
          "value": "nstat",
          "description": "nstat 的官方用途是“nstat”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 iproute2 的定义执行 nstat；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "iproute2-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "iproute2-repository",
              "locator": "https://git.kernel.org/pub/scm/network/iproute2/iproute2.git/tag/?h=v7.1.0/tree/man/man8/nstat.8",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with iproute2 7.1.0 installed; optional targets depend on build features。"
        }
      ],
      "components": [
        "iproute2"
      ],
      "constraints": [
        "requires Linux with iproute2 7.1.0 installed; optional targets depend on build features"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "iproute2-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://git.kernel.org/pub/scm/network/iproute2/iproute2.git/tag/?h=v7.1.0 · man/man8/nstat.8",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "nstat",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "oomctl",
      "en": "Analyze the state stored in systemd-oomd",
      "zh": "oomctl：Analyze the state stored in systemd-oomd（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-oomctl",
      "context": "linux-system",
      "keywords": [
        "oomctl",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 oomctl 来完成“Analyze the state stored in systemd-oomd”时",
          "goal": "按固定官方版本的定义调用 oomctl，并依据退出状态判断该操作是否完成",
          "value": "oomctl",
          "description": "oomctl 的官方用途是“Analyze the state stored in systemd-oomd”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 oomctl；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/oomctl.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/oomctl.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "oomctl",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "partx",
      "en": "tell the kernel about the presence and numbering of on-disk partitions",
      "zh": "partx：tell the kernel about the presence and numbering of on-disk partitions（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-partx",
      "context": "linux-system",
      "keywords": [
        "partx",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 partx 来完成“tell the kernel about the presence and numbering of on-disk partitions”时",
          "goal": "按固定官方版本的定义调用 partx，并依据退出状态判断该操作是否完成",
          "value": "partx",
          "description": "partx 的官方用途是“tell the kernel about the presence and numbering of on-disk partitions”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 partx；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/disk-utils/partx.8.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · disk-utils/partx.8.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "partx [-a|-d|-P|-r|-s|-u] [-t type] [-n M:N] [-] disk partx [-a|-d|-P|-r|-s|-u] [-t type] partition [disk]",
      "options": [
        "-a",
        "--add",
        "-b",
        "--bytes",
        "-d",
        "--delete",
        "--nr",
        "-g"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "partx.static",
      "en": "statically linked tell the kernel about the presence and numbering of on-disk partitions",
      "zh": "partx.static：statically linked tell the kernel about the presence and numbering of on-disk partitions（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-partx-static",
      "context": "linux-system",
      "keywords": [
        "partx.static",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 partx.static 来完成“statically linked tell the kernel about the presence and numbering of on-disk partitions”时",
          "goal": "按固定官方版本的定义调用 partx.static，并依据退出状态判断该操作是否完成",
          "value": "partx.static",
          "description": "partx.static 的官方用途是“statically linked tell the kernel about the presence and numbering of on-disk partitions”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 partx.static；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/meson.build#optional-static-target-partx.static",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration；requires a util-linux 2.42.2 build with the corresponding static_programs target enabled。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration",
        "requires a util-linux 2.42.2 build with the corresponding static_programs target enabled"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · meson.build executable('partx.static')",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "partx.static [-a|-d|-P|-r|-s|-u] [-t type] [-n M:N] [-] disk partx [-a|-d|-P|-r|-s|-u] [-t type] partition [disk]",
      "options": [
        "-a",
        "--add",
        "-b",
        "--bytes",
        "-d",
        "--delete",
        "--nr",
        "-g"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "pg",
      "en": "browse pagewise through text files",
      "zh": "pg：browse pagewise through text files（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-pg",
      "context": "linux-system",
      "keywords": [
        "pg",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 pg 来完成“browse pagewise through text files”时",
          "goal": "按固定官方版本的定义调用 pg，并依据退出状态判断该操作是否完成",
          "value": "pg",
          "description": "pg 的官方用途是“browse pagewise through text files”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 pg；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/text-utils/pg.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · text-utils/pg.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "pg -amount -p prompt -cefnrs +line +/pattern/ file ...",
      "options": [
        "-c",
        "-e",
        "-f",
        "-n",
        "-p",
        "-r",
        "-s"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "pgrep",
      "en": "Find processes by name",
      "zh": "按名称查找进程",
      "context": "linux-system",
      "platforms": [
        "linux"
      ],
      "id": "linux-pgrep",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "procps-ng-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://gitlab.com/procps-ng/procps/-/tags/v4.0.6 · man/pgrep.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "keywords": [
        "pgrep",
        "按名称查找进程",
        "Find processes by name",
        "Linux",
        "系统工具"
      ],
      "examples": [
        {
          "scenario": "同一主机运行多个 Node.js 服务，需要按名称核对 PID 和启动命令",
          "goal": "列出名称匹配的进程及命令行",
          "value": "pgrep -a node",
          "description": "-a 在 PID 旁显示命令行，帮助区分同名进程。",
          "expected": "终端输出所有匹配进程的 PID 与命令行；没有匹配时不输出并返回非零状态。",
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
              "locator": "https://gitlab.com/procps-ng/procps/-/tags/v4.0.6 · man/pgrep.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ]
        }
      ],
      "components": [
        "procps-ng"
      ],
      "constraints": [
        "requires Linux with procps-ng 4.0.6 installed"
      ],
      "usage": "pgrep [ option \" .\\|.\\|.]\" pattern pkill [ option \" .\\|.\\|.]\" pattern pidwait [ option \" .\\|.\\|.]\" pattern",
      "options": [
        "--signal",
        "--require",
        "-handler",
        "-a",
        "--list",
        "-full",
        "-A",
        "--ignore-ancestors"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "pidof",
      "en": "Find process IDs for a program",
      "zh": "查找程序的进程 ID",
      "context": "linux-system",
      "platforms": [
        "linux"
      ],
      "id": "linux-pidof",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "procps-ng-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://gitlab.com/procps-ng/procps/-/tags/v4.0.6 · man/pidof.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "keywords": [
        "pidof",
        "查找程序的进程 ID",
        "Find process IDs for a program",
        "Linux",
        "系统工具"
      ],
      "examples": [
        {
          "value": "pidof sshd",
          "description": "返回指定程序的一个或多个 PID，用于脚本需要确认 sshd 是否正在运行",
          "scenario": "脚本需要确认 sshd 是否正在运行时",
          "goal": "返回指定程序的一个或多个 PID",
          "expected": "运行时输出 PID；未找到时以非零状态退出",
          "caveat": "不同发行版可能由 procps-ng 或 sysvinit 提供实现",
          "copyable": true,
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "procps-ng-repository"
          ],
          "platforms": [
            "linux"
          ],
          "groundingRefs": [
            {
              "sourceId": "procps-ng-repository",
              "locator": "https://gitlab.com/procps-ng/procps/-/blob/master/man/pidof.1",
              "claims": [
                "value",
                "behavior",
                "expected",
                "platform",
                "caveat"
              ]
            }
          ]
        }
      ],
      "components": [
        "procps-ng"
      ],
      "constraints": [
        "requires Linux with procps-ng 4.0.6 installed"
      ],
      "usage": "pidof [ s ] [ c ] [ q ] [ w ] [ x ] [ o omitpid [,.\\|.\\|.]] .\\|.\\|. [ t ] [ S separator ] program \" .\\|.\\|.\"",
      "options": [
        "-s",
        "-c",
        "-q",
        "-w",
        "-x",
        "-t",
        "-d"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "pidwait",
      "en": "pidwait",
      "zh": "pidwait：pidwait（来源：procps-ng）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-pidwait",
      "context": "linux-system",
      "keywords": [
        "pidwait",
        "命令",
        "终端",
        "procps-ng"
      ],
      "examples": [
        {
          "scenario": "需要使用 procps-ng 提供的 pidwait 来完成“pidwait”时",
          "goal": "按固定官方版本的定义调用 pidwait，并依据退出状态判断该操作是否完成",
          "value": "pidwait",
          "description": "pidwait 的官方用途是“pidwait”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 procps-ng 的定义执行 pidwait；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "procps-ng-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "procps-ng-repository",
              "locator": "https://gitlab.com/procps-ng/procps/-/tags/v4.0.6/man/pidwait.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with procps-ng 4.0.6 installed。"
        }
      ],
      "components": [
        "procps-ng"
      ],
      "constraints": [
        "requires Linux with procps-ng 4.0.6 installed"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "procps-ng-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://gitlab.com/procps-ng/procps/-/tags/v4.0.6 · man/pidwait.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "pidwait",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "pipesz",
      "en": "set or examine pipe and FIFO buffer sizes",
      "zh": "pipesz：set or examine pipe and FIFO buffer sizes（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-pipesz",
      "context": "linux-system",
      "keywords": [
        "pipesz",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 pipesz 来完成“set or examine pipe and FIFO buffer sizes”时",
          "goal": "按固定官方版本的定义调用 pipesz，并依据退出状态判断该操作是否完成",
          "value": "pipesz",
          "description": "pipesz 的官方用途是“set or examine pipe and FIFO buffer sizes”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 pipesz；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/misc-utils/pipesz.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · misc-utils/pipesz.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "pipesz [options] [--set size] [--] [command [argument...]] pipesz [options] --get",
      "options": [
        "-g",
        "--get",
        "--file",
        "--fd",
        "--set",
        "-s",
        "-f",
        "-n"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "pivot_root",
      "en": "change the root filesystem",
      "zh": "pivot_root：change the root filesystem（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-pivot_root",
      "context": "linux-system",
      "keywords": [
        "pivot_root",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 pivot_root 来完成“change the root filesystem”时",
          "goal": "按固定官方版本的定义调用 pivot_root，并依据退出状态判断该操作是否完成",
          "value": "pivot_root",
          "description": "pivot_root 的官方用途是“change the root filesystem”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 pivot_root；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": false,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/sys-utils/pivot_root.8.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "warning": "pivot_root 可能修改系统、磁盘、账号、服务或进程状态；仅在已确认对象和回滚方案后执行。",
          "riskLevels": [
            "deleteOrOverwrite"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration；执行前先用只读命令检查目标、确认影响范围并备份可恢复数据；优先在隔离环境验证。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · sys-utils/pivot_root.8.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "pivotroot newroot putold",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "pkill",
      "en": "Signal processes by name",
      "zh": "按名称向进程发送信号",
      "context": "linux-system",
      "platforms": [
        "linux"
      ],
      "id": "linux-pkill",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "procps-ng-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://gitlab.com/procps-ng/procps/-/tags/v4.0.6 · man/pkill.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "keywords": [
        "pkill",
        "按名称向进程发送信号",
        "Signal processes by name",
        "Linux",
        "系统工具"
      ],
      "examples": [
        {
          "scenario": "已确认测试工作进程可以停止，需要按进程名请求它们正常退出",
          "goal": "向名称匹配的 example-worker 进程发送默认终止信号",
          "value": "pkill example-worker",
          "description": "按进程名匹配并发送终止信号，可能同时影响多个同名进程。",
          "expected": "所有匹配进程收到终止信号；没有匹配时返回非零状态。",
          "copyable": false,
          "warning": "会中断同名进程；先用 pgrep -a example-worker 核对 PID、命令行和影响范围。",
          "caveat": "先用只读的 pgrep -a example-worker 检查全部匹配项，并确认这些进程都可以恢复。",
          "riskLevels": [
            "processDisruption"
          ],
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
              "locator": "https://gitlab.com/procps-ng/procps/-/tags/v4.0.6 · man/pkill.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ]
        }
      ],
      "components": [
        "procps-ng"
      ],
      "constraints": [
        "requires Linux with procps-ng 4.0.6 installed"
      ],
      "usage": "pkill",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "pmap",
      "en": "pmap report memory map of a process",
      "zh": "pmap：pmap report memory map of a process（来源：procps-ng）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-pmap",
      "context": "linux-system",
      "keywords": [
        "pmap",
        "命令",
        "终端",
        "procps-ng"
      ],
      "examples": [
        {
          "scenario": "需要使用 procps-ng 提供的 pmap 来完成“pmap report memory map of a process”时",
          "goal": "按固定官方版本的定义调用 pmap，并依据退出状态判断该操作是否完成",
          "value": "pmap",
          "description": "pmap 的官方用途是“pmap report memory map of a process”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 procps-ng 的定义执行 pmap；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "procps-ng-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "procps-ng-repository",
              "locator": "https://gitlab.com/procps-ng/procps/-/tags/v4.0.6/man/pmap.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with procps-ng 4.0.6 installed。"
        }
      ],
      "components": [
        "procps-ng"
      ],
      "constraints": [
        "requires Linux with procps-ng 4.0.6 installed"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "procps-ng-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://gitlab.com/procps-ng/procps/-/tags/v4.0.6 · man/pmap.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "pmap [ option \" .\\|.\\|.]\" pid \" .\\|.\\|.\"",
      "options": [
        "-x",
        "--extended",
        "-d",
        "--device",
        "-q",
        "--quiet",
        "-A",
        "--range"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "portablectl",
      "en": "Attach, detach or inspect portable service images",
      "zh": "portablectl：Attach, detach or inspect portable service images（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-portablectl",
      "context": "linux-system",
      "keywords": [
        "portablectl",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 portablectl 来完成“Attach, detach or inspect portable service images”时",
          "goal": "按固定官方版本的定义调用 portablectl，并依据退出状态判断该操作是否完成",
          "value": "portablectl",
          "description": "portablectl 的官方用途是“Attach, detach or inspect portable service images”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 portablectl；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/portablectl.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/portablectl.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "portablectl",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "prlimit",
      "en": "get and set process resource limits",
      "zh": "prlimit：get and set process resource limits（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-prlimit",
      "context": "linux-system",
      "keywords": [
        "prlimit",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "服务报告打开文件过多，需要先只读查看目标进程当前的资源上限",
          "goal": "读取 PID 4321 的资源限制",
          "value": "prlimit --pid 4321",
          "description": "只指定 --pid 而不提供新限制时，查询目标进程的资源上限。",
          "expected": "终端输出该进程的软限制和硬限制；进程限制保持不变。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · sys-utils/prlimit.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ]
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · sys-utils/prlimit.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "prlimit [options] [--resource[=limits]] [--pid PID] prlimit [options] [--resource[=limits]] command [argument...]",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "ps",
      "en": "ps report a snapshot of the current processes.",
      "zh": "ps：ps report a snapshot of the current processes.（来源：procps-ng）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-ps",
      "context": "linux-system",
      "keywords": [
        "ps",
        "命令",
        "终端",
        "procps-ng"
      ],
      "examples": [
        {
          "scenario": "需要使用 procps-ng 提供的 ps 来完成“ps report a snapshot of the current processes”时",
          "goal": "按固定官方版本的定义调用 ps，并依据退出状态判断该操作是否完成",
          "value": "ps",
          "description": "ps 的官方用途是“ps report a snapshot of the current processes”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 procps-ng 的定义执行 ps；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "procps-ng-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "procps-ng-repository",
              "locator": "https://gitlab.com/procps-ng/procps/-/tags/v4.0.6/man/ps.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with procps-ng 4.0.6 installed。"
        }
      ],
      "components": [
        "procps-ng"
      ],
      "constraints": [
        "requires Linux with procps-ng 4.0.6 installed"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "procps-ng-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://gitlab.com/procps-ng/procps/-/tags/v4.0.6 · man/ps.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "ps [ option \" .\\|.\\|.]\"",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "pwdx",
      "en": "pwdx report current working directory of a process",
      "zh": "pwdx：pwdx report current working directory of a process（来源：procps-ng）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-pwdx",
      "context": "linux-system",
      "keywords": [
        "pwdx",
        "命令",
        "终端",
        "procps-ng"
      ],
      "examples": [
        {
          "scenario": "需要使用 procps-ng 提供的 pwdx 来完成“pwdx report current working directory of a process”时",
          "goal": "按固定官方版本的定义调用 pwdx，并依据退出状态判断该操作是否完成",
          "value": "pwdx",
          "description": "pwdx 的官方用途是“pwdx report current working directory of a process”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 procps-ng 的定义执行 pwdx；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "procps-ng-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "procps-ng-repository",
              "locator": "https://gitlab.com/procps-ng/procps/-/tags/v4.0.6/man/pwdx.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with procps-ng 4.0.6 installed。"
        }
      ],
      "components": [
        "procps-ng"
      ],
      "constraints": [
        "requires Linux with procps-ng 4.0.6 installed"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "procps-ng-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://gitlab.com/procps-ng/procps/-/tags/v4.0.6 · man/pwdx.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "pwdx [ option \" .\\|.\\|.]\" pid \" .\\|.\\|.\"",
      "options": [
        "-V",
        "--version",
        "-h",
        "--help"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "raw",
      "en": "bind a Linux raw character device",
      "zh": "raw：bind a Linux raw character device（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-raw",
      "context": "linux-system",
      "keywords": [
        "raw",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 raw 来完成“bind a Linux raw character device”时",
          "goal": "按固定官方版本的定义调用 raw，并依据退出状态判断该操作是否完成",
          "value": "raw",
          "description": "raw 的官方用途是“bind a Linux raw character device”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 raw；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/disk-utils/raw.8.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · disk-utils/raw.8.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "raw /dev/raw/raw raw /dev/raw/raw /dev/ raw -q /dev/raw/raw raw -qa",
      "options": [
        "-q",
        "--query",
        "-a",
        "--all"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "rdma",
      "en": "rdma RDMA tool",
      "zh": "rdma：rdma RDMA tool（来源：iproute2）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-rdma",
      "context": "linux-system",
      "keywords": [
        "rdma",
        "命令",
        "终端",
        "iproute2"
      ],
      "examples": [
        {
          "scenario": "需要使用 iproute2 提供的 rdma 来完成“rdma RDMA tool”时",
          "goal": "按固定官方版本的定义调用 rdma，并依据退出状态判断该操作是否完成",
          "value": "rdma",
          "description": "rdma 的官方用途是“rdma RDMA tool”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 iproute2 的定义执行 rdma；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "iproute2-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "iproute2-repository",
              "locator": "https://git.kernel.org/pub/scm/network/iproute2/iproute2.git/tag/?h=v7.1.0/tree/man/man8/rdma.8",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with iproute2 7.1.0 installed; optional targets depend on build features。"
        }
      ],
      "components": [
        "iproute2"
      ],
      "constraints": [
        "requires Linux with iproute2 7.1.0 installed; optional targets depend on build features"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "iproute2-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://git.kernel.org/pub/scm/network/iproute2/iproute2.git/tag/?h=v7.1.0 · man/man8/rdma.8",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": ".sp .ad l .in +8 .ti -8 rdma \"[ \" OPTIONS \" ] \" OBJECT \" { \" COMMAND \" | \" help \" }\" .sp .ti -8 rdma \"[ \" -force \" ] \" \"-batch \" filename .sp .ti -8 OBJECT \" := { \" dev \" | \" link \" | \" resource \" | \" system \" | \" statistic \" | \" monitor \" }\" .sp .ti -8 OPTIONS \" := { \" V[ersion]",
      "options": [
        "-V",
        "-Version",
        "-b",
        "-batch",
        "-force",
        "-d",
        "--details",
        "-r"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "readprofile",
      "en": "read kernel profiling information",
      "zh": "readprofile：read kernel profiling information（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-readprofile",
      "context": "linux-system",
      "keywords": [
        "readprofile",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 readprofile 来完成“read kernel profiling information”时",
          "goal": "按固定官方版本的定义调用 readprofile，并依据退出状态判断该操作是否完成",
          "value": "readprofile",
          "description": "readprofile 的官方用途是“read kernel profiling information”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 readprofile；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/sys-utils/readprofile.8.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · sys-utils/readprofile.8.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "readprofile [options]",
      "options": [
        "-a",
        "--all",
        "-b",
        "--histbin",
        "-i",
        "--info",
        "-t",
        "-m"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "rename",
      "en": "rename files",
      "zh": "rename：rename files（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-rename",
      "context": "linux-system",
      "keywords": [
        "rename",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 rename 来完成“rename files”时",
          "goal": "按固定官方版本的定义调用 rename，并依据退出状态判断该操作是否完成",
          "value": "rename",
          "description": "rename 的官方用途是“rename files”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 rename；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/misc-utils/rename.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · misc-utils/rename.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "rename [options] substring replacement file...",
      "options": [
        "-s",
        "--symlink",
        "-v",
        "--verbose",
        "-n",
        "--no-act",
        "-a",
        "--all"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "renice",
      "en": "alter priority of running processes",
      "zh": "renice：alter priority of running processes（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-renice",
      "context": "linux-system",
      "keywords": [
        "renice",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 renice 来完成“alter priority of running processes”时",
          "goal": "按固定官方版本的定义调用 renice，并依据退出状态判断该操作是否完成",
          "value": "renice",
          "description": "renice 的官方用途是“alter priority of running processes”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 renice；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/sys-utils/renice.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · sys-utils/renice.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "renice [-n|--priority|--relative] priority [-g|-p|-u] identifier...",
      "options": [
        "-n",
        "--priority",
        "--relative",
        "-g",
        "--pgrp",
        "-p",
        "--pid",
        "-u"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "resizepart",
      "en": "tell the kernel about the new size of a partition",
      "zh": "resizepart：tell the kernel about the new size of a partition（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-resizepart",
      "context": "linux-system",
      "keywords": [
        "resizepart",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 resizepart 来完成“tell the kernel about the new size of a partition”时",
          "goal": "按固定官方版本的定义调用 resizepart，并依据退出状态判断该操作是否完成",
          "value": "resizepart",
          "description": "resizepart 的官方用途是“tell the kernel about the new size of a partition”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 resizepart；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/disk-utils/resizepart.8.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · disk-utils/resizepart.8.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "resizepart device partition length",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "resizepart.static",
      "en": "statically linked tell the kernel about the new size of a partition",
      "zh": "resizepart.static：statically linked tell the kernel about the new size of a partition（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-resizepart-static",
      "context": "linux-system",
      "keywords": [
        "resizepart.static",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 resizepart.static 来完成“statically linked tell the kernel about the new size of a partition”时",
          "goal": "按固定官方版本的定义调用 resizepart.static，并依据退出状态判断该操作是否完成",
          "value": "resizepart.static",
          "description": "resizepart.static 的官方用途是“statically linked tell the kernel about the new size of a partition”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 resizepart.static；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/meson.build#optional-static-target-resizepart.static",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration；requires a util-linux 2.42.2 build with the corresponding static_programs target enabled。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration",
        "requires a util-linux 2.42.2 build with the corresponding static_programs target enabled"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · meson.build executable('resizepart.static')",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "resizepart.static device partition length",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "resolvectl",
      "en": "Resolve domain names, IPV4 and IPv6 addresses, DNS resource records, and services; introspect and reconfigure the DNS resolver",
      "zh": "resolvectl：Resolve domain names, IPV4 and IPv6 addresses, DNS resource records, and services; introspect and reconfigure the DNS resolver（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-resolvectl",
      "context": "linux-system",
      "keywords": [
        "resolvectl",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "域名解析结果与预期不符，需要确认每个链路正在使用的 DNS 服务器和搜索域",
          "goal": "查看 systemd-resolved 的全局与逐链路状态",
          "value": "resolvectl status",
          "description": "status 子命令汇总解析器协议、DNS 服务器和各链路配置。",
          "expected": "终端显示当前解析状态，不更改 DNS 设置。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/resolvectl.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ]
        }
      ],
      "aliases": [
        "resolvconf"
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/resolvectl.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "resolvectl",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "rev",
      "en": "reverse lines characterwise",
      "zh": "rev：reverse lines characterwise（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-rev",
      "context": "linux-system",
      "keywords": [
        "rev",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 rev 来完成“reverse lines characterwise”时",
          "goal": "按固定官方版本的定义调用 rev，并依据退出状态判断该操作是否完成",
          "value": "rev",
          "description": "rev 的官方用途是“reverse lines characterwise”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 rev；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/text-utils/rev.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · text-utils/rev.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "rev [option] [file...]",
      "options": [
        "-0",
        "--zero"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "rfkill",
      "en": "tool for enabling and disabling wireless devices",
      "zh": "rfkill：tool for enabling and disabling wireless devices（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-rfkill",
      "context": "linux-system",
      "keywords": [
        "rfkill",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 rfkill 来完成“tool for enabling and disabling wireless devices”时",
          "goal": "按固定官方版本的定义调用 rfkill，并依据退出状态判断该操作是否完成",
          "value": "rfkill",
          "description": "rfkill 的官方用途是“tool for enabling and disabling wireless devices”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 rfkill；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": false,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/sys-utils/rfkill.8.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "warning": "rfkill 可能修改系统、磁盘、账号、服务或进程状态；仅在已确认对象和回滚方案后执行。",
          "riskLevels": [
            "deleteOrOverwrite"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration；执行前先用只读命令检查目标、确认影响范围并备份可恢复数据；优先在隔离环境验证。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · sys-utils/rfkill.8.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "rfkill [options] [command] [ID|type ...]",
      "options": [
        "-J",
        "--json",
        "-n",
        "--noheadings",
        "-o",
        "--output",
        "--help",
        "--output-all"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "routel",
      "en": "routel list routes with pretty output format",
      "zh": "routel：routel list routes with pretty output format（来源：iproute2）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-routel",
      "context": "linux-system",
      "keywords": [
        "routel",
        "命令",
        "终端",
        "iproute2"
      ],
      "examples": [
        {
          "scenario": "需要使用 iproute2 提供的 routel 来完成“routel list routes with pretty output format”时",
          "goal": "按固定官方版本的定义调用 routel，并依据退出状态判断该操作是否完成",
          "value": "routel",
          "description": "routel 的官方用途是“routel list routes with pretty output format”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 iproute2 的定义执行 routel；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "iproute2-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "iproute2-repository",
              "locator": "https://git.kernel.org/pub/scm/network/iproute2/iproute2.git/tag/?h=v7.1.0/tree/man/man8/routel.8",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with iproute2 7.1.0 installed; optional targets depend on build features。"
        }
      ],
      "components": [
        "iproute2"
      ],
      "constraints": [
        "requires Linux with iproute2 7.1.0 installed; optional targets depend on build features"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "iproute2-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://git.kernel.org/pub/scm/network/iproute2/iproute2.git/tag/?h=v7.1.0 · man/man8/routel.8",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "routel \"[ \" OPTIONS \" ]\" \"[ \" tablenr [ ip route options... ] ] .ti 8 OPTIONS \" := {\" -h | --help | [{-f | --family } {inet | inet6 } | -4 | -6 }",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "rtacct",
      "en": "network statistics tools",
      "zh": "rtacct：network statistics tools（来源：iproute2）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-rtacct",
      "context": "linux-system",
      "keywords": [
        "rtacct",
        "命令",
        "终端",
        "iproute2"
      ],
      "examples": [
        {
          "scenario": "需要使用 iproute2 提供的 rtacct 来完成“network statistics tools”时",
          "goal": "按固定官方版本的定义调用 rtacct，并依据退出状态判断该操作是否完成",
          "value": "rtacct",
          "description": "rtacct 的官方用途是“network statistics tools”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 iproute2 的定义执行 rtacct；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "iproute2-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "iproute2-repository",
              "locator": "https://git.kernel.org/pub/scm/network/iproute2/iproute2.git/tag/?h=v7.1.0/tree/man/man8/rtacct.8",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with iproute2 7.1.0 installed; optional targets depend on build features。"
        }
      ],
      "components": [
        "iproute2"
      ],
      "constraints": [
        "requires Linux with iproute2 7.1.0 installed; optional targets depend on build features"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "iproute2-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://git.kernel.org/pub/scm/network/iproute2/iproute2.git/tag/?h=v7.1.0 · man/man8/rtacct.8",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "Usage: nstat [ -h?vVzrnasd:t:jp ] [ PATTERN [ PATTERN ] ] .br Usage: rtacct [ -h?vVzrnasd:t: ] [ ListOfRealms ]",
      "options": [
        "-h",
        "--help",
        "-V",
        "--version",
        "-z",
        "--zeros",
        "-r",
        "--reset"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "rtcwake",
      "en": "enter a system sleep state until specified wakeup time",
      "zh": "rtcwake：enter a system sleep state until specified wakeup time（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-rtcwake",
      "context": "linux-system",
      "keywords": [
        "rtcwake",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 rtcwake 来完成“enter a system sleep state until specified wakeup time”时",
          "goal": "按固定官方版本的定义调用 rtcwake，并依据退出状态判断该操作是否完成",
          "value": "rtcwake",
          "description": "rtcwake 的官方用途是“enter a system sleep state until specified wakeup time”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 rtcwake；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/sys-utils/rtcwake.8.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · sys-utils/rtcwake.8.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "rtcwake [options] [-d device] [-m standbymode] {-s seconds|-t timet}",
      "options": [
        "-A",
        "--adjfile",
        "-a",
        "--auto",
        "--date",
        "-d",
        "--device",
        "-l"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "rtmon",
      "en": "rtmon listens to and monitors RTnetlink",
      "zh": "rtmon：rtmon listens to and monitors RTnetlink（来源：iproute2）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-rtmon",
      "context": "linux-system",
      "keywords": [
        "rtmon",
        "命令",
        "终端",
        "iproute2"
      ],
      "examples": [
        {
          "scenario": "需要使用 iproute2 提供的 rtmon 来完成“rtmon listens to and monitors RTnetlink”时",
          "goal": "按固定官方版本的定义调用 rtmon，并依据退出状态判断该操作是否完成",
          "value": "rtmon",
          "description": "rtmon 的官方用途是“rtmon listens to and monitors RTnetlink”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 iproute2 的定义执行 rtmon；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "iproute2-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "iproute2-repository",
              "locator": "https://git.kernel.org/pub/scm/network/iproute2/iproute2.git/tag/?h=v7.1.0/tree/man/man8/rtmon.8",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with iproute2 7.1.0 installed; optional targets depend on build features。"
        }
      ],
      "components": [
        "iproute2"
      ],
      "constraints": [
        "requires Linux with iproute2 7.1.0 installed; optional targets depend on build features"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "iproute2-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://git.kernel.org/pub/scm/network/iproute2/iproute2.git/tag/?h=v7.1.0 · man/man8/rtmon.8",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": ".sp .ad l .in +8 .ti -8 \"rtmon\" \"[ \" OPTIONS \" ] \" \"file \" FILE \"[ \" all \"| \" OBJECTS \"]\" .ti -8 OPTIONS \":= { f[amily] { inet | inet6 | link | help } |\" \"-4 | -6 | -0 | -V[ersion] }\" .ti -8 OBJECTS \":= [\" link \"]\" \"[\" address \"]\" \"[\" route \"]\"",
      "options": [
        "-Version",
        "-family",
        "-4",
        "-6",
        "-0"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "runuser",
      "en": "run a command with substitute user and group ID",
      "zh": "runuser：run a command with substitute user and group ID（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-runuser",
      "context": "linux-system",
      "keywords": [
        "runuser",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 runuser 来完成“run a command with substitute user and group ID”时",
          "goal": "按固定官方版本的定义调用 runuser，并依据退出状态判断该操作是否完成",
          "value": "runuser",
          "description": "runuser 的官方用途是“run a command with substitute user and group ID”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 runuser；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": false,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/login-utils/runuser.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "warning": "runuser 可能修改系统、磁盘、账号、服务或进程状态；仅在已确认对象和回滚方案后执行。",
          "riskLevels": [
            "deleteOrOverwrite"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration；执行前先用只读命令检查目标、确认影响范围并备份可恢复数据；优先在隔离环境验证。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · login-utils/runuser.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "runuser [options] -u user [[--] command [argument...]] runuser [options] [-] [user [argument...]]",
      "options": [
        "-c",
        "--command",
        "--session-command",
        "-f",
        "--fast",
        "-g",
        "--group",
        "-G"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "script",
      "en": "make typescript of terminal session",
      "zh": "script：make typescript of terminal session（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-script",
      "context": "linux-system",
      "keywords": [
        "script",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 script 来完成“make typescript of terminal session”时",
          "goal": "按固定官方版本的定义调用 script，并依据退出状态判断该操作是否完成",
          "value": "script",
          "description": "script 的官方用途是“make typescript of terminal session”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 script；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/term-utils/script.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · term-utils/script.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "script [options] [file] [-- command [argument...]]",
      "options": [
        "-a",
        "--append",
        "-c",
        "--command",
        "-E",
        "--echo",
        "-e",
        "--return"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "scriptlive",
      "en": "re-run session typescripts, using timing information",
      "zh": "scriptlive：re-run session typescripts, using timing information（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-scriptlive",
      "context": "linux-system",
      "keywords": [
        "scriptlive",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 scriptlive 来完成“re-run session typescripts, using timing information”时",
          "goal": "按固定官方版本的定义调用 scriptlive，并依据退出状态判断该操作是否完成",
          "value": "scriptlive",
          "description": "scriptlive 的官方用途是“re-run session typescripts, using timing information”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 scriptlive；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/term-utils/scriptlive.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · term-utils/scriptlive.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "scriptlive [options] timingfile typescript",
      "options": [
        "-c",
        "--command",
        "-I",
        "--log-in",
        "-B",
        "--log-io",
        "-E",
        "--echo"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "scriptreplay",
      "en": "play back typescripts, using timing information",
      "zh": "scriptreplay：play back typescripts, using timing information（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-scriptreplay",
      "context": "linux-system",
      "keywords": [
        "scriptreplay",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 scriptreplay 来完成“play back typescripts, using timing information”时",
          "goal": "按固定官方版本的定义调用 scriptreplay，并依据退出状态判断该操作是否完成",
          "value": "scriptreplay",
          "description": "scriptreplay 的官方用途是“play back typescripts, using timing information”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 scriptreplay；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/term-utils/scriptreplay.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · term-utils/scriptreplay.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "scriptreplay [options] timingfile [typescript [divisor]]",
      "options": [
        "-I",
        "--log-in",
        "-O",
        "--log-out",
        "-B",
        "--log-io",
        "-t",
        "--timing"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "setarch",
      "en": "change reported architecture in new program environment and/or set personality flags",
      "zh": "setarch：change reported architecture in new program environment and/or set personality flags（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-setarch",
      "context": "linux-system",
      "keywords": [
        "setarch",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 setarch 来完成“change reported architecture in new program environment and/or set personality flags”时",
          "goal": "按固定官方版本的定义调用 setarch，并依据退出状态判断该操作是否完成",
          "value": "setarch",
          "description": "setarch 的官方用途是“change reported architecture in new program environment and/or set personality flags”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 setarch；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/sys-utils/setarch.8.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · sys-utils/setarch.8.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "setarch [arch] [options] [program [argument...]] arch [options] [program [argument...]]",
      "options": [
        "--list",
        "--show",
        "-p",
        "--pid",
        "--uname-2",
        "-v",
        "--verbose",
        "-3"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "setpgid",
      "en": "run a program in a new process group",
      "zh": "setpgid：run a program in a new process group（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-setpgid",
      "context": "linux-system",
      "keywords": [
        "setpgid",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 setpgid 来完成“run a program in a new process group”时",
          "goal": "按固定官方版本的定义调用 setpgid，并依据退出状态判断该操作是否完成",
          "value": "setpgid",
          "description": "setpgid 的官方用途是“run a program in a new process group”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 setpgid；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/sys-utils/setpgid.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · sys-utils/setpgid.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "setpgid [options] program [arguments]",
      "options": [
        "-f",
        "--foreground"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "setpriv",
      "en": "run a program with different Linux privilege settings",
      "zh": "setpriv：run a program with different Linux privilege settings（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-setpriv",
      "context": "linux-system",
      "keywords": [
        "setpriv",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 setpriv 来完成“run a program with different Linux privilege settings”时",
          "goal": "按固定官方版本的定义调用 setpriv，并依据退出状态判断该操作是否完成",
          "value": "setpriv",
          "description": "setpriv 的官方用途是“run a program with different Linux privilege settings”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 setpriv；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/sys-utils/setpriv.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · sys-utils/setpriv.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "setpriv [options] program [arguments]",
      "options": [
        "--clear-groups",
        "-d",
        "--dump",
        "--groups",
        "--inh-caps",
        "--ambient-caps",
        "--bounding-set",
        "-all"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "setsid",
      "en": "run a program in a new session",
      "zh": "setsid：run a program in a new session（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-setsid",
      "context": "linux-system",
      "keywords": [
        "setsid",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 setsid 来完成“run a program in a new session”时",
          "goal": "按固定官方版本的定义调用 setsid，并依据退出状态判断该操作是否完成",
          "value": "setsid",
          "description": "setsid 的官方用途是“run a program in a new session”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 setsid；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/sys-utils/setsid.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · sys-utils/setsid.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "setsid [options] program [arguments]",
      "options": [
        "-c",
        "--ctty",
        "-f",
        "--fork",
        "-w",
        "--wait"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "setterm",
      "en": "set terminal attributes",
      "zh": "setterm：set terminal attributes（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-setterm",
      "context": "linux-system",
      "keywords": [
        "setterm",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 setterm 来完成“set terminal attributes”时",
          "goal": "按固定官方版本的定义调用 setterm，并依据退出状态判断该操作是否完成",
          "value": "setterm",
          "description": "setterm 的官方用途是“set terminal attributes”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 setterm；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/term-utils/setterm.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · term-utils/setterm.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "setterm [options]",
      "options": [
        "--underline",
        "--half-bright",
        "--option",
        "--appcursorkeys",
        "--append",
        "--dump",
        "--background",
        "--blank"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "sfdisk",
      "en": "display or manipulate a disk partition table",
      "zh": "sfdisk：display or manipulate a disk partition table（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-sfdisk",
      "context": "linux-system",
      "keywords": [
        "sfdisk",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 sfdisk 来完成“display or manipulate a disk partition table”时",
          "goal": "按固定官方版本的定义调用 sfdisk，并依据退出状态判断该操作是否完成",
          "value": "sfdisk",
          "description": "sfdisk 的官方用途是“display or manipulate a disk partition table”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 sfdisk；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": false,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/disk-utils/sfdisk.8.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "warning": "sfdisk 可能修改系统、磁盘、账号、服务或进程状态；仅在已确认对象和回滚方案后执行。",
          "riskLevels": [
            "deleteOrOverwrite"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration；执行前先用只读命令检查目标、确认影响范围并备份可恢复数据；优先在隔离环境验证。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · disk-utils/sfdisk.8.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "sfdisk [options] device [-N partition-number] sfdisk [options] command",
      "options": [
        "-a",
        "--append",
        "-N",
        "-b",
        "--backup",
        "-O",
        "--backup-file",
        "--bytes"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "sfdisk.static",
      "en": "statically linked display or manipulate a disk partition table",
      "zh": "sfdisk.static：statically linked display or manipulate a disk partition table（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-sfdisk-static",
      "context": "linux-system",
      "keywords": [
        "sfdisk.static",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 sfdisk.static 来完成“statically linked display or manipulate a disk partition table”时",
          "goal": "按固定官方版本的定义调用 sfdisk.static，并依据退出状态判断该操作是否完成",
          "value": "sfdisk.static",
          "description": "sfdisk.static 的官方用途是“statically linked display or manipulate a disk partition table”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 sfdisk.static；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": false,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/meson.build#optional-static-target-sfdisk.static",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "warning": "sfdisk.static 可能修改系统、磁盘、账号、服务或进程状态；仅在已确认对象和回滚方案后执行。",
          "riskLevels": [
            "deleteOrOverwrite"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration；requires a util-linux 2.42.2 build with the corresponding static_programs target enabled；执行前先用只读命令检查目标、确认影响范围并备份可恢复数据；优先在隔离环境验证。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration",
        "requires a util-linux 2.42.2 build with the corresponding static_programs target enabled"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · meson.build executable('sfdisk.static')",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "sfdisk.static [options] device [-N partition-number] sfdisk [options] command",
      "options": [
        "-a",
        "--append",
        "-N",
        "-b",
        "--backup",
        "-O",
        "--backup-file",
        "--bytes"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "skill",
      "en": "skill, snice send a signal or report process status",
      "zh": "skill：skill, snice send a signal or report process status（来源：procps-ng）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-skill",
      "context": "linux-system",
      "keywords": [
        "skill",
        "命令",
        "终端",
        "procps-ng"
      ],
      "examples": [
        {
          "scenario": "需要使用 procps-ng 提供的 skill 来完成“skill, snice send a signal or report process status”时",
          "goal": "按固定官方版本的定义调用 skill，并依据退出状态判断该操作是否完成",
          "value": "skill",
          "description": "skill 的官方用途是“skill, snice send a signal or report process status”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 procps-ng 的定义执行 skill；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": false,
          "sourceType": "manual",
          "sourceIds": [
            "procps-ng-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "procps-ng-repository",
              "locator": "https://gitlab.com/procps-ng/procps/-/tags/v4.0.6/man/skill.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "warning": "skill 可能修改系统、磁盘、账号、服务或进程状态；仅在已确认对象和回滚方案后执行。",
          "riskLevels": [
            "deleteOrOverwrite"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with procps-ng 4.0.6 installed；执行前先用只读命令检查目标、确认影响范围并备份可恢复数据；优先在隔离环境验证。"
        }
      ],
      "components": [
        "procps-ng"
      ],
      "constraints": [
        "requires Linux with procps-ng 4.0.6 installed"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "procps-ng-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://gitlab.com/procps-ng/procps/-/tags/v4.0.6 · man/skill.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "skill [ signal-option ] [ other-option \" .\\|.\\|.]\" expression snice [ new-priority ] [ option \" .\\|.\\|.]\" expression",
      "options": [
        "-f",
        "--fast",
        "-i",
        "--interactive",
        "-l",
        "--list",
        "-L",
        "--table"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "slabtop",
      "en": "slabtop display kernel slab cache information in real time",
      "zh": "slabtop：slabtop display kernel slab cache information in real time（来源：procps-ng）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-slabtop",
      "context": "linux-system",
      "keywords": [
        "slabtop",
        "命令",
        "终端",
        "procps-ng"
      ],
      "examples": [
        {
          "scenario": "需要使用 procps-ng 提供的 slabtop 来完成“slabtop display kernel slab cache information in real time”时",
          "goal": "按固定官方版本的定义调用 slabtop，并依据退出状态判断该操作是否完成",
          "value": "slabtop",
          "description": "slabtop 的官方用途是“slabtop display kernel slab cache information in real time”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 procps-ng 的定义执行 slabtop；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "procps-ng-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "procps-ng-repository",
              "locator": "https://gitlab.com/procps-ng/procps/-/tags/v4.0.6/man/slabtop.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with procps-ng 4.0.6 installed。"
        }
      ],
      "components": [
        "procps-ng"
      ],
      "constraints": [
        "requires Linux with procps-ng 4.0.6 installed"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "procps-ng-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://gitlab.com/procps-ng/procps/-/tags/v4.0.6 · man/slabtop.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "slabtop [ option \" .\\|.\\|.]\"",
      "options": [
        "-d",
        "--delay",
        "-s",
        "--sort",
        "-o",
        "--once",
        "--human",
        "-V"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "snice",
      "en": "snice",
      "zh": "snice：snice（来源：procps-ng）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-snice",
      "context": "linux-system",
      "keywords": [
        "snice",
        "命令",
        "终端",
        "procps-ng"
      ],
      "examples": [
        {
          "scenario": "需要使用 procps-ng 提供的 snice 来完成“snice”时",
          "goal": "按固定官方版本的定义调用 snice，并依据退出状态判断该操作是否完成",
          "value": "snice",
          "description": "snice 的官方用途是“snice”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 procps-ng 的定义执行 snice；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "procps-ng-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "procps-ng-repository",
              "locator": "https://gitlab.com/procps-ng/procps/-/tags/v4.0.6/man/snice.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with procps-ng 4.0.6 installed。"
        }
      ],
      "components": [
        "procps-ng"
      ],
      "constraints": [
        "requires Linux with procps-ng 4.0.6 installed"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "procps-ng-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://gitlab.com/procps-ng/procps/-/tags/v4.0.6 · man/snice.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "snice",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "ss",
      "en": "Inspect sockets",
      "zh": "查看套接字状态",
      "context": "linux-system",
      "platforms": [
        "linux"
      ],
      "id": "linux-ss",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "iproute2-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://git.kernel.org/pub/scm/network/iproute2/iproute2.git/tag/?h=v7.1.0 · man/man8/ss.8",
          "checkedAt": "2026-07-31"
        }
      ],
      "keywords": [
        "ss",
        "查看套接字状态",
        "Inspect sockets",
        "Linux",
        "系统工具"
      ],
      "examples": [
        {
          "scenario": "本地服务启动后请求仍被拒绝，需要确认 TCP 端口是否真的进入监听状态",
          "goal": "列出 TCP 监听端口并避免名称解析干扰",
          "value": "ss -lnt",
          "description": "-l 仅显示监听套接字，-n 保留数字端口，-t 限定为 TCP。",
          "expected": "终端输出当前可见的 TCP 监听地址和端口，不修改网络配置。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "iproute2-repository"
          ],
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "iproute2-repository",
              "locator": "https://git.kernel.org/pub/scm/network/iproute2/iproute2.git/tag/?h=v7.1.0 · man/man8/ss.8",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ]
        }
      ],
      "components": [
        "iproute2"
      ],
      "constraints": [
        "requires Linux with iproute2 7.1.0 installed; optional targets depend on build features"
      ],
      "usage": "ss [ options ] \" [ FILTER ]\"",
      "options": [
        "-h",
        "--help",
        "-V",
        "--version",
        "-H",
        "--no-header",
        "-Q",
        "--no-queues"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "storagectl",
      "en": "Enumerate and mount storage volumes provided by storage providers",
      "zh": "storagectl：Enumerate and mount storage volumes provided by storage providers（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-storagectl",
      "context": "linux-system",
      "keywords": [
        "storagectl",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 storagectl 来完成“Enumerate and mount storage volumes provided by storage providers”时",
          "goal": "按固定官方版本的定义调用 storagectl，并依据退出状态判断该操作是否完成",
          "value": "storagectl",
          "description": "storagectl 的官方用途是“Enumerate and mount storage volumes provided by storage providers”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 storagectl；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/storagectl.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/storagectl.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "storagectl",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "su",
      "en": "run a command with substitute user and group ID",
      "zh": "su：run a command with substitute user and group ID（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-su",
      "context": "linux-system",
      "keywords": [
        "su",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 su 来完成“run a command with substitute user and group ID”时",
          "goal": "按固定官方版本的定义调用 su，并依据退出状态判断该操作是否完成",
          "value": "su",
          "description": "su 的官方用途是“run a command with substitute user and group ID”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 su；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/login-utils/su.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · login-utils/su.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "su [options] [-] [user|UID [argument...]]",
      "options": [
        "-c",
        "--command",
        "--session-command",
        "-f",
        "--fast",
        "-g",
        "--group",
        "-G"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "sulogin",
      "en": "single-user login",
      "zh": "sulogin：single-user login（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-sulogin",
      "context": "linux-system",
      "keywords": [
        "sulogin",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 sulogin 来完成“single-user login”时",
          "goal": "按固定官方版本的定义调用 sulogin，并依据退出状态判断该操作是否完成",
          "value": "sulogin",
          "description": "sulogin 的官方用途是“single-user login”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 sulogin；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": false,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/login-utils/sulogin.8.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "warning": "sulogin 可能修改系统、磁盘、账号、服务或进程状态；仅在已确认对象和回滚方案后执行。",
          "riskLevels": [
            "deleteOrOverwrite"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration；执行前先用只读命令检查目标、确认影响范围并备份可恢复数据；优先在隔离环境验证。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · login-utils/sulogin.8.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "sulogin [options] [tty]",
      "options": [
        "-e",
        "--force",
        "-p",
        "--login-shell",
        "-t",
        "--timeout"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "swaplabel",
      "en": "print or change the label or UUID of a swap area",
      "zh": "swaplabel：print or change the label or UUID of a swap area（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-swaplabel",
      "context": "linux-system",
      "keywords": [
        "swaplabel",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 swaplabel 来完成“print or change the label or UUID of a swap area”时",
          "goal": "按固定官方版本的定义调用 swaplabel，并依据退出状态判断该操作是否完成",
          "value": "swaplabel",
          "description": "swaplabel 的官方用途是“print or change the label or UUID of a swap area”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 swaplabel；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/disk-utils/swaplabel.8.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · disk-utils/swaplabel.8.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "swaplabel [-L label] [-U UUID] device",
      "options": [
        "-L",
        "--label",
        "-U",
        "--uuid"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "swapon",
      "en": "enable/disable devices and files for paging and swapping",
      "zh": "swapon：enable/disable devices and files for paging and swapping（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-swapon",
      "context": "linux-system",
      "keywords": [
        "swapon",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 swapon 来完成“enable/disable devices and files for paging and swapping”时",
          "goal": "按固定官方版本的定义调用 swapon，并依据退出状态判断该操作是否完成",
          "value": "swapon",
          "description": "swapon 的官方用途是“enable/disable devices and files for paging and swapping”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 swapon；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": false,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/sys-utils/swapon.8.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "warning": "swapon 可能修改系统、磁盘、账号、服务或进程状态；仅在已确认对象和回滚方案后执行。",
          "riskLevels": [
            "deleteOrOverwrite"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration；执行前先用只读命令检查目标、确认影响范围并备份可恢复数据；优先在隔离环境验证。"
        }
      ],
      "aliases": [
        "swapoff"
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · sys-utils/swapon.8.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "swapon [options] [specialfile...] swapoff [-va] [specialfile...]",
      "options": [
        "-a",
        "--all",
        "-T",
        "--fstab",
        "-d",
        "--discard",
        "-e",
        "--ifexists"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "switch_root",
      "en": "switch to another filesystem as the root of the mount tree",
      "zh": "switch_root：switch to another filesystem as the root of the mount tree（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-switch_root",
      "context": "linux-system",
      "keywords": [
        "switch_root",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 switch_root 来完成“switch to another filesystem as the root of the mount tree”时",
          "goal": "按固定官方版本的定义调用 switch_root，并依据退出状态判断该操作是否完成",
          "value": "switch_root",
          "description": "switch_root 的官方用途是“switch to another filesystem as the root of the mount tree”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 switch_root；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": false,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/sys-utils/switch_root.8.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "warning": "switch_root 可能修改系统、磁盘、账号、服务或进程状态；仅在已确认对象和回滚方案后执行。",
          "riskLevels": [
            "deleteOrOverwrite"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration；执行前先用只读命令检查目标、确认影响范围并备份可恢复数据；优先在隔离环境验证。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · sys-utils/switch_root.8.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "switchroot [-hV] switchroot newroot init [arg...]",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "sysctl",
      "en": "sysctl configure kernel parameters at runtime",
      "zh": "sysctl：sysctl configure kernel parameters at runtime（来源：procps-ng）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-sysctl",
      "context": "linux-system",
      "keywords": [
        "sysctl",
        "命令",
        "终端",
        "procps-ng"
      ],
      "examples": [
        {
          "scenario": "需要使用 procps-ng 提供的 sysctl 来完成“sysctl configure kernel parameters at runtime”时",
          "goal": "按固定官方版本的定义调用 sysctl，并依据退出状态判断该操作是否完成",
          "value": "sysctl",
          "description": "sysctl 的官方用途是“sysctl configure kernel parameters at runtime”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 procps-ng 的定义执行 sysctl；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "procps-ng-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "procps-ng-repository",
              "locator": "https://gitlab.com/procps-ng/procps/-/tags/v4.0.6/man/sysctl.8",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with procps-ng 4.0.6 installed。"
        }
      ],
      "components": [
        "procps-ng"
      ],
      "constraints": [
        "requires Linux with procps-ng 4.0.6 installed"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "procps-ng-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://gitlab.com/procps-ng/procps/-/tags/v4.0.6 · man/sysctl.8",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "sysctl [ option \" .\\|.\\|.]\" variable [\\c = value\\c ] .\\|.\\|. sysctl p file-or-regexp \" .\\|.\\|.\"",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemctl",
      "en": "Inspect and manage systemd units",
      "zh": "管理 systemd 单元",
      "context": "linux-system",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemctl",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemctl.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "keywords": [
        "systemctl",
        "管理 systemd 单元",
        "Inspect and manage systemd units",
        "Linux",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "SSH 连接被拒绝，需要先确认服务失败是否来自单元未加载或最近一次启动失败",
          "goal": "读取 sshd.service 的当前状态并定位服务失败",
          "value": "systemctl status sshd.service",
          "description": "status 子命令汇总单元加载状态、活动状态、主进程和近期日志。",
          "expected": "终端显示 sshd.service 的状态；命令只读取状态，不启动或停止服务。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemctl.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ]
        }
      ],
      "aliases": [
        "halt",
        "poweroff",
        "reboot",
        "shutdown"
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "usage": "systemctl",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd",
      "en": "systemd system and service manager",
      "zh": "systemd：systemd system and service manager（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd",
      "context": "linux-system",
      "keywords": [
        "systemd",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd 来完成“systemd system and service manager”时",
          "goal": "按固定官方版本的定义调用 systemd，并依据退出状态判断该操作是否完成",
          "value": "systemd",
          "description": "systemd 的官方用途是“systemd system and service manager”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-ac-power",
      "en": "Report whether we are connected to an external power source",
      "zh": "systemd-ac-power：Report whether we are connected to an external power source（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-ac-power",
      "context": "linux-system",
      "keywords": [
        "systemd-ac-power",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-ac-power 来完成“Report whether we are connected to an external power source”时",
          "goal": "按固定官方版本的定义调用 systemd-ac-power，并依据退出状态判断该操作是否完成",
          "value": "systemd-ac-power",
          "description": "systemd-ac-power 的官方用途是“Report whether we are connected to an external power source”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-ac-power；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-ac-power.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-ac-power.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-ac-power",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-analyze",
      "en": "Analyze and debug system manager",
      "zh": "systemd-analyze：Analyze and debug system manager（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-analyze",
      "context": "linux-system",
      "keywords": [
        "systemd-analyze",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-analyze 来完成“Analyze and debug system manager”时",
          "goal": "按固定官方版本的定义调用 systemd-analyze，并依据退出状态判断该操作是否完成",
          "value": "systemd-analyze",
          "description": "systemd-analyze 的官方用途是“Analyze and debug system manager”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-analyze；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-analyze.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-analyze.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-analyze",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-ask-password",
      "en": "Query the user for a system password",
      "zh": "systemd-ask-password：Query the user for a system password（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-ask-password",
      "context": "linux-system",
      "keywords": [
        "systemd-ask-password",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-ask-password 来完成“Query the user for a system password”时",
          "goal": "按固定官方版本的定义调用 systemd-ask-password，并依据退出状态判断该操作是否完成",
          "value": "systemd-ask-password",
          "description": "systemd-ask-password 的官方用途是“Query the user for a system password”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-ask-password；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-ask-password.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-ask-password.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-ask-password",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-battery-check",
      "en": "Check battery level whether there's enough charge, and power off if not",
      "zh": "systemd-battery-check：Check battery level whether there's enough charge, and power off if not（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-battery-check",
      "context": "linux-system",
      "keywords": [
        "systemd-battery-check",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-battery-check 来完成“Check battery level whether there's enough charge, and power off if not”时",
          "goal": "按固定官方版本的定义调用 systemd-battery-check，并依据退出状态判断该操作是否完成",
          "value": "systemd-battery-check",
          "description": "systemd-battery-check 的官方用途是“Check battery level whether there's enough charge, and power off if not”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-battery-check；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-battery-check.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-battery-check.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-battery-check",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-binfmt",
      "en": "Configure additional binary formats for executables at boot",
      "zh": "systemd-binfmt：Configure additional binary formats for executables at boot（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-binfmt",
      "context": "linux-system",
      "keywords": [
        "systemd-binfmt",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-binfmt 来完成“Configure additional binary formats for executables at boot”时",
          "goal": "按固定官方版本的定义调用 systemd-binfmt，并依据退出状态判断该操作是否完成",
          "value": "systemd-binfmt",
          "description": "systemd-binfmt 的官方用途是“Configure additional binary formats for executables at boot”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-binfmt；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-binfmt.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-binfmt.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-binfmt",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-bless-boot",
      "en": "Mark current boot process as successful",
      "zh": "systemd-bless-boot：Mark current boot process as successful（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-bless-boot",
      "context": "linux-system",
      "keywords": [
        "systemd-bless-boot",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-bless-boot 来完成“Mark current boot process as successful”时",
          "goal": "按固定官方版本的定义调用 systemd-bless-boot，并依据退出状态判断该操作是否完成",
          "value": "systemd-bless-boot",
          "description": "systemd-bless-boot 的官方用途是“Mark current boot process as successful”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-bless-boot；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-bless-boot.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：build option: ENABLE_BOOTLOADER；build option: HAVE_BLKID；requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "build option: ENABLE_BOOTLOADER",
        "build option: HAVE_BLKID",
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-bless-boot.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-bless-boot",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-bsod",
      "en": "Displays boot-time emergency log message in full screen",
      "zh": "systemd-bsod：Displays boot-time emergency log message in full screen（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-bsod",
      "context": "linux-system",
      "keywords": [
        "systemd-bsod",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-bsod 来完成“Displays boot-time emergency log message in full screen”时",
          "goal": "按固定官方版本的定义调用 systemd-bsod，并依据退出状态判断该操作是否完成",
          "value": "systemd-bsod",
          "description": "systemd-bsod 的官方用途是“Displays boot-time emergency log message in full screen”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-bsod；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-bsod.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：build option: HAVE_QRENCODE；requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "build option: HAVE_QRENCODE",
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-bsod.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-bsod",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-cat",
      "en": "Connect a pipeline or program's output with the journal",
      "zh": "systemd-cat：Connect a pipeline or program's output with the journal（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-cat",
      "context": "linux-system",
      "keywords": [
        "systemd-cat",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-cat 来完成“Connect a pipeline or program's output with the journal”时",
          "goal": "按固定官方版本的定义调用 systemd-cat，并依据退出状态判断该操作是否完成",
          "value": "systemd-cat",
          "description": "systemd-cat 的官方用途是“Connect a pipeline or program's output with the journal”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-cat；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-cat.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-cat.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-cat",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-cgls",
      "en": "Recursively show control group contents",
      "zh": "systemd-cgls：Recursively show control group contents（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-cgls",
      "context": "linux-system",
      "keywords": [
        "systemd-cgls",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-cgls 来完成“Recursively show control group contents”时",
          "goal": "按固定官方版本的定义调用 systemd-cgls，并依据退出状态判断该操作是否完成",
          "value": "systemd-cgls",
          "description": "systemd-cgls 的官方用途是“Recursively show control group contents”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-cgls；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-cgls.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-cgls.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-cgls",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-cgtop",
      "en": "Show top control groups by their resource usage",
      "zh": "systemd-cgtop：Show top control groups by their resource usage（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-cgtop",
      "context": "linux-system",
      "keywords": [
        "systemd-cgtop",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-cgtop 来完成“Show top control groups by their resource usage”时",
          "goal": "按固定官方版本的定义调用 systemd-cgtop，并依据退出状态判断该操作是否完成",
          "value": "systemd-cgtop",
          "description": "systemd-cgtop 的官方用途是“Show top control groups by their resource usage”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-cgtop；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-cgtop.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-cgtop.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-cgtop",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-creds",
      "en": "Lists, shows, encrypts and decrypts service credentials",
      "zh": "systemd-creds：Lists, shows, encrypts and decrypts service credentials（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-creds",
      "context": "linux-system",
      "keywords": [
        "systemd-creds",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-creds 来完成“Lists, shows, encrypts and decrypts service credentials”时",
          "goal": "按固定官方版本的定义调用 systemd-creds，并依据退出状态判断该操作是否完成",
          "value": "systemd-creds",
          "description": "systemd-creds 的官方用途是“Lists, shows, encrypts and decrypts service credentials”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-creds；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-creds.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-creds.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-creds",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-cryptenroll",
      "en": "Enroll PKCS#11, FIDO2, TPM2 token/devices to LUKS2 encrypted volumes",
      "zh": "systemd-cryptenroll：Enroll PKCS#11, FIDO2, TPM2 token/devices to LUKS2 encrypted volumes（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-cryptenroll",
      "context": "linux-system",
      "keywords": [
        "systemd-cryptenroll",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-cryptenroll 来完成“Enroll PKCS#11, FIDO2, TPM2 token/devices to LUKS2 encrypted volumes”时",
          "goal": "按固定官方版本的定义调用 systemd-cryptenroll，并依据退出状态判断该操作是否完成",
          "value": "systemd-cryptenroll",
          "description": "systemd-cryptenroll 的官方用途是“Enroll PKCS#11, FIDO2, TPM2 token/devices to LUKS2 encrypted volumes”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-cryptenroll；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-cryptenroll.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-cryptenroll.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-cryptenroll",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-cryptsetup",
      "en": "Full disk decryption logic",
      "zh": "systemd-cryptsetup：Full disk decryption logic（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-cryptsetup",
      "context": "linux-system",
      "keywords": [
        "systemd-cryptsetup",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-cryptsetup 来完成“Full disk decryption logic”时",
          "goal": "按固定官方版本的定义调用 systemd-cryptsetup，并依据退出状态判断该操作是否完成",
          "value": "systemd-cryptsetup",
          "description": "systemd-cryptsetup 的官方用途是“Full disk decryption logic”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-cryptsetup；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": false,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-cryptsetup.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "warning": "systemd-cryptsetup 可能修改系统、磁盘、账号、服务或进程状态；仅在已确认对象和回滚方案后执行。",
          "riskLevels": [
            "deleteOrOverwrite"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1；执行前先用只读命令检查目标、确认影响范围并备份可恢复数据；优先在隔离环境验证。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-cryptsetup.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-cryptsetup",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-delta",
      "en": "Find overridden configuration files",
      "zh": "systemd-delta：Find overridden configuration files（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-delta",
      "context": "linux-system",
      "keywords": [
        "systemd-delta",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-delta 来完成“Find overridden configuration files”时",
          "goal": "按固定官方版本的定义调用 systemd-delta，并依据退出状态判断该操作是否完成",
          "value": "systemd-delta",
          "description": "systemd-delta 的官方用途是“Find overridden configuration files”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-delta；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-delta.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-delta.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-delta",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-detect-virt",
      "en": "Detect execution in a virtualized environment",
      "zh": "systemd-detect-virt：Detect execution in a virtualized environment（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-detect-virt",
      "context": "linux-system",
      "keywords": [
        "systemd-detect-virt",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-detect-virt 来完成“Detect execution in a virtualized environment”时",
          "goal": "按固定官方版本的定义调用 systemd-detect-virt，并依据退出状态判断该操作是否完成",
          "value": "systemd-detect-virt",
          "description": "systemd-detect-virt 的官方用途是“Detect execution in a virtualized environment”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-detect-virt；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-detect-virt.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-detect-virt.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-detect-virt",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-dissect",
      "en": "Dissect Discoverable Disk Images (DDIs)",
      "zh": "systemd-dissect：Dissect Discoverable Disk Images (DDIs)（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-dissect",
      "context": "linux-system",
      "keywords": [
        "systemd-dissect",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-dissect 来完成“Dissect Discoverable Disk Images (DDIs)”时",
          "goal": "按固定官方版本的定义调用 systemd-dissect，并依据退出状态判断该操作是否完成",
          "value": "systemd-dissect",
          "description": "systemd-dissect 的官方用途是“Dissect Discoverable Disk Images (DDIs)”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-dissect；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-dissect.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-dissect.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-dissect",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-escape",
      "en": "Escape strings for usage in systemd unit names",
      "zh": "systemd-escape：Escape strings for usage in systemd unit names（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-escape",
      "context": "linux-system",
      "keywords": [
        "systemd-escape",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-escape 来完成“Escape strings for usage in systemd unit names”时",
          "goal": "按固定官方版本的定义调用 systemd-escape，并依据退出状态判断该操作是否完成",
          "value": "systemd-escape",
          "description": "systemd-escape 的官方用途是“Escape strings for usage in systemd unit names”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-escape；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-escape.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-escape.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-escape",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-executor",
      "en": "systemd public executable systemd-executor",
      "zh": "systemd-executor：systemd public executable systemd-executor（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-executor",
      "context": "linux-system",
      "keywords": [
        "systemd-executor",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-executor 来完成“systemd public executable systemd-executor”时",
          "goal": "按固定官方版本的定义调用 systemd-executor，并依据退出状态判断该操作是否完成",
          "value": "systemd-executor",
          "description": "systemd-executor 的官方用途是“systemd public executable systemd-executor”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-executor；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://github.com/systemd/systemd/tree/v261.1/src/core/meson.build",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/systemd/systemd/tree/v261.1 · src/core/meson.build",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-executor",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-export",
      "en": "systemd public executable systemd-export",
      "zh": "systemd-export：systemd public executable systemd-export（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-export",
      "context": "linux-system",
      "keywords": [
        "systemd-export",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-export 来完成“systemd public executable systemd-export”时",
          "goal": "按固定官方版本的定义调用 systemd-export，并依据退出状态判断该操作是否完成",
          "value": "systemd-export",
          "description": "systemd-export 的官方用途是“systemd public executable systemd-export”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-export；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://github.com/systemd/systemd/tree/v261.1/src/import/meson.build",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/systemd/systemd/tree/v261.1 · src/import/meson.build",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-export",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-firstboot",
      "en": "Initialize basic system settings on or before the first boot-up of a system",
      "zh": "systemd-firstboot：Initialize basic system settings on or before the first boot-up of a system（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-firstboot",
      "context": "linux-system",
      "keywords": [
        "systemd-firstboot",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-firstboot 来完成“Initialize basic system settings on or before the first boot-up of a system”时",
          "goal": "按固定官方版本的定义调用 systemd-firstboot，并依据退出状态判断该操作是否完成",
          "value": "systemd-firstboot",
          "description": "systemd-firstboot 的官方用途是“Initialize basic system settings on or before the first boot-up of a system”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-firstboot；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-firstboot.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：build option: ENABLE_FIRSTBOOT；requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "build option: ENABLE_FIRSTBOOT",
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-firstboot.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-firstboot",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-hwdb",
      "en": "hardware database management tool",
      "zh": "systemd-hwdb：hardware database management tool（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-hwdb",
      "context": "linux-system",
      "keywords": [
        "systemd-hwdb",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-hwdb 来完成“hardware database management tool”时",
          "goal": "按固定官方版本的定义调用 systemd-hwdb，并依据退出状态判断该操作是否完成",
          "value": "systemd-hwdb",
          "description": "systemd-hwdb 的官方用途是“hardware database management tool”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-hwdb；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-hwdb.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：build option: ENABLE_HWDB；requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "build option: ENABLE_HWDB",
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-hwdb.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-hwdb",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-id128",
      "en": "Generate and print sd-128 identifiers",
      "zh": "systemd-id128：Generate and print sd-128 identifiers（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-id128",
      "context": "linux-system",
      "keywords": [
        "systemd-id128",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-id128 来完成“Generate and print sd-128 identifiers”时",
          "goal": "按固定官方版本的定义调用 systemd-id128，并依据退出状态判断该操作是否完成",
          "value": "systemd-id128",
          "description": "systemd-id128 的官方用途是“Generate and print sd-128 identifiers”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-id128；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-id128.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-id128.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-id128",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-imds",
      "en": "Cloud IMDS (Instance Metadata Service) tool",
      "zh": "systemd-imds：Cloud IMDS (Instance Metadata Service) tool（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-imds",
      "context": "linux-system",
      "keywords": [
        "systemd-imds",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-imds 来完成“Cloud IMDS (Instance Metadata Service) tool”时",
          "goal": "按固定官方版本的定义调用 systemd-imds，并依据退出状态判断该操作是否完成",
          "value": "systemd-imds",
          "description": "systemd-imds 的官方用途是“Cloud IMDS (Instance Metadata Service) tool”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-imds；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-imds.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-imds.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-imds",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-imdsd",
      "en": "Cloud IMDS (Instance Metadata Service) client",
      "zh": "systemd-imdsd：Cloud IMDS (Instance Metadata Service) client（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-imdsd",
      "context": "linux-system",
      "keywords": [
        "systemd-imdsd",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-imdsd 来完成“Cloud IMDS (Instance Metadata Service) client”时",
          "goal": "按固定官方版本的定义调用 systemd-imdsd，并依据退出状态判断该操作是否完成",
          "value": "systemd-imdsd",
          "description": "systemd-imdsd 的官方用途是“Cloud IMDS (Instance Metadata Service) client”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-imdsd；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-imdsd.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-imdsd.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-imdsd",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-import",
      "en": "systemd public executable systemd-import",
      "zh": "systemd-import：systemd public executable systemd-import（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-import",
      "context": "linux-system",
      "keywords": [
        "systemd-import",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-import 来完成“systemd public executable systemd-import”时",
          "goal": "按固定官方版本的定义调用 systemd-import，并依据退出状态判断该操作是否完成",
          "value": "systemd-import",
          "description": "systemd-import 的官方用途是“systemd public executable systemd-import”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-import；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://github.com/systemd/systemd/tree/v261.1/src/import/meson.build",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/systemd/systemd/tree/v261.1 · src/import/meson.build",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-import",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-import-fs",
      "en": "systemd public executable systemd-import-fs",
      "zh": "systemd-import-fs：systemd public executable systemd-import-fs（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-import-fs",
      "context": "linux-system",
      "keywords": [
        "systemd-import-fs",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-import-fs 来完成“systemd public executable systemd-import-fs”时",
          "goal": "按固定官方版本的定义调用 systemd-import-fs，并依据退出状态判断该操作是否完成",
          "value": "systemd-import-fs",
          "description": "systemd-import-fs 的官方用途是“systemd public executable systemd-import-fs”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-import-fs；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://github.com/systemd/systemd/tree/v261.1/src/import/meson.build",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/systemd/systemd/tree/v261.1 · src/import/meson.build",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-import-fs",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-inhibit",
      "en": "Execute a program with an inhibition lock taken",
      "zh": "systemd-inhibit：Execute a program with an inhibition lock taken（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-inhibit",
      "context": "linux-system",
      "keywords": [
        "systemd-inhibit",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-inhibit 来完成“Execute a program with an inhibition lock taken”时",
          "goal": "按固定官方版本的定义调用 systemd-inhibit，并依据退出状态判断该操作是否完成",
          "value": "systemd-inhibit",
          "description": "systemd-inhibit 的官方用途是“Execute a program with an inhibition lock taken”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-inhibit；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-inhibit.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-inhibit.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-inhibit",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-journal-gatewayd",
      "en": "HTTP server for journal events",
      "zh": "systemd-journal-gatewayd：HTTP server for journal events（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-journal-gatewayd",
      "context": "linux-system",
      "keywords": [
        "systemd-journal-gatewayd",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-journal-gatewayd 来完成“HTTP server for journal events”时",
          "goal": "按固定官方版本的定义调用 systemd-journal-gatewayd，并依据退出状态判断该操作是否完成",
          "value": "systemd-journal-gatewayd",
          "description": "systemd-journal-gatewayd 的官方用途是“HTTP server for journal events”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-journal-gatewayd；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-journal-gatewayd.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：build option: ENABLE_REMOTE；build option: HAVE_MICROHTTPD；requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "build option: ENABLE_REMOTE",
        "build option: HAVE_MICROHTTPD",
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-journal-gatewayd.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-journal-gatewayd",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-journal-remote",
      "en": "Receive journal messages over the network",
      "zh": "systemd-journal-remote：Receive journal messages over the network（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-journal-remote",
      "context": "linux-system",
      "keywords": [
        "systemd-journal-remote",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-journal-remote 来完成“Receive journal messages over the network”时",
          "goal": "按固定官方版本的定义调用 systemd-journal-remote，并依据退出状态判断该操作是否完成",
          "value": "systemd-journal-remote",
          "description": "systemd-journal-remote 的官方用途是“Receive journal messages over the network”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-journal-remote；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-journal-remote.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-journal-remote.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-journal-remote",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-journal-upload",
      "en": "Send journal messages over the network",
      "zh": "systemd-journal-upload：Send journal messages over the network（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-journal-upload",
      "context": "linux-system",
      "keywords": [
        "systemd-journal-upload",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-journal-upload 来完成“Send journal messages over the network”时",
          "goal": "按固定官方版本的定义调用 systemd-journal-upload，并依据退出状态判断该操作是否完成",
          "value": "systemd-journal-upload",
          "description": "systemd-journal-upload 的官方用途是“Send journal messages over the network”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-journal-upload；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-journal-upload.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：build option: ENABLE_REMOTE；build option: HAVE_LIBCURL；requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "build option: ENABLE_REMOTE",
        "build option: HAVE_LIBCURL",
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-journal-upload.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-journal-upload",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-mount",
      "en": "Establish and destroy transient mount or auto-mount points",
      "zh": "systemd-mount：Establish and destroy transient mount or auto-mount points（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-mount",
      "context": "linux-system",
      "keywords": [
        "systemd-mount",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-mount 来完成“Establish and destroy transient mount or auto-mount points”时",
          "goal": "按固定官方版本的定义调用 systemd-mount，并依据退出状态判断该操作是否完成",
          "value": "systemd-mount",
          "description": "systemd-mount 的官方用途是“Establish and destroy transient mount or auto-mount points”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-mount；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": false,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-mount.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "warning": "systemd-mount 可能修改系统、磁盘、账号、服务或进程状态；仅在已确认对象和回滚方案后执行。",
          "riskLevels": [
            "deleteOrOverwrite"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1；执行前先用只读命令检查目标、确认影响范围并备份可恢复数据；优先在隔离环境验证。"
        }
      ],
      "aliases": [
        "systemd-umount"
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-mount.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-mount",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-mstack",
      "en": "Mstack Discoverable Disk Images (DDIs)",
      "zh": "systemd-mstack：Mstack Discoverable Disk Images (DDIs)（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-mstack",
      "context": "linux-system",
      "keywords": [
        "systemd-mstack",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-mstack 来完成“Mstack Discoverable Disk Images (DDIs)”时",
          "goal": "按固定官方版本的定义调用 systemd-mstack，并依据退出状态判断该操作是否完成",
          "value": "systemd-mstack",
          "description": "systemd-mstack 的官方用途是“Mstack Discoverable Disk Images (DDIs)”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-mstack；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-mstack.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-mstack.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-mstack",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-mute-console",
      "en": "Temporarily mute kernel log output and service manager status output to the system console",
      "zh": "systemd-mute-console：Temporarily mute kernel log output and service manager status output to the system console（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-mute-console",
      "context": "linux-system",
      "keywords": [
        "systemd-mute-console",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-mute-console 来完成“Temporarily mute kernel log output and service manager status output to the system console”时",
          "goal": "按固定官方版本的定义调用 systemd-mute-console，并依据退出状态判断该操作是否完成",
          "value": "systemd-mute-console",
          "description": "systemd-mute-console 的官方用途是“Temporarily mute kernel log output and service manager status output to the system console”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-mute-console；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-mute-console.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-mute-console.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-mute-console",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-networkd-wait-online",
      "en": "Wait for network to come online",
      "zh": "systemd-networkd-wait-online：Wait for network to come online（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-networkd-wait-online",
      "context": "linux-system",
      "keywords": [
        "systemd-networkd-wait-online",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-networkd-wait-online 来完成“Wait for network to come online”时",
          "goal": "按固定官方版本的定义调用 systemd-networkd-wait-online，并依据退出状态判断该操作是否完成",
          "value": "systemd-networkd-wait-online",
          "description": "systemd-networkd-wait-online 的官方用途是“Wait for network to come online”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-networkd-wait-online；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-networkd-wait-online.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：build option: ENABLE_NETWORKD；requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "build option: ENABLE_NETWORKD",
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-networkd-wait-online.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-networkd-wait-online",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-notify",
      "en": "Notify service manager about start-up completion and other daemon status changes",
      "zh": "systemd-notify：Notify service manager about start-up completion and other daemon status changes（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-notify",
      "context": "linux-system",
      "keywords": [
        "systemd-notify",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-notify 来完成“Notify service manager about start-up completion and other daemon status changes”时",
          "goal": "按固定官方版本的定义调用 systemd-notify，并依据退出状态判断该操作是否完成",
          "value": "systemd-notify",
          "description": "systemd-notify 的官方用途是“Notify service manager about start-up completion and other daemon status changes”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-notify；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-notify.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-notify.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-notify",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-nspawn",
      "en": "Spawn a command or OS in a lightweight container",
      "zh": "systemd-nspawn：Spawn a command or OS in a lightweight container（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-nspawn",
      "context": "linux-system",
      "keywords": [
        "systemd-nspawn",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-nspawn 来完成“Spawn a command or OS in a lightweight container”时",
          "goal": "按固定官方版本的定义调用 systemd-nspawn，并依据退出状态判断该操作是否完成",
          "value": "systemd-nspawn",
          "description": "systemd-nspawn 的官方用途是“Spawn a command or OS in a lightweight container”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-nspawn；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-nspawn.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-nspawn.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-nspawn",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-path",
      "en": "List and query system and user paths",
      "zh": "systemd-path：List and query system and user paths（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-path",
      "context": "linux-system",
      "keywords": [
        "systemd-path",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-path 来完成“List and query system and user paths”时",
          "goal": "按固定官方版本的定义调用 systemd-path，并依据退出状态判断该操作是否完成",
          "value": "systemd-path",
          "description": "systemd-path 的官方用途是“List and query system and user paths”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-path；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-path.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-path.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-path",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-pcrlock",
      "en": "Analyze and predict TPM2 PCR states and generate an access policy from the prediction",
      "zh": "systemd-pcrlock：Analyze and predict TPM2 PCR states and generate an access policy from the prediction（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-pcrlock",
      "context": "linux-system",
      "keywords": [
        "systemd-pcrlock",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-pcrlock 来完成“Analyze and predict TPM2 PCR states and generate an access policy from the prediction”时",
          "goal": "按固定官方版本的定义调用 systemd-pcrlock，并依据退出状态判断该操作是否完成",
          "value": "systemd-pcrlock",
          "description": "systemd-pcrlock 的官方用途是“Analyze and predict TPM2 PCR states and generate an access policy from the prediction”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-pcrlock；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-pcrlock.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-pcrlock.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-pcrlock",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-pty-forward",
      "en": "Run a command with a custom terminal background color or title",
      "zh": "systemd-pty-forward：Run a command with a custom terminal background color or title（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-pty-forward",
      "context": "linux-system",
      "keywords": [
        "systemd-pty-forward",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-pty-forward 来完成“Run a command with a custom terminal background color or title”时",
          "goal": "按固定官方版本的定义调用 systemd-pty-forward，并依据退出状态判断该操作是否完成",
          "value": "systemd-pty-forward",
          "description": "systemd-pty-forward 的官方用途是“Run a command with a custom terminal background color or title”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-pty-forward；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-pty-forward.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-pty-forward.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-pty-forward",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-pull",
      "en": "systemd public executable systemd-pull",
      "zh": "systemd-pull：systemd public executable systemd-pull（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-pull",
      "context": "linux-system",
      "keywords": [
        "systemd-pull",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-pull 来完成“systemd public executable systemd-pull”时",
          "goal": "按固定官方版本的定义调用 systemd-pull，并依据退出状态判断该操作是否完成",
          "value": "systemd-pull",
          "description": "systemd-pull 的官方用途是“systemd public executable systemd-pull”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-pull；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://github.com/systemd/systemd/tree/v261.1/src/import/meson.build",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/systemd/systemd/tree/v261.1 · src/import/meson.build",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-pull",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-repart",
      "en": "Automatically grow and add partitions, and generate disk images (DDIs)",
      "zh": "systemd-repart：Automatically grow and add partitions, and generate disk images (DDIs)（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-repart",
      "context": "linux-system",
      "keywords": [
        "systemd-repart",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-repart 来完成“Automatically grow and add partitions, and generate disk images (DDIs)”时",
          "goal": "按固定官方版本的定义调用 systemd-repart，并依据退出状态判断该操作是否完成",
          "value": "systemd-repart",
          "description": "systemd-repart 的官方用途是“Automatically grow and add partitions, and generate disk images (DDIs)”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-repart；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": false,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-repart.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "warning": "systemd-repart 可能修改系统、磁盘、账号、服务或进程状态；仅在已确认对象和回滚方案后执行。",
          "riskLevels": [
            "deleteOrOverwrite"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1；执行前先用只读命令检查目标、确认影响范围并备份可恢复数据；优先在隔离环境验证。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-repart.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-repart",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-repart.standalone",
      "en": "systemd public executable systemd-repart.standalone",
      "zh": "systemd-repart.standalone：systemd public executable systemd-repart.standalone（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-repart-standalone",
      "context": "linux-system",
      "keywords": [
        "systemd-repart.standalone",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-repart.standalone 来完成“systemd public executable systemd-repart.standalone”时",
          "goal": "按固定官方版本的定义调用 systemd-repart.standalone，并依据退出状态判断该操作是否完成",
          "value": "systemd-repart.standalone",
          "description": "systemd-repart.standalone 的官方用途是“systemd public executable systemd-repart.standalone”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-repart.standalone；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": false,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://github.com/systemd/systemd/tree/v261.1/src/repart/meson.build",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "warning": "systemd-repart.standalone 可能修改系统、磁盘、账号、服务或进程状态；仅在已确认对象和回滚方案后执行。",
          "riskLevels": [
            "deleteOrOverwrite"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1；执行前先用只读命令检查目标、确认影响范围并备份可恢复数据；优先在隔离环境验证。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/systemd/systemd/tree/v261.1 · src/repart/meson.build",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-repart.standalone",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-report",
      "en": "Generate report of system metrics",
      "zh": "systemd-report：Generate report of system metrics（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-report",
      "context": "linux-system",
      "keywords": [
        "systemd-report",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-report 来完成“Generate report of system metrics”时",
          "goal": "按固定官方版本的定义调用 systemd-report，并依据退出状态判断该操作是否完成",
          "value": "systemd-report",
          "description": "systemd-report 的官方用途是“Generate report of system metrics”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-report；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-report.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-report.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-report",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-report-basic",
      "en": "systemd public executable systemd-report-basic",
      "zh": "systemd-report-basic：systemd public executable systemd-report-basic（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-report-basic",
      "context": "linux-system",
      "keywords": [
        "systemd-report-basic",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-report-basic 来完成“systemd public executable systemd-report-basic”时",
          "goal": "按固定官方版本的定义调用 systemd-report-basic，并依据退出状态判断该操作是否完成",
          "value": "systemd-report-basic",
          "description": "systemd-report-basic 的官方用途是“systemd public executable systemd-report-basic”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-report-basic；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://github.com/systemd/systemd/tree/v261.1/src/report/meson.build",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/systemd/systemd/tree/v261.1 · src/report/meson.build",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-report-basic",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-run",
      "en": "Run programs in transient scope units, service units, or path-, socket-, or timer-triggered service units",
      "zh": "systemd-run：Run programs in transient scope units, service units, or path-, socket-, or timer-triggered service units（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-run",
      "context": "linux-system",
      "keywords": [
        "systemd-run",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-run 来完成“Run programs in transient scope units, service units, or path-, socket-, or timer-triggered service units”时",
          "goal": "按固定官方版本的定义调用 systemd-run，并依据退出状态判断该操作是否完成",
          "value": "systemd-run",
          "description": "systemd-run 的官方用途是“Run programs in transient scope units, service units, or path-, socket-, or timer-triggered service units”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-run；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-run.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-run.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-run",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-socket-activate",
      "en": "Test socket activation of daemons",
      "zh": "systemd-socket-activate：Test socket activation of daemons（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-socket-activate",
      "context": "linux-system",
      "keywords": [
        "systemd-socket-activate",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-socket-activate 来完成“Test socket activation of daemons”时",
          "goal": "按固定官方版本的定义调用 systemd-socket-activate，并依据退出状态判断该操作是否完成",
          "value": "systemd-socket-activate",
          "description": "systemd-socket-activate 的官方用途是“Test socket activation of daemons”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-socket-activate；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-socket-activate.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-socket-activate.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-socket-activate",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-socket-proxyd",
      "en": "Bidirectionally proxy local sockets to another (possibly remote) socket",
      "zh": "systemd-socket-proxyd：Bidirectionally proxy local sockets to another (possibly remote) socket（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-socket-proxyd",
      "context": "linux-system",
      "keywords": [
        "systemd-socket-proxyd",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-socket-proxyd 来完成“Bidirectionally proxy local sockets to another (possibly remote) socket”时",
          "goal": "按固定官方版本的定义调用 systemd-socket-proxyd，并依据退出状态判断该操作是否完成",
          "value": "systemd-socket-proxyd",
          "description": "systemd-socket-proxyd 的官方用途是“Bidirectionally proxy local sockets to another (possibly remote) socket”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-socket-proxyd；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-socket-proxyd.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-socket-proxyd.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-socket-proxyd",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-stdio-bridge",
      "en": "D-Bus proxy",
      "zh": "systemd-stdio-bridge：D-Bus proxy（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-stdio-bridge",
      "context": "linux-system",
      "keywords": [
        "systemd-stdio-bridge",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-stdio-bridge 来完成“D-Bus proxy”时",
          "goal": "按固定官方版本的定义调用 systemd-stdio-bridge，并依据退出状态判断该操作是否完成",
          "value": "systemd-stdio-bridge",
          "description": "systemd-stdio-bridge 的官方用途是“D-Bus proxy”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-stdio-bridge；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-stdio-bridge.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-stdio-bridge.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-stdio-bridge",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-sysctl",
      "en": "Configure kernel parameters at boot",
      "zh": "systemd-sysctl：Configure kernel parameters at boot（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-sysctl",
      "context": "linux-system",
      "keywords": [
        "systemd-sysctl",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-sysctl 来完成“Configure kernel parameters at boot”时",
          "goal": "按固定官方版本的定义调用 systemd-sysctl，并依据退出状态判断该操作是否完成",
          "value": "systemd-sysctl",
          "description": "systemd-sysctl 的官方用途是“Configure kernel parameters at boot”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-sysctl；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": false,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-sysctl.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "warning": "systemd-sysctl 可能修改系统、磁盘、账号、服务或进程状态；仅在已确认对象和回滚方案后执行。",
          "riskLevels": [
            "deleteOrOverwrite"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1；执行前先用只读命令检查目标、确认影响范围并备份可恢复数据；优先在隔离环境验证。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-sysctl.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-sysctl",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-sysext",
      "en": "Activates System Extension Images",
      "zh": "systemd-sysext：Activates System Extension Images（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-sysext",
      "context": "linux-system",
      "keywords": [
        "systemd-sysext",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-sysext 来完成“Activates System Extension Images”时",
          "goal": "按固定官方版本的定义调用 systemd-sysext，并依据退出状态判断该操作是否完成",
          "value": "systemd-sysext",
          "description": "systemd-sysext 的官方用途是“Activates System Extension Images”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-sysext；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-sysext.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：build option: ENABLE_SYSEXT；requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "build option: ENABLE_SYSEXT",
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-sysext.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-sysext",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-sysinstall",
      "en": "Simple OS installer",
      "zh": "systemd-sysinstall：Simple OS installer（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-sysinstall",
      "context": "linux-system",
      "keywords": [
        "systemd-sysinstall",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-sysinstall 来完成“Simple OS installer”时",
          "goal": "按固定官方版本的定义调用 systemd-sysinstall，并依据退出状态判断该操作是否完成",
          "value": "systemd-sysinstall",
          "description": "systemd-sysinstall 的官方用途是“Simple OS installer”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-sysinstall；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-sysinstall.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：build option: ENABLE_SYSINSTALL；requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "build option: ENABLE_SYSINSTALL",
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-sysinstall.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-sysinstall",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-sysupdate",
      "en": "Automatically Update OS or Other Resources",
      "zh": "systemd-sysupdate：Automatically Update OS or Other Resources（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-sysupdate",
      "context": "linux-system",
      "keywords": [
        "systemd-sysupdate",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-sysupdate 来完成“Automatically Update OS or Other Resources”时",
          "goal": "按固定官方版本的定义调用 systemd-sysupdate，并依据退出状态判断该操作是否完成",
          "value": "systemd-sysupdate",
          "description": "systemd-sysupdate 的官方用途是“Automatically Update OS or Other Resources”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-sysupdate；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-sysupdate.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：build option: ENABLE_SYSUPDATE；requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "build option: ENABLE_SYSUPDATE",
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-sysupdate.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-sysupdate",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-sysusers",
      "en": "Allocate system users and groups",
      "zh": "systemd-sysusers：Allocate system users and groups（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-sysusers",
      "context": "linux-system",
      "keywords": [
        "systemd-sysusers",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-sysusers 来完成“Allocate system users and groups”时",
          "goal": "按固定官方版本的定义调用 systemd-sysusers，并依据退出状态判断该操作是否完成",
          "value": "systemd-sysusers",
          "description": "systemd-sysusers 的官方用途是“Allocate system users and groups”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-sysusers；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": false,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-sysusers.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "warning": "systemd-sysusers 可能修改系统、磁盘、账号、服务或进程状态；仅在已确认对象和回滚方案后执行。",
          "riskLevels": [
            "deleteOrOverwrite"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1；执行前先用只读命令检查目标、确认影响范围并备份可恢复数据；优先在隔离环境验证。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-sysusers.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-sysusers",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-sysusers.standalone",
      "en": "systemd public executable systemd-sysusers.standalone",
      "zh": "systemd-sysusers.standalone：systemd public executable systemd-sysusers.standalone（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-sysusers-standalone",
      "context": "linux-system",
      "keywords": [
        "systemd-sysusers.standalone",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-sysusers.standalone 来完成“systemd public executable systemd-sysusers.standalone”时",
          "goal": "按固定官方版本的定义调用 systemd-sysusers.standalone，并依据退出状态判断该操作是否完成",
          "value": "systemd-sysusers.standalone",
          "description": "systemd-sysusers.standalone 的官方用途是“systemd public executable systemd-sysusers.standalone”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-sysusers.standalone；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": false,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://github.com/systemd/systemd/tree/v261.1/src/sysusers/meson.build",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "warning": "systemd-sysusers.standalone 可能修改系统、磁盘、账号、服务或进程状态；仅在已确认对象和回滚方案后执行。",
          "riskLevels": [
            "deleteOrOverwrite"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1；执行前先用只读命令检查目标、确认影响范围并备份可恢复数据；优先在隔离环境验证。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/systemd/systemd/tree/v261.1 · src/sysusers/meson.build",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-sysusers.standalone",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-tmpfiles",
      "en": "Create, delete, and clean up files and directories",
      "zh": "systemd-tmpfiles：Create, delete, and clean up files and directories（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-tmpfiles",
      "context": "linux-system",
      "keywords": [
        "systemd-tmpfiles",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-tmpfiles 来完成“Create, delete, and clean up files and directories”时",
          "goal": "按固定官方版本的定义调用 systemd-tmpfiles，并依据退出状态判断该操作是否完成",
          "value": "systemd-tmpfiles",
          "description": "systemd-tmpfiles 的官方用途是“Create, delete, and clean up files and directories”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-tmpfiles；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": false,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-tmpfiles.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "warning": "systemd-tmpfiles 可能修改系统、磁盘、账号、服务或进程状态；仅在已确认对象和回滚方案后执行。",
          "riskLevels": [
            "deleteOrOverwrite"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1；执行前先用只读命令检查目标、确认影响范围并备份可恢复数据；优先在隔离环境验证。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-tmpfiles.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-tmpfiles",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-tmpfiles.standalone",
      "en": "systemd public executable systemd-tmpfiles.standalone",
      "zh": "systemd-tmpfiles.standalone：systemd public executable systemd-tmpfiles.standalone（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-tmpfiles-standalone",
      "context": "linux-system",
      "keywords": [
        "systemd-tmpfiles.standalone",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-tmpfiles.standalone 来完成“systemd public executable systemd-tmpfiles.standalone”时",
          "goal": "按固定官方版本的定义调用 systemd-tmpfiles.standalone，并依据退出状态判断该操作是否完成",
          "value": "systemd-tmpfiles.standalone",
          "description": "systemd-tmpfiles.standalone 的官方用途是“systemd public executable systemd-tmpfiles.standalone”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-tmpfiles.standalone；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": false,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://github.com/systemd/systemd/tree/v261.1/src/tmpfiles/meson.build",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "warning": "systemd-tmpfiles.standalone 可能修改系统、磁盘、账号、服务或进程状态；仅在已确认对象和回滚方案后执行。",
          "riskLevels": [
            "deleteOrOverwrite"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1；执行前先用只读命令检查目标、确认影响范围并备份可恢复数据；优先在隔离环境验证。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/systemd/systemd/tree/v261.1 · src/tmpfiles/meson.build",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-tmpfiles.standalone",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-tty-ask-password-agent",
      "en": "List or process pending systemd password requests",
      "zh": "systemd-tty-ask-password-agent：List or process pending systemd password requests（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-tty-ask-password-agent",
      "context": "linux-system",
      "keywords": [
        "systemd-tty-ask-password-agent",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-tty-ask-password-agent 来完成“List or process pending systemd password requests”时",
          "goal": "按固定官方版本的定义调用 systemd-tty-ask-password-agent，并依据退出状态判断该操作是否完成",
          "value": "systemd-tty-ask-password-agent",
          "description": "systemd-tty-ask-password-agent 的官方用途是“List or process pending systemd password requests”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-tty-ask-password-agent；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-tty-ask-password-agent.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-tty-ask-password-agent.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-tty-ask-password-agent",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-vmspawn",
      "en": "Spawn an OS in a virtual machine",
      "zh": "systemd-vmspawn：Spawn an OS in a virtual machine（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-vmspawn",
      "context": "linux-system",
      "keywords": [
        "systemd-vmspawn",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-vmspawn 来完成“Spawn an OS in a virtual machine”时",
          "goal": "按固定官方版本的定义调用 systemd-vmspawn，并依据退出状态判断该操作是否完成",
          "value": "systemd-vmspawn",
          "description": "systemd-vmspawn 的官方用途是“Spawn an OS in a virtual machine”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-vmspawn；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-vmspawn.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-vmspawn.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-vmspawn",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "systemd-vpick",
      "en": "Resolve paths to .v/ versioned directories",
      "zh": "systemd-vpick：Resolve paths to .v/ versioned directories（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-systemd-vpick",
      "context": "linux-system",
      "keywords": [
        "systemd-vpick",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 systemd-vpick 来完成“Resolve paths to .v/ versioned directories”时",
          "goal": "按固定官方版本的定义调用 systemd-vpick，并依据退出状态判断该操作是否完成",
          "value": "systemd-vpick",
          "description": "systemd-vpick 的官方用途是“Resolve paths to .v/ versioned directories”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 systemd-vpick；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-vpick.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/systemd-vpick.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "systemd-vpick",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "taskset",
      "en": "set or retrieve a process's CPU affinity",
      "zh": "taskset：set or retrieve a process's CPU affinity（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-taskset",
      "context": "linux-system",
      "keywords": [
        "taskset",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "性能测试需要固定在一个 CPU 上运行，以减少跨核调度对结果的干扰",
          "goal": "把 npm test 限定到 CPU 0",
          "value": "taskset -c 0 npm test",
          "description": "-c 使用 CPU 列表语法，后面的 npm test 是受亲和性约束的嵌套命令。",
          "expected": "测试进程及其继承者在允许的 CPU 集合内运行；命令结束后约束随进程消失。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · schedutils/taskset.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ]
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · schedutils/taskset.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "taskset [options] mask command [argument...] taskset [options] -p [mask] pid",
      "options": [
        "-a",
        "--all-tasks",
        "-c",
        "--cpu-list",
        "-p",
        "--pid"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "tc",
      "en": "tc show / manipulate traffic control settings",
      "zh": "tc：tc show / manipulate traffic control settings（来源：iproute2）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-tc",
      "context": "linux-system",
      "keywords": [
        "tc",
        "命令",
        "终端",
        "iproute2"
      ],
      "examples": [
        {
          "scenario": "需要使用 iproute2 提供的 tc 来完成“tc show / manipulate traffic control settings”时",
          "goal": "按固定官方版本的定义调用 tc，并依据退出状态判断该操作是否完成",
          "value": "tc",
          "description": "tc 的官方用途是“tc show / manipulate traffic control settings”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 iproute2 的定义执行 tc；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "iproute2-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "iproute2-repository",
              "locator": "https://git.kernel.org/pub/scm/network/iproute2/iproute2.git/tag/?h=v7.1.0/tree/man/man8/tc.8",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with iproute2 7.1.0 installed; optional targets depend on build features。"
        }
      ],
      "components": [
        "iproute2"
      ],
      "constraints": [
        "requires Linux with iproute2 7.1.0 installed; optional targets depend on build features"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "iproute2-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://git.kernel.org/pub/scm/network/iproute2/iproute2.git/tag/?h=v7.1.0 · man/man8/tc.8",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "tc \"[ \" OPTIONS \" ]\" qdisc [ add | change | replace | link | delete ] dev DEV [ parent qdisc-id | root ] [ handle qdisc-id ] [ ingress_block BLOCK_INDEX ] [ egress_block BLOCK_INDEX ] qdisc [ qdisc specific parameters ] tc \"[ \" OPTIONS \" ]\" class [ add | change | replace | delete",
      "options": [
        "-b",
        "-batch",
        "-force",
        "-o",
        "-oneline",
        "-n",
        "-net",
        "-netns"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "timedatectl",
      "en": "Inspect system time configuration",
      "zh": "查看时间配置",
      "context": "linux-system",
      "platforms": [
        "linux"
      ],
      "id": "linux-timedatectl",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/timedatectl.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "keywords": [
        "timedatectl",
        "查看时间配置",
        "Inspect system time configuration",
        "Linux",
        "systemd"
      ],
      "examples": [
        {
          "value": "timedatectl status",
          "description": "查看本地时间、时区和同步状态，用于排查时区或时间同步问题",
          "scenario": "排查时区或时间同步问题时",
          "goal": "查看本地时间、时区和同步状态",
          "expected": "输出时钟、时区与 NTP 同步摘要",
          "caveat": "仅适用于使用 systemd-timedated 的发行版",
          "copyable": true,
          "sourceType": "official",
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceIds": [
            "systemd-man"
          ],
          "platforms": [
            "linux"
          ],
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/timedatectl.html",
              "claims": [
                "value",
                "behavior",
                "expected",
                "platform",
                "caveat"
              ]
            }
          ]
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "build option: ENABLE_TIMEDATECTL",
        "requires a Linux distribution built with systemd 261.1"
      ],
      "usage": "timedatectl",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "tipc",
      "en": "tipc a TIPC configuration and management tool",
      "zh": "tipc：tipc a TIPC configuration and management tool（来源：iproute2）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-tipc",
      "context": "linux-system",
      "keywords": [
        "tipc",
        "命令",
        "终端",
        "iproute2"
      ],
      "examples": [
        {
          "scenario": "需要使用 iproute2 提供的 tipc 来完成“tipc a TIPC configuration and management tool”时",
          "goal": "按固定官方版本的定义调用 tipc，并依据退出状态判断该操作是否完成",
          "value": "tipc",
          "description": "tipc 的官方用途是“tipc a TIPC configuration and management tool”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 iproute2 的定义执行 tipc；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "iproute2-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "iproute2-repository",
              "locator": "https://git.kernel.org/pub/scm/network/iproute2/iproute2.git/tag/?h=v7.1.0/tree/man/man8/tipc.8",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with iproute2 7.1.0 installed; optional targets depend on build features。"
        }
      ],
      "components": [
        "iproute2"
      ],
      "constraints": [
        "requires Linux with iproute2 7.1.0 installed; optional targets depend on build features"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "iproute2-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://git.kernel.org/pub/scm/network/iproute2/iproute2.git/tag/?h=v7.1.0 · man/man8/tipc.8",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": ".ad l .in +8 .ti -8 tipc \"[ \" OPTIONS \" ] \" COMMAND \" \" ARGUMENTS \" .sp .ti -8 COMMAND \" := { \" bearer \" | \" link \" | \" media \" | \" nametable \" | \" node \" | \" socket \" } .sp .ti -8 OPTIONS \" := { \" h[help] }",
      "options": [
        "-h",
        "--help",
        "-j",
        "-json",
        "-p",
        "-pretty"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "tload",
      "en": "tload graphic representation of system load average",
      "zh": "tload：tload graphic representation of system load average（来源：procps-ng）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-tload",
      "context": "linux-system",
      "keywords": [
        "tload",
        "命令",
        "终端",
        "procps-ng"
      ],
      "examples": [
        {
          "scenario": "需要使用 procps-ng 提供的 tload 来完成“tload graphic representation of system load average”时",
          "goal": "按固定官方版本的定义调用 tload，并依据退出状态判断该操作是否完成",
          "value": "tload",
          "description": "tload 的官方用途是“tload graphic representation of system load average”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 procps-ng 的定义执行 tload；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "procps-ng-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "procps-ng-repository",
              "locator": "https://gitlab.com/procps-ng/procps/-/tags/v4.0.6/man/tload.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with procps-ng 4.0.6 installed。"
        }
      ],
      "components": [
        "procps-ng"
      ],
      "constraints": [
        "requires Linux with procps-ng 4.0.6 installed"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "procps-ng-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://gitlab.com/procps-ng/procps/-/tags/v4.0.6 · man/tload.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "tload [ option \" .\\|.\\|.]\" [ tty ]",
      "options": [
        "-s",
        "--scale",
        "-d",
        "--delay",
        "-h",
        "--help",
        "-V",
        "--version"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "top",
      "en": ".\\\" ---------------------------------------------------------------------- top display Linux processes .\\\"",
      "zh": "top：.\\\" ---------------------------------------------------------------------- top display Linux processes .\\\"（来源：procps-ng）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-top",
      "context": "linux-system",
      "keywords": [
        "top",
        "命令",
        "终端",
        "procps-ng"
      ],
      "examples": [
        {
          "scenario": "需要使用 procps-ng 提供的 top 来完成“.\\\" ---------------------------------------------------------------------- top display Linux processes .\\\"”时",
          "goal": "按固定官方版本的定义调用 top，并依据退出状态判断该操作是否完成",
          "value": "top",
          "description": "top 的官方用途是“.\\\" ---------------------------------------------------------------------- top display Linux processes .\\\"”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 procps-ng 的定义执行 top；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "procps-ng-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "procps-ng-repository",
              "locator": "https://gitlab.com/procps-ng/procps/-/tags/v4.0.6/man/top.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with procps-ng 4.0.6 installed。"
        }
      ],
      "components": [
        "procps-ng"
      ],
      "constraints": [
        "requires Linux with procps-ng 4.0.6 installed"
      ],
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
      "usage": ".\\\" ---------------------------------------------------------------------- \\*(WE [ option \" .\\|.\\|.]\" .\\\"",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "tunelp",
      "en": "set various parameters for the lp device",
      "zh": "tunelp：set various parameters for the lp device（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-tunelp",
      "context": "linux-system",
      "keywords": [
        "tunelp",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 tunelp 来完成“set various parameters for the lp device”时",
          "goal": "按固定官方版本的定义调用 tunelp，并依据退出状态判断该操作是否完成",
          "value": "tunelp",
          "description": "tunelp 的官方用途是“set various parameters for the lp device”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 tunelp；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/sys-utils/tunelp.8.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · sys-utils/tunelp.8.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "tunelp [options] device",
      "options": [
        "-i",
        "--irq",
        "-t",
        "-c",
        "--time",
        "--chars",
        "-w",
        "--wait"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "uclampset",
      "en": "manipulate the utilization clamping attributes of the system or a process",
      "zh": "uclampset：manipulate the utilization clamping attributes of the system or a process（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-uclampset",
      "context": "linux-system",
      "keywords": [
        "uclampset",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 uclampset 来完成“manipulate the utilization clamping attributes of the system or a process”时",
          "goal": "按固定官方版本的定义调用 uclampset，并依据退出状态判断该操作是否完成",
          "value": "uclampset",
          "description": "uclampset 的官方用途是“manipulate the utilization clamping attributes of the system or a process”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 uclampset；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/schedutils/uclampset.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · schedutils/uclampset.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "uclampset [options] [-m minimum] [-M maximum] -p PID uclampset [options] [-m minimum] [-M maximum] command [argument...]",
      "options": [
        "-m",
        "-M",
        "-a",
        "--all-tasks",
        "-p",
        "--pid",
        "-s",
        "--system"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "udevadm",
      "en": "udev management tool",
      "zh": "udevadm：udev management tool（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-udevadm",
      "context": "linux-system",
      "keywords": [
        "udevadm",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 udevadm 来完成“udev management tool”时",
          "goal": "按固定官方版本的定义调用 udevadm，并依据退出状态判断该操作是否完成",
          "value": "udevadm",
          "description": "udevadm 的官方用途是“udev management tool”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 udevadm；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/udevadm.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/udevadm.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "udevadm",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "ul",
      "en": "do underlining",
      "zh": "ul：do underlining（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-ul",
      "context": "linux-system",
      "keywords": [
        "ul",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 ul 来完成“do underlining”时",
          "goal": "按固定官方版本的定义调用 ul，并依据退出状态判断该操作是否完成",
          "value": "ul",
          "description": "ul 的官方用途是“do underlining”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 ul；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/text-utils/ul.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · text-utils/ul.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "ul [options] [file...]",
      "options": [
        "-i",
        "--indicated",
        "-t",
        "-T",
        "--terminal"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "umount",
      "en": "unmount filesystems",
      "zh": "umount：unmount filesystems（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-umount",
      "context": "linux-system",
      "keywords": [
        "umount",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 umount 来完成“unmount filesystems”时",
          "goal": "按固定官方版本的定义调用 umount，并依据退出状态判断该操作是否完成",
          "value": "umount",
          "description": "umount 的官方用途是“unmount filesystems”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 umount；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": false,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/sys-utils/umount.8.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "warning": "umount 可能修改系统、磁盘、账号、服务或进程状态；仅在已确认对象和回滚方案后执行。",
          "riskLevels": [
            "deleteOrOverwrite"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration；执行前先用只读命令检查目标、确认影响范围并备份可恢复数据；优先在隔离环境验证。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · sys-utils/umount.8.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "umount -a [-dflnrv] [-t fstype] [-O option...] umount [-dflnrv] {directory|device} umount -h|-V",
      "options": [
        "-a",
        "--all",
        "--types",
        "-A",
        "--all-targets",
        "--recursive",
        "-c",
        "--no-canonicalize"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "umount.static",
      "en": "statically linked unmount filesystems",
      "zh": "umount.static：statically linked unmount filesystems（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-umount-static",
      "context": "linux-system",
      "keywords": [
        "umount.static",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 umount.static 来完成“statically linked unmount filesystems”时",
          "goal": "按固定官方版本的定义调用 umount.static，并依据退出状态判断该操作是否完成",
          "value": "umount.static",
          "description": "umount.static 的官方用途是“statically linked unmount filesystems”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 umount.static；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/meson.build#optional-static-target-umount.static",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration；requires a util-linux 2.42.2 build with the corresponding static_programs target enabled。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration",
        "requires a util-linux 2.42.2 build with the corresponding static_programs target enabled"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · meson.build executable('umount.static')",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "umount.static -a [-dflnrv] [-t fstype] [-O option...] umount [-dflnrv] {directory|device} umount -h|-V",
      "options": [
        "-a",
        "--all",
        "--types",
        "-A",
        "--all-targets",
        "--recursive",
        "-c",
        "--no-canonicalize"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "unshare",
      "en": "run program in new namespaces",
      "zh": "unshare：run program in new namespaces（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-unshare",
      "context": "linux-system",
      "keywords": [
        "unshare",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要验证容器命名空间的挂载影响范围，但不希望实验进入调用者已有的命名空间",
          "goal": "在新的容器命名空间式挂载视图中启动 shell",
          "value": "unshare --mount /bin/sh",
          "description": "--mount 创建新的挂载命名空间，并把 /bin/sh 作为嵌套程序运行。",
          "expected": "权限允许时进入新命名空间中的 shell；退出后该进程命名空间随之结束。",
          "caveat": "新命名空间并不自动提供完整容器隔离；仍应避免对共享路径执行写操作。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · sys-utils/unshare.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ]
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · sys-utils/unshare.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "unshare [options] [program [arguments]]",
      "options": [
        "-i",
        "--ipc",
        "-m",
        "--mount",
        "-o",
        "-n",
        "--net",
        "-p"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "unshare.static",
      "en": "statically linked run program in new namespaces",
      "zh": "unshare.static：statically linked run program in new namespaces（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-unshare-static",
      "context": "linux-system",
      "keywords": [
        "unshare.static",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 unshare.static 来完成“statically linked run program in new namespaces”时",
          "goal": "按固定官方版本的定义调用 unshare.static，并依据退出状态判断该操作是否完成",
          "value": "unshare.static",
          "description": "unshare.static 的官方用途是“statically linked run program in new namespaces”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 unshare.static；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/meson.build#optional-static-target-unshare.static",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration；requires a util-linux 2.42.2 build with the corresponding static_programs target enabled。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration",
        "requires a util-linux 2.42.2 build with the corresponding static_programs target enabled"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · meson.build executable('unshare.static')",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "unshare.static [options] [program [arguments]]",
      "options": [
        "-i",
        "--ipc",
        "-m",
        "--mount",
        "-o",
        "-n",
        "--net",
        "-p"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "updatectl",
      "en": "Control the system update service",
      "zh": "updatectl：Control the system update service（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-updatectl",
      "context": "linux-system",
      "keywords": [
        "updatectl",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 updatectl 来完成“Control the system update service”时",
          "goal": "按固定官方版本的定义调用 updatectl，并依据退出状态判断该操作是否完成",
          "value": "updatectl",
          "description": "updatectl 的官方用途是“Control the system update service”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 updatectl；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/updatectl.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：build option: ENABLE_SYSUPDATED；requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "build option: ENABLE_SYSUPDATED",
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/updatectl.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "updatectl",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "uptime",
      "en": "Show uptime and load averages",
      "zh": "查看运行时长与负载",
      "context": "linux-system",
      "platforms": [
        "linux"
      ],
      "id": "linux-uptime",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "procps-ng-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://gitlab.com/procps-ng/procps/-/tags/v4.0.6 · man/uptime.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "keywords": [
        "uptime",
        "查看运行时长与负载",
        "Show uptime and load averages",
        "Linux",
        "系统工具"
      ],
      "examples": [
        {
          "scenario": "告警恢复后需要判断主机是否刚重启，从而区分进程故障与整机重启",
          "goal": "以易读格式查看持续运行时间",
          "value": "uptime -p",
          "description": "-p 只展示易读的持续运行时长。",
          "expected": "终端输出主机已运行的天、小时或分钟，不修改系统状态。",
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
              "locator": "https://gitlab.com/procps-ng/procps/-/tags/v4.0.6 · man/uptime.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ]
        }
      ],
      "components": [
        "procps-ng"
      ],
      "constraints": [
        "requires Linux with procps-ng 4.0.6 installed"
      ],
      "usage": "uptime [ option \" .\\|.\\|.]\"",
      "options": [
        "-c",
        "--container",
        "-p",
        "--pretty",
        "-h",
        "--help",
        "-r",
        "--raw"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "utmpdump",
      "en": "dump UTMP and WTMP files in raw format",
      "zh": "utmpdump：dump UTMP and WTMP files in raw format（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-utmpdump",
      "context": "linux-system",
      "keywords": [
        "utmpdump",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 utmpdump 来完成“dump UTMP and WTMP files in raw format”时",
          "goal": "按固定官方版本的定义调用 utmpdump，并依据退出状态判断该操作是否完成",
          "value": "utmpdump",
          "description": "utmpdump 的官方用途是“dump UTMP and WTMP files in raw format”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 utmpdump；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/login-utils/utmpdump.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · login-utils/utmpdump.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "utmpdump [options] filename",
      "options": [
        "-f",
        "--follow",
        "-o",
        "--output",
        "-r",
        "--reverse"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "uuidd",
      "en": "UUID generation daemon",
      "zh": "uuidd：UUID generation daemon（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-uuidd",
      "context": "linux-system",
      "keywords": [
        "uuidd",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 uuidd 来完成“UUID generation daemon”时",
          "goal": "按固定官方版本的定义调用 uuidd，并依据退出状态判断该操作是否完成",
          "value": "uuidd",
          "description": "uuidd 的官方用途是“UUID generation daemon”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 uuidd；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/misc-utils/uuidd.8.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · misc-utils/uuidd.8.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "uuidd [options]",
      "options": [
        "-C",
        "--cont-clock",
        "-d",
        "--debug",
        "-F",
        "--no-fork",
        "-k",
        "--kill"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "uuidgen",
      "en": "create a new UUID value",
      "zh": "uuidgen：create a new UUID value（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-uuidgen",
      "context": "linux-system",
      "keywords": [
        "uuidgen",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 uuidgen 来完成“create a new UUID value”时",
          "goal": "按固定官方版本的定义调用 uuidgen，并依据退出状态判断该操作是否完成",
          "value": "uuidgen",
          "description": "uuidgen 的官方用途是“create a new UUID value”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 uuidgen；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/misc-utils/uuidgen.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · misc-utils/uuidgen.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "uuidgen [options]",
      "options": [
        "-r",
        "--random",
        "-t",
        "--time",
        "-m",
        "--md5",
        "-s",
        "--sha1"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "uuidparse",
      "en": "a utility to parse unique identifiers",
      "zh": "uuidparse：a utility to parse unique identifiers（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-uuidparse",
      "context": "linux-system",
      "keywords": [
        "uuidparse",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 uuidparse 来完成“a utility to parse unique identifiers”时",
          "goal": "按固定官方版本的定义调用 uuidparse，并依据退出状态判断该操作是否完成",
          "value": "uuidparse",
          "description": "uuidparse 的官方用途是“a utility to parse unique identifiers”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 uuidparse；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/misc-utils/uuidparse.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · misc-utils/uuidparse.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "uuidparse [options] uuid",
      "options": [
        "-J",
        "--json",
        "-n",
        "--noheadings",
        "-o",
        "--output",
        "--help",
        "-r"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "varlinkctl",
      "en": "Introspect with and invoke Varlink services",
      "zh": "varlinkctl：Introspect with and invoke Varlink services（来源：systemd）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-varlinkctl",
      "context": "linux-system",
      "keywords": [
        "varlinkctl",
        "命令",
        "终端",
        "systemd"
      ],
      "examples": [
        {
          "scenario": "需要使用 systemd 提供的 varlinkctl 来完成“Introspect with and invoke Varlink services”时",
          "goal": "按固定官方版本的定义调用 varlinkctl，并依据退出状态判断该操作是否完成",
          "value": "varlinkctl",
          "description": "varlinkctl 的官方用途是“Introspect with and invoke Varlink services”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 systemd 的定义执行 varlinkctl；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "systemd-man"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "systemd-man",
              "locator": "https://www.freedesktop.org/software/systemd/man/latest/varlinkctl.html",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires a Linux distribution built with systemd 261.1。"
        }
      ],
      "components": [
        "systemd"
      ],
      "constraints": [
        "requires a Linux distribution built with systemd 261.1"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "systemd-man",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://www.freedesktop.org/software/systemd/man/latest/varlinkctl.html",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "varlinkctl",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "vdpa",
      "en": "vdpa vdpa management tool",
      "zh": "vdpa：vdpa vdpa management tool（来源：iproute2）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-vdpa",
      "context": "linux-system",
      "keywords": [
        "vdpa",
        "命令",
        "终端",
        "iproute2"
      ],
      "examples": [
        {
          "scenario": "需要使用 iproute2 提供的 vdpa 来完成“vdpa vdpa management tool”时",
          "goal": "按固定官方版本的定义调用 vdpa，并依据退出状态判断该操作是否完成",
          "value": "vdpa",
          "description": "vdpa 的官方用途是“vdpa vdpa management tool”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 iproute2 的定义执行 vdpa；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "iproute2-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "iproute2-repository",
              "locator": "https://git.kernel.org/pub/scm/network/iproute2/iproute2.git/tag/?h=v7.1.0/tree/man/man8/vdpa.8",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with iproute2 7.1.0 installed; optional targets depend on build features。"
        }
      ],
      "components": [
        "iproute2"
      ],
      "constraints": [
        "requires Linux with iproute2 7.1.0 installed; optional targets depend on build features"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "iproute2-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://git.kernel.org/pub/scm/network/iproute2/iproute2.git/tag/?h=v7.1.0 · man/man8/vdpa.8",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": ".sp .ad l .in +8 .ti -8 vdpa \"[ \" OPTIONS \" ] { \" dev | mgmtdev \" } { \" COMMAND \" | \" help \" }\" .sp",
      "options": [
        "-V",
        "--Version",
        "-j",
        "--json",
        "-p",
        "--pretty"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "vipw",
      "en": "edit the password or group file",
      "zh": "vipw：edit the password or group file（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-vipw",
      "context": "linux-system",
      "keywords": [
        "vipw",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 vipw 来完成“edit the password or group file”时",
          "goal": "按固定官方版本的定义调用 vipw，并依据退出状态判断该操作是否完成",
          "value": "vipw",
          "description": "vipw 的官方用途是“edit the password or group file”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 vipw；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": false,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/login-utils/vipw.8.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "warning": "vipw 可能修改系统、磁盘、账号、服务或进程状态；仅在已确认对象和回滚方案后执行。",
          "riskLevels": [
            "deleteOrOverwrite"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration；执行前先用只读命令检查目标、确认影响范围并备份可恢复数据；优先在隔离环境验证。"
        }
      ],
      "aliases": [
        "vigr"
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · login-utils/vipw.8.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "vipw [options] vigr [options]",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "vmstat",
      "en": "Report virtual memory statistics",
      "zh": "采样系统资源统计",
      "context": "linux-system",
      "platforms": [
        "linux"
      ],
      "id": "linux-vmstat",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "procps-ng-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://gitlab.com/procps-ng/procps/-/tags/v4.0.6 · man/vmstat.8",
          "checkedAt": "2026-07-31"
        }
      ],
      "keywords": [
        "vmstat",
        "采样系统资源统计",
        "Report virtual memory statistics",
        "Linux",
        "系统工具"
      ],
      "examples": [
        {
          "scenario": "接口响应偶发变慢并伴随内存压力，需要连续采样 CPU、内存、换页和 I/O 指标判断瓶颈",
          "goal": "每秒采样一次并输出五组统计",
          "value": "vmstat 1 5",
          "description": "第一个操作数是采样间隔，第二个操作数限制样本数量。",
          "expected": "终端依次输出五组进程、内存、换页、I/O 和 CPU 统计。",
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
              "locator": "https://gitlab.com/procps-ng/procps/-/tags/v4.0.6 · man/vmstat.8",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ]
        }
      ],
      "components": [
        "procps-ng"
      ],
      "constraints": [
        "requires Linux with procps-ng 4.0.6 installed"
      ],
      "usage": "vmstat [ option \" .\\|.\\|.]\" [ delay \" [\" count ]]",
      "options": [
        "-a",
        "--active",
        "-f",
        "--forks",
        "-m",
        "--slabs",
        "-n",
        "--one-header"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "w",
      "en": "w Show who is logged on and what they are doing.",
      "zh": "w：w Show who is logged on and what they are doing.（来源：procps-ng）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-w",
      "context": "linux-system",
      "keywords": [
        "w",
        "命令",
        "终端",
        "procps-ng"
      ],
      "examples": [
        {
          "scenario": "需要使用 procps-ng 提供的 w 来完成“w Show who is logged on and what they are doing”时",
          "goal": "按固定官方版本的定义调用 w，并依据退出状态判断该操作是否完成",
          "value": "w",
          "description": "w 的官方用途是“w Show who is logged on and what they are doing”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 procps-ng 的定义执行 w；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "procps-ng-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "procps-ng-repository",
              "locator": "https://gitlab.com/procps-ng/procps/-/tags/v4.0.6/man/w.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with procps-ng 4.0.6 installed。"
        }
      ],
      "components": [
        "procps-ng"
      ],
      "constraints": [
        "requires Linux with procps-ng 4.0.6 installed"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "procps-ng-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://gitlab.com/procps-ng/procps/-/tags/v4.0.6 · man/w.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "w [ option \" .\\|.\\|.]\" [ user ]",
      "options": [
        "-c",
        "--container",
        "-h",
        "--no",
        "-header",
        "-u",
        "-current",
        "-s"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "waitpid",
      "en": "utility to wait for arbitrary processes",
      "zh": "waitpid：utility to wait for arbitrary processes（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-waitpid",
      "context": "linux-system",
      "keywords": [
        "waitpid",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 waitpid 来完成“utility to wait for arbitrary processes”时",
          "goal": "按固定官方版本的定义调用 waitpid，并依据退出状态判断该操作是否完成",
          "value": "waitpid",
          "description": "waitpid 的官方用途是“utility to wait for arbitrary processes”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 waitpid；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/misc-utils/waitpid.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · misc-utils/waitpid.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "waitpid [-v] [--timeout|-t seconds] PID[:inode]...",
      "options": [
        "-v",
        "--verbose",
        "-t",
        "--timeout",
        "-e",
        "--exited",
        "-c",
        "--count"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "wall",
      "en": "write a message to all users",
      "zh": "wall：write a message to all users（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-wall",
      "context": "linux-system",
      "keywords": [
        "wall",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 wall 来完成“write a message to all users”时",
          "goal": "按固定官方版本的定义调用 wall，并依据退出状态判断该操作是否完成",
          "value": "wall",
          "description": "wall 的官方用途是“write a message to all users”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 wall；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/term-utils/wall.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · term-utils/wall.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "wall [-n] [-t timeout] [-g group] [message | file]",
      "options": [
        "-n",
        "--nobanner",
        "-t",
        "--timeout",
        "-g",
        "--group"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "watch",
      "en": "Run a command periodically",
      "zh": "周期执行并刷新输出",
      "context": "linux-system",
      "platforms": [
        "linux"
      ],
      "id": "linux-watch",
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "procps-ng-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://gitlab.com/procps-ng/procps/-/tags/v4.0.6 · man/watch.1",
          "checkedAt": "2026-07-31"
        }
      ],
      "keywords": [
        "watch",
        "周期执行并刷新输出",
        "Run a command periodically",
        "Linux",
        "系统工具"
      ],
      "examples": [
        {
          "scenario": "压测期间需要在同一屏幕反复观察内存统计，而不手工重复输入命令",
          "goal": "周期性执行 free -m",
          "value": "watch free -m",
          "description": "watch 把后面的 free -m 作为嵌套命令并定期刷新其输出。",
          "expected": "终端进入持续刷新的内存统计视图，退出 watch 后停止重复执行。",
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
              "locator": "https://gitlab.com/procps-ng/procps/-/tags/v4.0.6 · man/watch.1",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ]
        }
      ],
      "components": [
        "procps-ng"
      ],
      "constraints": [
        "requires Linux with procps-ng 4.0.6 installed"
      ],
      "usage": "watch [ option \" .\\|.\\|.]\" command",
      "options": [
        "-b",
        "--beep",
        "-c",
        "--color",
        "-C",
        "--no-color",
        "-d",
        "--differences"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "wdctl",
      "en": "show hardware watchdog status",
      "zh": "wdctl：show hardware watchdog status（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-wdctl",
      "context": "linux-system",
      "keywords": [
        "wdctl",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 wdctl 来完成“show hardware watchdog status”时",
          "goal": "按固定官方版本的定义调用 wdctl，并依据退出状态判断该操作是否完成",
          "value": "wdctl",
          "description": "wdctl 的官方用途是“show hardware watchdog status”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 wdctl；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/sys-utils/wdctl.8.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · sys-utils/wdctl.8.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "wdctl [options] [device...]",
      "options": [
        "-f",
        "--flags",
        "-F",
        "--noflags",
        "-I",
        "--noident",
        "-n",
        "--noheadings"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "whereis",
      "en": "locate the binary, source, and manual page files for a command",
      "zh": "whereis：locate the binary, source, and manual page files for a command（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-whereis",
      "context": "linux-system",
      "keywords": [
        "whereis",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 whereis 来完成“locate the binary, source, and manual page files for a command”时",
          "goal": "按固定官方版本的定义调用 whereis，并依据退出状态判断该操作是否完成",
          "value": "whereis",
          "description": "whereis 的官方用途是“locate the binary, source, and manual page files for a command”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 whereis；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/misc-utils/whereis.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · misc-utils/whereis.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "whereis [options] [-BMS directory... -f] name...",
      "options": [
        "-b",
        "-m",
        "-s",
        "-u",
        "-B",
        "-M",
        "-S",
        "-f"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "wipefs",
      "en": "wipe a signature from a device",
      "zh": "wipefs：wipe a signature from a device（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-wipefs",
      "context": "linux-system",
      "keywords": [
        "wipefs",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 wipefs 来完成“wipe a signature from a device”时",
          "goal": "按固定官方版本的定义调用 wipefs，并依据退出状态判断该操作是否完成",
          "value": "wipefs",
          "description": "wipefs 的官方用途是“wipe a signature from a device”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 wipefs；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": false,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/misc-utils/wipefs.8.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "warning": "wipefs 可能修改系统、磁盘、账号、服务或进程状态；仅在已确认对象和回滚方案后执行。",
          "riskLevels": [
            "deleteOrOverwrite"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration；执行前先用只读命令检查目标、确认影响范围并备份可恢复数据；优先在隔离环境验证。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · misc-utils/wipefs.8.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "wipefs [options] device... wipefs [--backup] -o offset device... wipefs [--backup] -a device...",
      "options": [
        "-a",
        "--all",
        "-t",
        "-b",
        "--backup",
        "-f",
        "--force",
        "-J"
      ],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "write",
      "en": "send a message to another user",
      "zh": "write：send a message to another user（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-write",
      "context": "linux-system",
      "keywords": [
        "write",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 write 来完成“send a message to another user”时",
          "goal": "按固定官方版本的定义调用 write，并依据退出状态判断该操作是否完成",
          "value": "write",
          "description": "write 的官方用途是“send a message to another user”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 write；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/term-utils/write.1.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · term-utils/write.1.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "write user [ttyname]",
      "options": [],
      "entryType": "cli-command"
    },
    {
      "cat": "slash",
      "cmd": "zramctl",
      "en": "set up and control zram devices",
      "zh": "zramctl：set up and control zram devices（来源：util-linux）。",
      "platforms": [
        "linux"
      ],
      "id": "linux-zramctl",
      "context": "linux-system",
      "keywords": [
        "zramctl",
        "命令",
        "终端",
        "util-linux"
      ],
      "examples": [
        {
          "scenario": "需要使用 util-linux 提供的 zramctl 来完成“set up and control zram devices”时",
          "goal": "按固定官方版本的定义调用 zramctl，并依据退出状态判断该操作是否完成",
          "value": "zramctl",
          "description": "zramctl 的官方用途是“set up and control zram devices”；这里直接使用规范入口，不把子命令或选项伪装成另一条程序。",
          "expected": "终端按 util-linux 的定义执行 zramctl；缺少必需操作数时会明确返回用法诊断和非成功状态。",
          "copyable": true,
          "sourceType": "manual",
          "sourceIds": [
            "util-linux-repository"
          ],
          "authorship": "generated",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "groundingRefs": [
            {
              "sourceId": "util-linux-repository",
              "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2/sys-utils/zramctl.8.adoc",
              "claims": [
                "value",
                "behavior",
                "expected"
              ]
            }
          ],
          "platforms": [
            "linux"
          ],
          "caveat": "该入口受以下条件限制：requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration。"
        }
      ],
      "components": [
        "util-linux"
      ],
      "constraints": [
        "requires Linux with util-linux 2.42.2 installed; optional programs depend on distribution build configuration"
      ],
      "evidenceStatus": "verified",
      "evidenceRefs": [
        {
          "sourceId": "util-linux-repository",
          "claims": [
            "existence",
            "semantics",
            "platform"
          ],
          "locator": "https://github.com/util-linux/util-linux/tree/v2.42.2 · sys-utils/zramctl.8.adoc",
          "checkedAt": "2026-07-31"
        }
      ],
      "usage": "Get info: :: zramctl [options] Reset zram: :: zramctl -r zramdev... Print name of first unused zram device: :: zramctl -f Set up a zram device: :: zramctl [-f | zramdev] [-s size] [-t number] [-a algorithm]",
      "options": [
        "-a",
        "--algorithm",
        "-b",
        "--bytes",
        "-f",
        "--find",
        "--size",
        "-n"
      ],
      "entryType": "cli-command"
    }
  ]
};
