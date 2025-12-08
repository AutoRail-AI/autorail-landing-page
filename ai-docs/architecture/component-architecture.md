# AutoRail Landing Page — Component Architecture

**Version:** 1.0
**Status:** Ready for Implementation
**Last Updated:** December 2024
**Phase:** 5 Complete → Ready for Phase 6 (Code Implementation)

---

## Executive Summary

This document provides the complete component architecture for the AutoRail landing page. It defines:

- **Folder structure** aligned with existing boilerplate conventions
- **Complete component list** with descriptions and locations
- **Server/Client component breakdown** optimized for Next.js App Router
- **Props definitions** for every component
- **Reusability guidance** for post-beta evolution

**Design Philosophy:**
- Ship fast, iterate faster
- Minimal abstraction at beta stage
- Clear separation of concerns
- Server-first for SEO, client where needed
- CVA + Tailwind for styling consistency

---

## 1. Folder Structure

### 1.1 Complete Directory Tree

```
initial-landing-page/
├── app/
│   ├── layout.tsx                 # Root layout (fonts, metadata, providers)
│   ├── page.tsx                   # Landing page (assembles all sections)
│   ├── globals.css                # Moved from styles/ for App Router convention
│   └── api/
│       └── health/
│           └── route.ts           # Health check endpoint (existing)
│
├── components/
│   ├── layout/                    # Page-level layout components
│   │   ├── NavBar/
│   │   │   ├── NavBar.tsx
│   │   │   ├── NavBar.test.tsx
│   │   │   └── NavLink.tsx        # Individual nav link component
│   │   └── Footer/
│   │       ├── Footer.tsx
│   │       ├── Footer.test.tsx
│   │       └── FooterColumn.tsx   # Reusable footer column
│   │
│   ├── sections/                  # Page section components
│   │   ├── HeroSection/
│   │   │   ├── HeroSection.tsx
│   │   │   └── HeroSection.test.tsx
│   │   ├── ProblemSection/
│   │   │   ├── ProblemSection.tsx
│   │   │   └── ProblemSection.test.tsx
│   │   ├── SolutionSection/
│   │   │   ├── SolutionSection.tsx
│   │   │   └── SolutionSection.test.tsx
│   │   ├── CapabilitiesSection/
│   │   │   ├── CapabilitiesSection.tsx
│   │   │   └── CapabilitiesSection.test.tsx
│   │   ├── HowItWorksSection/
│   │   │   ├── HowItWorksSection.tsx
│   │   │   └── HowItWorksSection.test.tsx
│   │   ├── UseCasesSection/
│   │   │   ├── UseCasesSection.tsx
│   │   │   └── UseCasesSection.test.tsx
│   │   ├── BetaCTASection/
│   │   │   ├── BetaCTASection.tsx
│   │   │   └── BetaCTASection.test.tsx
│   │   └── FAQSection/
│   │       ├── FAQSection.tsx
│   │       └── FAQSection.test.tsx
│   │
│   ├── ui/                        # Reusable UI primitives
│   │   ├── Button/
│   │   │   ├── Button.tsx         # Refactor existing for brand
│   │   │   ├── Button.test.tsx
│   │   │   └── Button.stories.tsx
│   │   ├── Badge/
│   │   │   ├── Badge.tsx
│   │   │   └── Badge.stories.tsx
│   │   ├── Card/
│   │   │   ├── Card.tsx
│   │   │   └── Card.stories.tsx
│   │   ├── Container/
│   │   │   └── Container.tsx
│   │   ├── SectionHeader/
│   │   │   └── SectionHeader.tsx
│   │   ├── Accordion/
│   │   │   ├── Accordion.tsx
│   │   │   └── AccordionItem.tsx
│   │   └── Icon/
│   │       └── Icon.tsx           # Lucide wrapper with size/color presets
│   │
│   ├── graphics/                  # Visual/animated components
│   │   ├── HeroVisual/
│   │   │   └── HeroVisual.tsx     # Animated infrastructure rails
│   │   ├── GradientMesh/
│   │   │   └── GradientMesh.tsx   # Background gradient effect
│   │   ├── FlowDiagram/
│   │   │   └── FlowDiagram.tsx    # Problem/Solution flow visualization
│   │   └── ProcessSteps/
│   │       └── ProcessSteps.tsx   # How It Works step visualization
│   │
│   └── shared/                    # Shared utilities and wrappers
│       ├── MotionWrapper/
│       │   └── MotionWrapper.tsx  # Framer Motion scroll reveal wrapper
│       └── SEO/
│           └── JsonLd.tsx         # Structured data component
│
├── lib/                           # Utility functions and helpers
│   ├── utils.ts                   # cn() helper, general utilities
│   ├── constants.ts               # Site-wide constants
│   └── animations.ts              # Framer Motion animation presets
│
├── data/                          # Static data for components
│   ├── capabilities.ts            # Capability card data
│   ├── faq.ts                     # FAQ questions and answers
│   ├── navigation.ts              # Nav links configuration
│   ├── personas.ts                # Use case personas data
│   └── process-steps.ts           # How It Works steps data
│
├── types/                         # TypeScript type definitions
│   └── index.ts                   # Shared types and interfaces
│
├── styles/                        # Keep for Tailwind config reference
│   └── tailwind.css               # Tailwind directives (import in layout)
│
├── public/
│   ├── logos/
│   │   └── autorail.svg           # Logo (existing)
│   ├── og-image.png               # Open Graph image
│   └── twitter-card.png           # Twitter card image
│
├── ai-docs/                       # Documentation (existing)
├── e2e/                           # Playwright tests (existing)
└── [config files]                 # Existing config files
```

