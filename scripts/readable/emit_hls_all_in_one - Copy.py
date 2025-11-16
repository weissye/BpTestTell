#!/usr/bin/env python
# scripts/readable/emit_hls_all_in_one.py
"""
Generic HLS stories emitter.

This script reads a "HLS GOLD" JSON file – a high-level description of stories –
and emits a Provengo stories_hls.js file.

It supports three kinds of stories:

1. Structured stories with ops/steps:
   {
     "name": "crud:book:nondet:1:1",
     "entity": "book",
     "mode": "nondet",
     "ops": ["addBook", "verifyBookExists", ...]
   }

   -> We generate a bthread with:
        - per-entity unique IDs
        - guards around add/delete

2. Placeholder stories (no content), e.g.:
   { "name": "CRUD_book", "entity": "book", "steps": [] }

   -> We skip them (emit only a comment).

3. Pre-rendered JS stories:
   {
     "name": "crud:book:nondet:1:1",
     "js": "// ---- crud:book:nondet:1:1 ----\n bthread(...){...}\n"
   }

   -> We copy the JS snippet as-is into stories_hls.js.

Assumed HLS GOLD top-level:

* Either:
    {
      "sut": "...",
      "provider": "...",
      "mode": "...",
      "stories": [ { ... }, ... ]
    }
* Or just a list: [ { ... }, ... ]
"""

import argparse
import json
from dataclasses import dataclass, field
from pathlib import Path
from typing import Dict, List, Tuple, Any, Optional
from collections import defaultdict


# ---------------------------------------------------------------------------
# Data model
# ---------------------------------------------------------------------------

@dataclass
class StorySpec:
    name: str
    entity: str
    mode: str = "?"
    ops: List[str] = field(default_factory=list)

    # derived / filled in later (for structured stories)
    id_var: str = ""
    id_value: int = 0

    # if not None -> this story is already full JS text
    raw_js: Optional[str] = None

    # placeholder (steps: [] and no js) – will be skipped in emission
    is_placeholder: bool = False


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def load_json(path: Path) -> Any:
    with path.open("r", encoding="utf-8") as f:
        return json.load(f)


def parse_name_for_entity_and_mode(name: str) -> Tuple[str, str]:
    """
    Expect patterns like:  crud:book:nondet:1:1
    Returns (entity, mode) with safe fallbacks.
    """
    parts = name.split(":")
    entity = "entity"
    mode = "?"
    if len(parts) >= 2 and parts[0].lower() == "crud":
        entity = parts[1]
    if len(parts) >= 3:
        mode = parts[2]
    return entity, mode


def extract_fn_name(op: Any) -> str:
    """
    Normalize an operation entry to a plain function name string.
    Accepts:
        - "addBook"
        - {"fn": "addBook"}
        - {"name": "addBook"}
    """
    if isinstance(op, str):
        return op
    if isinstance(op, dict):
        if "fn" in op:
            return str(op["fn"])
        if "name" in op:
            return str(op["name"])
    raise ValueError(f"Unsupported op entry in HLS GOLD: {op!r}")


