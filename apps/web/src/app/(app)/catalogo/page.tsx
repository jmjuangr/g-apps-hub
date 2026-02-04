const apps = [
  {
    name: "g-code",
    description: "Editor de markdown avanzado con ayuda integrada.",
    status: "beta",
    owner: "Desarollo de medios",
    tags: ["GestionaCode", "markdown", "editor"],
    url: "https://g-code-live.vercel.app/",
  },
  {
    name: "g-process",
    description: "Asistente de configuracion de flujos de tramitacion reglada.",
    status: "beta",
    owner: "Desarrollo de medios",
    tags: ["Tramitacion Reglada", "Configuracion"],
    url: "https://gprocess-live.vercel.app/",
  },
  {
    name: "g-classifier",
    description:
      "Asistente para la gestion y configuracion de cuadros de archivo en Gestiona.",
    status: "beta",
    owner: "Desarollo de medios",
    tags: ["Configuracion", "Archivo"],
    url: "https://gclassifier4.vercel.app/",
  },
  {
    name: "g-informe-objetivos",
    description:
      "Generador del informe de objetivos anual para las entidades.",
    status: "beta",
    owner: "Desarrollo de medios",
    tags: ["Informes", "Configuracion"],
    url: "https://g-informe-objetivos.vercel.app/",
  },
];

const statusStyles: Record<string, string> = {
  activa:
    "bg-emerald-50 text-emerald-700 ring-emerald-200 dark:bg-emerald-400/15 dark:text-emerald-200 dark:ring-emerald-400/40",
  beta:
    "bg-amber-50 text-amber-700 ring-amber-200 dark:bg-amber-400/15 dark:text-amber-200 dark:ring-amber-400/40",
  deprecada:
    "bg-zinc-100 text-zinc-600 ring-zinc-200 dark:bg-zinc-400/15 dark:text-zinc-200 dark:ring-zinc-400/40",
};

const delayClasses = ["", "delay-1", "delay-2", "delay-3"];

export default function CatalogoPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12">
      <section className="mb-10 flex flex-col gap-6 rounded-3xl border border-zinc-200 bg-white px-8 py-8 shadow-sm dark:border-white/10 dark:bg-zinc-900/60 dark:shadow-[0_20px_60px_-40px_rgba(15,23,42,0.9)] dark:backdrop-blur">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-white/60">
            Hub del departamento
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-4xl">
            Catalogo profesional de herramientas internas.
          </h1>
          <p className="max-w-2xl text-sm text-zinc-600 dark:text-zinc-300">
            Accede rapido a las apps habilitadas, con estado y propietario
            visibles.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 text-xs text-zinc-600 dark:text-zinc-300">
          <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 dark:border-white/10 dark:bg-white/5">
            Total apps: {apps.length}
          </span>
          <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 dark:border-white/10 dark:bg-white/5">
            Estado: beta
          </span>
        </div>
      </section>

      <div className="grid gap-6 md:grid-cols-2">
        {apps.map((app, index) => (
          <article
            key={app.name}
            className={`fade-in-up ${delayClasses[index % delayClasses.length]} group flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-zinc-300 hover:shadow-[0_16px_35px_-25px_rgba(59,130,246,0.35)] dark:border-white/10 dark:bg-zinc-900/70 dark:shadow-[0_18px_50px_-40px_rgba(15,23,42,0.9)] dark:hover:border-white/20 dark:hover:shadow-[0_24px_70px_-35px_rgba(59,130,246,0.35)]`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  {app.name}
                </h2>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">
                  {app.description}
                </p>
              </div>
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ring-1 ${
                  statusStyles[app.status] ??
                  "bg-zinc-100 text-zinc-700 ring-zinc-200 dark:bg-white/10 dark:text-zinc-200 dark:ring-white/20"
                }`}
              >
                {app.status}
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-600 dark:text-zinc-300">
              {app.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-zinc-200 px-2.5 py-1 dark:border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between text-sm">
              <span className="text-zinc-500 dark:text-zinc-400">
                Owner: {app.owner}
              </span>
              <a
                href={app.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-medium text-zinc-900 transition group-hover:underline dark:text-zinc-100"
              >
                Abrir
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
