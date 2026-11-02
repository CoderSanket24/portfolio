import styles from './Achievements.module.css';

export default function Achievements() {
  return (
    <section
      id="services"
      className={styles.section}
      aria-labelledby="services-heading"
    >
      <div className={styles.inner}>

        <h2 id="services-heading" className={styles.heading}>
          Services & Offerings
        </h2>

        {/* Vertical timeline with service cards */}
        <div className={styles.timeline}>
          {/* Website Development */}
          <div className={styles.entry}>
            <div className={styles.timelineCol} aria-hidden="true">
              <div className={styles.marker} />
              <div className={styles.line} />
            </div>

            <article className={styles.entryContent}>
              <div className={styles.iconContainer}>
                <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="2" y1="21" x2="22" y2="21" />
                  <line x1="8" y1="17" x2="8" y2="21" />
                  <line x1="16" y1="17" x2="16" y2="21" />
                </svg>
              </div>
              <h3 className={styles.serviceTitle}>Website Development</h3>
              <p className={styles.serviceDescription}>
                Building responsive, modern websites with clean code and great user experience.
              </p>
            </article>
          </div>

          {/* App Development */}
          <div className={styles.entry}>
            <div className={styles.timelineCol} aria-hidden="true">
              <div className={styles.marker} />
              <div className={styles.line} />
            </div>

            <article className={styles.entryContent}>
              <div className={styles.iconContainer}>
                <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="5" y="2" width="14" height="20" rx="2" />
                  <line x1="12" y1="18" x2="12" y2="18" />
                </svg>
              </div>
              <h3 className={styles.serviceTitle}>App Development</h3>
              <p className={styles.serviceDescription}>
                Creating mobile and web applications with modern frameworks and best practices.
              </p>
            </article>
          </div>

          {/* Website Hosting */}
          <div className={styles.entry}>
            <div className={styles.timelineCol} aria-hidden="true">
              <div className={styles.marker} />
            </div>

            <article className={styles.entryContent}>
              <div className={styles.iconContainer}>
                <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="8" rx="2" />
                  <rect x="2" y="14" width="20" height="8" rx="2" />
                  <line x1="6" y1="6" x2="6" y2="6" />
                  <line x1="6" y1="18" x2="6" y2="18" />
                </svg>
              </div>
              <h3 className={styles.serviceTitle}>Website Hosting</h3>
              <p className={styles.serviceDescription}>
                Reliable hosting solutions with performance optimization and security.
              </p>
            </article>
          </div>
        </div>

      </div>
    </section>
  );
}
