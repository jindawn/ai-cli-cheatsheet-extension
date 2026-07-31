# Unix/POSIX 与 Linux 官方命令覆盖报告

> 由 `tools/rebuild-official-command-unions.py` 于 2026-07-31 根据固定官方来源生成。

闭合规则：组件解析器发现结果、官方清单、扩展数据和场景审校必须逐项一致。
联网复验使用 `tools/verify-official-command-sources.py` 重新下载归档、校验 SHA-256 并复跑解析器。

## Unix/POSIX 基础命令

- 组件原始公开入口：290
- 合并重叠后的规范入口：220
- 跨组件重叠合并：70
- 有理由排除记录：8
- 未解释遗漏：0

| 组件 | 固定版本 | 发现数 | 归档 SHA-256 |
| --- | --- | ---: | --- |
| `posix-utilities` | IEEE Std 1003.1-2024 Issue 8 | 155 | `76c479d640ebc044cdc01e9f63445f1c23fcea4235793756ae225c0e317ae5d8` |
| `gnu-coreutils` | 9.11 | 108 | `394024eda0a5955217ceda9cd1201e65dc8fa3aa29c2951135a49521d57c3cc3` |
| `gnu-findutils` | 4.11.0 | 4 | `bfd19cb06cc71f3352d567e90284d8cdac02ac89774bbeadf0b533b0c11432fd` |
| `gnu-grep` | 3.12 | 1 | `2649b27c0e90e632eadcd757be06c6e9a4f48d941de51e7c0f83ff76408a07b9` |
| `gnu-sed` | 4.10 | 1 | `b8e72182b2ec96a3574e2998c47b7aaa64cc20ce000d8e9ac313cc07cecf28c7` |
| `gnu-gawk` | 5.4.1 | 2 | `07f6f7342b7febe4313fc2c2542ad93d64fe20ad8717200109f105a826f5fd37` |
| `gnu-diffutils` | 3.12 | 4 | `7c8b7f9fc8609141fdea9cece85249d308624391ff61dedaf528fcb337727dfd` |
| `gnu-tar` | 1.35 | 1 | `4d62ff37342ec7aed748535323930c7cf94acf71c3591882b26a7ea50f3edc16` |
| `gnu-wget` | 1.25.0 | 1 | `766e48423e79359ea31e41db9e5c289675947a7fcf2efdcedb726ac9d0da3784` |
| `gnu-which` | 2.25 | 1 | `1cb83e4f702e60b8211ab5ec4c2afbab1b1dec80209456a7d2faf7584ed225ea` |
| `openssh-client` | 10.4p1 | 7 | `a4cc7433529924af159b8c905015e8742ba4d3b1644818e44c96cb7cd56aee4a` |
| `curl` | 8.21.0 | 2 | `d9b327997999045a24cda50f3983e69e51c516bd8be6ef9842fc7f99135e33bb` |
| `less` | 708 | 1 | `687951329b36d1fcf9a159c2ad16d32e1c2b8084802a8b3b32fbb452b3fe7cf0` |
| `ping-implementations` | iputils-20250605/BSD | 1 | `475c643e5f55b302286267b97d3ce0f47ca3489ced8aa0401b1eeb1e68228d6b` |
| `top-implementations` | procps-ng-4.0.6/BSD | 1 | `1bbe8ff21dcd05a6adcda99a67d2e99cbd515c9e3a78fd3cc915b12aeb330d40` |

组件清单摘要：`sha256:4c297c316826977d85007ba6fc5c9e4b2dc3500639de7b1b1ca0a401b7449d15`

## Linux 系统工具

- 组件原始公开入口：263
- 合并重叠后的规范入口：262
- 跨组件重叠合并：1
- 有理由排除记录：4
- 未解释遗漏：0

| 组件 | 固定版本 | 发现数 | 归档 SHA-256 |
| --- | --- | ---: | --- |
| `procps-ng` | 4.0.6 | 20 | `1bbe8ff21dcd05a6adcda99a67d2e99cbd515c9e3a78fd3cc915b12aeb330d40` |
| `systemd` | 261.1 | 81 | `f9b9da1103d1714703503d1746971ccbeeae945663ef3ede3b7348169b5df064` |
| `util-linux` | 2.42.2 | 143 | `a451596f794739216da2e98398e31958ecf455f2372d99a12194a468e852e834` |
| `iproute2` | 7.1.0 | 19 | `220ebd1e29b8d4e83a7b133091b678df6e74dfedbd8857c390c546b913d600fb` |

组件清单摘要：`sha256:c839353e67d8f70a10d781fccc5b8d26efb137bd59866de321b65fc755fbdf3c`
