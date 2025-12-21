param (
    [int]$TimeLimitSeconds = 300
)

$bugs = @("A_LOGIC", "B_LIFECYCLE", "C_UNIQUENESS", "D_INTEGRITY", "E_WORKFLOW")
$results = @()
$logFile = "provengo_benchmark.log"

# Define function to run a single benchmark iteration
function Run-BenchmarkIteration {
    param (
        [string]$BugID
    )

    Write-Host "`n==========================================" -ForegroundColor Cyan
    Write-Host "Starting Benchmark for Bug: $BugID" -ForegroundColor Cyan
    Write-Host "==========================================" -ForegroundColor Cyan

    # Set Environment Variable for the Mock
    $env:ACTIVE_BUG = $BugID

    try {
        # Start Mock Server
        $mockProcess = Start-Process -FilePath "python" -ArgumentList "..\..\mocks\NetBox\netbox_benchmark.py" -PassThru -NoNewWindow
        Start-Sleep -Seconds 3 # Give it time to initialize

        # Clean Log
        if (Test-Path $logFile) { Remove-Item $logFile }

        # Start Provengo
        $provengoProcess = Start-Process -FilePath "provengo" -ArgumentList "run", "." -PassThru -NoNewWindow -RedirectStandardOutput $logFile
        $startTime = Get-Date

        $bugFound = $false
        $foundTime = 0
        $running = $true

        while ($running) {
            # Check for Provengo Exit
            if ($provengoProcess.HasExited) {
                Write-Host "Provengo finished execution." -ForegroundColor Yellow
                $running = $false
                break
            }

            # Check Time Limit
            $elapsed = (Get-Date) - $startTime
            if ($elapsed.TotalSeconds -gt $TimeLimitSeconds) {
                Write-Host "Time Limit ($TimeLimitSeconds s) Exceeded." -ForegroundColor Yellow
                Stop-Process -Id $provengoProcess.Id -Force -ErrorAction SilentlyContinue
                $running = $false
                break
            }

            # Check Logs
            $content = Get-Content $logFile -ErrorAction SilentlyContinue | Out-String
            if ($content) {
                # Check for "Switching to test fail mode" (The signal we agreed on)
                if ($content -match "### Switching to test fail mode. ###") {
                    $bugFound = $true
                    $foundTime = $elapsed.TotalSeconds
                    Write-Host "BUG DETECTED: $BugID at $($foundTime)s" -ForegroundColor Green
                    
                    # Stop Provengo immediately
                    Stop-Process -Id $provengoProcess.Id -Force -ErrorAction SilentlyContinue
                    $running = $false
                    break
                }
            }
            Start-Sleep -Seconds 2
        }

        return [PSCustomObject]@{
            BugID       = $BugID
            Found       = $bugFound
            TimeSeconds = if ($bugFound) { $foundTime } else { $TimeLimitSeconds }
            Status      = if ($bugFound) { "DETECTED" } else { "MISSED" }
        }

    }
    finally {
        # cleanup
        Stop-Process -Id $mockProcess.Id -Force -ErrorAction SilentlyContinue
        if (!$provengoProcess.HasExited) { Stop-Process -Id $provengoProcess.Id -Force -ErrorAction SilentlyContinue }
    }
}

# --- Main Loop ---

Write-Host "Starting Sequential Benchmark Suite..." -ForegroundColor Magenta

foreach ($bug in $bugs) {
    $res = Run-BenchmarkIteration -BugID $bug
    $results += $res
}

# --- Report ---

Write-Host "`n`nbenchmark Results Summary" -ForegroundColor White -BackgroundColor Black
$results | Format-Table -AutoSize

# Optional: Export to CSV
$results | Export-Csv -Path "benchmark_results.csv" -NoTypeInformation
Write-Host "Results saved to benchmark_results.csv" -ForegroundColor Gray
