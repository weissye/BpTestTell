@echo off
setlocal EnableExtensions EnableDelayedExpansion

rem === args ===
set "LIST=%~1"
set "PROV_FOCUS=%~2"
set "MODE=%~3"

if not defined LIST (
  echo(Usage: %~nx0 ^<list.txt^> [provider_focus^|all] [det^|nondet^|both]
  exit /b 1
)

if not defined PROV_FOCUS set "PROV_FOCUS=all"
if not defined MODE set "MODE=both"

rem === discover python and emitter ===
set "PY=.\.venv\Scripts\python.exe"
if not exist "%PY%" set "PY=python"
set "EMITTER=scripts\readable\emit_hls_all_in_one.py"

echo( [DBG] Python="%PY%"
echo( [DBG] Emitter="%EMITTER%"  Type="ALLINONE"
echo( Using LIST: %LIST%
echo( Providers focus: %PROV_FOCUS%
echo( Modes: %MODE%

if not exist "%LIST%" (
  echo( [ERR] List file not found: %LIST%
  exit /b 2
)

set "CURPROV="
rem IMPORTANT: never put heavy logic directly inside the FOR (…) block
for /f "usebackq delims=" %%L in ("%LIST%") do call :PROCESS_LINE "%%L"
echo(--------------------------------------------
echo(DONE.
exit /b 0

:PROCESS_LINE
setlocal EnableDelayedExpansion
set "RAW=%~1"
rem Trim leading/trailing spaces (simple)
for /f "tokens=* delims= " %%A in ("!RAW!") do set "RAW=%%~A"
if not defined RAW goto :eof

rem Skip comment or separator lines
if "!RAW:~0,1!"==";" goto HANDLE_HEADER
if "!RAW:~0,1!"=="#"  goto :eof
if /i "!RAW:~0,3!"=="rem" goto :eof

rem It's a SUT line
set "SUT=!RAW!"

rem Resolve provider for this SUT
set "PROVIDER="
if /i not "%PROV_FOCUS%"=="all" (
  set "PROVIDER=%PROV_FOCUS%"
) else (
  set "PROVIDER=!CURPROV!"
)

if not defined PROVIDER (
  echo( [WARN] No provider section yet. Skipping: !SUT!
  goto :eof
)

rem Decide gold path according to MODE
set "GOLD_ND=artifacts\hls_nondet\!PROVIDER!\!SUT!\hls_gold.json"
set "GOLD_D=artifacts\hls_det\!PROVIDER!\!SUT!\hls_gold.json"
set "GOLD="

if /i "%MODE%"=="nondet" (
  if exist "!GOLD_ND!" ( set "GOLD=!GOLD_ND!" ) else (
    echo( [SKIP] NONDET GOLD missing: !GOLD_ND!
    goto :eof
  )
) else if /i "%MODE%"=="det" (
  if exist "!GOLD_D!" ( set "GOLD=!GOLD_D!" ) else (
    echo( [SKIP] DET GOLD missing: !GOLD_D!
    goto :eof
  )
) else (
  rem both -> prefer NONDET else DET
  if exist "!GOLD_ND!" (
    set "GOLD=!GOLD_ND!"
  ) else if exist "!GOLD_D!" (
    set "GOLD=!GOLD_D!"
  ) else (
    echo( [SKIP] No GOLD found for !PROVIDER!\!SUT!
    goto :eof
  )
)

echo(============================================
echo(Processing "!SUT!" [!PROVIDER!]
echo(  GOLD: !GOLD!


rem OUT_DIR => artifacts\<hls_det|hls_nondet>\<provider>\<sut>\readable
set "OUT_DIR=!GOLD!"
set "OUT_DIR=!OUT_DIR:\hls_gold.json=\readable!"
if not exist "!OUT_DIR!" mkdir "!OUT_DIR!" >nul 2>nul

echo(  OUT : !OUT_DIR!

REM inside scripts\readable\emit_* .bat just before calling Python:
set EXTRA_FLAGS=--id-base 200 --id-step 1 --complex-entities loan,orderLine

REM Decide which entities are "complex" for this SUT
set "COMPLEX_ENTITIES="

REM Example: treat 'member' as complex in trello
if /I "!CURSUT!"=="trello" set "COMPLEX_ENTITIES=member"

REM (Optional) examples if you want to experiment later:
REM if /I "!CURSUT!"=="github"   set "COMPLEX_ENTITIES=installation,issue"
REM if /I "!CURSUT!"=="directus" set "COMPLEX_ENTITIES=relation"


rem If you want a fixed out path, uncomment and adapt:
rem set "OUT=!CD!\!SUT!\spec\js\stories_hls.js"
rem "%PY%" "%EMITTER%" --gold "!GOLD!" --out "!OUT!"
rem if errorlevel 1 (echo(  [ERR ] emitter failed & goto :eof) else (echo(  [OK  ] wrote !OUT! & goto :eof)

"%PY%" "%EMITTER%" --gold "%GOLD%" --sut "%SUT%" --provider "%PROVIDER%" --mode "%MODE%" --out_dir "%OUT_DIR%" --id-base 200 --id-step 1 --complex-entities "!COMPLEX_ENTITIES!"

if errorlevel 1 (
  echo(  [ERR ] emitter failed
) else (
  echo(  [OK  ] emitter completed
)
goto :eof

:HANDLE_HEADER
rem Header like: ; === SUTs (7_suts_llm_provider) ===
set "LINE=!RAW!"
rem Extract text inside ( ... ) safely using FOR tokenization
set "CURPROV="
for /f "tokens=2 delims=()" %%P in ("!LINE!") do set "CURPROV=%%P"
if not defined CURPROV goto :eof

rem Respect provider focus if set != all
if /i not "%PROV_FOCUS%"=="all" (
  set "CURPROV=%PROV_FOCUS%"
)

echo( [DBG] Provider now "!CURPROV!"
goto :eof
