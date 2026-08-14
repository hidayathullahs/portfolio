import React, { useState } from 'react';
import { Award, ExternalLink, Eye, Calendar } from 'lucide-react';
import { certificates } from '../data/portfolioData';
import { CertificateModal } from '../components/CertificateModal';

export function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="relative py-24 bg-[#0b1120] text-white overflow-hidden">
      <div className="aurora-bg" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full glass-card border border-cyan-500/30 text-xs font-mono text-cyan-300 uppercase tracking-widest mb-4">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>CREDENTIALS & ACCREDITATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white text-gradient mb-4">
            Certificates & Achievements
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Verified industry certifications from AWS, Meta, DeepLearning.AI, and Three.js Journey.
          </p>
        </div>

        {/* Certificate Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="glass-card flex flex-col overflow-hidden group hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] transition-all cursor-pointer"
              onClick={() => setSelectedCert(cert)}
            >
              {/* Image Frame */}
              <div className="relative h-44 w-full overflow-hidden bg-slate-950">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-transparent to-transparent opacity-90" />
                
                <span className="absolute top-3 left-3 px-2.5 py-0.5 text-[10px] font-mono font-bold rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40 uppercase">
                  {cert.badge}
                </span>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 backdrop-blur-xs transition-opacity">
                  <span className="px-4 py-2 rounded-xl bg-purple-600 text-white font-semibold text-xs flex items-center space-x-1.5 shadow-lg">
                    <Eye className="w-4 h-4" />
                    <span>View Lightbox</span>
                  </span>
                </div>
              </div>

              {/* Info Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-sm text-white mb-1 group-hover:text-purple-300 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-cyan-400 font-mono mb-3">{cert.issuer}</p>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-3 border-t border-slate-800">
                  <span className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1 text-slate-500" />
                    {cert.date}
                  </span>
                  <span className="text-purple-400 hover:underline flex items-center">
                    Verify <ExternalLink className="w-3 h-3 ml-1" />
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Certificate Modal Lightbox */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
}
