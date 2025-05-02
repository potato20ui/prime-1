// components/Navbar/Navbar.tsx
import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import NavLinks from "@/components/Navbar/NavLinks";
import MobileMenu from "@/components/Navbar/MobileMenu";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isTabletOrMobile, setIsTabletOrMobile] = useState(window.innerWidth < 1280);

  useEffect(() => {
    const handleResize = () => {
      setIsTabletOrMobile(window.innerWidth < 1280);
      if (window.innerWidth >= 1280) setMenuOpen(false);
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

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        document.dispatchEvent(new Event("closeDropdown"));
      }
      if (mobileMenuRef.current && menuOpen && !mobileMenuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  const navClasses = isHomePage
    ? scrolled
      ? "bg-white text-black shadow-md"
      : "bg-transparent text-white"
    : "bg-white text-black shadow-md";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${navClasses}`}>
      <div className="w-full flex justify-between items-center px-0 md:px-6">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
          <Link to="/" onClick={scrollToTop}>
            <img src="/prime-logo.png" alt="PRIME Philippines Logo" className="h-12 md:h-16 p-1" />
          </Link>
        </motion.div>

        {/* Desktop Links */}
        {!isTabletOrMobile && (
          <div className="hidden lg:flex items-center space-x-6" ref={dropdownRef}>
            <NavLinks scrollToTop={scrollToTop} isScrolled={isHomePage && !scrolled ? false : true} />
          </div>
        )}

        {/* Mobile Toggle */}
        {isTabletOrMobile && (
          <motion.button className="z-50 p-4" onClick={() => setMenuOpen(!menuOpen)} whileTap={{ scale: 0.9 }}>
            {menuOpen ? (
              <FaTimes className={`w-6 h-6 ${isHomePage && !scrolled ? "text-white" : "text-[#666666]"}`} />
            ) : (
              <FaBars className={`w-6 h-6 ${isHomePage && !scrolled ? "text-white" : "text-[#666666]"}`} />
            )}
          </motion.button>
        )}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <MobileMenu scrollToTop={scrollToTop} menuRef={mobileMenuRef} setMenuOpen={setMenuOpen} />
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
