from pathlib import Path
import json
from typing import Dict, Any
from new_repo.pipeline.emitter_utils import (
    ensure_dir, sanitize_param, get_raw_spec, 
    get_operation_schema, infer_type, collect_entity_params
)

def _get_op_event_name(op_data):
    description = op_data.get("descriptionTemplate", "Unknown operation.")
    return f'bp.Event("Done: {description}")'

def emit_stories(spec: Dict[str, Any], out_dir: Path, sut_name: str):
    entities = spec.get("entities", {})
    dependencies = spec.get("dependencies", {}) 
    raw_spec = get_raw_spec(spec)
    
    # Identify "Parent" entities that have dependents
    has_dependents = set()
    for child, parents in dependencies.items():
        for p in parents:
            has_dependents.add(p)

    lines = []
    lines.append(f'// Auto-generated stories for {sut_name}')
    lines.append('//@provengo summon rest')
    lines.append('')
    
    harmful_events = []
    for name, ent in entities.items():
        ops = ent.get("operations", {})
        for op_type, op_data in ops.items():
            path = op_data.get("path", "")
            method = op_data.get("method", "").upper()
            if method == "DELETE" and "{" not in path:
                event_name = _get_op_event_name(op_data)
                harmful_events.append(event_name)
    
    harmful_event_set_name = "DESTRUCTIVE_DELETE_EVENTS"
    if harmful_events:
        lines.append(f'// EventSet of all known collection-root DELETE events')
        lines.append(f'const {harmful_event_set_name} = bp.EventSet("DestructiveDeleteEvents", function(e) {{')
        event_names_list = [e.split('Done: ')[1].strip().strip(')"') for e in harmful_events]
        lines.append(f'    // Includes: {", ".join(event_names_list)}')
        lines.append('    const destructiveEvents = [')
        for event in harmful_events:
            description_part = event.split('Done: ')[1].strip().strip(')"') 
            lines.append(f'        "{description_part}",')
        lines.append('    ];')
        lines.append('    const eventName = e.name.replace("Done: ", "");')
        lines.append('    return destructiveEvents.some(d => eventName.startsWith(d.trim()));')
        lines.append('});')
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
        if pk: entity_pks_map[name] = pk

    for name, ent in entities.items():
        safe_entity_name = sanitize_param(name)
        
        ops = ent.get("operations", {})
        add_op = ops.get("add")
        if not add_op: continue
        
        has_add = "add" in ops
        has_get = "get" in ops
        has_del = "delete" in ops
        
        spec_flag = add_op.get("x-generate-full-story")
        if spec_flag is False:
            is_full_story = False
        else:
            is_full_story = has_add and has_get and has_del
        
        primary_key, sig_params = collect_entity_params(name, ent, raw_spec)
        
        def get_safe_fn(op_key):
            raw_fn = ops.get(op_key, {}).get("name")
            return sanitize_param(raw_fn) if raw_fn else None

        add_fn = get_safe_fn("add")
        upd_fn = get_safe_fn("update")
        del_fn = get_safe_fn("delete")
        del_op = ops.get("delete", {})
        
        is_collection_root_delete = False
        is_primary_delete_batch = False # Flag to detect if 'delete' op is batch
        
        if del_op:
            path = del_op.get("path", "")
            path_has_params = "{" in path and "}" in path
            params_has_pk = primary_key in del_op.get("params", [])
            
            # Check if the PRIMARY delete operation (used for tryToDelete...) is batch
            if not (path_has_params or params_has_pk):
                 is_primary_delete_batch = True
            
            # Now determine the 'del_fn' to use for the happy path
            if path_has_params or params_has_pk:
                is_collection_root_delete = False
            else:
                is_collection_root_delete = True
                del_fn_single = None
                for key, val in ops.items():
                    val_path = val.get("path", "")
                    if "delete" in key.lower():
                        if (primary_key in val.get("params", [])) or ("{" in val_path):
                             del_fn_single = sanitize_param(val["name"])
                             break
                
                if del_fn_single:
                    del_fn = del_fn_single
                    is_collection_root_delete = False 
                else:
                    del_fn = None 
        
        item_get_op = ops.get("get")
        has_specific_get = item_get_op and "{" in item_get_op.get("path", "")
        
        has_verify = has_specific_get
        has_delete = (del_fn is not None)
        
        try_add_fn = f"tryToAddExisting{safe_entity_name}"
        try_del_fn = f"tryToDeleteANonExisting{safe_entity_name}"
        ver_ex_fn = f"verify{safe_entity_name}Exists"
        ver_ne_fn = f"verify{safe_entity_name}DoesNotExist"
        match_add_any = f"matchAny{safe_entity_name}Added"
        match_del_specific = f"matchDeleted{safe_entity_name}"
        
        param_types = {}
        if isinstance(add_op, dict):
            llm_types = add_op.get("paramTypes", {})
            for p in sig_params:
                param_types[p] = llm_types.get(p, "string")

        deps = []
        story_pk_map = {}
        parent_entities = dependencies.get(name, []) or []
        
        for parent in parent_entities:
            target_param = None
            parent_pk = entity_pks_map.get(parent, "id")
            
            parent_clean = parent.lower()
            if parent_clean.endswith("s") and not parent_clean.endswith("ss"):
                parent_clean = parent_clean[:-1]

            matches = []
            for p in sig_params:
                if p == "id": continue 
                if parent_clean in p.lower():
                    matches.append(p)
            
            if matches:
                target_param = matches[0]
                for m in matches:
                    lower_m = m.lower()
                    if lower_m.endswith("id") or lower_m.endswith("_id"):
                        target_param = m
                        break

            if target_param and parent in entity_pks_map:
                 deps.append((parent, target_param))
                 story_pk_map[target_param] = parent_pk

        def get_vars(idx):
            declarations = []
            
            known_bool_fields = ["hidden", "singleton", "versioning", "locked", "readonly", "enabled", "required", "system", "active"]

            for p in sig_params:
                auth_params = [
                    "token", "api_key", "apikey", "authorization", "auth",
                    "client_id", "client_secret", "access_token", "refresh_token",
                    "session", "session_id", "cookie", "x_api_key", "x_auth_token"
                ]
                if p.lower() in auth_params: continue

                is_dep = False
                for d_ent, d_var in deps:
                    if d_var == p: is_dep = True
                
                sanitized = sanitize_param(p)
                
                if not is_dep or p == primary_key:
                    ptype = param_types.get(p, "string").lower()
                    
                    if p.lower() in known_bool_fields:
                        ptype = "boolean"
                    
                    if ptype in ["integer", "number", "int", "float", "double"]:
                         val = f'{idx}00000 + Math.floor(Math.random() * 100000)'
                    elif ptype == "boolean":
                        val = "true"
                    else:
                         if p in ["data", "name", "key"] or "name" in p.lower():
                            val = f'"{p}_{idx}_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000)'
                         else:
                            val = f'"{p}_{idx}_" + Math.floor(Math.random() * 10000)'
                                
                    declarations.append(f'  let {sanitized} = {val};')
                else:
                    declarations.append(f'  let {sanitized}; // Resolved Dependency')
            return "\n".join(declarations)

        map_vars_code = []
        for p in sig_params:
             safe_p = sanitize_param(p)
             json_key = json.dumps(p)
             map_vars_code.append(f'    let {safe_p} = (e.data.parameters && e.data.parameters[{json_key}]) ? e.data.parameters[{json_key}] : e.data[{json_key}];')

        if add_fn:
            for i in range(1, 4):
                story_id = global_base_id + (i * 10)
                story_name = f"crud:{name}:linear:{i}"
                
                lines.append(f'// Story: {story_name}')
                lines.append(f'bthread("{story_name}", function () {{')
                lines.append(get_vars(story_id))
                
                if deps:
                    lines.append('  // Ensure dependencies are resolved before starting CRUD')
                    lines.append('  let deps = {};')
                    for target_ent, var_name in deps:
                        sanitized = sanitize_param(var_name)
                        lines.append(f'  deps["{sanitized}"] = matchAny{sanitize_param(target_ent)}Added();')
                    
                    lines.append(f'  let pkMap = {json.dumps(story_pk_map)};')
                    lines.append('  let captured = resolveDependencies(deps, pkMap);') 
                    lines.append(f'  bp.log.info(`Dependencies executed: ${{Object.keys(captured).join(", ")}}. Continuing story.`);')

                    for d_ent, var_name in deps:
                        sanitized = sanitize_param(var_name)
                        lines.append(f'  {sanitized} = captured["{sanitized}"];') 
                
                args_to_pass = ", ".join([sanitize_param(p) for p in sig_params if p.lower() not in ["token", "api_key", "authorization", "auth", "client_id", "client_secret"]])
                
                if harmful_events and has_delete and is_collection_root_delete:
                     lines.append(f'  // Guard against destructive parallel batch delete event')
                     lines.append(f'  block({harmful_event_set_name}, function() {{')
                
                lines.append(f'  {add_fn}({args_to_pass});')
                
                if is_full_story:
                    if has_verify:
                        lines.append(f'  {ver_ex_fn}({args_to_pass});')
                    
                    if upd_fn:
                        lines.append(f'  {upd_fn}({args_to_pass});')
                    
                    if has_delete:
                        if name in has_dependents:
                             lines.append(f'  // Skip delete for {name} to prevent foreign key errors (has active dependents)')
                        else:
                             lines.append(f'  {del_fn}({args_to_pass});')
                             if has_verify:
                                 # --- FIX: Only execute negative delete verification if primary delete is NOT batch ---
                                 if not is_primary_delete_batch:
                                     lines.append(f'  {try_del_fn}({args_to_pass});')
                                 # -------------------------------------------------------------------------------------
                                 lines.append(f'  {ver_ne_fn}({args_to_pass});')
                
                if harmful_events and has_delete and is_collection_root_delete:
                     lines.append(f'  }});')
                
                lines.append('});')
                lines.append('')

            if has_verify and is_full_story:
                lines.append(f'// Monitor: {name} Verification')
                lines.append(f'bthread("monitor:{name}", function () {{')
                lines.append('  while (true) {')
                lines.append(f'    let e = bp.sync({{ waitFor: {match_add_any}() }});') 
                lines.append("\n".join(map_vars_code))
                
                args_to_pass = ", ".join([sanitize_param(p) for p in sig_params if p.lower() not in ["token", "api_key", "authorization", "auth", "client_id", "client_secret"]])

                if has_delete and name not in has_dependents:
                    lines.append(f'    // Block Deletion while Verifying Existence')
                    lines.append(f'    block(matchDeleted{safe_entity_name}({args_to_pass}), function() {{')
                    lines.append(f'      bp.log.info(`Monitor {name}: Verifying persistence of ID ${{id}} inside deletion block.`);') 
                    lines.append(f'        {ver_ex_fn}({args_to_pass});') 
                    lines.append(f'    }});')
                else:
                     lines.append(f'    // Monitor {name}: Verifying existence (Deletion skipped due to dependencies)') 
                     lines.append(f'    {ver_ex_fn}({args_to_pass});')

                lines.append('  }')
                lines.append('});')
                lines.append('')

        global_base_id += 50

    ensure_dir(out_dir)
    (out_dir / f"stories.{sut_name}.js").write_text("\n".join(lines), encoding="utf-8")