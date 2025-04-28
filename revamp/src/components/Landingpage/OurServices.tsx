import { FC } from "react";
import {
  FaHandshake,
  FaBuilding,
  FaFileAlt,
  FaCity,
  FaIndustry,
} from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    icon: <FaHandshake size={28} />,
    title: "LANDLORD",
    subtitle: "REPRESENTATION",
  },
  {
    icon: <FaBuilding size={28} />,
    title: "TENANT",
    subtitle: "REPRESENTATION",
  },
  {
    icon: <FaFileAlt size={28} />,
    title: "RESEARCH",
    subtitle: "AND ADVISORY",
  },
  {
    icon: <FaCity size={28} />,
    title: "PROPERTY ACQUISITION",
    subtitle: "AND DISPOSAL",
  },
  {
    icon: <FaIndustry size={28} />,
    title: "PROJECT",
    subtitle: "MANAGEMENT",
  },
  {
    icon: <FaCity size={28} />,
    title: "DESIGN AND",
    subtitle: "CONSTRUCTION",
  },
];

const OurServices: FC = () => {
  return (
    <section className="bg-white flex items-center justify-center px-4 py-20 font-Gotham-sans-serif">
      <div className="w-full max-w-[1400px] text-center flex flex-col items-center">
        {/* Header */}
        <div className="flex justify-center items-center mb-8 text-[#0B3B71] font-bold text-sm tracking-wide space-x-2">
          <FaIndustry className="text-xl" />
          <span>SERVICES</span>
        </div>

        {/* Title */}
        <motion.div
          className="relative mb-14"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-[24pt] sm:text-5xl font-extrabold tracking-wide font-gotham-bold text-[#0E406F] text-center">
            OUR <span className="text-[#666666]">SERVICES</span>
          </h1>
          <div className="h-1 w-24 bg-[#0E406F] mt-4 mx-auto rounded-full"></div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full px-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center border-2 border-[#d3dbe3] rounded-xl py-8 px-8 bg-white shadow-sm hover:shadow-md transition-all duration-300 ease-in-out"
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              exit={{ opacity: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 120,
              }}
            >
              <div className="bg-[#0E406F] text-white rounded-full p-4 mb-4 flex justify-center items-center">
                {service.icon}
              </div>
              <p className="text-[#0E406F] text-center text-lg leading-snug font-bold tracking-wide">
                {service.title}
                <br />
                <span className="font-medium text-sm tracking-normal text-[#999]">
                  {service.subtitle}
                </span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
