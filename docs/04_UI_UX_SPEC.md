# 04 — UI / UX Design Specification

## 1. Color System
- **Primary Brand Orange**: `#FF6A00` / `#FF7A00` / `#FF6B00`
- **Dark Sections & Container**: `#080808` / `#0D0D0D` / `#141414`
- **Light Sections & Canvas**: `#FBFBFB` / `#FFFFFF` / `#F3F4F6`
- **Text Hierarchy**:
  - Headings: `#080808` (on light), `#FFFFFF` (on dark)
  - Secondary Text: `#52525B` (on light), `#94A3B8` (on dark)
  - Muted / Meta: `#71717A` (on light), `#64748B` (on dark)

## 2. Typography
- **Font Family**: Plus Jakarta Sans / Inter, system-ui, sans-serif
- **Code & Tech Badges**: JetBrains Mono, monospace
- **Scale**:
  - Hero Headline: `clamp(2.5rem, 5vw, 4.5rem)`
  - Section Headings: `clamp(2rem, 3.5vw, 3rem)`
  - Card Titles: `1.15rem – 1.35rem`
  - Body: `0.95rem – 1.05rem`

## 3. UI Components & Tokens
- **Pill Badges & Buttons**: `border-radius: 9999px;`
- **Cards & Modals**: `border-radius: 1.25rem;` (20px – 24px)
- **Shadows**: Soft diffused orange glow `0 10px 30px rgba(255, 106, 0, 0.25)` and clean card elevation `0 4px 20px rgba(0, 0, 0, 0.05)`.
- **Transitions**: `all 0.25s cubic-bezier(0.16, 1, 0.3, 1)`.
