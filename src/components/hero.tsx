import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.3 },
  },
  tap: { scale: 0.95 },
};

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white flex items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        
        {/* Subtle Floating Orbs - More Consistent with Other Sections */}
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto"
      >
        {/* Main Hero Content in Glass Card */}
        <div className="glass-dark p-12 rounded-3xl text-center">
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="mb-8 w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 float-animation mx-auto"
          >
            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-4xl font-bold">
              S
            </div>
          </motion.div>

          <motion.h1 
            variants={itemVariants} 
            className="text-5xl md:text-7xl font-extrabold mb-6"
          >
            Hi, I'm <span className="gradient-text-blue">Sanket</span> 👋
          </motion.h1>
          
          <motion.p 
            variants={itemVariants} 
            className="text-xl md:text-2xl text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed"
          >
            Student | Developer | AI/ML Enthusiast
          </motion.p>
          
          <motion.p 
            variants={itemVariants} 
            className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Passionate about building innovative solutions with cutting-edge technology. 
            Let's create something amazing together!
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
            <motion.a
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              href="#projects"
              className="btn-primary px-8 py-4 text-white rounded-full font-bold text-lg transition-all duration-300"
            >
              View My Work
            </motion.a>
            <motion.a
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              href="#contact"
              className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-full font-bold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex space-x-6 justify-center">
            <motion.a 
              href="#" 
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 p-3 rounded-full hover:bg-white/10"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub size={28} />
            </motion.a>
            <motion.a 
              href="#" 
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 p-3 rounded-full hover:bg-white/10"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin size={28} />
            </motion.a>
            <motion.a 
              href="#" 
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 p-3 rounded-full hover:bg-white/10"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaTwitter size={28} />
            </motion.a>
          </motion.div>
        </div>

        {/* Quick Stats Section - Matching Other Sections */}
        <motion.div
          variants={containerVariants}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          <motion.div
            variants={itemVariants}
            className="glass-dark p-6 rounded-2xl text-center group hover:scale-105 transition-transform duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
              <span className="text-2xl">💻</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-blue-400">Web Development</h3>
            <p className="text-gray-400 text-sm">Building modern, responsive applications</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="glass-dark p-6 rounded-2xl text-center group hover:scale-105 transition-transform duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
              <span className="text-2xl">🤖</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-purple-400">AI/ML</h3>
            <p className="text-gray-400 text-sm">Creating intelligent solutions</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="glass-dark p-6 rounded-2xl text-center group hover:scale-105 transition-transform duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
              <span className="text-2xl">⚙️</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-green-400">Robotics</h3>
            <p className="text-gray-400 text-sm">Exploring hardware-software integration</p>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mt-12"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;

// Add this to your index.css or a global stylesheet
/*
.bg-grid-pattern {
  background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 40px 40px;
}
*/
