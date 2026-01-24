# Configuration
$SutName = "Petstore"
$DockerImage = "openapitools/openapi-petstore"
$DockerPort = 8080
$ApiKey = "special-key"

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host " 🐳 STARTING PETSHOP SUT ONLY (CLEAN DB) " -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan

# 1. Cleanup existing SUT containers
Write-Host "[1/2] Checking for existing SUT containers..." -ForegroundColor Yellow
$running = docker ps -q --filter "ancestor=$DockerImage"
if ($running) {
    Write-Host "   > Stopping existing SUT ($running)..."
    docker kill $running | Out-Null
}

# 2. Start fresh SUT
Write-Host "[2/2] Launching fresh SUT..." -ForegroundColor Yellow
# Settings:
# - BASE_PATH=/v3 to match your spec
# - API_KEY=special-key for authentication
# - DISABLE_OAUTH=1 to simplify testing
docker run --rm -d -p $DockerPort":8080" `
    -e "SWAGGER_HOST=http://localhost:$DockerPort" `
    -e "SWAGGER_BASE_PATH=/v3" `
    -e "API_KEY=$ApiKey" `
    -e "DISABLE_OAUTH=1" `
    $DockerImage | Out-Null

Write-Host "`n✅ SUT is running at: http://localhost:$DockerPort/v3" -ForegroundColor Green
Write-Host "   (Swagger UI available at: http://localhost:$DockerPort)" -ForegroundColor Gray