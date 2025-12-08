# AutoRail Visual Design System

**Version:** 1.0
**Status:** Ready for Implementation
**Last Updated:** December 2024
**Phase:** Beta Launch

---

## Design Philosophy

AutoRail's visual system embodies **technical sophistication with startup agility**. As a beta-phase AI infrastructure platform, the design balances:

- **Credibility** — Enterprise-grade polish that signals engineering excellence
- **Simplicity** — Lightweight visual complexity appropriate for early-stage
- **Scalability** — Foundations that grow with the product
- **Performance** — Optimized assets for fast page loads

**Design Principles:**
1. **Dark-first** — Void Black foundation with strategic light accents
2. **Geometric precision** — Clean lines, mathematical spacing, technical aesthetic
3. **Restrained color** — Purple-dominant palette with cyan highlights
4. **Purposeful motion** — Animation that reinforces meaning, never decorates
5. **Accessibility-native** — WCAG AA minimum, AAA where possible

---

## 1. Layout Grid + Spacing System

### 1.1 Grid Architecture

#### 12-Column Grid System
```
┌─────────────────────────────────────────────────────────────────────────────┐
│  │ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │ 7 │ 8 │ 9 │10 │11 │12 │  │                     │
│  └───┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───┘  │                     │
│  ◄─────────────── Container (max-width) ────────────►│                     │
│  ◄──────────────────── Viewport ────────────────────────────────────────►  │
└─────────────────────────────────────────────────────────────────────────────┘
```

| Property | Value | Notes |
|----------|-------|-------|
| **Columns** | 12 | Standard enterprise grid |
| **Gutter** | 24px | Consistent horizontal rhythm |
| **Margin** | 24px (mobile) / 48px (desktop) | Edge breathing room |
| **Max Container** | 1280px | Prevents extreme widths |

#### Responsive Breakpoints

| Breakpoint | Width | Columns | Gutter | Container Max |
|------------|-------|---------|--------|---------------|
| **xs** (Mobile) | 0-639px | 4 | 16px | 100% - 32px |
| **sm** (Mobile Landscape) | 640-767px | 6 | 20px | 100% - 40px |
| **md** (Tablet) | 768-1023px | 8 | 24px | 720px |
| **lg** (Desktop) | 1024-1279px | 12 | 24px | 1024px |
| **xl** (Large Desktop) | 1280-1535px | 12 | 24px | 1280px |
| **2xl** (Extra Large) | 1536px+ | 12 | 32px | 1440px |

#### Column Span Reference

| Content Type | xs | sm | md | lg/xl |
|--------------|----|----|----|----- |
| Full-width | 4 | 6 | 8 | 12 |
| Content narrow | 4 | 6 | 6 | 8 |
| Two-column item | 4 | 3 | 4 | 6 |
| Three-column item | 4 | 6 | 4 | 4 |
| Sidebar | - | - | 2 | 3 |

### 1.2 Vertical Rhythm

**Baseline Grid:** 8px
All vertical measurements align to an 8px baseline for visual harmony.

```
8px  ─┬─ micro spacing (icons, tight groups)
16px ─┼─ small spacing (inline elements)
24px ─┼─ medium spacing (component internals)
32px ─┼─ default spacing (between components)
48px ─┼─ large spacing (section internals)
64px ─┼─ section gaps
80px ─┼─ major section breaks
96px ─┴─ hero/footer padding
```

### 1.3 Spacing Tokens

| Token | Value | CSS Variable | Usage |
|-------|-------|--------------|-------|
| `space-0` | 0px | `--space-0` | Reset |
| `space-1` | 4px | `--space-1` | Micro: icon padding, tight groups |
| `space-2` | 8px | `--space-2` | XS: inline spacing, icon gaps |
| `space-3` | 12px | `--space-3` | SM: form field internal |
| `space-4` | 16px | `--space-4` | MD: default component padding |
| `space-5` | 20px | `--space-5` | Card internal padding |
| `space-6` | 24px | `--space-6` | LG: section internal, gutter |
| `space-8` | 32px | `--space-8` | XL: component separation |
| `space-10` | 40px | `--space-10` | Between content blocks |
| `space-12` | 48px | `--space-12` | XXL: section internal gaps |
| `space-16` | 64px | `--space-16` | Section separation |
| `space-20` | 80px | `--space-20` | Major section breaks |
| `space-24` | 96px | `--space-24` | Hero/footer vertical padding |

### 1.4 Section Spacing Rules

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                 HERO                                        │
│  padding-top: 96px (space-24)                                               │
│  padding-bottom: 80px (space-20)                                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                            STANDARD SECTION                                 │
│  padding-top: 80px (space-20)                                               │
│  padding-bottom: 80px (space-20)                                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                              CTA SECTION                                    │
│  padding-top: 64px (space-16)                                               │
│  padding-bottom: 64px (space-16)                                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                FOOTER                                       │
│  padding-top: 48px (space-12)                                               │
│  padding-bottom: 32px (space-8)                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

