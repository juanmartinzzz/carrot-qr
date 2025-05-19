import { useState } from 'react';
import { motion } from 'framer-motion';
import { SiGoogle } from "@icons-pack/react-simple-icons";

const ReviewForm = ({ onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    onSubmit({ rating, comment });
    setIsSubmitting(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20"
    >
      <h3 className="text-2xl font-bold text-white mb-4">Share Your Experience</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center space-x-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <motion.button
              key={star}
              type="button"
              className="text-3xl focus:outline-none"
              onHoverStart={() => setHoveredRating(star)}
              onHoverEnd={() => setHoveredRating(0)}
              onClick={() => setRating(star)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className={star <= (hoveredRating || rating) ? 'text-yellow-400' : 'text-white/40'}>
                ★
              </span>
            </motion.button>
          ))}
        </div>

        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Tell us about your experience..."
          className="w-full h-32 bg-white/5 border border-white/20 rounded-lg p-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
        />

        <motion.button
          type="submit"
          disabled={isSubmitting || rating === 0}
          className="w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <SiGoogle className="text-xl" />
          <span>{isSubmitting ? 'Submitting...' : 'Submit Review'}</span>
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ReviewForm;