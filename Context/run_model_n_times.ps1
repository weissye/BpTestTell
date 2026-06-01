<#
Run from the Context directory:
    .\run_model_n_times.ps1
    .\run_model_n_times.ps1 -Runs 25
#>

param(
    [int] $Runs = 10,

    [Parameter(ValueFromRemainingArguments = $true)]
    [string[]] $ProvengoArgs
)

if ($Runs -lt 1) {
    Write-Error "Runs must be at least 1."
    exit 1
}

$script:failedRun = $null

Push-Location $PSScriptRoot
try {
    for ($run = 1; $run -le $Runs; $run++) {
        Write-Host "Run $run/$Runs" -ForegroundColor Cyan

        & provengo run test_ctx @ProvengoArgs
        $exitCode = $LASTEXITCODE

        if ($exitCode -ne 0) {
            $script:failedRun = $run
            Write-Host "Run $run/$Runs failed with exit code $exitCode." -ForegroundColor Red
            exit $exitCode
        }

        Write-Host "Run $run/$Runs succeeded." -ForegroundColor Green
    }

    Write-Host "All $Runs runs succeeded." -ForegroundColor Green
    exit 0
}
finally {
    Pop-Location
}
