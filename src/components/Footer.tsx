import React from 'react';
import { motion } from 'framer-motion';
import { QrCode, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { HashLink } from './HashLink';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <QrCode className="h-8 w-8 text-primary-600" />
              <span className="font-bold text-xl">CarrotQR</span>
            </div>
            <p className="text-gray-600 mb-4">
              Empowering businesses to enhance their online presence through customer reviews and social media engagement.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <HashLink to="#hero" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Home
                </HashLink>
              </li>
              <li>
                <HashLink to="#features" className="text-gray-600 hover:text-primary-600 transition-colors">
                  How It Works
                </HashLink>
              </li>
              <li>
                <HashLink to="#signup" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Get Started
                </HashLink>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-600">
                <Mail size={18} />
                <span>contact@carrotqr.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <MapPin size={18} />
                <span>123 Business Ave, Digital City</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-xs hover:shadow-md transition-shadow">
                <Instagram size={20} className="text-gray-700" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-xs hover:shadow-md transition-shadow">
                <Facebook size={20} className="text-gray-700" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-xs hover:shadow-md transition-shadow">
                <Twitter size={20} className="text-gray-700" />
              </a>
            </div>
          </motion.div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} CarrotQR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;