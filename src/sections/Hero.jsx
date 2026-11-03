import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import React, { Suspense, useCallback, useEffect, useState } from 'react'
import { Computer } from '../components/Computer.jsx'
import CanvasLoader from '../components/CanvasLoader.jsx'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants/index.js'
import Target from '../components/Target.jsx'
import { Lazer } from '../components/Lazer.jsx'
import {ReactLogo} from '../components/ReactLogo.jsx'
import { Labubu } from '../components/Labubu.jsx'
import Button from '../components/Button.jsx'
import CVModal from '../components/CVModal.jsx'

const Hero = () => {
    const isMobile = useMediaQuery({minWidth: 440, maxWidth: 768})
    const isTablet = useMediaQuery({minWidth:768, maxWidth: 1024})
    const isSmall = useMediaQuery({minWidth: 0, maxWidth: 440})

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [showCV, setShowCV] = useState(false);
    const closeCV = useCallback(() => setShowCV(false), []);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    const sizes = calculateSizes(isSmall, isMobile, isTablet)
  return (
    <>
      {showCV && <CVModal onClose={closeCV} />}
      <div className="hero_container">
       <div className="hero_content">
         <h1 className="lg:text-3xl md:text-xl sm:text-lg text-3xl font-medium text-white text-center font-generalsans mb-4">
           Hi, I am Jiv <span className="waving-hand" aria-hidden="true">👋</span>
         </h1>
         <p className="hero_tag text-gray_gradient">
           AI Engineer building production automation and RAG systems
         </p>
       </div>
       <div className="relative h-[60vh] md:h-[70vh]" aria-hidden="true">
         <Canvas className='w-full h-full'>
           <Suspense fallback={<CanvasLoader/>}>
             <PerspectiveCamera makeDefault position={[0, 0, 30]} />
             <Computer Scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.4, 0, 0]} />
             <group>
               <Target position={sizes.targetPosition} scale={isMobile || isSmall ? 0.3 : 0.6}/>
               <Lazer position={sizes.lazerPosition} rotation={[0, 0, 0]} scale={isMobile || isSmall ? 0.5 : 0.6}/>
               <ReactLogo
                 scale={0.5}
                 position={sizes.reactPosition}
               />
               <Labubu windowWidth={windowWidth} position={sizes.ringPosition} scale={isMobile || isSmall ? 4 : 4.5} rotation={[0,0.1,0]} />
             </group>
             <ambientLight intensity={1} />
             <directionalLight intensity={1} position={[10, 10, 10]} />
           </Suspense>
         </Canvas>
       </div>
       <div className="absolute bottom-8 sm:bottom-10 left-0 right-0 w-full z-10 c-space">
         <Button name="View My CV" isBeam containerClass="sm:w-fit w-full sm:min-w-96" onClick={() => setShowCV(true)} />
       </div>
      </div>
    </>
  )
}

export default Hero
