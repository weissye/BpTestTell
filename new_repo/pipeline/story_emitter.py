import json
import re
from pathlib import Path
from typing import Dict, Any, List
from new_repo.pipeline.emitter_utils import (
    ensure_dir, sanitize_param, get_raw_spec, 
    collect_entity_params
)

def _resolve_entity_name(name, entities):
    if not name: return None
    print(f"   [DEBUG] Attempting to resolve entity: {name}") # Validation Print
    if name in entities: return name
    for key in entities.keys():
        if name.lower() in key.lower(): 
            print(f"   [DEBUG] Resolved '{name}' to Technical Key: '{key}'") # Validation Print
            return key
    print(f"   [DEBUG] ! WARNING: Could not resolve entity: {name}") # Warning Print
    return None


def _get_merged_param_types(ent_data):
    """Unified Helper with Debug: Merges parameter types across all operations."""
    merged_types, merged_formats = {}, {}
    for op in ent_data.get("operations", {}).values():
        if isinstance(op, dict):
            t = op.get("paramTypes") or op.get("types") or {}
            f = op.get("paramFormats") or op.get("formats") or {}
            merged_types.update(t if isinstance(t, dict) else {})
            merged_formats.update(f if isinstance(f, dict) else {})
    
    if merged_types:
        print(f"   [DEBUG] Merged Types found: {list(merged_types.keys())}") # DEBUG PRINT
    return merged_types, merged_formats

def _generate_entity_vars(name, entities, raw_spec, prefix, suffix, deps, merged_types, merged_formats):
    pk, params = collect_entity_params(name, entities[name], raw_spec)
    
    # 1. FIX: Treat suffix as a base ID to prevent value collisions
    try:
        base_id = int(suffix)
    except:
        base_id = 1000 # Fallback
    
    lines, args, arg_map = [], [], {}
    for p in params:
        safe_p = sanitize_param(p)
        var_name = f"{safe_p}_{prefix}_{suffix}"
        p_type = str(merged_types.get(p, "string")).lower()
        
        if p in deps: val = f"captured_{suffix}['{p}']"
        elif p == pk or "id" in p.lower():
            # 2. FIX: Add the base_id to the random number to isolate ranges
            val = f"{base_id} + Math.floor(Math.random() * 99)" if p_type in ["integer", "number"] else f"\"{safe_p}_{suffix}_\" + Math.floor(Math.random()*1000)"
        elif p_type in ["integer", "number"]: 
            val = f"{base_id} + Math.floor(Math.random() * 99)"
        else: 
            val = f"\"{safe_p}_{suffix}_\" + Math.floor(Math.random()*1000)"
            
        lines.append(f"  let {var_name} = {val};")
        args.append(var_name); arg_map[p] = var_name
    return lines, args, arg_map, pk, params


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

# FIX: New helper to aggregate types from ALL operations (Add, Get, Update, Delete)
# This solves the issue where params like 'orderId' are only defined in 'Delete' but assumed String by 'Add'.
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
    
    # FIX: Use Merged Types instead of just 'add' types
    merged_types, merged_formats = _get_merged_param_types(entities[ent_name])
    
    vars_code, args, pk, pk_var_name, param_var_map = _generate_entity_vars(
        ent_name, entities, raw_spec, suffix, str(base_id), 
        link_map, merged_types, merged_formats
    )
    
    lines.append(f'  // -> Creating {ent_name}')
    lines.extend(vars_code)
    add_fn = add_op.get("name", f"create{ent_name}")
    
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
    
    # FIX: Use Merged Types
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
    print(f"   > 🔨 Generating stories for {sut_name}...")
    entities = spec.get("entities", {})
    raw_spec = get_raw_spec(spec)
    dependencies = spec.get("dependencies", {})
    if not dependencies: 
        dependencies = _infer_dependencies(entities, raw_spec)
    
    lines = [
        f'// Auto-generated stories for {sut_name}',
        '//@provengo summon rest',
        ''
    ]
    lines.extend(_get_js_resolve_dependencies_fn())
    lines.append('')
    
    # 1. MONITORS (Existence and Absence verification)
    lines.append('// --- Monitors ---')
    for name in entities.keys():
        if not entities[name].get("operations", {}).get("add"): continue
        
        # FIDELITY FIX: Standardized naming (No .capitalize())
        safe_name = sanitize_param(name) 
        
        lines.append(f'// Monitor: {name} Verification (Existence)')
        lines.append(f'bthread("monitor:{name}:exists", function () {{')
        lines.append(f'  while (true) {{')
        lines.append(f'    let e = bp.sync({{ waitFor: matchAny{safe_name}Added() }});')
        
        pk, params = collect_entity_params(name, entities[name], raw_spec)
        extract_lines = []
        js_vars = []
        for p in params:
            safe_p = sanitize_param(p)
            extract_lines.append(f'    let {safe_p} = (e.data.parameters && e.data.parameters["{p}"]) ? e.data.parameters["{p}"] : (e.data["{p}"] || e.data.id);')
            js_vars.append(safe_p)
        
        lines.extend(extract_lines)
        
        if "delete" in entities[name]["operations"]:
            # SYNTAX FIX: Only pass the ID (the first var) to the matcher to prevent malformed strings
            primary_id = js_vars[0] if js_vars else "null"
            lines.append(f'    block(matchDeleted{safe_name}({primary_id}), function() {{ verify{safe_name}Exists({", ".join(js_vars)}); }});')
        else: 
            lines.append(f'    verify{safe_name}Exists({", ".join(js_vars)});')
            
        lines.append(f'  }}')
        lines.append(f'}});')
        lines.append('')

        if "delete" in entities[name]["operations"]:
            lines.append(f'// Monitor: {name} Verification (Absence)')
            lines.append(f'bthread("monitor:{name}:absence", function () {{')
            lines.append(f'  while (true) {{')
            # CALL ALIGNMENT: Call the generic matchAny...Deleted() function
            lines.append(f'    let e = bp.sync({{ waitFor: matchAny{safe_name}Deleted() }});') 
            lines.extend(extract_lines)
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
                else: lines.append(f'  // Skip delete for {name} to prevent foreign key errors')
            lines.append('});')
            lines.append('')
            global_base_id += 10

    # 3. CHAIN LOGIC (Omitted for brevity, keep your existing chain logic here)

    # 4. HYPER-STORIES (Standardized Calls)
    lines.append(_generate_hyper_coordinated_stories(spec, sut_name))
    lines.append(_generate_hyper_negative_stories(spec, sut_name))   
     
    ensure_dir(out_dir)
    (out_dir / f"stories.{sut_name}.js").write_text("\n".join(lines), encoding="utf-8")
    emit_negative_stories(spec, out_dir, sut_name)    
            
