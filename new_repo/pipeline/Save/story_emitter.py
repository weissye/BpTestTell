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

def _get_js_resolve_dependencies_fn():
    """
    ULTIMATE FIX: Restores the missing JS boilerplate helper.
    Provides the runtime logic to capture IDs from system events.
    """
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
def _generate_entity_vars(ent_name, entities, raw_spec, suffix, base_id, link_map={}, param_types={}, param_formats={}, is_negative=False):
    """ULTIMATE FIX: Enforces numeric ID types and ISO dates."""
    pk, params = collect_entity_params(ent_name, entities[ent_name], raw_spec)
    numeric_base = int(base_id) if base_id.isdigit() else 1000
    lines, args, param_var_map = [], [], {} 

    for p in params:
        safe_p, var_name = sanitize_param(p), f"{sanitize_param(p)}_{suffix}"
        p_type = str(param_types.get(p, "string")).lower()
        param_var_map[p] = var_name

        if p in link_map: val = f"{link_map[p]}"
        elif is_negative: val = f'"{p}_malformed_{suffix}"'
        elif p_type in ["object", "array"] or p.lower() in ["category", "address", "tags"]:
            val = f'{{ "id": 1, "name": "{p}_{suffix}_obj" }}' if p_type != "array" else "[]"
        elif p_type == "boolean" or p.lower() in ["complete", "active"]: val = "true" 
        elif p.lower() == "id" or (p == pk and p_type in ["integer", "number"]):
            val = f"{numeric_base} + Math.floor(Math.random() * 99)"
        elif p == pk or p.lower() == "username": val = f'"{safe_p}_{suffix}"'
        elif "date" in p.lower() or "time" in p.lower(): val = '"2025-01-25T12:00:00Z"'
        else: val = f'"{safe_p}_{suffix}_" + Math.floor(Math.random()*1000)'
            
        lines.append(f"  let {var_name} = {val};")
        args.append(var_name)
    return lines, args, pk, (param_var_map.get(pk, "null")), param_var_map

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
                    
                    
                    
                    
def emit_stories(spec, out_dir, sut_name):
    """
    Restores Fidelity Core: Monitors & CRUD stories.
    Removed 'block' helper to clear deadlocks.
    """
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
    
    lines.append('// --- Monitors [RESTORED] ---')
    for name in entities.keys():
        if not entities[name].get("operations", {}).get("add"): continue
        safe_name = sanitize_param(name)
        pk, _ = collect_entity_params(name, entities[name], raw_spec)
        
        lines.append(f'bthread("monitor:{name}:exists", function () {{')
        lines.append(f'  while (true) {{')
        lines.append(f'    let e = bp.sync({{ waitFor: matchAny{safe_name}Added() }});')
        lines.append(f'    let idVal = e.data.{sanitize_param(pk)} || e.data.id;')
        # DIRECT VERIFICATION: No external block/start dependencies
        lines.append(f'    verify{safe_name}Exists(idVal);')
        lines.append('  } });')
        lines.append('')

    global_base_id = 100
    for repetition in range(1, 4): 
        for name in entities.keys():
            if not entities[name].get("operations", {}).get("add"): continue
            story_name = f"crud:{sanitize_param(name)}:linear:{repetition}"
            lines.append(f'bthread("{story_name}", function () {{')
            created_context = {"resolving": True}
            _recursive_emit_creation(name, entities, dependencies, raw_spec, lines, created_context, global_base_id)
            pk_v = created_context[name]["pk_var"]
            lines.append(f'  verify{sanitize_param(name)}Exists({pk_v});')
            _emit_update_logic(name, entities, raw_spec, lines, created_context, global_base_id)
            lines.append(f'  verify{sanitize_param(name)}Exists({pk_v});')
            _emit_delete_logic(name, entities, raw_spec, lines, created_context, all_parents)
            lines.append('});\n')
            global_base_id += 10

    lines.append(_generate_hyper_coordinated_stories(spec, sut_name))
    ensure_dir(out_dir)
    (out_dir / f"stories.{sut_name}.js").write_text("\n".join(lines), encoding="utf-8")
    emit_negative_stories(spec, out_dir, sut_name)
        
    # Trigger generation of the Adversarial Suite
    emit_negative_stories(spec, out_dir, sut_name)
                        
