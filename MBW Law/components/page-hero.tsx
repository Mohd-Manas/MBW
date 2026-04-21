"use client"

import { motion } from "framer-motion"

interface PageHeroProps {
  title: string
  subtitle?: string
  breadcrumb?: string
}

export function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative bg-[#1E3A5F] pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {breadcrumb && (
            <span className="inline-block text-[#D4AF37] text-sm tracking-[0.3em] uppercase font-medium mb-4">
              {breadcrumb}
            </span>
          )}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-[#F8F6F2]/80 max-w-2xl mx-auto text-lg leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
      
      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
    </section>
  )
}
