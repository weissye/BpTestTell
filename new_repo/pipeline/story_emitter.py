from pathlib import Path
import json
from typing import Dict, Any
from new_repo.pipeline.emitter_utils import (
    ensure_dir, sanitize_param, get_raw_spec, 
    get_operation_schema, infer_type, collect_entity_params
)

# Function to safely get the event name based on the operation's description
def _get_op_event_name(op_data):
    description = op_data.get("descriptionTemplate", "Unknown operation.")
    # The event name is always "Done: " + description
    return f'bp.Event("Done: {description}")'

def emit_stories(spec: Dict[str, Any], out_dir: Path, sut_name: str):
    entities = spec.get("entities", {})
    dependencies = spec.get("dependencies", {}) 
    raw_spec = get_raw_spec(spec)
    
    lines = []
    lines.append(f'// Auto-generated stories for {sut_name}')
    lines.append('//@provengo summon rest')
    lines.append('')
    
    # --- 1. GENERATE HARMFUL EVENT SET (For Concurrency Guard) ---
    harmful_events = []
    for name, ent in entities.items():
        ops = ent.get("operations", {})
        for op_type, op_data in ops.items():
            path = op_data.get("path", "")
            method = op_data.get("method", "").upper()

            # Rule: If method is DELETE and path does not contain /{id} (Collection Root Delete)
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
    # -------------------------------------------------------------------

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
        
        is_full_story = add_op.get("x-generate-full-story", True)
        
        # FIX: Initialize can_fully_test to the resource classification result
        can_fully_test = is_full_story 
        
        def get_safe_fn(op_key):
            raw_fn = ops.get(op_key, {}).get("name")
            return sanitize_param(raw_fn) if raw_fn else None

        add_fn = get_safe_fn("add")
        upd_fn = get_safe_fn("update")

        # --- SMART DELETE SELECTION ---
        del_fn = get_safe_fn("delete")
        del_op = ops.get("delete", {})
        
        is_collection_root_delete = False
        
        # Check if the default delete is a Batch Delete
        if del_op and "id" not in del_op.get("params", []):
            is_collection_root_delete = True
            
            # 1. Search for a safer, single-item delete operation to use in the story.
            del_fn_single = None
            for key, val in ops.items():
                if "delete" in key.lower() and "id" in val.get("params", []):
                     del_fn_single = sanitize_param(val["name"])
                     break

            # Use the single delete if found. If not found, skip full test.
            if del_fn_single:
                del_fn = del_fn_single
            else:
                can_fully_test = False # Cannot safely cleanup if only batch delete exists
        
        primary_key, sig_params = collect_entity_params(name, ent, raw_spec)

        item_get_op = ops.get("get")
        has_specific_get = item_get_op and "{" in item_get_op.get("path", "")
        
        # Final check on testability after smart selection
        can_fully_test = can_fully_test and has_specific_get and (del_fn is not None)

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
            for p in sig_params:
                if parent.lower() in p.lower() or p == "id": 
                    target_param = p
                    break
            if target_param and parent in entity_pks_map:
                 deps.append((parent, target_param))
                 story_pk_map[target_param] = parent_pk

        def get_vars(idx):
            declarations = []
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
                
                if not is_dep:
                    if p == "id":
                        val = f'"id_{idx}_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000)'
                    else:
                        ptype = param_types.get(p, "string").lower()
                        if ptype in ["integer", "number", "int", "float", "double"]:
                            if "year" in p.lower(): val = f'{2020 + (idx % 5)}'
                            elif "mileage" in p.lower(): val = f'{10000 + idx}'
                            elif "bay" in p.lower(): val = f'{5 + (idx % 5)}'
                            elif "interval" in p.lower(): val = f'6'
                            elif p == primary_key or "id" in p.lower(): val = f'{idx}'
                            else: val = f'{idx}'
                        elif ptype == "boolean":
                            val = "true"
                        else: 
                            # CRITICAL FIX: Ensure non-ID payload fields (like 'data' in Flow) are unique
                            if p in ["data", "name", "key"]:
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
                
                # --- DEPENDENCY INJECTION FIX: Consolidate resolution into a single block ---
                if deps:
                    lines.append('  // Ensure dependencies are resolved before starting CRUD')
                    lines.append('  let deps = {};')
                    for target_ent, var_name in deps:
                        sanitized = sanitize_param(var_name)
                        lines.append(f'  deps["{sanitized}"] = matchAny{sanitize_param(target_ent)}Added();')
                    
                    lines.append(f'  let pkMap = {json.dumps(story_pk_map)};')
                    # FIX: Define 'captured' in the same scope where it is used (inside the bthread)
                    lines.append('  let captured = resolveDependencies(deps, pkMap);') 
                    lines.append(f'  bp.log.info(`Dependencies executed: ${{Object.keys(captured).join(", ")}}. Continuing story.`);')

                    # Extracting variables (using the variable 'captured' defined immediately above)
                    for d_ent, var_name in deps:
                        sanitized = sanitize_param(var_name)
                        lines.append(f'  {sanitized} = captured["{sanitized}"];') 
                # --- END DEPENDENCY INJECTION FIX ---
                
                args_to_pass = ", ".join([sanitize_param(p) for p in sig_params if p.lower() not in ["token", "api_key", "authorization", "auth", "client_id", "client_secret"]])
                
                # --- LOCAL EXECUTION GUARD START ---
                if harmful_events and can_fully_test and is_collection_root_delete:
                    # Guard the linear execution against all harmful batch delete events.
                     lines.append(f'  // Guard against destructive parallel batch delete event')
                     lines.append(f'  block({harmful_event_set_name}, function() {{')
                
                lines.append(f'  {add_fn}({args_to_pass});')
                
                if can_fully_test:
                    # Removed tryToAddExisting step to eliminate the 409 conflict
                    lines.append(f'  {ver_ex_fn}({args_to_pass});')
                    
                    if upd_fn: lines.append(f'  {upd_fn}({args_to_pass});')
                    if del_fn: lines.append(f'  {del_fn}({args_to_pass});')
                    lines.append(f'  {try_del_fn}({args_to_pass});')
                    lines.append(f'  {ver_ne_fn}({args_to_pass});')
                
                if harmful_events and can_fully_test and is_collection_root_delete:
                     lines.append(f'  }});')
                # --- LOCAL EXECUTION GUARD END ---
                
                lines.append('});')
                lines.append('')

            if can_fully_test:
                lines.append(f'// Monitor: {name} Verification')
                lines.append(f'bthread("monitor:{name}", function () {{')
                lines.append('  while (true) {')
                lines.append(f'    let e = bp.sync({{ waitFor: {match_add_any}() }});') 
                lines.append("\n".join(map_vars_code))
                
                args_to_pass = ", ".join([sanitize_param(p) for p in sig_params if p.lower() not in ["token", "api_key", "authorization", "auth", "client_id", "client_secret"]])

                lines.append(f'    // Block Deletion while Verifying Existence')
                lines.append(f'    block(matchDeleted{safe_entity_name}({args_to_pass}), function() {{')
                # DEBUG PRINT 1: Inside the monitor block (using bp.log.info)
                lines.append(f'      bp.log.info(`Monitor {name}: Verifying persistence of ID ${{id}} inside deletion block.`);') 
                lines.append(f'        {ver_ex_fn}({args_to_pass});') 
                lines.append(f'    }});')
                lines.append('  }')
                lines.append('});')
                lines.append('')

        global_base_id += 50

    ensure_dir(out_dir)
    (out_dir / f"stories.{sut_name}.js").write_text("\n".join(lines), encoding="utf-8")