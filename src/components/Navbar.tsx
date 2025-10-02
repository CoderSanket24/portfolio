import { Link, animateScroll as scroll } from "react-scroll";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
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
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      className="fixed w-full z-50 glass-dark backdrop-blur-xl border-b border-white/20 shadow-2xl transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 md:h-22">
          {/* Enhanced Logo */}
          <motion.div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => scroll.scrollToTop()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold gradient-text-blue">
                Sanket Botre
              </h1>
              <p className="text-xs text-gray-400 hidden md:block">Full Stack Developer</p>
            </div>
          </motion.div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="glass-dark rounded-full px-2 py-2 border border-white/10">
              <div className="flex space-x-1">
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
                      className={`relative flex items-center space-x-2 px-4 py-2 rounded-full cursor-pointer transition-all duration-300 group ${
                        activeSection === item.to
                          ? "bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-blue-400 border border-blue-500/30"
                          : "text-gray-300 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <span className="text-sm group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </span>
                      <span className="font-medium">{item.name}</span>
                      
                      {/* Active indicator */}
                      {activeSection === item.to && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-full border border-blue-500/20"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* CTA Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 btn-primary px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300"
            >
              Hire Me
            </motion.a>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <motion.button
            className="md:hidden glass-dark p-3 rounded-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <motion.span
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 6 : -2,
                }}
                className="bg-gradient-to-r from-blue-400 to-purple-400 block h-0.5 w-6 rounded-sm"
              />
              <motion.span
                animate={{
                  opacity: isMobileMenuOpen ? 0 : 1,
                }}
                className="bg-gradient-to-r from-blue-400 to-purple-400 block h-0.5 w-6 rounded-sm mt-1"
              />
              <motion.span
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -6 : 2,
                }}
                className="bg-gradient-to-r from-blue-400 to-purple-400 block h-0.5 w-6 rounded-sm mt-1"
              />
            </div>
          </motion.button>
        </div>

        {/* Enhanced Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0, y: -20 }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0, 
            height: isMobileMenuOpen ? "auto" : 0,
            y: isMobileMenuOpen ? 0 : -20
          }}
          transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-6 mt-4 glass-dark rounded-2xl border border-white/10">
            <div className="space-y-2 px-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: isMobileMenuOpen ? 1 : 0, 
                    x: isMobileMenuOpen ? 0 : -20 
                  }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={500}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                      activeSection === item.to
                        ? "bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-blue-400 border border-blue-500/30"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
            
            {/* Mobile CTA */}
            <div className="px-4 mt-4 pt-4 border-t border-white/10">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block w-full btn-primary text-center py-3 rounded-xl font-semibold transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Let's Work Together
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}