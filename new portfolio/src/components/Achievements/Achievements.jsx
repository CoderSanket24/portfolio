import { useEffect, useRef, useState } from 'react';
import { achievements } from '../../data/achievements';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import styles from './Achievements.module.css';

/**
 * CountUp — animates a number from 0 to `target`.
 * Effect #2 of 3 allowed animations.
 * Respects prefers-reduced-motion (shows final value immediately).
 */
function CountUp({ target, label, active }) {
  const [count, setCount] = useState(0);
  const prefersReduced = useReducedMotion();
  const frameRef = useRef(null);

  useEffect(() => {
    if (!active) return;

    // Reduced motion: show final value immediately
    if (prefersReduced) {
      setCount(target);
      return;
    }

    const duration = 1400; // ms
    const start = performance.now();

    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        setCount(target);
      }
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [active, target, prefersReduced]);

  return (
    <span className={styles.countUp} aria-live="polite" aria-atomic="true">
      <span className={styles.countNum}>{count}</span>
      <span className={styles.countLabel}>{label}</span>
    </span>
  );
}

export default function Achievements() {
  const { ref: sectionRef, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      id="achievements"
      className={styles.section}
      aria-labelledby="achievements-heading"
      ref={sectionRef}
    >
      <div className={styles.inner}>

        <p className="section-label" aria-hidden="true">§ 02 — Achievements</p>
        <h2 id="achievements-heading" className={styles.heading}>
          What the work produced
        </h2>

        {/* Vertical timeline */}
        <ol className={styles.timeline} role="list">
          {achievements.map((item, idx) => (
            <li key={item.id} className={styles.entry}>

              {/* Timeline line + marker */}
              <div className={styles.timelineCol} aria-hidden="true">
                <div className={styles.marker} />
                {idx < achievements.length - 1 && (
                  <div className={styles.line} />
                )}
              </div>

              {/* Entry content */}
              <article className={styles.entryContent}>
                <header className={styles.entryHeader}>
                  <time className={`${styles.year} annotation annotation--copper`}>
                    {item.year}
                  </time>
                  <h3 className={styles.eventTitle}>{item.event}</h3>
                  <p className={styles.org}>{item.org}</p>
                  {item.place && (
                    <span className={styles.place}>{item.place}</span>
                  )}
                </header>

                {/* Case-study framing: Problem / Approach / Result */}
                <div className={styles.caseStudy}>
                  <div className={styles.caseBlock}>
                    <span className={`${styles.caseLabel} annotation`}>Problem</span>
                    <p className={styles.caseText}>{item.problem}</p>
                  </div>
                  <div className={styles.caseBlock}>
                    <span className={`${styles.caseLabel} annotation`}>Approach</span>
                    <p className={styles.caseText}>{item.approach}</p>
                  </div>
                  <div className={styles.caseBlock}>
                    <span className={`${styles.caseLabel} annotation`}>Result</span>
                    <p className={styles.caseText}>{item.result}</p>
                    {/* Count-up for SIH 2024 accuracy — Effect #2 */}
                    {item.highlight && (
                      <CountUp
                        target={item.highlight.value}
                        label={item.highlight.label}
                        active={isIntersecting}
                      />
                    )}
                  </div>
                </div>
              </article>

            </li>
          ))}
        </ol>

      </div>
    </section>
  );
}
