# Landing Page Improvement Plan

> Repositioning autorail from "Engineering Intelligence Platform" to **"Industrial Safety for Vibe Coding"** — the structural engineering for the AI gold mine.

---

## Positioning North Star

**Core message to the Enterprise CTO:**
*"Go ahead, let your teams use AI. Let them run fast. We are the safety infrastructure that ensures the code they generate doesn't bury you in technical debt."*

**Analogy framework:**
- *kap10* = **Lane Keep Assist** (keeps you on the road/standard)
- *necroma* = **Collision Avoidance System** (brakes/steers when a crash is imminent)
- *autorail* = **The adult in the room** of AI coding tools

---

## Current State (Post-Implementation)

Landing page has been restructured to the new "Industrial Safety" narrative. New sections and data layer are in place.

| Section | Component | Role | Status |
|---------|-----------|------|--------|
| Hero | `Hero.tsx` | **"Permission to Run"** — Validate speed, sell safety | ✅ Done |
| Day 2 Problem | `Day2Problem.tsx` | **"The Day 2 Hangover"** (3 Collapses) | ✅ Done |
| kap10 | `Kap10.tsx` | **"The Institutional Memory Layer"** (full-width) | ✅ Done |
| necroma | `Necroma.tsx` | **"Autonomous Legacy Reclamation"** (full-width) | ✅ Done |
| Safety Rating | `SafetyRating.tsx` | **"Engineering Rigor"** (3 trust pillars) | ✅ Done |
| Ecosystem | `Ecosystem.tsx` | **"Built on the Agentic Stack"** | ✅ Done (id + scroll-mt) |
| CTA | `CTASection.tsx` | Split terminal + waitlist | ✅ Done |

Legacy `components/sections/`, `lp-items.tsx`, `data/capabilities.ts`, and `data/faq.ts` were removed or already absent. `FeatureGrid.tsx`, `Mission.tsx`, and `ProductSplit.tsx` remain on disk but are no longer used in `app/page.tsx`.

### Target Page Flow (Implemented)

```
NavBar
├── Hero: "Vibe Coding, Industrialized."
├── Day2Problem: "The Day 2 Hangover" (3 Collapses)
├── Kap10: "The Institutional Memory Layer"
├── necroma: "Autonomous Legacy Reclamation"
├── SafetyRating: "Engineering Rigor for the Agentic Age"
├── Ecosystem: "Built on the Agentic Stack"
├── CTA: Split — npm install (synapse) + Waitlist (necroma)
└── Footer: "Build Fast. Don't Crash."
```

---

## Phase 1: Foundation Cleanup ✅ (Done)

> Remove technical debt and establish a clean baseline before the copy rewrite.

### 1.1 Remove Legacy Code
- [x] Delete all files in `components/sections/` — directory was already removed (files had been deleted)
- [x] Audit `data/` — `capabilities.ts` and `faq.ts` already removed; no unreferenced legacy data
- [x] Delete `lp-items.tsx` at root — already removed
- [x] Clean up `data/process-steps.ts` — old "Infrastructure" steps removed; `PROCESS_STEPS` exported as empty array; interface retained for `ProcessSteps.tsx` compatibility

### 1.2 Update Constants & Data
- [x] Update `lib/constants.ts`:
  - `SITE_CONFIG.tagline` → `"Vibe Coding, Industrialized."`
  - `SITE_CONFIG.description` → new positioning copy
  - `SITE_CONFIG.footerTagline` → `"Build Fast. Don't Crash."` (new)
  - `CTA_TEXT.primary` → `"Install the Safety Kit"`, `CTA_TEXT.secondary` → `"Secure Your Legacy"`
  - `SECTION_IDS` → `hero`, `day2Problem`, `kap10`, `necroma`, `safetyRating`, `ecosystem`, `cta`
- [x] Update `data/navigation.ts` — `NAV_LINKS` (kap10, necroma, Docs, GitHub) and `FOOTER_COLUMNS` use `SECTION_IDS` for hrefs; Product column includes Safety Rating and Ecosystem
- [x] Create `data/products.ts` — `KAP10` and `NECROMA` with taglines, headlines, pitch, features, badges, CTAs, `npmPackage` (Synapse)

