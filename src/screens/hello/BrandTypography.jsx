import { motion } from 'framer-motion';

const BrandTypography = ({
  type = 'h1',
  brandColors,
  children,
  className = '',
  animate = true,
  delay = 0
}) => {
  const baseStyles = "font-bold tracking-tight";
  const typeStyles = {
    h1: "text-5xl md:text-7xl",
    h2: "text-4xl md:text-5xl",
    h3: "text-3xl md:text-4xl",
    p: "text-xl md:text-2xl leading-relaxed"
  };

  const gradientStyle = {
    background: `linear-gradient(135deg, ${brandColors[0]}, ${brandColors[1]})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  const Component = motion[type];

  return (
    <Component
      className={`${baseStyles} ${typeStyles[type]} ${className}`}
      style={gradientStyle}
      initial={animate ? { opacity: 0, y: 20 } : false}
      animate={animate ? { opacity: 1, y: 0 } : false}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </Component>
  );
};

export default BrandTypography;