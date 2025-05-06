import { useState } from "react";
import { PhoneCall, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";

const ExpertisePage = () => {
  const [selectedService, setSelectedService] = useState<number | null>(1); // Default to Buying & Selling
  const [showDropdown, setShowDropdown] = useState(false);

  const contentMap: Record<number, React.ReactNode> = {
    2: (
      <p>
        We provide in-depth research and advisory services for smarter real
        estate decisions.
      </p>
    ),
    3: (
      <p>
        Maximize leasing potential and profitability with our expert insights
        and strategies.
      </p>
    ),
    4: (
      <p>
        Leverage our seasoned experience to navigate complex real estate
        challenges effortlessly.
      </p>
    ),
    5: (
      <p>
        Accelerate your investments with innovative approaches and market-driven
        solutions.
      </p>
    ),
    1: (
      <div className="space-y-8">
        {/* Selling Section */}
        <div>
          <h3 className="text-xl font-semibold text-blue-900">Selling</h3>
          <div className="flex space-x-4">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="flex-1 bg-gray-200 rounded-md overflow-hidden"
              >
                <img
                  src={`https://via.placeholder.com/600x400?text=Selling+Image+${
                    index + 1
                  }`}
                  alt={`Selling Image ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
        </div>

        {/* Buying Section */}
        <div>
          <h3 className="text-xl font-semibold text-blue-900">Buying</h3>
          <div className="flex space-x-4">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="flex-1 bg-gray-200 rounded-md overflow-hidden"
              >
                <img
                  src={`https://via.placeholder.com/600x400?text=Buying+Image+${
                    index + 1
                  }`}
                  alt={`Buying Image ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
        </div>
      </div>
    ),
  };

  const serviceList = [
    { id: 1, name: "Buying & Selling" },
    { id: 2, name: "Research & Advisory" },
    { id: 3, name: "Leasing and Profitability" },
    { id: 4, name: "Seasoned" },
    { id: 5, name: "Accelerate" },
  ];

  const handleDropdownClick = () => setShowDropdown(!showDropdown);

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Navbar />

      {/* Banner Section */}
      <section className="relative mb-10">
        <div
          className="w-full h-[500px] rounded-lg overflow-hidden relative group"
          style={{
            backgroundImage: `url(/Contact.png)`, // Background image for the banner
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-PRIMEblue opacity-50"></div>{" "}
          {/* Updated to match Careers color */}
          {/* Centered Title and Breadcrumb with animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4"
          >
            <h1 className="text-[36pt] sm:text-[48pt] font-bold uppercase">
              Expertise
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="inline-flex items-center px-[40px] py-[12px] border-2 border-white rounded-full text-lg font-semibold mt-4"
            >
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="font-semibold">Expertise</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-6 lg:px-12 py-16 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Expertise Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col bg-white shadow-lg p-8 rounded-xl"
            style={{ width: "100%", maxWidth: "450px", height: "auto" }}
          >
            <div className="text-left mb-8">
              <h2 className="text-2xl font-bold text-PRIMEblue">Expertise</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-PRIMEyellow via-PRIMEred to-PRIMEblue rounded-full mt-2"></div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col space-y-4">
              <button
                onClick={handleDropdownClick}
                className={`flex items-center justify-between w-full py-3 px-4 rounded-md transition-all duration-300 ${
                  showDropdown
                    ? "bg-blue-100 text-PRIMEblue font-semibold"
                    : "hover:bg-blue-100 text-PRIMEgray"
                }`}
              >
                <span>Kickstart</span>
                <ArrowRight size={18} className="text-PRIMEblue" />
              </button>

              <AnimatePresence>
                {showDropdown && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="flex flex-col space-y-4 pl-4"
                  >
                    {serviceList.slice(0, 3).map((service) => (
                      <button
                        key={service.id}
                        onClick={() => setSelectedService(service.id)}
                        className={`flex justify-between items-center py-2 px-4 text-PRIMEgray hover:bg-blue-100 rounded-md ${
                          selectedService === service.id ? "bg-blue-100" : ""
                        }`}
                      >
                        <span>{service.name}</span>
                        <ArrowRight size={18} className="text-PRIMEgray" />
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {serviceList.slice(3).map((service) => (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`flex items-center justify-between w-full py-3 px-4 rounded-md hover:bg-blue-100 text-PRIMEgray transition-all duration-300 ${
                    selectedService === service.id ? "bg-blue-100" : ""
                  }`}
                >
                  <span>{service.name}</span>
                  <ArrowRight size={18} className="text-PRIMEblue" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Main Service Content */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {selectedService === 1 ? (
                <motion.div
                  key="buyingSelling"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="flex space-x-4"
                  style={{ width: "100%", height: "auto" }}
                >
                  <div className="flex-1 PRIMElightgray rounded-md overflow-hidden">
                    <img
                      src="https://via.placeholder.com/600x400?text=Buying+Selling+Image+1"
                      alt="Buying & Selling"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1 bg-PRIMElightgray rounded-md overflow-hidden">
                    <img
                      src="https://via.placeholder.com/600x400?text=Buying+Selling+Image+2"
                      alt="Buying & Selling"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1 bg-PRIMElightgray rounded-md overflow-hidden">
                    <img
                      src="https://via.placeholder.com/600x400?text=Buying+Selling+Image+3"
                      alt="Buying & Selling"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="serviceContent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-PRIMEgray leading-relaxed"
                >
                  <h2 className="text-3xl font-bold text-PRIMEblue mb-4">
                    {serviceList.find((s) => s.id === selectedService)?.name ||
                      "Service Not Found"}
                  </h2>
                  {contentMap[selectedService || 0] || (
                    <p>Content is currently unavailable.</p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Help Section */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
            className="bg-PRIMEblue text-PRIMEwhite rounded-lg shadow-lg p-6 flex flex-col items-center justify-center w-full lg:w-[420px] mx-auto min-h-[500px]"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-PRIMEblue border border-PRIMEwhite rounded-full mb-4">
              <PhoneCall size={32} color="white" />
            </div>
            <p className="text-2xl font-bold mb-2">Need Help?</p>
            <p className="text-lg font-semibold mb-6">Call Here</p>
            <div className="text-sm space-y-2 text-center">
              <p>
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:+63288881000"
                  className="text-PRIMEwhite hover:underline"
                >
                  +63 2 8888 1000
                </a>
              </p>
              <p>
                <strong>Mobile:</strong>{" "}
                <a
                  href="tel:+639171234567"
                  className="text-PRIMEwhite hover:underline"
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

export default ExpertisePage;
