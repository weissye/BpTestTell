@echo off
setlocal EnableExtensions EnableDelayedExpansion

REM ============================================================================
REM emit_bpjs_for_all.bat
REM ----------------------------------------------------------------------------
REM Fixes:
REM  1) Respect user-provided env vars (FAIL_UNDER, PER_ENTITY_MAX, PROFILE) by
REM     setting defaults only if they are not already defined.
REM  2) Rebuild DSL maps for "thin SUTs" before emission, using interfaces.js.
REM     This calls:  python scripts\hls\generate_dsl_map.py --sut <sut> [--provider <provider>]
REM Notes:
REM  - Do NOT modify models\hls\<sut>\interfaces.js; the generator only reads it.
REM  - If your emission command differs, keep it; the important part is the
REM    env-var handling and calling the DSL generator before emitting.
REM ============================================================================

REM ---- Defaults (only if user did not set them before calling this .bat) ----
if not defined FAIL_UNDER set "FAIL_UNDER=10"
if not defined PER_ENTITY_MAX set "PER_ENTITY_MAX=3"
if not defined PROFILE set "PROFILE=rich"

REM ---- Resolve repo root (current working dir is assumed to be repo root) ----
set "REPO_ROOT=%CD%"

REM ---- Input config (list of SUT names, one per line; comments with #) ----
set "CONFIG=%~1"
if "%CONFIG%"=="" set "CONFIG=config\suts_and_rw.txt"

echo ============================================
echo Emitting BPjs readables from: "%CONFIG%"
echo CWD: %REPO_ROOT%
echo PROFILE=%PROFILE%  PER_ENTITY_MAX=%PER_ENTITY_MAX%  FAIL_UNDER=%FAIL_UNDER%
echo ============================================

if not exist "%CONFIG%" (
  echo [ERROR] Config file not found: %CONFIG%
  exit /b 1
)

for /f "usebackq tokens=* delims=" %%L in ("%CONFIG%") do (
  set "LINE=%%L"
  REM skip blanks and comments
  if not "!LINE!"=="" if /i not "!LINE:~0,1!"=="#" (
    REM Normalize SUT name (strip provider if provided in the file)
    set "RAW=!LINE:\=|!"
    for /f "tokens=1,2 delims=|" %%a in ("!RAW!") do (
      set "A=%%a"
      set "B=%%b"
    )
    if "!B!"=="" (
      set "SUT=!A!"
    ) else (
      set "SUT=!B!"
    )

    echo [SUT ] !SUT!

    REM --- Providers to emit from
    for %%P in (7_suts_llm_provider real_world_llm_provider) do (
      set "PROVIDER=%%P"
      set "GRAPH=artifacts\analysis\!PROVIDER!\!SUT!\graph.json"
      set "DSL=models\hls\!SUT!\dsl_map.json"

      REM Always (re)generate DSL map so we don't end up with thin SUTs
      echo   [GEN ] dsl_map: !PROVIDER!\!SUT!
      if exist "!REPO_ROOT!\scripts\hls\generate_dsl_map.py" (
        python "!REPO_ROOT!\scripts\hls\generate_dsl_map.py" --sut "!SUT!" --provider "!PROVIDER!" 1>nul
      ) else (
        echo   [WARN] scripts\hls\generate_dsl_map.py not found; skipping DSL regen
      )

      REM ---- Deterministic stories
      if exist "!GRAPH!" (
        echo   [RUN ] det JS: !PROVIDER!\!SUT!
        echo     using --graph "!GRAPH!"
        echo     using --dsl_map "!DSL!"
        node scripts\readable\emit_hls_readable.mjs ^
          --provider "!PROVIDER!" --sut "!SUT!" --mode det ^
          --graph "!GRAPH!" --dsl_map "!DSL!" ^
          --profile "!PROFILE!" --per_entity_max "!PER_ENTITY_MAX!" --fail_under "!FAIL_UNDER!"
      ) else (
        echo   [RUN ] det JS: !PROVIDER!\!SUT!
        echo     using --dsl_map "!DSL!"
        echo [SKIP] no graph:  !PROVIDER!\!SUT!
      )

      REM ---- Non-deterministic stories
      if exist "!GRAPH!" (
        echo   [RUN ] nondet JS: !PROVIDER!\!SUT!
        echo     using --graph "!GRAPH!"
        echo     using --dsl_map "!DSL!"
        node scripts\readable\emit_hls_readable.mjs ^
          --provider "!PROVIDER!" --sut "!SUT!" --mode nondet ^
          --graph "!GRAPH!" --dsl_map "!DSL!" ^
          --profile "!PROFILE!" --per_entity_max "!PER_ENTITY_MAX!" --fail_under "!FAIL_UNDER!"
      ) else (
        echo   [RUN ] nondet JS: !PROVIDER!\!SUT!
        echo     using --dsl_map "!DSL!"
        echo [SKIP] no graph:  !PROVIDER!\!SUT!
      )
    )
  )
)

endlocal
