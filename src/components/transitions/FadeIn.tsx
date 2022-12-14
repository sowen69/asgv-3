// React
import { ReactNode } from 'react';

// Libs
import { motion, Variants } from 'framer-motion';

interface Props {
  children: ReactNode;
  // any props that come into the component
}

function FadeIn({ children }: Props) {
  const paraVariants: Variants = {
    initial: { x: -50, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={paraVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: false, amount: 0.25 }}
    >
      {children}
    </motion.div>
  );
}

export default FadeIn;
