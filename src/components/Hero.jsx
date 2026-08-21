import { useState, useEffect } from 'react';
import profileImg from '../assets/profile1.jpg';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('terminal');
  const [inputVal, setInputVal] = useState('');
  const [terminalLogs, setTerminalLogs] = useState([
    { type: 'system', text: '⚡ Bienvenido a la consola interactiva de Javi.dev' },
    { type: 'system', text: 'Escribe "help" para ver la lista de comandos disponibles.' },
  ]);

  // Efecto Máquina de Escribir (Typewriter)
  const phrases = [
    'Software Engineer',
    'Full Stack Developer',
    'Node.js & MySQL Builder',
    'React & Tailwind Specialist'
  ];
  const [textIndex, setTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = phrases[textIndex % phrases.length];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setTextIndex((prev) => prev + 1);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, textIndex]);

  // Ejecutor de comandos en terminal
  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    const newLogs = [...terminalLogs, { type: 'user', text: `$ ${inputVal}` }];

    switch (cmd) {
      case 'help':
        newLogs.push({ type: 'res', text: 'Comandos: about, skills, projects, contact, clear' });
        break;
      case 'about':
        newLogs.push({ type: 'res', text: 'Javi: Desarrollador de Software en Puebla, México.' });
        break;
      case 'skills':
        newLogs.push({ type: 'res', text: 'Stack: React, Node.js, Express, MySQL, Tailwind, Docker, Python.' });
        break;
      case 'projects':
        newLogs.push({ type: 'res', text: 'Proyectos: SIGA-TEC, Alpha Access, LevelUp Life, Sueño Americano.' });
        break;
      case 'contact':
        newLogs.push({ type: 'res', text: 'Email: contacto@javi.dev | GitHub: github.com' });
        break;
      case 'clear':
        setTerminalLogs([]);
        setInputVal('');
        return;
      default:
        newLogs.push({ type: 'error', text: `Comando no reconocido: "${cmd}". Escribe "help".` });
    }

    setTerminalLogs(newLogs);
    setInputVal('');
  };

  return (
    <section id="about" className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto z-10">
      
      {/* Resplandor Neón de Fondo */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/25 via-teal-500/15 to-blue-600/15 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* LADO IZQUIERDO: Pitch Principal */}
        <div className="lg:col-span-7 text-left space-y-6">
          
          {/* Avatar con Holograma & Status */}
          <div className="flex items-center gap-5">
            <div className="relative group">
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-600 opacity-90 blur-md group-hover:opacity-100 group-hover:blur-xl transition duration-500 animate-spin-slow"></div>
              <img
                src={profileImg}
                alt="Javi"
                className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-slate-700 bg-slate-950 shadow-2xl transition duration-300 group-hover:scale-105"
              />
              <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 border-2 border-slate-950 rounded-full flex items-center justify-center shadow-lg">
                <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
              </span>
            </div>

            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/40 bg-cyan-950/60 text-cyan-300 text-xs font-mono backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.25)]">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                <span>Desarrollador de Software</span>
              </div>
              <p className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                <span>📍</span> Tepeaca, Puebla, México <span className="text-slate-600">•</span> <span className="text-cyan-400 font-semibold">Ingeniero en Software</span>
              </p>
            </div>
          </div>

          {/* Gran Título con Máquina de Escribir */}
          <div>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.08]">
              Construyendo{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 drop-shadow-[0_0_25px_rgba(6,182,212,0.4)]">
                software
              </span>{' '}
              de alto impacto.
            </h1>

            {/* Máquina de Escribir */}
            <div className="mt-4 flex items-center gap-2 font-mono text-lg sm:text-2xl text-cyan-300">
              <span className="text-slate-500">&gt;</span>
              <span>{currentText}</span>
              <span className="w-2.5 h-6 bg-cyan-400 animate-pulse inline-block"></span>
            </div>
          </div>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
            Especializado en el desarrollo de arquitecturas escalables, interfaces interactivas y sistemas web seguros con integración cliente-servidor.
          </p>

          {/* Botones de Acción */}
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600 text-slate-950 font-black text-xs uppercase tracking-wider hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all duration-300 hover:scale-105"
            >
              <span>Explorar Proyectos</span>
              <span className="transition-transform group-hover:translate-x-1">⚡</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl border border-slate-700/80 bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-semibold text-xs font-mono hover:border-cyan-500/50 transition-all backdrop-blur-sm shadow-lg"
            >
              <span>Iniciar Conversación →</span>
            </a>
          </div>

          {/* Mini Métricas Flotantes */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
            <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
              <div className="text-2xl font-black text-white font-mono">+4</div>
              <div className="text-[11px] font-mono text-slate-400">Proyectos Clave</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
              <div className="text-2xl font-black text-cyan-400 font-mono">Full Stack</div>
              <div className="text-[11px] font-mono text-slate-400">React & Node.js</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
              <div className="text-2xl font-black text-emerald-400 font-mono">100%</div>
              <div className="text-[11px] font-mono text-slate-400">Clean Code</div>
            </div>
          </div>
        </div>

        {/* LADO DERECHO: Consola Interactiva Real con CLI */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/95 shadow-[0_0_50px_rgba(0,0,0,0.9)] overflow-hidden backdrop-blur-2xl transition-all duration-300 hover:border-cyan-500/60 hover:shadow-[0_0_35px_rgba(6,182,212,0.2)]">
            
            {/* Header de la ventana */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              </div>

              <div className="flex gap-1 text-[11px] font-mono">
                <button
                  onClick={() => setActiveTab('terminal')}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    activeTab === 'terminal'
                      ? 'bg-slate-800 text-emerald-400 border border-slate-700'
                      : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  interactive-bash ⚡
                </button>
                <button
                  onClick={() => setActiveTab('config')}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    activeTab === 'config'
                      ? 'bg-slate-800 text-cyan-400 border border-slate-700'
                      : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  developer.ts
                </button>
              </div>
            </div>

            {/* Pestaña 1: Terminal Interactiva Real con Input */}
            {activeTab === 'terminal' && (
              <div className="p-5 font-mono text-xs space-y-2 bg-black/60 min-h-[300px] flex flex-col justify-between">
                <div className="space-y-1.5 overflow-y-auto max-h-[220px]">
                  {terminalLogs.map((log, idx) => (
                    <div key={idx} className={
                      log.type === 'system' ? 'text-slate-500 text-[11px]' :
                      log.type === 'user' ? 'text-cyan-400 font-bold' :
                      log.type === 'error' ? 'text-rose-400' :
                      'text-emerald-300 pl-2'
                    }>
                      {log.text}
                    </div>
                  ))}
                </div>

                {/* Formulario de comandos CLI */}
                <form onSubmit={handleCommandSubmit} className="pt-2 border-t border-slate-800 flex items-center gap-2">
                  <span className="text-cyan-400 font-bold">$</span>
                  <input
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    placeholder="Escribe 'skills', 'about' o 'clear'..."
                    className="w-full bg-transparent text-slate-100 placeholder-slate-600 focus:outline-none text-xs font-mono"
                  />
                  <button type="submit" className="text-[10px] bg-slate-800 text-cyan-400 px-2 py-1 rounded border border-slate-700">
                    Enter
                  </button>
                </form>
              </div>
            )}

            {/* Pestaña 2: Objeto TypeScript */}
            {activeTab === 'config' && (
              <div className="p-6 font-mono text-xs sm:text-sm space-y-2 text-slate-300 leading-relaxed min-h-[300px]">
                <p><span className="text-purple-400 font-semibold">interface</span> <span className="text-yellow-400">Engineer</span> &#123;</p>
                <p className="pl-4"><span className="text-slate-400">name:</span> <span className="text-amber-300">'Francisco Javier'</span>,</p>
                <p className="pl-4"><span className="text-slate-400">title:</span> <span className="text-amber-300">'Full Stack Developer'</span>,</p>
                <p className="pl-4"><span className="text-slate-400">tech:</span> &#91;</p>
                <p className="pl-8 text-cyan-300">'React', 'Node.js', 'MySQL', 'Tailwind'</p>
                <p className="pl-4">&#93;,</p>
                <p className="pl-4"><span className="text-slate-400">education:</span> <span className="text-amber-300">'Software Development'</span>,</p>
                <p className="pl-4"><span className="text-slate-400">hardWorker:</span> <span className="text-emerald-400">true</span>,</p>
                <p className="pl-4"><span className="text-slate-400">passion:</span> <span className="text-cyan-400">'Scalable & Secure Systems'</span></p>
                <p>&#125;;</p>
              </div>
            )}

            {/* Footer de la terminal */}
            <div className="px-4 py-2 bg-slate-900/80 border-t border-slate-800 flex justify-between items-center text-[10px] font-mono text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                LIVE CONSOLE
              </span>
              <span>UTF-8 // CLI ACTIVE</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}