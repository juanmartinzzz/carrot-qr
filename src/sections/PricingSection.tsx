import React from 'react';
import { motion } from 'framer-motion';
import { Pyramid as Origami, Carrot, Star, Bell, MessageSquare, FileText, LineChart, Tractor, Smartphone, Gift } from 'lucide-react';

const PricingSection: React.FC = () => {
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

            <div className="mb-8">
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold gradient-text">Free.99</span>

                <span className="text-gray-600 ml-2">/month</span>
              </div>
              <p className="text-gray-600">or $0/year (save 100%)</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <Star className="text-primary-600" size={24} />
                <span>Get more reviews</span>
              </li>

              <li className="flex items-center gap-3">
                <MessageSquare className="text-primary-600" size={24} />
                <span>Get more followers and people mentioning you on social media</span>
              </li>
            </ul>

            <button className="btn btn-primary w-full">Get Started for free</button>
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

            <div className="flex items-center gap-4 mb-6">
              <div className="h-16 w-16 rounded-2xl bg-accent-100 flex items-center justify-center">
                <Tractor className="h-8 w-8 text-accent-600" />
              </div>

              <div>
                <h3 className="text-2xl font-bold">Pro grower plan</h3>

                <p className="text-gray-600">For serious growth</p>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold">$30</span>

                <span className="text-gray-600 ml-2">/month</span>
              </div>
              <p className="text-gray-600">or $300/year (save 17%)</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                {/* <Star className="text-accent-600" size={24} /> */}
                <span className="font-bold">Everything in Rooter plan</span>
              </li>

              <li className="flex items-center gap-3">
                <Smartphone className="text-accent-600" size={24} />
                <span>Get your own website</span>
              </li>

              <li className="flex items-center gap-3">
                <Gift className="text-accent-600" size={24} />
                <span>Reward your customers for their reviews or mentions</span>
              </li>

              <li className="flex items-center gap-3">
                <Bell className="text-accent-600" size={24} />
                <span>Get notified when you get reviews or mentions on social media</span>
              </li>

              <li className="flex items-center gap-3">
                <LineChart className="text-accent-600" size={24} />
                <span>Get insights about your competitors</span>
              </li>
            </ul>

            <button className="btn btn-gradient w-full">Grow pro</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;