| Section Type | Top | Bottom | Internal Gap | Mobile Reduction |
|--------------|-----|--------|--------------|------------------|
| Hero | 96px | 80px | 32px | 64px / 48px |
| Problem | 80px | 80px | 48px | 48px / 48px |
| Solution | 80px | 80px | 48px | 48px / 48px |
| Capabilities | 80px | 80px | 24px (grid gap) | 48px / 48px |
| How It Works | 80px | 80px | 32px | 48px / 48px |
| Use Cases | 80px | 80px | 24px (grid gap) | 48px / 48px |
| Beta CTA | 64px | 64px | 24px | 48px / 48px |
| FAQ | 80px | 80px | 8px (accordion gap) | 48px / 48px |
| Footer | 48px | 32px | 32px | 32px / 24px |

### 1.5 Whitespace Rules

**Principle:** Generous whitespace signals premium quality and aids focus.

1. **Minimum breathing room** — 16px minimum around any content block
2. **Section isolation** — Adjacent sections always have 64px+ gap
3. **Content max-width** — Text blocks never exceed 720px for readability
4. **Hero isolation** — Hero section stands alone, never crowded
5. **CTA prominence** — 32px+ clear space around all CTAs

---

## 2. Component Shape Language

### 2.1 Border Radius System

**Philosophy:** Rounded corners increase approachability while maintaining technical precision. Larger elements get more rounding.

| Token | Value | CSS Variable | Usage |
|-------|-------|--------------|-------|
| `radius-none` | 0px | `--radius-none` | Sharp edges (rare) |
| `radius-sm` | 4px | `--radius-sm` | Badges, tags, small elements |
| `radius-md` | 8px | `--radius-md` | Buttons, inputs, default |
| `radius-lg` | 12px | `--radius-lg` | Cards, panels |
| `radius-xl` | 16px | `--radius-xl` | Large cards, feature blocks |
| `radius-2xl` | 24px | `--radius-2xl` | Hero elements, modals |
| `radius-full` | 9999px | `--radius-full` | Pills, avatars, badges |

#### Component-Specific Radius

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ COMPONENT              │ RADIUS    │ NOTES                                  │
├────────────────────────┼───────────┼────────────────────────────────────────┤
│ Buttons (all sizes)    │ 8px       │ Consistent across variants             │
│ Input fields           │ 8px       │ Matches buttons for form cohesion      │
│ Badges                 │ 9999px    │ Pill shape for labels/tags             │
│ Cards (capability)     │ 12px      │ Approachable, not too soft             │
│ Cards (persona)        │ 12px      │ Consistent with capability cards       │
│ CTA Section Card       │ 16px      │ Slightly softer for prominence         │
│ FAQ Accordion Items    │ 8px       │ Subtle, not distracting                │
│ Hero Visual Container  │ 24px      │ Premium, hero-scale softness           │
│ Icon Containers        │ 12px      │ Circular feel without full round       │
│ Tooltips               │ 8px       │ Standard small element                 │
│ Nav Bar                │ 0px       │ Full-width, no radius needed           │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 2.2 Container Proportions

#### Card Proportions

| Card Type | Aspect Ratio | Min Height | Max Width |
|-----------|--------------|------------|-----------|
| Capability Card | Flexible | 180px | 400px |
| Persona Card | 3:4 (portrait) | 240px | 360px |
| CTA Card | 2:1 (landscape) | 280px | 640px |
| FAQ Item | Flexible | 56px (collapsed) | 800px |
| Process Step | 1:1 (square-ish) | 120px | 280px |

#### Hero Container

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              HERO SECTION                                   │
│                                                                             │
│    ┌─────────────────────────────────────────────────────────────────┐     │
│    │                                                                 │     │
│    │   Text Content Block                                            │     │
│    │   max-width: 800px                                              │     │
│    │   centered                                                      │     │
│    │                                                                 │     │
│    └─────────────────────────────────────────────────────────────────┘     │
│                                                                             │
│    ┌─────────────────────────────────────────────────────────────────┐     │
│    │                                                                 │     │
│    │   Visual Container                                              │     │
│    │   max-width: 1000px                                             │     │
│    │   aspect-ratio: 16:9                                            │     │
│    │   border-radius: 24px                                           │     │
│    │                                                                 │     │
│    └─────────────────────────────────────────────────────────────────┘     │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 2.3 Shadows & Elevation

**Philosophy:** Minimal shadow usage—dark backgrounds don't need depth cues. Use subtle glows instead for emphasis.

| Level | Shadow | Usage |
|-------|--------|-------|
| **Level 0** | None | Default, most elements |
| **Level 1** | `0 4px 6px rgba(0, 0, 0, 0.3)` | Dropdowns, tooltips (rare) |
| **Level 2** | `0 0 20px rgba(129, 52, 206, 0.1)` | Card hover glow |
| **Level 3** | `0 0 40px rgba(129, 52, 206, 0.15)` | CTA emphasis glow |

#### Glow Effects (Preferred over Shadows)

```css
/* Subtle card hover glow */
.card:hover {
  box-shadow: 0 0 20px rgba(129, 52, 206, 0.1);
}

/* CTA emphasis glow */
.cta-card {
  box-shadow: 0 0 40px rgba(129, 52, 206, 0.15);
}

/* Active/focus glow */
.button:focus-visible {
  box-shadow: 0 0 0 3px rgba(0, 229, 255, 0.4);
}
```

