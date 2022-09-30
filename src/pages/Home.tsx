import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import AnimatedHeader from '../components/AnimatedHeader';
import Hero from '../components/Hero';
import MoreButton from '../components/MoreButton';
import FadeIn from '../components/transitions/FadeIn';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  return (
    <div className="home">
      <Hero />
      <section
        id="cgi"
        className="relative h-screen w-full pt-20 bg-transparent px-10 "
      >
        <header className="text-right">
          <AnimatedHeader
            sectionName="one"
            line1="CGI AND"
            line2="PRODUCT"
            line3="VISULISATION"
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

      <section className="relative h-screen w-full pt-20 px-10 bg-transparent">
        <header className="text-left">
          <AnimatedHeader
            sectionName="two"
            line1="PHOTOGRAPHY"
            line2="AND PHOTO"
            line3="RETOUCHING"
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

      <section className="relative h-screen w-full pt-20 px-10 bg-transparent">
        <header className="text-right">
          <AnimatedHeader
            sectionName="three"
            line1="DESIGN AND"
            line2="PACKAGING"
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

      <section className="relative h-screen w-full pt-20 px-10 bg-transparent">
        <header className="text-left">
          <AnimatedHeader
            sectionName="four"
            line1="360°"
            line2="PRODUCT"
            line3="SPINS"
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
    </div>
  );
}

export default Home;
