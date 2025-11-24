@echo off
setlocal EnableExtensions EnableDelayedExpansion

rem ======================================================================
rem Build per-endpoint LLE field catalogs from OpenAPI.json for SUTs in LIST
rem Usage:
rem   scripts\readable\build_field_catalog_for_list.bat  config\suts_and_rw.txt  [auto|7_suts_llm_provider|real_world_llm_provider]
rem Outputs:
rem   artifacts\lle_fields\<provider>\<sut>\field_catalog.json
rem ======================================================================

rem -------------------- Args & basic paths --------------------
if "%~1"=="" (
  echo Usage: %~nx0 ^<LIST_FILE^> [auto^|7_suts_llm_provider^|real_world_llm_provider]
  exit /b 1
)
set "LIST=%~1"
set "PROV_FOCUS=%~2"
if not defined PROV_FOCUS set "PROV_FOCUS=auto"

set "ROOT=%CD%"
if exist "%ROOT%\.venv\Scripts\python.exe" (
  set "PY=%ROOT%\.venv\Scripts\python.exe"
) else (
  set "PY=python"
)
set "EXTRACTOR=%ROOT%\scripts\readable\extract_field_catalog.py"

echo [DBG] Python="%PY%"
echo [DBG] Extractor="%EXTRACTOR%"
echo Using LIST: %LIST%
echo Providers focus: %PROV_FOCUS%
echo.

if not exist "%LIST%" (
  echo [ERR] LIST not found: "%LIST%"
  exit /b 2
)
if not exist "%EXTRACTOR%" (
  echo [ERR] extractor not found: "%EXTRACTOR%"
  exit /b 3
)

rem -------------------- State --------------------
set "HEADPROV="
set "CURPROV="
set /a LN=0

