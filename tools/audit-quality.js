#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const quality = require("../quality-core.js");
const rules = require("../shared/validation-rules.json");

const root = path.resolve(__dirname, "..");
const context = { window: {} };
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(root, "data/index.js"), "utf8"), context);
for (const id of context.window.CHEATSHEET_FILES) {
  vm.runInContext(fs.readFileSync(path.join(root, "data", `${id}.js`), "utf8"), context, { filename: `${id}.js` });
}
vm.runInContext(fs.readFileSync(path.join(root, "product-core.js"), "utf8"), context);
for (const filename of fs.readdirSync(path.join(root, "enrichments")).filter((name) => name.endsWith(".js")).sort()) {
  vm.runInContext(fs.readFileSync(path.join(root, "enrichments", filename), "utf8"), context);
}
vm.runInContext(fs.readFileSync(path.join(root, "usage-examples.js"), "utf8"), context);
context.window.CHEATSHEET_BUILD_FULL_ENRICHMENTS?.(context.window.CHEATSHEET_DATA);
for (const [toolId, enrichments] of Object.entries(context.window.CHEATSHEET_ENRICHMENTS || {})) {
  const tool = context.window.CHEATSHEET_DATA[toolId];
  for (const [lookup, enrichment] of Object.entries(enrichments)) {
    const [cmd, itemContext = ""] = lookup.split("\0");
    const item = tool?.items.find((candidate) => candidate.cmd === cmd && (candidate.context || "") === itemContext);
    if (item) {
      item.keywords ||= enrichment.keywords;
      item.examples ||= enrichment.examples;
    }
  }
}

const report = quality.auditDataset(context.window.CHEATSHEET_DATA, rules);
const baselinePath = path.join(root, "shared/quality-baseline.json");
const baseline = fs.existsSync(baselinePath) ? JSON.parse(fs.readFileSync(baselinePath, "utf8")) : null;
const regressions = quality.regressionFailures(report, baseline, rules.qualityGates.maxRegressionPoints);
const unexplained = report.totals.unexplainedUnverified > rules.qualityGates.maxUnexplainedUnverified
  ? [`unexplained unverified items: ${report.totals.unexplainedUnverified}`]
  : [];
const targetExceptions = rules.qualityGates.temporaryTargetExceptions || {};
const targetFailures = report.tools
  .filter((row) => !row.targetMet && !targetExceptions[row.tool])
  .map((row) => `${row.tool}: verified ratio ${Math.round(row.verifiedRatio * 100)}% is below ${Math.round(row.target * 100)}%`);
const result = { ...report, targetExceptions, regressions, failures: [...regressions, ...unexplained, ...targetFailures] };

if (process.argv.includes("--write-baseline")) {
  const snapshot = {
    version: 1,
    tools: report.tools.map(({ tool, verifiedRatio, examples, platforms, categories }) => ({
      tool, verifiedRatio, examples: { coverage: examples.coverage }, platforms, categories,
    })),
  };
  fs.writeFileSync(baselinePath, `${JSON.stringify(snapshot)}\n`);
}

if (process.argv.includes("--json")) {
  process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
} else {
  console.log(`Quality audit: ${report.totals.tools} tools, ${report.totals.items} items, ${Math.round(report.totals.verifiedRatio * 100)}% verified.`);
  report.tools.forEach((row) => console.log(
    `- ${row.tool}: verified=${Math.round(row.verifiedRatio * 100)}% target=${Math.round(row.target * 100)}% examples=${Math.round(row.examples.coverage * 100)}% broad=${row.broadLocators} unexplained=${row.unexplainedUnverified}`
  ));
  if (result.failures.length) console.error(`Quality failures:\n${result.failures.map((failure) => `- ${failure}`).join("\n")}`);
}

if (process.argv.includes("--check") && result.failures.length) process.exitCode = 1;
