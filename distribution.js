"use strict";

// Source checkouts keep the local Native Host maintenance workflow enabled.
// The release packager replaces this file in the Chrome Web Store bundle.
window.CHEATSHEET_DISTRIBUTION = Object.freeze({
  channel: "source",
  maintenance: true,
});
