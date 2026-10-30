import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero} aria-label="Introduction">
      <div className={styles.inner}>

        {/* Left: main content */}
        <div className={styles.content}>

          {/* Clear greeting */}
          <p className={`${styles.pageMarker} annotation`} aria-hidden="true">
            👋 Hi, I&apos;m
          </p>

          <h1 className={styles.name}>
            Sanket Botre
          </h1>

          {/* Clear role statement */}
          <p className={styles.role}>
            <span className={styles.roleHighlight}>
              Backend Engineer & AI Student
            </span>
          </p>

          <p className={styles.positioning}>
            I build scalable backend systems and integrate AI/ML solutions.
            <br />
            <strong>3rd Year B.Tech Student</strong> at VIT Pune studying AI & Machine Learning.
            <br />
            <strong>Open for internships</strong> in Backend Development & Systems Engineering.
          </p>

          {/* Clear call-to-action buttons */}
          <div className={styles.actions}>
            <a href="#work" className={styles.actionPrimary}>
              See My Projects
            </a>
            <a href="#contact" className={styles.actionSecondary}>
              Contact Me
            </a>
          </div>
        </div>

        {/* Right: key highlights in plain language */}
        <aside className={styles.annotations} aria-label="Quick facts">
          <div className={styles.annotationBlock}>
            <div className={styles.highlightCard}>
              <strong className={styles.highlightTitle}>🎓 Education</strong>
              <p className={styles.highlightText}>VIT Pune</p>
              <p className={styles.highlightText}>AI & ML · Class of 2028</p>
            </div>
            
            <div className={styles.highlightCard}>
              <strong className={styles.highlightTitle}>💻 Focus Areas</strong>
              <p className={styles.highlightText}>Backend Development</p>
              <p className={styles.highlightText}>System Design</p>
              <p className={styles.highlightText}>ML Integration</p>
            </div>
            
            <div className={styles.highlightCard}>
              <strong className={styles.highlightTitle}>🏆 Experience</strong>
              <p className={styles.highlightText}>3× Hackathon Winner</p>
              <p className={styles.highlightText}>Multiple Projects</p>
            </div>
          </div>
        </aside>

      </div>

      {/* Horizontal rule — drafting divider */}
      <div className={styles.divider} aria-hidden="true" />
    </section>
  );
}
