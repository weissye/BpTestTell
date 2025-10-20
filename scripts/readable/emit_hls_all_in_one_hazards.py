#!/usr/bin/env python3
"""
_hazard.py  —  Generic Auto-Hazard pack for stories_hls.js

This module builds a **SUT-agnostic** JavaScript block you can append to every
stories_hls.js to enable two automatic tweaks:

  1) CollisionBinding — bind concurrent stories to the *same entity instance*.
  2) HazardOracles   — generic oracles for three bug classes:
     A) Non-negative counters (oversell/overdraft/check-then-act).
     B) Referential integrity (parent→child graph relations).
     C) Aggregate limit/write-skew (Σ child.amount ≤ parent.limit).

You can IMPORT this module from your emitter, *or* use it as a CLI post-processor.

Integration (import in your emitter)
-----------------------------------
from _hazard import integrate_hazards

stories = [...]  # list of JS chunks your emitter already produced
stories = integrate_hazards(stories, graph, dsl, mode)
# then write stories_hls.js as usual

CLI (post-process or preview)
-----------------------------
python _hazard.py --graph graph.json --dsl dsl_map.json --mode det --print
python _hazard.py --graph graph.json --dsl dsl_map.json --append stories_hls.js
python _hazard.py --graph graph.json --dsl dsl_map.json --emit-js-out auto_hazard.js

Notes
-----
- This file is GENERAL: no SUT-specific function names.
- It derives entity names and parent→child relationships from graph/dsl *heuristically*.
- The JS side discovers runtime readers (list*/get*) and field names (id/limit/amount/stock …).
- Everything fails-safe: when not enough info exists, the corresponding check silently no-ops.
"""

from __future__ import annotations

import argparse
import json
import os
import re
from pathlib import Path
from typing import Dict, List, Tuple


# ------------------------------
# Heuristics for names & graph
# ------------------------------

def _singularize(name: str) -> str:
    n = name.strip("/").split("/")[-1]
    # crude but serviceable
    if n.endswith("ies"):
        return n[:-3] + "y"
    if n.endswith("ses"):
        return n[:-2]
    if n.endswith("s") and not n.endswith("ss"):
        return n[:-1]
    return n


def _titlecase(name: str) -> str:
    # "books" -> "Book", "workorders" -> "Workorder"
    base = _singularize(re.sub(r"[^A-Za-z0-9]+", " ", name).strip())
    return base[:1].upper() + base[1:] if base else ""


def _extract_entities_from_paths(paths: Dict[str, dict]) -> List[str]:
    """
    From OpenAPI-like paths (or Flask-like), infer entity names as the first path segment.
    Example: /books/{bookId} -> "Book"; /machines -> "Machine"
    """
    entities = set()
    for p in paths.keys():
        segs = [s for s in p.split("/") if s and not s.startswith("{") and not s.startswith("<")]
        if not segs:
            continue
        ent = _titlecase(segs[0])
        if ent:
            entities.add(ent)
    return sorted(entities)


def _extract_entities_from_dsl(dsl: Dict) -> List[str]:
    # Try common locations used by various emitters
    candidates = []
    for key in ("entities", "dsl_entities", "types"):
        val = dsl.get(key)
        if isinstance(val, list) and val and all(isinstance(x, str) for x in val):
            candidates.extend(val)
    # Fall back to operation groups
    if not candidates:
        if isinstance(dsl.get("operations"), dict):
            for k in dsl["operations"].keys():
                candidates.append(_titlecase(k))
    # Dedup and normalize TitleCase singulars
    out = []
    for c in candidates:
        if not c:
            continue
        out.append(_titlecase(c))
    return sorted(set(out))


def _param_tokens(path: str) -> List[str]:
    """Return tokens from {...} or <int:...> / <...> in a path string"""
    toks = []
    toks += re.findall(r"{([^}/]+)}", path) or []
    toks += [m.split(":")[-1] for m in re.findall(r"<([^>]+)>", path) or []]
    return toks


