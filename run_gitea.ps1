# Configuration
$SutName = "Gitea"
$DockerImage = "gitea/gitea:latest"
$DockerPort = 3000
$User = "Shayke"
$Pass = "abcd1234"
$Email = "provengo6@gmail.com"
$InterfaceFile = ".\provengo\gitea\spec\js\interfaces.gitea.js"

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host " STARTING GITEA SUT (FRESH DB RESET) " -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan

# 1. Cleanup existing containers and volumes
Write-Host "[1/4] Cleaning up previous Gitea state..." -ForegroundColor Yellow
$running = docker ps -aq --filter "name=gitea"
if ($running) {
    Write-Host "   > Stopping and removing container..."
    docker rm -f gitea | Out-Null
}

# Remove the volume to ensure a complete DB reset for every run
Write-Host "   > Wiping database volume..."
docker volume rm gitea_data 2>$null | Out-Null

# 2. Start fresh SUT
Write-Host "[2/4] Launching fresh Gitea instance..." -ForegroundColor Yellow
# Environment variables bypass the manual setup form and pre-configure SQLite
docker run -d --name gitea -p $DockerPort":3000" -p "2222:22" `
    -e "GITEA__database__DB_TYPE=sqlite3" `
    -e "GITEA__database__PATH=/data/gitea/gitea.db" `
    -e "GITEA__security__INSTALL_LOCK=true" `
    -e "GITEA__server__DOMAIN=localhost" `
    -e "GITEA__server__ROOT_URL=http://localhost:3000/" `
    -v gitea_data:/data `
    $DockerImage | Out-Null

# 3. Wait for Gitea to initialize
Write-Host "[3/4] Waiting for service to become available..." -ForegroundColor Yellow
while ($true) {
    try {
        # -UseBasicParsing prevents IE engine security warnings
        $response = Invoke-WebRequest -Uri "http://localhost:$DockerPort/api/v1/version" -Method Get -ErrorAction SilentlyContinue -UseBasicParsing
        if ($response.StatusCode -eq 200) { break }
    } catch { }
    Write-Host "." -NoNewline
    Start-Sleep -Seconds 2
}
Write-Host "`n   > Gitea API is UP."

# 4. Automatically recreate the Admin User and generate a Token
Write-Host "[4/4] Provisioning admin user and token..." -ForegroundColor Yellow

# Create the admin user Shayke inside the container
docker exec -u git gitea gitea admin user create --username $User --password $Pass --email $Email --admin | Out-Null

# Small pause to allow the user creation to persist in the DB before generating token
Start-Sleep -Seconds 2

# Generate the access token
$tokenOutput = docker exec -u git gitea gitea admin user generate-access-token --username $User --token-name ProvengoToken

# Extract the token string using a robust 40-character hex regex
if ($tokenOutput -match "([a-f0-9]{40})") {
    $newToken = $matches[1]
} else {
    Write-Host "DEBUG: Full Gitea Output was: $tokenOutput" -ForegroundColor Red
    Write-Error "Failed to extract token from Gitea output."
    return
}

# 5. SYNC STEP: Update the Interface file with the new token
if (Test-Path $InterfaceFile) {
    Write-Host "`nSyncing credentials to $InterfaceFile..." -ForegroundColor Cyan
    $content = Get-Content -Path $InterfaceFile -Raw
    
    # Replace the placeholders used by the interface emitter
    $content = $content -replace "__GITEA_TOKEN__", $newToken
    $content = $content -replace "__GITEA_USER__", $User
    
    $content | Set-Content -Path $InterfaceFile -Encoding UTF8
    Write-Host "   > Interface Synchronized successfully." -ForegroundColor Green
} else {
    Write-Host "`nWarning: Interface file not found at $InterfaceFile. Please run your Python emitter script first." -ForegroundColor Yellow
}

Write-Host "`nGitea is ready for Provengo testing!" -ForegroundColor Green
Write-Host "URL: http://localhost:$DockerPort" -ForegroundColor Gray
Write-Host "User: $User" -ForegroundColor Gray
Write-Host "New Token: $newToken" -ForegroundColor Green