import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin } from 'lucide-react';

const SocialBanner = () => {
  return (
    <section className="bg-linear-to-r from-primary-50 to-accent-50 py-6">
      <div className="container-custom">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg font-medium text-center md:text-left">
            Follow our journey and get in touch with us on social media
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com/carrotqr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 btn btn-primary"
            >
              <Twitter size={20} />
              <span>Twitter</span>
            </a>
            <a
              href="https://linkedin.com/company/carrotqr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 btn btn-primary"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialBanner;