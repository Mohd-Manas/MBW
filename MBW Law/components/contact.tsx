"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Send, MapPin, Mail, Globe } from "lucide-react"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you for your message. We will contact you shortly!")
    setFormData({ name: "", email: "", phone: "", service: "", message: "" })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#D4AF37] text-sm tracking-[0.3em] uppercase font-medium mb-4">
            Contact
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1E3A5F] mb-4">
            Get In Touch
          </h2>
          <p className="text-[#4A5568] max-w-2xl mx-auto leading-relaxed">
            Ready to discuss your legal needs? Contact us today and let our 
            experienced team provide the strategic guidance you need.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#1E3A5F] mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-[#D1CCC4] focus:border-[#D4AF37] outline-none transition-colors bg-transparent text-[#1E3A5F]"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#1E3A5F] mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-[#D1CCC4] focus:border-[#D4AF37] outline-none transition-colors bg-transparent text-[#1E3A5F]"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-[#1E3A5F] mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-[#D1CCC4] focus:border-[#D4AF37] outline-none transition-colors bg-transparent text-[#1E3A5F]"
                    placeholder="+971 XX XXX XXXX"
                  />
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-[#1E3A5F] mb-2"
                  >
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-[#D1CCC4] focus:border-[#D4AF37] outline-none transition-colors bg-transparent text-[#1E3A5F]"
                  >
                    <option value="">Select a service</option>
                    <option value="corporate">Corporate & Commercial</option>
                    <option value="dispute">Dispute Resolution</option>
                    <option value="finance">Finance & Banking</option>
                    <option value="retainer">Retainer Services</option>
                    <option value="arbitration">Arbitration</option>
                    <option value="employment">Employment Law</option>
                    <option value="ip">Intellectual Property</option>
                    <option value="maritime">Maritime Law</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#1E3A5F] mb-2"
                >
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[#D1CCC4] focus:border-[#D4AF37] outline-none transition-colors bg-transparent text-[#1E3A5F] resize-none"
                  placeholder="Tell us about your legal needs..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#B8972E] text-[#1E3A5F] px-8 py-4 font-medium transition-all duration-300 w-full sm:w-auto"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-1 gap-4">
              <div className="bg-[#F8F6F2] p-6 flex gap-4">
                <div className="w-12 h-12 bg-[#D4AF37] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#1E3A5F]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1E3A5F] mb-1">Location</h4>
                  <p className="text-[#4A5568] text-sm">
                    Dubai, United Arab Emirates
                  </p>
                </div>
              </div>
              <div className="bg-[#F8F6F2] p-6 flex gap-4">
                <div className="w-12 h-12 bg-[#D4AF37] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#1E3A5F]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1E3A5F] mb-1">Email</h4>
                  <a 
                    href="mailto:info@optimaslegal.com"
                    className="text-[#4A5568] text-sm hover:text-[#D4AF37] transition-colors"
                  >
                    info@optimaslegal.com
                  </a>
                </div>
              </div>
              <div className="bg-[#F8F6F2] p-6 flex gap-4">
                <div className="w-12 h-12 bg-[#D4AF37] flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-[#1E3A5F]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1E3A5F] mb-1">Website</h4>
                  <a 
                    href="https://www.optimaslegal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4A5568] text-sm hover:text-[#D4AF37] transition-colors"
                  >
                    www.optimaslegal.com
                  </a>
                </div>
              </div>
            </div>

            {/* Map Embed - Dubai */}
            <div className="h-[300px] bg-[#EBE8E2] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.3011806427!2d54.89784349069942!3d25.076280446382067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location - Dubai, UAE"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
