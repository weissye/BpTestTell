# scripts/hls/append_det_to_jsonl.py
# Build JSONL training rows from HLS-DET gold, blending guard hints into the system message.

import json
import argparse
import os
from pathlib import Path

# ---------------- guard-hint loader (inline) ----------------
def _read_json_any(path: str):
    try:
        with open(path, "r", encoding="utf-8-sig") as f:
            return json.load(f)
    except Exception:
        return None

def _extract_motifs(obj):
    if obj is None:
        return []
    checks, blocks = [], []
    if isinstance(obj, dict):
        checks = obj.get("checks") or []
        blocks = obj.get("blocks") or []
    elif isinstance(obj, list):
        for item in obj:
            if isinstance(item, str):
                checks.append(item)
            elif isinstance(item, dict):
                checks.extend(item.get("checks") or [])
                blocks.extend(item.get("blocks") or [])
    motifs = []
    for s in list(dict.fromkeys([*checks, *blocks])):  # de-dupe keep order
        if isinstance(s, str) and s.strip():
            motifs.append(s.strip())
        elif isinstance(s, dict):
            n = s.get("name")
            if n:
                motifs.append(str(n).strip())
    return motifs

def load_guard_hints(analysis_dir: str):
    ordered_sources = ("merged", "det", "openapi")
    collected = []
    for src in ordered_sources:
        p = os.path.join(analysis_dir, f"guard_candidates.{src}.valid.json")
        if os.path.exists(p):
            data = _read_json_any(p)
            motifs = _extract_motifs(data)
            if motifs:
                collected.extend(motifs)
    seen, hints = set(), []
    for m in collected:
        if m not in seen:
            seen.add(m)
            hints.append(m)
    return hints
# -----------------------------------------------------------

BASE_SYS = (
    "You generate High-Level Stories (HLS) as a single JSON object with keys: "
    "entity, op, params, blocks, checks. Output only JSON (no prose)."
)

def infer_analysis_dir_from_det(det_path: Path) -> str:
    # Expect: artifacts/hls_det/<provider>/<sut>/hls_det_gold.json
    # Map ->  artifacts/analysis/<provider>/<sut>
    parts = det_path.as_posix().split("/")
    try:
        i = parts.index("hls_det")
        provider = parts[i+1]
        sut = parts[i+2]
        return str(Path("artifacts") / "analysis" / provider / sut)
    except Exception:
        return ""

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--det", required=True, help="path to hls_det_gold.json")
    ap.add_argument("--out", required=True, help="path to JSONL to append to")
    ap.add_argument(
        "--analysis_dir",
        default="",
        help="artifacts/analysis/<provider>/<sut>. If omitted, inferred from --det path."
    )
    args = ap.parse_args()

    det = Path(args.det)
    out = Path(args.out)
    out.parent.mkdir(parents=True, exist_ok=True)

    data = json.loads(det.read_text(encoding="utf-8-sig"))
    stories = data.get("stories", [])

    # load guard motifs (soft preference list)
    analysis_dir = args.analysis_dir or infer_analysis_dir_from_det(det)
    guard_hints = load_guard_hints(analysis_dir) if analysis_dir else []
    guard_bullets = "\n".join(f"- {g}" for g in guard_hints)
    system_prompt = BASE_SYS
    if guard_bullets:
        system_prompt += (
            "\n\nWhen choosing checks/blocks, prefer these guard motifs (soft guidance):\n"
            + guard_bullets
            + "\n"
        )

    with out.open("a", encoding="utf-8", newline="\n") as f:
        for s in stories:
            entity = s.get("entity")
            op     = s.get("op")
            params = list((s.get("params") or {}).keys())
            checks = s.get("checks", [])

            user_prompt = (
                f"Emit one HLS story for entity={entity}, op={op}. "
                f"params_keys={params}. checks={checks}. "
                "Keep reverse-op consistent (add↔delete, update↔update)."
            )

            ex = {
                "messages": [
                    {"role": "system", "content": system_prompt},
                    {"role": "user",   "content": user_prompt},
                    {"role": "assistant", "content": json.dumps(s, ensure_ascii=False)}
                ]
            }
            f.write(json.dumps(ex, ensure_ascii=False) + "\n")

    print(f"[OK] appended {len(stories)} stories from {det}")

if __name__ == "__main__":
    main()
