from pathlib import Path
import json
from typing import Dict, Any, List
from new_repo.pipeline.emitter_utils import (
    ensure_dir, sanitize_param, get_raw_spec, 
    collect_entity_params
)

# --- Helper: JS Runtime Dependency Resolver ---
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

# --- Helper: Variable Generator (Schema-Driven) ---
def _generate_entity_vars(ent_name, entities, raw_spec, suffix, base_id, link_map={}, param_types={}):
    pk, params = collect_entity_params(ent_name, entities[ent_name], raw_spec)
    lines_code = []
    args = []
    
    for p in params:
        safe_p = sanitize_param(p)
        var_name = f"{safe_p}_{suffix}"
        p_type = param_types.get(p, "string").lower()

        # 1. Dependency Link (Highest Priority)
        if p in link_map:
            lines_code.append(f'  let {var_name} = {link_map[p]};')
        
        # 2. Objects
        elif p_type == "object":
            lines_code.append(f'  let {var_name} = {{}};')

        # 3. Arrays
        elif p_type == "array":
            lines_code.append(f'  let {var_name} = [];')

        # 4. Integers/Numbers
        elif p_type in ["integer", "number"]:
            lines_code.append(f'  let {var_name} = Math.floor(Math.random() * 1000) + 1990;')
        
        # 5. Booleans
        elif p_type == "boolean":
            lines_code.append(f'  let {var_name} = true;')

        # 6. IDs & Strings
        elif p == pk or p.lower().endswith("id") or p_type == "string":
            p_lower = p.lower()
            if "email" in p_lower:
                val = f'"u{suffix}_" + Math.floor(Math.random()*1000) + "@test.com"'
            elif "phone" in p_lower:
                val = f'"+1555" + Math.floor(Math.random()*10000000)'
            elif "status" in p_lower:
                val = '"open"' 
            else:
                val = f'"{p}_{suffix}_" + Math.floor(Math.random()*1000)'
            lines_code.append(f'  let {var_name} = {val};')

        else:
             lines_code.append(f'  let {var_name} = "val_" + Math.floor(Math.random()*1000);')
        
        args.append(var_name)
    
    return lines_code, args, pk

# --- Recursive Creator with Auto-Detection ---
def _recursive_emit_creation(ent_name: str, entities: Dict, dependencies: Dict, raw_spec: Dict, lines: List[str], created_context: Dict, base_id: int):
    if ent_name in created_context: return

    # --- AUTO-DETECT DEPENDENCIES ---
    # Scan parameters to find Foreign Keys even if LLM missed them
    detected_parents = []
    _, params = collect_entity_params(ent_name, entities[ent_name], raw_spec)
    for p in params:
        p_lower = p.lower()
        if "id" not in p_lower: continue
        
        for potential_parent in entities.keys():
            if potential_parent == ent_name: continue
            
            # Check if param matches entity name (e.g. "preferredGarageId" matches "Garages")
            # We strip 's' to handle plural/singular mismatch
            singular_parent = potential_parent.rstrip('s').lower()
            if singular_parent in p_lower:
                if potential_parent not in detected_parents:
                    detected_parents.append(potential_parent)

    # Combine explicit (from LLM) and detected dependencies
    explicit_parents = dependencies.get(ent_name, [])
    all_parents = list(set(explicit_parents + detected_parents))

    # 1. Create Parents Recursively
    for parent in all_parents:
        if parent in entities:
            _recursive_emit_creation(parent, entities, dependencies, raw_spec, lines, created_context, base_id)

    # 2. Prepare Dependency Links
    link_map = {}
    
    for p in params:
        for parent in all_parents:
            if parent not in created_context: continue
            
            parent_pk_var = created_context[parent]["pk_var"]
            # Get parent PK name to verify match
            parent_pk_name, _ = collect_entity_params(parent, entities[parent], raw_spec)
            
            # Direct match (chainId == chainId) or Fuzzy match (preferredGarageId ~= Garages)
            if p == parent_pk_name: 
                link_map[p] = parent_pk_var
            elif parent.rstrip('s').lower() in p.lower() and "id" in p.lower():
                link_map[p] = parent_pk_var
            elif p == "parentId":
                link_map[p] = parent_pk_var

    # 3. Generate Variables & Call
    ops = entities[ent_name].get("operations", {})
    add_op = ops.get("add", {})
    param_types = add_op.get("paramTypes", {})
    
    suffix = f"{ent_name}_{base_id}"
    vars_code, args, pk = _generate_entity_vars(ent_name, entities, raw_spec, suffix, str(base_id), link_map, param_types)
    
    lines.append(f'  // -> Creating {ent_name}')
    lines.extend(vars_code)
    
    safe_ent = sanitize_param(ent_name)
    add_fn = add_op.get("name", f"create{ent_name}")
    
    lines.append(f'  {sanitize_param(add_fn)}({", ".join(args)});')
    lines.append(f'  verify{safe_ent}Exists({", ".join(args)});')
    
    pk_var = next((arg for arg in args if str(sanitize_param(pk)) in arg), args[0] if args else "null")
    created_context[ent_name] = {"pk_var": pk_var}
    lines.append('')

def emit_stories(spec: Dict[str, Any], out_dir: Path, sut_name: str):
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

    # --- 1. Smart Coverage Stories ---
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

    # --- 2. V-Model Chain Stories ---
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
        for ent_name in reversed(chain):
            safe_ent = sanitize_param(ent_name)
            pk_var = chain_context[ent_name]["pk_var"]
            del_fn = entities[ent_name]["operations"].get("delete", {}).get("name", f"delete{ent_name}")
            lines.append(f'  {sanitize_param(del_fn)}({pk_var});')
            lines.append(f'  verify{safe_ent}Deleted({pk_var});')

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
        safe_entity_name = sanitize_param(name)
        ops = ent.get("operations", {})
        add_op = ops.get("add")
        if not add_op: continue

        pk, params = collect_entity_params(name, ent, raw_spec)
        param_types = add_op.get("paramTypes", {})
        
        vars_code, valid_args, _ = _generate_entity_vars(name, entities, raw_spec, "valid", str(base_id), {}, param_types)
        arg_map = dict(zip(params, valid_args))
        
        for p in params:
            target_type = param_types.get(p, "string").lower()
            
            if target_type in ["integer", "number"]:
                bad_value = '"INVALID_STRING"'
            elif target_type == "boolean":
                bad_value = '"NOT_A_BOOL"'
            elif target_type == "string":
                bad_value = '12345'
            elif target_type == "array":
                bad_value = '"NOT_AN_ARRAY"'
            elif target_type == "object":
                bad_value = '12345'
            else:
                bad_value = '123456' 

            story_name = f"fuzz:{name}:{sanitize_param(p)}_InvalidType"
            lines.append(f'// Negative Test: Injecting invalid type into {p}')
            lines.append(f'bthread("{story_name}", function () {{')
            lines.extend(vars_code)
            
            call_args = []
            for arg_p in params:
                if arg_p == p:
                    lines.append(f'  let bad_{sanitize_param(p)} = {bad_value};')
                    call_args.append(f'bad_{sanitize_param(p)}')
                else:
                    call_args.append(arg_map[arg_p])
            
            lines.append(f'  verify{safe_entity_name}Rejects({", ".join(call_args)});')
            lines.append('});')
            lines.append('')
            
        base_id += 50

    ensure_dir(out_dir)
    (out_dir / f"negative.{sut_name}.js").write_text("\n".join(lines), encoding="utf-8")