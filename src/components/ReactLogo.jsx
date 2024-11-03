import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { gsap } from 'gsap';

export function ReactLogo(props) {
  const { nodes, materials } = useGLTF('/models/react.glb');
  const groupRef = useRef();
  
  // Set initial position based on device size
  useEffect(() => {
    if (groupRef.current) {
      const initialPosition = props.position;
      groupRef.current.position.set(...initialPosition);
    }
  }, [props.position]);

  // Continuous rotation
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.z -= 0.01;
    }
  });

  const handleMouseEnter = () => {
    // Get current position to determine range for random movement
    const currentX = groupRef.current.position.x;
    const currentY = groupRef.current.position.y;
    
    // Generate new random position around the current position
    const newPosition = {
      x: currentX + (Math.random() * 4 - 2), // Random offset of ±2 from current position
      y: currentY + (Math.random() * 4 - 2),
      z: Math.random() * 2 - 1 // Keep Z movement smaller
    };

    // Animate to new position
    gsap.to(groupRef.current.position, {
      x: newPosition.x,
      y: newPosition.y,
      z: newPosition.z,
      duration: 1,
      ease: 'power2.out',
    });
  };

  return (
    <group
      ref={groupRef}
      {...props}
      dispose={null}
      onPointerEnter={handleMouseEnter}
    >
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[0, 7.935, 18.102]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[39.166, 39.166, 52.734]}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/models/react.glb');