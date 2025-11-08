@echo off
setlocal EnableExtensions EnableDelayedExpansion

rem ============================================
rem emit_stories_for_list.bat  -- run stories emit for all SUTs in a list
rem Usage: scripts\readable\emit_stories_for_list.bat [path\to\list.txt]
rem ============================================

if "%~1"=="" (
  set "LIST=config\suts_and_rw.txt"
) else (
  set "LIST=%~1"
)

set "SELF_DIR=%~dp0"
for %%# in ("%SELF_DIR%\..\..\") do set "ROOT=%%~f#"
set "ONE=%SELF_DIR%\emit_stories_one.bat"

echo ============================================
echo STORIES from list: "%LIST%"
echo CWD  : %CD%
echo ROOT : %ROOT%
echo ONE  : %ONE%
echo ============================================

if not exist "%ONE%" (
  echo [ERR ] Missing helper: %ONE%
  exit /b 2
)

for %%# in ("%LIST%") do set "LIST=%%~f#"
if not exist "%LIST%" (
  echo [ERR ] List file not found: %LIST%
  exit /b 3
)

if defined HLS_DEBUG (
  echo [DBG] Dumping list with line numbers:
  for /f "usebackq delims=" %%L in ("%LIST%") do (
    set /a LN+=1
    set "LINE=%%L"
    echo   [DBG] !LN!: !LINE!
  )
  echo [DBG] Entering loop...
  set "LN="
)

for /f "usebackq tokens=* delims=" %%L in ("%LIST%") do (
  set "LINE=%%L"
  set "LINE=!LINE:~0,1024!"
  if not "!LINE!"=="" if not "!LINE:~0,1!"==";" if not "!LINE:~0,1!"=="#" (
    echo [CALL] !LINE!
    call "%ONE%" "!LINE!" || (
      echo [ERR ] emitter failed for !LINE! ^(errorlevel=!errorlevel!^)
    )
  )
)

echo [DONE] emit_stories_for_list.bat finished successfully.
endlocal
exit /b 0
