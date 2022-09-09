import FadeIn from '../components/transitions/FadeIn';

import Contact from '../components/Contact';
import Dap from '../components/Dap';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Spins from '../components/Spins';
import Cgi from '../components/Cgi';

function Home() {
  //  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });

  return (
    <div className=".sitePad px-5">
      <Hero />
      <FadeIn>
        <Cgi />
      </FadeIn>
      <FadeIn>
        <Dap />
      </FadeIn>
      <FadeIn>
        <Spins />
      </FadeIn>
      <FadeIn>
        <Services />
      </FadeIn>
      <FadeIn>
        <Contact />
      </FadeIn>
    </div>
  );
}

export default Home;
