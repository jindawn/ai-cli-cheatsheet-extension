"use strict";

const assert = require("assert");
const fs = require("fs");
const os = require("os");
const path = require("path");
const { spawnSync } = require("child_process");

const root = path.resolve(__dirname, "..");
const tempRoot = fs.mkdtempSync(path.join(root, ".package-test-"));

function build(channel) {
  const output = path.join(tempRoot, channel);
  const result = spawnSync(process.execPath, [
    path.join(root, "tools", "package-extension.js"),
    "--channel", channel,
    "--output", path.relative(root, output),
  ], { cwd: root, encoding: "utf8" });
  assert.strictEqual(result.status, 0, result.stderr || result.stdout);
  return output;
}

try {
  const store = build("store");
  const source = build("source");
  const storeManifest = JSON.parse(fs.readFileSync(path.join(store, "manifest.json"), "utf8"));
  const sourceManifest = JSON.parse(fs.readFileSync(path.join(source, "manifest.json"), "utf8"));

  assert.deepStrictEqual(storeManifest.permissions, ["storage"]);
  assert.strictEqual(storeManifest.background, undefined);
  assert.deepStrictEqual(sourceManifest.permissions, ["nativeMessaging", "storage", "alarms"]);
  assert.strictEqual(sourceManifest.background.service_worker, "background.js");

  for (const forbidden of ["background.js", "popup-tasks.js", "native-host", "shared", "tests", "tools"]) {
    assert.strictEqual(fs.existsSync(path.join(store, forbidden)), false, `store package contains ${forbidden}`);
  }
  for (const required of ["manifest.json", "popup.html", "data", "enrichments", "icons/icon128.png"]) {
    assert.strictEqual(fs.existsSync(path.join(store, required)), true, `store package is missing ${required}`);
  }
  assert(fs.readFileSync(path.join(store, "distribution.js"), "utf8").includes('channel: "store"'));
  assert(!fs.readFileSync(path.join(store, "popup.html"), "utf8").includes("popup-tasks.js"));
  assert(fs.existsSync(path.join(source, "native-host", "host.py")));
  assert(fs.readFileSync(path.join(source, "distribution.js"), "utf8").includes('channel: "source"'));
  console.log("Dual-channel packaging tests passed.");
} finally {
  fs.rmSync(tempRoot, { recursive: true, force: true });
}
