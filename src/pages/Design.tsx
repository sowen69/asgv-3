import { Splide, SplideSlide } from '@splidejs/react-splide';
import {
  useWindowHeight,
  useWindowWidth,
  useWindowSize,
} from '@react-hook/window-size';
function DesignInfo() {
  const [width, height] = useWindowSize();
  console.log(width, ' ', height);
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
  const sliderImages = [
    '/assets/creative/creative01',
    '/assets/creative/creative02',
    '/assets/creative/creative03',
    '/assets/creative/creative04',
    '/assets/creative/creative05',
    '/assets/creative/creative06',
  ];
  return (
    <>
      <section id="intro" className="w-screen relative p-10 text-white">
        <header className="pt-1">
          <h1 className="text-6xl pb-2">Design</h1>
          <h2 className="text-2xl pb-2">Design and Art Direction services</h2>
          <p className="sm:w-1/2 w-full">
            With over 20 years experience producing creative campaigns we have a
            vast range of skills and experience gained in the advertising,
            design and print industries. Whatever your requirements we can work
            with you to provide creative solutions.
          </p>
        </header>
      </section>
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
      <section className="w-screen relative p-10 text-white">
        <h3 className="text-6xl pb-2">Packaging</h3>
        <p className="pb-2 sm:w-1/2 w-full">
          From fast moving consumer goods to the finest luxury items, our track
          record in producing exquisite packaging solutions will help showcase
          your products.
        </p>
        <p className="pb-2 sm:w-1/2 w-full">
          As complex board forms with multiple specialty inks to foils and
          textures, we can present your most challenging packaging finishes in
          beautiful 3D imagery and print-ready production files.
        </p>
      </section>
    </>
  );
}
export default DesignInfo;
