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
const bridgeInstallersReady = args.includes("--bridge-installers-ready");

if (!['source', 'store'].includes(channel) || !outputArg) {
  console.error("Usage: node tools/package-extension.js --channel source|store --output <directory> [--bridge-installers-ready]");
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
  fs.writeFileSync(path.join(output, "distribution.js"), `"use strict";\n\nwindow.CHEATSHEET_DISTRIBUTION = Object.freeze({\n  channel: "store",\n  releaseVersion: "${manifest.version}",\n  storeExtensionId: "jdiopjiebnamikpcknmnpahhlokccgjj",\n  bridgeInstallersAvailable: ${bridgeInstallersReady},\n  capabilities: Object.freeze({\n    localRecommendations: true,\n    nativeCompanion: true,\n    aiRecommendations: false,\n    dataMaintenance: true,\n    persistence: "storage-overlay",\n  }),\n});\n`);
} else if (bridgeInstallersReady) {
  const manifest = JSON.parse(fs.readFileSync(path.join(output, "manifest.json"), "utf8"));
  // Source archives only expose graphical bridge installers after the release
  // workflow has checked every platform asset. An unpacked checkout keeps its
  // conservative preview configuration from distribution.js.
  fs.writeFileSync(path.join(output, "distribution.js"), `"use strict";\n\nwindow.CHEATSHEET_DISTRIBUTION = Object.freeze({\n  channel: "source",\n  releaseVersion: "${manifest.version}",\n  storeExtensionId: "jdiopjiebnamikpcknmnpahhlokccgjj",\n  bridgeInstallersAvailable: true,\n  capabilities: Object.freeze({\n    localRecommendations: true,\n    nativeCompanion: true,\n    aiRecommendations: false,\n    dataMaintenance: true,\n    persistence: "repository-files",\n  }),\n});\n`);
}

auditReleasePath(output);

const manifest = JSON.parse(fs.readFileSync(path.join(output, "manifest.json"), "utf8"));
console.log(`Prepared ${channel} extension v${manifest.version} at ${path.relative(root, output)}`);
