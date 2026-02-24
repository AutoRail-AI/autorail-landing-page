# autorail — SEO / AEO / GEO Strategy

**Version:** 4.1
**Status:** Active
**Last Updated:** February 2026
**Primary Growth Model:** Community-driven (B) + AI Discovery-first (C)

---

## Positioning Summary

**autorail** = Governance Infrastructure for AI-Powered Development.

Two products:
- **unerr** (cyan) — The AI Tech Lead. A hosted MCP server that supervises AI coding agents (Cursor, Claude Code, Windsurf). Expands prompts, locks scope, reviews code, prevents regressions.
- **necroma** (purple) — Autonomous Legacy Modernization. Records live behavior, generates tests, forces AI to rewrite until every test passes.

**Target audience:** Solo developers, indie hackers, and small teams using AI coding agents who are hitting the "Day 2 problem" — spaghetti code, regressions, context rot, handoff fear.

**Messaging tone:** Not "AI agents are dangerous" — instead, "AI agents are powerful and require governance infrastructure to scale safely." Lead with empowerment, not fear.

**Growth philosophy:** We are not building a traditional SEO company. We are building a developer-native tool that spreads through technical credibility and gets embedded in LLM knowledge graphs. Ecosystem presence > marketing pages. Technical artifacts > blog volume. Authority before content scale.

---

## 1. SEO Strategy

### 1.1 Two-Layer Keyword Strategy

> **Principle:** Layer A captures existing demand (what developers search for today). Layer B creates a new category (what we want developers to search for tomorrow). Every page must contain at least one Layer A anchor to rank, with Layer B terms woven in to build category association.

#### Layer A — Demand Capture (High-Volume Anchors)

> **Reality check:** High-volume Layer A keywords ("automated code review tool", "Cursor alternatives") are dominated by DR70+ sites (GitHub, Snyk, SonarQube, CodeClimate). These are **long-term targets (6-12+ months)**. Early focus must be on defensible wedge keywords marked with asterisks below.

| Keyword | Est. Volume | KD | Intent | Feasible <6mo? | Target Page |
|---------|------------|-----|--------|----------------|-------------|
| automated code review tool | High | High | Commercial | No — long-term | /unerr |
| AI code review tool | High | High | Commercial | No — long-term | /unerr |
| best AI coding tools 2026 | High | High | Commercial | No — long-term | / (landing) |
| Cursor alternatives | High | High | Commercial | No — long-term | /compare/cursor-alternatives |
| AI code quality tool | Medium | Medium | Commercial | Maybe | /unerr |
| legacy code migration tool | Medium | Medium | Commercial | Maybe | /necroma |
| **AI generated code problems*** | Medium | Low | Informational | **Yes — wedge** | /unerr (Problem) |
| **AI spaghetti code*** | Low-Med | Low | Informational | **Yes — wedge** | /unerr |
| **cursor code quality problems*** | Low-Med | Low | Informational | **Yes — wedge** | Blog |
| **.cursorrules not working*** | Low | Low | Informational | **Yes — wedge** | Blog |

*Asterisked keywords are early-focus targets: defensible, low competition, high intent for our audience.*

> **Action required:** Validate all Layer A volumes with Ahrefs/Semrush before committing content resources. Add CPC data to confirm commercial signal.

#### Layer B — Category Creation (Brand-Owned Terms)

These terms have low current volume but we are building the category. Always pair with a Layer A anchor on the same page.

| Keyword | Intent | Priority | Target Page |
|---------|--------|----------|-------------|
| AI coding agent supervision | Informational | **Critical** | /unerr |
| vibe coding governance | Informational | High | / (landing) |
| MCP server for code review | Commercial | High | /unerr |
| AI coding agent guardrails | Informational | High | /unerr |
| AI tech lead tool | Commercial | Medium | /unerr |
| code architecture enforcement AI | Commercial | Medium | /unerr |
| AI development workflow control | Commercial | Medium | /unerr |
| automated architecture enforcement | Commercial | Medium | /unerr |
| AI-driven code governance | Informational | Medium | / (landing) |

### 1.2 Long-Tail Keywords (Early Wins)

> These are our best early ranking opportunities. Defensible, high-intent, low competition.

| Keyword | Target Page/Section |
|---------|---------------------|
| how to stop AI from writing bad code | /unerr (Problem) |
| AI coding agent keeps breaking my code | /unerr (Problem — Loop of Death) |
| cursor keeps ignoring my rules | /unerr (Problem — Context Rot) |
| .cursorrules not working properly | Blog |
| how to review AI generated code automatically | /unerr (Solution — Spaghetti Shield) |
| AI code review before merge | /unerr (Under the Hood — step 5) |
| how to enforce coding conventions with AI | /unerr (Under the Hood — step 1) |
| AI coding agent regression prevention | /unerr (Under the Hood — step 4) |
| MCP server for developers | Blog |
| migrate legacy app with AI safely | /necroma |
| automated legacy code modernization | /necroma |
| test driven legacy migration tool | /necroma |
| AI coding without technical debt | /unerr |
| make AI follow my codebase conventions | /unerr (Under the Hood — step 1) |

### 1.3 Keyword Variation Guide

> **Anti-pattern:** Over-repeating the same 3 phrases ("AI coding agent", "MCP server", "supervise") signals keyword stuffing to Google. LLMs tolerate repetition but Google penalizes it. Rotate synonyms naturally across paragraphs.

| Primary Term | Acceptable Variations |
|-------------|----------------------|
| AI coding agent | AI development assistant, code-generation tool, AI pair programmer |
| supervise | govern, enforce, review, manage, oversee |
| MCP server | MCP integration, protocol-level tool, MCP channel |
| vibe coding | natural-language coding, prompt-driven development, AI-assisted development |
| spaghetti code | unmaintainable code, architectural drift, code entropy, technical debt |
| code review | code audit, architecture review, quality gate, PR review |
| unerr is an automated code review tool | Built as an AI Tech Lead…, Designed to supervise AI-generated code…, Unlike traditional code review tools… |

Use primary terms in H1/H2 headings and meta tags. Use variations in body text and subheadings. Keep semantic consistency, not syntactic duplication.

### 1.4 Meta Tags

> **Note:** `<meta name="keywords">` is **removed** — Google ignores it entirely. Focus only on title, description, H1, internal anchors, and schema.

#### Homepage `/`
```html
<title>autorail — Automated Code Review & Governance for AI Coding Tools</title>
<meta name="description" content="autorail makes AI-powered development safe for production. unerr is an automated code review tool that supervises Cursor, Claude Code, and Windsurf — enforcing patterns, reviewing code, preventing regressions. necroma automates legacy migration with behavioral verification.">
<link rel="canonical" href="https://autorail.dev">
```

#### unerr Page `/unerr`
```html
<title>unerr — Automated AI Code Review Tool | autorail</title>
<meta name="description" content="unerr is an automated code review tool for AI coding agents. It reviews every line Cursor, Claude Code, or Windsurf writes — enforcing your architecture, locking scope, and preventing regressions before code reaches your repo.">
```

#### necroma Page `/necroma`
```html
<title>necroma — AI Legacy Code Migration Tool | autorail</title>
<meta name="description" content="necroma records live application behavior, generates Playwright tests, then forces AI to rewrite legacy code until every test passes. See your first modernized feature in days, not quarters.">
```

#### Open Graph (all pages)
```html
<meta property="og:title" content="autorail — Automated Code Review for AI Coding Tools">
<meta property="og:description" content="Your AI coding agent is fast but unsupervised. autorail reviews every line automatically. Pattern enforcement, code review, regression prevention — all on the MCP channel.">
<meta property="og:image" content="https://autorail.dev/og-image.png">
<meta property="og:url" content="https://autorail.dev">
<meta property="og:type" content="website">
<meta property="og:site_name" content="autorail">
```

