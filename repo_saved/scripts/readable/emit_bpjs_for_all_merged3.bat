@echo off
setlocal EnableExtensions EnableDelayedExpansion

REM ============================================================================
REM  emit_bpjs_for_all_merged3.bat
REM  Purpose: Build DSL maps, sanitize BOMs, then run the HLS emitter (det/nondet)
REM  Run from repo root, e.g.:
REM    scripts\readable\emit_bpjs_for_all_merged3.bat config\suts_and_rw.txt
REM  Notes:
REM   - We enumerate graphs under artifacts\analysis\*\*\graph.json (both providers)
REM   - After each build, we sanitize the JSON (strip UTF-8 BOM) before emission
REM   - Defaults can be overridden via environment variables:
REM       PROFILE (default: rich)
REM       PER_ENTITY_MAX (default: 10)
REM       FAIL_UNDER (default: 0)
REM ============================================================================

set "_CFG=%~1"

REM Defaults
if "%PROFILE%"=="" set "PROFILE=rich"
if "%PER_ENTITY_MAX%"=="" set "PER_ENTITY_MAX=10"
if "%FAIL_UNDER%"=="" set "FAIL_UNDER=0"

set "PYTHONUTF8=1"
set "PYTHONIOENCODING=UTF-8"

echo ============================================
echo Emitting BPjs readables from: "%_CFG%"
echo CWD: %CD%
echo PROFILE=%PROFILE%  PER_ENTITY_MAX=%PER_ENTITY_MAX%  FAIL_UNDER=%FAIL_UNDER%
echo Providers: 7_suts_llm_provider ^| real_world_llm_provider
echo ============================================
echo.

REM Helper: resolve OUT path by provider
REM   7_suts_llm_provider -> models\hls\SUTs\<sut>\dsl_map.json
REM   real_world_llm_provider -> models\hls\RWs\<sut>\dsl_map.json
set "_SUTS_ROOT=models\hls\SUTs"
set "_RWS_ROOT=models\hls\RWs"

REM Loop over all graphs discovered
for /R "artifacts\analysis" %%G in (graph.json) do (
  set "GRAPH=%%~fG"
  set "REL=%%~fG"
  REM Trim the prefix up to ...\analysis\
  set "REL=!REL:*analysis\=!"
  REM REL now like: provider\sut\graph.json
  for /f "tokens=1,2 delims=\ " %%p in ("!REL!") do (
    set "PROVIDER=%%p"
    set "SUT=%%q"
  )

  echo [SUT ] !SUT!
  echo   [GEN ] dsl_map: !PROVIDER!\!SUT!

  if /I "!PROVIDER!"=="real_world_llm_provider" (
    set "OUT_DSL=%_RWS_ROOT%\!SUT!\dsl_map.json"
  ) else (
    set "OUT_DSL=%_SUTS_ROOT%\!SUT!\dsl_map.json"
  )

  REM Ensure output dir exists
  for %%D in ("!OUT_DSL!") do if not exist "%%~dpD" mkdir "%%~dpD" >nul 2>&1

  echo   [RUN ] python -u "scripts\analysis\build_dsl_map.py" --sut "!SUT!" --provider "!PROVIDER!" --graph "!GRAPH!" --out "!OUT_DSL!"
  python -u "scripts\analysis\build_dsl_map.py" --sut "!SUT!" --provider "!PROVIDER!" --graph "!GRAPH!" --out "!OUT_DSL!"
  if errorlevel 1 (
    echo   [ERR ] build_dsl_map failed for !PROVIDER!\!SUT!
    echo.
    REM Skip emission for this SUT
    goto :continue_sut
  )

  REM --- SANITIZE: read with utf-8-sig, write utf-8 (no BOM) ------------------
  if exist "!OUT_DSL!" (
    for %%F in ("!OUT_DSL!") do (
      if %%~zF LSS 2 (
        echo   [ERR ] sanitize: "!OUT_DSL!" looks empty; skipping emitter for !PROVIDER!\!SUT!
        echo.
        goto :continue_sut
      )
    )
    echo   [SAN ] stripping BOM (if present): "!OUT_DSL!"
    python -c "import json,sys; p=r'%OUT_DSL%'; d=json.load(open(p,'r',encoding='utf-8-sig')); json.dump(d, open(p,'w',encoding='utf-8'), ensure_ascii=False, indent=2)"
    if errorlevel 1 (
      echo   [ERR ] sanitize failed for !OUT_DSL!
      echo.
      goto :continue_sut
    )
  ) else (
    echo   [ERR ] expected DSL not found: "!OUT_DSL!"
    echo.
    goto :continue_sut
  )
  REM --------------------------------------------------------------------------

  REM Emit (deterministic + nondeterministic)
  for %%M in (det nondet) do (
    echo     using --graph "!GRAPH!"
    echo     using --dsl_map "!OUT_DSL!"
    python -u "scripts\readable\emit_hls_all_in_one.py" --graph "!GRAPH!" --dsl_map "!OUT_DSL!" --mode %%M --profile "%PROFILE%" --per_entity_max %PER_ENTITY_MAX% --fail_under %FAIL_UNDER%
    if errorlevel 1 (
      echo   [ERR ] emitter failed for !PROVIDER!\!SUT! mode=%%M
    ) else (
      echo   [OK ] emitter finished for !PROVIDER!\!SUT! mode=%%M
    )
  )

  :continue_sut
  echo.
)

echo [DONE] emit_bpjs_for_all_merged3.bat finished.
exit /b 0
