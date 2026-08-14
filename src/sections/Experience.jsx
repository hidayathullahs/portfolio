import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experienceTimeline } from '../data/portfolioData';

export function Experience() {
  return (
    <section id="experience" className="relative py-24 bg-[#050816] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full glass-card border border-purple-500/30 text-xs font-mono text-purple-300 uppercase tracking-widest mb-4">
            <Briefcase className="w-3.5 h-3.5 text-purple-400" />
            <span>CAREER PATH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white text-gradient mb-4">
            Work Experience & Track Record
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Proven history of delivering high-impact engineering products and leading tech initiatives.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Glowing Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 -translate-x-1/2 shadow-[0_0_12px_#00f0ff]" />

          <div className="space-y-12">
            {experienceTimeline.map((item, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row items-start ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot Icon */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#050816] border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_15px_#00f0ff] z-20">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                </div>

                {/* Card Container */}
                <div className="w-full md:w-[calc(50%-2.5rem)] pl-12 md:pl-0">
                  <div className="glass-card p-6 relative hover:border-cyan-500/40 transition-all">
                    
                    {/* Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono text-cyan-400 flex items-center">
                        <Calendar className="w-3.5 h-3.5 mr-1" />
                        {item.period}
                      </span>
                      <span className="text-xs font-mono text-slate-400 flex items-center">
                        <MapPin className="w-3.5 h-3.5 mr-1" />
                        {item.location}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-1">{item.role}</h3>
                    <h4 className="text-sm font-semibold text-purple-400 mb-3">{item.company}</h4>

                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Achievements Bullet List */}
                    <div className="space-y-1.5 mb-4">
                      {item.achievements.map((ach, aIdx) => (
                        <div key={aIdx} className="flex items-start text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mr-2 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800">
                      {item.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 text-[10px] font-mono rounded bg-slate-900 text-slate-300 border border-slate-800"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
