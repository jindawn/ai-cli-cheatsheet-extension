#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const fs = require("fs");
const os = require("os");
const path = require("path");
const { spawnSync } = require("child_process");
const { auditReleasePath } = require("./audit-release-secrets");

const root = path.resolve(__dirname, "..");
const args = process.argv.slice(2);
const valueFor = (flag) => {
  const index = args.indexOf(flag);
  return index >= 0 ? args[index + 1] : undefined;
};
const inputArg = valueFor("--input");
const outputArg = valueFor("--output");
const checksumArg = valueFor("--checksum");

if (!inputArg || !outputArg) {
  console.error("Usage: node tools/create-extension-archive.js --input <directory> --output <zip> [--checksum <file>]");
  process.exit(2);
}

function insideRepository(candidate) {
  return candidate.startsWith(`${root}${path.sep}`) && candidate !== root;
}

const input = path.resolve(root, inputArg);
const output = path.resolve(root, outputArg);
const checksumOutput = checksumArg ? path.resolve(root, checksumArg) : null;
if (!insideRepository(input) || !insideRepository(output)
  || (checksumOutput && !insideRepository(checksumOutput))) {
  throw new Error("Archive input and outputs must be inside the repository");
}
if (!fs.statSync(input).isDirectory()) throw new Error(`Archive input is not a directory: ${inputArg}`);

auditReleasePath(input);

function sortedEntries(directory, prefix = "") {
  return fs.readdirSync(directory, { withFileTypes: true })
    .sort((left, right) => left.name.localeCompare(right.name, "en"))
    .flatMap((entry) => {
      const relative = prefix ? `${prefix}/${entry.name}` : entry.name;
      if (entry.isDirectory()) {
        return sortedEntries(path.join(directory, entry.name), relative);
      }
      return [relative];
    });
}

const stagingParent = fs.mkdtempSync(path.join(os.tmpdir(), "aicli-extension-archive-"));
const staging = path.join(stagingParent, "payload");
const fixedTime = new Date("1980-01-01T00:00:00.000Z");

try {
  fs.mkdirSync(staging);
  for (const entry of fs.readdirSync(input)) {
    fs.cpSync(path.join(input, entry), path.join(staging, entry), {
      recursive: true,
      dereference: false,
      preserveTimestamps: false,
    });
  }
  const files = sortedEntries(staging);
  for (const relative of files) {
    const target = path.join(staging, relative);
    const stat = fs.lstatSync(target);
    if (!stat.isSymbolicLink()) {
      fs.chmodSync(target, stat.mode & 0o111 ? 0o755 : 0o644);
      fs.utimesSync(target, fixedTime, fixedTime);
    }
  }
  fs.mkdirSync(path.dirname(output), { recursive: true });
  fs.rmSync(output, { force: true });
  const result = spawnSync("zip", ["-X", "-y", "-q", output, ...files], {
    cwd: staging,
    env: { ...process.env, TZ: "UTC" },
    encoding: "utf8",
  });
  if (result.status !== 0) throw new Error(result.stderr || result.stdout || "zip failed");
  const digest = crypto.createHash("sha256").update(fs.readFileSync(output)).digest("hex");
  if (checksumOutput) {
    fs.mkdirSync(path.dirname(checksumOutput), { recursive: true });
    fs.writeFileSync(checksumOutput, `${digest}  ${path.basename(output)}\n`);
  }
  console.log(`${digest}  ${path.relative(root, output)}`);
} finally {
  fs.rmSync(stagingParent, { recursive: true, force: true });
}
