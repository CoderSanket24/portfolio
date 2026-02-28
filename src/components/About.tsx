import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedSkills from "./AnimatedSkills";
import Scene3DSelector from "./3D/Scene3DSelector";
import TextReveal from "./TextReveal";
import InteractiveCard from "./InteractiveCard";

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

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - About Text */}
          <InteractiveCard>
            <motion.div
              variants={containerVariants}
              className="glass-dark p-8 rounded-3xl"
            >
              <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Who I Am</h3>
              <TextReveal 
                text="I'm Sanket, a passionate student and developer who thrives on building innovative solutions."
                className="text-lg text-gray-300 leading-relaxed mb-6"
              />
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                My journey spans across <span className="text-cyan-400 font-semibold">Web Development</span>,
                <span className="text-purple-400 font-semibold"> AI/ML</span>, and
                <span className="text-pink-400 font-semibold"> Game Development</span>.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I believe in the power of technology to solve real-world problems and create meaningful impact.
                Every project I work on is an opportunity to learn something new and push the boundaries of what's possible.
              </p>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center pulse-glow">
                  <span className="text-xl font-bold">🚀</span>
                </div>
                <div>
                  <p className="font-semibold text-cyan-400">Always Learning</p>
                  <p className="text-gray-400 text-sm">Staying curious and exploring new technologies</p>
                </div>
              </motion.div>
            </motion.div>
          </InteractiveCard>

          {/* Right Column - 3D Scene */}
          <motion.div
            variants={containerVariants}
            className="glass-dark p-8 rounded-3xl"
          >
            <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent text-center">My Tech Universe</h3>
            <Scene3DSelector />
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          variants={containerVariants}
          className="mb-16"
        >
          <h3 className="text-3xl font-semibold mb-8 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">My Skills</h3>
          <AnimatedSkills />
        </motion.div>

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
