"use strict";

const assert = require("assert");
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const core = require("../product-core.js");
const state = require("../popup-state.js");

const root = path.resolve(__dirname, "..");
const curation = JSON.parse(fs.readFileSync(
  path.join(root, "shared", "developer-command-curation.json"),
  "utf8",
));
const context = { window: {} };
vm.createContext(context);
for (const toolId of ["unix-cli", "linux"]) {
  vm.runInContext(fs.readFileSync(path.join(root, "data", `${toolId}.js`), "utf8"), context);
}

const expected = {
  "unix-cli": [
    "pwd", "ls", "find", "cat", "stat", "realpath", "grep", "xargs", "sed", "awk", "tail", "less",
    "curl", "wget", "ssh", "scp", "ps", "top", "kill", "chmod", "df", "du", "tar", "timeout",
  ],
  linux: [
    "systemctl", "journalctl", "dmesg", "coredumpctl", "pgrep", "pkill", "free", "vmstat", "uptime",
    "watch", "ss", "ip", "resolvectl", "networkctl", "lsfd", "lslocks", "lsblk", "findmnt", "namei",
    "flock", "taskset", "prlimit", "nsenter", "unshare",
  ],
};
const fixedInventoryHashes = {
  "unix-cli": "sha256:4a4541e5b16f5cdef82cb7971e5492ba04efe523aba3d6e22075a92f9d4f2ee1",
  linux: "sha256:492668b3d06a5d2829615cb4945ba209aee02bbb0e05ef09794b8611580f7b94",
};
const fixedIdentityHashes = {
  "unix-cli": "sha256:3e1f34d5262ce6a898b103fb94e3fda80f4d07ba27529fdb4ddf90b675f69c61",
  linux: "sha256:2f3dbdc8176813d1072f71fd59fd1e8fde91008b4a97b1a8a0881c048d25aff4",
};

for (const [toolId, commands] of Object.entries(expected)) {
  const tool = context.window.CHEATSHEET_DATA[toolId];
  const inventory = JSON.parse(fs.readFileSync(
    path.join(root, "shared", "official-inventories", `${toolId}.json`),
    "utf8",
  ));
  const view = curation.tools[toolId];
  const prefix = toolId === "unix-cli" ? "unix-" : "linux-";
  assert.strictEqual(tool.items.length, toolId === "unix-cli" ? 220 : 262,
    `${toolId} must retain its closed official inventory`);
  assert.deepStrictEqual(view.featuredItemIds, commands.map((command) => `${prefix}${command}`),
    `${toolId} featured order must remain intentional and stable`);
  assert.strictEqual(view.groups.length, 6, `${toolId} needs six developer scenario groups`);
  const grouped = view.groups.flatMap((group) => group.itemIds);
  assert.strictEqual(new Set(grouped).size, grouped.length, `${toolId} featured commands cannot span primary groups`);
  assert.deepStrictEqual([...grouped].sort(), [...view.featuredItemIds].sort(),
    `${toolId} groups must cover every featured command exactly once`);
  const inventoryHash = `sha256:${crypto.createHash("sha256")
    .update(JSON.stringify(inventory.entries)).digest("hex")}`;
  assert.strictEqual(inventoryHash, fixedInventoryHashes[toolId], `${toolId} inventory hash must not drift`);
  assert.strictEqual(view.inventoryHash, inventoryHash, `${toolId} curation must bind to the official inventory`);
  const identityHash = `sha256:${crypto.createHash("sha256").update(JSON.stringify(
    tool.items.map((item) => ({
      id: item.id,
      cmd: item.cmd,
      context: item.context,
      aliases: item.aliases,
    })),
  )).digest("hex")}`;
  assert.strictEqual(identityHash, fixedIdentityHashes[toolId],
    `${toolId} stable IDs, commands, aliases and contexts must not drift`);
  const itemById = new Map(tool.items.map((item) => [item.id, item]));
  for (const itemId of view.featuredItemIds) {
    const examples = view.examplesByItemId[itemId];
    assert(examples && examples.length >= 1 && examples.length <= 3,
      `${toolId}:${itemId} needs 1-3 real developer examples`);
    assert(itemById.has(itemId), `${toolId}:${itemId} must keep its stable official ID`);
    assert.strictEqual(
      JSON.stringify(itemById.get(itemId).examples.slice(0, examples.length).map((example) =>
        [example.scenario, example.goal, example.value, example.description, example.expected])),
      JSON.stringify(examples.map((example) =>
        [example.scenario, example.goal, example.value, example.description, example.expected])),
      `${toolId}:${itemId} curation must be materialized in the shipped dataset`,
    );
  }
  const canonical = inventory.entries.map((entry) => `${entry.command}\0${entry.context}`).sort();
  const shipped = tool.items.map((item) => `${item.cmd}\0${item.context}`).sort();
  assert.strictEqual(JSON.stringify(shipped), JSON.stringify(canonical),
    `${toolId} curation must not add or remove official commands`);
}

