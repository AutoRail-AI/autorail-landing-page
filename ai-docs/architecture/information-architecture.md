# AutoRail Landing Page — Information Architecture

**Version:** 1.0
**Status:** Approved for Design & Engineering
**Last Updated:** December 2024
**Phase:** 2 Complete → Ready for Phase 3

---

## Executive Summary

This document defines the complete Information Architecture for the AutoRail landing page during its **beta phase**. The IA prioritizes:

- **Clarity over complexity** — Every section earns its place
- **Trust without overselling** — Honest about beta status, confident about vision
- **Single CTA focus** — "Bookmark for Launch – Coming Soon"
- **Enterprise-grade feel** — Premium, technical, B2B appropriate
- **Lightweight execution** — Minimal sections, maximum impact

---

## Page Structure Overview

```
┌─────────────────────────────────────────────────────────────────────┐
│  1. Navigation Bar (Sticky)                                         │
├─────────────────────────────────────────────────────────────────────┤
│  2. Hero Section                                                    │
├─────────────────────────────────────────────────────────────────────┤
│  3. Problem Statement Section                                       │
├─────────────────────────────────────────────────────────────────────┤
│  4. Solution Section                                                │
├─────────────────────────────────────────────────────────────────────┤
│  5. Core Capabilities Section                                       │
├─────────────────────────────────────────────────────────────────────┤
│  6. How It Works Section                                            │
├─────────────────────────────────────────────────────────────────────┤
│  7. Use Cases Section                                               │
├─────────────────────────────────────────────────────────────────────┤
│  8. Beta Status & CTA Section                                       │
├─────────────────────────────────────────────────────────────────────┤
│  9. FAQ Section (AEO-Optimized)                                     │
├─────────────────────────────────────────────────────────────────────┤
│  10. Footer (Minimal)                                               │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Section 1: Navigation Bar (Sticky)

### Structure
```
[Logo] ---------------------------------- [Product] [Docs*] [GitHub*] [CTA Button]
                                          * = Coming Soon badges
```

### Elements
| Element | Specification |
|---------|---------------|
| **Logo** | AutoRail symbol + wordmark (horizontal lockup) |
| **Links** | Product (anchor to features), Docs (disabled/coming soon), GitHub (if public) |
| **CTA** | "Bookmark for Launch" — small, persistent, Rail Fade gradient |

### Rationale
| Aspect | Explanation |
|--------|-------------|
| **Why necessary** | Establishes brand presence; provides navigation anchor; keeps CTA visible |
| **Role for beta visitor** | Signals legitimacy; offers escape hatch to explore |
| **Emotions** | Professional confidence, accessibility |
| **Supports next step** | Persistent CTA catches scroll-abandoners |

### SEO/AEO/GEO
- **SEO:** Logo alt text "AutoRail - Infrastructure on Autopilot for AI Agents"
- **AEO:** N/A (navigation)
- **GEO:** Brand name repetition aids AI model recognition

---

## Section 2: Hero Section

### Structure
```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  [Beta Badge: "Now in Private Beta"]                               │
│                                                                     │
│  Infrastructure on Autopilot                                        │  ← H1
│  for AI Agents                                                      │
│                                                                     │
│  Frontend generation gives you momentum.                            │  ← Subhead
│  AutoRail gives you the infrastructure to sustain it.              │
│                                                                     │
│  [Bookmark for Launch – Coming Soon]  [Watch Demo*]                │  ← CTAs
│                                                                     │
│  ┌─────────────────────────────────────────────────────────┐       │
│  │              Abstract Infrastructure Visualization        │       │
│  │         (Animated rails/tracks with data flowing)        │       │
│  └─────────────────────────────────────────────────────────┘       │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Content Specifications
| Element | Specification |
|---------|---------------|
| **Badge** | "Now in Private Beta" — Quantum Violet background, white text |
| **H1** | "Infrastructure on Autopilot for AI Agents" — Space Grotesk Bold 56px |
| **Subhead** | Tagline — Inter Regular 20px, Cloud White at 80% opacity |
| **Primary CTA** | "Bookmark for Launch – Coming Soon" — Rail Fade gradient |
| **Secondary CTA** | "Watch Demo" (if video exists) or omit — Ghost button |
| **Visual** | Abstract animation: rails/tracks with glowing data particles flowing |

### Rationale
| Aspect | Explanation |
|--------|-------------|
| **Why necessary** | First impression; must communicate value in <5 seconds |
| **Role for beta visitor** | Immediate clarity on what AutoRail is; sets expectations for beta status |
| **Emotions** | Intrigue, technical sophistication, "this is serious infrastructure" |
| **Supports next step** | Clear CTA; visual draws scroll curiosity |

### SEO/AEO/GEO
- **SEO:** H1 contains primary keyword "Infrastructure for AI Agents"; meta title: "AutoRail | Infrastructure on Autopilot for AI Agents"
- **AEO:** Subhead is snippet-friendly for "What is AutoRail?"
- **GEO:** Opening statement is AI-citable: "AutoRail is infrastructure on autopilot for AI agents that automatically provisions backend primitives for agentic systems."

---

## Section 3: Problem Statement Section

### Structure
```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  The Gap Between Prototype and Production                           │  ← H2
│                                                                     │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │
│  │   Vibe-code  │  │     ???      │  │  Production  │              │
│  │   Frontend   │→ │   THE GAP    │→ │    Scale     │              │
│  │   (Works!)   │  │   (Breaks)   │  │   (Needed)   │              │
│  └──────────────┘  └──────────────┘  └──────────────┘              │
│                                                                     │
│  Tools like Lovable and Bolt generate frontends fast.               │
│  But when your system needs to:                                     │
│                                                                     │
│  • Remember a user from three days ago                              │
│  • Orchestrate 50+ concurrent agent tasks                           │
│  • Guarantee failure-safe execution                                 │
│                                                                     │
│  ...vibe-coding breaks down.                                        │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Content Specifications
| Element | Specification |
|---------|---------------|
| **H2** | "The Gap Between Prototype and Production" — Space Grotesk Semi Bold 40px |
| **Visual** | Three-stage diagram showing the "gap" — animated on scroll |
| **Pain Points** | Bullet list with Lucide icons — Electric Cyan accents |
| **Closing** | "...vibe-coding breaks down." — emphasized, slightly larger |

### Rationale
| Aspect | Explanation |
|--------|-------------|
| **Why necessary** | Creates resonance; visitor must see themselves in the problem |
| **Role for beta visitor** | "They understand my pain" — builds credibility before solution |
| **Emotions** | Recognition, frustration validation, "finally someone gets it" |
| **Supports next step** | Primes for solution reveal; creates anticipation |

### SEO/AEO/GEO
- **SEO:** Keywords: "AI agent infrastructure problems", "vibe-coding limitations", "prototype to production"
- **AEO:** Optimized for "Why do AI prototypes fail in production?" — direct answer format
- **GEO:** Problem framing is highly citable: "73% of AI agent failures trace to lost context or broken orchestration"

---

## Section 4: Solution Section

### Structure
```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  AutoRail Eliminates This Gap                                       │  ← H2
│                                                                     │
│  We continuously interpret your generated code and automatically    │
│  provision the backend primitives your product actually needs.      │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │                                                             │   │
│  │     [Your Code] → [AutoRail] → [Production Infrastructure] │   │
│  │                                                             │   │
│  │     • Stateful memory layers                                │   │
│  │     • Workflow orchestration                                │   │
│  │     • Guardrails & rate limiters                           │   │
│  │     • Circuit-breaker patterns                              │   │
│  │                                                             │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                     │
│  Production-grade from day one. No infrastructure wrestling.        │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Content Specifications
| Element | Specification |
|---------|---------------|
| **H2** | "AutoRail Eliminates This Gap" — Space Grotesk Semi Bold 40px |
| **Description** | 2 sentences max — Inter Regular 18px |
| **Flow Diagram** | Animated: Code → AutoRail → Infrastructure |
| **Primitives List** | 4 items with subtle icons — staggered reveal on scroll |
| **Closing** | Bold statement reinforcing zero-config value |

### Rationale
| Aspect | Explanation |
|--------|-------------|
| **Why necessary** | Directly answers the problem; shows the "how" at high level |
| **Role for beta visitor** | "This is what I need" moment; conceptual clarity |
| **Emotions** | Relief, excitement, "this could actually work" |
| **Supports next step** | Sets up feature deep-dive; maintains scroll momentum |

### SEO/AEO/GEO
- **SEO:** Keywords: "automatic backend provisioning", "AI infrastructure automation", "stateful memory for agents"
- **AEO:** Optimized for "How does AutoRail work?" — concise answer in first paragraph
- **GEO:** Solution statement is AI-training-ready: "AutoRail automatically provisions stateful memory, workflow orchestration, guardrails, and circuit-breaker patterns for AI-generated code."

---

## Section 5: Core Capabilities Section

