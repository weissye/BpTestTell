from pathlib import Path
import json
from typing import Dict, Any, List
from new_repo.pipeline.emitter_utils import (
    ensure_dir, sanitize_param, get_raw_spec, 
    collect_entity_params
)

# --- Helper: JS Dependency Resolver ---
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

# --- Helper: Variable Generator ---
def _generate_entity_vars(ent_name, entities, raw_spec, suffix, base_id, link_map={}):
    pk, params = collect_entity_params(ent_name, entities[ent_name], raw_spec)
    lines_code = []
    args = []
    
    for p in params:
        safe_p = sanitize_param(p)
        var_name = f"{safe_p}_{suffix}"
        
        if p in link_map:
            # Linked to parent
            lines_code.append(f'  let {var_name} = {link_map[p]};')
        else:
            # Independent value
            if p == pk:
                val = f'{base_id}000 + Math.floor(Math.random()*10000)'
            elif "email" in p.lower():
                val = f'"u{suffix}_" + Math.floor(Math.random()*1000) + "@test.com"'
            elif "int" in p.lower() or "id" in p.lower():
                val = f'Math.floor(Math.random()*100)'
            else:
                val = f'"{p}_{suffix}_" + Math.floor(Math.random()*1000)'
            lines_code.append(f'  let {var_name} = {val};')
        
        args.append(var_name)
    
    return lines_code, args, pk

