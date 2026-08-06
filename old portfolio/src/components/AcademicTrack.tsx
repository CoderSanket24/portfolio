const AcademicTrack = () => {
  return (
    <section id="education" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-3">
            <div className="h-px w-8 bg-gradient-to-r from-violet-500 to-transparent" />
            <h2 className="text-sm font-mono text-violet-400 uppercase tracking-wider">
              Academic Track
            </h2>
          </div>
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-100">
            Education Timeline
          </h3>
          <p className="mt-2 text-slate-400 max-w-2xl">
            Academic foundation and continuous learning journey
          </p>
        </div>

        {/* Education Card */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-violet-500 to-transparent hidden md:block" />

          {/* Education Item */}
          <div className="relative bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-lg overflow-hidden hover:border-slate-700/50 transition-all hover:-translate-y-1">
            <div className="p-8">
              {/* Timeline Dot */}
              <div className="absolute left-8 top-8 w-4 h-4 -ml-2 rounded-full bg-cyan-500 border-4 border-[#0B0F19] hidden md:block">
                <div className="absolute inset-0 rounded-full bg-cyan-500 animate-ping opacity-75" />
              </div>

              <div className="md:pl-16">
                {/* Degree Badge */}
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-4">
                  <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                  <span className="text-sm font-mono text-cyan-400">Current</span>
                </div>

                {/* Degree Title */}
                <h4 className="text-2xl font-bold text-slate-100 mb-2">
                  Bachelor of Engineering in Computer Engineering
                </h4>

                {/* Institution */}
                <p className="text-lg text-slate-300 mb-1">
                  Dr. D.Y. Patil Institute of Technology, Pimpri
                </p>
                <p className="text-slate-400 mb-4">
                  Pune, Maharashtra, India
                </p>

                {/* Timeline */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center space-x-2 text-sm font-mono">
                    <svg className="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-slate-400">2022 - 2026</span>
                  </div>
                  <div className="h-4 w-px bg-slate-700" />
                  <div className="text-sm text-slate-400">
                    Expected Graduation: <span className="text-cyan-400 font-semibold">May 2026</span>
                  </div>
                </div>

                {/* Key Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-900/60 border border-slate-800/50 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                      <h5 className="text-sm font-semibold text-slate-200">Specialization</h5>
                    </div>
                    <p className="text-sm text-slate-400">
                      Backend Systems & AI/ML Engineering
                    </p>
                  </div>

                  <div className="bg-slate-900/60 border border-slate-800/50 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <h5 className="text-sm font-semibold text-slate-200">Core Focus</h5>
                    </div>
                    <p className="text-sm text-slate-400">
                      Distributed Systems, Data Science, Cloud Architecture
                    </p>
                  </div>
                </div>

                {/* Relevant Coursework */}
                <div>
                  <h5 className="text-sm font-semibold text-slate-300 mb-3 flex items-center space-x-2">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span>Relevant Coursework</span>
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Data Structures & Algorithms',
                      'Database Management Systems',
                      'Machine Learning',
                      'Computer Networks',
                      'Operating Systems',
                      'Software Engineering',
                      'Cloud Computing',
                      'Artificial Intelligence'
                    ].map((course, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-mono bg-slate-800/50 text-slate-300 rounded border border-slate-700/50"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Accent */}
            <div className="h-1 bg-gradient-to-r from-cyan-500 via-violet-500 to-transparent" />
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span className="text-sm font-semibold text-slate-200">Research</span>
            </div>
            <p className="text-xs text-slate-400">
              Active participation in research projects and technical publications
            </p>
          </div>

          <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="text-sm font-semibold text-slate-200">Collaboration</span>
            </div>
            <p className="text-xs text-slate-400">
              Team projects and hackathon participation throughout curriculum
            </p>
          </div>

          <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <span className="text-sm font-semibold text-slate-200">Innovation</span>
            </div>
            <p className="text-xs text-slate-400">
              Focus on practical implementations and cutting-edge technologies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicTrack;
