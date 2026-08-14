import React from 'react';
import { X, ExternalLink, Award, Calendar, ShieldCheck } from 'lucide-react';

export function CertificateModal({ certificate, onClose }) {
  if (!certificate) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-[#0b1120] border border-purple-500/40 rounded-2xl shadow-2xl overflow-hidden text-white glass-panel">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-900/80 text-slate-300 hover:text-white hover:bg-purple-500/20 border border-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Certificate Image Frame */}
        <div className="relative h-64 w-full overflow-hidden bg-slate-950">
          <img
            src={certificate.image}
            alt={certificate.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-transparent to-transparent" />
        </div>

        {/* Certificate Details */}
        <div className="p-6 space-y-4">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-5 h-5 text-purple-400" />
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40 uppercase">
              {certificate.badge}
            </span>
          </div>

          <h2 className="text-xl md:text-2xl font-bold text-white text-glow-purple">
            {certificate.title}
          </h2>

          <div className="flex items-center justify-between text-sm text-slate-400 font-mono pt-2 border-t border-slate-800">
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4 text-cyan-400" />
              <span>Issuer: {certificate.issuer}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-slate-500" />
              <span>Issued: {certificate.date}</span>
            </div>
          </div>

          <div className="pt-4">
            <a
              href={certificate.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all"
            >
              <span>Verify Credential Online</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
