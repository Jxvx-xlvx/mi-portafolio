import { useState } from 'react';
import { projectsData } from '../data/projects';

export default function Projects() {
  const [filter, setFilter] = useState('ALL');

  const categories = [
    { label: 'Todos', value: 'ALL' },
    { label: 'Full Stack', value: 'fullstack' },
    { label: 'Frontend', value: 'frontend' },
    { label: 'PWA / Apps', value: 'pwa' }
  ];

  const filteredProjects = filter === 'ALL'
    ? projectsData
    : projectsData.filter((p) => p.types.includes(filter));

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-800/60">
      
      <div className="flex flex-col items-center text-center mb-12">
        <span className="px-3.5 py-1 text-xs font-mono font-bold text-cyan-300 bg-cyan-950/80 border border-cyan-500/50 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.3)] mb-4">
          &lt;PORTAFOLIO DE PROYECTOS /&gt;
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Trabajo & Soluciones
        </h2>
        <p className="mt-4 text-slate-300 max-w-xl text-sm sm:text-base">
          Filtra por arquitectura para explorar las diferentes plataformas desarrolladas.
        </p>

        {/* Botones de Filtro */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-4 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all ${
                filter === cat.value
                  ? 'bg-cyan-400 text-slate-950 shadow-[0_0_12px_rgba(6,182,212,0.4)]'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, idx) => (
          <div
            key={project.id}
            className="group relative rounded-3xl border border-slate-700/80 bg-slate-900/70 p-8 flex flex-col justify-between hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(6,182,212,0.25)] hover:-translate-y-1.5 transition-all duration-300 backdrop-blur-md"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-6">
                <span className="text-xs font-mono font-semibold text-cyan-300 bg-cyan-950/90 border border-cyan-600/50 px-3 py-1 rounded-lg">
                  {project.category}
                </span>
                <span className="text-sm font-mono text-cyan-400/60 font-bold">0{idx + 1}</span>
              </div>

              <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                {project.title}
              </h3>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800">
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono font-medium text-slate-200 bg-slate-800 border border-slate-700 px-3 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 px-4 py-2.5 rounded-xl transition-all shadow-[0_0_15px_rgba(6,182,212,0.35)]"
                >
                  <span>Ver Repositorio</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}