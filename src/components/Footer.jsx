import React from 'react';
import { motion } from 'framer-motion';
import { QrCode, MapPin } from 'lucide-react';
import { SiFacebook, SiInstagram, SiX } from '@icons-pack/react-simple-icons';

const Footer = () =>  {
  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <QrCode className="h-8 w-8 text-primary-600" />
              <span className="font-bold text-xl">Carrot QR</span>
            </div>

            <p className="text-gray-600 mb-4">
              Is a service I created to help local businesses grow and connect with their customers. If you're looking to get more reviews and grow your business, this is for you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <h3 className="font-bold text-lg mb-4">Contact me</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-600">
                <SiX size={18} />
                <a href="https://x.com/juanito_asap" className="text-primary-600">@juanito_asap</a>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <MapPin size={18} />
                <span>I'm based in the beautiful city of Montréal, Canada</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <h3 className="font-bold text-lg mb-4">Check out our socials</h3>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-xs hover:shadow-md transition-shadow">
                <SiInstagram size={20} className="text-gray-700" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-xs hover:shadow-md transition-shadow">
                <SiFacebook size={20} className="text-gray-700" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-xs hover:shadow-md transition-shadow">
                <SiX size={20} className="text-gray-700" />
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