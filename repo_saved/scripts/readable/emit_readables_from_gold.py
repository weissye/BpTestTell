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
    if not isinstance(d, dict):
        return False
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
    if not parts:
        return "root"
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
        if k.lower() == "id":
            score += 5
        if k.lower().endswith("id"):
            score += 4
        if "name" in k.lower():
            score += 2
        scored.append((score, k))
    scored.sort(key=lambda t: (-t[0], body_keys.index(t[1])))
    return [k for _, k in scored[:2]]

def unique_preserve(seq):
    seen = set()
    out = []
    for x in seq:
        if x in seen:
            continue
        seen.add(x)
        out.append(x)
    return out

def collect_ops_from_gold(golds):
    ops = []
    for g in golds:
        walk_ops_anywhere(g, ops)
    dedup = {}
    for o in ops:
        k = (o["method"], o["path"])
        if k not in dedup:
            dedup[k] = o
    return list(dedup.values())

def group_entities(ops):
    by_ent = defaultdict(lambda: {"paths": set(), "methods": set(), "path_keys": Counter(), "bodies": []})
    for o in ops:
        ent = guess_entity(o["path"])
        by_ent[ent]["paths"].add(o["path"])
        by_ent[ent]["methods"].add(o["method"])
        for k in extract_path_keys(o["path"]):
            by_ent[ent]["path_keys"][k] += 1
        if o.get("body"):
            by_ent[ent]["bodies"].append(o["body"])
    entities = []
    for plural, info in by_ent.items():
        singular = singularize(plural)
        path_keys = [k for k, _ in info["path_keys"].most_common()]
        body_keys = []
        for b in info["bodies"]:
            body_keys += body_keys_from_payload(b)
        body_keys = unique_preserve(body_keys)
        # Identity keys as before
        keys = prefer_keys(path_keys, body_keys)
        if not keys:
            keys = ["id"]
        # All fields: keys first (in order), then remaining body fields
        all_fields = []
        for k in keys:
            if k not in all_fields:
                all_fields.append(k)
        for k in body_keys:
            if k not in all_fields:
                all_fields.append(k)
        entities.append({
            "plural": plural,
            "singular": singular,
            "Singular": singular[:1].upper() + singular[1:],
            "Plural": plural[:1].upper() + plural[1:],
            "keys": keys,
            "fields": all_fields,
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


def _resolve_schema_ref(schema, spec, max_depth: int = 4):
    """Resolve simple local $ref (e.g. '#/components/schemas/Foo') in an OpenAPI schema dict."""
    cur = schema
    for _ in range(max_depth):
        if not isinstance(cur, dict):
            return cur
        ref = cur.get("$ref")
        if not ref or not isinstance(ref, str):
            return cur
        if not ref.startswith("#/"):
            return cur
        parts = ref.lstrip("#/").split("/")
        target = spec
        try:
            for part in parts:
                target = target[part]
        except Exception:
            return cur
        cur = target
    return cur


def _looks_like_id_field(name: str) -> bool:
    """Heuristic: treat fields like 'id', 'userId', 'book_id' as ID-ish keys."""
    if not isinstance(name, str):
        return False
    n = name.lower()
    return n == "id" or n.endswith("id") or n.endswith("_id")


def build_param_names_for_entity(ent: str, fields):
    """
    Build JS parameter names for an entity, compatible with HLS stories.

    Rules (inferred from existing HLS):
    - ID-like fields (id, userId, book_id, ...) keep their original name.
    - Fields that already start with '<ent>_' keep their original name
      (e.g., user_name, book_title, loan_userId).
    - Fields whose lowercase name already contains the entity name and
      'name' (e.g., api_name) also keep their original name.
    - All other fields are prefixed with '<ent>_' (e.g., description -> api_description).
    """
    params = []
    if not fields:
        return params
    for f in fields:
        if not isinstance(f, str):
            continue
        fl = f.lower()
        # 1) ID-like fields: keep as is
        if _looks_like_id_field(f):
            pname = f
        # 2) Fields that already start with '<ent>_' (book_id, user_name, ...)
        elif f.startswith(ent + "_"):
            pname = f
        # 3) Fields whose lowercase form already mentions the entity name and 'name'
        elif ("name" in fl) and (ent.lower() in fl):
            pname = f
        # 4) Otherwise, prefix with '<ent>_'
        else:
            pname = f"{ent}_" + f
        params.append(pname)
    return params


def build_body_id_props_from_openapi(spec):
    """Build mapping plural-entity-name -> ordered list of ID-like body fields.

    We look only at requestBody schemas of POST/PUT/PATCH operations and pick
    properties whose names look like IDs (id, userId, book_id, ...).  Required
    fields are preferred for ordering.
    """
    from collections import defaultdict

    body_ids = defaultdict(list)
    try:
        paths = spec.get("paths", {}) or {}
        for path, item in paths.items():
            if not isinstance(item, dict):
                continue
            parts = [p for p in path.split("/") if p]
            if not parts:
                continue
            plural = parts[0].replace("-", "_")
            for method_name, op in item.items():
                if not isinstance(op, dict):
                    continue
                if method_name.lower() not in ("post", "put", "patch"):
                    continue
                rb = op.get("requestBody")
                if not isinstance(rb, dict):
                    continue
                content = rb.get("content") or {}
                for _mt, mt_def in content.items():
                    if not isinstance(mt_def, dict):
                        continue
                    schema = mt_def.get("schema")
                    if not isinstance(schema, dict):
                        continue
                    schema = _resolve_schema_ref(schema, spec)
                    if not isinstance(schema, dict):
                        continue
                    props = schema.get("properties") or {}
                    if not isinstance(props, dict):
                        continue
                    required = schema.get("required") or list(props.keys())
                    dest = body_ids[plural]
                    # required first, in declared order
                    for name in required:
                        if name in props and _looks_like_id_field(name) and name not in dest:
                            dest.append(name)
                    # then optional ID-like fields
                    for name in props.keys():
                        if _looks_like_id_field(name) and name not in dest:
                            dest.append(name)
    except Exception:
        # On any error, just fall back to GOLD-derived keys.
        pass
    return {k: v for k, v in body_ids.items() if v}


def apply_body_id_props_to_entities(entities, body_id_props):
    """Override entity['keys'] with ID-like body properties when available.

    This makes the generated interfaces trust the OpenAPI requestBody as the
    source of truth for JSON field names, instead of path placeholder names.
    """
    if not body_id_props:
        return

    for e in entities:
        plural = e.get("plural")
        if not plural:
            continue

        new_keys = body_id_props.get(plural)
        if not new_keys:
            continue

        # Override keys from OpenAPI body and ensure fields stay in sync
        e["keys"] = new_keys

        fields = e.get("fields") or []
        if not fields:
            # If there were no fields collected from GOLD, use the ID keys
            e["fields"] = list(new_keys)
        else:
            # Make sure all ID keys are present and appear first
            for k in new_keys:
                if k not in fields:
                    fields.insert(0, k)
            e["fields"] = fields


def apply_key_types_to_entities(entities, spec):
    """Attach per-entity key_types (field -> 'string' or 'number').

    OpenAPI requestBody schemas are used as the primary source of truth; when
    absent or incomplete we fall back to simple name-based heuristics
    (param_is_numeric) so existing behavior is preserved.
    """
    # 1. Start with heuristic defaults based on the key name
    for e in entities:
        keys = e.get("keys") or []
        key_types = {}
        for k in keys:
            key_types[k] = "number" if param_is_numeric(k) else "string"
        e["key_types"] = key_types

    # 2. If there is no OpenAPI spec, keep the heuristic defaults
    if not spec:
        return

    try:
        paths = spec.get("paths", {}) or {}
        for path, item in paths.items():
            if not isinstance(item, dict):
                continue

            parts = [p for p in path.split("/") if p]
            if not parts:
                continue
            plural = parts[0].replace("-", "_")

            # Find the matching entity block, if any.
            target = None
            for e in entities:
                if e.get("plural") == plural:
                    target = e
                    break
            if not target:
                continue

            key_types = target.setdefault("key_types", {})
            keys = target.get("keys") or []

            # Look inside requestBody schemas for POST/PUT/PATCH
            for method_name, op in item.items():
                if not isinstance(op, dict):
                    continue
                if method_name.lower() not in ("post", "put", "patch"):
                    continue

                rb = op.get("requestBody")
                if not isinstance(rb, dict):
                    continue
                content = rb.get("content") or {}

                for _mt, mt_def in content.items():
                    if not isinstance(mt_def, dict):
                        continue
                    schema = mt_def.get("schema")
                    if not isinstance(schema, dict):
                        continue
                    schema = _resolve_schema_ref(schema, spec)
                    if not isinstance(schema, dict):
                        continue

                    props = schema.get("properties") or {}
                    if not isinstance(props, dict):
                        continue

                    for name, prop in props.items():
                        # Only care about ID keys for the type override
                        if name not in keys:
                            continue
                        t = (prop.get("type") or "").lower()
                        if t in ("integer", "number"):
                            key_types[name] = "number"
                        elif t == "string":
                            key_types[name] = "string"
    except Exception:
        # On any error we simply keep the heuristic defaults.
        return


def get_codes(hints, plural, key):
    ent = hints.get(plural, {})
    return ent.get(key) or hints["_defaults"][key]

# -------------------- JS string helpers --------------------

def desc_expr(prefix: str, ent: str, keys, field_to_param=None):
    """Build a JS expression for the textual description, using field labels
    (keys) but the actual JS parameter variables from field_to_param."""
    if not keys:
        return f"\"{prefix} a {ent}\""
    if field_to_param is None:
        parts = ' + " and " + '.join([f"\"{k} \" + {k}" for k in keys])
    else:
        parts = ' + " and " + '.join(
            [f"\"{k} \" + {field_to_param.get(k, k)}" for k in keys]
        )
    return f"\"{prefix} a {ent} with \" + {parts}"

def delete_desc_expr(ent: str, keys, field_to_param=None):
    return desc_expr("Delete", ent, keys, field_to_param)

def verify_desc_expr(ent: str, keys, field_to_param=None, exists=True):
    what = "exists" if exists else "does not exist"
    if not keys:
        return f"\"Verify {ent} {what}\""
    if field_to_param is None:
        parts = ' + " and " + '.join([f"\"{k} \" + {k}" for k in keys])
    else:
        parts = ' + " and " + '.join(
            [f"\"{k} \" + {field_to_param.get(k, k)}" for k in keys]
        )
    return f"\"Verify {ent} with \" + {parts} + \" {what}\""

def js_match_equals_desc(prefix, entity, keys, field_to_param=None):
    if not keys:
        return f'return e.data.parameters.description === "{prefix} a {entity}";'
    wanted = desc_expr(prefix, entity, keys, field_to_param)
    return f"return e.data.parameters.description === {wanted};"

def param_is_numeric(name):
    return bool(NUMERIC_KEY_RX.search(name))

def render_extract_from_desc(prefix, entity, keys, key_types=None):
    """Emit JS that waits for an event matching the textual description and
    extracts ID fields in the correct OpenAPI-backed type.

    - If key_types is provided, it should map field name -> "string" or "number".
    - Otherwise we fall back to param_is_numeric() as a heuristic.
    """
    if not keys:
        return "return {};"
    key_types = key_types or {}
    rx = "^" + re.escape(prefix + " " + entity + " with ")
    rx += " and ".join([re.escape(k + " ") + "(.+)" for k in keys]) + "$"
    out = []
    out.append(f"let e = waitFor(matchesDescriptionRegex(/{rx}/));")
    out.append("let m = e.data.parameters.description.match(/" + rx + "/);")
    assigns = []
    for i, k in enumerate(keys, start=1):
        t = key_types.get(k)
        if t == "number":
            assigns.append(f"{k}: parseInt(m[{i}], 10)")
        elif t == "string":
            assigns.append(f"{k}: m[{i}]")
        else:
            # Fallback: use name-based heuristic if no explicit type is known.
            if param_is_numeric(k):
                assigns.append(f"{k}: parseInt(m[{i}], 10)")
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
 * From GOLD only - full CRUD + verifications + match/wait helpers.
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
    ent = e["singular"]
    Ent = e["Singular"]
    plural = e["plural"]
    Plural = e["Plural"]
    keys = e["keys"]
    fields = e.get("fields") or keys
    key_types = e.get("key_types") or {}
    param_names = build_param_names_for_entity(ent, fields)
    params = ", ".join(param_names) if param_names else ""
    field_to_param = {f: p for f, p in zip(fields, param_names)}

    # When constructing the JSON body, normalize ID fields to the OpenAPI type:
    # - string IDs  -> String(paramVar)
    # - numeric IDs -> Number(paramVar)
    body_field_exprs = []
    for k in keys:
        param_var = field_to_param.get(k, k)
        t = key_types.get(k)
        if t == "number":
            body_field_exprs.append(f"{k}: Number({param_var})")
        else:
            body_field_exprs.append(f"{k}: String({param_var})")
    body_fields = ", ".join(body_field_exprs)

    add_desc = desc_expr("Add", ent, keys, field_to_param)
    del_desc = delete_desc_expr(ent, keys, field_to_param)
    upd_desc = desc_expr("Update", ent, keys, field_to_param)
    get_desc = desc_expr("Get", ent, keys, field_to_param)

    # Codes from hints (OpenAPI or defaults)
    neg_delete_codes = get_codes(hints, plural, "neg_delete")  # [200,404,401]
    dup_create_codes = get_codes(hints, plural, "dup_create")  # [409,400]
    create_codes     = get_codes(hints, plural, "create")      # [201,200]

    if body_fields:
        post_obj = f'{{ body: JSON.stringify({{ {body_fields} }}), parameters: {{ description: {add_desc} }} }}'
        put_obj  = f'{{ body: JSON.stringify({{ {body_fields} }}), parameters: {{ description: {upd_desc} }} }}'
    else:
        post_obj = f'{{ parameters: {{ description: {add_desc} }} }}'
        put_obj  = f'{{ parameters: {{ description: {upd_desc} }} }}'

    path_add   = f'"/{plural}"'
    path_list  = f'"/{plural}"'
    path_item  = make_path(plural, keys)

    # Comparison: normalize both the SUT value and the parameter to the same
    # canonical type before "===".
    cmp_terms = []
    for k in keys:
        param_var = field_to_param.get(k, k)
        t = key_types.get(k)
        if t == "number":
            cmp_terms.append(f"Number({ent}[i].{k}) === Number({param_var})")
        else:
            cmp_terms.append(f"String({ent}[i].{k}) === String({param_var})")
    cmp_chain = " && ".join(cmp_terms) if cmp_terms else "true"

    extract_add = render_extract_from_desc("Add a", ent, keys, key_types)
    extract_del = render_extract_from_desc("Delete a", ent, keys, key_types)
    extract_upd = render_extract_from_desc("Update a", ent, keys, key_types)

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

// Negative: create existing (codes from spec/defaults)
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
    parameters: {{ description: {verify_desc_expr(ent, keys, field_to_param, exists=True)} }}
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
    parameters: {{ description: {verify_desc_expr(ent, keys, field_to_param, exists=False)} }}
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
    {js_match_equals_desc("Add", ent, keys, field_to_param)}
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
    {js_match_equals_desc("Delete", ent, keys, field_to_param)}
  }});
}}

