import React from "react";
import { motion } from "framer-motion";

const AuroraBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Primary aurora blobs */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "900px",
          height: "900px",
          background: "radial-gradient(circle at center, rgba(6,182,212,0.15) 0%, rgba(59,130,246,0.08) 50%, transparent 70%)",
          top: "-300px",
          left: "-200px",
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, 120, -60, 0],
          y: [0, -80, 60, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute rounded-full"
        style={{
          width: "700px",
          height: "700px",
          background: "radial-gradient(circle at center, rgba(139,92,246,0.14) 0%, rgba(236,72,153,0.07) 50%, transparent 70%)",
          top: "30%",
          right: "-200px",
          filter: "blur(90px)",
        }}
        animate={{
          x: [0, -100, 60, 0],
          y: [0, 80, -40, 0],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      <motion.div
        className="absolute rounded-full"
        style={{
          width: "800px",
          height: "800px",
          background: "radial-gradient(circle at center, rgba(59,130,246,0.12) 0%, rgba(139,92,246,0.08) 50%, transparent 70%)",
          bottom: "-250px",
          left: "25%",
          filter: "blur(100px)",
        }}
        animate={{
          x: [0, 80, -100, 0],
          y: [0, -60, 80, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 10 }}
      />

      <motion.div
        className="absolute rounded-full"
        style={{
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle at center, rgba(0,229,255,0.1) 0%, rgba(6,182,212,0.05) 50%, transparent 70%)",
          top: "55%",
          left: "5%",
          filter: "blur(70px)",
        }}
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -50, 30, 0],
          scale: [1, 1.3, 0.85, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 7 }}
      />

      {/* Very subtle top-right accent */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle at center, rgba(236,72,153,0.08) 0%, transparent 70%)",
          top: "10%",
          right: "20%",
          filter: "blur(60px)",
        }}
        animate={{
          x: [0, -40, 60, 0],
          y: [0, 40, -30, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 14 }}
      />
    </div>
  );
};

export default AuroraBackground;
