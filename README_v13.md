# BpTestTell — README (Version 13)

> **Purpose.** Automatic infrastructure generation for **Story‑Based Testing with Behavioral Programming (BP)** for **CRUD‑based systems**.  
> The repository turns an OpenAPI contract into:
> - **Low‑Level Events (LLE)** → `interfaces.readable.js` (DET & NONDET)
> - **High‑Level Stories (HLS)** → `stories_hls.js` (DET & NONDET)
> - Batch‑driven, Windows‑first, **17‑system** reproducible builds (no direct Python required — use the provided BAT wrappers).

---

## 0) Prerequisites & Setup

- **Windows 10/11** (`cmd.exe` or PowerShell)
- **Python 3.9+**, **Node.js**, and **Provengo** on PATH
- **Git**

```bat
git clone https://github.com/weissye/BpTestTell.git
cd BpTestTell
py -3.9 -m venv .venv
.\.venv\Scriptsctivate
pip install -r requirements.txt
```

**Environment flags (global, can be overridden later):**
```bat
rem Enable prompt trace and grading artifacts during DET/NONDET LLE generation
set "LLE_ENABLE_PROMPT_TRACE=0"   rem 1 to write artifacts\det_checked\...\prompts.jsonl
set "LLE_ENABLE_GRADING=0"        rem 1 to write artifacts\det_checked\...\grades.json

rem For NONDET model training/inference (if required by your branch)
set "OPENAI_API_KEY=sk-..."
```

**Config list**: `config\suts_and_rw.txt` — authoritative list of all **17** systems (comment lines start with `;`).

**Frequently touched folders:**
```
artifacts/
  analysis/                          # HLS graphs, etc.
  det_checked/                       # LLE DET (gold, *_ops, grades, prompts)
  hls_det/                           # HLS DET gold
  hls_nondet/                        # HLS NONDET gold
models/
  hls/                               # DSL maps per SUT/RW
packs/
  7_suts/<sut>/openapi.json
  realworld/<name>/openapi.(json|yaml|yml)
scripts/
  analysis/
  hls/
  pipelines/
  readable/
  training/
  realworld/
```

---

## A) LLE (Low‑Level Events) — Deterministic

**Goal:** From OpenAPI → **DET LLE GOLD** → **interfaces.readable.js** (for all 17). This section uses only **existing BAT files**.

