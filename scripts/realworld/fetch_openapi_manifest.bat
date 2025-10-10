@echo off
REM ================== FETCH OPENAPI (manifest-driven, cmd.exe safe) ==================
REM - Manifest preferred at scripts\realworld\manifest.json; falls back to packs\realworld/_world
REM - Python handles the whole loop & downloads (urllib)
REM - Supports both manifest shapes:
REM     { "systems": { "name": { "url": "..."} , ... } }
REM     { "systems": [ { "name": "...", "url": "...", "format": "yaml|json" }, ... ] }

setlocal EnableExtensions DisableDelayedExpansion

REM ---- Prefer scripts\realworld\manifest.json; else fall back to packs\... ----
set "RW_DIR=scripts\realworld"
if not exist "%RW_DIR%\manifest.json" set "RW_DIR=packs\realworld"
if not exist "%RW_DIR%\manifest.json" set "RW_DIR=packs\real_world"
set "MANIFEST=%RW_DIR%\manifest.json"

if not exist "%MANIFEST%" (
  echo [FATAL] manifest.json not found under scripts\realworld or packs\realworld/_world
  exit /b 3
)

REM ---- Resolve Python (prefer venv if present) ----
set "PYEXE="
if defined VIRTUAL_ENV set "PYEXE=%VIRTUAL_ENV%\Scripts\python.exe"
if not defined PYEXE set "PYEXE=python"

echo [INFO] Using manifest: %MANIFEST%

REM ---- Build helper Python; handles both dict and list system shapes ----
set "TMPPY=%TEMP%\fetch_openapi_from_manifest.py"
> "%TMPPY%" echo import json, os, sys, urllib.request, urllib.error
>> "%TMPPY%" echo man = r"%MANIFEST%".replace("^", "")
>> "%TMPPY%" echo base = os.path.abspath(os.path.join(os.path.dirname(man), r"..\..\packs\realworld"))
>> "%TMPPY%" echo with open(man, "r", encoding="utf-8") as f: data = json.load(f)
>> "%TMPPY%" echo systems = data.get("systems") or []
>> "%TMPPY%" echo entries = []
>> "%TMPPY%" echo if isinstance(systems, dict):
>> "%TMPPY%" echo ^    for _name, _ent in systems.items():
>> "%TMPPY%" echo ^        _ent = _ent or {}
>> "%TMPPY%" echo ^        entries.append({"name": _name, "url": _ent.get("url",""), "format": _ent.get("format")})
>> "%TMPPY%" echo elif isinstance(systems, list):
>> "%TMPPY%" echo ^    for _ent in systems:
>> "%TMPPY%" echo ^        if not isinstance(_ent, dict): continue
>> "%TMPPY%" echo ^        entries.append({"name": _ent.get("name",""), "url": _ent.get("url",""), "format": _ent.get("format")})
>> "%TMPPY%" echo else:
>> "%TMPPY%" echo ^    print("[FATAL] 'systems' must be a dict or list"); sys.exit(8)
>> "%TMPPY%" echo print("[INFO] Systems:", len(entries))
>> "%TMPPY%" echo for ent in entries:
>> "%TMPPY%" echo ^    name = (ent.get("name") or "").strip()
>> "%TMPPY%" echo ^    url  = (ent.get("url")  or "").strip()
>> "%TMPPY%" echo ^    if not name:
>> "%TMPPY%" echo ^        print("[WARN] Skipping entry with empty name"); continue
>> "%TMPPY%" echo ^    if not url:
>> "%TMPPY%" echo ^        print("[WARN] Skipping", name, "(empty URL)"); continue
>> "%TMPPY%" echo ^    ext = (ent.get("format") or "").strip().lower()
>> "%TMPPY%" echo ^    if ext not in ("json","yaml","yml",""):
>> "%TMPPY%" echo ^        ext = ""
>> "%TMPPY%" echo ^    if not ext:
>> "%TMPPY%" echo ^        lu = url.lower()
>> "%TMPPY%" echo ^        ext = "yaml" if (lu.endswith(".yaml") or lu.endswith(".yml")) else "json"
>> "%TMPPY%" echo ^    if ext == "yml": ext = "yaml"
>> "%TMPPY%" echo ^    out_dir = os.path.join(base, name)
>> "%TMPPY%" echo ^    out_path = os.path.join(out_dir, f"openapi.{ext}")
>> "%TMPPY%" echo ^    os.makedirs(out_dir, exist_ok=True)
>> "%TMPPY%" echo ^    print("[FETCH]", name, "->", out_path)
>> "%TMPPY%" echo ^    try:
>> "%TMPPY%" echo ^        with urllib.request.urlopen(url) as r, open(out_path, "wb") as w:
>> "%TMPPY%" echo ^            w.write(r.read())
>> "%TMPPY%" echo ^    except urllib.error.HTTPError as e:
>> "%TMPPY%" echo ^        print("[ERROR] HTTP", e.code, name, "from", url); continue
>> "%TMPPY%" echo ^    except urllib.error.URLError as e:
>> "%TMPPY%" echo ^        print("[ERROR] URL", e.reason, name, "from", url); continue
>> "%TMPPY%" echo ^    except Exception as e:
>> "%TMPPY%" echo ^        print("[ERROR]", type(e).__name__, name, "from", url, "-", e); continue
>> "%TMPPY%" echo ^    print("[OK]", name)

"%PYEXE%" "%TMPPY%"
exit /b %ERRORLEVEL%
