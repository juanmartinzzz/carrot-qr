import React from 'react';
import { motion } from 'framer-motion';
import SignupForm from '../components/SignupForm';
import { SignupFormData } from '../types';

const SecondarySignupSection: React.FC = () => {
  const handleSubmit = async (data: SignupFormData): Promise<void> => {
    // In a real app, this would send data to a server
    console.log('Secondary form submitted:', data);
    
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(resolve, 1500);
    });
  };

  return (
    <section className="section bg-gradient-to-br from-accent-50 to-primary-50">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4">Start <span className="gradient-text">Growing</span> Today</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Join thousands of businesses already using CarrotQR to boost their online presence and customer engagement.
          </p>
        </motion.div>
        
        <div className="flex justify-center">
          <SignupForm onSubmit={handleSubmit} />
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-gray-500 text-sm mb-2">Trusted by businesses worldwide</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            <div className="h-8 w-24 bg-gray-400 rounded"></div>
            <div className="h-8 w-24 bg-gray-400 rounded"></div>
            <div className="h-8 w-24 bg-gray-400 rounded"></div>
            <div className="h-8 w-24 bg-gray-400 rounded"></div>
            <div className="h-8 w-24 bg-gray-400 rounded"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecondarySignupSection;