import React from 'react';
import { Hero } from './components/Hero';
import { CaseStudies } from './components/CaseStudies';
import { NatureSeries } from './components/NatureSeries';
import { Exhibitions } from './components/Exhibitions';
import { Journal } from './components/Journal';
import { About } from './components/About';

const App: React.FC = () => {
  return (
    <div className="h-screen w-full bg-stone-custom text-text-dark font-sans selection:bg-black selection:text-white overflow-y-auto snap-y snap-mandatory scroll-smooth">
      <Hero />
      <CaseStudies />
      <NatureSeries />
      <Exhibitions />
      <Journal />
      <About />
    </div>
  );
};

export default App;