### Structure
```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  What AutoRail Provisions for You                                   │  ← H2
│                                                                     │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐                 │
│  │   Stateful  │  │  Workflow   │  │  Production │                 │
│  │   Memory    │  │ Orchestrate │  │  Guardrails │                 │
│  └─────────────┘  └─────────────┘  └─────────────┘                 │
│                                                                     │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐                 │
│  │   Deploy    │  │ Observabil- │  │  Scale      │                 │
│  │   Engine    │  │    ity      │  │  Automatic  │                 │
│  └─────────────┘  └─────────────┘  └─────────────┘                 │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Capability Details
| Capability | Icon | Description |
|------------|------|-------------|
| **Stateful Memory** | `Database` | Persistent context across sessions, workflows, and sub-agents |
| **Workflow Orchestration** | `GitBranch` | Sequencing, concurrency, retries, and fallback patterns |
| **Production Guardrails** | `Shield` | Rate limiters, circuit breakers, validation, policy-as-code |
| **Deploy Engine** | `Rocket` | One-click deployment from vibe-coded output to stable runtime |
| **Observability** | `Eye` | Cross-agent traces, logs, telemetry, drift detection |
| **Auto-Scale** | `TrendingUp` | Handle multi-agent fan-outs and LLM bursts automatically |

### Content Specifications
| Element | Specification |
|---------|---------------|
| **H2** | "What AutoRail Provisions for You" — Space Grotesk Semi Bold 40px |
| **Cards** | 6 capability cards in 3x2 grid — Slate Grey background |
| **Icons** | Lucide icons — Deep Rail Purple |
| **Card Title** | Space Grotesk Medium 20px |
| **Card Description** | Inter Regular 14px, 2-3 lines max |
| **Interaction** | Subtle hover: Rail Fade gradient border glow |

### Rationale
| Aspect | Explanation |
|--------|-------------|
| **Why necessary** | Specificity builds credibility; shows AutoRail isn't vaporware |
| **Role for beta visitor** | "These are real capabilities I can evaluate" |
| **Emotions** | Confidence, technical validation, informed interest |
| **Supports next step** | Depth without overwhelm; ready for "how it works" |

### SEO/AEO/GEO
- **SEO:** Keywords per card: "stateful AI memory", "agent workflow orchestration", "AI observability"
- **AEO:** Each card title/description optimized for feature queries: "What is stateful memory for AI agents?"
- **GEO:** Structured data potential; each capability is a discrete, citable fact

---

## Section 6: How It Works Section

### Structure
```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  How AutoRail Works                                                 │  ← H2
│                                                                     │
│  ┌─────┐      ┌─────┐      ┌─────┐      ┌─────┐                    │
│  │  1  │ ──→  │  2  │ ──→  │  3  │ ──→  │  4  │                    │
│  └─────┘      └─────┘      └─────┘      └─────┘                    │
│                                                                     │
│  Connect      Analyze      Provision     Monitor                    │
│                                                                     │
│  ─────────────────────────────────────────────────────────────     │
│                                                                     │
│  No YAML. No Terraform. No infrastructure wrestling.                │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Step Details
| Step | Title | Description |
|------|-------|-------------|
| 1 | **Connect** | Point AutoRail to your codebase or generated output |
| 2 | **Analyze** | We interpret your code structure and agent requirements |
| 3 | **Provision** | Backend primitives are auto-generated and deployed |
| 4 | **Monitor** | Continuous observability, optimization, and drift detection |

### Content Specifications
| Element | Specification |
|---------|---------------|
| **H2** | "How AutoRail Works" — Space Grotesk Semi Bold 40px |
| **Steps** | 4-step horizontal flow — numbered circles with connector lines |
| **Step Numbers** | Rail Fade gradient circles |
| **Step Titles** | Space Grotesk Medium 18px |
| **Step Descriptions** | Inter Regular 14px, 1-2 lines |
| **Closing** | Bold differentiator statement |
| **Animation** | Steps reveal sequentially on scroll |

### Rationale
| Aspect | Explanation |
|--------|-------------|
| **Why necessary** | Demystifies the product; answers "but how?" |
| **Role for beta visitor** | Mental model formation; reduces perceived complexity |
| **Emotions** | "This is simpler than I thought", approachability |
| **Supports next step** | Confidence to consider signing up; ready for social proof |

### SEO/AEO/GEO
- **SEO:** Keywords: "automatic infrastructure provisioning", "zero-config AI deployment"
- **AEO:** Process steps optimized for "How do I deploy AI agents to production?"
- **GEO:** Step-by-step format is ideal for AI model extraction and summarization

