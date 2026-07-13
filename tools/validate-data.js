#!/usr/bin/env node
"use strict";

const fs = require("fs");
const crypto = require("crypto");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const dataDir = path.join(root, "data");

const rules = require(path.join(root, "shared", "validation-rules.json"));
const sourceRegistry = require(path.join(root, "shared", "source-registry.json"));
const qualityCore = require(path.join(root, "quality-core.js"));
const { min: MIN_KEYWORDS, max: MAX_KEYWORDS } = rules.keywords;
const MAX_EXAMPLES = rules.examples.max;
const DANGEROUS_EXAMPLE_RE = new RegExp(rules.dangerousExample.source, rules.dangerousExample.flags);
const POSSIBLE_SECRET_RE = new RegExp(rules.possibleSecret.source, rules.possibleSecret.flags);
const SOURCE_TIERS = rules.sourceTiers;
const SOURCE_KINDS = rules.sourceKinds;
const AUTHORSHIPS = rules.authorships;
const EVIDENCE_TIERS = rules.evidenceTiers;
const ADAPTATIONS = rules.adaptations;
const EVIDENCE_STATUSES = rules.evidenceStatuses;
const EVIDENCE_CLAIMS = rules.evidenceClaims;
const GROUNDING_CLAIMS = rules.groundingClaims;
const EXAMPLE_SOURCE_TYPES = rules.exampleSourceTypes;
const SHELL_LAYERS = rules.shell.layers;
const SHELL_PORTABILITIES = rules.shell.portabilities;
const SHELL_TOPICS = rules.shell.topics;
const REGISTRY_BY_ID = new Map(sourceRegistry.entries.map((entry) => [entry.id, entry]));
const EXAMPLE_UI_TEXT_FIELDS = ["description", "scenario", "goal", "expected", "prerequisites", "caveat", "warning"];
const SCENARIO_REQUIRED_FIELDS = rules.scenarioQuality.requiredFields;
const FORBIDDEN_SCENARIO_PHRASES = rules.scenarioQuality.forbiddenPhrases;
const SCENARIO_PLACEHOLDER_RE = new RegExp(rules.scenarioQuality.placeholderPattern);

const context = { window: {} };
vm.createContext(context);

function fail(message) {
  throw new Error(message);
}

function containsCjk(value) {
  return /[\u3400-\u9fff]/.test(String(value || ""));
}

// 类官方来源（tier / sourceType = quasi-official）的 sourceUrl 主机名必须命中白名单，
// 防止把任意第三方页面冒充成可信参考。空 URL 由各调用点单独处理。
function hostInQuasiOfficialWhitelist(url) {
  return sourceRegistry.entries.some((entry) =>
    entry.kind === "authoritative-reference" && matchesPrefix(url, entry.urlPrefixes)
  );
}

function matchesPrefix(url, prefixes) {
  return typeof url === "string"
    && prefixes.some((prefix) => url === prefix.replace(/\/$/, "") || url.startsWith(prefix));
}

function sameSourceHost(left, right) {
  try {
    return new URL(left).hostname.replace(/^www\./, "") === new URL(right).hostname.replace(/^www\./, "");
  } catch {
    return false;
  }
}

function matchesRegisteredSource(toolId, source) {
  if (toolId === "shell" && source.kind === "local-help") return true;
  const entry = REGISTRY_BY_ID.get(source.registryId || source.id);
  return Boolean(
    entry
    && entry.kind === source.kind
    && entry.toolIds.includes(toolId)
    && (source.kind === "local-help" || matchesPrefix(source.url, entry.urlPrefixes))
  );
}

function evidenceStatusFor(refs) {
  if (!refs?.length) return "unverified";
  const claims = new Set(refs.flatMap((ref) => ref.claims));
  return claims.has("existence") && claims.has("semantics") ? "verified" : "partial";
}

// 危险/密钥扫描必须同时覆盖 value 与 platformValues 的每个平台值（与 host.py 同步）。
function dangerousExampleTexts(example) {
  const platformValues = example.platformValues && typeof example.platformValues === "object" && !Array.isArray(example.platformValues)
    ? Object.values(example.platformValues)
    : [];
  return [example.value, ...platformValues].filter((text) => typeof text === "string");
}

// 信息级统计：示例标 first-party 但命令本身 unverified（示例徽章高于命令核验状态）。
// 不 fail——这是数据补全（补 evidenceRefs）的进度指标，随证据补全逐步归零。
const firstPartyOnUnverified = new Map();

