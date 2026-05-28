# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build (TypeScript check + static generation)
npm run lint     # ESLint
```

## Stack

- **Next.js 16** (App Router, TypeScript, static generation)
- **Tailwind CSS v4** — config via `@theme` in `app/globals.css`, not `tailwind.config.ts`
- **shadcn/ui** using `@base-ui/react` (not Radix UI — Accordion API uses `value={number}`, no `type` or `collapsible` props)
- **next/font/google** — Archivo (`--font-archivo`) + Space Grotesk (`--font-space-grotesk`)

## Architecture

**Pages** (all static, under `app/`):
- `/` — Home: Hero, Stats, Services, Portfolio preview, Testimonials, How it works, Trial form
- `/about` — Story, Stats card, Values grid, Global presence
- `/services` — Service cards, Why choose us, Service area city grids, FAQ accordion
- `/portfolio` — `"use client"`, category filter tabs + gradient project cards
- `/contact` — Contact info panel + shared TrialForm

**Shared components:**
- `components/layout/navbar.tsx` — `"use client"`, sticky with scroll-triggered white bg, mobile hamburger
- `components/layout/footer.tsx` — Dark navy footer
- `components/forms/trial-form.tsx` — `"use client"`, form with local state + simulated submission

## Design System

**Colors (Tailwind built-ins + arbitrary):**
- Accent: `cyan-600` (`#0891B2`) for all CTAs and highlights
- Dark sections: `bg-[#0B1929]` (hero, how-it-works, CTA banners)
- Text hierarchy: `slate-900` / `slate-600` / `slate-400`

**Typography classes:**
- `font-heading` → Archivo (set in globals.css `@theme inline`)
- `font-sans` (default body) → Space Grotesk
- Section label: `text-xs font-semibold tracking-[0.15em] uppercase text-cyan-600`

**Section pattern:** `py-24 lg:py-32` padding + `max-w-7xl mx-auto px-6 lg:px-8` container

**Hero dark pattern:** `bg-[#0B1929]` + dot-grid via inline `backgroundImage` style + teal radial-gradient overlay

**Card pattern:** `group p-7 rounded-2xl border border-slate-200 hover:border-cyan-200 hover:shadow-xl` with icon in `w-11 h-11 rounded-xl bg-cyan-50`

## Content

Brand: **OceanArts** (rebranded from Vector Print Studio, content from vectorprintindia.in).
Contact: +91 81415 95426 / hello@vectorprintindia.in · Houston TX + Virpur, Gujarat, India.

Portfolio cards use CSS gradient backgrounds — no real images. Replace the gradient `div` in `app/portfolio/page.tsx` with `next/image` to add real images.
