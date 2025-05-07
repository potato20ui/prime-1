import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface NavLinksProps {
  scrollToTop: () => void;
  isScrolled: boolean;
}

const NavLinks = ({ scrollToTop, isScrolled }: NavLinksProps) => {
  const [aboutDropdown, setAboutDropdown] = useState(false);

  useEffect(() => {
    const handleClose = () => setAboutDropdown(false);
    document.addEventListener("closeDropdown", handleClose);
    return () => document.removeEventListener("closeDropdown", handleClose);
  }, []);

  const textColorClass = isScrolled ? "text-PRIMEgray" : "text-white";

  const linkClass = `
    font-[Gotham Bold] uppercase relative text-[12pt] lg:text-[14pt]
    after:content-[''] after:absolute after:bottom-0 after:left-0 
    after:w-0 after:h-0.5 after:bg-PRIMEblue after:transition-all after:duration-300
    hover:after:w-full transition-all duration-200
  `;

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.05 } },
    exit: { opacity: 0, y: -10 }
  };

  return (
    <>
      <Link to="/expertise" className={`${linkClass} px-2 py-1 ${textColorClass}`} onClick={scrollToTop}>
        Expertise
      </Link>
      <Link to="/services" className={`${linkClass} px-2 py-1 ${textColorClass}`} onClick={scrollToTop}>
        Services
      </Link>
      <Link to="/properties" className={`${linkClass} px-2 py-1 ${textColorClass}`} onClick={scrollToTop}>
        Find a Property
      </Link>

      {/* ABOUT US DROPDOWN */}
      <div className="relative">
        <button
          onClick={() => setAboutDropdown(!aboutDropdown)}
          className={`${linkClass} px-2 py-1 flex items-center ${textColorClass}`}
        >
          About Us
          {aboutDropdown ? (
            <FaChevronUp className="ml-1 text-xs" />
          ) : (
            <FaChevronDown className="ml-1 text-xs" />
          )}
        </button>

        <AnimatePresence>
          {aboutDropdown && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={dropdownVariants}
              className="absolute left-0 mt-2 w-56 bg-PRIMEwhite shadow-xl rounded-md py-2 z-50 border border-gray-100"
            >
              {[["PRIME Leadership", "leadership"], ["Awards and Recognition", "awards"]].map(([label, link], i) => (
                <motion.div key={i} variants={dropdownVariants}>
                  <Link
                    to={`/about/${link}`}
                    onClick={scrollToTop}
                    className="block px-4 py-2 text-[12pt] font-[Gotham Book] text-PRIMEgray hover:bg-blue-50 transition-colors"
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Link to="/careers" className={`${linkClass} px-2 py-1 ${textColorClass}`} onClick={scrollToTop}>
        Careers
      </Link>
      <Link to="/events" className={`${linkClass} px-2 py-1 ${textColorClass}`} onClick={scrollToTop}>
        Events
      </Link>
      <Link to="/pressroom" className={`${linkClass} px-2 py-1 ${textColorClass}`} onClick={scrollToTop}>
        Pressroom
      </Link>

      {/* CONTACT CTA */}
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="ml-2">
        <Link
          to="/contact"
          onClick={scrollToTop}
          className="bg-PRIMEblue text-white px-4 py-2 rounded-full shadow-md text-[14pt] font-[Gotham Bold] transition-all"
        >
          CONTACT
        </Link>
      </motion.div>
    </>
  );
};

export default NavLinks;
