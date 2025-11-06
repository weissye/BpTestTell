@echo off
setlocal EnableExtensions EnableDelayedExpansion

rem ------------------------------------------------------------
rem gen_hls_nondet.bat  — generate HLS nondet gold for one SUT
rem Usage: gen_hls_nondet.bat <SUT> [<PROVIDER>]
rem Env (optional):
rem   HLS_DEBUG=1
rem   HLS_SEED=911177
rem   HLS_NONDET_MAX=<int>
rem   HLS_NONDET_PER_SUT=<int>            (SUTs only)
rem   HLS_NONDET_PER_SHARD=<int>          (RW only; when sharded driver sets HLS_SHARD_INDEX)
rem   HLS_SHARD_INDEX=<int 0..>           (RW only; called by the sharded-for-list driver)
rem ------------------------------------------------------------

if "%~1"=="" (
  echo Usage: %~nx0 ^<SUT^> [^<PROVIDER^>]
  exit /b 2
)

set "SUT=%~1"
set "PROVIDER=%~2"

rem -- compute ROOT = repo root (two levels up from this script)
set "SCRIPT_DIR=%~dp0"
pushd "%SCRIPT_DIR%\..\..">nul
set "ROOT=%CD%"
popd>nul

set "PY=.venv\Scripts\python.exe"

rem ---------- Resolve provider if missing ----------
if not defined PROVIDER goto :RESOLVE_PROVIDER
goto :AFTER_RESOLVE_PROVIDER

:RESOLVE_PROVIDER
if exist "%ROOT%\artifacts\hls_det\7_suts_llm_provider\%SUT%\hls_det_gold.json" (
  set "PROVIDER=7_suts_llm_provider"
) else (
  if exist "%ROOT%\artifacts\hls_det\real_world_llm_provider\%SUT%\hls_det_gold.json" (
    set "PROVIDER=real_world_llm_provider"
  ) else (
    echo [ERR ] cannot determine PROVIDER for "%SUT%" (no DET gold found).
    exit /b 3
  )
)
goto :AFTER_RESOLVE_PROVIDER

:AFTER_RESOLVE_PROVIDER

rem ---------- Paths ----------
set "DET=artifacts\hls_det\%PROVIDER%\%SUT%\hls_det_gold.json"
set "DSL=models\hls\SUTs\%SUT%\dsl_map.json"
set "MODEL=models\hls\%SUT%"
set "OUT=artifacts\hls_nondet\%PROVIDER%\%SUT%\hls_nondet_gold.json"

rem ---------- Args ----------
set "SEEDARG="
if defined HLS_SEED set "SEEDARG=--seed %HLS_SEED%"

set "MAXARG="
if defined HLS_NONDET_MAX set "MAXARG=--max_stories %HLS_NONDET_MAX%"

set "NPERARG="
set "SHARD_SUFFIX="

rem SUTs (no sharding)
if /I "%PROVIDER%"=="7_suts_llm_provider" (
  if defined HLS_NONDET_PER_SUT set "NPERARG=--n_per_story %HLS_NONDET_PER_SUT%"
) else (
  rem Real-world provider: support shard suffix + per-shard N
  if defined HLS_SHARD_INDEX (
    set "SHARD_SUFFIX=.shard%HLS_SHARD_INDEX%.json"
    if defined HLS_NONDET_PER_SHARD set "NPERARG=--n_per_story %HLS_NONDET_PER_SHARD%"
    if defined HLS_SEED (
      set /a _seedcalc=%HLS_SEED% + %HLS_SHARD_INDEX%
      set "SEEDARG=--seed !_seedcalc!"
    )
  ) else (
    if defined HLS_NONDET_PER_SHARD set "NPERARG=--n_per_story %HLS_NONDET_PER_SHARD%"
  )
)

if defined HLS_DEBUG (
  echo ============================================
  echo [DBG ] %~nx0
  echo [DBG ] CWD: %CD%
  echo [DBG ] SUT=%SUT%
  echo [DBG ] PROVIDER=%PROVIDER%
  echo [DBG ] PY=%PY%
  echo [DBG ] Paths:
  echo        DET = %DET%
  echo        DSL = %DSL%
  echo        MODEL = %MODEL%
  echo        OUT = %OUT%
  echo [DBG ] Args:
  echo        SEEDARG  = %SEEDARG%
  echo        MAXARG   = %MAXARG%
  echo        NPERARG  = %NPERARG%
  if defined HLS_SHARDS echo        SHARDS   = %HLS_SHARDS%
  if defined HLS_SHARD_INDEX echo        SHARD_IDX= %HLS_SHARD_INDEX%
)

echo ============================================
echo [GEN ] %SUT%
echo   [IN ] %DET%
echo   [OUT] %OUT%%SHARD_SUFFIX%
echo   [ENV] %SEEDARG% %MAXARG% %NPERARG%
echo   [CMD] %PY% -u "%ROOT%\scripts\hls\generate_nondet_from_llm.py" --sut "%SUT%" --hls_det "%DET%" --trained_model_dir "%MODEL%" --out "%OUT%%SHARD_SUFFIX%" %SEEDARG% %MAXARG% %NPERARG%

if defined HLS_DRYRUN exit /b 0

"%PY%" -u "%ROOT%\scripts\hls\generate_nondet_from_llm.py" --sut "%SUT%" --hls_det "%DET%" --trained_model_dir "%MODEL%" --out "%OUT%%SHARD_SUFFIX%" %SEEDARG% %MAXARG% %NPERARG%
set "RC=%ERRORLEVEL%"
if %RC% NEQ 0 (
  echo [ERR ] NONDET generation failed for %SUT% (rc=%RC%)
  exit /b %RC%
)

exit /b 0
