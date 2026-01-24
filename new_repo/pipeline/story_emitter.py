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
    """
    General Value Generator:
    Generates JavaScript variable definitions based on OpenAPI types and formats.
    Heuristically resolves structured types (Objects/Arrays) to prevent 400 serialization errors.
    """
    pk, params = collect_entity_params(ent_name, entities[ent_name], raw_spec)
    lines_code = []
    args = []
    pk_var_name = "null"
    param_var_map = {} 

    for p in params:
        safe_p = sanitize_param(p)
        var_name = f"{safe_p}_{suffix}"
        
        # 1. Resolve Metadata and Apply Heuristics
        # If the type is generic or missing, infer from common naming conventions
        p_type = param_types.get(p, "string").lower()
        p_format = param_formats.get(p, "").lower()

        if p_type == "string" or not p_type:
            if p.lower() in ["category", "address", "metadata", "details"]: 
                p_type = "object"
            elif p.lower() in ["tags", "photourls", "items", "list", "ids"]: 
                p_type = "array"
        
        param_var_map[p] = var_name
        if p == pk: 
            pk_var_name = var_name

        # 2. Dependency Link: Reuse IDs captured from parent stories
        if p in link_map:
            lines_code.append(f'  let {var_name} = {link_map[p]};')
        
        # 3. Structural Types: Ensure valid JSON structures for Objects and Arrays
        elif p_type == "object":
            # Generates a minimal valid object to satisfy backend deserializers
            lines_code.append(f'  let {var_name} = {{ "id": 1, "name": "val_{suffix}" }};')
        
        elif p_type == "array":
            # Satisfies array requirements to avoid String-to-List casting errors
            lines_code.append(f'  let {var_name} = [];')

        # 4. Numeric Types
        elif p_type in ["integer", "number"]:
             lines_code.append(f'  let {var_name} = Math.floor(Math.random() * 1000);')
        
        elif p_type == "boolean":
             lines_code.append(f'  let {var_name} = true;')

        # 5. Formatted String Types
        elif p_type == "string":
            constraints = _get_field_constraints(ent_name, p, raw_spec)
            example = constraints.get('example')
            pattern = constraints.get('pattern')
            default_val = constraints.get('default')
            
            val = None
            if example is not None: 
                val = f'"{example}"'
            elif default_val is not None: 
                val = f'"{default_val}"'
            elif pattern:
                # Fulfill basic regex patterns for network and identifier types
                if '^[0-9a-f]{6}$' in pattern: val = '"000000"'
                elif 'A-Fa-f' in pattern and ':' in pattern: val = '"AA:BB:CC:DD:EE:FF"'
                elif '0-9' in pattern and r'\.' in pattern and '/' in pattern: val = '"10.0.0.1/24"'
                else: val = f'"{p}_valid_pattern"' 
            
            # Semantic Format Handling
            elif "email" in p_format: 
                val = f'"u{suffix}_" + Math.floor(Math.random()*1000) + "@test.com"'
            elif "date" in p_format: 
                val = f'"2025-01-23T12:00:00Z"'
            elif "uuid" in p_format: 
                val = f'"00000000-0000-0000-0000-000000000000"'
            elif "uri" in p_format or "url" in p_format: 
                val = f'"http://example.com/{suffix}"'
            elif p.lower() == "status": 
                val = '"available"' # Domain fallback
            else:
                val = f'"{p}_{suffix}_" + Math.floor(Math.random()*1000)'
            
            lines_code.append(f'  let {var_name} = {val};')
        
        # 6. Fallback
        else:
             lines_code.append(f'  let {var_name} = "val_" + Math.floor(Math.random()*1000);')
        
        args.append(var_name)
    
    # Ensure a valid PK variable is identified for subsequent verification steps
    if pk_var_name == "null" and args:
        for a in args:
            if "id" in a.lower(): 
                pk_var_name = a
                break
        if pk_var_name == "null": 
            pk_var_name = args[0]

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

