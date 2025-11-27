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
    """
    Converts "Add user {id}" -> Regex "^Add user (.+)$" 
    Returns (regex_string, list_of_param_names)
    """
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
    
    # Create session using standard string concatenation
    lines.append('const svc = new RESTSession(protocol + "://" + host + ":" + port, "provengo-client", {')
    lines.append('  headers: { "Content-Type": "application/json" },')
    lines.append('});')
    lines.append('')
    
    lines.append('function matchesDescriptionRegex(re) {')
    lines.append('  return bp.EventSet("Match description", function (e) {')
    lines.append('    return e && e.data && e.data.parameters && typeof e.data.parameters.description === "string"')
    lines.append('           && re.test(e.data.parameters.description);')
    lines.append('  });')
    lines.append('}')
    lines.append('')

    for name, ent in entities.items():
        displayName = ent.get("displayName", name)
        lines.append(f'// ---- Entity: {displayName} ----')
        lines.append('')
        
        ops = ent.get("operations", {})
        
        # Calculate Union of Params
        global_params = []
        seen = set()
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
            
            # Robust Description Template
            desc_tmpl = op_data.get("descriptionTemplate", "")
            if not desc_tmpl:
                desc_tmpl = f"{op_type.capitalize()} {name}"
                if global_params:
                    desc_tmpl += " with " + " ".join([f"{p} {{{p}}}" for p in global_params])

            # JS string construction for URL and Description
            js_url = f'"{path_tmpl}"'
            js_desc = f'"{desc_tmpl}"'
            for p in global_params:
                js_url = js_url.replace(f'{{{p}}}', f'" + {p} + "')
                js_desc = js_desc.replace(f'{{{p}}}', f'" + {p} + "')
            
            js_url = js_url.replace(' + ""', '')
            js_desc = js_desc.replace(' + ""', '')

            # Body logic
            body_js = "undefined"
            if "bodyTemplate" in op_data and op_data["bodyTemplate"]:
                body_js = _render_body_js(op_data["bodyTemplate"])
            else:
                if method in ["POST", "PUT", "PATCH"]:
                    b_lines = ["{"]
                    for p in global_params:
                        b_lines.append(f'    "{p}": {p},')
                    b_lines.append("  }")
                    body_js = "\n".join(b_lines)

            lines.append(f'function {fn_name}({global_args_str}) {{')
            lines.append(f'  var url = {js_url};')
            lines.append(f'  var description = {js_desc};')
            lines.append(f'  var body = {body_js};')
            
            lines.append(f'  bp.log.info("[CALL] {fn_name}");')
            
            if method in ["POST", "PUT", "PATCH"]:
                lines.append(f'  svc.{method.lower()}(url, {{')
                lines.append('    body: JSON.stringify(body),')
                lines.append('    parameters: { description: description }')
                lines.append('  });')
            else:
                lines.append(f'  svc.{method.lower()}(url, {{')
                lines.append('    parameters: { description: description }')
                lines.append('  });')
                
            lines.append('}')
            lines.append('')

        # --- EMIT WRAPPERS ---
        if "add" in ops:
            add_fn = ops["add"].get("name")
            lines.append(f'function tryToAddExisting{name}({global_args_str}) {{')
            lines.append(f'  {add_fn}({global_args_str});')
            lines.append('}')
            lines.append('')

        if "get" in ops:
            get_fn = ops["get"].get("name")
            lines.append(f'function verify{name}Exists({global_args_str}) {{')
            lines.append(f'  {get_fn}({global_args_str});')
            lines.append('}')
            lines.append('')
            lines.append(f'function verify{name}DoesNotExist({global_args_str}) {{')
            lines.append(f'  {get_fn}({global_args_str});')
            lines.append('}')
            lines.append('')

        if "delete" in ops:
            del_fn = ops["delete"].get("name")
            lines.append(f'function tryToDeleteANonExisting{name}({global_args_str}) {{')
            lines.append(f'  {del_fn}({global_args_str});')
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
            lines.append(f'      return e.data && e.data.parameters && e.data.parameters.description === expectedDesc;')
            lines.append(f'  }});')
            lines.append('}')
            lines.append('')

            waiter_name = f"waitForAny{name}Added"
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
            lines.append(f'      return e.data && e.data.parameters && e.data.parameters.description === expectedDesc;')
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
    lines.append('')

    base_id = 200 

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
        match_del_fn = f"matchDeleted{name}"

        all_params = []
        seen = set()
        def collect(p_list):
            for p in p_list:
                if p not in seen:
                    seen.add(p)
                    all_params.append(p)  # FIX: Use all_params, not global_params
        
        for op in ops.values(): collect(op.get("params", []))
        if not all_params: collect(ent.get("params", []))

        def get_vars(idx):
            declarations = []
            for p in all_params:
                if "id" in p.lower() and "user" not in p.lower() and "owner" not in p.lower():
                     declarations.append(f'  let {p} = {idx};')
                else:
                     declarations.append(f'  let {p} = "{p}_{idx}";')
            return "\n".join(declarations)

        def get_args(idx):
            args = []
            for p in all_params:
                if "id" in p.lower() and "user" not in p.lower() and "owner" not in p.lower():
                    args.append(f"{idx}")
                else:
                    args.append(f'"{p}_{idx}"')
            return ", ".join(args)

        # STORIES GENERATION
        if add_fn and del_fn:
            lines.append(f'// Story: crud:{name}:nondet:1:1')
            lines.append(f'bthread("crud:{name}:nondet:1:1", function () {{')
            lines.append(get_vars(base_id))
            lines.append(f'  {add_fn}({get_args(base_id)});')
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
            lines.append(f'  {add_fn}({get_args(base_id + 6)});')
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