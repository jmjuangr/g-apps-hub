---
name: prisma
description: "Prisma ORM workflow: schema.prisma, migrations, typed client, query patterns, and safe server usage. Trigger: when modifying schema or DB queries with Prisma."
license: Apache-2.0
metadata:
author: jose
version: "1.0"
scope: [db]
auto_invoke: "Prisma schema/migrations"
allowed-tools: Read, Edit, Write, Glob, Grep, Bash, WebFetch, WebSearch, Task
---


## Rules
- Prisma client is server-only.
- All schema changes require a migration.
- Avoid N+1; use `include`/`select` thoughtfully.


## Migration workflow
1) Edit `schema.prisma`
2) Generate migration
3) Apply locally
4) Update any shared types/DTOs


## Query patterns
- Prefer `select` to limit columns.
- Add indexes for common filters/sorts.


## Review checklist
- [ ] Migration included
- [ ] Index impact considered
- [ ] No Prisma usage in client components