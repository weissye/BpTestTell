$logFile = "provengo_output.log"
$errFile = "provengo_error.log"



Write-Host "Starting Provengo..." -ForegroundColor Cyan

# Start the Provengo process
# Redirecting stdout and stderr to separate files to avoid "same file" error
$p = Start-Process -FilePath "provengo" -ArgumentList "run", "." -PassThru -NoNewWindow -RedirectStandardOutput $logFile -RedirectStandardError $errFile

$found = $false
try {
    # Loop while the process is running
    while (!$p.HasExited) {
        Start-Sleep -Milliseconds 500
        # Check if the file contains the failure string
        # Using -ErrorAction SilentlyContinue in case the file is briefly locked or not yet created
        if (Select-String -Path $logFile -Pattern "### Switching to test fail mode. ###" -Quiet -ErrorAction SilentlyContinue) {
            $found = $true
            break
        }
    }
}
finally {
    if ($found) {
        # If found, kill the process if it's still running
        if (!$p.HasExited) { 
            # Use taskkill to kill the process tree (including the Java process)
            taskkill /F /T /PID $p.Id 
        }
        Write-Host "$([char]0x2714) Bug found" -ForegroundColor Green
    }
    else {
        # Process exited or we missed the string (check one last time)
        if (Select-String -Path $logFile -Pattern "### Switching to test fail mode. ###" -Quiet -ErrorAction SilentlyContinue) {
            Write-Host "$([char]0x2714) Bug found" -ForegroundColor Green
        }
        else {
            Write-Host "$([char]0x2716) Bug not found" -ForegroundColor Red
        }
    }
}
