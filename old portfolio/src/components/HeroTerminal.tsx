import { useState, useEffect } from 'react';

const HeroTerminal = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [currentLine, setCurrentLine] = useState(0);

  const lines = [
    '$ npx profile load --user sanket-botre',
    '> Initializing system...',
    '> Status: Specializing in Full-Stack Backend & AI/Data Science Architecture',
    '> Loading expertise modules: [Backend] [AI/ML] [Cloud Infrastructure]',
    '> System ready. Welcome to the console.'
  ];

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (currentLine >= lines.length) return;

    const currentText = lines[currentLine];
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex < currentText.length) {
        setDisplayedText(prev => prev + currentText[charIndex]);
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setDisplayedText(prev => prev + '\n');
          setCurrentLine(prev => prev + 1);
        }, 500);
      }
    }, 30);

    return () => clearInterval(typingInterval);
  }, [currentLine]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-5xl w-full">
        {/* Terminal Window */}
        <div className="relative bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-lg overflow-hidden shadow-2xl">
          {/* Terminal Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-900/60 border-b border-slate-800/50">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
            </div>
            <div className="text-xs text-slate-500 font-mono">
              sanket-botre@production-env
            </div>
            <div className="w-16" />
          </div>

          {/* Terminal Content */}
          <div className="p-6 sm:p-8 lg:p-12 font-mono text-sm sm:text-base">
            <pre className="text-slate-300 whitespace-pre-wrap">
              {displayedText}
              {currentLine < lines.length && (
                <span className={`inline-block w-2 h-5 bg-cyan-400 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
              )}
            </pre>

            {currentLine >= lines.length && (
              <div className="mt-8 space-y-4 animate-fade-in">
                <div className="flex items-start space-x-3">
                  <span className="text-cyan-400 mt-1">$</span>
                  <div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100 mb-2">
                      Sanket Botre
                    </h1>
                    <p className="text-lg sm:text-xl text-slate-400">
                      Backend Engineer & AI/Data Science Specialist
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-violet-400 mt-1">›</span>
                  <p className="text-slate-300 leading-relaxed max-w-2xl">
                    Building scalable backend systems and intelligent data pipelines. 
                    Specializing in distributed architectures, machine learning model deployment, 
                    and high-performance API design.
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex items-center space-x-4 pt-4">
                  <a 
                    href="https://github.com/sanketbotre" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 rounded-md transition-all hover:-translate-y-0.5"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">GitHub</span>
                  </a>

                  <a 
                    href="https://linkedin.com/in/sanket-botre" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 rounded-md transition-all hover:-translate-y-0.5"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span className="text-sm">LinkedIn</span>
                  </a>

                  <a 
                    href="mailto:sanketbotre2004@gmail.com"
                    className="flex items-center space-x-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 rounded-md transition-all hover:-translate-y-0.5"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm">Email</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12 animate-bounce">
          <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroTerminal;
