# AI CLI 速查表

一个面向 Chrome / Edge 的本地速查扩展，用于查询 AI CLI、编辑器和常用开发工具的命令、参数与快捷键。

当前包含 **18 个工具分类、1500 余条数据**（准确数字以 `node tools/validate-data.js` 的输出为准），每条均提供语义关键词、用法示例和明确核验状态，并支持平台适配、收藏、最近使用和工具筛选。基础查询、收藏与个性化推荐全部在浏览器本地完成，不需要安装额外程序。

## 支持内容

| 分类 | 工具 |
|------|------|
| AI CLI | Claude Code、Codex CLI、Gemini CLI、Antigravity CLI、OpenCode、OpenClaw |
| 编辑器与写作工具 | Cursor、Visual Studio Code、IntelliJ IDEA、Typora、Obsidian |
| 终端与 Shell | Shell（内置、语法、配置、作业控制、快捷键）、iTerm2 |
| 命令与系统 | Unix/POSIX 基础命令（macOS/Linux）、Linux 系统工具 |
| 通用开发工具 | Git、Docker、Homebrew |

数据覆盖范围因工具而异：CLI 通常包含交互命令、启动参数和快捷键；IDE 类工具主要收录默认键位下的常用快捷键。

## 主要功能

- **相关性搜索**：多关键词优先同时命中，支持常见中英文同义词、工具名搜索和结果高亮。
- **跨平台查阅**：自动识别 macOS、Windows 或 Linux 作为首选命令平台，但不会隐藏其他平台内容；平台专属命令会明确标注，首次跨平台复制时确认目标环境。
- **工具与类型筛选**：已启用工具完整换行展示，可按快捷键、命令或参数筛选。
- **最近与收藏**：保存最近 20 条复制记录，并快速访问收藏条目。
- **本地偏好**：保存平台、启用工具、搜索词、收藏和最近使用记录。
- **个性化推荐**：使用已启用工具、收藏和最近记录在本地排序，商店版无需额外权限即可使用。
- **来源与质量明细**：在管理页查看各工具的数据量、来源登记和核验状态。
- **证据化数据流程**：仓库维护工具先发现来源再生成内容，并通过官方清单、场景审校和质量门禁。
- **全量用法示例**：每条数据都提供用法（数据自带或由人工核验的富化层补齐）；人工整理与 AI 推导内容会明确标注来源与证据等级。

## 安装方式

### 普通用户：Chrome Web Store（推荐）

Chrome Web Store 版提供完整的本地查询、收藏、偏好和个性化推荐，发布新版本后由 Chrome 自动更新。安装时只申请 `storage` 权限。用户主动使用折叠在“数据维护与高级操作”中的“查询并新增”或“检查官方更新”时，扩展才会引导安装一次轻量本机桥接并申请可选权限。

桥接会动态枚举可用 AI 环境。Claude Code、Codex CLI、Gemini CLI 与 OpenCode 是首批内置适配器；其他本机 AI CLI 可通过经过 Ed25519 签名的只读适配器目录接入，OpenAI/Anthropic 兼容 API 可在桥接侧配置。Claude 排在首位，但每次任务始终使用用户明确选择的环境，失败不会自动切换。模型凭据仍由对应 CLI 或桥接本地配置管理，扩展不保存账号或 Token。

### 贡献者与高级用户：GitHub 源码版

源码贡献者可使用仓库中的校验、审校和数据维护脚本；源码版与商店版使用同一套查询维护协议。源码安装脚本读取当前扩展 ID，商店安装包则只允许固定的商店扩展 ID。

### 1. 下载到固定目录

macOS / Linux：

```bash
git clone https://github.com/jindawn/ai-cli-cheatsheet-extension.git ~/workspace/ai-cli-cheatsheet-extension
```

Windows：

```powershell
git clone https://github.com/jindawn/ai-cli-cheatsheet-extension.git C:\workspace\ai-cli-cheatsheet-extension
```

不要把扩展放在 Downloads、临时目录或可能被清理的位置。

### 2. 加载扩展

1. 打开 `chrome://extensions/`，Edge 使用 `edge://extensions/`。
2. 开启“开发者模式”。
3. 点击“加载已解压的扩展程序”。
4. 选择包含 `manifest.json` 的项目根目录。
5. 将“AI CLI 速查表”固定到浏览器工具栏。

到这里即可使用全部面向普通用户的功能，参见 [完整安装与故障排查](INSTALL.md)。

### 更新已解压的源码版