// UPDATE passive helpers
function matchAnyUpdate{Ent}() {{
  return bp.EventSet("any-update-{ent}", function (e) {{
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a {ent}");
  }});
}}
function matchUpdate{Ent}({params}) {{
  return bp.EventSet("update-{ent}", function (e) {{
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    {js_match_equals_desc("Update", ent, keys, field_to_param)}
  }});
}}

// Wait helpers
function waitForAny{Ent}Added() {{
  {extract_add}
}}
function waitFor{Ent}Added({params}) {{
  waitFor(matchAdd{Ent}({params}));
}}
function waitForAny{Ent}Deleted() {{
  {extract_del}
}}
function waitFor{Ent}Deleted({params}) {{
  waitFor(matchDelete{Ent}({params}));
}}
function waitForAny{Ent}Updated() {{
  {extract_upd}
}}
function waitFor{Ent}Updated({params}) {{
  waitFor(matchUpdate{Ent}({params}));
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
    parameters: {{ description: {verify_desc_expr(ent, keys, field_to_param, exists=True)} }}
  }});
}}
'''


def build_lifecycle(entities):
    lines = ['/** === Lifecycle smoke per entity (add->verify->tryToAddExisting->delete->verifyNotExist) === */']
    for e in entities:
        Ent = e["Singular"]
        ent = e["singular"]
        fields = e.get("fields") or e["keys"]
        param_names = build_param_names_for_entity(ent, fields)
        params = ", ".join(param_names) if param_names else ""
        args = params
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
    ap.add_argument("--style", default="library", choices=["library", "readable"], help="Kept for compatibility")
    ap.add_argument("--openapi", help="Optional OpenAPI JSON with x-* hints (Option 3)")
    args = ap.parse_args()

    # GOLD -> ops -> entities
    golds = [load_json(p) for p in args.gold]
    ops = collect_ops_from_gold(golds)
    if not ops:
        print("[ERR] No ops found in provided GOLD files.", file=sys.stderr)
        sys.exit(2)

    entities = group_entities(ops)

    # entity-map overrides (keys and optionally fields)
    if args.entity_map and Path(args.entity_map).is_file():
        em = load_json(args.entity_map)
        for e in entities:
            ov = em.get(e["plural"]) or em.get(e["singular"])
            if not ov:
                continue
            if isinstance(ov.get("keys"), list) and ov["keys"]:
                e["keys"] = ov["keys"]
            if isinstance(ov.get("fields"), list) and ov["fields"]:
                e["fields"] = ov["fields"]

    # Safety: ensure every entity has a fields list containing all keys
    for e in entities:
        if not e.get("fields"):
            e["fields"] = list(e["keys"])
        else:
            for k in e["keys"]:
                if k not in e["fields"]:
                    e["fields"].insert(0, k)

    # OpenAPI hints; defaults if spec absent
    spec = try_load_openapi(args.openapi)
    host_default, port_default = ("192.168.225.53", 5014)
    hints = {"_defaults": {"neg_delete": [200, 404, 401], "dup_create": [409, 400], "create": [201, 200]}}
    if spec:
        host_default, port_default = parse_server_host_port(spec)
        hints = build_hint_maps_from_openapi(spec)
        # Trust the OpenAPI requestBody for ID field names and types
        body_id_props = build_body_id_props_from_openapi(spec)
        apply_body_id_props_to_entities(entities, body_id_props)
        apply_key_types_to_entities(entities, spec)

    out_dir = Path(args.out_dir)
    out_dir.mkdir(parents=True, exist_ok=True)

    js = [js_head(host_default, port_default)]
    for e in entities:
        js.append(render_entity_block(e, hints))
    (out_dir / "interfaces.readable.js").write_text("\n".join(js) + "\n", encoding="utf-8")

    (out_dir / "lifecycle.readable.js").write_text(build_lifecycle(entities) + "\n", encoding="utf-8")

    print(f"[OK] Wrote: {out_dir/'interfaces.readable.js'} and {out_dir/'lifecycle.readable.js'}")

if __name__ == "__main__":
    main()
