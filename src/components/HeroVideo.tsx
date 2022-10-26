/* eslint-disable prefer-rest-params */
/* eslint-disable @typescript-eslint/no-unused-vars */
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import { Suspense, useEffect, useRef } from 'react';
import dalmore from '../assets/dal_out.mp4';
gsap.registerPlugin(ScrollTrigger);

export default function HeroVideo() {
  const bgVideo = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    console.clear;
    const sections: HTMLElement[] = gsap.utils.toArray('.step');
    const numberOfSections = sections.length;
    const SectionLen = 400;
    const videoEnd = '+=' + (SectionLen * (numberOfSections * 3)).toString();
    // console.log(numberOfSections);
    // console.log(sections);
    // console.log(videoEnd);

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
      gsap.utils.toArray('#bgVideo').forEach((video: any) =>
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

  function videoScrub(videos: HTMLElement[], vars: gsap.TweenVars) {
    const video: HTMLVideoElement = gsap.utils.toArray(
      videos
    )[0] as HTMLVideoElement; // in case selector text is fed in.
    const once = (el: HTMLElement, event: any, fn: any) => {
        const onceFn = function (this: any) {
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
    <section className="h-full">
      <div id="background-container" className="background-container">
        <div id="video-container" className="video-container">
          <Suspense>
            <video ref={bgVideo} src={dalmore} id="bgVideo" />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
