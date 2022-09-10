/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';
// Carosel images
import coffee from '../assets/images/coffee-1-1.jpg';
import pink from '../assets/images/pink-1-1.jpg';
import redkin from '../assets/images/redkin-1-1.jpg';
import MoreButton from './MoreButton';

function Services() {
  const sectionVariants: Variants = {
    initial: { opacity: 0, x: 500 },
    animate: {
      x: -30,
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        type: 'spring',
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  const paraVariants = {
    initial: { x: 50, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    },
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <section
      id="services"
      className="services h-screen w-full overflow-y-hidden"
    >
      <header className="pt-8">
        <h2 className="text-5xl text-left text-white">
          OUR
          <br />
          SERVICES
        </h2>
        <p className="services-leader text-left text-white pb-5">
          Here are just some of the services we offer.
        </p>
      </header>
      <div className="flex mx-auto justify-center bg-black -px-5">
        <Slider {...settings} className="max-w-lg h-auto">
          <div>
            <h3 className="pl-5 py-2 w-full h-10 bg-black float-left text-white">
              PHOTOGRAPHY
            </h3>
            <img src={redkin} className="w-full " alt="Photography" />
          </div>

          <div>
            <h3 className="pl-5 py-2 w-full h-10 bg-black float-left text-white">
              RETOUCH
            </h3>

            <img src={pink} className="w-full" alt="Retouch" />
          </div>
          <div>
            <article className="flex flex-col ">
              <h3 className="pl-5 py-4 w-full  bg-black  text-white">
                PACKAGING
              </h3>
              <img src={coffee} className="max-w-lg" alt="Packaging" />
              <div className="relative left-8 bottom-16 z-10">
                <MoreButton href="#/design" buttonText="More..." />
              </div>
            </article>
          </div>
        </Slider>
      </div>
    </section>
  );
}
export default Services;
