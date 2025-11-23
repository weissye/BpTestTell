#!/usr/bin/env python
# scripts/readable/emit_hls_all_in_one.py
"""
Generic HLS stories emitter.

- Reads HLS GOLD (det/nondet) and emits stories_hls.js.
- Preserves pre-rendered JS stories in GOLD ("js" field).
- For structured stories (have an 'ops' list), injects guards:
    * verify<Entity>DoesNotExist() before first add<Entity>()
    * verify<Entity>Exists() before each delete<Entity>()
    * verify<Entity>DoesNotExist() after last delete<Entity>() if missing
- Assigns unique IDs per entity to all structured + synthetic stories.
- Synthesizes generic stories per entity:
    * positive:basic          – add → verifyExists → delete → verifyDoesNotExist
    * positive:update         – add → verifyExists → update → verifyExists
    * negative:dup-add        – tryToAddExisting<Entity> while exists
    * negative:delete-nonexistent – tryToDeleteANonExisting<Entity>
    * existing:update         – waitForAny<Entity>Added() → update existing
    * existing:dup-add        – waitForAny<Entity>Added() → dup-add existing
    * passive monitors:
        - monitor:<ent>:add
        - monitor:<ent>:delete
    * complex-key monitors (for entities listed in --complex-entities):
        - monitor:<ent>:complex-keys          (full+partial combination)
        - monitor:<ent>:complex-keys:by-field (per-ID-field duplicates)

In addition, for synthetic CRUD stories, if HLS GOLD meta contains:

  "entities": [
    {
      "entity": "users",
      "singular": "user",
      "plural": "users",
      "keys": ["idUser"],
      "attrs": ["name","email"],
      "add_args": ["\"name_1\"","\"email_1\""],
      "update_args": ["\"name_2\"","\"email_2\""]
    },
    ...
  ]

then the synthetic stories for 'user' will call:

  addUser(id, "name_1", "email_1");
  verifyUserExists(id, "name_1", "email_1");
  updateUser(id, "name_2", "email_2");
  verifyUserExists(id, "name_2", "email_2");
  deleteUser(id, "name_2", "email_2");
  verifyUserDoesNotExist(id, "name_2", "email_2");

Note that JS functions may ignore some of the extra args, but the caller-side
signature is consistent with GOLD.
"""

import argparse
import json
import re
from pathlib import Path
from dataclasses import dataclass, field
from typing import Any, Dict, List, Optional, Tuple, Set
from collections import defaultdict


# ---------------------------------------------------------------------------
# Data model
# ---------------------------------------------------------------------------


@dataclass
class StorySpec:
    name: str
    entity: Optional[str] = None
    mode: str = "?"
    # If ops are provided, they are names of helper functions (no args here).
    ops: List[str] = field(default_factory=list)
    # Mapping from op index -> extra JS args (raw expressions) from GOLD.
    op_args: Dict[int, List[str]] = field(default_factory=dict)
    # raw_js: a full JS snippet; if present, emitter outputs it verbatim.
    raw_js: Optional[str] = None
    # ID metadata (used only for structured/synthetic stories).
    id_var: Optional[str] = None
    id_value: Optional[int] = None
    # To mark entries that are just placeholders in GOLD.
    is_placeholder: bool = False


# ---------------------------------------------------------------------------
# Utility naming helpers
# ---------------------------------------------------------------------------


def pascal_case(name: str) -> str:
    parts = [p for p in name.replace("-", "_").split("_") if p]
    return "".join(p[:1].upper() + p[1:] for p in parts) if parts else ""



def entity_cap_for_interfaces(ent: str) -> str:
    """Map GOLD entity names to JS helper stems that match interfaces.readable.js.

    Currently special-cases the 'reset_all' aggregate (appears as
    '/reset_all' or 'reset-all' in the API), whose helpers are named with
    'Reset_all' (e.g., addReset_all, waitForAnyReset_allAdded, etc.).

    For all other entities we fall back to simple PascalCase.
    """
    norm = (ent or "").replace("-", "_").lower()
    if norm == "reset_all":
        return "Reset_all"
    return pascal_case(ent)


def camel_case(name: str) -> str:
    parts = [p for p in name.replace("-", "_").split("_") if p]
    if not parts:
        return "id"
    return parts[0].lower() + "".join(p[:1].upper() + p[1:] for p in parts[1:])


