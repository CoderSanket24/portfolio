import React, { useState, useEffect } from "react";

const ScrollIndicator: React.FC = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    setScrollPercent((scrollTop / docHeight) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-900/50 z-50 backdrop-blur-sm">
      <div
        className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 ease-out shadow-lg"
        style={{ width: `${scrollPercent}%` }}
      >
        <div className="h-full bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse" />
      </div>
    </div>
  );
};

export default ScrollIndicator;
