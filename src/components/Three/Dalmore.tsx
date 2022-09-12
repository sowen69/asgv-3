/* eslint-disable react/jsx-props-no-spreading */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { Mesh, MeshStandardMaterial } from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { useFrame } from '@react-three/fiber';
import { Clay } from './Materials';

type GLTFResult = GLTF & {
  nodes: {
    dalmore002: THREE.Mesh;
  };
  materials: {
    ['Letherd dots']: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Dalmore2.glb') as GLTFResult;
  const mesh = useRef<Mesh | null>(null);

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();

    if (mesh.current) {
      mesh.current.rotation.z = a;
      // mesh.current.rotation.y = a / 2;
    }
  });
  return (
    <group position={[0, -1.5, 0]} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.dalmore002.geometry}
        material={materials['Letherd dots']}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.02}
        ref={mesh}
      />
    </group>
  );
}

useGLTF.preload('/Dalmore2.glb');
