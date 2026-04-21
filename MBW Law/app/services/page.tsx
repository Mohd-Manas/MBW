import { Metadata } from "next"
import { Header } from "@/components/header"
import { PageHero } from "@/components/page-hero"
import { Services } from "@/components/services"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"

export const metadata: Metadata = {
  title: "Our Services | Optimas Legal Partners",
  description: "Comprehensive legal services including Corporate & Commercial, Dispute Resolution, Finance & Banking, and specialist practice areas.",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageHero 
        title="Our Services"
        subtitle="Expert legal services tailored to meet the complex needs of businesses and individuals across the UAE and international markets."
        breadcrumb="Services"
      />
      <Services />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
