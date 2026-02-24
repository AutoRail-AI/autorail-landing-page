# unerr — Product & Business Positioning

> **Code as fast as your AI can type. unerr will catch the mistakes.**
> The missing backend for AI coding agents — institutional memory, predictive guardrails, rewind, and autonomous DevSecOps baked directly into your AI agent's context window.

---

## What Is unerr?

unerr is the missing backend for your AI coding agent. You keep Cursor. You keep Copilot. You keep Claude Code. unerr injects the truth — your actual architecture, your actual conventions, your actual blast radius — directly into their context windows so they stop hallucinating your codebase.

When an AI agent writes code, it's optimizing for "does this work right now?" unerr optimizes for "will this survive production, scale to your team, and not rot your architecture in six months?" It does this automatically — without changing how you code.

**One command to connect. Zero workflow changes.** unerr integrates directly into your existing IDE through the Model Context Protocol (MCP), receives your code changes in real time, and feeds guardrails back to your AI agent before it commits a single line that breaks something.

Whether you're a solo founder building a SaaS entirely with AI, or a VP Engineering managing 200 developers merging AI-generated code daily — unerr is the senior Staff Engineer who never sleeps, never goes on vacation, and reviews every line before it ships.

---

## The Problem

AI coding tools have made every developer 10x faster at writing code. They've also made it 10x faster to write the *wrong* code — and to do it at scale before anyone notices.

Teams adopting vibe coding hit the same four walls:

**1. The AI doesn't know your codebase.** It generates code that technically compiles but ignores your domain language, violates your naming conventions, and misses the unwritten architectural rules your senior engineers carry in their heads.

**2. Nobody sees the blast radius.** A function gets quietly renamed. Three downstream services break. The AI had no way to know that function was called in 47 places.

**3. Rewinding is manual and painful.** The AI confidently broke something. Now you're hunting through git history trying to figure out what changed, why, and what to restore.

**4. Security and reliability become afterthoughts.** The AI writes a perfectly functional database query — inside a request handler loop, spawning N+1 queries per user. Or it logs a response payload containing user PII. Or it grants an IAM role far broader than the task needed. The code works. The incident happens on a Tuesday.

---

## Who unerr Is For

unerr is designed for any team using AI tools to write production code. Here's how it maps to your role:

| Who You Are | Why unerr Matters |
|---|---|
| **Indie hacker / vibe coder** | You're building a massive SaaS by yourself using AI. unerr is the Senior Staff Engineer who ensures your app won't collapse under its own weight when you hit 10,000 users. Build beyond your own skill level — safely. |
| **Startup tech lead (10–50 engineers)** | You're the only person who knows the codebase rules. unerr encodes those rules so your AI agents respect them — even when you're not in the room. |
| **Engineering manager (50–200 engineers)** | AI code is flowing into your monorepo from every direction. unerr is your governance layer: auditable, enforceable, non-intrusive. |
| **CTO / VP Engineering** | You need proof that AI adoption isn't silently rotting your architecture or creating security liabilities. unerr gives you that evidence. |
| **SRE / Platform engineer** | unerr catches N+1 queries, connection pool exhaustion, missing retry logic, and zero-downtime migration violations before they page you at 2am. |
| **DevSecOps / Security engineer** | unerr detects PII flowing into unprotected logging sinks, IAM privilege escalation, supply chain anomalies, and data residency violations — automatically. |

---

## How unerr Works

unerr connects to your repo — GitHub, GitLab, Bitbucket, or even a local directory — and builds a living knowledge graph of your entire codebase — every function, class, module, their relationships, their call chains, and their business purpose. This graph is kept current within 30 seconds of every push.

On top of that graph, unerr runs four overlapping layers of intelligence:

### Layer 1 — Institutional Memory (The Brain)

unerr reads your entire codebase and generates plain-English justifications for every entity: what it does, why it exists, which business domain it belongs to, what patterns it implements, and how confident the analysis is.

This produces a **Blueprint Dashboard** — a living map of your system's business swimlanes (Checkout, Auth, Notifications, etc.) alongside your infrastructure and utility layers. Your AI agent consults this map before writing code, so it understands where a new function fits in the architecture before it touches a file.

**What this replaces:** The tribal knowledge that only your senior engineers have. The README that's six months out of date. The architecture diagram nobody maintains.

### Layer 2 — Real-Time Sync (The Nervous System)

Every time you push, unerr automatically re-indexes only the changed files, updates its knowledge graph, and cascades re-analysis to anything the changed code affects — within 30 seconds. Works with GitHub, GitLab, Bitbucket, or any git provider via webhooks.

Your AI agent always has current knowledge. No manual syncing. No stale context.

For repos not yet connected to a remote, unerr also supports **local repo ingestion** via the CLI: `unerr push` from any directory.

### Layer 3 — Prompt Ledger & Rewind (The Black Box Recorder)

Every AI-generated change is tracked: the prompt that caused it, the files it touched, the result. unerr maintains a **timeline of AI activity** you can browse, rewind, and branch from.

When the AI breaks something:
1. Click **Rewind** — unerr restores your files to the last known-good snapshot.
2. unerr automatically generates an **Anti-Pattern Rule** from what went wrong, so the AI can't make the same mistake again.
3. A **Shadow Rewind** preview shows you exactly which files would be restored and flags any manual changes that might be overwritten, before you commit to the rewind.

A **Ledger Circuit Breaker** automatically halts AI hallucination loops — if the AI makes the same breaking change four or more times in ten minutes, unerr injects a stop signal to the agent and surfaces a clear message to the developer.

**What this replaces:** Frantically searching git history. Manual rollback scripts. The pit of despair when the AI confidently destroys a working function for the fifth time in a row.

### Layer 4 — Pattern Enforcement & Rules Engine (The Constitution)

unerr mines your codebase for recurring patterns (naming conventions, design patterns, architectural structures) and gives each one an **adherence rate** — how consistently your existing code follows it. High-confidence patterns become **enforceable rules**.

Rules have three enforcement levels:
- **Suggest:** Informational — the agent sees it, can choose to follow.
- **Warn:** Highlighted — the agent is nudged strongly.
- **Block:** Hard stop — the MCP tool returns a violation. The agent must comply.

Rules are contextual. They apply at the org, repo, file path, branch, or personal workspace level. A rule about payment handler error handling doesn't fire on a utility function.

The rules engine uses a two-pass hybrid evaluation: first a fast structural AST scan (using ast-grep/Semgrep), then a semantic enrichment pass using the knowledge graph to eliminate false positives. A rule violation in a UTILITY function gets treated very differently from the same violation in a VERTICAL business-critical module.

---

## Advanced Intelligence: What unerr Catches That Nobody Else Does

The following capabilities represent unerr's predictive control plane — the features that shift the dashboard from a post-mortem analytics tool to a live command center.

### Blast Radius Visualization

Before any change merges, unerr traverses the call graph N hops outward from the changed function to every API boundary and UI component it reaches. The resulting **Blast Radius** is a visualization: "This change touches 47 callers. 3 of them are on your payment flow."

Your AI agent gets this analysis via the `analyze_impact` MCP tool — before it writes the change, not after it deploys.

### Architectural Drift Detection

unerr maintains justification embeddings for every entity. When a file changes, it computes the cosine distance between the old and new justification. If the semantic meaning of a function drifts significantly from its canonical intent — the function that was "validates user session" silently becoming "also transforms response payloads" — a **Drift Alert** fires. It queries Git blame to identify which downstream teams are affected and creates a GitHub issue automatically.

### Auto-Generated ADRs & Domain Glossary

When a PR merges significant new graph topology (new services, feature areas, or high-centrality nodes), unerr automatically generates and commits an **Architecture Decision Record (ADR)** as a follow-up PR. It also maintains a live **Domain Glossary** of your ubiquitous language — the business terms your codebase uses, extracted from justifications — with a searchable table and term cloud.

### Automated PR Review

When a PR is opened, unerr automatically triggers a review pipeline:

1. Runs Semgrep rules against the diff.
2. Analyzes impact radius via the knowledge graph.
3. Posts line-level review comments for violations (only BLOCKER-severity items create inline threads — everything else lives in the Check Run summary to keep the PR timeline clean).
4. Emits a **Blast Radius Summary** in the Check Run, showing propagation paths all the way to the nearest API boundary.
5. For low-risk PRs (only HORIZONTAL infrastructure or UTILITY changes, no VERTICAL business logic), issues an automatic **Semantic LGTM** approval.

**Click-to-Commit fixes:** For violations where Phase 6's ast-grep has an auto-remediation, unerr posts a GitHub `suggestion` block. One click. No IDE context switch needed.

**Debate the Bot:** Developers can query their local agent — "Why did unerr block PR #42?" — and get the full Temporal workflow trace, specific failures, and remediation guidance via the `review_pr_status` MCP tool.

---

## The Enterprise Guardrail Suite (Scale Tier)

For organizations where AI coding agents touch regulated, high-stakes, or security-sensitive systems, unerr offers an advanced guardrail suite. These are purpose-built for the problems that only become visible when AI coding operates at organizational scale.

**Security & Compliance**

- **PII Exfiltration Detection (Telemetry Trap):** Taint analysis from PII-tagged entities to unprotected logging sinks. Catches the AI when it accidentally logs a user's email address alongside a debug payload.
- **Cloud IAM Privilege Escalation:** Detects when new infrastructure code grants wildcard permissions or escalates roles beyond the principle of least privilege.
- **Toxic Supply Chain:** Flags new dependency additions with anomalous version patterns or known supply chain risk indicators.
- **Data Residency Violations:** Detects cross-region data flows that would violate GDPR or other data sovereignty requirements.
- **Trade Secret Exfiltration:** Monitors for code paths where proprietary business logic is inadvertently exposed via unsecured APIs or logging.

**Data Safety**

- **Destructive Schema Drift:** Catches column drops or renames in migration files without a corresponding safe migration script (blue/green, expand/contract).
- **Cache Desync Detection:** Flags when a data model changes but its cache layer isn't invalidated, creating silent staleness bugs.
- **State Machine Orphaning:** Detects when a schema or type change makes existing state machine transitions unreachable.
- **Ghost Migration Detection:** Finds database migrations that were committed but never applied to a tracked environment.

**Production Reliability**

- **N+1 Query Detection:** AST rule: database call inside a loop body. Catches the most common performance regression in AI-generated data access code.
- **Connection Pool Exhaustion:** Detects infrastructure client instantiation (Prisma, Redis) inside request handler scope — a common AI mistake that causes connection leaks under load.
- **Idempotency Risk:** Flags webhook and trigger handlers that mutate state without a detectable idempotency key or distributed lock.
- **Rate Limit Blindness:** Detects external API calls inside unbounded loops without backoff logic.
- **Zero-Downtime Migration Violations:** Blocks deployments where schema changes don't follow a safe migration path.
- **Mock Theater Detection:** Identifies test files where the mock-to-assertion ratio indicates the tests aren't testing anything real.

**Architecture Integrity**

- **Bounded Context Bleed:** Catches domain entities crossing service boundaries they shouldn't. Your payment module shouldn't be directly importing your user notification internals.
- **Trust Boundary Violations:** Graph traversal from user-input sources to database/API sinks, validating that every path passes through an authentication or validation node.
- **Business Logic Invariants:** Enforces that financial, inventory, and other critical mutations are always preceded by the required validation layer.
- **Resilience Scoring (NFR Drift):** Per-entity score measuring whether external calls include retry/timeout/circuit-breaker patterns. Surfaces when the AI writes a raw external API call with no resilience wrapping.
- **Event Blackhole Detection:** Identifies domain events that are published but have no registered consumer — a common architectural regression when AI refactors event-driven systems.
- **Zombie Infrastructure:** Detects provisioned cloud resources with no active code references — the AI created an S3 bucket or Lambda that nothing calls anymore.

**Multi-Agent Governance**

- **Agent-on-Agent Collision (Swarm Deadlock):** When multiple AI agents are working in the same codebase simultaneously, unerr detects conflicting edits and deadlock patterns before they merge.
- **Context Bankruptcy (Runaway Context):** Detects when an AI agent is operating with a context window so stale that its suggestions are likely to conflict with recent changes — and halts before it does damage.
- **Idiomatic Drift:** Tracks whether AI-generated code drifts from the idiomatic patterns of the language and framework your team has established, even when it's syntactically valid.
- **Cognitive Debt Score:** Measures the rewind-to-commit ratio per feature area, surfacing where human-AI alignment is breaking down and human oversight needs to increase.

---

## Onboarding: Zero to Protected in 60 Seconds

```
npx @autorail/unerr
```

Within 60 seconds of running that command, unerr will:

1. Open your browser for one-click OAuth — no copy-pasting API keys, no dashboard navigation.
2. Auto-detect your IDE (Cursor, VS Code, etc.) and git remote.
3. Connect your repos (GitHub, GitLab, Bitbucket, or local) and configure the MCP server automatically.
4. Trigger your first full codebase index.
5. Surface the **top 3 architectural anti-patterns your AI agent was about to hallucinate** — before you write another line.

No credit card for the free tier. No dashboard configuration. No six-step tutorial. Just instant, accurate codebase awareness in your AI agent's context window.

For repos not connected to a remote provider, `unerr push` from any local directory works the same way.

---

## Growth Strategy: How unerr Spreads

unerr is designed to grow the way the best developer tools grow — through individual developers falling in love with it, then bringing it to their teams, then their companies. Here's the flywheel.

### The PLG Loop: Solo Dev → Team → Enterprise

The indie hacker installs unerr in 60 seconds and it immediately catches something embarrassing their AI was about to do. They tweet about it. Their team lead sees it, installs it on the shared repo, and starts enforcing rules. Six months later, the CTO asks "can we get SOC2-level PII detection on this?" — and that's the Scale Tier sale.

This is the exact playbook behind the tools that have dominated developer tooling in 2024–2026: start with individual developer delight, ride word-of-mouth to teams, convert teams to enterprise contracts.

### The "Saved Your Job" Receipt

When unerr intercepts a genuinely dangerous AI decision — an N+1 query about to hit production, PII about to flow into Sentry, a database column about to be silently dropped — it generates a clean, human-readable **intercept summary** of exactly what it prevented and what the blast radius would have been.

These summaries are designed to be shareable. Not because we asked developers to share them — because the natural human reaction when you see "unerr just blocked your AI from touching 34 downstream callers including your payment flow" is to screenshot it and post it.

> *Example intercept — what this looks like in practice:*
>
> ```
> ⛔ unerr blocked: N+1 Query Pattern Detected
>
> Your agent was about to call db.users.findMany() inside a forEach loop
> in processCheckoutItems() — generating 1 query per cart item.
>
> Blast radius: 12 callers affected. 2 are on the payment flow.
> Est. impact at 1,000 concurrent users: ~12,000 unnecessary DB round trips/min.
>
> Suggested fix: batch query applied. ✓ Click to commit.
> ```

This is the kind of output that gets posted on X with "ok this is actually insane." That's the PLG loop working.

### Fearless Speed Is the Core Emotion

The most viral developer tools don't sell governance or compliance — they sell *freedom*. Cursor grew because it made developers feel superhuman. Claude Code went viral because it handled complex multi-file refactoring without losing the plot.

unerr's viral hook is the same emotion, one layer up: **fearless speed at the architectural level**. Not "slow down and review your AI's code." But "move as fast as you want — we're watching the things you'd never think to check."

The taglines that resonate at this level aren't about security or rules. They're about removing fear:

- *"Let your AI write the code. Let unerr protect the architecture."*
- *"The adult in the room for your AI coding agent."*
- *"Stop fixing your AI's mistakes. We'll catch them before they happen."*

### The Enterprise Trojan Horse

Because unerr starts as a free, instant, no-friction individual developer tool, it naturally flows upward through organizations via bottom-up adoption. The sequence:

1. A solo developer or indie hacker installs unerr and loves it.
2. They join a company (or evangelize it internally at their current one).
3. The team adopts the Launch Tier for shared repo governance.
4. Compliance or security surfaces a need for PII detection or data residency enforcement.
5. The CTO signs the Scale Tier contract — a deal driven entirely by developer-led demand, not a top-down sales motion.

This mirrors the adoption curves of Vercel, Supabase, Railway, and every other developer-infrastructure company that scaled through PLG before adding enterprise sales.

---

unerr is built on a hexagonal architecture with clear separation between business logic and infrastructure adapters. Core components:

- **Knowledge Graph (ArangoDB):** Org-scoped graph of every entity, call edge, justification, pattern, and rule. Queries via AQL with GraphRAG context building.
- **Semantic Search (pgvector):** Embedding pipeline for hybrid semantic + structural search. Used by MCP tools, pattern discovery, and drift detection.
- **Workflow Engine (Temporal):** All long-running operations (indexing, justification, PR review, rewind) are durable, replay-safe Temporal workflows. No silent job failures.
- **MCP Server (Hosted):** Your AI agent connects once. Tools include `get_function`, `search_by_purpose`, `analyze_impact`, `check_patterns`, `review_pr_status`, `rewind`, and more.
- **Rules Engine (ast-grep + Semgrep):** Deterministic, LLM-free enforcement at check time. Fast, cheap, auditable. LLM is only used at rule-authoring time.
- **CLI (`@autorail/unerr`):** Local ingestion, rewind operations, and zero-friction onboarding. Supports any git provider (GitHub, GitLab, Bitbucket) and local repos.

---

## Pricing Tiers (Overview)

| Tier | For | Key Capabilities |
|---|---|---|
| **Launch** | Indie devs, small teams | MCP integration, knowledge graph, rewind, blast radius, ADRs, PR review |
| **Growth** | Scaling startups | + Trust boundary analysis, resilience scoring, N+1 detection, API contract breakage, cognitive debt |
| **Scale** | Enterprise / regulated industries | + Full security suite (PII, IAM, supply chain, data residency), multi-agent governance, bounded context enforcement |

---

## The One-Sentence Pitch (By Audience)

- **To a vibe coder:** "Code as fast as your AI can type. unerr catches the architectural mistakes before you ship them."
- **To an indie hacker:** "Build a production-grade SaaS solo — unerr is the Senior Staff Engineer you can't afford to hire."
- **To a startup CTO:** "unerr is how you scale AI coding across your team without losing architectural control."
- **To an engineering manager:** "AI code is flowing into your monorepo daily. unerr is the governance layer that makes that safe without slowing anyone down."
- **To an enterprise buyer:** "unerr ensures your AI agents don't accidentally leak PII, drop a production column, or escalate IAM permissions — automatically, on every commit."
- **To an SRE:** "unerr catches N+1 queries, connection leaks, and zero-downtime violations before they page you at 2am."
- **To a DevSecOps team:** "Taint analysis, supply chain checks, and data residency enforcement — automatically, on every AI-generated commit."

---

*unerr is built by AutoRail — the infrastructure platform for AI-first applications. [autorail.dev](https://autorail.dev)*