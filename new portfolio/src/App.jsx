import { useState, useCallback } from 'react';
import SkipLink from './components/SkipLink/SkipLink';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import SkillsWorkbench from './components/SkillsWorkbench/SkillsWorkbench';
import Achievements from './components/Achievements/Achievements';
import ProjectCaseStudy from './components/ProjectCaseStudy/ProjectCaseStudy';
import ProjectCard from './components/ProjectCard/ProjectCard';
import ProjectModal from './components/ProjectModal/ProjectModal';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import { caseStudies, secondaryProjects } from './data/projects';
import styles from './App.module.css';

export default function App() {
  // Modal state: which secondary project is open, and which card triggered it
  const [activeProject, setActiveProject] = useState(null);
  const [triggerRef, setTriggerRef] = useState(null);

  const handleCardClick = useCallback((project, ref) => {
    setActiveProject(project);
    setTriggerRef(ref);
  }, []);

  const handleModalClose = useCallback(() => {
    setActiveProject(null);
    setTriggerRef(null);
  }, []);

  return (
    <>
      {/* Skip link — must be first focusable element */}
      <SkipLink />

      {/* Navigation */}
      <Nav />

      {/* Main content */}
      <main id="main-content" tabIndex={-1}>

        {/* § 00 — Hero */}
        <Hero />

        {/* § 01 — About */}
        <About />

        {/* § 02 — Achievements */}
        <Achievements />

        {/* § 03 — Workbenches (Skills) */}
        <SkillsWorkbench />

        {/* § 04 — Work */}
        <section id="work" className={styles.workSection} aria-labelledby="work-heading">
          <div className={styles.workInner}>
            <p className="section-label" aria-hidden="true">§ 04 — Work</p>
            <h2 id="work-heading" className={styles.workHeading}>
              Selected projects
            </h2>
            <p className={styles.workSubheading}>
              Two full case studies followed by a broader project inventory.
              Click any card for full detail.
            </p>

            {/* Full depth case studies */}
            <div className={styles.caseStudies}>
              {caseStudies.map((project, i) => (
                <ProjectCaseStudy key={project.id} project={project} index={i} />
              ))}
            </div>

            {/* Secondary project grid */}
            <div className={styles.secondarySection}>
              <h3 className={styles.secondaryHeading}>
                <span className="annotation" aria-hidden="true">↓ </span>
                More projects
              </h3>
              <div className={styles.projectGrid}>
                {secondaryProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onClick={handleCardClick}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* § 05 — Contact */}
        <Contact />

      </main>

      {/* Footer */}
      <Footer />

      {/* Project detail modal — rendered at root level, outside main,
          so it's not clipped by any overflow:hidden ancestors */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={handleModalClose}
          triggerRef={triggerRef}
        />
      )}
    </>
  );
}
