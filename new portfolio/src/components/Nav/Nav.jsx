import { useState, useEffect } from 'react';
import styles from './Nav.module.css';

const navLinks = [
  { href: '#about',    label: '~/about'   },
  { href: '#work',     label: '~/work'    },
  { href: '#contact',  label: '~/contact' },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add a subtle top border when user has scrolled
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change / link click
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav
      className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}
      aria-label="Primary navigation"
    >
      <div className={styles.inner}>
        {/* Site mark — left side */}
        <a href="#hero" className={styles.mark} aria-label="Sanket Botre — back to top">
          <span className={styles.markInitials}>SB</span>
          <span className={styles.markDot} aria-hidden="true" />
        </a>

        {/* Desktop link list */}
        <ul className={styles.linkList} role="list">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className={styles.navLink}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle — text label "Menu" / "Close", no icon */}
        <button
          className={styles.toggle}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-nav"
        className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ''}`}
        aria-hidden={!isOpen}
      >
        <ul role="list">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={styles.mobileLink}
                onClick={handleLinkClick}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
