import json
import re
from pathlib import Path
from typing import Dict, Any, List
from new_repo.pipeline.emitter_utils import (
    ensure_dir, sanitize_param, get_raw_spec, 
    collect_entity_params
)

def _get_js_resolve_dependencies_fn():
    lines = [
        'function resolveDependencies(deps, pkMap) {',
        '  let captured = {};',
        '  bp.log.info("DEBUG: [resolveDependencies] Starting resolution for: " + Object.keys(deps).join(", "));',
        '  while (Object.keys(deps).length > 0) {',
        '    let missingEventSets = Object.values(deps);',
        '    let e = bp.sync({waitFor: missingEventSets});',
        '    bp.log.info("DEBUG: [resolveDependencies] Caught Event: " + e.name);',
        '    for (let k in deps) {',
        '      if (deps[k].contains(e)) {',
        '        // Resolution with common Gitea key-mapping (index <-> number)',
        '        let val = (e.data && (e.data[k] || e.data.number || (e.data.parameters && e.data.parameters[k])));',
        '        if (!val && pkMap && pkMap[k]) val = e.data[pkMap[k]];',
        '        if (val !== undefined && val !== null && val !== "undefined") {',
        '            captured[k] = val;',
        '            bp.log.info("DEBUG: [resolveDependencies] SUCCESS: Resolved " + k + " -> " + val);',
        '            delete deps[k];',
        '        } else {',
        '            bp.log.warn("DEBUG: [resolveDependencies] MISSING DATA for key: " + k);',
        '            if(e.data) bp.log.warn("DEBUG: [resolveDependencies] Available keys: " + Object.keys(e.data).join(", "));',
        '        }',
        '      }',
        '    }',
        '  }',
        '  return captured;',
        '}'
    ]
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
        
        # Look up type from the aggregated map
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
                elif '0-9' in pattern and r'\.' in pattern and '/' in pattern: val = '"10.0.0.1/24"'
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

def _get_merged_param_types(ent):
    merged_types = {}
    merged_formats = {}
    for op in ent.get("operations", {}).values():
        merged_types.update(op.get("paramTypes", {}))
        merged_formats.update(op.get("paramFormats", {}))
    return merged_types, merged_formats

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
                # FIX: Add pk_name to context to ensure linking works in resolved branches
                created_context[parent] = {"pk_var": pk_var_name, "pk_name": pk_map[parent]}
    else:
        for parent in all_parents:
            if parent in entities: _recursive_emit_creation(parent, entities, dependencies, raw_spec, lines, created_context, base_id)
    
    link_map = {}
    _, params = collect_entity_params(ent_name, entities[ent_name], raw_spec)
    for p in params:
        for parent in all_parents:
            if parent in created_context:
                pk_var = created_context[parent]["pk_var"]
                pk_name = created_context[parent].get("pk_name")
                if p == pk_name: link_map[p] = pk_var
                # FIX 1: Search for index and number to handle Gitea's primary key conventions
                elif parent.rstrip('s').lower() in p.lower() and any(k in p.lower() for k in ["id", "index", "number"]): link_map[p] = pk_var
                elif p == "parentId": link_map[p] = pk_var
    
    add_op = entities[ent_name]["operations"].get("add", {})
    # FIX A: Skip generation if the interface emitter skipped it due to missing path
    if not add_op.get("path"): return 

    suffix = f"{sanitize_param(ent_name)}_{base_id}"
    merged_types, merged_formats = _get_merged_param_types(entities[ent_name])
    
    vars_code, args, pk, pk_var_name, param_var_map = _generate_entity_vars(
        ent_name, entities, raw_spec, suffix, str(base_id), 
        link_map, merged_types, merged_formats
    )
    
    lines.append(f'  // -> Creating {ent_name}')
    lines.extend(vars_code)
    add_fn = add_op.get("name", f"add{ent_name}")
    
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
    merged_types, merged_formats = _get_merged_param_types(entities[ent_name])
    
    vars_code, args, _, _, _ = _generate_entity_vars(
        ent_name, entities, raw_spec, f"{sanitize_param(ent_name)}_upd_{base_id}", 
        str(base_id), link_map, merged_types, merged_formats
    )
    lines.extend(vars_code)
    upd_fn = upd_op.get("name", f"update{ent_name}")
    
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
    
    del_args_str = ", ".join(del_args)
    if del_args: del_args_str += ", "
    lines.append(f'  {sanitize_param(del_fn)}({del_args_str}{{ expectedResponseCodes: [200, 201, 204] }});')
    lines.append('')

