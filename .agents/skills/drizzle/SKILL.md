---
name: drizzle
description: "Drizzle ORM workflow: SQL-first typed schemas, migrations, query patterns, and safe server usage. Trigger: when using Drizzle for schema or DB queries."
license: Apache-2.0
metadata:
author: jose
version: "1.0"
scope: [db]
auto_invoke: "Drizzle schema/migrations"
allowed-tools: Read, Edit, Write, Glob, Grep, Bash, WebFetch, WebSearch, Task
---


## Rules
- Drizzle access is server-only.
- Keep schema definitions close to migrations.
- Prefer explicit columns and joins.


## Migration workflow
- Maintain deterministic migrations.
- Apply locally and validate expected queries.


## Review checklist
- [ ] Migration included
- [ ] Queries are explicit and typed
- [ ] No Drizzle usage in client components