import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface ProjectCardProps {
  title: string;
  desc: string;
  link: string;
  image: string;
  tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, desc, link, image, tags }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [shinePos, setShinePos] = useState({ x: 50, y: 50 });

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 22 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 22 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["14deg", "-14deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-14deg", "14deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    x.set(px - 0.5);
    y.set(py - 0.5);
    setShinePos({ x: px * 100, y: py * 100 });
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  return (
    <div className="perspective-2000 w-full h-full" style={{ perspective: "1200px" }}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative w-full h-full rounded-3xl cursor-pointer"
      >
        {/* Glowing gradient border — only on hover */}
        <motion.div
          className="absolute -inset-[1px] rounded-3xl"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          style={{
            background: "linear-gradient(135deg, #06b6d4, #3b82f6, #8b5cf6, #ec4899)",
            filter: "blur(1px)",
          }}
        />

        {/* Card body */}
        <div
          className="relative flex flex-col h-full rounded-3xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(2,8,23,0.93) 0%, rgba(10,15,40,0.88) 100%)",
            backdropFilter: "blur(24px)",
            border: hovered ? "1px solid transparent" : "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {/* Mouse-tracked radial shine */}
          <div
            className="absolute inset-0 z-10 pointer-events-none rounded-3xl transition-opacity duration-300"
            style={{
              opacity: hovered ? 1 : 0,
              background: `radial-gradient(circle at ${shinePos.x}% ${shinePos.y}%, rgba(255,255,255,0.06) 0%, transparent 55%)`,
            }}
          />

          {/* ── Image ── */}
          <div className="relative overflow-hidden" style={{ transform: "translateZ(35px)" }}>
            {image ? (
              <>
                <img
                  src={image}
                  alt={title}
                  className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-transparent to-transparent" />
              </>
            ) : (
              <div
                className="w-full h-52 flex items-center justify-center relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(6,182,212,0.12), rgba(59,130,246,0.08), rgba(139,92,246,0.12))",
                }}
              >
                <div className="absolute inset-0 bg-grid-pattern opacity-25" />
                <motion.div
                  className="text-7xl opacity-20 select-none"
                  animate={{ rotate: [0, 4, -4, 0], scale: [1, 1.06, 1] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                >
                  🚀
                </motion.div>
              </div>
            )}

            {/* Hover overlay button */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center z-20"
              animate={{ opacity: hovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full font-semibold text-sm text-white border border-white/30 transition-transform duration-200 hover:scale-105"
                style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(12px)" }}
              >
                View Project ↗
              </a>
            </motion.div>
          </div>

          {/* ── Content ── */}
          <div className="flex flex-col flex-grow p-6" style={{ transform: "translateZ(25px)" }}>
            {/* Title */}
            <h3
              className="text-xl font-bold mb-3 leading-snug transition-colors duration-300"
              style={{
                fontFamily: "var(--font-heading)",
                color: hovered ? "#67e8f9" : "#fff",
              }}
            >
              {title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 mb-5 flex-grow leading-relaxed text-sm">
              {desc}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-5">
              {tags.map((tag, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.07, y: -1 }}
                  className="px-3 py-1 rounded-full text-xs font-medium border"
                  style={{
                    background: "rgba(6,182,212,0.08)",
                    borderColor: "rgba(6,182,212,0.22)",
                    color: "#67e8f9",
                  }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* Footer row */}
            <div
              className="flex items-center justify-between pt-4"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
              <motion.a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm flex items-center gap-1.5 transition-colors duration-300"
              >
                View Project
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>

              <div className="flex items-center gap-1.5">
                <div
                  className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"
                  style={{ boxShadow: "0 0 6px rgba(52,211,153,0.9)" }}
                />
                <span className="text-xs text-gray-500 font-medium">Active</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