const unixExamples = curation.tools["unix-cli"].examplesByItemId;
assert.strictEqual(new Set(unixExamples["unix-find"].map((example) => example.value)).size,
  unixExamples["unix-find"].length, "find scenarios must not repeat");
assert.strictEqual(new Set(unixExamples["unix-tar"].map((example) => example.value)).size,
  unixExamples["unix-tar"].length, "tar scenarios must not repeat");
const inPlaceSed = unixExamples["unix-sed"].find((example) => /\bsed\s+-i\b/.test(example.value));
assert(inPlaceSed && inPlaceSed.copyable === false && inPlaceSed.warning
  && /改写|覆盖/.test(inPlaceSed.expected), "sed -i must explain disk mutation and remain non-copyable");
const updatedb = unixExamples["unix-updatedb"][0];
assert(updatedb.copyable === false && updatedb.warning && /覆盖|写/.test(updatedb.warning),
  "updatedb must disclose its write impact and remain non-copyable");
const fstrim = curation.tools.linux.examplesByItemId["linux-fstrim"];
assert(fstrim.some((example) => /\s-n(?:\s|$)/.test(example.value) && example.copyable !== false),
  "fstrim must provide a safe dry-run first");
assert(fstrim.some((example) => example.copyable === false && example.warning),
  "actual fstrim must be non-copyable and warn about block discard");

for (const thirdParty of ["rg", "fd", "jq", "lsof", "rsync"]) {
  assert(!Object.values(expected).flat().includes(thirdParty),
    `${thirdParty} must stay outside the two official command inventories`);
}

const data = context.window.CHEATSHEET_DATA;
const entryIndex = state.createEntryIndex(data, new Map(), core, curation);
const searchState = {
  activeTool: "all",
  activeCat: null,
  activeShellFilter: null,
  activeEvidence: null,
  activeExampleFilter: null,
  activeDeveloperGroup: null,
  browseCommandInventory: false,
  developerCuration: curation,
  searchQuery: "",
  enabledTools: new Set(["unix-cli", "linux"]),
  favourites: new Set(),
  recents: [],
  platform: "linux",
};
function topCommands(query, limit = 2) {
  const entries = state.collectEntries(entryIndex, data, core, {
    ...searchState,
    searchQuery: query,
  });
  return core.rankItems(entries, query, { platform: "linux" })
    .slice(0, limit)
    .map((entry) => entry.item.cmd);
}
assert.strictEqual(topCommands("项目文件", 1)[0], "find");
assert.strictEqual(topCommands("接口", 1)[0], "curl");
assert.strictEqual(topCommands("API", 1)[0], "curl");
assert.strictEqual(JSON.stringify(topCommands("持续日志")), JSON.stringify(["tail", "journalctl"]));
assert.strictEqual(topCommands("端口监听", 1)[0], "ss");
assert.strictEqual(topCommands("服务失败", 1)[0], "systemctl");
assert.strictEqual(JSON.stringify(topCommands("内存压力")), JSON.stringify(["free", "vmstat"]));
assert.strictEqual(JSON.stringify(topCommands("容器命名空间")), JSON.stringify(["nsenter", "unshare"]));

console.log("Developer command curation tests passed.");
