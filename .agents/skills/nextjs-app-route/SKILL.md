---
name: nextjs-app-router
description: "Next.js App Router conventions: Server Components by default, Server Actions for writes, Route Handlers for webhooks/callbacks, caching/revalidate. Trigger: working under apps/web/src/app."
license: Apache-2.0
metadata:
author: jose
version: "1.0"
scope: [web]
auto_invoke: "App Router / Server Actions"
allowed-tools: Read, Edit, Write, Glob, Grep, Bash, WebFetch, WebSearch, Task
---


## Routing & structure
- `src/app` is for routes and route-local files.
- Use route groups `(public)` / `(app)` to separate concerns without changing URLs.
- Use `not-found.tsx`, `error.tsx`, `loading.tsx` for UX.


## Server vs Client components
- Default: Server Components.
- Add `"use client"` ONLY when needed (stateful UI, browser APIs, effects).
- Never import server-only code into client components.


## Data fetching
- Prefer fetching in Server Components.
- Use built-in caching and revalidation.
- Avoid client fetching unless the page is highly interactive.


## Mutations
- Prefer Server Actions for forms/mutations.
- Use Route Handlers for:
- webhooks
- third-party callbacks
- endpoints consumed externally


## Error handling
- Convert expected domain errors into user-friendly messages.
- Do not leak secrets.


## Review checklist
- [ ] No accidental client bundling of server code
- [ ] Correct cache/revalidate for the route
- [ ] Loading/error states