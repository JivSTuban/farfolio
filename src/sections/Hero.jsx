import { extend, Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import React, { Suspense, useEffect, useState } from 'react'
import { Computer } from '../components/Computer'
import CanvasLoader from '../components/CanvasLoader'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants'
import Target from '../components/Target.jsx'
import { Lazer } from '../components/Lazer.jsx'
import {ReactLogo} from '../components/ReactLogo.jsx'
import { Labubu } from '../components/Labubu.jsx'
import Button from '../components/Button.jsx'
import { Link } from 'react-scroll'
import Alert from '../components/Alert.jsx'
import useAlert from '../hooks/useAlert.js'

const Hero = () => {
    const isMobile = useMediaQuery({minWidth: 440, maxWidth: 768})
    const isTablet = useMediaQuery({minWidth:768, maxWidth: 1024})
    const isSmall = useMediaQuery({minWidth: 0, maxWidth: 440})

    const { alert, showAlert, hideAlert } = useAlert();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleDownloadClick = () => {
      showAlert({ show:true, text: 'Redirecting to my CV', type: 'success' });
      setTimeout(hideAlert, 3000);
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

    const sizes = calculateSizes(isMobile, isTablet, isSmall)
  return (
    
      <>
      {alert.show && <Alert {...alert} />}
        <div className="w-full mx-auto flex flex-col mt-20 c-space gap-3">
            <p className="lg:text-2xl md:text-xl sm:text-lg text-3xl font-medium text-white text-center font-generalsans">
                Hi, I am Jiv <span className="waving-hand">👋</span>
            </p>
            <p className="hero_tag text-gray_gradient">Developing Websites and APIs</p>
        </div>
        <div className="w-full h-full absolute inset-0">
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
        <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
          <a href="https://drive.google.com/file/d/1ZGC12GkLalDcdKqgBLGfbZY5LRJtmqXt/view?usp=drive_link" download onClick={handleDownloadClick}>
            <Button name="View My CV" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
          </a>
      </div>
      </>
  )
}

export default Hero