"use strict";

const assert = require("assert");
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const state = require("../popup-state.js");

const root = path.resolve(__dirname, "..");
function load(toolId) {
  const window = {};
  vm.runInNewContext(fs.readFileSync(path.join(root, "data", `${toolId}.js`), "utf8"), { window });
  return JSON.parse(JSON.stringify(window.CHEATSHEET_DATA[toolId]));
}
const data = { "unix-cli": load("unix-cli"), linux: load("linux"), shell: load("shell") };
const inventories = {
  "unix-cli": require(path.join(root, "shared", "official-inventories", "unix-cli.json")),
  linux: require(path.join(root, "shared", "official-inventories", "linux.json")),
};
const fixtures = {
  "unix-cli": require(path.join(root, "shared", "official-component-fixtures", "unix-cli.json")),
  linux: require(path.join(root, "shared", "official-component-fixtures", "linux.json")),
};
const coverageReport = fs.readFileSync(path.join(root, "docs", "official-command-coverage.md"), "utf8");

assert.strictEqual(data["unix-cli"].meta.name, "Unix/POSIX 基础命令");
assert.deepStrictEqual(data["unix-cli"].meta.platforms, ["mac", "linux"]);
assert.strictEqual(data.linux.meta.name, "Linux 系统工具");
assert.deepStrictEqual(data.linux.meta.platforms, ["linux"]);
assert(data.shell.meta.platforms.includes("windows"), "Shell must remain available for Bash/Zsh/WSL-oriented Windows entries");

const minimumLinux = [
  "free", "systemctl", "journalctl", "loginctl", "hostnamectl", "timedatectl",
  "pgrep", "pkill", "pidof", "uptime", "vmstat", "watch", "lsblk", "findmnt",
  "blkid", "dmesg", "ip", "ss",
];
assert(data.linux.items.length > minimumLinux.length, "the former 18-entry minimum must not be treated as the full Linux inventory");
minimumLinux.forEach((command) => assert(data.linux.items.some((item) => item.cmd === command), `${command} must remain covered`));
assert.strictEqual(data.linux.items.length, inventories.linux.entries.length);
assert.strictEqual(data["unix-cli"].items.length, inventories["unix-cli"].entries.length);
assert.deepStrictEqual(
  inventories.linux.closure.componentCounts,
  Object.fromEntries(fixtures.linux.components.map((component) => [component.id, component.entries.length]))
);
for (const toolId of ["unix-cli", "linux"]) {
  assert(coverageReport.includes(`合并重叠后的规范入口：${inventories[toolId].entries.length}`), `${toolId} release report must show its derived canonical count`);
  for (const component of fixtures[toolId].components) {
    assert(coverageReport.includes(`| \`${component.id}\` | ${component.version} | ${component.entries.length} | \`${component.archiveSha256}\` |`), `${toolId}/${component.id} release report must stay synchronized`);
  }
}
assert.deepStrictEqual(
  inventories["unix-cli"].closure.componentCounts,
  Object.fromEntries(fixtures["unix-cli"].components.map((component) => [component.id, component.entries.length]))
);
assert(data.linux.items.every((item) => item.context === "linux-system" && item.platforms.join() === "linux"));
assert(data["unix-cli"].items.every((item) => ["posix-utility", "external-command"].includes(item.context)));
for (const tool of [data["unix-cli"], data.linux]) {
  assert(tool.items.every((item) => item.entryType === "cli-command" && item.usage && Array.isArray(item.options)), `${tool.meta.id} entries must retain official usage and option metadata`);
}
for (const command of ["addpart.static", "mount.static", "unshare.static"]) {
  const item = data.linux.items.find((candidate) => candidate.cmd === command);
  assert(item && item.components.includes("util-linux") && item.constraints.some((value) => value.includes("static_programs")), `${command} must preserve its optional util-linux build constraint`);
}
assert(data["unix-cli"].items.find((item) => item.cmd === "uucp").constraints.some((value) => value.includes("not required on every conforming implementation")), "optional POSIX utility groups must retain availability constraints");
assert(data.linux.items.filter((item) => item.components.includes("systemd")).every((item) => item.constraints.some((value) => value.includes("distribution built with systemd"))), "every systemd entry must disclose its distribution/build requirement");
for (const command of ["ls", "cp", "grep", "tar", "chmod"]) {
  assert.strictEqual(data["unix-cli"].items.filter((item) => item.cmd === command).length, 1, `${command} must be canonical`);
}
for (const variant of ["ls -l", "cp -r", "grep -r", "tar -xzf", "chmod +x"]) {
  assert(!data["unix-cli"].items.some((item) => item.cmd === variant), `${variant} must be an example, not an entry`);
  assert(data["unix-cli"].items.some((item) => item.examples.some((example) => example.value.startsWith(variant))));
}
for (const command of ["cd", "bg", "fg"]) {
  assert(data.shell.items.some((item) => item.cmd === command), `${command} must remain represented as Shell behavior`);
  assert(data["unix-cli"].items.some((item) => item.cmd === command && item.context === "posix-utility"), `${command} must also cover its POSIX utility contract`);
}
for (const command of ["history", "|", ">", ">>", "Ctrl+R", "Ctrl+C", "Ctrl+Z"]) {
  assert(data.shell.items.some((item) => item.cmd === command), `${command} must belong to Shell`);
  assert(!data["unix-cli"].items.some((item) => item.cmd === command));
  assert(!data.linux.items.some((item) => item.cmd === command));
}

