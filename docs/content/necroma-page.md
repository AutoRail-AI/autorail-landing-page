# Necroma Page — `/necroma`

> **Goal:** Sell the Migration Layer of the autonomous engineering infrastructure.
>
> **Product Positioning:** A **Web Portal** for autonomous legacy modernization and system migration.
> The infrastructure that makes legacy modernization work — behavioral verification, self-healing guardrails, and vertical slice delivery.
> This is not a migration tool. This is migration infrastructure.
>
> **Audience:** Enterprise CIOs and architects managing legacy Java/COBOL/.NET systems. They've been quoted $5M and 18 months by consulting firms. They need proof, not promises.
> Users arrive here from the `Explore Necroma →` link on the main landing page.
>
> **GTM Strategy:** This is the **enterprise expansion play**. High-ticket, high-trust. Sold via Migration Pilots that demonstrate a production-ready vertical slice in days, not quarters.
>
> **Terminology:** Use "Autonomous Legacy Modernization" publicly. Never "Necromancer." Use "Guardrails" not "Airbag" (rail metaphor consistency). Use "autonomously" never "instantly."

---

## Page Flow

```
┌─────────────────────────────────────────────────────────────────────┐
│  1. HERO (WebGL Behavioral Pipeline)                                │
│  2. THE GAP — Terminal-style Glass & Glow code comparison panels    │
│  3. HOW IT WORKS — Horizontal 3-step pipeline with micro-visuals    │
│  4. CONTROL PLANE — GlassBrainShowcase dashboard                    │
│  5. THE RESULT — Asymmetric Bento grid with SVG micro-visuals       │
│  6. BOTTOM CTA — Request a Migration Pilot                          │
│  7. FOOTER                                                          │
└─────────────────────────────────────────────────────────────────────┘
```

> **Design Principle:** Every section uses a DIFFERENT layout pattern. No repeating card grids. The page uses visual variety to maintain engagement: terminal code panels → horizontal pipeline cards → dashboard showcase → bento grid with micro-visuals → glass CTA.

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
**Symbolic narrative:** Dead legacy system → behavioral verification pipeline → living modern system. A crumbling cube structure fragments, passes through verification gates, and reassembles into a clean, subtly colored structure. Modernization, not just migration.

**Morph phases (1.0s delay → 4.0s transition):**
1. **Legacy Structure (0–1.0s):** A 5×5×5 grid of cube fragments sits in scene — dim gray with decay jitter and subtle wobble vibration. A faint warm-gray wireframe outline delineates the boundary. The dying legacy system.
2. **Fragmentation (1.0–2.5s):** Wireframe fades. Fragments drift apart via `sin(πt)` scatter curve — each fragment flies outward along its random scatter vector. Fragments tumble on random axes. Color shifts dim gray → muted purple.
3. **Pipeline Capture (1.3–3.5s):** 3 wireframe verification gates materialize one by one (staggered at 18%, 40%, 62% morph progress). Each gate scales in with overshoot, begins rotating on Y-axis. Gate colors: cyan, purple, green (1.0× multiplier, no overbright).
4. **Flow Through Gates (2.0–4.0s):** Fragments travel through gates toward modern position. Peak scatter + tumble at 50% progress. Fragments glow muted purple during flow (below Bloom threshold — no glow bleed).
5. **Reconstruction (3.5–5.0s):** Fragments converge onto clean grid positions. Tumble dampens, scatter reduces to zero. A wireframe cage with translucent face panels fades in. Corner edge stubs appear in muted white/purple. Fragments settle into a 5×5×5 cube with subtle brand colors. Gates fade out completely.

**Camera system — cinematic orbit:**
- Phase 1: Front view of legacy cube
- Phase 2: Orbit to ~68° side view — pipeline corridor visible
- Phase 3: Hold side view during reconstruction
- Phase 4: Orbit back to front, framing final cube
- Post-morph: Gentle breathing on front view

