# Code-Synapse Page — `/code-synapse`

> **Goal:** Sell the Context Layer of the autonomous engineering infrastructure.
>
> **Product Positioning:** A **CLI Sidecar** that runs alongside your existing agentic IDEs (Cursor, Claude, Windsurf).
> It builds an AST-backed knowledge graph and serves it to agents via an **MCP server**. Pre-built **skill libraries** let agents enforce patterns, prevent drift, and understand business intent. Not a library you import — real infrastructure that runs beside your IDE.
>
> **Audience:** VPs of Engineering and Platform teams adopting AI-assisted development at scale.
> They've tried Cursor/Copilot and are drowning in Alien Code that passes CI but violates architectural standards.
> Users arrive here from the `Explore Code-Synapse →` link on the main landing page.
>
> **GTM Strategy:** This is the **wedge product**. Low friction, immediate value. Developers install it today alongside their existing IDE agents. It proves value on Day 1 by stopping hallucinations. Once embedded, it opens the door to the Necroma enterprise play.

---

## Page Flow

```
┌─────────────────────────────────────────────────────────────────────┐
│  1. HERO (WebGL Neural Constellation)                               │
│  2. THE PROBLEM — Before/After code comparison                      │
│  3. HOW IT WORKS — Animated architecture pipeline                   │
│  4. THE RESULT — 3 capability rows (no cards)                       │
│  5. BOTTOM CTA — Connect your repo                                  │
│  6. FOOTER                                                          │
└─────────────────────────────────────────────────────────────────────┘
```

> **Design Principle:** Every section uses a DIFFERENT layout pattern. No repeating card grids. The page uses visual variety to maintain engagement: editor panels → animated pipeline → text rows → glass CTA.

---

## Section 1 — Hero

### Copy

| Element | Content |
|---|---|
| **Badges** | `Open Source` · `CLI Sidecar` |
| **Product name** | `code-synapse` |
| **Headline** | The Context Layer. |
| **Subhead** | Persistent memory infrastructure for agents — so they write code that belongs in your codebase, not code that compiles and violates everything. |
| **CTA 1** | `Connect Your Repo` (Triggers Cal.com booking modal) |
| **CTA 2** | `View on GitHub →` (external link) |

