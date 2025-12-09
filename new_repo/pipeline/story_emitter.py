from pathlib import Path
import json
from typing import Dict, Any
from new_repo.pipeline.emitter_utils import (
    ensure_dir, sanitize_param, get_raw_spec, 
    get_operation_schema, infer_type, collect_entity_params
)

def emit_stories(spec: Dict[str, Any], out_dir: Path, sut_name: str):
    entities = spec.get("entities", {})
    dependencies = spec.get("dependencies", {}) # Loaded from JSON
    raw_spec = get_raw_spec(spec)
    
    lines = []
    lines.append(f'// Auto-generated stories for {sut_name}')
    lines.append('//@provengo summon rest')
    lines.append('')
    
    lines.append('function resolveDependencies(deps, pkMap) {')
    lines.append('  let captured = {};')
    lines.append('  while (Object.keys(deps).length > 0) {')
    lines.append('    let missingEventSets = Object.values(deps);')
    lines.append('    let e = bp.sync({waitFor: missingEventSets});')
    lines.append('    for (let k in deps) {')
    lines.append('      if (deps[k].contains(e)) {')
    lines.append('        let val = (e.data && e.data[k]) || (e.data && e.data.parameters && (e.data.parameters[k] || e.data.parameters.id || e.data.parameters.vin));')
    lines.append('        if (!val && pkMap && pkMap[k]) {')
    lines.append('            let mappedKey = pkMap[k];')
    lines.append('            val = (e.data && e.data[mappedKey]) || (e.data.parameters && e.data.parameters[mappedKey]);')
    lines.append('        }')
    lines.append('        if (!val && e.data) {')
    lines.append('          for (let f in e.data) { if (f.toLowerCase().indexOf("id") > -1 || f.toLowerCase().indexOf("vin") > -1) { val = e.data[f]; break; } }')
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
    lines.append('')

    global_base_id = 200 

    entity_pks_map = {}
    for name, ent in entities.items():
        pk, _ = collect_entity_params(name, ent, raw_spec)
        if pk: 
            entity_pks_map[name] = pk

    for name, ent in entities.items():
        safe_entity_name = sanitize_param(name)
        
        ops = ent.get("operations", {})
        
        def get_safe_fn(op_key):
            raw_fn = ops.get(op_key, {}).get("name")
            return sanitize_param(raw_fn) if raw_fn else None

        add_fn = get_safe_fn("add")
        del_fn = get_safe_fn("delete")
        upd_fn = get_safe_fn("update")
        
        primary_key, sig_params = collect_entity_params(name, ent, raw_spec)

        item_get_op = ops.get("get")
        has_specific_get = item_get_op and "{" in item_get_op.get("path", "")
        
        can_fully_test = has_specific_get

        try_add_fn = f"tryToAddExisting{safe_entity_name}"
        try_del_fn = f"tryToDeleteANonExisting{safe_entity_name}"
        ver_ex_fn = f"verify{safe_entity_name}Exists"
        ver_ne_fn = f"verify{safe_entity_name}DoesNotExist"
        
        match_add_any = f"matchAny{safe_entity_name}Added"
        match_del_specific = f"matchDeleted{safe_entity_name}"
        
        param_types = {}
        if "add" in ops and isinstance(ops["add"], dict):
            llm_types = ops["add"].get("paramTypes", {})
            for p in sig_params:
                if p in llm_types:
                    param_types[p] = llm_types[p]
                else:
                    param_types[p] = "string"

        deps = []
        story_pk_map = {}
        
        # --- NEW: Use Pre-Calculated Dependencies from JSON ---
        parent_entities = dependencies.get(name, [])
        if not isinstance(parent_entities, list): parent_entities = []
        
        for parent in parent_entities:
            # Find the parameter in this entity that links to the parent
            # Usually we look for 'id' or 'parentId' or similar in sig_params
            
            # Simple heuristic to find which param maps to the parent:
            # 1. Check if parent name is in param name (e.g. parent="Board", param="idBoard")
            target_param = None
            parent_pk = entity_pks_map.get(parent, "id")
            
            for p in sig_params:
                if parent.lower() in p.lower() or p == "id": # "id" often used in path params
                    target_param = p
                    break
            
            if target_param and parent in entity_pks_map:
                 deps.append((parent, target_param))
                 story_pk_map[target_param] = parent_pk
        # ------------------------------------------------------

        def get_vars(idx):
            declarations = []
            for p in sig_params:
                is_dep = False
                for d_ent, d_var in deps:
                    if d_var == p: is_dep = True
                sanitized = sanitize_param(p)
                if not is_dep:
                    ptype = param_types.get(p, "string").lower()
                    p_lower = p.lower()
                    
                    if ptype in ["integer", "number", "int", "float", "double"]:
                        if "year" in p_lower: val = f'{2020 + (idx % 5)}'
                        elif "mileage" in p_lower: val = f'{10000 + idx}'
                        elif "bay" in p_lower: val = f'{5 + (idx % 5)}'
                        elif "interval" in p_lower: val = f'6'
                        elif p == primary_key or "id" in p_lower: val = f'{idx}'
                        else: val = f'{idx}'
                    elif ptype == "boolean":
                        val = "true"
                    else: 
                        val = json.dumps(f"{p}_{idx}")
                        
                    declarations.append(f'  let {sanitized} = {val};')
                else:
                    declarations.append(f'  let {sanitized}; // Resolved Dependency')
            return "\n".join(declarations)

        def get_args_vars():
            return ", ".join([sanitize_param(p) for p in sig_params])

        map_vars_code = []
        for p in sig_params:
             safe_p = sanitize_param(p)
             json_key = json.dumps(p)
             map_vars_code.append(f'    let {safe_p} = (e.data.parameters && e.data.parameters[{json_key}]) ? e.data.parameters[{json_key}] : e.data[{json_key}];')

        barrier_code = []
        if deps:
            barrier_code.append('  // Dependency Barrier')
            barrier_code.append('  let deps = {};')
            for target_ent, var_name in deps:
                 safe_target_ent = sanitize_param(target_ent)
                 barrier_code.append(f'  deps["{sanitize_param(var_name)}"] = matchAny{safe_target_ent}Added();')
            pk_map_str = json.dumps(story_pk_map)
            barrier_code.append(f'  let pkMap = {pk_map_str};')
            barrier_code.append('  let captured = resolveDependencies(deps, pkMap);')
            for target_ent, var_name in deps:
                sanitized = sanitize_param(var_name)
                barrier_code.append(f'  {sanitized} = captured["{sanitized}"];')
        
        barrier_str = "\n".join(barrier_code)

        if add_fn and del_fn:
            for i in range(1, 4):
                story_id = global_base_id + (i * 10)
                story_name = f"crud:{name}:linear:{i}"
                
                lines.append(f'// Story: {story_name}')
                lines.append(f'bthread("{story_name}", function () {{')
                lines.append(get_vars(story_id))
                if barrier_str: lines.append(barrier_str)
                lines.append(f'  {add_fn}({get_args_vars()});')
                
                if can_fully_test:
                    lines.append(f'  {try_add_fn}({get_args_vars()});')
                    lines.append(f'  {ver_ex_fn}({get_args_vars()});')
                    if upd_fn: lines.append(f'  {upd_fn}({get_args_vars()});')
                    lines.append(f'  {del_fn}({get_args_vars()});')
                    lines.append(f'  {try_del_fn}({get_args_vars()});')
                    lines.append(f'  {ver_ne_fn}({get_args_vars()});')
                
                lines.append('});')
                lines.append('')

            if can_fully_test:
                lines.append(f'// Monitor: {name} Verification')
                lines.append(f'bthread("monitor:{name}", function () {{')
                lines.append('  while (true) {')
                lines.append(f'    let e = bp.sync({{ waitFor: {match_add_any}() }});') 
                lines.append("\n".join(map_vars_code))
                args_str = get_args_vars()
                lines.append(f'    // Block Deletion while Verifying Existence')
                lines.append(f'    block({match_del_specific}({args_str}), function() {{')
                lines.append(f'        {ver_ex_fn}({args_str});') 
                lines.append(f'    }});')
                lines.append('  }')
                lines.append('});')
                lines.append('')

        global_base_id += 50

    ensure_dir(out_dir)
    (out_dir / f"stories.{sut_name}.js").write_text("\n".join(lines), encoding="utf-8")