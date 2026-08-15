import React, { useState, useRef, useCallback, useEffect, memo } from 'react';
import {
  X, Search, ArrowUpRight,
  Globe, Star, CheckCircle2,
  Layers, BookOpen, Filter
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

/* ═══════════════════════════════════════════════════════════
   PROJECT DATA
═══════════════════════════════════════════════════════════ */
const PROJECTS = [
  {
    id: 'life-flow',
    title: 'Life Flow',
    subtitle: 'Smart Blood Donor Finder',
    status: 'Production Ready',
    statusColor: '#22c55e',
    category: 'Healthcare',
    featured: true,
    liveDemo: 'https://smartlifeblood.web.app',
    github: null,
    description:
      'Life Flow is a modern emergency blood donor ecosystem designed to connect blood donors and recipients instantly through intelligent search, secure authentication, cloud synchronization, and responsive mobile and web experiences.',
    features: [
      'Emergency Blood Search with real-time matching',
      'Blood Group Filtering & location-based search',
      'Donor Registration & secure Firebase Authentication',
      'Cloud Firestore real-time database sync',
      'Mobile App + Responsive Website',
      'Admin Dashboard with instant contact',
    ],
    stats: [
      { label: '40+', desc: 'Screens' },
      { label: '20+', desc: 'Collections' },
      { label: '100%', desc: 'Auth Secure' },
      { label: 'Live', desc: 'Production' },
    ],
    tech: ['Flutter', 'Dart', 'Firebase', 'Cloud Firestore', 'Firebase Auth', 'Google Maps', 'HTML', 'CSS', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?q=80&w=1400&auto=format&fit=crop',
    color: '#ef4444',
    gradient: 'linear-gradient(135deg, #ef444420, #ef444408)',
  },
  {
    id: 'taskflow',
    title: 'TaskFlow Enterprise',
    subtitle: 'Project Management System',
    category: 'Enterprise',
    featured: false,
    liveDemo: null,
    github: '#',
    description:
      'A complete enterprise project management platform for organizations to manage teams, tasks, projects, reports, authentication, notifications, analytics, and collaboration at scale.',
    features: ['Project Dashboard', 'Team Management', 'Role Based Access', 'JWT Authentication', 'Real Time Notifications', 'Reports & Analytics', 'REST APIs', 'WebSocket', 'Activity Timeline'],
    stats: [
      { label: '25+', desc: 'DB Tables' },
      { label: '100+', desc: 'APIs' },
      { label: 'Docker', desc: 'Ready' },
      { label: 'JWT', desc: 'Auth' },
    ],
    tech: ['Java 21', 'Spring Boot', 'React', 'Vite', 'PostgreSQL', 'Docker', 'JWT', 'WebSocket'],
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=1000&auto=format&fit=crop',
    color: '#3b82f6',
    gradient: 'linear-gradient(135deg, #3b82f620, #3b82f608)',
  },
  {
    id: 'civil-saas',
    title: 'Civil Construction SaaS',
    subtitle: 'Construction Management Platform',
    category: 'SaaS',
    featured: false,
    liveDemo: null,
    github: '#',
    description:
      'A complete software ecosystem for construction companies, engineers, contractors, architects, and clients with multi-user dashboards and full project lifecycle management.',
    features: ['Admin / Client / Engineer Dashboards', 'Quotation & Invoice System', 'Reports & Analytics', 'Project Tracking', 'Advertisement Integration'],
    stats: [
      { label: '3', desc: 'Dashboards' },
      { label: 'Multi', desc: 'Tenant' },
      { label: 'Full', desc: 'Lifecycle' },
      { label: 'Cloud', desc: 'Ready' },
    ],
    tech: ['React', 'Spring Boot', 'Firebase', 'PostgreSQL', 'Cloud Storage', 'REST APIs'],
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=1000&auto=format&fit=crop',
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #f59e0b20, #f59e0b08)',
  },
  {
    id: 'smart-money',
    title: 'Smart Money',
    subtitle: 'AI Personal Finance Platform',
    category: 'Finance',
    featured: false,
    liveDemo: null,
    github: '#',
    description:
      'AI-powered personal finance management platform helping users monitor expenses, subscriptions, budgets, and overall financial health with intelligent insights.',
    features: ['Expense Tracking', 'Budget Planning', 'AI Money Coach', 'Subscription Management', 'Offline First', 'Financial Reports'],
    stats: [
      { label: 'AI', desc: 'Powered' },
      { label: 'Offline', desc: 'First' },
      { label: 'Smart', desc: 'Budget' },
      { label: 'SQLite', desc: 'Local DB' },
    ],
    tech: ['Flutter', 'Firebase', 'SQLite', 'AI Integration'],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop',
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #10b98120, #10b98108)',
  },
  {
    id: 'chessverse',
    title: 'ChessVerse',
    subtitle: 'Online Multiplayer Chess Platform',
    category: 'Gaming',
    featured: false,
    liveDemo: null,
    github: '#',
    description:
      'Modern multiplayer online chess platform supporting real-time matchmaking, live games, player ELO rankings, leaderboards, and deep analytics.',
    features: ['Real Time Multiplayer', 'ELO Leaderboards', 'Rankings & Stats', 'Chess Engine AI', 'Live Spectate'],
    stats: [
      { label: 'Real', desc: 'Time' },
      { label: 'ELO', desc: 'Ranking' },
      { label: 'Multi', desc: 'Player' },
      { label: 'Docker', desc: 'Deploy' },
    ],
    tech: ['React', 'Node.js', 'Socket.IO', 'MongoDB', 'Docker'],
    image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=1000&auto=format&fit=crop',
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #8b5cf620, #8b5cf608)',
  },
  {
    id: 'jarvis-ai',
    title: 'Jarvis AI',
    subtitle: 'Intelligent Productivity Assistant',
    category: 'AI',
    featured: false,
    liveDemo: null,
    github: '#',
    description:
      'AI productivity assistant capable of intelligent conversations, voice control, automation, document management, and smart workflow assistance powered by GPT-4.',
    features: ['AI Chat', 'Voice Assistant', 'Automation', 'Document AI', 'Workflow Tools'],
    stats: [
      { label: 'GPT-4', desc: 'Powered' },
      { label: 'Voice', desc: 'Input' },
      { label: 'Auto', desc: 'mation' },
      { label: 'Multi', desc: 'Modal' },
    ],
    tech: ['React', 'Node.js', 'OpenAI', 'Python', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=1000&auto=format&fit=crop',
    color: '#06b6d4',
    gradient: 'linear-gradient(135deg, #06b6d420, #06b6d408)',
  },
  {
    id: 'dresschanger',
    title: 'DressChanger AI',
    subtitle: 'Virtual AI Try-On Platform',
    category: 'AI',
    featured: false,
    liveDemo: null,
    github: '#',
    description:
      'Virtual AI try-on platform using computer vision and AI body segmentation to visualize clothing changes on a live camera feed in real time.',
    features: ['Virtual Try-On', 'Body Detection', 'AI Segmentation', 'Perspective Mapping', 'Real-time Processing'],
    stats: [
      { label: 'CV', desc: 'Vision' },
      { label: 'Real', desc: 'Time' },
      { label: 'Body', desc: 'Detect' },
      { label: 'AR', desc: 'Preview' },
    ],
    tech: ['Flutter', 'Python', 'MediaPipe', 'OpenCV'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1000&auto=format&fit=crop',
    color: '#ec4899',
    gradient: 'linear-gradient(135deg, #ec489920, #ec489908)',
  },
  {
    id: 'azeem-ai',
    title: 'Azeem AI',
    subtitle: 'Multilingual Language Learning',
    category: 'Education',
    featured: false,
    liveDemo: null,
    github: '#',
    description:
      'AI-powered multilingual language learning ecosystem with speech recognition, real-time pronunciation evaluation, gamification, and conversational AI tutor.',
    features: ['AI Language Tutor', 'Speech Recognition', 'Pronunciation Eval', 'Gamification', 'Multilingual Support'],
    stats: [
      { label: 'AI', desc: 'Tutor' },
      { label: 'Speech', desc: 'AI' },
      { label: 'Gamif', desc: 'ied' },
      { label: 'Multi', desc: 'lingual' },
    ],
    tech: ['Flutter', 'Firebase', 'Speech Recognition', 'AI APIs'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop',
    color: '#f97316',
    gradient: 'linear-gradient(135deg, #f9731620, #f9731608)',
  },
];

const CATEGORIES = ['All', 'Healthcare', 'Enterprise', 'SaaS', 'Finance', 'AI', 'Gaming', 'Education'];

/* ═══════════════════════════════════════════════════════════
   UTILITY: 3D TILT HOOK
═══════════════════════════════════════════════════════════ */
function useTilt(intensity = 8) {
  const ref = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(1000px) rotateX(${-y * intensity}deg) rotateY(${x * intensity}deg) translateZ(8px)`;
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    el.style.setProperty('--my', `${e.clientY - rect.top}px`);
  }, [intensity]);

  const handleMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)';
  }, []);

  return { ref, handleMouseMove, handleMouseLeave };
}

/* ═══════════════════════════════════════════════════════════
   TECH BADGE
═══════════════════════════════════════════════════════════ */
const TechBadge = memo(({ label, color }) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      padding: '3px 10px',
      fontSize: '0.7rem',
      fontFamily: '"JetBrains Mono", monospace',
      fontWeight: 500,
      borderRadius: '6px',
      background: `${color}18`,
      border: `1px solid ${color}35`,
      color: color,
      letterSpacing: '0.02em',
      whiteSpace: 'nowrap',
    }}
  >
    {label}
  </span>
));

/* ═══════════════════════════════════════════════════════════
   FEATURED PROJECT (FULL WIDTH HERO)
═══════════════════════════════════════════════════════════ */
function FeaturedProject({ project, onOpen }) {
  const ref = useRef(null);
  const imgRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const el = imgRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `scale(1.05) translate(${x * -12}px, ${y * -12}px)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const el = imgRef.current;
    if (!el) return;
    el.style.transform = 'scale(1.02) translate(0, 0)';
  }, []);

  return (
    <div
      ref={ref}
      style={{ marginBottom: '40px' }}
    >
      {/* Featured label */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
        <Star style={{ width: 14, height: 14, color: '#f59e0b', fill: '#f59e0b' }} />
        <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#f59e0b' }}>
          Featured Project
        </span>
      </div>

      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={(e) => {
          handleMouseLeave(e);
          e.currentTarget.style.borderColor = 'rgba(239,68,68,0.2)';
          e.currentTarget.style.boxShadow = 'none';
        }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 0.9fr)',
          gap: '2px',
          background: 'rgba(239,68,68,0.08)',
          border: '1px solid rgba(239,68,68,0.2)',
          borderRadius: '24px',
          overflow: 'hidden',
          position: 'relative',
          cursor: 'pointer',
          transition: 'border-color 0.3s, box-shadow 0.3s',
        }}
        className="featured-card"
        onClick={() => onOpen(project)}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'rgba(239,68,68,0.45)';
          e.currentTarget.style.boxShadow = '0 0 60px rgba(239,68,68,0.12), 0 30px 80px rgba(0,0,0,0.4)';
        }}
      >
        {/* Left: Content */}
        <div style={{ padding: '56px 52px', position: 'relative', zIndex: 1 }}>
          {/* Status + Category */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '24px', flexWrap: 'wrap' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              padding: '4px 12px', borderRadius: '999px', fontSize: '0.72rem',
              fontWeight: 600, background: 'rgba(34,197,94,0.12)',
              border: '1px solid rgba(34,197,94,0.35)', color: '#22c55e',
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', animation: 'projectPulse 1.5s infinite' }} />
              {project.status}
            </span>
            <span style={{
              padding: '4px 12px', borderRadius: '999px', fontSize: '0.72rem',
              fontWeight: 600, background: `${project.color}15`,
              border: `1px solid ${project.color}35`, color: project.color,
            }}>
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h3 style={{
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            color: '#ffffff',
            marginBottom: '6px',
          }}>
            {project.title}
          </h3>
          <p style={{ fontSize: '1.1rem', color: project.color, fontWeight: 600, marginBottom: '20px', letterSpacing: '-0.01em' }}>
            {project.subtitle}
          </p>
          <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.7, marginBottom: '28px', maxWidth: '520px' }}>
            {project.description}
          </p>

          {/* Features */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '28px' }}>
            {project.features.slice(0, 4).map((f, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <CheckCircle2 style={{ width: 15, height: 15, color: project.color, flexShrink: 0, marginTop: 2 }} />
                <span style={{ fontSize: '0.82rem', color: '#cbd5e1' }}>{f}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: '20px', marginBottom: '32px', flexWrap: 'wrap' }}>
            {project.stats.map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ffffff', fontFamily: '"JetBrains Mono", monospace' }}>{s.label}</div>
                <div style={{ fontSize: '0.68rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.desc}</div>
              </div>
            ))}
          </div>

          {/* Tech badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '32px' }}>
            {project.tech.map((t) => <TechBadge key={t} label={t} color={project.color} />)}
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '7px',
                  padding: '11px 24px', borderRadius: '12px', fontSize: '0.82rem',
                  fontWeight: 700, textDecoration: 'none', color: '#ffffff',
                  background: `linear-gradient(135deg, ${project.color}, ${project.color}bb)`,
                  boxShadow: `0 4px 20px ${project.color}40`,
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
              >
                <Globe style={{ width: 14, height: 14 }} /> Live Demo
              </a>
            )}
            <button
              onClick={(e) => { e.stopPropagation(); onOpen(project); }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '7px',
                padding: '11px 24px', borderRadius: '12px', fontSize: '0.82rem',
                fontWeight: 700, cursor: 'pointer', color: '#ffffff',
                background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)',
                transition: 'background 0.2s, border-color 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; }}
            >
              <BookOpen style={{ width: 14, height: 14 }} /> Case Study
            </button>
          </div>
        </div>

        {/* Right: Image */}
        <div style={{ position: 'relative', overflow: 'hidden', minHeight: '480px', background: '#060c18' }}>
          <img
            ref={imgRef}
            src={project.image}
            alt={project.title}
            loading="lazy"
            style={{
              position: 'absolute', inset: 0, width: '100%', height: '100%',
              objectFit: 'cover', opacity: 0.6,
              transform: 'scale(1.02)',
              transition: 'transform 0.4s ease',
            }}
          />
          {/* Gradient overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(90deg, rgba(5,10,20,0.95) 0%, rgba(5,10,20,0.2) 40%, rgba(5,10,20,0.1) 100%)',
          }} />
          {/* Floating glow */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 300, height: 300,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${project.color}20, transparent 70%)`,
            pointerEvents: 'none',
          }} />
          {/* Corner badge */}
          <div style={{
            position: 'absolute', top: 24, right: 24,
            padding: '8px 14px', borderRadius: '10px',
            background: 'rgba(5,10,20,0.8)', backdropFilter: 'blur(12px)',
            border: `1px solid ${project.color}35`, color: project.color,
            fontSize: '0.72rem', fontWeight: 700,
          }}>
            ◉ Production
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   PROJECT CARD (GRID)
═══════════════════════════════════════════════════════════ */
const ProjectCard = memo(({ project, index, onOpen }) => {
  const { ref, handleMouseMove, handleMouseLeave } = useTilt(6);
  const wrapRef = useRef(null);

  return (
    <div
      ref={wrapRef}
    >
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => onOpen(project)}
        style={{
          position: 'relative',
          height: '100%',
          background: 'rgba(10, 16, 30, 0.8)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '20px',
          overflow: 'hidden',
          cursor: 'pointer',
          transition: 'border-color 0.3s, box-shadow 0.3s',
          transformStyle: 'preserve-3d',
          backdropFilter: 'blur(12px)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = `${project.color}40`;
          e.currentTarget.style.boxShadow = `0 0 40px ${project.color}15, 0 20px 60px rgba(0,0,0,0.4)`;
        }}
        onMouseLeave2={(e) => {
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {/* Mouse spotlight */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
          background: 'radial-gradient(circle 200px at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.03), transparent)',
        }} />

        {/* Gradient top border accent */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 2,
          background: `linear-gradient(90deg, transparent, ${project.color}80, transparent)`,
          opacity: 0, transition: 'opacity 0.3s',
        }} className="card-top-border" />

        {/* Image */}
        <div style={{ position: 'relative', height: 180, overflow: 'hidden' }}>
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            style={{
              width: '100%', height: '100%', objectFit: 'cover',
              opacity: 0.5, transition: 'transform 0.5s ease, opacity 0.3s',
            }}
            onMouseEnter={(e) => { e.target.style.transform = 'scale(1.07)'; e.target.style.opacity = '0.65'; }}
            onMouseLeave={(e) => { e.target.style.transform = 'scale(1)'; e.target.style.opacity = '0.5'; }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: `linear-gradient(180deg, transparent 30%, rgba(10,16,30,0.95) 100%)`,
          }} />
          {/* Category chip */}
          <span style={{
            position: 'absolute', top: 12, right: 12,
            padding: '3px 10px', borderRadius: '999px', fontSize: '0.68rem', fontWeight: 700,
            background: `${project.color}20`, border: `1px solid ${project.color}40`, color: project.color,
            backdropFilter: 'blur(8px)',
          }}>
            {project.category}
          </span>
        </div>

        {/* Content */}
        <div style={{ padding: '24px 24px 28px', position: 'relative', zIndex: 1 }}>
          {/* Title */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              {project.title}
            </h3>
            <ArrowUpRight style={{ width: 16, height: 16, color: '#475569', flexShrink: 0, marginLeft: 8, marginTop: 2 }} />
          </div>
          <p style={{ fontSize: '0.78rem', color: project.color, fontWeight: 600, marginBottom: '12px' }}>
            {project.subtitle}
          </p>
          <p style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.6, marginBottom: '16px', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {project.description}
          </p>

          {/* Mini stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px', marginBottom: '16px' }}>
            {project.stats.map((s, i) => (
              <div key={i} style={{
                textAlign: 'center', padding: '6px 4px',
                background: `${project.color}0c`, borderRadius: '8px',
                border: `1px solid ${project.color}18`,
              }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#e2e8f0', fontFamily: '"JetBrains Mono", monospace' }}>{s.label}</div>
                <div style={{ fontSize: '0.6rem', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{s.desc}</div>
              </div>
            ))}
          </div>

          {/* Tech badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '20px' }}>
            {project.tech.slice(0, 4).map((t) => <TechBadge key={t} label={t} color={project.color} />)}
            {project.tech.length > 4 && (
              <span style={{ padding: '3px 8px', fontSize: '0.7rem', color: '#475569', fontFamily: '"JetBrains Mono", monospace' }}>
                +{project.tech.length - 4} more
              </span>
            )}
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '8px' }}>
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{
                  flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px',
                  padding: '8px 12px', borderRadius: '10px', fontSize: '0.75rem', fontWeight: 700,
                  textDecoration: 'none', color: '#ffffff', background: `${project.color}cc`,
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.8'; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
              >
                <Globe style={{ width: 12, height: 12 }} /> Live
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{
                  flex: project.liveDemo ? 0 : 1,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px',
                  padding: '8px 12px', borderRadius: '10px', fontSize: '0.75rem', fontWeight: 700,
                  textDecoration: 'none', color: '#94a3b8',
                  background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                  transition: 'background 0.2s, color 0.2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = '#94a3b8'; }}
              >
                <FaGithub style={{ width: 12, height: 12 }} /> GitHub
              </a>
            )}
            <button
              onClick={(e) => { e.stopPropagation(); onOpen(project); }}
              style={{
                display: 'flex', alignItems: 'center', gap: '5px',
                padding: '8px 12px', borderRadius: '10px', fontSize: '0.75rem', fontWeight: 700,
                cursor: 'pointer', color: '#94a3b8',
                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                transition: 'background 0.2s, color 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = '#94a3b8'; }}
            >
              <BookOpen style={{ width: 12, height: 12 }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

/* ═══════════════════════════════════════════════════════════
   PROJECT MODAL
═══════════════════════════════════════════════════════════ */
function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handler);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 99999,
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px',
        background: 'rgba(2, 6, 16, 0.92)', backdropFilter: 'blur(20px)',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%', maxWidth: 860, maxHeight: '90vh',
          overflowY: 'auto', borderRadius: '24px',
          background: 'rgba(8, 14, 26, 0.95)',
          border: `1px solid ${project.color}30`,
          boxShadow: `0 0 80px ${project.color}15, 0 40px 100px rgba(0,0,0,0.6)`,
        }}
      >
        {/* Header image */}
        <div style={{ position: 'relative', height: 280, overflow: 'hidden', borderRadius: '24px 24px 0 0' }}>
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }}
          />
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, rgba(8,14,26,0.1) 0%, rgba(8,14,26,0.97) 100%)` }} />
          <div style={{
            position: 'absolute', inset: 0,
            background: `radial-gradient(ellipse at 80% 40%, ${project.color}18, transparent 60%)`,
          }} />
          {/* Close button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute', top: 20, right: 20,
              width: 40, height: 40, borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.2)', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.2)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
          >
            <X style={{ width: 18, height: 18 }} />
          </button>
          {/* Badges */}
          <div style={{ position: 'absolute', bottom: 24, left: 32, display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <span style={{
              padding: '4px 12px', borderRadius: '999px', fontSize: '0.72rem', fontWeight: 700,
              background: `${project.color}22`, border: `1px solid ${project.color}50`, color: project.color,
            }}>
              {project.category}
            </span>
            {project.status && (
              <span style={{
                display: 'flex', alignItems: 'center', gap: '5px',
                padding: '4px 12px', borderRadius: '999px', fontSize: '0.72rem', fontWeight: 700,
                background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.4)', color: '#22c55e',
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e' }} />
                {project.status}
              </span>
            )}
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: '32px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: '4px' }}>
            {project.title}
          </h2>
          <p style={{ fontSize: '1rem', color: project.color, fontWeight: 600, marginBottom: '20px' }}>
            {project.subtitle}
          </p>
          <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.8, marginBottom: '32px' }}>
            {project.description}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '32px' }}>
            {/* Features */}
            <div>
              <h4 style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#64748b', marginBottom: '16px' }}>
                Key Features
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {project.features.map((f, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <CheckCircle2 style={{ width: 15, height: 15, color: project.color, flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontSize: '0.83rem', color: '#cbd5e1' }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div>
              <h4 style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#64748b', marginBottom: '16px' }}>
                Project Stats
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                {project.stats.map((s, i) => (
                  <div key={i} style={{
                    padding: '14px', borderRadius: '12px', textAlign: 'center',
                    background: `${project.color}0d`, border: `1px solid ${project.color}25`,
                  }}>
                    <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ffffff', fontFamily: '"JetBrains Mono", monospace' }}>{s.label}</div>
                    <div style={{ fontSize: '0.65rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: 2 }}>{s.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div style={{ marginBottom: '28px' }}>
            <h4 style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#64748b', marginBottom: '14px' }}>
              Technology Stack
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.tech.map((t) => <TechBadge key={t} label={t} color={project.color} />)}
            </div>
          </div>

          {/* Action buttons */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '12px 28px', borderRadius: '12px', fontSize: '0.85rem',
                  fontWeight: 700, textDecoration: 'none', color: '#ffffff',
                  background: `linear-gradient(135deg, ${project.color}, ${project.color}bb)`,
                  boxShadow: `0 4px 20px ${project.color}40`,
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = `0 8px 30px ${project.color}50`; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = `0 4px 20px ${project.color}40`; }}
              >
                <Globe style={{ width: 16, height: 16 }} /> View Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '12px 28px', borderRadius: '12px', fontSize: '0.85rem',
                  fontWeight: 700, textDecoration: 'none', color: '#e2e8f0',
                  background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; }}
              >
                <FaGithub style={{ width: 16, height: 16 }} /> View on GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN SECTION
═══════════════════════════════════════════════════════════ */
export function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  // Filter + search
  const filteredProjects = PROJECTS.filter((p) => {
    const matchF = activeFilter === 'All' || p.category === activeFilter;
    const q = searchQuery.toLowerCase();
    const matchS = !q || p.title.toLowerCase().includes(q) || p.subtitle.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) || p.tech.some((t) => t.toLowerCase().includes(q));
    return matchF && matchS;
  });

  const featuredProject = filteredProjects.find((p) => p.featured);
  const gridProjects = filteredProjects.filter((p) => !p.featured);

  // Title words
  const titleWords = ['Featured', 'Projects'];

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{
        position: 'relative',
        padding: '120px 0 100px',
        background: '#040810',
        overflow: 'hidden',
      }}
    >
      {/* CSS for animations */}
      <style>{`
        @keyframes projectPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.75); }
        }
        .proj-filter-btn {
          padding: 7px 18px;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          color: #64748b;
        }
        .proj-filter-btn:hover, .proj-filter-btn.active {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.25);
          color: #fff;
        }
        .proj-search-input {
          width: 100%;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          padding: 10px 16px 10px 40px;
          color: #fff;
          font-size: 0.85rem;
          outline: none;
          transition: border-color 0.2s;
        }
        .proj-search-input::placeholder { color: #475569; }
        .proj-search-input:focus { border-color: rgba(255,255,255,0.25); }
        .proj-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        @media (max-width: 1100px) { .proj-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 700px) {
          .proj-grid { grid-template-columns: 1fr; }
          .featured-card { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* Background glows */}
      <div style={{
        position: 'absolute', top: '10%', left: '5%',
        width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(139,92,246,0.04), transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '5%',
        width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(6,182,212,0.04), transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>

        {/* ── SECTION HEADER ── */}
        <div style={{ marginBottom: '64px' }}>
          {/* Label */}
          <div
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '5px 14px', borderRadius: '999px',
              background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.25)',
              marginBottom: '24px',
            }}
          >
            <Layers style={{ width: 13, height: 13, color: '#8b5cf6' }} />
            <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#a78bfa' }}>
              Portfolio Showcase
            </span>
          </div>

          {/* Title */}
          <div ref={titleRef} style={{ display: 'flex', gap: '0.3em', flexWrap: 'wrap', marginBottom: '16px' }}>
            {titleWords.map((word, i) => (
              <span
                key={word}
                style={{
                  display: 'block',
                  fontSize: 'clamp(3rem, 6vw, 5rem)',
                  fontWeight: 900,
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                  color: i === 0 ? '#ffffff' : 'transparent',
                  WebkitTextStroke: i === 1 ? '1.5px rgba(255,255,255,0.5)' : 'none',
                }}
              >
                {word}
              </span>
            ))}
          </div>

          <p
            style={{ fontSize: '1rem', color: '#64748b', maxWidth: 600, lineHeight: 1.7 }}
          >
            Building scalable applications, AI-powered platforms, enterprise software, and real-world digital products.
          </p>
        </div>

        {/* ── FILTER + SEARCH BAR ── */}
        <div
          style={{
            display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap',
            marginBottom: '48px', padding: '16px 20px',
            background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '16px', backdropFilter: 'blur(10px)',
          }}
        >
          {/* Filter pills */}
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', flex: 1 }}>
            <Filter style={{ width: 14, height: 14, color: '#475569', flexShrink: 0, alignSelf: 'center' }} />
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`proj-filter-btn${activeFilter === cat ? ' active' : ''}`}
              >
                {cat}
                {activeFilter === cat && cat !== 'All' && (
                  <span style={{ marginLeft: 5, fontSize: '0.65rem', color: '#8b5cf6' }}>
                    {filteredProjects.length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Search */}
          <div style={{ position: 'relative', minWidth: 200 }}>
            <Search style={{
              position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)',
              width: 15, height: 15, color: '#475569', pointerEvents: 'none',
            }} />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="proj-search-input"
            />
          </div>
        </div>

        {/* ── CONTENT AREA ── */}
        {filteredProjects.length === 0 ? (
          <div
            style={{ textAlign: 'center', padding: '80px 0', color: '#475569' }}
          >
            <Search style={{ width: 40, height: 40, margin: '0 auto 16px', opacity: 0.4 }} />
            <p style={{ fontSize: '1rem' }}>No projects match "{searchQuery}"</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveFilter('All'); }}
              style={{
                marginTop: 16, padding: '8px 20px', borderRadius: '10px',
                background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
                color: '#e2e8f0', fontSize: '0.82rem', cursor: 'pointer',
              }}
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div>
            {/* Featured Project */}
            {featuredProject && (
              <FeaturedProject project={featuredProject} onOpen={setSelectedProject} />
            )}

            {/* Grid */}
            {gridProjects.length > 0 && (
              <>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px', marginTop: featuredProject ? '8px' : '0' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#475569' }}>
                    Other Projects
                  </span>
                  <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.06)' }} />
                  <span style={{ fontSize: '0.7rem', color: '#334155' }}>{gridProjects.length} projects</span>
                </div>
                <div className="proj-grid">
                  {gridProjects.map((project, index) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      index={index}
                      onOpen={setSelectedProject}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* ── CTA ── */}
        <div
          style={{
            textAlign: 'center', marginTop: '80px', padding: '48px 32px',
            background: 'rgba(139,92,246,0.05)', border: '1px solid rgba(139,92,246,0.15)',
            borderRadius: '24px',
          }}
        >
          <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff', marginBottom: '10px', letterSpacing: '-0.02em' }}>
            Interested in working together?
          </h3>
          <p style={{ color: '#64748b', marginBottom: '24px', fontSize: '0.9rem' }}>
            I'm open to freelance contracts, consulting, and senior engineering roles.
          </p>
          <a
            href="#contact"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '13px 32px', borderRadius: '12px', fontSize: '0.88rem',
              fontWeight: 700, textDecoration: 'none', color: '#ffffff',
              background: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
              boxShadow: '0 4px 24px rgba(139,92,246,0.4)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(139,92,246,0.55)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(139,92,246,0.4)'; }}
          >
            Get In Touch <ArrowUpRight style={{ width: 16, height: 16 }} />
          </a>
        </div>
      </div>

      {/* ── MODAL ── */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
