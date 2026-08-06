const ArchitecturalGrid = () => {
  const projects = [
    {
      title: 'AgroAssist',
      category: 'Full-Stack Backend Platform',
      description: 'Comprehensive agricultural assistance system with distributed data processing pipelines. Built scalable REST APIs handling 10K+ concurrent requests with Redis caching layer.',
      tech: ['Node.js', 'PostgreSQL', 'Redis', 'Docker'],
      metrics: {
        uptime: '99.8%',
        throughput: '10K req/s',
        latency: '18ms avg'
      },
      status: 'Production',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Sports Vision AI',
      category: 'Computer Vision ML Pipeline',
      description: 'ISIH 2024 National Winner. Pose classification system for rural athlete training using MediaPipe and TensorFlow. Real-time inference at 30 FPS with 94% accuracy.',
      tech: ['Python', 'TensorFlow', 'OpenCV', 'FastAPI'],
      metrics: {
        accuracy: '94.0%',
        inference: '30 FPS',
        latency: '33ms'
      },
      status: 'Award Winner',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      )
    },
    {
      title: 'Smart Road Pothole Detector',
      category: 'Edge AI Vision System',
      description: 'Real-time infrastructure hazard detection using YOLO v8 edge deployment. Processes 4K video streams with sub-50ms latency for municipal monitoring systems.',
      tech: ['Python', 'YOLO v8', 'Edge TPU', 'MQTT'],
      metrics: {
        detection: '95.2%',
        latency: '<50ms',
        coverage: '100km+'
      },
      status: 'Deployed',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      title: 'StudentInvest Platform',
      category: 'Distributed Backend System',
      description: 'Financial technology platform with microservices architecture. Event-driven design using RabbitMQ for async processing. Handles transaction validation and portfolio management.',
      tech: ['Spring Boot', 'MySQL', 'RabbitMQ', 'JWT'],
      metrics: {
        transactions: '50K/day',
        users: '5K+',
        latency: '12ms'
      },
      status: 'Live',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'GestuDrive',
      category: 'Real-Time Interaction System',
      description: 'Gesture-based control interface using hand tracking ML models. Low-latency WebSocket architecture enabling sub-20ms response times for seamless user interaction.',
      tech: ['MediaPipe', 'WebSocket', 'React', 'Node.js'],
      metrics: {
        latency: '<20ms',
        accuracy: '91%',
        gestures: '15 types'
      },
      status: 'Demo',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
        </svg>
      )
    },
    {
      title: 'Wildlife Tracker ML',
      category: 'Object Detection Pipeline',
      description: 'Conservation technology using custom-trained CNN for wildlife identification. Processes camera trap data with 89% species classification accuracy across 50+ classes.',
      tech: ['PyTorch', 'FastAPI', 'AWS S3', 'PostgreSQL'],
      metrics: {
        accuracy: '89%',
        species: '50+',
        images: '100K+'
      },
      status: 'Research',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      'Production': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      'Award Winner': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      'Deployed': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
      'Live': 'bg-violet-500/10 text-violet-400 border-violet-500/20',
      'Demo': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      'Research': 'bg-pink-500/10 text-pink-400 border-pink-500/20'
    };
    return colors[status] || 'bg-slate-500/10 text-slate-400 border-slate-500/20';
  };

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#030712]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-3">
            <div className="h-px w-8 bg-gradient-to-r from-cyan-500 to-transparent" />
            <h2 className="text-sm font-mono text-cyan-400 uppercase tracking-wider">
              Architectural Grid
            </h2>
          </div>
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-100">
            Project Infrastructure
          </h3>
          <p className="mt-2 text-slate-400 max-w-2xl">
            System architectures and technical implementations across various domains
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-lg overflow-hidden hover:border-slate-700/50 transition-all hover:-translate-y-1"
            >
              {/* Project Header */}
              <div className="p-6 border-b border-slate-800/50">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-slate-800/50 rounded-lg text-cyan-400 group-hover:text-violet-400 transition-colors">
                      {project.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-100">
                        {project.title}
                      </h4>
                      <p className="text-xs text-slate-500 font-mono mt-0.5">
                        {project.category}
                      </p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 text-xs font-mono border rounded ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Metrics */}
              <div className="px-6 py-4 bg-slate-900/60 border-b border-slate-800/50">
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(project.metrics).map(([key, value], idx) => (
                    <div key={idx}>
                      <div className="text-xs text-slate-500 font-mono uppercase mb-1">
                        {key}
                      </div>
                      <div className="text-sm font-mono font-semibold text-cyan-400">
                        {value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="px-6 py-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-2 py-1 text-xs font-mono bg-slate-800/50 text-slate-300 rounded border border-slate-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Link */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/sanketbotre"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-lg hover:border-slate-700/50 transition-all hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-mono text-slate-300">View all projects on GitHub</span>
            <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ArchitecturalGrid;
