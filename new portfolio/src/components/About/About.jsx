import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about} aria-labelledby="about-heading">
      <div className={styles.inner}>

        {/* Section label */}
        <p className="section-label" aria-hidden="true">§ 01 — About</p>

        <div className={styles.grid}>

          {/* Left: prose bio */}
          <div className={styles.bio}>
            <h2 id="about-heading" className={`h2 ${styles.bioHeading}`}>
              Second year. Backend-first.
              <br />Not a typical AI portfolio.
            </h2>

            <p className={styles.bioText}>
              I&apos;m Sanket Botre, studying AI &amp; Machine Learning at Vishwakarma
              Institute of Technology (VIT) Pune, Class of 2028. My work sits at
              the boundary between backend engineering and applied machine learning
              — which means I care about the database schema and the API contract
              as much as the model accuracy. Probably more.
            </p>

            <p className={styles.bioText}>
              Most of what I build starts with a systems question: what&apos;s the
              right data model? What breaks first at scale? How does the ML
              component integrate without becoming a single point of failure? The
              Agroassist project that got to 94% accuracy started as a
              schema design exercise — the model came later, built on top of a
              foundation that could actually support it.
            </p>

            <p className={styles.bioText}>
              Outside of engineering: cricket (watching and playing), music, and
              long walks that occasionally produce good ideas. Rarely in that
              order.
            </p>

            {/* Small inline divider with annotation */}
            <p className={`${styles.note} annotation`} aria-hidden="true">
              // currently: 3rd year · open to internships · backend / systems roles
            </p>
          </div>

          {/* Right: annotation margin column */}
          <aside className={styles.marginCol} aria-label="Profile annotations">
            <dl className={styles.annotList}>
              <div className={styles.annotItem}>
                <dt className={`${styles.annotLabel} annotation`}>Institute</dt>
                <dd className={`${styles.annotValue} annotation`}>VIT Pune</dd>
              </div>
              <div className={styles.annotItem}>
                <dt className={`${styles.annotLabel} annotation`}>Program</dt>
                <dd className={`${styles.annotValue} annotation`}>B.Tech CSE(AI &amp; ML)</dd>
              </div>
              <div className={styles.annotItem}>
                <dt className={`${styles.annotLabel} annotation`}>Batch</dt>
                <dd className={`${styles.annotValue} annotation annotation--copper`}>Class of 2028</dd>
              </div>
              <div className={styles.annotItem}>
                <dt className={`${styles.annotLabel} annotation`}>Location</dt>
                <dd className={`${styles.annotValue} annotation`}>Pune, IN</dd>
              </div>
              <div className={styles.annotItem}>
                <dt className={`${styles.annotLabel} annotation`}>Hackathons</dt>
                <dd className={`${styles.annotValue} annotation annotation--copper`}>3×</dd>
              </div>
              <div className={styles.annotItem}>
                <dt className={`${styles.annotLabel} annotation`}>Focus</dt>
                <dd className={`${styles.annotValue} annotation`}>Backend · Systems · ML</dd>
              </div>
              <div className={styles.annotItem}>
                <dt className={`${styles.annotLabel} annotation`}>Off-hours</dt>
                <dd className={`${styles.annotValue} annotation`}>Cricket · Music · Walks</dd>
              </div>
            </dl>
          </aside>

        </div>
      </div>
    </section>
  );
}