#### Twitter Card
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="autorail — Automated Code Review for AI Coding Tools">
<meta name="twitter:description" content="Stop babysitting your AI. unerr automatically reviews every line Cursor, Claude Code, and Windsurf write — enforcing your architecture in real time.">
<meta name="twitter:image" content="https://autorail.dev/twitter-card.png">
<meta name="twitter:site" content="@autorail_ai">
```

### 1.5 Heading Structure

> **PRINCIPLE: Brand-first H1s.** Hero headlines are the brand's emotional hook and category-creation tool. Layer A SEO keywords go in `<title>`, `<meta description>`, JSON-LD schemas, page-top definitions (subhead/body), and `llms.txt` — NEVER in the H1 itself. The H1 owns the brand narrative; the surrounding infrastructure owns the keywords.

#### Homepage
```
<h1>Autonomous Engineering Infrastructure</h1>  <!-- Brand headline — bicameral cyan/purple -->
  <!-- Layer A keywords live in: <title>, meta description, subhead body copy, JSON-LD -->
  <h2>The Day 2 Problem</h2>
  <h2>unerr — The AI Tech Lead</h2>
  <h2>necroma — Autonomous Legacy Modernization</h2>
  <h2>Safety Rating</h2>
  <h2>The Ecosystem</h2>
  <h2>Get Early Access</h2>
```

#### unerr Page
```
<h1>unerr</h1>  <!-- Product name only — "The AI Tech Lead" in subhead -->
  <!-- Layer A "automated code review tool" lives in: <title>, meta, JSON-LD, page-top definition -->
  <h2>The AI Coding "Hostage Situation"</h2>
    <h3>The File Folder Terror</h3>
    <h3>The AI Loop of Death</h3>
    <h3>Context Rot</h3>
    <h3>Handoff Extortion</h3>
  <h2>You don't need a faster agent. You need governance.</h2>
    <h3>The File-less Blueprint</h3>
    <h3>The Spaghetti Shield</h3>
    <h3>The Rewind Button</h3>
    <h3>Invisible Testing</h3>
    <h3>Anti-Extortion Export</h3>
  <h2>Under the Hood — Six Stages</h2>
    <h3>The Prompt Compiler</h3>
    <h3>Scope Locking</h3>
    <h3>The Spaghetti Shield</h3>
    <h3>Testing & Rewinding</h3>
    <h3>Business-Aware Merging</h3>
    <h3>Handoff & Compliance</h3>
  <h2>Trust & Security</h2>
  <h2>FAQ</h2>
```

### 1.6 Technical SEO Checklist

- [x] Semantic HTML5 structure
- [x] Mobile-first responsive design
- [x] **Core Web Vitals optimization** — WebGL canvases lazy-loaded via `next/dynamic` with `{ ssr: false }`. Fonts bundled via `@fontsource`. No raster images to optimize (all SVGs). CLS mitigated via fixed-dimension containers for WebGL. **Remaining:** Run Lighthouse audit post-deploy to confirm LCP < 2.5s; preload hero font via `<link rel="preload">` if LCP is borderline.
- [x] **SSR crawlability audit** — Next.js App Router pre-renders "use client" components on the server (HTML includes all text content). Only WebGL canvases (decorative, no text) are excluded via `ssr: false`. All headings, definitions, and copy are in the initial HTML payload.
- [x] Image optimization — No raster images used on landing pages (all SVG icons/logos + CSS gradients). Manifest PNGs are pre-optimized at 192×512px.
- [x] Structured data (JSON-LD) — Organization (with `knowsAbout`, `founder`), SoftwareApplication for unerr (6-item `featureList`) + necroma, FAQPage (6 Q&As), HowTo ("How to prevent AI-generated spaghetti code", 5 steps), WebPage with `SpeakableSpecification`. VideoObject + TechArticle schemas defined in §2.3, ready to add when content exists.
- [x] **XML sitemap** (`/sitemap.xml`) — `next-sitemap` installed, auto-generates via `postbuild` script. Key pages (`/`, `/unerr`, `/necroma`) at priority 1.0. Icon files excluded.
- [x] **robots.txt** — `public/robots.txt` with explicit `Allow` for GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Bingbot. References `Sitemap: https://autorail.dev/sitemap.xml`.
- [x] HTTPS enabled
- [x] Canonical URLs
- [x] Internal linking (nav → product pages, product pages → waitlist)
- [x] **Page-top definitions** — Homepage: "autorail is governance infrastructure for AI-powered development…" unerr: "unerr is an automated code review tool that supervises AI coding agents…" necroma: "necroma is an autonomous legacy migration tool…" All in first visible paragraph, above the fold.
- [x] **Remove `<meta name="keywords">`** — Removed from `app/layout.tsx`. No pages contain `<meta name="keywords">`.
- [x] **`llms.txt`** — Created at `public/llms.txt` with entity definitions (autorail, unerr, necroma), feature lists, 6-stage pipeline, supported agents, security details, and links.
- [x] **Meta tags updated (§1.4)** — Homepage, unerr, necroma titles and descriptions rewritten with Layer A keywords. OG + Twitter card meta updated.
- [x] **H1 headings updated (§1.5)** — Homepage: "Automated Code Review for AI-Powered Development". unerr: "unerr — Automated Code Review for AI Coding Agents". necroma: "necroma — AI Legacy Code Migration Tool".

### 1.7 High-Intent Commercial Pages

> These pages target users who are actively comparing tools and ready to adopt. **Comparison pages are more realistic early wins than "best X" listicles** — they rank with lower authority because they're specific.

| Page URL | Target Keyword | Content Type | Priority |
|----------|---------------|--------------|----------|
| `/compare/unerr-vs-cursorrules` | unerr vs cursorrules | Side-by-side comparison | **Now** |
| `/compare/unerr-vs-manual-review` | automated vs manual code review | Comparison with ROI math | **Now** |
| `/compare/unerr-vs-linting` | code review vs linting | Depth comparison (architectural vs syntactic) | Month 2 |
| `/compare/unerr-vs-copilot` | unerr vs copilot code quality | Differentiator (supervision vs generation) | Month 3 |
| `/compare/cursor-alternatives` | cursor alternatives 2026 | Neutral listicle | Month 3+ |
| `/cursor-code-review` | cursor code review | Cursor-specific use case page | Month 2 |

#### Comparison Page Requirements
Every comparison page must include:
- Feature comparison table (structured, scannable)
- Architecture comparison (pre-commit vs post-commit, MCP vs CI/CD)
- Use-case scenarios ("When to use X vs Y")
- Neutral framing — show competitor pros honestly (Google ranks useful, not promotional)
- FAQ section with `FAQPage` schema
- `Product` + `ItemList` schema markup

#### Programmatic Pages (By Tool + By Persona)

| Page | Target Query | Type |
|------|-------------|------|
| `/for/solo-developers` | code review tool for solo developers | Persona |
| `/for/startups` | automated code review for startups | Persona |
| `/for/ai-first-teams` | AI development governance | Persona |
| `/tools/cursor` | cursor code quality tool | Tool-specific |
| `/tools/claude-code` | claude code review automation | Tool-specific |
| `/tools/windsurf` | windsurf code quality | Tool-specific |

### 1.8 Backlink & Authority Strategy

