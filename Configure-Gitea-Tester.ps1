param(
    [Parameter(Mandatory=$true)]
    [string]$TOKEN,

    [Parameter(Mandatory=$true)]
    [string]$USER
)

$filePath = ".\provengo\gitea\spec\js\interfaces.gitea.js"

if (-not (Test-Path $filePath)) {
    Write-Error "File not found at $filePath. Run the emitter first."
    return
}

Write-Host "Injecting local credentials into Docker-Ready interface..." -ForegroundColor Cyan

$content = Get-Content -Path $filePath -Raw

# Replace the secure placeholders provided by the Emitter
$content = $content -replace "__GITEA_TOKEN__", $TOKEN
$content = $content -replace "__GITEA_USER__", $USER

$content | Set-Content -Path $filePath -Encoding UTF8

Write-Host "Success! Credentials applied to $filePath." -ForegroundColor Green