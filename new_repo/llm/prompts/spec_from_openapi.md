# Prompt: Build a unified interaction spec from an OpenAPI document

You are part of the **BpTestTell** pipeline.

We already have a deterministic generator that takes a JSON "spec" and emits:

- `interfaces.readable.js`
- `stories_hls.js`

Your task is to produce that **spec JSON** from an OpenAPI 3.0+ document and
some examples.

## Input

You receive a JSON object like:

```json
{
  "sut": "<sut-name>",
  "openapi": { ... }  // full OpenAPI document as JSON
}
```

(The content of `openapi` may be large.)

## Output

You must return **ONLY** a JSON document in the following shape:

```jsonc
{
  "sut": "<sut-name>",
  "entities": {
    "<EntityName>": {
      "displayName": "lowercase or human-readable name",
      "params": ["id", "name", "..."],

      "operations": {
        "add": {
          "name": "add<EntityName>",
          "method": "POST",
          "path": "/path/from/openapi",
          "descriptionTemplate": "Add a <entity> with id {id} and name {name}",
          "bodyTemplate": {
            "id": "{id}",
            "name": "{name}"
          }
        },
        "delete": {
          "name": "delete<EntityName>",
          "method": "DELETE",
          "path": "/path/from/openapi/with/{id}",
          "descriptionTemplate": "Delete a <entity> with id {id} and name {name}"
        },
        "verifyExists": {
          "name": "verify<EntityName>Exists"
        }
      },

      "waitForPatterns": {
        "added": {
          "name": "waitForAny<EntityName>Added",
          "descriptionRegex": "Add a <entity> with id (.+) and name (.+)"
        },
        "deleted": {
          "name": "waitForAny<EntityName>Deleted",
          "descriptionRegex": "Delete a <entity> with id (.+) and name (.+)"
        }
      }
    }
  },

  "stories": [
    {
      "name": "<EntityName>_basicCrud",
      "entity": "<EntityName>",
      "pattern": "crud_basic"
    },
    {
      "name": "<EntityName>_duplicateAdd",
      "entity": "<EntityName>",
      "pattern": "duplicate_add"
    }
  ]
}
```

### Notes

- `params` must be an **ordered list** of parameter names that will be used
  both as function arguments and as keys in the wait-for return object.
- `bodyTemplate` values can be:
  - place-holders like `"{id}"`, which will be replaced by that parameter,
  - or JSON literals (string, number, boolean, null).
- `descriptionTemplate` strings **must** use `{paramName}` placeholders
  that match `params` so they can be expanded in JS.
- For each CRUD-like entity you identify in the OpenAPI, add an entry under
  `"entities"` and at least these operations:
  - `"add"` – typically maps to POST create.
  - `"delete"` – typically maps to DELETE.
  - `"verifyExists"` – a logical operation name; method/path can be empty if
    you want the generator to emit only a stub.

You do not need to cover every endpoint in the OpenAPI. Focus on:

- The main CRUD entities.
- Representative operations that can drive basic CRUD stories and duplicate-add
  negative scenarios.

## Important

- Return **only valid JSON**, no comments or markdown.
- Ensure fields are correctly spelled (`entities`, `params`, `operations`, etc.).
