"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Linkedin } from "lucide-react"

const leaders = [
  // {
  //   name: "Deepak Kumar Sah",
  //   role: "Founder & Managing Director",
  //   image: "/images/deepak-kumar-sah.png",
  //   description: "Seasoned legal and compliance professional specializing in AML/CFT frameworks, regulatory licensing, corporate governance, and cross-border structuring. Deep expertise across SCA/CMA, VARA, and DIFC regulatory environments.",
  // },
  {
    name: "Sanjana Sharan",
    role: "Director  & Strategic Advisor",
    image: "/images/sanjana-sharan.png",
    description: "Brings a strategic, client-focused perspective with expertise in business advisory, client relationship management, and operational structuring. She drives client engagement, strategic planning, and seamless delivery of legal and business solutions - combining strategic thinking with operational efficiency.",
  },
]

export function Leadership() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="leadership" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#D4AF37] text-sm tracking-[0.3em] uppercase font-medium mb-4">
            Leadership
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1E3A5F] mb-4">
            Meet Our Team
          </h2>
          <p className="text-[#4A5568] max-w-2xl mx-auto leading-relaxed">
            Partner-led and outcome-focused. Every engagement is led with senior-level 
            involvement, ensuring tailored advice and responsiveness at every stage.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative mb-6 overflow-hidden">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-[400px] object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A5F]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="#"
                    className="w-10 h-10 bg-[#D4AF37] flex items-center justify-center text-[#1E3A5F] hover:bg-white transition-colors"
                    aria-label={`Connect with ${leader.name} on LinkedIn`}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-serif text-2xl text-[#1E3A5F] mb-1">
                  {leader.name}
                </h3>
                <p className="text-[#D4AF37] font-medium mb-4">{leader.role}</p>
                <p className="text-[#4A5568] text-sm leading-relaxed">
                  {leader.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
