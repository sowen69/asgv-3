import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({
  toggleActions: 'play reset reset none',
});
export default function attachGsap(
  sectionName: string,
  animationStyle: string,
  index: number
) {
  const headings = document.getElementsByClassName(
    `${sectionName}line${index}`
  );

  const timeline = gsap.timeline({
    scrollTrigger: {
      id: `#${sectionName}`,
      trigger: `#${sectionName}`,
      // pin: true, // pin the trigger element while active
      start: 'top 80%', // when the top of the trigger hits the top of the viewport
      end: 'bottom middle', // end after scrolling 500px beyond the start

      // scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    },
  });

  // TODO: Name each span uniquely so gsap can target it?
  timeline.addLabel(`${sectionName}line${index}`);

  const spans = headings[0].childNodes;
  for (let i = 0; i <= spans.length; i += 1) {
    timeline.fromTo(
      `.char${i}`,
      { paddingTop: '2.75rem', opacity: 0 },
      { paddingTop: 0, opacity: 1, duration: 0.05, ease: 'power2.back' }
    );
    // .delay(0.5)
    // .shiftChildren(0.05 * i);
  }
  // console.log(timeline.getChildren());
  return timeline;

  // TODO: Different animation styles
  // switch (animationStyle) {
  // 	case "bounce":
  // 		break;

  // 	default:
  // 		break;
  // }
}
