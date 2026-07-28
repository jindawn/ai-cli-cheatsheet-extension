"""Bridge-owned installer profiles for common AI environments.

The browser extension never supplies a command, a package name, or a download
URL.  A profile in this module is the only authority that can start an
installer, which keeps one-click installation separate from generic provider
discovery and from the remotely updatable adapter catalog.
"""

from copy import deepcopy
import sys


INSTALLER_PROFILE_VERSION = 1

# Do not add shell snippets, pipes, URLs, or user-controlled values here.  The
# host starts the selected package manager directly with this fixed argv list.
# Profiles are shipped with the bridge so a catalog refresh cannot change what
# gets installed on a user's machine.
_PROFILES = {
    "qwen-code": {
        "id": "qwen-code",
        "providerId": "qwen",
        "displayName": "Qwen Code",
        "officialUrl": "https://github.com/QwenLM/qwen-code#installation",
        "sourceLabel": "Qwen Code 官方 npm 软件包",
        "expectedExecutable": "qwen",
        "platforms": {"darwin", "linux", "win32"},
        "prerequisites": [{
            "executable": "node",
            "minimumMajor": 22,
            "label": "Node.js 22 或更高版本",
        }, {
            "executable": "npm",
            "minimumMajor": None,
            "label": "npm（随 Node.js 提供）",
        }],
        "installer": {
            "executable": "npm",
            "argv": ["install", "--global", "@qwen-code/qwen-code@latest"],
        },
    },
}


def platform_key(platform=None):
    """Return the platform identifier used by immutable installer profiles."""
    value = platform or sys.platform
    return "win32" if value == "win32" else "darwin" if value == "darwin" else "linux"


def installer_profile(common_provider_id, platform=None):
    """Return a copy of a fixed profile only when it supports this platform."""
    profile = _PROFILES.get(str(common_provider_id or ""))
    if not profile or platform_key(platform) not in profile["platforms"]:
        return None
    return deepcopy(profile)


def known_installer_ids():
    return frozenset(_PROFILES)
