# BpTestTell
> An automatic infrastructure generation for Story-Based Testing with BP for CRUD CRUD-based system

**BpTestTell** turns OpenAPI contracts (JSON/YAML) into a full **Behavioral Programming (BP)** testing infrastructure. It generates **deterministic (DET)** baselines, runs **end‑to‑end (E2E)** stories, and supports model‑assisted **non‑deterministic (NONDET)** grading—producing readable artifacts and a `lifecycle.js` summary.

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [How It Works](#how-it-works)
- [Repository Layout](#repository-layout)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Workflows](#workflows)
  - [1) Prepare Specs](#1-prepare-specs)
  - [2) Generate Deterministic (DET)](#2-generate-deterministic-det)
  - [3) Model Access & Optional Training](#3-model-access--optional-training)
  - [4) Run E2E & NONDET](#4-run-e2e--nondet)
  - [5) Readable Interface & Lifecycle](#5-readable-interface--lifecycle)
- [Artifacts & Formats](#artifacts--formats)
- [Scripts Reference](#scripts-reference)
- [Troubleshooting](#troubleshooting)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

**Behavioral Programming (BP)** expresses a system as cooperating scenario threads (“stories”). For CRUD‑oriented APIs, BpTestTell ingests an **OpenAPI contract** and scaffolds stories, deterministic baselines, model‑assisted grading, and lifecycle visualization. Both **bundled 7 SUTs** and **Real‑World (RW)** systems are supported.

---

## Key Features

- **OpenAPI‑driven**: JSON/YAML contract is the single source of truth.
- **Story‑based testing** with **BP** threads (real user flows).
- **Deterministic (DET)** baselines: reproducible gold and rule‑based grades.
- **NONDET** model‑assisted evaluation for nuanced outcomes.
- **7 SUTs + Real‑World (RW)**: bundled packs + manifest‑driven fetch.
- **Readable outputs**: artifacts, HTML/JSON summaries, and `lifecycle.js`.

---

## How It Works

1. **Input**: OpenAPI specs for targets (SUTs and RW).
2. **DET**: `run_llm_gold_and_grade.py` extracts endpoints → builds **gold**, **prompts**, **graders**.
3. **Model**: you set a provider key and pick (or train) a model for NONDET.
4. **E2E**: batch scripts orchestrate SUT + RW runs with model‑assisted grading.
5. **Outputs**: `artifacts/det_checked` + `artifacts/nondet_checked`, and `lifecycle.js` for visualization.

---

## Repository Layout

```
scripts/
  llm/
    run_llm_gold_and_grade.py          # core gold/grade runner
  realworld/
    manifest.json                      # RW systems & raw OpenAPI URLs
    fetch_openapi_manifest.bat         # fetches RW specs into packs/realworld/<system>
  training/
    e2e_train_7suts_real*.bat          # orchestrates SUT + RW DET/NONDET flows (Windows .bat)
  pipelines/
    run_det_all_7suts.bat              # DET for all 7 SUTs
packs/
  7_suts/<name>/openapi.json           # bundled SUT specs
  realworld/<system>/openapi.(yaml|yml|json)  # fetched RW specs
artifacts/
  det_checked/                         # outputs from deterministic runs
  nondet_checked/                      # outputs from nondeterministic/model runs
lifecycle.js                           # generated/aggregated lifecycle visualization
README.md
.gitignore
```

> **Windows first:** orchestration is `.bat` for `cmd.exe`.

---

## Prerequisites

- **Windows 10/11** (cmd.exe)
- **Python 3.10+**
- **Git**
- **Model key** (e.g., `OPENAI_API_KEY`) exported in your shell

---

## Installation

```bat
git clone https://github.com/<your-user>/BpTestTell.git
cd BpTestTell

REM (optional) create venv & install requirements if provided
REM python -m venv .venv
REM .venv\Scripts\activate
REM pip install -r requirements.txt
```

---

## Configuration

Set your model key **in the shell** (never commit secrets):

```bat
set "OPENAI_API_KEY=sk-...your key..."
```

If using other providers, set the equivalent env vars and update the `.bat` configs to select the model (e.g., `gpt-4o-mini`).

---

## Workflows

### 1) Prepare Specs

- **7 SUTs:** already under `packs/7_suts/*/openapi.json`.
- **Real‑World (RW):** edit `scripts/realworld/manifest.json` (system name, raw OpenAPI URL, format). Then fetch:
  ```bat
  scripts\realworld\fetch_openapi_manifest.bat
  ```
  This creates:
  ```
  packs\realworld\<system>\openapi.(yaml|yml|json)
  ```

### 2) Generate Deterministic (DET)

- **All SUTs**:
  ```bat
  scripts\pipelines\run_det_all_7suts.bat
  ```

- **RW (selected/all)**:
  ```bat
  scripts\training\e2e_train_7suts_real*.bat
  ```

**DET outputs** (per target) appear under `artifacts\det_checked\...`:
- `*.gold.json` — story gold specifications  
- `*.prompts.json` — prompt packs for grading  
- `*.grade.json|csv` — deterministic grading results

### 3) Model Access & Optional Training

- Ensure your key is set:
  ```bat
  set "OPENAI_API_KEY=sk-...your key..."
  ```
- Select your evaluation model in batch configs (e.g., `gpt-4o-mini`).
- If training is supported in your setup, run training and record the **model ID**.

### 4) Run E2E & NONDET

Execute E2E scripts to evaluate with the model and generate **NONDET** artifacts:

```
artifacts\nondet_checked\...
```

NONDET reports include LLM rationale and flexible pass/fail.

### 5) Readable Interface & Lifecycle

Open the generated `lifecycle.js` (and any HTML/JSON summaries) to review stories, runs, and outcomes.

---

## Artifacts & Formats

| Artifact             | Purpose                         | Format / Location                                         |
|----------------------|---------------------------------|-----------------------------------------------------------|
| OpenAPI Spec         | Canonical API contract          | `packs/<category>/<name>/openapi.(json\|yaml\|yml)`       |
| Gold & Prompts (DET) | Reproducible baseline           | `artifacts/det_checked/.../*.gold.json`, `*.prompts.json` |
| DET Grades           | Fixed‑rule evaluation           | `artifacts/det_checked/.../*.grade.json|csv`              |
| NONDET Reports       | Model‑assisted evaluation       | `artifacts/nondet_checked/.../*.json|csv`                 |
| Lifecycle Summary    | Readable story/run visualization| `lifecycle.js` (+ optional HTML/JSON)                     |

---

## Scripts Reference

- `scripts/llm/run_llm_gold_and_grade.py` — core gold/grade runner  
- `scripts/pipelines/run_det_all_7suts.bat` — DET for all 7 SUTs  
- `scripts/realworld/fetch_openapi_manifest.bat` — fetch RW OpenAPI by manifest  
- `scripts/training/e2e_train_7suts_real*.bat` — orchestrates SUT+RW DET/NONDET flows

---

## Troubleshooting

- **“.bat: `... was unexpected at this time`”**: Escape `|` as `^|` and avoid bare parentheses inside `FOR/IF` blocks. Comment headings with `REM`.
- **HTTP 404 while fetching RW**: Ensure manifest URLs are **raw** JSON/YAML, not HTML pages.
- **Python not found / venv mismatch**: `where python` — ensure the interpreter is correct (system or `.venv`).
- **Model key not picked up**: Set it **in the same shell session** before running the `.bat` files.

---

## Roadmap

- CI pipeline to run DET on PRs touching OpenAPI files
- Richer lifecycle visualization & dashboards
- Additional BP story templates for complex flows
- More real‑world packs & synthetic data helpers

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). PRs are welcome—please include OS/Python version, the command you ran, and the last ~30 lines of logs when filing issues.

---

## License

This project is currently **public** without an explicit license (default GitHub settings apply). If you intend others to use/modify/distribute this, add a LICENSE file (MIT/Apache‑2.0/etc.).
