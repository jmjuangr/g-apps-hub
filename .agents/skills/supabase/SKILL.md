---
name: supabase
description: "Supabase patterns for Auth/Postgres/Storage: key safety (anon vs service role), RLS guidance, local dev with CLI. Trigger: when touching auth, storage, or DB access."
license: Apache-2.0
metadata:
author: jose
version: "1.0"
scope: [root, web, db, auth]
auto_invoke: "Supabase auth/storage/db patterns"
allowed-tools: Read, Edit, Write, Glob, Grep, Bash, WebFetch, WebSearch, Task
---


## Key safety (CRITICAL)
- Client-side: ONLY `SUPABASE_ANON_KEY`.
- Server-side: `SUPABASE_SERVICE_ROLE_KEY` ONLY in server contexts.
- Never expose service role to the browser.


## RLS (Row Level Security)
- If you use RLS, define policies explicitly.
- Never trust client-provided tenant/user IDs.
- Prefer policy-based protection in DB plus server-side checks.


## Local development
Prereqs: Docker + Supabase CLI.
- `supabase init`
- `supabase start`
- Use `supabase status` to inspect local keys/ports.


## Auth integration patterns
- Provide helpers in `packages/auth`:
- createClient() for browser
- createServerClient() for server
- getSessionUser() helpers


## Storage
- Use signed URLs when content must be private.
- Keep bucket rules consistent with auth model.


## Review checklist
- [ ] No service role key in client bundles
- [ ] RLS policies reviewed (if used)
- [ ] Env vars documented