def _infer_relationships(paths: Dict[str, dict]) -> List[Dict[str, str]]:
    """
    Infer parent→child relationships by looking for nested paths and obvious foreign keys.
    - /books/{bookId}/holds  => parent Book -> child Hold
    - /workorders?machineId=  => parent Machine -> child Workorder (heuristic via token name)
    - /loans/{loanId}/payments? -> parent Loan -> child Payment
    """
    rels = set()

    # 1) Nested path segments e.g. /books/{bookId}/holds
    for p in paths.keys():
        segs = [s for s in p.split("/") if s]
        for i in range(len(segs) - 2):
            a, b, c = segs[i], segs[i + 1], segs[i + 2]
            if b.startswith("{") or b.startswith("<"):
                parent = _titlecase(a)
                child = _titlecase(c)
                if parent and child and parent != child:
                    rels.add((parent, child))

    # 2) Generic foreign-key tokens in path names, e.g., /holds/{bookId}, /workorders?machineId=. We only have path strings,
    #    so scan for tokens like {XId} and assume X is the parent for the current path entity.
    for p in paths.keys():
        ent = _titlecase([s for s in p.split("/") if s and not s.startswith("{") and not s.startswith("<")][0]) \
              if any(s for s in p.split("/") if s and not s.startswith("{") and not s.startswith("<")) else ""
        if not ent:
            continue
        for tok in _param_tokens(p):
            m = re.match(r"([A-Za-z0-9_]+)Id$", tok)
            if m:
                parent_guess = _titlecase(m.group(1))
                if parent_guess and parent_guess != ent:
                    rels.add((parent_guess, ent))

    # Return normalized list
    return [{"parent": a, "child": b} for a, b in sorted(rels)]


def _derive_entities_and_relationships(graph: Dict, dsl: Dict) -> Tuple[List[str], List[Dict[str, str]]]:
    paths = graph.get("paths") or {}
    ents_dsl = _extract_entities_from_dsl(dsl) if isinstance(dsl, dict) else []
    ents_path = _extract_entities_from_paths(paths) if isinstance(paths, dict) else []
    entities = sorted(set(ents_dsl + ents_path))
    relationships = _infer_relationships(paths) if isinstance(paths, dict) else []
    return entities, relationships


# ------------------------------
# JS hazard pack (generic)
# ------------------------------

