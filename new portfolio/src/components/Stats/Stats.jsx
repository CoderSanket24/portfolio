import styles from './Stats.module.css';

export default function Stats() {
  const stats = [
    { number: '120', symbol: '+', label: 'Completed Projects' },
    { number: '95', symbol: '%', label: 'Client satisfaction' },
    { number: '10', symbol: '+', label: 'Years of experience' },
  ];

  return (
    <div className={styles.stats}>
      {stats.map((stat, index) => (
        <div key={index} className={styles.statBox}>
          <div className={styles.statNumber}>
            <span className={styles.number}>{stat.number}</span>
            <span className={styles.symbol}>{stat.symbol}</span>
          </div>
          <p className={styles.statLabel}>{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