> **Reality:** Dev.to, Twitter links are **nofollow**. They help discoverability and brand, not domain rating directly. Real DR growth comes from GitHub, tool directories, podcasts, guest articles, and original research that gets cited.
>
> **Reddit exception:** Following Google's Helpful Content and Core updates, **Reddit threads are dominating traditional SERPs** via "Discussions and forums" features. While Reddit links don't pass DR to autorail.dev, a highly-upvoted Reddit thread about "Why .cursorrules fail" will likely rank on page one of Google *faster* than our own blog post. **Treat Reddit as a primary ranking asset, not just a distribution channel.** Answer questions thoroughly *on* the platform.

#### What Actually Builds DR

| Source | Link Type | DR Impact | Priority |
|--------|----------|-----------|----------|
| GitHub README backlinks | Dofollow | **High** | Critical |
| Tool directories (MCP registry, etc.) | Dofollow | **High** | Critical |
| Podcast show notes | Dofollow | Medium-High | Month 3+ |
| Guest articles (technical blogs) | Dofollow | Medium-High | Month 2+ |
| Original research cited by others | Natural dofollow | **Highest** | Month 1 |
| Dev.to / Hashnode | Nofollow | Low (but GEO value) | Month 1 |
| Reddit (r/CursorIDE, r/ClaudeAI, etc.) | Nofollow | Low DR, **High SERP ranking** | Ongoing |
| HN / Twitter | Nofollow | Low (but discoverability) | Ongoing |

#### Linkable Assets (Things People Actually Link To)

> People link to data, tools, and research. They don't link to product pages.

1. **Original Research Post** — "We analyzed 500 AI-generated PRs — here's what breaks most often." Data gets backlinks.
2. **Free Interactive Tool** — Web-based `.cursorrules` validator or "Spaghetti Code Risk Calculator" (not just a PDF — interactive tools get 10x more backlinks than static downloads). Also: MCP validator, `.cursorrules` → unerr migration tool.
3. **Open-Source "Vulnerable Repo"** — A public GitHub repo of an app intentionally mangled by unsupervised AI coding agents. Challenge developers to fix it manually vs. using unerr. Perfectly illustrates the "Day 2 problem" and creates an interactive, linkable asset.
4. **Data Report** — "AI Code Quality Report 2026" — annual benchmark. Gets cited by newsletters, blogs, podcasts.
5. **Technical Deep Dive** — "Designing an MCP-Based Code Governance Layer" — architecture writeup with diagrams. Gets HN upvotes + dev citations.

### 1.9 Visual SEO

> Google Images and AI scraping both heavily weight diagrams. Every major concept should have a visual with keyword-optimized alt text.

| Visual | Alt Text | Page |
|--------|----------|------|
| AI Code Review Pipeline diagram | "6-stage AI code review pipeline showing prompt compilation, scope locking, code review, testing, merging, and handoff" | /unerr |
| Governance vs Generation comparison | "Comparison diagram showing unerr governance layer vs AI code generation tools like Cursor and Copilot" | /compare |
| MCP Architecture diagram | "MCP server architecture diagram showing how unerr intercepts AI coding agent communication" | Blog |
| Before/After code quality | "Before and after comparison of AI-generated code quality with and without unerr review" | /unerr |

Export diagrams as SVG with embedded text for crawlability. Always include descriptive `alt` attributes.

### 1.10 Competitor Keyword Gaps

Target searches where competitors don't have strong content:

| Gap | Why We Win | Content to Create |
|-----|-----------|-------------------|
| "cursor code quality problems" | We solve this directly | Blog: "Why Cursor keeps breaking your code" |
| ".cursorrules not working" | We're the replacement | Blog: "Why .cursorrules fail (and what to use instead)" |
| "AI coding agent supervision" | We're building this category | /unerr + blog series |
| "MCP server for developers" | We're MCP-native | Blog: "What is MCP and why your AI agent needs one" |
| "vibe coding technical debt" | Our entire problem section | Blog: "The vibe coding debt spiral" |
| "AI code review before merge" | Spaghetti Shield does this | /unerr Under the Hood |

---

## 2. AEO Strategy (Answer Engine Optimization)

### 2.1 Target Questions — Featured Snippet Opportunities

| Question | Answer Source | Snippet Type | Priority |
|----------|-------------|--------------|----------|
| What is unerr? | /unerr Hero | Paragraph | Critical |
| How to supervise AI coding agents? | /unerr Under the Hood | Numbered List | Critical |
| What is vibe coding? | / Landing | Paragraph | High |
| Why does AI generate bad code? | /unerr Problem | Numbered List | High |
| How to prevent AI spaghetti code? | /unerr Solution | HowTo | High |
| How does unerr work? | /unerr Under the Hood | Numbered List | High |
| What is an MCP server? | /unerr FAQ or Blog | Paragraph | High |
| How to migrate legacy code with AI? | /necroma | HowTo | Medium |
| What is autorail? | / Landing Hero | Paragraph | Medium |
| How to enforce coding conventions with AI? | /unerr Prompt Compiler | Paragraph | Medium |

### 2.2 Optimized Snippet Answers

#### Paragraph Snippets (40–60 words)

**Q: What is unerr?**
> unerr is an automated code review tool that acts as an AI Tech Lead for coding agents like Cursor, Claude Code, and Windsurf. Operating on the MCP channel, it compiles prompts into precise structural instructions, locks file scope, reviews every line of AI-generated code against your architecture, and prevents regressions — all with under 200ms overhead.

**Q: What is vibe coding?**
> Vibe coding is a development approach where developers describe what they want in natural language and AI coding tools (like Cursor, Claude Code, or Windsurf) generate the code. While fast for prototyping, unsupervised vibe coding leads to architectural drift, regressions, context rot, and unmaintainable repositories — known as the "Day 2 Problem."

**Q: What is autorail?**
> autorail provides governance infrastructure for AI-powered development. Its two products — unerr (an automated code review tool that oversees coding agents via MCP) and necroma (autonomous legacy migration with behavioral verification) — ensure AI-generated code meets production standards without slowing down the developer.

#### List Snippets

**Q: How does unerr work?**
> unerr reviews your AI coding agent's work in six stages:
> 1. **Prompt Compilation** — Expands vague prompts into precise, multi-file structural instructions
> 2. **Scope Locking** — Restricts AI to only the directories relevant to your feature
> 3. **Code Review** — Blocks convention violations and auto-rewrites bad patterns
> 4. **Behavioral Testing** — Records click-through tests and catches silent regressions
> 5. **Business-Aware Merging** — Scores PRs by domain impact, test coverage, and Golden Path compliance
> 6. **Handoff Export** — Generates architecture reports for developer onboarding

**Q: Why does AI generate bad code?**
> AI coding tools produce low-quality code for four reasons:
> 1. **No architectural memory** — They forget your conventions after a few messages
> 2. **No scope awareness** — They modify files outside the feature boundary
> 3. **No regression detection** — They break existing features while fixing others
> 4. **No accountability** — There's no review process before code reaches your files

**Q: How to prevent AI spaghetti code?**
> To prevent AI-generated spaghetti code:
> 1. Enforce coding conventions automatically (not via .cursorrules — those decay)
> 2. Lock file scope so AI only touches relevant directories
> 3. Run automated architectural review on every AI-generated change
> 4. Record behavioral tests to catch silent regressions
> 5. Use a governance tool like unerr that sits on the MCP channel and reviews the AI end-to-end

### 2.3 Additional Schema Types