_GENERIC_JS = r"""
// @auto-hazard-begin
(function AutoHazardPack(){
  if (typeof bp === 'undefined') return;
  if (String((bp.env && bp.env.HLS_HAZARD_PACK) || 'auto') === 'off') return;

  // ---------------------------
  // 0) Utilities & discovery
  // ---------------------------
  const R = (globalThis.read || globalThis || {});
  const on = (name, def=1) => Number((bp.env && bp.env[name]) ?? def) !== 0;
  const det = String((bp.env && bp.env.DET_MODE) || '1') === '1';
  const log = (...a)=>{ if (bp && bp.log && bp.log.info) try{ bp.log.info(a.join(' ')); }catch(_){ } };

  // Heuristics
  const FN = (k)=> typeof R[k] === 'function';
  const looksLikeIdField = (k, ent)=> /(^id$|Id$|ID$|_id$)/.test(k) || k.toLowerCase()=== (ent.toLowerCase()+'id');
  const looksLikeLimit   = (k)=> /(limit|capacity|quota|max|budget|credit)/i.test(k);
  const looksLikeAmount  = (k)=> /(amount|qty|quantity|units|size|weight|cost|load)/i.test(k);
  const looksLikeStock   = (k)=> /(stock|inventory|balance|available|remaining|free)/i.test(k);

  // Given an entity name (TitleCase singular), find list/get functions by name
  function discoverReadersForEntity(ent){
    const plural = ent.endsWith('s') ? ent : ent + 's';
    const guesses = [
      'list'+plural, 'list'+ent, 'get'+ent, 'get'+ent+'ById',
      'get'+plural, 'fetch'+ent, 'fetch'+plural
    ];
    const readers = {};
    for (const g of guesses){
      if (FN(g)) readers[g] = R[g];
    }
    return readers; // { name: fn }
  }

  // Fetch a few instances & infer schema (id field + numeric candidates)
  async function sampleEntities(ent){
    const readers = discoverReadersForEntity(ent);
    const listFn = readers['list'+ent+'s'] || readers['list'+ent] || readers['get'+ent+'s'] || null;
    let items = [];
    if (listFn) {
      try { items = await listFn(); } catch(_) {}
    }
    if (!Array.isArray(items)) items = [];
    const sample = items[0] || {};
    const keys = Object.keys(sample||{});
    const idKey = keys.find(k=> looksLikeIdField(k, ent)) || 'id';
    const numericKeys = keys.filter(k=> typeof sample[k] === 'number');
    const counters = numericKeys.filter(k=> looksLikeStock(k));
    const amounts  = numericKeys.filter(k=> looksLikeAmount(k));
    const limits   = numericKeys.filter(k=> looksLikeLimit(k));
    return { items, idKey, counters, amounts, limits };
  }

  // ---------------------------
  // 1) Collision Binding (general)
  // ---------------------------
  globalThis.__hlsFocus = globalThis.__hlsFocus || {};
  async function chooseFocusFor(ent){
    try {
      const s = await sampleEntities(ent);
      let id = s.items.length ? (det ? s.items[0][s.idKey] : s.items[Math.floor(Math.random()*s.items.length)][s.idKey]) : null;
      if (!id) {
        const waitName = 'waitForAny'+ent+'Added';
        if (typeof globalThis[waitName] === 'function') {
          const e = await globalThis[waitName]();
          if (e && e[s.idKey]) id = e[s.idKey];
          else if (e && e.id)  id = e.id;
        }
      }
      if (id !== undefined && id !== null) {
        globalThis.__hlsFocus[ent] = id;
        log('[CB] focus', ent, '->', String(id));
      }
    } catch(_){}
  }

  try {
    const ents = (globalThis.__DSL_ENTITIES__ || []);
    ents.forEach(ent=>{
      bp.registerBThread('CB:'+ent+'Focus', function(){
        return bp.async(()=> chooseFocusFor(ent));
      });
    });
  } catch(_){}

  // ---------------------------
  // 2) Hazard Oracles (general)
  // ---------------------------

  // 2A) Non-negative counters (oversell / overdraft style)
  if (on('HLS_HAZARD_OVR',1)) {
    bp.registerBThread('HO:NonNegativeCounters', function(){
      return bp.async(async function(){
        try{
          const ents = (globalThis.__DSL_ENTITIES__ || []);
          for (const ent of ents){
            const s = await sampleEntities(ent);
            const id = (globalThis.__hlsFocus && globalThis.__hlsFocus[ent]) || null;
            if (!id) continue;
            // Re-read focused object if a getter exists
            let obj=null;
            for (const g of ['get'+ent,'get'+ent+'ById']) {
              if (FN(g)) { try{ obj = await R[g](id); }catch(_){ } }
              if (obj) break;
            }
            if (!obj) obj = s.items.find(x=> x[s.idKey]===id) || null;
            if (!obj) continue;
            for (const k of s.counters){
              const v = Number(obj[k]);
              if (isFinite(v) && v < 0) throw new Error(`[HazardOracle] NonNegative: ${ent}.${k} became negative for ${id}`);
            }
          }
        }catch(e){ throw e; }
      });
    });
  }

  // 2B) Referential Integrity for ALL graph relationships parent→child
  if (on('HLS_HAZARD_CAS',1)) {
    (function(){
      const rels = (globalThis.__GRAPH_RELATIONSHIPS__ || []); // [{parent,child}]
      rels.forEach(({parent,child})=>{
        bp.registerBThread(`HO:RefIntegrity ${parent}->${child}`, function(){
          return bp.async(async function(){
            const pS = await sampleEntities(parent);
            const cS = await sampleEntities(child);
            const focusId = (globalThis.__hlsFocus && globalThis.__hlsFocus[parent]) || null;
            if (!focusId) return;
            // Find children referencing this parent id
            let children = [];
            const cr = discoverReadersForEntity(child);
            const listChild = cr['list'+child+'s'] || cr['list'+child] || cr['get'+child+'s'] || null;
            if (listChild) { try{ children = await listChild(); }catch(_){ } }
            if (!Array.isArray(children)) children = [];
            const fkCandidates = Object.keys(children[0]||{}).filter(k=> looksLikeIdField(k,parent));
            const fk = fkCandidates[0] || (parent.toLowerCase()+'Id') || 'parentId';
            const deps = children.filter(x=> String(x[fk]) === String(focusId));
            if (deps.length>0){
              // Parent must exist
              let parentObj = null;
              const pr = discoverReadersForEntity(parent);
              for (const g of ['get'+parent,'get'+parent+'ById']) {
                if (pr[g]) { try{ parentObj = await pr[g](focusId); }catch(_){ } }
                if (parentObj) break;
              }
              if (!parentObj) throw new Error(`[HazardOracle] ReferentialIntegrity: ${parent} ${focusId} missing while ${child} dependents exist`);
            }
          });
        });
      });
    })();
  }

  // 2C) Aggregate limit / write-skew (Σ child.amount ≤ parent.limit)
  if (on('HLS_HAZARD_WSK',1)) {
    (function(){
      const rels = (globalThis.__GRAPH_RELATIONSHIPS__ || []);
      rels.forEach(({parent,child})=>{
        bp.registerBThread(`HO:AggregateLimit ${parent}<-${child}`, function(){
          return bp.async(async function(){
            const pS = await sampleEntities(parent);
            const cS = await sampleEntities(child);
            const focusId = (globalThis.__hlsFocus && globalThis.__hlsFocus[parent]) || null;
            if (!focusId) return;

            // Parent limit field
            let pObj=null;
            const pr = discoverReadersForEntity(parent);
            for (const g of ['get'+parent,'get'+parent+'ById']) {
              if (pr[g]) { try{ pObj = await pr[g](focusId); }catch(_){ } }
              if (pObj) break;
            }
            if (!pObj && pS.items.length) pObj = pS.items.find(x=> x[pS.idKey]===focusId) || pS.items[0];
            if (!pObj) return;
            const limitKey = pS.limits[0] || Object.keys(pObj).find(looksLikeLimit);
            const limitVal = Number(limitKey ? pObj[limitKey] : NaN);
            if (!isFinite(limitVal)) return; // no limit -> skip

            // Sum child contributions for this parent
            let children = [];
            const cr = discoverReadersForEntity(child);
            const listChild = cr['list'+child+'s'] || cr['list'+child] || cr['get'+child+'s'] || null;
            if (listChild) { try{ children = await listChild(); }catch(_){ } }
            if (!Array.isArray(children)) children = [];
            const fkCandidates = Object.keys(children[0]||{}).filter(k=> looksLikeIdField(k,parent));
            const fk = fkCandidates[0] || (parent.toLowerCase()+'Id') || 'parentId';
            const contribKey = cS.amounts[0] || Object.keys(children[0]||{}).find(looksLikeAmount);
            if (!contribKey) return;

            const total = children
              .filter(x=> String(x[fk])===String(focusId))
              .reduce((s,x)=> s + (Number(x[contribKey])||0), 0);

            if (total > limitVal) throw new Error(`[HazardOracle] AggregateLimit: Σ ${child}.${contribKey} (${total}) > ${parent}.${limitKey} (${limitVal}) for ${focusId}`);
          });
        });
      });
    })();
  }

  // ---------------------------
  // 3) Feed graph/DSL hints to the pack (once)
  // ---------------------------
  globalThis.__DSL_ENTITIES__ = globalThis.__DSL_ENTITIES__ || (globalThis.__DSL_ENTITIES_NAMES__ || []);
  globalThis.__GRAPH_RELATIONSHIPS__ = globalThis.__GRAPH_RELATIONSHIPS__ || [];

})(); // AutoHazardPack
// @auto-hazard-end
"""

