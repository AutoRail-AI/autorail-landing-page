# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Landing page for **autorail** — **Industrial Safety for Vibe Coding**. Positioning: the structural engineering for the AI gold mine. Two core products:
1. **code-synapse** (cyan `#00E5FF`): The Institutional Memory Layer — pattern enforcement so AI doesn’t write “alien code.”
2. **necroma** (purple `#6E18B3`): Autonomous Legacy Reclamation — verify behavior, not just syntax.

## Commands

```bash
pnpm dev                 # Dev server with Turbopack
pnpm build               # Production build
pnpm lint                # ESLint
pnpm lint:fix            # ESLint with auto-fix
pnpm test                # Unit tests (Vitest, jsdom)
pnpm test:watch          # Vitest in watch mode
pnpm e2e:headless        # Playwright E2E tests
pnpm storybook           # Storybook on port 6006
pnpm analyze             # Bundle analysis (sets ANALYZE=true)
pnpm format              # Prettier write
```

## Architecture

**Next.js 16 App Router** with a single-page landing at `app/page.tsx`. All rendering is client-side for animation-heavy sections.

### Key Directories
- `components/landing/` — Page sections: Hero, Day2Problem, CodeSynapse, Necroma, SafetyRating, Ecosystem, CTASection (barrel export via `index.ts`)
- `components/layout/` — NavBar, Footer
- `components/ui/` — Shared primitives (Button, Badge, Card, Container, SectionHeader, Accordion, Icon) with barrel export
- `components/shared/` — GradientText, JsonLd
- `components/graphics/` — HeroVisual, FlowDiagram, GradientMesh, ProcessSteps
- `components/providers/` — MotionProvider (wraps app in `LazyMotion` with `domAnimation`)
- `lib/` — `utils.ts` (cn helper), `constants.ts` (SITE_CONFIG, CTA_TEXT, SECTION_IDS), `animations.ts` (Framer Motion variant presets)
- `data/` — Content data files (navigation, personas, process-steps, products)
- `styles/tailwind.css` — Design system: Tailwind v4 `@theme` block with all color tokens, fonts, animations, and utility classes

### Component Patterns
- UI components use `cva` (class-variance-authority) for variants with `cn()` for merging
- All animated components are `"use client"` and use `framer-motion` directly
- Import from barrel files: `components/ui`, `components/landing`, `components/layout`, `components/shared`
- Environment variables validated via `@t3-oss/env-nextjs` in `env.mjs` (only `ANALYZE` currently)

### Styling System
Tailwind CSS v4 with custom `@theme` tokens in `styles/tailwind.css`. Key custom utilities:
- `.glass-panel`, `.glass-card` — Glassmorphism effects
- `.bg-rail-fade`, `.bg-automation-flow` — Brand gradients
- `.text-gradient` — Purple gradient text
- `.glow-purple`, `.glow-cyan`, `.glow-success` — Glow box-shadows
- Color classes map directly: `bg-void-black`, `text-cloud-white`, `text-electric-cyan`, `bg-rail-purple`, etc.

### Page Section Order
NavBar → Hero → Day2Problem → CodeSynapse → Necroma → SafetyRating → Ecosystem → CTASection → Footer

## Design Constraints

- **Dark theme only**: Background is `#0A0A0F` (void-black), never use light backgrounds
- **Typography**: Space Grotesk for headings (`font-grotesk`), Inter for body (`font-sans`), JetBrains Mono for code (`font-mono`)
- **Color coding**: Cyan = code-synapse, Purple = necroma — maintain this association throughout
- **Icons**: Use `lucide-react` exclusively
- **Animations**: Use Framer Motion; presets available in `lib/animations.ts`. Respect `prefers-reduced-motion`
- **Glassmorphism**: Prefer glass panels with backdrop blur for card-like elements