### 1.2 Folder Purpose Reference

| Folder | Purpose | When to Add Files |
|--------|---------|-------------------|
| `app/` | Next.js App Router pages and API routes | New pages, API endpoints |
| `components/layout/` | Page-level structural components | NavBar, Footer, Sidebar |
| `components/sections/` | Full-width landing page sections | Each major page section |
| `components/ui/` | Reusable UI primitives | Buttons, cards, inputs, badges |
| `components/graphics/` | Visual and animated elements | SVG animations, diagrams |
| `components/shared/` | Cross-cutting utilities | Animation wrappers, SEO |
| `lib/` | Pure utility functions | Helpers, constants, no React |
| `data/` | Static data objects | Content arrays, configurations |
| `types/` | TypeScript definitions | Shared interfaces |

### 1.3 File Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase folder + file | `Button/Button.tsx` |
| Tests | `.test.tsx` suffix | `Button.test.tsx` |
| Stories | `.stories.tsx` suffix | `Button.stories.tsx` |
| Utilities | camelCase | `utils.ts`, `animations.ts` |
| Data files | kebab-case | `process-steps.ts` |
| Types | PascalCase exports | `types/index.ts` |

---

## 2. Component List

### 2.1 Component Registry Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           COMPONENT HIERARCHY                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  app/page.tsx                                                               │
│  └── RootLayout                                                             │
│      ├── NavBar ─────────────────────────────────────────────────────────┐ │
│      │   ├── Logo (image)                                                │ │
│      │   ├── NavLink (×3)                                                │ │
│      │   └── Button (CTA)                                                │ │
│      │                                                                   │ │
│      ├── main                                                            │ │
│      │   ├── HeroSection ────────────────────────────────────────────────┤ │
│      │   │   ├── Badge                                                   │ │
│      │   │   ├── SectionHeader (H1)                                      │ │
│      │   │   ├── Button (×2)                                             │ │
│      │   │   └── HeroVisual                                              │ │
│      │   │                                                               │ │
│      │   ├── ProblemSection ─────────────────────────────────────────────┤ │
│      │   │   ├── Container                                               │ │
│      │   │   ├── SectionHeader (H2)                                      │ │
│      │   │   ├── FlowDiagram                                             │ │
│      │   │   └── Icon (×3)                                               │ │
│      │   │                                                               │ │
│      │   ├── SolutionSection ────────────────────────────────────────────┤ │
│      │   │   ├── Container                                               │ │
│      │   │   ├── SectionHeader (H2)                                      │ │
│      │   │   ├── FlowDiagram                                             │ │
│      │   │   └── Icon (×4)                                               │ │
│      │   │                                                               │ │
│      │   ├── CapabilitiesSection ────────────────────────────────────────┤ │
│      │   │   ├── Container                                               │ │
│      │   │   ├── SectionHeader (H2)                                      │ │
│      │   │   └── Card (×6)                                               │ │
│      │   │       └── Icon                                                │ │
│      │   │                                                               │ │
│      │   ├── HowItWorksSection ──────────────────────────────────────────┤ │
│      │   │   ├── Container                                               │ │
│      │   │   ├── SectionHeader (H2)                                      │ │
│      │   │   └── ProcessSteps                                            │ │
│      │   │                                                               │ │
│      │   ├── UseCasesSection ────────────────────────────────────────────┤ │
│      │   │   ├── Container                                               │ │
│      │   │   ├── SectionHeader (H2)                                      │ │
│      │   │   └── Card (×3)                                               │ │
│      │   │       └── Icon                                                │ │
│      │   │                                                               │ │
│      │   ├── BetaCTASection ─────────────────────────────────────────────┤ │
│      │   │   ├── GradientMesh                                            │ │
│      │   │   ├── Card (gradient border)                                  │ │
│      │   │   ├── SectionHeader (H2)                                      │ │
│      │   │   └── Button (CTA)                                            │ │
│      │   │                                                               │ │
│      │   └── FAQSection ─────────────────────────────────────────────────┤ │
│      │       ├── Container                                               │ │
│      │       ├── SectionHeader (H2)                                      │ │
│      │       └── Accordion                                               │ │
│      │           └── AccordionItem (×8)                                  │ │
│      │                                                                   │ │
│      └── Footer ─────────────────────────────────────────────────────────┘ │
│          ├── Logo (symbol)                                                 │
│          ├── FooterColumn (×3)                                             │
│          └── Social Icons                                                  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 2.2 Complete Component List

