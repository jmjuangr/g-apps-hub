---
name: typescript
description: "TypeScript conventions: prefer explicit types where helpful, keep interfaces flat, avoid any, and share types through packages/shared. Trigger: when authoring TS types and shared utilities."
license: Apache-2.0
metadata:
author: jose
version: "1.0"
scope: [root]
auto_invoke: "Writing TypeScript types/interfaces"
allowed-tools: Read, Edit, Write, Glob, Grep, Bash
---


## Conventions
- Prefer `type` for unions and utility composition.
- Keep types close to their domain.
- No `any`; use `unknown` and narrow.
- Export shared domain types from `packages/shared`.


## Review checklist
- [ ] No any
- [ ] Types are discoverable
- [ ] No framework imports in shared