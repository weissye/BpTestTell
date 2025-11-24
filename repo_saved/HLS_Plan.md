# High-Level Stories (HLS) – Pipeline (All-in-One JS)

HLS runs **after LLE gold** and produces a SINGLE JS file per SUT that contains BOTH:
- **Active** (lifecycles, ≥3 examples)
- **Passive** (assertion/monitors generated from HLS gold)

## Steps
1) **HLS-DET** from LLE deterministic gold
2) **Train LLM** and **build NON-DET** model, then sample **HLS-NONDET**
3) **Emit combined** `readables/hls/<SUT>/stories_hls.js` with active + passive

## Quickstart (one SUT)
```
scripts\hls\hls_pipeline_one_sut.bat <SUT> artifacts\det_checked\<SUT>\<SUT>_lle_gold.json
```
(Will also emit the combined JS using `examples\samples\<SUT>_active_samples.json` if present)

## Batch (7 SUTs + 10 RW)
```
scripts\hls\hls_pipeline_from_list.bat
```
Edit `config\suts_and_rw.txt` with your names.

## Environment (same as LLE training)
- `LLM_PROVIDER`, `LLM_MODEL`, and your provider secrets.