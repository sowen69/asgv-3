import { useEffect, useRef } from 'react';
import attachGsap from '../util/attachGsap';
import assembleHeader from '../util/assembleHeader';

export interface SlideInHeaderProps {
  sectionName: string;
  headers: string[];
  animationStyle: string;
}

function SlideInHeader({
  sectionName,
  headers,
  animationStyle,
}: SlideInHeaderProps) {
  const headlines = useRef<HTMLDivElement | null>(null);
  const numberOfLines = headers.length;
  // const headline = spanify(headers, sectionName);
  const headline = assembleHeader(headers, sectionName);

  //  wrap each line in h2
  //  add a class for gsap to target
  //  attach a gsap animation
  //  return a div
  useEffect(() => {
    if (headlines.current) headlines.current.innerHTML = headline;
    for (let i = 1; i <= numberOfLines; i += 1) {
      attachGsap(sectionName, animationStyle, i);
    }
  });
  return <div id={`${sectionName}`} ref={headlines} />;
}
export default SlideInHeader;

// function addGsap(sectionName, animationStyle, i){
//   return
// }
