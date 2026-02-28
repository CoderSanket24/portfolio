import { motion } from 'framer-motion';

export default function FloatingShapes() {
  const shapes = [
    { size: 100, color: 'from-cyan-500/10 to-blue-500/10', duration: 20, delay: 0 },
    { size: 150, color: 'from-purple-500/10 to-pink-500/10', duration: 25, delay: 2 },
    { size: 80, color: 'from-blue-500/10 to-cyan-500/10', duration: 18, delay: 4 },
    { size: 120, color: 'from-pink-500/10 to-purple-500/10', duration: 22, delay: 1 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full bg-gradient-to-br ${shape.color} blur-3xl`}
          style={{
            width: shape.size,
            height: shape.size,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 200 - 100, 0],
            y: [0, Math.random() * 200 - 100, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: shape.delay,
          }}
        />
      ))}
    </div>
  );
}
