/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';
// Carosel images
import coffee from '../assets/images/coffee-1-1.jpg';
import pink from '../assets/images/pink-1-1.jpg';
import redkin from '../assets/images/redkin-1-1.jpg';
import placeholder from '../assets/images/No-Image.png';
import MoreButton from './MoreButton';

function Services() {
  const settings = {
    focusOnSelect: true,
    dots: true,
    infinite: true,
    speed: 500,

    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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

      <Slider {...settings} className="">
        <div className="px-2">
          {/* <h3 className="pl-5 py-2 w-full h-10 bg-black float-left text-white">
              PHOTOGRAPHY
            </h3> */}
          <img src={redkin} className="" alt="Photography" />
        </div>

        <div className="px-2">
          {/* <h3 className="pl-5 py-2 w-full h-10 bg-black float-left text-white">
              RETOUCH
            </h3> */}

          <img src={pink} className="" alt="Retouch" />
        </div>
        <div className="px-2">
          {/* <article className="flex flex-col "> */}
          {/* <h3 className="pl-5 py-4 w-full  bg-black  text-white">
                PACKAGING
              </h3> */}
          <img src={coffee} className="" alt="Packaging" />
          {/* <div className="relative left-8 bottom-16 z-10">
                <MoreButton href="#/design" buttonText="More..." />
              </div> */}
          {/* </article> */}
        </div>
        <div className="px-2">
          <img src={placeholder} className="" alt="Packaging" />
        </div>
        <div className="px-2">
          <img src={placeholder} className="" alt="Packaging" />
        </div>
        <div className="px-2">
          <img src={placeholder} className="" alt="Packaging" />
        </div>
        <div className="px-2">
          <img src={placeholder} className="" alt="Packaging" />
        </div>
      </Slider>
    </section>
  );
}
export default Services;
