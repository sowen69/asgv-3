import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';

import MoreButton from './MoreButton';

gsap.registerPlugin(ScrollTrigger);

function Dap() {
  return (
    <section id="dap" className="h-screen w-full pt-20">
      <header className="dapHead">
        <h2 className="text-5xl text-left text-white">
          DIGITAL ASSET
          <br />
          PIPELINE
        </h2>
        <p className="dap-leader text-left text-white mr-10">
          Produce marketing models directly
          <br />
          from your design engineering department.
        </p>
        <p className="text-white text-left mt-4">
          <MoreButton href="/dap" buttonText="Read More" />
        </p>
      </header>
    </section>
  );
}
export default Dap;
