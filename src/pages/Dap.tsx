import { Splide, SplideSlide } from '@splidejs/react-splide';

function DapInfo() {
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
          <h1 className="text-6xl pb-4">The Digital Asset Pipeline</h1>
          <p className="sm:w-1/2 w-full pb-2">
            Designed for B2C and B2B manufacturing companies, our DAP transforms
            your engineering models into flexible, multipurpose marketing
            assets.
          </p>
          <p className="sm:w-1/2 w-full">
            Combine DAP with the Infinite Photoshoot and 360° Product
            photography to cover 100% of your inventory.
          </p>
        </header>
      </section>
      <section className="w-screen relative p-10">
        <video
          muted
          autoPlay
          src="https://www.asgvirtua.com/wp-content/uploads/2022/02/HansgroheBathroom.mp4"
        ></video>
      </section>
      <section>
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
      {/* <section className=" w-screen relative p-4">
        <h3 className="text-4xl">INDEPTH</h3>
        <h4 className="text-xl">INDEPTH SUBTITLE</h4>
        <p className="text-sm"></p>
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
export default DapInfo;