def _emit_delete_logic(ent_name, entities, raw_spec, lines, context, all_parents):
    """
    Standardizes the final phase of the CRUD lifecycle.
    Leaf entities use direct deletion; Parent entities use the Intent-Race pattern.
    """
    ops = entities[ent_name]["operations"]
    del_op = ops.get("delete")
    if not del_op: return

    safe_name = sanitize_param(ent_name)
    del_fn = del_op.get("name", f"delete{ent_name}")
    pk_var = context[ent_name]["pk_var"]
    
    # Resolve Path Arguments (if any) besides the ID
    path_tmpl = del_op.get("path", "")
    required_path_params = re.findall(r'\{([^\}]+)\}', path_tmpl)
    del_args = []
    if required_path_params:
        stored_map = context[ent_name].get("param_map", {})
        for p in required_path_params:
            if p in stored_map: del_args.append(stored_map[p])
            elif p == context[ent_name].get("pk_name"): del_args.append(pk_var)
    
    if not del_args: del_args.append(pk_var)
    del_args_str = ", ".join(del_args)

    if ent_name in all_parents:
        # CASE 1: Parent Entity - Triggers Intent-Race in Interface
        lines.append(f'  // -> Deleting Parent {ent_name} (Relational Intent Race)')
        lines.append(f'  {sanitize_param(del_fn)}({del_args_str});')
        # Note: Interface handles internal verifyDoesNotExist on success path
    else:
        # CASE 2: Leaf Entity - Standard Deletion + External Verification
        lines.append(f'  // -> Deleting Leaf {ent_name} (Standard)')
        lines.append(f'  {sanitize_param(del_fn)}({del_args_str});')
        lines.append(f'  verify{safe_name}DoesNotExist({pk_var});') # Argument Sync Fix
    lines.append('')
                    
