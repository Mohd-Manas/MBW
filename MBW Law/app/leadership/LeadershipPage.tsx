import { Metadata } from "next"
import { Header } from "@/components/header"
import { PageHero } from "@/components/page-hero"
import { Leadership } from "@/components/leadership"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"

export const metadata: Metadata = {
  title: "Leadership | Optimas Legal Partners",
  description: "Meet our leadership team - Partner-led and outcome-focused with senior-level involvement in every engagement.",
}

export default function LeadershipPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageHero 
        title="Our Leadership"
        subtitle="Partner-led and outcome-focused. Every engagement is led with senior-level involvement."
        breadcrumb="Leadership"
      />
      <Leadership />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
