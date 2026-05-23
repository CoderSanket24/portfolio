import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0); // 0=loading, 1=done
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Smoothly increase progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = prev < 70 ? 2 : prev < 90 ? 1 : 0.5;
        return Math.min(prev + increment, 100);
      });
    }, 30);

    const doneTimer = setTimeout(() => setPhase(1), 2200);
    const hideTimer = setTimeout(() => setVisible(false), 2700);

    return () => {
      clearInterval(interval);
      clearTimeout(doneTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  const circumference = 2 * Math.PI * 44; // r=44

  return (
    <AnimatePresence>
      <motion.div
        key="loading"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        animate={phase === 1 ? { opacity: 0, scale: 1.05 } : { opacity: 1 }}
        transition={{ duration: 0.55, ease: 'easeInOut' }}
        className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
        style={{ background: 'var(--bg-dark)' }}
      >
        {/* Background aurora blobs on loader */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 600, height: 600,
              background: 'radial-gradient(circle, rgba(6,182,212,0.12), transparent 70%)',
              top: '-150px', left: '-150px', filter: 'blur(80px)',
            }}
            animate={{ scale: [1, 1.2, 1], x: [0, 40, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 500, height: 500,
              background: 'radial-gradient(circle, rgba(139,92,246,0.1), transparent 70%)',
              bottom: '-100px', right: '-100px', filter: 'blur(80px)',
            }}
            animate={{ scale: [1, 0.9, 1], x: [0, -30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          />
        </div>

        {/* Main loader content */}
        <div className="relative flex flex-col items-center gap-10 z-10">
          {/* SVG Circular progress */}
          <div className="relative w-32 h-32 flex items-center justify-center">
            {/* Outer glow ring */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                boxShadow: '0 0 40px rgba(6,182,212,0.4), 0 0 80px rgba(6,182,212,0.15)',
              }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
              {/* Track */}
              <circle
                cx="50" cy="50" r="44"
                fill="none"
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="2.5"
              />
              {/* Progress arc */}
              <motion.circle
                cx="50" cy="50" r="44"
                fill="none"
                stroke="url(#progressGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={circumference - (progress / 100) * circumference}
                style={{ transition: 'stroke-dashoffset 0.05s linear' }}
              />
              <defs>
                <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="50%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>

            {/* Center logo */}
            <motion.div
              className="relative w-16 h-16 rounded-2xl flex items-center justify-center overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #06b6d4, #3b82f6, #8b5cf6)',
              }}
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            >
              <motion.span
                className="text-2xl font-bold text-white absolute"
                style={{ fontFamily: 'var(--font-heading)', zIndex: 10 }}
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                S
              </motion.span>
              {/* Shimmer */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              />
            </motion.div>
          </div>

          {/* Percentage */}
          <motion.div
            className="text-5xl font-bold tabular-nums"
            style={{
              fontFamily: 'var(--font-heading)',
              background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {Math.round(progress)}
            <span className="text-2xl text-gray-500">%</span>
          </motion.div>

          {/* Label + dots */}
          <div className="flex flex-col items-center gap-3">
            <motion.p
              className="text-xs tracking-[0.3em] uppercase text-gray-500"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {phase === 1 ? 'Ready' : 'Initializing Portfolio'}
            </motion.p>

            {/* Pulsing dots */}
            <div className="flex gap-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-cyan-500"
                  animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </div>
          </div>

          {/* Horizontal scan line bar */}
          <div className="w-64 h-px bg-gray-800/80 relative overflow-hidden rounded-full">
            <motion.div
              className="absolute inset-y-0 left-0 h-full rounded-full"
              style={{
                background: 'linear-gradient(90deg, #06b6d4, #3b82f6, #8b5cf6)',
                width: `${progress}%`,
                boxShadow: '0 0 12px rgba(6,182,212,0.8)',
                transition: 'width 0.1s linear',
              }}
            />
            {/* Shimmer on bar */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
            />
          </div>
        </div>

        {/* Orbiting particles around the whole loader */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: ['#06b6d4', '#8b5cf6', '#ec4899'][i],
              boxShadow: `0 0 8px ${ ['rgba(6,182,212,0.8)', 'rgba(139,92,246,0.8)', 'rgba(236,72,153,0.8)'][i]}`,
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 3 + i * 0.8,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 0.5,
            }}
            transformTemplate={({ rotate }) =>
              `rotate(${rotate}) translateX(${90 + i * 24}px) rotate(-${rotate})`
            }
          />
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
