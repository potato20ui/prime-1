import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaUserCircle } from "react-icons/fa";

const awards = [
  {
    title: "Asia Leaders Award",
    date: "January 2022",
    backgroundImage: "/awards1.png",
  },
  {
    title: "Golden Globe Annual Awards",
    date: "November 2019",
    backgroundImage: "/awards2.png",
  },
  {
    title: "Global Excellence Awards",
    date: "November 2019",
    backgroundImage: "/awards3.png",
  },
];

export default function Featured() {
  const [index, setIndex] = useState(0);
  const [isInView, setIsInView] = useState(false); // To track if the section is in view
  const sectionRef = useRef(null);

  const handlePrev = () =>
    setIndex((prev) => (prev === 0 ? awards.length - 1 : prev - 1));
  const handleNext = () =>
    setIndex((prev) => (prev === awards.length - 1 ? 0 : prev + 1));

  // Intersection Observer to detect when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting); // Set state when the section enters or leaves the viewport
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Start observing the testimonials section
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current); // Cleanup observer when component unmounts
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
      className="relative w-full bg-white py-10 px-4 sm:px-8 md:px-10 lg:px-20 font-gotham-book"
    >
      <div className="max-w-[1600px] mx-auto rounded-3xl">
        {/* Heading */}
        <h2 className="text-[22pt] font-gotham-bold text-center text-[#0a0a0a] mb-10">
          Featured Awards
        </h2>

        {/* Carousel Container */}
        <div className="relative max-w-[800px] h-[450px] mx-auto">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute -left-15 top-1/2 -translate-y-1/2 w-9 h-9 bg-white border border-gray-300 rounded-full flex justify-center items-center shadow-lg hover:bg-[#0B3B71] hover:text-white transition"
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
                backgroundImage: `url(${awards[index].backgroundImage})`,
              }}
              className=" rounded-2xl h-[450px] text-white flex flex-col md:flex-row items-end"
            >
              <div className="md:text-lg leading-relaxed text-center md:text-left h-[100px] font-gotham-book w-full bg-PRIMEblack/70 transition inset-0 rounded-b-2xl px-[30px] py-[22px]">
                <p className="font-gotham-bold text-xl">
                  {awards[index].title}
                </p>
                <p className="text-sm text-[#A3B1C2]">{awards[index].date}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute -right-15 top-1/2 -translate-y-1/2 w-9 h-9 bg-white border border-gray-300 rounded-full flex justify-center items-center shadow-lg hover:bg-[#0B3B71] hover:text-white transition"
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
                    ? "bg-[#0B3B71] scale-110"
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
