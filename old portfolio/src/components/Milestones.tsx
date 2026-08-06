const Milestones = () => {
  const achievements = [
    {
      title: 'Smart India Hackathon 2024',
      subtitle: 'National Winner',
      date: 'December 2024',
      description: 'Won the national-level Smart India Hackathon (ISIH) 2024 with a computer vision-based sports training application for rural athletes. Developed pose classification system achieving 94% accuracy.',
      impact: 'National Recognition',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      color: 'amber'
    },
    {
      title: 'VOIS Innovation Marathon',
      subtitle: 'First Place',
      date: 'October 2024',
      description: 'Secured first position in the VOIS (Vodafone Intelligent Solutions) Innovation Marathon. Built a scalable backend solution addressing real-world telecommunications challenges.',
      impact: 'Industry Innovation Award',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      color: 'cyan'
    },
    {
      title: 'Research Publication',
      subtitle: 'AI/ML Domain',
      date: '2024',
      description: 'Published research work on computer vision applications in sports analytics and pose estimation. Contributed to academic discourse on practical ML implementations.',
      impact: 'Academic Contribution',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      color: 'violet'
    },
    {
      title: 'Open Source Contributions',
      subtitle: 'Community Impact',
      date: 'Ongoing',
      description: 'Active contributor to open-source projects in backend development and ML tooling ecosystems. Maintained multiple repositories with community engagement.',
      impact: 'Developer Community',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: 'emerald'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { text: string; bg: string; border: string; glow: string }> = {
      amber: { 
        text: 'text-amber-400', 
        bg: 'bg-amber-500/10', 
        border: 'border-amber-500/20',
        glow: 'shadow-amber-500/20'
      },
      cyan: { 
        text: 'text-cyan-400', 
        bg: 'bg-cyan-500/10', 
        border: 'border-cyan-500/20',
        glow: 'shadow-cyan-500/20'
      },
      violet: { 
        text: 'text-violet-400', 
        bg: 'bg-violet-500/10', 
        border: 'border-violet-500/20',
        glow: 'shadow-violet-500/20'
      },
      emerald: { 
        text: 'text-emerald-400', 
        bg: 'bg-emerald-500/10', 
        border: 'border-emerald-500/20',
        glow: 'shadow-emerald-500/20'
      }
    };
    return colors[color];
  };

  return (
    <section id="achievements" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#030712]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-3">
            <div className="h-px w-8 bg-gradient-to-r from-amber-500 to-transparent" />
            <h2 className="text-sm font-mono text-amber-400 uppercase tracking-wider">
              Milestones
            </h2>
          </div>
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-100">
            Achievements & Recognition
          </h3>
          <p className="mt-2 text-slate-400 max-w-2xl">
            Key accomplishments and contributions to technology and innovation
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const colorClasses = getColorClasses(achievement.color);
            return (
              <div
                key={index}
                className={`group relative bg-slate-900/40 backdrop-blur-sm border ${colorClasses.border} rounded-lg overflow-hidden hover:border-slate-700/50 transition-all hover:-translate-y-1 hover:shadow-xl ${colorClasses.glow}`}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 ${colorClasses.bg} opacity-0 group-hover:opacity-100 transition-opacity`} />

                <div className="relative z-10 p-6">
                  {/* Icon and Date */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 ${colorClasses.bg} rounded-lg ${colorClasses.text}`}>
                      {achievement.icon}
                    </div>
                    <span className="text-xs text-slate-500 font-mono">
                      {achievement.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-bold text-slate-100 mb-1">
                    {achievement.title}
                  </h4>
                  <p className={`text-sm font-semibold ${colorClasses.text} mb-3`}>
                    {achievement.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {achievement.description}
                  </p>

                  {/* Impact Badge */}
                  <div className="flex items-center space-x-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${colorClasses.text.replace('text-', 'bg-')}`} />
                    <span className="text-xs text-slate-400 font-mono">
                      Impact: {achievement.impact}
                    </span>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className={`h-1 ${colorClasses.bg}`} />
              </div>
            );
          })}
        </div>

        {/* Stats Summary */}
        <div className="mt-12 bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-mono font-bold text-amber-400 mb-1">
                2+
              </div>
              <div className="text-sm text-slate-400">
                National Awards
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-mono font-bold text-cyan-400 mb-1">
                12+
              </div>
              <div className="text-sm text-slate-400">
                Projects Completed
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-mono font-bold text-violet-400 mb-1">
                3+
              </div>
              <div className="text-sm text-slate-400">
                Publications
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-mono font-bold text-emerald-400 mb-1">
                50+
              </div>
              <div className="text-sm text-slate-400">
                Open Source Contributions
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestones;
