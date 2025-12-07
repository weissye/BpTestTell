import re
import json
import os
from pathlib import Path
from urllib.parse import urlparse
from typing import Dict, Any

from new_repo.pipeline.emitter_utils import (
    ensure_dir, sanitize_param, render_body_js, 
    get_raw_spec, get_response_codes, 
    infer_type, collect_entity_params, IGNORED_PARAMS
)

def _is_valid_js_identifier(name: str) -> bool:
    if not name or not isinstance(name, str): return False
    if "..." in name or "…" in name or name.strip() == "": return False
    return bool(re.match(r'^[a-zA-Z_$][a-zA-Z0-9_$]*$', name))

def _get_op_specific_params(op, op_type, primary_keys):
    local_params = []
    local_params.extend(op.get("params", []))
    if "bodyTemplate" in op and isinstance(op["bodyTemplate"], dict):
        local_params.extend(op["bodyTemplate"].keys())
    if primary_keys: local_params.extend(primary_keys)
    return sorted(list(set([p for p in local_params if _is_valid_js_identifier(p)])))

def _generate_js_operation(op_data, fn_name, sig_params, entity_keys, spec, raw_spec, method_override=None, codes_override=None, desc_override=None):
    lines = []
    method = (method_override or op_data.get("method", "GET")).upper()
    path_tmpl = op_data.get("path", "")
    
    ent_display = fn_name.replace("create", "").replace("update", "").replace("delete", "").replace("get", "").replace("verify", "").replace("Exists", "")
    desc_tmpl = desc_override or op_data.get("descriptionTemplate", "")
    if not desc_tmpl: desc_tmpl = f"{method} {ent_display}"
    
    # Update description with all keys if present
    for k in entity_keys:
        if k in sig_params and f"{{{k}}}" not in desc_tmpl:
             desc_tmpl += f" with {k} {{{k}}}"

    js_url = f'"{path_tmpl}"'
    js_desc = f'"{desc_tmpl}"'
    
    for p in sig_params:
        safe_p = sanitize_param(p)
        js_url = js_url.replace(f'{{{p}}}', f'" + {safe_p} + "')
        js_desc = js_desc.replace(f'{{{p}}}', f'" + {safe_p} + "')
    js_url = js_url.replace(' + ""', '')
    js_desc = js_desc.replace(' + ""', '')

    body_js = "undefined"
    if method in ["POST", "PUT", "PATCH"]:
        print(f"DEBUG GEN: Generating Body for {fn_name} using params {sig_params}")
        b_lines = ["{"]
        for field in sig_params:
            if not _is_valid_js_identifier(field): continue
            sanitized = sanitize_param(field)
            val_expr = f'String({sanitized})' 
            b_lines.append(f'    "{field}": {val_expr},')
        b_lines.append("  }")
        body_js = "\n".join(b_lines)

    sig_args_str = ", ".join([sanitize_param(p) for p in sig_params])
    lines.append(f'function {fn_name}({sig_args_str}) {{')
    lines.append(f'  bp.log.info("DEBUG INTERFACE {fn_name}: called with args=" + JSON.stringify(arguments));')
    lines.append(f'  var url = {js_url};')
    lines.append(f'  var description = {js_desc};')
    
    if method in ["POST", "PUT", "PATCH"]: 
        lines.append(f'  var body = {body_js};')
        lines.append(f'  bp.log.info("DEBUG INTERFACE {fn_name}: Sending Body=" + JSON.stringify(body));')
    else: 
        lines.append(f'  var body = undefined;')
    
    if codes_override: codes_str = json.dumps(codes_override)
    else:
        codes_list = get_response_codes(path_tmpl, method, spec)
        codes_str = json.dumps(codes_list)

    if method in ["POST", "PUT", "PATCH"]:
        lines.append(f'  svc.{method.lower()}(url, {{')
        lines.append('    body: JSON.stringify(body),')
        lines.append(f'    expectedResponseCodes: {codes_str},')
        lines.append('    parameters: { description: description,')
        for p in sig_params:
             if _is_valid_js_identifier(p):
                 lines.append(f'      {p}: String({sanitize_param(p)}),')
        lines.append('    }')
        lines.append('  });')
        if not codes_override:
             # --- FIX: EVENT PAYLOAD BASED ON STRUCTURAL KEYS ---
             event_fields = []
             for k in entity_keys:
                 if k in sig_params and _is_valid_js_identifier(k):
                     event_fields.append(f'{k}: String({sanitize_param(k)})')
             
             # Safety fallback: if no keys matched but 'id' exists
             if not event_fields and "id" in sig_params:
                 event_fields.append('id: String(id)')
                 
             event_payload = ", ".join(event_fields)
             lines.append(f'  bp.sync({{ request: bp.Event("Done: " + description, {{ {event_payload} }}) }});')
    else:
        lines.append(f'  svc.{method.lower()}(url, {{')
        lines.append('    parameters: { description: description },')
        lines.append(f'    expectedResponseCodes: {codes_str},')
        lines.append('    callback: function(response) {')
        lines.append('      if (response.statusCode >= 200 && response.statusCode < 300) {')
        lines.append('          try {')
        lines.append('              var items = JSON.parse(response.body);')
        lines.append('              if(items.results) items = items.results;')
        lines.append('              bp.log.info("DEBUG Verify Response: " + JSON.stringify(items));')
        lines.append('          } catch (e) { bp.log.info("DEBUG Verify: Could not parse body"); }')
        lines.append('      }')
        lines.append('    }')
        lines.append('  });')
    lines.append('}')
    return lines

