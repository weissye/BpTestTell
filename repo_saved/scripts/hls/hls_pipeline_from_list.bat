@echo off
setlocal EnableExtensions

rem ----------------------------------------
rem Args / Debug
rem ----------------------------------------
set "DEBUG=0"
if /i "%~1"=="--debug" set "DEBUG=1"

rem ----------------------------------------
rem Fixed config
rem ----------------------------------------
set "LIST_FILE=config\suts_and_rw.txt"
set "DET_ROOT=artifacts\det_checked"
set "NONDET_ROOT=artifacts\nondet_checked"
set "HLS_DET_ROOT=artifacts\hls_det"
set "HLS_NONDET_ROOT=artifacts\hls_nondet"
set "DET_PROVIDERS=7_suts_llm_provider real_world_llm_provider"
set "NONDET_PROVIDERS=7suts_llm_provider realworld_llm_provider"
set "READABLE_SUFFIX=readable\stories_hls.js"

echo.
echo Using LIST: %LIST_FILE%
echo Roots (fixed): %DET_ROOT% and %NONDET_ROOT%
echo Providers (det):    7_suts_llm_provider  real_world_llm_provider
echo Providers (nondet): 7suts_llm_provider   realworld_llm_provider
if %DEBUG%==1 echo DEBUG mode is ON

if not exist "%LIST_FILE%" (
  echo [ERROR] list file not found: %LIST_FILE%
  exit /b 1
)

rem ----------------------------------------
rem Iterate systems from list (ignore comments/blank)
rem ----------------------------------------
for /f "usebackq tokens=1 delims=#" %%S in ("%LIST_FILE%") do (
  if not "%%~S"=="" call :process_one "%%~S"
)

echo.
echo ALL DONE.
exit /b 0


rem ========================================
rem Process a single system
rem ========================================
:process_one
setlocal
set "SYS=%~1"

echo.
echo ============================================
echo Processing %SYS%
echo ============================================

rem Try each DET provider and a few filename variants
set "FOUND=0"
for %%P in (%DET_PROVIDERS%) do (
  if %DEBUG%==1 echo [DBG] TRY: "%CD%\%DET_ROOT%\%%P\%SYS%\%SYS%_llm_gold.json"
  if exist "%DET_ROOT%\%%P\%SYS%\%SYS%_llm_gold.json" (
    if %DEBUG%==1 echo [DBG]  HIT: "%CD%\%DET_ROOT%\%%P\%SYS%\%SYS%_llm_gold.json"
    set "FOUND=1"
    set "PROVIDER=%%P"
    set "DET_IN=%DET_ROOT%\%%P\%SYS%\%SYS%_llm_gold.json"
    goto :found_det
  ) else (
    if %DEBUG%==1 echo [DBG] MISS: "%CD%\%DET_ROOT%\%%P\%SYS%\%SYS%_llm_gold.json"
    if %DEBUG%==1 echo [DBG] TRY: "%CD%\%DET_ROOT%\%%P\%SYS%\%SYS%_llm_gold.jason"
    if exist "%DET_ROOT%\%%P\%SYS%\%SYS%_llm_gold.jason" (
      if %DEBUG%==1 echo [DBG]  HIT: "%CD%\%DET_ROOT%\%%P\%SYS%\%SYS%_llm_gold.jason"
      set "FOUND=1"
      set "PROVIDER=%%P"
      set "DET_IN=%DET_ROOT%\%%P\%SYS%\%SYS%_llm_gold.jason"
      goto :found_det
    ) else (
      if %DEBUG%==1 echo [DBG] MISS: "%CD%\%DET_ROOT%\%%P\%SYS%\%SYS%_llm_gold.jason"
      if %DEBUG%==1 echo [DBG] TRY: "%CD%\%DET_ROOT%\%%P\%SYS%\%SYS%_ll_goldPops.json"
      if exist "%DET_ROOT%\%%P\%SYS%\%SYS%_ll_goldPops.json" (
        if %DEBUG%==1 echo [DBG]  HIT: "%CD%\%DET_ROOT%\%%P\%SYS%\%SYS%_ll_goldPops.json"
        set "FOUND=1"
        set "PROVIDER=%%P"
        set "DET_IN=%DET_ROOT%\%%P\%SYS%\%SYS%_ll_goldPops.json"
        goto :found_det
      ) else (
        if %DEBUG%==1 echo [DBG] MISS: "%CD%\%DET_ROOT%\%%P\%SYS%\%SYS%_ll_goldPops.json"
      )
    )
  )
)

