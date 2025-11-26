from pathlib import Path
import json
import re
from typing import Dict, Any, List

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
            return template.strip("{}")
        return f'"{template}"'
    return str(template)

# ======================== INTERFACES (LLE) ========================

def _emit_interfaces(spec: Dict[str, Any], out_dir: Path):
    base_url = spec.get("base_url", "http://localhost:8080")
    entities = spec.get("entities", {})
    lines = []
    
    lines.append('//@provengo summon rest')
    lines.append('// === Auto-generated interfaces.readable.js ===')
    lines.append('')
    lines.append("var host = (typeof host !== 'undefined') ? host : 'localhost';")
    lines.append("var port = (typeof port !== 'undefined') ? port : 8080;")
    lines.append('')
    lines.append(f'const svc = new RESTSession("{base_url}", "provengo-client", {{')
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
        
        # --- UNION PARAMS (Global for entity) ---
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

        # 1. Standard CRUD Functions
        for op_type, op_data in ops.items():
            if not op_data or op_type == "verifyExists": continue

            fn_name = op_data.get("name", f"{op_type}{name}")
            method = op_data.get("method", "GET")
            path_tmpl = op_data.get("path", "")
            desc_tmpl = op_data.get("descriptionTemplate", "")
            op_params = op_data.get("params", [])

            js_url = f'"{path_tmpl}"'
            js_desc = f'"{desc_tmpl}"'
            for p in op_params:
                js_url = js_url.replace(f'{{{p}}}', f'" + {p} + "')
                js_desc = js_desc.replace(f'{{{p}}}', f'" + {p} + "')
            
            js_url = js_url.replace(' + ""', '')
            js_desc = js_desc.replace(' + ""', '')

            body_js = "undefined"
            if "bodyTemplate" in op_data:
                body_js = _render_body_js(op_data["bodyTemplate"])

            lines.append(f'function {fn_name}({", ".join(op_params)}) {{')
            lines.append(f'  var url = {js_url};')
            lines.append(f'  var description = {js_desc};')
            lines.append(f'  var body = {body_js};')
            lines.append('  return svc.request({')
            lines.append(f'    method: "{method}",')
            lines.append('    url: url,')
            lines.append('    parameters: { description: description },')
            lines.append('    body: body')
            lines.append('  });')
            lines.append('}')
            lines.append('')

        # 2. Wrappers using Union Params
        # This fixes the "Missing Parameter" issue in stories by allowing stories to pass ALL vars
        if "add" in ops:
            add_fn = ops["add"].get("name")
            add_p = ops["add"].get("params", [])
            lines.append(f'function tryToAddExisting{name}({global_args_str}) {{')
            lines.append(f'  return {add_fn}({", ".join(add_p)});')
            lines.append('}')
            lines.append('')

        if "get" in ops:
            get_fn = ops["get"].get("name")
            get_p = ops["get"].get("params", [])
            lines.append(f'function verify{name}Exists({global_args_str}) {{')
            lines.append(f'  return {get_fn}({", ".join(get_p)});')
            lines.append('}')
            lines.append('')
            lines.append(f'function verify{name}DoesNotExist({global_args_str}) {{')
            lines.append(f'  return {get_fn}({", ".join(get_p)});')
            lines.append('}')
            lines.append('')

        if "delete" in ops:
            del_fn = ops["delete"].get("name")
            del_p = ops["delete"].get("params", [])
            lines.append(f'function tryToDeleteANonExisting{name}({global_args_str}) {{')
            lines.append(f'  return {del_fn}({", ".join(del_p)});')
            lines.append('}')
            lines.append('')

        # 3. Matchers
        wait_patterns = ent.get("waitForPatterns", {})
        def emit_wait_logic(key, regex):
            matcher_name = f"match{key.capitalize()}{name}"
            lines.append(f'function {matcher_name}({global_args_str}) {{')
            comp_val = global_params[0] if global_params else '""'
            lines.append(f'  return bp.EventSet("{matcher_name}", function(e) {{')
            lines.append(f'      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;')
            lines.append(f'      return e.data.parameters.description.includes({comp_val});')
            lines.append(f'  }});')
            lines.append('}')
            lines.append('')

            waiter_name = f"waitForAny{name}{key.capitalize()}"
            lines.append(f'function {waiter_name}() {{')
            lines.append(f'  var ev = bp.sync({{waitFor: matchesDescriptionRegex(/{regex}/)}});')
            lines.append(f'  var m = ev.data.parameters.description.match(/{regex}/);')
            lines.append('  var captures = m.slice(1);')
            lines.append(f'  var names = {json.dumps(global_params)};')
            lines.append('  var obj = {};')
            lines.append('  for (var i = 0; i < names.length; i++) {')
            lines.append('    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;')
            lines.append('  }')
            lines.append('  return obj;')
            lines.append('}')
            lines.append('')

        if "added" in wait_patterns: emit_wait_logic("added", wait_patterns["added"]["descriptionRegex"])
        if "deleted" in wait_patterns: emit_wait_logic("deleted", wait_patterns["deleted"]["descriptionRegex"])

    _ensure_dir(out_dir)
    (out_dir / "interfaces.readable.js").write_text("\n".join(lines), encoding="utf-8")


# ======================== STORIES (HLS) ========================

def _emit_stories(spec: Dict[str, Any], out_dir: Path):
    entities = spec.get("entities", {})
    lines = []
    
    lines.append('// Auto-generated HLS stories')
    lines.append('//@provengo summon rest')
    lines.append('')
    lines.append('const bthread = bp.registerBThread;')
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

        # --- UNION PARAMS ---
        all_params = []
        seen = set()
        def collect(p_list):
            for p in p_list:
                if p not in seen:
                    seen.add(p)
                    all_params.append(p)
        
        for op in ops.values(): collect(op.get("params", []))
        if not all_params: collect(ent.get("params", []))

        # --- Identity Detection (Fixing Argument Shift) ---
        # We need to find the "ID" parameter to pass as the first arg to Update/Delete/Get
        # if those functions expect (id, ...).
        # HOWEVER, our new interface wrappers accept (all_params).
        # So we can simply pass (get_args(idx)) to ALL functions!
        # This is the cleanest fix: The Interface wrapper `verifyExists(a,b,c)`
        # will pick out `a` (if that's the ID) and pass it to the real `get(a)`.
        
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
            # 1:1 Full Cycle
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

            # 1:2 Update first
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

            # Negative
            lines.append(f'// Story: crud:{name}:nondet:negative:dup-add')
            lines.append(f'bthread("crud:{name}:nondet:negative:dup-add", function () {{')
            lines.append(get_vars(base_id + 6))
            lines.append(f'  {add_fn}({get_args(base_id + 6)});')
            lines.append(f'  {ver_ex_fn}({get_args(base_id + 6)});')
            lines.append(f'  {try_add_fn}({get_args(base_id + 6)});')
            lines.append(f'  {ver_ex_fn}({get_args(base_id + 6)});')
            lines.append('});')
            lines.append('')

            # Passive
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

            # Monitor
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