/* eslint-disable @typescript-eslint/no-unused-vars */
import gsap from 'gsap';
import video from '../assets/GIF-1_1.mp4';

export default function Hero() {
  gsap.from('#intro', { opacity: 0, scale: 0, duration: 3 });
  return (
    <section className="flex w-full h-screen px-20">
      <video
        id="intro"
        className="justify-self-center "
        src={video}
        autoPlay
        muted
        loop
      />
    </section>
  );
}
