# 08 — Testing & QA Specification

## 1. Automated Verification Checks
- **ESLint**: Verify zero linting errors, no undeclared variables, no broken imports.
- **TypeScript / Syntax**: Clean JSX transpilation.
- **Production Build**: Verify `vite build` produces bundled assets without warnings or missing module errors.

## 2. Manual & Visual QA Matrix
- **Desktop (1440px / 1280px)**:
  - Hero matches reference design proportion (~90–100vh) with photo centered/right in orange arch.
  - 4 info cards render with orange icons and clean text.
  - Floating dark pill navbar remains sticky with active section highlight.
  - Dark services section creates high-contrast transition.
- **Tablet (768px – 1024px)**:
  - Hero reorganizes naturally into 2-column or stacked layout without horizontal overflow.
  - Project grid switches to 2 columns.
- **Mobile (375px – 480px)**:
  - Mobile menu drawer opens and closes smoothly.
  - Portrait and cards stack vertically with clean spacing.
  - Buttons and interactive touch targets meet accessibility standards (min 44px).
