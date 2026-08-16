# 09 — Deployment & Hosting Guide

## 1. Production Build Command
```bash
npm run build
```
Generates production-ready static assets in `dist/`.

## 2. Recommended Hosting Platforms
- **Vercel**: Deploy directly from GitHub repository with framework preset `Vite`.
- **Netlify**: Connect GitHub repository with build command `npm run build` and publish directory `dist`.
- **Firebase Hosting**: Run `firebase deploy --only hosting` configured with `dist`.
- **GitHub Pages**: Build static bundle and publish to `gh-pages` branch.

## 3. Environment & Security Checklist
- Ensure `.env` is omitted from Git via `.gitignore`.
- Set up proper SEO meta tags, OpenGraph images, and favicon in `index.html`.
