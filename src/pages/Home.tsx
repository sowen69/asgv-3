/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { motion, Variants } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useRef, useState } from 'react';
import Hero from '../components/Hero';
import SlideInRight from '../components/transitions/SlideInRight';
import SlideInLeft from '../components/transitions/SlideInLeft';
import MoreButton from '../components/MoreButton';
import FadeIn from '../components/transitions/FadeIn';
import Services from '../components/Services';
import Isosphere from '../components/Three/Isosphere';
import Cone from '../components/Three/Cone';
import Porsche from '../components/Three/Porsche';
import ImageWorker from '../config/image-worker';
import Sequence from '../components/scenes/Sequence';
import Sections from '../components/scenes/Section';
import Test from '../components/Test';

gsap.registerPlugin(ScrollTrigger);
const still = { frame: 0 };
const masterTL = gsap.timeline();
// const scrollContainer = document.getElementById('scrollContainer');
const sections = new Sections();
const seq = new Sequence('intro', 181);

function Home() {
  // const [AnimationCanvas, setAnimationCanvas] =
  //   useState<HTMLCanvasElement | null>(null);
  // const [LoaderDiv, setLoaderDiv] = useState<HTMLDivElement | null>();
  // const [ctx, setCtx] = useState();
  // // Run once on first render
  // useEffect(() => {
  //   setAnimationCanvas(document.getElementById('intro'));
  //   setLoaderDiv(document.getElementById('loadinDiv'));
  // }, []);

  // useEffect(() => {
  // }, [AnimationCanvas]);

  // setCtx(AnimationCanvas.getContext('2d'));
  // console.log(AnimationCanvas, LoaderDiv);

  //  const imgWorker: Worker = new ImageWorker();

  // frameFactor is a conversing rate between Gsap timeline (0-1)
  // and the number of images in the animation (Sequence.SequenceLength() i/i/ 747)
  //  const frameFactor: number = 1 / seq.GetSequenceLength();
  // console.log('Frame Factor: ', frameFactor);

  // // imgWorker.postMessage(seq.GetSequence());

  // function element(item: string, index: number) {
  //   const img = new Image();
  //   img.src = item;
  //   img.id = index.toString().padStart(4, '0');
  //   LoaderDiv.appendChild(img);
  // }
  // for (let i = 1; i < seq.GetSequenceLength() - 1; i += 1) {
  //   element(seq.GetSequenceFile(i), i);
  // }
  // // Gsap render
  // // Draws the image to canvas element
  // function render() {
  //   const viewportRatio =
  //     document.documentElement.clientWidth /
  //     document.documentElement.clientHeight;

  //   AnimationCanvas.width = document.documentElement.clientWidth;
  //   AnimationCanvas.height = document.documentElement.clientHeight;

  //   // if frame number is xx trigger animation
  //   // 0 = first frame, 1 = Last frame; i.e. Image count in directory
  //   // 1 / 1476 = 0.0006 'scrolls' Magic Number Alert

  //   const frameNo = parseInt(
  //     (masterTL.progress() / frameFactor).toFixed(0),
  //     10
  //   );
  //   for (let i = 0; i < sections.cards.length; i = +1) {
  //     if (frameNo >= sections.cards[i].in && frameNo <= sections.cards[i].out) {
  //       sections.cards[i].classList.add('show');
  //     } else {
  //       sections.cards[i].classList.remove('show');
  //     }
  //     // console.log("In No: ", sections.cards[i].in);
  //   }

  //   const img = document.getElementById(
  //     still.frame.toString().padStart(3, '0')
  //   ) as HTMLImageElement;

  //   let scale = 1;
  //   // Scale to Fit
  //   const scaleMin = Math.min(
  //     AnimationCanvas.width / img.width,
  //     AnimationCanvas.height / img.height
  //   );
  //   // Scale to Fill
  //   // console.log(AnimationCanvas.width);
  //   const scaleMax = Math.max(
  //     AnimationCanvas.width / img.width,
  //     AnimationCanvas.height / img.height
  //   );
  //   if (viewportRatio < 0.7) {
  //     scale = scaleMax * 0.8;
  //   } else {
  //     scale = scaleMax;
  //   }
  //   const x = AnimationCanvas.width / 2 - (img.width / 2) * scale;
  //   const y = AnimationCanvas.height / 2 - (img.height / 2) * scale;

  //   ctx?.drawImage(img, x, y, img.width * scale, img.height * scale);
  // }
  // // Gsap Tween
  // function seqFunc() {
  //   const seqTween = gsap.timeline();
  //   seqTween.to(still, {
  //     frame: seq.GetSequenceLength() - 1,
  //     // had to alter TypeDef file to allow for string
  //     snap: 'frame',
  //     scrollTrigger: {
  //       trigger: '.scroll',
  //       pin: true,
  //       end: '+=24000', // Adjust the time it takes to do the scrub
  //       scrub: 1, // Anything over 0 adds easing to the scrub
  //     },
  //     onUpdate: render,
  //   });
  //   return seqTween;
  // }

  // masterTL.add(seqFunc());
  // masterTL.timeScale(0.1);

  return (
    <div className="home px-7">
      <Test />
      {/* <Hero /> */}
      {/* <canvas id="intro" /> */}
      <SlideInRight>
        <section
          id="cgi"
          className="relative cgi h-screen w-full pt-20 bg-transparent"
        >
          <header className="absolute top-0 left-0 cgiHead text-right">
            <h2 className="text-5xl text-right text-white hidden">
              CGI AND PRODUCT
              <br />
              VISULISATION
            </h2>
            <FadeIn>
              <p className="cgi-leader text-right text-white ">
                Photo-realistic CGI graphics and animation give
                <br /> our customers unparalleled levels of creative <br />
                control highlighting their products.
              </p>
            </FadeIn>

            <p className="text-right mt-4">
              <MoreButton href="#/cgi" buttonText="READ MORE" />
            </p>
          </header>
        </section>
      </SlideInRight>
      <SlideInLeft>
        <section id="dap" className="relative h-screen w-full pt-20">
          <header className="absolute top-0 left-0 dapHead">
            <h2 className="text-5xl text-left text-white">
              DIGITAL ASSET
              <br />
              PIPELINE
            </h2>
            <FadeIn>
              <p className="dap-leader text-left text-white mr-10 mb-3">
                Produce marketing models directly
                <br />
                from your design engineering department.
              </p>
              <p className="text-white text-left mt-4">
                <MoreButton href="/dap" buttonText="Read More" />
              </p>
            </FadeIn>
          </header>
        </section>
      </SlideInLeft>
      <SlideInRight>
        <section id="spins" className="relative h-screen w-full">
          <header className="absolute top-0 left-0 spinsHead pt-8">
            <h2 className="text-5xl text-right text-white">
              E-COMMERCE
              <br />
              MODELS
            </h2>
            <FadeIn>
              <p className="spins-leader text-right text-white ml-5">
                We provide 3D and Photographic product
                <br />
                revolves of your products for integration
                <br />
                into e-commerce site.
              </p>
              <p className="text-right text-white mt-4">
                <MoreButton href="/spins" buttonText="Read More" />
              </p>
            </FadeIn>
          </header>
        </section>
      </SlideInRight>
      {/* <SlideInLeft> */}
      <Services />
      {/* </SlideInLeft> */}
      <SlideInRight>
        <section id="contact" className="contact h-screen sm:w-1/2 w-full">
          <header className="pt-8">
            <h2 className="text-5xl text-left text-white">Contact</h2>
          </header>
          <FadeIn>
            <p className="contact contact-leader text-left text-white">
              Tell us about your project and we&apos;d
              <br />
              be delighted to let you know if we can help.
            </p>
          </FadeIn>
          <FadeIn>
            <form className="">
              <div className="flex flex-col">
                <div className="mb-3">
                  <label
                    htmlFor="contactName"
                    className="form-label inline-block mb-1 text-sky-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-sky-300
        bg-slate-300 bg-clip-padding
        border border-solid border-gray-800
        rounded
        transition
        ease-in-out
        m-0
        focus:text-slate-900 focus:bg-slate-200 focus:border-blue-600 focus:outline-none
      "
                    id="contactName"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="contactCompany"
                    className="form-label inline-block mb-1 text-sky-300"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-sky-300
              bg-slate-300 bg-clip-padding
              border border-solid border-gray-800
              rounded
              transition
              ease-in-out
              m-0
              focus:text-slate-900 focus:bg-slate-200 focus:border-blue-600 focus:outline-none
            "
                    id="contactCompany"
                    placeholder="Company"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="contactEmail"
                    className="form-label inline-block mb-1 text-sky-300"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-sky-300
              bg-slate-300 bg-clip-padding
              border border-solid border-gray-800
              rounded
              transition
              ease-in-out
              m-0
              focus:text-slate-900 focus:bg-slate-200 focus:border-blue-600 focus:outline-none
            "
                    id="contactEmail"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-3 xl:w-96">
                  <label
                    htmlFor="contactMessage"
                    className="form-label inline-block mb-1 text-sky-300"
                  >
                    Your message
                  </label>
                  <textarea
                    className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-sky-300
        bg-slate-300 bg-clip-padding
        border border-solid border-gray-800
        rounded
        transition
        ease-in-out
        m-0
        focus:text-slate-900 focus:bg-slate-200 focus:border-blue-600 focus:outline-none
      "
                    id="exampleFormControlTextarea1"
                    rows={3}
                    placeholder="Your message"
                  />
                </div>
              </div>
              <MoreButton href="" buttonText="Submit" />{' '}
            </form>
            <p className="text-white mt-5">
              Alternatly you can email us at:&nbsp;
              <a className="text-sky-300" href="mailto:hello@asgvirtua.com">
                hello@asgvirtua.com
              </a>
            </p>
          </FadeIn>
        </section>
      </SlideInRight>
      <div className="hidden" id="loadinDiv" />
    </div>
  );
}

export default Home;
