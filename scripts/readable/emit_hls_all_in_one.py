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
- Sanitizes JS identifiers that the emitter introduces (local variables).
- Optional attributes: if an op in GOLD is of the form
    { "fn": "addUser", "args": ["\"John\"", "\"john@x\""] }
  then the generated call will be: addUser(id, "John", "john@x").

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
  updateUser(id, "name_2", "email_2");
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
# Helpers
# ---------------------------------------------------------------------------


def load_json(path: Path) -> Any:
    with path.open("r", encoding="utf-8") as f:
        return json.load(f)


def pascal_case(name: str) -> str:
    parts = [p for p in name.replace("-", "_").split("_") if p]
    return "".join(p[:1].upper() + p[1:] for p in parts)


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
    if isinstance(op, str):
        return op
    if isinstance(op, dict):
        if "fn" in op:
            return str(op["fn"])
        if "name" in op:
            return str(op["name"])
    raise ValueError(f"Unsupported op entry in HLS GOLD: {op!r}")


def parse_name_for_entity_and_mode(name: str) -> Tuple[Optional[str], Optional[str]]:
    parts = name.split(":")
    if len(parts) >= 3 and parts[0] in ("crud", "hls", "lle"):
        return parts[1], parts[2]
    return None, None


# ---------------------------------------------------------------------------
# Constant value generation for attributes
# ---------------------------------------------------------------------------


def const_val_for_attr(name: str, base: int, variant: int = 0) -> Any:
    """
    Generate a realistic-looking constant for an attribute, mirroring the
    heuristics used in build_hls_gold_nondet.py so that synthetic HLS
    stories replay the same style of field values.
    """
    lname = (name or "").lower()
    suffix = base + variant

    if any(x in lname for x in ("name", "title")):
        return f"{name.capitalize()} {suffix}"
    if "email" in lname:
        return f"user{suffix}@example.com"
    if "status" in lname:
        return "active" if suffix % 2 == 0 else "inactive"
    if "desc" in lname:
        return f"{name} description {suffix}"
    if "date" in lname:
        return f"2025-01-{(suffix % 28) + 1:02d}"
    if "flag" in lname or lname.startswith("is_"):
        return bool(suffix % 2)

    # generic string attribute
    return f"{name}_{suffix}"


# ---------------------------------------------------------------------------
# GOLD loader
# ---------------------------------------------------------------------------


def load_hls_gold(path: Path):
    data = load_json(path)
    meta: Dict[str, Any] = {}

    if isinstance(data, dict):
        meta = {k: v for k, v in data.items() if k != "stories"}
        stories_raw = data.get("stories") or []
    elif isinstance(data, list):
        stories_raw = data
    else:
        raise ValueError(f"Unexpected HLS GOLD top-level type: {type(data)}")

    stories: List[StorySpec] = []

    for idx, s in enumerate(stories_raw):
        if not isinstance(s, dict):
            raise ValueError(f"Story entry #{idx} is not an object: {s!r}")

        name = s.get("name") or s.get("id") or s.get("story_name") or f"story_{idx}"
        entity = s.get("entity")
        mode = s.get("mode") or meta.get("mode") or "?"

        # Try to infer entity/mode from the name if missing.
        if not entity or mode == "?":
            ent2, mode2 = parse_name_for_entity_and_mode(name)
            if not entity:
                entity = ent2
            if mode == "?":
                mode = mode2 or mode

        js_text = s.get("js")
        ops_raw = s.get("ops") or s.get("operations") or s.get("steps")

        # Raw JS story – emitter treats as opaque.
        if js_text and not ops_raw:
            stories.append(
                StorySpec(
                    name=name,
                    entity=entity,
                    mode=str(mode or "?"),
                    raw_js=str(js_text),
                )
            )
            continue

        # Structured story – emitter can inject guards, IDs, etc.
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
                    mode=str(mode or "?"),
                    ops=ops,
                    op_args=op_args,
                )
            )
            continue

        # Placeholder / unrecognized entry – just keep the name.
        stories.append(
            StorySpec(
                name=name,
                entity=entity,
                mode=str(mode or "?"),
                is_placeholder=True,
            )
        )

    return meta, stories


