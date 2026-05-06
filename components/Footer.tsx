export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-12">
      <div className="container-x py-10 flex flex-col md:flex-row gap-3 items-center justify-between text-sm text-white/40 font-mono">
        <p>© {new Date().getFullYear()} Tulsi Rathod. Built with Next.js + Tailwind.</p>
        <p>designed &amp; built — Mumbai, IN</p>
      </div>
    </footer>
  );
}
