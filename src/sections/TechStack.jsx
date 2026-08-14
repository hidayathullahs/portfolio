import React from 'react';
import { Terminal } from 'lucide-react';

export function TechStack() {
  const techLogos = [
    { name: "React 19", color: "text-cyan-400" },
    { name: "Three.js", color: "text-purple-400" },
    { name: "TypeScript", color: "text-blue-400" },
    { name: "Next.js", color: "text-white" },
    { name: "TailwindCSS", color: "text-teal-400" },
    { name: "GSAP Motion", color: "text-amber-400" },
    { name: "Node.js", color: "text-green-400" },
    { name: "Python", color: "text-yellow-400" },
    { name: "PostgreSQL", color: "text-indigo-400" },
    { name: "AWS Cloud", color: "text-orange-400" },
    { name: "Docker", color: "text-cyan-300" },
    { name: "OpenAI RAG", color: "text-pink-400" },
  ];

  return (
    <section className="py-16 bg-[#050816] text-white border-y border-slate-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
          // POWERED BY MODERN ENTERPRISE TECH STACK
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {techLogos.map((tech, idx) => (
            <div
              key={idx}
              className="inline-flex items-center space-x-3 px-6 py-3 rounded-xl glass-card border border-slate-800 text-slate-300 hover:border-cyan-500/40 hover:text-white transition-all"
            >
              <Terminal className={`w-4 h-4 ${tech.color}`} />
              <span className="font-mono text-sm font-semibold">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
