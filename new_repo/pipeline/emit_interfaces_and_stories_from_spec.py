from pathlib import Path
import json
import re
# FIX: Added Tuple to imports
from typing import Dict, Any, List, Tuple
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
            return f'String({_sanitize_param(var_name)})'
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

# --- JavaScript Reserved Words ---
JS_RESERVED = {
    "abstract", "arguments", "await", "boolean", "break", "byte", "case", "catch",
    "char", "class", "const", "continue", "debugger", "default", "delete", "do",
    "double", "else", "enum", "eval", "export", "extends", "false", "final",
    "finally", "float", "for", "function", "goto", "if", "implements", "import",
    "in", "instanceof", "int", "interface", "let", "long", "native", "new",
    "null", "package", "private", "protected", "public", "return", "short",
    "static", "super", "switch", "synchronized", "this", "throw", "throws",
    "transient", "true", "try", "typeof", "var", "void", "volatile", "while",
    "with", "yield"
}

def _sanitize_param(name: str) -> str:
    """Prepends underscore if name is a JS reserved keyword."""
    if name in JS_RESERVED:
        return f"_{name}"
    return name

# --- Helper to resolve JSON schema $refs and allOf ---
def _resolve_schema(schema, full_spec):
    if not schema: return {}
    
    def get_components(obj):
        if "components" in obj: return obj["components"]
        if "original_spec" in obj and "components" in obj["original_spec"]:
             return obj["original_spec"]["components"]
        return {}

    comps = get_components(full_spec)

    if "$ref" in schema:
        ref_path = schema["$ref"].split("/")
        if len(ref_path) > 3 and ref_path[1] == "components" and ref_path[2] == "schemas":
            schema_name = ref_path[3]
            resolved = comps.get("schemas", {}).get(schema_name, {})
            if resolved:
                return _resolve_schema(resolved, full_spec)

    if "allOf" in schema:
        merged_props = {}
        merged_required = []
        for sub_schema in schema["allOf"]:
            resolved_sub = _resolve_schema(sub_schema, full_spec)
            if "properties" in resolved_sub:
                merged_props.update(resolved_sub["properties"])
            if "required" in resolved_sub:
                merged_required.extend(resolved_sub["required"])
        return {
            "type": "object",
            "properties": merged_props,
            "required": list(set(merged_required))
        }
    
    if schema.get("type") == "object" and "properties" in schema:
        return schema

    return schema

def _get_raw_spec(spec):
    if "paths" in spec: return spec
    if "original_spec" in spec: return spec["original_spec"]
    return spec

def _get_response_codes(path, method, full_spec):
    """Robustly extract response codes from OpenAPI spec"""
    raw_spec = full_spec.get("original_spec", full_spec)
    if not raw_spec: return []
    
    paths = raw_spec.get("paths", {})
    path_item = paths.get(path)
    if not path_item:
        if path.endswith("/"): path_item = paths.get(path[:-1])
        else: path_item = paths.get(path + "/")
            
    if not path_item: return []
    
    op = path_item.get(method.lower())
    if not op: return []
    
    responses = op.get("responses", {})
    codes = []
    for code in responses.keys():
        if code.isdigit():
            codes.append(int(code))
    
    # Robust handling for DELETE operations
    if method.upper() == "DELETE":
        if 204 in codes and 200 not in codes:
            codes.append(200)
        elif 200 in codes and 204 not in codes:
            codes.append(204)
    
    return sorted(list(set(codes)))

def _get_operation_schema(path, method, raw_spec):
    if not raw_spec or not path: return {}, []
    method = method.lower()
    paths = raw_spec.get("paths", {})
    path_item = paths.get(path)
    if not path_item: return {}, []
    op = path_item.get(method)
    if not op: return {}, []
    
    req_body = op.get("requestBody", {})
    content = req_body.get("content", {})
    json_media = content.get("application/json", {})
    schema_ref = json_media.get("schema", {})
    
    resolved_schema = _resolve_schema(schema_ref, raw_spec)
    required = resolved_schema.get("required", [])
    return resolved_schema, required

def _infer_type(param_name, known_type="string"):
    if known_type != "string": return known_type
    lower = param_name.lower()
    if "address" in lower or "meta" in lower: return "object"
    if lower in ["year", "mileage", "age", "count", "amount", "quantity", "baycount", "intervalkm", "intervalmonths"]: return "integer"
    if lower in ["active", "enabled", "visible"]: return "boolean"
    return "string"

