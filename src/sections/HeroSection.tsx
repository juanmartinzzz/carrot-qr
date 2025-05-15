import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, ThumbsUp, MessageSquare, Instagram } from 'lucide-react';
import { HashLink } from '../components/HashLink';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="pt-28 pb-16 md:py-32 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-12 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-6">
              Boost Your Business with <span className="gradient-text">Customer-Driven</span> Reputation
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
              Leverage the power of customer reviews and social media posts to enhance your online presence and drive growth.
            </p>
            <p className="text-md mb-6">
              Starting at <span className="font-bold">$10</span> per month
            </p>
            <HashLink
              to="#signup"
              className="btn btn-primary inline-flex items-center gap-2 text-lg"
            >
              Get Started <ArrowRight size={20} />
            </HashLink>
          </motion.div>

          <motion.div
            className="md:w-1/2 relative min-h-[400px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Floating Elements */}
            <FloatingElement
              className="bg-white rounded-lg shadow-lg p-4 absolute top-0 left-10 max-w-[200px] z-20"
              delay={0}
              duration={5}
            >
              <div className="flex mb-2">
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              </div>
              <p className="text-sm text-gray-800">
                "Amazing service! Will definitely be coming back!"
              </p>
              <div className="mt-2 text-xs text-gray-500">- Sarah J.</div>
            </FloatingElement>

            <FloatingElement
              className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg p-4 absolute bottom-10 left-0 max-w-[220px] text-white z-10"
              delay={0.5}
              duration={6}
            >
              <div className="flex items-center mb-2">
                <Instagram className="h-5 w-5 mr-2" />
                <span className="font-bold">Instagram</span>
              </div>
              <p className="text-sm">
                "Just had the best experience at @BusinessName! #recommended"
              </p>
              <div className="mt-2 flex items-center text-xs opacity-80">
                <ThumbsUp className="h-4 w-4 mr-1" />
                <span className="mr-3">243</span>
                <MessageSquare className="h-4 w-4 mr-1" />
                <span>48</span>
              </div>
            </FloatingElement>

            <FloatingElement
              className="bg-white rounded-lg shadow-lg p-4 absolute top-20 right-0 max-w-[240px] z-30"
              delay={1}
              duration={5.5}
            >
              <div className="flex items-center mb-2">
                <div className="h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold mr-2">G</div>
                <span className="font-bold">Google Maps</span>
              </div>
              <div className="flex mb-1">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              </div>
              <p className="text-sm text-gray-800">
                "Best coffee shop in town! The staff is super friendly!"
              </p>
              <div className="mt-1 text-xs text-blue-500">View 32 more reviews</div>
            </FloatingElement>

            {/* Main Graphic - QR Code */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 md:w-64 md:h-64 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center shadow-xl">
              <div className="w-48 h-48 md:w-56 md:h-56 bg-white rounded-lg flex items-center justify-center">
                <div className="w-40 h-40 md:w-48 md:h-48 border-8 border-black rounded grid grid-cols-5 grid-rows-5 p-2 relative">
                  {/* Simple QR code pattern */}
                  <div className="col-span-2 row-span-2 bg-black rounded" />
                  <div className="col-span-1 row-span-2" />
                  <div className="col-span-2 row-span-2 bg-black rounded" />

                  <div className="col-span-2 row-span-1" />
                  <div className="col-span-1 row-span-1 bg-black rounded" />
                  <div className="col-span-2 row-span-1" />

                  <div className="col-span-2 row-span-2 bg-black rounded" />
                  <div className="col-span-1 row-span-2" />
                  <div className="col-span-2 row-span-2 bg-black rounded" />

                  <div className="col-span-5 row-span-5 absolute inset-0 flex items-center justify-center">
                    <div className="text-xs md:text-sm font-bold text-center">
                      {/* CarrotQR
                      <br />
                      Scan Me */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Notification */}
            <motion.div
              className="absolute bottom-0 right-10 bg-black text-white rounded-lg p-3 shadow-lg max-w-[200px] z-40"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.5 }}
            >
              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center text-white mr-2 flex-shrink-0">
                  <Star className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium">New Review Alert!</p>
                  <p className="text-xs text-gray-300 mt-1">
                    You just received a 5-star review from John D.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-primary-100 to-transparent rounded-bl-full opacity-50" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-t from-accent-100 to-transparent rounded-tr-full opacity-50" />
    </section>
  );
};

interface FloatingElementProps {
  className: string;
  children: React.ReactNode;
  delay: number;
  duration: number;
}

const FloatingElement: React.FC<FloatingElementProps> = ({ className, children, delay, duration }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      style={{
        animationName: 'float',
        animationDuration: `${duration}s`,
        animationTimingFunction: 'ease-in-out',
        animationIterationCount: 'infinite',
        animationDelay: `${delay}s`
      }}
    >
      {children}
    </motion.div>
  );
};

export default HeroSection;