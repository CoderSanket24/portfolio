import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about} aria-labelledby="about-heading">
      <div className={styles.inner}>

        {/* Section label */}
        <p className="section-label" aria-hidden="true">About Me</p>

        <div className={styles.grid}>

          {/* Left: prose bio */}
          <div className={styles.bio}>
            <h2 id="about-heading" className={`h2 ${styles.bioHeading}`}>
              I Build Backend Systems That Scale
            </h2>

            <p className={styles.bioText}>
              <strong>Who I Am:</strong> I&apos;m Sanket Botre, a 3rd-year student at VIT Pune 
              studying AI & Machine Learning. Unlike most AI students, I focus heavily on 
              backend engineering and system architecture.
            </p>

            <p className={styles.bioText}>
              <strong>What I Do:</strong> I design and build scalable backend systems that 
              integrate machine learning. I care about database design, API architecture, 
              and how systems perform under load—not just model accuracy.
            </p>

            <p className={styles.bioText}>
              <strong>My Approach:</strong> Every project starts with the fundamentals: 
              What&apos;s the right data structure? How will this scale? Can the system 
              handle failures gracefully? My Agroassist project achieving 94% accuracy 
              started with solid database design—the ML model came after the foundation 
              was ready.
            </p>

            <p className={styles.bioText}>
              <strong>Beyond Coding:</strong> When I&apos;m not programming, you&apos;ll 
              find me playing cricket, listening to music, or taking long walks that 
              sometimes lead to breakthrough ideas.
            </p>

            {/* Clear status indicator */}
            <div className={styles.statusBanner}>
              <span className={styles.statusDot}>●</span>
              <strong>Currently seeking internships</strong> in Backend Development & Systems Engineering
            </div>
          </div>

          {/* Right: at-a-glance info cards */}
          <aside className={styles.marginCol} aria-label="Profile snapshot">
            <div className={styles.infoCard}>
              <h3 className={styles.infoCardTitle}>📚 Education</h3>
              <p><strong>VIT Pune</strong></p>
              <p>B.Tech in AI & ML</p>
              <p>Class of 2028</p>
            </div>

            <div className={styles.infoCard}>
              <h3 className={styles.infoCardTitle}>💼 Skills</h3>
              <p>• Backend Development</p>
              <p>• System Architecture</p>
              <p>• Database Design</p>
              <p>• ML Integration</p>
              <p>• API Development</p>
            </div>

            <div className={styles.infoCard}>
              <h3 className={styles.infoCardTitle}>🏆 Achievements</h3>
              <p><strong>3× Hackathon Winner</strong></p>
              <p>Multiple Projects</p>
              <p>94% ML Accuracy</p>
            </div>

            <div className={styles.infoCard}>
              <h3 className={styles.infoCardTitle}>📍 Location</h3>
              <p>Pune, India</p>
            </div>
          </aside>

        </div>
      </div>
    </section>
  );
}
