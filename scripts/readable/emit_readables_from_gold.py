# scripts/readable/emit_readables_from_gold.py
import argparse, json, re, sys
from pathlib import Path
from collections import defaultdict, Counter
from urllib.parse import urlparse

NUMERIC_KEY_RX = re.compile(r"(?:^|_)(id|count|num|code)(?:$|_)", re.I)

# -------------------- IO --------------------

def load_json(p):
    with open(p, "r", encoding="utf-8") as f:
        return json.load(f)

def try_load_openapi(path):
    if not path:
        return None
    p = Path(path)
    if not p.is_file():
        print(f"[WARN] --openapi file not found: {p}", file=sys.stderr)
        return None
    try:
        return load_json(p)
    except Exception as e:
        print(f"[WARN] Failed to parse OpenAPI ({p}): {e}", file=sys.stderr)
        return None

# -------------------- GOLD extraction --------------------

def is_http_op(d):
    if not isinstance(d, dict): return False
    m = (d.get("method") or d.get("http_method") or "").upper()
    p = d.get("path") or d.get("http_path") or d.get("endpoint") or ""
    return bool(m) and bool(p) and m in ("GET", "POST", "PUT", "PATCH", "DELETE")

def walk_ops_anywhere(obj, sink):
    if isinstance(obj, dict):
        if is_http_op(obj):
            sink.append({
                "method": (obj.get("method") or obj.get("http_method")).upper(),
                "path":   obj.get("path")   or obj.get("http_path") or obj.get("endpoint"),
                "body":   obj.get("body")   or obj.get("requestBody") or obj.get("payload") or None
            })
        for v in obj.values():
            walk_ops_anywhere(v, sink)
    elif isinstance(obj, list):
        for v in obj:
            walk_ops_anywhere(v, sink)

def singularize(n):
    return n[:-1] if n.endswith("s") and len(n) > 1 else n

def guess_entity(path):
    parts = [p for p in path.split("/") if p]
    if not parts: return "root"
    return parts[0].replace("-", "_")

def extract_path_keys(path):
    return re.findall(r"{([^}]+)}", path)

def body_keys_from_payload(payload):
    keys = []
    if isinstance(payload, dict):
        for k, v in payload.items():
            if isinstance(v, (str, int, float, bool, type(None))):
                keys.append(k)
    return keys

def prefer_keys(path_keys, body_keys):
    if path_keys:
        return path_keys
    if not body_keys:
        return []
    scored = []
    for k in body_keys:
        score = 0
        if k.lower() == "id": score += 5
        if k.lower().endswith("id"): score += 4
        if "name" in k.lower(): score += 2
        scored.append((score, k))
    scored.sort(key=lambda t: (-t[0], body_keys.index(t[1])))
    return [k for _, k in scored[:2]]

def unique_preserve(seq):
    seen=set(); out=[]
    for x in seq:
        if x in seen: continue
        seen.add(x); out.append(x)
    return out

def collect_ops_from_gold(golds):
    ops=[]
    for g in golds:
        walk_ops_anywhere(g, ops)
    dedup={}
    for o in ops:
        k = (o["method"], o["path"])
        if k not in dedup:
            dedup[k]=o
    return list(dedup.values())

def group_entities(ops):
    by_ent = defaultdict(lambda: {"paths":set(), "methods":set(), "path_keys":Counter(), "bodies":[]})
    for o in ops:
        ent = guess_entity(o["path"])
        by_ent[ent]["paths"].add(o["path"])
        by_ent[ent]["methods"].add(o["method"])
        for k in extract_path_keys(o["path"]):
            by_ent[ent]["path_keys"][k]+=1
        if o.get("body"): by_ent[ent]["bodies"].append(o["body"])
    entities=[]
    for plural, info in by_ent.items():
        singular = singularize(plural)
        path_keys = [k for k,_ in info["path_keys"].most_common()]
        body_keys = []
        for b in info["bodies"]:
            body_keys += body_keys_from_payload(b)
        body_keys = unique_preserve(body_keys)
        keys = prefer_keys(path_keys, body_keys)
        if not keys:
            keys = ["id"]
        entities.append({
            "plural": plural,
            "singular": singular,
            "Singular": singular[:1].upper()+singular[1:],
            "Plural": plural[:1].upper()+plural[1:],
            "keys": keys,
            "methods": sorted(info["methods"]),
        })
    return sorted(entities, key=lambda e: e["plural"])

# -------------------- OpenAPI hints (Option 3) --------------------

def parse_server_host_port(spec):
    try:
        url = spec.get("servers", [{}])[0].get("url", "")
        u = urlparse(url)
        host = (u.hostname or "192.168.225.53")
        port = (u.port or 5014)
        return host, port
    except Exception:
        return "192.168.225.53", 5014