**Final cube palette — subtle, warm tones (no overwhelming glow):**
- 35% clean silver (Cloud White × 0.85)
- 28% warm purple (Rail Purple × 1.4) — matches hero text
- 15% soft lavender (#B8A9D4 × 1.0)
- 12% cool cyan accent (Electric Cyan × 1.2)
- 10% success green hint (× 1.1)

**Visual details:**
- Fragments use `boxGeometry` (cubes) — reads as "building blocks" / "architectural structure"
- CubeFrame: wireframe edges (Cloud White × 0.6) + 6 translucent face panels (per-face brand color × 0.4)
- Corner edge stubs: 8 corners × 3 axes, alternating white/purple (0.8–1.2× multiplier)
- Color journey: `#5A4040` dim gray → `#6E18B3` muted purple (×0.8) → subtle brand palette (0.85–1.4×)
- Bloom: threshold 0.4, intensity 0.5 — gentle halo on slightly overbright elements only
- InstancedMesh for 125 cube fragments, seeded PRNG (seed=42), mouse parallax, prefers-reduced-motion support (skips morph, shows final state)
- 300 ambient particle motes (purple, opacity 0.15) drifting throughout
- R3F Canvas + Bloom postprocessing. Dynamic import with `{ ssr: false }`, NOT exported from barrel
- Reconstruction pulse: green ring expanding outward at 96% morph

---

## Section 2 — The Gap (Terminal-Style Code Comparison)

> **Purpose:** Show the fundamental difference between syntax translation and behavioral recording. Two terminal-style editor panels slide in from opposite sides — left shows AST code migration (wrong approach), right shows behavior capture session (Necroma's approach). Each has macOS traffic-light dots, filename in title bar, and a verdict bar at bottom.

### Layout
Two side-by-side terminal panels with:
- **Title bar**: macOS dots (red/yellow/green) + filename + X/Check badge
- **Code block**: Syntax-highlighted code/session log
- **Verdict bar**: One-sentence summary at the bottom

### Copy

| Element | Content |
|---|---|
| **Eyebrow** | `The Infrastructure Gap` |
| **Headline** | Everyone else is fighting the wrong war. |

**Left Panel — "syntax-migration.log"** (X badge, red glow shadow):
```javascript
// AST node transform
function migrate(node) {
  if (node.type === 'jQuery') {
    return rewriteToReact(node.source)
  }
}
```
Verdict: "Blind — source code doesn't capture intent."

**Right Panel — "behavior-capture.session"** (Check badge, purple glow shadow):
```
▶ REC 00:00:12
[click]  #submit-btn → POST /api/order
[input]  #email-field → "user@test.com"
[nav]    /checkout → /confirmation
[assert] .success-msg visible
```
Verdict: "We watch the screen. We preserve behavior, not syntax."

### Styling
- Left panel: `border-white/[0.15]`, red glow `box-shadow`, `bg-[#12101a]` code block, muted amber syntax
- Right panel: `border-rail-purple/25`, purple glow `box-shadow`, `bg-[#0e0a14]` code block, bright white text base with `text-electric-cyan` for selectors/paths, `text-amber-300` for strings, `text-success font-bold` for success keywords

### Animation
- Left panel slides in from `x: -40` with blur reveal
- Right panel slides in from `x: 40` with blur reveal

---

## Section 3 — How It Works (Horizontal Pipeline)

> **Purpose:** Show the 3-step behavioral reconstruction process as a horizontal flow on desktop. Three equal-width glass cards sit side-by-side with arrow connectors between them, creating an "assembly line" feel. Each card contains an icon, step number, title, description, and a micro-visual (SVG/code snippet). Stacks vertically on mobile.

### Layout
- `flex flex-col md:flex-row gap-6` — three equal `flex-1` cards side-by-side on desktop
- Purple `ArrowRight` connectors between cards (hidden on mobile)
- Success badge below: checkmark + "100% Behavior Preserved"

### Copy

| Element | Content |
|---|---|
| **Eyebrow** | `How It Works` |
| **Headline** | Test-driven reconstruction. |
| **Sub-head** | Record real user behavior, generate tests from it, then force the AI to write modern code until every test passes. |

**Pipeline Steps:**

| # | Icon | Title | Description | Micro-Visual | Tag |
|---|---|---|---|---|---|
| 01 | Camera | Record Real Behavior | Capture DOM events, video sessions, and user flows from the live legacy app. No source code reading — just watching what actually happens. | SVG recording timeline with event dots (click, input, nav, assert) connected by dashed path, animated REC indicator | Playwright + DOM Events |
| 02 | Cpu | Generate Test Suite | Playwright test suite auto-created from observed behavior. Every user flow becomes an executable assertion. | Code snippet: `test('checkout flow', { page.click('#submit') expect(res).toBe(200) })` | AI Codegen |
| 03 | ShieldCheck | Verify Until Green | Force the AI to write modern code until every behavioral test passes. Self-heal loop catches regressions automatically. | Test results list: 4 passing tests with green checks and timing (checkout flow 142ms, auth redirect 89ms, email validation 56ms, nav persistence 201ms) | Self-Heal Loop |

**Result Badge**: ✓ 100% Behavior Preserved (green accent, `border-success/20 bg-success/[0.04]`)

---

## Section 4 — The Control Plane (GlassBrainShowcase)

> **Purpose:** Show the live portal dashboard. Full visibility into autonomous operations. Uses existing `GlassBrainShowcase` component — already a unique visual element. On mobile, left (Workspace) and right (AI Thoughts) panels are hidden — only the center editor + console panel is shown.

### Copy

| Element | Content |
|---|---|
| **Eyebrow** | `Visibility` |
| **Headline** | The Migration Control Plane |
| **Sub-head** | Full visibility into every autonomous operation — workspace changes, AI reasoning, self-heal cycles, and confidence scoring in one auditable dashboard. |

### Layout
- Centered header text
- Presentation card: `rounded-2xl border-rail-purple/20 bg-white/[0.02]` with purple glow shadow
- HUD bracket framing (4 corners inside the card)
- `GlassBrainShowcase` component inside — 3-column grid on desktop (`grid-cols-[1fr_2fr_1fr]`), single column on mobile
- Left panel (Workspace tree): hidden on mobile (`hidden md:flex`)
- Center panel (DataGrid.tsx editor + Build Console): always visible
- Right panel (AI Thoughts chat): hidden on mobile (`hidden md:flex`)

---

## Section 5 — The Result (Asymmetric Bento Grid with Micro-Visuals)

> **Purpose:** Showcase the 3 key capabilities in an asymmetric bento grid with rich SVG micro-visuals inside each card. Full-width hero card on top, two half-width cards below. Each card has a glass container with icon, title, description, and an inline SVG visualization.

### Layout
- `grid grid-cols-1 md:grid-cols-2 gap-6`
- Hero card: `col-span-1 md:col-span-2` (full width)
- Bottom two cards: `col-span-1` each, `h-full pb-6` (no `overflow-hidden` — prevents text clipping)

### Copy

| Element | Content |
|---|---|
| **Eyebrow** | `The Result` |
| **Headline** | Migration That Actually Works |

| # | Icon | Title | Description | Micro-Visual |
|---|---|---|---|---|
| 01 (full-width) | Eye | Dual-Stream Verification | Watches video of actual user behavior and records DOM events to guarantee the new system works exactly like the old one. | Split-screen SVG: "Legacy" browser frame (red dot) + "Modern" browser frame (green dot) with animated sync arrows between them. Bottom label: "behavior-match: 100%" |
| 02 (half-width) | Shield | Automated Guardrails | If a generated slice fails, the infrastructure self-heals — reads the error and fixes the code until the test turns green. No 3am pages. | Self-heal loop SVG: 4 nodes (Error → Analyze → Fix → Test) in a circle with connecting arrows. Animated purple dot traveling the loop. "Pass" exit node on the right. |
| 03 (half-width) | Layers | Vertical Slice Delivery | One working feature at a time, not risky "Big Bang" rewrites. See your first production-ready slice in days, not quarters. | Animated progress bars: Auth Module (100%, green), Dashboard (75%, purple), Reports (40%, purple), Settings (10%, purple). Bars animate width on scroll. |

---

## Section 6 — Bottom CTA

### Copy

| Element | Content |
|---|---|
| **Headline** | Add the Migration Layer. |
| **Description** | See a production-ready vertical slice from your own legacy codebase. No commitment. No "Big Bang." Just proof that autonomous migration works. |
| **CTA** | `Request a Migration Pilot` (Triggers Cal.com booking modal) |

### Styling
- `rounded-2xl border-rail-purple/20 bg-rail-purple/[0.03]` with purple glow shadow
- Deep radial ambient glow behind the CTA panel
- Internal radial glow: `rgba(110,24,179,0.08)`

---

## Section 7 — Footer

> Same as main landing page footer.

---

## Engineering & Design Specs

> **Reference:** See `app/necroma/necroma-product-page.tsx`, `components/graphics/BehavioralPipeline.tsx`, and `components/glass-brain/glass-brain-showcase.tsx` for implementation.

### 1. Visual Language: "Industrial Glass" (Verification Mode)
- **Base Material:** `bg-white/[0.05]` + `backdrop-blur-[12px]`
- **Border:** `border-white/[0.12]` (default) → `border-rail-purple/25` (hover/active)
- **Terminal Panels:** `bg-[#12101a]` (left/old way) and `bg-[#0e0a14]` (right/necroma way) with colored `box-shadow` glows to lift off dark background. Right panel has purple glow: `0 25px 60px -12px rgba(110,24,179,0.18)`. Left panel has faint red glow: `0 25px 60px -12px rgba(255,51,102,0.12)`.
- **Glass Cards:** `bg-white/[0.05] border border-white/[0.12] backdrop-blur-[12px]` with `box-shadow: 0 12px 40px -10px rgba(0,0,0,0.4)`.
- **Text Contrast:** Descriptions at `text-white/70`, sub-heads at `text-white/50–55`, tags at `text-rail-purple/60`.
- **Pipeline Icons:** `bg-rail-purple/[0.10] border border-rail-purple/25` with `box-shadow: 0 0 24px rgba(110,24,179,0.10)`.
- **Color Palette:** Rail Purple (`#6E18B3`) on Void Black (`#0A0A0F`). Success Green for completion states. Electric Cyan for syntax accents in right terminal panel.
- **Typography:** `Space Grotesk` (Headlines), `JetBrains Mono` (Code/Data), `Inter` (Body).

### 2. Section Layout Variety
Each section uses a DISTINCT layout pattern to avoid visual monotony:

| Section | Layout Type | Visual Pattern |
|---|---|---|
| Hero | Asymmetric text + WebGL morph | Left-aligned copy with right-biased 3D fragment→reclaim morph. Subtle cube palette (silver/purple/lavender). Cinematic camera orbit. |
| The Gap | Side-by-side terminal panels | Two code panels with macOS dots, colored glow shadows, X/Check badges. Left: AST migration. Right: behavior capture session. |
| How It Works | Horizontal flex pipeline | 3 equal glass cards side-by-side (`flex-row`) with arrow connectors. Each card has icon, step number, description, and micro-visual (SVG timeline / code snippet / test results). |
| Control Plane | Full-width dashboard showcase | GlassBrainShowcase in a presentation card with HUD brackets. 3-column grid on desktop (Workspace / Editor+Console / AI Thoughts), center-only on mobile. |
| The Result | Asymmetric bento grid | 1 full-width hero card + 2 half-width cards. Each card has glass container + inline SVG micro-visual (dual browser / self-heal loop / progress bars). No `overflow-hidden`. |
| Bottom CTA | Centered glass panel | Single call-to-action with deep purple ambient glow |

### 3. Animation Library: `framer-motion`
- **Hero copy:** Staggered blur-reveal with "The Snap" easing `[0.16, 1, 0.3, 1]`
- **Hero WebGL:** Fragment→Reclaim morph (1.0s delay, 4.0s duration). 125 cube fragments lerp from legacy grid to modern grid via `easeInOutCubic` with `sin(πt)` scatter. 3 gates materialize staggered at 18/40/62% and fade out at 82–96%. Cinematic camera orbit (front → side → front). Final cube: subtle palette (0.85–1.4× multiplier), Bloom threshold 0.4, intensity 0.5. Post-morph Y-spin at 0.12 rad/s.
- **Terminal panels:** Slide from `x: ±40` with blur, opposite directions
- **Pipeline cards:** Stagger `y: 30 → 0` with 0.1s delays. Arrow connectors visible on desktop.
- **Bento grid:** Stagger `y: 30 → 0`. Progress bars animate `width: 0 → N%` on scroll. Self-heal loop has animated traveling dot.
- **Headlines:** `blurReveal` variant throughout
