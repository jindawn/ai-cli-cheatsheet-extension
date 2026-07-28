#!/bin/bash
# install.sh — macOS/Linux 一次性安装脚本。

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
HOST_NAME="com.aicli.cheatsheet_updater"
MANIFEST_FILE="$HOST_NAME.json"
OS_NAME="$(uname -s)"
DEV_MODE="${AICLI_DEV:-0}"
STANDALONE_MODE=0
EXTENSION_ID=""
while [ "$#" -gt 0 ]; do
  case "$1" in
    --symlink) DEV_MODE=1 ;;
    --standalone) STANDALONE_MODE=1 ;;
    --extension-id)
      shift
      [ "$#" -gt 0 ] || { echo "❌ --extension-id 缺少值"; exit 2; }
      EXTENSION_ID="$1"
      ;;
    *) echo "❌ 未知参数：$1"; exit 2 ;;
  esac
  shift
done

case "$OS_NAME" in
  Darwin)
    INSTALL_DIR="$HOME/Library/Application Support/aicli-cheatsheet"
    CHROME_DIRS=("$HOME/Library/Application Support/Google/Chrome/NativeMessagingHosts")
    EDGE_DIR="$HOME/Library/Application Support/Microsoft Edge/NativeMessagingHosts"
    ;;
  Linux)
    INSTALL_DIR="${XDG_DATA_HOME:-$HOME/.local/share}/aicli-cheatsheet"
    CHROME_DIRS=(
      "${XDG_CONFIG_HOME:-$HOME/.config}/google-chrome/NativeMessagingHosts"
      "${XDG_CONFIG_HOME:-$HOME/.config}/chromium/NativeMessagingHosts"
    )
    EDGE_DIR="${XDG_CONFIG_HOME:-$HOME/.config}/microsoft-edge/NativeMessagingHosts"
    ;;
  *)
    echo "❌ 不支持的系统：${OS_NAME}。Windows 请运行 install.ps1。"
    exit 1
    ;;
esac

echo "=== AI CLI 速查表 — 本地更新桥接 安装程序 ==="
echo ""

# ── 1. 检查依赖 ────────────────────────────────────────────────────────────────

PYTHON_BIN="$(command -v python3 || true)"
if [ -z "$PYTHON_BIN" ]; then
  echo "❌ 没找到 python3，请先安装 Python 3 再重新运行本脚本。"
  exit 1
fi
echo "✅ python3：$("$PYTHON_BIN" --version) ($PYTHON_BIN)"

RUNTIME_DIRS=()
add_runtime_dir() {
  local dir="${1:-}"
  [ -d "$dir" ] || return 0
  for existing in "${RUNTIME_DIRS[@]:-}"; do
    [ "$existing" = "$dir" ] && return 0
  done
  RUNTIME_DIRS+=("$dir")
}

for cmd in node claude codex gemini opencode openclaw; do
  resolved="$(command -v "$cmd" 2>/dev/null || true)"
  [ -n "$resolved" ] && add_runtime_dir "$(dirname "$resolved")"
done
for dir in \
  "${NVM_BIN:-}" \
  "${FNM_MULTISHELL_PATH:-}" \
  "${PNPM_HOME:-}" \
  "${VOLTA_HOME:+$VOLTA_HOME/bin}" \
  "${ASDF_DATA_DIR:+$ASDF_DATA_DIR/shims}" \
  "${npm_config_prefix:+$npm_config_prefix/bin}" \
  "$HOME/.local/bin" \
  "$HOME/.npm-global/bin" \
  "$HOME/.cargo/bin" \
  "$HOME/.bun/bin" \
  "$HOME/.opencode/bin" \
  "$HOME/.local/share/pnpm" \
  "$HOME/.volta/bin" \
  "$HOME/.asdf/shims" \
  "$HOME/.local/share/fnm/aliases/default/bin" \
  "/opt/homebrew/bin" \
  "/usr/local/bin" \
  "/usr/bin" \
  "/bin"; do
  add_runtime_dir "$dir"
