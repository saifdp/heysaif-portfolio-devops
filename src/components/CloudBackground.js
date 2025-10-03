import React from 'react';
import { motion } from 'framer-motion';

const CloudBackground = () => {
  const clouds = [
    { size: 'w-32 h-16', top: '10%', left: '10%', delay: 0 },
    { size: 'w-40 h-20', top: '20%', left: '70%', delay: 1 },
    { size: 'w-36 h-18', top: '40%', left: '15%', delay: 2 },
    { size: 'w-28 h-14', top: '60%', left: '80%', delay: 0.5 },
    { size: 'w-32 h-16', top: '75%', left: '25%', delay: 1.5 },
    { size: 'w-40 h-20', top: '85%', left: '60%', delay: 2.5 },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {clouds.map((cloud, index) => (
        <motion.div
          key={index}
          className={`absolute ${cloud.size} opacity-10`}
          style={{ top: cloud.top, left: cloud.left }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8 + index,
            repeat: Infinity,
            ease: "easeInOut",
            delay: cloud.delay,
          }}
        >
          <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 20 60 Q 20 40, 40 40 Q 40 20, 60 20 Q 80 20, 80 40 Q 100 40, 100 60 Q 100 80, 80 80 L 40 80 Q 20 80, 20 60"
              fill="currentColor"
              className="text-cloud-300"
            />
          </svg>
        </motion.div>
      ))}
      
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-3xl"
        style={{ top: '10%', left: '60%' }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl"
        style={{ bottom: '10%', left: '10%' }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default CloudBackground;

