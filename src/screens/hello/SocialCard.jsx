import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';

const SocialCard = ({
  title,
  description,
  icon: Icon,
  imageUrl,
  link,
  onHover,
  isHovered,
  rotation = 1,
  brandColors,
  // reward
}) => {
  // const words = reward ? reward.split(' ') : [];

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block text-white"
      onHoverStart={() => onHover(true)}
      onHoverEnd={() => onHover(false)}
    >
      <div className="relative h-[396px] mb-6">
        <img
          src={imageUrl}
          alt={title}
          className="w-full object-contain rounded-sm"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-white/70 to-20% to-transparent" />

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? rotation * -25 : 0
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Icon className="text-white drop-shadow-lg" size={120} />
          </motion.div>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-4">
        {title}
      </h2>

      {/* <p className="text-lg leading-relaxed mb-6">
        {description}
      </p> */}

      {/* {reward && (
        <motion.div
          className="relative overflow-hidden p-6 rounded-sm border border-white/40 bg-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative z-10">
            <motion.div
              className="text-3xl font-medium mb-2 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Gift className="text-yellow-500 mr-2 inline-block" size={48} /> SPECIAL REWARD <Gift className="text-yellow-500 mr-2 inline-block" size={48} />
            </motion.div>

            <div className="flex flex-wrap gap-2">
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  className="text-xl font-bold"
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.9 + (index * 0.4),
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      )} */}
    </motion.a>
  );
};

export default SocialCard;