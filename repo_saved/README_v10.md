# BpTestTell — README (Version 10)
_Last updated: 2025-11-15_

> **Contract → LLE → HLS** pipelines for BP-based CRUD testing (**DET** & **NONDET**)  
> **Windows-first, BAT-only reproducible runs** (no direct Python invocation for list runs)

This repository transforms **OpenAPI** contracts into executable **Behavioral Programming** (BP) artifacts:
- **LLE** (low‑level events) → `interfaces.readable.js`, `lifecycle.readable.js` (DET baseline and expanded NONDET variants)
- **HLS** (high‑level stories) → `stories_hls.js` (**DET** and **NONDET** variants)

All steps are driven by **wrapper `.bat`** scripts. Every step lists **Input → Run → Output** to chain the pipeline end‑to‑end across **all 17 systems**.

---

## 0) Prerequisites

- **Windows 10/11** (`cmd.exe`) and **Python 3.10+**
- **Provengo** on PATH (`provengo --version`)
- **OpenAPI** specs under `packs\` (7 SUTs provided; real‑world specs fetched via manifest)
- **LLM key** for NONDET steps (set in shell before running):
  ```bat
  set "OPENAI_API_KEY=sk-..."
  ```
- **SUT servers** reachable (host/port) before running Provengo projects.

---

## 1) Repository Layout (aligned with current tree)

```
artifacts/
  analysis/                        # HLS graphs from OpenAPI
  det_checked/                     # LLE DET gold, grades, prompts
  lle_fields/                      # NEW: per-endpoint field catalogs (keys/mandatory/optional)
  lle_nondet/                      # NEW: expanded NONDET LLE gold (variants)
  hls_det/                         # HLS DET gold (hls_gold.json)
  hls_nondet/                      # HLS NONDET gold (hls_nondet_gold.json)
  logs/                            # optional step logs

config/
  suts_and_rw.txt                  # the authoritative 17-item list

packs/
  7_suts/<sut>/openapi.json
  realworld/<name>/openapi.(json|yaml|yml)

pharmacy/, library/, ...           # Provengo projects
scripts/
  analysis/
  hls/
  readable/
  realworld/
  pipelines/
  training/
