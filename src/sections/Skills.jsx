import React, { useState } from 'react';
import { Cpu, Search, Terminal } from 'lucide-react';
import { skills, skillsCategories } from '../data/portfolioData';

export function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSkills = skills.filter((skill) => {
    const matchesCategory = activeCategory === 'All' || skill.category === activeCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="relative py-24 bg-[#0b1120] text-white overflow-hidden">
      <div className="aurora-bg" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full glass-card border border-cyan-500/30 text-xs font-mono text-cyan-300 uppercase tracking-widest mb-4">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>TECHNICAL SKILLSET</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white text-gradient mb-4">
            Mastered Technologies & Frameworks
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Filtered interactive skill cards with proficiency metrics and 3D hover effects.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {skillsCategories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                    : 'glass-card border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Real-time Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. React, Python)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-900/80 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
            />
          </div>

        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="glass-card p-5 relative overflow-hidden group hover:shadow-[0_0_25px_rgba(0,240,255,0.15)]"
            >
              {/* Glow Accent */}
              <div className={`absolute -top-12 -right-12 w-24 h-24 rounded-full bg-gradient-to-r ${skill.glowColor} opacity-20 blur-xl group-hover:opacity-40 transition-opacity`} />

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 font-bold group-hover:scale-110 transition-transform">
                    <Terminal className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-white group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-[10px] font-mono text-slate-400 uppercase">
                      {skill.category}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-cyan-400">
                  {skill.level}%
                </span>
              </div>

              {/* Level Progress Bar */}
              <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                <div
                  className={`h-full bg-gradient-to-r ${skill.glowColor} transition-all duration-500`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