def sanitize_js_ident(name: str) -> str:
    """Make a safe JS identifier (generic helper)."""
    name = camel_case(name)
    name = re.sub(r"[^A-Za-z0-9_]", "", name)
    if re.match(r"^[0-9]", name):
        name = "_" + name
    return name or "id"


def sanitize_var_name(name: str) -> str:
    """
    Helper for emitter-generated *local* variable names.

    Wraps sanitize_js_ident but clearly marks intent: use this whenever we
    create a `let foo = ...` in JS.
    """
    return sanitize_js_ident(name)


def make_id_var(entity: str) -> str:
    base = sanitize_var_name(entity)
    return base + "Id" if not base.endswith("Id") else base


def normalize_op_name(op: Any) -> str:
    """
    Normalize an op entry from GOLD:

      - if it's a string, return as-is;
      - if it's an object, try "fn" first, then "op".
    """
    if isinstance(op, str):
        return op
    if isinstance(op, dict):
        if "fn" in op:
            return str(op["fn"])
        if "op" in op:
            return str(op["op"])
    return str(op)


# ---------------------------------------------------------------------------
# GOLD loading
# ---------------------------------------------------------------------------



def postprocess_raw_js_for_compat(raw_js: str) -> str:
    """
    Normalize pre-rendered JS stories so that they are compatible with
    interfaces.readable.js-style helpers:

      - Helper stems for the aggregate reset_all use "Reset_all"
        (e.g., addReset_all, verifyReset_allExists, etc.).
      - CRUD / verify helpers are always called with a single ID argument
        on the caller side; any extra GOLD arguments are dropped.
    """
    # 1) Fix reset_all helper stems: generated GOLD sometimes used
    #    identifiers like addReset-all(...), which is invalid JS and does
    #    not match the helpers defined in interfaces.readable.js.
    raw_js = raw_js.replace("Reset-all", "Reset_all")

    # 2) Collapse multi-argument CRUD/verify helper calls to a single ID arg.
    #    We only touch top-level calls, not method calls like obj.fn().
    pattern = re.compile(
        r'(?<![.\w$])'
        r'(add|tryToAddExisting|verify\w*|update|delete|tryToDeleteANonExisting)'
        r'([A-Z_]\w*)'
        r'\s*\(([^)]*)\)'
    )

    def _collapse_args(match: re.Match) -> str:
        fn_name = match.group(1) + match.group(2)
        args = match.group(3)
        # Keep only the first argument expression and trim whitespace.
        first_arg = args.split(",", 1)[0].strip()
        return f"{fn_name}({first_arg})"

    return pattern.sub(_collapse_args, raw_js)


def load_hls_gold(path: Path) -> Tuple[Dict[str, Any], List[StorySpec]]:
    """
    Load a single HLS GOLD JSON file and return (meta, stories).

    Expected shape:

      {
        "meta": { ... },
        "stories": [ ... ]
      }

    where a story can be one of:
      - { "name": "...", "js": "..." }
      - { "name": "...", "entity": "...", "mode": "...", "ops": [ ... ] }
    """
    with path.open("r", encoding="utf-8") as f:
        data = json.load(f)

    if not isinstance(data, dict):
        raise ValueError(f"{path}: GOLD root must be an object")

    meta = data.get("meta") or {}
    if not isinstance(meta, dict):
        meta = {}

    stories_raw = data.get("stories") or []
    if not isinstance(stories_raw, list):
        raise ValueError(f"{path}: 'stories' must be a list")

    stories: List[StorySpec] = []

    for idx, s in enumerate(stories_raw):
        if not isinstance(s, dict):
            raise ValueError(f"{path}: stories[{idx}] must be an object")

        name = str(s.get("name") or f"story_{idx}")
        entity = s.get("entity")
        mode = s.get("mode") or "?"

        if "js" in s and s["js"]:
            # Pre-rendered JS story; run through a small compatibility
            # normalizer so that helper calls match interfaces.readable.js.
            raw_js = postprocess_raw_js_for_compat(str(s["js"]))
            stories.append(
                StorySpec(
                    name=name,
                    entity=entity,
                    mode=str(mode),
                    raw_js=raw_js,
                )
            )
            continue

        ops_raw = s.get("ops")
        if isinstance(ops_raw, list) and ops_raw:
            ops: List[str] = []
            op_args: Dict[int, List[str]] = {}
            for i, op in enumerate(ops_raw):
                if isinstance(op, dict):
                    fn_name = normalize_op_name(op)
                    ops.append(fn_name)
                    if "args" in op and isinstance(op["args"], list):
                        op_args[i] = [str(a) for a in op["args"]]
                else:
                    ops.append(normalize_op_name(op))

            stories.append(
                StorySpec(
                    name=name,
                    entity=entity,
                    mode=str(mode),
                    ops=ops,
                    op_args=op_args,
                )
            )
        else:
            # Placeholder / empty structured story.
            stories.append(
                StorySpec(
                    name=name,
                    entity=entity,
                    mode=str(mode),
                    is_placeholder=True,
                )
            )

    return meta, stories


