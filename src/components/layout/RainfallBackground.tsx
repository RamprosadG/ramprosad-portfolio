import React, { useMemo } from "react";
import { motion } from "framer-motion";

const RainfallBackground: React.FC = () => {
  const rainDrops = useMemo(() => {
    return Array.from({ length: 50 }).map((_, i) => {
      const left = Math.random() * 100;
      const duration = 1 + Math.random() * 1.5;
      const delay = Math.random() * 2;
      const opacity = 0.05 + Math.random() * 0.15;
      const height = 15 + Math.random() * 20;
      return { id: i, left, duration, delay, opacity, height };
    });
  }, []);

  const bubbles = useMemo(() => {
    return Array.from({ length: 8 }).map((_, i) => {
      const size = 30 + Math.random() * 60; // 30px to 90px
      const left = Math.random() * 100;
      const duration = 15 + Math.random() * 15; // 15s to 30s
      const delay = Math.random() * 10;
      const opacity = 0.03 + Math.random() * 0.07;
      return { id: i, size, left, duration, delay, opacity };
    });
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Raindrops */}
      {rainDrops.map((drop) => (
        <motion.div
          key={`drop-${drop.id}`}
          className="absolute top-[-50px] w-[2px] bg-gradient-to-b from-transparent to-white rounded-full"
          style={{
            left: `${drop.left}%`,
            opacity: drop.opacity,
            height: `${drop.height}px`,
          }}
          animate={{
            y: ["0vh", "110vh"],
          }}
          transition={{
            duration: drop.duration,
            repeat: Infinity,
            delay: drop.delay,
            ease: "linear",
          }}
        />
      ))}

      {/* Bubbles */}
      {bubbles.map((bubble) => (
        <motion.div
          key={`bubble-${bubble.id}`}
          className="absolute bottom-[-100px] rounded-full border border-white bg-white/10"
          style={{
            left: `${bubble.left}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            opacity: bubble.opacity,
          }}
          animate={{
            y: ["0vh", "-120vh"],
            x: ["0px", "40px", "-40px", "0px"],
          }}
          transition={{
            y: { duration: bubble.duration, repeat: Infinity, ease: "linear", delay: bubble.delay },
            x: { duration: bubble.duration * 0.6, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" },
          }}
        />
      ))}
    </div>
  );
};

export default RainfallBackground;
