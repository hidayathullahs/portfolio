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

## 4. Email & Form Submission Pipeline
- **Endpoint**: `https://formsubmit.co/ajax/hidayathullahbajar@gmail.com`
- **Transport**: Native browser `fetch` (AJAX POST) with JSON payload.
- **Payload Schema**:
  - `name`: Sender's full name
  - `email`: Sender's email address
  - `_replyto`: Sender's email (enables one-click reply in email clients)
  - `_subject`: Dynamic inquiry topic
  - `message`: Message body
  - `_template`: `table` (HTML formatted table email)
  - `_captcha`: `false` (smooth friction-free UX)
- **Fallback**: Integrated `mailto:` pre-filled client redirect if network or ad-blocker interferes.

## 5. Concentric Editorial Hero Architecture
- **Geometry**: Symmetrical flex coordinate system locking the 420px sun backdrop and 470px portrait cutout into a shared concentric anchor (`items-center justify-center`).
- **Elevated Framing**: Portrait translates upward (`-translate-y-9`) to place chest and tie in the optical center while allowing the hair to naturally break the top rim for organic 3D pop-out.
- **Floating Credibility Badges**:
  - `Top-Left`: Architecture & Clean Code pill
  - `Top-Right`: 10+ Projects Built experience pill
  - `Bottom-Center`: Full-Stack & AI Engineer dark glassmorphic card with live availability indicator
  - `Lower-Left`: Hand-drawn style annotation (`Full-Stack Builder ⤷`)
