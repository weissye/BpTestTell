#!/usr/bin/env python
import argparse
import json
import sys
from pathlib import Path
from typing import Any, Dict, List


try:
    import yaml  # optional, for .yaml/.yml inputs
except Exception:  # pragma: no cover - pyyaml is optional
    yaml = None


# ---------------------------------------------------------------------------
# OpenAPI loading / schema helpers
# ---------------------------------------------------------------------------

def load_openapi(in_path: str) -> Dict[str, Any]:
    """
    Load an OpenAPI 3.x document from JSON or YAML.
    """
    p = Path(in_path)
    text = p.read_text(encoding="utf-8")
    if p.suffix.lower() in (".yaml", ".yml"):
        if yaml is None:
            print(
                "[ERR ] YAML file given but PyYAML not installed. "
                "Run: pip install pyyaml",
                file=sys.stderr,
            )
            sys.exit(1)
        return yaml.safe_load(text)
    else:
        return json.loads(text)


def _get_components(spec: Dict[str, Any]) -> Dict[str, Any]:
    return spec.get("components") or {}


def _get_schemas(spec: Dict[str, Any]) -> Dict[str, Any]:
    return _get_components(spec).get("schemas") or {}


def _resolve_ref(ref: str, spec: Dict[str, Any]) -> Dict[str, Any]:
    """
    Resolve a very simple JSON Pointer of the form:
      "#/components/schemas/Name"
    """
    if not ref.startswith("#/"):
        return {}
    parts = ref.lstrip("#/").split("/")
    node: Any = spec
    for part in parts:
        if not isinstance(node, dict):
            return {}
        node = node.get(part)
        if node is None:
            return {}
    if isinstance(node, dict):
        return node
    return {}


def _merge_schemas(schemas: List[Dict[str, Any]], spec: Dict[str, Any]) -> Dict[str, Any]:
    """
    Merge multiple schema fragments (for handling allOf in a simple way).
    Only merges 'required' and 'properties'; everything else is shallow.
    """
    out: Dict[str, Any] = {}
    required: List[str] = []
    props: Dict[str, Any] = {}
    for s in schemas:
        if not isinstance(s, dict):
            continue
        # Follow $ref if present
        if "$ref" in s:
            s = _resolve_ref(s["$ref"], spec)
        if not isinstance(s, dict):
            continue
        # Merge required
        for r in s.get("required") or []:
            if r not in required:
                required.append(r)
        # Merge properties
        p = s.get("properties") or {}
        if isinstance(p, dict):
            for k, v in p.items():
                props[k] = v
        # Shallow copy any other top-level fields (first wins)
        for k, v in s.items():
            if k in ("required", "properties", "allOf", "$ref"):
                continue
            if k not in out:
                out[k] = v
    if required:
        out["required"] = required
    if props:
        out["properties"] = props
    return out


def resolve_schema(schema: Dict[str, Any], spec: Dict[str, Any]) -> Dict[str, Any]:
    """
    Resolve $ref and allOf for a schema enough for our analysis needs.
    """
    if not isinstance(schema, dict):
        return {}

    # $ref first
    if "$ref" in schema:
        schema = _resolve_ref(schema["$ref"], spec)

    if not isinstance(schema, dict):
        return {}

    # allOf handling
    if "allOf" in schema and isinstance(schema["allOf"], list):
        merged = _merge_schemas(schema["allOf"], spec)
        # Local properties/required override/extend merged
        if "required" in schema:
            merged.setdefault("required", [])
            for r in schema["required"]:
                if r not in merged["required"]:
                    merged["required"].append(r)
        if "properties" in schema and isinstance(schema["properties"], dict):
            merged.setdefault("properties", {})
            merged["properties"].update(schema["properties"])
        # Copy any additional fields
        for k, v in schema.items():
            if k in ("allOf", "required", "properties", "$ref"):
                continue
            if k not in merged:
                merged[k] = v
        schema = merged

    return schema


# ---------------------------------------------------------------------------
# Entities from components.schemas
# ---------------------------------------------------------------------------

