# 官方数据与真实场景政策

本文件是仓库中工具数据的唯一强制政策。无论修改来自人工、Claude Code、Codex、Copilot、Native Host 或其它脚本，都必须遵守；提示词不能替代下列数据契约和 CI 门禁。

## 1. 官方入口零遗漏

- 每个工具必须在 `shared/official-inventory-adapters.json` 登记确定性适配器，并在 `shared/official-inventories/<tool-id>.json` 保存闭合清单。
- 清单必须记录规范入口、官方别名、入口类型、组件、平台、限制、Usage、关键选项、官方示例定位和精确来源；`closure.status` 必须为 `closed`。
- `data/<tool-id>.js` 的规范入口、别名和上下文必须与清单集合完全一致，且 `meta.officialCoverage.status` 必须为 `complete`、`covered === total`。
- AI 只能发现候选来源、翻译和整理内容，不能自行列一份清单后宣称完整。无适配器、来源失败、页面无法解析或无法证明闭合时必须失败关闭，错误码使用 `official_adapter_missing` 或 `official_inventory_unconfirmed`。
- 检查更新每次先运行官方清单适配器。版本未变化不能跳过完整性比对；缓存或旧快照不能包装成“已是最新”。

## 2. 真实场景和逐项依据

- 每个入口至少一个案例，且必须填写 `scenario`、`goal`、`value`、`description`、`expected`。
- 每个案例必须提供 `groundingRefs`，使用第一方来源分别支持命令/操作值、行为和可观察结果；编辑场景不得伪装成官方原例。
- 叶子 CLI 案例必须实际执行规范入口或官方别名，不能用 `--help` 充数；使用的选项必须出现在官方清单或官方示例中。
- 禁止未解析占位符、版本确认套话、统一模板、场景/目标/结果互相重复和大规模重复文案。
- 危险、破坏性、服务中断或覆盖文件的案例必须 `copyable: false`，并提供具体警告和检查、预览或备份步骤。

## 3. 独立审校和写入事务

- 场景审校结果保存在 `shared/scenario-reviews/<tool-id>.json`，按条目 ID、案例序号和完整内容哈希绑定。任何内容修改都会使旧快照失效。
- 新增和更新必须依次完成：官方来源发现、确定性清单、闭合验证、完整条目生成、独立场景审校、用户预览确认、原子应用。
- 应用前必须再次校验原数据哈希、官方清单哈希和场景审校哈希。数据、索引、官方清单与审校快照作为同一事务写入；失败时全部回滚。
- 官方清单或场景审校失败时可继续保留旧数据供查询，但不得新增、应用更新或显示成功/无需更新。

## 4. 修改和验收

任何数据修改都必须同步更新对应官方清单和场景审校快照，并至少运行：

```bash
node tools/validate-data.js
node tests/test_validation_consistency.js
node tests/test_product_core.js
node tests/test_usage_examples.js
node tests/test_popup_ux.js
node tests/test_background.js
python3 -m unittest discover -s tests -v
```

不允许通过降低覆盖范围、改成 `unconfirmed`、增加例外、跳过测试或删除证据来绕过失败。
