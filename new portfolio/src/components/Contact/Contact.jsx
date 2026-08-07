import styles from './Contact.module.css';

/**
 * Contact component.
 *
 * EMAIL OBFUSCATION NOTE (for when you fill in your real address):
 * Do NOT put the email address as plain text in the DOM.
 * Plain mailto: links are harvested by bots/scrapers.
 * Instead, construct it via JS, e.g.:
 *
 *   const addr = ['sanket', 'yourdomain.com'].join('@');
 *   <a href={`mailto:${addr}`}>{addr}</a>
 *
 * Replace [YOUR_EMAIL_USER] and [YOUR_EMAIL_DOMAIN] below with your details.
 * The construction happens at render time — no build-time exposure.
 */

export default function Contact() {
  // [YOUR_EMAIL]: un-comment and fill these in when ready
  // const emailUser   = '[YOUR_EMAIL_USER]';
  // const emailDomain = '[YOUR_EMAIL_DOMAIN]';
  // const emailAddr   = [emailUser, emailDomain].join('@');

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
                [YOUR_EMAIL] — see code comment for obfuscation approach
              </span>
            </div>

            <div className={styles.linkGroup}>
              <span className={`${styles.linkLabel} annotation`}>GitHub</span>
              <a
                href="https://github.com/[GITHUB_USERNAME]"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile — [GITHUB_USERNAME]"
              >
                github.com/<span className={styles.linkHandle}>[GITHUB_USERNAME]</span>
              </a>
            </div>

            <div className={styles.linkGroup}>
              <span className={`${styles.linkLabel} annotation`}>LinkedIn</span>
              <a
                href="https://linkedin.com/in/[LINKEDIN_URL]"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile — [LINKEDIN_URL]"
              >
                linkedin.com/in/<span className={styles.linkHandle}>[LINKEDIN_URL]</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
