#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);
const valueFor = (flag) => args[args.indexOf(flag) + 1];
const directory = path.resolve(valueFor("--directory") || "");
const version = valueFor("--version");
const checkOnly = args.includes("--check");
const bridgeOnly = args.includes("--bridge-only");
if (!version || !/^\d+\.\d+\.\d+$/.test(version) || !fs.statSync(directory).isDirectory()) {
  throw new Error("Usage: verify-release-assets.js --directory <dir> --version <x.y.z>");
}
const bridgeAssets = [
  `ai-cli-cheatsheet-bridge-macos-arm64-v${version}.pkg`,
  `ai-cli-cheatsheet-bridge-macos-x64-v${version}.pkg`,
  `ai-cli-cheatsheet-bridge-windows-x64-v${version}.msi`,
  `ai-cli-cheatsheet-bridge-linux-x64-v${version}.deb`,
  `ai-cli-cheatsheet-bridge-linux-x64-v${version}.rpm`,
];
const required = bridgeOnly ? bridgeAssets : [
  ...bridgeAssets,
  `ai-cli-cheatsheet-source-v${version}.zip`,
  `ai-cli-cheatsheet-store-v${version}.zip`,
];
for (const name of required) {
  const file = path.join(directory, name);
  if (!fs.existsSync(file) || fs.statSync(file).size < 1) throw new Error(`Release asset missing or empty: ${name}`);
}
const sums = required.map((name) => {
  const digest = crypto.createHash("sha256").update(fs.readFileSync(path.join(directory, name))).digest("hex");
  return `${digest}  ${name}`;
});
const checksumPath = path.join(directory, "SHA256SUMS");
if (bridgeOnly) {
  console.log(`Verified ${required.length} bridge installer assets for v${version}.`);
} else if (checkOnly) {
  const actual = fs.readFileSync(checksumPath, "utf8").trim().split(/\r?\n/).sort();
  const expected = sums.slice().sort();
  if (JSON.stringify(actual) !== JSON.stringify(expected)) throw new Error("SHA256SUMS does not match release assets");
} else {
  fs.writeFileSync(checksumPath, `${sums.join("\n")}\n`);
}
console.log(`Verified ${required.length} release assets for v${version}.`);
