import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import AnimatedHeader from '../components/AnimatedHeader';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
// import Hero from '../components/Hero';
import MoreButton from '../components/MoreButton';
import Services from '../components/Services';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  return (
    <div className="home">
      <section className="step relative h-screen w-full pt-20 bg-transparent px-10 ">
        <header className="text-right">
          <AnimatedHeader
            sectionName="one"
            headers={['CGI AND', 'PRODUCT', 'VISULISATION']}
            animationStyle="Bounce"
          />
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
        <header className="text-left">
          <AnimatedHeader
            sectionName="two"
            headers={['PHOTOGRAPHY', 'AND PHOTO', 'RETOUCHING']}
            animationStyle="Bounce"
          />
        </header>
        <article className="pt-4">
          <p className="text-left text-white ">
            Photo-realistic CGI graphics and animation give
            <br className="hidden sm:block" /> our customers unparalleled levels
            of creative <br className="hidden sm:block" />
            control highlighting their products.
          </p>
          <p className="text-left mt-4">
            <MoreButton href="#/photography" buttonText="READ MORE" />
          </p>
        </article>
      </section>

      <section className="step relative h-screen w-full pt-20 px-10 bg-transparent">
        <header className="text-right">
          <AnimatedHeader
            sectionName="three"
            headers={['DESIGN AND', 'PACKAGING']}
            animationStyle="Bounce"
          />
        </header>
        <article className="pt-4">
          <p className="text-right text-white ">
            Photo-realistic CGI graphics and animation give
            <br className="hidden sm:block" /> our customers unparalleled levels
            of creative <br className="hidden sm:block" />
            control highlighting their products.
          </p>
          <p className="text-right mt-4">
            <MoreButton href="#/design" buttonText="READ MORE" />
          </p>
        </article>
      </section>

      <section className="step relative h-screen w-full pt-20 px-10 bg-transparent">
        <header className="text-left">
          <AnimatedHeader
            sectionName="four"
            headers={['360°', 'PRODUCT', 'SPINS']}
            animationStyle="Bounce"
          />
        </header>
        <article className="pt-4">
          <p className="text-left text-white ">
            Photo-realistic CGI graphics and animation give
            <br className="hidden sm:block" /> our customers unparalleled levels
            of creative <br className="hidden sm:block" />
            control highlighting their products.
          </p>
          <p className="text-left mt-4">
            <MoreButton href="#/spins" buttonText="READ MORE" />
          </p>
        </article>
      </section>
      <Services />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
