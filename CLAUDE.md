@AGENTS.md

# Muhammad Talha — Portfolio

Personal portfolio site for **Muhammad Talha**, a Full-Stack Developer & AI Integration Specialist. Dark "Cyber-Minimalist" theme (glassmorphism, gradients, blueprint-grid background, terminal/AI-pulse accents). Built from the design spec in `stitch_ai_web_automation_portfolio/DESIGN.md`; all content is real, sourced from the CV.

## Stack
- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript**
- **Tailwind CSS v4** — CSS-first config via `@theme` in `src/app/globals.css` (there is **no `tailwind.config.ts`**)
- Fonts via `next/font/google`: Montserrat (display), Inter (body), JetBrains Mono (code/labels)

## Commands
- `npm run dev` — dev server (http://localhost:3000)
- `npm run build` — production build (run before declaring work done)
- `npm start` — serve the production build
- `npm run lint` — ESLint

## Structure
- `src/app/` — routes: `page.tsx` (Home), `projects/`, `services/`, `contact/`; `layout.tsx` (fonts, Navbar, Footer, grid bg); `globals.css` (design tokens + helpers)
- `src/components/` — `Navbar`, `Footer`, `Button`, `Chip`, `AIPulse`, `ProjectCard`, `SectionHeading`, `TerminalCard`
- `src/data/` — **content lives here**: `resume.ts` (profile/experience/education/certs — single source of truth), `projects.ts`, `services.ts`, `techStack.ts`
- `public/Muhammad-Talha-CV.pdf` — the downloadable CV (linked from navbar/hero/footer via `profile.cvPath`)

## Conventions
- **Edit content in `src/data/`, not in JSX.** To change the bio, contact info, links, or availability, edit `src/data/resume.ts`; to add a project/service/tech, append to the respective data file.
- **Design tokens** are Tailwind utilities generated from `@theme` `--color-*` names: e.g. `bg-bg`, `text-on-surface`, `border-outline-variant`, `from-primary-container`, `to-secondary`, `text-tertiary`. Surfaces tier `surface-lowest → surface-highest`.
- **Helper classes** in `globals.css`: `.glass` (glassmorphism), `.glow-primary` / `.glow-primary-hover`, `.bg-grid` (blueprint mesh), `.text-gradient`. Animations are defined as `@theme` vars (`--animate-pulse-ring`, `--animate-breathe`, `--animate-blink`) and applied via arbitrary `animation` utilities on the relevant element.

> Note: avoid writing literal Tailwind arbitrary-property strings (e.g. bracketed `animation` utilities) in this file — Tailwind v4 scans markdown too and will try to generate CSS from them.
- Components default to **Server Components**; only `Navbar`, `ProjectsPage`, and `ContactPage` are `"use client"` (they use hooks/state).
- Contact form submits **client-side** to **Web3Forms** (free tier is client-side only), delivering messages to the inbox tied to `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` (set in `.env.local` locally and in Vercel project env for production). The key is public by design.
- `<html>`/`<body>` carry `suppressHydrationWarning` to avoid browser-extension hydration noise in dev.

## Deployment
- GitHub: `MuhammadTalhaJoiya/muhammad-talha-portfolio` (public, branch `main`)
- Vercel: project `muhammad-talha-portfolio` — **connected to GitHub, so every push to `main` auto-deploys to production**. Live at https://muhammad-talha-portfolio-delta.vercel.app