def emit_stories(spec, out_dir, sut_name):
    entities = spec.get("entities", {})
    raw_spec = get_raw_spec(spec)
    dependencies = spec.get("dependencies", {})
    if not dependencies: dependencies = _infer_dependencies(entities, raw_spec)
    lines = [f'// Auto-generated stories for {sut_name}', '//@provengo summon rest', '']
    lines.extend(_get_js_resolve_dependencies_fn())
    lines.append('')
    
    # 1. MONITORS
    lines.append('// --- Monitors ---')
    for name in entities.keys():
        if not entities[name].get("operations", {}).get("add"): continue
        safe_name = sanitize_param(name)
        pk_name, _ = collect_entity_params(name, entities[name], raw_spec)
        lines.append(f'bthread("monitor:{name}:exists", function () {{')
        lines.append(f'  while (true) {{')
        lines.append(f'    let e = bp.sync({{ waitFor: matchAny{safe_name}Added() }});')
        # FIX 2: Extract PK with bracket notation (for hyphens) and ternary checks (for 0 values)
        lines.append(f'    let targetId = (e.data["{pk_name}"] !== undefined) ? e.data["{pk_name}"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));')
        if "delete" in entities[name]["operations"]:
            lines.append(f'    block(matchDeleted{safe_name}(), function() {{ verify{safe_name}Exists(targetId); }});')
        else: lines.append(f'    verify{safe_name}Exists(targetId);')
        lines.append(f'  }}')
        lines.append(f'}});')
        lines.append('')

    # 2. LINEAR CRUD STORIES
    global_base_id = 100
    all_parents = set()
    for parents in dependencies.values(): all_parents.update(parents)
    for repetition in range(1, 4): 
        for name in entities.keys():
            add_op = entities[name].get("operations", {}).get("add")
            # FIX B: Skip if interface emitter will skip the function due to missing path
            if not add_op or not add_op.get("path"): continue 
            story_name = f"crud:{sanitize_param(name)}:linear:{repetition}"
            lines.append(f'bthread("{story_name}", function () {{')
            created_context = {"resolving": True} 
            _recursive_emit_creation(name, entities, dependencies, raw_spec, lines, created_context, global_base_id)
            if name in created_context:
                _emit_update_logic(name, entities, raw_spec, lines, created_context, global_base_id)
                if name not in all_parents: _emit_delete_logic(name, entities, raw_spec, lines, created_context)
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
        for p in parents: parent_to_children.setdefault(p, []).append(child)
    
    unique_chains = []
    seen_chains = set()
    for root in list(entities.keys()):
        if root in parent_to_children:
            for chain in get_longest_chain(root, [root], parent_to_children):
                if len(chain) >= 2 and tuple(chain) not in seen_chains:
                    seen_chains.add(tuple(chain)); unique_chains.append(chain)

    for chain in unique_chains:
        chain_name = "_".join([sanitize_param(n) for n in chain])
        lines.append(f'bthread("chain:{chain_name}", function () {{')
        chain_context = {} 
        for ent_name in chain: _recursive_emit_creation(ent_name, entities, dependencies, raw_spec, lines, chain_context, global_base_id)
        lines.append('  // --- Proper Teardown (Reverse Order) ---')
        for ent_name in reversed(chain): 
            if ent_name in chain_context: _emit_delete_logic(ent_name, entities, raw_spec, lines, chain_context)
        lines.append('});\n')
        global_base_id += 100
    ensure_dir(out_dir)
    (out_dir / f"stories.{sut_name}.js").write_text("\n".join(lines), encoding="utf-8")
    emit_negative_stories(spec, out_dir, sut_name)

def _get_required_fields(ent_name, raw_spec):
    schemas = raw_spec.get("components", {}).get("schemas", {})
    schema = schemas.get(ent_name) or schemas.get(ent_name.rstrip('s'))
    return schema.get("required", []) if schema else []

def emit_negative_stories(spec: Dict[str, Any], out_dir: Path, sut_name: str):
    entities, raw_spec, lines = spec.get("entities", {}), get_raw_spec(spec), []
    lines.append(f'// Auto-generated NEGATIVE stories for {sut_name}')
    lines.append('//@provengo summon rest\n')
    base_id = 900
    for name, ent in entities.items():
        if not ent["operations"].get("add"): continue
        pk, params = collect_entity_params(name, ent, raw_spec)
        merged_types, merged_formats = _get_merged_param_types(ent)
        vars_code, valid_args, _, _, _ = _generate_entity_vars(name, entities, raw_spec, "valid", str(base_id), {}, merged_types, merged_formats)
        arg_map = dict(zip(params, valid_args))
        for p in params:
            if p not in merged_types and p != "id": continue
            t = merged_types.get(p, "string").lower()
            bad_v = '"INVALID"' if t in ["integer", "number", "boolean"] else '12345'
            lines.append(f'bthread("fuzz:{name}:{sanitize_param(p)}_InvalidType", function () {{')
            lines.extend(vars_code)
            args = [f'bad_{sanitize_param(p)}' if ap == p else arg_map[ap] for ap in params]
            lines.append(f'  let bad_{sanitize_param(p)} = {bad_v}; verify{sanitize_param(name)}Rejects({", ".join(args)});')
            lines.append('});')
        base_id += 50
    ensure_dir(out_dir); (out_dir / f"negative.{sut_name}.js").write_text("\n".join(lines), encoding="utf-8")