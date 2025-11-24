@echo off
setlocal EnableExtensions EnableDelayedExpansion

REM ---------- config ----------
set "PROVIDERS=7_suts_llm_provider real_world_llm_provider"
set "BASE_MODEL=gpt-4o-mini"
set "GEN_MODEL_ID=gpt-4o-mini"
set "N_PER_STORY=8"
set "MAX_STORIES=200"
set "SEED=911177"
REM ----------------------------

set /a ok=0, err=0, skip=0

for %%P in (%PROVIDERS%) do call :ProcessProvider "%%P"

echo --------------------------------------------
echo DONE. OK=!ok!  ERR=!err!  SKIP=!skip!
exit /b 0

:ProcessProvider
set "P=%~1"
echo ============================================
echo Processing provider "%P%"
echo ============================================
if not exist "artifacts\hls_det\%P%" (
  echo [WARN] Missing DET directory: artifacts\hls_det\%P%
  echo.
  goto :eof
)
for /d %%S in ("artifacts\hls_det\%P%\*") do call :ProcessSut "%P%" "%%~nS"
echo.
goto :eof

:ProcessSut
set "P=%~1"
set "S=%~2"

if /i "%S%"=="%P%" (
  echo [SKIP] Ignoring provider root "%P%\%S%"
  set /a skip+=1
  goto :eof
)

set "DET=artifacts\hls_det\%P%\%S%\hls_det_gold.json"
set "MODEL_DIR=models\hls\%S%"
set "OUTDIR=artifacts\hls_nondet\%P%\%S%"
set "OUT=%OUTDIR%\hls_nondet_gold.json"

if not exist "%DET%" (
  echo [SKIP] No DET for "%P%\%S%" -> "%DET%"
  set /a skip+=1
  goto :eof
)

if not exist "%MODEL_DIR%" mkdir "%MODEL_DIR%" >nul 2>&1
if not exist "%OUTDIR%"   mkdir "%OUTDIR%"   >nul 2>&1

echo DET    = "%DET%"
echo MODEL  = "%MODEL_DIR%"
echo NONDET = "%OUT%"

python -u scripts\hls\train_hls_llm.py --sut "%S%" --hls_det "%DET%" --out_dir "%MODEL_DIR%" --base_model "%BASE_MODEL%"
if errorlevel 1 (
  echo [ERR ] train failed for "%P%\%S%"
  set /a err+=1
  goto :eof
)

python -u scripts\hls\generate_nondet_from_llm.py --sut "%S%" --hls_det "%DET%" --trained_model_dir "%MODEL_DIR%" --out "%OUT%" --model_id "%GEN_MODEL_ID%" --n_per_story %N_PER_STORY% --max_stories %MAX_STORIES% --seed %SEED%
if errorlevel 1 (
  echo [ERR ] gen failed for "%P%\%S%"
  set /a err+=1
) else (
  set /a ok+=1
)
echo.
goto :eof
