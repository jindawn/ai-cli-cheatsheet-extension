#!/usr/bin/env node
"use strict";

const assert = require("assert");
const quality = require("../quality-core.js");

const tool = {
  meta: { platforms: ["mac", "windows", "linux"], sources: [{ evidenceTier: "first-party" }] },
  items: [
    { cat: "flag", cmd: "--safe", evidenceStatus: "verified", evidenceRefs: [{ locator: "https://example.com/cli#safe" }], examples: [{ value: "x", platformValues: { mac: "x" } }] },
    { cat: "shortcut", cmd: "Cmd+P", evidenceStatus: "unverified", verificationNote: "官方未提供可定位键位表", platforms: ["mac"] },
  ],
};
const row = quality.auditTool("demo", tool, { target: 0.5 });
assert.strictEqual(row.verifiedRatio, 0.5);
assert.strictEqual(row.targetMet, true);
assert.strictEqual(row.unexplainedUnverified, 0);
assert.strictEqual(row.categories.flag, 1);
assert.strictEqual(row.platforms.windows, 1);
assert.strictEqual(row.examples.platformSpecific, 1);
assert.strictEqual(quality.isBroadLocator("Documentation"), true);
assert.strictEqual(quality.isBroadLocator("https://example.com/"), true);
assert.strictEqual(quality.isBroadLocator("https://example.com/cli#safe"), false);

const baseline = { tools: [{ ...row, verifiedRatio: 0.8, examples: { coverage: 1 }, platforms: row.platforms, categories: row.categories }] };
assert(quality.regressionFailures({ tools: [row] }, baseline, 0.02).some((failure) => failure.includes("verified")));
console.log("Quality core tests passed.");
