import AgroassistDiagram from '../AgroassistDiagram/AgroassistDiagram';
import styles from './ProjectCaseStudy.module.css';

/**
 * ProjectCaseStudy — reusable deep case study layout.
 * Used for Agroassist and CV Sports Coaching App.
 * Screenshot slots use [SCREENSHOT: description] placeholders;
 * the description string is the future alt text — swap the placeholder
 * element for <img src="..." alt={screenshot.description} /> when real
 * images are available.
 */
export default function ProjectCaseStudy({ project, index }) {
  return (
    <article
      id={project.id}
      className={styles.article}
      aria-labelledby={`case-${project.id}-title`}
    >
      {/* Case study header */}
      <header className={styles.header}>
        <div className={styles.headerMeta}>
          <span className={`${styles.caseNum} annotation annotation--copper`}>
            Case Study {index + 1}
          </span>
          {project.role && (
            <span className={`${styles.role} annotation`}>
              Role: {project.role}
            </span>
          )}
        </div>

        <h3 id={`case-${project.id}-title`} className={styles.title}>
          {project.title}
        </h3>
        <p className={styles.tagline}>{project.tagline}</p>

        {/* Stack tags */}
        <ul className={styles.stack} role="list" aria-label="Technology stack">
          {project.stack.map((tech) => (
            <li key={tech} className={styles.stackTag}>{tech}</li>
          ))}
        </ul>

        {project.repoUrl ? (
          <a
            href={project.repoUrl}
            className={styles.repoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            → view repository
          </a>
        ) : (
          <span className={`${styles.repoPlaceholder} annotation`}>
            [GITHUB_URL] — add repository link
          </span>
        )}
      </header>

      {/* Case study body */}
      <div className={styles.body}>

        {/* Problem */}
        <section className={styles.caseSection} aria-labelledby={`${project.id}-problem`}>
          <h4 id={`${project.id}-problem`} className={styles.caseSectionLabel}>
            <span className="annotation" aria-hidden="true">01 /</span> Problem
          </h4>
          <p className={styles.caseSectionText}>{project.problem}</p>
        </section>

        {/* Technical decisions */}
        <section className={styles.caseSection} aria-labelledby={`${project.id}-decisions`}>
          <h4 id={`${project.id}-decisions`} className={styles.caseSectionLabel}>
            <span className="annotation" aria-hidden="true">02 /</span> Technical Decisions
          </h4>
          <ol className={styles.decisionList} role="list">
            {project.technicalDecisions.map((item, i) => (
              <li key={i} className={styles.decisionItem}>
                <strong className={styles.decisionTitle}>{item.decision}</strong>
                <p className={styles.decisionRationale}>{item.rationale}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Architecture diagram — only for Agroassist */}
        {project.hasDiagram && (
          <section className={styles.caseSection} aria-labelledby={`${project.id}-arch`}>
            <h4 id={`${project.id}-arch`} className={styles.caseSectionLabel}>
              <span className="annotation" aria-hidden="true">03 /</span> Architecture
            </h4>
            {project.architectureNote && (
              <p className={`${styles.archNote} annotation`}>{project.architectureNote}</p>
            )}
            <AgroassistDiagram />
          </section>
        )}

        {/* Outcome */}
        <section className={styles.caseSection} aria-labelledby={`${project.id}-outcome`}>
          <h4 id={`${project.id}-outcome`} className={styles.caseSectionLabel}>
            <span className="annotation" aria-hidden="true">{project.hasDiagram ? '04' : '03'} /</span> Outcome
          </h4>
          <p className={styles.caseSectionText}>{project.outcome}</p>
        </section>

        {/* Screenshots */}
        {project.screenshots && project.screenshots.length > 0 && (
          <section className={styles.caseSection} aria-labelledby={`${project.id}-screenshots`}>
            <h4 id={`${project.id}-screenshots`} className={styles.caseSectionLabel}>
              <span className="annotation" aria-hidden="true">↳</span> Screenshots
            </h4>
            <div className={styles.screenshotGrid}>
              {project.screenshots.map((shot) => (
                <figure
                  key={shot.id}
                  className={styles.screenshotPlaceholder}
                  // When replacing with a real image:
                  // <img src="..." alt={shot.description} />
                  // The description string is already the correct alt text.
                  aria-label={shot.description}
                  role="img"
                >
                  <div className={styles.placeholderBox} aria-hidden="true">
                    <span className={`${styles.placeholderIcon} annotation`}>[ img ]</span>
                  </div>
                  <figcaption className={`${styles.screenshotCaption} annotation`}>
                    [SCREENSHOT: {shot.description}]
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

      </div>
    </article>
  );
}