# ---------------------------------------------------------------------------
# Guard injection for structured stories
# ---------------------------------------------------------------------------


def inject_guards_for_story(story: StorySpec) -> None:
    """
    For a structured story with ops list, inject standard CRUD guards:

      - verify<Entity>DoesNotExist() before first add<Entity>()
      - verify<Entity>Exists() before each delete<Entity>()
      - verify<Entity>DoesNotExist() after last delete<Entity>(), if missing

    Entity is taken from story.entity, or inferred from first op name.
    """
    if story.is_placeholder or not story.ops:
        return

    ops = story.ops
    op_args = story.op_args

    ent = story.entity
    if not ent and ops:
        m = re.match(r"(add|update|delete|verify|tryToAddExisting|tryToDeleteANonExisting)([A-Z].*)$", ops[0])
        if m:
            ent_candidate = m.group(2)
            ent = ent_candidate[0].lower() + ent_candidate[1:]

    if not ent:
        return

    ent_cap = entity_cap_for_interfaces(ent)

    first_add_idx: Optional[int] = None
    delete_indices: List[int] = []

    for i, op_name in enumerate(ops):
        if op_name.startswith("add" + ent_cap):
            if first_add_idx is None:
                first_add_idx = i
        if op_name.startswith("delete" + ent_cap):
            delete_indices.append(i)

    if first_add_idx is None and not delete_indices:
        return

    def insert_op(pos: int, new_op: str, args_from: Optional[int] = None):
        ops.insert(pos, new_op)
        new_op_args: Dict[int, List[str]] = {}
        for idx, args in op_args.items():
            if idx >= pos:
                new_op_args[idx + 1] = args
            else:
                new_op_args[idx] = args
        op_args.clear()
        op_args.update(new_op_args)
        if args_from is not None and args_from in op_args:
            op_args[pos] = list(op_args[args_from])

    # 1) Before first add<Entity>(), enforce verifyDoesNotExist.
    if first_add_idx is not None:
        guard = f"verify{ent_cap}DoesNotExist"
        insert_op(first_add_idx, guard, args_from=first_add_idx)
        first_add_idx += 1
        delete_indices = [i + 1 for i in delete_indices]

    # 2) Before each delete<Entity>(), enforce verifyExists.
    for di in list(delete_indices):
        guard = f"verify{ent_cap}Exists"
        insert_op(di, guard, args_from=di + 1)
        delete_indices = [i + 1 if i >= di else i for i in delete_indices]

    # 3) After last delete<Entity>(), ensure verifyDoesNotExist at end.
    if delete_indices:
        last_delete_idx = delete_indices[-1]
        tail_ops = ops[last_delete_idx + 1 :]
        if not any(op.startswith(f"verify{ent_cap}DoesNotExist") for op in tail_ops):
            guard = f"verify{ent_cap}DoesNotExist"
            insert_op(last_delete_idx + 1, guard, args_from=last_delete_idx)


# ---------------------------------------------------------------------------
# Synthetic stories & monitors
# ---------------------------------------------------------------------------


def const_val_for_attr(attr: str, base_val: int, variant: int = 0) -> Any:
    """
    Heuristic constant value generator for attrs (for synthetic CRUD stories).

    base_val is typically the entity's base ID; variant=0 used for add_args,
    variant=1 used for update_args.
    """
    attr = str(attr or "").lower()
    if attr.endswith("id") or attr.endswith("_id"):
        return base_val + variant
    if "name" in attr:
        return f"name_{base_val + variant}"
    if "email" in attr:
        return f"user{base_val + variant}@example.com"
    if "status" in attr:
        return "active" if variant == 0 else "updated"
    if "type" in attr:
        return "primary" if variant == 0 else "secondary"
    if "code" in attr:
        return f"CODE_{base_val + variant}"
    if "amount" in attr or "price" in attr or "total" in attr:
        return (base_val + variant) * 10
    return f"val_{base_val + variant}"


