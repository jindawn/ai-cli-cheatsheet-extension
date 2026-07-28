"use strict";

// shared/ai-environments.json is the identity source of truth for AI execution
// environments. Adding one CLI used to mean editing eight places across two
// naming schemes (provider id "claude" vs tool-data id "claude-code"), which is
// how TOOL_VERSION_COMMANDS ended up listing openclaw but not qwen while the
// provider registry listed qwen but not openclaw.
//
// This validates rather than generates: shared/provider-adapters.json keeps the
// exact shape source-installed v3/v4 bridges read directly, so nothing here may
// rewrite it.

const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const readJson = (file) => JSON.parse(fs.readFileSync(path.join(root, file), "utf8"));

const registry = readJson("shared/ai-environments.json");
const baseAdapters = readJson("shared/provider-adapters.json");
const v5Adapters = readJson("shared/provider-adapters-v5.json");
const commonCatalog = readJson("shared/common-provider-catalog.json");
const host = fs.readFileSync(path.join(root, "native-host/host.py"), "utf8");

assert.strictEqual(registry.schemaVersion, 1);
assert(Array.isArray(registry.environments) && registry.environments.length > 0);

const seen = new Set();
for (const environment of registry.environments) {
  for (const field of ["toolDataId", "displayName", "executable", "officialUrl"]) {
    assert.strictEqual(
      typeof environment[field], "string",
      `${environment.toolDataId}.${field} must be a string`,
    );
  }
  assert(environment.officialUrl.startsWith("https://"), `${environment.toolDataId} needs an HTTPS official URL`);
  assert(Array.isArray(environment.versionArgs) && environment.versionArgs.length > 0);
  assert(!seen.has(environment.toolDataId), `duplicate toolDataId: ${environment.toolDataId}`);
  seen.add(environment.toolDataId);
  assert([null, "base", "v5"].includes(environment.overlay ?? null));
  // An environment is either executable (has a provider adapter) or purely a
  // cheatsheet subject; a providerId without an overlay is a drift bug.
  assert.strictEqual(
    environment.providerId === null, environment.overlay === null,
    `${environment.toolDataId}: providerId and overlay must both be set or both be null`,
  );
}

const byProviderId = new Map(
  registry.environments.filter((item) => item.providerId).map((item) => [item.providerId, item]),
);

// 1. Both adapter files must agree with the registry, and live in the overlay
//    the registry assigns them.
for (const [document, overlay, file] of [
  [baseAdapters, "base", "shared/provider-adapters.json"],
  [v5Adapters, "v5", "shared/provider-adapters-v5.json"],
]) {
  const expected = registry.environments
    .filter((item) => item.overlay === overlay)
    .map((item) => item.providerId)
    .sort();
  assert.deepStrictEqual(
    document.adapters.map((adapter) => adapter.id).sort(), expected,
    `${file} must contain exactly the ${overlay} providers listed in shared/ai-environments.json`,
  );
  for (const adapter of document.adapters) {
    const environment = byProviderId.get(adapter.id);
    assert.strictEqual(adapter.displayName, environment.displayName, `${file}: ${adapter.id} display name drifted`);
    assert.deepStrictEqual(
      adapter.executableCandidates, [environment.executable],
      `${file}: ${adapter.id} executable drifted`,
    );
  }
}

// 2. Every common-catalog entry that maps to a built-in provider must match it,
//    and the extension-bundled copy is the same file the bridge reads.
const byCommonId = new Map(
  registry.environments.filter((item) => item.commonId).map((item) => [item.commonId, item]),
);
for (const entry of commonCatalog.providers) {
  const environment = byCommonId.get(entry.id);
  if (!environment) {
    // Third-party tools with no built-in adapter are catalog-only by design.
    assert.notStrictEqual(
      entry.adapterStatus, "built-in",
      `${entry.id} claims a built-in adapter but is absent from shared/ai-environments.json`,
    );
    continue;
  }
  assert.strictEqual(entry.displayName, environment.displayName, `${entry.id} display name drifted`);
  assert.strictEqual(entry.executable, environment.executable, `${entry.id} executable drifted`);
  assert.strictEqual(entry.officialUrl, environment.officialUrl, `${entry.id} official URL drifted`);
  assert.strictEqual(
    entry.adapterStatus, "built-in",
    `${entry.id} has a built-in adapter and must be labelled as one`,
  );
}
for (const environment of byCommonId.values()) {
  assert(
    commonCatalog.providers.some((entry) => entry.id === environment.commonId),
    `${environment.commonId} is missing from shared/common-provider-catalog.json`,
  );
}

// 3. The bridge derives its local version probes from the registry instead of
//    keeping a second hard-coded table under a different naming scheme.
assert(
  host.includes("TOOL_VERSION_COMMANDS = _tool_version_commands()"),
  "host.py must derive TOOL_VERSION_COMMANDS from shared/ai-environments.json",
);
assert(
  !/TOOL_VERSION_COMMANDS = \{/.test(host),
  "host.py must not reintroduce a hard-coded tool version table",
);

console.log(`AI environment identity consistency tests passed (${registry.environments.length} environments).`);
