# Copilot repository instructions

修改任何 `data/*.js`、新增/更新流程、官方清单、场景文案或证据前，必须先阅读并严格遵守仓库根目录的 `OFFICIAL_DATA_POLICY.md`。

任何 AI 生成内容都不能绕过确定性官方清单、入口集合一致性、第一方 `groundingRefs`、内容哈希场景审校、预览确认和原子写入门禁。修改数据时必须同步更新 `shared/official-inventories/<tool-id>.json` 与 `shared/scenario-reviews/<tool-id>.json`，并运行 `node tools/validate-data.js`。