def synthesize_entity_stories(
    entities: Set[str],
    id_base_map: Dict[str, Tuple[str, int]],
    id_step: int,
    default_mode: str,
    complex_entities: Set[str],
    meta: Dict[str, Any],
) -> List[StorySpec]:
    """
    For each entity, synthesize:
      - positive:basic
      - positive:update
      - negative:dup-add
      - negative:delete-nonexistent
      - existing:update
      - existing:dup-add
      - passive monitors:
          * monitor:<ent>:add
          * monitor:<ent>:delete
      - complex-key monitors for entities listed as complex.

    Synthetic CRUD stories are structured; existing-* and monitors are raw JS.
    """
    synthetic: List[StorySpec] = []

    entities_meta_raw = meta.get("entities") or {}
    entities_meta: Dict[str, Dict[str, Any]] = {}

    if isinstance(entities_meta_raw, list):
        for idx, e in enumerate(entities_meta_raw):
            if not isinstance(e, dict):
                continue
            if "_index" not in e:
                e["_index"] = idx
            candidates = [
                e.get("entity"),
                e.get("plural"),
                e.get("singular"),
            ]
            for name in candidates:
                if not name:
                    continue
                if name not in entities_meta:
                    entities_meta[name] = e
    elif isinstance(entities_meta_raw, dict):
        entities_meta = entities_meta_raw
        for idx, (name, e) in enumerate(list(entities_meta.items())):
            if isinstance(e, dict) and "_index" not in e:
                e["_index"] = idx

    for ent in sorted(entities):
        ent_cap = entity_cap_for_interfaces(ent)
        id_var, next_id = id_base_map.get(ent, (make_id_var(ent), 200))

        # Per-entity meta
        #   - If GOLD already provides add_args/update_args, we reuse them.
        #   - Otherwise, we derive realistic-looking field values from the
        #     entity's attrs list using const_val_for_attr(), so that HLS
        #     stories replay the same field *sets* that appear in GOLD.
        e_meta = entities_meta.get(ent) or {}

        # Decide which field name carries the primary ID in events.
        # For compatibility with interfaces.readable.js, waitForAny* helpers
        # currently return a *single* field:
        #   - most entities: { id: ... }
        #   - inventory:      { ndc: ... }
        # We therefore default to "id" for all entities except "inventory".
        # Optionally, GOLD meta may override this via an explicit "id_field".
        id_field_name = "id"
        if isinstance(e_meta, dict):
            # Allow explicit override from GOLD meta if present.
            meta_id_field = e_meta.get("id_field")
            if isinstance(meta_id_field, str) and meta_id_field.strip():
                id_field_name = meta_id_field.strip()
            else:
                norm_ent = (ent or "").replace("-", "_").lower()
                if norm_ent == "inventory":
                    id_field_name = "ndc"

        # CRUD argument metadata
        add_args: List[str] = list(e_meta.get("add_args") or [])
        update_args: List[str] = list(e_meta.get("update_args") or [])

        # Attribute sets from GOLD:
        attrs: List[str] = list(e_meta.get("attrs") or [])
        required_attrs: List[str] = list(e_meta.get("required_attrs") or [])
        optional_attrs: List[str] = list(e_meta.get("optional_attrs") or [])

        # Synthesize add/update arguments if GOLD didn't provide them.
        attr_vals_add: Dict[str, str] = {}
        attr_vals_update: Dict[str, str] = {}
        if attrs:
            base_val = 1000 + int(e_meta.get("_index", 0)) * 10

            # If GOLD didn't supply full argument lists, generate them across all attrs.
            if not add_args:
                add_args = [
                    json.dumps(const_val_for_attr(a, base_val, variant=0))
                    for a in attrs
                ]
                e_meta["add_args"] = add_args
            if not update_args:
                update_args = [
                    json.dumps(const_val_for_attr(a, base_val, variant=1))
                    for a in attrs
                ]
                e_meta["update_args"] = update_args

            for idx, a in enumerate(attrs):
                aval = add_args[idx] if idx < len(add_args) else json.dumps(
                    const_val_for_attr(a, base_val, variant=0)
                )
                uval = update_args[idx] if idx < len(update_args) else json.dumps(
                    const_val_for_attr(a, base_val, variant=1)
                )
                attr_vals_add[a] = aval
                attr_vals_update[a] = uval

        # For entities without attrs at all, we keep add_args/update_args as-is.

        # Helper to allocate unique IDs per synthetic active story.
        def new(
            ops: List[str],
            suffix: str,
            op_args_override: Optional[Dict[int, List[str]]] = None,
        ) -> StorySpec:
            nonlocal next_id
            st = StorySpec(
                name=f"crud:{ent}:{default_mode}:{suffix}",
                entity=ent,
                mode=default_mode,
                ops=ops,
            )
            st.id_var = id_var
            st.id_value = next_id
            if op_args_override:
                st.op_args.update(op_args_override)
            else:
                # Default: add* and update* get full args list (if known).
                for i, op_name in enumerate(ops):
                    if op_name.startswith("add" + ent_cap) and add_args:
                        st.op_args[i] = list(add_args)
                    elif op_name.startswith("update" + ent_cap) and update_args:
                        st.op_args[i] = list(update_args)
            next_id += id_step
            return st


        # Canonical full-args list from attrs/add_args, if available.
        full_add_args = add_args
        if attrs and attr_vals_add:
            full_add_args = [attr_vals_add[a] for a in attrs if a in attr_vals_add]

        # Canonical full-args list for update, if available.
        full_update_args: List[str] = list(update_args)
        if attrs and attr_vals_update:
            full_update_args = [attr_vals_update[a] for a in attrs if a in attr_vals_update]

        if required_attrs or optional_attrs:
            # req-only variant.
            if required_attrs and attr_vals_add:
                req_only_args = [
                    attr_vals_add[a] for a in required_attrs if a in attr_vals_add
                ]
            else:
                req_only_args = full_add_args

            # full+optional variant.
            if optional_attrs and attr_vals_add:
                full_with_opt = [
                    attr_vals_add[a]
                    for a in (required_attrs + optional_attrs)
                    if a in attr_vals_add
                ]
            else:
                full_with_opt = full_add_args

        # --- Synthetic CRUD stories ---

        # Positive: basic CRUD (add → verifyExists → delete → verifyDoesNotExist).
        if full_add_args:
            op_args_basic: Dict[int, List[str]] = {
                0: full_add_args,  # add<Entity>
                1: full_add_args,  # verify<Entity>Exists after add
                2: full_add_args,  # delete<Entity>
                3: full_add_args,  # verify<Entity>DoesNotExist after delete
            }
            synthetic.append(
                new(
                    [
                        f"add{ent_cap}",
                        f"verify{ent_cap}Exists",
                        f"delete{ent_cap}",
                        f"verify{ent_cap}DoesNotExist",
                    ],
                    "positive:basic",
                    op_args_override=op_args_basic,
                )
            )

            # Positive: update scenario (add → verifyExists → update → verifyExists).
            # Verifiers follow the same arg pattern:
            #   - first verify: args from add
            #   - second verify: args from update (fallback: add)
            effective_update_args = full_update_args or full_add_args
            op_args_update: Dict[int, List[str]] = {
                0: full_add_args,          # add<Entity>
                1: full_add_args,          # verify<Entity>Exists after add
                2: effective_update_args,  # update<Entity>
                3: effective_update_args,  # verify<Entity>Exists after update
            }
            synthetic.append(
                new(
                    [
                        f"add{ent_cap}",
                        f"verify{ent_cap}Exists",
                        f"update{ent_cap}",
                        f"verify{ent_cap}Exists",
                    ],
                    "positive:update",
                    op_args_override=op_args_update,
                )
            )

        # Negative: dup-add existing (tryToAddExisting<Entity> while exists).
        # Use the same full-argument pattern as positive stories:
        # add / verifyExists / tryToAddExisting / verifyExists all share full_add_args.
        if full_add_args:
            op_args_neg_dup: Dict[int, List[str]] = {
                0: full_add_args,  # add<Entity>
                1: full_add_args,  # verify<Entity>Exists after add
                2: full_add_args,  # tryToAddExisting<Entity>
                3: full_add_args,  # verify<Entity>Exists after dup-add
            }
        else:
            # Fallback: keep old behavior (ID only) if we don't know extra args.
            op_args_neg_dup = {}

        synthetic.append(
            new(
                [
                    f"add{ent_cap}",
                    f"verify{ent_cap}Exists",
                    f"tryToAddExisting{ent_cap}",
                    f"verify{ent_cap}Exists",
                ],
                "negative:dup-add",
                op_args_override=op_args_neg_dup,
            )
        )

        # Negative: delete non-existing should fail (4xx = PASS).
        synthetic.append(
            new(
                [
                    f"tryToDeleteANonExisting{ent_cap}",
                ],
                "negative:delete-nonexistent",
            )
        )

        # Existing-entity UPDATE (raw JS; uses waitForAny<Entity>Added()).
        existing_update_js = f"""
bthread("crud:{ent}:{default_mode}:existing:update", function () {{
  // Wait for some existing {ent} to be added (from any other story)
  let ev = waitForAny{ent_cap}Added();
  let idField = "{id_field_name}";
  let idValue = ev[idField];
  let args = Object.values(ev);

  // Ensure it really exists, then update (with all key fields),
  // while blocking deletion of this {ent} during the check
  block(matchDelete{ent_cap}.apply(null, args), function () {{
    verify{ent_cap}Exists.apply(null, args);
    update{ent_cap}.apply(null, args);
    verify{ent_cap}Exists.apply(null, args);
  }});
}});
""".strip()

        synthetic.append(
            StorySpec(
                name=f"crud:{ent}:{default_mode}:existing:update",
                entity=ent,
                mode=default_mode,
                raw_js=existing_update_js,
            )
        )

        # Existing-entity NEGATIVE: dup-add (raw JS).
        existing_dup_js = f"""
bthread("crud:{ent}:{default_mode}:existing:dup-add", function () {{
  // Wait for some existing {ent} to be added first
  let ev = waitForAny{ent_cap}Added();
  let idField = "{id_field_name}";
  let idValue = ev[idField];
  let args = Object.values(ev);

  // Block deletion of this {ent} while we validate duplicate-add semantics
  block(matchDelete{ent_cap}.apply(null, args), function () {{
    verify{ent_cap}Exists.apply(null, args);
    tryToAddExisting{ent_cap}.apply(null, args);
    verify{ent_cap}Exists.apply(null, args);
  }});
}});
""".strip()

        synthetic.append(
            StorySpec(
                name=f"crud:{ent}:{default_mode}:existing:dup-add",
                entity=ent,
                mode=default_mode,
                raw_js=existing_dup_js,
            )
        )

        # Passive monitor: add → block delete until verifyExists.
        add_mon_js = f"""
bthread("monitor:{ent}:add", function () {{
  while (true) {{
    let ev = waitForAny{ent_cap}Added();
    let idField = "{id_field_name}";
    let idValue = ev[idField];
    let args = Object.values(ev);
    block(matchDelete{ent_cap}.apply(null, args), function () {{
      verify{ent_cap}Exists.apply(null, args);
    }});
  }}
}});
""".strip()

        synthetic.append(
            StorySpec(
                name=f"monitor:{ent}:add",
                entity=ent,
                mode="monitor",
                raw_js=add_mon_js,
            )
        )

        # Passive monitor: delete → block add until verifyDoesNotExist.
        del_mon_js = f"""
bthread("monitor:{ent}:delete", function () {{
  while (true) {{
    let ev = waitForAny{ent_cap}Deleted();
    let idField = "{id_field_name}";
    let idValue = ev[idField];
    let args = Object.values(ev);
    block(matchAdd{ent_cap}.apply(null, args), function () {{
      verify{ent_cap}DoesNotExist.apply(null, args);
    }});
  }}
}});
""".strip()

        synthetic.append(
            StorySpec(
                name=f"monitor:{ent}:delete",
                entity=ent,
                mode="monitor",
                raw_js=del_mon_js,
            )
        )

        # Complex-key monitors (only for entities listed as complex).
        if ent in complex_entities:
            e_keys: List[str] = []
            if isinstance(e_meta, dict):
                raw_keys = e_meta.get("keys") or []
                if isinstance(raw_keys, list):
                    e_keys = [str(k) for k in raw_keys if k]

            keys_js_array = ", ".join(json.dumps(k) for k in e_keys)

            complex_mon_js = f"""
bthread("monitor:{ent}:complex-keys", function () {{
  let seen = {{}};
  const baseKeyNames = [{keys_js_array}];

  function makeKey(ev) {{
    // If GOLD meta provides keys, use them in order; otherwise fall back.
    let keyNames = baseKeyNames;
    if (!keyNames || keyNames.length === 0) {{
      keyNames = Object.keys(ev).filter(k => k && (k.endsWith("id") || k.endsWith("_id")));
    }}
    keyNames.sort();
    return keyNames.map(k => k + "=" + ev[k]).join("|");
  }}

  while (true) {{
    let ev = waitForAny{ent_cap}Added();
    let key = makeKey(ev);

    if (seen[key]) {{
      pvg.fail("Duplicate {ent} detected by composite key: " + key);
    }} else {{
      seen[key] = true;
    }}
  }}
}});
""".strip()

            synthetic.append(
                StorySpec(
                    name=f"monitor:{ent}:complex-keys",
                    entity=ent,
                    mode="monitor",
                    raw_js=complex_mon_js,
                )
            )

            per_key_mon_js = f"""
bthread("monitor:{ent}:complex-keys:by-field", function () {{
  let seenByField = {{}};
  const baseKeyNames = [{keys_js_array}];
  while (true) {{
    let ev = waitForAny{ent_cap}Added();

    let keyNames = baseKeyNames;
    if (!keyNames || keyNames.length === 0) {{
      keyNames = Object.keys(ev).filter(k => k && (k.endsWith("id") || k.endsWith("_id")));
    }}

    for (let i = 0; i < keyNames.length; i++) {{
      let field = keyNames[i];
      let value = ev[field];
      let key = field + "=" + value;

      if (!seenByField[field]) {{
        seenByField[field] = {{}};
      }}

      if (seenByField[field][value]) {{
        pvg.fail("Duplicate {ent} detected on field " + field + " value " + value);
      }} else {{
        seenByField[field][value] = true;
      }}
    }}
  }}
}});
""".strip()

            synthetic.append(
                StorySpec(
                    name=f"monitor:{ent}:complex-keys:by-field",
                    entity=ent,
                    mode="monitor",
                    raw_js=per_key_mon_js,
                )
            )

        id_base_map[ent] = (id_var, next_id)

    return synthetic