#### Layout Components

| Component | Path | Description |
|-----------|------|-------------|
| **NavBar** | `components/layout/NavBar/NavBar.tsx` | Sticky navigation with logo, links, CTA. Handles scroll state for background blur. |
| **NavLink** | `components/layout/NavBar/NavLink.tsx` | Individual navigation link with active state and "Coming Soon" badge support. |
| **Footer** | `components/layout/Footer/Footer.tsx` | Site footer with logo, tagline, 3-column links, social icons, legal. |
| **FooterColumn** | `components/layout/Footer/FooterColumn.tsx` | Reusable footer link column with heading and link list. |

#### Section Components

| Component | Path | Description |
|-----------|------|-------------|
| **HeroSection** | `components/sections/HeroSection/HeroSection.tsx` | Above-fold hero with badge, H1, subheadline, CTAs, and animated visual. Full viewport height. |
| **ProblemSection** | `components/sections/ProblemSection/ProblemSection.tsx` | Problem statement with 3-stage flow diagram and pain point bullets. Slate Grey background. |
| **SolutionSection** | `components/sections/SolutionSection/SolutionSection.tsx` | Solution overview with flow diagram (Code → AutoRail → Infra) and primitives list. Void Black background. |
| **CapabilitiesSection** | `components/sections/CapabilitiesSection/CapabilitiesSection.tsx` | 6 capability cards in 3×2 grid with icons and descriptions. Slate Grey background. |
| **HowItWorksSection** | `components/sections/HowItWorksSection/HowItWorksSection.tsx` | 4-step process visualization with numbered circles and connector lines. Void Black background. |
| **UseCasesSection** | `components/sections/UseCasesSection/UseCasesSection.tsx` | 3 persona cards (Indie Hackers, Startup Teams, AI Engineers). Slate Grey background. |
| **BetaCTASection** | `components/sections/BetaCTASection/BetaCTASection.tsx` | Main conversion section with gradient-bordered card, H2, CTA, trust statement. |
| **FAQSection** | `components/sections/FAQSection/FAQSection.tsx` | Accordion with 8 FAQ items, optimized for SEO/AEO. Void Black background. |

#### UI Components

| Component | Path | Description |
|-----------|------|-------------|
| **Button** | `components/ui/Button/Button.tsx` | Primary/secondary/ghost variants with sizes. Refactor existing to match brand. |
| **Badge** | `components/ui/Badge/Badge.tsx` | Status badges (beta, coming soon) with variants. |
| **Card** | `components/ui/Card/Card.tsx` | Content card with hover states, optional gradient border. |
| **Container** | `components/ui/Container/Container.tsx` | Max-width wrapper with responsive padding. Size variants (sm/md/lg/xl). |
| **SectionHeader** | `components/ui/SectionHeader/SectionHeader.tsx` | H1/H2 with optional tagline, centered or left-aligned. |
| **Accordion** | `components/ui/Accordion/Accordion.tsx` | Accordion wrapper managing open state. |
| **AccordionItem** | `components/ui/Accordion/AccordionItem.tsx` | Individual expandable item with question/answer. |
| **Icon** | `components/ui/Icon/Icon.tsx` | Lucide icon wrapper with standardized sizes and colors. |

#### Graphics Components

| Component | Path | Description |
|-----------|------|-------------|
| **HeroVisual** | `components/graphics/HeroVisual/HeroVisual.tsx` | Animated infrastructure visualization with flowing particles and nodes. |
| **GradientMesh** | `components/graphics/GradientMesh/GradientMesh.tsx` | CSS radial gradient background effect for hero/CTA sections. |
| **FlowDiagram** | `components/graphics/FlowDiagram/FlowDiagram.tsx` | Horizontal flow visualization with 3 stages (Problem) or pipeline (Solution). |
| **ProcessSteps** | `components/graphics/ProcessSteps/ProcessSteps.tsx` | 4-step horizontal/vertical process with numbered circles and connectors. |

#### Shared Components

| Component | Path | Description |
|-----------|------|-------------|
| **MotionWrapper** | `components/shared/MotionWrapper/MotionWrapper.tsx` | Framer Motion wrapper for scroll-triggered animations. |
| **JsonLd** | `components/shared/SEO/JsonLd.tsx` | Renders JSON-LD structured data scripts. |

### 2.3 Component Count Summary

