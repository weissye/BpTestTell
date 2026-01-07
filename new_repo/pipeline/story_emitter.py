import json
import re
from pathlib import Path
from typing import Dict, Any, List
from new_repo.pipeline.emitter_utils import (
    ensure_dir, sanitize_param, get_raw_spec, 
    collect_entity_params
)

def _get_js_resolve_dependencies_fn():
    lines = []
    lines.append('function resolveDependencies(deps, pkMap) {')
    lines.append('  let captured = {};')
    lines.append('  while (Object.keys(deps).length > 0) {')
    lines.append('    let missingEventSets = Object.values(deps);')
    lines.append('    let e = bp.sync({waitFor: missingEventSets});')
    lines.append('    bp.log.info("DEBUG: [resolveDependencies] Caught event: " + e.name);')
    lines.append('    if (e.data) bp.log.info("DEBUG: [resolveDependencies] Data: " + JSON.stringify(e.data));')
    lines.append('    for (let k in deps) {')
    lines.append('      if (deps[k].contains(e)) {')
    lines.append('        let val = (e.data && e.data[k]) || (e.data && e.data.parameters && (e.data.parameters[k] || e.data.parameters.id));')
    lines.append('        if (!val && pkMap && pkMap[k]) {')
    lines.append('            let mappedKey = pkMap[k];')
    lines.append('            val = (e.data && e.data[mappedKey]) || (e.data.parameters && e.data.parameters[mappedKey]);')
    lines.append('        }')
    lines.append('        if (val) {')
    lines.append('            captured[k] = val;')
    lines.append('            bp.log.info("DEBUG: [resolveDependencies] Resolved " + k + " -> " + val);')
    lines.append('            delete deps[k];')
    lines.append('        }')
    lines.append('      }')
    lines.append('    }')
    lines.append('  }')
    lines.append('  return captured;')
    lines.append('}')
    return lines

def _get_field_constraints(ent_name, field_name, raw_spec):
    def resolve(ref):
        parts = ref.split('/')
        curr = raw_spec
        for p in parts:
            if p == '#': continue
            curr = curr.get(p, {})
        return curr

    def find_in_schema(schema):
        if '$ref' in schema: return find_in_schema(resolve(schema['$ref']))
        if 'allOf' in schema:
            for sub in schema['allOf']:
                res = find_in_schema(sub)
                if res: return res
        props = schema.get('properties', {})
        if field_name in props:
            f_schema = props[field_name]
            if '$ref' in f_schema: f_schema = resolve(f_schema['$ref'])
            return f_schema
        return None

    schemas = raw_spec.get('components', {}).get('schemas', {})
    ent_schema = schemas.get(ent_name) or schemas.get(ent_name.rstrip('s')) or schemas.get(ent_name + 'Request')
    
    if ent_schema:
        field_def = find_in_schema(ent_schema)
        if field_def:
            return {
                'example': field_def.get('example'),
                'pattern': field_def.get('pattern'),
                'default': field_def.get('default'),
            }
    return {}