# ---------------------------------------------------------------------------
# Guard injection & ID assignment
# ---------------------------------------------------------------------------


def inject_guards_with_map(
    fn_names: List[str],
    entity: Optional[str],
) -> List[Tuple[str, Optional[int]]]:
    """
    Given a list of op names (fn_names) and an entity, inject verification
    calls according to the standard pattern:

      - before first add<Entity>: verify<Entity>DoesNotExist
      - before each delete<Entity>: verify<Entity>Exists
      - after last delete<Entity>: verify<Entity>DoesNotExist (if missing)

    Returns:
      List of (fn_name, orig_index) where orig_index is the index in the
      original fn_names list, or None if the fn was injected (guard).
    """
    if not entity:
        return [(fn, i) for i, fn in enumerate(fn_names)]

    ent_cap = pascal_case(entity)
    add_name = f"add{ent_cap}"
    delete_name = f"delete{ent_cap}"
    verify_exists = f"verify{ent_cap}Exists"
    verify_not_exists = f"verify{ent_cap}DoesNotExist"

    out: List[Tuple[str, Optional[int]]] = []
    last_delete_idx: Optional[int] = None

    for idx, fn in enumerate(fn_names):
        if fn == add_name:
            # Ensure not-exists check immediately before first add.
            if not out or out[-1][0] != verify_not_exists:
                out.append((verify_not_exists, None))
            out.append((fn, idx))
        elif fn == delete_name:
            # Ensure exists check immediately before delete.
            if not out or out[-1][0] != verify_exists:
                out.append((verify_exists, None))
            out.append((fn, idx))
            last_delete_idx = len(out) - 1
        else:
            out.append((fn, idx))

    # After last delete, ensure we verify non-existence.
    if last_delete_idx is not None:
        has_verify_after_delete = any(
            fn == verify_not_exists for fn, _ in out[last_delete_idx + 1 :]
        )
        if not has_verify_after_delete:
            out.append((verify_not_exists, None))

    return out


def assign_unique_ids(stories: List[StorySpec], base: int = 200, step: int = 1) -> None:
    """
    Assigns IDs to structured (non-raw_js) stories per entity.
    Raw JS stories are left untouched, because we can't safely rewrite them.
    """
    next_id: Dict[str, int] = defaultdict(lambda: base)

    for st in stories:
        if st.raw_js is not None or st.is_placeholder or not st.entity:
            continue  # don't touch raw JS or placeholders

        ent = st.entity
        st.id_var = make_id_var(ent)
        st.id_value = next_id[ent]
        next_id[ent] += step


