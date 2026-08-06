import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import profileImage from "../assets/photo.jpg";
import MagneticButton from "./MagneticButton";
import HeroScene3D from "./3D/HeroScene3D";

/* ─── Typewriter Hook ─────────────────────────────────────────── */
function useTypewriter(words: string[], speed = 90, pause = 1800) {
  const [displayed, setDisplayed] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const delay = deleting ? speed / 2 : charIdx === current.length ? pause : speed;

    const timer = setTimeout(() => {
      if (!deleting && charIdx === current.length) {
        setDeleting(true);
      } else if (deleting && charIdx === 0) {
        setDeleting(false);
        setWordIdx((i) => (i + 1) % words.length);
      } else {
        setCharIdx((i) => i + (deleting ? -1 : 1));
        setDisplayed(current.slice(0, charIdx + (deleting ? -1 : 1)));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return displayed;
}

/* ─── Animation Variants ──────────────────────────────────────── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] as const } },
};

/* ─── Hero Component ──────────────────────────────────────────── */
const Hero: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const role = useTypewriter(
    ["Full Stack Developer", "AI/ML Enthusiast", "Problem Solver", "Game Developer"],
    80,
    2000
  );

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({
      x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
      y: ((e.clientY - rect.top) / rect.height) * 2 - 1,
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden"
      style={{ background: "var(--bg-dark)" }}
    >
      {/* ── Three.js Canvas ── */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 60 }}
          gl={{ antialias: true, alpha: true }}
          style={{ background: "transparent" }}
        >
          <HeroScene3D mouse={mouse} />
        </Canvas>
      </div>

      {/* ── Subtle Grid Overlay ── */}
      <div className="absolute inset-0 z-[1] bg-grid-pattern opacity-20 pointer-events-none" />

      {/* ── Radial vignette ── */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(2,8,23,0.85) 100%)",
        }}
      />

      {/* ── Main Content ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto text-center"
      >
        {/* Profile Image */}
        <motion.div variants={itemVariants} className="mb-8 flex justify-center">
          <div className="relative group">
            {/* Animated gradient ring */}
            <div className="absolute -inset-1 rounded-full gradient-border-animated opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Pulse ring */}
            <div className="absolute inset-0 rounded-full pulse-ring opacity-60" />

            {/* Image container */}
            <div className="relative w-36 h-36 rounded-full overflow-hidden border-2 border-white/10 float-animation">
              {!imageError ? (
                <img
                  src={profileImage}
                  alt="Sanket Botre"
                  className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-700"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-700 flex items-center justify-center text-5xl font-bold text-white font-heading">
                  S
                </div>
              )}
            </div>

            {/* Status badge */}
            <div className="absolute -bottom-1 -right-1 bg-gray-900 border border-gray-700 rounded-full px-2 py-1 flex items-center gap-1.5 shadow-lg">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-xs text-gray-300 font-medium">Available</span>
            </div>
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.p
          variants={itemVariants}
          className="text-cyan-400 font-medium text-lg mb-3 tracking-widest uppercase"
        >
          Hello, World! 👋
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl font-bold mb-6 leading-none tracking-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          I'm{" "}
          <span
            className="gradient-text-premium"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Sanket
          </span>
        </motion.h1>

        {/* Typewriter Role */}
        <motion.div
          variants={itemVariants}
          className="text-2xl md:text-3xl text-gray-300 mb-6 h-10 flex items-center justify-center gap-0"
          style={{ fontFamily: "var(--font-body)" }}
        >
          <span className="text-gray-400">I am a&nbsp;</span>
          <span className="text-cyan-400 font-semibold">{role}</span>
          <span className="typewriter-cursor" />
        </motion.div>

        {/* Sub-description */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Passionate about building{" "}
          <span className="text-cyan-400 font-semibold">innovative solutions</span> with
          cutting-edge technology. Let's create something{" "}
          <span className="text-purple-400 font-semibold">amazing</span> together!
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 mb-10 justify-center"
        >
          <MagneticButton className="btn-primary px-10 py-4 text-white rounded-full font-bold text-lg relative overflow-hidden group">
            <a href="#projects" className="relative z-10 flex items-center gap-2">
              <span>View My Work</span>
              <span className="text-sm">→</span>
            </a>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </MagneticButton>

          <MagneticButton className="relative px-10 py-4 rounded-full font-bold text-lg group overflow-hidden">
            <div className="absolute inset-0 rounded-full border border-cyan-500/50 group-hover:border-cyan-400 transition-colors duration-300" />
            <div className="absolute inset-0 rounded-full bg-cyan-500/0 group-hover:bg-cyan-500/10 transition-colors duration-300" />
            <a href="#contact" className="relative z-10 text-cyan-400 group-hover:text-cyan-300 flex items-center gap-2 transition-colors duration-300">
              <span>Get In Touch</span>
              <span className="text-sm">✉</span>
            </a>
          </MagneticButton>
        </motion.div>

        {/* Social Icons */}
        <motion.div variants={itemVariants} className="flex space-x-4 justify-center mb-12">
          {[
            {
              href: "https://github.com/CoderSanket24",
              icon: <FaGithub size={22} />,
              label: "GitHub",
              hoverColor: "hover:text-white",
              hoverBg: "hover:bg-white/10 hover:border-white/30",
            },
            {
              href: "https://www.linkedin.com/in/sanket-botre-568a44320",
              icon: <FaLinkedin size={22} />,
              label: "LinkedIn",
              hoverColor: "hover:text-blue-400",
              hoverBg: "hover:bg-blue-500/10 hover:border-blue-500/30",
            },
            {
              href: "https://www.instagram.com/sanket_botre_24?igsh=OWFxd3RnaGNoMTJl",
              icon: <FaInstagram size={22} />,
              label: "Instagram",
              hoverColor: "hover:text-pink-400",
              hoverBg: "hover:bg-pink-500/10 hover:border-pink-500/30",
            },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className={`text-gray-500 ${social.hoverColor} transition-all duration-300 p-3.5 rounded-full border border-white/10 ${social.hoverBg} backdrop-blur-sm`}
              whileHover={{ scale: 1.15, y: -4 }}
              whileTap={{ scale: 0.92 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div variants={itemVariants} className="flex justify-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-gray-600"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-5 h-9 border border-gray-700 rounded-full flex justify-center p-1">
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-2.5 bg-gradient-to-b from-cyan-400 to-transparent rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
