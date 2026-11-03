import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Suspense, useMemo, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';
import { Send, Lock, Database, ShieldCheck, ArrowUpRight } from 'lucide-react';

import { showcase, alsoShipped } from '../data/profile.js';
import CanvasLoader from '../components/CanvasLoader.jsx';
import DemoComputer from '../components/DemoComputer.jsx';
import { drawProjectScreen } from '../components/projectScreen.js';

const icons = { send: Send, lock: Lock, database: Database, shield: ShieldCheck };
const spotlights = ['/assets/spotlight1.png', '/assets/spotlight2.png', '/assets/spotlight3.png', '/assets/spotlight4.png'];
const projectCount = showcase.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  useGSAP(() => {
    // Opacity-only fade, skipped entirely when the visitor asks for reduced motion.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    gsap.fromTo(`.animatedText`, { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' });
  }, [selectedProjectIndex]);

  const currentProject = showcase[selectedProjectIndex];
  const Icon = icons[currentProject.icon];
  const screen = useMemo(() => drawProjectScreen(currentProject), [currentProject]);

  return (
    <section className="my-20">
      <h2 className="head-text">My Selected Projects</h2>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0" aria-hidden="true">
            <img src={spotlights[selectedProjectIndex % spotlights.length]} alt="" className="w-full h-96 object-cover rounded-xl" />
          </div>

          {/* Icon and pager share the top row: its height never changes, so Next stays under the pointer. */}
          <div className="relative flex items-center justify-between gap-4">
            <div className="p-3 w-fit rounded-lg bg-black-300 border border-black-500">
              <Icon className="w-10 h-10 text-white" strokeWidth={1.5} aria-hidden="true" />
            </div>
            <div className="flex items-center gap-4">
              <button type="button" className="arrow-btn" onClick={() => handleNavigation('previous')} aria-label="Previous project">
                <img src="/assets/left-arrow.png" alt="" />
              </button>
              <p className="text-white-600 tabular-nums w-12 text-center" aria-live="polite">
                {selectedProjectIndex + 1} / {projectCount}
              </p>
              <button type="button" className="arrow-btn" onClick={() => handleNavigation('next')} aria-label="Next project">
                <img src="/assets/right-arrow.png" alt="" className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="relative flex flex-col gap-4 text-white-600 my-5">
            <h3 className="text-white text-2xl font-semibold animatedText">{currentProject.name}</h3>
            <p className="animatedText">
              {currentProject.tagline} <span className="text-white-600">({currentProject.when})</span>
            </p>
            <ul className="flex flex-col gap-3 animatedText">
              {currentProject.bullets.map((b) => (
                <li key={b.slice(0, 24)} className="flex items-start">
                  <span className="mt-2.5 mr-3 w-1.5 h-1.5 bg-white-600 rounded-full flex-shrink-0" aria-hidden="true"></span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex items-center justify-between flex-wrap gap-5">
            <ul className="flex items-center gap-2 flex-wrap">
              {currentProject.stack.map((tag) => (
                <li key={tag} className="rounded-md px-3 py-1.5 bg-black-300 text-sm text-white-800">
                  {tag}
                </li>
              ))}
            </ul>

            {currentProject.href && (
              <a
                className="flex items-center gap-2 cursor-pointer text-white-600 hover:text-white transition-colors"
                href={currentProject.href}
                target="_blank"
                rel="noreferrer">
                <span>Check Project</span>
                <img src="/assets/arrow-up.png" alt="" className="w-3 h-3" />
              </a>
            )}
          </div>

        </div>

        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full" aria-hidden="true">
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer screen={screen} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>

      <h3 className="mt-16 mb-4 text-xl font-semibold text-white">Also shipped</h3>
      <ul className="divide-y divide-black-300 border-y border-black-300">
        {alsoShipped.map((w) => (
          <li key={w.name} className="py-4 grid md:grid-cols-[260px_1fr_auto] gap-x-8 gap-y-1 md:items-baseline">
            <p className="font-semibold text-white">{w.name}</p>
            <p className="text-white-600">{w.text}</p>
            <a
              href={w.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-white-800 hover:text-white transition-colors">
              {w.cta}
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
