"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Target, Shield, Award } from "lucide-react"
import Link from "next/link"

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "Meticulous attention to detail in every legal matter",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Highest standards of ethics and client protection",
  },
  {
    icon: Award,
    title: "Results",
    description: "Outcome-focused approach to every engagement",
  },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop"
                alt="Professional legal advisory team"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              {/* Decorative Border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#D4AF37] -z-10" />
            </div>
            
            {/* Badge */}
            <div className="absolute -bottom-6 -left-6 bg-[#D4AF37] text-[#1E3A5F] p-6 shadow-xl">
              <div className="font-serif text-lg font-bold">UAE &</div>
              <div className="text-sm font-medium">International Markets</div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="inline-block text-[#D4AF37] text-sm tracking-[0.3em] uppercase font-medium mb-4">
              Who We Are
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1E3A5F] mb-6 leading-tight">
              Precision. Integrity. Results.
            </h2>
            <p className="text-[#4A5568] mb-6 leading-relaxed">
              Optimas Legal Partners is a boutique advisory firm serving corporates, 
              financial institutions, and high-net-worth individuals across the UAE 
              and beyond.
            </p>
            <p className="text-[#4A5568] mb-8 leading-relaxed">
              We combine deep legal expertise with commercial insight, delivering 
              pragmatic, compliant, and results-driven solutions. Our approach ensures 
              that every engagement receives senior-level involvement and tailored advice.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-14 h-14 bg-[#F8F6F2] flex items-center justify-center mx-auto mb-3">
                    <value.icon className="w-7 h-7 text-[#D4AF37]" />
                  </div>
                  <h4 className="font-serif font-semibold text-[#1E3A5F] text-sm mb-1">
                    {value.title}
                  </h4>
                  <p className="text-xs text-[#4A5568]">{value.description}</p>
                </motion.div>
              ))}
            </div>

            <Link
              href="#contact"
              className="inline-flex border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1E3A5F] px-8 py-3 font-medium transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
