import Slider from 'react-slick';

import placeholder from '../assets/images/No-Image.png';

function CgiInfo() {
  return (
    <>
      <section id="intro" className="bg-lime-100 w-screen relative p-5">
        <header className="pt-1">
          <h1 className="text-6xl uppercase">CGI</h1>
          <h2 className="text-2xl uppercase">Computer Generated Images</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ab
            accusamus quia quos laboriosam, commodi corporis quo qui, distinctio
            culpa ratione ipsa ipsum nemo, asperiores mollitia maxime ducimus
            impedit consectetur!
          </p>
        </header>
      </section>
      <section className="bg-lime-300 w-screen relative p-4">
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
      <section className="bg-lime-200 w-screen relative p-4">
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
      </section>
    </>
  );
}
export default CgiInfo;