### WebGL Hero: Neural Constellation (Chaos → Structure)
**Symbolic narrative:** Unstructured agent output → organized knowledge graph. The animation starts as a scattered, drifting particle cloud (echoing the landing page's AntigravityCloud) and morphs into a structured constellation — telling Code-Synapse's story visually.

**Morph phases (0.8s delay → 3.2s transition):**
1. **Chaos (0–0.8s):** 70 icosahedron particles scattered in a larger sphere (radius 11), drifting organically with sine-based wobble. Dim, disconnected — no edges visible.
2. **Morph (0.8–4.0s):** Particles gravitate to Fibonacci sphere positions via cubic ease-in-out. Scale up from 60% → 100%. Drift fades to zero as structure emerges.
3. **Connect (55–90% progress):** ~120 color-matched edges draw in between nodes. `lineSegments` with vertex colors, positions dynamically updated every frame to stay attached to morphing nodes.
4. **Activate (88%+):** 15 pulse particles fade in and begin traveling along edges, carrying "knowledge" through the graph.

**Visual details:**
- Full brand palette with bicameral clustering: cyan (inner core), purple (outer edge), yellow, green (rare sparks), white (structural)
- Overbright colors via `THREE.Color.multiplyScalar()` with `toneMapped={false}` for Bloom neon effect
- Rotation starts slow during morph, accelerates to full speed once graph forms; breathing only after morph completes
- R3F Canvas + Bloom postprocessing, seeded PRNG (seed=42), mouse parallax, prefers-reduced-motion support (skips morph, shows final state)
- Dynamic import with `{ ssr: false }`, NOT exported from barrel

---

## Section 2 — The Problem (Before/After Code Comparison)

> **Purpose:** Show the problem VISUALLY, not with paragraphs. Two editor-style panels slide in from opposite sides. The left shows agent output without context (wrong packages, generic patterns). The right shows agent output with Code-Synapse (internal modules, proper types, team conventions). Users grasp the value in 2 seconds.

### Layout
Two side-by-side code editor panels with:
- **Title bar**: Status dot + filename + context label
- **Code block**: 5 lines of syntax-highlighted TypeScript
- **Verdict bar**: One-sentence summary at the bottom

### Copy

| Element | Content |
|---|---|
| **Eyebrow** | `The Problem` |
| **Headline** | Agents can write code. They can't write *your* code. |

**Left Panel — "Without Context"** (red status dot, muted border):
```typescript
import moment from 'moment'
import axios from 'axios'

const fmt = (d) => moment(d).format('MM/DD')
const res = await axios.get('/api/users')
```
Verdict: "Wrong packages. Wrong patterns. Compiles, but doesn't belong."

**Right Panel — "With Code-Synapse"** (cyan status dot, cyan border):
```typescript
import { formatDate } from '@/lib/dates'
import { api } from '@/lib/http-client'

const date = formatDate(new Date())
const users = await api.get<User[]>('/users')
```
Verdict: "Your modules. Your types. Your conventions. Code that belongs."

### Animation
- Left panel slides in from `x: -40` with blur reveal
- Right panel slides in from `x: 40` with blur reveal
- Both trigger on scroll into viewport

---

## Section 3 — How It Works (Animated Architecture Pipeline)

> **Purpose:** Show the 4-component architecture as a clean horizontal flow — NOT cards. A single animated connector line draws across the top as the user scrolls, with a travelling cyan pulse dot. Each component is an icon node with title + one-liner below. Users understand the architecture in 5 seconds.

### Layout
Horizontal pipeline (desktop) / 2x2 grid (tablet) / vertical stack (mobile):
- Animated connector line draws left→right on scroll
- Travelling cyan pulse dot with glow shadow
- 4 icon nodes below the line, each with step number + title + one-liner

### Copy

| Element | Content |
|---|---|
| **Eyebrow** | `How It Works` |
| **Headline** | Four components. Zero config. |

**Pipeline Steps:**

| # | Icon | Title | Description |
|---|---|---|---|
| 01 | Terminal | CLI Sidecar | Runs alongside your IDE |
| 02 | Workflow | Knowledge Graph | Maps your architecture |
| 03 | Network | MCP Server | Serves context to agents |
| 04 | Puzzle | Skill Libraries | Enforces your patterns |

**Result Banner** (Zap icon): "Zero upkeep — auto-updates on every commit."

---

## Section 4 — The Result (Capability Rows)

> **Purpose:** Distill the 3 strongest differentiators not already covered by the pipeline. NO CARDS — just clean horizontal rows with icon + title + description, separated by subtle dividers. Visually distinct from everything above.

### Layout
- Narrow container (max-w-3xl)
- 3 rows separated by `divide-y divide-white/[0.06]`
- Each row: icon container (left) + title + description (right)
- Each row staggers in with slight delay

### Copy

| Element | Content |
|---|---|
| **Eyebrow** | `The Result` |
| **Headline** | Code That Actually Belongs |

| # | Icon | Title | Description |
|---|---|---|---|
| 1 | Brain | Understands Business Intent | Knows why modules exist, what constraints drove patterns, and what breaks if conventions are violated. |
| 2 | ShieldCheck | Pattern Enforcement | Agents use your internal modules — not generic public packages. DateUtils over moment.js, every time. |
| 3 | GitBranch | Drift Prevention | Catches architectural drift before it merges to main. Alien code gets flagged, not shipped. |

---

## Section 5 — Bottom CTA

### Copy

| Element | Content |
|---|---|
| **Headline** | Add the Context Layer. |
| **Description** | Your agents are already writing code. Give them the infrastructure to write it right. A CLI sidecar that connects to any agent via MCP — up and running in minutes. |
| **CTA** | `Connect Your Repo` (Triggers Cal.com booking modal) |

---

## Section 6 — Footer

> Same as main landing page footer.

---

## Engineering & Design Specs

> **Reference:** See `app/code-synapse/code-synapse-product-page.tsx` and `components/graphics/NeuralConstellation.tsx` for implementation.

### 1. Visual Language: "Industrial Glass"
- **Base Material:** `bg-white/[0.03]` + `backdrop-blur-[12px]`
- **Border:** `border-white/10` (default) → `border-electric-cyan/30` (hover/active)
- **Code Panels:** `bg-[#0e0e14]` (slightly lighter than page bg `#0A0A0F`) with `border-white/[0.15]` and colored `box-shadow` glows to lift off dark background
- **Glow Shadows:** Comparison panels use colored box-shadows: `0 20px 50px -10px rgba(accent, 0.08–0.15)` + `0 0 0 1px rgba(accent, 0.05–0.1)`. Cyan for "with Code-Synapse" panel, red-tinted for "without context" panel.
- **Syntax Highlighting:** Neon cyan `#00FFFF` at 60–80% opacity for keywords/strings in Code-Synapse panel. Amber `text-amber-300/50` for "without" panel. Brighter than default to ensure readability against dark backgrounds.
- **Color Palette:** Full brand palette on Void Black (`#0A0A0F`). Cyan dominant, with purple, yellow, green, white accents.
- **Typography:** `Space Grotesk` (Headlines), `JetBrains Mono` (Code/Technical), `Inter` (Body).

### 2. Section Layout Variety
Each section uses a DISTINCT layout pattern to avoid visual monotony:

| Section | Layout Type | Visual Pattern |
|---|---|---|
| Hero | Asymmetric text + WebGL morph | Left-aligned copy with right-biased 3D chaos→constellation morph |
| The Problem | Side-by-side editor panels | Two code blocks with `bg-[#0e0e14]`, colored glow shadows, neon syntax highlighting. Slide from opposite sides |
| How It Works | Horizontal pipeline flow | Icon nodes (`bg-electric-cyan/[0.08] border border-electric-cyan/20`) connected by animated line + pulse. Step numbers at `text-white/30` |
| The Result | Divider-separated text rows | Icon containers with `bg-electric-cyan/[0.08] border border-electric-cyan/15`. Description text at `text-white/55` |
| Bottom CTA | Centered glass panel | Single call-to-action with HUD brackets |

### 3. Animation Library: `framer-motion`
- **Hero copy:** Staggered blur-reveal with "The Snap" easing `[0.16, 1, 0.3, 1]`
- **Hero WebGL:** Chaos→Structure morph (0.8s delay, 3.2s duration). Nodes lerp from scattered positions to Fibonacci sphere via `easeInOutCubic`. Edges draw in at 55% progress via `lineSegments` with per-frame position updates. Pulse particles activate at 88%. Organic drift during chaos fades to zero.
- **Before/After:** Panels slide from `x: ±40` with blur, opposite directions
- **Pipeline:** `staggerContainer` + `cardItem` for nodes; connector line animates `width: 0% → 100%`; pulse dot travels `left: 0% → 100%` with opacity fade
- **Capability rows:** Simple `y: 20 → 0` fade-in with staggered delays
- **Headlines:** `blurReveal` variant throughout
