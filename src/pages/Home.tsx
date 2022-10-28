import Hero from '../components/Hero';
import HeroVideo from '../components/HeroVideo';
import MoreButton from '../components/MoreButton';
// Includes the carosel
import Services from '../components/Services';
// Slide in animations
import SlideInLeft from '../components/transitions/SlideInLeft';
import SlideInRight from '../components/transitions/SlideInRight';

function Home() {
  return (
    <div className="home">
      <Hero />
      <HeroVideo />
      <section className="step relative h-screen w-full pt-20 bg-transparent px-10 ">
        <SlideInRight>
          <header id="one" className="text-right">
            <h2 className="text-white text-5xl one-a">CGI AND</h2>
            <h2 className="text-white text-5xl one-b">PRODUCT</h2>
            <h2 className="text-white text-5xl one-c">VISULISATION</h2>
          </header>
        </SlideInRight>
        <SlideInRight>
          <article className="pt-4">
            <p className="cgi-leader text-right text-white ">
              Photo-realistic CGI graphics and animation give
              <br className="hidden sm:block" /> our customers unparalleled
              levels of creative <br className="hidden sm:block" />
              control highlighting their products.
            </p>
            <p className="text-right mt-4">
              <MoreButton href="#/cgi" buttonText="READ MORE" />
            </p>
          </article>
        </SlideInRight>
      </section>

      <section className="step relative h-screen w-full pt-20 px-10 bg-transparent">
        <SlideInLeft>
          <header id="two" className="text-left">
            <h2 className="text-white text-5xl two-a">PHOTOGRAPHY</h2>
            <h2 className="text-white text-5xl two-b">AND PHOTO</h2>
            <h2 className="text-white text-5xl two-c">RETOUCHING</h2>
          </header>
        </SlideInLeft>
        <SlideInLeft>
          <article className="pt-4">
            <p className="text-left text-white ">
              Having our own custom-built photography studio{' '}
              <br className="hidden sm:block" />
              allows us to easily adjust workflow to{' '}
              <br className="hidden sm:block" />
              match customer requirements.
            </p>
            <p className="text-left mt-4">
              <MoreButton href="#/photography" buttonText="READ MORE" />
            </p>
          </article>
        </SlideInLeft>
      </section>

      <section className="step relative h-screen w-full pt-20 px-10 bg-transparent">
        <SlideInRight>
          <header className="text-right">
            <h2 className="text-white text-5xl one-a">DESIGN AND</h2>
            <h2 className="text-white text-5xl one-b">PACKAGING</h2>
          </header>
        </SlideInRight>
        <SlideInRight>
          <article className="pt-4">
            <p className="text-right text-white ">
              20 years experience producing creative{' '}
              <br className="hidden sm:block" />
              campaigns we have a vast range <br className="hidden sm:block" />
              of skills and experience
            </p>
            <p className="text-right mt-4">
              <MoreButton href="#/design" buttonText="READ MORE" />
            </p>
          </article>
        </SlideInRight>
      </section>

      <section className="step relative h-screen w-full pt-20 px-10 bg-transparent">
        <SlideInLeft>
          <header className="text-left">
            <h2 className="text-white text-5xl two-a">360°</h2>
            <h2 className="text-white text-5xl two-b">PRODUCT</h2>
            <h2 className="text-white text-5xl two-c">SPINS</h2>
          </header>
        </SlideInLeft>
        <SlideInLeft>
          <article className="pt-4">
            <p className="text-left text-white ">
              This is the perfect option when budget{' '}
              <br className="hidden sm:block" />
              or volume constraints make 3D Renders prohibitive.
            </p>
            <p className="text-left mt-4">
              <MoreButton href="#/spins" buttonText="READ MORE" />
            </p>
          </article>
        </SlideInLeft>
      </section>
      <section className="border-b-2 border-slate-900"></section>
      <Services />
    </div>
  );
}

export default Home;