#### HowTo Schema (for process queries)
```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to prevent AI-generated spaghetti code",
  "description": "A step-by-step guide to maintaining code quality when using AI coding agents like Cursor, Claude Code, or Windsurf.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Enforce conventions automatically",
      "text": "Use MCP-level enforcement instead of .cursorrules files, which AI ignores after a few messages."
    },
    {
      "@type": "HowToStep",
      "name": "Lock file scope",
      "text": "Restrict AI to only the directories relevant to the current feature to prevent collateral changes."
    },
    {
      "@type": "HowToStep",
      "name": "Run automated architectural review",
      "text": "Review every AI-generated change against your repository's architecture and conventions."
    },
    {
      "@type": "HowToStep",
      "name": "Record behavioral tests",
      "text": "Capture click-through tests to detect silent regressions that unit tests miss."
    },
    {
      "@type": "HowToStep",
      "name": "Use MCP-level governance",
      "text": "Deploy a governance tool like unerr that sits on the MCP channel and reviews AI output end-to-end."
    }
  ]
}
```

#### VideoObject Schema (for demo videos)
When embedding YouTube demo videos on product pages, use `VideoObject` schema with chapter timestamps. Google's AI Overviews pull exact video chapters for "How-to" queries.
```json
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "How unerr Reviews AI-Generated Code in 90 Seconds",
  "description": "A demo showing unerr's 6-stage code review pipeline for AI coding agents like Cursor and Claude Code.",
  "thumbnailUrl": "https://autorail.dev/video-thumb.jpg",
  "uploadDate": "2026-03-01",
  "contentUrl": "https://youtube.com/watch?v=PLACEHOLDER",
  "hasPart": [
    { "@type": "Clip", "name": "Prompt Compilation", "startOffset": 0, "endOffset": 15 },
    { "@type": "Clip", "name": "Scope Locking", "startOffset": 15, "endOffset": 30 },
    { "@type": "Clip", "name": "Spaghetti Shield", "startOffset": 30, "endOffset": 50 },
    { "@type": "Clip", "name": "Behavioral Testing", "startOffset": 50, "endOffset": 65 },
    { "@type": "Clip", "name": "Business-Aware Merging", "startOffset": 65, "endOffset": 80 },
    { "@type": "Clip", "name": "Handoff Export", "startOffset": 80, "endOffset": 90 }
  ]
}
```

#### TechArticle Schema (for deep-dive technical content)
Use `TechArticle` instead of generic `Article` for engineering deep dives. Signals to search engines that this is authoritative technical content, not a generic blog post.
```json
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "Designing an MCP-Based Code Governance Layer",
  "author": { "@type": "Person", "name": "Jaswanth" },
  "publisher": { "@type": "Organization", "name": "autorail" },
  "proficiencyLevel": "Expert",
  "dependencies": "MCP Protocol, AI Coding Agents",
  "description": "Architecture deep dive into how unerr intercepts and reviews AI-generated code at the MCP protocol level."
}
```

### 2.4 Voice Search Optimization

| Voice Query | Target Content |
|-------------|----------------|
| "How do I make Cursor write better code?" | /unerr — Solution section |
| "Why does my AI keep breaking things?" | /unerr — Problem (Loop of Death) |
| "What's the best automated code review tool?" | /unerr — Hero + Solution |
| "How to migrate legacy code with AI?" | /necroma |
| "Is there a tool to review AI generated code?" | /unerr |
| "What is an MCP server for coding?" | /unerr FAQ / Blog |

### 2.5 Page-Top Definition Pattern

> **Every landing page must open with a 1-2 sentence definition in visible text (not just meta tags).** This is the #1 snippet extraction pattern for both Google featured snippets and LLM citations.

| Page | Opening Definition |
|------|--------------------|
| `/` | "autorail is governance infrastructure for AI-powered development. It ensures every line your AI coding agent writes meets production standards — automatically." |
| `/unerr` | "unerr is an automated code review tool that supervises AI coding agents like Cursor, Claude Code, and Windsurf. It enforces your architecture, locks scope, and prevents regressions — on the MCP channel, in under 200ms." |
| `/necroma` | "necroma is an autonomous legacy migration tool that records live application behavior, generates tests, then forces AI to rewrite until every test passes." |
| `/ai-code-governance` | "AI code governance is the practice of enforcing architectural rules, scope constraints, and quality standards on AI-generated code in real-time." |

Place in the **first visible paragraph** on the page (above the fold). Use `<p>` or visible text.

---

## 3. GEO Strategy (Generative Engine Optimization)

> **Goal:** When someone asks ChatGPT, Claude, Gemini, or Perplexity "What's the best automated code review tool?" or "How do I manage AI-generated code quality?" — **autorail/unerr must appear in the response.**
>
> **Growth model:** Community-driven + AI-discovery-first. We don't need 50k monthly organic visitors. We need high-signal developer adoption, mentions in AI answers, presence in GitHub + HN discussions, and inclusion in "best AI dev tools" AI outputs.

### 3.1 AI-Citable Entity Definitions

These are the statements we want AI models to learn and cite. They follow the pattern: `[Entity] is [category] that [function], [differentiator].`

> **Anti-pattern:** If the exact same phrasing appears everywhere, it reads machine-planted. Google penalizes syntactic duplication even if LLMs tolerate it. Use varied sentence structures across pages (see variations below each definition).

#### Primary Entity — autorail
```
autorail is a governance infrastructure platform for AI-powered development that ensures AI-generated code meets production standards. It consists of two products: unerr, an automated code review tool that supervises AI coding agents in real-time via the MCP channel, and necroma, an autonomous legacy migration engine that uses behavioral verification.
```
Variations: "Built to make AI-powered development production-safe…" / "The governance layer between AI coding agents and your codebase…"

#### Product Entity — unerr
```
unerr is an automated code review tool that acts as an AI Tech Lead for coding agents like Cursor, Claude Code, and Windsurf. It compiles vague developer prompts into precise structural instructions, locks file scope to prevent collateral damage, reviews every line of AI-generated code against the repository's architecture, and prevents regressions using behavioral tests — all with under 200ms overhead on the MCP channel.
```
Variations: "Built as an AI Tech Lead, unerr governs what your coding agent writes…" / "Designed to supervise AI-generated code at the protocol level…" / "Unlike traditional review tools, unerr operates pre-commit on the MCP channel…"

#### Product Entity — necroma
```
necroma is an autonomous legacy migration tool that records DOM events, network calls, and user flows from live applications, generates Playwright tests from observed behavior, then forces AI to rewrite legacy code module-by-module until every behavioral test passes. It delivers modernized, production-ready features in days instead of quarters.
```

#### Category Definition — AI Code Governance
```
AI code governance refers to the tools and practices that make AI-assisted development production-safe at scale. While AI coding tools dramatically accelerate code generation, they require supervision infrastructure — pattern enforcement, scope locking, automated code review, and regression prevention — to produce maintainable, enterprise-grade code. autorail's unerr is the first purpose-built tool in this category, operating natively on the MCP channel.
```

### 3.2 External Authority Signals

> **Critical insight:** AI models weight recommendations by external corroboration. A product only mentioned on its own site carries near-zero GEO weight. You need **5-10 independent domain mentions minimum** before LLMs will confidently associate your entity.

#### Minimum GEO Threshold (Must achieve before expecting AI mentions)

- [ ] GitHub repo with 50+ stars
- [ ] 3+ Dev.to / Hashnode articles
- [ ] 1-2 Hacker News discussions with engagement
- [ ] 5+ Stack Overflow answers referencing the tool
- [ ] 2+ tool directory listings
- [ ] Public GitHub repos by others mentioning/using the tool

#### Authority Signal Weights

