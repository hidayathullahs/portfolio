import React from 'react';
import { Briefcase, GraduationCap, Code, Rocket, CheckCircle2 } from 'lucide-react';
import { journeyTimeline } from '../data/portfolioData';

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-brandOrange/10 text-brandOrange text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#080808] tracking-tight mb-3">
            Learning & Building Journey
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            A track record of engineering education, real-world development, and continuous self-improvement.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-slate-200 ml-4 sm:ml-8 space-y-10">
          {journeyTimeline.map((item, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-8 group">
              {/* Timeline Bullet */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-brandOrange group-hover:scale-125 group-hover:bg-brandOrange transition-all shadow-sm" />

              {/* Card Container */}
              <div className="p-6 rounded-2xl bg-lightBg border border-slate-200/80 shadow-sm hover:border-brandOrange/40 hover:shadow-md transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-[#080808] group-hover:text-brandOrange transition-colors">
                    {item.title}
                  </h3>
                  <span className="px-3 py-1 rounded-full bg-brandOrange/10 text-brandOrange font-mono text-xs font-bold">
                    {item.year}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
