import type { Metadata } from "next"
import { Footer, NavBar } from "components/layout"
import { NECROMA } from "data/products"
import { SITE_CONFIG } from "lib/constants"
import { NecromaProductPage } from "./necroma-product-page"

export const metadata: Metadata = {
  title: `${NECROMA.name} | ${SITE_CONFIG.name}`,
  description: `${NECROMA.tagline} ${NECROMA.pitch}`,
  openGraph: {
    title: `${NECROMA.name} — ${SITE_CONFIG.name}`,
    description: NECROMA.pitch,
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