| Category | Count | Notes |
|----------|-------|-------|
| Layout | 4 | NavBar, NavLink, Footer, FooterColumn |
| Sections | 8 | One per landing page section |
| UI | 8 | Reusable primitives |
| Graphics | 4 | Animated/visual elements |
| Shared | 2 | Cross-cutting utilities |
| **Total** | **26** | Minimal for beta, expandable |

---

## 3. Server vs Client Components

### 3.1 Decision Matrix

| Factor | Server Component | Client Component |
|--------|------------------|------------------|
| SEO-critical content | ✅ Preferred | ❌ Avoid |
| Static text/images | ✅ Preferred | ❌ Avoid |
| Interactive (onClick, etc.) | ❌ Not possible | ✅ Required |
| Animations (Framer Motion) | ❌ Not possible | ✅ Required |
| Form inputs | ❌ Not possible | ✅ Required |
| useState/useEffect | ❌ Not possible | ✅ Required |
| Scroll listeners | ❌ Not possible | ✅ Required |

### 3.2 Component Breakdown Table

| Component | Type | Justification |
|-----------|------|---------------|
| **NavBar** | Client | Scroll detection for background state, mobile menu toggle |
| **NavLink** | Client | Hover states, active link detection |
| **Footer** | Server | Static content, SEO-friendly |
| **FooterColumn** | Server | Static links, no interactivity |
| **HeroSection** | Client | Animated entrance, CTA interactions |
| **ProblemSection** | Client | Scroll-triggered animation |
| **SolutionSection** | Client | Scroll-triggered animation |
| **CapabilitiesSection** | Client | Card hover effects, scroll reveal |
| **HowItWorksSection** | Client | Sequential reveal animation |
| **UseCasesSection** | Client | Card hover effects, scroll reveal |
| **BetaCTASection** | Client | Button interactions, gradient animation |
| **FAQSection** | Client | Accordion expand/collapse |
| **Button** | Client | Hover effects, click handlers |
| **Badge** | Server | Static display |
| **Card** | Client | Hover state transitions |
| **Container** | Server | Pure layout wrapper |
| **SectionHeader** | Server | Static text content |
| **Accordion** | Client | State management for open items |
| **AccordionItem** | Client | Expand/collapse animation |
| **Icon** | Server | Static SVG render |
| **HeroVisual** | Client | Continuous animation |
| **GradientMesh** | Server | CSS-only, no JS needed |
| **FlowDiagram** | Client | Animated particles |
| **ProcessSteps** | Client | Sequential reveal |
| **MotionWrapper** | Client | Framer Motion animations |
| **JsonLd** | Server | Static script injection |

### 3.3 Server/Client Summary

| Type | Count | Percentage |
|------|-------|------------|
| Server Components | 7 | 27% |
| Client Components | 19 | 73% |

**Note:** High client component count is expected for an animated landing page. Server components handle SEO-critical static content; client components handle all interactivity and animations.

### 3.4 Optimization Strategy

```tsx
// Pattern: Server component with client islands
// components/sections/CapabilitiesSection/CapabilitiesSection.tsx

// Server component for static content
export function CapabilitiesSection() {
  return (
    <section className="bg-slate-grey py-20">
      <Container>
        {/* Static header - server rendered */}
        <SectionHeader
          title="What AutoRail Provisions"
          tagline="Six primitives. Zero configuration."
        />

        {/* Interactive cards - client component */}
        <CapabilityGrid capabilities={CAPABILITIES} />
      </Container>
    </section>
  )
}

// components/sections/CapabilitiesSection/CapabilityGrid.tsx
"use client"

export function CapabilityGrid({ capabilities }: Props) {
  // Client-side animations and interactions
}
```

This pattern maximizes SEO while enabling rich interactions.

---

## 4. Props Definitions

### 4.1 UI Component Props

#### Button

```typescript
// components/ui/Button/Button.tsx

import { cva, type VariantProps } from "class-variance-authority"
import type { LucideIcon } from "lucide-react"

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center",
    "rounded-lg font-medium transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2",
    "focus-visible:ring-electric-cyan focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        primary: "bg-rail-fade text-white hover:opacity-90",
        secondary: "bg-transparent border border-cloud-white/20 text-cloud-white hover:bg-cloud-white/10",
        ghost: "bg-transparent text-cloud-white hover:bg-cloud-white/10",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-base",
        lg: "h-14 px-8 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Optional icon to display before text */
  icon?: LucideIcon
  /** Render as anchor instead of button */
  asChild?: boolean
  /** Full width button */
  fullWidth?: boolean
}

// Default: variant="primary", size="md"
```

**Design Reasoning:**
- CVA for type-safe variants matching existing boilerplate pattern
- Three variants cover all landing page CTAs
- Three sizes for nav (sm), sections (md), hero (lg)
- Icon support for future expansion
- `asChild` for anchor links using Radix Slot pattern

#### Badge

