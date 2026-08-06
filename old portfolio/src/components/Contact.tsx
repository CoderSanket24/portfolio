import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";
import MagneticButton from "./MagneticButton";
import InteractiveCard from "./InteractiveCard";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const Contact: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white flex items-center justify-center py-20 px-4">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl w-full mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            variants={containerVariants}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Get In <span className="gradient-text-blue">Touch</span>
          </motion.h2>
          <motion.div
            variants={containerVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"
          />
          <motion.p
            variants={containerVariants}
            className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Let's create something incredible together!
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <InteractiveCard>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-8"
            >
            <div className="glass-dark p-8 rounded-3xl">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Let's Connect</h3>

              {/* Contact Methods */}
              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <a href="mailto:sanketbotre24@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                      sanketbotre24@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FaLinkedin size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">LinkedIn</p>
                    <a href="www.linkedin.com/in/sanket-botre-568a44320" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                      Connect with me
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FaGithub size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">GitHub</p>
                    <a href="https://github.com/CoderSanket24" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                      Check out my code
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Quick Stats */}
              <div className="mt-8 pt-6 border-t border-gray-700">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">24h</div>
                    <div className="text-sm text-gray-400">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">100%</div>
                    <div className="text-sm text-gray-400">Commitment</div>
                  </div>
                </div>
              </div>
            </div>
            </motion.div>
          </InteractiveCard>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="glass-dark p-8 rounded-3xl">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <motion.div 
                    animate={{ scale: focusedField === 'name' ? 1.02 : 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Your Name"
                      className="w-full p-4 bg-gray-800/50 rounded-xl border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                    />
                  </motion.div>
                  <motion.div 
                    animate={{ scale: focusedField === 'email' ? 1.02 : 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Your Email"
                      className="w-full p-4 bg-gray-800/50 rounded-xl border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                    />
                  </motion.div>
                </div>

                <motion.div 
                  animate={{ scale: focusedField === 'subject' ? 1.02 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Subject"
                    className="w-full p-4 bg-gray-800/50 rounded-xl border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                  />
                </motion.div>

                <motion.div 
                  animate={{ scale: focusedField === 'message' ? 1.02 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Your Message"
                    rows={6}
                    className="w-full p-4 bg-gray-800/50 rounded-xl border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 resize-none"
                  />
                </motion.div>

                <MagneticButton className="w-full btn-primary p-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2">
                  <span>Send Message</span>
                  <FaPaperPlane className="text-sm" />
                </MagneticButton>
              </form>
            </div>
          </motion.div>
        </div>


      </motion.div>
    </div>
  );
};

export default Contact;
