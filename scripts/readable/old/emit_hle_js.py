# -*- coding: utf-8 -*-
"""
Generate a high-level lifecycle runner (hle.readable.js) for every entity
discovered in *_llm_gold*.json.

It imports the sibling interfaces.readable.js and composes end-to-end flows:
- create -> wait/verify -> get -> update -> verify -> duplicate expect 409
  -> delete -> wait/verify -> delete again expect 404

Usage:
  python scripts/readable/emit_hle_js.py --gold-dir artifacts/v25/nondet_checked/7_suts_llm_provider/banking
"""

from pathlib import Path
import argparse, json, re
from collections import defaultdict

def load_examples(p: Path):
    try:
        data = json.loads(p.read_text(encoding="utf-8"))
    except Exception:
        return []
    if isinstance(data, dict):
        if isinstance(data.get("gold"), list): return data["gold"]
        for k in ("examples","cases","items"):
            if isinstance(data.get(k), list): return data[k]
    if isinstance(data, list):
        return data
    return []

def find_gold_files(gold_dir=None, gold_files=None):
    files = set()
    if gold_dir:
        root = Path(gold_dir)
        for p in root.glob("*_llm_gold*.json"):
            files.add(p.resolve())
    if gold_files:
        for g in gold_files:
            p = Path(g).resolve()
            if p.exists(): files.add(p)
    return sorted(files)

def safe_name(x, fallback="misc"):
    s = re.sub(r"[^A-Za-z0-9_]+", "_", str(x or ""))
    s = re.sub(r"_+", "_", s).strip("_")
    return s or fallback

def group_by_entity(examples):
    groups = defaultdict(list)
    for ex in examples:
        tag = ex.get("tag") or ex.get("entity") or "misc"
        groups[safe_name(tag)].append(ex)
    return groups

def shallow_payload_from_examples(exlist):
    # Try typical places: request.body, input, payload, example
    cands = []
    for e in exlist:
        for path in [
            ("request","body"), ("input",), ("payload",), ("example",), ("data",),
        ]:
            cur = e
            ok = True
            for k in path:
                if isinstance(cur, dict) and k in cur:
                    cur = cur[k]
                else:
                    ok = False; break
            if ok and isinstance(cur, dict):
                cands.append(cur)
    if not cands:
        return {}
    # choose the largest shallow dict
    cands.sort(key=lambda d: (-len(d), sorted(d.keys())))
    return trim_payload(cands[0])

def trim_payload(d, max_items=8):
    out = {}
    for k, v in d.items():
        if len(out) >= max_items: break
        # Prefer scalars
        if isinstance(v, (str, int, float, bool)) or v is None:
            out[k] = v
        elif isinstance(v, list) and v and isinstance(v[0], (str,int,float,bool)):
            out[k] = v[:3]
        elif isinstance(v, dict):
            # shallow nested keep only scalars inside
            out[k] = {kk: vv for kk, vv in list(v.items())[:4]
                      if isinstance(vv,(str,int,float,bool)) or vv is None}
    return out

def guess_id_field(payload, entity_name):
    if not isinstance(payload, dict): payload={}
    keys = list(payload.keys())
    # 1) obvious ids
    for k in ["id","ID","Id"]:
        if k in payload: return k
    # 2) <entity>Id
    ent_candidates = [f"{entity_name}Id", f"{entity_name}_id"]
    for k in keys:
        if k in ent_candidates: return k
        if k.lower().endswith("id"): return k
    # 3) domain-ish
    for k in ["key","uuid","code","name","email","number"]:
        if k in payload: return k
    return "id"

def choose_patch(payload, id_field):
    # Make a small deterministic patch
    for k,v in payload.items():
        if k == id_field: continue
        if isinstance(v, str) and len(v) <= 40:
            return {k: f"{v}-updated"}
        if isinstance(v, bool):
            return {k: (not v)}
        if isinstance(v, (int, float)):
            return {k: v+1}
    # fallback
    return {"updated": True}

PREAMBLE = """\
// hle.readable.js
// High Level Entity lifecycles built on top of interfaces.readable.js

import Interfaces, { waitFor, verifyListContains, pick } from "./interfaces.readable.js";

export function guid() {
  // naive guid; replace with crypto if needed
  return "g-" + Math.random().toString(36).slice(2) + Date.now().toString(36);
}
"""

