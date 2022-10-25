/* eslint-disable react/jsx-props-no-spreading */
import Slider from 'react-slick';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
// Carosel images
import cgi from '../assets/images/cgi04_1-1_1024.jpg';
import photography from '../assets/images/cgi07_1-1_1440.jpg';
import dap from '../assets/images/dap01_1-1_768.jpg';
import spins from '../assets/images/ASG_Virtua_JURA.mp4';
import design from '../assets/images/Jon-DSC_6264-v4-RET-1440x1440.jpg';

import retouch from '../assets/images/pink-1-1.jpg';
import packaging from '../assets/images/redkin-1-1.jpg';
import placeholder from '../assets/images/No-Image.png';
import MoreButton from './MoreButton';
import coffee from '../assets/images/coffee-1-1.jpg';

function Services() {
  const width = window.innerWidth;
  // console.log(width);
  let pP = 2;
  if (width > 1024) {
    pP = 3;
  }
  if (width <= 767) {
    pP = 1;
  }
  const options = {
    type: 'loop',
    gap: '1rem',
    autoplay: true,
    pauseOnHover: true,
    resetProgress: false,
    perPage: pP,
    height: 'auto',
  };

  return (
    <section id="services" className="services h-screen w-full px-10">
      <header className="pt-8 text-center">
        <h2 className="text-5xl text-center text-white">
          OUR
          <br />
          SERVICES
        </h2>
        <p className="services-leader text-center text-white pb-5">
          Here are just some of the services we offer.
        </p>
      </header>
      <Splide className="text-center " tag="section" options={options}>
        <SplideSlide>
          <img src={cgi} className="" alt="CGI" />
          <div className="bg-slate-800 flex flex-row w-full justify-between">
            <h3 className=" text-white text-left align-middle p-3">
              CGI 3D VISULISATION
            </h3>
            <div className="justify-self-end text-right p-3">
              <MoreButton href={'/cgi'} buttonText={'more'} type="small" />
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <video src={spins} className="" muted autoPlay loop />
          <div className="bg-slate-800 flex flex-row w-full justify-between">
            <h3 className=" text-white text-left align-middle p-3">
              360° Product Spins
            </h3>
            <div className="justify-self-end text-right p-3">
              <MoreButton href={'/spins'} buttonText={'more'} type="small" />
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <img src={photography} className="" alt="Photography" />
          <div className="bg-slate-800 flex flex-row w-full justify-between">
            <h3 className=" text-white text-left align-middle p-3">
              Photography
            </h3>
            <div className="justify-self-end text-right p-3">
              <MoreButton
                href={'/photography'}
                buttonText={'more'}
                type="small"
              />
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <img src={retouch} className="" alt="Retouch" />
          <div className="bg-slate-800 flex flex-row w-full justify-between">
            <h3 className=" text-white text-left align-middle p-3">Retouch</h3>
            <div className="justify-self-end text-right p-3">
              <MoreButton
                href={'/photography'}
                buttonText={'more'}
                type="small"
              />
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <img src={design} className="" alt="Design" />
          <div className="bg-slate-800 flex flex-row w-full justify-between">
            <h3 className=" text-white text-left align-middle p-3">Design</h3>
            <div className="justify-self-end text-right p-3">
              <MoreButton href={'/design'} buttonText={'more'} type="small" />
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <img src={dap} className="" alt="Digital Asset Pipeline" />
          <div className="bg-slate-800 flex flex-row w-full justify-between">
            <h3 className=" text-white text-left align-middle p-3">
              Digital Asset Pipeline
            </h3>
            <div className="justify-self-end text-right p-3">
              <MoreButton href={'/dap'} buttonText={'more'} type="small" />
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <img src={packaging} className="" alt="Packaging" />
          <div className="bg-slate-800 flex flex-row w-full justify-between">
            <h3 className=" text-white text-left align-middle p-3">
              Packaging
            </h3>
            <div className="justify-self-end text-right p-3">
              <MoreButton href={'/design'} buttonText={'more'} type="small" />
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </section>
  );
}
export default Services;