def emit_stories(spec, out_dir, sut_name):
    print(f"   > 🔨 Generating stories for {sut_name}...")
    entities = spec.get("entities", {})
    raw_spec = get_raw_spec(spec)
    dependencies = spec.get("dependencies", {})
    if not dependencies: dependencies = _infer_dependencies(entities, raw_spec)
    
    all_parents = set()
    for parents in dependencies.values(): all_parents.update(parents)

    lines = [f'// Auto-generated stories for {sut_name}', '//@provengo summon rest', '']
    lines.extend(_get_js_resolve_dependencies_fn())
    lines.append('')
    
    # 1. MONITORS: Argument Sync Fix
    lines.append('// --- Monitors ---')
    for name in entities.keys():
        if not entities[name].get("operations", {}).get("add"): continue
        safe_name = sanitize_param(name)
        pk, _ = collect_entity_params(name, entities[name], raw_spec)
        
        lines.append(f'bthread("monitor:{name}:exists", function () {{')
        lines.append(f'  while (true) {{')
        lines.append(f'    let e = bp.sync({{ waitFor: matchAny{safe_name}Added() }});')
        lines.append(f'    let idVal = e.data.{sanitize_param(pk)} || e.data.id;')
        if "delete" in entities[name]["operations"]:
            lines.append(f'    block(matchDeleted{safe_name}(idVal), function() {{ verify{safe_name}Exists(idVal); }});')
        else:
            lines.append(f'    verify{safe_name}Exists(idVal);')
        lines.append('  } });')
        lines.append('')

    # 2. LINEAR CRUD STORIES: Complete Verified Lifecycle
    global_base_id = 100
    for repetition in range(1, 4): 
        for name in entities.keys():
            if not entities[name].get("operations", {}).get("add"): continue
            story_name = f"crud:{sanitize_param(name)}:linear:{repetition}"
            lines.append(f'bthread("{story_name}", function () {{')
            created_context = {"resolving": True}
            
            # Create Resource
            _recursive_emit_creation(name, entities, dependencies, raw_spec, lines, created_context, global_base_id)
            pk_v = created_context[name]["pk_var"]
            lines.append(f'  verify{sanitize_param(name)}Exists({pk_v}); // Inline Fidelity Check')
            
            # Update Resource
            _emit_update_logic(name, entities, raw_spec, lines, created_context, global_base_id)
            lines.append(f'  verify{sanitize_param(name)}Exists({pk_v}); // Post-Update Fidelity Check')
            
            # Delete Resource (Smart Branching)
            _emit_delete_logic(name, entities, raw_spec, lines, created_context, all_parents)
            
            lines.append('});')
            lines.append('')
            global_base_id += 10

    # 3. HYPER-COORDINATED STORIES
    lines.append('// --- PHASE 3: HYPER-COORDINATED AGENTS ---')
    lines.append(_generate_hyper_coordinated_stories(spec, sut_name))
    lines.append('')

    # 4. HYPER-NEGATIVE STORIES
    lines.append('// --- PHASE 4: HYPER-NEGATIVE ADVERSARIES ---')
    lines.append(_generate_hyper_negative_stories(spec, sut_name))
    lines.append('')

    ensure_dir(out_dir)
    (out_dir / f"stories.{sut_name}.js").write_text("\n".join(lines), encoding="utf-8")
    
    # 5. Standalone Negative Agents
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
        add_fn = ent["operations"]["add"].get("name", f"add{name}")
        upd_op = ent["operations"].get("update")

        # 1. MIRRORED COLLISION GUARDS
        # Prevents "Success" paths when the ID is live; prevents "Fail" paths when clean.
        lines.append(f'// Guard: Block Success if {name} ID exists')
        lines.append(f'bthread("guard:{safe_name}:BlockCollisionSuccess", function() {{')
        lines.append(f'  while(true) {{ let e = waitFor(matchAny{safe_name}Added());')
        lines.append(f'    let id = e.data.{sanitize_param(pk)} || e.data.id;')
        lines.append(f'    bp.sync({{ block: bp.Event("Req:{add_fn}:Success:" + id), waitFor: matchAny{safe_name}Deleted() }});')
        lines.append('  } });') 

        lines.append(f'// Guard: Block Fail if {name} ID missing')
        lines.append(f'bthread("guard:{safe_name}:BlockCollisionFail", function() {{')
        lines.append(f'  while(true) {{ let e = waitFor(matchAny{safe_name}Added()); waitFor(matchAny{safe_name}Deleted());')
        lines.append(f'    bp.sync({{ block: bp.Event("Req:{add_fn}:Fail:Conflict:" + e.data.id), waitFor: matchAny{safe_name}Added() }});')
        lines.append('  } });') 

        # 2. STATE SENTRY
        # Blocks updates to a resource once it has been deleted.
        if upd_op:
            upd_fn = upd_op.get("name")
            lines.append(f'// Guard: Block illegal updates for {name} (State Sentry)')
            lines.append(f'bthread("guard:{safe_name}:StateSentry", function() {{')
            lines.append(f'  while(true) {{ let e = waitFor(matchAny{safe_name}Deleted());')
            lines.append(f'    let id = e.data.id || e.data.{sanitize_param(pk)};')
            lines.append(f'    bp.sync({{ block: bp.Event("Req:{upd_fn}:Success:" + id), waitFor: matchAny{safe_name}Added() }});')
            lines.append('  } });')

        # 3. DYNAMIC COLLISION SABOTEUR
        # Actively attempts to duplicate live IDs captured from the system.
        lines.append(f'// Agent: Dynamic Collision Saboteur for {name}')
        lines.append(f'bthread("evil:collision:{safe_name}", function() {{')
        lines.append('  while (true) {')
        lines.append(f'    let e = waitFor(matchAny{safe_name}Added());')
        lines.append(f'    let liveId = e.data.{sanitize_param(pk)} || e.data.id;')
        col_args = [("liveId" if p == pk else f'"{p}_collision"') for p in params]
        lines.append(f'    {sanitize_param(add_fn)}({", ".join(col_args)});')
        lines.append('  } });')
        lines.append('')

    # 4. BOOTSTRAP CREATION GUARDS (Relational Safety Logic)
    # Blocks Child creation intents until at least one valid Parent is ready.
    for child, parents in dependencies.items():
        safe_c = sanitize_param(child)
        add_fn = entities[child]["operations"]["add"]["name"]
        for parent in parents:
            safe_p = sanitize_param(parent)
            lines.append(f'// Guard: Block {child} creation until {parent} is ready')
            lines.append(f'bthread("guard:{safe_c}:BlockAddUntil{safe_p}Ready", function() {{')
            lines.append(f'  while(true) {{')
            lines.append(f'    // Using EventSet to match any Success intent for {child}')
            lines.append(f'    bp.sync({{ ')
            lines.append(f'      block: bp.EventSet("Block {child} Success", function(ev) {{ return ev.name.startsWith("Req:{add_fn}:Success:"); }}), ')
            lines.append(f'      waitFor: matchAny{safe_p}Added() ')
            lines.append(f'    }});')
            lines.append(f'    waitFor(matchAny{safe_p}Deleted());')
            lines.append('  } });')

    ensure_dir(out_dir)
    (out_dir / f"negative.{sut_name}.js").write_text("\n".join(lines), encoding="utf-8")
            
        
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
