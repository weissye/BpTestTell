import re
import json
from pathlib import Path
from urllib.parse import urlparse
from typing import Dict, Any

# Import shared utils
from new_repo.pipeline.emitter_utils import (
    ensure_dir, sanitize_param, render_body_js, 
    get_raw_spec, get_response_codes, get_operation_schema, 
    infer_type, collect_entity_params
)

def _is_valid_js_identifier(name: str) -> bool:
    if not name or not isinstance(name, str): return False
    if "..." in name or "…" in name or name.strip() == "": return False
    return bool(re.match(r'^[a-zA-Z_$][a-zA-Z0-9_$]*$', name))

def _generate_strict_regex(template: str):
    params = re.findall(r'\{([a-zA-Z0-9_]+)\}', template)
    parts = re.split(r'\{[a-zA-Z0-9_]+\}', template)
    regex_str = "^"
    for i, part in enumerate(parts):
        regex_str += re.escape(part)
        if i < len(params):
            regex_str += "(.*?)"
    regex_str += "$"
    return regex_str, params

def _generate_js_operation(op_data, fn_name, sig_params, primary_key, spec, raw_spec, method_override=None, codes_override=None, desc_override=None):
    lines = []
    method = (method_override or op_data.get("method", "GET")).upper()
    path_tmpl = op_data.get("path", "")
    
    ent_display = fn_name.replace("create", "").replace("update", "").replace("delete", "").replace("get", "").replace("verify", "").replace("Exists", "")
    
    desc_tmpl = desc_override or op_data.get("descriptionTemplate", "")
    if not desc_tmpl:
        desc_tmpl = f"{method} {ent_display}"

    if not desc_tmpl.startswith(f"[{ent_display}]"):
        desc_tmpl = f"[{ent_display}] {desc_tmpl}"

    if primary_key and primary_key in sig_params:
        if f"{{{primary_key}}}" not in desc_tmpl:
             desc_tmpl += f" with {primary_key} {{{primary_key}}}"

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
        use_template = False
        if "bodyTemplate" in op_data and isinstance(op_data["bodyTemplate"], dict) and op_data["bodyTemplate"]:
            if all(_is_valid_js_identifier(k) for k in op_data["bodyTemplate"].keys()):
                use_template = True
        if use_template:
            body_js = render_body_js(op_data["bodyTemplate"])
        else:
            b_lines = ["{"]
            schema, required_fields = get_operation_schema(path_tmpl, method, raw_spec)
            props = schema.get("properties", {})
            candidates = []
            if required_fields: candidates.extend(required_fields)
            if props: candidates.extend(props.keys())
            candidates.extend(op_data.get("params", []))
            if primary_key: candidates.append(primary_key)
            candidates = sorted(list(set(candidates)))
            valid_fields = [f for f in candidates if _is_valid_js_identifier(f)]
            for field in valid_fields:
                val_expr = "null"
                f_type = props.get(field, {}).get("type", "string")
                f_type = infer_type(field, f_type)
                sanitized = sanitize_param(field)
                if field in sig_params:
                    if f_type in ["integer", "number"]: val_expr = f'Number({sanitized})'
                    elif f_type == "boolean": val_expr = f'{sanitized}'
                    elif f_type == "object": val_expr = f'{sanitized}'
                    else: val_expr = f'String({sanitized})'
                elif field == primary_key and primary_key in sig_params:
                     val_expr = f'String({sanitize_param(primary_key)})'
                else:
                    if f_type in ["integer", "number"]: val_expr = "1"
                    elif f_type == "boolean": val_expr = "true"
                    elif f_type == "array": val_expr = "[]"
                    elif f_type == "object": val_expr = "{}"
                    else: val_expr = f'"{field}_dummy"'
                b_lines.append(f'    "{field}": {val_expr},')
            b_lines.append("  }")
            body_js = "\n".join(b_lines)

    if "..." in body_js or body_js.strip().startswith("String("): body_js = "{}" 

    sig_args_str = ", ".join([sanitize_param(p) for p in sig_params])
    lines.append(f'function {fn_name}({sig_args_str}) {{')
    lines.append(f'  var url = {js_url};')
    lines.append(f'  var description = {js_desc};')
    if method in ["POST", "PUT", "PATCH"]: lines.append(f'  var body = {body_js};')
    else: lines.append(f'  var body = undefined;')
    
    if codes_override: codes_str = json.dumps(codes_override)
    else:
        codes_list = get_response_codes(path_tmpl, method, spec)
        codes_str = json.dumps(codes_list)

    if method in ["POST", "PUT", "PATCH"]:
        lines.append(f'  svc.{method.lower()}(url, {{')
        lines.append('    body: JSON.stringify(body),')
        lines.append(f'    expectedResponseCodes: {codes_str},')
        lines.append('    parameters: { description: description,')
        if primary_key and primary_key in sig_params: lines.append(f'      {primary_key}: String({sanitize_param(primary_key)}),')
        for p in sig_params:
            if p != primary_key and (p.endswith("Id") or p.endswith("_id")):
                    lines.append(f'      {p}: String({sanitize_param(p)}),')
        lines.append('    }')
        lines.append('  });')
        if not codes_override:
             if primary_key and primary_key in sig_params:
                 lines.append(f'  bp.sync({{ request: bp.Event("Done: " + description, {{ {primary_key}: String({sanitize_param(primary_key)}) }}) }});')
             else:
                 lines.append(f'  bp.sync({{ request: bp.Event("Done: " + description, {{ id: String(id) }}) }});')
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

    for name, ent in entities.items():
        displayName = ent.get("displayName", name)
        cleanName = name.replace(" ", "") 
        lines.append(f'// ---- Entity: {displayName} ----')
        primary_key, sig_params = collect_entity_params(name, ent, raw_spec)
        sig_params = [p for p in sig_params if _is_valid_js_identifier(p)]
        sig_args_str = ", ".join([sanitize_param(p) for p in sig_params])
        ops = ent.get("operations", {})

        for op_type, op_data in ops.items():
            if not op_type == "verifyExists" and (not op_data or not isinstance(op_data, dict)): continue
            fn_name = op_data.get("name", f"{op_type}{name}")
            op_lines = _generate_js_operation(op_data, fn_name, sig_params, primary_key, spec, raw_spec)
            lines.extend(op_lines)
            lines.append('')

        if "add" in ops and isinstance(ops["add"], dict):
            wrapper_lines = _generate_js_operation(ops["add"], f"tryToAddExisting{name}", sig_params, primary_key, spec, raw_spec, "POST", [400, 409], f"[{cleanName}] Try Add Existing")
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
            for p in sig_params: js_coll_url = js_coll_url.replace(f'{{{p}}}', f'" + {sanitize_param(p)} + "')
            js_coll_url = js_coll_url.replace(' + ""', '')

            verify_logic = ""
            if primary_key and primary_key in sig_params:
                 sanitized_pk = sanitize_param(primary_key)
                 verify_logic = f'if (String(items[i].{primary_key}) === String({sanitized_pk})) match = true;'
                 js_verify_desc = f'"[{cleanName}] Verify {name} with {primary_key} " + {sanitized_pk} + " exists"'
            else:
                 verify_logic = "match = true;"
                 js_verify_desc = f'"[{cleanName}] Verify {name} exists"'

            lines.append(f'function verify{name}Exists({sig_args_str}) {{')
            lines.append(f'  var url = {js_coll_url};')
            lines.append(f'  bp.log.info("DEBUG VERIFIER for {name}: Arguments=" + JSON.stringify(arguments));')
            lines.append(f'  var description = {js_verify_desc};')
            lines.append('  svc.get(url, { expectedResponseCodes: [200], callback: function(response) {')
            lines.append('      var items = JSON.parse(response.body);')
            lines.append('      if (items.results && Array.isArray(items.results)) { items = items.results; }')
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
            
            lines.append(f'function verify{name}DoesNotExist({sig_args_str}) {{')
            lines.append(f'  var url = {js_coll_url};')
            lines.append(f'  var description = "[{cleanName}] Verify {name} does not exist";')
            lines.append('  svc.get(url, { expectedResponseCodes: [200], callback: function(response) {')
            lines.append('      var items = JSON.parse(response.body);')
            lines.append('      if (items.results && Array.isArray(items.results)) { items = items.results; }')
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

        if "delete" in ops and isinstance(ops["delete"], dict):
            op_data = ops["delete"]
            # FIX: Explicitly set 404 for negative tests
            neg_codes_str = "[404]"
            js_url = f'"{op_data.get("path", "")}"'
            for p in sig_params: js_url = js_url.replace(f'{{{p}}}', f'" + {sanitize_param(p)} + "')
            js_url = js_url.replace(' + ""', '')
            lines.append(f'function tryToDeleteANonExisting{name}({sig_args_str}) {{')
            lines.append(f'  var url = {js_url};')
            lines.append(f'  var description = "[{cleanName}] Verify we cannot delete non-existing {name}";')
            lines.append(f'  svc.delete(url, {{ expectedResponseCodes: {neg_codes_str}, parameters: {{ description: description }} }});')
            lines.append('}')
            lines.append('')

        if "add" in ops and isinstance(ops["add"], dict):
            op = ops["add"]
            desc_tmpl = op.get("descriptionTemplate", "")
            if not desc_tmpl: desc_tmpl = f"Create {displayName}"
            if not desc_tmpl.startswith(f"[{cleanName}]"): desc_tmpl = f"[{cleanName}] {desc_tmpl}"
            if primary_key and primary_key in sig_params:
                if f"{{{primary_key}}}" not in desc_tmpl: desc_tmpl += f" with {primary_key} {{{primary_key}}}"
            
            regex, regex_params = _generate_strict_regex(desc_tmpl)
            
            matcher_name = f"matchAdded{name}"
            lines.append(f'function {matcher_name}({sig_args_str}) {{')
            js_expected_desc = f'"{desc_tmpl}"'
            for p in sig_params: js_expected_desc = js_expected_desc.replace(f'{{{p}}}', f'" + {sanitize_param(p)} + "')
            js_expected_desc = js_expected_desc.replace(' + ""', '')
            lines.append(f'  return matchSuccess({js_expected_desc});')
            lines.append('}')
            lines.append('')

            lines.append(f'function waitForAny{name}Added() {{')
            lines.append(f'  var ev = waitFor(matchesDescriptionRegex(/{regex}/));')
            lines.append(f'  if (ev && ev.data && ev.data.parameters && ev.data.parameters.description) {{ bp.log.info("DEBUG MATCHER for {name}: Matched event: " + ev.data.parameters.description); }}')
            lines.append(f'  var m = ev.data.parameters.description.match(/{regex}/);')
            lines.append('  var captures = m.slice(1);')
            lines.append(f'  var names = {json.dumps(regex_params)};')
            lines.append('  var capturedMap = {};')
            lines.append('  for (var i = 0; i < names.length; i++) { capturedMap[names[i]] = (i < captures.length) ? captures[i] : undefined; }')
            lines.append('  var obj = {};')
            for param in sig_params: lines.append(f'  obj["{param}"] = capturedMap["{param}"];')
            lines.append('  return obj;')
            lines.append('}')
            lines.append('')

            lines.append(f'function matchAny{name}Added() {{ return bp.EventSet("matchAny{name}Added", function(e) {{ return e.name.startsWith("Done: ") && e.name.indexOf("[{cleanName}]") > -1; }}); }}')
            lines.append(f'function waitFor{name}Added({sig_args_str}) {{ var expectedDesc = {js_expected_desc}; waitFor(matchSuccess(expectedDesc)); }}')
            lines.append('')

        if "delete" in ops and isinstance(ops["delete"], dict):
            op = ops["delete"]
            desc_tmpl = op.get("descriptionTemplate", "")
            if not desc_tmpl: desc_tmpl = f"Delete {displayName}"
            if not desc_tmpl.startswith(f"[{cleanName}]"): desc_tmpl = f"[{cleanName}] {desc_tmpl}"
            if primary_key and primary_key in sig_params:
                if f"{{{primary_key}}}" not in desc_tmpl: desc_tmpl += f" with {primary_key} {{{primary_key}}}"
            
            regex, params = _generate_strict_regex(desc_tmpl)

            matcher_name = f"matchDeleted{name}"
            lines.append(f'function {matcher_name}({sig_args_str}) {{')
            js_expected_desc = f'"{desc_tmpl}"'
            for p in sig_params: js_expected_desc = js_expected_desc.replace(f'{{{p}}}', f'" + {sanitize_param(p)} + "')
            js_expected_desc = js_expected_desc.replace(' + ""', '')
            lines.append(f'  return bp.EventSet("matchDeleted{name}", function(e) {{ return !!(e.data && e.data.parameters && e.data.parameters.description === {js_expected_desc}); }});')
            lines.append('}')
            lines.append('')
            
            lines.append(f'function waitForAny{name}Deleted() {{')
            lines.append(f'  var ev = waitFor(matchesDescriptionRegex(/{regex}/));')
            lines.append(f'  var m = ev.data.parameters.description.match(/{regex}/);')
            lines.append('  var captures = m.slice(1);')
            lines.append(f'  var names = {json.dumps(params)};')
            lines.append('  var capturedMap = {};')
            lines.append('  for (var i = 0; i < names.length; i++) { capturedMap[names[i]] = (i < captures.length) ? captures[i] : undefined; }')
            lines.append('  var obj = {};')
            for param in sig_params: lines.append(f'  obj["{param}"] = capturedMap["{param}"];')
            lines.append('  return obj;')
            lines.append('}')
            lines.append('')

    ensure_dir(out_dir)
    (out_dir / "interfaces.readable.js").write_text("\n".join(lines), encoding="utf-8")