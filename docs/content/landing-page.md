# Main Landing Page — `/`

> **Goal:** Establish AutoRail as the **Autonomous Engineering Infrastructure** category leader.
> The platform that makes autonomous engineering seamless — persistent context, behavioral verification, and self-healing built into the development lifecycle.
>
> **Products:**
> - Code-Synapse (CLI Sidecar for IDEs) — The Context Layer
> - Necroma (Web Portal for Legacy) — The Migration Layer
>
> **Audience:** Engineering leaders evaluating AI-assisted development at scale. They've tried Cursor/Copilot and hit the "Day 2" wall.

---

## Page Flow

```
┌─────────────────────────────────────────────────────────────────────┐
│  1. HERO                                                            │
│  2. THE PROBLEM — "The 'Day 2' Hangover"                            │
│  3. THE SOLUTION / ROUTER — "The Infrastructure Stack"              │
│  4. ENTERPRISE TRUST — "Engineering Rigor for the Agentic Age"      │
│  5. TECH STACK MARQUEE                                              │
│  6. FOOTER                                                          │
└─────────────────────────────────────────────────────────────────────┘
```

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

### Copy

| Element | Content |
|---|---|
| **Eyebrow** | `The Problem` |
| **Headline** | The 'Day 2' Hangover. |
| **Sub-head** | Autonomous engineering is happening — agents are shipping real code to real production systems. But there's no infrastructure underneath to catch what breaks: |

**Problem Cards (3-column grid):**

| # | Color | Title | Description | Solved By |
|---|---|---|---|---|
| 1 | Cyan | The Amnesia Collapse | Agents forget your architectural decisions. Every session is a clean slate. Patterns get reinvented. Conventions drift. Your developers spend more time fixing AI-generated code than they saved by using AI. | `context layer` |
| 2 | Cyan | Context Rot | As the codebase grows, static rules files break down. Agents can't see the full system architecture. They hallucinate solutions that don't compose with anything around them. | `knowledge graph` |
| 3 | Purple | The Verification Collapse | Agents write code that passes syntax checks but breaks business behavior. Migrations look correct but feel wrong to users. You merge regressions faster than ever before. | `migration layer` |

---

## Section 3 — The Solution: "The Infrastructure Stack"

> **Purpose:** Position the two products as layers of a unified infrastructure stack. Code-Synapse is the low-friction wedge (individual devs install it today). Necroma is the enterprise expansion play (CIO buys it for a $5M migration).

### Copy

| Element | Content |
|---|---|
| **Eyebrow** | `The Infrastructure` |
| **Headline** | Two Layers. One Stack. |
| **Sub-head** | Autonomous engineering needs infrastructure underneath — or it collapses on Day 2. |

**BentoGrid Cards:**

| Card | Grid | Color | Label | Title | Description | Code Snippet | CTA |
|---|---|---|---|---|---|---|---|
| Code-Synapse | 2 cols | Cyan | `code-synapse` (CLI Sidecar) | The Context Layer | Persistent memory infrastructure for agents. A CLI sidecar that builds an AST-backed knowledge graph and serves it to any agent via MCP — with skill libraries that teach your patterns, conventions, and business intent. | CLI terminal output: `code-synapse start --watch` showing MCP server, knowledge graph stats, skill libraries active, agent connections | `Explore Code-Synapse →` → `/code-synapse` (page navigation, NOT Cal.com) |
| Stats | 1 col | Mixed | `By the Numbers` | *(stats list)* | 90% less alien code · 3x faster onboarding · 0 Day-2 surprises · 147 modules scanned · 99.7% behavior preserved | — | — |
| Tech Stack | 1 col | Neutral | `Built On` | *(logos)* | MCP, CozoDB, LangGraph, TypeScript, OpenHands | — | — |
| Necroma | 2 cols | Purple | `necroma` (Web Portal) | The Migration Layer | Autonomous legacy reclamation. Records DOM events and user flows, generates Playwright tests from observed behavior, and forces the AI to write code until the tests pass. Not syntax translation — behavioral reconstruction. | Terminal output: `necroma migrate --verify` | `Explore Necroma →` → `/necroma` (page navigation, NOT Cal.com) |

---

## Section 4 — Enterprise Trust: "Engineering Rigor for the Agentic Age"

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

## Section 5 — Tech Stack Marquee

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
Code-Synapse      Documentation      About
Necroma           Blog               Careers
                  GitHub             Contact

© 2026 AutoRail. All rights reserved.
```

---

## Narrative Flow Summary

```
┌──────────────────────────────────────────────────────────────────┐
│  1. HERO         →  "Autonomous Engineering Infrastructure"      │
│  2. PROBLEM      →  No infra underneath = Day 2 collapse         │
│  3. STACK        →  Two layers solve it                          │
│                     ├─ Code-Synapse = Context Layer               │
│                     │  CTA: "Explore Code-Synapse →" → /code-synapse│
│                     └─ Necroma = Migration Layer                  │
│                        CTA: "Explore Necroma →" → /necroma        │
│  4. TRUST        →  Enterprise-grade: audit, privacy, explain    │
│  5. MARQUEE      →  Real tech stack (MCP, CozoDB, Playwright)   │
│  6. FOOTER       →  Links & legal                                │
└──────────────────────────────────────────────────────────────────┘
```
