@echo off
setlocal EnableExtensions

REM Usage:
REM   run_js_rw_from_gold.bat artifacts\det_checked\real_world_llm_provider\stripe
REM   run_js_rw_from_gold.bat artifacts\nondet_checked\realworld_llm_provider\stripe

if "%~1"=="" (
  echo [ERR] Please provide a realworld SUT folder path.
  exit /b 1
)

call scripts\readable\run_js_sut_from_gold.bat "%~1"
exit /b %ERRORLEVEL%