ENTITY_TMPL = """\
// ===================== {entity} lifecycle =====================

/**
 * Full lifecycle for {entity}:
 * create -> wait(list contains id) -> get -> update -> verify -> duplicate expect 409
 * -> delete -> wait(list not contains id) -> delete again expect 404
 */
export async function lifecycle_{entity}(ctx, opts={{}}) {{
  const idField = "{id_field}";
  const listPath = "{list_path}";

  // --- seed payload (can be edited) ---
  let payload = {payload_json};
  if (!payload[idField]) payload[idField] = guid();

  // CREATE
  const created = await Interfaces["{entity}"].create(ctx, payload);
  const statusC = Number(created?.status || 0);
  if (!(statusC >= 200 && statusC < 300)) {{
    throw new Error(`create {entity} failed with status ${{statusC}}`);
  }}
  const id = created?.data?.[idField] ?? payload[idField];
  if (!id) throw new Error("No id after create");

  // WAIT IN LIST
  await Interfaces["{entity}"].waitForField(ctx, listPath, id, "IfExist", opts.wait);

  // GET & basic check
  const got = await Interfaces["{entity}"].get(ctx, id);
  const statusG = Number(got?.status || 0);
  if (!(statusG >= 200 && statusG < 300)) {{
    throw new Error(`get {entity} failed with status ${{statusG}}`);
  }}

  // UPDATE
  const patch = {patch_json};
  const upd = await Interfaces["{entity}"].update(ctx, id, patch);
  const statusU = Number(upd?.status || 0);
  if (!(statusU >= 200 && statusU < 300)) {{
    throw new Error(`update {entity} failed with status ${{statusU}}`);
  }}

  // VERIFY patch applied (via polling get)
  await waitFor(async () => {{
    const r = await Interfaces["{entity}"].get(ctx, id);
    const obj = r?.data || {{}};
    return Object.entries(patch).every(([k,v]) => pick(obj, k) === v);
  }}, opts.wait);

  // LIST verify still present
  const listed = await Interfaces["{entity}"].verifyListed(ctx, listPath, id, "IfExist");
  if (!listed) throw new Error("verify list failed after update");

  // DUP/CONFLICT
  await Interfaces["{entity}"].tryCreateConflict(ctx, payload);

  // DELETE
  const del = await Interfaces["{entity}"].delete(ctx, id);
  const statusD = Number(del?.status || 0);
  if (!(statusD >= 200 && statusD < 300 && statusD !== 204 || statusD === 204)) {{
    // accept 2xx including 204
  }}

  // WAIT disappear from list
  await Interfaces["{entity}"].waitForField(ctx, listPath, id, "IfNotExist", opts.wait);

  // DELETE again expect 404
  await Interfaces["{entity}"].tryDelete404(ctx, id);

  return {{ entity: "{entity}", id, idField, payload, patch }};
}}
"""

AGGREGATE = """
// ---------- Aggregate export ----------
export const HLE = {
{entries}
};

export default HLE;
"""

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--gold-dir", help="Folder containing *_llm_gold*.json (and interfaces.readable.js)")
    ap.add_argument("--gold", action="append", help="Explicit GOLD file(s)")
    args = ap.parse_args()

    files = find_gold_files(args.gold_dir, args.gold)
    if not files:
        raise SystemExit("[ERR] No GOLD files found. Use --gold-dir or --gold.")

    examples = []
    for f in files:
        examples += load_examples(f)
    if not examples:
        raise SystemExit("[ERR] No examples inside provided GOLDs.")

    groups = group_by_entity(examples)
    out_dir = Path(args.gold_dir).resolve() if args.gold_dir else files[0].parent
    out_path = out_dir / "hle.readable.js"

    parts = [PREAMBLE]
    entries = []
    for ent, exs in sorted(groups.items()):
        seed = shallow_payload_from_examples(exs)
        id_field = guess_id_field(seed, ent)
        # sensible list path is usually the id
        list_path = id_field
        patch = choose_patch(seed, id_field) or {"updated": True}

        parts.append(ENTITY_TMPL.format(
            entity=ent,
            id_field=id_field,
            list_path=list_path,
            payload_json=json.dumps(seed, ensure_ascii=False, indent=2),
            patch_json=json.dumps(patch, ensure_ascii=False, indent=2),
        ))
        entries.append(f'  "{ent}": lifecycle_{ent}')

    parts.append(AGGREGATE.format(entries=",\n".join(entries)))
    out_path.write_text("\n".join(parts), encoding="utf-8")
    print(f"[OK] wrote {out_path}")

if __name__ == "__main__":
    main()
