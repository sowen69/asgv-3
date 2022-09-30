/* eslint-disable jsx-a11y/heading-has-content */
import React, { useEffect, useMemo, useRef, useState } from 'react';
import gsap from 'gsap';

export interface AnimatedHeaderProps {
  sectionName: string;
  line1: string;
  line2: string;
  line3?: string | null;
  animationStyle?: string | null;
}

function AnimatedHeader({
  sectionName,
  line1,
  line2,
  line3,
  animationStyle,
}: AnimatedHeaderProps) {
  const line1H2 = useRef<HTMLHeadingElement | null>(null);
  const line2H2 = useRef<HTMLHeadingElement | null>(null);
  const header = useRef<HTMLDivElement | null>(null);

  // Take first line and split it into individual chars wrapped in <span>
  const finalLine1 = line1.split('');
  finalLine1.forEach((x, i) => {
    let char = '';
    if (x === ' ') {
      char = '&nbsp;';
    } else {
      char = x;
    }
    finalLine1[i] = `<span class="line1Span inline-block">${char}</span>`;
  });

  // Take second line and split it into individual chars wrapped in <span>
  const finalLine2 = line2.split('');
  finalLine2.forEach((x, i) => {
    let char = '';
    if (x === ' ') {
      char = '&nbsp;';
    } else {
      char = x;
    }
    finalLine2[i] = `<span class="line2Span inline-block">${char}</span>`;
  });
  // #region useEffects
  useEffect(() => {
    if (line1H2.current) {
      line1H2.current.innerHTML = finalLine1.join('').toString();
    }
    if (line2H2.current) {
      line2H2.current.innerHTML = finalLine2.join('').toString();
    }
  }, [finalLine1, finalLine2]);

  // Take third line, if supplied and split it into individual chars wrapped in <span>
  useEffect(() => {
    if (document.getElementById(`${sectionName}line3`) === null) {
      if (line3) {
        const finalLine3 = line3.split('');
        finalLine3.forEach((x, i) => {
          let char = '';
          if (x === ' ') {
            char = '&nbsp;';
          } else {
            char = x;
          }
          finalLine3[i] = `<span class="line3Span inline-block">${char}</span>`;
        });

        const line3H2 = document.createElement('h2');
        const theText: string = finalLine3.join('').toString();
        line3H2.innerHTML = theText;
        line3H2.id = `${sectionName}line3`;
        line3H2.className = 'text-white text-5xl h-10 overflow-y-hidden';
        header.current?.appendChild(line3H2);
        // return null;
      }
    }
  }, [line3, sectionName]);
  // #endregion

  // Attach the Gsap animation for when heading enters viewport
  // console.log(spans);

  useEffect(() => {
    const spans1 = document.getElementsByClassName('line1Span');
    const tl1 = gsap.timeline();
    tl1.fromTo(spans1, 0.2, { paddingTop: 40 }, { paddingTop: 0 }, '0');
    tl1.shiftChildren(1, true);

    const spans2 = document.getElementsByClassName('line2Span');
    const tl2 = gsap.timeline();
    tl2.fromTo(spans2, 0.2, { paddingTop: 40 }, { paddingTop: 0 }, '0.1');
    tl2.shiftChildren(1, true);

    const spans3 = document.getElementsByClassName('line3Span');
    const tl3 = gsap.timeline();
    tl3.fromTo(spans3, 0.2, { paddingTop: 40 }, { paddingTop: 0 }, '0.2');
    tl3.shiftChildren(1, true);
  }, []);

  return (
    <div ref={header} id="dad">
      <h2
        ref={line1H2}
        className="text-white text-5xl h-10 overflow-y-hidden"
      />
      <h2
        ref={line2H2}
        className="text-white text-5xl h-10 overflow-y-hidden"
      />
    </div>
  );
}

export default AnimatedHeader;
