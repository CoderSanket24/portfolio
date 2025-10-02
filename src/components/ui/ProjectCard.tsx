import React from "react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  desc: string;
  link: string;
  image: string;
  tags: string[];
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, desc, link, image, tags }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ 
        y: -10, 
        boxShadow: "0px 25px 50px rgba(59, 130, 246, 0.15)",
        scale: 1.02
      }}
      className="group glass-dark rounded-3xl overflow-hidden flex flex-col h-full border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <motion.img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Overlay Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1 }}
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-full font-semibold hover:bg-white/30 transition-all duration-300"
          >
            View Project
          </motion.a>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6 flex-grow flex flex-col">
        <motion.h3 
          className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300"
        >
          {title}
        </motion.h3>
        
        <p className="text-gray-400 mb-4 flex-grow leading-relaxed text-sm">
          {desc}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full text-xs font-medium text-gray-300 border border-gray-600 hover:border-blue-500/50 transition-all duration-300"
            >
              {tag}
            </motion.span>
          ))}
        </div>
        
        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-700/50">
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 5 }}
            className="text-blue-400 hover:text-blue-300 font-semibold text-sm flex items-center gap-2 group/link"
          >
            View Project 
            <motion.span
              className="group-hover/link:translate-x-1 transition-transform duration-300"
            >
              →
            </motion.span>
          </motion.a>
          
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs text-gray-500">Live</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
