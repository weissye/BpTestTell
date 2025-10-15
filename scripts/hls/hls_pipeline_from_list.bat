@echo off
setlocal EnableExtensions EnableDelayedExpansion
REM Usage:
REM   scripts\hls\hls_pipeline_from_list.bat  [LIST_PATH]  [DET_BASE_OVERRIDE]  [FILE_PATTERN_OVERRIDE]
REM Example for your SUTs:
REM   scripts\hls\hls_pipeline_from_list.bat  config\suts_and_rw.txt  artifacts\det_checked\7_suts_llm_provider  "*_lle_det_gold.json"

set "LIST=%~1"
if "%LIST%"=="" set "LIST=config\suts_and_rw.txt"
set "DET_BASE=%~2"
set "PAT_OVR=%~3"

for /f "usebackq delims=" %%S in ("%LIST%") do call :PROCESS_ONE "%%S"
echo ALL DONE.
exit /b 0

:PROCESS_ONE
setlocal
set "NAME=%~1"
if "%NAME%"=="" goto :done
if "%NAME:~0,1%"=="#" goto :done

echo ============================================
echo Processing %NAME%
echo ============================================

call :RESOLVE_LLE "%NAME%" "%DET_BASE%" "%PAT_OVR%" LLE
if not defined LLE (
  echo [SKIP] Could not locate LLE det-gold for %NAME%
  echo.
  goto :done
)

REM --- choose HLS-DET base dir by LLE location ---
set "HLSDET_BASE=artifacts\hls_det"
echo %LLE% | find /I "\7_suts_llm_provider\" >nul  && set "HLSDET_BASE=%HLSDET_BASE%\7_suts_llm_provider"
echo %LLE% | find /I "\real_world_llm_provider\" >nul && set "HLSDET_BASE=%HLSDET_BASE%\real_world_llm_provider"

set "OUT_DET=%HLSDET_BASE%\%NAME%\hls_det_gold.json"
set "OUT_NONDET=artifacts\hls_nondet\%NAME%\hls_nondet_gold.json"
set "OUT_JS=readables\hls\%NAME%\stories_hls.js"
set "ACTIVE=examples\samples\%NAME%_active_samples.json"

call scripts\hls\gen_hls_det.bat "%NAME%" "%LLE%" "%OUT_DET%" 42 || exit /b 1
call scripts\hls\train_hls_llm.bat "%NAME%" "%OUT_DET%" || exit /b 1
call scripts\hls\gen_hls_nondet.bat "%NAME%" "%OUT_DET%" "%OUT_NONDET%" 142 || exit /b 1

if exist "%ACTIVE%" (
  call scripts\readable\emit_hls_all_in_one.bat "%OUT_NONDET%" "%ACTIVE%" "%OUT_JS%" || exit /b 1
) else (
  call scripts\readable\emit_hls_all_in_one.bat "%OUT_NONDET%" "" "%OUT_JS%" || exit /b 1
)

echo [DONE] %NAME%
echo   %OUT_DET%
echo   %OUT_NONDET%
echo   %OUT_JS%
echo.

:done
endlocal & goto :eof

:RESOLVE_LLE
REM %1=<NAME>  %2=DET_BASE_OVERRIDE  %3=PATTERN_OVERRIDE  %4=OUTVAR
setlocal
set "NM=%~1"
set "BASE=%~2"
set "PATT=%~3"
set "FOUND="

REM Try user override base first
if not "%BASE%"=="" (
  if not "%PATT%"=="" for %%F in ("%BASE%\%NM%\%PATT%") do if exist "%%~F" set "FOUND=%%~F"
  if not defined FOUND for %%F in ("%BASE%\%NM%\*_lle_gold.json")      do if exist "%%~F" set "FOUND=%%~F"
  if not defined FOUND for %%F in ("%BASE%\%NM%\*_lle_det_gold.json")  do if exist "%%~F" set "FOUND=%%~F"
  if not defined FOUND for %%F in ("%BASE%\%NM%\*lle*gold*.json")      do if exist "%%~F" set "FOUND=%%~F"
  if not defined FOUND for %%F in ("%BASE%\%NM%\*lle*.json")           do if exist "%%~F" set "FOUND=%%~F"
)

REM Try common bases if not found
if not defined FOUND (
  for %%B in ("artifacts\det_checked" "artifacts\det_checked\7_suts_llm_provider" "artifacts\det_checked\realworld") do (
    if not defined FOUND (
      if not "%PATT%"=="" for %%F in ("%%~B\%NM%\%PATT%") do if exist "%%~F" set "FOUND=%%~F"
      if not defined FOUND for %%F in ("%%~B\%NM%\*_lle_gold.json")      do if exist "%%~F" set "FOUND=%%~F"
      if not defined FOUND for %%F in ("%%~B\%NM%\*_lle_det_gold.json")  do if exist "%%~F" set "FOUND=%%~F"
      if not defined FOUND for %%F in ("%%~B\%NM%\*lle*gold*.json")      do if exist "%%~F" set "FOUND=%%~F"
      if not defined FOUND for %%F in ("%%~B\%NM%\*lle*.json")           do if exist "%%~F" set "FOUND=%%~F"
    )
  )
)

endlocal & set "%~4=%FOUND%" & goto :eof
