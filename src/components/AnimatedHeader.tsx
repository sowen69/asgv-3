/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/heading-has-content */
import React, { useEffect, useMemo, useRef, useState } from 'react';
import spanify from '../util/spanify';
import attachGsap from '../util/attachGsap';

export interface AnimatedHeaderProps {
  sectionName: string;
  headers: string[];
  animationStyle: string;
}

function AnimatedHeader({
  sectionName,
  headers,
  animationStyle,
}: AnimatedHeaderProps) {
  const headlines = useRef<HTMLDivElement | null>();
  // let headlines: HTMLDivElement = (<div></div>) as HTMLDivElement;
  const numberOfLines = headers.length;
  const headline = spanify(headers, sectionName);

  useEffect(() => {
    headlines.current.innerHTML = headline;
    for (let i = 1; i <= numberOfLines; i += 1) {
      attachGsap(sectionName, animationStyle, i);
    }
  });

  // onMount(() => {
  // 	headlines.innerHTML = headline;
  // 	for (let i = 1; i <= numberOfLines; i++) {
  // 		attachGsap(sectionName, animationStyle, i);
  // 	}
  // });
  return <div id={`${sectionName}`} ref={headlines} />;
}
export default AnimatedHeader;
