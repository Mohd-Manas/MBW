import { Metadata } from "next"
import { Header } from "@/components/header"
import { PageHero } from "@/components/page-hero"
import { WhyOptimas } from "@/components/why-optimas"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"

export const metadata: Metadata = {
  title: "Why Optimas | Optimas Legal Partners",
  description: "The Optimas Advantage - Institutional-Grade Expertise, Strategic Counsel, Cross-Border Capability, and Independence & Integrity.",
}

export default function WhyOptimasPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageHero 
        title="Why Optimas"
        subtitle="We are engaged where complexity matters — bringing clarity, control, and discipline to high-stakes mandates."
        breadcrumb="The Optimas Advantage"
      />
      <WhyOptimas />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
