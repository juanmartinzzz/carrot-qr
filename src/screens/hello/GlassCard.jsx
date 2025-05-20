import { motion } from 'framer-motion';
import React from 'react';

const GlassCard = ({
  children,
  className = '',
  brandColors,
  hoverEffect = true,
  onClick,
  owner
}) => {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      whileHover={hoverEffect ? { scale: 1.01, transition: { duration: 0.2 } } : {}}
      onClick={onClick}
    >
      {/* Modern glass effect */}
      <div
        className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-sm"
        style={{
          background: `linear-gradient(135deg, ${brandColors[0]}15, ${brandColors[1]}15)`,
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
        }}
      />

      {/* Subtle border */}
      <div
        className="absolute inset-0 rounded-sm p-[1px]"
        style={{
          background: `linear-gradient(135deg, ${brandColors[0]}30, ${brandColors[1]}30)`
        }}
      />

      {/* Content with brand colors */}
      <div
        className="relative p-6 rounded-lg"
        style={{
          color: owner?.brand_colour_1 || brandColors[0]
        }}
      >
        {React.Children.map(children, child => {
          if (React.isValidElement(child)) {
            // Apply brand colors to text elements
            if (child.type === 'p' || child.type === 'span') {
              return React.cloneElement(child, {
                style: {
                  ...child.props.style,
                  color: owner?.brand_colour_2 || brandColors[1]
                }
              });
            }
            // Remove padding from images
            if (child.type === 'img') {
              return React.cloneElement(child, {
                className: `${child.props.className || ''} p-0`
              });
            }
          }
          return child;
        })}
      </div>
    </motion.div>
  );
};

export default GlassCard;