"use strict";

const assert = require("assert");
const crypto = require("crypto");
const dynamic = require("../dynamic-data.js");

function chromeMock() {
  const values = {};
  const chrome = {
    runtime: { lastError: null },
    storage: { local: {
      get(keys, callback) {
        const list = typeof keys === "string" ? [keys] : (Array.isArray(keys) ? keys : Object.keys(keys || {}));
        callback(Object.fromEntries(list.filter((key) => key in values).map((key) => [key, values[key]])));
      },
      set(entries, callback) { Object.assign(values, JSON.parse(JSON.stringify(entries))); callback?.(); },
      remove(keys, callback) { for (const key of Array.isArray(keys) ? keys : [keys]) delete values[key]; callback?.(); },
    } },
  };
  return { chrome, values };
}

const bundle = {
  dataset: { meta: { id: "sample", name: "Sample" }, items: [{ id: "sample-item", cmd: "sample", cat: "slash", en: "Sample", zh: "示例" }] },
  officialInventory: { schemaVersion: 2, toolId: "sample", entries: [{ command: "sample" }] },
  scenarioReview: { schemaVersion: 1, toolId: "sample", examples: [] },
  officialAdapter: { id: "sample-local-help", kind: "recursive-local-help-tree", version: 1 },
  sourceRegistry: [{ id: "sample-help", kind: "local-help" }],
  generationEnvironment: { providerId: "claude", providerDisplayName: "Claude Code", cliVersion: "1.0" },
  baseContentHash: `sha256:${"a".repeat(64)}`,
  schemaVersion: 2,
  createdAt: "2026-07-16T00:00:00.000Z",
};

(async () => {
  const { chrome, values } = chromeMock();
  await assert.rejects(() => dynamic.commitBundle(chrome, { ...bundle, schemaVersion: 3 }), /Schema/);
  await assert.rejects(() => dynamic.commitBundle(chrome, { ...bundle, baseContentHash: "not-a-hash" }), /基础哈希/);
  const committed = await dynamic.commitBundle(chrome, bundle);
  assert(values[committed.revisionKey], "the immutable revision must be written");
  assert.strictEqual(values[dynamic.INDEX_KEY].sample.revisionKey, committed.revisionKey, "active pointer moves after verification");

  let loaded = await dynamic.loadActive(chrome, { sample: { contentHash: bundle.baseContentHash } });
  assert.strictEqual(loaded.datasets.sample.meta.name, "Sample");
  assert.strictEqual(loaded.officialAdapters.sample.id, "sample-local-help");
  assert.strictEqual(loaded.generationEnvironments.sample.providerId, "claude");
  assert.strictEqual(loaded.conflicts.length, 0);

  loaded = await dynamic.loadActive(chrome, { sample: { contentHash: `sha256:${"b".repeat(64)}` } });
  assert.strictEqual(loaded.datasets.sample, undefined, "an overlay based on an older built-in hash must pause");
  assert.strictEqual(loaded.conflicts[0].reason, "bundled-base-changed");

  values[committed.revisionKey].dataset.items[0].cmd = "tampered";
  loaded = await dynamic.loadActive(chrome, { sample: { contentHash: bundle.baseContentHash } });
  assert(/校验和/.test(loaded.conflicts[0].reason), "tampering must be caught before JSON data becomes active");

  const payload = JSON.stringify({ ...bundle, note: "分块内容" });
  const bytes = new TextEncoder().encode(payload);
  const midpoint = Math.floor(bytes.length / 2);
  const chunks = [bytes.slice(0, midpoint), bytes.slice(midpoint)].map((part) => Buffer.from(part).toString("base64"));
  const assembled = await dynamic.assembleChunks(chunks, bytes.length, crypto.createHash("sha256").update(bytes).digest("hex"));
  assert.strictEqual(assembled.note, "分块内容");
  await assert.rejects(() => dynamic.assembleChunks(chunks, bytes.length + 1, "0".repeat(64)), /总长度/);

  const removed = await dynamic.resetAll(chrome);
  assert.strictEqual(removed, 1);
  assert.strictEqual(values[dynamic.INDEX_KEY], undefined);
  console.log("Dynamic data transaction and chunk tests passed.");
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
