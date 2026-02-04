import type { ReactNode } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { MainNav } from "@/components/nav/main-nav";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export default async function AppLayout({ children }: { children: ReactNode }) {
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase.auth.getUser();

  if (!data.user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 transition-colors dark:bg-zinc-950 dark:text-zinc-50">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.08),_transparent_48%),radial-gradient(circle_at_20%_30%,_rgba(59,130,246,0.12),_transparent_52%)] dark:bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_48%),radial-gradient(circle_at_20%_30%,_rgba(99,102,241,0.12),_transparent_52%)]" />
      <header className="border-b border-zinc-200 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-zinc-950/70">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/catalogo"
            className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white"
          >
            Apps Hub
          </Link>
          <div className="flex items-center gap-3">
            <MainNav />
            <ThemeToggle />
            <form action="/api/auth/logout" method="post">
              <button
                type="submit"
                className="btn-lift rounded-full border border-zinc-300 px-4 py-1.5 text-sm text-zinc-700 transition hover:border-zinc-400 hover:text-zinc-900 dark:border-white/20 dark:text-white/80 dark:hover:border-white/40 dark:hover:text-white"
              >
                Cerrar sesion
              </button>
            </form>
          </div>
        </div>
      </header>
      {children}
    </div>
  );
}
