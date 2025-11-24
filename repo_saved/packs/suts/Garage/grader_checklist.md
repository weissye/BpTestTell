# Grader Checklist (SCHEMA v1)

This checklist encodes the methodology as executable checks. A JSON passes when score == 100.

## Structural
- [ ] JSON validates against `schema_v1.json` (no extra fields; required fields present).
- [ ] All entity names are unique; event names are unique within an entity.
- [ ] Low/high arrays exist and are arrays (may be empty only if justified with waivers).

## Endpoint mapping
- [ ] Every low-level event has `maps_to.method` + `maps_to.path`.
- [ ] Every `maps_to` pair matches an endpoint from the provided spec.
- [ ] No low-level event maps to a non-existent endpoint.

## Composition & coherence
- [ ] Each high-level event's `composition[]` references existing low event names in the same entity.
- [ ] No dangling references; order of composition is semantically sensible for the operation.
- [ ] If a destructive op exists (e.g., delete), there is a high-level flow that:
  - verifies existence before delete, and
  - verifies 404 after delete (or equivalent), or has a waiver explaining why not applicable.

## CRUD coverage
- [ ] For each entity, if endpoints exist for C/R/U/D, corresponding low events exist.
- [ ] If some CRUD part is missing in the spec, a waiver is present explaining why.
- [ ] List/list-like endpoints (GET /entity) are represented with a `*.list.api` low event when present.

## Negative paths (expectedErrors)
- [ ] For known business rules (duplicate, not found, loan constraints), `expectedErrors[]` include relevant status codes.
- [ ] High-level flows that should trigger negatives (e.g., create duplicate) exist or have a waiver.

## Naming conventions
- [ ] Low: `<entity>.<action>.api` (lowercase entity, action verbs: create|read|update|delete|list).
- [ ] High: `ActionEntity` in PascalCase (e.g., AddNewBook, DeleteUserSafely).
- [ ] Consistent casing and no spaces in event names.

## Result & scoring
- Start score at 100. For each failed item above, subtract 5 points.
- The final report should list failed checks with actionable messages.
