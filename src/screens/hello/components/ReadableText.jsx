import { motion } from 'framer-motion';

const ReadableText = ({
  type = 'p',
  brandColors,
  children,
  className = '',
  animate = true,
  delay = 0,
  variant = 'solid' // 'gradient' | 'solid'
}) => {
  const baseStyles = "tracking-tight";
  const typeStyles = {
    h1: "text-5xl md:text-7xl font-black",
    h2: "text-4xl md:text-5xl font-bold",
    h3: "text-3xl md:text-4xl font-semibold",
    p: "text-xl md:text-2xl leading-relaxed font-light"
  };

  const getTextStyle = () => {
    if (variant === 'gradient') {
      return {
        background: `linear-gradient(135deg, ${brandColors[0]}, ${brandColors[1]})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
        textShadow: '0 2px 4px rgba(0,0,0,0.2)'
      };
    }
    return {
      color: '#ffffff',
      textShadow: `
        0 1px 0 rgba(0,0,0,0.8),
        0 2px 0 rgba(0,0,0,0.8),
        0 3px 0 rgba(0,0,0,0.8),
        0 4px 0 rgba(0,0,0,0.8),
        0 5px 10px rgba(0,0,0,0.8)
      `,
      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
    };
  };

  const Component = motion[type];

  return (
    <Component
      className={`${baseStyles} ${typeStyles[type]} ${className}`}
      style={getTextStyle()}
      initial={animate ? { opacity: 0, y: 20 } : false}
      animate={animate ? { opacity: 1, y: 0 } : false}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </Component>
  );
};

export default ReadableText;