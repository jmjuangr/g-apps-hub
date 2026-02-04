# ADR-0001


## Context
We are building a PoC/MVP with Next.js App Router + TypeScript + Supabase.


## Decision
- App Router
- Supabase for Postgres/Auth/Storage
- Tailwind + shadcn/ui for UI
- ORM: {Prisma|Drizzle} (choose one)


## Consequences
- Fast iteration, monolith-first.
- Backend extraction only if/when it hurts.