```typescript
// components/ui/Badge/Badge.tsx

export interface BadgeProps {
  /** Badge variant */
  variant?: "beta" | "comingSoon" | "default"
  /** Badge content */
  children: React.ReactNode
  /** Additional classes */
  className?: string
}

// Default: variant="default"
```

**Design Reasoning:**
- Three variants for current needs (beta status, coming soon links, general)
- Minimal props surface for simplicity

#### Card

```typescript
// components/ui/Card/Card.tsx

export interface CardProps {
  /** Card content */
  children: React.ReactNode
  /** Enable gradient border (CTA section) */
  gradientBorder?: boolean
  /** Enable hover effects */
  hoverable?: boolean
  /** Additional classes */
  className?: string
  /** Click handler (makes card interactive) */
  onClick?: () => void
}

// Default: gradientBorder=false, hoverable=true
```

**Design Reasoning:**
- `gradientBorder` for CTA section premium cards
- `hoverable` for capability/persona cards
- Composable children pattern for flexibility

#### Container

```typescript
// components/ui/Container/Container.tsx

export interface ContainerProps {
  /** Container size (max-width) */
  size?: "sm" | "md" | "lg" | "xl"
  /** Content */
  children: React.ReactNode
  /** Additional classes */
  className?: string
  /** HTML element to render */
  as?: "div" | "section" | "article" | "main"
}

// Size mappings:
// sm: 640px, md: 768px, lg: 1024px, xl: 1280px
// Default: size="xl", as="div"
```

**Design Reasoning:**
- Size variants match breakpoints for consistency
- `as` prop for semantic HTML flexibility
- Avoids unnecessary wrapper divs

#### SectionHeader

```typescript
// components/ui/SectionHeader/SectionHeader.tsx

export interface SectionHeaderProps {
  /** Main heading text */
  title: string
  /** Optional tagline below title */
  tagline?: string
  /** Heading level */
  level?: 1 | 2 | 3
  /** Text alignment */
  align?: "center" | "left"
  /** Additional classes */
  className?: string
}

// Default: level=2, align="center"
```

**Design Reasoning:**
- Consistent heading structure across sections
- Level prop ensures correct semantic HTML (H1 for hero, H2 elsewhere)
- Tagline for section introductions

#### Accordion & AccordionItem

```typescript
// components/ui/Accordion/Accordion.tsx

export interface AccordionProps {
  /** Allow multiple items open */
  multiple?: boolean
  /** Accordion items */
  children: React.ReactNode
  /** Additional classes */
  className?: string
}

// components/ui/Accordion/AccordionItem.tsx

export interface AccordionItemProps {
  /** Question/trigger text */
  question: string
  /** Answer/content text */
  answer: string
  /** Unique item ID */
  id: string
  /** Initially expanded */
  defaultOpen?: boolean
}

// Default: multiple=false (single open), defaultOpen=false
```

**Design Reasoning:**
- Single-open default for FAQ pattern
- Controlled via context for state management
- ID for accessibility and analytics tracking

#### Icon

```typescript
// components/ui/Icon/Icon.tsx

import type { LucideIcon } from "lucide-react"

export interface IconProps {
  /** Lucide icon component */
  icon: LucideIcon
  /** Icon size */
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  /** Icon color (brand colors) */
  color?: "default" | "primary" | "secondary" | "muted"
  /** Additional classes */
  className?: string
  /** Accessible label */
  "aria-label"?: string
}

// Size mappings:
// xs: 16px, sm: 20px, md: 24px, lg: 32px, xl: 48px
// Default: size="md", color="default"
```

**Design Reasoning:**
- Standardized icon sizes across codebase
- Color presets match brand palette
- Aria-label for accessibility

### 4.2 Section Component Props

#### HeroSection

```typescript
// components/sections/HeroSection/HeroSection.tsx

export interface HeroSectionProps {
  /** Badge text (e.g., "Launching Soon") */
  badge: string
  /** H1 headline */
  headline: string
  /** Subheadline text */
  subheadline: string
  /** Primary CTA text */
  primaryCta: string
  /** Primary CTA action (href or onClick) */
  primaryCtaAction: string
  /** Secondary CTA text (optional) */
  secondaryCta?: string
  /** Secondary CTA action */
  secondaryCtaAction?: string
}
```

**Note:** In practice, these will likely be hardcoded for beta. Props shown for future flexibility.

#### Section Components (General Pattern)

Most section components will follow this pattern:

```typescript
// Generic section props pattern

export interface SectionProps {
  /** Section ID for anchor links */
  id?: string
  /** Additional classes */
  className?: string
}
```

**Design Reasoning:**
- Sections are mostly self-contained with hardcoded content
- ID for scroll-to navigation
- ClassName for layout overrides

#### CapabilitiesSection

```typescript
// components/sections/CapabilitiesSection/CapabilitiesSection.tsx

export interface CapabilitiesSectionProps {
  /** Section ID */
  id?: string
}

// Data passed via import from data/capabilities.ts
// No capabilities prop needed at beta stage
```

