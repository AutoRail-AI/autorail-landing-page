# unerr Page — `/unerr`

> **Goal:** Position unerr as **The Missing Backend for AI Coding Agents** — institutional memory, predictive guardrails, rewind, and autonomous DevSecOps baked directly into your AI agent's context window.
>
> *"Code as fast as your AI can type. unerr will catch the mistakes."*
>
> **Audience spectrum:** Indie hackers building solo with AI → startup tech leads (10–50 eng) → engineering managers (50–200 eng) → CTOs / VP Engineering → SRE / DevSecOps
>
> **Competitive frame:** unerr is NOT a PR review bot (CodeRabbit, Continue.dev). It is a **preventive backend** — injecting truth into the agent's context window BEFORE code is written, not reacting AFTER a PR is opened.

---

## Product Definition

**unerr** is the missing backend for your AI coding agent. You keep Cursor. You keep Copilot. You keep Claude Code. unerr injects the truth — your actual architecture, your actual conventions, your actual blast radius — directly into their context windows so they stop hallucinating your codebase.

* **For the developer:** Zero workflow changes. One command to connect. Your coding flow feels identical; the output is dramatically better.
* **The infrastructure:** A hosted MCP server that builds a living knowledge graph of your entire codebase — every function, class, module, their relationships, their call chains, and their business purpose. Updated within 30 seconds of every push.

Whether you're a solo founder building a SaaS entirely with AI, or a VP Engineering managing 200 developers merging AI-generated code daily — unerr is the senior Staff Engineer who never sleeps, never goes on vacation, and reviews every line before it ships.

---

## Page Flow & Architecture

