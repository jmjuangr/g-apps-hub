# Repository Guidelines

## How to use this guide
- Start here for cross-project norms.
- This repo is organized as a monorepo with components under `apps/*` and `packages/*`.
- Each component has its own `AGENTS.md` file with more specific rules.
- Component docs override this file when guidance conflicts.

## Repo goal
Ship a PoC/MVP fast **without** creating silly debt:
- Server-first by default (RSC for reads).
- Clear boundaries between UI, domain logic, and data access.
- Small, reviewable changes.

## Commands
(Exact commands can differ per component; prefer the component `AGENTS.md`.)
- Install: `pnpm i`
- Dev: `pnpm dev`
- Lint: `pnpm lint`
- Typecheck: `pnpm typecheck`
- Test: `pnpm test`

## Architecture snapshot
- `apps/web`: Next.js App Router (main product)
- `apps/marketing` (optional): Astro site (landing/blog)
- `packages/db`: ORM + migrations + DB access
- `packages/auth`: auth helpers (Supabase)
- `packages/ui`: UI primitives and shadcn wrappers
- `packages/shared`: shared types & utilities

## Working agreements (non-negotiable)
1) Prefer the simplest solution that ships.
2) Reads: Server Components by default.
3) Writes: Server Actions by default; Route Handlers for webhooks/3rd-party callbacks.
4) DB access must go through `packages/db` (no ad-hoc SQL in the app).
5) Auth/authorization is enforced server-side (never trust UI-only guards).
6) Any DB schema change requires a migration + update to types.
7) No new dependencies unless you justify the impact in the PR.

## Skills reference
Skills live under `.codex/skills/*/SKILL.md`. Use them for detailed patterns.

### Available skills
| Skill | Description | Location |
|------|-------------|----------|
| `codex-exec-plan` | Planning workflow: ExecPlan + validation steps | `.codex/skills/codex-exec-plan/SKILL.md` |
| `nextjs-app-router` | App Router, RSC, Server Actions, Route Handlers | `.codex/skills/nextjs-app-router/SKILL.md` |
| `supabase` | Auth, Storage, Postgres, RLS, key safety, CLI local dev | `.codex/skills/supabase/SKILL.md` |
| `prisma` | Prisma schema, migrations, query patterns | `.codex/skills/prisma/SKILL.md` |
| `drizzle` | Drizzle schema, migrations, query patterns | `.codex/skills/drizzle/SKILL.md` |
| `zod` | Input validation and type inference | `.codex/skills/zod/SKILL.md` |
| `tailwind-shadcn` | Tailwind conventions + shadcn/ui workflow | `.codex/skills/tailwind-shadcn/SKILL.md` |
| `tanstack-query` | React Query patterns for client fetching | `.codex/skills/tanstack-query/SKILL.md` |
| `typescript` | TS conventions, types, utilities | `.codex/skills/typescript/SKILL.md` |
| `testing-vitest` | Unit/integration tests with Vitest | `.codex/skills/testing-vitest/SKILL.md` |
| `e2e-playwright` | E2E tests with Playwright (POM, selectors) | `.codex/skills/e2e-playwright/SKILL.md` |
| `git-commit` | Conventional commits (CMD examples) | `.codex/skills/git-commit/SKILL.md` |
| `skill-creator` | Create new skills (format + triggers) | `.codex/skills/skill-creator/SKILL.md` |

### Auto-invoke skills
When performing these actions, ALWAYS invoke the corresponding skill FIRST:

| Action | Skill |
|--------|-------|
| Create/update an execution plan | `codex-exec-plan` |
| App Router / Server Components / Server Actions / Route Handlers | `nextjs-app-router` |
| Supabase auth/storage/db patterns | `supabase` |
| Prisma schema/migrations | `prisma` |
| Drizzle schema/migrations | `drizzle` |
| Creating Zod schemas | `zod` |
| Tailwind or shadcn/ui components | `tailwind-shadcn` |
| React client-side data fetching/caching | `tanstack-query` |
| Writing unit/integration tests | `testing-vitest` |
| Writing Playwright E2E tests | `e2e-playwright` |
| Creating a git commit | `git-commit` |
| Creating/modifying skills | `skill-creator` |

## Starting flow
Follow `docs/START_HERE.md`.
```

