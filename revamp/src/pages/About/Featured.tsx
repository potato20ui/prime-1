import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const awards = [
  {
    title: "Asia Leaders Awards",
    date: "November 2019",
    backgroundImage: "/awards1.jpg",
  },
  {
    title: "Asia Leaders Awards",
    date: "November 2019",
    backgroundImage: "/awards2.jpg",
  },
  {
    title: "Carlos Rivera",
    date: "Cebu City, PH",
    backgroundImage: "/awards3.jpg",
  },
];

export default function Featured() {
  const [index, setIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  const handlePrev = () =>
    setIndex((prev) => (prev === 0 ? awards.length - 1 : prev - 1));
  const handleNext = () =>
    setIndex((prev) => (prev === awards.length - 1 ? 0 : prev + 1));

  // Intersection Observer to detect when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        handleNext();
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[var(--color-PRIMEwhite)] py-10 px-4 sm:px-8 md:px-10 lg:px-20 font-gotham-book"
    >
      <div className="max-w-[1400px] mx-auto bg-[#E6F0FF] rounded-3xl shadow-xl p-8 md:p-12">
        {/* Section Tag */}
        <div className="flex justify-center items-center mb-6 text-[#0B3B71] font-bold text-sm tracking-wide space-x-2">
          <FaUserCircle className="text-[xl]" />
          <span>CLIENT TESTIMONIALS</span>
        </div>

        {/* Heading */}
        <h2 className="text-[22pt] font-gotham-bold text-center text-[#0a0a0a] mb-10">
          What Our Clients Say
        </h2>

        {/* Carousel Container */}
        <div className="relative max-w-[800px] h-[450px] mx-auto px-6 sm:px-10">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute -left-8 top-1/2 -translate-y-1/2 w-9 h-9 bg-white border border-gray-300 rounded-full flex justify-center items-center shadow-lg hover:bg-[#0B3B71] hover:text-white transition"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="text-black hover:text-white transition-colors" />
          </button>

          {/* Testimonial Animation */}
          <AnimatePresence mode="wait">
  <motion.div
    key={index}
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: isInView ? 1 : 0, x: 0 }}
    exit={{ opacity: 0, x: -50 }}
    transition={{ duration: 0.5 }}
    style={{
      backgroundImage: `url(${awards[index].backgroundImage})`, // Dynamically set background image
    }}
    className="bg-cover bg-center rounded-2xl p-8 md:p-10 text-white flex flex-col md:flex-row items-center gap-6 md:gap-10"
  >
    <img
      src={awards[index].image}
      alt={`${awards[index].title}'s photo`}
      className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-4 border-white shadow-lg"
    />
    <div className="text-base md:text-lg leading-relaxed text-center md:text-left max-w-xl font-gotham-book">
      <p className="font-gotham-bold text-lg">{awards[index].title}</p>
      <p className="text-sm text-[#A3B1C2]">{awards[index].date}</p>
    </div>
  </motion.div>
</AnimatePresence>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute -right-8 top-1/2 -translate-y-1/2 w-9 h-9 bg-[var(--color-PRIMEwhite)] border border-gray-300 rounded-full flex justify-center items-center shadow-lg hover:bg-[var(--color-PRIMEblue)] hover:text-[var(--color-PRIMEwhite)] transition"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="text-black hover:text-white transition-colors" />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {awards.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === i
                    ? "bg-[var(--color-PRIMEblue)] scale-110"
                    : "bg-[#7A7A7A] opacity-40"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
