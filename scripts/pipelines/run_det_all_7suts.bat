@echo off
setlocal EnableExtensions EnableDelayedExpansion
rem Pure deterministic DET from OpenAPI for the 7 SUTs.
rem Emits: *_llm_gold_ops.json, *_det_gold.json, *_llm_gold.json and *_shards.
rem No LLM/provider/model/temperature involved.

rem --- repo root (this file lives in scripts\pipelines) ---
pushd "%~dp0\..\.."
set "ROOT=%CD%"

rem --- python ---
set "PY=%ROOT%\.venv\Scripts\python.exe"
if not exist "%PY%" set "PY=python"

rem --- generator (already used by the RW pipeline) ---
set "GEN=%ROOT%\scripts\pipelines\det_from_openapi.py"
if not exist "%GEN%" (
  echo [ERR] DET generator not found: %GEN%
  popd & exit /b 2
)

rem --- locate packs folder for the 7 SUTs ---
set "PACKS="
if exist "%ROOT%\packs\7_suts\" set "PACKS=%ROOT%\packs\7_suts"
if not defined PACKS if exist "%ROOT%\packs\7_suts_llm_provider\" set "PACKS=%ROOT%\packs\7_suts_llm_provider"
if not defined PACKS if exist "%ROOT%\packs\synthetic\" set "PACKS=%ROOT%\packs\synthetic"

if not defined PACKS (
  echo [ERR] Could not find a 7-SUTs packs folder. Tried:
  echo       %ROOT%\packs\7_suts
  echo       %ROOT%\packs\7_suts_llm_provider
  echo       %ROOT%\packs\synthetic
  popd & exit /b 3
)

echo [INFO] CWD=%ROOT%
echo [INFO] PACKS=%PACKS%
echo [INFO] DET generator (no LLM) = %GEN%
echo ------------------------------------------------------------

rem Iterate all subfolders under PACKS that contain openapi.json
set "COUNT=0"
for /d %%D in ("%PACKS%\*") do (
  if exist "%%~fD\openapi.json" (
    set /a COUNT+=1
    set "SUT=%%~nD"
    set "SPEC=%%~fD\openapi.json"
    set "OUT=%ROOT%\artifacts\det_checked\7_suts_llm_provider\!SUT!"

    echo ==== !SUT! ^(7-SUT DET^) ====
    echo [RUN ] spec="!SPEC!"  outdir="!OUT!"
    if not exist "!OUT!" mkdir "!OUT!" >nul 2>&1

    "%PY%" "%GEN%" "!SPEC!" "!OUT!" --sut "!SUT!" --shards 24 --emit_llm_gold
    if errorlevel 1 (
      echo [ERR ] det_from_openapi.py failed for !SUT!
      goto :fail
    )

    for %%F in ("!OUT!\!SUT!_llm_gold_ops.json" "!OUT!\!SUT!_det_gold.json" "!OUT!\!SUT!_llm_gold.json") do (
      if not exist "%%~fF" (
        echo [ERR ] expected "%%~fF" but it does not exist.
        goto :fail
      )
      "%PY%" -c "import json,os,sys; p=sys.argv[1]; json.load(open(p,'r',encoding='utf-8')); print('[OK  ]', os.path.basename(p), 'valid JSON, size', os.path.getsize(p))" "%%~fF"
    )
  )
)

if "!COUNT!"=="0" (
  echo [WARN] No SUTs found under %PACKS% with an openapi.json
) else (
  echo.
  echo [DONE] 7-SUT DET ^(pure OpenAPI; ops + shards + det_gold^) completed for !COUNT! SUT^(s^).
)

popd
exit /b 0

:fail
popd
exit /b 1
