import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  FileText, 
  Code2, 
  Terminal, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Cpu, 
  Globe, 
  Mail,
  Copy,
  Check
} from 'lucide-react';
import profileBustImg from '../assets/profile_bust.png';

const techBadges = [
  { name: 'Spring Boot', category: 'Backend' },
  { name: 'React', category: 'Frontend' },
  { name: 'Python', category: 'AI & Data' },
  { name: 'Flutter', category: 'Mobile' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'OpenCV / MediaPipe', category: 'Computer Vision' },
  { name: 'OpenAI APIs', category: 'LLMs' },
];

export function Hero() {
  const [activeTab, setActiveTab] = useState('stack');
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hidayathullahbajar@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-center bg-lightBg pt-32 sm:pt-36 lg:pt-40 pb-16 overflow-hidden scroll-mt-28">
      {/* Subtle Ambient Engineering Grid & Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-20 right-1/4 w-[600px] h-[350px] bg-brandOrange/6 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Top Senior Availability Banner */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-200/60">
          <div className="inline-flex items-center space-x-2.5 px-3 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-xs text-xs font-semibold text-slate-800">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Available for Full-Stack &amp; Applied AI Roles</span>
          </div>

          <div className="hidden sm:flex items-center space-x-4 text-xs font-medium text-slate-500">
            <span className="flex items-center space-x-1">
              <Globe className="w-3.5 h-3.5 text-slate-400" />
              <span>India / Available Worldwide (Remote &amp; On-Site)</span>
            </span>
            <span>&bull;</span>
            <span className="text-slate-700 font-semibold">B.E. Computer Science (2026)</span>
          </div>
        </div>

        {/* Senior 2-Column High-Impact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Authority Headline, Senior Positioning & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
            
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-xs font-bold uppercase tracking-widest text-brandOrange">
                  Software Engineer &bull; Full-Stack &bull; Applied AI
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[4.2rem] font-black tracking-tight text-[#0A0A0A] leading-[1.08]">
                Engineering scalable software,{' '}
                <span className="text-brandOrange underline decoration-brandOrange/30 underline-offset-8">
                  robust backends
                </span>, and intelligent AI products.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
                I'm <strong className="text-slate-900 font-semibold">Hidayathullah</strong> — a software developer who bridges strong system architecture with intuitive user experiences. From high-throughput Spring Boot backends and responsive React applications to computer vision pipelines, I build reliable software that delivers real-world impact.
              </p>
            </div>

            {/* Senior Impact Metric Counters */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 py-2 border-y border-slate-200/70 max-w-xl">
              <div>
                <p className="text-2xl sm:text-3xl font-black text-slate-900">10+</p>
                <p className="text-xs font-semibold text-slate-500 mt-0.5">Projects Delivered</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-brandOrange">Full-Stack</p>
                <p className="text-xs font-semibold text-slate-500 mt-0.5">Web &amp; Mobile Ecosystems</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-slate-900">AI / Vision</p>
                <p className="text-xs font-semibold text-slate-500 mt-0.5">MediaPipe &amp; OpenCV</p>
              </div>
            </div>

            {/* Core Action CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <a
                href="#projects"
                className="px-7 py-3.5 rounded-full bg-brandOrange hover:bg-brandOrange-600 text-white text-sm font-bold shadow-[0_8px_25px_rgba(255,106,0,0.38)] hover:shadow-[0_12px_32px_rgba(255,106,0,0.58)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center space-x-2"
              >
                <span>View Selected Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-900 text-sm font-bold border border-slate-300 shadow-xs hover:border-slate-400 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center space-x-2"
              >
                <FileText className="w-4 h-4 text-slate-600" />
                <span>Resume (PDF)</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="px-5 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors flex items-center space-x-2"
                title="Copy Email Address"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied Email!' : 'Copy Email'}</span>
              </button>
            </div>

            {/* Tech Stack Ribbon */}
            <div className="pt-2">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Core Tech Competencies</p>
              <div className="flex flex-wrap gap-2">
                {techBadges.map((badge) => (
                  <span
                    key={badge.name}
                    className="px-3 py-1 text-xs font-semibold rounded-lg bg-white border border-slate-200 text-slate-800 shadow-2xs hover:border-brandOrange/40 hover:text-brandOrange transition-colors"
                  >
                    {badge.name}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Senior Executive Developer Console & Profile (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-lg rounded-3xl bg-white border border-slate-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.06)] overflow-hidden">
              
              {/* macOS / Console Window Bar */}
              <div className="px-5 py-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-rose-400 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
                  <span className="text-xs font-mono font-medium text-slate-500 ml-2">hidayathullah.dev</span>
                </div>
                
                {/* Interactive Console Tabs */}
                <div className="flex items-center space-x-1 bg-slate-200/70 p-0.5 rounded-lg text-[11px] font-semibold text-slate-600">
                  <button
                    onClick={() => setActiveTab('stack')}
                    className={`px-2.5 py-1 rounded-md transition-all ${
                      activeTab === 'stack' ? 'bg-white text-slate-900 shadow-xs' : 'hover:text-slate-900'
                    }`}
                  >
                    Architecture
                  </button>
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`px-2.5 py-1 rounded-md transition-all ${
                      activeTab === 'profile' ? 'bg-white text-slate-900 shadow-xs' : 'hover:text-slate-900'
                    }`}
                  >
                    Executive ID
                  </button>
                </div>
              </div>

              {/* Console Body Tab 1: Architecture & Senior Code Blueprint */}
              {activeTab === 'stack' && (
                <div className="p-6 space-y-5">
                  
                  {/* Executive Portrait Header with Verified Badge */}
                  <div className="flex items-center space-x-4 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden border-2 border-brandOrange flex-shrink-0 bg-slate-100 shadow-xs">
                      <img
                        src={profileBustImg}
                        alt="Hidayathullah"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center space-x-1.5">
                        <h3 className="text-sm font-bold text-slate-900 truncate">Hidayathullah</h3>
                        <CheckCircle2 className="w-4 h-4 text-brandOrange flex-shrink-0" />
                      </div>
                      <p className="text-xs text-slate-500 font-medium">Software Developer &bull; CSE '26</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          Active &bull; Available
                        </span>
                        <span className="text-[11px] text-slate-400">Open to Roles</span>
                      </div>
                    </div>
                  </div>

                  {/* Clean Code Blueprint Card */}
                  <div className="rounded-xl bg-[#0F141C] p-4 text-xs font-mono text-slate-300 shadow-inner overflow-x-auto leading-relaxed">
                    <p className="text-slate-500">// Senior System Specifications</p>
                    <p className="text-purple-400">const <span className="text-amber-300">engineer</span> = &#123;</p>
                    <p className="pl-4 text-slate-300">name: <span className="text-emerald-400">"Hidayathullah"</span>,</p>
                    <p className="pl-4 text-slate-300">role: <span className="text-emerald-400">"Full-Stack &amp; AI Developer"</span>,</p>
                    <p className="pl-4 text-slate-300">backends: [<span className="text-brandOrange">"Spring Boot"</span>, <span className="text-brandOrange">"Python"</span>, <span className="text-brandOrange">"REST APIs"</span>],</p>
                    <p className="pl-4 text-slate-300">frontends: [<span className="text-cyan-400">"React"</span>, <span className="text-cyan-400">"Flutter"</span>, <span className="text-cyan-400">"Tailwind"</span>],</p>
                    <p className="pl-4 text-slate-300">ai_systems: [<span className="text-amber-400">"OpenCV"</span>, <span className="text-amber-400">"MediaPipe"</span>, <span className="text-amber-400">"LLMs"</span>],</p>
                    <p className="pl-4 text-slate-300">deliverables: <span className="text-sky-400">"10+ High-Impact Projects"</span>,</p>
                    <p className="text-purple-400">&#125;;</p>
                  </div>

                  {/* Architecture Highlights Grid */}
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                      <div className="flex items-center space-x-2 text-brandOrange font-bold text-xs">
                        <Layers className="w-3.5 h-3.5" />
                        <span>Clean Code</span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-1">Modular services, secure auth, test coverage</p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                      <div className="flex items-center space-x-2 text-brandOrange font-bold text-xs">
                        <Cpu className="w-3.5 h-3.5" />
                        <span>AI Pipelines</span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-1">Pose estimation, segmentation &amp; assistants</p>
                    </div>
                  </div>

                </div>
              )}

              {/* Console Body Tab 2: Full Executive Profile */}
              {activeTab === 'profile' && (
                <div className="p-6 space-y-4">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 flex items-center justify-center p-2">
                    <img
                      src={profileBustImg}
                      alt="Hidayathullah Executive"
                      className="w-full max-h-[250px] object-contain"
                    />
                  </div>

                  <div className="space-y-2 text-left">
                    <h4 className="text-sm font-bold text-slate-900">Engineering Philosophy</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      "I believe in building reliable software by focusing on clean domain models, responsive interfaces, and practical AI implementations that solve user friction."
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-slate-200 text-xs">
                    <span className="text-slate-500">Direct Inquiries:</span>
                    <a
                      href="mailto:hidayathullahbajar@gmail.com"
                      className="font-bold text-brandOrange hover:underline"
                    >
                      hidayathullahbajar@gmail.com
                    </a>
                  </div>
                </div>
              )}

              {/* Console Footer */}
              <div className="px-5 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span className="font-mono text-[11px]">sys: ready &bull; 0 errors</span>
                <a
                  href="#contact"
                  className="font-bold text-slate-800 hover:text-brandOrange flex items-center space-x-1 transition-colors"
                >
                  <span>Initiate Discussion</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
