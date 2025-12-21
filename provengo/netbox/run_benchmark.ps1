param (
    [int]$TimeLimitSeconds = 300,
    [string[]]$TargetBugs
)

$bugs = @("A_LOGIC", "B_LIFECYCLE", "C_UNIQUENESS", "D_INTEGRITY", "E_WORKFLOW", "F_CRASH_500", "G_INPUT_VALIDATION")
$results = @()
$restlerDir = "restler_working_dir"
$restlerCompileDir = "$restlerDir\Compile"
$restlerResultsDir = "$restlerDir\Fuzz" # RESTLER output dir

# --- Helper: Run Provengo ---
function Run-ProvengoIteration {
    param (
        [string]$BugID
    )
    Write-Host "  -> Running Provengo..." -ForegroundColor Cyan
    
    $logFile = "provengo_benchmark_${BugID}.log"
    
    # Clean Log
    if (Test-Path $logFile) { Remove-Item $logFile -ErrorAction SilentlyContinue }

    # Start Provengo
    $provengoProcess = Start-Process -FilePath "provengo" -ArgumentList "run", "." -PassThru -NoNewWindow -RedirectStandardOutput $logFile
    $startTime = Get-Date

    $bugFound = $false
    $foundTime = 0
    $running = $true

    while ($running) {
        if ($provengoProcess.HasExited) {
            $running = $false; break
        }
        $elapsed = (Get-Date) - $startTime
        if ($elapsed.TotalSeconds -gt $TimeLimitSeconds) {
            taskkill /F /T /PID $provengoProcess.Id
            $running = $false; break
        }

        # Check Logs for "Switching to test fail mode"
        $content = Get-Content $logFile -ErrorAction SilentlyContinue | Out-String
        if ($content -and $content -match "### Switching to test fail mode. ###") {
            $bugFound = $true
            $foundTime = $elapsed.TotalSeconds
            taskkill /F /T /PID $provengoProcess.Id
            $running = $false; break
        }
        Start-Sleep -Seconds 2
    }
    
    if (!$provengoProcess.HasExited) { taskkill /F /T /PID $provengoProcess.Id }

    return @{
        Found = $bugFound
        Time  = if ($bugFound) { $foundTime } else { $TimeLimitSeconds }
    }
}

# --- Helper: Run RESTLER ---
function Run-RestlerIteration {
    param (
        [string]$BugID
    )
    Write-Host "  -> Running RESTLER..." -ForegroundColor Cyan

    # Calculate hours for RESTLER (it needs hours, e.g. 0.1)
    $hours = [math]::Round($TimeLimitSeconds / 3600, 4)
    if ($hours -lt 0.01) { $hours = 0.01 } # Minimum sanity

    # Resolve Absolute Path for Compile Dir (Prevent RESTLER usage error)
    $absCompileDir = (Resolve-Path "$restlerCompileDir").Path

    # Start RESTLER
    # Define arguments using an array for better handling
    $grammarPath = "$absCompileDir\grammar.py"
    $dictPath = "$absCompileDir\dict.json"
    $settingsPath = "$absCompileDir\engine_settings.json"
    
    $restlerArgs = @(
        "fuzz",
        "--grammar_file", $grammarPath,
        "--dictionary_file", $dictPath,
        "--settings", $settingsPath,
        "--time_budget", "$hours",
        "--target_ip", "127.0.0.1",
        "--target_port", "5000",
        "--no_ssl"
    )
    
    Write-Host "Running: Restler.exe $restlerArgs" -ForegroundColor DarkGray
    $restlerProcess = Start-Process -FilePath "C:\Users\geraw\provengo\restler-fuzzer\restler_bin\restler\Restler.exe" -ArgumentList $restlerArgs -PassThru -NoNewWindow
    $startTime = Get-Date

    # RESTLER handles its own timeout, but we monitor to be safe
    while (!$restlerProcess.HasExited) {
        $elapsed = (Get-Date) - $startTime
        if ($elapsed.TotalSeconds -gt ($TimeLimitSeconds + 60)) {
            # Grace period
            Stop-Process -Id $restlerProcess.Id -Force -ErrorAction SilentlyContinue
        }
        Start-Sleep -Seconds 5
    }

    # Check Results
    # RESTLER struct: RestlerResults/Experiment.../bug_buckets/bug_buckets.txt
    # We look for the most recent folder in RestlerResults
    # We look for the most recent folder in RestlerResults
    if (Test-Path "$restlerDir\Fuzz\RestlerResults") {
        $lastExp = Get-ChildItem -Path "$restlerDir\Fuzz\RestlerResults" -Directory | Sort-Object LastWriteTime -Descending | Select-Object -First 1
    }
    else {
        $lastExp = $null
    }
    
    $bugFound = $false
    $foundTime = $TimeLimitSeconds # Hard to get exact time from RESTLER without parsing logs deeply. Default to limit/found.

    if ($lastExp) {
        $bucketsFile = "$($lastExp.FullName)\bug_buckets\bug_buckets.txt"
        if (Test-Path $bucketsFile) {
            $cnt = (Get-Content $bucketsFile | Measure-Object).Count
            if ($cnt -gt 0) {
                $bugFound = $true
                # Try to guess time from logs? For now, we just say found.
            }
        }
    }

    return @{
        Found = $bugFound
        Time  = $TimeLimitSeconds # RESTLER usually runs full budget unless crashes are catastrophic
    }
}

