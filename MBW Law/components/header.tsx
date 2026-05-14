"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Mail, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Who We Are" },
  { href: "/services", label: "Services" },
  { href: "/leadership", label: "Leadership" },
  { href: "/why-optimas", label: "Why Optimas" },
  { href: "/contact", label: "Contact" },
]

const serviceLinks = [
  { href: "/services/corporate-commercial", label: "Corporate & Commercial" },
  { href: "/services/dispute-resolution", label: "Dispute Resolution" },
  { href: "/services/finance-banking", label: "Finance & Banking" },
  { href: "/services/retainer-services", label: "Retainer Services" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const navTextClass = isScrolled ? "text-[#1E3A5F]" : "text-[#F8F6F2]"

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F8F6F2]/95 backdrop-blur-sm shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/OptimasLegalLogo_Transparent.png"
              alt="Optimas Legal Logo"
              width={88}
              height={88}
              className="rounded-sm"
              priority
              style={{ filter: !isScrolled ? "brightness(0) invert(1)" : "none" }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.href === "/services" ? (
                /* ── Services dropdown trigger ── */
                <div
                  key={link.href}
                  ref={servicesRef}
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <button
                    onClick={() => setIsServicesOpen((prev) => !prev)}
                    className={`flex items-center gap-1 hover:text-[#D4AF37] transition-colors font-medium text-sm tracking-wide focus:outline-none ${navTextClass}`}
                    aria-expanded={isServicesOpen}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <motion.span
                      animate={{ rotate: isServicesOpen ? 180 : 0 }}
                      transition={{ duration: 0.22, ease: "easeInOut" }}
                      className="inline-flex"
                    >
                      <ChevronDown className="w-3.5 h-3.5" strokeWidth={2.5} />
                    </motion.span>
                  </button>

                  {/* Dropdown panel */}
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="absolute left-1/2 -translate-x-1/2 top-full mt-4 min-w-[260px] max-w-[320px] w-full rounded-2xl border border-[#D1CCC4]/60 bg-white shadow-2xl overflow-hidden"
                      >
                        {/* Subtle top accent bar */}
                        <div className="h-0.5 w-full bg-gradient-to-r from-[#D4AF37]/60 via-[#D4AF37] to-[#D4AF37]/60" />

                        <div className="p-2">
                          {serviceLinks.map((subLink, i) => (
                            <motion.div
                              key={subLink.href}
                              initial={{ opacity: 0, x: -6 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.05, duration: 0.15 }}
                            >
                              <Link
                                href={subLink.href}
                                onClick={() => setIsServicesOpen(false)}
                                className="group flex items-center gap-2 rounded-xl px-4 py-2.5 text-[#1E3A5F] text-sm font-medium hover:bg-[#F8F6F2] transition-colors"
                              >
                                {/* Gold pip on hover */}
                                <span className="w-1 h-1 rounded-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                                {subLink.label}
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`hover:text-[#D4AF37] transition-colors font-medium text-sm tracking-wide ${navTextClass}`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="mailto:info@optimaslegal.com"
              className={`flex items-center gap-2 hover:text-[#D4AF37] transition-colors ${navTextClass}`}
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm font-medium">info@optimaslegal.com</span>
            </Link>
            <Link
              href="#contact"
              className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1E3A5F] px-6 py-2.5 text-sm font-medium transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 ${navTextClass}`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#F8F6F2] border-t border-[#D1CCC4]"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.href}>
                  {link.href === "/services" ? (
                    <>
                      {/* Mobile services accordion trigger */}
                      <button
                        onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                        className="w-full flex items-center justify-between text-[#1E3A5F] hover:text-[#D4AF37] transition-colors font-medium py-2 border-b border-[#D1CCC4]/50"
                      >
                        <span>{link.label}</span>
                        <motion.span
                          animate={{ rotate: isMobileServicesOpen ? 180 : 0 }}
                          transition={{ duration: 0.22, ease: "easeInOut" }}
                          className="inline-flex"
                        >
                          <ChevronDown className="w-4 h-4" strokeWidth={2.5} />
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {isMobileServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-2 space-y-2 pl-4 border-l-2 border-[#D4AF37]/40">
                              {serviceLinks.map((subLink) => (
                                <Link
                                  key={subLink.href}
                                  href={subLink.href}
                                  onClick={() => {
                                    setIsMobileMenuOpen(false)
                                    setIsMobileServicesOpen(false)
                                  }}
                                  className="block text-[#4A5568] hover:text-[#1E3A5F] transition-colors font-medium text-sm py-1"
                                >
                                  {subLink.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-[#1E3A5F] hover:text-[#D4AF37] transition-colors font-medium py-2 border-b border-[#D1CCC4]/50 block"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1E3A5F] px-6 py-3 text-center font-medium transition-all duration-300 mt-2"
              >
                Get In Touch
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}