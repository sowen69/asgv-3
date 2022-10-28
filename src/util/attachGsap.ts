import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

/**
 * NOT USED: 20/10/22 But might be usefull
 */

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
      start: 'top 80%',
      end: 'bottom middle',
      scrub: 1,
    },
  });

  // TODO: Name each span uniquely so gsap can target it?
  timeline.addLabel(`${sectionName}line${index}`);

  const spans = headings[0].childNodes;
  for (let i = 0; i <= spans.length; i += 1) {
    timeline.fromTo(
      `${sectionName}line${i}`,
      { right: '100%', opacity: 0 },
      { right: 0, opacity: 1, duration: 0.05, ease: 'power2.back' }
    );
    // .delay(0.5)
    // .shiftChildren(0.05 * i);
  }
  console.log(timeline.getChildren());
  return timeline;

  // TODO: Different animation styles
  // switch (animationStyle) {
  // 	case "bounce":
  // 		break;

  // 	default:
  // 		break;
  // }
}
