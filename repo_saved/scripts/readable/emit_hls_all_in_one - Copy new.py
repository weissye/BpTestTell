#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Emit HLS stories (single file) from graph + DSL map.

MINIMAL CHANGES ONLY:
- [NaN-FIX] Make extracted primary keys strings (String(_pk(...))) before passing to verify*()
- [PASSIVE-SPLIT] Split passive verifications into three bthreads (Added / Updated / Deleted)
- Keep everything else as-is; do not refactor.

CLI (unchanged):
  --graph PATH
  --dsl_map PATH
  --out PATH
  [--mode det|nondet]
"""

import argparse
import json
import os
import sys
from typing import Any, Dict, List

# ----------------------------
# Small helpers (unchanged API)
# ----------------------------

def titlecase(s: str) -> str:
    return s[:1].upper() + s[1:] if s else s

def js(s: str) -> str:
    return s

def bthread(name: str, body: List[str]) -> str:
    return (
        f'bthread("{name}", function () {{\n'
        + "\n".join("  " + line for line in body)
        + "\n});\n"
    )

def concat(*parts: str) -> str:
    """Join parts into a single JS code line."""
    return "".join(parts)

def js_pick_samples(varname: str, samples: List[Dict[str, Any]]) -> List[str]:
    """Emit a small JS pick() with provided samples as literals."""
    # Keep pick() behavior as your existing stories expect
    lines = []
    lines.append(f"const {varname} = pick(")
    for i, obj in enumerate(samples):
        sep = "," if i < len(samples)-1 else ""
        # stringify object with stable quoting
        body = json.dumps(obj)
        lines.append(f"  {body}{sep}")
    lines.append(");")
    return lines

# ----------------------------
# Core generators
# ----------------------------

def build_active_lifecycle(entity: str, edsl: Dict[str, Any], per_entity_max: int) -> List[str]:
    """
    ACTIVE lifecycle:
    add -> wait(added) -> update(s) -> wait(updated) -> verify(exists/updated) -> delete
    [NaN-FIX] Make keys stringy at the point of extraction.
    """
    name = f"{entity} lifecycle"
    args = edsl.get("args", [])
    do   = edsl["do"]
    ver  = edsl["verify"]
    wait = edsl["wait"]

    def sample_val(i, k):
        kl = k.lower()
        # numeric-like samples for id-like keys (kept as strings to avoid churn elsewhere)
        if kl.endswith("id") or kl == "id" or kl == "ndc":
            return str(1000 + i)  # "1001", "1002", ...
        if "name" in kl:
            return ["Alpha", "Bravo", "Charlie", "Delta"][i % 4]
        if any(x in kl for x in ["amount", "price", "total"]):
            return (i + 1) * 100
        return f"{entity}_{k}_{i}"

    samples = []
    for i in range(2):
        obj = {k: sample_val(i + 1, k) for k in args}
        samples.append(obj)

    body = []
    arglist = ", ".join([f"x.{a}" for a in args])
    arg0 = args[0] if args else "id"

    # choose one sample object
    body += js_pick_samples("x", samples)

    # add
    body.append(concat(do["add"], "(", arglist, ");"))

    # wait for 'added' and get the actual PK
    body.append(concat("const e_add = ", wait["added"], "();"))
    body.append("if (typeof e_add === 'function') { return; }")
    # [NaN-FIX] force string
    body.append(concat("const k_add = String(_pk(e_add, '", arg0, "'));"))

    # updates
    up_count = min(2, max(1, per_entity_max - 1))
    for _ in range(up_count):
        body.append(concat(do["update"], "(", arglist, ");"))

    # wait for 'updated' and get the actual PK
    body.append(concat("const e_upd = ", wait["updated"], "();"))
    body.append("if (typeof e_upd === 'function') { return; }")
    # [NaN-FIX] force string
    body.append(concat("const k_upd = String(_pk(e_upd, '", arg0, "'));"))

    # verify using actual PKs from events
    body.append(concat(ver["exists"], "(k_add);"))
    body.append(concat(ver["updated"], "(k_upd);"))

    # delete (use the args object; deletes are idempotent in your interface)
    body.append(concat(do["delete"], "(", arglist, ");"))

    return [bthread(titlecase(name), body)]

# ----- PASSIVE verifications -----
# Split into three separate bthreads (Added / Updated / Deleted)
# Always resolve the key and pass a STRING into verify helpers
def build_passive_verifications(entity: str, edsl: Dict[str, Any]) -> List[str]:
    """
    [PASSIVE-SPLIT] Emit three passive verification bthreads (added/updated/deleted).
    [NaN-FIX] Extract pk and coerce to String(...) before verify calls.
    """
    args = edsl.get("args", [])
    ver  = edsl["verify"]
    wait = edsl["wait"]
    arg0 = args[0] if args else "id"

    out = []

    # Added -> verify exists
    body_added = [
        concat("const e = ", wait["added"], "();"),
        "if (typeof e === 'function') { return; }",
        concat("const k = String(_pk(e, '", arg0, "'));"),
        concat(ver["exists"], "(k);"),
    ]
    out.append(bthread(titlecase(f"{entity} added passive verification"), body_added))

    # Updated -> verify updated
    body_updated = [
        concat("const e = ", wait["updated"], "();"),
        "if (typeof e === 'function') { return; }",
        concat("const k = String(_pk(e, '", arg0, "'));"),
        concat(ver["updated"], "(k);"),
    ]
    out.append(bthread(titlecase(f"{entity} updated passive verification"), body_updated))

    # Deleted -> verify does not exist
    body_deleted = [
        concat("const e = ", wait["deleted"], "();"),
        "if (typeof e === 'function') { return; }",
        concat("const k = String(_pk(e, '", arg0, "'));"),
        concat(ver["deleted"], "(k);"),
    ]
    out.append(bthread(titlecase(f"{entity} deleted passive verification"), body_deleted))

    return out

# ----------------------------
# Top-level emission
# ----------------------------

def emit(dsl_map: Dict[str, Any], out_path: str, mode: str, per_entity_max: int = 3) -> None:
    lines: List[str] = []

    # Header kept simple; your interface.js provides all DSL helpers.
    lines.append("// AUTO-GENERATED BY emit_hls_all_in_one.py")
    lines.append("// Do not edit by hand.\n")
    lines.append("/* global bthread, pick, _pk, waitForAny */")
    lines.append("/* All concrete REST helpers and verifiers come from interface.js */\n")

    # The dsl_map may have different top-level shapes; support both.
    entities = dsl_map.get("entities")
    if not entities:
        # older shape: top-level is already a dict of entities
        entities = dsl_map

    # Deterministic order for repeatability
    for entity in sorted(entities.keys()):
        edsl = entities[entity]
        # Active lifecycle
        lines.extend(build_active_lifecycle(entity, edsl, per_entity_max))
        # Passive verifications (3 bthreads)
        lines.extend(build_passive_verifications(entity, edsl))

    with open(out_path, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))

# ----------------------------
# CLI
# ----------------------------

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--graph", required=True)   # kept for compatibility; not used here
    ap.add_argument("--dsl_map", required=True)
    ap.add_argument("--out", required=True)
    ap.add_argument("--mode", choices=["det", "nondet"], default="det")
    args, _ = ap.parse_known_args()

    with open(args.dsl_map, "r", encoding="utf-8") as f:
        dsl_map = json.load(f)

    emit(dsl_map, args.out, args.mode)

if __name__ == "__main__":
    main()
