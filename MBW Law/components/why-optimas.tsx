"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, TrendingUp, Globe, Shield } from "lucide-react"

const advantages = [
  {
    icon: Award,
    title: "Institutional-Grade Expertise",
    description: "Aligned with standards of regulated entities and financial institutions.",
    bgColor: "bg-[#D4AF37]",
    textColor: "text-[#1E3A5F]",
    iconBg: "bg-[#1E3A5F]",
    iconColor: "text-[#D4AF37]",
  },
  {
    icon: TrendingUp,
    title: "Strategic Counsel",
    description: "Forward-looking advice that anticipates risk and supports complex decisions.",
    bgColor: "bg-[#1E3A5F]",
    textColor: "text-white",
    iconBg: "bg-[#D4AF37]",
    iconColor: "text-[#1E3A5F]",
  },
  {
    icon: Globe,
    title: "Cross-Border Capability",
    description: "Multi-jurisdictional perspective on international structures and regulatory exposure.",
    bgColor: "bg-[#152B47]",
    textColor: "text-[#F8F6F2]",
    iconBg: "bg-[#D4AF37]",
    iconColor: "text-[#1E3A5F]",
  },
  {
    icon: Shield,
    title: "Independence & Integrity",
    description: "Highest standards of discretion and protection of client interests.",
    bgColor: "bg-[#B8972E]",
    textColor: "text-[#1E3A5F]",
    iconBg: "bg-[#1E3A5F]",
    iconColor: "text-[#D4AF37]",
  },
]

export function WhyOptimas() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="why-optimas" className="py-20 lg:py-28 bg-[#F8F6F2]">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#D4AF37] text-sm tracking-[0.3em] uppercase font-medium mb-4">
            Why Optimas
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1E3A5F] mb-4">
            The Optimas Advantage
          </h2>
          <p className="text-[#4A5568] max-w-2xl mx-auto leading-relaxed">
            We are engaged where complexity matters — bringing clarity, control, 
            and discipline to high-stakes mandates.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${advantage.bgColor} ${advantage.textColor} p-8 lg:p-10`}
            >
              <div className={`w-14 h-14 ${advantage.iconBg} flex items-center justify-center mb-6`}>
                <advantage.icon className={`w-7 h-7 ${advantage.iconColor}`} />
              </div>
              <h3 className="font-serif text-xl mb-3">{advantage.title}</h3>
              <p className="text-sm opacity-90 leading-relaxed">{advantage.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Commitment & Signature Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Our Commitment */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-8 lg:p-12 border-l-4 border-[#D4AF37]"
          >
            <span className="inline-block text-[#D4AF37] text-sm tracking-[0.3em] uppercase font-medium mb-4">
              Our Commitment
            </span>
            <h3 className="font-serif text-2xl lg:text-3xl text-[#1E3A5F] mb-4">
              Partner-Led. Outcome-Focused.
            </h3>
            <p className="text-[#4A5568] leading-relaxed">
              Every engagement is led with senior-level involvement, ensuring 
              tailored advice and responsiveness at every stage. We are engaged 
              where complexity matters — bringing clarity, control, and discipline 
              to high-stakes mandates.
            </p>
          </motion.div>

          {/* Signature */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-[#1E3A5F] p-8 lg:p-12 flex items-center"
          >
            <div>
              <span className="inline-block text-[#D4AF37] text-sm tracking-[0.3em] uppercase font-medium mb-4">
                Our Signature
              </span>
              <blockquote className="font-serif text-xl lg:text-2xl text-white italic leading-relaxed mb-4">
                &ldquo;Advising where precision is critical, complexity is inherent, 
                and outcomes matter.&rdquo;
              </blockquote>
              <p className="text-[#D4AF37] font-medium">— Optimas Legal Partners</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