def _get_required_fields(ent_name, raw_spec):
    schemas = raw_spec.get("components", {}).get("schemas", {})
    schema = schemas.get(ent_name) or schemas.get(ent_name.rstrip('s'))
    if schema: return schema.get("required", [])
    return []
def emit_negative_stories(spec: Dict[str, Any], out_dir: Path, sut_name: str):
    print(f"   > 😈 Generating evil background agents for {sut_name}...")
    entities = spec.get("entities", {})
    raw_spec = get_raw_spec(spec)
    dependencies = spec.get("dependencies", {})
    arch = spec.get("system_architecture", {})
    masters = arch.get("master_entities", [])
    
    lines = [
        f'// Auto-generated EVIL BACKGROUND AGENTS for {sut_name}',
        '//@provengo summon rest',
        ''
    ]

    for name, ent in entities.items():
        if not ent["operations"].get("add"): continue
        
        # Metadata Setup
        safe_name = sanitize_param(name)
        pk, params = collect_entity_params(name, ent, raw_spec)
        merged_types, merged_formats = _get_merged_param_types(ent)
        
        # TYPE 1: The Persistent Stalker (Multi-Path Reactive Fuzzing)
        # This agent discovers live IDs and attacks them with dirty payloads in a loop.
        # It avoids false positives by calling the 'Rejects' interface.
        lines.append(f'// Agent: Persistent Stalker for {name}')
        lines.append(f'bthread("evil:fuzz:{safe_name}:Stalker", function () {{')
        lines.append('  while (true) {')
        lines.append(f'    // Path 1: Discovery (Stalking live IDs)')
        lines.append(f'    let e = waitFor(matchAny{safe_name}Added());')
        lines.append(f'    let liveId = e.data.{sanitize_param(pk)} || e.data.id || e.data.petId;')
        lines.append('')
        lines.append('    // Path 2: Sequential Corruption (Hitting live ID with dirty payloads)')
        for p in params:
            if p == pk: continue
            t = merged_types.get(p, "string").lower()
            
            # Select evil payloads based on type to trigger validation or logic crashes
            if t in ["integer", "number"]: bad_val = '"INVALID_STRING"'
            elif t == "boolean": bad_val = '"NOT_A_BOOL"'
            elif t == "string": bad_val = '["NOT_A_STRING_ARRAY"]'
            elif t == "array": bad_val = '"NOT_AN_ARRAY"'
            else: bad_val = '666'

            # Constructing the malicious call using valid data for everything but the fuzzed field
            call_args = []
            for arg_p in params:
                if arg_p == p: call_args.append(bad_val)
                elif arg_p == pk: call_args.append("liveId")
                else: 
                    # Use type-appropriate valid placeholders to isolate the error to one field
                    p_t = merged_types.get(arg_p, "string").lower()
                    if p_t in ["integer", "number"]: call_args.append("101")
                    elif p_t == "boolean": call_args.append("true")
                    elif p_t == "array": call_args.append("[]")
                    else: call_args.append(f'"{arg_p}_valid"')
            
            lines.append(f'    // Step: Fuzzing {p}')
            lines.append(f'    verify{safe_name}Rejects({", ".join(call_args)});')
        
        lines.append('  }')
        lines.append('});')
        lines.append('')

        # TYPE 2: The Collision Saboteur (Concurrency Stress)
        # Targeted at Master Entities to trigger database-level crashes (500s)
        if name in masters:
            lines.append(f'// Agent: Identity Collision Saboteur for {name}')
            for i in range(1, 4): # 3-Copy Redundancy for write-contention
                lines.append(f'bthread("evil:collision:{safe_name}:Copy{i}", function () {{')
                lines.append(f'  let staticKey = "STRESS_COLLISION_KEY";')
                
                # Create arguments where the unique key is static across all copies
                collision_args = []
                for p in params:
                    p_t = merged_types.get(p, "string").lower()
                    if p == pk or p.lower() == "username" or p.lower() == "email": 
                        collision_args.append("staticKey")
                    elif p_t in ["integer", "number"]: collision_args.append("999")
                    elif p_t == "boolean": collision_args.append("true")
                    elif p_t == "array": collision_args.append("[]")
                    else: collision_args.append(f'"{p}_val"')

                lines.append(f'  while(true) {{')
                lines.append('    // Path: Simultaneous Write Collision')
                # Use the 'Rejects' interface to avoid failing on the expected 409/400/500
                lines.append(f'    verify{safe_name}Rejects({", ".join(collision_args)});')
                lines.append('  }')
                lines.append('});')
                lines.append('')

    # TYPE 3: The Relational Orphan-Maker (Cross-Path Sabotage)
    # Dynamically targets any entity with a parent dependency to trigger 500s
    for child, parents in dependencies.items():
        for parent in parents:
            safe_child = sanitize_param(child)
            safe_parent = sanitize_param(parent)
            parent_del_op = entities.get(parent, {}).get("operations", {}).get("delete", {}).get("name", f"delete{parent}")

            lines.append(f'// Agent: Orphan-Maker ({child} -> {parent})')
            lines.append(f'bthread("evil:relational:OrphanMaker_{safe_child}", function() {{')
            lines.append('  while(true) {')
            lines.append(f'    // Path 1: Dependency Interception')
            lines.append(f'    let e = waitFor(matchAny{safe_child}Added());')
            lines.append(f'    let pId = e.data.{safe_parent}Id || e.data.id;')
            lines.append('')
            lines.append(f'    // Path 2: Parent Erasure (Breaking Integrity)')
            lines.append(f'    {sanitize_param(parent_del_op)}(pId);')
            lines.append('')
            lines.append(f'    // Path 3: Verification of Chaos')
            lines.append(f'    // Try to interact with the orphan to trigger a backend join-crash')
            lines.append(f'    let childId = e.data.{sanitize_param(pk)} || e.data.id;')
            lines.append(f'    get{safe_child}ById(childId);')
            lines.append('  }')
            lines.append('});')
            lines.append('')

    ensure_dir(out_dir)
    (out_dir / f"negative.{sut_name}.js").write_text("\n".join(lines), encoding="utf-8")
        
    
