"use strict";

const assert = require("assert");
const path = require("path");
const { chromium } = require("playwright");

(async () => {
  const root = path.resolve(__dirname, "..");
  const context = await chromium.launchPersistentContext("", {
    // Chromium's headless shell does not initialize extension service workers;
    // CI runs this test under xvfb so we can use a real browser context.
    headless: false,
    args: [`--disable-extensions-except=${root}`, `--load-extension=${root}`],
  });
  try {
    let worker = context.serviceWorkers()[0];
    if (!worker) worker = await context.waitForEvent("serviceworker");
    const extensionId = new URL(worker.url()).host;
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

    const status = await page.evaluate(() => new Promise((resolve, reject) => {
      chrome.runtime.sendMessage({ action: "getTaskStatus" }, (response) => {
        if (chrome.runtime.lastError) reject(new Error(chrome.runtime.lastError.message));
        else resolve(response);
      });
    }));
    assert.strictEqual(status.running, false, "service worker message bridge should respond");
    console.log(`Chromium extension smoke test passed (${loadState.loadedTools.length} lazy-loaded tools).`);
  } finally {
    await context.close();
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
