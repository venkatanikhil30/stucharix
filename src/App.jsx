import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TypewriterDemo from './components/TypewriterDemo';
import Problem from './components/Problem';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TypewriterDemo />
        <Problem />
        <Solution />
        <HowItWorks />
        <Benefits />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
