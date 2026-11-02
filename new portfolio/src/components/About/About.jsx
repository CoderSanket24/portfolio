import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about} aria-labelledby="about-heading">
      <div className={styles.inner}>

        {/* Section label */}
        <h2 id="about-heading" className={styles.heading}>
          About me
        </h2>

        <div className={styles.grid}>

          {/* Left: prose bio */}
          <div className={styles.bio}>
            <p className={styles.bioText}>
              I&apos;m Sanket Botre, a 3rd-year student at VIT Pune 
              studying AI & Machine Learning. Unlike most AI students, I focus heavily on 
              backend engineering and system architecture.
            </p>

            <p className={styles.bioText}>
              I design and build scalable backend systems that 
              integrate machine learning. I care about database design, API architecture, 
              and how systems perform under load—not just model accuracy.
            </p>

            <p className={styles.bioText}>
              Every project starts with the fundamentals: 
              What&apos;s the right data structure? How will this scale? Can the system 
              handle failures gracefully? My Agroassist project achieving 94% accuracy 
              started with solid database design—the ML model came after the foundation 
              was ready.
            </p>
          </div>

        </div>

        {/* Stats boxes */}
        <div className={styles.stats}>
          <div className={styles.statBox}>
            <div className={styles.statNumber}>
              120<span className={styles.statSymbol}>+</span>
            </div>
            <div className={styles.statLabel}>Completed Projects</div>
          </div>

          <div className={styles.statBox}>
            <div className={styles.statNumber}>
              95<span className={styles.statSymbol}>%</span>
            </div>
            <div className={styles.statLabel}>Client satisfaction</div>
          </div>

          <div className={styles.statBox}>
            <div className={styles.statNumber}>
              10<span className={styles.statSymbol}>+</span>
            </div>
            <div className={styles.statLabel}>Years of experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}
