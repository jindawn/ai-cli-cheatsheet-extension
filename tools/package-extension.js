#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const args = process.argv.slice(2);
const valueFor = (flag) => {
  const index = args.indexOf(flag);
  return index >= 0 ? args[index + 1] : undefined;
};
const channel = valueFor("--channel");
const outputArg = valueFor("--output");

if (!['source', 'store'].includes(channel) || !outputArg) {
  console.error("Usage: node tools/package-extension.js --channel source|store --output <directory>");
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
  "pinyin-initials.js",
  "product-core.js",
  "quality-core.js",
  "usage-examples.js",
  "data",
  "enrichments",
  "icons",
  "LICENSE",
  "PRIVACY.md",
];
const sourceEntries = [
  "background.js",
  "popup-tasks.js",
  "native-host",
  "shared",
  "README.md",
  "INSTALL.md",
  "OFFICIAL_DATA_POLICY.md",
];

function copyEntry(relativePath) {
  const source = path.join(root, relativePath);
  if (!fs.existsSync(source)) throw new Error(`Release input is missing: ${relativePath}`);
  fs.cpSync(source, path.join(output, relativePath), { recursive: true });
}

fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output, { recursive: true });
for (const entry of [...commonEntries, ...(channel === "source" ? sourceEntries : [])]) copyEntry(entry);

if (channel === "store") {
  const manifestPath = path.join(output, "manifest.json");
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  delete manifest.background;
  manifest.permissions = ["storage"];
  manifest.description = "AI CLI、编辑器、终端与开发工具的命令、参数、快捷键及用法示例中英对照速查。";
  fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  fs.writeFileSync(path.join(output, "distribution.js"), `"use strict";\n\nwindow.CHEATSHEET_DISTRIBUTION = Object.freeze({\n  channel: "store",\n  maintenance: false,\n});\n`);
  const popupPath = path.join(output, "popup.html");
  const popup = fs.readFileSync(popupPath, "utf8")
    .replace('<script src="popup-tasks.js"></script>\n', "");
  fs.writeFileSync(popupPath, popup);
}

const manifest = JSON.parse(fs.readFileSync(path.join(output, "manifest.json"), "utf8"));
console.log(`Prepared ${channel} extension v${manifest.version} at ${path.relative(root, output)}`);