def emit_stories(spec: Dict[str, Any], out_dir: Path, sut_name: str):
    print(f"   > 🔨 Generating stories for {sut_name}...")
    entities = spec.get("entities", {})
    raw_dependencies = spec.get("dependencies", {}) 
    raw_spec = get_raw_spec(spec)
    
    lines = []
    lines.append(f'// Auto-generated stories for {sut_name}')
    lines.append('//@provengo summon rest')
    lines.append('')
    lines.extend(_get_js_resolve_dependencies_fn())
    lines.append('')

    # --- 1. Build Dependency Graph ---
    parent_to_children = {}
    child_to_parents = {}
    
    for child, parents in raw_dependencies.items():
        if child not in entities: continue
        child_to_parents[child] = parents
        for p in parents:
            if p not in entities: continue
            if p not in parent_to_children: parent_to_children[p] = []
            parent_to_children[p].append(child)

    # Identify Roots (Entities that are not children of anyone)
    all_nodes = set(entities.keys())
    children_nodes = set(child_to_parents.keys())
    roots = list(all_nodes - children_nodes)
    
    complex_chains = []
    
    # Recursive Chain Builder
    def get_longest_chain(current_node, current_chain):
        children = parent_to_children.get(current_node, [])
        if not children:
            return [current_chain]
        paths = []
        for child in children:
            if child in current_chain: continue # Avoid cycles
            paths.extend(get_longest_chain(child, current_chain + [child]))
        return paths

    for root in roots:
        if root in parent_to_children: 
            possible_chains = get_longest_chain(root, [root])
            for chain in possible_chains:
                if len(chain) > 1:
                    complex_chains.append(chain)

    global_base_id = 200

    # --- 2. Emit V-Model Chain Stories ---
    for i, chain in enumerate(complex_chains):
        chain_name = "_".join([sanitize_param(n) for n in chain])
        lines.append(f'// Story: Chain {chain_name}')
        lines.append(f'bthread("chain:{chain_name}", function () {{')
        
        chain_context = {}
        
        # Descent (Create & Verify)
        for depth, ent_name in enumerate(chain):
            safe_ent = sanitize_param(ent_name)
            suffix = f"{i}_{depth}"
            link_map = {}
            
            # Resolve Parent Links
            if depth > 0:
                parent_name = chain[depth-1]
                parent_ctx = chain_context.get(parent_name)
                _, params = collect_entity_params(ent_name, entities[ent_name], raw_spec)
                for p in params:
                    if parent_ctx:
                        if parent_name.lower() in p.lower() and ("id" in p.lower()): 
                            link_map[p] = parent_ctx["pk_val"]
                        elif p == "parentId": 
                            link_map[p] = parent_ctx["pk_val"]
            
            vars_code, args, pk = _generate_entity_vars(ent_name, entities, raw_spec, suffix, str(global_base_id), link_map)
            
            # Store PK for children
            pk_var = next((arg for arg in args if str(sanitize_param(pk)) in arg), args[0] if args else "null")
            chain_context[ent_name] = {"pk_val": pk_var, "pk_name": pk}

            lines.append(f'  // --- Level {depth}: {ent_name} ---')
            lines.extend(vars_code)
            
            # FIX: Fetch correct operation names from entities dict
            ops = entities[ent_name].get("operations", {})
            add_fn = ops.get("add", {}).get("name", f"create{ent_name}") # Default fallback if missing
            
            lines.append(f'  {sanitize_param(add_fn)}({", ".join(args)});')
            lines.append(f'  verify{safe_ent}Exists({", ".join(args)});')
            
            if "update" in ops:
                 upd_fn = ops["update"].get("name", f"update{ent_name}")
                 lines.append(f'  {sanitize_param(upd_fn)}({", ".join(args)});')
                 lines.append(f'  verify{safe_ent}Exists({", ".join(args)});')

        # Ascent (Delete in Reverse)
        lines.append(f'  // --- Teardown Phase (Reverse Order) ---')
        for depth in range(len(chain)-1, -1, -1):
            ent_name = chain[depth]
            safe_ent = sanitize_param(ent_name)
            suffix = f"{i}_{depth}"
            _, params = collect_entity_params(ent_name, entities[ent_name], raw_spec)
            args = [f"{sanitize_param(p)}_{suffix}" for p in params]
            
            # FIX: Fetch correct delete operation name
            ops = entities[ent_name].get("operations", {})
            del_fn = ops.get("delete", {}).get("name", f"delete{ent_name}")

            lines.append(f'  {sanitize_param(del_fn)}({", ".join(args)});')
            lines.append(f'  verify{safe_ent}Deleted({", ".join(args)});')
        
        lines.append('});')
        lines.append('')
        global_base_id += 500

    # --- 3. Emit Independent Stories (Linear) ---
    for name, ent in entities.items():
        safe_entity_name = sanitize_param(name)
        ops = ent.get("operations", {})
        add_op = ops.get("add")
        if not add_op: continue

        add_fn = ops.get("add", {}).get("name", f"add{name}")
        del_fn = ops.get("delete", {}).get("name", f"delete{name}")
        upd_fn = ops.get("update", {}).get("name", f"update{name}") if "update" in ops else None
        
        # Check if parent (has dependents)
        is_parent = (name in parent_to_children)
        
        if add_fn:
            # FIX: Range (1,4) ensures 1, 2, 3
            for i in range(1, 4):
                story_name = f"crud:{name}:linear:{i}"
                lines.append(f'// Story: {story_name}')
                lines.append(f'bthread("{story_name}", function () {{')
                
                vars_code, args, _ = _generate_entity_vars(name, entities, raw_spec, f"lin_{i}", str(global_base_id))
                lines.extend(vars_code)
                
                lines.append(f'  {sanitize_param(add_fn)}({", ".join(args)});')
                lines.append(f'  verify{safe_entity_name}Exists({", ".join(args)});')
                
                if upd_fn:
                     lines.append(f'  {sanitize_param(upd_fn)}({", ".join(args)});')
                     lines.append(f'  verify{safe_entity_name}Exists({", ".join(args)});')
                
                if del_fn:
                    if is_parent:
                        lines.append(f'  // Skip delete for {name} to prevent foreign key errors (has active dependents)')
                    else:
                        lines.append(f'  {sanitize_param(del_fn)}({", ".join(args)});')
                        lines.append(f'  verify{safe_entity_name}Deleted({", ".join(args)});')

                lines.append('});')
                lines.append('')
        global_base_id += 100

    ensure_dir(out_dir)
    (out_dir / f"stories.{sut_name}.js").write_text("\n".join(lines), encoding="utf-8")