### 2.4 Border Strategy

| Border Type | Specification | Usage |
|-------------|---------------|-------|
| **Default border** | `1px solid rgba(250, 250, 250, 0.1)` | Cards, containers |
| **Hover border** | `1px solid rgba(129, 52, 206, 0.5)` | Interactive cards |
| **Focus border** | `2px solid #00E5FF` | Form focus states |
| **Gradient border** | 2px Rail Fade gradient | CTA card, premium elements |
| **Divider** | `1px solid rgba(250, 250, 250, 0.1)` | Section separators |

#### Gradient Border Implementation

```css
/* Gradient border using pseudo-element */
.gradient-border {
  position: relative;
  background: #1E1E28;
  border-radius: 16px;
}

.gradient-border::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 18px; /* radius + border width */
  background: linear-gradient(135deg, #8134CE, #6E18B3);
  z-index: -1;
}
```

---

## 3. Typography Scale & Usage Rules

### 3.1 Type Hierarchy

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ DISPLAY (Hero H1)                                                           │
│ Space Grotesk Bold 56px / 64px line-height / -0.02em                        │
│ "Infrastructure on Autopilot for AI Agents"                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│ H1 (Page Title)                                                             │
│ Space Grotesk Bold 48px / 56px line-height / -0.02em                        │
│ Used for single-page primary headings                                       │
├─────────────────────────────────────────────────────────────────────────────┤
│ H2 (Section Title)                                                          │
│ Space Grotesk SemiBold 40px / 48px line-height / -0.01em                    │
│ "What AutoRail Provisions"                                                  │
├─────────────────────────────────────────────────────────────────────────────┤
│ H3 (Subsection/Card Title)                                                  │
│ Space Grotesk Medium 28px / 36px line-height / -0.01em                      │
│ "Stateful Memory"                                                           │
├─────────────────────────────────────────────────────────────────────────────┤
│ H4 (Component Title)                                                        │
│ Space Grotesk Medium 20px / 28px line-height / 0                            │
│ "Step 1: Connect"                                                           │
├─────────────────────────────────────────────────────────────────────────────┤
│ H5 (Label/Eyebrow)                                                          │
│ Space Grotesk Medium 14px / 20px / 0.05em uppercase                         │
│ "LAUNCHING SOON"                                                     │
├─────────────────────────────────────────────────────────────────────────────┤
│ Body Large (Lead Text)                                                      │
│ Inter Regular 18px / 28px line-height / -0.011em                            │
│ Hero subheadlines, section intros                                           │
├─────────────────────────────────────────────────────────────────────────────┤
│ Body (Default)                                                              │
│ Inter Regular 16px / 26px line-height / -0.011em                            │
│ Paragraphs, descriptions, FAQ answers                                       │
├─────────────────────────────────────────────────────────────────────────────┤
│ Body Small (Secondary)                                                      │
│ Inter Regular 14px / 22px line-height / 0                                   │
│ Card descriptions, helper text                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│ Caption (Micro)                                                             │
│ Inter Regular 12px / 16px line-height / 0                                   │
│ Timestamps, metadata, legal                                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│ Code                                                                        │
│ JetBrains Mono Regular 14px / 22px line-height / 0                          │
│ Inline code, code blocks                                                    │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 3.2 Responsive Typography Scale

| Element | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| Display/H1 | 56px | 44px | 36px |
| H2 | 40px | 32px | 28px |
| H3 | 28px | 24px | 22px |
| H4 | 20px | 18px | 18px |
| Body Large | 18px | 18px | 16px |
| Body | 16px | 16px | 16px |
| Body Small | 14px | 14px | 14px |

### 3.3 Font Weight Usage

| Weight | Space Grotesk | Inter | Usage |
|--------|---------------|-------|-------|
| 400 (Regular) | Body fallback | Body text, descriptions | Default reading text |
| 500 (Medium) | H3, H4, buttons | Emphasized body | Interactive elements |
| 600 (SemiBold) | H2 | Strong emphasis | Section headers |
| 700 (Bold) | H1, Display | - | Hero headlines only |

### 3.4 Line Length (Measure)

| Content Type | Optimal | Maximum | CSS |
|--------------|---------|---------|-----|
| Headlines | - | 20ch | `max-width: 20ch` |
| Body text | 60-70ch | 75ch | `max-width: 75ch` |
| Captions | - | 50ch | `max-width: 50ch` |
| Card descriptions | - | 40ch | Natural card width |

### 3.5 CTA Typography

| Element | Font | Size | Weight | Transform | Spacing |
|---------|------|------|--------|-----------|---------|
| Primary CTA | Space Grotesk | 16px | 500 | None | 0 |
| Large CTA | Space Grotesk | 18px | 500 | None | 0 |
| Small CTA | Space Grotesk | 14px | 500 | None | 0 |
| Badge | Space Grotesk | 12px | 500 | Uppercase | 0.05em |
| Nav Link | Space Grotesk | 14px | 500 | None | 0 |