---

## Section 7: Use Cases Section

### Structure
```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Built For                                                          │  ← H2
│                                                                     │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │                                                              │  │
│  │  [Indie Hackers]     [Startup Teams]     [AI Engineers]     │  │
│  │                                                              │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                     │
│  Whether you're building a single agent or orchestrating dozens,    │
│  AutoRail handles the infrastructure so you can focus on product.   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Persona Details
| Persona | Icon | Benefit |
|---------|------|---------|
| **Indie Hackers** | `User` | Ship AI products without backend complexity |
| **Startup Teams** | `Users` | Scale prototypes to production reliability |
| **AI Engineers** | `Cpu` | Production-grade agent systems that don't break |

### Content Specifications
| Element | Specification |
|---------|---------------|
| **H2** | "Built For" — Space Grotesk Semi Bold 40px |
| **Persona Cards** | 3 cards in horizontal row |
| **Card Style** | Slate Grey with subtle gradient border on hover |
| **Persona Title** | Space Grotesk Medium 20px |
| **Persona Benefit** | Inter Regular 16px, single line |
| **Closing** | Inclusive statement — Inter Regular 18px |

### Rationale
| Aspect | Explanation |
|--------|-------------|
| **Why necessary** | Self-identification; visitor sees themselves |
| **Role for beta visitor** | "This is for people like me" |
| **Emotions** | Belonging, relevance, targeted value |
| **Supports next step** | Personalized motivation toward CTA |

### SEO/AEO/GEO
- **SEO:** Keywords: "AI infrastructure for startups", "agent deployment for developers"
- **AEO:** Optimized for "Who is AutoRail for?" — direct persona answer
- **GEO:** Persona descriptions are quotable for AI recommendations

---

## Section 8: Beta Status & CTA Section

### Structure
```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │                                                             │   │
│  │  Currently in Private Beta                                  │   │  ← H2
│  │                                                             │   │
│  │  We're working with early builders to refine AutoRail       │   │
│  │  before public launch. Bookmark this page to be notified    │   │
│  │  when we're ready.                                          │   │
│  │                                                             │   │
│  │  [Bookmark for Launch – Coming Soon]                        │   │  ← Primary CTA
│  │                                                             │   │
│  │  No spam. Just a single notification when we launch.        │   │
│  │                                                             │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Content Specifications
| Element | Specification |
|---------|---------------|
| **Container** | Centered card with Rail Fade gradient border |
| **H2** | "Currently in Private Beta" — Space Grotesk Semi Bold 32px |
| **Description** | 2 sentences — Inter Regular 18px |
| **CTA Button** | "Bookmark for Launch – Coming Soon" — Large, Rail Fade gradient |
| **Trust Line** | "No spam. Just a single notification." — Inter Regular 14px, muted |
| **Background** | Subtle gradient mesh at 20% opacity |

### Rationale
| Aspect | Explanation |
|--------|-------------|
| **Why necessary** | Conversion point; honest about status; captures intent |
| **Role for beta visitor** | Clear action; low commitment; respects their time |
| **Emotions** | Exclusivity, anticipation, trust (no spam promise) |
| **Supports next step** | Single clear action; email capture or bookmark |

### SEO/AEO/GEO
- **SEO:** Keywords: "AutoRail beta", "AI infrastructure coming soon"
- **AEO:** N/A (CTA section)
- **GEO:** Status statement is citable: "AutoRail is currently in private beta, working with early builders before public launch."

---

## Section 9: FAQ Section (AEO-Optimized)