for (const entry of sourceRegistry.entries || []) {
  if (!entry.id || !Array.isArray(entry.urlPrefixes) || !entry.urlPrefixes.length
    || !entry.title || !/^https:\/\/\S+$/.test(entry.canonicalUrl || "")
    || !SOURCE_KINDS.includes(entry.kind)
    || !entry.maintainer || !Array.isArray(entry.toolIds) || !entry.toolIds.length
    || !Array.isArray(entry.purposes) || !entry.purposes.length
    || !EVIDENCE_TIERS.includes(entry.evidenceTier)
    || !/^\d{4}-\d{2}-\d{2}$/.test(entry.lastVerifiedAt || "")) {
    fail(`source registry entry invalid: ${entry.id || "(missing id)"}`);
  }
  for (const prefix of entry.urlPrefixes) {
    if (!/^https:\/\/\S+$/.test(prefix)) fail(`source registry URL invalid: ${prefix}`);
  }
}
if (sourceRegistry.entries.some((entry) =>
  entry.urlPrefixes.some((prefix) => /^https:\/\/(?:[^/]+\.)?readthedocs\.io\/?$/.test(prefix))
)) fail("source registry must not trust the whole readthedocs.io hosting domain");

vm.runInContext(fs.readFileSync(path.join(dataDir, "index.js"), "utf8"), context, {
  filename: "data/index.js",
});

const popupHtml = fs.readFileSync(path.join(root, "popup.html"), "utf8");
if (!popupHtml.includes('<script src="data/index.js"></script>')) {
  fail("popup.html must load data/index.js");
}
if (/<script src="data\/(?!index\.js)[^"]+\.js"><\/script>/.test(popupHtml)) {
  fail("popup.html must not contain direct tool data script tags");
}

const files = context.window.CHEATSHEET_FILES;
if (!Array.isArray(files) || files.length === 0) fail("data/index.js must define a non-empty array");
if (new Set(files).size !== files.length) fail("data/index.js contains duplicate tool IDs");

const diskIds = fs.readdirSync(dataDir)
  .filter((name) => name.endsWith(".js") && name !== "index.js")
  .map((name) => name.slice(0, -3))
  .sort();
const indexIds = [...files].sort();
if (JSON.stringify(diskIds) !== JSON.stringify(indexIds)) {
  fail(`data/index.js mismatch: disk=${diskIds.join(",")} index=${indexIds.join(",")}`);
}

for (const id of files) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id)) fail(`invalid tool ID: ${id}`);
  if (id === "index") fail("index is a reserved tool ID");
  const filename = path.join(dataDir, `${id}.js`);
  vm.runInContext(fs.readFileSync(filename, "utf8"), context, { filename });
}

const data = context.window.CHEATSHEET_DATA || {};
const inventoryDir = path.join(root, "shared", "official-inventories");
const officialInventories = new Map();
if (fs.existsSync(inventoryDir)) {
  for (const name of fs.readdirSync(inventoryDir).filter((value) => value.endsWith(".json"))) {
    const inventory = JSON.parse(fs.readFileSync(path.join(inventoryDir, name), "utf8"));
    officialInventories.set(name.slice(0, -5), inventory);
  }
}
const reviewDir = path.join(root, "shared", "scenario-reviews");
const scenarioReviews = new Map();
if (fs.existsSync(reviewDir)) {
  for (const name of fs.readdirSync(reviewDir).filter((value) => value.endsWith(".json"))) {
    scenarioReviews.set(name.slice(0, -5), JSON.parse(fs.readFileSync(path.join(reviewDir, name), "utf8")));
  }
}

function exampleContentHash(itemId, exampleIndex, example) {
  const clean = Object.fromEntries(Object.entries(example).filter(([key]) => key !== "review"));
  return `sha256:${crypto.createHash("sha256").update(JSON.stringify({
    itemId,
    index: exampleIndex,
    example: clean,
  })).digest("hex")}`;
}
vm.runInContext(fs.readFileSync(path.join(root, "product-core.js"), "utf8"), context, { filename: "product-core.js" });
// All searchable content is now materialized in data/*.js. Sidecar
// enrichments remain readable for migration history, but can no longer hide a
// missing example or bypass the global official/scenario contract.
const enrichmentByItem = new WeakMap();

