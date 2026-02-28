import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  SiReact, SiTypescript, SiPython, SiFastapi, 
  SiPostgresql, SiJavascript, SiExpress, SiNodedotjs,
  SiTailwindcss
} from 'react-icons/si';

const skills = [
  { name: 'React', icon: SiReact, color: '#61DAFB', level: 90 },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', level: 85 },
  { name: 'Python', icon: SiPython, color: '#3776AB', level: 88 },
  { name: 'FastAPI', icon: SiFastapi, color: '#009688', level: 80 },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', level: 75 },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', level: 92 },
  { name: 'Express.js', icon: SiExpress, color: '#000000', level: 82 },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933', level: 85 },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4', level: 95 },
];

export default function AnimatedSkills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
      {skills.map((skill, index) => {
        const Icon = skill.icon;
        return (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            onHoverStart={() => setHoveredSkill(skill.name)}
            onHoverEnd={() => setHoveredSkill(null)}
            className="relative group"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 10 }}
              className="glass-dark p-6 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px',
              }}
            >
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at center, ${skill.color}20, transparent)`,
                  filter: 'blur(20px)',
                }}
              />

              <div className="relative z-10 flex flex-col items-center space-y-3">
                <motion.div
                  animate={{
                    rotateY: hoveredSkill === skill.name ? 360 : 0,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon 
                    size={48} 
                    style={{ color: skill.color }}
                    className="drop-shadow-lg"
                  />
                </motion.div>
                
                <span className="text-sm font-semibold text-white">
                  {skill.name}
                </span>

                {/* Skill level bar */}
                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                    }}
                  />
                </div>
                
                <span className="text-xs text-gray-400">{skill.level}%</span>
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
