import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
// import SlideInHeader from '../components/SlideInHeader';
import Hero from '../components/Hero';
import HeroVideo from '../components/HeroVideo';
// import Hero from '../components/Hero';
import MoreButton from '../components/MoreButton';
import Services from '../components/Services';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  // ScrollTrigger.defaults({
  //   // toggleActions: 'play reset reset none',
  //   markers: true,
  //   start: 'top 80%', // when the top of the trigger hits the top of the viewport
  //   end: 'bottom middle', // end after scrolling 500px beyond the start
  //   //scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
  // });
  const startStyleRight = {
    //transform: 'translate(200px,0px)',
  };
  //  useEffect(() => {
  const t1 = gsap.timeline({
    scrollTrigger: {
      //  markers: { startColor: 'yellow', endColor: 'orange', indent: 150 },
      start: 'top bottom-=100px',
      end: 'top top',
      toggleActions: 'play pause resume reset',
    },
    id: 'cgi',
    //trigger: '#one',
  });
  t1.fromTo(
    '.one-a',
    {
      x: 400,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 0.2,
      ease: 'power2.back',
    }
  );
  t1.fromTo(
    '.one-b',
    {
      x: 400,
      opacity: 1,
      duration: 0.2,
      ease: 'power2.back',
    },
    {
      x: 0,
      opacity: 1,
      duration: 0.2,
      ease: 'power2.back',
    }
  );
  t1.fromTo(
    '.one-c',
    {
      x: 400,
      opacity: 1,
      duration: 0.1,
      ease: 'power2.back',
    },
    {
      x: 0,
      opacity: 1,
      duration: 0.2,
      ease: 'power2.back',
    }
  );

  const t2 = gsap.timeline({
    scrollTrigger: {
      //  markers: { startColor: 'white', endColor: 'red', indent: 350 },
      start: 'top 60%', // when the top of the trigger hits the top of the viewport
      end: 'bottom middle', // end after scrolling 500px beyond the start
    },
    id: 'photo',
    trigger: '#two',
  });
  t2.fromTo(
    '.two-a',
    {
      x: -200,
      opacity: 0,
    },
    {
      x: -200,
      opacity: 0,
      duration: 0.2,
      ease: 'power2.back',
    }
  );
  t2.fromTo(
    '.two-b',
    {
      x: -200,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 0,
      duration: 0.2,
      ease: 'power2.back',
    }
  );
  t2.fromTo(
    '.two-c',
    {
      x: -200,
      opacity: 0,
    },
    {
      x: -200,
      opacity: 0,
      duration: 0.1,
      ease: 'power2.back',
    }
  );
  //});
  return (
    <div className="home">
      <Hero />
      <HeroVideo />
      <section className="step relative h-screen w-full pt-20 bg-transparent px-10 ">
        <header id="one" className="text-right">
          <h2 className="text-white text-5xl one-a">CGI AND</h2>
          <h2 className="text-white text-5xl one-b">PRODUCT</h2>
          <h2 className="text-white text-5xl one-c">VISULISATION</h2>
        </header>
        <article className="pt-4">
          <p className="cgi-leader text-right text-white ">
            Photo-realistic CGI graphics and animation give
            <br className="hidden sm:block" /> our customers unparalleled levels
            of creative <br className="hidden sm:block" />
            control highlighting their products.
          </p>
          <p className="text-right mt-4">
            <MoreButton href="#/cgi" buttonText="READ MORE" />
          </p>
        </article>
      </section>

      <section className="step relative h-screen w-full pt-20 px-10 bg-transparent">
        <header id="two" className="text-left">
          <h2 className="text-white text-5xl two-a">PHOTOGRAPHY</h2>
          <h2 className="text-white text-5xl two-b">AND PHOTO</h2>
          <h2 className="text-white text-5xl two-c">RETOUCHING</h2>
        </header>
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
      </section>

      <section className="step relative h-screen w-full pt-20 px-10 bg-transparent">
        <header className="text-right">
          <h2 className="text-white text-5xl one-a">DESIGN AND</h2>
          <h2 className="text-white text-5xl one-b">PACKAGING</h2>
        </header>
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
      </section>

      <section className="step relative h-screen w-full pt-20 px-10 bg-transparent">
        <header className="text-left">
          <h2 className="text-white text-5xl two-a">360°</h2>
          <h2 className="text-white text-5xl two-b">PRODUCT</h2>
          <h2 className="text-white text-5xl two-c">SPINS</h2>
          {/* <SlideInHeader
            sectionName="four"
            headers={['360°', 'PRODUCT', 'SPINS']}
            animationStyle="Bounce"
          /> */}
        </header>
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
      </section>
      <section className="border-b-2 border-slate-900"></section>
      <Services />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
