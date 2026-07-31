#!/usr/bin/env node
"use strict";

const fs = require("fs");

const STORE_EXTENSION_ID = "jdiopjiebnamikpcknmnpahhlokccgjj";
const INSTALLER_STATES = new Set(["signed", "unsigned"]);

function resolveChromeStoreConfig(env = process.env) {
  const installerState = String(env.INSTALLER_STATE || "");
  if (!INSTALLER_STATES.has(installerState)) {
    throw new Error("No verified bridge installer set is available for the store release.");
  }

  const manualUpload = String(env.CWS_MANUAL_UPLOAD || "");
  if (manualUpload === "true") {
    return { enabled: false, mode: "manual" };
  }
  if (manualUpload !== "" && manualUpload !== "false") {
    throw new Error("CWS_MANUAL_UPLOAD must be either true or false.");
  }

  if (!String(env.CWS_PUBLISHER_ID || "")) {
    throw new Error("CWS_PUBLISHER_ID is required for automatic publishing.");
  }
  if (env.CWS_EXTENSION_ID !== STORE_EXTENSION_ID) {
    throw new Error("CWS_EXTENSION_ID must match the production extension ID.");
  }
  if (!String(env.CWS_SERVICE_ACCOUNT_JSON || "")) {
    throw new Error("CWS_SERVICE_ACCOUNT_JSON is required for automatic publishing.");
  }
  return { enabled: true, mode: "automatic" };
}

function main() {
  const config = resolveChromeStoreConfig();
  if (!process.env.GITHUB_OUTPUT) {
    throw new Error("GITHUB_OUTPUT is required.");
  }
  fs.appendFileSync(process.env.GITHUB_OUTPUT, `enabled=${config.enabled}\n`);
  console.log(config.mode === "manual"
    ? "Chrome Web Store submission is disabled; the verified ZIP will be uploaded manually."
    : "Chrome Web Store automatic publishing is enabled.");
}

if (require.main === module) {
  try {
    main();
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}

module.exports = { resolveChromeStoreConfig };
