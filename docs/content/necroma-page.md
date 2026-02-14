# Necroma Page — `/necroma`

> **Goal:** Sell the Migration Layer of the autonomous engineering infrastructure.
>
> **Product Positioning:** A **Web Portal** for autonomous legacy reclamation and system migration.
> The infrastructure that makes legacy modernization work — behavioral verification, self-healing guardrails, and vertical slice delivery.
> This is not a migration tool. This is migration infrastructure.
>
> **Audience:** Enterprise CIOs and architects managing legacy Java/COBOL/.NET systems. They've been quoted $5M and 18 months by consulting firms. They need proof, not promises.
> Users arrive here from the `Request a Migration Pilot →` CTA on the main landing page.
>
> **GTM Strategy:** This is the **enterprise expansion play**. High-ticket, high-trust. Sold via Migration Pilots that demonstrate a production-ready vertical slice in days, not quarters.
>
> **Terminology:** Use "Autonomous Legacy Reclamation" publicly. Never "Necromancer." Use "Guardrails" not "Airbag" (rail metaphor consistency). Use "autonomously" never "instantly."

---

## Page Flow

```
┌─────────────────────────────────────────────────────────────────────┐
│  1. HERO (WebGL Behavioral Pipeline)                                │
│  2. THE INFRASTRUCTURE GAP — Migration Tools vs Migration Infra     │
│  3. GLASS BRAIN VIEW — The Migration Control Plane                  │
│  4. KEY CAPABILITIES — 3 infrastructure pillars                     │
│  5. BOTTOM CTA — Request a Migration Pilot                          │
│  6. FOOTER                                                          │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Section 1 — Hero

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  ┌──────────────┐  ┌──────────────┐                                 │
│  │  Enterprise   │  │ Public Beta  │                    ← badges    │
│  └──────────────┘  └──────────────┘                                 │
│                                                                     │
│  necroma                                               ← product   │
│                                                                     │
│  ╔═══════════════════════════════════════════════════════════════╗   │
│  ║  The Migration Layer.                                        ║   │
│  ╚═══════════════════════════════════════════════════════════════╝   │
│                                                                     │
│  Infrastructure for autonomous legacy migration.                    │
│  See your first modernized, production-ready feature                │
│  in days, not quarters.                                             │
│                                                                     │
│                  ┌──────────────────────────────────┐               │
│                  │  Request a Migration Pilot       │  ← primary   │
│                  └──────────────────────────────────┘    (Cal.com)  │
│                                                                     │
│  [RIGHT 65%: WebGL Behavioral Pipeline — 250 particles flowing     │
│   through 4 rotating wireframe gates, purple→green color            │
│   progression, Bloom postprocessing, mouse parallax]                │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Copy

| Element | Content |
|---|---|
| **Badges** | `Enterprise` · `Public Beta` |
| **Product name** | `necroma` |
| **Headline** | The Migration Layer. |
| **Subhead** | Infrastructure for autonomous legacy migration. See your first modernized, production-ready feature in days, not quarters. |
| **CTA** | `Request a Migration Pilot` (Triggers Cal.com booking modal) |

### WebGL Hero: Behavioral Pipeline
- 250 small spheres flowing through 4 wireframe rectangular gates along Z-axis
- Color progression: faint white/purple at entry → bright purple through middle → green (success) at exit
- Gates slowly rotate on Y-axis, particles flow at steady speed with oscillation
- Instanced mesh for performance, Bloom postprocessing
- R3F Canvas, seeded PRNG (seed=42), mouse parallax, prefers-reduced-motion support
- Dynamic import with `{ ssr: false }`, NOT exported from barrel

---

## Section 2 — The Infrastructure Gap

> **Purpose:** Everyone else builds migration tools that translate syntax. We build migration infrastructure that verifies behavior. Ground the "100% Behavioral Parity" claim in the deterministic mechanism: record DOM/Network events → generate Playwright tests → force AI to write code until tests pass.

### Comparison Cards (2-column, slide from opposite sides)

| Card | Border | Label | Subtitle | Description | Tagline |
|---|---|---|---|---|---|
| **Migration Tools** | `border-error/20` | Migration Tools | The Syntax War | Migration tools fight a Syntax War — converting Code A to Code B, line by line. They read source code and guess. | They are blind because source code doesn't capture intent. |
| **Migration Infrastructure** | `border-rail-purple/30` | Migration Infrastructure | The Behavioral War | Necroma is migration infrastructure — preserving actual user intent and business behavior. It watches the running application. | We are not blind. We watch the screen. |

### Behavior-to-Code Reconstruction (glass panel with data flow diagram)

**Pitch:** Necroma records DOM events, network calls, and user flows from the live legacy application. It generates Playwright tests from observed behavior, then forces the AI to write modern code until every test passes. This isn't magic. It's test-driven reconstruction: the infrastructure generates the acceptance criteria by watching the application work, then holds the AI accountable to those criteria automatically.

**Data Flow:**
```
Code Source + Video Capture + DOM Events
          ↓
  Temporal Graph + Playwright Test Suite
          ↓
    100% Behavior Preserved
