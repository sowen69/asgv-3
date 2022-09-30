/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  ContactShadows,
  MeshReflectorMaterial,
  OrbitControls,
  Plane,
} from '@react-three/drei';
import { Position } from '@react-three/drei/helpers/Position';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import React, { Suspense, useRef } from 'react';
import { Color, MeshLambertMaterial } from 'three';
// import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import Drei from '@react-three/drei';

import Dalmore from './Three/Dalmore';

function Hero() {
  return (
    <section className="h-screen w-full ">
      <Canvas camera={{ fov: 35, near: 0.1, far: 1000, position: [0, 5, 10] }}>
        <fog attach="fog" args={['#0000ff']} near={10} />
        <spotLight
          color="#ffffff"
          position={[0, 10, -1000]}
          intensity={0.5}
          // castShadow
        />
        <pointLight
          color="#0000ff"
          position={[-20, 10, -30]}
          intensity={2}
          castShadow
        />
        <directionalLight
          color="#0000ff"
          position={[25, 5, -5]}
          intensity={1}
          castShadow
        />
        <directionalLight
          color="#0000ff"
          position={[-25, 5, 10]}
          intensity={2}
          castShadow
        />
        <OrbitControls />

        <Suspense fallback={null}>
          <mesh
            position={[0, -2.4, -200]}
            rotation={[-Math.PI / 2, 0, 0]}
            receiveShadow
          >
            <planeBufferGeometry attach="geometry" args={[100, 500]} />
            <MeshReflectorMaterial
              attach="material"
              color="#000022"
              mirror={0}
              blur={[10, 10]}
              mixStrength={100}
              resolution={1024}
              depthScale={2}
              reflectorOffset={-0.4}
            />
          </mesh>
          <mesh castShadow receiveShadow position={[4, 0, 0]}>
            <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
            <meshLambertMaterial attach="material" color="#0000ff" />
          </mesh>
          {/* <ContactShadows
            opacity={1}
            scale={10}
            blur={1}
            far={10}
            resolution={256}
            color="#000000"
          /> */}
          <Dalmore castShadow />
        </Suspense>
      </Canvas>
    </section>
  );
}
export default Hero;
