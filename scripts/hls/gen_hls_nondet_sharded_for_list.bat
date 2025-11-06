@echo off
setlocal EnableExtensions EnableDelayedExpansion

set "LIST=%~1"
if "%LIST%"=="" (
  echo Usage: %~nx0 ^<sut_list_file^>
  exit /b 2
)

rem Resolve repo root
set "SCRIPT_DIR=%~dp0"
pushd "%SCRIPT_DIR%\..\.."
set "ROOT=%CD%"
popd

set "GEN=%ROOT%\scripts\hls\gen_hls_nondet.bat"
set "MERGE_PY=%ROOT%\scripts\hls\merge_nondet_shards.py"

echo ============================================
echo HLS-NONDET (sharded) from: "%LIST%"
echo CWD   : %CD%
echo ROOT  : %ROOT%
echo GEN   : %GEN%
echo DET-7 : %ROOT%\artifacts\hls_det\7_suts_llm_provider
echo DET-RW: %ROOT%\artifacts\hls_det\real_world_llm_provider
echo ============================================

if defined HLS_DEBUG (
  echo [DBG] where python:
  where "%ROOT%\.venv\Scripts\python.exe"
  echo [DBG] env:
  echo       HLS_DEBUG=%HLS_DEBUG%
  echo       HLS_DRYRUN=%HLS_DRYRUN%
  echo       HLS_SHARDS=%HLS_SHARDS%
  echo       HLS_NONDET_PER_SHARD=%HLS_NONDET_PER_SHARD%
  echo       HLS_NONDET_MAX=%HLS_NONDET_MAX%
  echo       HLS_SEED=%HLS_SEED%
  echo       HLS_KEEP_SHARDS=%HLS_KEEP_SHARDS%
)

if not exist "%LIST%" (
  echo [ERR] list file not found: %LIST%
  exit /b 3
)

if defined HLS_DEBUG (
  echo [DBG] Dumping "%LIST%" with line numbers:
  set /a LN=0
  for /f "usebackq delims=" %%L in ("%LIST%") do (
    set /a LN+=1
    echo   [DBG] !LN!: %%L
  )
)

echo [DBG] Entering generation loop...

for /f "usebackq tokens=* delims=" %%S in ("%LIST%") do (
  set "SUT=%%~S"
  rem skip blanks and comment lines starting with ; or #
  if not "!SUT!"=="" if /I not "!SUT:~0,1!"==";" if /I not "!SUT:~0,1!"=="#" (
    rem auto-pick provider by probing det artifacts
    set "PROVIDER="
    if exist "%ROOT%\artifacts\hls_det\7_suts_llm_provider\!SUT!\hls_det_gold.json" set "PROVIDER=7_suts_llm_provider"
    if exist "%ROOT%\artifacts\hls_det\real_world_llm_provider\!SUT!\hls_det_gold.json" set "PROVIDER=real_world_llm_provider"

    if "!PROVIDER!"=="" (
      echo [WARN] skipping "!SUT!": no DET gold found in either provider.
    ) else if /I "!PROVIDER!"=="7_suts_llm_provider" (
      echo [LOOP] SUT=!SUT!  PROVIDER=!PROVIDER!
      call "%GEN%" "!SUT!" "!PROVIDER!"
    ) else (
      echo [LOOP] SUT=!SUT!  PROVIDER=!PROVIDER!
      set "TOTAL_SHARDS=%HLS_SHARDS%"
      if "!TOTAL_SHARDS!"=="" set "TOTAL_SHARDS=1"

      for /L %%i in (0,1,!TOTAL_SHARDS!-1) do (
        set "HLS_SHARD_INDEX=%%i"
        echo [CALL] shard %%i/!TOTAL_SHARDS!: "%GEN%" "!SUT!" "!PROVIDER!"
        call "%GEN%" "!SUT!" "!PROVIDER!"
        if ERRORLEVEL 1 echo [ERR ] shard %%i failed for "!SUT!"
      )

      rem merge all shard files
      set "OUT_DIR=%ROOT%\artifacts\hls_nondet\!PROVIDER!\!SUT!"
      set "OUT_FILE=!OUT_DIR!\hls_nondet_gold.json"
      set "GLOB=!OUT_FILE!.shard*.json"

      if exist "!OUT_DIR!" (
        echo [MERGE] !SUT!: "!GLOB!" -> "!OUT_FILE!"
        if not defined HLS_DRYRUN (
          "%ROOT%\.venv\Scripts\python.exe" "%MERGE_PY%" --out "!OUT_FILE!" --glob "!GLOB!"
          if ERRORLEVEL 1 (
            echo [ERR ] merge failed for "!SUT!"
          ) else (
            if not defined HLS_KEEP_SHARDS del /q "!GLOB!" >nul 2>&1
          )
        )
      ) else (
        echo [WARN] skip merge for "!SUT!": out dir missing.
      )
    )
  )
)

echo [DONE] %~nx0 finished.
exit /b 0