```

> **Convention:** Generators that **build** GOLDs live under `scripts\hls\` (for HLS) or the relevant sub-tree; **emitters** that write JS live under `scripts\readable\`.

---

## 2) Configuration

Use a single **list file** for both SUTs and real‑world targets:  
`config\suts_and_rw.txt` — one name per line (the 17 systems).

**Provider** is `7_suts_llm_provider` for SUTs and `real_world_llm_provider` for real‑world targets.

**Standard param order for “for-list” BATs:**  
`[LIST_FILE]  [PROVIDER]  [SCOPE]` where `SCOPE` is `SUTs` or `RWs` unless stated otherwise.

---

# 3) Process A — OpenAPI → LLE → `interfaces.readable.js`

### A0) (Optional) Convert YAML → JSON
**Input →** `packs\...\openapi.yaml|yml`  
**Run →** (single file utility)
```bat
scripts\realworld\yaml_to_json.bat  packs\realworld\<name>\openapi.yaml
```
**Output →** `packs\realworld\<name>\openapi.json`

---

### A1) (Real‑world only) Fetch OpenAPI by manifest
**Input →** `scripts\realworld\manifest.json`  
**Run →**
```bat
scripts\realworld\fetch_openapi_manifest.bat
```
**Output →** `packs\realworld\<name>\openapi.(yaml|yml|json)`

---

### A2) Build LLE (DET) GOLD from OpenAPI — **for all 17 systems**
**Input →** `packs\[7_suts|realworld]\<name>\openapi.json`  
**Run →** (BAT-only, list-based; **no direct Python**)
```bat
scripts\pipelines\run_det_all_7suts.bat
scripts\pipelines\run_det_real_world_all.bat
```
**Output →**
```
artifacts\det_checked\<provider>\<sut>\lle_gold.json        # canonical LLE DET GOLD
artifacts\det_checked\<provider>\<sut>\grades.json          # (if grading used)
artifacts\det_checked\<provider>\<sut>\prompts.jsonl        # (if prompt traces kept)
```

**DET semantics (LLE):**
- Fixed, reproducible payloads that use **mandatory fields** and primary **keys** only
- One canonical variant per CRUD operation (minimal negative cases encoded via OpenAPI vendor hints)

---

### A3) **NEW (LLE)**: Build per-endpoint Field Catalog — **for all 17 systems**
Extracts **keys**, **partial keys** (for composite keys), **mandatory**, and **optional** fields from OpenAPI into a compact catalog used for NONDET expansion.

**Input →** `packs\[7_suts|realworld]\<name>\openapi.json`  
**Run →**
```bat
scripts\readable\build_field_catalog_for_list.bat  config\suts_and_rw.txt
```
**Output →**
```
artifacts\lle_fields\<provider>\<sut>\field_catalog.json
```

Notes:
- The catalog includes type/format/enums/min/max and simple **cross-field** constraints when available.
- This step is **purely static** (no model calls).

---

### A4) **NEW (LLE)**: Expand LLE **NONDET** GOLD with field-driven variants — **for all 17 systems**
Produces a **rich** set of request bodies and parameterizations per endpoint, using the field catalog:
- **Positive** variants (valid combinations)
- **Negative** variants (missing mandatory, wrong types, boundary/extreme values)
- Combinatorial control: **pairwise / t‑wise** sampling, plus **caps** per endpoint to limit explosion

**Input →**
```
artifacts\det_checked\<provider>\<sut>\lle_gold.json
artifacts\lle_fields\<provider>\<sut>\field_catalog.json
```
**Run →**
```bat
scripts\readable\expand_lle_nondet_for_list.bat  config\suts_and_rw.txt
```
**Output →**
```
artifacts\lle_nondet\<provider>\<sut>\lle_nondet_gold.json
```

Notes:
- Uses an LLM only for **type-role inference** when OpenAPI is underspecified (controlled via env key).  
- Each **variant** yields a distinct **LLE op**; the later emitter will output **one function per variant**.

---

### A5) Emit LLE readables (interfaces & lifecycle) — **for all 17 systems**
**Input (DET) →** `artifacts\det_checked\<provider>\<sut>\lle_gold.json`  
**Input (NONDET) →** `artifacts\lle_nondet\<provider>\<sut>\lle_nondet_gold.json`  
**Run →**
```bat
scripts\readable\run_js_all_sut_from_gold.bat
scripts\readable\run_js_all_rw_from_gold.bat
```
**Output →**
```
<sut>\spec\js\interfaces.readable.js
<sut>\spec\js\lifecycle.readable.js
```
(Each NONDET variant maps to its own exported function in `interfaces.readable.js`.)

---

# 4) Process B — OpenAPI + LLE → HLS → `stories_hls.js`

All steps below are **for-list** BATs to keep runs reproducible. Each **Output** feeds the next.

### B1) OpenAPI → Graph — **for all 17 systems**
**Input →** `packs\...\openapi.json`  
**Run →**
```bat
scripts\analysis\run_openapi_to_graph_for_list.bat  config\suts_and_rw.txt
```
**Output →** `artifacts\analysis\<provider>\<sut>\graph.json`

---

### B2) Graph → DSL map — **for all 17 systems**
**Input →** `artifacts\analysis\<provider>\<sut>\graph.json`  
**Run →**
```bat
scripts\analysis\build_dsl_from_graph_for_list.bat  config\suts_and_rw.txt
```
**Output →** `models\hls\(SUTs|RWs)\<sut>\dsl_map.json`

---

### B3) Graph + DSL → HLS GOLD (**DET**) — **for all 17 systems**
**Input →** Graph + DSL  
**Run →**
```bat
scripts\hls\build_hls_gold_det_for_list.bat  config\suts_and_rw.txt  7_suts_llm_provider
scripts\hls\build_hls_gold_det_for_list.bat  config\suts_and_rw.txt  real_world_llm_provider
```
**Output →** `artifacts\hls_det\<provider>\<sut>\hls_gold.json`

DET semantics (HLS):
- Reproducible, topology‑driven stories (no randomness, no LLM expansion)

---

### B4) (Optional) Prepare HLS training data from DET — **for all 17 systems**
**Input →** `artifacts\hls_det\<provider>\<sut>\hls_gold.json`  
**Run →**
```bat
scripts\hls\prep_hls_training_from_det_gold_for_list.bat  config\suts_and_rw.txt  7_suts_llm_provider  SUTs
scripts\hls\prep_hls_training_from_det_gold_for_list.bat  config\suts_and_rw.txt  real_world_llm_provider  RWs
```
**Output →** `artifacts\hls_training\<provider>\<sut>\train.jsonl`

---

### B5) Graph + DSL (+ model) → HLS GOLD (**NONDET**) — **for all 17 systems**
**Input →** Graph + DSL (+ optional model outputs)  
**Run →**
```bat
scripts\hls\build_hls_gold_nondet_for_list.bat  config\suts_and_rw.txt  7_suts_llm_provider
scripts\hls\build_hls_gold_nondet_for_list.bat  config\suts_and_rw.txt  real_world_llm_provider
```
**Output →** `artifacts\hls_nondet\<provider>\<sut>\hls_nondet_gold.json`

NONDET semantics (HLS):
- Enriched story patterns (loops, interleavings, multi-entity coordination), optionally guided by model suggestions

---

### B6) Emit **stories_hls.js** (final) — **for all 17 systems**
**Emitter policy (already implemented):**
- When `--gold` points to **DET** path → emit DET stories
- When `--gold` points to **NONDET** path → emit NONDET stories

**DET Input →** `artifacts\hls_det\<provider>\<sut>\hls_gold.json`  
**NONDET Input →** `artifacts\hls_nondet\<provider>\<sut>\hls_nondet_gold.json`  
**Run →**
```bat
:: SUTs
scripts\readable\emit_all_from_list.bat  config\suts_and_rw.txt  7_suts_llm_provider  both
:: RWs
scripts\readable\emit_all_from_list.bat  config\suts_and_rw.txt  real_world_llm_provider  both
```
**Output →** (per your latest fix)
```
artifacts\hls_det\<provider>\<sut>\readable\stories_hls.js
artifacts\hls_nondet\<provider>\<sut>\readable\stories_hls.js
```
**Note:** `hls_gold_ops.json` is written **one level above** `readable\` (i.e., beside `hls_gold.json`), not inside it.

---

## 5) Running the Provengo projects

Example (from repo root):
```bat
cd pharmacy
provengo run -Dseed=123 -DnRuns=1 -Dhost=127.0.0.1 -Dport=5014
```
- `interfaces.readable.js` and `stories_hls.js` are auto-generated by the pipeline above.
- Override host/port via `-Dhost` / `-Dport` as needed.

---

## 6) Add a **New System** (OpenAPI JSON/YAML)

1. Place your OpenAPI as `packs\realworld\<name>\openapi.(json|yaml|yml)`  
   (Use `yaml_to_json.bat` if needed.)  
2. Append `<name>` to `config\suts_and_rw.txt` under the **RWs** section.  
3. Run the **LLE** chain for all (it will include your new system):
   ```bat
   scripts\pipelines\run_det_real_world_all.bat
   scripts\readable\build_field_catalog_for_list.bat   config\suts_and_rw.txt
   scripts\readable\expand_lle_nondet_for_list.bat     config\suts_and_rw.txt
   scripts\readable\run_js_all_rw_from_gold.bat
   ```
4. Run the **HLS** chain for all:
   ```bat
   scripts\analysis\run_openapi_to_graph_for_list.bat  config\suts_and_rw.txt
   scripts\analysis\build_dsl_from_graph_for_list.bat  config\suts_and_rw.txt
   scripts\hls\build_hls_gold_det_for_list.bat         config\suts_and_rw.txt  real_world_llm_provider
   scripts\hls\build_hls_gold_nondet_for_list.bat      config\suts_and_rw.txt  real_world_llm_provider
   scripts\readable\emit_all_from_list.bat             config\suts_and_rw.txt  real_world_llm_provider  both
   ```
All steps are **reproducible** and operate on the full list, so your new system is included automatically.

---

## 7) DET vs NONDET (quick reference)

- **DET LLE**: single canonical payload per op; mandatory fields + keys only; reproducible.  
- **NONDET LLE**: field‑driven variants (positive/negative), t‑wise sampling & caps per endpoint; each variant → its own exported function in `interfaces.readable.js`.  
- **DET HLS**: graph/DSL‑driven, static patterns.  
- **NONDET HLS**: enriched patterns from model guidance and additional interleavings.

---

## 8) Troubleshooting

- **Empty `stories_hls.js` header only**: check that `--gold` points to the correct DET/NONDET file and that the GOLD contains `stories` array (emitter prints `(N stories)` when writing).  
- **`hls_gold_ops.json` location**: should be next to `hls_gold.json`, not under `readable\`.  
- **Python typing on 3.9**: avoid `str | None` syntax; use `Optional[str]` or `from __future__ import annotations`.  
- **Batch parsing**: when editing `.bat`, guard parentheses in `echo` with `^(` / `^)` and avoid `else` on the same physical line as `)`.

---

## 9) Changelog

- **v10 (this file)**  
  - Introduced **A3/A4**: field‑catalog extraction and NONDET LLE expansion with pairwise/t‑wise control.  
  - Clarified **HLS emitter outputs** under `artifacts\hls_(det|nondet)\...\readable\`.  
  - Ensured **3.1 & 3.2** (core HLS steps) are **list BATs only** (no direct Python).  
  - Added a complete **“New System”** recipe.
- **v7** — Baseline end-to-end (referenced and superseded).

---

## 10) Quick Commands (copy/paste)

```bat
:: LLE (all 17)
scripts\pipelines\run_det_all_7suts.bat
scripts\pipelines\run_det_real_world_all.bat
scripts\readable\build_field_catalog_for_list.bat  config\suts_and_rw.txt
scripts\readable\expand_lle_nondet_for_list.bat    config\suts_and_rw.txt
scripts\readable\run_js_all_sut_from_gold.bat
scripts\readable\run_js_all_rw_from_gold.bat

:: HLS (all 17)
scripts\analysis\run_openapi_to_graph_for_list.bat  config\suts_and_rw.txt
scripts\analysis\build_dsl_from_graph_for_list.bat  config\suts_and_rw.txt
scripts\hls\build_hls_gold_det_for_list.bat         config\suts_and_rw.txt  7_suts_llm_provider
scripts\hls\build_hls_gold_det_for_list.bat         config\suts_and_rw.txt  real_world_llm_provider
scripts\hls\build_hls_gold_nondet_for_list.bat      config\suts_and_rw.txt  7_suts_llm_provider
scripts\hls\build_hls_gold_nondet_for_list.bat      config\suts_and_rw.txt  real_world_llm_provider
scripts\readable\emit_all_from_list.bat             config\suts_and_rw.txt  7_suts_llm_provider  both
scripts\readable\emit_all_from_list.bat             config\suts_and_rw.txt  real_world_llm_provider  both
```
