/* eslint-disable @typescript-eslint/no-unused-vars */
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import React, { Suspense, useEffect, useRef } from 'react';
import vid from '.././assets/bg.mp4';

gsap.registerPlugin(ScrollTrigger);

export default function HeroVideo() {
  const bgVideo = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    console.clear;
    const sections = gsap.utils.toArray('.step');
    const numberOfSections = sections.length;
    const SectionLen = 400;
    const videoEnd = '+=' + (SectionLen * (numberOfSections * 2.5)).toString();
    console.log(numberOfSections);
    console.log(sections);
    console.log(videoEnd);

    bgVideo.current?.load();
    bgVideo.current?.pause();
    if (bgVideo.current) bgVideo.current.currentTime = 0;

    sections.forEach((step, i) => {
      ScrollTrigger.create({
        trigger: step,
        start: 'bottom bottom',
        end: '+=400',
        pin: true,
        anticipatePin: 1,
      });
      gsap.utils.toArray('#bgVideo').forEach((video) =>
        videoScrub(video, {
          scrollTrigger: {
            trigger: video,
            start: 'center center',
            end: videoEnd,
            // markers: true,
            scrub: true,
            pin: true,
          },
        })
      );
    });
  }, []);
  function videoScrub(video, vars) {
    video = gsap.utils.toArray(video)[0]; // in case selector text is fed in.
    const once = (el, event, fn) => {
        const onceFn = function () {
          el.removeEventListener(event, onceFn);
          fn.apply(this, arguments);
        };
        el.addEventListener(event, onceFn);
        return onceFn;
      },
      prepFunc = () => {
        video.play();
        video.pause();
      },
      prep = () => once(document.documentElement, 'touchstart', prepFunc),
      src = video.currentSrc || video.src,
      tween = gsap.fromTo(
        video,
        { currentTime: 0 },
        {
          paused: true,
          immediateRender: false,
          currentTime: video.duration || 1,
          ease: 'none',
          ...vars,
        }
      ),
      resetTime = () =>
        (tween.vars.currentTime = video.duration || 1) && tween.invalidate();
    prep();
    video.readyState ? resetTime() : once(video, 'loadedmetadata', resetTime);
    return tween;
  }
  return (
    <section className="">
      <div id="background-container" className="background-container">
        <div id="video-container" className="video-container">
          <Suspense>
            <video ref={bgVideo} src="/bg.mp4" id="bgVideo" />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
