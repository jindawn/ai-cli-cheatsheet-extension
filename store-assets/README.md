# Chrome Web Store 图形资产

- `../icons/icon128.png`：128×128 商店图标。
- `search-and-usage-1280x800.png`：从当前商店包生成的主功能截图。
- `recommendations-and-local-ai-1280x800.png`：商店版本地个性化推荐与折叠维护入口截图（基础推荐无需桥接）。

重新生成截图前先构建商店包，然后分别运行：

```bash
node tools/capture-store-screenshot.js dist/store store-assets/search-and-usage-1280x800.png
node tools/capture-store-screenshot.js dist/store store-assets/recommendations-and-local-ai-1280x800.png
```
