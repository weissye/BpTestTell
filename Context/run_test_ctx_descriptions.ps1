param(
    [Parameter(ValueFromRemainingArguments = $true)]
    [string[]] $ProvengoArgs
)

$descriptionPattern = 'description:"((?:\\.|[^"\\])*)"'

Push-Location $PSScriptRoot
try {
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
