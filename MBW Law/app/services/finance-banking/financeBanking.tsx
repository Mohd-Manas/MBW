import { Metadata } from "next"
import { Header } from "@/components/header"
import { PageHero } from "@/components/page-hero"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"

export const metadata: Metadata = {
  title: "Finance & Banking Regulatory Compliance | Optimas Legal Partners",
  description: "Highly specialized legal services for financial transactions, regulatory compliance, and banking disputes in the UAE.",
}

export default function FinanceBankingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageHero
        title="Finance & Banking Regulatory Compliance"
        subtitle="Expert legal guidance for the sophisticated financial ecosystem of the UAE."
        breadcrumb="Services"
      />

      <section className="py-20 lg:py-28 bg-[#F8F6F2]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] items-start">
            <div className="space-y-8">
              <div className="rounded-3xl bg-white border border-[#D1CCC4] p-8 shadow-sm">
                <h2 className="font-serif text-3xl text-[#1E3A5F] mb-4">What We Do</h2>
                <p className="text-[#4A5568] leading-relaxed mb-4">
                  Our Finance & Banking practice supports clients through complex banking, finance, and regulatory matters in the UAE. We advise on transactional structures, financing agreements, regulatory compliance, and dispute prevention to keep your operations secure and commercially sound.
                </p>
                <ul className="space-y-3 text-[#4A5568]">
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#D4AF37]"></span>
                    Banking and finance transaction documentation
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#D4AF37]"></span>
                    Regulatory compliance and central bank advisory
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#D4AF37]"></span>
                    Financing, lending, and debt restructuring support
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#D4AF37]"></span>
                    Banking dispute prevention and resolution guidance
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl bg-white border border-[#D1CCC4] p-8 shadow-sm">
                <h3 className="font-serif text-2xl text-[#1E3A5F] mb-4">Why Choose Us</h3>
                <p className="text-[#4A5568] leading-relaxed mb-4">
                  We combine regulatory insight with transactional experience to deliver clear, practical legal advice. Our team helps clients navigate the UAE banking environment while reducing risk and supporting business growth.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    "Regulatory and central bank expertise",
                    "Structured finance advisory",
                    "Practical compliance solutions",
                    "Focused dispute prevention",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl bg-[#F8F6F2] p-5">
                      <p className="text-[#1E3A5F]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-3xl bg-white border border-[#D1CCC4] p-8 shadow-sm">
                <h4 className="font-serif text-2xl text-[#1E3A5F] mb-4">Service Snapshot</h4>
                <div className="space-y-3 text-[#4A5568]">
                  <p>Advice on banking regulations and financial institution obligations.</p>
                  <p>Support for lending agreements, structured finance and securities.</p>
                  <p>Compliance advice for Islamic finance and conventional banking.</p>
                  <p>Practical risk management for financial transactions.</p>
                </div>
              </div>

              <div className="rounded-3xl bg-[#1E3A5F] text-white p-8 shadow-sm">
                <h4 className="font-serif text-2xl mb-4">Need expert finance advice?</h4>
                <p className="leading-relaxed mb-6">
                  Contact our team for tailored legal guidance on your finance or banking matter.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-medium text-[#1E3A5F] transition hover:bg-[#c59f2e]"
                >
                  Contact Us
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#F8F6F2]">
        <div className="container mx-auto px-4 lg:px-8">
          <h3 className="font-serif text-3xl text-[#1E3A5F] text-center mb-12">Our Financial Practice Strengths</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-3xl bg-white border border-[#D1CCC4] p-8 shadow-sm">
              <h4 className="font-serif text-xl text-[#1E3A5F] mb-3">Strategic Banking Solutions</h4>
              <p className="text-[#4A5568] leading-relaxed">
                We help structure financing arrangements, secure credit facilities, and advise on bank relationships to optimize your capital structure and transaction execution.
              </p>
            </div>
            <div className="rounded-3xl bg-white border border-[#D1CCC4] p-8 shadow-sm">
              <h4 className="font-serif text-xl text-[#1E3A5F] mb-3">Regulatory and Governance Support</h4>
              <p className="text-[#4A5568] leading-relaxed">
                Our regulatory team provides practical guidance on central bank requirements, licensing, AML compliance, and governance frameworks for financial institutions and corporate clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h3 className="font-serif text-3xl text-[#1E3A5F] mb-6">Why Optimas Legal for Finance & Banking?</h3>
          <p className="text-[#4A5568] leading-relaxed mb-12 max-w-3xl mx-auto">
            We combine UAE regulatory insight with practical finance experience to help clients manage risk, improve compliance, and complete transactions confidently.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="rounded-3xl bg-[#F8F6F2] border border-[#D1CCC4] p-6 shadow-sm">
              <h4 className="font-bold text-xl text-[#1E3A5F] mb-2">Regulatory Expertise</h4>
              <p className="text-[#4A5568]">Central bank, DFSA and FSRA advisory with practical compliance solutions.</p>
            </div>
            <div className="rounded-3xl bg-[#F8F6F2] border border-[#D1CCC4] p-6 shadow-sm">
              <h4 className="font-bold text-xl text-[#1E3A5F] mb-2">Transactional Support</h4>
              <p className="text-[#4A5568]">Structured finance, lending and securities documentation support.</p>
            </div>
            <div className="rounded-3xl bg-[#F8F6F2] border border-[#D1CCC4] p-6 shadow-sm">
              <h4 className="font-bold text-xl text-[#1E3A5F] mb-2">Dispute Prevention</h4>
              <p className="text-[#4A5568]">Practical advice to avoid conflicts and resolve banking disputes quickly.</p>
            </div>
            <div className="rounded-3xl bg-[#F8F6F2] border border-[#D1CCC4] p-6 shadow-sm">
              <h4 className="font-bold text-xl text-[#1E3A5F] mb-2">Client-Focused</h4>
              <p className="text-[#4A5568]">Tailored legal solutions designed for your business goals and risk profile.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#F8F6F2] text-center">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
          <h3 className="font-serif text-3xl text-[#1E3A5F] mb-6">Need Expert Finance & Banking Advice?</h3>
          <p className="text-[#4A5568] leading-relaxed mb-8">
            Contact our team for tailored legal guidance on your finance or banking matter. We are here to support your success.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-8 py-4 text-lg font-medium text-[#1E3A5F] transition hover:bg-[#c59f2e] shadow-lg"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  )
}
