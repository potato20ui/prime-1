import { FC } from "react";
import {
  FaHandshake,
  FaBuilding,
  FaFileAlt,
  FaCity,
  FaIndustry,
} from "react-icons/fa";
import { motion } from "framer-motion";

// Service data
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
    <section className="bg-PRIMEwhite flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-[1400px] text-center flex flex-col items-center">
        {/* Header */}
        <motion.div
          className="flex justify-center items-center mb-8 text-sm tracking-wide font-gotham-bold text-PRIMEblue"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -30 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <FaIndustry className="text-xl mr-2" />
          <span>SERVICES</span>
        </motion.div>

        {/* Title */}
        <motion.div
          className="relative mb-14"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -30 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-gotham-bold text-center text-PRIMEblue text-maintitle">
            OUR <span className="text-PRIMEgray">SERVICES</span>
          </h1>
          <div className="h-1 w-24 mt-4 mx-auto rounded-full bg-PRIMEblue"></div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full px-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center border-2 rounded-xl py-8 px-8 bg-PRIMEwhite shadow-sm hover:shadow-md transition-all duration-300 ease-in-out border-PRIMElightgray hover:border-PRIMEblue"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="rounded-full p-4 mb-4 flex justify-center items-center bg-PRIMEblue text-PRIMEwhite">
                {service.icon}
              </div>
              <h6 className="font-gotham-bold text-center leading-snug tracking-wide text-PRIMEblue">
                {service.title}
                <br />
                <span className="font-normal text-sm text-PRIMEgray">
                  {service.subtitle}
                </span>
              </h6>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
