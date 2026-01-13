import React from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { Features } from './components/Features.tsx';
import { BetaWarning } from './components/BetaWarning.tsx';
import { EditorPreview } from './components/EditorPreview.tsx';
import { Roadmap } from './components/Roadmap.tsx';
import { Footer } from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 grid-bg pointer-events-none z-0" />
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900" />
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        
        <main>
          <Hero />
          <BetaWarning />
          <EditorPreview />
          <Features />
          <Roadmap />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;