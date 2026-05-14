import { Metadata } from "next"
import { Header } from "@/components/header"
import { PageHero } from "@/components/page-hero"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"

export const metadata: Metadata = {
  title: "Dispute Resolution & Arbitration | Optimas Legal Partners",
  description: "Strategic legal representation in UAE courts and arbitration forums, with a focus on optimal outcomes and proactive dispute management.",
}

export default function DisputeResolutionPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageHero
        title="Dispute Resolution & Arbitration"
        subtitle="Assertive and strategic legal representation for complex disputes in the UAE."
        breadcrumb="Services"
      />

      {/* Overview Section */}
      <section className="py-20 lg:py-28 bg-[#F8F6F2] text-center">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <h2 className="font-serif text-4xl text-[#1E3A5F] mb-6">Navigating Complex Disputes with Precision</h2>
          <p className="text-lg text-[#4A5568] leading-relaxed">
            In the dynamic and often challenging commercial environment of the UAE, the emergence of disputes is an inherent risk. Our specialized <strong>Dispute Resolution</strong> team provides assertive and strategic representation in both the <strong>UAE Federal and Local Courts</strong> and prominent <strong>arbitration forums</strong>. We are committed to securing optimal outcomes for our clients through meticulous preparation and robust advocacy.
          </p>
        </div>
      </section>

      {/* What We Do Section - Grid Layout */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h3 className="font-serif text-3xl text-[#1E3A5F] text-center mb-12">Our Expertise in Action</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Expertise Card 1: UAE Courts */}
            <div className="bg-white border border-[#D1CCC4] rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-[#D4AF37] mb-4 text-4xl">🏛️</div>
              <h4 className="font-serif text-xl text-[#1E3A5F] mb-3">UAE Federal and Local Courts</h4>
              <p className="text-[#4A5568] leading-relaxed">
                We provide assertive representation across all tiers of the UAE judicial system, offering incisive advice on procedural and substantive legal considerations. Our team navigates the complexities of local statutes to protect your interests.
              </p>
            </div>
            {/* Expertise Card 2: Arbitration Forums */}
            <div className="bg-white border border-[#D1CCC4] rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-[#D4AF37] mb-4 text-4xl">⚖️</div>
              <h4 className="font-serif text-xl text-[#1E3A5F] mb-3">Leading Arbitration Forums</h4>
              <p className="text-[#4A5568] leading-relaxed">
                Our expertise extends to prominent arbitration centers including DIAC, ADGM Arbitration Centre, and DIFC-LCIA. We leverage the UAE Federal Law No. 6 of 2018 on Arbitration to ensure comprehensive and effective advocacy.
              </p>
            </div>
            {/* Expertise Card 3: Complex Disputes */}
            <div className="bg-white border border-[#D1CCC4] rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-[#D4AF37] mb-4 text-4xl">📊</div>
              <h4 className="font-serif text-xl text-[#1E3A5F] mb-3">Complex & Multi-Jurisdictional Matters</h4>
              <p className="text-[#4A5568] leading-relaxed">
                We manage high-value, multi-jurisdictional disputes with a profound understanding of commercial objectives. Our approach aims to secure optimal outcomes through litigation, mediation, or international arbitration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach / Strategic Roadmap Section */}
      <section className="py-20 lg:py-28 bg-[#F8F6F2]">
        <div className="container mx-auto px-4 lg:px-8">
          <h3 className="font-serif text-3xl text-[#1E3A5F] text-center mb-12">Our Strategic Approach to Dispute Resolution</h3>
          <div className="relative flex flex-col items-center">
            {/* Timeline Line */}
            <div className="absolute h-full w-1 bg-[#D4AF37] hidden md:block"></div>

            {/* Step 1 */}
            <div className="flex items-center w-full mb-12 md:justify-start justify-center">
              <div className="hidden md:block w-1/2"></div>
              <div className="z-10 flex items-center justify-center w-10 h-10 bg-[#D4AF37] rounded-full shadow-lg">
                <span className="text-white font-bold">1</span>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 ml-8 max-w-md w-full">
                <h4 className="font-serif text-xl text-[#1E3A5F] mb-2">Initial Assessment & Strategy Development</h4>
                <p className="text-[#4A5568]">Thorough evaluation of your case, identifying key strengths, weaknesses, and potential outcomes to formulate a robust legal strategy tailored to your commercial objectives.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-center w-full mb-12 md:justify-end justify-center">
              <div className="bg-white rounded-lg shadow-md p-6 mr-8 max-w-md w-full text-right">
                <h4 className="font-serif text-xl text-[#1E3A5F] mb-2">Negotiation & Alternative Dispute Resolution (ADR)</h4>
                <p className="text-[#4A5568]">Exploring all avenues for amicable resolution, including mediation and direct negotiation, to achieve favorable settlements efficiently and preserve business relationships where possible.</p>
              </div>
              <div className="z-10 flex items-center justify-center w-10 h-10 bg-[#D4AF37] rounded-full shadow-lg">
                <span className="text-white font-bold">2</span>
              </div>
              <div className="hidden md:block w-1/2"></div>
            </div>

            {/* Step 3 */}
            <div className="flex items-center w-full mb-12 md:justify-start justify-center">
              <div className="hidden md:block w-1/2"></div>
              <div className="z-10 flex items-center justify-center w-10 h-10 bg-[#D4AF37] rounded-full shadow-lg">
                <span className="text-white font-bold">3</span>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 ml-8 max-w-md w-full">
                <h4 className="font-serif text-xl text-[#1E3A5F] mb-2">Litigation & Arbitration Advocacy</h4>
                <p className="text-[#4A5568]">When amicable resolution is not feasible, we provide vigorous representation in court or arbitration, meticulously preparing and presenting your case to secure the best possible outcome.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-center w-full md:justify-end justify-center">
              <div className="bg-white rounded-lg shadow-md p-6 mr-8 max-w-md w-full text-right">
                <h4 className="font-serif text-xl text-[#1E3A5F] mb-2">Enforcement & Post-Dispute Advisory</h4>
                <p className="text-[#4A5568]">Assisting with the enforcement of judgments and arbitral awards, and providing ongoing advice to prevent future disputes and strengthen your legal position.</p>
              </div>
              <div className="z-10 flex items-center justify-center w-10 h-10 bg-[#D4AF37] rounded-full shadow-lg">
                <span className="text-white font-bold">4</span>
              </div>
              <div className="hidden md:block w-1/2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h3 className="font-serif text-3xl text-[#1E3A5F] mb-6">Why Optimas Legal for Dispute Resolution?</h3>
          <p className="text-lg text-[#4A5568] leading-relaxed mb-12 max-w-3xl mx-auto">
            Our dispute resolution team is renowned for its strategic approach and deep understanding of UAE and international dispute mechanisms. We provide robust advocacy, tailored strategies, and a commitment to achieving the most favorable outcomes for our clients.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#F8F6F2] rounded-lg p-6 shadow-md border border-[#D1CCC4]">
              <h4 className="font-bold text-xl mb-2 text-[#1E3A5F]">Strategic Advocacy</h4>
              <p className="text-[#4A5568]">Tailored strategies for complex legal challenges.</p>
            </div>
            <div className="bg-[#F8F6F2] rounded-lg p-6 shadow-md border border-[#D1CCC4]">
              <h4 className="font-bold text-xl mb-2 text-[#1E3A5F]">UAE Expertise</h4>
              <p className="text-[#4A5568]">In-depth knowledge of local laws and judicial processes.</p>
            </div>
            <div className="bg-[#F8F6F2] rounded-lg p-6 shadow-md border border-[#D1CCC4]">
              <h4 className="font-bold text-xl mb-2 text-[#1E3A5F]">Global Perspective</h4>
              <p className="text-[#4A5568]">Proficiency in international arbitration and cross-border disputes.</p>
            </div>
            <div className="bg-[#F8F6F2] rounded-lg p-6 shadow-md border border-[#D1CCC4]">
              <h4 className="font-bold text-xl mb-2 text-[#1E3A5F]">Client-Centric Approach</h4>
              <p className="text-[#4A5568]">Focused on minimizing disruption and achieving optimal commercial outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 lg:py-28 bg-[#F8F6F2] text-center">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
          <h3 className="font-serif text-3xl text-[#1E3A5F] mb-6">Need Expert Dispute Resolution?</h3>
          <p className="text-lg text-[#4A5568] leading-relaxed mb-8">
            Speak to our specialists for tailored dispute resolution advice and strategic case planning. We are ready to assist you.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-8 py-4 text-lg font-medium text-[#1E3A5F] transition hover:bg-[#c59f2e] shadow-lg"
          >
            Contact Our Team
          </a>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  )
}