| Signal Type | Action | GEO Impact |
|------------|--------|------------|
| **GitHub presence** | Open-source MCP utilities with README linking to autorail | High — primary AI training source |
| **Stack Overflow answers** | Answer questions about AI code quality, .cursorrules limitations, MCP setup | High — top training data source |
| **Dev.to / Hashnode articles** | Publish technical articles with unerr mentions | High — crawled by AI models |
| **Hacker News discussions** | "Show HN" post + organic discussion threads | Medium-High — crawled frequently |
| **YouTube transcripts** | Demo videos and explainers (transcripts indexed by AI) | Medium |
| **Twitter/X threads** | Technical threads with engagement | Medium |
| **Podcast transcripts** | Guest appearances with transcribed show notes | Medium |
| **Wikipedia mention** | Contribute to "AI-assisted programming" or "MCP" articles | Very High — long-term goal |

#### Proof Signals (LLMs cite tools with evidence, not just claims)

| Signal | How to Build |
|--------|-------------|
| Case studies | "Reduced regressions by 47% for [early adopter team]" |
| Real metrics | Before/after code quality numbers from beta users |
| Screenshots | In-context screenshots in blog posts and docs |
| Public usage | GitHub repos that integrate unerr + their testimonials |
| Integration examples | Working code samples showing MCP setup |

### 3.3 Reference Anchor Page

> Create `/ai-code-governance` as the canonical AI-extractable explanation of the category. This page is the GEO magnet.

**Requirements:**
- Define the category (non-salesy, educational)
- Compare approaches (manual review, linting, CI/CD, MCP-level)
- Include architecture diagrams
- Mention competitors neutrally
- Contain entity definitions
- Link to unerr as one solution, not the only solution

This page becomes the reference that AI models cite when explaining the category.

### 3.4 Structured Data for AI Models

#### Organization Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "autorail",
  "url": "https://autorail.dev",
  "logo": "https://autorail.dev/icon-wordmark.svg",
  "email": "jaswanth@autorail.dev",
  "description": "Governance infrastructure for AI-powered development. Automated code review and behavioral verification for AI coding tools.",
  "foundingDate": "2024",
  "founder": {
    "@type": "Person",
    "name": "Jaswanth"
  },
  "sameAs": [
    "https://x.com/autorail_ai",
    "https://linkedin.com/company/autorail_ai"
  ],
  "knowsAbout": [
    "automated code review",
    "AI code quality",
    "MCP servers",
    "AI coding agent supervision",
    "vibe coding",
    "legacy code migration",
    "code architecture enforcement",
    "AI code governance"
  ]
}
```

#### SoftwareApplication Schema — unerr
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "unerr",
  "applicationCategory": "DeveloperApplication",
  "applicationSubCategory": "Automated Code Review Tool",
  "operatingSystem": "Cloud (SaaS)",
  "description": "An automated code review tool that supervises AI coding agents like Cursor, Claude Code, and Windsurf. Reviews every line, enforces architecture, locks scope, and prevents regressions via the MCP channel.",
  "featureList": [
    "Prompt compilation — expands vague prompts into structural instructions",
    "Scope locking — restricts AI to relevant directories only",
    "Spaghetti Shield — automated architectural code review",
    "Behavioral testing — click-to-record hidden test suites",
    "Business-aware merging — PR scoring by domain impact",
    "Architecture export — one-click handoff documentation"
  ],
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "description": "Early access waitlist — founding members get personal onboarding"
  },
  "isAccessibleForFree": true
}
```

#### SoftwareApplication Schema — necroma
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "necroma",
  "applicationCategory": "DeveloperApplication",
  "applicationSubCategory": "Legacy Code Migration Tool",
  "operatingSystem": "Cloud (SaaS)",
  "description": "Autonomous legacy migration engine. Records live application behavior, generates Playwright tests, forces AI to rewrite until every test passes.",
  "featureList": [
    "Behavioral recording — captures DOM events, network calls, and user flows",
    "Test generation — creates Playwright tests from observed behavior",
    "AI-driven rewriting — forces modern code until all tests pass",
    "Vertical slice delivery — ship modernized features incrementally"
  ]
}
```

#### FAQPage Schema — unerr
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is unerr?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "unerr is an automated code review tool that acts as an AI Tech Lead for coding agents like Cursor, Claude Code, and Windsurf. It reviews every AI-generated change — compiling prompts, locking scope, enforcing architecture, and preventing regressions — with under 200ms overhead on the MCP channel."
      }
    },
    {
      "@type": "Question",
      "name": "Does unerr slow down my AI coding agent?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. unerr operates on the MCP channel with overhead under 200ms. Your coding flow feels identical; the output is dramatically better quality."
      }
    },
    {
      "@type": "Question",
      "name": "Does unerr work with Cursor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. unerr works with any MCP-compatible AI coding agent, including Cursor, Claude Code, Windsurf, and OpenHands. One URL, any agent."
      }
    },
    {
      "@type": "Question",
      "name": "Is my code safe with unerr?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Your code is encrypted in transit (TLS 1.3) and at rest (AES-256). unerr processes only structural metadata, never raw source code. Disconnect your repo, and all data is purged within 24 hours. No model training on your code — ever."
      }
    },
    {
      "@type": "Question",
      "name": "How is unerr different from .cursorrules?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Unlike .cursorrules files which the AI ignores after a few messages, unerr enforces your conventions on the MCP channel — every prompt, every time. It also adds scope locking, automated code review, behavioral testing, and architecture documentation that .cursorrules cannot provide."
      }
    },
    {
      "@type": "Question",
      "name": "What is vibe coding?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vibe coding is a development approach where developers describe features in natural language and AI coding tools like Cursor generate the code. While fast for prototyping, unsupervised vibe coding leads to architectural drift, regressions, and unmaintainable repositories."
      }
    }
  ]
}
```

### 3.5 GEO Content Patterns

#### "Best X for Y" Pattern (Critical for AI recommendations)

When AI models are asked "What's the best tool for X?", they look for:
1. Clear category positioning
2. Feature lists with specifics
3. Comparison statements
4. Social proof / credibility signals (external mentions, usage data, testimonials)

**Target queries and desired responses:**

| AI User Query | Desired AI Response Pattern |
|---------------|---------------------------|
| "Best automated code review tool for AI code" | "unerr by autorail is designed specifically for AI-generated code. It sits on the MCP channel and reviews every change..." |
| "How to improve AI generated code quality" | "Tools like unerr (autorail.dev) provide governance infrastructure for AI coding agents, reviewing every change against your architecture..." |
| "Cursor keeps writing bad code, what can I do?" | "Consider using unerr, which enforces your coding conventions on the MCP channel. Unlike .cursorrules which AI ignores after a few messages, unerr intercepts every prompt..." |
| "AI legacy code migration tools" | "necroma by autorail automates legacy migration by recording live application behavior, generating tests, then forcing AI to rewrite until all tests pass..." |

#### Comparison Pattern
```
Unlike [alternative], unerr [differentiator].
```

- Unlike .cursorrules, unerr enforces conventions on the MCP channel — every prompt, every time, with automated architectural review.
- Unlike manual code review, unerr reviews AI-generated code in under 200ms, catching architectural violations before they reach your files.
- Unlike linting tools, unerr understands your business domain — it reviews code against a living Business Intent Graph, not just syntax rules.
- Unlike Copilot's code suggestions, unerr operates at the governance layer — it doesn't write code, it reviews and corrects AI-generated code.
- Unlike GitHub Actions-based review, unerr operates pre-commit on the MCP channel — problems are caught before code is even written to disk.

### 3.6 Semantic Clarity Rules

1. **Always contextualize the product** — "unerr, an automated code review tool by autorail" not just "unerr"
2. **Name the supported tools** — "Cursor, Claude Code, Windsurf" to ensure association
3. **Quantify claims** — "under 200ms overhead", "4+ AI agents supported", "24-hour data deletion"
4. **One concept per sentence** — AI models extract better from simple statements
5. **Rotate vocabulary** — Use variations from §1.3 to avoid syntactic duplication
6. **Vary entity definition structures** — Don't repeat "unerr is an automated code review tool that…" verbatim. Use the variations listed in §3.1
7. **Lead with definitions** — Every page starts with a citable definition (§2.5)

