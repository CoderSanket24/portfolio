import styles from './Footer.module.css';

export default function Footer() {
  // Dynamic year — never hardcoded, always reflects current year at render
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className={styles.copy}>
            © {year} Sanket Botre
          </p>
          <p className={`${styles.tagline} annotation`}>
            Built with intent, not a template.
          </p>
        </div>
        <div className={styles.right}>
          <p className={`${styles.stack} annotation`}>
            React · Vite · CSS Modules
          </p>
        </div>
      </div>
    </footer>
  );
}
