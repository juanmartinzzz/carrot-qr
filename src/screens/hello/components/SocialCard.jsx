import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import BrandTypography from './BrandTypography';

const SocialCard = ({
  title,
  description,
  icon: Icon,
  imageUrl,
  link,
  onHover,
  isHovered,
  rotation = 1,
  brandColors
}) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
      onHoverStart={() => onHover(true)}
      onHoverEnd={() => onHover(false)}
    >
      <GlassCard
        brandColors={brandColors}
        className="h-full"
        hoverEffect={false}
      >
        <div className="relative h-64 mb-6">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover rounded-sm transform transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{
                scale: isHovered ? 1.1 : 1,
                rotate: isHovered ? rotation * 5 : 0
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Icon className="text-7xl text-white drop-shadow-lg" />
            </motion.div>
          </div>
        </div>

        <h2
          className="text-3xl font-bold mb-4 text-white"
        >
          {title}
        </h2>

        <p className="text-white/90 text-lg leading-relaxed">
          {description}
        </p>
      </GlassCard>
    </motion.a>
  );
};

export default SocialCard;