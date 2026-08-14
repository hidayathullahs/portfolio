import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Cpu, Zap, Star } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

export function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          className="relative w-full max-w-3xl my-8 bg-[#0b1120] border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden text-white glass-panel"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ duration: 0.3 }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-900/80 text-slate-300 hover:text-white hover:bg-cyan-500/20 border border-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Banner Image */}
          <div className="relative h-64 md:h-80 w-full overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-[#0b1120]/60 to-transparent" />
            <div className="absolute bottom-4 left-6 right-6">
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 uppercase tracking-wider mb-2 inline-block">
                {project.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white text-glow-cyan">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Content Body */}
          <div className="p-6 space-y-6">
            <p className="text-slate-300 text-base leading-relaxed">
              {project.description}
            </p>

            {/* Performance & Metrics Grid */}
            {project.stats && (
              <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                {Object.entries(project.stats).map(([key, val], idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-xs uppercase font-mono text-slate-400 mb-1">{key}</div>
                    <div className="text-lg font-bold text-cyan-400">{val}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Key Features */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-400 mb-3 flex items-center">
                <Zap className="w-4 h-4 mr-2" /> Key Features & Architecture
              </h3>
              <ul className="space-y-2">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2.5 mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Badges */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-purple-400 mb-3 flex items-center">
                <Cpu className="w-4 h-4 mr-2" /> Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs rounded-lg bg-purple-500/10 text-purple-300 border border-purple-500/30 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-800">
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[140px] flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[140px] flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-white border border-slate-700 font-medium transition-all"
              >
                <FaGithub className="w-4 h-4" />
                <span>GitHub Code</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