# ---------------------------------------------------------------------------
# JS emission
# ---------------------------------------------------------------------------


def build_call(fn_name: str, id_var: str, extra_args: Optional[List[str]] = None) -> str:
    """
    Build a JS call expression that always uses the canonical single-ID signature.

    extra_args are kept for metadata but are not passed to the JS helper, so that
    stories stay compatible with interfaces.readable.js, where helpers take
    exactly one argument (the ID/primary key).
    """
    return f"{fn_name}({id_var})"


def emit_story(story: StorySpec) -> str:
    """Render a single StorySpec to JS."""

    if story.is_placeholder:
        return f"// [placeholder] {story.name} (no ops/js)"

    if story.raw_js is not None:
        return f"// Story: {story.name}\n{story.raw_js}\n"

    if not story.ops:
        return f"// [empty] {story.name} (no ops)"

    ent_cap = entity_cap_for_interfaces(story.entity or "Entity")
    id_var = story.id_var or make_id_var(story.entity or "entity")

    lines: List[str] = []
    lines.append(f"// Story: {story.name}")
    lines.append(f'bthread("{story.name}", function () {{')
    lines.append(f"  let {id_var} = {story.id_value if story.id_value is not None else 200};")

    for idx, op_name in enumerate(story.ops):
        args = story.op_args.get(idx, [])
        call = build_call(op_name, id_var, args)
        lines.append(f"  {call};")

    lines.append("});")
    lines.append("")
    return "\n".join(lines)


