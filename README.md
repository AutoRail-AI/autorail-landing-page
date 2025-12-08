# AutoRail

**Infrastructure on Autopilot for AI Agents**

<p align="center">
  <img src="public/logos/autorail.svg" alt="AutoRail Logo" width="200" />
</p>

## The Problem

Building a real product requires more than great UI and frontend code. It's a coordinated effort across architecture, backend systems, state management, design patterns, and operational tooling.

But vibe-coding shortcuts these decisions. It produces something that works on day one, but collapses when confronted with real-world scale, reliability, and complexity.

Tools like Lovable and Bolt are excellent for rapidly generating frontend scaffolds. But when your system needs to:
- Remember a user from three days ago
- Orchestrate 50+ concurrent tasks
- Guarantee failure-safe execution

...vibe-coding breaks down.

## The Solution

**AutoRail eliminates this gap.**

It continuously interprets your generated code and automatically provisions the backend primitives your product actually needs:
- Stateful memory layers
- Workflow orchestration
- Guardrails
- Rate limiters
- Circuit-breaker patterns

The result: agents and applications that run on a stable, scalable, production-grade track from day one.

> Frontend generation gives you momentum. AutoRail gives you the infrastructure to sustain it.

---

## Development

### Prerequisites
- Node.js >= 20
- pnpm 10 (via Corepack)

### Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Run tests
pnpm test

# Build for production
pnpm build
```

### Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Components**: Radix UI + CVA (Class Variance Authority)
- **Testing**: Vitest + React Testing Library + Playwright
- **Type Safety**: Strict TypeScript with ts-reset

### Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start dev server with Turbopack |
| `pnpm build` | Production build |
| `pnpm test` | Run unit tests |
| `pnpm e2e:headless` | Run E2E tests |
| `pnpm storybook` | Component development |
| `pnpm lint` | Check code quality |

## Brand

AutoRail uses a distinctive purple gradient brand identity. See `ai-docs/brand/brand.md` for complete brand guidelines including:

- **Colors**: Deep Rail Purple (`#6E18B3`), Electric Cyan (`#00E5FF`), Quantum Violet (`#8134CE`)
- **Typography**: Space Grotesk (headlines), Inter (body), JetBrains Mono (code)
- **Logo**: `public/logos/autorail.svg`

## License

MIT

## Contact

jaswanth@autorail.dev
