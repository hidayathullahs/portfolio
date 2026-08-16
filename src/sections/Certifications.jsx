import React from 'react';
import { Award, ExternalLink, CheckCircle, ShieldCheck } from 'lucide-react';
import { certifications } from '../data/portfolioData';

export function Certifications() {
  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 bg-lightBg border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-brandOrange/10 text-brandOrange text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#080808] tracking-tight mb-4">
            Certifications & Training
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Professional certifications and structured courses completed in programming, AI engineering, and full-stack development.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:border-brandOrange/40 hover:shadow-[0_10px_30px_rgba(255,106,0,0.1)] hover:-translate-y-1 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Icon & Year */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-brandOrange/10 text-brandOrange flex items-center justify-center group-hover:bg-brandOrange group-hover:text-white transition-colors">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 font-mono text-xs font-semibold text-slate-600">
                    {cert.year}
                  </span>
                </div>

                {/* Title & Issuer */}
                <h3 className="text-base font-bold text-[#080808] mb-1 group-hover:text-brandOrange transition-colors">
                  {cert.title}
                </h3>
                <div className="text-xs font-semibold text-slate-500 mb-3 flex items-center space-x-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-brandOrange" />
                  <span>{cert.issuer}</span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {cert.description}
                </p>
              </div>

              {/* Action Link */}
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pt-3 border-t border-slate-100 text-xs font-bold text-brandOrange hover:text-brandOrange-700 flex items-center space-x-1"
                >
                  <span>Verify Credential</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
