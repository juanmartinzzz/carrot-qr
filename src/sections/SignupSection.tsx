import React from 'react';
import { motion } from 'framer-motion';
import SignupForm from '../components/SignupForm';
import { SignupFormData } from '../types';

const SignupSection: React.FC = () => {
  const handleSubmit = async (data: SignupFormData): Promise<void> => {
    // In a real app, this would send data to a server
    console.log('Form submitted:', data);
    
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(resolve, 1500);
    });
  };

  return (
    <section id="signup" className="section bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-6">
              Ready to <span className="gradient-text">Amplify</span> Your Business Presence?
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg mx-auto md:mx-0">
              Join thousands of businesses already leveraging customer reviews and social media to grow their brand.
            </p>
            <div className="hidden md:block">
              <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-success-500 flex items-center justify-center text-white mr-3">
                    <span className="font-bold text-lg">1</span>
                  </div>
                  <span className="font-medium">Sign Up</span>
                </div>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-success-500 flex items-center justify-center text-white mr-3">
                    <span className="font-bold text-lg">2</span>
                  </div>
                  <span className="font-medium">Setup QR</span>
                </div>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-success-500 flex items-center justify-center text-white mr-3">
                    <span className="font-bold text-lg">3</span>
                  </div>
                  <span className="font-medium">Start Growing</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <div className="md:w-1/2 flex justify-center">
            <SignupForm onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupSection;