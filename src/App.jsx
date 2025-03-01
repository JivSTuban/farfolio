import React, { useEffect } from 'react';
import { Element, scroller } from 'react-scroll';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';
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
    // Initialize n8n chat
    createChat({
      webhookUrl: 'https://primary-production-1218.up.railway.app/webhook/ffcf29b6-19e9-40fd-81a6-132910560043/chat',
      mode: 'window',
      showWelcomeScreen: false,
      target: '#n8n-chat',
      metadata: {
        theme: 'dark',
      },
      initialMessages: [
        '👋 Hello! Welcome to Jiv\'s Portfolio',
        "I'm your personal AI guide here to help you learn more about Jiv's work, skills, and experience. Feel free to ask me anything!",
        "For example, you can ask about:\n• Jiv's technical skills\n• Project details\n• Work experience\n• Education background"
      ],
      i18n: {
        en: {
          title: '💬 Chat with Portfolio AI',
          subtitle: '', // Remove default subtitle
          footer: '',
          getStarted: 'Start Exploring',
          inputPlaceholder: 'Ask me about Jiv\'s work...',
        },
      }
    });

    // Section navigation setup
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
      <div id="n8n-chat" />
    </main>
  );
}

export default App;