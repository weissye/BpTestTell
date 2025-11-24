#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
_hazard.py (one-compatible)
---------------------------
Purpose: generate the *same* stories_hls.js as emit_hls_all_in_one.py,
then append a small generic @auto-hazard pack:
  - CollisionBinding (entity focus) via runtime wrapping of do-functions
  - HazardOracles A/B/C (non-negative counters, referential integrity,
    aggregate limit / write-skew)

This script **does not** change the story set produced by emit_hls_all_in_one.py.
It merely appends general stories/helpers at the end.

Usage (same flags as emit_hls_all_in_one.py):
  python _hazard.py --sut_dir suts\flask_impl\banking --mode det --profile rich --per_entity_max 3

It uses emit_hls_all_in_one.py's helpers and build_stories() to preserve
identical baselines.
"""

import argparse, json, os, sys, re
from pathlib import Path
from typing import Dict, List, Any, Optional, Tuple

# --- Import the canonical emitter (must sit next to this file) ---
try:
    import emit_hls_all_in_one as one
except Exception as e:
    print("[ERR] Cannot import emit_hls_all_in_one.py:", e)
    raise

# ---- Generic Auto-Hazard JS (entity-agnostic) ----
#  - Requires the following assignment lines to be present before it runs:
#       globalThis.__DSL_ENTITIES__      = [...];
#       globalThis.__GRAPH_RELATIONSHIPS__ = [{parent, child}, ...];
#       globalThis.__DSL_DO__            = {Entity:{add,update,delete}};
#       globalThis.__DSL_ARG0__          = {Entity:'idFieldName'};
_GENERIC_HAZARD_JS = r"""
// @auto-hazard-begin
(function AutoHazardPack(){
  if (typeof bp === 'undefined') return;
  if (String((bp.env && bp.env.HLS_HAZARD_PACK) || 'auto') === 'off') return;

  const R = (globalThis.read || globalThis || {});
  const on = (name, def=1) => Number((bp.env && bp.env[name]) ?? def) !== 0;
  const det = String((bp.env && bp.env.DET_MODE) || '1') === '1';
  const log = (...a)=>{ if (bp && bp.log && bp.log.info) try{ bp.log.info(a.join(' ')); }catch(_){ } };
  const FN = (k)=> typeof R[k] === 'function';
  const looksLikeIdField = (k, ent)=> /(^id$|Id$|ID$|_id$)/.test(k) || k.toLowerCase()=== (ent.toLowerCase()+'id');
  const looksLikeLimit   = (k)=> /(limit|capacity|quota|max|budget|credit)/i.test(k);
  const looksLikeAmount  = (k)=> /(amount|qty|quantity|units|size|weight|cost|load)/i.test(k);
  const looksLikeStock   = (k)=> /(stock|inventory|balance|available|remaining|free)/i.test(k);

  const ENTS = globalThis.__DSL_ENTITIES__ || [];
  const RELS = globalThis.__GRAPH_RELATIONSHIPS__ || [];
  const DOFN = globalThis.__DSL_DO__ || {};
  const ARG0 = globalThis.__DSL_ARG0__ || {};

  globalThis.__hlsFocus = globalThis.__hlsFocus || {};

  function discoverReadersForEntity(ent){
    const plural = ent.endsWith('s') ? ent : ent + 's';
    const guesses = ['list'+plural, 'list'+ent, 'get'+ent, 'get'+ent+'ById', 'get'+plural, 'fetch'+ent, 'fetch'+plural];
    const readers = {};
    for (const g of guesses){
      if (FN(g)) readers[g] = R[g];
    }
    return readers;
  }

  async function sampleEntities(ent){
    const readers = discoverReadersForEntity(ent);
    const listFn = readers['list'+ent+'s'] || readers['list'+ent] || readers['get'+ent+'s'] || null;
    let items = [];
    if (listFn) { try { items = await listFn(); } catch(_) {} }
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
      }
    } catch(_){}
  }

  (function wrapDo(){
    Object.keys(DOFN).forEach(ent => {
      const opmap = DOFN[ent] || {};
      ['add','update','delete'].forEach(op => {
        const fnName = opmap[op];
        if (!fnName) return;
        const orig = globalThis[fnName];
        if (typeof orig !== 'function') return;
        if (orig.__wrappedByHazard) return;
        const arg0Name = ARG0[ent] || 'id';
        globalThis[fnName] = async function(...args){
          const f = globalThis.__hlsFocus ? globalThis.__hlsFocus[ent] : undefined;
          if (f !== undefined && f !== null) {
            if (args.length === 0) args = [f];
            else args[0] = f;
          }
          return await orig.apply(this, args);
        };
        globalThis[fnName].__wrappedByHazard = true;
      });
    });
  })();

  try {
    ENTS.forEach(ent=>{
      bp.registerBThread('CB:'+ent+'Focus', function(){
        return bp.async(()=> chooseFocusFor(ent));
      });
    });
  } catch(_){}

  if (on('HLS_HAZARD_OVR',1)) {
    bp.registerBThread('HO:NonNegativeCounters', function(){
      return bp.async(async function(){
        const ents = ENTS;
        for (const ent of ents){
          const s = await sampleEntities(ent);
          const id = (globalThis.__hlsFocus && globalThis.__hlsFocus[ent]) || null;
          if (!id) continue;
          let obj=null;
          const r = discoverReadersForEntity(ent);
          for (const g of ['get'+ent,'get'+ent+'ById']) {
            if (r[g]) { try{ obj = await r[g](id); }catch(_){ } }
            if (obj) break;
          }
          if (!obj) obj = s.items.find(x=> x[s.idKey]===id) || null;
          if (!obj) continue;
          for (const k of s.counters){
            const v = Number(obj[k]);
            if (isFinite(v) && v < 0) throw new Error(`[HazardOracle] NonNegative: ${ent}.${k} became negative for ${id}`);
          }
        }
      });
    });
  }

  if (on('HLS_HAZARD_CAS',1)) {
    (function(){
      const rels = RELS;
      rels.forEach(({parent,child})=>{
        bp.registerBThread(`HO:RefIntegrity ${parent}->${child}`, function(){
          return bp.async(async function(){
            const pS = await sampleEntities(parent);
            const cS = await sampleEntities(child);
            const focusId = (globalThis.__hlsFocus && globalThis.__hlsFocus[parent]) || null;
            if (!focusId) return;
            let children = [];
            const cr = discoverReadersForEntity(child);
            const listChild = cr['list'+child+'s'] || cr['list'+child] || cr['get'+child+'s'] || null;
            if (listChild) { try{ children = await listChild(); }catch(_){ } }
            if (!Array.isArray(children)) children = [];
            const fkCandidates = Object.keys(children[0]||{}).filter(k=> /(Id$|_id$|ID$|^id$)/.test(k) && k.toLowerCase()!==('id'));
            const fk = fkCandidates[0] || (parent.toLowerCase()+'Id') || 'parentId';
            const deps = children.filter(x=> String(x[fk]) === String(focusId));
            if (deps.length>0){
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

  if (on('HLS_HAZARD_WSK',1)) {
    (function(){
      const rels = RELS;
      rels.forEach(({parent,child})=>{
        bp.registerBThread(`HO:AggregateLimit ${parent}<-${child}`, function(){
          return bp.async(async function(){
            const pS = await sampleEntities(parent);
            const cS = await sampleEntities(child);
            const focusId = (globalThis.__hlsFocus && globalThis.__hlsFocus[parent]) || null;
            if (!focusId) return;
            let pObj=null;
            const pr = discoverReadersForEntity(parent);
            for (const g of ['get'+parent,'get'+parent+'ById']) {
              if (pr[g]) { try{ pObj = await pr[g](focusId); }catch(_){ } }
              if (pObj) break;
            }
            if (!pObj && pS.items.length) pObj = pS.items.find(x=> x[pS.idKey]===focusId) || pS.items[0];
            if (!pObj) return;
            const limitKey = pS.limits[0] || Object.keys(pObj).find(k=> /(limit|capacity|quota|max|budget|credit)/i.test(k));
            const limitVal = Number(limitKey ? pObj[limitKey] : NaN);
            if (!isFinite(limitVal)) return;
            let children = [];
            const cr = discoverReadersForEntity(child);
            const listChild = cr['list'+child+'s'] || cr['list'+child] || cr['get'+child+'s'] || null;
            if (listChild) { try{ children = await listChild(); }catch(_){ } }
            if (!Array.isArray(children)) children = [];
            const fkCandidates = Object.keys(children[0]||{}).filter(k=> /(Id$|_id$|ID$|^id$)/.test(k) && k.toLowerCase()!==('id'));
            const fk = fkCandidates[0] || (parent.toLowerCase()+'Id') || 'parentId';
            const contribKey = cS.amounts[0] || Object.keys(children[0]||{}).find(k=> /(amount|qty|quantity|units|size|weight|cost|load)/i.test(k));
            if (!contribKey) return;
            const total = children.filter(x=> String(x[fk])===String(focusId))
                                  .reduce((s,x)=> s + (Number(x[contribKey])||0), 0);
            if (total > limitVal) throw new Error(`[HazardOracle] AggregateLimit: Σ ${child}.${contribKey} (${total}) > ${parent}.${limitKey} (${limitVal}) for ${focusId}`);
          });
        });
      });
    })();
  }
})(); // AutoHazardPack
// @auto-hazard-end
"""

def _derive_entities_and_relationships(graph: Dict[str, Any], dsl: Dict[str, Any]):
    graph_info = one.parse_graph(graph)
    dsl_entities: Dict[str, dict] = one.derive_entities_from_dsl(dsl)
    dsl_names = sorted(dsl_entities.keys())
    name_set = set(dsl_names)
    for raw in graph_info.get("entities", []):
        mapped = one.cleanup_entity_against_dsl(raw, dsl_names)
        if mapped:
            name_set.add(mapped)
    entities = sorted(name_set)
    rels = graph_info.get("relationships", [])
    relationships = [{"parent": r.get("parent"), "child": r.get("child")} for r in rels if r.get("parent") and r.get("child")]
    return entities, relationships

def _build_assignments_js(graph: Dict[str, Any], dsl: Dict[str, Any]) -> str:
    entities, relationships = _derive_entities_and_relationships(graph, dsl)
    edsl_map = {}
    raw_dsl_entities = one.derive_entities_from_dsl(dsl)
    for e in entities:
        edsl_map[e] = one.build_entity_dsl(e, raw_dsl_entities.get(e, {}))
    dsl_do = {e: edsl_map[e]["do"] for e in entities}
    dsl_arg0 = {e: (edsl_map[e]["args"][0] if edsl_map[e]["args"] else "id") for e in entities}
    js = []
    js.append("globalThis.__DSL_ENTITIES__ = " + json.dumps(entities) + ";")
    js.append("globalThis.__GRAPH_RELATIONSHIPS__ = " + json.dumps(relationships) + ";")
    js.append("globalThis.__DSL_DO__ = " + json.dumps(dsl_do) + ";")
    js.append("globalThis.__DSL_ARG0__ = " + json.dumps(dsl_arg0) + ";")
    return "\n".join(js) + "\n"

def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--sut_dir", required=True, help="e.g., 7_suts_llm_provider\banking")
    ap.add_argument("--mode", choices=["det","nondet"], default="det")
    ap.add_argument("--out", default=None)
    ap.add_argument("--graph", default=None)
    ap.add_argument("--dsl_map", default=None)
    ap.add_argument("--profile", choices=["basic","rich"], default="rich")
    ap.add_argument("--per_entity_max", type=int, default=3)
    ap.add_argument("--fail_under_stories", type=int, default=0)
    args = ap.parse_args()

    out_path = Path(args.out) if args.out else one.default_out_path(args.sut_dir, args.mode)
    graph_path = Path(args.graph) if args.graph else one.default_graph_path(args.sut_dir)
    dsl_map_path = Path(args.dsl_map) if args.dsl_map else one.default_dsl_map_path(args.sut_dir)

    if graph_path.exists():
        print(f'    using --graph "{os.path.normpath(str(graph_path))}"')
    else:
        print(f'    [WARN] Graph not found at "{os.path.normpath(str(graph_path))}"')

    if dsl_map_path.exists():
        print(f'    using --dsl_map "{os.path.normpath(str(dsl_map_path))}"')

    graph = one.load_json(graph_path) or {}
    dsl   = one.load_json(dsl_map_path) or {}

    _, sut = one.split_provider_and_sut(args.sut_dir)
    dsl.setdefault("sut_name", sut)

    stories, cov = one.build_stories(graph, dsl, args.profile, args.per_entity_max, args.mode)

    stories.append("\n// ===== AUTO-HAZARD (generic pack) =====\n")
    stories.append(_build_assignments_js(graph, dsl))
    stories.append(_GENERIC_HAZARD_JS)

    one.write_stories(out_path, stories)

    kinds = cov.get("kinds", [])
    ops_count = cov.get("ops", 0)
    by_entity = cov.get("by_entity", {})
    rels = cov.get("rels", [])
    rel_pairs = [(r.get('parent'), r.get('child')) for r in rels]
    print(f"[COVERAGE] sut={sut} kinds={kinds} ops={ops_count} by_entity={by_entity} rels={rel_pairs}")

    if args.fail_under_stories and len(stories) < args.fail_under_stories:
        print(f"[FAIL] story count {len(stories)} < threshold {args.fail_under_stories}")

    return 0

if __name__ == "__main__":
    sys.exit(main())