### 1.3 Update NavBar
- [x] Navigation links from `NAV_LINKS`: kap10, necroma, Docs, GitHub (external)
- [x] CTA button: `"Get the Safety Kit"` linking to `#cta`
- [x] NavBar uses `SITE_CONFIG` and `SECTION_IDS` from `lib/constants`; scroll state implemented with local `useState` + `useEffect` (no `@uidotdev/usehooks`)

### 1.4 Update Footer
- [x] Brand tagline from `SITE_CONFIG.footerTagline` → "Build Fast. Don't Crash."
- [x] Copyright: `© {year} autorail Inc.`
- [x] Link columns from `FOOTER_COLUMNS` (Product, Resources, Company) with new section anchors

### 1.5 Update CLAUDE.md
- [x] Project overview rewritten for "Industrial Safety for Vibe Coding"
- [x] Page Section Order updated to: Hero → Day2Problem → Kap10 → Necroma → SafetyRating → Ecosystem → CTASection
- [x] Key directories and data files (products) noted

---

## Phase 2: Copy & Section Rewrites ✅ (Done)

> Rewrite every section to match the "Industrial Safety" narrative. This is the **core positioning work**.

### 2.1 Hero — "The Permission to Run" ✅

**Implemented in `Hero.tsx`.**

- [x] **Badge:** "Industrial Safety for AI Development" (Shield icon)
- [x] **Headline:** "Vibe Coding, Industrialized." with gradient on "Industrialized."
- [x] **Subhead:** Full copy as specified
- [x] **Primary CTA:** Terminal-style button `npm install kap10` with copy-to-clipboard (check icon on copy)
- [x] **Secondary CTA:** "Secure Your Legacy Systems" → `#necroma`
- [x] Animated text reveal via `staggerContainer` / `cardItem` from `lib/animations.ts`
- [x] Scroll indicator: "See what breaks without guardrails" + chevron linking to `#day2-problem`
- [ ] Construction site metaphor / scaffold labels (deferred to Phase 4)
- [ ] HeroVisual reframe (deferred to Phase 4)

### 2.2 Day 2 Problem — "The Mine Collapse" ✅

**Rewritten `Day2Problem.tsx`; data in `data/collapses.ts`.**

- [x] **Eyebrow:** "The Problem"
- [x] **Headline:** "The 'Day 2' Hangover."
- [x] **Subhead:** As specified
- [x] **3 Collapses** from `COLLAPSES` — reordered: Amnesia (BrainCog, kap10) → Verification (ShieldX, necroma) → Context Rot (Layers, knowledge graph)
- [x] **Layout:** Alternating zig-zag panels (visual + text, 50/50 split)
- [x] **Cinematic visuals:** Session log terminal (cyan glow), test runner (purple glow), SVG dependency graph (cyan glow) — each with `bg-[#0e0e14]`, `border-white/[0.15]`, colored `box-shadow`, neon `#00FFFF` syntax
- [x] Step numbers (01/02/03) at 35% accent opacity, icon badges with glow
- [x] `whileInView` entrance animations
- [x] Bottom connector line with pulsing dot

### 2.3 kap10 — "The Structural Support" ✅

**New full-width section `Kap10.tsx`; copy from `data/products.ts` (KAP10).**

- [x] Eyebrow, tagline, headline, pitch
- [x] Badges: "Open Source", "MCP-Native"
- [x] 3 features: Pattern Enforcement, Self-Reinforcing, Drift Prevention
- [x] Cyan theme; 2×2 brain grid visual with connecting lines
- [x] Terminal block `npm install kap10` with copy button
- [x] CTA: GitHub link (secondary button with `target="_blank"` / `rel`)
- [ ] Toast on copy (deferred to Phase 4)

### 2.4 necroma — "The Rescue Gear" ✅

**New full-width section `Necroma.tsx`; copy from `data/products.ts` (NECROMA).**

- [x] Eyebrow, tagline, headline, pitch
- [x] Badges: "Enterprise", "Invite Only"
- [x] 3 features: Dual-Stream Verification, The Airbag (Self-Healing), Vertical Slice Safety
- [x] Purple theme; Plan → Execute → Verify step cards
- [x] CTA: "Join Waitlist" → `#cta`

### 2.5 Safety Rating — "Technical Credibility" ✅

**Rewritten `SafetyRating.tsx`; data in `data/safety-pillars.ts`.**

