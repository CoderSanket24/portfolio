import React, { useState } from "react";
import ProjectCard from "./ui/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import wildlifeImage from "../assets/image.png";
import spaceGameImage from "../assets/spacegame.png";

interface Project {
  title: string;
  desc: string;
  link: string;
  image: string;
  tags: string[];
  category: string;
}

const allProjects: Project[] = [
  {
    title: "WildGuard Sanctuary Database Management System",
    desc: "A comprehensive database management system for wildlife sanctuaries to track animals, manage conservation efforts, and monitor ecosystem health.",
    link: "#",
    image: wildlifeImage,
    tags: ["MySQL", "PHP", "Bootstrap", "Database Design"],
    category: "Web Development",
  },
  {
    title: "Space Shooter Game",
    desc: "An engaging 2D space shooter game with dynamic enemies, power-ups, and smooth gameplay mechanics built using Python and Pygame.",
    link: "#",
    image: spaceGameImage,
    tags: ["Python", "Pygame", "Game Development", "OOP"],
    category: "Game Development",
  },
  {
    title: "Pothole Detection",
    desc: "An AI-powered solution using YOLOv8 to detect potholes from road images in real-time.",
    link: "#",
    image: "",
    tags: ["YOLOv8", "Python", "Computer Vision"],
    category: "AI/ML",
  },
  {
    title: "Agri Chatbot",
    desc: "A voice-enabled, multilingual advisory system to help farmers with their queries.",
    link: "#",
    image: "",
    tags: ["NLP", "React", "Firebase"],
    category: "AI/ML",
  },
];

const categories = ["All", "Web Development", "AI/ML", "Game Development"];

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All"
    ? allProjects
    : allProjects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            My <span className="gradient-text-blue">Projects</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            A collection of projects that showcase my passion for technology and problem-solving
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((cat, index) => (
            <motion.button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeFilter === cat
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                : "glass-dark text-gray-300 hover:text-white hover:border-blue-500"
                }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard
                  title={project.title}
                  desc={project.desc}
                  link={project.link}
                  image={project.image}
                  tags={project.tags}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="glass-dark p-8 rounded-3xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Want to see more?</h3>
            <p className="text-gray-400 mb-6">
              Check out my GitHub for more projects and contributions to open source
            </p>
            <motion.a
              href="https://github.com/CoderSanket24"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 btn-primary px-6 py-3 rounded-full font-semibold"
            >
              <FaGithub size={20} />
              View GitHub
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
