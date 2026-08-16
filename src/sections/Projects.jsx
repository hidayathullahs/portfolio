import React, { useState } from 'react';
import { ExternalLink, Sparkles, Eye } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { projects } from '../data/portfolioData';
import { ProjectModal } from '../components/ProjectModal';

const categories = ['All', 'Web', 'Mobile', 'AI', 'Enterprise', 'Game'];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => {
        if (activeFilter === 'Web') return p.category === 'Web' || p.techStack.includes('React') || p.techStack.includes('HTML');
        if (activeFilter === 'Mobile') return p.category === 'Mobile' || p.techStack.includes('Flutter');
        if (activeFilter === 'AI') return p.category === 'AI';
        if (activeFilter === 'Enterprise') return p.category === 'Enterprise';
        if (activeFilter === 'Game') return p.category === 'Game';
        return true;
      });

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-lightBg relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-brandOrange/10 text-brandOrange text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#080808] tracking-tight mb-4">
            Things I've Built
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Real projects exploring software engineering, full-stack systems, mobile development, enterprise backends, and AI applications.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeFilter === cat
                  ? 'bg-brandOrange text-white shadow-[0_4px_15px_rgba(255,106,0,0.35)]'
                  : 'bg-white border border-slate-200 text-slate-700 hover:border-brandOrange hover:text-brandOrange'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:border-brandOrange/40 hover:shadow-[0_12px_35px_rgba(255,106,0,0.12)] hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              {/* Project Card Top: Image */}
              <div>
                <div className="relative w-full aspect-video overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-darkBg/90 backdrop-blur-md text-white text-[10px] font-mono font-bold uppercase tracking-wider border border-white/10">
                    {project.category}
                  </div>
                  {project.featured && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-brandOrange text-white text-[10px] font-bold uppercase tracking-wider flex items-center space-x-1 shadow-sm">
                      <Sparkles className="w-3 h-3" />
                      <span>Featured</span>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#080808] mb-2 group-hover:text-brandOrange transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-slate-100 text-[10px] font-mono text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-0.5 rounded-md bg-slate-100 text-[10px] font-mono text-slate-500">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-100 mt-2">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-bold text-brandOrange hover:text-brandOrange-700 flex items-center space-x-1 group/btn"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Case Study</span>
                </button>

                <div className="flex items-center space-x-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                      title="GitHub Repository"
                      aria-label="View source code on GitHub"
                    >
                      <FaGithub className="w-4 h-4" />
                    </a>
                  )}

                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-brandOrange/10 hover:bg-brandOrange text-brandOrange hover:text-white transition-colors"
                      title="Live Demo"
                      aria-label="View live application"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
