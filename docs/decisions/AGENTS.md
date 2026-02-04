Este fichero contiene reglas específicas del **Next.js App Router**, siguiendo convenciones oficiales (app dir, route handlers, layouts, etc.).

# apps/web - AI Agent Ruleset (Next.js App Router)

> Skills reference:
> - `nextjs-app-router` (App Router, RSC, caching, server actions)
> - `supabase` (auth/db patterns)
> - `zod` (validation)
> - `tailwind-shadcn` (UI)
> - `tanstack-query` (client fetching, when needed)

## Auto-invoke skills
| Action | Skill |
|--------|-------|
| App Router / Server Actions / Route Handlers | `nextjs-app-router` |
| Supabase auth/storage integration | `supabase` |
| Zod schemas | `zod` |
| Tailwind or shadcn/ui work | `tailwind-shadcn` |
| Client fetching/caching with React Query | `tanstack-query` |

## Critical rules (non-negotiable)
1) Keep `src/app` focused on routing: `layout.tsx`, `page.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`, `route.ts`.
2) Put reusable UI in `src/components` and shared utilities in `src/lib`.
3) Business logic MUST live outside React components:
   - server-only services: `src/server/*` (or `packages/shared` if shared)
4) Reads: Server Components by default.
5) Writes: Server Actions by default. Use Route Handlers for:
   - Webhooks
   - OAuth callbacks
   - Third-party integrations requiring raw HTTP
6) Never expose Supabase service role key to the client.
7) All DB access goes via `packages/db`.

## Next.js structure (recommended)
```txt
apps/web/
├─ src/
│  ├─ app/
│  │  ├─ (public)/
│  │  ├─ (app)/
│  │  ├─ api/
│  │  └─ layout.tsx
│  ├─ components/
│  ├─ lib/
│  ├─ server/
│  └─ styles/
├─ public/
└─ next.config.ts
```

## Route groups
- Use `(public)` for marketing/public pages.
- Use `(app)` for authenticated pages.
- Keep URL paths clean; route groups do not affect the URL.

## Error/loading conventions
- Always provide `loading.tsx` for slow routes.
- Use `error.tsx` + `not-found.tsx` for robust UX.

## Data fetching conventions
- For server reads: fetch in Server Components; use Next caching/revalidate.
- For client heavy dashboards: use TanStack Query.

## QA checklist
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Build passes
- [ ] Feature has empty/error/loading states
- [ ] Auth enforced server-side