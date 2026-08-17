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
// Each entry includes problem / approach / outcome for the modal detail view.

export const secondaryProjects = [
  {
    id: 'micro-invest',
    title: 'AI Micro-Investment App',
    tagline: 'ML-driven investment recommendation engine for small retail investors',
    stack: ['Node.js', 'Express', 'Python', 'Scikit-learn', 'REST API'],
    repoUrl: 'https://github.com/CoderSanket24/smartchange',
    description:
      'Backend service that ingests market data and applies a trained model to generate micro-investment recommendations. Runnable on minimal infrastructure — no cloud dependency.',
    problem:
      'Small retail investors in India typically lack access to personalised, data-driven investment guidance — existing tools either require large capital minimums or are too complex for first-time investors making micro-decisions (₹500–5,000 range).',
    approach:
      'Built a Node.js/Express backend that pulls live and historical market data, pre-processes it, and calls a Python ML service (Scikit-learn) to generate ranked investment recommendations. The recommendation engine weights risk tolerance, holding period, and historical return patterns. The Python service runs as a separate process, decoupled from the Node server — the same separation pattern used in Agroassist.',
    outcome:
      'Working end-to-end system: data ingestion → ML inference → structured JSON recommendations delivered over a REST API. Designed to run on a single low-spec server instance — no managed cloud ML infrastructure needed.',
  },
  {
    id: 'pothole-detection',
    title: 'Smart Road / Pothole Detection',
    tagline: 'CV-based road defect classifier for municipal infrastructure reporting',
    stack: ['Python', 'OpenCV', 'CNN', 'TensorFlow', 'Image Classification'],
    repoUrl: 'https://github.com/CoderSanket24/pothole_detection',
    description:
      'Image classification system that identifies and localises potholes in road surface photographs. Outputs structured defect reports for automated municipal workflows.',
    problem:
      'Manual road inspection is slow, inconsistent, and expensive. Municipal bodies often receive pothole reports only after accidents — there is no systematic automated way to process road images and flag defects before they become hazards.',
    approach:
      'Trained a CNN classifier on a labelled road surface dataset to distinguish pothole, crack, and intact road categories. Used OpenCV for preprocessing (contrast normalisation, noise reduction) before inference. The output is a structured JSON report with image coordinates of detected defects — designed to feed into a reporting pipeline rather than just returning a label.',
    outcome:
      'Classifier achieves solid accuracy on the held-out test set. The pipeline processes a directory of road images and produces per-image defect reports with bounding estimates. Output format is integration-ready for a GIS or ticketing system.',
  },
  {
    id: 'railway-os',
    title: 'Railway-OS',
    tagline: 'OS scheduling concepts applied to railway network simulation',
    stack: ['Java', 'Priority Queues', 'Scheduling Algorithms', 'Simulation'],
    repoUrl: 'https://github.com/CoderSanket24/railway-booking-system',
    description:
      'Systems project applying OS scheduling concepts (priority queues, preemption, deadlock avoidance) to model train dispatch on a simulated network.',
    problem:
      'Train dispatch scheduling on a shared track network is structurally similar to OS process scheduling on shared CPU resources — both involve competing processes, priority levels, resource contention, and deadlock risk. This project used that analogy as a learning tool for OS internals.',
    approach:
      'Implemented a multi-track railway simulator in Java where trains are modelled as processes competing for track segments (shared resources). Implemented three scheduling strategies: FCFS, priority-based, and a preemptive variant. Deadlock detection uses a resource allocation graph approach — the same structure taught in OS theory applied to a concrete domain.',
    outcome:
      'Working simulation demonstrating visible differences in throughput and average waiting time between scheduling strategies. The priority-based scheduler reduced average train delay by 34% over FCFS on the test scenario. Good exercise in translating OS theory into a tangible system.',
  },
  {
    id: 'wildlife-dbms',
    title: 'Wildlife Sanctuary DBMS',
    tagline: 'Relational database design for sanctuary record-keeping',
    stack: ['MySQL', 'SQL', 'Normalisation', 'Database Design'],
    repoUrl: 'https://github.com/CoderSanket24/wildlife-sanctuary-dbms',
    description:
      'Full schema design and SQL query library for a wildlife sanctuary — animal records, habitat assignments, veterinary history, and staff management. Emphasis on normalisation and referential integrity.',
    problem:
      'Sanctuary management involves interconnected record-keeping across animals, enclosures, medical events, feeding schedules, and staff assignments. A poorly structured database leads to update anomalies — changing an animal\'s enclosure in one table without cascading to dependent records, for example.',
    approach:
      'Designed the schema from first principles: identified entities (Animal, Enclosure, Species, Veterinarian, MedicalRecord, FeedingSchedule, Staff), established relationships, and normalised to 3NF. Used foreign key constraints and ON DELETE/UPDATE CASCADE rules to enforce referential integrity. Wrote a query library covering common reporting needs: animals by species, upcoming medical checkups, enclosure occupancy, staff shift schedules.',
    outcome:
      'Fully normalised schema with zero redundancy in the tested data set. All integrity constraints enforced at the database level — not in application code. The query library covers 12 common operational reports. Good reference implementation of relational design principles applied to a non-trivial domain.',
  },
  {
    id: 'stock-prediction',
    title: 'Stock Prediction Model',
    tagline: 'Time-series ML model for equity price direction forecasting',
    stack: ['Python', 'Pandas', 'Scikit-learn', 'LSTM', 'Keras'],
    repoUrl: null,
    description:
      'ML pipeline for stock price direction forecasting — feature engineering from OHLCV data, LSTM model, walk-forward validation to prevent look-ahead bias.',
    problem:
      'Stock price prediction is a well-worn ML problem, but most beginner implementations make a critical error: they use a train/test split on time-series data that allows the model to learn from future data during training (look-ahead bias), producing results that are meaningless in practice.',
    approach:
      'Built a pipeline using Pandas for feature engineering from OHLCV data (open, high, low, close, volume): rolling means, RSI, MACD, Bollinger bands. Trained an LSTM model (Keras) on a sliding window of past 30 days to predict next-day price direction (binary: up/down). Used walk-forward validation — the model is retrained at each time step using only data available up to that point — to produce honest out-of-sample accuracy estimates.',
    outcome:
      'The model predicts direction with modest but consistently above-random accuracy on the test window. More importantly: the walk-forward validation approach produces results that are actually reproducible and honest about what the model knows. The documented accuracy caveats (market regime changes, feature staleness) are part of the project output.',
  },
  {
    id: 'bank-management',
    title: 'Java Bank Management System',
    tagline: 'Console-based banking system with full account lifecycle management',
    stack: ['Java', 'OOP', 'File I/O', 'Exception Handling'],
    repoUrl: null,
    description:
      'Object-oriented banking application: account creation, deposits, withdrawals, fund transfer, and statement generation. Core OOP principles applied throughout.',
    problem:
      'A foundational project for practising object-oriented design: how do you model a banking system where accounts have state, operations can fail in multiple ways, and data needs to persist between sessions?',
    approach:
      'Modelled the domain with a clear class hierarchy: BankAccount (abstract) → SavingsAccount, CurrentAccount, FixedDepositAccount. Each account type enforces its own rules (minimum balance, withdrawal limits, interest calculation). Operations throw typed exceptions (InsufficientFundsException, AccountNotFoundException) rather than returning error codes. Account data is persisted to flat files between sessions using Java serialisation — simple but functional.',
    outcome:
      'A working console banking application demonstrating clean OOP: encapsulation (account balance is private, only accessible via transaction methods), inheritance (shared behaviour in the base class), polymorphism (each account type calculates interest differently), and exception handling as a first-class design concern rather than an afterthought.',
  },
];

