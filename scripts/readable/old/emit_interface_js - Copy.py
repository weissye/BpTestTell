# -*- coding: utf-8 -*-
"""
Generate one readable interfaces.readable.js from *_llm_gold*.json files in a folder.

- Scans all GOLD files in --gold-dir (or accepts explicit --gold ...).
- Groups examples by 'tag' (fallback: 'entity' or 'misc').
- Emits CRUD and "try" flows, list verification, and waitFor helpers.
- Writes one file: interfaces.readable.js next to the GOLDs.

Usage examples:
  python scripts/readable/emit_interface_js.py --gold-dir artifacts/v25/nondet_checked/7_suts_llm_provider/banking
  python scripts/readable/emit_interface_js.py --gold artifacts/v25/.../banking_llm_gold.json
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
        for k in ("examples","cases","items"):  # fallbacks
            if isinstance(data.get(k), list): return data[k]
    if isinstance(data, list):
        return data
    return []

def safe_name(x, fallback="misc"):
    s = re.sub(r"[^A-Za-z0-9_]+", "_", str(x or ""))
    s = re.sub(r"_+", "_", s).strip("_")
    return s or fallback

PREAMBLE = """\
// interfaces.readable.js
// Generated from your GOLD files.
// This file is meant to be **readable** and easy to wire into a thin ctx HTTP client.
// - ctx.create(resource, payload) => { data, status }
// - ctx.get(resource, id)         => { data, status }
// - ctx.update(resource, id, p)   => { data, status }
// - ctx.delete(resource, id)      => { data, status }
// - ctx.list(resource, query)     => Array or { items: [...] }
// - ctx.try(fn)                   => runs fn() and returns { ok:false, status, error }, no throw

export function wait(ms) {
  return new Promise(r => setTimeout(r, ms));
}

export async function waitFor(checkFn, { timeout = 15000, interval = 400 } = {}) {
  const deadline = Date.now() + timeout;
  let last;
  while (Date.now() < deadline) {
    last = await checkFn();
    if (last) return last;
    await wait(interval);
  }
  throw new Error("waitFor timeout");
}

// simple field access: path can be like "a.b[0].c"
export function pick(obj, path) {
  return path.split('.').reduce((acc, part) => {
    const m = part.match(/(.+)\\[(\\d+)\\]$/);
    if (m) {
      const key = m[1], idx = Number(m[2]);
      acc = acc?.[key];
      return Array.isArray(acc) ? acc[idx] : undefined;
    }
    return acc?.[part];
  }, obj);
}

export function matchFields(obj, expected) {
  return Object.entries(expected || {}).every(([k, v]) => pick(obj, k) === v);
}

// mode: "IfExist" or "IfNotExist"
export function verifyListContains(items, path, expectedValue, mode = "IfExist") {
  const list = Array.isArray(items) ? items : (items?.items || []);
  const vals = list.map(x => pick(x, path));
  const exists = vals.some(v => v === expectedValue);
  return mode === "IfExist" ? exists : !exists;
}

// tiny helper to capture exceptions as {ok:false, status?}
export async function tryCall(fn) {
  try {
    const r = await fn();
    if (r && typeof r.status === "number") return { ok: r.status >= 200 && r.status < 300, ...r };
    return { ok: true, ...r };
  } catch (e) {
    const status = Number(e?.status || e?.response?.status || e?.code) || 0;
    return { ok: false, status, error: e };
  }
}
"""

ENTITY_TMPL = """\
// ===================== {entity} =====================

/** Create {entity} */
export async function create_{entity}(ctx, payload) {{
  return ctx.create("{entity}", payload);
}}

/** Get one {entity} by id */
export async function get_{entity}(ctx, id) {{
  return ctx.get("{entity}", id);
}}

/** Update {entity} */
export async function update_{entity}(ctx, id, patch) {{
  return ctx.update("{entity}", id, patch);
}}

/** Delete {entity} */
export async function delete_{entity}(ctx, id) {{
  return ctx.delete("{entity}", id);
}}

/** List {entity} */
export async function list_{entity}(ctx, query) {{
  return ctx.list("{entity}", query);
}}

/** Verify via list whether a value exists/doesn't exist at path */
export async function verify_{entity}_listed(ctx, path, value, mode = "IfExist") {{
  const items = await list_{entity}(ctx);
  return verifyListContains(items, path, value, mode);
}}

/** Wait until value exists/doesn't-exist at path in list */
export async function wait_for_{entity}_field(ctx, path, value, mode = "IfExist", opts) {{
  return waitFor(async () => {{
    const items = await list_{entity}(ctx);
    return verifyListContains(items, path, value, mode);
  }}, opts);
}}

/** Try to delete and assert 404 */
export async function try_delete_{entity}_expect_404(ctx, id) {{
  const r = await tryCall(() => delete_{entity}(ctx, id));
  if (r.ok || (r.status !== 404)) {{
    throw new Error(`Expected 404 when deleting {entity}, got ${{r.status}}`);
  }}
  return r;
}}

/** Try to create duplicate and assert conflict (409) */
export async function try_create_{entity}_expect_conflict(ctx, payload) {{
  const r = await tryCall(() => create_{entity}(ctx, payload));
  if (r.ok || (r.status !== 409 && r.status !== 400 && r.status !== 422)) {{
    throw new Error(`Expected 409/400/422 (duplicate) when creating {entity}, got ${{r.status}}`);
  }}
  return r;
}}
"""

AGGREGATE_EXPORT_TMPL = """
// -------- Aggregate export --------
export const Interfaces = {
{entries}
};

export default Interfaces;
"""

def guess_entities_from_examples(examples):
    groups = defaultdict(list)
    for ex in examples:
        tag = ex.get("tag") or ex.get("entity") or "misc"
        groups[safe_name(tag)].append(ex)
    return groups

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

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--gold-dir", help="Folder that contains *_llm_gold*.json")
    ap.add_argument("--gold", action="append", help="Explicit GOLD file(s), can repeat")
    args = ap.parse_args()

    files = find_gold_files(args.gold_dir, args.gold)
    if not files:
        raise SystemExit("[ERR] No GOLD files found. Use --gold-dir or --gold.")

    # gather all examples from all GOLDs
    examples = []
    for f in files:
        examples += load_examples(f)

    if not examples:
        raise SystemExit("[ERR] No examples in provided GOLDs.")

    groups = guess_entities_from_examples(examples)

    # output to folder: prefer --gold-dir, else folder of the first GOLD
    out_dir = Path(args.gold_dir).resolve() if args.gold_dir else files[0].parent
    out_path = out_dir / "interfaces.readable.js"

    parts = [PREAMBLE]
    entries = []
    for ent in sorted(groups.keys()):
        parts.append(ENTITY_TMPL.format(entity=ent))
        entries.append(f'  "{ent}": {{ create: create_{ent}, get: get_{ent}, update: update_{ent}, delete: delete_{ent}, list: list_{ent}, verifyListed: verify_{ent}_listed, waitForField: wait_for_{ent}_field, tryDelete404: try_delete_{ent}_expect_404, tryCreateConflict: try_create_{ent}_expect_conflict }}')

    parts.append(AGGREGATE_EXPORT_TMPL.format(entries=",\n".join(entries)))
    out_path.write_text("\n".join(parts), encoding="utf-8")
    print(f"[OK] wrote {out_path}")

if __name__ == "__main__":
    main()
