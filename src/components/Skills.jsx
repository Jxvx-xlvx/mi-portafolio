import { skillsData } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-800/60">
      
      {/* Encabezado */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider mb-2">
          Stack Tecnológico
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Habilidades y Conocimientos
        </h2>
        <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base">
          Tecnologías, lenguajes y metodologías que utilizo para construir aplicaciones robustas.
        </p>
      </div>

      {/* Grid de Categorías */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillsData.map((group) => (
          <div
            key={group.category}
            className="p-6 rounded-2xl border border-slate-800/80 bg-slate-900/30 hover:border-slate-700 transition-all duration-200"
          >
            <h3 className="text-base font-semibold text-white mb-4 pb-2 border-b border-slate-800 flex items-center justify-between">
              <span>{group.category}</span>
              <span className="text-cyan-400 text-xs font-mono">/&gt;</span>
            </h3>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-medium text-slate-300 bg-slate-800/60 border border-slate-700/50 px-2.5 py-1 rounded-lg hover:border-cyan-500/40 hover:text-white transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}