import React from 'react';
import { Globe, Layout, Smartphone, Cpu, Server, Palette } from 'lucide-react';
import { services } from '../data/portfolioData';

const iconMap = {
  Globe: Globe,
  Layout: Layout,
  Smartphone: Smartphone,
  Cpu: Cpu,
  Server: Server,
  Palette: Palette,
};

export function Services() {
  return (
    <section id="services" className="relative bg-darkBg text-white pt-20 pb-24 px-4 sm:px-6 lg:px-8 rounded-t-[36px] sm:rounded-t-[50px] shadow-[0_-15px_40px_rgba(0,0,0,0.4)]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center space-x-2 text-brandOrange font-mono text-sm tracking-wider uppercase mb-2">
              <span className="w-8 h-0.5 bg-brandOrange" />
              <span>Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              What I Build & Deliver
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-slate-400 leading-relaxed">
            I provide end-to-end solutions — from designing intuitive interfaces to developing powerful, scalable web, mobile, and AI applications.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComp = iconMap[service.icon] || Globe;
            return (
              <div
                key={service.id}
                className="group relative p-6 sm:p-7 rounded-3xl bg-[#121212] border border-white/5 hover:border-brandOrange/40 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-[0_15px_35px_rgba(255,106,0,0.15)] flex flex-col justify-between"
              >
                <div>
                  {/* Service Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-brandOrange/10 border border-brandOrange/20 text-brandOrange flex items-center justify-center mb-6 group-hover:bg-brandOrange group-hover:text-white transition-all duration-300 shadow-sm">
                    <IconComp className="w-6 h-6" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brandOrange transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {service.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300 group-hover:border-brandOrange/30 group-hover:text-brandOrange-100 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
