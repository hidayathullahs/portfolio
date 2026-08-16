import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

export function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-y-auto border border-slate-200 z-10 flex flex-col">
        
        {/* Sticky Header with Close Button */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur-md border-b border-slate-200">
          <div>
            <span className="text-xs font-mono font-bold text-brandOrange uppercase tracking-wider">
              {project.categoryLabel || project.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#080808]">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Project Image Banner */}
          <div className="relative w-full aspect-video sm:aspect-[21/9] rounded-2xl overflow-hidden bg-slate-900">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-darkBg/90 backdrop-blur-md text-white text-xs font-mono font-semibold border border-white/10">
              {project.status || 'Active Project'}
            </div>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h4 className="text-sm font-bold text-[#080808] uppercase tracking-wider mb-2 flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                <span>The Challenge</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {project.problem || project.shortDescription}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-brandOrange/5 border border-brandOrange/20">
              <h4 className="text-sm font-bold text-brandOrange uppercase tracking-wider mb-2 flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-brandOrange" />
                <span>The Solution</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {project.solution || project.shortDescription}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-base font-bold text-[#080808] mb-4">
              Key Features & Architectural Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features?.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700"
                >
                  <CheckCircle2 className="w-4 h-4 text-brandOrange flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-base font-bold text-[#080808] mb-3">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack?.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs font-mono font-medium text-slate-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Stats Bar */}
          {project.stats && (
            <div className="p-4 rounded-2xl bg-darkBg text-white flex flex-wrap items-center justify-around gap-4 text-center">
              {Object.entries(project.stats).map(([key, val]) => (
                <div key={key}>
                  <div className="text-xs text-slate-400 uppercase font-mono">{key}</div>
                  <div className="text-sm sm:text-base font-bold text-brandOrange">{val}</div>
                </div>
              ))}
            </div>
          )}

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-200">
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-brandOrange hover:bg-brandOrange-600 text-white text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center space-x-2"
              >
                <span>Live Application</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-darkBg hover:bg-slate-900 text-white text-xs font-bold border border-darkBorder transition-all flex items-center space-x-2"
              >
                <FaGithub className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold ml-auto"
            >
              Close
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
