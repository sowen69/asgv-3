/* eslint-disable @typescript-eslint/no-unused-vars */
import { Canvas, useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';
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
        {/* <spotLight color="#fff" position={[0, 0, -50]} intensity={1} /> */}
        <pointLight color="#000088" position={[-20, 10, -30]} intensity={5} />
        <directionalLight
          color="#fff"
          position={[25, 5, -5]}
          intensity={2}
          // castShadow
        />
        <directionalLight
          color="#0000ff"
          position={[-25, 5, 10]}
          intensity={2}
          // castShadow
        />
        <Suspense fallback={null}>
          {/* <motion.group
            animate={{
              opacity: 0,
              transition: {
                duration: 5,
              },
            }}
          > */}
          <Dalmore />
          {/* </motion.group> */}
        </Suspense>
      </Canvas>
    </section>
  );
}
export default Hero;
