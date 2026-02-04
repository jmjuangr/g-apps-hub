import Link from "next/link";

const navItems = [
  { href: "/catalogo", label: "Catalogo" },
  { href: "/admin", label: "Admin" },
];

export function MainNav() {
  return (
    <nav className="flex items-center gap-4 text-sm font-medium">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-zinc-600 transition hover:text-zinc-900 dark:text-white/70 dark:hover:text-white"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
