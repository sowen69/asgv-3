/* eslint-disable react/display-name */
/* eslint-disable import/no-named-as-default */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { forwardRef } from 'react';
import MoreButton from './MoreButton';

// export function AnimateCgi() {
//   gsap.registerPlugin(ScrollTrigger);

//   gsap.from('.cgi', {
//     x: -window.innerWidth,
//     opacity: 1,
//     duration: 2,
//     ease: 'none',
//     scrollTrigger: {
//       trigger: '.cgi',
//       start: 'top 70%', // [trigger] [scroller] positions
//       end: 'bottom 50%', // [trigger] [scroller] positions
//       // onUpdate: (self) => console.log('CGI progress:', self.progress),
//       id: 'cgi',
//       scrub: false,
//       pin: false,
//       // invalidateOnRefresh: true,
//     },
//   });
// }

const Cgi = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section
      ref={ref}
      id="cgi"
      className="cgi h-screen w-full relative pt-20 bg-transparent"
    >
      <header className="cgiHead">
        <h2 className="text-5xl text-right text-white">
          CGI AND PRODUCT
          <br />
          VISULISATION
        </h2>
        <p className="cgi-leader text-right text-white ">
          Photo-realistic CGI graphics and animation give
          <br /> our customers unparalleled levels of creative <br />
          control highlighting their products.
        </p>
        <p className="text-right mt-4">
          <MoreButton href="#/cgi" buttonText="READ MORE" />
        </p>
      </header>
    </section>
  );
});

export default Cgi;
