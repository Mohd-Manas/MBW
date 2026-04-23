import { Metadata } from "next"
import { Header } from "@/components/header"
import { PageHero } from "@/components/page-hero"
import { About } from "@/components/about"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"

export const metadata: Metadata = {
  title: "Who We Are | Optimas Legal Partners",
  description: "Learn about Optimas Legal Partners - a boutique advisory firm serving corporates, financial institutions, and high-net-worth individuals across the UAE and beyond.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageHero 
        title="Who We Are"
        subtitle="Precision. Integrity. Results. A boutique advisory firm delivering strategic legal solutions."
        breadcrumb="About Us"
      />
      <About />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
