import Link from "next/link";

import { ThemeToggle } from "@/components/theme/theme-toggle";

export default function PublicHomePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col justify-center gap-10 px-6 py-16">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium uppercase tracking-wide text-zinc-500 dark:text-white/60">
          Apps Hub
        </p>
        <ThemeToggle />
      </div>
      <div className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Un punto unico para acceder a las herramientas del departamento.
        </h1>
        <p className="max-w-2xl text-base text-zinc-600 dark:text-zinc-300">
          Inicia sesion para ver el catalogo y entrar a las apps habilitadas.
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Link
          className="btn-lift inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          href="/login"
        >
          Iniciar sesion
        </Link>
        <span className="text-xs text-zinc-500 dark:text-zinc-400">
          Acceso seguro con SSO del HUB
        </span>
      </div>
    </main>
  );
}
