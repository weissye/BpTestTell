@echo off
setlocal EnableExtensions EnableDelayedExpansion

:: Usage:
::   emit_all_from_list.bat [config\suts_and_rw.txt]

set "LIST=%~1"
if "%LIST%"=="" set "LIST=config\suts_and_rw.txt"

:: iterate names; ignore #comments and blank lines
for /f "usebackq eol=# delims=" %%S in ("%LIST%") do (
  set "NAME=%%~S"
  if not "!NAME!"=="" call :ONE
)

echo ALL READABLES DONE
exit /b 0

:ONE
setlocal EnableDelayedExpansion
set "NAME=!NAME!"

:: find NONDET GOLD for this NAME under either provider
set "ND="
if exist "artifacts\hls_nondet\7_suts_llm_provider\!NAME!\hls_nondet_gold.json" set "ND=artifacts\hls_nondet\7_suts_llm_provider\!NAME!\hls_nondet_gold.json"
if exist "artifacts\hls_nondet\real_world_llm_provider\!NAME!\hls_nondet_gold.json" set "ND=artifacts\hls_nondet\real_world_llm_provider\!NAME!\hls_nondet_gold.json"

if "!ND!"=="" (
  echo [SKIP] !NAME! - no NONDET gold
  endlocal & goto :eof
)

set "ACTIVE=examples\samples\!NAME!_active_samples.json"
set "OUT=readables\hls\!NAME!\stories_hls.js"
for %%D in ("!OUT!") do if not exist "%%~dpD" mkdir "%%~dpD" 2>nul

if exist "!ACTIVE!" (
  call scripts\readable\emit_hls_all_in_one.bat "!ND!" "!ACTIVE!" "!OUT!" || (echo [FAIL] !NAME! & endlocal & goto :eof)
) else (
  call scripts\readable\emit_hls_all_in_one.bat "!ND!" "!OUT!" || (echo [FAIL] !NAME! & endlocal & goto :eof)
)

echo [READABLE] !OUT!
endlocal & goto :eof