# ------------------------------
# Public API for emitters
# ------------------------------

def build_auto_hazard_js(graph: Dict, dsl: Dict, mode: str,
                         entities: List[str] | None = None,
                         relationships: List[Dict[str, str]] | None = None) -> str:
    """
    Return the generic Auto-Hazard JS pack, *plus* two small assignment lines that
    push entity names and relationships for the pack to use at runtime.

    The pack is SUT-agnostic and safe to append to stories_hls.js.
    """
    ents, rels = _derive_entities_and_relationships(graph or {}, dsl or {})
    if entities:
        ents = sorted(set(list(ents) + list(entities)))
    if relationships:
        # normalize to {parent, child}
        norm = []
        for r in relationships:
            if isinstance(r, dict) and "parent" in r and "child" in r:
                norm.append({"parent": _titlecase(r["parent"]), "child": _titlecase(r["child"])})
        if norm:
            rels = norm

    header = [
        f"globalThis.__DSL_ENTITIES__ = {json.dumps(sorted(set(ents)))};",
        f"globalThis.__GRAPH_RELATIONSHIPS__ = {json.dumps(rels)};",
    ]
    return "\n".join(header) + "\n" + _GENERIC_JS


def integrate_hazards(stories: List[str], graph: Dict, dsl: Dict, mode: str,
                      entities: List[str] | None = None,
                      relationships: List[Dict[str, str]] | None = None) -> List[str]:
    """
    Append the generic hazard pack (and the entity/relationship assignments) to your
    list of story JS chunks. Returns the same list instance for convenience.
    """
    js = build_auto_hazard_js(graph, dsl, mode, entities=entities, relationships=relationships)
    stories.append(js)
    return stories


