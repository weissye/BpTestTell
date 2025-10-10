@echo off
setlocal EnableExtensions EnableDelayedExpansion

REM ============================================================
REM emit_readables_any.bat  (place in scripts\readable\)
REM Universal wrapper: builds interfaces.readable.js + lifecycle.readable.js
REM from ANY GOLD tree (det/nondet, provider/trained), for:
REM   - one SUT / all 7 SUTs
REM   - one real-world / all real-world
REM Recursively scans artifacts\ for *_llm_gold*.json
REM Outputs under artifacts\readables\{7_suts|realworld}\<name>\
REM ============================================================

if "%~1"=="" goto :USAGE

set "MODE=%~1"
set "NAME=%~2"

REM repo root (this file is scripts\readable\*)
set "ROOT=%~dp0..\.."
for %%# in ("%ROOT%") do set "ROOT=%%~f#"

set "EMITTER=%ROOT%\scripts\readable\emit_readables_from_gold.py"

set "OUT_7S=%ROOT%\artifacts\readables\7_suts"
set "OUT_RW=%ROOT%\artifacts\readables\realworld"
if not exist "%OUT_7S%" mkdir "%OUT_7S%"
if not exist "%OUT_RW%" mkdir "%OUT_RW%"

set "SUTS=banking config_control ecommerce factory garage library pharmacy"
set "REALWORLD=airtable directus github jira_cloud notion shopify_admin stripe supabase trello twilio"

if /I "%MODE%"=="one-sut" (
  if "%NAME%"=="" goto :USAGE
  call :RUN_ONE "7S" "%NAME%"
  goto :END
) else if /I "%MODE%"=="all-7suts" (
  for %%S in (%SUTS%) do call :RUN_ONE "7S" "%%~S"
  goto :END
) else if /I "%MODE%"=="one-realworld" (
  if "%NAME%"=="" goto :USAGE
  call :RUN_ONE "RW" "%NAME%"
  goto :END
) else if /I "%MODE%"=="all-realworld" (
  for %%S in (%REALWORLD%) do call :RUN_ONE "RW" "%%~S"
  goto :END
) else if /I "%MODE%"=="all" (
  for %%S in (%SUTS%) do call :RUN_ONE "7S" "%%~S"
  for %%S in (%REALWORLD%) do call :RUN_ONE "RW" "%%~S"
  goto :END
) else (
  goto :USAGE
)

:RUN_ONE
REM %1 => 7S|RW, %2 => name
setlocal EnableDelayedExpansion
set "KIND=%~1"
set "NAME=%~2"
echo/
echo ==== %KIND% : %NAME% ====

REM Recursively collect gold files for this name
set "GOLD_ARGS="

for /R "%ROOT%\artifacts" %%F in ("%NAME%_llm_gold_fixed.json") do set "GOLD_ARGS=!GOLD_ARGS! "%%~fF""
for /R "%ROOT%\artifacts" %%F in ("%NAME%_llm_gold_merged_fixed.json") do set "GOLD_ARGS=!GOLD_ARGS! "%%~fF""
for /R "%ROOT%\artifacts" %%F in ("%NAME%_llm_gold.json") do set "GOLD_ARGS=!GOLD_ARGS! "%%~fF""
for /R "%ROOT%\artifacts" %%F in ("%NAME%_llm_gold_merged.json") do set "GOLD_ARGS=!GOLD_ARGS! "%%~fF""

if "!GOLD_ARGS!"=="" (
  echo [SKIP] %KIND%:%NAME% (no *_llm_gold*.json found under artifacts\)
  endlocal & exit /b 0
)

if /I "%KIND%"=="7S" (
  set "OUT_DIR=%OUT_7S%\%NAME%"
) else (
  set "OUT_DIR=%OUT_RW%\%NAME%"
)
if not exist "%OUT_DIR%" mkdir "%OUT_DIR%"

echo [RUN] python "%EMITTER%" --gold !GOLD_ARGS! --out-dir "%OUT_DIR%" --force-crud
python "%EMITTER%" --gold !GOLD_ARGS! --out-dir "%OUT_DIR%" --force-crud
if errorlevel 1 (
  echo [ERR] emit_readables_from_gold.py failed for %KIND%:%NAME%
  endlocal & exit /b 1
)

echo [OK] %KIND%:%NAME% → "%OUT_DIR%"
endlocal & exit /b 0

:USAGE
echo Usage:
echo   %~nx0 one-sut ^<name^>
echo   %~nx0 all-7suts
echo   %~nx0 one-realworld ^<name^>
echo   %~nx0 all-realworld
echo   %~nx0 all
echo.
echo Outputs:
echo   artifacts\readables\7_suts\^<name^>\{interfaces,lifecycle}.readable.js
echo   artifacts\readables\realworld\^<name^>\{interfaces,lifecycle}.readable.js
exit /b 2

:END
echo [DONE]
exit /b 0
