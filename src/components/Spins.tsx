import React from 'react';
import { motion, Variants } from 'framer-motion';

import MoreButton from './MoreButton';

function Spins() {
  const paraVariants: Variants = {
    initial: { x: 50, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    },
  };

  return (
    <section id="spins" className="h-screen w-full relative">
      <header className="spinsHead pt-8">
        <h2 className="text-5xl text-right text-white">
          E-COMMERCE
          <br />
          MODELS
        </h2>
        <motion.div variants={paraVariants} initial="initial" animate="animate">
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
        </motion.div>
      </header>
    </section>
  );
}
export default Spins;
