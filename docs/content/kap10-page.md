# kap10 Page — `/kap10`

> **Goal:** Position kap10 as **The AI Tech Lead** — a hosted senior pair programmer that supervises your coding agents (Cursor, Claude Code, Windsurf) so they stop breaking your app.
>
> *"Stop babysitting your AI. Turn your favorite 'Typist' into a Senior Developer."*

---

## Product Definition & Enterprise Posture
**kap10** is a fully hosted SaaS that sits invisibly between the developer and their coding agent.
* **For the User:** It provides the frictionless experience of a No-Code builder with the ownership of a custom-coded application.
* **The Infrastructure:** A highly secure, low-latency, hosted MCP server that builds a living Business Intent Graph of the repository. It reviews AI output against architectural rules in milliseconds.

---

## Page Flow & Architecture

```text
┌─────────────────────────────────────────────────────────────────────┐
│  1. HERO — "The AI Tech Lead" + Supported Agents Bar                │
│  2. METRICS STRIP — Enterprise Credibility (<200ms, SOC2 path)      │
│  3. THE PROBLEM — "The AI Hostage Situation" (Generic + 4 Pillars)  │
│  4. THE SOLUTION — "Virtual CTO" (High-Fidelity Bento Grid)        │
│  5. UNDER THE HOOD — 6-Step Lifecycle (Sticky Visual + Scroll)      │
│  6. TRUST & SECURITY — "Your Code Stays Yours" (Glass Cards)        │
│  7. EARLY ACCESS — "Founding Member" Waitlist                       │
│  8. FAQ — Objection Handling                                        │
│  9. BOTTOM CTA & FOOTER                                             │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Section 1 — Hero

| Element | Content |
| --- | --- |
| **Badges** | `SaaS` · `Hosted MCP Server` |
| **Headline** | The AI Tech Lead. |
| **Tagline** | Stop babysitting your AI. Turn your favorite "Typist" into a Senior Developer. *(styled `text-xl text-white/80 font-medium`)* |
| **Explanation** | kap10 is a hosted MCP server that supervises your AI coding agent—expanding prompts, reviewing output, and preventing regressions before they reach your files. *(styled `text-lg text-muted-foreground`)* |
| **Primary CTA** | `Join Waitlist` (scrolls to #early-access) |
| **Micro-copy** | "Limited early access — founding members get personal onboarding." |
| **Agent Support Bar** | *Dimmed text under CTA:* `Works with:` Cursor · Claude Code · Windsurf · OpenHands |

**Visual Asset:** WebGL Neural Constellation. Chaotic particles morphing into a structured, connected graph network. See `components/graphics/NeuralConstellation.tsx`.

---

## Section 2 — Enterprise Metrics Strip

*A horizontal dark-glass strip sitting just below the fold to instantly establish engineering credibility.*

| Value | Label |
| --- | --- |
| `< 200ms` | Prompts & Reviews |
| `4+` | Major AI Agents Supported |
| `24hr` | Data Deletion Guarantee |

Styled: Cyan values (`text-3xl font-grotesk font-bold text-electric-cyan`) + mono uppercase labels. Glass card grid.

---

## Section 3 — The Problem: "The AI Coding Hostage Situation"

> **Design Directive:** Do not use dense paragraphs. Use bold, scannable text. The red glow on the cards should escalate from faint to aggressive as the user scrolls down.

| Element | Content |
| --- | --- |
| **Eyebrow** | `The Problem` |
| **Headline** | The AI Coding "Hostage Situation." |
| **Sub-head** | AI agents are incredibly fast typists, but fundamentally unsupervised. They lack architectural judgment, memory, and accountability. The honeymoon phase ends quickly when the cracks start to show. |

**The Critical Failures (Stage Cards):**

| # | Title | The Pain (Bold) | The Reality |
| --- | --- | --- | --- |
| 01 | The "File Folder Terror" | **The Usability Barrier** | You ask the AI for a checkout page. It spits out 500 lines across `middleware.ts` and `api/routes/`. You are forced to approve changes to complex directories you don't actually understand. |
| 02 | The AI "Loop of Death" | **The Momentum Killer** | You ask the AI to fix the login button. It breaks the cart. You fix the cart—the login breaks again. You spend hours burning tokens just to get back to where you were yesterday. |
| 03 | Context Rot | **The Technical Debt** | The AI ignores your `.cursorrules` after five messages. It writes "Alien Code" based on generic internet tutorials. Your app becomes a tangled mess too complex for the AI's own context window. |
| 04 | Handoff Extortion | **The Ultimate Fear** | Your app makes money. You hire a real engineer. They look at the repository and say: *"This AI code is unmaintainable trash. I need $50,000 to rewrite it from scratch."* |

**The Friction Multiplier (Closing Banner):**

> **...And the friction doesn't stop there.**
> These four stages are just the breaking points. Every single day, unsupervised AI agents silently introduce security vulnerabilities, ignore dependency guidelines, break UI consistency, hallucinate APIs, and bloat your codebase with redundant logic. You are paying for speed, but spending all your time babysitting the output.

---

## Section 4 — The Solution: "Your Cloud-Based Virtual CTO"

> **Design Directive (Crucial for Enterprise feel):** This Bento Grid MUST include high-fidelity UI mockups inside the cards. Do not rely on text alone.

| Element | Content |
| --- | --- |
| **Eyebrow** | `The Solution` |
| **Headline** | You don't need a faster agent. You need a manager. |
| **Sub-head** | Connect your GitHub repo, and kap10 maps how your app works. We intercept your prompts, enforce architectural rules, and ruthlessly review the AI's code before it ever touches your files. |

**Bento Grid Cards (1 hero + 2×2):**

| # | Layout | Title | Description | Inline Visual |
| --- | --- | --- | --- | --- |
| 01 | Hero (full-width) | The "File-less" Blueprint | Click "Shopping Cart" on your dashboard and type "Add Apple Pay." We translate it into a precise, multi-file structural prompt. You manage features; we manage the files. | **SVG:** Messy file tree (left, red) → Clean feature blocks (right, cyan) with animated arrow. |
| 02 | 2×2 Grid | The Spaghetti Shield | Our automated cloud PR reviewer checks every AI change against your app's permanent architecture. Wrong library? Instantly blocked and rewritten. | **Terminal:** `pr-review.log` with BLOCKED (red), REWRITTEN (cyan), PASS (green) entries. |
| 03 | 2×2 Grid | The "Rewind" Button | When the AI hallucinates, one click restores your code to the exact moment it last worked—and permanently blocks the AI from making that mistake again. | **UI:** Timeline scrubber with versioned working-state pills (green/red) and "Restore" button. |
| 04 | 2×2 Grid | Invisible Testing | Click through your app to "record" hidden behavioral tests. If the AI breaks a feature in the background, we force a fix. Safety without writing tests. | **Terminal:** Animated red REC dot + interaction log with checkmarks. |
| 05 | 2×2 Grid | Anti-Extortion Export | Generate an enterprise-grade Architecture Report in one click. Hand your hired engineer a perfect map of your codebase. No "$50K rewrite" extortion. | **Terminal:** `architecture-report.pdf` with module counts, decision counts, "Ready for handoff" (green). |

---

## Section 5 — Under the Hood: 6-Step Lifecycle

> **Design Directive:** Apple-style **sticky visual + scroll** layout. The left panel stays pinned with a large crossfading illustration; the right column scrolls through 6 step cards. Each step card triggers the corresponding visual via IntersectionObserver. On mobile, falls back to stacked cards with inline visuals.
>
> **Critical CSS:** The parent `<section>` must use `overflow-x-clip` (NOT `overflow-hidden`) to preserve `position: sticky` on the left panel.

| Element | Content |
| --- | --- |
| **Eyebrow** | `Under the Hood` |
| **Headline** | Six stages. Full lifecycle. Zero blind spots. |

### Desktop Layout (`lg:`)

```text
┌──────────────────────────────┬──────────────┐
│                              │  01 ░░░░░░░  │
│   STICKY VISUAL PANEL        │  02 ░░░░░░░  │
│   (crossfades on scroll)     │  03 ░░░░░░░  │  ← scrolls
│   position: sticky; top: 6rem│  04 ░░░░░░░  │
│                              │  05 ░░░░░░░  │
│                              │  06 ░░░░░░░  │
└──────────────────────────────┴──────────────┘
```

- Grid: `lg:grid-cols-[1fr_340px]`
- Visual panel: `sticky top-24`, dark `#0e0e14` bg, `min-height: 420px`, cyan glow shadow
- Transitions: `AnimatePresence mode="wait"` with blur+slide in/out
- Each step card wrapper: `min-h-[40vh]` with `flex items-center` for proper scroll spacing
- Observer: `rootMargin: "-45% 0px -45% 0px"` — 10% center trigger band
- Active card: `bg-white/[0.05] border-electric-cyan/20` + cyan glow; inactive: `opacity-40`

