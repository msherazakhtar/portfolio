import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import SocialShowcase from './components/SocialShowcase';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useScrollReveal from './hooks/useScrollReveal';

export default function App() {
  // Activate scroll-triggered fade-up reveal animations
  useScrollReveal();

  return (
    <>
      <Header />
      <main style={{ marginTop: 'var(--header-height)' }}>
        <Hero />
        <About />
        <Services />
        <Projects />
        <SocialShowcase />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
