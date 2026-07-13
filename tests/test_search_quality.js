"use strict";

const assert = require("assert");
const fs = require("fs");
const path = require("path");

global.window = {};
require("../data/index.js");
for (const id of window.CHEATSHEET_FILES) require(`../data/${id}.js`);
require("../pinyin-initials.js");
require("../product-core.js");

const core = window.CHEATSHEET_CORE;
const categoryLabels = { shortcut: "快捷键", slash: "命令", flag: "参数/选项" };
const entries = Object.entries(window.CHEATSHEET_DATA).flatMap(([toolId, tool]) =>
  tool.items.map((item) => ({
    toolId,
    itemId: item.id,
    item,
    displayCmd: item.cmd,
    toolName: tool.meta.name,
    categoryLabel: categoryLabels[item.cat],
    searchIndex: core.buildSearchIndex(item),
  }))
);

const goldenQueries = [
  { query: "恢复会话", expected: { cmd: "/resume" } },
  { query: "查看容器", expected: { toolId: "docker" } },
  { query: "docker pause", expected: { toolId: "docker", cmd: "docker container pause" } },
  { query: "撤销提交", expected: { toolId: "git", cmd: "revert" } },
  { query: "命令面板", expected: { cmd: "Cmd+Shift+P" } },
  { query: "安装软件包", expected: { toolId: "homebrew", cmd: "brew install" } },
  { query: "删除分支", expected: { toolId: "git", cmd: "branch -d" } },
];

for (const { query, expected } of goldenQueries) {
  const top = core.rankItems(entries, query).slice(0, 3);
  assert(
    top.some((entry) => (!expected.toolId || entry.toolId === expected.toolId)
      && (!expected.cmd || entry.displayCmd.startsWith(expected.cmd))),
    `${query}: expected result must stay in top 3; got ${top.map((entry) => `${entry.toolId}:${entry.displayCmd}`).join(", ")}`
  );
}

const defaultIds = ["antigravity-cli", "claude-code", "codex", "gemini-cli", "opencode"];
const defaultBytes = defaultIds.reduce((total, id) =>
  total + fs.statSync(path.join(__dirname, "..", "data", `${id}.js`)).size, 0);
assert(defaultBytes <= 260212, `default data payload exceeded the 20% budget: ${defaultBytes} bytes`);

const start = performance.now();
for (let iteration = 0; iteration < 5; iteration += 1) {
  for (const { query } of goldenQueries) core.rankItems(entries, query);
}
const elapsed = performance.now() - start;
assert(elapsed < 2500, `search benchmark exceeded its regression budget: ${elapsed.toFixed(1)}ms`);

console.log(`Search quality/performance tests passed: ${entries.length} entries, ${defaultBytes} default bytes, ${elapsed.toFixed(1)}ms.`);
