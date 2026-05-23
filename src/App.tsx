import React, { useState, useEffect } from "react";
import Hero from "./components/hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollIndicator from "./components/ui/ScrollIndicator";
import Navbar from "./components/Navbar";
import SplashCursor from "./components/SplashCursor";
import LoadingScreen from "./components/LoadingScreen";
import Footer from "./components/Footer";
import FloatingShapes from "./components/FloatingShapes";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen />}

      {/* Global aurora background — fixed, beneath everything */}
      <FloatingShapes />

      <div className="relative font-sans" style={{ fontFamily: "var(--font-body)" }}>
        <ScrollIndicator />
        <SplashCursor />

        {/* Navbar */}
        <Navbar />

        {/* Sections */}
        <section id="hero" className="pt-24">
          <Hero />
        </section>

        {/* Thin gradient divider */}
        <div className="section-divider" />

        <section id="about">
          <About />
        </section>

        <div className="section-divider" />

        <section id="projects">
          <Projects />
        </section>

        <div className="section-divider" />

        <section id="contact">
          <Contact />
        </section>

        <Footer />
      </div>
    </>
  );
};

export default App;
