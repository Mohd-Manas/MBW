"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { MessageCircle, Phone } from "lucide-react"

export function FloatingButtons() {
  return (
    <>
      {/* WhatsApp Floating Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        className="fixed bottom-6 left-6 z-50"
      >
        <Link
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] hover:bg-[#1EBE5A] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 text-white" />
          <span className="absolute left-full ml-3 bg-[#1E3A5F] text-white text-sm px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Chat with us
          </span>
        </Link>
      </motion.div>

      {/* Vertical CTA Button on Right */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
      >
        <Link
          href="#contact"
          className="flex items-center gap-2 bg-[#D4AF37] hover:bg-[#B8972E] text-[#1E3A5F] px-3 py-6 font-medium transition-all duration-300 shadow-lg"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          <Phone className="w-4 h-4 rotate-90" />
          Free Consultation
        </Link>
      </motion.div>
    </>
  )
}