### A0) Contracts ready + flags
- Ensure each system has `openapi.json` under `packs\7_suts\<sut>\` or `packs\realworld\<name>\` (convert YAML → JSON if needed).
- **Set global flags (optional):**
  ```bat
  set "LLE_ENABLE_PROMPT_TRACE=1"   rem tell pipeline to write prompts.jsonl
  set "LLE_ENABLE_GRADING=1"        rem tell pipeline to write grades.json
  ```

### A1) (RW only) Fetch OpenAPI by manifest
**Input →** `scripts\realworld\manifest.json`  
**Run →**
```bat
scripts\realworld\fetch_openapi_manifest.bat
```
**Output →** `packs\realworld\<name>\openapi.(yaml|yml|json)`

### A2) Build **DET LLE GOLD** (contract → ops) — **for all 17**
**Input →** `packs\[7_suts|realworld]\<name>\openapi.json`  
**Run (lists) →**
```bat
scripts\pipelines\run_det_all_7suts.bat
scripts\pipelines\run_det_real_world_all.bat
```
**Run (single) →**
```bat
scripts\pipelines\run_det_one_sut.bat  <sut>  7_suts_llm_provider
```
**Output →**
```
artifacts\det_checked\<provider>\<sut>\<sut>_llm_gold.json
artifacts\det_checked\<provider>\<sut>\<sut>_llm_gold_ops.json
artifacts\det_checked\<provider>\<sut>\grades.json      (when LLE_ENABLE_GRADING=1)
artifacts\det_checked\<provider>\<sut>\prompts.jsonl    (when LLE_ENABLE_PROMPT_TRACE=1)
```

### A3) Train **LLE** model (from DET LLE GOLD) — **for all 17**
**Input →** `artifacts\det_checked\<provider>\<sut>\<sut>_llm_gold_ops.json`  
**Run (lists) →**
```bat
scripts\training\e2e_train_7suts_real_all.bat
```
**Output →** model checkpoint(s) under `artifacts\lle_model\...` (exact path depends on your branch).

### A4) Generate **NONDET LLE GOLD** (model‑driven) — **for all 17**
**Input →**
```
artifacts\det_checked\<provider>\<sut>\<sut>_llm_gold_ops.json
packs\[7_suts|realworld]\<name>\openapi.json
```
**Optional per‑run flags (can override A0):**
```bat
set "LLE_ENABLE_PROMPT_TRACE=1"
set "LLE_ENABLE_GRADING=1"
```
**Run (lists) →**
```bat
scripts\training\e2e_train_7suts_real_all.bat
rem (same wrapper performs inference in your branch; keep using the existing BAT)
```
**Output →**
```
artifacts\det_checked\<provider>\<sut>\<sut>_llm_gold.json     rem enriched NONDET ops
artifacts\det_checked\<provider>\<sut>\<sut>_llm_gold_ops.json rem normalized ops
artifacts\det_checked\<provider>\<sut>\grades.json            (if enabled)
artifacts\det_checked\<provider>\<sut>\prompts.jsonl          (if enabled)
```

### A5) Emit **interfaces.readable.js** (DET & NONDET) — **for all 17**
**DET Input →** `artifacts\det_checked\<provider>\<sut>\<sut>_llm_gold.json`  
**NONDET Input →** same path after A4 (now enriched)  
**Run (lists) →**
```bat
scripts\readable\run_js_all_sut_from_gold.bat
scripts\readable\run_js_all_rw_from_gold.bat
```
**Run (single) →**
```bat
scripts\readable\run_js_sut_from_gold.bat  artifacts\det_checked\<provider>\<sut>
```
**Output (by repo defaults) →**
```
<sut>\spec\js\interfaces.readable.js    or   artifacts\readable\<provider>\<sut>\js\interfaces.readable.js
lifecycle.readable.js may also be emitted when enabled
```

---

## B) HLS (High‑Level Stories) — Deterministic & NONDET

> The HLS flow mirrors Version 7 and remains valid. Step **B4 is required** (no longer optional). Outputs of each step are inputs to the next.

### B1) OpenAPI → Graph (for list)
```bat
scripts\analysis\run_openapi_to_graph_for_list.bat  config\suts_and_rw.txt
```
**Output →** `artifacts\analysis\<provider>\<sut>\graph.json`

### B2) Graph → DSL map (for list)
```bat
scripts\analysis\build_dsl_from_graph_for_list.bat  config\suts_and_rw.txt
```
**Output →** `models\hls\(SUTs|RWs)\<sut>\dsl_map.json`

### B3) Graph + DSL → HLS GOLD (DET) (for list)
```bat
scripts\hls\build_hls_gold_det_for_list.bat  config\suts_and_rw.txt  7_suts_llm_provider
rem or:
scripts\hls\build_hls_gold_det_for_list.bat  config\suts_and_rw.txt  real_world_llm_provider
```
**Output →** `artifacts\hls_det\<provider>\<sut>\hls_gold.json`

### B4) DET GOLD → training set (for list) **(Required)**
```bat
scripts\hls\prep_hls_training_from_det_gold_for_list.bat  config\suts_and_rw.txt  7_suts_llm_provider  SUTs
rem or use real_world_llm_provider for RW
```
**Output →** `artifacts\hls_training\<provider>\<sut>\train.jsonl`

### B5) Graph + DSL (+ model outputs) → HLS GOLD (NONDET) (for list)
```bat
scripts\hls\build_hls_gold_nondet_for_list.bat  config\suts_and_rw.txt  7_suts_llm_provider
rem or:
scripts\hls\build_hls_gold_nondet_for_list.bat  config\suts_and_rw.txt  real_world_llm_provider
```
**Output →** `artifacts\hls_nondet\<provider>\<sut>\hls_gold.json`

### B6) Emit **stories_hls.js** (DET / NONDET) (for list)
```bat
rem DET
scripts\readable\emit_all_from_list.bat  config\suts_and_rw.txt  <provider>  det
rem NONDET
scripts\readable\emit_all_from_list.bat  config\suts_and_rw.txt  <provider>  nondet
```
**Output →**
```
artifacts\hls_det\<provider>\<sut>\readable\stories_hls.js
artifacts\hls_nondet\<provider>\<sut>\readable\stories_hls.js
```

---

## C) Running the **Pharmacy** Provengo project

```
pharmacy/
  spec/js/
    interfaces.readable.js
    lifecycle.readable.js
    stories_hls.js        (DET/NONDET)
  dsls/
  libs/
  resources/
```

```bat
cd pharmacy
provengo run [-Dhost=127.0.0.1 -Dport=5014 -Dseed=12345 -DnRuns=1]
```

---

## D) Adding a **new** system (OpenAPI JSON/YAML)

1. Place the contract under `openapi/<provider>/<new_sut>/openapi.json` (or YAML).
2. Add `<new_sut>` to `config\suts_and_rw.txt` in the appropriate provider section.
3. Run end‑to‑end:
   - **LLE**: A1→A2→A3→A4→A5
   - **HLS**: B1→B2→B3→B4→B5→B6
4. Run the Provengo project for `<new_sut>` (if present) or integrate the generated readables/stories into your BP project.

---

## E) Checklist: how this README was assembled

- Section **A** is rebuilt to ensure **all steps are reproducible by BAT only**, and to include the **prompt trace / grading** flags (A0/A4).  
- Section **B** mirrors the **Version 7** HLS pipeline with corrections: **B4 is mandatory** and the final emission writes to `artifacts\hls_(det|nondet)\<provider>\<sut>\readable\stories_hls.js` to match our verified runs.  
- **Pharmacy** usage matches the established project layout.  
- **New system** instructions are kept concise and align with the list‑driven wrappers.

---

Happy testing!
