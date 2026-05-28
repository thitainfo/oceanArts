# OceanArts — Creative Design Studio

A production-grade marketing website for **OceanArts**, a creative graphic design and remote staffing studio based in Houston, TX — serving businesses across USA, Canada, UK, and Australia.

---

## Tech Stack

| Tool | Version |
|---|---|
| Next.js (App Router) | 16 |
| TypeScript | 5 |
| Tailwind CSS | v4 |
| shadcn/ui (base-ui) | latest |
| Lucide React | latest |
| Yarn | 4 (node-modules linker) |

## Pages

| Route | Description |
|---|---|
| `/` | Hero, Stats, Services, Portfolio preview, Testimonials, How It Works, Free Trial form |
| `/about` | Founder story, Stats card, Values grid, Global presence |
| `/services` | Service cards, Why choose us, Service area cities, FAQ accordion |
| `/portfolio` | Category-filtered project grid (client component) |
| `/contact` | Contact info + Free trial form with file upload |

## Getting Started

```bash
# Install dependencies
yarn install

# Start dev server
yarn dev

# Production build
yarn build

# Lint
yarn lint
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
app/
├── page.tsx           # Home
├── about/page.tsx
├── services/page.tsx
├── portfolio/page.tsx  # "use client" — filter state
├── contact/page.tsx
└── globals.css         # Tailwind v4 @theme config + font vars

components/
├── layout/
│   ├── navbar.tsx      # "use client" — scroll + mobile menu
│   └── footer.tsx
└── forms/
    └── trial-form.tsx  # "use client" — form state + file upload
```

## Design System

- **Accent:** `cyan-600` (#0891B2)
- **Dark sections:** `#0B1929` (hero, CTA banners)
- **Headings:** Archivo (`font-heading`)
- **Body:** Space Grotesk (`font-sans`)
- **Section spacing:** `py-24 lg:py-32`
- **Container:** `max-w-7xl mx-auto px-6 lg:px-8`

## Deployment

Deploy instantly on [Vercel](https://vercel.com):

```bash
vercel --prod
```

Or connect the GitHub repository to Vercel for automatic deployments on every push.

## Client

**OceanArts** (rebranded from Vector Print Studio)  
Virtual Office: Houston, TX, USA  
Production Studio: Virpur, Gujarat, India  
Contact: hello@vectorprintindia.in · +91 81415 95426

---

Built with precision. © 2025 OceanArts. All Rights Reserved.