- [x] **Eyebrow:** "Enterprise Infrastructure"
- [x] **Headline:** "Engineering Rigor for the Agentic Age."
- [x] **3 Pillars:** Audit Trails (ScrollText), Privacy-First (ShieldCheck), Explainability (Lightbulb)
- [x] **Layout:** Zig-zag alternating rows with rich UI snippet demos (change log terminal, network diagram, confidence meter)
- [x] Glass terminals with colored glow shadows (`bg-[#0e0e14]`, `border-white/[0.15]`, colored `box-shadow`)
- [x] Purple radial glow behind each snippet
- [x] No CTA

### 2.6 Ecosystem — Polish ✅

**`Ecosystem.tsx` retained, polished for visibility.**

- [x] Section `id={SECTION_IDS.ecosystem}` and `scroll-mt-20` for nav
- [x] Heading "Built on the Agentic Stack" unchanged
- [x] Dual-row marquee (primary left, secondary right) with diamond separators
- [x] High-visibility pills: `text-white/60` → hover `text-white` (large), `text-white/50` → hover `text-white/80` (small)
- [x] Edge-fading gradients on both sides

---

## Phase 3: New Sections

### 3.1 CTA Section — Split Action ✅ (Done)

**Implemented in `components/landing/CTASection.tsx`** — placed before Footer.

- [x] Two-column split (responsive grid):
  - **Left (Cyan):** kap10 — terminal `npm install kap10` with copy button, "Start in 30 seconds", "View on GitHub" link
  - **Right (Purple):** necroma — email input, "Secure your legacy systems", "Join Waitlist" submit
- [x] Background: `GradientMesh` with `variant="cta"`
- [x] Heading: "Ready to Industrialize?"
- [x] Email validation for submit (disabled until valid email); submit opens `mailto:enterprise@autorail.dev` with email in body

### 3.2 Social Proof (Future — Phase 4+)

**Create `components/landing/TrustBar.tsx`** — only when we have real logos/data.

- [ ] "Trusted by" or "Backed by" heading
- [ ] Integration logos: Cursor, Windsurf, Claude, VS Code, JetBrains
- [ ] Place between Hero and Day2Problem
- [ ] Skip until we have genuine social proof — placeholder logos feel dishonest for this positioning

---

## Phase 4: Visual & Interaction Polish ✅ (Mostly Done)

> Elevate every section from functional to premium after copy is right.

### 4.1 Hero Visual Overhaul
- [x] WebGL AntigravityCloud with R3F Canvas, Bloom postprocessing, Fibonacci sphere
- [ ] Animated text reveal: word-by-word on headline
- [ ] Magnetic cursor / ripple on CTA buttons
- [x] Scroll indicator with animated chevron

### 4.2 Section Transitions & Visual Redesign ✅
- [x] **Eliminated "card fatigue"** — each section now has a unique layout
- [x] **Day2Problem:** Zig-zag alternating panels with 3 cinematic visuals (session log terminal, test runner, SVG dependency graph). Each visual has colored glow shadow, `bg-[#0e0e14]` terminal bg, `border-white/[0.15]`, neon `#00FFFF` syntax highlighting
- [x] **BentoGrid:** Vertically stacked product layers with stats embedded as large `text-4xl/5xl` gradient numbers (not small pills). Code blocks with colored box-shadow glows. HUD corner brackets, scanline on Necroma.
- [x] **SafetyRating:** Zig-zag layout with rich UI snippet demos (change log, network diagram, confidence meter). Glass terminals with purple/cyan glow shadows.
- [x] **Ecosystem:** High-visibility marquee pills (`text-white/60` → hover `text-white`)
- [x] Gradient separator lines between all sections
- [x] Background noise texture + radial glows per section

### 4.3 Product Section Visuals
- [ ] **kap10 page:** Animated knowledge graph (nodes + edges pulsing in cyan)
- [x] **necroma page:** Glass Brain dashboard mockup with boot sequence
- [ ] 3D tilt effect on hover for product feature cards
- [x] Styled terminal components with syntax highlighting, macOS chrome, cursor blink

### 4.4 Micro-interactions
- [ ] Toast notification on npm command copy
- [x] Card hover glow intensification (border brightens on hover)
- [ ] Button press spring animation
- [x] Counter animation on metric stats (count-up from 0 on scroll into view)
- [x] SVG `<animate>` traveling dots on dependency graph edges
- [x] Pulsing error indicators on broken nodes/failed tests
- [x] Blinking cursors on terminals
- [x] Shimmer overlay on confidence bar

---