def _get_required_fields(ent_name, raw_spec):
    schemas = raw_spec.get("components", {}).get("schemas", {})
    schema = schemas.get(ent_name) or schemas.get(ent_name.rstrip('s'))
    if schema: return schema.get("required", [])
    return []

def emit_negative_stories(spec: Dict[str, Any], out_dir: Path, sut_name: str):
    """
    ULTIMATE FIX: Calls hyper-coordinated negative agents and appends to the file.
    """
    print(f"   > 😈 Generating evil background agents for {sut_name}...")
    entities, raw_spec = spec.get("entities", {}), get_raw_spec(spec)
    dependencies = spec.get("dependencies", {}) or _infer_dependencies(entities, raw_spec)
    lines = [f'// Auto-generated EVIL BACKGROUND AGENTS for {sut_name}', '//@provengo summon rest', '']

    for name, ent in entities.items():
        if not ent["operations"].get("add"): continue
        safe_name, (pk, params) = sanitize_param(name), collect_entity_params(name, ent, raw_spec)
        add_fn = ent["operations"]["add"].get("name", f"add{name}")

        # Collision Guard
        lines.append(f'bthread("guard:{safe_name}:BlockCollisionSuccess", function() {{')
        lines.append(f'  while(true) {{ let e = waitFor(matchAny{safe_name}Added()); let id = e.data.{sanitize_param(pk)} || e.data.id;')
        lines.append(f'    bp.sync({{ block: bp.Event("Req:{add_fn}:Success:" + id), waitFor: matchAny{safe_name}Deleted() }});')
        lines.append('  } });') 

        # Field Malfunction Fuzzer
        lines.append(f'bthread("fuzz:fields:{safe_name}", function() {{')
        lines.append('  while(true) {')
        lines.append(f'    let e = waitFor(matchAny{safe_name}Added());')
        lines.append(f'    let neg_desc = "[NEGATIVE TEST] Intentional malfunction for {name}";')
        merged_types, merged_formats = _get_merged_param_types(ent)
        v_lines, args, _, _, _ = _generate_entity_vars(name, entities, raw_spec, f"neg_{safe_name}", "999", {}, merged_types, merged_formats, is_negative=True)
        for vl in v_lines: lines.append("    " + vl)
        lines.append(f'    verify{safe_name}Rejects({", ".join(args)}, {{ description: neg_desc }});')
        lines.append('  } });\n')

        # Collision Saboteur
        lines.append(f'bthread("evil:collision:{safe_name}", function() {{')
        lines.append('  while (true) {')
        lines.append(f'    let e = waitFor(matchAny{safe_name}Added());')
        lines.append(f'    let liveId = e.data.{sanitize_param(pk)} || e.data.id;')
        col_args = [("liveId" if p == pk else f'"{p}_collision"') for p in params]
        lines.append(f'    tryToAddExisting{safe_name}({", ".join(col_args)}, {{ description: "[NEGATIVE TEST] Collision Attack" }});')
        lines.append('  } });\n')

    # FIX: Explicitly call and append the Coordinated Adversaries
    lines.append('// --- PHASE 4: COORDINATED VANDALISM (Hyper-Negative) ---')
    lines.append(_generate_hyper_negative_stories(spec, sut_name))

    ensure_dir(out_dir)
    (out_dir / f"negative.{sut_name}.js").write_text("\n".join(lines), encoding="utf-8")
                                
