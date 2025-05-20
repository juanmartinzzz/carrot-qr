import { motion } from "framer-motion";

const AnimatedBackground = ({ brandColors }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${brandColors[0]}10, transparent 70%)`
        }}
      />

      {/* Floating particles */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1"
          style={{
            background: `linear-gradient(135deg, ${brandColors[i % 3]}40, ${brandColors[(i + 1) % 3]}40)`,
            boxShadow: `0 0 20px ${brandColors[i % 3]}20`
          }}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 2 + 0.5
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight],
            opacity: [0.1, 0.3, 0.1],
            scale: [null, Math.random() * 2 + 0.5]
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}

      {/* Animated lines */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute h-[1px] w-full"
          style={{
            background: `linear-gradient(90deg, transparent, ${brandColors[i % 3]}20, transparent)`,
            top: `${(i + 1) * 15}%`
          }}
          initial={{ x: '-100%' }}
          animate={{ x: '200%' }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}

      {/* Glowing orbs */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute w-64 h-64 blur-3xl"
          style={{
            background: `radial-gradient(circle, ${brandColors[i % 3]}10, transparent 70%)`,
            left: `${(i + 1) * 20}%`,
            top: `${(i + 1) * 25}%`
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0]
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Animated shapes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute w-32 h-32"
          style={{
            border: `1px solid ${brandColors[i % 3]}20`,
            transform: `rotate(${i * 30}deg)`
          }}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotate: i * 30
          }}
          animate={{
            rotate: [i * 30, i * 30 + 360],
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;