@echo off
setlocal EnableExtensions
set "JSONL=models\hls\ALL\train.jsonl"
set "BASE=gpt-4o-mini-2024-07-18"
if not "%~1"=="" set "JSONL=%~1"
if not "%~2"=="" set "BASE=%~2"

if not exist "%JSONL%" (
  call scripts\hls\train_hls_llm_all.bat config\suts_and_rw.txt || exit /b 1
)

if "%OPENAI_API_KEY%"=="" exit /b 1
set PYTHONIOENCODING=utf-8

python -u scripts\hls\openai_ft_train_all.py --jsonl "%JSONL%" --base_model "%BASE%"
exit /b %ERRORLEVEL%
