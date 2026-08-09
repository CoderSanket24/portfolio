export const caseStudies = [
  {
    id: 'agroassist',
    title: 'Agroassist',
    tagline: 'Database architecture & backend system for agricultural intelligence',
    stack: ['Java', 'Spring Boot', 'MySQL', 'Python', 'TensorFlow/Keras', 'REST API'],
    role: 'Backend engineer & system architect',
    repoUrl: 'https://github.com/CoderSanket24/Agroassist-backend', // [GITHUB_URL]: add repo link when available

    // ── Case study content ─────────────────────────────────────
    problem:
      'Indian smallholder farmers face two compounding problems: late detection of crop disease (leading to 20–40% yield loss before visible symptoms), and fragmented data — soil records, disease history, treatment outcomes — spread across paper logs with no queryable structure. Any useful diagnostic tool had to be built on a sound data foundation before the ML layer could add value.',

    technicalDecisions: [
      {
        decision: 'MySQL relational schema as the foundation',
        rationale:
          'Designed a normalised schema across four core entities: Farmer, Field, CropRecord, and DiagnosisEvent. Foreign key constraints enforce data integrity across the relationship chain (a DiagnosisEvent must reference a valid CropRecord, which must reference a valid Field). Chose MySQL over a document store because the relationships between entities are fixed and well-understood — a relational schema is the right fit, not a flexible-schema NoSQL store.',
      },
      {
        decision: 'Spring Boot REST API as the integration layer',
        rationale:
          'The API layer exposes CRUD endpoints for each entity and a /diagnose endpoint that accepts an image upload, calls the Python CNN inference service, writes the result back to DiagnosisEvent, and returns a structured response. Keeping the ML model as a separate service (not embedded in the Java process) means the model can be retrained and redeployed without touching the API layer.',
      },
      {
        decision: 'CNN inference as a downstream service, not the core product',
        rationale:
          'The model runs as a lightweight Python Flask service. The Spring Boot API calls it over HTTP. This separation means the system remains useful (logging, querying historical records, tracking field data) even if the ML service is unavailable — the database layer is the product, the model is a feature.',
      },
    ],

    architectureNote:
      'See the interactive architecture diagram below. The draw-in animation shows the data flow: from the farmer\'s device → API layer → database write → async ML inference → result persisted back to DiagnosisEvent.',

    outcome:
      'End-to-end system with a structured MySQL backend, a Spring Boot API handling both data management and ML integration, and a CNN that achieved 94% test accuracy on held-out crop disease data. Built and demonstrated at Smart India Hackathon 2024.',

    screenshots: [
      { id: 'agro-schema',   description: 'MySQL schema diagram showing Farmer → Field → CropRecord → DiagnosisEvent relationships' },
      { id: 'agro-api',      description: 'Postman screenshot showing /diagnose endpoint request and response structure' },
      { id: 'agro-ui',       description: 'Frontend showing farmer dashboard with diagnosis history and field map' },
    ],

    hasDiagram: true, // renders the SVG draw-in animation
  }
];

// ── Secondary Projects (lighter grid) ────────────────────────

export const secondaryProjects = [
  {
    id: 'micro-invest',
    title: 'AI Micro-Investment App',
    tagline: 'ML-driven investment recommendation engine for small retail investors',
    stack: ['Node.js', 'Express', 'Python', 'ML'],
    repoUrl: 'https://github.com/CoderSanket24/smartchange',
    description:
      'Backend service that ingests market data and applies a trained model to generate micro-investment recommendations. Built to be runnable on minimal infrastructure — no cloud dependency.',
  },
  {
    id: 'pothole-detection',
    title: 'Smart Road / Pothole Detection',
    tagline: 'CV-based road defect classifier for municipal infrastructure reporting',
    stack: ['Python', 'OpenCV', 'CNN', 'Image Classification'],
    repoUrl: 'https://github.com/CoderSanket24/pothole_detection',
    description:
      'Image classification system that identifies and localises potholes in road surface photographs. Outputs structured defect reports suitable for automated municipal reporting workflows.',
  },
  {
    id: 'gestudrive',
    title: 'GestuDrive',
    tagline: 'Gesture-controlled vehicle interface using real-time hand tracking',
    stack: ['Python', 'OpenCV', 'MediaPipe', 'JavaScript'],
    repoUrl: null,
    description:
      'Gesture recognition system mapping hand poses to vehicle control inputs. Built as a hands-free HCI prototype — real-time gesture classification at low latency using MediaPipe landmarks.',
  },
  {
    id: 'railway-os',
    title: 'Railway-OS',
    tagline: 'Operating-system-style process scheduler for railway network simulation',
    stack: ['Java', 'OS Concepts', 'Scheduling Algorithms'],
    repoUrl: 'https://github.com/CoderSanket24/railway-booking-system',
    description:
      'Systems project applying OS scheduling concepts (priority queues, preemption, deadlock avoidance) to model train dispatch on a simulated network. Academic systems programming project.',
  },
  {
    id: 'wildlife-dbms',
    title: 'Wildlife Sanctuary DBMS',
    tagline: 'Relational database management system for sanctuary record-keeping',
    stack: ['MySQL', 'SQL', 'Database Design'],
    repoUrl: 'https://github.com/CoderSanket24/wildlife-sanctuary-dbms',
    description:
      'Full schema design and query library for a wildlife sanctuary — tracking animal records, habitat assignments, veterinary history, and staff management. Emphasis on normalisation and referential integrity.',
  },
  {
    id: 'c-dsa-library',
    title: 'C DSA Library',
    tagline: 'Custom data structures & algorithms library implemented in C',
    stack: ['C', 'Data Structures', 'Algorithms'],
    repoUrl: null,
    description:
      'Hand-rolled implementations of core data structures (linked lists, BST, hash table, heap) and sorting/search algorithms in C, with documented time/space complexity. Built to understand internals, not to use a library.',
  },
  {
    id: 'stock-prediction',
    title: 'Stock Prediction Model',
    tagline: 'Time-series ML model for equity price direction forecasting',
    stack: ['Python', 'Pandas', 'Scikit-learn', 'LSTM'],
    repoUrl: null,
    description:
      'ML pipeline for stock price direction forecasting — feature engineering from OHLCV data, LSTM model training, walk-forward validation to prevent look-ahead bias. Documented with honest accuracy caveats.',
  },
  {
    id: 'bank-management',
    title: 'Java Bank Management System',
    tagline: 'Console-based banking system with account lifecycle management',
    stack: ['Java', 'OOP', 'File I/O'],
    repoUrl: null,
    description:
      'Object-oriented banking application implementing account creation, deposits, withdrawals, fund transfer, and statement generation. Applied core OOP principles: encapsulation, inheritance, and exception handling.',
  },
];
