# Necroma Page — `/necroma`

> **Goal:** Sell the Migration Layer of the autonomous engineering infrastructure.
>
> **Product Positioning:** A **Web Portal** for autonomous legacy reclamation and system migration.
> The infrastructure that makes legacy modernization work — behavioral verification, self-healing guardrails, and vertical slice delivery.
> This is not a migration tool. This is migration infrastructure.
>
> **Audience:** Enterprise CIOs and architects managing legacy Java/COBOL/.NET systems. They've been quoted $5M and 18 months by consulting firms. They need proof, not promises.
> Users arrive here from the `Explore Necroma →` link on the main landing page.
>
> **GTM Strategy:** This is the **enterprise expansion play**. High-ticket, high-trust. Sold via Migration Pilots that demonstrate a production-ready vertical slice in days, not quarters.
>
> **Terminology:** Use "Autonomous Legacy Reclamation" publicly. Never "Necromancer." Use "Guardrails" not "Airbag" (rail metaphor consistency). Use "autonomously" never "instantly."

---

## Page Flow

```
┌─────────────────────────────────────────────────────────────────────┐
│  1. HERO (WebGL Behavioral Pipeline)                                │
│  2. THE GAP — Bold comparison panels (Tools vs Infrastructure)      │
│  3. HOW IT WORKS — Vertical 3-step pipeline with animated connector │
│  4. CONTROL PLANE — GlassBrainShowcase dashboard                    │
│  5. THE RESULT — 3 capability rows (no cards)                       │
│  6. BOTTOM CTA — Request a Migration Pilot                          │
│  7. FOOTER                                                          │
└─────────────────────────────────────────────────────────────────────┘
```

> **Design Principle:** Every section uses a DIFFERENT layout pattern. No repeating card grids. The page uses visual variety to maintain engagement: comparison panels → vertical pipeline → dashboard showcase → text rows → glass CTA.

---

## Section 1 — Hero

### Copy

| Element | Content |
|---|---|
| **Badges** | `Enterprise` · `Public Beta` |
| **Product name** | `necroma` |
| **Headline** | The Migration Layer. |
| **Subhead** | Infrastructure for autonomous legacy migration. See your first modernized, production-ready feature in days, not quarters. |
| **CTA** | `Request a Migration Pilot` (Triggers Cal.com booking modal) |

### WebGL Hero: Behavioral Pipeline (Fragment → Reclaim)
**Symbolic narrative:** Dead legacy system → behavioral verification pipeline → living modern system. A crumbling cube structure fragments, passes through verification gates, and reassembles into a clean, glowing structure. Reclamation, not just migration.

**Morph phases (1.0s delay → 4.0s transition):**
1. **Legacy Structure (0–1.0s):** A 5×5×5 grid of cube fragments sits in scene — dim gray with decay jitter and subtle wobble vibration. A faint purple wireframe outline delineates the boundary. The dying legacy system.
2. **Fragmentation (1.0–2.5s):** Wireframe fades. Fragments drift apart via `sin(πt)` scatter curve — each fragment flies outward along its random scatter vector. Fragments tumble on random axes. Color shifts dim gray → bright purple.
3. **Pipeline Capture (1.3–3.5s):** 4 wireframe verification gates materialize one by one (staggered at 18%, 33%, 48%, 63% morph progress). Each gate scales in with overshoot, begins rotating. Gate colors gradient purple→green along the pipeline.
4. **Flow Through Gates (2.0–4.0s):** Fragments travel through gates toward modern position. Peak scatter + tumble at 50% progress. Bloom makes flowing fragments glow hot purple.
5. **Reconstruction (3.5–5.0s):** Fragments converge onto clean grid positions. Tumble dampens, scatter reduces to zero, rotations align. A green wireframe outline fades in. Fragments settle into a perfectly aligned 5×5×5 cube — glowing bright green. Legacy reclaimed.

**Visual details:**
- Fragments use `boxGeometry` (cubes) — reads as "building blocks" / "architectural structure"
- `StructureOutline` wireframes: legacy (dim purple, fades out by 25%) and modern (bright green, fades in at 78%)
- Color journey: `#555` dim gray → `#6E18B3` purple (overbright ×3.5) → `#00FF88` green (×4)
- Camera perspective creates depth: legacy far (small), modern near (large/prominent)
- InstancedMesh for 125 cube fragments, seeded PRNG (seed=42), mouse parallax, prefers-reduced-motion support (skips morph, shows final state)
- R3F Canvas + Bloom postprocessing. Dynamic import with `{ ssr: false }`, NOT exported from barrel

---

## Section 2 — The Gap (Bold Comparison Panels)

> **Purpose:** Show the fundamental difference between migration tools and migration infrastructure. Two statement panels slide in from opposite sides — no code, just bold positioning statements. Visually different from Code-Synapse's code editor panels.

### Layout
Two side-by-side statement panels with:
- **Title bar**: Icon + category label
- **Content**: Subtitle + 2-line description + mono verdict
- Left panel (muted/error border) = wrong approach
- Right panel (purple border) = our approach

### Copy

| Element | Content |
|---|---|
| **Eyebrow** | `The Infrastructure Gap` |
| **Headline** | Everyone else is fighting the wrong war. |

**Left Panel — "Migration Tools"** (X icon, muted border):
- Subtitle: "The Syntax War"
- Description: "Convert Code A to Code B, line by line. Read source code and guess intent from syntax."
- Verdict: "Blind — source code doesn't capture intent."

**Right Panel — "Migration Infrastructure"** (Check icon, purple border):
- Subtitle: "The Behavioral War"
- Description: "Watch the running application. Record user flows. Preserve actual behavior, not just syntax."
- Verdict: "We are not blind. We watch the screen."

