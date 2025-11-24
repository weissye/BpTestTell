@echo off
setlocal EnableExtensions EnableDelayedExpansion
set ROOT=artifacts\det_checked

for %%P in (7_suts_llm_provider real_world_llm_provider) do (
  if exist "%ROOT%\%%P" (
    for /D %%S in ("%ROOT%\%%P\*") do (
      if exist "%%S\*_llm_gold.json" (
        echo [RUN ] run_js_sut_from_gold on %%S
        call scripts\readable\run_js_sut_from_gold.bat "%%S"
      ) else (
        echo [SKIP] no gold in %%S
      )
    )
  )
)
echo [DONE] run_js_all