### 3.6 Accessibility Typography Rules

1. **Minimum body size:** 16px (never smaller for primary content)
2. **Minimum contrast:** 4.5:1 for body text, 3:1 for large text (24px+)
3. **Line height minimum:** 1.5 for body text
4. **Paragraph spacing:** At least 1.5× font size between paragraphs
5. **No justified text:** Always left-aligned for readability
6. **Avoid all-caps:** Except for short labels/badges

---

## 4. Color Usage Strategy (Per Section)

### 4.1 Global Color Application

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           COLOR HIERARCHY                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  PRIMARY BACKGROUND        │  Void Black (#0A0A0F)                          │
│  └─ 60% of page           │  Hero, CTA, FAQ, Footer backgrounds            │
│                                                                             │
│  SECONDARY BACKGROUND      │  Slate Grey (#1E1E28)                          │
│  └─ 40% of page           │  Problem, Capabilities, Use Cases sections     │
│                                                                             │
│  PRIMARY TEXT              │  Cloud White (#FAFAFA)                         │
│  └─ Headlines, body       │  All text on dark backgrounds                  │
│                                                                             │
│  SECONDARY TEXT            │  Cloud White @ 60% opacity                     │
│  └─ Descriptions, meta    │  Supporting text, timestamps                   │
│                                                                             │
│  PRIMARY ACCENT            │  Deep Rail Purple (#6E18B3)                    │
│  └─ CTAs, links           │  Interactive elements, brand moments           │
│                                                                             │
│  SECONDARY ACCENT          │  Electric Cyan (#00E5FF)                       │
│  └─ Highlights, success   │  Hover states, indicators, emphasis            │
│                                                                             │
│  GRADIENT ACCENT           │  Rail Fade (135°, #8134CE → #6E18B3)          │
│  └─ Premium elements      │  CTA buttons, badges, borders                  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 4.2 Section-by-Section Color Map

#### Navigation Bar
| Element | Color | Notes |
|---------|-------|-------|
| Background (default) | Transparent | No background until scroll |
| Background (scrolled) | Void Black @ 80% + blur | 8px backdrop blur |
| Logo | White | Full brightness |
| Nav links | Cloud White @ 80% | Subtle, not competing |
| Nav links (hover) | Cloud White @ 100% | Full brightness on hover |
| CTA button | Rail Fade gradient | Consistent with hero |

#### Hero Section
| Element | Color | Notes |
|---------|-------|-------|
| Background | Void Black + Gradient Mesh | Mesh at 40% opacity |
| Badge background | Quantum Violet | Premium indicator |
| Badge text | Pure White | High contrast |
| H1 | Pure White | Maximum visibility |
| Subheadline | Cloud White @ 80% | Slightly softer |
| Primary CTA | Rail Fade gradient | Full gradient |
| Secondary CTA | Transparent + border | Ghost style |

#### Problem Section
| Element | Color | Notes |
|---------|-------|-------|
| Background | Slate Grey | Alternating pattern |
| H2 | Cloud White | Standard header |
| Body text | Cloud White @ 80% | Readable but soft |
| Pain point icons | Electric Cyan | Attention-grabbing |
| Diagram "Works" | Electric Cyan border | Success state |
| Diagram "Gap" | Error Red @ 20% bg | Problem highlight |
| Diagram "Needed" | Deep Rail Purple border | Goal state |

#### Solution Section
| Element | Color | Notes |
|---------|-------|-------|
| Background | Void Black | Return to primary |
| H2 | Cloud White | Standard header |
| Body text | Cloud White @ 80% | Readable |
| Primitive icons | Deep Rail Purple | Brand color |
| Flow diagram | Gradient animation | Left-to-right flow |
| Closing statement | Cloud White | Bold emphasis |

#### Capabilities Section
| Element | Color | Notes |
|---------|-------|-------|
| Background | Slate Grey | Alternating pattern |
| H2 | Cloud White | Standard header |
| Card background | Void Black | Contrast with section |
| Card border | Cloud White @ 10% | Subtle definition |
| Card border (hover) | Quantum Violet @ 50% | Interactive feedback |
| Card icon | Deep Rail Purple | Consistent branding |
| Card title | Cloud White | High visibility |
| Card description | Cloud White @ 60% | Secondary text |

#### How It Works Section
| Element | Color | Notes |
|---------|-------|-------|
| Background | Void Black | Primary background |
| H2 | Cloud White | Standard header |
| Step number circle | Rail Fade gradient | Brand moment |
| Step number text | Pure White | High contrast |
| Connector line | Cloud White @ 20% | Subtle connection |
| Step title | Cloud White | Clear hierarchy |
| Step description | Cloud White @ 60% | Secondary text |

#### Use Cases Section
| Element | Color | Notes |
|---------|-------|-------|
| Background | Slate Grey | Alternating pattern |
| H2 | Cloud White | Standard header |
| Card background | Void Black | Contrast |
| Icon background | Slate Grey | Circle @ 64px |
| Icon | Electric Cyan / Quantum Violet / Deep Rail Purple | Per persona |
| Card title | Cloud White | High visibility |
| Card benefit | Cloud White @ 80% | Primary supporting text |

#### Beta CTA Section
| Element | Color | Notes |
|---------|-------|-------|
| Background | Void Black + Mesh @ 20% | Subtle premium feel |
| Card background | Slate Grey | Container |
| Card border | Rail Fade gradient (2px) | Premium highlight |
| H2 | Cloud White | Standard header |
| Description | Cloud White @ 80% | Supporting text |
| CTA button | Rail Fade gradient | Maximum emphasis |
| Trust text | Cloud White @ 50% | Subtle reassurance |

#### FAQ Section
| Element | Color | Notes |
|---------|-------|-------|
| Background | Void Black | Primary background |
| H2 | Cloud White | Standard header |
| Accordion background | Slate Grey | Item containers |
| Accordion border | Cloud White @ 10% | Subtle separation |
| Question text | Cloud White | High readability |
| Answer text | Cloud White @ 80% | Body text level |
| Chevron icon | Cloud White @ 60% | Interactive indicator |

#### Footer
| Element | Color | Notes |
|---------|-------|-------|
| Background | Void Black | Consistent with sections |
| Border top | Cloud White @ 10% | Section separator |
| Logo | Cloud White | Symbol only |
| Tagline | Cloud White @ 60% | Subtle |
| Link headers | Cloud White | Section labels |
| Links | Cloud White @ 60% | Soft by default |
| Links (hover) | Cloud White @ 100% | Interactive feedback |
| Social icons | Cloud White @ 60% | Consistent with links |
| Legal text | Cloud White @ 40% | Very subtle |

### 4.3 Gradient Usage Rules

| Gradient | Usage | Never Use For |
|----------|-------|---------------|
| **Rail Fade** | CTA buttons, badges, step numbers, card borders | Backgrounds, large areas |
| **Automation Flow** | Progress indicators, loading states | Static elements |
| **Infrastructure Depth** | Section backgrounds, card hovers | Small elements |
| **Gradient Mesh** | Hero background, CTA section bg | Non-hero sections |

### 4.4 Dark Mode Considerations

The landing page is dark-mode-first. No light mode variant is required for beta launch.

**Future-proofing notes:**
- All colors defined as CSS custom properties for easy theming
- Background/foreground pairs documented for inversion
- System color tokens separate from brand colors

---

## 5. Illustration & Hero Graphics Specification

### 5.1 Visual Style Direction

**Overall Aesthetic:** Abstract, geometric, technical
**Theme:** AI infrastructure as interconnected railways/pathways

**Style Attributes:**
- **Geometric precision** — Clean lines, mathematical curves
- **Layered depth** — Foreground, midground, background elements
- **Luminous accents** — Glowing nodes and pathways
- **Minimal complexity** — Beta-appropriate simplicity
- **Monochromatic foundation** — Purple/violet dominant with cyan highlights

### 5.2 Hero Visual Specification

**Concept:** "Infrastructure Rails"

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                    ○───────────────────○                                    │
│                   /                     \                                   │
│          ○──────○                         ○──────○                          │
│         /        \                       /        \                         │
│    ○───○          ○─────────────────────○          ○───○                    │
│         \        /                       \        /                         │
│          ○──────○                         ○──────○                          │
│                   \                     /                                   │
│                    ○───────────────────○                                    │
│                                                                             │
│    ◆─────→─────→─────→─────→─────→─────→─────→─────→─────→◆                 │
│         (animated particles flowing along pathways)                         │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Visual Elements:**

| Element | Specification | Color |
|---------|---------------|-------|
| **Nodes (circles)** | 8-16px diameter, filled | Electric Cyan @ 80% |
| **Pathways (lines)** | 2px stroke, rounded caps | Deep Rail Purple @ 60% |
| **Data particles** | 4-6px circles, animated | Electric Cyan @ 100% |
| **Background glow** | Radial gradients, 100-200px blur | Quantum Violet @ 20% |
| **Grid underlay** | 32px grid, 1px lines | Cloud White @ 3% |

**Animation Specification:**
- Particles flow left-to-right continuously
- Duration: 4 seconds per cycle
- Easing: Linear (constant speed)
- Nodes pulse subtly (scale 1.0 → 1.1 → 1.0, 2s cycle)
- Stagger particle start times by 0.5s

**Implementation Approach (Beta-appropriate):**
- Pure CSS/SVG animation (no heavy libraries)
- Alternatively: Lightweight Framer Motion
- Fallback: Static SVG for reduced-motion preference

### 5.3 Problem Section Diagram

**Concept:** Three-stage flow with gap emphasis

```
┌──────────────┐       ┌──────────────┐       ┌──────────────┐
│              │       │              │       │              │
│  Vibe-code   │  ───▶ │    THE GAP   │  ───▶ │  Production  │
│  Frontend    │       │     ???      │       │    Scale     │
│              │       │              │       │              │
│   (Works!)   │       │   (Breaks)   │       │   (Needed)   │
└──────────────┘       └──────────────┘       └──────────────┘
      ✓                      ✗                      ◎
   Success               Problem                  Goal
```

**Visual Treatment:**

| Stage | Border | Background | Icon | State |
|-------|--------|------------|------|-------|
| Stage 1 | 2px Electric Cyan | Slate Grey | Checkmark | Success |
| Stage 2 | 2px Error Red | Error Red @ 10% | Question marks | Problem |
| Stage 3 | 2px Deep Rail Purple | Slate Grey | Target circle | Goal |

**Animation:** Stages reveal sequentially on scroll (0.3s stagger)

### 5.4 Solution Flow Diagram

**Concept:** Linear transformation pipeline

```
┌────────────┐          ┌────────────┐          ┌────────────┐
│            │          │            │          │            │
│    📄      │   ────▶  │     ◆      │   ────▶  │    🖥️      │
│ Your Code  │          │  AutoRail  │          │   Infra    │
│            │          │            │          │            │
└────────────┘          └────────────┘          └────────────┘
     Input               Process                Output

◆─────→─────→─────→─────→─────→─────→─────→─────→─────→◆
    (animated particles showing data transformation)
```

**Animation:** Particles flow through the pipeline, transform at AutoRail node

### 5.5 Iconography System

**Library:** Lucide React (consistent with brand.md)

**Icon Specifications:**

| Property | Value |
|----------|-------|
| Default size | 24px |
| Stroke width | 2px |
| Corner radius | 2px |
| Style | Outline (not filled) |

**Icon Sizes:**

| Size Token | Dimensions | Usage |
|------------|------------|-------|
| `icon-xs` | 16px | Inline text, badges |
| `icon-sm` | 20px | Buttons, nav |
| `icon-md` | 24px | Default, cards |
| `icon-lg` | 32px | Feature highlights |
| `icon-xl` | 48px | Persona cards, hero |

**Icon Colors:**

| Context | Color | Notes |
|---------|-------|-------|
| Default | Cloud White @ 60% | Subtle, not dominant |
| Active/hover | Cloud White @ 100% | Full visibility |
| Brand accent | Deep Rail Purple | Feature icons |
| Success | Electric Cyan | Confirmation, automation |
| Warning | Warning Amber | Caution states |
| Error | Error Red | Error states |

**Section-Specific Icons:**

| Section | Icons | Color |
|---------|-------|-------|
| Capabilities | Database, GitBranch, Shield, Rocket, Eye, TrendingUp | Deep Rail Purple |
| Pain Points | Clock, GitBranch, ShieldAlert | Electric Cyan |
| Personas | User, Users, Cpu | Varies per persona |
| How It Works | Link, Search, Box, Activity | Rail Fade gradient bg |
| FAQ | ChevronDown | Cloud White @ 60% |

### 5.6 Beta-Stage Visual Constraints

**Do:**
- Use simple geometric shapes
- Leverage CSS/SVG animations
- Keep illustrations abstract (easy to modify)
- Use brand colors exclusively

**Don't:**
- Commission complex custom illustrations
- Use 3D renders or heavy graphics
- Include realistic human figures
- Add decorative elements without purpose

---

## 6. Motion & Animation Guidelines

### 6.1 Animation Principles

1. **Purposeful** — Every animation reinforces meaning or provides feedback
2. **Subtle** — Enterprise audiences prefer restraint over flashiness
3. **Fast** — Quick transitions respect user time
4. **Consistent** — Same patterns used throughout
5. **Accessible** — Respect reduced-motion preferences

### 6.2 Duration Scale

| Token | Duration | Usage |
|-------|----------|-------|
| `duration-instant` | 0ms | No animation |
| `duration-fast` | 150ms | Hover states, micro-interactions |
| `duration-normal` | 200ms | Button clicks, toggles, focus |
| `duration-slow` | 300ms | Card reveals, accordion expand |
| `duration-slower` | 500ms | Page transitions, hero animations |
| `duration-slowest` | 800ms | Complex sequences (rare) |

### 6.3 Easing Curves

| Name | Curve | CSS | Usage |
|------|-------|-----|-------|
| `ease-default` | Smooth decelerate | `cubic-bezier(0.4, 0, 0.2, 1)` | Default for most |
| `ease-in` | Accelerate | `cubic-bezier(0.4, 0, 1, 1)` | Exit animations |
| `ease-out` | Decelerate | `cubic-bezier(0, 0, 0.2, 1)` | Enter animations |
| `ease-in-out` | Smooth both | `cubic-bezier(0.4, 0, 0.2, 1)` | State changes |
| `ease-spring` | Bouncy | `cubic-bezier(0.175, 0.885, 0.32, 1.275)` | Playful interactions |

### 6.4 Animation Types

#### Micro-interactions

| Interaction | Animation | Duration | Easing |
|-------------|-----------|----------|--------|
| Button hover | Scale to 1.02, slight glow | 150ms | ease-out |
| Button press | Scale to 0.98 | 100ms | ease-in |
| Link hover | Underline slide-in, color shift | 200ms | ease-default |
| Card hover | Border glow, lift 2px | 200ms | ease-out |
| Icon hover | Color shift | 150ms | ease-default |

#### Scroll Reveals

| Element | Animation | Duration | Trigger |
|---------|-----------|----------|---------|
| Section header | Fade in + slide up 20px | 500ms | In view |
| Cards (grid) | Stagger fade in + slide up | 300ms + 100ms stagger | In view |
| Process steps | Sequential reveal | 400ms + 200ms stagger | In view |
| FAQ items | Fade in | 300ms | In view |

#### Component Animations

| Component | Animation | Duration | Notes |
|-----------|-----------|----------|-------|
| Accordion expand | Height auto, fade in | 200ms | Content reveal |
| Accordion collapse | Height 0, fade out | 150ms | Faster close |
| Nav scroll state | Background opacity | 200ms | Subtle |
| Hero visual | Continuous particle flow | 4000ms loop | Performance-optimized |

### 6.5 Framer Motion Presets

```tsx
// Fade in and slide up (default reveal)
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
  }
}

// Stagger children container
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

// Scale in (for badges, icons)
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: [0, 0, 0.2, 1] }
  }
}

// Hero entrance sequence
export const heroSequence = {
  badge: { delay: 0.2 },
  headline: { delay: 0.4 },
  subheadline: { delay: 0.6 },
  cta: { delay: 0.8 },
  visual: { delay: 1.0 }
}
```

### 6.6 Performance Guidelines

1. **Animate transform and opacity only** — Never animate layout properties
2. **Use will-change sparingly** — Only on elements about to animate
3. **Limit simultaneous animations** — Max 3-4 elements at once
4. **Throttle scroll listeners** — Use Intersection Observer
5. **Test on mid-tier devices** — Ensure 60fps on 2-year-old phones

### 6.7 Reduced Motion Support

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

```tsx
// React hook for motion preference
import { useReducedMotion } from 'framer-motion'

function Component() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
    />
  )
}
```

---

## 7. Asset & Tokenization Recommendations

### 7.1 Design Token Structure

```
tokens/
├── colors.ts          # Color primitives and semantic tokens
├── typography.ts      # Font families, sizes, weights
├── spacing.ts         # Spacing scale
├── radius.ts          # Border radius tokens
├── shadows.ts         # Shadow and glow definitions
├── motion.ts          # Duration and easing curves
└── index.ts           # Unified export
```

### 7.2 Color Tokens

```typescript
// tokens/colors.ts

// Primitive colors (raw values)
export const primitiveColors = {
  purple: {
    900: '#5B0B96',
    700: '#6E18B3',
    500: '#8134CE',
  },
  cyan: {
    500: '#00E5FF',
  },
  grey: {
    950: '#0A0A0F',
    900: '#1E1E28',
    100: '#FAFAFA',
    0: '#FFFFFF',
  },
  status: {
    success: '#00FF88',
    warning: '#FFB800',
    error: '#FF3366',
  },
} as const

// Semantic tokens (usage-based)
export const semanticColors = {
  background: {
    primary: primitiveColors.grey[950],      // Void Black
    secondary: primitiveColors.grey[900],    // Slate Grey
    elevated: primitiveColors.grey[900],     // Cards
  },
  foreground: {
    primary: primitiveColors.grey[100],      // Cloud White
    secondary: 'rgba(250, 250, 250, 0.6)',   // 60% white
    muted: 'rgba(250, 250, 250, 0.4)',       // 40% white
  },
  accent: {
    primary: primitiveColors.purple[700],    // Deep Rail Purple
    secondary: primitiveColors.cyan[500],    // Electric Cyan
    gradient: primitiveColors.purple[500],   // Quantum Violet
  },
  border: {
    default: 'rgba(250, 250, 250, 0.1)',
    hover: 'rgba(129, 52, 206, 0.5)',
    focus: primitiveColors.cyan[500],
  },
  status: primitiveColors.status,
} as const
```

### 7.3 Spacing Tokens

```typescript
// tokens/spacing.ts

export const spacing = {
  0: '0px',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  8: '32px',
  10: '40px',
  12: '48px',
  16: '64px',
  20: '80px',
  24: '96px',
} as const

export const sectionPadding = {
  hero: { top: spacing[24], bottom: spacing[20] },
  standard: { top: spacing[20], bottom: spacing[20] },
  cta: { top: spacing[16], bottom: spacing[16] },
  footer: { top: spacing[12], bottom: spacing[8] },
} as const
```

### 7.4 Typography Tokens

```typescript
// tokens/typography.ts

export const fontFamily = {
  heading: "'Space Grotesk', sans-serif",
  body: "'Inter', sans-serif",
  mono: "'JetBrains Mono', monospace",
} as const

export const fontSize = {
  xs: '12px',
  sm: '14px',
  base: '16px',
  lg: '18px',
  xl: '20px',
  '2xl': '24px',
  '3xl': '28px',
  '4xl': '40px',
  '5xl': '48px',
  '6xl': '56px',
} as const

export const fontWeight = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const

export const lineHeight = {
  tight: 1.2,
  snug: 1.3,
  normal: 1.5,
  relaxed: 1.6,
} as const

export const letterSpacing = {
  tight: '-0.02em',
  snug: '-0.01em',
  normal: '-0.011em',
  wide: '0.05em',
} as const

// Composite typography presets
export const typography = {
  display: {
    fontFamily: fontFamily.heading,
    fontSize: fontSize['6xl'],
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.tight,
    letterSpacing: letterSpacing.tight,
  },
  h1: {
    fontFamily: fontFamily.heading,
    fontSize: fontSize['5xl'],
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.tight,
    letterSpacing: letterSpacing.tight,
  },
  h2: {
    fontFamily: fontFamily.heading,
    fontSize: fontSize['4xl'],
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.tight,
    letterSpacing: letterSpacing.snug,
  },
  // ... etc
} as const
```

### 7.5 Radius Tokens

```typescript
// tokens/radius.ts

export const radius = {
  none: '0px',
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  '2xl': '24px',
  full: '9999px',
} as const

export const componentRadius = {
  button: radius.md,
  input: radius.md,
  card: radius.lg,
  cardLarge: radius.xl,
  badge: radius.full,
  modal: radius['2xl'],
} as const
```

### 7.6 Motion Tokens

```typescript
// tokens/motion.ts

export const duration = {
  instant: 0,
  fast: 150,
  normal: 200,
  slow: 300,
  slower: 500,
  slowest: 800,
} as const

export const easing = {
  default: [0.4, 0, 0.2, 1],
  in: [0.4, 0, 1, 1],
  out: [0, 0, 0.2, 1],
  inOut: [0.4, 0, 0.2, 1],
  spring: [0.175, 0.885, 0.32, 1.275],
} as const

export const transition = {
  fast: `${duration.fast}ms cubic-bezier(${easing.default.join(', ')})`,
  normal: `${duration.normal}ms cubic-bezier(${easing.default.join(', ')})`,
  slow: `${duration.slow}ms cubic-bezier(${easing.default.join(', ')})`,
} as const
```

### 7.7 Token File Location

```
src/
├── tokens/
│   ├── colors.ts
│   ├── typography.ts
│   ├── spacing.ts
│   ├── radius.ts
│   ├── shadows.ts
│   ├── motion.ts
│   └── index.ts
├── styles/
│   ├── globals.css        # CSS custom properties from tokens
│   └── tokens.css         # Generated CSS variables
└── tailwind.config.ts     # Extends Tailwind with tokens
```

### 7.8 Tailwind Integration

```typescript
// tailwind.config.ts
import { primitiveColors, semanticColors } from './src/tokens/colors'
import { spacing } from './src/tokens/spacing'
import { radius } from './src/tokens/radius'
import { fontFamily } from './src/tokens/typography'

export default {
  theme: {
    extend: {
      colors: {
        'rail-purple': primitiveColors.purple[700],
        'electric-cyan': primitiveColors.cyan[500],
        'quantum-violet': primitiveColors.purple[500],
        'void-black': primitiveColors.grey[950],
        'slate-grey': primitiveColors.grey[900],
        'cloud-white': primitiveColors.grey[100],
        // Semantic
        background: semanticColors.background,
        foreground: semanticColors.foreground,
        accent: semanticColors.accent,
        border: semanticColors.border,
      },
      spacing: spacing,
      borderRadius: radius,
      fontFamily: {
        grotesk: [fontFamily.heading],
        inter: [fontFamily.body],
        mono: [fontFamily.mono],
      },
      backgroundImage: {
        'rail-fade': 'linear-gradient(135deg, #8134CE 0%, #6E18B3 100%)',
        'automation-flow': 'linear-gradient(90deg, #00E5FF 0%, #8134CE 50%, #6E18B3 100%)',
        'infra-depth': 'linear-gradient(180deg, #0A0A0F 0%, #1E1E28 100%)',
      },
    },
  },
}
```

---

## 8. Implementation Checklist

### Layout & Grid
- [ ] 12-column grid system configured
- [ ] Responsive breakpoints defined
- [ ] Container max-widths set
- [ ] Section spacing tokens applied

### Typography
- [ ] Font files loaded (self-hosted)
- [ ] Type scale implemented
- [ ] Responsive typography configured
- [ ] Line-height and letter-spacing applied

### Colors
- [ ] Color tokens defined
- [ ] Semantic color mappings created
- [ ] Gradient classes configured
- [ ] Accessibility contrast verified

### Components
- [ ] Border radius tokens applied
- [ ] Shadow/glow effects defined
- [ ] Border styles configured
- [ ] Button variants styled

### Graphics
- [ ] Hero visual specified
- [ ] Icon system configured
- [ ] Diagram styles defined
- [ ] Animation specifications documented

### Motion
- [ ] Duration scale defined
- [ ] Easing curves configured
- [ ] Framer Motion presets created
- [ ] Reduced motion support added

### Tokens
- [ ] Token files created
- [ ] Tailwind integration complete
- [ ] CSS custom properties generated
- [ ] Documentation updated

---

## Document Status

**Visual Design System Status:** Complete
**Last Updated:** December 2024
**Compatible with:** brand.md v1.0, design-system-reference.md v1.0

This document provides the complete visual specification for the AutoRail landing page. All values are implementation-ready and aligned with the established brand guidelines.
