import { extend, Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import React, { Suspense, useEffect, useState } from 'react'
import { Computer } from '../components/Computer.jsx'
import CanvasLoader from '../components/CanvasLoader.jsx'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants/index.js'
import Target from '../components/Target.jsx'
import { Lazer } from '../components/Lazer.jsx'
import {ReactLogo} from '../components/ReactLogo.jsx'
import { Labubu } from '../components/Labubu.jsx'
import Button from '../components/Button.jsx'
import { Link } from 'react-scroll'
import Alert from '../components/Alert.jsx'
import useAlert from '../hooks/useAlert.js'
import CV from '../components/CV.jsx'

const Hero = () => {
    const isMobile = useMediaQuery({minWidth: 440, maxWidth: 768})
    const isTablet = useMediaQuery({minWidth:768, maxWidth: 1024})
    const isSmall = useMediaQuery({minWidth: 0, maxWidth: 440})

    const { alert, showAlert, hideAlert } = useAlert();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [showCV, setShowCV] = useState(false);

    const handleCVClick = (e) => {
      e.preventDefault();
      setShowCV(true);
      document.body.style.overflow = 'hidden';
      showAlert({ show:true, text: 'Displayed CV 😬', type: 'success' });
      setTimeout(hideAlert, 3000);
    };

    const handleCloseCV = () => {
      setShowCV(false);
      document.body.style.overflow = 'unset';
    };

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    const sizes = calculateSizes(isSmall, isMobile, isTablet, )
  return (
    <>
      {alert.show && <Alert {...alert} />}
      {showCV && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="relative h-[95vh] w-[95%] sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[50%] max-w-6xl shadow-3xl overflow-hidden rounded-2xl">
            <button
              onClick={handleCloseCV}
              className="absolute right-2 top-2 sm:right-3 sm:top-3 md:right-4 md:top-4 z-10 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
            >
              <span className="sr-only">Close</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="h-full overflow-y-auto scrollbar-hide">
              <CV />
            </div>
          </div>
        </div>
      )}
      <div className="hero_container">
       <div className="hero_content">
         <p className="lg:text-3xl md:text-xl sm:text-lg text-3xl font-medium text-white text-center font-generalsans mb-4">
           Hi, I am Jiv <span className="waving-hand">👋</span>
         </p>
         <p className="hero_tag text-gray_gradient">
           Developing Websites and APIs
         </p>
       </div>
       <div className="relative h-[60vh] md:h-[70vh]">
         <Canvas className='w-full h-full'>
           <Suspense fallback={<CanvasLoader/>}>
             <PerspectiveCamera makeDefault position={[0, 0, 30]} />
             <Computer Scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.4, 0, 0]} />
             <group>
               <Target position={sizes.targetPosition}/>
               <Lazer position={sizes.lazerPosition} rotation={[0, 0, 0]} scale={isMobile || isSmall ? 0.4 : 0.6}/>
               <ReactLogo
                 scale={isMobile || isSmall ? 0.3 : 0.5}
                 position={sizes.reactPosition}
               />
               <Labubu windowWidth={windowWidth} position={sizes.ringPosition} scale={isMobile || isSmall ? 3 : 4.5} rotation={[0,0.1,0]} />
             </group>
             <ambientLight intensity={1} />
             <directionalLight intensity={1} position={[10, 10, 10]} />
           </Suspense>
         </Canvas>
       </div>
       <div className="absolute bottom-8 sm:bottom-10 left-0 right-0 w-full z-10 c-space">
         <a href="#" onClick={handleCVClick}>
           <Button name="View My CV" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
         </a>
       </div>
      </div>
    </>
  )
}

export default Hero
