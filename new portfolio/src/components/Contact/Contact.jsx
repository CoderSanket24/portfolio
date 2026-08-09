import styles from './Contact.module.css';

export default function Contact() {
  const emailUser   = 'sanketbotre24';
  const emailDomain = 'gmail.com';
  const emailAddr   = [emailUser, emailDomain].join('@');

  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-heading">
      <div className={styles.inner}>

        <p className="section-label" aria-hidden="true">§ 05 — Contact</p>

        <div className={styles.grid}>
          <div className={styles.left}>
            <h2 id="contact-heading" className={styles.heading}>
              Let&apos;s talk systems.
            </h2>
            <p className={styles.body}>
              Open to backend engineering internships, collaborative projects,
              and honest conversations about technical problems.
              No unsolicited recruitment templates.
            </p>
          </div>

          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <span className={`${styles.linkLabel} annotation`}>Email</span>
              {/* Replace the placeholder below with the JS-constructed mailto approach documented above */}
              <span className={styles.placeholder} aria-label="Email address — to be filled in">
                <a href={`mailto:${emailAddr}`}>{emailAddr}</a>
              </span>
            </div>

            <div className={styles.linkGroup}>
              <span className={`${styles.linkLabel} annotation`}>GitHub</span>
              <a
                href="https://github.com/CoderSanket24"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile — CoderSanket24"
              >
                github.com/<span className={styles.linkHandle}>CoderSanket24</span>
              </a>
            </div>

            <div className={styles.linkGroup}>
              <span className={`${styles.linkLabel} annotation`}>LinkedIn</span>
              <a
                href="https://linkedin.com/in/sanket-botre-568a44320"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile — sanket-botre-568a44320"
              >
                linkedin.com/in/<span className={styles.linkHandle}>sanket-botre-568a44320</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
