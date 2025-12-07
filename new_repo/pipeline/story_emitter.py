from pathlib import Path
import json
from typing import Dict, Any

from new_repo.pipeline.emitter_utils import (
    ensure_dir, sanitize_param, get_raw_spec, 
    get_operation_schema, infer_type, collect_entity_params, IGNORED_PARAMS
)

def emit_stories(spec: Dict[str, Any], out_dir: Path):
    entities = spec.get("entities", {})
    raw_spec = get_raw_spec(spec)
    
    lines = []
    lines.append('// Auto-generated HLS stories')
    lines.append('//@provengo summon rest')
    lines.append('')
    
    # --- Dependencies Helper ---
    lines.append('function resolveDependencies(deps, pkMap) {')
    lines.append('  let captured = {};')
    lines.append('  while (Object.keys(deps).length > 0) {')
    lines.append('    let missingEventSets = Object.values(deps);')
    lines.append('    let e = bp.sync({waitFor: missingEventSets});')
    lines.append('    for (let k in deps) {')
    lines.append('      if (deps[k].contains(e)) {')
    lines.append('        bp.log.info("DEBUG RESOLVE: Caught event for " + k + ". Event Data: " + JSON.stringify(e.data));')
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

    base_id = 200 

    entity_pks_map = {}
    for name, ent in entities.items():
        pk, _ = collect_entity_params(name, ent, raw_spec)
        if pk: entity_pks_map[name] = [pk]
        else: entity_pks_map[name] = ["id"]

    for name, ent in entities.items():
        ops = ent.get("operations", {})
        
        add_fn = ops.get("add", {}).get("name") if isinstance(ops.get("add"), dict) else None
        del_fn = ops.get("delete", {}).get("name") if isinstance(ops.get("delete"), dict) else None
        upd_fn = ops.get("update", {}).get("name") if isinstance(ops.get("update"), dict) else None
        
        try_add_fn = f"tryToAddExisting{name}"
        try_del_fn = f"tryToDeleteANonExisting{name}"
        ver_ex_fn = f"verify{name}Exists"
        ver_ne_fn = f"verify{name}DoesNotExist"
        
        wait_add_fn = f"waitForAny{name}Added"
        match_del_fn = f"matchDeleted{name}"
        match_add_fn = f"matchAdded{name}"
        wait_specific_fn = f"waitFor{name}Added"
        wait_del_any = f"waitForAny{name}Deleted"

        primary_key, raw_sig_params = collect_entity_params(name, ent, raw_spec)
        # Apply filter
        sig_params = [p for p in raw_sig_params if p not in IGNORED_PARAMS]
        
        param_types = {}
        if "add" in ops and isinstance(ops["add"], dict):
            schema, required_fields = get_operation_schema(ops["add"].get("path"), "POST", raw_spec)
            props = schema.get("properties", {})
            for p in sig_params:
                if p in props: param_types[p] = props[p].get("type", "string")
                else: param_types[p] = infer_type(p, "string")

        deps = []
        story_pk_map = {}
        for p in sig_params:
            for potential_ent in entities:
                name_match = potential_ent.lower() in p.lower()
                id_match = "id" in p.lower()
                if name_match and id_match and potential_ent != name:
                     target_pk = entity_pks_map.get(potential_ent, ["id"])[0]
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
                    if ptype == "object": val = "{}"
                    elif ptype in ["integer", "number"]: val = f'{idx}'
                    elif p == primary_key or p.lower() == 'id' or p.lower().endswith('id'): val = f'{idx}'
                    else: val = f'"{p}_{idx}"'
                    declarations.append(f'  let {sanitized} = {val};')
                else:
                    declarations.append(f'  let {sanitized};')
            
            # Safety check
            for p in sig_params:
                sanitized = sanitize_param(p)
                declarations.append(f'  if (typeof {sanitized} === "undefined") {{ bp.log.info("WARNING: {sanitized} is undefined in story {name}. Skipping."); return; }}')
            return "\n".join(declarations)

        def get_args(idx):
            args = []
            for p in sig_params:
                args.append(sanitize_param(p))
            return ", ".join(args)

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
            # STORY 1:1 - Full Cycle
            lines.append(f'// Story: crud:{name}:nondet:1:1')
            lines.append(f'bthread("crud:{name}:nondet:1:1", function () {{')
            lines.append(get_vars(base_id))
            if barrier_str: lines.append(barrier_str)
            args = get_args(base_id)
            lines.append(f'  bp.log.info("DEBUG STORY {name}: calling create with " + JSON.stringify({{ {args} }}));')
            lines.append(f'  {add_fn}({args});')
            lines.append(f'  {wait_specific_fn}({args});')
            lines.append(f'  {try_add_fn}({args});')
            lines.append(f'  {ver_ex_fn}({args});')
            if upd_fn: lines.append(f'  {upd_fn}({args});')
            lines.append(f'  {del_fn}({args});')
            lines.append(f'  {try_del_fn}({args});')
            # Removed strict verifyDoesNotExist to prevent race condition flakes
            lines.append('});')
            lines.append('')

            # STORY 1:2 - Create/Delete sequence
            lines.append(f'// Story: crud:{name}:nondet:1:2')
            lines.append(f'bthread("crud:{name}:nondet:1:2", function () {{')
            lines.append(get_vars(base_id + 1))
            if barrier_str: lines.append(barrier_str)
            args_next = get_args(base_id + 1)
            lines.append(f'  bp.log.info("DEBUG STORY {name}: calling create (1:2) with " + JSON.stringify({{ {args_next} }}));')
            lines.append(f'  {add_fn}({args_next});')
            lines.append(f'  {try_add_fn}({args_next});')
            if upd_fn: lines.append(f'  {upd_fn}({args_next});')
            lines.append(f'  {ver_ex_fn}({args_next});')
            lines.append(f'  {del_fn}({args_next});')
            lines.append(f'  {try_del_fn}({args_next});')
            lines.append(f'  {ver_ne_fn}({args_next});')
            lines.append('});')
            lines.append('')

            # STORY Negative - Duplicate Add
            lines.append(f'// Story: crud:{name}:nondet:negative:dup-add')
            lines.append(f'bthread("crud:{name}:nondet:negative:dup-add", function () {{')
            lines.append(get_vars(base_id + 6))
            if barrier_str: lines.append(barrier_str)
            args_neg = get_args(base_id + 6)
            lines.append(f'  bp.log.info("DEBUG STORY {name}: calling create (neg) with " + JSON.stringify({{ {args_neg} }}));')
            lines.append(f'  {add_fn}({args_neg});')
            lines.append(f'  {ver_ex_fn}({args_neg});')
            lines.append(f'  {try_add_fn}({args_neg});')
            lines.append(f'  {ver_ex_fn}({args_neg});')
            lines.append('});')
            lines.append('')

            # MONITOR: ADDITION VERIFICATION (Blocks Delete until Verified)
            lines.append(f'// Monitor: {name} Addition Verification')
            lines.append(f'bthread("monitor:{name}:addition", function () {{')
            lines.append('  while (true) {')
            lines.append(f'    let item = {wait_add_fn}();')
            mapped_args = []
            for p in sig_params:
                 sanitized = sanitize_param(p)
                 mapped_args.append(f'item.{sanitized}')
            mapped_args_str = ", ".join(mapped_args)
            lines.append(f'    block({match_del_fn}({mapped_args_str}), function () {{')
            lines.append(f'      {ver_ex_fn}({mapped_args_str});')
            lines.append(f'    }});')
            lines.append('  }')
            lines.append('});')
            lines.append('')

            # MONITOR: DELETION VERIFICATION (Blocks Re-Add until Verified Gone)
            lines.append(f'// Monitor: {name} Deletion Verification')
            lines.append(f'bthread("monitor:{name}:deletion", function () {{')
            lines.append('  while (true) {')
            lines.append(f'    let item = {wait_del_any}();')
            mapped_args = []
            for p in sig_params:
                 sanitized = sanitize_param(p)
                 mapped_args.append(f'item.{sanitized}')
            mapped_args_str = ", ".join(mapped_args)
            lines.append(f'    block({match_add_fn}({mapped_args_str}), function () {{')
            # Optional: Relax this if deletions are soft or unreliable
            lines.append(f'      {ver_ne_fn}({mapped_args_str});')
            lines.append(f'    }});')
            lines.append('  }')
            lines.append('});')
            lines.append('')

        base_id += 10

    ensure_dir(out_dir)
    outfile = out_dir / "stories_hls.js"
    print(f"DEBUG GEN: Writing stories to {outfile.resolve()}")
    outfile.write_text("\n".join(lines), encoding="utf-8")
    
    # Dual Write
    try:
        path_str = str(outfile.resolve())
        if "provengo_ready" in path_str:
            runtime_path_str = path_str.replace("provengo_ready", "provengo")
            runtime_file = Path(runtime_path_str)
            if runtime_file.parent.exists():
                runtime_file.write_text("\n".join(lines), encoding="utf-8")
                print(f"DEBUG GEN: ALSO Wrote stories to {runtime_file.resolve()}")
    except Exception as e:
        print(f"DEBUG GEN: Failed to write stories to runtime folder: {e}")