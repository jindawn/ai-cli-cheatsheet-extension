"use strict";

// Source checkouts keep the local maintenance bridge enabled. The release
// packager replaces channel-specific persistence and permission details.
window.CHEATSHEET_DISTRIBUTION = Object.freeze({
  channel: "source",
  releaseVersion: "1.8.0",
  storeExtensionId: "jdiopjiebnamikpcknmnpahhlokccgjj",
  // Source checkouts are previews: never point users at an unverified release
  // asset. The store packager enables this only after its release gate exists.
  bridgeInstallersAvailable: false,
  capabilities: Object.freeze({
    localRecommendations: true,
    nativeCompanion: true,
    aiRecommendations: false,
    dataMaintenance: true,
    persistence: "repository-files",
  }),
});
