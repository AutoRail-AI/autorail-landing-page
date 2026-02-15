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
│  2. THE PROBLEM — Before/After code comparison terminal panels       │
│  3. HOW IT WORKS — 2×2 glass card grid with Z-flow SVG connector    │
│  4. THE RESULT — Asymmetric Bento grid with micro-visuals           │
│  5. BOTTOM CTA — Connect your repo                                  │
│  6. FOOTER                                                          │
└─────────────────────────────────────────────────────────────────────┘
```

> **Design Principle:** Every section uses a DIFFERENT layout pattern. No repeating card grids. The page uses visual variety to maintain engagement: terminal editor panels → 2×2 pipeline grid with animated Z-flow → bento grid with micro-visuals → glass CTA.

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

> **Purpose:** Show the problem VISUALLY, not with paragraphs. Two terminal-style editor panels slide in from opposite sides. The left shows agent output without context (wrong packages, generic patterns). The right shows agent output with Code-Synapse (internal modules, proper types, team conventions). Users grasp the value in 2 seconds. Each panel has macOS traffic-light dots, filename in title bar, X/Check badge, and a verdict bar at bottom.

### Layout
Two side-by-side code editor panels with:
- **Title bar**: macOS dots (red/yellow/green) + filename + X/Check badge
- **Code block**: 5 lines of syntax-highlighted TypeScript
- **Verdict bar**: One-sentence summary at the bottom

### Copy

| Element | Content |
|---|---|
| **Eyebrow** | `The Problem` |
| **Headline** | Agents can write code. They can't write *your* code. |

**Left Panel — "without context"** (X badge, red glow shadow):
```typescript
import moment from 'moment'
import axios from 'axios'

const fmt = (d) => moment(d).format('MM/DD')
const res = await axios.get('/api/users')
```
Verdict: "Wrong packages. Wrong patterns. Compiles, but doesn't belong."

**Right Panel — "with code-synapse"** (Check badge, cyan glow shadow):
```typescript
import { formatDate } from '@/lib/dates'
import { api } from '@/lib/http-client'

