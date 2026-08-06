import { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0B0F19]/80 backdrop-blur-xl border-b border-slate-800/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-lg font-semibold tracking-tight">
              <span className="text-slate-200">sanket</span>
              <span className="text-cyan-500">.</span>
              <span className="text-slate-400">botre</span>
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#metrics" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">
              Metrics
            </a>
            <a href="#skills" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">
              Projects
            </a>
            <a href="#education" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">
              Education
            </a>
            <a href="#contact" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <a
            href="mailto:sanketbotre2004@gmail.com"
            className="group relative px-4 py-2 text-sm font-mono font-medium text-slate-200 bg-gradient-to-r from-cyan-600 to-violet-600 rounded-md overflow-hidden transition-all hover:shadow-lg hover:shadow-cyan-500/20"
          >
            <span className="relative z-10">Download Resume</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
