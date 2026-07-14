#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

const extensionRoot = path.resolve(process.argv[2] || "dist/store");
const output = path.resolve(process.argv[3] || "store-assets/search-and-usage-1280x800.png");

function unpackedExtensionId(root) {
  const digest = crypto.createHash("sha256").update(fs.realpathSync(root)).digest().subarray(0, 16);
  return [...digest].flatMap((byte) => [byte >> 4, byte & 15])
    .map((nibble) => String.fromCharCode("a".charCodeAt(0) + nibble)).join("");
}

(async () => {
  if (!fs.existsSync(path.join(extensionRoot, "manifest.json"))) {
    throw new Error(`Store extension directory is missing: ${extensionRoot}`);
  }
  const context = await chromium.launchPersistentContext("", {
    headless: false,
    viewport: { width: 1280, height: 800 },
    args: [`--disable-extensions-except=${extensionRoot}`, `--load-extension=${extensionRoot}`],
  });
  try {
    const page = await context.newPage();
    await page.goto(`chrome-extension://${unpackedExtensionId(extensionRoot)}/popup.html`);
    await page.evaluate(() => chrome.storage.local.set({ onboarded: true }));
    await page.reload();
    await page.waitForSelector("#main .empty-welcome");
    await page.fill("#search", "恢复会话");
    await page.waitForSelector("#main .entry-wrap");
    const usage = page.locator("#main [data-usage]").first();
    if (await usage.count()) await usage.click();
    await page.addStyleTag({ content: `
      html { width: 1280px !important; height: 800px !important; display: flex; align-items: center; justify-content: center;
        background: radial-gradient(circle at 20% 10%, #29364a 0, #111827 45%, #080d15 100%); }
      body { flex: none; width: 460px !important; height: 600px !important; border: 1px solid #344155;
        border-radius: 14px; box-shadow: 0 30px 80px rgba(0,0,0,.5); overflow: hidden; }
    ` });
    fs.mkdirSync(path.dirname(output), { recursive: true });
    await page.screenshot({ path: output, fullPage: false });
    console.log(`Created Chrome Web Store screenshot: ${output}`);
  } finally {
    await context.close();
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