# --- Main Driver ---

function Run-FullBenchmark {
    param([string]$BugID)

    Write-Host "`n==========================================" -ForegroundColor Cyan
    Write-Host "Benchmark Bug: $BugID" -ForegroundColor Cyan
    Write-Host "==========================================" -ForegroundColor Cyan

    # 1. Start Mock for Provengo
    $env:ACTIVE_BUG = $BugID
    $mockP = Start-Process -FilePath "python" -ArgumentList "..\..\mocks\NetBox\netbox_benchmark.py" -PassThru -NoNewWindow
    Start-Sleep -Seconds 3

    try {
        $pRes = Run-ProvengoIteration -BugID $BugID
    }
    finally {
        Stop-Process -Id $mockP.Id -Force -ErrorAction SilentlyContinue # Stop mock
    }
    Start-Sleep -Seconds 2

    # 2. Start Mock for RESTLER
    $env:ACTIVE_BUG = $BugID
    $mockR = Start-Process -FilePath "python" -ArgumentList "..\..\mocks\NetBox\netbox_benchmark.py" -PassThru -NoNewWindow
    Start-Sleep -Seconds 3

    try {
        $rRes = Run-RestlerIteration -BugID $BugID
    }
    finally {
        Stop-Process -Id $mockR.Id -Force -ErrorAction SilentlyContinue
    }
    
    return [PSCustomObject]@{
        BugID         = $BugID
        ProvengoFound = $pRes.Found
        ProvengoTime  = $pRes.Time
        RestlerFound  = $rRes.Found
        RestlerTime   = $rRes.Time
    }
}


Write-Host "Starting Provengo vs RESTLER Benchmark Suite..." -ForegroundColor Magenta

if ($TargetBugs) {
    $bugs = $bugs | Where-Object { $TargetBugs -contains $_ }
    if ($bugs.Count -eq 0) {
        Write-Warning "No valid bugs found matching '$TargetBugs'"
        exit
    }
}

foreach ($bug in $bugs) {
    $res = Run-FullBenchmark -BugID $bug
    $results += $res
}

Write-Host "`n`nBenchmark Results Summary" -ForegroundColor White -BackgroundColor Black
$results | Format-Table -AutoSize

$results | Export-Csv -Path "benchmark_results_comparison.csv" -NoTypeInformation
Write-Host "Results saved to benchmark_results_comparison.csv" -ForegroundColor Gray
