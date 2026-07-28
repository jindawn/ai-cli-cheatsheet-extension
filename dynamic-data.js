"use strict";

(function initDynamicData(globalScope) {
  const INDEX_KEY = "dynamicDataIndex";
  const REVISION_PREFIX = "dynamicDataRevision:";
  const MAX_BUNDLE_BYTES = 16 * 1024 * 1024;
  const PROTOCOL_VERSION = 3;
  const DATA_SCHEMA_VERSION = 2;

  function storageGet(chromeApi, keys) {
    return new Promise((resolve, reject) => {
      chromeApi.storage.local.get(keys, (value) => {
        const error = chromeApi.runtime?.lastError;
        if (error) reject(new Error(error.message));
        else resolve(value || {});
      });
    });
  }

  function storageSet(chromeApi, values) {
    return new Promise((resolve, reject) => {
      chromeApi.storage.local.set(values, () => {
        const error = chromeApi.runtime?.lastError;
        if (error) reject(new Error(error.message));
        else resolve();
      });
    });
  }

  function storageRemove(chromeApi, keys) {
    return new Promise((resolve, reject) => {
      chromeApi.storage.local.remove(keys, () => {
        const error = chromeApi.runtime?.lastError;
        if (error) reject(new Error(error.message));
        else resolve();
      });
    });
  }

  function isPlainObject(value) {
    return Boolean(value) && typeof value === "object" && !Array.isArray(value)
      && (Object.getPrototypeOf(value) === Object.prototype || Object.getPrototypeOf(value) === null);
  }

  function utf8Bytes(value) {
    return new TextEncoder().encode(value);
  }

  async function sha256Hex(bytes) {
    const digest = await globalScope.crypto.subtle.digest("SHA-256", bytes);
    return [...new Uint8Array(digest)].map((value) => value.toString(16).padStart(2, "0")).join("");
  }

  function validateBundle(bundle) {
    if (!isPlainObject(bundle) || !isPlainObject(bundle.dataset)) throw new Error("动态数据包格式无效");
    if (bundle.schemaVersion !== DATA_SCHEMA_VERSION) throw new Error("动态数据包 Schema 版本不兼容");
    const toolId = bundle.dataset.meta?.id;
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(toolId || "")) throw new Error("动态数据包缺少合法工具 ID");
    if (!Array.isArray(bundle.dataset.items) || !bundle.dataset.items.length) throw new Error("动态数据包没有条目");
    if (!isPlainObject(bundle.officialInventory) || bundle.officialInventory.toolId !== toolId) {
      throw new Error("动态数据包缺少匹配的官方清单");
    }
    if (!isPlainObject(bundle.scenarioReview) || bundle.scenarioReview.toolId !== toolId) {
      throw new Error("动态数据包缺少匹配的场景审校");
    }
    if (!isPlainObject(bundle.officialAdapter) || typeof bundle.officialAdapter.id !== "string") {
      throw new Error("动态数据包缺少声明式官方适配器");
    }
    if (!Array.isArray(bundle.sourceRegistry)) throw new Error("动态数据包缺少来源登记");
    if (!isPlainObject(bundle.generationEnvironment)
      || !["claude", "codex", "gemini", "opencode"].includes(bundle.generationEnvironment.providerId)) {
      throw new Error("动态数据包缺少生成环境记录");
    }
    if (bundle.baseContentHash !== null && bundle.baseContentHash !== undefined
      && !/^sha256:[a-f0-9]{64}$/.test(bundle.baseContentHash)) {
      throw new Error("动态数据包基础哈希无效");
    }
    return toolId;
  }

  function recordPayload(record) {
    return {
      dataset: record.dataset,
      officialInventory: record.officialInventory,
      scenarioReview: record.scenarioReview,
      officialAdapter: record.officialAdapter,
      sourceRegistry: record.sourceRegistry,
      generationEnvironment: record.generationEnvironment,
      baseContentHash: record.baseContentHash || null,
      schemaVersion: record.schemaVersion,
      createdAt: record.createdAt,
    };
  }

  async function commitBundle(chromeApi, bundle) {
    const clean = JSON.parse(JSON.stringify(bundle));
    const toolId = validateBundle(clean);
    const createdAt = clean.createdAt || new Date().toISOString();
    const payload = {
      dataset: clean.dataset,
      officialInventory: clean.officialInventory,
      scenarioReview: clean.scenarioReview,
      officialAdapter: clean.officialAdapter,
      sourceRegistry: clean.sourceRegistry,
      generationEnvironment: clean.generationEnvironment,
      baseContentHash: clean.baseContentHash || null,
      schemaVersion: DATA_SCHEMA_VERSION,
      createdAt,
    };
    const serialized = JSON.stringify(payload);
    const bytes = utf8Bytes(serialized);
    if (bytes.byteLength > MAX_BUNDLE_BYTES) throw new Error("动态数据包超过应用大小上限");
    const digest = await sha256Hex(bytes);
    const revisionId = `${Date.now().toString(36)}-${digest.slice(0, 16)}`;
    const revisionKey = `${REVISION_PREFIX}${toolId}:${revisionId}`;
    const record = { ...payload, revisionId, contentLength: bytes.byteLength, sha256: digest };

    // Two-phase local commit: write and verify the immutable revision before
    // moving the active pointer. A failed write leaves the previous revision live.
    await storageSet(chromeApi, { [revisionKey]: record });
    const readBack = (await storageGet(chromeApi, revisionKey))[revisionKey];
    if (!readBack || readBack.contentLength !== bytes.byteLength
      || await sha256Hex(utf8Bytes(JSON.stringify(recordPayload(readBack)))) !== digest) {
      await storageRemove(chromeApi, revisionKey).catch(() => {});
      throw new Error("动态修订回读校验失败");
    }
    const existing = (await storageGet(chromeApi, INDEX_KEY))[INDEX_KEY];
    const index = isPlainObject(existing) ? { ...existing } : {};
    index[toolId] = { revisionKey, revisionId, baseContentHash: payload.baseContentHash, createdAt };
    await storageSet(chromeApi, { [INDEX_KEY]: index });
    return { toolId, revisionId, revisionKey };
  }

  async function loadActive(chromeApi, bundledCatalog = {}) {
    const storedIndex = (await storageGet(chromeApi, INDEX_KEY))[INDEX_KEY];
    const index = isPlainObject(storedIndex) ? storedIndex : {};
    const keys = Object.values(index).map((entry) => entry?.revisionKey).filter(Boolean);
    const records = keys.length ? await storageGet(chromeApi, keys) : {};
    const datasets = {};
    const officialInventories = {};
    const scenarioReviews = {};
    const officialAdapters = {};
    const sourceRegistries = {};
    const generationEnvironments = {};
    const activeContentHashes = {};
    const conflicts = [];
    for (const [toolId, pointer] of Object.entries(index)) {
      const record = records[pointer?.revisionKey];
      try {
        if (!record || validateBundle(record) !== toolId) throw new Error("修订不存在或格式损坏");
        const serialized = JSON.stringify(recordPayload(record));
        if (utf8Bytes(serialized).byteLength !== record.contentLength
          || await sha256Hex(utf8Bytes(serialized)) !== record.sha256) throw new Error("修订校验和不匹配");
        const bundledHash = bundledCatalog[toolId]?.contentHash;
        if (record.baseContentHash && bundledHash && record.baseContentHash !== bundledHash) {
          conflicts.push({ toolId, reason: "bundled-base-changed", revisionId: record.revisionId });
          continue;
        }
        datasets[toolId] = record.dataset;
        officialInventories[toolId] = record.officialInventory;
        scenarioReviews[toolId] = record.scenarioReview;
        officialAdapters[toolId] = record.officialAdapter;
        sourceRegistries[toolId] = record.sourceRegistry;
        generationEnvironments[toolId] = record.generationEnvironment;
        activeContentHashes[toolId] = `sha256:${record.sha256}`;
      } catch (error) {
        conflicts.push({ toolId, reason: error.message, revisionId: pointer?.revisionId });
      }
    }
    return {
      datasets, officialInventories, scenarioReviews, officialAdapters, sourceRegistries,
      generationEnvironments, activeContentHashes, conflicts, index,
    };
  }

  async function removeTool(chromeApi, toolId) {
    const stored = (await storageGet(chromeApi, INDEX_KEY))[INDEX_KEY];
    const index = isPlainObject(stored) ? { ...stored } : {};
    const pointer = index[toolId];
    if (!pointer) return false;
    delete index[toolId];
    await storageSet(chromeApi, { [INDEX_KEY]: index });
    await storageRemove(chromeApi, pointer.revisionKey).catch(() => {});
    return true;
  }

  async function resetAll(chromeApi) {
    const stored = (await storageGet(chromeApi, INDEX_KEY))[INDEX_KEY];
    const index = isPlainObject(stored) ? stored : {};
    const keys = [INDEX_KEY, ...Object.values(index).map((entry) => entry?.revisionKey).filter(Boolean)];
    await storageRemove(chromeApi, keys);
    return keys.length - 1;
  }

  function base64ToBytes(value) {
    const binary = atob(value);
    const bytes = new Uint8Array(binary.length);
    for (let index = 0; index < binary.length; index += 1) bytes[index] = binary.charCodeAt(index);
    return bytes;
  }

  async function assembleChunks(chunks, expectedLength, expectedSha256) {
    const parts = chunks.map(base64ToBytes);
    const total = parts.reduce((sum, part) => sum + part.byteLength, 0);
    if (total !== expectedLength) throw new Error("分块总长度不匹配");
    const output = new Uint8Array(total);
    let offset = 0;
    for (const part of parts) { output.set(part, offset); offset += part.byteLength; }
    if (await sha256Hex(output) !== expectedSha256) throw new Error("分块 SHA-256 校验失败");
    return JSON.parse(new TextDecoder().decode(output));
  }

  const api = {
    INDEX_KEY, REVISION_PREFIX, MAX_BUNDLE_BYTES, PROTOCOL_VERSION, DATA_SCHEMA_VERSION,
    validateBundle, commitBundle, loadActive, removeTool, resetAll, assembleChunks,
  };
  globalScope.CHEATSHEET_DYNAMIC_DATA = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
}(typeof self !== "undefined" ? self : globalThis));