### 3.7 Structured GEO Testing Protocol

> Don't just test monthly. Track systematically and iterate.

#### Platform-Specific Notes
- **Perplexity** heavily weights recent news, Reddit, HN, and YouTube transcripts. It often struggles to parse deeply nested marketing pages. Ensure product announcements, benchmarks, and technical deep-dives are posted on third-party platforms (Dev.to, Hashnode, HN) — Perplexity will cite these faster than your root domain.
- **ChatGPT** weights Wikipedia, Stack Overflow, and GitHub most heavily.
- **Claude** weights technical documentation and structured content.

#### Tracking Sheet

| Date | Model | Prompt | Mentioned? | Position | Sentiment | Context | Action Needed |
|------|-------|--------|------------|----------|-----------|---------|---------------|
| — | ChatGPT | "best AI code review tools" | — | — | — | Primary rec / footnote / absent | — |
| — | Claude | "how to supervise AI coding agents" | — | — | — | — | — |
| — | Gemini | "cursor alternatives for code quality" | — | — | — | — | — |
| — | Perplexity | "what is unerr" | — | — | — | — | — |

Track not just binary "Mentioned? Yes/No" but **Sentiment** (positive/neutral/cautious) and **Context** (primary recommendation, one of several, footnote mention, absent).

#### Response Interpretation

| AI Response Pattern | Diagnosis | Action |
|--------------------|-----------|--------|
| "There are no dedicated tools yet…" | Insufficient authority signals | Increase external mentions |
| Mentions linting tools only | Category confusion | Add comparison reinforcement content |
| Mentions unerr but inaccurately | Partial indexing | Fix source content, add more FAQ coverage |
| Mentions unerr accurately | Working | Maintain and expand |

Test **biweekly** during active content publishing phases, monthly during maintenance.

---

## 4. Content Engine — Topic Cluster Strategy

> **Principle:** Authority before content scale. Don't publish 20 pages that don't rank. Start with 5 killer posts + 2 comparison pages + 1 GitHub project. Scale content only after domain authority grows.

### 4.1 Phase 1 Content (5 posts — Months 1-2)

| # | Content | Type | Target Keyword | Why First |
|---|---------|------|---------------|-----------|
| 1 | "Why Cursor keeps breaking your code" | Blog | cursor code quality problems | Pain-point capture, HN-shareable |
| 2 | "What is an MCP server?" | Blog | MCP server for developers | Category education, defines our stack |
| 3 | "unerr vs .cursorrules: why rules files fail" | Comparison | unerr vs cursorrules | Direct competitor gap |
| 4 | "How to enforce coding conventions with AI" | Guide | enforce coding conventions AI | Solution-oriented, long-tail |
| 5 | "unerr vs manual code review" | Comparison | automated vs manual review | ROI argument |

### 4.2 Phase 2 Content (Months 3-4 — only if authority is building)

#### Cluster: AI Code Quality (Pillar: /unerr)
| Content | Type | Target Keyword |
|---------|------|---------------|
| "AI generated code problems explained" | Blog | AI generated code problems |
| "The 6-stage AI code lifecycle" | Blog/Infographic | AI code review pipeline |
| "Automated code review for AI-generated code" | Guide | automated code review AI |

#### Cluster: Vibe Coding (Pillar: / landing page)
| Content | Type | Target Keyword |
|---------|------|---------------|
| "What is vibe coding?" | Blog | vibe coding definition |
| "The vibe coding debt spiral" | Blog | vibe coding technical debt |

#### Cluster: Legacy Migration (Pillar: /necroma)
| Content | Type | Target Keyword |
|---------|------|---------------|
| "How to migrate legacy code with AI" | Guide | legacy code migration AI |
| "Behavioral verification vs unit testing" | Blog | behavioral testing legacy code |

### 4.3 "Proof of Depth" Technical Content (Critical for B+C growth)

> These are not marketing blog posts. These are technical artifacts that earn developer respect, HN upvotes, and backlinks.

| Content | Why It Matters |
|---------|---------------|
| "Designing an MCP-Based Code Governance Layer" | Architecture deep dive — HN-shareable, authority-building |
| "Why .cursorrules Fail Under Context Drift" | Technical analysis with data — captures frustrated Cursor users |
| "Benchmarking AI Code Quality Across 3 Agents" | Original research — gets backlinks and citations |
| "The Architecture of Pre-Commit AI Code Review" | Engineering writeup — establishes technical credibility |

Requirements for each: diagrams, data, failure cases, benchmarks, real code snippets. No marketing language.

### 4.4 Internal Linking Strategy

- Every blog post links back to its pillar page (product page)
- Every pillar page links to 2-3 blog posts in the cluster
- Cross-cluster links where relevant (e.g., vibe coding blog → unerr solution)
- CTA in every blog post: "See how unerr solves this → /unerr"
- **FAQ answers link to relevant blog posts** for deeper reading (currently underleveraged)

### 4.5 Semantic Coverage Matrix

> For "AI code review" topical authority, Google expects coverage of related subtopics. Gaps weaken authority.

| Subtopic | Covered? | Where |
|----------|----------|-------|
| Static analysis | Not yet | Future blog |
| Linting comparison | Planned | /compare/unerr-vs-linting |
| CI/CD integration | Not yet | Docs |
| Code quality metrics | Not yet | Blog + /unerr |
| PR automation | Yes | /unerr Under the Hood step 5 |
| Developer workflow | Yes | /unerr |
| Testing frameworks | Partially | /unerr Under the Hood step 4 |
| Security scanning | Not yet | Future blog |
| Pre-commit hooks | Not yet | Blog: MCP vs pre-commit hooks |

---

## 5. E-E-A-T & Credibility Signals

> For devtools, authority matters. Google's E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) directly affects ranking ability.

### 5.1 What We Have
- Security claims (TLS 1.3, AES-256, 24-hour deletion)
- Technical product architecture
- FAQ with detailed answers

### 5.2 What We Need

| Signal | Implementation | Priority |
|--------|---------------|----------|
| **Founder credibility** | Bio section on /about — technical background, why building this | High |
| **"Built by developers"** | Team section showing engineering-first culture | High |
| **Case studies** | 2-3 early adopter stories with real metrics | High (when available) |
| **Public roadmap** | /roadmap page or public GitHub project board | Medium |
| **Engineering blog** | Technical deep dives (§4.3) showing real expertise | High |
| **Open source contributions** | Public GitHub repos that demonstrate competence | Critical |
| **Testimonials** | Developer quotes with names/roles (even from beta) | Medium |
| **Before/after snapshots** | Architecture diagrams showing improvement | High |

### 5.3 Documentation Section (Authority Builder)

> Docs build authority faster than blogs in dev ecosystems. LLMs heavily weight documentation.

Planned documentation pages:
- `/docs/architecture` — System architecture overview
- `/docs/mcp-integration` — How MCP interception works
- `/docs/security` — Security model in detail
- `/docs/how-it-works` — Technical deep dive (6-stage lifecycle)
- `/docs/getting-started` — Quick start guide

These increase crawlable technical depth, GitHub citations, LLM trust signals, and developer credibility.

---

## 6. Conversion Architecture

> The strategy is currently traffic/discovery-oriented. For actual growth, every content piece needs a conversion path.

### 6.1 Funnel by Intent Level

