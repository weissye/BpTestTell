@echo on
setlocal EnableExtensions
set "JSONL=models\hls\ALL\train.jsonl"
set "BASE=gpt-4o-mini-2024-07-18"
if not "%~1"=="" set "JSONL=%~1"
if not "%~2"=="" set "BASE=%~2"

REM --- build dataset automatically if missing (no parens) ---
if exist "%JSONL%" goto HAVE_JSONL
echo [INFO] Dataset missing, building now...
call scripts\hls\train_hls_llm_all.bat config\suts_and_rw.txt
if errorlevel 1 exit /b 1
if exist "%JSONL%" goto HAVE_JSONL

echo [ERROR] Still missing %JSONL%
dir models\hls\ALL
exit /b 1

:HAVE_JSONL
if "%OPENAI_API_KEY%"=="" goto NO_KEY

set PYTHONIOENCODING=utf-8
python -u --version || exit /b 1

REM ensure openai is importable, without using () blocks
python -u -c "import openai,sys;print('openai',getattr(openai,'__version__','?'))"
if errorlevel 1 goto INSTALL_OPENAI
goto HAVE_OPENAI

:INSTALL_OPENAI
python -m pip install --upgrade openai
if errorlevel 1 exit /b 1

:HAVE_OPENAI
python -u scripts\hls\openai_ft_train_all.py --jsonl "%JSONL%" --base_model "%BASE%"
if errorlevel 1 exit /b %errorlevel%
echo [OK] train_openai_all DONE
exit /b 0

:NO_KEY
echo [ERROR] OPENAI_API_KEY is not set.
echo        CMD (this session):  set OPENAI_API_KEY=sk-...
echo        Persist:            setx OPENAI_API_KEY "sk-..."
exit /b 1
