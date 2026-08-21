import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-800/60">
      
      <div className="flex flex-col items-center text-center mb-16">
        <span className="px-3.5 py-1 text-xs font-mono font-bold text-cyan-300 bg-cyan-950/80 border border-cyan-500/50 rounded-full mb-3">
          &lt;TRAYECTORIA & HISTORIAL /&gt;
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Experiencia & Formación
        </h2>
      </div>

      <div className="relative border-l border-slate-800 ml-4 md:ml-32 space-y-12">
        {experienceData.map((item) => (
          <div key={item.id} className="relative pl-8 md:pl-10 group">
            
            {/* Punto indicador en la línea */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:scale-125 group-hover:bg-cyan-400 transition-all"></div>

            <div className="p-6 rounded-2xl border border-slate-800/80 bg-slate-900/40 hover:border-cyan-500/40 transition-all">
              <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-md border border-cyan-800/40">
                {item.period}
              </span>
              
              <h3 className="text-xl font-bold text-white mt-3">
                {item.role}
              </h3>
              
              <h4 className="text-sm font-semibold text-slate-400 mb-3">
                {item.company}
              </h4>

              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="text-xs font-mono text-slate-400 bg-slate-800 px-2.5 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}