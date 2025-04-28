import { FC, useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown, FiChevronUp, FiPhone } from "react-icons/fi";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const OurExpertise: FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string>("");

  const expertiseOptions = {
    kickstart: ["Buying and Selling", "Research and Advisory", "Leasing and Profitability"],
    seasoned: ["Property Management", "Investment Strategy", "Market Analysis"],
    accelerate: ["Portfolio Growth", "Exit Strategies", "Value Enhancement"]
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleServiceSelect = (service: string) => {
    setSelectedService(service);
  };

  return (
    <div className="bg-[#f8f8f6] text-[#1a1a1a] min-h-screen font-sans">
      <Navbar />

      {/* Enhanced Hero Banner */}
      <motion.header 
        className="bg-[#0046b8] relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src="https://storage.googleapis.com/a1aa/image/c216c4cb-9111-4589-a0e1-7d118768b1ed.jpg"
          alt="Blueprint style house architectural drawing in blue"
          className="w-full h-[180px] md:h-[220px] object-cover absolute top-0 left-0 opacity-20"
        />
        <div className="relative max-w-[1200px] mx-auto px-6 md:px-8 py-12 md:py-16">
          <motion.h1 
            className="text-white font-bold text-3xl md:text-4xl leading-tight"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            EXPERTISE
          </motion.h1>
          <motion.p 
            className="text-white text-sm md:text-base mt-2 max-w-[600px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Leverage our comprehensive real estate expertise to maximize your property investments
          </motion.p>
        </div>
      </motion.header>

      <main className="max-w-[1200px] mx-auto px-4 md:px-6 py-8 md:py-12 flex flex-col lg:flex-row gap-8">
        {/* Enhanced Sidebar */}
        <aside className="w-full lg:w-[320px] space-y-6">
          {/* Expertise Selection */}
          <motion.section 
            className="bg-white rounded-lg p-6 border border-[#e0e0e0] shadow-sm"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-[#0046b8] font-semibold text-base mb-4 pb-2 border-b border-[#e0e0e0]">
              Our Expertise
            </h2>

            {Object.entries(expertiseOptions).map(([key, options]) => (
              <div key={key} className="mb-4">
                <button
                  onClick={() => toggleDropdown(key)}
                  className="w-full flex justify-between items-center text-[#333] font-semibold text-sm py-3 px-4 bg-[#f5f5f5] hover:bg-[#eaeaea] rounded-lg transition-colors"
                >
                  <span className="capitalize">{key}</span>
                  {activeDropdown === key ? <FiChevronUp /> : <FiChevronDown />}
                </button>

                {activeDropdown === key && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="mt-2 space-y-2 pl-2"
                  >
                    {options.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleServiceSelect(option)}
                        className={`w-full text-left text-sm py-2 px-4 rounded-md transition-colors ${selectedService === option ? 'bg-[#0046b8] text-white' : 'bg-white text-[#666] hover:bg-[#f0f0f0]'}`}
                      >
                        {option}
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </motion.section>

          {/* Enhanced Call to Action */}
          <motion.section
            className="bg-[#0046b8] rounded-lg p-8 text-center text-white"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="border-2 border-white rounded-full p-4 inline-flex mb-4">
              <FiPhone className="text-xl" />
            </div>
            <h3 className="font-bold text-lg mb-2">Need Help? Call Here</h3>
            <p className="font-semibold text-sm mb-4">+123 456 7890</p>
            <button className="bg-white text-[#0046b8] font-semibold py-2 px-6 rounded-full hover:bg-[#e6e6e1] transition-colors">
              Contact Us
            </button>
          </motion.section>
        </aside>

        {/* Enhanced Main Content */}
        <motion.section 
          className="flex-1 bg-white border border-[#e0e0e0] rounded-lg p-6 md:p-8 shadow-sm"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {/* Sell Property Section */}
          <motion.article 
            className="mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h2 className="font-bold text-xl text-[#0046b8] mb-4 pb-2 border-b border-[#e0e0e0]">
              Sell Your Property
            </h2>
            <p className="text-[#333] text-base mb-6 leading-relaxed">
              With PRIME's full-fledged expertise, we help investors make impactful decisions that open their doors to profitable
              opportunities and potentially high returns. Our team crafts acquisition strategies rooted in deep analytics,
              innovative and proactive thinking to maximize your property's value.
            </p>
            
            <h3 className="font-semibold text-lg text-[#0046b8] mb-3">What to expect from us:</h3>
            <ul className="space-y-3 mb-8">
              {[
                "Help you make informed decisions in acquiring or disposing a property",
                "Due diligence on the authenticity and ownership of the property",
                "Maximize the profitability of your property or investment",
                "Complete transparency throughout the transaction process",
                "Document preparation and end-to-end process facilitation"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#0046b8] mr-2">•</span>
                  <span className="text-[#333] text-base">{item}</span>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative group overflow-hidden rounded-lg">
                <img
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  src="https://storage.googleapis.com/a1aa/image/6cc1713c-4f96-41e4-a6d1-ec5ac11c28ef.jpg"
                  alt="Modern house with large windows and a sold sign in front yard"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-white text-[#0046b8] font-semibold py-2 px-6 rounded-full">
                    View Details
                  </button>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-lg">
                <img
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  src="https://storage.googleapis.com/a1aa/image/a0ed2abe-dc10-4fa5-ee0a-bf90db0e1408.jpg"
                  alt="Modern house with a for sale sign in front yard"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-white text-[#0046b8] font-semibold py-2 px-6 rounded-full">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Buy Property Section */}
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h2 className="font-bold text-xl text-[#0046b8] mb-4 pb-2 border-b border-[#e0e0e0]">
              Buy a Property
            </h2>
            <p className="text-[#333] text-base mb-6 leading-relaxed">
              Our comprehensive buying services ensure you find the perfect property that meets your investment goals.
              We provide market insights, valuation expertise, and negotiation support to secure the best deals.
            </p>
            
            <h3 className="font-semibold text-lg text-[#0046b8] mb-3">What to expect from us:</h3>
            <ul className="space-y-3">
              {[
                "Personalized property search based on your criteria",
                "Comprehensive market analysis and valuation",
                "Negotiation support to secure the best price",
                "Due diligence and legal documentation review",
                "Post-purchase support and property management options"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#0046b8] mr-2">•</span>
                  <span className="text-[#333] text-base">{item}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

export default OurExpertise;