# --- SHARED: Collect and Normalize Parameters ---
def _collect_entity_params(name: str, ent: Dict[str, Any], raw_spec: Dict[str, Any]) -> Tuple[str, List[str]]:
    """
    Collects all parameters for an entity from its operations and schema.
    Returns (primary_key, sorted_list_of_params)
    """
    ops = ent.get("operations", {})
    
    # Detect Primary Key
    primary_key = None
    check_ops = [ops.get('get'), ops.get('delete'), ops.get('update')]
    for op in check_ops:
        if op and isinstance(op, dict) and '{' in op.get('path', ''):
            matches = re.findall(r'\{([^}]+)\}', op['path'])
            if matches:
                primary_key = matches[0]
                break
    
    all_params_set = set()
    if primary_key: all_params_set.add(primary_key)
    
    # 1. Ops Params
    for op in ops.values():
        if isinstance(op, dict):
            for p in op.get("params", []): all_params_set.add(p)
    
    # 2. Entity Params
    for p in ent.get("params", []): all_params_set.add(p)

    # 3. Schema Params (for ADD)
    if "add" in ops and isinstance(ops["add"], dict):
        schema, _ = _get_operation_schema(ops["add"].get("path"), "POST", raw_spec)
        props = schema.get("properties", {})
        for k in props.keys(): all_params_set.add(k)
        
    return primary_key, sorted(list(all_params_set))

# --- SHARED: Generate JS Operation Code ---
def _generate_js_operation(op_data, fn_name, sig_params, primary_key, spec, raw_spec, method_override=None, codes_override=None, desc_override=None):
    """
    Generates the JavaScript function body for a REST call.
    Used for both standard operations and 'tryToAdd' wrappers.
    """
    lines = []
    
    # Determine Method and URL
    method = (method_override or op_data.get("method", "GET")).upper()
    path_tmpl = op_data.get("path", "")
    
    # Determine Description
    desc_tmpl = desc_override or op_data.get("descriptionTemplate", "")
    if not desc_tmpl:
        desc_tmpl = f"{method} operation"

    # Construct JS URL and Description strings
    js_url = f'"{path_tmpl}"'
    js_desc = f'"{desc_tmpl}"'
    for p in sig_params:
        js_url = js_url.replace(f'{{{p}}}', f'" + {_sanitize_param(p)} + "')
        js_desc = js_desc.replace(f'{{{p}}}', f'" + {_sanitize_param(p)} + "')
    
    js_url = js_url.replace(' + ""', '')
    js_desc = js_desc.replace(' + ""', '')

    # Construct Body
    body_js = "undefined"
    if "bodyTemplate" in op_data and isinstance(op_data["bodyTemplate"], dict) and op_data["bodyTemplate"]:
        body_js = _render_body_js(op_data["bodyTemplate"])
    else:
        if method in ["POST", "PUT", "PATCH"]:
            b_lines = ["{"]
            schema, required_fields = _get_operation_schema(path_tmpl, method, raw_spec)
            props = schema.get("properties", {})
            
            # Ensure we cover all params in signature
            fields_to_gen = []
            if required_fields: fields_to_gen.extend(required_fields)
            if props: fields_to_gen.extend(props.keys())
            fields_to_gen.extend(op_data.get("params", []))
            if primary_key: fields_to_gen.append(primary_key)
            
            fields_to_gen = sorted(list(set(fields_to_gen)))

            for field in fields_to_gen:
                val_expr = "null"
                f_type = props.get(field, {}).get("type", "string")
                f_type = _infer_type(field, f_type)
                
                var_to_use = None
                if field == primary_key: var_to_use = primary_key
                elif field in sig_params: var_to_use = field

                if var_to_use:
                    sanitized = _sanitize_param(var_to_use)
                    if f_type in ["integer", "number"]: val_expr = f'Number({sanitized})'
                    elif f_type == "boolean": val_expr = f'{sanitized}'
                    elif f_type == "object": val_expr = f'{sanitized}'
                    else: val_expr = f'String({sanitized})'
                else:
                     # Fallback for missing params
                    if f_type in ["integer", "number"]: val_expr = "1"
                    elif f_type == "boolean": val_expr = "true"
                    elif f_type == "array": val_expr = "[]"
                    elif f_type == "object": val_expr = "{}"
                    else: val_expr = f'"{field}_dummy"'

                b_lines.append(f'    "{field}": {val_expr},')
            b_lines.append("  }")
            body_js = "\n".join(b_lines)

    # Determine Args
    sig_args_str = ", ".join([_sanitize_param(p) for p in sig_params])
    
    lines.append(f'function {fn_name}({sig_args_str}) {{')
    lines.append(f'  var url = {js_url};')
    lines.append(f'  var description = {js_desc};')
    lines.append(f'  var body = {body_js};')
    
    # Determine Codes
    if codes_override:
        codes_str = json.dumps(codes_override)
    else:
        codes_list = _get_response_codes(path_tmpl, method, spec)
        codes_str = json.dumps(codes_list)

    if method in ["POST", "PUT", "PATCH"]:
        lines.append(f'  svc.{method.lower()}(url, {{')
        lines.append('    body: JSON.stringify(body),')
        lines.append(f'    expectedResponseCodes: {codes_str},')
        lines.append('    parameters: {')
        lines.append('      description: description,')
        if primary_key: lines.append(f'      {primary_key}: String({_sanitize_param(primary_key)})')
        for p in sig_params:
            if p != primary_key and (p.endswith("Id") or p.endswith("_id")):
                    lines.append(f'      , {p}: String({_sanitize_param(p)})')
        lines.append('    }')
        lines.append('  });')
        
        # Emit Done Event
        if not codes_override: # Only emit done event for success calls, not 'try' calls
             lines.append(f'  bp.sync({{ request: bp.Event("Done: " + description, {{ {primary_key}: String({_sanitize_param(primary_key)}) }}) }});')
    else:
        lines.append(f'  svc.{method.lower()}(url, {{')
        lines.append('    parameters: { description: description },')
        lines.append(f'    expectedResponseCodes: {codes_str}')
        lines.append('  });')

    lines.append('}')
    return lines

