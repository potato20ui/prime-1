// components/CallBookingSection.tsx
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function CallBookingSection() {
  const navigate = useNavigate();

  const handleViewProperties = () => {
    navigate("/properties");
  };

  return (
    <section className="bg-[#003366] text-white text-center py-12 px-4 md:py-16 md:px-6 font-gotham-book">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto"
      >
        <p className="text-pt-sm md:text-pt-base mb-3 font-normal">
          Want to Book a Call?
        </p>
        <h2 className="text-[20pt]  mb-6 leading-tight font-gotham-bold">
          Ready to make your step in real estate? Book Now.
        </h2>
        <Button
          onClick={handleViewProperties}
          className="bg-yellow-500 hover:bg-yellow-400 text-black font-gotham-bold px-6 py-2.5 rounded-full transition-colors duration-300 cursor-pointer shadow-lg"
        >
          View Properties
        </Button>
      </motion.div>
    </section>
  );
}
