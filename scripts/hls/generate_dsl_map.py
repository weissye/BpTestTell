#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
Legacy shim for DSL map generation.

Typical legacy usage:
  generate_dsl_map.py --suite_dir <provider>\<sut> [--graph ...] [--out ...]

Upgrades:
- --suite_dir is now OPTIONAL. If omitted, we AUTO-SCAN under artifacts/analysis
  and (re)build any dsl_map.json that is missing or older than graph.json.
- Still forwards to the canonical builder:
  scripts/analysis/build_dsl_map.py
"""

from __future__ import annotations

import argparse
import os
import sys
import subprocess
from pathlib import Path
from typing import Iterable, Tuple

REPO_ROOT = Path(__file__).resolve().parents[2]  # .../scripts/hls/generate_dsl_map.py -> repo root
BUILD_SCRIPT = REPO_ROOT / "scripts" / "analysis" / "build_dsl_map.py"

PROVIDERS = ("7_suts_llm_provider", "real_world_llm_provider")

def guess_provider_and_sut(suite_dir: str) -> Tuple[str, str]:
    """
    Accepts forms like:
      "7_suts_llm_provider\\banking"
      "real_world_llm_provider/gitea"
      "banking"  (defaults to 7_suts_llm_provider)
    Returns: (provider, sut)
    """
    p = Path(suite_dir)
    parts = [str(x) for x in p.parts if str(x) not in (".",)]
    if len(parts) >= 2 and parts[-2] in PROVIDERS:
        provider, sut = parts[-2], parts[-1]
    else:
        provider, sut = "7_suts_llm_provider", parts[-1] if parts else suite_dir
    return provider, sut

def default_graph_path(provider: str, sut: str) -> Path:
    return REPO_ROOT / "artifacts" / "analysis" / provider / sut / "graph.json"

def default_out_path(provider: str, sut: str) -> Path:
    # Structured out + legacy mirror will be handled by build_dsl_map.py
    base = REPO_ROOT / "models" / "hls"
    if provider == "real_world_llm_provider":
        return base / "RWs" / sut / "dsl_map.json"
    else:
        return base / "SUTs" / sut / "dsl_map.json"

def run_builder(provider: str, sut: str, graph: Path, out: Path) -> int:
    out.parent.mkdir(parents=True, exist_ok=True)
    cmd = [
        sys.executable, str(BUILD_SCRIPT),
        "--sut", sut,
        "--provider", provider,
        "--graph", str(graph),
        "--out", str(out),
    ]
    print(f"[RUN ] python {' '.join(cmd[1:])}")
    return subprocess.call(cmd)

def scan_all_graphs() -> Iterable[Tuple[str, str, Path, Path]]:
    for prov in PROVIDERS:
        base = REPO_ROOT / "artifacts" / "analysis" / prov
        if not base.exists():
            continue
        for sut_dir in sorted(base.iterdir()):
            if not sut_dir.is_dir():
                continue
            sut = sut_dir.name
            graph = sut_dir / "graph.json"
            if not graph.exists():
                continue
            out = default_out_path(prov, sut)
            yield (prov, sut, graph, out)

def needs_build(graph: Path, out: Path) -> bool:
    if not out.exists():
        return True
    try:
        return graph.stat().st_mtime > out.stat().st_mtime
    except OSError:
        return True

def main():
    ap = argparse.ArgumentParser(description="Legacy DSL map generator (shim).")
    ap.add_argument("--suite_dir", help=r"e.g. 7_suts_llm_provider\banking (optional)")
    ap.add_argument("--graph", help="Optional explicit path to graph.json")
    ap.add_argument("--out", help="Optional explicit output path for dsl_map.json")
    args = ap.parse_args()

    # If suite_dir is provided, build just that one.
    if args.suite_dir:
        provider, sut = guess_provider_and_sut(args.suite_dir)
        graph = Path(args.graph) if args.graph else default_graph_path(provider, sut)
        out   = Path(args.out)   if args.out   else default_out_path(provider, sut)
        if not graph.exists():
            print(f"[SKIP] no graph:  {provider}\\{sut}")
            sys.exit(0)
        rc = run_builder(provider, sut, graph, out)
        sys.exit(rc)

    # No suite_dir: auto-scan and build any missing/stale maps.
    print("[AUTO] No --suite_dir provided. Scanning artifacts/analysis for graphs...")
    any_built = False
    for provider, sut, graph, out in scan_all_graphs():
        if needs_build(graph, out):
            print(f"[AUTO] building dsl_map for: {provider}\\{sut}")
            rc = run_builder(provider, sut, graph, out)
            if rc != 0:
                print(f"[ERR ] build_dsl_map.py failed for {provider}\\{sut} (exit {rc})")
                sys.exit(rc)
            any_built = True
        else:
            print(f"[SKIP] up-to-date: {provider}\\{sut}")
    if not any_built:
        print("[OK ] dsl_map.json files are up to date.")
    sys.exit(0)

if __name__ == "__main__":
    main()