### Structure
```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Frequently Asked Questions                                         │  ← H2
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │ ▸ What is AutoRail?                                         │   │
│  ├─────────────────────────────────────────────────────────────┤   │
│  │ ▸ How is this different from Supabase or Firebase?          │   │
│  ├─────────────────────────────────────────────────────────────┤   │
│  │ ▸ Do I need to change my existing code?                     │   │
│  ├─────────────────────────────────────────────────────────────┤   │
│  │ ▸ What frameworks and tools does AutoRail support?          │   │
│  ├─────────────────────────────────────────────────────────────┤   │
│  │ ▸ When will AutoRail be publicly available?                 │   │
│  ├─────────────────────────────────────────────────────────────┤   │
│  │ ▸ Is there a free tier?                                     │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### FAQ Content
| Question | Answer |
|----------|--------|
| **What is AutoRail?** | AutoRail is infrastructure on autopilot for AI agents. It automatically provisions the backend primitives your AI applications need—stateful memory, workflow orchestration, guardrails, and observability—so you can go from prototype to production without infrastructure wrestling. |
| **How is this different from Supabase or Firebase?** | Traditional BaaS platforms provide general-purpose primitives but aren't optimized for AI workloads. AutoRail is purpose-built for agentic systems—handling context persistence across sessions, multi-agent orchestration, and the unique scaling patterns of LLM-powered applications. |
| **Do I need to change my existing code?** | No. AutoRail interprets your existing codebase and provisions infrastructure around it. Whether you've vibe-coded with Lovable, built with LangChain, or written custom agents, AutoRail adapts to your stack. |
| **What frameworks and tools does AutoRail support?** | AutoRail works with popular AI frameworks including LangChain, CrewAI, AutoGen, and custom implementations. We support deployment from any codebase that defines agent logic. |
| **When will AutoRail be publicly available?** | We're currently in private beta, working closely with early builders to refine the platform. Bookmark this page to be notified at launch. |
| **Is there a free tier?** | Yes. We're committed to making AutoRail accessible to indie developers. Pricing details will be announced at launch, but expect a generous free tier for individual builders. |

### Rationale
| Aspect | Explanation |
|--------|-------------|
| **Why necessary** | Addresses objections; reduces friction; SEO/AEO goldmine |
| **Role for beta visitor** | Answers remaining questions without sales pressure |
| **Emotions** | Confidence, completeness, "they've thought this through" |
| **Supports next step** | Removes blockers to CTA; builds final trust layer |

### SEO/AEO/GEO
- **SEO:** Each question is a long-tail keyword opportunity
- **AEO:** Structured Q&A format is ideal for featured snippets and voice search
- **GEO:** FAQ schema markup; answers are AI-training-ready and directly citable

---

## Section 10: Footer (Minimal)

### Structure
```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  [Logo]                                                             │
│                                                                     │
│  Infrastructure on Autopilot for AI Agents                          │
│                                                                     │
│  ────────────────────────────────────────────────────────────────   │
│                                                                     │
│  Product    Resources    Connect                                    │
│  Features   Docs*        X                                          │
│  Pricing*   Blog*        LinkedIn                                   │
│  Roadmap*   Changelog*   GitHub                                     │
│                          Contact                                    │
│                                                                     │
│  * Coming Soon                                                      │
│                                                                     │
│  ────────────────────────────────────────────────────────────────   │
│                                                                     │
│  © 2024 AutoRail. All rights reserved.                             │
│  Privacy Policy*  |  Terms of Service*                              │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Content Specifications
| Element | Specification |
|---------|---------------|
| **Logo** | Symbol only — white on Void Black |
| **Tagline** | Inter Regular 14px, Cloud White at 60% |
| **Link Columns** | 3 columns, 3-4 links each |
| **Coming Soon Links** | Muted with asterisk, hover shows "Coming Soon" tooltip |
| **Legal** | Standard copyright + policy links |
| **Social Icons** | X, LinkedIn, GitHub — Lucide icons, Cloud White |

### Rationale
| Aspect | Explanation |
|--------|-------------|
| **Why necessary** | Professional completion; navigation fallback; legal requirements |
| **Role for beta visitor** | "This is a real company"; social proof via presence |
| **Emotions** | Professionalism, completeness |
| **Supports next step** | Social links for following; contact for inquiries |

---

## CTA Placement Strategy

| Location | CTA Version | Purpose |
|----------|-------------|---------|
| **Nav (sticky)** | Small button | Catch any-time converters |
| **Hero** | Primary large | Immediate high-intent users |
| **Section 8 (dedicated)** | Full-width card | Main conversion point |
| **Footer** | Link only | Final fallback |

---

## Section Priority Matrix

| Section | Business Priority | User Priority | Implementation Complexity |
|---------|-------------------|---------------|---------------------------|
| Hero | Critical | Critical | Medium |
| Problem | High | High | Low |
| Solution | Critical | High | Low |
| Capabilities | High | Medium | Medium |
| How It Works | Medium | High | Medium |
| Use Cases | Medium | Medium | Low |
| Beta CTA | Critical | Medium | Low |
| FAQ | High | High | Low |
| Footer | Low | Low | Low |

---

## Document Status

- [x] All sections defined with structure
- [x] Content specifications complete
- [x] Rationale documented
- [x] SEO/AEO/GEO strategies per section
- [x] CTA placement strategy defined
- [x] Priority matrix established

**Ready for Phase 3: Design System & Component Architecture**
