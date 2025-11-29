from pathlib import Path
import json
import re
from typing import Dict, Any, List
from urllib.parse import urlparse

def _ensure_dir(path: Path):
    path.mkdir(parents=True, exist_ok=True)

def _render_body_js(template: Any, indent=4) -> str:
    if not template: return "undefined"
    if isinstance(template, dict):
        lines = ["{"]
        for k, v in template.items():
            val_str = _render_body_js(v, indent + 2)
            lines.append(f'{" " * indent}"{k}": {val_str},')
        lines.append(f'{" " * (indent-2)}}}')
        return "\n".join(lines)
    if isinstance(template, str):
        if template.startswith("{") and template.endswith("}"):
            var_name = template.strip("{}")
            return f'String({var_name})'
        return f'"{template}"'
    return str(template)

def _template_to_regex(template: str):
    parts = re.split(r'\{([^}]+)\}', template)
    regex_parts = []
    param_names = []
    for i, part in enumerate(parts):
        if i % 2 == 0:
            if part: regex_parts.append(re.escape(part))
        else:
            param_names.append(part)
            regex_parts.append("(.+)")
    return "^" + "".join(regex_parts) + "$", param_names

# --- Helper to resolve JSON schema $refs ---
def _resolve_schema(schema, full_spec):
    if not schema:
        return {}
    if "$ref" in schema:
        ref_path = schema["$ref"].split("/")
        # Assume #/components/schemas/Name
        if len(ref_path) > 3 and ref_path[1] == "components" and ref_path[2] == "schemas":
            schema_name = ref_path[3]
            return full_spec.get("components", {}).get("schemas", {}).get(schema_name, {})
    return schema

# ======================== INTERFACES (LLE) ========================

