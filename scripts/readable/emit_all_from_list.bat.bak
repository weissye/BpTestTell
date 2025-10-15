@echo off
setlocal EnableExtensions EnableDelayedExpansion
REM Usage: scripts\readable\emit_all_from_list.bat  [LIST_PATH]
set "LIST=%~1"
if "%LIST%"=="" set "LIST=config\suts_and_rw.txt"

for /f "usebackq delims=" %%S in ("%LIST%") do (
  set "NAME=%%S"
  if not defined NAME (
  ) else (
    if "!NAME:~0,1!"=="#" (
    ) else (
      call :EMIT_ONE
    )
  )
)
echo ALL EMITTED.
exit /b 0

:EMIT_ONE
set "NONDET=artifacts\hls_nondet\!NAME!\hls_nondet_gold.json"
set "OUT_JS=readables\hls\!NAME!\stories_hls.js"
set "ACTIVE=examples\samples\!NAME!_active_samples.json"

if not exist "!NONDET!" (
  echo [SKIP] Missing NONDET: !NONDET!
  exit /b 0
)

if exist "!ACTIVE!" (
  call scripts\readable\emit_hls_all_in_one.bat "!NONDET!" "!ACTIVE!" "!OUT_JS!" || exit /b 1
) else (
  call scripts\readable\emit_hls_all_in_one.bat "!NONDET!" "" "!OUT_JS!" || exit /b 1
)
echo [EMITTED] !OUT_JS!
exit /b 0
