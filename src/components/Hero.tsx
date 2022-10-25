/* eslint-disable @typescript-eslint/no-unused-vars */
import gsap from 'gsap';
import video from '../assets/GIF-1_1.mp4';

export default function Hero() {
  gsap.from('#intro', { opacity: 0, scale: 0, duration: 3 });
  return (
    <section className="flex flex-col w-full h-screen px-20">
      <video
        id="intro"
        className="justify-self-center "
        src={video}
        autoPlay
        muted
        loop
      />
      <h1 className="text-5xl text-center text-white">
        Let ASG Virtua show you what’s possible.
      </h1>
    </section>
  );
}