#### FAQSection

```typescript
// components/sections/FAQSection/FAQSection.tsx

export interface FAQSectionProps {
  /** Section ID */
  id?: string
}

// FAQ data imported from data/faq.ts
// Structured for SEO schema generation
```

### 4.3 Graphics Component Props

#### HeroVisual

```typescript
// components/graphics/HeroVisual/HeroVisual.tsx

export interface HeroVisualProps {
  /** Reduce animation for accessibility */
  reducedMotion?: boolean
  /** Additional classes */
  className?: string
}

// Default: reducedMotion=false (respects prefers-reduced-motion)
```

#### FlowDiagram

```typescript
// components/graphics/FlowDiagram/FlowDiagram.tsx

export interface FlowDiagramProps {
  /** Diagram variant */
  variant: "problem" | "solution"
  /** Animate on scroll */
  animated?: boolean
  /** Additional classes */
  className?: string
}

// Default: animated=true
```

**Design Reasoning:**
- Two distinct visualizations, same component for consistency
- Animation toggle for accessibility

#### ProcessSteps

```typescript
// components/graphics/ProcessSteps/ProcessSteps.tsx

export interface ProcessStep {
  number: number
  title: string
  description: string
}

export interface ProcessStepsProps {
  /** Steps data */
  steps: ProcessStep[]
  /** Orientation (responsive default: horizontal on desktop) */
  orientation?: "horizontal" | "vertical"
  /** Animate steps sequentially */
  animated?: boolean
}

// Default: orientation="horizontal", animated=true
```

#### GradientMesh

```typescript
// components/graphics/GradientMesh/GradientMesh.tsx

export interface GradientMeshProps {
  /** Opacity level */
  opacity?: number
  /** Additional classes */
  className?: string
}

// Default: opacity=0.4
```

### 4.4 Layout Component Props

#### NavBar

```typescript
// components/layout/NavBar/NavBar.tsx

export interface NavBarProps {
  /** Additional classes */
  className?: string
}

// Navigation links imported from data/navigation.ts
```

#### NavLink

```typescript
// components/layout/NavBar/NavLink.tsx

export interface NavLinkProps {
  /** Link destination */
  href: string
  /** Link label */
  label: string
  /** Disabled with "Coming Soon" badge */
  comingSoon?: boolean
  /** External link (opens new tab) */
  external?: boolean
}

// Default: comingSoon=false, external=false
```

#### Footer

```typescript
// components/layout/Footer/Footer.tsx

export interface FooterProps {
  /** Additional classes */
  className?: string
}

// Footer data hardcoded or imported
```

#### FooterColumn

```typescript
// components/layout/Footer/FooterColumn.tsx

export interface FooterLink {
  label: string
  href: string
  comingSoon?: boolean
  external?: boolean
}

export interface FooterColumnProps {
  /** Column heading */
  title: string
  /** Links in column */
  links: FooterLink[]
}
```

### 4.5 Shared Component Props

#### MotionWrapper

```typescript
// components/shared/MotionWrapper/MotionWrapper.tsx

export interface MotionWrapperProps {
  /** Animation variant */
  animation?: "fadeInUp" | "fadeIn" | "scaleIn" | "slideInLeft" | "slideInRight"
  /** Delay in seconds */
  delay?: number
  /** Animation duration in seconds */
  duration?: number
  /** Trigger animation once or every time in view */
  once?: boolean
  /** Content */
  children: React.ReactNode
  /** Additional classes */
  className?: string
}

// Default: animation="fadeInUp", delay=0, duration=0.5, once=true
```

#### JsonLd

```typescript
// components/shared/SEO/JsonLd.tsx

export interface JsonLdProps {
  /** JSON-LD structured data object */
  data: Record<string, unknown>
}
```

---

## 5. Reusability & Scalability Recommendations

### 5.1 Beta Phase: What to Keep Simple

| Component/Pattern | Recommendation | Reasoning |
|-------------------|----------------|-----------|
| Section content | Hardcode text | No CMS yet, content in markdown docs |
| Navigation links | Static array | Won't change frequently |
| FAQ content | Data file import | Easy to update, generates schema |
| Capability cards | Data file import | Easy to add/remove cards |
| Color tokens | CSS variables | Already configured, easy to adjust |
| Animation presets | Centralized file | Consistency without over-abstraction |

**Hard-code for now:**
- Hero headline and subheadline
- Problem/Solution copy
- CTA text
- Footer links

**Abstract into data files:**
- Capabilities (6 items)
- FAQ (8 items)
- Process steps (4 items)
- Personas (3 items)
- Navigation links

### 5.2 Post-Beta Evolution Paths

#### Near-Term (1-3 months post-launch)

