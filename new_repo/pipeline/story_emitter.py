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
    lines.append('    for (let k in deps) {')
    lines.append('      if (deps[k].contains(e)) {')
    lines.append('        let val = (e.data && e.data[k]) || (e.data && e.data.parameters && (e.data.parameters[k] || e.data.parameters.id));')
    lines.append('        if (!val && pkMap && pkMap[k]) {')
    lines.append('            let mappedKey = pkMap[k];')
    lines.append('            val = (e.data && e.data[mappedKey]) || (e.data.parameters && e.data.parameters[mappedKey]);')
    lines.append('        }')
    lines.append('        if (val) {')
    lines.append('            captured[k] = val;')
    lines.append('            delete deps[k];')
    lines.append('        }')
    lines.append('      }')
    lines.append('    }')
    lines.append('  }')
    lines.append('  return captured;')
    lines.append('}')
    return lines

def _generate_entity_vars(ent_name, entities, raw_spec, suffix, base_id, link_map={}, param_types={}):
    pk, params = collect_entity_params(ent_name, entities[ent_name], raw_spec)
    lines_code = []
    args = []
    pk_var_name = "null"
    
    # Store param_name -> var_name mapping for later use (teardown)
    param_var_map = {} 

    for p in params:
        safe_p = sanitize_param(p)
        var_name = f"{safe_p}_{suffix}"
        p_type = param_types.get(p, "string").lower()
        
        param_var_map[p] = var_name

        if p == pk: pk_var_name = var_name

        if p in link_map:
            lines_code.append(f'  let {var_name} = {link_map[p]};')
        
        # --- FIX START: STRICT TYPE CHECKING FIRST ---
        # 1. Check strict types (Integer/Boolean/Array) BEFORE checking name patterns (like "id")
        # This prevents "id" fields defined as integers from becoming strings.
        elif p_type in ["integer", "number"]:
             # Generates pure integer: let id_... = 12345;
             lines_code.append(f'  let {var_name} = Math.floor(Math.random() * 1000000);')
        elif p_type == "boolean":
             lines_code.append(f'  let {var_name} = true;')
        elif p_type == "array":
             lines_code.append(f'  let {var_name} = [];')
        elif p_type == "object":
             lines_code.append(f'  let {var_name} = {{}};')
        
        # 2. Handle Strings and loose types
        elif p == pk or p.lower().endswith("id") or p_type == "string":
            p_lower = p.lower()
            if "email" in p_lower: val = f'"u{suffix}_" + Math.floor(Math.random()*1000) + "@test.com"'
            elif "phone" in p_lower: val = f'"+1555" + Math.floor(Math.random()*10000000)'
            elif "status" in p_lower: val = '"open"'
            # Ensure ID strings are generated as strings, but ONLY if they fell through the Integer check above
            else: val = f'"{p}_{suffix}_" + Math.floor(Math.random()*1000)'
            lines_code.append(f'  let {var_name} = {val};')
        # --- FIX END ---
        
        else:
             lines_code.append(f'  let {var_name} = "val_" + Math.floor(Math.random()*1000);')
        
        args.append(var_name)
    
    if pk_var_name == "null" and args:
        for a in args:
            if "id" in a.lower(): 
                pk_var_name = a
                break
        if pk_var_name == "null": pk_var_name = args[0]

    return lines_code, args, pk, pk_var_name, param_var_map

def _recursive_emit_creation(ent_name, entities, dependencies, raw_spec, lines, created_context, base_id):
    if ent_name in created_context: return
    
    detected_parents = []
    _, params = collect_entity_params(ent_name, entities[ent_name], raw_spec)
    for p in params:
        p_lower = p.lower()
        if "vin" in p_lower and ent_name != "Cars" and "Cars" in entities:
             if "Cars" not in detected_parents: detected_parents.append("Cars")
        if "id" in p_lower:
            for potential in entities.keys():
                if potential == ent_name: continue
                if potential.rstrip('s').lower() in p_lower:
                    if potential not in detected_parents: detected_parents.append(potential)

    all_parents = list(set(dependencies.get(ent_name, []) + detected_parents))

    for parent in all_parents:
        if parent in entities:
            _recursive_emit_creation(parent, entities, dependencies, raw_spec, lines, created_context, base_id)

    link_map = {}
    for p in params:
        for parent in all_parents:
            if parent not in created_context: continue
            pk_var = created_context[parent]["pk_var"]
            pk_name, _ = collect_entity_params(parent, entities[parent], raw_spec)
            if p == pk_name: link_map[p] = pk_var
            elif parent.rstrip('s').lower() in p.lower() and "id" in p.lower(): link_map[p] = pk_var
            elif p == "parentId": link_map[p] = pk_var
            if "vin" in p.lower() and parent == "Cars": link_map[p] = pk_var

    add_op = entities[ent_name]["operations"].get("add", {})
    suffix = f"{ent_name}_{base_id}"
    
    # Capture param_var_map here
    vars_code, args, pk, pk_var_name, param_var_map = _generate_entity_vars(
        ent_name, entities, raw_spec, suffix, str(base_id), link_map, add_op.get("paramTypes", {})
    )
    
    lines.append(f'  // -> Creating {ent_name}')
    lines.extend(vars_code)
    safe_ent = sanitize_param(ent_name)
    add_fn = add_op.get("name", f"create{ent_name}")
    
    lines.append(f'  {sanitize_param(add_fn)}({", ".join(args)});')
    lines.append(f'  verify{safe_ent}Exists({pk_var_name});')
    
    # Store full context for teardown later
    created_context[ent_name] = {
        "pk_var": pk_var_name,
        "param_map": param_var_map # <--- Storing map of {param_name: generated_var_name}
    }
    lines.append('')

