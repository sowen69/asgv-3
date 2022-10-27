import { useWindowSize } from '../util/useWindowSize';
import { Splide, SplideSlide } from '@splidejs/react-splide';

function PhotographyInfo() {
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

  return (
    <>
      <section id="intro" className="w-screen relative p-10 text-white">
        <header className="pt-1">
          <h1 className="text-4xl sm:text-6xl pb-2">Photography</h1>
          <h2 className="text-2xl pb-2 sm:w-1/2 w-full">
            Peerless photography and hi-end retouching
          </h2>
          <p className="pb-2 sm:w-1/2 w-full">
            Having our own custom-built photography studio allows us to easily
            adjust workflow to match customer requirements.
          </p>
          <p className="pb-2 sm:w-1/2 w-full">
            A no compromise approach to our equipment gives us the edge (and
            Andy an excuse to buy new toys) whatever the shot requires.
          </p>
          <p className="pb-2 sm:w-1/2 w-full">
            Our primary setups are based around Canon and Hasselblad camera
            systems for maximum flexibility both in the studio and when we go on
            location.
          </p>
        </header>
      </section>
      <section className="w-screen relative p-10">
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
      {/*<section className="w-screen relative p-10">
        <h3 className="text-4xl">INDEPTH</h3>
        <h4 className="text-xl">INDEPTH SUBTITLE</h4>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ab
          accusamus quia quos laboriosam, commodi corporis quo qui, distinctio
          culpa ratione ipsa ipsum nemo, asperiores mollitia maxime ducimus
          impedit consectetur!
        </p>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ab
          accusamus quia quos laboriosam, commodi corporis quo qui, distinctio
          culpa ratione ipsa ipsum nemo, asperiores mollitia maxime ducimus
          impedit consectetur!
        </p>
        <h4 className="text-xl">SUBTITLE</h4>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ab
          accusamus quia quos laboriosam, commodi corporis quo qui, distinctio
          culpa ratione ipsa ipsum nemo, asperiores mollitia maxime ducimus
          impedit consectetur!
        </p>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ab
          accusamus quia quos laboriosam, commodi corporis quo qui, distinctio
          culpa ratione ipsa ipsum nemo, asperiores mollitia maxime ducimus
          impedit consectetur!
        </p>
      </section> */}
    </>
  );
}
export default PhotographyInfo;
