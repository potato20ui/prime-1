import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [insightsDropdown, setInsightsDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [, setIsMobile] = useState(window.innerWidth < 768);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  useEffect(() => {
    if (!isHomePage) {
      setScrolled(true);
      return;
    }
    
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Click outside handlers
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setAboutDropdown(false);
        setInsightsDropdown(false);
      }
      
      if (mobileMenuRef.current && menuOpen && !mobileMenuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside as EventListener);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside as EventListener);
    };
  }, [menuOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
    setAboutDropdown(false);
    setInsightsDropdown(false);
  };

  // Navbar background styles
  const navClasses = isHomePage
    ? scrolled
      ? "bg-white text-black shadow-md"
      : "bg-transparent text-white"
    : "bg-white text-black shadow-md";

  // Text color based on scroll state
  const textColorClass = isHomePage && !scrolled ? "text-black" : "text-[#666666]";
  const mobileTextColorClass = "text-[#666666]";

  // Link styles with animation
  const linkClass = `
    font-gotham-bold uppercase relative text-[14pt]
    after:content-[''] after:absolute after:bottom-0 after:left-0 
    after:w-0 after:h-0.5 after:bg-[#0B3B71] after:transition-all after:duration-300
    hover:after:w-full
  `;

  const dropdownIcon = (isOpen: boolean) => 
    isOpen ? <FaChevronUp className="ml-1 text-[10pt]" /> : <FaChevronDown className="ml-1 text-[10pt]" />;

  // Animation variants
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, transition: { duration: 0.15 } },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.2,
        ease: "easeOut",
        staggerChildren: 0.05
      }
    },
    exit: { opacity: 0, y: -10, transition: { duration: 0.1 } }
  };

  const mobileMenuVariants = {
    hidden: { x: "-100%", transition: { type: "tween", ease: "easeIn", duration: 0.2 } },
    visible: { 
      x: 0, 
      transition: { 
        type: "tween", 
        ease: "easeOut", 
        duration: 0.25,
        when: "beforeChildren",
        staggerChildren: 0.03
      } 
    },
    exit: { 
      x: "-100%", 
      transition: { 
        type: "tween", 
        ease: "easeIn", 
        duration: 0.2,
        when: "afterChildren"
      } 
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${navClasses}`}>
      <div className="w-full flex justify-between items-center px-0 md:px-6">
        {/* Logo with subtle animation */}
        <motion.div 
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="flex-shrink-0"
        >
          <Link to="/" onClick={scrollToTop}>
            <img 
              src="/prime-logo.png" 
              alt="PRIME Philippines Logo" 
              className={`h-12 md:h-16 p-1 transition-all duration-300 ${isHomePage && !scrolled ? "brightness-0 invert" : ""}`}
            />
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6" ref={dropdownRef}>
          <Link 
            to="/expertise" 
            className={`${linkClass} px-2 py-1 ${textColorClass}`} 
            onClick={scrollToTop}
          >
            Expertise
          </Link>

          <Link 
            to="/services" 
            className={`${linkClass} px-2 py-1 ${textColorClass}`} 
            onClick={scrollToTop}
          >
            Services
          </Link>

          <Link 
            to="/properties" 
            className={`${linkClass} px-2 py-1 ${textColorClass}`} 
            onClick={scrollToTop}
          >
            Find a Property
          </Link>

          <div className="relative">
            <button
              onClick={() => {
                setAboutDropdown(!aboutDropdown);
                setInsightsDropdown(false);
              }}
              className={`${linkClass} px-2 py-1 flex items-center ${textColorClass}`}
              aria-expanded={aboutDropdown}
              aria-haspopup="true"
            >
              About Us {dropdownIcon(aboutDropdown)}
            </button>
            <AnimatePresence>
              {aboutDropdown && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={dropdownVariants}
                  className="absolute left-0 mt-2 w-56 bg-white shadow-xl rounded-md py-2 z-50 border border-gray-100"
                >
                  {[
                    ["PRIME Leadership", "prime-leadership"],
                    ["Awards and Recognition", "awards"],
                  ].map(([label, link], i) => (
                    <motion.div key={i} variants={dropdownVariants}>
                      <Link
                        to={`/about/${link}`}
                        className="block px-4 py-2 text-[12pt] font-gotham-book text-[#666666] hover:bg-blue-50 transition-colors"
                        onClick={scrollToTop}
                      >
                        {label}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link 
            to="/careers" 
            className={`${linkClass} px-2 py-1 ${textColorClass}`} 
            onClick={scrollToTop}
          >
            Careers
          </Link>

          <Link 
            to="/events" 
            className={`${linkClass} px-2 py-1 ${textColorClass}`} 
            onClick={scrollToTop}
          >
            Events
          </Link>

          <Link 
            to="/pressroom" 
            className={`${linkClass} px-2 py-1 ${textColorClass}`} 
            onClick={scrollToTop}
          >
            Pressroom
          </Link>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-2"
          >
            <Link
              to="/contact"
              onClick={scrollToTop}
              className="bg-[#0B3B71] text-white px-4 py-2 rounded-full shadow-md transition-all text-[14pt] font-gotham-bold"
            >
              CONTACT
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden z-50"
          onClick={() => setMenuOpen(true)}
          whileTap={{ scale: 0.9 }}
        >
          <FaBars className={`w-10 h-6 ${isHomePage && !scrolled ? "text-white" : "text-[#666666]"}`} />
        </motion.button>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            transition={{ type: "tween", ease: "easeInOut" }}
            className="fixed top-0 left-0 h-full w-72 bg-white text-black z-40 shadow-xl flex flex-col"
            ref={mobileMenuRef}
          >
            <div className="flex items-center justify-between p-4 border-b">
              <Link to="/" onClick={scrollToTop}>
                <img src="/prime-logo.png" alt="PRIME Logo" className="h-12" />
              </Link>
              <motion.button
                onClick={() => setMenuOpen(false)}
                whileHover={{ rotate: 90 }}
                className="text-gray-500 hover:text-black"
              >
                <FaTimes className="text-xl" />
              </motion.button>
            </div>

            <div className="flex flex-col p-6 gap-4 overflow-y-auto">
              <Link 
                to="/expertise" 
                onClick={scrollToTop} 
                className={`${linkClass} ${mobileTextColorClass}`}
              >
                Our Expertise
              </Link>

              <div>
                <button
                  onClick={() => setInsightsDropdown(!insightsDropdown)}
                  className={`${linkClass} ${mobileTextColorClass} flex items-center justify-between w-full`}
                >
                  <span>Latest Insights</span>
                  {dropdownIcon(insightsDropdown)}
                </button>
                <AnimatePresence>
                  {insightsDropdown && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="ml-4 mt-2 space-y-2">
                        {["Industrial", "Office", "Retail"].map((item, i) => (
                          <Link
                            key={i}
                            to={`/insights/${item.toLowerCase()}`}
                            onClick={scrollToTop}
                            className="block text-[10pt] font-gotham-book text-[#666666] hover:text-blue-600 transition-colors"
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link 
                to="/properties" 
                onClick={scrollToTop} 
                className={`${linkClass} ${mobileTextColorClass}`}
              >
                Find a Property
              </Link>

              <div>
                <button
                  onClick={() => setAboutDropdown(!aboutDropdown)}
                  className={`${linkClass} ${mobileTextColorClass} flex items-center justify-between w-full`}
                >
                  <span>About Us</span>
                  {dropdownIcon(aboutDropdown)}
                </button>
                <AnimatePresence>
                  {aboutDropdown && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="ml-4 mt-2 space-y-2">
                        {[
                          ["PRIME Leadership", "prime-leadership"],
                          ["Awards and Recognition", "awards"],
                        ].map(([label, link], i) => (
                          <Link
                            key={i}
                            to={`/about/${link}`}
                            onClick={scrollToTop}
                            className="block text-[10pt] font-gotham-book text-[#666666] hover:text-blue-600 transition-colors"
                          >
                            {label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link 
                to="/careers" 
                onClick={scrollToTop} 
                className={`${linkClass} ${mobileTextColorClass}`}
              >
                Careers
              </Link>

              <Link 
                to="/events" 
                onClick={scrollToTop} 
                className={`${linkClass} ${mobileTextColorClass}`}
              >
                Events
              </Link>

              <Link 
                to="/pressroom" 
                onClick={scrollToTop} 
                className={`${linkClass} ${mobileTextColorClass}`}
              >
                Pressroom
              </Link>

              <motion.div 
                whileTap={{ scale: 0.95 }}
                className="mt-4"
              >
                <Link
                  to="/contact"
                  onClick={scrollToTop}
                  className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700 transition-colors block text-center text-[10pt] font-gotham-bold"
                >
                  CONTACT
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;