@echo off
setlocal EnableExtensions EnableDelayedExpansion

rem ===== args =====
if "%~2"=="" (
  echo Usage: %~nx0 LIST.TXT ^<7_suts_llm_provider^|real_world_llm_provider^> [OUT_BASE_OVERRIDE]
  exit /b 2
)
set "LIST=%~1"
set "PROV=%~2"

rem assume this file sits in scripts\hls\
set "ROOT=%~dp0..\.."
pushd "%ROOT%" || (echo [ERR] cannot cd to %ROOT% & exit /b 3)

rem ===== python =====
set "PY=%CD%\.venv\Scripts\python.exe"
if not exist "%PY%" set "PY=python"

rem ===== paths =====
set "ANALYSIS_DIR=artifacts\analysis\%PROV%"
if /I "%PROV%"=="real_world_llm_provider" ( set "DSL_BASE=models\hls\RWs" ) else ( set "DSL_BASE=models\hls\SUTs" )
set "OUT_BASE=artifacts\hls_nondet\%PROV%"
if not "%~3"=="" set "OUT_BASE=%~3"

rem ===== mode (default LLM if model exists, else heuristic) =====
set "MODE=%HLS_ND_MODE%"
if not defined MODE (
  if defined HLS_ND_MERGE_MODEL (
    if exist "%HLS_ND_MERGE_MODEL%" ( set "MODE=llm" ) else ( set "MODE=heuristic" )
  ) else (
    set "MODE=heuristic"
  )
)
if not defined HLS_ND_PER_ENTITY set "HLS_ND_PER_ENTITY=8"

echo(
echo ============================================
echo NONDET GOLD + EMIT stories.js
echo LIST : "%LIST%"
echo ROOT : %CD%
echo PY   : %PY%
echo PROV : %PROV%
echo MODE : %MODE%
if /I "%MODE%"=="llm" echo MODEL: %HLS_ND_MERGE_MODEL%
echo OUT  : %OUT_BASE%\[sut]\hls_gold.json
echo OUT  : %OUT_BASE%\[sut]\hls_stories.js
echo ============================================
echo(

if not exist "%LIST%" ( echo [ERR] list file "%LIST%" not found & exit /b 4 )

set /a OK=0, SKIP=0, ERR=0, N=0

rem Count non-empty, non-';' lines and split by index:
for /f "usebackq delims=" %%L in ("%LIST%") do (
  set "L=%%L"
  if defined L (
    if /I not "!L:~0,1!"==";" (
      set /a N+=1
      if /I "%PROV%"=="7_suts_llm_provider" (
        if !N! LEQ 7 ( call :PROCESS_ONE "%%L" )
      ) else (
        if !N! GTR 7 ( call :PROCESS_ONE "%%L" )
      )
    )
  )
)

echo --------------------------------------------
echo DONE. OK=!OK! SKIP=!SKIP! ERR=!ERR!
popd
exit /b 0

:PROCESS_ONE
setlocal EnableExtensions EnableDelayedExpansion
set "S=%~1"
set "GRAPH=%ANALYSIS_DIR%\%S%\graph.json"
set "DSL=%DSL_BASE%\%S%\dsl_map.json"
set "OUTDIR=%OUT_BASE%\%S%"
set "GOLD=%OUTDIR%\hls_gold.json"
set "OUTJS=%OUTDIR%\hls_stories.js"

if not exist "%GRAPH%" (
  echo   [SKIP] %S% - missing graph: "%GRAPH%"
  endlocal & set /a SKIP+=1 & exit /b 0
)
if not exist "%DSL%" (
  echo   [SKIP] %S% - missing dsl: "%DSL%"
  endlocal & set /a SKIP+=1 & exit /b 0
)

mkdir "%OUTDIR%" >nul 2>&1

if /I "%MODE%"=="llm" (
  echo [RUN ] NONDET GOLD: %S% (LLM)
  "%PY%" -u scripts\hls\build_hls_gold_nondet.py ^
    --provider "%PROV%" --sut "%S%" ^
    --graph "%GRAPH%" --dsl "%DSL%" ^
    --out "%GOLD%" --merge_model "%HLS_ND_MERGE_MODEL%" --per_entity %HLS_ND_PER_ENTITY%
) else (
  echo [RUN ] NONDET GOLD: %S% (heuristic)
  "%PY%" -u scripts\hls\build_hls_gold_nondet.py ^
    --provider "%PROV%" --sut "%S%" ^
    --graph "%GRAPH%" --dsl "%DSL%" ^
    --out "%GOLD%"
)

if errorlevel 1 (
  echo   [ERR ] python failed for %S%
  endlocal & set /a ERR+=1 & exit /b 0
)

rem ---- emit stories.js from GOLD ----
set "EMIT_PY=scripts\hls\emit_hls_stories_from_gold.py"
if not exist "%EMIT_PY%" if exist "scripts\readables\emit_hls_stories_from_gold.py" set "EMIT_PY=scripts\readables\emit_hls_stories_from_gold.py"

if exist "%EMIT_PY%" (
  echo [RUN ] EMIT stories.js: %S%
  "%PY%" -u "%EMIT_PY%" --gold "%GOLD%" --out "%OUTJS%"
  if errorlevel 1 (
    echo   [ERR ] emitter failed for %S%
    endlocal & set /a ERR+=1 & exit /b 0
  )
) else (
  echo   [SKIP] emitter script not found; GOLD ready at "%GOLD%"
)

echo   [OK  ] %S%
endlocal & set /a OK+=1 & exit /b 0
