import { useRef, useEffect, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export function Pikachu(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/models/pikachu.glb');
  const { actions } = useAnimations(animations, group);
  const [selectedAction, setSelectedAction] = useState('Dance');

  const model = {
    blendDuration: 0.25,
  };

  useEffect(() => {
    if (actions[selectedAction]) {
      actions[selectedAction].reset().fadeIn(model.blendDuration).play();
    }

    return () => {
      if (actions[selectedAction]) {
        actions[selectedAction].fadeOut(model.blendDuration);
      }
    };
  }, [actions, selectedAction]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          position={[0.006, -0.018, -0.048]}
          rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Pikachu_49" rotation={[Math.PI / 2, 0, 0]} scale={0.025}>
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.Material_160}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials['Material.001']}
                    skeleton={nodes.Object_8.skeleton}
                  />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials['Material.003']}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <skinnedMesh
                    name="Object_10"
                    geometry={nodes.Object_10.geometry}
                    material={materials['Material.002']}
                    skeleton={nodes.Object_10.skeleton}
                  />
                  <group name="PikachuM_48" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}


useGLTF.preload('/models/pikachu.glb');