## Phase 5: Performance, SEO & Accessibility

> Ship fast, rank well, work for everyone.

### 5.1 Performance
- [ ] Lighthouse 95+ on all metrics
- [ ] Lazy-load below-fold sections (Intersection Observer)
- [ ] GPU-accelerated transforms only (`will-change`, `transform`, `opacity`)
- [ ] Preload critical fonts (Space Grotesk 700, Inter 400)

### 5.2 SEO
- [ ] Update `app/layout.tsx` metadata:
  - Title: `"autorail — Vibe Coding, Industrialized"`
  - Description: `"The Context and Verification layers that make AI-powered development safe for the enterprise. kap10 for pattern enforcement, necroma for autonomous legacy reclamation."`
- [ ] Update OpenGraph/Twitter Card images and meta
- [ ] Update `JsonLd` structured data
- [ ] Add `JsonLd` for SoftwareApplication (kap10)
- [ ] Review `docs/seo-aeo-geo-strategy.md` — add "vibe coding", "AI safety", "technical debt prevention", "Day 2 AI" keywords

### 5.3 Accessibility
- [ ] Visible focus rings on all interactive elements
- [ ] Color contrast WCAG AA (cyan `#00E5FF` on `#0A0A0F` passes for large text; verify body text)
- [ ] `aria-label` on icon-only buttons
- [ ] `prefers-reduced-motion` respected everywhere
- [ ] Screen reader testing (VoiceOver)

---

## Phase 6: Infrastructure & Testing

> Project hygiene and maintainability.

### 6.1 Component Library Updates
- [ ] `Button.tsx` — add `synapse` (cyan glow) and `necroma` (purple gradient) variants
- [ ] `Badge.tsx` — product-specific color schemes
- [ ] Create `Terminal.tsx` — styled terminal/code block for npm commands
- [ ] Create `GlassCard.tsx` — reusable glassmorphism card

### 6.2 Data Layer
- [x] `data/products.ts` — KAP10 and NECROMA (name, tagline, headline, pitch, features, badges, CTA, npmPackage)
- [x] `data/collapses.ts` — Day 2 problem content (3 collapses with icon, productId, solvedBy)
- [x] `data/safety-pillars.ts` — Safety Rating section (3 pillars with icon)
- [ ] `data/ecosystem.ts` — tech stack with icons and descriptions (Ecosystem still uses inline TECH_STACK array)
- [ ] Move remaining hardcoded copy out of components into data files where useful

### 6.3 Testing
- [ ] Render tests for each landing section
- [ ] E2E smoke test: page loads, all sections visible, CTAs work, npm copy works
- [ ] Visual regression if feasible

### 6.4 Storybook
- [ ] Stories for all `components/landing/` sections
- [ ] Stories for `Terminal`, `GlassCard`, `GradientText`
- [ ] Verify Storybook builds cleanly

---

## Component Mapping

How current files map to the new structure (all implemented):

| New Section | Source Component | Action | Status |
|-------------|-----------------|--------|--------|
| Hero | `Hero.tsx` | Rewrite copy — keep animation structure | ✅ |
| Day2Problem | New `Day2Problem.tsx` | New component + `data/collapses.ts` (replaces FeatureGrid in page) | ✅ |
| Kap10 | New `Kap10.tsx` | New full-width section; copy from `data/products.ts` | ✅ |
| necroma | New `Necroma.tsx` | New full-width section; copy from `data/products.ts` | ✅ |
| SafetyRating | New `SafetyRating.tsx` | New component + `data/safety-pillars.ts` (replaces Mission in page) | ✅ |
| Ecosystem | `Ecosystem.tsx` | Retained; added `id` and `scroll-mt-20` | ✅ |
| CTASection | New `CTASection.tsx` | New section with terminal + waitlist, GradientMesh | ✅ |

`FeatureGrid.tsx`, `Mission.tsx`, and `ProductSplit.tsx` remain in `components/landing/` but are not imported in `app/page.tsx`.

**Implemented:**

- `components/landing/index.ts` exports: `Hero`, `Day2Problem`, `Kap10`, `Necroma`, `SafetyRating`, `Ecosystem`, `CTASection` (no longer exports `FeatureGrid`, `Mission`, `ProductSplit`).
- `app/page.tsx` section order:
```tsx
<NavBar />
<main>
  <Hero />
  <Day2Problem />
  <Kap10 />
  <Necroma />
  <SafetyRating />
  <Ecosystem />
  <CTASection />
</main>
<Footer />
<JsonLd type="organization" />
```

