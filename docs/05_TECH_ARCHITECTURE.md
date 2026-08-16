# 05 — Technical Architecture

## 1. Tech Stack
- **Framework**: React 18
- **Bundler & Dev Server**: Vite 7
- **Styling**: Tailwind CSS v3 + PostCSS + Autoprefixer + Vanilla CSS Design Tokens
- **Icons**: Lucide React + React Icons (`react-icons/fa6`, `react-icons/si`)
- **Smooth Scroll**: Lenis Smooth Scroll
- **Interactive Effects**: Canvas Confetti (contact submission celebration)

## 2. Directory Structure
```text
src/
├── assets/             # Profile photos, icons, graphics
├── components/         # Reusable UI components (Navbar, Modals, Footer)
├── data/               # Structured data layer (portfolioData.js)
├── sections/           # Section modules (Hero, Services, About, Skills, Projects, Experience, Certifications, Contact)
├── index.css           # Design tokens, custom scrollbars, animations
├── main.jsx            # React root mount
└── App.jsx             # Main layout orchestrator
```

## 3. Data & State Management
- All portfolio content is centralized in `src/data/portfolioData.js`.
- Section components consume structured JSON objects rather than hardcoded markup.
- Local UI state manages filter selections, search queries, modal triggers, and form input validation.
