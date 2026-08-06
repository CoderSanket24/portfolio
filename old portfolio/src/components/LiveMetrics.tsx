const LiveMetrics = () => {
  const metrics = [
    {
      label: 'System Uptime',
      value: '99.99%',
      color: 'emerald',
      indicator: true,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      label: 'ML Model Precision',
      value: '94.0%',
      color: 'violet',
      indicator: false,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      label: 'Avg API Latency',
      value: '14ms',
      color: 'cyan',
      indicator: false,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      label: 'Projects Deployed',
      value: '12+',
      color: 'amber',
      indicator: false,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { text: string; bg: string; border: string }> = {
      emerald: { text: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
      violet: { text: 'text-violet-400', bg: 'bg-violet-500/10', border: 'border-violet-500/20' },
      cyan: { text: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20' },
      amber: { text: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20' }
    };
    return colors[color];
  };

  return (
    <section id="metrics" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-3">
            <div className="h-px w-8 bg-gradient-to-r from-cyan-500 to-transparent" />
            <h2 className="text-sm font-mono text-cyan-400 uppercase tracking-wider">
              Live Metrics Board
            </h2>
          </div>
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-100">
            System Performance
          </h3>
          <p className="mt-2 text-slate-400 max-w-2xl">
            Real-time engineering parameters monitoring production environment status
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric, index) => {
            const colorClasses = getColorClasses(metric.color);
            return (
              <div
                key={index}
                className="group relative bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-lg p-6 hover:border-slate-700/50 transition-all hover:-translate-y-1"
              >
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 ${colorClasses.bg} opacity-0 group-hover:opacity-100 transition-opacity rounded-lg`} />

                <div className="relative z-10">
                  {/* Icon and Indicator */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`${colorClasses.text}`}>
                      {metric.icon}
                    </div>
                    {metric.indicator && (
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-xs text-emerald-400 font-mono">LIVE</span>
                      </div>
                    )}
                  </div>

                  {/* Value */}
                  <div className={`text-3xl font-mono font-bold ${colorClasses.text} mb-2`}>
                    {metric.value}
                  </div>

                  {/* Label */}
                  <div className="text-sm text-slate-400 font-medium">
                    {metric.label}
                  </div>
                </div>

                {/* Bottom Border Accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${colorClasses.bg} opacity-0 group-hover:opacity-100 transition-opacity`} />
              </div>
            );
          })}
        </div>

        {/* Status Bar */}
        <div className="mt-8 bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-sm text-slate-400 font-mono">All systems operational</span>
              </div>
              <div className="h-4 w-px bg-slate-700" />
              <span className="text-xs text-slate-500 font-mono">
                Last updated: {new Date().toLocaleTimeString()}
              </span>
            </div>
            <button className="text-xs text-cyan-400 hover:text-cyan-300 font-mono transition-colors">
              View detailed metrics →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveMetrics;
