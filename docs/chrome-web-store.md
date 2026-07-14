# Chrome Web Store 上架资料

## 首次上架

1. 在 Chrome Web Store Developer Dashboard 新建扩展条目。
2. 上传 `ai-cli-cheatsheet-store-v1.7.0.zip`，并完成商店资料、隐私和分发选项。
3. 首次提交和发布在开发者后台人工完成。
4. 获得 Publisher ID 和 Extension ID 后，按下文配置 GitHub Environment；从下一个版本开始由标签自动上传并提交审核。

## 商店文案

**名称**

AI CLI 速查表

**简短说明**

AI CLI、编辑器、终端与开发工具的命令、参数、快捷键及用法示例中英对照速查。

**详细说明**

AI CLI 速查表是一款完全本地运行的开发工具查询扩展，集中整理 Claude Code、Codex CLI、Gemini CLI、Git、Docker、Shell、VS Code 等工具的命令、参数和快捷键。

主要功能：

- 使用中文、英文或命令快速搜索。
- 按 macOS、Windows 和 Linux 显示对应命令与快捷键。
- 查看用法示例、证据状态和高风险操作提示。
- 保存收藏、最近使用和工具筛选偏好。
- 基础查询不需要登录，不读取浏览的网页，不传输搜索或使用记录。

Chrome Web Store 版为稳定只读版本，数据会随扩展版本自动更新。GitHub 上的源码维护版另行提供高级本地数据维护流程。

## 隐私实践填写

- **单一用途**：在浏览器弹窗中本地查询 AI CLI、编辑器、终端和开发工具的命令、参数、快捷键及用法。
- **`storage` 权限理由**：在用户设备上保存平台、已启用工具、收藏、最近使用和搜索偏好；数据不离开设备。
- **远程代码**：否。所有可执行逻辑都随 Manifest V3 扩展包提交。
- **用户数据**：不向开发者或第三方收集或传输数据；本地处理细节以 [`PRIVACY.md`](../PRIVACY.md) 为准。
- **隐私政策 URL**：`https://github.com/jindawn/ai-cli-cheatsheet-extension/blob/main/PRIVACY.md`

## 图形资产

- 商店图标：`icons/icon128.png`（128×128）。
- 必需截图：`store-assets/search-and-usage-1280x800.png`。
- 可选小型宣传图：440×280 PNG/JPEG。
- 可选大型宣传图：1400×560 PNG/JPEG。

截图必须使用当前商店包生成，不得出现源码版的 Native Host 或 AI 维护入口。

## GitHub Environment

创建名为 `chrome-web-store` 的 Environment，并配置：

- Secret `CWS_SERVICE_ACCOUNT_JSON`：已在 Chrome Web Store 开发者后台授权的 Google Cloud 服务账号 JSON。
- Variable `CWS_PUBLISHER_ID`：Chrome Web Store Publisher ID。
- Variable `CWS_EXTENSION_ID`：首次创建的扩展条目 ID。

后续 `vX.Y.Z` 标签会自动上传包并以 `STAGED_PUBLISH` 提交审核。审核通过后仍需在开发者后台人工点击发布。
