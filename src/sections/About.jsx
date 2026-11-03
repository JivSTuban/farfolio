import { useState, memo, Suspense, useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';
import Button from '../components/Button.jsx';
import { Link } from 'react-scroll';
import { Canvas } from '@react-three/fiber';
import { Center } from '@react-three/drei';
import { Midoriya } from '../components/Midoriya.jsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { person, education } from '../data/profile.js';

gsap.registerPlugin(ScrollTrigger);

// Created once at module level: building it inside the component made a new component type on
// every render, so copying the email address re-mounted the whole WebGL globe.
const MemoizedGlobe = memo(Globe);

const dev = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';
// The tools used day to day (resume, Technical Skills). n8n has no devicon in the CDN set we load, so it is local.
const stackIcons = [
  { name: 'TypeScript', src: `${dev}/typescript/typescript-original.svg` },
  { name: 'React', src: `${dev}/react/react-original.svg` },
  { name: 'Next.js', src: `${dev}/nextjs/nextjs-original.svg` },
  { name: 'Node.js', src: `${dev}/nodejs/nodejs-original.svg` },
  { name: 'NestJS', src: `${dev}/nestjs/nestjs-original.svg` },
  { name: 'Python', src: `${dev}/python/python-original.svg` },
  { name: 'PostgreSQL', src: `${dev}/postgresql/postgresql-original.svg` },
  { name: 'Supabase', src: `${dev}/supabase/supabase-original.svg` },
  { name: 'n8n', src: '/assets/n8n-color.svg' },
  { name: 'Playwright', src: `${dev}/playwright/playwright-original.svg` },
  { name: 'Flutter', src: `${dev}/flutter/flutter-original.svg` },
  { name: 'Docker', src: `${dev}/docker/docker-original.svg` },
  { name: 'Google Cloud', src: `${dev}/googlecloud/googlecloud-original.svg` },
  { name: 'AWS', src: `${dev}/amazonwebservices/amazonwebservices-original.svg` },
  { name: 'Tailwind CSS', src: `${dev}/tailwindcss/tailwindcss-original.svg` },
  { name: 'Git', src: `${dev}/git/git-original.svg` },
];

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const globeRef = useRef();
  const card1Ref = useRef();
  const card2Ref = useRef();
  const card3Ref = useRef();
  const card4Ref = useRef();
  const card5Ref = useRef();

  useEffect(() => {
    // Everything that moves is inside matchMedia, so with reduced motion the cards simply
    // render in place (they are never hidden first) and the globe does not spin.
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      if (globeRef.current) {
        gsap.to(globeRef.current, { rotation: 360, duration: 30, repeat: -1, ease: 'linear' });
      }

      const cards = [
        { ref: card1Ref, x: -100 },
        { ref: card2Ref, x: 100 },
        { ref: card3Ref, y: 100 },
        { ref: card4Ref, x: -100 },
        { ref: card5Ref, x: 100 },
      ];

      cards.forEach(({ ref, x = 0, y = 0 }) => {
        gsap.fromTo(
          ref.current,
          { opacity: 0, x, y },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 1.2,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: ref.current,
              start: 'top bottom-=100',
              end: 'top center',
              toggleActions: 'play none none reverse',
            },
          },
        );
      });
    });
    return () => mm.revert();
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(person.email);
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
      <div className="col-span-1 xl:row-span-3" ref={card1Ref}>
        <div className="grid-container">
          <Canvas style={{ pointerEvents: 'none' }} aria-hidden="true">
            <ambientLight intensity={2} />
            <directionalLight position={[0, 0, 0]} />
            <Center>
              <Suspense fallback={null}>
                <group>
                  <Midoriya scale={3} position={[0, -7, 0]} />
                </group>
              </Suspense>
            </Center>
          </Canvas>
          <div>
            <h2 className="grid-headtext">Hi, I&apos;m Jiv Tuban</h2>
            <p className="grid-subtext">{person.summary}</p>
          </div>
        </div>
      </div>

      <div className="col-span-1 xl:row-span-3" ref={card2Ref}>
        <div className="grid-container">
          <ul className="w-full sm:h-[276px] h-fit p-4 grid grid-cols-4 gap-4 place-items-center">
            {stackIcons.map((t) => (
              <li key={t.name}>
                <img alt={t.name} title={t.name} width="40" height="40" loading="lazy" className="w-10 h-10" src={t.src} />
              </li>
            ))}
          </ul>
          <div>
            <h2 className="grid-headtext">Tech Stack</h2>
            <p className="grid-subtext">
              TypeScript and Python services on Supabase and Postgres, n8n and Playwright for automation, Google Cloud and AWS for hosting.
            </p>
          </div>
        </div>
      </div>

      <div className="col-span-1 xl:row-span-4" ref={card3Ref}>
        <div className="grid-container">
          <div className="globe-container" ref={globeRef} aria-hidden="true">
            <MemoizedGlobe
              height={326}
              width={326}
              backgroundColor="rgba(0, 0, 0, 0)"
              backgroundImageOpacity={0.5}
              showAtmosphere
              showGraticules
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
              bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              labelsData={[{ lat: 10.281809969650284, lng: 123.9456486269807, text: 'Cebu, Philippines', color: 'white', size: 20  }]}
              enablePointerInteraction={false}
            />
          </div>
          <div>
            <h2 className="grid-headtext">I work across time zones</h2>
            <p className="grid-subtext">Based in <strong>Cebu, Philippines</strong>. Clients so far in New York, Houston, Los Angeles and Lafayette.</p>
            <Link to="contact" smooth={true} duration={200}>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </Link>
          </div>
        </div>
      </div>

      <div className="xl:col-span-2 xl:row-span-3" ref={card4Ref}>
        <div className="grid-container">
          <img src="/assets/CIT.png" alt="Cebu Institute of Technology University seal" className="w-full sm:h-[266px] h-fit object-contain" />

          <div>
            <h2 className="grid-headtext">My Education</h2>
            <p className="grid-subtext">
              {education.degree}, graduated {education.graduated} from <strong>{education.school}</strong>.
            </p>
          </div>
        </div>
      </div>

      <div className="xl:col-span-1 xl:row-span-2" ref={card5Ref}>
        <div className="grid-container">
          <img
            src="/assets/grid4.png"
            alt=""
            className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
          />

          <div className="space-y-2">
            <p className="grid-subtext text-center">Contact me</p>
            <button type="button" className="copy-container w-full" onClick={handleCopy} aria-label={`Copy ${person.email}`}>
              <img src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} alt="" />
              <span className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">{person.email}</span>
            </button>
            <p className="sr-only" role="status">{hasCopied ? 'Email address copied' : ''}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
