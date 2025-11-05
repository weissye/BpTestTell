@echo off
setlocal EnableExtensions EnableDelayedExpansion

rem ================================================================
rem run_js_all_sut_from_gold.bat
rem Walk provider/SUT trees and invoke the inner runner per SUT.
rem Usage:
rem   run_js_all_sut_from_gold.bat           → real run
rem   run_js_all_sut_from_gold.bat /dryrun   → only print inner calls
rem ================================================================

for %%I in ("%~dp0..\..") do set "ROOT=%%~fI"
set "RUNNER=%ROOT%\scripts\readable\run_js_sut_from_gold.bat"

set "DRYRUN="
if /I "%~1"=="/dryrun" ( set "DRYRUN=1" & shift )

echo ------------------------------------------------------------

call :ProcessProvider det_checked 7_suts_llm_provider
call :ProcessProvider det_checked real_world_llm_provider
call :ProcessProvider nondet_checked 7suts_llm_provider
call :ProcessProvider nondet_checked realworld_llm_provider

echo [DONE]
exit /b 0

:ProcessProvider
set "BASE_DIR=%~1"
set "PROVIDER=%~2"
set "PROV_DIR=%ROOT%\artifacts\%BASE_DIR%\%PROVIDER%"
if not exist "%PROV_DIR%" goto :eof

for /D %%S in ("%PROV_DIR%\*") do (
  set "SUT=%%~nxS"
  set "SUT_DIR=%%~fS"

  rem Skip *_shards folders explicitly
  set "TAIL=!SUT:~-7!"
  if /I "!TAIL!"=="_shards" (
    rem skip shards
  ) else (
    echo [RUN ] !SUT_DIR!
    if defined DRYRUN (
      echo [CALL] "%RUNNER%" "%BASE_DIR%" "%PROVIDER%" "!SUT!" "!SUT_DIR!"
    ) else (
      call "%RUNNER%" "%BASE_DIR%" "%PROVIDER%" "!SUT!" "!SUT_DIR!"
    )
  )
)
goto :eof
