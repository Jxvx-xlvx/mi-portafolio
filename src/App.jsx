import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutBento from './components/AboutBento';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 selection:bg-cyan-500 selection:text-slate-950 overflow-x-hidden">
      {/* Fondo de Partículas Flotantes */}
      <ParticleBackground />

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <AboutBento />
        <Projects />
        <Experience />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}