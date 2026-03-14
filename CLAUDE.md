# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start Vite dev server
npm run build        # Production build
npm run lint         # ESLint (quiet mode)
npm run lint:fix     # Auto-fix ESLint issues
npm run typecheck    # TypeScript type checking via jsconfig.json
npm run preview      # Preview production build
```

## Architecture

**Stack:** React 18 + Vite + TailwindCSS + Framer Motion + React Router v6 + shadcn/ui (New York style)

**Backend:** Base44 SDK (`src/api/base44Client.js`) — handles auth and serverless functions. Auth state lives in `src/lib/AuthContext.jsx` and wraps the entire app.

**Entry point chain:** `index.html` → `src/main.jsx` → `src/App.jsx`

`App.jsx` composes providers (AuthProvider → QueryClientProvider → Router) and renders routes dynamically from `src/pages.config.js` (auto-generated — do not edit manually).

**Pages:** `src/pages/Home.jsx` (main landing), `src/pages/all-projects.jsx` (filtered listing), `src/pages/project-detail.jsx` (detail view).

**Project data:** All portfolio projects are defined in `src/components/portfolio/projectsData.jsx` — a single `allProjects` array with fields: `id`, `name`, `description`, `detailedDescription`, `tech`, `learnings`, `challenges`, `url`, `year`, `category` (`school`/`personal`/`gamejam`), `school`, `collaborative`.

**Components:**
- `src/components/portfolio/` — business-logic portfolio components (HeroSection, ProjectsSection, etc.)
- `src/components/ui/` — shadcn/ui primitives (do not edit; excluded from ESLint and jsconfig type checking)

**Styling:** Dark-first design (`#07070f` background), CSS variables for theming, Framer Motion for scroll-triggered animations (`whileInView`, `viewport={{ once: true }}`).

**Path alias:** `@/*` → `src/*` (configured in jsconfig.json and vite.config.js).

**Serverless function:** `functions/generateCVPDF.ts` — generates CV PDF on demand.
