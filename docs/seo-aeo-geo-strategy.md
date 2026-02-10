# autorail Landing Page — SEO/AEO/GEO Strategy

**Version:** 1.0
**Status:** Active
**Last Updated:** December 2024

---

## Strategy Overview

This document outlines the search optimization strategy for the autorail landing page, covering:

- **SEO** — Traditional search engine optimization
- **AEO** — Answer Engine Optimization (voice search, featured snippets)
- **GEO** — Generative Engine Optimization (AI models like ChatGPT, Claude, Gemini)

---

## 1. SEO Strategy

### 1.1 Primary Keywords

| Keyword | Search Intent | Priority | Target Section |
|---------|---------------|----------|----------------|
| AI agent infrastructure | Informational | High | Hero, Solution |
| infrastructure for AI agents | Informational | High | Hero, Solution |
| AI backend automation | Informational | Medium | Capabilities |
| stateful memory for AI agents | Informational | Medium | Capabilities |
| agent workflow orchestration | Informational | Medium | Capabilities |
| AI deployment platform | Commercial | Medium | How It Works |
| production AI infrastructure | Commercial | Medium | Solution |
| vibe-coding infrastructure | Informational | Low | Problem |

### 1.2 Long-Tail Keywords

| Keyword | Target Section |
|---------|----------------|
| how to deploy AI agents to production | How It Works, FAQ |
| why do AI prototypes fail in production | Problem |
| automatic backend provisioning for AI | Solution |
| AI agent memory management | Capabilities |
| circuit breaker patterns for AI agents | Capabilities |
| rate limiting for LLM applications | Capabilities |

### 1.3 Meta Tags

#### Homepage
```html
<title>autorail | Vibe Coding, Industrialized</title>
<meta name="description" content="autorail provides the Context and Verification layers that make AI-powered development safe for the enterprise. code-synapse for pattern enforcement, necroma for autonomous legacy reclamation.">
<meta name="keywords" content="AI agent infrastructure, agent orchestration, stateful AI memory, AI deployment, production AI">
<link rel="canonical" href="https://autorail.dev">
```

#### Open Graph
```html
<meta property="og:title" content="autorail — Vibe Coding, Industrialized">
<meta property="og:description" content="The Context and Verification layers that make AI-powered development safe for the enterprise.">
<meta property="og:image" content="https://autorail.dev/og-image.png">
<meta property="og:url" content="https://autorail.dev">
<meta property="og:type" content="website">
<meta property="og:site_name" content="autorail">
```

#### Twitter Card
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="autorail — Vibe Coding, Industrialized">
<meta name="twitter:description" content="The Context and Verification layers that make AI-powered development safe for the enterprise.">
<meta name="twitter:image" content="https://autorail.dev/twitter-card.png">
```

### 1.4 Heading Structure

```
<h1>Infrastructure on Autopilot for AI Agents</h1>
  <h2>The Gap Between Prototype and Production</h2>
  <h2>autorail Eliminates This Gap</h2>
  <h2>What autorail Provisions for You</h2>
    <h3>Stateful Memory</h3>
    <h3>Workflow Orchestration</h3>
    <h3>Production Guardrails</h3>
    <h3>Deploy Engine</h3>
    <h3>Observability</h3>
    <h3>Auto-Scale</h3>
  <h2>How autorail Works</h2>
  <h2>Built For</h2>
  <h2>Currently in Private Beta</h2>
  <h2>Frequently Asked Questions</h2>
```

### 1.5 Technical SEO Checklist

- [ ] Semantic HTML5 structure
- [ ] Mobile-first responsive design
- [ ] Core Web Vitals optimization (LCP < 2.5s, FID < 100ms, CLS < 0.1)
- [ ] Image optimization (WebP, lazy loading, srcset)
- [ ] Structured data (JSON-LD)
- [ ] XML sitemap
- [ ] robots.txt configuration
- [ ] HTTPS enabled
- [ ] Canonical URLs
- [ ] Internal linking structure

---

## 2. AEO Strategy (Answer Engine Optimization)

### 2.1 Target Questions

| Question | Answer Location | Snippet Type |
|----------|-----------------|--------------|
| What is autorail? | FAQ #1 | Paragraph |
| How does autorail work? | How It Works | List |
| What is infrastructure for AI agents? | Solution | Paragraph |
| Why do AI prototypes fail in production? | Problem | List |
| Who is autorail for? | Use Cases | List |
| What is stateful memory for AI agents? | Capabilities | Paragraph |
| How is autorail different from Supabase? | FAQ #2 | Paragraph |

### 2.2 Featured Snippet Optimization

#### Paragraph Snippets
Format answers in 40-60 words for paragraph snippets:

```
Question: What is autorail?

