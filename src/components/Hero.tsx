/* eslint-disable @typescript-eslint/no-unused-vars */
import { Canvas } from '@react-three/fiber';
import gsap from 'gsap';
import React, { Suspense } from 'react';
// import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import Drei from '@react-three/drei';

// import * as THREE { Group } from 'three';
// import { Group, Mesh } from 'three';
// import { Clay } from './Three/Materials';
import Dalmore from './Three/Dalmore';

function Hero() {
  return (
    <section className="h-screen w-full">
      <Canvas>
        <Suspense fallback={null}>
          <Dalmore />
        </Suspense>
      </Canvas>
    </section>
  );
}
export default Hero;
