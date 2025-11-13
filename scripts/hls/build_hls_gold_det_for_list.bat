@echo off
setlocal EnableExtensions EnableDelayedExpansion

REM ===== Toggle verbose debug prints (1 = on, 0 = off) =====
set "DEBUG=1"

goto :main

:: -------------------------------------------------
:: Trim both sides
::   call :trim "text" outvar
:: -------------------------------------------------
:trim
set "t=%~1"
setlocal EnableDelayedExpansion
for /f "tokens=* delims= " %%A in ("!t!") do set "t=%%A"
:trim_tail
if "!t!"=="" goto :trim_done
if "!t:~-1!"==" " (
  set "t=!t:~0,-1!"
  goto :trim_tail
)
:trim_done
endlocal & set "%~2=%t%"
goto :eof

:: -------------------------------------------------
:: Strip UTF-8 BOM if present (ï»¿)
::   call :strip_bom "text" outvar
:: -------------------------------------------------
:strip_bom
set "line=%~1"
setlocal EnableDelayedExpansion
if defined line (
  set "first3=!line:~0,3!"
  if "!first3!"=="ï»¿" set "line=!line:~3!"
)
endlocal & set "%~2=%line%"
goto :eof

:: -------------------------------------------------
:: Normalize a list line to a SUT token, or blank if skip
:: - removes BOM, trims
:: - skips lines starting with # or ;, or containing ===
:: - takes first whitespace-delimited token (no regex gate)
::   e.g. "banking (7_suts_llm_provider)" -> banking
::   call :normalize_to_sut "raw line" outvar
:: -------------------------------------------------
:normalize_to_sut
set "raw=%~1"
call :strip_bom "%raw%" cleaned
call :trim "%cleaned%" cleaned

if not defined cleaned ( set "%~2=" & goto :eof )

REM skip comment / header lines
set "firstchar=%cleaned:~0,1%"
if "%firstchar%"=="#" ( set "%~2=" & goto :eof )
if "%firstchar%"==";" ( set "%~2=" & goto :eof )

echo(%cleaned% | find "===" >nul
if not errorlevel 1 ( set "%~2=" & goto :eof )

for /f "tokens=1" %%s in ("%cleaned%") do set "token=%%s"

REM If we have any first token at all, return it.
if defined token ( set "%~2=%token%" ) else ( set "%~2=" )

goto :eof

:: -------------------------------------------------
:: Decide provider in auto mode -> sets PROV
:: -------------------------------------------------
:resolve_provider
set "PROV="
for %%S in (banking config_control ecommerce factory garage library pharmacy) do (
  if /I "%%S"=="%~1" set "PROV=7_suts_llm_provider"
)
if not defined PROV set "PROV=real_world_llm_provider"
goto :eof

:: -------------------------------------------------
:: Process one SUT
::   call :process_one "<sutname>"
:: -------------------------------------------------
:process_one
setlocal EnableDelayedExpansion
set "SUT=%~1"

if /I "%MODE%"=="auto" (
  call :resolve_provider "%SUT%"
) else (
  set "PROV=%MODE%"
)

if "%DEBUG%"=="1" echo [DBG] SUT="%SUT%"  -> Provider="%PROV%"

set "GRAPH=%ROOT%\artifacts\analysis\%PROV%\%SUT%\graph.json"
set "OUTDIR=%ROOT%\artifacts\hls_det\%PROV%\%SUT%"
set "OUT=%OUTDIR%\hls_gold.json"

if not exist "%OUTDIR%" (
  if "%DEBUG%"=="1" echo [DBG] MKDIR "%OUTDIR%"
  mkdir "%OUTDIR%" >nul 2>&1
)

if "%DEBUG%"=="1" echo [DBG] GRAPH="%GRAPH%"

if not exist "%GRAPH%" (
  echo   [SKIP] missing graph: "%GRAPH%"
  endlocal & set /a SKIP+=1 & goto :eof
)

REM Preferred DSL under models; fallback under artifacts\analysis
if /I "%PROV%"=="7_suts_llm_provider" (
  set "DSL=%ROOT%\models\hls\SUTs\%SUT%\dsl_map.json"
) else (
  set "DSL=%ROOT%\models\hls\RWs\%SUT%\dsl_map.json"
)
if not exist "%DSL%" (
  set "DSL=%ROOT%\artifacts\analysis\%PROV%\%SUT%\dsl_map.json"
)

if "%DEBUG%"=="1" echo [DBG] DSL="%DSL%"

if not exist "%DSL%" (
  echo   [ERR ] missing DSL map for %SUT% (^checked models and artifacts\analysis^)
  endlocal & set /a ERR+=1 & goto :eof
)

for %%P in ("%PYTHON%")  do set "PYABS=%%~fP"
for %%B in ("%BUILDER%") do set "BLDABS=%%~fB"

if "%DEBUG%"=="1" echo [DBG] CMD: "!PYABS!" "!BLDABS!" --sut "%SUT%" --provider "%PROV%" --dsl_map "%DSL%" --out "%OUT%"

"!PYABS!" "!BLDABS!" --sut "%SUT%" --provider "%PROV%" --dsl_map "%DSL%" --out "%OUT%"
if errorlevel 1 (
  echo   [ERR ] python failed for %SUT%
  endlocal & set /a ERR+=1 & goto :eof
) else (
  echo   [OK  ] wrote %OUT%
  endlocal & set /a OK+=1 & goto :eof
)

:: -------------------------------------------------
:: MAIN
:: -------------------------------------------------
:main
set "ROOT=%~dp0..\.."
for %%R in ("%ROOT%") do set "ROOT=%%~fR"

set "PY=%ROOT%\.venv\Scripts\python.exe"
set "BUILDER=%ROOT%\scripts\hls\build_hls_gold_det.py"

set "LIST=%~1"
set "MODE=%~2"
if not defined LIST (
  echo [ERR ] Usage: %~nx0 ^<list.txt^> [auto^|7_suts_llm_provider^|real_world_llm_provider]
  exit /b 2
)
if not defined MODE set "MODE=auto"

if exist "%PY%" ( set "PYTHON=%PY%" ) else ( set "PYTHON=python" )

echo ============================================
echo DET HLS GOLD from graphs
echo LIST : "%LIST%"
echo ROOT : %ROOT%
echo PY   : %PYTHON%
echo MODE : %MODE%
echo ============================================
if "%DEBUG%"=="1" echo [DBG] BUILDER="%BUILDER%"

if not exist "%LIST%" (
  echo [ERR ] list file not found: "%LIST%"
  exit /b 2
)
if not exist "%BUILDER%" (
  echo [ERR ] missing builder script: "%BUILDER%"
  exit /b 2
)

set /a OK=0, SKIP=0, ERR=0

REM >>>>>>> The critical fix: pass !LINE! (runtime) into subroutine <<<<<<<
for /f "usebackq delims=" %%L in ("%LIST%") do (
  set "LINE=%%L"
  if "%DEBUG%"=="1" echo [DBG] RAW="!LINE!"
  call :normalize_to_sut "!LINE!" SUT
  if "%DEBUG%"=="1" echo [DBG] NORM="!SUT!"
  if defined SUT (
    call :process_one "!SUT!"
  ) else (
    if "%DEBUG%"=="1" echo [DBG] SKIP ^(comment/header/blank^)
  )
)

echo --------------------------------------------
echo DONE. OK=%OK% SKIP=%SKIP% ERR=%ERR%
exit /b 0