### The 6 Steps

| # | Title | Subtitle | Icon | Visual (Left Panel) | One-liner |
| --- | --- | --- | --- | --- | --- |
| 01 | The Intent | The Prompt Compiler | `MessageSquare` | **Before/after split:** vague chat bubble → compiled structural prompt with scope, file paths, conventions, locks, tests | Your intent in. A battle plan out. |
| 02 | Boundary Setting | Scope Locking | `Lock` | **File tree with locks:** one folder unlocked (cyan, "Writable" badge with pulsing glow) + 4 folders locked (dimmed, red "Read-only") | Surgical precision. Zero collateral damage. |
| 03 | Code Generation | The Spaghetti Shield | `ShieldCheck` | **Terminal log:** `spaghetti-shield.log` with SCAN → BLOCKED (red) → REWRITE (cyan) → PASS (green) entries, staggered line-by-line reveal, summary footer | You never see the bad code. |
| 04 | Vibe Verification | Testing & Rewinding | `RotateCcw` | **Split panel:** Left = REC dot + interaction log (click/type/navigate with ✓); Right = version timeline (v1.2–v1.5 good/bad nodes) with "Restore" button | The Death Spiral becomes impossible. |
| 05 | Code Review | Business-Aware Merging | `GitPullRequest` | **PR scorecard:** PR #247 header + domain/infra badges + animated Impact Score bar (72/100) + animated Test Coverage bar (94%) + compliance badges (Golden Path ✓, No Regressions ✓, Safe to Merge ✓) | Architecture-aware. Not just lint-aware. |
| 06 | Post-Release | Handoff & Compliance | `FileText` | **Architecture report:** 3-stat grid (12 Modules, 47 Decisions, 3 Dep Graphs) + checklist items + VEX/Handoff badges + "Export Full Report" CTA button | Your codebase, fully explained. |

