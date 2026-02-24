import type { Metadata } from "next"
import { Footer, NavBar } from "components/layout"
import { JsonLd } from "components/shared"
import { UnerrProductPage } from "./unerr-product-page"

export const metadata: Metadata = {
  title: "unerr — The Missing Backend for AI Coding Agents | autorail",
  description:
    "unerr is a hosted MCP server that injects your actual architecture, conventions, and blast radius into your AI agent's context window. Works with Cursor, Claude Code, Copilot, Windsurf, and Devin. Zero workflow changes.",
  openGraph: {
    title: "unerr — The Missing Backend for AI Coding Agents | autorail",
    description:
      "unerr injects your actual architecture into your AI agent's context window — so it stops hallucinating your codebase. Deterministic guardrails, blast radius analysis, and rewind in one MCP connection.",
  },
}

export default function UnerrPage() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-void-black">
        <JsonLd type="faq-unerr" />
        <JsonLd type="howto-spaghetti" />
        <UnerrProductPage />
      </main>
      <Footer />
    </>
  )
}