def emit_header(sut: str, provider: str, mode: str, gold_path: Path, num_stories: int) -> str:
    return f"""// Auto-generated HLS stories (readable)
// DO NOT EDIT MANUALLY – generated by emit_hls_all_in_one.py
// SUT      : {sut}
// Provider : {provider}
// Mode     : {mode}
// Source   : {gold_path.name}
// Stories  : {num_stories}

//@provengo summon rest

""".rstrip() + "\n\n"


# ---------------------------------------------------------------------------
# ID assignment for structured stories
# ---------------------------------------------------------------------------


def assign_unique_ids(stories: List[StorySpec], base: int, step: int) -> None:
    """
    Assign ID metadata (id_var, id_value) to all structured stories.
    """
    per_entity_counter: Dict[str, int] = defaultdict(lambda: base)

    for st in stories:
        if st.raw_js or st.is_placeholder:
            continue
        ent = st.entity or "entity"
        if st.id_var is None:
            st.id_var = make_id_var(ent)
        if st.id_value is None:
            current = per_entity_counter[ent]
            st.id_value = current
            per_entity_counter[ent] = current + step


# ---------------------------------------------------------------------------
# CLI
# ---------------------------------------------------------------------------


def build_arg_parser() -> argparse.ArgumentParser:
    p = argparse.ArgumentParser(
        description="Emit HLS stories_hls.js from HLS GOLD (det/nondet)."
    )
    p.add_argument("--gold", required=True, help="Path to HLS GOLD (det or nondet).")
    p.add_argument(
        "--sut",
        required=False,
        default=None,
        help="SUT name (overrides GOLD.meta.sut).",
    )
    p.add_argument(
        "--provider",
        required=False,
        default=None,
        help="Provider (overrides GOLD.meta.provider).",
    )
    p.add_argument(
        "--mode",
        required=False,
        default=None,
        help="Mode (overrides GOLD.meta.mode).",
    )
    p.add_argument(
        "--out_dir",
        required=False,
        default=None,
        help="Output directory; currently ignored (we write next to GOLD).",
    )
    p.add_argument(
        "--id-base",
        type=int,
        default=200,
        help="Base ID per entity (default: 200).",
    )
    p.add_argument(
        "--id-step",
        type=int,
        default=1,
        help="Step between IDs (default: 1).",
    )
    p.add_argument(
        "--complex-entities",
        type=str,
        default="",
        help="Comma-separated complex-key entities.",
    )
    return p


