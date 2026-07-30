"use strict";

const assert = require("assert");
const fs = require("fs");
const os = require("os");
const path = require("path");
const { spawnSync } = require("child_process");

const root = path.resolve(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const host = read("native-host/host.py");
const officialInventory = read("native-host/official_inventory.py");
const builder = read("tools/build-bridge-assets.py");
const bridgeSpec = read("native-host/bridge.spec");
const workflow = read(".github/workflows/release.yml");
const popup = read("popup.js");
const installSh = read("native-host/install.sh");
const installPs1 = read("native-host/install.ps1");
const providerRegistry = read("native-host/provider_registry.py");
const legacyProviderAdapters = JSON.parse(read("shared/provider-adapters.json"));
const v5ProviderAdapters = JSON.parse(read("shared/provider-adapters-v5.json"));

assert(host.includes("PROTOCOL_VERSION = 5") && host.includes('COMPANION_VERSION = "1.8.2"'));
assert(host.includes("PROJECT_DIR = os.path.realpath(_project_base_dir())"), "the frozen bridge must load bundled shared resources from _MEIPASS");
assert(officialInventory.includes("sys._MEIPASS"), "the frozen official-inventory adapter must load bundled snapshots from _MEIPASS");
assert(bridgeSpec.includes('(str(ROOT / "shared"), "shared")'), "the bridge bundle must include official component fixtures as well as rendered inventories");
assert(officialInventory.includes("official-component-index-union") && officialInventory.includes("_load_component_fixture"), "Unix/Linux maintenance must rebuild the union from independent component fixtures");
assert(!host.includes("def fetch_generic_official_inventory"), "models must never be used as the official inventory completeness adapter");
for (const provider of ["claude", "codex", "gemini", "opencode", "qwen"]) {
  assert(host.includes(`"${provider}"`), `missing provider adapter: ${provider}`);
}
assert(host.includes('"--sandbox", "read-only"') && host.includes('"--ephemeral"') && host.includes('web_search="disabled"'), "Codex must run in an ephemeral read-only sandbox without model-side browsing");
assert(host.includes('"--approval-mode", "plan"') && host.includes('"--admin-policy"') && host.includes('toolName = "*"'), "Gemini must run in plan mode with a deny-all tool policy");
assert(host.includes('"--agent", "plan"') && host.includes('"edit": "deny"'), "OpenCode must deny edits in plan mode");
assert(host.includes('"--permission-mode"') && host.includes('"--tools"'), "Claude must disable mutating tools");

// Both installers must deploy every module in native-host/. Enumerating them
// one by one meant a newly added module silently stayed behind and the
// deployed host.py crashed on import.
{
  const modules = fs.readdirSync(path.join(root, "native-host"))
    .filter((name) => name.endsWith(".py"));
  assert(modules.length >= 6, "native-host should contain the bridge modules");
  assert(
    /for module in "\$SCRIPT_DIR"\/\*\.py/.test(installSh),
    "install.sh must deploy every native-host module, not a hand-written list",
  );
  assert(
    /Get-ChildItem -Path \$ScriptDir -Filter "\*\.py"/.test(installPs1),
    "install.ps1 must deploy every native-host module, not a hand-written list",
  );
  for (const module of modules) {
    assert(
      !new RegExp(`cp "\\$SCRIPT_DIR/${module}"`).test(installSh),
      `install.sh should not special-case ${module}`,
    );
  }
}

// Overwriting allowed_origins meant registering the bridge for a source checkout
// silently locked the store build out of it, and vice versa.
const STORE_ID = "jdiopjiebnamikpcknmnpahhlokccgjj";
for (const [name, script] of [["install.sh", installSh], ["install.ps1", installPs1]]) {
  assert(script.includes(STORE_ID), `${name} must always authorise the published store extension`);
  assert(
    /allowed_origins/.test(script) && /existing/i.test(script),
    `${name} must merge into the existing allowed_origins instead of replacing them`,
  );
  assert(
    !new RegExp(`allowed_origins"?\\s*[:=]\\s*@?\\(?\\[?"?chrome-extension://\\$`).test(script),
    `${name} must not write allowed_origins as a single hard-coded entry`,
  );
}

assert(builder.includes('STORE_EXTENSION_ID = "jdiopjiebnamikpcknmnpahhlokccgjj"'));
assert(builder.includes('STORE_HOST_NAME = "com.aicli.cheatsheet.store_bridge"')
  && builder.includes('LEGACY_HOST_NAME = "com.aicli.cheatsheet_updater"'),
  "release installers must register isolated store and legacy native host names");
assert(read("background.js").includes("chrome.runtime.id === STORE_EXTENSION_ID ? STORE_NATIVE_HOST : LEGACY_NATIVE_HOST"),
  "the store extension must use the isolated native host while source installs keep the legacy host");
assert(bridgeSpec.includes("ROOT = Path(SPECPATH).resolve().parent\n"), "PyInstaller must resolve the repository root from native-host/bridge.spec");
assert(bridgeSpec.includes("console=True"), "the self-contained host must retain Native Messaging stdio on Windows");
assert(builder.includes('allowed_origins') && !builder.includes('chrome-extension://*/'), "installer manifests must use one exact origin");
assert(builder.includes('env["COPYFILE_DISABLE"] = "1"'), "macOS packages must not carry AppleDouble sidecars");
assert(builder.includes('run(["xattr", "-cr", work])'), "macOS package roots must have resource-fork metadata cleared before signing");
assert(builder.includes('exec sudo \\"$0\\" \\"$@\\"'), "the macOS uninstall entry must elevate before removing system files");
for (const suffix of ["macos-{arch}-v{version}.pkg", "windows-x64-v{version}.msi", "linux-x64-v{version}.{package_type}"]) {
  assert(builder.includes(suffix), `missing versioned installer pattern: ${suffix}`);
}
assert(workflow.includes("release-preflight:"), "release must explicitly negotiate optional signed-installer capability");
assert(workflow.includes("needs: [build-and-test, release-preflight, build-bridge]"), "GitHub Release must wait for bridge builds when signed installer assets are available");
assert(workflow.includes("if: needs.release-preflight.outputs.advanced_release == 'true'"), "bridge installers must be gated on complete signing capability");
assert(workflow.includes("needs: [github-release, release-preflight]"), "Chrome submission must wait for the GitHub Release and release capability gate");
assert(workflow.includes('test "$EXTENSION_ID" = "jdiopjiebnamikpcknmnpahhlokccgjj"'), "store submission must match the bridge allowed origin");
assert(workflow.includes('test -n "$CWS_SERVICE_ACCOUNT_JSON"'), "store submission must fail closed without API credentials");
assert(workflow.includes('if [ "$ADVANCED_RELEASE" = "true" ]') && workflow.includes("test -s release-assets/SHA256SUMS.asc"),
  "only advanced releases may require a signed checksum manifest");
assert(workflow.includes("runner: macos-15") && workflow.includes("runner: macos-15-intel"), "bridge builds need explicit current arm64 and Intel macOS runners");
assert(workflow.includes("--require-signing") && builder.includes("notarytool"), "signed/notarized installers must stay available when credentials exist");
assert(workflow.includes("verify-release-assets.js") && workflow.includes("SHA256SUMS.asc"));
assert(workflow.includes("--bridge-only") && workflow.includes('--bridge-installers "$INSTALLER_STATE"'), "release packages may expose installers only after every bridge asset is present");
assert(!workflow.includes("--bridge-installers-ready"), "the boolean installer flag is replaced by the signed/unsigned/none state");
assert(workflow.includes("--basic-only"), "the baseline extension release must remain publishable without any bridge installers");
// Gating the bridge build on full signing capability shipped releases with no
// installer at all, which left store users unable to enable maintenance.
const bridgeJob = workflow.slice(workflow.indexOf("  build-bridge:"), workflow.indexOf("  github-release:"));
assert(!/^    if:/m.test(bridgeJob), "the bridge build must not be gated on signing capability");
assert(bridgeJob.includes('if [ "$ADVANCED_RELEASE" = "true" ] && [ "${{ matrix.platform }}" != "linux" ]'), "signing must be demanded only when every credential is present");
assert(bridgeJob.includes('if [ -n "$PROVIDER_CATALOG_SIGNING_KEY" ]') && !bridgeJob.includes('test -n "$PROVIDER_CATALOG_SIGNING_KEY"'), "a missing catalog signing key must not block building the installer");
const githubReleaseWorkflow = workflow.slice(workflow.indexOf("  github-release:"), workflow.indexOf("  chrome-web-store:"));
assert(githubReleaseWorkflow.indexOf("actions/checkout@v4") < githubReleaseWorkflow.indexOf("name: release-assets"),
  "checkout must run before downloading release assets so its clean step cannot remove them");
for (const state of ["state=none", "state=signed", "state=unsigned"]) {
  assert(githubReleaseWorkflow.includes(state), `the release must resolve an explicit installer state: ${state}`);
}
assert(githubReleaseWorkflow.includes('BRIDGE_RESULT" != "success"') && githubReleaseWorkflow.includes("state=none"), "only a failed bridge build may leave the extension with no install path");
assert(read("tools/package-extension.js").includes('bridgeInstallers: "${bridgeInstallers}"'), "a verified release package must declare which installer trust level it ships");
assert(read("tools/package-extension.js").includes('BRIDGE_INSTALLER_STATES = ["signed", "unsigned", "none"]'), "installer availability must distinguish an unsigned installer from having none at all");

assert(popup.includes("releases/download/v${BRIDGE_VERSION}"), "download URLs must be pinned to the extension version");
assert(!popup.includes("/releases/latest/"), "download URLs must not use latest");
assert(popup.includes("bridgeInstallersAvailable") && !popup.includes("bridgeSourceInstallCommand"), "the popup must use verified graphical installers instead of terminal install commands");
assert(!popup.includes("providerApiConfigureCommand"), "compatible API setup must not expose a terminal command in the extension");
assert(popup.includes("providerId: selectedProviderId"), "every maintenance task must include the explicit provider");
assert(popup.includes("providerCatalogDigest: effectiveBridgeProtocol() >= 4") && popup.includes("bridgeProtocolVersion: effectiveBridgeProtocol()"), "v4/v5 tasks must bind the catalog digest while v3 uses its negotiated legacy protocol");
assert(!popup.includes("const PROVIDER_ORDER"), "the extension must not hard-code a provider allowlist");
assert(host.includes("load_registry") && host.includes("providerCatalogDigest"), "the bridge must resolve dynamic providers from its registry");
assert(host.includes("save_custom_adapter") && host.includes("save_generic_adapter") && host.includes("delete_custom_adapter"), "the bridge must persist local generic and legacy provider metadata");
assert(host.includes('"resolve_generic_provider"') && host.includes('"enable_generic_provider"'), "the bridge should support one-click generic provider discovery and confirmation");
assert(host.includes('"prepare_common_provider_install"') && host.includes('"install_common_provider"'), "the bridge should expose only bridge-owned common-provider installation actions");
assert(host.includes('"--safe-mode"') && host.includes('"--max-session-turns"') && host.includes('def _call_qwen_cli'), "Qwen must run through its vetted headless plan adapter");
assert(!legacyProviderAdapters.adapters.some((adapter) => adapter.driver === "builtin-qwen"), "the shared v4-safe catalog must not block an installed legacy bridge");
assert(v5ProviderAdapters.adapters.some((adapter) => adapter.driver === "builtin-qwen"), "the v5 overlay must carry Qwen separately");
assert(providerRegistry.includes("V5_BUILTIN_OVERLAY_FILE") && providerRegistry.includes("builtinOverlayError"), "a broken v5 overlay must not prevent legacy Provider detection");
assert(!host.includes("curl | bash") && !host.includes("| iex"), "the bridge must never execute remote shell installer scripts");
assert(host.includes('adapter.get("source") in {"catalog", "custom"}'), "a custom adapter must use the same direct-process-only runner as signed adapters");
assert(host.includes('"refreshCatalog": message.get("refreshCatalog") is True') && host.includes("refresh_catalog_if_stale"), "only an explicit handshake may refresh the signed provider catalog");
assert(popup.includes("refreshCatalog: true") && popup.includes("companionState === \"detecting\""), "the popup must explicitly request catalog refresh and render detection progress");
// Module deployment is asserted below against the real contents of
// native-host/ rather than against a duplicated list of names.
assert(bridgeSpec.includes('(str(ROOT / "shared"), "shared")'), "the bridge bundle must include the common AI environment directory");
assert(workflow.includes("PROVIDER_CATALOG_SIGNING_KEY"), "release builds must inject the Ed25519 catalog key");
assert(!popup.includes('runCompanionTask("suggest_tools"'), "AI re-recommendations must stay disabled in 1.8.2");
assert(read("tools/publish-chrome-store.js").includes('publishType: "DEFAULT_PUBLISH"')
  && read("tools/publish-chrome-store.js").includes("deployPercentage: 100"),
  "approved Chrome Web Store releases must publish automatically to 100% of users");

const basicAssets = fs.mkdtempSync(path.join(os.tmpdir(), "aicli-basic-release-"));
try {
  for (const filename of [
    "ai-cli-cheatsheet-source-v1.8.2.zip",
    "ai-cli-cheatsheet-store-v1.8.2.zip",
  ]) {
    fs.writeFileSync(path.join(basicAssets, filename), `fixture:${filename}`);
  }
  const verify = [
    process.execPath,
    path.join(root, "tools", "verify-release-assets.js"),
    "--directory", basicAssets,
    "--version", "1.8.2",
    "--basic-only",
  ];
  let result = spawnSync(verify[0], verify.slice(1), { encoding: "utf8" });
  assert.strictEqual(result.status, 0, result.stderr || result.stdout);
  result = spawnSync(verify[0], [...verify.slice(1), "--check"], { encoding: "utf8" });
  assert.strictEqual(result.status, 0, result.stderr || result.stdout);
} finally {
  fs.rmSync(basicAssets, { recursive: true, force: true });
}

console.log("Bridge protocol and release-gate tests passed.");