def _emit_interfaces(spec: Dict[str, Any], out_dir: Path):
    base_url = spec.get("base_url", "http://localhost:8080")
    
    parsed = urlparse(base_url)
    default_scheme = parsed.scheme or "http"
    default_host = parsed.hostname or "localhost"
    default_port = parsed.port or (80 if default_scheme == "http" else 443)

    entities = spec.get("entities", {})
    lines = []
    
    lines.append('//@provengo summon rest')
    lines.append('// === Auto-generated interfaces.readable.js ===')
    lines.append('')
    
    lines.append(f"var host = (typeof host !== 'undefined') ? host : '{default_host}';")
    lines.append(f"var port = (typeof port !== 'undefined') ? port : {default_port};")
    lines.append(f"var protocol = (typeof protocol !== 'undefined') ? protocol : '{default_scheme}';")
    lines.append('')
    
    lines.append('const svc = new RESTSession(protocol + "://" + host + ":" + port, "provengo-client", {')
    lines.append('  headers: { "Content-Type": "application/json" },')
    lines.append('});')
    lines.append('')
    
    lines.append('function matchesDescriptionRegex(re) {')
    lines.append('  return bp.EventSet("Match description", function (e) {')
    lines.append('    return !!(e && e.data && e.data.parameters && typeof e.data.parameters.description === "string" && re.test(e.data.parameters.description));')
    lines.append('  });')
    lines.append('}')
    lines.append('')
    
    lines.append('function matchesDescription(str) {')
    lines.append('  return bp.EventSet("Match description", function (e) {')
    lines.append('    return !!(e && e.data && e.data.parameters && e.data.parameters.description === str);')
    lines.append('  });')
    lines.append('}')
    lines.append('')

    for name, ent in entities.items():
        displayName = ent.get("displayName", name)
        lines.append(f'// ---- Entity: {displayName} ----')
        lines.append('')
        
        ops = ent.get("operations", {})
        
        # --- 1. Detect Primary Key from Paths ---
        primary_key = None
        check_ops = [ops.get('get'), ops.get('delete'), ops.get('update')]
        for op in check_ops:
            if op and '{' in op.get('path', ''):
                matches = re.findall(r'\{([^}]+)\}', op['path'])
                if matches:
                    primary_key = matches[0]
                    break

        global_params = []
        seen = set()
        if primary_key:
            seen.add(primary_key)
            global_params.append(primary_key)

        def collect(p_list):
            for p in p_list:
                if p not in seen:
                    seen.add(p)
                    global_params.append(p)
        
        for op in ops.values(): collect(op.get("params", []))
        if not global_params: collect(ent.get("params", []))
        
        global_args_str = ", ".join(global_params)

        # --- EMIT OPERATIONS ---
        for op_type, op_data in ops.items():
            if not op_data or op_type == "verifyExists": continue

            fn_name = op_data.get("name", f"{op_type}{name}")
            method = op_data.get("method", "GET").upper()
            path_tmpl = op_data.get("path", "")
            
            desc_tmpl = op_data.get("descriptionTemplate", "")
            if not desc_tmpl:
                desc_tmpl = f"{op_type.capitalize()} {name}"
                if global_params:
                    desc_tmpl += " with " + " ".join([f"{p} {{{p}}}" for p in global_params])

            js_url = f'"{path_tmpl}"'
            js_desc = f'"{desc_tmpl}"'
            for p in global_params:
                js_url = js_url.replace(f'{{{p}}}', f'" + {p} + "')
                js_desc = js_desc.replace(f'{{{p}}}', f'" + {p} + "')
            
            js_url = js_url.replace(' + ""', '')
            js_desc = js_desc.replace(' + ""', '')

            body_js = "undefined"
            if "bodyTemplate" in op_data and op_data["bodyTemplate"]:
                body_js = _render_body_js(op_data["bodyTemplate"])
            else:
                if method in ["POST", "PUT", "PATCH"]:
                    # --- FILL REQUIRED FIELDS FROM SCHEMA ---
                    b_lines = ["{"]
                    
                    req_body = op_data.get("requestBody", {})
                    content = req_body.get("content", {})
                    json_media = content.get("application/json", {})
                    schema_ref = json_media.get("schema", {})
                    
                    # Resolve ref if needed
                    schema = _resolve_schema(schema_ref, spec)
                    
                    props = schema.get("properties", {})
                    required_fields = schema.get("required", [])
                    
                    # Merge Primary Key into required fields to ensure it's always sent
                    if primary_key and primary_key not in required_fields:
                        required_fields.append(primary_key)

                    # If we found schema props, use them. Else fallback to global_params
                    fields_to_gen = required_fields if props else global_params
                    
                    for field in fields_to_gen:
                        val_expr = "null"
                        
                        # A. Is it the Primary Key? Use the passed argument.
                        if field == primary_key:
                            val_expr = f'String({primary_key})'
                        
                        # B. Is it a known path param? Use that.
                        elif field in global_params:
                            val_expr = f'String({field})'
                            
                        # C. Dummy Data Generation based on Type
                        else:
                            f_type = props.get(field, {}).get("type", "string")
                            if f_type == "integer" or f_type == "number":
                                val_expr = "1"
                            elif f_type == "boolean":
                                val_expr = "true"
                            elif f_type == "array":
                                val_expr = "[]"
                            elif f_type == "object":
                                val_expr = "{}"
                            else:
                                # String: make unique based on PK
                                if primary_key:
                                    val_expr = f'"{field}_" + {primary_key}'
                                else:
                                    val_expr = f'"{field}_dummy"'

                        b_lines.append(f'    "{field}": {val_expr},')
                    
                    b_lines.append("  }")
                    body_js = "\n".join(b_lines)

            lines.append(f'function {fn_name}({global_args_str}) {{')
            lines.append(f'  var url = {js_url};')
            lines.append(f'  var description = {js_desc};')
            lines.append(f'  var body = {body_js};')
            
            lines.append(f'  bp.log.info("[CALL] {fn_name}");')
            
            # Allow Idempotent Creation (409)
            codes = "[]"
            if op_type == "add":
                codes = "[200, 201, 204, 409]"

            if method in ["POST", "PUT", "PATCH"]:
                lines.append(f'  svc.{method.lower()}(url, {{')
                lines.append('    body: JSON.stringify(body),')
                lines.append(f'    expectedResponseCodes: {codes},')
                lines.append('    parameters: { description: description }')
                lines.append('  });')
            else:
                lines.append(f'  svc.{method.lower()}(url, {{')
                lines.append('    parameters: { description: description }')
                lines.append('  });')
            lines.append('}')
            lines.append('')

        # --- EMIT WRAPPERS ---
        def get_wrapper_body_code(op_data, method, params, prim_key, full_spec):
            if "bodyTemplate" in op_data and op_data["bodyTemplate"]:
                return _render_body_js(op_data["bodyTemplate"])
            else:
                if method in ["POST", "PUT", "PATCH"]:
                    b_lines = ["{"]
                    # Resolve schema for Wrapper too
                    req_body = op_data.get("requestBody", {})
                    content = req_body.get("content", {})
                    json_media = content.get("application/json", {})
                    schema_ref = json_media.get("schema", {})
                    schema = _resolve_schema(schema_ref, full_spec)
                    
                    props = schema.get("properties", {})
                    required_fields = schema.get("required", [])
                    if prim_key and prim_key not in required_fields: required_fields.append(prim_key)
                    
                    fields_to_gen = required_fields if props else params

                    for field in fields_to_gen:
                        val_expr = "null"
                        if field == prim_key:
                            val_expr = f'String({prim_key})'
                        elif field in params:
                            val_expr = f'String({field})'
                        else:
                            f_type = props.get(field, {}).get("type", "string")
                            if f_type == "integer" or f_type == "number": val_expr = "1"
                            elif f_type == "boolean": val_expr = "true"
                            elif f_type == "array": val_expr = "[]"
                            elif f_type == "object": val_expr = "{}"
                            else: 
                                if prim_key: val_expr = f'"{field}_" + {prim_key}'
                                else: val_expr = f'"{field}_dummy"'
                        
                        b_lines.append(f'    "{field}": {val_expr},')
                    b_lines.append("  }")
                    return "\n".join(b_lines)
            return "undefined"

        if "add" in ops:
            op_data = ops["add"]
            js_url = f'"{op_data.get("path", "")}"'
            for p in global_params: js_url = js_url.replace(f'{{{p}}}', f'" + {p} + "')
            js_url = js_url.replace(' + ""', '')
            
            # Pass full spec to resolve refs
            body_js = get_wrapper_body_code(op_data, "POST", global_params, primary_key, spec)

            lines.append(f'function tryToAddExisting{name}({global_args_str}) {{')
            lines.append(f'  var url = {js_url};')
            lines.append(f'  var body = {body_js};')
            lines.append(f'  var description = "Verify that we cannot add another {name}...";')
            
            lines.append('  if (body === undefined) { body = {}; }')
            lines.append('  svc.post(url, {')
            lines.append('    body: JSON.stringify(body),')
            lines.append('    expectedResponseCodes: [400, 409],')
            lines.append('    parameters: { description: description }')
            lines.append('  });')
            lines.append('}')
            lines.append('')

        # --- VERIFY EXISTS (READ AND SCAN) ---
        coll_url_template = ""
        if "add" in ops:
            coll_url_template = ops["add"].get("path", "")
        elif "get" in ops:
            tmp = ops["get"].get("path", "")
            if "/{" in tmp:
                coll_url_template = tmp.split("/{")[0]
            else:
                coll_url_template = tmp

        if coll_url_template:
            js_coll_url = f'"{coll_url_template}"'
            for p in global_params: 
                js_coll_url = js_coll_url.replace(f'{{{p}}}', f'" + {p} + "')
            js_coll_url = js_coll_url.replace(' + ""', '')

            selected_key = primary_key
            if not selected_key:
                priority_keys = ['id', 'ndc', 'code', 'username', 'isbn', 'email']
                for pk in priority_keys:
                    if pk in global_params:
                        selected_key = pk
                        break
            if not selected_key:
                for p in global_params:
                    if 'id' in p.lower():
                        selected_key = p
                        break
            
            if selected_key:
                 condition_str = f'String(items[i].{selected_key}) === String({selected_key})'
            else:
                match_conds = []
                for p in global_params:
                    match_conds.append(f'String(items[i].{p}) === String({p})')
                condition_str = " && ".join(match_conds) if match_conds else "true"

            lines.append(f'function verify{name}Exists({global_args_str}) {{')
            lines.append(f'  var url = {js_coll_url};')
            lines.append(f'  var description = "Verify {name} exists";')
            lines.append('  svc.get(url, {')
            lines.append('    expectedResponseCodes: [200],')
            lines.append('    parameters: { description: description },')
            lines.append('    callback: function(response) {')
            lines.append('      var items = JSON.parse(response.body);')
            lines.append('      if (Array.isArray(items)) {')
            lines.append('        for (var i = 0; i < items.length; i++) {')
            lines.append(f'          if ({condition_str}) {{')
            lines.append(f'            return pvg.success("{name} exists");')
            lines.append('          }')
            lines.append('        }')
            lines.append('      }')
            lines.append(f'      return pvg.fail("Expected {name} to exist but it does not");')
            lines.append('    }')
            lines.append('  });')
            lines.append('}')
            lines.append('')

            lines.append(f'function verify{name}DoesNotExist({global_args_str}) {{')
            lines.append(f'  var url = {js_coll_url};')
            lines.append(f'  var description = "Verify {name} does not exist";')
            lines.append('  svc.get(url, {')
            lines.append('    expectedResponseCodes: [200],')
            lines.append('    parameters: { description: description },')
            lines.append('    callback: function(response) {')
            lines.append('      var items = JSON.parse(response.body);')
            lines.append('      if (Array.isArray(items)) {')
            lines.append('        for (var i = 0; i < items.length; i++) {')
            lines.append(f'          if ({condition_str}) {{')
            lines.append(f'            return pvg.fail("Expected {name} to not exist but it does");')
            lines.append('          }')
            lines.append('        }')
            lines.append('      }')
            lines.append(f'      return pvg.success("{name} does not exist");')
            lines.append('    }')
            lines.append('  });')
            lines.append('}')
            lines.append('')

        # Delete Non Existing
        if "delete" in ops:
            op_data = ops["delete"]
            expected_codes = op_data.get('x-negative-delete-expected-codes', [200, 400, 404])
            expected_codes_str = json.dumps(expected_codes)

            js_url = f'"{op_data.get("path", "")}"'
            for p in global_params: js_url = js_url.replace(f'{{{p}}}', f'" + {p} + "')
            js_url = js_url.replace(' + ""', '')

            lines.append(f'function tryToDeleteANonExisting{name}({global_args_str}) {{')
            lines.append(f'  var url = {js_url};')
            lines.append(f'  var description = "Verify we cannot delete non-existing {name}";')
            lines.append('  svc.delete(url, {')
            lines.append(f'    expectedResponseCodes: {expected_codes_str},')
            lines.append('    parameters: { description: description }')
            lines.append('  });')
            lines.append('}')
            lines.append('')

        # --- EMIT WAITERS ---
        if "add" in ops:
            op = ops["add"]
            desc_tmpl = op.get("descriptionTemplate", "")
            if not desc_tmpl:
                desc_tmpl = f"Add {name}"
                if global_params:
                    desc_tmpl += " with " + " ".join([f"{p} {{{p}}}" for p in global_params])

            regex, params = _template_to_regex(desc_tmpl)
            
            matcher_name = f"matchAdded{name}"
            lines.append(f'function {matcher_name}({global_args_str}) {{')
            js_expected_desc = f'"{desc_tmpl}"'
            for p in global_params:
                js_expected_desc = js_expected_desc.replace(f'{{{p}}}', f'" + {p} + "')
            js_expected_desc = js_expected_desc.replace(' + ""', '')
            lines.append(f'  var expectedDesc = {js_expected_desc};')
            lines.append(f'  return bp.EventSet("{matcher_name}", function(e) {{')
            lines.append(f'      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);')
            lines.append(f'  }});')
            lines.append('}')
            lines.append('')

            waiter_name_any = f"waitForAny{name}Added"
            lines.append(f'function {waiter_name_any}() {{')
            lines.append(f'  var ev = bp.sync({{waitFor: matchesDescriptionRegex(/{regex}/)}});')
            lines.append(f'  var m = ev.data.parameters.description.match(/{regex}/);')
            lines.append('  var captures = m.slice(1);')
            lines.append(f'  var names = {json.dumps(params)};')
            lines.append('  var obj = {};')
            lines.append('  for (var i = 0; i < names.length; i++) {')
            lines.append('    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;')
            lines.append('  }')
            lines.append('  return obj;')
            lines.append('}')
            lines.append('')

            # Generic Get-Event-Set
            get_es_fn = f"get{name}AddedEvent"
            lines.append(f'function {get_es_fn}(keyVal) {{')
            lines.append(f'  return bp.EventSet("Add{name}:" + keyVal, function(e) {{')
            lines.append(f'    if (!e.data || !e.data.parameters) return false;')
            check_key = primary_key if primary_key else "id"
            lines.append(f'    return String(e.data.parameters.{check_key}) === String(keyVal);')
            lines.append(f'  }});')
            lines.append('}')
            lines.append('')

            waiter_name_specific = f"waitFor{name}Added"
            lines.append(f'function {waiter_name_specific}({global_args_str}) {{')
            lines.append(f'  var expectedDesc = {js_expected_desc};')
            lines.append(f'  bp.sync({{waitFor: matchesDescription(expectedDesc)}});')
            lines.append('}')
            lines.append('')

        if "delete" in ops:
            op = ops["delete"]
            desc_tmpl = op.get("descriptionTemplate", "")
            if not desc_tmpl:
                desc_tmpl = f"Delete {name}"
                if global_params:
                    desc_tmpl += " with " + " ".join([f"{p} {{{p}}}" for p in global_params])

            regex, params = _template_to_regex(desc_tmpl)
            
            matcher_name = f"matchDeleted{name}"
            lines.append(f'function {matcher_name}({global_args_str}) {{')
            js_expected_desc = f'"{desc_tmpl}"'
            for p in global_params:
                js_expected_desc = js_expected_desc.replace(f'{{{p}}}', f'" + {p} + "')
            js_expected_desc = js_expected_desc.replace(' + ""', '')

            lines.append(f'  var expectedDesc = {js_expected_desc};')
            lines.append(f'  return bp.EventSet("{matcher_name}", function(e) {{')
            lines.append(f'      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);')
            lines.append(f'  }});')
            lines.append('}')
            lines.append('')
            
            waiter_name = f"waitForAny{name}Deleted"
            lines.append(f'function {waiter_name}() {{')
            lines.append(f'  var ev = bp.sync({{waitFor: matchesDescriptionRegex(/{regex}/)}});')
            lines.append(f'  var m = ev.data.parameters.description.match(/{regex}/);')
            lines.append('  var captures = m.slice(1);')
            lines.append(f'  var names = {json.dumps(params)};')
            lines.append('  var obj = {};')
            lines.append('  for (var i = 0; i < names.length; i++) {')
            lines.append('    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;')
            lines.append('  }')
            lines.append('  return obj;')
            lines.append('}')
            lines.append('')

    _ensure_dir(out_dir)
    (out_dir / "interfaces.readable.js").write_text("\n".join(lines), encoding="utf-8")


