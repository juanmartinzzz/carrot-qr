import { useState } from 'react';
import { motion } from 'framer-motion';
import { SiX } from '@icons-pack/react-simple-icons';
import { HashLink } from '../components/HashLink';

const QuestionSection = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showPromoterMessage, setShowPromoterMessage] = useState(false);

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    if (answer === 'no') {
      setShowPromoterMessage(true);
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
          <h2 className="mt-4 text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Q: do you want more Google Maps reviews and followers on your socials?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleAnswer('no')}
            className={`btn btn-gradient p-8 text-xl font-semibold ${selectedAnswer === 'no' ? 'ring-4 ring-primary-500' : ''
              }`}
          >
            Nope, I don't even have a business!
          </motion.button>

          <HashLink
            to="#quick-how-it-works">

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`btn btn-gradient p-8 text-xl font-semibold ${selectedAnswer === 'yes' ? 'ring-4 ring-primary-500' : ''
                }`}
            >
              Yeah I absolutely need those!
            </motion.button>
          </HashLink>
        </div>

        {showPromoterMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 text-center"
          >
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              <span className="font-bold">I'm looking for promoters</span> -- if you're a marketing wizard and want to partner with me to grow this business: let's talk! Contact me at {' '}
              <a
                href="https://x.com/juanito_asap"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 font-semibold underline"
              >
                @juanito_asap
              </a>
              {' '} on <SiX className="inline-block" size={16} />
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default QuestionSection;