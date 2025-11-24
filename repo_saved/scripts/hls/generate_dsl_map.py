#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
generate_dsl_map.py

Compatibility wrapper that supports:
- New style: --sut <sut> --provider <provider> [--graph ...] [--out ...]
- Old style: --suite_dir "<provider>\<sut>" [--graph ...] [--out ...]

Defaults:
graph  -> artifacts/analysis/<provider>/<sut>/graph.json
out    -> models/hls/SUTs/<sut>/dsl_map.json   (for 7_suts_llm_provider)
          models/hls/RWs/<sut>/dsl_map.json    (for real_world_llm_provider)
"""

from __future__ import annotations
import argparse, os, sys, subprocess

def split_suite_dir(suite_dir: str):
    suite_dir = suite_dir.replace("/", "\\")
    parts = [p for p in suite_dir.split("\\") if p]
    if len(parts) >= 2:
        provider = parts[-2]
        sut = parts[-1]
        return sut, provider
    # fallback: maybe it's "<provider>/<sut>"
    parts = [p for p in suite_dir.split("/") if p]
    if len(parts) >= 2:
        provider = parts[-2]
        sut = parts[-1]
        return sut, provider
    raise ValueError(f"Cannot parse suite_dir: {suite_dir}")

def default_paths(provider: str, sut: str):
    graph = os.path.join("artifacts", "analysis", provider, sut, "graph.json")
    if provider.lower().startswith("7_suts"):
        out = os.path.join("models", "hls", "SUTs", sut, "dsl_map.json")
    else:
        out = os.path.join("models", "hls", "RWs", sut, "dsl_map.json")
    return graph, out

def find_builder_path() -> str:
    # Prefer scripts/analysis/build_dsl_map.py next to this file.
    here = os.path.dirname(os.path.abspath(__file__))
    cand = os.path.join(here, "build_dsl_map.py")
    if os.path.exists(cand):
        return cand
    # Try sibling scripts/hls/build_dsl_map.py (for emitters that expect it there)
    cand2 = os.path.join(os.path.dirname(here), "hls", "build_dsl_map.py")
    if os.path.exists(cand2):
        return cand2
    # fallback: relative working directory
    return "scripts/analysis/build_dsl_map.py"

def main(argv=None) -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--suite_dir", help=r'Old style: like "7_suts_llm_provider\banking" or "real_world_llm_provider\gitea"')
    ap.add_argument("--sut", help="SUT name")
    ap.add_argument("--provider", help="Provider name")
    ap.add_argument("--graph", help="Path to graph.json (optional)")
    ap.add_argument("--out", help="Output dsl_map.json (optional)")
    ap.add_argument("--pretty", action="store_true", help="Pretty-print JSON output")
    args = ap.parse_args(argv)

    sut = args.sut
    provider = args.provider
    if not (sut and provider):
        if args.suite_dir:
            sut, provider = split_suite_dir(args.suite_dir)
        else:
            ap.error("Provide either --sut AND --provider, or --suite_dir")

    graph = args.graph
    out = args.out
    if not graph or not out:
        d_graph, d_out = default_paths(provider, sut)
        graph = graph or d_graph
        out = out or d_out

    builder = find_builder_path()
    cmd = [
        sys.executable, "-u", builder,
        "--sut", sut, "--provider", provider,
        "--graph", graph, "--out", out
    ]
    if args.pretty:
        cmd.append("--pretty")

    print("[GEN] running:", " ".join(f'"{c}"' if " " in c else c for c in cmd))
    try:
        return subprocess.call(cmd)
    except FileNotFoundError as e:
        print(f"[ERR] Builder not found: {builder} ({e})", file=sys.stderr)
        return 2

if __name__ == "__main__":
    raise SystemExit(main())
