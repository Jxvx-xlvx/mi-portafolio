export default function AboutBento() {
  return (
    <section id="about-bento" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-800/60">
      <div className="flex flex-col items-center text-center mb-14">
        <span className="px-3.5 py-1 text-xs font-mono font-bold text-cyan-300 bg-cyan-950/80 border border-cyan-500/50 rounded-full mb-3">
          &lt;FILOSOFÍA & ENFOQUE /&gt;
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Más sobre mi perfil
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Tarjeta 1: Arquitectura y Rendimiento */}
        <div className="md:col-span-2 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/90 to-slate-950 p-8 hover:border-cyan-500/40 transition-all">
          <div className="text-cyan-400 font-mono text-xs mb-2">01 // ENFOQUE DE INGENIERÍA</div>
          <h3 className="text-2xl font-bold text-white mb-3">Código modular, testeable y escalable</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Me enfoco en construir software que no solo luzca bien, sino que mantenga una estructura limpia: separación de capas, manejo eficiente de estados en React y endpoints REST robustos con autenticación segura.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-slate-800/80 border border-slate-700 text-xs font-mono text-cyan-300 rounded-lg">#CleanCode</span>
            <span className="px-3 py-1 bg-slate-800/80 border border-slate-700 text-xs font-mono text-cyan-300 rounded-lg">#ClientServer</span>
            <span className="px-3 py-1 bg-slate-800/80 border border-slate-700 text-xs font-mono text-cyan-300 rounded-lg">#ResponsiveFirst</span>
          </div>
        </div>

        {/* Tarjeta 2: Disponibilidad y Zona */}
        <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/90 to-slate-950 p-8 flex flex-col justify-between hover:border-emerald-500/40 transition-all">
          <div>
            <div className="text-emerald-400 font-mono text-xs mb-2">02 // DISPONIBILIDAD</div>
            <h3 className="text-xl font-bold text-white mb-2">Trabajo Remoto & Híbrido</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Abierto a integrarme a equipos de desarrollo para proyectos de alto impacto y estadías.
            </p>
          </div>
          <div className="pt-6 border-t border-slate-800">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Zona Horaria: UTC-6 (México)
            </div>
          </div>
        </div>

        {/* Tarjeta 3: Pasión por UX/UI */}
        <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/90 to-slate-950 p-8 hover:border-purple-500/40 transition-all">
          <div className="text-purple-400 font-mono text-xs mb-2">03 // DISEÑO & EXPERIENCIA</div>
          <h3 className="text-xl font-bold text-white mb-2">Atención al detalle UI/UX</h3>
          <p className="text-slate-400 text-xs leading-relaxed">
            Prototipado en Figma y traducción pixel-perfect a Tailwind CSS con transiciones fluidas.
          </p>
        </div>

        {/* Tarjeta 4: Respaldo y Seguridad */}
        <div className="md:col-span-2 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/90 to-slate-950 p-8 hover:border-blue-500/40 transition-all">
          <div className="text-blue-400 font-mono text-xs mb-2">04 // SEGURIDAD & DATOS</div>
          <h3 className="text-2xl font-bold text-white mb-3">Modelado relacional y protección de datos</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Diseño esquemas de bases de datos normalizados en MySQL, consultas optimizadas y control de acceso basado en roles con validación estricta de entradas.
          </p>
        </div>

      </div>
    </section>
  );
}