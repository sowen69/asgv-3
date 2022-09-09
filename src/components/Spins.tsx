import React from 'react';

import MoreButton from './MoreButton';

function Spins() {
  return (
    <section id="spins" className="h-screen w-full relative">
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
  );
}
export default Spins;
