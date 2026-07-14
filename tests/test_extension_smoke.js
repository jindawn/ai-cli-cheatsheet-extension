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
  const sourceMode = Boolean(manifest.background);
  const context = await chromium.launchPersistentContext("", {
    // Chromium's headless shell does not initialize extension service workers;
    // CI runs this test under xvfb so we can use a real browser context.
    headless: false,
    args: [`--disable-extensions-except=${extensionRoot}`, `--load-extension=${extensionRoot}`],
  });
  try {
    let extensionId = unpackedExtensionId(extensionRoot);
    if (sourceMode) {
      let worker = context.serviceWorkers()[0];
      if (!worker) worker = await context.waitForEvent("serviceworker");
      extensionId = new URL(worker.url()).host;
    }
    const page = await context.newPage();
    await page.goto(`chrome-extension://${extensionId}/popup.html`);
    await page.waitForSelector("#main .empty-welcome");

    const loadState = await page.evaluate(() => ({
      loadedTools: Object.keys(window.CHEATSHEET_DATA || {}),
      totalTools: window.CHEATSHEET_FILES.length,
    }));
    const defaultToolIds = new Set(["antigravity-cli", "claude-code", "codex", "gemini-cli", "openclaw", "opencode"]);
    assert(loadState.loadedTools.length > 0
      && loadState.loadedTools.every((toolId) => defaultToolIds.has(toolId)),
    `cold popup should load only default datasets; got ${loadState.loadedTools.join(", ")}`);

    await page.evaluate(() => chrome.storage.local.set({ onboarded: true }));
    await page.reload();
    await page.waitForSelector("#main .empty-welcome");

    await page.fill("#search", "恢复会话");
    await page.waitForTimeout(250);
    assert(await page.locator("#main .entry-wrap").count() > 0, "search should render results");
    await page.locator("#main .fav-btn").first().click();
    assert(await page.locator("#main .fav-active").count() > 0, "favourite state should update");

    await page.locator("#openManage").click();
    if (sourceMode) {
      const status = await page.evaluate(() => new Promise((resolve, reject) => {
        chrome.runtime.sendMessage({ action: "getTaskStatus" }, (response) => {
          if (chrome.runtime.lastError) reject(new Error(chrome.runtime.lastError.message));
          else resolve(response);
        });
      }));
      assert.strictEqual(status.running, false, "service worker message bridge should respond");
      assert(await page.locator("[data-source-only]:visible").count() > 0, "source controls should be visible");
    } else {
      assert.strictEqual(await page.locator("[data-source-only]:visible").count(), 0, "store controls must stay hidden");
      assert.strictEqual(context.serviceWorkers().length, 0, "store package must not start a service worker");
    }
    console.log(`Chromium ${sourceMode ? "source" : "store"} smoke test passed (${loadState.loadedTools.length} lazy-loaded tools).`);
  } finally {
    await context.close();
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
