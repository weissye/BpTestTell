@echo off
setlocal EnableExtensions EnableDelayedExpansion

set "LIST=%~1"
if "%LIST%"=="" set "LIST=config\suts_and_rw.txt"

echo ============================================
echo HLS-DET from list: "%LIST%"
echo CWD: %CD%
echo Using: scripts\hls\gen_hls_det.bat
echo ============================================

set /a CNT=0, CNT_BUILT=0, CNT_SKIP=0, CNT_ERR=0

for /f "usebackq tokens=* delims=" %%L in ("%LIST%") do call :DoSut "%%~L"
goto :done

:DoSut
  setlocal EnableDelayedExpansion
  set "LINE=%~1"
  if not defined LINE goto :eol
  if "!LINE:~0,1!"=="#" goto :eol
  if "!LINE:~0,1!"==";" goto :eol

  for /f "tokens=1 delims=,;#() " %%A in ("!LINE!") do set "SUT=%%~A"
  if not defined SUT goto :eol

  set /a CNT+=1

  rem candidate det_gold inputs
  set "IN1=artifacts\det_checked\7_suts_llm_provider\!SUT!\!SUT!_det_gold.json"
  set "IN2=artifacts\det_checked\real_world_llm_provider\!SUT!\!SUT!_det_gold.json"

  if exist "!IN1!" (
    set "PROVIDER=7_suts_llm_provider"
    set "IN=!IN1!"
  ) else if exist "!IN2!" (
    set "PROVIDER=real_world_llm_provider"
    set "IN=!IN2!"
  ) else (
    echo [SKIP] !SUT!  ^(no det_gold^) expected: artifacts\det_checked\*\!SUT!\!SUT!_det_gold.json
    endlocal & set /a CNT_SKIP+=1 & goto :EOF
  )

  set "OUT=artifacts\hls_det\!PROVIDER!\!SUT!\hls_det_gold.json"
  if not exist "artifacts\hls_det\!PROVIDER!\!SUT!" md "artifacts\hls_det\!PROVIDER!\!SUT!" >nul 2>&1

  echo.
  echo [SUT ] !SUT!   [PROVIDER] !PROVIDER!
  echo   [IN ] !IN!
  echo   [OUT] !OUT!
  call scripts\hls\gen_hls_det.bat "!SUT!" "!IN!" "!OUT!"
  if errorlevel 1 (
    echo [ERR ] gen_hls_det failed for !SUT!
    endlocal & set /a CNT_ERR+=1 & goto :EOF
  )

  echo [OK  ] !OUT!
  endlocal & set /a CNT_BUILT+=1 & goto :EOF

:eol
  endlocal & goto :EOF

:done
echo.
echo [SUM ] total=%CNT%  built=%CNT_BUILT%  skip=%CNT_SKIP%  err=%CNT_ERR%
echo.
echo [DONE] gen_hls_det_for_list.bat finished.
endlocal