def build_hint_maps_from_openapi(spec):
    """Return per-entity (plural) hint maps."""
    hints = {
        "_defaults": {
            "neg_delete": [200, 404, 401],
            "dup_create": [409, 400],
            "create":     [201, 200],
        }
    }
    try:
        for path, item in spec.get("paths", {}).items():
            parts = [p for p in path.split("/") if p]
            if not parts: 
                continue
            plural = parts[0].replace("-", "_")
            ent = hints.setdefault(plural, {})
            # duplicate-create codes on collection POST
            post = item.get("post")
            if post:
                if "x-duplicate-expected-codes" in post:
                    ent["dup_create"] = post["x-duplicate-expected-codes"]
                if "x-create-expected-codes" in post:
                    ent["create"] = post["x-create-expected-codes"]
            # negative delete codes on item DELETE
            delete = item.get("delete")
            if delete and "x-negative-delete-expected-codes" in delete:
                ent["neg_delete"] = delete["x-negative-delete-expected-codes"]
    except Exception:
        pass
    return hints

def get_codes(hints, plural, key):
    ent = hints.get(plural, {})
    return ent.get(key) or hints["_defaults"][key]

# -------------------- JS string helpers --------------------

def desc_expr(prefix: str, ent: str, keys):
    if not keys:
        return f"\"{prefix} a {ent}\""
    parts = ' + " and " + '.join([f"\"{k} \" + {k}" for k in keys])
    return f"\"{prefix} a {ent} with \" + {parts}"

def delete_desc_expr(ent: str, keys):
    return desc_expr("Delete", ent, keys)

def verify_desc_expr(ent: str, keys, exists=True):
    what = "exists" if exists else "does not exist"
    if not keys:
        return f"\"Verify {ent} {what}\""
    parts = ' + " and " + '.join([f"\"{k} \" + {k}" for k in keys])
    return f"\"Verify {ent} with \" + {parts} + \" {what}\""

def js_match_equals_desc(prefix, entity, keys):
    if not keys:
        return f'return e.data.parameters.description === "{prefix} a {entity}";'
    wanted = desc_expr(prefix, entity, keys)
    return f"return e.data.parameters.description === {wanted};"

def param_is_numeric(name):
    return bool(NUMERIC_KEY_RX.search(name))

def render_extract_from_desc(prefix, entity, keys):
    if not keys:
        return "return {};"
    rx = "^" + re.escape(prefix + " " + entity + " with ")
    rx += " and ".join([re.escape(k + " ") + "(.+)" for k in keys]) + "$"
    out = []
    out.append(f"let e = waitFor(matchesDescriptionRegex(/{rx}/));")
    out.append("let m = e.data.parameters.description.match(/" + rx + "/);")
    assigns = []
    for i, k in enumerate(keys, start=1):
        if param_is_numeric(k):
            assigns.append(f"{k}: parseInt(m[{i}])")
        else:
            assigns.append(f"{k}: m[{i}]")
    out.append("return { " + ", ".join(assigns) + " };")
    return "\n    ".join(out)

def make_path(plural, keys):
    if not keys:
        return f'"/{plural}"'
    return '"/' + plural + '/" + ' + ' + "/"+ '.join(keys)

# -------------------- JS emitters --------------------

def js_head(host_default, port_default):
    return (
f'''//@provengo summon rest

/**
 * Auto-generated interfaces & lifecycle (readable)
 * From GOLD only – full CRUD + verifications + match/wait helpers.
 */

var host = (typeof host !== 'undefined') ? host : '{host_default}';
var port = (typeof port !== 'undefined') ? port : {port_default};

const svc = new RESTSession("http://" + host + ":" + port, "provengo basedclient", {{
  headers: {{ "Content-Type": "application/json" }},
}});

// Common helpers
function matchesDescription(text) {{
  return bp.EventSet("desc-eq", function(e) {{
    return !!(e && e.data && e.data.parameters && e.data.parameters.description === text);
  }});
}}
function matchesDescriptionRegex(rx) {{
  return bp.EventSet("desc-rx", function(e) {{
    if (!e || !e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return rx.test(e.data.parameters.description);
  }});
}}'''
    )

