# uninstall.ps1 — Windows 卸载脚本。逆向清理 install.ps1 创建的产物：
#   1. HKCU 下 Chrome / Edge 的 NativeMessagingHosts 注册表键
#   2. %APPDATA%\aicli-cheatsheet 安装目录（host.py / run.bat / manifest；
#      credentials.env 可能含 API 密钥，询问后决定）
# 不会改动浏览器中的扩展本体。

$ErrorActionPreference = "Stop"

$HostName = "com.aicli.cheatsheet_updater"
$InstallDir = Join-Path $env:APPDATA "aicli-cheatsheet"

Write-Host "=== AI CLI 速查表 — 本地更新桥接 卸载程序 ===" -ForegroundColor Cyan
Write-Host ""

$RegPaths = @(
    "HKCU:\Software\Google\Chrome\NativeMessagingHosts",
    "HKCU:\Software\Microsoft\Edge\NativeMessagingHosts"
)
$RemovedAny = $false
foreach ($RegPath in $RegPaths) {
    $RegKey = "$RegPath\$HostName"
    if (Test-Path $RegKey) {
        Remove-Item -Path $RegKey -Recurse -Force
        Write-Host "✅ 已移除注册表键：$RegKey" -ForegroundColor Green
        $RemovedAny = $true
    }
}
if (-not $RemovedAny) {
    Write-Host "ℹ 未发现注册表键（可能未安装或已清理）。"
}

if (Test-Path $InstallDir) {
    $CredFile = Join-Path $InstallDir "credentials.env"
    $KeepCreds = $false
    if (Test-Path $CredFile) {
        $Choice = Read-Host "发现 credentials.env（可能含 API 密钥）。一并删除？[y/N]"
        if ($Choice -notmatch "^[Yy]$") { $KeepCreds = $true }
    }
    if ($KeepCreds) {
        Get-ChildItem $InstallDir | Where-Object { $_.Name -ne "credentials.env" } |
            Remove-Item -Recurse -Force
        Write-Host "ℹ 保留 credentials.env，安装目录保留：$InstallDir"
    } else {
        Remove-Item -Path $InstallDir -Recurse -Force
        Write-Host "✅ 已删除安装目录：$InstallDir" -ForegroundColor Green
    }
} else {
    Write-Host "ℹ 未发现安装目录：$InstallDir"
}

Write-Host ""
Write-Host "=== 卸载完成 ===" -ForegroundColor Cyan
Write-Host "如浏览器仍在运行，请完全退出并重新打开以生效。"
Write-Host "浏览器中的扩展本体请在 chrome://extensions（或 edge://extensions）中移除。"
