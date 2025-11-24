@echo off
setlocal EnableExtensions EnableDelayedExpansion

set "LIST=%~1"
if "%LIST%"=="" set "LIST=config\suts_and_rw.txt"

echo Using LIST: %LIST%
echo Roots (fixed): artifacts\det_checked and artifacts\nondet_checked
echo Providers (det):    7_suts_llm_provider  real_world_llm_provider
echo Providers (nondet): 7suts_llm_provider   realworld_llm_provider
echo.

rem 1) DET -> HLS-DET
call "%~dp0gen_hls_det_for_list.bat" "%LIST%"
if errorlevel 1 (echo [ERR] gen_hls_det_for_list failed & exit /b 1)

rem 2) Train LLM from HLS-DET
call "%~dp0train_hls_llm_all.bat" "%LIST%"
if errorlevel 1 (echo [ERR] train_hls_llm_all failed & exit /b 1)

rem 3) Nondet (sharded) from trained model
call "%~dp0gen_hls_nondet_sharded_for_list.bat" "%LIST%"
if errorlevel 1 (echo [ERR] gen_hls_nondet_sharded_for_list failed & exit /b 1)

echo.
echo ALL DONE.
exit /b 0
