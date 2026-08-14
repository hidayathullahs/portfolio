import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Folder, Code, User, Mail, Award, Cpu, FileText, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('');

  const items = [
    { label: 'Go to Hero Section', icon: Code, action: () => scrollTo('hero'), category: 'Navigation' },
    { label: 'Go to About Me', icon: User, action: () => scrollTo('about'), category: 'Navigation' },
    { label: 'Explore Skills', icon: Cpu, action: () => scrollTo('skills'), category: 'Navigation' },
    { label: 'View Work Experience', icon: Folder, action: () => scrollTo('experience'), category: 'Navigation' },
    { label: 'Featured Projects', icon: Folder, action: () => scrollTo('projects'), category: 'Navigation' },
    { label: 'Development Services', icon: Code, action: () => scrollTo('services'), category: 'Navigation' },
    { label: 'Certificates & Credentials', icon: Award, action: () => scrollTo('certifications'), category: 'Navigation' },
    { label: 'Contact & Hire Me', icon: Mail, action: () => scrollTo('contact'), category: 'Navigation' },
    { label: 'Download Resume PDF', icon: FileText, action: () => window.open(personalInfo.resumeUrl, '_blank'), category: 'Actions' },
  ];

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    onClose();
  };

  const filteredItems = items.filter(item =>
    item.label.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else window.dispatchEvent(new CustomEvent('open-command-palette'));
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
          <motion.div
            className="w-full max-w-xl bg-[#0b1120] border border-slate-700/60 rounded-2xl shadow-2xl overflow-hidden text-white"
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {/* Search Input Bar */}
            <div className="flex items-center px-4 py-3 border-b border-slate-800 bg-[#131b2e]/50">
              <Search className="w-5 h-5 text-cyan-400 mr-3" />
              <input
                type="text"
                placeholder="Type a command or search section (e.g. Projects, Skills, Contact)..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
                className="w-full bg-transparent text-sm text-slate-200 focus:outline-none placeholder-slate-500"
              />
              <button
                onClick={onClose}
                className="p-1 text-slate-400 hover:text-white rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Command Results */}
            <div className="max-h-80 overflow-y-auto p-2">
              {filteredItems.length > 0 ? (
                filteredItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={idx}
                      onClick={item.action}
                      className="w-full flex items-center justify-between px-4 py-3 hover:bg-cyan-500/10 hover:border-cyan-500/30 rounded-xl transition-all group text-left border border-transparent mb-1"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-lg bg-slate-800/80 group-hover:bg-cyan-500/20 text-cyan-400 transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-medium text-slate-200 group-hover:text-cyan-300">
                          {item.label}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                          {item.category}
                        </span>
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                      </div>
                    </button>
                  );
                })
              ) : (
                <div className="p-8 text-center text-slate-500 text-sm">
                  No matching commands found for "{query}"
                </div>
              )}
            </div>

            {/* Footer tips */}
            <div className="px-4 py-2 bg-[#050816] border-t border-slate-800 text-[11px] font-mono text-slate-500 flex justify-between items-center">
              <span>Use <kbd className="px-1.5 py-0.5 bg-slate-800 rounded text-slate-300">↑</kbd> <kbd className="px-1.5 py-0.5 bg-slate-800 rounded text-slate-300">↓</kbd> to navigate</span>
              <span><kbd className="px-1.5 py-0.5 bg-slate-800 rounded text-slate-300">ESC</kbd> to close</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
