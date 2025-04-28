import { useState } from "react";
import { FaCheck, FaInfoCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const highlights = [
  {
    title: "Expert Local Knowledge",
    description: "Extensive experience and insights into the perfect local market.",
  },
  {
    title: "Personalized Service",
    description: "Customized solutions for a smooth, tailored experience.",
  },
  {
    title: "Proven Track Record",
    description: "A history of 7000+ successful projects and satisfied clients.",
  },
];

const steps = [
  {
    title: "Find Your Ideal Commercial Space",
    description:
      "Browse our extensive commercial listings, filter by location, price, and features to find the perfect workspace for your business.",
  },
  {
    title: "Schedule a Viewing",
    description:
      "Coordinate with our experts to book a convenient time and tour the space.",
  },
  {
    title: "Secure Your Deal",
    description:
      "Make an offer or apply for financing through our website, and let our experts guide you.",
  },
];

export default function AboutSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#E6F0FF] py-20 px-6 sm:px-10 md:px-16 font-[Gotham Book]">
      <div className="max-w-[1400px] mx-auto space-y-20">
        {/* Top Label */}
        <motion.div
          className="flex justify-center items-center mb-8 text-[#0B3B71] font-bold text-sm tracking-wide space-x-2"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }} // Shorter duration for faster animation
        >
          <FaInfoCircle className="text-xl" />
          <span>About PRIME</span>
        </motion.div>

        {/* Heading */}
        <motion.div
          className="text-center space-y-2"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-[20pt] font-[Gotham Bold] text-[#0a0a0a] max-w-xl mx-auto">
            Why Choose{" "}
            <a href="#" className="text-[#1e3a66] hover:underline transition">
              PRIME Philippines
            </a>{" "}
            for Your Commercial Real Estate Needs?
          </h2>
        </motion.div>

        {/* Highlight Section with Image */}
        <motion.div
          className="relative max-w-[1200px] mx-auto overflow-hidden rounded-2xl shadow-lg group transition-all duration-300 hover:scale-[1.01]"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }} // Faster transition
        >
          <img
            src="/About.png"
            alt="Modern interior"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-white rounded-xl p-6 w-full max-w-xs shadow-md">
            <ul className="space-y-5 text-xs">
              {highlights.map((item, index) => (
                <li key={index} className="flex gap-2 items-start">
                  <FaCheck className="text-[#1e3a66] mt-[3px]" />
                  <div>
                    <p className="text-sm font-semibold text-[#0a0a0a] mb-1">
                      {item.title}
                    </p>
                    <p className="text-gray-500 leading-snug">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Subheading */}
        <motion.div
          className="text-center px-4"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-[20pt] font-[Gotham Bold] text-[#0a0a0a] max-w-md mx-auto leading-relaxed">
            Discover the{" "}
            <span className="text-[#1e3a66] font-semibold">advantages</span> and exclusive benefits
          </h3>
        </motion.div>

        {/* Steps Section */}
        <div className="flex flex-col md:flex-row items-start justify-center gap-10 max-w-[1200px] mx-auto mt-12 h-[500px]">
          {/* Left: Steps List */}
          <motion.div
            className="space-y-6 w-full md:w-[45%] h-full overflow-y-auto pr-2"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.8, // Shorter duration for faster transitions
              delay: 0.7,
              type: "tween", // Smoother transition
            }}
            exit={{ opacity: 0 }} // Exit transition when out of view
          >
            {steps.map((step, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`cursor-pointer p-4 rounded-lg border-l-4 transition-all duration-300 ${
                    isActive
                      ? "border-[#1e3a66] bg-[#f4f7fd]"
                      : "border-gray-300 hover:border-[#1e3a66]"
                  }`}
                >
                  <p
                    className={`text-base font-semibold mb-1 transition-colors ${
                      isActive ? "text-[#1e3a66]" : "text-gray-700"
                    }`}
                  >
                    {step.title}
                  </p>
                  <p
                    className={`text-sm transition-colors ${
                      isActive ? "text-[#0a0a0a]" : "text-gray-500"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
              );
            })}
          </motion.div>

          {/* Right: Step Image */}
          <motion.div
            className="w-full md:w-[55%] h-full rounded-2xl overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-[1.015]"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.8, // Faster transition
              delay: 0.9,
              type: "tween", // Smoother transition
            }}
            exit={{ opacity: 0 }} // Exit transition when out of view
          >
            <img
              src="https://storage.googleapis.com/a1aa/image/a426004a-28d9-43d8-166b-0e27725f010f.jpg"
              alt="Client consultation"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