def _generate_entity_vars(ent_name, entities, raw_spec, suffix, base_id, link_map={}, param_types={}, param_formats={}):
    pk, params = collect_entity_params(ent_name, entities[ent_name], raw_spec)
    lines_code = []
    args = []
    pk_var_name = "null"
    param_var_map = {} 

    for p in params:
        safe_p = sanitize_param(p)
        var_name = f"{safe_p}_{suffix}"
        p_type = param_types.get(p, "string").lower()
        p_format = param_formats.get(p, "").lower()
        param_var_map[p] = var_name
        if p == pk: pk_var_name = var_name

        if p in link_map:
            lines_code.append(f'  let {var_name} = {link_map[p]};')
        
        elif p_type in ["integer", "number"]:
             lines_code.append(f'  let {var_name} = Math.floor(Math.random() * 1000);')
        elif p_type == "boolean":
             lines_code.append(f'  let {var_name} = true;')
        elif p_type == "array":
             lines_code.append(f'  let {var_name} = [];')
        elif p_type == "object":
             lines_code.append(f'  let {var_name} = {{}};')
        elif p_type == "string":
            constraints = _get_field_constraints(ent_name, p, raw_spec)
            example = constraints.get('example')
            pattern = constraints.get('pattern')
            default_val = constraints.get('default')
            
            val = None
            if example is not None: val = f'"{example}"'
            elif default_val is not None: val = f'"{default_val}"'
            elif pattern:
                if '^[0-9a-f]{6}$' in pattern: val = '"000000"'
                elif 'A-Fa-f' in pattern and ':' in pattern: val = '"AA:BB:CC:DD:EE:FF"'
                elif '0-9' in pattern and '\.' in pattern and '/' in pattern: val = '"10.0.0.1/24"'
                else: val = f'"{p}_valid_val"' 
            
            elif "email" in p_format: val = f'"u{suffix}_" + Math.floor(Math.random()*1000) + "@test.com"'
            elif "date" in p_format: val = f'"2023-01-01T12:00:00Z"'
            elif "phone" in p_format: val = f'"+1555" + Math.floor(Math.random()*10000000)'
            elif "uri" in p_format or "url" in p_format: val = f'"http://example.com/{suffix}"'
            elif "uuid" in p_format: val = f'"00000000-0000-0000-0000-000000000000"'
            elif p.lower() == "status": val = '"active"'
            else:
                 if val is None: val = f'"{p}_{suffix}_" + Math.floor(Math.random()*1000)'
            
            lines_code.append(f'  let {var_name} = {val};')
        else:
             lines_code.append(f'  let {var_name} = "val_" + Math.floor(Math.random()*1000);')
        
        args.append(var_name)
    
    if pk_var_name == "null" and args:
        for a in args:
            if "id" in a.lower(): pk_var_name = a; break
        if pk_var_name == "null": pk_var_name = args[0]

    return lines_code, args, pk, pk_var_name, param_var_map

def _infer_dependencies(entities, raw_spec):
    dependencies = {}
    for child_name, child_data in entities.items():
        if "add" not in child_data.get("operations", {}): continue
        _, params = collect_entity_params(child_name, child_data, raw_spec)
        parents = []
        for p in params:
            if p.lower().endswith("id") and p != collect_entity_params(child_name, child_data, raw_spec)[0]:
                potential_parent = p[:-2]
                for ent_name in entities.keys():
                    if ent_name.lower() == potential_parent.lower() or ent_name.rstrip('s').lower() == potential_parent.lower():
                        if ent_name != child_name and ent_name not in parents: parents.append(ent_name)
        if parents: dependencies[child_name] = parents
    return dependencies

def _recursive_emit_creation(ent_name, entities, dependencies, raw_spec, lines, created_context, base_id):
    if ent_name in created_context: return
    all_parents = dependencies.get(ent_name, [])
    if "resolving" in created_context:
        deps_to_resolve = {}
        pk_map = {}
        for parent in all_parents:
            if parent not in created_context:
                deps_to_resolve[parent] = f"matchAny{sanitize_param(parent)}Added()"
                parent_pk, _ = collect_entity_params(parent, entities[parent], raw_spec)
                pk_map[parent] = parent_pk
        if deps_to_resolve:
            lines.append(f'  let deps = {{}};')
            for k, v in deps_to_resolve.items(): lines.append(f'  deps["{k}"] = {v};')
            lines.append(f'  let pkMap = {json.dumps(pk_map)};')
            lines.append(f'  let captured = resolveDependencies(deps, pkMap);')
            for parent in deps_to_resolve.keys():
                pk_var_name = f"{sanitize_param(parent)}Id"
                lines.append(f'  let {pk_var_name} = captured["{parent}"];')
                created_context[parent] = {"pk_var": pk_var_name}
    else:
        for parent in all_parents:
            if parent in entities: _recursive_emit_creation(parent, entities, dependencies, raw_spec, lines, created_context, base_id)
    link_map = {}
    _, params = collect_entity_params(ent_name, entities[ent_name], raw_spec)
    for p in params:
        for parent in all_parents:
            if parent in created_context:
                pk_var = created_context[parent]["pk_var"]
                pk_name, _ = collect_entity_params(parent, entities[parent], raw_spec)
                if p == pk_name: link_map[p] = pk_var
                elif parent.rstrip('s').lower() in p.lower() and "id" in p.lower(): link_map[p] = pk_var
                elif p == "parentId": link_map[p] = pk_var
    
    add_op = entities[ent_name]["operations"].get("add", {})
    suffix = f"{sanitize_param(ent_name)}_{base_id}"
    vars_code, args, pk, pk_var_name, param_var_map = _generate_entity_vars(ent_name, entities, raw_spec, suffix, str(base_id), link_map, add_op.get("paramTypes", {}), add_op.get("paramFormats", {}))
    
    lines.append(f'  // -> Creating {ent_name}')
    lines.extend(vars_code)
    add_fn = add_op.get("name", f"create{ent_name}")
    
    # FIX: Explicitly append expected success codes to override broken specs
    args_str = ", ".join(args)
    if args: args_str += ", "
    lines.append(f'  {sanitize_param(add_fn)}({args_str}{{ expectedResponseCodes: [200, 201, 204] }});')
    
    created_context[ent_name] = {"pk_var": pk_var_name, "param_map": param_var_map, "pk_name": pk, "args": args}
    lines.append('')

