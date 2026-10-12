import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  FileText, 
  Mail, 
  Globe, 
  Copy, 
  Check, 
  Sparkles, 
  Code2, 
  Cpu, 
  Layers, 
  CheckCircle2,
  Database,
  Smartphone
} from 'lucide-react';
import profileBustImg from '../assets/profile_bust.png';

const skillsList = [
  { name: 'Spring Boot', label: 'Backend API', icon: Layers, color: 'text-emerald-400 bg-emerald-500/10' },
  { name: 'React', label: 'Modern Web', icon: Code2, color: 'text-cyan-400 bg-cyan-500/10' },
  { name: 'Python', label: 'AI & Scripting', icon: Cpu, color: 'text-amber-400 bg-amber-500/10' },
  { name: 'Flutter', label: 'Mobile Apps', icon: Smartphone, color: 'text-sky-400 bg-sky-500/10' },
  { name: 'PostgreSQL', label: 'Database', icon: Database, color: 'text-indigo-400 bg-indigo-500/10' },
  { name: 'OpenCV / MediaPipe', label: 'Vision AI', icon: Sparkles, color: 'text-brandOrange bg-brandOrange/10' },
];

export function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hidayathullahbajar@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative min-h-[96vh] flex flex-col justify-center bg-[#FDFBF7] pt-32 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 overflow-hidden scroll-mt-28">
      {/* Subtle Warm Background Glow */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-brandOrange/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Main 2-Column Hero Layout (Inspired by Pin 3 & Pin 1) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center mb-10 sm:mb-14">
          
          {/* LEFT COLUMN: Bold Typography, Script Doodle & Story (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-center lg:text-left order-2 lg:order-1">
            
            {/* Status Pill */}
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-2xs text-xs font-semibold text-slate-800">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Available for Hire &amp; Full-Stack Projects</span>
              </div>
            </div>

            {/* Master Headline (Matching Pin 3: Web Designer / Developer Portfolio.) */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-[4.85rem] font-black tracking-tight text-[#0F141C] leading-[1.03]">
                Software <br className="hidden sm:inline" />
                <span className="text-brandOrange">Developer</span>{' '}
                <br className="hidden sm:inline" />
                Portfolio<span className="text-brandOrange">.</span>
              </h1>

              {/* Handwritten Script Doodle Accent (Pin 3 style) */}
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-brandOrange font-serif italic text-base sm:text-lg">
                <span>— Designing Scalable Software &amp; AI Experiences</span>
                <span className="text-sm not-italic">&#9825;</span>
              </div>
            </div>

            {/* Bio Narrative */}
            <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
              Hello! I'm <strong className="text-slate-900 font-bold">Hidayathullah</strong>, a passionate software developer building modern, fast, responsive web applications, mobile ecosystems, and computer vision AI solutions that help businesses and ideas grow online.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-1">
              <a
                href="#projects"
                className="px-8 py-4 rounded-full bg-[#0D1117] hover:bg-black text-white text-sm font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center space-x-2 group"
              >
                <span>Explore My Work</span>
                <ArrowUpRight className="w-4 h-4 text-brandOrange group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-7 py-4 rounded-full bg-brandOrange hover:bg-brandOrange-600 text-white text-sm font-bold shadow-[0_8px_25px_rgba(255,106,0,0.38)] hover:shadow-[0_12px_32px_rgba(255,106,0,0.58)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center space-x-2"
              >
                <FileText className="w-4 h-4" />
                <span>Download CV</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="px-5 py-4 rounded-full bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-colors flex items-center space-x-2"
                title="Copy Email Address"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied Email!' : 'Copy Email'}</span>
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: Large Bust Portrait in Warm Golden-Orange Sun Backdrop (5 cols) */}
          <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
            <div className="relative w-[340px] sm:w-[420px] lg:w-[460px] h-[440px] sm:h-[500px] lg:h-[530px] flex items-center justify-center">
              
              {/* Sun / Arch Backdrop (Perfect Concentric Center) */}
              <div className="absolute w-[300px] sm:w-[380px] lg:w-[420px] h-[300px] sm:h-[380px] lg:h-[420px] rounded-full bg-gradient-to-tr from-[#FF6A00] via-[#FF851A] to-[#FFB03A] shadow-[0_24px_65px_rgba(255,106,0,0.42)] z-0">
                {/* Hand-Drawn Doodle Rays at Top-Right (Pin 3 style) */}
                <div className="absolute -top-7 -right-2 text-brandOrange font-black text-xl select-none pointer-events-none flex space-x-1 rotate-12">
                  <span className="transform -rotate-12">/</span>
                  <span>|</span>
                  <span className="transform rotate-12">\</span>
                </div>
              </div>

              {/* High-Resolution Portrait Cutout (Elevated to center harmoniously with the sun) */}
              <div className="relative z-10 w-full h-full flex items-center justify-center pointer-events-none">
                <img
                  src={profileBustImg}
                  alt="Hidayathullah - Software Developer"
                  className="h-[430px] sm:h-[490px] lg:h-[520px] w-auto max-w-none object-contain -translate-y-5 sm:-translate-y-7 lg:-translate-y-9 drop-shadow-[0_20px_45px_rgba(0,0,0,0.24)]"
                  loading="eager"
                />
              </div>

              {/* Hand-Drawn Arrow & Label Annotation (Pin 3 style) */}
              <div className="hidden sm:flex absolute -left-4 sm:-left-6 bottom-14 z-20 items-center space-x-2">
                <span className="font-serif italic text-xs font-semibold text-slate-600 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200/90 shadow-sm">
                  Software Developer &#10549;
                </span>
              </div>

              {/* Floating Stat Badge (Pin 2 style) */}
              <div className="absolute -right-2 sm:-right-4 top-14 sm:top-18 z-20 flex items-center space-x-2 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-slate-200/90 shadow-md">
                <div className="w-8 h-8 rounded-xl bg-brandOrange/10 text-brandOrange flex items-center justify-center font-bold text-sm">
                  ⭐
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Experience</p>
                  <p className="text-xs font-black text-slate-900">10+ Projects Built</p>
                </div>
              </div>

              {/* Bottom Credibility Pill (Pin 1 style) */}
              <div className="absolute -bottom-2 sm:bottom-0 z-20 flex items-center space-x-2 bg-[#0C0F14] text-white px-4 py-2 rounded-full border border-white/15 shadow-xl">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-semibold tracking-wide">Class of 2026 &bull; B.E. Computer Science</span>
              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM HORIZONTAL RIBBON: Contact Quick-Info & Software Skills (Signature Pin 3 Banner) */}
        <div className="rounded-3xl bg-[#0C1017] text-white p-6 sm:p-7 border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Contact Quick-Info (Left 4 cols) */}
            <div className="lg:col-span-4 space-y-2.5 border-b lg:border-b-0 lg:border-r border-white/10 pb-5 lg:pb-0 lg:pr-6 text-left">
              <p className="text-xs font-bold uppercase tracking-wider text-brandOrange flex items-center space-x-1.5">
                <Mail className="w-3.5 h-3.5" />
                <span>Contact &amp; Availability</span>
              </p>
              <p className="text-sm font-semibold text-white truncate">
                hidayathullahbajar@gmail.com
              </p>
              <div className="flex items-center space-x-2 text-xs text-slate-400">
                <Globe className="w-3.5 h-3.5 text-slate-500" />
                <span>India / Available Worldwide (Remote &amp; On-Site)</span>
              </div>
            </div>

            {/* Software Skills Icons (Right 8 cols) */}
            <div className="lg:col-span-8 text-left">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Core Software Stack
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
                {skillsList.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-brandOrange/50 hover:bg-white/10 transition-all flex flex-col items-center justify-center text-center group"
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-1.5 ${skill.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-white group-hover:text-brandOrange transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-[10px] text-slate-400 mt-0.5">
                        {skill.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