def render_entity_block(e, hints):
    ent = e["singular"]; Ent = e["Singular"]
    plural = e["plural"]; Plural = e["Plural"]
    keys = e["keys"]
    params = ", ".join(keys) if keys else ""
    body_fields = ", ".join([f"{k}: {k}" for k in keys]) if keys else ""

    add_desc = desc_expr("Add", ent, keys)
    del_desc = delete_desc_expr(ent, keys)
    upd_desc = desc_expr("Update", ent, keys)
    get_desc = desc_expr("Get", ent, keys)

    # Codes from hints (OpenAPI or defaults)
    neg_delete_codes = get_codes(hints, plural, "neg_delete")      # Option-3 default [200,404,401]
    dup_create_codes = get_codes(hints, plural, "dup_create")      # default [409,400]
    create_codes     = get_codes(hints, plural, "create")          # default [201,200]

    # Build call objects without duplicate 'parameters'
    if body_fields:
        post_obj = f'{{ body: JSON.stringify({{ {body_fields} }}), parameters: {{ description: {add_desc} }} }}'
        put_obj  = f'{{ body: JSON.stringify({{ {body_fields} }}), parameters: {{ description: {upd_desc} }} }}'
    else:
        post_obj = f'{{ parameters: {{ description: {add_desc} }} }}'
        put_obj  = f'{{ parameters: {{ description: {upd_desc} }} }}'

    path_add   = f'"/{plural}"'
    path_list  = f'"/{plural}"'
    path_item  = make_path(plural, keys)

    arr_var = ent
    cmp_chain = " && ".join([f'{ent}[i].{k} === {k}' for k in keys]) if keys else "true"

    extract_add   = render_extract_from_desc("Add a", ent, keys)
    extract_del   = render_extract_from_desc("Delete a", ent, keys)
    extract_upd   = render_extract_from_desc("Update a", ent, keys)

    # Helper to render JS array like [200, 404, 401]
    def js_codes(arr):
        return "[{}]".format(", ".join(str(x) for x in arr))

    return f'''
/** === {Ent} Operations === */

// CREATE
function add{Ent}({params}) {{
  svc.post({path_add}, {post_obj});
}}

// DELETE
function delete{Ent}({params}) {{
  svc.delete({path_item}, {{
    parameters: {{ description: {del_desc} }}
  }});
}}

// Negative: delete non-existing (codes from spec/defaults)
function tryToDeleteANonExisting{Ent}({params}) {{
  svc.delete({path_item}, {{
    expectedResponseCodes: {js_codes(neg_delete_codes)},
    parameters: {{ description: {del_desc} }}
  }});
}}

// Negative: add existing (codes from spec/defaults)
function tryToAddExisting{Ent}({params}) {{
  svc.post({path_add}, {{
    body: JSON.stringify({{ {body_fields} }}),
    parameters: {{ description: {add_desc} }},
    expectedResponseCodes: {js_codes(dup_create_codes)}
  }});
}}

// UPDATE
function update{Ent}({params}) {{
  svc.put({path_item}, {put_obj});
}}

// GET one
function get{Ent}({params}) {{
  svc.get({path_item}, {{
    parameters: {{ description: {get_desc} }}
  }});
}}

// LIST all
function list{Plural}() {{
  svc.get({path_list}, {{
    parameters: {{ description: "List {plural}" }}
  }});
}}

// Verify exists (by list)
function verify{Ent}Exists({params}) {{
  svc.get({path_list}, {{
    callback: function (response) {{
      {ent} = JSON.parse(response.body);
      for (let i = 0; i < {ent}.length; i++) {{
        if ({cmp_chain}) {{
          return pvg.success("{Ent} exists");
        }}
      }}
      return pvg.fail("Expected a {ent} to exist but it does not");
    }},
    parameters: {{ description: {verify_desc_expr(ent, keys, exists=True)} }}
  }});
}}

// Verify NOT exists (by list)
function verify{Ent}DoesNotExist({params}) {{
  svc.get({path_list}, {{
    callback: function (response) {{
      {ent} = JSON.parse(response.body);
      for (let i = 0; i < {ent}.length; i++) {{
        if ({cmp_chain}) {{
          return pvg.fail("Expected a {ent} to not exist but it does");
        }}
      }}
      return pvg.success("{Ent} does not exist");
    }},
    parameters: {{ description: {verify_desc_expr(ent, keys, exists=False)} }}
  }});
}}

// Match helpers
function matchAnyAdd{Ent}() {{
  return bp.EventSet("any-add-{ent}", function (e) {{
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a {ent}");
  }});
}}
function matchAdd{Ent}({params}) {{
  return bp.EventSet("add-{ent}", function (e) {{
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    {js_match_equals_desc("Add", ent, keys)}
  }});
}}
function matchAnyDelete{Ent}() {{
  return bp.EventSet("any-del-{ent}", function (e) {{
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a {ent}");
  }});
}}
function matchDelete{Ent}({params}) {{
  return bp.EventSet("del-{ent}", function (e) {{
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    {js_match_equals_desc("Delete", ent, keys)}
  }});
}}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdate{Ent}() {{
  return bp.EventSet("any-update-{ent}", function (e) {{
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a {ent}");
  }});
}}
function matchUpdate{Ent}({params}) {{
  return bp.EventSet("update-{ent}", function (e) {{
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    {js_match_equals_desc("Update", ent, keys)}
  }});
}}

// Wait helpers
function waitForAny{Ent}Added() {{
  {extract_add}
}}
function waitFor{Ent}Added({params}) {{
  waitFor(matchAdd{Ent}({params}));
}}
function waitFor{Ent}Deleted({params}) {{
  waitFor(matchDelete{Ent}({params}));
}}
function waitForAny{Ent}Deleted() {{
  {extract_del}
}}
function waitFor{Ent}Updated({params}) {{
  waitFor(matchUpdate{Ent}({params}));
}}
function waitForAny{Ent}Updated() {{
  {extract_upd}
}}

// Verify updated (presence-by-list)
function verify{Ent}Updated({params}) {{
  svc.get({path_list}, {{
    callback: function (response) {{
      {ent} = JSON.parse(response.body);
      for (let i = 0; i < {ent}.length; i++) {{
        if ({cmp_chain}) {{
          return pvg.success("{Ent} updated (present)");
        }}
      }}
      return pvg.fail("Expected a {ent} to be present after update, but it is not");
    }},
    parameters: {{ description: {verify_desc_expr(ent, keys, exists=True)} }}
  }});
}}
'''

