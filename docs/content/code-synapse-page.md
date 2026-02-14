# Code-Synapse Page — `/code-synapse`

> **Goal:** Sell the Context Layer of the autonomous engineering infrastructure.
>
> **Product Positioning:** A **CLI Sidecar** that runs alongside your existing agentic IDEs (Cursor, Claude, Windsurf).
> It builds an AST-backed knowledge graph and serves it to agents via an **MCP server**. Pre-built **skill libraries** let agents enforce patterns, prevent drift, and understand business intent. Not a library you import — real infrastructure that runs beside your IDE.
>
> **Audience:** VPs of Engineering and Platform teams adopting AI-assisted development at scale.
> They've tried Cursor/Copilot and are drowning in Alien Code that passes CI but violates architectural standards.
> Users arrive here from the `Connect Your Repo →` CTA on the main landing page.
>
> **GTM Strategy:** This is the **wedge product**. Low friction, immediate value. Developers install it today alongside their existing IDE agents. It proves value on Day 1 by stopping hallucinations. Once embedded, it opens the door to the Necroma enterprise play.

---

## Page Flow

```
┌─────────────────────────────────────────────────────────────────────┐
│  1. HERO (WebGL Neural Constellation)                               │
│  2. THE CORE ARGUMENT — "The Gap" + "The Mechanism"                │
│  3. KEY CAPABILITIES — 6 feature cards (3x2 grid)                  │
│  4. BOTTOM CTA — Connect your repo                                  │
│  5. FOOTER                                                          │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Section 1 — Hero

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  ┌──────────────┐  ┌──────────────┐                                 │
│  │ Open Source   │  │  CLI Sidecar │                    ← badges    │
│  └──────────────┘  └──────────────┘                                 │
│                                                                     │
│  code-synapse                                          ← product   │
│                                                                     │
│  ╔═══════════════════════════════════════════════════════════════╗   │
│  ║  The Context Layer.                                          ║   │
│  ╚═══════════════════════════════════════════════════════════════╝   │
│                                                                     │
│  Persistent memory infrastructure for agents —                      │
│  so they write code that belongs in your codebase,                  │
│  not code that compiles and violates everything.                    │
│                                                                     │
│  ┌──────────────────────────────┐  ┌────────────────────────────┐   │
│  │  Connect Your Repo           │  │  View on GitHub →          │   │
│  └──────────────────────────────┘  └────────────────────────────┘   │
│           ↑ cal.com trigger                 ↑ external link         │
│                                                                     │
│  [RIGHT 65%: WebGL Neural Constellation — multi-color knowledge     │
│   graph with icosahedron nodes, cyan/purple/yellow/green/white      │
│   palette matching AntigravityCloud, Bloom postprocessing,          │
│   pulse particles along edges, mouse parallax]                      │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Copy

| Element | Content |
|---|---|
| **Badges** | `Open Source` · `CLI Sidecar` |
| **Product name** | `code-synapse` |
| **Headline** | The Context Layer. |
| **Subhead** | Persistent memory infrastructure for agents — so they write code that belongs in your codebase, not code that compiles and violates everything. |
| **CTA 1** | `Connect Your Repo` (Triggers Cal.com booking modal) |
| **CTA 2** | `View on GitHub →` (external link) |

### WebGL Hero: Neural Constellation
- ~70 icosahedron nodes at Fibonacci sphere positions
- ~120 color-matched edges connecting nearby nodes
- Full brand palette: cyan (inner core), purple (outer edge), yellow, green (rare sparks), white (structural)
- Same bicameral clustering as AntigravityCloud — chaos organized into a structured knowledge graph
- 15 pulse particles traveling along edges, inheriting edge color
- R3F Canvas + Bloom postprocessing, seeded PRNG (seed=42), mouse parallax
- Dynamic import with `{ ssr: false }`, NOT exported from barrel

---

## Section 2 — The Core Argument: "The Gap" + "The Mechanism"

> **Purpose:** Bridge from the main page's "Day 2 Hangover" into the specific infrastructure gap Code-Synapse fills. Ground it in the deterministic mechanism (CLI sidecar + AST knowledge graph + MCP server + skill libraries) so it doesn't sound like "we prompt better."

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  THE GAP                                                 ← eyebrow │
│                                                                     │
│  Agents can write code. They can't write                            │
│  *your* code.                                            ← headline│
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │                                                             │    │
│  │  Current AI tools read your codebase and generate code      │    │
│  │  that compiles — but it doesn't *belong*.                   │    │
│  │                                                             │    │
│  │  It uses the wrong patterns, ignores your conventions,      │    │
│  │  and makes decisions a senior dev on your team would        │    │
│  │  never make. The result?                                    │    │
│  │                                                             │    │
│  │  Your developers spend more time fixing AI-generated        │    │
│  │  code than they saved by using AI.                          │    │
│  │                                                             │    │
│  │  The root cause isn't the agent — it's the                  │    │
│  │  infrastructure. There's no persistent context layer.       │    │
│  │  Every session is a clean slate. Every rule forgotten.      │    │
│  │  Every convention reinvented from scratch.                  │    │
│  │                                                             │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                                                                     │
│  THE MECHANISM                                           ← eyebrow │
│                                                                     │
│  A CLI sidecar that builds an AST-backed knowledge                  │
│  graph and serves it to any agent via MCP.               ← headline│
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │                                                             │    │
│  │  Code-Synapse is a CLI sidecar that runs alongside your     │    │
│  │  IDE. It builds a living knowledge graph from your AST,     │    │
│  │  commit history, and architectural decisions — then serves  │    │
│  │  it to any agent via an MCP server. Pre-built skill         │    │
│  │  libraries let agents go further: enforcing patterns,       │    │
│  │  preventing drift, and understanding business intent.       │    │
│  │  Zero manual upkeep. It watches your commits and updates    │    │
│  │  the graph in real-time.                                    │    │
│  │                                                             │    │
│  │  ┌─────────────┐ ┌────────────┐ ┌───────────────┐          │    │
│  │  │ CLI Sidecar │ │ MCP Server │ │Skill Libraries│          │    │
│  │  └─────────────┘ └────────────┘ └───────────────┘          │    │
│  │  ┌───────────────────┐                                      │    │
│  │  │ AST Knowledge Graph│                                     │    │
│  │  └───────────────────┘                                      │    │
│  │                                                             │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Section 3 — Key Capabilities

### Copy

| # | Feature | Description |
|---|---|---|
| 1 | **Universal Knowledge Graph** | Runs as a CLI sidecar alongside any agentic IDE — Cursor, Claude Desktop, Windsurf. Agents connect via an MCP server that exposes your codebase's knowledge graph. No vendor lock-in. |
| 2 | **Cure Context Rot** | Static rules files get ignored after five messages. Code-Synapse maintains a persistent knowledge graph that auto-updates on every commit. Zero manual maintenance — the sidecar watches your repo. |
| 3 | **Understands Business Intent** | Goes beyond codebase structure to understand the actual business intent of your software. Why does this module exist? What constraint drove this pattern? What happens if you violate this convention? |
| 4 | **Hyper-Personalized Generation** | Agents write code that looks like a senior developer on your team wrote it. Pre-built skill libraries teach them your internal patterns, naming conventions, and architectural decisions. |
| 5 | **Pattern Enforcement** | Skill libraries ensure agents use your internal modules and conventions, not generic public alternatives. The agent knows you have a DateUtils module — it won't import moment.js. |
| 6 | **Drift Prevention** | Catches architectural drift before it merges to main. Your codebase stays coherent as agents and developers scale. Alien Code gets flagged, not merged. |

---

## Section 4 — Bottom CTA

### Copy

| Element | Content |
|---|---|
| **Headline** | Add the Context Layer. |
| **Description** | Your agents are already writing code. Give them the infrastructure to write it right. A CLI sidecar that connects to any agent via MCP — up and running in minutes. |
| **CTA** | `Connect Your Repo` (Triggers Cal.com booking modal) |

---

## Section 5 — Footer

> Same as main landing page footer.

---

## Engineering & Design Specs

> **Reference:** See `components/landing/HeroSphere.tsx` and `components/graphics/NeuralConstellation.tsx` for implementation.

### 1. Visual Language: "Industrial Glass"
- **Base Material:** `bg-white/[0.03]` + `backdrop-blur-[12px]`
- **Border:** `border-white/10` (default) → `border-electric-cyan/30` (hover/active)
- **Color Palette:** Full brand palette on Void Black (`#0A0A0F`). Cyan dominant, with purple, yellow, green, white accents.
- **Typography:** `Space Grotesk` (Headlines), `JetBrains Mono` (Code/Technical), `Inter` (Body).

### 2. Animation Library: `framer-motion`
Use the presets from `lib/animations.ts`:
- **Entrance:** `blurReveal` for headlines, `staggerContainerSlow` + `cardItem` for feature grids.
- **Hero:** Staggered blur-reveal with "The Snap" easing `[0.16, 1, 0.3, 1]`.
- **Feature cards:** `whileHover: { scale: 1.02 }` with spring physics, scanline on hover.
- **Glows:** `box-shadow: 0 0 20px rgba(0, 229, 255, 0.4)` on key interactions.

### 3. Key Graphics & Effects
| Component | Visual Metaphor | Implementation |
|---|---|---|
| **Hero Background** | **Neural Constellation** | R3F WebGL knowledge graph with multi-color icosahedron nodes + Bloom. Represents chaos→structure. |
| **Feature Cards** | **Data Plate** | Glass card with 1px rigid borders + scanline hover + spring scale. Step numbers in corner. |
| **Tech Tags** | **Infrastructure Stack** | `CLI Sidecar` · `MCP Server` · `Skill Libraries` · `AST Knowledge Graph` |
| **Icons** | **Holographic** | Lucide icons inside a `bg-electric-cyan/10` container with `text-electric-cyan`. |