```

---

## Section 3 — Glass Brain View: The Migration Control Plane

> **Purpose:** Show the live portal dashboard. Full visibility into autonomous operations.

### Copy

| Element | Content |
|---|---|
| **Eyebrow** | `Visibility` |
| **Headline** | The Migration Control Plane |
| **Sub-head** | Full visibility into every autonomous operation: workspace changes, build console, AI reasoning, self-heal cycles, and confidence scoring — in one auditable dashboard. |

Uses existing `GlassBrainShowcase` component with HUD brackets.

---

## Section 4 — Key Capabilities

### Copy

| # | Feature | Description |
|---|---|---|
| 1 | **Dual-Stream Verification** | Doesn't just rewrite code; watches video of actual user behavior to guarantee the new system works exactly like the old one. Records DOM events and generates behavioral test suites automatically. |
| 2 | **Automated Guardrails** | If a generated slice fails the behavioral test, the infrastructure doesn't crash the pipeline. It hits the brakes, reads the error, and self-heals the code until the test turns green. No 3am pages. The system catches itself. |
| 3 | **Vertical Slice Delivery** | Instead of risky "Big Bang" rewrites, the infra autonomously provisions vertical migration slices — one working feature at a time. See your first modernized, production-ready feature in days, not quarters. Autonomously verified through self-healing test loops. |

---

## Section 5 — Bottom CTA

### Copy

| Element | Content |
|---|---|
| **Headline** | Add the Migration Layer. |
| **Description** | See a production-ready vertical slice from your own legacy codebase. No commitment. No "Big Bang." Just proof that autonomous migration works. |
| **CTA** | `Request a Migration Pilot` (Triggers Cal.com booking modal) |

---

## Section 6 — Footer

> Same as main landing page footer.

---

## Engineering & Design Specs

> **Reference:** See `docs/GLASS_BRAIN_VIEW.md` and `components/graphics/BehavioralPipeline.tsx` for implementation.

### 1. Visual Language: "Industrial Glass" (Verification Mode)
- **Base Material:** `bg-white/[0.03]` + `backdrop-blur-[12px]`
- **Border:** `border-white/10` (default) → `border-rail-purple/30` (hover/active)
- **Color Palette:** **Rail Purple** (`#6E18B3`) on **Void Black** (`#0A0A0F`). Success Green for completion states.
- **Typography:** `Space Grotesk` (Headlines), `JetBrains Mono` (Logs/Data), `Inter` (Body).

### 2. Animation Library: `framer-motion`
Use the presets from `lib/animations.ts`:
- **Entrance:** `blurReveal` for headlines, `staggerContainer` + `cardItem` for grids.
- **Comparison cards:** Slide from opposite sides (`x: -30` / `x: 30`).
- **Data flow diagram:** Sequential stagger for input nodes.
- **Feature cards:** `whileHover: { scale: 1.02 }` with spring physics, scanline on hover.
- **Breathing Glow:** `box-shadow` pulse based on confidence score (0-100%).

### 3. Key Graphics & Effects
| Component | Visual Metaphor | Implementation |
|---|---|---|
| **Hero Background** | **Behavioral Pipeline** | R3F WebGL particle flow through rotating gates. Purple→Green progression. |
| **Comparison** | **War Cards** | Two glass cards — error-bordered (tools) vs purple-bordered (infra) with scanline. |
| **Data Flow** | **Reconstruction Diagram** | 3 input icons → converging SVG lines → Temporal Graph → 100% Behavior Preserved. |
| **Glass Brain** | **Migration Control Plane** | Existing `GlassBrainShowcase` component with HUD bracket framing. |
| **Feature Cards** | **Infrastructure Pillars** | Glass cards with purple accents, scanline hover, spring scale. |
