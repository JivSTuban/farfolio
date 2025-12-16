import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Target = (props) => {
  const targetRef = useRef();
  const { scene } = useGLTF('/models/autumn_sword.glb');

  useGSAP(() => {
    gsap.to(targetRef.current.rotation, {
      y: targetRef.current.rotation.y + 0.5,
      duration: 1,
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <mesh {...props} ref={targetRef} rotation={[0.5, 2, 4.2]} scale={1}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Target;