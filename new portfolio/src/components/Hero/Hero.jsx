import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero} aria-label="Introduction">
      <div className={styles.inner}>

        {/* Left: text content */}
        <div className={styles.content}>
          <p className={styles.greeting}>
            Hello<span className={styles.orangeDot}>●</span>
          </p>

          <p className={styles.intro}>
            I&apos;m Sanket Botre
          </p>

          <h1 className={styles.headline}>
            Software Developer
          </h1>

          <div className={styles.actions}>
            <a href="#contact" className={styles.btnPrimary}>
              Got a project?
            </a>
            <a href="/resume.pdf" className={styles.btnSecondary}>
              My resume
            </a>
          </div>
        </div>

        {/* Right: profile image with decorative circle */}
        <div className={styles.visualSection}>
          <div className={styles.imageWrapper}>
            <div className={styles.circleFrame} aria-hidden="true"></div>
            <div className={styles.profileImage}>
              {/* Profile photo placeholder */}
            </div>
            <div className={styles.brackets} aria-hidden="true">
              <span className={styles.bracketLeft}>{'<'}</span>
              <span className={styles.bracketRight}>{'>'}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
