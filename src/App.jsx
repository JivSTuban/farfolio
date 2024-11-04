import React, { useEffect } from 'react';
import { Element, scroller } from 'react-scroll';
import About from "./sections/About";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";
import { navLinks } from './constants';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import ContactFormWrapper from './components/ContactFormWrapper';

function App() {
  useEffect(() => {
    const sections = navLinks.map((item) => item.href.substring(1));
    
    let currentSectionIndex = 0;
    const navbarHeight = document.querySelector('header')?.offsetHeight || 0;
    let isScrolling = false;

    const handleKeyDown = (event) => {
      if (isScrolling) return;

      if (event.key === 'ArrowDown') {
        // Scroll down
        if (currentSectionIndex < sections.length - 1) {
          currentSectionIndex++;
        }
      } else if (event.key === 'ArrowUp') {
        // Scroll up
        if (currentSectionIndex > 0) {
          currentSectionIndex--;
        }
      } else {
        return;
      }

      isScrolling = true;

      let offset = -navbarHeight;

      scroller.scrollTo(sections[currentSectionIndex], {
        duration: 200,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: offset,
      });

      setTimeout(() => {
        isScrolling = false;
      }, 200);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Element name="home" className='min-h-screen w-full flex flex-col relative'>
        <Hero />
      </Element>
      <Element name="about" className="c-space my-20">
        <About />
      </Element>
      <Element name="work" className="c-space my-40">
        <Projects />
      </Element>
      <Element name="contact" className="c-space">
        <ContactFormWrapper>
          <Contact />
        </ContactFormWrapper>
      </Element>
      <Footer />
    </main>
  );
}

export default App;