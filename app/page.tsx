'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Features from './components/Features';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, 
      once: true, 
    });
  }, []);

  return (
    <div>
      <Hero />
      <Menu />
      <About />
      <Features />
    </div>
  );
};

export default Home;