def load_hls_gold(path: Path) -> Tuple[Dict[str, Any], List[StorySpec]]:
    """
    Load HLS GOLD and convert it into a list of StorySpec objects.

    The JSON can be either:
        - a dict with a 'stories' list, or
        - a list of story dicts directly.

    For each story we look for:
        - 'name'  (or 'id' / 'story_name' as fallback)
        - 'entity' (optional; inferred from name if missing)
        - 'mode' (optional; inferred from name or top-level 'mode')
        - 'ops' / 'operations' / 'steps' – list of op descriptors; OR
        - 'js' – a pre-rendered JS snippet.
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

        name = s.get("name") or s.get("id") or s.get("story_name")
        if not name:
            raise ValueError(f"Story #{idx} missing 'name' field: {s!r}")

        # entity / mode
        entity = s.get("entity")
        mode = s.get("mode") or meta.get("mode") or "?"

        if not entity or mode == "?":
            ent_from_name, mode_from_name = parse_name_for_entity_and_mode(name)
            if not entity:
                entity = ent_from_name
            if mode == "?":
                mode = mode_from_name

        # ops list / steps
        ops_raw = s.get("ops") or s.get("operations") or s.get("steps")
        js_text = s.get("js")

        # Case 1: pre-rendered JS story
        if js_text and (ops_raw is None or ops_raw == []):
            story = StorySpec(
                name=name,
                entity=str(entity),
                mode=str(mode),
                raw_js=str(js_text),
                is_placeholder=False,
            )
            stories.append(story)
            continue

        # Case 2: structured story with ops/steps
        if isinstance(ops_raw, list) and len(ops_raw) > 0:
            ops = [extract_fn_name(op) for op in ops_raw]
            story = StorySpec(
                name=name,
                entity=str(entity),
                mode=str(mode),
                ops=ops,
                raw_js=None,
                is_placeholder=False,
            )
            stories.append(story)
            continue

        # Case 3: placeholder (no steps and no js) – skip later
        if isinstance(ops_raw, list) and len(ops_raw) == 0 and not js_text:
            story = StorySpec(
                name=name,
                entity=str(entity),
                mode=str(mode),
                ops=[],
                raw_js=None,
                is_placeholder=True,
            )
            stories.append(story)
            continue

        # Final fallback: truly missing everything – error
        raise ValueError(
            f"Story '{name}' missing 'ops'/'operations' list and 'js': {s!r}"
        )

    return meta, stories


def pascal_case(name: str) -> str:
    """
    Turn 'book', 'user', 'library_member' -> 'Book', 'User', 'LibraryMember'.
    """
    parts = [p for p in name.replace("-", "_").split("_") if p]
    return "".join(p[:1].upper() + p[1:] for p in parts)


def make_id_var(entity: str) -> str:
    """
    For 'book' -> 'book_id'; for 'userAccount' -> 'userAccountId' etc.
    """
    if entity.endswith("_id"):
        return entity
    if "id" in entity.lower():
        return entity
    return f"{entity}_id"


def assign_unique_ids(stories: List[StorySpec], base: int = 200, step: int = 1) -> None:
    """
    For each entity type, assign sequential ID values across all *structured*
    stories (those without raw_js and not placeholders) so that no two such
    stories for the same entity share the same ID value.

    Pre-rendered JS stories (raw_js != None) are left unchanged.
    Placeholder stories are ignored.
    """
    next_id: Dict[str, int] = defaultdict(lambda: base)
    for st in stories:
        if st.raw_js is not None or st.is_placeholder:
            continue
        st.id_var = make_id_var(st.entity)
        st.id_value = next_id[st.entity]
        next_id[st.entity] += step


def inject_guards(fn_names: List[str], entity: str) -> List[str]:
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
    ent_cap = pascal_case(entity)
    add_name = f"add{ent_cap}"
    delete_name = f"delete{ent_cap}"
    verify_exists = f"verify{ent_cap}Exists"
    verify_not_exists = f"verify{ent_cap}DoesNotExist"

    out: List[str] = []
    first_add_idx = None
    first_delete_idx = None
    last_delete_idx = None

    # First pass: insert required guards immediately before add/delete.
    for fn in fn_names:
        if fn == add_name:
            if first_add_idx is None:
                first_add_idx = len(out)
                if not out or out[-1] != verify_not_exists:
                    out.append(verify_not_exists)
            out.append(fn)
        elif fn == delete_name:
            if first_delete_idx is None:
                first_delete_idx = len(out)
                if not out or out[-1] != verify_exists:
                    out.append(verify_exists)
            out.append(fn)
            last_delete_idx = len(out) - 1
        else:
            out.append(fn)

    # Second pass: ensure there is a verify_not_exists after the last delete, if any.
    if last_delete_idx is not None:
        has_verify_after_delete = any(
            fn == verify_not_exists for fn in out[last_delete_idx + 1 :]
        )
        if not has_verify_after_delete:
            out.append(verify_not_exists)

    return out


# ---------------------------------------------------------------------------
# Emission
# ---------------------------------------------------------------------------

def emit_header(sut: str, provider: str, mode: str, src: Path, num_stories: int) -> str:
    lines = [
        "// ============================================================================",
        "// Auto-generated by emit_hls_all_in_one.py",
        f"// SUT={sut}  Provider={provider}  Mode={mode}  Stories={num_stories}",
        f"// Source: {src.as_posix()}",
        "// ============================================================================",
    ]
    return "\n".join(lines) + "\n"


def emit_story(story: StorySpec) -> str:
    # Pre-rendered JS story – just copy as-is
    if story.raw_js is not None:
        return story.raw_js.rstrip() + "\n\n"

    # Placeholder – no ops and no JS
    if story.is_placeholder:
        return f"// [placeholder story skipped] {story.name}\n\n"

    # Structured story – apply IDs + guards
    lines: List[str] = []
    lines.append(f'// ---- {story.name} ----')
    lines.append(f'bthread("{story.name}", function () {{')
    lines.append(f"  let {story.id_var} = {story.id_value};")

    ops_with_guards = inject_guards(story.ops, story.entity)

    for fn in ops_with_guards:
        lines.append(f"  {fn}({story.id_var});")

    lines.append("  ")
    lines.append("});")
    lines.append("")
    return "\n".join(lines)


# ---------------------------------------------------------------------------
# CLI
# ---------------------------------------------------------------------------

def build_arg_parser() -> argparse.ArgumentParser:
    p = argparse.ArgumentParser(
        description="Emit stories_hls.js from HLS GOLD with guards & unique IDs."
    )
    p.add_argument(
        "--gold",
        required=True,
        help="Path to hls_gold.json (HLS GOLD spec).",
    )
    p.add_argument(
        "--sut",
        required=False,
        default=None,
        help="SUT name (e.g., 'library'). Overrides value from GOLD if provided.",
    )
    p.add_argument(
        "--provider",
        required=False,
        default=None,
        help="Provider name (e.g., '7_suts_llm_provider'). Overrides value from GOLD if provided.",
    )
    p.add_argument(
        "--mode",
        required=False,
        default=None,
        help="Mode string (e.g., 'nondet'/'det'). Overrides value from GOLD if provided.",
    )
    p.add_argument(
        "--out",
        required=False,
        default=None,
        help="Output stories_hls.js path. If not given, use --out_dir or GOLD dir.",
    )
    p.add_argument(
        "--out_dir",
        required=False,
        default=None,
        help=(
            "Output directory; stories_hls.js will be created inside this dir. "
            "This matches existing BAT scripts."
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
    return p


def main(argv=None) -> None:
    parser = build_arg_parser()
    args = parser.parse_args(argv)

    gold_path = Path(args.gold).resolve()
    if not gold_path.is_file():
        parser.error(f"HLS GOLD file not found: {gold_path}")

    meta, stories = load_hls_gold(gold_path)
    if not stories:
        parser.error(f"No stories found in GOLD file: {gold_path}")

    # Determine SUT / provider / mode
    sut = args.sut or str(meta.get("sut") or "?")
    provider = args.provider or str(meta.get("provider") or "?")
    mode = args.mode or str(meta.get("mode") or "?")

    # Assign unique IDs per entity for structured stories
    assign_unique_ids(stories, base=args.id_base, step=args.id_step)

    # Decide output path
    if args.out:
        out_path = Path(args.out)
    elif args.out_dir:
        out_dir = Path(args.out_dir)
        out_dir.mkdir(parents=True, exist_ok=True)
        out_path = out_dir / "stories_hls.js"
    else:
        # Default: same directory as GOLD, file name stories_hls.js
        out_path = gold_path.with_name("stories_hls.js")
        out_path.parent.mkdir(parents=True, exist_ok=True)

    # Emit JS
    parts: List[str] = []
    parts.append(emit_header(sut, provider, mode, gold_path, num_stories=len(stories)))
    for st in stories:
        parts.append(emit_story(st))

    js_text = "\n".join(parts).rstrip() + "\n"
    out_path.write_text(js_text, encoding="utf-8")
    print(f"[OK] Wrote HLS stories to: {out_path}")


if __name__ == "__main__":
    main()