---

## Build & Server Fixes (Implementation Notes)

Applied so that **`pnpm build`** and **`pnpm dev`** / **`pnpm start`** run without errors:

1. **Production build:** `package.json` script `"build": "next build --webpack"` — Next.js 16 defaults to Turbopack for build, which was hitting an internal error; using Webpack for build avoids it.
2. **NavBar:** Removed dependency on `@uidotdev/usehooks`. Scroll state is implemented with `useState(0)` and `useEffect` listening to `window.scroll` (passive).
3. **JsonLd:** Removed `data/faq` (file was deleted in Phase 1). Dropped `"faq"` from `JsonLdProps` and from `schemas`; updated `software` and `webpage` schema copy to match new positioning; removed `#faq` from `speakable.cssSelector`.
4. **Button:** When `href` is set, the component renders an `<a>`. Added optional `target` and `rel` to `ButtonProps` and pass only `href`, `onClick`, `className`, `target`, `rel` to the anchor (no spreading of button-only props) so TypeScript and DOM are correct for external links (e.g. GitHub in Kap10).

### Run verification

| Command | Purpose | Status |
|---------|---------|--------|
| `pnpm build` | Production build (Webpack) | ✅ Verified |
| `pnpm start` | Serve production build | ✅ Verified |
| `pnpm dev` | Dev server (Turbopack) | ✅ Verified |
| `pnpm lint` | Next.js ESLint | ⚠️ Known quirk: may require running from repo root or `pnpm exec next lint`; build does not depend on it |

---

## Detailed Implementation (Product Pages & Glass Brain)

### Routes

| Route | Type | Description |
|-------|------|-------------|
| `/` | Static | Home — single-page landing with all sections (Hero → Day2Problem → Kap10 → Necroma → SafetyRating → Ecosystem → CTASection). |
| `/kap10` | Static | Dedicated product page for kap10. |
| `/necroma` | Static | Dedicated product page for necroma, including Glass Brain view showcase. |
| `/api/health` | Dynamic | Health check endpoint. |

### Product pages (dedicated routes)

**kap10 — `/kap10`**

- **Files:** `app/kap10/page.tsx` (route + metadata), `app/kap10/kap10-product-page.tsx` (client content).
- **Layout:** NavBar + main + Footer (same as home).
- **Metadata:** `title: "${KAP10.name} | ${SITE_CONFIG.name}"`, description and OpenGraph from product copy.
- **Content:**
  - **Hero:** Back link to `/`, badges (Open Source, MCP-Native), product name, headline, tagline, pitch; primary CTA = `npm install kap10` (copy button), secondary CTA = GitHub link.
  - **Key capabilities:** Three glass cards from `data/products.ts` (KAP10.features): Pattern Enforcement, Self-Reinforcing, Drift Prevention; cyan accent, Brain icon.
  - **Bottom CTA:** “Start in 30 seconds” + repeat npm install + copy.
- **Data:** All copy from `data/products.ts` (KAP10). No new data files.

**necroma — `/necroma`**

- **Files:** `app/necroma/page.tsx` (route + metadata), `app/necroma/necroma-product-page.tsx` (client content).
- **Layout:** NavBar + main + Footer.
- **Metadata:** `title: "${NECROMA.name} | ${SITE_CONFIG.name}"`, description and OG from product copy.
- **Content:**
  - **Hero:** Back link to `/`, badges (Enterprise, Invite Only), product name, headline, tagline, pitch; CTA = “Join Waitlist” → `/#cta`.
  - **Glass Brain View section:** Heading “Build dashboard — live view”, short intro copy, then full **GlassBrainShowcase** component (see below).
  - **Key capabilities:** Three glass cards from `data/products.ts` (NECROMA.features): Dual-Stream Verification, The Airbag (Self-Healing), Vertical Slice Safety; purple accent.
  - **Bottom CTA:** “Secure your legacy systems” + waitlist CTA to `/#cta`.
- **Data:** All copy from `data/products.ts` (NECROMA). Glass Brain uses mock in-component data only.

### Glass Brain view (necroma)

Implementation follows **`docs/GLASS_BRAIN_VIEW.md`** (Void Black + Rail Purple, glassmorphism).

**Location:** Used only on the necroma product page (`/necroma`) in the “Build dashboard — live view” section.

