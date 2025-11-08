@echo off
setlocal EnableExtensions EnableDelayedExpansion

rem Usage: gen_hls_nondet_sharded_for_list.bat <list.txt>
if "%~1"=="" (
  echo Usage: gen_hls_nondet_sharded_for_list.bat ^<list.txt^>
  exit /b 2
)

set "LIST=%~1"

rem Repo root (relative to this script)
set "ROOT=%~dp0..\.."
pushd "%ROOT%" >nul
set "ROOT=%CD%"

set "GEN_ONE=scripts\hls\gen_hls_nondet.bat"
set "MERGER_PY=.venv\Scripts\python.exe"
set "MERGER=scripts\hls\merge_nondet_shards.py"

set "DET7=artifacts\hls_det\7_suts_llm_provider"
set "DETRW=artifacts\hls_det\real_world_llm_provider"

rem Shard params
if "%HLS_SHARDS%"=="" set "HLS_SHARDS=72"
set /a LAST_SHARD=%HLS_SHARDS%-1

if defined HLS_DEBUG (
  echo ============================================
  echo HLS-NONDET ^(sharded^) from: "%LIST%"
  echo CWD   : %CD%
  echo ROOT  : %ROOT%
  echo GEN   : %ROOT%\%GEN_ONE%
  echo DET-7 : %ROOT%\%DET7%
  echo DET-RW: %ROOT%\%DETRW%
  echo PY    : %MERGER_PY%
  echo ============================================
  echo [DBG] env:
  set HLS_
  echo [DBG] Dumping "%LIST%" with line numbers:
  set /a LN=0
  for /f "usebackq delims=" %%L in ("%LIST%") do (
    set /a LN+=1
    echo   [DBG] !LN!: %%L
  )
)

echo [DBG] Entering generation loop...
for /f "usebackq tokens=* delims=" %%L in ("%LIST%") do (
  set "SKIP="
  set "LINE=%%L"
  for /f "tokens=* delims= " %%Z in ("!LINE!") do set "LINE=%%Z"
  if "!LINE!"==""  set "SKIP=1"
  if /i "!LINE:~0,1!"==";" set "SKIP=1"
  if /i "!LINE:~0,1!"=="#" set "SKIP=1"

  if not defined SKIP (
    set "SUT=!LINE!"

    rem Determine provider by probing det-gold locations
    set "PROV="
    if exist "%DET7%\!SUT!\hls_det_gold.json" set "PROV=7_suts_llm_provider"
    if exist "%DETRW%\!SUT!\hls_det_gold.json" set "PROV=real_world_llm_provider"

    if "!PROV!"=="" (
      echo [WARN] Skip !SUT!: no det gold under %DET7% or %DETRW%
    ) else (
      if /i "!PROV!"=="7_suts_llm_provider" (
        if defined HLS_DEBUG echo [CALL] SUT=!SUT! PROVIDER=!PROV! [no-sharding]
        set "HLS_SHARD_INDEX="
        if defined HLS_DRYRUN (
          echo [DRY] call "%GEN_ONE%" "!SUT!" "!PROV!"
        ) else (
          call "%GEN_ONE%" "!SUT!" "!PROV!"
          if errorlevel 1 exit /b 10
        )
      ) else (
        rem real_world_llm_provider -> run all shards then merge
        if defined HLS_DEBUG echo [SHRD] SUT=!SUT! shards=%HLS_SHARDS%

        for /l %%I in (0,1,%LAST_SHARD%) do (
          set "HLS_SHARD_INDEX=%%I"
          if defined HLS_DRYRUN (
            echo [DRY] call "%GEN_ONE%" "!SUT!" "!PROV!"
          ) else (
            call "%GEN_ONE%" "!SUT!" "!PROV!"
            if errorlevel 1 exit /b 11
          )
        )

        rem Merge once after all shard files exist
        set "FINAL=artifacts\hls_nondet\!PROV!\!SUT!\hls_nondet_gold.json"
        if defined HLS_DRYRUN (
          echo [DRY] "%MERGER_PY%" -u "%MERGER%" --sut "!SUT!" --provider "!PROV!" --out "!FINAL!"
        ) else (
          "%MERGER_PY%" -u "%MERGER%" --sut "!SUT!" --provider "!PROV!" --out "!FINAL!"
          if errorlevel 1 (
            echo [ERR ] merge failed for !SUT! (!PROV!)
            exit /b 12
          )
        )
      )
    )
  )
)

echo [DONE] gen_hls_nondet_sharded_for_list.bat finished.
popd
exit /b 0