| Current State | Evolution | Migration Path |
|---------------|-----------|----------------|
| Static FAQ data | CMS-managed FAQ | Add API route, swap data import |
| Hardcoded hero | A/B testable hero | Add variant prop, test framework |
| Single page | Multi-page site | Sections become reusable, add pages |
| No auth | Waitlist signup | Add form component, API route |

#### Medium-Term (3-6 months)

| Area | Evolution |
|------|-----------|
| **Sections** | Extract into page-builder blocks |
| **UI components** | Publish as internal design system package |
| **Animations** | Add GSAP for complex scroll sequences |
| **Data** | Move to CMS (Sanity, Contentful) |
| **Analytics** | Add scroll depth, CTA tracking |

### 5.3 Flexibility Guidelines

**Keep Flexible:**

```typescript
// ✅ Good: Accepts data as props (even if unused at beta)
export function CapabilitiesSection({ capabilities = CAPABILITIES }: Props) {
  // Uses default but allows override
}

// ✅ Good: Variant-based styling
const button = cva([...], {
  variants: {
    variant: { primary: [...], secondary: [...] }
  }
})

// ✅ Good: Composable children
export function Card({ children, ...props }: CardProps) {
  return <div {...props}>{children}</div>
}
```

**Avoid Premature Abstraction:**

```typescript
// ❌ Avoid: Over-generic at beta stage
export function Section<T>({
  data,
  renderItem,
  layout,
  animation,
  background,
  ...
}: GenericSectionProps<T>) {
  // Too many options, hard to maintain
}

// ✅ Better: Specific, clear purpose
export function CapabilitiesSection() {
  // Focused, easy to understand
}
```

### 5.4 Expansion Patterns

#### Adding a New Section

1. Create folder: `components/sections/NewSection/`
2. Create component: `NewSection.tsx`
3. Add data file if needed: `data/new-section.ts`
4. Import in `app/page.tsx`
5. Add to navigation if needed

#### Adding a New Page

1. Create page: `app/new-page/page.tsx`
2. Reuse sections as needed
3. Add to navigation
4. Consider extracting shared sections

#### Converting to CMS

```typescript
// Before: Static import
import { FAQ_ITEMS } from "data/faq"

// After: Server component with fetch
async function FAQSection() {
  const items = await fetchFAQItems() // API or CMS
  return <FAQContent items={items} />
}
```

### 5.5 Technical Debt Prevention

| Risk | Prevention |
|------|------------|
| Inconsistent styling | Use CVA variants, not inline styles |
| Duplicated animations | Centralize in `lib/animations.ts` |
| Props explosion | Start minimal, add as needed |
| Type drift | Centralize types in `types/index.ts` |
| Test gaps | Test each component in isolation |

### 5.6 Component Evolution Likelihood

| Component | Evolution Likelihood | Notes |
|-----------|---------------------|-------|
| **Button** | Low | Stable primitive |
| **Card** | Medium | May need more variants |
| **Badge** | Low | Limited use cases |
| **NavBar** | High | Auth, more links, mobile menu |
| **Footer** | Medium | More columns, newsletter |
| **HeroSection** | High | A/B tests, dynamic content |
| **FAQSection** | Medium | CMS integration |
| **Capabilities** | Low | Core feature, stable |
| **ProcessSteps** | Low | Process unlikely to change |

---

## 6. Implementation Checklist

### 6.1 Phase 6 Implementation Order

**Week 1: Foundation**
- [ ] Set up design tokens (colors, spacing, typography)
- [ ] Configure Tailwind with brand colors
- [ ] Import fonts in layout.tsx
- [ ] Create utility functions (cn, animations)

**Week 1-2: UI Primitives**
- [ ] Refactor Button component
- [ ] Create Badge component
- [ ] Create Card component
- [ ] Create Container component
- [ ] Create SectionHeader component
- [ ] Create Icon wrapper
- [ ] Create Accordion components

**Week 2: Layout**
- [ ] Build NavBar with scroll state
- [ ] Build Footer
- [ ] Set up responsive breakpoints

**Week 2-3: Sections**
- [ ] Build HeroSection with visual
- [ ] Build ProblemSection with diagram
- [ ] Build SolutionSection with diagram
- [ ] Build CapabilitiesSection with cards
- [ ] Build HowItWorksSection with steps
- [ ] Build UseCasesSection with personas
- [ ] Build BetaCTASection
- [ ] Build FAQSection with accordion

**Week 3: Graphics & Polish**
- [ ] Create HeroVisual animation
- [ ] Create FlowDiagram component
- [ ] Create ProcessSteps visualization
- [ ] Create GradientMesh background
- [ ] Add scroll animations
- [ ] Implement reduced motion support

**Week 3-4: SEO & Testing**
- [ ] Add meta tags and OG images
- [ ] Implement JSON-LD schemas
- [ ] Write component tests
- [ ] Run accessibility audit
- [ ] Performance optimization

### 6.2 File Creation Order

