/* eslint-disable react/jsx-props-no-spreading */
import Slider from 'react-slick';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
// Carosel images
import coffee from '../assets/images/coffee-1-1.jpg';
import pink from '../assets/images/pink-1-1.jpg';
import redkin from '../assets/images/redkin-1-1.jpg';
import placeholder from '../assets/images/No-Image.png';
import MoreButton from './MoreButton';

function Services() {
  // TODO: perPage needs to be 1 on mobile
  return (
    <section id="services" className="services h-screen w-full px-10">
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
      <Splide
        className="text-center mx-auto"
        tag="section"
        options={{
          perPage: 2,
          type: 'loop',
          gap: '1rem',
          width: '80vw',
        }}
      >
        <SplideSlide>
          <img src={pink} className="" alt="Pink" />
          <div className="bg-slate-800 flex flex-row w-full justify-between">
            <h3 className=" text-white text-left align-middle p-3">Retouch</h3>
            <div className="justify-self-end text-right p-3">
              <MoreButton href={''} buttonText={'more'} type="small" />
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <img src={redkin} className="" alt="Redkin Packaging" />
          <div className="bg-slate-800 flex flex-row w-full justify-between">
            <h3 className=" text-white text-left align-middle p-3">Retouch</h3>
            <div className="justify-self-end text-right p-3">
              <MoreButton href={''} buttonText={'more'} type="small" />
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <img src={coffee} className="" alt="Coffee Packaging" />
          <div className="bg-slate-800 flex flex-row w-full justify-between">
            <h3 className=" text-white text-left align-middle p-3">Retouch</h3>
            <div className="justify-self-end text-right p-3">
              <MoreButton href={''} buttonText={'more'} type="small" />
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <img src={placeholder} className="" alt="Packaging" />
          <div className="bg-slate-800 flex flex-row w-full justify-between">
            <h3 className=" text-white text-left align-middle p-3">Retouch</h3>
            <div className="justify-self-end text-right p-3">
              <MoreButton href={''} buttonText={'more'} type="small" />
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </section>
  );
}
export default Services;
