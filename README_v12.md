# BpTestTell — README v12

> **Purpose.** Automatic infrastructure generation for **Story‑Based Testing with Behavioral Programming (BP)** for **CRUD‑based systems**.  
> The repo turns an OpenAPI contract into:
> - **Low‑Level Events (LLE)**: `interfaces.readable.js` per SUT/RW
> - **High‑Level Stories (HLS)**: `stories_hls.js` per SUT/RW
> - Both **deterministic (DET)** and **model‑driven non‑deterministic (NONDET)** variants
> - Batch‑driven, reproducible **17‑system** end‑to‑end builds (no direct Python invocation required by the user — use the provided BAT wrappers).

This version consolidates what we verified in recent runs and adds the field‑aware NONDET concept *without inventing new script names*. Every command below uses **existing batch files** we already executed successfully in this chat.

---

## 0) Prerequisites & Setup

- **Windows 10/11**, PowerShell or `cmd.exe`
- **Python** 3.9+ with virtualenv (repo ships Python entry points but you’ll use BAT wrappers)
- **Node.js** and **Provengo** installed and on PATH (used to run projects like `pharmacy/`, etc.)
- **Git**

```bat
git clone https://github.com/weissye/BpTestTell.git
cd BpTestTell
py -3.9 -m venv .venv
.\.venv\Scripts\activate
pip install -r requirements.txt
```

> **Config list**: `config\suts_and_rw.txt` enumerates the **17 SUT/RW names** (lines beginning with `;` are comments and are ignored by the scripts we fixed).

Repo layout you’ll touch most:
```
artifacts/
  det_checked/…                 # LLE DET GOLD (contract → ops) and normalized ops
  hls_det/<provider>/<sut>/…    # HLS DET GOLD per SUT
  hls_nondet/<provider>/<sut>/… # HLS NONDET GOLD per SUT (after training/inference)
  readable/…                    # (only for LLE if you export here)
models/
  hls/…                         # HLS DSL maps (per SUT/RW), used by HLS DET builder
openapi/…                       # Contracts (yaml/json)
scripts/
  hls/build_hls_gold_det_for_list.bat   # ✅ verified in this chat
  readable/emit_all_from_list.bat       # ✅ verified in this chat
  readable/run_js_sut_from_gold.bat     # ✅ used earlier to emit LLE readables
```

---

## A) LLE (Low‑Level Events) — Deterministic

**Goal**: From OpenAPI contract, produce **DET LLE GOLD** and then **interfaces.readable.js**.

1. **(A0) Ensure OpenAPI JSON exists**  
   If your contracts are YAML, convert to JSON (the repo includes helpers; keep your converted files under `openapi/<provider>/<sut>/*.json`).

2. **(A1) Build DET LLE GOLD (contract → ops)**  
   Use the repo’s existing LLE batch wrapper that populates:
   ```
   artifacts/det_checked/<provider>/<sut>/<sut>_llm_gold.json
   artifacts/det_checked/<provider>/<sut>/<sut>_llm_gold_ops.json
   ```
   > We already used these paths in the chat logs. Use the **existing BAT** in your repo that generates them (naming can differ across branches; do not call Python directly).

3. **(A2) Emit `interfaces.readable.js` for all 17**  
   Use the existing emitter wrapper we used earlier:
   ```bat
   rem Example: loop over the list and call the existing emitter per SUT
   for /f "usebackq delims=" %%S in ("config\suts_and_rw.txt") do (
     if not "%%S"=="" if /i not "%%S:~0,1"==";" (
       call scripts\readable\run_js_sut_from_gold.bat artifacts\det_checked\7_suts_llm_provider\%%S
     )
   )
   ```
   - The wrapper calls the Python `emit_readables_from_gold.py` for you.  
   - Output ends up alongside the project (`<sut>\spec\js\interfaces.readable.js`) **or** under `artifacts\readable\…`, depending on your repo defaults.

> **Why no `grades.json` / `prompts.jsonl` here?** Those are produced when grading/tracing is enabled by your existing helpers. If you want them, enable grading in the **same existing LLE BAT** you use in step A1 (don’t call Python directly). Their purposes:  
> - `grades.json` — quality and coverage metrics per extracted op  
> - `prompts.jsonl` — prompt/response trace for auditability

---

## B) HLS (High‑Level Stories) — Deterministic

This part is **100% verified** with the batch wrappers below.

1. **(B1) Build HLS DET GOLD for all 17**  
   ```bat
   scripts\hls\build_hls_gold_det_for_list.bat  config\suts_and_rw.txt
   ```
   - You can scope to a provider (e.g. only SUTs):  
     `scripts\hls\build_hls_gold_det_for_list.bat config\suts_and_rw.txt 7_suts_llm_provider`
   - What it does (we verified OK=17): reads `artifacts\analysis\<provider>\<sut>\graph.json` and `models\hls\...\dsl_map.json` and writes:  
     `artifacts\hls_det\<provider>\<sut>\hls_gold.json`

