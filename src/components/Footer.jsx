export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-slate-800/80 text-center text-slate-500 text-xs">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {currentYear} Javi.dev — Construido con React y Tailwind CSS.</p>
        <div className="flex gap-6 text-slate-400">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}