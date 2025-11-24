@echo off
setlocal EnableExtensions EnableDelayedExpansion

if "%~1"=="" ( echo Usage: %~nx0 ^<list.txt^> ^<provider^> & exit /b 2 )
if "%~2"=="" ( echo Usage: %~nx0 ^<list.txt^> ^<provider^> & exit /b 2 )
set "LIST=%~1"
set "PROV=%~2"

set "ROOT=%~dp0..\.."
for %%I in ("%ROOT%") do set "ROOT=%%~fI"
set "PY=%ROOT%\.venv\Scripts\python.exe"
if not exist "%PY%" set "PY=python"

set "MODEL="
if not "%HLS_ND_MERGE_MODEL%"=="" ( set "MODEL=%HLS_ND_MERGE_MODEL%" ) else (
  if exist "%ROOT%\artifacts\hls_model\models\hls_llm_v1" set "MODEL=%ROOT%\artifacts\hls_model\models\hls_llm_v1"
)
if "%MODEL%"=="" ( echo [ERR] Missing model for LLM variant && exit /b 1 )

if "%HLS_ND_PER_ENTITY%"=="" set "HLS_ND_PER_ENTITY=8"

set "LOGDIR=%ROOT%\logs"
if not exist "%LOGDIR%" mkdir "%LOGDIR%" >nul 2>&1

for /f "usebackq delims=" %%S in ("%LIST%") do (
  set "LINE=%%S"
  if not "!LINE!"=="" if /i not "!LINE:~0,1!"==";" (
    call :DOONE "%%S"
  )
)
exit /b 0

:DOONE
setlocal
set "S=%~1"
if /i "%PROV%"=="real_world_llm_provider" (
  set "DSL=%ROOT%\models\hls\RWs\%S%\dsl_map.json"
) else (
  set "DSL=%ROOT%\models\hls\SUTs\%S%\dsl_map.json"
)
set "GRAPH=%ROOT%\artifacts\analysis\%PROV%\%S%\graph.json"

if not exist "%GRAPH%" ( echo [SKIP] %S% missing graph & endlocal & goto :eof )
if not exist "%DSL%"   ( echo [SKIP] %S% missing dsl   & endlocal & goto :eof )

set "OUT_LLM=%ROOT%\artifacts\hls_nondet_llm\%PROV%\%S%"
set "OUT_HUR=%ROOT%\artifacts\hls_nondet_heuristic\%PROV%\%S%"
mkdir "%OUT_LLM%" >nul 2>&1
mkdir "%OUT_HUR%" >nul 2>&1

echo [LLM] %S%
"%PY%" -u "%ROOT%\scripts\hls\build_hls_gold_nondet.py" ^
  --provider "%PROV%" --sut "%S%" --graph "%GRAPH%" --dsl "%DSL%" ^
  --out "%OUT_LLM%\hls_gold.json" --merge_model "%MODEL%" --per_entity %HLS_ND_PER_ENTITY% ^
  > "%LOGDIR%\nondetLLM_%PROV%_%S%.log" 2>&1
if exist "%OUT_LLM%\hls_gold.json" (
  "%PY%" -u "%ROOT%\scripts\hls\emit_hls_all_in_one.py" ^
    --provider "%PROV%" --sut "%S%" --gold "%OUT_LLM%\hls_gold.json" --out-js "%OUT_LLM%\hls_stories.js" ^
    > "%LOGDIR%\emitLLM_%PROV%_%S%.log" 2>&1
)

echo [HEUR] %S%
"%PY%" -u "%ROOT%\scripts\hls\build_hls_gold_nondet.py" ^
  --provider "%PROV%" --sut "%S%" --graph "%GRAPH%" --dsl "%DSL%" ^
  --out "%OUT_HUR%\hls_gold.json" ^
  > "%LOGDIR%\nondetHUR_%PROV%_%S%.log" 2>&1
if exist "%OUT_HUR%\hls_gold.json" (
  "%PY%" -u "%ROOT%\scripts\hls\emit_hls_all_in_one.py" ^
    --provider "%PROV%" --sut "%S%" --gold "%OUT_HUR%\hls_gold.json" --out-js "%OUT_HUR%\hls_stories.js" ^
    > "%LOGDIR%\emitHUR_%PROV%_%S%.log" 2>&1
)
endlocal & goto :eof
