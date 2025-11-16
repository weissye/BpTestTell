#!/usr/bin/env python
# scripts/readable/emit_hls_all_in_one.py
"""
Generic HLS stories emitter (new version).

This script reads a "HLS GOLD" JSON file – a high-level description of stories –
and emits a Provengo stories_hls.js file.

Goals of this version:
- Keep support for existing structured stories from HLS GOLD.
- Add generic active / passive / negative story patterns per CRUD entity:
  * Active: add / verify / update / delete flows with guards.
  * Passive: monitors around add/delete using waitForAny*/match* helpers.
  * Negative: duplicate-add and delete-nonexistent patterns, where the
    underlying LLE treats 4xx as PASS and 2xx as FAIL.

It is generic over systems (7 synthetic SUTs + 10 real-world SUTs) and
operates only on HLS GOLD + naming conventions.
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
    """Internal, uniform representation of a story to emit."""
    name: str
    entity: Optional[str] = None
    mode: str = "?"
    ops: List[str] = field(default_factory=list)  # structured ops (function names)
    raw_js: Optional[str] = None                 # pre-rendered JS, if any
    id_var: Optional[str] = None                 # JS id variable name (e.g. userId)
    id_value: Optional[int] = None               # numeric id assigned per entity
    is_placeholder: bool = False                 # skip emission if True


# ---------------------------------------------------------------------------
# Helpers: JSON IO
# ---------------------------------------------------------------------------

def load_json(path: Path) -> Any:
    with path.open("r", encoding="utf-8") as f:
        return json.load(f)


# ---------------------------------------------------------------------------
# Helpers: name parsing, casing
# ---------------------------------------------------------------------------

def parse_name_for_entity_and_mode(name: str) -> Tuple[Optional[str], Optional[str]]:
    """
    Parse story name of the form 'crud:book:nondet:1:1' and extract
    (entity, mode) -> ('book', 'nondet').

    Returns (entity or None, mode or None) if parsing fails.
    """
    parts = name.split(":")
    if len(parts) >= 3 and parts[0] in ("crud", "hls", "lle"):
        return parts[1], parts[2]
    return None, None


def pascal_case(name: str) -> str:
    """
    Turn 'book', 'user', 'library_member' -> 'Book', 'User', 'LibraryMember'.
    """
    parts = [p for p in name.replace("-", "_").split("_") if p]
    return "".join(p[:1].upper() + p[1:] for p in parts)


def make_id_var(entity: str) -> str:
    """
    JS variable name for an entity id. We keep it simple and readable:

      'book'  -> 'bookId'
      'user'  -> 'userId'
      'loan'  -> 'loanId'
      'user_account' -> 'userAccountId'

    Only used as a local variable name inside the bthread.
    """
    # camelCase the entity first
    parts = [p for p in entity.replace("-", "_").split("_") if p]
    if not parts:
        return "id"
    camel = parts[0] + "".join(p[:1].upper() + p[1:] for p in parts[1:])
    if camel.endswith("Id"):
        return camel
    return camel + "Id"


def normalize_op_name(op: Any) -> str:
    """
    HLS GOLD may store ops either as strings, or as tiny dicts like:
      { "fn": "addBook" } or { "name": "addBook" }.

    This normalizes them to plain strings.
    """
    if isinstance(op, str):
        return op
    if isinstance(op, dict):
        if "fn" in op:
            return str(op["fn"])
        if "name" in op:
            return str(op["name"])
    raise ValueError(f"Unsupported op entry in HLS GOLD: {op!r}")


# ---------------------------------------------------------------------------
# Load HLS GOLD
# ---------------------------------------------------------------------------

def load_hls_gold(path: Path) -> Tuple[Dict[str, Any], List[StorySpec]]:
    """
    Load HLS GOLD and convert it into a list of StorySpec objects.

    The JSON can be either:
      - a dict with a 'stories' list, plus meta fields (sut, provider, mode, ...)
      - a list of story dicts directly.

    Each story dict may contain:
      - 'name'      (string, required; fallbacks use index or 'id')
      - 'entity'    (optional)
      - 'mode'      (optional; default meta.mode or inferred from name)
      - 'ops' / 'operations' / 'steps' – list of op descriptors; OR
      - 'js'        – pre-rendered JS snippet.
    """
    data = load_json(path)
    meta: Dict[str, Any] = {}
    stories_raw: List[Any]

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

        name = (
            s.get("name")
            or s.get("id")
            or s.get("story_name")
            or f"story_{idx}"
        )

        entity = s.get("entity")
        mode = s.get("mode") or meta.get("mode") or "?"

        if not entity or mode == "?":
            ent2, mode2 = parse_name_for_entity_and_mode(name)
            if not entity:
                entity = ent2
            if mode == "?":
                mode = mode2 or mode

        js_text = s.get("js")
        ops_raw = s.get("ops") or s.get("operations") or s.get("steps")

        # Case 1: pre-rendered JS story
        if js_text and (not ops_raw):
            stories.append(
                StorySpec(
                    name=name,
                    entity=entity,
                    mode=str(mode or "?"),
                    raw_js=str(js_text),
                    ops=[],
                    is_placeholder=False,
                )
            )
            continue

        # Case 2: structured story with ops/steps
        if isinstance(ops_raw, list) and ops_raw:
            ops = [normalize_op_name(op) for op in ops_raw]
            stories.append(
                StorySpec(
                    name=name,
                    entity=entity,
                    mode=str(mode or "?"),
                    ops=ops,
                    raw_js=None,
                    is_placeholder=False,
                )
            )
            continue

        # Fallback: missing everything – we mark as placeholder and skip later.
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
# Guard injection for structured CRUD stories
# ---------------------------------------------------------------------------

def inject_guards(fn_names: List[str], entity: Optional[str]) -> List[str]:
    """
    Given a list of function names (ops) for a single story and a CRUD entity
    name (e.g., 'book'), insert guard calls around add/delete operations.

    We assume CRUD-ish naming conventions like:

        addBook, deleteBook, updateBook,
        verifyBookExists, verifyBookDoesNotExist,
        tryToAddExistingBook, tryToDeleteANonExistingBook, ...

    Rules (for structured stories):

      * Before the first add<Entity>() call, ensure there is a
        verify<Entity>DoesNotExist() immediately before. If not, insert it.

      * Before the first delete<Entity>() call, ensure there is a
        verify<Entity>Exists() immediately before. If not, insert it.

      * After the last delete<Entity>() call, ensure there is a
        verify<Entity>DoesNotExist() somewhere after that delete. If not,
        append one at the end.

    Negative operations (tryToAddExisting..., tryToDeleteANonExisting...) are
    left as-is.
    """
    if not entity:
        return fn_names[:]

    ent_cap = pascal_case(entity)
    add_name = f"add{ent_cap}"
    delete_name = f"delete{ent_cap}"
    verify_exists = f"verify{ent_cap}Exists"
    verify_not_exists = f"verify{ent_cap}DoesNotExist"

    out: List[str] = []
    last_delete_idx: Optional[int] = None

    for fn in fn_names:
        if fn == add_name:
            # Before first add, make sure verifyDoesNotExist appears
            if not out or out[-1] != verify_not_exists:
                out.append(verify_not_exists)
            out.append(fn)
        elif fn == delete_name:
            # Before first delete, ensure verifyExists appears
            if not out or out[-1] != verify_exists:
                out.append(verify_exists)
            out.append(fn)
            last_delete_idx = len(out) - 1
        else:
            out.append(fn)

    # Ensure verifyDoesNotExist after last delete
    if last_delete_idx is not None:
        has_verify_after_delete = any(
            fn == verify_not_exists for fn in out[last_delete_idx + 1 :]
        )
        if not has_verify_after_delete:
            out.append(verify_not_exists)

    return out


# ---------------------------------------------------------------------------
# Synthesis of generic active / passive / negative stories
# ---------------------------------------------------------------------------

def assign_ids(
    stories: List[StorySpec],
    id_base: int,
    id_step: int,
) -> Dict[str, Tuple[str, int]]:
    """
    Assign numeric IDs to all structured stories per entity.

    Returns a mapping: entity -> (id_var, next_available_id)
    so that synthetic stories can keep allocating without duplication.
    """
    next_per_entity: Dict[str, int] = defaultdict(lambda: id_base)
    id_var_per_entity: Dict[str, str] = {}

    for st in stories:
        if st.is_placeholder or st.raw_js or not st.entity:
            continue
        ent = st.entity
        if ent not in id_var_per_entity:
            id_var_per_entity[ent] = make_id_var(ent)
        st.id_var = id_var_per_entity[ent]
        st.id_value = next_per_entity[ent]
        next_per_entity[ent] += id_step

    return {ent: (id_var_per_entity[ent], next_per_entity[ent]) for ent in id_var_per_entity}


def synthesize_entity_stories(
    entities: Set[str],
    id_info: Dict[str, Tuple[str, int]],
    id_step: int,
    default_mode: str,
    complex_entities: Set[str],
) -> List[StorySpec]:
    """
    For each entity, synthesize:
      - 2 active positive stories
      - 2 negative stories (dup-add, delete-nonexistent)
      - 2 passive monitors (add/delete)
      - (if entity is complex-key) an additional complex-key monitor that
        enforces no duplicates on full and partial composite keys.

    Complex entities are given by the `complex_entities` set and are
    handled generically: we look at all event fields whose name ends
    with 'Id' and treat them as composite-key dimensions.
    """
    synthetic: List[StorySpec] = []

    for ent in sorted(entities):
        ent_cap = pascal_case(ent)
        id_var, next_id = id_info.get(ent, (make_id_var(ent), 200))

        # ---------------- ACTIVE POSITIVE STORIES ----------------
        # Active positive: basic lifecycle
        name_basic = f"crud:{ent}:{default_mode}:positive:basic"
        ops_basic = [
            f"verify{ent_cap}DoesNotExist",
            f"add{ent_cap}",
            f"verify{ent_cap}Exists",
            f"delete{ent_cap}",
            f"verify{ent_cap}DoesNotExist",
        ]
        st_basic = StorySpec(
            name=name_basic,
            entity=ent,
            mode=default_mode,
            ops=ops_basic,
            raw_js=None,
        )
        st_basic.id_var = id_var
        st_basic.id_value = next_id
        next_id += id_step
        synthetic.append(st_basic)

        # Active positive: add + update
        name_update = f"crud:{ent}:{default_mode}:positive:update"
        ops_update = [
            f"verify{ent_cap}DoesNotExist",
            f"add{ent_cap}",
            f"verify{ent_cap}Exists",
            f"update{ent_cap}",
            f"verify{ent_cap}Exists",
        ]
        st_update = StorySpec(
            name=name_update,
            entity=ent,
            mode=default_mode,
            ops=ops_update,
            raw_js=None,
        )
        st_update.id_var = id_var
        st_update.id_value = next_id
        next_id += id_step
        synthetic.append(st_update)

        # ---------------- NEGATIVE STORIES ----------------
        # Negative: duplicate-add
        name_dup = f"crud:{ent}:{default_mode}:negative:dup-add"
        ops_dup = [
            f"verify{ent_cap}DoesNotExist",
            f"add{ent_cap}",
            f"verify{ent_cap}Exists",
            f"tryToAddExisting{ent_cap}",
            f"verify{ent_cap}Exists",
        ]
        st_dup = StorySpec(
            name=name_dup,
            entity=ent,
            mode=default_mode,
            ops=ops_dup,
            raw_js=None,
        )
        st_dup.id_var = id_var
        st_dup.id_value = next_id
        next_id += id_step
        synthetic.append(st_dup)

        # Negative: delete-nonexistent
        name_del_neg = f"crud:{ent}:{default_mode}:negative:delete-nonexistent"
        ops_del_neg = [
            f"verify{ent_cap}DoesNotExist",
            f"tryToDeleteANonExisting{ent_cap}",
            f"verify{ent_cap}DoesNotExist",
        ]
        st_del_neg = StorySpec(
            name=name_del_neg,
            entity=ent,
            mode=default_mode,
            ops=ops_del_neg,
            raw_js=None,
        )
        st_del_neg.id_var = id_var
        st_del_neg.id_value = next_id
        next_id += id_step
        synthetic.append(st_del_neg)

        # ---------------- PASSIVE MONITORS (simple key) ----------------
        # Passive monitor: add -> verifyExists before delete
        monitor_add_js = f"""