rem -------------------- Iterate config --------------------
for /f "usebackq tokens=* delims=" %%L in ("%LIST%") do (
  set /a LN+=1
  set "RAW=%%L"

  rem Strip UTF-8 BOM (shows as ï»¿) if present at start of line
  if "!RAW:~0,3!"=="ï»¿" set "RAW=!RAW:~3!"

  echo [DBG] Ln=!LN! RAW="!RAW!"

  rem Skip blanks
  if "!RAW!"=="" (
    echo [DBG]      empty -> skip
    echo.
  ) else (
    rem Treat ; or # as header/comment
    if "!RAW:~0,1!"==";" (
      set "HEADPROV="
      for /f "tokens=2 delims=()" %%P in ("!RAW!") do set "HEADPROV=%%P"
      for /f "tokens=* delims= " %%Q in ("!HEADPROV!") do set "HEADPROV=%%Q"

      if /i not "%PROV_FOCUS%"=="auto" (
        set "CURPROV=%PROV_FOCUS%"
        echo [DBG]      HEADER found. Head="!HEADPROV!" but focus arg overrides -> CURPROV="!CURPROV!"
      ) else (
        set "CURPROV=!HEADPROV!"
        echo [DBG]      HEADER -> HEADPROV="!HEADPROV!"  CURPROV="!CURPROV!"
      )
      echo.
    ) else if "!RAW:~0,1!"=="#" (
      echo [DBG]      comment -> skip
      echo.
    ) else (
      rem SUT line
      set "SUT=!RAW!"
      rem Trim leading spaces on SUT (defensive)
      for /f "tokens=* delims= " %%S in ("!SUT!") do set "SUT=%%S"

      rem Decide provider source: ARG, HEADER, or AUTOPROBE
      set "PROV_SRC="
      set "EFFECTIVE_PROV="

      if /i not "%PROV_FOCUS%"=="auto" (
        set "EFFECTIVE_PROV=%PROV_FOCUS%"
        set "PROV_SRC=ARG"
      ) else if defined CURPROV (
        set "EFFECTIVE_PROV=!CURPROV!"
        set "PROV_SRC=HEADER"
      ) else (
        set "PROV_SRC=AUTOPROBE"
      )

      echo [DBG]      SUT="!SUT!"
      echo [DBG]      Provider source=!PROV_SRC!  (focus="%PROV_FOCUS%"  head="!HEADPROV!"  cur="!CURPROV!")

      rem -------------------- Determine OpenAPI.json (JSON only) --------------------
      set "OPENAPI="
      if /i "!PROV_SRC!"=="ARG" (
        if /i "!EFFECTIVE_PROV!"=="7_suts_llm_provider" (
          set "C=%ROOT%\packs\7_suts\!SUT!\openapi.json"
          echo [DBG]      probe 7_suts JSON: "!C!"
          if exist "!C!" set "OPENAPI=!C!"
        ) else if /i "!EFFECTIVE_PROV!"=="real_world_llm_provider" (
          set "C=%ROOT%\packs\realworld\!SUT!\openapi.json"
          echo [DBG]      probe realworld JSON: "!C!"
          if exist "!C!" set "OPENAPI=!C!"
        ) else (
          echo [WARN]     Unknown provider focus "!EFFECTIVE_PROV!" -> will autoprobe
        )
      )

      if not defined OPENAPI if /i "!PROV_SRC!"=="HEADER" (
        if /i "!EFFECTIVE_PROV!"=="7_suts_llm_provider" (
          set "C=%ROOT%\packs\7_suts\!SUT!\openapi.json"
          echo [DBG]      header->probe 7_suts JSON: "!C!"
          if exist "!C!" set "OPENAPI=!C!"
        ) else if /i "!EFFECTIVE_PROV!"=="real_world_llm_provider" (
          set "C=%ROOT%\packs\realworld\!SUT!\openapi.json"
          echo [DBG]      header->probe realworld JSON: "!C!"
          if exist "!C!" set "OPENAPI=!C!"
        ) else (
          echo [WARN]     Header provider "!EFFECTIVE_PROV!" not recognized -> will autoprobe
        )
      )

      if not defined OPENAPI (
        rem AUTOPROBE both roots
        set "C1=%ROOT%\packs\7_suts\!SUT!\openapi.json"
        set "C2=%ROOT%\packs\realworld\!SUT!\openapi.json"
        echo [DBG]      autoprobe 7_suts JSON: "!C1!"
        if exist "!C1!" set "OPENAPI=!C1!" & set "EFFECTIVE_PROV=7_suts_llm_provider"
        if not defined OPENAPI (
          echo [DBG]      autoprobe realworld JSON: "!C2!"
          if exist "!C2!" set "OPENAPI=!C2!" & set "EFFECTIVE_PROV=real_world_llm_provider"
        )
      )

      if not defined OPENAPI (
        echo [WARN]     OpenAPI.json not found for SUT "!SUT!" in:
        echo [WARN]       %ROOT%\packs\7_suts\!SUT!\openapi.json
        echo [WARN]       %ROOT%\packs\realworld\!SUT!\openapi.json
        echo.
      ) else (
        echo [DBG]      chosen OPENAPI="!OPENAPI!"
        echo [DBG]      effective provider="!EFFECTIVE_PROV!"

        rem -------------------- Output path --------------------
        set "OUTDIR=%ROOT%\artifacts\lle_fields\!EFFECTIVE_PROV!\!SUT!"
        if not exist "!OUTDIR!" mkdir "!OUTDIR!" >nul 2>nul
        set "OUTP=!OUTDIR!\field_catalog.json"
        echo [DBG]      OUTDIR="!OUTDIR!"
        echo [DBG]      OUTP="!OUTP!"

        rem -------------------- Run extractor --------------------
        echo [RUN ]     "!PY!" "!EXTRACTOR!" --openapi "!OPENAPI!" --out "!OUTP!"
        call "!PY!" "!EXTRACTOR!" --in "!OPENAPI!" --out "!OUTP!"
        if errorlevel 1 (
          echo [ERR ]     extractor failed for !EFFECTIVE_PROV!\!SUT!
        ) else (
          if exist "!OUTP!" (
            for %%Z in ("!OUTP!") do set "SZ=%%~zZ"
            echo [OK  ]     wrote "!OUTP!" size=!SZ! bytes
          ) else (
            echo [WARN]     extractor returned OK but output missing: "!OUTP!"
          )
        )
        echo.
      )
    )
  )
)

echo --------------------------------------------
echo DONE.
exit /b 0
