"use client"

import Link from "next/link"
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  MapPin, 
  Mail, 
  Globe
} from "lucide-react"

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "Who We Are" },
  { href: "#services", label: "Services" },
  { href: "#leadership", label: "Leadership" },
  { href: "#why-optimas", label: "Why Optimas" },
  { href: "#contact", label: "Contact" },
]

const services = [
  "Corporate & Commercial",
  "Dispute Resolution",
  "Finance & Banking",
  "Retainer Services",
  "Arbitration",
  "Employment Law",
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
]

export function Footer() {
  return (
    <footer className="bg-[#1E3A5F] text-[#F8F6F2]">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#D4AF37] rounded-sm flex items-center justify-center">
                <span className="font-serif text-2xl font-bold text-[#1E3A5F]">O</span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold leading-tight">
                  Optimas Legal
                </h3>
                <p className="text-xs text-[#D4AF37] tracking-wider uppercase">
                  Partners
                </p>
              </div>
            </div>
            <p className="text-[#A0AEC0] text-sm leading-relaxed mb-6">
              Boutique legal excellence across the UAE and international markets. 
              Strategic Legal Advisory, Corporate Structuring, and Dispute Resolution.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 border border-[#2D4A6F] hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1E3A5F] flex items-center justify-center transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-[#D4AF37]">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#A0AEC0] hover:text-[#D4AF37] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-[#D4AF37]">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-[#A0AEC0] hover:text-[#D4AF37] transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-[#D4AF37]">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span className="text-[#A0AEC0] text-sm">
                  Dubai, United Arab Emirates
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <Link
                  href="mailto:info@optimaslegal.com"
                  className="text-[#A0AEC0] hover:text-[#D4AF37] transition-colors text-sm"
                >
                  info@optimaslegal.com
                </Link>
              </li>
              <li className="flex gap-3">
                <Globe className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <Link
                  href="https://www.optimaslegal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A0AEC0] hover:text-[#D4AF37] transition-colors text-sm"
                >
                  www.optimaslegal.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#2D4A6F]">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#718096] text-sm text-center md:text-left">
              © {new Date().getFullYear()} Optimas Legal Partners. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-[#718096] hover:text-[#D4AF37] transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-[#718096] hover:text-[#D4AF37] transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