const date = formatDate(new Date())
const users = await api.get<User[]>('/users')
```
Verdict: "Your modules. Your types. Your conventions. Code that belongs."

### Styling
- Left panel: `border-white/[0.15]`, red glow `box-shadow: 0 25px 60px -12px rgba(255,51,102,0.12)`, `bg-[#12101a]`, muted amber `text-amber-300/70` for strings, `text-white/70` for keywords
- Right panel: `border-electric-cyan/25`, cyan glow `box-shadow: 0 25px 60px -12px rgba(0,229,255,0.18)`, `bg-[#0a1214]`, neon cyan `#00FFFF` at 80–100% opacity for keywords/strings

### Animation
- Left panel slides in from `x: -40` with blur reveal
- Right panel slides in from `x: 40` with blur reveal
- Both trigger on scroll into viewport

---

## Section 3 — How It Works (2×2 Glass Card Grid with Z-Flow SVG)

> **Purpose:** Show the 4-component architecture as a 2×2 grid with an animated Z-flow SVG connector. The connector draws left→right across top, diagonally to bottom-left, then left→right across bottom — tracing the data flow through the architecture. A looping cyan pulse dot travels the full Z-path. Each card is a glass panel with large step number, icon, title, description, and tech tag.

### Layout
- 2×2 grid on desktop (`grid-cols-2`), single column on mobile
- Animated Z-flow SVG connector (desktop only) with 3 segments:
  - Horizontal top: card 01 → card 02
  - Diagonal: card 02 → card 03
  - Horizontal bottom: card 03 → card 04
- Node dots at each card center, looping cyan pulse dot
- Step number labels on the SVG path

### Copy

| Element | Content |
|---|---|
| **Eyebrow** | `How It Works` |
| **Headline** | Four components. Zero config. |
| **Sub-head** | A lightweight CLI sidecar that indexes your codebase, builds a knowledge graph, and serves context to any AI agent via MCP. |

**Pipeline Steps:**

| # | Icon | Title | Description | Tag |
|---|---|---|---|---|
| 01 | Terminal | CLI Sidecar | Installs in seconds. Watches your repo, indexes on every commit, and runs silently alongside your IDE. | pnpm add -g code-synapse |
| 02 | Workflow | Knowledge Graph | Builds a living map of your architecture — modules, dependencies, conventions, and the reasons behind them. | CozoDB + AST |
| 03 | Network | MCP Server | Serves rich, structured context to any AI agent via the Model Context Protocol. One interface, every tool. | MCP v1.0 |
| 04 | Puzzle | Skill Libraries | Encodes your team's patterns as executable rules. Agents use your internal modules — not public packages. | Auto-generated |

**Result Banner** (Zap icon): "Zero upkeep — auto-updates on every commit." (`border-electric-cyan/20 bg-electric-cyan/[0.04]`)

---

## Section 4 — The Result (Asymmetric Bento Grid with Micro-Visuals)

> **Purpose:** Showcase the 3 strongest differentiators as an asymmetric bento grid with rich inline SVG micro-visuals. Full-width hero card on top (Business Intent + knowledge graph diagram), two half-width cards below (Pattern Enforcement + module enforcement, Drift Prevention + drift line graph).

### Layout
- Full-width hero card: `space-y-5` with `flex-row` internal (text left, micro-visual right)
- Two half-width cards: `grid md:grid-cols-2 gap-5`
- Each card: glass container + inline SVG micro-visual

### Copy

| Element | Content |
|---|---|
| **Eyebrow** | `The Result` |
| **Headline** | Code That Actually Belongs |

| # | Icon | Title | Description | Micro-Visual |
|---|---|---|---|---|
| 01 (full-width) | Brain | Understands Business Intent | Knows why modules exist, what constraints drove patterns, and what breaks if conventions are violated. | Knowledge graph SVG: 5 nodes (app, auth, api, db, cache) with animated pulsing edges and traveling data dots. Label: "knowledge-graph · live" |
| 02 (half-width) | ShieldCheck | Pattern Enforcement | Agents use your internal modules — not generic public packages. DateUtils over moment.js, every time. | Module enforcement: struck-through red `import moment from 'moment'` (X icon) + green `import { formatDate } from '@/lib/dates'` (Check icon) |
| 03 (half-width) | GitBranch | Drift Prevention | Catches architectural drift before it merges to main. Alien code gets flagged, not shipped. | Drift detection SVG: green "standard" baseline + red dashed "drift" path diverging. Shield icon at branch point. X mark at flagged drift point. Labels: "standard" (green), "drift" (red). |

---

## Section 5 — Bottom CTA

### Copy

| Element | Content |
|---|---|
| **Headline** | Add the Context Layer. |
| **Description** | Your agents are already writing code. Give them the infrastructure to write it right. A CLI sidecar that connects to any agent via MCP — up and running in minutes. |
| **CTA** | `Connect Your Repo` (Triggers Cal.com booking modal) |

### Styling
- `rounded-2xl border-electric-cyan/20 bg-electric-cyan/[0.03]` with cyan glow shadow
- HUD bracket framing (4 corners outside the card)
- Deep radial ambient glow behind the CTA panel
- Internal radial glow: `rgba(0,229,255,0.08)`

---

## Section 6 — Footer

> Same as main landing page footer.

---

## Engineering & Design Specs

> **Reference:** See `app/code-synapse/code-synapse-product-page.tsx` and `components/graphics/NeuralConstellation.tsx` for implementation.

### 1. Visual Language: "Industrial Glass"
- **Base Material:** `bg-white/[0.04–0.05]` + `backdrop-blur-[12px]`
- **Border:** `border-white/[0.12–0.15]` (default) → `border-electric-cyan/25` (hover/active)
- **Terminal Panels:** `bg-[#12101a]` (without context) and `bg-[#0a1214]` (with code-synapse) with colored `box-shadow` glows. Cyan panel: `0 25px 60px -12px rgba(0,229,255,0.18)`. Red panel: `0 25px 60px -12px rgba(255,51,102,0.12)`.
- **Glass Cards:** `bg-white/[0.04] border border-white/[0.12] backdrop-blur-[12px]` with `box-shadow: 0 8px 30px -8px rgba(0,0,0,0.4)`. Hover: `border-electric-cyan/25 bg-white/[0.06]` + subtle glow.
- **Syntax Highlighting:** Neon cyan `#00FFFF` at 70–100% opacity for keywords/strings in Code-Synapse panel. Amber `text-amber-300/70` for "without" panel.
- **Color Palette:** Full brand palette on Void Black (`#0A0A0F`). Cyan dominant, with purple, yellow, green, white accents.
- **Typography:** `Space Grotesk` (Headlines), `JetBrains Mono` (Code/Technical), `Inter` (Body).

### 2. Section Layout Variety
Each section uses a DISTINCT layout pattern to avoid visual monotony:

| Section | Layout Type | Visual Pattern |
|---|---|---|
| Hero | Asymmetric text + WebGL morph | Left-aligned copy with right-biased 3D chaos→constellation morph |
| The Problem | Side-by-side terminal panels | Two code blocks with macOS dots, X/Check badges, colored glow shadows, neon syntax highlighting. Slide from opposite sides |
| How It Works | 2×2 glass card grid | Four cards with large step numbers + icons, connected by animated Z-flow SVG (3 segments + looping pulse dot). Tech tags at bottom of each card. |
| The Result | Asymmetric bento grid | 1 full-width hero card + 2 half-width cards. Each card has glass container + inline SVG micro-visual (knowledge graph / module enforcement / drift line graph). |
| Bottom CTA | Centered glass panel | Single call-to-action with HUD brackets and deep cyan ambient glow |

### 3. Animation Library: `framer-motion`
- **Hero copy:** Staggered blur-reveal with "The Snap" easing `[0.16, 1, 0.3, 1]`
- **Hero WebGL:** Chaos→Structure morph (0.8s delay, 3.2s duration). Nodes lerp from scattered positions to Fibonacci sphere via `easeInOutCubic`. Edges draw in at 55% progress via `lineSegments` with per-frame position updates. Pulse particles activate at 88%. Organic drift during chaos fades to zero.
- **Before/After:** Panels slide from `x: ±40` with blur, opposite directions
- **Pipeline:** Z-flow SVG animates 3 segments sequentially (0.8s each). Node dots scale in with stagger. Looping pulse dot travels full Z-path on repeat. Cards use `staggerContainer` + `cardItem` variants.
- **Bento grid:** Cards stagger `y: 30 → 0`. Knowledge graph has pulsing edges + traveling dots (native SVG `<animate>`). Drift graph animates `pathLength: 0 → 1`. Module enforcement is static.
- **Headlines:** `blurReveal` variant throughout

### 4. Helper Components
- `Line`: Renders a code line (empty = spacer `h-3`)
- `Kw`: Keyword span with custom color class
- `Str`: String literal span with custom color class
