/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { motion, Variants } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { Suspense } from 'react';
import Hero from '../components/Hero';
import SlideInRight from '../components/transitions/SlideInRight';
import SlideInLeft from '../components/transitions/SlideInLeft';
import MoreButton from '../components/MoreButton';
import FadeIn from '../components/transitions/FadeIn';
import Services from '../components/Services';
import Isosphere from '../components/Three/Isosphere';
import Cone from '../components/Three/Cone';
import Porsche from '../components/Three/Porsche';
import Dalmore from '../components/Three/Dalmore';

function Home() {
  return (
    <div className="home px-7">
      {/* <Hero /> */}
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
          <Dalmore />
        </Suspense>
        <Html fullscreen wrapperClass="ani" as="section">
          <section
            id="cgi"
            className="relative cgi h-screen w-full pt-20 bg-transparent"
          >
            <header className="text-right">
              {/* <h2 className=" flex flex-row-reverse text-right justify-items-end">
                <svg
                  id="Layer_2"
                  data-name="Layer 2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 254.2 100.21"
                  className="mb-4 max-w-sm justify-self-end"
                >
                  <g id="Layer_1-2" data-name="Layer 1">
                    <motion.g
                      variants={svgVariants}
                      initial="initial"
                      animate="animate"
                    >
                      <motion.path
                        variants={svgVariants}
                        className="cls-1"
                        d="M128.71,10.73h-7.35c-.05-.61-.19-1.16-.41-1.66-.22-.5-.53-.92-.91-1.28-.39-.36-.85-.64-1.4-.83-.55-.2-1.17-.29-1.86-.29-1.22,0-2.24,.3-3.08,.89s-1.47,1.44-1.9,2.54c-.43,1.1-.65,2.43-.65,3.97,0,1.63,.22,3,.66,4.1,.44,1.1,1.08,1.92,1.91,2.48,.83,.55,1.84,.83,3.01,.83,.67,0,1.27-.08,1.8-.25,.53-.17,.99-.42,1.38-.74s.71-.71,.96-1.17,.41-.97,.5-1.54l7.35,.05c-.09,1.13-.4,2.28-.95,3.45s-1.32,2.25-2.33,3.23c-1,.99-2.24,1.78-3.72,2.38-1.48,.6-3.19,.9-5.15,.9-2.45,0-4.65-.53-6.59-1.58-1.94-1.05-3.48-2.6-4.6-4.64-1.13-2.04-1.69-4.54-1.69-7.49s.57-5.48,1.72-7.51c1.15-2.04,2.69-3.58,4.64-4.63,1.95-1.05,4.12-1.57,6.52-1.57,1.69,0,3.24,.23,4.65,.69,1.42,.46,2.66,1.13,3.73,2.01,1.07,.88,1.93,1.97,2.58,3.25,.65,1.29,1.05,2.76,1.19,4.42Z"
                      />
                      <motion.path
                        variants={svgVariants}
                        className="cls-1"
                        d="M148.59,9.53c-.11-.46-.29-.87-.53-1.22-.24-.35-.55-.65-.91-.9-.36-.25-.78-.43-1.25-.56-.47-.13-.99-.19-1.56-.19-1.22,0-2.25,.29-3.11,.87-.86,.58-1.51,1.42-1.95,2.52-.45,1.09-.67,2.42-.67,3.96s.21,2.9,.64,4.01c.43,1.11,1.06,1.96,1.9,2.55,.84,.59,1.89,.89,3.14,.89,1.1,0,2.02-.16,2.76-.48s1.28-.78,1.65-1.37c.36-.59,.55-1.16,.55-1.95h-4.85v-5.16h11.83v3.7c0,2.43-.51,4.51-1.54,6.24-1.03,1.72-2.45,3.04-4.25,3.96-1.8,.92-3.87,1.37-6.2,1.37-2.6,0-4.88-.55-6.84-1.65s-3.49-2.68-4.59-4.72-1.65-4.47-1.65-7.29c0-2.21,.34-4.16,1.01-5.86,.67-1.7,1.61-3.14,2.81-4.32,1.2-1.18,2.58-2.07,4.16-2.67,1.57-.6,3.26-.91,5.06-.91,1.58,0,3.05,.22,4.41,.67s2.56,1.08,3.61,1.9c1.05,.82,1.89,1.79,2.53,2.91,.64,1.12,1.03,2.35,1.17,3.69h-7.32Z"
                      />
                      <motion.path
                        variants={svgVariants}
                        className="cls-1"
                        d="M166.13,.72V27.41h-7.25V.72h7.25Z"
                      />
                      <motion.path
                        variants={svgVariants}
                        className="cls-1"
                        d="M193.23,.72h-9.91l-8.81,26.69h7.82l1.54-5.1h8.81l1.54,5.1h7.82L193.23,.72Zm-7.72,16.16l2.66-8.81h.21l2.66,8.81h-5.53Z"
                      />
                      <motion.path
                        variants={svgVariants}
                        className="cls-1"
                        d="M226.95,.72V27.41h-6.05l-9.64-14.02h-.16v14.02h-7.25V.72h6.15l9.49,13.97h.21V.72h7.25Z"
                      />
                      <motion.path
                        variants={svgVariants}
                        className="cls-1"
                        d="M239.92,27.41h-10.27V.72h10.17c2.75,0,5.12,.53,7.12,1.6,2,1.06,3.55,2.59,4.64,4.59s1.64,4.38,1.64,7.16-.54,5.17-1.63,7.16c-1.09,1.99-2.62,3.52-4.61,4.59-1.99,1.06-4.34,1.6-7.05,1.6Zm-3.02-6.15h2.76c1.32,0,2.45-.21,3.38-.64,.93-.43,1.65-1.16,2.14-2.2s.74-2.49,.74-4.35-.25-3.31-.75-4.35c-.5-1.04-1.23-1.78-2.19-2.2-.96-.43-2.14-.64-3.53-.64h-2.55v14.39Z"
                      />
                      <motion.path
                        variants={svgVariants}
                        className="cls-1"
                        d="M96.61,41.23c-.83-1.41-1.98-2.51-3.47-3.29-1.48-.79-3.22-1.18-5.2-1.18h-11.52v26.69h7.25v-7.92h4.01c2.03,0,3.81-.38,5.34-1.14,1.52-.75,2.71-1.83,3.56-3.23,.84-1.4,1.27-3.05,1.27-4.96s-.42-3.55-1.24-4.97Zm-6.81,6.94c-.33,.55-.79,.98-1.39,1.28-.61,.3-1.34,.45-2.19,.45h-2.55v-7.35h2.55c.85,0,1.58,.14,2.19,.44,.6,.29,1.06,.7,1.39,1.25,.33,.54,.49,1.19,.49,1.96s-.16,1.41-.49,1.97Z"
                      />
                      <motion.path
                        variants={svgVariants}
                        className="cls-1"
                        d="M116.66,53.5c1.38-.66,2.47-1.6,3.27-2.83,.84-1.31,1.27-2.93,1.27-4.84s-.42-3.52-1.24-4.87c-.83-1.36-1.98-2.39-3.47-3.12-1.48-.72-3.22-1.08-5.2-1.08h-11.52v26.69h7.25v-8.81h2.51l4.68,8.81h7.87l-5.42-9.95Zm-9.64-10.95h2.55c.85,0,1.58,.11,2.18,.34,.61,.23,1.07,.59,1.4,1.07,.32,.48,.49,1.11,.49,1.87s-.17,1.37-.49,1.84c-.33,.47-.79,.81-1.4,1.02-.6,.22-1.33,.32-2.18,.32h-2.55v-6.46Z"
                      />
                      <motion.path
                        variants={svgVariants}
                        className="cls-1"
                        d="M149.39,50.1c0,2.97-.58,5.48-1.73,7.51-1.16,2.04-2.72,3.58-4.68,4.63-1.96,1.05-4.15,1.57-6.57,1.57s-4.63-.53-6.59-1.58c-1.96-1.06-3.51-2.6-4.67-4.64s-1.73-4.53-1.73-7.49,.58-5.48,1.73-7.51c1.15-2.04,2.71-3.58,4.67-4.63,1.96-1.05,4.16-1.57,6.59-1.57s4.6,.52,6.57,1.57c1.96,1.05,3.52,2.59,4.68,4.63,1.16,2.04,1.73,4.54,1.73,7.51Zm-7.45,0c0-1.6-.21-2.95-.63-4.05s-1.04-1.93-1.86-2.5c-.82-.57-1.83-.85-3.03-.85s-2.21,.28-3.03,.85c-.82,.57-1.44,1.4-1.86,2.5s-.63,2.45-.63,4.05,.21,2.95,.63,4.05,1.04,1.93,1.86,2.5c.82,.57,1.83,.85,3.03,.85s2.21-.28,3.03-.85c.82-.57,1.44-1.4,1.86-2.5s.63-2.45,.63-4.05Z"
                      />
                      <motion.path
                        variants={svgVariants}
                        className="cls-1"
                        d="M162.26,63.45h-10.27v-26.69h10.17c2.75,0,5.12,.53,7.12,1.6,2,1.06,3.55,2.59,4.64,4.59s1.64,4.38,1.64,7.16-.54,5.17-1.63,7.16c-1.09,1.99-2.62,3.52-4.61,4.59-1.99,1.06-4.34,1.6-7.05,1.6Zm-3.02-6.15h2.76c1.32,0,2.45-.21,3.38-.64,.93-.43,1.65-1.16,2.14-2.2s.74-2.49,.74-4.35-.25-3.31-.75-4.35c-.5-1.04-1.23-1.78-2.19-2.2-.96-.43-2.14-.64-3.53-.64h-2.55v14.39Z"
                      />
                      <motion.path
                        variants={svgVariants}
                        className="cls-1"
                        d="M193.95,36.76h7.25v17.1c0,2.03-.48,3.79-1.45,5.27-.97,1.48-2.32,2.62-4.05,3.43s-3.74,1.21-6.02,1.21-4.32-.4-6.05-1.21-3.07-1.95-4.03-3.43c-.96-1.48-1.44-3.24-1.44-5.27v-17.1h7.25v16.47c0,.83,.18,1.56,.55,2.21,.36,.65,.87,1.15,1.52,1.52,.65,.37,1.38,.55,2.21,.55s1.57-.18,2.22-.55c.64-.36,1.15-.87,1.51-1.52,.36-.65,.55-1.38,.55-2.21v-16.47Z"
                      />
                      <motion.path
                        variants={svgVariants}
                        className="cls-1"
                        d="M228.82,46.77h-7.35c-.05-.61-.19-1.16-.41-1.66-.22-.5-.53-.92-.91-1.28-.39-.36-.85-.64-1.4-.83-.55-.2-1.17-.29-1.86-.29-1.22,0-2.24,.3-3.08,.89s-1.47,1.44-1.9,2.54c-.43,1.1-.65,2.43-.65,3.97,0,1.63,.22,3,.66,4.1,.44,1.1,1.08,1.92,1.91,2.48,.83,.55,1.84,.83,3.01,.83,.67,0,1.27-.08,1.8-.25,.53-.17,.99-.42,1.38-.74s.71-.71,.96-1.17,.41-.97,.5-1.54l7.35,.05c-.09,1.13-.4,2.28-.95,3.45s-1.32,2.25-2.33,3.23c-1,.99-2.24,1.78-3.72,2.38-1.48,.6-3.19,.9-5.15,.9-2.45,0-4.65-.53-6.59-1.58-1.94-1.05-3.48-2.6-4.6-4.64-1.13-2.04-1.69-4.54-1.69-7.49s.57-5.48,1.72-7.51c1.15-2.04,2.69-3.58,4.64-4.63,1.95-1.05,4.12-1.57,6.52-1.57,1.69,0,3.24,.23,4.65,.69,1.42,.46,2.66,1.13,3.73,2.01,1.07,.88,1.93,1.97,2.58,3.25,.65,1.29,1.05,2.76,1.19,4.42Z"
                      />
                      <motion.path
                        variants={svgVariants}
                        className="cls-1"
                        d="M230.64,42.6v-5.84h23.2v5.84h-8.03v20.85h-7.14v-20.85h-8.03Z"
                      />
                      <motion.path
                        variants={svgVariants}
                        className="cls-1"
                        d="M8.67,72.8l5.47,18.82h.21l5.47-18.82h8.18l-8.81,26.69H9.3L.49,72.8H8.67Z"
                      />
                      <motion.path
                        variants={svgVariants}
                        className="cls-1"
                        d="M37.08,72.8v26.69h-7.25v-26.69h7.25Z"
                      />
                      <motion.path
                        variants={svgVariants}
                        className="cls-1"
                        d="M54.17,81.14s0-.07,0-.11c-.09-.82-.41-1.46-.96-1.93-.58-.49-1.45-.73-2.63-.73-.75,0-1.36,.09-1.83,.27-.47,.18-.82,.42-1.05,.72-.23,.3-.34,.65-.35,1.04-.02,.32,.04,.61,.18,.87,.13,.26,.35,.49,.65,.69s.67,.39,1.13,.55c.46,.17,1.01,.31,1.64,.44l2.19,.47c1.48,.31,2.74,.73,3.79,1.24,1.05,.51,1.91,1.11,2.58,1.81,.67,.69,1.16,1.47,1.48,2.33,.32,.86,.48,1.8,.49,2.81,0,1.76-.45,3.24-1.32,4.46-.87,1.22-2.11,2.14-3.72,2.78-1.61,.63-3.55,.95-5.81,.95s-4.34-.34-6.07-1.03c-1.72-.69-3.06-1.74-4.01-3.17-.95-1.43-1.43-3.26-1.44-5.49h6.88c.04,.82,.25,1.5,.61,2.06,.36,.56,.88,.98,1.54,1.26s1.46,.43,2.38,.43c.77,0,1.42-.1,1.94-.29,.52-.19,.92-.46,1.19-.79,.27-.34,.41-.73,.42-1.16,0-.41-.14-.77-.4-1.08-.26-.31-.68-.59-1.26-.83s-1.37-.48-2.36-.7l-2.66-.57c-2.36-.51-4.22-1.37-5.58-2.57-1.36-1.2-2.04-2.85-2.03-4.93,0-1.69,.45-3.18,1.36-4.45,.92-1.27,2.19-2.27,3.82-2.98,1.63-.71,3.5-1.07,5.61-1.07s4.02,.36,5.59,1.08c1.57,.72,2.79,1.74,3.64,3.04,.86,1.31,1.29,2.83,1.3,4.58h-6.93Z"
                      />
                      <motion.path
                        variants={svgVariants}
                        className="cls-1"
                        d="M79.3,72.8h7.25v17.1c0,2.03-.48,3.79-1.45,5.27-.97,1.48-2.32,2.62-4.05,3.43s-3.74,1.21-6.02,1.21-4.32-.4-6.05-1.21-3.07-1.95-4.03-3.43c-.96-1.48-1.44-3.24-1.44-5.27v-17.1h7.25v16.47c0,.83,.18,1.56,.55,2.21,.36,.65,.87,1.15,1.52,1.52,.65,.37,1.38,.55,2.21,.55s1.57-.18,2.22-.55c.64-.36,1.15-.87,1.51-1.52,.36-.65,.55-1.38,.55-2.21v-16.47Z"
                      />
                      <motion.path
                        variants={svgVariants}
                        className="cls-1"
                        d="M89.25,99.49v-26.69h7.25v20.85h10.79v5.84h-18.04Z"
                      />
                      <motion.path
                        variants={svgVariants}
                        className="cls-1"
                        d="M116.72,72.8v26.69h-7.25v-26.69h7.25Z"
                      />
                      <motion.path
                        variants={svgVariants}
                        className="cls-1"
                        d="M133.81,81.14c0-.12-.02-.24-.05-.36-.12-.7-.43-1.26-.93-1.67-.58-.49-1.45-.73-2.63-.73-.75,0-1.36,.09-1.83,.27-.47,.18-.82,.42-1.05,.72-.23,.3-.34,.65-.35,1.04-.02,.32,.04,.61,.18,.87,.13,.26,.35,.49,.65,.69s.67,.39,1.13,.55c.46,.17,1.01,.31,1.64,.44l2.19,.47c1.48,.31,2.74,.73,3.79,1.24,1.05,.51,1.91,1.11,2.58,1.81,.67,.69,1.16,1.47,1.48,2.33,.32,.86,.48,1.8,.49,2.81,0,1.76-.45,3.24-1.32,4.46-.87,1.22-2.11,2.14-3.72,2.78-1.61,.63-3.55,.95-5.81,.95s-4.34-.34-6.07-1.03c-1.72-.69-3.06-1.74-4.01-3.17-.95-1.43-1.43-3.26-1.44-5.49h6.88c.04,.82,.25,1.5,.61,2.06,.36,.56,.88,.98,1.54,1.26s1.46,.43,2.38,.43c.77,0,1.42-.1,1.94-.29,.52-.19,.92-.46,1.19-.79,.27-.34,.41-.73,.42-1.16,0-.41-.14-.77-.4-1.08-.26-.31-.68-.59-1.26-.83s-1.37-.48-2.36-.7l-2.66-.57c-2.36-.51-4.22-1.37-5.58-2.57-1.36-1.2-2.04-2.85-2.03-4.93,0-1.69,.45-3.18,1.36-4.45,.92-1.27,2.19-2.27,3.82-2.98,1.63-.71,3.5-1.07,5.61-1.07s4.02,.36,5.59,1.08c1.57,.72,2.79,1.74,3.64,3.04,.86,1.31,1.29,2.83,1.3,4.58h-6.93Z"
                      />
                      <motion.path
                        variants={svgVariants}
                        className="cls-1"
                        d="M159.92,72.8h-9.9l-8.81,26.69h7.82l1.54-5.11h8.8l1.54,5.11h7.82l-8.81-26.69Zm-7.71,16.16l2.66-8.81h.21l2.66,8.81h-5.53Z"
                      />
                      <motion.path
                        variants={svgVariants}
                        className="cls-1"
                        d="M166.43,78.64v-5.84h23.2v5.84h-8.03v20.85h-7.14v-20.85h-8.03Z"
                      />
                      <motion.path
                        variants={svgVariants}
                        className="cls-1"
                        d="M198.85,72.8v26.69h-7.25v-26.69h7.25Z"
                      />
                      <motion.path
                        variants={svgVariants}
                        className="cls-1"
                        d="M227.42,86.14c0,2.97-.58,5.48-1.73,7.51-1.16,2.04-2.72,3.58-4.68,4.63-1.96,1.05-4.15,1.57-6.57,1.57s-4.63-.53-6.59-1.58c-1.96-1.06-3.51-2.6-4.67-4.64s-1.73-4.53-1.73-7.49,.58-5.48,1.73-7.51c1.15-2.04,2.71-3.58,4.67-4.63,1.96-1.05,4.16-1.57,6.59-1.57s4.6,.52,6.57,1.57c1.96,1.05,3.52,2.59,4.68,4.63,1.16,2.04,1.73,4.54,1.73,7.51Zm-7.45,0c0-1.6-.21-2.95-.63-4.05s-1.04-1.93-1.86-2.5c-.82-.57-1.83-.85-3.03-.85s-2.21,.28-3.03,.85c-.82,.57-1.44,1.4-1.86,2.5s-.63,2.45-.63,4.05,.21,2.95,.63,4.05,1.04,1.93,1.86,2.5c.82,.57,1.83,.85,3.03,.85s2.21-.28,3.03-.85c.82-.57,1.44-1.4,1.86-2.5s.63-2.45,.63-4.05Z"
                      />
                      <motion.path
                        variants={svgVariants}
                        className="cls-1"
                        d="M253.11,72.8v26.69h-6.05l-9.64-14.02h-.16v14.02h-7.25v-26.69h6.15l9.49,13.97h.21v-13.97h7.25Z"
                      />
                    </motion.g>
                  </g>
                </svg>
              </h2> */}
              <h2 className="text-5xl text-right text-white ">
                CGI AND PRODUCT
                <br />
                VISULISATION
              </h2>

              <p className="cgi-leader text-right text-white ">
                Photo-realistic CGI graphics and animation give
                <br /> our customers unparalleled levels of creative <br />
                control highlighting their products.
              </p>

              <p className="text-right mt-4">
                <MoreButton href="#/cgi" buttonText="READ MORE" />
              </p>
            </header>
          </section>

          <section id="dap" className="relative h-screen w-full pt-20">
            <header className="dapHead">
              <h2 className="text-5xl text-left text-white">
                DIGITAL ASSET
                <br />
                PIPELINE
              </h2>

              <p className="dap-leader text-left text-white mr-10 mb-3">
                Produce marketing models directly
                <br />
                from your design engineering department.
              </p>
              <p className="text-white text-left mt-4">
                <MoreButton href="/dap" buttonText="Read More" />
              </p>
            </header>
          </section>

          <section id="spins" className="relative h-screen w-full">
            <header className="spinsHead pt-8">
              <h2 className="text-5xl text-right text-white">
                E-COMMERCE
                <br />
                MODELS
              </h2>

              <p className="spins-leader text-right text-white ml-5">
                We provide 3D and Photographic product
                <br />
                revolves of your products for integration
                <br />
                into e-commerce site.
              </p>
              <p className="text-right text-white mt-4">
                <MoreButton href="/spins" buttonText="Read More" />
              </p>
            </header>
          </section>

          <Services />
          {/* </SlideInLeft> */}

          <section id="contact" className="contact h-screen sm:w-1/2 w-full">
            <header className="pt-8">
              <h2 className="text-5xl text-left text-white">Contact</h2>
            </header>

            <p className="contact contact-leader text-left text-white">
              Tell us about your project and we&apos;d
              <br />
              be delighted to let you know if we can help.
            </p>

            <form className="">
              <div className="flex flex-col">
                <div className="mb-3">
                  <label
                    htmlFor="contactName"
                    className="form-label inline-block mb-1 text-sky-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-sky-300
        bg-slate-300 bg-clip-padding
        border border-solid border-gray-800
        rounded
        transition
        ease-in-out
        m-0
        focus:text-slate-900 focus:bg-slate-200 focus:border-blue-600 focus:outline-none
      "
                    id="contactName"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="contactCompany"
                    className="form-label inline-block mb-1 text-sky-300"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-sky-300
              bg-slate-300 bg-clip-padding
              border border-solid border-gray-800
              rounded
              transition
              ease-in-out
              m-0
              focus:text-slate-900 focus:bg-slate-200 focus:border-blue-600 focus:outline-none
            "
                    id="contactCompany"
                    placeholder="Company"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="contactEmail"
                    className="form-label inline-block mb-1 text-sky-300"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-sky-300
              bg-slate-300 bg-clip-padding
              border border-solid border-gray-800
              rounded
              transition
              ease-in-out
              m-0
              focus:text-slate-900 focus:bg-slate-200 focus:border-blue-600 focus:outline-none
            "
                    id="contactEmail"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-3 xl:w-96">
                  <label
                    htmlFor="contactMessage"
                    className="form-label inline-block mb-1 text-sky-300"
                  >
                    Your message
                  </label>
                  <textarea
                    className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-sky-300
        bg-slate-300 bg-clip-padding
        border border-solid border-gray-800
        rounded
        transition
        ease-in-out
        m-0
        focus:text-slate-900 focus:bg-slate-200 focus:border-blue-600 focus:outline-none
      "
                    id="exampleFormControlTextarea1"
                    rows={3}
                    placeholder="Your message"
                  />
                </div>
              </div>
              <MoreButton href="" buttonText="Submit" />{' '}
            </form>
            <p className="text-white mt-5">
              Alternatly you can email us at:&nbsp;
              <a className="text-sky-300" href="mailto:hello@asgvirtua.com">
                hello@asgvirtua.com
              </a>
            </p>
          </section>
        </Html>
      </Canvas>
    </div>
  );
}

export default Home;
