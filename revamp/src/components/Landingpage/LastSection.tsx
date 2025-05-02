// components/InquireNowSection.tsx
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function InquireNowSection() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
    // Scroll after a small delay to ensure page has loaded
    setTimeout(() => {
      const element = document.getElementById("top");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // 100ms delay to allow page transition
  };

  return (
    <section className="relative bg-[#0B3B71] text-white py-16 px-4 md:py-20 md:px-6 font-gotham-book overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto text-center"
      >
        <p className="text-[12pt] md:text-[14pt] mb-4 font-normal tracking-wide">
          Have Questions or Need Assistance?
        </p>
        <h2 className="text-[24pt] md:text-[32pt] mb-8 leading-snug font-gotham-bold">
          Let's Get You Started — <br className="hidden md:block" /> Inquire Now!
        </h2>
        <Button
          onClick={handleClick}
          className="bg-white text-[#0B3B71] hover:bg-[#fbbf24] hover:text-[#0B3B71] font-gotham-bold text-[12pt] md:text-[14pt] px-8 py-3 rounded-full transition-all duration-300 shadow-xl"
        >
          Inquire Now
        </Button>
      </motion.div>

      {/* Decorative Blurs */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl opacity-50" />
    </section>
  );
}
