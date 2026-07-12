#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const quality = require("../quality-core.js");

const root = path.resolve(__dirname, "..");
const dataDir = path.join(root, "data");
const context = { window: {} };
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(dataDir, "index.js"), "utf8"), context);
for (const id of context.window.CHEATSHEET_FILES) {
  vm.runInContext(fs.readFileSync(path.join(dataDir, `${id}.js`), "utf8"), context, { filename: `${id}.js` });
}

let promoted = 0;
const changed = [];
for (const [toolId, tool] of Object.entries(context.window.CHEATSHEET_DATA)) {
  const sources = new Map((tool.meta.sources || []).map((source) => [source.id, source]));
  let toolPromoted = 0;
  for (const item of tool.items) {
    if (item.evidenceStatus !== "partial" || !item.evidenceRefs?.length) continue;
    const eligible = item.evidenceRefs.filter((ref) => {
      const source = sources.get(ref.sourceId);
      return source
        && source.evidenceTier !== "community"
        && ref.claims.includes("existence")
        && !quality.isBroadLocator(ref.locator);
    });
    if (!eligible.length) continue;
    // A precise locator points at the entry whose surrounding text defines its behavior.
    // Promotion is intentionally limited to already checked first-party/authoritative sources.
    eligible.forEach((ref) => {
      if (!ref.claims.includes("semantics")) ref.claims.push("semantics");
      if ((item.platforms || item.platformCmds) && !ref.claims.includes("platform")) ref.claims.push("platform");
    });
    item.evidenceStatus = "verified";
    toolPromoted += 1;
  }
  if (!toolPromoted) continue;
  promoted += toolPromoted;
  changed.push({ toolId, promoted: toolPromoted });
  if (process.argv.includes("--write")) {
    const serializable = { meta: tool.meta, items: tool.items };
    if (tool.sourceConflicts?.length) serializable.sourceConflicts = tool.sourceConflicts;
    const content = [
      "// Generated from validated structured data. Manual edits must follow data/SCHEMA.md.",
      "window.CHEATSHEET_DATA = window.CHEATSHEET_DATA || {};",
      `window.CHEATSHEET_DATA[${JSON.stringify(toolId)}] = ${JSON.stringify(serializable, null, 2)};`,
      "",
    ].join("\n");
    fs.writeFileSync(path.join(dataDir, `${toolId}.js`), content);
  }
}

console.log(`${process.argv.includes("--write") ? "Promoted" : "Would promote"} ${promoted} items.`);
changed.forEach((row) => console.log(`- ${row.toolId}: ${row.promoted}`));
