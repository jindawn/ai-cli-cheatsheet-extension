#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { auditReleasePath } = require("./audit-release-secrets");

const root = path.resolve(__dirname, "..");
const args = process.argv.slice(2);
const valueFor = (flag) => {
  const index = args.indexOf(flag);
  return index >= 0 ? args[index + 1] : undefined;
};
const channel = valueFor("--channel");
const outputArg = valueFor("--output");
// Three states, not a boolean: "unsigned" installers still let a user install
// the bridge by double-clicking, they just have to click through one OS
// security prompt. Collapsing that into false is what left store users with an
// install dialog that offered no way forward at all.
const BRIDGE_INSTALLER_STATES = ["signed", "unsigned", "none"];
const bridgeInstallers = valueFor("--bridge-installers") ?? "none";

if (!['source', 'store'].includes(channel) || !outputArg
  || !BRIDGE_INSTALLER_STATES.includes(bridgeInstallers)) {
  console.error("Usage: node tools/package-extension.js --channel source|store --output <directory> [--bridge-installers signed|unsigned|none]");
  process.exit(2);
}

const output = path.resolve(root, outputArg);
if (output === root || !output.startsWith(`${root}${path.sep}`)) {
  throw new Error("Output directory must be inside the repository and cannot be its root");
}

const commonEntries = [
  "manifest.json",
  "distribution.js",
  "popup.html",
  "popup.css",
  "popup.js",
  "popup-state.js",
  "popup-render.js",
  "popup-toast.js",
  "popup-dialogs.js",
  "popup-loader.js",
  "popup-tasks.js",
  "dynamic-data.js",
  "background.js",
  "pinyin-initials.js",
  "product-core.js",
  "quality-core.js",
  "usage-examples.js",
  "data",
  "enrichments",
  "icons",
  "shared",
  "LICENSE",
  "PRIVACY.md",
];
const sourceEntries = [
  "native-host",
  "README.md",
  "INSTALL.md",
  "OFFICIAL_DATA_POLICY.md",
];

const storeEntries = [];

function copyEntry(relativePath) {
  const source = path.join(root, relativePath);
  if (!fs.existsSync(source)) throw new Error(`Release input is missing: ${relativePath}`);
  fs.cpSync(source, path.join(output, relativePath), { recursive: true });
}

function distributionSource(distributionChannel, version, persistence) {
  return `"use strict";

window.CHEATSHEET_DISTRIBUTION = Object.freeze({
  channel: "${distributionChannel}",
  releaseVersion: "${version}",
  storeExtensionId: "jdiopjiebnamikpcknmnpahhlokccgjj",
  bridgeInstallers: "${bridgeInstallers}",
  capabilities: Object.freeze({
    localRecommendations: true,
    nativeCompanion: true,
    aiRecommendations: false,
    dataMaintenance: true,
    persistence: "${persistence}",
  }),
});
`;
}

fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output, { recursive: true });
for (const entry of [...commonEntries, ...(channel === "source" ? sourceEntries : storeEntries)]) copyEntry(entry);

if (channel === "store") {
  const manifestPath = path.join(output, "manifest.json");
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  manifest.permissions = ["storage"];
  manifest.optional_permissions = ["nativeMessaging", "alarms", "unlimitedStorage"];
  manifest.description = "AI CLI、Unix/POSIX、Linux 系统、编辑器与开发工具的本地速查、个性化推荐和可选 AI 数据维护。";
  fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  fs.writeFileSync(path.join(output, "distribution.js"), distributionSource("store", manifest.version, "storage-overlay"));
} else if (bridgeInstallers !== "none") {
  const manifest = JSON.parse(fs.readFileSync(path.join(output, "manifest.json"), "utf8"));
  // Source archives only advertise bridge installers the release workflow has
  // actually produced. An unpacked checkout keeps the conservative "none"
  // configuration committed in distribution.js.
  fs.writeFileSync(path.join(output, "distribution.js"), distributionSource("source", manifest.version, "repository-files"));
}

auditReleasePath(output);

const manifest = JSON.parse(fs.readFileSync(path.join(output, "manifest.json"), "utf8"));
console.log(`Prepared ${channel} extension v${manifest.version} at ${path.relative(root, output)}`);
