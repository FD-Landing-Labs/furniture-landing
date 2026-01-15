import { Hero } from "@/components/hero"
import { Navbar } from "@/components/navbar"
import { AboutSection } from "@/components/about-section"
import { ShowcaseSection } from "@/components/showcase-section"
import { ProjectsSection } from "@/components/projects-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutSection />
      <ShowcaseSection />
      <ProjectsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
