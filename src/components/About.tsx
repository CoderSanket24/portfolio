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
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">Who I Am</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm Sanket, a passionate student and developer who thrives on building innovative solutions. 
              My journey spans across <span className="text-blue-400 font-semibold">Web Development</span>, 
              <span className="text-purple-400 font-semibold"> AI/ML</span>, and 
              <span className="text-green-400 font-semibold"> Robotics</span>.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I believe in the power of technology to solve real-world problems and create meaningful impact. 
              Every project I work on is an opportunity to learn something new and push the boundaries of what's possible.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold">🚀</span>
              </div>
              <div>
                <p className="font-semibold text-blue-400">Always Learning</p>
                <p className="text-gray-400 text-sm">Staying curious and exploring new technologies</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            variants={containerVariants}
            className="glass-dark p-8 rounded-3xl"
          >
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">My Skills</h3>
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
                    scale: 1.05, 
                    y: -5,
                    boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
                  }}
                  className="group relative"
                >
                  <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-4 rounded-xl border border-gray-600 hover:border-blue-500 transition-all duration-300 cursor-pointer">
                    <span className="text-sm font-medium text-center block group-hover:text-blue-400 transition-colors duration-300">
                      {skill}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">10+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">1+</div>
                <div className="text-sm text-gray-400">Years Learning</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">∞</div>
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
          <div className="glass-dark p-6 rounded-2xl text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
              <span className="text-2xl">💻</span>
            </div>
            <h4 className="text-xl font-semibold mb-2 text-blue-400">Web Development</h4>
            <p className="text-gray-400 text-sm">Building responsive and interactive web applications with modern frameworks</p>
          </div>

          <div className="glass-dark p-6 rounded-2xl text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
              <span className="text-2xl">🤖</span>
            </div>
            <h4 className="text-xl font-semibold mb-2 text-purple-400">AI/ML</h4>
            <p className="text-gray-400 text-sm">Developing intelligent systems and machine learning models for real-world applications</p>
          </div>

          <div className="glass-dark p-6 rounded-2xl text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
              <span className="text-2xl">⚙️</span>
            </div>
            <h4 className="text-xl font-semibold mb-2 text-green-400">Robotics</h4>
            <p className="text-gray-400 text-sm">Creating autonomous systems and exploring the intersection of hardware and software</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
