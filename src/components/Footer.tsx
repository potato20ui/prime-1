// src/components/Footer.tsx
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-[#1a2a44] text-[#cbd5e1] px-4 md:px-8 lg:px-12 py-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">

                {/* Left Section */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    <div className="flex items-center">
                        <Link
                            to="/"
                            className="focus:outline-none"
                            onClick={() => window.scrollTo(0, 0)}
                        >
                            <motion.img
                                src="/prime-logo.png"
                                alt="PRIME Philippines logo"
                                className="w-48 md:w-56 h-auto object-contain hover:opacity-90 transition-opacity brightness-0 invert"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            />
                        </Link>
                    </div>
                    <address className="not-italic space-y-4 text-sm leading-relaxed">
                        <p className="flex items-start gap-3">
                            <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                            3/F Main CreatWork Ben-Lor IT Center, Diliman, Quezon City, Metro Manila
                        </p>
                        <p className="flex items-center gap-3">
                            <Smartphone size={16} className="flex-shrink-0" />
                            (+63) 917 555 8222
                        </p>
                        <p className="flex items-center gap-3">
                            <Phone size={16} className="flex-shrink-0" />
                            (+632) 8442 8888
                        </p>
                        <p className="flex items-center gap-3">
                            <Mail size={16} className="flex-shrink-0" />
                            <a
                                href="mailto:inquiry@primephilippines.com"
                                className="underline hover:text-white transition-colors"
                            >
                                inquiry@primephilippines.com
                            </a>
                        </p>
                    </address>
                </motion.div>

                {/* Middle Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                        PRIME <span className="text-[#fbbf24]">RADAR</span>
                    </h2>
                    <p className="text-base text-white leading-relaxed max-w-md">
                        Get the latest real estate insights, events, and news from our newsletter.
                    </p>

                    <form className="flex rounded-lg overflow-hidden bg-[#f0f3d9] w-full">
                        <Input
                            type="email"
                            placeholder="Email address"
                            className="flex-grow px-4 py-3 text-[#2a3a6f] text-base font-normal outline-none border-none focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                        <Button
                            type="submit"
                            className="bg-[#2a3a6f] text-[#f0f3d9] font-bold uppercase text-base px-6 py-3 hover:bg-[#1a2a44] transition rounded-none"
                        >
                            Subscribe
                        </Button>
                    </form>

                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-4 gap-4">
                        <div className="flex items-center gap-4">
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
                                    className="text-xl text-white hover:text-[#fbbf24] transition"
                                >
                                    <i className={`fab fa-${social.icon}`}></i>
                                </a>
                            ))}
                        </div>

                        <Link
                            to="/consultation"
                            className="text-md font-medium text-white underline hover:no-underline"
                        >
                            Book a Consultation
                        </Link>
                    </div>
                </motion.div>

                {/* Right Section */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    <h3 className="text-[#fbbf24] font-extrabold text-md">
                        NAVIGATION
                    </h3>
                    <div className="grid grid-cols-2 gap-2 text-md">
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
                                className="underline hover:text-white transition block pl-2"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </motion.div>

            </div>

            {/* Bottom Section */}
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="max-w-7xl mx-auto border-t border-white/10 mt-12 pt-6 text-center text-xs md:text-sm text-white/50"
            >
                © 2013-2025 PRIME Philippines. All rights reserved.
            </motion.div>
        </footer>
    );
}
