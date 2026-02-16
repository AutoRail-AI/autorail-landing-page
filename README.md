# autorail

**Industrial Safety for Vibe Coding**

<p align="center">
  <img src="public/icon.svg" alt="autorail logo" width="200" />
</p>

autorail is the nervous system for the next generation of software engineering—where code is not just written, but **understood**, **evolved**, and **resurrected**.

---
/plugin marketplace add anthropics/claude-code
/plugin install frontend-design@claude-code-plugins

## Products

### 🧠 kap10 — *The Cognitive Engine*

A living knowledge graph that turns your codebase into structured memory for AI agents. Eliminate "Alien Code" with hyper-personalized generation that respects your team's patterns.

- **MCP-Native** — Works with Cursor, Claude, Windsurf
- **Living Knowledge Graph** — Business intent, not just syntax
- **Persistent Team Memory** — Context that survives across sessions

> `npm install kap10` • [GitHub](https://github.com/AutoRail-AI)

### 💀 necroma — *The Autonomous Workforce*

The "legacy code necromancer." An autonomous agentic platform that transmutes legacy systems into modern, test-verified applications. Preserves behavior, not just syntax.

- **Glass Brain Dashboard** — Full-cognition visibility
- **Vertical Slice Migration** — Incremental, safe modernization
- **Self-Healing Verification** — Auditable, trust-first output

> Enterprise • Invite Only • [Request Access](mailto:enterprise@autorail.dev)

---

## Development

### Prerequisites
- Node.js >= 20
- pnpm 10 (via Corepack)

### Getting Started

```bash
pnpm install        # Install dependencies
pnpm dev            # Start dev server (Turbopack)
pnpm build          # Production build
pnpm test           # Run unit tests
```

### Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 + CVA |
| Components | Radix UI primitives |
| Animation | Framer Motion, GSAP |
| Icons | Lucide React |
| Testing | Vitest + Playwright |
| Type Safety | Strict TypeScript |

### Available Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Dev server with Turbopack |
| `pnpm build` | Production build |
| `pnpm test` | Unit tests (Vitest) |
| `pnpm e2e:headless` | E2E tests (Playwright) |
| `pnpm storybook` | Component development |
| `pnpm lint` | Code quality check |

---

## Brand

| Token | Value | Usage |
|-------|-------|-------|
| Void Black | `#0A0A0F` | Background |
| Electric Cyan | `#00E5FF` | kap10 |
| Rail Purple | `#6E18B3` | necroma |
| Quantum Violet | `#8134CE` | Accents |
| Cloud White | `#FAFAFA` | Text |

**Typography**: Space Grotesk (headlines) · Inter (body) · JetBrains Mono (code)

See [`docs/brand/brand.md`](docs/brand/brand.md) for full guidelines.

---

## Architecture

```
app/                    # Next.js App Router
components/
├── landing/            # Page sections (Hero, ProductSplit, etc.)
├── layout/             # NavBar, Footer
├── ui/                 # Button, Badge, Card, Container, etc.
├── graphics/           # HeroVisual, FlowDiagram, GradientMesh
└── shared/             # GradientText, JsonLd
data/                   # Navigation, capabilities, content
docs/                   # Brand guidelines, improvement plans
public/                 # Logo assets (autorail.svg, icon.svg), manifest icons
styles/                 # Tailwind CSS entry point
```

---

## License

MIT

## Contact

[jaswanth@autorail.dev](mailto:jaswanth@autorail.dev) · [GitHub](https://github.com/AutoRail-AI)
