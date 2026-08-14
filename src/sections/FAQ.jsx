import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { faqs } from '../data/portfolioData';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="relative py-24 bg-[#0b1120] text-white overflow-hidden">
      <div className="aurora-bg" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full glass-card border border-cyan-500/30 text-xs font-mono text-cyan-300 uppercase tracking-widest mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>COMMON INQUIRIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white text-gradient mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Answers to common questions regarding technical capabilities, project delivery, and hiring details.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-xl overflow-hidden border border-slate-800 hover:border-cyan-500/30 transition-all"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-semibold text-slate-200 hover:text-cyan-300 transition-colors"
                >
                  <span className="text-base sm:text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-cyan-400 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
