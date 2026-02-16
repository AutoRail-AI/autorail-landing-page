# Main Landing Page — `/`

> **Goal:** Establish AutoRail as the **Autonomous Engineering Infrastructure** category leader.
> The platform that makes autonomous engineering seamless — persistent context, behavioral verification, and self-healing built into the development lifecycle.
>
> **Products:**
> - kap10 (CLI Sidecar for IDEs) — The Context Layer
> - Necroma (Web Portal for Legacy) — The Migration Layer
>
> **Audience:** Engineering leaders evaluating AI-assisted development at scale. They've tried Cursor/Copilot and hit the "Day 2" wall.

---

## Page Flow

```
┌─────────────────────────────────────────────────────────────────────┐
│  1. HERO (WebGL AntigravityCloud)                                   │
│  2. THE PROBLEM — "The 'Day 2' Hangover" (zig-zag panels)          │
│  3. THE SOLUTION / ROUTER — BentoGrid ("Two Layers. One Stack.")    │
│  4. ENTERPRISE TRUST — SafetyRating (zig-zag rows with UI snippets) │
│  5. TECH STACK — Ecosystem marquee                                  │
│  6. FOOTER                                                          │
└─────────────────────────────────────────────────────────────────────┘
```

> **Note:** The Kap10 and Necroma landing sections (previously between BentoGrid and SafetyRating) are currently **commented out** in `app/page.tsx`. Users navigate directly to `/kap10` and `/necroma` via the BentoGrid CTAs.

---

## Section 1 — Hero

### Copy

| Element | Content |
|---|---|
| **Eyebrow badge** | `Autonomous Engineering Infrastructure` (with live pulse dot) |
| **Headline** | **Autonomous Engineering** (cyan) **Infrastructure** (purple) — bicameral split headline |
| **Sub-headline** | AI editors generate syntax. AutoRail provides the execution infrastructure to test, verify, and reliably ship it — persistent context, behavioral parity, and self-healing so autonomous engineering works at enterprise scale. |
| **CTA** | `Get Early Access` (Triggers Cal.com booking modal) |

### WebGL Hero: AntigravityCloud
- ~4096 code tokens on a Fibonacci sphere via React Three Fiber
- Full brand palette: cyan (inner core), purple (outer edge), yellow, green (rare sparks), white
- Cinematic bokeh depth with exponential opacity falloff
- Bloom postprocessing for white-hot neon effect
- Right-biased (65-70% desktop), full-bleed mobile with radial vignette

---

## Section 2 — The Problem: "The 'Day 2' Hangover"

### Layout: Alternating Zig-Zag Panels with Cinematic Visuals

3 full-width panels stacked vertically. Each panel is a 50/50 split (visual + text), alternating left/right for visual variety. Each visual is a rich, animated terminal/diagram that scrolls into view alongside its text.

```
┌─────────────────────────────────────────────┐
│  [Session Log Terminal]  |  ① Amnesia Text  │  ← visual left
├─────────────────────────────────────────────┤
│  ② Verification Text  |  [Test Runner]      │  ← visual right
├─────────────────────────────────────────────┤
│  [Dependency Graph]  |  ③ Context Rot Text  │  ← visual left
└─────────────────────────────────────────────┘
```

**Visual Panels (each a glass terminal with colored glow shadow):**
1. **Amnesia** (cyan glow): Session log terminal — 6 rows of `[session-id] [file] [action] ✗`, blinking cursor, "memory lost" status indicator. `bg-[#0e0e14]`, neon cyan `#00FFFF` syntax.
2. **Verification** (purple glow): Test runner — 5 tests with progress bars (4 pass, 1 fail at 38%), animated fail summary footer. macOS traffic-light dots.
3. **Context Rot** (cyan glow): SVG dependency graph — 7 nodes, 6 edges (1 broken with pulsing red), traveling data dots on healthy edges, "drift detected" warning.

All terminals use `bg-[#0e0e14]` (slightly lighter than page bg), `border-white/[0.15]`, and colored `box-shadow` glow (`rgba(accent, 0.15-0.2)`) to lift off the dark background.

On mobile: panels stack vertically (visual on top, text below). `whileInView` entrance animations.

### Copy

| Element | Content |
|---|---|
| **Eyebrow** | `The Problem` |
| **Headline** | The 'Day 2' Hangover. |
| **Sub-head** | Autonomous engineering is happening — agents are shipping real code to real production systems. But there's no infrastructure underneath to catch what breaks: |

