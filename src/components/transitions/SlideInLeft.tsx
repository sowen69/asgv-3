/* eslint-disable react/prop-types */
// React

// Libs
import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  // any props that come into the component
}
function SlideInLeft({ children }: Props) {
  const sectionVariants: Variants = {
    initial: { opacity: 0, x: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        type: 'spring',
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      variants={sectionVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: false, amount: 0.25 }}
      className="lefdtSlider"
    >
      {children}
    </motion.div>
  );
}

export default SlideInLeft;
