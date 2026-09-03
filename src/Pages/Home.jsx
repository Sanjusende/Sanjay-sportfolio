import React from 'react';
import Hero from '../Components/Hero';
import AboutUs from '../Components/AboutUs';
import Skills from '../Components/Skills';
import Experience from '../Components/Experience';
import Portfolio from '../Components/Portfolio';
import Education from '../Components/Education';
import Achievements from '../Components/Achievements';
import WhyWorkWithMe from '../Components/WhyWorkWithMe';
import ContactUs from '../Components/ContactUs';

const Home = () => {
  return (
    <main className="w-full bg-[#faf8f5] dark:bg-[#0d0f17] text-[#1e293b] dark:text-slate-100 min-h-screen transition-colors duration-300">
      <Hero />
      <AboutUs />
      <Skills />
      <Experience />
      <Portfolio />
      <Education />
      <Achievements />
      <WhyWorkWithMe />
      <ContactUs />
    </main>
  );
};

export default Home;
