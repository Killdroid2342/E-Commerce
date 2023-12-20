import * as THREE from 'three';

import { OrbitControls, useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Object_3: THREE.Mesh;
    Object_4: THREE.Mesh;
    Object_5: THREE.Mesh;
  };
  materials: {
    Material_3: THREE.MeshBasicMaterial;
    Card3initialSha: THREE.MeshBasicMaterial;
    Material_2: THREE.MeshBasicMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/card.glb') as GLTFResult;
  return (
    <>
      <group {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group position={[1.1, 4.192, 0]} scale={[4.241, 0.632, 4.241]}>
            <group position={[-0.259, -6.63, 0]} scale={[0.236, 1.582, 0.236]}>
              <mesh
                geometry={nodes.Object_3.geometry}
                material={materials.Material_3}
              />
              <mesh
                geometry={nodes.Object_4.geometry}
                material={materials.Card3initialSha}
              />
              <mesh
                geometry={nodes.Object_5.geometry}
                material={materials.Material_2}
              />
            </group>
          </group>
        </group>
      </group>
      <OrbitControls />
    </>
  );
}

useGLTF.preload('/ccglb.glb');
