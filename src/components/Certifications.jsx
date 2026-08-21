import { certificationsData } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-800/60">
      
      <div className="flex flex-col items-center text-center mb-14">
        <span className="px-3.5 py-1 text-xs font-mono font-bold text-cyan-300 bg-cyan-950/80 border border-cyan-500/50 rounded-full mb-3">
          &lt;VALIDACIÓN PROFESIONAL /&gt;
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Competencias & Certificados
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {certificationsData.map((cert, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/60 to-slate-950 p-6 flex flex-col justify-between hover:border-cyan-500/40 hover:-translate-y-1 transition-all"
          >
            <div>
              <span className="text-[11px] font-mono font-semibold text-cyan-400 bg-cyan-950/60 border border-cyan-800 px-2 py-0.5 rounded">
                {cert.badge}
              </span>
              <h3 className="text-sm font-bold text-white mt-4 mb-1">
                {cert.title}
              </h3>
              <p className="text-xs text-slate-400">
                {cert.issuer}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-500">
              Año: {cert.date}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}