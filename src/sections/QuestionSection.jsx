import { useState } from 'react';
import { motion } from 'framer-motion';

const QuestionSection = ({ onAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showPromoterMessage, setShowPromoterMessage] = useState(false);

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    if (answer === 'no') {
      setShowPromoterMessage(true);
    } else {
      onAnswer();
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Do you want Google Maps Reviews and followers on your socials?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleAnswer('no')}
            className={`btn btn-gradient p-8 text-xl font-semibold ${
              selectedAnswer === 'no' ? 'ring-4 ring-primary-500' : ''
            }`}
          >
            Nope, I don't even have a business!
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleAnswer('yes')}
            className={`btn btn-gradient p-8 text-xl font-semibold ${
              selectedAnswer === 'yes' ? 'ring-4 ring-primary-500' : ''
            }`}
          >
            Yup I absolutely need those!
          </motion.button>
        </div>

        {showPromoterMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 text-center"
          >
            <p className="text-xl text-gray-700">
              We're looking for promoters -- if you know people who can use us contact me @{' '}
              <a
                href="https://twitter.com/carrotqr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 font-semibold underline"
              >
                @carrotqr
              </a>
              {' '}and let's talk
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default QuestionSection;