#!/usr/bin/env python
# -*- coding: utf-8 -*-

import argparse, json, os, re, sys, textwrap
from pathlib import Path

def load_spec(path: Path):
    txt = path.read_text(encoding="utf-8")
    # Try JSON first
    try:
        return json.loads(txt)
    except json.JSONDecodeError:
        pass
    # Try YAML if available
    try:
        import yaml  # type: ignore
    except Exception:
        print("[ERR] Spec is not JSON and PyYAML is not installed. Run: pip install pyyaml", file=sys.stderr)
        sys.exit(2)
    return yaml.safe_load(txt)

def first_server_url(spec):
    srv = None
    try:
        if isinstance(spec.get("servers"), list) and spec["servers"]:
            srv = spec["servers"][0].get("url")
    except Exception:
        pass
    return srv or "${BASE_URL}"

def is_item_path(p):
    return bool(re.search(r"\{[^}/]+\}", p))

def entity_name_for(path_str):
    # "/accounts/{id}" -> "accounts"; "/orders" -> "orders"
    parts = [s for s in path_str.split("/") if s]
    return parts[0] if parts else "root"

def map_crud(paths):
    """
    Heuristic:
      collection path (no {id}) -> list:GET, create:POST
      item path (has {id})      -> get:GET, update:PUT/PATCH, delete:DELETE
    Group by first segment as 'entity'.
    """
    entities = {}
    for p, pm in paths.items():
        ent = entity_name_for(p)
        bucket = entities.setdefault(ent, {
            "collection": None, "item": None,
            "ops": {"list":None,"create":None,"get":None,"update":None,"delete":None}
        })
        if is_item_path(p):
            bucket["item"] = p
            for m in ["get","put","patch","delete"]:
                if m in pm:
                    if m=="get":    bucket["ops"]["get"] = (m, p)
                    if m in ("put","patch"): bucket["ops"]["update"] = (m, p)
                    if m=="delete": bucket["ops"]["delete"] = (m, p)
        else:
            bucket["collection"] = p
            for m in ["get","post"]:
                if m in pm:
                    if m=="get":  bucket["ops"]["list"]   = (m, p)
                    if m=="post": bucket["ops"]["create"] = (m, p)
    return entities

def make_interfaces_js(base_url, entities):
    lines = []
    lines.append("// Auto-generated readable interfaces from OpenAPI (fallback)\n")
    lines.append("const BASE_URL = process.env.BASE_URL || %r;\n" % base_url)
    lines.append(textwrap.dedent("""\
    async function http(method, url, body, expectStatus) {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: body ? JSON.stringify(body) : undefined
      });
      if (expectStatus && res.status !== expectStatus) {
        const txt = await res.text().catch(()=> '');
        throw new Error(`HTTP ${method} ${url} expected ${expectStatus} but got ${res.status}: ${txt}`);
      }
      const ct = res.headers.get('content-type') || '';
      return ct.includes('application/json') ? await res.json() : await res.text();
    }

    function joinUrl(path) {
      if (BASE_URL.endsWith('/') && path.startsWith('/')) return BASE_URL.slice(0,-1) + path;
      if (!BASE_URL.endsWith('/') && !path.startsWith('/')) return BASE_URL + '/' + path;
      return BASE_URL + path;
    }

    // Wait helpers
    async function waitForKey(getFn, id, keyPath, {timeoutMs=10000, intervalMs=500}={}) {
      const deadline = Date.now() + timeoutMs;
      const parts = keyPath.split('.');
      while (Date.now() < deadline) {
        const obj = await getFn(id);
        let cur = obj;
        for (const k of parts) { if (cur && typeof cur === 'object' && (k in cur)) cur = cur[k]; else { cur = undefined; break; } }
        if (cur !== undefined && cur !== null) return cur;
        await new Promise(r => setTimeout(r, intervalMs));
      }
      throw new Error(`waitForKey timeout waiting for ${keyPath} on id=${id}`);
    }

    async function verifyListContains(listFn, predicate) {
      const arr = await listFn();
      return Array.isArray(arr) && arr.some(predicate);
    }
    """))

    for ent, bucket in entities.items():
        ops = bucket["ops"]
        lines.append("\n// ===== Entity: %s =====\n" % ent)
        # list
        if ops["list"]:
            m, p = ops["list"]; lines.append(
              f"export async function list_{ent}() {{ return http('{m.upper()}', joinUrl('{p}')); }}\n")
        else:
            lines.append(f"// No list endpoint detected for {ent}\n")
        # create
        if ops["create"]:
            m, p = ops["create"]; lines.append(
              f"export async function create_{ent}(payload, expectStatus=201) {{ return http('{m.upper()}', joinUrl('{p}'), payload, expectStatus); }}\n")
        else:
            lines.append(f"// No create endpoint detected for {ent}\n")
        # get
        if ops["get"]:
            m, p = ops["get"]; lines.append(
              f"export async function get_{ent}(id) {{ const url = joinUrl('{p}'.replace(/\\{{[^}}]+\\}}/, String(id))); return http('{m.upper()}', url); }}\n")
        else:
            lines.append(f"// No get endpoint detected for {ent}\n")
        # update
        if ops["update"]:
            m, p = ops["update"]; lines.append(
              f"export async function update_{ent}(id, payload, expectStatus=200) {{ const url = joinUrl('{p}'.replace(/\\{{[^}}]+\\}}/, String(id))); return http('{m.upper()}', url, payload, expectStatus); }}\n")
        else:
            lines.append(f"// No update endpoint detected for {ent}\n")
        # delete
        if ops["delete"]:
            m, p = ops["delete"]; lines.append(
              f"export async function delete_{ent}(id, expectStatus=204) {{ const url = joinUrl('{p}'.replace(/\\{{[^}}]+\\}}/, String(id))); return http('{m.upper()}', url, undefined, expectStatus); }}\n")
        else:
            lines.append(f"// No delete endpoint detected for {ent}\n")

        # negative scenarios + list verifications
        lines.append(textwrap.dedent(f"""\
        // Negative checks / verifications for {ent}
        export async function try_delete_missing_{ent}(missingId) {{
          try {{
            await delete_{ent}(missingId, 404);
            return true; // got expected 404
          }} catch (e) {{
            throw e;
          }}
        }}

        export async function try_create_duplicate_{ent}(payload) {{
          try {{
            await create_{ent}(payload, 409); // expect conflict if server enforces uniqueness
            return true;
          }} catch (e) {{
            // Some APIs return 400 or 422; adjust as needed:
            // return await create_{ent}(payload, 400);
            throw e;
          }}
        }}

        export async function wait_for_{ent}_key(id, keyPath, opts) {{
          return waitForKey(get_{ent}, id, keyPath, opts);
        }}

        export async function verify_{ent}_exists_in_list(predicate) {{
          if (!list_{ent}) throw new Error('No list endpoint for {ent}');
          return verifyListContains(list_{ent}, predicate);
        }}
        """))
    return "".join(lines)