def _generate_hyper_coordinated_stories(spec, sut_name):
    """FIX: Only generates b-threads for agents with valid entity-matching chains."""
    entities, raw_spec = spec.get("entities", {}), spec.get("original_spec", {})
    arch = spec.get("system_architecture", {})
    agents, masters = arch.get("agent_viewpoints", [])[:6], arch.get("master_entities", [])
    primary_master = masters[0] if masters else "Pet"
    output_lines = [f'// --- PHASE 1: GLOBAL HYPER-SEEDING for {sut_name} ---']
    
    # ... [Keep your existing Global Seeder logic here] ...

    # Constellation Phase (Phase 2)
    for iteration in range(1, 4):
        output_lines.append(f'// --- Hyper-Story Constellation Copy {iteration} ---')
        for agent in agents:
            role, chain = agent.get("role", "GeneralAgent"), agent.get("chain", [])
            if not chain: continue

            # FIX: Pre-calculate valid steps to avoid generating empty while(true) loops
            valid_steps = []
            for op_id in chain[:5]:
                op_data = entities[primary_master]["operations"].get(op_id)
                if op_data: valid_steps.append(op_data)
            
            if not valid_steps: continue # Skip roles like InventoryController that don't match the master

            output_lines.append(f'bthread("hyper:{sut_name}:copy{iteration}:{role}", function() {{')
            output_lines.append('  waitFor(bp.Event("Done: Hyper_Seeding_Complete"));')
            output_lines.append('  while(true) {')
            for idx, op_data in enumerate(valid_steps):
                technical_fn = op_data.get("name")
                if idx == 0:
                    output_lines.append(f'    let e_0 = waitFor(matchAny{sanitize_param(primary_master)}Added());')
                    # FIX: Lowercase ID property to match interface payload
                    pk_low = sanitize_param(primary_master).lower()
                    output_lines.append(f'    let activeId = e_0.data.id || e_0.data.{pk_low}Id;')
                output_lines.append(f'    {sanitize_param(technical_fn)}(activeId);')
            output_lines.append('  } });')
    return "\n".join(output_lines)


def _generate_hyper_negative_stories(spec, sut_name):
    entities = spec.get("entities", {})
    arch = spec.get("system_architecture", {})
    dependencies = spec.get("dependencies", {})
    conflicts = arch.get("vandal_conflicts", [])
    output_lines = []

    for iteration in range(1, 4):
        output_lines.append(f'// --- EVIL COORDINATED AGENTS for {sut_name} (Copy {iteration}) ---')
        
        for conflict in conflicts:
            target = conflict.get("target")
            action_key = conflict.get("action")
            if target in entities:
                op_data = entities[target]["operations"].get(action_key)
                if not op_data: continue
                technical_fn = op_data.get("name", action_key)
                get_fn = entities[target]["operations"].get("get", {}).get("name", f"get{target}ById")
                
                safe_target = sanitize_param(target)
                pk_low = safe_target.lower() # FIX: Lowercase for property access
                output_lines.append(f'bthread("hyper:evil:copy{iteration}:Saboteur_{safe_target}", function() {{')
                output_lines.append(f'  while(true) {{')
                output_lines.append(f'    let e = waitFor(matchAny{safe_target}Added());')
                output_lines.append(f'    let targetId = e.data.id || e.data.{pk_low}Id;')
                output_lines.append(f'    {sanitize_param(technical_fn)}(targetId);')
                output_lines.append(f'    {sanitize_param(get_fn)}(targetId);')
                output_lines.append('  }')
                output_lines.append('});')

        for child, parents in dependencies.items():
            for parent in parents:
                if child not in entities or parent not in entities: continue
                safe_child, safe_parent = sanitize_param(child), sanitize_param(parent)
                parent_del_op = entities[parent]["operations"].get("delete", {}).get("name", f"delete{parent}")
                child_get_op = entities[child]["operations"].get("get", {}).get("name", f"get{child}")

                output_lines.append(f'bthread("hyper:evil:copy{iteration}:OrphanMaker_{safe_child}", function() {{')
                output_lines.append('  while(true) {')
                output_lines.append(f'    let e = waitFor(matchAny{safe_child}Added());')
                # FIX: Lowercase property access
                output_lines.append(f'    let pId = e.data.{safe_parent.lower()}Id || e.data.id;')
                output_lines.append(f'    {sanitize_param(parent_del_op)}(pId);')
                output_lines.append(f'    let childId = e.data.id || e.data.{safe_child.lower()}Id;')
                output_lines.append(f'    {sanitize_param(child_get_op)}(childId);')
                output_lines.append('  }')
                output_lines.append('});')
    return "\n".join(output_lines)