def _emit_update_logic(ent_name, entities, raw_spec, lines, context, base_id):
    ops = entities[ent_name]["operations"]
    upd_op = ops.get("update")
    if not upd_op: return

    lines.append(f'  // -> Updating {ent_name}')
    pk_var = context[ent_name]["pk_var"]
    pk_name = context[ent_name]["pk_name"]
    link_map = {pk_name: pk_var} 
    vars_code, args, _, _, _ = _generate_entity_vars(ent_name, entities, raw_spec, f"{sanitize_param(ent_name)}_upd_{base_id}", str(base_id), link_map, upd_op.get("paramTypes", {}), upd_op.get("paramFormats", {}))
    lines.extend(vars_code)
    upd_fn = upd_op.get("name", f"update{ent_name}")
    
    # FIX: Explicit success codes
    args_str = ", ".join(args)
    if args: args_str += ", "
    lines.append(f'  {sanitize_param(upd_fn)}({args_str}{{ expectedResponseCodes: [200, 201, 204] }});')
    lines.append('')

def _emit_delete_logic(ent_name, entities, raw_spec, lines, context):
    ops = entities[ent_name]["operations"]
    del_op = ops.get("delete")
    if not del_op: return

    lines.append(f'  // -> Deleting {ent_name}')
    del_fn = del_op.get("name", f"delete{ent_name}")
    path_tmpl = del_op.get("path", "")
    required_path_params = re.findall(r'\{([^\}]+)\}', path_tmpl)
    del_args = []
    if required_path_params:
        stored_map = context[ent_name]["param_map"]
        for p in required_path_params:
            if p in stored_map: del_args.append(stored_map[p])
            elif p == context[ent_name]["pk_name"]: del_args.append(context[ent_name]["pk_var"])
    if not del_args: del_args.append(context[ent_name]["pk_var"])
    
    # FIX: Explicit success codes
    del_args_str = ", ".join(del_args)
    if del_args: del_args_str += ", "
    lines.append(f'  {sanitize_param(del_fn)}({del_args_str}{{ expectedResponseCodes: [200, 201, 204] }});')
    lines.append('')

