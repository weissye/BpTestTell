from pathlib import Path
import json
from typing import Dict, Any
from new_repo.pipeline.emitter_utils import (
    ensure_dir, sanitize_param, get_raw_spec, 
    get_operation_schema, infer_type, collect_entity_params
)

def emit_stories(spec: Dict[str, Any], out_dir: Path, sut_name: str):
    entities = spec.get("entities", {})
    raw_spec = get_raw_spec(spec)
    
    lines = []
    lines.append(f'// Auto-generated stories for {sut_name}')
    lines.append('//@provengo summon rest')
    lines.append('')
    
    # --- Helper: Dependency Resolution ---
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

    # --- Step 1: Pre-calculate Primary Keys for ALL Entities ---
    # This allows us to know that "Cars" uses "vin" without hardcoding "vin"
    entity_pks_map = {}
    for name, ent in entities.items():
        pk, _ = collect_entity_params(name, ent, raw_spec)
        if pk: 
            entity_pks_map[name] = pk

    for name, ent in entities.items():
        ops = ent.get("operations", {})
        add_fn = ops.get("add", {}).get("name") if isinstance(ops.get("add"), dict) else None
        del_fn = ops.get("delete", {}).get("name") if isinstance(ops.get("delete"), dict) else None
        upd_fn = ops.get("update", {}).get("name") if isinstance(ops.get("update"), dict) else None
        
        try_add_fn = f"tryToAddExisting{name}"
        try_del_fn = f"tryToDeleteANonExisting{name}"
        ver_ex_fn = f"verify{name}Exists"
        ver_ne_fn = f"verify{name}DoesNotExist"
        
        match_add_any = f"matchAny{name}Added"
        match_del_specific = f"matchDeleted{name}"
        
        primary_key, sig_params = collect_entity_params(name, ent, raw_spec)
        
        # --- Type Inference ---
        param_types = {}
        if "add" in ops and isinstance(ops["add"], dict):
            schema, _ = get_operation_schema(ops["add"].get("path"), "POST", raw_spec)
            props = schema.get("properties", {})
            for p in sig_params: param_types[p] = props.get(p, {}).get("type", infer_type(p))

        # --- Step 2: Generic Dependency Detection ---
        deps = []
        story_pk_map = {}
        
        for p in sig_params:
            for potential_ent in entities:
                if potential_ent == name: continue # Don't depend on self
                
                # Get the REAL Primary Key of the potential target (e.g., "vin")
                target_pk = entity_pks_map.get(potential_ent)
                if not target_pk: continue

                # Normalize strings for comparison
                p_lower = p.lower()
                ent_lower = potential_ent.lower()
                pk_lower = target_pk.lower()
                
                # Handle Plural/Singular (e.g. "Cars" entity vs "car" parameter)
                ent_singular = ent_lower[:-1] if ent_lower.endswith('s') else ent_lower

                # --- THE GENERIC HEURISTIC ---
                # A parameter is a dependency IF:
                # 1. It contains the Entity Name (e.g. "car" in "carVin")
                #    AND
                # 2. It contains the Entity's PK (e.g. "vin" in "carVin")
                #    OR the Entity's PK is generic "id" and param has "id" (e.g. "userId" vs "id")
                
                name_match = ent_singular in p_lower
                pk_match = pk_lower in p_lower or (pk_lower == "id" and "id" in p_lower)
                
                if name_match and pk_match:
                     deps.append((potential_ent, p))
                     story_pk_map[p] = target_pk

        def get_vars(idx):
            declarations = []
            for p in sig_params:
                is_dep = False
                for d_ent, d_var in deps:
                    if d_var == p: is_dep = True
                
                sanitized = sanitize_param(p)
                if not is_dep:
                    ptype = param_types.get(p, "string")
                    p_lower = p.lower()
                    
                    if ptype in ["integer", "number"]:
                        if "year" in p_lower: val = f'{2020 + (idx % 5)}'
                        elif "mileage" in p_lower: val = f'{10000 + idx}'
                        elif "bay" in p_lower: val = f'{5 + (idx % 5)}'
                        elif "interval" in p_lower: val = f'6'
                        elif p == primary_key or "id" in p_lower: val = f'{idx}'
                        else: val = f'{idx}'
                    elif ptype == "boolean":
                        val = "true"
                    else: 
                        val = f'"{p}_{idx}"'
                        
                    declarations.append(f'  let {sanitized} = {val};')
                else:
                    declarations.append(f'  let {sanitized}; // Resolved Dependency')
            return "\n".join(declarations)

        def get_args_vars():
            return ", ".join([sanitize_param(p) for p in sig_params])

        map_vars_code = []
        for p in sig_params:
             map_vars_code.append(f'    let {sanitize_param(p)} = (e.data.parameters && e.data.parameters.{p}) ? e.data.parameters.{p} : e.data.{p};')

        barrier_code = []
        if deps:
            barrier_code.append('  // Dependency Barrier')
            barrier_code.append('  let deps = {};')
            for target_ent, var_name in deps:
                 barrier_code.append(f'  deps["{sanitize_param(var_name)}"] = matchAny{target_ent}Added();')
            
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
                lines.append(f'  {try_add_fn}({get_args_vars()});')
                lines.append(f'  {ver_ex_fn}({get_args_vars()});')
                if upd_fn: lines.append(f'  {upd_fn}({get_args_vars()});')
                lines.append(f'  {del_fn}({get_args_vars()});')
                lines.append(f'  {try_del_fn}({get_args_vars()});')
                lines.append(f'  {ver_ne_fn}({get_args_vars()});')
                lines.append('});')
                lines.append('')

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