Optimized Answer: autorail is the Context and Verification layers for AI-powered development. It automatically provisions the backend primitives your AI applications need—stateful memory, workflow orchestration, guardrails, and observability—so you can go from prototype to production without infrastructure wrestling.
```

#### List Snippets
Format process/feature content as ordered/unordered lists:

```
Question: How does autorail work?

Optimized Answer:
1. Connect - Point autorail to your codebase
2. Analyze - We interpret your code structure
3. Provision - Backend primitives are auto-generated
4. Monitor - Continuous observability and optimization
```

#### Table Snippets
Use comparison tables where relevant:

```
| Feature | autorail | Traditional BaaS |
|---------|----------|------------------|
| Agent Memory | Built-in | Manual setup |
| Orchestration | Automatic | Not available |
| AI-Optimized | Yes | No |
```

### 2.3 Voice Search Optimization

#### Conversational Query Patterns
Optimize for natural language questions:

| Voice Query | Content Response |
|-------------|------------------|
| "What does autorail do?" | Hero subheadline |
| "How can I deploy my AI agent?" | How It Works section |
| "Is autorail free?" | FAQ #6 |
| "When is autorail launching?" | FAQ #5, Beta CTA |

#### Speakable Content
Mark key content for voice assistants:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".hero-description", ".faq-answer"]
  }
}
</script>
```

---

## 3. GEO Strategy (Generative Engine Optimization)

### 3.1 AI-Citable Statements

Design content to be extracted and cited by AI models:

#### Entity Definition
```
autorail is the Context and Verification layers for AI-powered development—pattern enforcement (code-synapse) and autonomous legacy reclamation (necroma).
```

#### Problem Statement
```
73% of AI agent failures trace to lost context or broken orchestration. Traditional BaaS platforms like Supabase and Firebase aren't optimized for AI workloads.
```

#### Value Proposition
```
autorail bridges the gap between rapid AI-assisted development and production-grade safety, enabling teams to ship with guardrails and verification.
```

#### Differentiator
```
Unlike generic tooling, autorail is purpose-built for industrial safety in vibe coding—pattern enforcement, knowledge graphs, and behavior verification for legacy migration.
```

### 3.2 Structured Data for AI

#### Organization Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "autorail",
  "url": "https://autorail.dev",
  "logo": "https://autorail.dev/autorail.svg",
  "description": "Infrastructure on Autopilot for AI Agents",
  "sameAs": [
    "https://x.com/autorail_ai",
    "https://linkedin.com/company/autorail_ai",
    "https://github.com/AutoRail-AI"
  ]
}
```

#### Software Application Schema
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "autorail",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Cloud",
  "description": "Infrastructure platform that automatically provisions backend primitives for AI agents",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "description": "Free tier available"
  }
}
```