done
shopt -s nullglob
for dir in \
  "${NVM_DIR:-$HOME/.nvm}"/versions/node/*/bin \
  "${FNM_DIR:-$HOME/.fnm}"/node-versions/*/installation/bin \
  "$HOME"/.nvm/versions/node/*/bin \
  "$HOME"/.fnm/node-versions/*/installation/bin \
  "$HOME"/.local/share/fnm/node-versions/*/installation/bin; do
  add_runtime_dir "$dir"
done
shopt -u nullglob

RUNTIME_PATH=""
for dir in "${RUNTIME_DIRS[@]}"; do
  RUNTIME_PATH="${RUNTIME_PATH:+$RUNTIME_PATH:}$dir"
done

NODE_BIN="$(PATH="$RUNTIME_PATH" command -v node 2>/dev/null || true)"
if [ -n "$NODE_BIN" ]; then
  echo "✅ node：$("$NODE_BIN" --version) ($NODE_BIN)"
else
  echo "ℹ️  未检测到 Node.js；数据读取不需要 Node，仅 npm 安装的 CLI 运行时可能需要。"
fi

READY_CLI=0
for cmd in claude codex gemini opencode; do
  resolved="$(PATH="$RUNTIME_PATH" command -v "$cmd" 2>/dev/null || true)"
  if [ -n "$resolved" ]; then
    echo "✅ ${cmd}：${resolved}"
    READY_CLI=1
  else
    echo "ℹ️  未检测到 $cmd"
  fi
done
if [ "$READY_CLI" = "0" ]; then
  echo "⚠️  尚未检测到受支持的 AI CLI；桥接可先安装，之后安装并登录任意一个再检测。"
fi

refresh_runtime_path() {
  local run_file="$1"
  AICLI_REFRESH_PATH="$RUNTIME_PATH" "$PYTHON_BIN" - "$run_file" <<'PY'
import os
import pathlib
import sys

path = pathlib.Path(sys.argv[1])
text = path.read_text(encoding="utf-8")
lines = [
    line for line in text.splitlines()
    if not line.startswith("export AICLI_EXTRA_PATH=")
    and not line.startswith('export PATH="$AICLI_EXTRA_PATH')
]
insert_at = next(
    (index for index, line in enumerate(lines) if line.startswith("exec ")),
    len(lines),
)
runtime_path = os.environ["AICLI_REFRESH_PATH"].replace("\\", "\\\\").replace('"', '\\"')
lines[insert_at:insert_at] = [
    f'export AICLI_EXTRA_PATH="{runtime_path}"',
    'export PATH="$AICLI_EXTRA_PATH:/usr/bin:/bin"',
]
path.write_text("\n".join(lines) + "\n", encoding="utf-8")
PY
}

validate_extension_id() {
  if [[ ! "$1" =~ ^[a-z]{32}$ ]]; then
    echo "❌ 扩展 ID 格式不对（应为 32 位小写字母，如 abcdefghijklmnopabcdefghijklmnop）。"
    echo "   请在 chrome://extensions 开发者模式下确认正确的 ID 再重新运行。"
    exit 1
  fi
}

write_manifest() {
  local TARGET_DIR="$1"
  local RUN_SH="$INSTALL_DIR/run.sh"
  mkdir -p "$TARGET_DIR"
  cat > "$TARGET_DIR/$MANIFEST_FILE" << MEOF
{
  "name": "$HOST_NAME",
  "description": "AI CLI 速查表插件的本地更新桥接程序",
  "path": "$RUN_SH",
  "type": "stdio",
  "allowed_origins": [
    "chrome-extension://$EXTENSION_ID/"
  ]
}
MEOF
  echo "✅ 已注册到：$TARGET_DIR/$MANIFEST_FILE"
}

# ── 2. 部署文件到 ~/Library ────────────────────────────────────────────────────
# 放在 Library 而非插件目录，以避免 macOS 对 Downloads 等目录的访问限制。

echo ""
echo "正在部署到：$INSTALL_DIR"
mkdir -p "$INSTALL_DIR"
# 开发模式（--symlink 或 AICLI_DEV=1）：软链而非拷贝，改 native-host/host.py 即时生效，无需重新部署。
# 部署 native-host/ 下的全部 Python 模块。逐个列举容易在新增模块时漏掉，
# 导致已部署的 host.py 在 import 时直接崩溃；tests/test_bridge_release.js
# 会断言这里覆盖了仓库中的每个模块。
if [ "$DEV_MODE" = "1" ]; then
  for module in "$SCRIPT_DIR"/*.py; do
    ln -sfn "$module" "$INSTALL_DIR/$(basename "$module")"
  done
  echo "✅ host.py 已软链到仓库（开发模式：改 native-host/host.py 即时生效）"
else
  for module in "$SCRIPT_DIR"/*.py; do
    cp "$module" "$INSTALL_DIR/$(basename "$module")"
  done
  chmod 700 "$INSTALL_DIR/host.py"
  echo "✅ host.py 已更新"
fi
if [ "$STANDALONE_MODE" = "1" ]; then
  rm -rf "$INSTALL_DIR/shared"
  cp -R "$PROJECT_DIR/shared" "$INSTALL_DIR/shared"
  RUNTIME_PROJECT_DIR="$INSTALL_DIR"
  echo "✅ 官方清单与校验契约已部署到伴侣目录"
else
  RUNTIME_PROJECT_DIR="$PROJECT_DIR"
fi
chmod 700 "$INSTALL_DIR"

# 已有安装时，询问是否只更新 host.py、跳过重新配置
if [ -f "$INSTALL_DIR/run.sh" ]; then
  echo ""
  echo "检测到已有安装（$INSTALL_DIR/run.sh）。"
  read -rp "仅更新 host.py，保留现有配置？[Y/n]: " UPDATE_ONLY
  UPDATE_ONLY="${UPDATE_ONLY:-Y}"
  if [[ "$UPDATE_ONLY" =~ ^[Yy]$ ]]; then
    refresh_runtime_path "$INSTALL_DIR/run.sh"
    if [ -n "$EXTENSION_ID" ]; then
      validate_extension_id "$EXTENSION_ID"
      for CHROME_DIR in "${CHROME_DIRS[@]}"; do
        write_manifest "$CHROME_DIR"
      done
      if [ -f "$EDGE_DIR/$MANIFEST_FILE" ]; then
        write_manifest "$EDGE_DIR"
      fi
      echo "✅ 已将现有注册更新为当前扩展 ID：$EXTENSION_ID"
    fi
    echo ""
    echo "=== 更新完成 ==="
    echo ""
    echo "请完全退出浏览器（Cmd+Q），重新打开后即可使用更新后的功能。"
    exit 0
  fi
  echo "继续重新配置…"
fi

# ── 3. 配置 claude 调用方式 ────────────────────────────────────────────────────

echo ""
echo "可选：Claude / Anthropic 兼容 API 高级配置（Codex、Gemini、OpenCode 凭据仍由各 CLI 管理）："
echo "  [1] 使用当前 shell 环境（默认，会继承你终端里的 ANTHROPIC_BASE_URL 等变量）"
echo "  [2] 强制走官方 Claude API（取消所有自定义 API 变量，走 ~/.claude/ 里的登录会话）"
echo "  [3] 自定义（手动填写 API Base URL 和 Auth Token）"
read -rp "请选择 [1/2/3]，直接回车默认选 1：" API_CHOICE
API_CHOICE="${API_CHOICE:-1}"

# 凭据与脚本分离：密钥写入独立的 credentials.env（chmod 600），run.sh 仅 source 它。
CREDS_FILE="$INSTALL_DIR/credentials.env"
EXTRA_ENV=""   # 仅存放非密钥内容（如 unset 语句），会内联进 run.sh
SOURCE_CREDS=""  # 若存在密钥文件，run.sh 加载它的语句

# 旧版可能把密钥内联在 run.sh 里，重新配置时先清掉残留的密钥文件
rm -f "$CREDS_FILE"

if [ "$API_CHOICE" = "2" ]; then
  EXTRA_ENV=$(cat << 'ENVEOF'
# 强制走官方 Claude API（取消所有自定义变量）
unset ANTHROPIC_BASE_URL
unset ANTHROPIC_API_KEY
unset ANTHROPIC_AUTH_TOKEN
unset ANTHROPIC_MODEL
unset ANTHROPIC_DEFAULT_HAIKU_MODEL
unset ANTHROPIC_DEFAULT_SONNET_MODEL
unset ANTHROPIC_DEFAULT_OPUS_MODEL
unset CLAUDE_CODE_SUBAGENT_MODEL
unset CLAUDE_CODE_EFFORT_LEVEL
unset ENABLE_TOOL_SEARCH
unset CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS
ENVEOF
)
elif [ "$API_CHOICE" = "3" ]; then
  read -rp "ANTHROPIC_BASE_URL（如 https://api.deepseek.com/anthropic）: " CUSTOM_URL
  read -rsp "ANTHROPIC_AUTH_TOKEN（你的 API Key，输入时不显示）: " CUSTOM_TOKEN
  echo ""
  read -rp "ANTHROPIC_MODEL（如 deepseek-chat，留空跳过）: " CUSTOM_MODEL
  printf -v QUOTED_URL '%q' "$CUSTOM_URL"
  printf -v QUOTED_TOKEN '%q' "$CUSTOM_TOKEN"

  # 先以 600 权限创建空文件再写入，避免密钥短暂以宽松权限落盘
  ( umask 177; : > "$CREDS_FILE" )
  {
    echo "# Auto-generated by install.sh — contains API secrets. Do not commit or share."
    echo "export ANTHROPIC_BASE_URL=$QUOTED_URL"
    echo "export ANTHROPIC_AUTH_TOKEN=$QUOTED_TOKEN"
    if [ -n "$CUSTOM_MODEL" ]; then
      printf -v QUOTED_MODEL '%q' "$CUSTOM_MODEL"
      echo "export ANTHROPIC_MODEL=$QUOTED_MODEL"
    fi
  } >> "$CREDS_FILE"
  chmod 600 "$CREDS_FILE"
  printf -v QUOTED_CREDS '%q' "$CREDS_FILE"
  SOURCE_CREDS="[ -f $QUOTED_CREDS ] && . $QUOTED_CREDS"
  echo "✅ 密钥已写入独立文件（权限 600）：$CREDS_FILE"
fi

# ── 4. 生成 run.sh ─────────────────────────────────────────────────────────────

RUN_SH="$INSTALL_DIR/run.sh"
printf -v QUOTED_PROJECT_DIR '%q' "$RUNTIME_PROJECT_DIR"
printf -v QUOTED_INSTALL_HOST '%q' "$INSTALL_DIR/host.py"
printf -v QUOTED_PYTHON '%q' "$PYTHON_BIN"
printf -v QUOTED_RUNTIME_PATH '%q' "$RUNTIME_PATH"
cat > "$RUN_SH" << RUNEOF
#!/bin/bash
# Auto-generated by install.sh — do not edit manually, re-run install.sh to reconfigure.
# API 密钥（如有）存放在 credentials.env，由下方 source 语句加载，不内联在本文件中。
$EXTRA_ENV
$SOURCE_CREDS
export AICLI_PROJECT_DIR=$QUOTED_PROJECT_DIR
export AICLI_EXTRA_PATH=$QUOTED_RUNTIME_PATH
export PATH="\$AICLI_EXTRA_PATH:/usr/bin:/bin"
exec $QUOTED_PYTHON $QUOTED_INSTALL_HOST "\$@"
RUNEOF
chmod 700 "$RUN_SH"
echo "✅ run.sh 已生成：$RUN_SH"

# ── 5. 询问扩展 ID ─────────────────────────────────────────────────────────────

echo ""
echo "需要你的浏览器扩展 ID："
echo "  Chrome：打开 chrome://extensions/，开启开发者模式，找到「AI CLI 速查表」，"
echo "          卡片上会显示一串字母，如 abcdefghijklmnopabcdefghijklmnop"
echo "  Edge：  打开 edge://extensions/，步骤相同"
if [ -z "$EXTENSION_ID" ]; then
  read -rp "请粘贴扩展 ID: " EXTENSION_ID
fi

if [ -z "$EXTENSION_ID" ]; then
  echo "❌ 扩展 ID 不能为空。请先在浏览器里加载好插件，获取 ID 后重新运行本脚本。"
  exit 1
fi
validate_extension_id "$EXTENSION_ID"

# ── 6. 写入 Native Messaging manifest ─────────────────────────────────────────

for CHROME_DIR in "${CHROME_DIRS[@]}"; do
  write_manifest "$CHROME_DIR"
done

read -rp "同时注册到 Edge？[y/N]: " EDGE_CHOICE
if [[ "$EDGE_CHOICE" =~ ^[Yy]$ ]]; then
  # EDGE_DIR 已按操作系统在文件顶部设置（macOS/Linux 路径不同），不要在此覆盖。
  write_manifest "$EDGE_DIR"
fi

# ── 7. 完成 ───────────────────────────────────────────────────────────────────

echo ""
echo "=== 安装完成 ==="
echo ""
echo "请完全退出浏览器（Cmd+Q），重新打开后，在插件中选择 AI 环境并使用「查询并新增」或「检查官方更新」。"
echo ""
echo "如需重新配置（更换 API 或更新扩展 ID），直接重新运行本脚本即可。"
