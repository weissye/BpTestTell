@echo off
setlocal EnableExtensions EnableDelayedExpansion
if "%~2"=="" (
  echo Usage: %~nx0 SUT PATH_TO_LLE_DET_GOLD.json [SEED_DET] [SEED_NONDET]
  exit /b 1
)
set SUT=%~1
set LLE_DET=%~2
set SEED_DET=%~3
if "%SEED_DET%"=="" set SEED_DET=42
set SEED_NONDET=%~4
if "%SEED_NONDET%"=="" set SEED_NONDET=142

set OUT_DET=artifacts\hls_det\%SUT%\hls_det_gold.json
set OUT_NONDET=artifacts\hls_nondet\%SUT%\hls_nondet_gold.json
set OUT_JS=readables\hls\%SUT%\stories_hls.js

rem 1) DET
call scripts\hls\gen_hls_det.bat %SUT% "%LLE_DET%" "%OUT_DET%" %SEED_DET% || exit /b 1

rem 2) TRAIN + NONDET
call scripts\hls\train_hls_llm.bat %SUT% "%OUT_DET%" || exit /b 1
call scripts\hls\gen_hls_nondet.bat %SUT% "%OUT_DET%" "%OUT_NONDET%" %SEED_NONDET% || exit /b 1

rem 3) COMBINED JS (active+passive)
set ACTIVE_SAMPLES=examples\samples\%SUT%_active_samples.json
if not exist "%ACTIVE_SAMPLES%" set ACTIVE_SAMPLES=
if "%ACTIVE_SAMPLES%"=="" (
  echo No active samples found for %SUT% - emitting PASSIVE only into %OUT_JS%
  python scripts\readable\emit_hls_all_in_one.py --gold "%OUT_NONDET%" --out "%OUT_JS%"
) else (
  call scripts\readable\emit_hls_all_in_one.bat "%OUT_NONDET%" "%ACTIVE_SAMPLES%" "%OUT_JS%"
)

echo Done. Outputs:
echo   %OUT_DET%
echo   %OUT_NONDET%
echo   %OUT_JS%
