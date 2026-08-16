import React from 'react';
import { ArrowUpRight, Rocket, Code2, CheckCircle, Users } from 'lucide-react';
import { heroCards } from '../data/portfolioData';
import profileImg from '../assets/profile.png';

const iconMap = {
  Rocket: Rocket,
  Code2: Code2,
  CheckCircle: CheckCircle,
  Sparkles: Users,
};

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen bg-lightBg pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 lg:pb-20 overflow-hidden">
      {/* Subtle Warm Glow in the Center */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[800px] h-[380px] bg-brandOrange/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Hello Badge */}
        <div className="flex justify-center mb-4 sm:mb-6">
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
        <div className="text-center max-w-5xl mx-auto mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-black tracking-tight text-[#080808] leading-[1.06]">
            I'm <span className="text-brandOrange">Hidayathullah</span>,
            <br />
            <span className="text-[#080808]">Software Developer</span>
          </h1>
        </div>

        {/* 3-Column Layout Matching Master Reference Design */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* LEFT COLUMN: Narrative & Action CTAs (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-6 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-3 max-w-sm mx-auto lg:mx-0">
              <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
                I build fast, modern, and user-friendly{' '}
                <span className="text-brandOrange font-bold">websites and applications</span>{' '}
                that solve real-world problems.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Let's turn your ideas into powerful digital solutions.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#projects"
                className="px-7 py-3.5 rounded-full bg-brandOrange hover:bg-brandOrange-600 text-white text-sm font-bold shadow-[0_8px_25px_rgba(255,106,0,0.38)] hover:shadow-[0_12px_32px_rgba(255,106,0,0.58)] hover:scale-[1.02] transition-all flex items-center space-x-2"
              >
                <span>View My Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="px-7 py-3.5 rounded-full bg-[#0E0E0E] hover:bg-black text-white text-sm font-bold border border-white/10 shadow-md hover:scale-[1.02] transition-all flex items-center space-x-2"
              >
                <span>Hire Me</span>
              </a>
            </div>
          </div>

          {/* CENTER COLUMN: Real Photo Cutout Overlapping Orange Circle Arch (4 cols) */}
          <div className="lg:col-span-4 flex justify-center order-1 lg:order-2">
            <div className="relative w-[300px] sm:w-[360px] md:w-[410px] h-[400px] sm:h-[480px] md:h-[520px] flex items-end justify-center">
              
              {/* Solid Orange Circle Arch Backdrop */}
              <div className="absolute top-24 sm:top-20 w-[280px] sm:w-[340px] md:w-[370px] h-[280px] sm:h-[340px] md:h-[370px] rounded-full bg-brandOrange shadow-[0_25px_60px_rgba(255,106,0,0.42)] z-0" />

              {/* Transparent Portrait Cutout */}
              <div className="relative z-10 w-full h-full flex items-end justify-center pointer-events-none">
                <img
                  src={profileImg}
                  alt="Hidayathullah - Software Developer"
                  className="w-auto h-full max-h-[510px] object-contain object-bottom drop-shadow-[0_20px_45px_rgba(0,0,0,0.3)]"
                  loading="eager"
                />
              </div>

              {/* Bottom Arch Floating Action Pill Overlay */}
              <div className="absolute -bottom-3 z-20 flex items-center bg-[#0D0D0D] border border-white/15 text-white rounded-full p-1 shadow-2xl pointer-events-auto">
                <a
                  href="#projects"
                  className="px-4 py-2 rounded-full bg-brandOrange text-white text-xs font-bold flex items-center space-x-1 hover:bg-brandOrange-600 transition-colors shadow-sm"
                >
                  <span>View My Work</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href="#contact"
                  className="px-4 py-2 rounded-full text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: 4 Compact Information Cards (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-3.5 order-3">
            {heroCards.map((card) => {
              const IconComp = iconMap[card.icon] || Rocket;
              return (
                <div
                  key={card.id}
                  className="p-4 sm:p-4.5 rounded-2xl bg-white border border-slate-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:border-brandOrange/40 hover:shadow-[0_8px_25px_rgba(255,106,0,0.12)] hover:-translate-y-0.5 transition-all flex items-center space-x-3.5 group"
                >
                  {/* Icon with Soft Orange Badge */}
                  <div className="w-10 h-10 rounded-xl bg-brandOrange/10 border border-brandOrange/20 flex items-center justify-center flex-shrink-0 text-brandOrange group-hover:bg-brandOrange group-hover:text-white transition-colors shadow-sm">
                    <IconComp className="w-5 h-5" />
                  </div>

                  {/* Card Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-[#080808] group-hover:text-brandOrange transition-colors truncate">
                      {card.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-tight mt-0.5">
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