bthread("monitor:{ent}:add", function () {{
  while (true) {{
    let ev = waitForAny{ent_cap}Added();
    block(matchDelete{ent_cap}(ev.{id_var}), function () {{
      verify{ent_cap}Exists(ev.{id_var});
    }});
  }}
}});
""".strip()
        synthetic.append(
            StorySpec(
                name=f"monitor:{ent}:add",
                entity=ent,
                mode="monitor",
                raw_js=monitor_add_js,
                ops=[],
            )
        )

        # Passive monitor: delete -> verifyDoesNotExist before re-add
        monitor_del_js = f"""
bthread("monitor:{ent}:delete", function () {{
  while (true) {{
    let ev = waitForAny{ent_cap}Deleted();
    block(matchAdd{ent_cap}(ev.{id_var}), function () {{
      verify{ent_cap}DoesNotExist(ev.{id_var});
    }});
  }}
}});
""".strip()
        synthetic.append(
            StorySpec(
                name=f"monitor:{ent}:delete",
                entity=ent,
                mode="monitor",
                raw_js=monitor_del_js,
                ops=[],
            )
        )

        # ---------------- COMPLEX-KEY MONITORS (Section 1.5) ----------------
        if ent in complex_entities:
            # Generic complex-key monitor:
            #
            # - listens to waitForAny<Entity>Added()
            # - looks at all fields whose names end with "Id"
            # - treats them as composite-key dimensions
            # - forbids duplicates on:
            #   * full composite key (all dimensions)
            #   * each individual dimension (partial keys)
            monitor_complex_js = f"""
