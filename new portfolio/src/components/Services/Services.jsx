import styles from './Services.module.css';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Website Development',
      icon: 'monitor',
    },
    {
      id: 2,
      title: 'App Development',
      icon: 'mobile',
    },
    {
      id: 3,
      title: 'Website Hosting',
      icon: 'server',
    },
  ];

  return (
    <section className={styles.services} aria-labelledby="services-heading">
      <div className={styles.inner}>
        <div className={styles.timeline}>
          {services.map((service) => (
            <div key={service.id} className={styles.serviceItem}>
              <div className={styles.iconContainer}>
                {service.icon === 'monitor' && (
                  <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                )}
                {service.icon === 'mobile' && (
                  <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="5" y="2" width="14" height="20" rx="2" />
                    <line x1="12" y1="18" x2="12.01" y2="18" />
                  </svg>
                )}
                {service.icon === 'server' && (
                  <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="8" rx="2" />
                    <rect x="2" y="14" width="20" height="8" rx="2" />
                    <line x1="6" y1="6" x2="6.01" y2="6" />
                    <line x1="6" y1="18" x2="6.01" y2="18" />
                  </svg>
                )}
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
