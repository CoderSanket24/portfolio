import React from "react";
import Hero from "./components/hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollIndicator from "./components/ui/ScrollIndicator";
import Navbar from "./components/Navbar";
import SplashCursor from "./components/SplashCursor";


const App: React.FC = () => {
  return (
    <div className="font-sans">
      <ScrollIndicator />
      <SplashCursor />
      {/* Navbar */}
      <Navbar/>
      {/* Sections */}
      <section id="hero" className="pt-20">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
