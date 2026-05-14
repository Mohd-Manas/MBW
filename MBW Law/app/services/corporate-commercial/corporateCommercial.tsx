import { Metadata } from "next"
import { Header } from "@/components/header"
import { PageHero } from "@/components/page-hero"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"

export const metadata: Metadata = {
  title: "Corporate & Commercial Advisory | Optimas Legal Partners",
  description: "Sophisticated legal advisory services for corporate and commercial matters, joint ventures, M&A, shareholder agreements, and commercial contracts in the UAE.",
}

export default function CorporateCommercialPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageHero
        title="Corporate & Commercial Advisory"
        subtitle="Strategic legal support for corporate transactions, governance, and commercial relationships in the UAE."
        breadcrumb="Services"
      />

      <section className="py-20 lg:py-28 bg-[#F8F6F2]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] items-start">
            <div className="space-y-8">
              <div className="rounded-3xl bg-white border border-[#D1CCC4] p-8 shadow-sm">
                <h2 className="font-serif text-3xl text-[#1E3A5F] mb-4">What We Do</h2>
                <p className="text-[#4A5568] leading-relaxed mb-4">
                  Our firm offers sophisticated legal advisory services across the spectrum of Corporate and Commercial Law within the United Arab Emirates. We provide strategic guidance to a diverse clientele, ranging from emerging enterprises to established multinational corporations, enabling them to adeptly navigate the intricate regulatory landscape of the UAE. Our core competencies include comprehensive support for company formation, ensuring meticulous adherence to local statutes and the distinct regulations governing various free zones across the Emirates. We excel in the drafting, negotiation, and review of complex commercial contracts, encompassing distribution agreements, agency arrangements, franchise and licensing accords. These instruments are meticulously crafted to safeguard our clients' commercial interests and foster seamless operational execution. Furthermore, we provide expert counsel on Joint Ventures (JVs), Mergers & Acquisitions (M&A), and the formulation of robust shareholder agreements, thereby establishing resilient legal frameworks for strategic alliances and significant corporate transactions. Our overarching objective is to empower businesses to flourish within the highly competitive UAE market through the application of astute legal strategies and rigorous documentation, aligning with the provisions of the UAE Commercial Companies Law (Federal Decree-Law No. 32 of 2021).
                </p>
                <ul className="space-y-3 text-[#4A5568]">
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#D4AF37]"></span>
                    Company formation and structuring
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#D4AF37]"></span>
                    Joint venture and shareholder agreement drafting
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#D4AF37]"></span>
                    Mergers & acquisitions advisory and due diligence support
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#D4AF37]"></span>
                    Commercial contract negotiation and dispute avoidance
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#D4AF37]"></span>
                    Corporate governance, compliance and board advisory
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl bg-white border border-[#D1CCC4] p-8 shadow-sm">
                <h3 className="font-serif text-2xl text-[#1E3A5F] mb-4">Why Choose Us</h3>
                <p className="text-[#4A5568] leading-relaxed mb-4">
                  We combine practical commercial insight with deep UAE legal experience to deliver solutions that protect your business and accelerate growth. Our team offers responsive transaction support, commercially focused legal strategy, experienced cross-border advice, and acts as a trusted long-term advisory partner. Our commitment to excellence ensures that your corporate and commercial endeavors are not only compliant but also strategically positioned for success in the dynamic UAE economy.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    "Responsive transaction support",
                    "Commercially focused legal strategy",
                    "Experienced cross-border advice",
                    "Trusted long-term advisory partner",
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
                  <p>Support for corporate structuring, joint ventures, and M&A.</p>
                  <p>Drafting and negotiating commercial and shareholder agreements.</p>
                  <p>Corporate governance and regulatory compliance advice.</p>
                  <p>Practical support during investment and restructuring transactions.</p>
                </div>
              </div>

              <div className="rounded-3xl bg-[#1E3A5F] text-white p-8 shadow-sm">
                <h4 className="font-serif text-2xl mb-4">Ready to discuss?</h4>
                <p className="leading-relaxed mb-6">
                  Contact our team for tailored advice on your corporate or commercial matter.
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

      <Footer />
      <FloatingButtons />
    </main>
  )
}