def make_hle_js(entities):
    lines = []
    lines.append("// Auto-generated HLE lifecycle checks from OpenAPI (fallback)\n")
    lines.append("import * as I from './interfaces.readable.js';\n\n")
    for ent, bucket in entities.items():
        ops = bucket["ops"]
        lines.append(f"// ===== Lifecycle for {ent} =====\n")
        lines.append(f"export async function lifecycle_{ent}() {{\n")
        lines.append("  try {\n")
        # create if available
        if ops["create"]:
            lines.append(f"    const created = await I.create_{ent}({{ /* TODO: seed payload */ }});\n")
            lines.append(f"    const id = created?.id ?? created?.data?.id ?? created?.{ent}Id ?? created?.uuid;\n")
            lines.append(f"    if (!id) throw new Error('No id returned on create_{ent}');\n")
        else:
            lines.append(f"    // No create endpoint; skipping create for {ent}\n")
            lines.append(f"    const id = 'SAMPLE_ID';\n")
        # wait for key
        if ops["get"]:
            lines.append(f"    await I.wait_for_{ent}_key(id, 'status');\n")
            lines.append(f"    const got = await I.get_{ent}(id);\n")
            lines.append(f"    if (!got) throw new Error('get_{ent} returned nothing');\n")
        # verify in list
        if ops["list"]:
            lines.append(f"    const listed = await I.verify_{ent}_exists_in_list(x => (x.id ?? x.uuid) === id);\n")
            lines.append(f"    if (!listed) throw new Error('{ent} not found in list after create');\n")
        # update
        if ops["update"]:
            lines.append(f"    await I.update_{ent}(id, {{ /* TODO: partial update */ }});\n")
        # duplicate create negative
        if ops["create"]:
            lines.append(f"    await I.try_create_duplicate_{ent}({{ /* same as first create */ }});\n")
        # delete + missing delete negative
        if ops["delete"]:
            lines.append(f"    await I.delete_{ent}(id);\n")
            lines.append(f"    await I.try_delete_missing_{ent}(id);\n")
        lines.append("    return true;\n")
        lines.append("  } catch (e) {\n")
        lines.append("    console.error(e);\n")
        lines.append("    return false;\n")
        lines.append("  }\n")
        lines.append("}\n\n")
    return "".join(lines)

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--spec", required=True, help="OpenAPI file (json/yaml)")
    ap.add_argument("--out-dir", required=True, help="Where to write interfaces.readable.js / hle.readable.js")
    args = ap.parse_args()

    spec_path = Path(args.spec)
    out_dir = Path(args.out_dir)
    out_dir.mkdir(parents=True, exist_ok=True)

    spec = load_spec(spec_path)
    base_url = first_server_url(spec)
    paths = spec.get("paths") or {}
    entities = map_crud(paths)

    interfaces_js = make_interfaces_js(base_url, entities)
    hle_js = make_hle_js(entities)

    (out_dir / "interfaces.readable.js").write_text(interfaces_js, encoding="utf-8")
    (out_dir / "hle.readable.js").write_text(hle_js, encoding="utf-8")

    print(f"[OK] wrote {out_dir}\\interfaces.readable.js and hle.readable.js")

if __name__ == "__main__":
    main()
