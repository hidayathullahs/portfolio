import React from 'react';
import { ArrowUpRight, Rocket, Code2, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';
import { heroCards } from '../data/portfolioData';
import profileBustImg from '../assets/profile_bust.png';

const iconMap = {
  Rocket: Rocket,
  Code2: Code2,
  Cpu: Cpu,
  Sparkles: Sparkles,
};

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-center bg-lightBg pt-32 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 overflow-hidden scroll-mt-28">
      {/* Subtle Warm Ambient Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brandOrange/6 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Hello Status Badge */}
        <div className="flex justify-center mb-3 sm:mb-4">
          <div className="relative inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-sm text-xs sm:text-sm font-semibold text-slate-900 space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for Hire &amp; Projects</span>
            
            {/* Top-Right Orange Doodle Accent Rays */}
            <div className="absolute -top-3.5 -right-3 text-brandOrange font-extrabold text-xs select-none pointer-events-none flex space-x-0.5">
              <span className="transform rotate-12">/</span>
              <span className="transform -rotate-6">|</span>
              <span className="transform rotate-45">\</span>
            </div>
          </div>
        </div>

        {/* Master Headline */}
        <div className="text-center max-w-5xl mx-auto mb-6 sm:mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.6rem] font-black tracking-tight text-[#080808] leading-[1.05]">
            I'm <span className="text-brandOrange">Hidayathullah</span>,
            <br />
            <span className="text-[#080808]">Software Developer</span>
          </h1>
          <p className="mt-2.5 text-xs sm:text-sm font-semibold text-slate-500 tracking-wide flex items-center justify-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brandOrange inline-block" />
            <span>Full-Stack Engineering &bull; Mobile Apps &bull; AI Systems</span>
          </p>
        </div>

        {/* 3-Column Balanced Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* LEFT COLUMN: Narrative, Key Specializations & Actions (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-6 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-3 max-w-sm mx-auto lg:mx-0">
              <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
                I build fast, production-ready{' '}
                <span className="text-brandOrange font-bold">websites, applications, and AI products</span>{' '}
                designed to solve real-world problems.
              </p>
              <p className="text-sm text-slate-500 leading-relaxed">
                Turning complex requirements into clean, performant, and intuitive user experiences.
              </p>
            </div>

            {/* Quick Tech Highlights */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start max-w-sm mx-auto lg:mx-0">
              {['React', 'Spring Boot', 'Python', 'Flutter', 'AI / CV'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-white border border-slate-200 text-slate-700 shadow-xs"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-1">
              <a
                href="#projects"
                className="px-7 py-3.5 rounded-full bg-brandOrange hover:bg-brandOrange-600 text-white text-sm font-bold shadow-[0_8px_25px_rgba(255,106,0,0.38)] hover:shadow-[0_12px_32px_rgba(255,106,0,0.58)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center space-x-2"
              >
                <span>View My Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="px-7 py-3.5 rounded-full bg-[#0E0E0E] hover:bg-black text-white text-sm font-bold border border-white/10 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center space-x-2"
              >
                <span>Hire Me</span>
              </a>
            </div>
          </div>

          {/* CENTER COLUMN: Executive Bust Portrait in Modern Arch (4 cols) */}
          <div className="lg:col-span-4 flex justify-center order-1 lg:order-2">
            <div className="relative w-[300px] sm:w-[350px] md:w-[380px] h-[390px] sm:h-[430px] md:h-[460px] flex items-end justify-center">
              
              {/* Premium Gradient Arch Backdrop */}
              <div className="absolute bottom-0 w-[270px] sm:w-[310px] md:w-[330px] h-[330px] sm:h-[370px] md:h-[390px] rounded-t-[160px] rounded-b-[40px] bg-gradient-to-b from-brandOrange via-brandOrange to-[#E85D00] shadow-[0_24px_60px_rgba(255,106,0,0.36)] border-2 border-white/20 z-0 overflow-hidden">
                {/* Subtle Arch Radial Highlight */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-white/25 rounded-full blur-2xl pointer-events-none" />
              </div>

              {/* High-Resolution Executive Bust Cutout with 3D Head Pop-Out */}
              <div className="relative z-10 w-full h-full flex items-end justify-center pointer-events-none">
                <img
                  src={profileBustImg}
                  alt="Hidayathullah - Software Developer"
                  className="w-auto h-full max-h-[460px] object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.22)]"
                  loading="eager"
                />
              </div>

              {/* Floating Badge 1: Full-Stack */}
              <div className="absolute -left-3 sm:-left-5 top-20 z-20 hidden sm:flex items-center space-x-2 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-slate-200/90 shadow-[0_10px_25px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-transform">
                <div className="w-6 h-6 rounded-lg bg-brandOrange/10 text-brandOrange flex items-center justify-center font-bold text-xs">
                  ⚡
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Expertise</p>
                  <p className="text-xs font-extrabold text-slate-800">Full-Stack Dev</p>
                </div>
              </div>

              {/* Floating Badge 2: AI & Vision */}
              <div className="absolute -right-3 sm:-right-5 top-32 z-20 hidden sm:flex items-center space-x-2 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-slate-200/90 shadow-[0_10px_25px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-transform">
                <div className="w-6 h-6 rounded-lg bg-brandOrange/10 text-brandOrange flex items-center justify-center font-bold text-xs">
                  🤖
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Specialization</p>
                  <p className="text-xs font-extrabold text-slate-800">AI &amp; Vision</p>
                </div>
              </div>

              {/* Bottom Credibility Pill */}
              <div className="absolute -bottom-3 z-20 flex items-center space-x-2 bg-[#0B0B0B] text-white px-4 py-2 rounded-full border border-white/15 shadow-xl">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-semibold tracking-wide">10+ Delivered Projects</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: 4 Bento Cards (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-3 order-3">
            {heroCards.map((card) => {
              const IconComp = iconMap[card.icon] || Rocket;
              return (
                <div
                  key={card.id}
                  className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:border-brandOrange/40 hover:shadow-[0_8px_25px_rgba(255,106,0,0.12)] hover:-translate-y-0.5 transition-all flex items-center space-x-3.5 group"
                >
                  {/* Icon with Soft Orange Badge */}
                  <div className="w-9 h-9 rounded-xl bg-brandOrange/10 border border-brandOrange/20 flex items-center justify-center flex-shrink-0 text-brandOrange group-hover:bg-brandOrange group-hover:text-white transition-colors shadow-sm">
                    <IconComp className="w-4.5 h-4.5" />
                  </div>

                  {/* Card Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xs sm:text-sm font-bold text-[#080808] group-hover:text-brandOrange transition-colors truncate">
                      {card.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-500 line-clamp-2 leading-snug mt-0.5">
                      {card.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
