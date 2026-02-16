import type { Metadata } from "next"
import { Footer, NavBar } from "components/layout"
import { NECROMA } from "data/products"
import { SITE_CONFIG } from "lib/constants"
import { NecromaProductPage } from "./necroma-product-page"

export const metadata: Metadata = {
  title: "necroma — AI Legacy Code Migration Tool | autorail",
  description:
    "necroma records live application behavior, generates Playwright tests, then forces AI to rewrite legacy code until every test passes. See your first modernized feature in days, not quarters.",
  openGraph: {
    title: "necroma — AI Legacy Code Migration Tool | autorail",
    description:
      "necroma records live application behavior, generates Playwright tests, then forces AI to rewrite legacy code until every test passes. See your first modernized feature in days, not quarters.",
  },
}

export default function NecromaPage() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-void-black">
        <NecromaProductPage />
      </main>
      <Footer />
    </>
  )
}
