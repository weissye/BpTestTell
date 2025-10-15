@echo off
setlocal EnableExtensions

:: Usage:
::   emit_hls_all_in_one.bat <NONDET_GOLD.json> [<ACTIVE_SAMPLES.json>] <OUT_JS>
::
:: If ACTIVE_SAMPLES.json is missing or "", we emit PASSIVE-only.

set "GOLD=%~1"
set "ACTIVE=%~2"
set "OUT=%~3"

if "%GOLD%"=="" (
  echo [ERROR] Usage: scripts\readable\emit_hls_all_in_one.bat GOLD [ACTIVE] OUT
  exit /b 2
)

if "%OUT%"=="" (
  :: allow call with only two args: GOLD OUT
  set "OUT=%ACTIVE%"
  set "ACTIVE="
)

for %%D in ("%OUT%") do if not exist "%%~dpD" mkdir "%%~dpD" 2>nul

if "%ACTIVE%"=="" (
  python -u scripts\readable\emit_hls_all_in_one.py --gold "%GOLD%" --out "%OUT%" || exit /b 1
) else (
  python -u scripts\readable\emit_hls_all_in_one.py --gold "%GOLD%" --active "%ACTIVE%" --out "%OUT%" || exit /b 1
)

echo [READABLE] %OUT%
exit /b 0