**Problem Blocks (alternating zig-zag, with step numbers 01/02/03):**

| # | Color | Title | Description | Solved By |
|---|---|---|---|---|
| 1 | Cyan | The Amnesia Collapse | Agents forget your architectural decisions. Every session is a clean slate. Patterns get reinvented. Conventions drift. Your developers spend more time fixing AI-generated code than they saved by using AI. | `context layer` |
| 2 | Purple | The Verification Collapse | Agents write code that passes syntax checks but breaks business behavior. Migrations look correct but feel wrong to users. You merge regressions faster than ever before. | `migration layer` |
| 3 | Cyan | Context Rot | As the codebase grows, static rules files break down. Agents can't see the full system architecture. They hallucinate solutions that don't compose with anything around them. | `knowledge graph` |

Each block has: step number (35% accent opacity), icon badge with glow, title, subtitle (mono), description, and "Solved by" pill.

---

## Section 3 — The Solution: BentoGrid ("Two Layers. One Stack.")

> **Purpose:** Position the two products as layers of a unified infrastructure stack. kap10 is the low-friction wedge (individual devs install it today). Necroma is the enterprise expansion play (CIO buys it for a $5M migration).

### Layout: Vertically Stacked Layers with Prominent Stats

Each product is a **full-width glass panel** with 2-column internal layout (text + code snippet). kap10 has text left / code right; Necroma mirrors with code left / text right. Stats are embedded directly inside each product card as large, prominent numbers. A particle backbone divider connects the two layers.

```
┌─────────────────────────────────────────────┐
│            Header: "Two Layers. One Stack." │
├─────────────────────────────────────────────┤
│  ┌─ kap10 Layer ──────────────────┐  │
│  │  Description + CTA  |  [CLI snippet]  │  │
│  │  ─── 90%  3x  0 (large numbers) ──── │  │
│  └───────────────────────────────────────┘  │
│                                             │
│          ─── Backbone Particles ───         │
│                                             │
│  ┌─ Necroma Layer ───────────────────────┐  │
│  │  [CLI snippet]  |  Description + CTA  │  │
│  │  ─── 147  99.7% (large numbers) ──── │  │
│  └───────────────────────────────────────┘  │
│                                             │
│          ─── Tech Stack (inline pills) ──── │
└─────────────────────────────────────────────┘
```

**Features:**
- HUD corner brackets on each product panel (cyan for Synapse, purple for Necroma)
- Scanline hover effect on Necroma panel only
- Backbone divider: flowing particles on a vertical gradient line
- Stats rendered as **large `text-4xl/5xl` numbers** with colored `text-shadow` glow, inside each product card below a border divider
- Code blocks use `bg-[#0e0e14]`, `border-white/[0.15]`, colored `box-shadow` glow
- Animated counter on scroll (count-up from 0)
- `blurReveal` scroll animation on each layer

### Copy

| Element | Content |
|---|---|
| **Eyebrow** | `The Infrastructure` |
| **Headline** | Two Layers. One Stack. |
| **Sub-head** | Autonomous engineering needs infrastructure underneath — or it collapses on Day 2. |

**Product Layers:**

| Layer | Color | Label | Title | Description | Code Snippet | CTA |
|---|---|---|---|---|---|---|
| kap10 | Cyan | `kap10 · CLI Sidecar` | The Context Layer | Persistent memory infrastructure for agents. An AST-backed knowledge graph injected directly into your IDE agent via MCP — teaching it your patterns, conventions, and business intent across every session and every developer. | CLI terminal: `kap10 start --watch` | `Explore kap10 →` → `/kap10` |
| Necroma | Purple | `necroma · Web Portal` | The Migration Layer | Autonomous legacy modernization. Records DOM events and user flows, generates Playwright tests from observed behavior, and forces the AI to write code until the tests pass. Not syntax translation — behavioral reconstruction. | Terminal: `necroma migrate --verify` | `Explore Necroma →` → `/necroma` |

**Stats (large numbers inside product cards):**
- kap10: 90% less alien code · 3x faster onboarding · 0 Day-2 surprises
- Necroma: 147 modules scanned · 99.7% behavior preserved

**Tech Stack (bottom pills):** MCP, CozoDB, LangGraph, TypeScript, OpenHands

---

## Section 4 — Enterprise Trust: SafetyRating ("Engineering Rigor for the Agentic Age")

### Layout: Zig-Zag Alternating Rows with UI Snippets

