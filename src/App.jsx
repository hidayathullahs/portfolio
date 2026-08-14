import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { CustomCursor } from './components/CustomCursor';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { CommandPalette } from './components/CommandPalette';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Services } from './sections/Services';
import { Certifications } from './sections/Certifications';
import { TechStack } from './sections/TechStack';
import { GithubStats } from './sections/GithubStats';
import { Testimonials } from './sections/Testimonials';
import { FAQ } from './sections/FAQ';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  useEffect(() => {
    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Event listener for opening command palette via custom event
    const handleOpenCmd = () => setCommandPaletteOpen(true);
    window.addEventListener('open-command-palette', handleOpenCmd);

    return () => {
      lenis.destroy();
      window.removeEventListener('open-command-palette', handleOpenCmd);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050816] text-white overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      {/* Noise Texture Overlay */}
      <div className="noise-overlay" />

      {/* Luxury Custom Magnetic Cursor */}
      <CustomCursor />

      {/* Loading Screen */}
      <LoadingScreen />

      {/* Top Navbar */}
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Command Palette Modal */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />

      {/* Main Page Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <Certifications />
        <TechStack />
        <GithubStats />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
