@echo off
setlocal EnableExtensions

rem ===========================================
rem run_hls_det_all.bat  — single-shot delegator
rem Calls the list-driven pipeline exactly once.
rem ===========================================

rem Resolve ROOT from this script’s location
set "SCRIPT_DIR=%~dp0"
for %%I in ("%SCRIPT_DIR%\..") do set "SCRIPTS_DIR=%%~fI"
for %%I in ("%SCRIPTS_DIR%\..") do set "ROOT=%%~fI"

set "LIST=%ROOT%\config\suts_and_rw.txt"
set "PIPE=%ROOT%\scripts\hls\hls_pipeline_from_list.bat"

echo ===========================================
echo  ROOT: %ROOT%
echo  LIST: %LIST%
echo ===========================================

if not exist "%LIST%" (
  echo [ERR] List file not found: "%LIST%"
  exit /b 1
)

if not exist "%PIPE%" (
  echo [ERR] Pipeline not found: "%PIPE%"
  exit /b 1
)

rem IMPORTANT: Do NOT iterate the list here.
rem The called script already processes the entire list.
rem Many setups ignore extra args, so we pass only "det".
call "%PIPE%" det
exit /b %errorlevel%
