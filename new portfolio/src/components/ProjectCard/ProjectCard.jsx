import styles from './ProjectCard.module.css';

/**
 * ProjectCard — lighter card for the secondary project grid.
 * Effect #3: hover lift (translateY + copper border-left), 150ms ease.
 */
export default function ProjectCard({ project }) {
  return (
    <article
      className={styles.card}
      aria-labelledby={`proj-${project.id}-title`}
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <h4 id={`proj-${project.id}-title`} className={styles.title}>
            {project.title}
          </h4>
          <p className={styles.tagline}>{project.tagline}</p>
        </header>

        <p className={styles.description}>{project.description}</p>

        <footer className={styles.footer}>
          {/* Stack tags */}
          <ul className={styles.stack} role="list" aria-label="Technologies used">
            {project.stack.slice(0, 3).map((tech) => (
              <li key={tech} className={styles.stackTag}>{tech}</li>
            ))}
            {project.stack.length > 3 && (
              <li className={styles.stackTagMore}>+{project.stack.length - 3}</li>
            )}
          </ul>

          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} repository`}
            >
              → repo
            </a>
          ) : (
            <span className={`${styles.linkPlaceholder} annotation`} aria-hidden="true">
              [repo]
            </span>
          )}
        </footer>
      </div>
    </article>
  );
}
