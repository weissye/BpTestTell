#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Extract a simple "field catalog" from an OpenAPI file.
Focus: requestBody JSON schema fields for each path+method.

Usage (as called by your BAT):
  python scripts/readable/extract_field_catalog.py --openapi <in.json> --out <out.json>

Also supports: --in <in.json>  (alias of --openapi)
"""

import argparse
import json
import os
import sys
from typing import Any, Dict, Tuple, Set, List, Optional


METHODS = {"get", "put", "post", "delete", "patch", "options", "head", "trace"}


def _load_openapi(path: str) -> Dict[str, Any]:
    """Load OpenAPI from JSON (preferred). YAML is optional if available."""
    lower = path.lower()
    try:
        if lower.endswith(".json"):
            with open(path, "r", encoding="utf-8") as f:
                return json.load(f)
        elif lower.endswith((".yaml", ".yml")):
            try:
                import yaml  # type: ignore
            except Exception as e:
                print("[ERR] YAML input requires PyYAML. " +
                      "Install it or convert to JSON. File: " + path, file=sys.stderr)
                sys.exit(2)
            with open(path, "r", encoding="utf-8") as f:
                return yaml.safe_load(f)
        else:
            # Default: try JSON
            with open(path, "r", encoding="utf-8") as f:
                return json.load(f)
    except FileNotFoundError:
        print("[ERR] OpenAPI file not found: " + path, file=sys.stderr)
        sys.exit(2)
    except Exception as e:
        print("[ERR] Failed to load OpenAPI: " + path + " ; " + repr(e), file=sys.stderr)
        sys.exit(2)


def _json_pointer(root: Dict[str, Any], pointer: str) -> Any:
    """Resolve a local JSON Pointer like '#/components/schemas/X'."""
    if not pointer.startswith("#/"):
        return None
    parts = pointer[2:].split("/")
    node: Any = root
    for p in parts:
        if isinstance(node, dict) and p in node:
            node = node[p]
        else:
            return None
    return node


def _resolve_ref(schema: Any, root: Dict[str, Any]) -> Any:
    """Resolve local $ref and merge sibling keys."""
    if not isinstance(schema, dict):
        return schema
    if "$ref" in schema:
        ref_target = _json_pointer(root, schema["$ref"])
        if isinstance(ref_target, dict):
            resolved = _resolve_ref(ref_target, root)
            # Merge siblings over resolved
            merged = dict(resolved) if isinstance(resolved, dict) else {}
            for k, v in schema.items():
                if k != "$ref":
                    merged[k] = v
            return merged
        else:
            # Unresolvable ref => treat as empty object
            return {}
    return schema


def _collect_props(schema: Any, root: Dict[str, Any]) -> Tuple[Set[str], Dict[str, Dict[str, Any]]]:
    """
    Extract (required, properties) from a (possibly odd) object schema.
    Robust to boolean schemas and malformed shapes.
    """
    if not isinstance(schema, dict):
        return set(), {}

    # If there are combinators here, flatten them first to a pseudo-object
    if "allOf" in schema and isinstance(schema["allOf"], list):
        req_acc: Set[str] = set()
        props_acc: Dict[str, Dict[str, Any]] = {}
        for sub in schema["allOf"]:
            sub = _to_effective_obj_schema(sub, root)
            r, p = _collect_props(sub, root)
            req_acc |= r
            props_acc.update(p)
        return req_acc, props_acc

    for key in ("oneOf", "anyOf"):
        if key in schema and isinstance(schema[key], list):
            req_acc: Set[str] = set()
            props_acc: Dict[str, Dict[str, Any]] = {}
            for sub in schema[key]:
                sub = _to_effective_obj_schema(sub, root)
                r, p = _collect_props(sub, root)
                req_acc |= r
                props_acc.update(p)
            return req_acc, props_acc

    # Resolve a $ref if present
    if "$ref" in schema:
        schema = _resolve_ref(schema, root)
        if not isinstance(schema, dict):
            return set(), {}

    raw_req = schema.get("required")
    required: Set[str] = set(raw_req) if isinstance(raw_req, list) else set()

    props = schema.get("properties")
    if not isinstance(props, dict):
        props = {}

    out: Dict[str, Dict[str, Any]] = {}
    for name, desc in props.items():
        if not isinstance(desc, dict):
            desc = {}
        out[name] = {
            "type":    desc.get("type"),
            "format":  desc.get("format"),
            "enum":    desc.get("enum") if isinstance(desc.get("enum"), list) else None,
            "minimum": desc.get("minimum"),
            "maximum": desc.get("maximum"),
            "pattern": desc.get("pattern"),
        }
    return required, out


def _to_effective_obj_schema(schema: Any, root: Dict[str, Any]) -> Any:
    """Normalize a schema into something object-like for property extraction."""
    schema = _resolve_ref(schema, root)
    if not isinstance(schema, dict):
        return {}

    # Flatten allOf into a single object-ish dict
    if "allOf" in schema and isinstance(schema["allOf"], list):
        req_acc: Set[str] = set()
        props_acc: Dict[str, Dict[str, Any]] = {}
        for sub in schema["allOf"]:
            sub = _to_effective_obj_schema(sub, root)
            r, p = _collect_props(sub, root)
            req_acc |= r
            props_acc.update(p)
        return {"required": list(req_acc), "properties": props_acc}

    # Union for oneOf/anyOf
    for key in ("oneOf", "anyOf"):
        if key in schema and isinstance(schema[key], list):
            req_acc: Set[str] = set()
            props_acc: Dict[str, Dict[str, Any]] = {}
            for sub in schema[key]:
                sub = _to_effective_obj_schema(sub, root)
                r, p = _collect_props(sub, root)
                req_acc |= r
                props_acc.update(p)
            return {"required": list(req_acc), "properties": props_acc}

    # Otherwise return as-is (possibly plain object with properties/required)
    return schema


def _request_body_schema(op: Dict[str, Any]) -> Optional[Any]:
    """Pick a request body schema (JSON preferred, then form types)."""
    rb = op.get("requestBody")
    if not isinstance(rb, dict):
        return None
    content = rb.get("content")
    if not isinstance(content, dict):
        return None
    for mt in ("application/json", "multipart/form-data", "application/x-www-form-urlencoded"):
        part = content.get(mt)
        if isinstance(part, dict):
            sch = part.get("schema")
            if sch is not None:
                return sch
    return None


def build_field_catalog(spec: Dict[str, Any]) -> List[Dict[str, Any]]:
    """Create the field catalog from an OpenAPI spec dict."""
    catalog: List[Dict[str, Any]] = []
    paths = spec.get("paths", {})
    if not isinstance(paths, dict):
        return catalog

    for pth, item in paths.items():
        if not isinstance(item, dict):
            continue
        for mth, op in item.items():
            if mth not in METHODS or not isinstance(op, dict):
                continue

            schema = _request_body_schema(op)
            if schema is None:
                continue

            schema = _to_effective_obj_schema(schema, spec)
            # Defend against boolean schemas and weird shapes:
            if not isinstance(schema, dict):
                schema = {}

            req, props = _collect_props(schema, spec)
            required_lst = sorted(req)
            optional_lst = sorted([k for k in props.keys() if k not in req])

            entry = {
                "method":       mth.upper(),
                "path":         pth,
                "operationId":  op.get("operationId"),
                "required":     required_lst,
                "optional":     optional_lst,
                "properties":   props,
            }
            catalog.append(entry)

    return catalog


def main() -> int:
    ap = argparse.ArgumentParser(description="Extract a field catalog from an OpenAPI file.")
    # Keep your BAT syntax; also accept --in for compatibility.
    ap.add_argument("--openapi", "--in", dest="inp", required=True, help="OpenAPI input file (JSON preferred)")
    ap.add_argument("--out", "-o", dest="out", required=True, help="Output catalog JSON path")
    args = ap.parse_args()

    spec = _load_openapi(args.inp)
    catalog = build_field_catalog(spec)

    out_dir = os.path.dirname(os.path.abspath(args.out))
    if out_dir and not os.path.exists(out_dir):
        os.makedirs(out_dir, exist_ok=True)

    with open(args.out, "w", encoding="utf-8") as f:
        json.dump(catalog, f, indent=2, ensure_ascii=False)

    # Print in the format your BAT expects
    print("[OK] wrote " + args.out.replace("\\", "/"))
    return 0


if __name__ == "__main__":
    sys.exit(main())
