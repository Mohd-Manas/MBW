import { Metadata } from "next"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { PageHero } from "@/components/page-hero"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"

const servicePages: Record<string, {
  title: string
  description: string
  overview: string
  highlights: string[]
}> = {
  "corporate-commercial": {
    title: "Corporate & Commercial",
    description: "Legal advisory for corporate structuring, joint ventures, M&A, shareholder agreements, and commercial contracts.",
    overview: "Our Corporate & Commercial team supports businesses with strategic legal guidance across the lifecycle of major transactions and commercial relationships.",
    highlights: [
      "Joint venture and shareholder agreement drafting",
      "Mergers & acquisitions advisory",
      "Corporate governance and compliance support",
      "Commercial contracts and dispute avoidance",
    ],
  },
  "dispute-resolution": {
    title: "Dispute Resolution",
    description: "Representation in UAE courts and arbitration forums for complex disputes and enforcement matters.",
    overview: "We resolve disputes with practical strategies structured around negotiation, mediation, and arbitration to protect your interests.",
    highlights: [
      "Arbitration and court litigation",
      "ADR strategy and case management",
      "Enforcement of awards and judgments",
      "Cross-border dispute handling",
    ],
  },
  "finance-banking": {
    title: "Finance & Banking",
    description: "Advisory on financial transactions, regulatory compliance, and banking disputes.",
    overview: "Our Finance & Banking practice helps clients navigate regulatory frameworks and complex financial arrangements across the UAE.",
    highlights: [
      "Banking transaction documentation",
      "Regulatory compliance advice",
      "Debt recovery and restructuring",
      "Fintech and payment services guidance",
    ],
  },
  "retainer-services": {
    title: "Retainer Services",
    description: "Ongoing legal support for business operations, risk mitigation, and compliance needs.",
    overview: "Our retainer model provides continuous legal coverage so your team can move faster with trusted counsel at every stage.",
    highlights: [
      "Day-to-day corporate legal support",
      "Contract review and drafting",
      "Risk management and compliance monitoring",
      "Priority access to legal advice",
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(servicePages).map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const page = servicePages[params.slug]

  if (!page) {
    return {
      title: "Service Not Found | Optimas Legal Partners",
      description: "The requested service was not found.",
    }
  }

  return {
    title: `${page.title} | Optimas Legal Partners`,
    description: page.description,
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const page = servicePages[params.slug]

  if (!page) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Header />
      <PageHero
        title={page.title}
        subtitle={page.description}
        breadcrumb="Services"
      />

      <section className="py-20 lg:py-28 bg-[#F8F6F2]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-[#1E3A5F]">
            <p className="text-lg leading-relaxed mb-6">{page.overview}</p>
            <div className="rounded-3xl bg-white border border-[#D1CCC4] p-8 shadow-sm">
              <h2 className="font-serif text-2xl text-[#1E3A5F] mb-5">What we offer</h2>
              <ul className="space-y-3 text-[#4A5568]">
                {page.highlights.map((point) => (
                  <li key={point} className="flex gap-3 leading-relaxed">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#D4AF37] shrink-0"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  )
}
