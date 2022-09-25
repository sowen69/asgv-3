import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Sequence from './scenes/Sequence';
import Sections from './scenes/Section';

function Test() {
  gsap.registerPlugin(ScrollTrigger);
  const still = { frame: 0 };
  const masterTL = gsap.timeline();
  const scrollContainer = document.getElementById('scrollContainer');
  const sections = new Sections();
  const seq = new Sequence('intro', 181);

  const canv = useRef<HTMLCanvasElement>(null);
  const loader = useRef<HTMLDivElement>(null);
  const ctx = canv.current?.getContext('2d');
  // useEffect(() => {
  //   canv.current = document.getElementById('intro');
  //   loader.current = document.getElementById('loadinto');
  //   return () => {};
  // }, []);

  console.log(canv, loader, ctx);
  // frameFactor is a conversing rate between Gsap timeline (0-1)
  // and the number of images in the animation (Sequence.SequenceLength() i/i/ 747)
  const frameFactor: number = 1 / seq.GetSequenceLength();
  console.log('Frame Factor: ', frameFactor);

  function element(item: string, index: number) {
    const img = new Image();
    img.src = item;
    img.id = index.toString().padStart(4, '0');
    loader.current?.appendChild(img);
    console.log(item);
  }
  useEffect(() => {
    for (let i = 1; i < seq.GetSequenceLength() - 1; i += 1) {
      element(seq.GetSequenceFile(i), i);
    }

    return () => {};
  }, [seq]);

  // Gsap render
  // Draws the image to canvas element
  function render() {
    const viewportRatio =
      document.documentElement.clientWidth /
      document.documentElement.clientHeight;

    canv.current.width = document.documentElement.clientWidth;
    canv.current.height = document.documentElement.clientHeight;

    // if frame number is xx trigger animation
    // 0 = first frame, 1 = Last frame; i.e. Image count in directory
    // 1 / 1476 = 0.0006 'scrolls' Magic Number Alert

    const frameNo = parseInt(
      (masterTL.progress() / frameFactor).toFixed(0),
      10
    );
    for (let i = 0; i < sections.cards.length; i = +1) {
      if (frameNo >= sections.cards[i].in && frameNo <= sections.cards[i].out) {
        sections.cards[i].classList.add('show');
      } else {
        sections.cards[i].classList.remove('show');
      }
      // console.log("In No: ", sections.cards[i].in);
    }

    const img = document.getElementById(
      still.frame.toString().padStart(3, '0')
    ) as HTMLImageElement;

    let scale = 1;
    // Scale to Fit
    const scaleMin = Math.min(
      canv.current.width / img.width,
      canv.current.height / img.height
    );
    // Scale to Fill
    // console.log(AnimationCanvas.width);
    const scaleMax = Math.max(
      canv.current.width / img.width,
      canv.current.height / img.height
    );
    if (viewportRatio < 0.7) {
      scale = scaleMax * 0.8;
    } else {
      scale = scaleMax;
    }
    const x = canv.current.width / 2 - (img.width / 2) * scale;
    const y = canv.current.height / 2 - (img.height / 2) * scale;

    ctx?.drawImage(img, x, y, img.width * scale, img.height * scale);
  }
  // Gsap Tween
  function seqFunc() {
    const seqTween = gsap.timeline();
    seqTween.to(still, {
      frame: seq.GetSequenceLength() - 1,
      // had to alter TypeDef file to allow for string
      snap: 'frame',
      scrollTrigger: {
        trigger: '.scroll',
        pin: true,
        end: '+=24000', // Adjust the time it takes to do the scrub
        scrub: 1, // Anything over 0 adds easing to the scrub
      },
      onUpdate: render,
    });
    return seqTween;
  }

  masterTL.add(seqFunc());
  masterTL.timeScale(0.1);

  return (
    <div id="scrollContainer">
      <canvas ref={canv} id="intro" />
      <div ref={loader} id="loadinto" />
    </div>
  );
}

export default Test;
