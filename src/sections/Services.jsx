import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Box, Smartphone, Sparkles, Server, Palette, Cloud, Zap, ArrowRight } from 'lucide-react';
import { services } from '../data/portfolioData';

export function Services() {
  const iconMap = {
    Globe,
    Box,
    Smartphone,
    Sparkles,
    Server,
    Palette,
    Cloud,
    Zap,
  };

  return (
    <section id="services" className="relative py-24 bg-[#050816] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full glass-card border border-purple-500/30 text-xs font-mono text-purple-300 uppercase tracking-widest mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Zap className="w-3.5 h-3.5 text-purple-400" />
            <span>WHAT I OFFER</span>
          </motion.div>
          <motion.h2
            className="text-3xl sm:text-5xl font-extrabold text-white text-gradient mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Specialized Engineering Services
          </motion.h2>
          <p className="text-slate-400 text-sm sm:text-base">
            End-to-end technical solutions tailored for startups, enterprise clients, and scale-ups.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Globe;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-6 flex flex-col justify-between group hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] transition-all"
              >
                <div>
                  {/* Icon Frame */}
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-cyan-500 p-[1px] mb-6 shadow-md group-hover:scale-110 transition-transform">
                    <div className="w-full h-full bg-[#0b1120] rounded-[15px] flex items-center justify-center text-cyan-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-900 text-slate-400 border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
