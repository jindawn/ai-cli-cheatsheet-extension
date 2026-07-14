#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const fs = require("fs");

const args = process.argv.slice(2);
const valueFor = (flag) => {
  const index = args.indexOf(flag);
  return index >= 0 ? args[index + 1] : undefined;
};
const packagePath = valueFor("--package");
const publisherId = valueFor("--publisher-id") || process.env.CWS_PUBLISHER_ID;
const extensionId = valueFor("--extension-id") || process.env.CWS_EXTENSION_ID;
const expectedVersion = valueFor("--version");

if (!packagePath || !publisherId || !extensionId || !expectedVersion) {
  console.error("Usage: node tools/publish-chrome-store.js --package <zip> --publisher-id <id> --extension-id <id> --version <version>");
  process.exit(2);
}

const base64url = (value) => Buffer.from(value).toString("base64url");

async function serviceAccountToken(credentialsText) {
  const credentials = JSON.parse(credentialsText);
  if (!credentials.client_email || !credentials.private_key) throw new Error("Service account credentials are incomplete");
  const now = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = base64url(JSON.stringify({
    iss: credentials.client_email,
    scope: "https://www.googleapis.com/auth/chromewebstore",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  }));
  const unsigned = `${header}.${claims}`;
  const signature = crypto.sign("RSA-SHA256", Buffer.from(unsigned), credentials.private_key).toString("base64url");
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: `${unsigned}.${signature}`,
    }),
  });
  const payload = await response.json();
  if (!response.ok || !payload.access_token) throw new Error(`Service account authentication failed: ${payload.error_description || response.status}`);
  return payload.access_token;
}

async function jsonRequest(url, token, options = {}) {
  const response = await fetch(url, {
    ...options,
    headers: { Authorization: `Bearer ${token}`, ...(options.headers || {}) },
  });
  const text = await response.text();
  let payload = {};
  try { payload = text ? JSON.parse(text) : {}; } catch (_error) { payload = { raw: text.slice(0, 500) }; }
  if (!response.ok) {
    const detail = payload.error?.message || payload.raw || `HTTP ${response.status}`;
    throw new Error(`Chrome Web Store API request failed: ${detail}`);
  }
  return payload;
}

const delay = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

async function main() {
  const credentials = process.env.CWS_SERVICE_ACCOUNT_JSON;
  const token = process.env.CWS_ACCESS_TOKEN || (credentials && await serviceAccountToken(credentials));
  if (!token) throw new Error("CWS_SERVICE_ACCOUNT_JSON or CWS_ACCESS_TOKEN is required");
  if (!fs.existsSync(packagePath)) throw new Error(`Store package does not exist: ${packagePath}`);

  const itemName = `publishers/${encodeURIComponent(publisherId)}/items/${encodeURIComponent(extensionId)}`;
  const upload = await jsonRequest(`https://chromewebstore.googleapis.com/upload/v2/${itemName}:upload`, token, {
    method: "POST",
    headers: { "Content-Type": "application/zip" },
    body: fs.readFileSync(packagePath),
  });
  if (upload.crxVersion && upload.crxVersion !== expectedVersion) {
    throw new Error(`Uploaded CRX version ${upload.crxVersion} does not match ${expectedVersion}`);
  }

  let uploadState = upload.uploadState;
  for (let attempt = 0; uploadState === "UPLOAD_IN_PROGRESS" && attempt < 24; attempt += 1) {
    await delay(5000);
    const status = await jsonRequest(`https://chromewebstore.googleapis.com/v2/${itemName}:fetchStatus`, token);
    uploadState = status.lastAsyncUploadState || uploadState;
  }
  if (uploadState !== "UPLOAD_SUCCESS") throw new Error(`Chrome Web Store upload did not succeed: ${uploadState || "unknown state"}`);

  const submission = await jsonRequest(`https://chromewebstore.googleapis.com/v2/${itemName}:publish`, token, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ publishType: "STAGED_PUBLISH", blockOnWarnings: true, skipReview: false }),
  });
  console.log(`Chrome Web Store v${expectedVersion} submitted for staged review (${submission.state || "state pending"}).`);
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