# ------------------------------
# CLI
# ------------------------------

def _load_json(path: str | Path | None) -> Dict:
    if not path:
        return {}
    p = Path(path)
    if not p.exists():
        raise FileNotFoundError(f"JSON not found: {p}")
    return json.loads(p.read_text(encoding="utf-8"))


def main():
    ap = argparse.ArgumentParser(description="Emit a generic Auto-Hazard JS pack for stories_hls.js")
    ap.add_argument("--graph", help="Path to graph.json (optional but recommended)")
    ap.add_argument("--dsl", help="Path to dsl_map.json (optional)")
    ap.add_argument("--mode", default="det", choices=["det", "nondet"], help="Mode hint (deterministic vs exploratory)")
    ap.add_argument("--entities", help="Comma-separated list of entity names to include (optional)")
    ap.add_argument("--rels_json", help='Path to JSON file with [{"parent": "...", "child":"..."}] (optional)')
    ap.add_argument("--emit-js-out", help="Write hazard JS to this file (overwrites)")
    ap.add_argument("--append", help="Append hazard JS to an existing stories_hls.js file (in-place)")
    ap.add_argument("--print", action="store_true", help="Print the hazard JS to stdout")
    args = ap.parse_args()

    graph = _load_json(args.graph)
    dsl = _load_json(args.dsl)
    entities = [e.strip() for e in args.entities.split(",")] if args.entities else None
    rels = _load_json(args.rels_json) if args.rels_json else None

    js = build_auto_hazard_js(graph, dsl, args.mode, entities=entities, relationships=rels)

    wrote = False
    if args.emit_js_out:
        Path(args.emit_js_out).write_text(js, encoding="utf-8")
        print(f"[OK] wrote: {args.emit_js_out}")
        wrote = True

    if args.append:
        p = Path(args.append)
        prev = p.read_text(encoding="utf-8") if p.exists() else ""
        p.write_text(prev + ("\n\n" if prev else "") + js, encoding="utf-8")
        print(f"[OK] appended to: {args.append}")
        wrote = True

    if args.print or not wrote:
        print(js)


if __name__ == "__main__":
    main()
