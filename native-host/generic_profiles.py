"""Bridge-owned invocation profiles for user-confirmed generic AI environments.

The browser extension never supplies an argument.  It may only select one
profile ID out of the set this module publishes, and the bridge substitutes the
task prompt into exactly one array element.  No shell is involved, the prompt is
never concatenated inside an element, and no model-provided text reaches argv.

Profiles are shipped with the bridge for the same reason installer profiles are
(see ``provider_installers``): a catalog refresh must not be able to change how
a local executable gets invoked.
"""

from copy import deepcopy


GENERIC_PROFILE_VERSION = 1
PROMPT_PLACEHOLDER = "{prompt}"

# One bounded probe replaces the previous "save now, fail after 15 minutes"
# behaviour.  It is also the guard against an executable that opens an
# interactive TUI when it is handed a pipe instead of a terminal: stdin is
# always closed and the probe can never outlive this budget.
PROBE_TIMEOUT_SECONDS = 60
PROBE_PROMPT = (
    "只输出下面这一行 JSON，不要输出任何其他内容、解释或 Markdown 代码块：\n"
    '{"ok": true}'
)

# Do not add shell snippets, pipes, redirection or user-controlled values here.
# Every entry is passed to ``subprocess`` as one array element.
_PROFILES = {
    "prompt-flag-json": {
        "id": "prompt-flag-json",
        "label": "-p 提示 + JSON 输出格式",
        "argv": ["-p", PROMPT_PLACEHOLDER, "--output-format", "json"],
        "promptMode": "argv-template",
        "outputParser": "json",
    },
    "prompt-flag": {
        "id": "prompt-flag",
        "label": "-p 提示",
        "argv": ["-p", PROMPT_PLACEHOLDER],
        "promptMode": "argv-template",
        "outputParser": "json",
    },
    "prompt-long-flag": {
        "id": "prompt-long-flag",
        "label": "--prompt 提示",
        "argv": ["--prompt", PROMPT_PLACEHOLDER],
        "promptMode": "argv-template",
        "outputParser": "json",
    },
    "run-subcommand": {
        "id": "run-subcommand",
        "label": "run 子命令",
        "argv": ["run", PROMPT_PLACEHOLDER],
        "promptMode": "argv-template",
        "outputParser": "json",
    },
    "stdin-json": {
        "id": "stdin-json",
        "label": "标准输入 + JSON 输出",
        "argv": [],
        "promptMode": "stdin",
        "outputParser": "json",
    },
}

# Flag forms are probed first: an executable that does not know a flag exits
# immediately, while a bare invocation is the form most likely to block on an
# interactive session until the probe budget runs out.
PROBE_ORDER = (
    "prompt-flag-json",
    "prompt-flag",
    "prompt-long-flag",
    "run-subcommand",
    "stdin-json",
)


def generic_profile(profile_id):
    """Return a copy of one registered profile, or None when it is unknown."""
    profile = _PROFILES.get(str(profile_id or ""))
    return deepcopy(profile) if profile else None


def generic_profile_ids():
    """Return every registered profile ID in probe order."""
    return PROBE_ORDER


def public_generic_profiles():
    """Return UI-safe profile descriptions for the handshake capability list."""
    return [
        {"id": profile_id, "label": _PROFILES[profile_id]["label"]}
        for profile_id in PROBE_ORDER
    ]


def is_registered_argv(argv):
    """Return True when argv is byte-for-byte one registered profile template."""
    if not isinstance(argv, list):
        return False
    return any(profile["argv"] == argv for profile in _PROFILES.values())


def profile_for_argv(argv, prompt_mode):
    """Return the profile matching a stored adapter's argv and prompt mode."""
    for profile_id in PROBE_ORDER:
        profile = _PROFILES[profile_id]
        if profile["argv"] == argv and profile["promptMode"] == prompt_mode:
            return deepcopy(profile)
    return None


def render_argv(profile, prompt):
    """Substitute the prompt into exactly one array element of a template.

    Raises ValueError when a template does not hold exactly one standalone
    placeholder, so a malformed profile fails closed instead of silently
    dropping the prompt or passing the literal placeholder to a model.
    """
    argv = profile["argv"]
    if profile["promptMode"] != "argv-template":
        if PROMPT_PLACEHOLDER in argv:
            raise ValueError("非模板模式的 argv 不能包含 {prompt} 占位符")
        return list(argv)
    if argv.count(PROMPT_PLACEHOLDER) != 1:
        raise ValueError("argv 模板必须恰好包含一个独立的 {prompt} 元素")
    return [prompt if item == PROMPT_PLACEHOLDER else item for item in argv]
