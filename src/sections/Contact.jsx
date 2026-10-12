import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, FileText, ShieldCheck } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
    message: '',
    canMailto: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleMailtoFallback = () => {
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.open(`mailto:hidayathullahbajar@gmail.com?subject=${subject}&body=${body}`, '_blank');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        submitting: false,
        submitted: false,
        error: 'Please fill in all required fields (Name, Email, and Message).',
        message: '',
        canMailto: false,
      });
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null, message: '', canMailto: false });

    try {
      const response = await fetch('https://formsubmit.co/ajax/hidayathullahbajar@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _replyto: formData.email,
          _subject: `New Portfolio Message: ${formData.subject || 'Inquiry from ' + formData.name}`,
          message: formData.message,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const result = await response.json();

      if (response.ok && (result.success === 'true' || result.success === true)) {
        setStatus({
          submitting: false,
          submitted: true,
          error: null,
          message: 'Thank you! Your message has been sent successfully to Hidayathullah. I will respond to you shortly.',
          canMailto: false,
        });
        setFormData({ name: '', email: '', subject: '', message: '' });

        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#FF6A00', '#FFA04D', '#111111', '#FFFFFF'],
          });
        } catch {
          // Confetti fallback
        }
      } else if (result.message && result.message.toLowerCase().includes('activation')) {
        // FormSubmit initial activation required
        setStatus({
          submitting: false,
          submitted: true,
          error: null,
          message: 'Message registered! An activation email was sent to hidayathullahbajar@gmail.com. Once confirmed, all future messages will arrive directly in your inbox.',
          canMailto: true,
        });
      } else {
        throw new Error(result.message || 'Unable to deliver message through the mail server.');
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setStatus({
        submitting: false,
        submitted: false,
        error: 'Network or delivery issue occurred while sending. You can send it directly using your email client.',
        message: '',
        canMailto: true,
      });
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-brandOrange/10 text-brandOrange text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#080808] tracking-tight mb-4">
            Have an Idea?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Let's turn it into something useful. Whether you have a question, a project collaboration, or a developer role, feel free to reach out.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info & Socials (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-lightBg border border-slate-200 space-y-6">
              <h3 className="text-xl font-bold text-[#080808]">
                Contact Information
              </h3>
              
              <div className="space-y-4 text-sm">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center space-x-3.5 p-3 rounded-2xl bg-white border border-slate-200/80 hover:border-brandOrange hover:text-brandOrange transition-all text-slate-700"
                >
                  <div className="w-10 h-10 rounded-xl bg-brandOrange/10 text-brandOrange flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Email</div>
                    <div className="font-semibold text-slate-900">{personalInfo.email}</div>
                  </div>
                </a>

                <div className="flex items-center space-x-3.5 p-3 rounded-2xl bg-white border border-slate-200/80 text-slate-700">
                  <div className="w-10 h-10 rounded-xl bg-brandOrange/10 text-brandOrange flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Location</div>
                    <div className="font-semibold text-slate-900">{personalInfo.location}</div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-200">
                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">
                  Connect on Socials
                </div>
                <div className="flex items-center space-x-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl bg-white border border-slate-200 text-slate-800 hover:bg-darkBg hover:text-white hover:border-darkBg transition-all flex items-center space-x-2 text-xs font-bold"
                  >
                    <FaGithub className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl bg-white border border-slate-200 text-slate-800 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all flex items-center space-x-2 text-xs font-bold"
                  >
                    <FaLinkedinIn className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={personalInfo.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl bg-brandOrange/10 border border-brandOrange/30 text-brandOrange hover:bg-brandOrange hover:text-white transition-all flex items-center space-x-2 text-xs font-bold ml-auto"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Resume</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Form (7 cols) */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-5"
            >
              <h3 className="text-xl font-bold text-[#080808] mb-2">
                Send a Message
              </h3>

              {status.error && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs font-medium text-red-800 space-y-2">
                  <div className="flex items-center space-x-2 font-bold text-red-700">
                    <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <span>{status.error}</span>
                  </div>
                  {status.canMailto && (
                    <div className="pt-1 flex flex-wrap items-center gap-2">
                      <button
                        type="button"
                        onClick={handleMailtoFallback}
                        className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-colors flex items-center space-x-1.5"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Open &amp; Send in Email App</span>
                      </button>
                      <a
                        href="mailto:hidayathullahbajar@gmail.com"
                        className="text-xs text-red-700 underline font-semibold"
                      >
                        hidayathullahbajar@gmail.com
                      </a>
                    </div>
                  )}
                </div>
              )}

              {status.submitted && (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 space-y-2">
                  <div className="flex items-center space-x-2 font-bold text-emerald-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span>{status.message || 'Thank you! Your message has been sent successfully.'}</span>
                  </div>
                  {status.canMailto && (
                    <div className="pt-1 flex flex-wrap items-center gap-2">
                      <button
                        type="button"
                        onClick={handleMailtoFallback}
                        className="px-4 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-colors flex items-center space-x-1.5"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Also Send via Your Email Client</span>
                      </button>
                    </div>
                  )}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Alex Smith"
                    className="w-full px-4 py-3 rounded-xl bg-lightBg border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-brandOrange focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-lightBg border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-brandOrange focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Collaboration / Job Opportunity"
                  className="w-full px-4 py-3 rounded-xl bg-lightBg border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-brandOrange focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Hi Hidayathullah, I'd like to discuss..."
                  className="w-full px-4 py-3 rounded-xl bg-lightBg border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-brandOrange focus:bg-white transition-colors resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-brandOrange hover:bg-brandOrange-600 disabled:opacity-50 text-white text-sm font-bold shadow-[0_6px_20px_rgba(255,106,0,0.35)] hover:shadow-[0_10px_25px_rgba(255,106,0,0.55)] transition-all flex items-center justify-center space-x-2"
                >
                  <span>{status.submitting ? 'Sending...' : 'Send Message'}</span>
                  <Send className="w-4 h-4" />
                </button>

                <div className="flex items-center space-x-1.5 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Direct to hidayathullahbajar@gmail.com</span>
                </div>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
