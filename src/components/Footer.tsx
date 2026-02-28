import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaHeart, FaArrowUp } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

export default function Footer() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/CoderSanket24', color: '#333' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/sanket-botre-568a44320', color: '#0077B5' },
    { icon: FaInstagram, url: 'https://www.instagram.com/sanket_botre_24?igsh=OWFxd3RnaGNoMTJl', color: '#E4405F' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white py-12 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Sanket Botre
                </h3>
                <p className="text-sm text-gray-400">Full Stack Developer</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Building innovative solutions with passion and creativity.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-cyan-400">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ x: 5, color: '#06b6d4' }}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-cyan-400">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transition-all duration-300"
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
            <p className="text-gray-400 text-sm">
              Let's connect and create something amazing together!
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm flex items-center gap-2"
          >
            Made with <FaHeart className="text-red-500 animate-pulse" /> by Sanket Botre © {new Date().getFullYear()}
          </motion.p>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
          >
            <FaArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
