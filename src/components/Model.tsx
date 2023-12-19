import * as THREE from 'three';
import Cookies from 'js-cookie';

import { OrbitControls, useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { decodeToken } from 'react-jwt';

const { VITE_API_URL } = import.meta.env;

type GLTFResult = GLTF & {
  nodes: {
    Cube_1: THREE.Mesh;
    Cube_2: THREE.Mesh;
    Cube_3: THREE.Mesh;
    Plane: THREE.Mesh;
    Plane001: THREE.Mesh;
    Text: THREE.Mesh;
    Text001: THREE.Mesh;
    Text002: THREE.Mesh;
    Text003: THREE.Mesh;
    Text004: THREE.Mesh;
    Text005: THREE.Mesh;
    Text006: THREE.Mesh;
  };
  materials: {
    ['Material.001']: THREE.MeshStandardMaterial;
    ['Material.004']: THREE.MeshStandardMaterial;
    Material: THREE.MeshStandardMaterial;
    ['Material.003']: THREE.MeshStandardMaterial;
    Gold: THREE.MeshStandardMaterial;
    Silver: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements['group']) {
  const [clientUsername, setClientUsername] = useState('');

  const usernameJWT = () => {
    const getJWT = Cookies.get('UserjwtToken');
    if (getJWT) {
      const decodedTokenUsername = (decodeToken(getJWT) as { username: string })
        .username;
      setClientUsername(decodedTokenUsername);
    }
  };

  useEffect(() => {
    usernameJWT();
  }, [clientUsername]);

  const { nodes, materials } = useGLTF('/ccglb.glb') as GLTFResult;
  return (
    <>
      <group {...props} dispose={null}>
        <group
          position={[0, 0.022, 0]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-2.946, -0.021, -1.847]}
        >
          <mesh
            geometry={nodes.Cube_1.geometry}
            material={materials['Material.001']}
          />
          <mesh
            geometry={nodes.Cube_2.geometry}
            material={materials['Material.004']}
          />
          <mesh
            geometry={nodes.Cube_3.geometry}
            material={materials.Material}
          />
        </group>
        <mesh
          geometry={nodes.Plane001.geometry}
          material={materials.Gold}
          position={[-2.017, 0.034, -0.573]}
          scale={[0.392, 0.335, 0.362]}
        />
        <mesh
          geometry={nodes.Text.geometry}
          material={materials.Gold}
          position={[-2.45, 0.052, 0.662]}
          scale={0.504}
        />
        <mesh
          geometry={nodes.Text001.geometry}
          material={materials.Gold}
          position={[-1.126, 0.052, 0.662]}
          scale={0.504}
        />
        <mesh
          geometry={nodes.Text002.geometry}
          material={materials.Gold}
          position={[0.198, 0.052, 0.662]}
          scale={0.504}
        />
        <mesh
          geometry={nodes.Text003.geometry}
          material={materials.Gold}
          position={[1.538, 0.052, 0.662]}
          scale={0.504}
        />
        <mesh
          geometry={nodes.Text004.geometry}
          material={materials.Silver}
          position={[-1.6, 0.06, -0.768]}
          scale={0.69}
        />
        <mesh
          geometry={nodes.Text005.geometry}
          material={materials.Gold}
          position={[-2.453, 0.052, 1.559]}
          scale={0.428}
        />
        <mesh
          geometry={nodes.Text006.geometry}
          material={materials.Gold}
          position={[0.025, 0.052, 1.162]}
          scale={0.359}
        />
        <OrbitControls />
      </group>
    </>
  );
}

useGLTF.preload('/ccglb.glb');
