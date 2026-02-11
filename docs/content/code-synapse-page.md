# Code-Synapse Page — `/code-synapse`

> **Goal:** Sell the "Left Brain" — The Context Layer.
>
> **Product Positioning:** A **CLI Sidecar** that runs alongside your existing agentic IDEs (Cursor, Claude, Windsurf).
> It is not an IDE itself; it is the "memory chip" you plug into them.
>
> **Audience:** CTOs frustrated with developers spending hours fixing AI-generated "Alien Code."
> Users arrive here from the `Explore Code-Synapse →` CTA on the main landing page.

---

## Page Flow

```
┌─────────────────────────────────────────────────────────────────────┐
│  1. HERO (with back link)                                           │
│  2. THE CORE ARGUMENT — "Why AI Writes Alien Code"                  │
│  3. KEY CAPABILITIES — Feature blocks                               │
│  4. BOTTOM CTA — Get started                                        │
│  5. FOOTER                                                          │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Section 1 — Hero

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  ← Back to Platform Overview                           ← back link │
│                                                                     │
│  ┌──────────────┐  ┌──────────────┐                                 │
│  │ Open Source   │  │  CLI Sidecar │                    ← badges    │
│  └──────────────┘  └──────────────┘                                 │
│                                                                     │
│  code-synapse                                          ← product   │
│                                                                     │
│  ╔═══════════════════════════════════════════════════════════════╗   │
│  ║  Memory for Agents.                                          ║   │
│  ╚═══════════════════════════════════════════════════════════════╝   │
│                                                                     │
│  The CLI sidecar that teaches Cursor and Claude                     │
│  your coding standards.                                             │
│                                                                     │
│  ┌──────────────────────────────┐  ┌────────────────────────────┐   │
│  │ $ npm install code-synapse 📋│  │  View on GitHub →          │   │
│  └──────────────────────────────┘  └────────────────────────────┘   │
│           ↑ copy button                     ↑ external link         │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Copy

| Element | Content |
|---|---|
| **Back link** | `← Back to Platform Overview` → `/` |
| **Badges** | `Open Source` · `CLI Sidecar` |
| **Product name** | `code-synapse` |
| **Headline** | Memory for Agents. |
| **Subhead** | The CLI sidecar that teaches Cursor and Claude your coding standards. |
| **CTA 1** | `npm install code-synapse` (with copy button) |
| **CTA 2** | `View on GitHub →` (external link) |

---

## Section 2 — The Core Argument: "Why AI Writes Alien Code"

> **Purpose:** Bridge from the main page's "Day 2 Hangover" into the specific problem Code-Synapse solves.

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  THE PROBLEM                                           ← eyebrow   │
│                                                                     │
│  AI cannot write good software just by reading                      │
│  old software.                                         ← headline  │
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
│  │  The root cause: AI has no persistent memory.               │    │
│  │  Every context window is a clean slate.                     │    │
│  │  Every session resets. Every rule is forgotten.             │    │
│  │                                                             │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                                                                     │
│  THE SOLUTION                                          ← eyebrow   │
│                                                                     │
│  True autonomy requires persistent context.            ← headline  │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │                                                             │    │
│  │  Code-Synapse is not another rules file that gets           │    │
│  │  ignored after 5 messages. It's a living knowledge          │    │
│  │  graph that persists across every session, every            │    │
│  │  agent, and every developer on your team.                   │    │
│  │                                                             │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Section 3 — Key Capabilities

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  CAPABILITIES                                          ← eyebrow   │
│                                                                     │
│  What Code-Synapse Does                                ← headline  │
│                                                                     │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │  ◆ Feature 1 — Universal Knowledge Graph                     │   │
│  │                                                              │   │
│  │  Works with any agentic IDE. Whether you use Cursor,         │   │
│  │  Claude Desktop, or Windsurf — Code-Synapse runs as a        │   │
│  │  silent sidecar, feeding context via MCP.                    │   │
│  ├──────────────────────────────────────────────────────────────┤   │
│  │  ◆ Feature 2 — Cure Context Rot                              │   │
│  │                                                              │   │
│  │  Stop relying on static rules files that AI forgets after    │   │
│  │  five messages. Code-Synapse acts as a persistent memory     │   │
│  │  layer that survives across every conversation and tool.     │   │
│  ├──────────────────────────────────────────────────────────────┤   │
│  │  ◆ Feature 3 — Understands Business Intent                   │   │
│  │                                                              │   │
│  │  It goes beyond codebase structure to understand the actual  │   │
│  │  business intent of your software. Why does this module      │   │
│  │  exist? What constraint drove this pattern?                  │   │
│  ├──────────────────────────────────────────────────────────────┤   │
│  │  ◆ Feature 4 — Hyper-Personalized Generation                 │   │
│  │                                                              │   │
│  │  AI finally writes code that looks like a senior developer   │   │
│  │  on *your* team wrote it. Not generic Stack Overflow code.   │   │
│  │  Your patterns. Your conventions. Your architecture.         │   │
│  ├──────────────────────────────────────────────────────────────┤   │
│  │  ◆ Feature 5 — Pattern Enforcement                           │   │
│  │                                                              │   │
│  │  Forces agents to use your internal libraries and            │   │
│  │  conventions, not generic public code.                       │   │
│  ├──────────────────────────────────────────────────────────────┤   │
│  │  ◆ Feature 6 — Drift Prevention                              │   │
│  │                                                              │   │
│  │  Catches "Alien Code" (inconsistent patterns) before it     │   │
│  │  merges to main. Your codebase stays coherent.               │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Copy

| # | Feature | Description |
|---|---|---|
| 1 | **Universal Knowledge Graph** | Works with any agentic IDE. Whether you use Cursor, Claude Desktop, or Windsurf — Code-Synapse runs as a silent sidecar, feeding context via MCP. |
| 2 | **Cure Context Rot** | Stop relying on static rules files that AI forgets after five messages. Code-Synapse acts as a persistent memory layer. |
| 3 | **Understands Business Intent** | It goes beyond codebase structure to understand the actual business intent of your software. Why does this module exist? |
| 4 | **Hyper-Personalized Generation** | AI finally writes code that looks like a senior developer on *your* team wrote it. Your patterns. Your conventions. |
| 5 | **Pattern Enforcement** | Forces agents to use your internal libraries and conventions, not generic public code. |
| 6 | **Drift Prevention** | Catches "Alien Code" (inconsistent patterns) before it merges to main. |

---

## Section 4 — Bottom CTA

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  ╔═══════════════════════════════════════════════════════════════╗   │
│  ║                                                               ║   │
│  ║  Start in 30 seconds.                               headline ║   │
│  ║                                                               ║   │
│  ║  Install the safety kit and connect your IDE.                 ║   │
│  ║  No backend required.                                  desc  ║   │
│  ║                                                               ║   │
│  ║  ┌──────────────────────────────┐                             ║   │
│  ║  │ $ npm install code-synapse 📋│  ← copy button             ║   │
│  ║  └──────────────────────────────┘                             ║   │
│  ║                                                               ║   │
│  ╚═══════════════════════════════════════════════════════════════╝   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Copy

| Element | Content |
|---|---|
| **Headline** | Start in 30 seconds. |
| **Description** | Install the safety kit and connect your IDE. No backend required. |
| **CTA** | `npm install code-synapse` (with copy button) |

---

## Section 5 — Footer

> Same as main landing page footer.
