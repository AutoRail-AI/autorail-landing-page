import { Footer, NavBar } from "components/layout"
import {
  Hero,
  Day2Problem,
  CodeSynapse,
  Necroma,
  SafetyRating,
  Ecosystem,
  CTASection,
} from "components/landing"
import { JsonLd } from "components/shared"

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Day2Problem />
        <CodeSynapse />
        <Necroma />
        <SafetyRating />
        <Ecosystem />
        <CTASection />
      </main>
      <Footer />
      <JsonLd type="organization" />
    </>
  )
}
