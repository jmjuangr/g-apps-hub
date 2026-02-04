---
name: tanstack-query
description: "TanStack Query patterns for client-side fetching: caching, invalidation, pagination, optimistic updates. Trigger: when implementing client dashboards with frequent refetches."
license: Apache-2.0
metadata:
author: jose
version: "1.0"
scope: [web]
auto_invoke: "Client fetching/caching"
allowed-tools: Read, Edit, Write, Glob, Grep, Bash
---


## When to use
Use TanStack Query ONLY when:
- The page is highly interactive (filters, tables, pagination)
- You need caching/invalidation after mutations


Avoid for simple pages that can be server-rendered.


## Conventions
- Query keys must be stable and structured.
- Invalidate queries after successful mutations.
- Handle loading/error/empty states.


## Review checklist
- [ ] Stable query keys
- [ ] Invalidation after writes
- [ ] States handled