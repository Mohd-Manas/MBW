import { Metadata } from "next"
import { Header } from "@/components/header"
import { PageHero } from "@/components/page-hero"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"

export const metadata: Metadata = {
  title: "Retainer Legal Services | Optimas Legal Partners",
  description: "Bespoke ongoing legal support for daily operations and strategic risk mitigation in the UAE.",
}

export default function RetainerServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageHero
        title="Retainer Legal Services"
        subtitle="Continuous and proactive legal support for your business in the UAE."
        breadcrumb="Services"
      />

      <section className="py-20 lg:py-28 bg-[#F8F6F2] text-center">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <h2 className="font-serif text-4xl text-[#1E3A5F] mb-6">Your Dedicated Legal Partner, On Demand</h2>
          <p className="text-lg text-[#4A5568] leading-relaxed">
            Recognizing the imperative for continuous and proactive legal support in today\'s rapidly evolving business landscape, we offer bespoke <strong>Retainer Legal Services</strong>. These services are meticulously designed to provide ongoing legal assistance for daily operational requirements and strategic risk mitigation.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h3 className="font-serif text-3xl text-[#1E3A5F] text-center mb-12">Benefits of Retained Counsel</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-[#D1CCC4] rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="text-[#D4AF37] mb-4 text-4xl">⏱️</div>
              <h4 className="font-serif text-xl text-[#1E3A5F] mb-3">Immediate Access</h4>
              <p className="text-[#4A5568] leading-relaxed">
                Benefit from immediate and accessible legal advice, addressing emergent legal queries without delay.
              </p>
            </div>
            <div className="bg-white border border-[#D1CCC4] rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="text-[#D4AF37] mb-4 text-4xl">🛡️</div>
              <h4 className="font-serif text-xl text-[#1E3A5F] mb-3">Proactive Risk Mitigation</h4>
              <p className="text-[#4A5568] leading-relaxed">
                Minimize potential legal exposures and ensure unwavering adherence to regulatory mandates through continuous support.
              </p>
            </div>
            <div className="bg-white border border-[#D1CCC4] rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="text-[#D4AF37] mb-4 text-4xl">💰</div>
              <h4 className="font-serif text-xl text-[#1E3A5F] mb-3">Cost-Effective Solutions</h4>
              <p className="text-[#4A5568] leading-relaxed">
                Highly cost-effective solution for consistent and premium legal support, tailored to your budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#F8F6F2]">
        <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-serif text-3xl text-[#1E3A5F] mb-6">Comprehensive Ongoing Legal Support</h3>
            <p className="text-[#4A5568] leading-relaxed mb-6">
              Our retainer clients benefit from immediate and accessible legal advice, enabling them to address emergent legal queries and challenges without the necessity of initiating separate engagements. This service model is ideally suited for businesses committed to maintaining stringent <strong>legal compliance</strong>, effectively managing their diverse contractual obligations, and receiving timely, expert counsel on critical operational matters.
            </p>
            <ul className="space-y-3 text-[#4A5568]">
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#D4AF37]"></span>
                Dedicated legal support for routine corporate and commercial matters
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#D4AF37]"></span>
                Contract review, drafting, and negotiation assistance
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#D4AF37]"></span>
                Compliance monitoring and risk management advice
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#D4AF37]"></span>
                Priority access to our legal team for urgent matters
              </li>
            </ul>
          </div>
          <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Ongoing Legal Support"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#1E3A5F] text-white text-center">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <h3 className="font-serif text-3xl mb-6">Why Choose Our Retainer Services?</h3>
          <blockquote className="text-xl italic leading-relaxed mb-8">
            "Our retainer services provide a cost-effective and efficient way to access ongoing legal support. We act as an extension of your team, offering proactive advice, mitigating risks, and ensuring continuous compliance, allowing you to focus on your core business with peace of mind."
          </blockquote>
          <p className="text-lg leading-relaxed">
            We offer tailored solutions that adapt to your evolving business needs, providing predictable legal expenditure and fostering a long-term partnership built on trust and expertise.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#F8F6F2] text-center">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
          <h3 className="font-serif text-3xl text-[#1E3A5F] mb-6">Secure Your Ongoing Legal Certainty</h3>
          <p className="text-lg text-[#4A5568] leading-relaxed mb-8">
            Speak with our team to set up a retainer plan that fits your business and provides continuous legal certainty.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-8 py-4 text-lg font-medium text-[#1E3A5F] transition hover:bg-[#c59f2e] shadow-lg"
          >
            Request a Consultation
          </a>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
   )
}
