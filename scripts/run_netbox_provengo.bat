@echo off
setlocal EnableExtensions EnableDelayedExpansion

:: ===============================================
:: Run Netbox Provengo Tests
:: ===============================================
:: Simple wrapper to run Provengo tests for Netbox
::
:: Prerequisites:
::   - Mock server running on port 5000
::   - Provengo project generated via run_netbox_pipeline.bat
::
:: Usage: scripts\run_netbox_provengo.bat [options]
::   Options are passed directly to provengo run

:: Get repository root
for %%I in ("%~dp0..\") do set "ROOT=%%~fI"

set "PG_DIR=%ROOT%\provengo\netbox"

if not exist "%PG_DIR%" (
    echo [ERR] Provengo project not found at: %PG_DIR%
    echo       Run scripts\run_netbox_pipeline.bat first to generate it.
    exit /b 1
)

:: Check if mock server is running
echo [INFO] Checking if mock server is running on port 5000...
powershell -Command "& {$null = Test-NetConnection -ComputerName 127.0.0.1 -Port 5000 -InformationLevel Quiet -WarningAction SilentlyContinue}" 2>nul
if errorlevel 1 (
    echo [WARN] Mock server may not be running on port 5000
    echo        Start it with: cd mocks ^& python netbox_mock.py
    echo.
    echo        Continuing anyway...
    echo.
)

echo [INFO] Running Provengo tests for Netbox...
echo [INFO] CWD: %PG_DIR%
echo.

cd /d "%PG_DIR%"
provengo run -Dhost=127.0.0.1 -Dport=5000 %*

endlocal
