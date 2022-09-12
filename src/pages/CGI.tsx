import Slider from 'react-slick';

import placeholder from '../assets/images/No-Image.png';

function CgiInfo() {
  return (
    <>
      <section id="intro" className=" w-screen relative p-5 text-white">
        <header className="pt-1">
          <h1 className="text-6xl uppercase mb-5">Computer Generated Images</h1>
          <h2 className="text-2xl uppercase mb-2">
            3D indiscernible from Photography
          </h2>

          <p>Powerful imagery fully generated in 3D.</p>
          <p>
            Photo-realistic graphics give our customers unparalleled levels of
            creative control and opportunities to showcase their award winning
            products.
          </p>
        </header>
      </section>
      <section className=" w-screen relative py-4 text-white">
        <section className="overflow-hidden text-gray-700">
          <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
            <div className="flex flex-wrap -m-1 md:-m-2">
              <div className="flex flex-wrap w-1/2">
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded-lg"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded-lg"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
                  />
                </div>
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded-lg"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-1/2">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded-lg"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded-lg"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded-lg"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className=" w-screen relative p-4 text-white">
        <h3 className="text-4xl mb-2">How’s it done?</h3>
        <p className="text-sm sm:w-1/2 w-full">
          Our 3D renders offer unparalleled opportunities to showcase the best
          in product design and packaging.
        </p>
        <p className="text-sm sm:w-1/2 w-full">
          Beginning with a wire-frame model of the product, we add layers of
          properties representing the materials found on the finished object.
        </p>
        <p className="text-sm sm:w-1/2 w-full">
          The result is a fully editable image which is indistinguishable from
          photography.
        </p>
        <h4 className="text-xl pt-5 sm:w-1/2 w-full mb-2">
          The Infinite Photo shoot
        </h4>
        <p className="text-sm sm:w-1/2 w-full">
          Photorealistic CGI models, the options are… infinite.
        </p>
        <p className="text-sm sm:w-1/2 w-full">
          Once the 3D is built the same model can then be represented in an
          infinite number of ways: animation, macro photography, studio or
          location based shots.
        </p>
        <p className="text-sm sm:w-1/2 w-full">
          One model, many uses. That’s the Infinite Photo shoot.
        </p>
      </section>
    </>
  );
}
export default CgiInfo;
