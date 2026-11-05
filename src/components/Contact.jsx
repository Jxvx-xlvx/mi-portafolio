import { useState } from 'react';

const CONTACT_EMAIL = 'jvr5617@gmail.com';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Contacto desde el portafolio: ${formData.name}`;
    const body = `${formData.message}

—
${formData.name}
${formData.email}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus('Se abrió tu app de correo con el mensaje listo. Solo falta enviarlo.');
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-800/60">
      <div className="flex flex-col items-center text-center mb-14">
        <span className="text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider mb-2">
          ¿Hablamos?
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Ponte en Contacto
        </h2>
        <p className="mt-3 text-slate-400 max-w-lg text-sm sm:text-base">
          Estoy disponible para nuevas oportunidades, proyectos freelance y estadías profesionales.
        </p>
      </div>

      <div className="max-w-xl mx-auto rounded-2xl border border-slate-800/80 bg-slate-900/40 p-8 shadow-xl">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              Nombre
            </label>
            <input
              id="contact-name"
              type="text"
              required
              placeholder="Tu nombre"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm transition-colors"
            />
          </div>

          <div>
            <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              Correo Electrónico
            </label>
            <input
              id="contact-email"
              type="email"
              required
              placeholder="tu@correo.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm transition-colors"
            />
          </div>

          <div>
            <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              Mensaje
            </label>
            <textarea
              id="contact-message"
              required
              rows={4}
              placeholder="Cuéntame sobre tu proyecto o propuesta..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm resize-none transition-colors"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 px-6 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-cyan-500/20"
          >
            Redactar correo
          </button>

          {status && (
            <p role="status" className="text-center text-xs font-medium text-cyan-400 mt-3">
              {status}
            </p>
          )}

          <p className="text-center text-xs text-slate-400">
            ¿No se abre? Escríbeme directo a{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-cyan-400 hover:text-cyan-300 underline">
              {CONTACT_EMAIL}
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}