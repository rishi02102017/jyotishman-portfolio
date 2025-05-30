import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Blogs from './components/Blogs';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import { useMediaQuery } from 'react-responsive';
import Achievements from './components/Achievements';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-background">
        <div className="text-4xl font-display font-bold hero-heading">
          JD
          <span className="inline-block ml-2 animate-pulse">.</span>
        </div>
      </div>
    );
  }

  return (
    <>
      {!isMobile && <Cursor />}
      <div className="relative">
        <Navbar activeSection={activeSection} />
        <AnimatePresence mode="wait">
          <main className="overflow-x-hidden">
            <section id="home">
              <Hero />
            </section>
            <section id="about">
              <About />
            </section>
            <section id="projects">
              <Projects />
            </section>
            <section id="experience">
              <Experience />
            </section>
            <section id="skills">
              <Skills />
            </section>
            <section id="blogs">
              <Blogs />
            </section>
            <section id="education">
              <Education />
            </section>
            <section id="certifications">
              <Certifications />
            </section>
            <section id="achievements">
              <Achievements />
            </section>
            <section id="contact">
              <Contact />
            </section>
            <Footer />
          </main>
        </AnimatePresence>
      </div>
    </>
  );
};

export default App;
