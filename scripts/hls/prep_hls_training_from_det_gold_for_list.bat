@echo off
setlocal enableextensions enabledelayedexpansion

if "%~1"=="" (
  echo Usage: %~nx0 LIST.TXT [7_suts_llm_provider^|real_world_llm_provider]
  exit /b 1
)
set "LIST=%~1"
set "PROV=%~2"
if "%PROV%"=="" set "PROV=7_suts_llm_provider"

rem Resolve repo ROOT = scripts\hls\..\..
set "ROOT=%~dp0..\.."
for %%I in ("%ROOT%") do set "ROOT=%%~fI"

set "PY=%ROOT%\.venv\Scripts\python.exe"
set "OUT_DIR=%ROOT%\artifacts\hls_model\datasets\%PROV%"
set "OUT=%OUT_DIR%\train.jsonl"

echo ============================================
echo TRAIN JSONL from det GOLD
echo LIST : "%LIST%"
echo ROOT : %ROOT%
echo PY   : %PY%
echo PROV : %PROV%
echo OUT  : %OUT%
echo ============================================

mkdir "%OUT_DIR%" >nul 2>&1
del "%OUT%" >nul 2>&1

rem iterate list, skip blanks and lines starting with # or ;
for /f "usebackq delims=" %%S in ("%LIST%") do (
  set "S=%%~S"
  if not "!S!"=="" if "!S:~0,1!" NEQ "#" if "!S:~0,1!" NEQ ";" (

    rem prefer NEW location, fallback to legacy
    set "GOLD1=%ROOT%\artifacts\hls_det\%PROV%\!S!\hls_gold.json"
    set "GOLD2=%ROOT%\artifacts\hls_gold_det\%PROV%\!S!\hls_gold.json"

    set "GOLD="
    if exist "!GOLD1!" set "GOLD=!GOLD1!"
    if not defined GOLD if exist "!GOLD2!" set "GOLD=!GOLD2!"

    if not defined GOLD (
      echo [SKIP] no det GOLD for !S!
    ) else (
      "%PY%" "%ROOT%\scripts\hls\prep_hls_training_from_det_gold.py" ^
        --provider "%PROV%" ^
        --sut "!S!" ^
        --gold "!GOLD!" ^
        --out  "%OUT%"
      if errorlevel 1 (
        echo   [ERR ] python failed for !S!
      ) else (
        echo   [OK  ] appended !S!
      )
    )
  )
)

echo [DONE] %~nx0
exit /b 0
