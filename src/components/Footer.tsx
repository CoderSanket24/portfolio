import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaHeart, FaArrowUp } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const socialLinks = [
  { icon: FaGithub,    url: 'https://github.com/CoderSanket24',                                           label: 'GitHub',    color: '#ffffff' },
  { icon: FaLinkedin,  url: 'https://www.linkedin.com/in/sanket-botre-568a44320',                          label: 'LinkedIn',  color: '#0ea5e9' },
  { icon: FaInstagram, url: 'https://www.instagram.com/sanket_botre_24?igsh=OWFxd3RnaGNoMTJl',            label: 'Instagram', color: '#ec4899' },
];

const navLinks = ['Home', 'About', 'Projects', 'Contact'];

export default function Footer() {
  return (
    <footer
      className="relative text-white py-16 px-4 overflow-hidden"
      style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      {/* Subtle background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(6,182,212,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* ── Brand ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {/* Logo row */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl blur-md opacity-60"
                  style={{ background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)' }} />
                <div
                  className="relative w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #06b6d4, #3b82f6, #8b5cf6)' }}
                >
                  <span className="text-white font-bold text-xl" style={{ fontFamily: 'var(--font-heading)' }}>S</span>
                </div>
              </div>
              <div>
                <h3
                  className="text-xl font-bold"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    background: 'linear-gradient(135deg, #06b6d4, #3b82f6, #8b5cf6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Sanket Botre
                </h3>
                <p className="text-xs text-gray-500 tracking-widest uppercase">Full Stack Developer</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building innovative solutions with passion, creativity, and cutting-edge technology.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <motion.a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    whileHover={{ scale: 1.18, y: -4 }}
                    whileTap={{ scale: 0.92 }}
                    className="w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      borderColor: 'rgba(255,255,255,0.08)',
                      color: '#9ca3af',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = s.color;
                      (e.currentTarget as HTMLElement).style.borderColor = `${s.color}40`;
                      (e.currentTarget as HTMLElement).style.background = `${s.color}10`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = '#9ca3af';
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                      (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)';
                    }}
                  >
                    <Icon size={17} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* ── Quick Links ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-sm font-semibold text-cyan-400 tracking-widest uppercase">
              Navigation
            </h4>
            <div className="flex flex-col gap-2.5">
              {navLinks.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ x: 6 }}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-cyan-500/50 group-hover:bg-cyan-400 transition-colors duration-300" />
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ── Contact Snippet ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-sm font-semibold text-cyan-400 tracking-widest uppercase">
              Get In Touch
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:sanketbotre24@gmail.com"
                className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300 truncate"
              >
                sanketbotre24@gmail.com
              </a>
              <p className="text-sm text-gray-500 leading-relaxed">
                Open to internships, freelance projects, and full-time opportunities.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-block px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #06b6d4, #3b82f6, #8b5cf6)' }}
              >
                Say Hello ✉
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* ── Divider ── */}
        <div className="section-divider my-8" />

        {/* ── Bottom bar ── */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm flex items-center gap-1.5"
          >
            Made with <FaHeart className="text-rose-500 animate-pulse" size={12} /> by{' '}
            <span className="text-gray-300 font-medium">Sanket Botre</span>{' '}
            © {new Date().getFullYear()}
          </motion.p>

          {/* Back to top */}
          <motion.button
            onClick={() => scroll.scrollToTop()}
            whileHover={{ scale: 1.12, y: -4 }}
            whileTap={{ scale: 0.92 }}
            className="group flex items-center gap-2 px-4 py-2.5 rounded-full border text-sm font-medium transition-all duration-300"
            style={{
              borderColor: 'rgba(6,182,212,0.25)',
              color: '#06b6d4',
              background: 'rgba(6,182,212,0.05)',
            }}
            aria-label="Back to top"
          >
            <FaArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
            Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