Each trust pillar gets a **"show, don't tell" UI snippet** — a mini glass panel with fake UI — alternating left/right across rows.

```
Row 1: [UI Snippet]  ──  Text (Audit Trails)        → visual left
Row 2: Text (Privacy) ──  [UI Snippet]               → visual right
Row 3: [UI Snippet]  ──  Text (Explainability)       → visual left
```

**UI Snippets (glass terminals with colored glow shadows):**
1. **Audit Trails** (purple glow): Mini change log terminal — 5 rows of `[timestamp] [agent] [action]` in mono font with alternating row opacity, macOS traffic-light dots, blinking cursor, "REC" status indicator. Brightened text: timestamps `white/40`, agents `rail-purple brightness-125`, actions `white/70`.
2. **Privacy** (purple glow): Network diagram — "Your Code" → "AutoRail" (shielded, purple) → ✗ "Cloud" (crossed-out with pulsing red X, dimmed). Animated traveling dot on active connection, dashed blocked line.
3. **Explainability** (cyan glow): Thought signature panel — agent avatar, confidence bar (85% cyan with shimmer), tick marks at 40/70/85%, reasoning quotes with animated cyan left-border, "Approved — ready for review" status.

All snippets use `bg-[#0e0e14]`, `border-white/[0.15]`, colored `box-shadow: 0 20px 50px -10px rgba(accent, 0.12-0.15)`. Each row has a radial glow behind the snippet.

Rows separated by purple gradient line. Odd rows slide from left, even from right (`zigzagLeft` / `zigzagRight` animation variants). On mobile: stack vertically, visual always on top.

### Copy

| Element | Content |
|---|---|
| **Eyebrow** | `Enterprise Infrastructure` |
| **Headline** | Engineering Rigor for the Agentic Age. |
| **Sub-head** | AutoRail keeps the human in the loop as the reviewer and orchestrator. Agents propose. Your team approves. |

**Trust Pillars:**

| # | Title | Description |
|---|---|---|
| 1 | Audit Trails — The Change Ledger | Every autonomous decision is logged with full provenance. If the system fails, you have the black box — not a shrug and a "the AI did it." |
| 2 | Privacy-First — Local Processing | Your proprietary architecture never leaves your perimeter. The infrastructure runs where your code lives. No data exfiltration. No third-party model training on your IP. |
| 3 | Explainability — Thought Signatures | See exactly why the agent made a decision — complete with confidence scores and logic trails — before a single line of code reaches production. No black-box deployments. |

---

## Section 5 — Tech Stack: Ecosystem Marquee

Infinite horizontal scroll with high-visibility text. Dual-row marquee: primary row scrolls left (larger, `text-white/60` → hover `text-white`), secondary row scrolls right (smaller, `text-white/50` → hover `text-white/80`). Diamond separators between pills. Edge-fading gradients.

```
←← MCP · CozoDB · LangGraph · OpenHands · Playwright ··→→
←← Temporal · Supabase · TypeScript · AST · MCP ·······→→
                                          (infinite scroll)
```

---

## Section 6 — Footer

```
AutoRail — Autonomous Engineering Infrastructure

Products          Resources          Company
kap10      Documentation      About
necroma           GitHub             Enterprise
Safety Rating     Status             Contact
Ecosystem

© 2026 autorail Inc.                 Privacy  Terms
```

---

## Narrative Flow Summary

```
┌──────────────────────────────────────────────────────────────────┐
│  1. HERO         →  "Autonomous Engineering Infrastructure"      │
│                     WebGL AntigravityCloud (4096 tokens)          │
│  2. PROBLEM      →  Zig-zag panels: 3 collapses with cinematic   │
│                     visuals (terminal/graph) alternating L/R      │
│  3. STACK        →  BentoGrid: Vertically stacked product layers │
│                     ├─ kap10 = Context Layer (full-width) │
│                     │  CTA: "Explore kap10 →" → /kap10│
│                     ├─ Stats embedded as large numbers in cards   │
│                     └─ Necroma = Migration Layer (full-width)    │
│                        CTA: "Explore Necroma →" → /necroma       │
│  4. TRUST        →  SafetyRating: Zig-zag rows with UI snippets │
│                     Audit trails, Privacy flow, Explainability   │
│  5. MARQUEE      →  Ecosystem: Real tech stack (MCP, CozoDB...) │
│  6. FOOTER       →  Links & legal                                │
└──────────────────────────────────────────────────────────────────┘
```
