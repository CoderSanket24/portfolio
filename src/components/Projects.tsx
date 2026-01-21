import React, { useState, useEffect, useCallback } from "react";
import ProjectCard from "./ui/ProjectCard";
import { motion } from "framer-motion";
import { FaGithub, FaChevronLeft, FaChevronRight, FaPause, FaPlay } from "react-icons/fa";
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const filteredProjects = activeFilter === "All"
    ? allProjects
    : allProjects.filter(p => p.category === activeFilter);

  // Reset to first slide when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeFilter]);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || filteredProjects.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, filteredProjects.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  }, [filteredProjects.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  }, [filteredProjects.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  // Get the indices for prev, current, and next cards
  const getPrevIndex = () => (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
  const getNextIndex = () => (currentIndex + 1) % filteredProjects.length;

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

        {/* 3D Carousel Container */}
        <div className="relative w-full mb-12 px-4 md:px-0">
          <div
            className="relative h-[600px] flex items-center justify-center"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Previous Card (Left) - Faded */}
            {filteredProjects.length > 1 && (
              <motion.div
                key={`prev-${getPrevIndex()}`}
                initial={{ opacity: 0, x: -100, scale: 0.8 }}
                animate={{
                  opacity: 0.3,
                  x: 0,
                  scale: 0.8,
                  zIndex: 1
                }}
                transition={{ duration: 0.5 }}
                className="absolute left-0 md:left-10 w-[280px] md:w-[320px] pointer-events-none"
                style={{ filter: 'blur(2px)' }}
              >
                <ProjectCard
                  title={filteredProjects[getPrevIndex()].title}
                  desc={filteredProjects[getPrevIndex()].desc}
                  link={filteredProjects[getPrevIndex()].link}
                  image={filteredProjects[getPrevIndex()].image}
                  tags={filteredProjects[getPrevIndex()].tags}
                />
              </motion.div>
            )}

            {/* Current Card (Center) - Fully Visible */}
            <motion.div
              key={`current-${currentIndex}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                zIndex: 10
              }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
              className="relative w-full max-w-[400px] md:max-w-[500px] mx-auto"
            >
              <ProjectCard
                title={filteredProjects[currentIndex].title}
                desc={filteredProjects[currentIndex].desc}
                link={filteredProjects[currentIndex].link}
                image={filteredProjects[currentIndex].image}
                tags={filteredProjects[currentIndex].tags}
              />
            </motion.div>

            {/* Next Card (Right) - Faded */}
            {filteredProjects.length > 1 && (
              <motion.div
                key={`next-${getNextIndex()}`}
                initial={{ opacity: 0, x: 100, scale: 0.8 }}
                animate={{
                  opacity: 0.3,
                  x: 0,
                  scale: 0.8,
                  zIndex: 1
                }}
                transition={{ duration: 0.5 }}
                className="absolute right-0 md:right-10 w-[280px] md:w-[320px] pointer-events-none"
                style={{ filter: 'blur(2px)' }}
              >
                <ProjectCard
                  title={filteredProjects[getNextIndex()].title}
                  desc={filteredProjects[getNextIndex()].desc}
                  link={filteredProjects[getNextIndex()].link}
                  image={filteredProjects[getNextIndex()].image}
                  tags={filteredProjects[getNextIndex()].tags}
                />
              </motion.div>
            )}
          </div>

          {/* Navigation Buttons */}
          {filteredProjects.length > 1 && (
            <>
              <motion.button
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
                onClick={goToPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 glass-dark p-4 rounded-full hover:bg-blue-500/20 transition-all duration-300 group"
                aria-label="Previous project"
              >
                <FaChevronLeft className="text-2xl text-blue-400 group-hover:text-blue-300" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 glass-dark p-4 rounded-full hover:bg-blue-500/20 transition-all duration-300 group"
                aria-label="Next project"
              >
                <FaChevronRight className="text-2xl text-blue-400 group-hover:text-blue-300" />
              </motion.button>
            </>
          )}
        </div>

        {/* Pagination Dots */}
        {filteredProjects.length > 1 && (
          <div className="flex justify-center items-center gap-3 mb-6">
            {filteredProjects.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`transition-all duration-300 rounded-full ${index === currentIndex
                  ? "w-12 h-3 bg-gradient-to-r from-blue-500 to-purple-600"
                  : "w-3 h-3 bg-gray-600 hover:bg-gray-500"
                  }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Auto-play Control */}
        {filteredProjects.length > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center mb-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleAutoPlay}
              className="glass-dark px-6 py-3 rounded-full flex items-center gap-2 hover:bg-blue-500/20 transition-all duration-300"
            >
              {isAutoPlaying ? (
                <>
                  <FaPause className="text-blue-400" />
                  <span className="text-sm font-medium">Pause</span>
                </>
              ) : (
                <>
                  <FaPlay className="text-blue-400" />
                  <span className="text-sm font-medium">Play</span>
                </>
              )}
            </motion.button>
          </motion.div>
        )}

        {/* Project Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-12"
        >
          <p className="text-gray-400 text-sm">
            Project <span className="text-blue-400 font-semibold">{currentIndex + 1}</span> of{" "}
            <span className="text-blue-400 font-semibold">{filteredProjects.length}</span>
          </p>
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