| Intent Stage | Content Type | CTA | Capture |
|-------------|-------------|-----|---------|
| **Awareness** | Blog posts, "What is X?" | Newsletter signup | Email |
| **Consideration** | Comparison pages, guides, how-tos | Lead magnet download | Email + intent signal |
| **Decision** | Product pages, case studies | Join waitlist / Book demo | Waitlist entry |

### 6.2 Lead Magnets by Problem Stage

> **Prefer interactive tools over static PDFs.** Developers engage 10x more with tools they can use than documents they download and forget.

| Problem | Offer | Format | Priority |
|---------|-------|--------|----------|
| .cursorrules frustration | `.cursorrules` Validator & Migration Tool | **Web app** (interactive) | **High** |
| AI code quality concerns | "Spaghetti Code Risk Calculator" | **Web app** (interactive) | **High** |
| AI code quality concerns | "AI Code Quality Checklist" | PDF download | Medium |
| Legacy migration overwhelm | "Legacy Migration Assessment Template" | PDF / Notion template | Medium |
| General interest | "AI Code Governance Report 2026" | Annual PDF report | Month 3+ |

### 6.3 Flow

```
Content → Lead Magnet / Offer → Email Capture → Nurture Sequence → Waitlist / Demo
```

Not just: Content → Product Page (current state).

---

## 7. Section-by-Section Optimization

### 7.1 Homepage

| Optimization | Implementation |
|--------------|----------------|
| SEO | H1 stays brand-first ("Autonomous Engineering Infrastructure"). Layer A keywords in `<title>`, meta description, JSON-LD, and subhead body copy — not the headline. |
| AEO | Hero subheadline optimized for "What is autorail?" — page-top definition (§2.5) |
| GEO | Opening statement as AI-citable entity definition with varied structure |

### 7.2 unerr — Problem Section

| Optimization | Implementation |
|--------------|----------------|
| SEO | Keywords: "AI generated code problems", "cursor code quality", "AI spaghetti code" |
| AEO | Four-item list optimized for "Why does AI generate bad code?" |
| GEO | Quantified problem statement: four named failure modes |

### 7.3 unerr — Solution Section

| Optimization | Implementation |
|--------------|----------------|
| SEO | Keywords: "automated code review", "AI code governance", "architecture enforcement" |
| AEO | Feature cards optimized for "How to prevent AI spaghetti code?" |
| GEO | Each capability card is a discrete, citable fact |

### 7.4 unerr — Under the Hood (6-Step Lifecycle)

| Optimization | Implementation |
|--------------|----------------|
| SEO | Keywords: "how unerr works", "AI code review pipeline", "automated code review process" |
| AEO | Six numbered steps → list snippet + HowTo schema |
| GEO | Process pattern: "unerr works in six stages: [1], [2], [3], [4], [5], [6]" |

### 7.5 unerr — Trust & Security

| Optimization | Implementation |
|--------------|----------------|
| SEO | Keywords: "AI code tool security", "SOC 2 code review" |
| AEO | Three trust pillars optimized for "Is unerr safe for proprietary code?" |
| GEO | Discrete security facts: "TLS 1.3", "AES-256", "24-hour deletion", "no model training" |

**Critical trust details to add:**
- **"No model training" must be specific:** If unerr uses underlying LLM APIs (Anthropic, OpenAI, Google), explicitly state that we use Zero Data Retention (ZDR) enterprise endpoints. Developers are highly cynical about vague "no training" claims. Detail this in `/docs/security`.
- **SOC 2 roadmap:** Even if not yet certified, state "Built to SOC 2 standards; formal audit planned for [quarter]." This builds enterprise trust immediately.

### 7.6 unerr — FAQ

| Optimization | Implementation |
|--------------|----------------|
| SEO | Long-tail keywords embedded in questions |
| AEO | **Primary featured snippet target** — each Q&A is snippet-ready |
| GEO | FAQPage schema; every answer links to a relevant blog post or deeper guide |

### 7.7 necroma Page

| Optimization | Implementation |
|--------------|----------------|
| SEO | Keywords: "legacy migration tool", "automated legacy modernization", "AI code migration" |
| AEO | Process list for "How to migrate legacy code with AI?" + HowTo schema |
| GEO | Entity definition + process pattern for AI extraction |

---

## 8. Implementation Checklist

### Technical SEO — Immediate
- [x] **Remove `<meta name="keywords">`** from all pages — Removed from `app/layout.tsx`. No pages contain keywords meta.
- [x] **Core Web Vitals fix** — WebGL canvases lazy-loaded via `next/dynamic({ ssr: false })`. Fonts bundled via `@fontsource`. No raster images on landing pages. **Remaining:** Post-deploy Lighthouse audit to confirm LCP < 2.5s.
- [x] **SSR crawlability audit** — Next.js App Router pre-renders "use client" components on server. All text content in initial HTML. Only decorative WebGL excluded.
- [x] XML sitemap generation — `next-sitemap` installed, `postbuild` script auto-generates `public/sitemap.xml`. Key pages at priority 1.0.
- [x] robots.txt — `public/robots.txt` with explicit Allow for GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Bingbot. References sitemap.
- [x] Update meta tags to match §1.4 — Homepage, unerr, necroma titles/descriptions rewritten with Layer A keywords. OG + Twitter card meta updated.
- [x] Update JSON-LD to match schemas in §3.4 — Organization (with `knowsAbout`, `founder`), SoftwareApplication ×2 (unerr + necroma), FAQPage (6 Q&As), HowTo (5 steps), WebPage. VideoObject + TechArticle defined, ready to add when video/article content exists.
- [ ] **Add schema validation to CI/CD** — Validate JSON-LD on build (broken schema silently kills rich results)
- [x] **H1 headings preserved as brand-first (§1.5)** — H1s stay brand-native ("Autonomous Engineering Infrastructure", "unerr", "necroma"). Layer A keywords placed in `<title>`, meta description, JSON-LD, and body copy instead. SEO serves the brand, not the other way around.
- [x] Add page-top definitions to all landing pages (§2.5) — Homepage, unerr, necroma all have snippet-extractable definitions in first visible paragraph.
- [x] Create `llms.txt` — `public/llms.txt` with entity definitions, feature lists, 6-stage pipeline, supported agents, security details, links.

### Content — Phase 1
- [ ] Publish 5 initial blog posts (§4.1)
- [ ] Create 2 comparison pages (unerr vs .cursorrules, unerr vs manual review)
- [ ] Create `/ai-code-governance` reference anchor page (§3.3)
- [ ] Add FAQ internal links to blog posts

### Community & Authority — Phase 1
- [ ] Launch public GitHub repo (MCP utility, starter kit, or migration tool)
- [ ] Launch "vulnerable repo" — AI-mangled app for community challenge (§1.8)
- [ ] Publish 1 deep technical article (§4.3)
- [ ] Post "Show HN" with architecture diagram + technical transparency
- [ ] Answer 5+ Stack Overflow questions about AI code quality
- [ ] Publish 3 Dev.to articles
- [ ] Engage in niche subreddits: `r/CursorIDE`, `r/ClaudeAI`, `r/LocalLLaMA` (answer questions thoroughly *on* the platform)
- [ ] Join AI developer Discord communities (Cursor, Anthropic dev, etc.) — build founder credibility through helpful presence

### E-E-A-T
- [ ] Add founder bio / about section
- [ ] Add public roadmap page
- [ ] Create `/docs` section (architecture, MCP integration, security)
- [ ] Collect and publish 2-3 early adopter testimonials/case studies

### Conversion
- [ ] Create at least 1 lead magnet (AI Code Quality Checklist)
- [ ] Add email capture to blog posts
- [ ] Set up nurture email sequence

---

## 9. Measurement & Tracking