```bash
# 1. Utility setup
lib/utils.ts
lib/constants.ts
lib/animations.ts
types/index.ts

# 2. Data files
data/capabilities.ts
data/faq.ts
data/navigation.ts
data/personas.ts
data/process-steps.ts

# 3. UI primitives
components/ui/Button/Button.tsx
components/ui/Badge/Badge.tsx
components/ui/Card/Card.tsx
components/ui/Container/Container.tsx
components/ui/SectionHeader/SectionHeader.tsx
components/ui/Icon/Icon.tsx
components/ui/Accordion/Accordion.tsx
components/ui/Accordion/AccordionItem.tsx

# 4. Layout
components/layout/NavBar/NavBar.tsx
components/layout/NavBar/NavLink.tsx
components/layout/Footer/Footer.tsx
components/layout/Footer/FooterColumn.tsx

# 5. Graphics
components/graphics/GradientMesh/GradientMesh.tsx
components/graphics/HeroVisual/HeroVisual.tsx
components/graphics/FlowDiagram/FlowDiagram.tsx
components/graphics/ProcessSteps/ProcessSteps.tsx

# 6. Shared
components/shared/MotionWrapper/MotionWrapper.tsx
components/shared/SEO/JsonLd.tsx

# 7. Sections
components/sections/HeroSection/HeroSection.tsx
components/sections/ProblemSection/ProblemSection.tsx
components/sections/SolutionSection/SolutionSection.tsx
components/sections/CapabilitiesSection/CapabilitiesSection.tsx
components/sections/HowItWorksSection/HowItWorksSection.tsx
components/sections/UseCasesSection/UseCasesSection.tsx
components/sections/BetaCTASection/BetaCTASection.tsx
components/sections/FAQSection/FAQSection.tsx

# 8. Page assembly
app/layout.tsx (update)
app/page.tsx (replace)
```

---

## 7. Quick Reference Tables

### 7.1 Import Map

```typescript
// UI Components
import { Button } from "components/ui/Button/Button"
import { Badge } from "components/ui/Badge/Badge"
import { Card } from "components/ui/Card/Card"
import { Container } from "components/ui/Container/Container"
import { SectionHeader } from "components/ui/SectionHeader/SectionHeader"
import { Icon } from "components/ui/Icon/Icon"
import { Accordion, AccordionItem } from "components/ui/Accordion"

// Layout
import { NavBar } from "components/layout/NavBar/NavBar"
import { Footer } from "components/layout/Footer/Footer"

// Sections
import { HeroSection } from "components/sections/HeroSection/HeroSection"
import { ProblemSection } from "components/sections/ProblemSection/ProblemSection"
// ... etc

// Graphics
import { HeroVisual } from "components/graphics/HeroVisual/HeroVisual"
import { GradientMesh } from "components/graphics/GradientMesh/GradientMesh"
import { FlowDiagram } from "components/graphics/FlowDiagram/FlowDiagram"
import { ProcessSteps } from "components/graphics/ProcessSteps/ProcessSteps"

// Data
import { CAPABILITIES } from "data/capabilities"
import { FAQ_ITEMS } from "data/faq"
import { NAV_LINKS } from "data/navigation"
import { PERSONAS } from "data/personas"
import { PROCESS_STEPS } from "data/process-steps"

// Utils
import { cn } from "lib/utils"
import { fadeInUp, staggerContainer } from "lib/animations"
```

### 7.2 Component Dependencies

```
Button ──────────────── (standalone)
Badge ───────────────── (standalone)
Icon ────────────────── (standalone)
Container ───────────── (standalone)
Card ────────────────── Icon
SectionHeader ───────── (standalone)
Accordion ───────────── AccordionItem
AccordionItem ────────── Icon (chevron)

NavBar ──────────────── NavLink, Button, Logo
NavLink ─────────────── Badge
Footer ──────────────── FooterColumn, Icon, Logo
FooterColumn ─────────── NavLink pattern

HeroSection ─────────── Badge, SectionHeader, Button, HeroVisual, GradientMesh
ProblemSection ──────── Container, SectionHeader, FlowDiagram, Icon
SolutionSection ─────── Container, SectionHeader, FlowDiagram, Icon
CapabilitiesSection ─── Container, SectionHeader, Card, Icon
HowItWorksSection ───── Container, SectionHeader, ProcessSteps
UseCasesSection ─────── Container, SectionHeader, Card, Icon
BetaCTASection ──────── Container, Card, SectionHeader, Button, GradientMesh
FAQSection ──────────── Container, SectionHeader, Accordion, AccordionItem
```

---

## Document Status

**Architecture Status:** Complete and ready for implementation
**Last Updated:** December 2024
**Next Phase:** Phase 6 - Code Implementation

This document provides all specifications needed to build the AutoRail landing page. Engineers should reference this alongside:
- `visual-design-system.md` for styling details
- `landing-page-content.md` for copy
- `brand.md` for brand guidelines