for (const id of files) {
  const tool = data[id];
  if (!tool || typeof tool !== "object") fail(`${id}: missing dataset`);
  if (tool.meta?.id !== id) fail(`${id}: meta.id must match filename`);
  for (const field of ["name", "source"]) {
    if (typeof tool.meta?.[field] !== "string" || !tool.meta[field].trim()) {
      fail(`${id}: invalid meta.${field}`);
    }
  }
  if (typeof tool.meta.coverage !== "string" || !tool.meta.coverage.trim()
    || /核心命令|常用子集|尽量完整/.test(tool.meta.coverage)) {
    fail(`${id}: meta.coverage must declare the exact official inventory scope`);
  }
  if (!/^#[0-9a-fA-F]{6}$/.test(tool.meta?.color || "")) fail(`${id}: invalid color`);
  if (tool.meta.sourceUrl !== undefined && !/^https:\/\/\S+$/.test(tool.meta.sourceUrl)) {
    fail(`${id}: invalid sourceUrl`);
  }
  if (tool.meta.updatedAt !== undefined && !/^\d{4}-\d{2}-\d{2}$/.test(tool.meta.updatedAt)) {
    fail(`${id}: invalid updatedAt`);
  }
  if (!["version-driven", "release-driven", "manual-only"].includes(tool.meta.updatePolicy)) {
    fail(`${id}: invalid updatePolicy`);
  }
  for (const field of ["contentCheckedAt", "sourceCheckedAt"]) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(tool.meta[field] || "")) {
      fail(`${id}: invalid ${field}`);
    }
  }
  if (tool.meta.verifiedVersion !== undefined
    && (typeof tool.meta.verifiedVersion !== "string" || !tool.meta.verifiedVersion.trim())) {
    fail(`${id}: invalid verifiedVersion`);
  }
  if (tool.meta.verificationStatus !== undefined
    && !["web-assisted", "model-knowledge", "manual"].includes(tool.meta.verificationStatus)) {
    fail(`${id}: invalid verificationStatus`);
  }
  const officialCoverage = tool.meta.officialCoverage;
  if (officialCoverage !== undefined) {
    if (!officialCoverage || typeof officialCoverage !== "object"
      || officialCoverage.scope !== rules.officialCoverageScope
      || !rules.officialCoverageStatuses.includes(officialCoverage.status)
      || !Number.isInteger(officialCoverage.total) || officialCoverage.total < 0
      || !Number.isInteger(officialCoverage.covered) || officialCoverage.covered < 0
      || officialCoverage.covered > officialCoverage.total
      || !Array.isArray(officialCoverage.sourceIds) || !officialCoverage.sourceIds.length) {
      fail(`${id}: invalid officialCoverage`);
    }
    if (officialCoverage.status === "complete") {
      if (officialCoverage.covered !== officialCoverage.total
        || !/^\d{4}-\d{2}-\d{2}$/.test(officialCoverage.checkedAt || "")
        || !/^sha256:[a-f0-9]{64}$/.test(officialCoverage.inventoryHash || "")) {
        fail(`${id}: complete officialCoverage is inconsistent`);
      }
    }
  } else fail(`${id}: officialCoverage is required`);
  if (officialCoverage.status !== "complete") fail(`${id}: officialCoverage must be complete`);
  if (tool.meta.builtIn === true && tool.meta.verificationStatus !== "manual") {
    fail(`${id}: built-in dataset must declare manual maintenance`);
  }
  if (tool.meta.sourceTier !== undefined) {
    if (!SOURCE_TIERS.includes(tool.meta.sourceTier)) fail(`${id}: invalid sourceTier`);
    if (tool.meta.sourceTier === "quasi-official"
      && !hostInQuasiOfficialWhitelist(tool.meta.sourceUrl || "")) {
      fail(`${id}: quasi-official sourceTier requires a whitelisted sourceUrl host`);
    }
  }
  const sourceIds = new Set();
  const usedSourceIds = new Set();
  if (tool.meta.sources !== undefined) {
    if (!Array.isArray(tool.meta.sources) || !tool.meta.sources.length) fail(`${id}: invalid sources`);
    for (const [sourceIndex, source] of tool.meta.sources.entries()) {
      if (!source || typeof source !== "object" || Array.isArray(source)) fail(`${id}: invalid source ${sourceIndex}`);
      if (!/^[a-zA-Z0-9_-]{2,64}$/.test(source.id || "") || sourceIds.has(source.id)) {
        fail(`${id}: invalid or duplicate source id ${source.id}`);
      }
      sourceIds.add(source.id);
      if (!SOURCE_KINDS.includes(source.kind)) fail(`${id}: invalid source kind ${source.kind}`);
      if (!EVIDENCE_TIERS.includes(source.evidenceTier) || source.evidenceTier === "none") {
        fail(`${id}: invalid source evidence tier`);
      }
      if (source.kind !== "local-help" && !/^https:\/\/\S+$/.test(source.url || "")) {
        fail(`${id}: source URL required`);
      }
      if (!matchesRegisteredSource(id, source)) fail(`${id}: source ${source.id} is not registered for this tool`);
      if (!Array.isArray(source.purposes) || !source.purposes.length) fail(`${id}: source purposes required`);
      if (!source.title || !source.maintainer) fail(`${id}: source title and maintainer required`);
      if (source.kind !== "local-help" && (
        !/^https:\/\/\S+$/.test(source.resolvedUrl || "")
        || typeof source.pageTitle !== "string" || !source.pageTitle.trim()
        || !/^\d{4}-\d{2}-\d{2}$/.test(source.checkedAt || "")
      )) fail(`${id}: source ${source.id} requires resolvedUrl, pageTitle and checkedAt`);
      if (source.url && source.resolvedUrl && !source.resolvedUrl.startsWith(source.url.replace(/\/$/, ""))) {
        fail(`${id}: source ${source.id} resolvedUrl is outside declared URL`);
      }
    }
  } else fail(`${id}: meta.sources required`);
  for (const sourceId of officialCoverage.sourceIds) usedSourceIds.add(sourceId);
  const sourceById = new Map(tool.meta.sources.map((source) => [source.id, source]));
  if (tool.meta.references !== undefined) {
    if (!Array.isArray(tool.meta.references)) fail(`${id}: invalid references`);
    for (const reference of tool.meta.references) {
      if (!matchesRegisteredSource(id, reference)) fail(`${id}: invalid background reference ${reference.id}`);
      if (sourceIds.has(reference.id)) fail(`${id}: reference ${reference.id} duplicates an evidence source`);
      if (!/^https:\/\/\S+$/.test(reference.resolvedUrl || "")
        || typeof reference.pageTitle !== "string" || !reference.pageTitle.trim()
        || !/^\d{4}-\d{2}-\d{2}$/.test(reference.checkedAt || "")) {
        fail(`${id}: background reference ${reference.id} lacks URL verification metadata`);
      }
    }
  }
  if (tool.meta.platforms !== undefined && (
    !Array.isArray(tool.meta.platforms)
    || tool.meta.platforms.some((platform) => !["mac", "windows", "linux"].includes(platform))
  )) fail(`${id}: invalid platforms`);
  if (!Array.isArray(tool.items) || tool.items.length === 0) fail(`${id}: items must not be empty`);

  const duplicateKeys = new Set();
  const itemIds = new Set();
  tool.items.forEach((item, index) => {
    if (!["shortcut", "slash", "flag"].includes(item.cat)) fail(`${id}[${index}]: invalid cat`);
    for (const field of ["cmd", "en", "zh"]) {
      if (typeof item[field] !== "string" || !item[field].trim()) {
        fail(`${id}[${index}]: invalid ${field}`);
      }
    }
    if (item.context !== undefined && (typeof item.context !== "string" || !item.context.trim())) {
      fail(`${id}[${index}]: invalid context`);
    }
    if (item.aliases !== undefined && (
      !Array.isArray(item.aliases) || !item.aliases.length
      || item.aliases.some((alias) => typeof alias !== "string" || !alias.trim())
      || new Set(item.aliases.map((alias) => alias.toLocaleLowerCase())).size !== item.aliases.length
      || item.aliases.some((alias) => alias.toLocaleLowerCase() === item.cmd.toLocaleLowerCase())
    )) fail(`${id}[${index}]: invalid aliases`);
    if (item.shell !== undefined) {
      if (id !== "shell") fail(`${id}[${index}]: shell metadata is only allowed for shell`);
      if (!item.shell || typeof item.shell !== "object" || Array.isArray(item.shell)) {
        fail(`${id}[${index}]: invalid shell metadata`);
      }
      if (!SHELL_LAYERS.includes(item.shell.layer)) fail(`${id}[${index}]: invalid shell.layer`);
      if (typeof item.shell.family !== "string" || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(item.shell.family)) {
        fail(`${id}[${index}]: invalid shell.family`);
      }
      if (!SHELL_PORTABILITIES.includes(item.shell.portability)) fail(`${id}[${index}]: invalid shell.portability`);
      if (!SHELL_TOPICS.includes(item.shell.topic)) fail(`${id}[${index}]: invalid shell.topic`);
    } else if (id === "shell") {
      fail(`${id}[${index}]: shell metadata required`);
    }
    if (typeof item.id !== "string" || !/^[a-zA-Z0-9_-]{4,64}$/.test(item.id)) {
      fail(`${id}[${index}]: stable id required`);
    }
    if (item.evidenceRefs !== undefined && (
      !Array.isArray(item.evidenceRefs) || !item.evidenceRefs.length
    )) fail(`${id}[${index}]: invalid evidenceRefs`);
    for (const [refIndex, ref] of (item.evidenceRefs || []).entries()) {
      if (!ref || typeof ref !== "object" || !sourceIds.has(ref.sourceId)
        || !Array.isArray(ref.claims) || !ref.claims.length
        || ref.claims.some((claim) => !EVIDENCE_CLAIMS.includes(claim))
        || typeof ref.locator !== "string" || !ref.locator.trim()
        || !/^\d{4}-\d{2}-\d{2}$/.test(ref.checkedAt || "")) {
        fail(`${id}[${index}].evidenceRefs[${refIndex}]: invalid evidence reference`);
      }
      usedSourceIds.add(ref.sourceId);
      const source = tool.meta.sources.find((candidate) => candidate.id === ref.sourceId);
      if (source.evidenceTier === "community"
        && ref.claims.some((claim) => ["existence", "semantics"].includes(claim))) {
        fail(`${id}[${index}].evidenceRefs[${refIndex}]: community evidence cannot prove command semantics`);
      }
    }
    const derivedStatus = evidenceStatusFor(item.evidenceRefs);
    if (!EVIDENCE_STATUSES.includes(item.evidenceStatus) || item.evidenceStatus !== derivedStatus) {
      fail(`${id}[${index}]: evidenceStatus must be derived as ${derivedStatus}`);
    }
    // 有效 keywords/examples = 条目自带 优先，否则回退到 curated 富化（旁路表，不改写数据）。
    const enrichment = enrichmentByItem.get(item) || {};
    const keywords = item.keywords ?? enrichment.keywords;
    const examples = item.examples ?? enrichment.examples;
    if (keywords !== undefined) {
      if (!Array.isArray(keywords) || keywords.length < MIN_KEYWORDS || keywords.length > MAX_KEYWORDS
        || keywords.some((keyword) => typeof keyword !== "string" || !keyword.trim())) {
        fail(`${id}[${index}]: invalid keywords`);
      }
    } else fail(`${id}[${index}]: keywords required`);
    if (examples !== undefined) {
      if (!Array.isArray(examples) || examples.length === 0 || examples.length > MAX_EXAMPLES) {
        fail(`${id}[${index}]: invalid examples`);
      }
      examples.forEach((example, exampleIndex) => {
        if (!example || typeof example !== "object" || Array.isArray(example)
          || typeof example.value !== "string" || !example.value.trim()
          || typeof example.description !== "string" || !example.description.trim()) {
          fail(`${id}[${index}].examples[${exampleIndex}]: invalid example`);
        }
        if (example.copyable !== undefined && typeof example.copyable !== "boolean") {
          fail(`${id}[${index}].examples[${exampleIndex}]: invalid copyable`);
        }
        if (!EXAMPLE_SOURCE_TYPES.includes(example.sourceType)) {
          fail(`${id}[${index}].examples[${exampleIndex}]: invalid sourceType`);
        }
        if (example.sourceUrl !== undefined && !/^https:\/\/\S+$/.test(example.sourceUrl)) {
          fail(`${id}[${index}].examples[${exampleIndex}]: invalid sourceUrl`);
        }
        if (example.sourceType === "quasi-official" && example.sourceUrl
          && !hostInQuasiOfficialWhitelist(example.sourceUrl)) {
          fail(`${id}[${index}].examples[${exampleIndex}]: quasi-official sourceType requires a whitelisted sourceUrl host`);
        }
        if (example.sourceType === "official" && example.sourceUrl
          && !sameSourceHost(example.sourceUrl, tool.meta.sourceUrl)
          && !sourceRegistry.entries.some((entry) =>
            entry.evidenceTier === "first-party"
            && entry.toolIds.includes(id)
            && matchesPrefix(example.sourceUrl, entry.urlPrefixes)
          )) {
          fail(`${id}[${index}].examples[${exampleIndex}]: official source must be first-party`);
        }
        if (!AUTHORSHIPS.includes(example.authorship)) {
          fail(`${id}[${index}].examples[${exampleIndex}]: invalid authorship`);
        }
        if (!EVIDENCE_TIERS.includes(example.evidenceTier)) {
          fail(`${id}[${index}].examples[${exampleIndex}]: invalid evidenceTier`);
        }
        if (!ADAPTATIONS.includes(example.adaptation)) {
          fail(`${id}[${index}].examples[${exampleIndex}]: invalid adaptation`);
        }
        if (example.sourceIds !== undefined && (
          !Array.isArray(example.sourceIds)
          || !example.sourceIds.length
          || example.sourceIds.some((sourceId) => !sourceIds.has(sourceId))
        )) fail(`${id}[${index}].examples[${exampleIndex}]: invalid sourceIds`);
        for (const sourceId of example.sourceIds || []) usedSourceIds.add(sourceId);
        if (["first-party", "authoritative-community", "community"].includes(example.evidenceTier)) {
          if (!example.sourceIds?.length) {
            fail(`${id}[${index}].examples[${exampleIndex}]: evidenced example requires sourceIds`);
          }
          const referencedTiers = new Set(
            example.sourceIds.map((sourceId) => sourceById.get(sourceId)?.evidenceTier)
          );
          if (!referencedTiers.has(example.evidenceTier)) {
            fail(`${id}[${index}].examples[${exampleIndex}]: evidenceTier does not match sourceIds`);
          }
        }
        if (example.authorship === "official" && (
          example.adaptation !== "verbatim"
          || example.evidenceTier !== "first-party"
          || !example.sourceIds?.length
          || !example.sourceUrl
        )) {
          fail(`${id}[${index}].examples[${exampleIndex}]: official example needs verbatim first-party evidence and a precise URL`);
        }
        if (example.warning !== undefined && (typeof example.warning !== "string" || !example.warning.trim())) {
          fail(`${id}[${index}].examples[${exampleIndex}]: invalid warning`);
        }
        for (const field of SCENARIO_REQUIRED_FIELDS) {
          if (typeof example[field] !== "string" || !example[field].trim()) {
            fail(`${id}[${index}].examples[${exampleIndex}].${field}: scenario field required`);
          }
        }
        const scenarioText = SCENARIO_REQUIRED_FIELDS.map((field) => example[field]).join(" ");
        if (FORBIDDEN_SCENARIO_PHRASES.some((phrase) => scenarioText.includes(phrase))) {
          fail(`${id}[${index}].examples[${exampleIndex}]: generic scenario template is forbidden`);
        }
        if (SCENARIO_PLACEHOLDER_RE.test(example.value)) {
          fail(`${id}[${index}].examples[${exampleIndex}]: example contains an unresolved placeholder`);
        }
        if (!Array.isArray(example.groundingRefs) || !example.groundingRefs.length) {
          fail(`${id}[${index}].examples[${exampleIndex}]: groundingRefs required`);
        }
        for (const [groundingIndex, grounding] of example.groundingRefs.entries()) {
          const source = sourceById.get(grounding?.sourceId);
          if (!source || source.evidenceTier !== "first-party"
            || !Array.isArray(grounding.claims) || !grounding.claims.length
            || grounding.claims.some((claim) => !GROUNDING_CLAIMS.includes(claim))
            || typeof grounding.locator !== "string" || !grounding.locator.trim()) {
            fail(`${id}[${index}].examples[${exampleIndex}].groundingRefs[${groundingIndex}]: invalid first-party grounding`);
          }
          usedSourceIds.add(grounding.sourceId);
        }
        for (const field of EXAMPLE_UI_TEXT_FIELDS) {
          if (example[field] !== undefined && !containsCjk(example[field])) {
            fail(`${id}[${index}].examples[${exampleIndex}].${field}: example UI text must include Chinese`);
          }
        }
        if (example.riskLevels !== undefined && (
          !Array.isArray(example.riskLevels)
          || !example.riskLevels.length
          || example.riskLevels.some((level) =>
            !["deleteOrOverwrite", "permissionChange", "historyRewrite", "safetyBypass", "remoteExecution", "processDisruption"].includes(level))
        )) fail(`${id}[${index}].examples[${exampleIndex}]: invalid riskLevels`);
        if (example.platforms !== undefined && (
          !Array.isArray(example.platforms)
          || !example.platforms.length
          || example.platforms.some((value) => !["mac", "windows", "linux"].includes(value))
        )) fail(`${id}[${index}].examples[${exampleIndex}]: invalid platforms`);
        if (example.platformValues !== undefined) {
          if (!example.platformValues || typeof example.platformValues !== "object"
            || Array.isArray(example.platformValues) || !Object.keys(example.platformValues).length) {
            fail(`${id}[${index}].examples[${exampleIndex}]: invalid platformValues`);
          }
          for (const [examplePlatform, value] of Object.entries(example.platformValues)) {
            if (!["mac", "windows", "linux"].includes(examplePlatform)
              || typeof value !== "string" || !value.trim()) {
              fail(`${id}[${index}].examples[${exampleIndex}]: invalid platformValues.${examplePlatform}`);
            }
          }
        }
        const dangerScanTexts = dangerousExampleTexts(example);
        if (dangerScanTexts.some((text) => DANGEROUS_EXAMPLE_RE.test(text)) && !example.warning) {
          fail(`${id}[${index}].examples[${exampleIndex}]: dangerous example requires warning`);
        }
        if (dangerScanTexts.some((text) => DANGEROUS_EXAMPLE_RE.test(text)) && example.copyable !== false) {
          fail(`${id}[${index}].examples[${exampleIndex}]: dangerous example must not be copyable`);
        }
        if (dangerScanTexts.some((text) => POSSIBLE_SECRET_RE.test(text))) {
          fail(`${id}[${index}].examples[${exampleIndex}]: possible secret`);
        }
        if (example.evidenceTier === "first-party" && item.evidenceStatus === "unverified") {
          firstPartyOnUnverified.set(id, (firstPartyOnUnverified.get(id) || 0) + 1);
        }
      });
    } else fail(`${id}[${index}]: examples required`);
    if (item.platformCmds !== undefined) {
      if (!item.platformCmds || typeof item.platformCmds !== "object" || Array.isArray(item.platformCmds)) {
        fail(`${id}[${index}]: invalid platformCmds`);
      }
      for (const [platform, command] of Object.entries(item.platformCmds)) {
        if (!["mac", "windows", "linux"].includes(platform) || typeof command !== "string" || !command.trim()) {
          fail(`${id}[${index}]: invalid platformCmds.${platform}`);
        }
      }
    }
    const key = [
      item.cat,
      item.cmd.toLowerCase(),
      (item.context || "").toLowerCase(),
      (item.shell?.family || "").toLowerCase(),
      (item.shell?.portability || "").toLowerCase(),
    ].join("\0");
    if (duplicateKeys.has(key)) fail(`${id}: duplicate ${item.cmd}; add distinct context values`);
    duplicateKeys.add(key);
    if (item.id !== undefined) {
      if (!/^[a-zA-Z0-9_-]{4,64}$/.test(item.id)) fail(`${id}[${index}]: invalid id`);
      if (itemIds.has(item.id)) fail(`${id}: duplicate item id ${item.id}`);
      itemIds.add(item.id);
    }
  });

  if (officialCoverage?.status === "complete") {
    const inventory = officialInventories.get(id);
    if (!inventory || !Array.isArray(inventory.entries) || !inventory.entries.length) {
      fail(`${id}: complete coverage requires shared/official-inventories/${id}.json`);
    }
    if (inventory.schemaVersion !== 2 || inventory.toolId !== id
      || inventory.scope !== rules.officialCoverageScope
      || inventory.adapter?.version < 1 || !inventory.adapter?.id || !inventory.adapter?.kind
      || inventory.closure?.status !== "closed"
      || inventory.closure?.entryCount !== inventory.entries.length
      || !Array.isArray(inventory.sourceIds) || !inventory.sourceIds.length) {
      fail(`${id}: official inventory lacks deterministic adapter closure metadata`);
    }
    const serialized = JSON.stringify(inventory.entries);
    const inventoryHash = `sha256:${crypto.createHash("sha256").update(serialized).digest("hex")}`;
    if (inventoryHash !== officialCoverage.inventoryHash) fail(`${id}: official inventory hash mismatch`);
    const available = new Map();
    for (const item of tool.items) {
      for (const command of [item.cmd, ...(item.aliases || [])]) {
        const normalized = `${command.trim().replace(/\s+/g, " ")}\0${(item.context || "").trim().toLocaleLowerCase()}`;
        if (available.has(normalized)) fail(`${id}: duplicate official command, alias and context ${command}`);
        available.set(normalized, item);
      }
    }
    const missing = inventory.entries.filter((entry) => !available.has(
      `${entry.command.trim().replace(/\s+/g, " ")}\0${(entry.context || "").toLocaleLowerCase()}`
    ));
    if (missing.length) fail(`${id}: missing official entries: ${missing.slice(0, 12).map((entry) => entry.command).join(", ")}`);
    const inventoryCommands = new Set(inventory.entries.map((entry) =>
      `${entry.command.trim().replace(/\s+/g, " ")}\0${(entry.context || "").toLocaleLowerCase()}`
    ));
    const extraCommands = tool.items.filter((item) => !inventoryCommands.has(
      `${item.cmd.trim().replace(/\s+/g, " ")}\0${(item.context || "").toLocaleLowerCase()}`
    ));
    if (extraCommands.length) fail(`${id}: entries outside official inventory: ${extraCommands.slice(0, 12).map((item) => item.cmd).join(", ")}`);
    const allowedAliases = new Set(inventory.entries.flatMap((entry) => entry.aliases || []).map((alias) => alias.toLocaleLowerCase()));
    const unknownAliases = tool.items.flatMap((item) => item.aliases || [])
      .filter((alias) => !allowedAliases.has(alias.toLocaleLowerCase()));
    if (unknownAliases.length) fail(`${id}: aliases not present in official inventory: ${unknownAliases.slice(0, 12).join(", ")}`);
    const availableAliases = new Set(tool.items.flatMap((item) => item.aliases || []).map((alias) => alias.toLocaleLowerCase()));
    const missingAliases = [...allowedAliases].filter((alias) => !availableAliases.has(alias));
    if (missingAliases.length) fail(`${id}: official aliases are not searchable: ${missingAliases.slice(0, 12).join(", ")}`);
    if (inventory.entries.length !== officialCoverage.total) fail(`${id}: officialCoverage total does not match inventory`);
  }
  const review = scenarioReviews.get(id);
  if (!review || review.schemaVersion !== 1 || review.toolId !== id
    || review.reviewVersion !== rules.scenarioQuality.reviewVersion
    || review.status !== "passed"
    || review.inventoryHash !== officialCoverage.inventoryHash
    || !Array.isArray(review.examples)) {
    fail(`${id}: valid scenario review snapshot required`);
  }
  const expectedReviewHashes = new Set();
  for (const item of tool.items) {
    for (const [exampleIndex, example] of item.examples.entries()) {
      expectedReviewHashes.add(`${item.id}\0${exampleIndex}\0${exampleContentHash(item.id, exampleIndex, example)}`);
    }
  }
  const actualReviewHashes = new Set(review.examples
    .filter((entry) => entry.status === "passed")
    .map((entry) => `${entry.itemId}\0${entry.exampleIndex}\0${entry.contentHash}`));
  const staleReviews = [...expectedReviewHashes].filter((value) => !actualReviewHashes.has(value));
  if (staleReviews.length || actualReviewHashes.size !== expectedReviewHashes.size) {
    fail(`${id}: scenario review snapshot is missing or stale`);
  }
  for (const field of ["description", "scenario", "goal", "expected"]) {
    const counts = new Map();
    for (const item of tool.items) for (const example of item.examples) {
      const value = example[field].trim().replace(/\s+/g, " ");
      counts.set(value, (counts.get(value) || 0) + 1);
    }
    const repeated = [...counts.entries()].find(([, count]) => count > rules.scenarioQuality.maxRepeatedText);
    if (repeated) fail(`${id}: ${field} repeated ${repeated[1]} times: ${repeated[0]}`);
  }
  const unusedSources = [...sourceIds].filter((sourceId) => !usedSourceIds.has(sourceId));
  if (unusedSources.length) fail(`${id}: unused evidence sources: ${unusedSources.join(", ")}`);
}

