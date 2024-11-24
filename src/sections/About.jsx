import { useState, memo, Suspense } from 'react';
import Globe from 'react-globe.gl';
import Button from '../components/Button.jsx';
import { Link } from 'react-scroll';
import { Canvas } from '@react-three/fiber';
import { Center } from '@react-three/drei';
import { Midoriya } from '../components/Midoriya.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const MemoizedGlobe = memo(Globe);

  const handleCopy = () => {
    navigator.clipboard.writeText('jivtuban14@gmail.com');
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
                <Canvas style={{ pointerEvents: 'none' }}>
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
              <p className="grid-headtext">Hi, I&apos;m Jiv Tuban</p>
              <p className="grid-subtext">
                I am a web developer known for my friendly demeanor, good humor, and easy-going vibe, which has helped me build a wide and diverse network.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
          <div className="w-full sm:h-[276px] h-fit p-4 grid grid-cols-4 gap-4 place-items-center">
                <img alt="Java" className="w-10 h-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"/> 
                <img alt="Spring" className="w-10 h-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" />
                <img alt="C#" className="w-10 h-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" />
                <img alt="ASP.NET" className="w-10 h-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" />
                <img alt="Blazor" className="w-10 h-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blazor/blazor-original.svg" />
                <img alt="Django" className="w-10 h-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" />
                <img alt="PHP" className="w-10 h-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" />
                <img alt="Laravel" className="w-10 h-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" />
                <img alt="Git" className="w-10 h-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                <img alt="HTML" className="w-10 h-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" />
                <img alt="CSS" className="w-10 h-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" />
                <img alt="JavaScript" className="w-10 h-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
                <img alt="React" className="w-10 h-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                <img alt="Python" className="w-10 h-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg" />
                <img alt="GitHub" className="w-10 h-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                <img alt="Vite" className="w-10 h-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" />
            </div>
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
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
              />
            </div>
            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in <strong>Cebu, Philippines</strong> and open to remote work worldwide.</p>
              <Link to="contact" smooth={true} duration={200}>
                <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
              </Link>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/CIT.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Education</p>
              <p className="grid-subtext">
                I graduated with a Bachelor&apos;s Degree in Information Technology (Software Development) from <strong>Cebu Institute of Technology - University</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">jivtuban14@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default About;