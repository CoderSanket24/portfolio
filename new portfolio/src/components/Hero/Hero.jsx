import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero} aria-label="Introduction">
      <div className={styles.inner}>

        {/* Left: main content */}
        <div className={styles.content}>

          {/* Clear greeting */}
          <p className={styles.greeting}>
            Hello<span className={styles.orangeDot}>.</span>
          </p>

          <p className={styles.intro}>
            I&apos;m Sanket Botre
          </p>

          <h1 className={styles.name}>
            Software Developer
          </h1>

          {/* Clear call-to-action buttons */}
          <div className={styles.actions}>
            <a href="#contact" className={styles.actionPrimary}>
              Got a project?
            </a>
            <a href="#work" className={styles.actionSecondary}>
              My resume
            </a>
          </div>
        </div>

        {/* Right: profile image with decorative circle */}
        <aside className={styles.imageSection} aria-label="Profile photo">
          <div className={styles.imageContainer}>
            <div className={styles.decorativeCircle} aria-hidden="true" />
            <div className={styles.imagePlaceholder}>
              {/* Placeholder for profile photo */}
              <div className={styles.photoFrame}></div>
            </div>
            <div className={styles.geometricLines} aria-hidden="true">
              <span className={styles.bracket}>{'<'}</span>
              <span className={styles.bracket}>{'>'}</span>
            </div>
          </div>
        </aside>

      </div>

      {/* Tech stack tags below hero */}
      <div className={styles.techStack}>
        <div className={styles.techTags}>
          <span className={styles.techTag}>HTML5</span>
          <span className={styles.techTag}>CSS</span>
          <span className={styles.techTag}>Javascript</span>
          <span className={styles.techTag}>Node.js</span>
          <span className={styles.techTag}>React</span>
          <span className={styles.techTag}>Git</span>
          <span className={styles.techTag}>Github</span>
        </div>
      </div>
    </section>
  );
}
