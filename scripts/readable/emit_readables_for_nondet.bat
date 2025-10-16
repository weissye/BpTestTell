@echo off
setlocal EnableExtensions
:: Usage:
::   scripts\readable\emit_readables_for_nondet.bat  [config\suts_and_rw.txt]

set "LIST=%~1"
if "%LIST%"=="" set "LIST=config\suts_and_rw.txt"

for /f "usebackq eol=# delims=" %%S in ("%LIST%") do call :ONE "%%~S"

echo ALL NONDET READABLES DONE
exit /b 0

:ONE
setlocal
set "NAME=%~1"

:: detect provider + NONDET gold location
set "PROVIDER="
set "GOLD="

if exist "artifacts\hls_nondet\7_suts_llm_provider\%NAME%\hls_nondet_gold.json" (
  set "PROVIDER=7_suts_llm_provider"
  set "GOLD=artifacts\hls_nondet\7_suts_llm_provider\%NAME%\hls_nondet_gold.json"
) else if exist "artifacts\hls_nondet\real_world_llm_provider\%NAME%\hls_nondet_gold.json" (
  set "PROVIDER=real_world_llm_provider"
  set "GOLD=artifacts\hls_nondet\real_world_llm_provider\%NAME%\hls_nondet_gold.json"
)

if "%PROVIDER%"=="" (
  echo [SKIP] %NAME% (no NONDET gold found)
  endlocal & goto :eof
)

set "OUTDIR=artifacts\hls_nondet\%PROVIDER%\%NAME%\readable"
if not exist "%OUTDIR%" md "%OUTDIR%" >nul 2>&1
set "OUT=%OUTDIR%\stories_hls.js"

:: optional active samples
set "ACTIVE=examples\samples\%NAME%_active_samples.json"

echo [RUN ] NONDET %NAME%
if exist "%ACTIVE%" (
  python -u scripts\readable\emit_hls_all_in_one.py --gold "%GOLD%" --active "%ACTIVE%" --out "%OUT%" --name "%NAME%" 1>"%OUTDIR%\emit.out" 2>"%OUTDIR%\emit.err"
) else (
  python -u scripts\readable\emit_hls_all_in_one.py --gold "%GOLD%" --out "%OUT%" --name "%NAME%" 1>"%OUTDIR%\emit.out" 2>"%OUTDIR%\emit.err"
)
if errorlevel 1 (
  echo [FAIL] %NAME%  (see %OUTDIR%\emit.err)
) else (
  echo [OK  ] %NAME% => %OUT%
)
endlocal & goto :eof