### Mobile Layout

Falls back to vertically stacked cards (`lg:hidden`). Each card has a compact header row (icon + step number + title + subtitle) followed by the full visual inline below.

**Banner below section:** *"From unsupervised intern to managed junior dev."*

### Data

```ts
const LIFECYCLE_STEPS = [
  { num: "01", title: "The Intent",          subtitle: "The Prompt Compiler",    icon: MessageSquare, detail: "Your intent in. A battle plan out." },
  { num: "02", title: "Boundary Setting",    subtitle: "Scope Locking",          icon: Lock,          detail: "Surgical precision. Zero collateral damage." },
  { num: "03", title: "Code Generation",     subtitle: "The Spaghetti Shield",   icon: ShieldCheck,   detail: "You never see the bad code." },
  { num: "04", title: "Vibe Verification",   subtitle: "Testing & Rewinding",    icon: RotateCcw,     detail: "The Death Spiral becomes impossible." },
  { num: "05", title: "Code Review",         subtitle: "Business-Aware Merging", icon: GitPullRequest, detail: "Architecture-aware. Not just lint-aware." },
  { num: "06", title: "Post-Release",        subtitle: "Handoff & Compliance",   icon: FileText,      detail: "Your codebase, fully explained." },
]
```

### Components

- `LifecycleSection` — Stateful component with `useState(active)`, `useRef(stepRefs)`, `useEffect` IntersectionObserver. Renders desktop sticky layout + mobile fallback.
- `LifecycleVisual({ step })` — Switch-case component returning the large-format visual for each step (0–5).

---

## Section 6 — Trust & Security

> **Design Directive:** Use dark glassmorphism. Subtle lock/shield watermark behind the text.

| Element | Content |
| --- | --- |
| **Eyebrow** | `Trust & Security` |
| **Headline** | Enterprise security, built for solo hackers. |
| **Sub-head** | We supervise your code; we don't exploit it. |

**Trust Pillars (3-column glass cards):**

