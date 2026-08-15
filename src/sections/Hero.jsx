import React from 'react';
import { ArrowDown, FileText, ChevronRight, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 cyber-grid pointer-events-none opacity-40 z-[1]" />
      <div className="aurora-bg" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-card border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-6 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span>{personalInfo.availability}</span>
        </div>

        {/* Hero Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-6 leading-none">
          HI, I'M <span className="text-gradient">HIDAYATHULLAH</span>
        </h1>

        {/* Subtitle / Title */}
        <div className="max-w-3xl text-lg sm:text-xl md:text-2xl font-medium text-slate-300 mb-8 leading-relaxed">
          <span className="text-cyan-400 font-semibold">{personalInfo.title}</span> — {personalInfo.subtitle}
        </div>

        {/* Feature Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 text-xs font-mono">
          {["React 19", "Three.js & R3F", "AI Systems & RAG", "Full-Stack SaaS", "60 FPS WebGL"].map((badge, idx) => (
            <span
              key={idx}
              className="px-3.5 py-1.5 rounded-lg bg-slate-900/80 border border-slate-700/60 text-slate-300 flex items-center space-x-1.5"
            >
              <Terminal className="w-3.5 h-3.5 text-purple-400" />
              <span>{badge}</span>
            </span>
          ))}
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12">
          <a
            href="#projects"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_40px_rgba(0,240,255,0.7)] hover:scale-105 transition-all flex items-center justify-center space-x-2"
          >
            <span>Explore Projects</span>
            <ChevronRight className="w-4 h-4" />
          </a>

          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl glass-card border border-white/20 text-white font-bold text-sm tracking-wider uppercase hover:border-cyan-400 hover:bg-cyan-500/10 transition-all flex items-center justify-center space-x-2"
          >
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="flex flex-col items-center text-slate-400 hover:text-cyan-400 transition-colors pt-4"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase mb-1">SCROLL DOWN</span>
          <ArrowDown className="w-4 h-4 text-cyan-400" />
        </a>

      </div>
    </section>
  );
}
