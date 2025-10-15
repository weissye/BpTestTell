:: scripts\hls\train_openai_all_nowait.bat
@echo off
setlocal
set "JSONL=models\hls\ALL\train.jsonl"
set "BASE=gpt-4o-mini-2024-07-18"
if not exist "%JSONL%" call scripts\hls\train_hls_llm_all.bat config\suts_and_rw.txt || exit /b 1
python -u scripts\hls\openai_ft_train_all_nowait.py --jsonl "%JSONL%" --base_model "%BASE%"
exit /b %ERRORLEVEL%
