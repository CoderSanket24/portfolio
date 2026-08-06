import { useState } from 'react';

const ContactNode = () => {
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    '$ contact --help',
    '> Available commands:',
    '> email    - Send email to sanketbotre2004@gmail.com',
    '> github   - Open GitHub profile',
    '> linkedin - Open LinkedIn profile',
    '> ',
    '$ _'
  ]);

  const handleCommand = (cmd: string) => {
    const command = cmd.trim().toLowerCase();
    
    let response = '';
    switch (command) {
      case 'email':
        window.location.href = 'mailto:sanketbotre2004@gmail.com';
        response = '> Opening email client...';
        break;
      case 'github':
        window.open('https://github.com/sanketbotre', '_blank');
        response = '> Redirecting to GitHub...';
        break;
      case 'linkedin':
        window.open('https://linkedin.com/in/sanket-botre', '_blank');
        response = '> Redirecting to LinkedIn...';
        break;
      case 'help':
      case '--help':
        response = '> Available: email, github, linkedin';
        break;
      case 'clear':
        setTerminalHistory(['$ _']);
        setTerminalInput('');
        return;
      default:
        response = `> Command not found: ${command}`;
    }

    setTerminalHistory(prev => [
      ...prev.slice(0, -1),
      `$ ${cmd}`,
      response,
      '$ _'
    ]);
    setTerminalInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (terminalInput.trim()) {
        handleCommand(terminalInput);
      }
    }
  };

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-3">
            <div className="h-px w-8 bg-gradient-to-r from-cyan-500 to-transparent" />
            <h2 className="text-sm font-mono text-cyan-400 uppercase tracking-wider">
              Contact Node
            </h2>
          </div>
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-100">
            Initialize Connection
          </h3>
          <p className="mt-2 text-slate-400 max-w-2xl">
            Let's collaborate on building exceptional systems
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Terminal Interface */}
          <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-lg overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-900/60 border-b border-slate-800/50">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>
              <div className="text-xs text-slate-500 font-mono">
                contact@sanket-botre.dev
              </div>
              <div className="w-16" />
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm h-80 overflow-y-auto">
              {terminalHistory.map((line, idx) => (
                <div
                  key={idx}
                  className={`mb-1 ${
                    line.startsWith('$') 
                      ? 'text-cyan-400' 
                      : line.startsWith('>') 
                      ? 'text-slate-300' 
                      : 'text-slate-400'
                  }`}
                >
                  {line === '$ _' ? (
                    <div className="flex items-center">
                      <span className="mr-2">$</span>
                      <input
                        type="text"
                        value={terminalInput}
                        onChange={(e) => setTerminalInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="flex-1 bg-transparent outline-none text-slate-300"
                        placeholder="Type a command (email, github, linkedin, help)"
                        autoFocus
                      />
                    </div>
                  ) : (
                    line
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Contact Cards */}
          <div className="space-y-4">
            {/* Email */}
            <a
              href="mailto:sanketbotre2004@gmail.com"
              className="group block bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-lg p-6 hover:border-cyan-500/50 transition-all hover:-translate-y-1"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-slate-100 mb-1">Email</h4>
                  <p className="text-sm text-slate-400 font-mono">sanketbotre2004@gmail.com</p>
                </div>
                <svg className="w-5 h-5 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/sanketbotre"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-lg p-6 hover:border-violet-500/50 transition-all hover:-translate-y-1"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-violet-500/10 rounded-lg text-violet-400 group-hover:bg-violet-500/20 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-slate-100 mb-1">GitHub</h4>
                  <p className="text-sm text-slate-400 font-mono">@sanketbotre</p>
                </div>
                <svg className="w-5 h-5 text-violet-400 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/sanket-botre"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-lg p-6 hover:border-cyan-500/50 transition-all hover:-translate-y-1"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-slate-100 mb-1">LinkedIn</h4>
                  <p className="text-sm text-slate-400 font-mono">sanket-botre</p>
                </div>
                <svg className="w-5 h-5 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>

            {/* Location */}
            <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-lg p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-slate-100 mb-1">Location</h4>
                  <p className="text-sm text-slate-400 font-mono">Pune, Maharashtra, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactNode;
