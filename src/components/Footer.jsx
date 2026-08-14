import React, { useState, useEffect } from 'react';
import { ArrowUp, Heart, Clock } from 'lucide-react';

export function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0b1120] text-white border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-800">
          
          {/* Logo & Tagline */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-[2px] shadow-[0_0_15px_rgba(0,240,255,0.4)]">
              <div className="w-full h-full bg-[#050816] rounded-[10px] flex items-center justify-center font-bold text-lg text-cyan-400">
                H
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg text-white">HIDAYATHULLAH</h3>
              <p className="text-xs font-mono text-slate-400">Senior Full-Stack & 3D Web Architect</p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-mono text-slate-400">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
            <a href="#certifications" className="hover:text-cyan-400 transition-colors">Certificates</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 px-4 py-2.5 rounded-xl glass-card border border-slate-700 text-xs font-mono text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-all"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-4 h-4 text-cyan-400" />
          </button>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs font-mono text-slate-400">
          
          <div className="flex items-center space-x-2">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span>Local Time: {time || '10:30 PM'}</span>
          </div>

          <div className="flex items-center space-x-1">
            <span>Designed & Built with</span>
            <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500 mx-1" />
            <span>by Hidayathullah</span>
          </div>

          <div>
            © {new Date().getFullYear()} All rights reserved.
          </div>

        </div>

      </div>
    </footer>
  );
}
