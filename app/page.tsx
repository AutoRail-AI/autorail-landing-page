import { Footer, NavBar } from "components/layout"
import {
  HeroSphere,
  Day2Problem,
  BentoGrid,
  CodeSynapse,
  Necroma,
  SafetyRating,
  Ecosystem,
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
        {/* <CodeSynapse /> */}
        {/* <Necroma /> */}
        <SafetyRating />
        <Ecosystem />
      </main>
      <Footer />
      <JsonLd type="organization" />
    </>
  )
}