def guess_entities(spec: Dict[str, Any]) -> List[Dict[str, Any]]:
    """
    Build a list of entities from components.schemas.

    Each entity has:
      - name        : schema name (e.g., "Users")
      - required    : list of required fields from the schema (if any)
      - properties  : list of property names
      - properties_meta (NEW): per-field attributes (type, format, etc.)
    """
    schemas = _get_schemas(spec)
    entities: List[Dict[str, Any]] = []

    for name, schema in sorted(schemas.items(), key=lambda kv: kv[0].lower()):
        schema_resolved = resolve_schema(schema, spec)
        props: Dict[str, Any] = schema_resolved.get("properties") or {}
        required_list = list(schema_resolved.get("required") or [])

        properties = sorted(list(props.keys()))
        properties_meta: Dict[str, Dict[str, Any]] = {}

        for pname, pval in props.items():
            if not isinstance(pval, dict):
                continue
            # Keep a compact view of the interesting bits
            meta: Dict[str, Any] = {}
            for key in (
                "type",
                "format",
                "description",
                "enum",
                "default",
                "nullable",
                "pattern",
                "minimum",
                "maximum",
                "items",
            ):
                if key in pval:
                    meta[key] = pval[key]
            properties_meta[pname] = meta

        entities.append(
            {
                "name": name,
                "required": sorted(required_list),
                "properties": properties,
                "properties_meta": properties_meta,
            }
        )

    return entities


# ---------------------------------------------------------------------------
# Operations from paths[*][*]
# ---------------------------------------------------------------------------

_HTTP_METHODS = {"get", "post", "put", "patch", "delete", "head", "options"}


def build_ops(spec: Dict[str, Any]) -> List[Dict[str, Any]]:
    """
    Build a flat list of HTTP operations.

    Each op entry has:
      - method
      - path
      - operationId
      - tags
      - params          : simplified [{name,in,required}]
      - requestBodyCT   : list of content-types
      - body            : simplified dict of body properties (name -> schema-fragment)
      - body_required   : list of required fields in the body
      - responses       : list of status codes as strings
    """
    paths = spec.get("paths") or {}
    ops: List[Dict[str, Any]] = []

    for path, path_item in paths.items():
        if not isinstance(path_item, dict):
            continue

        # Path-level parameters
        path_params = path_item.get("parameters") or []

        for method, op in path_item.items():
            if method.lower() not in _HTTP_METHODS:
                continue
            if not isinstance(op, dict):
                continue

            m = method.upper()
            operation_id = op.get("operationId")
            tags = op.get("tags") or []

            # Merge path- and operation-level parameters
            params_raw = list(path_params) + list(op.get("parameters") or [])
            params: List[Dict[str, Any]] = []
            for p in params_raw:
                if not isinstance(p, dict):
                    continue
                params.append(
                    {
                        "name": p.get("name"),
                        "in": p.get("in"),
                        "required": bool(p.get("required")),
                    }
                )

            # Request body: gather content-types and a simplified schema
            request_body_ct: List[str] = []
            body: Dict[str, Any] | None = None
            body_required: List[str] = []

            rb = op.get("requestBody")
            if isinstance(rb, dict):
                content = rb.get("content") or {}
                for ct, cinfo in content.items():
                    request_body_ct.append(ct)
                    if body is not None:
                        continue  # we already captured a schema from another CT
                    if not isinstance(cinfo, dict):
                        continue
                    schema = cinfo.get("schema")
                    if not isinstance(schema, dict):
                        continue
                    schema_resolved = resolve_schema(schema, spec)
                    props = schema_resolved.get("properties") or {}
                    if isinstance(props, dict) and props:
                        body = props
                        body_required = list(schema_resolved.get("required") or [])

            # Responses: just collect status codes
            responses_obj = op.get("responses") or {}
            if isinstance(responses_obj, dict):
                responses = sorted(str(code) for code in responses_obj.keys())
            else:
                responses = []

            ops.append(
                {
                    "method": m,
                    "path": path,
                    "operationId": operation_id,
                    "tags": tags,
                    "params": params,
                    "requestBodyCT": request_body_ct,
                    "body": body,
                    "body_required": body_required,
                    "responses": responses,
                }
            )

    return ops


# ---------------------------------------------------------------------------
# CLI
# ---------------------------------------------------------------------------

def main() -> None:
    ap = argparse.ArgumentParser(
        description=(
            "Convert OpenAPI (JSON/YAML) into a simplified graph.json "
            "with entities + operations, including field attributes."
        )
    )
    ap.add_argument("--in", dest="in_path", required=True, help="Input OpenAPI file (JSON or YAML)")
    ap.add_argument("--out", dest="out_path", required=True, help="Output graph.json path")
    args = ap.parse_args()

    spec = load_openapi(args.in_path)
    print("[GRAPH] --out")  # keep existing log behaviour

    out = {
        "entities": guess_entities(spec),
        "ops": build_ops(spec),
    }

    out_path = Path(args.out_path)
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(json.dumps(out, indent=2), encoding="utf-8")


if __name__ == "__main__":
    main()
