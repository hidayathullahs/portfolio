import React from 'react';
import { Globe, Layout, Smartphone, Rocket } from 'lucide-react';

const mainServices = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Responsive, fast, and modern websites using React, HTML, CSS, JavaScript & more.',
    icon: Globe,
  },
  {
    id: 'web-apps',
    title: 'Web Applications',
    description: 'Scalable and secure web applications with powerful backend solutions.',
    icon: Layout,
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Applications',
    description: 'Cross-platform mobile apps using Flutter for Android and iOS.',
    icon: Smartphone,
  },
  {
    id: 'other-solutions',
    title: 'Other Solutions',
    description: 'API Integration, Database Design, Cloud Deployment and more.',
    icon: Rocket,
  },
];

export function Services() {
  return (
    <section id="services" className="relative bg-[#080808] text-white pt-20 pb-24 px-4 sm:px-6 lg:px-8 rounded-t-[40px] sm:rounded-t-[60px] shadow-[0_-15px_40px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header (Left Title, Right Subtext) */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-14 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center space-x-2 text-brandOrange font-mono text-sm tracking-wider uppercase mb-2">
              <span className="w-6 h-0.5 bg-brandOrange" />
              <span>Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Services
            </h2>
          </div>
          <p className="max-w-xl text-sm sm:text-base text-slate-400 leading-relaxed">
            I provide end-to-end solutions — from designing beautiful interfaces to developing powerful web & mobile applications.
          </p>
        </div>

        {/* 4 Cards Grid Matching Reference Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mainServices.map((service) => {
            const IconComp = service.icon;
            return (
              <div
                key={service.id}
                className="group relative p-6 sm:p-7 rounded-3xl bg-[#111111] border border-white/10 hover:border-brandOrange/50 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-[0_15px_35px_rgba(255,106,0,0.15)] flex flex-col justify-between"
              >
                <div>
                  {/* Service Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-brandOrange/10 border border-brandOrange/20 text-brandOrange flex items-center justify-center mb-6 group-hover:bg-brandOrange group-hover:text-white transition-all duration-300 shadow-sm">
                    <IconComp className="w-6 h-6" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 group-hover:text-brandOrange transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