Git 克隆用户在项目目录运行 `git pull`，然后在 `chrome://extensions/` 或 `edge://extensions/` 点击“重新加载”。ZIP 用户需要下载新版本、覆盖原固定目录，再重新加载。如 `native-host/` 有变化，还应重新运行安装脚本并完全重启浏览器。

从已解压的源码版切换到商店版时，两者通常使用不同扩展 ID，收藏、最近使用和偏好不会自动迁移。

> 不使用维护功能时无需安装桥接，也不会探测本机 CLI、请求可选权限或产生模型用量。

## 快速使用

| 操作 | 效果 |
|------|------|
| 输入中文、英文或命令 | 跨工具搜索并按相关性排序 |
| `/` 或 `Cmd/Ctrl+K` | 聚焦搜索框 |
| `Esc` | 清空搜索或退出搜索框 |
| 点击结果行 | 复制首选平台对应的命令；其他平台专属命令首次复制时确认 |
| 点击“用法” | 展开具体命令、操作场景和注意事项 |
| `↑` / `↓`，然后 `Enter` | 键盘选择并复制结果 |
| 最近 / 收藏 | 查看最近复制或收藏的条目 |
| 工具与类型标签 | 限定工具、快捷键、命令或参数 |
| 管理 | 切换首选命令平台、跨平台启用工具、查看推荐和质量明细；按需查询新增或检查更新 |

## 数据可信度与安全边界

- 每个工具可登记多个来源，条目和案例可精确引用证据；管理页会区分本机帮助、官方文档、官方仓库、权威社区和未独立核验内容。
- 条目的“已核验”要求同时具备命令存在性、行为语义和具体定位证据；宽泛页面或仅确认存在性的内容显示为“部分核验”。
- 模型只整理 Host 已经确定性核验的官方清单与资料，不能自行宣称入口完整；未知工具只有受控适配器能闭合本机 `--help` 命令树时才允许生成预览。
- `model-knowledge` 表示所选模型参与了结构化整理；数据是否可应用仍由官方清单、来源登记、场景审校与事务校验共同决定。
- 用法会分别标记“官方原例”“基于官方资料改写”“编辑整理场景”“自动生成”；管理页也会分别统计案例作者和证据等级，不再用一个旧来源标签混合表达。
- 数据变更必须通过字段、ID、重复项、URL、平台、官方清单和场景审校校验。
- Chrome Web Store 包安装时只请求 `storage`；`nativeMessaging`、`alarms` 和 `unlimitedStorage` 仅在用户主动检测桥接或应用动态修订时分阶段申请。
- 仓库维护工具处理动态 CLI 时，以目标版本的 `--help`、`/help` 和官方文档为准，不能用缓存或版本号绕过完整性门禁。

## 开发者：维护工具数据

修改内置数据前必须先阅读 [`OFFICIAL_DATA_POLICY.md`](OFFICIAL_DATA_POLICY.md)，并同步更新官方清单、来源登记和场景审校快照。商店版动态修订执行相同门禁并保存在当前浏览器配置中。完整流程见 [INSTALL.md](INSTALL.md)。

## 项目架构

```text
popup.html / popup.css      弹窗结构与独立样式表
popup.js                    弹窗入口与控制器（状态、事件、渲染协调）
popup-state.js              存储访问、条目索引、推荐引擎与收藏/最近逻辑
popup-render.js             HTML 渲染、转义与来源证据展示
popup-toast.js              Toast 提示（工厂注入 document）
popup-dialogs.js            高风险确认对话框、首次引导与共享焦点陷阱
popup-loader.js             按 data/index.js 清单白名单注入数据脚本
popup-tasks.js              Native Host 任务状态机（进度、完成分发）
pinyin-initials.js          拼音首字母表（由 tools/gen-pinyin-initials.py 生成）
product-core.js             搜索排序、同义词和平台命令逻辑
data/*.js                   各工具数据
data/index.js               数据文件索引与懒加载所需的轻量工具目录
usage-examples.js           公共示例派生、风险分类与兼容富化
enrichments/                按工具拆分、以稳定 item.id 关联的人工核验示例
shared/source-registry.json  内置工具来源、URL 范围与适用工具的单一登记表
shared/validation-rules.json 双端校验规则（正则、枚举、上下限）的单一来源
background.js               弹窗与 Native Host 的任务桥接（含超时看门狗）
dynamic-data.js             商店动态修订、分块校验与两阶段本地提交
native-host/host.py         多 Provider 只读调用、确定性清单、差异计算和原子写入
native-host/protocol.py     Native Messaging 帧协议
native-host/catalog.py      轻量工具目录与数据索引生成
tools/validate-data.js      数据文件静态校验
tools/migrate-built-in-evidence.js  可重复运行的内置数据证据迁移脚本
tools/promote-tool.py       把生成的工具数据整理为可提交的内置数据（人工核验后使用）
tools/verify-source-urls.js  联网检查来源最终 URL、HTTP 状态和页面标题（CI 每周定时执行）
tests/                      弹窗、后台、搜索核心与 Native Host 测试
```

