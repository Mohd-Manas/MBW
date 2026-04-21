"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Building2, 
  Scale, 
  Landmark, 
  FileText, 
  Gavel,
  Users,
  Shield,
  Briefcase,
  Ship,
  ScrollText,
  ArrowRight
} from "lucide-react"
import Link from "next/link"

const mainServices = [
  {
    icon: Building2,
    title: "Corporate & Commercial",
    description: "Structuring, JVs, M&A, shareholder agreements, and commercial contracts.",
  },
  {
    icon: Scale,
    title: "Dispute Resolution",
    description: "Strategic representation in UAE courts and arbitration forums.",
  },
  {
    icon: Landmark,
    title: "Finance & Banking",
    description: "Financial transactions, regulatory compliance, and banking disputes.",
  },
  {
    icon: FileText,
    title: "Retainer Services",
    description: "Ongoing legal support for day-to-day operations and risk mitigation.",
  },
]

const specialistServices = [
  {
    icon: Gavel,
    title: "Arbitration",
    description: "DIFC-LCIA, ADCCAC & ICC frameworks.",
  },
  {
    icon: Users,
    title: "Employment Law",
    description: "Contracts, disputes & UAE labor compliance.",
  },
  {
    icon: Shield,
    title: "Intellectual Property",
    description: "Trademark, copyright & commercial rights.",
  },
  {
    icon: Briefcase,
    title: "Public & Admin Law",
    description: "Licensing, regulatory & government matters.",
  },
  {
    icon: Ship,
    title: "Maritime Law",
    description: "Shipping, logistics & marine insurance disputes.",
  },
  {
    icon: ScrollText,
    title: "Civil Law",
    description: "Contractual disputes, claims & liabilities.",
  },
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F8F6F2]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Services */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#D4AF37] text-sm tracking-[0.3em] uppercase font-medium mb-4">
            Our Services
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1E3A5F] mb-4">
            Comprehensive Legal Practice Areas
          </h2>
          <p className="text-[#4A5568] max-w-2xl mx-auto leading-relaxed">
            Expert legal services tailored to meet the complex needs of businesses 
            and individuals across the UAE and international markets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-20">
          {mainServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group bg-white border-2 border-[#D1CCC4] hover:border-[#D4AF37] p-6 lg:p-8 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-[#F8F6F2] group-hover:bg-[#D4AF37] flex items-center justify-center mb-5 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-[#D4AF37] group-hover:text-[#1E3A5F] transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-xl text-[#1E3A5F] mb-3">
                {service.title}
              </h3>
              <p className="text-[#4A5568] text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-1 text-[#D4AF37] text-sm font-medium hover:gap-2 transition-all"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Specialist Practice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-[#D4AF37] text-sm tracking-[0.3em] uppercase font-medium mb-4">
            Specialist Practice
          </span>
          <h3 className="font-serif text-2xl md:text-3xl text-[#1E3A5F] mb-4">
            Further Areas of Expertise
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {specialistServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
              className="group bg-white border-2 border-[#D1CCC4] hover:border-[#D4AF37] p-6 flex items-start gap-4 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#F8F6F2] group-hover:bg-[#D4AF37] flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-[#D4AF37] group-hover:text-[#1E3A5F] transition-colors duration-300" />
              </div>
              <div>
                <h4 className="font-serif text-lg text-[#1E3A5F] mb-1">
                  {service.title}
                </h4>
                <p className="text-[#4A5568] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
