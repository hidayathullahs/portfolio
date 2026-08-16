import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { personalInfo } from '../data/portfolioData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-darkBg text-white pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10 items-start">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-full bg-brandOrange flex items-center justify-center text-white font-extrabold text-sm shadow-[0_0_12px_rgba(255,106,0,0.5)]">
                H
              </div>
              <span className="font-extrabold tracking-wider text-base uppercase text-white">
                HIDAYATHULLAH
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Software Developer specializing in modern web development, scalable full-stack applications, Flutter mobile apps, and AI integrations.
            </p>
          </div>

          {/* Quick Links (4 cols) */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 text-xs font-semibold">
            <div className="space-y-2.5">
              <div className="font-mono text-slate-500 uppercase tracking-wider mb-2">Navigation</div>
              <div><a href="#hero" className="text-slate-300 hover:text-brandOrange transition-colors">Home</a></div>
              <div><a href="#about" className="text-slate-300 hover:text-brandOrange transition-colors">About</a></div>
              <div><a href="#skills" className="text-slate-300 hover:text-brandOrange transition-colors">Skills</a></div>
              <div><a href="#projects" className="text-slate-300 hover:text-brandOrange transition-colors">Projects</a></div>
            </div>
            <div className="space-y-2.5">
              <div className="font-mono text-slate-500 uppercase tracking-wider mb-2">More</div>
              <div><a href="#services" className="text-slate-300 hover:text-brandOrange transition-colors">Services</a></div>
              <div><a href="#experience" className="text-slate-300 hover:text-brandOrange transition-colors">Journey</a></div>
              <div><a href="#certifications" className="text-slate-300 hover:text-brandOrange transition-colors">Certificates</a></div>
              <div><a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-brandOrange transition-colors">Resume</a></div>
            </div>
          </div>

          {/* Socials & Back to Top (3 cols) */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end space-y-4">
            <div className="flex items-center space-x-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-brandOrange text-white flex items-center justify-center transition-colors"
                aria-label="GitHub Profile"
              >
                <FaGithub className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#0077b5] text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-brandOrange text-white flex items-center justify-center transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 flex items-center space-x-1.5 transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 text-brandOrange" />
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-3">
          <div>
            © {new Date().getFullYear()} Hidayathullah. All rights reserved.
          </div>
          <div>
            Built with React 18, Vite & Tailwind CSS.
          </div>
        </div>

      </div>
    </footer>
  );
}
