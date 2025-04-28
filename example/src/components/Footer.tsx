// src/components/footer.tsx

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone, Smartphone } from "lucide-react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#1a2a44] text-[#cbd5e1] px-6 py-20 font-[Gotham Book]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 sm:gap-20 lg:gap-32">

        {/* Left Section - Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8 text-[12pt]"
        >
          <Link to="/" className="focus:outline-none" onClick={() => window.scrollTo(0, 0)}>
            <motion.img
              src="/prime-logo.png"
              alt="PRIME Philippines logo"
              className="w-56 h-auto object-contain hover:opacity-90 transition-opacity brightness-0 invert"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            />
          </Link>

          <address className="not-italic space-y-4 leading-relaxed mt-8 bg-[#1a2a44] text-[#cbd5e1]"> 
            <p className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 flex-shrink-0" />
              3/F Main CreatWork Ben-Lor IT Center, Diliman, Quezon City, Metro Manila
            </p>
            <p className="flex items-center gap-3">
              <Smartphone size={18} />
              (+63) 917 555 8222
            </p>
            <p className="flex items-center gap-3">
              <Phone size={18} />
              (+632) 8442 8888
            </p>
            <p className="flex items-center gap-3">
              <Mail size={18} />
              <a href="mailto:inquiry@primephilippines.com" className="underline hover:text-[#fbbf24] transition-colors">
                inquiry@primephilippines.com
              </a>
            </p>
          </address>
        </motion.div>

        {/* Middle Section - Newsletter */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-[12pt]"
        >
          <h2 className="text-[32pt] gotham-bold text-[#fbbf24]">
            PRIME <span className="text-[#fbbf24]">RADAR</span>
          </h2>
          <p className="leading-relaxed max-w-md">
            Get the latest real estate insights, events and news from our newsletter
          </p>

          <form className="flex flex-col sm:flex-row w-full rounded-xl overflow-hidden bg-[#f0f3d9] shadow-lg ring-1 ring-[#e2e8f0]">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-6 py-4 text-[#2a3a6f] text-[12pt] font-medium outline-none border-none shadow-none focus-visible:ring-2 focus-visible:ring-[#2a3a6f] transition-all w-full sm:w-auto"
            />
            <Button
              type="submit"
              className="bg-[#2a3a6f] text-[#f0f3d9] font-bold px-6 py-4 uppercase tracking-wide text-[12pt] hover:bg-[#1a2a44]"
            >
              Subscribe
            </Button>
          </form>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-6 gap-4">
            <div className="flex items-center gap-5 text-[14pt]">
              {[
                { icon: "facebook-f", url: "https://facebook.com/primephilippines" },
                { icon: "linkedin-in", url: "https://linkedin.com/company/primephilippines" },
                { icon: "youtube", url: "https://youtube.com/primephilippines" },
                { icon: "instagram", url: "https://instagram.com/primephilippines" },
                { icon: "tiktok", url: "https://tiktok.com/@primephilippines" }
              ].map((social) => (
                <a
                  key={social.icon}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.icon}
                  className="hover:text-[#fbbf24] transition-colors"
                >
                  <i className={`fab fa-${social.icon}`}></i>
                </a>
              ))}
            </div>

            <a
              href="/consultation"
              className="underline hover:text-[#fbbf24] text-[12pt]"
            >
              Book a Consultation
            </a>
          </div>
        </motion.div>

        {/* Right Section - Navigation */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-[12pt]"
        >
          <h3 className="text-[#fbbf24] gotham-bold text-[14pt]">
            NAVIGATION
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: "Expertise", path: "/expertise" },
              { name: "Events", path: "/events" },
              { name: "Services", path: "/services" },
              { name: "Careers", path: "/careers" },
              { name: "Properties", path: "/properties" },
              { name: "Press Room", path: "/press" },
              { name: "About", path: "/about" },
              { name: "Contact", path: "/contact" },
            ].map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="underline hover:text-[#fbbf24] transition-colors block"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Border */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-7xl mx-auto border-t border-white/10 mt-16 pt-6 text-center text-[11pt] text-white/60"
      >
        © 2013 - 2025 PRIME Philippines. All rights reserved.
      </motion.div>
    </footer>
  )
}
