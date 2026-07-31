"use strict";

const assert = require("assert");
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

function unpackedExtensionId(extensionRoot) {
  const digest = crypto.createHash("sha256").update(fs.realpathSync(extensionRoot)).digest().subarray(0, 16);
  return [...digest].flatMap((byte) => [byte >> 4, byte & 15])
    .map((nibble) => String.fromCharCode("a".charCodeAt(0) + nibble)).join("");
}

(async () => {
  const root = path.resolve(__dirname, "..");
  const extensionRoot = path.resolve(process.argv[2] || root);
  const manifest = JSON.parse(fs.readFileSync(path.join(extensionRoot, "manifest.json"), "utf8"));
  const distribution = fs.readFileSync(path.join(extensionRoot, "distribution.js"), "utf8");
  const channel = /channel:\s*["']store["']/.test(distribution) ? "store" : "source";
  const context = await chromium.launchPersistentContext("", {
    // Chromium's headless shell does not initialize extension service workers;
    // CI runs this test under xvfb so we can use a real browser context.
    headless: false,
    args: [`--disable-extensions-except=${extensionRoot}`, `--load-extension=${extensionRoot}`],
  });
  try {
    let extensionId = unpackedExtensionId(extensionRoot);
    if (channel === "source") {
      let worker = context.serviceWorkers()[0];
      if (!worker) worker = await context.waitForEvent("serviceworker");
      extensionId = new URL(worker.url()).host;
    }
    const page = await context.newPage();
    await page.goto(`chrome-extension://${extensionId}/popup.html`);
    await page.waitForSelector("#main .empty-welcome");
    await page.waitForSelector("#onboarding.show");
    const onboardingText = await page.locator("#onboardTools").textContent();
    assert(onboardingText.includes("开发常用命令")
      && onboardingText.includes("Unix/POSIX · 文件、文本、网络、进程")
      && onboardingText.includes("macOS · Linux")
      && onboardingText.includes("Linux 运维排障")
      && onboardingText.includes("服务器 / 容器 / WSL · 服务、日志、端口、资源")
      && onboardingText.includes("Linux 主机"),
    "first-run choices should use the same developer-focused command cards");
    const onboardingOverflow = await page.evaluate(() =>
      Math.max(...[...document.querySelectorAll("#onboardTools .tool-choice")]
        .map((choice) => choice.scrollWidth - choice.clientWidth)));
    assert(onboardingOverflow <= 0, "first-run two-column cards must not overflow the 460px popup");

    const loadState = await page.evaluate(() => ({
      loadedTools: Object.keys(window.CHEATSHEET_DATA || {}),
      totalTools: window.CHEATSHEET_FILES.length,
    }));
    const defaultToolIds = new Set(["antigravity-cli", "claude-code", "codex", "gemini-cli", "openclaw", "opencode"]);
    assert(loadState.loadedTools.length > 0
      && loadState.loadedTools.every((toolId) => defaultToolIds.has(toolId)),
    `cold popup should load only default datasets; got ${loadState.loadedTools.join(", ")}`);

    await page.evaluate((enabledTools) => chrome.storage.local.set({
      onboarded: true,
      enabledTools,
      // Keep this cross-platform scenario deterministic on the Linux CI runner.
      platform: "mac",
    }), [...defaultToolIds]);
    await page.reload();
    await page.waitForSelector("#main .empty-welcome");

    await page.fill("#search", "恢复会话");
    await page.waitForTimeout(250);
    assert(await page.locator("#main .entry-wrap").count() > 0, "search should render results");
    await page.locator("#main .fav-btn").first().click();
    assert(await page.locator("#main .fav-active").count() > 0, "favourite state should update");

    await page.locator("#openManage").click();
    await page.waitForSelector("#recommendedTools .recommend-card");
    assert(await page.locator("#recommendedTools .recommend-card").count() > 0,
      "local recommendations should be visible without the companion");

    // Platform is a preference, not an access gate: macOS must still list,
    // enable and render Linux-only content without switching the preference.
    const linuxToggle = page.locator('#manageToolToggles input[data-enabled="linux"]');
    assert.strictEqual(await linuxToggle.count(), 1, "macOS management must list Linux system tools");
    assert.strictEqual(await linuxToggle.isChecked(), false, "Linux tools should not be enabled by default on macOS");
    const linuxChoiceText = await linuxToggle.locator("xpath=..").textContent();
    assert(linuxChoiceText.includes("Linux 运维排障")
      && linuxChoiceText.includes("服务器 / 容器 / WSL")
      && linuxChoiceText.includes("Linux 主机"),
    "Linux management should explain its developer scenario and target host");
    const unixChoiceText = await page.locator('#manageToolToggles input[data-enabled="unix-cli"]')
      .locator("xpath=..").textContent();
    assert(unixChoiceText.includes("开发常用命令")
      && unixChoiceText.includes("Unix/POSIX")
      && unixChoiceText.includes("macOS · Linux"),
    "Unix management should explain its developer scenario and supported hosts");
    const toolChoiceOverflow = await page.evaluate(() =>
      Math.max(...[...document.querySelectorAll("#manageToolToggles .tool-choice")]
        .map((choice) => choice.scrollWidth - choice.clientWidth)));
    assert(toolChoiceOverflow <= 0, "two-column management cards must not overflow the 460px popup");
    await page.locator("#maintenancePanel > summary").click();
    await page.fill("#addToolName", "Linux");
    await page.click("#addToolBtn");
    assert((await page.locator("#manageStatus").textContent()).includes("无需调用 AI"), "collected Linux data must bypass the AI add flow");
    await page.locator("#manageStatus .status-action").click();
    await page.waitForFunction(() => document.querySelector('#manageToolToggles input[data-enabled="linux"]')?.checked === true);
    assert.strictEqual(await page.locator("#bridgeDialog.show").count(), 0, "direct enablement must not open or invoke the native bridge");
    await page.locator("#maintenancePanel > summary").click();
    await page.locator("#closeManage").click();
    await page.fill("#search", "systemctl");
    await page.waitForTimeout(250);
    const linuxResult = page.locator('#main .entry-wrap[data-tool="linux"]').first();
    await linuxResult.waitFor();
    assert((await linuxResult.textContent()).includes("仅 Linux"), "Linux-only commands must stay labeled on macOS");
    assert.strictEqual(await linuxResult.locator(".copy-btn").isEnabled(), true, "other-platform commands must remain copyable");
    await linuxResult.locator(".copy-btn").click();
    await page.waitForSelector("#riskDialog.show");
    assert.strictEqual(await page.locator("#riskTitle").textContent(), "确认命令目标平台");
    await page.locator("#riskConfirm").click();
    await page.waitForFunction(() => new Promise((resolve) => chrome.storage.local.get("acknowledgedPlatformScopes", (stored) =>
      resolve(stored.acknowledgedPlatformScopes?.includes("linux")))));
    await linuxResult.locator(".copy-btn").click();
    await page.waitForTimeout(100);
    assert.strictEqual(await page.locator("#riskDialog.show").count(), 0, "confirmed Linux scope should not prompt twice");

    await page.fill("#search", "");
    await page.locator("#toggleFilters").click();
    await page.locator('#toolFilters [data-tool="linux"]').click();
    await page.waitForSelector("#developerCommandFilters .developer-command-nav");
    const commandNav = await page.locator("#developerCommandFilters").textContent();
    assert(commandNav.includes("精选 24")
      && commandNav.includes("服务与日志")
      && commandNav.includes("网络与端口")
      && commandNav.includes("完整清单 262"),
    "Linux browsing should expose featured scenarios and the complete inventory");
    assert((await page.locator("#countBar").textContent()).includes("24 条结果"),
      "the empty Linux view should contain the 24 featured commands");
    assert.strictEqual(await page.locator('#main .entry-wrap[data-tool="linux"]').count(), 24,
      "all 24 featured Linux commands should be visible without an extra expand action");
    await page.locator('#developerCommandFilters [data-command-view="inventory"]').click();
    assert((await page.locator("#countBar").textContent()).includes("262 条结果"),
      "the complete-list action should restore every Linux official entry");

    await page.locator("#openManage").click();

    if (channel === "store") {
      assert.strictEqual(manifest.background.service_worker, "background.js", "store package needs the maintenance bridge");
      assert.deepStrictEqual(manifest.permissions, ["storage"], "store cold start must keep only storage granted");
      assert.deepStrictEqual(manifest.optional_permissions, ["nativeMessaging", "alarms", "unlimitedStorage"]);
      assert.strictEqual(await page.locator("#localAiPanel").count(), 0, "store UI must not expose a local AI companion");
      assert.strictEqual(await page.locator("#aiSuggestBtn").count(), 0, "store UI must not expose AI recommendation actions");
      const hasNativePermission = await page.evaluate(() => new Promise((resolve) =>
        chrome.permissions.contains({ permissions: ["nativeMessaging"] }, resolve)));
      assert.strictEqual(hasNativePermission, false, "cold start must not grant or request native messaging");
      await page.locator("#maintenancePanel > summary").click();
      assert.strictEqual(await page.locator("#providerSelect option").count(), 2, "cold start should retain the detection placeholder and one add-environment entry");
      assert.strictEqual(await page.locator("#providerSelect option").first().textContent(), "检测本机 AI 环境后选择");
      assert.strictEqual(await page.locator("#providerSelect option").nth(1).textContent(), "＋ 添加 AI 环境…");
      assert.strictEqual(await page.locator("#addProviderEnvironment, #providerSetup, #providerApiDialog").count(), 0, "the popup must not expose persistent manual provider controls");
      const runtimeOverflow = await page.evaluate(() => {
        const row = document.querySelector(".runtime-row");
        return row.scrollWidth - row.clientWidth;
      });
      assert(runtimeOverflow <= 0, "automatic provider detection controls must fit the 460px popup");
      await page.selectOption("#providerSelect", "__add_provider__");
      await page.waitForSelector("#customProviderDialog.show");
      await page.waitForSelector("#commonProviderList [data-provider-entry]");
      assert.strictEqual(await page.locator("#commonProviderList [data-provider-entry]").count(), 10, "the add dialog should list common AI environments without contacting the bridge");
      await page.locator('[data-provider-entry="qwen-code"]').click();
      await page.waitForSelector("#genericProviderForm:not([hidden])");
      assert((await page.locator("#genericProviderFormTitle").textContent()).includes("Qwen Code"),
        "clicking Qwen must immediately enter a visible detection state");
      await page.waitForTimeout(100);
      const qwenFeedbackVisible = await page.evaluate(() => {
        const status = document.querySelector("#genericProviderStatus");
        return Boolean(document.querySelector("#genericProviderConfirm:not([hidden])"))
          || Boolean(document.querySelector("#genericExecutableField:not([hidden])"))
          || Boolean(document.querySelector("#bridgeDialog.show"))
          || Boolean(status?.classList.contains("err"))
          || document.querySelector("#genericProviderForm")?.getAttribute("aria-busy") === "true";
      });
      assert(qwenFeedbackVisible, "Qwen detection must always expose a visible next step, error, or permission-wait state");
      const qwenDetectionPending = await page.evaluate(() =>
        document.querySelector("#genericProviderForm")?.getAttribute("aria-busy") === "true");
      if (!qwenDetectionPending) {
        if (await page.locator("#bridgeDialog.show").count()) await page.locator("#closeBridgeDialog").click();
        if (await page.locator("#genericProviderConfirm:not([hidden])").count()) await page.locator("#backGenericProvider").click();
        await page.locator("#cancelGenericProvider").click();
        await page.locator("#openOtherProviderFlow").click();
        await page.waitForSelector("#genericProviderForm:not([hidden])");
        assert.strictEqual(await page.locator("#genericProviderForm input").count(), 2,
          "the generic flow should expose only a name and one command-name fallback field");
        assert.strictEqual(await page.locator("#customProviderDriver, #customProviderArgs, #customProviderLogin, #customProviderReadOnly").count(), 0,
          "the generic flow must not expose low-level adapter settings");
        const customOverflow = await page.evaluate(() => {
          const dialog = document.querySelector(".custom-provider-card");
          return dialog.scrollWidth - dialog.clientWidth;
        });
        assert(customOverflow <= 0, "the custom-provider form must fit the 460px popup");
      }
      // A real permission request remains open until the person accepts or
      // dismisses it. The automated Chromium profile cannot choose either
      // outcome, so do not launch a second maintenance request in that state.
      await page.locator("#closeCustomProviderDialog").click();
      const overflow = await page.evaluate(() => ({
        body: document.body.scrollWidth - document.body.clientWidth,
        dialog: document.querySelector(".bridge-card").scrollWidth - document.querySelector(".bridge-card").clientWidth,
      }));
      assert(overflow.body <= 0 && overflow.dialog <= 0, "460px popup and bridge dialog must not overflow horizontally");
    } else {
      const status = await page.evaluate(() => new Promise((resolve, reject) => {
        chrome.runtime.sendMessage({ action: "getTaskStatus" }, (response) => {
          if (chrome.runtime.lastError) reject(new Error(chrome.runtime.lastError.message));
          else resolve(response);
        });
      }));
      assert.strictEqual(status.running, false, "source service worker message bridge should respond");
    }
    console.log(`Chromium ${channel} smoke test passed (${loadState.loadedTools.length} lazy-loaded tools).`);
  } finally {
    await context.close();
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