def emit_interfaces(spec: Dict[str, Any], out_dir: Path):
    print("DEBUG: Running interface_emitter.py VERSION STRUCTURAL_KEYS")
    base_url = spec.get("base_url", "http://localhost:8080")
    parsed = urlparse(base_url)
    default_scheme = parsed.scheme or "http"
    default_host = parsed.hostname or "localhost"
    default_port = parsed.port or (80 if default_scheme == "http" else 443)
    entities = spec.get("entities", {})
    raw_spec = get_raw_spec(spec)
    
    lines = []
    lines.append('//@provengo summon rest')
    lines.append('// === Auto-generated interfaces.readable.js ===')
    lines.append(f"var host = (typeof host !== 'undefined') ? host : '{default_host}';")
    lines.append(f"var port = (typeof port !== 'undefined') ? port : {default_port};")
    lines.append(f"var protocol = (typeof protocol !== 'undefined') ? protocol : '{default_scheme}';")
    lines.append('const svc = new RESTSession(protocol + "://" + host + ":" + port, "provengo-client", { headers: { "Content-Type": "application/json" } });')
    lines.append('function matchesDescriptionRegex(re) { return bp.EventSet("Match description", function (e) { return !!(e && e.data && e.data.parameters && typeof e.data.parameters.description === "string" && re.test(e.data.parameters.description)); }); }')
    lines.append('function waitFor(eventSet) { return bp.sync({waitFor: eventSet}); }')
    lines.append('function matchSuccess(desc) { return bp.EventSet("Success Event", function(e) { return e.name === "Done: " + desc; }); }')

    try:
        from new_repo.pipeline.emitter_utils import IGNORED_PARAMS
    except ImportError:
        IGNORED_PARAMS = {"loanedAt", "booksRemaining"}

    for name, ent in entities.items():
        displayName = ent.get("displayName", name)
        cleanName = name.replace(" ", "") 
        lines.append(f'// ---- Entity: {displayName} ----')
        
        # 1. Collect Params & STRUCTURAL KEYS
        entity_keys, all_entity_params = collect_entity_params(name, ent, raw_spec)
        
        # Cleanup
        all_entity_params = [p for p in all_entity_params if _is_valid_js_identifier(p)]
        all_entity_params = sorted(list(set(all_entity_params)))
        
        print(f"DEBUG GEN: Entity {name} Keys: {entity_keys} | Params: {all_entity_params}")
        
        ops = ent.get("operations", {})

        for op_type, op_data in ops.items():
            if not op_type == "verifyExists" and (not op_data or not isinstance(op_data, dict)): continue
            fn_name = op_data.get("name", f"{op_type}{name}")
            
            is_create = str(op_type).lower() in ["add", "create", "post", "update", "put"]
            if not is_create and ("create" in fn_name.lower() or "add" in fn_name.lower()):
                is_create = True
            
            if is_create:
                local_sig_params = all_entity_params
            else:
                local_sig_params = _get_op_specific_params(op_data, op_type, entity_keys)
            
            op_lines = _generate_js_operation(op_data, fn_name, local_sig_params, entity_keys, spec, raw_spec)
            lines.extend(op_lines)
            lines.append('')

        if "add" in ops and isinstance(ops["add"], dict):
            # Wrapper Add
            local_sig_params = all_entity_params
            wrapper_lines = _generate_js_operation(ops["add"], f"tryToAddExisting{name}", local_sig_params, entity_keys, spec, raw_spec, "POST", [400, 409], f"[{cleanName}] Try Add Existing")
            lines.extend(wrapper_lines)
            lines.append('')

        coll_url_template = ""
        if "add" in ops and isinstance(ops["add"], dict): coll_url_template = ops["add"].get("path", "")
        elif "get" in ops and isinstance(ops["get"], dict):
             tmp = ops["get"].get("path", "")
             if "/{" in tmp: coll_url_template = tmp.split("/{")[0]
             else: coll_url_template = tmp

        if coll_url_template:
            js_coll_url = f'"{coll_url_template}"'
            for p in all_entity_params: js_coll_url = js_coll_url.replace(f'{{{p}}}', f'" + {sanitize_param(p)} + "')
            js_coll_url = js_coll_url.replace(' + ""', '')

            verify_logic = "match = true;"
            verify_logic += f'\n          bp.log.info("DEBUG VERIFY ITEM: " + JSON.stringify(items[i]));'
            for p in all_entity_params:
                safe_p = sanitize_param(p)
                verify_logic += f'\n          if (typeof {safe_p} !== "undefined") {{'
                verify_logic += f'\n             if (String(items[i].{p}) !== String({safe_p})) {{ match = false; bp.log.info("  Mismatch {p}: " + items[i].{p} + " != " + {safe_p}); }}'
                verify_logic += f'\n          }}'
            
            verify_sig_str = ", ".join([sanitize_param(p) for p in all_entity_params])

            lines.append(f'function verify{name}Exists({verify_sig_str}) {{')
            lines.append(f'  var url = {js_coll_url};')
            lines.append(f'  bp.log.info("DEBUG VERIFIER for {name}: Arguments=" + JSON.stringify(arguments));')
            lines.append(f'  var description = "Verify {name} exists";')
            lines.append('  svc.get(url, { expectedResponseCodes: [200], callback: function(response) {')
            lines.append('      var items = JSON.parse(response.body);')
            lines.append('      if (items.results) items = items.results;')
            lines.append('      if (!Array.isArray(items)) items = [items];') 
            lines.append('      if (Array.isArray(items)) {')
            lines.append('        for (var i = 0; i < items.length; i++) {')
            lines.append('          var match = false;')
            lines.append(f'          {verify_logic}')
            lines.append('          if (match) return pvg.success("Entity exists");')
            lines.append('        }')
            lines.append('      }')
            lines.append(f'      return pvg.fail("Expected {name} to exist but it does not");')
            lines.append('    }')
            lines.append('  });')
            lines.append('}')
            lines.append('')
            
            lines.append(f'function verify{name}DoesNotExist({verify_sig_str}) {{')
            lines.append(f'  var url = {js_coll_url};')
            lines.append(f'  var description = "[{cleanName}] Verify {name} does not exist";')
            lines.append('  svc.get(url, { expectedResponseCodes: [200], callback: function(response) {')
            lines.append('      var items = JSON.parse(response.body);')
            lines.append('      if (items.results) items = items.results;')
            lines.append('      if (!Array.isArray(items)) items = [items];')
            lines.append('      if (Array.isArray(items)) {')
            lines.append('        for (var i = 0; i < items.length; i++) {')
            lines.append('          var match = false;')
            lines.append(f'          {verify_logic}')
            lines.append('          if (match) return pvg.fail("Expected Entity to not exist but it does");')
            lines.append('        }')
            lines.append('      }')
            lines.append(f'      return pvg.success("{name} does not exist");')
            lines.append('    }')
            lines.append('  });')
            lines.append('}')
            lines.append('')

        if "delete" in ops:
             # Use the first key for delete signature if multiple
             del_sig = ", ".join([sanitize_param(k) for k in entity_keys]) if entity_keys else "id"
             
             lines.append(f'function tryToDeleteANonExisting{name}({del_sig}) {{')
             lines.append(f'   delete{name}({del_sig});') 
             lines.append('}')
             lines.append('')
             
             lines.append(f'function matchDeleted{name}({del_sig}) {{ return bp.EventSet("Del", function(e){{ return e.name.includes("Delete"); }}); }}')
             lines.append(f'function waitForAny{name}Deleted() {{ return bp.sync({{waitFor: bp.EventSet("AnyDel", function(e){{ return e.name.includes("Delete"); }}) }}); }}')
             lines.append('')
        
        if "add" in ops:
             # Matcher receives ALL args, but implementation is generic
             add_sig = ", ".join([sanitize_param(p) for p in all_entity_params])
             lines.append(f'function matchAdded{name}({add_sig}) {{ return bp.EventSet("Add", function(e){{ return e.name.includes("Create"); }}); }}')
             
             # Waiter returns DATA payload, not event object
             lines.append(f'function waitForAny{name}Added() {{')
             lines.append(f'   var e = bp.sync({{waitFor: bp.EventSet("AnyAdd", function(e){{ return e.name.includes("Create"); }}) }});')
             lines.append(f'   return e.data;')
             lines.append('}')
             
             lines.append(f'function waitFor{name}Added({add_sig}) {{ return bp.sync({{waitFor: matchAdded{name}({add_sig})}}); }}')
             lines.append('')

    ensure_dir(out_dir)
    outfile = out_dir / "interfaces.readable.js"
    print(f"DEBUG GEN: Writing to {outfile.resolve()}")
    outfile.write_text("\n".join(lines), encoding="utf-8")
    
    # Dual Write
    try:
        path_str = str(outfile.resolve())
        if "provengo_ready" in path_str:
            runtime_path_str = path_str.replace("provengo_ready", "provengo")
            runtime_file = Path(runtime_path_str)
            if runtime_file.parent.exists():
                runtime_file.write_text("\n".join(lines), encoding="utf-8")
                print(f"DEBUG GEN: ALSO Wrote to {runtime_file.resolve()}")
    except Exception as e:
        print(f"DEBUG GEN: Failed to write to runtime folder: {e}")