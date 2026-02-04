---
name: zod
description: "Zod validation patterns for server actions and route handlers, with inferred types and consistent error formatting. Trigger: when creating input validation schemas."
license: Apache-2.0
metadata:
author: jose
version: "1.0"
scope: [web]
auto_invoke: "Creating Zod schemas"
allowed-tools: Read, Edit, Write, Glob, Grep, Bash
---


## Rules
- Validate all external input (forms, query params, route handlers).
- Derive TypeScript types via `z.infer<typeof Schema>`.
- Return consistent error payloads.


## Pattern
- Define schema near the action/handler OR in `packages/shared` if reused.
- Map Zod errors to user-friendly messages.


## Review checklist
- [ ] Inputs validated
- [ ] Types inferred
- [ ] Errors are consistent