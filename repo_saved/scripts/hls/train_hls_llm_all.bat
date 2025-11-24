@echo off
setlocal EnableExtensions EnableDelayedExpansion

rem ===== Resolve Python =====
set "PY=python"
if defined VIRTUAL_ENV if exist "%VIRTUAL_ENV%\Scripts\python.exe" set "PY=%VIRTUAL_ENV%\Scripts\python.exe"

rem ===== Input list =====
set "LIST=%~1"
if "%LIST%"=="" set "LIST=config\suts_and_rw.txt"

rem ===== Trainer script =====
set "TRAIN_PY=%~dp0train_hls_llm.py"

echo ============================================
echo Train HLS models from: "%LIST%"
echo CWD: %CD%
echo Using: %PY%
echo Trainer: %TRAIN_PY%
echo ============================================

if not exist "%LIST%"     (echo [ERR ] list not found: %LIST% & exit /b 1)
if not exist "%TRAIN_PY%" (echo [ERR ] not found: %TRAIN_PY%  & exit /b 1)

rem Optional: dump lines as CMD reads them
if defined HLS_DEBUG (
  echo [DBG ] Dumping lines from "%LIST%":
  for /f "usebackq delims=" %%L in ("%LIST%") do echo   [DBG] LINE=%%L
)

set /a CNT_TOTAL=0, CNT_TRAINED=0, CNT_SKIP=0, CNT_ERR=0
echo [DBG ] Entering training loop...

rem ===== EXACT SAME LOOP SHAPE AS DEBUG =====
for /f "usebackq delims=" %%L in ("%LIST%") do (
  set "LINE=%%L"

  rem Trim leading spaces
  for /f "tokens=* delims= " %%A in ("!LINE!") do set "LINE=%%A"

  rem Skip blanks and headings/comments
  if not "!LINE!"=="" if not "!LINE:~0,1!"=="#" if not "!LINE:~0,1!"==";" if /I not "!LINE:~0,3!"=="===" (

    rem First token is the SUT
    for /f "tokens=1 delims=,;#()= 	" %%S in ("!LINE!") do set "SUT=%%~S"

    if defined SUT (
      set /a CNT_TOTAL+=1

      rem Pick provider by actual presence of HLS-DET
      set "PROVIDER=7_suts_llm_provider"
      if not exist "artifacts\hls_det\!PROVIDER!\!SUT!\hls_det_gold.json" set "PROVIDER=real_world_llm_provider"

      set "HLSDET=artifacts\hls_det\!PROVIDER!\!SUT!\hls_det_gold.json"
      set "OUTDIR=models\hls\!SUT!"
      set "OUTREF=!OUTDIR!\model_ref.json"

      echo [LOOP] SUT=!SUT!  PROVIDER=!PROVIDER!

      if exist "!HLSDET!" (
        if not exist "!OUTDIR!" mkdir "!OUTDIR!" >nul 2>&1

        echo [TRAIN] !SUT!
        echo   [IN ] !HLSDET!
        echo   [OUT] !OUTREF!
        echo   [CMD] "%PY%" -u "%TRAIN_PY%" --sut "!SUT!" --hls_det "!HLSDET!" --out_dir "!OUTDIR!" --force

        if defined HLS_DRYRUN (
          echo [DRY] skipping execution due to HLS_DRYRUN
        ) else (
          "%PY%" -u "%TRAIN_PY%" --sut "!SUT!" --hls_det "!HLSDET!" --out_dir "!OUTDIR!" --force
          if errorlevel 1 (
            echo [ERR ] train failed for !SUT!
            set /a CNT_ERR+=1
          ) else (
            if exist "!OUTREF!" (
              echo [OK  ] !OUTREF!
              set /a CNT_TRAINED+=1
            ) else (
              echo [WARN] model_ref.json missing under "!OUTDIR!"
              set /a CNT_ERR+=1
            )
          )
        )
      ) else (
        echo [SKIP] !SUT!  (no hls_det_gold at "!HLSDET!")
        set /a CNT_SKIP+=1
      )
    )
  )
)

echo.
echo [SUM ] total=%CNT_TOTAL%  trained=%CNT_TRAINED%  skip=%CNT_SKIP%  err=%CNT_ERR%
echo [DONE] train_hls_llm_all.bat finished.
exit /b 0