# ---------------------------------------------------------------------------
# Synthetic stories & monitors
# ---------------------------------------------------------------------------


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
      - passive monitors (add/delete)
      - complex-key monitors (for entities in complex_entities):
          * monitor:<ent>:complex-keys
          * monitor:<ent>:complex-keys:by-field

    Synthetic CRUD stories are structured stories (ops list, guards injected).
    Monitors and existing-* stories are raw JS.

    If meta["entities"] provides "add_args" / "update_args" (per entity),
    they are used as extra JS args for add<Ent> / update<Ent> in these
    synthetic stories. If not, we derive them from the entity's "attrs"
    using const_val_for_attr().
    """
    synthetic: List[StorySpec] = []

    # meta["entities"] may be:
    #   - a dict: { "user": {...}, "project": {...} }
    #   - a list: [ { "entity": "projects", "attrs": [...] }, ... ]
    entities_meta_raw = meta.get("entities") or {}
    entities_meta: Dict[str, Dict[str, Any]] = {}

    if isinstance(entities_meta_raw, list):
        for idx, e in enumerate(entities_meta_raw):
            if not isinstance(e, dict):
                continue
            if "_index" not in e:
                e["_index"] = idx
            # Try a few possible keys for the entity name
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
        ent_cap = pascal_case(ent)
        id_var, next_id = id_base_map.get(ent, (make_id_var(ent), 200))

        # Decide which field name carries the primary ID in events.
        # Default: use the JS id variable name (e.g., 'userId').
        # If GOLD meta provides explicit key fields, prefer the first one
        # (e.g., 'idUser'), so monitors align with interfaces.js/events.
        e_meta = {}
        id_field_name = sanitize_var_name(id_var)

        # We'll overwrite e_meta below, but we want id_field_name to be
        # computed even when meta is missing or incomplete.

        # Per-entity CRUD args:
        #   - If GOLD already provides add_args/update_args, we reuse them.
        #   - Otherwise, we derive realistic-looking field values from the
        #     entity's attrs list using const_val_for_attr(), so that HLS
        #     stories replay the same field *sets* that appear in GOLD.
        # Attach GOLD meta (if any) and refine the ID field name.
        e_meta = entities_meta.get(ent) or {}
        if isinstance(e_meta, dict):
            raw_keys = e_meta.get("keys") or []
            if isinstance(raw_keys, list) and raw_keys:
                # Use the first key as the primary ID field name.
                # This lets you keep OpenAPI-style IDs like 'idUser'
                # while our internal JS variable stays 'userId'.
                id_field_name = str(raw_keys[0])

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
                # Nudge the base so update-values differ from add-values.
                update_args = [
                    json.dumps(const_val_for_attr(a, base_val, variant=1))
                    for a in attrs
                ]
                e_meta["update_args"] = update_args

            # Build per-attribute maps (useful for req-only vs with-optional stories).
            for idx, a in enumerate(attrs):
                # For robustness, guard against mismatched lengths.
                aval = add_args[idx] if idx < len(add_args) else json.dumps(
                    const_val_for_attr(a, base_val, variant=0)
                )
                uval = update_args[idx] if idx < len(update_args) else json.dumps(
                    const_val_for_attr(a, base_val, variant=1)
                )
                attr_vals_add[a] = aval
                attr_vals_update[a] = uval

        # For entities without attrs at all, we keep add_args/update_args as-is (often empty)
        # and won't try to generate req-only / with-optional variants.

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
                st.op_args = op_args_override
            next_id += id_step
            return st

        # Positive basic stories:
        # - If we know required vs optional attributes, emit two variants:
        #     * positive:basic:req-only        – only required attributes
        #     * positive:basic:with-optional   – required + optional attributes
        # - Otherwise, emit a single positive:basic using whatever add_args we have.

        # Build a canonical full-args list from attrs/add_args, if available.
        full_add_args = add_args
        if attrs and attr_vals_add:
            full_add_args = [attr_vals_add[a] for a in attrs if a in attr_vals_add]

        if required_attrs or optional_attrs:
            # req-only variant: restrict to required attributes (if known).
            if required_attrs and attr_vals_add:
                req_only_args = [
                    attr_vals_add[a] for a in required_attrs if a in attr_vals_add
                ]
            else:
                # If we have no explicit required set, treat everything as required.
                req_only_args = full_add_args

            op_args_basic_req: Dict[int, List[str]] = {}
            if req_only_args:
                op_args_basic_req[0] = req_only_args

            synthetic.append(
                new(
                    [
                        f"add{ent_cap}",
                        f"verify{ent_cap}Exists",
                        f"delete{ent_cap}",
                    ],
                    "positive:basic:req-only",
                    op_args_override=op_args_basic_req or None,
                )
            )

            # with-optional variant: full payload (required + optional).
            op_args_basic_full: Dict[int, List[str]] = {}
            if full_add_args:
                op_args_basic_full[0] = full_add_args

            synthetic.append(
                new(
                    [
                        f"add{ent_cap}",
                        f"verify{ent_cap}Exists",
                        f"delete{ent_cap}",
                    ],
                    "positive:basic:with-optional",
                    op_args_override=op_args_basic_full or None,
                )
            )
        else:
            # Legacy behaviour: single basic story using add_args as-is.
            op_args_basic: Dict[int, List[str]] = {}
            if add_args:
                op_args_basic[0] = add_args

            synthetic.append(
                new(
                    [
                        f"add{ent_cap}",
                        f"verify{ent_cap}Exists",
                        f"delete{ent_cap}",
                    ],
                    "positive:basic",
                    op_args_override=op_args_basic or None,
                )
            )

        # Positive update: add + update while entity exists.
        # Index 0: add<X>, index 2: update<X>.
        op_args_update: Dict[int, List[str]] = {}
        if add_args:
            op_args_update[0] = add_args
        if update_args:
            op_args_update[2] = update_args

        synthetic.append(
            new(
                [
                    f"add{ent_cap}",
                    f"verify{ent_cap}Exists",
                    f"update{ent_cap}",
                ],
                "positive:update",
                op_args_override=op_args_update or None,
            )
        )

        # Negative: duplicate add should fail (4xx = PASS).
        op_args_dup: Dict[int, List[str]] = {}
        if add_args:
            op_args_dup[0] = add_args

        synthetic.append(
            new(
                [
                    f"add{ent_cap}",
                    f"verify{ent_cap}Exists",
                    f"tryToAddExisting{ent_cap}",
                ],
                "negative:dup-add",
                op_args_override=op_args_dup or None,
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
  let id = ev["{sanitize_var_name(id_var)}"];

  // Ensure it really exists, then update
  verify{ent_cap}Exists(id);
  update{ent_cap}(id);
  verify{ent_cap}Exists(id);
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
  let id = ev["{sanitize_var_name(id_var)}"];

  verify{ent_cap}Exists(id);
  tryToAddExisting{ent_cap}(id);
  verify{ent_cap}Exists(id);
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
    block(matchDelete{ent_cap}(idValue), function () {{
      verify{ent_cap}Exists(idValue);
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
    block(matchAdd{ent_cap}(idValue), function () {{
      verify{ent_cap}DoesNotExist(idValue);
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
            # Decide which fields define the composite key for this entity.
            # Prefer GOLD meta["entities"][ent]["keys"], fall back to "*id"/"*__id" fields.
            e_keys: List[str] = []
            if isinstance(e_meta, dict):
                raw_keys = e_meta.get("keys") or []
                if isinstance(raw_keys, list):
                    e_keys = [str(k) for k in raw_keys if k]

            # Pre-render the static part of the key-names array; JS code will
            # use it when non-empty, otherwise fall back to a dynamic heuristic.
            keys_js_array = ", ".join(json.dumps(k) for k in e_keys)

            # Full + partial composite key duplicates.
            complex_mon_js = f"""