新增或更新工具时：

1. 扩展通过 Chrome Native Messaging 启动本机 Host。
2. Host 根据 v4 握手返回动态 Provider Registry，并把任务绑定到目录摘要；内置、签名目录和兼容 API 环境都不允许静默回退。
3. Host 先用受信任的声明式适配器闭合官方入口清单，再把核验资料交给模型结构化整理；签名适配器只使用固定参数数组和受控输出驱动，用户确认的通用调用只使用无参数标准输入。两者都禁止 Shell 字符串及模型返回内容执行。
4. Host 校验来源登记、逐条证据和案例结构；新增与更新都先返回差异预览。
5. 用户确认后，Host 校验旧文件哈希并原子写入。

## 手动维护数据

未启用 Native Host 时，也可以手动增加或修正数据：

1. 按照 [数据 Schema](data/SCHEMA.md) 创建或修改 `data/<tool-id>.js`。
2. 新增工具时同步更新 `data/index.js`。
3. 运行数据校验和测试。
4. 在扩展管理页重新加载扩展。

## 开发验证

需要 Node.js 和 Python 3：

```bash
node --check popup.js popup-state.js popup-render.js popup-toast.js popup-dialogs.js popup-loader.js popup-tasks.js pinyin-initials.js background.js product-core.js usage-examples.js
node tools/validate-data.js
node tests/test_validation_consistency.js
node tests/test_product_core.js
node tests/test_usage_examples.js
node tests/test_popup_ux.js
node tests/test_background.js
node tests/test_search_quality.js
node tests/test_quality_core.js
node tests/test_packaging.js
node tools/audit-quality.js --check
node tools/check-release.js
python3 -m unittest discover -s tests -v
```

需要联网复核来源重定向与页面标题时，额外运行：

```bash
node tools/verify-source-urls.js
```

GitHub Actions 会执行 JavaScript 语法检查、数据 Schema 校验和 Native Host 单元测试。

## 发布

`vX.Y.Z` Git 标签必须与 `manifest.json` 版本一致。推送标签后，Release 工作流会重跑完整校验、对源码版和商店版分别进行 Chromium 冒烟测试，再生成两个 ZIP、`SHA256SUMS` 和 GitHub Release；这条基础发布路径不依赖签名密钥。

图形本机桥接安装器、签名的 `SHA256SUMS.asc`、Provider 适配器目录和 Chrome Web Store 自动提交属于额外的签名发布能力。只有同时配置 Provider 目录密钥、macOS 公证签名、Windows 代码签名及发布 GPG 密钥时，工作流才会构建这些资产，并在已配置商店凭据后提交审核。缺少任一项时，扩展 ZIP 仍可正常发布，但包内不会开放尚未验证的安装器入口。独立的 Provider Catalog 工作流仍要求 `PROVIDER_CATALOG_SIGNING_KEY`（32 字节 Ed25519 seed 的 Base64），构建时只把公钥注入安装包；私钥不会进入产物。

首次 Chrome Web Store 上架及后续自动提交所需的商店文案、图形资产和 GitHub Environment 配置见 [Chrome Web Store 上架资料](docs/chrome-web-store.md)。未配置 `CWS_PUBLISHER_ID` 和 `CWS_EXTENSION_ID` 时，商店上传任务会跳过，不影响 GitHub Release。

## 贡献

欢迎提交 Issue 或 Pull Request：

- 修正错误命令、翻译或平台快捷键。
- 补充遗漏条目或新增工具数据。
- 改进搜索、交互、安装流程或测试。

提交数据改动前请阅读 [data/SCHEMA.md](data/SCHEMA.md)，并尽量提供官方来源。

## 浏览器与系统

- 浏览器：Chrome、Edge，以及兼容 Manifest V3 与 Chrome Native Messaging 的 Chromium 浏览器。
- 系统：macOS、Windows、Linux。
- 基础查询不依赖 Native Host；新增和更新功能需要商店版签名安装包或源码版开发安装脚本提供本机桥接。

## License

[MIT](LICENSE)
