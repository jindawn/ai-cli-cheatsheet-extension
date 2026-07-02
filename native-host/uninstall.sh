#!/bin/bash
# uninstall.sh — macOS/Linux 卸载脚本。逆向清理 install.sh 创建的产物：
#   1. 各浏览器 NativeMessagingHosts 目录里的 com.aicli.cheatsheet_updater.json
#   2. 安装目录（host.py / run.sh；credentials.env 可能含 API 密钥，询问后决定）
# 不会改动浏览器中的扩展本体，也不会触碰仓库工作区。

set -euo pipefail

HOST_NAME="com.aicli.cheatsheet_updater"
MANIFEST_FILE="$HOST_NAME.json"
OS_NAME="$(uname -s)"

case "$OS_NAME" in
  Darwin)
    INSTALL_DIR="$HOME/Library/Application Support/aicli-cheatsheet"
    BROWSER_DIRS=(
      "$HOME/Library/Application Support/Google/Chrome/NativeMessagingHosts"
      "$HOME/Library/Application Support/Microsoft Edge/NativeMessagingHosts"
    )
    ;;
  Linux)
    INSTALL_DIR="${XDG_DATA_HOME:-$HOME/.local/share}/aicli-cheatsheet"
    BROWSER_DIRS=(
      "${XDG_CONFIG_HOME:-$HOME/.config}/google-chrome/NativeMessagingHosts"
      "${XDG_CONFIG_HOME:-$HOME/.config}/chromium/NativeMessagingHosts"
      "${XDG_CONFIG_HOME:-$HOME/.config}/microsoft-edge/NativeMessagingHosts"
    )
    ;;
  *)
    echo "❌ 不支持的系统：$OS_NAME。Windows 请运行 uninstall.ps1。"
    exit 1
    ;;
esac

echo "=== AI CLI 速查表 — 本地更新桥接 卸载程序 ==="
echo ""

REMOVED=0
for DIR in "${BROWSER_DIRS[@]}"; do
  TARGET="$DIR/$MANIFEST_FILE"
  if [ -f "$TARGET" ]; then
    rm -f "$TARGET"
    echo "✅ 已移除注册：$TARGET"
    REMOVED=1
  fi
done
[ "$REMOVED" -eq 0 ] && echo "ℹ 未发现浏览器注册文件（可能未安装或已清理）。"

if [ -d "$INSTALL_DIR" ]; then
  KEEP_CREDS=0
  if [ -f "$INSTALL_DIR/credentials.env" ]; then
    read -rp "发现 credentials.env（可能含 API 密钥）。一并删除？[y/N]: " CRED_CHOICE
    if [[ "${CRED_CHOICE:-}" =~ ^[Yy]$ ]]; then
      rm -f "$INSTALL_DIR/credentials.env"
      echo "✅ 已删除 credentials.env"
    else
      KEEP_CREDS=1
      echo "ℹ 保留 credentials.env。"
    fi
  fi
  rm -f "$INSTALL_DIR/host.py" "$INSTALL_DIR/run.sh"
  if [ "$KEEP_CREDS" -eq 0 ] && rmdir "$INSTALL_DIR" 2>/dev/null; then
    echo "✅ 已删除安装目录：$INSTALL_DIR"
  else
    echo "ℹ 安装目录保留（仍有文件）：$INSTALL_DIR"
  fi
else
  echo "ℹ 未发现安装目录：$INSTALL_DIR"
fi

echo ""
echo "=== 卸载完成 ==="
echo "如浏览器仍在运行，请完全退出并重新打开以生效。"
echo "浏览器中的扩展本体请在 chrome://extensions（或 edge://extensions）中移除。"
