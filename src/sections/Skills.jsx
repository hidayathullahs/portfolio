import React, { useState } from 'react';
import { 
  Code2, 
  Layers, 
  Server, 
  Smartphone, 
  Database, 
  Cloud, 
  Cpu, 
  Wrench,
  Check
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const categories = [
  { key: 'languages', label: 'Languages', icon: Code2 },
  { key: 'frontend', label: 'Frontend', icon: Layers },
  { key: 'backend', label: 'Backend', icon: Server },
  { key: 'mobile', label: 'Mobile', icon: Smartphone },
  { key: 'databases', label: 'Databases', icon: Database },
  { key: 'cloud', label: 'Cloud & DevOps', icon: Cloud },
  { key: 'ai', label: 'AI & Automation', icon: Cpu },
  { key: 'tools', label: 'Tools & Workflow', icon: Wrench },
];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const displayedCategories = activeCategory === 'all' 
    ? categories 
    : categories.filter(c => c.key === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-brandOrange/10 text-brandOrange text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <span>Technical Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#080808] tracking-tight mb-4">
            Technologies & Tools I Use
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Hands-on technical competencies built through real-world projects, enterprise backends, mobile apps, and full-stack development.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              activeCategory === 'all'
                ? 'bg-brandOrange text-white shadow-[0_4px_12px_rgba(255,106,0,0.35)]'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            All Skills
          </button>
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center space-x-1.5 ${
                activeCategory === cat.key
                  ? 'bg-brandOrange text-white shadow-[0_4px_12px_rgba(255,106,0,0.35)]'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedCategories.map((cat) => {
            const items = skillsData[cat.key] || [];
            const CatIcon = cat.icon;
            return (
              <div
                key={cat.key}
                className="p-6 rounded-3xl bg-lightBg border border-slate-200 shadow-sm hover:border-brandOrange/40 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-5 pb-3 border-b border-slate-200">
                    <div className="w-9 h-9 rounded-xl bg-brandOrange/10 text-brandOrange flex items-center justify-center">
                      <CatIcon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#080808]">
                      {cat.label}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {items.map((skill, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200/70 text-xs font-medium text-slate-800 hover:border-brandOrange/30 transition-colors"
                      >
                        <div className="flex items-center space-x-2">
                          <Check className="w-3.5 h-3.5 text-brandOrange" />
                          <span className="font-semibold text-slate-900">{skill.name}</span>
                        </div>
                        <span className="px-2 py-0.5 rounded-md bg-slate-100 text-[10px] font-mono text-slate-600">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
