const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[var(--bg)]/60 border-b border-white/5">
      <nav className="container-x flex h-16 items-center justify-between">
        <a href="#top" className="font-mono text-sm tracking-tight">
          <span className="text-accent">~/</span>tulsi
        </a>
        <ul className="hidden md:flex items-center gap-7 text-sm text-white/70">
          {links.map((l) => (
            <li key={l.href}>
              <a className="transition hover:text-white" href={l.href}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="mailto:tulsirathod9102@gmail.com"
          className="hidden md:inline-flex items-center rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-white transition hover:bg-accent-soft"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}
