# ExecPlan 0001 — Bootstrap Apps Hub

1) Goal
- Crear la base técnica para el MVP: route groups `(public)` y `(app)`, layout + navegación base, auth con Supabase (login/logout + área protegida) y un baseline de acceso a datos en `packages/db` (o mínimo si no existe paquete todavía).

2) Scope
- Estructura inicial de rutas con App Router.
- Layout base y navegación común.
- Wiring de Supabase para autenticación (login/logout) y guardas en rutas protegidas.
- Base de acceso a datos en `packages/db` o, si no se usa todavía, un módulo mínimo de DB en `apps/web/src/server`.

3) Out of scope
- UI final, diseño avanzado o contenido definitivo.
- Gestión de permisos compleja o multi‑rol detallado.
- Migraciones completas y modelo de datos final.

4) Assumptions & risks
- Asumimos Next.js App Router ya inicializado en `apps/web`.
- Asumimos Supabase como proveedor de auth (anon key + service role en server).
- Riesgo: no existe estructura `packages/` aún; puede requerir crear workspace monorepo real.
- Riesgo: decisiones tempranas de auth/cookies pueden cambiar si se adopta SSO corporativo distinto.

5) Step-by-step changes (files & key edits)
1. Route groups y páginas base
   - Mover `apps/web/src/app/page.tsx` a `apps/web/src/app/(public)/page.tsx`.
   - Crear `apps/web/src/app/(public)/login/page.tsx` (pantalla básica de login).
   - Crear `apps/web/src/app/(app)/page.tsx` (home protegida).
   - Crear `apps/web/src/app/(app)/layout.tsx` (layout de área privada).

2. Layout y navegación
   - Actualizar `apps/web/src/app/layout.tsx` para layout raíz y `globals.css`.
   - Crear `apps/web/src/components/nav/main-nav.tsx` (navegación simple con enlaces a catálogo/admin).
   - Usar la navegación en `apps/web/src/app/(app)/layout.tsx`.

3. Supabase auth wiring
   - Agregar dependencias en `apps/web/package.json` (`@supabase/supabase-js`, `@supabase/ssr`).
   - Crear `apps/web/src/lib/supabase/server.ts` (cliente server con cookies).
   - Crear `apps/web/src/lib/supabase/client.ts` (cliente para UI si es necesario).
   - Crear `apps/web/src/app/(public)/login/actions.ts` (Server Actions para login/logout).
   - Crear `apps/web/src/app/(public)/login/page.tsx` con formulario conectado a acciones.
   - Proteger rutas de `(app)` usando verificación en `apps/web/src/app/(app)/layout.tsx` (redirect si no hay sesión).
   - Añadir `apps/web/middleware.ts` si se necesita protección global (opcional, según patrón elegido).
   - Documentar variables en `apps/web/.env.local` (URL, anon key, service role).

4. DB baseline
   - Opción A (preferida si se crea `packages/db`):
     - Crear `packages/db/package.json`, `packages/db/src/index.ts`.
     - Exportar cliente DB (placeholder) y tipos base.
     - Añadir `packages/db` al workspace si aplica.
   - Opción B (mínimo si no hay `packages/`):
     - Crear `apps/web/src/server/db.ts` con un cliente mínimo o stub y nota de migración futura.

6) Validation steps (commands + manual checks)
- Desde `apps/web`:
  - `pnpm i`
  - `pnpm lint`
  - `pnpm typecheck`
  - `pnpm dev`
- Checks manuales:
  - Abrir `/login` y hacer login.
  - Verificar redirect a `(app)` al iniciar sesión.
  - Verificar logout y retorno a `(public)`.
  - Verificar que `/` en `(app)` está protegida sin sesión.

7) Rollback plan
- Revertir archivos creados en `apps/web/src/app/(public)` y `apps/web/src/app/(app)`.
- Restaurar `apps/web/src/app/page.tsx` en raíz si se movió.
- Eliminar middleware y módulos de Supabase si causan fallos.
- Si se creó `packages/db`, eliminar carpeta y referencias en workspace.
