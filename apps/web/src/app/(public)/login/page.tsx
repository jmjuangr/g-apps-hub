import Link from "next/link";
import { ThemeToggle } from "@/components/theme/theme-toggle";

type LoginPageProps = {
  searchParams?: Promise<{ error?: string; redirect?: string }>;
};

const errorMessages: Record<string, string> = {
  missing_fields: "Completa email y contrasena.",
  invalid_credentials: "Credenciales invalidas.",
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const resolvedParams = searchParams ? await searchParams : undefined;
  const errorKey = resolvedParams?.error;
  const redirectTo = resolvedParams?.redirect ?? "";
  const errorMessage = errorKey ? errorMessages[errorKey] : null;

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col justify-center gap-6 px-6 py-16">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium uppercase tracking-wide text-zinc-500 dark:text-white/60">
          Apps Hub
        </p>
        <ThemeToggle />
      </div>
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          Iniciar sesion
        </h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-300">
          Usa tu cuenta del departamento para entrar al catalogo.
        </p>
      </div>

      <form action="/api/auth/login" method="post" className="space-y-4">
        <input type="hidden" name="redirect" value={redirectTo} />
        <label className="flex flex-col gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-200">
          Email
          <input
            className="rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm focus:border-zinc-400 focus:outline-none dark:border-white/15 dark:bg-zinc-900/60 dark:text-zinc-100"
            type="email"
            name="email"
            required
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-200">
          Contrasena
          <input
            className="rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm focus:border-zinc-400 focus:outline-none dark:border-white/15 dark:bg-zinc-900/60 dark:text-zinc-100"
            type="password"
            name="password"
            required
          />
        </label>

        {errorMessage ? (
          <p className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-400/30 dark:bg-red-400/10 dark:text-red-200">
            {errorMessage}
          </p>
        ) : null}

        <button
          className="btn-lift w-full rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          type="submit"
        >
          Entrar
        </button>
      </form>

      <Link
        href="/"
        className="text-sm text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-100"
      >
        Volver
      </Link>
    </main>
  );
}
