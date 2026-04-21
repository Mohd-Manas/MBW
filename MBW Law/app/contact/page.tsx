import { Metadata } from "next"
import { Header } from "@/components/header"
import { PageHero } from "@/components/page-hero"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"

export const metadata: Metadata = {
  title: "Contact Us | Optimas Legal Partners",
  description: "Get in touch with Optimas Legal Partners. Ready to discuss your legal needs? Contact us today.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageHero 
        title="Contact Us"
        subtitle="Ready to discuss your legal needs? Contact us today and let our experienced team provide the strategic guidance you need."
        breadcrumb="Get In Touch"
      />
      <Contact />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
