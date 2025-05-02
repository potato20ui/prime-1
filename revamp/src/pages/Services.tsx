import { useState } from "react";
import { PhoneCall, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // NEW: for animation
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState<number>(1); // Default to Landlord Representation

  const serviceList = [
    { id: 1, name: "Landlord Representation" },
    { id: 2, name: "Tenant Representation" },
    { id: 3, name: "Research & Consultancy" },
    { id: 4, name: "Investment & Acquisition" },
    { id: 5, name: "Project Management" },
    { id: 6, name: "AG Services" },
  ];

  const contentMap: Record<number, React.ReactNode> = {
    1: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac risus ac libero tincidunt auctor. Proin interdum, nulla a vehicula elementum, nisi eros tincidunt purus, a posuere justo felis ac justo.</p>,
    2: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac risus ac libero tincidunt auctor. Proin interdum, nulla a vehicula elementum, nisi eros tincidunt purus, a posuere justo felis ac justo.</p>,
    3: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac risus ac libero tincidunt auctor. Proin interdum, nulla a vehicula elementum, nisi eros tincidunt purus, a posuere justo felis ac justo.</p>,
    4: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac risus ac libero tincidunt auctor. Proin interdum, nulla a vehicula elementum, nisi eros tincidunt purus, a posuere justo felis ac justo.</p>,
    5: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac risus ac libero tincidunt auctor. Proin interdum, nulla a vehicula elementum, nisi eros tincidunt purus, a posuere justo felis ac justo.</p>,
    6: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac risus ac libero tincidunt auctor. Proin interdum, nulla a vehicula elementum, nisi eros tincidunt purus, a posuere justo felis ac justo.</p>,
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Navbar />

      {/* Banner Section */}
      <section className="relative mb-10">
        <div
          className="w-full h-[503px] rounded-lg overflow-hidden relative group"
          style={{
            backgroundImage:
              "",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Softer Overlay */}
          <div className="absolute inset-0 bg-[#0E406F]/40"></div>

          {/* Centered Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[36pt] sm:text-[48pt] font-bold"
            >
              SERVICES
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="inline-flex items-center px-6 py-3 border-2 border-white rounded-full text-lg font-semibold mt-4"
            >
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="font-semibold">Services</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-6 lg:px-12 py-16 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Sidebar Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-lg p-6 max-h-[600px] overflow-y-auto"
          >
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Services</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 via-red-500 to-blue-800 rounded-full mb-6" />
            <div className="space-y-3">
              {serviceList.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`flex items-center justify-between w-full py-3 px-4 rounded-lg transition-all duration-300 ${
                    selectedService === service.id
                      ? "bg-blue-100 text-blue-700 font-semibold shadow"
                      : "hover:bg-blue-100 text-gray-700"
                  }`}
                >
                  <span>{service.name}</span>
                  <ArrowRight size={18} />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Main Content Area */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="lg:col-span-2"
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              {serviceList.find((s) => s.id === selectedService)?.name}
            </h2>
            <div className="text-gray-700 text-justify leading-relaxed space-y-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedService}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.6 }} // Slightly longer transition for smoother effect
                >
                  {contentMap[selectedService ?? 1]}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Help Section */}
<motion.div
  initial={{ scale: 0.9, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
  className="bg-[#0b2c53] text-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center w-full sm:w-[90%] md:w-[420px] lg:w-[420px] mx-auto min-h-[400px] sm:min-h-[450px] lg:min-h-[500px]"
>
  <div className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-4">
    <PhoneCall size={32} color="white" />
  </div>
  <p className="text-2xl sm:text-xl md:text-2xl font-bold mb-2">Need Help?</p>
  <p className="text-lg sm:text-base md:text-lg font-semibold mb-6">Call Here</p>
  <div className="text-sm sm:text-xs md:text-sm space-y-2 text-center">
    <p>
      <strong>Phone:</strong>{" "}
      <a
        href="tel:+63288881000"
        className="text-blue-300 hover:underline"
      >
        +63 2 8888 1000
      </a>
    </p>
    <p>
      <strong>Mobile:</strong>{" "}
      <a
        href="tel:+639171234567"
        className="text-blue-300 hover:underline"
      >
        +63 917 123 4567
      </a>
    </p>
  </div>
</motion.div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
