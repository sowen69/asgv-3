import { useScroll } from 'framer-motion';
import { useEffect } from 'react';
import Contact from '../components/Contact';
import Dap from '../components/Dap';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Spins from '../components/Spins';
import Cgi from '../components/Cgi';
import SlideInRight from '../components/transitions/SlideInRight';
import SlideInLeft from '../components/transitions/SlideInLeft';

function Home() {
  //  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
  // const { scrollY } = useScroll();

  // useEffect(() => {
  //   return scrollY.onChange((latest) => {
  //     console.log('Page scroll: ', latest);
  //   });
  // }, [scrollY]);

  return (
    <div className="home px-7">
      <Hero />
      <SlideInRight>
        <Cgi />
      </SlideInRight>
      <SlideInLeft>
        <Dap />
      </SlideInLeft>
      <SlideInRight>
        <Spins />
      </SlideInRight>
      <SlideInLeft>
        <Services />
      </SlideInLeft>
      <SlideInRight>
        <Contact />
      </SlideInRight>
    </div>
  );
}

export default Home;
