param(
    [Parameter(ValueFromRemainingArguments = $true)]
    [string[]] $ProvengoArgs
)

$descriptionPattern = 'description:"((?:\\.|[^"\\])*)"'

Push-Location $PSScriptRoot
try {
    & python .\reset_sut_db.py
    $resetExitCode = $LASTEXITCODE
    if ($resetExitCode -ne 0) {
        Write-Host "Failed while resetting the SUT database." -ForegroundColor Red
        exit $resetExitCode
    }

    & provengo run test_ctx @ProvengoArgs 2>&1 | ForEach-Object {
        $line = $_.ToString()

        if ($line -like '*Selected:*' -and $line -match $descriptionPattern) {
            $Matches[1] -replace '\\"', '"' -replace '\\\\', '\'
        }
        else {
            $line
        }
    }

    exit $LASTEXITCODE
}
finally {
    Pop-Location
}
