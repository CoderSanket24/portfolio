import { Link, animateScroll as scroll } from "react-scroll";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background on scroll
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ["hero", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", to: "hero", icon: "🏠" },
    { name: "About", to: "about", icon: "👨‍💻" },
    { name: "Projects", to: "projects", icon: "🚀" },
    { name: "Contact", to: "contact", icon: "📧" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled
          ? "py-3"
          : "py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`relative transition-all duration-500 ${scrolled
          ? "glass-dark rounded-2xl shadow-2xl border border-cyan-500/20"
          : "glass-dark rounded-3xl shadow-xl border border-white/10"
          }`}>
          {/* Gradient Border Effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div className="relative flex justify-between items-center px-6 py-4">
            {/* Modern Logo */}
            <motion.div
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => scroll.scrollToTop()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                <div className="relative w-12 h-12 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Sanket Botre
                </h1>
                <p className="text-xs text-gray-400 hidden md:block">Full Stack Developer</p>
              </div>
            </motion.div>

            {/* Desktop Navigation - Modern Pills */}
            <div className="hidden md:flex items-center space-x-2">
              <div className="flex items-center space-x-1 bg-gray-800/50 rounded-full p-1.5 border border-gray-700/50">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link
                      to={item.to}
                      smooth={true}
                      duration={500}
                      className="relative cursor-pointer"
                      onClick={() => setActiveSection(item.to)}
                    >
                      <motion.div
                        className={`relative flex items-center space-x-2 px-5 py-2.5 rounded-full transition-all duration-300 ${activeSection === item.to
                          ? "text-white"
                          : "text-gray-400 hover:text-white"
                          }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {/* Active Background */}
                        {activeSection === item.to && (
                          <motion.div
                            layoutId="activeTab"
                            className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}

                        <span className="relative z-10 text-sm group-hover:scale-110 transition-transform duration-300">
                          {item.icon}
                        </span>
                        <span className="relative z-10 font-medium text-sm">{item.name}</span>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Modern Mobile Menu Button */}
            <motion.button
              className="md:hidden relative w-10 h-10 rounded-xl bg-gradient-to-br from-gray-800/80 to-gray-700/80 border border-gray-600/50 hover:border-cyan-500/50 transition-all duration-300 flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-5 h-4 flex flex-col justify-center items-center">
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 7 : 0,
                  }}
                  className="bg-gradient-to-r from-cyan-400 to-blue-400 block h-0.5 w-5 rounded-sm"
                />
                <motion.span
                  animate={{
                    opacity: isMobileMenuOpen ? 0 : 1,
                    x: isMobileMenuOpen ? -20 : 0,
                  }}
                  className="bg-gradient-to-r from-cyan-400 to-blue-400 block h-0.5 w-5 rounded-sm mt-1.5"
                />
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -7 : 0,
                  }}
                  className="bg-gradient-to-r from-cyan-400 to-blue-400 block h-0.5 w-5 rounded-sm mt-1.5"
                />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Modern Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
              className="md:hidden mt-4"
            >
              <div className="glass-dark rounded-2xl border border-cyan-500/20 shadow-2xl overflow-hidden">
                {/* Mobile Menu Items */}
                <div className="p-4 space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        to={item.to}
                        smooth={true}
                        duration={500}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <motion.div
                          className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 cursor-pointer ${activeSection === item.to
                            ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
                            : "text-gray-300 hover:text-white hover:bg-white/5"
                            }`}
                          whileHover={{ x: 5 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span className="text-lg">{item.icon}</span>
                          <span className="font-medium">{item.name}</span>
                        </motion.div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}