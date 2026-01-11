param(
    [Parameter(Mandatory=$true)] [string]$TOKEN,
    [Parameter(Mandatory=$true)] [string]$USER,
    [Parameter(Mandatory=$true)] [string]$SUT_NAME # e.g., "gitea"
)

$filePath = ".\provengo\$SUT_NAME\spec\js\interfaces.$SUT_NAME.js"
if (-not (Test-Path $filePath)) { Write-Error "File not found."; return }

$content = Get-Content -Path $filePath -Raw

# Replace placeholders dynamically based on system name (BC and Generic)
$content = $content -replace "__$($SUT_NAME.ToUpper())_TOKEN__", $TOKEN
$content = $content -replace "__$($SUT_NAME.ToUpper())_USER__", $USER

$content | Set-Content -Path $filePath -Encoding UTF8
Write-Host "✅ Sync Complete for $SUT_NAME" -ForegroundColor Green