import type { Metadata } from "next"
import { Footer, NavBar } from "components/layout"
import { CODE_SYNAPSE } from "data/products"
import { SITE_CONFIG } from "lib/constants"
import { CodeSynapseProductPage } from "./code-synapse-product-page"

export const metadata: Metadata = {
  title: `${CODE_SYNAPSE.name} — The Context Layer | ${SITE_CONFIG.name}`,
  description: `${CODE_SYNAPSE.tagline} ${CODE_SYNAPSE.pitch}`,
  openGraph: {
    title: `${CODE_SYNAPSE.name} — The Context Layer | ${SITE_CONFIG.name}`,
    description: CODE_SYNAPSE.tagline,
  },
}

export default function CodeSynapsePage() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-void-black">
        <CodeSynapseProductPage />
      </main>
      <Footer />
    </>
  )
}
