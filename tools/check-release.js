#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const context = { window: {} };
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(root, "data", "index.js"), "utf8"), context);
const files = context.window.CHEATSHEET_FILES || [];
const catalog = context.window.CHEATSHEET_TOOL_CATALOG || [];
const fail = (message) => { throw new Error(message); };

if (new Set(files).size !== files.length) fail("data/index.js contains duplicate tool IDs");
if (catalog.length !== files.length) fail("tool catalog and data-file index counts differ");
if (catalog.some((entry, index) => entry.id !== files[index])) fail("tool catalog order differs from data-file index");

for (const id of files) {
  const filename = path.join(root, "data", `${id}.js`);
  if (!fs.existsSync(filename)) fail(`indexed data file is missing: data/${id}.js`);
  vm.runInContext(fs.readFileSync(filename, "utf8"), context);
  const meta = context.window.CHEATSHEET_DATA?.[id]?.meta;
  const summary = catalog.find((entry) => entry.id === id);
  if (!meta || summary.name !== meta.name || summary.color !== meta.color
    || summary.updatePolicy !== (meta.updatePolicy || "release-driven")
    || summary.builtIn !== (meta.builtIn === true)
    || summary.order !== (meta.order ?? 999)
    || JSON.stringify(summary.platforms) !== JSON.stringify(meta.platforms || [])) {
    fail(`catalog metadata is stale for ${id}`);
  }
}

const manifest = JSON.parse(fs.readFileSync(path.join(root, "manifest.json"), "utf8"));
const tagArgIndex = process.argv.indexOf("--tag");
const releaseTag = tagArgIndex >= 0 ? process.argv[tagArgIndex + 1] : process.env.RELEASE_TAG;
if (releaseTag && releaseTag !== `v${manifest.version}`) {
  fail(`release tag ${releaseTag} does not match manifest version v${manifest.version}`);
}
const readme = fs.readFileSync(path.join(root, "README.md"), "utf8");
const countLabel = `${files.length} 个工具`;
if (!manifest.description.includes(countLabel)) fail("manifest tool count is stale");
if (!readme.includes(countLabel)) fail("README tool count is stale");

const popup = fs.readFileSync(path.join(root, "popup.html"), "utf8");
for (const match of popup.matchAll(/(?:src|href)="([^"]+)"/g)) {
  if (/^(?:https?:|#)/.test(match[1])) continue;
  if (!fs.existsSync(path.join(root, match[1]))) fail(`popup asset is missing: ${match[1]}`);
}
if (popup.includes("<style>")) fail("popup styles must not be inlined");

console.log(`Release consistency checks passed for ${files.length} tools (v${manifest.version}).`);