```text
┌─────────────────────────────────────────────────────────────────────┐
│  1. HERO — "Code as fast as your AI can type" + Agent Bar            │
│  2. METRICS STRIP — Enterprise Credibility                           │
│  3. THE PROBLEM — "The 4 Walls of AI Coding" (Stage Cards)          │
│  4. HOW IT WORKS — The 4 Layers (Sticky Visual + Scroll)            │
│  5. THE CAPABILITIES — Bento Grid (Blast Radius, Shield, etc.)      │
│  6. THE GUARDRAIL SUITE — Enterprise Features (Tabbed Categories)   │
│  7. WHO IT'S FOR — Audience Spectrum (Role Cards)                    │
│  8. TRUST & SECURITY — Glass Cards                                   │
│  9. PRICING — 3-Tier Glass Cards                                     │
│ 10. EARLY ACCESS — Waitlist                                          │
│ 11. FAQ — Objection Handling                                         │
│ 12. BOTTOM CTA & FOOTER                                             │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Section 1 — Hero

| Element | Content |
| --- | --- |
| **Badges** | `SaaS` · `Hosted MCP Server` |
| **Headline** | The Missing Backend for AI Code. |
| **Tagline** | Code as fast as your AI can type. unerr will catch the mistakes. *(styled `text-xl text-white/80 font-medium`)* |
| **Explanation** | unerr connects to your repo and injects your actual architecture, conventions, and blast radius into your AI agent's context window — so it stops hallucinating your codebase. One command. Zero workflow changes. *(styled `text-lg text-muted-foreground`)* |
| **Primary CTA** | Terminal-style `npx @autorail/unerr` snippet (see design note below) |
| **Secondary CTA** | `Join Waitlist` (scrolls to #early-access) |
| **Micro-copy** | "Zero to protected in 60 seconds. No credit card required." |
| **Agent Support Bar** | *Dimmed text under CTA:* `Works with:` Cursor · Claude Code · Windsurf · Copilot · Devin · OpenHands |

**Hero CTA Design — Terminal Snippet:**

> Do NOT render the `npx` command as a standard pill button. Style it as a miniature terminal snippet:
> - Dark `bg-[#0e0e14]` rounded pill with `border-white/[0.15]`
> - Left side: `$` prompt character in `text-white/40 font-mono`
> - Center: `npx @autorail/unerr` in `text-electric-cyan font-mono font-medium`
> - Right side: Glowing copy-to-clipboard icon (clipboard → checkmark on click)
> - Subtle cyan `box-shadow` glow on hover
> - This triggers a Pavlovian "terminal command → copy → run" response in developers. It signals: *"This is a real tool you can use right now,"* not a marketing page.

**Visual Asset:** WebGL Neural Constellation. Chaotic particles morphing into a structured, connected graph network — representing codebase chaos becoming architectural clarity. See `components/graphics/NeuralConstellation.tsx`.

---

## Section 2 — Metrics Strip

*A horizontal dark-glass strip sitting just below the fold to instantly establish engineering credibility.*

| Value | Label |
| --- | --- |
| `< 200ms` | Guardrail Latency |
| `$0` | LLM Token Cost per Check |
| `30s` | Re-index After Push |
| `6+` | AI Agents Supported |

> **Why `$0`:** This is a massive competitive differentiator. LLM-based reviewers (CodeRabbit, Continue.dev) burn tokens on every PR. unerr uses deterministic AST matching — zero token cost at enforcement time. Showing `$0` instantly raises the question *"Wait, how?"* and leads naturally into the "Deterministic AST" explanation. It also signals that this scales without ballooning costs.

Styled: Cyan values (`text-3xl font-grotesk font-bold text-electric-cyan`) + mono uppercase labels. Glass card grid. 4-column on desktop, 2×2 on mobile.

---

## Section 3 — The Problem: "The 4 Walls of AI Coding"

> **Design Directive:** Do not use dense paragraphs. Use bold, scannable text. The red glow on the cards should escalate from faint to aggressive as the user scrolls down.

| Element | Content |
| --- | --- |
| **Eyebrow** | `The Problem` |
| **Headline** | AI made you 10x faster at writing the wrong code. |
| **Sub-head** | AI coding tools have made every developer 10x faster. They've also made it 10x faster to write the wrong code — and to do it at scale before anyone notices. Teams adopting vibe coding hit the same four walls: |

**The Critical Failures (Stage Cards):**

| # | Title | The Pain (Bold) | The Reality |
| --- | --- | --- | --- |
| 01 | The AI Doesn't Know Your Codebase | **The Alien Code Problem** | It generates code that technically compiles but ignores your domain language, violates your naming conventions, and misses the unwritten architectural rules your senior engineers carry in their heads. |
| 02 | Nobody Sees the Blast Radius | **The Silent Breakage** | A function gets quietly renamed. Three downstream services break. The AI had no way to know that function was called in 47 places across your payment flow. |
| 03 | Rewinding Is Manual and Painful | **The Loop of Death** | The AI confidently broke something. Now you're hunting through git history trying to figure out what changed, why, and what to restore. The AI breaks it again. You burn hours going in circles. |
| 04 | Security Becomes an Afterthought | **The Tuesday Incident** | The AI writes a perfectly functional database query — inside a request handler loop, spawning N+1 queries per user. Or it logs a response payload containing user PII. The code works. The incident happens on a Tuesday at 2am. |

**The Friction Multiplier (Closing Banner):**

> **...And the friction compounds.**
> Every single day, unsupervised AI agents silently introduce security vulnerabilities, ignore dependency guidelines, break bounded contexts, hallucinate APIs, and bloat your codebase with redundant logic. You're paying for speed, but spending all your time babysitting the output.

---

## Section 4 — How It Works: "The 4 Layers"

> **Design Directive:** Apple-style **sticky visual + scroll** layout. The left panel stays pinned with a large crossfading illustration; the right column scrolls through 4 layer cards. Each card triggers the corresponding visual via IntersectionObserver. On mobile, falls back to stacked cards with inline visuals.
>
> **Critical CSS:** The parent `<section>` must use `overflow-x-clip` (NOT `overflow-hidden`) to preserve `position: sticky` on the left panel.

| Element | Content |
| --- | --- |
| **Eyebrow** | `How It Works` |
| **Headline** | Four layers of intelligence. One MCP connection. |
| **Sub-head** | unerr connects to your repo and builds a living knowledge graph of your entire codebase. On top of that graph, four overlapping layers of intelligence protect your architecture. |

### Desktop Layout (`lg:`)

```text
┌──────────────────────────────┬──────────────┐
│                              │  01 ░░░░░░░  │
│   STICKY VISUAL PANEL        │  02 ░░░░░░░  │
│   (crossfades on scroll)     │  03 ░░░░░░░  │  ← scrolls
│   position: sticky; top: 6rem│  04 ░░░░░░░  │
│                              │              │
└──────────────────────────────┴──────────────┘
```

- Grid: `lg:grid-cols-[1fr_380px]`
- Visual panel: `sticky top-24`, dark `#0e0e14` bg, `min-height: 420px`, cyan glow shadow
- Transitions: `AnimatePresence mode="wait"` with blur+slide in/out
- Each card wrapper: `min-h-[50vh]` with `flex items-center`
- Observer: `rootMargin: "-40% 0px -40% 0px"` — 20% center trigger band
- Active card: `bg-white/[0.05] border-electric-cyan/20` + cyan glow; inactive: `opacity-40`

### The 4 Layers

| # | Title | Subtitle | Icon | Visual (Left Panel) | Description |
| --- | --- | --- | --- | --- | --- |
| 01 | Institutional Memory | The Brain | `Brain` | **Blueprint Dashboard:** Business swimlane map (Checkout, Auth, Notifications) with entity nodes, call-chain edges, and confidence scores. Living, not static. | unerr reads your entire codebase and generates plain-English justifications for every entity: what it does, why it exists, which business domain it belongs to, what patterns it implements. Your AI agent consults this map before writing code — so it understands where a new function fits before touching a file. **Replaces:** The tribal knowledge only your senior engineers have. The README that's six months out of date. |
| 02 | Real-Time Sync | The Nervous System | `Zap` | **Sync pipeline:** GitHub webhook → file diff → incremental re-index → cascade analysis → updated graph. Animated particle flow from left to right, "30s" badge pulsing. | Every push triggers an incremental re-index: only changed files, cascading re-analysis to everything the changed code affects — within 30 seconds. Your AI agent always has current knowledge. No manual syncing. No stale context. Also supports `unerr push` for local repos not yet on GitHub. |
| 03 | Prompt Ledger & Rewind | The Black Box | `RotateCcw` | **Timeline scrubber:** Horizontal version timeline (v1.1–v1.7) with green/red nodes. "Restore" button, "Shadow Preview" panel showing file diff, "Anti-Pattern Rule" badge auto-generated. Circuit breaker indicator. | Every AI change is tracked: the prompt, the files touched, the result. When the AI breaks something: (1) click Rewind to restore to last known-good state, (2) unerr auto-generates an Anti-Pattern Rule so the mistake never repeats, (3) Shadow Rewind preview shows exactly which files change. A Circuit Breaker halts the AI if it makes the same breaking change 4+ times in 10 minutes. **Replaces:** Frantically searching git history. The pit of despair when the AI destroys a working function for the fifth time. |
| 04 | Pattern Enforcement | The Constitution | `ShieldCheck` | **Split visual — "Us vs. Them" workflow comparison** (see design note below) + Rules dashboard with adherence rates and enforcement toggles. | unerr mines your codebase for recurring patterns — naming conventions, design patterns, architectural structures — and gives each one an adherence rate. High-confidence patterns become enforceable rules at three levels: **Suggest** (informational), **Warn** (strong nudge), **Block** (hard stop). Rules are contextual: they apply at org, repo, path, or branch level. The engine uses a two-pass hybrid: fast structural AST scan (ast-grep/Semgrep) → semantic enrichment via knowledge graph to eliminate false positives. |

**Layer 04 Visual — "Prevention vs. Reaction" Comparison:**

> Inside the sticky visual panel for Layer 04, render a compact side-by-side comparison:
>
> ```text
> ┌─── Standard PR Bot ───────────┐  ┌─── unerr ──────────────────────┐
> │ 1. Agent writes code           │  │ 1. Agent checks rules via MCP  │
> │ 2. Opens PR                    │  │ 2. Writes compliant code       │
> │ 3. Wait 5 min for LLM review   │  │ 3. PR merges cleanly           │
> │ 4. Get 15 subjective comments  │  │                                │
> │ 5. Go back to IDE and fix      │  │ ✓ $0 tokens. <200ms. Done.     │
> │ 6. Re-push. Wait again.        │  │                                │
> └────────────────────────────────┘  └────────────────────────────────┘
> ```
>
> Style: Two glass terminal panels side by side. Left panel has red/warning tint (`border-red-500/20`, dim). Right panel has cyan glow (`border-electric-cyan/25`, bright). Left steps use `text-white/50` (faded). Right steps use `text-electric-cyan`. Checkmark is `text-success`.

### Mobile Layout

Falls back to vertically stacked cards (`lg:hidden`). Each card has a compact header row (icon + number + title + subtitle) followed by the full visual inline below.

### Data

```ts
const LAYERS = [
  { num: "01", title: "Institutional Memory", subtitle: "The Brain",          icon: Brain,       detail: "Your AI agent finally knows your codebase." },
  { num: "02", title: "Real-Time Sync",       subtitle: "The Nervous System", icon: Zap,         detail: "30 seconds. Always current." },
  { num: "03", title: "Prompt Ledger & Rewind", subtitle: "The Black Box",   icon: RotateCcw,   detail: "Every AI decision, tracked and reversible." },
  { num: "04", title: "Pattern Enforcement",  subtitle: "The Constitution",   icon: ShieldCheck, detail: "Deterministic rules. Not LLM vibes." },
]
```

---

## Section 5 — Capabilities: "What unerr Catches"

> **Design Directive:** Bento Grid with high-fidelity UI mockups. This section shows the **live features** — the things that make developers screenshot and share. Marketing emphasis: "Saved Your Job" receipts.

| Element | Content |
| --- | --- |
| **Eyebrow** | `Capabilities` |
| **Headline** | The things nobody else catches. |
| **Sub-head** | unerr shifts from post-mortem analytics to a live command center. These are the features that make developers say "ok this is actually insane." |

**Bento Grid Cards (1 hero + 2×2):**

| # | Layout | Title | Description | Inline Visual |
| --- | --- | --- | --- | --- |
| 01 | Hero (full-width) | Blast Radius Visualization | Before any change merges, unerr traverses the call graph N hops outward from the changed function to every API boundary and UI component it reaches. "This change touches 47 callers. 3 of them are on your payment flow." Your AI agent gets this analysis BEFORE writing the change. | **SVG:** Call graph radiating from center node, with highlighted propagation paths. Red nodes on payment flow. Badge: "47 callers · 3 on payment flow". |
| 02 | 2×2 Grid | The Spaghetti Shield | Automated PR review: Semgrep rules → knowledge graph impact analysis → line-level review comments for BLOCKER items only. Low-risk PRs (HORIZONTAL/UTILITY changes) get automatic Semantic LGTM. Click-to-Commit fixes via GitHub suggestion blocks. | **Terminal:** `spaghetti-shield.log` with SCAN → BLOCKED (red) → AUTO-FIX (cyan) → LGTM (green) entries. |
| 03 | 2×2 Grid | Rewind & Circuit Breaker | One click restores to last known-good state. Auto-generates anti-pattern rules. Shadow preview before commit. Circuit breaker halts hallucination loops (4+ same failures in 10 min). | **UI:** Timeline scrubber with version pills (green/red). "Restore" button. Circuit breaker warning badge. |
| 04 | 2×2 Grid | Architectural Drift Detection | When a file changes, unerr computes semantic drift — the function that was "validates user session" silently becoming "also transforms response payloads." Drift Alerts fire automatically, query Git blame for affected teams, create GitHub issues. | **Terminal:** Drift alert panel: entity name, old justification vs. new, cosine distance bar, "Issue Created" badge. |
| 05 | 2×2 Grid | Auto-Generated ADRs & Glossary | When a PR merges significant new topology, unerr auto-generates and commits an Architecture Decision Record as a follow-up PR. Also maintains a live Domain Glossary — your ubiquitous language, extracted from justifications, searchable. | **Terminal:** `architecture-report.pdf` with module count, decision count, domain terms, "Committed via PR #312" badge. |

**"Saved Your Job" Receipt (featured inline example):**

> This is the type of output unerr produces. These summaries are designed to be shareable — because the natural reaction when you see this is to screenshot it and post it.

```text
⛔ unerr blocked: N+1 Query Pattern Detected

Your agent was about to call db.users.findMany() inside a forEach loop
in processCheckoutItems() — generating 1 query per cart item.

Blast radius: 12 callers affected. 2 are on the payment flow.
Est. impact at 1,000 concurrent users: ~12,000 unnecessary DB round trips/min.

Suggested fix: batch query applied. ✓ Click to commit.
```

Rendered as a glass terminal panel with cyan glow, animated line-by-line reveal.

**Wall of Love — Social Proof Strip:**

> Directly beneath the "Saved Your Job" receipt, add a horizontal scrolling strip of social proof cards. This visually instructs users on what they should do when unerr saves them — share it.
>
> **Initial state (pre-launch):** 3–4 mocked-up tweet cards showing the kind of reactions we expect:
> - *"unerr just stopped my Cursor agent from dropping a prod column. I'm never turning this off."*
> - *"It caught an N+1 query inside my checkout loop. At 1k concurrent users that would have been 12k unnecessary DB calls per minute."*
> - *"The blast radius visualization alone is worth it. I had no idea renaming that utility function would touch 47 callers."*
>
> **Post-launch:** Replace with real tweets/X posts and testimonials from beta users.
>
> Style: Glass cards (`bg-white/[0.03] border-white/10`), horizontal auto-scroll (same pattern as Ecosystem marquee), X/Twitter bird icon + username + avatar placeholder. Subtle cyan glow on hover. `text-sm text-white/70` for tweet text.

---

## Section 6 — The Enterprise Guardrail Suite

> **Design Directive:** Tabbed category layout inside a large glass panel. Each tab reveals a grid of guardrail cards. This section targets engineering managers, CTOs, SREs, and DevSecOps buyers — the enterprise expansion play.

| Element | Content |
| --- | --- |
| **Eyebrow** | `Enterprise` |
| **Headline** | The guardrails your AI agents don't know they need. |
| **Sub-head** | For organizations where AI coding agents touch regulated, high-stakes, or security-sensitive systems. Purpose-built for the problems that only become visible at organizational scale. |

**Tab Categories:**

### Tab 1: Security & Compliance

| Guardrail | Description |
| --- | --- |
| PII Exfiltration (Telemetry Trap) | Taint analysis from PII-tagged entities to unprotected logging sinks. Catches the AI when it accidentally logs a user's email alongside a debug payload. |
| Cloud IAM Privilege Escalation | Detects when new infrastructure code grants wildcard permissions or escalates roles beyond least privilege. |
| Toxic Supply Chain | Flags new dependency additions with anomalous version patterns or known supply chain risk indicators. |
| Data Residency Violations | Detects cross-region data flows that would violate GDPR or data sovereignty requirements. |
| Trade Secret Exfiltration | Monitors for code paths where proprietary business logic is exposed via unsecured APIs or logging. |

### Tab 2: Data Safety

| Guardrail | Description |
| --- | --- |
| Destructive Schema Drift | Catches column drops/renames in migration files without a corresponding safe migration script (blue/green, expand/contract). |
| Cache Desync Detection | Flags when a data model changes but its cache layer isn't invalidated. |
| State Machine Orphaning | Detects when a schema change makes existing state machine transitions unreachable. |
| Ghost Migration Detection | Finds database migrations committed but never applied to a tracked environment. |

### Tab 3: Production Reliability

| Guardrail | Description |
| --- | --- |
| N+1 Query Detection | AST rule: database call inside a loop body. The most common performance regression in AI-generated data access code. |
| Connection Pool Exhaustion | Detects infrastructure client instantiation (Prisma, Redis) inside request handler scope. |
| Idempotency Risk | Flags webhook/trigger handlers that mutate state without an idempotency key or distributed lock. |
| Rate Limit Blindness | Detects external API calls inside unbounded loops without backoff logic. |
| Zero-Downtime Migration Violations | Blocks deployments where schema changes don't follow a safe migration path. |
| Mock Theater Detection | Identifies test files where the mock-to-assertion ratio means the tests aren't testing anything real. |

### Tab 4: Architecture Integrity

| Guardrail | Description |
| --- | --- |
| Bounded Context Bleed | Catches domain entities crossing service boundaries they shouldn't. Your payment module shouldn't import your user notification internals. |
| Trust Boundary Violations | Graph traversal from user-input sources to database/API sinks, validating every path passes through auth/validation. |
| Business Logic Invariants | Enforces that financial, inventory, and critical mutations are always preceded by required validation. |
| Resilience Scoring (NFR Drift) | Per-entity score: does this external call include retry/timeout/circuit-breaker patterns? |
| Event Blackhole Detection | Identifies domain events published but with no registered consumer. |
| Zombie Infrastructure | Detects provisioned cloud resources with no active code references. |

### Tab 5: Multi-Agent Governance

| Guardrail | Description |
| --- | --- |
| Swarm Deadlock (Agent-on-Agent Collision) | When multiple AI agents work the same codebase simultaneously, detects conflicting edits and deadlock patterns before merge. |
| Context Bankruptcy | Detects when an agent operates with context so stale its suggestions will conflict with recent changes — halts before damage. |
| Idiomatic Drift | Tracks whether AI-generated code drifts from your team's established framework patterns, even when syntactically valid. |
| Cognitive Debt Score | Measures the rewind-to-commit ratio per feature area, surfacing where human-AI alignment is breaking down. |

---

## Section 7 — Who It's For

> **Design Directive:** Horizontal scrollable role cards on mobile, 3×2 grid on desktop. Each card has a role icon, title, and one punchy sentence. Light cyan glow on hover.

| Element | Content |
| --- | --- |
| **Eyebrow** | `Built For` |
| **Headline** | From solo builders to enterprise teams. |
| **Sub-head** | unerr grows with you — from your first `npx` to your thousandth developer. |

**Role Cards:**

| Icon | Role | Why unerr Matters |
| --- | --- | --- |
| `Rocket` | Indie Hacker / Vibe Coder | You're building a massive SaaS by yourself with AI. unerr is the Senior Staff Engineer who ensures your app won't collapse at 10,000 users. Build beyond your skill level — safely. |
| `Users` | Startup Tech Lead (10–50 eng) | You're the only person who knows the codebase rules. unerr encodes those rules so your AI agents respect them — even when you're not in the room. |
| `Building2` | Engineering Manager (50–200 eng) | AI code is flowing into your monorepo from every direction. unerr is your governance layer: auditable, enforceable, non-intrusive. |
| `Shield` | CTO / VP Engineering | You need proof that AI adoption isn't silently rotting your architecture or creating security liabilities. unerr gives you that evidence. |
| `Server` | SRE / Platform Engineer | unerr catches N+1 queries, connection pool exhaustion, missing retry logic, and zero-downtime violations before they page you at 2am. |
| `Lock` | DevSecOps / Security | unerr detects PII exfiltration, IAM privilege escalation, supply chain anomalies, and data residency violations — automatically. |

---

## Section 8 — Trust & Security

> **Design Directive:** Use dark glassmorphism. Subtle lock/shield watermark behind the text.

| Element | Content |
| --- | --- |
| **Eyebrow** | `Trust & Security` |
| **Headline** | Enterprise security, zero-friction setup. |
| **Sub-head** | We supervise your code; we don't exploit it. |

**Trust Pillars (3-column glass cards):**

| # | Icon | Title | Description |
| --- | --- | --- | --- |
| 01 | Lock | End-to-End Encryption | Encrypted in transit (TLS 1.3) and at rest (AES-256). We process only the structural metadata needed to build your knowledge graph. |
| 02 | Server | SOC 2 Path | Audit logs, strict access controls, and enterprise-grade retention policies. Single-tenant data isolation. |
| 03 | Trash2 | Data Deletion Guarantee | Disconnect your repo, and your data is permanently purged within 24 hours. **No model training on your code — ever.** |

**Bottom Statement:** *"We built unerr for builders who take their code seriously. If you wouldn't trust us with your repo, we haven't earned your business."*

---

## Section 9 — Pricing

> **Design Directive:** 3 glass cards side by side. Growth tier visually emphasized (larger, cyan border glow). Launch tier has a "Free" badge. Scale tier has "Contact Us" CTA.

| Element | Content |
| --- | --- |
| **Eyebrow** | `Pricing` |
| **Headline** | Start free. Scale when you're ready. |
| **Sub-head** | No credit card for Launch. No commitment. Just instant codebase awareness. |

**Tiers:**

| Tier | For | Price | Key Capabilities | CTA |
| --- | --- | --- | --- | --- |
| **Launch** | Indie devs, small teams | Free | MCP integration, knowledge graph, rewind, blast radius, ADRs, PR review | `Get Started` |
| **Growth** | Scaling startups | TBD/month | + Trust boundary analysis, resilience scoring, N+1 detection, API contract breakage, cognitive debt score | `Join Waitlist` |
| **Scale** | Enterprise / regulated | Contact us | + Full security suite (PII, IAM, supply chain, data residency), multi-agent governance, bounded context enforcement, dedicated support | `Talk to Us` |

---

## Section 10 — Early Access / Waitlist

> **Design Directive:** Create an exclusive, invitation-style card layout.

| Element | Content |
| --- | --- |
| **Eyebrow** | `Early Access` |
| **Headline** | Be the first to try unerr. |
| **Sub-head** | Join the waitlist. We'll onboard you personally when your seat is ready. |

**Form:** Email input + "Join Waitlist" button → POST `/api/waitlist` → success state with confirmation. Uses reusable `WaitlistForm` component.

**Founding Member Benefits:**
* Locked-in early pricing forever.
* Personal onboarding call with the engineering team.
* Direct access to shape the product roadmap.

---

## Section 11 — FAQ

| Element | Content |
| --- | --- |
| **Eyebrow** | `FAQ` |
| **Headline** | Questions you're already thinking. |

| # | Question | Answer |
| --- | --- | --- |
| 01 | Does unerr slow down my AI? | No. unerr operates on the MCP channel with guardrail latency under 200ms. Your coding flow feels identical; the output is dramatically better. |
| 02 | How is unerr different from CodeRabbit or other PR review bots? | PR bots react AFTER the code is written. unerr injects your architecture into the agent's context BEFORE code is written — prevention, not reaction. And our enforcement uses deterministic AST matching ($0 token cost, 100% precision), not "send the diff to an LLM and hope." |
| 03 | Can I still prompt my AI directly? | Absolutely. You can bypass unerr, override suggestions, or turn it off for a session. You're always in control. |
| 04 | My code is proprietary. Is it safe? | Yes. Single-tenant data isolation. We never train models on your code. Disconnect, and your data is permanently purged within 24 hours. |
| 05 | Does it work with my IDE? | If your agent supports the Model Context Protocol (MCP) — Cursor, Claude Code, Windsurf, Copilot, Devin, OpenHands — unerr works out of the box. One URL, any agent. |
| 06 | How long does setup take? | 60 seconds. Run `npx @autorail/unerr`, authorize GitHub, and unerr auto-detects your IDE, connects your repo, and surfaces your first architectural insights immediately. |
| 07 | What about teams with multiple AI agents working simultaneously? | unerr's Multi-Agent Governance detects conflicting edits, stale context, and swarm deadlocks before they merge. It's the only tool built for fleets of AI agents committing code simultaneously. |

---

## Section 12 — Bottom CTA

| Element | Content |
| --- | --- |
| **Headline** | Let your AI write the code. Let unerr protect the architecture. |
| **Description** | Stop fixing your AI's mistakes. unerr catches them before they happen — institutional memory, predictive guardrails, and autonomous DevSecOps in one MCP connection. |
| **CTA** | Inline `<WaitlistForm />` (email input + "Join Waitlist" button — same reusable component, without benefits list) |

---

## Section 13 — Footer

> Same as main landing page footer.

---

## Competitive Positioning (Internal — Not On Page)

> This section informs copy tone and visual emphasis. Do NOT render as a visible section.

### Why unerr Wins Against Standard PR Bots

| Dimension | Standard PR Bots | unerr |
| --- | --- | --- |
| **When** | React after PR is opened | Prevent before code is written (MCP) |
| **How** | Send diff to LLM, get subjective comments | Deterministic AST scan + semantic enrichment ($0 token cost) |
| **Awareness** | Text diff only | Full knowledge graph — call chains, blast radius, business domains |
| **Noise** | 15 subjective comments per PR | Only BLOCKER-severity inline threads; everything else in Check Run summary |
| **Recovery** | None — you fix it manually | Rewind + auto-generated anti-pattern rules |
| **Multi-Agent** | Not addressed | Swarm deadlock, context bankruptcy, idiomatic drift detection |

### The Emotion to Sell: "Fearless Speed"

Do NOT sell governance, compliance, or gatekeeping. Developers hate those words. Sell **freedom**:

- *"Code as fast as your AI can type. unerr will catch the mistakes."*
- *"The adult in the room for your AI coding agent."*
- *"Stop fixing your AI's mistakes. We'll catch them before they happen."*
- *"Move as fast as you want — we're watching the things you'd never think to check."*

Frame standard PR bots as "speed bumps" that slow development. Frame unerr as "guardrails on a racetrack" that let you push at 10x speed without fear.

### The PLG Viral Loop

1. **60-Second Aha:** `npx @autorail/unerr` → instant setup → "unerr identified 3 anti-patterns your agent was about to hallucinate."
2. **"Saved Your Job" Receipt:** Intercept summaries designed to be screenshotted and shared on X/LinkedIn.
3. **Bottom-Up Spread:** Solo dev → team → engineering manager → CTO → Scale Tier contract.

---

## Engineering & UI Directives

> **Reference:** See `app/unerr/unerr-product-page.tsx` and `components/graphics/NeuralConstellation.tsx` for current implementation.
>
> **Note:** This content doc reflects the updated "Missing Backend" positioning. The current implementation reflects the older "AI Tech Lead" positioning and will need to be updated to match this spec.

### Visual Language: "Industrial Glass"
- **Base Material:** `bg-white/[0.04–0.05]` + `backdrop-blur-[12px]`
- **Border:** `border-white/[0.12–0.15]` (default) → `border-electric-cyan/25` (hover/active)
- **Terminal Panels:** `bg-[#0e0e14]` with colored `box-shadow` glows
- **Glass Cards:** `bg-white/[0.04] border border-white/[0.12] backdrop-blur-[12px]`
- **Color Palette:** Cyan dominant on Void Black (`#0A0A0F`)

### Typography & Spacing (The "Enterprise" Feel)
- **Inter** for body text — highly legible, clean lines
- **Space Grotesk** for headlines — technical, modern edge
- **JetBrains Mono** for code/technical elements
- **Whitespace:** Generous padding between sections. Enterprise sites breathe.

### Section Layout Variety

| Section | Layout Type |
| --- | --- |
| Hero | Asymmetric text + WebGL constellation morph + agent bar + `npx` copy button |
| Metrics Strip | 4-column glass stat cards with cyan values |
| The Problem | 4 vertically stacked stage cards with escalating red glow |
| How It Works | Sticky visual + scrolling layers (4 layers, like current LifecycleSection) |
| Capabilities | Bento grid (1 hero full-width + 2×2) with inline visuals + "Saved Your Job" receipt |
| Guardrail Suite | Large glass panel with tabbed categories (5 tabs) |
| Who It's For | 3×2 grid of role cards (horizontal scroll on mobile) |
| Trust & Security | 3-column trust pillar cards (horizontal row) |
| Pricing | 3 glass tier cards, Growth emphasized |
| Early Access | Centered glass card with email form + benefits list |
| FAQ | Accordion inside glass container |
| Bottom CTA | Centered glass panel with HUD brackets + inline waitlist form |

### Animation Restrictions
- Keep animations purposeful. Do not bounce or over-animate text.
- Use Framer Motion's `opacity` and `transform: translateY(10px)` for subtle scroll-reveals.
- "The Snap" easing: `[0.16, 1, 0.3, 1]`
- Ensure the WebGL background in the Hero is dimmed enough that the primary CTA holds the highest contrast.
- `blurReveal` variant for section headers throughout.
- "Saved Your Job" receipt: animated line-by-line terminal reveal on scroll.
- Guardrail Suite tabs: instant switch, no animation delay.

### Key Implementation Changes from Previous Version

| What Changed | Old | New |
| --- | --- | --- |
| Positioning | "The AI Tech Lead" | "The Missing Backend for AI Code" |
| Tagline | "Stop babysitting your AI" | "Code as fast as your AI can type" |
| Primary CTA | `Join Waitlist` | `Get Started Free` (`npx` command) |
| Problem framing | Solo vibe-coder focused (4 stages) | Full-spectrum (4 walls of AI coding) |
| Solution section | 5 capability cards | 4 Layers (sticky scroll) + 5 capability cards (bento) |
| New sections | — | Guardrail Suite (tabbed), Who It's For (role cards), Pricing (3 tiers) |
| Lifecycle section | 6-step lifecycle | Replaced by 4 Layers |
| Agent bar | Cursor, Claude Code, Windsurf, OpenHands | + Copilot, Devin |
| Metrics strip | 3 metrics | 4 metrics (added "30s re-index") |
| FAQ | 4 questions | 7 questions (added CodeRabbit comparison, multi-agent, setup time) |
| Bottom CTA | "You supply the vibe" | "Let your AI write the code" |
