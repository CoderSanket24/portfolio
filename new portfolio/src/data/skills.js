/* =============================================================
   DATA: SKILLS
   CLUSTER ORDER IS FIXED — backend-first, per brief.
   Do not reorder these clusters.
   Each skill entry references the specific project where it was used.
   ============================================================= */

export const skillClusters = [
  {
    id: 'backend',
    label: 'Backend & Systems',
    number: '01',
    skills: [
      { name: 'Java',        note: 'Spring Boot APIs in Agroassist; Bank Management System' },
      { name: 'Spring Boot', note: 'REST API layer in Agroassist — CRUD + ML integration endpoints' },
      { name: 'Node.js',     note: 'Server logic in AI micro-investment app' },
      { name: 'Express',     note: 'REST routes in AI micro-investment app' },
      { name: 'MySQL',       note: 'Schema design in Agroassist; Wildlife Sanctuary DBMS' },
      { name: 'SQL',         note: 'Relational schema & query optimisation across Agroassist, Railway-OS' },
    ],
  },
  {
    id: 'languages',
    label: 'Languages',
    number: '02',
    skills: [
      { name: 'Java',       note: 'Primary language — Agroassist backend, Bank Management System, Railway-OS' },
      { name: 'Python',     note: 'Model training — CNN crop disease detector, stock prediction model' },
      { name: 'C++',        note: 'Custom C DSA library implementation' },
      { name: 'JavaScript', note: 'Frontend (Agroassist UI), Node/Express services, GestuDrive browser layer' },
    ],
  },
  {
    id: 'ml-cv',
    label: 'ML / Computer Vision',
    number: '03',
    skills: [
      { name: 'CNNs',              note: 'Architecture for crop disease detector (SIH 2024, 94% test accuracy)' },
      { name: 'Computer Vision',   note: 'Sports coaching app — pose & motion analysis for rural athletes' },
      { name: 'Applied ML',        note: 'Stock prediction model; pothole detection (Smart Road project)' },
      { name: 'TensorFlow/Keras',  note: 'Model training pipeline — SIH 2024 crop disease CNN' },
    ],
  },
  {
    id: 'tooling',
    label: 'Tooling',
    number: '04',
    skills: [
      { name: 'Git',          note: 'Version control across all projects; collaborative SIH team repos' },
      { name: 'IntelliJ IDEA', note: 'Primary IDE for Java/Spring Boot development (Agroassist, Bank System)' },
      { name: 'Postman',      note: 'API testing for Agroassist Spring Boot endpoints' },
      { name: 'VS Code',      note: 'JavaScript, Python scripts, frontend work' },
    ],
  },
];
