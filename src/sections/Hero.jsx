import React from 'react';
import { ArrowUpRight, Rocket, Code2, Cpu, Sparkles } from 'lucide-react';
import { heroCards } from '../data/portfolioData';
import profileImg from '../assets/profile.png';

const iconMap = {
  Rocket: Rocket,
  Code2: Code2,
  Cpu: Cpu,
  Sparkles: Sparkles,
};

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[96vh] flex flex-col justify-center bg-lightBg pt-36 sm:pt-40 lg:pt-44 pb-12 sm:pb-16 overflow-hidden scroll-mt-28">
      {/* Subtle Warm Glow in the Center */}
      <div className="absolute top-28 left-1/2 -translate-x-1/2 w-[800px] h-[380px] bg-brandOrange/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Hello Badge */}
        <div className="flex justify-center mb-3 sm:mb-4">
          <div className="relative inline-flex items-center px-4 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-xs sm:text-sm font-semibold text-slate-900">
            <span>Hello!</span>
            
            {/* Top-Right Orange Doodle Accent Rays */}
            <div className="absolute -top-3.5 -right-3 text-brandOrange font-extrabold text-xs select-none pointer-events-none flex space-x-0.5">
              <span className="transform rotate-12">/</span>
              <span className="transform -rotate-6">|</span>
              <span className="transform rotate-45">\</span>
            </div>
            
            {/* Bottom-Left Orange Doodle Accent Rays */}
            <div className="absolute -bottom-3 -left-3 text-brandOrange font-extrabold text-xs select-none pointer-events-none flex space-x-0.5">
              <span className="transform rotate-45">\</span>
              <span className="transform -rotate-12">/</span>
            </div>
          </div>
        </div>

        {/* Master Headline */}
        <div className="text-center max-w-5xl mx-auto mb-5 sm:mb-7">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black tracking-tight text-[#080808] leading-[1.06]">
            I'm <span className="text-brandOrange">Hidayathullah</span>,
            <br />
            <span className="text-[#080808]">Software Developer</span>
          </h1>
          <div className="mt-2.5 flex items-center justify-center space-x-2 text-xs sm:text-sm font-semibold text-slate-500 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-brandOrange inline-block" />
            <span>Full-Stack &amp; AI Applications</span>
          </div>
        </div>

        {/* 3-Column Layout Matching Master Reference Design */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-5 items-center">
          
          {/* LEFT COLUMN: Narrative & Action CTAs (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-5 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-2.5 max-w-sm mx-auto lg:mx-0">
              <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
                I build fast, modern, and user-friendly{' '}
                <span className="text-brandOrange font-bold">websites and applications</span>{' '}
                that solve real-world problems.
              </p>
              <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
                Let's turn your ideas into powerful digital solutions.
              </p>
            </div>

            {/* CTAs */}
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

          {/* CENTER COLUMN: Real Photo Cutout Overlapping Orange Circle Arch (4 cols) */}
          <div className="lg:col-span-4 flex justify-center order-1 lg:order-2">
            <div className="relative w-[290px] sm:w-[340px] md:w-[380px] h-[410px] sm:h-[470px] md:h-[500px] flex items-end justify-center -translate-y-4 sm:-translate-y-6 lg:-translate-y-8">
              
              {/* Solid Orange Circle Arch Backdrop (Positioned lower to let head & shoulders pop out above) */}
              <div className="absolute top-22 sm:top-20 md:top-18 w-[245px] sm:w-[290px] md:w-[320px] h-[245px] sm:h-[290px] md:h-[320px] rounded-full bg-brandOrange shadow-[0_20px_55px_rgba(255,106,0,0.40)] z-0" />

              {/* Transparent PhotoRoom Portrait Cutout Shifted Upward */}
              <div className="relative z-10 w-full h-full flex items-end justify-center pointer-events-none -translate-y-2 sm:-translate-y-3">
                <img
                  src={profileImg}
                  alt="Hidayathullah - Software Developer"
                  className="w-auto h-full max-h-[495px] object-contain object-bottom drop-shadow-[0_16px_35px_rgba(0,0,0,0.18)]"
                  loading="eager"
                />
              </div>

              {/* Bottom Arch Floating Action Pill Overlay (Desktop Only) */}
              <div className="hidden lg:flex absolute bottom-0 z-20 items-center bg-[#0D0D0D] border border-white/15 text-white rounded-full p-1 shadow-2xl pointer-events-auto">
                <a
                  href="#projects"
                  className="px-4 py-1.5 rounded-full bg-brandOrange text-white text-xs font-bold flex items-center space-x-1 hover:bg-brandOrange-600 transition-colors shadow-sm"
                >
                  <span>View My Work</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href="#contact"
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: 4 Information Cards (4 cols) */}
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
