import React from 'react';
import { User, CheckCircle, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export function About() {
  return (
    <section id="about" className="relative py-24 bg-[#050816] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full glass-card border border-purple-500/30 text-xs font-mono text-purple-300 uppercase tracking-widest mb-4">
            <User className="w-3.5 h-3.5 text-purple-400" />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white text-gradient mb-4">
            Crafting Digital Excellence Through Code & Creativity
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Glass Card Profile */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl p-1 bg-gradient-to-tr from-cyan-500 via-purple-600 to-pink-500 shadow-[0_0_40px_rgba(0,240,255,0.25)]">
              <div className="bg-[#0b1120] rounded-xl overflow-hidden p-6 glass-card">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"
                  alt="Hidayathullah"
                  className="w-full h-72 object-cover rounded-xl mb-6 shadow-lg border border-white/10"
                />
                <h3 className="text-xl font-bold text-white mb-1">Hidayathullah</h3>
                <p className="text-xs font-mono text-cyan-400 mb-4">{personalInfo.title}</p>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {personalInfo.about}
                </p>
                <div className="flex items-center space-x-2 text-xs font-mono text-slate-400 pt-4 border-t border-slate-800">
                  <Terminal className="w-4 h-4 text-purple-400" />
                  <span>Based in {personalInfo.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Stats */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4 text-slate-300 text-base leading-relaxed">
              <p>
                As a passionate Software Engineer and 3D Web Architect, I specialize in engineering robust web applications, interactive 3D WebGL experiences, and scalable cloud microservices.
              </p>
              <p>
                My philosophy centers on creating software that is not only visually stunning and responsive, but also architecturally sound, accessible, and optimized for sub-second page loads.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Frontend & 3D WebGL", desc: "React 19, Three.js, GSAP & Framer Motion for Awwwards-level UI." },
                { title: "Backend Microservices", desc: "High-throughput APIs built with Node.js, Python, PostgreSQL & Redis." },
                { title: "Artificial Intelligence", desc: "LLM integrations, OpenAI RAG pipelines, and autonomous agent workflows." },
                { title: "Cloud & DevOps", desc: "Docker, Kubernetes, AWS S3/EC2, and GitHub Actions CI/CD pipelines." }
              ].map((pillar, idx) => (
                <div key={idx} className="p-4 rounded-xl glass-card border border-slate-800 hover:border-cyan-500/40 transition-colors">
                  <div className="flex items-center space-x-2 mb-1">
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                    <h4 className="font-semibold text-sm text-white">{pillar.title}</h4>
                  </div>
                  <p className="text-xs text-slate-400 pl-6">{pillar.desc}</p>
                </div>
              ))}
            </div>

            {/* Statistical Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-800/80">
              {personalInfo.stats.map((stat, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#0b1120]/80 border border-slate-800 text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold text-gradient mb-1">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-xs font-mono text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
