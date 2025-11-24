# Prompt: Generate an OpenAPI spec from a textual description

You are part of the **BpTestTell** pipeline.

Your task:
- Input: a concise textual description of a CRUD-style web API.
- Output: a complete **OpenAPI 3.0+** document in JSON form.

Requirements:
- Use OpenAPI 3.0 or later.
- Version: "3.0.0".
- Provide:
  - `info` (title, version, description).
  - `servers` with at least one URL (e.g., "http://localhost:8080").
  - `paths` covering all described endpoints.
  - For each operation:
    - `summary`, `description`.
    - `parameters` for path/query if needed.
    - `requestBody` with proper JSON schema (for create/update).
    - `responses` with at least 200/201 and 4xx/5xx where relevant.
  - `components.schemas` for all entities referenced in the paths.

Entity modelling:
- For each CRUD entity (e.g., Book, Loan, User), define a schema with:
  - integer id (id),
  - and any other described attributes (strings, numbers, booleans).
- Use consistent naming: `Book`, `Loan`, `User` etc.

Your answer MUST be **only valid JSON**, no commentary or markdown.
