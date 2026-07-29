# Chrome Web Store 上架资料

## 首次上架

1. 在 Chrome Web Store Developer Dashboard 新建扩展条目。
2. 先发布并验证 `v1.8.1` 的 macOS、Windows、Linux 桥接资产及 SHA-256，再上传 `ai-cli-cheatsheet-store-v1.8.1.zip`。

   桥接安装包不再要求签名证书齐备：`release.yml` 的 `build-bridge` 总是运行，缺少签名 secret 时产出**未签名**安装包，商店包会随之声明 `bridgeInstallers: "unsigned"` 并在安装对话框里说明用户会遇到什么系统提示。只有桥接构建本身失败才会退回 `none`，那种情况下不要上架——维护功能会没有任何入口。上传前用 `unzip -p <zip> distribution.js | grep bridgeInstallers` 确认状态与预期一致。
3. 首次提交和发布在开发者后台人工完成。
4. 获得 Publisher ID 和 Extension ID 后，按下文配置 GitHub Environment；从下一个版本开始由标签自动上传并提交审核。

## 商店文案

**名称**

AI CLI 速查表

**简短说明**

AI CLI、Unix/POSIX、Linux 系统、编辑器与开发工具的命令、快捷键和用法速查。

**详细说明**

AI CLI 速查表是一款本地优先的开发工具查询扩展，帮助开发者快速查找常用命令、参数、快捷键和用法示例。

主要功能：

- 使用中文、英文或命令快速搜索。
- 按 macOS、Windows 和 Linux 显示对应命令与快捷键。
- 查看用法示例、证据状态和高风险操作提示。
- 保存收藏、最近使用和工具筛选偏好。
- 使用启用工具、收藏和最近记录在本地生成个性化推荐。
- 可选使用桥接动态检测的 AI 环境查询并新增工具、检查官方更新；常见 AI CLI 可一键检测，其他工具输入名称后自动检测，找到后经一次风险确认，并由桥接在其自带的固定调用方式中试调用出可用的一种才会接入；已验证适配器仍优先使用，应用前显示差异与风险确认。
- 查询不需要登录，不读取浏览的网页，不向项目服务器传输搜索或使用记录。

Chrome Web Store 版随扩展更新内置数据。查询、收藏、偏好和个性化推荐全部在浏览器本地完成。维护功能折叠显示，首次使用才引导安装已签名的轻量本机桥接；模型选择与任务执行都由用户确认。

> 文案要求：商品详情应围绕单一用途和实际功能自然表述，不连续罗列产品名称或搜索关键词。

## 隐私实践填写

- **单一用途**：在浏览器弹窗中本地查询 AI CLI、编辑器、终端和开发工具的命令、参数、快捷键及用法。
- **`storage` 权限理由**：在用户设备上保存首选命令平台、已启用工具、跨平台复制确认、收藏、最近使用、搜索偏好和桥接向导状态。
- **`nativeMessaging` 可选权限理由**：仅在用户主动检测桥接或运行维护任务时，与固定名称的本机桥接通信并调用用户选择的 CLI。
- **`alarms` 可选权限理由**：维护任务运行期间提供超时和后台存活保护。
- **`unlimitedStorage` 可选权限理由**：仅在应用完整动态数据修订时避免默认本地配额不足。
- **远程代码**：否。所有可执行逻辑都随 Manifest V3 扩展包提交。
- **用户数据**：项目不收集数据；只有用户确认维护任务后，核验资料和生成要求才直接发送给其自行配置的模型服务。细节以 [`PRIVACY.md`](../PRIVACY.md) 为准。
- **隐私政策 URL**：`https://github.com/jindawn/ai-cli-cheatsheet-extension/blob/main/PRIVACY.md`

## 图形资产

- 商店图标：`icons/icon128.png`（128×128）。
- 必需截图：`store-assets/search-and-usage-1280x800.png`。
- 个性化推荐截图：`store-assets/recommendations-and-local-ai-1280x800.png`。
- 可选小型宣传图：440×280 PNG/JPEG。
- 可选大型宣传图：1400×560 PNG/JPEG。

截图必须使用当前商店包生成，并分别准确展示无需授权的本地推荐，以及折叠维护区中的 Provider 选择、查询并新增、更新预览和明确的用量确认；不得展示尚未发布的安装资产。

## GitHub Environment

创建名为 `chrome-web-store` 的 Environment，并配置：

- Secret `CWS_SERVICE_ACCOUNT_JSON`：已在 Chrome Web Store 开发者后台授权的 Google Cloud 服务账号 JSON。
- Variable `CWS_PUBLISHER_ID`：Chrome Web Store Publisher ID。
- Variable `CWS_EXTENSION_ID`：首次创建的扩展条目 ID。

后续 `vX.Y.Z` 标签会自动上传包并以 `STAGED_PUBLISH` 提交审核。审核通过后仍需在开发者后台人工点击发布。
