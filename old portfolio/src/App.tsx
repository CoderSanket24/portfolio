import Header from './components/Header';
import HeroTerminal from './components/HeroTerminal';
import LiveMetrics from './components/LiveMetrics';
import TechnicalBlueprint from './components/TechnicalBlueprint';
import ArchitecturalGrid from './components/ArchitecturalGrid';
import AcademicTrack from './components/AcademicTrack';
import Milestones from './components/Milestones';
import ContactNode from './components/ContactNode';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-[#0B0F19] text-slate-200 antialiased">
      {/* Subtle grid background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      <div className="relative z-10">
        <Header />
        <HeroTerminal />
        <LiveMetrics />
        <TechnicalBlueprint />
        <ArchitecturalGrid />
        <AcademicTrack />
        <Milestones />
        <ContactNode />
        <Footer />
      </div>
    </div>
  );
}

export default App;