**Components (all under `components/glass-brain/`):**

| Component | File | Purpose |
|-----------|------|---------|
| **BreathingGlow** | `breathing-glow.tsx` | Wraps the dashboard with a confidence-driven inset box-shadow (rail purple). Intensity and alpha derived from `confidence` (0–1). Framer Motion `animate` with 3 keyframes, 4s ease-in-out, infinite; respects `prefers-reduced-motion`. |
| **BootSequence** | `boot-sequence.tsx` | Full-screen overlay: pulsing cyan dot → 6 radial lines (60° apart) → “Neural Link Established” → “Materializing panes...” → fade out (~3.4s), then `onComplete()`. Skips or shortens when `prefers-reduced-motion` is set. |
| **GlassBrainShowcase** | `glass-brain-showcase.tsx` | Demo shell: after boot, renders BreathingGlow-wrapped 3-column grid. **Header bar:** status pulse (quantum-violet), LOC, Tests, Tools, Heals, timer (mock stats). **Left column:** Workspace — glass-panel, mock file tree (FolderTree / FileCode). **Center:** File viewer (mock DataGrid.tsx snippet) + Build Console (terminal-style log with THINK, TOOL, WRITE, TEST, PASS, HEAL; event-type colors). **Right column:** AI thoughts — glass-panel, mock chat (AI + user bubbles). Uses `grid-cols-[1fr_2fr_1fr]`, `gap-3`, `p-3`, `.glass-panel`, `.custom-scrollbar`, `font-grotesk`, `font-mono`, and design tokens (rail-purple, quantum-violet, electric-cyan, success, warning). |
| **Barrel** | `index.ts` | Exports `BreathingGlow`, `BootSequence`, `GlassBrainShowcase`. |

**Styling:** Uses existing `styles/tailwind.css`: `.glass-panel`, `.glass-card`, `.custom-scrollbar`, color tokens (`--color-void-black`, `--color-rail-purple`, `--color-quantum-violet`, `--color-electric-cyan`, etc.). No new CSS files. No real API or event stream; showcase is static/mock for landing context.

### Navigation and links

- **NavBar:** “kap10” and “necroma” links go to **`#kap10`** and **`#necroma`** on the **home page** (in-page scroll). “Get the Safety Kit” → `#cta`.
- **Footer (Product column):** “kap10” → **`/kap10`**, “necroma” → **`/necroma`** (dedicated product pages). “Safety Rating” → `#safety-rating`, “Ecosystem” → `#ecosystem` (home anchors).
- **Product page CTAs:** “Back to home” → `/`. kap10: GitHub and npm copy. necroma: “Join Waitlist” / “Secure your legacy systems” → `/#cta`.

### File inventory (product pages & Glass Brain)

| Path | Purpose |
|------|---------|
| `app/kap10/page.tsx` | Route + metadata for kap10. |
| `app/kap10/kap10-product-page.tsx` | Client UI for kap10 page. |
| `app/necroma/page.tsx` | Route + metadata for necroma. |
| `app/necroma/necroma-product-page.tsx` | Client UI for necroma page (includes GlassBrainShowcase). |
| `components/glass-brain/breathing-glow.tsx` | Confidence-based ambient glow wrapper. |
| `components/glass-brain/boot-sequence.tsx` | Boot overlay with radial lines and copy. |
| `components/glass-brain/glass-brain-showcase.tsx` | Demo dashboard (header + 3-pane layout, mock data). |
| `components/glass-brain/index.ts` | Barrel export. |

**Modified for product pages:** `data/navigation.ts` — Footer Product links for “kap10” and “necroma” now point to `/kap10` and `/necroma` instead of home anchors.

---

## Priority Order

| Priority | Phase | What | Scope |
|----------|-------|------|-------|
| P0 | Phase 1 | Foundation Cleanup | Delete legacy, update constants |
| P0 | Phase 2.1 | Hero Rewrite | New copy + badge + CTAs |
| P0 | Phase 2.2 | Day 2 Problem | The 3 Collapses section |
| P0 | Phase 2.3–2.4 | Product Sections | kap10 + necroma as full-width |
| P0 | Phase 2.5 | Safety Rating | Trust pillars section |
| P1 | Phase 3.1 | CTA Section | Split terminal + waitlist |
| P1 | Phase 4 | Visual Polish | Animations, transitions, micro-interactions |
| P2 | Phase 5 | Perf, SEO, A11y | Lighthouse, metadata, contrast |
| P3 | Phase 6 | Infrastructure | Tests, Storybook, data layer |
| P3 | Phase 3.2 | Social Proof | Only when real logos exist |

