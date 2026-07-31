"use strict";

const assert = require("assert");
const fs = require("fs");
const os = require("os");
const path = require("path");
const { spawnSync } = require("child_process");
const crypto = require("crypto");

const root = path.resolve(__dirname, "..");
const tempRoot = fs.mkdtempSync(path.join(root, ".package-test-"));

function build(channel, extraArgs = []) {
  const suffix = extraArgs.length ? `-${extraArgs[extraArgs.length - 1]}` : "";
  const output = path.join(tempRoot, `${channel}${suffix}`);
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
  const releasedStore = build("store", ["--bridge-installers", "signed"]);
  const unsignedStore = build("store", ["--bridge-installers", "unsigned"]);
  const source = build("source");
  const releasedSource = build("source", ["--bridge-installers", "signed"]);
  const storeManifest = JSON.parse(fs.readFileSync(path.join(store, "manifest.json"), "utf8"));
  const sourceManifest = JSON.parse(fs.readFileSync(path.join(source, "manifest.json"), "utf8"));

  assert.deepStrictEqual(storeManifest.permissions, ["storage"]);
  assert.deepStrictEqual(storeManifest.optional_permissions, ["nativeMessaging", "alarms", "unlimitedStorage"]);
  assert.strictEqual(storeManifest.background.service_worker, "background.js");
  assert.deepStrictEqual(sourceManifest.permissions, ["nativeMessaging", "storage", "alarms"]);
  assert.strictEqual(sourceManifest.background.service_worker, "background.js");
  assert.strictEqual(storeManifest.version, "1.8.3");

  for (const forbidden of ["native-host", "tests", "tools"]) {
    assert.strictEqual(fs.existsSync(path.join(store, forbidden)), false, `store package contains ${forbidden}`);
  }
  for (const required of ["manifest.json", "popup.html", "background.js", "popup-tasks.js", "dynamic-data.js", "shared", "data", "enrichments", "icons/icon128.png"]) {
    assert.strictEqual(fs.existsSync(path.join(store, required)), true, `store package is missing ${required}`);
  }
  assert(fs.existsSync(path.join(store, "shared", "developer-command-curation.json")),
    "store package is missing the developer command curation sidecar");
  for (const buildOnly of [
    "contract-fixtures.json",
    "docker-scenario-enrichments.json",
    "official-component-fixtures",
    "provider-catalog-template.json",
    "quality-baseline.json",
    "source-registry.json",
    "validation-rules.json",
  ]) {
    assert.strictEqual(fs.existsSync(path.join(store, "shared", buildOnly)), false,
      `store package contains build-only shared input ${buildOnly}`);
  }
  assert(fs.readFileSync(path.join(store, "distribution.js"), "utf8").includes('channel: "store"'));
  assert(fs.readFileSync(path.join(store, "distribution.js"), "utf8").includes('releaseVersion: "1.8.3"'));
  assert(fs.readFileSync(path.join(store, "distribution.js"), "utf8").includes('bridgeReleaseVersion: "1.8.2"'));
  assert(fs.readFileSync(path.join(store, "popup.html"), "utf8").includes("popup-tasks.js"));
  assert(fs.readFileSync(path.join(store, "popup.html"), "utf8").includes("dynamic-data.js"));
  assert(fs.readFileSync(path.join(store, "distribution.js"), "utf8").includes('persistence: "storage-overlay"'));
  assert(fs.readFileSync(path.join(store, "distribution.js"), "utf8").includes('bridgeInstallers: "none"'));
  assert(fs.readFileSync(path.join(releasedStore, "distribution.js"), "utf8").includes('bridgeInstallers: "signed"'));
  // An unsigned installer still gets the user a working bridge; it must not be
  // collapsed into "no installer at all".
  assert(fs.readFileSync(path.join(unsignedStore, "distribution.js"), "utf8").includes('bridgeInstallers: "unsigned"'));
  for (const rejected of ["yes", "true", "SIGNED", ""]) {
    const result = spawnSync(process.execPath, [
      path.join(root, "tools", "package-extension.js"),
      "--channel", "store", "--output", path.relative(root, path.join(tempRoot, "rejected")),
      "--bridge-installers", rejected,
    ], { cwd: root, encoding: "utf8" });
    assert.notStrictEqual(result.status, 0, `--bridge-installers must reject ${JSON.stringify(rejected)}`);
  }
  assert(fs.readFileSync(path.join(store, "distribution.js"), "utf8").includes("localRecommendations: true"));
  assert(fs.readFileSync(path.join(store, "distribution.js"), "utf8").includes("nativeCompanion: true"));
  assert(fs.readFileSync(path.join(store, "distribution.js"), "utf8").includes("dataMaintenance: true"));
  const firstArchive = path.join(tempRoot, "store-first.zip");
  const secondArchive = path.join(tempRoot, "store-second.zip");
  for (const [archive, timezone] of [
    [firstArchive, "UTC"],
    [secondArchive, "Asia/Shanghai"],
  ]) {
    const archiveResult = spawnSync(process.execPath, [
      path.join(root, "tools", "create-extension-archive.js"),
      "--input", path.relative(root, unsignedStore),
      "--output", path.relative(root, archive),
    ], {
      cwd: root,
      encoding: "utf8",
      env: { ...process.env, TZ: timezone },
    });
    assert.strictEqual(archiveResult.status, 0, archiveResult.stderr || archiveResult.stdout);
  }
  const sha256 = (file) => crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");
  assert.strictEqual(sha256(firstArchive), sha256(secondArchive),
    "store ZIP creation should be reproducible across host timezones");
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
  assert(fs.readFileSync(path.join(source, "distribution.js"), "utf8").includes('bridgeInstallers: "none"'));
  assert(fs.readFileSync(path.join(releasedSource, "distribution.js"), "utf8").includes('channel: "source"'));
  assert(fs.readFileSync(path.join(releasedSource, "distribution.js"), "utf8").includes('bridgeInstallers: "signed"'));

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