if "%FOUND%"=="0" (
  echo [SKIP] no gold found for %SYS%
  endlocal & exit /b 0
)

:found_det
if %DEBUG%==1 echo [DBG] ROOT_HIT=%DET_ROOT%  PROVIDER=%PROVIDER%

set "HLS_DET=%HLS_DET_ROOT%\%PROVIDER%\%SYS%\hls_det_gold.json"
call :gen_hls_det "%SYS%" "%CD%\%DET_IN%" "%HLS_DET%" || ( endlocal & exit /b 1 )

call :train_hls_llm "%SYS%" || ( endlocal & exit /b 1 )

set "HLS_NON=%HLS_NONDET_ROOT%\%PROVIDER%\%SYS%\hls_nondet_gold.json"
set "STORIES=%HLS_NONDET_ROOT%\%PROVIDER%\%SYS%\%READABLE_SUFFIX%"
call :gen_hls_nondet "%HLS_DET%" "%HLS_NON%" "%STORIES%" || ( endlocal & exit /b 1 )

endlocal & exit /b 0


rem ========================================
rem HLS-DET extraction from LLM gold (PS5-safe)
rem ========================================
:gen_hls_det
rem %1 sys   %2 gold_in   %3 det_out
setlocal
set "SYS=%~1"
set "IN=%~2"
set "OUT=%~3"

echo [RUN ] gen_hls_det
if %DEBUG%==1 echo [DBG] DET-IN="%IN%"  DET-OUT="%OUT%"

for %%D in ("%OUT%\..") do if not exist "%%~fD" mkdir "%%~fD" >nul 2>&1

powershell -NoProfile -ExecutionPolicy Bypass -File "scripts\hls\extract_hls_det.ps1" ^
  -InPath "%IN%" -OutPath "%OUT%" -SystemName "%SYS%" -Dbg %DEBUG%

if errorlevel 1 (
  echo [ERR ] failed to generate HLS-DET for %SYS%
  endlocal & exit /b 1
)
echo [OK  ] %OUT%
endlocal & exit /b 0


rem ========================================
rem Train (stub writes model_ref.json)
rem ========================================
:train_hls_llm
rem %1 sys
setlocal
set "SYS=%~1"
echo [RUN ] train_hls_llm
echo [RUN ] Train model: %SYS%

set "MODEL_DIR=models\hls\%SYS%"
set "MODEL_REF=%MODEL_DIR%\model_ref.json"
if not exist "%MODEL_DIR%" mkdir "%MODEL_DIR%" >nul 2>&1
> "%MODEL_REF%" (
  echo { "system": "%SYS%", "model": "ref", "timestamp": "%DATE% %TIME%" }
)
if errorlevel 1 (
  echo [ERR ] failed to write %MODEL_REF%
  endlocal & exit /b 1
)
echo [OK] model ready at %MODEL_REF%
echo [OK  ] models\hls\%SYS%
endlocal & exit /b 0


rem ========================================
rem Non-deterministic HLS (stub) + readable path
rem ========================================
:gen_hls_nondet
rem %1 hls_det_in   %2 nondet_out   %3 stories_js_path
setlocal
set "HLS_DET=%~1"
set "OUT=%~2"
set "STORIES=%~3"

echo [RUN ] gen_hls_nondet
if %DEBUG%==1 (
  echo [DBG] HLS_DET="%HLS_DET%"
  echo [DBG] HLS_NON_EXPECT="%OUT%"
  echo [DBG] STORIES="%STORIES%"
)

for %%D in ("%OUT%\..") do if not exist "%%~fD" mkdir "%%~fD" >nul 2>&1
> "%OUT%" (
  echo { "source_det": "%HLS_DET%", "stories_js": "%STORIES%" }
)
if errorlevel 1 (
  echo [ERR ] failed to generate HLS-NONDET
  endlocal & exit /b 1
)
echo [OK  ] %OUT%
endlocal & exit /b 0
