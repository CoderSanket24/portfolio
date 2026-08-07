import { skillClusters } from '../../data/skills';
import styles from './SkillsWorkbench.module.css';

export default function SkillsWorkbench() {
  return (
    <section id="skills" className={styles.section} aria-labelledby="skills-heading">
      <div className={styles.inner}>

        <div className={styles.header}>
          <p className="section-label" aria-hidden="true">§ 03 — Workbenches</p>
          <h2 id="skills-heading" className={styles.heading}>
            Skills, evidenced by use
          </h2>
          <p className={styles.subheading}>
            Each item below is tied to a specific project where it was actually
            applied — not a floating badge with no evidence.
          </p>
        </div>

        {/* Skill clusters — 4 groups, backend-first (fixed order in skills.js) */}
        <div className={styles.clusters}>
          {skillClusters.map((cluster) => (
            <div key={cluster.id} className={styles.cluster}>
              <div className={styles.clusterHeader}>
                <span className={`${styles.clusterNum} annotation`} aria-hidden="true">
                  {cluster.number}
                </span>
                <h3 className={styles.clusterLabel}>{cluster.label}</h3>
              </div>

              <ul className={styles.skillList} role="list">
                {cluster.skills.map((skill) => (
                  <li key={skill.name} className={styles.skillItem}>
                    <div className={styles.skillName}>{skill.name}</div>
                    <p className={`${styles.skillNote} annotation`}>{skill.note}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