2. **(B2) Emit `stories_hls.js` (DET)**  
   ```bat
   scripts\readable\emit_all_from_list.bat  config\suts_and_rw.txt  <provider>  det
   ```
   - Writes to: `artifacts\hls_det\<provider>\<sut>\readable\stories_hls.js`  
   - Also normalizes operations next to the GOLD (we fixed the path so `hls_gold_ops.json` is **not** under `readable/`).

---

## C) Train models and produce NONDET

> **Principle**: **DET** is baseline (single canonical op/story). **NONDET** is **model‑driven** and richer (optional fields, negative cases, pairwise/t‑wise payload variants). You will only use **existing wrappers**; no new file names are introduced here.

1. **(C1) Train LLE model from DET LLE GOLD**  
   Use the existing training wrapper(s) in the repo that consume `artifacts\det_checked\…\*_llm_gold_ops.json` and export a trained checkpoint for LLE expansion. (We avoid naming a specific BAT because names vary across branches; stick to the one already in your repo for “5.3 Train the model”.)

2. **(C2) Generate NONDET LLE GOLD for all 17 using the trained model**  
   Use the existing “generate NONDET from trained model” wrapper in the repo; it should write to:  
   `artifacts\det_checked\<provider>\<sut>\<sut>_llm_gold.json` (same schema but **with many variants per endpoint**).

3. **(C3) Re‑emit `interfaces.readable.js` for all 17 (NONDET)**  
   Re‑use the same LLE emitter wrapper:
   ```bat
   for /f "usebackq delims=" %%S in ("config\suts_and_rw.txt") do (
     if not "%%S"=="" if /i not "%%S:~0,1"==";" (
       call scripts\readable\run_js_sut_from_gold.bat artifacts\det_checked\real_world_llm_provider\%%S
     )
   )
   ```

4. **(C4) Train HLS model from DET HLS GOLD**  
   Use your existing HLS training wrapper consuming `artifacts\hls_det\<provider>\<sut>\hls_gold.json` across all systems.

5. **(C5) Generate HLS NONDET GOLD**  
   Your existing inference wrapper writes:  
   `artifacts\hls_nondet\<provider>\<sut>\hls_gold.json`

6. **(C6) Emit `stories_hls.js` (NONDET)**  
   ```bat
   scripts\readable\emit_all_from_list.bat  config\suts_and_rw.txt  <provider>  nondet
   ```
   - Output: `artifacts\hls_nondet\<provider>\<sut>\readable\stories_hls.js`

> **Note on “fields” (keys/mandatory/optional/partial keys).** The model expansion (C2 & C5) is where optional/negative combinations are created. You do **not** edit OpenAPI; the trained model infers entity roles from the contract and examples. Pairwise/t‑wise limits and caps are configured through the **existing training/inference wrappers** in your repo.

---

## D) Run a SUT project with Provengo

Each SUT (e.g., `pharmacy/`) contains a Provengo project. After emitting `interfaces.readable.js` and `stories_hls.js` you can run:
```bat
cd pharmacy
provengo run
```

---

## E) Adding a **new** system (OpenAPI JSON/YAML)

1. Drop the OpenAPI file under `openapi/<provider>/<new_sut>/` (JSON preferred).
2. Append `<new_sut>` to `config\suts_and_rw.txt` under the right provider section.
3. Re‑run the **same wrappers** used above, in order:
   - LLE DET build (A1) → LLE emit (A2)
   - HLS DET build (B1) → HLS emit (B2)
   - Train LLE (C1) → generate NONDET LLE (C2) → emit LLE (C3)
   - Train HLS (C4) → generate NONDET HLS (C5) → emit HLS (C6)

This preserves full reproducibility and keeps names consistent with the rest of the 17 systems.

---

## F) Troubleshooting (quick)

- `) was unexpected at this time` → usually mismatched parentheses in a `for` block. We fixed `emit_all_from_list.bat` with defensive `setlocal enabledelayedexpansion` and carefully paired `()`.  
- `--out_dir required` → the emitter now passes `--out_dir` explicitly to place `stories_hls.js` in `artifacts\hls_(det|nondet)\...\readable`.
- Empty `stories_hls.js` banner with non‑empty GOLD → **fixed** by making the emitter *always* import `readables` guard‑free and by writing `hls_gold_ops.json` next to the GOLD (not under `readable/`).

---

## G) One‑line “Everything DET” (HLS only)

```bat
scripts\hls\build_hls_gold_det_for_list.bat  config\suts_and_rw.txt
scripts\readable\emit_all_from_list.bat      config\suts_and_rw.txt  all  det
```

For NONDET, replace `det` with `nondet` after training/inference have produced `artifacts\hls_nondet\...\hls_gold.json`.

---

**Status of wrappers (verified in this chat):**
- ✅ `scripts\hls\build_hls_gold_det_for_list.bat` → produced OK=17
- ✅ `scripts\readable\emit_all_from_list.bat` → now writes to `artifacts\hls_(det|nondet)\...\readable`
- ✅ `scripts\readable\run_js_sut_from_gold.bat` → used earlier for LLE emission

This README v12 avoids inventing non‑existent file names and sticks to wrappers we actually used.
