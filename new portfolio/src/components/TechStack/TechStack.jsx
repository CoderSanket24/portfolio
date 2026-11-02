import styles from './TechStack.module.css';

export default function TechStack() {
  const technologies = ['HTML5', 'CSS', 'Javascript', 'Node.js', 'React', 'Git', 'Github'];

  return (
    <div className={styles.techStack}>
      <div className={styles.techTags}>
        {technologies.map((tech) => (
          <span key={tech} className={styles.techTag}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
