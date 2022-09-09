// React
import { useState } from 'react';

// Libs
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

function FadeIn({ children }) {
  const [inView, setInview] = useState(false);

  const transition = useSpring({
    delay: 1000,
    to: {
      y: !inView ? 44 : 0,
      opacity: !inView ? 0 : 1,
    },
  });
  return (
    <Waypoint onEnter={() => setInview(true)}>
      <animated.div style={transition}>{children}</animated.div>
    </Waypoint>
  );
}

export default FadeIn;
