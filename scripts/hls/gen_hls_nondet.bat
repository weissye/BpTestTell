@echo off
setlocal EnableExtensions EnableDelayedExpansion

rem Usage: gen_hls_nondet.bat <SUT> [<PROVIDER>]
if "%~1"=="" (
  echo Usage: gen_hls_nondet.bat ^<SUT^> [^<provider^>]
  exit /b 2
)

set "SUT=%~1"
set "PROVIDER=%~2"

rem Resolve repo root from this script path
set "ROOT=%~dp0..\.."
pushd "%ROOT%" >nul
set "ROOT=%CD%"

set "PY=.venv\Scripts\python.exe"
set "GENPY=scripts\hls\generate_nondet_from_llm.py"

set "DET7=artifacts\hls_det\7_suts_llm_provider"
set "DETRW=artifacts\hls_det\real_world_llm_provider"
set "NDET7=artifacts\hls_nondet\7_suts_llm_provider"
set "NDETRW=artifacts\hls_nondet\real_world_llm_provider"

rem Infer provider if not provided
if "%PROVIDER%"=="" (
  if exist "%DET7%\%SUT%\hls_det_gold.json" set "PROVIDER=7_suts_llm_provider"
  if exist "%DETRW%\%SUT%\hls_det_gold.json" set "PROVIDER=real_world_llm_provider"
)

if "%PROVIDER%"=="" (
  echo [ERR ] Provider not found for SUT "%SUT%". Missing det gold under %DET7% or %DETRW%.
  popd & exit /b 3
)

set "HLS_DET=artifacts\hls_det\%PROVIDER%\%SUT%\hls_det_gold.json"
if not exist "%HLS_DET%" (
  echo [ERR ] Missing DET gold: "%HLS_DET%"
  popd & exit /b 4
)

set "MODEL=models\hls\%SUT%"
set "OUTBASE=artifacts\hls_nondet\%PROVIDER%\%SUT%\hls_nondet_gold.json"
if defined HLS_SHARD_INDEX (
  set "OUT=%OUTBASE%.shard%HLS_SHARD_INDEX%.json"
) else (
  set "OUT=%OUTBASE%"
)

rem Ensure out dir exists
for %%D in ("%OUT%") do if not exist "%%~dpD" mkdir "%%~dpD" >nul 2>&1

rem Construct args
set "SEEDARG="
if defined HLS_SEED set "SEEDARG=--seed %HLS_SEED%"

set "NPERARG="
if defined HLS_SHARD_INDEX (
  if defined HLS_NONDET_PER_SHARD set "NPERARG=--n_per_story %HLS_NONDET_PER_SHARD%"
) else (
  if defined HLS_NONDET_PER_SUT set "NPERARG=--n_per_story %HLS_NONDET_PER_SUT%"
)

if defined HLS_DEBUG (
  echo ============================================
  echo [DBG ] gen_hls_nondet.bat
  echo [DBG ] CWD=%CD%
  echo [DBG ] SUT=%SUT%
  echo [DBG ] PROVIDER=%PROVIDER%
  echo [DBG ] PY=%PY%
  echo [DBG ] HLS_DET=%HLS_DET%
  echo [DBG ] MODEL  =%MODEL%
  echo [DBG ] OUT    =%OUT%
  if defined HLS_SHARD_INDEX echo [DBG ] SHARD_IDX=%HLS_SHARD_INDEX%
  if defined HLS_NONDET_PER_SUT   echo [DBG ] HLS_NONDET_PER_SUT=%HLS_NONDET_PER_SUT%
  if defined HLS_NONDET_PER_SHARD echo [DBG ] HLS_NONDET_PER_SHARD=%HLS_NONDET_PER_SHARD%
  if defined HLS_SEED             echo [DBG ] HLS_SEED=%HLS_SEED%
  echo [DBG ] Args: %SEEDARG% %NPERARG%
  echo ============================================
)

echo [GEN ] %SUT%
echo   [IN ] %HLS_DET%
echo   [OUT] %OUT%
if defined HLS_SHARD_INDEX (
  echo   [ENV] %SEEDARG% %NPERARG% (shard %HLS_SHARD_INDEX%)
) else (
  echo   [ENV] %SEEDARG% %NPERARG%
)

if defined HLS_DRYRUN (
  echo [DRY] %PY% -u %GENPY% --sut "%SUT%" --hls_det "%HLS_DET%" --trained_model_dir "%MODEL%" --out "%OUT%" %SEEDARG% %NPERARG%
) else (
  "%PY%" -u "%GENPY%" --sut "%SUT%" --hls_det "%HLS_DET%" --trained_model_dir "%MODEL%" --out "%OUT%" %SEEDARG% %NPERARG%
  if errorlevel 1 (
    echo [ERR ] NONDET generation failed for %SUT%
    popd & exit /b 5
  )
)

echo [OK ] NONDET written ^> %OUT%
popd
exit /b 0