function enrichedItem(toolId, item) {
  const enrichment = enrichmentByItem.get(item);
  if (!enrichment) return item;
  return {
    ...item,
    keywords: item.keywords || enrichment.keywords,
    examples: item.examples || enrichment.examples,
  };
}

function qualitySummaryRows() {
  return files.map((id) => {
    const items = data[id].items || [];
    const enrichedItems = items.map((item) => enrichedItem(id, item));
    return {
      tool: id,
      items: items.length,
      examples: enrichedItems.filter((item) => item.examples?.length).length,
      evidenceRefs: items.filter((item) => item.evidenceRefs?.length).length,
      verified: items.filter((item) => item.evidenceStatus === "verified").length,
      partial: items.filter((item) => item.evidenceStatus === "partial").length,
      unverified: items.filter((item) => (item.evidenceStatus || "unverified") === "unverified").length,
    };
  });
}

const totalItems = files.reduce((n, id) => n + data[id].items.length, 0);
console.log(`Validated ${files.length} tools and ${totalItems} items.`);
console.log("Quality summary by tool:");
qualitySummaryRows().forEach((row) => {
  console.log(
    `- ${row.tool}: items=${row.items}, examples=${row.examples}, evidenceRefs=${row.evidenceRefs}, verified=${row.verified}, partial=${row.partial}, unverified=${row.unverified}`
  );
});
if (firstPartyOnUnverified.size) {
  console.warn("Evidence-tier mismatches (first-party example on unverified command; fix by adding evidenceRefs):");
  [...firstPartyOnUnverified.entries()].forEach(([tool, count]) => {
    console.warn(`- ${tool}: ${count} example(s)`);
  });
}
const qualityData = Object.fromEntries(files.map((id) => [id, {
  ...data[id],
  items: data[id].items.map((item) => enrichedItem(id, item)),
}]));
const qualityReport = qualityCore.auditDataset(qualityData, rules);
const baselinePath = path.join(root, "shared", "quality-baseline.json");
if (fs.existsSync(baselinePath)) {
  const baseline = JSON.parse(fs.readFileSync(baselinePath, "utf8"));
  const regressions = qualityCore.regressionFailures(qualityReport, baseline, rules.qualityGates.maxRegressionPoints);
  if (regressions.length) fail(`quality regression:\n${regressions.join("\n")}`);
}
if (qualityReport.totals.unexplainedUnverified > rules.qualityGates.maxUnexplainedUnverified) {
  fail(`${qualityReport.totals.unexplainedUnverified} unverified items require item.verificationNote or meta.unverifiedPolicy`);
}
const targetExceptions = rules.qualityGates.temporaryTargetExceptions || {};
const targetFailures = qualityReport.tools.filter((row) => !row.targetMet && !targetExceptions[row.tool]);
if (targetFailures.length) {
  fail(`quality target not met: ${targetFailures.map((row) => `${row.tool}=${Math.round(row.verifiedRatio * 100)}%`).join(", ")}`);
}
