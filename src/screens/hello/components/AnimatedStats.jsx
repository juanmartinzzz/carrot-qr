import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const AnimatedStats = ({ stats, brandColors }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.1 }
    });
  }, [controls]);

  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-4 gap-4"
      initial={{ opacity: 0 }}
      animate={controls}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <motion.div
            className="text-4xl font-bold mb-2"
            style={{
              background: `linear-gradient(135deg, ${brandColors[0]}, ${brandColors[1]})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            {stat.value}
          </motion.div>
          <div className="text-white/90 text-sm">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AnimatedStats;