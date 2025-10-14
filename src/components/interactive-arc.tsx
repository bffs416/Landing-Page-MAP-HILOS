'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const NUM_POINTS = 40;
const RADIUS = 200; // in pixels

const InteractiveArc = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {Array.from({ length: NUM_POINTS }).map((_, i) => {
        // We want to create a semicircle from -90 to +90 degrees, but we'll use radians
        // Start from PI (180 deg) to 2*PI (360 deg) for a bottom semi-circle
        const angle = Math.PI + (i / (NUM_POINTS - 1)) * Math.PI;

        const x = RADIUS * Math.cos(angle);
        const y = RADIUS * Math.sin(angle);

        return (
          <motion.div
            key={i}
            className="group absolute w-3 h-3"
            style={{
              left: '50%',
              top: '50%',
              transform: `translate(${x}px, ${y}px)`,
            }}
          >
            <motion.div
              className="absolute h-full w-full rounded-full bg-primary/60 transition-all duration-300 group-hover:scale-[2.5] group-hover:bg-primary/90 group-hover:shadow-[0_0_20px_5px] group-hover:shadow-primary/50"
              initial={{ scale: 0.5, opacity: 0.5 }}
              animate={{
                scale: [1, 1.6, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
                delay: i * 0.09,
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default InteractiveArc;
