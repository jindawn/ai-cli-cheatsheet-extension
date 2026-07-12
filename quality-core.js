"use strict";

(function initQualityCore(globalScope) {
  const PLATFORMS = ["mac", "windows", "linux"];
  const CATEGORIES = ["shortcut", "slash", "flag"];
  const BROAD_LOCATOR_RE = /^(?:docs?|documentation|reference|readme|homepage|首页|文档|官方文档|help)$/i;

  function ratio(value, total) {
    return total ? Number((value / total).toFixed(4)) : 0;
  }

  function isBroadLocator(locator) {
    const value = String(locator || "").trim();
    if (!value) return true;
    if (BROAD_LOCATOR_RE.test(value)) return true;
    try {
      const url = new URL(value);
      return (url.pathname === "/" || !url.pathname) && !url.hash && !url.search;
    } catch (_error) {
      return false;
    }
  }

  function itemPlatforms(item, toolPlatforms) {
    return item.platforms?.length ? item.platforms : toolPlatforms || [];
  }

  function auditTool(toolId, tool, options = {}) {
    const items = tool.items || [];
    const statuses = { verified: 0, partial: 0, unverified: 0 };
    const categories = Object.fromEntries(CATEGORIES.map((key) => [key, 0]));
    const platforms = Object.fromEntries(PLATFORMS.map((key) => [key, 0]));
    const platformCmds = Object.fromEntries(PLATFORMS.map((key) => [key, 0]));
    const examples = { items: 0, total: 0, platformSpecific: 0, risky: 0 };
    let contexts = 0;
    let broadLocators = 0;
    let evidenceRefs = 0;
    let unexplainedUnverified = 0;

    items.forEach((item) => {
      const status = item.evidenceStatus || "unverified";
      statuses[status] = (statuses[status] || 0) + 1;
      categories[item.cat] = (categories[item.cat] || 0) + 1;
      itemPlatforms(item, tool.meta?.platforms).forEach((platform) => {
        if (platforms[platform] !== undefined) platforms[platform] += 1;
      });
      Object.keys(item.platformCmds || {}).forEach((platform) => {
        if (platformCmds[platform] !== undefined) platformCmds[platform] += 1;
      });
      if (item.context) contexts += 1;
      const refs = item.evidenceRefs || [];
      evidenceRefs += refs.length;
      broadLocators += refs.filter((ref) => isBroadLocator(ref.locator)).length;
      if (status === "unverified" && !item.verificationNote && !tool.meta?.unverifiedPolicy) {
        unexplainedUnverified += 1;
      }
      if (item.examples?.length) examples.items += 1;
      (item.examples || []).forEach((example) => {
        examples.total += 1;
        if (example.platforms?.length || Object.keys(example.platformValues || {}).length) examples.platformSpecific += 1;
        if (example.warning || example.copyable === false || example.riskLevels?.length) examples.risky += 1;
      });
    });

    const verifiedRatio = ratio(statuses.verified, items.length);
    const target = options.target ?? 0;
    return {
      tool: toolId,
      items: items.length,
      statuses,
      verifiedRatio,
      target,
      targetMet: verifiedRatio >= target,
      categories,
      platforms,
      platformCmds,
      contexts,
      examples: { ...examples, coverage: ratio(examples.items, items.length) },
      evidenceRefs,
      broadLocators,
      unexplainedUnverified,
      sourceConflicts: (tool.sourceConflicts || tool.meta?.sourceConflicts || []).length,
      sourceTiers: (tool.meta?.sources || []).reduce((counts, source) => {
        const tier = source.evidenceTier || "none";
        counts[tier] = (counts[tier] || 0) + 1;
        return counts;
      }, {}),
    };
  }

  function auditDataset(data, rules = {}) {
    const gates = rules.qualityGates || {};
    const core = new Set(gates.coreTools || []);
    const tools = Object.entries(data).filter(([, tool]) => Array.isArray(tool?.items)).map(([id, tool]) =>
      auditTool(id, tool, { target: core.has(id) ? gates.coreVerifiedRatio : gates.defaultVerifiedRatio })
    );
    const totals = tools.reduce((sum, row) => ({
      tools: sum.tools + 1,
      items: sum.items + row.items,
      verified: sum.verified + row.statuses.verified,
      partial: sum.partial + row.statuses.partial,
      unverified: sum.unverified + row.statuses.unverified,
      unexplainedUnverified: sum.unexplainedUnverified + row.unexplainedUnverified,
      broadLocators: sum.broadLocators + row.broadLocators,
    }), { tools: 0, items: 0, verified: 0, partial: 0, unverified: 0, unexplainedUnverified: 0, broadLocators: 0 });
    totals.verifiedRatio = ratio(totals.verified, totals.items);
    return { generatedAt: new Date().toISOString(), gates, totals, tools };
  }

  function regressionFailures(report, baseline, maxRegressionPoints = 0.02) {
    if (!baseline?.tools) return [];
    const previous = new Map(baseline.tools.map((row) => [row.tool, row]));
    return report.tools.flatMap((row) => {
      const old = previous.get(row.tool);
      if (!old) return [];
      const failures = [];
      if (row.verifiedRatio + maxRegressionPoints < old.verifiedRatio) failures.push(`${row.tool}: verified ratio regressed`);
      if (row.examples.coverage + maxRegressionPoints < old.examples.coverage) failures.push(`${row.tool}: example coverage regressed`);
      for (const platform of PLATFORMS) {
        if ((row.platforms[platform] || 0) < (old.platforms?.[platform] || 0)) failures.push(`${row.tool}: ${platform} coverage regressed`);
      }
      for (const category of CATEGORIES) {
        if ((row.categories[category] || 0) < (old.categories?.[category] || 0)) failures.push(`${row.tool}: ${category} coverage regressed`);
      }
      return failures;
    });
  }

  const api = { PLATFORMS, CATEGORIES, ratio, isBroadLocator, auditTool, auditDataset, regressionFailures };
  globalScope.CHEATSHEET_QUALITY = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
}(typeof window !== "undefined" ? window : globalThis));
