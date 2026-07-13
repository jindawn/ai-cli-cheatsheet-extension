"use strict";

const assert = require("assert");
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const adapters = require(path.join(root, "shared", "official-inventory-adapters.json"));
const rules = require(path.join(root, "shared", "validation-rules.json"));
const context = { window: {} };
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(root, "data", "index.js"), "utf8"), context);

assert.strictEqual(Object.keys(adapters.adapters).length, context.window.CHEATSHEET_FILES.length);
for (const toolId of context.window.CHEATSHEET_FILES) {
  assert(adapters.adapters[toolId], `${toolId}: deterministic adapter required`);
  const inventory = require(path.join(root, "shared", "official-inventories", `${toolId}.json`));
  const review = require(path.join(root, "shared", "scenario-reviews", `${toolId}.json`));
  assert.strictEqual(inventory.schemaVersion, 2);
  assert.strictEqual(inventory.closure.status, "closed");
  assert.strictEqual(inventory.closure.entryCount, inventory.entries.length);
  assert.strictEqual(inventory.adapter.kind, adapters.adapters[toolId].kind);
  assert.strictEqual(inventory.adapter.version, adapters.adapters[toolId].version);
  const inventoryHash = `sha256:${crypto.createHash("sha256").update(JSON.stringify(inventory.entries)).digest("hex")}`;
  assert.strictEqual(review.inventoryHash, inventoryHash);
  assert.strictEqual(review.reviewVersion, rules.scenarioQuality.reviewVersion);
  assert.strictEqual(review.status, "passed");
}

console.log("Global official contract tests passed.");