# ======================== INTERFACES (LLE) ========================

def _emit_interfaces(spec: Dict[str, Any], out_dir: Path):
    base_url = spec.get("base_url", "http://localhost:8080")
    parsed = urlparse(base_url)
    default_scheme = parsed.scheme or "http"
    default_host = parsed.hostname or "localhost"
    default_port = parsed.port or (80 if default_scheme == "http" else 443)

    entities = spec.get("entities", {})
    raw_spec = _get_raw_spec(spec)
    
    all_known_pks = set() 

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
    lines.append('function waitFor(eventSet) { return bp.sync({waitFor: eventSet}); }')
    lines.append('')
    lines.append('function matchSuccess(desc) {')
    lines.append('  return bp.EventSet("Success Event", function(e) { return e.name === "Done: " + desc; });')
    lines.append('}')
    lines.append('')

    for name, ent in entities.items():
        displayName = ent.get("displayName", name)
        lines.append(f'// ---- Entity: {displayName} ----')
        lines.append('')
        
        # --- 1. Collect Params using Shared Logic ---
        primary_key, sig_params = _collect_entity_params(name, ent, raw_spec)
        sig_args_str = ", ".join([_sanitize_param(p) for p in sig_params])
        
        ops = ent.get("operations", {})

        # --- 2. Emit Standard Operations ---
        for op_type, op_data in ops.items():
            if not op_type == "verifyExists" and (not op_data or not isinstance(op_data, dict)): continue
            
            fn_name = op_data.get("name", f"{op_type}{name}")
            
            # Use shared generator
            op_lines = _generate_js_operation(
                op_data=op_data,
                fn_name=fn_name,
                sig_params=sig_params,
                primary_key=primary_key,
                spec=spec,
                raw_spec=raw_spec
            )
            lines.extend(op_lines)
            lines.append('')

        # --- 3. Emit Wrappers (Using Shared Generator) ---
        if "add" in ops and isinstance(ops["add"], dict):
            # Wrapper: tryToAddExisting...
            # Re-uses the exact logic of 'add', but changes name and expected codes
            wrapper_lines = _generate_js_operation(
                op_data=ops["add"],
                fn_name=f"tryToAddExisting{name}",
                sig_params=sig_params,
                primary_key=primary_key,
                spec=spec,
                raw_spec=raw_spec,
                method_override="POST", # Ensure it's POST
                codes_override=[400, 409],
                desc_override=f"Verify that we cannot add another {name}..."
            )
            lines.extend(wrapper_lines)
            lines.append('')

        # --- 4. Verify Exists (Manual logic for GET List) ---
        coll_url_template = ""
        if "add" in ops and isinstance(ops["add"], dict): coll_url_template = ops["add"].get("path", "")
        elif "get" in ops and isinstance(ops["get"], dict):
             tmp = ops["get"].get("path", "")
             if "/{" in tmp: coll_url_template = tmp.split("/{")[0]
             else: coll_url_template = tmp

        if coll_url_template:
            js_coll_url = f'"{coll_url_template}"'
            for p in sig_params: js_coll_url = js_coll_url.replace(f'{{{p}}}', f'" + {_sanitize_param(p)} + "')
            js_coll_url = js_coll_url.replace(' + ""', '')

            verify_checks = []
            for p in sig_params:
                sanitized = _sanitize_param(p)
                verify_checks.append(f'if (typeof {sanitized} !== "undefined" && String(items[i].{p}) !== String({sanitized})) match = false;')

            verify_logic = "\n          ".join(verify_checks)

            if primary_key:
                sanitized_pk = _sanitize_param(primary_key)
                js_verify_desc = f'"Verify {name} with {primary_key} " + {sanitized_pk} + " exists"'
                js_verify_not_desc = f'"Verify {name} with {primary_key} " + {sanitized_pk} + " does not exist"'
            else:
                js_verify_desc = f'"Verify {name} exists"'
                js_verify_not_desc = f'"Verify {name} does not exist"'

            lines.append(f'function verify{name}Exists({sig_args_str}) {{')
            lines.append(f'  var url = {js_coll_url};')
            lines.append(f'  var description = {js_verify_desc};')
            lines.append('  svc.get(url, {')
            lines.append('    expectedResponseCodes: [200],')
            lines.append('    parameters: { description: description },')
            lines.append('    callback: function(response) {')
            lines.append('      var items = JSON.parse(response.body);')
            lines.append('      if (Array.isArray(items)) {')
            lines.append('        for (var i = 0; i < items.length; i++) {')
            lines.append('          var match = true;')
            lines.append(f'          {verify_logic}')
            lines.append('          if (match) return pvg.success("Entity exists");')
            lines.append('        }')
            lines.append('      }')
            lines.append(f'      return pvg.fail("Expected {name} to exist but it does not");')
            lines.append('    }')
            lines.append('  });')
            lines.append('}')
            lines.append('')

            lines.append(f'function verify{name}DoesNotExist({sig_args_str}) {{')
            lines.append(f'  var url = {js_coll_url};')
            lines.append(f'  var description = {js_verify_not_desc};')
            lines.append('  svc.get(url, {')
            lines.append('    expectedResponseCodes: [200],')
            lines.append('    parameters: { description: description },')
            lines.append('    callback: function(response) {')
            lines.append('      var items = JSON.parse(response.body);')
            lines.append('      if (Array.isArray(items)) {')
            lines.append('        for (var i = 0; i < items.length; i++) {')
            lines.append('          var match = true;')
            lines.append(f'          {verify_logic}')
            lines.append('          if (match) return pvg.fail("Expected Entity to not exist but it does");')
            lines.append('        }')
            lines.append('      }')
            lines.append(f'      return pvg.success("{name} does not exist");')
            lines.append('    }')
            lines.append('  });')
            lines.append('}')
            lines.append('')

        # --- 5. Delete Non Existing Wrapper ---
        if "delete" in ops and isinstance(ops["delete"], dict):
            op_data = ops["delete"]
            neg_codes = _get_response_codes(op_data.get("path"), "DELETE", spec)
            neg_codes_str = json.dumps(neg_codes)
            
            js_url = f'"{op_data.get("path", "")}"'
            for p in sig_params: js_url = js_url.replace(f'{{{p}}}', f'" + {_sanitize_param(p)} + "')
            js_url = js_url.replace(' + ""', '')

            lines.append(f'function tryToDeleteANonExisting{name}({sig_args_str}) {{')
            lines.append(f'  var url = {js_url};')
            lines.append(f'  var description = "Verify we cannot delete non-existing {name}";')
            lines.append('  svc.delete(url, {')
            lines.append(f'    expectedResponseCodes: {neg_codes_str},')
            lines.append('    parameters: { description: description }')
            lines.append('  });')
            lines.append('}')
            lines.append('')

        # --- 6. Waiters and Matchers ---
        if "add" in ops and isinstance(ops["add"], dict):
            op = ops["add"]
            desc_tmpl = op.get("descriptionTemplate", "")
            if not desc_tmpl: desc_tmpl = f"Add {name}"
            regex, regex_params = _template_to_regex(desc_tmpl)
            matcher_name = f"matchAdded{name}"
            lines.append(f'function {matcher_name}({sig_args_str}) {{')
            js_expected_desc = f'"{desc_tmpl}"'
            for p in sig_params: js_expected_desc = js_expected_desc.replace(f'{{{p}}}', f'" + {_sanitize_param(p)} + "')
            js_expected_desc = js_expected_desc.replace(' + ""', '')
            lines.append(f'  var expectedDesc = {js_expected_desc};')
            lines.append(f'  return matchSuccess(expectedDesc);')
            lines.append('}')
            lines.append('')

            waiter_name_any = f"waitForAny{name}Added"
            lines.append(f'function {waiter_name_any}() {{')
            lines.append(f'  var ev = waitFor(matchesDescriptionRegex(/{regex}/));')
            lines.append(f'  var m = ev.data.parameters.description.match(/{regex}/);')
            lines.append('  var captures = m.slice(1);')
            lines.append(f'  var names = {json.dumps(regex_params)};')
            lines.append('  var obj = {};')
            lines.append('  for (var i = 0; i < names.length; i++) {')
            lines.append('    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;')
            lines.append('  }')
            lines.append('  return obj;')
            lines.append('}')
            lines.append('')

            match_any_fn = f"matchAny{name}Added"
            lines.append(f'function {match_any_fn}() {{')
            lines.append(f'  return bp.EventSet("matchAny{name}Added", function(e) {{')
            lines.append(f'    return e.name.startsWith("Done: ") && e.data && e.data.{primary_key} !== undefined && e.name.indexOf("Create {displayName}") > -1;')
            lines.append(f'  }});')
            lines.append('}')
            lines.append('')

            waiter_name_specific = f"waitFor{name}Added"
            lines.append(f'function {waiter_name_specific}({sig_args_str}) {{')
            lines.append(f'  var expectedDesc = {js_expected_desc};')
            lines.append(f'  waitFor(matchSuccess(expectedDesc));')
            lines.append('}')
            lines.append('')

        if "delete" in ops and isinstance(ops["delete"], dict):
            op = ops["delete"]
            desc_tmpl = op.get("descriptionTemplate", "")
            if not desc_tmpl: desc_tmpl = f"Delete {name}"
            regex, params = _template_to_regex(desc_tmpl)
            
            matcher_name = f"matchDeleted{name}"
            lines.append(f'function {matcher_name}({sig_args_str}) {{')
            js_expected_desc = f'"{desc_tmpl}"'
            for p in sig_params: js_expected_desc = js_expected_desc.replace(f'{{{p}}}', f'" + {_sanitize_param(p)} + "')
            js_expected_desc = js_expected_desc.replace(' + ""', '')
            lines.append(f'  var expectedDesc = {js_expected_desc};')
            lines.append(f'  return bp.EventSet("{matcher_name}", function(e) {{')
            lines.append(f'      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);')
            lines.append(f'  }});')
            lines.append('}')
            lines.append('')
            
            waiter_name = f"waitForAny{name}Deleted"
            lines.append(f'function {waiter_name}() {{')
            lines.append(f'  var ev = waitFor(matchesDescriptionRegex(/{regex}/));')
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
    # FIX: Need raw_spec to look up Schema params
    raw_spec = _get_raw_spec(spec)
    
    lines = []
    lines.append('// Auto-generated HLS stories')
    lines.append('//@provengo summon rest')
    lines.append('')
    lines.append('const bthread = bp.registerBThread;')
    lines.append('')

    base_id = 200 

    # Build key map
    entity_pks_map = {}
    for name, ent in entities.items():
        pk, _ = _collect_entity_params(name, ent, raw_spec)
        if pk: entity_pks_map[name] = [pk]

    for name, ent in entities.items():
        ops = ent.get("operations", {})
        
        add_fn = ops.get("add", {}).get("name") if isinstance(ops.get("add"), dict) else None
        del_fn = ops.get("delete", {}).get("name") if isinstance(ops.get("delete"), dict) else None
        upd_fn = ops.get("update", {}).get("name") if isinstance(ops.get("update"), dict) else None
        get_fn = ops.get("get", {}).get("name") if isinstance(ops.get("get"), dict) else None
        
        try_add_fn = f"tryToAddExisting{name}"
        try_del_fn = f"tryToDeleteANonExisting{name}"
        ver_ex_fn = f"verify{name}Exists"
        ver_ne_fn = f"verify{name}DoesNotExist"
        
        wait_add_fn = f"waitForAny{name}Added"
        match_del_fn = f"matchDeleted{name}"
        match_add_fn = f"matchAdded{name}"
        wait_specific_fn = f"waitFor{name}Added"
        wait_del_any = f"waitForAny{name}Deleted"

        # --- 1. Use Shared Param Collection ---
        primary_key, sig_params = _collect_entity_params(name, ent, raw_spec)

        # Schema Props (for types)
        param_types = {}
        if "add" in ops and isinstance(ops["add"], dict):
            schema, required_fields = _get_operation_schema(ops["add"].get("path"), "POST", raw_spec)
            props = schema.get("properties", {})
            for p in sig_params:
                if p in props: param_types[p] = props[p].get("type", "string")
                else: param_types[p] = _infer_type(p, "string")

        # Deps
        deps = []
        story_pk_map = {}
        for p in sig_params:
            for potential_ent in entities:
                if potential_ent.lower() in p.lower() and "id" in p.lower() and potential_ent != name:
                     target_pk = entity_pks_map.get(potential_ent, [""])[0]
                     if target_pk and (target_pk.lower() in p.lower() or "id" in p.lower()) and potential_ent.lower() in p.lower():
                         deps.append((potential_ent, p))
                         if target_pk: story_pk_map[p] = target_pk

        def get_vars(idx):
            declarations = []
            for p in sig_params:
                is_dep = False
                for d_ent, d_var in deps:
                    if d_var == p: is_dep = True
                sanitized = _sanitize_param(p)
                if not is_dep:
                    ptype = param_types.get(p, "string")
                    if ptype == "object": val = "{}"
                    elif ptype in ["integer", "number"]: val = f'{idx}'
                    elif p == primary_key or p.lower() == 'id' or p.lower().endswith('id'): val = f'{idx}'
                    else: val = f'"{p}_{idx}"'
                    declarations.append(f'  let {sanitized} = {val};')
                else:
                    declarations.append(f'  let {sanitized};')
            return "\n".join(declarations)

        def get_args(idx):
            args = []
            for p in sig_params:
                args.append(_sanitize_param(p))
            return ", ".join(args)

        barrier_code = []
        if deps:
            barrier_code.append('  // Dependency Barrier')
            barrier_code.append('  let deps = {};')
            for target_ent, var_name in deps:
                 barrier_code.append(f'  deps["{_sanitize_param(var_name)}"] = matchAny{target_ent}Added();')
            
            pk_map_str = json.dumps(story_pk_map)
            barrier_code.append(f'  let pkMap = {pk_map_str};')
            barrier_code.append('  let captured = resolveDependencies(deps, pkMap);')
            
            for target_ent, var_name in deps:
                sanitized = _sanitize_param(var_name)
                barrier_code.append(f'  {sanitized} = captured["{sanitized}"];')

        barrier_str = "\n".join(barrier_code)

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
            lines.append(f'  {ver_ex_fn}({get_args(base_id + 6)});')
            lines.append(f'  {try_add_fn}({get_args(base_id + 6)});')
            lines.append(f'  {ver_ex_fn}({get_args(base_id + 6)});')
            lines.append('});')
            lines.append('')
            
            # Monitors
            lines.append(f'// Story: monitor:{name}:add')
            lines.append(f'bthread("monitor:{name}:add", function () {{')
            lines.append('  while (true) {')
            lines.append(f'    let ev = {wait_add_fn}();')
            # Reconstruct args from event object (sorted properties)
            mapped_args = []
            for p in sig_params:
                 sanitized = _sanitize_param(p)
                 mapped_args.append(f'ev.{sanitized}')
            mapped_args_str = ", ".join(mapped_args)
            
            lines.append(f'    block({match_del_fn}({mapped_args_str}), function () {{')
            lines.append(f'      {ver_ex_fn}({mapped_args_str});')
            lines.append(f'    }});')
            lines.append('  }')
            lines.append('});')
            lines.append('')

            lines.append(f'// Story: monitor:{name}:deletion')
            lines.append(f'bthread("monitor:{name}:deletion", function () {{')
            lines.append('  while (true) {')
            lines.append(f'    let ev = {wait_del_any}();')
            mapped_args = []
            for p in sig_params:
                 sanitized = _sanitize_param(p)
                 mapped_args.append(f'ev.{sanitized}')
            mapped_args_str = ", ".join(mapped_args)

            lines.append(f'    block({match_add_fn}({mapped_args_str}), function () {{')
            lines.append(f'      {ver_ne_fn}({mapped_args_str});')
            lines.append(f'    }});')
            lines.append('  }')
            lines.append('});')
            lines.append('')

        elif get_fn:
            # Read only - as requested, kept (though previously asked to remove, user said "keep all other logic")
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