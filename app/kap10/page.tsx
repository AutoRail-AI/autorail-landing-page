import type { Metadata } from "next"
import { Footer, NavBar } from "components/layout"
import { JsonLd } from "components/shared"
import { Kap10ProductPage } from "./kap10-product-page"

export const metadata: Metadata = {
  title: "kap10 — Automated AI Code Review Tool | autorail",
  description:
    "kap10 is an automated code review tool for AI coding agents. It reviews every line Cursor, Claude Code, or Windsurf writes — enforcing your architecture, locking scope, and preventing regressions before code reaches your repo.",
  openGraph: {
    title: "kap10 — Automated AI Code Review Tool | autorail",
    description:
      "kap10 is an automated code review tool for AI coding agents. It reviews every line Cursor, Claude Code, or Windsurf writes — enforcing your architecture, locking scope, and preventing regressions.",
  },
}

export default function Kap10Page() {
  return (
    <>
      <JsonLd type="faq-kap10" />
      <JsonLd type="howto-spaghetti" />
      <NavBar />
      <main className="min-h-screen bg-void-black">
        <Kap10ProductPage />
      </main>
      <Footer />
    </>
  )
}
