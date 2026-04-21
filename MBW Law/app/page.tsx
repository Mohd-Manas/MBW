import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Leadership } from "@/components/leadership"
import { WhyOptimas } from "@/components/why-optimas"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Leadership />
      <WhyOptimas />
      <Contact />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
