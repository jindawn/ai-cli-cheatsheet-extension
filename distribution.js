"use strict";

// Source checkouts keep the local maintenance bridge enabled. The release
// packager replaces channel-specific persistence and permission details.
window.CHEATSHEET_DISTRIBUTION = Object.freeze({
  channel: "source",
  releaseVersion: "1.8.3",
  // The extension and native bridge have independent release cadences. Keep
  // installer links on the latest published bridge asset even when the store
  // extension receives a UI/data-only update.
  bridgeReleaseVersion: "1.8.2",
  storeExtensionId: "jdiopjiebnamikpcknmnpahhlokccgjj",
  // "signed" | "unsigned" | "none". An unpacked checkout never points users at
  // a release asset it cannot verify, so it stays "none" and the install dialog
  // explains the source-install path instead.
  bridgeInstallers: "none",
  capabilities: Object.freeze({
    localRecommendations: true,
    nativeCompanion: true,
    aiRecommendations: false,
    dataMaintenance: true,
    persistence: "repository-files",
  }),
});