# --- ADDITIVE: Robust Hyper-Orchestration Emitter ---

# --- story_emitter.py ---

def _generate_hyper_coordinated_stories(spec, sut_name):
    entities = spec.get("entities", {})
    raw_spec = spec.get("original_spec", {})
    arch = spec.get("system_architecture", {})
    agents = arch.get("agent_viewpoints", [])[:6]
    masters = arch.get("master_entities", [])
    primary_master = masters[0] if masters else "Pet"

    output_lines = [f'// --- PHASE 1: GLOBAL HYPER-SEEDING for {sut_name} ---']
    
    # Global Seeder (Phase 1)
    output_lines.append(f'bthread("hyper:{sut_name}:GlobalSeeder", function() {{')
    output_lines.append('  bp.log.info("Seeding system for hyper-coordinated testing...");')
    for m in masters:
        add_op = entities[m]["operations"].get("add")
        if not add_op: continue
        m_types, m_formats = _get_merged_param_types(entities[m])
        for i in range(10):
            unique_prefix = f"{sanitize_param(m)}_init_{i}"
            v_code, args, _, _, _ = _generate_entity_vars(m, entities, raw_spec, unique_prefix, str(i), {}, m_types, m_formats)
            for v_line in v_code: output_lines.append("    " + v_line.strip())
            # FIX: Use technical name (e.g., addPet)
            fn_name = add_op.get("name", f"add{m}")
            output_lines.append(f'    {sanitize_param(fn_name)}({", ".join(args)}, {{ expectedResponseCodes: [200, 201, 204] }});')
    output_lines.append('  bp.sync({ request: bp.Event("Done: Hyper_Seeding_Complete") });')
    output_lines.append('});\n')

    # Constellation Phase (Phase 2) - 3 Copies
    for iteration in range(1, 4):
        output_lines.append(f'// --- Hyper-Story Constellation Copy {iteration} ---')
        for agent in agents:
            role = agent.get("role", "GeneralAgent")
            chain = agent.get("chain", [])
            output_lines.append(f'bthread("hyper:{sut_name}:copy{iteration}:{role}", function() {{')
            output_lines.append('  waitFor(bp.Event("Done: Hyper_Seeding_Complete"));')
            output_lines.append('  while(true) {')
            
            # FIX: Resolve IDs and call technical function names
            for idx, op_id in enumerate(chain[:5]):
                # Determine which operation to call
                op_data = entities[primary_master]["operations"].get(op_id)
                if not op_data: continue
                
                technical_fn = op_data.get("name", op_id)
                
                if idx == 0:
                    output_lines.append(f'    let e_{idx} = waitFor(matchAny{sanitize_param(primary_master)}Added());')
                    output_lines.append(f'    let activeId = e_{idx}.data.id || e_{idx}.data.{sanitize_param(primary_master)}Id;')
                
                output_lines.append(f'    // Chain step {idx}: {op_id} -> {technical_fn}')
                output_lines.append(f'    {sanitize_param(technical_fn)}(activeId);')
            
            output_lines.append('  }')
            output_lines.append('});')
    return "\n".join(output_lines)