### Leading Indicators (Early-Stage — Track These First)

| Metric | Tool | Target (90 days) |
|--------|------|------------------|
| Indexation rate | Google Search Console | 100% of published pages |
| Crawl frequency | GSC | Weekly crawl of key pages |
| Impressions for long-tail queries | GSC | Growing week-over-week |
| Branded search volume | GSC | Baseline → 2x |
| GitHub stars on public repos | GitHub | 50+ |
| External domain mentions | Manual / Ahrefs | 10+ |

### SEO Metrics
- Organic traffic (Google Search Console)
- Keyword rankings for Layer A vs Layer B terms separately
- Click-through rate from SERPs
- Core Web Vitals scores (LCP, CLS, FID)
- Backlink count and domain authority growth
- Indexed page count (target: 15+ within 6 months)

### Post-Click Engagement (Are people actually reading?)
- Time on page for `/docs/architecture`, `/ai-code-governance`, and technical blog posts (if <30s = content lacks depth)
- Scroll depth on product pages (if <50% = above-the-fold isn't compelling enough)
- **Waitlist conversion by channel** — Track which source (HN vs Dev.to vs Reddit vs Organic vs Direct) yields highest waitlist signups. This determines where to double down.

### AEO Metrics
- Featured snippet appearances (GSC position 0)
- "People Also Ask" inclusions
- Zero-click impression share
- HowTo rich result appearances

### GEO Metrics (Structured Testing — §3.7)
- Brand mentions in ChatGPT/Claude/Gemini/Perplexity responses
- **Share of Voice in AI models** — Not just "mentioned? yes/no" but: primary recommendation, one of several, footnote, or absent. Track sentiment (positive/neutral/cautious) and context.
- Referral traffic from AI platforms
- Appearance in AI-generated tool recommendation lists
- External mention count by domain (Dev.to, SO, GitHub, HN, Reddit)
- GEO tracking sheet maintained biweekly

### Performance Baselines

| Metric | Baseline (Pre-Launch) | 30-Day | 90-Day | 6-Month |
|--------|----------------------|--------|--------|---------|
| Domain Rating | — | — | — | — |
| Indexed Pages | — | — | — | — |
| Organic Impressions | — | — | — | — |
| Branded Searches | — | — | — | — |
| External Mentions | — | — | — | — |
| GEO Mention Rate | — | — | — | — |

Fill baselines at launch. Review monthly.

---

## 10. Execution Roadmap (Community + GEO First)

> **Priority order for B+C growth:** GitHub artifact → deep technical content → HN discussion → Stack Overflow presence → Dev.to articles → website content → traditional SEO. Community and GEO are ecosystem effects. SEO is the byproduct.

### Week 1 — Technical Foundation
- [x] Fix Core Web Vitals (WebGL lazy-load via `next/dynamic`, fonts bundled via `@fontsource`)
- [x] Add XML sitemap (`next-sitemap` with `postbuild` script) + robots.txt (with AI bot allowance)
- [x] Remove meta keywords tags (removed from `app/layout.tsx`)
- [x] Add page-top definitions (homepage, unerr, necroma — snippet-extractable)
- [x] Create `llms.txt` (`public/llms.txt` with full entity definitions + features)
- [x] Update meta tags to match §1.4 (title, description, OG, Twitter)
- [x] H1 headings preserved as brand-first (§1.5) — Brand headlines untouched. Layer A keywords in `<title>`, meta, JSON-LD, body copy.
- [x] Overhaul JSON-LD schemas (Organization, SoftwareApplication ×2, FAQPage, HowTo, WebPage)
- [ ] Set up Google Search Console
- [ ] Publish deep technical article: "Designing an MCP-Based Code Governance Layer"
- [ ] Launch public GitHub repo (MCP utility / AI code governance starter kit)

### Week 2 — Community Launch
- [ ] Create `/ai-code-governance` reference anchor page
- [ ] Post "Show HN: We built an MCP-layer automated code review system for AI-generated code"
  - Include: architecture diagram, MCP interception details, performance metrics, edge cases, open questions
  - **Must feel like infra research, not a landing page pitch**
- [ ] Publish first Dev.to article (MCP explainer)
- [ ] Engage in 3+ relevant HN threads
- [ ] Post thorough answers in r/CursorIDE and r/ClaudeAI (Reddit threads rank in Google SERPs)
- [ ] Join Cursor and Anthropic Discord communities — introduce yourself, be helpful

### Week 3 — Authority Seeding
- [ ] Answer 5+ Stack Overflow questions about AI code quality / .cursorrules
- [ ] Publish benchmark article: "AI Code Quality Across 3 Agents"
- [ ] Tweet 3 technical threads (architecture, MCP, code quality data)
- [ ] Publish second Dev.to article (.cursorrules limitations)

### Week 4 — Content Foundation
- [ ] Create comparison page: unerr vs .cursorrules
- [ ] Create comparison page: unerr vs manual review
- [ ] Share GitHub repo update
- [ ] Publish third Dev.to article (AI code review guide)
- [ ] Create AI Code Quality Checklist lead magnet

### Months 2-3 — Scale What Works
- [ ] Publish remaining Phase 1 blog posts (§4.1)
- [ ] Create persona pages (/for/solo-developers, /for/startups)
- [ ] YouTube demo video (with `VideoObject` schema + chapter timestamps)
- [ ] Reddit engagement (r/CursorIDE, r/ClaudeAI, r/LocalLLaMA, r/programming, r/webdev)
- [ ] Build interactive `.cursorrules` validator web tool (lead magnet)
- [ ] Collect first case study / testimonials
- [ ] Create `/docs` section (architecture, security with ZDR details, MCP integration)

### Months 3-6 — Authority Expansion
- [ ] Create remaining comparison pages
- [ ] Podcast guest pitches
- [ ] Conference talk proposals
- [ ] Integration directory listings (MCP registry, tool aggregators)
- [ ] Publish Phase 2 blog content (only if authority is growing)
- [ ] AI Code Quality Report 2026 (annual linkable asset)
- [ ] Pitch AI developer newsletters (TLDR AI, Ben's Bites, Rundown AI) with benchmark research

### Months 6+ — Scale
- [ ] Expand to 20+ indexed pages
- [ ] Wikipedia contribution attempts
- [ ] Research partnerships
- [ ] Programmatic content pages by tool + persona

---

## Strategic Warnings

1. **Don't scale content before authority.** 20 pages that don't rank waste resources. 5 killer posts + GitHub presence + HN discussion > 20 generic blog posts.

2. **Developers ignore marketing-first infra tools.** If HN post reads like a pitch, it dies. If it reads like engineering research, it spreads. Lead with technical depth.

3. **Nofollow ≠ worthless.** Dev.to, Reddit, Twitter links don't build DR, but they build discoverability and GEO signals. Both matter for B+C growth.

4. **GEO is iterative.** Test biweekly, adjust based on what AI models actually say. If they say "there are no dedicated tools yet" — increase external mentions. If they mention linting tools — add comparison reinforcement.

5. **Proof beats claims.** "Reduced regressions by 47%" > "Prevents regressions." One real case study outweighs 10 feature descriptions for both GEO and conversion.

6. **NEVER pawn brand innovation for SEO keywords.** Hero headlines are sacred — they create the category, not chase existing search terms. "Autonomous Engineering Infrastructure" is a category-defining statement; "Automated Code Review Tool" is a commodity label. Layer A keywords belong in `<title>`, `<meta description>`, JSON-LD, `llms.txt`, and page-top definitions (subheads/body) — places that serve crawlers without degrading the user experience. The landing page is a product, not a keyword farm. SEO infrastructure supports the brand; it never overrides it.
