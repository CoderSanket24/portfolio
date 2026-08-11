import { useEffect, useRef } from 'react';
import styles from './ProjectModal.module.css';

/**
 * ProjectModal — shows full case-study detail for secondary projects.
 * Opens when a ProjectCard is clicked.
 *
 * Accessibility:
 * - Uses <dialog> element (native browser modal semantics)
 * - Focus moves to modal on open; returns to trigger on close
 * - ESC key closes (built into <dialog>)
 * - Clicking the backdrop closes
 * - aria-labelledby points to the modal title
 *
 * Animation budget: no new animations added here.
 * The modal appears instantly — functional, not decorative.
 */
export default function ProjectModal({ project, onClose, triggerRef }) {
  const dialogRef = useRef(null);
  const closeBtnRef = useRef(null);

  // Open dialog and move focus to close button
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    dialog.showModal();
    closeBtnRef.current?.focus();

    // Close on backdrop click (click outside the dialog box)
    const handleBackdropClick = (e) => {
      const rect = dialog.getBoundingClientRect();
      const isInsideDialog =
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width;
      if (!isInsideDialog) onClose();
    };
    dialog.addEventListener('click', handleBackdropClick);

    // Return focus to the card that opened the modal
    return () => {
      dialog.removeEventListener('click', handleBackdropClick);
      triggerRef?.current?.focus();
    };
  }, [onClose, triggerRef]);

  // Wire <dialog>'s native cancel event (ESC key) to our onClose
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const handleCancel = (e) => {
      e.preventDefault();
      onClose();
    };
    dialog.addEventListener('cancel', handleCancel);
    return () => dialog.removeEventListener('cancel', handleCancel);
  }, [onClose]);

  if (!project) return null;

  const modalTitleId = `modal-title-${project.id}`;

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-labelledby={modalTitleId}
    >
      <div className={styles.inner}>

        {/* Header row */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={`${styles.badge} annotation annotation--copper`}>
              Project detail
            </span>
            <h2 id={modalTitleId} className={styles.title}>
              {project.title}
            </h2>
            <p className={styles.tagline}>{project.tagline}</p>

            {/* Stack */}
            <ul className={styles.stack} role="list" aria-label="Technology stack">
              {project.stack.map((tech) => (
                <li key={tech} className={styles.stackTag}>{tech}</li>
              ))}
            </ul>
          </div>

          {/* Close button — text label, consistent with nav toggle */}
          <button
            ref={closeBtnRef}
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close project detail"
          >
            Close ✕
          </button>
        </div>

        {/* Divider */}
        <hr className={styles.divider} />

        {/* Case-study body */}
        <div className={styles.body}>

          {/* Description */}
          <p className={styles.description}>{project.description}</p>

          {/* Problem / Approach / Outcome — only if data exists */}
          {project.problem && (
            <section className={styles.caseBlock} aria-labelledby={`${project.id}-problem`}>
              <h3 id={`${project.id}-problem`} className={styles.caseLabel}>
                <span className="annotation" aria-hidden="true">01 / </span>
                Problem
              </h3>
              <p className={styles.caseText}>{project.problem}</p>
            </section>
          )}

          {project.approach && (
            <section className={styles.caseBlock} aria-labelledby={`${project.id}-approach`}>
              <h3 id={`${project.id}-approach`} className={styles.caseLabel}>
                <span className="annotation" aria-hidden="true">02 / </span>
                Approach
              </h3>
              <p className={styles.caseText}>{project.approach}</p>
            </section>
          )}

          {project.outcome && (
            <section className={styles.caseBlock} aria-labelledby={`${project.id}-outcome`}>
              <h3 id={`${project.id}-outcome`} className={styles.caseLabel}>
                <span className="annotation" aria-hidden="true">03 / </span>
                Outcome
              </h3>
              <p className={styles.caseText}>{project.outcome}</p>
            </section>
          )}
        </div>

        {/* Footer: repo link or placeholder */}
        <footer className={styles.footer}>
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              className={styles.repoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              → View repository
            </a>
          ) : (
            <span className={`${styles.repoPlaceholder} annotation`}>
              [GITHUB_URL] — add repository link
            </span>
          )}
        </footer>

      </div>
    </dialog>
  );
}
