:: scripts\hls\watch_openai_ft_job.bat
@echo off
setlocal
python -u scripts\hls\watch_openai_ft_job.py %*
exit /b %ERRORLEVEL%
