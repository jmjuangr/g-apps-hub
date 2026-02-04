# START HERE — Stack B + Codex (minimal)

Goal: bootstrap the repo once, then iterate via PRD → ExecPlan → implement.

## 0) Prereqs
- Node.js LTS, pnpm, Git
- Optional: Docker (for local Supabase)

## 1) Bootstrap (one-time)
### Option A (simple)
- Create Next app:
  - `pnpm dlx create-next-app@latest apps/web --ts --eslint --tailwind --app --src-dir --use-pnpm`
- Init shadcn/ui (inside apps/web):
  - `cd apps/web && pnpm dlx shadcn@latest init`

### Option B (monorepo scaffold)
- `pnpm dlx shadcn@latest init`
- Choose “Next.js (Monorepo)”

## 2) Supabase env (cloud or local)
Create `apps/web/.env.local`:
- `NEXT_PUBLIC_SUPABASE_URL=...`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY=...`

Optional (server-only, only if needed):
- `SUPABASE_SERVICE_ROLE_KEY=...`
- Never expose `SUPABASE_SERVICE_ROLE_KEY` to the client (no NEXT_PUBLIC_ prefix, server-only usage).


Optional local Supabase:
- `supabase init`
- `supabase start`

## 3) Validate locally
From repo root:
- `pnpm i`
- `pnpm dev`
- `pnpm lint`
- `pnpm typecheck`
- `pnpm test`

## 4) Codex: first run (PRD → plan → implement)

### Prompt 1 — Write PRD (guided)
Read `AGENTS.md`, component `AGENTS.md` files, and the template in `docs/PRD.md`.
Fill `docs/PRD.md` (overwrite the placeholders) with:
- Speak always in Spanish
- Problem, Goal, Non-goals
- Target users/personas (2–3) + pain points
- 2–4 core user journeys (step-by-step)
- MVP features as a numbered list, each with acceptance criteria
- Data model (entities + key fields + relationships)
- Permissions/security: roles + what each role can do (matrix or bullets)
- Non-functional requirements (performance, reliability, privacy)
- Analytics/success metrics (what “validated” means)
- Milestones (MVP v1, v1.1, v2) + risks
- Open questions (only if truly needed)


Rules:
- Ask at most 5 clarifying questions. If not answered, make reasonable assumptions and continue.
- Keep it concise: bullets over essays.
- Output ONLY the final `docs/PRD.md` content.
- Ask always in Spanish

### Prompt 2 — Create ExecPlan
Create `docs/plans/0001-bootstrap.md` ExecPlan for:
- route groups `(public)` and `(app)`
- base layout + navigation
- Supabase auth wiring (login/logout + protected area)
- DB baseline in `packages/db` (or minimal DB access if not using packages yet)
Include:
- steps by file
- validation commands
- rollback notes

### Prompt 3 — Implement
Implement the ExecPlan in small, runnable steps.
After each step, run relevant checks (lint/typecheck/tests) and fix issues.

## 5) Daily loop (every feature)
1) Update PRD only if scope changes
2) Create a new ExecPlan (`docs/plans/XXXX-feature.md`)
3) Implement incrementally + validate + commit
