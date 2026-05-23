import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  SiReact, SiTypescript, SiPython, SiFastapi,
  SiPostgresql, SiJavascript, SiExpress, SiNodedotjs,
  SiTailwindcss
} from 'react-icons/si';

const skills = [
  { name: 'React',       icon: SiReact,       color: '#61DAFB', level: 90 },
  { name: 'TypeScript',  icon: SiTypescript,  color: '#3178C6', level: 85 },
  { name: 'Python',      icon: SiPython,      color: '#FFD43B', level: 88 },
  { name: 'FastAPI',     icon: SiFastapi,     color: '#009688', level: 80 },
  { name: 'PostgreSQL',  icon: SiPostgresql,  color: '#4169E1', level: 75 },
  { name: 'JavaScript',  icon: SiJavascript,  color: '#F7DF1E', level: 92 },
  { name: 'Express.js',  icon: SiExpress,     color: '#ffffff', level: 82 },
  { name: 'Node.js',     icon: SiNodedotjs,   color: '#68A063', level: 85 },
  { name: 'Tailwind',    icon: SiTailwindcss, color: '#06B6D4', level: 95 },
];

export default function AnimatedSkills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
      {skills.map((skill, index) => {
        const Icon = skill.icon;
        const isHovered = hoveredSkill === skill.name;
        return (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.07, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
            onHoverStart={() => setHoveredSkill(skill.name)}
            onHoverEnd={() => setHoveredSkill(null)}
            className="relative group"
          >
            <motion.div
              whileHover={{ scale: 1.04, rotateY: 8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="relative rounded-2xl p-5 cursor-pointer overflow-hidden border transition-all duration-400"
              style={{
                background: isHovered
                  ? `linear-gradient(135deg, ${skill.color}12, rgba(10,15,40,0.92))`
                  : 'linear-gradient(135deg, rgba(2,8,23,0.85), rgba(10,15,40,0.75))',
                borderColor: isHovered ? `${skill.color}50` : 'rgba(255,255,255,0.07)',
                backdropFilter: 'blur(20px)',
                transformStyle: 'preserve-3d',
                perspective: '1000px',
              }}
            >
              {/* Glow backdrop */}
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: `radial-gradient(circle at 50% 30%, ${skill.color}18 0%, transparent 70%)`,
                  filter: 'blur(12px)',
                }}
              />

              <div className="relative z-10 flex flex-col items-center gap-3">
                {/* Icon with spin on hover */}
                <motion.div
                  animate={{ rotateY: isHovered ? 360 : 0, scale: isHovered ? 1.15 : 1 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  style={{ filter: isHovered ? `drop-shadow(0 0 10px ${skill.color}80)` : 'none' }}
                >
                  <Icon size={44} style={{ color: skill.color }} />
                </motion.div>

                <span
                  className="text-sm font-semibold text-white/90 tracking-wide"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {skill.name}
                </span>

                {/* Skill bar */}
                <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2, delay: index * 0.07, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="h-full rounded-full relative"
                    style={{
                      background: `linear-gradient(90deg, ${skill.color}cc, ${skill.color})`,
                      boxShadow: `0 0 8px ${skill.color}60`,
                    }}
                  >
                    {/* Shimmer on bar */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear', delay: index * 0.2 }}
                    />
                  </motion.div>
                </div>

                <span className="text-xs font-medium" style={{ color: `${skill.color}cc` }}>
                  {skill.level}%
                </span>
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