def emit_stories(spec, out_dir, sut_name):
    print(f"   > 🔨 Generating stories for {sut_name}...")
    entities = spec.get("entities", {})
    raw_spec = get_raw_spec(spec)
    dependencies = spec.get("dependencies", {})
    if not dependencies: dependencies = _infer_dependencies(entities, raw_spec)
    lines = []
    lines.append(f'// Auto-generated stories for {sut_name}')
    lines.append('//@provengo summon rest')
    lines.append('')
    lines.extend(_get_js_resolve_dependencies_fn())
    lines.append('')
    
    # 1. MONITORS
    lines.append('// --- Monitors ---')
    for name in entities.keys():
        if not entities[name].get("operations", {}).get("add"): continue
        safe_name = sanitize_param(name)
        lines.append(f'// Monitor: {name} Verification (Existence)')
        lines.append(f'bthread("monitor:{name}:exists", function () {{')
        lines.append(f'  while (true) {{')
        lines.append(f'    let e = bp.sync({{ waitFor: matchAny{safe_name}Added() }});')
        _, params = collect_entity_params(name, entities[name], raw_spec)
        extract_lines = []
        js_vars = []
        for p in params:
            safe_p = sanitize_param(p)
            extract_lines.append(f'    let {safe_p} = (e.data.parameters && e.data.parameters["{p}"]) ? e.data.parameters["{p}"] : e.data["{p}"];')
            js_vars.append(safe_p)
        lines.extend(extract_lines)
        if "delete" in entities[name]["operations"]:
            lines.append(f'    // Block Deletion while Verifying Existence')
            lines.append(f'    block(matchDeleted{safe_name}({", ".join(js_vars)}), function() {{ verify{safe_name}Exists({", ".join(js_vars)}); }});')
        else: lines.append(f'    verify{safe_name}Exists({", ".join(js_vars)});')
        lines.append(f'  }}')
        lines.append(f'}});')
        lines.append('')
        if "delete" in entities[name]["operations"]:
            lines.append(f'// Monitor: {name} Verification (Absence)')
            lines.append(f'bthread("monitor:{name}:absence", function () {{')
            lines.append(f'  while (true) {{')
            lines.append(f'    let e = bp.sync({{ waitFor: matchDeleted{safe_name}() }});') 
            lines.extend(extract_lines)
            lines.append(f'    // Block Creation while Verifying Absence')
            lines.append(f'    block(matchAny{safe_name}Added(), function() {{ verify{safe_name}DoesNotExist({", ".join(js_vars)}); }});')
            lines.append(f'  }}')
            lines.append(f'}});')
            lines.append('')

    # 2. LINEAR CRUD STORIES
    global_base_id = 100
    all_parents = set()
    for parents in dependencies.values(): all_parents.update(parents)
    for repetition in range(1, 4): 
        for name in entities.keys():
            if not entities[name].get("operations", {}).get("add"): continue
            story_name = f"crud:{sanitize_param(name)}:linear:{repetition}"
            lines.append(f'// Story: {story_name}')
            lines.append(f'bthread("{story_name}", function () {{')
            created_context = {"resolving": True} 
            _recursive_emit_creation(name, entities, dependencies, raw_spec, lines, created_context, global_base_id)
            if name in created_context:
                _emit_update_logic(name, entities, raw_spec, lines, created_context, global_base_id)
                if name not in all_parents: _emit_delete_logic(name, entities, raw_spec, lines, created_context)
                else: lines.append(f'  // Skip delete for {name} to prevent foreign key errors (has active dependents)')
            lines.append('});')
            lines.append('')
            global_base_id += 10

    # 3. CHAINS
    def get_longest_chain(current_node, current_chain, parent_to_children):
        children = parent_to_children.get(current_node, [])
        if not children: return [current_chain]
        paths = []
        for child in children:
            if child not in current_chain: paths.extend(get_longest_chain(child, current_chain + [child], parent_to_children))
        return paths
    parent_to_children = {}
    for child, parents in dependencies.items():
        for p in parents:
            if p not in parent_to_children: parent_to_children[p] = []
            parent_to_children[p].append(child)
    potential_roots = list(entities.keys())
    complex_chains = []
    for root in potential_roots:
        if root in parent_to_children: complex_chains.extend(get_longest_chain(root, [root], parent_to_children))
    unique_chains = []
    seen_chains = set()
    for chain in complex_chains:
        chain_tuple = tuple(chain)
        if len(chain) >= 2 and chain_tuple not in seen_chains:
            seen_chains.add(chain_tuple)
            unique_chains.append(chain)
    for i, chain in enumerate(unique_chains):
        chain_name = "_".join([sanitize_param(n) for n in chain])
        lines.append(f'// Story: Deep Chain {chain_name} (Self-Contained)')
        lines.append(f'bthread("chain:{chain_name}", function () {{')
        chain_context = {} 
        for ent_name in chain: _recursive_emit_creation(ent_name, entities, dependencies, raw_spec, lines, chain_context, global_base_id)
        lines.append('  // --- Proper Teardown (Reverse Order) ---')
        for ent_name in reversed(chain): 
            if ent_name in chain_context:
                _emit_delete_logic(ent_name, entities, raw_spec, lines, chain_context)
        lines.append('});')
        lines.append('')
        global_base_id += 100
    ensure_dir(out_dir)
    (out_dir / f"stories.{sut_name}.js").write_text("\n".join(lines), encoding="utf-8")
    emit_negative_stories(spec, out_dir, sut_name)

