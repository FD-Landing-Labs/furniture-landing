import { Hero } from "@/components/hero"
import { Navbar } from "@/components/navbar"
import { AboutSection } from "@/components/about-section"
import { ShowcaseSection } from "@/components/showcase-section"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutSection />
      <ShowcaseSection />
    </main>
  )
}
