import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Certificates', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'services', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 py-4 transition-all duration-300 pointer-events-none">
      <div className={`w-full max-w-6xl flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full bg-darkBg/95 backdrop-blur-md border border-white/10 text-white shadow-2xl transition-all duration-300 pointer-events-auto ${
        isScrolled ? 'shadow-[0_10px_30px_rgba(0,0,0,0.5)] scale-[0.99]' : ''
      }`}>
        
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center space-x-2.5 group">
          <div className="w-8 h-8 rounded-full bg-brandOrange flex items-center justify-center text-white font-extrabold text-sm shadow-[0_0_12px_rgba(255,106,0,0.5)] group-hover:scale-105 transition-transform">
            H
          </div>
          <span className="font-extrabold tracking-wider text-sm sm:text-base uppercase text-white group-hover:text-brandOrange transition-colors">
            HIDAYATHULLAH
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 text-xs lg:text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-brandOrange text-white font-semibold shadow-[0_2px_10px_rgba(255,106,0,0.4)]'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden lg:flex items-center space-x-2">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-all flex items-center space-x-1.5"
          >
            <FileText className="w-3.5 h-3.5 text-brandOrange" />
            <span>Resume</span>
          </a>
          <a
            href="#contact"
            className="px-4 py-1.5 rounded-full bg-brandOrange hover:bg-brandOrange-600 text-xs font-bold text-white transition-all shadow-[0_0_12px_rgba(255,106,0,0.3)] hover:shadow-[0_0_20px_rgba(255,106,0,0.6)] flex items-center space-x-1"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-4 top-20 bg-darkBg/98 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-white shadow-2xl flex flex-col space-y-3 md:hidden z-50 pointer-events-auto">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeSection === link.href.replace('#', '')
                  ? 'bg-brandOrange text-white'
                  : 'text-slate-300 hover:bg-white/10'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-center flex items-center justify-center space-x-2"
            >
              <FileText className="w-4 h-4 text-brandOrange" />
              <span>Download Resume</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-xl bg-brandOrange text-xs font-bold text-center text-white"
            >
              Let's Connect
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
