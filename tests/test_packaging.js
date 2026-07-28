"use strict";

const assert = require("assert");
const fs = require("fs");
const os = require("os");
const path = require("path");
const { spawnSync } = require("child_process");

const root = path.resolve(__dirname, "..");
const tempRoot = fs.mkdtempSync(path.join(root, ".package-test-"));

function build(channel, extraArgs = []) {
  const output = path.join(tempRoot, `${channel}${extraArgs.length ? "-ready" : ""}`);
  const result = spawnSync(process.execPath, [
    path.join(root, "tools", "package-extension.js"),
    "--channel", channel,
    "--output", path.relative(root, output),
    ...extraArgs,
  ], { cwd: root, encoding: "utf8" });
  assert.strictEqual(result.status, 0, result.stderr || result.stdout);
  return output;
}

try {
  const store = build("store");
  const releasedStore = build("store", ["--bridge-installers-ready"]);
  const source = build("source");
  const releasedSource = build("source", ["--bridge-installers-ready"]);
  const storeManifest = JSON.parse(fs.readFileSync(path.join(store, "manifest.json"), "utf8"));
  const sourceManifest = JSON.parse(fs.readFileSync(path.join(source, "manifest.json"), "utf8"));

  assert.deepStrictEqual(storeManifest.permissions, ["storage"]);
  assert.deepStrictEqual(storeManifest.optional_permissions, ["nativeMessaging", "alarms", "unlimitedStorage"]);
  assert.strictEqual(storeManifest.background.service_worker, "background.js");
  assert.deepStrictEqual(sourceManifest.permissions, ["nativeMessaging", "storage", "alarms"]);
  assert.strictEqual(sourceManifest.background.service_worker, "background.js");
  assert.strictEqual(storeManifest.version, "1.7.6");

  for (const forbidden of ["native-host", "tests", "tools"]) {
    assert.strictEqual(fs.existsSync(path.join(store, forbidden)), false, `store package contains ${forbidden}`);
  }
  for (const required of ["manifest.json", "popup.html", "background.js", "popup-tasks.js", "dynamic-data.js", "shared", "data", "enrichments", "icons/icon128.png"]) {
    assert.strictEqual(fs.existsSync(path.join(store, required)), true, `store package is missing ${required}`);
  }
  assert(fs.existsSync(path.join(store, "shared", "provider-adapters.json")), "store package is missing the legacy-safe provider catalog");
  assert(fs.existsSync(path.join(store, "shared", "provider-adapters-v5.json")), "store package is missing the v5 provider overlay");
  assert(fs.readFileSync(path.join(store, "distribution.js"), "utf8").includes('channel: "store"'));
  assert(fs.readFileSync(path.join(store, "popup.html"), "utf8").includes("popup-tasks.js"));
  assert(fs.readFileSync(path.join(store, "popup.html"), "utf8").includes("dynamic-data.js"));
  assert(fs.readFileSync(path.join(store, "distribution.js"), "utf8").includes('persistence: "storage-overlay"'));
  assert(fs.readFileSync(path.join(store, "distribution.js"), "utf8").includes("bridgeInstallersAvailable: false"));
  assert(fs.readFileSync(path.join(releasedStore, "distribution.js"), "utf8").includes("bridgeInstallersAvailable: true"));
  assert(fs.readFileSync(path.join(store, "distribution.js"), "utf8").includes("localRecommendations: true"));
  assert(fs.readFileSync(path.join(store, "distribution.js"), "utf8").includes("nativeCompanion: true"));
  assert(fs.readFileSync(path.join(store, "distribution.js"), "utf8").includes("dataMaintenance: true"));
  assert(fs.existsSync(path.join(source, "native-host", "host.py")));
  assert(fs.existsSync(path.join(source, "native-host", "provider_registry.py")));
  assert(fs.existsSync(path.join(source, "background.js")));
  assert(fs.existsSync(path.join(source, "popup-tasks.js")));
  assert(fs.existsSync(path.join(source, "dynamic-data.js")));
  assert(fs.existsSync(path.join(source, "shared", "official-inventory-adapters.json")));
  assert(fs.existsSync(path.join(source, "shared", "provider-adapters.json")));
  assert(fs.existsSync(path.join(source, "shared", "provider-adapters-v5.json")));
  assert(fs.existsSync(path.join(source, "shared", "common-provider-catalog.json")));
  assert(fs.existsSync(path.join(source, "shared", "provider-catalog-public-key.json")));
  assert(fs.readFileSync(path.join(source, "distribution.js"), "utf8").includes('channel: "source"'));
  assert(fs.readFileSync(path.join(source, "distribution.js"), "utf8").includes("bridgeInstallersAvailable: false"));
  assert(fs.readFileSync(path.join(releasedSource, "distribution.js"), "utf8").includes('channel: "source"'));
  assert(fs.readFileSync(path.join(releasedSource, "distribution.js"), "utf8").includes("bridgeInstallersAvailable: true"));

  const leakedValue = `sk-proj-${"a".repeat(32)}`;
  fs.writeFileSync(path.join(store, "accidental-config.txt"), `OPENAI_API_KEY=${leakedValue}\n`);
  let audit = spawnSync(process.execPath, [
    path.join(root, "tools", "audit-release-secrets.js"), store,
  ], { cwd: root, encoding: "utf8" });
  assert.notStrictEqual(audit.status, 0, "secret audit must reject credential content");
  assert(!`${audit.stdout}${audit.stderr}`.includes(leakedValue), "audit output must not print secret values");
  fs.unlinkSync(path.join(store, "accidental-config.txt"));
  fs.writeFileSync(path.join(store, "accidental.env"), "placeholder only\n");
  audit = spawnSync(process.execPath, [
    path.join(root, "tools", "audit-release-secrets.js"), store,
  ], { cwd: root, encoding: "utf8" });
  assert.notStrictEqual(audit.status, 0, "secret audit must reject credential filenames");
  console.log("Dual-channel packaging tests passed.");
} finally {
  fs.rmSync(tempRoot, { recursive: true, force: true });
}
