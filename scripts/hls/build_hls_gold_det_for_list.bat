@echo off
setlocal EnableExtensions EnableDelayedExpansion

rem ===== Inputs =====
set "LIST=%~1"
if not defined LIST set "LIST=config\suts_and_rw.txt"

set "MODE=%~2"
if not defined MODE set "MODE=auto"

set "ROOT=%CD%"
set "PY=%ROOT%\.venv\Scripts\python.exe"
if not exist "%PY%" set "PY=python"

set "BUILDER=%ROOT%\scripts\hls\build_hls_gold_det.py"

set "OK=0"
set "ERR=0"
set "SKIP=0"

echo ============================================
echo DET HLS GOLD from graphs
echo LIST : "%LIST%"
echo ROOT : %ROOT%
echo PY   : %PY%
echo MODE : %MODE%
echo ============================================

if not exist "%LIST%" (
  echo [ERR ] list file not found: "%LIST%"
  exit /b 1
)

if not exist "%BUILDER%" (
  echo [ERR ] builder script not found: "%BUILDER%"
  exit /b 1
)

rem ---- Build a clean provider|sut list with PowerShell (keeps parentheses out of the batch loop) ----
set "TMPPAIRS=%TEMP%\hls_pairs_%RANDOM%%RANDOM%.txt"
del "%TMPPAIRS%" >nul 2>&1

pwsh -NoProfile -ExecutionPolicy Bypass -Command ^
  "$list = [System.IO.Path]::GetFullPath('%LIST%');" ^
  "$mode = '%MODE%';" ^
  "$cur = $null;" ^
  "$bom = [char]0xFEFF;" ^
  "Get-Content -LiteralPath $list | ForEach-Object {" ^
  "  $line = $_;" ^
  "  if ($line.StartsWith($bom)) { $line = $line.TrimStart($bom) }" ^
  "  $line = $line.Trim();" ^
  "  if ([string]::IsNullOrWhiteSpace($line)) { return }" ^
  "  if ($line[0] -eq ';') {" ^
  "    if ($line -match '\(([^)]+)\)') { $cur = $Matches[1] } else { $cur = $null }" ^
  "    return" ^
  "  }" ^
  "  if ($null -eq $cur) { return }" ^
  "  if ($mode -ne 'auto' -and $cur -ne $mode) { return }" ^
  "  if ($line -match '^\s*[;#]') { return }" ^
  "  $sut = $line.Trim();" ^
  "  if ($sut.Length -eq 0) { return }" ^
  "  [Console]::WriteLine($cur + '|' + $sut)" ^
  "} " > "%TMPPAIRS%"
if errorlevel 1 (
  echo [ERR ] failed to parse "%LIST%"
  exit /b 1
)

rem ---- Loop provider|sut pairs safely ----
for /f "usebackq tokens=1,2 delims=|" %%A in ("%TMPPAIRS%") do (
  set "PROV=%%A"
  set "SUT=%%B"

  if /I "!PROV!"=="7_suts_llm_provider" (
    set "DSL=%ROOT%\models\hls\SUTs\!SUT!\dsl_map.json"
  ) else (
    set "DSL=%ROOT%\models\hls\RWs\!SUT!\dsl_map.json"
  )

  set "OUTDIR=%ROOT%\artifacts\hls_det\!PROV!\!SUT!"
  set "OUT=!OUTDIR!\hls_gold.json"

  echo [RUN ] det GOLD: !SUT! [!PROV!]

  if not exist "!DSL!" (
    echo   [SKIP] missing DSL map: "!DSL!"
    set /a SKIP+=1
  ) else (
    if not exist "!OUTDIR!" mkdir "!OUTDIR!" >nul 2>&1
    "%PY%" "%BUILDER%" --sut "!SUT!" --provider "!PROV!" --dsl_map "!DSL!" --out "!OUT!"
    if errorlevel 1 (
      echo   [ERR ] python failed for !SUT!
      set /a ERR+=1
    ) else (
      echo   [OK  ] wrote !OUT!
      set /a OK+=1
    )
  )
)

del "%TMPPAIRS%" >nul 2>&1

echo --------------------------------------------
echo DONE. OK=!OK! SKIP=!SKIP! ERR=!ERR!
exit /b 0