| # | Icon | Title | Description |
| --- | --- | --- | --- |
| 01 | Lock | End-to-End Encryption | Encrypted in transit (TLS 1.3) and at rest (AES-256). We only process the structural metadata needed to supervise your AI. |
| 02 | Server | SOC 2 Compliance | Audit logs, strict access controls, and enterprise-grade retention policies from day one. |
| 03 | Trash2 | Data Deletion Guarantee | Disconnect your repo, and your data is permanently purged within 24 hours. **No model training on your code—ever.** |

**Bottom Statement:** *"We built kap10 for builders who take their code seriously. If you wouldn't trust us with your repo, we haven't earned your business."*

---

## Section 7 — Early Access / Waitlist

> **Design Directive:** Create an exclusive, invitation-style card layout.

| Element | Content |
| --- | --- |
| **Eyebrow** | `Early Access` |
| **Headline** | Be the first to try kap10. |
| **Sub-head** | Join the waitlist. We'll onboard you personally when your seat is ready. |

**Form:** Email input + "Join Waitlist" button → POST `/api/waitlist` → success state with confirmation. Uses reusable `WaitlistForm` component.

**Founding Member Benefits (visible below form when not in success state):**
* Locked-in early pricing forever.
* Personal onboarding call with the engineering team.
* Direct access to shape the product roadmap.

---

## Section 8 — FAQ

| Element | Content |
| --- | --- |
| **Eyebrow** | `FAQ` |
| **Headline** | Questions you're already thinking. |

| # | Question | Answer |
| --- | --- | --- |
| 01 | Does kap10 slow down my AI? | No. kap10 operates on the MCP channel with overhead under 200ms. Your coding flow feels identical; the output is just dramatically better. |
| 02 | Can I still prompt my AI directly when I want to? | Absolutely. You can bypass it, override suggestions, or turn it off for a session. You're always in control. |
| 03 | My code is proprietary. Is it safe? | Yes. We store your data in an isolated single-tenant partition. We never train models on your code. Disconnect, and your data is wiped within 24 hours. |
| 04 | Does it work with my IDE? | If your agent supports the open Model Context Protocol (MCP)—like Cursor, Claude Code, or Windsurf—kap10 works out of the box. One URL, any agent. |

---

## Section 9 — Bottom CTA

| Element | Content |
| --- | --- |
| **Headline** | You supply the vibe. We supply the Tech Lead. |
| **Description** | Your coding agent is a brilliant junior developer with no memory and no judgment. Give it a Tech Lead, and never lose a day to the AI Death Spiral again. |
| **CTA** | Inline `<WaitlistForm />` (email input + "Join Waitlist" button — same reusable component, without benefits list) |

---

## Section 10 — Footer

> Same as main landing page footer.

---

## Engineering & UI Directives

> **Reference:** See `app/kap10/kap10-product-page.tsx` and `components/graphics/NeuralConstellation.tsx` for current implementation.
>
> **Note:** The page fully reflects the "AI Tech Lead" / SaaS MCP server positioning. All sections are implemented. Section 4 (Solution) has 5 capability cards with inline SVG/terminal visuals. Section 5 (Under the Hood) uses a sticky visual + scroll layout with 6 lifecycle steps — implemented as `LifecycleSection` and `LifecycleVisual` components within the page file. Waitlist form is reused in both Early Access and Bottom CTA via the `WaitlistForm` component.

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
| Hero | Asymmetric text + WebGL constellation morph + agent bar |
| Metrics Strip | 3-column glass stat cards with cyan values |
| The Problem | 4 vertically stacked stage cards with escalating red glow |
| The Solution | Bento grid (1 hero full-width + 2×2) with inline visuals |
| Under the Hood | Sticky visual + scrolling steps (6-step lifecycle, `LifecycleSection`) |
| Trust & Security | 3-column trust pillar cards (horizontal row) |
| Early Access | Centered glass card with email form + benefits list |
| FAQ | Accordion inside glass container |
| Bottom CTA | Centered glass panel with HUD brackets + inline waitlist form |

### Animation Restrictions
- Keep animations purposeful. Do not bounce or over-animate text.
- Use Framer Motion's `opacity` and `transform: translateY(10px)` for subtle scroll-reveals.
- "The Snap" easing: `[0.16, 1, 0.3, 1]`
- Ensure the WebGL background in the Hero is dimmed enough that the primary CTA holds the highest contrast.
- `blurReveal` variant for section headers throughout.
