import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero} aria-label="Introduction">
      <div className={styles.inner}>

        {/* Left: main content */}
        <div className={styles.content}>

          {/* Notebook cover header */}
          <p className={`${styles.pageMarker} annotation`} aria-hidden="true">
            // portfolio · 2026
          </p>

          <h1 className={styles.name}>
            Sanket<br />Botre
          </h1>

          {/* Role line with copper static underline on the key term */}
          <p className={styles.role}>
            <span className={styles.roleHighlight}>
              Backend &amp; Systems Engineer
              {/* Static SVG copper underline — not animated, just a handmade annotation mark */}
              <svg
                className={styles.underlineSvg}
                viewBox="0 0 260 10"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M2 7 C 60 3, 130 9, 258 5"
                  stroke="var(--copper)"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </p>

          <p className={styles.positioning}>
            Building data-dense systems at the intersection of backend
            architecture and applied ML. Currently at VIT Pune — 2nd year,
            AI &amp; Data Science.
          </p>

          {/* CTA links — plain text style, no pill buttons */}
          <div className={styles.actions}>
            <a href="#work" className={styles.actionPrimary}>
              view work →
            </a>
            <a href="#contact" className={styles.actionSecondary}>
              get in touch
            </a>
          </div>
        </div>

        {/* Right: annotation column */}
        <aside className={styles.annotations} aria-label="Quick facts">
          <div className={styles.annotationBlock}>
            <span className={`${styles.annotTag} annotation`}>// VIT Pune</span>
            <span className={`${styles.annotTag} annotation`}>// Class of 2026</span>
            <span className={`${styles.annotTag} annotation`}>// Pune, IN</span>
            <span className={`${styles.annotTag} annotation`}>// 3× hackathon</span>
            <span className={`${styles.annotTag} annotation`}>// backend-first</span>
          </div>

          {/* Small decorative grid mark — consistent with notebook aesthetic */}
          <div className={styles.gridMark} aria-hidden="true">
            <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="20" x2="60" y2="20" stroke="var(--steel-faint)" strokeWidth="1"/>
              <line x1="0" y1="40" x2="60" y2="40" stroke="var(--steel-faint)" strokeWidth="1"/>
              <line x1="20" y1="0" x2="20" y2="60" stroke="var(--steel-faint)" strokeWidth="1"/>
              <line x1="40" y1="0" x2="40" y2="60" stroke="var(--steel-faint)" strokeWidth="1"/>
              <circle cx="20" cy="20" r="2" fill="var(--copper)" opacity="0.6"/>
              <circle cx="40" cy="40" r="2" fill="var(--copper)" opacity="0.6"/>
            </svg>
          </div>
        </aside>

      </div>

      {/* Horizontal rule — drafting divider */}
      <div className={styles.divider} aria-hidden="true" />
    </section>
  );
}
