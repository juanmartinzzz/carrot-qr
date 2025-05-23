import React from 'react';
import { motion } from 'framer-motion';
import { SiInstagram } from '@icons-pack/react-simple-icons';
import BlackButton from '../components/interaction/BlackButton';
import OutlineButton from '../components/interaction/OutlineButton';
import { Carrot, Star, LineChart, Tractor, Smartphone, BellDot } from 'lucide-react';

const PricingAmountsPerMonthAndPerYear = ({amountPerMonth, amountPerYear, discountAmount}) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-4 items-baseline">
        <div className="flex flex-col items-baseline">
          <span className="text-4xl font-bold">${amountPerMonth}</span>
          <span className="text-gray-600 ml-2">per month</span>
        </div>
        <p className="text-gray-600 font-bold">or</p>
        <div className="flex flex-col items-baseline">
          <span className="text-4xl font-bold">${amountPerYear}</span>
          <span className="text-gray-600 ml-2">per year</span>
          <p className=" font-bold gradient-text">Save ${discountAmount}</p>
        </div>
      </div>
    </div>
  );
};

const FeatureAndIcon = ({feature, Icon, iconColorClass}) => {
  return (
    <li className="flex flex-col items-center gap-3">
      <Icon className={iconColorClass} size={40} />
      <span className="text-xl text-center">{feature}</span>
    </li>
  );
};

const PricingSection = () => {
  return (
    <section className="section bg-linear-to-br from-primary-50 to-accent-50">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4">
            Did you know... we can also help you keep track of the <span className="gradient-text">competition</span>?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Basic Plan */}
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-16 w-16 rounded-2xl bg-primary-100 flex items-center justify-center">
                <Carrot className="h-8 w-8 text-primary-600" />
              </div>

              <div>
                <h3 className="text-2xl font-bold">Rooter plan</h3>

                <p className="text-gray-600">Get more customers for free</p>
              </div>
            </div>

            <PricingAmountsPerMonthAndPerYear amountPerMonth={'Free.99'} amountPerYear={0} discountAmount={'100%  '} />

            <ul className="mt-8 flex flex-col gap-8">
              <FeatureAndIcon feature="Get more reviews" Icon={Star} iconColorClass="text-primary-600" />

              <FeatureAndIcon feature="Get more followers and people mentioning you on social media" Icon={SiInstagram} iconColorClass="text-primary-600" />
            </ul>

            <div className="mt-8 flex justify-center">
              <OutlineButton>Get Started for free</OutlineButton>
            </div>
          </motion.div>

          {/* Pro Plan */}
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute top-6 right-6">
              <div className="bg-accent-100 text-accent-600 px-4 py-1 rounded-full text-sm font-medium">
                Popular
              </div>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <div className="h-16 w-16 rounded-2xl bg-accent-100 flex items-center justify-center">
                <Tractor className="h-8 w-8 text-accent-600" />
              </div>

              <div>
                <h3 className="text-2xl font-bold">Pro grower plan</h3>

                <p className="text-gray-600">For accelerated growth</p>
              </div>
            </div>

            <PricingAmountsPerMonthAndPerYear amountPerMonth={30} amountPerYear={300} discountAmount={60} />

            <ul className="mt-8 flex flex-col gap-8">
              <FeatureAndIcon feature="Everything in Rooter plan" Icon={Carrot} iconColorClass="text-accent-600" />

              <FeatureAndIcon feature="Get your own website" Icon={Smartphone} iconColorClass="text-accent-600" />

              <FeatureAndIcon feature="Get notified when you get reviews or mentions on social media" Icon={BellDot} iconColorClass="text-accent-600" />

              <FeatureAndIcon feature="Get insights about your competitor's reviews and activity" Icon={LineChart} iconColorClass="text-accent-600" />
            </ul>

            <div className="mt-8 flex justify-center">
              <BlackButton>Grow pro</BlackButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;