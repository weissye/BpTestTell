#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
generate_nondet_from_llm.py

Reads a deterministic HLS JSON ("DET") with a list of stories and emits a
"NONDET" JSON that contains multiple variants per story.

Design goals for this version:
- Keep story structure intact (downstream tools should not break).
- JSON paths in the header are POSIX-style (forward slashes) so both Python
  and PowerShell's ConvertFrom-Json can read them on Windows.
- Deterministic *per-SUT* randomness unless an explicit --seed is supplied.
- No external dependencies; offline fallback only (safe for air-gapped runs).

Usage (same flags as before):
  python scripts/hls/generate_nondet_from_llm.py \
    --sut banking \
    --hls_det artifacts/hls_det/7_suts_llm_provider/banking/hls_det_gold.json \
    --trained_model_dir models/hls/banking \
    --out artifacts/hls_nondet/7_suts_llm_provider/banking/hls_nondet_gold.json \
    --n_per_story 3 --seed 123
"""

from __future__ import annotations

import argparse
import datetime as _dt
import hashlib
import json
import os
import random
import sys
from pathlib import Path
from typing import Any, Dict, List


# ----------------------------
# I/O helpers
# ----------------------------

def load_json(path: str | Path) -> Any:
    p = Path(path)
    with p.open("r", encoding="utf-8") as f:
        return json.load(f)


def write_json(obj: Any, path: str | Path) -> None:
    """Atomic-ish write: write .tmp then replace; ensure forward slashes in header fields."""
    p = Path(path)
    p.parent.mkdir(parents=True, exist_ok=True)
    tmp = p.with_suffix(p.suffix + ".tmp")
    with tmp.open("w", encoding="utf-8") as f:
        json.dump(obj, f, indent=2, ensure_ascii=False)
    tmp.replace(p)


def as_posix(s: str | Path) -> str:
    return Path(s).as_posix() if isinstance(s, (str, Path)) else str(s)


# ----------------------------
# Seeding & randomness
# ----------------------------

def derive_seed(sut: str, det_path: Path, cli_seed: int | None) -> int:
    """
    If the user provided --seed, use it.
    Otherwise derive a stable per-SUT seed from 'sut' + det file path (POSIX).
    """
    if cli_seed is not None:
        return int(cli_seed)
    key = f"{sut}|{det_path.as_posix()}"
    h = hashlib.sha1(key.encode("utf-8")).hexdigest()[:8]
    return int(h, 16)


# ----------------------------
# Story mutation (safe & shallow)
# ----------------------------

def deep_copy_json(obj: Any) -> Any:
    # Avoid importing copy; json round-trip keeps only JSON-serializable fields (as desired).
    return json.loads(json.dumps(obj))


def mutate_story_shallow(
    story: Dict[str, Any],
    rnd: random.Random,
    variant_index: int,
    temperature: float,
    top_p: float,
) -> Dict[str, Any]:
    """
    Create a very conservative variant:
    - Keep structure intact.
    - Optionally tweak the 'name' if present to mark variant identity.
    - Attach a small metadata block under a non-conflicting key.
    """
    v = deep_copy_json(story)

    # If there's a 'name' field and it's a short string, annotate it.
    name = v.get("name")
    if isinstance(name, str) and len(name) <= 200:
        # Slight deterministic shuffle in whitespace or suffix so it's different but harmless
        suffix = f" (v{variant_index})"
        if not name.endswith(suffix):
            v["name"] = f"{name}{suffix}"

    # Attach metadata that downstream can ignore safely.
    meta = {
        "variant_index": variant_index,
        "generator": "offline-fallback",
        "temperature": float(temperature),
        "top_p": float(top_p),
    }
    # Use an unlikely key to avoid colliding with domain fields.
    v["_nondet_meta"] = meta
    return v


def generate_variants_for_det(
    det_obj: Dict[str, Any],
    n_per_story: int,
    rnd: random.Random,
    temperature: float,
    top_p: float,
    max_stories: int | None,
) -> List[Dict[str, Any]]:
    """
    Given a DET JSON with .stories (list), emit variants.
    """
    stories = det_obj.get("stories")
    if not isinstance(stories, list):
        raise ValueError("DET JSON does not contain a 'stories' list")

    out: List[Dict[str, Any]] = []

    # Optionally cap the number of base stories we expand
    base_stories = stories
    if isinstance(max_stories, int) and max_stories >= 1:
        base_stories = stories[:max_stories]

    for s in base_stories:
        # Always emit at least the original (variant 0) then additional variants
        # If you prefer only variants, comment out the first append.
        out.append(mutate_story_shallow(s, rnd, 0, temperature, top_p))
        for k in range(1, max(1, int(n_per_story))):
            out.append(mutate_story_shallow(s, rnd, k, temperature, top_p))

    return out


# ----------------------------
# CLI
# ----------------------------

def parse_args() -> argparse.Namespace:
    p = argparse.ArgumentParser(
        description="Generate nondeterministic HLS variants from a deterministic HLS JSON."
    )
    p.add_argument("--sut", required=True, help="System-under-test short name (e.g., banking)")
    p.add_argument("--hls_det", required=True, help="Path to DET HLS JSON input")
    p.add_argument(
        "--trained_model_dir",
        required=True,
        help="Directory containing/for model_ref.json (kept for interface compatibility)",
    )
    p.add_argument("--out", required=True, help="Output NONDET JSON path")
    p.add_argument("--model_id", default="offline-fallback", help="Model identifier (optional)")
    p.add_argument("--temperature", type=float, default=0.7, help="Sampling temperature (advisory)")
    p.add_argument("--top_p", type=float, default=0.95, help="Nucleus sampling p (advisory)")
    p.add_argument(
        "--n_per_story",
        type=int,
        default=3,
        help="How many variants to generate per base story (including v0)",
    )
    p.add_argument("--seed", type=int, default=None, help="Random seed (overrides per-SUT seed)")
    p.add_argument(
        "--max_stories",
        type=int,
        default=None,
        help="Optionally limit the number of base stories expanded",
    )
    return p.parse_args()


# ----------------------------
# Main
# ----------------------------

def main() -> int:
    args = parse_args()

    det_path = Path(args.hls_det)
    out_path = Path(args.out)
    model_dir = Path(args.trained_model_dir)

    if not det_path.exists():
        print(f"[ERR ] DET not found at '{det_path}'", file=sys.stderr)
        return 2

    # Ensure model dir exists (even though we don't actually call a remote model in this offline version)
    model_dir.mkdir(parents=True, exist_ok=True)

    try:
        det = load_json(det_path)
    except Exception as e:
        print(f"[ERR ] failed to read DET JSON: {e}", file=sys.stderr)
        return 3

    # Derive seed (per-SUT by default; user can override)
    seed = derive_seed(args.sut, det_path, args.seed)
    rnd = random.Random(seed)
    print(f"[DBG] using seed={seed}")

    # Generate
    try:
        variants = generate_variants_for_det(
            det_obj=det,
            n_per_story=args.n_per_story,
            rnd=rnd,
            temperature=args.temperature,
            top_p=args.top_p,
            max_stories=args.max_stories,
        )
    except Exception as e:
        print(f"[ERR ] generation failed: {e}", file=sys.stderr)
        return 4

    # Assemble output object
    readable_js = out_path.parent / "readable" / "stories_hls.js"
    out_obj = {
        "sut": args.sut,
        "model_id": args.model_id,
        "trained_model_dir": as_posix(model_dir),
        "source_det": as_posix(det_path),
        "stories_js": as_posix(readable_js),
        "generated_at": _dt.datetime.now(_dt.timezone.utc).isoformat(),
        "stories": variants,
    }

    try:
        write_json(out_obj, out_path)
    except Exception as e:
        print(f"[ERR ] failed to write NONDET JSON: {e}", file=sys.stderr)
        return 5

    print(f"[OK] NONDET written -> {out_path} (stories={len(variants)})")
    return 0


if __name__ == "__main__":
    sys.exit(main())