def build_lifecycle(entities):
    lines = ['/** === Lifecycle smoke per entity (add→verify→tryAddExisting→delete→verifyNotExist) === */']
    for e in entities:
        Ent = e["Singular"]; ent=e["singular"]; keys = e["keys"]
        params = ", ".join(keys) if keys else ""
        args = ", ".join(keys) if keys else ""
        lines.append(f'''
function lifecycle_{ent}({params}) {{
  try {{ tryToDeleteANonExisting{Ent}({args}); }} catch (_e) {{}}
  add{Ent}({args});
  verify{Ent}Exists({args});
  tryToAddExisting{Ent}({args});
  delete{Ent}({args});
  verify{Ent}DoesNotExist({args});
}}''')
    return "\n".join(lines)

# -------------------- main --------------------

def main():
    ap = argparse.ArgumentParser(
        description=(
            "Emit interfaces.readable.js and lifecycle.readable.js from GOLD only.\n"
            "Optionally consume OpenAPI hints (--openapi) for expected codes and server URL.\n"
            "Example:\n"
            "  python scripts\\readable\\emit_readables_from_gold.py "
            "--gold artifacts\\det_checked\\...\\gold.json --out-dir out --openapi openapi.json --force-crud"
        )
    )
    ap.add_argument("--gold", nargs="+", required=True, help="One or more GOLD json files")
    ap.add_argument("--out-dir", required=True, help="Where to write readables")
    ap.add_argument("--force-crud", action="store_true", help="Always emit full CRUD shells")
    ap.add_argument("--entity-map", help="Optional JSON overrides: { plural: { 'keys': ['id','name'] } }")
    ap.add_argument("--style", default="library", choices=["library","readable"], help="Kept for compatibility")
    ap.add_argument("--openapi", help="Optional OpenAPI JSON with x-* hints (Option 3)")
    args = ap.parse_args()

    # GOLD → ops → entities
    golds = [load_json(p) for p in args.gold]
    ops = collect_ops_from_gold(golds)
    if not ops:
        print("[ERR] No ops found in provided GOLD files.", file=sys.stderr)
        sys.exit(2)

    entities = group_entities(ops)

    # entity-map overrides
    if args.entity_map and Path(args.entity_map).is_file():
        em = load_json(args.entity_map)
        for e in entities:
            ov = em.get(e["plural"]) or em.get(e["singular"])
            if ov and isinstance(ov.get("keys"), list) and ov["keys"]:
                e["keys"] = ov["keys"]

    # OpenAPI hints (Option 3); defaults hard-coded to Option-3 if spec absent
    spec = try_load_openapi(args.openapi)
    host_default, port_default = ("192.168.225.53", 5014)
    hints = {"_defaults": {"neg_delete":[200,404,401], "dup_create":[409,400], "create":[201,200]}}
    if spec:
        host_default, port_default = parse_server_host_port(spec)
        hints = build_hint_maps_from_openapi(spec)

    out_dir = Path(args.out_dir); out_dir.mkdir(parents=True, exist_ok=True)

    js = [js_head(host_default, port_default)]
    for e in entities:
        js.append(render_entity_block(e, hints))
    (out_dir / "interfaces.readable.js").write_text("\n".join(js)+"\n", encoding="utf-8")

    (out_dir / "lifecycle.readable.js").write_text(build_lifecycle(entities)+"\n", encoding="utf-8")

    print(f"[OK] Wrote: {out_dir/'interfaces.readable.js'} and {out_dir/'lifecycle.readable.js'}")

if __name__ == "__main__":
    main()