### Animation
- Left panel slides in from `x: -40` with blur reveal
- Right panel slides in from `x: 40` with blur reveal

---

## Section 3 — How It Works (Vertical 3-Step Pipeline)

> **Purpose:** Show the 3-step behavioral reconstruction process as a vertical flow — deliberately different from Code-Synapse's horizontal pipeline. An animated vertical connector line draws downward on scroll with a purple→green gradient, ending in a success badge.

### Layout
Vertical pipeline with:
- Animated vertical connector line (purple→green gradient) drawing top-to-bottom on scroll
- 3 numbered step nodes aligned to the connector
- Each step: number badge (left) + title + one-liner (right)
- Success badge at bottom: checkmark + "100% Behavior Preserved"

### Copy

| Element | Content |
|---|---|
| **Eyebrow** | `How It Works` |
| **Headline** | Test-driven reconstruction. |

**Pipeline Steps:**

| # | Title | Description |
|---|---|---|
| 01 | Record | DOM events, video capture, and user flows from the live legacy application. |
| 02 | Generate | Playwright test suite automatically created from observed behavior. |
| 03 | Verify | Force the AI to write modern code until every behavioral test passes. |

**Result Badge**: ✓ 100% Behavior Preserved (green accent)

---

## Section 4 — The Control Plane (GlassBrainShowcase)

> **Purpose:** Show the live portal dashboard. Full visibility into autonomous operations. Uses existing `GlassBrainShowcase` component — already a unique visual element.

### Copy

| Element | Content |
|---|---|
| **Eyebrow** | `Visibility` |
| **Headline** | The Migration Control Plane |
| **Sub-head** | Full visibility into every autonomous operation — workspace changes, AI reasoning, self-heal cycles, and confidence scoring in one auditable dashboard. |

### Layout
- Centered header text
- Full-width GlassBrainShowcase component
- HUD bracket framing (4 corners)

---

## Section 5 — The Result (Capability Rows)

> **Purpose:** Distill the 3 key capabilities as clean text rows — NO cards, no borders. Just icon + title + description separated by subtle dividers. Visually distinct from every other section.

### Layout
- Narrow container (max-w-3xl)
- 3 rows separated by `divide-y divide-white/[0.06]`
- Each row: purple icon container (left) + title + description (right)
- Staggered fade-in animation

### Copy

| Element | Content |
|---|---|
| **Eyebrow** | `The Result` |
| **Headline** | Migration That Actually Works |

| # | Icon | Title | Description |
|---|---|---|---|
| 1 | Eye | Dual-Stream Verification | Watches video of actual user behavior and records DOM events to guarantee the new system works exactly like the old one. |
| 2 | Shield | Automated Guardrails | If a generated slice fails, the infrastructure self-heals — reads the error and fixes the code until the test turns green. No 3am pages. |
| 3 | Layers | Vertical Slice Delivery | One working feature at a time, not risky "Big Bang" rewrites. See your first production-ready slice in days, not quarters. |

---

## Section 6 — Bottom CTA

### Copy

| Element | Content |
|---|---|
| **Headline** | Add the Migration Layer. |
| **Description** | See a production-ready vertical slice from your own legacy codebase. No commitment. No "Big Bang." Just proof that autonomous migration works. |
| **CTA** | `Request a Migration Pilot` (Triggers Cal.com booking modal) |

---

## Section 7 — Footer

> Same as main landing page footer.

---

## Engineering & Design Specs

> **Reference:** See `app/necroma/necroma-product-page.tsx` and `components/graphics/BehavioralPipeline.tsx` for implementation.

### 1. Visual Language: "Industrial Glass" (Verification Mode)
- **Base Material:** `bg-white/[0.03]` + `backdrop-blur-[12px]`
- **Border:** `border-white/10` (default) → `border-rail-purple/30` (hover/active)
- **Color Palette:** Rail Purple (`#6E18B3`) on Void Black (`#0A0A0F`). Success Green for completion states.
- **Typography:** `Space Grotesk` (Headlines), `JetBrains Mono` (Logs/Data), `Inter` (Body).

### 2. Section Layout Variety
Each section uses a DISTINCT layout pattern to avoid visual monotony:

| Section | Layout Type | Visual Pattern |
|---|---|---|
| Hero | Asymmetric text + WebGL morph | Left-aligned copy with right-biased 3D fragment→reclaim morph (cube structure crumbles, flows through gates, reassembles green) |
| The Gap | Side-by-side statement panels | Two panels with X/Check icons, sliding from opposite sides |
| How It Works | Vertical numbered pipeline | Step nodes along animated vertical connector line |
| Control Plane | Full-width dashboard showcase | GlassBrainShowcase with HUD bracket framing |
| The Result | Divider-separated text rows | Icon + title + description, no cards or borders |
| Bottom CTA | Centered glass panel | Single call-to-action with HUD brackets |

### 3. Animation Library: `framer-motion`
- **Hero copy:** Staggered blur-reveal with "The Snap" easing `[0.16, 1, 0.3, 1]`
- **Hero WebGL:** Fragment→Reclaim morph (1.0s delay, 4.0s duration). 125 cube fragments lerp from legacy grid to modern grid via `easeInOutCubic` with `sin(πt)` scatter peaking mid-transition. Gates materialize staggered at 18/33/48/63%. Structure wireframe outlines fade in/out. Color: dim gray → purple (×3.5 overbright) → green (×4).
- **Comparison panels:** Slide from `x: ±40` with blur, opposite directions
- **Vertical pipeline:** Connector animates `height: 0% → 100%` with purple→green gradient; steps stagger in from `x: 20`
- **Capability rows:** Simple `y: 20 → 0` fade-in with staggered delays
- **Headlines:** `blurReveal` variant throughout