# ======================== STORIES (HLS) ========================

def _emit_stories(spec: Dict[str, Any], out_dir: Path):
    entities = spec.get("entities", {})
    lines = []
    
    lines.append('// Auto-generated HLS stories')
    lines.append('//@provengo summon rest')
    lines.append('')
    # bthread line removed
    lines.append('')

    base_id = 200 

    # Key Map helper for dependencies
    entity_pks_map = {}
    for name, ent in entities.items():
        ops = ent.get("operations", {})
        path_keys = []
        check_ops = [ops.get('get'), ops.get('delete'), ops.get('update')]
        for op in check_ops:
            if op and '{' in op.get('path', ''):
                matches = re.findall(r'\{([^}]+)\}', op['path'])
                for m in matches:
                    if m not in path_keys: path_keys.append(m)
        entity_pks_map[name] = path_keys

    for name, ent in entities.items():
        ops = ent.get("operations", {})
        add_fn = ops.get("add", {}).get("name")
        del_fn = ops.get("delete", {}).get("name")
        upd_fn = ops.get("update", {}).get("name")
        get_fn = ops.get("get", {}).get("name")
        
        try_add_fn = f"tryToAddExisting{name}"
        try_del_fn = f"tryToDeleteANonExisting{name}"
        ver_ex_fn = f"verify{name}Exists"
        ver_ne_fn = f"verify{name}DoesNotExist"
        
        wait_add_fn = f"waitForAny{name}Added"
        wait_specific_fn = f"waitFor{name}Added"
        match_del_fn = f"matchDeleted{name}"

        # --- Key Detection ---
        primary_key = None
        check_ops = [ops.get('get'), ops.get('delete'), ops.get('update')]
        for op in check_ops:
            if op and '{' in op.get('path', ''):
                matches = re.findall(r'\{([^}]+)\}', op['path'])
                if matches:
                    primary_key = matches[0]
                    break
        
        all_params = []
        seen = set()
        if primary_key:
            seen.add(primary_key)
            all_params.append(primary_key)

        def collect(p_list):
            for p in p_list:
                if p not in seen:
                    seen.add(p)
                    all_params.append(p)
        
        for op in ops.values(): collect(op.get("params", []))
        if not all_params: collect(ent.get("params", []))

        def get_vars(idx):
            declarations = []
            for p in all_params:
                if p == primary_key or p.lower() == 'id' or p.lower().endswith('id'):
                    declarations.append(f'  let {p} = {idx};')
                else:
                    declarations.append(f'  let {p} = "{p}_{idx}";')
            return "\n".join(declarations)

        def get_args(idx):
            args = []
            for p in all_params:
                if p == primary_key or p.lower() == 'id' or p.lower().endswith('id'):
                    args.append(f"{idx}")
                else:
                    args.append(f'"{p}_{idx}"')
            return ", ".join(args)

        # --- DEPENDENCY BARRIER ---
        deps = []
        for p in all_params:
            for potential_ent in entities:
                if potential_ent.lower() in p.lower() and "id" in p.lower() and potential_ent != name:
                    deps.append((potential_ent, p))

        barrier_code = []
        if deps:
            barrier_code.append('  // Dependency Barrier')
            barrier_code.append('  let pending = [];')
            for target_ent, var_name in deps:
                barrier_code.append(f'  pending.push(get{target_ent}AddedEvent({var_name}));')
            
            barrier_code.append('  while (pending.length > 0) {')
            barrier_code.append('    let e = bp.sync({waitFor: pending});')
            barrier_code.append('    pending = pending.filter(es => !es.contains(e));')
            barrier_code.append('  }')
            barrier_code.append('  // End Barrier')

        barrier_str = "\n".join(barrier_code)

        # STORIES GENERATION
        if add_fn and del_fn:
            lines.append(f'// Story: crud:{name}:nondet:1:1')
            lines.append(f'bthread("crud:{name}:nondet:1:1", function () {{')
            lines.append(get_vars(base_id))
            if barrier_str: lines.append(barrier_str)
            lines.append(f'  {add_fn}({get_args(base_id)});')
            lines.append(f'  {wait_specific_fn}({get_args(base_id)});')
            lines.append(f'  {try_add_fn}({get_args(base_id)});')
            lines.append(f'  {ver_ex_fn}({get_args(base_id)});')
            if upd_fn: lines.append(f'  {upd_fn}({get_args(base_id)});')
            lines.append(f'  {del_fn}({get_args(base_id)});')
            lines.append(f'  {try_del_fn}({get_args(base_id)});')
            lines.append(f'  {ver_ne_fn}({get_args(base_id)});')
            lines.append('});')
            lines.append('')

            lines.append(f'// Story: crud:{name}:nondet:1:2')
            lines.append(f'bthread("crud:{name}:nondet:1:2", function () {{')
            lines.append(get_vars(base_id + 1))
            if barrier_str: lines.append(barrier_str)
            lines.append(f'  {add_fn}({get_args(base_id + 1)});')
            lines.append(f'  {wait_specific_fn}({get_args(base_id + 1)});')
            lines.append(f'  {try_add_fn}({get_args(base_id + 1)});')
            if upd_fn: lines.append(f'  {upd_fn}({get_args(base_id + 1)});')
            lines.append(f'  {ver_ex_fn}({get_args(base_id + 1)});')
            lines.append(f'  {del_fn}({get_args(base_id + 1)});')
            lines.append(f'  {try_del_fn}({get_args(base_id + 1)});')
            lines.append(f'  {ver_ne_fn}({get_args(base_id + 1)});')
            lines.append('});')
            lines.append('')

            lines.append(f'// Story: crud:{name}:nondet:negative:dup-add')
            lines.append(f'bthread("crud:{name}:nondet:negative:dup-add", function () {{')
            lines.append(get_vars(base_id + 6))
            if barrier_str: lines.append(barrier_str)
            lines.append(f'  {add_fn}({get_args(base_id + 6)});')
            lines.append(f'  {wait_specific_fn}({get_args(base_id + 6)});')
            lines.append(f'  {ver_ex_fn}({get_args(base_id + 6)});')
            lines.append(f'  {try_add_fn}({get_args(base_id + 6)});')
            lines.append(f'  {ver_ex_fn}({get_args(base_id + 6)});')
            lines.append('});')
            lines.append('')

            if upd_fn:
                lines.append(f'// Story: crud:{name}:nondet:existing:update')
                lines.append(f'bthread("crud:{name}:nondet:existing:update", function () {{')
                lines.append(f'  let ev = {wait_add_fn}();')
                lines.append(f'  let args = Object.values(ev);')
                lines.append(f'  block({match_del_fn}.apply(null, args), function () {{')
                lines.append(f'    {ver_ex_fn}.apply(null, args);')
                lines.append(f'    {upd_fn}.apply(null, args);')
                lines.append(f'    {ver_ex_fn}.apply(null, args);')
                lines.append(f'  }});')
                lines.append('});')
                lines.append('')

            lines.append(f'// Story: monitor:{name}:add')
            lines.append(f'bthread("monitor:{name}:add", function () {{')
            lines.append('  while (true) {')
            lines.append(f'    let ev = {wait_add_fn}();')
            lines.append(f'    let args = Object.values(ev);')
            lines.append(f'    block({match_del_fn}.apply(null, args), function () {{')
            lines.append(f'      {ver_ex_fn}.apply(null, args);')
            lines.append(f'    }});')
            lines.append('  }')
            lines.append('});')
            lines.append('')

        elif get_fn:
            lines.append(f'// Story: crud:{name}:read_only')
            lines.append(f'bthread("crud:{name}:read_only", function () {{')
            lines.append(get_vars(base_id))
            lines.append(f'  {ver_ex_fn}({get_args(base_id)});')
            lines.append('});')
            lines.append('')

        base_id += 10

    _ensure_dir(out_dir)
    (out_dir / "stories_hls.js").write_text("\n".join(lines), encoding="utf-8")

def emit_interfaces_and_stories(spec: Dict[str, Any], out_dir: Path):
    if not isinstance(out_dir, Path):
        out_dir = Path(out_dir)
    _emit_interfaces(spec, out_dir)
    _emit_stories(spec, out_dir)