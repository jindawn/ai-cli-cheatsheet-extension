#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const SENSITIVE_FILENAMES = [
  /(^|\/)[^/]*\.env(?:\.|$)/i,
  /(^|\/)credentials?(?:\.|$)/i,
  /(^|\/)(?:id_rsa|id_ed25519)$/i,
  /\.(?:pem|key|p12|pfx|jks|keystore)$/i,
  /(^|\/)(?:\.npmrc|\.pypirc|\.netrc)$/i,
];

const SECRET_SIGNATURES = [
  ["private key", /-----BEGIN (?:RSA |EC |OPENSSH |DSA )?PRIVATE KEY-----/],
  ["AWS access key", /\b(?:AKIA|ASIA)[0-9A-Z]{16}\b/],
  ["Google API key", /\bAIza[0-9A-Za-z_-]{35}\b/],
  ["GitHub token", /\b(?:gh[pousr]_[A-Za-z0-9_]{30,}|github_pat_[A-Za-z0-9_]{20,})\b/],
  ["OpenAI/Anthropic-style key", /\bsk-(?:ant-|proj-)?[A-Za-z0-9_-]{20,}\b/],
  ["Slack token", /\bxox[baprs]-[A-Za-z0-9-]{10,}\b/],
  ["JWT", /\beyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\b/],
  ["service-account private key", /"private_key"\s*:\s*"-----BEGIN/],
  ["assigned credential", /\b(?:api[_-]?key|auth[_-]?token|access[_-]?token|client[_-]?secret|password)\s*[=:]\s*["']?(?![<$%]|your-|example|sample|dummy|test|fake|redacted|x{4})[A-Za-z0-9_./+=-]{20,}/i],
];

function walk(root, relative = "") {
  const current = path.join(root, relative);
  const stat = fs.lstatSync(current);
  if (stat.isSymbolicLink()) throw new Error(`Release contains a symbolic link: ${relative || "."}`);
  if (stat.isFile()) return [relative];
  if (!stat.isDirectory()) return [];
  return fs.readdirSync(current).sort().flatMap((name) => walk(root, path.join(relative, name)));
}

function auditReleasePath(root) {
  const absoluteRoot = path.resolve(root);
  if (!fs.existsSync(absoluteRoot) || !fs.statSync(absoluteRoot).isDirectory()) {
    throw new Error(`Release directory does not exist: ${root}`);
  }
  const findings = [];
  for (const relative of walk(absoluteRoot)) {
    const normalized = relative.split(path.sep).join("/");
    if (SENSITIVE_FILENAMES.some((pattern) => pattern.test(normalized))) {
      findings.push(`${normalized}: sensitive filename`);
      continue;
    }
    const buffer = fs.readFileSync(path.join(absoluteRoot, relative));
    if (buffer.includes(0)) continue;
    const content = buffer.toString("utf8");
    for (const [label, pattern] of SECRET_SIGNATURES) {
      if (pattern.test(content)) findings.push(`${normalized}: ${label}`);
    }
  }
  if (findings.length) {
    throw new Error(`Release secret audit failed:\n${findings.join("\n")}`);
  }
  return { files: walk(absoluteRoot).length };
}

if (require.main === module) {
  const target = process.argv[2];
  if (!target) {
    console.error("Usage: node tools/audit-release-secrets.js <release-directory>");
    process.exit(2);
  }
  try {
    const result = auditReleasePath(target);
    console.log(`Release secret audit passed for ${result.files} files.`);
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}

module.exports = { auditReleasePath };
