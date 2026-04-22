"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Mail } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Who We Are" },
  { href: "/services", label: "Services" },
  { href: "/leadership", label: "Leadership" },
  { href: "/why-optimas", label: "Why Optimas" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
            {/* <div className="hidden sm:block">
              <h1 className={`font-serif text-xl font-bold leading-tight ${isScrolled ? 'text-[#1E3A5F]' : 'text-[#F8F6F2]'}`}>
                Optimas Legal
              </h1>
              <p className={`text-xs tracking-wider uppercase ${isScrolled ? 'text-[#4A5568]' : 'text-[#F8F6F2]/80'}`}>
                Partners
              </p>
            </div> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-[#D4AF37] transition-colors font-medium text-sm tracking-wide ${isScrolled ? 'text-[#1E3A5F]' : 'text-[#F8F6F2]'}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="mailto:info@optimaslegal.com"
              className={`flex items-center gap-2 hover:text-[#D4AF37] transition-colors ${isScrolled ? 'text-[#1E3A5F]' : 'text-[#F8F6F2]'}`}
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
            className={`lg:hidden p-2 ${isScrolled ? 'text-[#1E3A5F]' : 'text-[#F8F6F2]'}`}
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
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[#1E3A5F] hover:text-[#D4AF37] transition-colors font-medium py-2 border-b border-[#D1CCC4]/50"
                >
                  {link.label}
                </Link>
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