def main(argv=None) -> None:
    args = build_arg_parser().parse_args(argv)

    gold_path = Path(args.gold).resolve()
    if not gold_path.is_file():
        raise SystemExit(f"HLS GOLD not found: {gold_path}")

    meta, stories = load_hls_gold(gold_path)

    sut = args.sut or meta.get("sut") or "unknown_sut"
    provider = args.provider or meta.get("provider") or meta.get("source") or "unknown_provider"
    mode = args.mode or meta.get("mode") or "nondet"
    # honor --out_dir if provided; otherwise default to GOLD's folder
    if args.out_dir:
        out_dir = Path(args.out_dir).resolve()
    else:
        out_dir = gold_path.parent

    # Assign IDs to all structured stories.
    assign_unique_ids(stories, base=args.id_base, step=args.id_step)

    # Collect entities & determine where to start IDs for synthetic stories.
    entities: Set[str] = {st.entity for st in stories if st.entity}

    # Compute next available ID per entity from already-assigned stories.
    id_info: Dict[str, Tuple[str, int]] = {}
    for st in stories:
        if not st.entity or st.raw_js or st.is_placeholder:
            continue
        ent = st.entity
        var = st.id_var or make_id_var(ent)
        val = st.id_value if st.id_value is not None else args.id_base
        if ent not in id_info:
            id_info[ent] = (var, val + args.id_step)
        else:
            cur_var, cur_next = id_info[ent]
            max_seen = max(cur_next - args.id_step, val)
            id_info[ent] = (cur_var, max_seen + args.id_step)

    # Ensure every entity has at least a default entry.
    for ent in entities:
        if ent not in id_info:
            id_info[ent] = (make_id_var(ent), args.id_base)

    # Complex entities: from CLI only (you already wired this via BAT).
    complex_entities = {
        e.strip() for e in (args.complex_entities or "").split(",") if e.strip()
    }

    # Synthesize extra stories (active + monitors + existing-entity flows).
    synthetic = synthesize_entity_stories(
        entities, id_info, args.id_step, mode, complex_entities, meta
    )

    # Merge original + synthetic.
    all_stories: List[StorySpec] = stories + synthetic

    # Now: write into out_dir (or GOLD folder if out_dir not provided)
    out_dir.mkdir(parents=True, exist_ok=True)
    out_path = out_dir / "stories_hls.js"

    print("[INFO] Emitting HLS stories_hls.js from HLS GOLD...")
    header = emit_header(
        sut, provider, mode, gold_path, num_stories=len(all_stories)
    )
    js_text = "\n".join([header] + [emit_story(st) for st in all_stories]).rstrip() + "\n"
    out_path.write_text(js_text, encoding="utf-8")

    print(f"[OK] Wrote HLS stories to: {out_path}")


if __name__ == "__main__":
    main()