bthread("monitor:{ent}:complex-keys", function () {{
  let fullSeen = {{}};
  let partialSeen = {{}};

  while (true) {{
    let ev = waitForAny{ent_cap}Added();

    // Collect key-like fields (fooId, barId, ...)
    let keyNames = [];
    for (let k in ev) {{
      if (Object.prototype.hasOwnProperty.call(ev, k) && k.endsWith("Id")) {{
        keyNames.push(k);
      }}
    }}
    if (keyNames.length === 0) {{
      // Nothing to do if we can't see any Id-like fields
      continue;
    }}

    let values = keyNames.map(function (k) {{ return String(ev[k]); }});

    // Full composite key (all dimensions together)
    let fullKey = values.join("|");
    if (fullSeen[fullKey]) {{
      bp.ASSERT(false, "Duplicate composite {ent} key (full) " + fullKey);
    }}
    fullSeen[fullKey] = true;

    // Partial keys: each single dimension on its own
    for (let i = 0; i < keyNames.length; ++i) {{
      let partKey = keyNames[i] + "=" + values[i];
      if (partialSeen[partKey]) {{
        bp.ASSERT(false, "Duplicate partial {ent} key " + partKey);
      }}
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
                    raw_js=monitor_complex_js,
                    ops=[],
                )
            )

        # Update id_info for further synthetic stories
        id_info[ent] = (id_var, next_id)

    return synthetic

# ---------------------------------------------------------------------------
# JS emission
# ---------------------------------------------------------------------------

def emit_header(sut: str, provider: str, mode: str, src: Path, num_stories: int) -> str:
    lines = [
        "// ============================================================================",
        "// Auto-generated Provengo HLS stories",
        f"// SUT={sut}  Provider={provider}  Mode={mode}",
        f"// Source GOLD: {src}",
        f"// Total stories (including synthetic): {num_stories}",
        "// ============================================================================",
        "",
    ]
    return "\n".join(lines)


def emit_story(story: StorySpec) -> str:
    if story.is_placeholder:
        return f"// [placeholder story skipped] {story.name}\n\n"

    # Raw JS story: we trust it as-is
    if story.raw_js is not None:
        js = story.raw_js.strip()
        if not js.endswith("\n"):
            js += "\n"
        return js + "\n\n"

    # Structured story – emit bthread with ID and ops (with guards)
    ent = story.entity or "entity"
    id_var = story.id_var or make_id_var(ent)
    id_value = 0 if story.id_value is None else story.id_value

    lines: List[str] = []
    lines.append(f"// ---- {story.name} ----")
    lines.append(f'bthread("{story.name}", function () {{')
    lines.append(f"  let {id_var} = {id_value};")

    ops_with_guards = inject_guards(story.ops, story.entity)

    for fn in ops_with_guards:
        lines.append(f"  {fn}({id_var});")

    lines.append("  ")
    lines.append("});")
    lines.append("")
    return "\n".join(lines)


# ---------------------------------------------------------------------------
# CLI
# ---------------------------------------------------------------------------

def build_arg_parser() -> argparse.ArgumentParser:
    p = argparse.ArgumentParser(
        description="Emit stories_hls.js from HLS GOLD, with generic active/passive/negative stories."
    )
    p.add_argument(
        "--gold",
        required=True,
        help="Path to HLS GOLD JSON file.",
    )
    p.add_argument(
        "--sut",
        required=False,
        default=None,
        help="SUT name (overrides GOLD.meta.sut if provided).",
    )
    p.add_argument(
        "--provider",
        required=False,
        default=None,
        help="Provider name (overrides GOLD.meta.provider if provided).",
    )
    p.add_argument(
        "--mode",
        required=False,
        default=None,
        help="Story mode (overrides GOLD.meta.mode if provided; typical: 'det' or 'nondet').",
    )
    p.add_argument(
        "--out_dir",
        required=False,
        default=None,
        help=(
            "Output directory; stories_hls.js will be created inside this dir. "
            "If omitted, stories_hls.js is written next to the GOLD file."
        ),
    )
    p.add_argument(
        "--id-base",
        type=int,
        default=200,
        help="Base numeric ID to start from for each entity (default: 200).",
    )
    p.add_argument(
        "--id-step",
        type=int,
        default=1,
        help="Step between consecutive IDs for the same entity (default: 1).",
    )
    p.add_argument(
        "--complex-entities",
        type=str,
        default="",
        help=(
            "Comma-separated list of entities considered complex-key (e.g. 'loan,orderLine'). "
            "Currently used only for potential future monitor extensions."
        ),
    )
    return p


def main(argv=None) -> None:
    parser = build_arg_parser()
    args = parser.parse_args(argv)

    gold_path = Path(args.gold).resolve()
    if not gold_path.is_file():
        raise SystemExit(f"HLS GOLD not found: {gold_path}")

    meta, stories = load_hls_gold(gold_path)

    sut = args.sut or meta.get("sut") or "unknown_sut"
    provider = args.provider or meta.get("provider") or meta.get("source") or "unknown_provider"
    mode = args.mode or meta.get("mode") or "nondet"

    # Determine entities present in GOLD
    entities: Set[str] = {st.entity for st in stories if st.entity}
    complex_entities: Set[str] = set(
        e.strip() for e in (args.complex_entities or "").split(",") if e.strip()
    )

    id_info = assign_ids(stories, id_base=args.id_base, id_step=args.id_step)

    # Synthesize extra stories per entity (active/passive/negative)
    synthetic = synthesize_entity_stories(
        entities=entities,
        id_info=id_info,
        id_step=args.id_step,
        default_mode=mode,
        complex_entities=complex_entities,
    )

    all_stories: List[StorySpec] = stories + synthetic

    # Determine output path
    if args.out_dir:
        out_dir = Path(args.out_dir)
        out_dir.mkdir(parents=True, exist_ok=True)
        out_path = out_dir / "stories_hls.js"
    else:
        out_path = gold_path.with_name("stories_hls.js")
        out_path.parent.mkdir(parents=True, exist_ok=True)

    # Emit JS
    header = emit_header(sut, provider, mode, gold_path, num_stories=len(all_stories))
    parts: List[str] = [header] + [emit_story(st) for st in all_stories]
    js_text = "\n".join(parts).rstrip() + "\n"
    out_path.write_text(js_text, encoding="utf-8")
    print(f"[OK] Wrote HLS stories to: {out_path}")


if __name__ == "__main__":
    main()
