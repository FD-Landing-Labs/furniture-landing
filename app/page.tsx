import { Hero } from "@/components/hero"
import { Navbar } from "@/components/navbar"
import { AboutSection } from "@/components/about-section"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutSection />
    </main>
  )
}
