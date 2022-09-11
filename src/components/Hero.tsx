/* eslint-disable @typescript-eslint/no-unused-vars */
import { Canvas, useFrame } from '@react-three/fiber';
import gsap from 'gsap';
import React, { Suspense, useRef } from 'react';
// import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import Drei from '@react-three/drei';

// import * as THREE { Group } from 'three';
// import { Group, Mesh } from 'three';
// import { Clay } from './Three/Materials';
import Dalmore from './Three/Dalmore';

function Hero() {
  return (
    <section className="h-screen w-full ">
      <Canvas>
        <fog attach="fog" args={['#0000ff']} />
        <spotLight color="#fff" position={[0, 0, -50]} intensity={100} />
        {/* <pointLight color="#ff0000" position={[-20, 10, -30]} intensity={100} /> */}
        <directionalLight
          color="#fff"
          position={[25, 5, -5]}
          intensity={0.15}
          castShadow
        />
        <directionalLight
          color="#0000ff"
          position={[-25, 5, 10]}
          intensity={0.1}
          castShadow
        />
        <Suspense fallback={null}>
          <Dalmore />
        </Suspense>
      </Canvas>
    </section>
  );
}
export default Hero;
