import React from 'react';
import Hero from '../components/Hero';
import TypewriterDemo from '../components/TypewriterDemo';
import Problem from '../components/Problem';
import Solution from '../components/Solution';
import HowItWorks from '../components/HowItWorks';
import Benefits from '../components/Benefits';
import CTA from '../components/CTA';

const Home = () => {
    return (
        <>
            <Hero />
            <TypewriterDemo />
            <Problem />
            <Solution />
            <HowItWorks />
            <Benefits />
            <CTA />
        </>
    );
};

export default Home;
