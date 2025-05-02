import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion"; 
import Navbar from "@/components/Landingpage/Navbar";
import Footer from "@/components/Landingpage/Footer";

const locations = [
  {
    city: "Manila",
    address: "3/F Main GreatWork Ben-Lor IT Center, Diliman, Quezon City, Metro Manila",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.3650576811556!2d121.02148317596924!3d14.63520718585524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b64fd908e0af%3A0xe04536d006e74a08!2sBen-Lor%20Building%2C%20Diliman%2C%20Quezon%20City%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1743565189902!5m2!1sen!2sph"
  },
  {
    city: "Davao",
    address: "Fourth Floor, Topaz Tower, Damosa I.T. Park, J.P. Laurel Avenue, Lanang, Davao City, Davao Del Sur, Philippines 8000",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.1969547567414!2d125.63195837588282!3d7.103158442900192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f96de3e1b00bc9%3A0xd46f7de049fcf8b1!2sHQ%20-%20Davao%2C%20Topaz%20Tower%20Centre!5e0!3m2!1sen!2sph!4v1745892524893!5m2!1sen!2sph"
  },
  {
    city: "Cebu",
    address: "Fifth Floor, Park Centrale, Cebu I.T. Park, Jose Maria del Mar Street, Cebu City 6000 Cebu",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.1624143126533!2d123.90441707591245!3d10.328884189793989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a999a34d394517%3A0x24cbdc089dff263d!2sRegus%20-%20Cebu%2C%20Park%20Centrale!5e0!3m2!1sen!2sph!4v1745892660887!5m2!1sen!2sph"
  }
];

export default function Contact() {
  const [activeLocation, setActiveLocation] = useState("Manila");
  const [isHovered, setIsHovered] = useState({
    email: false,
    phone: false,
    address: false,
  });

  const current = locations.find((loc) => loc.city === activeLocation);

  return (
    <div className="bg-[#f5f5f5] min-h-screen text-[#003366]">
      <Navbar />
      <main className="w-full mx-auto">

        {/* Banner Section */}
        <section className="relative mb-10">
          <div
            className="w-full h-[500px] rounded-lg overflow-hidden relative group"
            style={{ backgroundImage: 'url(/Contact.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#0E406F]/30 transition duration-300"></div>

            {/* Centered Title and Breadcrumb with animation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4"
            >
              <h1 className="text-[36pt] sm:text-[48pt] font-bold">CONTACT US</h1>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="inline-flex items-center px-6 py-3 border-2 border-white rounded-full text-lg font-semibold mt-4"
              >
                <Link to="/" className="hover:underline">Home</Link>
                <span className="mx-2">/</span>
                <span className="font-semibold">Contact</span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="mb-14 max-w-[1400px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-[24pt] font-bold text-center mb-12"
          >
            Get In Touch
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: <Mail />,
                title: "Email Address",
                contents: [
                  { text: "inquiry@primephilippines.com", href: "mailto:inquiry@primephilippines.com" },
                  { text: "careers@primephilippines.com", href: "mailto:careers@primephilippines.com" }
                ] as { text: string; href: string }[],
                hoverKey: 'email'
              },
              {
                icon: <Phone />,
                title: "Phone Number",
                contents: [
                  { text: "+632 8442 8888", href: "tel:+63284428888" },
                  { text: "+632 7100 8554", href: "tel:+63271008554" }
                ] as { text: string; href: string }[],
                hoverKey: 'phone'
              },
              {
                icon: <MapPin />,
                title: "Main Office",
                contents: [
                  { text: current?.address }
                ] as { text: string | undefined; href?: string }[],
                hoverKey: 'address'
              }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card
                  className={`transition-all duration-300 ${isHovered[card.hoverKey as keyof typeof isHovered] ? "transform shadow-lg" : "shadow-md"}`}
                  onMouseEnter={() => setIsHovered({ ...isHovered, [card.hoverKey]: true })}
                  onMouseLeave={() => setIsHovered({ ...isHovered, [card.hoverKey]: false })}
                >
                  <CardContent className="p-6 text-center text-[11pt]">
                    <div className="bg-[#003366]/10 p-4 rounded-full inline-block mb-4">
                      {card.icon}
                    </div>
                    <h3 className="font-semibold mb-3 text-[14pt]">{card.title}</h3>
                    <div className="space-y-2">
                      {card.contents.map((item, index) => (
                        item.href ? (
                          <a
                            key={index}
                            href={item.href}
                            className="block hover:text-[#003366] hover:underline transition-colors"
                          >
                            {item.text}
                          </a>
                        ) : (
                          <p key={index}>{item.text}</p>
                        )
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Office Locations */}
        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sm:p-8 max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col lg:flex-row gap-8"
          >
            {/* Location Selector */}
            <div className="lg:w-1/3">
              <h3 className="text-[20pt] font-bold mb-6">Our Offices</h3>
              <ul className="space-y-6 text-[12pt]">
                {locations.map((location) => (
                  <li key={location.city}>
                    <button
                      onClick={() => setActiveLocation(location.city)}
                      className={`w-full text-left p-6 rounded-lg transition-all ${
                        activeLocation === location.city
                          ? "bg-[#003366] text-white shadow-md"
                          : "bg-white border border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span className="font-medium">{location.city}</span>
                        </div>
                        <span className={`text-xs px-4 py-2 rounded-full ${
                          activeLocation === location.city
                            ? "bg-white text-[#003366]"
                            : "bg-[#003366] text-white"
                        }`}>
                          {activeLocation === location.city ? "Viewing" : "View"}
                        </span>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Map Container */}
            <div className="lg:w-2/3">
              <motion.div
                key={current?.city} // Animate when city changes
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="relative h-[350px] sm:h-[450px] w-full rounded-lg overflow-hidden shadow-md border border-gray-200"
              >
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  src={current?.map}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${current?.city} Office Location`}
                  className="absolute inset-0"
                ></iframe>
                <div className="absolute bottom-4 left-4 bg-white px-3 py-2 rounded-md shadow-sm max-w-[80%]">
                  <p className="font-medium text-[11pt] truncate">{current?.city} Office</p>
                </div>
              </motion.div>

              <div className="mt-4 text-center">
                <a
                  href={current?.map.replace('embed', 'search')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[11pt] text-[#003366] hover:underline"
                >
                  <MapPin className="w-4 h-4 mr-1" />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </motion.div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
