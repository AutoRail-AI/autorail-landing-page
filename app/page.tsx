import { Footer, NavBar } from "components/layout"
import { Ecosystem, FeatureGrid, Hero, Mission, ProductSplit } from "components/landing"
import { JsonLd } from "components/shared"

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <ProductSplit />
        <FeatureGrid />
        <Mission />
        <Ecosystem />
      </main>
      <Footer />
      <JsonLd type="organization" />
    </>
  )
}
