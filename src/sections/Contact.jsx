import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy } from 'lucide-react';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate real-time email processing feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger Confetti Explosion
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00f0ff', '#8b5cf6', '#ec4899']
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#050816] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full glass-card border border-purple-500/30 text-xs font-mono text-purple-300 uppercase tracking-widest mb-4">
            <Mail className="w-3.5 h-3.5 text-purple-400" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white text-gradient mb-4">
            Get In Touch & Hire Me
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Have a project in mind, need technical consulting, or looking to hire? Send me a message!
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 space-y-6">
              <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-mono text-slate-400">Email Address</div>
                  <div className="text-sm font-semibold text-white">{personalInfo.email}</div>
                </div>
                <button
                  onClick={copyToClipboard}
                  className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-400 hover:text-cyan-400 transition-colors"
                  title="Copy email to clipboard"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>

              {copiedEmail && (
                <div className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1.5 rounded-lg border border-cyan-500/30 text-center">
                  ✓ Copied email to clipboard!
                </div>
              )}

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Phone / WhatsApp</div>
                  <div className="text-sm font-semibold text-white">{personalInfo.phone}</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Location</div>
                  <div className="text-sm font-semibold text-white">{personalInfo.location}</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-6 flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-300">Social Profiles</span>
              <div className="flex space-x-3">
                <a
                  href="https://github.com/hidayathullah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-cyan-500 text-slate-300 hover:text-white border border-slate-800 transition-all"
                >
                  <FaGithub className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com/in/hidayathullah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-slate-300 hover:text-white border border-slate-800 transition-all"
                >
                  <FaLinkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com/hidayathullah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-cyan-400 text-slate-300 hover:text-white border border-slate-800 transition-all"
                >
                  <FaXTwitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 relative">
              <h3 className="text-xl font-bold text-white mb-6">Send Me a Message</h3>

              {submitted ? (
                <div className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/20 text-cyan-400 mx-auto flex items-center justify-center shadow-[0_0_20px_#00f0ff]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-sm text-slate-300">
                    Thank you for reaching out. I will review your message and reply back within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-slate-800 text-white font-semibold text-xs hover:bg-slate-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 glass-input text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">Your Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 glass-input text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Subject</label>
                    <input
                      type="text"
                      placeholder="Project Inquiry / Job Opportunity"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 glass-input text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Message *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell me about your project goals, timelines, or role details..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 glass-input text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_40px_rgba(0,240,255,0.7)] transition-all flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">Sending Message...</span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