---

## Key Copy Reference

Quick-access copy for implementation:

| Element | Copy |
|---------|------|
| Site tagline | "Vibe Coding, Industrialized." |
| Hero headline | "Vibe Coding, Industrialized." |
| Hero subhead | "Your team is already using AI agents to move fast. But speed without standards is just a faster path to technical debt. autorail provides the Context and Verification layers that make autonomous development safe for the enterprise." |
| Day 2 headline | "The 'Day 2' Hangover." |
| Day 2 subhead | "AI agents are incredible at Day 1 creation. They are terrible at Day 2 maintenance. Without guardrails, the gold mine collapses:" |
| kap10 tagline | "The Institutional Memory Layer." |
| kap10 headline | "Stop AI From Writing 'Alien Code.'" |
| kap10 pitch | "You wouldn't let a contractor build without blueprints. Don't let AI build without Context." |
| necroma tagline | "Autonomous Legacy Reclamation." |
| necroma headline | "Verify Behavior, Not Just Syntax." |
| necroma pitch | "Legacy migration is the most dangerous part of the mine. necroma is the autonomous unit that goes in, verifies the structural integrity, and reinforces it." |
| Safety headline | "Engineering Rigor for the Agentic Age." |
| Footer tagline | "Build Fast. Don't Crash." |
| Primary CTA | `npm install kap10` |
| Secondary CTA | "Secure Your Legacy Systems" |

---

## Implementation Summary

| Phase | Status | Notes |
|-------|--------|------|
| Phase 1 | ✅ Complete | Legacy cleanup, constants, navigation, products data, NavBar, Footer, CLAUDE.md |
| Phase 2 | ✅ Complete | Hero, Day2Problem, kap10, necroma, SafetyRating, Ecosystem (minimal polish) |
| Phase 3.1 | ✅ Complete | CTASection with terminal + waitlist, GradientMesh |
| Product pages | ✅ Complete | `/kap10`, `/necroma` with full product content; necroma includes Glass Brain showcase |
| Glass Brain | ✅ Complete | BreathingGlow, BootSequence, GlassBrainShowcase per `docs/GLASS_BRAIN_VIEW.md`; used on `/necroma` |
| Phase 3.2 | Pending | TrustBar — wait for real logos |
| Phase 4 | ✅ Mostly Done | Visual redesign complete: zig-zag panels, cinematic terminals, glow shadows, large stats, high-vis marquee. Hero WebGL done. Remaining: text reveal, magnetic cursor, toast |
| Phase 5 | Pending | Performance, SEO (layout metadata, JsonLd), accessibility |
| Phase 6 | Partial | Data layer mostly done; Button supports target/rel; Terminal/GlassCard/Tests/Storybook pending |

**Files created (landing):** `Day2Problem.tsx`, `Kap10.tsx`, `Necroma.tsx`, `SafetyRating.tsx`, `CTASection.tsx`, `data/products.ts`, `data/collapses.ts`, `data/safety-pillars.ts`.

**Files created (product pages & Glass Brain):** `app/kap10/page.tsx`, `app/kap10/kap10-product-page.tsx`, `app/necroma/page.tsx`, `app/necroma/necroma-product-page.tsx`, `components/glass-brain/breathing-glow.tsx`, `components/glass-brain/boot-sequence.tsx`, `components/glass-brain/glass-brain-showcase.tsx`, `components/glass-brain/index.ts`.

**Files modified:** `Hero.tsx`, `Ecosystem.tsx`, `lib/constants.ts`, `data/navigation.ts` (footer product links to `/kap10`, `/necroma`), `data/process-steps.ts`, `components/layout/NavBar.tsx`, `components/layout/Footer.tsx`, `components/shared/JsonLd.tsx`, `components/ui/Button.tsx`, `components/landing/index.ts`, `app/page.tsx`, `CLAUDE.md`, `package.json` (build script).

**Build & run:** `pnpm build` (Webpack) and `pnpm start` / `pnpm dev` verified. See [Run verification](#run-verification) above.

---

*Last updated: 2026-02-15*
*Positioning: "Industrial Safety for Vibe Coding" — Shovels with Airbags*
