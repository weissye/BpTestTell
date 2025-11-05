@echo off
setlocal EnableExtensions EnableDelayedExpansion
rem Pure deterministic DET from OpenAPI; emits ops + shards + det_gold (+ compat llm_gold). No LLM.

rem --- repo root ---
pushd "%~dp0\..\.."
set "ROOT=%CD%"

rem --- python ---
set "PY=%ROOT%\.venv\Scripts\python.exe"
if not exist "%PY%" set "PY=python"

set "GEN=%ROOT%\scripts\pipelines\det_from_openapi.py"
echo [INFO] CWD=%ROOT%
echo [INFO] DET generator (no LLM) = %GEN%
echo ------------------------------------------------------------

rem RW list (stripe removed)
for %%S in (directus github gitea jira_cloud keycloak_admin meilisearch netbox trello twilio zulip) do (
  set "SUT=%%S"
  set "SPEC=%ROOT%\packs\realworld\%%S\openapi.json"
  set "OUT=%ROOT%\artifacts\det_checked\real_world_llm_provider\%%S"

  echo ==== !SUT! ^(REAL-WORLD DET^) ====
  echo [RUN ] spec="!SPEC!"  outdir="!OUT!"
  if not exist "!OUT!" mkdir "!OUT!" >nul 2>&1

  "%PY%" "%GEN%" "!SPEC!" "!OUT!" --sut "!SUT!" --shards 24 --emit_llm_gold
  if errorlevel 1 (
    echo [ERR ] det_from_openapi.py failed for !SUT!
    goto :fail
  )

  for %%F in ("!OUT!\!SUT!_llm_gold_ops.json" "!OUT!\!SUT!_det_gold.json" "!OUT!\!SUT!_llm_gold.json") do (
    if not exist "%%~fF" (
      echo [ERR ] expected "%%~fF" but it does not exist.
      goto :fail
    )
    "%PY%" -c "import json,os,sys; p=sys.argv[1]; json.load(open(p,'r',encoding='utf-8')); print('[OK  ]', os.path.basename(p), 'valid JSON, size', os.path.getsize(p))" "%%~fF"
  )
)

echo.
echo [DONE] Real-world DET (pure OpenAPI; ops + shards + det_gold) completed.
popd
exit /b 0

:fail
popd
exit /b 1
