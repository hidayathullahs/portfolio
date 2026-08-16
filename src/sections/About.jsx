import React from 'react';
import { GraduationCap, Code, Rocket, CheckCircle2 } from 'lucide-react';
import { personalInfo, journeyTimeline } from '../data/portfolioData';

export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-lightBg relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-brandOrange/10 text-brandOrange text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#080808] tracking-tight mb-4">
            More Than Just Code.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            I'm a Computer Science & Engineering graduate focused on building practical software products that combine clean interfaces, robust engineering, and useful technology.
          </p>
        </div>

        {/* Narrative & Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          
          {/* Left Bio Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-[#080808]">
                Crafting Reliable Digital Experiences
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {personalInfo.aboutParagraph1}
              </p>
              <p className="text-slate-600 leading-relaxed">
                {personalInfo.aboutParagraph2}
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-medium text-slate-700">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brandOrange flex-shrink-0" />
                  <span>Full-Stack Web Development (React / Spring Boot)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brandOrange flex-shrink-0" />
                  <span>Cross-Platform Mobile Apps (Flutter / Firebase)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brandOrange flex-shrink-0" />
                  <span>AI Assistants, Voice & RAG Integration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brandOrange flex-shrink-0" />
                  <span>Normalized Databases & REST Architecture</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Stats Column (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {personalInfo.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:border-brandOrange/40 hover:shadow-[0_8px_25px_rgba(255,106,0,0.1)] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-brandOrange mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold text-[#080808] mb-1">
                    {stat.label}
                  </div>
                </div>
                <div className="text-xs text-slate-500 font-mono">
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Visual Journey Timeline */}
        <div className="pt-10 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#080808]">
              Learning & Building Journey
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              A transparent look at my education, technical milestones, and hands-on growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {journeyTimeline.map((item, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:border-brandOrange/40 hover:-translate-y-1 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-brandOrange/10 text-brandOrange font-mono text-xs font-bold mb-4 group-hover:bg-brandOrange group-hover:text-white transition-colors">
                    {item.year}
                  </div>
                  <h4 className="text-base font-bold text-[#080808] mb-2 group-hover:text-brandOrange transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
