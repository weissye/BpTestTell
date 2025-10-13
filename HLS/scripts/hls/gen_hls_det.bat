@echo off
setlocal
if "%~3"=="" (
  echo Usage: %~nx0 SUT PATH_TO_LLE_DET_GOLD OUT_JSON [SEED]
  echo Example: %~nx0 library artifacts\det_checked\library\library_lle_gold.json artifacts\hls_det\library\hls_det_gold.json 42
  exit /b 1
)
set SUT=%~1
set IN=%~2
set OUT=%~3
set SEED=%~4
if "%SEED%"=="" set SEED=42
python scripts\hls\generate_hls_from_lle.py --sut %SUT% --lle_det_gold "%IN%" --out "%OUT%" --seed %SEED%
