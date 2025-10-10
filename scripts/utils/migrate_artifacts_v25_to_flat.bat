@echo off
setlocal EnableExtensions

set "ROOT=%~dp0..\.."
for %%# in ("%ROOT%") do set "ROOT=%%~f#"

set "SRC=%ROOT%\artifacts\v25"
set "DST=%ROOT%\artifacts"

if not exist "%SRC%" (
  echo [INFO] Nothing to migrate: %SRC% does not exist.
  exit /b 0
)

echo [INFO] Migrating contents from artifacts\v25 to artifacts\ (flattening)
if not exist "%DST%" mkdir "%DST%"

REM Move each known subtree; keep structure
for %%D in (det_checked nondet_checked 7_suts_llm_trained realworld readables) do (
  if exist "%SRC%\%%D" (
    if not exist "%DST%\%%D" mkdir "%DST%\%%D"
    echo [MOVE] %%D
    robocopy "%SRC%\%%D" "%DST%\%%D" /E /MOVE >nul
  )
)

REM If anything else remains in v25, move it wholesale
for /f "delims=" %%P in ('dir "%SRC%" /b') do (
  echo [MOVE] other: %%P
  robocopy "%SRC%\%%P" "%DST%\%%P" /E /MOVE >nul
)

echo [DONE] Migration complete. You can delete artifacts\v25 if empty.
exit /b 0
