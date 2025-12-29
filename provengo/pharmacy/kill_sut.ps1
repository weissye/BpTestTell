Get-NetTCPConnection -LocalPort 5000 -ErrorAction SilentlyContinue | 
    Where-Object { $_.OwningProcess -gt 4 } | 
    ForEach-Object { 
        Write-Host "Killing process ID $($_.OwningProcess) on port 5000..." -ForegroundColor Yellow
        Stop-Process -Id $_.OwningProcess -Force -ErrorAction SilentlyContinue
    }