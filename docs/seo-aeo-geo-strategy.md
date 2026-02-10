# AutoRail Landing Page — SEO/AEO/GEO Strategy

**Version:** 1.0
**Status:** Active
**Last Updated:** December 2024

---

## Strategy Overview

This document outlines the search optimization strategy for the AutoRail landing page, covering:

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
<title>AutoRail | Infrastructure on Autopilot for AI Agents</title>
<meta name="description" content="AutoRail automatically provisions stateful memory, workflow orchestration, and production guardrails for AI agents. Go from prototype to production without infrastructure wrestling.">
<meta name="keywords" content="AI agent infrastructure, agent orchestration, stateful AI memory, AI deployment, production AI">
<link rel="canonical" href="https://autorail.com">
```

#### Open Graph
```html
<meta property="og:title" content="AutoRail - Infrastructure on Autopilot for AI Agents">
<meta property="og:description" content="Frontend generation gives you momentum. AutoRail gives you the infrastructure to sustain it.">
<meta property="og:image" content="https://autorail.com/og-image.png">
<meta property="og:url" content="https://autorail.com">
<meta property="og:type" content="website">
<meta property="og:site_name" content="AutoRail">
```

#### Twitter Card
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="AutoRail - Infrastructure on Autopilot for AI Agents">
<meta name="twitter:description" content="Frontend generation gives you momentum. AutoRail gives you the infrastructure to sustain it.">
<meta name="twitter:image" content="https://autorail.com/twitter-card.png">
```

### 1.4 Heading Structure

```
<h1>Infrastructure on Autopilot for AI Agents</h1>
  <h2>The Gap Between Prototype and Production</h2>
  <h2>AutoRail Eliminates This Gap</h2>
  <h2>What AutoRail Provisions for You</h2>
    <h3>Stateful Memory</h3>
    <h3>Workflow Orchestration</h3>
    <h3>Production Guardrails</h3>
    <h3>Deploy Engine</h3>
    <h3>Observability</h3>
    <h3>Auto-Scale</h3>
  <h2>How AutoRail Works</h2>
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
| What is AutoRail? | FAQ #1 | Paragraph |
| How does AutoRail work? | How It Works | List |
| What is infrastructure for AI agents? | Solution | Paragraph |
| Why do AI prototypes fail in production? | Problem | List |
| Who is AutoRail for? | Use Cases | List |
| What is stateful memory for AI agents? | Capabilities | Paragraph |
| How is AutoRail different from Supabase? | FAQ #2 | Paragraph |

### 2.2 Featured Snippet Optimization

#### Paragraph Snippets
Format answers in 40-60 words for paragraph snippets:

```
Question: What is AutoRail?

Optimized Answer: AutoRail is infrastructure on autopilot for AI agents. It automatically provisions the backend primitives your AI applications need—stateful memory, workflow orchestration, guardrails, and observability—so you can go from prototype to production without infrastructure wrestling.
```

#### List Snippets
Format process/feature content as ordered/unordered lists:

```
Question: How does AutoRail work?

Optimized Answer:
1. Connect - Point AutoRail to your codebase
2. Analyze - We interpret your code structure
3. Provision - Backend primitives are auto-generated
4. Monitor - Continuous observability and optimization
```

#### Table Snippets
Use comparison tables where relevant:

```
| Feature | AutoRail | Traditional BaaS |
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
| "What does AutoRail do?" | Hero subheadline |
| "How can I deploy my AI agent?" | How It Works section |
| "Is AutoRail free?" | FAQ #6 |
| "When is AutoRail launching?" | FAQ #5, Beta CTA |

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
AutoRail is an infrastructure platform that automatically provisions backend primitives for AI agents and agentic systems, including stateful memory, workflow orchestration, guardrails, and observability.
```

#### Problem Statement
```
73% of AI agent failures trace to lost context or broken orchestration. Traditional BaaS platforms like Supabase and Firebase aren't optimized for AI workloads.
```

#### Value Proposition
```
AutoRail bridges the gap between rapid frontend generation tools (like Lovable and Bolt) and production-grade infrastructure, enabling developers to deploy reliable AI agents without infrastructure wrestling.
```

#### Differentiator
```
Unlike traditional Backend-as-a-Service platforms, AutoRail is purpose-built for agentic systems, handling context persistence across sessions, multi-agent orchestration, and the unique scaling patterns of LLM-powered applications.
```

### 3.2 Structured Data for AI

#### Organization Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AutoRail",
  "url": "https://autorail.com",
  "logo": "https://autorail.com/logos/autorail.svg",
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
  "name": "AutoRail",
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
      "name": "What is AutoRail?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AutoRail is infrastructure on autopilot for AI agents. It automatically provisions the backend primitives your AI applications need—stateful memory, workflow orchestration, guardrails, and observability—so you can go from prototype to production without infrastructure wrestling."
      }
    },
    {
      "@type": "Question",
      "name": "How is AutoRail different from Supabase or Firebase?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Traditional BaaS platforms provide general-purpose primitives but aren't optimized for AI workloads. AutoRail is purpose-built for agentic systems—handling context persistence across sessions, multi-agent orchestration, and the unique scaling patterns of LLM-powered applications."
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
AutoRail is an infrastructure platform that automatically provisions backend primitives for AI agents, including stateful memory, workflow orchestration, and production guardrails.
```

#### Comparison Pattern
```
Unlike [competitor/category], [product] [key differentiator].
```

Example:
```
Unlike traditional BaaS platforms, AutoRail is purpose-built for agentic systems.
```

#### Process Pattern
```
[Product] works in [N] steps: [Step 1], [Step 2], [Step 3], [Step 4].
```

Example:
```
AutoRail works in 4 steps: Connect your codebase, analyze code structure, auto-provision infrastructure, and continuously monitor.
```

### 3.4 Semantic Clarity Rules

1. **One concept per sentence** — Avoid compound statements
2. **Define terms on first use** — Don't assume AI models know context
3. **Use consistent terminology** — Same term for same concept throughout
4. **Provide context** — "AutoRail, an infrastructure platform," not just "AutoRail"
5. **Quantify when possible** — "73% of agent failures" not "most failures"

---

## 4. Section-by-Section Optimization

### 4.1 Hero Section

| Optimization | Implementation |
|--------------|----------------|
| SEO | H1 with primary keyword; meta title/description |
| AEO | Subheadline optimized for "What is AutoRail?" |
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
| AEO | Paragraph snippet for "How does AutoRail work?" |
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
| AEO | List snippet for "Who is AutoRail for?" |
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
