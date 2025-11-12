@echo off
setlocal EnableExtensions EnableDelayedExpansion

REM ============================================
REM DET HLS GOLD from graphs (encoding-safe list reader)
REM Usage:
REM   scripts\hls\build_hls_gold_det_for_list.bat  config\suts_and_rw.txt  [auto|7_suts_llm_provider|real_world_llm_provider]
REM ============================================

REM --- roots ---
set "ROOT=%~dp0..\.."
for %%# in ("%ROOT%") do set "ROOT=%%~f#"
set "PY=%ROOT%\.venv\Scripts\python.exe"

REM --- args ---
set "LIST=%~1"
set "MODE=%~2"
if not defined LIST (
  echo [ERR ] list file is required 1>&2
  exit /b 2
)
if not exist "%LIST%" (
  echo [ERR ] list file "%LIST%" not found 1>&2
  exit /b 2
)
if not defined MODE set "MODE=auto"

echo ============================================
echo DET HLS GOLD from graphs
echo LIST : "%LIST%"
echo ROOT : %ROOT%
echo PY   : %PY%
echo MODE : %MODE%
echo ============================================

REM --- counters ---
set /a OK=0, SKIP=0, ERR=0

REM --- helper: resolve provider by SUT name ---
:resolve_provider
REM in:  %1 = sut name ; out env var PROV set to provider
set "PROV="
for %%S in (banking config_control ecommerce factory garage library pharmacy) do (
  if /I "%%S"=="%~1" set "PROV=7_suts_llm_provider"
)
if not defined PROV set "PROV=real_world_llm_provider"
goto :eof

REM --- pick python ---
if exist "%PY%" ( set "PYTHON=%PY%" ) else ( set "PYTHON=python" )

REM --- iterate list via PowerShell (handles UTF-8/UTF-16/etc) ---
for /f "usebackq delims=" %%L in (`powershell -NoProfile -Command ^
  "$ErrorActionPreference='Stop';" ^
  "Get-Content -LiteralPath '%LIST%' | ForEach-Object{ $_.Trim() } | Where-Object { $_ -ne '' -and -not $_.StartsWith('#') }"`) do (

  set "SUT=%%L"
  if /I "%MODE%"=="auto" (
    call :resolve_provider "!SUT!"
  ) else (
    set "PROV=%MODE%"
  )

  echo [RUN ] det GOLD: !SUT! (!PROV!)

  set "GRAPH=%ROOT%\artifacts\analysis\!PROV!\!SUT!\graph.json"
  set "OUTDIR=%ROOT%\artifacts\hls_det\!PROV!\!SUT!"
  set "OUT=%OUTDIR%\hls_gold.json"

  if not exist "%OUTDIR%" mkdir "%OUTDIR%" >nul 2>&1

  if not exist "%GRAPH%" (
    echo   [SKIP] missing graph: "%GRAPH%"
    set /a SKIP+=1
    goto :next
  )

  if not exist "%ROOT%\scripts\hls\build_hls_gold_det.py" (
    echo   [ERR ] missing builder: scripts\hls\build_hls_gold_det.py
    set /a ERR+=1
    goto :next
  )

  "%PYTHON%" "%ROOT%\scripts\hls\build_hls_gold_det.py" ^
      --sut "!SUT!" ^
      --provider "!PROV!" ^
      --graph "%GRAPH%" ^
      --out "%OUT%"
  if errorlevel 1 (
    echo   [ERR ] python failed for !SUT!
    set /a ERR+=1
  ) else (
    echo   [OK  ] wrote !OUT!
    set /a OK+=1
  )
  :next
)

echo --------------------------------------------
echo DONE. OK=%OK% SKIP=%SKIP% ERR=%ERR%
exit /b 0
