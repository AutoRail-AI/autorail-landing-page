import type { Metadata } from "next"
import { Footer, NavBar } from "components/layout"
import { KAP10 } from "data/products"
import { SITE_CONFIG } from "lib/constants"
import { Kap10ProductPage } from "./kap10-product-page"

export const metadata: Metadata = {
  title: `${KAP10.name} — The Context Layer | ${SITE_CONFIG.name}`,
  description: `${KAP10.tagline} ${KAP10.pitch}`,
  openGraph: {
    title: `${KAP10.name} — The Context Layer | ${SITE_CONFIG.name}`,
    description: KAP10.tagline,
  },
}

export default function Kap10Page() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-void-black">
        <Kap10ProductPage />
      </main>
      <Footer />
    </>
  )
}