const crossOwners = new Map();
for (const [toolId, tool] of Object.entries(data)) for (const item of tool.items) {
  const owners = crossOwners.get(item.cmd) || [];
  owners.push({ toolId, context: item.context });
  crossOwners.set(item.cmd, owners);
}
for (const [command, owners] of crossOwners) {
  if (owners.length > 1) {
    assert(owners.every((owner) => owner.context), `${command} may cross categories only with explicit contexts`);
  }
}

const targets = state.LEGACY_LINUX_ITEM_TARGETS;
assert.strictEqual(Object.keys(targets).length, 63, "all 63 legacy Linux item IDs need an explicit destination");
for (const [legacyId, target] of Object.entries(targets)) {
  const [toolId, itemId] = target.split("::");
  assert(data[toolId]?.items.some((item) => item.id === itemId), `${legacyId} target ${target} must exist`);
}

const macMigration = state.migrateLegacyLinuxState({
  platform: "mac",
  enabledTools: ["git", "linux", "shell"],
  favourites: ["linux::linux-ls-la", "linux::linux-ctrl-r"],
  recentCopies: [{ toolId: "linux", itemId: "linux-free", command: "free -h" }],
  aiRecommendations: [{ tool: "fd", related: ["linux", "shell"] }],
});
assert.deepStrictEqual(new Set(macMigration.enabledTools), new Set(["git", "unix-cli", "shell"]));
assert(macMigration.favourites.includes("unix-cli::unix-ls"));
assert(macMigration.favourites.includes("shell::shell-ctrl-r"));
assert.deepStrictEqual(macMigration.recentCopies[0], { toolId: "linux", itemId: "linux-free", command: "free -h" });
assert.deepStrictEqual(macMigration.aiRecommendations[0].related, ["unix-cli", "shell"]);

const linuxMigration = state.migrateLegacyLinuxState({ platform: "linux", enabledTools: ["linux"] });
assert.deepStrictEqual(new Set(linuxMigration.enabledTools), new Set(["unix-cli", "linux"]));
const windowsMigration = state.migrateLegacyLinuxState({ platform: "windows", enabledTools: ["linux", "shell"] });
assert.deepStrictEqual(new Set(windowsMigration.enabledTools), new Set(["shell"]));

assert.deepStrictEqual(state.availableToolIds(data, "mac"), ["unix-cli", "shell"]);
assert.deepStrictEqual(state.availableToolIds(data, "linux"), ["unix-cli", "linux", "shell"]);
assert.deepStrictEqual(state.availableToolIds(data, "windows"), ["shell"]);

console.log("Command partition and legacy migration tests passed.");