def _generate_hyper_negative_stories(spec, sut_name):
    entities = spec.get("entities", {})
    arch = spec.get("system_architecture", {})
    dependencies = spec.get("dependencies", {})
    conflicts = arch.get("vandal_conflicts", [])
    output_lines = []

    for iteration in range(1, 4):
        output_lines.append(f'// --- EVIL COORDINATED AGENTS for {sut_name} (Copy {iteration}) ---')
        
        # AGENT: The Saboteur (Race-Condition Agent)
        for conflict in conflicts:
            target = conflict.get("target")
            action_key = conflict.get("action") # e.g., "delete"
            
            if target in entities:
                # FIX: Resolve logical action to technical name (e.g., delete -> deletePet)
                op_data = entities[target]["operations"].get(action_key)
                if not op_data: continue
                technical_fn = op_data.get("name", action_key)
                get_fn = entities[target]["operations"].get("get", {}).get("name", f"get{target}ById")
                
                safe_target = sanitize_param(target)
                output_lines.append(f'bthread("hyper:evil:copy{iteration}:Saboteur_{safe_target}", function() {{')
                output_lines.append(f'  while(true) {{')
                output_lines.append(f'    let e = waitFor(matchAny{safe_target}Added());')
                output_lines.append(f'    let targetId = e.data.id || e.data.{safe_target}Id;')
                output_lines.append(f'    // EVIL: Execute {technical_fn} while positive agents are active')
                output_lines.append(f'    {sanitize_param(technical_fn)}(targetId);')
                output_lines.append(f'    // Verification of Chaos: Trigger 500 on dead resource')
                output_lines.append(f'    {sanitize_param(get_fn)}(targetId);')
                output_lines.append('  }')
                output_lines.append('});')

        # AGENT: The Orphan-Maker (Relational Corruption)
        for child, parents in dependencies.items():
            for parent in parents:
                if child not in entities or parent not in entities: continue
                safe_child = sanitize_param(child)
                safe_parent = sanitize_param(parent)
                
                # FIX: Resolve technical names for parent-deletion and child-interaction
                parent_del_op = entities[parent]["operations"].get("delete", {}).get("name", f"delete{parent}")
                child_get_op = entities[child]["operations"].get("get", {}).get("name", f"get{child}")

                output_lines.append(f'bthread("hyper:evil:copy{iteration}:OrphanMaker_{safe_child}", function() {{')
                output_lines.append('  while(true) {')
                output_lines.append(f'    let e = waitFor(matchAny{safe_child}Added());')
                output_lines.append(f'    let pId = e.data.{safe_parent}Id || e.data.id;')
                output_lines.append(f'    // Path 2: Parent Erasure (Breaking Integrity)')
                output_lines.append(f'    {sanitize_param(parent_del_op)}(pId);')
                output_lines.append(f'    // Path 3: Child Sabotage (Triggering 500 Join Error)')
                output_lines.append(f'    let childId = e.data.id || e.data.{safe_child}Id;')
                output_lines.append(f'    {sanitize_param(child_get_op)}(childId);')
                output_lines.append('  }')
                output_lines.append('});')
                
    return "\n".join(output_lines)
