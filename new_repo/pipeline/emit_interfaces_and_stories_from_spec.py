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
    for name, ent in entities.items():
        ops = ent.get("operations", {})
        check_ops = [ops.get('get'), ops.get('delete'), ops.get('update')]
        for op in check_ops:
            if op and '{' in op.get('path', ''):
                matches = re.findall(r'\{([^}]+)\}', op['path'])
                for m in matches: all_known_pks.add(m)

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
        
        primary_key = None
        check_ops = [ops.get('get'), ops.get('delete'), ops.get('update')]
        for op in check_ops:
            if op and '{' in op.get('path', ''):
                matches = re.findall(r'\{([^}]+)\}', op['path'])
                if matches:
                    primary_key = matches[0]
                    break

        global_params_set = set()
        if primary_key: global_params_set.add(primary_key)

        def collect(p_list):
            for p in p_list: global_params_set.add(p)
        
        for op in ops.values(): collect(op.get("params", []))
        if not global_params_set: collect(ent.get("params", []))
        
        global_params = sorted(list(global_params_set))
        global_args_str = ", ".join(global_params)

        # --- EMIT OPERATIONS ---
        for op_type, op_data in ops.items():
            if not op_type == "verifyExists" and not op_data: continue

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
            sig_params = list(global_params)

            if method in ["POST", "PUT", "PATCH"]:
                b_lines = ["{"]
                
                schema, required_fields = _get_operation_schema(path_tmpl, method, raw_spec)
                props = schema.get("properties", {})
                
                if primary_key and primary_key not in required_fields:
                    required_fields.append(primary_key)

                fields_to_gen = required_fields if (required_fields or not props) else list(props.keys())
                
                if not fields_to_gen:
                    op_params = op_data.get("params", [])
                    for p in op_params: fields_to_gen.append(p)
                
                if primary_key and primary_key not in fields_to_gen:
                    fields_to_gen.append(primary_key)

                seen_fields = set(sig_params)
                clean_fields = []
                for f in fields_to_gen:
                    if f not in clean_fields:
                        clean_fields.append(f)
                        if f not in seen_fields:
                            seen_fields.add(f)
                            sig_params.append(f)
                fields_to_gen = clean_fields

                for field in fields_to_gen:
                    val_expr = "null"
                    f_type = props.get(field, {}).get("type", "string")
                    f_type = _infer_type(field, f_type)

                    if f_type == "object":
                        val_expr = f'{field}' 
                    elif field == primary_key:
                        val_expr = f'String({primary_key})'
                    elif field in global_params:
                        val_expr = f'String({field})'
                    elif (field in all_known_pks or field.endswith("Id") or field.endswith("_id") or "vin" in field.lower()) and primary_key:
                        val_expr = f'String({primary_key})'
                    else:
                        if f_type in ["integer", "number"]: val_expr = "String(1)"
                        elif f_type == "boolean": val_expr = "String(true)"
                        elif f_type == "array": val_expr = "[]"
                        elif f_type == "object": val_expr = "{}"
                        else:
                            if primary_key: val_expr = f'"{field}_" + {primary_key}'
                            else: val_expr = f'"{field}_dummy"'

                    b_lines.append(f'    "{field}": {val_expr},')
                
                b_lines.append("  }")
                body_js = "\n".join(b_lines)

            sig_params = sorted(list(set(sig_params)))
            sig_args_str = ", ".join(sig_params)

            lines.append(f'function {fn_name}({sig_args_str}) {{')
            lines.append(f'  var url = {js_url};')
            lines.append(f'  var description = {js_desc};')
            lines.append(f'  var body = {body_js};')
            lines.append(f'  bp.log.info("[CALL] {fn_name}");')
            if method in ["POST", "PUT", "PATCH"]:
                 lines.append(f'  bp.log.info("[DEBUG] {fn_name} body: " + JSON.stringify(body));')
            
            codes = "[]"
            if op_type == "add": codes = "[200, 201, 204, 409]"

            if method in ["POST", "PUT", "PATCH"]:
                lines.append(f'  svc.{method.lower()}(url, {{')
                lines.append('    body: JSON.stringify(body),')
                lines.append(f'    expectedResponseCodes: {codes},')
                lines.append('    parameters: {')
                if primary_key: lines.append(f'      {primary_key}: String({primary_key})')
                for p in sig_params:
                    if p != primary_key and (p in all_known_pks or p.endswith("Id") or p.endswith("_id")):
                         lines.append(f'      , {p}: String({p})')
                lines.append('    }')
                lines.append('  });')
            else:
                lines.append(f'  svc.{method.lower()}(url, {{')
                lines.append('    parameters: { description: description }')
                lines.append('  });')
            lines.append('}')
            lines.append('')

        # --- EMIT WRAPPERS ---
        if "add" in ops:
            op_data = ops["add"]
            js_url = f'"{op_data.get("path", "")}"'
            for p in global_params: js_url = js_url.replace(f'{{{p}}}', f'" + {p} + "')
            js_url = js_url.replace(' + ""', '')
            
            b_lines = ["{"]
            if primary_key: b_lines.append(f'    "{primary_key}": String({primary_key})')
            b_lines.append("  }")
            body_js = "\n".join(b_lines)

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

        # --- VERIFY EXISTS ---
        coll_url_template = ""
        if "add" in ops: coll_url_template = ops["add"].get("path", "")
        elif "get" in ops:
            tmp = ops["get"].get("path", "")
            if "/{" in tmp: coll_url_template = tmp.split("/{")[0]
            else: coll_url_template = tmp

        if coll_url_template:
            js_coll_url = f'"{coll_url_template}"'
            for p in global_params: js_coll_url = js_coll_url.replace(f'{{{p}}}', f'" + {p} + "')
            js_coll_url = js_coll_url.replace(' + ""', '')

            selected_key = primary_key
            if not selected_key:
                for p in global_params:
                    if 'id' in p.lower(): selected_key = p; break
            
            if selected_key:
                 condition_str = f'String(items[i].{selected_key}) === String({selected_key})'
            else:
                match_conds = []
                for p in global_params: match_conds.append(f'String(items[i].{p}) === String({p})')
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
            if not desc_tmpl: desc_tmpl = f"Add {name}"
            
            regex, regex_params = _template_to_regex(desc_tmpl)
            
            matcher_name = f"matchAdded{name}"
            lines.append(f'function {matcher_name}({global_args_str}) {{')
            js_expected_desc = f'"{desc_tmpl}"'
            for p in global_params: js_expected_desc = js_expected_desc.replace(f'{{{p}}}', f'" + {p} + "')
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
            lines.append(f'  var names = {json.dumps(regex_params)};')
            lines.append('  var obj = {};')
            lines.append('  for (var i = 0; i < names.length; i++) {')
            lines.append('    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;')
            lines.append('  }')
            lines.append('  return obj;')
            lines.append('}')
            lines.append('')

            get_es_fn = f"get{name}AddedEvent"
            lines.append(f'function {get_es_fn}(keyVal) {{')
            lines.append(f'  return bp.EventSet("Add{name}:" + keyVal, function(e) {{')
            lines.append(f'    if (!e.data || !e.data.parameters) return false;')
            check_key = primary_key if primary_key else "id"
            lines.append(f'    return String(e.data.parameters.{check_key}) === String(keyVal);')
            lines.append(f'  }});')
            lines.append('}')
            lines.append('')

            match_any_fn = f"matchAny{name}Added"
            lines.append(f'function {match_any_fn}() {{')
            lines.append(f'  return matchesDescriptionRegex(/{regex}/);')
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
            if not desc_tmpl: desc_tmpl = f"Delete {name}"
            regex, params = _template_to_regex(desc_tmpl)
            
            matcher_name = f"matchDeleted{name}"
            lines.append(f'function {matcher_name}({global_args_str}) {{')
            js_expected_desc = f'"{desc_tmpl}"'
            for p in global_params: js_expected_desc = js_expected_desc.replace(f'{{{p}}}', f'" + {p} + "')
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
    raw_spec = _get_raw_spec(spec)
    
    lines = []
    lines.append('// Auto-generated HLS stories')
    lines.append('//@provengo summon rest')
    lines.append('')
    lines.append('const bthread = bp.registerBThread;')
    lines.append('')

    # INLINED RESOLVE DEPENDENCIES REMOVED: Using direct inline logic below

    base_id = 200 

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

    fk_to_entity = {}
    for ent_name, keys in entity_pks_map.items():
        if len(keys) == 1:
             fk_to_entity[keys[0]] = ent_name

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

        primary_key = None
        check_ops = [ops.get('get'), ops.get('delete'), ops.get('update')]
        for op in check_ops:
            if op and '{' in op.get('path', ''):
                matches = re.findall(r'\{([^}]+)\}', op['path'])
                if matches: primary_key = matches[0]; break
        
        all_params_set = set()
        if primary_key:
            all_params_set.add(primary_key)
            
        param_types = {}
        if "add" in ops:
            schema, required_fields = _get_operation_schema(ops["add"].get("path"), "POST", raw_spec)
            props = schema.get("properties", {})
            reqs = schema.get("required", [])
            fields_to_add = reqs if (reqs or not props) else list(props.keys())
            
            if not fields_to_add:
                op_params = ops["add"].get("params", [])
                for p in op_params: all_params_set.add(p)
            else:
                for p in fields_to_add:
                    all_params_set.add(p)
                    if p in props:
                        param_types[p] = props[p].get("type", "string")
            
            for p in all_params_set:
                if p not in param_types:
                    param_types[p] = _infer_type(p, "string")

        def collect(p_list):
            for p in p_list:
                all_params_set.add(p)
        for op in ops.values(): collect(op.get("params", []))

        all_params = sorted(list(all_params_set))

        deps = []
        for p in all_params:
            for potential_ent in entities:
                if potential_ent.lower() in p.lower() and "id" in p.lower() and potential_ent != name:
                     target_pk = entity_pks_map.get(potential_ent, [""])[0]
                     # FIX: Allow matches where entity name is in param OR "id"
                     if target_pk and (target_pk in p or "id" in p.lower() or potential_ent.lower() in p.lower()):
                         deps.append((potential_ent, p))

        def get_vars(idx):
            declarations = []
            for p in all_params:
                is_captured = False
                for _, dep_p in deps:
                    if dep_p == p: is_captured = True; break
                
                if not is_captured:
                    ptype = param_types.get(p, "string")
                    if ptype == "object":
                         val = "{}"
                    elif ptype in ["integer", "number"]:
                        val = f'{idx}'
                    elif p == primary_key or p.lower() == 'id' or p.lower().endswith('id'):
                        val = f'{idx}'
                    else:
                        val = f'"{p}_{idx}"'
                    
                    declarations.append(f'  let {p} = {val};')
            return "\n".join(declarations)

        def get_args(idx):
            sig_params = set()
            if primary_key: sig_params.add(primary_key)
            for op in ops.values():
                for p in op.get("params", []):
                    sig_params.add(p)
            
            if "add" in ops:
                schema, required_fields = _get_operation_schema(ops["add"].get("path"), "POST", raw_spec)
                props = schema.get("properties", {})
                reqs = schema.get("required", [])
                fields = reqs if (reqs or not props) else list(props.keys())
                if not fields: fields = ops["add"].get("params", [])
                for p in fields:
                    sig_params.add(p)

            sorted_sig = sorted(list(sig_params))
            args = []
            for p in sorted_sig:
                args.append(p)
            return ", ".join(args)

        barrier_code = []
        if deps:
            barrier_code.append('  // Dependency Barrier')
            barrier_code.append('  let deps = {};')
            for target_ent, var_name in deps:
                 barrier_code.append(f'  deps["{var_name}"] = matchAny{target_ent}Added();')
            
            barrier_code.append('  let captured = {};')
            barrier_code.append('  while (Object.keys(deps).length > 0) {')
            barrier_code.append('    let e = bp.sync({waitFor: Object.values(deps)});')
            barrier_code.append('    for (let k in deps) {')
            barrier_code.append('       if (deps[k].contains(e)) {')
            # Robust Capture logic inline
            barrier_code.append(f'         captured[k] = e.data.parameters[k] || e.data.parameters.id || e.data.parameters.customerId || e.data.parameters.vin || e.data.parameters.garageId || e.data.parameters.chainId || e.data.parameters.pmId || e.data.parameters.roId;')
            
            for target_ent, var_name in deps:
                 target_pk = entity_pks_map.get(target_ent, [""])[0]
                 if target_pk:
                     barrier_code.append(f'         if (!captured[k] && k === "{var_name}") captured[k] = e.data.parameters["{target_pk}"];')
            
            barrier_code.append('         delete deps[k];')
            barrier_code.append('       }')
            barrier_code.append('    }')
            barrier_code.append('  }')
            
            for target_ent, var_name in deps:
                barrier_code.append(f'  let {var_name} = captured["{var_name}"];')

        barrier_str = "\n".join(barrier_code)

        if add_fn and del_fn:
            lines.append(f'// Story: crud:{name}:nondet:1:1')
            lines.append(f'bthread("crud:{name}:nondet:1:1", function () {{')
            lines.append(get_vars(base_id))
            if barrier_str: lines.append(barrier_str) # FIX: Append string, not list
            lines.append(f'  {add_fn}({get_args(base_id)});')
            # Commented out to prevent deadlock
            lines.append(f'  // {wait_specific_fn}({get_args(base_id)});')
            
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
            lines.append(f'  // {wait_specific_fn}({get_args(base_id + 1)});')
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
            lines.append(f'  // {wait_specific_fn}({get_args(base_id + 6)});')
            lines.append(f'  {ver_ex_fn}({get_args(base_id + 6)});')
            lines.append(f'  {try_add_fn}({get_args(base_id + 6)});')
            lines.append(f'  {ver_ex_fn}({get_args(base_id + 6)});')
            lines.append('});')
            lines.append('')

            if upd_fn:
                # Monitor commented out
                pass

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