import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Hero } from './components/Hero';
import { CaseStudies } from './components/CaseStudies';
import { NatureSeries } from './components/NatureSeries';
import { Exhibitions } from './components/Exhibitions';
import { Journal } from './components/Journal';
import { About } from './components/About';
import WorkDetail from './components/WorkDetail';
import JournalDetail from './components/JournalDetail';
import CaseStudyDetail from './components/CaseStudyDetail';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div id="scroll-container" className="h-screen w-full bg-stone-custom text-text-dark font-sans selection:bg-black selection:text-white overflow-y-auto snap-y snap-mandatory scroll-smooth">
            <Hero />
            <CaseStudies />
            <NatureSeries />
            <Exhibitions />
            <Journal />
            <About />
          </div>
        } />
        <Route path="/work/:id" element={<WorkDetail />} />
        <Route path="/journal/:id" element={<JournalDetail />} />
        <Route path="/case-study/:id" element={<CaseStudyDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
