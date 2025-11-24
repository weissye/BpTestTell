@echo off
setlocal EnableExtensions EnableDelayedExpansion

REM ===================================================================
REM  Mine guard candidates for each SUT (7_suts_llm_provider + real_world_llm_provider)
REM  Usage: scripts\analysis\mine_guards_from_openapi.bat  [config\suts_and_rw.txt]
REM ===================================================================

set "LIST=%~1"
if "%LIST%"=="" set "LIST=config\suts_and_rw.txt"

if not exist "%LIST%" (
  echo [ERROR] Missing list file: %LIST%
  exit /b 1
)

REM -- strip BOM in the list file (no output if PS missing) --
powershell -NoP -C "$p='%LIST%';$t=Get-Content -Raw -LiteralPath $p; if($t.StartsWith([char]0xFEFF)){ $t=$t.Substring(1) }; [IO.File]::WriteAllText($p,$t,[Text.UTF8Encoding]::new($false))" >nul 2>nul

for /f "usebackq delims=" %%S in ("%LIST%") do (
  set "SUT=%%~S"
  if not "!SUT!"=="" if not "!SUT:~0,1!"=="#" (
    call :DO_ONE "7_suts_llm_provider"    "%%~S"  || goto :FAIL
    call :DO_ONE "real_world_llm_provider" "%%~S"  || goto :FAIL
  )
)

echo ALL GUARD CANDIDATES DONE
exit /b 0

:DO_ONE
set "PROVIDER=%~1"
set "SUT=%~2"

set "OUT_DIR=artifacts\analysis\%PROVIDER%\%SUT%"
set "LLE_DET=artifacts\det_checked\%PROVIDER%\%SUT%\%SUT%_llm_gold.json"

if not exist "%LLE_DET%" (
  echo [SKIP] %SUT% (^%PROVIDER%^) - missing %LLE_DET%
  exit /b 0
)

if not exist "%OUT_DIR%" mkdir "%OUT_DIR%" >nul 2>nul

echo [RUN ] python -u scripts\analysis\mine_guards_from_openapi.py --sut "%SUT%" --provider "%PROVIDER%" --out_dir "%OUT_DIR%" --lle_det="%CD%\%LLE_DET%"
python -u scripts\analysis\mine_guards_from_openapi.py --sut "%SUT%" --provider "%PROVIDER%" --out_dir "%OUT_DIR%" --lle_det="%CD%\%LLE_DET%"  1> "%OUT_DIR%\mine.out"  2> "%OUT_DIR%\mine.err"

if errorlevel 1 (
  echo [FAIL] %SUT% (^%PROVIDER%^)  see "%OUT_DIR%\mine.err"
  exit /b 1
) else (
  echo [OK] wrote guard candidates for %SUT% under %OUT_DIR%
  exit /b 0
)

:FAIL
echo [ABORT] errors occurred. See *.err files above.
exit /b 1