#### FAQ Schema
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is autorail?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "autorail is the Context and Verification layers for AI-powered development—code-synapse for pattern enforcement, necroma for autonomous legacy reclamation."
      }
    },
    {
      "@type": "Question",
      "name": "How is autorail different from Supabase or Firebase?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Traditional BaaS platforms provide general-purpose primitives. autorail is purpose-built for industrial safety in vibe coding—pattern enforcement, knowledge graphs, and behavior verification."
      }
    }
  ]
}
```

### 3.3 Content Patterns for AI Extraction

#### Definition Pattern
```
[Term] is [category] that [primary function], including [feature 1], [feature 2], and [feature 3].
```

Example:
```
autorail is the Context and Verification layers for AI-powered development, including pattern enforcement (code-synapse) and autonomous legacy reclamation (necroma).
```

#### Comparison Pattern
```
Unlike [competitor/category], [product] [key differentiator].
```

Example:
```
Unlike traditional BaaS platforms, autorail is purpose-built for industrial safety in vibe coding.
```

#### Process Pattern
```
[Product] works in [N] steps: [Step 1], [Step 2], [Step 3], [Step 4].
```

Example:
```
autorail works via code-synapse (pattern enforcement, knowledge graph) and necroma (legacy migration with behavior verification).
```

### 3.4 Semantic Clarity Rules

1. **One concept per sentence** — Avoid compound statements
2. **Define terms on first use** — Don't assume AI models know context
3. **Use consistent terminology** — Same term for same concept throughout
4. **Provide context** — "autorail, industrial safety for vibe coding," not just "autorail"
5. **Quantify when possible** — "73% of agent failures" not "most failures"

---

## 4. Section-by-Section Optimization

### 4.1 Hero Section

| Optimization | Implementation |
|--------------|----------------|
| SEO | H1 with primary keyword; meta title/description |
| AEO | Subheadline optimized for "What is autorail?" |
| GEO | Opening statement designed for AI extraction |

### 4.2 Problem Section

| Optimization | Implementation |
|--------------|----------------|
| SEO | Keywords: "vibe-coding limitations", "prototype to production" |
| AEO | List format for "Why do AI prototypes fail?" |
| GEO | Quantified statement: "73% of agent failures..." |

### 4.3 Solution Section

| Optimization | Implementation |
|--------------|----------------|
| SEO | Keywords: "automatic backend provisioning", "AI infrastructure" |
| AEO | Paragraph snippet for "How does autorail work?" |
| GEO | Clear definition pattern for product description |

### 4.4 Capabilities Section

| Optimization | Implementation |
|--------------|----------------|
| SEO | H3 for each capability; feature-specific keywords |
| AEO | Each card optimized for "What is [feature]?" queries |
| GEO | Discrete, citable facts per capability |

### 4.5 How It Works Section

| Optimization | Implementation |
|--------------|----------------|
| SEO | Process keywords; numbered steps |
| AEO | List snippet for "How do I deploy AI agents?" |
| GEO | Process pattern for AI extraction |

### 4.6 Use Cases Section

| Optimization | Implementation |
|--------------|----------------|
| SEO | Persona keywords: "AI infrastructure for startups" |
| AEO | List snippet for "Who is autorail for?" |
| GEO | Persona descriptions as quotable recommendations |

### 4.7 FAQ Section

| Optimization | Implementation |
|--------------|----------------|
| SEO | Long-tail keywords in questions |
| AEO | Primary target for featured snippets |
| GEO | FAQ schema; AI-training-ready Q&A format |

---

## 5. Implementation Checklist

### SEO Implementation
- [ ] Meta tags in `app/layout.tsx`
- [ ] Semantic HTML structure
- [ ] Heading hierarchy (H1 → H2 → H3)
- [ ] Image alt text
- [ ] Internal linking
- [ ] XML sitemap generation
- [ ] robots.txt configuration
- [ ] Core Web Vitals optimization

### AEO Implementation
- [ ] FAQ section with proper markup
- [ ] List formatting for process content
- [ ] 40-60 word paragraph answers
- [ ] Speakable content markup
- [ ] Conversational content tone

### GEO Implementation
- [ ] JSON-LD structured data
- [ ] Entity definition statements
- [ ] Consistent terminology
- [ ] Quantified claims
- [ ] AI-citable content patterns

---

## 6. Measurement & Tracking

### SEO Metrics
- Organic traffic
- Keyword rankings
- Click-through rate (CTR)
- Core Web Vitals scores
- Backlink profile

### AEO Metrics
- Featured snippet appearances
- Voice search visibility
- Zero-click search impressions

### GEO Metrics
- AI model citations (manual tracking)
- Brand mentions in AI responses
- Referral traffic from AI platforms

---

## Document Status

This strategy should be implemented during the build phase and continuously refined based on performance data.