def _get_required_fields(ent_name, raw_spec):
    schemas = raw_spec.get("components", {}).get("schemas", {})
    schema = schemas.get(ent_name) or schemas.get(ent_name.rstrip('s'))
    if schema: return schema.get("required", [])
    return []

def emit_negative_stories(spec: Dict[str, Any], out_dir: Path, sut_name: str):
    print(f"   > 😈 Generating negative tests for {sut_name}...")
    entities = spec.get("entities", {})
    raw_spec = get_raw_spec(spec)
    lines = []
    lines.append(f'// Auto-generated NEGATIVE (Fuzzing) stories for {sut_name}')
    lines.append('//@provengo summon rest')
    lines.append('')
    base_id = 900
    for name, ent in entities.items():
        if not ent["operations"].get("add"): continue
        pk, params = collect_entity_params(name, ent, raw_spec)
        param_types = ent["operations"]["add"].get("paramTypes", {})
        param_formats = ent["operations"]["add"].get("paramFormats", {})
        query_params = ent["operations"]["add"].get("queryParams", [])
        required_fields = _get_required_fields(name, raw_spec)
        vars_code, valid_args, _, _, _ = _generate_entity_vars(name, entities, raw_spec, "valid", str(base_id), {}, param_types, param_formats)
        arg_map = dict(zip(params, valid_args))
        for p in params:
            if p in query_params: continue
            if p not in param_types and p != "id": continue
            t = param_types.get(p, "string").lower()
            if t in ["integer", "number"]: bad_value = '"INVALID_STRING"'
            elif t == "boolean": bad_value = '"NOT_A_BOOL"'
            elif t == "string": bad_value = '12345'
            elif t == "array": bad_value = '"NOT_AN_ARRAY"'
            elif t == "object": bad_value = '12345'
            else: bad_value = '123456' 
            story_name = f"fuzz:{name}:{sanitize_param(p)}_InvalidType"
            lines.append(f'bthread("{story_name}", function () {{')
            lines.extend(vars_code)
            call_args = []
            for arg_p in params:
                if arg_p == p: lines.append(f'  let bad_{sanitize_param(p)} = {bad_value};'); call_args.append(f'bad_{sanitize_param(p)}')
                else: call_args.append(arg_map[arg_p])
            lines.append(f'  verify{sanitize_param(name)}Rejects({", ".join(call_args)});')
            lines.append('});')
        for p in params:
            if p in query_params: continue
            if p in required_fields or p == pk:
                story_name = f"fuzz:{name}:{sanitize_param(p)}_Missing"
                lines.append(f'bthread("{story_name}", function () {{')
                lines.extend(vars_code)
                call_args = []
                for arg_p in params:
                    if arg_p == p: lines.append(f'  let missing_{sanitize_param(p)} = undefined;'); call_args.append(f'missing_{sanitize_param(p)}')
                    else: call_args.append(arg_map[arg_p])
                lines.append(f'  verify{sanitize_param(name)}Rejects({", ".join(call_args)});')
                lines.append('});')
        base_id += 50
    ensure_dir(out_dir)
    (out_dir / f"negative.{sut_name}.js").write_text("\n".join(lines), encoding="utf-8")