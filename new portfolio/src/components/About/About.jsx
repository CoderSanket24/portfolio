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

          {/* Bio text */}
          <div className={styles.bio}>
            <p className={styles.bioText}>
              I started my software journey from photography. Through that, I learned to love 
              the process of creating from scratch. Since then, this has led me to software 
              development as it fulfills my love for learning and building things.
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
