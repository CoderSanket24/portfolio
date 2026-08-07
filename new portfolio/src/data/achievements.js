/* =============================================================
   DATA: ACHIEVEMENTS
   Shape: { id, year, event, org, place, problem, approach, result, highlight }
   - `highlight` is the number used for the count-up animation (Effect #2).
     Only one entry should have a highlight value — the SIH 2024 accuracy.
   - Year placeholders: SIH 2024 is confirmed.
     [YEAR_INTERNAL_SIH] and [YEAR_VOIS] must be filled in by Sanket.
   ============================================================= */

export const achievements = [
  {
    id: 'sih-2024',
    year: '2024',
    event: 'Smart India Hackathon',
    org: 'Government of India',
    place: null,
    problem:
      'Smallholder farmers in India lack affordable, real-time tools to identify crop diseases early, leading to significant yield losses and overuse of broad-spectrum pesticides.',
    approach:
      'Built a CNN-based image classification pipeline trained on a multi-class crop disease dataset. Implemented data augmentation to handle limited field samples, integrated the model with a lightweight REST API, and designed the system so it could run inference on low-end Android devices via a compressed model export.',
    result:
      'Achieved 94% test accuracy on the held-out dataset. Selected at national level.',
    highlight: { label: '% test accuracy', value: 94 }, // ← count-up target (Effect #2)
  },
  {
    id: 'internal-sih',
    year: '[YEAR_INTERNAL_SIH]', // ← fill in correct year
    event: 'Internal Smart India Hackathon',
    org: 'Vishwakarma Institute of Technology, Pune',
    place: '1st Place',
    problem:
      'Rural athletes and coaches in India have no access to the biomechanics feedback tools available to elite sports programs — the gap is equipment cost and technical expertise.',
    approach:
      'Built a computer vision sports coaching application using pose estimation to analyse athlete movement in real time. The system provided structured feedback reports for coaches without requiring specialised hardware, using only a standard camera.',
    result:
      'Awarded 1st Place at the institute level. Demonstrated to faculty and industry judges as a deployable prototype for rural sports training programs.',
    highlight: null,
  },
  {
    id: 'vois-marathon',
    year: '[YEAR_VOIS]', // ← fill in correct year
    event: '_VOIS Innovation Marathon',
    org: 'Vodafone Intelligent Solutions (VOIS) + Edunet Foundation',
    place: 'National-level recognition',
    problem:
      'The challenge called for solutions that apply emerging technology to real social or business problems at scale — submissions were evaluated against national-level competition.',
    approach:
      'Developed and presented a technically grounded proposal addressing the problem statement, demonstrating feasibility through a working prototype with documented architecture and performance metrics.',
    result:
      'Received national-level recognition from Vodafone Intelligent Solutions and Edunet, competing against participants from engineering colleges across India.',
    highlight: null,
  },
];
