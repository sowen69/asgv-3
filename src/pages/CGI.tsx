import { useWindowSize } from '../util/useWindowSize';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useEffect } from 'react';

function CgiInfo() {
  const { width, height } = useWindowSize();

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
    autoplay: false,
    pauseOnHover: false,
    resetProgress: false,
    perPage: pP,
    height: 'auto',
  };
  //const slider = useRef();
  const sliderImages = [
    '/assets/cgi/cgi01',
    '/assets/cgi/cgi02',
    '/assets/cgi/cgi03',
    '/assets/cgi/cgi04',
    '/assets/cgi/cgi05',
    '/assets/cgi/cgi06',
  ];

  useEffect(() => {
    //console.log(picElements);
  });

  return (
    <>
      <section id="intro" className=" w-screen relative p-10 text-white">
        <header className="pt-1">
          <h1 className="text-5xl uppercase mb-5">Computer Generated Images</h1>
          <h2 className="text-2xl uppercase mb-2">
            3D indiscernible from Photography
          </h2>

          <p className="pb-2">
            <strong>Powerful imagery fully generated in 3D.</strong>
          </p>
          <p className="sm:w-1/2 w-full">
            Photo-realistic graphics give our customers unparalleled levels of
            creative control and opportunities to showcase their award winning
            products.
          </p>
        </header>
      </section>
      <section className="w-full relative py-4 text-white">
        <Splide className="text-center mx-auto" tag="section" options={options}>
          <SplideSlide>
            <div>
              <img
                src={`${sliderImages[0] + '.jpg'}`}
                srcSet={`
                  ${sliderImages[0]}_1-1_300.jpg 300w,
                  ${sliderImages[0]}_1-1_768.jpg 768w, 
                  ${sliderImages[0]}_1-1_1024.jpg 1024w`}
                sizes="
                  (min-width: 300px) 300w,
                  (min-width: 768px) 768w,
                  (min-width: 1024px) 1024w"
                alt="picture"
              />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div>
              <img
                src={`${sliderImages[1] + '.jpg'}`}
                srcSet={`
                  ${sliderImages[1]}_1-1_300.jpg 300w,
                  ${sliderImages[1]}_1-1_768.jpg 768w, 
                  ${sliderImages[1]}_1-1_1024.jpg 1024w`}
                sizes="
                  (min-width: 300px) 300w,
                  (min-width: 768px) 768w,
                  (min-width: 1024px) 1024w"
                alt="picture"
              />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div>
              <img
                src={`${sliderImages[2] + '.jpg'}`}
                srcSet={`
                  ${sliderImages[2]}_1-1_300.jpg 300w,
                  ${sliderImages[2]}_1-1_768.jpg 768w, 
                  ${sliderImages[2]}_1-1_1024.jpg 1024w`}
                sizes="
                  (min-width: 300px) 300w,
                  (min-width: 768px) 768w,
                  (min-width: 1024px) 1024w"
                alt="picture"
              />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div>
              <img
                src={`${sliderImages[3] + '.jpg'}`}
                srcSet={`
                  ${sliderImages[3]}_1-1_300.jpg 300w,
                  ${sliderImages[3]}_1-1_768.jpg 768w, 
                  ${sliderImages[3]}_1-1_1024.jpg 1024w`}
                sizes="
                  (min-width: 300px) 300w,
                  (min-width: 768px) 768w,
                  (min-width: 1024px) 1024w"
                alt="picture"
              />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div>
              <img
                src={`${sliderImages[4] + '.jpg'}`}
                srcSet={`
                  ${sliderImages[4]}_1-1_300.jpg 300w,
                  ${sliderImages[4]}_1-1_768.jpg 768w, 
                  ${sliderImages[4]}_1-1_1024.jpg 1024w`}
                sizes="
                  (min-width: 300px) 300w,
                  (min-width: 768px) 768w,
                  (min-width: 1024px) 1024w"
                alt="picture"
              />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div>
              <img
                src={`${sliderImages[5] + '.jpg'}`}
                srcSet={`
                  ${sliderImages[5]}_1-1_300.jpg 300w,
                  ${sliderImages[5]}_1-1_768.jpg 768w, 
                  ${sliderImages[5]}_1-1_1024.jpg 1024w`}
                sizes="
                  (min-width: 300px) 300w,
                  (min-width: 768px) 768w,
                  (min-width: 1024px) 1024w"
                alt="picture"
              />
            </div>
          </SplideSlide>
        </Splide>
      </section>
      <section className=" w-screen relative p-10 text-white">
        <h3 className="text-4xl mb-2">How’s it done?</h3>
        <p className="text-sm sm:w-1/2 w-full pb-2">
          Our 3D renders offer unparalleled opportunities to showcase the best
          in product design and packaging.
        </p>
        <p className="text-sm sm:w-1/2 w-full pb-2">
          Beginning with a wire-frame model of the product, we add layers of
          properties representing the materials found on the finished object.
        </p>
        <p className="text-sm sm:w-1/2 w-full pb-2">
          The result is a fully editable image which is indistinguishable from
          photography.
        </p>
        <h4 className="text-xl pt-5 sm:w-1/2 w-full mb-2">
          The Infinite Photo shoot
        </h4>
        <p className="text-sm sm:w-1/2 w-full pb-2">
          Photorealistic CGI models, the options are… infinite.
        </p>
        <p className="text-sm sm:w-1/2 w-full pb-2">
          Once the 3D is built the same model can then be represented in an
          infinite number of ways: animation, macro photography, studio or
          location based shots.
        </p>
        <p className="text-sm sm:w-1/2 w-full pb-2">
          One model, many uses. That’s the Infinite Photo shoot.
        </p>
      </section>
    </>
  );
}
export default CgiInfo;
