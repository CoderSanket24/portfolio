import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills: string[] = ["React", "TypeScript", "Python", "FastAPI", "YOLOv8", "PostgreSQL", "JavaScript", "Express.js", "Node.js"];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const skillsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const skillItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const About: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white flex items-center justify-center py-20 px-4">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.h2
            variants={containerVariants}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            About <span className="gradient-text-blue">Me</span>
          </motion.h2>
          <motion.div
            variants={containerVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - About Text */}
          <motion.div
            variants={containerVariants}
            className="glass-dark p-8 rounded-3xl"
          >
            <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Who I Am</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm Sanket, a passionate student and developer who thrives on building innovative solutions.
              My journey spans across <span className="text-cyan-400 font-semibold">Web Development</span>,
              <span className="text-purple-400 font-semibold"> AI/ML</span>, and
              <span className="text-pink-400 font-semibold"> Game Development</span>.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I believe in the power of technology to solve real-world problems and create meaningful impact.
              Every project I work on is an opportunity to learn something new and push the boundaries of what's possible.
            </p>
            <div className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center pulse-glow">
                <span className="text-xl font-bold">🚀</span>
              </div>
              <div>
                <p className="font-semibold text-cyan-400">Always Learning</p>
                <p className="text-gray-400 text-sm">Staying curious and exploring new technologies</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            variants={containerVariants}
            className="glass-dark p-8 rounded-3xl"
          >
            <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">My Skills</h3>
            <motion.div
              variants={skillsContainerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4"
            >
              {skills.map((skill, i) => (
                <motion.div
                  key={i}
                  variants={skillItemVariants}
                  whileHover={{
                    scale: 1.08,
                    y: -8,
                    boxShadow: "0 15px 30px rgba(6, 182, 212, 0.4)"
                  }}
                  className="group relative"
                >
                  <div className="bg-gradient-to-br from-gray-800/80 to-gray-700/80 p-4 rounded-xl border border-gray-600 hover:border-cyan-500 hover:bg-gradient-to-br hover:from-cyan-500/10 hover:to-blue-500/10 transition-all duration-300 cursor-pointer relative overflow-hidden">
                    <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="text-sm font-medium text-center block group-hover:text-cyan-400 transition-colors duration-300 relative z-10">
                      {skill}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center p-3 rounded-xl bg-cyan-500/5 border border-cyan-500/20 hover:bg-cyan-500/10 transition-all duration-300">
                <div className="text-2xl font-bold text-cyan-400">10+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center p-3 rounded-xl bg-purple-500/5 border border-purple-500/20 hover:bg-purple-500/10 transition-all duration-300">
                <div className="text-2xl font-bold text-purple-400">1+</div>
                <div className="text-sm text-gray-400">Years Learning</div>
              </div>
              <div className="text-center p-3 rounded-xl bg-pink-500/5 border border-pink-500/20 hover:bg-pink-500/10 transition-all duration-300">
                <div className="text-2xl font-bold text-pink-400">∞</div>
                <div className="text-sm text-gray-400">Curiosity</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section - What I Do */}
        <motion.div
          variants={containerVariants}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="glass-dark p-6 rounded-2xl text-center group hover:scale-105 transition-all duration-300 border border-transparent hover:border-cyan-500/30 card-hover">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 pulse-glow">
              <span className="text-2xl">💻</span>
            </div>
            <h4 className="text-xl font-semibold mb-2 text-cyan-400">Web Development</h4>
            <p className="text-gray-400 text-sm">Building responsive and interactive web applications with modern frameworks</p>
          </div>

          <div className="glass-dark p-6 rounded-2xl text-center group hover:scale-105 transition-all duration-300 border border-transparent hover:border-purple-500/30 card-hover">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 pulse-glow">
              <span className="text-2xl">🤖</span>
            </div>
            <h4 className="text-xl font-semibold mb-2 text-purple-400">AI/ML</h4>
            <p className="text-gray-400 text-sm">Developing intelligent systems and machine learning models for real-world applications</p>
          </div>

          <div className="glass-dark p-6 rounded-2xl text-center group hover:scale-105 transition-all duration-300 border border-transparent hover:border-pink-500/30 card-hover">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 pulse-glow">
              <span className="text-2xl">🎮</span>
            </div>
            <h4 className="text-xl font-semibold mb-2 text-pink-400">Game Development</h4>
            <p className="text-gray-400 text-sm">Creating engaging interactive experiences and games with smooth gameplay mechanics</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
