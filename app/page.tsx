import { Footer, NavBar } from "components/layout"
import {
  HeroSphere,
  Day2Problem,
  BentoGrid,
  Unerr,
  Necroma,
  SafetyRating,
  Ecosystem,
  WaitlistSection,
} from "components/landing"
import { JsonLd } from "components/shared"

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSphere />
        <Day2Problem />
        <BentoGrid />
        {/* <Unerr /> */}
        {/* <Necroma /> */}
        <SafetyRating />
        <Ecosystem />
        <WaitlistSection />
        <JsonLd type="organization" />
      </main>
      <Footer />
    </>
  )
}
