import React from 'react';
import { ArrowUpRight, Rocket, Code2, CheckCircle, Sparkles, FileText } from 'lucide-react';
import { personalInfo, heroCards } from '../data/portfolioData';
import profileImg from '../assets/profile.png';

const iconMap = {
  Rocket: Rocket,
  Code2: Code2,
  CheckCircle: CheckCircle,
  Sparkles: Sparkles,
};

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen bg-lightBg pt-28 pb-16 lg:pt-32 lg:pb-20 overflow-hidden flex items-center justify-center">
      {/* Background Subtle Gradient & Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-brandOrange/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Top Hello Badge */}
        <div className="flex justify-center mb-6">
          <div className="relative inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-semibold text-slate-800">
            <span>Hello! 👋</span>
            {/* Orange Sketch Accent Marks */}
            <div className="absolute -top-3 -right-2 text-brandOrange select-none font-bold text-xs">
              ✦
            </div>
            <div className="absolute -bottom-2 -left-3 text-brandOrange select-none font-bold text-xs">
              ✦
            </div>
          </div>
        </div>

        {/* Main Hero Headline */}
        <div className="text-center max-w-4xl mx-auto mb-10 lg:mb-14">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-[#080808] leading-[1.08]">
            I'm <span className="text-gradient-orange">Hidayathullah</span>,
            <br />
            <span className="text-[#080808]">Software Developer</span>
          </h1>
        </div>

        {/* Main 3-Column Visual Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* LEFT: Supporting Text & CTAs (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-6 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-3 max-w-md mx-auto lg:mx-0">
              <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
                I build fast, modern, and user-friendly{' '}
                <span className="text-brandOrange font-semibold">websites and applications</span>{' '}
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
                className="px-7 py-3.5 rounded-full bg-brandOrange hover:bg-brandOrange-600 text-white text-sm font-bold shadow-[0_6px_20px_rgba(255,106,0,0.35)] hover:shadow-[0_10px_28px_rgba(255,106,0,0.55)] hover:scale-[1.02] transition-all flex items-center space-x-2"
              >
                <span>View My Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="px-7 py-3.5 rounded-full bg-darkBg hover:bg-slate-900 text-white text-sm font-bold border border-darkBorder hover:border-slate-700 shadow-md hover:scale-[1.02] transition-all flex items-center space-x-2"
              >
                <span>Hire Me</span>
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold border border-slate-200 shadow-sm hover:border-brandOrange transition-all flex items-center space-x-1.5"
              >
                <FileText className="w-3.5 h-3.5 text-brandOrange" />
                <span>Resume</span>
              </a>
            </div>
          </div>

          {/* CENTER: Transparent Photo Cutout with Signature Orange Circle Arch (4 cols) */}
          <div className="lg:col-span-4 flex justify-center order-1 lg:order-2">
            <div className="relative w-[300px] sm:w-[360px] md:w-[400px] aspect-[4/5] flex items-end justify-center">
              
              {/* Signature Orange Circle / Arch Backdrop */}
              <div className="absolute top-16 sm:top-14 w-[280px] sm:w-[340px] md:w-[370px] h-[280px] sm:h-[340px] md:h-[370px] rounded-full bg-orange-radial shadow-[0_20px_60px_rgba(255,106,0,0.4)] z-0" />

              {/* Real User Photo (Clean Cutout overlapping the Orange Circle) */}
              <div className="relative z-10 w-full h-full flex items-end justify-center pointer-events-none">
                <img
                  src={profileImg}
                  alt="Hidayathullah - Software Developer"
                  className="w-full h-auto max-h-[480px] object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                  loading="eager"
                />
              </div>

              {/* Bottom Arch Floating Pill Action Buttons */}
              <div className="absolute -bottom-4 z-20 flex items-center bg-darkBg/95 backdrop-blur-md border border-white/10 text-white rounded-full p-1 shadow-xl pointer-events-auto">
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

          {/* RIGHT: 4 Compact Information Cards (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-3.5 order-3">
            {heroCards.map((card) => {
              const IconComp = iconMap[card.icon] || Rocket;
              return (
                <div
                  key={card.id}
                  className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-[0_4px_15px_rgba(0,0,0,0.03)] hover:border-brandOrange/40 hover:shadow-[0_8px_25px_rgba(255,106,0,0.12)] hover:-translate-y-0.5 transition-all flex items-center space-x-3.5 group"
                >
                  {/* Icon with Orange Tint */}
                  <div className="w-10 h-10 rounded-xl bg-brandOrange/10 border border-brandOrange/20 flex items-center justify-center flex-shrink-0 text-brandOrange group-hover:bg-brandOrange group-hover:text-white transition-colors shadow-sm">
                    <IconComp className="w-5 h-5" />
                  </div>

                  {/* Card Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-[#080808] group-hover:text-brandOrange transition-colors truncate">
                      {card.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-tight">
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