def emit_stories(spec, out_dir, sut_name):
    print(f"   > 🔨 Generating stories for {sut_name}...")
    entities = spec.get("entities", {})
    dependencies = spec.get("dependencies", {}) 
    raw_spec = get_raw_spec(spec)
    
    lines = []
    lines.append(f'// Auto-generated stories for {sut_name}')
    lines.append('//@provengo summon rest')
    lines.append('')
    lines.extend(_get_js_resolve_dependencies_fn())
    lines.append('')

    global_base_id = 100
    for name in entities.keys():
        if not entities[name].get("operations", {}).get("add"): continue
        story_name = f"cover:{sanitize_param(name)}"
        lines.append(f'// Story: Full Coverage for {name}')
        lines.append(f'bthread("{story_name}", function () {{')
        created_context = {} 
        _recursive_emit_creation(name, entities, dependencies, raw_spec, lines, created_context, global_base_id)
        lines.append('});')
        lines.append('')
        global_base_id += 50

    parent_to_children = {}
    for child, parents in dependencies.items():
        for p in parents:
            if p not in parent_to_children: parent_to_children[p] = []
            parent_to_children[p].append(child)

    def get_longest_chain(current_node, current_chain):
        children = parent_to_children.get(current_node, [])
        if not children: return [current_chain]
        paths = []
        for child in children:
            if child not in current_chain: 
                paths.extend(get_longest_chain(child, current_chain + [child]))
        return paths

    roots = list(set(entities.keys()) - set(dependencies.keys()))
    complex_chains = []
    for root in roots:
        if root in parent_to_children:
            complex_chains.extend(get_longest_chain(root, [root]))

    for i, chain in enumerate(complex_chains):
        if len(chain) < 2: continue 
        chain_name = "_".join([sanitize_param(n) for n in chain])
        lines.append(f'// Story: Deep Chain {chain_name}')
        lines.append(f'bthread("chain:{chain_name}", function () {{')
        chain_context = {}
        for ent_name in chain:
            _recursive_emit_creation(ent_name, entities, dependencies, raw_spec, lines, chain_context, global_base_id)
        
        lines.append('  // --- Teardown ---')
        # Teardown in reverse order
        for ent_name in reversed(chain):
            safe_ent = sanitize_param(ent_name)
            
            # --- FIX START: SMART TEARDOWN ARGUMENTS ---
            del_op = entities[ent_name]["operations"].get("delete")
            if del_op:
                del_fn = del_op.get("name", f"delete{ent_name}")
                
                # Get the parameter names required by the delete function
                # (Falling back to keys of paramTypes if list not explicit)
                del_param_names = list(del_op.get("paramTypes", {}).keys())
                
                # Look up the variables we generated for this entity
                stored_map = chain_context[ent_name]["param_map"]
                pk_var = chain_context[ent_name]["pk_var"]

                # Construct the argument list for delete()
                del_args = []
                if del_param_names:
                    for p_name in del_param_names:
                        if p_name in stored_map:
                            del_args.append(stored_map[p_name])
                        else:
                            # Fallback: if we can't find the param, pass the PK 
                            # (This handles simple cases where delete(id) params might be implicit)
                            if len(del_args) == 0: del_args.append(pk_var)
                else:
                    # Default if no params found: just pass PK
                    del_args.append(pk_var)

                arg_str = ", ".join(del_args)
                lines.append(f'  {sanitize_param(del_fn)}({arg_str});')
                lines.append(f'  verify{safe_ent}Deleted({arg_str});')
            else:
                lines.append(f'  // Skipped delete for {ent_name}: No operation found')
            # --- FIX END ---

        lines.append('});')
        lines.append('')
        global_base_id += 100

    ensure_dir(out_dir)
    (out_dir / f"stories.{sut_name}.js").write_text("\n".join(lines), encoding="utf-8")
    emit_negative_stories(spec, out_dir, sut_name)

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
        
        # Note: We discard the 5th return value (param_var_map) here as we don't need context for negative tests
        vars_code, valid_args, _, _, _ = _generate_entity_vars(name, entities, raw_spec, "valid", str(base_id), {}, param_types)
        arg_map = dict(zip(params, valid_args))
        
        for p in params:
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
                if arg_p == p:
                    lines.append(f'  let bad_{sanitize_param(p)} = {bad_value};')
                    call_args.append(f'bad_{sanitize_param(p)}')
                else:
                    call_args.append(arg_map[arg_p])
            
            lines.append(f'  verify{sanitize_param(name)}Rejects({", ".join(call_args)});')
            lines.append('});')
        base_id += 50
    ensure_dir(out_dir)
    (out_dir / f"negative.{sut_name}.js").write_text("\n".join(lines), encoding="utf-8")