bthread("monitor:{ent}:complex-keys", function () {{
  let fullSeen = {{}}, partialSeen = {{}};
  const baseKeyNames = [{keys_js_array}];
  while (true) {{
    let ev = waitForAny{ent_cap}Added();

    // Choose which fields participate in the composite key:
    //   1) If GOLD provided explicit key fields, use them.
    //   2) Otherwise, take all properties whose names end with "id" or "_id".
    let keyNames = baseKeyNames;
    if (keyNames.length === 0) {{
      keyNames = [];
      for (let k in ev) {{
        if (!Object.prototype.hasOwnProperty.call(ev, k)) continue;
        let kl = ("" + k).toLowerCase();
        if (kl.endsWith("id") || kl.endsWith("_id")) keyNames.push(k);
      }}
    }}
    if (keyNames.length === 0) return;  // nothing to monitor

    let values = keyNames.map(k => String(ev[k]));

    // Full composite key (tuple of all key fields)
    let fullKey = values.join("|");
    if (fullSeen[fullKey]) bp.ASSERT(false, "Duplicate composite {ent} key " + fullKey);
    fullSeen[fullKey] = true;

    // Per-field duplicates for each key component
    for (let i = 0; i < keyNames.length; ++i) {{
      let partKey = keyNames[i] + "=" + values[i];
      if (partialSeen[partKey]) bp.ASSERT(false, "Duplicate partial {ent} key " + partKey);
      partialSeen[partKey] = true;
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

            # Per-field duplicate monitor, focused on the same key fields.
            per_key_mon_js = f"""
bthread("monitor:{ent}:complex-keys:by-field", function () {{
  let seenByField = {{}};
  const baseKeyNames = [{keys_js_array}];
  while (true) {{
    let ev = waitForAny{ent_cap}Added();

    let keyNames = baseKeyNames;
    if (keyNames.length === 0) {{
      keyNames = [];
      for (let k in ev) {{
        if (!Object.prototype.hasOwnProperty.call(ev, k)) continue;
        let kl = ("" + k).toLowerCase();
        if (kl.endsWith("id") || kl.endsWith("_id")) keyNames.push(k);
      }}
    }}
    if (keyNames.length === 0) return;

    for (let i = 0; i < keyNames.length; ++i) {{
      let k = keyNames[i];
      let value = String(ev[k]);
      let key = k + "=" + value;
      if (seenByField[key]) {{
        bp.ASSERT(false, "Duplicate {ent} for key " + key);
      }}
      seenByField[key] = true;
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

        # Update id_base_map so future extensions know where we left off.
        id_base_map[ent] = (id_var, next_id)

    return synthetic


# ---------------------------------------------------------------------------
# Emission
# ---------------------------------------------------------------------------


def emit_header(
    sut: str, provider: str, mode: str, src: Path, num_stories: int
) -> str:
    return "\n".join(
        [
            "// ============================================================================",
            "// Auto-generated Provengo HLS stories",
            f"// SUT={sut}  Provider={provider}  Mode={mode}",
            f"// Source GOLD: {src}",
            f"// Total stories (including synthetic): {num_stories}",
            "// ============================================================================",
            "",
        ]
    )


def build_call(fn_name: str, id_var: str, extra_args: Optional[List[str]]) -> str:
    """
    Build a JS call expression.

    extra_args, if provided, are treated as raw JS expressions from GOLD.
    """
    args: List[str] = [id_var]
    if extra_args:
        args.extend(extra_args)
    return f"{fn_name}({', '.join(args)})"


def emit_story(story: StorySpec) -> str:
    """Render a single StorySpec to JS."""
    # Placeholders are skipped with a comment.
    if story.is_placeholder:
        return f"// [placeholder story skipped] {story.name}\n\n"

    # Raw JS stories are emitted verbatim.
    if story.raw_js is not None:
        js = story.raw_js.strip()
        if not js.endswith("\n"):
            js += "\n"
        return js + "\n\n"

    # Structured story.
    ent = story.entity or "entity"
    id_var = sanitize_var_name(story.id_var or make_id_var(ent))
    id_value = 0 if story.id_value is None else story.id_value

    lines: List[str] = []
    lines.append(f"// ---- {story.name} ----")
    lines.append(f'bthread("{story.name}", function () {{')
    lines.append(f"  let {id_var} = {json.dumps(id_value)};")

    original_ops = story.ops
    op_args = story.op_args or {}

    # Inject guards: verifyDoesNotExist before first add, verifyExists before
    # each delete, and verifyDoesNotExist after last delete (if missing).
    ops_with_map = inject_guards_with_map(original_ops, story.entity)

    for fn, orig_index in ops_with_map:
        extra = op_args.get(orig_index) if orig_index is not None else None
        lines.append(f"  {build_call(fn, id_var, extra)};")

    lines.append("  ")
    lines.append("});")
    lines.append("")
    return "\n".join(lines)


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
